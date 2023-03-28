import{_ as e,c as t,d as i,t as s,$ as a,f as o,n}from"./main-0443badf.js";import"./c.439151c3.js";import"lit-html/is-server.js";import{al as c,am as r,an as m,ar as h,ao as l,ax as d,ap as f,as as u,aq as p}from"./c.603f0acc.js";import"./c.d9d5a0c3.js";import{p as _}from"./c.1bd4cb51.js";import{e as g}from"./c.1f741597.js";import{b}from"./c.dfac5a1d.js";import"./c.b3195fc3.js";import"./c.039b4847.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";import"./c.e534c6cf.js";import"./c.0f12f325.js";import"./c.4b06445e.js";import"./c.08cfec83.js";const j=c(b,r({title:m(h([l(),d()])),theme:m(l()),columns:m(d()),show_name:m(f()),show_state:m(f()),show_icon:m(f()),state_color:m(f()),entities:u(g)})),k=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"columns",selector:{number:{min:1,mode:"box"}}},{name:"theme",selector:{theme:{}}}]},{name:"",type:"grid",column_min_width:"100px",schema:[{name:"show_name",selector:{boolean:{}}},{name:"show_icon",selector:{boolean:{}}},{name:"show_state",selector:{boolean:{}}}]},{name:"state_color",selector:{boolean:{}}}];let v=e([n("hui-glance-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",decorators:[s()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(e){p(e,j),this._config=e,this._configEntities=_(e.entities)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return a``;const e={show_name:!0,show_icon:!0,show_state:!0,...this._config};return a`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${k}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <hui-entity-editor
        .hass=${this.hass}
        .entities=${this._configEntities}
        @entities-changed=${this._entitiesChanged}
      ></hui-entity-editor>
    `}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.detail.value;o(this,"config-changed",{config:t})}},{kind:"method",key:"_entitiesChanged",value:function(e){let t=this._config;t={...t,entities:e.detail.entities},this._configEntities=_(this._config.entities),o(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.glance.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),t);export{v as HuiGlanceCardEditor};
