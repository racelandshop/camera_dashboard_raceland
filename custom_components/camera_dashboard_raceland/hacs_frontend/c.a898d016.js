import{_ as e,c as i,d as a,t,$ as c,f as o,n as s}from"./main-0443badf.js";import"lit-html/is-server.js";import{al as n,am as r,an as l,ao as d,ap as h,aq as m}from"./c.603f0acc.js";import"./c.4731e9ce.js";import{a as f}from"./c.08cfec83.js";import{b as p}from"./c.dfac5a1d.js";import{c as u}from"./c.d63070ce.js";import"./c.039b4847.js";import"./c.40dd8e68.js";import"./c.b3195fc3.js";import"./c.d294c310.js";import"./c.183c12e5.js";import"./c.0f12f325.js";import"./c.4b06445e.js";import"./c.439151c3.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";import"./c.5fe2e3ab.js";import"./c.d26d51b2.js";import"./c.6c0b87be.js";import"./c.6779a076.js";import"./c.13a1cff7.js";import"./c.ff36e720.js";import"./c.1ded644c.js";import"./c.da136530.js";import"./c.00ac1e0f.js";import"./c.191982b7.js";import"./c.af77ec57.js";import"./c.27b1d4ce.js";import"./c.3a0ccb1a.js";import"./c.e534c6cf.js";const g=n(p,r({entity:l(d()),image:l(d()),name:l(d()),camera_image:l(d()),camera_view:l(d()),aspect_ratio:l(d()),tap_action:l(f),hold_action:l(f),show_name:l(h()),show_state:l(h()),theme:l(d())})),_=[{name:"entity",required:!0,selector:{entity:{domain:"camera"}}},{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"camera_view",selector:{select:{options:["auto","live"]}}}]}];let v=e([s("hui-picture-camera-card-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){m(e,g),this._config=e}},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action||{action:"more-info"}}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return c``;const e=["more-info","toggle","navigate","call-service","none"],i={show_state:!0,show_name:!0,camera_view:"auto",...this._config};return c`
      <ha-form
        .hass=${this.hass}
        .data=${i}
        .schema=${_}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <!-- <div class="card-config">
        <div class="side-by-side">
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._tap_action}
            .actions=${e}
            .configValue=${"tap_action"}
            @value-changed=${this._changed}
          ></hui-action-editor>
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._hold_action}
            .actions=${e}
            .configValue=${"hold_action"}
            @value-changed=${this._changed}
          ></hui-action-editor>
        </div>
      </div> -->
    `}},{kind:"method",key:"_valueChanged",value:function(e){o(this,"config-changed",{config:e.detail.value})}},{kind:"method",key:"_changed",value:function(e){if(!this._config||!this.hass)return;const i=e.target,a=e.detail.value;this[`_${i.configValue}`]!==a&&(!1===a||a?this._config={...this._config,[i.configValue]:a}:(this._config={...this._config},delete this._config[i.configValue]),o(this,"config-changed",{config:this._config}))}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"entity"===e.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.picture-entity.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>u}]}}),i);export{v as HuiPictureEntityCardEditor};
