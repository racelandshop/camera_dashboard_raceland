"""Tests setup async_initialize_integration in the AI dashboard"""
import pytest

from pytest_homeassistant_custom_component.common import MockConfigEntry
from unittest.mock import patch, MagicMock, AsyncMock, Mock

from custom_components.camera_dashboard_raceland import async_initialize_integration
from custom_components.camera_dashboard_raceland.const import DOMAIN
from custom_components.camera_dashboard_raceland.base import DashboardBase


@pytest.mark.asyncio
async def test_async_setup_entry(hass): 
    """Test async_setup_entry"""
    # Create a mock entry so we don't have to go through config flow
    fixture_test = {}
    config_entry = MockConfigEntry(domain=DOMAIN, data = fixture_test, entry_id="setup_test")

    #Run tests
    with patch("custom_components.camera_dashboard_raceland.async_register_panel"): 
        assert await async_initialize_integration(hass, config_entry=config_entry)
        assert DOMAIN in hass.data and type(hass.data[DOMAIN]) == DashboardBase

@pytest.mark.asyncio
async def test_remove_lefout_cameras(hass): 
    """If HASS is restarted right after a camera is removed, the camera might not be propely removed. 
    Test if that camera is not registered again"""
    # Mock entity_registry and its entities

    def async_remove(entity_id):
        print(f"async_remove called with entity_id: {entity_id}")

    entity_registry_mock = MagicMock()
    entity_registry_mock.async_remove.side_effect = async_remove

    entity_registry_mock.entities = {
        "camera.camera_to_remove": MagicMock(unique_id="camera-111"),
        "camera.camera_to_keep": MagicMock(unique_id="camera-222"),
    }

    # Create a mock entry so we don't have to go through config flow
    fixture_test = {}
    config_entry = MockConfigEntry(domain=DOMAIN, data = fixture_test, entry_id="setup_test")

    with patch(
        "custom_components.camera_dashboard_raceland.entity_registry.async_get",
        return_value = entity_registry_mock
    ), patch(
        "custom_components.camera_dashboard_raceland.load_from_storage",
        return_value=[{"unique_id": "camera-222"}]
    ), patch("custom_components.camera_dashboard_raceland.async_register_panel"): 
        result = await async_initialize_integration(hass, config_entry=config_entry)
        assert result is True

        entity_registry_mock.async_remove.assert_called_once_with("camera.camera_to_remove")


@pytest.mark.asyncio
async def test_remove_0_cameras(hass): 
    """If HASS is restarted right after a camera is removed, the camera might not be propely removed. 
    Test if that camera is not registered again"""
    # Mock entity_registry and its entities

    def async_remove(entity_id):
        print(f"async_remove called with entity_id: {entity_id}")

    entity_registry_mock = MagicMock()
    entity_registry_mock.async_remove.side_effect = async_remove

    entity_registry_mock.entities = {
        "camera.camera_to_keep": MagicMock(unique_id="camera-222"),
    }

    # Create a mock entry so we don't have to go through config flow
    fixture_test = {}
    config_entry = MockConfigEntry(domain=DOMAIN, data = fixture_test, entry_id="setup_test")

    with patch(
        "custom_components.camera_dashboard_raceland.entity_registry.async_get",
        return_value = entity_registry_mock
    ), patch(
        "custom_components.camera_dashboard_raceland.load_from_storage",
        return_value=[{"unique_id": "camera-222"}]
    ), patch("custom_components.camera_dashboard_raceland.async_register_panel"): 
        result = await async_initialize_integration(hass, config_entry=config_entry)
        assert result is True

        entity_registry_mock.async_remove.assert_not_called()