import{_ as t,c as e,d as a,t as s,j as i,k as o,$ as r,r as c}from"./main-0443badf.js";import"lit-html/is-server.js";import{z as d,s as n}from"./c.603f0acc.js";import{C as h,S as l,f as m,u}from"./c.449fa12b.js";import"./c.1e8dc8c4.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";import"./c.ee3f8e81.js";let f=t(null,(function(t,e){class f extends e{constructor(...e){super(...e),t(this)}}return{F:f,d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[s()],key:"_cameraPrefs",value:void 0},{kind:"field",decorators:[s()],key:"_attached",value:()=>!1},{kind:"method",key:"connectedCallback",value:function(){i(o(f.prototype),"connectedCallback",this).call(this),this._attached=!0}},{kind:"method",key:"disconnectedCallback",value:function(){i(o(f.prototype),"disconnectedCallback",this).call(this),this._attached=!1}},{kind:"method",key:"render",value:function(){return this._attached&&this.hass&&this.stateObj?r`
      <ha-camera-stream
        .hass=${this.hass}
        .stateObj=${this.stateObj}
        allow-exoplayer
        controls
      ></ha-camera-stream>
      ${this._cameraPrefs,void 0}
    `:r``}},{kind:"method",key:"updated",value:function(t){if(!t.has("stateObj"))return;const e=t.get("stateObj"),a=e?e.entity_id:void 0,s=this.stateObj?this.stateObj.entity_id:void 0;s!==a&&s&&d(this.hass,"stream")&&n(this.stateObj,h)&&this.stateObj.attributes.frontend_stream_type===l&&this._fetchCameraPrefs()}},{kind:"method",key:"_fetchCameraPrefs",value:async function(){this._cameraPrefs=await m(this.hass,this.stateObj.entity_id)}},{kind:"method",key:"_handleCheckboxChanged",value:async function(t){const e=t.currentTarget;try{this._cameraPrefs=await u(this.hass,this.stateObj.entity_id,{preload_stream:e.checked})}catch(t){alert(t.message),e.checked=!e.checked}}},{kind:"get",static:!0,key:"styles",value:function(){return c`
      :host {
        display: block;
        position: relative;
        padding-bottom: 20px;
      }
      ha-formfield {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--secondary-background-color);
        padding-right: 16px;
        border-bottom-left-radius: 4px;
      }
    `}}]}}),e);customElements.define("more-info-camera",f);
