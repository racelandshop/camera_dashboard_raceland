import{_ as t,c as i,d as s,t as e,$ as n,r as o,n as a}from"./main-0443badf.js";import"lit-html/is-server.js";import{e as r,L as h}from"./c.603f0acc.js";import{X as c,Z as u,o as d}from"./c.449fa12b.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([a("hui-group-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"_computeCanToggle",value:function(t,i){return i.some((i=>{const s=r(i);var e;return"group"===s?this._computeCanToggle(t,null===(e=this.hass)||void 0===e?void 0:e.states[i].attributes.entity_id):h.has(s)}))}},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return c(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return n``;const t=this.hass.states[this._config.entity];return t?n`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${this._computeCanToggle(this.hass,t.attributes.entity_id)?n`
              <ha-entity-toggle
                .hass=${this.hass}
                .stateObj=${t}
              ></ha-entity-toggle>
            `:n`
              <div class="text-content">
                ${d(this.hass.localize,t,this.hass.locale)}
              </div>
            `}
      </hui-generic-entity-row>
    `:n`
        <hui-warning>
          ${u(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return o``}}]}}),i);
