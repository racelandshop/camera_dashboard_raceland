from unittest.mock import MagicMock, patch

import pytest
import json

from pytest_homeassistant_custom_component.common import (
    load_fixture
)

from custom_components.camera_dashboard_raceland.const import CONFIG_STORAGE_FILE
from custom_components.camera_dashboard_raceland.websockets import (
    _register_camera,
    _register_model_camera,
    _edit_camera, 
    _remove_camera_entity, 
    _send_camera_information_to_frontend)


UNIQUE_ID = "unique" #Unique id returned by a a mock create_entity

FIXTURES_GENERIC_CAMERA_DATA = json.loads(load_fixture("websocket_data.json"))


@pytest.mark.asyncio
async def test_register_camera(hass):
    """Test register camera wrapper for the websocket register_camera. 
    Non default paremters are used for test"""
    msg_input = FIXTURES_GENERIC_CAMERA_DATA["register_default_camera"]["input"]
    camera_output =  FIXTURES_GENERIC_CAMERA_DATA["register_default_camera"]["output"]

    with patch(
    "custom_components.camera_dashboard_raceland.websockets.create_entity", return_value = MagicMock(_attr_unique_id=UNIQUE_ID)
    ) as create_entity_mock, patch("custom_components.camera_dashboard_raceland.websockets.load_from_storage", return_value = []
    ), patch("custom_components.camera_dashboard_raceland.websockets.save_to_storage") as save_to_storage:

        # Call the WebSocket handler
        await _register_camera(hass, msg_input)
        create_entity_mock.assert_called_once_with(hass, camera_output)
        camera_output["unique_id"] = UNIQUE_ID
        save_to_storage.assert_called_once_with(hass, [camera_output], key = CONFIG_STORAGE_FILE)
    

@pytest.mark.asyncio
async def test_register_single_model_camera(hass):
    """Test register camera wrapper for the websocket register_model_camera."""
    
    msg_input = FIXTURES_GENERIC_CAMERA_DATA["register_single_model_camera"]["input"]
    camera_output =  FIXTURES_GENERIC_CAMERA_DATA["register_single_model_camera"]["output"]

    with patch(
    "custom_components.camera_dashboard_raceland.websockets.create_entity", return_value = MagicMock(_attr_unique_id=UNIQUE_ID)
    ) as create_entity_mock, patch("custom_components.camera_dashboard_raceland.websockets.load_from_storage", return_value = []
    ), patch("custom_components.camera_dashboard_raceland.websockets.save_to_storage") as save_to_storage:

        # Call the WebSocket handler
        await _register_model_camera(hass, msg_input)
        create_entity_mock.assert_called_once_with(hass, camera_output)
        camera_output["unique_id"] = UNIQUE_ID
        save_to_storage.assert_called_once_with(hass, [camera_output], key = CONFIG_STORAGE_FILE)


@pytest.mark.asyncio
async def test_register_multiple_model_camera(hass):
    """Test register camera wrapper for the websocket register_model_camera when adding multiple cameras at the same time."""
    
    msg_input = FIXTURES_GENERIC_CAMERA_DATA["register_multiple_model_camera"]["input"]
    camera_output =  FIXTURES_GENERIC_CAMERA_DATA["register_multiple_model_camera"]["output"]

    with patch(
    "custom_components.camera_dashboard_raceland.websockets.create_entity", return_value = MagicMock(_attr_unique_id=UNIQUE_ID)
    ) as create_entity_mock, patch(
    "custom_components.camera_dashboard_raceland.websockets.load_from_storage", return_value = []
    ), patch("custom_components.camera_dashboard_raceland.websockets.save_to_storage") as save_to_storage:

        # Call the WebSocket handler
        await _register_model_camera(hass, msg_input)
        assert create_entity_mock.call_count == 3
        for i in range(len(camera_output)): 
            camera_output[i]["unique_id"] = UNIQUE_ID
        save_to_storage.assert_called_once_with(hass, camera_output, key = CONFIG_STORAGE_FILE)

