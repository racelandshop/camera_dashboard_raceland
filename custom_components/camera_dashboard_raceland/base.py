"""Base Camera Dashboard Raceland class."""
from __future__ import annotations

from dataclasses import asdict, dataclass, field
import logging
import pathlib
from typing import Any

from aiohttp.client import ClientSession
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.loader import Integration

from .exceptions import CameraExecutionStillInProgress

from .utils.logger import get_logger


@dataclass
class DashboardConfiguration:
    """Dashboard Configuration class."""
    config: dict[str, Any] = field(default_factory=dict)
    config_entry: ConfigEntry | None = None
    country: str = "ALL"
    debug: bool = False

    def to_json(self) -> str:
        """Return a json string."""
        return asdict(self)

    def update_from_dict(self, data: dict) -> None:
        """Set attributes from dicts."""
        if not isinstance(data, dict):
            raise CameraExecutionStillInProgress("Configuration is not valid.")

        for key in data:
            self.__setattr__(key, data[key])

class DashboardBase:
    """Base Dashboard class."""

    adders = {}
    devices = {}
    config = {}
    camera_database = {}
    configuration = DashboardConfiguration()
    hass: HomeAssistant | None = None
    integration: Integration | None = None
    log: logging.Logger = get_logger()
    session: ClientSession | None = None


    @property
    def integration_dir(self) -> pathlib.Path:
        """Return the Dashboard integration dir."""
        return self.integration.file_path
