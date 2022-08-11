
import logging

from homeassistant.const import CONF_NAME 
from homeassistant.util import uuid as uuid_util
from homeassistant.helpers.storage import Store


from .const import DATA_ADDERS, DOMAIN, DOMAIN_GENERIC

DATA_DEVICES = "devices"
DATA_CONFIG = "config"
CONFIG_DEVICES = "devices"

_LOGGER = logging.getLogger(__name__)

def setup_platform(hass, domain, config, async_add_devices, platform, cls):
    #TODO Deal with potencial overwriting errors

    def adder(hass, device_data):
        device_name = device_data.get("name", "")
        identifier = f"camera-{uuid_util.random_uuid_hex()}-{device_name}"
        entity = cls(hass, device_data, identifier)
        async_add_devices([entity])
        return entity

    
    hass.data[domain].adders[platform] = adder
    return True


def create_entity(hass, camera_info, integration):
    adder = hass.data[DOMAIN].adders[integration] 
    entity = adder(hass, camera_info)
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
