import{_ as e,c as a,d as t,t as i,$ as s,f as c,n as o}from"./main-0443badf.js";import"./c.439151c3.js";import"lit-html/is-server.js";import{al as n,am as r,an as d,ao as l,aq as m}from"./c.603f0acc.js";import{b as h}from"./c.dfac5a1d.js";import"./c.b3195fc3.js";import"./c.039b4847.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";const u=n(h,r({entity:d(l()),name:d(l()),theme:d(l())})),f=[{name:"entity",selector:{entity:{domain:"climate"}}},{type:"grid",name:"",schema:[{name:"name",required:!1,selector:{text:{}}}]}];let p=e([o("hui-thermostat-card-editor")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){m(e,u),this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?s`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${f}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:s``}},{kind:"method",key:"_valueChanged",value:function(e){c(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"entity"===e.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),a);export{p as HuiThermostatCardEditor};
