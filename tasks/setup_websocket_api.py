"""Register WS API endpoints for HACS."""
from __future__ import annotations
from email.policy import default


from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant
import homeassistant.helpers.config_validation as cv
import voluptuous as vol

from homeassistant.helpers import entity_registry as er

from homeassistant.components.websocket_api import (
    websocket_command,
    result_message,
    event_message,
    async_register_command,
    ActiveConnection
)

from .base import CameraDashboardTask
from ..base import CameraBase
from ..const import DOMAIN_GENERIC, DOMAIN, SetupStage, STORAGE_FILE, CONF_INTEGRATION, CONF_RTSP_TRANSPORT
from ..helpers import create_entity, load_from_storage, save_to_storage


from homeassistant.const import (
    CONF_ENTITY_ID,
    CONF_AUTHENTICATION,
    CONF_NAME,
    CONF_PASSWORD,
    CONF_USERNAME,
    CONF_VERIFY_SSL,
    HTTP_BASIC_AUTHENTICATION,
    HTTP_DIGEST_AUTHENTICATION,
)
from homeassistant.components.generic.const import (
    CONF_STILL_IMAGE_URL,
    CONF_STREAM_SOURCE, 
    CONF_CONTENT_TYPE,
    CONF_FRAMERATE,
    CONF_LIMIT_REFETCH_TO_URL_CHANGE,
    CONF_STILL_IMAGE_URL,
    CONF_STREAM_SOURCE
)

from homeassistant.components.camera import DEFAULT_CONTENT_TYPE


import logging
_LOGGER = logging.getLogger(__name__)


async def async_setup_task(hacs: CameraBase, hass: HomeAssistant) -> Task:
    """Set up this task."""
    return Task(hacs=hacs, hass=hass)


class Task(CameraDashboardTask):
    """Setup the HACS websocket API."""

    stages = [SetupStage.SETUP]

    async def async_execute(self) -> None:
        """Execute the task."""
        async_register_command(self.hass, register_camera)
        async_register_command(self.hass, edit_camera)
        async_register_command(self.hass, remove_camera_entity)
        async_register_command(self.hass, send_camera_information_to_frontend)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/register_camera",
        vol.Required(CONF_INTEGRATION): cv.string,
        vol.Required(CONF_NAME): cv.string,
        vol.Optional(CONF_STILL_IMAGE_URL): cv.string,
        vol.Optional(CONF_STREAM_SOURCE): cv.string,
        vol.Optional(CONF_USERNAME): cv.string,
        vol.Optional(CONF_PASSWORD): cv.string,
        vol.Optional("advanced_options"): cv.boolean, #This options is just to ensure the backend can handle the information if there advanced options are picked
        vol.Optional("record_video_of_camera"): cv.boolean,  
        vol.Optional(CONF_AUTHENTICATION): vol.In(
            [HTTP_BASIC_AUTHENTICATION.capitalize(), HTTP_DIGEST_AUTHENTICATION.capitalize()]),
        vol.Optional(CONF_VERIFY_SSL, default=True): cv.boolean,
        vol.Optional(CONF_RTSP_TRANSPORT): cv.string,
        vol.Optional(CONF_FRAMERATE, default=2): vol.Any(
            cv.small_float, cv.positive_int
        ),
    }
        
)
@websocket_api.require_admin
@websocket_api.async_response
async def register_camera(hass, connection, msg):
    integration = msg["integration"]
    camera_info = {
        CONF_INTEGRATION: msg.get(CONF_INTEGRATION),
        CONF_NAME: msg.get(CONF_NAME),
        CONF_STILL_IMAGE_URL: msg.get(CONF_STILL_IMAGE_URL, None),
        CONF_STREAM_SOURCE: msg.get(CONF_STREAM_SOURCE, None),
        CONF_AUTHENTICATION: msg.get(CONF_AUTHENTICATION, HTTP_BASIC_AUTHENTICATION).lower(), 
        CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(CONF_LIMIT_REFETCH_TO_URL_CHANGE, False),
        CONF_CONTENT_TYPE: msg.get(CONF_CONTENT_TYPE, DEFAULT_CONTENT_TYPE), 
        CONF_RTSP_TRANSPORT: msg.get(CONF_RTSP_TRANSPORT, None),
        CONF_FRAMERATE: msg.get(CONF_FRAMERATE, 2), 
        CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL, True),
        CONF_USERNAME: msg.get(CONF_USERNAME, None), 
        CONF_PASSWORD: msg.get(CONF_PASSWORD, None), 
    }
    
    entity = create_entity(hass, camera_info, integration) 
    if entity: 
        camera_info["unique_id"] = entity._attr_unique_id
        camera_list = await load_from_storage(hass, STORAGE_FILE)
        camera_list.append(camera_info)
        await save_to_storage(hass, camera_list, key = STORAGE_FILE)

    connection.send_message(websocket_api.result_message(msg["id"], True))

