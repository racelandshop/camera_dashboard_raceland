const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

import { _ as _decorate, c as s, d as e, $, f as fireEvent, n, dJ as mdiDelete, o as haStyle, r, t, ag as mdiDotsVertical, j as _get, k as _getPrototypeOf, G as i, b as memoizeOne, z as o, dF as mdiPlus, eh as mdiPlayBox, br as Polymer, q as html, eg as mdiHelpCircle, I as i$1, at as mdiClose, ei as mdiContentCopy, c8 as mdiArrowUp, ca as mdiArrowDown, ej as mdiSofa, ek as mdiDevices, el as mdiUnfoldMoreVertical, Z as o$1, em as chipStyles, dQ as mdiEyeOff, b5 as mdiEye } from './main-dev.js';
import 'lit-html/is-server.js';
import { d as dynamicElement } from './dynamic-element-directive-dev.js';
import { s as stringCompare, c as caseInsensitiveStringCompare } from './compare-dev.js';
import { h as handleStructError } from './ha-code-editor-dev.js';
import { d as debounce, s as stopPropagation } from './stop_propagation-dev.js';
import { J as showConfirmationDialog, j as computeStateName, ac as subscribeEntityRegistry, e as computeDomain, am as object, ao as string, an as optional, ax as number, at as literal, ar as union, aq as assert, c as computeStateDomain, I as domainToName, a5 as getSignedPath, s as supportsFeature, ay as MediaClassBrowserSettings, ag as SUPPORT_BROWSE_MEDIA, az as fetchIntegrationManifest, aA as computeObjectId, aw as any, aB as computeUserInitials, F as fetchUsers, al as assign, K as showToast, a9 as showAlertDialog, aC as getActionType, z as isComponentLoaded, v as formatAttributeName } from './auth-dev.js';
import './ha-entity-picker-dev.js';
import './ha-form-dev.js';
import { D as DEFAULT_SCHEMA, d as dump, l as load } from './js-yaml-dev.js';
import { s as subscribeDeviceRegistry, a as subscribeAreaRegistry, b as computeDeviceName } from './device_registry-dev.js';
import { S as SubscribeMixin } from './subscribe-mixin-dev.js';
import './ha-combo-box-dev.js';
import { b as brandsUrl, e as extractDomainFromBrandUrl } from './brands-url-dev.js';
import { s as showMediaBrowserDialog } from './show-media-browser-dialog-dev.js';
import { e as entityIdOrAll } from './is-entity-id-dev.js';
import { d as documentationUrl } from './documentation-url-dev.js';
import './ha-checkbox-dev.js';
import { g as getConfigEntries } from './config_entries-dev.js';
import './ha-area-picker-dev.js';
import './ha-time-input-dev.js';
import './hui-theme-select-editor-dev.js';
import './ha-map-dev.js';
import { s as subscribeTrigger } from './automation-dev.js';
import { i as i$2 } from './guard-dev.js';
import './ha-check-list-item-dev.js';
import './mwc-checkbox.css-dev.js';
import './ha-base-time-input-dev.js';

const validateConfig=(hass,config)=>hass.callWS({type:"validate_config",...config});

const callExecuteScript=(hass,sequence)=>hass.callWS({type:"execute_script",sequence});

const includeDomains$2=["scene"];_decorate([n("ha-automation-action-activate_scene")],function(_initialize,_LitElement){class HaSceneAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaSceneAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"action",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {service:"scene.turn_on",target:{entity_id:""},metadata:{}};}},{kind:"method",key:"render",value:function render(){let scene;if("scene"in this.action){scene=this.action.scene;}else {var _this$action$target;scene=(_this$action$target=this.action.target)===null||_this$action$target===void 0?void 0:_this$action$target.entity_id;}return $`
      <ha-entity-picker
        .hass=${this.hass}
        .value=${scene}
        @value-changed=${this._entityPicked}
        .includeDomains=${includeDomains$2}
        allow-custom-entity
      ></ha-entity-picker>
    `;}},{kind:"method",key:"_entityPicked",value:function _entityPicked(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{service:"scene.turn_on",target:{entity_id:ev.detail.value},metadata:{}}});}}]};},s);

function ensureArray(value){if(value===undefined||Array.isArray(value)){return value;}return [value];}

_decorate([n("ha-automation-action-choose")],function(_initialize,_LitElement){class HaChooseAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaChooseAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"action",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {choose:[{conditions:[],sequence:[]}],default:[]};}},{kind:"method",key:"render",value:function render(){const action=this.action;return $`
      ${(action.choose?ensureArray(action.choose):[]).map((option,idx)=>$`<ha-card>
          <ha-icon-button
            .idx=${idx}
            @click=${this._removeOption}
            .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.remove_option")}
            .path=${mdiDelete}
          ></ha-icon-button>
          <div class="card-content">
            <h2>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.option","number",idx+1)}:
            </h2>
            <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.conditions")}:
            </h3>
            <ha-automation-condition
              .conditions=${option.conditions}
              .hass=${this.hass}
              .idx=${idx}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>
            <h3>
              ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.sequence")}:
            </h3>
            <ha-form
              .hass=${this.hass}
              .schema=${[{name:"sequence",selector:{action:{}}}]}
              .data=${option}
              .idx=${idx}
              @value-changed=${this._actionChanged}
            ></ha-form>
          </div>
        </ha-card>`)}
      <ha-card>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addOption}>
            ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.add_option")}
          </mwc-button>
        </div>
      </ha-card>
      <h2>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.choose.default")}:
      </h2>
      <ha-automation-action
        .actions=${action.default||[]}
        @value-changed=${this._defaultChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `;}},{kind:"method",key:"_conditionChanged",value:function _conditionChanged(ev){ev.stopPropagation();const value=ev.detail.value;const index=ev.target.idx;const choose=this.action.choose?[...ensureArray(this.action.choose)]:[];choose[index].conditions=value;fireEvent(this,"value-changed",{value:{...this.action,choose}});}},{kind:"method",key:"_actionChanged",value:function _actionChanged(ev){ev.stopPropagation();const value=ev.detail.value.sequence;const index=ev.target.idx;const choose=this.action.choose?[...ensureArray(this.action.choose)]:[];choose[index].sequence=value;fireEvent(this,"value-changed",{value:{...this.action,choose}});}},{kind:"method",key:"_addOption",value:function _addOption(){const choose=this.action.choose?[...ensureArray(this.action.choose)]:[];choose.push({conditions:[],sequence:[]});fireEvent(this,"value-changed",{value:{...this.action,choose}});}},{kind:"method",key:"_removeOption",value:function _removeOption(ev){const index=ev.currentTarget.idx;const choose=this.action.choose?[...ensureArray(this.action.choose)]:[];choose.splice(index,1);fireEvent(this,"value-changed",{value:{...this.action,choose}});}},{kind:"method",key:"_defaultChanged",value:function _defaultChanged(ev){ev.stopPropagation();const value=ev.detail.value;fireEvent(this,"value-changed",{value:{...this.action,default:value}});}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r`
        ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        ha-icon-button {
          position: absolute;
          right: 0;
          padding: 4px;
        }
      `];}}]};},s);

const isEmpty=obj=>{if(typeof obj!=="object"){return false;}for(const key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){return false;}}return true;};_decorate([n("ha-yaml-editor")],function(_initialize,_LitElement){class HaYamlEditor extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaYamlEditor,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"yamlSchema",value(){return DEFAULT_SCHEMA;}},{kind:"field",decorators:[e()],key:"defaultValue",value:void 0},{kind:"field",decorators:[e()],key:"isValid",value(){return true;}},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"_yaml",value(){return "";}},{kind:"method",key:"setValue",value:function setValue(value){try{this._yaml=value&&!isEmpty(value)?dump(value,{schema:this.yamlSchema}):"";}catch(err){// eslint-disable-next-line no-console
console.error(err,value);alert(`There was an error converting to YAML: ${err}`);}}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){if(this.defaultValue){this.setValue(this.defaultValue);}}},{kind:"method",key:"render",value:function render(){if(this._yaml===undefined){return $``;}return $`
      ${this.label?$`<p>${this.label}</p>`:""}
      <ha-code-editor
        .hass=${this.hass}
        .value=${this._yaml}
        mode="yaml"
        autocomplete-entities
        .error=${this.isValid===false}
        @value-changed=${this._onChange}
        dir="ltr"
      ></ha-code-editor>
    `;}},{kind:"method",key:"_onChange",value:function _onChange(ev){ev.stopPropagation();this._yaml=ev.detail.value;let parsed;let isValid=true;if(this._yaml){try{parsed=load(this._yaml,{schema:this.yamlSchema});}catch(err){// Invalid YAML
isValid=false;}}else {parsed={};}this.value=parsed;this.isValid=isValid;fireEvent(this,"value-changed",{value:parsed,isValid});}},{kind:"get",key:"yaml",value:function yaml(){return this._yaml;}}]};},s);

const handleChangeEvent$2=(element,ev)=>{var _ev$currentTarget,_ev$detail,_ev$currentTarget2;ev.stopPropagation();const name=(_ev$currentTarget=ev.currentTarget)===null||_ev$currentTarget===void 0?void 0:_ev$currentTarget.name;if(!name){return;}const newVal=((_ev$detail=ev.detail)===null||_ev$detail===void 0?void 0:_ev$detail.value)||((_ev$currentTarget2=ev.currentTarget)===null||_ev$currentTarget2===void 0?void 0:_ev$currentTarget2.value);if((element.condition[name]||"")===newVal){return;}let newCondition;if(!newVal){newCondition={...element.condition};delete newCondition[name];}else {newCondition={...element.condition,[name]:newVal};}fireEvent(element,"value-changed",{value:newCondition});};_decorate([n("ha-automation-condition-row")],function(_initialize,_LitElement){class HaAutomationConditionRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAutomationConditionRow,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"condition",value:void 0},{kind:"field",decorators:[t()],key:"_yamlMode",value(){return false;}},{kind:"field",decorators:[t()],key:"_warnings",value:void 0},{kind:"method",key:"render",value:function render(){if(!this.condition){return $``;}return $`
      <ha-card>
        <div class="card-content">
          <div class="card-menu">
            <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
              <ha-icon-button
                slot="trigger"
                .label=${this.hass.localize("ui.common.menu")}
                .path=${mdiDotsVertical}
              >
              </ha-icon-button>
              <mwc-list-item>
                ${this._yamlMode?this.hass.localize("ui.panel.config.automation.editor.edit_ui"):this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
              </mwc-list-item>
              <mwc-list-item>
                ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
              </mwc-list-item>
              <mwc-list-item class="warning">
                ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
              </mwc-list-item>
            </ha-button-menu>
          </div>
          ${this._warnings?$`<ha-alert
                alert-type="warning"
                .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
              >
                ${this._warnings.length>0&&this._warnings[0]!==undefined?$` <ul>
                      ${this._warnings.map(warning=>$`<li>${warning}</li>`)}
                    </ul>`:""}
                ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
              </ha-alert>`:""}
          <ha-automation-condition-editor
            @ui-mode-not-available=${this._handleUiModeNotAvailable}
            @value-changed=${this._handleChangeEvent}
            .yamlMode=${this._yamlMode}
            .hass=${this.hass}
            .condition=${this.condition}
          ></ha-automation-condition-editor>
        </div>
      </ha-card>
    `;}},{kind:"method",key:"_handleUiModeNotAvailable",value:function _handleUiModeNotAvailable(ev){// Prevent possible parent action-row from switching to yamlMode
ev.stopPropagation();this._warnings=handleStructError(this.hass,ev.detail).warnings;if(!this._yamlMode){this._yamlMode=true;}}},{kind:"method",key:"_handleChangeEvent",value:function _handleChangeEvent(ev){if(ev.detail.yaml){this._warnings=undefined;}}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){switch(ev.detail.index){case 0:this._switchYamlMode();break;case 1:fireEvent(this,"duplicate");break;case 2:this._onDelete();break;}}},{kind:"method",key:"_onDelete",value:function _onDelete(){showConfirmationDialog(this,{text:this.hass.localize("ui.panel.config.automation.editor.conditions.delete_confirm"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),confirm:()=>{fireEvent(this,"value-changed",{value:null});}});}},{kind:"method",key:"_switchYamlMode",value:function _switchYamlMode(){this._warnings=undefined;this._yamlMode=!this._yamlMode;}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r`
        .card-menu {
          float: right;
          z-index: 3;
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
        }
        .rtl .card-menu {
          float: left;
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
      `];}}]};},s);

const fetchDeviceActions=(hass,deviceId)=>hass.callWS({type:"device_automation/action/list",device_id:deviceId});const fetchDeviceConditions=(hass,deviceId)=>hass.callWS({type:"device_automation/condition/list",device_id:deviceId});const fetchDeviceTriggers=(hass,deviceId)=>hass.callWS({type:"device_automation/trigger/list",device_id:deviceId});const fetchDeviceActionCapabilities=(hass,action)=>hass.callWS({type:"device_automation/action/capabilities",action});const fetchDeviceConditionCapabilities=(hass,condition)=>hass.callWS({type:"device_automation/condition/capabilities",condition});const fetchDeviceTriggerCapabilities=(hass,trigger)=>hass.callWS({type:"device_automation/trigger/capabilities",trigger});const deviceAutomationIdentifiers=["device_id","domain","entity_id","type","subtype","event","condition","platform"];const deviceAutomationsEqual=(a,b)=>{if(typeof a!==typeof b){return false;}for(const property in a){if(!deviceAutomationIdentifiers.includes(property)){continue;}if(!Object.is(a[property],b[property])){return false;}}for(const property in b){if(!deviceAutomationIdentifiers.includes(property)){continue;}if(!Object.is(a[property],b[property])){return false;}}return true;};const localizeDeviceAutomationAction=(hass,action)=>{const state=action.entity_id?hass.states[action.entity_id]:undefined;return hass.localize(`component.${action.domain}.device_automation.action_type.${action.type}`,"entity_name",state?computeStateName(state):action.entity_id||"<unknown>","subtype",action.subtype?hass.localize(`component.${action.domain}.device_automation.action_subtype.${action.subtype}`)||action.subtype:"")||(action.subtype?`"${action.subtype}" ${action.type}`:action.type);};const localizeDeviceAutomationCondition=(hass,condition)=>{const state=condition.entity_id?hass.states[condition.entity_id]:undefined;return hass.localize(`component.${condition.domain}.device_automation.condition_type.${condition.type}`,"entity_name",state?computeStateName(state):condition.entity_id||"<unknown>","subtype",condition.subtype?hass.localize(`component.${condition.domain}.device_automation.condition_subtype.${condition.subtype}`)||condition.subtype:"")||(condition.subtype?`"${condition.subtype}" ${condition.type}`:condition.type);};const localizeDeviceAutomationTrigger=(hass,trigger)=>{const state=trigger.entity_id?hass.states[trigger.entity_id]:undefined;return hass.localize(`component.${trigger.domain}.device_automation.trigger_type.${trigger.type}`,"entity_name",state?computeStateName(state):trigger.entity_id||"<unknown>","subtype",trigger.subtype?hass.localize(`component.${trigger.domain}.device_automation.trigger_subtype.${trigger.subtype}`)||trigger.subtype:"")||(trigger.subtype?`"${trigger.subtype}" ${trigger.type}`:trigger.type);};

const NO_AUTOMATION_KEY="NO_AUTOMATION";const UNKNOWN_AUTOMATION_KEY="UNKNOWN_AUTOMATION";let HaDeviceAutomationPicker=_decorate(null,function(_initialize,_LitElement){class HaDeviceAutomationPicker extends _LitElement{// Trigger an empty render so we start with a clean DOM.
// paper-listbox does not like changing things around.
constructor(localizeDeviceAutomation,fetchDeviceAutomations,createNoAutomation){super();_initialize(this);this._localizeDeviceAutomation=localizeDeviceAutomation;this._fetchDeviceAutomations=fetchDeviceAutomations;this._createNoAutomation=createNoAutomation;}}return {F:HaDeviceAutomationPicker,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"deviceId",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"_automations",value(){return [];}},{kind:"field",decorators:[t()],key:"_renderEmpty",value(){return false;}},{kind:"get",key:"NO_AUTOMATION_TEXT",value:function NO_AUTOMATION_TEXT(){return this.hass.localize("ui.panel.config.devices.automation.actions.no_actions");}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function UNKNOWN_AUTOMATION_TEXT(){return this.hass.localize("ui.panel.config.devices.automation.actions.unknown_action");}},{kind:"field",key:"_localizeDeviceAutomation",value:void 0},{kind:"field",key:"_fetchDeviceAutomations",value:void 0},{kind:"field",key:"_createNoAutomation",value:void 0},{kind:"get",key:"_value",value:function _value(){if(!this.value){return "";}if(!this._automations.length){return NO_AUTOMATION_KEY;}const idx=this._automations.findIndex(automation=>deviceAutomationsEqual(automation,this.value));if(idx===-1){return UNKNOWN_AUTOMATION_KEY;}return `${this._automations[idx].device_id}_${idx}`;}},{kind:"method",key:"render",value:function render(){if(this._renderEmpty){return $``;}const value=this._value;return $`
      <ha-select
        .label=${this.label}
        .value=${value}
        @selected=${this._automationChanged}
        .disabled=${this._automations.length===0}
      >
        ${value===NO_AUTOMATION_KEY?$`<mwc-list-item .value=${NO_AUTOMATION_KEY}>
              ${this.NO_AUTOMATION_TEXT}
            </mwc-list-item>`:""}
        ${value===UNKNOWN_AUTOMATION_KEY?$`<mwc-list-item .value=${UNKNOWN_AUTOMATION_KEY}>
              ${this.UNKNOWN_AUTOMATION_TEXT}
            </mwc-list-item>`:""}
        ${this._automations.map((automation,idx)=>$`
            <mwc-list-item .value=${`${automation.device_id}_${idx}`}>
              ${this._localizeDeviceAutomation(this.hass,automation)}
            </mwc-list-item>
          `)}
      </ha-select>
    `;}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HaDeviceAutomationPicker.prototype),"updated",this).call(this,changedProps);if(changedProps.has("deviceId")){this._updateDeviceInfo();}}},{kind:"method",key:"_updateDeviceInfo",value:async function _updateDeviceInfo(){this._automations=this.deviceId?await this._fetchDeviceAutomations(this.hass,this.deviceId):// No device, clear the list of automations
[];// If there is no value, or if we have changed the device ID, reset the value.
if(!this.value||this.value.device_id!==this.deviceId){this._setValue(this._automations.length?this._automations[0]:this._createNoAutomation(this.deviceId));}this._renderEmpty=true;await this.updateComplete;this._renderEmpty=false;}},{kind:"method",key:"_automationChanged",value:function _automationChanged(ev){const value=ev.target.value;if(!value||[UNKNOWN_AUTOMATION_KEY,NO_AUTOMATION_KEY].includes(value)){return;}const[deviceId,idx]=value.split("_");const automation=this._automations[idx];if(automation.device_id!==deviceId){return;}this._setValue(automation);}},{kind:"method",key:"_setValue",value:function _setValue(automation){if(this.value&&deviceAutomationsEqual(automation,this.value)){return;}fireEvent(this,"change");fireEvent(this,"value-changed",{value:automation});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-select {
        width: 100%;
        margin-top: 4px;
      }
    `;}}]};},s);

_decorate([n("ha-device-condition-picker")],function(_initialize,_HaDeviceAutomationPi){class HaDeviceConditionPicker extends _HaDeviceAutomationPi{constructor(){super(localizeDeviceAutomationCondition,fetchDeviceConditions,deviceId=>({device_id:deviceId||"",condition:"device",domain:"",entity_id:""}));_initialize(this);}}return {F:HaDeviceConditionPicker,d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function NO_AUTOMATION_TEXT(){return this.hass.localize("ui.panel.config.devices.automation.conditions.no_conditions");}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function UNKNOWN_AUTOMATION_TEXT(){return this.hass.localize("ui.panel.config.devices.automation.conditions.unknown_condition");}}]};},HaDeviceAutomationPicker);

const rowRenderer$2=item=>$`<mwc-list-item
  .twoline=${false}
>
  <span>${item.name}</span>
  <!-- <span slot="secondary">${item.area}</span> -->
</mwc-list-item>`;_decorate([n("ha-device-picker")],function(_initialize,_SubscribeMixin){class HaDevicePicker extends _SubscribeMixin{constructor(...args){super(...args);_initialize(this);}}return {F:HaDevicePicker,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"devices",value:void 0},{kind:"field",decorators:[e()],key:"areas",value:void 0},{kind:"field",decorators:[e()],key:"entities",value:void 0},{kind:"field",decorators:[e({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[e({type:Array,attribute:"exclude-domains"})],key:"excludeDomains",value:void 0},{kind:"field",decorators:[e({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[e()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[t()],key:"_opened",value:void 0},{kind:"field",decorators:[i("ha-combo-box",true)],key:"comboBox",value:void 0},{kind:"field",key:"_init",value(){return false;}},{kind:"field",key:"_getDevices",value(){return memoizeOne((devices,areas,entities,includeDomains,excludeDomains,includeDeviceClasses,deviceFilter)=>{if(!devices.length){return [{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_devices")}];}const deviceEntityLookup={};if(includeDomains||excludeDomains||includeDeviceClasses){for(const entity of entities){if(!entity.device_id){continue;}if(!(entity.device_id in deviceEntityLookup)){deviceEntityLookup[entity.device_id]=[];}deviceEntityLookup[entity.device_id].push(entity);}}const areaLookup={};for(const area of areas){areaLookup[area.area_id]=area;}let inputDevices=devices.filter(device=>device.id===this.value||!device.disabled_by);if(includeDomains){inputDevices=inputDevices.filter(device=>{const devEntities=deviceEntityLookup[device.id];if(!devEntities||!devEntities.length){return false;}return deviceEntityLookup[device.id].some(entity=>includeDomains.includes(computeDomain(entity.entity_id)));});}if(excludeDomains){inputDevices=inputDevices.filter(device=>{const devEntities=deviceEntityLookup[device.id];if(!devEntities||!devEntities.length){return true;}return entities.every(entity=>!excludeDomains.includes(computeDomain(entity.entity_id)));});}if(includeDeviceClasses){inputDevices=inputDevices.filter(device=>{const devEntities=deviceEntityLookup[device.id];if(!devEntities||!devEntities.length){return false;}return deviceEntityLookup[device.id].some(entity=>{const stateObj=this.hass.states[entity.entity_id];if(!stateObj){return false;}return stateObj.attributes.device_class&&includeDeviceClasses.includes(stateObj.attributes.device_class);});});}if(deviceFilter){inputDevices=inputDevices.filter(device=>// We always want to include the device of the current value
device.id===this.value||deviceFilter(device));}const outputDevices=inputDevices.map(device=>({id:device.id,name:computeDeviceName(device,this.hass,deviceEntityLookup[device.id]),area:device.area_id?areaLookup[device.area_id].name:this.hass.localize("ui.components.device-picker.no_area")}));if(!outputDevices.length){return [{id:"no_devices",area:"",name:this.hass.localize("ui.components.device-picker.no_match")}];}if(outputDevices.length===1){return outputDevices;}return outputDevices.sort((a,b)=>stringCompare(a.name||"",b.name||""));});}},{kind:"method",key:"open",value:/**
   * Show only devices with entities from specific domains.
   * @type {Array}
   * @attr include-domains
   */ /**
   * Show no devices with entities of these domains.
   * @type {Array}
   * @attr exclude-domains
   */ /**
   * Show only devices with entities of these device classes.
   * @type {Array}
   * @attr include-device-classes
   */function open(){var _this$comboBox;(_this$comboBox=this.comboBox)===null||_this$comboBox===void 0?void 0:_this$comboBox.open();}},{kind:"method",key:"focus",value:function focus(){var _this$comboBox2;(_this$comboBox2=this.comboBox)===null||_this$comboBox2===void 0?void 0:_this$comboBox2.focus();}},{kind:"method",key:"hassSubscribe",value:function hassSubscribe(){return [subscribeDeviceRegistry(this.hass.connection,devices=>{this.devices=devices;}),subscribeAreaRegistry(this.hass.connection,areas=>{this.areas=areas;}),subscribeEntityRegistry(this.hass.connection,entities=>{this.entities=entities;})];}},{kind:"method",key:"updated",value:function updated(changedProps){if(!this._init&&this.devices&&this.areas&&this.entities||changedProps.has("_opened")&&this._opened){this._init=true;this.comboBox.items=this._getDevices(this.devices,this.areas,this.entities,this.includeDomains,this.excludeDomains,this.includeDeviceClasses,this.deviceFilter);}}},{kind:"method",key:"render",value:function render(){if(!this.devices||!this.areas||!this.entities){return $``;}return $`
      <ha-combo-box
        .hass=${this.hass}
        .label=${this.label===undefined&&this.hass?this.hass.localize("ui.components.device-picker.device"):this.label}
        .value=${this._value}
        .renderer=${rowRenderer$2}
        .disabled=${this.disabled}
        item-value-path="id"
        item-label-path="name"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._deviceChanged}
      ></ha-combo-box>
    `;}},{kind:"get",key:"_value",value:function _value(){return this.value||"";}},{kind:"method",key:"_deviceChanged",value:function _deviceChanged(ev){ev.stopPropagation();let newValue=ev.detail.value;if(newValue==="no_devices"){newValue="";}if(newValue!==this._value){this._setValue(newValue);}}},{kind:"method",key:"_openedChanged",value:function _openedChanged(ev){this._opened=ev.detail.value;}},{kind:"method",key:"_setValue",value:function _setValue(value){this.value=value;setTimeout(()=>{fireEvent(this,"value-changed",{value});fireEvent(this,"change");},0);}}]};},SubscribeMixin(s));

let HaDeviceCondition=_decorate([n("ha-automation-condition-device")],function(_initialize,_LitElement){class HaDeviceCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaDeviceCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({type:Object})],key:"condition",value:void 0},{kind:"field",decorators:[t()],key:"_deviceId",value:void 0},{kind:"field",decorators:[t()],key:"_capabilities",value:void 0},{kind:"field",key:"_origCondition",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {device_id:"",domain:"",entity_id:""};}},{kind:"field",key:"_extraFieldsData",value(){return memoizeOne((condition,capabilities)=>{const extraFieldsData={};capabilities.extra_fields.forEach(item=>{if(condition[item.name]!==undefined){extraFieldsData[item.name]=condition[item.name];}});return extraFieldsData;});}},{kind:"method",key:"render",value:function render(){var _this$_capabilities;const deviceId=this._deviceId||this.condition.device_id;return $`
      <ha-device-picker
        .value=${deviceId}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.device.label")}
      ></ha-device-picker>
      <ha-device-condition-picker
        .value=${this.condition}
        .deviceId=${deviceId}
        @value-changed=${this._deviceConditionPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.device.condition")}
      ></ha-device-condition-picker>
      ${(_this$_capabilities=this._capabilities)!==null&&_this$_capabilities!==void 0&&_this$_capabilities.extra_fields?$`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.condition,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `;}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){if(!this._capabilities){this._getCapabilities();}if(this.condition){this._origCondition=this.condition;}}},{kind:"method",key:"updated",value:function updated(changedPros){const prevCondition=changedPros.get("condition");if(prevCondition&&!deviceAutomationsEqual(prevCondition,this.condition)){this._getCapabilities();}}},{kind:"method",key:"_getCapabilities",value:async function _getCapabilities(){const condition=this.condition;this._capabilities=condition.domain?await fetchDeviceConditionCapabilities(this.hass,condition):undefined;}},{kind:"method",key:"_devicePicked",value:function _devicePicked(ev){ev.stopPropagation();this._deviceId=ev.target.value;if(this._deviceId===undefined){fireEvent(this,"value-changed",{value:{...HaDeviceCondition.defaultConfig,condition:"device"}});}}},{kind:"method",key:"_deviceConditionPicked",value:function _deviceConditionPicked(ev){ev.stopPropagation();let condition=ev.detail.value;if(this._origCondition&&deviceAutomationsEqual(this._origCondition,condition)){condition=this._origCondition;}fireEvent(this,"value-changed",{value:condition});}},{kind:"method",key:"_extraFieldsChanged",value:function _extraFieldsChanged(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.condition,...ev.detail.value}});}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function _extraFieldsComputeLabelCallback(localize){// Returns a callback for ha-form to calculate labels per schema object
return schema=>localize(`ui.panel.config.automation.editor.conditions.type.device.extra_fields.${schema.name}`)||schema.name;}},{kind:"field",static:true,key:"styles",value(){return r`
    ha-device-picker {
      display: block;
      margin-bottom: 24px;
    }
  `;}}]};},s);

