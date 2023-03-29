import{_ as i,c as e,d as t,t as a,$ as c,f as o,n as s}from"./main-0443badf.js";import"./c.4731e9ce.js";import"./c.439151c3.js";import"lit-html/is-server.js";import{al as n,am as r,an as l,ao as d,as as h,aq as f}from"./c.603f0acc.js";import"./c.d9d5a0c3.js";import{p as m}from"./c.1bd4cb51.js";import{a as g}from"./c.08cfec83.js";import{b as u}from"./c.dfac5a1d.js";import{e as p}from"./c.1f741597.js";import{c as _}from"./c.d63070ce.js";import"./c.039b4847.js";import"./c.40dd8e68.js";import"./c.b3195fc3.js";import"./c.d294c310.js";import"./c.183c12e5.js";import"./c.0f12f325.js";import"./c.4b06445e.js";import"./c.5fe2e3ab.js";import"./c.d26d51b2.js";import"./c.6c0b87be.js";import"./c.6779a076.js";import"./c.13a1cff7.js";import"./c.ff36e720.js";import"./c.1ded644c.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.da136530.js";import"./c.00ac1e0f.js";import"./c.191982b7.js";import"./c.4c3690c6.js";import"./c.af77ec57.js";import"./c.27b1d4ce.js";import"./c.3a0ccb1a.js";import"./c.e534c6cf.js";import"./c.408a3f19.js";const v=n(u,r({title:l(d()),entity:l(d()),image:l(d()),camera_image:l(d()),camera_view:l(d()),aspect_ratio:l(d()),tap_action:l(g),hold_action:l(g),entities:h(p),theme:l(d())})),j=["more-info","toggle","navigate","call-service","none"],k=[{name:"title",selector:{text:{}}},{name:"image",selector:{text:{}}},{name:"camera_image",selector:{entity:{domain:"camera"}}},{name:"",type:"grid",schema:[{name:"camera_view",selector:{select:{options:["auto","live"]}}},{name:"aspect_ratio",selector:{text:{}}}]},{name:"entity",selector:{entity:{}}}];let b=i([s("hui-picture-glance-card-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"field",decorators:[a()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(i){f(i,v),this._config=i,this._configEntities=m(i.entities)}},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action||{action:"toggle"}}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action||{action:"more-info"}}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return c``;const i={camera_view:"auto",...this._config};return c`
      <ha-form
        .hass=${this.hass}
        .data=${i}
        .schema=${k}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <div class="card-config">
        <div class="side-by-side">
          <hui-action-editor
            .label=${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")}
            .hass=${this.hass}
            .config=${this._tap_action}
            .actions=${j}
            .configValue=${"tap_action"}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
          <hui-action-editor
            .label=${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")}
            .hass=${this.hass}
            .config=${this._hold_action}
            .actions=${j}
            .configValue=${"hold_action"}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
        </div>
        <hui-entity-editor
          .hass=${this.hass}
          .entities=${this._configEntities}
          @entities-changed=${this._changed}
        ></hui-entity-editor>
      </div>
    `}},{kind:"method",key:"_valueChanged",value:function(i){o(this,"config-changed",{config:i.detail.value})}},{kind:"method",key:"_changed",value:function(i){if(!this._config||!this.hass)return;const e=i.target,t=i.detail.value;if(i.detail&&i.detail.entities)this._config={...this._config,entities:i.detail.entities},this._configEntities=m(this._config.entities);else if(e.configValue){if(this[`_${e.configValue}`]===t)return;!1===t||t?this._config={...this._config,[e.configValue]:t}:(this._config={...this._config},delete this._config[e.configValue])}o(this,"config-changed",{config:this._config})}},{kind:"field",key:"_computeLabelCallback",value(){return i=>"entity"===i.name?this.hass.localize("ui.panel.lovelace.editor.card.picture-glance.state_entity"):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.picture-glance.${i.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>_}]}}),e);export{b as HuiPictureGlanceCardEditor};
