"""Tests setup async_initialize_integration in the AI dashboard"""
import pytest

from pytest_homeassistant_custom_component.common import MockConfigEntry
from unittest.mock import patch

from custom_components.camera_dashboard_raceland.const import DOMAIN
from custom_components.camera_dashboard_raceland.base import DashboardBase
from custom_components.camera_dashboard_raceland import async_initialize_integration

@pytest.mark.asyncio
async def test_async_setup_entry(hass): 
    """Test async_setup_entry"""
  
    #Load config flow data
    fixture_test = {}

    # Create a mock entry so we don't have to go through config flow
    config_entry = MockConfigEntry(domain=DOMAIN, data = fixture_test, entry_id="setup_test")

    #Run tests
    with patch("homeassistant.http.register_static_path"): 
        assert await async_initialize_integration(hass, config_entry=config_entry)

    assert DOMAIN in hass.data and type(hass.data[DOMAIN]) == DashboardBase