_decorate([n("ha-automation-condition")],function(_initialize,_LitElement){class HaAutomationCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAutomationCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"conditions",value:void 0},{kind:"method",key:"updated",value:function updated(changedProperties){if(!changedProperties.has("conditions")){return;}let updatedConditions;if(!Array.isArray(this.conditions)){updatedConditions=[this.conditions];}(updatedConditions||this.conditions).forEach((condition,index)=>{if(typeof condition==="string"){updatedConditions=updatedConditions||[...this.conditions];updatedConditions[index]={condition:"template",value_template:condition};}});if(updatedConditions){fireEvent(this,"value-changed",{value:updatedConditions});}}},{kind:"method",key:"render",value:function render(){if(!Array.isArray(this.conditions)){return $``;}return $`
      ${this.conditions.map((cond,idx)=>$`
          <ha-automation-condition-row
            .index=${idx}
            .condition=${cond}
            @duplicate=${this._duplicateCondition}
            @value-changed=${this._conditionChanged}
            .hass=${this.hass}
          ></ha-automation-condition-row>
        `)}
      <ha-card>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addCondition}>
            ${this.hass.localize("ui.panel.config.automation.editor.conditions.add")}
          </mwc-button>
        </div>
      </ha-card>
    `;}},{kind:"method",key:"_addCondition",value:function _addCondition(){const conditions=this.conditions.concat({condition:"device",...HaDeviceCondition.defaultConfig});fireEvent(this,"value-changed",{value:conditions});}},{kind:"method",key:"_conditionChanged",value:function _conditionChanged(ev){ev.stopPropagation();const conditions=[...this.conditions];const newValue=ev.detail.value;const index=ev.target.index;if(newValue===null){conditions.splice(index,1);}else {conditions[index]=newValue;}fireEvent(this,"value-changed",{value:conditions});}},{kind:"method",key:"_duplicateCondition",value:function _duplicateCondition(ev){ev.stopPropagation();const index=ev.target.index;fireEvent(this,"value-changed",{value:this.conditions.concat(this.conditions[index])});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-automation-condition-row,
      ha-card {
        display: block;
        margin-top: 16px;
      }
      .add-card mwc-button {
        display: block;
        text-align: center;
      }
    `;}}]};},s);

const createDurationData=duration=>{if(duration===undefined){return undefined;}if(typeof duration!=="object"){if(typeof duration==="string"||isNaN(duration)){const parts=(duration===null||duration===void 0?void 0:duration.toString().split(":"))||[];return {hours:Number(parts[0])||0,minutes:Number(parts[1])||0,seconds:Number(parts[2])||0,milliseconds:Number(parts[3])||0};}return {seconds:duration};}if(!("days"in duration)){return duration;}const{days,minutes,seconds,milliseconds}=duration;let hours=duration.hours||0;hours=(hours||0)+(days||0)*24;return {hours,minutes,seconds,milliseconds};};

const baseTriggerStruct=object({platform:string(),id:optional(string())});const forDictStruct=object({days:optional(number()),hours:optional(number()),minutes:optional(number()),seconds:optional(number())});

const stateConditionStruct=object({condition:literal("state"),entity_id:optional(string()),attribute:optional(string()),state:optional(string()),for:optional(union([string(),forDictStruct]))});let HaStateCondition=_decorate([n("ha-automation-condition-state")],function(_initialize,_LitElement){class HaStateCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaStateCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"condition",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {entity_id:"",state:""};}},{kind:"field",key:"_schema",value(){return memoizeOne(entityId=>[{name:"entity_id",required:true,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:entityId}}},{name:"state",selector:{text:{}}},{name:"for",selector:{duration:{}}}]);}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProperties){if(changedProperties.has("condition")){try{assert(this.condition,stateConditionStruct);}catch(e){fireEvent(this,"ui-mode-not-available",e);return false;}}return true;}},{kind:"method",key:"render",value:function render(){const trgFor=createDurationData(this.condition.for);const data={...this.condition,for:trgFor};const schema=this._schema(this.condition.entity_id);return $`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;Object.keys(newTrigger).forEach(key=>newTrigger[key]===undefined||newTrigger[key]===""?delete newTrigger[key]:{});fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>{switch(schema.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");case"for":return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.state.for`);default:return this.hass.localize(`ui.panel.config.automation.editor.conditions.type.state.${schema.name}`);}};}}]};},s);

let HaLogicalCondition=_decorate([n("ha-automation-condition-logical")],function(_initialize,_LitElement){class HaLogicalCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaLogicalCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"condition",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {conditions:[{condition:"state",...HaStateCondition.defaultConfig}]};}},{kind:"method",key:"render",value:function render(){return $`
      <ha-automation-condition
        .conditions=${this.condition.conditions||[]}
        @value-changed=${this._valueChanged}
        .hass=${this.hass}
      ></ha-automation-condition>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.condition,conditions:ev.detail.value}});}}]};},s);

_decorate([n("ha-automation-condition-and")],function(_initialize,_HaLogicalCondition){class HaAndCondition extends _HaLogicalCondition{constructor(...args){super(...args);_initialize(this);}}return {F:HaAndCondition,d:[]};},HaLogicalCondition);

_decorate([n("ha-automation-condition-not")],function(_initialize,_HaLogicalCondition){class HaNotCondition extends _HaLogicalCondition{constructor(...args){super(...args);_initialize(this);}}return {F:HaNotCondition,d:[]};},HaLogicalCondition);

_decorate([n("ha-automation-condition-numeric_state")],function(_initialize,_LitElement){class HaNumericStateCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaNumericStateCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"condition",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {entity_id:""};}},{kind:"field",key:"_schema",value(){return memoizeOne(entityId=>[{name:"entity_id",required:true,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:entityId}}},{name:"above",selector:{text:{}}},{name:"below",selector:{text:{}}},{name:"value_template",selector:{text:{multiline:true}}}]);}},{kind:"method",key:"render",value:function render(){const schema=this._schema(this.condition.entity_id);return $`
      <ha-form
        .hass=${this.hass}
        .data=${this.condition}
        .schema=${schema}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>{switch(schema.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");default:return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.numeric_state.${schema.name}`);}};}}]};},s);

_decorate([n("ha-automation-condition-or")],function(_initialize,_HaLogicalCondition){class HaOrCondition extends _HaLogicalCondition{constructor(...args){super(...args);_initialize(this);}}return {F:HaOrCondition,d:[]};},HaLogicalCondition);

_decorate([n("ha-automation-condition-sun")],function(_initialize,_LitElement){class HaSunCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaSunCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"condition",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {};}},{kind:"field",key:"_schema",value(){return memoizeOne(localize=>[{name:"before",type:"select",required:true,options:[["sunrise",localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise")],["sunset",localize("ui.panel.config.automation.editor.conditions.type.sun.sunset")]]},{name:"before_offset",selector:{text:{}}},{name:"after",type:"select",required:true,options:[["sunrise",localize("ui.panel.config.automation.editor.conditions.type.sun.sunrise")],["sunset",localize("ui.panel.config.automation.editor.conditions.type.sun.sunset")]]},{name:"after_offset",selector:{text:{}}}]);}},{kind:"method",key:"render",value:function render(){const schema=this._schema(this.hass.localize);return $`
      <ha-form
        .schema=${schema}
        .data=${this.condition}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.panel.config.automation.editor.conditions.type.sun.${schema.name}`);}}]};},s);

_decorate([n("ha-automation-condition-template")],function(_initialize,_LitElement){class HaTemplateCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTemplateCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"condition",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {value_template:""};}},{kind:"method",key:"render",value:function render(){const{value_template}=this.condition;return $`
      <ha-textarea
        name="value_template"
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.template.value_template")}
        .value=${value_template}
        @input=${this._valueChanged}
        dir="ltr"
        autogrow
      ></ha-textarea>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){handleChangeEvent$2(this,ev);}},{kind:"field",static:true,key:"styles",value(){return r`
    ha-textarea {
      display: block;
    }
  `;}}]};},s);

const DAYS={mon:1,tue:2,wed:3,thu:4,fri:5,sat:6,sun:7};_decorate([n("ha-automation-condition-time")],function(_initialize,_LitElement){class HaTimeCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTimeCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"condition",value:void 0},{kind:"field",decorators:[t()],key:"_inputModeBefore",value:void 0},{kind:"field",decorators:[t()],key:"_inputModeAfter",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {};}},{kind:"field",key:"_schema",value(){return memoizeOne((localize,inputModeAfter,inputModeBefore)=>{const modeAfterSchema=inputModeAfter?{name:"after",selector:{entity:{domain:"input_datetime"}}}:{name:"after",selector:{time:{}}};const modeBeforeSchema=inputModeBefore?{name:"before",selector:{entity:{domain:"input_datetime"}}}:{name:"before",selector:{time:{}}};return [{name:"mode_after",type:"select",required:true,options:[["value",localize("ui.panel.config.automation.editor.conditions.type.time.type_value")],["input",localize("ui.panel.config.automation.editor.conditions.type.time.type_input")]]},modeAfterSchema,{name:"mode_before",type:"select",required:true,options:[["value",localize("ui.panel.config.automation.editor.conditions.type.time.type_value")],["input",localize("ui.panel.config.automation.editor.conditions.type.time.type_input")]]},modeBeforeSchema,{type:"multi_select",name:"weekday",options:Object.keys(DAYS).map(day=>[day,localize(`ui.panel.config.automation.editor.conditions.type.time.weekdays.${day}`)])}];});}},{kind:"method",key:"render",value:function render(){var _this$_inputModeBefor,_this$condition$befor,_this$_inputModeAfter,_this$condition$after;const inputModeBefore=(_this$_inputModeBefor=this._inputModeBefore)!==null&&_this$_inputModeBefor!==void 0?_this$_inputModeBefor:(_this$condition$befor=this.condition.before)===null||_this$condition$befor===void 0?void 0:_this$condition$befor.startsWith("input_datetime.");const inputModeAfter=(_this$_inputModeAfter=this._inputModeAfter)!==null&&_this$_inputModeAfter!==void 0?_this$_inputModeAfter:(_this$condition$after=this.condition.after)===null||_this$condition$after===void 0?void 0:_this$condition$after.startsWith("input_datetime.");const schema=this._schema(this.hass.localize,inputModeAfter,inputModeBefore);const data={mode_before:inputModeBefore?"input":"value",mode_after:inputModeAfter?"input":"value",...this.condition};return $`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newValue=ev.detail.value;this._inputModeAfter=newValue.mode_after==="input";this._inputModeBefore=newValue.mode_before==="input";delete newValue.mode_after;delete newValue.mode_before;Object.keys(newValue).forEach(key=>newValue[key]===undefined||newValue[key]===""?delete newValue[key]:{});fireEvent(this,"value-changed",{value:newValue});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.panel.config.automation.editor.conditions.type.time.${schema.name}`);}}]};},s);

_decorate([n("ha-automation-condition-trigger")],function(_initialize,_LitElement){class HaTriggerCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTriggerCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"condition",value:void 0},{kind:"field",decorators:[t()],key:"_triggers",value(){return [];}},{kind:"field",key:"_unsub",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {id:""};}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HaTriggerCondition.prototype),"connectedCallback",this).call(this);const details={callback:config=>this._automationUpdated(config)};fireEvent(this,"subscribe-automation-config",details);this._unsub=details.unsub;}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaTriggerCondition.prototype),"disconnectedCallback",this).call(this);if(this._unsub){this._unsub();}}},{kind:"method",key:"render",value:function render(){const{id}=this.condition;if(!this._triggers.length){return this.hass.localize("ui.panel.config.automation.editor.conditions.type.trigger.no_triggers");}return $`<ha-select
      .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.trigger.id")}
      .value=${id}
      @selected=${this._triggerPicked}
    >
      ${this._triggers.map(trigger=>$`
            <mwc-list-item .value=${trigger.id}> ${trigger.id} </mwc-list-item>
          `)}
    </ha-select>`;}},{kind:"method",key:"_automationUpdated",value:function _automationUpdated(config){this._triggers=config!==null&&config!==void 0&&config.trigger?ensureArray(config.trigger).filter(t=>t.id):[];}},{kind:"method",key:"_triggerPicked",value:function _triggerPicked(ev){ev.stopPropagation();if(!ev.target.value){return;}const newTrigger=ev.target.value;if(this.condition.id===newTrigger){return;}fireEvent(this,"value-changed",{value:{...this.condition,id:newTrigger}});}}]};},s);

const hasLocation=stateObj=>"latitude"in stateObj.attributes&&"longitude"in stateObj.attributes;

function zoneAndLocationFilter$1(stateObj){return hasLocation(stateObj)&&computeStateDomain(stateObj)!=="zone";}const includeDomains$1=["zone"];_decorate([n("ha-automation-condition-zone")],function(_initialize,_LitElement){class HaZoneCondition extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaZoneCondition,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"condition",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {entity_id:"",zone:""};}},{kind:"method",key:"render",value:function render(){const{entity_id,zone}=this.condition;return $`
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.entity")}
        .value=${entity_id}
        @value-changed=${this._entityPicked}
        .hass=${this.hass}
        allow-custom-entity
        .entityFilter=${zoneAndLocationFilter$1}
      ></ha-entity-picker>
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.zone")}
        .value=${zone}
        @value-changed=${this._zonePicked}
        .hass=${this.hass}
        allow-custom-entity
        .includeDomains=${includeDomains$1}
      ></ha-entity-picker>
      <label id="eventlabel">
        ${this.hass.localize("ui.panel.config.automation.editor.conditions.type.zone.event")}
      </label>
    `;}},{kind:"method",key:"_entityPicked",value:function _entityPicked(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.condition,entity_id:ev.detail.value}});}},{kind:"method",key:"_zonePicked",value:function _zonePicked(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.condition,zone:ev.detail.value}});}},{kind:"field",static:true,key:"styles",value(){return r`
    ha-entity-picker {
      display: block;
      margin-bottom: 24px;
    }
  `;}}]};},s);

const OPTIONS$3=["device","and","or","not","state","numeric_state","sun","template","time","trigger","zone"];_decorate([n("ha-automation-condition-editor")],function(_initialize,_LitElement){class HaAutomationConditionEditor extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAutomationConditionEditor,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"condition",value:void 0},{kind:"field",decorators:[e()],key:"yamlMode",value(){return false;}},{kind:"field",key:"_processedTypes",value(){return memoizeOne(localize=>OPTIONS$3.map(condition=>[condition,localize(`ui.panel.config.automation.editor.conditions.type.${condition}.label`)]).sort((a,b)=>stringCompare(a[1],b[1])));}},{kind:"method",key:"render",value:function render(){const selected=OPTIONS$3.indexOf(this.condition.condition);const yamlMode=this.yamlMode||selected===-1;return $`
      ${yamlMode?$`
            ${selected===-1?$`
                  ${this.hass.localize("ui.panel.config.automation.editor.conditions.unsupported_condition","condition",this.condition.condition)}
                `:""}
            <h2>
              ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
            </h2>
            <ha-yaml-editor
              .hass=${this.hass}
              .defaultValue=${this.condition}
              @value-changed=${this._onYamlChange}
            ></ha-yaml-editor>
          `:$`
            <ha-select
              .label=${this.hass.localize("ui.panel.config.automation.editor.conditions.type_select")}
              .value=${this.condition.condition}
              naturalMenuWidth
              @selected=${this._typeChanged}
            >
              ${this._processedTypes(this.hass.localize).map(([opt,label])=>$`
                  <mwc-list-item .value=${opt}>${label}</mwc-list-item>
                `)}
            </ha-select>

            <div>
              ${dynamicElement(`ha-automation-condition-${this.condition.condition}`,{hass:this.hass,condition:this.condition})}
            </div>
          `}
    `;}},{kind:"method",key:"_typeChanged",value:function _typeChanged(ev){const type=ev.target.value;if(!type){return;}const elClass=customElements.get(`ha-automation-condition-${type}`);if(type!==this.condition.condition){fireEvent(this,"value-changed",{value:{condition:type,...elClass.defaultConfig}});}}},{kind:"method",key:"_onYamlChange",value:function _onYamlChange(ev){ev.stopPropagation();if(!ev.detail.isValid){return;}// @ts-ignore
fireEvent(this,"value-changed",{value:ev.detail.value,yaml:true});}},{kind:"field",static:true,key:"styles",value(){return [haStyle,r`
      ha-select {
        margin-bottom: 24px;
      }
    `];}}]};},s);

_decorate([n("ha-automation-action-condition")],function(_initialize,_LitElement){class HaConditionAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaConditionAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"action",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {condition:"state"};}},{kind:"method",key:"render",value:function render(){return $`
      <ha-automation-condition-editor
        .condition=${this.action}
        .hass=${this.hass}
        @value-changed=${this._conditionChanged}
      ></ha-automation-condition-editor>
    `;}},{kind:"method",key:"_conditionChanged",value:function _conditionChanged(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:ev.detail.value});}}]};},s);

const isTemplateRegex=new RegExp("{%|{{");const isTemplate=value=>isTemplateRegex.test(value);const hasTemplate=value=>{if(!value){return false;}if(typeof value==="string"){return isTemplate(value);}if(typeof value==="object"){const values=Array.isArray(value)?value:Object.values(value);return values.some(val=>val&&hasTemplate(val));}return false;};

