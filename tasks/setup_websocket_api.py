"""Register WS API endpoints for HACS."""
from __future__ import annotations

import sys

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
from ..const import DOMAIN_GENERIC, DOMAIN, SetupStage
from ..helpers import create_entity


from homeassistant.const import (
    CONF_AUTHENTICATION,
    CONF_NAME,
    CONF_PASSWORD,
    CONF_USERNAME,
    CONF_VERIFY_SSL,
    HTTP_BASIC_AUTHENTICATION,
)

from homeassistant.components.generic.const import (
    CONF_CONTENT_TYPE,
    CONF_FRAMERATE,
    CONF_LIMIT_REFETCH_TO_URL_CHANGE,
    CONF_STILL_IMAGE_URL,
    CONF_STREAM_SOURCE,
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
        async_register_command(self.hass, remove_camera_entity)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/register_camera",
        vol.Required("integration"): cv.string,
        vol.Required("camera_name"): cv.string,
        vol.Optional("static_image_url"): cv.string,
        vol.Optional("stream_url"): cv.string,
        vol.Optional("username"): cv.string,
        vol.Optional("password"): cv.string,
        vol.Optional("record_video_of_camera"): cv.boolean,   
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def register_camera(hass, connection, msg):
    integration = msg["integration"]
    camera_info = {
        CONF_NAME: msg.get("camera_name"), 
        CONF_STILL_IMAGE_URL: msg.get("statis_image_url"),
        CONF_AUTHENTICATION: msg.get(CONF_AUTHENTICATION, HTTP_BASIC_AUTHENTICATION), 
        CONF_LIMIT_REFETCH_TO_URL_CHANGE: msg.get(CONF_LIMIT_REFETCH_TO_URL_CHANGE, False),
        CONF_CONTENT_TYPE: msg.get(CONF_CONTENT_TYPE, DEFAULT_CONTENT_TYPE), 
        CONF_FRAMERATE: msg.get(CONF_FRAMERATE, 2), 
        CONF_VERIFY_SSL: msg.get(CONF_VERIFY_SSL, True),
        CONF_USERNAME: msg.get("username", None), 
        CONF_PASSWORD: msg.get("password", None), 
        CONF_STREAM_SOURCE: msg.get("stream_url", None)
    }
    
    new_entity = create_entity(hass, camera_info, integration)
    connection.send_message(websocket_api.result_message(msg["id"], True))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "raceland-camera-dashboard/remove_camera",
        vol.Required("entity_id"): cv.string,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
def remove_camera_entity(
    hass: HomeAssistant, connection: ActiveConnection, msg: dict
) -> None:
    """Delete device."""
    #TODO: TypeError: object NoneType can't be used in 'await' expression occurs when I remove the camera
    entity_id = msg["entity_id"]
    entity_registry = er.async_get(hass)

    if not (entity := entity_registry.async_get(entity_id)):
        connection.send_error(
            msg["id"], websocket_api.const.ERR_NOT_FOUND, "Entity not found"
        )
        return
        
    entity_registry.async_remove(entity_id)
    connection.send_message(websocket_api.result_message(msg["id"], True))


