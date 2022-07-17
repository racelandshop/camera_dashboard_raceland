
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

#TODO: Remove these functions when the integration is ready
# def get_devices(hass):
#     return hass.data[DOMAIN].devices


def create_entity(hass, camera_info, integration):
    adder = hass.data[DOMAIN].adders[integration] 
    entity = adder(hass, camera_info)
    return entity

