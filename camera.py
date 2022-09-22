"""Support for IP Cameras."""
from __future__ import annotations

from collections.abc import Mapping, Iterable
from contextlib import closing
from requests.auth import HTTPBasicAuth, HTTPDigestAuth
import asyncio
import logging
import httpx
import aiohttp
from aiohttp import web
import async_timeout
import requests
from typing import Any
import yarl


from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.aiohttp_client import (
    async_aiohttp_proxy_web,
    async_get_clientsession,
)
from homeassistant.components.camera import (
    SUPPORT_STREAM,
    Camera,
)
from homeassistant.const import (
    CONF_AUTHENTICATION,
    CONF_NAME,
    CONF_PASSWORD,
    CONF_USERNAME,
    CONF_VERIFY_SSL,
    HTTP_BASIC_AUTHENTICATION,
    HTTP_DIGEST_AUTHENTICATION,
)
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import TemplateError
from homeassistant.helpers import config_validation as cv, template as template_helper
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.httpx_client import get_async_client
from homeassistant.helpers.reload import async_setup_reload_service
from homeassistant.helpers.typing import ConfigType, DiscoveryInfoType

from .const import (
    DOMAIN_GENERIC,
    DOMAIN_MJPEG,
    STORAGE_FILE
)

from .helpers import setup_platform, load_from_storage
from .const import DOMAIN

CONF_CONTENT_TYPE = "content_type"
CONF_LIMIT_REFETCH_TO_URL_CHANGE = "limit_refetch_to_url_change"
CONF_STILL_IMAGE_URL = "still_image_url"
CONF_STREAM_SOURCE = "stream_source"
CONF_FRAMERATE = "framerate"
CONF_RTSP_TRANSPORT = "rtsp_transport"
FFMPEG_OPTION_MAP = {CONF_RTSP_TRANSPORT: "rtsp_transport"}
ALLOWED_RTSP_TRANSPORT_PROTOCOLS = {"tcp", "udp", "udp_multicast", "http"}

DEFAULT_NAME = "Generic Camera"
GET_IMAGE_TIMEOUT = 10

CONF_USE_WALLCLOCK_AS_TIMESTAMPS = "use_wallclock_as_timestamps"

_LOGGER = logging.getLogger(__name__)


async def async_setup_platform(hass, config, async_add_devices, discovery_info=None):
    """Set up the generic camera platform."""
    return setup_platform(hass, DOMAIN, config, async_add_devices, {DOMAIN_GENERIC: GenericCamera, DOMAIN_MJPEG: MjpegCamera})


async def async_setup_entry(hass, config_entry, async_add_entities):
    """Set up the generic camera from a config entry."""
    #Load up camera entities from storage. 

    registered_cameras = await load_from_storage(hass, STORAGE_FILE)
    for cam_data in registered_cameras: 
        if cam_data["integration"] == DOMAIN_GENERIC: 
            async_add_entities([GenericCamera(hass, cam_data, cam_data["unique_id"])]) 
        elif cam_data["integration"] == DOMAIN_MJPEG: 
            async_add_entities([MjpegCamera(hass, cam_data, cam_data["unique_id"])]) 


    await async_setup_platform(hass, {}, async_add_entities)



def generate_auth(device_info: Mapping[str, Any]) -> httpx.Auth | None:
    """Generate httpx.Auth object from credentials."""
    username: str | None = device_info.get(CONF_USERNAME)
    password: str | None = device_info.get(CONF_PASSWORD)
    authentication = device_info.get(CONF_AUTHENTICATION)
    if username and password:
        if authentication == HTTP_DIGEST_AUTHENTICATION:
            return httpx.DigestAuth(username=username, password=password)
        return httpx.BasicAuth(username=username, password=password)
    return None


# Class for generic gamera integration

