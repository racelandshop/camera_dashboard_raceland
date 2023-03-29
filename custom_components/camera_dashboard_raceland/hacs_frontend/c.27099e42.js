import{_ as t,c as e,d as a,G as i,$ as o,z as s,r as n,n as r}from"./main-0443badf.js";import"lit-html/is-server.js";import{F as l,c as d}from"./c.1d918317.js";const c=["1","2","3","4","5","6","7","8","9","","0","clear"],u=["arm_away","arm_home"],m=["disarm"];let h=t([r("more-info-alarm_control_panel")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[a({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[i("#alarmCode")],key:"_input",value:void 0},{kind:"method",key:"render",value:function(){return this.hass&&this.stateObj?o`
      <div class="actions">
        ${("disarmed"===this.stateObj.state?u:m).map((t=>o`
            <mwc-button
              .action=${t}
              @click=${this._handleActionClick}
              outlined
            >
              ${this.hass.localize(`ui.card.alarm_control_panel.${t}`)}
            </mwc-button>
          `))}
      </div>
      ${this.stateObj.attributes.code_format?o`
            <div class="center">
              <ha-textfield
                id="alarmCode"
                .label=${this.hass.localize("ui.card.alarm_control_panel.code")}
                type="password"
                .inputmode=${this.stateObj.attributes.code_format===l?"numeric":"text"}
              ></ha-textfield>
            </div>
          `:""}
      ${this.stateObj.attributes.code_format!==l?"":o`
            <div id="keypad">
              ${c.map((t=>""===t?o`<mwc-button disabled></mwc-button>`:o`
                      <mwc-button
                        .value=${t}
                        @click=${this._handlePadClick}
                        outlined
                        class=${s({numberkey:"clear"!==t})}
                      >
                        ${"clear"===t?this.hass.localize("ui.card.alarm_control_panel.clear_code"):t}
                      </mwc-button>
                    `))}
            </div>
          `}
    `:o``}},{kind:"method",key:"_handlePadClick",value:function(t){const e=t.currentTarget.value;this._input.value="clear"===e?"":this._input.value+e}},{kind:"method",key:"_handleActionClick",value:function(t){const e=this._input;d(this.hass,this.stateObj.entity_id,t.currentTarget.action,(null==e?void 0:e.value)||void 0),e&&(e.value="")}},{kind:"field",static:!0,key:"styles",value:()=>n`
    ha-textfield {
      display: block;
      margin: 8px;
      max-width: 150px;
      text-align: center;
    }

    #keypad {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: auto;
      width: 100%;
      max-width: 300px;
    }

    #keypad mwc-button {
      padding: 8px;
      width: 30%;
      box-sizing: border-box;
    }

    .actions {
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .actions mwc-button {
      margin: 0 4px 4px;
    }

    mwc-button#disarm {
      color: var(--error-color);
    }

    mwc-button.numberkey {
      --mdc-typography-button-font-size: var(--keypad-font-size, 0.875rem);
    }

    .center {
      display: flex;
      justify-content: center;
    }
  `}]}}),e);export{h as MoreInfoAlarmControlPanel};
