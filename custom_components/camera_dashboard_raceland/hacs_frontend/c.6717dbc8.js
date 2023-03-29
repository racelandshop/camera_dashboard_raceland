import{_ as t,d as i,g as s,x as a,o as e,q as c}from"./main-b570e60a.js";import"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";t([c("more-info-timer")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){return this.hass&&this.stateObj?a`
      <div class="actions">
        ${"idle"===this.stateObj.state||"paused"===this.stateObj.state?a`
              <mwc-button .action=${"start"} @click=${this._handleActionClick}>
                ${this.hass.localize("ui.card.timer.actions.start")}
              </mwc-button>
            `:""}
        ${"active"===this.stateObj.state?a`
              <mwc-button .action=${"pause"} @click=${this._handleActionClick}>
                ${this.hass.localize("ui.card.timer.actions.pause")}
              </mwc-button>
            `:""}
        ${"active"===this.stateObj.state||"paused"===this.stateObj.state?a`
              <mwc-button .action=${"cancel"} @click=${this._handleActionClick}>
                ${this.hass.localize("ui.card.timer.actions.cancel")}
              </mwc-button>
              <mwc-button .action=${"finish"} @click=${this._handleActionClick}>
                ${this.hass.localize("ui.card.timer.actions.finish")}
              </mwc-button>
            `:""}
      </div>
      <ha-attributes
        .hass=${this.hass}
        .stateObj=${this.stateObj}
        extra-filters="remaining"
      ></ha-attributes>
    `:a``}},{kind:"method",key:"_handleActionClick",value:function(t){const i=t.currentTarget.action;this.hass.callService("timer",i,{entity_id:this.stateObj.entity_id})}},{kind:"get",static:!0,key:"styles",value:function(){return e`
      .actions {
        margin: 8px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}}]}}),i);
