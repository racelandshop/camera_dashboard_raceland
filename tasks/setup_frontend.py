""""Starting setup task: Frontend"."""
from __future__ import annotations
from aiohttp import web

from homeassistant.components.http import HomeAssistantView
from homeassistant.core import HomeAssistant

from ..base import CameraBase
from ..const import DOMAIN, SetupStage
from ..hacs_frontend import locate_dir
from ..hacs_frontend.version import VERSION as FE_VERSION
from .base import CameraDashboardTask

URL_BASE = "/camera_dashboard_files" #TODO: Figure out this in production


async def async_setup_task(hacs: CameraBase, hass: HomeAssistant) -> Task:
    """Set up this task."""
    return Task(hacs=hacs, hass=hass)


class Task(CameraDashboardTask):
    """Setup the HACS frontend."""

    stages = [SetupStage.SETUP]

    async def async_execute(self) -> None:
        """Execute the task."""

        # Register frontend
        if self.hacs.configuration.frontend_repo_url:
            self.task_logger(
                self.hacs.log.warning,
                "Frontend development mode enabled. Do not run in production!",
            )
            self.hass.http.register_view(HacsFrontendDev())
        else:
            #
            self.hass.http.register_static_path(
                f"{URL_BASE}/frontend", locate_dir(), cache_headers=False
            )

        # Custom iconset
        self.hass.http.register_static_path(
            f"{URL_BASE}/iconset.js", str(self.hacs.integration_dir / "iconset.js")
        )
        if "frontend_extra_module_url" not in self.hass.data:
            self.hass.data["frontend_extra_module_url"] = set()
        self.hass.data["frontend_extra_module_url"].add(f"{URL_BASE}/iconset.js")

        self.hacs.frontend_version = FE_VERSION

        # Add to sidepanel if needed
        if DOMAIN not in self.hass.data.get("frontend_panels", {}):
            self.hass.components.frontend.async_register_built_in_panel(
                component_name="custom",
                sidebar_title=self.hacs.configuration.sidepanel_title,
                sidebar_icon=self.hacs.configuration.sidepanel_icon,
                frontend_url_path=DOMAIN,
                config={
                    "_panel_custom": {
                        "name": "cameras-dashboard",
                        "embed_iframe": True,
                        "trust_external": False,
                        "js_url": f"/hacsfiles/frontend/entrypoint.js?hacstag={FE_VERSION}", # TODO Probably I have to eddit this line when in production
                    }
                },
                require_admin=True,
            )


class HacsFrontendDev(HomeAssistantView):
    """Dev View Class for HACS."""

    requires_auth = False
    name = "hacs_files:frontend"
    url = r"/hacsfiles/frontend/{requested_file:.+}"

    async def get(self, request, requested_file):  # pylint: disable=unused-argument
        """Handle HACS Web requests."""
        hacs: CameraBase = request.app["hass"].data.get(DOMAIN)
        hacs.log.info("Helo world from the frontend")
        requested = requested_file.split("/")[-1]
        request = await hacs.session.get(f"{hacs.configuration.frontend_repo_url}/{requested}")
        if request.status == 200:
            result = await request.read()
            response = web.Response(body=result)
            response.headers["Content-Type"] = "application/javascript"

            return response