@pytest.mark.asyncio
async def test_edit_camera(hass):
    """Test camera edit."""
    
    msg_input = FIXTURES_GENERIC_CAMERA_DATA["edit_camera"]["input"]
    storage_input = FIXTURES_GENERIC_CAMERA_DATA["edit_camera"]["storage_data"]
    storage_output =  FIXTURES_GENERIC_CAMERA_DATA["edit_camera"]["output"]
    camera_output = storage_output[1]

    def async_remove(entity_id):
        print(f"async_remove called with entity_id: {entity_id}")

    entity_registry_mock = MagicMock()
    entity_registry_mock.async_remove.side_effect = async_remove

    with patch(
        "custom_components.camera_dashboard_raceland.entity_registry.async_get",
        return_value = entity_registry_mock
    ), patch(
        "custom_components.camera_dashboard_raceland.websockets.create_entity"
    ) as create_entity_mock, patch(
        "custom_components.camera_dashboard_raceland.websockets.load_from_storage", 
        return_value = storage_input
    ), patch("custom_components.camera_dashboard_raceland.websockets.save_to_storage") as save_to_storage:

        # Call the WebSocket handler
        await _edit_camera(hass, msg_input)

        entity_registry_mock.async_remove.assert_called_once_with(msg_input["entityID"])
        create_entity_mock.assert_called_once_with(hass, camera_output, identifier = camera_output["unique_id"])
        save_to_storage.assert_called_once_with(hass, storage_output, key = CONFIG_STORAGE_FILE)

@pytest.mark.asyncio
async def delete_camera_test(hass):
    """Test delete camera."""
    
    msg_input = FIXTURES_GENERIC_CAMERA_DATA["delete_camera"]["input"]
    storage_input = FIXTURES_GENERIC_CAMERA_DATA["delete_camera"]["storage_data"]
    storage_output =  FIXTURES_GENERIC_CAMERA_DATA["delete_camera"]["output"]

    def async_remove(entity_id):
        print(f"async_remove called with entity_id: {entity_id}")

    entity_registry_mock = MagicMock()
    entity_registry_mock.async_remove.side_effect = async_remove

    with patch(
        "custom_components.camera_dashboard_raceland.websockets.load_from_storage", 
        return_value = storage_input
    ), patch(
        "custom_components.camera_dashboard_raceland.websockets.save_to_storage"
    ) as save_to_storage:

        # Call the WebSocket handler
        await _remove_camera_entity(hass, entity_registry_mock, msg_input)

        entity_registry_mock.async_remove.assert_called_once_with(msg_input["entityID"])
        save_to_storage.assert_called_once_with(hass, storage_output, key = CONFIG_STORAGE_FILE)


@pytest.mark.asyncio
async def test_send_camera_information_to_frontend_camera_test(hass):
    """Test function to send camera information to frontend (
    From a specific camera entityID
    )"""

    msg_input = FIXTURES_GENERIC_CAMERA_DATA["fetch_camera_information"]["input"]
    storage_input = FIXTURES_GENERIC_CAMERA_DATA["fetch_camera_information"]["storage_data"]
    storage_output =  FIXTURES_GENERIC_CAMERA_DATA["fetch_camera_information"]["output"]

    def async_get(entity_id):
        return MagicMock(unique_id=UNIQUE_ID)

    entity_registry_mock = MagicMock()
    entity_registry_mock.async_get.side_effect = async_get

    with patch(
        "custom_components.camera_dashboard_raceland.entity_registry.async_get",
        return_value = entity_registry_mock
    ), patch(
        "custom_components.camera_dashboard_raceland.websockets.load_from_storage", 
        return_value = storage_input
    ): 

        # Call the WebSocket handler
        data = await _send_camera_information_to_frontend(hass, msg_input)
        assert data == storage_output
    