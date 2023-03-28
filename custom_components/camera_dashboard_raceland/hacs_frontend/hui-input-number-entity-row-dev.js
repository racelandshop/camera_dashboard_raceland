const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

import { _ as _decorate, c as s, d as e, t, j as _get, k as _getPrototypeOf, $, r, n } from './main-dev.js';
import 'lit-html/is-server.js';
import { X as hasConfigOrEntityChanged, Z as createEntityNotFoundWarning, o as computeStateDisplay } from './ha-more-info-dialog-dev.js';
import { a as computeRTLDirection } from './ha-header-bar-dev.js';
import { d as debounce } from './stop_propagation-dev.js';
import { h as UNAVAILABLE_STATES, Q as installResizeObserver } from './auth-dev.js';
import { s as setValue } from './input_text-dev.js';
import './mwc-tab-bar-dev.js';
import './ha-circular-progress-dev.js';
import './repeat-dev.js';

_decorate([n("hui-input-number-entity-row")],function(_initialize,_LitElement){class HuiInputNumberEntityRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiInputNumberEntityRow,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"field",key:"_loaded",value:void 0},{kind:"field",key:"_updated",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config){throw new Error("Invalid configuration");}this._config=config;}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HuiInputNumberEntityRow.prototype),"connectedCallback",this).call(this);if(this._updated&&!this._loaded){this._initialLoad();}this._attachObserver();}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){var _this$_resizeObserver;(_this$_resizeObserver=this._resizeObserver)===null||_this$_resizeObserver===void 0?void 0:_this$_resizeObserver.disconnect();}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this._updated=true;if(this.isConnected&&!this._loaded){this._initialLoad();}this._attachObserver();}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}return $`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${stateObj.attributes.mode==="slider"?$`
              <div class="flex">
                <ha-slider
                  .disabled=${UNAVAILABLE_STATES.includes(stateObj.state)}
                  .dir=${computeRTLDirection(this.hass)}
                  .step=${Number(stateObj.attributes.step)}
                  .min=${Number(stateObj.attributes.min)}
                  .max=${Number(stateObj.attributes.max)}
                  .value=${stateObj.state}
                  pin
                  @change=${this._selectedValueChanged}
                  ignore-bar-touch
                ></ha-slider>
                <span class="state">
                  ${computeStateDisplay(this.hass.localize,stateObj,this.hass.locale,stateObj.state)}
                </span>
              </div>
            `:$`
              <div class="flex state">
                <ha-textfield
                  .disabled=${UNAVAILABLE_STATES.includes(stateObj.state)}
                  pattern="[0-9]+([\\.][0-9]+)?"
                  .step=${Number(stateObj.attributes.step)}
                  .min=${Number(stateObj.attributes.min)}
                  .max=${Number(stateObj.attributes.max)}
                  .value=${stateObj.state}
                  .suffix=${stateObj.attributes.unit_of_measurement}
                  type="number"
                  @change=${this._selectedValueChanged}
                >
                </ha-textfield>
              </div>
            `}
      </hui-generic-entity-row>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        display: block;
      }
      .flex {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-grow: 2;
      }
      .state {
        min-width: 45px;
        text-align: end;
      }
      ha-textfield {
        text-align: end;
      }
      ha-slider {
        width: 100%;
        max-width: 200px;
      }
    `;}},{kind:"method",key:"_initialLoad",value:async function _initialLoad(){this._loaded=true;await this.updateComplete;this._measureCard();}},{kind:"method",key:"_measureCard",value:function _measureCard(){if(!this.isConnected){return;}const element=this.shadowRoot.querySelector(".state");if(!element){return;}element.hidden=this.clientWidth<=300;}},{kind:"method",key:"_attachObserver",value:async function _attachObserver(){if(!this._resizeObserver){await installResizeObserver();this._resizeObserver=new ResizeObserver(debounce(()=>this._measureCard(),250,false));}if(this.isConnected){this._resizeObserver.observe(this);}}},{kind:"method",key:"_selectedValueChanged",value:function _selectedValueChanged(ev){const stateObj=this.hass.states[this._config.entity];if(ev.target.value!==stateObj.state){setValue(this.hass,stateObj.entity_id,ev.target.value);}}}]};},s);
