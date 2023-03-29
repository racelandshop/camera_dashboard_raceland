import{_ as i,c as e,d as t,t as a,b as c,$ as o,f as s,r as n,n as l}from"./main-0443badf.js";import"lit-html/is-server.js";import{al as r,am as d,an as h,ao as f,aq as m,C as u,e as g}from"./c.603f0acc.js";import"./c.4731e9ce.js";import{c as p}from"./c.d63070ce.js";import{b as _}from"./c.dfac5a1d.js";import"./c.039b4847.js";import"./c.40dd8e68.js";import"./c.b3195fc3.js";import"./c.d294c310.js";import"./c.183c12e5.js";import"./c.0f12f325.js";import"./c.4b06445e.js";import"./c.439151c3.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";import"./c.5fe2e3ab.js";import"./c.d26d51b2.js";import"./c.6c0b87be.js";import"./c.6779a076.js";import"./c.13a1cff7.js";import"./c.ff36e720.js";import"./c.1ded644c.js";import"./c.da136530.js";import"./c.00ac1e0f.js";import"./c.191982b7.js";import"./c.af77ec57.js";import"./c.27b1d4ce.js";import"./c.3a0ccb1a.js";import"./c.e534c6cf.js";const j=r(_,d({name:h(f()),entity:h(f()),theme:h(f()),icon:h(f())}));let v=i([l("hui-light-card-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){m(i,j),this._config=i}},{kind:"field",key:"_schema",value:()=>c(((i,e,t)=>[{name:"entity",required:!0,selector:{entity:{domain:"light"}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{placeholder:e||(null==t?void 0:t.attributes.icon),fallbackPath:e||null!=t&&t.attributes.icon||!t||!i?void 0:u(g(i),t)}}}]}]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return o``;const i=["more-info","toggle","navigate","url","call-service","none"],e=this.hass.states[this._config.entity],t=this._schema(this._config.entity,this._config.icon,e);return o`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${t}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <!-- <div class="card-config">
        <hui-action-editor
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .hass=${this.hass}
          .config=${this._hold_action}
          .actions=${i}
          .configValue=${"hold_action"}
          @value-changed=${this._actionChanged}
        ></hui-action-editor>

        <hui-action-editor
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.double_tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .hass=${this.hass}
          .config=${this._double_tap_action}
          .actions=${i}
          .configValue=${"double_tap_action"}
          @value-changed=${this._actionChanged}
        ></hui-action-editor>
      </div> -->
    `}},{kind:"method",key:"_actionChanged",value:function(i){if(!this._config||!this.hass)return;const e=i.target,t=i.detail.value;this[`_${e.configValue}`]!==t&&(e.configValue&&(!1===t||t?this._config={...this._config,[e.configValue]:t}:(this._config={...this._config},delete this._config[e.configValue])),s(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_valueChanged",value:function(i){s(this,"config-changed",{config:i.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return i=>"entity"===i.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>[p,n`
      /* ha-form,
      hui-action-editor {
        display: block;
        margin-bottom: 24px;
        overflow: auto;
      } */
    `]}]}}),e);export{v as HuiLightCardEditor};
