import{_ as t,c as i,d as s,t as e,$ as n,r as a,n as r}from"./main-0443badf.js";import"lit-html/is-server.js";import{X as o,Z as c}from"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([r("hui-climate-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return o(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return n``;const t=this.hass.states[this._config.entity];return t?n`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <ha-climate-state .hass=${this.hass} .stateObj=${t}>
        </ha-climate-state>
      </hui-generic-entity-row>
    `:n`
        <hui-warning>
          ${c(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return a`
      ha-climate-state {
        text-align: right;
      }
    `}}]}}),i);
