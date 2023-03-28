import{_ as i,c as e,d as t,t as a,$ as c,f as o,r as s,n}from"./main-0443badf.js";import"lit-html/is-server.js";import{al as r,am as l,an as d,ao as h,aq as f}from"./c.603f0acc.js";import"./c.4731e9ce.js";import"./c.af77ec57.js";import{a as u}from"./c.08cfec83.js";import{c as m}from"./c.d63070ce.js";import{b as g}from"./c.dfac5a1d.js";import"./c.039b4847.js";import"./c.40dd8e68.js";import"./c.b3195fc3.js";import"./c.d294c310.js";import"./c.183c12e5.js";import"./c.0f12f325.js";import"./c.4b06445e.js";import"./c.439151c3.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";import"./c.5fe2e3ab.js";import"./c.d26d51b2.js";import"./c.6c0b87be.js";import"./c.6779a076.js";import"./c.13a1cff7.js";import"./c.ff36e720.js";import"./c.1ded644c.js";import"./c.da136530.js";import"./c.00ac1e0f.js";import"./c.191982b7.js";import"./c.27b1d4ce.js";import"./c.3a0ccb1a.js";import"./c.e534c6cf.js";const p=r(g,l({image:d(h()),tap_action:d(u),hold_action:d(u)}));let _=i([n("hui-picture-card-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){f(i,p),this._config=i}},{kind:"get",key:"_image",value:function(){return this._config.image||""}},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action||{action:"none"}}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action||{action:"none"}}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return c``;const i=["navigate","url","call-service","none"];return c`
      <div class="card-config">
        <ha-textfield
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.image")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .value=${this._image}
          .configValue=${"image"}
          @input=${this._valueChanged}
        ></ha-textfield>
        <!-- <hui-theme-select-editor
          .hass=${this.hass}
          .value=${this._theme}
          .configValue=${"theme"}
          @value-changed=${this._valueChanged}
        ></hui-theme-select-editor> -->
        <!-- <div class="side-by-side">
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._tap_action}
            .actions=${i}
            .configValue=${"tap_action"}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._hold_action}
            .actions=${i}
            .configValue=${"hold_action"}
            @value-changed=${this._valueChanged}
          ></hui-action-editor>
        </div> -->
      </div>
    `}},{kind:"method",key:"_valueChanged",value:function(i){if(!this._config||!this.hass)return;const e=i.target,t=i.detail.value;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(!1===t||t?this._config={...this._config,[e.configValue]:t}:(this._config={...this._config},delete this._config[e.configValue])),o(this,"config-changed",{config:this._config}))}},{kind:"get",static:!0,key:"styles",value:function(){return[m,s`
        ha-textfield {
          display: block;
          margin-bottom: 8px;
        }
      `]}}]}}),e);export{_ as HuiPictureCardEditor};
