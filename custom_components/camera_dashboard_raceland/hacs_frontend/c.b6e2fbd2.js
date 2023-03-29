import{_ as e,c as i,d as a,t,b as s,$ as c,f as o,r as n,n as r}from"./main-0443badf.js";import"./c.348ba059.js";import"./c.439151c3.js";import"lit-html/is-server.js";import{al as l,am as d,an as h,ar as m,ao as u,ap as f,as as p,aq as v}from"./c.603f0acc.js";import{b as k}from"./c.dfac5a1d.js";import"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";import"./c.0f12f325.js";import"./c.4b06445e.js";import"./c.b3195fc3.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";const g=l(k,d({title:h(m([u(),f()])),initial_view:h(u()),theme:h(u()),entities:p(u())})),j=["dayGridMonth","dayGridDay","listWeek"];let _=e([r("hui-calendar-card-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){v(e,g),this._config=e}},{kind:"field",key:"_schema",value:()=>s((e=>[{name:"",type:"grid",schema:[{name:"title",required:!1,selector:{text:{}}},{name:"initial_view",required:!1,selector:{select:{options:j.map((i=>[i,e(`ui.panel.lovelace.editor.card.calendar.views.${i}`)]))}}}]},{name:"theme",required:!1,selector:{theme:{}}}]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return c``;const e=this._schema(this.hass.localize),i={initial_view:"dayGridMonth",...this._config};return c`
      <ha-form
        .hass=${this.hass}
        .data=${i}
        .schema=${e}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <h3>
        ${this.hass.localize("ui.panel.lovelace.editor.card.calendar.calendar_entities")+" ("+this.hass.localize("ui.panel.lovelace.editor.card.config.required")+")"}
      </h3>
      <ha-entities-picker
        .hass=${this.hass}
        .value=${this._config.entities}
        .includeDomains=${["calendar"]}
        @value-changed=${this._entitiesChanged}
      >
      </ha-entities-picker>
    `}},{kind:"method",key:"_valueChanged",value:function(e){const i=e.detail.value;o(this,"config-changed",{config:i})}},{kind:"method",key:"_entitiesChanged",value:function(e){const i={...this._config,entities:e.detail.value};o(this,"config-changed",{config:i})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"title"===e.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.title"):this.hass.localize(`ui.panel.lovelace.editor.card.calendar.${e.name}`)}},{kind:"field",static:!0,key:"styles",value:()=>n`
    ha-form {
      display: block;
      overflow: auto;
    }
  `}]}}),i);export{_ as HuiCalendarCardEditor};
