"""Adds config flow for HACS."""
from homeassistant import config_entries
import voluptuous as vol

from .const import DOMAIN



import logging 
_LOGGER = logging.getLogger(__name__)


class cameraDashboardConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    """Config flow for Camera Dashboard."""
    async def async_step_user(self, info):
        return self.async_create_entry(title="Camera Dashboard", data={})