_decorate([n("ha-automation-action-delay")],function(_initialize,_LitElement){class HaDelayAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaDelayAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"action",value:void 0},{kind:"field",decorators:[e()],key:"_timeData",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {delay:""};}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProperties){if(!changedProperties.has("action")){return;}// Check for templates in action. If found, revert to YAML mode.
if(this.action&&hasTemplate(this.action)){fireEvent(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support")));return;}this._timeData=createDurationData(this.action.delay);}},{kind:"method",key:"render",value:function render(){return $`<ha-duration-input
      .label=${this.hass.localize(`ui.panel.config.automation.editor.actions.type.delay.delay`)}
      .data=${this._timeData}
      enableMillisecond
      @value-changed=${this._valueChanged}
    ></ha-duration-input>`;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const value=ev.detail.value;if(!value){return;}fireEvent(this,"value-changed",{value:{...this.action,delay:value}});}}]};},s);

_decorate([n("ha-device-action-picker")],function(_initialize,_HaDeviceAutomationPi){class HaDeviceActionPicker extends _HaDeviceAutomationPi{constructor(){super(localizeDeviceAutomationAction,fetchDeviceActions,deviceId=>({device_id:deviceId||"",domain:"",entity_id:""}));_initialize(this);}}return {F:HaDeviceActionPicker,d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function NO_AUTOMATION_TEXT(){return this.hass.localize("ui.panel.config.devices.automation.actions.no_actions");}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function UNKNOWN_AUTOMATION_TEXT(){return this.hass.localize("ui.panel.config.devices.automation.actions.unknown_action");}}]};},HaDeviceAutomationPicker);

let HaDeviceAction=_decorate([n("ha-automation-action-device_id")],function(_initialize,_LitElement){class HaDeviceAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaDeviceAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({type:Object})],key:"action",value:void 0},{kind:"field",decorators:[t()],key:"_deviceId",value:void 0},{kind:"field",decorators:[t()],key:"_capabilities",value:void 0},{kind:"field",key:"_origAction",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {device_id:"",domain:"",entity_id:""};}},{kind:"field",key:"_extraFieldsData",value(){return memoizeOne((action,capabilities)=>{const extraFieldsData={};capabilities.extra_fields.forEach(item=>{if(action[item.name]!==undefined){extraFieldsData[item.name]=action[item.name];}});return extraFieldsData;});}},{kind:"method",key:"render",value:function render(){var _this$_capabilities;const deviceId=this._deviceId||this.action.device_id;return $`
      <ha-device-picker
        .value=${deviceId}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.label")}
      ></ha-device-picker>
      <ha-device-action-picker
        .value=${this.action}
        .deviceId=${deviceId}
        @value-changed=${this._deviceActionPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.device_id.action")}
      ></ha-device-action-picker>
      ${(_this$_capabilities=this._capabilities)!==null&&_this$_capabilities!==void 0&&_this$_capabilities.extra_fields?$`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.action,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `;}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){if(!this._capabilities){this._getCapabilities();}if(this.action){this._origAction=this.action;}}},{kind:"method",key:"updated",value:function updated(changedPros){const prevAction=changedPros.get("action");if(prevAction&&!deviceAutomationsEqual(prevAction,this.action)){this._deviceId=undefined;this._getCapabilities();}}},{kind:"method",key:"_getCapabilities",value:async function _getCapabilities(){this._capabilities=this.action.domain?await fetchDeviceActionCapabilities(this.hass,this.action):undefined;}},{kind:"method",key:"_devicePicked",value:function _devicePicked(ev){ev.stopPropagation();this._deviceId=ev.target.value;if(this._deviceId===undefined){fireEvent(this,"value-changed",{value:HaDeviceAction.defaultConfig});}}},{kind:"method",key:"_deviceActionPicked",value:function _deviceActionPicked(ev){ev.stopPropagation();let action=ev.detail.value;if(this._origAction&&deviceAutomationsEqual(this._origAction,action)){action=this._origAction;}fireEvent(this,"value-changed",{value:action});}},{kind:"method",key:"_extraFieldsChanged",value:function _extraFieldsChanged(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.action,...ev.detail.value}});}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function _extraFieldsComputeLabelCallback(localize){// Returns a callback for ha-form to calculate labels per schema object
return schema=>localize(`ui.panel.config.automation.editor.actions.type.device_id.extra_fields.${schema.name}`)||schema.name;}},{kind:"field",static:true,key:"styles",value(){return r`
    ha-device-picker {
      display: block;
      margin-bottom: 16px;
    }
    ha-device-action-picker {
      display: block;
    }
  `;}}]};},s);

const rowRenderer$1=item=>$`<mwc-list-item twoline>
  <span>${item.name}</span>
  <span slot="secondary"
    >${item.name===item.service?"":item.service}</span
  >
</mwc-list-item>`;let HaServicePicker=_decorate(null,function(_initialize,_LitElement){class HaServicePicker extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaServicePicker,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"_filter",value:void 0},{kind:"method",key:"render",value:function render(){return $`
      <ha-combo-box
        .hass=${this.hass}
        .label=${this.hass.localize("ui.components.service-picker.service")}
        .filteredItems=${this._filteredServices(this.hass.localize,this.hass.services,this._filter)}
        .value=${this.value}
        .renderer=${rowRenderer$1}
        item-value-path="service"
        item-label-path="name"
        allow-custom-value
        @filter-changed=${this._filterChanged}
        @value-changed=${this._valueChanged}
      ></ha-combo-box>
    `;}},{kind:"field",key:"_services",value(){return memoizeOne((localize,services)=>{if(!services){return [];}const result=[];Object.keys(services).sort().forEach(domain=>{const services_keys=Object.keys(services[domain]).sort();for(const service of services_keys){result.push({service:`${domain}.${service}`,name:`${domainToName(localize,domain)}: ${services[domain][service].name||service}`});}});return result;});}},{kind:"field",key:"_filteredServices",value(){return memoizeOne((localize,services,filter)=>{if(!services){return [];}const processedServices=this._services(localize,services);if(!filter){return processedServices;}return processedServices.filter(service=>{var _service$name;return service.service.toLowerCase().includes(filter)||((_service$name=service.name)===null||_service$name===void 0?void 0:_service$name.toLowerCase().includes(filter));});});}},{kind:"method",key:"_filterChanged",value:function _filterChanged(ev){this._filter=ev.detail.value.toLowerCase();}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){this.value=ev.detail.value;fireEvent(this,"change");fireEvent(this,"value-changed",{value:this.value});}}]};},s);customElements.define("ha-service-picker",HaServicePicker);

_decorate([n("ha-automation-action-event")],function(_initialize,_LitElement){class HaEventAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaEventAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"action",value:void 0},{kind:"field",decorators:[i("ha-yaml-editor",true)],key:"_yamlEditor",value:void 0},{kind:"field",key:"_actionData",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {event:"",event_data:{}};}},{kind:"method",key:"updated",value:function updated(changedProperties){if(!changedProperties.has("action")){return;}if(this._actionData&&this._actionData!==this.action.event_data){if(this._yamlEditor){this._yamlEditor.setValue(this.action.event_data);}}this._actionData=this.action.event_data;}},{kind:"method",key:"render",value:function render(){const{event,event_data}=this.action;return $`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.event.event")}
        .value=${event}
        @change=${this._eventChanged}
      ></ha-textfield>
      <ha-yaml-editor
        .hass=${this.hass}
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.event.event_data")}
        .name=${"event_data"}
        .defaultValue=${event_data}
        @value-changed=${this._dataChanged}
      ></ha-yaml-editor>
    `;}},{kind:"method",key:"_dataChanged",value:function _dataChanged(ev){ev.stopPropagation();if(!ev.detail.isValid){return;}this._actionData=ev.detail.value;handleChangeEvent(this,ev);}},{kind:"method",key:"_eventChanged",value:function _eventChanged(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.action,event:ev.target.value}});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-textfield {
        display: block;
      }
    `;}}]};},s);

const MANUAL_SCHEMA=[{name:"media_content_id",required:false,selector:{text:{}}},{name:"media_content_type",required:false,selector:{text:{}}}];_decorate([n("ha-selector-media")],function(_initialize,_LitElement){class HaMediaSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaMediaSelector,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"selector",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean,reflect:true})],key:"disabled",value(){return false;}},{kind:"field",decorators:[t()],key:"_thumbnailUrl",value:void 0},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){if(changedProps.has("value")){var _this$value,_this$value$metadata,_changedProps$get,_changedProps$get$met;const thumbnail=(_this$value=this.value)===null||_this$value===void 0?void 0:(_this$value$metadata=_this$value.metadata)===null||_this$value$metadata===void 0?void 0:_this$value$metadata.thumbnail;const oldThumbnail=(_changedProps$get=changedProps.get("value"))===null||_changedProps$get===void 0?void 0:(_changedProps$get$met=_changedProps$get.metadata)===null||_changedProps$get$met===void 0?void 0:_changedProps$get$met.thumbnail;if(thumbnail===oldThumbnail){return;}if(thumbnail&&thumbnail.startsWith("/")){this._thumbnailUrl=undefined;// Thumbnails served by local API require authentication
getSignedPath(this.hass,thumbnail).then(signedPath=>{this._thumbnailUrl=signedPath.path;});}else if(thumbnail&&thumbnail.startsWith("https://brands.home-assistant.io")){var _this$hass$themes;// The backend is not aware of the theme used by the users,
// so we rewrite the URL to show a proper icon
this._thumbnailUrl=brandsUrl({domain:extractDomainFromBrandUrl(thumbnail),type:"icon",useFallback:true,darkOptimized:(_this$hass$themes=this.hass.themes)===null||_this$hass$themes===void 0?void 0:_this$hass$themes.darkMode});}else {this._thumbnailUrl=thumbnail;}}}},{kind:"method",key:"render",value:function render(){var _this$value2,_this$value3,_this$value4,_this$value5,_this$value6,_this$value6$metadata,_this$value7,_this$value7$metadata,_this$value8,_this$value9,_this$value9$metadata,_this$value10,_this$value$metadata2;const stateObj=(_this$value2=this.value)!==null&&_this$value2!==void 0&&_this$value2.entity_id?this.hass.states[this.value.entity_id]:undefined;const supportsBrowse=!((_this$value3=this.value)!==null&&_this$value3!==void 0&&_this$value3.entity_id)||stateObj&&supportsFeature(stateObj,SUPPORT_BROWSE_MEDIA);return $`<ha-entity-picker
        .hass=${this.hass}
        .value=${(_this$value4=this.value)===null||_this$value4===void 0?void 0:_this$value4.entity_id}
        .label=${this.label||this.hass.localize("ui.components.selectors.media.pick_media_player")}
        .disabled=${this.disabled}
        include-domains='["media_player"]'
        allow-custom-entity
        @value-changed=${this._entityChanged}
      ></ha-entity-picker>
      ${!supportsBrowse?$`<ha-alert>
              ${this.hass.localize("ui.components.selectors.media.browse_not_supported")}
            </ha-alert>
            <ha-form
              .hass=${this.hass}
              .data=${this.value}
              .schema=${MANUAL_SCHEMA}
              .computeLabel=${this._computeLabelCallback}
            ></ha-form>`:$`<ha-card
            outlined
            @click=${this._pickMedia}
            class=${this.disabled||!((_this$value5=this.value)!==null&&_this$value5!==void 0&&_this$value5.entity_id)?"disabled":""}
          >
            <div
              class="thumbnail ${o({portrait:!!((_this$value6=this.value)!==null&&_this$value6!==void 0&&(_this$value6$metadata=_this$value6.metadata)!==null&&_this$value6$metadata!==void 0&&_this$value6$metadata.media_class)&&MediaClassBrowserSettings[this.value.metadata.children_media_class||this.value.metadata.media_class].thumbnail_ratio==="portrait"})}"
            >
              ${(_this$value7=this.value)!==null&&_this$value7!==void 0&&(_this$value7$metadata=_this$value7.metadata)!==null&&_this$value7$metadata!==void 0&&_this$value7$metadata.thumbnail?$`
                    <div
                      class="${o({"centered-image":!!this.value.metadata.media_class&&["app","directory"].includes(this.value.metadata.media_class)})}
                        image"
                      style=${this._thumbnailUrl?`background-image: url(${this._thumbnailUrl});`:""}
                    ></div>
                  `:$`
                    <div class="icon-holder image">
                      <ha-svg-icon
                        class="folder"
                        .path=${!((_this$value8=this.value)!==null&&_this$value8!==void 0&&_this$value8.media_content_id)?mdiPlus:(_this$value9=this.value)!==null&&_this$value9!==void 0&&(_this$value9$metadata=_this$value9.metadata)!==null&&_this$value9$metadata!==void 0&&_this$value9$metadata.media_class?MediaClassBrowserSettings[this.value.metadata.media_class==="directory"?this.value.metadata.children_media_class||this.value.metadata.media_class:this.value.metadata.media_class].icon:mdiPlayBox}
                      ></ha-svg-icon>
                    </div>
                  `}
            </div>
            <div class="title">
              ${!((_this$value10=this.value)!==null&&_this$value10!==void 0&&_this$value10.media_content_id)?this.hass.localize("ui.components.selectors.media.pick_media"):((_this$value$metadata2=this.value.metadata)===null||_this$value$metadata2===void 0?void 0:_this$value$metadata2.title)||this.value.media_content_id}
            </div>
          </ha-card>`}`;}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.components.selectors.media.${schema.name}`);}},{kind:"method",key:"_entityChanged",value:function _entityChanged(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{entity_id:ev.detail.value,media_content_id:"",media_content_type:""}});}},{kind:"method",key:"_pickMedia",value:function _pickMedia(){var _metadata;showMediaBrowserDialog(this,{action:"pick",entityId:this.value.entity_id,navigateIds:(_metadata=this.value.metadata)===null||_metadata===void 0?void 0:_metadata.navigateIds,mediaPickedCallback:pickedMedia=>{var _pickedMedia$navigate;fireEvent(this,"value-changed",{value:{...this.value,media_content_id:pickedMedia.item.media_content_id,media_content_type:pickedMedia.item.media_content_type,metadata:{title:pickedMedia.item.title,thumbnail:pickedMedia.item.thumbnail,media_class:pickedMedia.item.media_class,children_media_class:pickedMedia.item.children_media_class,navigateIds:(_pickedMedia$navigate=pickedMedia.navigateIds)===null||_pickedMedia$navigate===void 0?void 0:_pickedMedia$navigate.map(id=>({media_content_type:id.media_content_type,media_content_id:id.media_content_id}))}}});}});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-entity-picker {
        display: block;
        margin-bottom: 16px;
      }
      mwc-button {
        margin-top: 8px;
      }
      ha-alert {
        display: block;
        margin-bottom: 16px;
      }
      ha-card {
        position: relative;
        width: 200px;
        box-sizing: border-box;
        cursor: pointer;
      }
      ha-card.disabled {
        pointer-events: none;
        color: var(--disabled-text-color);
      }
      ha-card .thumbnail {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        transition: padding-bottom 0.1s ease-out;
        padding-bottom: 100%;
      }
      ha-card .thumbnail.portrait {
        padding-bottom: 150%;
      }
      ha-card .image {
        border-radius: 3px 3px 0 0;
      }
      .folder {
        --mdc-icon-size: calc(var(--media-browse-item-size, 175px) * 0.4);
      }
      .title {
        font-size: 16px;
        padding-top: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 16px;
        padding-left: 16px;
        padding-right: 4px;
        white-space: nowrap;
      }
      .image {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .centered-image {
        margin: 0 8px;
        background-size: contain;
      }
      .icon-holder {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;}}]};},s);

_decorate([n("ha-automation-action-play_media")],function(_initialize,_LitElement){class HaPlayMediaAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaPlayMediaAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"action",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"narrow",value(){return false;}},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {service:"media_player.play_media",target:{entity_id:""},data:{media_content_id:"",media_content_type:""},metadata:{}};}},{kind:"field",key:"_getSelectorValue",value(){return memoizeOne(action=>{var _action$target,_action$data,_action$data2;return {entity_id:((_action$target=action.target)===null||_action$target===void 0?void 0:_action$target.entity_id)||action.entity_id,media_content_id:(_action$data=action.data)===null||_action$data===void 0?void 0:_action$data.media_content_id,media_content_type:(_action$data2=action.data)===null||_action$data2===void 0?void 0:_action$data2.media_content_type,metadata:action.metadata};});}},{kind:"method",key:"render",value:function render(){return $`
      <ha-selector-media
        .hass=${this.hass}
        .value=${this._getSelectorValue(this.action)}
        @value-changed=${this._valueChanged}
      ></ha-selector-media>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{service:"media_player.play_media",target:{entity_id:ev.detail.value.entity_id},data:{media_content_id:ev.detail.value.media_content_id,media_content_type:ev.detail.value.media_content_type},metadata:ev.detail.value.metadata||{}}});}}]};},s);

const OPTIONS$2=["count","while","until"];const getType$1=action=>OPTIONS$2.find(option=>option in action);_decorate([n("ha-automation-action-repeat")],function(_initialize,_LitElement){class HaRepeatAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaRepeatAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"action",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {repeat:{count:2,sequence:[]}};}},{kind:"method",key:"render",value:function render(){const action=this.action.repeat;const type=getType$1(action);return $`
      <ha-select
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type_select")}
        .value=${type}
        @selected=${this._typeChanged}
      >
        ${OPTIONS$2.map(opt=>$`
            <mwc-list-item .value=${opt}>
              ${this.hass.localize(`ui.panel.config.automation.editor.actions.type.repeat.type.${opt}.label`)}
            </mwc-list-item>
          `)}
      </ha-select>
      ${type==="count"?$`
            <ha-textfield
              .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.type.count.label")}
              name="count"
              .value=${action.count||"0"}
              @change=${this._countChanged}
            ></ha-textfield>
          `:""}
      ${type==="while"?$` <h3>
              ${this.hass.localize(`ui.panel.config.automation.editor.actions.type.repeat.type.while.conditions`)}:
            </h3>
            <ha-automation-condition
              .conditions=${action.while||[]}
              .hass=${this.hass}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>`:""}
      ${type==="until"?$` <h3>
              ${this.hass.localize(`ui.panel.config.automation.editor.actions.type.repeat.type.until.conditions`)}:
            </h3>
            <ha-automation-condition
              .conditions=${action.until||[]}
              .hass=${this.hass}
              @value-changed=${this._conditionChanged}
            ></ha-automation-condition>`:""}
      <h3>
        ${this.hass.localize("ui.panel.config.automation.editor.actions.type.repeat.sequence")}:
      </h3>
      <ha-automation-action
        .actions=${action.sequence}
        @value-changed=${this._actionChanged}
        .hass=${this.hass}
      ></ha-automation-action>
    `;}},{kind:"method",key:"_typeChanged",value:function _typeChanged(ev){const type=ev.target.value;if(!type||type===getType$1(this.action.repeat)){return;}const value=type==="count"?2:[];fireEvent(this,"value-changed",{value:{repeat:{[type]:value,sequence:this.action.repeat.sequence}}});}},{kind:"method",key:"_conditionChanged",value:function _conditionChanged(ev){ev.stopPropagation();const value=ev.detail.value;fireEvent(this,"value-changed",{value:{repeat:{...this.action.repeat,[getType$1(this.action.repeat)]:value}}});}},{kind:"method",key:"_actionChanged",value:function _actionChanged(ev){ev.stopPropagation();const value=ev.detail.value;fireEvent(this,"value-changed",{value:{repeat:{...this.action.repeat,sequence:value}}});}},{kind:"method",key:"_countChanged",value:function _countChanged(ev){const newVal=ev.target.value;if(this.action.repeat.count===newVal){return;}fireEvent(this,"value-changed",{value:{repeat:{...this.action.repeat,count:newVal}}});}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r`
        ha-textfield {
          margin-top: 16px;
        }
      `];}}]};},s);

/*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/Polymer({_template:html`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:'paper-item-body'});

_decorate([n("ha-settings-row")],function(_initialize,_LitElement){class HaSettingsRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaSettingsRow,d:[{kind:"field",decorators:[e({type:Boolean,reflect:true})],key:"narrow",value:void 0},{kind:"field",decorators:[e({type:Boolean,attribute:"three-line"})],key:"threeLine",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`
      <div class="prefix-wrap">
        <slot name="prefix"></slot>
        <paper-item-body
          ?two-line=${!this.threeLine}
          ?three-line=${this.threeLine}
        >
          <slot id="header" name="heading"></slot>
          <div secondary><slot name="description"></slot></div>
        </paper-item-body>
      </div>
      <slot></slot>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        display: flex;
        padding: 0 16px;
        align-content: normal;
        align-self: auto;
        align-items: center;
      }
      paper-item-body[two-line] {
        min-height: calc(
          var(--paper-item-body-two-line-min-height, 72px) - 16px
        );
        flex: 1;
      }
      paper-item-body {
        padding: 8px 16px 8px 0;
      }
      @media all and (max-width: 450px) {
        paper-item-body[two-line] {
          min-height: calc(
            var(--paper-item-body-two-line-min-height, 72px) - 31px
          );
          flex: 1;
        }
        #blueprint-editor {
          border-radius: 0;
        }
        paper-item-body {
          padding: 0;
        }
      }
      :host([narrow]) {
        align-items: normal;
        flex-direction: column;
        border-top: 1px solid var(--divider-color);
        padding-bottom: 8px;
        padding-top: 8px;
      }
      ::slotted(ha-switch) {
        padding: 16px 0;
      }
      div[secondary] {
        white-space: normal;
      }
      .prefix-wrap {
        display: contents;
      }
      :host([narrow]) .prefix-wrap {
        display: flex;
        align-items: center;
      }
    `;}}]};},s);

