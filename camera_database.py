#Devs note: When adding new fields to the static and stream url, or to the fields a new key has to added to the Settup websocket_API 
#Any new logic regarding these fields can also be implemented

CAMERADATABASE = {"Manufacturer": [
  {"name": "Hikvision", "models": [
    {"version": 1111},  
    {"version": "16CH-TVI"},
    {"version": "HWI-D620H-Z", "options": {
      "static": "http://{{ ip }}{{ still_url_door }}/ISAPI/Streaming/channels/{{ channel }}01/picture",
      "stream": "rtsp://{{ ip }}{{ stream_source_door }}/Streaming/Channels/{{ channel }}01",
      },
      "fields": {"username" : {"name": "username", "selector": { "text": {} }},"password" : {"name": "password", "selector": { "text": { "type": "password" } }}}
    }
  ]},
  {"name": "Logitech", "models": [
    {"version": 5050},
    {"version": 525}
  ]}
]}