class GenericCamera(Camera):
    """A generic implementation of an IP camera."""

    def __init__(self,
        hass: HomeAssistant,
        device_info: Mapping[str, Any],
        identifier: str
    ) -> None:
        
        """Initialize a generic camera."""
        _LOGGER.info("Camera cool Generic")
        super().__init__()
        self.hass = hass
        self._attr_unique_id = identifier
        self._authentication = device_info.get(CONF_AUTHENTICATION)
        self._name = device_info.get(CONF_NAME)
        
        self._still_image_url = device_info.get(CONF_STILL_IMAGE_URL)
        if (not isinstance(self._still_image_url, template_helper.Template) and self._still_image_url):
            self._still_image_url = cv.template(self._still_image_url)

        self._stream_source = device_info.get(CONF_STREAM_SOURCE)
        if self._stream_source:
            if not isinstance(self._stream_source, template_helper.Template):
                self._stream_source = cv.template(self._stream_source)
            self._stream_source.hass = hass
        
        self._limit_refetch = device_info[CONF_LIMIT_REFETCH_TO_URL_CHANGE]
        self._attr_frame_interval = 1 / device_info[CONF_FRAMERATE]
        self._supported_features = SUPPORT_STREAM if self._stream_source else 0
        self.content_type = device_info[CONF_CONTENT_TYPE]
        self.verify_ssl = device_info[CONF_VERIFY_SSL]
        if device_info.get(CONF_RTSP_TRANSPORT):
            self.stream_options[FFMPEG_OPTION_MAP[CONF_RTSP_TRANSPORT]] = device_info[
                CONF_RTSP_TRANSPORT
            ]

        username = device_info.get(CONF_USERNAME)
        password = device_info.get(CONF_PASSWORD)
        self._username = username
        self._password = password

        if username and password:
            if self._authentication == HTTP_DIGEST_AUTHENTICATION:
                self._auth = httpx.DigestAuth(username=username, password=password)
            else:
                self._auth = httpx.BasicAuth(username=username, password=password)
        else:
            self._auth = None

        self._last_url = None
        self._last_image = None

    @property
    def supported_features(self):
        """Return supported features for this camera."""
        return self._supported_features

    async def async_camera_image(
        self, width: int | None = None, height: int | None = None
    ) -> bytes | None:
        """Return a still image response from the camera."""
        if not self._still_image_url:
            if not self.stream:
                await self.async_create_stream()
            if self.stream:
                return await self.stream.async_get_image(width, height)
            return None
        try:
            url = self._still_image_url.async_render(parse_result=False)
        except TemplateError as err:
            _LOGGER.error("Error parsing template %s: %s", self._still_image_url, err)
            return self._last_image

        if url == self._last_url and self._limit_refetch:
            return self._last_image

        try:
            async_client = get_async_client(self.hass, verify_ssl=self.verify_ssl)
            response = await async_client.get(
                url, auth=self._auth, timeout=GET_IMAGE_TIMEOUT
            )
            response.raise_for_status()
            self._last_image = response.content
        except httpx.TimeoutException:
            _LOGGER.error("Timeout getting camera image from %s", self._name)
            return self._last_image
        except (httpx.RequestError, httpx.HTTPStatusError) as err:
            _LOGGER.error("Error getting new camera image from %s: %s", self._name, err)
            return self._last_image

        self._last_url = url
        return self._last_image

    @property
    def name(self):
        """Return the name of this device."""
        return self._name

    async def stream_source(self):
        """Return the source of the stream."""
        if self._stream_source is None:
            return None

        try:
            stream_url = self._stream_source.async_render(parse_result=False)
            url = yarl.URL(stream_url)
            if (
                not url.user
                and not url.password
                and self._username
                and self._password
                and url.is_absolute()
            ):
                url = url.with_user(self._username).with_password(self._password)
            return str(url)
        except TemplateError as err:
            _LOGGER.error("Error parsing template %s: %s", self._stream_source, err)
            return None



