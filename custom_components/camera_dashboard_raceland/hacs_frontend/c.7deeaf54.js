import{_ as t,c as i,d as e,$ as c,r as n,n as s}from"./main-0443badf.js";import"lit-html/is-server.js";import{h as a}from"./c.603f0acc.js";import"./c.039b4847.js";t([s("more-info-counter")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass||!this.stateObj)return c``;const t=a.includes(this.stateObj.state);return c`
      <div class="actions">
        <mwc-button
          .action=${"increment"}
          @click=${this._handleActionClick}
          .disabled=${t}
        >
          ${this.hass.localize("ui.card.counter.actions.increment")}
        </mwc-button>
        <mwc-button
          .action=${"decrement"}
          @click=${this._handleActionClick}
          .disabled=${t}
        >
          ${this.hass.localize("ui.card.counter.actions.decrement")}
        </mwc-button>
        <mwc-button
          .action=${"reset"}
          @click=${this._handleActionClick}
          .disabled=${t}
        >
          ${this.hass.localize("ui.card.counter.actions.reset")}
        </mwc-button>
      </div>
    `}},{kind:"method",key:"_handleActionClick",value:function(t){const i=t.currentTarget.action;this.hass.callService("counter",i,{entity_id:this.stateObj.entity_id})}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      .actions {
        margin: 8px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `}}]}}),i);
