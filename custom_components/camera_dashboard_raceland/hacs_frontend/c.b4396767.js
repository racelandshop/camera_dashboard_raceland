import{_ as i,c as e,d as t,t as a,b as o,$ as c,f as n,n as s}from"./main-0443badf.js";import"lit-html/is-server.js";import{al as l,am as h,an as r,ao as d,ap as f,aq as m,C as u,e as p}from"./c.603f0acc.js";import"./c.4731e9ce.js";import"./c.439151c3.js";import{a as g}from"./c.08cfec83.js";import{c as _}from"./c.d63070ce.js";import{b as v}from"./c.dfac5a1d.js";import"./c.039b4847.js";import"./c.40dd8e68.js";import"./c.b3195fc3.js";import"./c.d294c310.js";import"./c.183c12e5.js";import"./c.0f12f325.js";import"./c.4b06445e.js";import"./c.5fe2e3ab.js";import"./c.d26d51b2.js";import"./c.6c0b87be.js";import"./c.6779a076.js";import"./c.13a1cff7.js";import"./c.ff36e720.js";import"./c.1ded644c.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.da136530.js";import"./c.00ac1e0f.js";import"./c.191982b7.js";import"./c.4c3690c6.js";import"./c.af77ec57.js";import"./c.27b1d4ce.js";import"./c.3a0ccb1a.js";import"./c.e534c6cf.js";import"./c.408a3f19.js";const j=l(v,h({entity:r(d()),name:r(d()),show_name:r(f()),icon:r(d()),show_icon:r(f()),icon_height:r(d()),tap_action:r(g),hold_action:r(g),theme:r(d()),show_state:r(f())})),b=["more-info","toggle","navigate","url","call-service","none"];let k=i([s("hui-button-card-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){m(i,j),this._config=i}},{kind:"field",key:"_schema",value:()=>o(((i,e,t)=>[{name:"entity",selector:{entity:{domain:["light","switch","cover","automation","fan"]}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{placeholder:e||(null==t?void 0:t.attributes.icon),fallbackPath:e||null!=t&&t.attributes.icon||!t||!i?void 0:u(p(i),t)}}}]},{name:"",type:"grid",column_min_width:"100px",schema:[]},{name:"",type:"grid",schema:[]}]))},{kind:"get",key:"_tap_action",value:function(){return this._config.tap_action}},{kind:"get",key:"_hold_action",value:function(){return this._config.hold_action||{action:"more-info"}}},{kind:"method",key:"render",value:function(){var i;if(!this.hass||!this._config)return c``;const e=this._config.entity?this.hass.states[this._config.entity]:void 0,t=this._schema(this._config.entity,this._config.icon,e),a={show_name:!0,show_icon:!0,...this._config};return null!==(i=a.icon_height)&&void 0!==i&&i.includes("px")&&(a.icon_height=String(parseFloat(a.icon_height))),c`
      <ha-form
        .hass=${this.hass}
        .data=${a}
        .schema=${t}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <!-- <div class="card-config">
        <div class="side-by-side">
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._tap_action}
            .actions=${b}
            .configValue=${"tap_action"}
            .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
            @value-changed=${this._actionChanged}
          ></hui-action-editor>
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass=${this.hass}
            .config=${this._hold_action}
            .actions=${b}
            .configValue=${"hold_action"}
            .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
            @value-changed=${this._actionChanged}
          ></hui-action-editor>
        </div>
      </div> -->
    `}},{kind:"method",key:"_valueChanged",value:function(i){const e=i.detail.value;e.icon_height&&!e.icon_height.endsWith("px")&&(e.icon_height+="px"),n(this,"config-changed",{config:e})}},{kind:"field",key:"_computeLabelCallback",value(){return i=>"entity"===i.name?`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")}`:this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i.name}`)}},{kind:"method",key:"_actionChanged",value:function(i){if(!this._config||!this.hass)return;const e=i.target,t=i.detail.value;if(this[`_${e.configValue}`]===t)return;let a;e.configValue&&(!1===t||t?a={...this._config,[e.configValue]:t}:(a={...this._config},delete a[e.configValue])),n(this,"config-changed",{config:a})}},{kind:"get",static:!0,key:"styles",value:function(){return _}}]}}),e);export{k as HuiButtonCardEditor};