@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/edit_camera",
        vol.Required(CONF_INTEGRATION): cv.string,
        vol.Required(CONF_ENTITY_ID): cv.string,
        vol.Required(CONF_NAME): cv.string,
        vol.Required("unique_id"): cv.string, 
        vol.Required(CONF_CONTENT_TYPE): cv.string,
        vol.Optional(CONF_STILL_IMAGE_URL): cv.string,
        vol.Optional(CONF_STREAM_SOURCE): cv.string,
        vol.Optional(CONF_USERNAME): cv.string,
        vol.Optional(CONF_PASSWORD): cv.string,
        vol.Optional("advanced_options"): cv.boolean, #This options is just to ensure the backend can handle the information if there advanced options are picked
        vol.Optional("record_video_of_camera"): cv.boolean,  
        vol.Optional(CONF_AUTHENTICATION): vol.In(
            [HTTP_BASIC_AUTHENTICATION.capitalize(), HTTP_DIGEST_AUTHENTICATION.capitalize()]),
        vol.Optional(CONF_VERIFY_SSL, default=True): cv.boolean,
        vol.Optional(CONF_RTSP_TRANSPORT): cv.string,
        vol.Optional(CONF_FRAMERATE, default=2): vol.Any(
            cv.small_float, cv.positive_int
        ),
        vol.Optional(CONF_LIMIT_REFETCH_TO_URL_CHANGE, default = False): cv.boolean
    }
        
)
@websocket_api.require_admin
@websocket_api.async_response
async def edit_camera(hass, connection, msg):
    integration = msg["integration"]
    camera_info = {
        CONF_INTEGRATION: msg.get(CONF_INTEGRATION),
        CONF_NAME: msg.get(CONF_NAME),
        CONF_STILL_IMAGE_URL: msg.get(CONF_STILL_IMAGE_URL, None),
        CONF_STREAM_SOURCE: msg.get(CONF_STREAM_SOURCE, None),
        CONF_AUTHENTICATION: msg.get(CONF_AUTHENTICATION, HTTP_BASIC_AUTHENTICATION).lower(), 
        CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(CONF_LIMIT_REFETCH_TO_URL_CHANGE, False),
        CONF_CONTENT_TYPE: msg.get(CONF_CONTENT_TYPE, DEFAULT_CONTENT_TYPE), 
        CONF_RTSP_TRANSPORT: msg.get(CONF_RTSP_TRANSPORT, None),
        CONF_FRAMERATE: msg.get(CONF_FRAMERATE, 2), 
        CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL, True),
        CONF_USERNAME: msg.get(CONF_USERNAME, None), 
        CONF_PASSWORD: msg.get(CONF_PASSWORD, None), 
        "unique_id": msg["unique_id"]
    }
    

    entity_registry = er.async_get(hass)
    entity_registry.async_remove(msg["entity_id"])
    entity = create_entity(hass, camera_info, integration, identifier = camera_info["unique_id"])     
    if entity: 
        camera_list = await load_from_storage(hass, STORAGE_FILE)
        for cam in camera_list.copy():
            if cam["unique_id"] == camera_info["unique_id"]: 
                camera_list.remove(cam) #Remove old info
                camera_list.append(camera_info) #Add new info
            await save_to_storage(hass, camera_list, key = STORAGE_FILE)

    connection.send_message(websocket_api.result_message(msg["id"], True))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/remove_camera",
        vol.Required("unique_id"): cv.string,
        vol.Required("entity_id"): cv.string,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def remove_camera_entity(
    hass: HomeAssistant, connection: ActiveConnection, msg: dict
) -> None:
    """Delete camera."""
    unique_id = msg["unique_id"]
    entity_id = msg["entity_id"]

    entity_registry = er.async_get(hass)
    if not (entity_registry.async_get(entity_id)):
        connection.send_error(
            msg["id"], websocket_api.const.ERR_NOT_FOUND, "Entity not found"
        )
        return
    
    entity_registry.async_remove(entity_id) #Remove the entity from the registry. 

    #remove from storage 
    camera_list = await load_from_storage(hass, STORAGE_FILE)
    for cam in camera_list:
        if cam["unique_id"] == unique_id:
            camera_list.remove(cam)
            await save_to_storage(hass, camera_list, key = STORAGE_FILE)
            break

    connection.send_message(websocket_api.result_message(msg["id"], True))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/fetch_camera_information",
        vol.Required("entity_id"): cv.string,  
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def send_camera_information_to_frontend(hass, connection, msg):
    """Fetch camera information, through entity_id to send to the frontend"""
    entity_id = msg["entity_id"]
    #Get corresponding entity_id from entity_registry
    entity_registry = await er.async_get_registry(hass)
    entity = entity_registry.async_get(entity_id)
    entity_unique_id = entity.unique_id 
    #Get the camera_info from the storage using the unique_id
    cameras_info = await load_from_storage(hass, STORAGE_FILE)
    for camera_info in cameras_info: 
        if camera_info["unique_id"] == entity_unique_id:
            camera_info["entity_id"] = entity_id
            connection.send_message(websocket_api.result_message(msg["id"], camera_info))
        
    

