"""Store constants."""
from homeassistant.const import Platform

VERSION = "1.1"
NAME = "Camera Dashboard"

DOMAIN = "camera_dashboard_raceland"

CUSTOM_COMPONENTS = "custom_components"
INTEGRATION_FOLDER = DOMAIN
PANEL_FOLDER = "frontend"
PANEL_FILENAME = "dist/camera-dashboard.js"

CONF_CHANNEL = "channel"
CONF_STILL_URL_DOOR = "still_url_door"
CONF_STREAM_SOURCE_DOOR = "stream_source_door"
CONF_URL_IP = "ip"
CONF_ADD_MULTI_CHANNELS = "add_multi_channels"

DATA_ADDERS = "adders"
DOMAIN_GENERIC = "generic"
CONF_INTEGRATION_DEFAULT = "generic"
PLATFORM = [Platform.CAMERA]
PACKAGE_NAME = "custom_components.camera_dashboard_raceland"

CONFIG_STORAGE_FILE = "cameras_information"
CAMERA_DATABASE_FILE_NAME = "camera_database"

CONF_INTEGRATION = "integration"
CONF_RTSP_TRANSPORT = "rtsp_transport"

CONF_LIMIT_REFETCH_TO_URL_CHANGE = "limit_refetch_to_url_change"
CONF_STILL_IMAGE_URL = "still_image_url"
CONF_STREAM_SOURCE = "stream_source"
CONF_FRAMERATE = "framerate"
CONF_RTSP_TRANSPORT = "rtsp_transport"
ALLOWED_RTSP_TRANSPORT_PROTOCOLS = {"tcp", "udp", "udp_multicast", "http"}

DEFAULT_NAME = "Generic Camera"
GET_IMAGE_TIMEOUT = 10

CONF_USE_WALLCLOCK_AS_TIMESTAMPS = "use_wallclock_as_timestamps"