import{_ as a,c as e,d as t,t as s,b as i,$ as o,f as c,n}from"./main-0443badf.js";import"./c.439151c3.js";import"lit-html/is-server.js";import{al as l,am as r,an as m,ao as d,as as h,aq as u}from"./c.603f0acc.js";import{b as f}from"./c.dfac5a1d.js";import"./c.b3195fc3.js";import"./c.039b4847.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";const p=l(f,r({entity:m(d()),name:m(d()),states:m(h())})),_=["arm_home","arm_away","arm_night","arm_vacation","arm_custom_bypass"];let v=a([n("hui-alarm-panel-card-editor")],(function(a,e){return{F:class extends e{constructor(...e){super(...e),a(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(a){u(a,p),this._config=a}},{kind:"field",key:"_schema",value:()=>i((a=>[{name:"entity",required:!0,selector:{entity:{domain:"alarm_control_panel"}}},{name:"name",selector:{text:{}}},{type:"multi_select",name:"states",options:_.map((e=>[e,a(`ui.card.alarm_control_panel.${e}`)]))}]))},{kind:"method",key:"render",value:function(){return this.hass&&this._config?o`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema(this.hass.localize)}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:o``}},{kind:"method",key:"_valueChanged",value:function(a){c(this,"config-changed",{config:a.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return a=>"entity"===a.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"):"name"===a.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.name"):this.hass.localize(`ui.panel.lovelace.editor.card.alarm-panel.${"states"===a.name?"available_states":a.name}`)}}]}}),e);export{v as HuiAlarmPanelCardEditor};
