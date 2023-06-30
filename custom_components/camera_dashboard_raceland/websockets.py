"""Register Websockets for Raceland Camera Dashboard."""
from __future__ import annotations
from jinja2 import Template

import logging
import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
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
    CONF_FRAMERATE,
    CONF_LIMIT_REFETCH_TO_URL_CHANGE,
    CONF_STILL_IMAGE_URL,
    CONF_STREAM_SOURCE,
)
from homeassistant.components.camera import DEFAULT_CONTENT_TYPE
from homeassistant.helpers import entity_registry as er
import homeassistant.helpers.config_validation as cv
from homeassistant.helpers.dispatcher import (
    async_dispatcher_connect,
    async_dispatcher_send,
)

from homeassistant.components.websocket_api import (
    async_register_command,
    ActiveConnection,
    decorators,
)

from .const import (
    DOMAIN,
    CONFIG_STORAGE_FILE,
    CONF_INTEGRATION,
    CONF_RTSP_TRANSPORT,
    CONF_INTEGRATION_DEFAULT,
    CONF_CHANNEL,
    CONF_STILL_URL_DOOR,
    CONF_STREAM_SOURCE_DOOR,
    CONF_URL_IP,
    CONF_ADD_MULTI_CHANNELS,
)
from .helpers import create_entity, load_from_storage, save_to_storage


_LOGGER = logging.getLogger(__name__)


async def async_register_websockets(hass):
    """Execute the task."""
    async_register_command(hass, handle_subscribe_updates)
    async_register_command(hass, send_camera_model_database_to_frontend)
    async_register_command(hass, register_camera)
    async_register_command(hass, register_model_camera)
    async_register_command(hass, edit_camera)
    async_register_command(hass, remove_camera_entity)
    async_register_command(hass, send_camera_information_to_frontend)
    async_register_command(hass, send_camera_list_to_frontend)


@callback
@decorators.websocket_command(
    {
        vol.Required("type"): "camera_dashboard_config_updated",
    }
)
@decorators.async_response
async def handle_subscribe_updates(hass, connection, msg):
    """Handle subscribe updates."""

    @callback
    def async_handle_event():
        """Forward events to websocket."""
        connection.send_message(
            {
                "id": msg["id"],
                "type": "event",
            }
        )

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(
        hass, "camera_dashboard_update_frontend", async_handle_event
    )
    connection.send_result(msg["id"])


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/fetch_camera_db",
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def send_camera_model_database_to_frontend(hass, connection, msg):
    """Send camera model information to the frontend"""
    camera_database = hass.data[DOMAIN].camera_database
    connection.send_message(websocket_api.result_message(msg["id"], camera_database))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/register_camera",
        vol.Optional(CONF_INTEGRATION, CONF_INTEGRATION_DEFAULT): cv.string,
        vol.Required(CONF_NAME): cv.string,
        vol.Optional(CONF_STILL_IMAGE_URL): cv.string,
        vol.Optional(CONF_STREAM_SOURCE): cv.string,
        vol.Optional(CONF_USERNAME): cv.string,
        vol.Optional(CONF_PASSWORD): cv.string,
        vol.Optional(
            "advanced_options"
        ): cv.boolean,  # This options is just to ensure the backend can handle the information if there advanced options are picked
        vol.Optional(
            CONF_AUTHENTICATION, default=HTTP_DIGEST_AUTHENTICATION
        ): cv.string,
        vol.Optional(CONF_VERIFY_SSL, default=True): cv.boolean,
        vol.Optional(CONF_RTSP_TRANSPORT, default="tcp"): cv.string,
        vol.Optional(CONF_FRAMERATE, default=10): vol.Any(
            cv.small_float, cv.positive_int
        ),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def register_camera(hass, connection, msg):
    """Register a camera"""
    await _register_camera(hass, msg)
    async_dispatcher_send(hass, "camera_dashboard_update_frontend")
    connection.send_message(websocket_api.result_message(msg["id"], True))


