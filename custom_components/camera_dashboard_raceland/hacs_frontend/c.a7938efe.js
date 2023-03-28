import{_ as t,c as i,d as e,t as o,$ as s,n}from"./main-0443badf.js";import"lit-html/is-server.js";import{L as a,e as r}from"./c.603f0acc.js";import{U as c}from"./c.449fa12b.js";import"./c.4ac03fec.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";let d=t([n("hui-buttons-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"method",static:!0,key:"getStubConfig",value:function(){return{entities:[]}}},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(t){this._configEntities=c(t.entities).map((t=>({tap_action:{action:t.entity&&a.has(r(t.entity))?"toggle":"more-info"},hold_action:{action:"more-info"},...t})))}},{kind:"method",key:"render",value:function(){return s`
      <hui-buttons-base
        .hass=${this.hass}
        .configEntities=${this._configEntities}
      ></hui-buttons-base>
    `}}]}}),i);export{d as HuiButtonsRow};