const showOptionalToggle=field=>field.selector&&!field.required&&!("boolean"in field.selector&&field.default);_decorate([n("ha-service-control")],function(_initialize,_LitElement){class HaServiceControl extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaServiceControl,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"value",value:void 0},{kind:"field",decorators:[t()],key:"_value",value:void 0},{kind:"field",decorators:[e({reflect:true,type:Boolean})],key:"narrow",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"showAdvanced",value:void 0},{kind:"field",decorators:[t()],key:"_checkedKeys",value(){return new Set();}},{kind:"field",decorators:[t()],key:"_manifest",value:void 0},{kind:"field",decorators:[i("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"method",key:"willUpdate",value:function willUpdate(changedProperties){var _this$value,_this$value2,_this$value3,_this$value5,_this$value5$data,_this$value6,_this$value6$data,_this$value7,_this$value7$data,_this$value8,_this$_value;if(!changedProperties.has("value")){return;}const oldValue=changedProperties.get("value");if((oldValue===null||oldValue===void 0?void 0:oldValue.service)!==((_this$value=this.value)===null||_this$value===void 0?void 0:_this$value.service)){this._checkedKeys=new Set();}const serviceData=this._getServiceInfo((_this$value2=this.value)===null||_this$value2===void 0?void 0:_this$value2.service,this.hass.services);// Fetch the manifest if we have a service selected and the service domain changed.
// If no service is selected, clear the manifest.
if((_this$value3=this.value)!==null&&_this$value3!==void 0&&_this$value3.service){if(!(oldValue!==null&&oldValue!==void 0&&oldValue.service)||computeDomain(this.value.service)!==computeDomain(oldValue.service)){var _this$value4;this._fetchManifest(computeDomain((_this$value4=this.value)===null||_this$value4===void 0?void 0:_this$value4.service));}}else {this._manifest=undefined;}if(serviceData&&"target"in serviceData&&((_this$value5=this.value)!==null&&_this$value5!==void 0&&(_this$value5$data=_this$value5.data)!==null&&_this$value5$data!==void 0&&_this$value5$data.entity_id||(_this$value6=this.value)!==null&&_this$value6!==void 0&&(_this$value6$data=_this$value6.data)!==null&&_this$value6$data!==void 0&&_this$value6$data.area_id||(_this$value7=this.value)!==null&&_this$value7!==void 0&&(_this$value7$data=_this$value7.data)!==null&&_this$value7$data!==void 0&&_this$value7$data.device_id)){var _this$value$target,_this$value$target2,_this$value$target3;const target={...this.value.target};if(this.value.data.entity_id&&!((_this$value$target=this.value.target)!==null&&_this$value$target!==void 0&&_this$value$target.entity_id)){target.entity_id=this.value.data.entity_id;}if(this.value.data.area_id&&!((_this$value$target2=this.value.target)!==null&&_this$value$target2!==void 0&&_this$value$target2.area_id)){target.area_id=this.value.data.area_id;}if(this.value.data.device_id&&!((_this$value$target3=this.value.target)!==null&&_this$value$target3!==void 0&&_this$value$target3.device_id)){target.device_id=this.value.data.device_id;}this._value={...this.value,target,data:{...this.value.data}};delete this._value.data.entity_id;delete this._value.data.device_id;delete this._value.data.area_id;}else {this._value=this.value;}if((oldValue===null||oldValue===void 0?void 0:oldValue.service)!==((_this$value8=this.value)===null||_this$value8===void 0?void 0:_this$value8.service)){let updatedDefaultValue=false;if(this._value&&serviceData){// Set mandatory bools without a default value to false
if(!this._value.data){this._value.data={};}serviceData.fields.forEach(field=>{if(field.selector&&field.required&&field.default===undefined&&"boolean"in field.selector&&this._value.data[field.key]===undefined){updatedDefaultValue=true;this._value.data[field.key]=false;}});}if(updatedDefaultValue){fireEvent(this,"value-changed",{value:{...this._value}});}}if((_this$_value=this._value)!==null&&_this$_value!==void 0&&_this$_value.data){const yamlEditor=this._yamlEditor;if(yamlEditor&&yamlEditor.value!==this._value.data){yamlEditor.setValue(this._value.data);}}}},{kind:"field",key:"_getServiceInfo",value(){return memoizeOne((service,serviceDomains)=>{if(!service||!serviceDomains){return undefined;}const domain=computeDomain(service);const serviceName=computeObjectId(service);if(!(domain in serviceDomains)){return undefined;}if(!(serviceName in serviceDomains[domain])){return undefined;}const fields=Object.entries(serviceDomains[domain][serviceName].fields).map(([key,value])=>({key,...value,selector:value.selector}));return {...serviceDomains[domain][serviceName],fields,hasSelector:fields.length?fields.filter(field=>field.selector).map(field=>field.key):[]};});}},{kind:"method",key:"render",value:function render(){var _this$_value2,_this$_value3,_this$_value4,_this$_value5,_this$_value6,_this$_value6$data,_this$_value7;const serviceData=this._getServiceInfo((_this$_value2=this._value)===null||_this$_value2===void 0?void 0:_this$_value2.service,this.hass.services);const shouldRenderServiceDataYaml=(serviceData===null||serviceData===void 0?void 0:serviceData.fields.length)&&!serviceData.hasSelector.length||serviceData&&Object.keys(((_this$_value3=this._value)===null||_this$_value3===void 0?void 0:_this$_value3.data)||{}).some(key=>!serviceData.hasSelector.includes(key));const entityId=shouldRenderServiceDataYaml&&(serviceData===null||serviceData===void 0?void 0:serviceData.fields.find(field=>field.key==="entity_id"));const hasOptional=Boolean(!shouldRenderServiceDataYaml&&(serviceData===null||serviceData===void 0?void 0:serviceData.fields.some(field=>showOptionalToggle(field))));return $`<ha-service-picker
        .hass=${this.hass}
        .value=${(_this$_value4=this._value)===null||_this$_value4===void 0?void 0:_this$_value4.service}
        @value-changed=${this._serviceChanged}
      ></ha-service-picker>
      <div class="description">
        <p>${serviceData===null||serviceData===void 0?void 0:serviceData.description}</p>
        ${this._manifest?$` <a
              href=${this._manifest.is_built_in?documentationUrl(this.hass,`/integrations/${this._manifest.domain}`):this._manifest.documentation}
              title=${this.hass.localize("ui.components.service-control.integration_doc")}
              target="_blank"
              rel="noreferrer"
            >
              <ha-icon-button
                .path=${mdiHelpCircle}
                class="help-icon"
              ></ha-icon-button>
            </a>`:""}
      </div>
      ${serviceData&&"target"in serviceData?$`<ha-settings-row .narrow=${this.narrow}>
            ${hasOptional?$`<div slot="prefix" class="checkbox-spacer"></div>`:""}
            <span slot="heading"
              >${this.hass.localize("ui.components.service-control.target")}</span
            >
            <span slot="description"
              >${this.hass.localize("ui.components.service-control.target_description")}</span
            ><ha-selector
              .hass=${this.hass}
              .selector=${serviceData.target?{target:serviceData.target}:{target:{}}}
              @value-changed=${this._targetChanged}
              .value=${(_this$_value5=this._value)===null||_this$_value5===void 0?void 0:_this$_value5.target}
            ></ha-selector
          ></ha-settings-row>`:entityId?$`<ha-entity-picker
            .hass=${this.hass}
            .value=${(_this$_value6=this._value)===null||_this$_value6===void 0?void 0:(_this$_value6$data=_this$_value6.data)===null||_this$_value6$data===void 0?void 0:_this$_value6$data.entity_id}
            .label=${entityId.description}
            @value-changed=${this._entityPicked}
            allow-custom-entity
          ></ha-entity-picker>`:""}
      ${shouldRenderServiceDataYaml?$`<ha-yaml-editor
            .hass=${this.hass}
            .label=${this.hass.localize("ui.components.service-control.service_data")}
            .name=${"data"}
            .defaultValue=${(_this$_value7=this._value)===null||_this$_value7===void 0?void 0:_this$_value7.data}
            @value-changed=${this._dataChanged}
          ></ha-yaml-editor>`:serviceData===null||serviceData===void 0?void 0:serviceData.fields.map(dataField=>{var _this$_value8,_this$_value9,_this$_value10,_this$_value11;const showOptional=showOptionalToggle(dataField);return dataField.selector&&(!dataField.advanced||this.showAdvanced||(_this$_value8=this._value)!==null&&_this$_value8!==void 0&&_this$_value8.data&&this._value.data[dataField.key]!==undefined)?$`<ha-settings-row .narrow=${this.narrow}>
                  ${!showOptional?hasOptional?$`<div slot="prefix" class="checkbox-spacer"></div>`:"":$`<ha-checkbox
                        .key=${dataField.key}
                        .checked=${this._checkedKeys.has(dataField.key)||((_this$_value9=this._value)===null||_this$_value9===void 0?void 0:_this$_value9.data)&&this._value.data[dataField.key]!==undefined}
                        @change=${this._checkboxChanged}
                        slot="prefix"
                      ></ha-checkbox>`}
                  <span slot="heading">${dataField.name||dataField.key}</span>
                  <span slot="description">${dataField===null||dataField===void 0?void 0:dataField.description}</span>
                  <ha-selector
                    .disabled=${showOptional&&!this._checkedKeys.has(dataField.key)&&(!((_this$_value10=this._value)!==null&&_this$_value10!==void 0&&_this$_value10.data)||this._value.data[dataField.key]===undefined)}
                    .hass=${this.hass}
                    .selector=${dataField.selector}
                    .key=${dataField.key}
                    @value-changed=${this._serviceDataChanged}
                    .value=${(_this$_value11=this._value)!==null&&_this$_value11!==void 0&&_this$_value11.data&&this._value.data[dataField.key]!==undefined?this._value.data[dataField.key]:dataField.default}
                  ></ha-selector>
                </ha-settings-row>`:"";})}`;}},{kind:"method",key:"_checkboxChanged",value:function _checkboxChanged(ev){const checked=ev.currentTarget.checked;const key=ev.currentTarget.key;let data;if(checked){var _this$_getServiceInfo,_this$_getServiceInfo2,_this$_value12;this._checkedKeys.add(key);const defaultValue=(_this$_getServiceInfo=this._getServiceInfo((_this$_value12=this._value)===null||_this$_value12===void 0?void 0:_this$_value12.service,this.hass.services))===null||_this$_getServiceInfo===void 0?void 0:(_this$_getServiceInfo2=_this$_getServiceInfo.fields.find(field=>field.key===key))===null||_this$_getServiceInfo2===void 0?void 0:_this$_getServiceInfo2.default;if(defaultValue){var _this$_value13;data={...((_this$_value13=this._value)===null||_this$_value13===void 0?void 0:_this$_value13.data),[key]:defaultValue};}}else {var _this$_value14;this._checkedKeys.delete(key);data={...((_this$_value14=this._value)===null||_this$_value14===void 0?void 0:_this$_value14.data)};delete data[key];}if(data){fireEvent(this,"value-changed",{value:{...this._value,data}});}this.requestUpdate("_checkedKeys");}},{kind:"method",key:"_serviceChanged",value:function _serviceChanged(ev){var _this$_value15;ev.stopPropagation();if(ev.detail.value===((_this$_value15=this._value)===null||_this$_value15===void 0?void 0:_this$_value15.service)){return;}fireEvent(this,"value-changed",{value:{service:ev.detail.value||""}});}},{kind:"method",key:"_entityPicked",value:function _entityPicked(ev){var _this$_value16,_this$_value16$data,_this$_value17;ev.stopPropagation();const newValue=ev.detail.value;if(((_this$_value16=this._value)===null||_this$_value16===void 0?void 0:(_this$_value16$data=_this$_value16.data)===null||_this$_value16$data===void 0?void 0:_this$_value16$data.entity_id)===newValue){return;}let value;if(!newValue&&(_this$_value17=this._value)!==null&&_this$_value17!==void 0&&_this$_value17.data){value={...this._value};delete value.data.entity_id;}else {var _this$_value18;value={...this._value,data:{...((_this$_value18=this._value)===null||_this$_value18===void 0?void 0:_this$_value18.data),entity_id:ev.detail.value}};}fireEvent(this,"value-changed",{value});}},{kind:"method",key:"_targetChanged",value:function _targetChanged(ev){var _this$_value19;ev.stopPropagation();const newValue=ev.detail.value;if(((_this$_value19=this._value)===null||_this$_value19===void 0?void 0:_this$_value19.target)===newValue){return;}let value;if(!newValue){value={...this._value};delete value.target;}else {value={...this._value,target:ev.detail.value};}fireEvent(this,"value-changed",{value});}},{kind:"method",key:"_serviceDataChanged",value:function _serviceDataChanged(ev){var _this$_value20,_this$_value20$data,_this$_value21,_this$_value21$data,_this$_value22;ev.stopPropagation();const key=ev.currentTarget.key;const value=ev.detail.value;if(((_this$_value20=this._value)===null||_this$_value20===void 0?void 0:(_this$_value20$data=_this$_value20.data)===null||_this$_value20$data===void 0?void 0:_this$_value20$data[key])===value||!((_this$_value21=this._value)!==null&&_this$_value21!==void 0&&(_this$_value21$data=_this$_value21.data)!==null&&_this$_value21$data!==void 0&&_this$_value21$data[key])&&(value===""||value===undefined)){return;}const data={...((_this$_value22=this._value)===null||_this$_value22===void 0?void 0:_this$_value22.data),[key]:value};if(value===""||value===undefined){delete data[key];}fireEvent(this,"value-changed",{value:{...this._value,data}});}},{kind:"method",key:"_dataChanged",value:function _dataChanged(ev){ev.stopPropagation();if(!ev.detail.isValid){return;}fireEvent(this,"value-changed",{value:{...this._value,data:ev.detail.value}});}},{kind:"method",key:"_fetchManifest",value:async function _fetchManifest(integration){this._manifest=undefined;try{this._manifest=await fetchIntegrationManifest(this.hass,integration);}catch(err){// Ignore if loading manifest fails. Probably bad JSON in manifest
}}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-settings-row {
        padding: var(--service-control-padding, 0 16px);
      }
      ha-settings-row {
        --paper-time-input-justify-content: flex-end;
        border-top: var(
          --service-control-items-border-top,
          1px solid var(--divider-color)
        );
      }
      ha-service-picker,
      ha-entity-picker,
      ha-yaml-editor {
        display: block;
        margin: var(--service-control-padding, 0 16px);
      }
      ha-yaml-editor {
        padding: 16px 0;
      }
      p {
        margin: var(--service-control-padding, 0 16px);
        padding: 16px 0;
      }
      :host(:not([narrow])) ha-settings-row ha-selector {
        width: 60%;
      }
      .checkbox-spacer {
        width: 32px;
      }
      ha-checkbox {
        margin-left: -16px;
      }
      .help-icon {
        color: var(--secondary-text-color);
      }
      .description {
        justify-content: space-between;
        display: flex;
        align-items: center;
        padding-right: 2px;
      }
    `;}}]};},s);

const actionStruct=object({service:optional(string()),entity_id:optional(entityIdOrAll()),target:optional(any()),data:optional(any())});_decorate([n("ha-automation-action-service")],function(_initialize,_LitElement){class HaServiceAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaServiceAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"action",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"narrow",value(){return false;}},{kind:"field",decorators:[t()],key:"_action",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {service:"",data:{}};}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProperties){if(!changedProperties.has("action")){return;}try{assert(this.action,actionStruct);}catch(err){fireEvent(this,"ui-mode-not-available",err);return;}if(this.action&&hasTemplate(this.action)){fireEvent(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support")));return;}if(this.action.entity_id){this._action={...this.action,data:{...this.action.data,entity_id:this.action.entity_id}};delete this._action.entity_id;}else {this._action=this.action;}}},{kind:"method",key:"render",value:function render(){var _this$hass$userData;return $`
      <ha-service-control
        .narrow=${this.narrow}
        .hass=${this.hass}
        .value=${this._action}
        .showAdvanced=${(_this$hass$userData=this.hass.userData)===null||_this$hass$userData===void 0?void 0:_this$hass$userData.showAdvanced}
        @value-changed=${this._actionChanged}
      ></ha-service-control>
    `;}},{kind:"method",key:"_actionChanged",value:function _actionChanged(ev){if(ev.detail.value===this._action){ev.stopPropagation();}}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-service-control {
        display: block;
        margin: 0 -16px;
      }
    `;}}]};},s);

_decorate([n("ha-device-trigger-picker")],function(_initialize,_HaDeviceAutomationPi){class HaDeviceTriggerPicker extends _HaDeviceAutomationPi{constructor(){super(localizeDeviceAutomationTrigger,fetchDeviceTriggers,deviceId=>({device_id:deviceId||"",platform:"device",domain:"",entity_id:""}));_initialize(this);}}return {F:HaDeviceTriggerPicker,d:[{kind:"get",key:"NO_AUTOMATION_TEXT",value:function NO_AUTOMATION_TEXT(){return this.hass.localize("ui.panel.config.devices.automation.triggers.no_triggers");}},{kind:"get",key:"UNKNOWN_AUTOMATION_TEXT",value:function UNKNOWN_AUTOMATION_TEXT(){return this.hass.localize("ui.panel.config.devices.automation.triggers.unknown_trigger");}}]};},HaDeviceAutomationPicker);

let HaDeviceTrigger=_decorate([n("ha-automation-trigger-device")],function(_initialize,_LitElement){class HaDeviceTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaDeviceTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({type:Object})],key:"trigger",value:void 0},{kind:"field",decorators:[t()],key:"_deviceId",value:void 0},{kind:"field",decorators:[t()],key:"_capabilities",value:void 0},{kind:"field",key:"_origTrigger",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {device_id:"",domain:"",entity_id:""};}},{kind:"field",key:"_extraFieldsData",value(){return memoizeOne((trigger,capabilities)=>{const extraFieldsData={};capabilities.extra_fields.forEach(item=>{if(trigger[item.name]!==undefined){extraFieldsData[item.name]=trigger[item.name];}});return extraFieldsData;});}},{kind:"method",key:"render",value:function render(){var _this$_capabilities;const deviceId=this._deviceId||this.trigger.device_id;return $`
      <ha-device-picker
        .value=${deviceId}
        @value-changed=${this._devicePicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.device.label")}
      ></ha-device-picker>
      <ha-device-trigger-picker
        .value=${this.trigger}
        .deviceId=${deviceId}
        @value-changed=${this._deviceTriggerPicked}
        .hass=${this.hass}
        label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.device.trigger")}
      ></ha-device-trigger-picker>
      ${(_this$_capabilities=this._capabilities)!==null&&_this$_capabilities!==void 0&&_this$_capabilities.extra_fields?$`
            <ha-form
              .hass=${this.hass}
              .data=${this._extraFieldsData(this.trigger,this._capabilities)}
              .schema=${this._capabilities.extra_fields}
              .computeLabel=${this._extraFieldsComputeLabelCallback(this.hass.localize)}
              @value-changed=${this._extraFieldsChanged}
            ></ha-form>
          `:""}
    `;}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){if(!this._capabilities){this._getCapabilities();}if(this.trigger){this._origTrigger=this.trigger;}}},{kind:"method",key:"updated",value:function updated(changedPros){if(!changedPros.has("trigger")){return;}const prevTrigger=changedPros.get("trigger");if(prevTrigger&&!deviceAutomationsEqual(prevTrigger,this.trigger)){this._getCapabilities();}}},{kind:"method",key:"_getCapabilities",value:async function _getCapabilities(){const trigger=this.trigger;this._capabilities=trigger.domain?await fetchDeviceTriggerCapabilities(this.hass,trigger):undefined;}},{kind:"method",key:"_devicePicked",value:function _devicePicked(ev){ev.stopPropagation();this._deviceId=ev.target.value;if(this._deviceId===undefined){fireEvent(this,"value-changed",{value:{...HaDeviceTrigger.defaultConfig,platform:"device"}});}}},{kind:"method",key:"_deviceTriggerPicked",value:function _deviceTriggerPicked(ev){ev.stopPropagation();let trigger=ev.detail.value;if(this._origTrigger&&deviceAutomationsEqual(this._origTrigger,trigger)){trigger=this._origTrigger;}if(this.trigger.id){trigger.id=this.trigger.id;}fireEvent(this,"value-changed",{value:trigger});}},{kind:"method",key:"_extraFieldsChanged",value:function _extraFieldsChanged(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.trigger,...ev.detail.value}});}},{kind:"method",key:"_extraFieldsComputeLabelCallback",value:function _extraFieldsComputeLabelCallback(localize){// Returns a callback for ha-form to calculate labels per schema object
return schema=>localize(`ui.panel.config.automation.editor.triggers.type.device.extra_fields.${schema.name}`)||schema.name;}},{kind:"field",static:true,key:"styles",value(){return r`
    ha-device-picker {
      display: block;
      margin-bottom: 24px;
    }
  `;}}]};},s);

_decorate([n("ha-user-badge")],function(_initialize,_LitElement){class UserBadge extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:UserBadge,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"user",value:void 0},{kind:"field",decorators:[t()],key:"_personPicture",value:void 0},{kind:"field",key:"_personEntityId",value:void 0},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){_get(_getPrototypeOf(UserBadge.prototype),"willUpdate",this).call(this,changedProps);if(changedProps.has("user")){this._getPersonPicture();return;}const oldHass=changedProps.get("hass");if(this._personEntityId&&oldHass&&this.hass.states[this._personEntityId]!==oldHass.states[this._personEntityId]){const entityState=this.hass.states[this._personEntityId];if(entityState){this._personPicture=entityState.attributes.entity_picture;}else {this._getPersonPicture();}}else if(!this._personEntityId&&oldHass){this._getPersonPicture();}}},{kind:"method",key:"render",value:function render(){if(!this.hass||!this.user){return $``;}const picture=this._personPicture;if(picture){return $`<div
        style=${i$1({backgroundImage:`url(${picture})`})}
        class="picture"
      ></div>`;}const initials=computeUserInitials(this.user.name);return $`<div
      class="initials ${o({long:initials.length>2})}"
    >
      ${initials}
    </div>`;}},{kind:"method",key:"_getPersonPicture",value:function _getPersonPicture(){this._personEntityId=undefined;this._personPicture=undefined;if(!this.hass||!this.user){return;}for(const entity of Object.values(this.hass.states)){if(entity.attributes.user_id===this.user.id&&computeStateDomain(entity)==="person"){this._personEntityId=entity.entity_id;this._personPicture=entity.attributes.entity_picture;break;}}}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        display: contents;
      }
      .picture {
        width: 40px;
        height: 40px;
        background-size: cover;
        border-radius: 50%;
      }
      .initials {
        display: inline-block;
        box-sizing: border-box;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: var(--light-primary-color);
        text-decoration: none;
        color: var(--text-light-primary-color, var(--primary-text-color));
        overflow: hidden;
      }
      .initials.long {
        font-size: 80%;
      }
    `;}}]};},s);

let HaUserPicker=_decorate(null,function(_initialize,_LitElement){class HaUserPicker extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaUserPicker,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"noUserLabel",value:void 0},{kind:"field",decorators:[e()],key:"value",value(){return "";}},{kind:"field",decorators:[e()],key:"users",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"field",key:"_sortedUsers",value(){return memoizeOne(users=>{if(!users){return [];}return users.filter(user=>!user.system_generated).sort((a,b)=>stringCompare(a.name,b.name));});}},{kind:"method",key:"render",value:function render(){var _this$users,_this$hass;return $`
      <ha-select
        .label=${this.label}
        .disabled=${this.disabled}
        .value=${this.value}
        @selected=${this._userChanged}
      >
        ${((_this$users=this.users)===null||_this$users===void 0?void 0:_this$users.length)===0?$`<mwc-list-item value="">
              ${this.noUserLabel||((_this$hass=this.hass)===null||_this$hass===void 0?void 0:_this$hass.localize("ui.components.user-picker.no_user"))}
            </mwc-list-item>`:""}
        ${this._sortedUsers(this.users).map(user=>$`
            <mwc-list-item graphic="avatar" .value=${user.id}>
              <ha-user-badge
                .hass=${this.hass}
                .user=${user}
                slot="graphic"
              ></ha-user-badge>
              ${user.name}
            </mwc-list-item>
          `)}
      </ha-select>
    `;}},{kind:"method",key:"firstUpdated",value:function firstUpdated(changedProps){_get(_getPrototypeOf(HaUserPicker.prototype),"firstUpdated",this).call(this,changedProps);if(this.users===undefined){fetchUsers(this.hass).then(users=>{this.users=users;});}}},{kind:"method",key:"_userChanged",value:function _userChanged(ev){const newValue=ev.target.value;if(newValue!==this.value){this.value=newValue;setTimeout(()=>{fireEvent(this,"value-changed",{value:newValue});fireEvent(this,"change");},0);}}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        display: inline-block;
      }
      mwc-list {
        display: block;
      }
    `;}}]};},s);customElements.define("ha-user-picker",HaUserPicker);

