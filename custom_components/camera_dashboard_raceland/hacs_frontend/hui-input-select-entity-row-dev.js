const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

import { _ as _decorate, c as s, d as e, t, $, r, n } from './main-dev.js';
import 'lit-html/is-server.js';
import { s as stopPropagation } from './stop_propagation-dev.js';
import { j as computeStateName, h as UNAVAILABLE_STATES, k as forwardHaptic } from './auth-dev.js';
import { X as hasConfigOrEntityChanged, Z as createEntityNotFoundWarning, $ as setInputSelectOption } from './ha-more-info-dialog-dev.js';
import './ha-header-bar-dev.js';
import './mwc-tab-bar-dev.js';
import './ha-circular-progress-dev.js';
import './repeat-dev.js';

_decorate([n("hui-input-select-entity-row")],function(_initialize,_LitElement){class HuiInputSelectEntityRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiInputSelectEntityRow,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config||!config.entity){throw new Error("Entity must be specified");}this._config=config;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this.hass||!this._config){return $``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}return $`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        hideName
      >
        <ha-select
          .label=${this._config.name||computeStateName(stateObj)}
          .value=${stateObj.state}
          .disabled=${UNAVAILABLE_STATES.includes(stateObj.state)}
          naturalMenuWidth
          @selected=${this._selectedChanged}
          @click=${stopPropagation}
          @closed=${stopPropagation}
        >
          ${stateObj.attributes.options?stateObj.attributes.options.map(option=>$`<mwc-list-item .value=${option}
                    >${option}</mwc-list-item
                  >`):""}
        </ha-select>
      </hui-generic-entity-row>
    `;}},{kind:"field",static:true,key:"styles",value(){return r`
    hui-generic-entity-row {
      display: flex;
      align-items: center;
    }
    ha-select {
      width: 100%;
      --ha-select-min-width: 0;
    }
  `;}},{kind:"method",key:"_selectedChanged",value:function _selectedChanged(ev){const stateObj=this.hass.states[this._config.entity];const option=ev.target.value;if(option===stateObj.state){return;}forwardHaptic("light");setInputSelectOption(this.hass,stateObj.entity_id,option);}}]};},s);
