import{_ as e,c as t,d as a,t as i,b as s,$ as o,f as c,n}from"./main-0443badf.js";import"./c.439151c3.js";import"lit-html/is-server.js";import{al as r,am as l,an as m,ao as d,ap as h,aq as u,C as f,e as p}from"./c.603f0acc.js";import{h as b}from"./c.dbb16202.js";import{b as k}from"./c.dfac5a1d.js";import"./c.b3195fc3.js";import"./c.039b4847.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";import"./c.08cfec83.js";import"./c.1f741597.js";const v=r(k,l({entity:m(d()),name:m(d()),icon:m(d()),attribute:m(d()),unit:m(d()),theme:m(d()),state_color:m(h()),footer:m(b)}));let y=e([n("hui-entity-card-editor")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){u(e,v),this._config=e}},{kind:"field",key:"_schema",value:()=>s(((e,t,a)=>[{name:"entity",required:!0,selector:{entity:{}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"icon",selector:{icon:{placeholder:t||(null==a?void 0:a.attributes.icon),fallbackPath:t||null!=a&&a.attributes.icon||!a?void 0:f(p(e),a)}}},{name:"attribute",selector:{attribute:{entity_id:e}}},{name:"unit",selector:{text:{}}},{name:"theme",selector:{theme:{}}},{name:"state_color",selector:{boolean:{}}}]}]))},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return o``;const e=this.hass.states[this._config.entity],t=this._schema(this._config.entity,this._config.icon,e);return o`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${t}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `}},{kind:"method",key:"_valueChanged",value:function(e){const t=e.detail.value;Object.keys(t).forEach((e=>""===t[e]&&delete t[e])),c(this,"config-changed",{config:t})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>"entity"===e.name?this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"):this.hass.localize(`ui.panel.lovelace.editor.card.generic.${e.name}`)}}]}}),t);export{y as HuiEntityCardEditor};