_decorate([n("ha-users-picker")],function(_initialize,_LitElement){class HaUsersPickerLight extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaUsersPickerLight,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e({attribute:"picked-user-label"})],key:"pickedUserLabel",value:void 0},{kind:"field",decorators:[e({attribute:"pick-user-label"})],key:"pickUserLabel",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"users",value:void 0},{kind:"method",key:"firstUpdated",value:function firstUpdated(changedProps){_get(_getPrototypeOf(HaUsersPickerLight.prototype),"firstUpdated",this).call(this,changedProps);if(this.users===undefined){fetchUsers(this.hass).then(users=>{this.users=users;});}}},{kind:"method",key:"render",value:function render(){if(!this.hass||!this.users){return $``;}const notSelectedUsers=this._notSelectedUsers(this.users,this.value);return $`
      ${i$2([notSelectedUsers],()=>{var _this$value;return (_this$value=this.value)===null||_this$value===void 0?void 0:_this$value.map((user_id,idx)=>$`
            <div>
              <ha-user-picker
                .label=${this.pickedUserLabel}
                .noUserLabel=${this.hass.localize("ui.components.user-picker.remove_user")}
                .index=${idx}
                .hass=${this.hass}
                .value=${user_id}
                .users=${this._notSelectedUsersAndSelected(user_id,this.users,notSelectedUsers)}
                @value-changed=${this._userChanged}
              ></ha-user-picker>
              <ha-icon-button
                .userId=${user_id}
                .label=${this.hass.localize("ui.components.user-picker.remove_user")}
                .path=${mdiClose}
                @click=${this._removeUser}
              >
                ></ha-icon-button
              >
            </div>
          `);})}
      <ha-user-picker
        .label=${this.pickUserLabel||this.hass.localize("ui.components.user-picker.add_user")}
        .hass=${this.hass}
        .users=${notSelectedUsers}
        .disabled=${!(notSelectedUsers!==null&&notSelectedUsers!==void 0&&notSelectedUsers.length)}
        @value-changed=${this._addUser}
      ></ha-user-picker>
    `;}},{kind:"field",key:"_notSelectedUsers",value(){return memoizeOne((users,currentUsers)=>currentUsers?users===null||users===void 0?void 0:users.filter(user=>!user.system_generated&&!currentUsers.includes(user.id)):users===null||users===void 0?void 0:users.filter(user=>!user.system_generated));}},{kind:"field",key:"_notSelectedUsersAndSelected",value(){return (userId,users,notSelected)=>{const selectedUser=users===null||users===void 0?void 0:users.find(user=>user.id===userId);if(selectedUser){return notSelected?[...notSelected,selectedUser]:[selectedUser];}return notSelected;};}},{kind:"get",key:"_currentUsers",value:function _currentUsers(){return this.value||[];}},{kind:"method",key:"_updateUsers",value:async function _updateUsers(users){this.value=users;fireEvent(this,"value-changed",{value:users});}},{kind:"method",key:"_userChanged",value:function _userChanged(event){event.stopPropagation();const index=event.currentTarget.index;const newValue=event.detail.value;const newUsers=[...this._currentUsers];if(newValue===""){newUsers.splice(index,1);}else {newUsers.splice(index,1,newValue);}this._updateUsers(newUsers);}},{kind:"method",key:"_addUser",value:async function _addUser(event){event.stopPropagation();const toAdd=event.detail.value;event.currentTarget.value="";if(!toAdd){return;}const currentUsers=this._currentUsers;if(currentUsers.includes(toAdd)){return;}this._updateUsers([...currentUsers,toAdd]);}},{kind:"method",key:"_removeUser",value:function _removeUser(event){const userId=event.currentTarget.userId;this._updateUsers(this._currentUsers.filter(user=>user!==userId));}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        display: block;
      }
      div {
        display: flex;
        align-items: center;
      }
    `;}}]};},s);

_decorate([n("ha-automation-trigger-event")],function(_initialize,_LitElement){class HaEventTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaEventTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"trigger",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {event_type:""};}},{kind:"method",key:"render",value:function render(){const{event_type,event_data,context}=this.trigger;return $`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.event_type")}
        name="event_type"
        .value=${event_type}
        @change=${this._valueChanged}
      ></ha-textfield>
      <ha-yaml-editor
        .hass=${this.hass}
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.event_data")}
        .name=${"event_data"}
        .defaultValue=${event_data}
        @value-changed=${this._dataChanged}
      ></ha-yaml-editor>
      <br />
      ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_users")}
      <ha-users-picker
        .pickedUserLabel=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_user_picked")}
        .pickUserLabel=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.event.context_user_pick")}
        .hass=${this.hass}
        .value=${this._wrapUsersInArray(context===null||context===void 0?void 0:context.user_id)}
        @value-changed=${this._usersChanged}
      ></ha-users-picker>
    `;}},{kind:"method",key:"_wrapUsersInArray",value:function _wrapUsersInArray(user_id){if(!user_id){return [];}if(typeof user_id==="string"){return [user_id];}return user_id;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();handleChangeEvent$1(this,ev);}},{kind:"method",key:"_dataChanged",value:function _dataChanged(ev){ev.stopPropagation();if(!ev.detail.isValid){return;}handleChangeEvent$1(this,ev);}},{kind:"method",key:"_usersChanged",value:function _usersChanged(ev){ev.stopPropagation();const value={...this.trigger};if(!ev.detail.value.length&&value.context){delete value.context.user_id;}else {if(!value.context){value.context={};}value.context.user_id=ev.detail.value;}fireEvent(this,"value-changed",{value});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-textfield {
        display: block;
      }
    `;}}]};},s);

_decorate([n("ha-automation-trigger-geo_location")],function(_initialize,_LitElement){class HaGeolocationTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaGeolocationTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value(){return memoizeOne(localize=>[{name:"source",selector:{text:{}}},{name:"zone",selector:{entity:{domain:"zone"}}},{name:"event",type:"select",required:true,options:[["enter",localize("ui.panel.config.automation.editor.triggers.type.geo_location.enter")],["leave",localize("ui.panel.config.automation.editor.triggers.type.geo_location.leave")]]}]);}},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {source:"",zone:"",event:"enter"};}},{kind:"method",key:"render",value:function render(){return $`
      <ha-form
        .schema=${this._schema(this.hass.localize)}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.geo_location.${schema.name}`);}}]};},s);

_decorate([n("ha-automation-trigger-homeassistant")],function(_initialize,_LitElement){class HaHassTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaHassTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value(){return memoizeOne(localize=>[{name:"event",type:"select",required:true,options:[["start",localize("ui.panel.config.automation.editor.triggers.type.homeassistant.start")],["shutdown",localize("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown")]]}]);}},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {event:"start"};}},{kind:"method",key:"render",value:function render(){return $`
      <ha-form
        .schema=${this._schema(this.hass.localize)}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.geo_location.${schema.name}`);}},{kind:"field",static:true,key:"styles",value(){return r`
    label {
      display: flex;
      align-items: center;
    }
  `;}}]};},s);

const SCHEMA$2=[{name:"topic",required:true,selector:{text:{}}},{name:"payload",selector:{text:{}}}];_decorate([n("ha-automation-trigger-mqtt")],function(_initialize,_LitElement){class HaMQTTTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaMQTTTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"trigger",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {topic:""};}},{kind:"method",key:"render",value:function render(){return $`
      <ha-form
        .schema=${SCHEMA$2}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.mqtt.${schema.name}`);}}]};},s);

_decorate([n("ha-automation-trigger-numeric_state")],function(_initialize,_LitElement){class HaNumericStateTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaNumericStateTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"trigger",value:void 0},{kind:"field",key:"_schema",value(){return memoizeOne(entityId=>[{name:"entity_id",required:true,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:entityId}}},{name:"above",selector:{text:{}}},{name:"below",selector:{text:{}}},{name:"value_template",selector:{text:{multiline:true}}},{name:"for",selector:{duration:{}}}]);}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProperties){if(!changedProperties.has("trigger")){return;}// Check for templates in trigger. If found, revert to YAML mode.
if(this.trigger&&hasTemplate(this.trigger)){fireEvent(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support")));}}},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {entity_id:""};}},{kind:"method",key:"render",value:function render(){const trgFor=createDurationData(this.trigger.for);const data={...this.trigger,for:trgFor};const schema=this._schema(this.trigger.entity_id);return $`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>{switch(schema.name){case"entity_id":return this.hass.localize("ui.components.entity.entity-picker.entity");case"attribute":return this.hass.localize("ui.components.entity.entity-attribute-picker.attribute");case"for":return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.state.for`);default:return this.hass.localize(`ui.panel.config.automation.editor.triggers.type.numeric_state.${schema.name}`);}};}}]};},s);

const stateTriggerStruct=assign(baseTriggerStruct,object({platform:literal("state"),entity_id:optional(string()),attribute:optional(string()),from:optional(string()),to:optional(string()),for:optional(union([string(),forDictStruct]))}));_decorate([n("ha-automation-trigger-state")],function(_initialize,_LitElement){class HaStateTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaStateTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"trigger",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {entity_id:""};}},{kind:"field",key:"_schema",value(){return memoizeOne(entityId=>[{name:"entity_id",required:true,selector:{entity:{}}},{name:"attribute",selector:{attribute:{entity_id:entityId}}},{name:"from",selector:{text:{}}},{name:"to",selector:{text:{}}},{name:"for",selector:{duration:{}}}]);}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProperties){if(!changedProperties.has("trigger")){return true;}if(this.trigger.for&&typeof this.trigger.for==="object"&&this.trigger.for.milliseconds===0){delete this.trigger.for.milliseconds;}// Check for templates in trigger. If found, revert to YAML mode.
if(this.trigger&&hasTemplate(this.trigger)){fireEvent(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.no_template_editor_support")));return false;}try{assert(this.trigger,stateTriggerStruct);}catch(e){fireEvent(this,"ui-mode-not-available",e);return false;}return true;}},{kind:"method",key:"render",value:function render(){const trgFor=createDurationData(this.trigger.for);const data={...this.trigger,...{for:trgFor}};const schema=this._schema(this.trigger.entity_id);return $`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;Object.keys(newTrigger).forEach(key=>newTrigger[key]===undefined||newTrigger[key]===""?delete newTrigger[key]:{});fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(schema.name==="entity_id"?"ui.components.entity.entity-picker.entity":`ui.panel.config.automation.editor.triggers.type.state.${schema.name}`);}}]};},s);

_decorate([n("ha-automation-trigger-sun")],function(_initialize,_LitElement){class HaSunTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaSunTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"trigger",value:void 0},{kind:"field",key:"_schema",value(){return memoizeOne(localize=>[{name:"event",type:"select",required:true,options:[["sunrise",localize("ui.panel.config.automation.editor.triggers.type.sun.sunrise")],["sunset",localize("ui.panel.config.automation.editor.triggers.type.sun.sunset")]]},{name:"offset",selector:{text:{}}}]);}},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {event:"sunrise",offset:0};}},{kind:"method",key:"render",value:function render(){const schema=this._schema(this.hass.localize);return $`
      <ha-form
        .schema=${schema}
        .data=${this.trigger}
        .hass=${this.hass}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.sun.${schema.name}`);}}]};},s);

const fetchTags=async hass=>hass.callWS({type:"tag/list"});

_decorate([n("ha-automation-trigger-tag")],function(_initialize,_LitElement){class HaTagTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTagTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"trigger",value:void 0},{kind:"field",decorators:[t()],key:"_tags",value(){return [];}},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {tag_id:""};}},{kind:"method",key:"firstUpdated",value:function firstUpdated(changedProperties){_get(_getPrototypeOf(HaTagTrigger.prototype),"firstUpdated",this).call(this,changedProperties);this._fetchTags();}},{kind:"method",key:"render",value:function render(){const{tag_id}=this.trigger;return $`
      <ha-select
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.tag.label")}
        .disabled=${this._tags.length===0}
        .value=${tag_id}
        @selected=${this._tagChanged}
      >
        ${this._tags.map(tag=>$`
            <mwc-list-item .value=${tag.id}>
              ${tag.name||tag.id}
            </mwc-list-item>
          `)}
      </ha-select>
    `;}},{kind:"method",key:"_fetchTags",value:async function _fetchTags(){this._tags=await fetchTags(this.hass);this._tags.sort((a,b)=>caseInsensitiveStringCompare(a.name||a.id,b.name||b.id));}},{kind:"method",key:"_tagChanged",value:function _tagChanged(ev){fireEvent(this,"value-changed",{value:{...this.trigger,tag_id:ev.target.value}});}}]};},s);

_decorate([n("ha-automation-trigger-template")],function(_initialize,_LitElement){class HaTemplateTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTemplateTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"trigger",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {value_template:""};}},{kind:"method",key:"render",value:function render(){const{value_template}=this.trigger;return $`
      <ha-textarea
        name="value_template"
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.template.value_template")}
        .value=${value_template}
        @input=${this._valueChanged}
        dir="ltr"
        autogrow
      ></ha-textarea>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){handleChangeEvent$1(this,ev);}},{kind:"field",static:true,key:"styles",value(){return r`
    ha-textarea {
      display: block;
    }
  `;}}]};},s);

_decorate([n("ha-automation-trigger-time")],function(_initialize,_LitElement){class HaTimeTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTimeTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"trigger",value:void 0},{kind:"field",decorators:[t()],key:"_inputMode",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {at:""};}},{kind:"field",key:"_schema",value(){return memoizeOne((localize,inputMode)=>{const atSelector=inputMode?{entity:{domain:"input_datetime"}}:{time:{}};return [{name:"mode",type:"select",required:true,options:[["value",localize("ui.panel.config.automation.editor.triggers.type.time.type_value")],["input",localize("ui.panel.config.automation.editor.triggers.type.time.type_input")]]},{name:"at",selector:atSelector}];});}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProperties){if(!changedProperties.has("trigger")){return;}// We dont support multiple times atm.
if(this.trigger&&Array.isArray(this.trigger.at)){fireEvent(this,"ui-mode-not-available",Error(this.hass.localize("ui.errors.config.editor_not_supported")));}}},{kind:"method",key:"render",value:function render(){var _this$_inputMode;const at=this.trigger.at;if(Array.isArray(at)){return $``;}const inputMode=(_this$_inputMode=this._inputMode)!==null&&_this$_inputMode!==void 0?_this$_inputMode:(at===null||at===void 0?void 0:at.startsWith("input_datetime."))||(at===null||at===void 0?void 0:at.startsWith("sensor."));const schema=this._schema(this.hass.localize,inputMode);const data={mode:inputMode?"input":"value",...this.trigger};return $`
      <ha-form
        .hass=${this.hass}
        .data=${data}
        .schema=${schema}
        @value-changed=${this._valueChanged}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newValue=ev.detail.value;this._inputMode=newValue.mode==="input";delete newValue.mode;Object.keys(newValue).forEach(key=>newValue[key]===undefined||newValue[key]===""?delete newValue[key]:{});fireEvent(this,"value-changed",{value:newValue});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.time.${schema.name}`);}}]};},s);

const SCHEMA$1=[{name:"hours",selector:{text:{}}},{name:"minutes",selector:{text:{}}},{name:"seconds",selector:{text:{}}}];_decorate([n("ha-automation-trigger-time_pattern")],function(_initialize,_LitElement){class HaTimePatternTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTimePatternTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"trigger",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {};}},{kind:"method",key:"render",value:function render(){return $`
      <ha-form
        .hass=${this.hass}
        .schema=${SCHEMA$1}
        .data=${this.trigger}
        .computeLabel=${this._computeLabelCallback}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newTrigger=ev.detail.value;fireEvent(this,"value-changed",{value:newTrigger});}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.panel.config.automation.editor.triggers.type.time_pattern.${schema.name}`);}}]};},s);

// https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
const slugify=(value,delimiter="_")=>{const a="àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";const b=`aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz${delimiter}${delimiter}${delimiter}${delimiter}${delimiter}${delimiter}`;const p=new RegExp(a.split("").join("|"),"g");return value.toString().toLowerCase().replace(/\s+/g,delimiter)// Replace spaces with delimiter
.replace(p,c=>b.charAt(a.indexOf(c)))// Replace special characters
.replace(/&/g,`${delimiter}and${delimiter}`)// Replace & with 'and'
.replace(/[^\w-]+/g,"")// Remove all non-word characters
.replace(/-/g,delimiter)// Replace - with delimiter
.replace(new RegExp(`(${delimiter})\\1+`,"g"),"$1")// Replace multiple delimiters with single delimiter
.replace(new RegExp(`^${delimiter}+`),"")// Trim delimiter from start of text
.replace(new RegExp(`${delimiter}+$`),"");// Trim delimiter from end of text
};

const copyToClipboard=async str=>{if(navigator.clipboard){try{await navigator.clipboard.writeText(str);return;}catch{// just continue with the fallback coding below
}}const el=document.createElement("textarea");el.value=str;document.body.appendChild(el);el.select();document.execCommand("copy");document.body.removeChild(el);};

const DEFAULT_WEBHOOK_ID="";_decorate([n("ha-automation-trigger-webhook")],function(_initialize,_LitElement){class HaWebhookTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaWebhookTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"trigger",value:void 0},{kind:"field",decorators:[t()],key:"_config",value:void 0},{kind:"field",key:"_unsub",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {webhook_id:DEFAULT_WEBHOOK_ID};}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HaWebhookTrigger.prototype),"connectedCallback",this).call(this);const details={callback:config=>{this._config=config;}};fireEvent(this,"subscribe-automation-config",details);this._unsub=details.unsub;}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaWebhookTrigger.prototype),"disconnectedCallback",this).call(this);if(this._unsub){this._unsub();}}},{kind:"method",key:"_generateWebhookId",value:function _generateWebhookId(){var _this$_config;// The webhook_id should be treated like a password. Generate a default
// value that would be hard for someone to guess. This generates a
// 144-bit random value. The output is a 24 character url-safe string.
const randomBytes=crypto.getRandomValues(new Uint8Array(18));const base64Str=btoa(String.fromCharCode(...randomBytes));const urlSafeId=base64Str.replace(/\+/g,"-").replace(/\//g,"_");// Include the automation name to give the user context about what the
// webhook_id is used for.
const urlSafeAlias=slugify(((_this$_config=this._config)===null||_this$_config===void 0?void 0:_this$_config.alias)||"","-");return `${urlSafeAlias}-${urlSafeId}`;}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProperties){_get(_getPrototypeOf(HaWebhookTrigger.prototype),"willUpdate",this).call(this,changedProperties);if(changedProperties.has("trigger")){if(this.trigger.webhook_id===DEFAULT_WEBHOOK_ID){this.trigger.webhook_id=this._generateWebhookId();}}}},{kind:"method",key:"render",value:function render(){const{webhook_id:webhookId}=this.trigger;return $`
      <ha-textfield
        name="webhook_id"
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id")}
        .helper=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id_helper")}
        iconTrailing
        .value=${webhookId||""}
        @input=${this._valueChanged}
      >
        <ha-icon-button
          @click=${this._copyUrl}
          slot="trailingIcon"
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.webhook.copy_url")}
          .path=${mdiContentCopy}
        ></ha-icon-button>
      </ha-textfield>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){handleChangeEvent$1(this,ev);}},{kind:"method",key:"_copyUrl",value:async function _copyUrl(ev){const inputElement=ev.target.parentElement;const url=this.hass.hassUrl(`/api/webhook/${inputElement.value}`);await copyToClipboard(url);showToast(this,{message:this.hass.localize("ui.common.copied_clipboard")});}},{kind:"field",static:true,key:"styles",value(){return r`
    ha-textfield {
      display: block;
    }

    ha-textfield > ha-icon-button {
      --mdc-icon-button-size: 24px;
      --mdc-icon-size: 18px;
    }
  `;}}]};},s);

function zoneAndLocationFilter(stateObj){return hasLocation(stateObj)&&computeStateDomain(stateObj)!=="zone";}const includeDomains=["zone"];_decorate([n("ha-automation-trigger-zone")],function(_initialize,_LitElement){class HaZoneTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaZoneTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"trigger",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {entity_id:"",zone:"",event:"enter"};}},{kind:"method",key:"render",value:function render(){const{entity_id,zone,event}=this.trigger;return $`
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.entity")}
        .value=${entity_id}
        @value-changed=${this._entityPicked}
        .hass=${this.hass}
        allow-custom-entity
        .entityFilter=${zoneAndLocationFilter}
      ></ha-entity-picker>
      <ha-entity-picker
        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.zone")}
        .value=${zone}
        @value-changed=${this._zonePicked}
        .hass=${this.hass}
        allow-custom-entity
        .includeDomains=${includeDomains}
      ></ha-entity-picker>

      <label>
        ${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.event")}
        <ha-formfield
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.enter")}
        >
          <ha-radio
            name="event"
            value="enter"
            .checked=${event==="enter"}
            @change=${this._radioGroupPicked}
          ></ha-radio>
        </ha-formfield>
        <ha-formfield
          .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type.zone.leave")}
        >
          <ha-radio
            name="event"
            value="leave"
            .checked=${event==="leave"}
            @change=${this._radioGroupPicked}
          ></ha-radio>
        </ha-formfield>
      </label>
    `;}},{kind:"method",key:"_entityPicked",value:function _entityPicked(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.trigger,entity_id:ev.detail.value}});}},{kind:"method",key:"_zonePicked",value:function _zonePicked(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.trigger,zone:ev.detail.value}});}},{kind:"method",key:"_radioGroupPicked",value:function _radioGroupPicked(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:{...this.trigger,event:ev.target.value}});}},{kind:"field",static:true,key:"styles",value(){return r`
    label {
      display: flex;
      align-items: center;
    }
    ha-entity-picker {
      display: block;
      margin-bottom: 24px;
    }
  `;}}]};},s);