class MjpegCamera(Camera):
    """An implementation of an IP camera that is reachable over a URL."""

    def __init__(
        self,
        hass, 
        device_info,
        unique_id
    ) -> None:
        """Initialize a MJPEG camera."""
        super().__init__()
        _LOGGER.info("Camera cool MJPEG") 
        self.hass = hass
        self._attr_name = device_info[CONF_NAME]
        self._authentication = device_info.get(CONF_AUTHENTICATION)
        self._still_image_url = device_info.get(CONF_STILL_IMAGE_URL)    
        self._mjpeg_url = device_info.get(CONF_STREAM_SOURCE) 
        
        self._auth = None
        self._username = device_info.get(CONF_USERNAME)
        self._password = device_info.get(CONF_PASSWORD)
        if (
            self._username
            and self._password
            and self._authentication == HTTP_BASIC_AUTHENTICATION
        ):
            self._auth = aiohttp.BasicAuth(self._username, password=self._password)
        
        self._verify_ssl = device_info.get(CONF_VERIFY_SSL, True)
        self._attr_frame_interval = 1 / device_info[CONF_FRAMERATE]

        if unique_id is not None:
            self._attr_unique_id = unique_id
        if device_info is not None:
            self._attr_device_info = device_info
        
        

    async def async_camera_image(
        self, width: int | None = None, height: int | None = None
    ) -> bytes | None:
        """Return a still image response from the camera."""
        # DigestAuth is not supported
        if (
            self._authentication == HTTP_DIGEST_AUTHENTICATION
            or self._still_image_url is None
        ):
            image = await self.hass.async_add_executor_job(self.camera_image)
            return image

        websession = async_get_clientsession(self.hass, verify_ssl=self._verify_ssl)
        try:
            async with async_timeout.timeout(10):
                response = await websession.get(self._still_image_url, auth=self._auth)

                image = await response.read()
                return image

        except asyncio.TimeoutError:
            _LOGGER.error("Timeout getting camera image from %s", self.name)

        except aiohttp.ClientError as err:
            _LOGGER.error("Error getting new camera image from %s: %s", self.name, err)

        return None

    def camera_image(
        self, width: int | None = None, height: int | None = None
    ) -> bytes | None:
        """Return a still image response from the camera."""
        if self._username and self._password:
            if self._authentication == HTTP_DIGEST_AUTHENTICATION:
                auth: HTTPDigestAuth | HTTPBasicAuth = HTTPDigestAuth(
                    self._username, self._password
                )
            else:
                auth = HTTPBasicAuth(self._username, self._password)
            req = requests.get(
                self._mjpeg_url,
                auth=auth,
                stream=True,
                timeout=10,
                verify=self._verify_ssl,
            )
        else:
            req = requests.get(self._mjpeg_url, stream=True, timeout=10)

        with closing(req) as response:
            return extract_image_from_mjpeg(response.iter_content(102400))

    async def handle_async_mjpeg_stream(
        self, request: web.Request
    ) -> web.StreamResponse | None:
        """Generate an HTTP MJPEG stream from the camera."""
        # aiohttp don't support DigestAuth -> Fallback
        if self._authentication == HTTP_DIGEST_AUTHENTICATION:
            return await super().handle_async_mjpeg_stream(request)

        # connect to stream
        websession = async_get_clientsession(self.hass, verify_ssl=self._verify_ssl)
        stream_coro = websession.get(self._mjpeg_url, auth=self._auth)

        return await async_aiohttp_proxy_web(self.hass, request, stream_coro)



def extract_image_from_mjpeg(stream: Iterable[bytes]) -> bytes | None:
    """Take in a MJPEG stream object, return the jpg from it."""
    data = b""

    for chunk in stream:
        data += chunk
        jpg_end = data.find(b"\xff\xd9")

        if jpg_end == -1:
            continue

        jpg_start = data.find(b"\xff\xd8")

        if jpg_start == -1:
            continue

        return data[jpg_start : jpg_end + 2]

    return None
