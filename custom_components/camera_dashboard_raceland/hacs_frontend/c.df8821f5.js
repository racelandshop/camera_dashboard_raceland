import{_ as e,c as i,d as t,t as a,$ as s,f as o,n as c}from"./main-0443badf.js";import"./c.439151c3.js";import"lit-html/is-server.js";import{al as n,am as r,an as h,as as l,ao as d,ax as m,aq as u}from"./c.603f0acc.js";import"./c.348ba059.js";import{b as f}from"./c.dfac5a1d.js";import"./c.b3195fc3.js";import"./c.039b4847.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";import"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";import"./c.0f12f325.js";import"./c.4b06445e.js";const p=n(f,r({entities:h(l(d())),title:h(d()),hours_to_show:h(m()),theme:h(d())})),g=[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"theme",selector:{theme:{}}},{name:"hours_to_show",selector:{number:{mode:"box",min:1}}}]}];let k=e([c("hui-logbook-card-editor")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){u(e,p),this._config=e}},{kind:"get",key:"_entities",value:function(){return this._config.entities||[]}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?s`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${g}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
      <h3>
        ${`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})`}
      </h3>
      <ha-entities-picker
        .hass=${this.hass}
        .value=${this._entities}
        @value-changed=${this._entitiesChanged}
      >
      </ha-entities-picker>
    `:s``}},{kind:"method",key:"_entitiesChanged",value:function(e){this._config={...this._config,entities:e.detail.value},o(this,"config-changed",{config:this._config})}},{kind:"method",key:"_valueChanged",value:function(e){o(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.logbook.${e.name}`)}}]}}),i);export{k as HuiLogbookCardEditor};
