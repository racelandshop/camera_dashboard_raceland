import{_ as t,d as a,g as e,H as i,x as o,y as n,o as s,q as r}from"./main-b570e60a.js";import{F as d,c as l}from"./c.1d918317.js";const c=["1","2","3","4","5","6","7","8","9","","0","clear"],u=["arm_away","arm_home"],m=["disarm"];let h=t([r("more-info-alarm_control_panel")],(function(t,a){return{F:class extends a{constructor(...a){super(...a),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"stateObj",value:void 0},{kind:"field",decorators:[i("#alarmCode")],key:"_input",value:void 0},{kind:"method",key:"render",value:function(){return this.hass&&this.stateObj?o`
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
                .inputmode=${this.stateObj.attributes.code_format===d?"numeric":"text"}
              ></ha-textfield>
            </div>
          `:""}
      ${this.stateObj.attributes.code_format!==d?"":o`
            <div id="keypad">
              ${c.map((t=>""===t?o`<mwc-button disabled></mwc-button>`:o`
                      <mwc-button
                        .value=${t}
                        @click=${this._handlePadClick}
                        outlined
                        class=${n({numberkey:"clear"!==t})}
                      >
                        ${"clear"===t?this.hass.localize("ui.card.alarm_control_panel.clear_code"):t}
                      </mwc-button>
                    `))}
            </div>
          `}
    `:o``}},{kind:"method",key:"_handlePadClick",value:function(t){const a=t.currentTarget.value;this._input.value="clear"===a?"":this._input.value+a}},{kind:"method",key:"_handleActionClick",value:function(t){const a=this._input;l(this.hass,this.stateObj.entity_id,t.currentTarget.action,(null==a?void 0:a.value)||void 0),a&&(a.value="")}},{kind:"field",static:!0,key:"styles",value:()=>s`
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
  `}]}}),a);export{h as MoreInfoAlarmControlPanel};
