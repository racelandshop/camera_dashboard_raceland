""""Starting setup task: Sensor"."""
from __future__ import annotations

from homeassistant.core import HomeAssistant
from homeassistant.helpers.discovery import async_load_platform

from ..base import CameraBase
from ..const import DOMAIN, ConfigurationType, SetupStage
from .base import CameraDashboardTask

SENSOR_DOMAIN = "sensor"

import logging
_LOGGER = logging.getLogger(__name__)


async def async_setup_task(hacs: CameraBase, hass: HomeAssistant) -> Task:
    """Set up this task."""
    return Task(hacs=hacs, hass=hass)


class Task(CameraDashboardTask):
    """Setup the HACS sensor platform."""

    stages = [SetupStage.SETUP]

    async def async_execute(self) -> None:
        """Execute the task."""
        if self.hacs.configuration.config_type == ConfigurationType.YAML:
            self.hass.async_create_task(
                async_load_platform(
                    self.hass, SENSOR_DOMAIN, DOMAIN, {}, self.hacs.configuration.config
                )
            )
        else:
            self.hass.config_entries.async_setup_platforms(
                self.hacs.configuration.config_entry, [SENSOR_DOMAIN]
            )