async def _register_camera(hass, msg):
    """Function to register camera.
    Easier to implement test suite"""
    camera = {
        CONF_INTEGRATION: msg.get(CONF_INTEGRATION, CONF_INTEGRATION_DEFAULT),
        CONF_NAME: msg[CONF_NAME],
        CONF_STILL_IMAGE_URL: msg.get(CONF_STILL_IMAGE_URL, None),
        CONF_STREAM_SOURCE: msg.get(CONF_STREAM_SOURCE, None),
        CONF_AUTHENTICATION: msg.get(CONF_AUTHENTICATION).lower(),
        CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(
            CONF_LIMIT_REFETCH_TO_URL_CHANGE,
            False,  ##TODO implement this option in the frontend
        ),
        CONF_RTSP_TRANSPORT: msg.get(
            CONF_RTSP_TRANSPORT,
        ),
        CONF_FRAMERATE: msg.get(CONF_FRAMERATE),
        CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL),
        CONF_USERNAME: msg.get(CONF_USERNAME, None),
        CONF_PASSWORD: msg.get(CONF_PASSWORD, None),
    }

    if camera[CONF_RTSP_TRANSPORT] == "None":
        camera[CONF_RTSP_TRANSPORT] = None

    entity = create_entity(hass, camera)
    if entity:
        camera_info = camera.copy()
        camera_info["unique_id"] = entity._attr_unique_id
        camera_list = await load_from_storage(hass, CONFIG_STORAGE_FILE)
        camera_list.append(camera_info)
        await save_to_storage(hass, camera_list, key=CONFIG_STORAGE_FILE)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/register_model_camera",
        vol.Required(CONF_NAME): cv.string,
        vol.Optional(
            CONF_STILL_IMAGE_URL
        ): cv.string,  # These are passed by the frontend, but it gets the information from the camera database YAML file
        vol.Optional(
            CONF_STREAM_SOURCE
        ): cv.string,  # These are passed by the frontend, but it gets the information from the camera database YAML file
        vol.Optional(CONF_USERNAME): cv.string,
        vol.Optional(CONF_PASSWORD): cv.string,
        vol.Optional(CONF_URL_IP): cv.string,
        vol.Optional(CONF_STILL_URL_DOOR): cv.string,
        vol.Optional(CONF_STREAM_SOURCE_DOOR): cv.string,
        vol.Optional(CONF_CHANNEL): cv.string,
        vol.Optional(CONF_ADD_MULTI_CHANNELS, default=False): cv.boolean,
        vol.Optional(
            "advanced_options"
        ): cv.boolean,  # This options is just to ensure the backend can handle the information if there advanced options are picked
        vol.Optional(
            CONF_AUTHENTICATION, default=HTTP_DIGEST_AUTHENTICATION
        ): cv.string,
        vol.Optional(CONF_VERIFY_SSL, default=True): cv.boolean,
        vol.Optional(CONF_RTSP_TRANSPORT, default="tcp"): cv.string,
        vol.Optional(CONF_FRAMERATE, default=10): vol.Any(
            cv.small_float, cv.positive_int
        ),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def register_model_camera(hass, connection, msg):
    """Register a model camera"""
    await _register_model_camera(hass, msg)
    async_dispatcher_send(hass, "camera_dashboard_update_frontend")
    connection.send_message(websocket_api.result_message(msg["id"], True))


