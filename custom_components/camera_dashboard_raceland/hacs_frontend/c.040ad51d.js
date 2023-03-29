import{_ as t,c as i,d as s,t as e,$ as o,r as n,n as c}from"./main-0443badf.js";import"lit-html/is-server.js";import{h as a}from"./c.603f0acc.js";import{X as r,Z as h}from"./c.449fa12b.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([c("hui-lock-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return r(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return o``;const t=this.hass.states[this._config.entity];return t?o`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <mwc-button
          @click=${this._callService}
          .disabled=${a.includes(t.state)}
          class="text-content"
        >
          ${"locked"===t.state?this.hass.localize("ui.card.lock.unlock"):this.hass.localize("ui.card.lock.lock")}
        </mwc-button>
      </hui-generic-entity-row>
    `:o`
        <hui-warning>
          ${h(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      mwc-button {
        margin-right: -0.57em;
      }
    `}},{kind:"method",key:"_callService",value:function(t){t.stopPropagation();const i=this.hass.states[this._config.entity];this.hass.callService("lock","locked"===i.state?"unlock":"lock",{entity_id:i.entity_id})}}]}}),i);
