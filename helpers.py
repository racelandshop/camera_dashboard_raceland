
import logging

from homeassistant.const import CONF_NAME 

from .const import DATA_ADDERS, DOMAIN, DOMAIN_GENERIC

DATA_DEVICES = "devices"
DATA_CONFIG = "config"
CONFIG_DEVICES = "devices"

_LOGGER = logging.getLogger(__name__)

def setup_platform(hass, domain, config, async_add_devices, platform, cls):
    #TODO Deal with potencial overwriting errors

    def adder(hass, device_data):
        entity = cls(hass, device_data)
        async_add_devices([entity])
        return entity

    
    hass.data[domain].adders[platform] = adder
    return True

def get_devices(hass):
    return hass.data[DOMAIN].devices


def get_config(hass, camera_info):
    config = hass.data[DOMAIN].config.get(CONFIG_DEVICES, {})
    return config.get(CONF_NAME, {})

def create_entity(hass, camera_info):
    conf = get_config(hass, camera_info)
    adder = hass.data[DOMAIN].adders[DOMAIN_GENERIC] #Domain_generic should be replaced by the name of the integration
    entity = adder(hass, camera_info)
    return entity