async def _register_model_camera(hass, msg):
    """Function to register model camera.
    Easier to implement test suite"""
    new_camera_information = []

    if msg.get(CONF_STILL_URL_DOOR, None):
        msg[CONF_STILL_URL_DOOR] = ":" + msg.get(CONF_STILL_URL_DOOR, None)

    if msg.get(CONF_STREAM_SOURCE_DOOR, None):
        msg[CONF_STREAM_SOURCE_DOOR] = ":" + msg.get(CONF_STREAM_SOURCE_DOOR, None)

    camera = {
        CONF_INTEGRATION: CONF_INTEGRATION_DEFAULT,
        CONF_USERNAME: msg.get(CONF_USERNAME, None),
        CONF_PASSWORD: msg.get(CONF_PASSWORD, None),
        CONF_AUTHENTICATION: msg.get(
            CONF_AUTHENTICATION, HTTP_DIGEST_AUTHENTICATION
        ).lower(),
        CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(  # TODO: Implement CONFIG_REFETCH_TO_URL_CHANGE
            CONF_LIMIT_REFETCH_TO_URL_CHANGE, False
        ),
        CONF_RTSP_TRANSPORT: msg.get(CONF_RTSP_TRANSPORT),
        CONF_FRAMERATE: msg.get(CONF_FRAMERATE),
        CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL),
    }

    if camera[CONF_RTSP_TRANSPORT] == "None":
        camera[CONF_RTSP_TRANSPORT] = None

    n_channels = int(msg.get(CONF_CHANNEL, 1))
    if msg[CONF_ADD_MULTI_CHANNELS] == True:
        start_channel = 1
    else:
        start_channel = n_channels

    for i in range(start_channel, n_channels + 1):
        data = msg
        data[CONF_CHANNEL] = str(i)

        if msg.get(CONF_STILL_IMAGE_URL):
            still_image_url = Template(msg.get(CONF_STILL_IMAGE_URL)).render(data)
        else:
            still_image_url = None

        if msg.get(CONF_STREAM_SOURCE):
            stream_source = Template(msg.get(CONF_STREAM_SOURCE)).render(data)
        else:
            stream_source = None

        camera.update(
            {CONF_STILL_IMAGE_URL: still_image_url, CONF_STREAM_SOURCE: stream_source}
        )

        if msg[CONF_ADD_MULTI_CHANNELS] == True:
            camera[CONF_NAME] = msg[CONF_NAME] + " " + data[CONF_CHANNEL]
        else:
            camera[CONF_NAME] = msg[CONF_NAME]

        entity = create_entity(hass, camera)
        camera_info = camera.copy()
        camera_info["unique_id"] = entity._attr_unique_id
        new_camera_information.append(camera_info)

    camera_list = await load_from_storage(hass, CONFIG_STORAGE_FILE)
    camera_list.extend(new_camera_information)
    await save_to_storage(hass, camera_list, key=CONFIG_STORAGE_FILE)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/edit_camera",
        vol.Required(CONF_INTEGRATION): cv.string,
        vol.Required("entityID"): cv.string,
        vol.Required(CONF_NAME): cv.string,
        vol.Required("unique_id"): cv.string,
        vol.Optional(CONF_STILL_IMAGE_URL): cv.string,
        vol.Optional(CONF_STREAM_SOURCE): cv.string,
        vol.Optional(CONF_USERNAME): cv.string,
        vol.Optional(CONF_PASSWORD): cv.string,
        vol.Optional(
            "advanced_options"
        ): cv.boolean,  # This options is just to ensure the backend can handle the information if there advanced options are picked
        # vol.Optional("record_video_of_camera"): cv.boolean,
        vol.Optional(CONF_AUTHENTICATION): vol.In(
            [
                HTTP_BASIC_AUTHENTICATION.capitalize(),
                HTTP_DIGEST_AUTHENTICATION.capitalize(),
            ]
        ),
        vol.Optional(CONF_VERIFY_SSL, default=True): cv.boolean,
        vol.Optional(CONF_RTSP_TRANSPORT): cv.string,
        vol.Optional(CONF_FRAMERATE, default=10): vol.Any(
            cv.small_float, cv.positive_int
        ),
        vol.Optional(CONF_LIMIT_REFETCH_TO_URL_CHANGE, default=False): cv.boolean,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def edit_camera(hass, connection, msg):
    """Edit camera"""
    await _edit_camera(hass, msg)
    async_dispatcher_send(hass, "camera_dashboard_update_frontend")
    connection.send_message(websocket_api.result_message(msg["id"], True))