const OPTIONS$1=["device","event","state","geo_location","homeassistant","mqtt","numeric_state","sun","tag","template","time","time_pattern","webhook","zone"];const handleChangeEvent$1=(element,ev)=>{var _ev$currentTarget,_ev$target;ev.stopPropagation();const name=(_ev$currentTarget=ev.currentTarget)===null||_ev$currentTarget===void 0?void 0:_ev$currentTarget.name;if(!name){return;}const newVal=(_ev$target=ev.target)===null||_ev$target===void 0?void 0:_ev$target.value;if((element.trigger[name]||"")===newVal){return;}let newTrigger;if(newVal===undefined||newVal===""){newTrigger={...element.trigger};delete newTrigger[name];}else {newTrigger={...element.trigger,[name]:newVal};}fireEvent(element,"value-changed",{value:newTrigger});};_decorate([n("ha-automation-trigger-row")],function(_initialize,_LitElement){class HaAutomationTriggerRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAutomationTriggerRow,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"trigger",value:void 0},{kind:"field",decorators:[t()],key:"_warnings",value:void 0},{kind:"field",decorators:[t()],key:"_yamlMode",value(){return false;}},{kind:"field",decorators:[t()],key:"_requestShowId",value(){return false;}},{kind:"field",decorators:[t()],key:"_triggered",value(){return false;}},{kind:"field",decorators:[t()],key:"_triggerColor",value(){return false;}},{kind:"field",key:"_triggerUnsub",value:void 0},{kind:"field",key:"_processedTypes",value(){return memoizeOne(localize=>OPTIONS$1.map(action=>[action,localize(`ui.panel.config.automation.editor.triggers.type.${action}.label`)]).sort((a,b)=>stringCompare(a[1],b[1])));}},{kind:"method",key:"render",value:function render(){const selected=OPTIONS$1.indexOf(this.trigger.platform);const yamlMode=this._yamlMode||selected===-1;const showId="id"in this.trigger||this._requestShowId;return $`
      <ha-card>
        <div class="card-content">
          <div class="card-menu">
            <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
              <ha-icon-button
                slot="trigger"
                .label=${this.hass.localize("ui.common.menu")}
                .path=${mdiDotsVertical}
              ></ha-icon-button>
              <mwc-list-item>
                ${this.hass.localize("ui.panel.config.automation.editor.triggers.edit_id")}
              </mwc-list-item>
              <mwc-list-item .disabled=${selected===-1}>
                ${yamlMode?this.hass.localize("ui.panel.config.automation.editor.edit_ui"):this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
              </mwc-list-item>
              <mwc-list-item>
                ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
              </mwc-list-item>
              <mwc-list-item class="warning">
                ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
              </mwc-list-item>
            </ha-button-menu>
          </div>
          ${this._warnings?$`<ha-alert
                alert-type="warning"
                .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
              >
                ${this._warnings.length&&this._warnings[0]!==undefined?$` <ul>
                      ${this._warnings.map(warning=>$`<li>${warning}</li>`)}
                    </ul>`:""}
                ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
              </ha-alert>`:""}
          ${yamlMode?$`
                ${selected===-1?$`
                      ${this.hass.localize("ui.panel.config.automation.editor.triggers.unsupported_platform","platform",this.trigger.platform)}
                    `:""}
                <h2>
                  ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
                </h2>
                <ha-yaml-editor
                  .hass=${this.hass}
                  .defaultValue=${this.trigger}
                  @value-changed=${this._onYamlChange}
                ></ha-yaml-editor>
              `:$`
                <ha-select
                  .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.type_select")}
                  .value=${this.trigger.platform}
                  naturalMenuWidth
                  @selected=${this._typeChanged}
                >
                  ${this._processedTypes(this.hass.localize).map(([opt,label])=>$`
                      <mwc-list-item .value=${opt}>${label}</mwc-list-item>
                    `)}
                </ha-select>

                ${showId?$`
                      <ha-textfield
                        .label=${this.hass.localize("ui.panel.config.automation.editor.triggers.id")}
                        .value=${this.trigger.id||""}
                        @change=${this._idChanged}
                      >
                      </ha-textfield>
                    `:""}
                <div @ui-mode-not-available=${this._handleUiModeNotAvailable}>
                  ${dynamicElement(`ha-automation-trigger-${this.trigger.platform}`,{hass:this.hass,trigger:this.trigger})}
                </div>
              `}
        </div>
        <div
          class="triggered ${o({active:this._triggered,accent:this._triggerColor})}"
        >
          ${this.hass.localize("ui.panel.config.automation.editor.triggers.triggered")}
        </div>
      </ha-card>
    `;}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HaAutomationTriggerRow.prototype),"updated",this).call(this,changedProps);if(changedProps.has("trigger")){this._subscribeTrigger();}}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HaAutomationTriggerRow.prototype),"connectedCallback",this).call(this);if(this.hasUpdated&&this.trigger){this._subscribeTrigger();}}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaAutomationTriggerRow.prototype),"disconnectedCallback",this).call(this);if(this._triggerUnsub){this._triggerUnsub.then(unsub=>unsub());this._triggerUnsub=undefined;}this._doSubscribeTrigger.cancel();}},{kind:"method",key:"_subscribeTrigger",value:function _subscribeTrigger(){// Clean up old trigger subscription.
if(this._triggerUnsub){this._triggerUnsub.then(unsub=>unsub());this._triggerUnsub=undefined;}this._doSubscribeTrigger();}},{kind:"field",key:"_doSubscribeTrigger",value(){return debounce(async()=>{let untriggerTimeout;const showTriggeredTime=5000;const trigger=this.trigger;// Clean up old trigger subscription.
if(this._triggerUnsub){this._triggerUnsub.then(unsub=>unsub());this._triggerUnsub=undefined;}const validateResult=await validateConfig(this.hass,{trigger:this.trigger});// Don't do anything if trigger not valid or if trigger changed.
if(!validateResult.trigger.valid||this.trigger!==trigger){return;}const triggerUnsub=subscribeTrigger(this.hass,()=>{if(untriggerTimeout!==undefined){clearTimeout(untriggerTimeout);this._triggerColor=!this._triggerColor;}else {this._triggerColor=false;}this._triggered=true;untriggerTimeout=window.setTimeout(()=>{this._triggered=false;untriggerTimeout=undefined;},showTriggeredTime);},trigger);triggerUnsub.catch(()=>{if(this._triggerUnsub===triggerUnsub){this._triggerUnsub=undefined;}});this._triggerUnsub=triggerUnsub;},5000);}},{kind:"method",key:"_handleUiModeNotAvailable",value:function _handleUiModeNotAvailable(ev){this._warnings=handleStructError(this.hass,ev.detail).warnings;if(!this._yamlMode){this._yamlMode=true;}}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){switch(ev.detail.index){case 0:this._requestShowId=true;break;case 1:this._switchYamlMode();break;case 2:fireEvent(this,"duplicate");break;case 3:this._onDelete();break;}}},{kind:"method",key:"_onDelete",value:function _onDelete(){showConfirmationDialog(this,{text:this.hass.localize("ui.panel.config.automation.editor.triggers.delete_confirm"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),confirm:()=>{fireEvent(this,"value-changed",{value:null});}});}},{kind:"method",key:"_typeChanged",value:function _typeChanged(ev){const type=ev.target.value;if(!type){return;}const elClass=customElements.get(`ha-automation-trigger-${type}`);if(type!==this.trigger.platform){const value={platform:type,...elClass.defaultConfig};if(this.trigger.id){value.id=this.trigger.id;}fireEvent(this,"value-changed",{value});}}},{kind:"method",key:"_idChanged",value:function _idChanged(ev){var _this$trigger$id;const newId=ev.target.value;if(newId===((_this$trigger$id=this.trigger.id)!==null&&_this$trigger$id!==void 0?_this$trigger$id:"")){return;}this._requestShowId=true;const value={...this.trigger};if(!newId){delete value.id;}else {value.id=newId;}fireEvent(this,"value-changed",{value});}},{kind:"method",key:"_onYamlChange",value:function _onYamlChange(ev){ev.stopPropagation();if(!ev.detail.isValid){return;}this._warnings=undefined;fireEvent(this,"value-changed",{value:ev.detail.value});}},{kind:"method",key:"_switchYamlMode",value:function _switchYamlMode(){this._warnings=undefined;this._yamlMode=!this._yamlMode;}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r`
        .card-menu {
          float: right;
          z-index: 3;
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
        }
        .triggered {
          position: absolute;
          top: 0px;
          right: 0px;
          left: 0px;
          text-transform: uppercase;
          pointer-events: none;
          font-weight: bold;
          font-size: 14px;
          background-color: var(--primary-color);
          color: var(--text-primary-color);
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.3s;
          text-align: center;
          border-top-right-radius: var(--ha-card-border-radius, 4px);
          border-top-left-radius: var(--ha-card-border-radius, 4px);
        }
        .triggered.active {
          max-height: 100px;
        }
        .triggered.accent {
          background-color: var(--accent-color);
          color: var(--text-accent-color, var(--text-primary-color));
        }
        .rtl .card-menu {
          float: left;
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
        ha-select {
          margin-bottom: 24px;
        }
        ha-textfield {
          display: block;
          margin-bottom: 24px;
        }
      `];}}]};},s);

_decorate([n("ha-automation-trigger")],function(_initialize,_LitElement){class HaAutomationTrigger extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAutomationTrigger,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"triggers",value:void 0},{kind:"method",key:"render",value:function render(){return $`
      ${this.triggers.map((trg,idx)=>$`
          <ha-automation-trigger-row
            .index=${idx}
            .trigger=${trg}
            @duplicate=${this._duplicateTrigger}
            @value-changed=${this._triggerChanged}
            .hass=${this.hass}
          ></ha-automation-trigger-row>
        `)}
      <ha-card>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addTrigger}>
            ${this.hass.localize("ui.panel.config.automation.editor.triggers.add")}
          </mwc-button>
        </div>
      </ha-card>
    `;}},{kind:"method",key:"_addTrigger",value:function _addTrigger(){const triggers=this.triggers.concat({platform:"device",...HaDeviceTrigger.defaultConfig});fireEvent(this,"value-changed",{value:triggers});}},{kind:"method",key:"_triggerChanged",value:function _triggerChanged(ev){ev.stopPropagation();const triggers=[...this.triggers];const newValue=ev.detail.value;const index=ev.target.index;if(newValue===null){triggers.splice(index,1);}else {triggers[index]=newValue;}fireEvent(this,"value-changed",{value:triggers});}},{kind:"method",key:"_duplicateTrigger",value:function _duplicateTrigger(ev){ev.stopPropagation();const index=ev.target.index;fireEvent(this,"value-changed",{value:this.triggers.concat(this.triggers[index])});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-automation-trigger-row,
      ha-card {
        display: block;
        margin-top: 16px;
      }
      .add-card mwc-button {
        display: block;
        text-align: center;
      }
    `;}}]};},s);

_decorate([n("ha-automation-action-wait_for_trigger")],function(_initialize,_LitElement){class HaWaitForTriggerAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaWaitForTriggerAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"action",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {wait_for_trigger:[]};}},{kind:"method",key:"render",value:function render(){const{wait_for_trigger,continue_on_timeout,timeout}=this.action;return $`
      <ha-textfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.wait_for_trigger.timeout")}
        .name=${"timeout"}
        .value=${timeout||""}
        @change=${this._valueChanged}
      ></ha-textfield>
      <ha-formfield
        .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type.wait_for_trigger.continue_timeout")}
      >
        <ha-switch
          .checked=${continue_on_timeout!==null&&continue_on_timeout!==void 0?continue_on_timeout:true}
          @change=${this._continueChanged}
        ></ha-switch>
      </ha-formfield>
      <ha-automation-trigger
        .triggers=${wait_for_trigger}
        .hass=${this.hass}
        .name=${"wait_for_trigger"}
        @value-changed=${this._valueChanged}
      ></ha-automation-trigger>
    `;}},{kind:"method",key:"_continueChanged",value:function _continueChanged(ev){fireEvent(this,"value-changed",{value:{...this.action,continue_on_timeout:ev.target.checked}});}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){handleChangeEvent(this,ev);}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-textfield {
        display: block;
        margin-bottom: 24px;
      }
    `;}}]};},s);

const SCHEMA=[{name:"wait_template",selector:{text:{multiline:true}}},{name:"timeout",required:false,selector:{text:{}}},{name:"continue_on_timeout",selector:{boolean:{}}}];_decorate([n("ha-automation-action-wait_template")],function(_initialize,_LitElement){class HaWaitAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaWaitAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"action",value:void 0},{kind:"get",static:true,key:"defaultConfig",value:function defaultConfig(){return {wait_template:""};}},{kind:"method",key:"render",value:function render(){return $`
      <ha-form
        .hass=${this.hass}
        .data=${this.action}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabelCallback}
      ></ha-form>
    `;}},{kind:"field",key:"_computeLabelCallback",value(){return schema=>this.hass.localize(`ui.panel.config.automation.editor.actions.type.wait_template.${schema.name==="continue_on_timeout"?"continue_timeout":schema.name}`);}}]};},s);

const OPTIONS=["condition","delay","event","play_media","activate_scene","service","wait_template","wait_for_trigger","repeat","choose","device_id"];const getType=action=>{if(!action){return undefined;}if("service"in action||"scene"in action){return getActionType(action);}return OPTIONS.find(option=>option in action);};const handleChangeEvent=(element,ev)=>{var _ev$target,_ev$detail;ev.stopPropagation();const name=(_ev$target=ev.target)===null||_ev$target===void 0?void 0:_ev$target.name;if(!name){return;}const newVal=((_ev$detail=ev.detail)===null||_ev$detail===void 0?void 0:_ev$detail.value)||ev.target.value;if((element.action[name]||"")===newVal){return;}let newAction;if(!newVal){newAction={...element.action};delete newAction[name];}else {newAction={...element.action,[name]:newVal};}fireEvent(element,"value-changed",{value:newAction});};_decorate([n("ha-automation-action-row")],function(_initialize,_LitElement){class HaAutomationActionRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAutomationActionRow,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"action",value:void 0},{kind:"field",decorators:[e()],key:"index",value:void 0},{kind:"field",decorators:[e()],key:"totalActions",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"narrow",value(){return false;}},{kind:"field",decorators:[t()],key:"_warnings",value:void 0},{kind:"field",decorators:[t()],key:"_uiModeAvailable",value(){return true;}},{kind:"field",decorators:[t()],key:"_yamlMode",value(){return false;}},{kind:"field",decorators:[i("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"field",key:"_processedTypes",value(){return memoizeOne(localize=>OPTIONS.map(action=>[action,localize(`ui.panel.config.automation.editor.actions.type.${action}.label`)]).sort((a,b)=>stringCompare(a[1],b[1])));}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProperties){if(!changedProperties.has("action")){return;}this._uiModeAvailable=getType(this.action)!==undefined;if(!this._uiModeAvailable&&!this._yamlMode){this._yamlMode=true;}}},{kind:"method",key:"updated",value:function updated(changedProperties){if(!changedProperties.has("action")){return;}if(this._yamlMode){const yamlEditor=this._yamlEditor;if(yamlEditor&&yamlEditor.value!==this.action){yamlEditor.setValue(this.action);}}}},{kind:"method",key:"render",value:function render(){const type=getType(this.action);const yamlMode=this._yamlMode;return $`
      <ha-card>
        <div class="card-content">
          <div class="card-menu">
            ${this.index!==0?$`
                  <ha-icon-button
                    .label=${this.hass.localize("ui.panel.config.automation.editor.move_up")}
                    .path=${mdiArrowUp}
                    @click=${this._moveUp}
                  ></ha-icon-button>
                `:""}
            ${this.index!==this.totalActions-1?$`
                  <ha-icon-button
                    .label=${this.hass.localize("ui.panel.config.automation.editor.move_down")}
                    .path=${mdiArrowDown}
                    @click=${this._moveDown}
                  ></ha-icon-button>
                `:""}
            <ha-button-menu corner="BOTTOM_START" @action=${this._handleAction}>
              <ha-icon-button
                slot="trigger"
                .label=${this.hass.localize("ui.common.menu")}
                .path=${mdiDotsVertical}
              ></ha-icon-button>
              <mwc-list-item>
                ${this.hass.localize("ui.panel.config.automation.editor.actions.run_action")}
              </mwc-list-item>
              <mwc-list-item .disabled=${!this._uiModeAvailable}>
                ${yamlMode?this.hass.localize("ui.panel.config.automation.editor.edit_ui"):this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
              </mwc-list-item>
              <mwc-list-item>
                ${this.hass.localize("ui.panel.config.automation.editor.actions.duplicate")}
              </mwc-list-item>
              <mwc-list-item class="warning">
                ${this.hass.localize("ui.panel.config.automation.editor.actions.delete")}
              </mwc-list-item>
            </ha-button-menu>
          </div>
          ${this._warnings?$`<ha-alert
                alert-type="warning"
                .title=${this.hass.localize("ui.errors.config.editor_not_supported")}
              >
                ${this._warnings.length>0&&this._warnings[0]!==undefined?$` <ul>
                      ${this._warnings.map(warning=>$`<li>${warning}</li>`)}
                    </ul>`:""}
                ${this.hass.localize("ui.errors.config.edit_in_yaml_supported")}
              </ha-alert>`:""}
          ${yamlMode?$`
                ${type===undefined?$`
                      ${this.hass.localize("ui.panel.config.automation.editor.actions.unsupported_action","action",type)}
                    `:""}
                <h2>
                  ${this.hass.localize("ui.panel.config.automation.editor.edit_yaml")}
                </h2>
                <ha-yaml-editor
                  .hass=${this.hass}
                  .defaultValue=${this.action}
                  @value-changed=${this._onYamlChange}
                ></ha-yaml-editor>
              `:$`
                <ha-select
                  .label=${this.hass.localize("ui.panel.config.automation.editor.actions.type_select")}
                  .value=${getType(this.action)}
                  naturalMenuWidth
                  @selected=${this._typeChanged}
                >
                  ${this._processedTypes(this.hass.localize).map(([opt,label])=>$`
                      <mwc-list-item .value=${opt}>${label}</mwc-list-item>
                    `)}
                </ha-select>

                <div @ui-mode-not-available=${this._handleUiModeNotAvailable}>
                  ${dynamicElement(`ha-automation-action-${type}`,{hass:this.hass,action:this.action,narrow:this.narrow})}
                </div>
              `}
        </div>
      </ha-card>
    `;}},{kind:"method",key:"_handleUiModeNotAvailable",value:function _handleUiModeNotAvailable(ev){// Prevent possible parent action-row from switching to yamlMode
ev.stopPropagation();this._warnings=handleStructError(this.hass,ev.detail).warnings;if(!this._yamlMode){this._yamlMode=true;}}},{kind:"method",key:"_moveUp",value:function _moveUp(){fireEvent(this,"move-action",{direction:"up"});}},{kind:"method",key:"_moveDown",value:function _moveDown(){fireEvent(this,"move-action",{direction:"down"});}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){switch(ev.detail.index){case 0:this._runAction();break;case 1:this._switchYamlMode();break;case 2:fireEvent(this,"duplicate");break;case 3:this._onDelete();break;}}},{kind:"method",key:"_runAction",value:async function _runAction(){const validated=await validateConfig(this.hass,{action:this.action});if(!validated.action.valid){showAlertDialog(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.invalid_action"),text:validated.action.error});return;}try{await callExecuteScript(this.hass,this.action);}catch(err){showAlertDialog(this,{title:this.hass.localize("ui.panel.config.automation.editor.actions.run_action_error"),text:err.message||err});return;}showToast(this,{message:this.hass.localize("ui.panel.config.automation.editor.actions.run_action_success")});}},{kind:"method",key:"_onDelete",value:function _onDelete(){showConfirmationDialog(this,{text:this.hass.localize("ui.panel.config.automation.editor.actions.delete_confirm"),dismissText:this.hass.localize("ui.common.cancel"),confirmText:this.hass.localize("ui.common.delete"),confirm:()=>{fireEvent(this,"value-changed",{value:null});}});}},{kind:"method",key:"_typeChanged",value:function _typeChanged(ev){const type=ev.target.value;if(!type){return;}this._uiModeAvailable=OPTIONS.includes(type);if(!this._uiModeAvailable&&!this._yamlMode){this._yamlMode=false;}if(type!==getType(this.action)){const elClass=customElements.get(`ha-automation-action-${type}`);fireEvent(this,"value-changed",{value:{...elClass.defaultConfig}});}}},{kind:"method",key:"_onYamlChange",value:function _onYamlChange(ev){ev.stopPropagation();if(!ev.detail.isValid){return;}fireEvent(this,"value-changed",{value:ev.detail.value});}},{kind:"method",key:"_switchYamlMode",value:function _switchYamlMode(){this._warnings=undefined;this._yamlMode=!this._yamlMode;}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r`
        .card-menu {
          position: absolute;
          right: 16px;
          z-index: 3;
          --mdc-theme-text-primary-on-background: var(--primary-text-color);
        }
        .rtl .card-menu {
          right: initial;
          left: 16px;
        }
        mwc-list-item[disabled] {
          --mdc-theme-text-primary-on-background: var(--disabled-text-color);
        }
        .warning {
          margin-bottom: 8px;
        }
        .warning ul {
          margin: 4px 0;
        }
        ha-select {
          margin-bottom: 24px;
        }
      `];}}]};},s);

_decorate([n("ha-automation-action")],function(_initialize,_LitElement){class HaAutomationAction extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAutomationAction,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"narrow",value(){return false;}},{kind:"field",decorators:[e()],key:"actions",value:void 0},{kind:"method",key:"render",value:function render(){return $`
      ${this.actions.map((action,idx)=>$`
          <ha-automation-action-row
            .index=${idx}
            .totalActions=${this.actions.length}
            .action=${action}
            .narrow=${this.narrow}
            @duplicate=${this._duplicateAction}
            @move-action=${this._move}
            @value-changed=${this._actionChanged}
            .hass=${this.hass}
          ></ha-automation-action-row>
        `)}
      <ha-card>
        <div class="card-actions add-card">
          <mwc-button @click=${this._addAction}>
            ${this.hass.localize("ui.panel.config.automation.editor.actions.add")}
          </mwc-button>
        </div>
      </ha-card>
    `;}},{kind:"method",key:"_addAction",value:function _addAction(){const actions=this.actions.concat({...HaDeviceAction.defaultConfig});fireEvent(this,"value-changed",{value:actions});}},{kind:"method",key:"_move",value:function _move(ev){// Prevent possible parent action-row from also moving
ev.stopPropagation();const index=ev.target.index;const newIndex=ev.detail.direction==="up"?index-1:index+1;const actions=this.actions.concat();const action=actions.splice(index,1)[0];actions.splice(newIndex,0,action);fireEvent(this,"value-changed",{value:actions});}},{kind:"method",key:"_actionChanged",value:function _actionChanged(ev){ev.stopPropagation();const actions=[...this.actions];const newValue=ev.detail.value;const index=ev.target.index;if(newValue===null){actions.splice(index,1);}else {actions[index]=newValue;}fireEvent(this,"value-changed",{value:actions});}},{kind:"method",key:"_duplicateAction",value:function _duplicateAction(ev){ev.stopPropagation();const index=ev.target.index;fireEvent(this,"value-changed",{value:this.actions.concat(this.actions[index])});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-automation-action-row,
      ha-card {
        display: block;
        margin-top: 16px;
      }
      .add-card mwc-button {
        display: block;
        text-align: center;
      }
    `;}}]};},s);

_decorate([n("ha-selector-action")],function(_initialize,_LitElement){class HaActionSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaActionSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean,reflect:true})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`<ha-automation-action
      .disabled=${this.disabled}
      .actions=${this.value||[]}
      .hass=${this.hass}
    ></ha-automation-action>`;}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-automation-action {
        display: block;
        margin-bottom: 16px;
      }
      :host([disabled]) ha-automation-action {
        opacity: var(--light-disabled-opacity);
        pointer-events: none;
      }
    `;}}]};},s);

const atLeastVersion=(version,major,minor,patch)=>{if(__DEMO__){return true;}const[haMajor,haMinor,haPatch]=version.split(".",3);return Number(haMajor)>major||Number(haMajor)===major&&(patch===undefined?Number(haMinor)>=minor:Number(haMinor)>minor)||patch!==undefined&&Number(haMajor)===major&&Number(haMinor)===minor&&Number(haPatch)>=patch;};

const hassioApiResultExtractor=response=>response.data;

const fetchHassioSupervisorInfo=async hass=>{if(atLeastVersion(hass.config.version,2021,2,4)){return hass.callWS({type:"supervisor/api",endpoint:"/supervisor/info",method:"get"});}return hassioApiResultExtractor(await hass.callApi("GET","hassio/supervisor/info"));};

const rowRenderer=item=>$`<mwc-list-item twoline>
  <span>${item.name}</span>
  <span slot="secondary">${item.slug}</span>
