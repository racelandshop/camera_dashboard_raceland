import{_ as e,c as i,d as t,t as s,$ as a,f as o,r as n,n as c}from"./main-0443badf.js";import"./c.439151c3.js";import"lit-html/is-server.js";import{al as r,am as d,as as h,an as m,ao as f,ax as l,aq as u}from"./c.603f0acc.js";import"./c.d9d5a0c3.js";import{p}from"./c.1bd4cb51.js";import{e as g}from"./c.1f741597.js";import{b as _}from"./c.dfac5a1d.js";import"./c.b3195fc3.js";import"./c.039b4847.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";import"./c.e534c6cf.js";import"./c.0f12f325.js";import"./c.4b06445e.js";import"./c.08cfec83.js";const k=r(_,d({entities:h(g),title:m(f()),hours_to_show:m(l()),refresh_interval:m(l())})),v=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"hours_to_show",selector:{number:{min:1,mode:"box"}}},{name:"refresh_interval",selector:{number:{min:1,mode:"box"}}}]}];let b=e([c("hui-history-graph-card-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",decorators:[s()],key:"_configEntities",value:void 0},{kind:"method",key:"setConfig",value:function(e){u(e,k),this._config=e,this._configEntities=p(e.entities)}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?a`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${v}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <hui-entity-editor
        .hass=${this.hass}
        .entities=${this._configEntities}
        @entities-changed=${this._entitiesChanged}
      ></hui-entity-editor>
    `:a``}},{kind:"method",key:"_valueChanged",value:function(e){o(this,"config-changed",{config:e.detail.value})}},{kind:"method",key:"_entitiesChanged",value:function(e){let i=this._config;i={...i,entities:e.detail.entities},this._configEntities=p(i.entities),o(this,"config-changed",{config:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>n`
    ha-form {
      margin-bottom: 24px;
    }
  `}]}}),i);export{b as HuiHistoryGraphCardEditor};
