"""
Raceland camera dashboard gives you a powerfull integration that allows the user to manage cameras.
"""
from __future__ import annotations
from typing import Any
from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry
from homeassistant.helpers import entity_registry

from .base import DashboardBase
from .const import (
    DOMAIN, 
    CONFIG_STORAGE_FILE
)
from .helpers import load_from_storage
from .panel import async_register_panel
from .websockets import async_register_websockets

import logging
_LOGGER = logging.getLogger(__name__)


async def async_initialize_integration(
    hass: HomeAssistant,
    *,
    config_entry: ConfigEntry | None = None,
    ) -> bool:
    """Initialize the integration"""
    if hass.data.get(DOMAIN) == None:
        hass.data[DOMAIN] = cameraBase = DashboardBase()
    else:
        cameraBase = hass.data[DOMAIN]
    cameraBase.hass = hass

    
    if config_entry is not None:
        cameraBase.configuration.update_from_dict(
            {
                "config_entry": config_entry,
                **config_entry.options,
            }
        )

    # In case there are entities not in the .storage files but still on entity registry (can happen if HA is restarted right after a camera is removed)
    er = entity_registry.async_get(hass)
    
    registered_cameras = [
        (entity_id, entity.unique_id)
        for (entity_id, entity) in er.entities.items()
        if entity_id.startswith("camera.") and entity.unique_id.startswith("camera-") #TODO. Can I fecth the entity integration istead? 
    ]

    storage_camera = [
        camera["unique_id"] for camera in await load_from_storage(hass, CONFIG_STORAGE_FILE)
    ]
    
    [
        er.async_remove(camera[0])
        for camera in registered_cameras
        if camera[1] not in storage_camera
    ]


    # Register camera platform
    hass.config_entries.async_setup_platforms(
            cameraBase.configuration.config_entry, ["camera"]
        )
    await async_register_websockets(hass)
    await async_register_panel(hass)

    return True

async def async_setup_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Set up this integration using UI."""
    config_entry.async_on_unload(config_entry.add_update_listener(async_reload_entry))
    return await async_initialize_integration(hass=hass, config_entry=config_entry)


async def async_setup_database(hass, config):
    """Setup the Camera Database for the integration 
    Uses YAML file"""
    if hass.data.get(DOMAIN) == None:
        hass.data[DOMAIN] = cameraBase = DashboardBase()
    else:
        cameraBase = hass.data[DOMAIN]
    cameraBase.camera_database = config[DOMAIN]["data"]
    return True

async def async_setup(hass: HomeAssistant, config: dict[str, Any]) -> bool:
    """Set up this integration using yaml. Currently being used to read the Database of Camera Models"""
    return await async_setup_database(hass, config)


## TODO: Review these piece of code
async def async_unload_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> bool:
    """Handle removal of an entry."""
    hacs: DashboardBase = hass.data[DOMAIN]

    # Clear out pending queue
    #hacs.queue.clear()

    # for task in hacs.recuring_tasks:
    #     # Cancel all pending tasks
    #     task()

    try:
        if hass.data.get("frontend_panels", {}).get("hacs"):
            hacs.log.info("Removing sidepanel")
            hass.components.frontend.async_remove_panel("hacs")
    except AttributeError:
        pass

    platforms = ["camera"]

    unload_ok = await hass.config_entries.async_unload_platforms(
        config_entry, platforms
    )

    ##hacs.disable_hacs(CameraDashboardDisabledReason.REMOVED)
    hass.data.pop(DOMAIN, None)
    return unload_ok

async def async_reload_entry(hass: HomeAssistant, config_entry: ConfigEntry) -> None:
    """Reload the Camera Dashboard config entry."""
    await async_unload_entry(hass, config_entry)
    await async_setup_entry(hass, config_entry)

####
#TODO Implement in CameraDashboardRaceland
#When are these functions called?  I don't think I need to have them in the code
# async def async_unload_entry(hass, entry):
#     """Unload Alarmo config entry."""
#     unload_ok = all(
#         await asyncio.gather(
#             *[hass.config_entries.async_forward_entry_unload(entry, PLATFORM)]
#         )
#     )
#     if not unload_ok:
#         return False

#     async_unregister_panel(hass)
#     coordinator = hass.data[const.DOMAIN]["coordinator"]
#     await coordinator.async_unload()
#     return True

# async def async_remove_entry(hass, entry):
#     """Remove Alarmo config entry."""
#     async_unregister_panel(hass)
#     coordinator = hass.data[const.DOMAIN]["coordinator"]
#     await coordinator.async_delete_config()
#     del hass.data[const.DOMAIN]

