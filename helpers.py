
import logging
from slugify import slugify

from .const import STORAGE_FILE


from homeassistant.const import CONF_NAME 
from homeassistant.util import uuid as uuid_util
from homeassistant.helpers.storage import Store


from .const import DATA_ADDERS, DOMAIN, DOMAIN_GENERIC

DATA_DEVICES = "devices"
DATA_CONFIG = "config"
CONFIG_DEVICES = "devices"

_LOGGER = logging.getLogger(__name__)

def setup_platform(hass, domain, config, async_add_devices, platform_map):
   
    def adder(hass, device_data, identifier):
        device_name = slugify(device_data["name"])
        if (identifier == None): 
            identifier = f"camera-{uuid_util.random_uuid_hex()}-{device_name}"
        cls = platform_map[device_data["integration"]]
        entity = cls(hass, device_data, identifier)
        async_add_devices([entity])
        return entity
    hass.data[domain].adders = adder

    return True

def create_entity(hass, camera_info, identifier = None):
    adder = hass.data[DOMAIN].adders
    entity = adder(hass, camera_info, identifier = identifier)
    return entity


async def load_from_storage(hass, key): 
    """Load devices from the storage."""
    store = Store(hass, version = 1, key = key)
    devices = await store.async_load()
    return devices if devices is not None else []

async def save_to_storage(hass, data, key):
    """Save data to storage."""
    store = Store(hass, version = 1, key = key)
    await store.async_save(data)


def get_domain_camera(entities): 
    """Returns a dicitonary of unique_id key and camera entities values registered in this domain."""
    return {entity.unique_id: entity for entity in entities.values() if entity.entity_id.split(".")[0] == "camera" and entity.platform == DOMAIN}