</mwc-list-item>`;_decorate([n("ha-addon-picker")],function(_initialize,_LitElement){class HaAddonPicker extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAddonPicker,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"value",value(){return "";}},{kind:"field",decorators:[t()],key:"_addons",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"field",decorators:[i("ha-combo-box")],key:"_comboBox",value:void 0},{kind:"method",key:"open",value:function open(){var _this$_comboBox;(_this$_comboBox=this._comboBox)===null||_this$_comboBox===void 0?void 0:_this$_comboBox.open();}},{kind:"method",key:"focus",value:function focus(){var _this$_comboBox2;(_this$_comboBox2=this._comboBox)===null||_this$_comboBox2===void 0?void 0:_this$_comboBox2.focus();}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this._getAddons();}},{kind:"method",key:"render",value:function render(){if(!this._addons){return $``;}return $`
      <ha-combo-box
        .hass=${this.hass}
        .label=${this.label===undefined&&this.hass?this.hass.localize("ui.components.addon-picker.addon"):this.label}
        .value=${this._value}
        .renderer=${rowRenderer}
        .items=${this._addons}
        item-value-path="slug"
        item-id-path="slug"
        item-label-path="name"
        @value-changed=${this._addonChanged}
      ></ha-combo-box>
    `;}},{kind:"method",key:"_getAddons",value:async function _getAddons(){try{if(isComponentLoaded(this.hass,"hassio")){const supervisorInfo=await fetchHassioSupervisorInfo(this.hass);this._addons=supervisorInfo.addons.sort((a,b)=>stringCompare(a.name,b.name));}else {showAlertDialog(this,{title:this.hass.localize("ui.componencts.addon-picker.error.no_supervisor.title"),text:this.hass.localize("ui.componencts.addon-picker.error.no_supervisor.description")});}}catch(err){showAlertDialog(this,{title:this.hass.localize("ui.componencts.addon-picker.error.fetch_addons.title"),text:this.hass.localize("ui.componencts.addon-picker.error.fetch_addons.description")});}}},{kind:"get",key:"_value",value:function _value(){return this.value||"";}},{kind:"method",key:"_addonChanged",value:function _addonChanged(ev){ev.stopPropagation();const newValue=ev.detail.value;if(newValue!==this._value){this._setValue(newValue);}}},{kind:"method",key:"_setValue",value:function _setValue(value){this.value=value;setTimeout(()=>{fireEvent(this,"value-changed",{value});fireEvent(this,"change");},0);}}]};},s);

_decorate([n("ha-selector-addon")],function(_initialize,_LitElement){class HaAddonSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAddonSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"method",key:"render",value:function render(){return $`<ha-addon-picker
      .hass=${this.hass}
      .value=${this.value}
      .label=${this.label}
      allow-custom-entity
    ></ha-addon-picker>`;}},{kind:"field",static:true,key:"styles",value(){return r`
    ha-addon-picker {
      width: 100%;
    }
  `;}}]};},s);

_decorate([n("ha-selector-area")],function(_initialize,_LitElement){class HaAreaSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAreaSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"_configEntries",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"updated",value:function updated(changedProperties){if(changedProperties.has("selector")){var _this$selector$area$d;const oldSelector=changedProperties.get("selector");if(oldSelector!==this.selector&&(_this$selector$area$d=this.selector.area.device)!==null&&_this$selector$area$d!==void 0&&_this$selector$area$d.integration){this._loadConfigEntries();}}}},{kind:"method",key:"render",value:function render(){var _this$selector$area$e,_this$selector$area$e2;return $`<ha-area-picker
      .hass=${this.hass}
      .value=${this.value}
      .label=${this.label}
      no-add
      .deviceFilter=${this._filterDevices}
      .entityFilter=${this._filterEntities}
      .includeDeviceClasses=${(_this$selector$area$e=this.selector.area.entity)!==null&&_this$selector$area$e!==void 0&&_this$selector$area$e.device_class?[this.selector.area.entity.device_class]:undefined}
      .includeDomains=${(_this$selector$area$e2=this.selector.area.entity)!==null&&_this$selector$area$e2!==void 0&&_this$selector$area$e2.domain?[this.selector.area.entity.domain]:undefined}
      .disabled=${this.disabled}
    ></ha-area-picker>`;}},{kind:"field",key:"_filterEntities",value(){return entity=>{var _this$selector$area$e3;if((_this$selector$area$e3=this.selector.area.entity)!==null&&_this$selector$area$e3!==void 0&&_this$selector$area$e3.integration){if(entity.platform!==this.selector.area.entity.integration){return false;}}return true;};}},{kind:"field",key:"_filterDevices",value(){return device=>{var _this$selector$area$d2,_this$selector$area$d3,_this$selector$area$d4;if((_this$selector$area$d2=this.selector.area.device)!==null&&_this$selector$area$d2!==void 0&&_this$selector$area$d2.manufacturer&&device.manufacturer!==this.selector.area.device.manufacturer){return false;}if((_this$selector$area$d3=this.selector.area.device)!==null&&_this$selector$area$d3!==void 0&&_this$selector$area$d3.model&&device.model!==this.selector.area.device.model){return false;}if((_this$selector$area$d4=this.selector.area.device)!==null&&_this$selector$area$d4!==void 0&&_this$selector$area$d4.integration){if(this._configEntries&&!this._configEntries.some(entry=>device.config_entries.includes(entry.entry_id))){return false;}}return true;};}},{kind:"method",key:"_loadConfigEntries",value:async function _loadConfigEntries(){this._configEntries=(await getConfigEntries(this.hass)).filter(entry=>{var _this$selector$area$d5;return entry.domain===((_this$selector$area$d5=this.selector.area.device)===null||_this$selector$area$d5===void 0?void 0:_this$selector$area$d5.integration);});}}]};},s);

_decorate([n("ha-entity-attribute-picker")],function(_initialize,_LitElement){class HaEntityAttributePicker extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaEntityAttributePicker,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"entityId",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"autofocus",value(){return false;}},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"field",decorators:[e({type:Boolean,attribute:"allow-custom-value"})],key:"allowCustomValue",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"_opened",value(){return false;}},{kind:"field",decorators:[i("ha-combo-box",true)],key:"_comboBox",value:void 0},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return !(!changedProps.has("_opened")&&this._opened);}},{kind:"method",key:"updated",value:function updated(changedProps){if(changedProps.has("_opened")&&this._opened){const state=this.entityId?this.hass.states[this.entityId]:undefined;this._comboBox.items=state?Object.keys(state.attributes).map(key=>({value:key,label:formatAttributeName(key)})):[];}}},{kind:"method",key:"render",value:function render(){var _this$label;if(!this.hass){return $``;}return $`
      <ha-combo-box
        .hass=${this.hass}
        .value=${this.value||""}
        .autofocus=${this.autofocus}
        .label=${(_this$label=this.label)!==null&&_this$label!==void 0?_this$label:this.hass.localize("ui.components.entity.entity-attribute-picker.attribute")}
        .disabled=${this.disabled||!this.entityId}
        .allowCustomValue=${this.allowCustomValue}
        item-value-path="value"
        item-label-path="label"
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
      </ha-combo-box>
    `;}},{kind:"method",key:"_openedChanged",value:function _openedChanged(ev){this._opened=ev.detail.value;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){this.value=ev.detail.value;}}]};},s);

_decorate([n("ha-selector-attribute")],function(_initialize,_SubscribeMixin){class HaSelectorAttribute extends _SubscribeMixin{constructor(...args){super(...args);_initialize(this);}}return {F:HaSelectorAttribute,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`
      <ha-entity-attribute-picker
        .hass=${this.hass}
        .entityId=${this.selector.attribute.entity_id}
        .value=${this.value}
        .label=${this.label}
        .disabled=${this.disabled}
        allow-custom-value
      ></ha-entity-attribute-picker>
    `;}}]};},SubscribeMixin(s));

_decorate([n("ha-selector-boolean")],function(_initialize,_LitElement){class HaBooleanSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaBooleanSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`<ha-formfield alignEnd spaceBetween .label=${this.label}>
      <ha-switch
        .checked=${this.value}
        @change=${this._handleChange}
        .disabled=${this.disabled}
      ></ha-switch>
    </ha-formfield>`;}},{kind:"method",key:"_handleChange",value:function _handleChange(ev){const value=ev.target.checked;if(this.value===value){return;}fireEvent(this,"value-changed",{value});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        height: 56px;
        display: flex;
      }
      ha-formfield {
        width: 100%;
        --mdc-typography-body2-font-size: 1em;
      }
    `;}}]};},s);

_decorate([n("ha-selector-device")],function(_initialize,_LitElement){class HaDeviceSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaDeviceSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"_configEntries",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"updated",value:function updated(changedProperties){if(changedProperties.has("selector")){var _this$selector$device;const oldSelector=changedProperties.get("selector");if(oldSelector!==this.selector&&(_this$selector$device=this.selector.device)!==null&&_this$selector$device!==void 0&&_this$selector$device.integration){this._loadConfigEntries();}}}},{kind:"method",key:"render",value:function render(){var _this$selector$device2,_this$selector$device3;return $`<ha-device-picker
      .hass=${this.hass}
      .value=${this.value}
      .label=${this.label}
      .deviceFilter=${this._filterDevices}
      .includeDeviceClasses=${(_this$selector$device2=this.selector.device.entity)!==null&&_this$selector$device2!==void 0&&_this$selector$device2.device_class?[this.selector.device.entity.device_class]:undefined}
      .includeDomains=${(_this$selector$device3=this.selector.device.entity)!==null&&_this$selector$device3!==void 0&&_this$selector$device3.domain?[this.selector.device.entity.domain]:undefined}
      .disabled=${this.disabled}
      allow-custom-entity
    ></ha-device-picker>`;}},{kind:"field",key:"_filterDevices",value(){return device=>{var _this$selector$device4,_this$selector$device5,_this$selector$device6;if((_this$selector$device4=this.selector.device)!==null&&_this$selector$device4!==void 0&&_this$selector$device4.manufacturer&&device.manufacturer!==this.selector.device.manufacturer){return false;}if((_this$selector$device5=this.selector.device)!==null&&_this$selector$device5!==void 0&&_this$selector$device5.model&&device.model!==this.selector.device.model){return false;}if((_this$selector$device6=this.selector.device)!==null&&_this$selector$device6!==void 0&&_this$selector$device6.integration){if(this._configEntries&&!this._configEntries.some(entry=>device.config_entries.includes(entry.entry_id))){return false;}}return true;};}},{kind:"method",key:"_loadConfigEntries",value:async function _loadConfigEntries(){this._configEntries=(await getConfigEntries(this.hass)).filter(entry=>entry.domain===this.selector.device.integration);}}]};},s);

_decorate([n("ha-selector-duration")],function(_initialize,_LitElement){class HaTimeDuration extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTimeDuration,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"field",decorators:[e({type:Boolean})],key:"required",value(){return true;}},{kind:"method",key:"render",value:function render(){return $`
      <ha-duration-input
        .label=${this.label}
        .data=${this.value}
        .disabled=${this.disabled}
        .required=${this.required}
      ></ha-duration-input>
    `;}}]};},s);

_decorate([n("ha-selector-entity")],function(_initialize,_SubscribeMixin){class HaEntitySelector extends _SubscribeMixin{constructor(...args){super(...args);_initialize(this);}}return {F:HaEntitySelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[t()],key:"_entityPlaformLookup",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`<ha-entity-picker
      .hass=${this.hass}
      .value=${this.value}
      .label=${this.label}
      .entityFilter=${this._filterEntities}
      .disabled=${this.disabled}
      allow-custom-entity
    ></ha-entity-picker>`;}},{kind:"method",key:"hassSubscribe",value:function hassSubscribe(){return [subscribeEntityRegistry(this.hass.connection,entities=>{const entityLookup={};for(const confEnt of entities){if(!confEnt.platform){continue;}entityLookup[confEnt.entity_id]=confEnt.platform;}this._entityPlaformLookup=entityLookup;})];}},{kind:"field",key:"_filterEntities",value(){return entity=>{var _this$selector$entity,_this$selector$entity2,_this$selector$entity3;if((_this$selector$entity=this.selector.entity)!==null&&_this$selector$entity!==void 0&&_this$selector$entity.domain){const filterDomain=this.selector.entity.domain;const filterDomainIsArray=Array.isArray(filterDomain);const entityDomain=computeStateDomain(entity);if(filterDomainIsArray&&!filterDomain.includes(entityDomain)||!filterDomainIsArray&&entityDomain!==filterDomain){return false;}}if((_this$selector$entity2=this.selector.entity)!==null&&_this$selector$entity2!==void 0&&_this$selector$entity2.device_class){if(!entity.attributes.device_class||entity.attributes.device_class!==this.selector.entity.device_class){return false;}}if((_this$selector$entity3=this.selector.entity)!==null&&_this$selector$entity3!==void 0&&_this$selector$entity3.integration){if(!this._entityPlaformLookup||this._entityPlaformLookup[entity.entity_id]!==this.selector.entity.integration){return false;}}return true;};}}]};},SubscribeMixin(s));

_decorate([n("ha-selector-number")],function(_initialize,_LitElement){class HaNumberSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaNumberSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"placeholder",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"required",value(){return true;}},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"update",value:function update(changedProperties){_get(_getPrototypeOf(HaNumberSelector.prototype),"update",this).call(this,changedProperties);// console.log("talvez isto ajude changedProperties", changedProperties);
}},{kind:"method",key:"render",value:function render(){var _this$selector$number,_this$selector$number2;return $`${this.selector.number.mode!=="box"?$`${this.label}<ha-slider
              .min=${this.selector.number.min}
              .max=${this.selector.number.max}
              .value=${this._value}
              .step=${(_this$selector$number=this.selector.number.step)!==null&&_this$selector$number!==void 0?_this$selector$number:1}
              .disabled=${this.disabled}
              .required=${this.required}
              pin
              ignore-bar-touch
              @change=${this._handleSliderChange}
            >
            </ha-slider>`:""}
      <ha-textfield
        inputMode="numeric"
        pattern="[0-9]+([\\.][0-9]+)?"
        .label=${this.selector.number.mode!=="box"?undefined:this.label}
        .placeholder=${this.placeholder}
        class=${o({single:this.selector.number.mode==="box"})}
        .min=${this.selector.number.min}
        .max=${this.selector.number.max}
        .value=${this.value||""}
        .step=${(_this$selector$number2=this.selector.number.step)!==null&&_this$selector$number2!==void 0?_this$selector$number2:1}
        .disabled=${this.disabled}
        .required=${this.required}
        .suffix=${this.selector.number.unit_of_measurement}
        type="number"
        autoValidate
        ?no-spinner=${this.selector.number.mode!=="box"}
        @input=${this._handleInputChange}
      >
      </ha-textfield>`;}},{kind:"get",key:"_value",value:function _value(){var _this$value;return (_this$value=this.value)!==null&&_this$value!==void 0?_this$value:this.selector.number.min||0;}},{kind:"method",key:"_handleInputChange",value:function _handleInputChange(ev){ev.stopPropagation();const value=ev.target.value===""||isNaN(ev.target.value)?this.required?this.selector.number.min||0:undefined:Number(ev.target.value);if(this.value===value){return;}fireEvent(this,"value-changed",{value});}},{kind:"method",key:"_handleSliderChange",value:function _handleSliderChange(ev){ev.stopPropagation();const value=Number(ev.target.value);if(this.value===value){return;}fireEvent(this,"value-changed",{value});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      ha-slider {
        flex: 1;
      }
      ha-textfield {
        --ha-textfield-input-width: 40px;
      }
      .single {
        --ha-textfield-input-width: unset;
        flex: 1;
      }
    `;}}]};},s);

_decorate([n("ha-selector-object")],function(_initialize,_LitElement){class HaObjectSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaObjectSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"placeholder",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`<ha-yaml-editor
      .hass=${this.hass}
      .disabled=${this.disabled}
      .placeholder=${this.placeholder}
      .defaultValue=${this.value}
      @value-changed=${this._handleChange}
    ></ha-yaml-editor>`;}},{kind:"method",key:"_handleChange",value:function _handleChange(ev){const value=ev.target.value;if(!ev.target.isValid){return;}if(this.value===value){return;}fireEvent(this,"value-changed",{value});}}]};},s);

_decorate([n("ha-selector-select")],function(_initialize,_LitElement){class HaSelectSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaSelectSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"helper",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`<ha-select
      fixedMenuPosition
      naturalMenuWidth
      .label=${this.label}
      .value=${this.value}
      .helper=${this.helper}
      .disabled=${this.disabled}
      @closed=${stopPropagation}
      @selected=${this._valueChanged}
    >
      ${this.selector.select.options.map(item=>{const value=typeof item==="object"?item.value:item;const label=typeof item==="object"?item.label:item;return $`<mwc-list-item .value=${value}>${label}</mwc-list-item>`;})}
    </ha-select>`;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();if(this.disabled||!ev.target.value){return;}fireEvent(this,"value-changed",{value:ev.target.value});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-select {
        width: 100%;
      }
    `;}}]};},s);

