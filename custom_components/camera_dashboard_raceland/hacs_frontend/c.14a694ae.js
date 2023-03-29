import{_ as i,c as a,d as t,t as s,$ as o,ae as e,f as n,r,n as l}from"./main-0443badf.js";import"lit-html/is-server.js";import"./c.cad1d45a.js";import"./c.603f0acc.js";import"./c.039b4847.js";i([l("dialog-box")],(function(i,a){return{F:class extends a{constructor(...a){super(...a),i(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_params",value:void 0},{kind:"field",decorators:[s()],key:"_value",value:void 0},{kind:"method",key:"showDialog",value:async function(i){this._params=i,i.prompt&&(this._value=i.defaultValue)}},{kind:"method",key:"closeDialog",value:function(){var i,a;return!(null!==(i=this._params)&&void 0!==i&&i.confirmation||null!==(a=this._params)&&void 0!==a&&a.prompt)&&(!this._params||(this._dismiss(),!0))}},{kind:"method",key:"render",value:function(){if(!this._params)return o``;const i=this._params.confirmation||this._params.prompt;return o`
      <ha-dialog
        open
        ?scrimClickAction=${i}
        ?escapeKeyAction=${i}
        @closed=${this._dialogClosed}
        defaultAction="ignore"
        .heading=${o`${this._params.warning?o`<ha-svg-icon
              .path=${e}
              style="color: var(--warning-color)"
            ></ha-svg-icon> `:""}${this._params.title?this._params.title:this._params.confirmation&&this.hass.localize("ui.dialogs.generic.default_confirmation_title")}`}
      >
        <div>
          ${this._params.text?o`
                <p class=${this._params.prompt?"no-bottom-padding":""}>
                  ${this._params.text}
                </p>
              `:""}
          ${this._params.prompt?o`
                <ha-textfield
                  dialogInitialFocus
                  .value=${this._value||""}
                  @keyup=${this._handleKeyUp}
                  @change=${this._valueChanged}
                  .label=${this._params.inputLabel?this._params.inputLabel:""}
                  .type=${this._params.inputType?this._params.inputType:"text"}
                ></ha-textfield>
              `:""}
        </div>
        ${i&&o`
          <mwc-button @click=${this._dismiss} slot="secondaryAction">
            ${this._params.dismissText?this._params.dismissText:this.hass.localize("ui.dialogs.generic.cancel")}
          </mwc-button>
        `}
        <mwc-button
          @click=${this._confirm}
          ?dialogInitialFocus=${!this._params.prompt}
          slot="primaryAction"
        >
          ${this._params.confirmText?this._params.confirmText:this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `}},{kind:"method",key:"_valueChanged",value:function(i){this._value=i.target.value}},{kind:"method",key:"_dismiss",value:function(){var i;null!==(i=this._params)&&void 0!==i&&i.cancel&&this._params.cancel(),this._close()}},{kind:"method",key:"_handleKeyUp",value:function(i){13===i.keyCode&&this._confirm()}},{kind:"method",key:"_confirm",value:function(){this._params.confirm&&this._params.confirm(this._value),this._close()}},{kind:"method",key:"_dialogClosed",value:function(i){"ignore"!==i.detail.action&&this._dismiss()}},{kind:"method",key:"_close",value:function(){this._params&&(this._params=void 0,n(this,"dialog-closed",{dialog:this.localName}))}},{kind:"get",static:!0,key:"styles",value:function(){return[r`
        :host([inert]) {
          pointer-events: initial !important;
          cursor: initial !important;
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-dialog {
            --ha-dialog-border-radius: 1.5rem;
          }
        }

        a {
          color: var(--accent-color);
        }
        p {
          margin: 0;
          padding-top: 6px;
          padding-bottom: 24px;
          color: var(--primary-text-color);
        }
        .no-bottom-padding {
          padding-bottom: 0;
        }
        .secondary {
          color: var(--secondary-text-color);
        }
        ha-dialog {
          /* Place above other dialogs */
          --dialog-z-index: 104;
        }
      `]}}]}}),a);
