const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

const customSchema=[//In case we want to implement more integrations for camera
// {
//   name: "integration",
//   selector: {
//     select: {
//       options: integrationOptions,
//       mode: "dropdown",
//     },
//   },
// },
{name:"name",selector:{text:{}}},{name:"still_image_url",selector:{text:{}}},{name:"stream_source",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"username",selector:{text:{}}},{name:"password",selector:{text:{type:"password"}}}]},{name:"advanced_options",selector:{boolean:{}}}];const customCameraExtraOptionSchema=[{name:"authentication",selector:{select:{options:["Basic","Digest"],mode:"dropdown"}}},{name:"verify_ssl",selector:{select:{options:["True","False"],mode:"dropdown"}}},{name:"rtsp_transport",selector:{select:{options:["tcp","udp","udp_multicast","http"],mode:"dropdown"}}},{name:"framerate",selector:{number:{min:1,max:60,step:1,mode:"slider",unit_of_measurement:"FPS"}}}];

export { customCameraExtraOptionSchema as a, customSchema as c };