async def _edit_camera(hass, msg):
    """Function to edit model camera.
    Easier to implement test suite"""
    camera_info = {
        CONF_INTEGRATION: msg[CONF_INTEGRATION],
        CONF_NAME: msg[CONF_NAME],
        CONF_STILL_IMAGE_URL: msg.get(CONF_STILL_IMAGE_URL, None),
        CONF_STREAM_SOURCE: msg.get(CONF_STREAM_SOURCE, None),
        CONF_AUTHENTICATION: msg.get(
            CONF_AUTHENTICATION, HTTP_BASIC_AUTHENTICATION
        ).lower(),
        CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(
            CONF_LIMIT_REFETCH_TO_URL_CHANGE, False
        ),
        CONF_RTSP_TRANSPORT: msg.get(CONF_RTSP_TRANSPORT),
        CONF_FRAMERATE: msg.get(CONF_FRAMERATE),
        CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL),
        CONF_USERNAME: msg.get(CONF_USERNAME, None),
        CONF_PASSWORD: msg.get(CONF_PASSWORD, None),
        "unique_id": msg["unique_id"],
    }

    if camera_info[CONF_RTSP_TRANSPORT] == "None":
        camera_info[CONF_RTSP_TRANSPORT] = None

    entity_registry = er.async_get(hass)
    entity_registry.async_remove(msg["entityID"])
    entity = create_entity(hass, camera_info, identifier=camera_info["unique_id"])
    if entity:
        camera_list = await load_from_storage(hass, CONFIG_STORAGE_FILE)
        for cam in camera_list.copy():
            if cam["unique_id"] == camera_info["unique_id"]:
                camera_list.remove(cam)  # Remove old info
                camera_list.append(camera_info)  # Add new info
        await save_to_storage(hass, camera_list, key=CONFIG_STORAGE_FILE)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/remove_camera",
        vol.Required("unique_id"): cv.string,
        vol.Required("entityID"): cv.string,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def remove_camera_entity(
    hass: HomeAssistant, connection: ActiveConnection, msg: dict
) -> None:
    """Delete camera."""
    entity_registry = er.async_get(hass)
    if not entity_registry.async_get(msg["entityID"]):
        connection.send_error(
            msg["id"], websocket_api.const.ERR_NOT_FOUND, "Entity not found"
        )
        return

    await _remove_camera_entity(hass, entity_registry, msg)
    async_dispatcher_send(hass, "camera_dashboard_update_frontend")
    connection.send_message(websocket_api.result_message(msg["id"], True))


async def _remove_camera_entity(hass, entity_registry, msg):
    """Function to delete model camera.
    Easier to implement test suite"""
    unique_id = msg["unique_id"]
    entity_id = msg["entityID"]
    entity_registry.async_remove(entity_id)  # Remove the entity from the registry.

    # remove from storage
    camera_list = await load_from_storage(hass, CONFIG_STORAGE_FILE)
    for cam in camera_list:
        if cam["unique_id"] == unique_id:
            camera_list.remove(cam)
            await save_to_storage(hass, camera_list, key=CONFIG_STORAGE_FILE)
            return  # Exit function


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
    data = await _send_camera_information_to_frontend(hass, msg)
    if data is not None:
        connection.send_message(websocket_api.result_message(msg["id"], data))
    else:
        connection.send_error(
            msg["id"], websocket_api.const.ERR_NOT_FOUND, "Entity not found"
        )


async def _send_camera_information_to_frontend(hass, msg):
    entity_id = msg["entity_id"]
    entity_registry = er.async_get(hass)
    entity = entity_registry.async_get(entity_id)

    if entity is not None:
        entity_unique_id = entity.unique_id

        # Get the camera_info from the storage using the unique_id
        cameras_info = await load_from_storage(hass, CONFIG_STORAGE_FILE)
        for camera_info in cameras_info:
            if camera_info["unique_id"] == entity_unique_id:
                camera_info["entityID"] = entity_id
                return camera_info

        # Edge case if for some reason the entity is deleted from the storage file
        return None
    else:
        return None


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/fetch_camera_list",
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def send_camera_list_to_frontend(hass, connection, msg):
    """Fetch camera information, matched by entity_id to send to the frontend"""
    cameras_info = await load_from_storage(hass, CONFIG_STORAGE_FILE)

    if cameras_info is not None:
        connection.send_message(websocket_api.result_message(msg["id"], cameras_info))
    else:
        connection.send_message(websocket_api.result_message(msg["id"], None))
