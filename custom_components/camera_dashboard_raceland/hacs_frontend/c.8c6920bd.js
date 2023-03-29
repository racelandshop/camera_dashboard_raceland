import{_ as t,c as i,d as s,t as n,$ as e,r as o,n as r}from"./main-0443badf.js";import"lit-html/is-server.js";import{a}from"./c.603f0acc.js";import{X as c,Z as h}from"./c.449fa12b.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([r("hui-button-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[n()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return c(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return e``;const t=this.hass.states[this._config.entity];return t?e`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <mwc-button
          @click=${this._pressButton}
          .disabled=${t.state===a}
        >
          ${this.hass.localize("ui.card.button.press")}
        </mwc-button>
      </hui-generic-entity-row>
    `:e`
        <hui-warning>
          ${h(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      mwc-button:last-child {
        margin-right: -0.57em;
      }
    `}},{kind:"method",key:"_pressButton",value:function(t){t.stopPropagation(),this.hass.callService("button","press",{entity_id:this._config.entity})}}]}}),i);
