import{_ as i,c as e,t as r,$ as t,I as o,r as n,n as s}from"./main-0443badf.js";import"lit-html/is-server.js";i([s("hui-divider-row")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[r()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){if(!i)throw new Error("Error in card configuration.");this._config=i}},{kind:"method",key:"render",value:function(){return this._config?t`<div
      style=${this._config.style?o(this._config.style):""}
    ></div>`:t``}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      div {
        height: 1px;
        background-color: var(--entities-divider-color, var(--divider-color));
      }
    `}}]}}),e);
