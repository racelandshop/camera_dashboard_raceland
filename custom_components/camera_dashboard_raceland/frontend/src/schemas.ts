export const customSchema = [
  //In case we want to implement more camere integrations in the backend
  // {
  //   name: "integration",
  //   selector: {
  //     select: {
  //       options: integrationOptions,
  //       mode: "dropdown",
  //     },
  //   },
  // },
  {
    name: 'name',
    selector: { text: {} },
  },
  {
    name: 'still_image_url',
    selector: { text: {} },
  },
  {
    name: 'stream_source',
    selector: { text: {} },
  },
  {
    type: 'grid',
    name: '',
    schema: [
      {
        name: 'username',
        selector: { text: {} },
      },
      {
        name: 'password',
        selector: { text: { type: 'password' } },
      },
    ],
  },
  { name: 'advanced_options', selector: { boolean: {} } },
];

export const customCameraExtraOptionSchema = [
  {
    name: 'authentication',
    selector: {
      select: {
        options: ['Basic', 'Digest'],
        mode: 'dropdown',
      },
    },
  },
  {
    name: 'verify_ssl',
    selector: {
      select: {
        options: ['True', 'False'],
        mode: 'dropdown',
      },
    },
  },
  {
    name: 'rtsp_transport',
    selector: {
      select: {
        options: ['None','tcp', 'udp', 'udp_multicast', 'http'],
        mode: 'dropdown',
      },
    },
  },
  {
    name: 'framerate',
    selector: {
      number: {
        min: 1,
        max: 60,
        step: 1,
        mode: 'slider',
        unit_of_measurement: 'FPS',
      },
    },
  },
];

export const defaultCustomCameraAdvanceOptions = { framerate: 2 };
