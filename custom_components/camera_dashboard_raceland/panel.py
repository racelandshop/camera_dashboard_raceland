import os
import logging

from homeassistant.components import frontend
from homeassistant.components import panel_custom

from .const import (
    CUSTOM_COMPONENTS,
    INTEGRATION_FOLDER,
    PANEL_FOLDER,
    PANEL_FILENAME,
    DOMAIN,
)


async def async_register_panel(hass):
    root_dir = os.path.join(hass.config.path(CUSTOM_COMPONENTS), INTEGRATION_FOLDER)
    panel_dir = os.path.join(root_dir, PANEL_FOLDER)
    view_url = os.path.join(panel_dir, PANEL_FILENAME)

    hass.http.register_static_path(
        "/api/panel_custom/camera_dashboard",
        view_url,
        cache_headers=False
    )

    await panel_custom.async_register_panel(
        hass,
        webcomponent_name="camera-dashboard",
        frontend_url_path=DOMAIN,
        module_url="/api/panel_custom/camera_dashboard",
        sidebar_title="Camera",
        sidebar_icon="mdi:camera",
        require_admin=True,
        config={},
    )


def async_unregister_panel(hass):
    frontend.async_remove_panel(hass, DOMAIN)
