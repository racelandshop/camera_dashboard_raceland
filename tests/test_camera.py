"""Test Camera entities including several setups"""
import json
import pytest
import httpx

from unittest.mock import patch


from homeassistant.const import (
    CONF_AUTHENTICATION,
    CONF_NAME,
    CONF_PASSWORD,
    CONF_USERNAME,
    CONF_VERIFY_SSL,
    HTTP_DIGEST_AUTHENTICATION,
)
from homeassistant.components.camera import SUPPORT_STREAM
from homeassistant.helpers.httpx_client import get_async_client
from homeassistant.helpers import config_validation as cv


from pytest_homeassistant_custom_component.common import (
    MockConfigEntry,
    load_fixture
)


from custom_components.camera_dashboard_raceland.camera import GenericCamera
from custom_components.camera_dashboard_raceland.const import (
    DOMAIN,
    CONF_FRAMERATE, 
    CONF_RTSP_TRANSPORT
)

FIXTURES_GENERIC_CAMERA_DATA = json.loads(load_fixture("generic_camera_data.json"))

@pytest.mark.asyncio
async def test_camera_entity(hass):
    """Tests that the camera entity is correctly set up."""

    fixture_config_entry_data = {}
    config_entry = MockConfigEntry(domain=DOMAIN, data = fixture_config_entry_data, entry_id="setup")
    config_entry.add_to_hass(hass)
    await hass.config_entries.async_setup(config_entry.entry_id)
    await hass.async_block_till_done()

    fixture_camera = FIXTURES_GENERIC_CAMERA_DATA["default"]["camera_input_data"]
    camera_output =  FIXTURES_GENERIC_CAMERA_DATA["default"]["camera_output_data"]
    camera_id = "camera.my_camera_unique_id"
    mock_camera_entity = GenericCamera(hass, fixture_camera, camera_id)

    # Test initialization
    assert mock_camera_entity._name == camera_output[CONF_NAME]
    assert mock_camera_entity._attr_unique_id == camera_id
    assert mock_camera_entity._authentication == camera_output[CONF_AUTHENTICATION]
    assert mock_camera_entity._still_image_url != None
    assert mock_camera_entity._stream_source != None
    #assert mock_camera_entity._limit_refetch == camera_output[CONF_LIMIT_REFETCH_TO_URL_CHANGE]
    assert mock_camera_entity._attr_frame_interval == 1 / camera_output[CONF_FRAMERATE]
    assert mock_camera_entity._supported_features == SUPPORT_STREAM
    assert mock_camera_entity.verify_ssl == camera_output[CONF_VERIFY_SSL]
    assert mock_camera_entity.stream_options[CONF_RTSP_TRANSPORT] == camera_output[CONF_RTSP_TRANSPORT]
    assert mock_camera_entity._username == camera_output[CONF_USERNAME]
    assert mock_camera_entity._password == camera_output[CONF_PASSWORD]
    assert mock_camera_entity._auth._username.decode() == camera_output[CONF_USERNAME]
    assert mock_camera_entity._auth._password.decode() == camera_output[CONF_PASSWORD]
    
    # Test async_camera_image()
    async def mock_get(*args, **kwargs):
        class MockResponse:
            def __init__(self, content):
                self.content = content

            async def raise_for_status(self):
                pass

        return MockResponse(b"image_data")

    async_client =  get_async_client(hass, verify_ssl=True)
    async_client.get = mock_get

    image_data = await mock_camera_entity.async_camera_image()
    assert image_data == b"image_data"

    # Test stream_source()
    stream_source = await mock_camera_entity.stream_source()
    print(stream_source)
    assert stream_source == camera_output["stream_url_complete"]



@pytest.mark.asyncio
async def test_camera_entity_no_stream_source(hass):
    """Tests that the camera entity is correctly set up."""

    fixture_config_entry_data = {}
    config_entry = MockConfigEntry(domain=DOMAIN, data = fixture_config_entry_data, entry_id="setup")
    config_entry.add_to_hass(hass)
    await hass.config_entries.async_setup(config_entry.entry_id)
    await hass.async_block_till_done()



    fixture_camera = FIXTURES_GENERIC_CAMERA_DATA["no_stream_source"]["camera_input_data"]
    camera_id = "camera.my_camera_unique_id"
    mock_camera_entity = GenericCamera(hass, fixture_camera, camera_id)

    assert mock_camera_entity._still_image_url != None
    assert mock_camera_entity._stream_source == None
    assert mock_camera_entity._supported_features == 0


    # Test stream_source()
    mock_camera_entity._stream_source = None
    stream_source = await mock_camera_entity.stream_source()
    assert stream_source is None
    


@pytest.mark.asyncio
async def test_get_auth(hass):
    """Test the get_auth function."""
    fixture_camera = FIXTURES_GENERIC_CAMERA_DATA["default"]["camera_input_data"]
    # Test case 1: Username and password provided with digest authentication
    
    device_info = {
        CONF_USERNAME: "username",
        CONF_PASSWORD: "password",
        CONF_AUTHENTICATION: HTTP_DIGEST_AUTHENTICATION,
    }

    fixture_camera.update(device_info)

    auth = GenericCamera(hass, fixture_camera, 'teste').get_auth()
    assert isinstance(auth, httpx.DigestAuth)
    assert auth._username.decode() == "username"
    assert auth._password.decode() == "password"

    # Test case 2: Username and password provided with basic authentication
    device_info = {
        CONF_USERNAME: "username",
        CONF_PASSWORD: "password",
        CONF_AUTHENTICATION: None,
    }
    fixture_camera.update(device_info)

    auth = GenericCamera(hass, fixture_camera, 'teste').get_auth()
    assert isinstance(auth, httpx.BasicAuth)
    #Basic Auth does not have username of password


    # Test case 3: No username and password provided
    device_info = {
        CONF_USERNAME: None,
        CONF_PASSWORD: None,
        CONF_AUTHENTICATION: None,
    }

    fixture_camera.update(device_info)
    auth = GenericCamera(hass, fixture_camera, 'teste').get_auth()
    assert auth is None

