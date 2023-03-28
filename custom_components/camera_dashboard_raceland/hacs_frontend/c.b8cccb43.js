import{_ as e,d as a,g as i,t,c as s,x as r,f as n,q as o}from"./main-b570e60a.js";import"./c.9e58f139.js";import{al as l,am as c,an as d,ao as m,ax as u,ap as h,aq as v}from"./c.5a5021e9.js";import{b as g}from"./c.08872315.js";import"./c.f9bdd698.js";import"./c.2aff7a3c.js";import"./c.81a9389e.js";import"./c.a5b80b3f.js";import"./c.3df9613c.js";import"./c.a6c70980.js";const y=l(g,c({name:d(m()),entity:d(m()),unit:d(m()),min:d(u()),max:d(u()),severity:d(c()),theme:d(m()),needle:d(h())}));let f=e([o("hui-gauge-card-editor")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){v(e,y),this._config=e}},{kind:"field",key:"_schema",value:()=>s((e=>{const a=[{name:"entity",selector:{entity:{domain:["counter","input_number","number","sensor"]}}},{name:"",type:"grid",schema:[{name:"name",selector:{text:{}}},{name:"unit",selector:{text:{max:10}}}]},{name:"",type:"grid",schema:[{name:"min",selector:{number:{min:0,mode:"box"}}},{name:"max",selector:{number:{min:1,mode:"box"}}}]},{name:"",type:"grid",schema:[{name:"needle",selector:{boolean:{}}},{name:"show_severity",selector:{boolean:{}}}]}];return e&&a.push({name:"",type:"grid",schema:[{name:"green",selector:{number:{min:0,mode:"box"}}},{name:"yellow",selector:{number:{min:0,mode:"box"}}},{name:"red",selector:{number:{min:0,mode:"box"}}}]}),a}))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return r``;const e=this._schema(void 0!==this._config.severity),a={show_severity:void 0!==this._config.severity,...this._config};return r`
      <ha-form
        .hass=${this.hass}
        .data=${a}
        .schema=${e}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){let a=e.detail.value;var i,t,s;a.show_severity?a={...a,severity:{green:a.green||0===a.green?a.green:null===(i=a.severity)||void 0===i?void 0:i.green,yellow:a.yellow||0===a.yellow?a.yellow:null===(t=a.severity)||void 0===t?void 0:t.yellow,red:a.red||0===a.red?a.red:null===(s=a.severity)||void 0===s?void 0:s.red}}:!a.show_severity&&a.severity&&delete a.severity;delete a.show_severity,delete a.green,delete a.yellow,delete a.red,n(this,"config-changed",{config:a})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>{switch(e.name){case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})`;case"max":return this.hass.localize("ui.panel.lovelace.editor.card.generic.maximum");case"min":return this.hass.localize("ui.panel.lovelace.editor.card.generic.minimum");case"show_severity":return this.hass.localize("ui.panel.lovelace.editor.card.gauge.severity.define");case"needle":return this.hass.localize("ui.panel.lovelace.editor.card.gauge.needle_gauge")}return this.hass.localize(`ui.panel.lovelace.editor.card.gauge.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)||this.hass.localize(`ui.panel.lovelace.editor.card.gauge.severity.${e.name}`)}}}]}}),a);export{f as HuiGaugeCardEditor};