_decorate([n("ha-target-picker")],function(_initialize,_SubscribeMixin){class HaTargetPicker extends _SubscribeMixin{constructor(...args){super(...args);_initialize(this);}}return {F:HaTargetPicker,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Array,attribute:"include-domains"})],key:"includeDomains",value:void 0},{kind:"field",decorators:[e({type:Array,attribute:"include-device-classes"})],key:"includeDeviceClasses",value:void 0},{kind:"field",decorators:[e()],key:"deviceFilter",value:void 0},{kind:"field",decorators:[e()],key:"entityRegFilter",value:void 0},{kind:"field",decorators:[e()],key:"entityFilter",value:void 0},{kind:"field",decorators:[e({type:Boolean,reflect:true})],key:"disabled",value(){return false;}},{kind:"field",decorators:[t()],key:"_areas",value:void 0},{kind:"field",decorators:[t()],key:"_devices",value:void 0},{kind:"field",decorators:[t()],key:"_entities",value:void 0},{kind:"field",decorators:[t()],key:"_addMode",value:void 0},{kind:"field",decorators:[i("#input")],key:"_inputElement",value:void 0},{kind:"method",key:"hassSubscribe",value:/**
   * Show only targets with entities from specific domains.
   * @type {Array}
   * @attr include-domains
   */ /**
   * Show only targets with entities of these device classes.
   * @type {Array}
   * @attr include-device-classes
   */function hassSubscribe(){return [subscribeAreaRegistry(this.hass.connection,areas=>{const areaLookup={};for(const area of areas){areaLookup[area.area_id]=area;}this._areas=areaLookup;}),subscribeDeviceRegistry(this.hass.connection,devices=>{const deviceLookup={};for(const device of devices){deviceLookup[device.id]=device;}this._devices=deviceLookup;}),subscribeEntityRegistry(this.hass.connection,entities=>{this._entities=entities;})];}},{kind:"method",key:"render",value:function render(){var _this$value,_this$value2,_this$value3;if(!this._areas||!this._devices||!this._entities){return $``;}return $`<div class="mdc-chip-set items">
        ${(_this$value=this.value)!==null&&_this$value!==void 0&&_this$value.area_id?ensureArray(this.value.area_id).map(area_id=>{const area=this._areas[area_id];return this._renderChip("area_id",area_id,(area===null||area===void 0?void 0:area.name)||area_id,undefined,mdiSofa);}):""}
        ${(_this$value2=this.value)!==null&&_this$value2!==void 0&&_this$value2.device_id?ensureArray(this.value.device_id).map(device_id=>{const device=this._devices[device_id];return this._renderChip("device_id",device_id,device?computeDeviceName(device,this.hass):device_id,undefined,mdiDevices);}):""}
        ${(_this$value3=this.value)!==null&&_this$value3!==void 0&&_this$value3.entity_id?ensureArray(this.value.entity_id).map(entity_id=>{const entity=this.hass.states[entity_id];return this._renderChip("entity_id",entity_id,entity?computeStateName(entity):entity_id,entity);}):""}
      </div>
      ${this._renderPicker()}
      <div class="mdc-chip-set">
        <!-- <div
          class="mdc-chip area_id add"
          .type=${"area_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${mdiPlus}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_area_id")}</span
              >
            </span>
          </span>
        </div> -->
        <div
          class="mdc-chip device_id add"
          .type=${"device_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${mdiPlus}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_device_id")}</span
              >
            </span>
          </span>
        </div>
        <div
          class="mdc-chip entity_id add"
          .type=${"entity_id"}
          @click=${this._showPicker}
        >
          <div class="mdc-chip__ripple"></div>
          <ha-svg-icon
            class="mdc-chip__icon mdc-chip__icon--leading"
            .path=${mdiPlus}
          ></ha-svg-icon>
          <span role="gridcell">
            <span role="button" tabindex="0" class="mdc-chip__primary-action">
              <span class="mdc-chip__text"
                >${this.hass.localize("ui.components.target-picker.add_entity_id")}</span
              >
            </span>
          </span>
        </div>
      </div>`;}},{kind:"method",key:"_showPicker",value:async function _showPicker(ev){this._addMode=ev.currentTarget.type;await this.updateComplete;setTimeout(()=>{var _this$_inputElement,_this$_inputElement2;(_this$_inputElement=this._inputElement)===null||_this$_inputElement===void 0?void 0:_this$_inputElement.open();(_this$_inputElement2=this._inputElement)===null||_this$_inputElement2===void 0?void 0:_this$_inputElement2.focus();},0);}},{kind:"method",key:"_renderChip",value:function _renderChip(type,id,name,entityState,iconPath){return $`
      <div
        class="mdc-chip ${o({[type]:true})}"
      >
        ${iconPath?$`<ha-svg-icon
              class="mdc-chip__icon mdc-chip__icon--leading"
              .path=${iconPath}
            ></ha-svg-icon>`:""}
        ${entityState?$`<ha-state-icon
              class="mdc-chip__icon mdc-chip__icon--leading"
              .state=${entityState}
            ></ha-state-icon>`:""}
        <span role="gridcell">
          <span role="button" tabindex="0" class="mdc-chip__primary-action">
            <span class="mdc-chip__text">${name}</span>
          </span>
        </span>
        ${type==="entity_id"?"":$` <span role="gridcell">
              <ha-icon-button
                class="expand-btn mdc-chip__icon mdc-chip__icon--trailing"
                tabindex="-1"
                role="button"
                .label=${this.hass.localize("ui.components.target-picker.expand")}
                .path=${mdiUnfoldMoreVertical}
                hideTooltip
                .id=${id}
                .type=${type}
                @click=${this._handleExpand}
              ></ha-icon-button>
              <paper-tooltip class="expand" animation-delay="0"
                >${this.hass.localize(`ui.components.target-picker.expand_${type}`)}</paper-tooltip
              >
            </span>`}
        <span role="gridcell">
          <ha-icon-button
            class="mdc-chip__icon mdc-chip__icon--trailing"
            tabindex="-1"
            role="button"
            .label=${this.hass.localize("ui.components.target-picker.expand")}
            .path=${mdiClose}
            hideTooltip
            .id=${id}
            .type=${type}
            @click=${this._handleRemove}
          ></ha-icon-button>
          <paper-tooltip animation-delay="0"
            >${this.hass.localize(`ui.components.target-picker.remove_${type}`)}</paper-tooltip
          >
        </span>
      </div>
    `;}},{kind:"method",key:"_renderPicker",value:function _renderPicker(){switch(this._addMode){case"area_id":return $`<ha-area-picker
          .hass=${this.hass}
          id="input"
          .type=${"area_id"}
          .label=${this.hass.localize("ui.components.target-picker.add_area_id")}
          no-add
          .deviceFilter=${this.deviceFilter}
          .entityFilter=${this.entityRegFilter}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeDomains=${this.includeDomains}
          @value-changed=${this._targetPicked}
        ></ha-area-picker>`;case"device_id":return $`<ha-device-picker
          .hass=${this.hass}
          id="input"
          .type=${"device_id"}
          .label=${this.hass.localize("ui.components.target-picker.add_device_id")}
          .deviceFilter=${this.deviceFilter}
          .entityFilter=${this.entityRegFilter}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeDomains=${this.includeDomains}
          @value-changed=${this._targetPicked}
        ></ha-device-picker>`;case"entity_id":return $`<ha-entity-picker
          .hass=${this.hass}
          id="input"
          .type=${"entity_id"}
          .label=${this.hass.localize("ui.components.target-picker.add_entity_id")}
          .entityFilter=${this.entityFilter}
          .includeDeviceClasses=${this.includeDeviceClasses}
          .includeDomains=${this.includeDomains}
          @value-changed=${this._targetPicked}
          allow-custom-entity
        ></ha-entity-picker>`;}return $``;}},{kind:"method",key:"_targetPicked",value:function _targetPicked(ev){ev.stopPropagation();if(!ev.detail.value){return;}const value=ev.detail.value;const target=ev.currentTarget;target.value="";this._addMode=undefined;fireEvent(this,"value-changed",{value:this.value?{...this.value,[target.type]:this.value[target.type]?[...ensureArray(this.value[target.type]),value]:value}:{[target.type]:value}});}},{kind:"method",key:"_handleExpand",value:function _handleExpand(ev){const target=ev.currentTarget;const newDevices=[];const newEntities=[];if(target.type==="area_id"){Object.values(this._devices).forEach(device=>{var _device_id;if(device.area_id===target.id&&!((_device_id=this.value.device_id)!==null&&_device_id!==void 0&&_device_id.includes(device.id))&&this._deviceMeetsFilter(device)){newDevices.push(device.id);}});this._entities.forEach(entity=>{var _entity_id;if(entity.area_id===target.id&&!((_entity_id=this.value.entity_id)!==null&&_entity_id!==void 0&&_entity_id.includes(entity.entity_id))&&this._entityRegMeetsFilter(entity)){newEntities.push(entity.entity_id);}});}else if(target.type==="device_id"){this._entities.forEach(entity=>{var _entity_id2;if(entity.device_id===target.id&&!((_entity_id2=this.value.entity_id)!==null&&_entity_id2!==void 0&&_entity_id2.includes(entity.entity_id))&&this._entityRegMeetsFilter(entity)){newEntities.push(entity.entity_id);}});}else {return;}let value=this.value;if(newEntities.length){value=this._addItems(value,"entity_id",newEntities);}if(newDevices.length){value=this._addItems(value,"device_id",newDevices);}value=this._removeItem(value,target.type,target.id);fireEvent(this,"value-changed",{value});}},{kind:"method",key:"_handleRemove",value:function _handleRemove(ev){const target=ev.currentTarget;fireEvent(this,"value-changed",{value:this._removeItem(this.value,target.type,target.id)});}},{kind:"method",key:"_addItems",value:function _addItems(value,type,ids){return {...value,[type]:value[type]?ensureArray(value[type]).concat(ids):ids};}},{kind:"method",key:"_removeItem",value:function _removeItem(value,type,id){const newVal=ensureArray(value[type]).filter(val=>String(val)!==id);if(newVal.length){return {...value,[type]:newVal};}const val={...value};delete val[type];if(Object.keys(val).length){return val;}return undefined;}},{kind:"method",key:"_deviceMeetsFilter",value:function _deviceMeetsFilter(device){var _this$_entities;const devEntities=(_this$_entities=this._entities)===null||_this$_entities===void 0?void 0:_this$_entities.filter(entity=>entity.device_id===device.id);if(this.includeDomains){if(!devEntities||!devEntities.length){return false;}if(!devEntities.some(entity=>this.includeDomains.includes(computeDomain(entity.entity_id)))){return false;}}if(this.includeDeviceClasses){if(!devEntities||!devEntities.length){return false;}if(!devEntities.some(entity=>{const stateObj=this.hass.states[entity.entity_id];if(!stateObj){return false;}return stateObj.attributes.device_class&&this.includeDeviceClasses.includes(stateObj.attributes.device_class);})){return false;}}if(this.deviceFilter){return this.deviceFilter(device);}return true;}},{kind:"method",key:"_entityRegMeetsFilter",value:function _entityRegMeetsFilter(entity){if(entity.entity_category){return false;}if(this.includeDomains&&!this.includeDomains.includes(computeDomain(entity.entity_id))){return false;}if(this.includeDeviceClasses){const stateObj=this.hass.states[entity.entity_id];if(!stateObj){return false;}if(!stateObj.attributes.device_class||!this.includeDeviceClasses.includes(stateObj.attributes.device_class)){return false;}}if(this.entityRegFilter){return this.entityRegFilter(entity);}return true;}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ${o$1(chipStyles)}
      .mdc-chip {
        color: var(--primary-text-color);
      }
      .items {
        z-index: 2;
      }
      .mdc-chip.add {
        color: rgba(0, 0, 0, 0.87);
      }
      .mdc-chip:not(.add) {
        cursor: default;
      }
      .mdc-chip ha-icon-button {
        --mdc-icon-button-size: 24px;
        display: flex;
        align-items: center;
        outline: none;
      }
      .mdc-chip ha-icon-button ha-svg-icon {
        border-radius: 50%;
        background: var(--secondary-text-color);
      }
      .mdc-chip__icon.mdc-chip__icon--trailing {
        width: 16px;
        height: 16px;
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color);
      }
      .mdc-chip__icon--leading {
        display: flex;
        align-items: center;
        justify-content: center;
        --mdc-icon-size: 20px;
        border-radius: 50%;
        padding: 6px;
        margin-left: -14px !important;
      }
      .expand-btn {
        margin-right: 0;
      }
      .mdc-chip.area_id:not(.add) {
        border: 2px solid #fed6a4;
        background: var(--card-background-color);
      }
      .mdc-chip.area_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.area_id.add {
        background: #fed6a4;
      }
      .mdc-chip.device_id:not(.add) {
        border: 2px solid #a8e1fb;
        background: var(--card-background-color);
      }
      .mdc-chip.device_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.device_id.add {
        background: #a8e1fb;
      }
      .mdc-chip.entity_id:not(.add) {
        border: 2px solid #d2e7b9;
        background: var(--card-background-color);
      }
      .mdc-chip.entity_id:not(.add) .mdc-chip__icon--leading,
      .mdc-chip.entity_id.add {
        background: #d2e7b9;
      }
      .mdc-chip:hover {
        z-index: 5;
      }
      paper-tooltip.expand {
        min-width: 200px;
      }
      :host([disabled]) .mdc-chip {
        opacity: var(--light-disabled-opacity);
        pointer-events: none;
      }
    `;}}]};},SubscribeMixin(s));

_decorate([n("ha-selector-target")],function(_initialize,_SubscribeMixin){class HaTargetSelector extends _SubscribeMixin{constructor(...args){super(...args);_initialize(this);}}return {F:HaTargetSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"_entityPlaformLookup",value:void 0},{kind:"field",decorators:[t()],key:"_configEntries",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"hassSubscribe",value:function hassSubscribe(){return [subscribeEntityRegistry(this.hass.connection,entities=>{const entityLookup={};for(const confEnt of entities){if(!confEnt.platform){continue;}entityLookup[confEnt.entity_id]=confEnt.platform;}this._entityPlaformLookup=entityLookup;})];}},{kind:"method",key:"updated",value:function updated(changedProperties){if(changedProperties.has("selector")){var _this$selector$target,_this$selector$target2;const oldSelector=changedProperties.get("selector");if(oldSelector!==this.selector&&((_this$selector$target=this.selector.target.device)!==null&&_this$selector$target!==void 0&&_this$selector$target.integration||(_this$selector$target2=this.selector.target.entity)!==null&&_this$selector$target2!==void 0&&_this$selector$target2.integration)){this._loadConfigEntries();}}}},{kind:"method",key:"render",value:function render(){var _this$selector$target3,_this$selector$target4;return $`<ha-target-picker
      .hass=${this.hass}
      .value=${this.value}
      .deviceFilter=${this._filterDevices}
      .entityRegFilter=${this._filterRegEntities}
      .entityFilter=${this._filterEntities}
      .includeDeviceClasses=${(_this$selector$target3=this.selector.target.entity)!==null&&_this$selector$target3!==void 0&&_this$selector$target3.device_class?[this.selector.target.entity.device_class]:undefined}
      .includeDomains=${(_this$selector$target4=this.selector.target.entity)!==null&&_this$selector$target4!==void 0&&_this$selector$target4.domain?[this.selector.target.entity.domain]:undefined}
      .disabled=${this.disabled}
    ></ha-target-picker>`;}},{kind:"field",key:"_filterEntities",value(){return entity=>{var _this$selector$target5,_this$selector$target6;if((_this$selector$target5=this.selector.target.entity)!==null&&_this$selector$target5!==void 0&&_this$selector$target5.integration||(_this$selector$target6=this.selector.target.device)!==null&&_this$selector$target6!==void 0&&_this$selector$target6.integration){var _this$selector$target7,_this$selector$target8;if(!this._entityPlaformLookup||this._entityPlaformLookup[entity.entity_id]!==(((_this$selector$target7=this.selector.target.entity)===null||_this$selector$target7===void 0?void 0:_this$selector$target7.integration)||((_this$selector$target8=this.selector.target.device)===null||_this$selector$target8===void 0?void 0:_this$selector$target8.integration))){return false;}}return true;};}},{kind:"field",key:"_filterRegEntities",value(){return entity=>{var _this$selector$target9;if((_this$selector$target9=this.selector.target.entity)!==null&&_this$selector$target9!==void 0&&_this$selector$target9.integration){if(entity.platform!==this.selector.target.entity.integration){return false;}}return true;};}},{kind:"field",key:"_filterDevices",value(){return device=>{var _this$selector$target10,_this$selector$target11,_this$selector$target12,_this$selector$target13;if((_this$selector$target10=this.selector.target.device)!==null&&_this$selector$target10!==void 0&&_this$selector$target10.manufacturer&&device.manufacturer!==this.selector.target.device.manufacturer){return false;}if((_this$selector$target11=this.selector.target.device)!==null&&_this$selector$target11!==void 0&&_this$selector$target11.model&&device.model!==this.selector.target.device.model){return false;}if((_this$selector$target12=this.selector.target.device)!==null&&_this$selector$target12!==void 0&&_this$selector$target12.integration||(_this$selector$target13=this.selector.target.entity)!==null&&_this$selector$target13!==void 0&&_this$selector$target13.integration){var _this$_configEntries;if(!((_this$_configEntries=this._configEntries)!==null&&_this$_configEntries!==void 0&&_this$_configEntries.some(entry=>device.config_entries.includes(entry.entry_id)))){return false;}}return true;};}},{kind:"method",key:"_loadConfigEntries",value:async function _loadConfigEntries(){this._configEntries=(await getConfigEntries(this.hass)).filter(entry=>{var _this$selector$target14,_this$selector$target15;return entry.domain===(((_this$selector$target14=this.selector.target.device)===null||_this$selector$target14===void 0?void 0:_this$selector$target14.integration)||((_this$selector$target15=this.selector.target.entity)===null||_this$selector$target15===void 0?void 0:_this$selector$target15.integration));});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      ha-target-picker {
        display: block;
      }
    `;}}]};},SubscribeMixin(s));

_decorate([n("ha-selector-text")],function(_initialize,_LitElement){class HaTextSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTextSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"placeholder",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"field",decorators:[e({type:Boolean})],key:"required",value(){return true;}},{kind:"field",decorators:[t()],key:"_unmaskedPassword",value(){return false;}},{kind:"method",key:"render",value:function render(){var _this$selector$text,_this$selector$text2,_this$selector$text3,_this$selector$text4,_this$selector$text5;if((_this$selector$text=this.selector.text)!==null&&_this$selector$text!==void 0&&_this$selector$text.multiline){return $`<ha-textarea
        .label=${this.label}
        .placeholder=${this.placeholder}
        .value=${this.value||""}
        .disabled=${this.disabled}
        @input=${this._handleChange}
        autocapitalize="none"
        autocomplete="off"
        spellcheck="false"
        .required=${this.required}
        autogrow
      ></ha-textarea>`;}return $`<ha-textfield
        .value=${this.value||""}
        .placeholder=${this.placeholder||""}
        .disabled=${this.disabled}
        .type=${this._unmaskedPassword?"text":(_this$selector$text2=this.selector.text)===null||_this$selector$text2===void 0?void 0:_this$selector$text2.type}
        @input=${this._handleChange}
        .label=${this.label||""}
        .suffix=${((_this$selector$text3=this.selector.text)===null||_this$selector$text3===void 0?void 0:_this$selector$text3.type)==="password"?// reserve some space for the icon.
$`<div style="width: 24px"></div>`:(_this$selector$text4=this.selector.text)===null||_this$selector$text4===void 0?void 0:_this$selector$text4.suffix}
        .required=${this.required}
      ></ha-textfield>
      ${((_this$selector$text5=this.selector.text)===null||_this$selector$text5===void 0?void 0:_this$selector$text5.type)==="password"?$`<ha-icon-button
            toggles
            .label=${`${this._unmaskedPassword?"Hide":"Show"} password`}
            @click=${this._toggleUnmaskedPassword}
            .path=${this._unmaskedPassword?mdiEyeOff:mdiEye}
          ></ha-icon-button>`:""}`;}},{kind:"method",key:"_toggleUnmaskedPassword",value:function _toggleUnmaskedPassword(){this._unmaskedPassword=!this._unmaskedPassword;}},{kind:"method",key:"_handleChange",value:function _handleChange(ev){let value=ev.target.value;if(this.value===value){return;}if(value===""&&!this.required){value=undefined;}fireEvent(this,"value-changed",{value});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        display: block;
        position: relative;
      }
      ha-textarea,
      ha-textfield {
        width: 100%;
      }
      ha-icon-button {
        position: absolute;
        top: 16px;
        right: 16px;
        --mdc-icon-button-size: 24px;
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
      }
    `;}}]};},s);

_decorate([n("ha-selector-time")],function(_initialize,_LitElement){class HaTimeSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaTimeSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`
      <ha-time-input
        .value=${this.value}
        .locale=${this.hass.locale}
        .disabled=${this.disabled}
        .label=${this.label}
        enable-second
      ></ha-time-input>
    `;}}]};},s);

_decorate([n("ha-selector-icon")],function(_initialize,_LitElement){class HaIconSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaIconSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean,reflect:true})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`
      <ha-icon-picker
        .label=${this.label}
        .value=${this.value}
        .fallbackPath=${this.selector.icon.fallbackPath}
        .placeholder=${this.selector.icon.placeholder}
        @value-changed=${this._valueChanged}
      ></ha-icon-picker>
    `;}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){fireEvent(this,"value-changed",{value:ev.detail.value});}}]};},s);

_decorate([n("ha-selector-theme")],function(_initialize,_LitElement){class HaThemeSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaThemeSelector,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean,reflect:true})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`
      <hui-theme-select-editor
        .hass=${this.hass}
        .value=${this.value}
        .label=${this.label}
      ></hui-theme-select-editor>
    `;}}]};},s);

_decorate([n("ha-locations-editor")],function(_initialize,_LitElement){class HaLocationsEditor extends _LitElement{constructor(){super();_initialize(this);import('./leaflet-src-dev.js').then(module=>{import('./leaflet.draw-dev.js').then(()=>{this.Leaflet=module.default;this._updateMarkers();this.updateComplete.then(()=>this.fitMap());});});}}return {F:HaLocationsEditor,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"locations",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"autoFit",value(){return false;}},{kind:"field",decorators:[e({type:Number})],key:"zoom",value(){return 16;}},{kind:"field",decorators:[e({type:Boolean})],key:"darkMode",value:void 0},{kind:"field",decorators:[t()],key:"_locationMarkers",value:void 0},{kind:"field",decorators:[t()],key:"_circles",value(){return {};}},{kind:"field",decorators:[i("ha-map",true)],key:"map",value:void 0},{kind:"field",key:"Leaflet",value:void 0},{kind:"method",key:"fitMap",value:function fitMap(){this.map.fitMap();}},{kind:"method",key:"fitMarker",value:function fitMarker(id){if(!this.map.leafletMap||!this._locationMarkers){return;}const marker=this._locationMarkers[id];if(!marker){return;}if("getBounds"in marker){this.map.leafletMap.fitBounds(marker.getBounds());marker.bringToFront();}else {const circle=this._circles[id];if(circle){this.map.leafletMap.fitBounds(circle.getBounds());}else {this.map.leafletMap.setView(marker.getLatLng(),this.zoom);}}}},{kind:"method",key:"render",value:function render(){return $`<ha-map
      .hass=${this.hass}
      .layers=${this._getLayers(this._circles,this._locationMarkers)}
      .zoom=${this.zoom}
      .autoFit=${this.autoFit}
      .darkMode=${this.darkMode}
    ></ha-map>`;}},{kind:"field",key:"_getLayers",value(){return memoizeOne((circles,markers)=>{const layers=[];Array.prototype.push.apply(layers,Object.values(circles));if(markers){Array.prototype.push.apply(layers,Object.values(markers));}return layers;});}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){_get(_getPrototypeOf(HaLocationsEditor.prototype),"willUpdate",this).call(this,changedProps);// Still loading.
if(!this.Leaflet){return;}if(changedProps.has("locations")){this._updateMarkers();}}},{kind:"method",key:"_updateLocation",value:function _updateLocation(ev){const marker=ev.target;const latlng=marker.getLatLng();let longitude=latlng.lng;if(Math.abs(longitude)>180.0){// Normalize longitude if map provides values beyond -180 to +180 degrees.
longitude=(longitude%360.0+540.0)%360.0-180.0;}const location=[latlng.lat,longitude];fireEvent(this,"location-updated",{id:marker.id,location},{bubbles:false});}},{kind:"method",key:"_updateRadius",value:function _updateRadius(ev){const marker=ev.target;const circle=this._locationMarkers[marker.id];fireEvent(this,"radius-updated",{id:marker.id,radius:circle.getRadius()},{bubbles:false});}},{kind:"method",key:"_markerClicked",value:function _markerClicked(ev){const marker=ev.target;fireEvent(this,"marker-clicked",{id:marker.id},{bubbles:false});}},{kind:"method",key:"_updateMarkers",value:function _updateMarkers(){if(!this.locations||!this.locations.length){this._circles={};this._locationMarkers=undefined;return;}const locationMarkers={};const circles={};const defaultZoneRadiusColor=getComputedStyle(this).getPropertyValue("--accent-color");this.locations.forEach(location=>{let icon;if(location.icon){// create icon
const el=document.createElement("div");el.className="named-icon";if(location.name){el.innerText=location.name;}const iconEl=document.createElement("ha-icon");iconEl.setAttribute("icon",location.icon);el.prepend(iconEl);icon=this.Leaflet.divIcon({html:el.outerHTML,iconSize:[24,24],className:"light"});}if(location.radius){const circle=this.Leaflet.circle([location.latitude,location.longitude],{color:location.radius_color||defaultZoneRadiusColor,radius:location.radius});if(location.radius_editable||location.location_editable){// @ts-ignore
circle.editing.enable();circle.addEventListener("add",()=>{// @ts-ignore
const moveMarker=circle.editing._moveMarker;// @ts-ignore
const resizeMarker=circle.editing._resizeMarkers[0];if(icon){moveMarker.setIcon(icon);}resizeMarker.id=moveMarker.id=location.id;moveMarker.addEventListener("dragend",// @ts-ignore
ev=>this._updateLocation(ev)).addEventListener("click",// @ts-ignore
ev=>this._markerClicked(ev));if(location.radius_editable){resizeMarker.addEventListener("dragend",// @ts-ignore
ev=>this._updateRadius(ev));}else {resizeMarker.remove();}});locationMarkers[location.id]=circle;}else {circles[location.id]=circle;}}if(!location.radius||!location.radius_editable&&!location.location_editable){const options={title:location.name,draggable:location.location_editable};if(icon){options.icon=icon;}const marker=this.Leaflet.marker([location.latitude,location.longitude],options).addEventListener("dragend",ev=>this._updateLocation(ev)).addEventListener(// @ts-ignore
"click",// @ts-ignore
ev=>this._markerClicked(ev));marker.id=location.id;locationMarkers[location.id]=marker;}});this._circles=circles;this._locationMarkers=locationMarkers;fireEvent(this,"markers-updated");}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        display: block;
        height: 300px;
      }
      ha-map {
        height: 100%;
      }
    `;}}]};},s);

_decorate([n("ha-selector-location")],function(_initialize,_LitElement){class HaLocationSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaLocationSelector,d:[{kind:"field",decorators:[e({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:false})],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e({type:Boolean,reflect:true})],key:"disabled",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`
      <ha-locations-editor
        class="flex"
        .hass=${this.hass}
        .locations=${this._location(this.selector,this.value)}
        @location-updated=${this._locationChanged}
        @radius-updated=${this._radiusChanged}
      ></ha-locations-editor>
    `;}},{kind:"field",key:"_location",value(){return memoizeOne((selector,value)=>{const computedStyles=getComputedStyle(this);const zoneRadiusColor=selector.location.radius?computedStyles.getPropertyValue("--zone-radius-color")||computedStyles.getPropertyValue("--accent-color"):undefined;return [{id:"location",latitude:(value===null||value===void 0?void 0:value.latitude)||this.hass.config.latitude,longitude:(value===null||value===void 0?void 0:value.longitude)||this.hass.config.longitude,radius:selector.location.radius?(value===null||value===void 0?void 0:value.radius)||1000:undefined,radius_color:zoneRadiusColor,icon:selector.location.icon,location_editable:true,radius_editable:true}];});}},{kind:"method",key:"_locationChanged",value:function _locationChanged(ev){const[latitude,longitude]=ev.detail.location;fireEvent(this,"value-changed",{value:{...this.value,latitude,longitude}});}},{kind:"method",key:"_radiusChanged",value:function _radiusChanged(ev){const radius=ev.detail.radius;fireEvent(this,"value-changed",{value:{...this.value,radius}});}}]};},s);

let HaSelector=_decorate([n("ha-selector")],function(_initialize,_LitElement){class HaSelector extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaSelector,d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"selector",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"field",decorators:[e()],key:"helper",value:void 0},{kind:"field",decorators:[e()],key:"placeholder",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value(){return false;}},{kind:"field",decorators:[e({type:Boolean})],key:"required",value(){return true;}},{kind:"method",key:"focus",value:function focus(){var _this$shadowRoot,_this$shadowRoot$getE;(_this$shadowRoot=this.shadowRoot)===null||_this$shadowRoot===void 0?void 0:(_this$shadowRoot$getE=_this$shadowRoot.getElementById("selector"))===null||_this$shadowRoot$getE===void 0?void 0:_this$shadowRoot$getE.focus();}},{kind:"get",key:"_type",value:function _type(){return Object.keys(this.selector)[0];}},{kind:"method",key:"render",value:function render(){return $`
      ${dynamicElement(`ha-selector-${this._type}`,{hass:this.hass,selector:this.selector,value:this.value,label:this.label,placeholder:this.placeholder,disabled:this.disabled,required:this.required,helper:this.helper,id:"selector"})}
    `;}}]};},s);

export { HaSelector };
