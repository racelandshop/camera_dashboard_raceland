const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

import { e as e$2, i as i$1, v as v$2, a as a$2, x as x$2, w as w$3, s as s$1, u as u$2, p as p$1, m as mainWindow, f as fireEvent, b as memoizeOne, _ as _decorate, c as s$2, d as e$3, t as t$1, $ as $$2, g as mdiFlashOff, h as mdiFlash, j as _get, k as _getPrototypeOf, r as r$2, l as a$3, n as n$1, o as haStyle, q as html, P as PolymerElement, y as dedupingMixin, z as o$1, A as mdiStop, B as mdiArrowTopRight, C as mdiArrowBottomLeft, D as useShadow, E as dom, F as mixinBehaviors, G as i$2, H as mdiChevronDown, I as i$3, J as t$2, K as e$4, L as haStyleScrollbar, M as mdiAlert, N as _defineProperty, O as b$2, Q as l$2, R as e$5, S as applyThemesOnElement, T as RippleHandlers, U as __extends, V as __assign$1, W as __spreadArray, X as mdiChevronLeft, Y as mdiChevronRight, Z as o$2, a0 as mdiViewModule, a1 as mdiViewWeek, a2 as mdiViewDay, a3 as mdiViewAgenda, a4 as mdiSkipPrevious, a5 as mdiPlay, a6 as mdiPause, a7 as mdiSkipNext, a8 as mdiPower, a9 as mdiVolumeOff, aa as mdiVolumeHigh, ab as mdiVolumeMinus, ac as mdiVolumePlus, ad as mdiPlayPause, ae as mdiAlertOutline, af as y$1, ag as mdiDotsVertical, ah as __decorate$1, ai as mdiCalendarSync, aj as mdiAutorenew, ak as mdiFire, al as mdiSnowflake, am as mdiFan, an as mdiWaterPercent, ao as mdiAlertCircleOutline, ap as mdiWeatherWindy, aq as mdiGauge, ar as mdiWeatherFog, as as mdiWeatherRainy, at as mdiClose, au as mdiCog, av as mdiPencil, aw as replaceDialog, ax as haStyleDialog } from './main-dev.js';
import { c as computeRTL, e as emitRTLDirection, a as computeRTLDirection } from './ha-header-bar-dev.js';
import './mwc-tab-bar-dev.js';
import 'lit-html/is-server.js';
import { p as polyfillsLoaded, u as useAmPm, U as UNKNOWN, a as UNAVAILABLE, i as isNumericState, f as formatNumber, c as computeStateDomain, b as formatDateTime, d as formatDate, e as computeDomain, B as BINARY_STATE_ON, g as BINARY_STATE_OFF, h as UNAVAILABLE_STATES, s as supportsFeature, D as DOMAINS_WITH_CARD, j as computeStateName, k as forwardHaptic, S as STATES_OFF, l as capitalizeFirstLetter, m as computeOpenIcon, n as computeCloseIcon, o as SENSOR_DEVICE_CLASS_TIMESTAMP, q as cleanupMediaTitle, r as canRun, t as STATE_ATTRIBUTES, v as formatAttributeName, w as formatAttributeValue, x as numberFormatToLocale, y as formatDateTimeWithSeconds, z as isComponentLoaded, A as d$2, C as domainIcon, E as DOMAINS_WITH_DYNAMIC_PICTURE, F as fetchUsers, G as DOMAINS_WITH_MORE_INFO, H as DOMAINS_HIDE_DEFAULT_MORE_INFO, I as domainToName, J as showConfirmationDialog, K as showToast, L as DOMAINS_TOGGLE, M as computeActiveState, N as iconColorCSS, O as createCommonjsModule, P as unwrapExports, Q as installResizeObserver, R as DOMAINS_INPUT_ROW, T as computeMediaDescription, V as SUPPORT_PREVIOUS_TRACK, W as SUPPORT_PAUSE, X as SUPPORT_STOP$1, Y as SUPPORT_PLAY, Z as SUPPORT_NEXT_TRACK, _ as SUPPORT_TURN_ON, $ as SUPPORT_VOLUME_SET, a0 as SUPPORT_VOLUME_BUTTONS, a1 as SUPPORT_TURN_OFF, a2 as SUPPORT_VOLUME_MUTE, a3 as checkValidDate, a4 as UNIT_F, a5 as getSignedPath, a6 as DOMAINS_MORE_INFO_NO_HISTORY, a7 as removeEntityRegistryEntry } from './auth-dev.js';
import { s as stopPropagation, n as nextRender, d as debounce } from './stop_propagation-dev.js';
import { e as e$6 } from './ha-circular-progress-dev.js';
import { c as c$2 } from './repeat-dev.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d$1=e$2(class extends i$1{constructor(t){super(t),this.tt=new WeakMap();}render(t){return [t];}update(s,[e]){if(v$2(this.it)&&(!v$2(e)||this.it.strings!==e.strings)){const e=a$2(s).pop();let o=this.tt.get(this.it.strings);if(void 0===o){const s=document.createDocumentFragment();o=x$2(w$3,s),o.setConnected(!1),this.tt.set(this.it.strings,o);}s$1(o,[e]),u$2(o,void 0,e);}if(v$2(e)){if(!v$2(this.it)||this.it.strings!==e.strings){const t=this.tt.get(e.strings);if(void 0!==t){const i=a$2(t).pop();p$1(s),u$2(s,void 0,i),s$1(s,[i]);}}this.it=e;}else this.it=void 0;return this.render(e);}});

const navigate=(path,options)=>{const replace=(options===null||options===void 0?void 0:options.replace)||false;if(__DEMO__){if(replace){var _mainWindow$history$s;mainWindow.history.replaceState((_mainWindow$history$s=mainWindow.history.state)!==null&&_mainWindow$history$s!==void 0&&_mainWindow$history$s.root?{root:true}:null,"",`${mainWindow.location.pathname}#${path}`);}else {mainWindow.location.hash=path;}}else if(replace){var _mainWindow$history$s2;mainWindow.history.replaceState((_mainWindow$history$s2=mainWindow.history.state)!==null&&_mainWindow$history$s2!==void 0&&_mainWindow$history$s2.root?{root:true}:null,"",path);}else {mainWindow.history.pushState(null,"",path);}fireEvent(mainWindow,"location-changed",{replace});};

const STATE_NOT_RUNNING="NOT_RUNNING";

if(__BUILD__==="latest"&&polyfillsLoaded){await polyfillsLoaded;}// 9:15 PM || 21:15
const formatTime=(dateObj,locale)=>formatTimeMem(locale).format(dateObj);const formatTimeMem=memoizeOne(locale=>new Intl.DateTimeFormat(locale.language==="en"&&!useAmPm(locale)?"en-u-hc-h23":locale.language,{hour:"numeric",minute:"2-digit",hour12:useAmPm(locale)}));// 9:15:24 PM || 21:15:24
const formatTimeWithSeconds=(dateObj,locale)=>formatTimeWithSecondsMem(locale).format(dateObj);const formatTimeWithSecondsMem=memoizeOne(locale=>new Intl.DateTimeFormat(locale.language==="en"&&!useAmPm(locale)?"en-u-hc-h23":locale.language,{hour:useAmPm(locale)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:useAmPm(locale)}));// Tuesday 7:00 PM || Tuesday 19:00
const formatTimeWeekday=(dateObj,locale)=>formatTimeWeekdayMem(locale).format(dateObj);const formatTimeWeekdayMem=memoizeOne(locale=>new Intl.DateTimeFormat(locale.language==="en"&&!useAmPm(locale)?"en-u-hc-h23":locale.language,{weekday:"long",hour:useAmPm(locale)?"numeric":"2-digit",minute:"2-digit",hour12:useAmPm(locale)}));

const computeStateDisplay=(localize,stateObj,locale,state)=>{const compareState=state!==undefined?state:stateObj.state;if(compareState===UNKNOWN||compareState===UNAVAILABLE){return localize(`state.default.${compareState}`);}// Entities with a `unit_of_measurement` or `state_class` are numeric values and should use `formatNumber`
if(isNumericState(stateObj)){if(stateObj.attributes.device_class==="monetary"){try{return formatNumber(compareState,locale,{style:"currency",currency:stateObj.attributes.unit_of_measurement});}catch(_err){// fallback to default
}}return `${formatNumber(compareState,locale)}${stateObj.attributes.unit_of_measurement?" "+stateObj.attributes.unit_of_measurement:""}`;}const domain=computeStateDomain(stateObj);if(domain==="input_datetime"){if(state!==undefined){// If trying to display an explicit state, need to parse the explicit state to `Date` then format.
// Attributes aren't available, we have to use `state`.
try{const components=state.split(" ");if(components.length===2){// Date and time.
return formatDateTime(new Date(components.join("T")),locale);}if(components.length===1){if(state.includes("-")){// Date only.
return formatDate(new Date(`${state}T00:00`),locale);}if(state.includes(":")){// Time only.
const now=new Date();return formatTime(new Date(`${now.toISOString().split("T")[0]}T${state}`),locale);}}return state;}catch(_e){// Formatting methods may throw error if date parsing doesn't go well,
// just return the state string in that case.
return state;}}else {// If not trying to display an explicit state, create `Date` object from `stateObj`'s attributes then format.
let date;if(stateObj.attributes.has_date&&stateObj.attributes.has_time){date=new Date(stateObj.attributes.year,stateObj.attributes.month-1,stateObj.attributes.day,stateObj.attributes.hour,stateObj.attributes.minute);return formatDateTime(date,locale);}if(stateObj.attributes.has_date){date=new Date(stateObj.attributes.year,stateObj.attributes.month-1,stateObj.attributes.day);return formatDate(date,locale);}if(stateObj.attributes.has_time){date=new Date();date.setHours(stateObj.attributes.hour,stateObj.attributes.minute);return formatTime(date,locale);}return stateObj.state;}}if(domain==="humidifier"){if(compareState==="on"&&stateObj.attributes.humidity){return `${stateObj.attributes.humidity} %`;}}// `counter` `number` and `input_number` domains do not have a unit of measurement but should still use `formatNumber`
if(domain==="counter"||domain==="number"||domain==="input_number"){return formatNumber(compareState,locale);}// state of button is a timestamp
if(domain==="button"||domain==="input_button"||domain==="scene"||domain==="sensor"&&stateObj.attributes.device_class==="timestamp"){try{return formatDateTime(new Date(compareState),locale);}catch(_err){return compareState;}}return(// Return device class translation
stateObj.attributes.device_class&&localize(`component.${domain}.state.${stateObj.attributes.device_class}.${compareState}`)||// Return default translation
localize(`component.${domain}.state._.${compareState}`)||// We don't know! Return the raw state.
compareState);};

const LOGBOOK_LOCALIZE_PATH="ui.components.logbook.messages";const CONTINUOUS_DOMAINS=["proximity","sensor"];const DATA_CACHE={};const getLogbookData=async(hass,startDate,endDate,entityId,entity_matches_only)=>{const localize=await hass.loadBackendTranslation("device_class");return addLogbookMessage(hass,localize,await getLogbookDataCache(hass,startDate,endDate,entityId,entity_matches_only));};const addLogbookMessage=(hass,localize,logbookData)=>{for(const entry of logbookData){const stateObj=hass.states[entry.entity_id];if(entry.state&&stateObj){entry.message=getLogbookMessage(hass,localize,entry.state,stateObj,computeDomain(entry.entity_id));}}return logbookData;};const getLogbookDataCache=async(hass,startDate,endDate,entityId,entity_matches_only)=>{const ALL_ENTITIES="*";if(!entityId){entityId=ALL_ENTITIES;}const cacheKey=`${startDate}${endDate}`;if(!DATA_CACHE[cacheKey]){DATA_CACHE[cacheKey]={};}if(entityId in DATA_CACHE[cacheKey]){return DATA_CACHE[cacheKey][entityId];}if(entityId!==ALL_ENTITIES&&DATA_CACHE[cacheKey][ALL_ENTITIES]){const entities=await DATA_CACHE[cacheKey][ALL_ENTITIES];return entities.filter(entity=>entity.entity_id===entityId);}DATA_CACHE[cacheKey][entityId]=getLogbookDataFromServer(hass,startDate,endDate,entityId!==ALL_ENTITIES?entityId:undefined,entity_matches_only).then(entries=>entries.reverse());return DATA_CACHE[cacheKey][entityId];};const getLogbookDataFromServer=async(hass,startDate,endDate,entityId,entitymatchesOnly,contextId)=>{const params=new URLSearchParams();if(endDate){params.append("end_time",endDate);}if(entityId){params.append("entity",entityId);}if(entitymatchesOnly){params.append("entity_matches_only","");}if(contextId){params.append("context_id",contextId);}return hass.callApi("GET",`logbook/${startDate}?${params.toString()}`);};const getLogbookMessage=(hass,localize,state,stateObj,domain)=>{switch(domain){case"device_tracker":case"person":if(state==="not_home"){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_away`);}if(state==="home"){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_at_home`);}return localize(`${LOGBOOK_LOCALIZE_PATH}.was_at_state`,"state",state);case"sun":return state==="above_horizon"?localize(`${LOGBOOK_LOCALIZE_PATH}.rose`):localize(`${LOGBOOK_LOCALIZE_PATH}.set`);case"binary_sensor":{const isOn=state===BINARY_STATE_ON;const isOff=state===BINARY_STATE_OFF;const device_class=stateObj.attributes.device_class;switch(device_class){case"battery":if(isOn){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_low`);}if(isOff){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_normal`);}break;case"connectivity":if(isOn){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_connected`);}if(isOff){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_disconnected`);}break;case"door":case"garage_door":case"opening":case"window":if(isOn){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_opened`);}if(isOff){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_closed`);}break;case"lock":if(isOn){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_unlocked`);}if(isOff){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_locked`);}break;case"plug":if(isOn){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_plugged_in`);}if(isOff){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_unplugged`);}break;case"presence":if(isOn){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_at_home`);}if(isOff){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_away`);}break;case"safety":if(isOn){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_unsafe`);}if(isOff){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_safe`);}break;case"cold":case"gas":case"heat":case"moisture":case"motion":case"occupancy":case"power":case"problem":case"smoke":case"sound":case"vibration":if(isOn){return localize(`${LOGBOOK_LOCALIZE_PATH}.detected_device_class`,{device_class:localize(`component.binary_sensor.device_class.${device_class}`)});}if(isOff){return localize(`${LOGBOOK_LOCALIZE_PATH}.cleared_device_class`,{device_class:localize(`component.binary_sensor.device_class.${device_class}`)});}break;case"tamper":if(isOn){return localize(`${LOGBOOK_LOCALIZE_PATH}.detected_tampering`);}if(isOff){return localize(`${LOGBOOK_LOCALIZE_PATH}.cleared_tampering`);}break;}break;}case"cover":switch(state){case"open":return localize(`${LOGBOOK_LOCALIZE_PATH}.was_opened`);case"opening":return localize(`${LOGBOOK_LOCALIZE_PATH}.is_opening`);case"closing":return localize(`${LOGBOOK_LOCALIZE_PATH}.is_closing`);case"closed":return localize(`${LOGBOOK_LOCALIZE_PATH}.was_closed`);}break;case"lock":if(state==="unlocked"){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_unlocked`);}if(state==="locked"){return localize(`${LOGBOOK_LOCALIZE_PATH}.was_locked`);}break;}if(state===BINARY_STATE_ON){return localize(`${LOGBOOK_LOCALIZE_PATH}.turned_on`);}if(state===BINARY_STATE_OFF){return localize(`${LOGBOOK_LOCALIZE_PATH}.turned_off`);}if(UNAVAILABLE_STATES.includes(state)){return localize(`${LOGBOOK_LOCALIZE_PATH}.became_unavailable`);}return hass.localize(`${LOGBOOK_LOCALIZE_PATH}.changed_to_state`,"state",stateObj?computeStateDisplay(localize,stateObj,hass.locale,state):state);};

const loadEntityEditorDialog=()=>import('./dialog-entity-editor-dev.js');const getDialog=()=>document.querySelector("home-assistant").shadowRoot.querySelector("dialog-entity-editor");const showEntityEditorDialog=(element,entityDetailParams)=>{fireEvent(element,"show-dialog",{dialogTag:"dialog-entity-editor",dialogImport:loadEntityEditorDialog,dialogParams:entityDetailParams});return getDialog;};

/**
 * Update root's child element to be newElementTag replacing another existing child if any.
 * Copy attributes into the child element.
 */function dynamicContentUpdater(root,newElementTag,attributes){const rootEl=root;let customEl;if(rootEl.lastChild&&rootEl.lastChild.tagName===newElementTag){customEl=rootEl.lastChild;}else {if(rootEl.lastChild){rootEl.removeChild(rootEl.lastChild);}// Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
// become a defined Custom Element. Polymer does that in some later pass.
customEl=document.createElement(newElementTag.toLowerCase());}if(customEl.setProperties){customEl.setProperties(attributes);}else {// If custom element definition wasn't loaded yet - setProperties would be
// missing, but no harm in setting attributes one-by-one then.
Object.keys(attributes).forEach(key=>{customEl[key]=attributes[key];});}if(customEl.parentNode===null){rootEl.appendChild(customEl);}}

const canToggleDomain=(hass,domain)=>{const services=hass.services[domain];if(!services){return false;}if(domain==="lock"){return "lock"in services;}if(domain==="cover"){return "open_cover"in services;}return "turn_on"in services;};

const canToggleState=(hass,stateObj)=>{const domain=computeStateDomain(stateObj);if(domain==="group"){var _stateObj$attributes,_stateObj$attributes$;if((_stateObj$attributes=stateObj.attributes)!==null&&_stateObj$attributes!==void 0&&(_stateObj$attributes$=_stateObj$attributes.entity_id)!==null&&_stateObj$attributes$!==void 0&&_stateObj$attributes$.some(entity=>{const entityStateObj=hass.states[entity];if(!entityStateObj){return false;}const entityDomain=computeStateDomain(entityStateObj);return canToggleDomain(hass,entityDomain);})){return stateObj.state==="on"||stateObj.state==="off";}return false;}if(domain==="climate"){return supportsFeature(stateObj,4096);}return canToggleDomain(hass,domain);};

const stateCardType=(hass,stateObj)=>{if(stateObj.state===UNAVAILABLE){return "display";}const domain=computeStateDomain(stateObj);if(DOMAINS_WITH_CARD.includes(domain)){return domain;}if(canToggleState(hass,stateObj)&&stateObj.attributes.control!=="hidden"){return "toggle";}return "display";};

const isOn=stateObj=>stateObj!==undefined&&!STATES_OFF.includes(stateObj.state)&&!UNAVAILABLE_STATES.includes(stateObj.state);let HaEntityToggle=_decorate(null,function(_initialize,_LitElement){class HaEntityToggle extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaEntityToggle,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"stateObj",value:void 0},{kind:"field",decorators:[e$3()],key:"label",value:void 0},{kind:"field",decorators:[t$1()],key:"_isOn",value(){return false;}},{kind:"method",key:"render",value:// hass is not a property so that we only re-render on stateObj changes
function render(){if(!this.stateObj){return $$2` <ha-switch disabled></ha-switch> `;}if(this.stateObj.attributes.assumed_state||this.stateObj.state===UNKNOWN){return $$2`
        <ha-icon-button
          .label=${`Turn ${computeStateName(this.stateObj)} off`}
          .path=${mdiFlashOff}
          .disabled=${this.stateObj.state===UNAVAILABLE}
          @click=${this._turnOff}
          class=${!this._isOn&&this.stateObj.state!==UNKNOWN?"state-active":""}
        ></ha-icon-button>
        <ha-icon-button
          .label=${`Turn ${computeStateName(this.stateObj)} on`}
          .path=${mdiFlash}
          .disabled=${this.stateObj.state===UNAVAILABLE}
          @click=${this._turnOn}
          class=${this._isOn?"state-active":""}
        ></ha-icon-button>
      `;}const switchTemplate=$$2`
      <!-- <div class="container disable-checkbox"> -->
      <ha-switch
        aria-label=${`Toggle ${computeStateName(this.stateObj)} ${this._isOn?"off":"on"}`}
        .checked=${this._isOn}
        .disabled=${this.stateObj.state===UNAVAILABLE}
        @change=${this._toggleChanged}
      ></ha-switch>
      <!-- </div> -->
    `;if(!this.label){return switchTemplate;}return $$2`
      <ha-formfield .label=${this.label}>${switchTemplate}</ha-formfield>
    `;}},{kind:"method",key:"firstUpdated",value:function firstUpdated(changedProps){_get(_getPrototypeOf(HaEntityToggle.prototype),"firstUpdated",this).call(this,changedProps);this.addEventListener("click",ev=>ev.stopPropagation());}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){_get(_getPrototypeOf(HaEntityToggle.prototype),"willUpdate",this).call(this,changedProps);if(changedProps.has("stateObj")){this._isOn=isOn(this.stateObj);}}},{kind:"method",key:"_toggleChanged",value:function _toggleChanged(ev){const newVal=ev.target.checked;if(newVal!==this._isOn){this._callService(newVal);}}},{kind:"method",key:"_turnOn",value:function _turnOn(){this._callService(true);}},{kind:"method",key:"_turnOff",value:function _turnOff(){this._callService(false);}// We will force a re-render after a successful call to re-sync the toggle
// with the state. It will be out of sync if our service call did not
// result in the entity to be turned on. Since the state is not changing,
// the resync is not called automatic.
},{kind:"method",key:"_callService",value:async function _callService(turnOn){if(!this.hass||!this.stateObj){return;}forwardHaptic("light");const stateDomain=computeStateDomain(this.stateObj);let serviceDomain;let service;if(stateDomain==="lock"){serviceDomain="lock";service=turnOn?"unlock":"lock";}else if(stateDomain==="cover"){serviceDomain="cover";service=turnOn?"open_cover":"close_cover";}else if(stateDomain==="group"){serviceDomain="homeassistant";service=turnOn?"turn_on":"turn_off";}else {serviceDomain=stateDomain;service=turnOn?"turn_on":"turn_off";}const currentState=this.stateObj;// Optimistic update.
this._isOn=turnOn;await this.hass.callService(serviceDomain,service,{entity_id:this.stateObj.entity_id});setTimeout(async()=>{// If after 2 seconds we have not received a state update
// reset the switch to it's original state.
if(this.stateObj===currentState){this._isOn=isOn(this.stateObj);}},2000);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        white-space: nowrap;
        /* min-width: 38px; */
        height: 40px;
      }
      ha-icon-button {
        --mdc-icon-button-size: 40px;
        color: var(--ha-icon-button-inactive-color, var(--primary-text-color));
        transition: color 0.5s;
      }
      ha-icon-button.state-active {
        color: var(--ha-icon-button-active-color, var(--primary-color));
      }
      ha-switch {
        padding: 9px 0px;
      }
      /*
      .container.disable-checkbox {
        display: block;
        pointer-events: inherit;
      } */
    `;}}]};},s$2);customElements.define("ha-entity-toggle",HaEntityToggle);

var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var MS_PER_SECOND=1e3;var SECS_PER_MIN=60;var SECS_PER_HOUR=SECS_PER_MIN*60;var SECS_PER_DAY=SECS_PER_HOUR*24;var SECS_PER_WEEK=SECS_PER_DAY*7;function selectUnit(from,to,thresholds){if(to===void 0){to=Date.now();}if(thresholds===void 0){thresholds={};}var resolvedThresholds=__assign(__assign({},DEFAULT_THRESHOLDS),thresholds||{});var secs=(+from-+to)/MS_PER_SECOND;if(Math.abs(secs)<resolvedThresholds.second){return {value:Math.round(secs),unit:'second'};}var mins=secs/SECS_PER_MIN;if(Math.abs(mins)<resolvedThresholds.minute){return {value:Math.round(mins),unit:'minute'};}var hours=secs/SECS_PER_HOUR;if(Math.abs(hours)<resolvedThresholds.hour){return {value:Math.round(hours),unit:'hour'};}var days=secs/SECS_PER_DAY;if(Math.abs(days)<resolvedThresholds.day){return {value:Math.round(days),unit:'day'};}var fromDate=new Date(from);var toDate=new Date(to);var years=fromDate.getFullYear()-toDate.getFullYear();if(Math.round(Math.abs(years))>0){return {value:Math.round(years),unit:'year'};}var months=years*12+fromDate.getMonth()-toDate.getMonth();if(Math.round(Math.abs(months))>0){return {value:Math.round(months),unit:'month'};}var weeks=secs/SECS_PER_WEEK;return {value:Math.round(weeks),unit:'week'};}var DEFAULT_THRESHOLDS={second:45,minute:45,hour:22,day:5};

if(__BUILD__==="latest"&&polyfillsLoaded){await polyfillsLoaded;}const formatRelTimeMem=memoizeOne(locale=>// @ts-expect-error
new Intl.RelativeTimeFormat(locale.language,{numeric:"auto"}));const relativeTime=(from,locale,to,includeTense=true)=>{const diff=selectUnit(from,to);if(includeTense){return formatRelTimeMem(locale).format(diff.value,diff.unit);}return Intl.NumberFormat(locale.language,{style:"unit",// @ts-expect-error
unit:diff.unit,unitDisplay:"long"}).format(Math.abs(diff.value));};

_decorate([n$1("ha-relative-time")],function(_initialize,_ReactiveElement){class HaRelativeTime extends _ReactiveElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaRelativeTime,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"datetime",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"capitalize",value(){return false;}},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaRelativeTime.prototype),"disconnectedCallback",this).call(this);this._clearInterval();}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HaRelativeTime.prototype),"connectedCallback",this).call(this);if(this.datetime){this._startInterval();}}},{kind:"method",key:"createRenderRoot",value:function createRenderRoot(){return this;}},{kind:"method",key:"firstUpdated",value:function firstUpdated(changedProps){_get(_getPrototypeOf(HaRelativeTime.prototype),"firstUpdated",this).call(this,changedProps);this._updateRelative();}},{kind:"method",key:"update",value:function update(changedProps){_get(_getPrototypeOf(HaRelativeTime.prototype),"update",this).call(this,changedProps);this._updateRelative();}},{kind:"method",key:"_clearInterval",value:function _clearInterval(){if(this._interval){window.clearInterval(this._interval);this._interval=undefined;}}},{kind:"method",key:"_startInterval",value:function _startInterval(){this._clearInterval();// update every 60 seconds
this._interval=window.setInterval(()=>this._updateRelative(),60000);}},{kind:"method",key:"_updateRelative",value:function _updateRelative(){if(!this.datetime){this.innerHTML=this.hass.localize("ui.components.relative_time.never");}else {const relTime=relativeTime(new Date(this.datetime),this.hass.locale);this.innerHTML=this.capitalize?capitalizeFirstLetter(relTime):relTime;}}}]};},a$3);

_decorate([n$1("state-info")],function(_initialize,_LitElement){class StateInfo extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateInfo,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateObj",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"inDialog",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,reflect:true})],key:"rtl",value(){return false;}},{kind:"method",key:"render",value:// property used only in CSS
function render(){if(!this.hass||!this.stateObj){return $$2``;}const name=computeStateName(this.stateObj);return $$2`<state-badge
        .stateObj=${this.stateObj}
        .stateColor=${true}
      ></state-badge>
      <div class="info">
        <div class="name" .title=${name} .inDialog=${this.inDialog}>
          ${name}
        </div>
        ${this.inDialog?$$2`<div class="time-ago">
              <ha-relative-time
                id="last_changed"
                .hass=${this.hass}
                .datetime=${this.stateObj.last_changed}
                capitalize
              ></ha-relative-time>
              <paper-tooltip animation-delay="0" for="last_changed">
                <div>
                  <div class="row">
                    <span class="column-name">
                      ${this.hass.localize("ui.dialogs.more_info_control.last_changed")}:
                    </span>
                    <ha-relative-time
                      .hass=${this.hass}
                      .datetime=${this.stateObj.last_changed}
                      capitalize
                    ></ha-relative-time>
                  </div>
                  <div class="row">
                    <span>
                      ${this.hass.localize("ui.dialogs.more_info_control.last_updated")}:
                    </span>
                    <ha-relative-time
                      .hass=${this.hass}
                      .datetime=${this.stateObj.last_updated}
                      capitalize
                    ></ha-relative-time>
                  </div>
                </div>
              </paper-tooltip>
            </div>`:$$2`<div class="extra-info"><slot></slot></div>`}
      </div> `;}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(StateInfo.prototype),"updated",this).call(this,changedProps);if(!changedProps.has("hass")){return;}const oldHass=changedProps.get("hass");if(!oldHass||oldHass.locale!==this.hass.locale){this.rtl=computeRTL(this.hass);}}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        min-width: 120px;
        white-space: nowrap;
      }

      state-badge {
        float: left;
      }
      :host([rtl]) state-badge {
        float: right;
      }

      .info {
        margin-left: 56px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
      }

      :host([rtl]) .info {
        margin-right: 56px;
        margin-left: 0;
        text-align: right;
      }

      .name {
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .name[in-dialog],
      :host([secondary-line]) .name {
        line-height: 20px;
      }

      .time-ago,
      .extra-info,
      .extra-info > * {
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .row {
        display: flex;
        flex-direction: row;
        flex-wrap: no-wrap;
        width: 100%;
        justify-content: space-between;
        margin: 0 2px 4px 0;
      }

      .row:last-child {
        margin-bottom: 0px;
      }
    `;}}]};},s$2);

_decorate([n$1("state-card-button")],function(_initialize,_LitElement){class StateCardButton extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateCardButton,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"stateObj",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"inDialog",value(){return false;}},{kind:"method",key:"render",value:function render(){const stateObj=this.stateObj;return $$2`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${stateObj}
          .inDialog=${this.inDialog}
        ></state-info>
        <mwc-button
          @click=${this._pressButton}
          .disabled=${stateObj.state===UNAVAILABLE}
        >
          ${this.hass.localize("ui.card.button.press")}
        </mwc-button>
      </div>
    `;}},{kind:"method",key:"_pressButton",value:function _pressButton(ev){ev.stopPropagation();this.hass.callService("button","press",{entity_id:this.stateObj.entity_id});}},{kind:"get",static:true,key:"styles",value:function styles(){return haStyle;}}]};},s$2);

/*
A set of layout classes that let you specify layout properties directly in
markup. You must include this file in every element that needs to use them.

Sample use:

    import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

    const template = html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        .test { width: 100px; }
      </style>
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
    `;
    document.body.appendChild(template.content);

The following imports are available:
 - iron-flex
 - iron-flex-reverse
 - iron-flex-alignment
 - iron-flex-factors
 - iron-positioning
*/const template=html`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;template.setAttribute('style','display: none;');document.head.appendChild(template.content);

const CLIMATE_PRESET_NONE="none";const CLIMATE_SUPPORT_TARGET_TEMPERATURE=1;const CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE=2;const CLIMATE_SUPPORT_TARGET_HUMIDITY=4;const CLIMATE_SUPPORT_FAN_MODE=8;const CLIMATE_SUPPORT_PRESET_MODE=16;const CLIMATE_SUPPORT_SWING_MODE=32;const CLIMATE_SUPPORT_AUX_HEAT=64;const hvacModeOrdering={auto:1,heat_cool:2,heat:3,cool:4,dry:5,fan_only:6,off:7};const compareClimateHvacModes=(mode1,mode2)=>hvacModeOrdering[mode1]-hvacModeOrdering[mode2];

_decorate([n$1("ha-climate-state")],function(_initialize,_LitElement){class HaClimateState extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaClimateState,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function render(){const currentStatus=this._computeCurrentStatus();return $$2`<div class="target">
        ${this.stateObj.state!=="unknown"?$$2`<span class="state-label">
              ${this._localizeState()}
              ${this.stateObj.attributes.preset_mode&&this.stateObj.attributes.preset_mode!==CLIMATE_PRESET_NONE?$$2`-
                  ${this.hass.localize(`state_attributes.climate.preset_mode.${this.stateObj.attributes.preset_mode}`)||this.stateObj.attributes.preset_mode}`:""}
            </span>`:""}
        <div class="unit">${this._computeTarget()}</div>
      </div>

      ${currentStatus?$$2`<div class="current">
            ${this.hass.localize("ui.card.climate.currently")}:
            <div class="unit">${currentStatus}</div>
          </div>`:""}`;}},{kind:"method",key:"_computeCurrentStatus",value:function _computeCurrentStatus(){if(!this.hass||!this.stateObj){return undefined;}if(this.stateObj.attributes.current_temperature!=null){return `${formatNumber(this.stateObj.attributes.current_temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}`;}if(this.stateObj.attributes.current_humidity!=null){return `${formatNumber(this.stateObj.attributes.current_humidity,this.hass.locale)} %`;}return undefined;}},{kind:"method",key:"_computeTarget",value:function _computeTarget(){if(!this.hass||!this.stateObj){return "";}if(this.stateObj.attributes.target_temp_low!=null&&this.stateObj.attributes.target_temp_high!=null){return `${formatNumber(this.stateObj.attributes.target_temp_low,this.hass.locale)}-${formatNumber(this.stateObj.attributes.target_temp_high,this.hass.locale)} ${this.hass.config.unit_system.temperature}`;}if(this.stateObj.attributes.temperature!=null){return `${formatNumber(this.stateObj.attributes.temperature,this.hass.locale)} ${this.hass.config.unit_system.temperature}`;}if(this.stateObj.attributes.target_humidity_low!=null&&this.stateObj.attributes.target_humidity_high!=null){return `${formatNumber(this.stateObj.attributes.target_humidity_low,this.hass.locale)}-${formatNumber(this.stateObj.attributes.target_humidity_high,this.hass.locale)} %`;}if(this.stateObj.attributes.humidity!=null){return `${formatNumber(this.stateObj.attributes.humidity,this.hass.locale)} %`;}return "";}},{kind:"method",key:"_localizeState",value:function _localizeState(){const stateString=this.hass.localize(`component.climate.state._.${this.stateObj.state}`);return this.stateObj.attributes.hvac_action?`${this.hass.localize(`state_attributes.climate.hvac_action.${this.stateObj.attributes.hvac_action}`)} (${stateString})`:stateString;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        white-space: nowrap;
      }

      .target {
        color: var(--primary-text-color);
      }

      .current {
        color: var(--secondary-text-color);
      }

      .state-label {
        font-weight: bold;
        text-transform: capitalize;
      }

      .unit {
        display: inline-block;
        direction: ltr;
      }
    `;}}]};},s$2);

class StateCardClimate extends PolymerElement{static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-climate-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-climate-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-climate-state>
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,stateObj:Object,inDialog:{type:Boolean,value:false}};}}customElements.define("state-card-climate",StateCardClimate);

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */var LocalizeMixin = dedupingMixin(superClass=>class extends superClass{static get properties(){return {hass:Object,/**
           * Translates a string to the current `language`. Any parameters to the
           * string should be passed in order, as follows:
           * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
           */localize:{type:Function,computed:"__computeLocalize(hass.localize)"}};}__computeLocalize(localize){return localize;}});

/*
 * @appliesMixin LocalizeMixin
 */class StateCardConfigurator extends LocalizeMixin(PolymerElement){static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button hidden$="[[inDialog]]"
          >[[_localizeState(stateObj)]]</mwc-button
        >
      </div>

      <!-- pre load the image so the dialog is rendered the proper size -->
      <template is="dom-if" if="[[stateObj.attributes.description_image]]">
        <img hidden="" src="[[stateObj.attributes.description_image]]" />
      </template>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,stateObj:Object,inDialog:{type:Boolean,value:false}};}_localizeState(stateObj){return computeStateDisplay(this.hass.localize,stateObj,this.hass.locale);}}customElements.define("state-card-configurator",StateCardConfigurator);

const SUPPORT_OPEN=1;const SUPPORT_CLOSE=2;const SUPPORT_STOP=8;const SUPPORT_OPEN_TILT=16;const SUPPORT_CLOSE_TILT=32;const SUPPORT_STOP_TILT=64;const supportsOpen=stateObj=>supportsFeature(stateObj,SUPPORT_OPEN);const supportsClose=stateObj=>supportsFeature(stateObj,SUPPORT_CLOSE);const supportsStop=stateObj=>supportsFeature(stateObj,SUPPORT_STOP);const supportsOpenTilt=stateObj=>supportsFeature(stateObj,SUPPORT_OPEN_TILT);const supportsCloseTilt=stateObj=>supportsFeature(stateObj,SUPPORT_CLOSE_TILT);const supportsStopTilt=stateObj=>supportsFeature(stateObj,SUPPORT_STOP_TILT);function isFullyOpen(stateObj){if(stateObj.attributes.current_position!==undefined){return stateObj.attributes.current_position===100;}return stateObj.state==="open";}function isFullyClosed(stateObj){if(stateObj.attributes.current_position!==undefined){return stateObj.attributes.current_position===0;}return stateObj.state==="closed";}function isFullyOpenTilt(stateObj){return stateObj.attributes.current_tilt_position===100;}function isFullyClosedTilt(stateObj){return stateObj.attributes.current_tilt_position===0;}function isOpening(stateObj){return stateObj.state==="opening";}function isClosing(stateObj){return stateObj.state==="closing";}function isTiltOnly(stateObj){const supportsCover=supportsOpen(stateObj)||supportsClose(stateObj)||supportsStop(stateObj);const supportsTilt=supportsOpenTilt(stateObj)||supportsCloseTilt(stateObj)||supportsStopTilt(stateObj);return supportsTilt&&!supportsCover;}

_decorate([n$1("ha-cover-controls")],function(_initialize,_LitElement){class HaCoverControls extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaCoverControls,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function render(){if(!this.stateObj){return $$2``;}return $$2`
      <div class="state">
        <ha-icon-button
          class=${o$1({hidden:!supportsOpen(this.stateObj)})}
          .label=${this.hass.localize("ui.dialogs.more_info_control.cover.open_cover")}
          @click=${this._onOpenTap}
          .disabled=${this._computeOpenDisabled()}
          .path=${computeOpenIcon(this.stateObj)}
        >
        </ha-icon-button>
        <ha-icon-button
          class=${o$1({hidden:!supportsStop(this.stateObj)})}
          .label=${this.hass.localize("ui.dialogs.more_info_control.cover.stop_cover")}
          .path=${mdiStop}
          @click=${this._onStopTap}
          .disabled=${this.stateObj.state===UNAVAILABLE}
        ></ha-icon-button>
        <ha-icon-button
          class=${o$1({hidden:!supportsClose(this.stateObj)})}
          .label=${this.hass.localize("ui.dialogs.more_info_control.cover.close_cover")}
          @click=${this._onCloseTap}
          .disabled=${this._computeClosedDisabled()}
          .path=${computeCloseIcon(this.stateObj)}
        >
        </ha-icon-button>
      </div>
    `;}},{kind:"method",key:"_computeOpenDisabled",value:function _computeOpenDisabled(){if(this.stateObj.state===UNAVAILABLE){return true;}const assumedState=this.stateObj.attributes.assumed_state===true;return (isFullyOpen(this.stateObj)||isOpening(this.stateObj))&&!assumedState;}},{kind:"method",key:"_computeClosedDisabled",value:function _computeClosedDisabled(){if(this.stateObj.state===UNAVAILABLE){return true;}const assumedState=this.stateObj.attributes.assumed_state===true;return (isFullyClosed(this.stateObj)||isClosing(this.stateObj))&&!assumedState;}},{kind:"method",key:"_onOpenTap",value:function _onOpenTap(ev){ev.stopPropagation();this.hass.callService("cover","open_cover",{entity_id:this.stateObj.entity_id});}},{kind:"method",key:"_onCloseTap",value:function _onCloseTap(ev){ev.stopPropagation();this.hass.callService("cover","close_cover",{entity_id:this.stateObj.entity_id});}},{kind:"method",key:"_onStopTap",value:function _onStopTap(ev){ev.stopPropagation();this.hass.callService("cover","stop_cover",{entity_id:this.stateObj.entity_id});}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      .state {
        white-space: nowrap;
      }
      .hidden {
        visibility: hidden !important;
      }
    `;}}]};},s$2);

_decorate([n$1("ha-cover-tilt-controls")],function(_initialize,_LitElement){class HaCoverTiltControls extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaCoverTiltControls,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function render(){if(!this.stateObj){return $$2``;}return $$2` <ha-icon-button
        class=${o$1({invisible:!supportsOpenTilt(this.stateObj)})}
        .label=${this.hass.localize("ui.dialogs.more_info_control.cover.open_tilt_cover")}
        .path=${mdiArrowTopRight}
        @click=${this._onOpenTiltTap}
        .disabled=${this._computeOpenDisabled()}
      ></ha-icon-button>
      <ha-icon-button
        class=${o$1({invisible:!supportsStopTilt(this.stateObj)})}
        .label=${this.hass.localize("ui.dialogs.more_info_control.cover.stop_cover")}
        .path=${mdiStop}
        @click=${this._onStopTiltTap}
        .disabled=${this.stateObj.state===UNAVAILABLE}
      ></ha-icon-button>
      <ha-icon-button
        class=${o$1({invisible:!supportsCloseTilt(this.stateObj)})}
        .label=${this.hass.localize("ui.dialogs.more_info_control.cover.close_tilt_cover")}
        .path=${mdiArrowBottomLeft}
        @click=${this._onCloseTiltTap}
        .disabled=${this._computeClosedDisabled()}
      ></ha-icon-button>`;}},{kind:"method",key:"_computeOpenDisabled",value:function _computeOpenDisabled(){if(this.stateObj.state===UNAVAILABLE){return true;}const assumedState=this.stateObj.attributes.assumed_state===true;return isFullyOpenTilt(this.stateObj)&&!assumedState;}},{kind:"method",key:"_computeClosedDisabled",value:function _computeClosedDisabled(){if(this.stateObj.state===UNAVAILABLE){return true;}const assumedState=this.stateObj.attributes.assumed_state===true;return isFullyClosedTilt(this.stateObj)&&!assumedState;}},{kind:"method",key:"_onOpenTiltTap",value:function _onOpenTiltTap(ev){ev.stopPropagation();this.hass.callService("cover","open_cover_tilt",{entity_id:this.stateObj.entity_id});}},{kind:"method",key:"_onCloseTiltTap",value:function _onCloseTiltTap(ev){ev.stopPropagation();this.hass.callService("cover","close_cover_tilt",{entity_id:this.stateObj.entity_id});}},{kind:"method",key:"_onStopTiltTap",value:function _onStopTiltTap(ev){ev.stopPropagation();this.hass.callService("cover","stop_cover_tilt",{entity_id:this.stateObj.entity_id});}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        white-space: nowrap;
      }
      .invisible {
        visibility: hidden !important;
      }
    `;}}]};},s$2);

_decorate([n$1("state-card-cover")],function(_initialize,_LitElement){class StateCardCover extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateCardCover,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateObj",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"inDialog",value(){return false;}},{kind:"method",key:"render",value:function render(){return $$2`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${this.stateObj}
          .inDialog=${this.inDialog}
        ></state-info>
        <!-- <ha-cover-controls
          .hass=${this.hass}
          .hidden=${isTiltOnly(this.stateObj)}
          .stateObj=${this.stateObj}
        ></ha-cover-controls>
        <ha-cover-tilt-controls
          .hass=${this.hass}
          .hidden=${!isTiltOnly(this.stateObj)}
          .stateObj=${this.stateObj}
        ></ha-cover-tilt-controls> -->
      </div>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r$2`
        :host {
          line-height: 1.5;
        }
      `];}}]};},s$2);

const FORMATS={date:formatDate,datetime:formatDateTime,time:formatTime};const INTERVAL_FORMAT=["relative","total"];_decorate([n$1("hui-timestamp-display")],function(_initialize,_LitElement){class HuiTimestampDisplay extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiTimestampDisplay,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"ts",value:void 0},{kind:"field",decorators:[e$3()],key:"format",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"capitalize",value(){return false;}},{kind:"field",decorators:[t$1()],key:"_relative",value:void 0},{kind:"field",key:"_connected",value:void 0},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HuiTimestampDisplay.prototype),"connectedCallback",this).call(this);this._connected=true;this._startInterval();}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HuiTimestampDisplay.prototype),"disconnectedCallback",this).call(this);this._connected=false;this._clearInterval();}},{kind:"method",key:"render",value:function render(){if(!this.ts||!this.hass){return $$2``;}if(isNaN(this.ts.getTime())){return $$2`${this.hass.localize("ui.panel.lovelace.components.timestamp-display.invalid")}`;}const format=this._format;if(INTERVAL_FORMAT.includes(format)){return $$2` ${this._relative} `;}if(format in FORMATS){return $$2` ${FORMATS[format](this.ts,this.hass.locale)} `;}return $$2`${this.hass.localize("ui.panel.lovelace.components.timestamp-display.invalid_format")}`;}},{kind:"method",key:"updated",value:function updated(changedProperties){_get(_getPrototypeOf(HuiTimestampDisplay.prototype),"updated",this).call(this,changedProperties);if(!changedProperties.has("format")||!this._connected){return;}if(INTERVAL_FORMAT.includes("relative")){this._startInterval();}else {this._clearInterval();}}},{kind:"get",key:"_format",value:function _format(){return this.format||"relative";}},{kind:"method",key:"_startInterval",value:function _startInterval(){this._clearInterval();if(this._connected&&INTERVAL_FORMAT.includes(this._format)){this._updateRelative();this._interval=window.setInterval(()=>this._updateRelative(),1000);}}},{kind:"method",key:"_clearInterval",value:function _clearInterval(){if(this._interval){clearInterval(this._interval);this._interval=undefined;}}},{kind:"method",key:"_updateRelative",value:function _updateRelative(){if(this.ts&&this.hass.localize){this._relative=this._format==="relative"?relativeTime(this.ts,this.hass.locale):relativeTime(new Date(),this.hass.locale,this.ts,false);this._relative=this.capitalize?capitalizeFirstLetter(this._relative):this._relative;}}}]};},s$2);

_decorate([n$1("state-card-display")],function(_initialize,_LitElement){class StateCardDisplay extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateCardDisplay,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateObj",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"inDialog",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,reflect:true})],key:"rtl",value(){return false;}},{kind:"method",key:"render",value:// property used only in CSS
function render(){return $$2`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${this.stateObj}
          .inDialog=${this.inDialog}
        >
        </state-info>
        <div
          class="state ${o$1({"has-unit_of_measurement":"unit_of_measurement"in this.stateObj.attributes})}"
        >
          ${computeDomain(this.stateObj.entity_id)==="sensor"&&this.stateObj.attributes.device_class===SENSOR_DEVICE_CLASS_TIMESTAMP&&!UNAVAILABLE_STATES.includes(this.stateObj.state)?$$2` <hui-timestamp-display
                .hass=${this.hass}
                .ts=${new Date(this.stateObj.state)}
                format="datetime"
                capitalize
              ></hui-timestamp-display>`:computeStateDisplay(this.hass.localize,this.stateObj,this.hass.locale)}
        </div>
      </div>
    `;}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(StateCardDisplay.prototype),"updated",this).call(this,changedProps);if(!changedProps.has("hass")){return;}const oldHass=changedProps.get("hass");if(!oldHass||oldHass.language!==this.hass.language){this.rtl=computeRTL(this.hass);}}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r$2`
        :host([rtl]) {
          direction: rtl;
          text-align: right;
        }

        state-info {
          flex: 1 1 auto;
          min-width: 0;
        }
        .state {
          color: var(--primary-text-color);
          margin-left: 16px;
          text-align: right;
          flex: 0 0 auto;
          overflow-wrap: break-word;
        }
        :host([rtl]) .state {
          margin-right: 16px;
          margin-left: 0;
          text-align: left;
        }

        .state.has-unit_of_measurement {
          white-space: nowrap;
        }
      `];}}]};},s$2);

_decorate([n$1("state-card-input_button")],function(_initialize,_LitElement){class StateCardInputButton extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateCardInputButton,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"stateObj",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"inDialog",value(){return false;}},{kind:"method",key:"render",value:function render(){const stateObj=this.stateObj;return $$2`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${stateObj}
          .inDialog=${this.inDialog}
        ></state-info>
        <mwc-button
          @click=${this._pressButton}
          .disabled=${stateObj.state===UNAVAILABLE}
        >
          ${this.hass.localize("ui.card.button.press")}
        </mwc-button>
      </div>
    `;}},{kind:"method",key:"_pressButton",value:function _pressButton(ev){ev.stopPropagation();this.hass.callService("input_button","press",{entity_id:this.stateObj.entity_id});}},{kind:"get",static:true,key:"styles",value:function styles(){return haStyle;}}]};},s$2);

var ORPHANS=new Set();/**
 * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
 * coordinate the flow of resize events between "resizers" (elements that
 *control the size or hidden state of their children) and "resizables" (elements
 *that need to be notified when they are resized or un-hidden by their parents
 *in order to take action on their new measurements).
 *
 * Elements that perform measurement should add the `IronResizableBehavior`
 *behavior to their element definition and listen for the `iron-resize` event on
 *themselves. This event will be fired when they become showing after having
 *been hidden, when they are resized explicitly by another resizable, or when
 *the window has been resized.
 *
 * Note, the `iron-resize` event is non-bubbling.
 *
 * @polymerBehavior
 * @demo demo/index.html
 **/const IronResizableBehavior={properties:{/**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */_parentResizable:{type:Object,observer:'_parentResizableChanged'},/**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */_notifyingDescendant:{type:Boolean,value:false}},listeners:{'iron-request-resize-notifications':'_onIronRequestResizeNotifications'},created:function(){// We don't really need property effects on these, and also we want them
// to be created before the `_parentResizable` observer fires:
this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this);},attached:function(){this._requestResizeNotifications();},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this);}else {ORPHANS.delete(this);window.removeEventListener('resize',this._boundNotifyResize);}this._parentResizable=null;},/**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */notifyResize:function(){if(!this.isAttached){return;}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable);}},this);this._fireResize();},/**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this);}this._parentResizable=parentResizable;if(parentResizable&&parentResizable._interestedResizables.indexOf(this)===-1){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this);}},/**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(index>-1){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target);}},/**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_subscribeIronResize:function(target){target.addEventListener('iron-resize',this._boundOnDescendantIronResize);},/**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_unsubscribeIronResize:function(target){target.removeEventListener('iron-resize',this._boundOnDescendantIronResize);},/**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */resizerShouldNotify:function(element){return true;},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return;}// no need to use this during shadow dom because of event retargeting
if(!useShadow){this._fireResize();}},_fireResize:function(){this.fire('iron-resize',null,{node:this,bubbles:false});},_onIronRequestResizeNotifications:function(event){var target=/** @type {!EventTarget} */dom(event).rootTarget;if(target===this){return;}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation();},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener('resize',this._boundNotifyResize);}},_notifyDescendant:function(descendant){// NOTE(cdata): In IE10, attached is fired on children first, so it's
// important not to notify them if the parent is not attached yet (or
// else they will get redundantly notified when the parent attaches).
if(!this.isAttached){return;}this._notifyingDescendant=true;descendant.notifyResize();this._notifyingDescendant=false;},_requestResizeNotifications:function(){if(!this.isAttached){return;}if(document.readyState==='loading'){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener('readystatechange',function readystatechanged(){document.removeEventListener('readystatechange',readystatechanged);_requestResizeNotifications();});}else {this._findParent();if(!this._parentResizable){// If this resizable is an orphan, tell other orphans to try to find
// their parent again, in case it's this resizable.
ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent();}},this);window.addEventListener('resize',this._boundNotifyResize);this.notifyResize();}else {// If this resizable has a parent, tell other child resizables of
// that parent to try finding their parent again, in case it's this
// resizable.
this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent();}},this);}}},_findParent:function(){this.assignParentResizable(null);this.fire('iron-request-resize-notifications',null,{node:this,bubbles:true,cancelable:true});if(!this._parentResizable){ORPHANS.add(this);}else {ORPHANS.delete(this);}}};

class StateCardInputNumber extends mixinBehaviors([IronResizableBehavior],PolymerElement){static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-slider {
          margin-left: auto;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          text-align: right;
          line-height: 40px;
        }
        .sliderstate {
          min-width: 45px;
        }
        ha-slider[hidden] {
          display: none !important;
        }
        ha-textfield {
          text-align: right;
          margin-left: auto;
        }
      </style>

      <div class="horizontal justified layout" id="input_number_card">
        ${this.stateInfoTemplate}
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          step="[[step]]"
          hidden="[[hiddenslider]]"
          pin
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          id="slider"
          ignore-bar-touch=""
        >
        </ha-slider>
        <ha-textfield
          no-label-float=""
          auto-validate=""
          pattern="[0-9]+([\\.][0-9]+)?"
          step="[[step]]"
          min="[[min]]"
          max="[[max]]"
          value="[[value]]"
          type="number"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          on-input="onInput"
          hidden="[[hiddenbox]]"
          suffix="[[stateObj.attributes.unit_of_measurement]]"
        >
        </ha-textfield>
        <div
          id="sliderstate"
          class="state sliderstate"
          hidden="[[hiddenslider]]"
        >
          [[formattedState]]
        </div>
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}ready(){super.ready();if(typeof ResizeObserver==="function"){const ro=new ResizeObserver(entries=>{entries.forEach(()=>{this.hiddenState();});});ro.observe(this.$.input_number_card);}else {this.addEventListener("iron-resize",this.hiddenState);}}static get properties(){return {hass:Object,hiddenbox:{type:Boolean,value:true},hiddenslider:{type:Boolean,value:true},inDialog:{type:Boolean,value:false},stateObj:{type:Object,observer:"stateObjectChanged"},min:{type:Number,value:0},max:{type:Number,value:100},maxlength:{type:Number,value:3},step:Number,value:Number,formattedState:String,mode:String};}hiddenState(){if(this.mode!=="slider")return;const sliderwidth=this.$.slider.offsetWidth;if(sliderwidth<100){this.$.sliderstate.hidden=true;}else if(sliderwidth>=145){this.$.sliderstate.hidden=false;}}stateObjectChanged(newVal){const prevMode=this.mode;this.setProperties({min:Number(newVal.attributes.min),max:Number(newVal.attributes.max),step:Number(newVal.attributes.step),value:Number(newVal.state),formattedState:computeStateDisplay(this.hass.localize,newVal,this.hass.locale,newVal.state),mode:String(newVal.attributes.mode),maxlength:String(newVal.attributes.max).length,hiddenbox:newVal.attributes.mode!=="box",hiddenslider:newVal.attributes.mode!=="slider"});if(this.mode==="slider"&&prevMode!=="slider"){this.hiddenState();}}onInput(ev){this.value=ev.target.value;}selectedValueChanged(){if(this.value===Number(this.stateObj.state)){return;}this.hass.callService("input_number","set_value",{value:this.value,entity_id:this.stateObj.entity_id});}stopPropagation(ev){ev.stopPropagation();}}customElements.define("state-card-input_number",StateCardInputNumber);

const setInputSelectOption=(hass,entity,option)=>hass.callService("input_select","select_option",{option,entity_id:entity});

_decorate([n$1("state-card-input_select")],function(_initialize,_LitElement){class StateCardInputSelect extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateCardInputSelect,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function render(){return $$2`
      <state-badge .stateObj=${this.stateObj}></state-badge>
      <ha-select
        .label=${computeStateName(this.stateObj)}
        .value=${this.stateObj.state}
        .disabled=${UNAVAILABLE_STATES.includes(this.stateObj.state)}
        naturalMenuWidth
        fixedMenuPosition
        @selected=${this._selectedOptionChanged}
        @closed=${stopPropagation}
      >
        ${this.stateObj.attributes.options.map(option=>$$2`<mwc-list-item .value=${option}>${option}</mwc-list-item>`)}
      </ha-select>
    `;}},{kind:"method",key:"_selectedOptionChanged",value:async function _selectedOptionChanged(ev){const option=ev.target.value;if(option===this.stateObj.state){return;}await setInputSelectOption(this.hass,this.stateObj.entity_id,option);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: flex;
      }

      state-badge {
        float: left;
        margin-top: 10px;
      }

      ha-select {
        width: 100%;
      }
    `;}}]};},s$2);

class StateCardInputText extends PolymerElement{static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-textfield {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-textfield
          minlength="[[stateObj.attributes.min]]"
          maxlength="[[stateObj.attributes.max]]"
          value="[[value]]"
          auto-validate="[[stateObj.attributes.pattern]]"
          pattern="[[stateObj.attributes.pattern]]"
          type="[[stateObj.attributes.mode]]"
          on-input="onInput"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          placeholder="(empty value)"
        >
        </ha-textfield>
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,inDialog:{type:Boolean,value:false},stateObj:{type:Object,observer:"stateObjectChanged"},pattern:String,value:String};}stateObjectChanged(newVal){this.value=newVal.state;}onInput(ev){this.value=ev.target.value;}selectedValueChanged(){if(this.value===this.stateObj.state){return;}this.hass.callService("input_text","set_value",{value:this.value,entity_id:this.stateObj.entity_id});}stopPropagation(ev){ev.stopPropagation();}}customElements.define("state-card-input_text",StateCardInputText);

/*
 * @appliesMixin LocalizeMixin
 */class StateCardLock extends LocalizeMixin(PolymerElement){static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button
          on-click="_callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="_callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},inDialog:{type:Boolean,value:false},isLocked:Boolean};}_stateObjChanged(newVal){if(newVal){this.isLocked=newVal.state==="locked";}}_callService(ev){ev.stopPropagation();const service=ev.target.dataset.service;const data={entity_id:this.stateObj.entity_id};this.hass.callService("lock",service,data);}}customElements.define("state-card-lock",StateCardLock);

class MediaPlayerEntity{constructor(hass,stateObj){this.hass=hass;this.stateObj=stateObj;this._attr=stateObj.attributes;this._feat=this._attr.supported_features;}get isOff(){return this.stateObj.state==="off";}get isIdle(){return this.stateObj.state==="idle";}get isMuted(){return this._attr.is_volume_muted;}get isPaused(){return this.stateObj.state==="paused";}get isPlaying(){return this.stateObj.state==="playing";}get isMusic(){return this._attr.media_content_type==="music";}get isTVShow(){return this._attr.media_content_type==="tvshow";}get hasMediaControl(){return ["playing","paused","unknown","on"].indexOf(this.stateObj.state)!==-1;}get volumeSliderValue(){return this._attr.volume_level*100;}get showProgress(){return (this.isPlaying||this.isPaused)&&"media_duration"in this.stateObj.attributes&&"media_position"in this.stateObj.attributes&&"media_position_updated_at"in this.stateObj.attributes;}get currentProgress(){let progress=this._attr.media_position;if(this.isPlaying){progress+=(Date.now()-new Date(this._attr.media_position_updated_at).getTime())/1000.0;}return progress;}get supportsPause(){return supportsFeature(this.stateObj,1);}get supportsVolumeSet(){return supportsFeature(this.stateObj,4);}get supportsVolumeMute(){return supportsFeature(this.stateObj,8);}get supportsPreviousTrack(){return supportsFeature(this.stateObj,16);}get supportsNextTrack(){return supportsFeature(this.stateObj,32);}get supportsTurnOn(){return supportsFeature(this.stateObj,128);}get supportsTurnOff(){return supportsFeature(this.stateObj,256);}get supportsPlayMedia(){return supportsFeature(this.stateObj,512);}get supportsVolumeButtons(){return supportsFeature(this.stateObj,1024);}get supportsSelectSource(){return supportsFeature(this.stateObj,2048);}get supportsSelectSoundMode(){return supportsFeature(this.stateObj,65536);}get supportsPlay(){return supportsFeature(this.stateObj,16384);}get primaryTitle(){return cleanupMediaTitle(this._attr.media_title);}get secondaryTitle(){if(this.isMusic){return this._attr.media_artist;}if(this.isTVShow){let text=this._attr.media_series_title;if(this._attr.media_season){text+=" S"+this._attr.media_season;if(this._attr.media_episode){text+="E"+this._attr.media_episode;}}return text;}if(this._attr.app_name){return this._attr.app_name;}return "";}get source(){return this._attr.source;}get sourceList(){return this._attr.source_list;}get soundMode(){return this._attr.sound_mode;}get soundModeList(){return this._attr.sound_mode_list;}mediaPlayPause(){this.callService("media_play_pause");}nextTrack(){this.callService("media_next_track");}playbackControl(){this.callService("media_play_pause");}previousTrack(){this.callService("media_previous_track");}setVolume(volume){this.callService("volume_set",{volume_level:volume});}togglePower(){if(this.isOff){this.turnOn();}else {this.turnOff();}}turnOff(){this.callService("turn_off");}turnOn(){this.callService("turn_on");}volumeDown(){this.callService("volume_down");}volumeMute(mute){if(!this.supportsVolumeMute){throw new Error("Muting volume not supported");}this.callService("volume_mute",{is_volume_muted:mute});}volumeUp(){this.callService("volume_up");}selectSource(source){this.callService("select_source",{source});}selectSoundMode(soundMode){this.callService("select_sound_mode",{sound_mode:soundMode});}// helper method
callService(service,data={}){data.entity_id=this.stateObj.entity_id;this.hass.callService("media_player",service,data);}}

/*
 * @appliesMixin LocalizeMixin
 */class StateCardMediaPlayer extends LocalizeMixin(PolymerElement){static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }

        .state {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          margin-left: 16px;
          text-align: right;
        }

        .main-text {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
        }

        .main-text[take-height] {
          line-height: 40px;
        }

        .secondary-text {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">
          <div class="main-text" take-height$="[[!playerObj.secondaryTitle]]">
            [[computePrimaryText(localize, playerObj)]]
          </div>
          <div class="secondary-text">[[playerObj.secondaryTitle]]</div>
        </div>
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,stateObj:Object,inDialog:{type:Boolean,value:false},playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)"}};}computePlayerObj(hass,stateObj){return new MediaPlayerEntity(hass,stateObj);}computePrimaryText(localize,playerObj){return playerObj.primaryTitle||computeStateDisplay(localize,playerObj.stateObj,this.hass.locale);}}customElements.define("state-card-media_player",StateCardMediaPlayer);

class StateCardNumber extends mixinBehaviors([IronResizableBehavior],PolymerElement){static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-slider {
          margin-left: auto;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          text-align: right;
          line-height: 40px;
        }
        .sliderstate {
          min-width: 45px;
        }
        ha-slider[hidden] {
          display: none !important;
        }
        ha-textfield {
          text-align: right;
          margin-left: auto;
        }
      </style>

      <div class="horizontal justified layout" id="number_card">
        ${this.stateInfoTemplate}
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          step="[[step]]"
          hidden="[[hiddenslider]]"
          pin
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          id="slider"
          ignore-bar-touch=""
        >
        </ha-slider>
        <ha-textfield
          auto-validate=""
          pattern="[0-9]+([\\.][0-9]+)?"
          step="[[step]]"
          min="[[min]]"
          max="[[max]]"
          value="[[value]]"
          type="number"
          on-input="onInput"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          hidden="[[hiddenbox]]"
        >
        </ha-textfield>
        <div class="state" hidden="[[hiddenbox]]">
          [[stateObj.attributes.unit_of_measurement]]
        </div>
        <div
          id="sliderstate"
          class="state sliderstate"
          hidden="[[hiddenslider]]"
        >
          [[value]] [[stateObj.attributes.unit_of_measurement]]
        </div>
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}ready(){super.ready();if(typeof ResizeObserver==="function"){const ro=new ResizeObserver(entries=>{entries.forEach(()=>{this.hiddenState();});});ro.observe(this.$.number_card);}else {this.addEventListener("iron-resize",()=>this.hiddenState());}}static get properties(){return {hass:Object,hiddenbox:{type:Boolean,value:true},hiddenslider:{type:Boolean,value:true},inDialog:{type:Boolean,value:false},stateObj:{type:Object,observer:"stateObjectChanged"},min:{type:Number,value:0},max:{type:Number,value:100},maxlength:{type:Number,value:3},step:Number,value:Number,mode:String};}hiddenState(){if(this.mode!=="slider")return;const sliderwidth=this.$.slider.offsetWidth;if(sliderwidth<100){this.$.sliderstate.hidden=true;}else if(sliderwidth>=145){this.$.sliderstate.hidden=false;}}stateObjectChanged(newVal){const prevMode=this.mode;const min=Number(newVal.attributes.min);const max=Number(newVal.attributes.max);const step=Number(newVal.attributes.step);const range=(max-min)/step;this.setProperties({min:min,max:max,step:step,value:Number(newVal.state),mode:String(newVal.attributes.mode),maxlength:String(newVal.attributes.max).length,hiddenbox:newVal.attributes.mode==="slider"||newVal.attributes.mode==="auto"&&range<=256,hiddenslider:newVal.attributes.mode==="box"||newVal.attributes.mode==="auto"&&range>256});if(this.mode==="slider"&&prevMode!=="slider"){this.hiddenState();}}onInput(ev){this.value=ev.target.value;}selectedValueChanged(){if(this.value===Number(this.stateObj.state)){return;}this.hass.callService("number","set_value",{value:this.value,entity_id:this.stateObj.entity_id});}stopPropagation(ev){ev.stopPropagation();}}customElements.define("state-card-number",StateCardNumber);

const activateScene=(hass,entityId)=>hass.callService("scene","turn_on",{entity_id:entityId});

/*
 * @appliesMixin LocalizeMixin
 */class StateCardScene extends LocalizeMixin(PolymerElement){static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button on-click="_activateScene"
          >[[localize('ui.card.scene.activate')]]</mwc-button
        >
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,stateObj:Object,inDialog:{type:Boolean,value:false}};}_activateScene(ev){ev.stopPropagation();activateScene(this.hass,this.stateObj.entity_id);}}customElements.define("state-card-scene",StateCardScene);

_decorate([n$1("state-card-script")],function(_initialize,_LitElement){class StateCardScript extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateCardScript,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"stateObj",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"inDialog",value(){return false;}},{kind:"method",key:"render",value:function render(){const stateObj=this.stateObj;return $$2`
      <div class="horizontal justified layout">
        <state-info
          .hass=${this.hass}
          .stateObj=${stateObj}
          .inDialog=${this.inDialog}
        ></state-info>
        ${stateObj.state==="on"?$$2`<mwc-button @click=${this._cancelScript}>
              ${stateObj.attributes.mode!=="single"&&(stateObj.attributes.current||0)>0?this.hass.localize("ui.card.script.cancel_multiple","number",stateObj.attributes.current):this.hass.localize("ui.card.script.cancel")}
            </mwc-button>`:""}
        ${stateObj.state==="off"||stateObj.attributes.max?$$2`<mwc-button
              @click=${this._runScript}
              .disabled=${UNAVAILABLE_STATES.includes(stateObj.state)||!canRun(stateObj)}
            >
              ${this.hass.localize("ui.card.script.run")}
            </mwc-button>`:""}
      </div>
    `;}},{kind:"method",key:"_cancelScript",value:function _cancelScript(ev){ev.stopPropagation();this._callService("turn_off");}},{kind:"method",key:"_runScript",value:function _runScript(ev){ev.stopPropagation();this._callService("turn_on");}},{kind:"method",key:"_callService",value:function _callService(service){this.hass.callService("script",service,{entity_id:this.stateObj.entity_id});}},{kind:"get",static:true,key:"styles",value:function styles(){return haStyle;}}]};},s$2);

const setSelectOption=(hass,entity,option)=>hass.callService("select","select_option",{option},{entity_id:entity});

_decorate([n$1("state-card-select")],function(_initialize,_LitElement){class StateCardSelect extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateCardSelect,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function render(){return $$2`
      <state-badge .stateObj=${this.stateObj}></state-badge>
      <ha-select
        .value=${this.stateObj.state}
        .label=${computeStateName(this.stateObj)}
        .disabled=${this.stateObj.state===UNAVAILABLE}
        naturalMenuWidth
        fixedMenuPosition
        @selected=${this._selectedOptionChanged}
        @closed=${stopPropagation}
      >
        ${this.stateObj.attributes.options.map(option=>$$2`
              <mwc-list-item .value=${option}>
                ${this.stateObj.attributes.device_class&&this.hass.localize(`component.select.state.${this.stateObj.attributes.device_class}.${option}`)||this.hass.localize(`component.select.state._.${option}`)||option}
              </mwc-list-item>
            `)}
      </ha-select>
    `;}},{kind:"method",key:"_selectedOptionChanged",value:function _selectedOptionChanged(ev){const option=ev.target.value;if(option===this.stateObj.state){return;}setSelectOption(this.hass,this.stateObj.entity_id,option);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: flex;
      }

      state-badge {
        float: left;
        margin-top: 10px;
      }

      ha-select {
        width: 100%;
      }
    `;}}]};},s$2);

function durationToSeconds(duration){const parts=duration.split(":").map(Number);return parts[0]*3600+parts[1]*60+parts[2];}

const leftPad=num=>num<10?`0${num}`:num;function secondsToDuration(d){const h=Math.floor(d/3600);const m=Math.floor(d%3600/60);const s=Math.floor(d%3600%60);if(h>0){return `${h}:${leftPad(m)}:${leftPad(s)}`;}if(m>0){return `${m}:${leftPad(s)}`;}if(s>0){return ""+s;}return null;}

const timerTimeRemaining=stateObj=>{if(!stateObj.attributes.remaining){return undefined;}let timeRemaining=durationToSeconds(stateObj.attributes.remaining);if(stateObj.state==="active"){const now=new Date().getTime();const madeActive=new Date(stateObj.last_changed).getTime();timeRemaining=Math.max(timeRemaining-(now-madeActive)/1000,0);}return timeRemaining;};const computeDisplayTimer=(hass,stateObj,timeRemaining)=>{if(!stateObj){return null;}if(stateObj.state==="idle"||timeRemaining===0){return computeStateDisplay(hass.localize,stateObj,hass.locale);}let display=secondsToDuration(timeRemaining||0);if(stateObj.state==="paused"){display=`${display} (${computeStateDisplay(hass.localize,stateObj,hass.locale)})`;}return display;};

class StateCardTimer extends PolymerElement{static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          margin-left: 16px;
          text-align: right;
          line-height: 40px;
          white-space: nowrap;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">[[_displayState(timeRemaining, stateObj)]]</div>
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},timeRemaining:Number,inDialog:{type:Boolean,value:false}};}connectedCallback(){super.connectedCallback();this.startInterval(this.stateObj);}disconnectedCallback(){super.disconnectedCallback();this.clearInterval();}stateObjChanged(stateObj){this.startInterval(stateObj);}clearInterval(){if(this._updateRemaining){clearInterval(this._updateRemaining);this._updateRemaining=null;}}startInterval(stateObj){this.clearInterval();this.calculateRemaining(stateObj);if(stateObj.state==="active"){this._updateRemaining=setInterval(()=>this.calculateRemaining(this.stateObj),1000);}}calculateRemaining(stateObj){this.timeRemaining=timerTimeRemaining(stateObj);}_displayState(timeRemaining,stateObj){return computeDisplayTimer(this.hass,stateObj,timeRemaining);}}customElements.define("state-card-timer",StateCardTimer);

class StateCardToggle extends PolymerElement{static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-entity-toggle {
          margin: -4px -16px -4px 0;
          padding: 4px 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-entity-toggle
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></ha-entity-toggle>
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,stateObj:Object,inDialog:{type:Boolean,value:false}};}}customElements.define("state-card-toggle",StateCardToggle);

const STATES_INTERCEPTABLE={cleaning:{action:"return_to_base",service:"return_to_base"},docked:{action:"start_cleaning",service:"start"},idle:{action:"start_cleaning",service:"start"},off:{action:"turn_on",service:"turn_on"},on:{action:"turn_off",service:"turn_off"},paused:{action:"resume_cleaning",service:"start"}};/*
 * @appliesMixin LocalizeMixin
 */class HaVacuumState extends LocalizeMixin(PolymerElement){static get template(){return html`
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
        mwc-button[disabled] {
          background-color: transparent;
          color: var(--secondary-text-color);
        }
      </style>

      <mwc-button on-click="_callService" disabled="[[!_interceptable]]"
        >[[_computeLabel(stateObj.state, _interceptable)]]</mwc-button
      >
    `;}static get properties(){return {hass:Object,stateObj:Object,_interceptable:{type:Boolean,computed:"_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)"}};}_computeInterceptable(state,supportedFeatures){return state in STATES_INTERCEPTABLE&&supportedFeatures!==0;}_computeLabel(state,interceptable){return interceptable?this.localize(`ui.card.vacuum.actions.${STATES_INTERCEPTABLE[state].action}`):this.localize(`component.vacuum._.${state}`);}_callService(ev){ev.stopPropagation();const stateObj=this.stateObj;const service=STATES_INTERCEPTABLE[stateObj.state].service;this.hass.callService("vacuum",service,{entity_id:stateObj.entity_id});}}customElements.define("ha-vacuum-state",HaVacuumState);

class StateCardVacuum extends PolymerElement{static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-vacuum-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-vacuum-state>
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,stateObj:Object,inDialog:{type:Boolean,value:false}};}}customElements.define("state-card-vacuum",StateCardVacuum);

/*
 * @appliesMixin LocalizeMixin
 */class HaWaterHeaterState extends LocalizeMixin(PolymerElement){static get template(){return html`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }
      </style>

      <div class="target">
        <span class="state-label"> [[_localizeState(stateObj)]] </span>
        [[computeTarget(hass, stateObj)]]
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.water_heater.currently')]]: [[currentStatus]]
        </div>
      </template>
    `;}static get properties(){return {hass:Object,stateObj:Object};}computeTarget(hass,stateObj){if(!hass||!stateObj)return null;// We're using "!= null" on purpose so that we match both null and undefined.
if(stateObj.attributes.target_temp_low!=null&&stateObj.attributes.target_temp_high!=null){return `${formatNumber(stateObj.attributes.target_temp_low,this.hass.locale)} – ${formatNumber(stateObj.attributes.target_temp_high,this.hass.locale)} ${hass.config.unit_system.temperature}`;}if(stateObj.attributes.temperature!=null){return `${formatNumber(stateObj.attributes.temperature,this.hass.locale)} ${hass.config.unit_system.temperature}`;}return "";}_localizeState(stateObj){return computeStateDisplay(this.hass.localize,stateObj,this.hass.locale);}}customElements.define("ha-water_heater-state",HaWaterHeaterState);

class StateCardWaterHeater extends PolymerElement{static get template(){return html`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-water_heater-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-water_heater-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-water_heater-state>
      </div>
    `;}static get stateInfoTemplate(){return html`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;}static get properties(){return {hass:Object,stateObj:Object,inDialog:{type:Boolean,value:false}};}}customElements.define("state-card-water_heater",StateCardWaterHeater);

class StateCardContent extends PolymerElement{static get properties(){return {hass:Object,stateObj:Object,inDialog:{type:Boolean,value:false}};}static get observers(){return ["inputChanged(hass, inDialog, stateObj)"];}inputChanged(hass,inDialog,stateObj){let stateCard;if(!stateObj||!hass)return;if(stateObj.attributes&&"custom_ui_state_card"in stateObj.attributes){stateCard=stateObj.attributes.custom_ui_state_card;}else {stateCard="state-card-"+stateCardType(hass,stateObj);}dynamicContentUpdater(this,stateCard.toUpperCase(),{hass:hass,stateObj:stateObj,inDialog:inDialog});}}customElements.define("state-card-content",StateCardContent);/**    height: 50px;
    width: 62vw;  em telemovel */

_decorate([n$1("ha-expansion-panel")],function(_initialize,_LitElement){class HaExpansionPanel extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaExpansionPanel,d:[{kind:"field",decorators:[e$3({type:Boolean,reflect:true})],key:"expanded",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,reflect:true})],key:"outlined",value(){return false;}},{kind:"field",decorators:[e$3()],key:"header",value:void 0},{kind:"field",decorators:[e$3()],key:"secondary",value:void 0},{kind:"field",decorators:[t$1()],key:"_showContent",value(){return this.expanded;}},{kind:"field",decorators:[i$2(".container")],key:"_container",value:void 0},{kind:"method",key:"render",value:function render(){return $$2`
      <!-- <div
        id="summary"
        @click=${this._toggleContainer}
        @keydown=${this._toggleContainer}
        role="button"
        tabindex="0"
        aria-expanded=${this.expanded}
        aria-controls="sect1"
      >
        <slot class="header" name="header">
          ${this.header}
          <slot class="secondary" name="secondary">${this.secondary}</slot>
        </slot>
        <ha-svg-icon
          .path=${mdiChevronDown}
          class="summary-icon ${o$1({expanded:this.expanded})}"
        ></ha-svg-icon>
      </div>
      <div
        class="container ${o$1({expanded:this.expanded})}"
        @transitionend=${this._handleTransitionEnd}
        role="region"
        aria-labelledby="summary"
        aria-hidden=${!this.expanded}
        tabindex="-1"
      >
        ${this._showContent?$$2`<slot></slot>`:""}
      </div> -->
    `;}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){if(changedProps.has("expanded")&&this.expanded){this._showContent=this.expanded;}}},{kind:"method",key:"_handleTransitionEnd",value:function _handleTransitionEnd(){this._container.style.removeProperty("height");this._showContent=this.expanded;}},{kind:"method",key:"_toggleContainer",value:async function _toggleContainer(ev){if(ev.type==="keydown"&&ev.key!=="Enter"&&ev.key!==" "){return;}ev.preventDefault();const newExpanded=!this.expanded;fireEvent(this,"expanded-will-change",{expanded:newExpanded});if(newExpanded){this._showContent=true;// allow for dynamic content to be rendered
await nextRender();}const scrollHeight=this._container.scrollHeight;this._container.style.height=`${scrollHeight}px`;if(!newExpanded){setTimeout(()=>{this._container.style.height="0px";},0);}this.expanded=newExpanded;fireEvent(this,"expanded-changed",{expanded:this.expanded});}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: block;
      }

      :host([outlined]) {
        box-shadow: none;
        border-width: 1px;
        border-style: solid;
        border-color: var(
          --ha-card-border-color,
          var(--divider-color, #e0e0e0)
        );
        border-radius: var(--ha-card-border-radius, 4px);
      }

      #summary {
        display: flex;
        padding: var(--expansion-panel-summary-padding, 0 8px);
        min-height: 48px;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        font-weight: 500;
        outline: none;
      }

      #summary:focus {
        background: var(--input-fill-color);
      }

      .summary-icon {
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
        margin-left: auto;
      }

      .summary-icon.expanded {
        transform: rotate(180deg);
      }

      .container {
        padding: var(--expansion-panel-content-padding, 0 8px);
        overflow: hidden;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        height: 0px;
      }

      .container.expanded {
        max-width: 20px;
      }

      .header {
        display: block;
      }

      .secondary {
        display: block;
        color: var(--secondary-text-color);
        font-size: 12px;
      }
    `;}}]};},s$2);

_decorate([n$1("ha-attributes")],function(_initialize,_LitElement){class HaAttributes extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAttributes,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"stateObj",value:void 0},{kind:"field",decorators:[e$3({attribute:"extra-filters"})],key:"extraFilters",value:void 0},{kind:"field",decorators:[t$1()],key:"_expanded",value(){return false;}},{kind:"method",key:"render",value:function render(){if(!this.stateObj){return $$2``;}const attributes=this.computeDisplayAttributes(STATE_ATTRIBUTES.concat(this.extraFilters?this.extraFilters.split(","):[]));if(attributes.length===0){return $$2``;}return $$2`
      <ha-expansion-panel
        .header=${this.hass.localize("ui.components.attributes.expansion_header")}
        outlined
        @expanded-will-change=${this.expandedChanged}
      >
        <div class="attribute-container">
          ${this._expanded?$$2`
                ${attributes.map(attribute=>$$2`
                    <div class="data-entry">
                      <div class="key">${formatAttributeName(attribute)}</div>
                      <div class="value">
                        ${this.formatAttribute(attribute)}
                      </div>
                    </div>
                  `)}
              `:""}
        </div>
      </ha-expansion-panel>
      ${this.stateObj.attributes.attribution?$$2`
            <div class="attribution">
              ${this.stateObj.attributes.attribution}
            </div>
          `:""}
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r$2`
        .attribute-container {
          margin-bottom: 8px;
        }
        .data-entry {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .data-entry .value {
          max-width: 60%;
          overflow-wrap: break-word;
          text-align: right;
        }
        .key {
          flex-grow: 1;
        }
        .attribution {
          color: var(--secondary-text-color);
          text-align: center;
          margin-top: 16px;
        }
        pre {
          font-family: inherit;
          font-size: inherit;
          margin: 0px;
          overflow-wrap: break-word;
          white-space: pre-line;
        }
        hr {
          border-color: var(--divider-color);
          border-bottom: none;
          margin: 16px 0;
        }
      `];}},{kind:"method",key:"computeDisplayAttributes",value:function computeDisplayAttributes(filtersArray){if(!this.stateObj){return [];}return Object.keys(this.stateObj.attributes).filter(key=>filtersArray.indexOf(key)===-1);}},{kind:"method",key:"formatAttribute",value:function formatAttribute(attribute){if(!this.stateObj){return "—";}const value=this.stateObj.attributes[attribute];return formatAttributeValue(this.hass,value);}},{kind:"method",key:"expandedChanged",value:function expandedChanged(ev){this._expanded=ev.detail.expanded;}}]};},s$2);

_decorate([n$1("more-info-default")],function(_initialize,_LitElement){class MoreInfoDefault extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:MoreInfoDefault,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function render(){if(!this.hass||!this.stateObj){return $$2``;}return $$2`<ha-attributes
      .hass=${this.hass}
      .stateObj=${this.stateObj}
    ></ha-attributes>`;}}]};},s$2);

/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @description
 * Return the start of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */function startOfYesterday(){var now=new Date();var year=now.getFullYear();var month=now.getMonth();var day=now.getDate();var date=new Date(0);date.setFullYear(year,month,day-1);date.setHours(0,0,0,0);return date;}

// From: underscore.js https://github.com/jashkenas/underscore/blob/master/underscore.js
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `false for leading`. To disable execution on the trailing edge, ditto.
const throttle=(func,wait,leading=true,trailing=true)=>{let timeout;let previous=0;return (...args)=>{const later=()=>{previous=leading===false?0:Date.now();timeout=undefined;func(...args);};const now=Date.now();if(!previous&&leading===false){previous=now;}const remaining=wait-(now-previous);if(remaining<=0||remaining>wait){if(timeout){clearTimeout(timeout);timeout=undefined;}previous=now;func(...args);}else if(!timeout&&trailing!==false){timeout=window.setTimeout(later,remaining);}};};

const COLORS=["#44739e","#984ea3","#00d2d5","#ff7f00","#af8d00","#7f80cd","#b3e900","#c42e60","#a65628","#f781bf","#8dd3c7","#bebada","#fb8072","#80b1d3","#fdb462","#fccde5","#bc80bd","#ffed6f","#c4eaff","#cf8c00","#1b9e77","#d95f02","#e7298a","#e6ab02","#a6761d","#0097ff","#00d067","#f43600","#4ba93b","#5779bb","#927acc","#97ee3f","#bf3947","#9f5b00","#f48758","#8caed6","#f2b94f","#eff26e","#e43872","#d9b100","#9d7a00","#698cff","#d9d9d9","#00d27e","#d06800","#009f82","#c49200","#cbe8ff","#fecddf","#c27eb6","#8cd2ce","#c4b8d9","#f883b0","#a49100","#f48800","#27d0df","#a04a9b"];function getColorByIndex(index){return COLORS[index%COLORS.length];}function getGraphColorByIndex(index,style){// The CSS vars for the colors use range 1..n, so we need to adjust the index from the internal 0..n color index range.
return style.getPropertyValue(`--graph-color-${index+1}`)||getColorByIndex(index);}

const clamp=(value,min,max)=>Math.min(Math.max(value,min),max);// Variant that only applies the clamping to a border if the border is defined
const conditionalClamp=(value,min,max)=>{let result;result=min?Math.max(value,min):value;result=max?Math.min(value,max):value;return result;};

_decorate([n$1("ha-chart-base")],function(_initialize,_LitElement){class HaChartBase extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaChartBase,d:[{kind:"field",key:"chart",value:void 0},{kind:"field",decorators:[e$3({attribute:"chart-type",reflect:true})],key:"chartType",value(){return "line";}},{kind:"field",decorators:[e$3({attribute:false})],key:"data",value(){return {datasets:[]};}},{kind:"field",decorators:[e$3({attribute:false})],key:"options",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"plugins",value:void 0},{kind:"field",decorators:[e$3({type:Number})],key:"height",value:void 0},{kind:"field",decorators:[t$1()],key:"_chartHeight",value:void 0},{kind:"field",decorators:[t$1()],key:"_tooltip",value:void 0},{kind:"field",decorators:[t$1()],key:"_hiddenDatasets",value(){return new Set();}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this._setupChart();this.data.datasets.forEach((dataset,index)=>{if(dataset.hidden){this._hiddenDatasets.add(index);}});}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){_get(_getPrototypeOf(HaChartBase.prototype),"willUpdate",this).call(this,changedProps);if(!this.hasUpdated||!this.chart){return;}if(changedProps.has("plugins")){this.chart.destroy();this._setupChart();return;}if(changedProps.has("chartType")){this.chart.config.type=this.chartType;}if(changedProps.has("data")){if(this._hiddenDatasets.size){this.data.datasets.forEach((dataset,index)=>{dataset.hidden=this._hiddenDatasets.has(index);});}this.chart.data=this.data;}if(changedProps.has("options")){this.chart.options=this._createOptions();}this.chart.update("none");}},{kind:"method",key:"render",value:function render(){var _this$options,_this$options$plugins,_this$options$plugins2,_this$height;return $$2`
      ${((_this$options=this.options)===null||_this$options===void 0?void 0:(_this$options$plugins=_this$options.plugins)===null||_this$options$plugins===void 0?void 0:(_this$options$plugins2=_this$options$plugins.legend)===null||_this$options$plugins2===void 0?void 0:_this$options$plugins2.display)===true?$$2`<div class="chartLegend">
            <ul>
              ${this.data.datasets.map((dataset,index)=>$$2`<li
                  .datasetIndex=${index}
                  @click=${this._legendClick}
                  class=${o$1({hidden:this._hiddenDatasets.has(index)})}
                  .title=${dataset.label}
                >
                  <div
                    class="bullet"
                    style=${i$3({backgroundColor:dataset.backgroundColor,borderColor:dataset.borderColor})}
                  ></div>
                  <div class="label">${dataset.label}</div>
                </li>`)}
            </ul>
          </div>`:""}
      <div
        class="chartContainer"
        style=${i$3({height:`${(_this$height=this.height)!==null&&_this$height!==void 0?_this$height:this._chartHeight}px`,overflow:this._chartHeight?"initial":"hidden"})}
      >
        <canvas></canvas>
        ${this._tooltip?$$2`<div
              class="chartTooltip ${o$1({[this._tooltip.yAlign]:true})}"
              style=${i$3({top:this._tooltip.top,left:this._tooltip.left})}
            >
              <div class="title">${this._tooltip.title}</div>
              ${this._tooltip.beforeBody?$$2`<div class="beforeBody">
                    ${this._tooltip.beforeBody}
                  </div>`:""}
              <div>
                <ul>
                  ${this._tooltip.body.map((item,i)=>$$2`<li>
                      <div
                        class="bullet"
                        style=${i$3({backgroundColor:this._tooltip.labelColors[i].backgroundColor,borderColor:this._tooltip.labelColors[i].borderColor})}
                      ></div>
                      ${item.lines.join("\n")}
                    </li>`)}
                </ul>
              </div>
              ${this._tooltip.footer.length?$$2`<div class="footer">
                    ${this._tooltip.footer.map(item=>$$2`${item}<br />`)}
                  </div>`:""}
            </div>`:""}
      </div>
    `;}},{kind:"method",key:"_setupChart",value:async function _setupChart(){const ctx=this.renderRoot.querySelector("canvas").getContext("2d");const ChartConstructor=(await import('./chartjs-dev.js')).Chart;const computedStyles=getComputedStyle(this);ChartConstructor.defaults.borderColor=computedStyles.getPropertyValue("--divider-color");ChartConstructor.defaults.color=computedStyles.getPropertyValue("--secondary-text-color");this.chart=new ChartConstructor(ctx,{type:this.chartType,data:this.data,options:this._createOptions(),plugins:this._createPlugins()});}},{kind:"method",key:"_createOptions",value:function _createOptions(){var _this$options2,_this$options3,_this$options3$plugin,_this$options4,_this$options4$plugin;return {...this.options,plugins:{...((_this$options2=this.options)===null||_this$options2===void 0?void 0:_this$options2.plugins),tooltip:{...((_this$options3=this.options)===null||_this$options3===void 0?void 0:(_this$options3$plugin=_this$options3.plugins)===null||_this$options3$plugin===void 0?void 0:_this$options3$plugin.tooltip),enabled:false,external:context=>this._handleTooltip(context)},legend:{...((_this$options4=this.options)===null||_this$options4===void 0?void 0:(_this$options4$plugin=_this$options4.plugins)===null||_this$options4$plugin===void 0?void 0:_this$options4$plugin.legend),display:false}}};}},{kind:"method",key:"_createPlugins",value:function _createPlugins(){var _this$options5,_this$options5$plugin;return [...(this.plugins||[]),{id:"afterRenderHook",afterRender:chart=>{this._chartHeight=chart.height;},legend:{...((_this$options5=this.options)===null||_this$options5===void 0?void 0:(_this$options5$plugin=_this$options5.plugins)===null||_this$options5$plugin===void 0?void 0:_this$options5$plugin.legend),display:false}}];}},{kind:"method",key:"_legendClick",value:function _legendClick(ev){if(!this.chart){return;}const index=ev.currentTarget.datasetIndex;if(this.chart.isDatasetVisible(index)){this.chart.setDatasetVisibility(index,false);this._hiddenDatasets.add(index);}else {this.chart.setDatasetVisibility(index,true);this._hiddenDatasets.delete(index);}this.chart.update("none");this.requestUpdate("_hiddenDatasets");}},{kind:"method",key:"_handleTooltip",value:function _handleTooltip(context){if(context.tooltip.opacity===0){this._tooltip=undefined;return;}this._tooltip={...context.tooltip,top:this.chart.canvas.offsetTop+context.tooltip.caretY+12+"px",left:this.chart.canvas.offsetLeft+clamp(context.tooltip.caretX,100,this.clientWidth-100)-100+"px"};}},{kind:"field",key:"updateChart",value(){return mode=>{if(this.chart){this.chart.update(mode);}};}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: block;
      }
      .chartContainer {
        overflow: hidden;
        height: 0;
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      canvas {
        max-height: var(--chart-max-height, 400px);
      }
      .chartLegend {
        text-align: center;
      }
      .chartLegend li {
        cursor: pointer;
        display: inline-grid;
        grid-auto-flow: column;
        padding: 0 8px;
        box-sizing: border-box;
        align-items: center;
        color: var(--secondary-text-color);
      }
      .chartLegend .hidden {
        text-decoration: line-through;
      }
      .chartLegend .label {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .chartLegend .bullet,
      .chartTooltip .bullet {
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        display: inline-block;
        height: 16px;
        margin-right: 6px;
        width: 16px;
        flex-shrink: 0;
        box-sizing: border-box;
      }
      .chartTooltip .bullet {
        align-self: baseline;
      }
      :host([rtl]) .chartLegend .bullet,
      :host([rtl]) .chartTooltip .bullet {
        margin-right: inherit;
        margin-left: 6px;
      }
      .chartTooltip {
        padding: 8px;
        font-size: 90%;
        position: absolute;
        background: rgba(80, 80, 80, 0.9);
        color: white;
        border-radius: 4px;
        pointer-events: none;
        z-index: 1000;
        width: 200px;
        box-sizing: border-box;
      }
      :host([rtl]) .chartTooltip {
        direction: rtl;
      }
      .chartLegend ul,
      .chartTooltip ul {
        display: inline-block;
        padding: 0 0px;
        margin: 8px 0 0 0;
        width: 100%;
      }
      .chartTooltip ul {
        margin: 0 4px;
      }
      .chartTooltip li {
        display: flex;
        white-space: pre-line;
        align-items: center;
        line-height: 16px;
        padding: 4px 0;
      }
      .chartTooltip .title {
        text-align: center;
        font-weight: 500;
      }
      .chartTooltip .footer {
        font-weight: 500;
      }
      .chartTooltip .beforeBody {
        text-align: center;
        font-weight: 300;
        word-break: break-all;
      }
    `;}}]};},s$2);

const safeParseFloat=value=>{const parsed=parseFloat(value);return isFinite(parsed)?parsed:null;};let StateHistoryChartLine=_decorate(null,function(_initialize,_LitElement){class StateHistoryChartLine extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateHistoryChartLine,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"data",value(){return [];}},{kind:"field",decorators:[e$3()],key:"names",value(){return false;}},{kind:"field",decorators:[e$3()],key:"unit",value:void 0},{kind:"field",decorators:[e$3()],key:"identifier",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"isSingleDevice",value(){return false;}},{kind:"field",decorators:[e$3({attribute:false})],key:"endTime",value:void 0},{kind:"field",decorators:[t$1()],key:"_chartData",value:void 0},{kind:"field",decorators:[t$1()],key:"_chartOptions",value:void 0},{kind:"method",key:"render",value:function render(){return $$2`
      <ha-chart-base
        .data=${this._chartData}
        .options=${this._chartOptions}
        chart-type="line"
      ></ha-chart-base>
    `;}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){if(!this.hasUpdated){this._chartOptions={parsing:false,animation:false,scales:{x:{type:"time",adapters:{date:{locale:this.hass.locale}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:true},font:context=>context.tick&&context.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:"datetimeseconds"}},y:{ticks:{maxTicksLimit:7},title:{display:true,text:this.unit}}},plugins:{tooltip:{mode:"nearest",callbacks:{label:context=>`${context.dataset.label}: ${formatNumber(context.parsed.y,this.hass.locale)} ${this.unit}`}},filler:{propagate:true},legend:{display:!this.isSingleDevice,labels:{usePointStyle:true}}},hover:{mode:"nearest"},elements:{line:{tension:0.1,borderWidth:1.5},point:{hitRadius:5}},// @ts-expect-error
locale:numberFormatToLocale(this.hass.locale)};}if(changedProps.has("data")){this._generateData();}}},{kind:"method",key:"_generateData",value:function _generateData(){let colorIndex=0;const computedStyles=getComputedStyle(this);const entityStates=this.data;const datasets=[];let endTime;if(entityStates.length===0){return;}endTime=this.endTime||// Get the highest date from the last date of each device
new Date(Math.max(...entityStates.map(devSts=>new Date(devSts.states[devSts.states.length-1].last_changed).getTime())));if(endTime>new Date()){endTime=new Date();}const names=this.names||{};entityStates.forEach(states=>{const domain=states.domain;const name=names[states.entity_id]||states.name;// array containing [value1, value2, etc]
let prevValues=null;const data=[];const pushData=(timestamp,datavalues)=>{if(!datavalues)return;if(timestamp>endTime){// Drop data points that are after the requested endTime. This could happen if
// endTime is "now" and client time is not in sync with server time.
return;}data.forEach((d,i)=>{if(datavalues[i]===null&&prevValues&&prevValues[i]!==null){// null data values show up as gaps in the chart.
// If the current value for the dataset is null and the previous
// value of the data set is not null, then add an 'end' point
// to the chart for the previous value. Otherwise the gap will
// be too big. It will go from the start of the previous data
// value until the start of the next data value.
d.data.push({x:timestamp.getTime(),y:prevValues[i]});}d.data.push({x:timestamp.getTime(),y:datavalues[i]});});prevValues=datavalues;};const addDataSet=(nameY,fill=false,color)=>{if(!color){color=getGraphColorByIndex(colorIndex,computedStyles);colorIndex++;}data.push({label:nameY,fill:fill?"origin":false,borderColor:color,backgroundColor:color+"7F",stepped:"before",pointRadius:0,data:[]});};if(domain==="thermostat"||domain==="climate"||domain==="water_heater"){const hasHvacAction=states.states.some(entityState=>{var _entityState$attribut;return (_entityState$attribut=entityState.attributes)===null||_entityState$attribut===void 0?void 0:_entityState$attribut.hvac_action;});const isHeating=domain==="climate"&&hasHvacAction?entityState=>{var _entityState$attribut2;return ((_entityState$attribut2=entityState.attributes)===null||_entityState$attribut2===void 0?void 0:_entityState$attribut2.hvac_action)==="heating";}:entityState=>entityState.state==="heat";const isCooling=domain==="climate"&&hasHvacAction?entityState=>{var _entityState$attribut3;return ((_entityState$attribut3=entityState.attributes)===null||_entityState$attribut3===void 0?void 0:_entityState$attribut3.hvac_action)==="cooling";}:entityState=>entityState.state==="cool";const hasHeat=states.states.some(isHeating);const hasCool=states.states.some(isCooling);// We differentiate between thermostats that have a target temperature
// range versus ones that have just a target temperature
// Using step chart by step-before so manually interpolation not needed.
const hasTargetRange=states.states.some(entityState=>entityState.attributes&&entityState.attributes.target_temp_high!==entityState.attributes.target_temp_low);addDataSet(`${this.hass.localize("ui.card.climate.current_temperature",{name:name})}`);if(hasHeat){addDataSet(`${this.hass.localize("ui.card.climate.heating",{name:name})}`,true,computedStyles.getPropertyValue("--state-climate-heat-color"));// The "heating" series uses steppedArea to shade the area below the current
// temperature when the thermostat is calling for heat.
}if(hasCool){addDataSet(`${this.hass.localize("ui.card.climate.cooling",{name:name})}`,true,computedStyles.getPropertyValue("--state-climate-cool-color"));// The "cooling" series uses steppedArea to shade the area below the current
// temperature when the thermostat is calling for heat.
}if(hasTargetRange){addDataSet(`${this.hass.localize("ui.card.climate.target_temperature_mode",{name:name,mode:this.hass.localize("ui.card.climate.high")})}`);addDataSet(`${this.hass.localize("ui.card.climate.target_temperature_mode",{name:name,mode:this.hass.localize("ui.card.climate.low")})}`);}else {addDataSet(`${this.hass.localize("ui.card.climate.target_temperature_entity",{name:name})}`);}states.states.forEach(entityState=>{if(!entityState.attributes)return;const curTemp=safeParseFloat(entityState.attributes.current_temperature);const series=[curTemp];if(hasHeat){series.push(isHeating(entityState)?curTemp:null);}if(hasCool){series.push(isCooling(entityState)?curTemp:null);}if(hasTargetRange){const targetHigh=safeParseFloat(entityState.attributes.target_temp_high);const targetLow=safeParseFloat(entityState.attributes.target_temp_low);series.push(targetHigh,targetLow);pushData(new Date(entityState.last_changed),series);}else {const target=safeParseFloat(entityState.attributes.temperature);series.push(target);pushData(new Date(entityState.last_changed),series);}});}else if(domain==="humidifier"){addDataSet(`${this.hass.localize("ui.card.humidifier.target_humidity_entity",{name:name})}`);addDataSet(`${this.hass.localize("ui.card.humidifier.on_entity",{name:name})}`,true);states.states.forEach(entityState=>{if(!entityState.attributes)return;const target=safeParseFloat(entityState.attributes.humidity);const series=[target];series.push(entityState.state==="on"?target:null);pushData(new Date(entityState.last_changed),series);});}else {addDataSet(name);let lastValue;let lastDate;let lastNullDate=null;// Process chart data.
// When state is `unknown`, calculate the value and break the line.
states.states.forEach(entityState=>{const value=safeParseFloat(entityState.state);const date=new Date(entityState.last_changed);if(value!==null&&lastNullDate){var _lastDate;const dateTime=date.getTime();const lastNullDateTime=lastNullDate.getTime();const lastDateTime=(_lastDate=lastDate)===null||_lastDate===void 0?void 0:_lastDate.getTime();const tmpValue=(value-lastValue)*((lastNullDateTime-lastDateTime)/(dateTime-lastDateTime))+lastValue;pushData(lastNullDate,[tmpValue]);pushData(new Date(lastNullDateTime+1),[null]);pushData(date,[value]);lastDate=date;lastValue=value;lastNullDate=null;}else if(value!==null&&lastNullDate===null){pushData(date,[value]);lastDate=date;lastValue=value;}else if(value===null&&lastNullDate===null&&lastValue!==undefined){lastNullDate=date;}});}// Add an entry for final values
pushData(endTime,prevValues);// Concat two arrays
Array.prototype.push.apply(datasets,data);});this._chartData={datasets};}}]};},s$2);customElements.define("state-history-chart-line",StateHistoryChartLine);

/** Binary sensor device classes for which the static colors for on/off are NOT inverted.
 *  List the ones were "on" = good or normal state => should be rendered "green".
 *  Note: It is now a "not inverted" list (compared to the past) since we now have more inverted ones.
 */const BINARY_SENSOR_DEVICE_CLASS_COLOR_NOT_INVERTED=new Set(["battery_charging","connectivity","light","moving","plug","power","presence","running"]);const STATIC_STATE_COLORS=new Set(["on","off","home","not_home","unavailable","unknown","idle"]);const stateColorMap=new Map();let colorIndex=0;const invertOnOff=entityState=>entityState&&computeDomain(entityState.entity_id)==="binary_sensor"&&"device_class"in entityState.attributes&&!BINARY_SENSOR_DEVICE_CLASS_COLOR_NOT_INVERTED.has(entityState.attributes.device_class);const getColor=(stateString,entityState,computedStyles)=>{// Inversion is only valid for "on" or "off" state
if((stateString==="on"||stateString==="off")&&invertOnOff(entityState)){stateString=stateString==="on"?"off":"on";}if(stateColorMap.has(stateString)){return stateColorMap.get(stateString);}if(STATIC_STATE_COLORS.has(stateString)){const color=computedStyles.getPropertyValue(`--state-${stateString}-color`);stateColorMap.set(stateString,color);return color;}const color=getGraphColorByIndex(colorIndex,computedStyles);colorIndex++;stateColorMap.set(stateString,color);return color;};_decorate([n$1("state-history-chart-timeline")],function(_initialize,_LitElement){class StateHistoryChartTimeline extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateHistoryChartTimeline,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"data",value(){return [];}},{kind:"field",decorators:[e$3()],key:"names",value(){return false;}},{kind:"field",decorators:[e$3()],key:"unit",value:void 0},{kind:"field",decorators:[e$3()],key:"identifier",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"isSingleDevice",value(){return false;}},{kind:"field",decorators:[e$3({attribute:false})],key:"endTime",value:void 0},{kind:"field",decorators:[t$1()],key:"_chartData",value:void 0},{kind:"field",decorators:[t$1()],key:"_chartOptions",value:void 0},{kind:"method",key:"render",value:function render(){return $$2`
      <ha-chart-base
        .data=${this._chartData}
        .options=${this._chartOptions}
        .height=${this.data.length*30+30}
        chart-type="timeline"
      ></ha-chart-base>
    `;}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){if(!this.hasUpdated){this._chartOptions={maintainAspectRatio:false,parsing:false,animation:false,scales:{x:{type:"timeline",position:"bottom",adapters:{date:{locale:this.hass.locale}},ticks:{autoSkip:true,maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:true},font:context=>context.tick&&context.tick.major?{weight:"bold"}:{}},grid:{offset:false},time:{tooltipFormat:"datetimeseconds"}},y:{type:"category",barThickness:20,offset:true,grid:{display:false,drawBorder:false,drawTicks:false},ticks:{display:this.data.length!==1},afterSetDimensions:y=>{y.maxWidth=y.chart.width*0.18;},position:computeRTL(this.hass)?"right":"left"}},plugins:{tooltip:{mode:"nearest",callbacks:{title:context=>context[0].chart.data.labels[context[0].datasetIndex],beforeBody:context=>context[0].dataset.label||"",label:item=>{const d=item.dataset.data[item.dataIndex];return [d.label||"",formatDateTimeWithSeconds(d.start,this.hass.locale),formatDateTimeWithSeconds(d.end,this.hass.locale)];},labelColor:item=>({borderColor:item.dataset.data[item.dataIndex].color,backgroundColor:item.dataset.data[item.dataIndex].color})}},filler:{propagate:true}},// @ts-expect-error
locale:numberFormatToLocale(this.hass.locale)};}if(changedProps.has("data")){this._generateData();}}},{kind:"method",key:"_generateData",value:function _generateData(){const computedStyles=getComputedStyle(this);let stateHistory=this.data;if(!stateHistory){stateHistory=[];}const startTime=new Date(stateHistory.reduce((minTime,stateInfo)=>Math.min(minTime,new Date(stateInfo.data[0].last_changed).getTime()),new Date().getTime()));// end time is Math.max(startTime, last_event)
let endTime=this.endTime||new Date(stateHistory.reduce((maxTime,stateInfo)=>Math.max(maxTime,new Date(stateInfo.data[stateInfo.data.length-1].last_changed).getTime()),startTime.getTime()));if(endTime>new Date()){endTime=new Date();}const labels=[];const datasets=[];const names=this.names||{};// stateHistory is a list of lists of sorted state objects
stateHistory.forEach(stateInfo=>{let newLastChanged;let prevState=null;let locState=null;let prevLastChanged=startTime;const entityDisplay=names[stateInfo.entity_id]||stateInfo.name;const dataRow=[];stateInfo.data.forEach(entityState=>{let newState=entityState.state;const timeStamp=new Date(entityState.last_changed);if(!newState){newState=null;}if(timeStamp>endTime){// Drop datapoints that are after the requested endTime. This could happen if
// endTime is 'now' and client time is not in sync with server time.
return;}if(prevState===null){prevState=newState;locState=entityState.state_localize;prevLastChanged=new Date(entityState.last_changed);}else if(newState!==prevState){newLastChanged=new Date(entityState.last_changed);dataRow.push({start:prevLastChanged,end:newLastChanged,label:locState,color:getColor(prevState,this.hass.states[stateInfo.entity_id],computedStyles)});prevState=newState;locState=entityState.state_localize;prevLastChanged=newLastChanged;}});if(prevState!==null){dataRow.push({start:prevLastChanged,end:endTime,label:locState,color:getColor(prevState,this.hass.states[stateInfo.entity_id],computedStyles)});}datasets.push({data:dataRow,label:stateInfo.entity_id});labels.push(entityDisplay);});this._chartData={labels:labels,datasets:datasets};}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      ha-chart-base {
        --chart-max-height: none;
      }
    `;}}]};},s$2);

_decorate([n$1("state-history-charts")],function(_initialize,_LitElement){class StateHistoryCharts extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:StateHistoryCharts,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"historyData",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"names",value(){return false;}},{kind:"field",decorators:[e$3({attribute:false})],key:"endTime",value:void 0},{kind:"field",decorators:[e$3({type:Boolean,attribute:"up-to-now"})],key:"upToNow",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"no-single"})],key:"noSingle",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean})],key:"isLoadingData",value(){return false;}},{kind:"method",key:"render",value:function render(){if(!isComponentLoaded(this.hass,"history")){return $$2` <div class="info">
        ${this.hass.localize("ui.components.history_charts.history_disabled")}
      </div>`;}if(this.isLoadingData&&!this.historyData){return $$2` <div class="info">
        ${this.hass.localize("ui.components.history_charts.loading_history")}
      </div>`;}if(this._isHistoryEmpty()){return $$2` <div class="info">
        ${this.hass.localize("ui.components.history_charts.no_history_found")}
      </div>`;}const computedEndTime=this.upToNow?new Date():this.endTime||new Date();return $$2`
      ${this.historyData.timeline.length?$$2`
            <state-history-chart-timeline
              .hass=${this.hass}
              .data=${this.historyData.timeline}
              .endTime=${computedEndTime}
              .noSingle=${this.noSingle}
              .names=${this.names}
            ></state-history-chart-timeline>
          `:$$2``}
      ${this.historyData.line.map(line=>$$2`
          <state-history-chart-line
            .hass=${this.hass}
            .unit=${line.unit}
            .data=${line.data}
            .identifier=${line.identifier}
            .isSingleDevice=${!this.noSingle&&line.data&&line.data.length===1}
            .endTime=${computedEndTime}
            .names=${this.names}
          ></state-history-chart-line>
        `)}
    `;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return !(changedProps.size===1&&changedProps.has("hass"));}},{kind:"method",key:"_isHistoryEmpty",value:function _isHistoryEmpty(){const historyDataEmpty=!this.historyData||!this.historyData.timeline||!this.historyData.line||this.historyData.timeline.length===0&&this.historyData.line.length===0;return !this.isLoadingData&&historyDataEmpty;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: block;
        /* height of single timeline chart = 60px */
        min-height: 60px;
      }
      .info {
        text-align: center;
        line-height: 60px;
        color: var(--secondary-text-color);
      }
    `;}}]};},s$2);

const DOMAINS_USE_LAST_UPDATED=["climate","humidifier","water_heater"];const LINE_ATTRIBUTES_TO_KEEP=["temperature","current_temperature","target_temp_low","target_temp_high","hvac_action","humidity","mode"];const fetchRecent=(hass,entityId,startTime,endTime,skipInitialState=false,significantChangesOnly,minimalResponse=true)=>{let url="history/period";if(startTime){url+="/"+startTime.toISOString();}url+="?filter_entity_id="+entityId;if(endTime){url+="&end_time="+endTime.toISOString();}if(skipInitialState){url+="&skip_initial_state";}if(significantChangesOnly!==undefined){url+=`&significant_changes_only=${Number(significantChangesOnly)}`;}if(minimalResponse){url+="&minimal_response";}return hass.callApi("GET",url);};const equalState=(obj1,obj2)=>obj1.state===obj2.state&&(// Only compare attributes if both states have an attributes object.
// When `minimal_response` is sent, only the first and last state
// will have attributes except for domains in DOMAINS_USE_LAST_UPDATED.
!obj1.attributes||!obj2.attributes||LINE_ATTRIBUTES_TO_KEEP.every(attr=>obj1.attributes[attr]===obj2.attributes[attr]));const processTimelineEntity=(localize,language,states)=>{const data=[];const last_element=states.length-1;for(const state of states){if(data.length>0&&state.state===data[data.length-1].state){continue;}// Copy the data from the last element as its the newest
// and is only needed to localize the data
if(!state.entity_id){state.attributes=states[last_element].attributes;state.entity_id=states[last_element].entity_id;}data.push({state_localize:computeStateDisplay(localize,state,language),state:state.state,last_changed:state.last_changed});}return {name:computeStateName(states[0]),entity_id:states[0].entity_id,data};};const processLineChartEntities=(unit,entities)=>{const data=[];for(const states of entities){const last=states[states.length-1];const domain=computeStateDomain(last);const processedStates=[];for(const state of states){let processedState;if(DOMAINS_USE_LAST_UPDATED.includes(domain)){processedState={state:state.state,last_changed:state.last_updated,attributes:{}};for(const attr of LINE_ATTRIBUTES_TO_KEEP){if(attr in state.attributes){processedState.attributes[attr]=state.attributes[attr];}}}else {processedState=state;}if(processedStates.length>1&&equalState(processedState,processedStates[processedStates.length-1])&&equalState(processedState,processedStates[processedStates.length-2])){continue;}processedStates.push(processedState);}data.push({domain,name:computeStateName(last),entity_id:last.entity_id,states:processedStates});}return {unit,identifier:entities.map(states=>states[0].entity_id).join(""),data};};const computeHistory=(hass,stateHistory,localize)=>{const lineChartDevices={};const timelineDevices=[];if(!stateHistory){return {line:[],timeline:[]};}stateHistory.forEach(stateInfo=>{if(stateInfo.length===0){return;}const stateWithUnitorStateClass=stateInfo.find(state=>state.attributes&&("unit_of_measurement"in state.attributes||"state_class"in state.attributes));let unit;if(stateWithUnitorStateClass){unit=stateWithUnitorStateClass.attributes.unit_of_measurement||" ";}else {unit={climate:hass.config.unit_system.temperature,counter:"#",humidifier:"%",input_number:"#",number:"#",water_heater:hass.config.unit_system.temperature}[computeStateDomain(stateInfo[0])];}if(!unit){timelineDevices.push(processTimelineEntity(localize,hass.locale,stateInfo));}else if(unit in lineChartDevices){lineChartDevices[unit].push(stateInfo);}else {lineChartDevices[unit]=[stateInfo];}});const unitStates=Object.keys(lineChartDevices).map(unit=>processLineChartEntities(unit,lineChartDevices[unit]));return {line:unitStates,timeline:timelineDevices};};// Statistics
const getStatisticIds=(hass,statistic_type)=>hass.callWS({type:"history/list_statistic_ids",statistic_type});const fetchStatistics=(hass,startTime,endTime,statistic_ids,period="hour")=>hass.callWS({type:"history/statistics_during_period",start_time:startTime.toISOString(),end_time:endTime===null||endTime===void 0?void 0:endTime.toISOString(),statistic_ids,period});const calculateStatisticSumGrowth=values=>{if(!values||values.length<2){return null;}const endSum=values[values.length-1].sum;if(endSum===null){return null;}const startSum=values[0].sum;if(startSum===null){return endSum;}return endSum-startSum;};const calculateStatisticsSumGrowth=(data,stats)=>{let totalGrowth=null;for(const stat of stats){if(!(stat in data)){continue;}const statGrowth=calculateStatisticSumGrowth(data[stat]);if(statGrowth===null){continue;}if(totalGrowth===null){totalGrowth=statGrowth;}else {totalGrowth+=statGrowth;}}return totalGrowth;};const statisticsHaveType=(stats,type)=>stats.some(stat=>stat[type]!==null);

const stateHistoryCache={};// Cached type 1 unction. Without cache config.
function getEmptyCache(language,startTime,endTime){return {prom:Promise.resolve({line:[],timeline:[]}),language,startTime,endTime,data:{line:[],timeline:[]}};}const getRecentWithCache=(hass,entityId,cacheConfig,localize,language)=>{const cacheKey=cacheConfig.cacheKey;const endTime=new Date();const startTime=new Date(endTime);startTime.setHours(startTime.getHours()-cacheConfig.hoursToShow);let toFetchStartTime=startTime;let appendingToCache=false;let cache=stateHistoryCache[cacheKey+`_${cacheConfig.hoursToShow}`];if(cache&&toFetchStartTime>=cache.startTime&&toFetchStartTime<=cache.endTime&&cache.language===language){toFetchStartTime=cache.endTime;appendingToCache=true;// This pretty much never happens as endTime is usually set to now
if(endTime<=cache.endTime){return cache.prom;}}else {cache=stateHistoryCache[cacheKey]=getEmptyCache(language,startTime,endTime);}const curCacheProm=cache.prom;const genProm=async()=>{let fetchedHistory;try{const results=await Promise.all([curCacheProm,fetchRecent(hass,entityId,toFetchStartTime,endTime,appendingToCache)]);fetchedHistory=results[1];}catch(err){delete stateHistoryCache[cacheKey];throw err;}const stateHistory=computeHistory(hass,fetchedHistory,localize);if(appendingToCache){mergeLine(stateHistory.line,cache.data.line);mergeTimeline(stateHistory.timeline,cache.data.timeline);pruneStartTime(startTime,cache.data);}else {cache.data=stateHistory;}return cache.data;};cache.prom=genProm();cache.startTime=startTime;cache.endTime=endTime;return cache.prom;};const mergeLine=(historyLines,cacheLines)=>{historyLines.forEach(line=>{const unit=line.unit;const oldLine=cacheLines.find(cacheLine=>cacheLine.unit===unit);if(oldLine){line.data.forEach(entity=>{const oldEntity=oldLine.data.find(cacheEntity=>entity.entity_id===cacheEntity.entity_id);if(oldEntity){oldEntity.states=oldEntity.states.concat(entity.states);}else {oldLine.data.push(entity);}});}else {cacheLines.push(line);}});};const mergeTimeline=(historyTimelines,cacheTimelines)=>{historyTimelines.forEach(timeline=>{const oldTimeline=cacheTimelines.find(cacheTimeline=>cacheTimeline.entity_id===timeline.entity_id);if(oldTimeline){oldTimeline.data=oldTimeline.data.concat(timeline.data);}else {cacheTimelines.push(timeline);}});};const pruneArray=(originalStartTime,arr)=>{if(arr.length===0){return arr;}const changedAfterStartTime=arr.findIndex(state=>new Date(state.last_changed)>originalStartTime);if(changedAfterStartTime===0){// If all changes happened after originalStartTime then we are done.
return arr;}// If all changes happened at or before originalStartTime. Use last index.
const updateIndex=changedAfterStartTime===-1?arr.length-1:changedAfterStartTime-1;arr[updateIndex].last_changed=originalStartTime;return arr.slice(updateIndex);};const pruneStartTime=(originalStartTime,cacheData)=>{cacheData.line.forEach(line=>{line.data.forEach(entity=>{entity.states=pruneArray(originalStartTime,entity.states);});});cacheData.timeline.forEach(timeline=>{timeline.data=pruneArray(originalStartTime,timeline.data);});};

_decorate([n$1("ha-more-info-history")],function(_initialize,_LitElement){class MoreInfoHistory extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:MoreInfoHistory,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"entityId",value:void 0},{kind:"field",decorators:[t$1()],key:"_stateHistory",value:void 0},{kind:"field",key:"_showMoreHref",value(){return "";}},{kind:"field",key:"_throttleGetStateHistory",value(){return throttle(()=>{this._getStateHistory();},10000);}},{kind:"method",key:"render",value:function render(){if(!this.entityId){return $$2``;}return $$2`${isComponentLoaded(this.hass,"history")?$$2` <div class="header">
            <div class="title">
              ${this.hass.localize("ui.dialogs.more_info_control.history")}
            </div>
            <a href=${this._showMoreHref} @click=${this._close}
              >${this.hass.localize("ui.dialogs.more_info_control.show_more")}</a
            >
          </div>
          <state-history-charts
            up-to-now
            .hass=${this.hass}
            .historyData=${this._stateHistory}
            .isLoadingData=${!this._stateHistory}
          ></state-history-charts>`:""}`;}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(MoreInfoHistory.prototype),"updated",this).call(this,changedProps);if(changedProps.has("entityId")){this._stateHistory=undefined;if(!this.entityId){return;}this._showMoreHref=`/history?entity_id=${this.entityId}&start_date=${startOfYesterday().toISOString()}`;this._throttleGetStateHistory();return;}if(!this.entityId||!changedProps.has("hass")){return;}const oldHass=changedProps.get("hass");if(oldHass&&this.hass.states[this.entityId]!==(oldHass===null||oldHass===void 0?void 0:oldHass.states[this.entityId])){// wait for commit of data (we only account for the default setting of 1 sec)
setTimeout(this._throttleGetStateHistory,1000);}}},{kind:"method",key:"_getStateHistory",value:async function _getStateHistory(){if(!isComponentLoaded(this.hass,"history")){return;}this._stateHistory=await getRecentWithCache(this.hass,this.entityId,{cacheKey:`more_info.${this.entityId}`,hoursToShow:24},this.hass.localize,this.hass.language);}},{kind:"method",key:"_close",value:function _close(){setTimeout(()=>fireEvent(this,"closed"),500);}},{kind:"get",static:true,key:"styles",value:function styles(){return [r$2`
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .header > a,
        a:visited {
          color: var(--accent-color);
        }
        .title {
          font-family: var(--paper-font-title_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-title_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-subhead_-_font-size);
          font-weight: var(--paper-font-title_-_font-weight);
          letter-spacing: var(--paper-font-title_-_letter-spacing);
          line-height: var(--paper-font-title_-_line-height);
        }
      `];}}]};},s$2);

const loadTraceContexts=(hass,domain,item_id)=>hass.callWS({type:"trace/contexts",domain,item_id});

let _RO,RO;async function ResizeObserver$1(){return RO||init();}async function init(){if(_RO){return (await _RO).default;}else {_RO=window.ResizeObserver;try{new _RO(function(){});}catch(e){_RO=import('./ResizeObserver.es-dev2.js');_RO=(await _RO).default;}return RO=_RO;}}

const scrollerRef=Symbol('scrollerRef');let nativeShadowDOM='attachShadow'in Element.prototype&&(!('ShadyDOM'in window)||!window['ShadyDOM'].inUse);const HOST_CLASSNAME='uni-virtualizer-host';let globalContainerStylesheet=null;function containerStyles(hostSel,childSel){return `
    ${hostSel} {
      display: block;
      position: relative;
      contain: strict;
      height: 150px;
      overflow: auto;
    }
    ${childSel} {
      box-sizing: border-box;
    }`;}function attachGlobalContainerStylesheet(){if(!globalContainerStylesheet){globalContainerStylesheet=document.createElement('style');globalContainerStylesheet.textContent=containerStyles(`.${HOST_CLASSNAME}`,`.${HOST_CLASSNAME} > *`);document.head.appendChild(globalContainerStylesheet);}}/**
 * Provides virtual scrolling boilerplate.
 *
 * Extensions of this class must set container, layout, and scrollTarget.
 *
 * Extensions of this class must also override VirtualRepeater's DOM
 * manipulation methods.
 */class VirtualScroller{constructor(config){this._benchmarkStart=null;/**
         * Whether the layout should receive an updated viewport size on the next
         * render.
         */ // private _needsUpdateView: boolean = false;
this._layout=null;/**
         * The element that generates scroll events and defines the container
         * viewport. Set by scrollTarget.
         */this._scrollTarget=null;/**
         * A sentinel element that sizes the container when it is a scrolling
         * element. This ensures the scroll bar accurately reflects the total
         * size of the list.
         */this._sizer=null;/**
         * Layout provides these values, we set them on _render().
         * TODO @straversi: Can we find an XOR type, usable for the key here?
         */this._scrollSize=null;/**
         * Difference between scroll target's current and required scroll offsets.
         * Provided by layout.
         */this._scrollErr=null;/**
         * A list of the positions (top, left) of the children in the current range.
         */this._childrenPos=null;// TODO: (graynorton): type
this._childMeasurements=null;this._toBeMeasured=new Map();this._rangeChanged=true;this._itemsChanged=true;this._visibilityChanged=true;/**
         * Containing element. Set by container.
         */this._container=null;/**
         * The parent of all child nodes to be rendered. Set by container.
         */this._containerElement=null;/**
         * Keep track of original inline style of the container, so it can be
         * restored when container is changed.
         */this._containerInlineStyle=null;/**
         * Keep track of original container stylesheet, so it can be restored
         * when container is changed.
         */this._containerStylesheet=null;/**
         * Size of the container.
         */this._containerSize=null;/**
         * Resize observer attached to container.
         */this._containerRO=null;/**
         * Resize observer attached to children.
         */this._childrenRO=null;this._mutationObserver=null;this._mutationPromise=null;this._mutationPromiseResolver=null;this._mutationsObserved=false;// TODO (graynorton): Rethink, per longer comment below
this._loadListener=this._childLoaded.bind(this);/**
         * Index and position of item to scroll to.
         */this._scrollToIndex=null;/**
         * Items to render. Set by items.
         */this._items=[];/**
         * Total number of items to render. Set by totalItems.
         */this._totalItems=null;/**
         * Index of the first child in the range, not necessarily the first visible child.
         * TODO @straversi: Consider renaming these.
         */this._first=0;/**
         * Index of the last child in the range.
         */this._last=0;this._scheduled=new WeakSet();/**
         * Invoked at the end of each render cycle: children in the range are
         * measured, and their dimensions passed to this callback. Use it to layout
         * children as needed.
         */this._measureCallback=null;this._measureChildOverride=null;this._first=-1;this._last=-1;if(config){Object.assign(this,config);}}set items(items){if(items!==this._items){this._itemsChanged=true;this._items=items;this._schedule(this._updateLayout);}}/**
     * The total number of items, regardless of the range, that can be rendered
     * as child nodes.
     */get totalItems(){return this._totalItems===null?this._items.length:this._totalItems;}set totalItems(num){if(typeof num!=='number'&&num!==null){throw new Error('New value must be a number.');}// TODO(valdrin) should we check if it is a finite number?
// Technically, Infinity would break Layout, not VirtualRepeater.
if(num!==this._totalItems){this._totalItems=num;this._schedule(this._updateLayout);}}/**
     * The parent of all child nodes to be rendered.
     */get container(){return this._container;}set container(container){if(container===this._container){return;}if(this._container){// Remove children from old container.
// TODO (graynorton): Decide whether we'd rather fire an event to clear
// the range and let the renderer take care of removing the DOM children
this._children.forEach(child=>child.parentNode.removeChild(child));}this._container=container;this._schedule(this._updateLayout);this._initResizeObservers().then(()=>{const oldEl=this._containerElement;// Consider document fragments as shadowRoots.
const newEl=container&&container.nodeType===Node.DOCUMENT_FRAGMENT_NODE?container.host:container;if(oldEl===newEl){return;}this._containerRO.disconnect();this._containerSize=null;if(oldEl){if(this._containerInlineStyle){oldEl.setAttribute('style',this._containerInlineStyle);}else {oldEl.removeAttribute('style');}this._containerInlineStyle=null;if(oldEl===this._scrollTarget){oldEl.removeEventListener('scroll',this,{passive:true});this._sizer&&this._sizer.remove();}oldEl.removeEventListener('load',this._loadListener,true);this._mutationObserver.disconnect();}else {// First time container was setup, add listeners only now.
addEventListener('scroll',this,{passive:true});}this._containerElement=newEl;if(newEl){this._containerInlineStyle=newEl.getAttribute('style')||null;this._applyContainerStyles();if(newEl===this._scrollTarget){this._sizer=this._sizer||this._createContainerSizer();this._container.insertBefore(this._sizer,this._container.firstChild);}this._schedule(this._updateLayout);this._containerRO.observe(newEl);this._mutationObserver.observe(newEl,{childList:true});this._mutationPromise=new Promise(resolve=>this._mutationPromiseResolver=resolve);if(this._layout&&this._layout.listenForChildLoadEvents){newEl.addEventListener('load',this._loadListener,true);}}});}// This will always actually return a layout instance,
// but TypeScript wants the getter and setter types to be the same
get layout(){return this._layout;}set layout(layout){if(this._layout===layout){return;}let _layout,_config;if(typeof layout==='object'){if(layout.type!==undefined){_layout=layout.type;delete layout.type;}_config=layout;}else {_layout=layout;}if(typeof _layout==='function'){if(this._layout instanceof _layout){if(_config){this._layout.config=_config;}return;}else {_layout=new _layout(_config);}}if(this._layout){this._measureCallback=null;this._measureChildOverride=null;this._layout.removeEventListener('scrollsizechange',this);this._layout.removeEventListener('scrollerrorchange',this);this._layout.removeEventListener('itempositionchange',this);this._layout.removeEventListener('rangechange',this);delete this.container[scrollerRef];this.container.removeEventListener('load',this._loadListener,true);// Reset container size so layout can get correct viewport size.
if(this._containerElement){this._sizeContainer(undefined);}}this._layout=_layout;if(this._layout){if(this._layout.measureChildren&&typeof this._layout.updateItemSizes==='function'){if(typeof this._layout.measureChildren==='function'){this._measureChildOverride=this._layout.measureChildren;}this._measureCallback=this._layout.updateItemSizes.bind(this._layout);}this._layout.addEventListener('scrollsizechange',this);this._layout.addEventListener('scrollerrorchange',this);this._layout.addEventListener('itempositionchange',this);this._layout.addEventListener('rangechange',this);this._container[scrollerRef]=this;if(this._layout.listenForChildLoadEvents){this._container.addEventListener('load',this._loadListener,true);}this._schedule(this._updateLayout);}}// TODO (graynorton): Rework benchmarking so that it has no API and
// instead is always on except in production builds
startBenchmarking(){if(this._benchmarkStart===null){this._benchmarkStart=window.performance.now();}}stopBenchmarking(){if(this._benchmarkStart!==null){const now=window.performance.now();const timeElapsed=now-this._benchmarkStart;const entries=performance.getEntriesByName('uv-virtualizing','measure');const virtualizationTime=entries.filter(e=>e.startTime>=this._benchmarkStart&&e.startTime<now).reduce((t,m)=>t+m.duration,0);this._benchmarkStart=null;return {timeElapsed,virtualizationTime};}return null;}_measureChildren(){const mm={};const children=this._children;const fn=this._measureChildOverride||this._measureChild;for(let i=0;i<children.length;i++){const child=children[i];const idx=this._first+i;if(this._itemsChanged||this._toBeMeasured.has(child)){mm[idx]=fn.call(this,child,this._items[idx]);}}this._childMeasurements=mm;this._schedule(this._updateLayout);this._toBeMeasured.clear();}/**
     * Returns the width, height, and margins of the given child.
     */_measureChild(element){// offsetWidth doesn't take transforms in consideration, so we use
// getBoundingClientRect which does.
const{width,height}=element.getBoundingClientRect();return Object.assign({width,height},getMargins(element));}/**
     * The element that generates scroll events and defines the container
     * viewport. The value `null` (default) corresponds to `window` as scroll
     * target.
     */get scrollTarget(){return this._scrollTarget;}set scrollTarget(target){// Consider window as null.
if(target===window){target=null;}if(this._scrollTarget===target){return;}this._sizeContainer(undefined);if(this._scrollTarget){this._scrollTarget.removeEventListener('scroll',this,{passive:true});if(this._sizer&&this._scrollTarget===this._containerElement){this._sizer.remove();}}this._scrollTarget=target;if(target){target.addEventListener('scroll',this,{passive:true});if(target===this._containerElement){this._sizer=this._sizer||this._createContainerSizer();this._container.insertBefore(this._sizer,this._container.firstChild);}}}/**
     * Index and position of item to scroll to. The scroller will fix to that point
     * until the user scrolls.
     */set scrollToIndex(newValue){this._scrollToIndex=newValue;this._schedule(this._updateLayout);}async _schedule(method){if(!this._scheduled.has(method)){this._scheduled.add(method);await Promise.resolve();this._scheduled.delete(method);method.call(this);}}async _updateDOM(){const{_rangeChanged,_itemsChanged}=this;if(this._visibilityChanged){this._notifyVisibility();this._visibilityChanged=false;}if(_rangeChanged||_itemsChanged){this._notifyRange();this._rangeChanged=false;this._itemsChanged=false;await this._mutationPromise;}if(this._layout.measureChildren){this._children.forEach(child=>this._childrenRO.observe(child));}this._positionChildren(this._childrenPos);this._sizeContainer(this._scrollSize);if(this._scrollErr){this._correctScrollError(this._scrollErr);this._scrollErr=null;}if(this._benchmarkStart&&'mark'in window.performance){window.performance.mark('uv-end');}}_updateLayout(){this._layout.totalItems=this._totalItems;if(this._scrollToIndex!==null){this._layout.scrollToIndex(this._scrollToIndex.index,this._scrollToIndex.position);this._scrollToIndex=null;}this._updateView();if(this._childMeasurements!==null){// If the layout has been changed, we may have measurements but no callback
if(this._measureCallback){this._measureCallback(this._childMeasurements);}this._childMeasurements=null;}this._layout.reflowIfNeeded(this._itemsChanged);if(this._benchmarkStart&&'mark'in window.performance){window.performance.mark('uv-end');}}_handleScrollEvent(){if(this._benchmarkStart&&'mark'in window.performance){try{window.performance.measure('uv-virtualizing','uv-start','uv-end');}catch(e){}window.performance.mark('uv-start');}this._schedule(this._updateLayout);}handleEvent(event){switch(event.type){case'scroll':if(!this._scrollTarget||event.target===this._scrollTarget){this._handleScrollEvent();}break;case'scrollsizechange':this._scrollSize=event.detail;this._schedule(this._updateDOM);break;case'scrollerrorchange':this._scrollErr=event.detail;this._schedule(this._updateDOM);break;case'itempositionchange':this._childrenPos=event.detail;this._schedule(this._updateDOM);break;case'rangechange':this._adjustRange(event.detail);this._schedule(this._updateDOM);break;default:console.warn('event not handled',event);}}async _initResizeObservers(){if(this._containerRO===null){const ResizeObserver=await ResizeObserver$1();this._containerRO=new ResizeObserver(entries=>this._containerSizeChanged(entries[0].contentRect));this._childrenRO=new ResizeObserver(this._childrenSizeChanged.bind(this));this._mutationObserver=new MutationObserver(this._observeMutations.bind(this));}}_applyContainerStyles(){if(nativeShadowDOM){if(this._containerStylesheet===null){const sheet=this._containerStylesheet=document.createElement('style');sheet.textContent=containerStyles(':host','::slotted(*)');}const root=this._containerElement.shadowRoot||this._containerElement.attachShadow({mode:'open'});const slot=root.querySelector('slot:not([name])');root.appendChild(this._containerStylesheet);if(!slot){root.appendChild(document.createElement('slot'));}}else {attachGlobalContainerStylesheet();if(this._containerElement){this._containerElement.classList.add(HOST_CLASSNAME);}}}_createContainerSizer(){const sizer=document.createElement('div');// When the scrollHeight is large, the height of this element might be
// ignored. Setting content and font-size ensures the element has a size.
Object.assign(sizer.style,{position:'absolute',margin:'-2px 0 0 0',padding:0,visibility:'hidden',fontSize:'2px'});sizer.innerHTML='&nbsp;';sizer.id='uni-virtualizer-spacer';return sizer;}get _children(){const arr=[];let next=this.container.firstElementChild;while(next){// Skip our spacer. TODO (graynorton): Feels a bit hacky. Anything better?
if(next.id!=='uni-virtualizer-spacer'){arr.push(next);}next=next.nextElementSibling;}return arr;}_updateView(){if(!this.container||!this._containerElement||!this._layout){return;}let width,height,top,left;if(this._scrollTarget===this._containerElement&&this._containerSize!==null){width=this._containerSize.width;height=this._containerSize.height;left=this._containerElement.scrollLeft;top=this._containerElement.scrollTop;}else {const containerBounds=this._containerElement.getBoundingClientRect();const scrollBounds=this._scrollTarget?this._scrollTarget.getBoundingClientRect():{top:containerBounds.top+window.pageYOffset,left:containerBounds.left+window.pageXOffset,width:innerWidth,height:innerHeight};const scrollerWidth=scrollBounds.width;const scrollerHeight=scrollBounds.height;const xMin=Math.max(0,Math.min(scrollerWidth,containerBounds.left-scrollBounds.left));const yMin=Math.max(0,Math.min(scrollerHeight,containerBounds.top-scrollBounds.top));// TODO (graynorton): Direction is intended to be a layout-level concept, not a scroller-level concept,
// so this feels like a factoring problem
const xMax=this._layout.direction==='vertical'?Math.max(0,Math.min(scrollerWidth,containerBounds.right-scrollBounds.left)):scrollerWidth;const yMax=this._layout.direction==='vertical'?scrollerHeight:Math.max(0,Math.min(scrollerHeight,containerBounds.bottom-scrollBounds.top));width=xMax-xMin;height=yMax-yMin;left=Math.max(0,-(containerBounds.left-scrollBounds.left));top=Math.max(0,-(containerBounds.top-scrollBounds.top));}this._layout.viewportSize={width,height};this._layout.viewportScroll={top,left};}/**
     * Styles the _sizer element or the container so that its size reflects the
     * total size of all items.
     */_sizeContainer(size){if(this._scrollTarget===this._containerElement){const left=size&&size.width?size.width-1:0;const top=size&&size.height?size.height-1:0;if(this._sizer){this._sizer.style.transform=`translate(${left}px, ${top}px)`;}}else {if(this._containerElement){const style=this._containerElement.style;style.minWidth=size&&size.width?size.width+'px':null;style.minHeight=size&&size.height?size.height+'px':null;}}}/**
     * Sets the top and left transform style of the children from the values in
     * pos.
     */_positionChildren(pos){if(pos){const children=this._children;Object.keys(pos).forEach(key=>{const idx=key-this._first;const child=children[idx];if(child){const{top,left,width,height}=pos[key];child.style.position='absolute';child.style.transform=`translate(${left}px, ${top}px)`;if(width!==undefined){child.style.width=width+'px';}if(height!==undefined){child.style.height=height+'px';}}});}}async _adjustRange(range){const{_first,_last,_firstVisible,_lastVisible}=this;this._first=range.first;this._last=range.last;this._firstVisible=range.firstVisible;this._lastVisible=range.lastVisible;this._rangeChanged=this._rangeChanged||this._first!==_first||this._last!==_last;this._visibilityChanged=this._visibilityChanged||this._firstVisible!==_firstVisible||this._lastVisible!==_lastVisible;}_correctScrollError(err){if(this._scrollTarget){this._scrollTarget.scrollTop-=err.top;this._scrollTarget.scrollLeft-=err.left;}else {window.scroll(window.pageXOffset-err.left,window.pageYOffset-err.top);}}/**
     * Emits a rangechange event with the current first, last, firstVisible, and
     * lastVisible.
     */_notifyRange(){// TODO (graynorton): Including visibility here for backward compat, but 
// may decide to remove at some point. The rationale for separating is that
// range change events are mainly intended for "internal" consumption by the
// renderer, whereas visibility change events are mainly intended for "external"
// consumption by application code.
this._container.dispatchEvent(new CustomEvent('rangeChanged',{detail:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible}}));}_notifyVisibility(){this._container.dispatchEvent(new CustomEvent('visibilityChanged',{detail:{first:this._first,last:this._last,firstVisible:this._firstVisible,lastVisible:this._lastVisible}}));}/**
     * Render and update the view at the next opportunity with the given
     * container size.
     */_containerSizeChanged(size){const{width,height}=size;this._containerSize={width,height};this._schedule(this._updateLayout);}async _observeMutations(){if(!this._mutationsObserved){this._mutationsObserved=true;this._mutationPromiseResolver();this._mutationPromise=new Promise(resolve=>this._mutationPromiseResolver=resolve);this._mutationsObserved=false;}}// TODO (graynorton): Rethink how this works. Probably child loading is too specific
// to have dedicated support for; might want some more generic lifecycle hooks for
// layouts to use. Possibly handle measurement this way, too, or maybe that remains
// a first-class feature?
_childLoaded(){// this.requestRemeasure();
}_childrenSizeChanged(changes){for(let change of changes){this._toBeMeasured.set(change.target,change.contentRect);}this._measureChildren();this._schedule(this._updateLayout);}}function getMargins(el){const style=window.getComputedStyle(el);return {marginTop:getMarginValue(style.marginTop),marginRight:getMarginValue(style.marginRight),marginBottom:getMarginValue(style.marginBottom),marginLeft:getMarginValue(style.marginLeft)};}function getMarginValue(value){const float=value?parseFloat(value):NaN;return Number.isNaN(float)?0:float;}

const defaultKeyFunction=item=>item;class ScrollDirective extends d$2{constructor(part){super(part);this.first=0;this.last=-1;if(part.type!==t$2.CHILD){throw new Error('The scroll directive can only be used in child expressions');}}render(config){if(config){this.renderItem=config.renderItem;this.keyFunction=config.keyFunction;}const itemsToRender=[];if(this.first>=0&&this.last>=this.first){for(let i=this.first;i<this.last+1;i++){itemsToRender.push(this.items[i]);}}return c$2(itemsToRender,this.keyFunction||defaultKeyFunction,this.renderItem);}update(part,[config]){var _a;if(this.scroller||this._initialize(part,config)){const{scroller}=this;this.items=scroller.items=config.items;scroller.totalItems=config.totalItems||((_a=config.items)===null||_a===void 0?void 0:_a.length)||0;scroller.layout=config.layout;scroller.scrollTarget=config.scrollTarget||this.container;if(config.scrollToIndex){scroller.scrollToIndex=config.scrollToIndex;}return this.render(config);}return w$3;}_initialize(part,config){const container=this.container=part.parentNode;if(container&&container.nodeType===1){this.scroller=new VirtualScroller({container});container.addEventListener('rangeChanged',e=>{this.first=e.detail.first;this.last=e.detail.last;this.setValue(this.render());});return true;}// TODO (GN): This seems to be needed in the case where the `scroll`
// directive is used within the `LitVirtualizer` element. Figure out why
// and see if there's a cleaner solution.
Promise.resolve().then(()=>this.update(part,[config]));return false;}}const scroll=e$2(ScrollDirective);

function __decorate(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;}

/**
 * A LitElement wrapper of the scroll directive.
 *
 * Import this module to declare the lit-virtualizer custom element.
 * Pass an items array, renderItem method, and scroll target as properties
 * to the <lit-virtualizer> element.
 */let LitVirtualizer=class LitVirtualizer extends s$2{constructor(){super(...arguments);this.scrollTarget=this;}createRenderRoot(){return this;}// get items() {
//     return this._items;
// }
// set items(items) {
//     this._items = items;
//     this._scroller.totalItems = items.length;
// }
/**
     * The method used for rendering each item.
     */ // get renderItem() {
//     return this._renderItem;
// }
// set renderItem(renderItem) {
//     if (renderItem !== this.renderItem) {
//         this._renderItem = renderItem;
//         this.requestUpdate();
//     }
// }
set layout(layout){// TODO (graynorton): Shouldn't have to set this here
this._layout=layout;this.requestUpdate();}get layout(){return this[scrollerRef].layout;}/**
     * Scroll to the specified index, placing that item at the given position
     * in the scroll view.
     */async scrollToIndex(index,position='start'){this._scrollToIndex={index,position};this.requestUpdate();await this.updateComplete;this._scrollToIndex=null;}render(){const{items,renderItem,keyFunction,scrollTarget}=this;const layout=this._layout;return $$2`
            ${scroll({items,renderItem,layout,keyFunction,scrollTarget,scrollToIndex:this._scrollToIndex})}
        `;}};__decorate([e$3()],LitVirtualizer.prototype,"renderItem",void 0);__decorate([e$3({attribute:false})],LitVirtualizer.prototype,"items",void 0);__decorate([e$3({attribute:false})],LitVirtualizer.prototype,"scrollTarget",void 0);__decorate([e$3()],LitVirtualizer.prototype,"keyFunction",void 0);__decorate([e$3({attribute:false})],LitVirtualizer.prototype,"layout",null);LitVirtualizer=__decorate([n$1('lit-virtualizer')],LitVirtualizer);

const restoreScroll=selector=>element=>({kind:"method",placement:"prototype",key:element.key,descriptor:{set(value){this[`__${String(element.key)}`]=value;},get(){return this[`__${String(element.key)}`];},enumerable:true,configurable:true},finisher(cls){const connectedCallback=cls.prototype.connectedCallback;cls.prototype.connectedCallback=function(){connectedCallback.call(this);if(this[element.key]){const target=this.renderRoot.querySelector(selector);if(!target){return;}target.scrollTop=this[element.key];}};}});

_decorate([n$1("ha-logbook")],function(_initialize,_LitElement){class HaLogbook extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaLogbook,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"userIdToName",value(){return {};}},{kind:"field",decorators:[e$3({attribute:false})],key:"traceContexts",value(){return {};}},{kind:"field",decorators:[e$3({attribute:false})],key:"entries",value(){return [];}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"narrow"})],key:"narrow",value(){return false;}},{kind:"field",decorators:[e$3({attribute:"rtl",type:Boolean})],key:"_rtl",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"virtualize",reflect:true})],key:"virtualize",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"no-icon"})],key:"noIcon",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"no-name"})],key:"noName",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"relative-time"})],key:"relativeTime",value(){return false;}},{kind:"field",decorators:[restoreScroll(".container")],key:"_savedScrollPos",value:void 0},{kind:"method",key:"shouldUpdate",value:// @ts-ignore
function shouldUpdate(changedProps){const oldHass=changedProps.get("hass");const languageChanged=oldHass===undefined||oldHass.locale!==this.hass.locale;return changedProps.has("entries")||changedProps.has("traceContexts")||languageChanged;}},{kind:"method",key:"updated",value:function updated(_changedProps){const oldHass=_changedProps.get("hass");if(oldHass===undefined||oldHass.language!==this.hass.language){this._rtl=computeRTL(this.hass);}}},{kind:"method",key:"render",value:function render(){var _this$entries;if(!((_this$entries=this.entries)!==null&&_this$entries!==void 0&&_this$entries.length)){return $$2`
        <div class="container no-entries" .dir=${emitRTLDirection(this._rtl)}>
          ${this.hass.localize("ui.components.logbook.entries_not_found")}
        </div>
      `;}return $$2`
      <div
        class="container ha-scrollbar ${o$1({narrow:this.narrow,rtl:this._rtl,"no-name":this.noName,"no-icon":this.noIcon})}"
        @scroll=${this._saveScrollPos}
      >
        ${this.virtualize?$$2`<lit-virtualizer
              scroller
              class="ha-scrollbar"
              .items=${this.entries}
              .renderItem=${this._renderLogbookItem}
            >
            </lit-virtualizer>`:this.entries.map((item,index)=>this._renderLogbookItem(item,index))}
      </div>
    `;}},{kind:"field",key:"_renderLogbookItem",value(){return (item,index)=>{if(!item||index===undefined){return $$2``;}const previous=this.entries[index-1];const stateObj=item.entity_id?this.hass.states[item.entity_id]:undefined;const item_username=item.context_user_id&&this.userIdToName[item.context_user_id];const domain=item.entity_id?computeDomain(item.entity_id):// Domain is there if there is no entity ID.
item.domain;return $$2`
      <div class="entry-container">
        ${index===0||item!==null&&item!==void 0&&item.when&&previous!==null&&previous!==void 0&&previous.when&&new Date(item.when).toDateString()!==new Date(previous.when).toDateString()?$$2`
              <h4 class="date">
                ${formatDate(new Date(item.when),this.hass.locale)}
              </h4>
            `:$$2``}

        <div class="entry ${o$1({"no-entity":!item.entity_id})}">
          <div class="icon-message">
            ${!this.noIcon?// We do not want to use dynamic entity pictures (e.g., from media player) for the log book rendering,
// as they would present a false state in the log (played media right now vs actual historic data).
$$2`
                  <state-badge
                    .hass=${this.hass}
                    .overrideIcon=${item.icon||(item.domain&&!stateObj?domainIcon(item.domain):undefined)}
                    .overrideImage=${DOMAINS_WITH_DYNAMIC_PICTURE.has(domain)?"":(stateObj===null||stateObj===void 0?void 0:stateObj.attributes.entity_picture_local)||(stateObj===null||stateObj===void 0?void 0:stateObj.attributes.entity_picture)}
                    .stateObj=${stateObj}
                    .stateColor=${false}
                  ></state-badge>
                `:""}
            <div class="message-relative_time">
              <div class="message">
                ${!this.noName?$$2`<a
                      href="#"
                      @click=${this._entityClicked}
                      .entityId=${item.entity_id}
                      ><span class="name">${item.name}</span></a
                    >`:""}
                ${item.message}
                ${item_username?` ${this.hass.localize("ui.components.logbook.by")} ${item_username}`:!item.context_event_type?"":item.context_event_type==="call_service"?// Service Call
` ${this.hass.localize("ui.components.logbook.by_service")}
                  ${item.context_domain}.${item.context_service}`:item.context_entity_id===item.entity_id?// HomeKit or something that self references
` ${this.hass.localize("ui.components.logbook.by")}
                  ${item.context_name?item.context_name:item.context_event_type}`:// Another entity such as an automation or script
$$2` ${this.hass.localize("ui.components.logbook.by")}
                      <a
                        href="#"
                        @click=${this._entityClicked}
                        .entityId=${item.context_entity_id}
                        class="name"
                        >${item.context_entity_id_name}</a
                      >`}
              </div>
              <div class="secondary">
                <span
                  >${formatTimeWithSeconds(new Date(item.when),this.hass.locale)}</span
                >
                -
                <ha-relative-time
                  .hass=${this.hass}
                  .datetime=${item.when}
                  capitalize
                ></ha-relative-time>
                ${item.domain==="automation"&&item.context_id in this.traceContexts?$$2`
                      -
                      <a
                        href=${`/config/automation/trace/${this.traceContexts[item.context_id].item_id}?run_id=${this.traceContexts[item.context_id].run_id}`}
                        @click=${this._close}
                        >${this.hass.localize("ui.components.logbook.show_trace")}</a
                      >
                    `:""}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;};}},{kind:"method",decorators:[e$4({passive:true})],key:"_saveScrollPos",value:function _saveScrollPos(e){this._savedScrollPos=e.target.scrollTop;}},{kind:"method",key:"_entityClicked",value:function _entityClicked(ev){const entityId=ev.currentTarget.entityId;if(!entityId){return;}ev.preventDefault();ev.stopPropagation();fireEvent(this,"hass-more-info",{entityId:entityId});}},{kind:"method",key:"_close",value:function _close(){setTimeout(()=>fireEvent(this,"closed"),500);}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,haStyleScrollbar,r$2`
        :host([virtualize]) {
          display: block;
          height: 100%;
        }

        .rtl {
          direction: ltr;
        }

        .entry-container {
          width: 100%;
        }

        .entry {
          display: flex;
          width: 100%;
          line-height: 2em;
          padding: 8px 16px;
          box-sizing: border-box;
          border-top: 1px solid var(--divider-color);
        }

        .entry.no-entity,
        .no-name .entry {
          cursor: default;
        }

        .entry:hover {
          background-color: rgba(var(--rgb-primary-text-color), 0.04);
        }

        .narrow:not(.no-icon) .time {
          margin-left: 32px;
        }

        .message-relative_time {
          display: flex;
          flex-direction: column;
        }

        .secondary {
          font-size: 12px;
          line-height: 1.7;
        }

        .secondary a {
          color: var(--secondary-text-color);
        }

        .date {
          margin: 8px 0;
          padding: 0 16px;
        }

        .narrow .date {
          padding: 0 8px;
        }

        .rtl .date {
          direction: rtl;
        }

        .icon-message {
          display: flex;
          align-items: center;
        }

        .no-entries {
          text-align: center;
          color: var(--secondary-text-color);
        }

        state-badge {
          margin-right: 16px;
          flex-shrink: 0;
          color: var(--state-icon-color);
        }

        .message {
          color: var(--primary-text-color);
        }

        .no-name .message:first-letter {
          text-transform: capitalize;
        }

        a {
          color: var(--accent-color);
        }

        .container {
          max-height: var(--logbook-max-height);
        }

        .container,
        lit-virtualizer {
          height: 100%;
        }

        lit-virtualizer {
          contain: size layout !important;
        }

        .narrow .entry {
          line-height: 1.5;
          padding: 8px;
        }

        .narrow .icon-message state-badge {
          margin-left: 0;
        }
      `];}}]};},s$2);

_decorate([n$1("ha-more-info-logbook")],function(_initialize,_LitElement){class MoreInfoLogbook extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:MoreInfoLogbook,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"entityId",value:void 0},{kind:"field",decorators:[t$1()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[t$1()],key:"_traceContexts",value:void 0},{kind:"field",decorators:[t$1()],key:"_userIdToName",value(){return {};}},{kind:"field",key:"_lastLogbookDate",value:void 0},{kind:"field",key:"_fetchUserPromise",value:void 0},{kind:"field",key:"_error",value:void 0},{kind:"field",key:"_showMoreHref",value(){return "";}},{kind:"field",key:"_throttleGetLogbookEntries",value(){return throttle(()=>{this._getLogBookData();},10000);}},{kind:"method",key:"render",value:function render(){if(!this.entityId){return $$2``;}const stateObj=this.hass.states[this.entityId];if(!stateObj){return $$2``;}return $$2`
      ${isComponentLoaded(this.hass,"logbook")?this._error?$$2`<div class="no-entries">
              ${`${this.hass.localize("ui.components.logbook.retrieval_error")}: ${this._error}`}
            </div>`:!this._logbookEntries?$$2`
              <ha-circular-progress
                active
                alt=${this.hass.localize("ui.common.loading")}
              ></ha-circular-progress>
            `:this._logbookEntries.length?$$2`
              <div class="header">
                <div class="title">
                  ${this.hass.localize("ui.dialogs.more_info_control.logbook")}
                </div>
                <a href=${this._showMoreHref} @click=${this._close}
                  >${this.hass.localize("ui.dialogs.more_info_control.show_more")}</a
                >
              </div>
              <ha-logbook
                narrow
                no-icon
                no-name
                relative-time
                .hass=${this.hass}
                .entries=${this._logbookEntries}
                .traceContexts=${this._traceContexts}
                .userIdToName=${this._userIdToName}
              ></ha-logbook>
            `:$$2`<div class="no-entries">
              ${this.hass.localize("ui.components.logbook.entries_not_found")}
            </div>`:""}
    `;}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this._fetchUserPromise=this._fetchUserNames();}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(MoreInfoLogbook.prototype),"updated",this).call(this,changedProps);if(changedProps.has("entityId")){this._lastLogbookDate=undefined;this._logbookEntries=undefined;if(!this.entityId){return;}this._showMoreHref=`/logbook?entity_id=${this.entityId}&start_date=${startOfYesterday().toISOString()}`;this._throttleGetLogbookEntries();return;}if(!this.entityId||!changedProps.has("hass")){return;}const oldHass=changedProps.get("hass");if(oldHass&&this.hass.states[this.entityId]!==(oldHass===null||oldHass===void 0?void 0:oldHass.states[this.entityId])){// wait for commit of data (we only account for the default setting of 1 sec)
setTimeout(this._throttleGetLogbookEntries,1000);}}},{kind:"method",key:"_getLogBookData",value:async function _getLogBookData(){if(!isComponentLoaded(this.hass,"logbook")){return;}const lastDate=this._lastLogbookDate||new Date(new Date().getTime()-24*60*60*1000);const now=new Date();let newEntries;let traceContexts;try{var _this$hass$user;[newEntries,traceContexts]=await Promise.all([getLogbookData(this.hass,lastDate.toISOString(),now.toISOString(),this.entityId,true),(_this$hass$user=this.hass.user)!==null&&_this$hass$user!==void 0&&_this$hass$user.is_admin?loadTraceContexts(this.hass):{},this._fetchUserPromise]);}catch(err){this._error=err.message;}this._logbookEntries=this._logbookEntries?[...newEntries,...this._logbookEntries]:newEntries;this._lastLogbookDate=now;this._traceContexts=traceContexts;}},{kind:"method",key:"_fetchUserNames",value:async function _fetchUserNames(){var _this$hass$user2;const userIdToName={};// Start loading users
const userProm=((_this$hass$user2=this.hass.user)===null||_this$hass$user2===void 0?void 0:_this$hass$user2.is_admin)&&fetchUsers(this.hass);// Process persons
Object.values(this.hass.states).forEach(entity=>{if(entity.attributes.user_id&&computeStateDomain(entity)==="person"){this._userIdToName[entity.attributes.user_id]=entity.attributes.friendly_name;}});// Process users
if(userProm){const users=await userProm;for(const user of users){if(!(user.id in userIdToName)){userIdToName[user.id]=user.name;}}}this._userIdToName=userIdToName;}},{kind:"method",key:"_close",value:function _close(){setTimeout(()=>fireEvent(this,"closed"),500);}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r$2`
        .no-entries {
          text-align: center;
          padding: 16px;
          color: var(--secondary-text-color);
        }
        ha-logbook {
          --logbook-max-height: 250px;
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-logbook {
            --logbook-max-height: unset;
          }
        }
        ha-circular-progress {
          display: flex;
          justify-content: center;
        }
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .header > a,
        a:visited {
          color: var(--accent-color);
        }
        .title {
          font-family: var(--paper-font-title_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-title_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-subhead_-_font-size);
          font-weight: var(--paper-font-title_-_font-weight);
          letter-spacing: var(--paper-font-title_-_letter-spacing);
          line-height: var(--paper-font-title_-_line-height);
        }
      `];}}]};},s$2);

const LAZY_LOADED_MORE_INFO_CONTROL={alarm_control_panel:()=>import('./more-info-alarm_control_panel-dev.js'),automation:()=>import('./more-info-automation-dev.js'),camera:()=>import('./more-info-camera-dev.js'),climate:()=>import('./more-info-climate-dev.js'),configurator:()=>import('./more-info-configurator-dev.js'),counter:()=>import('./more-info-counter-dev.js'),cover:()=>import('./more-info-cover-dev.js'),fan:()=>import('./more-info-fan-dev.js'),group:()=>import('./more-info-group-dev.js'),humidifier:()=>import('./more-info-humidifier-dev.js'),input_datetime:()=>import('./more-info-input_datetime-dev.js'),light:()=>import('./more-info-light-dev.js'),lock:()=>import('./more-info-lock-dev.js'),media_player:()=>import('./more-info-media_player-dev.js'),person:()=>import('./more-info-person-dev.js'),remote:()=>import('./more-info-remote-dev.js'),script:()=>import('./more-info-script-dev.js'),sun:()=>import('./more-info-sun-dev.js'),timer:()=>import('./more-info-timer-dev.js'),vacuum:()=>import('./more-info-vacuum-dev.js'),water_heater:()=>import('./more-info-water_heater-dev.js'),weather:()=>import('./more-info-weather-dev.js')};const stateMoreInfoType=stateObj=>{const domain=computeStateDomain(stateObj);return domainMoreInfoType(domain);};const domainMoreInfoType=domain=>{if(DOMAINS_WITH_MORE_INFO.includes(domain)){return domain;}if(DOMAINS_HIDE_DEFAULT_MORE_INFO.includes(domain)){return "hidden";}return "default";};const importMoreInfoControl=type=>{if(!(type in LAZY_LOADED_MORE_INFO_CONTROL)){return;}LAZY_LOADED_MORE_INFO_CONTROL[type]();};

let HaLabelBadge=_decorate(null,function(_initialize,_LitElement){class HaLabelBadge extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaLabelBadge,d:[{kind:"field",decorators:[e$3()],key:"label",value:void 0},{kind:"field",decorators:[e$3()],key:"description",value:void 0},{kind:"field",decorators:[e$3()],key:"image",value:void 0},{kind:"method",key:"render",value:function render(){return $$2`
      <div class="badge-container">
        <div class="label-badge" id="badge">
          <div class="value">
            <slot></slot>
          </div>
          ${this.label?$$2`
                <div
                  class=${o$1({label:true,big:this.label.length>5})}
                >
                  <span>${this.label}</span>
                </div>
              `:""}
        </div>
        ${this.description?$$2`<div class="title">${this.description}</div>`:""}
      </div>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return [r$2`
        .badge-container {
          display: inline-block;
          text-align: center;
          vertical-align: top;
          padding: var(--ha-label-badge-padding, 0 0 0 0);
        }
        .label-badge {
          position: relative;
          display: block;
          margin: 0 auto;
          width: var(--ha-label-badge-size, 2.5em);
          text-align: center;
          height: var(--ha-label-badge-size, 2.5em);
          line-height: var(--ha-label-badge-size, 2.5em);
          font-size: var(--ha-label-badge-font-size, 1.5em);
          border-radius: 50%;
          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));
          color: var(--label-badge-text-color, rgb(76, 76, 76));

          white-space: nowrap;
          background-color: var(--label-badge-background-color, white);
          background-size: cover;
          transition: border 0.3s ease-in-out;
        }
        .label-badge .label.big span {
          font-size: 90%;
          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */
        }
        .label-badge .value {
          font-size: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label-badge .label {
          position: absolute;
          bottom: -1em;
          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */
          left: -0.2em;
          right: -0.2em;
          line-height: 1em;
          font-size: 0.5em;
        }
        .label-badge .label span {
          box-sizing: border-box;
          max-width: 100%;
          display: inline-block;
          background-color: var(--ha-label-badge-color, var(--primary-color));
          color: var(--ha-label-badge-label-color, white);
          border-radius: 1em;
          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */
          font-weight: 500;
          overflow: hidden;
          text-transform: uppercase;
          text-overflow: ellipsis;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform, uppercase);
        }
        .badge-container .title {
          margin-top: 1em;
          font-size: var(--ha-label-badge-title-font-size, 0.9em);
          width: var(--ha-label-badge-title-width, 5em);
          font-weight: var(--ha-label-badge-title-font-weight, 400);
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: normal;
        }
      `];}},{kind:"method",key:"updated",value:function updated(changedProperties){_get(_getPrototypeOf(HaLabelBadge.prototype),"updated",this).call(this,changedProperties);if(changedProperties.has("image")){this.shadowRoot.getElementById("badge").style.backgroundImage=this.image?`url(${this.image})`:"";}}}]};},s$2);customElements.define("ha-label-badge",HaLabelBadge);

_decorate([n$1("ha-state-label-badge")],function(_initialize,_LitElement){class HaStateLabelBadge extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaStateLabelBadge,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"state",value:void 0},{kind:"field",decorators:[e$3()],key:"name",value:void 0},{kind:"field",decorators:[e$3()],key:"icon",value:void 0},{kind:"field",decorators:[e$3()],key:"image",value:void 0},{kind:"field",decorators:[t$1()],key:"_timerTimeRemaining",value:void 0},{kind:"field",key:"_connected",value:void 0},{kind:"field",key:"_updateRemaining",value:void 0},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HaStateLabelBadge.prototype),"connectedCallback",this).call(this);this._connected=true;this.startInterval(this.state);}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaStateLabelBadge.prototype),"disconnectedCallback",this).call(this);this._connected=false;this.clearInterval();}},{kind:"method",key:"render",value:function render(){var _this$name;const entityState=this.state;if(!entityState){return $$2`
        <ha-label-badge
          class="warning"
          label=${this.hass.localize("state_badge.default.error")}
          description=${this.hass.localize("state_badge.default.entity_not_found")}
        >
          <ha-svg-icon .path=${mdiAlert}></ha-svg-icon>
        </ha-label-badge>
      `;}// Rendering priority inside badge:
// 1. Icon directly defined in badge config
// 2. Image directly defined in badge config
// 3. Image taken from entity picture
// 4. Icon determined via entity state
// 5. Value string as fallback
const domain=computeStateDomain(entityState);const showIcon=this.icon||this._computeShowIcon(domain,entityState);const image=this.icon?"":this.image?this.image:entityState.attributes.entity_picture_local||entityState.attributes.entity_picture;const value=!image&&!showIcon?this._computeValue(domain,entityState):undefined;return $$2`
      <ha-label-badge
        class=${o$1({[domain]:true,"has-unit_of_measurement":"unit_of_measurement"in entityState.attributes})}
        .image=${image}
        .label=${this._computeLabel(domain,entityState,this._timerTimeRemaining)}
        .description=${(_this$name=this.name)!==null&&_this$name!==void 0?_this$name:computeStateName(entityState)}
      >
        ${!image&&showIcon?$$2`<ha-state-icon
              .icon=${this.icon}
              .state=${entityState}
            ></ha-state-icon>`:""}
        ${value&&!image&&!showIcon?$$2`<span class=${value&&value.length>4?"big":""}
              >${value}</span
            >`:""}
      </ha-label-badge>
    `;}},{kind:"method",key:"updated",value:function updated(changedProperties){_get(_getPrototypeOf(HaStateLabelBadge.prototype),"updated",this).call(this,changedProperties);if(this._connected&&changedProperties.has("state")){this.startInterval(this.state);}}},{kind:"method",key:"_computeValue",value:function _computeValue(domain,entityState){switch(domain){case"alarm_control_panel":case"binary_sensor":case"device_tracker":case"person":case"scene":case"sun":case"timer":case"updater":return null;// @ts-expect-error we don't break and go to default
case"sensor":if(entityState.attributes.device_class==="moon__phase"){return null;}// eslint-disable-next-line: disable=no-fallthrough
default:return entityState.state===UNKNOWN||entityState.state===UNAVAILABLE?"—":isNumericState(entityState)?formatNumber(entityState.state,this.hass.locale):computeStateDisplay(this.hass.localize,entityState,this.hass.locale);}}},{kind:"method",key:"_computeShowIcon",value:function _computeShowIcon(domain,entityState){if(entityState.state===UNAVAILABLE){return false;}switch(domain){case"alarm_control_panel":case"binary_sensor":case"device_tracker":case"updater":case"person":case"scene":case"sun":return true;case"timer":return true;case"sensor":return entityState.attributes.device_class==="moon__phase";default:return false;}}},{kind:"method",key:"_computeLabel",value:function _computeLabel(domain,entityState,_timerTimeRemaining){if(entityState.state===UNAVAILABLE||["device_tracker","alarm_control_panel","person"].includes(domain)){// Localize the state with a special state_badge namespace, which has variations of
// the state translations that are truncated to fit within the badge label. Translations
// are only added for device_tracker, alarm_control_panel and person.
return this.hass.localize(`state_badge.${domain}.${entityState.state}`)||this.hass.localize(`state_badge.default.${entityState.state}`)||entityState.state;}if(domain==="timer"){return secondsToDuration(_timerTimeRemaining);}return entityState.attributes.unit_of_measurement||null;}},{kind:"method",key:"clearInterval",value:function(_clearInterval){function clearInterval(){return _clearInterval.apply(this,arguments);}clearInterval.toString=function(){return _clearInterval.toString();};return clearInterval;}(function(){if(this._updateRemaining){clearInterval(this._updateRemaining);this._updateRemaining=undefined;}})},{kind:"method",key:"startInterval",value:function startInterval(stateObj){this.clearInterval();if(stateObj&&computeStateDomain(stateObj)==="timer"){this.calculateTimerRemaining(stateObj);if(stateObj.state==="active"){this._updateRemaining=window.setInterval(()=>this.calculateTimerRemaining(this.state),1000);}}}},{kind:"method",key:"calculateTimerRemaining",value:function calculateTimerRemaining(stateObj){this._timerTimeRemaining=timerTimeRemaining(stateObj);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        cursor: pointer;
      }
      .big {
        font-size: 70%;
      }
      ha-label-badge {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }
      ha-label-badge.has-unit_of_measurement {
        --ha-label-badge-label-text-transform: none;
      }

      ha-label-badge.binary_sensor,
      ha-label-badge.updater {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .red {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }

      .blue {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .green {
        --ha-label-badge-color: var(--label-badge-green, #0da035);
      }

      .yellow {
        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);
      }

      .grey {
        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));
      }

      .warning {
        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);
      }
    `;}}]};},s$2);

// From https://github.com/epoberezkin/fast-deep-equal
// MIT License - Copyright (c) 2017 Evgeny Poberezkin
const deepEqual=(a,b)=>{if(a===b){return true;}if(a&&b&&typeof a==="object"&&typeof b==="object"){if(a.constructor!==b.constructor){return false;}let i;let length;if(Array.isArray(a)){length=a.length;if(length!==b.length){return false;}for(i=length;i--!==0;){if(!deepEqual(a[i],b[i])){return false;}}return true;}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size){return false;}for(i of a.entries()){if(!b.has(i[0])){return false;}}for(i of a.entries()){if(!deepEqual(i[1],b.get(i[0]))){return false;}}return true;}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size){return false;}for(i of a.entries()){if(!b.has(i[0])){return false;}}return true;}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){// @ts-ignore
length=a.length;// @ts-ignore
if(length!==b.length){return false;}for(i=length;i--!==0;){if(a[i]!==b[i]){return false;}}return true;}if(a.constructor===RegExp){return a.source===b.source&&a.flags===b.flags;}if(a.valueOf!==Object.prototype.valueOf){return a.valueOf()===b.valueOf();}if(a.toString!==Object.prototype.toString){return a.toString()===b.toString();}const keys=Object.keys(a);length=keys.length;if(length!==Object.keys(b).length){return false;}for(i=length;i--!==0;){if(!Object.prototype.hasOwnProperty.call(b,keys[i])){return false;}}for(i=length;i--!==0;){const key=keys[i];if(!deepEqual(a[key],b[key])){return false;}}return true;}// true if both NaN, false otherwise
// eslint-disable-next-line no-self-compare
return a!==a&&b!==b;};

const isTouch="ontouchstart"in window||navigator.maxTouchPoints>0||// @ts-ignore
navigator.msMaxTouchPoints>0;class ActionHandler extends HTMLElement{constructor(){super();_defineProperty(this,"holdTime",500);_defineProperty(this,"ripple",void 0);_defineProperty(this,"timer",void 0);_defineProperty(this,"held",false);_defineProperty(this,"cancelled",false);_defineProperty(this,"dblClickTimeout",void 0);this.ripple=document.createElement("mwc-ripple");}connectedCallback(){Object.assign(this.style,{position:"absolute",width:isTouch?"100px":"50px",height:isTouch?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"});this.appendChild(this.ripple);this.ripple.primary=true;["mouseout","mouseup","mousewheel","wheel","scroll"].forEach(ev=>{document.addEventListener(ev,()=>{this.cancelled=true;if(this.timer){this.stopAnimation();clearTimeout(this.timer);this.timer=undefined;}},{passive:true});});}bind(element,options={}){if(element.actionHandler&&deepEqual(options,element.actionHandler.options)){return;}if(element.actionHandler){element.removeEventListener("touchstart",element.actionHandler.start);element.removeEventListener("touchend",element.actionHandler.end);element.removeEventListener("touchcancel",element.actionHandler.end);element.removeEventListener("mousedown",element.actionHandler.start);element.removeEventListener("click",element.actionHandler.end);element.removeEventListener("keyup",element.actionHandler.handleEnter);}else {element.addEventListener("contextmenu",ev=>{const e=ev||window.event;if(e.preventDefault){e.preventDefault();}if(e.stopPropagation){e.stopPropagation();}e.cancelBubble=true;e.returnValue=false;return false;});}element.actionHandler={options};if(options.disabled){return;}element.actionHandler.start=ev=>{this.cancelled=false;let x;let y;if(ev.touches){x=ev.touches[0].pageX;y=ev.touches[0].pageY;}else {x=ev.pageX;y=ev.pageY;}if(options.hasHold){this.held=false;this.timer=window.setTimeout(()=>{this.startAnimation(x,y);this.held=true;forwardHaptic("heavy");},this.holdTime);}};element.actionHandler.end=ev=>{// Don't respond when moved or scrolled while touch
if(["touchend","touchcancel"].includes(ev.type)&&this.cancelled&&!this.held){return;}const target=ev.target;// Prevent mouse event if touch event
if(ev.cancelable){ev.preventDefault();}if(options.hasHold){clearTimeout(this.timer);this.stopAnimation();this.timer=undefined;}if(options.hasHold&&this.held){fireEvent(target,"action",{action:"hold"});}else if(options.hasDoubleClick){if(ev.type==="click"&&ev.detail<2||!this.dblClickTimeout){this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=undefined;fireEvent(target,"action",{action:"tap"});},250);}else {clearTimeout(this.dblClickTimeout);this.dblClickTimeout=undefined;fireEvent(target,"action",{action:"double_tap"});}}else {fireEvent(target,"action",{action:"tap"});}};element.actionHandler.handleEnter=ev=>{if(ev.keyCode!==13){return;}ev.currentTarget.actionHandler.end(ev);};element.addEventListener("touchstart",ev=>{element.actionHandler.start(ev);},{passive:true});element.addEventListener("touchend",ev=>{element.actionHandler.end(ev);});element.addEventListener("touchcancel",ev=>{element.actionHandler.end(ev);});element.addEventListener("mousedown",element.actionHandler.start,{passive:true});element.addEventListener("click",element.actionHandler.end);element.addEventListener("keyup",element.actionHandler.handleEnter);}startAnimation(x,y){Object.assign(this.style,{left:`${x}px`,top:`${y}px`,display:null});this.ripple.disabled=false;this.ripple.startPress();this.ripple.unbounded=true;}stopAnimation(){this.ripple.endPress();this.ripple.disabled=true;this.style.display="none";}}customElements.define("action-handler",ActionHandler);const getActionHandler=()=>{const body=document.body;if(body.querySelector("action-handler")){return body.querySelector("action-handler");}const actionhandler=document.createElement("action-handler");body.appendChild(actionhandler);return actionhandler;};const actionHandlerBind=(element,options)=>{const actionhandler=getActionHandler();if(!actionhandler){return;}actionhandler.bind(element,options);};const actionHandler=e$2(class extends i$1{update(part,[options]){actionHandlerBind(part.element,options);return b$2;}render(_options){}});

const turnOnOffEntity=(hass,entityId,turnOn=true)=>{const stateDomain=computeDomain(entityId);const serviceDomain=stateDomain==="group"?"homeassistant":stateDomain;let service;switch(stateDomain){case"lock":service=turnOn?"unlock":"lock";break;case"cover":service=turnOn?"open_cover":"close_cover";break;case"button":case"input_button":service="press";break;default:service=turnOn?"turn_on":"turn_off";}return hass.callService(serviceDomain,service,{entity_id:entityId});};

const toggleEntity=(hass,entityId)=>{const turnOn=STATES_OFF.includes(hass.states[entityId].state);return turnOnOffEntity(hass,entityId,turnOn);};

const handleAction=async(node,hass,config,action)=>{let actionConfig;if(action==="double_tap"&&config.double_tap_action){actionConfig=config.double_tap_action;}else if(action==="hold"&&config.hold_action){actionConfig=config.hold_action;}else if(action==="tap"&&config.tap_action){actionConfig=config.tap_action;}if(!actionConfig){actionConfig={action:"more-info"};}if(actionConfig.confirmation&&(!actionConfig.confirmation.exemptions||!actionConfig.confirmation.exemptions.some(e=>e.user===hass.user.id))){forwardHaptic("warning");let serviceName;if(actionConfig.action==="call-service"){const[domain,service]=actionConfig.service.split(".",2);const serviceDomains=hass.services;if(domain in serviceDomains&&service in serviceDomains[domain]){const localize=await hass.loadBackendTranslation("title");serviceName=`${domainToName(localize,domain)}: ${serviceDomains[domain][service].name||service}`;}}if(!(await showConfirmationDialog(node,{text:actionConfig.confirmation.text||hass.localize("ui.panel.lovelace.cards.actions.action_confirmation","action",serviceName||hass.localize("ui.panel.lovelace.editor.action-editor.actions."+actionConfig.action)||actionConfig.action)}))){return;}}switch(actionConfig.action){case"more-info":{if(config.entity||config.camera_image){fireEvent(node,"hass-more-info",{entityId:config.entity?config.entity:config.camera_image});}else {showToast(node,{message:hass.localize("ui.panel.lovelace.cards.actions.no_entity_more_info")});forwardHaptic("failure");}break;}case"navigate":if(actionConfig.navigation_path){navigate(actionConfig.navigation_path);}else {showToast(node,{message:hass.localize("ui.panel.lovelace.cards.actions.no_navigation_path")});forwardHaptic("failure");}break;case"url":{if(actionConfig.url_path){window.open(actionConfig.url_path);}else {showToast(node,{message:hass.localize("ui.panel.lovelace.cards.actions.no_url")});forwardHaptic("failure");}break;}case"toggle":{if(config.entity){toggleEntity(hass,config.entity);forwardHaptic("light");}else {showToast(node,{message:hass.localize("ui.panel.lovelace.cards.actions.no_entity_toggle")});forwardHaptic("failure");}break;}case"call-service":{if(!actionConfig.service){showToast(node,{message:hass.localize("ui.panel.lovelace.cards.actions.no_service")});forwardHaptic("failure");return;}const[domain,service]=actionConfig.service.split(".",2);hass.callService(domain,service,actionConfig.service_data,actionConfig.target);forwardHaptic("light");break;}case"fire-dom-event":{fireEvent(node,"ll-custom",actionConfig);}}};

function hasAction(config){return config!==undefined&&config.action!=="none";}

_decorate([n$1("hui-state-label-badge")],function(_initialize,_LitElement){class HuiStateLabelBadge extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiStateLabelBadge,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){this._config=config;}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];return $$2`
      <ha-state-label-badge
        .hass=${this.hass}
        .state=${stateObj}
        .name=${this._config.name}
        .icon=${this._config.icon}
        .image=${this._config.image}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
        tabindex=${l$2(hasAction(this._config.tap_action)||this._config.entity?"0":undefined)}
      ></ha-state-label-badge>
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      ha-state-label-badge:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 4px;
      }
      ha-state-label-badge {
        display: inline-block;
        padding: 4px 2px 4px 2px;
        margin: -4px -2px -4px -2px;
      }
    `;}}]};},s$2);

const CUSTOM_TYPE_PREFIX="custom:";const customCardsWindow=window;if(!("customCards"in customCardsWindow)){customCardsWindow.customCards=[];}const customCards=customCardsWindow.customCards;const getCustomCardEntry=type=>customCards.find(card=>card.type===type);

const TIMEOUT=2000;const createErrorCardElement=config=>{const el=document.createElement("hui-error-card");if(customElements.get("hui-error-card")){el.setConfig(config);}else {import('./hui-error-card-dev.js');customElements.whenDefined("hui-error-card").then(()=>{customElements.upgrade(el);el.setConfig(config);});}return el;};const createErrorCardConfig=(error,origConfig)=>({type:"error",error,origConfig});const _createElement=(tag,config)=>{const element=document.createElement(tag);// @ts-ignore
element.setConfig(config);return element;};const _createErrorElement=(error,config)=>createErrorCardElement(createErrorCardConfig(error,config));const _customCreate=(tag,config)=>{if(customElements.get(tag)){return _createElement(tag,config);}const element=_createErrorElement(`Custom element doesn't exist: ${tag}.`,config);// Custom elements are required to have a - in the name
if(!tag.includes("-")){return element;}element.style.display="None";const timer=window.setTimeout(()=>{element.style.display="";},TIMEOUT);customElements.whenDefined(tag).then(()=>{clearTimeout(timer);fireEvent(element,"ll-rebuild");});return element;};const _lazyCreate=(tag,config)=>{if(customElements.get(tag)){return _createElement(tag,config);}const element=document.createElement(tag);customElements.whenDefined(tag).then(()=>{try{customElements.upgrade(element);// @ts-ignore
element.setConfig(config);}catch(err){// We let it rebuild and the error wil be handled by _createElement
fireEvent(element,"ll-rebuild");}});return element;};const _getCustomTag=type=>type.startsWith(CUSTOM_TYPE_PREFIX)?type.substr(CUSTOM_TYPE_PREFIX.length):undefined;const createLovelaceElement=(tagSuffix,config,alwaysLoadTypes,lazyLoadTypes,domainTypes,defaultType)=>{try{return tryCreateLovelaceElement(tagSuffix,config,alwaysLoadTypes,lazyLoadTypes,domainTypes,defaultType);}catch(err){// eslint-disable-next-line
console.error(tagSuffix,config.type,err);return _createErrorElement(err.message,config);}};const tryCreateLovelaceElement=(tagSuffix,config,alwaysLoadTypes,lazyLoadTypes,domainTypes,defaultType)=>{if(!config||typeof config!=="object"){throw new Error("Config is not an object");}if(!config.type&&!defaultType&&(// If domain types is given, we can derive a type from "entity"
!domainTypes||!("entity"in config))){throw new Error("No card type configured");}const customTag=config.type?_getCustomTag(config.type):undefined;if(customTag){return _customCreate(customTag,config);}let type;// config.type has priority over config.entity, but defaultType has not.
// @ts-ignore
if(domainTypes&&!config.type&&config.entity){// @ts-ignore
const domain=config.entity.split(".",1)[0];type=`${domainTypes[domain]||domainTypes._domain_not_found}-entity`;}else {type=config.type||defaultType;}if(type===undefined){throw new Error("No type specified");}const tag=`hui-${type}-${tagSuffix}`;if(lazyLoadTypes&&type in lazyLoadTypes){lazyLoadTypes[type]();return _lazyCreate(tag,config);}if(alwaysLoadTypes&&alwaysLoadTypes.has(type)){return _createElement(tag,config);}throw new Error(`Unknown type encountered: ${type}`);};const getLovelaceElementClass=async(type,tagSuffix,alwaysLoadTypes,lazyLoadTypes)=>{const customTag=_getCustomTag(type);if(customTag){const customCls=customElements.get(customTag);if(customCls){return customCls;}// Custom elements are required to have a - in the name
if(!customTag.includes("-")){throw new Error(`Custom element not found: ${customTag}`);}return new Promise((resolve,reject)=>{// We will give custom components up to TIMEOUT seconds to get defined
setTimeout(()=>reject(new Error(`Custom element not found: ${customTag}`)),TIMEOUT);customElements.whenDefined(customTag).then(()=>resolve(customElements.get(customTag)));});}const tag=`hui-${type}-${tagSuffix}`;const cls=customElements.get(tag);if(alwaysLoadTypes&&alwaysLoadTypes.has(type)){return cls;}if(lazyLoadTypes&&type in lazyLoadTypes){return cls||lazyLoadTypes[type]().then(()=>customElements.get(tag));}throw new Error(`Unknown type: ${type}`);};

const validEntityId=/^(\w+)\.(\w+)$/;const isValidEntityId=entityId=>validEntityId.test(entityId);

const arrayFilter=(array,conditions,maxSize)=>{if(!maxSize||maxSize>array.length){maxSize=array.length;}const filteredArray=[];for(let i=0;i<array.length&&filteredArray.length<maxSize;i++){let meetsConditions=true;for(const condition of conditions){if(!condition(array[i])){meetsConditions=false;break;}}if(meetsConditions){filteredArray.push(array[i]);}}return filteredArray;};const findEntities=(hass,maxEntities,entities,entitiesFallback,includeDomains,entityFilter)=>{const conditions=[];if(includeDomains!==null&&includeDomains!==void 0&&includeDomains.length){conditions.push(eid=>includeDomains.includes(computeDomain(eid)));}if(entityFilter){conditions.push(eid=>hass.states[eid]&&entityFilter(hass.states[eid]));}const entityIds=arrayFilter(entities,conditions,maxEntities);if(entityIds.length<maxEntities&&entitiesFallback.length){const fallbackEntityIds=findEntities(hass,maxEntities-entityIds.length,entitiesFallback,[],includeDomains,entityFilter);entityIds.push(...fallbackEntityIds);}return entityIds;};

const createEntityNotFoundWarning=hass=>hass.config.state!==STATE_NOT_RUNNING?hass.localize("ui.panel.lovelace.warning.entity_not_found","entity"):hass.localize("ui.panel.lovelace.warning.starting");_decorate([n$1("hui-warning")],function(_initialize,_LitElement){class HuiWarning extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiWarning,d:[{kind:"method",key:"render",value:function render(){return $$2`<ha-alert alert-type="warning"><slot></slot></ha-alert> `;}}]};},s$2);

_decorate([n$1("unavailable-icon")],function(_initialize,_LitElement){class UnavailableIcon extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:UnavailableIcon,d:[{kind:"method",key:"render",value:function render(){return $$2`
      <svg
        class="unavailableIcon"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.12 7.01043L3.87 39.7804C2.64 41.9804 4.24 44.6904 6.75 44.6904H43.25C45.77 44.6904 47.36 41.9804 46.13 39.7804L27.88 7.01043C26.63 4.75043 23.37 4.75043 22.12 7.01043Z"
          fill="#FF0000"
        />
        <path
          d="M25.0001 34.6201C24.3901 34.6201 23.8701 34.1601 23.8501 33.5901L23.1901 14.6201C23.1401 13.1201 23.9501 11.8301 25.0101 11.8301C26.0601 11.8301 26.8801 13.1201 26.8301 14.6201L26.1701 33.5901C26.1301 34.1601 25.6101 34.6201 25.0001 34.6201Z"
          fill="white"
        />
        <path
          d="M25.0001 40.2396C26.0052 40.2396 26.8201 39.4248 26.8201 38.4196C26.8201 37.4145 26.0052 36.5996 25.0001 36.5996C23.9949 36.5996 23.1801 37.4145 23.1801 38.4196C23.1801 39.4248 23.9949 40.2396 25.0001 40.2396Z"
          fill="white"
        />
      </svg>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      .unavailableIcon {
        width: 22px;
        height: 22px;
      }
    `;}}]};},s$2);

let HuiButtonCard=_decorate([n$1("hui-button-card")],function(_initialize,_LitElement){class HuiButtonCard extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiButtonCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-button-card-editor-dev.js');return document.createElement("hui-button-card-editor");}},{kind:"field",decorators:[e$3({type:Boolean})],key:"dialog",value(){return false;}},{kind:"field",decorators:[e$3({type:String})],key:"layout",value(){return "big";}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(hass,entities,entitiesFallback){const maxEntities=1;const foundEntities=findEntities(hass,maxEntities,entities,entitiesFallback,["light","switch"]);return {type:"button",tap_action:{action:"toggle"},entity:foundEntities[0]||""};}},{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",decorators:[e$5("mwc-ripple")],key:"_ripple",value:void 0},{kind:"field",decorators:[t$1()],key:"_shouldRenderRipple",value(){return false;}},{kind:"method",key:"getCardSize",value:function getCardSize(){var _this$_config,_this$_config2;return ((_this$_config=this._config)!==null&&_this$_config!==void 0&&_this$_config.show_icon?4:0)+((_this$_config2=this._config)!==null&&_this$_config2!==void 0&&_this$_config2.show_name?1:0);}},{kind:"method",key:"setConfig",value:function setConfig(config){if(config.entity&&!isValidEntityId(config.entity)){throw new Error("Invalid entity");}this._config={tap_action:{action:config.entity&&DOMAINS_TOGGLE.has(computeDomain(config.entity))?"toggle":"more-info"},hold_action:{action:"more-info"},show_icon:true,show_name:true,state_color:true,...config};}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){if(changedProps.has("_config")){return true;}const oldHass=changedProps.get("hass");if(!oldHass||oldHass.themes!==this.hass.themes||oldHass.locale!==this.hass.locale){return true;}return Boolean(this._config.entity)&&oldHass.states[this._config.entity]!==this.hass.states[this._config.entity];}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this._config.entity?this.hass.states[this._config.entity]:undefined;if(this._config.entity&&!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}const name=this._config.show_name?this._config.name||(stateObj?computeStateName(stateObj):""):"";return $$2`
      <ha-card
        class=${o$1({"big-card":this.layout==="big","small-card":this.layout==="small","medium-card":this.layout==="medium",unavailable:UNAVAILABLE_STATES.includes(stateObj.state)})}
        @action=${this._handleAction}
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
        .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
        role="button"
        aria-label=${this._config.name||(stateObj?computeStateName(stateObj):"")}
        tabindex=${l$2(hasAction(this._config.tap_action)?"0":undefined)}
        @keydown=${this._handleKeyDown}
      >
        ${this._config.show_icon?$$2`
              <ha-state-icon
                class=${o$1({"ha-status-icon":this.layout==="big","ha-status-icon-small":this.layout==="medium"||this.layout==="small"})}
                tabindex="-1"
                data-domain=${l$2(this._config.state_color&&stateObj?computeStateDomain(stateObj):undefined)}
                data-state=${l$2(stateObj?computeActiveState(stateObj):undefined)}
                .icon=${this._config.icon}
                .state=${stateObj}
                style=${i$3({filter:stateObj?this._computeBrightness(stateObj):"",color:stateObj?this._computeColor(stateObj):"",height:this._config.icon_height?this._config.icon_height:""})}
              ></ha-state-icon>
            `:""}
        ${this._config.show_name?$$2`<span
              class=${o$1({"rect-card":this.layout==="big","rect-card-small":this.layout==="small","rect-card-medium":this.layout==="medium"})}
              tabindex="-1"
              .title=${name}
              >${name}</span
            >`:""}
        ${this._config.show_state&&stateObj?$$2`<span class="state">
              ${computeStateDisplay(this.hass.localize,stateObj,this.hass.locale)}
            </span>`:""}
        ${this._shouldRenderRipple?$$2`<mwc-ripple></mwc-ripple>`:""}
        ${UNAVAILABLE_STATES.includes(stateObj.state)?$$2` <unavailable-icon></unavailable-icon>`:$$2``}
      </ha-card>
    `;}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HuiButtonCard.prototype),"updated",this).call(this,changedProps);if(!this._config||!this.hass){return;}const oldHass=changedProps.get("hass");const oldConfig=changedProps.get("_config");if(!oldHass||!oldConfig||oldHass.themes!==this.hass.themes||oldConfig.theme!==this._config.theme){applyThemesOnElement(this,this.hass.themes,this._config.theme);}}},{kind:"field",key:"_rippleHandlers",value(){return new RippleHandlers(()=>{this._shouldRenderRipple=true;return this._ripple;});}},{kind:"method",key:"_handleKeyDown",value:function _handleKeyDown(ev){if(ev.key==="Enter"||ev.key===" "){handleAction(this,this.hass,this._config,"tap");}}},{kind:"method",decorators:[e$4({passive:true})],key:"handleRippleActivate",value:function handleRippleActivate(evt){this._rippleHandlers.startPress(evt);}},{kind:"method",key:"handleRippleDeactivate",value:function handleRippleDeactivate(){this._rippleHandlers.endPress();}},{kind:"method",key:"handleRippleFocus",value:function handleRippleFocus(){this._rippleHandlers.startFocus();}},{kind:"method",key:"handleRippleBlur",value:function handleRippleBlur(){this._rippleHandlers.endFocus();}},{kind:"get",static:true,key:"styles",value:function styles(){return [iconColorCSS,r$2`
        .big-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4% 0;
          font-size: 2.3rem;
          height: 100%;
          box-sizing: border-box;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          font-weight: 450;
        }

        .medium-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: left;
          text-align: left;
          padding: 4% 0;
          font-size: 1.8rem;
          height: 100%;
          box-sizing: border-box;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          font-weight: 450;
        }
        .small-card {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: left;
          text-align: left;
          padding: 4% 0;
          font-size: 1.2rem;
          height: 100%;
          box-sizing: border-box;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          font-weight: 450;
        }

        ha-card:focus {
          outline: none;
        }

        .ha-status-icon {
          width: 40%;
          height: auto;
          color: var(--paper-item-icon-color, #7b7b7b);
          --mdc-icon-size: 100%;
        }

        .ha-status-icon-small {
          width: 63%;
          height: auto;
          color: var(--paper-item-icon-color, #7b7b7b);
          --mdc-icon-size: 100%;
        }

        ha-state-icon,
        span {
          outline: none;
        }
        unavailable-icon {
          position: absolute;
          top: 11px;
          right: 10%;
        }
        .rect-card-small {
          padding: 5%;
          padding-bottom: 4%;
          margin-bottom: 4%;
          margin-left: 7%;
          white-space: nowrap;
          display: inline-block;
          overflow: hidden;
          max-width: 110px;
          float: left;
          text-overflow: ellipsis;
        }

        .rect-card-medium {
          padding: 5%;
          padding-bottom: 4%;
          margin-bottom: 4%;
          margin-left: 7%;
          white-space: nowrap;
          display: inline-block;
          overflow: hidden;
          max-width: 200px;
          float: left;
          text-overflow: ellipsis;
        }

        .rect-card {
          padding: 5%;
          white-space: nowrap;
          overflow: hidden;
          max-width: 350px;
          text-overflow: ellipsis;
        }
        .state {
          font-size: 0.9rem;
          color: var(--secondary-text-color);
        }
      `];}},{kind:"method",key:"_computeBrightness",value:function _computeBrightness(stateObj){var _this$_config3;if(!stateObj.attributes.brightness||!((_this$_config3=this._config)!==null&&_this$_config3!==void 0&&_this$_config3.state_color)){return "";}const brightness=stateObj.attributes.brightness;return `brightness(${(brightness+245)/5}%)`;}},{kind:"method",key:"_computeColor",value:function _computeColor(stateObj){var _this$_config4;if((_this$_config4=this._config)!==null&&_this$_config4!==void 0&&_this$_config4.state_color&&stateObj.attributes.rgb_color){return `rgb(${stateObj.attributes.rgb_color.join(",")})`;}return "";}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}}]};},s$2);

const fetchCalendarEvents=async(hass,start,end,calendars)=>{const params=encodeURI(`?start=${start.toISOString()}&end=${end.toISOString()}`);const calEvents=[];const promises=[];calendars.forEach(cal=>{promises.push(hass.callApi("GET",`calendars/${cal.entity_id}${params}`));});const results=await Promise.all(promises);results.forEach((result,idx)=>{const cal=calendars[idx];result.forEach(ev=>{const eventStart=getCalendarDate(ev.start);if(!eventStart){return;}const eventEnd=getCalendarDate(ev.end);const event={start:eventStart,end:eventEnd,title:ev.summary,summary:ev.summary,backgroundColor:cal.backgroundColor,borderColor:cal.backgroundColor,calendar:cal.entity_id};calEvents.push(event);});});return calEvents;};const getCalendarDate=dateObj=>{if(typeof dateObj==="string"){return dateObj;}if(dateObj.dateTime){return dateObj.dateTime;}if(dateObj.date){return dateObj.date;}return undefined;};

var fullcalendarStyle = "\n/* classes attached to <body> */\n/* TODO: make fc-event selector work when calender in shadow DOM */\n.fc-not-allowed,\n.fc-not-allowed .fc-event { /* override events' custom cursors */\n  cursor: not-allowed;\n}\n\n/* TODO: not attached to body. attached to specific els. move */\n.fc-unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.fc {\n  /* layout of immediate children */\n  display: flex;\n  flex-direction: column;\n\n  font-size: 1em\n}\n.fc,\n  .fc *,\n  .fc *:before,\n  .fc *:after {\n    box-sizing: border-box;\n  }\n.fc table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em; /* normalize cross-browser */\n  }\n.fc th {\n    text-align: center;\n  }\n.fc th,\n  .fc td {\n    vertical-align: top;\n    padding: 0;\n  }\n.fc a[data-navlink] {\n    cursor: pointer;\n  }\n.fc a[data-navlink]:hover {\n    text-decoration: underline;\n  }\n.fc-direction-ltr {\n  direction: ltr;\n  text-align: left;\n}\n.fc-direction-rtl {\n  direction: rtl;\n  text-align: right;\n}\n.fc-theme-standard td,\n  .fc-theme-standard th {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n/* for FF, which doesn't expand a 100% div within a table cell. use absolute positioning */\n/* inner-wrappers are responsible for being absolute */\n/* TODO: best place for this? */\n.fc-liquid-hack td,\n  .fc-liquid-hack th {\n    position: relative;\n  }\n\n@font-face {\n  font-family: 'fcicons';\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n.fc-icon {\n  /* added for fc */\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'fcicons' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.fc-icon-chevron-left:before {\n  content: \"\\e900\";\n}\n\n.fc-icon-chevron-right:before {\n  content: \"\\e901\";\n}\n\n.fc-icon-chevrons-left:before {\n  content: \"\\e902\";\n}\n\n.fc-icon-chevrons-right:before {\n  content: \"\\e903\";\n}\n\n.fc-icon-minus-square:before {\n  content: \"\\e904\";\n}\n\n.fc-icon-plus-square:before {\n  content: \"\\e905\";\n}\n\n.fc-icon-x:before {\n  content: \"\\e906\";\n}\n/*\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n\nThese styles only apply when the standard-theme is activated.\nWhen it's NOT activated, the fc-button classes won't even be in the DOM.\n*/\n.fc {\n\n  /* reset */\n\n}\n.fc .fc-button {\n    border-radius: 0;\n    overflow: visible;\n    text-transform: none;\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n.fc .fc-button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n.fc .fc-button {\n    -webkit-appearance: button;\n  }\n.fc .fc-button:not(:disabled) {\n    cursor: pointer;\n  }\n.fc .fc-button::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n.fc {\n\n  /* theme */\n\n}\n.fc .fc-button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    padding: 0.4em 0.65em;\n    font-size: 1em;\n    line-height: 1.5;\n    border-radius: 0.25em;\n  }\n.fc .fc-button:hover {\n    text-decoration: none;\n  }\n.fc .fc-button:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  }\n.fc .fc-button:disabled {\n    opacity: 0.65;\n  }\n.fc {\n\n  /* \"primary\" coloring */\n\n}\n.fc .fc-button-primary {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50);\n  }\n.fc .fc-button-primary:hover {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1e2b37;\n    background-color: var(--fc-button-hover-bg-color, #1e2b37);\n    border-color: #1a252f;\n    border-color: var(--fc-button-hover-border-color, #1a252f);\n  }\n.fc .fc-button-primary:disabled { /* not DRY */\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50); /* overrides :hover */\n  }\n.fc .fc-button-primary:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc .fc-button-primary:not(:disabled):active,\n  .fc .fc-button-primary:not(:disabled).fc-button-active {\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1a252f;\n    background-color: var(--fc-button-active-bg-color, #1a252f);\n    border-color: #151e27;\n    border-color: var(--fc-button-active-border-color, #151e27);\n  }\n.fc .fc-button-primary:not(:disabled):active:focus,\n  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc {\n\n  /* icons within buttons */\n\n}\n.fc .fc-button .fc-icon {\n    vertical-align: middle;\n    font-size: 1.5em; /* bump up the size (but don't make it bigger than line-height of button, which is 1.5em also) */\n  }\n.fc .fc-button-group {\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n  }\n.fc .fc-button-group > .fc-button {\n    position: relative;\n    flex: 1 1 auto;\n  }\n.fc .fc-button-group > .fc-button:hover {\n    z-index: 1;\n  }\n.fc .fc-button-group > .fc-button:focus,\n  .fc .fc-button-group > .fc-button:active,\n  .fc .fc-button-group > .fc-button.fc-button-active {\n    z-index: 1;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:first-child) {\n    margin-right: -1px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:last-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc .fc-toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n.fc .fc-toolbar.fc-header-toolbar {\n    margin-bottom: 1.5em;\n  }\n.fc .fc-toolbar.fc-footer-toolbar {\n    margin-top: 1.5em;\n  }\n.fc .fc-toolbar-title {\n    font-size: 1.75em;\n    margin: 0;\n  }\n.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {\n    margin-left: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar > * > :not(:first-child) {\n    margin-right: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar-ltr { /* when the toolbar-chunk positioning system is explicitly left-to-right */\n    flex-direction: row-reverse;\n  }\n.fc .fc-scroller {\n    -webkit-overflow-scrolling: touch;\n    position: relative; /* for abs-positioned elements within */\n  }\n.fc .fc-scroller-liquid {\n    height: 100%;\n  }\n.fc .fc-scroller-liquid-absolute {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n  }\n.fc .fc-scroller-harness {\n    position: relative;\n    overflow: hidden;\n    direction: ltr;\n      /* hack for chrome computing the scroller's right/left wrong for rtl. undone below... */\n      /* TODO: demonstrate in codepen */\n  }\n.fc .fc-scroller-harness-liquid {\n    height: 100%;\n  }\n.fc-direction-rtl .fc-scroller-harness > .fc-scroller { /* undo above hack */\n    direction: rtl;\n  }\n.fc-theme-standard .fc-scrollgrid {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd); /* bootstrap does this. match */\n  }\n.fc .fc-scrollgrid,\n    .fc .fc-scrollgrid table { /* all tables (self included) */\n      width: 100%; /* because tables don't normally do this */\n      table-layout: fixed;\n    }\n.fc .fc-scrollgrid table { /* inner tables */\n      border-top-style: hidden;\n      border-left-style: hidden;\n      border-right-style: hidden;\n    }\n.fc .fc-scrollgrid {\n\n    border-collapse: separate;\n    border-right-width: 0;\n    border-bottom-width: 0;\n\n  }\n.fc .fc-scrollgrid-liquid {\n    height: 100%;\n  }\n.fc .fc-scrollgrid-section { /* a <tr> */\n    height: 1px /* better than 0, for firefox */\n\n  }\n.fc .fc-scrollgrid-section > td {\n      height: 1px; /* needs a height so inner div within grow. better than 0, for firefox */\n    }\n.fc .fc-scrollgrid-section table {\n      height: 1px;\n        /* for most browsers, if a height isn't set on the table, can't do liquid-height within cells */\n        /* serves as a min-height. harmless */\n    }\n.fc .fc-scrollgrid-section-liquid > td {\n      height: 100%; /* better than `auto`, for firefox */\n    }\n.fc .fc-scrollgrid-section > * {\n    border-top-width: 0;\n    border-left-width: 0;\n  }\n.fc .fc-scrollgrid-section-header > *,\n  .fc .fc-scrollgrid-section-footer > * {\n    border-bottom-width: 0;\n  }\n.fc .fc-scrollgrid-section-body table,\n  .fc .fc-scrollgrid-section-footer table {\n    border-bottom-style: hidden; /* head keeps its bottom border tho */\n  }\n.fc {\n\n  /* stickiness */\n\n}\n.fc .fc-scrollgrid-section-sticky > * {\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n    position: sticky;\n    z-index: 3; /* TODO: var */\n    /* TODO: box-shadow when sticking */\n  }\n.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky > * {\n    top: 0; /* because border-sharing causes a gap at the top */\n      /* TODO: give safari -1. has bug */\n  }\n.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky > * {\n    bottom: 0; /* known bug: bottom-stickiness doesn't work in safari */\n  }\n.fc .fc-scrollgrid-sticky-shim { /* for horizontal scrollbar */\n    height: 1px; /* needs height to create scrollbars */\n    margin-bottom: -1px;\n  }\n.fc-sticky { /* no .fc wrap because used as child of body */\n  position: sticky;\n}\n.fc .fc-view-harness {\n    flex-grow: 1; /* because this harness is WITHIN the .fc's flexbox */\n    position: relative;\n  }\n.fc {\n\n  /* when the harness controls the height, make the view liquid */\n\n}\n.fc .fc-view-harness-active > .fc-view {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n.fc .fc-col-header-cell-cushion {\n    display: inline-block; /* x-browser for when sticky (when multi-tier header) */\n    padding: 2px 4px;\n  }\n.fc .fc-bg-event,\n  .fc .fc-non-business,\n  .fc .fc-highlight {\n    /* will always have a harness with position:relative/absolute, so absolutely expand */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc .fc-non-business {\n    background: rgba(215, 215, 215, 0.3);\n    background: var(--fc-non-business-color, rgba(215, 215, 215, 0.3));\n  }\n.fc .fc-bg-event {\n    background: rgb(143, 223, 130);\n    background: var(--fc-bg-event-color, rgb(143, 223, 130));\n    opacity: 0.3;\n    opacity: var(--fc-bg-event-opacity, 0.3)\n  }\n.fc .fc-bg-event .fc-event-title {\n      margin: .5em;\n      font-size: .85em;\n      font-size: var(--fc-small-font-size, .85em);\n      font-style: italic;\n    }\n.fc .fc-highlight {\n    background: rgba(188, 232, 241, 0.3);\n    background: var(--fc-highlight-color, rgba(188, 232, 241, 0.3));\n  }\n.fc .fc-cell-shaded,\n  .fc .fc-day-disabled {\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n/* link resets */\n/* ---------------------------------------------------------------------------------------------------- */\na.fc-event,\na.fc-event:hover {\n  text-decoration: none;\n}\n/* cursor */\n.fc-event[href],\n.fc-event.fc-event-draggable {\n  cursor: pointer;\n}\n/* event text content */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event .fc-event-main {\n    position: relative;\n    z-index: 2;\n  }\n/* dragging */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-dragging:not(.fc-event-selected) { /* MOUSE */\n    opacity: 0.75;\n  }\n.fc-event-dragging.fc-event-selected { /* TOUCH */\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n  }\n/* resizing */\n/* ---------------------------------------------------------------------------------------------------- */\n/* (subclasses should hone positioning for touch and non-touch) */\n.fc-event .fc-event-resizer {\n    display: none;\n    position: absolute;\n    z-index: 4;\n  }\n.fc-event:hover, /* MOUSE */\n.fc-event-selected { /* TOUCH */\n\n}\n.fc-event:hover .fc-event-resizer, .fc-event-selected .fc-event-resizer {\n    display: block;\n  }\n.fc-event-selected .fc-event-resizer {\n    border-radius: 4px;\n    border-radius: calc(var(--fc-event-resizer-dot-total-width, 8px) / 2);\n    border-width: 1px;\n    border-width: var(--fc-event-resizer-dot-border-width, 1px);\n    width: 8px;\n    width: var(--fc-event-resizer-dot-total-width, 8px);\n    height: 8px;\n    height: var(--fc-event-resizer-dot-total-width, 8px);\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff)\n\n    /* expand hit area */\n\n  }\n.fc-event-selected .fc-event-resizer:before {\n      content: '';\n      position: absolute;\n      top: -20px;\n      left: -20px;\n      right: -20px;\n      bottom: -20px;\n    }\n/* selecting (always TOUCH) */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-selected {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)\n\n  /* expand hit area (subclasses should expand) */\n\n}\n.fc-event-selected:before {\n    content: \"\";\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc-event-selected {\n\n  /* dimmer effect */\n\n}\n.fc-event-selected:after {\n    content: \"\";\n    background: rgba(0, 0, 0, 0.25);\n    background: var(--fc-event-selected-overlay-color, rgba(0, 0, 0, 0.25));\n    position: absolute;\n    z-index: 1;\n\n    /* assume there's a border on all sides. overcome it. */\n    /* sometimes there's NOT a border, in which case the dimmer will go over */\n    /* an adjacent border, which looks fine. */\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n  }\n/*\nA HORIZONTAL event\n*/\n.fc-h-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n.fc-h-event .fc-event-main {\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n  }\n.fc-h-event .fc-event-main-frame {\n    display: flex; /* for make fc-event-title-container expand */\n  }\n.fc-h-event .fc-event-time {\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event .fc-event-title-container { /* serves as a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n  }\n.fc-h-event .fc-event-title {\n    display: inline-block; /* need this to be sticky cross-browser */\n    vertical-align: top; /* for not messing up line-height */\n    left: 0;  /* for sticky */\n    right: 0; /* for sticky */\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n/* adjust border and border-radius (if there is any) for non-start/end */\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n}\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right-width: 0;\n}\n/* resizers */\n.fc-h-event:not(.fc-event-selected) .fc-event-resizer {\n  top: 0;\n  bottom: 0;\n  width: 8px;\n  width: var(--fc-event-resizer-thickness, 8px);\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end {\n  cursor: w-resize;\n  left: -4px;\n  left: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start {\n  cursor: e-resize;\n  right: -4px;\n  right: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n}\n/* resizers for TOUCH */\n.fc-h-event.fc-event-selected .fc-event-resizer {\n  top: 50%;\n  margin-top: -4px;\n  margin-top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end {\n  left: -4px;\n  left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start {\n  right: -4px;\n  right: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n}\n.fc .fc-popover {\n    position: absolute;\n    z-index: 9999;\n    box-shadow: 0 2px 6px rgba(0,0,0,.15);\n  }\n.fc .fc-popover-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3px 4px;\n  }\n.fc .fc-popover-title {\n    margin: 0 2px;\n  }\n.fc .fc-popover-close {\n    cursor: pointer;\n    opacity: 0.65;\n    font-size: 1.1em;\n  }\n.fc-theme-standard .fc-popover {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n  }\n.fc-theme-standard .fc-popover-header {\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n";

var n,l$1,u$1,t,o,r$1,f$1={},e$1=[],c$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n;}function a$1(n){var l=n.parentNode;l&&l.removeChild(n);}function h(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v$1(l,f,t,o,null);}function v$1(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u$1:r};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f;}function y(){return {current:null};}function p(n){return n.children;}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null;}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break;}return k$1(n);}}function b$1(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g$2.__r++||o!==l$1.debounceRendering)&&((o=l$1.debounceRendering)||setTimeout)(g$2);}function g$2(){for(var n;g$2.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b;}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j$2(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_(t):o,t.__h),z$1(u,t),t.__e!=o&&k$1(t)));});}function w$2(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e$1,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v$1(null,k,null,null,k):Array.isArray(k)?v$1(p,{children:k},null,null,null):k.__b>0?v$1(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break;}d=null;}j$2(n,k,d=d||f$1,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m$1(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_(d));}for(u.__e=g,h=C;h--;)null!=x[h]&&N(x[h],x[h]);if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h]);}function m$1(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m$1(i,l,u):A(u,i,i,t,i.__e,l));return l;}function x$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){x$1(n,l);}):l.push(n)),l;}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=1)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling;}function C$1(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H$1(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H$1(n,o,l[o],u[o],i);}function $$1(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c$1.test(l)?u:u+"px";}function H$1(n,l,u,i,t){var o;n:if("style"===l){if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$$1(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$$1(n.style,l,u[l]);}}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T$1:I$1,o):n.removeEventListener(l,o?T$1:I$1,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n;}catch(n){}"function"==typeof u||(null==u||!1===u&&-1==l.indexOf("-")?n.removeAttribute(l):n.setAttribute(l,u));}}function I$1(n){this.l[n.type+!1](l$1.event?l$1.event(n):n);}function T$1(n){this.l[n.type+!0](l$1.event?l$1.event(n):n);}function j$2(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H,I,T=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l$1.__b)&&a(u);try{n:if("function"==typeof T){if(g=u.props,m=(a=T.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in T&&T.prototype.render?u.__c=h=new T(g,x):(u.__c=h=new d(g,x),h.constructor=T,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,T.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==T.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){for(h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),A=0;A<h._sb.length;A++)h.__h.push(h._sb[A]);h._sb=[],h.__h.length&&f.push(h);break n;}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,C=l$1.__r,$=0,"prototype"in T&&T.prototype.render){for(h.state=h.__s,h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,C&&C(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),I=null!=a&&a.type===p&&null==a.key?a.props.children:a,w$2(n,Array.isArray(I)?I:[I],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L$1(i.__e,u,i,t,o,r,f,c);(a=l$1.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l$1.__e(n,u,i);}}function z$1(n,u){l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function L$1(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break;}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),h=(y=i.props||f$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C$1(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w$2(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a$1(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H$1(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H$1(l,"checked",k,y.checked,!1));}return l;}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,i);}}function N(n,u,i){var t,o;if(l$1.unmount&&l$1.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l$1.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,i||"function"!=typeof n.type);i||null==n.__e||a$1(n.__e),n.__=n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u);}function P$1(u,i,t){var o,r,e;l$1.__&&l$1.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$2(i,u=(!o&&t||i).__k=h(p,null,[u]),r||f$1,f$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z$1(e,u);}function B$1(n,l){var u={__c:l="__cC"+r$1++,__:n,Consumer:function(n,l){return n.children(l);},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i;},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(b$1);},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children;}};return u.Provider.__=u.Consumer.contextType=u;}n=e$1.slice,l$1={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t;}catch(l){n=l;}throw n;}},u$1=0,d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),b$1(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b$1(this));},d.prototype.render=p,t=[],g$2.__r=0,r$1=0;

var r,u,i,f=[],c=[],e=l$1.__b,a=l$1.__r,v=l$1.diffed,l=l$1.__c,m=l$1.unmount;function b(){for(var t;t=f.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(k),t.__H.__h.forEach(w$1),t.__H.__h=[];}catch(r){t.__H.__h=[],l$1.__e(r,t.__v);}}l$1.__b=function(n){r=null,e&&e(n);},l$1.__r=function(n){a&&a(n);var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(k),i.__h.forEach(w$1),i.__h=[])),u=r;},l$1.diffed=function(t){v&&v(t);var o=t.__c;o&&o.__H&&(o.__H.__h.length&&(1!==f.push(o)&&i===l$1.requestAnimationFrame||((i=l$1.requestAnimationFrame)||j$1)(b)),o.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},l$1.__c=function(t,r){r.some(function(t){try{t.__h.forEach(k),t.__h=t.__h.filter(function(n){return !n.__||w$1(n);});}catch(u){r.some(function(n){n.__h&&(n.__h=[]);}),r=[],l$1.__e(u,t.__v);}}),l&&l(t,r);},l$1.unmount=function(t){m&&m(t);var r,u=t.__c;u&&u.__H&&(u.__H.__.forEach(function(n){try{k(n);}catch(n){r=n;}}),u.__H=void 0,r&&l$1.__e(r,u.__v));};var g$1="function"==typeof requestAnimationFrame;function j$1(n){var t,r=function(){clearTimeout(u),g$1&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);g$1&&(t=requestAnimationFrame(r));}function k(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function w$1(n){var t=r;n.__c=n.__(),r=t;}

function g(n,t){for(var e in t)n[e]=t[e];return n;}function C(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1;}function w(n){this.props=n;}(w.prototype=new d()).isPureReactComponent=!0,w.prototype.shouldComponentUpdate=function(n,t){return C(this.props,n)||C(this.state,t);};var x=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),x&&x(n);};var T=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);T(n,t,e,r);};var I=l$1.unmount;function L(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return L(n,t,e);})),n;}function U(n,t,e){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return U(n,t,e);}),n.__c&&n.__c.__P===t&&(n.__e&&e.insertBefore(n.__e,n.__d),n.__c.__e=!0,n.__c.__P=e)),n;}function D(){this.__u=0,this.t=null,this.__b=null;}function F(n){var t=n.__.__c;return t&&t.__a&&t.__a(n);}function V(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),I&&I(n);},(D.prototype=new d()).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=F(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l());};e.__R=i;var l=function(){if(! --r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=U(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}},c=!0===t.__h;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},D.prototype.componentWillUnmount=function(){this.t=[];},D.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=L(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&h(p,null,n.fallback);return i&&(i.__h=null),[h(p,null,e.__a?null:n.children),i];};var W=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function P(n){return this.getChildContext=function(){return n.context;},n.children;}function $(n){var e=this,r=n.i;e.componentWillUnmount=function(){P$1(null,e.l),e.l=null,e.i=null;},e.i&&e.i!==r&&e.componentWillUnmount(),n.__v?(e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n);},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n);}}),P$1(h(P,{context:e.context},n.__v),e.l)):e.l&&e.componentWillUnmount();}function j(n,e){var r=h($,{__v:n,i:e});return r.containerInfo=e,r;}(V.prototype=new d()).__a=function(n){var t=this,e=F(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),W(t,n,r)):u();};e?e(o):o();};},V.prototype.render=function(n){this.u=null,this.o=new Map();var t=x$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children;},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){W(n,e,t);});};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,B=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H="undefined"!=typeof document,Z=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n);};d.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(d.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t];},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var G=l$1.event;function J(){}function K(){return this.cancelBubble;}function Q(){return this.defaultPrevented;}l$1.event=function(n){return G&&(n=G(n)),n.persist=J,n.isPropagationStopped=K,n.isDefaultPrevented=Q,n.nativeEvent=n;};var nn={configurable:!0,get:function(){return this.class;}},tn=l$1.vnode;l$1.vnode=function(n){var t=n.type,e=n.props,u=e;if("string"==typeof t){var o=-1===t.indexOf("-");for(var i in u={},e){var l=e[i];H&&"children"===i&&"noscript"===t||"value"===i&&"defaultValue"in e&&null==l||("defaultValue"===i&&"value"in e&&null==e.value?i="value":"download"===i&&!0===l?l="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!Z(e.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&B.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===l&&(l=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),u[i]&&(i="oninputCapture")),u[i]=l);}"select"==t&&u.multiple&&Array.isArray(u.value)&&(u.value=x$1(e.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==t&&null!=u.defaultValue&&(u.value=x$1(e.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),n.props=u,e.class!=e.className&&(nn.enumerable="className"in e,null!=e.className&&(u.class=e.className),Object.defineProperty(u,"className",nn));}n.$$typeof=z,tn&&tn(n);};var en=l$1.__r;l$1.__r=function(n){en&&en(n),n.__c;};

var globalObj=typeof globalThis!=='undefined'?globalThis:window;// // TODO: streamline when killing IE11 support
if(globalObj.FullCalendarVDom){console.warn('FullCalendar VDOM already loaded');}else {globalObj.FullCalendarVDom={Component:d,createElement:h,render:P$1,createRef:y,Fragment:p,createContext:createContext$1,createPortal:j,flushToDom:flushToDom$1,unmountComponentAtNode:unmountComponentAtNode$1};}// HACKS...
// TODO: lock version
// TODO: link gh issues
function flushToDom$1(){var oldDebounceRendering=l$1.debounceRendering;// orig
var callbackQ=[];function execCallbackSync(callback){callbackQ.push(callback);}l$1.debounceRendering=execCallbackSync;P$1(h(FakeComponent,{}),document.createElement('div'));while(callbackQ.length){callbackQ.shift()();}l$1.debounceRendering=oldDebounceRendering;}var FakeComponent=/** @class */function(_super){__extends(FakeComponent,_super);function FakeComponent(){return _super!==null&&_super.apply(this,arguments)||this;}FakeComponent.prototype.render=function(){return h('div',{});};FakeComponent.prototype.componentDidMount=function(){this.setState({});};return FakeComponent;}(d);function createContext$1(defaultValue){var ContextType=B$1(defaultValue);var origProvider=ContextType.Provider;ContextType.Provider=function(){var _this=this;var isNew=!this.getChildContext;var children=origProvider.apply(this,arguments);// eslint-disable-line prefer-rest-params
if(isNew){var subs_1=[];this.shouldComponentUpdate=function(_props){if(_this.props.value!==_props.value){subs_1.forEach(function(c){c.context=_props.value;c.forceUpdate();});}};this.sub=function(c){subs_1.push(c);var old=c.componentWillUnmount;c.componentWillUnmount=function(){subs_1.splice(subs_1.indexOf(c),1);old&&old.call(c);};};}return children;};return ContextType;}function unmountComponentAtNode$1(node){P$1(null,node);}

/// <reference types="@fullcalendar/core-preact" />
if(typeof FullCalendarVDom==='undefined'){throw new Error('Please import the top-level fullcalendar lib before attempting to import a plugin.');}var Component=FullCalendarVDom.Component;var createElement=FullCalendarVDom.createElement;var render=FullCalendarVDom.render;var createRef=FullCalendarVDom.createRef;var Fragment=FullCalendarVDom.Fragment;var createContext=FullCalendarVDom.createContext;var createPortal=FullCalendarVDom.createPortal;var flushToDom=FullCalendarVDom.flushToDom;var unmountComponentAtNode=FullCalendarVDom.unmountComponentAtNode;

// import {} from './api-type-deps'
var EventSourceApi=/** @class */function(){function EventSourceApi(context,internalEventSource){this.context=context;this.internalEventSource=internalEventSource;}EventSourceApi.prototype.remove=function(){this.context.dispatch({type:'REMOVE_EVENT_SOURCE',sourceId:this.internalEventSource.sourceId});};EventSourceApi.prototype.refetch=function(){this.context.dispatch({type:'FETCH_EVENT_SOURCES',sourceIds:[this.internalEventSource.sourceId],isRefetch:true});};Object.defineProperty(EventSourceApi.prototype,"id",{get:function(){return this.internalEventSource.publicId;},enumerable:false,configurable:true});Object.defineProperty(EventSourceApi.prototype,"url",{get:function(){return this.internalEventSource.meta.url;},enumerable:false,configurable:true});Object.defineProperty(EventSourceApi.prototype,"format",{get:function(){return this.internalEventSource.meta.format;// TODO: bad. not guaranteed
},enumerable:false,configurable:true});return EventSourceApi;}();function removeElement(el){if(el.parentNode){el.parentNode.removeChild(el);}}// Querying
// ----------------------------------------------------------------------------------------------------------------
function elementClosest(el,selector){if(el.closest){return el.closest(selector);// really bad fallback for IE
// from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
}if(!document.documentElement.contains(el)){return null;}do{if(elementMatches(el,selector)){return el;}el=el.parentElement||el.parentNode;}while(el!==null&&el.nodeType===1);return null;}function elementMatches(el,selector){var method=el.matches||el.matchesSelector||el.msMatchesSelector;return method.call(el,selector);}// accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document
function findElements(container,selector){var containers=container instanceof HTMLElement?[container]:container;var allMatches=[];for(var i=0;i<containers.length;i+=1){var matches=containers[i].querySelectorAll(selector);for(var j=0;j<matches.length;j+=1){allMatches.push(matches[j]);}}return allMatches;}// accepts multiple subject els
// ----------------------------------------------------------------------------------------------------------------
var PIXEL_PROP_RE=/(top|left|right|bottom|width|height)$/i;function applyStyle(el,props){for(var propName in props){applyStyleProp(el,propName,props[propName]);}}function applyStyleProp(el,name,val){if(val==null){el.style[name]='';}else if(typeof val==='number'&&PIXEL_PROP_RE.test(name)){el.style[name]=val+"px";}else {el.style[name]=val;}}// Event Handling
// ----------------------------------------------------------------------------------------------------------------
// if intercepting bubbled events at the document/window/body level,
// and want to see originating element (the 'target'), use this util instead
// of `ev.target` because it goes within web-component boundaries.
function getEventTargetViaRoot(ev){var _a,_b;return (_b=(_a=ev.composedPath)===null||_a===void 0?void 0:_a.call(ev)[0])!==null&&_b!==void 0?_b:ev.target;}// Shadow DOM consuderations
// ----------------------------------------------------------------------------------------------------------------
function getElRoot(el){return el.getRootNode?el.getRootNode():document;}// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev){ev.preventDefault();}// Event Delegation
// ----------------------------------------------------------------------------------------------------------------
function buildDelegationHandler(selector,handler){return function(ev){var matchedChild=elementClosest(ev.target,selector);if(matchedChild){handler.call(matchedChild,ev,matchedChild);}};}function listenBySelector(container,eventType,selector,handler){var attachedHandler=buildDelegationHandler(selector,handler);container.addEventListener(eventType,attachedHandler);return function(){container.removeEventListener(eventType,attachedHandler);};}function listenToHoverBySelector(container,selector,onMouseEnter,onMouseLeave){var currentMatchedChild;return listenBySelector(container,'mouseover',selector,function(mouseOverEv,matchedChild){if(matchedChild!==currentMatchedChild){currentMatchedChild=matchedChild;onMouseEnter(mouseOverEv,matchedChild);var realOnMouseLeave_1=function(mouseLeaveEv){currentMatchedChild=null;onMouseLeave(mouseLeaveEv,matchedChild);matchedChild.removeEventListener('mouseleave',realOnMouseLeave_1);};// listen to the next mouseleave, and then unattach
matchedChild.addEventListener('mouseleave',realOnMouseLeave_1);}});}// Animation
// ----------------------------------------------------------------------------------------------------------------
var transitionEventNames=['webkitTransitionEnd','otransitionend','oTransitionEnd','msTransitionEnd','transitionend'];// triggered only when the next single subsequent transition finishes
function whenTransitionDone(el,callback){var realCallback=function(ev){callback(ev);transitionEventNames.forEach(function(eventName){el.removeEventListener(eventName,realCallback);});};transitionEventNames.forEach(function(eventName){el.addEventListener(eventName,realCallback);// cross-browser way to determine when the transition finishes
});}var guidNumber=0;function guid(){guidNumber+=1;return String(guidNumber);}/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/ // Make the mouse cursor express that an event is not allowed in the current area
function disableCursor(){document.body.classList.add('fc-not-allowed');}// Returns the mouse cursor to its original look
function enableCursor(){document.body.classList.remove('fc-not-allowed');}/* Selection
----------------------------------------------------------------------------------------------------------------------*/function preventSelection(el){el.classList.add('fc-unselectable');el.addEventListener('selectstart',preventDefault);}function allowSelection(el){el.classList.remove('fc-unselectable');el.removeEventListener('selectstart',preventDefault);}/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/function preventContextMenu(el){el.addEventListener('contextmenu',preventDefault);}function allowContextMenu(el){el.removeEventListener('contextmenu',preventDefault);}function parseFieldSpecs(input){var specs=[];var tokens=[];var i;var token;if(typeof input==='string'){tokens=input.split(/\s*,\s*/);}else if(typeof input==='function'){tokens=[input];}else if(Array.isArray(input)){tokens=input;}for(i=0;i<tokens.length;i+=1){token=tokens[i];if(typeof token==='string'){specs.push(token.charAt(0)==='-'?{field:token.substring(1),order:-1}:{field:token,order:1});}else if(typeof token==='function'){specs.push({func:token});}}return specs;}function compareByFieldSpecs(obj0,obj1,fieldSpecs){var i;var cmp;for(i=0;i<fieldSpecs.length;i+=1){cmp=compareByFieldSpec(obj0,obj1,fieldSpecs[i]);if(cmp){return cmp;}}return 0;}function compareByFieldSpec(obj0,obj1,fieldSpec){if(fieldSpec.func){return fieldSpec.func(obj0,obj1);}return flexibleCompare(obj0[fieldSpec.field],obj1[fieldSpec.field])*(fieldSpec.order||1);}function flexibleCompare(a,b){if(!a&&!b){return 0;}if(b==null){return -1;}if(a==null){return 1;}if(typeof a==='string'||typeof b==='string'){return String(a).localeCompare(String(b));}return a-b;}/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/function padStart(val,len){var s=String(val);return '000'.substr(0,len-s.length)+s;}/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/function compareNumbers(a,b){return a-b;}function isInt(n){return n%1===0;}/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/function computeSmallestCellWidth(cellEl){var allWidthEl=cellEl.querySelector('.fc-scrollgrid-shrink-frame');var contentWidthEl=cellEl.querySelector('.fc-scrollgrid-shrink-cushion');if(!allWidthEl){throw new Error('needs fc-scrollgrid-shrink-frame className');// TODO: use const
}if(!contentWidthEl){throw new Error('needs fc-scrollgrid-shrink-cushion className');}return cellEl.getBoundingClientRect().width-allWidthEl.getBoundingClientRect().width+// the cell padding+border
contentWidthEl.getBoundingClientRect().width;}var DAY_IDS=['sun','mon','tue','wed','thu','fri','sat'];// Adding
function addWeeks(m,n){var a=dateToUtcArray(m);a[2]+=n*7;return arrayToUtcDate(a);}function addDays(m,n){var a=dateToUtcArray(m);a[2]+=n;return arrayToUtcDate(a);}function addMs(m,n){var a=dateToUtcArray(m);a[6]+=n;return arrayToUtcDate(a);}// Diffing (all return floats)
// TODO: why not use ranges?
function diffWeeks(m0,m1){return diffDays(m0,m1)/7;}function diffDays(m0,m1){return (m1.valueOf()-m0.valueOf())/(1000*60*60*24);}function diffHours(m0,m1){return (m1.valueOf()-m0.valueOf())/(1000*60*60);}function diffMinutes(m0,m1){return (m1.valueOf()-m0.valueOf())/(1000*60);}function diffSeconds(m0,m1){return (m1.valueOf()-m0.valueOf())/1000;}function diffDayAndTime(m0,m1){var m0day=startOfDay(m0);var m1day=startOfDay(m1);return {years:0,months:0,days:Math.round(diffDays(m0day,m1day)),milliseconds:m1.valueOf()-m1day.valueOf()-(m0.valueOf()-m0day.valueOf())};}// Diffing Whole Units
function diffWholeWeeks(m0,m1){var d=diffWholeDays(m0,m1);if(d!==null&&d%7===0){return d/7;}return null;}function diffWholeDays(m0,m1){if(timeAsMs(m0)===timeAsMs(m1)){return Math.round(diffDays(m0,m1));}return null;}// Start-Of
function startOfDay(m){return arrayToUtcDate([m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()]);}function startOfHour(m){return arrayToUtcDate([m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate(),m.getUTCHours()]);}function startOfMinute(m){return arrayToUtcDate([m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate(),m.getUTCHours(),m.getUTCMinutes()]);}function startOfSecond(m){return arrayToUtcDate([m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate(),m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds()]);}// Week Computation
function weekOfYear(marker,dow,doy){var y=marker.getUTCFullYear();var w=weekOfGivenYear(marker,y,dow,doy);if(w<1){return weekOfGivenYear(marker,y-1,dow,doy);}var nextW=weekOfGivenYear(marker,y+1,dow,doy);if(nextW>=1){return Math.min(w,nextW);}return w;}function weekOfGivenYear(marker,year,dow,doy){var firstWeekStart=arrayToUtcDate([year,0,1+firstWeekOffset(year,dow,doy)]);var dayStart=startOfDay(marker);var days=Math.round(diffDays(firstWeekStart,dayStart));return Math.floor(days/7)+1;// zero-indexed
}// start-of-first-week - start-of-year
function firstWeekOffset(year,dow,doy){// first-week day -- which january is always in the first week (4 for iso, 1 for other)
var fwd=7+dow-doy;// first-week day local weekday -- which local weekday is fwd
var fwdlw=(7+arrayToUtcDate([year,0,fwd]).getUTCDay()-dow)%7;return -fwdlw+fwd-1;}// Array Conversion
function dateToLocalArray(date){return [date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()];}function arrayToLocalDate(a){return new Date(a[0],a[1]||0,a[2]==null?1:a[2],// day of month
a[3]||0,a[4]||0,a[5]||0);}function dateToUtcArray(date){return [date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),date.getUTCMilliseconds()];}function arrayToUtcDate(a){// according to web standards (and Safari), a month index is required.
// massage if only given a year.
if(a.length===1){a=a.concat([0]);}return new Date(Date.UTC.apply(Date,a));}// Other Utils
function isValidDate(m){return !isNaN(m.valueOf());}function timeAsMs(m){return m.getUTCHours()*1000*60*60+m.getUTCMinutes()*1000*60+m.getUTCSeconds()*1000+m.getUTCMilliseconds();}function createEventInstance(defId,range,forcedStartTzo,forcedEndTzo){return {instanceId:guid(),defId:defId,range:range,forcedStartTzo:forcedStartTzo==null?null:forcedStartTzo,forcedEndTzo:forcedEndTzo==null?null:forcedEndTzo};}var hasOwnProperty=Object.prototype.hasOwnProperty;// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs,complexPropsMap){var dest={};if(complexPropsMap){for(var name_1 in complexPropsMap){var complexObjs=[];// collect the trailing object values, stopping when a non-object is discovered
for(var i=propObjs.length-1;i>=0;i-=1){var val=propObjs[i][name_1];if(typeof val==='object'&&val){// non-null object
complexObjs.unshift(val);}else if(val!==undefined){dest[name_1]=val;// if there were no objects, this value will be used
break;}}// if the trailing values were objects, use the merged value
if(complexObjs.length){dest[name_1]=mergeProps(complexObjs);}}}// copy values into the destination, going from last to first
for(var i=propObjs.length-1;i>=0;i-=1){var props=propObjs[i];for(var name_2 in props){if(!(name_2 in dest)){// if already assigned by previous props or complex props, don't reassign
dest[name_2]=props[name_2];}}}return dest;}function filterHash(hash,func){var filtered={};for(var key in hash){if(func(hash[key],key)){filtered[key]=hash[key];}}return filtered;}function mapHash(hash,func){var newHash={};for(var key in hash){newHash[key]=func(hash[key],key);}return newHash;}function arrayToHash(a){var hash={};for(var _i=0,a_1=a;_i<a_1.length;_i++){var item=a_1[_i];hash[item]=true;}return hash;}function hashValuesToArray(obj){var a=[];for(var key in obj){a.push(obj[key]);}return a;}function isPropsEqual(obj0,obj1){if(obj0===obj1){return true;}for(var key in obj0){if(hasOwnProperty.call(obj0,key)){if(!(key in obj1)){return false;}}}for(var key in obj1){if(hasOwnProperty.call(obj1,key)){if(obj0[key]!==obj1[key]){return false;}}}return true;}function getUnequalProps(obj0,obj1){var keys=[];for(var key in obj0){if(hasOwnProperty.call(obj0,key)){if(!(key in obj1)){keys.push(key);}}}for(var key in obj1){if(hasOwnProperty.call(obj1,key)){if(obj0[key]!==obj1[key]){keys.push(key);}}}return keys;}function compareObjs(oldProps,newProps,equalityFuncs){if(equalityFuncs===void 0){equalityFuncs={};}if(oldProps===newProps){return true;}for(var key in newProps){if(key in oldProps&&isObjValsEqual(oldProps[key],newProps[key],equalityFuncs[key]));else {return false;}}// check for props that were omitted in the new
for(var key in oldProps){if(!(key in newProps)){return false;}}return true;}/*
assumed "true" equality for handler names like "onReceiveSomething"
*/function isObjValsEqual(val0,val1,comparator){if(val0===val1||comparator===true){return true;}if(comparator){return comparator(val0,val1);}return false;}function collectFromHash(hash,startIndex,endIndex,step){if(startIndex===void 0){startIndex=0;}if(step===void 0){step=1;}var res=[];if(endIndex==null){endIndex=Object.keys(hash).length;}for(var i=startIndex;i<endIndex;i+=step){var val=hash[i];if(val!==undefined){// will disregard undefined for sparse arrays
res.push(val);}}return res;}function parseRecurring(refined,defaultAllDay,dateEnv,recurringTypes){for(var i=0;i<recurringTypes.length;i+=1){var parsed=recurringTypes[i].parse(refined,dateEnv);if(parsed){var allDay=refined.allDay;if(allDay==null){allDay=defaultAllDay;if(allDay==null){allDay=parsed.allDayGuess;if(allDay==null){allDay=false;}}}return {allDay:allDay,duration:parsed.duration,typeData:parsed.typeData,typeId:i};}}return null;}function expandRecurring(eventStore,framingRange,context){var dateEnv=context.dateEnv,pluginHooks=context.pluginHooks,options=context.options;var defs=eventStore.defs,instances=eventStore.instances;// remove existing recurring instances
// TODO: bad. always expand events as a second step
instances=filterHash(instances,function(instance){return !defs[instance.defId].recurringDef;});for(var defId in defs){var def=defs[defId];if(def.recurringDef){var duration=def.recurringDef.duration;if(!duration){duration=def.allDay?options.defaultAllDayEventDuration:options.defaultTimedEventDuration;}var starts=expandRecurringRanges(def,duration,framingRange,dateEnv,pluginHooks.recurringTypes);for(var _i=0,starts_1=starts;_i<starts_1.length;_i++){var start=starts_1[_i];var instance=createEventInstance(defId,{start:start,end:dateEnv.add(start,duration)});instances[instance.instanceId]=instance;}}}return {defs:defs,instances:instances};}/*
Event MUST have a recurringDef
*/function expandRecurringRanges(eventDef,duration,framingRange,dateEnv,recurringTypes){var typeDef=recurringTypes[eventDef.recurringDef.typeId];var markers=typeDef.expand(eventDef.recurringDef.typeData,{start:dateEnv.subtract(framingRange.start,duration),end:framingRange.end},dateEnv);// the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
if(eventDef.allDay){markers=markers.map(startOfDay);}return markers;}var PARSE_RE=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;// Parsing and Creation
function createDuration(input,unit){var _a;if(typeof input==='string'){return parseString(input);}if(typeof input==='object'&&input){// non-null object
return parseObject(input);}if(typeof input==='number'){return parseObject((_a={},_a[unit||'milliseconds']=input,_a));}return null;}function parseString(s){var m=PARSE_RE.exec(s);if(m){var sign=m[1]?-1:1;return {years:0,months:0,days:sign*(m[2]?parseInt(m[2],10):0),milliseconds:sign*((m[3]?parseInt(m[3],10):0)*60*60*1000+// hours
(m[4]?parseInt(m[4],10):0)*60*1000+// minutes
(m[5]?parseInt(m[5],10):0)*1000+(// seconds
m[6]?parseInt(m[6],10):0)// ms
)};}return null;}function parseObject(obj){var duration={years:obj.years||obj.year||0,months:obj.months||obj.month||0,days:obj.days||obj.day||0,milliseconds:(obj.hours||obj.hour||0)*60*60*1000+// hours
(obj.minutes||obj.minute||0)*60*1000+// minutes
(obj.seconds||obj.second||0)*1000+(// seconds
obj.milliseconds||obj.millisecond||obj.ms||0)// ms
};var weeks=obj.weeks||obj.week;if(weeks){duration.days+=weeks*7;duration.specifiedWeeks=true;}return duration;}// Equality
function durationsEqual(d0,d1){return d0.years===d1.years&&d0.months===d1.months&&d0.days===d1.days&&d0.milliseconds===d1.milliseconds;}function subtractDurations(d1,d0){return {years:d1.years-d0.years,months:d1.months-d0.months,days:d1.days-d0.days,milliseconds:d1.milliseconds-d0.milliseconds};}// "Rough" because they are based on average-case Gregorian months/years
function asRoughYears(dur){return asRoughDays(dur)/365;}function asRoughMonths(dur){return asRoughDays(dur)/30;}function asRoughDays(dur){return asRoughMs(dur)/864e5;}function asRoughMs(dur){return dur.years*(365*864e5)+dur.months*(30*864e5)+dur.days*864e5+dur.milliseconds;}// Advanced Math
function greatestDurationDenominator(dur){var ms=dur.milliseconds;if(ms){if(ms%1000!==0){return {unit:'millisecond',value:ms};}if(ms%(1000*60)!==0){return {unit:'second',value:ms/1000};}if(ms%(1000*60*60)!==0){return {unit:'minute',value:ms/(1000*60)};}if(ms){return {unit:'hour',value:ms/(1000*60*60)};}}if(dur.days){if(dur.specifiedWeeks&&dur.days%7===0){return {unit:'week',value:dur.days/7};}return {unit:'day',value:dur.days};}if(dur.months){return {unit:'month',value:dur.months};}if(dur.years){return {unit:'year',value:dur.years};}return {unit:'millisecond',value:0};}// timeZoneOffset is in minutes
function buildIsoString(marker,timeZoneOffset,stripZeroTime){if(stripZeroTime===void 0){stripZeroTime=false;}var s=marker.toISOString();s=s.replace('.000','');if(stripZeroTime){s=s.replace('T00:00:00Z','');}if(s.length>10){// time part wasn't stripped, can add timezone info
if(timeZoneOffset==null){s=s.replace('Z','');}else if(timeZoneOffset!==0){s=s.replace('Z',formatTimeZoneOffset(timeZoneOffset,true));}// otherwise, its UTC-0 and we want to keep the Z
}return s;}// formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"
function formatDayString(marker){return marker.toISOString().replace(/T.*$/,'');}// TODO: use Date::toISOString and use everything after the T?
function formatTimeZoneOffset(minutes,doIso){if(doIso===void 0){doIso=false;}var sign=minutes<0?'-':'+';var abs=Math.abs(minutes);var hours=Math.floor(abs/60);var mins=Math.round(abs%60);if(doIso){return sign+padStart(hours,2)+":"+padStart(mins,2);}return "GMT"+sign+hours+(mins?":"+padStart(mins,2):'');}// TODO: new util arrayify?
function isArraysEqual(a0,a1,equalityFunc){if(a0===a1){return true;}var len=a0.length;var i;if(len!==a1.length){// not array? or not same length?
return false;}for(i=0;i<len;i+=1){if(!(equalityFunc?equalityFunc(a0[i],a1[i]):a0[i]===a1[i])){return false;}}return true;}function memoize(workerFunc,resEquality,teardownFunc){var currentArgs;var currentRes;return function(){var newArgs=[];for(var _i=0;_i<arguments.length;_i++){newArgs[_i]=arguments[_i];}if(!currentArgs){currentRes=workerFunc.apply(this,newArgs);}else if(!isArraysEqual(currentArgs,newArgs)){if(teardownFunc){teardownFunc(currentRes);}var res=workerFunc.apply(this,newArgs);if(!resEquality||!resEquality(res,currentRes)){currentRes=res;}}currentArgs=newArgs;return currentRes;};}function memoizeObjArg(workerFunc,resEquality,teardownFunc){var _this=this;var currentArg;var currentRes;return function(newArg){if(!currentArg){currentRes=workerFunc.call(_this,newArg);}else if(!isPropsEqual(currentArg,newArg)){if(teardownFunc){teardownFunc(currentRes);}var res=workerFunc.call(_this,newArg);if(!resEquality||!resEquality(res,currentRes)){currentRes=res;}}currentArg=newArg;return currentRes;};}var EXTENDED_SETTINGS_AND_SEVERITIES={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0};var STANDARD_DATE_PROP_SEVERITIES={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1};var MERIDIEM_RE=/\s*([ap])\.?m\.?/i;// eats up leading spaces too
var COMMA_RE=/,/g;// we need re for globalness
var MULTI_SPACE_RE=/\s+/g;var LTR_RE=/\u200e/g;// control character
var UTC_RE=/UTC|GMT/;var NativeFormatter=/** @class */function(){function NativeFormatter(formatSettings){var standardDateProps={};var extendedSettings={};var severity=0;for(var name_1 in formatSettings){if(name_1 in EXTENDED_SETTINGS_AND_SEVERITIES){extendedSettings[name_1]=formatSettings[name_1];severity=Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1],severity);}else {standardDateProps[name_1]=formatSettings[name_1];if(name_1 in STANDARD_DATE_PROP_SEVERITIES){// TODO: what about hour12? no severity
severity=Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1],severity);}}}this.standardDateProps=standardDateProps;this.extendedSettings=extendedSettings;this.severity=severity;this.buildFormattingFunc=memoize(buildFormattingFunc);}NativeFormatter.prototype.format=function(date,context){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,context)(date);};NativeFormatter.prototype.formatRange=function(start,end,context,betterDefaultSeparator){var _a=this,standardDateProps=_a.standardDateProps,extendedSettings=_a.extendedSettings;var diffSeverity=computeMarkerDiffSeverity(start.marker,end.marker,context.calendarSystem);if(!diffSeverity){return this.format(start,context);}var biggestUnitForPartial=diffSeverity;if(biggestUnitForPartial>1&&(// the two dates are different in a way that's larger scale than time
standardDateProps.year==='numeric'||standardDateProps.year==='2-digit')&&(standardDateProps.month==='numeric'||standardDateProps.month==='2-digit')&&(standardDateProps.day==='numeric'||standardDateProps.day==='2-digit')){biggestUnitForPartial=1;// make it look like the dates are only different in terms of time
}var full0=this.format(start,context);var full1=this.format(end,context);if(full0===full1){return full0;}var partialDateProps=computePartialFormattingOptions(standardDateProps,biggestUnitForPartial);var partialFormattingFunc=buildFormattingFunc(partialDateProps,extendedSettings,context);var partial0=partialFormattingFunc(start);var partial1=partialFormattingFunc(end);var insertion=findCommonInsertion(full0,partial0,full1,partial1);var separator=extendedSettings.separator||betterDefaultSeparator||context.defaultSeparator||'';if(insertion){return insertion.before+partial0+separator+partial1+insertion.after;}return full0+separator+full1;};NativeFormatter.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return 'year';case 4:return 'month';case 3:return 'week';case 2:return 'day';default:return 'time';// really?
}};return NativeFormatter;}();function buildFormattingFunc(standardDateProps,extendedSettings,context){var standardDatePropCnt=Object.keys(standardDateProps).length;if(standardDatePropCnt===1&&standardDateProps.timeZoneName==='short'){return function(date){return formatTimeZoneOffset(date.timeZoneOffset);};}if(standardDatePropCnt===0&&extendedSettings.week){return function(date){return formatWeekNumber(context.computeWeekNumber(date.marker),context.weekText,context.locale,extendedSettings.week);};}return buildNativeFormattingFunc(standardDateProps,extendedSettings,context);}function buildNativeFormattingFunc(standardDateProps,extendedSettings,context){standardDateProps=__assign$1({},standardDateProps);// copy
extendedSettings=__assign$1({},extendedSettings);// copy
sanitizeSettings(standardDateProps,extendedSettings);standardDateProps.timeZone='UTC';// we leverage the only guaranteed timeZone for our UTC markers
var normalFormat=new Intl.DateTimeFormat(context.locale.codes,standardDateProps);var zeroFormat;// needed?
if(extendedSettings.omitZeroMinute){var zeroProps=__assign$1({},standardDateProps);delete zeroProps.minute;// seconds and ms were already considered in sanitizeSettings
zeroFormat=new Intl.DateTimeFormat(context.locale.codes,zeroProps);}return function(date){var marker=date.marker;var format;if(zeroFormat&&!marker.getUTCMinutes()){format=zeroFormat;}else {format=normalFormat;}var s=format.format(marker);return postProcess(s,date,standardDateProps,extendedSettings,context);};}function sanitizeSettings(standardDateProps,extendedSettings){// deal with a browser inconsistency where formatting the timezone
// requires that the hour/minute be present.
if(standardDateProps.timeZoneName){if(!standardDateProps.hour){standardDateProps.hour='2-digit';}if(!standardDateProps.minute){standardDateProps.minute='2-digit';}}// only support short timezone names
if(standardDateProps.timeZoneName==='long'){standardDateProps.timeZoneName='short';}// if requesting to display seconds, MUST display minutes
if(extendedSettings.omitZeroMinute&&(standardDateProps.second||standardDateProps.millisecond)){delete extendedSettings.omitZeroMinute;}}function postProcess(s,date,standardDateProps,extendedSettings,context){s=s.replace(LTR_RE,'');// remove left-to-right control chars. do first. good for other regexes
if(standardDateProps.timeZoneName==='short'){s=injectTzoStr(s,context.timeZone==='UTC'||date.timeZoneOffset==null?'UTC':// important to normalize for IE, which does "GMT"
formatTimeZoneOffset(date.timeZoneOffset));}if(extendedSettings.omitCommas){s=s.replace(COMMA_RE,'').trim();}if(extendedSettings.omitZeroMinute){s=s.replace(':00','');// zeroFormat doesn't always achieve this
}// ^ do anything that might create adjacent spaces before this point,
// because MERIDIEM_RE likes to eat up loading spaces
if(extendedSettings.meridiem===false){s=s.replace(MERIDIEM_RE,'').trim();}else if(extendedSettings.meridiem==='narrow'){// a/p
s=s.replace(MERIDIEM_RE,function(m0,m1){return m1.toLocaleLowerCase();});}else if(extendedSettings.meridiem==='short'){// am/pm
s=s.replace(MERIDIEM_RE,function(m0,m1){return m1.toLocaleLowerCase()+"m";});}else if(extendedSettings.meridiem==='lowercase'){// other meridiem transformers already converted to lowercase
s=s.replace(MERIDIEM_RE,function(m0){return m0.toLocaleLowerCase();});}s=s.replace(MULTI_SPACE_RE,' ');s=s.trim();return s;}function injectTzoStr(s,tzoStr){var replaced=false;s=s.replace(UTC_RE,function(){replaced=true;return tzoStr;});// IE11 doesn't include UTC/GMT in the original string, so append to end
if(!replaced){s+=" "+tzoStr;}return s;}function formatWeekNumber(num,weekText,locale,display){var parts=[];if(display==='narrow'){parts.push(weekText);}else if(display==='short'){parts.push(weekText,' ');}// otherwise, considered 'numeric'
parts.push(locale.simpleNumberFormat.format(num));if(locale.options.direction==='rtl'){// TODO: use control characters instead?
parts.reverse();}return parts.join('');}// Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger
function computeMarkerDiffSeverity(d0,d1,ca){if(ca.getMarkerYear(d0)!==ca.getMarkerYear(d1)){return 5;}if(ca.getMarkerMonth(d0)!==ca.getMarkerMonth(d1)){return 4;}if(ca.getMarkerDay(d0)!==ca.getMarkerDay(d1)){return 2;}if(timeAsMs(d0)!==timeAsMs(d1)){return 1;}return 0;}function computePartialFormattingOptions(options,biggestUnit){var partialOptions={};for(var name_2 in options){if(!(name_2 in STANDARD_DATE_PROP_SEVERITIES)||// not a date part prop (like timeZone)
STANDARD_DATE_PROP_SEVERITIES[name_2]<=biggestUnit){partialOptions[name_2]=options[name_2];}}return partialOptions;}function findCommonInsertion(full0,partial0,full1,partial1){var i0=0;while(i0<full0.length){var found0=full0.indexOf(partial0,i0);if(found0===-1){break;}var before0=full0.substr(0,found0);i0=found0+partial0.length;var after0=full0.substr(i0);var i1=0;while(i1<full1.length){var found1=full1.indexOf(partial1,i1);if(found1===-1){break;}var before1=full1.substr(0,found1);i1=found1+partial1.length;var after1=full1.substr(i1);if(before0===before1&&after0===after1){return {before:before0,after:after0};}}}return null;}function expandZonedMarker(dateInfo,calendarSystem){var a=calendarSystem.markerToArray(dateInfo.marker);return {marker:dateInfo.marker,timeZoneOffset:dateInfo.timeZoneOffset,array:a,year:a[0],month:a[1],day:a[2],hour:a[3],minute:a[4],second:a[5],millisecond:a[6]};}function createVerboseFormattingArg(start,end,context,betterDefaultSeparator){var startInfo=expandZonedMarker(start,context.calendarSystem);var endInfo=end?expandZonedMarker(end,context.calendarSystem):null;return {date:startInfo,start:startInfo,end:endInfo,timeZone:context.timeZone,localeCodes:context.locale.codes,defaultSeparator:betterDefaultSeparator||context.defaultSeparator};}/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/ /*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/var CmdFormatter=/** @class */function(){function CmdFormatter(cmdStr){this.cmdStr=cmdStr;}CmdFormatter.prototype.format=function(date,context,betterDefaultSeparator){return context.cmdFormatter(this.cmdStr,createVerboseFormattingArg(date,null,context,betterDefaultSeparator));};CmdFormatter.prototype.formatRange=function(start,end,context,betterDefaultSeparator){return context.cmdFormatter(this.cmdStr,createVerboseFormattingArg(start,end,context,betterDefaultSeparator));};return CmdFormatter;}();var FuncFormatter=/** @class */function(){function FuncFormatter(func){this.func=func;}FuncFormatter.prototype.format=function(date,context,betterDefaultSeparator){return this.func(createVerboseFormattingArg(date,null,context,betterDefaultSeparator));};FuncFormatter.prototype.formatRange=function(start,end,context,betterDefaultSeparator){return this.func(createVerboseFormattingArg(start,end,context,betterDefaultSeparator));};return FuncFormatter;}();function createFormatter(input){if(typeof input==='object'&&input){// non-null object
return new NativeFormatter(input);}if(typeof input==='string'){return new CmdFormatter(input);}if(typeof input==='function'){return new FuncFormatter(input);}return null;}// base options
// ------------
var BASE_OPTION_REFINERS={navLinkDayClick:identity,navLinkWeekClick:identity,duration:createDuration,bootstrapFontAwesome:identity,buttonIcons:identity,customButtons:identity,defaultAllDayEventDuration:createDuration,defaultTimedEventDuration:createDuration,nextDayThreshold:createDuration,scrollTime:createDuration,scrollTimeReset:Boolean,slotMinTime:createDuration,slotMaxTime:createDuration,dayPopoverFormat:createFormatter,slotDuration:createDuration,snapDuration:createDuration,headerToolbar:identity,footerToolbar:identity,defaultRangeSeparator:String,titleRangeSeparator:String,forceEventDuration:Boolean,dayHeaders:Boolean,dayHeaderFormat:createFormatter,dayHeaderClassNames:identity,dayHeaderContent:identity,dayHeaderDidMount:identity,dayHeaderWillUnmount:identity,dayCellClassNames:identity,dayCellContent:identity,dayCellDidMount:identity,dayCellWillUnmount:identity,initialView:String,aspectRatio:Number,weekends:Boolean,weekNumberCalculation:identity,weekNumbers:Boolean,weekNumberClassNames:identity,weekNumberContent:identity,weekNumberDidMount:identity,weekNumberWillUnmount:identity,editable:Boolean,viewClassNames:identity,viewDidMount:identity,viewWillUnmount:identity,nowIndicator:Boolean,nowIndicatorClassNames:identity,nowIndicatorContent:identity,nowIndicatorDidMount:identity,nowIndicatorWillUnmount:identity,showNonCurrentDates:Boolean,lazyFetching:Boolean,startParam:String,endParam:String,timeZoneParam:String,timeZone:String,locales:identity,locale:identity,themeSystem:String,dragRevertDuration:Number,dragScroll:Boolean,allDayMaintainDuration:Boolean,unselectAuto:Boolean,dropAccept:identity,eventOrder:parseFieldSpecs,eventOrderStrict:Boolean,handleWindowResize:Boolean,windowResizeDelay:Number,longPressDelay:Number,eventDragMinDistance:Number,expandRows:Boolean,height:identity,contentHeight:identity,direction:String,weekNumberFormat:createFormatter,eventResizableFromStart:Boolean,displayEventTime:Boolean,displayEventEnd:Boolean,weekText:String,progressiveEventRendering:Boolean,businessHours:identity,initialDate:identity,now:identity,eventDataTransform:identity,stickyHeaderDates:identity,stickyFooterScrollbar:identity,viewHeight:identity,defaultAllDay:Boolean,eventSourceFailure:identity,eventSourceSuccess:identity,eventDisplay:String,eventStartEditable:Boolean,eventDurationEditable:Boolean,eventOverlap:identity,eventConstraint:identity,eventAllow:identity,eventBackgroundColor:String,eventBorderColor:String,eventTextColor:String,eventColor:String,eventClassNames:identity,eventContent:identity,eventDidMount:identity,eventWillUnmount:identity,selectConstraint:identity,selectOverlap:identity,selectAllow:identity,droppable:Boolean,unselectCancel:String,slotLabelFormat:identity,slotLaneClassNames:identity,slotLaneContent:identity,slotLaneDidMount:identity,slotLaneWillUnmount:identity,slotLabelClassNames:identity,slotLabelContent:identity,slotLabelDidMount:identity,slotLabelWillUnmount:identity,dayMaxEvents:identity,dayMaxEventRows:identity,dayMinWidth:Number,slotLabelInterval:createDuration,allDayText:String,allDayClassNames:identity,allDayContent:identity,allDayDidMount:identity,allDayWillUnmount:identity,slotMinWidth:Number,navLinks:Boolean,eventTimeFormat:createFormatter,rerenderDelay:Number,moreLinkText:identity,selectMinDistance:Number,selectable:Boolean,selectLongPressDelay:Number,eventLongPressDelay:Number,selectMirror:Boolean,eventMaxStack:Number,eventMinHeight:Number,eventMinWidth:Number,eventShortHeight:Number,slotEventOverlap:Boolean,plugins:identity,firstDay:Number,dayCount:Number,dateAlignment:String,dateIncrement:createDuration,hiddenDays:identity,monthMode:Boolean,fixedWeekCount:Boolean,validRange:identity,visibleRange:identity,titleFormat:identity,// only used by list-view, but languages define the value, so we need it in base options
noEventsText:String,moreLinkClick:identity,moreLinkClassNames:identity,moreLinkContent:identity,moreLinkDidMount:identity,moreLinkWillUnmount:identity};// do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.
var BASE_OPTION_DEFAULTS={eventDisplay:'auto',defaultRangeSeparator:' - ',titleRangeSeparator:' \u2013 ',defaultTimedEventDuration:'01:00:00',defaultAllDayEventDuration:{day:1},forceEventDuration:false,nextDayThreshold:'00:00:00',dayHeaders:true,initialView:'',aspectRatio:1.35,headerToolbar:{start:'title',center:'',end:'today prev,next'},weekends:true,weekNumbers:false,weekNumberCalculation:'local',editable:false,nowIndicator:false,scrollTime:'06:00:00',scrollTimeReset:true,slotMinTime:'00:00:00',slotMaxTime:'24:00:00',showNonCurrentDates:true,lazyFetching:true,startParam:'start',endParam:'end',timeZoneParam:'timeZone',timeZone:'local',locales:[],locale:'',themeSystem:'standard',dragRevertDuration:500,dragScroll:true,allDayMaintainDuration:false,unselectAuto:true,dropAccept:'*',eventOrder:'start,-duration,allDay,title',dayPopoverFormat:{month:'long',day:'numeric',year:'numeric'},handleWindowResize:true,windowResizeDelay:100,longPressDelay:1000,eventDragMinDistance:5,expandRows:false,navLinks:false,selectable:false,eventMinHeight:15,eventMinWidth:30,eventShortHeight:30};// calendar listeners
// ------------------
var CALENDAR_LISTENER_REFINERS={datesSet:identity,eventsSet:identity,eventAdd:identity,eventChange:identity,eventRemove:identity,windowResize:identity,eventClick:identity,eventMouseEnter:identity,eventMouseLeave:identity,select:identity,unselect:identity,loading:identity,// internal
_unmount:identity,_beforeprint:identity,_afterprint:identity,_noEventDrop:identity,_noEventResize:identity,_resize:identity,_scrollRequest:identity};// calendar-specific options
// -------------------------
var CALENDAR_OPTION_REFINERS={buttonText:identity,views:identity,plugins:identity,initialEvents:identity,events:identity,eventSources:identity};var COMPLEX_OPTION_COMPARATORS={headerToolbar:isBoolComplexEqual,footerToolbar:isBoolComplexEqual,buttonText:isBoolComplexEqual,buttonIcons:isBoolComplexEqual};function isBoolComplexEqual(a,b){if(typeof a==='object'&&typeof b==='object'&&a&&b){// both non-null objects
return isPropsEqual(a,b);}return a===b;}// view-specific options
// ---------------------
var VIEW_OPTION_REFINERS={type:String,component:identity,buttonText:String,buttonTextKey:String,dateProfileGeneratorClass:identity,usesMinMaxTime:Boolean,classNames:identity,content:identity,didMount:identity,willUnmount:identity};// util funcs
// ----------------------------------------------------------------------------------------------------
function mergeRawOptions(optionSets){return mergeProps(optionSets,COMPLEX_OPTION_COMPARATORS);}function refineProps(input,refiners){var refined={};var extra={};for(var propName in refiners){if(propName in input){refined[propName]=refiners[propName](input[propName]);}}for(var propName in input){if(!(propName in refiners)){extra[propName]=input[propName];}}return {refined:refined,extra:extra};}function identity(raw){return raw;}function parseEvents(rawEvents,eventSource,context,allowOpenRange){var eventStore=createEmptyEventStore();var eventRefiners=buildEventRefiners(context);for(var _i=0,rawEvents_1=rawEvents;_i<rawEvents_1.length;_i++){var rawEvent=rawEvents_1[_i];var tuple=parseEvent(rawEvent,eventSource,context,allowOpenRange,eventRefiners);if(tuple){eventTupleToStore(tuple,eventStore);}}return eventStore;}function eventTupleToStore(tuple,eventStore){if(eventStore===void 0){eventStore=createEmptyEventStore();}eventStore.defs[tuple.def.defId]=tuple.def;if(tuple.instance){eventStore.instances[tuple.instance.instanceId]=tuple.instance;}return eventStore;}// retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?
function getRelevantEvents(eventStore,instanceId){var instance=eventStore.instances[instanceId];if(instance){var def_1=eventStore.defs[instance.defId];// get events/instances with same group
var newStore=filterEventStoreDefs(eventStore,function(lookDef){return isEventDefsGrouped(def_1,lookDef);});// add the original
// TODO: wish we could use eventTupleToStore or something like it
newStore.defs[def_1.defId]=def_1;newStore.instances[instance.instanceId]=instance;return newStore;}return createEmptyEventStore();}function isEventDefsGrouped(def0,def1){return Boolean(def0.groupId&&def0.groupId===def1.groupId);}function createEmptyEventStore(){return {defs:{},instances:{}};}function mergeEventStores(store0,store1){return {defs:__assign$1(__assign$1({},store0.defs),store1.defs),instances:__assign$1(__assign$1({},store0.instances),store1.instances)};}function filterEventStoreDefs(eventStore,filterFunc){var defs=filterHash(eventStore.defs,filterFunc);var instances=filterHash(eventStore.instances,function(instance){return defs[instance.defId]// still exists?
;});return {defs:defs,instances:instances};}function excludeSubEventStore(master,sub){var defs=master.defs,instances=master.instances;var filteredDefs={};var filteredInstances={};for(var defId in defs){if(!sub.defs[defId]){// not explicitly excluded
filteredDefs[defId]=defs[defId];}}for(var instanceId in instances){if(!sub.instances[instanceId]&&// not explicitly excluded
filteredDefs[instances[instanceId].defId]// def wasn't filtered away
){filteredInstances[instanceId]=instances[instanceId];}}return {defs:filteredDefs,instances:filteredInstances};}function normalizeConstraint(input,context){if(Array.isArray(input)){return parseEvents(input,null,context,true);// allowOpenRange=true
}if(typeof input==='object'&&input){// non-null object
return parseEvents([input],null,context,true);// allowOpenRange=true
}if(input!=null){return String(input);}return null;}function parseClassNames(raw){if(Array.isArray(raw)){return raw;}if(typeof raw==='string'){return raw.split(/\s+/);}return [];}// TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props
var EVENT_UI_REFINERS={display:String,editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:identity,overlap:identity,allow:identity,className:parseClassNames,classNames:parseClassNames,color:String,backgroundColor:String,borderColor:String,textColor:String};var EMPTY_EVENT_UI={display:null,startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:'',borderColor:'',textColor:'',classNames:[]};function createEventUi(refined,context){var constraint=normalizeConstraint(refined.constraint,context);return {display:refined.display||null,startEditable:refined.startEditable!=null?refined.startEditable:refined.editable,durationEditable:refined.durationEditable!=null?refined.durationEditable:refined.editable,constraints:constraint!=null?[constraint]:[],overlap:refined.overlap!=null?refined.overlap:null,allows:refined.allow!=null?[refined.allow]:[],backgroundColor:refined.backgroundColor||refined.color||'',borderColor:refined.borderColor||refined.color||'',textColor:refined.textColor||'',classNames:(refined.className||[]).concat(refined.classNames||[])// join singular and plural
};}// TODO: prevent against problems with <2 args!
function combineEventUis(uis){return uis.reduce(combineTwoEventUis,EMPTY_EVENT_UI);}function combineTwoEventUis(item0,item1){return {display:item1.display!=null?item1.display:item0.display,startEditable:item1.startEditable!=null?item1.startEditable:item0.startEditable,durationEditable:item1.durationEditable!=null?item1.durationEditable:item0.durationEditable,constraints:item0.constraints.concat(item1.constraints),overlap:typeof item1.overlap==='boolean'?item1.overlap:item0.overlap,allows:item0.allows.concat(item1.allows),backgroundColor:item1.backgroundColor||item0.backgroundColor,borderColor:item1.borderColor||item0.borderColor,textColor:item1.textColor||item0.textColor,classNames:item0.classNames.concat(item1.classNames)};}var EVENT_NON_DATE_REFINERS={id:String,groupId:String,title:String,url:String};var EVENT_DATE_REFINERS={start:identity,end:identity,date:identity,allDay:Boolean};var EVENT_REFINERS=__assign$1(__assign$1(__assign$1({},EVENT_NON_DATE_REFINERS),EVENT_DATE_REFINERS),{extendedProps:identity});function parseEvent(raw,eventSource,context,allowOpenRange,refiners){if(refiners===void 0){refiners=buildEventRefiners(context);}var _a=refineEventDef(raw,context,refiners),refined=_a.refined,extra=_a.extra;var defaultAllDay=computeIsDefaultAllDay(eventSource,context);var recurringRes=parseRecurring(refined,defaultAllDay,context.dateEnv,context.pluginHooks.recurringTypes);if(recurringRes){var def=parseEventDef(refined,extra,eventSource?eventSource.sourceId:'',recurringRes.allDay,Boolean(recurringRes.duration),context);def.recurringDef={typeId:recurringRes.typeId,typeData:recurringRes.typeData,duration:recurringRes.duration};return {def:def,instance:null};}var singleRes=parseSingle(refined,defaultAllDay,context,allowOpenRange);if(singleRes){var def=parseEventDef(refined,extra,eventSource?eventSource.sourceId:'',singleRes.allDay,singleRes.hasEnd,context);var instance=createEventInstance(def.defId,singleRes.range,singleRes.forcedStartTzo,singleRes.forcedEndTzo);return {def:def,instance:instance};}return null;}function refineEventDef(raw,context,refiners){if(refiners===void 0){refiners=buildEventRefiners(context);}return refineProps(raw,refiners);}function buildEventRefiners(context){return __assign$1(__assign$1(__assign$1({},EVENT_UI_REFINERS),EVENT_REFINERS),context.pluginHooks.eventRefiners);}/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/function parseEventDef(refined,extra,sourceId,allDay,hasEnd,context){var def={title:refined.title||'',groupId:refined.groupId||'',publicId:refined.id||'',url:refined.url||'',recurringDef:null,defId:guid(),sourceId:sourceId,allDay:allDay,hasEnd:hasEnd,ui:createEventUi(refined,context),extendedProps:__assign$1(__assign$1({},refined.extendedProps||{}),extra)};for(var _i=0,_a=context.pluginHooks.eventDefMemberAdders;_i<_a.length;_i++){var memberAdder=_a[_i];__assign$1(def,memberAdder(refined));}// help out EventApi from having user modify props
Object.freeze(def.ui.classNames);Object.freeze(def.extendedProps);return def;}function parseSingle(refined,defaultAllDay,context,allowOpenRange){var allDay=refined.allDay;var startMeta;var startMarker=null;var hasEnd=false;var endMeta;var endMarker=null;var startInput=refined.start!=null?refined.start:refined.date;startMeta=context.dateEnv.createMarkerMeta(startInput);if(startMeta){startMarker=startMeta.marker;}else if(!allowOpenRange){return null;}if(refined.end!=null){endMeta=context.dateEnv.createMarkerMeta(refined.end);}if(allDay==null){if(defaultAllDay!=null){allDay=defaultAllDay;}else {// fall back to the date props LAST
allDay=(!startMeta||startMeta.isTimeUnspecified)&&(!endMeta||endMeta.isTimeUnspecified);}}if(allDay&&startMarker){startMarker=startOfDay(startMarker);}if(endMeta){endMarker=endMeta.marker;if(allDay){endMarker=startOfDay(endMarker);}if(startMarker&&endMarker<=startMarker){endMarker=null;}}if(endMarker){hasEnd=true;}else if(!allowOpenRange){hasEnd=context.options.forceEventDuration||false;endMarker=context.dateEnv.add(startMarker,allDay?context.options.defaultAllDayEventDuration:context.options.defaultTimedEventDuration);}return {allDay:allDay,hasEnd:hasEnd,range:{start:startMarker,end:endMarker},forcedStartTzo:startMeta?startMeta.forcedTzo:null,forcedEndTzo:endMeta?endMeta.forcedTzo:null};}function computeIsDefaultAllDay(eventSource,context){var res=null;if(eventSource){res=eventSource.defaultAllDay;}if(res==null){res=context.options.defaultAllDay;}return res;}/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/ // given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.
function computeAlignedDayRange(timedRange){var dayCnt=Math.floor(diffDays(timedRange.start,timedRange.end))||1;var start=startOfDay(timedRange.start);var end=addDays(start,dayCnt);return {start:start,end:end};}// given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg
function computeVisibleDayRange(timedRange,nextDayThreshold){if(nextDayThreshold===void 0){nextDayThreshold=createDuration(0);}var startDay=null;var endDay=null;if(timedRange.end){endDay=startOfDay(timedRange.end);var endTimeMS=timedRange.end.valueOf()-endDay.valueOf();// # of milliseconds into `endDay`
// If the end time is actually inclusively part of the next day and is equal to or
// beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
// Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
if(endTimeMS&&endTimeMS>=asRoughMs(nextDayThreshold)){endDay=addDays(endDay,1);}}if(timedRange.start){startDay=startOfDay(timedRange.start);// the beginning of the day the range starts
// If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
if(endDay&&endDay<=startDay){endDay=addDays(startDay,1);}}return {start:startDay,end:endDay};}// spans from one day into another?
function isMultiDayRange(range){var visibleRange=computeVisibleDayRange(range);return diffDays(visibleRange.start,visibleRange.end)>1;}function diffDates(date0,date1,dateEnv,largeUnit){if(largeUnit==='year'){return createDuration(dateEnv.diffWholeYears(date0,date1),'year');}if(largeUnit==='month'){return createDuration(dateEnv.diffWholeMonths(date0,date1),'month');}return diffDayAndTime(date0,date1);// returns a duration
}function parseRange(input,dateEnv){var start=null;var end=null;if(input.start){start=dateEnv.createMarker(input.start);}if(input.end){end=dateEnv.createMarker(input.end);}if(!start&&!end){return null;}if(start&&end&&end<start){return null;}return {start:start,end:end};}// SIDE-EFFECT: will mutate ranges.
// Will return a new array result.
function invertRanges(ranges,constraintRange){var invertedRanges=[];var start=constraintRange.start;// the end of the previous range. the start of the new range
var i;var dateRange;// ranges need to be in order. required for our date-walking algorithm
ranges.sort(compareRanges);for(i=0;i<ranges.length;i+=1){dateRange=ranges[i];// add the span of time before the event (if there is any)
if(dateRange.start>start){// compare millisecond time (skip any ambig logic)
invertedRanges.push({start:start,end:dateRange.start});}if(dateRange.end>start){start=dateRange.end;}}// add the span of time after the last event (if there is any)
if(start<constraintRange.end){// compare millisecond time (skip any ambig logic)
invertedRanges.push({start:start,end:constraintRange.end});}return invertedRanges;}function compareRanges(range0,range1){return range0.start.valueOf()-range1.start.valueOf();// earlier ranges go first
}function intersectRanges(range0,range1){var start=range0.start,end=range0.end;var newRange=null;if(range1.start!==null){if(start===null){start=range1.start;}else {start=new Date(Math.max(start.valueOf(),range1.start.valueOf()));}}if(range1.end!=null){if(end===null){end=range1.end;}else {end=new Date(Math.min(end.valueOf(),range1.end.valueOf()));}}if(start===null||end===null||start<end){newRange={start:start,end:end};}return newRange;}function rangesEqual(range0,range1){return (range0.start===null?null:range0.start.valueOf())===(range1.start===null?null:range1.start.valueOf())&&(range0.end===null?null:range0.end.valueOf())===(range1.end===null?null:range1.end.valueOf());}function rangesIntersect(range0,range1){return (range0.end===null||range1.start===null||range0.end>range1.start)&&(range0.start===null||range1.end===null||range0.start<range1.end);}function rangeContainsRange(outerRange,innerRange){return (outerRange.start===null||innerRange.start!==null&&innerRange.start>=outerRange.start)&&(outerRange.end===null||innerRange.end!==null&&innerRange.end<=outerRange.end);}function rangeContainsMarker(range,date){return (range.start===null||date>=range.start)&&(range.end===null||date<range.end);}// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
function constrainMarkerToRange(date,range){if(range.start!=null&&date<range.start){return range.start;}if(range.end!=null&&date>=range.end){return new Date(range.end.valueOf()-1);}return date;}/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/function sliceEventStore(eventStore,eventUiBases,framingRange,nextDayThreshold){var inverseBgByGroupId={};var inverseBgByDefId={};var defByGroupId={};var bgRanges=[];var fgRanges=[];var eventUis=compileEventUis(eventStore.defs,eventUiBases);for(var defId in eventStore.defs){var def=eventStore.defs[defId];var ui=eventUis[def.defId];if(ui.display==='inverse-background'){if(def.groupId){inverseBgByGroupId[def.groupId]=[];if(!defByGroupId[def.groupId]){defByGroupId[def.groupId]=def;}}else {inverseBgByDefId[defId]=[];}}}for(var instanceId in eventStore.instances){var instance=eventStore.instances[instanceId];var def=eventStore.defs[instance.defId];var ui=eventUis[def.defId];var origRange=instance.range;var normalRange=!def.allDay&&nextDayThreshold?computeVisibleDayRange(origRange,nextDayThreshold):origRange;var slicedRange=intersectRanges(normalRange,framingRange);if(slicedRange){if(ui.display==='inverse-background'){if(def.groupId){inverseBgByGroupId[def.groupId].push(slicedRange);}else {inverseBgByDefId[instance.defId].push(slicedRange);}}else if(ui.display!=='none'){(ui.display==='background'?bgRanges:fgRanges).push({def:def,ui:ui,instance:instance,range:slicedRange,isStart:normalRange.start&&normalRange.start.valueOf()===slicedRange.start.valueOf(),isEnd:normalRange.end&&normalRange.end.valueOf()===slicedRange.end.valueOf()});}}}for(var groupId in inverseBgByGroupId){// BY GROUP
var ranges=inverseBgByGroupId[groupId];var invertedRanges=invertRanges(ranges,framingRange);for(var _i=0,invertedRanges_1=invertedRanges;_i<invertedRanges_1.length;_i++){var invertedRange=invertedRanges_1[_i];var def=defByGroupId[groupId];var ui=eventUis[def.defId];bgRanges.push({def:def,ui:ui,instance:null,range:invertedRange,isStart:false,isEnd:false});}}for(var defId in inverseBgByDefId){var ranges=inverseBgByDefId[defId];var invertedRanges=invertRanges(ranges,framingRange);for(var _a=0,invertedRanges_2=invertedRanges;_a<invertedRanges_2.length;_a++){var invertedRange=invertedRanges_2[_a];bgRanges.push({def:eventStore.defs[defId],ui:eventUis[defId],instance:null,range:invertedRange,isStart:false,isEnd:false});}}return {bg:bgRanges,fg:fgRanges};}function setElSeg(el,seg){el.fcSeg=seg;}function getElSeg(el){return el.fcSeg||el.parentNode.fcSeg||// for the harness
null;}// event ui computation
function compileEventUis(eventDefs,eventUiBases){return mapHash(eventDefs,function(eventDef){return compileEventUi(eventDef,eventUiBases);});}function compileEventUi(eventDef,eventUiBases){var uis=[];if(eventUiBases['']){uis.push(eventUiBases['']);}if(eventUiBases[eventDef.defId]){uis.push(eventUiBases[eventDef.defId]);}uis.push(eventDef.ui);return combineEventUis(uis);}function sortEventSegs(segs,eventOrderSpecs){var objs=segs.map(buildSegCompareObj);objs.sort(function(obj0,obj1){return compareByFieldSpecs(obj0,obj1,eventOrderSpecs);});return objs.map(function(c){return c._seg;});}// returns a object with all primitive props that can be compared
function buildSegCompareObj(seg){var eventRange=seg.eventRange;var eventDef=eventRange.def;var range=eventRange.instance?eventRange.instance.range:eventRange.range;var start=range.start?range.start.valueOf():0;// TODO: better support for open-range events
var end=range.end?range.end.valueOf():0;// "
return __assign$1(__assign$1(__assign$1({},eventDef.extendedProps),eventDef),{id:eventDef.publicId,start:start,end:end,duration:end-start,allDay:Number(eventDef.allDay),_seg:seg});}function computeSegDraggable(seg,context){var pluginHooks=context.pluginHooks;var transformers=pluginHooks.isDraggableTransformers;var _a=seg.eventRange,def=_a.def,ui=_a.ui;var val=ui.startEditable;for(var _i=0,transformers_1=transformers;_i<transformers_1.length;_i++){var transformer=transformers_1[_i];val=transformer(val,def,ui,context);}return val;}function computeSegStartResizable(seg,context){return seg.isStart&&seg.eventRange.ui.durationEditable&&context.options.eventResizableFromStart;}function computeSegEndResizable(seg,context){return seg.isEnd&&seg.eventRange.ui.durationEditable;}function buildSegTimeText(seg,timeFormat,context,defaultDisplayEventTime,// defaults to true
defaultDisplayEventEnd,// defaults to true
startOverride,endOverride){var dateEnv=context.dateEnv,options=context.options;var displayEventTime=options.displayEventTime,displayEventEnd=options.displayEventEnd;var eventDef=seg.eventRange.def;var eventInstance=seg.eventRange.instance;if(displayEventTime==null){displayEventTime=defaultDisplayEventTime!==false;}if(displayEventEnd==null){displayEventEnd=defaultDisplayEventEnd!==false;}var wholeEventStart=eventInstance.range.start;var wholeEventEnd=eventInstance.range.end;var segStart=startOverride||seg.start||seg.eventRange.range.start;var segEnd=endOverride||seg.end||seg.eventRange.range.end;var isStartDay=startOfDay(wholeEventStart).valueOf()===startOfDay(segStart).valueOf();var isEndDay=startOfDay(addMs(wholeEventEnd,-1)).valueOf()===startOfDay(addMs(segEnd,-1)).valueOf();if(displayEventTime&&!eventDef.allDay&&(isStartDay||isEndDay)){segStart=isStartDay?wholeEventStart:segStart;segEnd=isEndDay?wholeEventEnd:segEnd;if(displayEventEnd&&eventDef.hasEnd){return dateEnv.formatRange(segStart,segEnd,timeFormat,{forcedStartTzo:startOverride?null:eventInstance.forcedStartTzo,forcedEndTzo:endOverride?null:eventInstance.forcedEndTzo});}return dateEnv.format(segStart,timeFormat,{forcedTzo:startOverride?null:eventInstance.forcedStartTzo// nooooo, same
});}return '';}function getSegMeta(seg,todayRange,nowDate){var segRange=seg.eventRange.range;return {isPast:segRange.end<(nowDate||todayRange.start),isFuture:segRange.start>=(nowDate||todayRange.end),isToday:todayRange&&rangeContainsMarker(todayRange,segRange.start)};}function getEventClassNames(props){var classNames=['fc-event'];if(props.isMirror){classNames.push('fc-event-mirror');}if(props.isDraggable){classNames.push('fc-event-draggable');}if(props.isStartResizable||props.isEndResizable){classNames.push('fc-event-resizable');}if(props.isDragging){classNames.push('fc-event-dragging');}if(props.isResizing){classNames.push('fc-event-resizing');}if(props.isSelected){classNames.push('fc-event-selected');}if(props.isStart){classNames.push('fc-event-start');}if(props.isEnd){classNames.push('fc-event-end');}if(props.isPast){classNames.push('fc-event-past');}if(props.isToday){classNames.push('fc-event-today');}if(props.isFuture){classNames.push('fc-event-future');}return classNames;}function buildEventRangeKey(eventRange){return eventRange.instance?eventRange.instance.instanceId:eventRange.def.defId+":"+eventRange.range.start.toISOString();// inverse-background events don't have specific instances. TODO: better solution
}var STANDARD_PROPS={start:identity,end:identity,allDay:Boolean};function parseDateSpan(raw,dateEnv,defaultDuration){var span=parseOpenDateSpan(raw,dateEnv);var range=span.range;if(!range.start){return null;}if(!range.end){if(defaultDuration==null){return null;}range.end=dateEnv.add(range.start,defaultDuration);}return span;}/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/function parseOpenDateSpan(raw,dateEnv){var _a=refineProps(raw,STANDARD_PROPS),standardProps=_a.refined,extra=_a.extra;var startMeta=standardProps.start?dateEnv.createMarkerMeta(standardProps.start):null;var endMeta=standardProps.end?dateEnv.createMarkerMeta(standardProps.end):null;var allDay=standardProps.allDay;if(allDay==null){allDay=startMeta&&startMeta.isTimeUnspecified&&(!endMeta||endMeta.isTimeUnspecified);}return __assign$1({range:{start:startMeta?startMeta.marker:null,end:endMeta?endMeta.marker:null},allDay:allDay},extra);}function isDateSpansEqual(span0,span1){return rangesEqual(span0.range,span1.range)&&span0.allDay===span1.allDay&&isSpanPropsEqual(span0,span1);}// the NON-DATE-RELATED props
function isSpanPropsEqual(span0,span1){for(var propName in span1){if(propName!=='range'&&propName!=='allDay'){if(span0[propName]!==span1[propName]){return false;}}}// are there any props that span0 has that span1 DOESN'T have?
// both have range/allDay, so no need to special-case.
for(var propName in span0){if(!(propName in span1)){return false;}}return true;}function buildDateSpanApi(span,dateEnv){return __assign$1(__assign$1({},buildRangeApi(span.range,dateEnv,span.allDay)),{allDay:span.allDay});}function buildRangeApiWithTimeZone(range,dateEnv,omitTime){return __assign$1(__assign$1({},buildRangeApi(range,dateEnv,omitTime)),{timeZone:dateEnv.timeZone});}function buildRangeApi(range,dateEnv,omitTime){return {start:dateEnv.toDate(range.start),end:dateEnv.toDate(range.end),startStr:dateEnv.formatIso(range.start,{omitTime:omitTime}),endStr:dateEnv.formatIso(range.end,{omitTime:omitTime})};}function fabricateEventRange(dateSpan,eventUiBases,context){var res=refineEventDef({editable:false},context);var def=parseEventDef(res.refined,res.extra,'',// sourceId
dateSpan.allDay,true,// hasEnd
context);return {def:def,ui:compileEventUi(def,eventUiBases),instance:createEventInstance(def.defId,dateSpan.range),range:dateSpan.range,isStart:true,isEnd:true};}function triggerDateSelect(selection,pev,context){context.emitter.trigger('select',__assign$1(__assign$1({},buildDateSpanApiWithContext(selection,context)),{jsEvent:pev?pev.origEvent:null,view:context.viewApi||context.calendarApi.view}));}function triggerDateUnselect(pev,context){context.emitter.trigger('unselect',{jsEvent:pev?pev.origEvent:null,view:context.viewApi||context.calendarApi.view});}function buildDateSpanApiWithContext(dateSpan,context){var props={};for(var _i=0,_a=context.pluginHooks.dateSpanTransforms;_i<_a.length;_i++){var transform=_a[_i];__assign$1(props,transform(dateSpan,context));}__assign$1(props,buildDateSpanApi(dateSpan,context.dateEnv));return props;}// Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd
function getDefaultEventEnd(allDay,marker,context){var dateEnv=context.dateEnv,options=context.options;var end=marker;if(allDay){end=startOfDay(end);end=dateEnv.add(end,options.defaultAllDayEventDuration);}else {end=dateEnv.add(end,options.defaultTimedEventDuration);}return end;}// applies the mutation to ALL defs/instances within the event store
function applyMutationToEventStore(eventStore,eventConfigBase,mutation,context){var eventConfigs=compileEventUis(eventStore.defs,eventConfigBase);var dest=createEmptyEventStore();for(var defId in eventStore.defs){var def=eventStore.defs[defId];dest.defs[defId]=applyMutationToEventDef(def,eventConfigs[defId],mutation,context);}for(var instanceId in eventStore.instances){var instance=eventStore.instances[instanceId];var def=dest.defs[instance.defId];// important to grab the newly modified def
dest.instances[instanceId]=applyMutationToEventInstance(instance,def,eventConfigs[instance.defId],mutation,context);}return dest;}function applyMutationToEventDef(eventDef,eventConfig,mutation,context){var standardProps=mutation.standardProps||{};// if hasEnd has not been specified, guess a good value based on deltas.
// if duration will change, there's no way the default duration will persist,
// and thus, we need to mark the event as having a real end
if(standardProps.hasEnd==null&&eventConfig.durationEditable&&(mutation.startDelta||mutation.endDelta)){standardProps.hasEnd=true;// TODO: is this mutation okay?
}var copy=__assign$1(__assign$1(__assign$1({},eventDef),standardProps),{ui:__assign$1(__assign$1({},eventDef.ui),standardProps.ui)});if(mutation.extendedProps){copy.extendedProps=__assign$1(__assign$1({},copy.extendedProps),mutation.extendedProps);}for(var _i=0,_a=context.pluginHooks.eventDefMutationAppliers;_i<_a.length;_i++){var applier=_a[_i];applier(copy,mutation,context);}if(!copy.hasEnd&&context.options.forceEventDuration){copy.hasEnd=true;}return copy;}function applyMutationToEventInstance(eventInstance,eventDef,// must first be modified by applyMutationToEventDef
eventConfig,mutation,context){var dateEnv=context.dateEnv;var forceAllDay=mutation.standardProps&&mutation.standardProps.allDay===true;var clearEnd=mutation.standardProps&&mutation.standardProps.hasEnd===false;var copy=__assign$1({},eventInstance);if(forceAllDay){copy.range=computeAlignedDayRange(copy.range);}if(mutation.datesDelta&&eventConfig.startEditable){copy.range={start:dateEnv.add(copy.range.start,mutation.datesDelta),end:dateEnv.add(copy.range.end,mutation.datesDelta)};}if(mutation.startDelta&&eventConfig.durationEditable){copy.range={start:dateEnv.add(copy.range.start,mutation.startDelta),end:copy.range.end};}if(mutation.endDelta&&eventConfig.durationEditable){copy.range={start:copy.range.start,end:dateEnv.add(copy.range.end,mutation.endDelta)};}if(clearEnd){copy.range={start:copy.range.start,end:getDefaultEventEnd(eventDef.allDay,copy.range.start,context)};}// in case event was all-day but the supplied deltas were not
// better util for this?
if(eventDef.allDay){copy.range={start:startOfDay(copy.range.start),end:startOfDay(copy.range.end)};}// handle invalid durations
if(copy.range.end<copy.range.start){copy.range.end=getDefaultEventEnd(eventDef.allDay,copy.range.start,context);}return copy;}// no public types yet. when there are, export from:
// import {} from './api-type-deps'
var ViewApi=/** @class */function(){function ViewApi(type,getCurrentData,dateEnv){this.type=type;this.getCurrentData=getCurrentData;this.dateEnv=dateEnv;}Object.defineProperty(ViewApi.prototype,"calendar",{get:function(){return this.getCurrentData().calendarApi;},enumerable:false,configurable:true});Object.defineProperty(ViewApi.prototype,"title",{get:function(){return this.getCurrentData().viewTitle;},enumerable:false,configurable:true});Object.defineProperty(ViewApi.prototype,"activeStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);},enumerable:false,configurable:true});Object.defineProperty(ViewApi.prototype,"activeEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);},enumerable:false,configurable:true});Object.defineProperty(ViewApi.prototype,"currentStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);},enumerable:false,configurable:true});Object.defineProperty(ViewApi.prototype,"currentEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);},enumerable:false,configurable:true});ViewApi.prototype.getOption=function(name){return this.getCurrentData().options[name];// are the view-specific options
};return ViewApi;}();var EVENT_SOURCE_REFINERS={id:String,defaultAllDay:Boolean,url:String,format:String,events:identity,eventDataTransform:identity,// for any network-related sources
success:identity,failure:identity};function parseEventSource(raw,context,refiners){if(refiners===void 0){refiners=buildEventSourceRefiners(context);}var rawObj;if(typeof raw==='string'){rawObj={url:raw};}else if(typeof raw==='function'||Array.isArray(raw)){rawObj={events:raw};}else if(typeof raw==='object'&&raw){// not null
rawObj=raw;}if(rawObj){var _a=refineProps(rawObj,refiners),refined=_a.refined,extra=_a.extra;var metaRes=buildEventSourceMeta(refined,context);if(metaRes){return {_raw:raw,isFetching:false,latestFetchId:'',fetchRange:null,defaultAllDay:refined.defaultAllDay,eventDataTransform:refined.eventDataTransform,success:refined.success,failure:refined.failure,publicId:refined.id||'',sourceId:guid(),sourceDefId:metaRes.sourceDefId,meta:metaRes.meta,ui:createEventUi(refined,context),extendedProps:extra};}}return null;}function buildEventSourceRefiners(context){return __assign$1(__assign$1(__assign$1({},EVENT_UI_REFINERS),EVENT_SOURCE_REFINERS),context.pluginHooks.eventSourceRefiners);}function buildEventSourceMeta(raw,context){var defs=context.pluginHooks.eventSourceDefs;for(var i=defs.length-1;i>=0;i-=1){// later-added plugins take precedence
var def=defs[i];var meta=def.parseMeta(raw);if(meta){return {sourceDefId:i,meta:meta};}}return null;}function reduceCurrentDate(currentDate,action){switch(action.type){case'CHANGE_DATE':return action.dateMarker;default:return currentDate;}}function getInitialDate(options,dateEnv){var initialDateInput=options.initialDate;// compute the initial ambig-timezone date
if(initialDateInput!=null){return dateEnv.createMarker(initialDateInput);}return getNow(options.now,dateEnv);// getNow already returns unzoned
}function getNow(nowInput,dateEnv){if(typeof nowInput==='function'){nowInput=nowInput();}if(nowInput==null){return dateEnv.createNowMarker();}return dateEnv.createMarker(nowInput);}var CalendarApi=/** @class */function(){function CalendarApi(){}CalendarApi.prototype.getCurrentData=function(){return this.currentDataManager.getCurrentData();};CalendarApi.prototype.dispatch=function(action){return this.currentDataManager.dispatch(action);};Object.defineProperty(CalendarApi.prototype,"view",{get:function(){return this.getCurrentData().viewApi;}// for public API
,enumerable:false,configurable:true});CalendarApi.prototype.batchRendering=function(callback){callback();};CalendarApi.prototype.updateSize=function(){this.trigger('_resize',true);};// Options
// -----------------------------------------------------------------------------------------------------------------
CalendarApi.prototype.setOption=function(name,val){this.dispatch({type:'SET_OPTION',optionName:name,rawOptionValue:val});};CalendarApi.prototype.getOption=function(name){return this.currentDataManager.currentCalendarOptionsInput[name];};CalendarApi.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.getCurrentData().availableRawLocales);};// Trigger
// -----------------------------------------------------------------------------------------------------------------
CalendarApi.prototype.on=function(handlerName,handler){var currentDataManager=this.currentDataManager;if(currentDataManager.currentCalendarOptionsRefiners[handlerName]){currentDataManager.emitter.on(handlerName,handler);}else {console.warn("Unknown listener name '"+handlerName+"'");}};CalendarApi.prototype.off=function(handlerName,handler){this.currentDataManager.emitter.off(handlerName,handler);};// not meant for public use
CalendarApi.prototype.trigger=function(handlerName){var _a;var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}(_a=this.currentDataManager.emitter).trigger.apply(_a,__spreadArray([handlerName],args));};// View
// -----------------------------------------------------------------------------------------------------------------
CalendarApi.prototype.changeView=function(viewType,dateOrRange){var _this=this;this.batchRendering(function(){_this.unselect();if(dateOrRange){if(dateOrRange.start&&dateOrRange.end){// a range
_this.dispatch({type:'CHANGE_VIEW_TYPE',viewType:viewType});_this.dispatch({type:'SET_OPTION',optionName:'visibleRange',rawOptionValue:dateOrRange});}else {var dateEnv=_this.getCurrentData().dateEnv;_this.dispatch({type:'CHANGE_VIEW_TYPE',viewType:viewType,dateMarker:dateEnv.createMarker(dateOrRange)});}}else {_this.dispatch({type:'CHANGE_VIEW_TYPE',viewType:viewType});}});};// Forces navigation to a view for the given date.
// `viewType` can be a specific view name or a generic one like "week" or "day".
// needs to change
CalendarApi.prototype.zoomTo=function(dateMarker,viewType){var state=this.getCurrentData();var spec;viewType=viewType||'day';// day is default zoom
spec=state.viewSpecs[viewType]||this.getUnitViewSpec(viewType);this.unselect();if(spec){this.dispatch({type:'CHANGE_VIEW_TYPE',viewType:spec.type,dateMarker:dateMarker});}else {this.dispatch({type:'CHANGE_DATE',dateMarker:dateMarker});}};// Given a duration singular unit, like "week" or "day", finds a matching view spec.
// Preference is given to views that have corresponding buttons.
CalendarApi.prototype.getUnitViewSpec=function(unit){var _a=this.getCurrentData(),viewSpecs=_a.viewSpecs,toolbarConfig=_a.toolbarConfig;var viewTypes=[].concat(toolbarConfig.viewsWithButtons);var i;var spec;for(var viewType in viewSpecs){viewTypes.push(viewType);}for(i=0;i<viewTypes.length;i+=1){spec=viewSpecs[viewTypes[i]];if(spec){if(spec.singleUnit===unit){return spec;}}}return null;};// Current Date
// -----------------------------------------------------------------------------------------------------------------
CalendarApi.prototype.prev=function(){this.unselect();this.dispatch({type:'PREV'});};CalendarApi.prototype.next=function(){this.unselect();this.dispatch({type:'NEXT'});};CalendarApi.prototype.prevYear=function(){var state=this.getCurrentData();this.unselect();this.dispatch({type:'CHANGE_DATE',dateMarker:state.dateEnv.addYears(state.currentDate,-1)});};CalendarApi.prototype.nextYear=function(){var state=this.getCurrentData();this.unselect();this.dispatch({type:'CHANGE_DATE',dateMarker:state.dateEnv.addYears(state.currentDate,1)});};CalendarApi.prototype.today=function(){var state=this.getCurrentData();this.unselect();this.dispatch({type:'CHANGE_DATE',dateMarker:getNow(state.calendarOptions.now,state.dateEnv)});};CalendarApi.prototype.gotoDate=function(zonedDateInput){var state=this.getCurrentData();this.unselect();this.dispatch({type:'CHANGE_DATE',dateMarker:state.dateEnv.createMarker(zonedDateInput)});};CalendarApi.prototype.incrementDate=function(deltaInput){var state=this.getCurrentData();var delta=createDuration(deltaInput);if(delta){// else, warn about invalid input?
this.unselect();this.dispatch({type:'CHANGE_DATE',dateMarker:state.dateEnv.add(state.currentDate,delta)});}};// for external API
CalendarApi.prototype.getDate=function(){var state=this.getCurrentData();return state.dateEnv.toDate(state.currentDate);};// Date Formatting Utils
// -----------------------------------------------------------------------------------------------------------------
CalendarApi.prototype.formatDate=function(d,formatter){var dateEnv=this.getCurrentData().dateEnv;return dateEnv.format(dateEnv.createMarker(d),createFormatter(formatter));};// `settings` is for formatter AND isEndExclusive
CalendarApi.prototype.formatRange=function(d0,d1,settings){var dateEnv=this.getCurrentData().dateEnv;return dateEnv.formatRange(dateEnv.createMarker(d0),dateEnv.createMarker(d1),createFormatter(settings),settings);};CalendarApi.prototype.formatIso=function(d,omitTime){var dateEnv=this.getCurrentData().dateEnv;return dateEnv.formatIso(dateEnv.createMarker(d),{omitTime:omitTime});};// Date Selection / Event Selection / DayClick
// -----------------------------------------------------------------------------------------------------------------
// this public method receives start/end dates in any format, with any timezone
// NOTE: args were changed from v3
CalendarApi.prototype.select=function(dateOrObj,endDate){var selectionInput;if(endDate==null){if(dateOrObj.start!=null){selectionInput=dateOrObj;}else {selectionInput={start:dateOrObj,end:null};}}else {selectionInput={start:dateOrObj,end:endDate};}var state=this.getCurrentData();var selection=parseDateSpan(selectionInput,state.dateEnv,createDuration({days:1}));if(selection){// throw parse error otherwise?
this.dispatch({type:'SELECT_DATES',selection:selection});triggerDateSelect(selection,null,state);}};// public method
CalendarApi.prototype.unselect=function(pev){var state=this.getCurrentData();if(state.dateSelection){this.dispatch({type:'UNSELECT_DATES'});triggerDateUnselect(pev,state);}};// Public Events API
// -----------------------------------------------------------------------------------------------------------------
CalendarApi.prototype.addEvent=function(eventInput,sourceInput){if(eventInput instanceof EventApi){var def=eventInput._def;var instance=eventInput._instance;var currentData=this.getCurrentData();// not already present? don't want to add an old snapshot
if(!currentData.eventStore.defs[def.defId]){this.dispatch({type:'ADD_EVENTS',eventStore:eventTupleToStore({def:def,instance:instance})// TODO: better util for two args?
});this.triggerEventAdd(eventInput);}return eventInput;}var state=this.getCurrentData();var eventSource;if(sourceInput instanceof EventSourceApi){eventSource=sourceInput.internalEventSource;}else if(typeof sourceInput==='boolean'){if(sourceInput){// true. part of the first event source
eventSource=hashValuesToArray(state.eventSources)[0];}}else if(sourceInput!=null){// an ID. accepts a number too
var sourceApi=this.getEventSourceById(sourceInput);// TODO: use an internal function
if(!sourceApi){console.warn("Could not find an event source with ID \""+sourceInput+"\"");// TODO: test
return null;}eventSource=sourceApi.internalEventSource;}var tuple=parseEvent(eventInput,eventSource,state,false);if(tuple){var newEventApi=new EventApi(state,tuple.def,tuple.def.recurringDef?null:tuple.instance);this.dispatch({type:'ADD_EVENTS',eventStore:eventTupleToStore(tuple)});this.triggerEventAdd(newEventApi);return newEventApi;}return null;};CalendarApi.prototype.triggerEventAdd=function(eventApi){var _this=this;var emitter=this.getCurrentData().emitter;emitter.trigger('eventAdd',{event:eventApi,relatedEvents:[],revert:function(){_this.dispatch({type:'REMOVE_EVENTS',eventStore:eventApiToStore(eventApi)});}});};// TODO: optimize
CalendarApi.prototype.getEventById=function(id){var state=this.getCurrentData();var _a=state.eventStore,defs=_a.defs,instances=_a.instances;id=String(id);for(var defId in defs){var def=defs[defId];if(def.publicId===id){if(def.recurringDef){return new EventApi(state,def,null);}for(var instanceId in instances){var instance=instances[instanceId];if(instance.defId===def.defId){return new EventApi(state,def,instance);}}}}return null;};CalendarApi.prototype.getEvents=function(){var currentData=this.getCurrentData();return buildEventApis(currentData.eventStore,currentData);};CalendarApi.prototype.removeAllEvents=function(){this.dispatch({type:'REMOVE_ALL_EVENTS'});};// Public Event Sources API
// -----------------------------------------------------------------------------------------------------------------
CalendarApi.prototype.getEventSources=function(){var state=this.getCurrentData();var sourceHash=state.eventSources;var sourceApis=[];for(var internalId in sourceHash){sourceApis.push(new EventSourceApi(state,sourceHash[internalId]));}return sourceApis;};CalendarApi.prototype.getEventSourceById=function(id){var state=this.getCurrentData();var sourceHash=state.eventSources;id=String(id);for(var sourceId in sourceHash){if(sourceHash[sourceId].publicId===id){return new EventSourceApi(state,sourceHash[sourceId]);}}return null;};CalendarApi.prototype.addEventSource=function(sourceInput){var state=this.getCurrentData();if(sourceInput instanceof EventSourceApi){// not already present? don't want to add an old snapshot
if(!state.eventSources[sourceInput.internalEventSource.sourceId]){this.dispatch({type:'ADD_EVENT_SOURCES',sources:[sourceInput.internalEventSource]});}return sourceInput;}var eventSource=parseEventSource(sourceInput,state);if(eventSource){// TODO: error otherwise?
this.dispatch({type:'ADD_EVENT_SOURCES',sources:[eventSource]});return new EventSourceApi(state,eventSource);}return null;};CalendarApi.prototype.removeAllEventSources=function(){this.dispatch({type:'REMOVE_ALL_EVENT_SOURCES'});};CalendarApi.prototype.refetchEvents=function(){this.dispatch({type:'FETCH_EVENT_SOURCES',isRefetch:true});};// Scroll
// -----------------------------------------------------------------------------------------------------------------
CalendarApi.prototype.scrollToTime=function(timeInput){var time=createDuration(timeInput);if(time){this.trigger('_scrollRequest',{time:time});}};return CalendarApi;}();var EventApi=/** @class */function(){// instance will be null if expressing a recurring event that has no current instances,
// OR if trying to validate an incoming external event that has no dates assigned
function EventApi(context,def,instance){this._context=context;this._def=def;this._instance=instance||null;}/*
    TODO: make event struct more responsible for this
    */EventApi.prototype.setProp=function(name,val){var _a,_b;if(name in EVENT_DATE_REFINERS){console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.');// TODO: make proper aliasing system?
}else if(name==='id'){val=EVENT_NON_DATE_REFINERS[name](val);this.mutate({standardProps:{publicId:val}// hardcoded internal name
});}else if(name in EVENT_NON_DATE_REFINERS){val=EVENT_NON_DATE_REFINERS[name](val);this.mutate({standardProps:(_a={},_a[name]=val,_a)});}else if(name in EVENT_UI_REFINERS){var ui=EVENT_UI_REFINERS[name](val);if(name==='color'){ui={backgroundColor:val,borderColor:val};}else if(name==='editable'){ui={startEditable:val,durationEditable:val};}else {ui=(_b={},_b[name]=val,_b);}this.mutate({standardProps:{ui:ui}});}else {console.warn("Could not set prop '"+name+"'. Use setExtendedProp instead.");}};EventApi.prototype.setExtendedProp=function(name,val){var _a;this.mutate({extendedProps:(_a={},_a[name]=val,_a)});};EventApi.prototype.setStart=function(startInput,options){if(options===void 0){options={};}var dateEnv=this._context.dateEnv;var start=dateEnv.createMarker(startInput);if(start&&this._instance){// TODO: warning if parsed bad
var instanceRange=this._instance.range;var startDelta=diffDates(instanceRange.start,start,dateEnv,options.granularity);// what if parsed bad!?
if(options.maintainDuration){this.mutate({datesDelta:startDelta});}else {this.mutate({startDelta:startDelta});}}};EventApi.prototype.setEnd=function(endInput,options){if(options===void 0){options={};}var dateEnv=this._context.dateEnv;var end;if(endInput!=null){end=dateEnv.createMarker(endInput);if(!end){return;// TODO: warning if parsed bad
}}if(this._instance){if(end){var endDelta=diffDates(this._instance.range.end,end,dateEnv,options.granularity);this.mutate({endDelta:endDelta});}else {this.mutate({standardProps:{hasEnd:false}});}}};EventApi.prototype.setDates=function(startInput,endInput,options){if(options===void 0){options={};}var dateEnv=this._context.dateEnv;var standardProps={allDay:options.allDay};var start=dateEnv.createMarker(startInput);var end;if(!start){return;// TODO: warning if parsed bad
}if(endInput!=null){end=dateEnv.createMarker(endInput);if(!end){// TODO: warning if parsed bad
return;}}if(this._instance){var instanceRange=this._instance.range;// when computing the diff for an event being converted to all-day,
// compute diff off of the all-day values the way event-mutation does.
if(options.allDay===true){instanceRange=computeAlignedDayRange(instanceRange);}var startDelta=diffDates(instanceRange.start,start,dateEnv,options.granularity);if(end){var endDelta=diffDates(instanceRange.end,end,dateEnv,options.granularity);if(durationsEqual(startDelta,endDelta)){this.mutate({datesDelta:startDelta,standardProps:standardProps});}else {this.mutate({startDelta:startDelta,endDelta:endDelta,standardProps:standardProps});}}else {// means "clear the end"
standardProps.hasEnd=false;this.mutate({datesDelta:startDelta,standardProps:standardProps});}}};EventApi.prototype.moveStart=function(deltaInput){var delta=createDuration(deltaInput);if(delta){// TODO: warning if parsed bad
this.mutate({startDelta:delta});}};EventApi.prototype.moveEnd=function(deltaInput){var delta=createDuration(deltaInput);if(delta){// TODO: warning if parsed bad
this.mutate({endDelta:delta});}};EventApi.prototype.moveDates=function(deltaInput){var delta=createDuration(deltaInput);if(delta){// TODO: warning if parsed bad
this.mutate({datesDelta:delta});}};EventApi.prototype.setAllDay=function(allDay,options){if(options===void 0){options={};}var standardProps={allDay:allDay};var maintainDuration=options.maintainDuration;if(maintainDuration==null){maintainDuration=this._context.options.allDayMaintainDuration;}if(this._def.allDay!==allDay){standardProps.hasEnd=maintainDuration;}this.mutate({standardProps:standardProps});};EventApi.prototype.formatRange=function(formatInput){var dateEnv=this._context.dateEnv;var instance=this._instance;var formatter=createFormatter(formatInput);if(this._def.hasEnd){return dateEnv.formatRange(instance.range.start,instance.range.end,formatter,{forcedStartTzo:instance.forcedStartTzo,forcedEndTzo:instance.forcedEndTzo});}return dateEnv.format(instance.range.start,formatter,{forcedTzo:instance.forcedStartTzo});};EventApi.prototype.mutate=function(mutation){var instance=this._instance;if(instance){var def=this._def;var context_1=this._context;var eventStore_1=context_1.getCurrentData().eventStore;var relevantEvents=getRelevantEvents(eventStore_1,instance.instanceId);var eventConfigBase={'':{display:'',startEditable:true,durationEditable:true,constraints:[],overlap:null,allows:[],backgroundColor:'',borderColor:'',textColor:'',classNames:[]}};relevantEvents=applyMutationToEventStore(relevantEvents,eventConfigBase,mutation,context_1);var oldEvent=new EventApi(context_1,def,instance);// snapshot
this._def=relevantEvents.defs[def.defId];this._instance=relevantEvents.instances[instance.instanceId];context_1.dispatch({type:'MERGE_EVENTS',eventStore:relevantEvents});context_1.emitter.trigger('eventChange',{oldEvent:oldEvent,event:this,relatedEvents:buildEventApis(relevantEvents,context_1,instance),revert:function(){context_1.dispatch({type:'RESET_EVENTS',eventStore:eventStore_1});}});}};EventApi.prototype.remove=function(){var context=this._context;var asStore=eventApiToStore(this);context.dispatch({type:'REMOVE_EVENTS',eventStore:asStore});context.emitter.trigger('eventRemove',{event:this,relatedEvents:[],revert:function(){context.dispatch({type:'MERGE_EVENTS',eventStore:asStore});}});};Object.defineProperty(EventApi.prototype,"source",{get:function(){var sourceId=this._def.sourceId;if(sourceId){return new EventSourceApi(this._context,this._context.getCurrentData().eventSources[sourceId]);}return null;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"start",{get:function(){return this._instance?this._context.dateEnv.toDate(this._instance.range.start):null;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._context.dateEnv.toDate(this._instance.range.end):null;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"startStr",{get:function(){var instance=this._instance;if(instance){return this._context.dateEnv.formatIso(instance.range.start,{omitTime:this._def.allDay,forcedTzo:instance.forcedStartTzo});}return '';},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"endStr",{get:function(){var instance=this._instance;if(instance&&this._def.hasEnd){return this._context.dateEnv.formatIso(instance.range.end,{omitTime:this._def.allDay,forcedTzo:instance.forcedEndTzo});}return '';},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"id",{// computable props that all access the def
// TODO: find a TypeScript-compatible way to do this at scale
get:function(){return this._def.publicId;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"groupId",{get:function(){return this._def.groupId;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"allDay",{get:function(){return this._def.allDay;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"title",{get:function(){return this._def.title;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"url",{get:function(){return this._def.url;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"display",{get:function(){return this._def.ui.display||'auto';}// bad. just normalize the type earlier
,enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"startEditable",{get:function(){return this._def.ui.startEditable;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"overlap",{get:function(){return this._def.ui.overlap;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"borderColor",{get:function(){return this._def.ui.borderColor;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"textColor",{get:function(){return this._def.ui.textColor;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"classNames",{// NOTE: user can't modify these because Object.freeze was called in event-def parsing
get:function(){return this._def.ui.classNames;},enumerable:false,configurable:true});Object.defineProperty(EventApi.prototype,"extendedProps",{get:function(){return this._def.extendedProps;},enumerable:false,configurable:true});EventApi.prototype.toPlainObject=function(settings){if(settings===void 0){settings={};}var def=this._def;var ui=def.ui;var _a=this,startStr=_a.startStr,endStr=_a.endStr;var res={};if(def.title){res.title=def.title;}if(startStr){res.start=startStr;}if(endStr){res.end=endStr;}if(def.publicId){res.id=def.publicId;}if(def.groupId){res.groupId=def.groupId;}if(def.url){res.url=def.url;}if(ui.display&&ui.display!=='auto'){res.display=ui.display;}// TODO: what about recurring-event properties???
// TODO: include startEditable/durationEditable/constraint/overlap/allow
if(settings.collapseColor&&ui.backgroundColor&&ui.backgroundColor===ui.borderColor){res.color=ui.backgroundColor;}else {if(ui.backgroundColor){res.backgroundColor=ui.backgroundColor;}if(ui.borderColor){res.borderColor=ui.borderColor;}}if(ui.textColor){res.textColor=ui.textColor;}if(ui.classNames.length){res.classNames=ui.classNames;}if(Object.keys(def.extendedProps).length){if(settings.collapseExtendedProps){__assign$1(res,def.extendedProps);}else {res.extendedProps=def.extendedProps;}}return res;};EventApi.prototype.toJSON=function(){return this.toPlainObject();};return EventApi;}();function eventApiToStore(eventApi){var _a,_b;var def=eventApi._def;var instance=eventApi._instance;return {defs:(_a={},_a[def.defId]=def,_a),instances:instance?(_b={},_b[instance.instanceId]=instance,_b):{}};}function buildEventApis(eventStore,context,excludeInstance){var defs=eventStore.defs,instances=eventStore.instances;var eventApis=[];var excludeInstanceId=excludeInstance?excludeInstance.instanceId:'';for(var id in instances){var instance=instances[id];var def=defs[instance.defId];if(instance.instanceId!==excludeInstanceId){eventApis.push(new EventApi(context,def,instance));}}return eventApis;}var calendarSystemClassMap={};function registerCalendarSystem(name,theClass){calendarSystemClassMap[name]=theClass;}function createCalendarSystem(name){return new calendarSystemClassMap[name]();}var GregorianCalendarSystem=/** @class */function(){function GregorianCalendarSystem(){}GregorianCalendarSystem.prototype.getMarkerYear=function(d){return d.getUTCFullYear();};GregorianCalendarSystem.prototype.getMarkerMonth=function(d){return d.getUTCMonth();};GregorianCalendarSystem.prototype.getMarkerDay=function(d){return d.getUTCDate();};GregorianCalendarSystem.prototype.arrayToMarker=function(arr){return arrayToUtcDate(arr);};GregorianCalendarSystem.prototype.markerToArray=function(marker){return dateToUtcArray(marker);};return GregorianCalendarSystem;}();registerCalendarSystem('gregory',GregorianCalendarSystem);var ISO_RE=/^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;function parse(str){var m=ISO_RE.exec(str);if(m){var marker=new Date(Date.UTC(Number(m[1]),m[3]?Number(m[3])-1:0,Number(m[5]||1),Number(m[7]||0),Number(m[8]||0),Number(m[10]||0),m[12]?Number("0."+m[12])*1000:0));if(isValidDate(marker)){var timeZoneOffset=null;if(m[13]){timeZoneOffset=(m[15]==='-'?-1:1)*(Number(m[16]||0)*60+Number(m[18]||0));}return {marker:marker,isTimeUnspecified:!m[6],timeZoneOffset:timeZoneOffset};}}return null;}var DateEnv=/** @class */function(){function DateEnv(settings){var timeZone=this.timeZone=settings.timeZone;var isNamedTimeZone=timeZone!=='local'&&timeZone!=='UTC';if(settings.namedTimeZoneImpl&&isNamedTimeZone){this.namedTimeZoneImpl=new settings.namedTimeZoneImpl(timeZone);}this.canComputeOffset=Boolean(!isNamedTimeZone||this.namedTimeZoneImpl);this.calendarSystem=createCalendarSystem(settings.calendarSystem);this.locale=settings.locale;this.weekDow=settings.locale.week.dow;this.weekDoy=settings.locale.week.doy;if(settings.weekNumberCalculation==='ISO'){this.weekDow=1;this.weekDoy=4;}if(typeof settings.firstDay==='number'){this.weekDow=settings.firstDay;}if(typeof settings.weekNumberCalculation==='function'){this.weekNumberFunc=settings.weekNumberCalculation;}this.weekText=settings.weekText!=null?settings.weekText:settings.locale.options.weekText;this.cmdFormatter=settings.cmdFormatter;this.defaultSeparator=settings.defaultSeparator;}// Creating / Parsing
DateEnv.prototype.createMarker=function(input){var meta=this.createMarkerMeta(input);if(meta===null){return null;}return meta.marker;};DateEnv.prototype.createNowMarker=function(){if(this.canComputeOffset){return this.timestampToMarker(new Date().valueOf());}// if we can't compute the current date val for a timezone,
// better to give the current local date vals than UTC
return arrayToUtcDate(dateToLocalArray(new Date()));};DateEnv.prototype.createMarkerMeta=function(input){if(typeof input==='string'){return this.parse(input);}var marker=null;if(typeof input==='number'){marker=this.timestampToMarker(input);}else if(input instanceof Date){input=input.valueOf();if(!isNaN(input)){marker=this.timestampToMarker(input);}}else if(Array.isArray(input)){marker=arrayToUtcDate(input);}if(marker===null||!isValidDate(marker)){return null;}return {marker:marker,isTimeUnspecified:false,forcedTzo:null};};DateEnv.prototype.parse=function(s){var parts=parse(s);if(parts===null){return null;}var marker=parts.marker;var forcedTzo=null;if(parts.timeZoneOffset!==null){if(this.canComputeOffset){marker=this.timestampToMarker(marker.valueOf()-parts.timeZoneOffset*60*1000);}else {forcedTzo=parts.timeZoneOffset;}}return {marker:marker,isTimeUnspecified:parts.isTimeUnspecified,forcedTzo:forcedTzo};};// Accessors
DateEnv.prototype.getYear=function(marker){return this.calendarSystem.getMarkerYear(marker);};DateEnv.prototype.getMonth=function(marker){return this.calendarSystem.getMarkerMonth(marker);};// Adding / Subtracting
DateEnv.prototype.add=function(marker,dur){var a=this.calendarSystem.markerToArray(marker);a[0]+=dur.years;a[1]+=dur.months;a[2]+=dur.days;a[6]+=dur.milliseconds;return this.calendarSystem.arrayToMarker(a);};DateEnv.prototype.subtract=function(marker,dur){var a=this.calendarSystem.markerToArray(marker);a[0]-=dur.years;a[1]-=dur.months;a[2]-=dur.days;a[6]-=dur.milliseconds;return this.calendarSystem.arrayToMarker(a);};DateEnv.prototype.addYears=function(marker,n){var a=this.calendarSystem.markerToArray(marker);a[0]+=n;return this.calendarSystem.arrayToMarker(a);};DateEnv.prototype.addMonths=function(marker,n){var a=this.calendarSystem.markerToArray(marker);a[1]+=n;return this.calendarSystem.arrayToMarker(a);};// Diffing Whole Units
DateEnv.prototype.diffWholeYears=function(m0,m1){var calendarSystem=this.calendarSystem;if(timeAsMs(m0)===timeAsMs(m1)&&calendarSystem.getMarkerDay(m0)===calendarSystem.getMarkerDay(m1)&&calendarSystem.getMarkerMonth(m0)===calendarSystem.getMarkerMonth(m1)){return calendarSystem.getMarkerYear(m1)-calendarSystem.getMarkerYear(m0);}return null;};DateEnv.prototype.diffWholeMonths=function(m0,m1){var calendarSystem=this.calendarSystem;if(timeAsMs(m0)===timeAsMs(m1)&&calendarSystem.getMarkerDay(m0)===calendarSystem.getMarkerDay(m1)){return calendarSystem.getMarkerMonth(m1)-calendarSystem.getMarkerMonth(m0)+(calendarSystem.getMarkerYear(m1)-calendarSystem.getMarkerYear(m0))*12;}return null;};// Range / Duration
DateEnv.prototype.greatestWholeUnit=function(m0,m1){var n=this.diffWholeYears(m0,m1);if(n!==null){return {unit:'year',value:n};}n=this.diffWholeMonths(m0,m1);if(n!==null){return {unit:'month',value:n};}n=diffWholeWeeks(m0,m1);if(n!==null){return {unit:'week',value:n};}n=diffWholeDays(m0,m1);if(n!==null){return {unit:'day',value:n};}n=diffHours(m0,m1);if(isInt(n)){return {unit:'hour',value:n};}n=diffMinutes(m0,m1);if(isInt(n)){return {unit:'minute',value:n};}n=diffSeconds(m0,m1);if(isInt(n)){return {unit:'second',value:n};}return {unit:'millisecond',value:m1.valueOf()-m0.valueOf()};};DateEnv.prototype.countDurationsBetween=function(m0,m1,d){// TODO: can use greatestWholeUnit
var diff;if(d.years){diff=this.diffWholeYears(m0,m1);if(diff!==null){return diff/asRoughYears(d);}}if(d.months){diff=this.diffWholeMonths(m0,m1);if(diff!==null){return diff/asRoughMonths(d);}}if(d.days){diff=diffWholeDays(m0,m1);if(diff!==null){return diff/asRoughDays(d);}}return (m1.valueOf()-m0.valueOf())/asRoughMs(d);};// Start-Of
// these DON'T return zoned-dates. only UTC start-of dates
DateEnv.prototype.startOf=function(m,unit){if(unit==='year'){return this.startOfYear(m);}if(unit==='month'){return this.startOfMonth(m);}if(unit==='week'){return this.startOfWeek(m);}if(unit==='day'){return startOfDay(m);}if(unit==='hour'){return startOfHour(m);}if(unit==='minute'){return startOfMinute(m);}if(unit==='second'){return startOfSecond(m);}return null;};DateEnv.prototype.startOfYear=function(m){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m)]);};DateEnv.prototype.startOfMonth=function(m){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m),this.calendarSystem.getMarkerMonth(m)]);};DateEnv.prototype.startOfWeek=function(m){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m),this.calendarSystem.getMarkerMonth(m),m.getUTCDate()-(m.getUTCDay()-this.weekDow+7)%7]);};// Week Number
DateEnv.prototype.computeWeekNumber=function(marker){if(this.weekNumberFunc){return this.weekNumberFunc(this.toDate(marker));}return weekOfYear(marker,this.weekDow,this.weekDoy);};// TODO: choke on timeZoneName: long
DateEnv.prototype.format=function(marker,formatter,dateOptions){if(dateOptions===void 0){dateOptions={};}return formatter.format({marker:marker,timeZoneOffset:dateOptions.forcedTzo!=null?dateOptions.forcedTzo:this.offsetForMarker(marker)},this);};DateEnv.prototype.formatRange=function(start,end,formatter,dateOptions){if(dateOptions===void 0){dateOptions={};}if(dateOptions.isEndExclusive){end=addMs(end,-1);}return formatter.formatRange({marker:start,timeZoneOffset:dateOptions.forcedStartTzo!=null?dateOptions.forcedStartTzo:this.offsetForMarker(start)},{marker:end,timeZoneOffset:dateOptions.forcedEndTzo!=null?dateOptions.forcedEndTzo:this.offsetForMarker(end)},this,dateOptions.defaultSeparator);};/*
    DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
    might as well use buildIsoString or some other util directly
    */DateEnv.prototype.formatIso=function(marker,extraOptions){if(extraOptions===void 0){extraOptions={};}var timeZoneOffset=null;if(!extraOptions.omitTimeZoneOffset){if(extraOptions.forcedTzo!=null){timeZoneOffset=extraOptions.forcedTzo;}else {timeZoneOffset=this.offsetForMarker(marker);}}return buildIsoString(marker,timeZoneOffset,extraOptions.omitTime);};// TimeZone
DateEnv.prototype.timestampToMarker=function(ms){if(this.timeZone==='local'){return arrayToUtcDate(dateToLocalArray(new Date(ms)));}if(this.timeZone==='UTC'||!this.namedTimeZoneImpl){return new Date(ms);}return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));};DateEnv.prototype.offsetForMarker=function(m){if(this.timeZone==='local'){return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset();// convert "inverse" offset to "normal" offset
}if(this.timeZone==='UTC'){return 0;}if(this.namedTimeZoneImpl){return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));}return null;};// Conversion
DateEnv.prototype.toDate=function(m,forcedTzo){if(this.timeZone==='local'){return arrayToLocalDate(dateToUtcArray(m));}if(this.timeZone==='UTC'){return new Date(m.valueOf());// make sure it's a copy
}if(!this.namedTimeZoneImpl){return new Date(m.valueOf()-(forcedTzo||0));}return new Date(m.valueOf()-this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m))*1000*60);};return DateEnv;}();var globalLocales=[];var RAW_EN_LOCALE={code:'en',week:{dow:0,doy:4// 4 days need to be within the year to be considered the first week
},direction:'ltr',buttonText:{prev:'prev',next:'next',prevYear:'prev year',nextYear:'next year',year:'year',today:'today',month:'month',week:'week',day:'day',list:'list'},weekText:'W',allDayText:'all-day',moreLinkText:'more',noEventsText:'No events to display'};function organizeRawLocales(explicitRawLocales){var defaultCode=explicitRawLocales.length>0?explicitRawLocales[0].code:'en';var allRawLocales=globalLocales.concat(explicitRawLocales);var rawLocaleMap={en:RAW_EN_LOCALE// necessary?
};for(var _i=0,allRawLocales_1=allRawLocales;_i<allRawLocales_1.length;_i++){var rawLocale=allRawLocales_1[_i];rawLocaleMap[rawLocale.code]=rawLocale;}return {map:rawLocaleMap,defaultCode:defaultCode};}function buildLocale(inputSingular,available){if(typeof inputSingular==='object'&&!Array.isArray(inputSingular)){return parseLocale(inputSingular.code,[inputSingular.code],inputSingular);}return queryLocale(inputSingular,available);}function queryLocale(codeArg,available){var codes=[].concat(codeArg||[]);// will convert to array
var raw=queryRawLocale(codes,available)||RAW_EN_LOCALE;return parseLocale(codeArg,codes,raw);}function queryRawLocale(codes,available){for(var i=0;i<codes.length;i+=1){var parts=codes[i].toLocaleLowerCase().split('-');for(var j=parts.length;j>0;j-=1){var simpleId=parts.slice(0,j).join('-');if(available[simpleId]){return available[simpleId];}}}return null;}function parseLocale(codeArg,codes,raw){var merged=mergeProps([RAW_EN_LOCALE,raw],['buttonText']);delete merged.code;// don't want this part of the options
var week=merged.week;delete merged.week;return {codeArg:codeArg,codes:codes,week:week,simpleNumberFormat:new Intl.NumberFormat(codeArg),options:merged};}var DEF_DEFAULTS={startTime:'09:00',endTime:'17:00',daysOfWeek:[1,2,3,4,5],display:'inverse-background',classNames:'fc-non-business',groupId:'_businessHours'// so multiple defs get grouped
};/*
TODO: pass around as EventDefHash!!!
*/function parseBusinessHours(input,context){return parseEvents(refineInputs(input),null,context);}function refineInputs(input){var rawDefs;if(input===true){rawDefs=[{}];// will get DEF_DEFAULTS verbatim
}else if(Array.isArray(input)){// if specifying an array, every sub-definition NEEDS a day-of-week
rawDefs=input.filter(function(rawDef){return rawDef.daysOfWeek;});}else if(typeof input==='object'&&input){// non-null object
rawDefs=[input];}else {// is probably false
rawDefs=[];}rawDefs=rawDefs.map(function(rawDef){return __assign$1(__assign$1({},DEF_DEFAULTS),rawDef);});return rawDefs;}function pointInsideRect(point,rect){return point.left>=rect.left&&point.left<rect.right&&point.top>=rect.top&&point.top<rect.bottom;}// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1,rect2){var res={left:Math.max(rect1.left,rect2.left),right:Math.min(rect1.right,rect2.right),top:Math.max(rect1.top,rect2.top),bottom:Math.min(rect1.bottom,rect2.bottom)};if(res.left<res.right&&res.top<res.bottom){return res;}return false;}function constrainPoint(point,rect){return {left:Math.min(Math.max(point.left,rect.left),rect.right),top:Math.min(Math.max(point.top,rect.top),rect.bottom)};}// Returns a point that is the center of the given rectangle
function getRectCenter(rect){return {left:(rect.left+rect.right)/2,top:(rect.top+rect.bottom)/2};}// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1,point2){return {left:point1.left-point2.left,top:point1.top-point2.top};}var canVGrowWithinCell;function getCanVGrowWithinCell(){if(canVGrowWithinCell==null){canVGrowWithinCell=computeCanVGrowWithinCell();}return canVGrowWithinCell;}function computeCanVGrowWithinCell(){// for SSR, because this function is call immediately at top-level
// TODO: just make this logic execute top-level, immediately, instead of doing lazily
if(typeof document==='undefined'){return true;}var el=document.createElement('div');el.style.position='absolute';el.style.top='0px';el.style.left='0px';el.innerHTML='<table><tr><td><div></div></td></tr></table>';el.querySelector('table').style.height='100px';el.querySelector('div').style.height='100%';document.body.appendChild(el);var div=el.querySelector('div');var possible=div.offsetHeight>0;document.body.removeChild(el);return possible;}function getDateMeta(date,todayRange,nowDate,dateProfile){return {dow:date.getUTCDay(),isDisabled:Boolean(dateProfile&&!rangeContainsMarker(dateProfile.activeRange,date)),isOther:Boolean(dateProfile&&!rangeContainsMarker(dateProfile.currentRange,date)),isToday:Boolean(todayRange&&rangeContainsMarker(todayRange,date)),isPast:Boolean(nowDate?date<nowDate:todayRange?date<todayRange.start:false),isFuture:Boolean(nowDate?date>nowDate:todayRange?date>=todayRange.end:false)};}function getDayClassNames(meta,theme){var classNames=['fc-day',"fc-day-"+DAY_IDS[meta.dow]];if(meta.isDisabled){classNames.push('fc-day-disabled');}else {if(meta.isToday){classNames.push('fc-day-today');classNames.push(theme.getClass('today'));}if(meta.isPast){classNames.push('fc-day-past');}if(meta.isFuture){classNames.push('fc-day-future');}if(meta.isOther){classNames.push('fc-day-other');}}return classNames;}function buildNavLinkData(date,type){if(type===void 0){type='day';}return JSON.stringify({date:formatDayString(date),type:type});}var _isRtlScrollbarOnLeft=null;function getIsRtlScrollbarOnLeft(){if(_isRtlScrollbarOnLeft===null){_isRtlScrollbarOnLeft=computeIsRtlScrollbarOnLeft();}return _isRtlScrollbarOnLeft;}function computeIsRtlScrollbarOnLeft(){var outerEl=document.createElement('div');applyStyle(outerEl,{position:'absolute',top:-1000,left:0,border:0,padding:0,overflow:'scroll',direction:'rtl'});outerEl.innerHTML='<div></div>';document.body.appendChild(outerEl);var innerEl=outerEl.firstChild;var res=innerEl.getBoundingClientRect().left>outerEl.getBoundingClientRect().left;removeElement(outerEl);return res;}var _scrollbarWidths;function getScrollbarWidths(){if(!_scrollbarWidths){_scrollbarWidths=computeScrollbarWidths();}return _scrollbarWidths;}function computeScrollbarWidths(){var el=document.createElement('div');el.style.overflow='scroll';el.style.position='absolute';el.style.top='-9999px';el.style.left='-9999px';document.body.appendChild(el);var res=computeScrollbarWidthsForEl(el);document.body.removeChild(el);return res;}// WARNING: will include border
function computeScrollbarWidthsForEl(el){return {x:el.offsetHeight-el.clientHeight,y:el.offsetWidth-el.clientWidth};}function computeEdges(el,getPadding){if(getPadding===void 0){getPadding=false;}var computedStyle=window.getComputedStyle(el);var borderLeft=parseInt(computedStyle.borderLeftWidth,10)||0;var borderRight=parseInt(computedStyle.borderRightWidth,10)||0;var borderTop=parseInt(computedStyle.borderTopWidth,10)||0;var borderBottom=parseInt(computedStyle.borderBottomWidth,10)||0;var badScrollbarWidths=computeScrollbarWidthsForEl(el);// includes border!
var scrollbarLeftRight=badScrollbarWidths.y-borderLeft-borderRight;var scrollbarBottom=badScrollbarWidths.x-borderTop-borderBottom;var res={borderLeft:borderLeft,borderRight:borderRight,borderTop:borderTop,borderBottom:borderBottom,scrollbarBottom:scrollbarBottom,scrollbarLeft:0,scrollbarRight:0};if(getIsRtlScrollbarOnLeft()&&computedStyle.direction==='rtl'){// is the scrollbar on the left side?
res.scrollbarLeft=scrollbarLeftRight;}else {res.scrollbarRight=scrollbarLeftRight;}if(getPadding){res.paddingLeft=parseInt(computedStyle.paddingLeft,10)||0;res.paddingRight=parseInt(computedStyle.paddingRight,10)||0;res.paddingTop=parseInt(computedStyle.paddingTop,10)||0;res.paddingBottom=parseInt(computedStyle.paddingBottom,10)||0;}return res;}function computeInnerRect(el,goWithinPadding,doFromWindowViewport){if(goWithinPadding===void 0){goWithinPadding=false;}var outerRect=doFromWindowViewport?el.getBoundingClientRect():computeRect(el);var edges=computeEdges(el,goWithinPadding);var res={left:outerRect.left+edges.borderLeft+edges.scrollbarLeft,right:outerRect.right-edges.borderRight-edges.scrollbarRight,top:outerRect.top+edges.borderTop,bottom:outerRect.bottom-edges.borderBottom-edges.scrollbarBottom};if(goWithinPadding){res.left+=edges.paddingLeft;res.right-=edges.paddingRight;res.top+=edges.paddingTop;res.bottom-=edges.paddingBottom;}return res;}function computeRect(el){var rect=el.getBoundingClientRect();return {left:rect.left+window.pageXOffset,top:rect.top+window.pageYOffset,right:rect.right+window.pageXOffset,bottom:rect.bottom+window.pageYOffset};}function computeClippedClientRect(el){var clippingParents=getClippingParents(el);var rect=el.getBoundingClientRect();for(var _i=0,clippingParents_1=clippingParents;_i<clippingParents_1.length;_i++){var clippingParent=clippingParents_1[_i];var intersection=intersectRects(rect,clippingParent.getBoundingClientRect());if(intersection){rect=intersection;}else {return null;}}return rect;}function getClippingParents(el){var parents=[];while(el instanceof HTMLElement){// will stop when gets to document or null
var computedStyle=window.getComputedStyle(el);if(computedStyle.position==='fixed'){break;}if(/(auto|scroll)/.test(computedStyle.overflow+computedStyle.overflowY+computedStyle.overflowX)){parents.push(el);}el=el.parentNode;}return parents;}// given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.
function unpromisify(func,success,failure){// guard against success/failure callbacks being called more than once
// and guard against a promise AND callback being used together.
var isResolved=false;var wrappedSuccess=function(){if(!isResolved){isResolved=true;success.apply(this,arguments);// eslint-disable-line prefer-rest-params
}};var wrappedFailure=function(){if(!isResolved){isResolved=true;if(failure){failure.apply(this,arguments);// eslint-disable-line prefer-rest-params
}}};var res=func(wrappedSuccess,wrappedFailure);if(res&&typeof res.then==='function'){res.then(wrappedSuccess,wrappedFailure);}}var Emitter=/** @class */function(){function Emitter(){this.handlers={};this.thisContext=null;}Emitter.prototype.setThisContext=function(thisContext){this.thisContext=thisContext;};Emitter.prototype.setOptions=function(options){this.options=options;};Emitter.prototype.on=function(type,handler){addToHash(this.handlers,type,handler);};Emitter.prototype.off=function(type,handler){removeFromHash(this.handlers,type,handler);};Emitter.prototype.trigger=function(type){var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}var attachedHandlers=this.handlers[type]||[];var optionHandler=this.options&&this.options[type];var handlers=[].concat(optionHandler||[],attachedHandlers);for(var _a=0,handlers_1=handlers;_a<handlers_1.length;_a++){var handler=handlers_1[_a];handler.apply(this.thisContext,args);}};Emitter.prototype.hasHandlers=function(type){return this.handlers[type]&&this.handlers[type].length||this.options&&this.options[type];};return Emitter;}();function addToHash(hash,type,handler){(hash[type]||(hash[type]=[])).push(handler);}function removeFromHash(hash,type,handler){if(handler){if(hash[type]){hash[type]=hash[type].filter(function(func){return func!==handler;});}}else {delete hash[type];// remove all handler funcs for this type
}}/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/var PositionCache=/** @class */function(){function PositionCache(originEl,els,isHorizontal,isVertical){this.els=els;var originClientRect=this.originClientRect=originEl.getBoundingClientRect();// relative to viewport top-left
if(isHorizontal){this.buildElHorizontals(originClientRect.left);}if(isVertical){this.buildElVerticals(originClientRect.top);}}// Populates the left/right internal coordinate arrays
PositionCache.prototype.buildElHorizontals=function(originClientLeft){var lefts=[];var rights=[];for(var _i=0,_a=this.els;_i<_a.length;_i++){var el=_a[_i];var rect=el.getBoundingClientRect();lefts.push(rect.left-originClientLeft);rights.push(rect.right-originClientLeft);}this.lefts=lefts;this.rights=rights;};// Populates the top/bottom internal coordinate arrays
PositionCache.prototype.buildElVerticals=function(originClientTop){var tops=[];var bottoms=[];for(var _i=0,_a=this.els;_i<_a.length;_i++){var el=_a[_i];var rect=el.getBoundingClientRect();tops.push(rect.top-originClientTop);bottoms.push(rect.bottom-originClientTop);}this.tops=tops;this.bottoms=bottoms;};// Given a left offset (from document left), returns the index of the el that it horizontally intersects.
// If no intersection is made, returns undefined.
PositionCache.prototype.leftToIndex=function(leftPosition){var _a=this,lefts=_a.lefts,rights=_a.rights;var len=lefts.length;var i;for(i=0;i<len;i+=1){if(leftPosition>=lefts[i]&&leftPosition<rights[i]){return i;}}return undefined;// TODO: better
};// Given a top offset (from document top), returns the index of the el that it vertically intersects.
// If no intersection is made, returns undefined.
PositionCache.prototype.topToIndex=function(topPosition){var _a=this,tops=_a.tops,bottoms=_a.bottoms;var len=tops.length;var i;for(i=0;i<len;i+=1){if(topPosition>=tops[i]&&topPosition<bottoms[i]){return i;}}return undefined;// TODO: better
};// Gets the width of the element at the given index
PositionCache.prototype.getWidth=function(leftIndex){return this.rights[leftIndex]-this.lefts[leftIndex];};// Gets the height of the element at the given index
PositionCache.prototype.getHeight=function(topIndex){return this.bottoms[topIndex]-this.tops[topIndex];};return PositionCache;}();/* eslint max-classes-per-file: "off" */ /*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/var ScrollController=/** @class */function(){function ScrollController(){}ScrollController.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight();};ScrollController.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth();};ScrollController.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0;};ScrollController.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0;};ScrollController.prototype.canScrollUp=function(){return this.getScrollTop()>0;};ScrollController.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop();};ScrollController.prototype.canScrollLeft=function(){return this.getScrollLeft()>0;};ScrollController.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft();};return ScrollController;}();var ElementScrollController=/** @class */function(_super){__extends(ElementScrollController,_super);function ElementScrollController(el){var _this=_super.call(this)||this;_this.el=el;return _this;}ElementScrollController.prototype.getScrollTop=function(){return this.el.scrollTop;};ElementScrollController.prototype.getScrollLeft=function(){return this.el.scrollLeft;};ElementScrollController.prototype.setScrollTop=function(top){this.el.scrollTop=top;};ElementScrollController.prototype.setScrollLeft=function(left){this.el.scrollLeft=left;};ElementScrollController.prototype.getScrollWidth=function(){return this.el.scrollWidth;};ElementScrollController.prototype.getScrollHeight=function(){return this.el.scrollHeight;};ElementScrollController.prototype.getClientHeight=function(){return this.el.clientHeight;};ElementScrollController.prototype.getClientWidth=function(){return this.el.clientWidth;};return ElementScrollController;}(ScrollController);var WindowScrollController=/** @class */function(_super){__extends(WindowScrollController,_super);function WindowScrollController(){return _super!==null&&_super.apply(this,arguments)||this;}WindowScrollController.prototype.getScrollTop=function(){return window.pageYOffset;};WindowScrollController.prototype.getScrollLeft=function(){return window.pageXOffset;};WindowScrollController.prototype.setScrollTop=function(n){window.scroll(window.pageXOffset,n);};WindowScrollController.prototype.setScrollLeft=function(n){window.scroll(n,window.pageYOffset);};WindowScrollController.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth;};WindowScrollController.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight;};WindowScrollController.prototype.getClientHeight=function(){return document.documentElement.clientHeight;};WindowScrollController.prototype.getClientWidth=function(){return document.documentElement.clientWidth;};return WindowScrollController;}(ScrollController);var Theme=/** @class */function(){function Theme(calendarOptions){if(this.iconOverrideOption){this.setIconOverride(calendarOptions[this.iconOverrideOption]);}}Theme.prototype.setIconOverride=function(iconOverrideHash){var iconClassesCopy;var buttonName;if(typeof iconOverrideHash==='object'&&iconOverrideHash){// non-null object
iconClassesCopy=__assign$1({},this.iconClasses);for(buttonName in iconOverrideHash){iconClassesCopy[buttonName]=this.applyIconOverridePrefix(iconOverrideHash[buttonName]);}this.iconClasses=iconClassesCopy;}else if(iconOverrideHash===false){this.iconClasses={};}};Theme.prototype.applyIconOverridePrefix=function(className){var prefix=this.iconOverridePrefix;if(prefix&&className.indexOf(prefix)!==0){// if not already present
className=prefix+className;}return className;};Theme.prototype.getClass=function(key){return this.classes[key]||'';};Theme.prototype.getIconClass=function(buttonName,isRtl){var className;if(isRtl&&this.rtlIconClasses){className=this.rtlIconClasses[buttonName]||this.iconClasses[buttonName];}else {className=this.iconClasses[buttonName];}if(className){return this.baseIconClass+" "+className;}return '';};Theme.prototype.getCustomButtonIconClass=function(customButtonProps){var className;if(this.iconOverrideCustomButtonOption){className=customButtonProps[this.iconOverrideCustomButtonOption];if(className){return this.baseIconClass+" "+this.applyIconOverridePrefix(className);}}return '';};return Theme;}();Theme.prototype.classes={};Theme.prototype.iconClasses={};Theme.prototype.baseIconClass='';Theme.prototype.iconOverridePrefix='';var ScrollResponder=/** @class */function(){function ScrollResponder(execFunc,emitter,scrollTime,scrollTimeReset){var _this=this;this.execFunc=execFunc;this.emitter=emitter;this.scrollTime=scrollTime;this.scrollTimeReset=scrollTimeReset;this.handleScrollRequest=function(request){_this.queuedRequest=__assign$1({},_this.queuedRequest||{},request);_this.drain();};emitter.on('_scrollRequest',this.handleScrollRequest);this.fireInitialScroll();}ScrollResponder.prototype.detach=function(){this.emitter.off('_scrollRequest',this.handleScrollRequest);};ScrollResponder.prototype.update=function(isDatesNew){if(isDatesNew&&this.scrollTimeReset){this.fireInitialScroll();// will drain
}else {this.drain();}};ScrollResponder.prototype.fireInitialScroll=function(){this.handleScrollRequest({time:this.scrollTime});};ScrollResponder.prototype.drain=function(){if(this.queuedRequest&&this.execFunc(this.queuedRequest)){this.queuedRequest=null;}};return ScrollResponder;}();var ViewContextType=createContext({});// for Components
function buildViewContext(viewSpec,viewApi,viewOptions,dateProfileGenerator,dateEnv,theme,pluginHooks,dispatch,getCurrentData,emitter,calendarApi,registerInteractiveComponent,unregisterInteractiveComponent){return {dateEnv:dateEnv,options:viewOptions,pluginHooks:pluginHooks,emitter:emitter,dispatch:dispatch,getCurrentData:getCurrentData,calendarApi:calendarApi,viewSpec:viewSpec,viewApi:viewApi,dateProfileGenerator:dateProfileGenerator,theme:theme,isRtl:viewOptions.direction==='rtl',addResizeHandler:function(handler){emitter.on('_resize',handler);},removeResizeHandler:function(handler){emitter.off('_resize',handler);},createScrollResponder:function(execFunc){return new ScrollResponder(execFunc,emitter,createDuration(viewOptions.scrollTime),viewOptions.scrollTimeReset);},registerInteractiveComponent:registerInteractiveComponent,unregisterInteractiveComponent:unregisterInteractiveComponent};}/* eslint max-classes-per-file: off */var PureComponent=/** @class */function(_super){__extends(PureComponent,_super);function PureComponent(){return _super!==null&&_super.apply(this,arguments)||this;}PureComponent.prototype.shouldComponentUpdate=function(nextProps,nextState){if(this.debug){// eslint-disable-next-line no-console
console.log(getUnequalProps(nextProps,this.props),getUnequalProps(nextState,this.state));}return !compareObjs(this.props,nextProps,this.propEquality)||!compareObjs(this.state,nextState,this.stateEquality);};PureComponent.addPropsEquality=addPropsEquality;PureComponent.addStateEquality=addStateEquality;PureComponent.contextType=ViewContextType;return PureComponent;}(Component);PureComponent.prototype.propEquality={};PureComponent.prototype.stateEquality={};var BaseComponent=/** @class */function(_super){__extends(BaseComponent,_super);function BaseComponent(){return _super!==null&&_super.apply(this,arguments)||this;}BaseComponent.contextType=ViewContextType;return BaseComponent;}(PureComponent);function addPropsEquality(propEquality){var hash=Object.create(this.prototype.propEquality);__assign$1(hash,propEquality);this.prototype.propEquality=hash;}function addStateEquality(stateEquality){var hash=Object.create(this.prototype.stateEquality);__assign$1(hash,stateEquality);this.prototype.stateEquality=hash;}// use other one
function setRef(ref,current){if(typeof ref==='function'){ref(current);}else if(ref){// see https://github.com/facebook/react/issues/13029
ref.current=current;}}/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/var DateComponent=/** @class */function(_super){__extends(DateComponent,_super);function DateComponent(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.uid=guid();return _this;}// Hit System
// -----------------------------------------------------------------------------------------------------------------
DateComponent.prototype.prepareHits=function(){};DateComponent.prototype.queryHit=function(positionLeft,positionTop,elWidth,elHeight){return null;// this should be abstract
};// Pointer Interaction Utils
// -----------------------------------------------------------------------------------------------------------------
DateComponent.prototype.isValidSegDownEl=function(el){return !this.props.eventDrag&&// HACK
!this.props.eventResize&&// HACK
!elementClosest(el,'.fc-event-mirror');};DateComponent.prototype.isValidDateDownEl=function(el){return !elementClosest(el,'.fc-event:not(.fc-bg-event)')&&!elementClosest(el,'.fc-more-link')&&// a "more.." link
!elementClosest(el,'a[data-navlink]')&&// a clickable nav link
!elementClosest(el,'.fc-popover');// hack
};return DateComponent;}(BaseComponent);// TODO: easier way to add new hooks? need to update a million things
function createPlugin(input){return {id:guid(),deps:input.deps||[],reducers:input.reducers||[],isLoadingFuncs:input.isLoadingFuncs||[],contextInit:[].concat(input.contextInit||[]),eventRefiners:input.eventRefiners||{},eventDefMemberAdders:input.eventDefMemberAdders||[],eventSourceRefiners:input.eventSourceRefiners||{},isDraggableTransformers:input.isDraggableTransformers||[],eventDragMutationMassagers:input.eventDragMutationMassagers||[],eventDefMutationAppliers:input.eventDefMutationAppliers||[],dateSelectionTransformers:input.dateSelectionTransformers||[],datePointTransforms:input.datePointTransforms||[],dateSpanTransforms:input.dateSpanTransforms||[],views:input.views||{},viewPropsTransformers:input.viewPropsTransformers||[],isPropsValid:input.isPropsValid||null,externalDefTransforms:input.externalDefTransforms||[],viewContainerAppends:input.viewContainerAppends||[],eventDropTransformers:input.eventDropTransformers||[],componentInteractions:input.componentInteractions||[],calendarInteractions:input.calendarInteractions||[],themeClasses:input.themeClasses||{},eventSourceDefs:input.eventSourceDefs||[],cmdFormatter:input.cmdFormatter,recurringTypes:input.recurringTypes||[],namedTimeZonedImpl:input.namedTimeZonedImpl,initialView:input.initialView||'',elementDraggingImpl:input.elementDraggingImpl,optionChangeHandlers:input.optionChangeHandlers||{},scrollGridImpl:input.scrollGridImpl||null,contentTypeHandlers:input.contentTypeHandlers||{},listenerRefiners:input.listenerRefiners||{},optionRefiners:input.optionRefiners||{},propSetHandlers:input.propSetHandlers||{}};}function buildPluginHooks(pluginDefs,globalDefs){var isAdded={};var hooks={reducers:[],isLoadingFuncs:[],contextInit:[],eventRefiners:{},eventDefMemberAdders:[],eventSourceRefiners:{},isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],viewContainerAppends:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,initialView:'',elementDraggingImpl:null,optionChangeHandlers:{},scrollGridImpl:null,contentTypeHandlers:{},listenerRefiners:{},optionRefiners:{},propSetHandlers:{}};function addDefs(defs){for(var _i=0,defs_1=defs;_i<defs_1.length;_i++){var def=defs_1[_i];if(!isAdded[def.id]){isAdded[def.id]=true;addDefs(def.deps);hooks=combineHooks(hooks,def);}}}if(pluginDefs){addDefs(pluginDefs);}addDefs(globalDefs);return hooks;}function buildBuildPluginHooks(){var currentOverrideDefs=[];var currentGlobalDefs=[];var currentHooks;return function(overrideDefs,globalDefs){if(!currentHooks||!isArraysEqual(overrideDefs,currentOverrideDefs)||!isArraysEqual(globalDefs,currentGlobalDefs)){currentHooks=buildPluginHooks(overrideDefs,globalDefs);}currentOverrideDefs=overrideDefs;currentGlobalDefs=globalDefs;return currentHooks;};}function combineHooks(hooks0,hooks1){return {reducers:hooks0.reducers.concat(hooks1.reducers),isLoadingFuncs:hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),contextInit:hooks0.contextInit.concat(hooks1.contextInit),eventRefiners:__assign$1(__assign$1({},hooks0.eventRefiners),hooks1.eventRefiners),eventDefMemberAdders:hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),eventSourceRefiners:__assign$1(__assign$1({},hooks0.eventSourceRefiners),hooks1.eventSourceRefiners),isDraggableTransformers:hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),eventDragMutationMassagers:hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),eventDefMutationAppliers:hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),dateSelectionTransformers:hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),datePointTransforms:hooks0.datePointTransforms.concat(hooks1.datePointTransforms),dateSpanTransforms:hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),views:__assign$1(__assign$1({},hooks0.views),hooks1.views),viewPropsTransformers:hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),isPropsValid:hooks1.isPropsValid||hooks0.isPropsValid,externalDefTransforms:hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),viewContainerAppends:hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),eventDropTransformers:hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),calendarInteractions:hooks0.calendarInteractions.concat(hooks1.calendarInteractions),componentInteractions:hooks0.componentInteractions.concat(hooks1.componentInteractions),themeClasses:__assign$1(__assign$1({},hooks0.themeClasses),hooks1.themeClasses),eventSourceDefs:hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),cmdFormatter:hooks1.cmdFormatter||hooks0.cmdFormatter,recurringTypes:hooks0.recurringTypes.concat(hooks1.recurringTypes),namedTimeZonedImpl:hooks1.namedTimeZonedImpl||hooks0.namedTimeZonedImpl,initialView:hooks0.initialView||hooks1.initialView,elementDraggingImpl:hooks0.elementDraggingImpl||hooks1.elementDraggingImpl,optionChangeHandlers:__assign$1(__assign$1({},hooks0.optionChangeHandlers),hooks1.optionChangeHandlers),scrollGridImpl:hooks1.scrollGridImpl||hooks0.scrollGridImpl,contentTypeHandlers:__assign$1(__assign$1({},hooks0.contentTypeHandlers),hooks1.contentTypeHandlers),listenerRefiners:__assign$1(__assign$1({},hooks0.listenerRefiners),hooks1.listenerRefiners),optionRefiners:__assign$1(__assign$1({},hooks0.optionRefiners),hooks1.optionRefiners),propSetHandlers:__assign$1(__assign$1({},hooks0.propSetHandlers),hooks1.propSetHandlers)};}var StandardTheme=/** @class */function(_super){__extends(StandardTheme,_super);function StandardTheme(){return _super!==null&&_super.apply(this,arguments)||this;}return StandardTheme;}(Theme);StandardTheme.prototype.classes={root:'fc-theme-standard',tableCellShaded:'fc-cell-shaded',buttonGroup:'fc-button-group',button:'fc-button fc-button-primary',buttonActive:'fc-button-active'};StandardTheme.prototype.baseIconClass='fc-icon';StandardTheme.prototype.iconClasses={close:'fc-icon-x',prev:'fc-icon-chevron-left',next:'fc-icon-chevron-right',prevYear:'fc-icon-chevrons-left',nextYear:'fc-icon-chevrons-right'};StandardTheme.prototype.rtlIconClasses={prev:'fc-icon-chevron-right',next:'fc-icon-chevron-left',prevYear:'fc-icon-chevrons-right',nextYear:'fc-icon-chevrons-left'};StandardTheme.prototype.iconOverrideOption='buttonIcons';// TODO: make TS-friendly
StandardTheme.prototype.iconOverrideCustomButtonOption='icon';StandardTheme.prototype.iconOverridePrefix='fc-icon-';function compileViewDefs(defaultConfigs,overrideConfigs){var hash={};var viewType;for(viewType in defaultConfigs){ensureViewDef(viewType,hash,defaultConfigs,overrideConfigs);}for(viewType in overrideConfigs){ensureViewDef(viewType,hash,defaultConfigs,overrideConfigs);}return hash;}function ensureViewDef(viewType,hash,defaultConfigs,overrideConfigs){if(hash[viewType]){return hash[viewType];}var viewDef=buildViewDef(viewType,hash,defaultConfigs,overrideConfigs);if(viewDef){hash[viewType]=viewDef;}return viewDef;}function buildViewDef(viewType,hash,defaultConfigs,overrideConfigs){var defaultConfig=defaultConfigs[viewType];var overrideConfig=overrideConfigs[viewType];var queryProp=function(name){return defaultConfig&&defaultConfig[name]!==null?defaultConfig[name]:overrideConfig&&overrideConfig[name]!==null?overrideConfig[name]:null;};var theComponent=queryProp('component');var superType=queryProp('superType');var superDef=null;if(superType){if(superType===viewType){throw new Error('Can\'t have a custom view type that references itself');}superDef=ensureViewDef(superType,hash,defaultConfigs,overrideConfigs);}if(!theComponent&&superDef){theComponent=superDef.component;}if(!theComponent){return null;// don't throw a warning, might be settings for a single-unit view
}return {type:viewType,component:theComponent,defaults:__assign$1(__assign$1({},superDef?superDef.defaults:{}),defaultConfig?defaultConfig.rawOptions:{}),overrides:__assign$1(__assign$1({},superDef?superDef.overrides:{}),overrideConfig?overrideConfig.rawOptions:{})};}/* eslint max-classes-per-file: off */ // NOTE: in JSX, you should always use this class with <HookProps> arg. otherwise, will default to any???
var RenderHook=/** @class */function(_super){__extends(RenderHook,_super);function RenderHook(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.rootElRef=createRef();_this.handleRootEl=function(el){setRef(_this.rootElRef,el);if(_this.props.elRef){setRef(_this.props.elRef,el);}};return _this;}RenderHook.prototype.render=function(){var _this=this;var props=this.props;var hookProps=props.hookProps;return createElement(MountHook,{hookProps:hookProps,didMount:props.didMount,willUnmount:props.willUnmount,elRef:this.handleRootEl},function(rootElRef){return createElement(ContentHook,{hookProps:hookProps,content:props.content,defaultContent:props.defaultContent,backupElRef:_this.rootElRef},function(innerElRef,innerContent){return props.children(rootElRef,normalizeClassNames(props.classNames,hookProps),innerElRef,innerContent);});});};return RenderHook;}(BaseComponent);// TODO: rename to be about function, not default. use in above type
// for forcing rerender of components that use the ContentHook
var CustomContentRenderContext=createContext(0);function ContentHook(props){return createElement(CustomContentRenderContext.Consumer,null,function(renderId){return createElement(ContentHookInner,__assign$1({renderId:renderId},props));});}var ContentHookInner=/** @class */function(_super){__extends(ContentHookInner,_super);function ContentHookInner(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.innerElRef=createRef();return _this;}ContentHookInner.prototype.render=function(){return this.props.children(this.innerElRef,this.renderInnerContent());};ContentHookInner.prototype.componentDidMount=function(){this.updateCustomContent();};ContentHookInner.prototype.componentDidUpdate=function(){this.updateCustomContent();};ContentHookInner.prototype.componentWillUnmount=function(){if(this.customContentInfo&&this.customContentInfo.destroy){this.customContentInfo.destroy();}};ContentHookInner.prototype.renderInnerContent=function(){var customContentInfo=this.customContentInfo;// only populated if using non-[p]react node(s)
var innerContent=this.getInnerContent();var meta=this.getContentMeta(innerContent);// initial run, or content-type changing? (from vue -> react for example)
if(!customContentInfo||customContentInfo.contentKey!==meta.contentKey){// clearing old value
if(customContentInfo){if(customContentInfo.destroy){customContentInfo.destroy();}customContentInfo=this.customContentInfo=null;}// assigning new value
if(meta.contentKey){customContentInfo=this.customContentInfo=__assign$1({contentKey:meta.contentKey,contentVal:innerContent[meta.contentKey]},meta.buildLifecycleFuncs());}// updating
}else if(customContentInfo){customContentInfo.contentVal=innerContent[meta.contentKey];}return customContentInfo?[]// signal that something was specified
:innerContent;// assume a [p]react vdom node. use it
};ContentHookInner.prototype.getInnerContent=function(){var props=this.props;var innerContent=normalizeContent(props.content,props.hookProps);if(innerContent===undefined){// use the default
innerContent=normalizeContent(props.defaultContent,props.hookProps);}return innerContent==null?null:innerContent;// convert undefined to null (better for React)
};ContentHookInner.prototype.getContentMeta=function(innerContent){var contentTypeHandlers=this.context.pluginHooks.contentTypeHandlers;var contentKey='';var buildLifecycleFuncs=null;if(innerContent){// allowed to be null, for convenience to caller
for(var searchKey in contentTypeHandlers){if(innerContent[searchKey]!==undefined){contentKey=searchKey;buildLifecycleFuncs=contentTypeHandlers[searchKey];break;}}}return {contentKey:contentKey,buildLifecycleFuncs:buildLifecycleFuncs};};ContentHookInner.prototype.updateCustomContent=function(){if(this.customContentInfo){// for non-[p]react
this.customContentInfo.render(this.innerElRef.current||this.props.backupElRef.current,// the element to render into
this.customContentInfo.contentVal);}};return ContentHookInner;}(BaseComponent);var MountHook=/** @class */function(_super){__extends(MountHook,_super);function MountHook(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.handleRootEl=function(rootEl){_this.rootEl=rootEl;if(_this.props.elRef){setRef(_this.props.elRef,rootEl);}};return _this;}MountHook.prototype.render=function(){return this.props.children(this.handleRootEl);};MountHook.prototype.componentDidMount=function(){var callback=this.props.didMount;if(callback){callback(__assign$1(__assign$1({},this.props.hookProps),{el:this.rootEl}));}};MountHook.prototype.componentWillUnmount=function(){var callback=this.props.willUnmount;if(callback){callback(__assign$1(__assign$1({},this.props.hookProps),{el:this.rootEl}));}};return MountHook;}(BaseComponent);function buildClassNameNormalizer(){var currentGenerator;var currentHookProps;var currentClassNames=[];return function(generator,hookProps){if(!currentHookProps||!isPropsEqual(currentHookProps,hookProps)||generator!==currentGenerator){currentGenerator=generator;currentHookProps=hookProps;currentClassNames=normalizeClassNames(generator,hookProps);}return currentClassNames;};}function normalizeClassNames(classNames,hookProps){if(typeof classNames==='function'){classNames=classNames(hookProps);}return parseClassNames(classNames);}function normalizeContent(input,hookProps){if(typeof input==='function'){return input(hookProps,createElement);// give the function the vdom-creation func
}return input;}var ViewRoot=/** @class */function(_super){__extends(ViewRoot,_super);function ViewRoot(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.normalizeClassNames=buildClassNameNormalizer();return _this;}ViewRoot.prototype.render=function(){var _a=this,props=_a.props,context=_a.context;var options=context.options;var hookProps={view:context.viewApi};var customClassNames=this.normalizeClassNames(options.viewClassNames,hookProps);return createElement(MountHook,{hookProps:hookProps,didMount:options.viewDidMount,willUnmount:options.viewWillUnmount,elRef:props.elRef},function(rootElRef){return props.children(rootElRef,["fc-"+props.viewSpec.type+"-view",'fc-view'].concat(customClassNames));});};return ViewRoot;}(BaseComponent);function parseViewConfigs(inputs){return mapHash(inputs,parseViewConfig);}function parseViewConfig(input){var rawOptions=typeof input==='function'?{component:input}:input;var component=rawOptions.component;if(rawOptions.content){component=createViewHookComponent(rawOptions);// TODO: remove content/classNames/didMount/etc from options?
}return {superType:rawOptions.type,component:component,rawOptions:rawOptions};}function createViewHookComponent(options){return function(viewProps){return createElement(ViewContextType.Consumer,null,function(context){return createElement(ViewRoot,{viewSpec:context.viewSpec},function(viewElRef,viewClassNames){var hookProps=__assign$1(__assign$1({},viewProps),{nextDayThreshold:context.options.nextDayThreshold});return createElement(RenderHook,{hookProps:hookProps,classNames:options.classNames,content:options.content,didMount:options.didMount,willUnmount:options.willUnmount,elRef:viewElRef},function(rootElRef,customClassNames,innerElRef,innerContent){return createElement("div",{className:viewClassNames.concat(customClassNames).join(' '),ref:rootElRef},innerContent);});});});};}function buildViewSpecs(defaultInputs,optionOverrides,dynamicOptionOverrides,localeDefaults){var defaultConfigs=parseViewConfigs(defaultInputs);var overrideConfigs=parseViewConfigs(optionOverrides.views);var viewDefs=compileViewDefs(defaultConfigs,overrideConfigs);return mapHash(viewDefs,function(viewDef){return buildViewSpec(viewDef,overrideConfigs,optionOverrides,dynamicOptionOverrides,localeDefaults);});}function buildViewSpec(viewDef,overrideConfigs,optionOverrides,dynamicOptionOverrides,localeDefaults){var durationInput=viewDef.overrides.duration||viewDef.defaults.duration||dynamicOptionOverrides.duration||optionOverrides.duration;var duration=null;var durationUnit='';var singleUnit='';var singleUnitOverrides={};if(durationInput){duration=createDurationCached(durationInput);if(duration){// valid?
var denom=greatestDurationDenominator(duration);durationUnit=denom.unit;if(denom.value===1){singleUnit=durationUnit;singleUnitOverrides=overrideConfigs[durationUnit]?overrideConfigs[durationUnit].rawOptions:{};}}}var queryButtonText=function(optionsSubset){var buttonTextMap=optionsSubset.buttonText||{};var buttonTextKey=viewDef.defaults.buttonTextKey;if(buttonTextKey!=null&&buttonTextMap[buttonTextKey]!=null){return buttonTextMap[buttonTextKey];}if(buttonTextMap[viewDef.type]!=null){return buttonTextMap[viewDef.type];}if(buttonTextMap[singleUnit]!=null){return buttonTextMap[singleUnit];}return null;};return {type:viewDef.type,component:viewDef.component,duration:duration,durationUnit:durationUnit,singleUnit:singleUnit,optionDefaults:viewDef.defaults,optionOverrides:__assign$1(__assign$1({},singleUnitOverrides),viewDef.overrides),buttonTextOverride:queryButtonText(dynamicOptionOverrides)||queryButtonText(optionOverrides)||// constructor-specified buttonText lookup hash takes precedence
viewDef.overrides.buttonText,buttonTextDefault:queryButtonText(localeDefaults)||viewDef.defaults.buttonText||queryButtonText(BASE_OPTION_DEFAULTS)||viewDef.type// fall back to given view name
};}// hack to get memoization working
var durationInputMap={};function createDurationCached(durationInput){var json=JSON.stringify(durationInput);var res=durationInputMap[json];if(res===undefined){res=createDuration(durationInput);durationInputMap[json]=res;}return res;}var DateProfileGenerator=/** @class */function(){function DateProfileGenerator(props){this.props=props;this.nowDate=getNow(props.nowInput,props.dateEnv);this.initHiddenDays();}/* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/ // Builds a structure with info about what the dates/ranges will be for the "prev" view.
DateProfileGenerator.prototype.buildPrev=function(currentDateProfile,currentDate,forceToValid){var dateEnv=this.props.dateEnv;var prevDate=dateEnv.subtract(dateEnv.startOf(currentDate,currentDateProfile.currentRangeUnit),// important for start-of-month
currentDateProfile.dateIncrement);return this.build(prevDate,-1,forceToValid);};// Builds a structure with info about what the dates/ranges will be for the "next" view.
DateProfileGenerator.prototype.buildNext=function(currentDateProfile,currentDate,forceToValid){var dateEnv=this.props.dateEnv;var nextDate=dateEnv.add(dateEnv.startOf(currentDate,currentDateProfile.currentRangeUnit),// important for start-of-month
currentDateProfile.dateIncrement);return this.build(nextDate,1,forceToValid);};// Builds a structure holding dates/ranges for rendering around the given date.
// Optional direction param indicates whether the date is being incremented/decremented
// from its previous value. decremented = -1, incremented = 1 (default).
DateProfileGenerator.prototype.build=function(currentDate,direction,forceToValid){if(forceToValid===void 0){forceToValid=true;}var props=this.props;var validRange;var currentInfo;var isRangeAllDay;var renderRange;var activeRange;var isValid;validRange=this.buildValidRange();validRange=this.trimHiddenDays(validRange);if(forceToValid){currentDate=constrainMarkerToRange(currentDate,validRange);}currentInfo=this.buildCurrentRangeInfo(currentDate,direction);isRangeAllDay=/^(year|month|week|day)$/.test(currentInfo.unit);renderRange=this.buildRenderRange(this.trimHiddenDays(currentInfo.range),currentInfo.unit,isRangeAllDay);renderRange=this.trimHiddenDays(renderRange);activeRange=renderRange;if(!props.showNonCurrentDates){activeRange=intersectRanges(activeRange,currentInfo.range);}activeRange=this.adjustActiveRange(activeRange);activeRange=intersectRanges(activeRange,validRange);// might return null
// it's invalid if the originally requested date is not contained,
// or if the range is completely outside of the valid range.
isValid=rangesIntersect(currentInfo.range,validRange);return {// constraint for where prev/next operations can go and where events can be dragged/resized to.
// an object with optional start and end properties.
validRange:validRange,// range the view is formally responsible for.
// for example, a month view might have 1st-31st, excluding padded dates
currentRange:currentInfo.range,// name of largest unit being displayed, like "month" or "week"
currentRangeUnit:currentInfo.unit,isRangeAllDay:isRangeAllDay,// dates that display events and accept drag-n-drop
// will be `null` if no dates accept events
activeRange:activeRange,// date range with a rendered skeleton
// includes not-active days that need some sort of DOM
renderRange:renderRange,// Duration object that denotes the first visible time of any given day
slotMinTime:props.slotMinTime,// Duration object that denotes the exclusive visible end time of any given day
slotMaxTime:props.slotMaxTime,isValid:isValid,// how far the current date will move for a prev/next operation
dateIncrement:this.buildDateIncrement(currentInfo.duration)// pass a fallback (might be null) ^
};};// Builds an object with optional start/end properties.
// Indicates the minimum/maximum dates to display.
// not responsible for trimming hidden days.
DateProfileGenerator.prototype.buildValidRange=function(){var input=this.props.validRangeInput;var simpleInput=typeof input==='function'?input.call(this.props.calendarApi,this.nowDate):input;return this.refineRange(simpleInput)||{start:null,end:null};// completely open-ended
};// Builds a structure with info about the "current" range, the range that is
// highlighted as being the current month for example.
// See build() for a description of `direction`.
// Guaranteed to have `range` and `unit` properties. `duration` is optional.
DateProfileGenerator.prototype.buildCurrentRangeInfo=function(date,direction){var props=this.props;var duration=null;var unit=null;var range=null;var dayCount;if(props.duration){duration=props.duration;unit=props.durationUnit;range=this.buildRangeFromDuration(date,direction,duration,unit);}else if(dayCount=this.props.dayCount){unit='day';range=this.buildRangeFromDayCount(date,direction,dayCount);}else if(range=this.buildCustomVisibleRange(date)){unit=props.dateEnv.greatestWholeUnit(range.start,range.end).unit;}else {duration=this.getFallbackDuration();unit=greatestDurationDenominator(duration).unit;range=this.buildRangeFromDuration(date,direction,duration,unit);}return {duration:duration,unit:unit,range:range};};DateProfileGenerator.prototype.getFallbackDuration=function(){return createDuration({day:1});};// Returns a new activeRange to have time values (un-ambiguate)
// slotMinTime or slotMaxTime causes the range to expand.
DateProfileGenerator.prototype.adjustActiveRange=function(range){var _a=this.props,dateEnv=_a.dateEnv,usesMinMaxTime=_a.usesMinMaxTime,slotMinTime=_a.slotMinTime,slotMaxTime=_a.slotMaxTime;var start=range.start,end=range.end;if(usesMinMaxTime){// expand active range if slotMinTime is negative (why not when positive?)
if(asRoughDays(slotMinTime)<0){start=startOfDay(start);// necessary?
start=dateEnv.add(start,slotMinTime);}// expand active range if slotMaxTime is beyond one day (why not when negative?)
if(asRoughDays(slotMaxTime)>1){end=startOfDay(end);// necessary?
end=addDays(end,-1);end=dateEnv.add(end,slotMaxTime);}}return {start:start,end:end};};// Builds the "current" range when it is specified as an explicit duration.
// `unit` is the already-computed greatestDurationDenominator unit of duration.
DateProfileGenerator.prototype.buildRangeFromDuration=function(date,direction,duration,unit){var _a=this.props,dateEnv=_a.dateEnv,dateAlignment=_a.dateAlignment;var start;var end;var res;// compute what the alignment should be
if(!dateAlignment){var dateIncrement=this.props.dateIncrement;if(dateIncrement){// use the smaller of the two units
if(asRoughMs(dateIncrement)<asRoughMs(duration)){dateAlignment=greatestDurationDenominator(dateIncrement).unit;}else {dateAlignment=unit;}}else {dateAlignment=unit;}}// if the view displays a single day or smaller
if(asRoughDays(duration)<=1){if(this.isHiddenDay(start)){start=this.skipHiddenDays(start,direction);start=startOfDay(start);}}function computeRes(){start=dateEnv.startOf(date,dateAlignment);end=dateEnv.add(start,duration);res={start:start,end:end};}computeRes();// if range is completely enveloped by hidden days, go past the hidden days
if(!this.trimHiddenDays(res)){date=this.skipHiddenDays(date,direction);computeRes();}return res;};// Builds the "current" range when a dayCount is specified.
DateProfileGenerator.prototype.buildRangeFromDayCount=function(date,direction,dayCount){var _a=this.props,dateEnv=_a.dateEnv,dateAlignment=_a.dateAlignment;var runningCount=0;var start=date;var end;if(dateAlignment){start=dateEnv.startOf(start,dateAlignment);}start=startOfDay(start);start=this.skipHiddenDays(start,direction);end=start;do{end=addDays(end,1);if(!this.isHiddenDay(end)){runningCount+=1;}}while(runningCount<dayCount);return {start:start,end:end};};// Builds a normalized range object for the "visible" range,
// which is a way to define the currentRange and activeRange at the same time.
DateProfileGenerator.prototype.buildCustomVisibleRange=function(date){var props=this.props;var input=props.visibleRangeInput;var simpleInput=typeof input==='function'?input.call(props.calendarApi,props.dateEnv.toDate(date)):input;var range=this.refineRange(simpleInput);if(range&&(range.start==null||range.end==null)){return null;}return range;};// Computes the range that will represent the element/cells for *rendering*,
// but which may have voided days/times.
// not responsible for trimming hidden days.
DateProfileGenerator.prototype.buildRenderRange=function(currentRange,currentRangeUnit,isRangeAllDay){return currentRange;};// Compute the duration value that should be added/substracted to the current date
// when a prev/next operation happens.
DateProfileGenerator.prototype.buildDateIncrement=function(fallback){var dateIncrement=this.props.dateIncrement;var customAlignment;if(dateIncrement){return dateIncrement;}if(customAlignment=this.props.dateAlignment){return createDuration(1,customAlignment);}if(fallback){return fallback;}return createDuration({days:1});};DateProfileGenerator.prototype.refineRange=function(rangeInput){if(rangeInput){var range=parseRange(rangeInput,this.props.dateEnv);if(range){range=computeVisibleDayRange(range);}return range;}return null;};/* Hidden Days
    ------------------------------------------------------------------------------------------------------------------*/ // Initializes internal variables related to calculating hidden days-of-week
DateProfileGenerator.prototype.initHiddenDays=function(){var hiddenDays=this.props.hiddenDays||[];// array of day-of-week indices that are hidden
var isHiddenDayHash=[];// is the day-of-week hidden? (hash with day-of-week-index -> bool)
var dayCnt=0;var i;if(this.props.weekends===false){hiddenDays.push(0,6);// 0=sunday, 6=saturday
}for(i=0;i<7;i+=1){if(!(isHiddenDayHash[i]=hiddenDays.indexOf(i)!==-1)){dayCnt+=1;}}if(!dayCnt){throw new Error('invalid hiddenDays');// all days were hidden? bad.
}this.isHiddenDayHash=isHiddenDayHash;};// Remove days from the beginning and end of the range that are computed as hidden.
// If the whole range is trimmed off, returns null
DateProfileGenerator.prototype.trimHiddenDays=function(range){var start=range.start,end=range.end;if(start){start=this.skipHiddenDays(start);}if(end){end=this.skipHiddenDays(end,-1,true);}if(start==null||end==null||start<end){return {start:start,end:end};}return null;};// Is the current day hidden?
// `day` is a day-of-week index (0-6), or a Date (used for UTC)
DateProfileGenerator.prototype.isHiddenDay=function(day){if(day instanceof Date){day=day.getUTCDay();}return this.isHiddenDayHash[day];};// Incrementing the current day until it is no longer a hidden day, returning a copy.
// DOES NOT CONSIDER validRange!
// If the initial value of `date` is not a hidden day, don't do anything.
// Pass `isExclusive` as `true` if you are dealing with an end date.
// `inc` defaults to `1` (increment one day forward each time)
DateProfileGenerator.prototype.skipHiddenDays=function(date,inc,isExclusive){if(inc===void 0){inc=1;}if(isExclusive===void 0){isExclusive=false;}while(this.isHiddenDayHash[(date.getUTCDay()+(isExclusive?inc:0)+7)%7]){date=addDays(date,inc);}return date;};return DateProfileGenerator;}();function reduceViewType(viewType,action){switch(action.type){case'CHANGE_VIEW_TYPE':viewType=action.viewType;}return viewType;}function reduceDynamicOptionOverrides(dynamicOptionOverrides,action){var _a;switch(action.type){case'SET_OPTION':return __assign$1(__assign$1({},dynamicOptionOverrides),(_a={},_a[action.optionName]=action.rawOptionValue,_a));default:return dynamicOptionOverrides;}}function reduceDateProfile(currentDateProfile,action,currentDate,dateProfileGenerator){var dp;switch(action.type){case'CHANGE_VIEW_TYPE':return dateProfileGenerator.build(action.dateMarker||currentDate);case'CHANGE_DATE':return dateProfileGenerator.build(action.dateMarker);case'PREV':dp=dateProfileGenerator.buildPrev(currentDateProfile,currentDate);if(dp.isValid){return dp;}break;case'NEXT':dp=dateProfileGenerator.buildNext(currentDateProfile,currentDate);if(dp.isValid){return dp;}break;}return currentDateProfile;}function initEventSources(calendarOptions,dateProfile,context){var activeRange=dateProfile?dateProfile.activeRange:null;return addSources({},parseInitialSources(calendarOptions,context),activeRange,context);}function reduceEventSources(eventSources,action,dateProfile,context){var activeRange=dateProfile?dateProfile.activeRange:null;// need this check?
switch(action.type){case'ADD_EVENT_SOURCES':// already parsed
return addSources(eventSources,action.sources,activeRange,context);case'REMOVE_EVENT_SOURCE':return removeSource(eventSources,action.sourceId);case'PREV':// TODO: how do we track all actions that affect dateProfile :(
case'NEXT':case'CHANGE_DATE':case'CHANGE_VIEW_TYPE':if(dateProfile){return fetchDirtySources(eventSources,activeRange,context);}return eventSources;case'FETCH_EVENT_SOURCES':return fetchSourcesByIds(eventSources,action.sourceIds?// why no type?
arrayToHash(action.sourceIds):excludeStaticSources(eventSources,context),activeRange,action.isRefetch||false,context);case'RECEIVE_EVENTS':case'RECEIVE_EVENT_ERROR':return receiveResponse(eventSources,action.sourceId,action.fetchId,action.fetchRange);case'REMOVE_ALL_EVENT_SOURCES':return {};default:return eventSources;}}function reduceEventSourcesNewTimeZone(eventSources,dateProfile,context){var activeRange=dateProfile?dateProfile.activeRange:null;// need this check?
return fetchSourcesByIds(eventSources,excludeStaticSources(eventSources,context),activeRange,true,context);}function computeEventSourcesLoading(eventSources){for(var sourceId in eventSources){if(eventSources[sourceId].isFetching){return true;}}return false;}function addSources(eventSourceHash,sources,fetchRange,context){var hash={};for(var _i=0,sources_1=sources;_i<sources_1.length;_i++){var source=sources_1[_i];hash[source.sourceId]=source;}if(fetchRange){hash=fetchDirtySources(hash,fetchRange,context);}return __assign$1(__assign$1({},eventSourceHash),hash);}function removeSource(eventSourceHash,sourceId){return filterHash(eventSourceHash,function(eventSource){return eventSource.sourceId!==sourceId;});}function fetchDirtySources(sourceHash,fetchRange,context){return fetchSourcesByIds(sourceHash,filterHash(sourceHash,function(eventSource){return isSourceDirty(eventSource,fetchRange,context);}),fetchRange,false,context);}function isSourceDirty(eventSource,fetchRange,context){if(!doesSourceNeedRange(eventSource,context)){return !eventSource.latestFetchId;}return !context.options.lazyFetching||!eventSource.fetchRange||eventSource.isFetching||// always cancel outdated in-progress fetches
fetchRange.start<eventSource.fetchRange.start||fetchRange.end>eventSource.fetchRange.end;}function fetchSourcesByIds(prevSources,sourceIdHash,fetchRange,isRefetch,context){var nextSources={};for(var sourceId in prevSources){var source=prevSources[sourceId];if(sourceIdHash[sourceId]){nextSources[sourceId]=fetchSource(source,fetchRange,isRefetch,context);}else {nextSources[sourceId]=source;}}return nextSources;}function fetchSource(eventSource,fetchRange,isRefetch,context){var options=context.options,calendarApi=context.calendarApi;var sourceDef=context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];var fetchId=guid();sourceDef.fetch({eventSource:eventSource,range:fetchRange,isRefetch:isRefetch,context:context},function(res){var rawEvents=res.rawEvents;if(options.eventSourceSuccess){rawEvents=options.eventSourceSuccess.call(calendarApi,rawEvents,res.xhr)||rawEvents;}if(eventSource.success){rawEvents=eventSource.success.call(calendarApi,rawEvents,res.xhr)||rawEvents;}context.dispatch({type:'RECEIVE_EVENTS',sourceId:eventSource.sourceId,fetchId:fetchId,fetchRange:fetchRange,rawEvents:rawEvents});},function(error){console.warn(error.message,error);if(options.eventSourceFailure){options.eventSourceFailure.call(calendarApi,error);}if(eventSource.failure){eventSource.failure(error);}context.dispatch({type:'RECEIVE_EVENT_ERROR',sourceId:eventSource.sourceId,fetchId:fetchId,fetchRange:fetchRange,error:error});});return __assign$1(__assign$1({},eventSource),{isFetching:true,latestFetchId:fetchId});}function receiveResponse(sourceHash,sourceId,fetchId,fetchRange){var _a;var eventSource=sourceHash[sourceId];if(eventSource&&// not already removed
fetchId===eventSource.latestFetchId){return __assign$1(__assign$1({},sourceHash),(_a={},_a[sourceId]=__assign$1(__assign$1({},eventSource),{isFetching:false,fetchRange:fetchRange}),_a));}return sourceHash;}function excludeStaticSources(eventSources,context){return filterHash(eventSources,function(eventSource){return doesSourceNeedRange(eventSource,context);});}function parseInitialSources(rawOptions,context){var refiners=buildEventSourceRefiners(context);var rawSources=[].concat(rawOptions.eventSources||[]);var sources=[];// parsed
if(rawOptions.initialEvents){rawSources.unshift(rawOptions.initialEvents);}if(rawOptions.events){rawSources.unshift(rawOptions.events);}for(var _i=0,rawSources_1=rawSources;_i<rawSources_1.length;_i++){var rawSource=rawSources_1[_i];var source=parseEventSource(rawSource,context,refiners);if(source){sources.push(source);}}return sources;}function doesSourceNeedRange(eventSource,context){var defs=context.pluginHooks.eventSourceDefs;return !defs[eventSource.sourceDefId].ignoreRange;}function reduceEventStore(eventStore,action,eventSources,dateProfile,context){switch(action.type){case'RECEIVE_EVENTS':// raw
return receiveRawEvents(eventStore,eventSources[action.sourceId],action.fetchId,action.fetchRange,action.rawEvents,context);case'ADD_EVENTS':// already parsed, but not expanded
return addEvent(eventStore,action.eventStore,// new ones
dateProfile?dateProfile.activeRange:null,context);case'RESET_EVENTS':return action.eventStore;case'MERGE_EVENTS':// already parsed and expanded
return mergeEventStores(eventStore,action.eventStore);case'PREV':// TODO: how do we track all actions that affect dateProfile :(
case'NEXT':case'CHANGE_DATE':case'CHANGE_VIEW_TYPE':if(dateProfile){return expandRecurring(eventStore,dateProfile.activeRange,context);}return eventStore;case'REMOVE_EVENTS':return excludeSubEventStore(eventStore,action.eventStore);case'REMOVE_EVENT_SOURCE':return excludeEventsBySourceId(eventStore,action.sourceId);case'REMOVE_ALL_EVENT_SOURCES':return filterEventStoreDefs(eventStore,function(eventDef){return !eventDef.sourceId// only keep events with no source id
;});case'REMOVE_ALL_EVENTS':return createEmptyEventStore();default:return eventStore;}}function receiveRawEvents(eventStore,eventSource,fetchId,fetchRange,rawEvents,context){if(eventSource&&// not already removed
fetchId===eventSource.latestFetchId// TODO: wish this logic was always in event-sources
){var subset=parseEvents(transformRawEvents(rawEvents,eventSource,context),eventSource,context);if(fetchRange){subset=expandRecurring(subset,fetchRange,context);}return mergeEventStores(excludeEventsBySourceId(eventStore,eventSource.sourceId),subset);}return eventStore;}function transformRawEvents(rawEvents,eventSource,context){var calEachTransform=context.options.eventDataTransform;var sourceEachTransform=eventSource?eventSource.eventDataTransform:null;if(sourceEachTransform){rawEvents=transformEachRawEvent(rawEvents,sourceEachTransform);}if(calEachTransform){rawEvents=transformEachRawEvent(rawEvents,calEachTransform);}return rawEvents;}function transformEachRawEvent(rawEvents,func){var refinedEvents;if(!func){refinedEvents=rawEvents;}else {refinedEvents=[];for(var _i=0,rawEvents_1=rawEvents;_i<rawEvents_1.length;_i++){var rawEvent=rawEvents_1[_i];var refinedEvent=func(rawEvent);if(refinedEvent){refinedEvents.push(refinedEvent);}else if(refinedEvent==null){refinedEvents.push(rawEvent);}// if a different falsy value, do nothing
}}return refinedEvents;}function addEvent(eventStore,subset,expandRange,context){if(expandRange){subset=expandRecurring(subset,expandRange,context);}return mergeEventStores(eventStore,subset);}function rezoneEventStoreDates(eventStore,oldDateEnv,newDateEnv){var defs=eventStore.defs;var instances=mapHash(eventStore.instances,function(instance){var def=defs[instance.defId];if(def.allDay||def.recurringDef){return instance;// isn't dependent on timezone
}return __assign$1(__assign$1({},instance),{range:{start:newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start,instance.forcedStartTzo)),end:newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end,instance.forcedEndTzo))},forcedStartTzo:newDateEnv.canComputeOffset?null:instance.forcedStartTzo,forcedEndTzo:newDateEnv.canComputeOffset?null:instance.forcedEndTzo});});return {defs:defs,instances:instances};}function excludeEventsBySourceId(eventStore,sourceId){return filterEventStoreDefs(eventStore,function(eventDef){return eventDef.sourceId!==sourceId;});}// QUESTION: why not just return instances? do a general object-property-exclusion util
function excludeInstances(eventStore,removals){return {defs:eventStore.defs,instances:filterHash(eventStore.instances,function(instance){return !removals[instance.instanceId];})};}function reduceDateSelection(currentSelection,action){switch(action.type){case'UNSELECT_DATES':return null;case'SELECT_DATES':return action.selection;default:return currentSelection;}}function reduceSelectedEvent(currentInstanceId,action){switch(action.type){case'UNSELECT_EVENT':return '';case'SELECT_EVENT':return action.eventInstanceId;default:return currentInstanceId;}}function reduceEventDrag(currentDrag,action){var newDrag;switch(action.type){case'UNSET_EVENT_DRAG':return null;case'SET_EVENT_DRAG':newDrag=action.state;return {affectedEvents:newDrag.affectedEvents,mutatedEvents:newDrag.mutatedEvents,isEvent:newDrag.isEvent};default:return currentDrag;}}function reduceEventResize(currentResize,action){var newResize;switch(action.type){case'UNSET_EVENT_RESIZE':return null;case'SET_EVENT_RESIZE':newResize=action.state;return {affectedEvents:newResize.affectedEvents,mutatedEvents:newResize.mutatedEvents,isEvent:newResize.isEvent};default:return currentResize;}}function parseToolbars(calendarOptions,calendarOptionOverrides,theme,viewSpecs,calendarApi){var viewsWithButtons=[];var headerToolbar=calendarOptions.headerToolbar?parseToolbar(calendarOptions.headerToolbar,calendarOptions,calendarOptionOverrides,theme,viewSpecs,calendarApi,viewsWithButtons):null;var footerToolbar=calendarOptions.footerToolbar?parseToolbar(calendarOptions.footerToolbar,calendarOptions,calendarOptionOverrides,theme,viewSpecs,calendarApi,viewsWithButtons):null;return {headerToolbar:headerToolbar,footerToolbar:footerToolbar,viewsWithButtons:viewsWithButtons};}function parseToolbar(sectionStrHash,calendarOptions,calendarOptionOverrides,theme,viewSpecs,calendarApi,viewsWithButtons){return mapHash(sectionStrHash,function(sectionStr){return parseSection(sectionStr,calendarOptions,calendarOptionOverrides,theme,viewSpecs,calendarApi,viewsWithButtons);});}/*
BAD: querying icons and text here. should be done at render time
*/function parseSection(sectionStr,calendarOptions,calendarOptionOverrides,theme,viewSpecs,calendarApi,viewsWithButtons){var isRtl=calendarOptions.direction==='rtl';var calendarCustomButtons=calendarOptions.customButtons||{};var calendarButtonTextOverrides=calendarOptionOverrides.buttonText||{};var calendarButtonText=calendarOptions.buttonText||{};var sectionSubstrs=sectionStr?sectionStr.split(' '):[];return sectionSubstrs.map(function(buttonGroupStr){return buttonGroupStr.split(',').map(function(buttonName){if(buttonName==='title'){return {buttonName:buttonName};}var customButtonProps;var viewSpec;var buttonClick;var buttonIcon;// only one of these will be set
var buttonText;// "
if(customButtonProps=calendarCustomButtons[buttonName]){buttonClick=function(ev){if(customButtonProps.click){customButtonProps.click.call(ev.target,ev,ev.target);// TODO: use Calendar this context?
}};(buttonIcon=theme.getCustomButtonIconClass(customButtonProps))||(buttonIcon=theme.getIconClass(buttonName,isRtl))||(buttonText=customButtonProps.text);}else if(viewSpec=viewSpecs[buttonName]){viewsWithButtons.push(buttonName);buttonClick=function(){calendarApi.changeView(buttonName);};(buttonText=viewSpec.buttonTextOverride)||(buttonIcon=theme.getIconClass(buttonName,isRtl))||(buttonText=viewSpec.buttonTextDefault);}else if(calendarApi[buttonName]){// a calendarApi method
buttonClick=function(){calendarApi[buttonName]();};(buttonText=calendarButtonTextOverrides[buttonName])||(buttonIcon=theme.getIconClass(buttonName,isRtl))||(buttonText=calendarButtonText[buttonName]);//            ^ everything else is considered default
}return {buttonName:buttonName,buttonClick:buttonClick,buttonIcon:buttonIcon,buttonText:buttonText};});});}var eventSourceDef$2={ignoreRange:true,parseMeta:function(refined){if(Array.isArray(refined.events)){return refined.events;}return null;},fetch:function(arg,success){success({rawEvents:arg.eventSource.meta});}};var arrayEventSourcePlugin=createPlugin({eventSourceDefs:[eventSourceDef$2]});var eventSourceDef$1={parseMeta:function(refined){if(typeof refined.events==='function'){return refined.events;}return null;},fetch:function(arg,success,failure){var dateEnv=arg.context.dateEnv;var func=arg.eventSource.meta;unpromisify(func.bind(null,buildRangeApiWithTimeZone(arg.range,dateEnv)),function(rawEvents){success({rawEvents:rawEvents});// needs an object response
},failure);}};var funcEventSourcePlugin=createPlugin({eventSourceDefs:[eventSourceDef$1]});function requestJson(method,url,params,successCallback,failureCallback){method=method.toUpperCase();var body=null;if(method==='GET'){url=injectQueryStringParams(url,params);}else {body=encodeParams(params);}var xhr=new XMLHttpRequest();xhr.open(method,url,true);if(method!=='GET'){xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');}xhr.onload=function(){if(xhr.status>=200&&xhr.status<400){var parsed=false;var res=void 0;try{res=JSON.parse(xhr.responseText);parsed=true;}catch(err){// will handle parsed=false
}if(parsed){successCallback(res,xhr);}else {failureCallback('Failure parsing JSON',xhr);}}else {failureCallback('Request failed',xhr);}};xhr.onerror=function(){failureCallback('Request failed',xhr);};xhr.send(body);}function injectQueryStringParams(url,params){return url+(url.indexOf('?')===-1?'?':'&')+encodeParams(params);}function encodeParams(params){var parts=[];for(var key in params){parts.push(encodeURIComponent(key)+"="+encodeURIComponent(params[key]));}return parts.join('&');}var JSON_FEED_EVENT_SOURCE_REFINERS={method:String,extraParams:identity,startParam:String,endParam:String,timeZoneParam:String};var eventSourceDef={parseMeta:function(refined){if(refined.url&&(refined.format==='json'||!refined.format)){return {url:refined.url,format:'json',method:(refined.method||'GET').toUpperCase(),extraParams:refined.extraParams,startParam:refined.startParam,endParam:refined.endParam,timeZoneParam:refined.timeZoneParam};}return null;},fetch:function(arg,success,failure){var meta=arg.eventSource.meta;var requestParams=buildRequestParams(meta,arg.range,arg.context);requestJson(meta.method,meta.url,requestParams,function(rawEvents,xhr){success({rawEvents:rawEvents,xhr:xhr});},function(errorMessage,xhr){failure({message:errorMessage,xhr:xhr});});}};var jsonFeedEventSourcePlugin=createPlugin({eventSourceRefiners:JSON_FEED_EVENT_SOURCE_REFINERS,eventSourceDefs:[eventSourceDef]});function buildRequestParams(meta,range,context){var dateEnv=context.dateEnv,options=context.options;var startParam;var endParam;var timeZoneParam;var customRequestParams;var params={};startParam=meta.startParam;if(startParam==null){startParam=options.startParam;}endParam=meta.endParam;if(endParam==null){endParam=options.endParam;}timeZoneParam=meta.timeZoneParam;if(timeZoneParam==null){timeZoneParam=options.timeZoneParam;}// retrieve any outbound GET/POST data from the options
if(typeof meta.extraParams==='function'){// supplied as a function that returns a key/value object
customRequestParams=meta.extraParams();}else {// probably supplied as a straight key/value object
customRequestParams=meta.extraParams||{};}__assign$1(params,customRequestParams);params[startParam]=dateEnv.formatIso(range.start);params[endParam]=dateEnv.formatIso(range.end);if(dateEnv.timeZone!=='local'){params[timeZoneParam]=dateEnv.timeZone;}return params;}var SIMPLE_RECURRING_REFINERS={daysOfWeek:identity,startTime:createDuration,endTime:createDuration,duration:createDuration,startRecur:identity,endRecur:identity};var recurring={parse:function(refined,dateEnv){if(refined.daysOfWeek||refined.startTime||refined.endTime||refined.startRecur||refined.endRecur){var recurringData={daysOfWeek:refined.daysOfWeek||null,startTime:refined.startTime||null,endTime:refined.endTime||null,startRecur:refined.startRecur?dateEnv.createMarker(refined.startRecur):null,endRecur:refined.endRecur?dateEnv.createMarker(refined.endRecur):null};var duration=void 0;if(refined.duration){duration=refined.duration;}if(!duration&&refined.startTime&&refined.endTime){duration=subtractDurations(refined.endTime,refined.startTime);}return {allDayGuess:Boolean(!refined.startTime&&!refined.endTime),duration:duration,typeData:recurringData// doesn't need endTime anymore but oh well
};}return null;},expand:function(typeData,framingRange,dateEnv){var clippedFramingRange=intersectRanges(framingRange,{start:typeData.startRecur,end:typeData.endRecur});if(clippedFramingRange){return expandRanges(typeData.daysOfWeek,typeData.startTime,clippedFramingRange,dateEnv);}return [];}};var simpleRecurringEventsPlugin=createPlugin({recurringTypes:[recurring],eventRefiners:SIMPLE_RECURRING_REFINERS});function expandRanges(daysOfWeek,startTime,framingRange,dateEnv){var dowHash=daysOfWeek?arrayToHash(daysOfWeek):null;var dayMarker=startOfDay(framingRange.start);var endMarker=framingRange.end;var instanceStarts=[];while(dayMarker<endMarker){var instanceStart// if everyday, or this particular day-of-week
=void 0;// if everyday, or this particular day-of-week
if(!dowHash||dowHash[dayMarker.getUTCDay()]){if(startTime){instanceStart=dateEnv.add(dayMarker,startTime);}else {instanceStart=dayMarker;}instanceStarts.push(instanceStart);}dayMarker=addDays(dayMarker,1);}return instanceStarts;}var changeHandlerPlugin=createPlugin({optionChangeHandlers:{events:function(events,context){handleEventSources([events],context);},eventSources:handleEventSources}});/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/function handleEventSources(inputs,context){var unfoundSources=hashValuesToArray(context.getCurrentData().eventSources);var newInputs=[];for(var _i=0,inputs_1=inputs;_i<inputs_1.length;_i++){var input=inputs_1[_i];var inputFound=false;for(var i=0;i<unfoundSources.length;i+=1){if(unfoundSources[i]._raw===input){unfoundSources.splice(i,1);// delete
inputFound=true;break;}}if(!inputFound){newInputs.push(input);}}for(var _a=0,unfoundSources_1=unfoundSources;_a<unfoundSources_1.length;_a++){var unfoundSource=unfoundSources_1[_a];context.dispatch({type:'REMOVE_EVENT_SOURCE',sourceId:unfoundSource.sourceId});}for(var _b=0,newInputs_1=newInputs;_b<newInputs_1.length;_b++){var newInput=newInputs_1[_b];context.calendarApi.addEventSource(newInput);}}function handleDateProfile(dateProfile,context){context.emitter.trigger('datesSet',__assign$1(__assign$1({},buildRangeApiWithTimeZone(dateProfile.activeRange,context.dateEnv)),{view:context.viewApi}));}function handleEventStore(eventStore,context){var emitter=context.emitter;if(emitter.hasHandlers('eventsSet')){emitter.trigger('eventsSet',buildEventApis(eventStore,context));}}/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/var globalPlugins=[arrayEventSourcePlugin,funcEventSourcePlugin,jsonFeedEventSourcePlugin,simpleRecurringEventsPlugin,changeHandlerPlugin,createPlugin({isLoadingFuncs:[function(state){return computeEventSourcesLoading(state.eventSources);}],contentTypeHandlers:{html:function(){return {render:injectHtml};},domNodes:function(){return {render:injectDomNodes};}},propSetHandlers:{dateProfile:handleDateProfile,eventStore:handleEventStore}})];function injectHtml(el,html){el.innerHTML=html;}function injectDomNodes(el,domNodes){var oldNodes=Array.prototype.slice.call(el.childNodes);// TODO: use array util
var newNodes=Array.prototype.slice.call(domNodes);// TODO: use array util
if(!isArraysEqual(oldNodes,newNodes)){for(var _i=0,newNodes_1=newNodes;_i<newNodes_1.length;_i++){var newNode=newNodes_1[_i];el.appendChild(newNode);}oldNodes.forEach(removeElement);}}var DelayedRunner=/** @class */function(){function DelayedRunner(drainedOption){this.drainedOption=drainedOption;this.isRunning=false;this.isDirty=false;this.pauseDepths={};this.timeoutId=0;}DelayedRunner.prototype.request=function(delay){this.isDirty=true;if(!this.isPaused()){this.clearTimeout();if(delay==null){this.tryDrain();}else {this.timeoutId=setTimeout(// NOT OPTIMAL! TODO: look at debounce
this.tryDrain.bind(this),delay);}}};DelayedRunner.prototype.pause=function(scope){if(scope===void 0){scope='';}var pauseDepths=this.pauseDepths;pauseDepths[scope]=(pauseDepths[scope]||0)+1;this.clearTimeout();};DelayedRunner.prototype.resume=function(scope,force){if(scope===void 0){scope='';}var pauseDepths=this.pauseDepths;if(scope in pauseDepths){if(force){delete pauseDepths[scope];}else {pauseDepths[scope]-=1;var depth=pauseDepths[scope];if(depth<=0){delete pauseDepths[scope];}}this.tryDrain();}};DelayedRunner.prototype.isPaused=function(){return Object.keys(this.pauseDepths).length;};DelayedRunner.prototype.tryDrain=function(){if(!this.isRunning&&!this.isPaused()){this.isRunning=true;while(this.isDirty){this.isDirty=false;this.drained();// might set isDirty to true again
}this.isRunning=false;}};DelayedRunner.prototype.clear=function(){this.clearTimeout();this.isDirty=false;this.pauseDepths={};};DelayedRunner.prototype.clearTimeout=function(){if(this.timeoutId){clearTimeout(this.timeoutId);this.timeoutId=0;}};DelayedRunner.prototype.drained=function(){if(this.drainedOption){this.drainedOption();}};return DelayedRunner;}();var TaskRunner=/** @class */function(){function TaskRunner(runTaskOption,drainedOption){this.runTaskOption=runTaskOption;this.drainedOption=drainedOption;this.queue=[];this.delayedRunner=new DelayedRunner(this.drain.bind(this));}TaskRunner.prototype.request=function(task,delay){this.queue.push(task);this.delayedRunner.request(delay);};TaskRunner.prototype.pause=function(scope){this.delayedRunner.pause(scope);};TaskRunner.prototype.resume=function(scope,force){this.delayedRunner.resume(scope,force);};TaskRunner.prototype.drain=function(){var queue=this.queue;while(queue.length){var completedTasks=[];var task=void 0;while(task=queue.shift()){this.runTask(task);completedTasks.push(task);}this.drained(completedTasks);}// keep going, in case new tasks were added in the drained handler
};TaskRunner.prototype.runTask=function(task){if(this.runTaskOption){this.runTaskOption(task);}};TaskRunner.prototype.drained=function(completedTasks){if(this.drainedOption){this.drainedOption(completedTasks);}};return TaskRunner;}();// Computes what the title at the top of the calendarApi should be for this view
function buildTitle(dateProfile,viewOptions,dateEnv){var range;// for views that span a large unit of time, show the proper interval, ignoring stray days before and after
if(/^(year|month)$/.test(dateProfile.currentRangeUnit)){range=dateProfile.currentRange;}else {// for day units or smaller, use the actual day range
range=dateProfile.activeRange;}return dateEnv.formatRange(range.start,range.end,createFormatter(viewOptions.titleFormat||buildTitleFormat(dateProfile)),{isEndExclusive:dateProfile.isRangeAllDay,defaultSeparator:viewOptions.titleRangeSeparator});}// Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
function buildTitleFormat(dateProfile){var currentRangeUnit=dateProfile.currentRangeUnit;if(currentRangeUnit==='year'){return {year:'numeric'};}if(currentRangeUnit==='month'){return {year:'numeric',month:'long'};// like "September 2014"
}var days=diffWholeDays(dateProfile.currentRange.start,dateProfile.currentRange.end);if(days!==null&&days>1){// multi-day range. shorter, like "Sep 9 - 10 2014"
return {year:'numeric',month:'short',day:'numeric'};}// one day. longer, like "September 9 2014"
return {year:'numeric',month:'long',day:'numeric'};}// in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too
var CalendarDataManager=/** @class */function(){function CalendarDataManager(props){var _this=this;this.computeOptionsData=memoize(this._computeOptionsData);this.computeCurrentViewData=memoize(this._computeCurrentViewData);this.organizeRawLocales=memoize(organizeRawLocales);this.buildLocale=memoize(buildLocale);this.buildPluginHooks=buildBuildPluginHooks();this.buildDateEnv=memoize(buildDateEnv);this.buildTheme=memoize(buildTheme);this.parseToolbars=memoize(parseToolbars);this.buildViewSpecs=memoize(buildViewSpecs);this.buildDateProfileGenerator=memoizeObjArg(buildDateProfileGenerator);this.buildViewApi=memoize(buildViewApi);this.buildViewUiProps=memoizeObjArg(buildViewUiProps);this.buildEventUiBySource=memoize(buildEventUiBySource,isPropsEqual);this.buildEventUiBases=memoize(buildEventUiBases);this.parseContextBusinessHours=memoizeObjArg(parseContextBusinessHours);this.buildTitle=memoize(buildTitle);this.emitter=new Emitter();this.actionRunner=new TaskRunner(this._handleAction.bind(this),this.updateData.bind(this));this.currentCalendarOptionsInput={};this.currentCalendarOptionsRefined={};this.currentViewOptionsInput={};this.currentViewOptionsRefined={};this.currentCalendarOptionsRefiners={};this.getCurrentData=function(){return _this.data;};this.dispatch=function(action){_this.actionRunner.request(action);// protects against recursive calls to _handleAction
};this.props=props;this.actionRunner.pause();var dynamicOptionOverrides={};var optionsData=this.computeOptionsData(props.optionOverrides,dynamicOptionOverrides,props.calendarApi);var currentViewType=optionsData.calendarOptions.initialView||optionsData.pluginHooks.initialView;var currentViewData=this.computeCurrentViewData(currentViewType,optionsData,props.optionOverrides,dynamicOptionOverrides);// wire things up
// TODO: not DRY
props.calendarApi.currentDataManager=this;this.emitter.setThisContext(props.calendarApi);this.emitter.setOptions(currentViewData.options);var currentDate=getInitialDate(optionsData.calendarOptions,optionsData.dateEnv);var dateProfile=currentViewData.dateProfileGenerator.build(currentDate);if(!rangeContainsMarker(dateProfile.activeRange,currentDate)){currentDate=dateProfile.currentRange.start;}var calendarContext={dateEnv:optionsData.dateEnv,options:optionsData.calendarOptions,pluginHooks:optionsData.pluginHooks,calendarApi:props.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData};// needs to be after setThisContext
for(var _i=0,_a=optionsData.pluginHooks.contextInit;_i<_a.length;_i++){var callback=_a[_i];callback(calendarContext);}// NOT DRY
var eventSources=initEventSources(optionsData.calendarOptions,dateProfile,calendarContext);var initialState={dynamicOptionOverrides:dynamicOptionOverrides,currentViewType:currentViewType,currentDate:currentDate,dateProfile:dateProfile,businessHours:this.parseContextBusinessHours(calendarContext),eventSources:eventSources,eventUiBases:{},eventStore:createEmptyEventStore(),renderableEventStore:createEmptyEventStore(),dateSelection:null,eventSelection:'',eventDrag:null,eventResize:null,selectionConfig:this.buildViewUiProps(calendarContext).selectionConfig};var contextAndState=__assign$1(__assign$1({},calendarContext),initialState);for(var _b=0,_c=optionsData.pluginHooks.reducers;_b<_c.length;_b++){var reducer=_c[_b];__assign$1(initialState,reducer(null,null,contextAndState));}if(computeIsLoading(initialState,calendarContext)){this.emitter.trigger('loading',true);// NOT DRY
}this.state=initialState;this.updateData();this.actionRunner.resume();}CalendarDataManager.prototype.resetOptions=function(optionOverrides,append){var props=this.props;props.optionOverrides=append?__assign$1(__assign$1({},props.optionOverrides),optionOverrides):optionOverrides;this.actionRunner.request({type:'NOTHING'});};CalendarDataManager.prototype._handleAction=function(action){var _a=this,props=_a.props,state=_a.state,emitter=_a.emitter;var dynamicOptionOverrides=reduceDynamicOptionOverrides(state.dynamicOptionOverrides,action);var optionsData=this.computeOptionsData(props.optionOverrides,dynamicOptionOverrides,props.calendarApi);var currentViewType=reduceViewType(state.currentViewType,action);var currentViewData=this.computeCurrentViewData(currentViewType,optionsData,props.optionOverrides,dynamicOptionOverrides);// wire things up
// TODO: not DRY
props.calendarApi.currentDataManager=this;emitter.setThisContext(props.calendarApi);emitter.setOptions(currentViewData.options);var calendarContext={dateEnv:optionsData.dateEnv,options:optionsData.calendarOptions,pluginHooks:optionsData.pluginHooks,calendarApi:props.calendarApi,dispatch:this.dispatch,emitter:emitter,getCurrentData:this.getCurrentData};var currentDate=state.currentDate,dateProfile=state.dateProfile;if(this.data&&this.data.dateProfileGenerator!==currentViewData.dateProfileGenerator){// hack
dateProfile=currentViewData.dateProfileGenerator.build(currentDate);}currentDate=reduceCurrentDate(currentDate,action);dateProfile=reduceDateProfile(dateProfile,action,currentDate,currentViewData.dateProfileGenerator);if(action.type==='PREV'||// TODO: move this logic into DateProfileGenerator
action.type==='NEXT'||// "
!rangeContainsMarker(dateProfile.currentRange,currentDate)){currentDate=dateProfile.currentRange.start;}var eventSources=reduceEventSources(state.eventSources,action,dateProfile,calendarContext);var eventStore=reduceEventStore(state.eventStore,action,eventSources,dateProfile,calendarContext);var isEventsLoading=computeEventSourcesLoading(eventSources);// BAD. also called in this func in computeIsLoading
var renderableEventStore=isEventsLoading&&!currentViewData.options.progressiveEventRendering?state.renderableEventStore||eventStore:// try from previous state
eventStore;var _b=this.buildViewUiProps(calendarContext),eventUiSingleBase=_b.eventUiSingleBase,selectionConfig=_b.selectionConfig;// will memoize obj
var eventUiBySource=this.buildEventUiBySource(eventSources);var eventUiBases=this.buildEventUiBases(renderableEventStore.defs,eventUiSingleBase,eventUiBySource);var newState={dynamicOptionOverrides:dynamicOptionOverrides,currentViewType:currentViewType,currentDate:currentDate,dateProfile:dateProfile,eventSources:eventSources,eventStore:eventStore,renderableEventStore:renderableEventStore,selectionConfig:selectionConfig,eventUiBases:eventUiBases,businessHours:this.parseContextBusinessHours(calendarContext),dateSelection:reduceDateSelection(state.dateSelection,action),eventSelection:reduceSelectedEvent(state.eventSelection,action),eventDrag:reduceEventDrag(state.eventDrag,action),eventResize:reduceEventResize(state.eventResize,action)};var contextAndState=__assign$1(__assign$1({},calendarContext),newState);for(var _i=0,_c=optionsData.pluginHooks.reducers;_i<_c.length;_i++){var reducer=_c[_i];__assign$1(newState,reducer(state,action,contextAndState));// give the OLD state, for old value
}var wasLoading=computeIsLoading(state,calendarContext);var isLoading=computeIsLoading(newState,calendarContext);// TODO: use propSetHandlers in plugin system
if(!wasLoading&&isLoading){emitter.trigger('loading',true);}else if(wasLoading&&!isLoading){emitter.trigger('loading',false);}this.state=newState;if(props.onAction){props.onAction(action);}};CalendarDataManager.prototype.updateData=function(){var _a=this,props=_a.props,state=_a.state;var oldData=this.data;var optionsData=this.computeOptionsData(props.optionOverrides,state.dynamicOptionOverrides,props.calendarApi);var currentViewData=this.computeCurrentViewData(state.currentViewType,optionsData,props.optionOverrides,state.dynamicOptionOverrides);var data=this.data=__assign$1(__assign$1(__assign$1({viewTitle:this.buildTitle(state.dateProfile,currentViewData.options,optionsData.dateEnv),calendarApi:props.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},optionsData),currentViewData),state);var changeHandlers=optionsData.pluginHooks.optionChangeHandlers;var oldCalendarOptions=oldData&&oldData.calendarOptions;var newCalendarOptions=optionsData.calendarOptions;if(oldCalendarOptions&&oldCalendarOptions!==newCalendarOptions){if(oldCalendarOptions.timeZone!==newCalendarOptions.timeZone){// hack
state.eventSources=data.eventSources=reduceEventSourcesNewTimeZone(data.eventSources,state.dateProfile,data);state.eventStore=data.eventStore=rezoneEventStoreDates(data.eventStore,oldData.dateEnv,data.dateEnv);}for(var optionName in changeHandlers){if(oldCalendarOptions[optionName]!==newCalendarOptions[optionName]){changeHandlers[optionName](newCalendarOptions[optionName],data);}}}if(props.onData){props.onData(data);}};CalendarDataManager.prototype._computeOptionsData=function(optionOverrides,dynamicOptionOverrides,calendarApi){// TODO: blacklist options that are handled by optionChangeHandlers
var _a=this.processRawCalendarOptions(optionOverrides,dynamicOptionOverrides),refinedOptions=_a.refinedOptions,pluginHooks=_a.pluginHooks,localeDefaults=_a.localeDefaults,availableLocaleData=_a.availableLocaleData,extra=_a.extra;warnUnknownOptions(extra);var dateEnv=this.buildDateEnv(refinedOptions.timeZone,refinedOptions.locale,refinedOptions.weekNumberCalculation,refinedOptions.firstDay,refinedOptions.weekText,pluginHooks,availableLocaleData,refinedOptions.defaultRangeSeparator);var viewSpecs=this.buildViewSpecs(pluginHooks.views,optionOverrides,dynamicOptionOverrides,localeDefaults);var theme=this.buildTheme(refinedOptions,pluginHooks);var toolbarConfig=this.parseToolbars(refinedOptions,optionOverrides,theme,viewSpecs,calendarApi);return {calendarOptions:refinedOptions,pluginHooks:pluginHooks,dateEnv:dateEnv,viewSpecs:viewSpecs,theme:theme,toolbarConfig:toolbarConfig,localeDefaults:localeDefaults,availableRawLocales:availableLocaleData.map};};// always called from behind a memoizer
CalendarDataManager.prototype.processRawCalendarOptions=function(optionOverrides,dynamicOptionOverrides){var _a=mergeRawOptions([BASE_OPTION_DEFAULTS,optionOverrides,dynamicOptionOverrides]),locales=_a.locales,locale=_a.locale;var availableLocaleData=this.organizeRawLocales(locales);var availableRawLocales=availableLocaleData.map;var localeDefaults=this.buildLocale(locale||availableLocaleData.defaultCode,availableRawLocales).options;var pluginHooks=this.buildPluginHooks(optionOverrides.plugins||[],globalPlugins);var refiners=this.currentCalendarOptionsRefiners=__assign$1(__assign$1(__assign$1(__assign$1(__assign$1({},BASE_OPTION_REFINERS),CALENDAR_LISTENER_REFINERS),CALENDAR_OPTION_REFINERS),pluginHooks.listenerRefiners),pluginHooks.optionRefiners);var extra={};var raw=mergeRawOptions([BASE_OPTION_DEFAULTS,localeDefaults,optionOverrides,dynamicOptionOverrides]);var refined={};var currentRaw=this.currentCalendarOptionsInput;var currentRefined=this.currentCalendarOptionsRefined;var anyChanges=false;for(var optionName in raw){if(optionName!=='plugins'){// because plugins is special-cased
if(raw[optionName]===currentRaw[optionName]||COMPLEX_OPTION_COMPARATORS[optionName]&&optionName in currentRaw&&COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName],raw[optionName])){refined[optionName]=currentRefined[optionName];}else if(refiners[optionName]){refined[optionName]=refiners[optionName](raw[optionName]);anyChanges=true;}else {extra[optionName]=currentRaw[optionName];}}}if(anyChanges){this.currentCalendarOptionsInput=raw;this.currentCalendarOptionsRefined=refined;}return {rawOptions:this.currentCalendarOptionsInput,refinedOptions:this.currentCalendarOptionsRefined,pluginHooks:pluginHooks,availableLocaleData:availableLocaleData,localeDefaults:localeDefaults,extra:extra};};CalendarDataManager.prototype._computeCurrentViewData=function(viewType,optionsData,optionOverrides,dynamicOptionOverrides){var viewSpec=optionsData.viewSpecs[viewType];if(!viewSpec){throw new Error("viewType \""+viewType+"\" is not available. Please make sure you've loaded all neccessary plugins");}var _a=this.processRawViewOptions(viewSpec,optionsData.pluginHooks,optionsData.localeDefaults,optionOverrides,dynamicOptionOverrides),refinedOptions=_a.refinedOptions,extra=_a.extra;warnUnknownOptions(extra);var dateProfileGenerator=this.buildDateProfileGenerator({dateProfileGeneratorClass:viewSpec.optionDefaults.dateProfileGeneratorClass,duration:viewSpec.duration,durationUnit:viewSpec.durationUnit,usesMinMaxTime:viewSpec.optionDefaults.usesMinMaxTime,dateEnv:optionsData.dateEnv,calendarApi:this.props.calendarApi,slotMinTime:refinedOptions.slotMinTime,slotMaxTime:refinedOptions.slotMaxTime,showNonCurrentDates:refinedOptions.showNonCurrentDates,dayCount:refinedOptions.dayCount,dateAlignment:refinedOptions.dateAlignment,dateIncrement:refinedOptions.dateIncrement,hiddenDays:refinedOptions.hiddenDays,weekends:refinedOptions.weekends,nowInput:refinedOptions.now,validRangeInput:refinedOptions.validRange,visibleRangeInput:refinedOptions.visibleRange,monthMode:refinedOptions.monthMode,fixedWeekCount:refinedOptions.fixedWeekCount});var viewApi=this.buildViewApi(viewType,this.getCurrentData,optionsData.dateEnv);return {viewSpec:viewSpec,options:refinedOptions,dateProfileGenerator:dateProfileGenerator,viewApi:viewApi};};CalendarDataManager.prototype.processRawViewOptions=function(viewSpec,pluginHooks,localeDefaults,optionOverrides,dynamicOptionOverrides){var raw=mergeRawOptions([BASE_OPTION_DEFAULTS,viewSpec.optionDefaults,localeDefaults,optionOverrides,viewSpec.optionOverrides,dynamicOptionOverrides]);var refiners=__assign$1(__assign$1(__assign$1(__assign$1(__assign$1(__assign$1({},BASE_OPTION_REFINERS),CALENDAR_LISTENER_REFINERS),CALENDAR_OPTION_REFINERS),VIEW_OPTION_REFINERS),pluginHooks.listenerRefiners),pluginHooks.optionRefiners);var refined={};var currentRaw=this.currentViewOptionsInput;var currentRefined=this.currentViewOptionsRefined;var anyChanges=false;var extra={};for(var optionName in raw){if(raw[optionName]===currentRaw[optionName]){refined[optionName]=currentRefined[optionName];}else {if(raw[optionName]===this.currentCalendarOptionsInput[optionName]){if(optionName in this.currentCalendarOptionsRefined){// might be an "extra" prop
refined[optionName]=this.currentCalendarOptionsRefined[optionName];}}else if(refiners[optionName]){refined[optionName]=refiners[optionName](raw[optionName]);}else {extra[optionName]=raw[optionName];}anyChanges=true;}}if(anyChanges){this.currentViewOptionsInput=raw;this.currentViewOptionsRefined=refined;}return {rawOptions:this.currentViewOptionsInput,refinedOptions:this.currentViewOptionsRefined,extra:extra};};return CalendarDataManager;}();function buildDateEnv(timeZone,explicitLocale,weekNumberCalculation,firstDay,weekText,pluginHooks,availableLocaleData,defaultSeparator){var locale=buildLocale(explicitLocale||availableLocaleData.defaultCode,availableLocaleData.map);return new DateEnv({calendarSystem:'gregory',timeZone:timeZone,namedTimeZoneImpl:pluginHooks.namedTimeZonedImpl,locale:locale,weekNumberCalculation:weekNumberCalculation,firstDay:firstDay,weekText:weekText,cmdFormatter:pluginHooks.cmdFormatter,defaultSeparator:defaultSeparator});}function buildTheme(options,pluginHooks){var ThemeClass=pluginHooks.themeClasses[options.themeSystem]||StandardTheme;return new ThemeClass(options);}function buildDateProfileGenerator(props){var DateProfileGeneratorClass=props.dateProfileGeneratorClass||DateProfileGenerator;return new DateProfileGeneratorClass(props);}function buildViewApi(type,getCurrentData,dateEnv){return new ViewApi(type,getCurrentData,dateEnv);}function buildEventUiBySource(eventSources){return mapHash(eventSources,function(eventSource){return eventSource.ui;});}function buildEventUiBases(eventDefs,eventUiSingleBase,eventUiBySource){var eventUiBases={'':eventUiSingleBase};for(var defId in eventDefs){var def=eventDefs[defId];if(def.sourceId&&eventUiBySource[def.sourceId]){eventUiBases[defId]=eventUiBySource[def.sourceId];}}return eventUiBases;}function buildViewUiProps(calendarContext){var options=calendarContext.options;return {eventUiSingleBase:createEventUi({display:options.eventDisplay,editable:options.editable,startEditable:options.eventStartEditable,durationEditable:options.eventDurationEditable,constraint:options.eventConstraint,overlap:typeof options.eventOverlap==='boolean'?options.eventOverlap:undefined,allow:options.eventAllow,backgroundColor:options.eventBackgroundColor,borderColor:options.eventBorderColor,textColor:options.eventTextColor,color:options.eventColor// classNames: options.eventClassNames // render hook will handle this
},calendarContext),selectionConfig:createEventUi({constraint:options.selectConstraint,overlap:typeof options.selectOverlap==='boolean'?options.selectOverlap:undefined,allow:options.selectAllow},calendarContext)};}function computeIsLoading(state,context){for(var _i=0,_a=context.pluginHooks.isLoadingFuncs;_i<_a.length;_i++){var isLoadingFunc=_a[_i];if(isLoadingFunc(state)){return true;}}return false;}function parseContextBusinessHours(calendarContext){return parseBusinessHours(calendarContext.options.businessHours,calendarContext);}function warnUnknownOptions(options,viewName){for(var optionName in options){console.warn("Unknown option '"+optionName+"'"+(viewName?" for view '"+viewName+"'":''));}}// TODO: move this to react plugin?
/** @class */(function(_super){__extends(CalendarDataProvider,_super);function CalendarDataProvider(props){var _this=_super.call(this,props)||this;_this.handleData=function(data){if(!_this.dataManager){// still within initial run, before assignment in constructor
// eslint-disable-next-line react/no-direct-mutation-state
_this.state=data;// can't use setState yet
}else {_this.setState(data);}};_this.dataManager=new CalendarDataManager({optionOverrides:props.optionOverrides,calendarApi:props.calendarApi,onData:_this.handleData});return _this;}CalendarDataProvider.prototype.render=function(){return this.props.children(this.state);};CalendarDataProvider.prototype.componentDidUpdate=function(prevProps){var newOptionOverrides=this.props.optionOverrides;if(newOptionOverrides!==prevProps.optionOverrides){// prevent recursive handleData
this.dataManager.resetOptions(newOptionOverrides);}};return CalendarDataProvider;})(Component);// HELPERS
var SegHierarchy=/** @class */function(){function SegHierarchy(){// settings
this.strictOrder=false;this.allowReslicing=false;this.maxCoord=-1;// -1 means no max
this.maxStackCnt=-1;// -1 means no max
this.levelCoords=[];// ordered
this.entriesByLevel=[];// parallel with levelCoords
this.stackCnts={};// TODO: use better technique!?
}SegHierarchy.prototype.addSegs=function(inputs){var hiddenEntries=[];for(var _i=0,inputs_1=inputs;_i<inputs_1.length;_i++){var input=inputs_1[_i];this.insertEntry(input,hiddenEntries);}return hiddenEntries;};SegHierarchy.prototype.insertEntry=function(entry,hiddenEntries){var insertion=this.findInsertion(entry);if(this.isInsertionValid(insertion,entry)){this.insertEntryAt(entry,insertion);return 1;}return this.handleInvalidInsertion(insertion,entry,hiddenEntries);};SegHierarchy.prototype.isInsertionValid=function(insertion,entry){return (this.maxCoord===-1||insertion.levelCoord+entry.thickness<=this.maxCoord)&&(this.maxStackCnt===-1||insertion.stackCnt<this.maxStackCnt);};// returns number of new entries inserted
SegHierarchy.prototype.handleInvalidInsertion=function(insertion,entry,hiddenEntries){if(this.allowReslicing&&insertion.touchingEntry){return this.splitEntry(entry,insertion.touchingEntry,hiddenEntries);}hiddenEntries.push(entry);return 0;};SegHierarchy.prototype.splitEntry=function(entry,barrier,hiddenEntries){var partCnt=0;var splitHiddenEntries=[];var entrySpan=entry.span;var barrierSpan=barrier.span;if(entrySpan.start<barrierSpan.start){partCnt+=this.insertEntry({index:entry.index,thickness:entry.thickness,span:{start:entrySpan.start,end:barrierSpan.start}},splitHiddenEntries);}if(entrySpan.end>barrierSpan.end){partCnt+=this.insertEntry({index:entry.index,thickness:entry.thickness,span:{start:barrierSpan.end,end:entrySpan.end}},splitHiddenEntries);}if(partCnt){hiddenEntries.push.apply(hiddenEntries,__spreadArray([{index:entry.index,thickness:entry.thickness,span:intersectSpans(barrierSpan,entrySpan)// guaranteed to intersect
}],splitHiddenEntries));return partCnt;}hiddenEntries.push(entry);return 0;};SegHierarchy.prototype.insertEntryAt=function(entry,insertion){var _a=this,entriesByLevel=_a.entriesByLevel,levelCoords=_a.levelCoords;if(insertion.lateral===-1){// create a new level
insertAt(levelCoords,insertion.level,insertion.levelCoord);insertAt(entriesByLevel,insertion.level,[entry]);}else {// insert into existing level
insertAt(entriesByLevel[insertion.level],insertion.lateral,entry);}this.stackCnts[buildEntryKey(entry)]=insertion.stackCnt;};SegHierarchy.prototype.findInsertion=function(newEntry){var _a=this,levelCoords=_a.levelCoords,entriesByLevel=_a.entriesByLevel,strictOrder=_a.strictOrder,stackCnts=_a.stackCnts;var levelCnt=levelCoords.length;var candidateCoord=0;var touchingLevel=-1;var touchingLateral=-1;var touchingEntry=null;var stackCnt=0;for(var trackingLevel=0;trackingLevel<levelCnt;trackingLevel+=1){var trackingCoord=levelCoords[trackingLevel];// if the current level is past the placed entry, we have found a good empty space and can stop.
// if strictOrder, keep finding more lateral intersections.
if(!strictOrder&&trackingCoord>=candidateCoord+newEntry.thickness){break;}var trackingEntries=entriesByLevel[trackingLevel];var trackingEntry=void 0;var searchRes=binarySearch(trackingEntries,newEntry.span.start,getEntrySpanEnd);// find first entry after newEntry's end
var lateralIndex=searchRes[0]+searchRes[1];// if exact match (which doesn't collide), go to next one
while(// loop through entries that horizontally intersect
(trackingEntry=trackingEntries[lateralIndex])&&// but not past the whole entry list
trackingEntry.span.start<newEntry.span.end// and not entirely past newEntry
){var trackingEntryBottom=trackingCoord+trackingEntry.thickness;// intersects into the top of the candidate?
if(trackingEntryBottom>candidateCoord){candidateCoord=trackingEntryBottom;touchingEntry=trackingEntry;touchingLevel=trackingLevel;touchingLateral=lateralIndex;}// butts up against top of candidate? (will happen if just intersected as well)
if(trackingEntryBottom===candidateCoord){// accumulate the highest possible stackCnt of the trackingEntries that butt up
stackCnt=Math.max(stackCnt,stackCnts[buildEntryKey(trackingEntry)]+1);}lateralIndex+=1;}}// the destination level will be after touchingEntry's level. find it
var destLevel=0;if(touchingEntry){destLevel=touchingLevel+1;while(destLevel<levelCnt&&levelCoords[destLevel]<candidateCoord){destLevel+=1;}}// if adding to an existing level, find where to insert
var destLateral=-1;if(destLevel<levelCnt&&levelCoords[destLevel]===candidateCoord){destLateral=binarySearch(entriesByLevel[destLevel],newEntry.span.end,getEntrySpanEnd)[0];}return {touchingLevel:touchingLevel,touchingLateral:touchingLateral,touchingEntry:touchingEntry,stackCnt:stackCnt,levelCoord:candidateCoord,level:destLevel,lateral:destLateral};};// sorted by levelCoord (lowest to highest)
SegHierarchy.prototype.toRects=function(){var _a=this,entriesByLevel=_a.entriesByLevel,levelCoords=_a.levelCoords;var levelCnt=entriesByLevel.length;var rects=[];for(var level=0;level<levelCnt;level+=1){var entries=entriesByLevel[level];var levelCoord=levelCoords[level];for(var _i=0,entries_1=entries;_i<entries_1.length;_i++){var entry=entries_1[_i];rects.push(__assign$1(__assign$1({},entry),{levelCoord:levelCoord}));}}return rects;};return SegHierarchy;}();function getEntrySpanEnd(entry){return entry.span.end;}function buildEntryKey(entry){return entry.index+':'+entry.span.start;}// returns groups with entries sorted by input order
function intersectSpans(span0,span1){var start=Math.max(span0.start,span1.start);var end=Math.min(span0.end,span1.end);if(start<end){return {start:start,end:end};}return null;}// general util
// ---------------------------------------------------------------------------------------------------------------------
function insertAt(arr,index,item){arr.splice(index,0,item);}function binarySearch(a,searchVal,getItemVal){var startIndex=0;var endIndex=a.length;// exclusive
if(!endIndex||searchVal<getItemVal(a[startIndex])){// no items OR before first item
return [0,0];}if(searchVal>getItemVal(a[endIndex-1])){// after last item
return [endIndex,0];}while(startIndex<endIndex){var middleIndex=Math.floor(startIndex+(endIndex-startIndex)/2);var middleVal=getItemVal(a[middleIndex]);if(searchVal<middleVal){endIndex=middleIndex;}else if(searchVal>middleVal){startIndex=middleIndex+1;}else {// equal!
return [middleIndex,1];}}return [startIndex,0];}var Interaction=/** @class */function(){function Interaction(settings){this.component=settings.component;this.isHitComboAllowed=settings.isHitComboAllowed||null;}Interaction.prototype.destroy=function(){};return Interaction;}();function parseInteractionSettings(component,input){return {component:component,el:input.el,useEventCenter:input.useEventCenter!=null?input.useEventCenter:true,isHitComboAllowed:input.isHitComboAllowed||null};}function interactionSettingsToStore(settings){var _a;return _a={},_a[settings.component.uid]=settings,_a;}// global state
var interactionSettingsStore={};/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/var ElementDragging=/** @class */function(){function ElementDragging(el,selector){this.emitter=new Emitter();}ElementDragging.prototype.destroy=function(){};ElementDragging.prototype.setMirrorIsVisible=function(bool){// optional if subclass doesn't want to support a mirror
};ElementDragging.prototype.setMirrorNeedsRevert=function(bool){// optional if subclass doesn't want to support a mirror
};ElementDragging.prototype.setAutoScrollEnabled=function(bool){// optional
};return ElementDragging;}();// TODO: get rid of this in favor of options system,
// tho it's really easy to access this globally rather than pass thru options.
var config={};var ToolbarSection=/** @class */function(_super){__extends(ToolbarSection,_super);function ToolbarSection(){return _super!==null&&_super.apply(this,arguments)||this;}ToolbarSection.prototype.render=function(){var _this=this;var children=this.props.widgetGroups.map(function(widgetGroup){return _this.renderWidgetGroup(widgetGroup);});return createElement.apply(void 0,__spreadArray(['div',{className:'fc-toolbar-chunk'}],children));};ToolbarSection.prototype.renderWidgetGroup=function(widgetGroup){var props=this.props;var theme=this.context.theme;var children=[];var isOnlyButtons=true;for(var _i=0,widgetGroup_1=widgetGroup;_i<widgetGroup_1.length;_i++){var widget=widgetGroup_1[_i];var buttonName=widget.buttonName,buttonClick=widget.buttonClick,buttonText=widget.buttonText,buttonIcon=widget.buttonIcon;if(buttonName==='title'){isOnlyButtons=false;children.push(createElement("h2",{className:"fc-toolbar-title"},props.title));}else {var ariaAttrs=buttonIcon?{'aria-label':buttonName}:{};var buttonClasses=["fc-"+buttonName+"-button",theme.getClass('button')];if(buttonName===props.activeButton){buttonClasses.push(theme.getClass('buttonActive'));}var isDisabled=!props.isTodayEnabled&&buttonName==='today'||!props.isPrevEnabled&&buttonName==='prev'||!props.isNextEnabled&&buttonName==='next';children.push(createElement("button",__assign$1({disabled:isDisabled,className:buttonClasses.join(' '),onClick:buttonClick,type:"button"},ariaAttrs),buttonText||(buttonIcon?createElement("span",{className:buttonIcon}):'')));}}if(children.length>1){var groupClassName=isOnlyButtons&&theme.getClass('buttonGroup')||'';return createElement.apply(void 0,__spreadArray(['div',{className:groupClassName}],children));}return children[0];};return ToolbarSection;}(BaseComponent);var Toolbar=/** @class */function(_super){__extends(Toolbar,_super);function Toolbar(){return _super!==null&&_super.apply(this,arguments)||this;}Toolbar.prototype.render=function(){var _a=this.props,model=_a.model,extraClassName=_a.extraClassName;var forceLtr=false;var startContent;var endContent;var centerContent=model.center;if(model.left){forceLtr=true;startContent=model.left;}else {startContent=model.start;}if(model.right){forceLtr=true;endContent=model.right;}else {endContent=model.end;}var classNames=[extraClassName||'','fc-toolbar',forceLtr?'fc-toolbar-ltr':''];return createElement("div",{className:classNames.join(' ')},this.renderSection('start',startContent||[]),this.renderSection('center',centerContent||[]),this.renderSection('end',endContent||[]));};Toolbar.prototype.renderSection=function(key,widgetGroups){var props=this.props;return createElement(ToolbarSection,{key:key,widgetGroups:widgetGroups,title:props.title,activeButton:props.activeButton,isTodayEnabled:props.isTodayEnabled,isPrevEnabled:props.isPrevEnabled,isNextEnabled:props.isNextEnabled});};return Toolbar;}(BaseComponent);// TODO: do function component?
var ViewContainer=/** @class */function(_super){__extends(ViewContainer,_super);function ViewContainer(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.state={availableWidth:null};_this.handleEl=function(el){_this.el=el;setRef(_this.props.elRef,el);_this.updateAvailableWidth();};_this.handleResize=function(){_this.updateAvailableWidth();};return _this;}ViewContainer.prototype.render=function(){var _a=this,props=_a.props,state=_a.state;var aspectRatio=props.aspectRatio;var classNames=['fc-view-harness',aspectRatio||props.liquid||props.height?'fc-view-harness-active'// harness controls the height
:'fc-view-harness-passive'// let the view do the height
];var height='';var paddingBottom='';if(aspectRatio){if(state.availableWidth!==null){height=state.availableWidth/aspectRatio;}else {// while waiting to know availableWidth, we can't set height to *zero*
// because will cause lots of unnecessary scrollbars within scrollgrid.
// BETTER: don't start rendering ANYTHING yet until we know container width
// NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
paddingBottom=1/aspectRatio*100+"%";}}else {height=props.height||'';}return createElement("div",{ref:this.handleEl,onClick:props.onClick,className:classNames.join(' '),style:{height:height,paddingBottom:paddingBottom}},props.children);};ViewContainer.prototype.componentDidMount=function(){this.context.addResizeHandler(this.handleResize);};ViewContainer.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleResize);};ViewContainer.prototype.updateAvailableWidth=function(){if(this.el&&// needed. but why?
this.props.aspectRatio// aspectRatio is the only height setting that needs availableWidth
){this.setState({availableWidth:this.el.offsetWidth});}};return ViewContainer;}(BaseComponent);/*
Detects when the user clicks on an event within a DateComponent
*/var EventClicking=/** @class */function(_super){__extends(EventClicking,_super);function EventClicking(settings){var _this=_super.call(this,settings)||this;_this.handleSegClick=function(ev,segEl){var component=_this.component;var context=component.context;var seg=getElSeg(segEl);if(seg&&// might be the <div> surrounding the more link
component.isValidSegDownEl(ev.target)){// our way to simulate a link click for elements that can't be <a> tags
// grab before trigger fired in case trigger trashes DOM thru rerendering
var hasUrlContainer=elementClosest(ev.target,'.fc-event-forced-url');var url=hasUrlContainer?hasUrlContainer.querySelector('a[href]').href:'';context.emitter.trigger('eventClick',{el:segEl,event:new EventApi(component.context,seg.eventRange.def,seg.eventRange.instance),jsEvent:ev,view:context.viewApi});if(url&&!ev.defaultPrevented){window.location.href=url;}}};_this.destroy=listenBySelector(settings.el,'click','.fc-event',// on both fg and bg events
_this.handleSegClick);return _this;}return EventClicking;}(Interaction);/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/var EventHovering=/** @class */function(_super){__extends(EventHovering,_super);function EventHovering(settings){var _this=_super.call(this,settings)||this;// for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
_this.handleEventElRemove=function(el){if(el===_this.currentSegEl){_this.handleSegLeave(null,_this.currentSegEl);}};_this.handleSegEnter=function(ev,segEl){if(getElSeg(segEl)){// TODO: better way to make sure not hovering over more+ link or its wrapper
_this.currentSegEl=segEl;_this.triggerEvent('eventMouseEnter',ev,segEl);}};_this.handleSegLeave=function(ev,segEl){if(_this.currentSegEl){_this.currentSegEl=null;_this.triggerEvent('eventMouseLeave',ev,segEl);}};_this.removeHoverListeners=listenToHoverBySelector(settings.el,'.fc-event',// on both fg and bg events
_this.handleSegEnter,_this.handleSegLeave);return _this;}EventHovering.prototype.destroy=function(){this.removeHoverListeners();};EventHovering.prototype.triggerEvent=function(publicEvName,ev,segEl){var component=this.component;var context=component.context;var seg=getElSeg(segEl);if(!ev||component.isValidSegDownEl(ev.target)){context.emitter.trigger(publicEvName,{el:segEl,event:new EventApi(context,seg.eventRange.def,seg.eventRange.instance),jsEvent:ev,view:context.viewApi});}};return EventHovering;}(Interaction);var CalendarContent=/** @class */function(_super){__extends(CalendarContent,_super);function CalendarContent(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.buildViewContext=memoize(buildViewContext);_this.buildViewPropTransformers=memoize(buildViewPropTransformers);_this.buildToolbarProps=memoize(buildToolbarProps);_this.handleNavLinkClick=buildDelegationHandler('a[data-navlink]',_this._handleNavLinkClick.bind(_this));_this.headerRef=createRef();_this.footerRef=createRef();_this.interactionsStore={};// Component Registration
// -----------------------------------------------------------------------------------------------------------------
_this.registerInteractiveComponent=function(component,settingsInput){var settings=parseInteractionSettings(component,settingsInput);var DEFAULT_INTERACTIONS=[EventClicking,EventHovering];var interactionClasses=DEFAULT_INTERACTIONS.concat(_this.props.pluginHooks.componentInteractions);var interactions=interactionClasses.map(function(TheInteractionClass){return new TheInteractionClass(settings);});_this.interactionsStore[component.uid]=interactions;interactionSettingsStore[component.uid]=settings;};_this.unregisterInteractiveComponent=function(component){for(var _i=0,_a=_this.interactionsStore[component.uid];_i<_a.length;_i++){var listener=_a[_i];listener.destroy();}delete _this.interactionsStore[component.uid];delete interactionSettingsStore[component.uid];};// Resizing
// -----------------------------------------------------------------------------------------------------------------
_this.resizeRunner=new DelayedRunner(function(){_this.props.emitter.trigger('_resize',true);// should window resizes be considered "forced" ?
_this.props.emitter.trigger('windowResize',{view:_this.props.viewApi});});_this.handleWindowResize=function(ev){var options=_this.props.options;if(options.handleWindowResize&&ev.target===window// avoid jqui events
){_this.resizeRunner.request(options.windowResizeDelay);}};return _this;}/*
    renders INSIDE of an outer div
    */CalendarContent.prototype.render=function(){var props=this.props;var toolbarConfig=props.toolbarConfig,options=props.options;var toolbarProps=this.buildToolbarProps(props.viewSpec,props.dateProfile,props.dateProfileGenerator,props.currentDate,getNow(props.options.now,props.dateEnv),// TODO: use NowTimer????
props.viewTitle);var viewVGrow=false;var viewHeight='';var viewAspectRatio;if(props.isHeightAuto||props.forPrint){viewHeight='';}else if(options.height!=null){viewVGrow=true;}else if(options.contentHeight!=null){viewHeight=options.contentHeight;}else {viewAspectRatio=Math.max(options.aspectRatio,0.5);// prevent from getting too tall
}var viewContext=this.buildViewContext(props.viewSpec,props.viewApi,props.options,props.dateProfileGenerator,props.dateEnv,props.theme,props.pluginHooks,props.dispatch,props.getCurrentData,props.emitter,props.calendarApi,this.registerInteractiveComponent,this.unregisterInteractiveComponent);return createElement(ViewContextType.Provider,{value:viewContext},toolbarConfig.headerToolbar&&createElement(Toolbar,__assign$1({ref:this.headerRef,extraClassName:"fc-header-toolbar",model:toolbarConfig.headerToolbar},toolbarProps)),createElement(ViewContainer,{liquid:viewVGrow,height:viewHeight,aspectRatio:viewAspectRatio,onClick:this.handleNavLinkClick},this.renderView(props),this.buildAppendContent()),toolbarConfig.footerToolbar&&createElement(Toolbar,__assign$1({ref:this.footerRef,extraClassName:"fc-footer-toolbar",model:toolbarConfig.footerToolbar},toolbarProps)));};CalendarContent.prototype.componentDidMount=function(){var props=this.props;this.calendarInteractions=props.pluginHooks.calendarInteractions.map(function(CalendarInteractionClass){return new CalendarInteractionClass(props);});window.addEventListener('resize',this.handleWindowResize);var propSetHandlers=props.pluginHooks.propSetHandlers;for(var propName in propSetHandlers){propSetHandlers[propName](props[propName],props);}};CalendarContent.prototype.componentDidUpdate=function(prevProps){var props=this.props;var propSetHandlers=props.pluginHooks.propSetHandlers;for(var propName in propSetHandlers){if(props[propName]!==prevProps[propName]){propSetHandlers[propName](props[propName],props);}}};CalendarContent.prototype.componentWillUnmount=function(){window.removeEventListener('resize',this.handleWindowResize);this.resizeRunner.clear();for(var _i=0,_a=this.calendarInteractions;_i<_a.length;_i++){var interaction=_a[_i];interaction.destroy();}this.props.emitter.trigger('_unmount');};CalendarContent.prototype._handleNavLinkClick=function(ev,anchorEl){var _a=this.props,dateEnv=_a.dateEnv,options=_a.options,calendarApi=_a.calendarApi;var navLinkOptions=anchorEl.getAttribute('data-navlink');navLinkOptions=navLinkOptions?JSON.parse(navLinkOptions):{};var dateMarker=dateEnv.createMarker(navLinkOptions.date);var viewType=navLinkOptions.type;var customAction=viewType==='day'?options.navLinkDayClick:viewType==='week'?options.navLinkWeekClick:null;if(typeof customAction==='function'){customAction.call(calendarApi,dateEnv.toDate(dateMarker),ev);}else {if(typeof customAction==='string'){viewType=customAction;}calendarApi.zoomTo(dateMarker,viewType);}};CalendarContent.prototype.buildAppendContent=function(){var props=this.props;var children=props.pluginHooks.viewContainerAppends.map(function(buildAppendContent){return buildAppendContent(props);});return createElement.apply(void 0,__spreadArray([Fragment,{}],children));};CalendarContent.prototype.renderView=function(props){var pluginHooks=props.pluginHooks;var viewSpec=props.viewSpec;var viewProps={dateProfile:props.dateProfile,businessHours:props.businessHours,eventStore:props.renderableEventStore,eventUiBases:props.eventUiBases,dateSelection:props.dateSelection,eventSelection:props.eventSelection,eventDrag:props.eventDrag,eventResize:props.eventResize,isHeightAuto:props.isHeightAuto,forPrint:props.forPrint};var transformers=this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);for(var _i=0,transformers_1=transformers;_i<transformers_1.length;_i++){var transformer=transformers_1[_i];__assign$1(viewProps,transformer.transform(viewProps,props));}var ViewComponent=viewSpec.component;return createElement(ViewComponent,__assign$1({},viewProps));};return CalendarContent;}(PureComponent);function buildToolbarProps(viewSpec,dateProfile,dateProfileGenerator,currentDate,now,title){// don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
var todayInfo=dateProfileGenerator.build(now,undefined,false);// TODO: need `undefined` or else INFINITE LOOP for some reason
var prevInfo=dateProfileGenerator.buildPrev(dateProfile,currentDate,false);var nextInfo=dateProfileGenerator.buildNext(dateProfile,currentDate,false);return {title:title,activeButton:viewSpec.type,isTodayEnabled:todayInfo.isValid&&!rangeContainsMarker(dateProfile.currentRange,now),isPrevEnabled:prevInfo.isValid,isNextEnabled:nextInfo.isValid};}// Plugin
// -----------------------------------------------------------------------------------------------------------------
function buildViewPropTransformers(theClasses){return theClasses.map(function(TheClass){return new TheClass();});}var CalendarRoot=/** @class */function(_super){__extends(CalendarRoot,_super);function CalendarRoot(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.state={forPrint:false};_this.handleBeforePrint=function(){_this.setState({forPrint:true});};_this.handleAfterPrint=function(){_this.setState({forPrint:false});};return _this;}CalendarRoot.prototype.render=function(){var props=this.props;var options=props.options;var forPrint=this.state.forPrint;var isHeightAuto=forPrint||options.height==='auto'||options.contentHeight==='auto';var height=!isHeightAuto&&options.height!=null?options.height:'';var classNames=['fc',forPrint?'fc-media-print':'fc-media-screen',"fc-direction-"+options.direction,props.theme.getClass('root')];if(!getCanVGrowWithinCell()){classNames.push('fc-liquid-hack');}return props.children(classNames,height,isHeightAuto,forPrint);};CalendarRoot.prototype.componentDidMount=function(){var emitter=this.props.emitter;emitter.on('_beforeprint',this.handleBeforePrint);emitter.on('_afterprint',this.handleAfterPrint);};CalendarRoot.prototype.componentWillUnmount=function(){var emitter=this.props.emitter;emitter.off('_beforeprint',this.handleBeforePrint);emitter.off('_afterprint',this.handleAfterPrint);};return CalendarRoot;}(BaseComponent);// Computes a default column header formatting string if `colFormat` is not explicitly defined
function computeFallbackHeaderFormat(datesRepDistinctDays,dayCnt){// if more than one week row, or if there are a lot of columns with not much space,
// put just the day numbers will be in each cell
if(!datesRepDistinctDays||dayCnt>10){return createFormatter({weekday:'short'});// "Sat"
}if(dayCnt>1){return createFormatter({weekday:'short',month:'numeric',day:'numeric',omitCommas:true});// "Sat 11/12"
}return createFormatter({weekday:'long'});// "Saturday"
}var CLASS_NAME='fc-col-header-cell';// do the cushion too? no
function renderInner$1(hookProps){return hookProps.text;}var TableDateCell=/** @class */function(_super){__extends(TableDateCell,_super);function TableDateCell(){return _super!==null&&_super.apply(this,arguments)||this;}TableDateCell.prototype.render=function(){var _a=this.context,dateEnv=_a.dateEnv,options=_a.options,theme=_a.theme,viewApi=_a.viewApi;var props=this.props;var date=props.date,dateProfile=props.dateProfile;var dayMeta=getDateMeta(date,props.todayRange,null,dateProfile);var classNames=[CLASS_NAME].concat(getDayClassNames(dayMeta,theme));var text=dateEnv.format(date,props.dayHeaderFormat);// if colCnt is 1, we are already in a day-view and don't need a navlink
var navLinkAttrs=options.navLinks&&!dayMeta.isDisabled&&props.colCnt>1?{'data-navlink':buildNavLinkData(date),tabIndex:0}:{};var hookProps=__assign$1(__assign$1(__assign$1({date:dateEnv.toDate(date),view:viewApi},props.extraHookProps),{text:text}),dayMeta);return createElement(RenderHook,{hookProps:hookProps,classNames:options.dayHeaderClassNames,content:options.dayHeaderContent,defaultContent:renderInner$1,didMount:options.dayHeaderDidMount,willUnmount:options.dayHeaderWillUnmount},function(rootElRef,customClassNames,innerElRef,innerContent){return createElement("th",__assign$1({ref:rootElRef,className:classNames.concat(customClassNames).join(' '),"data-date":!dayMeta.isDisabled?formatDayString(date):undefined,colSpan:props.colSpan},props.extraDataAttrs),createElement("div",{className:"fc-scrollgrid-sync-inner"},!dayMeta.isDisabled&&createElement("a",__assign$1({ref:innerElRef,className:['fc-col-header-cell-cushion',props.isSticky?'fc-sticky':''].join(' ')},navLinkAttrs),innerContent)));});};return TableDateCell;}(BaseComponent);var TableDowCell=/** @class */function(_super){__extends(TableDowCell,_super);function TableDowCell(){return _super!==null&&_super.apply(this,arguments)||this;}TableDowCell.prototype.render=function(){var props=this.props;var _a=this.context,dateEnv=_a.dateEnv,theme=_a.theme,viewApi=_a.viewApi,options=_a.options;var date=addDays(new Date(259200000),props.dow);// start with Sun, 04 Jan 1970 00:00:00 GMT
var dateMeta={dow:props.dow,isDisabled:false,isFuture:false,isPast:false,isToday:false,isOther:false};var classNames=[CLASS_NAME].concat(getDayClassNames(dateMeta,theme),props.extraClassNames||[]);var text=dateEnv.format(date,props.dayHeaderFormat);var hookProps=__assign$1(__assign$1(__assign$1(__assign$1({// TODO: make this public?
date:date},dateMeta),{view:viewApi}),props.extraHookProps),{text:text});return createElement(RenderHook,{hookProps:hookProps,classNames:options.dayHeaderClassNames,content:options.dayHeaderContent,defaultContent:renderInner$1,didMount:options.dayHeaderDidMount,willUnmount:options.dayHeaderWillUnmount},function(rootElRef,customClassNames,innerElRef,innerContent){return createElement("th",__assign$1({ref:rootElRef,className:classNames.concat(customClassNames).join(' '),colSpan:props.colSpan},props.extraDataAttrs),createElement("div",{className:"fc-scrollgrid-sync-inner"},createElement("a",{className:['fc-col-header-cell-cushion',props.isSticky?'fc-sticky':''].join(' '),ref:innerElRef},innerContent)));});};return TableDowCell;}(BaseComponent);var NowTimer=/** @class */function(_super){__extends(NowTimer,_super);function NowTimer(props,context){var _this=_super.call(this,props,context)||this;_this.initialNowDate=getNow(context.options.now,context.dateEnv);_this.initialNowQueriedMs=new Date().valueOf();_this.state=_this.computeTiming().currentState;return _this;}NowTimer.prototype.render=function(){var _a=this,props=_a.props,state=_a.state;return props.children(state.nowDate,state.todayRange);};NowTimer.prototype.componentDidMount=function(){this.setTimeout();};NowTimer.prototype.componentDidUpdate=function(prevProps){if(prevProps.unit!==this.props.unit){this.clearTimeout();this.setTimeout();}};NowTimer.prototype.componentWillUnmount=function(){this.clearTimeout();};NowTimer.prototype.computeTiming=function(){var _a=this,props=_a.props,context=_a.context;var unroundedNow=addMs(this.initialNowDate,new Date().valueOf()-this.initialNowQueriedMs);var currentUnitStart=context.dateEnv.startOf(unroundedNow,props.unit);var nextUnitStart=context.dateEnv.add(currentUnitStart,createDuration(1,props.unit));var waitMs=nextUnitStart.valueOf()-unroundedNow.valueOf();// there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
// ensure no longer than a day
waitMs=Math.min(1000*60*60*24,waitMs);return {currentState:{nowDate:currentUnitStart,todayRange:buildDayRange(currentUnitStart)},nextState:{nowDate:nextUnitStart,todayRange:buildDayRange(nextUnitStart)},waitMs:waitMs};};NowTimer.prototype.setTimeout=function(){var _this=this;var _a=this.computeTiming(),nextState=_a.nextState,waitMs=_a.waitMs;this.timeoutId=setTimeout(function(){_this.setState(nextState,function(){_this.setTimeout();});},waitMs);};NowTimer.prototype.clearTimeout=function(){if(this.timeoutId){clearTimeout(this.timeoutId);}};NowTimer.contextType=ViewContextType;return NowTimer;}(Component);function buildDayRange(date){var start=startOfDay(date);var end=addDays(start,1);return {start:start,end:end};}var DayHeader=/** @class */function(_super){__extends(DayHeader,_super);function DayHeader(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.createDayHeaderFormatter=memoize(createDayHeaderFormatter);return _this;}DayHeader.prototype.render=function(){var context=this.context;var _a=this.props,dates=_a.dates,dateProfile=_a.dateProfile,datesRepDistinctDays=_a.datesRepDistinctDays,renderIntro=_a.renderIntro;var dayHeaderFormat=this.createDayHeaderFormatter(context.options.dayHeaderFormat,datesRepDistinctDays,dates.length);return createElement(NowTimer,{unit:"day"},function(nowDate,todayRange){return createElement("tr",null,renderIntro&&renderIntro('day'),dates.map(function(date){return datesRepDistinctDays?createElement(TableDateCell,{key:date.toISOString(),date:date,dateProfile:dateProfile,todayRange:todayRange,colCnt:dates.length,dayHeaderFormat:dayHeaderFormat}):createElement(TableDowCell,{key:date.getUTCDay(),dow:date.getUTCDay(),dayHeaderFormat:dayHeaderFormat});}));});};return DayHeader;}(BaseComponent);function createDayHeaderFormatter(explicitFormat,datesRepDistinctDays,dateCnt){return explicitFormat||computeFallbackHeaderFormat(datesRepDistinctDays,dateCnt);}var DaySeriesModel=/** @class */function(){function DaySeriesModel(range,dateProfileGenerator){var date=range.start;var end=range.end;var indices=[];var dates=[];var dayIndex=-1;while(date<end){// loop each day from start to end
if(dateProfileGenerator.isHiddenDay(date)){indices.push(dayIndex+0.5);// mark that it's between indices
}else {dayIndex+=1;indices.push(dayIndex);dates.push(date);}date=addDays(date,1);}this.dates=dates;this.indices=indices;this.cnt=dates.length;}DaySeriesModel.prototype.sliceRange=function(range){var firstIndex=this.getDateDayIndex(range.start);// inclusive first index
var lastIndex=this.getDateDayIndex(addDays(range.end,-1));// inclusive last index
var clippedFirstIndex=Math.max(0,firstIndex);var clippedLastIndex=Math.min(this.cnt-1,lastIndex);// deal with in-between indices
clippedFirstIndex=Math.ceil(clippedFirstIndex);// in-between starts round to next cell
clippedLastIndex=Math.floor(clippedLastIndex);// in-between ends round to prev cell
if(clippedFirstIndex<=clippedLastIndex){return {firstIndex:clippedFirstIndex,lastIndex:clippedLastIndex,isStart:firstIndex===clippedFirstIndex,isEnd:lastIndex===clippedLastIndex};}return null;};// Given a date, returns its chronolocial cell-index from the first cell of the grid.
// If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
// If before the first offset, returns a negative number.
// If after the last offset, returns an offset past the last cell offset.
// Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
DaySeriesModel.prototype.getDateDayIndex=function(date){var indices=this.indices;var dayOffset=Math.floor(diffDays(this.dates[0],date));if(dayOffset<0){return indices[0]-1;}if(dayOffset>=indices.length){return indices[indices.length-1]+1;}return indices[dayOffset];};return DaySeriesModel;}();var DayTableModel=/** @class */function(){function DayTableModel(daySeries,breakOnWeeks){var dates=daySeries.dates;var daysPerRow;var firstDay;var rowCnt;if(breakOnWeeks){// count columns until the day-of-week repeats
firstDay=dates[0].getUTCDay();for(daysPerRow=1;daysPerRow<dates.length;daysPerRow+=1){if(dates[daysPerRow].getUTCDay()===firstDay){break;}}rowCnt=Math.ceil(dates.length/daysPerRow);}else {rowCnt=1;daysPerRow=dates.length;}this.rowCnt=rowCnt;this.colCnt=daysPerRow;this.daySeries=daySeries;this.cells=this.buildCells();this.headerDates=this.buildHeaderDates();}DayTableModel.prototype.buildCells=function(){var rows=[];for(var row=0;row<this.rowCnt;row+=1){var cells=[];for(var col=0;col<this.colCnt;col+=1){cells.push(this.buildCell(row,col));}rows.push(cells);}return rows;};DayTableModel.prototype.buildCell=function(row,col){var date=this.daySeries.dates[row*this.colCnt+col];return {key:date.toISOString(),date:date};};DayTableModel.prototype.buildHeaderDates=function(){var dates=[];for(var col=0;col<this.colCnt;col+=1){dates.push(this.cells[0][col].date);}return dates;};DayTableModel.prototype.sliceRange=function(range){var colCnt=this.colCnt;var seriesSeg=this.daySeries.sliceRange(range);var segs=[];if(seriesSeg){var firstIndex=seriesSeg.firstIndex,lastIndex=seriesSeg.lastIndex;var index=firstIndex;while(index<=lastIndex){var row=Math.floor(index/colCnt);var nextIndex=Math.min((row+1)*colCnt,lastIndex+1);segs.push({row:row,firstCol:index%colCnt,lastCol:(nextIndex-1)%colCnt,isStart:seriesSeg.isStart&&index===firstIndex,isEnd:seriesSeg.isEnd&&nextIndex-1===lastIndex});index=nextIndex;}}return segs;};return DayTableModel;}();var Slicer=/** @class */function(){function Slicer(){this.sliceBusinessHours=memoize(this._sliceBusinessHours);this.sliceDateSelection=memoize(this._sliceDateSpan);this.sliceEventStore=memoize(this._sliceEventStore);this.sliceEventDrag=memoize(this._sliceInteraction);this.sliceEventResize=memoize(this._sliceInteraction);this.forceDayIfListItem=false;// hack
}Slicer.prototype.sliceProps=function(props,dateProfile,nextDayThreshold,context){var extraArgs=[];for(var _i=4;_i<arguments.length;_i++){extraArgs[_i-4]=arguments[_i];}var eventUiBases=props.eventUiBases;var eventSegs=this.sliceEventStore.apply(this,__spreadArray([props.eventStore,eventUiBases,dateProfile,nextDayThreshold],extraArgs));return {dateSelectionSegs:this.sliceDateSelection.apply(this,__spreadArray([props.dateSelection,eventUiBases,context],extraArgs)),businessHourSegs:this.sliceBusinessHours.apply(this,__spreadArray([props.businessHours,dateProfile,nextDayThreshold,context],extraArgs)),fgEventSegs:eventSegs.fg,bgEventSegs:eventSegs.bg,eventDrag:this.sliceEventDrag.apply(this,__spreadArray([props.eventDrag,eventUiBases,dateProfile,nextDayThreshold],extraArgs)),eventResize:this.sliceEventResize.apply(this,__spreadArray([props.eventResize,eventUiBases,dateProfile,nextDayThreshold],extraArgs)),eventSelection:props.eventSelection};// TODO: give interactionSegs?
};Slicer.prototype.sliceNowDate=function(// does not memoize
date,context){var extraArgs=[];for(var _i=2;_i<arguments.length;_i++){extraArgs[_i-2]=arguments[_i];}return this._sliceDateSpan.apply(this,__spreadArray([{range:{start:date,end:addMs(date,1)},allDay:false},{},context],extraArgs));};Slicer.prototype._sliceBusinessHours=function(businessHours,dateProfile,nextDayThreshold,context){var extraArgs=[];for(var _i=4;_i<arguments.length;_i++){extraArgs[_i-4]=arguments[_i];}if(!businessHours){return [];}return this._sliceEventStore.apply(this,__spreadArray([expandRecurring(businessHours,computeActiveRange(dateProfile,Boolean(nextDayThreshold)),context),{},dateProfile,nextDayThreshold],extraArgs)).bg;};Slicer.prototype._sliceEventStore=function(eventStore,eventUiBases,dateProfile,nextDayThreshold){var extraArgs=[];for(var _i=4;_i<arguments.length;_i++){extraArgs[_i-4]=arguments[_i];}if(eventStore){var rangeRes=sliceEventStore(eventStore,eventUiBases,computeActiveRange(dateProfile,Boolean(nextDayThreshold)),nextDayThreshold);return {bg:this.sliceEventRanges(rangeRes.bg,extraArgs),fg:this.sliceEventRanges(rangeRes.fg,extraArgs)};}return {bg:[],fg:[]};};Slicer.prototype._sliceInteraction=function(interaction,eventUiBases,dateProfile,nextDayThreshold){var extraArgs=[];for(var _i=4;_i<arguments.length;_i++){extraArgs[_i-4]=arguments[_i];}if(!interaction){return null;}var rangeRes=sliceEventStore(interaction.mutatedEvents,eventUiBases,computeActiveRange(dateProfile,Boolean(nextDayThreshold)),nextDayThreshold);return {segs:this.sliceEventRanges(rangeRes.fg,extraArgs),affectedInstances:interaction.affectedEvents.instances,isEvent:interaction.isEvent};};Slicer.prototype._sliceDateSpan=function(dateSpan,eventUiBases,context){var extraArgs=[];for(var _i=3;_i<arguments.length;_i++){extraArgs[_i-3]=arguments[_i];}if(!dateSpan){return [];}var eventRange=fabricateEventRange(dateSpan,eventUiBases,context);var segs=this.sliceRange.apply(this,__spreadArray([dateSpan.range],extraArgs));for(var _a=0,segs_1=segs;_a<segs_1.length;_a++){var seg=segs_1[_a];seg.eventRange=eventRange;}return segs;};/*
    "complete" seg means it has component and eventRange
    */Slicer.prototype.sliceEventRanges=function(eventRanges,extraArgs){var segs=[];for(var _i=0,eventRanges_1=eventRanges;_i<eventRanges_1.length;_i++){var eventRange=eventRanges_1[_i];segs.push.apply(segs,this.sliceEventRange(eventRange,extraArgs));}return segs;};/*
    "complete" seg means it has component and eventRange
    */Slicer.prototype.sliceEventRange=function(eventRange,extraArgs){var dateRange=eventRange.range;// hack to make multi-day events that are being force-displayed as list-items to take up only one day
if(this.forceDayIfListItem&&eventRange.ui.display==='list-item'){dateRange={start:dateRange.start,end:addDays(dateRange.start,1)};}var segs=this.sliceRange.apply(this,__spreadArray([dateRange],extraArgs));for(var _i=0,segs_2=segs;_i<segs_2.length;_i++){var seg=segs_2[_i];seg.eventRange=eventRange;seg.isStart=eventRange.isStart&&seg.isStart;seg.isEnd=eventRange.isEnd&&seg.isEnd;}return segs;};return Slicer;}();/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/function computeActiveRange(dateProfile,isComponentAllDay){var range=dateProfile.activeRange;if(isComponentAllDay){return range;}return {start:addMs(range.start,dateProfile.slotMinTime.milliseconds),end:addMs(range.end,dateProfile.slotMaxTime.milliseconds-864e5)// 864e5 = ms in a day
};}// high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionValid(interaction,dateProfile,context){var instances=interaction.mutatedEvents.instances;for(var instanceId in instances){if(!rangeContainsRange(dateProfile.validRange,instances[instanceId].range)){return false;}}return isNewPropsValid({eventDrag:interaction},context);// HACK: the eventDrag props is used for ALL interactions
}function isDateSelectionValid(dateSelection,dateProfile,context){if(!rangeContainsRange(dateProfile.validRange,dateSelection.range)){return false;}return isNewPropsValid({dateSelection:dateSelection},context);}function isNewPropsValid(newProps,context){var calendarState=context.getCurrentData();var props=__assign$1({businessHours:calendarState.businessHours,dateSelection:'',eventStore:calendarState.eventStore,eventUiBases:calendarState.eventUiBases,eventSelection:'',eventDrag:null,eventResize:null},newProps);return (context.pluginHooks.isPropsValid||isPropsValid)(props,context);}function isPropsValid(state,context,dateSpanMeta,filterConfig){if(dateSpanMeta===void 0){dateSpanMeta={};}if(state.eventDrag&&!isInteractionPropsValid(state,context,dateSpanMeta,filterConfig)){return false;}if(state.dateSelection&&!isDateSelectionPropsValid(state,context,dateSpanMeta,filterConfig)){return false;}return true;}// Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionPropsValid(state,context,dateSpanMeta,filterConfig){var currentState=context.getCurrentData();var interaction=state.eventDrag;// HACK: the eventDrag props is used for ALL interactions
var subjectEventStore=interaction.mutatedEvents;var subjectDefs=subjectEventStore.defs;var subjectInstances=subjectEventStore.instances;var subjectConfigs=compileEventUis(subjectDefs,interaction.isEvent?state.eventUiBases:{'':currentState.selectionConfig});if(filterConfig){subjectConfigs=mapHash(subjectConfigs,filterConfig);}// exclude the subject events. TODO: exclude defs too?
var otherEventStore=excludeInstances(state.eventStore,interaction.affectedEvents.instances);var otherDefs=otherEventStore.defs;var otherInstances=otherEventStore.instances;var otherConfigs=compileEventUis(otherDefs,state.eventUiBases);for(var subjectInstanceId in subjectInstances){var subjectInstance=subjectInstances[subjectInstanceId];var subjectRange=subjectInstance.range;var subjectConfig=subjectConfigs[subjectInstance.defId];var subjectDef=subjectDefs[subjectInstance.defId];// constraint
if(!allConstraintsPass(subjectConfig.constraints,subjectRange,otherEventStore,state.businessHours,context)){return false;}// overlap
var eventOverlap=context.options.eventOverlap;var eventOverlapFunc=typeof eventOverlap==='function'?eventOverlap:null;for(var otherInstanceId in otherInstances){var otherInstance=otherInstances[otherInstanceId];// intersect! evaluate
if(rangesIntersect(subjectRange,otherInstance.range)){var otherOverlap=otherConfigs[otherInstance.defId].overlap;// consider the other event's overlap. only do this if the subject event is a "real" event
if(otherOverlap===false&&interaction.isEvent){return false;}if(subjectConfig.overlap===false){return false;}if(eventOverlapFunc&&!eventOverlapFunc(new EventApi(context,otherDefs[otherInstance.defId],otherInstance),// still event
new EventApi(context,subjectDef,subjectInstance))){return false;}}}// allow (a function)
var calendarEventStore=currentState.eventStore;// need global-to-calendar, not local to component (splittable)state
for(var _i=0,_a=subjectConfig.allows;_i<_a.length;_i++){var subjectAllow=_a[_i];var subjectDateSpan=__assign$1(__assign$1({},dateSpanMeta),{range:subjectInstance.range,allDay:subjectDef.allDay});var origDef=calendarEventStore.defs[subjectDef.defId];var origInstance=calendarEventStore.instances[subjectInstanceId];var eventApi=void 0;if(origDef){// was previously in the calendar
eventApi=new EventApi(context,origDef,origInstance);}else {// was an external event
eventApi=new EventApi(context,subjectDef);// no instance, because had no dates
}if(!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan,context),eventApi)){return false;}}}return true;}// Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------
function isDateSelectionPropsValid(state,context,dateSpanMeta,filterConfig){var relevantEventStore=state.eventStore;var relevantDefs=relevantEventStore.defs;var relevantInstances=relevantEventStore.instances;var selection=state.dateSelection;var selectionRange=selection.range;var selectionConfig=context.getCurrentData().selectionConfig;if(filterConfig){selectionConfig=filterConfig(selectionConfig);}// constraint
if(!allConstraintsPass(selectionConfig.constraints,selectionRange,relevantEventStore,state.businessHours,context)){return false;}// overlap
var selectOverlap=context.options.selectOverlap;var selectOverlapFunc=typeof selectOverlap==='function'?selectOverlap:null;for(var relevantInstanceId in relevantInstances){var relevantInstance=relevantInstances[relevantInstanceId];// intersect! evaluate
if(rangesIntersect(selectionRange,relevantInstance.range)){if(selectionConfig.overlap===false){return false;}if(selectOverlapFunc&&!selectOverlapFunc(new EventApi(context,relevantDefs[relevantInstance.defId],relevantInstance),null)){return false;}}}// allow (a function)
for(var _i=0,_a=selectionConfig.allows;_i<_a.length;_i++){var selectionAllow=_a[_i];var fullDateSpan=__assign$1(__assign$1({},dateSpanMeta),selection);if(!selectionAllow(buildDateSpanApiWithContext(fullDateSpan,context),null)){return false;}}return true;}// Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------
function allConstraintsPass(constraints,subjectRange,otherEventStore,businessHoursUnexpanded,context){for(var _i=0,constraints_1=constraints;_i<constraints_1.length;_i++){var constraint=constraints_1[_i];if(!anyRangesContainRange(constraintToRanges(constraint,subjectRange,otherEventStore,businessHoursUnexpanded,context),subjectRange)){return false;}}return true;}function constraintToRanges(constraint,subjectRange,// for expanding a recurring constraint, or expanding business hours
otherEventStore,// for if constraint is an even group ID
businessHoursUnexpanded,// for if constraint is 'businessHours'
context){if(constraint==='businessHours'){return eventStoreToRanges(expandRecurring(businessHoursUnexpanded,subjectRange,context));}if(typeof constraint==='string'){// an group ID
return eventStoreToRanges(filterEventStoreDefs(otherEventStore,function(eventDef){return eventDef.groupId===constraint;}));}if(typeof constraint==='object'&&constraint){// non-null object
return eventStoreToRanges(expandRecurring(constraint,subjectRange,context));}return [];// if it's false
}// TODO: move to event-store file?
function eventStoreToRanges(eventStore){var instances=eventStore.instances;var ranges=[];for(var instanceId in instances){ranges.push(instances[instanceId].range);}return ranges;}// TODO: move to geom file?
function anyRangesContainRange(outerRanges,innerRange){for(var _i=0,outerRanges_1=outerRanges;_i<outerRanges_1.length;_i++){var outerRange=outerRanges_1[_i];if(rangeContainsRange(outerRange,innerRange)){return true;}}return false;}var VISIBLE_HIDDEN_RE=/^(visible|hidden)$/;var Scroller=/** @class */function(_super){__extends(Scroller,_super);function Scroller(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.handleEl=function(el){_this.el=el;setRef(_this.props.elRef,el);};return _this;}Scroller.prototype.render=function(){var props=this.props;var liquid=props.liquid,liquidIsAbsolute=props.liquidIsAbsolute;var isAbsolute=liquid&&liquidIsAbsolute;var className=['fc-scroller'];if(liquid){if(liquidIsAbsolute){className.push('fc-scroller-liquid-absolute');}else {className.push('fc-scroller-liquid');}}return createElement("div",{ref:this.handleEl,className:className.join(' '),style:{overflowX:props.overflowX,overflowY:props.overflowY,left:isAbsolute&&-(props.overcomeLeft||0)||'',right:isAbsolute&&-(props.overcomeRight||0)||'',bottom:isAbsolute&&-(props.overcomeBottom||0)||'',marginLeft:!isAbsolute&&-(props.overcomeLeft||0)||'',marginRight:!isAbsolute&&-(props.overcomeRight||0)||'',marginBottom:!isAbsolute&&-(props.overcomeBottom||0)||'',maxHeight:props.maxHeight||''}},props.children);};Scroller.prototype.needsXScrolling=function(){if(VISIBLE_HIDDEN_RE.test(this.props.overflowX)){return false;}// testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
// much more reliable to see if children are taller than the scroller, even tho doesn't account for
// inner-child margins and absolute positioning
var el=this.el;var realClientWidth=this.el.getBoundingClientRect().width-this.getYScrollbarWidth();var children=el.children;for(var i=0;i<children.length;i+=1){var childEl=children[i];if(childEl.getBoundingClientRect().width>realClientWidth){return true;}}return false;};Scroller.prototype.needsYScrolling=function(){if(VISIBLE_HIDDEN_RE.test(this.props.overflowY)){return false;}// testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
// much more reliable to see if children are taller than the scroller, even tho doesn't account for
// inner-child margins and absolute positioning
var el=this.el;var realClientHeight=this.el.getBoundingClientRect().height-this.getXScrollbarWidth();var children=el.children;for(var i=0;i<children.length;i+=1){var childEl=children[i];if(childEl.getBoundingClientRect().height>realClientHeight){return true;}}return false;};Scroller.prototype.getXScrollbarWidth=function(){if(VISIBLE_HIDDEN_RE.test(this.props.overflowX)){return 0;}return this.el.offsetHeight-this.el.clientHeight;// only works because we guarantee no borders. TODO: add to CSS with important?
};Scroller.prototype.getYScrollbarWidth=function(){if(VISIBLE_HIDDEN_RE.test(this.props.overflowY)){return 0;}return this.el.offsetWidth-this.el.clientWidth;// only works because we guarantee no borders. TODO: add to CSS with important?
};return Scroller;}(BaseComponent);/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/var RefMap=/** @class */function(){function RefMap(masterCallback){var _this=this;this.masterCallback=masterCallback;this.currentMap={};this.depths={};this.callbackMap={};this.handleValue=function(val,key){var _a=_this,depths=_a.depths,currentMap=_a.currentMap;var removed=false;var added=false;if(val!==null){// for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
removed=key in currentMap;currentMap[key]=val;depths[key]=(depths[key]||0)+1;added=true;}else {depths[key]-=1;if(!depths[key]){delete currentMap[key];delete _this.callbackMap[key];removed=true;}}if(_this.masterCallback){if(removed){_this.masterCallback(null,String(key));}if(added){_this.masterCallback(val,String(key));}}};}RefMap.prototype.createRef=function(key){var _this=this;var refCallback=this.callbackMap[key];if(!refCallback){refCallback=this.callbackMap[key]=function(val){_this.handleValue(val,String(key));};}return refCallback;};// TODO: check callers that don't care about order. should use getAll instead
// NOTE: this method has become less valuable now that we are encouraged to map order by some other index
// TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
RefMap.prototype.collect=function(startIndex,endIndex,step){return collectFromHash(this.currentMap,startIndex,endIndex,step);};RefMap.prototype.getAll=function(){return hashValuesToArray(this.currentMap);};return RefMap;}();function computeShrinkWidth(chunkEls){var shrinkCells=findElements(chunkEls,'.fc-scrollgrid-shrink');var largestWidth=0;for(var _i=0,shrinkCells_1=shrinkCells;_i<shrinkCells_1.length;_i++){var shrinkCell=shrinkCells_1[_i];largestWidth=Math.max(largestWidth,computeSmallestCellWidth(shrinkCell));}return Math.ceil(largestWidth);// <table> elements work best with integers. round up to ensure contents fits
}function getSectionHasLiquidHeight(props,sectionConfig){return props.liquid&&sectionConfig.liquid;// does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}function getAllowYScrolling(props,sectionConfig){return sectionConfig.maxHeight!=null||// if its possible for the height to max out, we might need scrollbars
getSectionHasLiquidHeight(props,sectionConfig);// if the section is liquid height, it might condense enough to require scrollbars
}// TODO: ONLY use `arg`. force out internal function to use same API
function renderChunkContent(sectionConfig,chunkConfig,arg){var expandRows=arg.expandRows;var content=typeof chunkConfig.content==='function'?chunkConfig.content(arg):createElement('table',{className:[chunkConfig.tableClassName,sectionConfig.syncRowHeights?'fc-scrollgrid-sync-table':''].join(' '),style:{minWidth:arg.tableMinWidth,width:arg.clientWidth,height:expandRows?arg.clientHeight:''// css `height` on a <table> serves as a min-height
}},arg.tableColGroupNode,createElement('tbody',{},typeof chunkConfig.rowContent==='function'?chunkConfig.rowContent(arg):chunkConfig.rowContent));return content;}function isColPropsEqual(cols0,cols1){return isArraysEqual(cols0,cols1,isPropsEqual);}function renderMicroColGroup(cols,shrinkWidth){var colNodes=[];/*
    for ColProps with spans, it would have been great to make a single <col span="">
    HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
    SOLUTION: making individual <col> elements makes Chrome behave.
    */for(var _i=0,cols_1=cols;_i<cols_1.length;_i++){var colProps=cols_1[_i];var span=colProps.span||1;for(var i=0;i<span;i+=1){colNodes.push(createElement("col",{style:{width:colProps.width==='shrink'?sanitizeShrinkWidth(shrinkWidth):colProps.width||'',minWidth:colProps.minWidth||''}}));}}return createElement.apply(void 0,__spreadArray(['colgroup',{}],colNodes));}function sanitizeShrinkWidth(shrinkWidth){/* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
    4 accounts for 2 2-pixel borders. TODO: better solution? */return shrinkWidth==null?4:shrinkWidth;}function hasShrinkWidth(cols){for(var _i=0,cols_2=cols;_i<cols_2.length;_i++){var col=cols_2[_i];if(col.width==='shrink'){return true;}}return false;}function getScrollGridClassNames(liquid,context){var classNames=['fc-scrollgrid',context.theme.getClass('table')];if(liquid){classNames.push('fc-scrollgrid-liquid');}return classNames;}function getSectionClassNames(sectionConfig,wholeTableVGrow){var classNames=['fc-scrollgrid-section',"fc-scrollgrid-section-"+sectionConfig.type,sectionConfig.className// used?
];if(wholeTableVGrow&&sectionConfig.liquid&&sectionConfig.maxHeight==null){classNames.push('fc-scrollgrid-section-liquid');}if(sectionConfig.isSticky){classNames.push('fc-scrollgrid-section-sticky');}return classNames;}function renderScrollShim(arg){return createElement("div",{className:"fc-scrollgrid-sticky-shim",style:{width:arg.clientWidth,minWidth:arg.tableMinWidth}});}function getStickyHeaderDates(options){var stickyHeaderDates=options.stickyHeaderDates;if(stickyHeaderDates==null||stickyHeaderDates==='auto'){stickyHeaderDates=options.height==='auto'||options.viewHeight==='auto';}return stickyHeaderDates;}function getStickyFooterScrollbar(options){var stickyFooterScrollbar=options.stickyFooterScrollbar;if(stickyFooterScrollbar==null||stickyFooterScrollbar==='auto'){stickyFooterScrollbar=options.height==='auto'||options.viewHeight==='auto';}return stickyFooterScrollbar;}var SimpleScrollGrid=/** @class */function(_super){__extends(SimpleScrollGrid,_super);function SimpleScrollGrid(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.processCols=memoize(function(a){return a;},isColPropsEqual);// so we get same `cols` props every time
// yucky to memoize VNodes, but much more efficient for consumers
_this.renderMicroColGroup=memoize(renderMicroColGroup);_this.scrollerRefs=new RefMap();_this.scrollerElRefs=new RefMap(_this._handleScrollerEl.bind(_this));_this.state={shrinkWidth:null,forceYScrollbars:false,scrollerClientWidths:{},scrollerClientHeights:{}};// TODO: can do a really simple print-view. dont need to join rows
_this.handleSizing=function(){_this.setState(__assign$1({shrinkWidth:_this.computeShrinkWidth()},_this.computeScrollerDims()));};return _this;}SimpleScrollGrid.prototype.render=function(){var _a=this,props=_a.props,state=_a.state,context=_a.context;var sectionConfigs=props.sections||[];var cols=this.processCols(props.cols);var microColGroupNode=this.renderMicroColGroup(cols,state.shrinkWidth);var classNames=getScrollGridClassNames(props.liquid,context);if(props.collapsibleWidth){classNames.push('fc-scrollgrid-collapsible');}// TODO: make DRY
var configCnt=sectionConfigs.length;var configI=0;var currentConfig;var headSectionNodes=[];var bodySectionNodes=[];var footSectionNodes=[];while(configI<configCnt&&(currentConfig=sectionConfigs[configI]).type==='header'){headSectionNodes.push(this.renderSection(currentConfig,microColGroupNode));configI+=1;}while(configI<configCnt&&(currentConfig=sectionConfigs[configI]).type==='body'){bodySectionNodes.push(this.renderSection(currentConfig,microColGroupNode));configI+=1;}while(configI<configCnt&&(currentConfig=sectionConfigs[configI]).type==='footer'){footSectionNodes.push(this.renderSection(currentConfig,microColGroupNode));configI+=1;}// firefox bug: when setting height on table and there is a thead or tfoot,
// the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
// use getCanVGrowWithinCell as a way to detect table-stupid firefox.
// if so, use a simpler dom structure, jam everything into a lone tbody.
var isBuggy=!getCanVGrowWithinCell();return createElement('table',{className:classNames.join(' '),style:{height:props.height}},Boolean(!isBuggy&&headSectionNodes.length)&&createElement.apply(void 0,__spreadArray(['thead',{}],headSectionNodes)),Boolean(!isBuggy&&bodySectionNodes.length)&&createElement.apply(void 0,__spreadArray(['tbody',{}],bodySectionNodes)),Boolean(!isBuggy&&footSectionNodes.length)&&createElement.apply(void 0,__spreadArray(['tfoot',{}],footSectionNodes)),isBuggy&&createElement.apply(void 0,__spreadArray(__spreadArray(__spreadArray(['tbody',{}],headSectionNodes),bodySectionNodes),footSectionNodes)));};SimpleScrollGrid.prototype.renderSection=function(sectionConfig,microColGroupNode){if('outerContent'in sectionConfig){return createElement(Fragment,{key:sectionConfig.key},sectionConfig.outerContent);}return createElement("tr",{key:sectionConfig.key,className:getSectionClassNames(sectionConfig,this.props.liquid).join(' ')},this.renderChunkTd(sectionConfig,microColGroupNode,sectionConfig.chunk));};SimpleScrollGrid.prototype.renderChunkTd=function(sectionConfig,microColGroupNode,chunkConfig){if('outerContent'in chunkConfig){return chunkConfig.outerContent;}var props=this.props;var _a=this.state,forceYScrollbars=_a.forceYScrollbars,scrollerClientWidths=_a.scrollerClientWidths,scrollerClientHeights=_a.scrollerClientHeights;var needsYScrolling=getAllowYScrolling(props,sectionConfig);// TODO: do lazily. do in section config?
var isLiquid=getSectionHasLiquidHeight(props,sectionConfig);// for `!props.liquid` - is WHOLE scrollgrid natural height?
// TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars
var overflowY=!props.liquid?'visible':forceYScrollbars?'scroll':!needsYScrolling?'hidden':'auto';var sectionKey=sectionConfig.key;var content=renderChunkContent(sectionConfig,chunkConfig,{tableColGroupNode:microColGroupNode,tableMinWidth:'',clientWidth:!props.collapsibleWidth&&scrollerClientWidths[sectionKey]!==undefined?scrollerClientWidths[sectionKey]:null,clientHeight:scrollerClientHeights[sectionKey]!==undefined?scrollerClientHeights[sectionKey]:null,expandRows:sectionConfig.expandRows,syncRowHeights:false,rowSyncHeights:[],reportRowHeightChange:function(){}});return createElement("td",{ref:chunkConfig.elRef},createElement("div",{className:"fc-scroller-harness"+(isLiquid?' fc-scroller-harness-liquid':'')},createElement(Scroller,{ref:this.scrollerRefs.createRef(sectionKey),elRef:this.scrollerElRefs.createRef(sectionKey),overflowY:overflowY,overflowX:!props.liquid?'visible':'hidden'/* natural height? */,maxHeight:sectionConfig.maxHeight,liquid:isLiquid,liquidIsAbsolute// because its within a harness
:true},content)));};SimpleScrollGrid.prototype._handleScrollerEl=function(scrollerEl,key){var section=getSectionByKey(this.props.sections,key);if(section){setRef(section.chunk.scrollerElRef,scrollerEl);}};SimpleScrollGrid.prototype.componentDidMount=function(){this.handleSizing();this.context.addResizeHandler(this.handleSizing);};SimpleScrollGrid.prototype.componentDidUpdate=function(){// TODO: need better solution when state contains non-sizing things
this.handleSizing();};SimpleScrollGrid.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleSizing);};SimpleScrollGrid.prototype.computeShrinkWidth=function(){return hasShrinkWidth(this.props.cols)?computeShrinkWidth(this.scrollerElRefs.getAll()):0;};SimpleScrollGrid.prototype.computeScrollerDims=function(){var scrollbarWidth=getScrollbarWidths();var _a=this,scrollerRefs=_a.scrollerRefs,scrollerElRefs=_a.scrollerElRefs;var forceYScrollbars=false;var scrollerClientWidths={};var scrollerClientHeights={};for(var sectionKey in scrollerRefs.currentMap){var scroller=scrollerRefs.currentMap[sectionKey];if(scroller&&scroller.needsYScrolling()){forceYScrollbars=true;break;}}for(var _i=0,_b=this.props.sections;_i<_b.length;_i++){var section=_b[_i];var sectionKey=section.key;var scrollerEl=scrollerElRefs.currentMap[sectionKey];if(scrollerEl){var harnessEl=scrollerEl.parentNode;// TODO: weird way to get this. need harness b/c doesn't include table borders
scrollerClientWidths[sectionKey]=Math.floor(harnessEl.getBoundingClientRect().width-(forceYScrollbars?scrollbarWidth.y// use global because scroller might not have scrollbars yet but will need them in future
:0));scrollerClientHeights[sectionKey]=Math.floor(harnessEl.getBoundingClientRect().height);}}return {forceYScrollbars:forceYScrollbars,scrollerClientWidths:scrollerClientWidths,scrollerClientHeights:scrollerClientHeights};};return SimpleScrollGrid;}(BaseComponent);SimpleScrollGrid.addStateEquality({scrollerClientWidths:isPropsEqual,scrollerClientHeights:isPropsEqual});function getSectionByKey(sections,key){for(var _i=0,sections_1=sections;_i<sections_1.length;_i++){var section=sections_1[_i];if(section.key===key){return section;}}return null;}var EventRoot=/** @class */function(_super){__extends(EventRoot,_super);function EventRoot(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.elRef=createRef();return _this;}EventRoot.prototype.render=function(){var _a=this,props=_a.props,context=_a.context;var options=context.options;var seg=props.seg;var eventRange=seg.eventRange;var ui=eventRange.ui;var hookProps={event:new EventApi(context,eventRange.def,eventRange.instance),view:context.viewApi,timeText:props.timeText,textColor:ui.textColor,backgroundColor:ui.backgroundColor,borderColor:ui.borderColor,isDraggable:!props.disableDragging&&computeSegDraggable(seg,context),isStartResizable:!props.disableResizing&&computeSegStartResizable(seg,context),isEndResizable:!props.disableResizing&&computeSegEndResizable(seg),isMirror:Boolean(props.isDragging||props.isResizing||props.isDateSelecting),isStart:Boolean(seg.isStart),isEnd:Boolean(seg.isEnd),isPast:Boolean(props.isPast),isFuture:Boolean(props.isFuture),isToday:Boolean(props.isToday),isSelected:Boolean(props.isSelected),isDragging:Boolean(props.isDragging),isResizing:Boolean(props.isResizing)};var standardClassNames=getEventClassNames(hookProps).concat(ui.classNames);return createElement(RenderHook,{hookProps:hookProps,classNames:options.eventClassNames,content:options.eventContent,defaultContent:props.defaultContent,didMount:options.eventDidMount,willUnmount:options.eventWillUnmount,elRef:this.elRef},function(rootElRef,customClassNames,innerElRef,innerContent){return props.children(rootElRef,standardClassNames.concat(customClassNames),innerElRef,innerContent,hookProps);});};EventRoot.prototype.componentDidMount=function(){setElSeg(this.elRef.current,this.props.seg);};/*
    need to re-assign seg to the element if seg changes, even if the element is the same
    */EventRoot.prototype.componentDidUpdate=function(prevProps){var seg=this.props.seg;if(seg!==prevProps.seg){setElSeg(this.elRef.current,seg);}};return EventRoot;}(BaseComponent);// should not be a purecomponent
var StandardEvent=/** @class */function(_super){__extends(StandardEvent,_super);function StandardEvent(){return _super!==null&&_super.apply(this,arguments)||this;}StandardEvent.prototype.render=function(){var _a=this,props=_a.props,context=_a.context;var seg=props.seg;var timeFormat=context.options.eventTimeFormat||props.defaultTimeFormat;var timeText=buildSegTimeText(seg,timeFormat,context,props.defaultDisplayEventTime,props.defaultDisplayEventEnd);return createElement(EventRoot,{seg:seg,timeText:timeText,disableDragging:props.disableDragging,disableResizing:props.disableResizing,defaultContent:props.defaultContent||renderInnerContent$1$1,isDragging:props.isDragging,isResizing:props.isResizing,isDateSelecting:props.isDateSelecting,isSelected:props.isSelected,isPast:props.isPast,isFuture:props.isFuture,isToday:props.isToday},function(rootElRef,classNames,innerElRef,innerContent,hookProps){return createElement("a",__assign$1({className:props.extraClassNames.concat(classNames).join(' '),style:{borderColor:hookProps.borderColor,backgroundColor:hookProps.backgroundColor},ref:rootElRef},getSegAnchorAttrs$1(seg)),createElement("div",{className:"fc-event-main",ref:innerElRef,style:{color:hookProps.textColor}},innerContent),hookProps.isStartResizable&&createElement("div",{className:"fc-event-resizer fc-event-resizer-start"}),hookProps.isEndResizable&&createElement("div",{className:"fc-event-resizer fc-event-resizer-end"}));});};return StandardEvent;}(BaseComponent);function renderInnerContent$1$1(innerProps){return createElement("div",{className:"fc-event-main-frame"},innerProps.timeText&&createElement("div",{className:"fc-event-time"},innerProps.timeText),createElement("div",{className:"fc-event-title-container"},createElement("div",{className:"fc-event-title fc-sticky"},innerProps.event.title||createElement(Fragment,null,"\u00A0"))));}function getSegAnchorAttrs$1(seg){var url=seg.eventRange.def.url;return url?{href:url}:{};}var DAY_NUM_FORMAT=createFormatter({day:'numeric'});var DayCellContent=/** @class */function(_super){__extends(DayCellContent,_super);function DayCellContent(){return _super!==null&&_super.apply(this,arguments)||this;}DayCellContent.prototype.render=function(){var _a=this,props=_a.props,context=_a.context;var options=context.options;var hookProps=refineDayCellHookProps({date:props.date,dateProfile:props.dateProfile,todayRange:props.todayRange,showDayNumber:props.showDayNumber,extraProps:props.extraHookProps,viewApi:context.viewApi,dateEnv:context.dateEnv});return createElement(ContentHook,{hookProps:hookProps,content:options.dayCellContent,defaultContent:props.defaultContent},props.children);};return DayCellContent;}(BaseComponent);function refineDayCellHookProps(raw){var date=raw.date,dateEnv=raw.dateEnv;var dayMeta=getDateMeta(date,raw.todayRange,null,raw.dateProfile);return __assign$1(__assign$1(__assign$1({date:dateEnv.toDate(date),view:raw.viewApi},dayMeta),{dayNumberText:raw.showDayNumber?dateEnv.format(date,DAY_NUM_FORMAT):''}),raw.extraProps);}var DayCellRoot=/** @class */function(_super){__extends(DayCellRoot,_super);function DayCellRoot(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.refineHookProps=memoizeObjArg(refineDayCellHookProps);_this.normalizeClassNames=buildClassNameNormalizer();return _this;}DayCellRoot.prototype.render=function(){var _a=this,props=_a.props,context=_a.context;var options=context.options;var hookProps=this.refineHookProps({date:props.date,dateProfile:props.dateProfile,todayRange:props.todayRange,showDayNumber:props.showDayNumber,extraProps:props.extraHookProps,viewApi:context.viewApi,dateEnv:context.dateEnv});var classNames=getDayClassNames(hookProps,context.theme).concat(hookProps.isDisabled?[]// don't use custom classNames if disabled
:this.normalizeClassNames(options.dayCellClassNames,hookProps));var dataAttrs=hookProps.isDisabled?{}:{'data-date':formatDayString(props.date)};return createElement(MountHook,{hookProps:hookProps,didMount:options.dayCellDidMount,willUnmount:options.dayCellWillUnmount,elRef:props.elRef},function(rootElRef){return props.children(rootElRef,classNames,dataAttrs,hookProps.isDisabled);});};return DayCellRoot;}(BaseComponent);function renderFill(fillType){return createElement("div",{className:"fc-"+fillType});}var BgEvent=function(props){return createElement(EventRoot,{defaultContent:renderInnerContent$2,seg:props.seg/* uselesss i think */,timeText:"",disableDragging:true,disableResizing:true,isDragging:false,isResizing:false,isDateSelecting:false,isSelected:false,isPast:props.isPast,isFuture:props.isFuture,isToday:props.isToday},function(rootElRef,classNames,innerElRef,innerContent,hookProps){return createElement("div",{ref:rootElRef,className:['fc-bg-event'].concat(classNames).join(' '),style:{backgroundColor:hookProps.backgroundColor}},innerContent);});};function renderInnerContent$2(props){var title=props.event.title;return title&&createElement("div",{className:"fc-event-title"},props.event.title);}var WeekNumberRoot=function(props){return createElement(ViewContextType.Consumer,null,function(context){var dateEnv=context.dateEnv,options=context.options;var date=props.date;var format=options.weekNumberFormat||props.defaultFormat;var num=dateEnv.computeWeekNumber(date);// TODO: somehow use for formatting as well?
var text=dateEnv.format(date,format);var hookProps={num:num,text:text,date:date};return createElement(RenderHook,{hookProps:hookProps,classNames:options.weekNumberClassNames,content:options.weekNumberContent,defaultContent:renderInner,didMount:options.weekNumberDidMount,willUnmount:options.weekNumberWillUnmount},props.children);});};function renderInner(innerProps){return innerProps.text;}var PADDING_FROM_VIEWPORT=10;var Popover=/** @class */function(_super){__extends(Popover,_super);function Popover(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.handleRootEl=function(el){_this.rootEl=el;if(_this.props.elRef){setRef(_this.props.elRef,el);}};// Triggered when the user clicks *anywhere* in the document, for the autoHide feature
_this.handleDocumentMousedown=function(ev){// only hide the popover if the click happened outside the popover
var target=getEventTargetViaRoot(ev);if(!_this.rootEl.contains(target)){_this.handleCloseClick();}};_this.handleCloseClick=function(){var onClose=_this.props.onClose;if(onClose){onClose();}};return _this;}Popover.prototype.render=function(){var theme=this.context.theme;var props=this.props;var classNames=['fc-popover',theme.getClass('popover')].concat(props.extraClassNames||[]);return createPortal(createElement("div",__assign$1({className:classNames.join(' ')},props.extraAttrs,{ref:this.handleRootEl}),createElement("div",{className:'fc-popover-header '+theme.getClass('popoverHeader')},createElement("span",{className:"fc-popover-title"},props.title),createElement("span",{className:'fc-popover-close '+theme.getIconClass('close'),onClick:this.handleCloseClick})),createElement("div",{className:'fc-popover-body '+theme.getClass('popoverContent')},props.children)),props.parentEl);};Popover.prototype.componentDidMount=function(){document.addEventListener('mousedown',this.handleDocumentMousedown);this.updateSize();};Popover.prototype.componentWillUnmount=function(){document.removeEventListener('mousedown',this.handleDocumentMousedown);};Popover.prototype.updateSize=function(){var isRtl=this.context.isRtl;var _a=this.props,alignmentEl=_a.alignmentEl,alignGridTop=_a.alignGridTop;var rootEl=this.rootEl;var alignmentRect=computeClippedClientRect(alignmentEl);if(alignmentRect){var popoverDims=rootEl.getBoundingClientRect();// position relative to viewport
var popoverTop=alignGridTop?elementClosest(alignmentEl,'.fc-scrollgrid').getBoundingClientRect().top:alignmentRect.top;var popoverLeft=isRtl?alignmentRect.right-popoverDims.width:alignmentRect.left;// constrain
popoverTop=Math.max(popoverTop,PADDING_FROM_VIEWPORT);popoverLeft=Math.min(popoverLeft,document.documentElement.clientWidth-PADDING_FROM_VIEWPORT-popoverDims.width);popoverLeft=Math.max(popoverLeft,PADDING_FROM_VIEWPORT);var origin_1=rootEl.offsetParent.getBoundingClientRect();applyStyle(rootEl,{top:popoverTop-origin_1.top,left:popoverLeft-origin_1.left});}};return Popover;}(BaseComponent);var MorePopover=/** @class */function(_super){__extends(MorePopover,_super);function MorePopover(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.handleRootEl=function(rootEl){_this.rootEl=rootEl;if(rootEl){_this.context.registerInteractiveComponent(_this,{el:rootEl,useEventCenter:false});}else {_this.context.unregisterInteractiveComponent(_this);}};return _this;}MorePopover.prototype.render=function(){var _a=this.context,options=_a.options,dateEnv=_a.dateEnv;var props=this.props;var startDate=props.startDate,todayRange=props.todayRange,dateProfile=props.dateProfile;var title=dateEnv.format(startDate,options.dayPopoverFormat);return createElement(DayCellRoot,{date:startDate,dateProfile:dateProfile,todayRange:todayRange,elRef:this.handleRootEl},function(rootElRef,dayClassNames,dataAttrs){return createElement(Popover,{elRef:rootElRef,title:title,extraClassNames:['fc-more-popover'].concat(dayClassNames),extraAttrs:dataAttrs/* TODO: make these time-based when not whole-day? */,parentEl:props.parentEl,alignmentEl:props.alignmentEl,alignGridTop:props.alignGridTop,onClose:props.onClose},createElement(DayCellContent,{date:startDate,dateProfile:dateProfile,todayRange:todayRange},function(innerElRef,innerContent){return innerContent&&createElement("div",{className:"fc-more-popover-misc",ref:innerElRef},innerContent);}),props.children);});};MorePopover.prototype.queryHit=function(positionLeft,positionTop,elWidth,elHeight){var _a=this,rootEl=_a.rootEl,props=_a.props;if(positionLeft>=0&&positionLeft<elWidth&&positionTop>=0&&positionTop<elHeight){return {dateProfile:props.dateProfile,dateSpan:__assign$1({allDay:true,range:{start:props.startDate,end:props.endDate}},props.extraDateSpan),dayEl:rootEl,rect:{left:0,top:0,right:elWidth,bottom:elHeight},layer:1// important when comparing with hits from other components
};}return null;};return MorePopover;}(DateComponent);var MoreLinkRoot=/** @class */function(_super){__extends(MoreLinkRoot,_super);function MoreLinkRoot(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.linkElRef=createRef();_this.state={isPopoverOpen:false};_this.handleClick=function(ev){var _a=_this,props=_a.props,context=_a.context;var moreLinkClick=context.options.moreLinkClick;var date=computeRange(props).start;function buildPublicSeg(seg){var _a=seg.eventRange,def=_a.def,instance=_a.instance,range=_a.range;return {event:new EventApi(context,def,instance),start:context.dateEnv.toDate(range.start),end:context.dateEnv.toDate(range.end),isStart:seg.isStart,isEnd:seg.isEnd};}if(typeof moreLinkClick==='function'){moreLinkClick=moreLinkClick({date:date,allDay:Boolean(props.allDayDate),allSegs:props.allSegs.map(buildPublicSeg),hiddenSegs:props.hiddenSegs.map(buildPublicSeg),jsEvent:ev,view:context.viewApi});}if(!moreLinkClick||moreLinkClick==='popover'){_this.setState({isPopoverOpen:true});}else if(typeof moreLinkClick==='string'){// a view name
context.calendarApi.zoomTo(date,moreLinkClick);}};_this.handlePopoverClose=function(){_this.setState({isPopoverOpen:false});};return _this;}MoreLinkRoot.prototype.render=function(){var _this=this;var props=this.props;return createElement(ViewContextType.Consumer,null,function(context){var viewApi=context.viewApi,options=context.options,calendarApi=context.calendarApi;var moreLinkText=options.moreLinkText;var moreCnt=props.moreCnt;var range=computeRange(props);var hookProps={num:moreCnt,shortText:"+"+moreCnt,text:typeof moreLinkText==='function'?moreLinkText.call(calendarApi,moreCnt):"+"+moreCnt+" "+moreLinkText,view:viewApi};return createElement(Fragment,null,Boolean(props.moreCnt)&&createElement(RenderHook,{elRef:_this.linkElRef,hookProps:hookProps,classNames:options.moreLinkClassNames,content:options.moreLinkContent,defaultContent:props.defaultContent||renderMoreLinkInner,didMount:options.moreLinkDidMount,willUnmount:options.moreLinkWillUnmount},function(rootElRef,customClassNames,innerElRef,innerContent){return props.children(rootElRef,['fc-more-link'].concat(customClassNames),innerElRef,innerContent,_this.handleClick);}),_this.state.isPopoverOpen&&createElement(MorePopover,{startDate:range.start,endDate:range.end,dateProfile:props.dateProfile,todayRange:props.todayRange,extraDateSpan:props.extraDateSpan,parentEl:_this.parentEl,alignmentEl:props.alignmentElRef.current,alignGridTop:props.alignGridTop,onClose:_this.handlePopoverClose},props.popoverContent()));});};MoreLinkRoot.prototype.componentDidMount=function(){this.updateParentEl();};MoreLinkRoot.prototype.componentDidUpdate=function(){this.updateParentEl();};MoreLinkRoot.prototype.updateParentEl=function(){if(this.linkElRef.current){this.parentEl=elementClosest(this.linkElRef.current,'.fc-view-harness');}};return MoreLinkRoot;}(BaseComponent);function renderMoreLinkInner(props){return props.text;}function computeRange(props){if(props.allDayDate){return {start:props.allDayDate,end:addDays(props.allDayDate,1)};}var hiddenSegs=props.hiddenSegs;return {start:computeEarliestSegStart(hiddenSegs),end:computeLatestSegEnd(hiddenSegs)};}function computeEarliestSegStart(segs){return segs.reduce(pickEarliestStart).eventRange.range.start;}function pickEarliestStart(seg0,seg1){return seg0.eventRange.range.start<seg1.eventRange.range.start?seg0:seg1;}function computeLatestSegEnd(segs){return segs.reduce(pickLatestEnd).eventRange.range.end;}function pickLatestEnd(seg0,seg1){return seg0.eventRange.range.end>seg1.eventRange.range.end?seg0:seg1;}// exports

var Calendar=/** @class */function(_super){__extends(Calendar,_super);function Calendar(el,optionOverrides){if(optionOverrides===void 0){optionOverrides={};}var _this=_super.call(this)||this;_this.isRendering=false;_this.isRendered=false;_this.currentClassNames=[];_this.customContentRenderId=0;// will affect custom generated classNames?
_this.handleAction=function(action){// actions we know we want to render immediately
switch(action.type){case'SET_EVENT_DRAG':case'SET_EVENT_RESIZE':_this.renderRunner.tryDrain();}};_this.handleData=function(data){_this.currentData=data;_this.renderRunner.request(data.calendarOptions.rerenderDelay);};_this.handleRenderRequest=function(){if(_this.isRendering){_this.isRendered=true;var currentData_1=_this.currentData;render(createElement(CalendarRoot,{options:currentData_1.calendarOptions,theme:currentData_1.theme,emitter:currentData_1.emitter},function(classNames,height,isHeightAuto,forPrint){_this.setClassNames(classNames);_this.setHeight(height);return createElement(CustomContentRenderContext.Provider,{value:_this.customContentRenderId},createElement(CalendarContent,__assign$1({isHeightAuto:isHeightAuto,forPrint:forPrint},currentData_1)));}),_this.el);}else if(_this.isRendered){_this.isRendered=false;unmountComponentAtNode(_this.el);_this.setClassNames([]);_this.setHeight('');}flushToDom();};_this.el=el;_this.renderRunner=new DelayedRunner(_this.handleRenderRequest);new CalendarDataManager({optionOverrides:optionOverrides,calendarApi:_this,onAction:_this.handleAction,onData:_this.handleData});return _this;}Object.defineProperty(Calendar.prototype,"view",{get:function(){return this.currentData.viewApi;}// for public API
,enumerable:false,configurable:true});Calendar.prototype.render=function(){var wasRendering=this.isRendering;if(!wasRendering){this.isRendering=true;}else {this.customContentRenderId+=1;}this.renderRunner.request();if(wasRendering){this.updateSize();}};Calendar.prototype.destroy=function(){if(this.isRendering){this.isRendering=false;this.renderRunner.request();}};Calendar.prototype.updateSize=function(){_super.prototype.updateSize.call(this);flushToDom();};Calendar.prototype.batchRendering=function(func){this.renderRunner.pause('batchRendering');func();this.renderRunner.resume('batchRendering');};Calendar.prototype.pauseRendering=function(){this.renderRunner.pause('pauseRendering');};Calendar.prototype.resumeRendering=function(){this.renderRunner.resume('pauseRendering',true);};Calendar.prototype.resetOptions=function(optionOverrides,append){this.currentDataManager.resetOptions(optionOverrides,append);};Calendar.prototype.setClassNames=function(classNames){if(!isArraysEqual(classNames,this.currentClassNames)){var classList=this.el.classList;for(var _i=0,_a=this.currentClassNames;_i<_a.length;_i++){var className=_a[_i];classList.remove(className);}for(var _b=0,classNames_1=classNames;_b<classNames_1.length;_b++){var className=classNames_1[_b];classList.add(className);}this.currentClassNames=classNames;}};Calendar.prototype.setHeight=function(height){applyStyleProp(this.el,'height',height);};return Calendar;}(CalendarApi);

var localesAll_1=createCommonjsModule(function(module,exports){Object.defineProperty(exports,'__esModule',{value:true});var l0={code:'af',week:{dow:1,// Maandag is die eerste dag van die week.
doy:4// Die week wat die 4de Januarie bevat is die eerste week van die jaar.
},buttonText:{prev:'Vorige',next:'Volgende',today:'Vandag',year:'Jaar',month:'Maand',week:'Week',day:'Dag',list:'Agenda'},allDayText:'Heeldag',moreLinkText:'Addisionele',noEventsText:'Daar is geen gebeurtenisse nie'};var l1={code:'ar-dz',week:{dow:0,// Sunday is the first day of the week.
doy:4// The week that contains Jan 1st is the first week of the year.
},direction:'rtl',buttonText:{prev:'السابق',next:'التالي',today:'اليوم',month:'شهر',week:'أسبوع',day:'يوم',list:'أجندة'},weekText:'أسبوع',allDayText:'اليوم كله',moreLinkText:'أخرى',noEventsText:'أي أحداث لعرض'};var l2={code:'ar-kw',week:{dow:0,// Sunday is the first day of the week.
doy:12// The week that contains Jan 1st is the first week of the year.
},direction:'rtl',buttonText:{prev:'السابق',next:'التالي',today:'اليوم',month:'شهر',week:'أسبوع',day:'يوم',list:'أجندة'},weekText:'أسبوع',allDayText:'اليوم كله',moreLinkText:'أخرى',noEventsText:'أي أحداث لعرض'};var l3={code:'ar-ly',week:{dow:6,// Saturday is the first day of the week.
doy:12// The week that contains Jan 1st is the first week of the year.
},direction:'rtl',buttonText:{prev:'السابق',next:'التالي',today:'اليوم',month:'شهر',week:'أسبوع',day:'يوم',list:'أجندة'},weekText:'أسبوع',allDayText:'اليوم كله',moreLinkText:'أخرى',noEventsText:'أي أحداث لعرض'};var l4={code:'ar-ma',week:{dow:6,// Saturday is the first day of the week.
doy:12// The week that contains Jan 1st is the first week of the year.
},direction:'rtl',buttonText:{prev:'السابق',next:'التالي',today:'اليوم',month:'شهر',week:'أسبوع',day:'يوم',list:'أجندة'},weekText:'أسبوع',allDayText:'اليوم كله',moreLinkText:'أخرى',noEventsText:'أي أحداث لعرض'};var l5={code:'ar-sa',week:{dow:0,// Sunday is the first day of the week.
doy:6// The week that contains Jan 1st is the first week of the year.
},direction:'rtl',buttonText:{prev:'السابق',next:'التالي',today:'اليوم',month:'شهر',week:'أسبوع',day:'يوم',list:'أجندة'},weekText:'أسبوع',allDayText:'اليوم كله',moreLinkText:'أخرى',noEventsText:'أي أحداث لعرض'};var l6={code:'ar-tn',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},direction:'rtl',buttonText:{prev:'السابق',next:'التالي',today:'اليوم',month:'شهر',week:'أسبوع',day:'يوم',list:'أجندة'},weekText:'أسبوع',allDayText:'اليوم كله',moreLinkText:'أخرى',noEventsText:'أي أحداث لعرض'};var l7={code:'ar',week:{dow:6,// Saturday is the first day of the week.
doy:12// The week that contains Jan 1st is the first week of the year.
},direction:'rtl',buttonText:{prev:'السابق',next:'التالي',today:'اليوم',month:'شهر',week:'أسبوع',day:'يوم',list:'أجندة'},weekText:'أسبوع',allDayText:'اليوم كله',moreLinkText:'أخرى',noEventsText:'أي أحداث لعرض'};var l8={code:'az',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Əvvəl',next:'Sonra',today:'Bu Gün',month:'Ay',week:'Həftə',day:'Gün',list:'Gündəm'},weekText:'Həftə',allDayText:'Bütün Gün',moreLinkText:function(n){return '+ daha çox '+n;},noEventsText:'Göstərmək üçün hadisə yoxdur'};var l9={code:'bg',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'назад',next:'напред',today:'днес',month:'Месец',week:'Седмица',day:'Ден',list:'График'},allDayText:'Цял ден',moreLinkText:function(n){return '+още '+n;},noEventsText:'Няма събития за показване'};var l10={code:'bn',week:{dow:0,// Sunday is the first day of the week.
doy:6// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'পেছনে',next:'সামনে',today:'আজ',month:'মাস',week:'সপ্তাহ',day:'দিন',list:'তালিকা'},weekText:'সপ্তাহ',allDayText:'সারাদিন',moreLinkText:function(n){return '+অন্যান্য '+n;},noEventsText:'কোনো ইভেন্ট নেই'};var l11={code:'bs',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Prošli',next:'Sljedeći',today:'Danas',month:'Mjesec',week:'Sedmica',day:'Dan',list:'Raspored'},weekText:'Sed',allDayText:'Cijeli dan',moreLinkText:function(n){return '+ još '+n;},noEventsText:'Nema događaja za prikazivanje'};var l12={code:'ca',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Anterior',next:'Següent',today:'Avui',month:'Mes',week:'Setmana',day:'Dia',list:'Agenda'},weekText:'Set',allDayText:'Tot el dia',moreLinkText:'més',noEventsText:'No hi ha esdeveniments per mostrar'};var l13={code:'cs',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Dříve',next:'Později',today:'Nyní',month:'Měsíc',week:'Týden',day:'Den',list:'Agenda'},weekText:'Týd',allDayText:'Celý den',moreLinkText:function(n){return '+další: '+n;},noEventsText:'Žádné akce k zobrazení'};var l14={code:'cy',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Blaenorol',next:'Nesaf',today:'Heddiw',year:'Blwyddyn',month:'Mis',week:'Wythnos',day:'Dydd',list:'Rhestr'},weekText:'Wythnos',allDayText:'Trwy\'r dydd',moreLinkText:'Mwy',noEventsText:'Dim digwyddiadau'};var l15={code:'da',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Forrige',next:'Næste',today:'I dag',month:'Måned',week:'Uge',day:'Dag',list:'Agenda'},weekText:'Uge',allDayText:'Hele dagen',moreLinkText:'flere',noEventsText:'Ingen arrangementer at vise'};var l16={code:'de-at',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Zurück',next:'Vor',today:'Heute',year:'Jahr',month:'Monat',week:'Woche',day:'Tag',list:'Terminübersicht'},weekText:'KW',allDayText:'Ganztägig',moreLinkText:function(n){return '+ weitere '+n;},noEventsText:'Keine Ereignisse anzuzeigen'};var l17={code:'de',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Zurück',next:'Vor',today:'Heute',year:'Jahr',month:'Monat',week:'Woche',day:'Tag',list:'Terminübersicht'},weekText:'KW',allDayText:'Ganztägig',moreLinkText:function(n){return '+ weitere '+n;},noEventsText:'Keine Ereignisse anzuzeigen'};var l18={code:'el',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4st is the first week of the year.
},buttonText:{prev:'Προηγούμενος',next:'Επόμενος',today:'Σήμερα',month:'Μήνας',week:'Εβδομάδα',day:'Ημέρα',list:'Ατζέντα'},weekText:'Εβδ',allDayText:'Ολοήμερο',moreLinkText:'περισσότερα',noEventsText:'Δεν υπάρχουν γεγονότα προς εμφάνιση'};var l19={code:'en-au',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};var l20={code:'en-gb',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};var l21={code:'en-nz',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
}};var l22={code:'eo',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Antaŭa',next:'Sekva',today:'Hodiaŭ',month:'Monato',week:'Semajno',day:'Tago',list:'Tagordo'},weekText:'Sm',allDayText:'Tuta tago',moreLinkText:'pli',noEventsText:'Neniuj eventoj por montri'};var l23={code:'es',week:{dow:0,// Sunday is the first day of the week.
doy:6// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Ant',next:'Sig',today:'Hoy',month:'Mes',week:'Semana',day:'Día',list:'Agenda'},weekText:'Sm',allDayText:'Todo el día',moreLinkText:'más',noEventsText:'No hay eventos para mostrar'};var l24={code:'es',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Ant',next:'Sig',today:'Hoy',month:'Mes',week:'Semana',day:'Día',list:'Agenda'},weekText:'Sm',allDayText:'Todo el día',moreLinkText:'más',noEventsText:'No hay eventos para mostrar'};var l25={code:'et',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Eelnev',next:'Järgnev',today:'Täna',month:'Kuu',week:'Nädal',day:'Päev',list:'Päevakord'},weekText:'näd',allDayText:'Kogu päev',moreLinkText:function(n){return '+ veel '+n;},noEventsText:'Kuvamiseks puuduvad sündmused'};var l26={code:'eu',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Aur',next:'Hur',today:'Gaur',month:'Hilabetea',week:'Astea',day:'Eguna',list:'Agenda'},weekText:'As',allDayText:'Egun osoa',moreLinkText:'gehiago',noEventsText:'Ez dago ekitaldirik erakusteko'};var l27={code:'fa',week:{dow:6,// Saturday is the first day of the week.
doy:12// The week that contains Jan 1st is the first week of the year.
},direction:'rtl',buttonText:{prev:'قبلی',next:'بعدی',today:'امروز',month:'ماه',week:'هفته',day:'روز',list:'برنامه'},weekText:'هف',allDayText:'تمام روز',moreLinkText:function(n){return 'بیش از '+n;},noEventsText:'هیچ رویدادی به نمایش'};var l28={code:'fi',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Edellinen',next:'Seuraava',today:'Tänään',month:'Kuukausi',week:'Viikko',day:'Päivä',list:'Tapahtumat'},weekText:'Vk',allDayText:'Koko päivä',moreLinkText:'lisää',noEventsText:'Ei näytettäviä tapahtumia'};var l29={code:'fr',buttonText:{prev:'Précédent',next:'Suivant',today:"Aujourd'hui",year:'Année',month:'Mois',week:'Semaine',day:'Jour',list:'Mon planning'},weekText:'Sem.',allDayText:'Toute la journée',moreLinkText:'en plus',noEventsText:'Aucun événement à afficher'};var l30={code:'fr-ch',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Précédent',next:'Suivant',today:'Courant',year:'Année',month:'Mois',week:'Semaine',day:'Jour',list:'Mon planning'},weekText:'Sm',allDayText:'Toute la journée',moreLinkText:'en plus',noEventsText:'Aucun événement à afficher'};var l31={code:'fr',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Précédent',next:'Suivant',today:"Aujourd'hui",year:'Année',month:'Mois',week:'Semaine',day:'Jour',list:'Planning'},weekText:'Sem.',allDayText:'Toute la journée',moreLinkText:'en plus',noEventsText:'Aucun événement à afficher'};var l32={code:'gl',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Ant',next:'Seg',today:'Hoxe',month:'Mes',week:'Semana',day:'Día',list:'Axenda'},weekText:'Sm',allDayText:'Todo o día',moreLinkText:'máis',noEventsText:'Non hai eventos para amosar'};var l33={code:'he',direction:'rtl',buttonText:{prev:'הקודם',next:'הבא',today:'היום',month:'חודש',week:'שבוע',day:'יום',list:'סדר יום'},allDayText:'כל היום',moreLinkText:'אחר',noEventsText:'אין אירועים להצגה',weekText:'שבוע'};var l34={code:'hi',week:{dow:0,// Sunday is the first day of the week.
doy:6// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'पिछला',next:'अगला',today:'आज',month:'महीना',week:'सप्ताह',day:'दिन',list:'कार्यसूची'},weekText:'हफ्ता',allDayText:'सभी दिन',moreLinkText:function(n){return '+अधिक '+n;},noEventsText:'कोई घटनाओं को प्रदर्शित करने के लिए'};var l35={code:'hr',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Prijašnji',next:'Sljedeći',today:'Danas',month:'Mjesec',week:'Tjedan',day:'Dan',list:'Raspored'},weekText:'Tje',allDayText:'Cijeli dan',moreLinkText:function(n){return '+ još '+n;},noEventsText:'Nema događaja za prikaz'};var l36={code:'hu',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'vissza',next:'előre',today:'ma',month:'Hónap',week:'Hét',day:'Nap',list:'Lista'},weekText:'Hét',allDayText:'Egész nap',moreLinkText:'további',noEventsText:'Nincs megjeleníthető esemény'};var l37={code:'hy-am',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Նախորդ',next:'Հաջորդ',today:'Այսօր',month:'Ամիս',week:'Շաբաթ',day:'Օր',list:'Օրվա ցուցակ'},weekText:'Շաբ',allDayText:'Ամբողջ օր',moreLinkText:function(n){return '+ ևս '+n;},noEventsText:'Բացակայում է իրադարձությունը ցուցադրելու'};var l38={code:'id',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'mundur',next:'maju',today:'hari ini',month:'Bulan',week:'Minggu',day:'Hari',list:'Agenda'},weekText:'Mg',allDayText:'Sehari penuh',moreLinkText:'lebih',noEventsText:'Tidak ada acara untuk ditampilkan'};var l39={code:'is',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Fyrri',next:'Næsti',today:'Í dag',month:'Mánuður',week:'Vika',day:'Dagur',list:'Dagskrá'},weekText:'Vika',allDayText:'Allan daginn',moreLinkText:'meira',noEventsText:'Engir viðburðir til að sýna'};var l40={code:'it',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Prec',next:'Succ',today:'Oggi',month:'Mese',week:'Settimana',day:'Giorno',list:'Agenda'},weekText:'Sm',allDayText:'Tutto il giorno',moreLinkText:function(n){return '+altri '+n;},noEventsText:'Non ci sono eventi da visualizzare'};var l41={code:'ja',buttonText:{prev:'前',next:'次',today:'今日',month:'月',week:'週',day:'日',list:'予定リスト'},weekText:'週',allDayText:'終日',moreLinkText:function(n){return '他 '+n+' 件';},noEventsText:'表示する予定はありません'};var l42={code:'ka',week:{dow:1,doy:7},buttonText:{prev:'წინა',next:'შემდეგი',today:'დღეს',month:'თვე',week:'კვირა',day:'დღე',list:'დღის წესრიგი'},weekText:'კვ',allDayText:'მთელი დღე',moreLinkText:function(n){return '+ კიდევ '+n;},noEventsText:'ღონისძიებები არ არის'};var l43={code:'kk',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Алдыңғы',next:'Келесі',today:'Бүгін',month:'Ай',week:'Апта',day:'Күн',list:'Күн тәртібі'},weekText:'Не',allDayText:'Күні бойы',moreLinkText:function(n){return '+ тағы '+n;},noEventsText:'Көрсету үшін оқиғалар жоқ'};var l44={code:'km',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'មុន',next:'បន្ទាប់',today:'ថ្ងៃនេះ',year:'ឆ្នាំ',month:'ខែ',week:'សប្តាហ៍',day:'ថ្ងៃ',list:'បញ្ជី'},weekText:'សប្តាហ៍',allDayText:'ពេញមួយថ្ងៃ',moreLinkText:'ច្រើនទៀត',noEventsText:'គ្មានព្រឹត្តិការណ៍ត្រូវបង្ហាញ'};var l45={code:'ko',buttonText:{prev:'이전달',next:'다음달',today:'오늘',month:'월',week:'주',day:'일',list:'일정목록'},weekText:'주',allDayText:'종일',moreLinkText:'개',noEventsText:'일정이 없습니다'};var l46={code:'ku',week:{dow:6,// Saturday is the first day of the week.
doy:12// The week that contains Jan 1st is the first week of the year.
},direction:'rtl',buttonText:{prev:'پێشتر',next:'دواتر',today:'ئەمڕو',month:'مانگ',week:'هەفتە',day:'ڕۆژ',list:'بەرنامە'},weekText:'هەفتە',allDayText:'هەموو ڕۆژەکە',moreLinkText:'زیاتر',noEventsText:'هیچ ڕووداوێك نیە'};var l47={code:'lb',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Zréck',next:'Weider',today:'Haut',month:'Mount',week:'Woch',day:'Dag',list:'Terminiwwersiicht'},weekText:'W',allDayText:'Ganzen Dag',moreLinkText:'méi',noEventsText:'Nee Evenementer ze affichéieren'};var l48={code:'lt',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Atgal',next:'Pirmyn',today:'Šiandien',month:'Mėnuo',week:'Savaitė',day:'Diena',list:'Darbotvarkė'},weekText:'SAV',allDayText:'Visą dieną',moreLinkText:'daugiau',noEventsText:'Nėra įvykių rodyti'};var l49={code:'lv',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Iepr.',next:'Nāk.',today:'Šodien',month:'Mēnesis',week:'Nedēļa',day:'Diena',list:'Dienas kārtība'},weekText:'Ned.',allDayText:'Visu dienu',moreLinkText:function(n){return '+vēl '+n;},noEventsText:'Nav notikumu'};var l50={code:'mk',buttonText:{prev:'претходно',next:'следно',today:'Денес',month:'Месец',week:'Недела',day:'Ден',list:'График'},weekText:'Сед',allDayText:'Цел ден',moreLinkText:function(n){return '+повеќе '+n;},noEventsText:'Нема настани за прикажување'};var l51={code:'ms',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Sebelum',next:'Selepas',today:'hari ini',month:'Bulan',week:'Minggu',day:'Hari',list:'Agenda'},weekText:'Mg',allDayText:'Sepanjang hari',moreLinkText:function(n){return 'masih ada '+n+' acara';},noEventsText:'Tiada peristiwa untuk dipaparkan'};var l52={code:'nb',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Forrige',next:'Neste',today:'I dag',month:'Måned',week:'Uke',day:'Dag',list:'Agenda'},weekText:'Uke',allDayText:'Hele dagen',moreLinkText:'til',noEventsText:'Ingen hendelser å vise'};var l53={code:'ne',// code for nepal
week:{dow:7,// Sunday is the first day of the week.
doy:1// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'अघिल्लो',next:'अर्को',today:'आज',month:'महिना',week:'हप्ता',day:'दिन',list:'सूची'},weekText:'हप्ता',allDayText:'दिनभरि',moreLinkText:'थप लिंक',noEventsText:'देखाउनको लागि कुनै घटनाहरू छैनन्'};var l54={code:'nl',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Vorige',next:'Volgende',today:'Vandaag',year:'Jaar',month:'Maand',week:'Week',day:'Dag',list:'Agenda'},allDayText:'Hele dag',moreLinkText:'extra',noEventsText:'Geen evenementen om te laten zien'};var l55={code:'nn',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Førre',next:'Neste',today:'I dag',month:'Månad',week:'Veke',day:'Dag',list:'Agenda'},weekText:'Veke',allDayText:'Heile dagen',moreLinkText:'til',noEventsText:'Ingen hendelser å vise'};var l56={code:'pl',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Poprzedni',next:'Następny',today:'Dziś',month:'Miesiąc',week:'Tydzień',day:'Dzień',list:'Plan dnia'},weekText:'Tydz',allDayText:'Cały dzień',moreLinkText:'więcej',noEventsText:'Brak wydarzeń do wyświetlenia'};var l57={code:'pt-br',buttonText:{prev:'Anterior',next:'Próximo',today:'Hoje',month:'Mês',week:'Semana',day:'Dia',list:'Lista'},weekText:'Sm',allDayText:'dia inteiro',moreLinkText:function(n){return 'mais +'+n;},noEventsText:'Não há eventos para mostrar'};var l58={code:'pt',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Anterior',next:'Seguinte',today:'Hoje',month:'Mês',week:'Semana',day:'Dia',list:'Agenda'},weekText:'Sem',allDayText:'Todo o dia',moreLinkText:'mais',noEventsText:'Não há eventos para mostrar'};var l59={code:'ro',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'precedentă',next:'următoare',today:'Azi',month:'Lună',week:'Săptămână',day:'Zi',list:'Agendă'},weekText:'Săpt',allDayText:'Toată ziua',moreLinkText:function(n){return '+alte '+n;},noEventsText:'Nu există evenimente de afișat'};var l60={code:'ru',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Пред',next:'След',today:'Сегодня',month:'Месяц',week:'Неделя',day:'День',list:'Повестка дня'},weekText:'Нед',allDayText:'Весь день',moreLinkText:function(n){return '+ ещё '+n;},noEventsText:'Нет событий для отображения'};var l61={code:'sk',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Predchádzajúci',next:'Nasledujúci',today:'Dnes',month:'Mesiac',week:'Týždeň',day:'Deň',list:'Rozvrh'},weekText:'Ty',allDayText:'Celý deň',moreLinkText:function(n){return '+ďalšie: '+n;},noEventsText:'Žiadne akcie na zobrazenie'};var l62={code:'sl',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Prejšnji',next:'Naslednji',today:'Trenutni',month:'Mesec',week:'Teden',day:'Dan',list:'Dnevni red'},weekText:'Teden',allDayText:'Ves dan',moreLinkText:'več',noEventsText:'Ni dogodkov za prikaz'};var l63={code:'sm',buttonText:{prev:'Talu ai',next:'Mulimuli atu',today:'Aso nei',month:'Masina',week:'Vaiaso',day:'Aso',list:'Faasologa'},weekText:'Vaiaso',allDayText:'Aso atoa',moreLinkText:'sili atu',noEventsText:'Leai ni mea na tutupu'};var l64={code:'sq',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'mbrapa',next:'Përpara',today:'sot',month:'Muaj',week:'Javë',day:'Ditë',list:'Listë'},weekText:'Ja',allDayText:'Gjithë ditën',moreLinkText:function(n){return '+më tepër '+n;},noEventsText:'Nuk ka evente për të shfaqur'};var l65={code:'sr-cyrl',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Претходна',next:'следећи',today:'Данас',month:'Месец',week:'Недеља',day:'Дан',list:'Планер'},weekText:'Сед',allDayText:'Цео дан',moreLinkText:function(n){return '+ још '+n;},noEventsText:'Нема догађаја за приказ'};var l66={code:'sr',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Prethodna',next:'Sledeći',today:'Danas',month:'Mеsеc',week:'Nеdеlja',day:'Dan',list:'Planеr'},weekText:'Sed',allDayText:'Cеo dan',moreLinkText:function(n){return '+ još '+n;},noEventsText:'Nеma događaja za prikaz'};var l67={code:'sv',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Förra',next:'Nästa',today:'Idag',month:'Månad',week:'Vecka',day:'Dag',list:'Program'},weekText:'v.',allDayText:'Heldag',moreLinkText:'till',noEventsText:'Inga händelser att visa'};var l68={code:'ta-in',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'முந்தைய',next:'அடுத்தது',today:'இன்று',month:'மாதம்',week:'வாரம்',day:'நாள்',list:'தினசரி அட்டவணை'},weekText:'வாரம்',allDayText:'நாள் முழுவதும்',moreLinkText:function(n){return '+ மேலும் '+n;},noEventsText:'காண்பிக்க நிகழ்வுகள் இல்லை'};var l69={code:'th',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'ก่อนหน้า',next:'ถัดไป',prevYear:'ปีก่อนหน้า',nextYear:'ปีถัดไป',year:'ปี',today:'วันนี้',month:'เดือน',week:'สัปดาห์',day:'วัน',list:'กำหนดการ'},weekText:'สัปดาห์',allDayText:'ตลอดวัน',moreLinkText:'เพิ่มเติม',noEventsText:'ไม่มีกิจกรรมที่จะแสดง'};var l70={code:'tr',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'geri',next:'ileri',today:'bugün',month:'Ay',week:'Hafta',day:'Gün',list:'Ajanda'},weekText:'Hf',allDayText:'Tüm gün',moreLinkText:'daha fazla',noEventsText:'Gösterilecek etkinlik yok'};var l71={code:'ug',buttonText:{month:'ئاي',week:'ھەپتە',day:'كۈن',list:'كۈنتەرتىپ'},allDayText:'پۈتۈن كۈن'};var l72={code:'uk',week:{dow:1,// Monday is the first day of the week.
doy:7// The week that contains Jan 1st is the first week of the year.
},buttonText:{prev:'Попередній',next:'далі',today:'Сьогодні',month:'Місяць',week:'Тиждень',day:'День',list:'Порядок денний'},weekText:'Тиж',allDayText:'Увесь день',moreLinkText:function(n){return '+ще '+n+'...';},noEventsText:'Немає подій для відображення'};var l73={code:'uz',buttonText:{month:'Oy',week:'Xafta',day:'Kun',list:'Kun tartibi'},allDayText:"Kun bo'yi",moreLinkText:function(n){return '+ yana '+n;},noEventsText:"Ko'rsatish uchun voqealar yo'q"};var l74={code:'vi',week:{dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'Trước',next:'Tiếp',today:'Hôm nay',month:'Tháng',week:'Tuần',day:'Ngày',list:'Lịch biểu'},weekText:'Tu',allDayText:'Cả ngày',moreLinkText:function(n){return '+ thêm '+n;},noEventsText:'Không có sự kiện để hiển thị'};var l75={code:'zh-cn',week:{// GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
dow:1,// Monday is the first day of the week.
doy:4// The week that contains Jan 4th is the first week of the year.
},buttonText:{prev:'上月',next:'下月',today:'今天',month:'月',week:'周',day:'日',list:'日程'},weekText:'周',allDayText:'全天',moreLinkText:function(n){return '另外 '+n+' 个';},noEventsText:'没有事件显示'};var l76={code:'zh-tw',buttonText:{prev:'上月',next:'下月',today:'今天',month:'月',week:'週',day:'天',list:'活動列表'},weekText:'周',allDayText:'整天',moreLinkText:'顯示更多',noEventsText:'没有任何活動'};/* eslint max-len: off */var localesAll=[l0,l1,l2,l3,l4,l5,l6,l7,l8,l9,l10,l11,l12,l13,l14,l15,l16,l17,l18,l19,l20,l21,l22,l23,l24,l25,l26,l27,l28,l29,l30,l31,l32,l33,l34,l35,l36,l37,l38,l39,l40,l41,l42,l43,l44,l45,l46,l47,l48,l49,l50,l51,l52,l53,l54,l55,l56,l57,l58,l59,l60,l61,l62,l63,l64,l65,l66,l67,l68,l69,l70,l71,l72,l73,l74,l75,l76];exports.default=localesAll;});var allLocales = unwrapExports(localesAll_1);

var daygridStyle = "\n:root {\n  --fc-daygrid-event-dot-width: 8px;\n}\n/* help things clear margins of inner content */\n.fc-daygrid-day-frame,\n.fc-daygrid-day-events,\n.fc-daygrid-event-harness { /* for event top/bottom margins */\n}\n.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-body { /* a <div> that wraps the table */\n    position: relative;\n    z-index: 1; /* container inner z-index's because <tr>s can't do it */\n  }\n.fc .fc-daygrid-day.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n.fc .fc-daygrid-day-frame {\n    position: relative;\n    min-height: 100%; /* seems to work better than `height` because sets height after rows/cells naturally do it */\n  }\n.fc {\n\n  /* cell top */\n\n}\n.fc .fc-daygrid-day-top {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n.fc .fc-day-other .fc-daygrid-day-top {\n    opacity: 0.3;\n  }\n.fc {\n\n  /* day number (within cell top) */\n\n}\n.fc .fc-daygrid-day-number {\n    position: relative;\n    z-index: 4;\n    padding: 4px;\n  }\n.fc {\n\n  /* event container */\n\n}\n.fc .fc-daygrid-day-events {\n    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */\n  }\n.fc {\n\n  /* positioning for balanced vs natural */\n\n}\n.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {\n      position: relative; /* for containing abs positioned event harnesses */\n      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */\n    }\n.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */\n  }\n.fc .fc-daygrid-body-natural .fc-daygrid-day-events {\n      margin-bottom: 1em;\n    }\n.fc {\n\n  /* event harness */\n\n}\n.fc .fc-daygrid-event-harness {\n    position: relative;\n  }\n.fc .fc-daygrid-event-harness-abs {\n    position: absolute;\n    top: 0; /* fallback coords for when cannot yet be computed */\n    left: 0; /* */\n    right: 0; /* */\n  }\n.fc .fc-daygrid-bg-harness {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n.fc {\n\n  /* bg content */\n\n}\n.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }\n.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }\n.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }\n.fc {\n\n  /* events */\n\n}\n.fc .fc-daygrid-event {\n    z-index: 6;\n    margin-top: 1px;\n  }\n.fc .fc-daygrid-event.fc-event-mirror {\n    z-index: 7;\n  }\n.fc {\n\n  /* cell bottom (within day-events) */\n\n}\n.fc .fc-daygrid-day-bottom {\n    font-size: .85em;\n    padding: 2px 3px 0\n  }\n.fc .fc-daygrid-day-bottom:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-more-link {\n    position: relative;\n    z-index: 4;\n    cursor: pointer;\n  }\n.fc {\n\n  /* week number (within frame) */\n\n}\n.fc .fc-daygrid-week-number {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    padding: 2px;\n    min-width: 1.5em;\n    text-align: center;\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    color: #808080;\n    color: var(--fc-neutral-text-color, #808080);\n  }\n.fc {\n\n  /* popover */\n\n}\n.fc .fc-more-popover .fc-popover-body {\n    min-width: 220px;\n    padding: 10px;\n  }\n.fc-direction-ltr .fc-daygrid-event.fc-event-start,\n.fc-direction-rtl .fc-daygrid-event.fc-event-end {\n  margin-left: 2px;\n}\n.fc-direction-ltr .fc-daygrid-event.fc-event-end,\n.fc-direction-rtl .fc-daygrid-event.fc-event-start {\n  margin-right: 2px;\n}\n.fc-direction-ltr .fc-daygrid-week-number {\n    left: 0;\n    border-radius: 0 0 3px 0;\n  }\n.fc-direction-rtl .fc-daygrid-week-number {\n    right: 0;\n    border-radius: 0 0 0 3px;\n  }\n.fc-liquid-hack .fc-daygrid-day-frame {\n    position: static; /* will cause inner absolute stuff to expand to <td> */\n  }\n.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */\n  position: relative; /* for z-indexes assigned later */\n  white-space: nowrap;\n  border-radius: 3px; /* dot event needs this to when selected */\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n}\n/* --- the rectangle (\"block\") style of event --- */\n.fc-daygrid-block-event .fc-event-time {\n    font-weight: bold;\n  }\n.fc-daygrid-block-event .fc-event-time,\n  .fc-daygrid-block-event .fc-event-title {\n    padding: 1px;\n  }\n/* --- the dot style of event --- */\n.fc-daygrid-dot-event {\n  display: flex;\n  align-items: center;\n  padding: 2px 0\n\n}\n.fc-daygrid-dot-event .fc-event-title {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n    overflow: hidden;\n    font-weight: bold;\n  }\n.fc-daygrid-dot-event:hover,\n  .fc-daygrid-dot-event.fc-event-mirror {\n    background: rgba(0, 0, 0, 0.1);\n  }\n.fc-daygrid-dot-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n.fc-daygrid-event-dot { /* the actual dot */\n  margin: 0 4px;\n  box-sizing: content-box;\n  width: 0;\n  height: 0;\n  border: 4px solid #3788d8;\n  border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8);\n  border-radius: 4px;\n  border-radius: calc(var(--fc-daygrid-event-dot-width, 8px) / 2);\n}\n/* --- spacing between time and title --- */\n.fc-direction-ltr .fc-daygrid-event .fc-event-time {\n    margin-right: 3px;\n  }\n.fc-direction-rtl .fc-daygrid-event .fc-event-time {\n    margin-left: 3px;\n  }\n";

// It is responsible for managing width/height.
var TableView=/** @class */function(_super){__extends(TableView,_super);function TableView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.headerElRef=createRef();return _this;}TableView.prototype.renderSimpleLayout=function(headerRowContent,bodyContent){var _a=this,props=_a.props,context=_a.context;var sections=[];var stickyHeaderDates=getStickyHeaderDates(context.options);if(headerRowContent){sections.push({type:'header',key:'header',isSticky:stickyHeaderDates,chunk:{elRef:this.headerElRef,tableClassName:'fc-col-header',rowContent:headerRowContent}});}sections.push({type:'body',key:'body',liquid:true,chunk:{content:bodyContent}});return createElement(ViewRoot,{viewSpec:context.viewSpec},function(rootElRef,classNames){return createElement("div",{ref:rootElRef,className:['fc-daygrid'].concat(classNames).join(' ')},createElement(SimpleScrollGrid,{liquid:!props.isHeightAuto&&!props.forPrint,collapsibleWidth:props.forPrint,cols:[]/* TODO: make optional? */,sections:sections}));});};TableView.prototype.renderHScrollLayout=function(headerRowContent,bodyContent,colCnt,dayMinWidth){var ScrollGrid=this.context.pluginHooks.scrollGridImpl;if(!ScrollGrid){throw new Error('No ScrollGrid implementation');}var _a=this,props=_a.props,context=_a.context;var stickyHeaderDates=!props.forPrint&&getStickyHeaderDates(context.options);var stickyFooterScrollbar=!props.forPrint&&getStickyFooterScrollbar(context.options);var sections=[];if(headerRowContent){sections.push({type:'header',key:'header',isSticky:stickyHeaderDates,chunks:[{key:'main',elRef:this.headerElRef,tableClassName:'fc-col-header',rowContent:headerRowContent}]});}sections.push({type:'body',key:'body',liquid:true,chunks:[{key:'main',content:bodyContent}]});if(stickyFooterScrollbar){sections.push({type:'footer',key:'footer',isSticky:true,chunks:[{key:'main',content:renderScrollShim}]});}return createElement(ViewRoot,{viewSpec:context.viewSpec},function(rootElRef,classNames){return createElement("div",{ref:rootElRef,className:['fc-daygrid'].concat(classNames).join(' ')},createElement(ScrollGrid,{liquid:!props.isHeightAuto&&!props.forPrint,collapsibleWidth:props.forPrint,colGroups:[{cols:[{span:colCnt,minWidth:dayMinWidth}]}],sections:sections}));});};return TableView;}(DateComponent);function splitSegsByRow(segs,rowCnt){var byRow=[];for(var i=0;i<rowCnt;i+=1){byRow[i]=[];}for(var _i=0,segs_1=segs;_i<segs_1.length;_i++){var seg=segs_1[_i];byRow[seg.row].push(seg);}return byRow;}function splitSegsByFirstCol(segs,colCnt){var byCol=[];for(var i=0;i<colCnt;i+=1){byCol[i]=[];}for(var _i=0,segs_2=segs;_i<segs_2.length;_i++){var seg=segs_2[_i];byCol[seg.firstCol].push(seg);}return byCol;}function splitInteractionByRow(ui,rowCnt){var byRow=[];if(!ui){for(var i=0;i<rowCnt;i+=1){byRow[i]=null;}}else {for(var i=0;i<rowCnt;i+=1){byRow[i]={affectedInstances:ui.affectedInstances,isEvent:ui.isEvent,segs:[]};}for(var _i=0,_a=ui.segs;_i<_a.length;_i++){var seg=_a[_i];byRow[seg.row].segs.push(seg);}}return byRow;}var TableCellTop=/** @class */function(_super){__extends(TableCellTop,_super);function TableCellTop(){return _super!==null&&_super.apply(this,arguments)||this;}TableCellTop.prototype.render=function(){var props=this.props;var navLinkAttrs=this.context.options.navLinks?{'data-navlink':buildNavLinkData(props.date),tabIndex:0}:{};return createElement(DayCellContent,{date:props.date,dateProfile:props.dateProfile,todayRange:props.todayRange,showDayNumber:props.showDayNumber,extraHookProps:props.extraHookProps,defaultContent:renderTopInner},function(innerElRef,innerContent){return (innerContent||props.forceDayTop)&&createElement("div",{className:"fc-daygrid-day-top",ref:innerElRef},createElement("a",__assign$1({className:"fc-daygrid-day-number"},navLinkAttrs),innerContent||createElement(Fragment,null,"\u00A0")));});};return TableCellTop;}(BaseComponent);function renderTopInner(props){return props.dayNumberText;}var DEFAULT_TABLE_EVENT_TIME_FORMAT=createFormatter({hour:'numeric',minute:'2-digit',omitZeroMinute:true,meridiem:'narrow'});function hasListItemDisplay(seg){var display=seg.eventRange.ui.display;return display==='list-item'||display==='auto'&&!seg.eventRange.def.allDay&&seg.firstCol===seg.lastCol&&// can't be multi-day
seg.isStart&&// "
seg.isEnd// "
;}var TableBlockEvent=/** @class */function(_super){__extends(TableBlockEvent,_super);function TableBlockEvent(){return _super!==null&&_super.apply(this,arguments)||this;}TableBlockEvent.prototype.render=function(){var props=this.props;return createElement(StandardEvent,__assign$1({},props,{extraClassNames:['fc-daygrid-event','fc-daygrid-block-event','fc-h-event'],defaultTimeFormat:DEFAULT_TABLE_EVENT_TIME_FORMAT,defaultDisplayEventEnd:props.defaultDisplayEventEnd,disableResizing:!props.seg.eventRange.def.allDay}));};return TableBlockEvent;}(BaseComponent);var TableListItemEvent=/** @class */function(_super){__extends(TableListItemEvent,_super);function TableListItemEvent(){return _super!==null&&_super.apply(this,arguments)||this;}TableListItemEvent.prototype.render=function(){var _a=this,props=_a.props,context=_a.context;var timeFormat=context.options.eventTimeFormat||DEFAULT_TABLE_EVENT_TIME_FORMAT;var timeText=buildSegTimeText(props.seg,timeFormat,context,true,props.defaultDisplayEventEnd);return createElement(EventRoot,{seg:props.seg,timeText:timeText,defaultContent:renderInnerContent$1,isDragging:props.isDragging,isResizing:false,isDateSelecting:false,isSelected:props.isSelected,isPast:props.isPast,isFuture:props.isFuture,isToday:props.isToday},function(rootElRef,classNames,innerElRef,innerContent){return(// we don't use styles!
createElement("a",__assign$1({className:['fc-daygrid-event','fc-daygrid-dot-event'].concat(classNames).join(' '),ref:rootElRef},getSegAnchorAttrs(props.seg)),innerContent));});};return TableListItemEvent;}(BaseComponent);function renderInnerContent$1(innerProps){return createElement(Fragment,null,createElement("div",{className:"fc-daygrid-event-dot",style:{borderColor:innerProps.borderColor||innerProps.backgroundColor}}),innerProps.timeText&&createElement("div",{className:"fc-event-time"},innerProps.timeText),createElement("div",{className:"fc-event-title"},innerProps.event.title||createElement(Fragment,null,"\u00A0")));}function getSegAnchorAttrs(seg){var url=seg.eventRange.def.url;return url?{href:url}:{};}var TableCellMoreLink=/** @class */function(_super){__extends(TableCellMoreLink,_super);function TableCellMoreLink(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.compileSegs=memoize(compileSegs);return _this;}TableCellMoreLink.prototype.render=function(){var props=this.props;var _a=this.compileSegs(props.singlePlacements),allSegs=_a.allSegs,invisibleSegs=_a.invisibleSegs;return createElement(MoreLinkRoot,{dateProfile:props.dateProfile,todayRange:props.todayRange,allDayDate:props.allDayDate,moreCnt:props.moreCnt,allSegs:allSegs,hiddenSegs:invisibleSegs,alignmentElRef:props.alignmentElRef,alignGridTop:props.alignGridTop,extraDateSpan:props.extraDateSpan,popoverContent:function(){var isForcedInvisible=(props.eventDrag?props.eventDrag.affectedInstances:null)||(props.eventResize?props.eventResize.affectedInstances:null)||{};return createElement(Fragment,null,allSegs.map(function(seg){var instanceId=seg.eventRange.instance.instanceId;return createElement("div",{className:"fc-daygrid-event-harness",key:instanceId,style:{visibility:isForcedInvisible[instanceId]?'hidden':''}},hasListItemDisplay(seg)?createElement(TableListItemEvent,__assign$1({seg:seg,isDragging:false,isSelected:instanceId===props.eventSelection,defaultDisplayEventEnd:false},getSegMeta(seg,props.todayRange))):createElement(TableBlockEvent,__assign$1({seg:seg,isDragging:false,isResizing:false,isDateSelecting:false,isSelected:instanceId===props.eventSelection,defaultDisplayEventEnd:false},getSegMeta(seg,props.todayRange))));}));}},function(rootElRef,classNames,innerElRef,innerContent,handleClick){return createElement("a",{ref:rootElRef,className:['fc-daygrid-more-link'].concat(classNames).join(' '),onClick:handleClick},innerContent);});};return TableCellMoreLink;}(BaseComponent);function compileSegs(singlePlacements){var allSegs=[];var invisibleSegs=[];for(var _i=0,singlePlacements_1=singlePlacements;_i<singlePlacements_1.length;_i++){var placement=singlePlacements_1[_i];allSegs.push(placement.seg);if(!placement.isVisible){invisibleSegs.push(placement.seg);}}return {allSegs:allSegs,invisibleSegs:invisibleSegs};}var DEFAULT_WEEK_NUM_FORMAT=createFormatter({week:'narrow'});var TableCell=/** @class */function(_super){__extends(TableCell,_super);function TableCell(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.rootElRef=createRef();_this.handleRootEl=function(el){setRef(_this.rootElRef,el);setRef(_this.props.elRef,el);};return _this;}TableCell.prototype.render=function(){var _a=this,props=_a.props,context=_a.context,rootElRef=_a.rootElRef;var options=context.options;var date=props.date,dateProfile=props.dateProfile;var navLinkAttrs=options.navLinks?{'data-navlink':buildNavLinkData(date,'week'),tabIndex:0}:{};return createElement(DayCellRoot,{date:date,dateProfile:dateProfile,todayRange:props.todayRange,showDayNumber:props.showDayNumber,extraHookProps:props.extraHookProps,elRef:this.handleRootEl},function(dayElRef,dayClassNames,rootDataAttrs,isDisabled){return createElement("td",__assign$1({ref:dayElRef,className:['fc-daygrid-day'].concat(dayClassNames,props.extraClassNames||[]).join(' ')},rootDataAttrs,props.extraDataAttrs),createElement("div",{className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",ref:props.innerElRef/* different from hook system! RENAME */},props.showWeekNumber&&createElement(WeekNumberRoot,{date:date,defaultFormat:DEFAULT_WEEK_NUM_FORMAT},function(weekElRef,weekClassNames,innerElRef,innerContent){return createElement("a",__assign$1({ref:weekElRef,className:['fc-daygrid-week-number'].concat(weekClassNames).join(' ')},navLinkAttrs),innerContent);}),!isDisabled&&createElement(TableCellTop,{date:date,dateProfile:dateProfile,showDayNumber:props.showDayNumber,forceDayTop:props.forceDayTop,todayRange:props.todayRange,extraHookProps:props.extraHookProps}),createElement("div",{className:"fc-daygrid-day-events",ref:props.fgContentElRef},props.fgContent,createElement("div",{className:"fc-daygrid-day-bottom",style:{marginTop:props.moreMarginTop}},createElement(TableCellMoreLink,{allDayDate:date,singlePlacements:props.singlePlacements,moreCnt:props.moreCnt,alignmentElRef:rootElRef,alignGridTop:!props.showDayNumber,extraDateSpan:props.extraDateSpan,dateProfile:props.dateProfile,eventSelection:props.eventSelection,eventDrag:props.eventDrag,eventResize:props.eventResize,todayRange:props.todayRange}))),createElement("div",{className:"fc-daygrid-day-bg"},props.bgContent)));});};return TableCell;}(DateComponent);function computeFgSegPlacement(segs,// assumed already sorted
dayMaxEvents,dayMaxEventRows,strictOrder,eventInstanceHeights,maxContentHeight,cells){var hierarchy=new DayGridSegHierarchy();hierarchy.allowReslicing=true;hierarchy.strictOrder=strictOrder;if(dayMaxEvents===true||dayMaxEventRows===true){hierarchy.maxCoord=maxContentHeight;hierarchy.hiddenConsumes=true;}else if(typeof dayMaxEvents==='number'){hierarchy.maxStackCnt=dayMaxEvents;}else if(typeof dayMaxEventRows==='number'){hierarchy.maxStackCnt=dayMaxEventRows;hierarchy.hiddenConsumes=true;}// create segInputs only for segs with known heights
var segInputs=[];var unknownHeightSegs=[];for(var i=0;i<segs.length;i+=1){var seg=segs[i];var instanceId=seg.eventRange.instance.instanceId;var eventHeight=eventInstanceHeights[instanceId];if(eventHeight!=null){segInputs.push({index:i,thickness:eventHeight,span:{start:seg.firstCol,end:seg.lastCol+1}});}else {unknownHeightSegs.push(seg);}}var hiddenEntries=hierarchy.addSegs(segInputs);var segRects=hierarchy.toRects();var _a=placeRects(segRects,segs,cells),singleColPlacements=_a.singleColPlacements,multiColPlacements=_a.multiColPlacements,leftoverMargins=_a.leftoverMargins;var moreCnts=[];var moreMarginTops=[];// add segs with unknown heights
for(var _i=0,unknownHeightSegs_1=unknownHeightSegs;_i<unknownHeightSegs_1.length;_i++){var seg=unknownHeightSegs_1[_i];multiColPlacements[seg.firstCol].push({seg:seg,isVisible:false,isAbsolute:true,absoluteTop:0,marginTop:0});for(var col=seg.firstCol;col<=seg.lastCol;col+=1){singleColPlacements[col].push({seg:resliceSeg(seg,col,col+1,cells),isVisible:false,isAbsolute:false,absoluteTop:0,marginTop:0});}}// add the hidden entries
for(var col=0;col<cells.length;col+=1){moreCnts.push(0);}for(var _b=0,hiddenEntries_1=hiddenEntries;_b<hiddenEntries_1.length;_b++){var hiddenEntry=hiddenEntries_1[_b];var seg=segs[hiddenEntry.index];var hiddenSpan=hiddenEntry.span;multiColPlacements[hiddenSpan.start].push({seg:resliceSeg(seg,hiddenSpan.start,hiddenSpan.end,cells),isVisible:false,isAbsolute:true,absoluteTop:0,marginTop:0});for(var col=hiddenSpan.start;col<hiddenSpan.end;col+=1){moreCnts[col]+=1;singleColPlacements[col].push({seg:resliceSeg(seg,col,col+1,cells),isVisible:false,isAbsolute:false,absoluteTop:0,marginTop:0});}}// deal with leftover margins
for(var col=0;col<cells.length;col+=1){moreMarginTops.push(leftoverMargins[col]);}return {singleColPlacements:singleColPlacements,multiColPlacements:multiColPlacements,moreCnts:moreCnts,moreMarginTops:moreMarginTops};}// rects ordered by top coord, then left
function placeRects(allRects,segs,cells){var rectsByEachCol=groupRectsByEachCol(allRects,cells.length);var singleColPlacements=[];var multiColPlacements=[];var leftoverMargins=[];for(var col=0;col<cells.length;col+=1){var rects=rectsByEachCol[col];// compute all static segs in singlePlacements
var singlePlacements=[];var currentHeight=0;var currentMarginTop=0;for(var _i=0,rects_1=rects;_i<rects_1.length;_i++){var rect=rects_1[_i];var seg=segs[rect.index];singlePlacements.push({seg:resliceSeg(seg,col,col+1,cells),isVisible:true,isAbsolute:false,absoluteTop:rect.levelCoord,marginTop:rect.levelCoord-currentHeight});currentHeight=rect.levelCoord+rect.thickness;}// compute mixed static/absolute segs in multiPlacements
var multiPlacements=[];currentHeight=0;currentMarginTop=0;for(var _a=0,rects_2=rects;_a<rects_2.length;_a++){var rect=rects_2[_a];var seg=segs[rect.index];var isAbsolute=rect.span.end-rect.span.start>1;// multi-column?
var isFirstCol=rect.span.start===col;currentMarginTop+=rect.levelCoord-currentHeight;// amount of space since bottom of previous seg
currentHeight=rect.levelCoord+rect.thickness;// height will now be bottom of current seg
if(isAbsolute){currentMarginTop+=rect.thickness;if(isFirstCol){multiPlacements.push({seg:resliceSeg(seg,rect.span.start,rect.span.end,cells),isVisible:true,isAbsolute:true,absoluteTop:rect.levelCoord,marginTop:0});}}else if(isFirstCol){multiPlacements.push({seg:resliceSeg(seg,rect.span.start,rect.span.end,cells),isVisible:true,isAbsolute:false,absoluteTop:rect.levelCoord,marginTop:currentMarginTop// claim the margin
});currentMarginTop=0;}}singleColPlacements.push(singlePlacements);multiColPlacements.push(multiPlacements);leftoverMargins.push(currentMarginTop);}return {singleColPlacements:singleColPlacements,multiColPlacements:multiColPlacements,leftoverMargins:leftoverMargins};}function groupRectsByEachCol(rects,colCnt){var rectsByEachCol=[];for(var col=0;col<colCnt;col+=1){rectsByEachCol.push([]);}for(var _i=0,rects_3=rects;_i<rects_3.length;_i++){var rect=rects_3[_i];for(var col=rect.span.start;col<rect.span.end;col+=1){rectsByEachCol[col].push(rect);}}return rectsByEachCol;}function resliceSeg(seg,spanStart,spanEnd,cells){if(seg.firstCol===spanStart&&seg.lastCol===spanEnd-1){return seg;}var eventRange=seg.eventRange;var origRange=eventRange.range;var slicedRange=intersectRanges(origRange,{start:cells[spanStart].date,end:addDays(cells[spanEnd-1].date,1)});return __assign$1(__assign$1({},seg),{firstCol:spanStart,lastCol:spanEnd-1,eventRange:{def:eventRange.def,ui:__assign$1(__assign$1({},eventRange.ui),{durationEditable:false}),instance:eventRange.instance,range:slicedRange},isStart:seg.isStart&&slicedRange.start.valueOf()===origRange.start.valueOf(),isEnd:seg.isEnd&&slicedRange.end.valueOf()===origRange.end.valueOf()});}var DayGridSegHierarchy=/** @class */function(_super){__extends(DayGridSegHierarchy,_super);function DayGridSegHierarchy(){var _this=_super!==null&&_super.apply(this,arguments)||this;// config
_this.hiddenConsumes=false;// allows us to keep hidden entries in the hierarchy so they take up space
_this.forceHidden={};return _this;}DayGridSegHierarchy.prototype.addSegs=function(segInputs){var _this=this;var hiddenSegs=_super.prototype.addSegs.call(this,segInputs);var entriesByLevel=this.entriesByLevel;var excludeHidden=function(entry){return !_this.forceHidden[buildEntryKey(entry)];};// remove the forced-hidden segs
for(var level=0;level<entriesByLevel.length;level+=1){entriesByLevel[level]=entriesByLevel[level].filter(excludeHidden);}return hiddenSegs;};DayGridSegHierarchy.prototype.handleInvalidInsertion=function(insertion,entry,hiddenEntries){var _a=this,entriesByLevel=_a.entriesByLevel,forceHidden=_a.forceHidden;var touchingEntry=insertion.touchingEntry,touchingLevel=insertion.touchingLevel,touchingLateral=insertion.touchingLateral;if(this.hiddenConsumes&&touchingEntry){var touchingEntryId=buildEntryKey(touchingEntry);// if not already hidden
if(!forceHidden[touchingEntryId]){if(this.allowReslicing){var placeholderEntry=__assign$1(__assign$1({},touchingEntry),{span:intersectSpans(touchingEntry.span,entry.span)});var placeholderEntryId=buildEntryKey(placeholderEntry);forceHidden[placeholderEntryId]=true;entriesByLevel[touchingLevel][touchingLateral]=placeholderEntry;// replace touchingEntry with our placeholder
this.splitEntry(touchingEntry,entry,hiddenEntries);// split up the touchingEntry, reinsert it
}else {forceHidden[touchingEntryId]=true;hiddenEntries.push(touchingEntry);}}}return _super.prototype.handleInvalidInsertion.call(this,insertion,entry,hiddenEntries);};return DayGridSegHierarchy;}(SegHierarchy);var TableRow=/** @class */function(_super){__extends(TableRow,_super);function TableRow(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.cellElRefs=new RefMap();// the <td>
_this.frameElRefs=new RefMap();// the fc-daygrid-day-frame
_this.fgElRefs=new RefMap();// the fc-daygrid-day-events
_this.segHarnessRefs=new RefMap();// indexed by "instanceId:firstCol"
_this.rootElRef=createRef();_this.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}};return _this;}TableRow.prototype.render=function(){var _this=this;var _a=this,props=_a.props,state=_a.state,context=_a.context;var options=context.options;var colCnt=props.cells.length;var businessHoursByCol=splitSegsByFirstCol(props.businessHourSegs,colCnt);var bgEventSegsByCol=splitSegsByFirstCol(props.bgEventSegs,colCnt);var highlightSegsByCol=splitSegsByFirstCol(this.getHighlightSegs(),colCnt);var mirrorSegsByCol=splitSegsByFirstCol(this.getMirrorSegs(),colCnt);var _b=computeFgSegPlacement(sortEventSegs(props.fgEventSegs,options.eventOrder),props.dayMaxEvents,props.dayMaxEventRows,options.eventOrderStrict,state.eventInstanceHeights,state.maxContentHeight,props.cells),singleColPlacements=_b.singleColPlacements,multiColPlacements=_b.multiColPlacements,moreCnts=_b.moreCnts,moreMarginTops=_b.moreMarginTops;var isForcedInvisible=// TODO: messy way to compute this
props.eventDrag&&props.eventDrag.affectedInstances||props.eventResize&&props.eventResize.affectedInstances||{};return createElement("tr",{ref:this.rootElRef},props.renderIntro&&props.renderIntro(),props.cells.map(function(cell,col){var normalFgNodes=_this.renderFgSegs(col,props.forPrint?singleColPlacements[col]:multiColPlacements[col],props.todayRange,isForcedInvisible);var mirrorFgNodes=_this.renderFgSegs(col,buildMirrorPlacements(mirrorSegsByCol[col],multiColPlacements),props.todayRange,{},Boolean(props.eventDrag),Boolean(props.eventResize),false);return createElement(TableCell,{key:cell.key,elRef:_this.cellElRefs.createRef(cell.key),innerElRef:_this.frameElRefs.createRef(cell.key)/* FF <td> problem, but okay to use for left/right. TODO: rename prop */,dateProfile:props.dateProfile,date:cell.date,showDayNumber:props.showDayNumbers,showWeekNumber:props.showWeekNumbers&&col===0,forceDayTop:props.showWeekNumbers/* even displaying weeknum for row, not necessarily day */,todayRange:props.todayRange,eventSelection:props.eventSelection,eventDrag:props.eventDrag,eventResize:props.eventResize,extraHookProps:cell.extraHookProps,extraDataAttrs:cell.extraDataAttrs,extraClassNames:cell.extraClassNames,extraDateSpan:cell.extraDateSpan,moreCnt:moreCnts[col],moreMarginTop:moreMarginTops[col],singlePlacements:singleColPlacements[col],fgContentElRef:_this.fgElRefs.createRef(cell.key),fgContent:// Fragment scopes the keys
createElement(Fragment,null,createElement(Fragment,null,normalFgNodes),createElement(Fragment,null,mirrorFgNodes)),bgContent:// Fragment scopes the keys
createElement(Fragment,null,_this.renderFillSegs(highlightSegsByCol[col],'highlight'),_this.renderFillSegs(businessHoursByCol[col],'non-business'),_this.renderFillSegs(bgEventSegsByCol[col],'bg-event'))});}));};TableRow.prototype.componentDidMount=function(){this.updateSizing(true);};TableRow.prototype.componentDidUpdate=function(prevProps,prevState){var currentProps=this.props;this.updateSizing(!isPropsEqual(prevProps,currentProps));};TableRow.prototype.getHighlightSegs=function(){var props=this.props;if(props.eventDrag&&props.eventDrag.segs.length){// messy check
return props.eventDrag.segs;}if(props.eventResize&&props.eventResize.segs.length){// messy check
return props.eventResize.segs;}return props.dateSelectionSegs;};TableRow.prototype.getMirrorSegs=function(){var props=this.props;if(props.eventResize&&props.eventResize.segs.length){// messy check
return props.eventResize.segs;}return [];};TableRow.prototype.renderFgSegs=function(col,segPlacements,todayRange,isForcedInvisible,isDragging,isResizing,isDateSelecting){var context=this.context;var eventSelection=this.props.eventSelection;var framePositions=this.state.framePositions;var defaultDisplayEventEnd=this.props.cells.length===1;// colCnt === 1
var isMirror=isDragging||isResizing||isDateSelecting;var nodes=[];if(framePositions){for(var _i=0,segPlacements_1=segPlacements;_i<segPlacements_1.length;_i++){var placement=segPlacements_1[_i];var seg=placement.seg;var instanceId=seg.eventRange.instance.instanceId;var key=instanceId+':'+col;var isVisible=placement.isVisible&&!isForcedInvisible[instanceId];var isAbsolute=placement.isAbsolute;var left='';var right='';if(isAbsolute){if(context.isRtl){right=0;left=framePositions.lefts[seg.lastCol]-framePositions.lefts[seg.firstCol];}else {left=0;right=framePositions.rights[seg.firstCol]-framePositions.rights[seg.lastCol];}}/*
                known bug: events that are force to be list-item but span multiple days still take up space in later columns
                todo: in print view, for multi-day events, don't display title within non-start/end segs
                */nodes.push(createElement("div",{className:'fc-daygrid-event-harness'+(isAbsolute?' fc-daygrid-event-harness-abs':''),key:key,ref:isMirror?null:this.segHarnessRefs.createRef(key),style:{visibility:isVisible?'':'hidden',marginTop:isAbsolute?'':placement.marginTop,top:isAbsolute?placement.absoluteTop:'',left:left,right:right}},hasListItemDisplay(seg)?createElement(TableListItemEvent,__assign$1({seg:seg,isDragging:isDragging,isSelected:instanceId===eventSelection,defaultDisplayEventEnd:defaultDisplayEventEnd},getSegMeta(seg,todayRange))):createElement(TableBlockEvent,__assign$1({seg:seg,isDragging:isDragging,isResizing:isResizing,isDateSelecting:isDateSelecting,isSelected:instanceId===eventSelection,defaultDisplayEventEnd:defaultDisplayEventEnd},getSegMeta(seg,todayRange)))));}}return nodes;};TableRow.prototype.renderFillSegs=function(segs,fillType){var isRtl=this.context.isRtl;var todayRange=this.props.todayRange;var framePositions=this.state.framePositions;var nodes=[];if(framePositions){for(var _i=0,segs_1=segs;_i<segs_1.length;_i++){var seg=segs_1[_i];var leftRightCss=isRtl?{right:0,left:framePositions.lefts[seg.lastCol]-framePositions.lefts[seg.firstCol]}:{left:0,right:framePositions.rights[seg.firstCol]-framePositions.rights[seg.lastCol]};nodes.push(createElement("div",{key:buildEventRangeKey(seg.eventRange),className:"fc-daygrid-bg-harness",style:leftRightCss},fillType==='bg-event'?createElement(BgEvent,__assign$1({seg:seg},getSegMeta(seg,todayRange))):renderFill(fillType)));}}return createElement.apply(void 0,__spreadArray([Fragment,{}],nodes));};TableRow.prototype.updateSizing=function(isExternalSizingChange){var _a=this,props=_a.props,frameElRefs=_a.frameElRefs;if(!props.forPrint&&props.clientWidth!==null// positioning ready?
){if(isExternalSizingChange){var frameEls=props.cells.map(function(cell){return frameElRefs.currentMap[cell.key];});if(frameEls.length){var originEl=this.rootElRef.current;this.setState({framePositions:new PositionCache(originEl,frameEls,true,// isHorizontal
false)});}}var limitByContentHeight=props.dayMaxEvents===true||props.dayMaxEventRows===true;this.setState({eventInstanceHeights:this.queryEventInstanceHeights(),maxContentHeight:limitByContentHeight?this.computeMaxContentHeight():null});}};TableRow.prototype.queryEventInstanceHeights=function(){var segElMap=this.segHarnessRefs.currentMap;var eventInstanceHeights={};// get the max height amongst instance segs
for(var key in segElMap){var height=Math.round(segElMap[key].getBoundingClientRect().height);var instanceId=key.split(':')[0];// deconstruct how renderFgSegs makes the key
eventInstanceHeights[instanceId]=Math.max(eventInstanceHeights[instanceId]||0,height);}return eventInstanceHeights;};TableRow.prototype.computeMaxContentHeight=function(){var firstKey=this.props.cells[0].key;var cellEl=this.cellElRefs.currentMap[firstKey];var fcContainerEl=this.fgElRefs.currentMap[firstKey];return cellEl.getBoundingClientRect().bottom-fcContainerEl.getBoundingClientRect().top;};TableRow.prototype.getCellEls=function(){var elMap=this.cellElRefs.currentMap;return this.props.cells.map(function(cell){return elMap[cell.key];});};return TableRow;}(DateComponent);TableRow.addStateEquality({eventInstanceHeights:isPropsEqual});function buildMirrorPlacements(mirrorSegs,colPlacements){if(!mirrorSegs.length){return [];}var topsByInstanceId=buildAbsoluteTopHash(colPlacements);// TODO: cache this at first render?
return mirrorSegs.map(function(seg){return {seg:seg,isVisible:true,isAbsolute:true,absoluteTop:topsByInstanceId[seg.eventRange.instance.instanceId],marginTop:0};});}function buildAbsoluteTopHash(colPlacements){var topsByInstanceId={};for(var _i=0,colPlacements_1=colPlacements;_i<colPlacements_1.length;_i++){var placements=colPlacements_1[_i];for(var _a=0,placements_1=placements;_a<placements_1.length;_a++){var placement=placements_1[_a];topsByInstanceId[placement.seg.eventRange.instance.instanceId]=placement.absoluteTop;}}return topsByInstanceId;}var Table=/** @class */function(_super){__extends(Table,_super);function Table(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.splitBusinessHourSegs=memoize(splitSegsByRow);_this.splitBgEventSegs=memoize(splitSegsByRow);_this.splitFgEventSegs=memoize(splitSegsByRow);_this.splitDateSelectionSegs=memoize(splitSegsByRow);_this.splitEventDrag=memoize(splitInteractionByRow);_this.splitEventResize=memoize(splitInteractionByRow);_this.rowRefs=new RefMap();_this.handleRootEl=function(rootEl){_this.rootEl=rootEl;if(rootEl){_this.context.registerInteractiveComponent(_this,{el:rootEl,isHitComboAllowed:_this.props.isHitComboAllowed});}else {_this.context.unregisterInteractiveComponent(_this);}};return _this;}Table.prototype.render=function(){var _this=this;var props=this.props;var dateProfile=props.dateProfile,dayMaxEventRows=props.dayMaxEventRows,dayMaxEvents=props.dayMaxEvents,expandRows=props.expandRows;var rowCnt=props.cells.length;var businessHourSegsByRow=this.splitBusinessHourSegs(props.businessHourSegs,rowCnt);var bgEventSegsByRow=this.splitBgEventSegs(props.bgEventSegs,rowCnt);var fgEventSegsByRow=this.splitFgEventSegs(props.fgEventSegs,rowCnt);var dateSelectionSegsByRow=this.splitDateSelectionSegs(props.dateSelectionSegs,rowCnt);var eventDragByRow=this.splitEventDrag(props.eventDrag,rowCnt);var eventResizeByRow=this.splitEventResize(props.eventResize,rowCnt);var limitViaBalanced=dayMaxEvents===true||dayMaxEventRows===true;// if rows can't expand to fill fixed height, can't do balanced-height event limit
// TODO: best place to normalize these options?
if(limitViaBalanced&&!expandRows){limitViaBalanced=false;dayMaxEventRows=null;dayMaxEvents=null;}var classNames=['fc-daygrid-body',limitViaBalanced?'fc-daygrid-body-balanced':'fc-daygrid-body-unbalanced',expandRows?'':'fc-daygrid-body-natural'// will height of one row depend on the others?
];return createElement("div",{className:classNames.join(' '),ref:this.handleRootEl,style:{// these props are important to give this wrapper correct dimensions for interactions
// TODO: if we set it here, can we avoid giving to inner tables?
width:props.clientWidth,minWidth:props.tableMinWidth}},createElement(NowTimer,{unit:"day"},function(nowDate,todayRange){return createElement(Fragment,null,createElement("table",{className:"fc-scrollgrid-sync-table",style:{width:props.clientWidth,minWidth:props.tableMinWidth,height:expandRows?props.clientHeight:''}},props.colGroupNode,createElement("tbody",null,props.cells.map(function(cells,row){return createElement(TableRow,{ref:_this.rowRefs.createRef(row),key:cells.length?cells[0].date.toISOString()/* best? or put key on cell? or use diff formatter? */:row// in case there are no cells (like when resource view is loading)
,showDayNumbers:rowCnt>1,showWeekNumbers:props.showWeekNumbers,todayRange:todayRange,dateProfile:dateProfile,cells:cells,renderIntro:props.renderRowIntro,businessHourSegs:businessHourSegsByRow[row],eventSelection:props.eventSelection,bgEventSegs:bgEventSegsByRow[row].filter(isSegAllDay)/* hack */,fgEventSegs:fgEventSegsByRow[row],dateSelectionSegs:dateSelectionSegsByRow[row],eventDrag:eventDragByRow[row],eventResize:eventResizeByRow[row],dayMaxEvents:dayMaxEvents,dayMaxEventRows:dayMaxEventRows,clientWidth:props.clientWidth,clientHeight:props.clientHeight,forPrint:props.forPrint});}))));}));};// Hit System
// ----------------------------------------------------------------------------------------------------
Table.prototype.prepareHits=function(){this.rowPositions=new PositionCache(this.rootEl,this.rowRefs.collect().map(function(rowObj){return rowObj.getCellEls()[0];}),// first cell el in each row. TODO: not optimal
false,true);this.colPositions=new PositionCache(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),// cell els in first row
true,// horizontal
false);};Table.prototype.queryHit=function(positionLeft,positionTop){var _a=this,colPositions=_a.colPositions,rowPositions=_a.rowPositions;var col=colPositions.leftToIndex(positionLeft);var row=rowPositions.topToIndex(positionTop);if(row!=null&&col!=null){var cell=this.props.cells[row][col];return {dateProfile:this.props.dateProfile,dateSpan:__assign$1({range:this.getCellRange(row,col),allDay:true},cell.extraDateSpan),dayEl:this.getCellEl(row,col),rect:{left:colPositions.lefts[col],right:colPositions.rights[col],top:rowPositions.tops[row],bottom:rowPositions.bottoms[row]},layer:0};}return null;};Table.prototype.getCellEl=function(row,col){return this.rowRefs.currentMap[row].getCellEls()[col];// TODO: not optimal
};Table.prototype.getCellRange=function(row,col){var start=this.props.cells[row][col].date;var end=addDays(start,1);return {start:start,end:end};};return Table;}(DateComponent);function isSegAllDay(seg){return seg.eventRange.def.allDay;}var DayTableSlicer=/** @class */function(_super){__extends(DayTableSlicer,_super);function DayTableSlicer(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.forceDayIfListItem=true;return _this;}DayTableSlicer.prototype.sliceRange=function(dateRange,dayTableModel){return dayTableModel.sliceRange(dateRange);};return DayTableSlicer;}(Slicer);var DayTable=/** @class */function(_super){__extends(DayTable,_super);function DayTable(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.slicer=new DayTableSlicer();_this.tableRef=createRef();return _this;}DayTable.prototype.render=function(){var _a=this,props=_a.props,context=_a.context;return createElement(Table,__assign$1({ref:this.tableRef},this.slicer.sliceProps(props,props.dateProfile,props.nextDayThreshold,context,props.dayTableModel),{dateProfile:props.dateProfile,cells:props.dayTableModel.cells,colGroupNode:props.colGroupNode,tableMinWidth:props.tableMinWidth,renderRowIntro:props.renderRowIntro,dayMaxEvents:props.dayMaxEvents,dayMaxEventRows:props.dayMaxEventRows,showWeekNumbers:props.showWeekNumbers,expandRows:props.expandRows,headerAlignElRef:props.headerAlignElRef,clientWidth:props.clientWidth,clientHeight:props.clientHeight,forPrint:props.forPrint}));};return DayTable;}(DateComponent);var DayTableView=/** @class */function(_super){__extends(DayTableView,_super);function DayTableView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.buildDayTableModel=memoize(buildDayTableModel);_this.headerRef=createRef();_this.tableRef=createRef();return _this;}DayTableView.prototype.render=function(){var _this=this;var _a=this.context,options=_a.options,dateProfileGenerator=_a.dateProfileGenerator;var props=this.props;var dayTableModel=this.buildDayTableModel(props.dateProfile,dateProfileGenerator);var headerContent=options.dayHeaders&&createElement(DayHeader,{ref:this.headerRef,dateProfile:props.dateProfile,dates:dayTableModel.headerDates,datesRepDistinctDays:dayTableModel.rowCnt===1});var bodyContent=function(contentArg){return createElement(DayTable,{ref:_this.tableRef,dateProfile:props.dateProfile,dayTableModel:dayTableModel,businessHours:props.businessHours,dateSelection:props.dateSelection,eventStore:props.eventStore,eventUiBases:props.eventUiBases,eventSelection:props.eventSelection,eventDrag:props.eventDrag,eventResize:props.eventResize,nextDayThreshold:options.nextDayThreshold,colGroupNode:contentArg.tableColGroupNode,tableMinWidth:contentArg.tableMinWidth,dayMaxEvents:options.dayMaxEvents,dayMaxEventRows:options.dayMaxEventRows,showWeekNumbers:options.weekNumbers,expandRows:!props.isHeightAuto,headerAlignElRef:_this.headerElRef,clientWidth:contentArg.clientWidth,clientHeight:contentArg.clientHeight,forPrint:props.forPrint});};return options.dayMinWidth?this.renderHScrollLayout(headerContent,bodyContent,dayTableModel.colCnt,options.dayMinWidth):this.renderSimpleLayout(headerContent,bodyContent);};return DayTableView;}(TableView);function buildDayTableModel(dateProfile,dateProfileGenerator){var daySeries=new DaySeriesModel(dateProfile.renderRange,dateProfileGenerator);return new DayTableModel(daySeries,/year|month|week/.test(dateProfile.currentRangeUnit));}var TableDateProfileGenerator=/** @class */function(_super){__extends(TableDateProfileGenerator,_super);function TableDateProfileGenerator(){return _super!==null&&_super.apply(this,arguments)||this;}// Computes the date range that will be rendered.
TableDateProfileGenerator.prototype.buildRenderRange=function(currentRange,currentRangeUnit,isRangeAllDay){var dateEnv=this.props.dateEnv;var renderRange=_super.prototype.buildRenderRange.call(this,currentRange,currentRangeUnit,isRangeAllDay);var start=renderRange.start;var end=renderRange.end;var endOfWeek;// year and month views should be aligned with weeks. this is already done for week
if(/^(year|month)$/.test(currentRangeUnit)){start=dateEnv.startOfWeek(start);// make end-of-week if not already
endOfWeek=dateEnv.startOfWeek(end);if(endOfWeek.valueOf()!==end.valueOf()){end=addWeeks(endOfWeek,1);}}// ensure 6 weeks
if(this.props.monthMode&&this.props.fixedWeekCount){var rowCnt=Math.ceil(// could be partial weeks due to hiddenDays
diffWeeks(start,end));end=addWeeks(end,6-rowCnt);}return {start:start,end:end};};return TableDateProfileGenerator;}(DateProfileGenerator);var main$2=createPlugin({initialView:'dayGridMonth',views:{dayGrid:{component:DayTableView,dateProfileGeneratorClass:TableDateProfileGenerator},dayGridDay:{type:'dayGrid',duration:{days:1}},dayGridWeek:{type:'dayGrid',duration:{weeks:1}},dayGridMonth:{type:'dayGrid',duration:{months:1},monthMode:true,fixedWeekCount:true}}});

config.touchMouseIgnoreWait=500;var ignoreMouseDepth=0;var listenerCnt=0;var isWindowTouchMoveCancelled=false;/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/var PointerDragging=/** @class */function(){function PointerDragging(containerEl){var _this=this;this.subjectEl=null;// options that can be directly assigned by caller
this.selector='';// will cause subjectEl in all emitted events to be this element
this.handleSelector='';this.shouldIgnoreMove=false;this.shouldWatchScroll=true;// for simulating pointermove on scroll
// internal states
this.isDragging=false;this.isTouchDragging=false;this.wasTouchScroll=false;// Mouse
// ----------------------------------------------------------------------------------------------------
this.handleMouseDown=function(ev){if(!_this.shouldIgnoreMouse()&&isPrimaryMouseButton(ev)&&_this.tryStart(ev)){var pev=_this.createEventFromMouse(ev,true);_this.emitter.trigger('pointerdown',pev);_this.initScrollWatch(pev);if(!_this.shouldIgnoreMove){document.addEventListener('mousemove',_this.handleMouseMove);}document.addEventListener('mouseup',_this.handleMouseUp);}};this.handleMouseMove=function(ev){var pev=_this.createEventFromMouse(ev);_this.recordCoords(pev);_this.emitter.trigger('pointermove',pev);};this.handleMouseUp=function(ev){document.removeEventListener('mousemove',_this.handleMouseMove);document.removeEventListener('mouseup',_this.handleMouseUp);_this.emitter.trigger('pointerup',_this.createEventFromMouse(ev));_this.cleanup();// call last so that pointerup has access to props
};// Touch
// ----------------------------------------------------------------------------------------------------
this.handleTouchStart=function(ev){if(_this.tryStart(ev)){_this.isTouchDragging=true;var pev=_this.createEventFromTouch(ev,true);_this.emitter.trigger('pointerdown',pev);_this.initScrollWatch(pev);// unlike mouse, need to attach to target, not document
// https://stackoverflow.com/a/45760014
var targetEl=ev.target;if(!_this.shouldIgnoreMove){targetEl.addEventListener('touchmove',_this.handleTouchMove);}targetEl.addEventListener('touchend',_this.handleTouchEnd);targetEl.addEventListener('touchcancel',_this.handleTouchEnd);// treat it as a touch end
// attach a handler to get called when ANY scroll action happens on the page.
// this was impossible to do with normal on/off because 'scroll' doesn't bubble.
// http://stackoverflow.com/a/32954565/96342
window.addEventListener('scroll',_this.handleTouchScroll,true);}};this.handleTouchMove=function(ev){var pev=_this.createEventFromTouch(ev);_this.recordCoords(pev);_this.emitter.trigger('pointermove',pev);};this.handleTouchEnd=function(ev){if(_this.isDragging){// done to guard against touchend followed by touchcancel
var targetEl=ev.target;targetEl.removeEventListener('touchmove',_this.handleTouchMove);targetEl.removeEventListener('touchend',_this.handleTouchEnd);targetEl.removeEventListener('touchcancel',_this.handleTouchEnd);window.removeEventListener('scroll',_this.handleTouchScroll,true);// useCaptured=true
_this.emitter.trigger('pointerup',_this.createEventFromTouch(ev));_this.cleanup();// call last so that pointerup has access to props
_this.isTouchDragging=false;startIgnoringMouse();}};this.handleTouchScroll=function(){_this.wasTouchScroll=true;};this.handleScroll=function(ev){if(!_this.shouldIgnoreMove){var pageX=window.pageXOffset-_this.prevScrollX+_this.prevPageX;var pageY=window.pageYOffset-_this.prevScrollY+_this.prevPageY;_this.emitter.trigger('pointermove',{origEvent:ev,isTouch:_this.isTouchDragging,subjectEl:_this.subjectEl,pageX:pageX,pageY:pageY,deltaX:pageX-_this.origPageX,deltaY:pageY-_this.origPageY});}};this.containerEl=containerEl;this.emitter=new Emitter();containerEl.addEventListener('mousedown',this.handleMouseDown);containerEl.addEventListener('touchstart',this.handleTouchStart,{passive:true});listenerCreated();}PointerDragging.prototype.destroy=function(){this.containerEl.removeEventListener('mousedown',this.handleMouseDown);this.containerEl.removeEventListener('touchstart',this.handleTouchStart,{passive:true});listenerDestroyed();};PointerDragging.prototype.tryStart=function(ev){var subjectEl=this.querySubjectEl(ev);var downEl=ev.target;if(subjectEl&&(!this.handleSelector||elementClosest(downEl,this.handleSelector))){this.subjectEl=subjectEl;this.isDragging=true;// do this first so cancelTouchScroll will work
this.wasTouchScroll=false;return true;}return false;};PointerDragging.prototype.cleanup=function(){isWindowTouchMoveCancelled=false;this.isDragging=false;this.subjectEl=null;// keep wasTouchScroll around for later access
this.destroyScrollWatch();};PointerDragging.prototype.querySubjectEl=function(ev){if(this.selector){return elementClosest(ev.target,this.selector);}return this.containerEl;};PointerDragging.prototype.shouldIgnoreMouse=function(){return ignoreMouseDepth||this.isTouchDragging;};// can be called by user of this class, to cancel touch-based scrolling for the current drag
PointerDragging.prototype.cancelTouchScroll=function(){if(this.isDragging){isWindowTouchMoveCancelled=true;}};// Scrolling that simulates pointermoves
// ----------------------------------------------------------------------------------------------------
PointerDragging.prototype.initScrollWatch=function(ev){if(this.shouldWatchScroll){this.recordCoords(ev);window.addEventListener('scroll',this.handleScroll,true);// useCapture=true
}};PointerDragging.prototype.recordCoords=function(ev){if(this.shouldWatchScroll){this.prevPageX=ev.pageX;this.prevPageY=ev.pageY;this.prevScrollX=window.pageXOffset;this.prevScrollY=window.pageYOffset;}};PointerDragging.prototype.destroyScrollWatch=function(){if(this.shouldWatchScroll){window.removeEventListener('scroll',this.handleScroll,true);// useCaptured=true
}};// Event Normalization
// ----------------------------------------------------------------------------------------------------
PointerDragging.prototype.createEventFromMouse=function(ev,isFirst){var deltaX=0;var deltaY=0;// TODO: repeat code
if(isFirst){this.origPageX=ev.pageX;this.origPageY=ev.pageY;}else {deltaX=ev.pageX-this.origPageX;deltaY=ev.pageY-this.origPageY;}return {origEvent:ev,isTouch:false,subjectEl:this.subjectEl,pageX:ev.pageX,pageY:ev.pageY,deltaX:deltaX,deltaY:deltaY};};PointerDragging.prototype.createEventFromTouch=function(ev,isFirst){var touches=ev.touches;var pageX;var pageY;var deltaX=0;var deltaY=0;// if touch coords available, prefer,
// because FF would give bad ev.pageX ev.pageY
if(touches&&touches.length){pageX=touches[0].pageX;pageY=touches[0].pageY;}else {pageX=ev.pageX;pageY=ev.pageY;}// TODO: repeat code
if(isFirst){this.origPageX=pageX;this.origPageY=pageY;}else {deltaX=pageX-this.origPageX;deltaY=pageY-this.origPageY;}return {origEvent:ev,isTouch:true,subjectEl:this.subjectEl,pageX:pageX,pageY:pageY,deltaX:deltaX,deltaY:deltaY};};return PointerDragging;}();// Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
function isPrimaryMouseButton(ev){return ev.button===0&&!ev.ctrlKey;}// Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------
function startIgnoringMouse(){ignoreMouseDepth+=1;setTimeout(function(){ignoreMouseDepth-=1;},config.touchMouseIgnoreWait);}// We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------
function listenerCreated(){listenerCnt+=1;if(listenerCnt===1){window.addEventListener('touchmove',onWindowTouchMove,{passive:false});}}function listenerDestroyed(){listenerCnt-=1;if(!listenerCnt){window.removeEventListener('touchmove',onWindowTouchMove,{passive:false});}}function onWindowTouchMove(ev){if(isWindowTouchMoveCancelled){ev.preventDefault();}}/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/var ElementMirror=/** @class */function(){function ElementMirror(){this.isVisible=false;// must be explicitly enabled
this.sourceEl=null;this.mirrorEl=null;this.sourceElRect=null;// screen coords relative to viewport
// options that can be set directly by caller
this.parentNode=document.body;// HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
this.zIndex=9999;this.revertDuration=0;}ElementMirror.prototype.start=function(sourceEl,pageX,pageY){this.sourceEl=sourceEl;this.sourceElRect=this.sourceEl.getBoundingClientRect();this.origScreenX=pageX-window.pageXOffset;this.origScreenY=pageY-window.pageYOffset;this.deltaX=0;this.deltaY=0;this.updateElPosition();};ElementMirror.prototype.handleMove=function(pageX,pageY){this.deltaX=pageX-window.pageXOffset-this.origScreenX;this.deltaY=pageY-window.pageYOffset-this.origScreenY;this.updateElPosition();};// can be called before start
ElementMirror.prototype.setIsVisible=function(bool){if(bool){if(!this.isVisible){if(this.mirrorEl){this.mirrorEl.style.display='';}this.isVisible=bool;// needs to happen before updateElPosition
this.updateElPosition();// because was not updating the position while invisible
}}else if(this.isVisible){if(this.mirrorEl){this.mirrorEl.style.display='none';}this.isVisible=bool;}};// always async
ElementMirror.prototype.stop=function(needsRevertAnimation,callback){var _this=this;var done=function(){_this.cleanup();callback();};if(needsRevertAnimation&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(// if 0, transition won't work
this.deltaX||this.deltaY)// if same coords, transition won't work
){this.doRevertAnimation(done,this.revertDuration);}else {setTimeout(done,0);}};ElementMirror.prototype.doRevertAnimation=function(callback,revertDuration){var mirrorEl=this.mirrorEl;var finalSourceElRect=this.sourceEl.getBoundingClientRect();// because autoscrolling might have happened
mirrorEl.style.transition='top '+revertDuration+'ms,'+'left '+revertDuration+'ms';applyStyle(mirrorEl,{left:finalSourceElRect.left,top:finalSourceElRect.top});whenTransitionDone(mirrorEl,function(){mirrorEl.style.transition='';callback();});};ElementMirror.prototype.cleanup=function(){if(this.mirrorEl){removeElement(this.mirrorEl);this.mirrorEl=null;}this.sourceEl=null;};ElementMirror.prototype.updateElPosition=function(){if(this.sourceEl&&this.isVisible){applyStyle(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY});}};ElementMirror.prototype.getMirrorEl=function(){var sourceElRect=this.sourceElRect;var mirrorEl=this.mirrorEl;if(!mirrorEl){mirrorEl=this.mirrorEl=this.sourceEl.cloneNode(true);// cloneChildren=true
// we don't want long taps or any mouse interaction causing selection/menus.
// would use preventSelection(), but that prevents selectstart, causing problems.
mirrorEl.classList.add('fc-unselectable');mirrorEl.classList.add('fc-event-dragging');applyStyle(mirrorEl,{position:'fixed',zIndex:this.zIndex,visibility:'',boxSizing:'border-box',width:sourceElRect.right-sourceElRect.left,height:sourceElRect.bottom-sourceElRect.top,right:'auto',bottom:'auto',margin:0});this.parentNode.appendChild(mirrorEl);}return mirrorEl;};return ElementMirror;}();/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/var ScrollGeomCache=/** @class */function(_super){__extends(ScrollGeomCache,_super);function ScrollGeomCache(scrollController,doesListening){var _this=_super.call(this)||this;_this.handleScroll=function(){_this.scrollTop=_this.scrollController.getScrollTop();_this.scrollLeft=_this.scrollController.getScrollLeft();_this.handleScrollChange();};_this.scrollController=scrollController;_this.doesListening=doesListening;_this.scrollTop=_this.origScrollTop=scrollController.getScrollTop();_this.scrollLeft=_this.origScrollLeft=scrollController.getScrollLeft();_this.scrollWidth=scrollController.getScrollWidth();_this.scrollHeight=scrollController.getScrollHeight();_this.clientWidth=scrollController.getClientWidth();_this.clientHeight=scrollController.getClientHeight();_this.clientRect=_this.computeClientRect();// do last in case it needs cached values
if(_this.doesListening){_this.getEventTarget().addEventListener('scroll',_this.handleScroll);}return _this;}ScrollGeomCache.prototype.destroy=function(){if(this.doesListening){this.getEventTarget().removeEventListener('scroll',this.handleScroll);}};ScrollGeomCache.prototype.getScrollTop=function(){return this.scrollTop;};ScrollGeomCache.prototype.getScrollLeft=function(){return this.scrollLeft;};ScrollGeomCache.prototype.setScrollTop=function(top){this.scrollController.setScrollTop(top);if(!this.doesListening){// we are not relying on the element to normalize out-of-bounds scroll values
// so we need to sanitize ourselves
this.scrollTop=Math.max(Math.min(top,this.getMaxScrollTop()),0);this.handleScrollChange();}};ScrollGeomCache.prototype.setScrollLeft=function(top){this.scrollController.setScrollLeft(top);if(!this.doesListening){// we are not relying on the element to normalize out-of-bounds scroll values
// so we need to sanitize ourselves
this.scrollLeft=Math.max(Math.min(top,this.getMaxScrollLeft()),0);this.handleScrollChange();}};ScrollGeomCache.prototype.getClientWidth=function(){return this.clientWidth;};ScrollGeomCache.prototype.getClientHeight=function(){return this.clientHeight;};ScrollGeomCache.prototype.getScrollWidth=function(){return this.scrollWidth;};ScrollGeomCache.prototype.getScrollHeight=function(){return this.scrollHeight;};ScrollGeomCache.prototype.handleScrollChange=function(){};return ScrollGeomCache;}(ScrollController);var ElementScrollGeomCache=/** @class */function(_super){__extends(ElementScrollGeomCache,_super);function ElementScrollGeomCache(el,doesListening){return _super.call(this,new ElementScrollController(el),doesListening)||this;}ElementScrollGeomCache.prototype.getEventTarget=function(){return this.scrollController.el;};ElementScrollGeomCache.prototype.computeClientRect=function(){return computeInnerRect(this.scrollController.el);};return ElementScrollGeomCache;}(ScrollGeomCache);var WindowScrollGeomCache=/** @class */function(_super){__extends(WindowScrollGeomCache,_super);function WindowScrollGeomCache(doesListening){return _super.call(this,new WindowScrollController(),doesListening)||this;}WindowScrollGeomCache.prototype.getEventTarget=function(){return window;};WindowScrollGeomCache.prototype.computeClientRect=function(){return {left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight};};// the window is the only scroll object that changes it's rectangle relative
// to the document's topleft as it scrolls
WindowScrollGeomCache.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect();};return WindowScrollGeomCache;}(ScrollGeomCache);// If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance
var getTime=typeof performance==='function'?performance.now:Date.now;/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/var AutoScroller=/** @class */function(){function AutoScroller(){var _this=this;// options that can be set by caller
this.isEnabled=true;this.scrollQuery=[window,'.fc-scroller'];this.edgeThreshold=50;// pixels
this.maxVelocity=300;// pixels per second
// internal state
this.pointerScreenX=null;this.pointerScreenY=null;this.isAnimating=false;this.scrollCaches=null;// protect against the initial pointerdown being too close to an edge and starting the scroll
this.everMovedUp=false;this.everMovedDown=false;this.everMovedLeft=false;this.everMovedRight=false;this.animate=function(){if(_this.isAnimating){// wasn't cancelled between animation calls
var edge=_this.computeBestEdge(_this.pointerScreenX+window.pageXOffset,_this.pointerScreenY+window.pageYOffset);if(edge){var now=getTime();_this.handleSide(edge,(now-_this.msSinceRequest)/1000);_this.requestAnimation(now);}else {_this.isAnimating=false;// will stop animation
}}};}AutoScroller.prototype.start=function(pageX,pageY,scrollStartEl){if(this.isEnabled){this.scrollCaches=this.buildCaches(scrollStartEl);this.pointerScreenX=null;this.pointerScreenY=null;this.everMovedUp=false;this.everMovedDown=false;this.everMovedLeft=false;this.everMovedRight=false;this.handleMove(pageX,pageY);}};AutoScroller.prototype.handleMove=function(pageX,pageY){if(this.isEnabled){var pointerScreenX=pageX-window.pageXOffset;var pointerScreenY=pageY-window.pageYOffset;var yDelta=this.pointerScreenY===null?0:pointerScreenY-this.pointerScreenY;var xDelta=this.pointerScreenX===null?0:pointerScreenX-this.pointerScreenX;if(yDelta<0){this.everMovedUp=true;}else if(yDelta>0){this.everMovedDown=true;}if(xDelta<0){this.everMovedLeft=true;}else if(xDelta>0){this.everMovedRight=true;}this.pointerScreenX=pointerScreenX;this.pointerScreenY=pointerScreenY;if(!this.isAnimating){this.isAnimating=true;this.requestAnimation(getTime());}}};AutoScroller.prototype.stop=function(){if(this.isEnabled){this.isAnimating=false;// will stop animation
for(var _i=0,_a=this.scrollCaches;_i<_a.length;_i++){var scrollCache=_a[_i];scrollCache.destroy();}this.scrollCaches=null;}};AutoScroller.prototype.requestAnimation=function(now){this.msSinceRequest=now;requestAnimationFrame(this.animate);};AutoScroller.prototype.handleSide=function(edge,seconds){var scrollCache=edge.scrollCache;var edgeThreshold=this.edgeThreshold;var invDistance=edgeThreshold-edge.distance;var velocity=// the closer to the edge, the faster we scroll
invDistance*invDistance/(edgeThreshold*edgeThreshold)*// quadratic
this.maxVelocity*seconds;var sign=1;switch(edge.name){case'left':sign=-1;// falls through
case'right':scrollCache.setScrollLeft(scrollCache.getScrollLeft()+velocity*sign);break;case'top':sign=-1;// falls through
case'bottom':scrollCache.setScrollTop(scrollCache.getScrollTop()+velocity*sign);break;}};// left/top are relative to document topleft
AutoScroller.prototype.computeBestEdge=function(left,top){var edgeThreshold=this.edgeThreshold;var bestSide=null;for(var _i=0,_a=this.scrollCaches;_i<_a.length;_i++){var scrollCache=_a[_i];var rect=scrollCache.clientRect;var leftDist=left-rect.left;var rightDist=rect.right-left;var topDist=top-rect.top;var bottomDist=rect.bottom-top;// completely within the rect?
if(leftDist>=0&&rightDist>=0&&topDist>=0&&bottomDist>=0){if(topDist<=edgeThreshold&&this.everMovedUp&&scrollCache.canScrollUp()&&(!bestSide||bestSide.distance>topDist)){bestSide={scrollCache:scrollCache,name:'top',distance:topDist};}if(bottomDist<=edgeThreshold&&this.everMovedDown&&scrollCache.canScrollDown()&&(!bestSide||bestSide.distance>bottomDist)){bestSide={scrollCache:scrollCache,name:'bottom',distance:bottomDist};}if(leftDist<=edgeThreshold&&this.everMovedLeft&&scrollCache.canScrollLeft()&&(!bestSide||bestSide.distance>leftDist)){bestSide={scrollCache:scrollCache,name:'left',distance:leftDist};}if(rightDist<=edgeThreshold&&this.everMovedRight&&scrollCache.canScrollRight()&&(!bestSide||bestSide.distance>rightDist)){bestSide={scrollCache:scrollCache,name:'right',distance:rightDist};}}}return bestSide;};AutoScroller.prototype.buildCaches=function(scrollStartEl){return this.queryScrollEls(scrollStartEl).map(function(el){if(el===window){return new WindowScrollGeomCache(false);// false = don't listen to user-generated scrolls
}return new ElementScrollGeomCache(el,false);// false = don't listen to user-generated scrolls
});};AutoScroller.prototype.queryScrollEls=function(scrollStartEl){var els=[];for(var _i=0,_a=this.scrollQuery;_i<_a.length;_i++){var query=_a[_i];if(typeof query==='object'){els.push(query);}else {els.push.apply(els,Array.prototype.slice.call(getElRoot(scrollStartEl).querySelectorAll(query)));}}return els;};return AutoScroller;}();/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/var FeaturefulElementDragging=/** @class */function(_super){__extends(FeaturefulElementDragging,_super);function FeaturefulElementDragging(containerEl,selector){var _this=_super.call(this,containerEl)||this;_this.containerEl=containerEl;// options that can be directly set by caller
// the caller can also set the PointerDragging's options as well
_this.delay=null;_this.minDistance=0;_this.touchScrollAllowed=true;// prevents drag from starting and blocks scrolling during drag
_this.mirrorNeedsRevert=false;_this.isInteracting=false;// is the user validly moving the pointer? lasts until pointerup
_this.isDragging=false;// is it INTENTFULLY dragging? lasts until after revert animation
_this.isDelayEnded=false;_this.isDistanceSurpassed=false;_this.delayTimeoutId=null;_this.onPointerDown=function(ev){if(!_this.isDragging){// so new drag doesn't happen while revert animation is going
_this.isInteracting=true;_this.isDelayEnded=false;_this.isDistanceSurpassed=false;preventSelection(document.body);preventContextMenu(document.body);// prevent links from being visited if there's an eventual drag.
// also prevents selection in older browsers (maybe?).
// not necessary for touch, besides, browser would complain about passiveness.
if(!ev.isTouch){ev.origEvent.preventDefault();}_this.emitter.trigger('pointerdown',ev);if(_this.isInteracting&&// not destroyed via pointerdown handler
!_this.pointer.shouldIgnoreMove){// actions related to initiating dragstart+dragmove+dragend...
_this.mirror.setIsVisible(false);// reset. caller must set-visible
_this.mirror.start(ev.subjectEl,ev.pageX,ev.pageY);// must happen on first pointer down
_this.startDelay(ev);if(!_this.minDistance){_this.handleDistanceSurpassed(ev);}}}};_this.onPointerMove=function(ev){if(_this.isInteracting){_this.emitter.trigger('pointermove',ev);if(!_this.isDistanceSurpassed){var minDistance=_this.minDistance;var distanceSq=void 0;// current distance from the origin, squared
var deltaX=ev.deltaX,deltaY=ev.deltaY;distanceSq=deltaX*deltaX+deltaY*deltaY;if(distanceSq>=minDistance*minDistance){// use pythagorean theorem
_this.handleDistanceSurpassed(ev);}}if(_this.isDragging){// a real pointer move? (not one simulated by scrolling)
if(ev.origEvent.type!=='scroll'){_this.mirror.handleMove(ev.pageX,ev.pageY);_this.autoScroller.handleMove(ev.pageX,ev.pageY);}_this.emitter.trigger('dragmove',ev);}}};_this.onPointerUp=function(ev){if(_this.isInteracting){_this.isInteracting=false;allowSelection(document.body);allowContextMenu(document.body);_this.emitter.trigger('pointerup',ev);// can potentially set mirrorNeedsRevert
if(_this.isDragging){_this.autoScroller.stop();_this.tryStopDrag(ev);// which will stop the mirror
}if(_this.delayTimeoutId){clearTimeout(_this.delayTimeoutId);_this.delayTimeoutId=null;}}};var pointer=_this.pointer=new PointerDragging(containerEl);pointer.emitter.on('pointerdown',_this.onPointerDown);pointer.emitter.on('pointermove',_this.onPointerMove);pointer.emitter.on('pointerup',_this.onPointerUp);if(selector){pointer.selector=selector;}_this.mirror=new ElementMirror();_this.autoScroller=new AutoScroller();return _this;}FeaturefulElementDragging.prototype.destroy=function(){this.pointer.destroy();// HACK: simulate a pointer-up to end the current drag
// TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
this.onPointerUp({});};FeaturefulElementDragging.prototype.startDelay=function(ev){var _this=this;if(typeof this.delay==='number'){this.delayTimeoutId=setTimeout(function(){_this.delayTimeoutId=null;_this.handleDelayEnd(ev);},this.delay);// not assignable to number!
}else {this.handleDelayEnd(ev);}};FeaturefulElementDragging.prototype.handleDelayEnd=function(ev){this.isDelayEnded=true;this.tryStartDrag(ev);};FeaturefulElementDragging.prototype.handleDistanceSurpassed=function(ev){this.isDistanceSurpassed=true;this.tryStartDrag(ev);};FeaturefulElementDragging.prototype.tryStartDrag=function(ev){if(this.isDelayEnded&&this.isDistanceSurpassed){if(!this.pointer.wasTouchScroll||this.touchScrollAllowed){this.isDragging=true;this.mirrorNeedsRevert=false;this.autoScroller.start(ev.pageX,ev.pageY,this.containerEl);this.emitter.trigger('dragstart',ev);if(this.touchScrollAllowed===false){this.pointer.cancelTouchScroll();}}}};FeaturefulElementDragging.prototype.tryStopDrag=function(ev){// .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
// that come from the document to fire beforehand. much more convenient this way.
this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,ev));};FeaturefulElementDragging.prototype.stopDrag=function(ev){this.isDragging=false;this.emitter.trigger('dragend',ev);};// fill in the implementations...
FeaturefulElementDragging.prototype.setIgnoreMove=function(bool){this.pointer.shouldIgnoreMove=bool;};FeaturefulElementDragging.prototype.setMirrorIsVisible=function(bool){this.mirror.setIsVisible(bool);};FeaturefulElementDragging.prototype.setMirrorNeedsRevert=function(bool){this.mirrorNeedsRevert=bool;};FeaturefulElementDragging.prototype.setAutoScrollEnabled=function(bool){this.autoScroller.isEnabled=bool;};return FeaturefulElementDragging;}(ElementDragging);/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/var OffsetTracker=/** @class */function(){function OffsetTracker(el){this.origRect=computeRect(el);// will work fine for divs that have overflow:hidden
this.scrollCaches=getClippingParents(el).map(function(scrollEl){return new ElementScrollGeomCache(scrollEl,true);});}OffsetTracker.prototype.destroy=function(){for(var _i=0,_a=this.scrollCaches;_i<_a.length;_i++){var scrollCache=_a[_i];scrollCache.destroy();}};OffsetTracker.prototype.computeLeft=function(){var left=this.origRect.left;for(var _i=0,_a=this.scrollCaches;_i<_a.length;_i++){var scrollCache=_a[_i];left+=scrollCache.origScrollLeft-scrollCache.getScrollLeft();}return left;};OffsetTracker.prototype.computeTop=function(){var top=this.origRect.top;for(var _i=0,_a=this.scrollCaches;_i<_a.length;_i++){var scrollCache=_a[_i];top+=scrollCache.origScrollTop-scrollCache.getScrollTop();}return top;};OffsetTracker.prototype.isWithinClipping=function(pageX,pageY){var point={left:pageX,top:pageY};for(var _i=0,_a=this.scrollCaches;_i<_a.length;_i++){var scrollCache=_a[_i];if(!isIgnoredClipping(scrollCache.getEventTarget())&&!pointInsideRect(point,scrollCache.clientRect)){return false;}}return true;};return OffsetTracker;}();// certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615
function isIgnoredClipping(node){var tagName=node.tagName;return tagName==='HTML'||tagName==='BODY';}/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/var HitDragging=/** @class */function(){function HitDragging(dragging,droppableStore){var _this=this;// options that can be set by caller
this.useSubjectCenter=false;this.requireInitial=true;// if doesn't start out on a hit, won't emit any events
this.initialHit=null;this.movingHit=null;this.finalHit=null;// won't ever be populated if shouldIgnoreMove
this.handlePointerDown=function(ev){var dragging=_this.dragging;_this.initialHit=null;_this.movingHit=null;_this.finalHit=null;_this.prepareHits();_this.processFirstCoord(ev);if(_this.initialHit||!_this.requireInitial){dragging.setIgnoreMove(false);// TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
_this.emitter.trigger('pointerdown',ev);}else {dragging.setIgnoreMove(true);}};this.handleDragStart=function(ev){_this.emitter.trigger('dragstart',ev);_this.handleMove(ev,true);// force = fire even if initially null
};this.handleDragMove=function(ev){_this.emitter.trigger('dragmove',ev);_this.handleMove(ev);};this.handlePointerUp=function(ev){_this.releaseHits();_this.emitter.trigger('pointerup',ev);};this.handleDragEnd=function(ev){if(_this.movingHit){_this.emitter.trigger('hitupdate',null,true,ev);}_this.finalHit=_this.movingHit;_this.movingHit=null;_this.emitter.trigger('dragend',ev);};this.droppableStore=droppableStore;dragging.emitter.on('pointerdown',this.handlePointerDown);dragging.emitter.on('dragstart',this.handleDragStart);dragging.emitter.on('dragmove',this.handleDragMove);dragging.emitter.on('pointerup',this.handlePointerUp);dragging.emitter.on('dragend',this.handleDragEnd);this.dragging=dragging;this.emitter=new Emitter();}// sets initialHit
// sets coordAdjust
HitDragging.prototype.processFirstCoord=function(ev){var origPoint={left:ev.pageX,top:ev.pageY};var adjustedPoint=origPoint;var subjectEl=ev.subjectEl;var subjectRect;if(subjectEl instanceof HTMLElement){// i.e. not a Document/ShadowRoot
subjectRect=computeRect(subjectEl);adjustedPoint=constrainPoint(adjustedPoint,subjectRect);}var initialHit=this.initialHit=this.queryHitForOffset(adjustedPoint.left,adjustedPoint.top);if(initialHit){if(this.useSubjectCenter&&subjectRect){var slicedSubjectRect=intersectRects(subjectRect,initialHit.rect);if(slicedSubjectRect){adjustedPoint=getRectCenter(slicedSubjectRect);}}this.coordAdjust=diffPoints(adjustedPoint,origPoint);}else {this.coordAdjust={left:0,top:0};}};HitDragging.prototype.handleMove=function(ev,forceHandle){var hit=this.queryHitForOffset(ev.pageX+this.coordAdjust.left,ev.pageY+this.coordAdjust.top);if(forceHandle||!isHitsEqual(this.movingHit,hit)){this.movingHit=hit;this.emitter.trigger('hitupdate',hit,false,ev);}};HitDragging.prototype.prepareHits=function(){this.offsetTrackers=mapHash(this.droppableStore,function(interactionSettings){interactionSettings.component.prepareHits();return new OffsetTracker(interactionSettings.el);});};HitDragging.prototype.releaseHits=function(){var offsetTrackers=this.offsetTrackers;for(var id in offsetTrackers){offsetTrackers[id].destroy();}this.offsetTrackers={};};HitDragging.prototype.queryHitForOffset=function(offsetLeft,offsetTop){var _a=this,droppableStore=_a.droppableStore,offsetTrackers=_a.offsetTrackers;var bestHit=null;for(var id in droppableStore){var component=droppableStore[id].component;var offsetTracker=offsetTrackers[id];if(offsetTracker&&// wasn't destroyed mid-drag
offsetTracker.isWithinClipping(offsetLeft,offsetTop)){var originLeft=offsetTracker.computeLeft();var originTop=offsetTracker.computeTop();var positionLeft=offsetLeft-originLeft;var positionTop=offsetTop-originTop;var origRect=offsetTracker.origRect;var width=origRect.right-origRect.left;var height=origRect.bottom-origRect.top;if(// must be within the element's bounds
positionLeft>=0&&positionLeft<width&&positionTop>=0&&positionTop<height){var hit=component.queryHit(positionLeft,positionTop,width,height);if(hit&&// make sure the hit is within activeRange, meaning it's not a dead cell
rangeContainsRange(hit.dateProfile.activeRange,hit.dateSpan.range)&&(!bestHit||hit.layer>bestHit.layer)){hit.componentId=id;hit.context=component.context;// TODO: better way to re-orient rectangle
hit.rect.left+=originLeft;hit.rect.right+=originLeft;hit.rect.top+=originTop;hit.rect.bottom+=originTop;bestHit=hit;}}}}return bestHit;};return HitDragging;}();function isHitsEqual(hit0,hit1){if(!hit0&&!hit1){return true;}if(Boolean(hit0)!==Boolean(hit1)){return false;}return isDateSpansEqual(hit0.dateSpan,hit1.dateSpan);}function buildDatePointApiWithContext(dateSpan,context){var props={};for(var _i=0,_a=context.pluginHooks.datePointTransforms;_i<_a.length;_i++){var transform=_a[_i];__assign$1(props,transform(dateSpan,context));}__assign$1(props,buildDatePointApi(dateSpan,context.dateEnv));return props;}function buildDatePointApi(span,dateEnv){return {date:dateEnv.toDate(span.range.start),dateStr:dateEnv.formatIso(span.range.start,{omitTime:span.allDay}),allDay:span.allDay};}/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/var DateClicking=/** @class */function(_super){__extends(DateClicking,_super);function DateClicking(settings){var _this=_super.call(this,settings)||this;_this.handlePointerDown=function(pev){var dragging=_this.dragging;var downEl=pev.origEvent.target;// do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
dragging.setIgnoreMove(!_this.component.isValidDateDownEl(downEl));};// won't even fire if moving was ignored
_this.handleDragEnd=function(ev){var component=_this.component;var pointer=_this.dragging.pointer;if(!pointer.wasTouchScroll){var _a=_this.hitDragging,initialHit=_a.initialHit,finalHit=_a.finalHit;if(initialHit&&finalHit&&isHitsEqual(initialHit,finalHit)){var context=component.context;var arg=__assign$1(__assign$1({},buildDatePointApiWithContext(initialHit.dateSpan,context)),{dayEl:initialHit.dayEl,jsEvent:ev.origEvent,view:context.viewApi||context.calendarApi.view});context.emitter.trigger('dateClick',arg);}}};// we DO want to watch pointer moves because otherwise finalHit won't get populated
_this.dragging=new FeaturefulElementDragging(settings.el);_this.dragging.autoScroller.isEnabled=false;var hitDragging=_this.hitDragging=new HitDragging(_this.dragging,interactionSettingsToStore(settings));hitDragging.emitter.on('pointerdown',_this.handlePointerDown);hitDragging.emitter.on('dragend',_this.handleDragEnd);return _this;}DateClicking.prototype.destroy=function(){this.dragging.destroy();};return DateClicking;}(Interaction);/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/var DateSelecting=/** @class */function(_super){__extends(DateSelecting,_super);function DateSelecting(settings){var _this=_super.call(this,settings)||this;_this.dragSelection=null;_this.handlePointerDown=function(ev){var _a=_this,component=_a.component,dragging=_a.dragging;var options=component.context.options;var canSelect=options.selectable&&component.isValidDateDownEl(ev.origEvent.target);// don't bother to watch expensive moves if component won't do selection
dragging.setIgnoreMove(!canSelect);// if touch, require user to hold down
dragging.delay=ev.isTouch?getComponentTouchDelay$1(component):null;};_this.handleDragStart=function(ev){_this.component.context.calendarApi.unselect(ev);// unselect previous selections
};_this.handleHitUpdate=function(hit,isFinal){var context=_this.component.context;var dragSelection=null;var isInvalid=false;if(hit){var initialHit=_this.hitDragging.initialHit;var disallowed=hit.componentId===initialHit.componentId&&_this.isHitComboAllowed&&!_this.isHitComboAllowed(initialHit,hit);if(!disallowed){dragSelection=joinHitsIntoSelection(initialHit,hit,context.pluginHooks.dateSelectionTransformers);}if(!dragSelection||!isDateSelectionValid(dragSelection,hit.dateProfile,context)){isInvalid=true;dragSelection=null;}}if(dragSelection){context.dispatch({type:'SELECT_DATES',selection:dragSelection});}else if(!isFinal){// only unselect if moved away while dragging
context.dispatch({type:'UNSELECT_DATES'});}if(!isInvalid){enableCursor();}else {disableCursor();}if(!isFinal){_this.dragSelection=dragSelection;// only clear if moved away from all hits while dragging
}};_this.handlePointerUp=function(pev){if(_this.dragSelection){// selection is already rendered, so just need to report selection
triggerDateSelect(_this.dragSelection,pev,_this.component.context);_this.dragSelection=null;}};var component=settings.component;var options=component.context.options;var dragging=_this.dragging=new FeaturefulElementDragging(settings.el);dragging.touchScrollAllowed=false;dragging.minDistance=options.selectMinDistance||0;dragging.autoScroller.isEnabled=options.dragScroll;var hitDragging=_this.hitDragging=new HitDragging(_this.dragging,interactionSettingsToStore(settings));hitDragging.emitter.on('pointerdown',_this.handlePointerDown);hitDragging.emitter.on('dragstart',_this.handleDragStart);hitDragging.emitter.on('hitupdate',_this.handleHitUpdate);hitDragging.emitter.on('pointerup',_this.handlePointerUp);return _this;}DateSelecting.prototype.destroy=function(){this.dragging.destroy();};return DateSelecting;}(Interaction);function getComponentTouchDelay$1(component){var options=component.context.options;var delay=options.selectLongPressDelay;if(delay==null){delay=options.longPressDelay;}return delay;}function joinHitsIntoSelection(hit0,hit1,dateSelectionTransformers){var dateSpan0=hit0.dateSpan;var dateSpan1=hit1.dateSpan;var ms=[dateSpan0.range.start,dateSpan0.range.end,dateSpan1.range.start,dateSpan1.range.end];ms.sort(compareNumbers);var props={};for(var _i=0,dateSelectionTransformers_1=dateSelectionTransformers;_i<dateSelectionTransformers_1.length;_i++){var transformer=dateSelectionTransformers_1[_i];var res=transformer(hit0,hit1);if(res===false){return null;}if(res){__assign$1(props,res);}}props.range={start:ms[0],end:ms[3]};props.allDay=dateSpan0.allDay;return props;}var EventDragging=/** @class */function(_super){__extends(EventDragging,_super);function EventDragging(settings){var _this=_super.call(this,settings)||this;// internal state
_this.subjectEl=null;_this.subjectSeg=null;// the seg being selected/dragged
_this.isDragging=false;_this.eventRange=null;_this.relevantEvents=null;// the events being dragged
_this.receivingContext=null;_this.validMutation=null;_this.mutatedRelevantEvents=null;_this.handlePointerDown=function(ev){var origTarget=ev.origEvent.target;var _a=_this,component=_a.component,dragging=_a.dragging;var mirror=dragging.mirror;var options=component.context.options;var initialContext=component.context;_this.subjectEl=ev.subjectEl;var subjectSeg=_this.subjectSeg=getElSeg(ev.subjectEl);var eventRange=_this.eventRange=subjectSeg.eventRange;var eventInstanceId=eventRange.instance.instanceId;_this.relevantEvents=getRelevantEvents(initialContext.getCurrentData().eventStore,eventInstanceId);dragging.minDistance=ev.isTouch?0:options.eventDragMinDistance;dragging.delay=// only do a touch delay if touch and this event hasn't been selected yet
ev.isTouch&&eventInstanceId!==component.props.eventSelection?getComponentTouchDelay(component):null;if(options.fixedMirrorParent){mirror.parentNode=options.fixedMirrorParent;}else {mirror.parentNode=elementClosest(origTarget,'.fc');}mirror.revertDuration=options.dragRevertDuration;var isValid=component.isValidSegDownEl(origTarget)&&!elementClosest(origTarget,'.fc-event-resizer');// NOT on a resizer
dragging.setIgnoreMove(!isValid);// disable dragging for elements that are resizable (ie, selectable)
// but are not draggable
_this.isDragging=isValid&&ev.subjectEl.classList.contains('fc-event-draggable');};_this.handleDragStart=function(ev){var initialContext=_this.component.context;var eventRange=_this.eventRange;var eventInstanceId=eventRange.instance.instanceId;if(ev.isTouch){// need to select a different event?
if(eventInstanceId!==_this.component.props.eventSelection){initialContext.dispatch({type:'SELECT_EVENT',eventInstanceId:eventInstanceId});}}else {// if now using mouse, but was previous touch interaction, clear selected event
initialContext.dispatch({type:'UNSELECT_EVENT'});}if(_this.isDragging){initialContext.calendarApi.unselect(ev);// unselect *date* selection
initialContext.emitter.trigger('eventDragStart',{el:_this.subjectEl,event:new EventApi(initialContext,eventRange.def,eventRange.instance),jsEvent:ev.origEvent,view:initialContext.viewApi});}};_this.handleHitUpdate=function(hit,isFinal){if(!_this.isDragging){return;}var relevantEvents=_this.relevantEvents;var initialHit=_this.hitDragging.initialHit;var initialContext=_this.component.context;// states based on new hit
var receivingContext=null;var mutation=null;var mutatedRelevantEvents=null;var isInvalid=false;var interaction={affectedEvents:relevantEvents,mutatedEvents:createEmptyEventStore(),isEvent:true};if(hit){receivingContext=hit.context;var receivingOptions=receivingContext.options;if(initialContext===receivingContext||receivingOptions.editable&&receivingOptions.droppable){mutation=computeEventMutation(initialHit,hit,receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);if(mutation){mutatedRelevantEvents=applyMutationToEventStore(relevantEvents,receivingContext.getCurrentData().eventUiBases,mutation,receivingContext);interaction.mutatedEvents=mutatedRelevantEvents;if(!isInteractionValid(interaction,hit.dateProfile,receivingContext)){isInvalid=true;mutation=null;mutatedRelevantEvents=null;interaction.mutatedEvents=createEmptyEventStore();}}}else {receivingContext=null;}}_this.displayDrag(receivingContext,interaction);if(!isInvalid){enableCursor();}else {disableCursor();}if(!isFinal){if(initialContext===receivingContext&&// TODO: write test for this
isHitsEqual(initialHit,hit)){mutation=null;}_this.dragging.setMirrorNeedsRevert(!mutation);// render the mirror if no already-rendered mirror
// TODO: wish we could somehow wait for dispatch to guarantee render
_this.dragging.setMirrorIsVisible(!hit||!getElRoot(_this.subjectEl).querySelector('.fc-event-mirror'));// assign states based on new hit
_this.receivingContext=receivingContext;_this.validMutation=mutation;_this.mutatedRelevantEvents=mutatedRelevantEvents;}};_this.handlePointerUp=function(){if(!_this.isDragging){_this.cleanup();// because handleDragEnd won't fire
}};_this.handleDragEnd=function(ev){if(_this.isDragging){var initialContext_1=_this.component.context;var initialView=initialContext_1.viewApi;var _a=_this,receivingContext_1=_a.receivingContext,validMutation=_a.validMutation;var eventDef=_this.eventRange.def;var eventInstance=_this.eventRange.instance;var eventApi=new EventApi(initialContext_1,eventDef,eventInstance);var relevantEvents_1=_this.relevantEvents;var mutatedRelevantEvents_1=_this.mutatedRelevantEvents;var finalHit=_this.hitDragging.finalHit;_this.clearDrag();// must happen after revert animation
initialContext_1.emitter.trigger('eventDragStop',{el:_this.subjectEl,event:eventApi,jsEvent:ev.origEvent,view:initialView});if(validMutation){// dropped within same calendar
if(receivingContext_1===initialContext_1){var updatedEventApi=new EventApi(initialContext_1,mutatedRelevantEvents_1.defs[eventDef.defId],eventInstance?mutatedRelevantEvents_1.instances[eventInstance.instanceId]:null);initialContext_1.dispatch({type:'MERGE_EVENTS',eventStore:mutatedRelevantEvents_1});var eventChangeArg={oldEvent:eventApi,event:updatedEventApi,relatedEvents:buildEventApis(mutatedRelevantEvents_1,initialContext_1,eventInstance),revert:function(){initialContext_1.dispatch({type:'MERGE_EVENTS',eventStore:relevantEvents_1// the pre-change data
});}};var transformed={};for(var _i=0,_b=initialContext_1.getCurrentData().pluginHooks.eventDropTransformers;_i<_b.length;_i++){var transformer=_b[_i];__assign$1(transformed,transformer(validMutation,initialContext_1));}initialContext_1.emitter.trigger('eventDrop',__assign$1(__assign$1(__assign$1({},eventChangeArg),transformed),{el:ev.subjectEl,delta:validMutation.datesDelta,jsEvent:ev.origEvent,view:initialView}));initialContext_1.emitter.trigger('eventChange',eventChangeArg);// dropped in different calendar
}else if(receivingContext_1){var eventRemoveArg={event:eventApi,relatedEvents:buildEventApis(relevantEvents_1,initialContext_1,eventInstance),revert:function(){initialContext_1.dispatch({type:'MERGE_EVENTS',eventStore:relevantEvents_1});}};initialContext_1.emitter.trigger('eventLeave',__assign$1(__assign$1({},eventRemoveArg),{draggedEl:ev.subjectEl,view:initialView}));initialContext_1.dispatch({type:'REMOVE_EVENTS',eventStore:relevantEvents_1});initialContext_1.emitter.trigger('eventRemove',eventRemoveArg);var addedEventDef=mutatedRelevantEvents_1.defs[eventDef.defId];var addedEventInstance=mutatedRelevantEvents_1.instances[eventInstance.instanceId];var addedEventApi=new EventApi(receivingContext_1,addedEventDef,addedEventInstance);receivingContext_1.dispatch({type:'MERGE_EVENTS',eventStore:mutatedRelevantEvents_1});var eventAddArg={event:addedEventApi,relatedEvents:buildEventApis(mutatedRelevantEvents_1,receivingContext_1,addedEventInstance),revert:function(){receivingContext_1.dispatch({type:'REMOVE_EVENTS',eventStore:mutatedRelevantEvents_1});}};receivingContext_1.emitter.trigger('eventAdd',eventAddArg);if(ev.isTouch){receivingContext_1.dispatch({type:'SELECT_EVENT',eventInstanceId:eventInstance.instanceId});}receivingContext_1.emitter.trigger('drop',__assign$1(__assign$1({},buildDatePointApiWithContext(finalHit.dateSpan,receivingContext_1)),{draggedEl:ev.subjectEl,jsEvent:ev.origEvent,view:finalHit.context.viewApi}));receivingContext_1.emitter.trigger('eventReceive',__assign$1(__assign$1({},eventAddArg),{draggedEl:ev.subjectEl,view:finalHit.context.viewApi}));}}else {initialContext_1.emitter.trigger('_noEventDrop');}}_this.cleanup();};var component=_this.component;var options=component.context.options;var dragging=_this.dragging=new FeaturefulElementDragging(settings.el);dragging.pointer.selector=EventDragging.SELECTOR;dragging.touchScrollAllowed=false;dragging.autoScroller.isEnabled=options.dragScroll;var hitDragging=_this.hitDragging=new HitDragging(_this.dragging,interactionSettingsStore);hitDragging.useSubjectCenter=settings.useEventCenter;hitDragging.emitter.on('pointerdown',_this.handlePointerDown);hitDragging.emitter.on('dragstart',_this.handleDragStart);hitDragging.emitter.on('hitupdate',_this.handleHitUpdate);hitDragging.emitter.on('pointerup',_this.handlePointerUp);hitDragging.emitter.on('dragend',_this.handleDragEnd);return _this;}EventDragging.prototype.destroy=function(){this.dragging.destroy();};// render a drag state on the next receivingCalendar
EventDragging.prototype.displayDrag=function(nextContext,state){var initialContext=this.component.context;var prevContext=this.receivingContext;// does the previous calendar need to be cleared?
if(prevContext&&prevContext!==nextContext){// does the initial calendar need to be cleared?
// if so, don't clear all the way. we still need to to hide the affectedEvents
if(prevContext===initialContext){prevContext.dispatch({type:'SET_EVENT_DRAG',state:{affectedEvents:state.affectedEvents,mutatedEvents:createEmptyEventStore(),isEvent:true}});// completely clear the old calendar if it wasn't the initial
}else {prevContext.dispatch({type:'UNSET_EVENT_DRAG'});}}if(nextContext){nextContext.dispatch({type:'SET_EVENT_DRAG',state:state});}};EventDragging.prototype.clearDrag=function(){var initialCalendar=this.component.context;var receivingContext=this.receivingContext;if(receivingContext){receivingContext.dispatch({type:'UNSET_EVENT_DRAG'});}// the initial calendar might have an dummy drag state from displayDrag
if(initialCalendar!==receivingContext){initialCalendar.dispatch({type:'UNSET_EVENT_DRAG'});}};EventDragging.prototype.cleanup=function(){this.subjectSeg=null;this.isDragging=false;this.eventRange=null;this.relevantEvents=null;this.receivingContext=null;this.validMutation=null;this.mutatedRelevantEvents=null;};// TODO: test this in IE11
// QUESTION: why do we need it on the resizable???
EventDragging.SELECTOR='.fc-event-draggable, .fc-event-resizable';return EventDragging;}(Interaction);function computeEventMutation(hit0,hit1,massagers){var dateSpan0=hit0.dateSpan;var dateSpan1=hit1.dateSpan;var date0=dateSpan0.range.start;var date1=dateSpan1.range.start;var standardProps={};if(dateSpan0.allDay!==dateSpan1.allDay){standardProps.allDay=dateSpan1.allDay;standardProps.hasEnd=hit1.context.options.allDayMaintainDuration;if(dateSpan1.allDay){// means date1 is already start-of-day,
// but date0 needs to be converted
date0=startOfDay(date0);}}var delta=diffDates(date0,date1,hit0.context.dateEnv,hit0.componentId===hit1.componentId?hit0.largeUnit:null);if(delta.milliseconds){// has hours/minutes/seconds
standardProps.allDay=false;}var mutation={datesDelta:delta,standardProps:standardProps};for(var _i=0,massagers_1=massagers;_i<massagers_1.length;_i++){var massager=massagers_1[_i];massager(mutation,hit0,hit1);}return mutation;}function getComponentTouchDelay(component){var options=component.context.options;var delay=options.eventLongPressDelay;if(delay==null){delay=options.longPressDelay;}return delay;}var EventResizing=/** @class */function(_super){__extends(EventResizing,_super);function EventResizing(settings){var _this=_super.call(this,settings)||this;// internal state
_this.draggingSegEl=null;_this.draggingSeg=null;// TODO: rename to resizingSeg? subjectSeg?
_this.eventRange=null;_this.relevantEvents=null;_this.validMutation=null;_this.mutatedRelevantEvents=null;_this.handlePointerDown=function(ev){var component=_this.component;var segEl=_this.querySegEl(ev);var seg=getElSeg(segEl);var eventRange=_this.eventRange=seg.eventRange;_this.dragging.minDistance=component.context.options.eventDragMinDistance;// if touch, need to be working with a selected event
_this.dragging.setIgnoreMove(!_this.component.isValidSegDownEl(ev.origEvent.target)||ev.isTouch&&_this.component.props.eventSelection!==eventRange.instance.instanceId);};_this.handleDragStart=function(ev){var context=_this.component.context;var eventRange=_this.eventRange;_this.relevantEvents=getRelevantEvents(context.getCurrentData().eventStore,_this.eventRange.instance.instanceId);var segEl=_this.querySegEl(ev);_this.draggingSegEl=segEl;_this.draggingSeg=getElSeg(segEl);context.calendarApi.unselect();context.emitter.trigger('eventResizeStart',{el:segEl,event:new EventApi(context,eventRange.def,eventRange.instance),jsEvent:ev.origEvent,view:context.viewApi});};_this.handleHitUpdate=function(hit,isFinal,ev){var context=_this.component.context;var relevantEvents=_this.relevantEvents;var initialHit=_this.hitDragging.initialHit;var eventInstance=_this.eventRange.instance;var mutation=null;var mutatedRelevantEvents=null;var isInvalid=false;var interaction={affectedEvents:relevantEvents,mutatedEvents:createEmptyEventStore(),isEvent:true};if(hit){var disallowed=hit.componentId===initialHit.componentId&&_this.isHitComboAllowed&&!_this.isHitComboAllowed(initialHit,hit);if(!disallowed){mutation=computeMutation(initialHit,hit,ev.subjectEl.classList.contains('fc-event-resizer-start'),eventInstance.range);}}if(mutation){mutatedRelevantEvents=applyMutationToEventStore(relevantEvents,context.getCurrentData().eventUiBases,mutation,context);interaction.mutatedEvents=mutatedRelevantEvents;if(!isInteractionValid(interaction,hit.dateProfile,context)){isInvalid=true;mutation=null;mutatedRelevantEvents=null;interaction.mutatedEvents=null;}}if(mutatedRelevantEvents){context.dispatch({type:'SET_EVENT_RESIZE',state:interaction});}else {context.dispatch({type:'UNSET_EVENT_RESIZE'});}if(!isInvalid){enableCursor();}else {disableCursor();}if(!isFinal){if(mutation&&isHitsEqual(initialHit,hit)){mutation=null;}_this.validMutation=mutation;_this.mutatedRelevantEvents=mutatedRelevantEvents;}};_this.handleDragEnd=function(ev){var context=_this.component.context;var eventDef=_this.eventRange.def;var eventInstance=_this.eventRange.instance;var eventApi=new EventApi(context,eventDef,eventInstance);var relevantEvents=_this.relevantEvents;var mutatedRelevantEvents=_this.mutatedRelevantEvents;context.emitter.trigger('eventResizeStop',{el:_this.draggingSegEl,event:eventApi,jsEvent:ev.origEvent,view:context.viewApi});if(_this.validMutation){var updatedEventApi=new EventApi(context,mutatedRelevantEvents.defs[eventDef.defId],eventInstance?mutatedRelevantEvents.instances[eventInstance.instanceId]:null);context.dispatch({type:'MERGE_EVENTS',eventStore:mutatedRelevantEvents});var eventChangeArg={oldEvent:eventApi,event:updatedEventApi,relatedEvents:buildEventApis(mutatedRelevantEvents,context,eventInstance),revert:function(){context.dispatch({type:'MERGE_EVENTS',eventStore:relevantEvents// the pre-change events
});}};context.emitter.trigger('eventResize',__assign$1(__assign$1({},eventChangeArg),{el:_this.draggingSegEl,startDelta:_this.validMutation.startDelta||createDuration(0),endDelta:_this.validMutation.endDelta||createDuration(0),jsEvent:ev.origEvent,view:context.viewApi}));context.emitter.trigger('eventChange',eventChangeArg);}else {context.emitter.trigger('_noEventResize');}// reset all internal state
_this.draggingSeg=null;_this.relevantEvents=null;_this.validMutation=null;// okay to keep eventInstance around. useful to set it in handlePointerDown
};var component=settings.component;var dragging=_this.dragging=new FeaturefulElementDragging(settings.el);dragging.pointer.selector='.fc-event-resizer';dragging.touchScrollAllowed=false;dragging.autoScroller.isEnabled=component.context.options.dragScroll;var hitDragging=_this.hitDragging=new HitDragging(_this.dragging,interactionSettingsToStore(settings));hitDragging.emitter.on('pointerdown',_this.handlePointerDown);hitDragging.emitter.on('dragstart',_this.handleDragStart);hitDragging.emitter.on('hitupdate',_this.handleHitUpdate);hitDragging.emitter.on('dragend',_this.handleDragEnd);return _this;}EventResizing.prototype.destroy=function(){this.dragging.destroy();};EventResizing.prototype.querySegEl=function(ev){return elementClosest(ev.subjectEl,'.fc-event');};return EventResizing;}(Interaction);function computeMutation(hit0,hit1,isFromStart,instanceRange){var dateEnv=hit0.context.dateEnv;var date0=hit0.dateSpan.range.start;var date1=hit1.dateSpan.range.start;var delta=diffDates(date0,date1,dateEnv,hit0.largeUnit);if(isFromStart){if(dateEnv.add(instanceRange.start,delta)<instanceRange.end){return {startDelta:delta};}}else if(dateEnv.add(instanceRange.end,delta)>instanceRange.start){return {endDelta:delta};}return null;}var UnselectAuto=/** @class */function(){function UnselectAuto(context){var _this=this;this.context=context;this.isRecentPointerDateSelect=false;// wish we could use a selector to detect date selection, but uses hit system
this.matchesCancel=false;this.matchesEvent=false;this.onSelect=function(selectInfo){if(selectInfo.jsEvent){_this.isRecentPointerDateSelect=true;}};this.onDocumentPointerDown=function(pev){var unselectCancel=_this.context.options.unselectCancel;var downEl=getEventTargetViaRoot(pev.origEvent);_this.matchesCancel=!!elementClosest(downEl,unselectCancel);_this.matchesEvent=!!elementClosest(downEl,EventDragging.SELECTOR);// interaction started on an event?
};this.onDocumentPointerUp=function(pev){var context=_this.context;var documentPointer=_this.documentPointer;var calendarState=context.getCurrentData();// touch-scrolling should never unfocus any type of selection
if(!documentPointer.wasTouchScroll){if(calendarState.dateSelection&&// an existing date selection?
!_this.isRecentPointerDateSelect// a new pointer-initiated date selection since last onDocumentPointerUp?
){var unselectAuto=context.options.unselectAuto;if(unselectAuto&&(!unselectAuto||!_this.matchesCancel)){context.calendarApi.unselect(pev);}}if(calendarState.eventSelection&&// an existing event selected?
!_this.matchesEvent// interaction DIDN'T start on an event
){context.dispatch({type:'UNSELECT_EVENT'});}}_this.isRecentPointerDateSelect=false;};var documentPointer=this.documentPointer=new PointerDragging(document);documentPointer.shouldIgnoreMove=true;documentPointer.shouldWatchScroll=false;documentPointer.emitter.on('pointerdown',this.onDocumentPointerDown);documentPointer.emitter.on('pointerup',this.onDocumentPointerUp);/*
        TODO: better way to know about whether there was a selection with the pointer
        */context.emitter.on('select',this.onSelect);}UnselectAuto.prototype.destroy=function(){this.context.emitter.off('select',this.onSelect);this.documentPointer.destroy();};return UnselectAuto;}();var OPTION_REFINERS$1={fixedMirrorParent:identity};var LISTENER_REFINERS={dateClick:identity,eventDragStart:identity,eventDragStop:identity,eventDrop:identity,eventResizeStart:identity,eventResizeStop:identity,eventResize:identity,drop:identity,eventReceive:identity,eventLeave:identity};config.dataAttrPrefix='';/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*//** @class */(function(_super){__extends(InferredElementDragging,_super);function InferredElementDragging(containerEl){var _this=_super.call(this,containerEl)||this;_this.shouldIgnoreMove=false;_this.mirrorSelector='';_this.currentMirrorEl=null;_this.handlePointerDown=function(ev){_this.emitter.trigger('pointerdown',ev);if(!_this.shouldIgnoreMove){// fire dragstart right away. does not support delay or min-distance
_this.emitter.trigger('dragstart',ev);}};_this.handlePointerMove=function(ev){if(!_this.shouldIgnoreMove){_this.emitter.trigger('dragmove',ev);}};_this.handlePointerUp=function(ev){_this.emitter.trigger('pointerup',ev);if(!_this.shouldIgnoreMove){// fire dragend right away. does not support a revert animation
_this.emitter.trigger('dragend',ev);}};var pointer=_this.pointer=new PointerDragging(containerEl);pointer.emitter.on('pointerdown',_this.handlePointerDown);pointer.emitter.on('pointermove',_this.handlePointerMove);pointer.emitter.on('pointerup',_this.handlePointerUp);return _this;}InferredElementDragging.prototype.destroy=function(){this.pointer.destroy();};InferredElementDragging.prototype.setIgnoreMove=function(bool){this.shouldIgnoreMove=bool;};InferredElementDragging.prototype.setMirrorIsVisible=function(bool){if(bool){// restore a previously hidden element.
// use the reference in case the selector class has already been removed.
if(this.currentMirrorEl){this.currentMirrorEl.style.visibility='';this.currentMirrorEl=null;}}else {var mirrorEl=this.mirrorSelector// TODO: somehow query FullCalendars WITHIN shadow-roots
?document.querySelector(this.mirrorSelector):null;if(mirrorEl){this.currentMirrorEl=mirrorEl;mirrorEl.style.visibility='hidden';}}};return InferredElementDragging;})(ElementDragging);var main$1=createPlugin({componentInteractions:[DateClicking,DateSelecting,EventDragging,EventResizing],calendarInteractions:[UnselectAuto],elementDraggingImpl:FeaturefulElementDragging,optionRefiners:OPTION_REFINERS$1,listenerRefiners:LISTENER_REFINERS});

var listStyle = "\n:root {\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n.fc-theme-standard .fc-list {\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n.fc {\n\n  /* message when no events */\n\n}\n.fc .fc-list-empty {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; /* vertically aligns fc-list-empty-inner */\n  }\n.fc .fc-list-empty-cushion {\n    margin: 5em 0;\n  }\n.fc {\n\n  /* table within the scroller */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-table {\n    width: 100%;\n    border-style: hidden; /* kill outer border on theme */\n  }\n.fc .fc-list-table tr > * {\n    border-left: 0;\n    border-right: 0;\n  }\n.fc .fc-list-sticky .fc-list-day > * { /* the cells */\n      position: sticky;\n      top: 0;\n      background: #fff;\n      background: var(--fc-page-bg-color, #fff); /* for when headers are styled to be transparent and sticky */\n    }\n.fc .fc-list-table th {\n    padding: 0; /* uses an inner-wrapper instead... */\n  }\n.fc .fc-list-table td,\n  .fc .fc-list-day-cushion {\n    padding: 8px 14px;\n  }\n.fc {\n\n\n  /* date heading rows */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-day-cushion:after {\n  content: \"\";\n  clear: both;\n  display: table; /* clear floating */\n    }\n.fc-theme-standard .fc-list-day-cushion {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n.fc-direction-ltr .fc-list-day-text,\n.fc-direction-rtl .fc-list-day-side-text {\n  float: left;\n}\n.fc-direction-ltr .fc-list-day-side-text,\n.fc-direction-rtl .fc-list-day-text {\n  float: right;\n}\n/* make the dot closer to the event title */\n.fc-direction-ltr .fc-list-table .fc-list-event-graphic { padding-right: 0 }\n.fc-direction-rtl .fc-list-table .fc-list-event-graphic { padding-left: 0 }\n.fc .fc-list-event.fc-event-forced-url {\n    cursor: pointer; /* whole row will seem clickable */\n  }\n.fc .fc-list-event:hover td {\n    background-color: #f5f5f5;\n    background-color: var(--fc-list-event-hover-bg-color, #f5f5f5);\n  }\n.fc {\n\n  /* shrink certain cols */\n\n}\n.fc .fc-list-event-graphic,\n  .fc .fc-list-event-time {\n    white-space: nowrap;\n    width: 1px;\n  }\n.fc .fc-list-event-dot {\n    display: inline-block;\n    box-sizing: content-box;\n    width: 0;\n    height: 0;\n    border: 5px solid #3788d8;\n    border: calc(var(--fc-list-event-dot-width, 10px) / 2) solid var(--fc-event-border-color, #3788d8);\n    border-radius: 5px;\n    border-radius: calc(var(--fc-list-event-dot-width, 10px) / 2);\n  }\n.fc {\n\n  /* reset <a> styling */\n\n}\n.fc .fc-list-event-title a {\n    color: inherit;\n    text-decoration: none;\n  }\n.fc {\n\n  /* underline link when hovering over any part of row */\n\n}\n.fc .fc-list-event.fc-event-forced-url:hover a {\n    text-decoration: underline;\n  }\n";

var ListViewHeaderRow=/** @class */function(_super){__extends(ListViewHeaderRow,_super);function ListViewHeaderRow(){return _super!==null&&_super.apply(this,arguments)||this;}ListViewHeaderRow.prototype.render=function(){var _a=this.props,dayDate=_a.dayDate,todayRange=_a.todayRange;var _b=this.context,theme=_b.theme,dateEnv=_b.dateEnv,options=_b.options,viewApi=_b.viewApi;var dayMeta=getDateMeta(dayDate,todayRange);// will ever be falsy?
var text=options.listDayFormat?dateEnv.format(dayDate,options.listDayFormat):'';// will ever be falsy? also, BAD NAME "alt"
var sideText=options.listDaySideFormat?dateEnv.format(dayDate,options.listDaySideFormat):'';var navLinkData=options.navLinks?buildNavLinkData(dayDate):null;var hookProps=__assign$1({date:dateEnv.toDate(dayDate),view:viewApi,text:text,sideText:sideText,navLinkData:navLinkData},dayMeta);var classNames=['fc-list-day'].concat(getDayClassNames(dayMeta,theme));// TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
return createElement(RenderHook,{hookProps:hookProps,classNames:options.dayHeaderClassNames,content:options.dayHeaderContent,defaultContent:renderInnerContent,didMount:options.dayHeaderDidMount,willUnmount:options.dayHeaderWillUnmount},function(rootElRef,customClassNames,innerElRef,innerContent){return createElement("tr",{ref:rootElRef,className:classNames.concat(customClassNames).join(' '),"data-date":formatDayString(dayDate)},createElement("th",{colSpan:3},createElement("div",{className:'fc-list-day-cushion '+theme.getClass('tableCellShaded'),ref:innerElRef},innerContent)));});};return ListViewHeaderRow;}(BaseComponent);function renderInnerContent(props){var navLinkAttrs=props.navLinkData// is there a type for this?
?{'data-navlink':props.navLinkData,tabIndex:0}:{};return createElement(Fragment,null,props.text&&createElement("a",__assign$1({className:"fc-list-day-text"},navLinkAttrs),props.text),props.sideText&&createElement("a",__assign$1({className:"fc-list-day-side-text"},navLinkAttrs),props.sideText));}var DEFAULT_TIME_FORMAT=createFormatter({hour:'numeric',minute:'2-digit',meridiem:'short'});var ListViewEventRow=/** @class */function(_super){__extends(ListViewEventRow,_super);function ListViewEventRow(){return _super!==null&&_super.apply(this,arguments)||this;}ListViewEventRow.prototype.render=function(){var _a=this,props=_a.props,context=_a.context;var seg=props.seg;var timeFormat=context.options.eventTimeFormat||DEFAULT_TIME_FORMAT;return createElement(EventRoot,{seg:seg,timeText:""// BAD. because of all-day content
,disableDragging:true,disableResizing:true,defaultContent:renderEventInnerContent,isPast:props.isPast,isFuture:props.isFuture,isToday:props.isToday,isSelected:props.isSelected,isDragging:props.isDragging,isResizing:props.isResizing,isDateSelecting:props.isDateSelecting},function(rootElRef,classNames,innerElRef,innerContent,hookProps){return createElement("tr",{className:['fc-list-event',hookProps.event.url?'fc-event-forced-url':''].concat(classNames).join(' '),ref:rootElRef},buildTimeContent(seg,timeFormat,context),createElement("td",{className:"fc-list-event-graphic"},createElement("span",{className:"fc-list-event-dot",style:{borderColor:hookProps.borderColor||hookProps.backgroundColor}})),createElement("td",{className:"fc-list-event-title",ref:innerElRef},innerContent));});};return ListViewEventRow;}(BaseComponent);function renderEventInnerContent(props){var event=props.event;var url=event.url;var anchorAttrs=url?{href:url}:{};return createElement("a",__assign$1({},anchorAttrs),event.title);}function buildTimeContent(seg,timeFormat,context){var options=context.options;if(options.displayEventTime!==false){var eventDef=seg.eventRange.def;var eventInstance=seg.eventRange.instance;var doAllDay=false;var timeText=void 0;if(eventDef.allDay){doAllDay=true;}else if(isMultiDayRange(seg.eventRange.range)){// TODO: use (!isStart || !isEnd) instead?
if(seg.isStart){timeText=buildSegTimeText(seg,timeFormat,context,null,null,eventInstance.range.start,seg.end);}else if(seg.isEnd){timeText=buildSegTimeText(seg,timeFormat,context,null,null,seg.start,eventInstance.range.end);}else {doAllDay=true;}}else {timeText=buildSegTimeText(seg,timeFormat,context);}if(doAllDay){var hookProps={text:context.options.allDayText,view:context.viewApi};return createElement(RenderHook,{hookProps:hookProps,classNames:options.allDayClassNames,content:options.allDayContent,defaultContent:renderAllDayInner,didMount:options.allDayDidMount,willUnmount:options.allDayWillUnmount},function(rootElRef,classNames,innerElRef,innerContent){return createElement("td",{className:['fc-list-event-time'].concat(classNames).join(' '),ref:rootElRef},innerContent);});}return createElement("td",{className:"fc-list-event-time"},timeText);}return null;}function renderAllDayInner(hookProps){return hookProps.text;}/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/var ListView=/** @class */function(_super){__extends(ListView,_super);function ListView(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.computeDateVars=memoize(computeDateVars);_this.eventStoreToSegs=memoize(_this._eventStoreToSegs);_this.setRootEl=function(rootEl){if(rootEl){_this.context.registerInteractiveComponent(_this,{el:rootEl});}else {_this.context.unregisterInteractiveComponent(_this);}};return _this;}ListView.prototype.render=function(){var _this=this;var _a=this,props=_a.props,context=_a.context;var extraClassNames=['fc-list',context.theme.getClass('table'),context.options.stickyHeaderDates!==false?'fc-list-sticky':''];var _b=this.computeDateVars(props.dateProfile),dayDates=_b.dayDates,dayRanges=_b.dayRanges;var eventSegs=this.eventStoreToSegs(props.eventStore,props.eventUiBases,dayRanges);return createElement(ViewRoot,{viewSpec:context.viewSpec,elRef:this.setRootEl},function(rootElRef,classNames){return createElement("div",{ref:rootElRef,className:extraClassNames.concat(classNames).join(' ')},createElement(Scroller,{liquid:!props.isHeightAuto,overflowX:props.isHeightAuto?'visible':'hidden',overflowY:props.isHeightAuto?'visible':'auto'},eventSegs.length>0?_this.renderSegList(eventSegs,dayDates):_this.renderEmptyMessage()));});};ListView.prototype.renderEmptyMessage=function(){var _a=this.context,options=_a.options,viewApi=_a.viewApi;var hookProps={text:options.noEventsText,view:viewApi};return createElement(RenderHook,{hookProps:hookProps,classNames:options.noEventsClassNames,content:options.noEventsContent,defaultContent:renderNoEventsInner,didMount:options.noEventsDidMount,willUnmount:options.noEventsWillUnmount},function(rootElRef,classNames,innerElRef,innerContent){return createElement("div",{className:['fc-list-empty'].concat(classNames).join(' '),ref:rootElRef},createElement("div",{className:"fc-list-empty-cushion",ref:innerElRef},innerContent));});};ListView.prototype.renderSegList=function(allSegs,dayDates){var _a=this.context,theme=_a.theme,options=_a.options;var segsByDay=groupSegsByDay(allSegs);// sparse array
return createElement(NowTimer,{unit:"day"},function(nowDate,todayRange){var innerNodes=[];for(var dayIndex=0;dayIndex<segsByDay.length;dayIndex+=1){var daySegs=segsByDay[dayIndex];if(daySegs){// sparse array, so might be undefined
var dayStr=dayDates[dayIndex].toISOString();// append a day header
innerNodes.push(createElement(ListViewHeaderRow,{key:dayStr,dayDate:dayDates[dayIndex],todayRange:todayRange}));daySegs=sortEventSegs(daySegs,options.eventOrder);for(var _i=0,daySegs_1=daySegs;_i<daySegs_1.length;_i++){var seg=daySegs_1[_i];innerNodes.push(createElement(ListViewEventRow,__assign$1({key:dayStr+':'+seg.eventRange.instance.instanceId/* are multiple segs for an instanceId */,seg:seg,isDragging:false,isResizing:false,isDateSelecting:false,isSelected:false},getSegMeta(seg,todayRange,nowDate))));}}}return createElement("table",{className:'fc-list-table '+theme.getClass('table')},createElement("tbody",null,innerNodes));});};ListView.prototype._eventStoreToSegs=function(eventStore,eventUiBases,dayRanges){return this.eventRangesToSegs(sliceEventStore(eventStore,eventUiBases,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,dayRanges);};ListView.prototype.eventRangesToSegs=function(eventRanges,dayRanges){var segs=[];for(var _i=0,eventRanges_1=eventRanges;_i<eventRanges_1.length;_i++){var eventRange=eventRanges_1[_i];segs.push.apply(segs,this.eventRangeToSegs(eventRange,dayRanges));}return segs;};ListView.prototype.eventRangeToSegs=function(eventRange,dayRanges){var dateEnv=this.context.dateEnv;var nextDayThreshold=this.context.options.nextDayThreshold;var range=eventRange.range;var allDay=eventRange.def.allDay;var dayIndex;var segRange;var seg;var segs=[];for(dayIndex=0;dayIndex<dayRanges.length;dayIndex+=1){segRange=intersectRanges(range,dayRanges[dayIndex]);if(segRange){seg={component:this,eventRange:eventRange,start:segRange.start,end:segRange.end,isStart:eventRange.isStart&&segRange.start.valueOf()===range.start.valueOf(),isEnd:eventRange.isEnd&&segRange.end.valueOf()===range.end.valueOf(),dayIndex:dayIndex};segs.push(seg);// detect when range won't go fully into the next day,
// and mutate the latest seg to the be the end.
if(!seg.isEnd&&!allDay&&dayIndex+1<dayRanges.length&&range.end<dateEnv.add(dayRanges[dayIndex+1].start,nextDayThreshold)){seg.end=range.end;seg.isEnd=true;break;}}}return segs;};return ListView;}(DateComponent);function renderNoEventsInner(hookProps){return hookProps.text;}function computeDateVars(dateProfile){var dayStart=startOfDay(dateProfile.renderRange.start);var viewEnd=dateProfile.renderRange.end;var dayDates=[];var dayRanges=[];while(dayStart<viewEnd){dayDates.push(dayStart);dayRanges.push({start:dayStart,end:addDays(dayStart,1)});dayStart=addDays(dayStart,1);}return {dayDates:dayDates,dayRanges:dayRanges};}// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs){var segsByDay=[];// sparse array
var i;var seg;for(i=0;i<segs.length;i+=1){seg=segs[i];(segsByDay[seg.dayIndex]||(segsByDay[seg.dayIndex]=[])).push(seg);}return segsByDay;}var OPTION_REFINERS={listDayFormat:createFalsableFormatter,listDaySideFormat:createFalsableFormatter,noEventsClassNames:identity,noEventsContent:identity,noEventsDidMount:identity,noEventsWillUnmount:identity// noEventsText is defined in base options
};function createFalsableFormatter(input){return input===false?null:createFormatter(input);}var main=createPlugin({optionRefiners:OPTION_REFINERS,views:{list:{component:ListView,buttonTextKey:'list',listDayFormat:{month:'long',day:'numeric',year:'numeric'}// like "January 1, 2016"
},listDay:{type:'list',duration:{days:1},listDayFormat:{weekday:'long'}// day-of-week is all we need. full date is probably in headerToolbar
},listWeek:{type:'list',duration:{weeks:1},listDayFormat:{weekday:'long'},listDaySideFormat:{month:'long',day:'numeric',year:'numeric'}},listMonth:{type:'list',duration:{month:1},listDaySideFormat:{weekday:'long'}// day-of-week is nice-to-have
},listYear:{type:'list',duration:{year:1},listDaySideFormat:{weekday:'long'}// day-of-week is nice-to-have
}}});

_decorate([n$1("ha-button-toggle-group")],function(_initialize,_LitElement){class HaButtonToggleGroup extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaButtonToggleGroup,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"buttons",value:void 0},{kind:"field",decorators:[e$3()],key:"active",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"fullWidth",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean})],key:"dense",value(){return false;}},{kind:"field",decorators:[e$6("mwc-button")],key:"_buttons",value:void 0},{kind:"method",key:"render",value:function render(){return $$2`
      <div>
        ${this.buttons.map(button=>button.iconPath?$$2`<ha-icon-button
                .label=${button.label}
                .path=${button.iconPath}
                .value=${button.value}
                ?active=${this.active===button.value}
                @click=${this._handleClick}
              ></ha-icon-button>`:$$2`<mwc-button
                style=${i$3({width:this.fullWidth?`${100/this.buttons.length}%`:"initial"})}
                outlined
                .dense=${this.dense}
                .value=${button.value}
                ?active=${this.active===button.value}
                @click=${this._handleClick}
                >${button.label}</mwc-button
              >`)}
      </div>
    `;}},{kind:"method",key:"updated",value:function updated(){var _this$_buttons;// Work around Safari default margin that is not reset in mwc-button as of aug 2021
(_this$_buttons=this._buttons)===null||_this$_buttons===void 0?void 0:_this$_buttons.forEach(async button=>{await button.updateComplete;button.shadowRoot.querySelector("button").style.margin="0";});}},{kind:"method",key:"_handleClick",value:function _handleClick(ev){this.active=ev.currentTarget.value;fireEvent(this,"value-changed",{value:this.active});}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      div {
        display: flex;
        --mdc-icon-button-size: var(--button-toggle-size, 36px);
        --mdc-icon-size: var(--button-toggle-icon-size, 20px);
      }
      mwc-button {
        --mdc-shape-small: 0;
        --mdc-button-outline-width: 1px 0 1px 1px;
      }
      ha-icon-button {
        border: 1px solid var(--primary-color);
        border-right-width: 0px;
      }
      ha-icon-button,
      mwc-button {
        position: relative;
        cursor: pointer;
      }
      ha-icon-button::before,
      mwc-button::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: currentColor;
        opacity: 0;
        pointer-events: none;
        content: "";
        transition: opacity 15ms linear, background-color 15ms linear;
      }
      ha-icon-button[active]::before,
      mwc-button[active]::before {
        opacity: var(--mdc-icon-button-ripple-opacity, 0.12);
      }
      ha-icon-button:first-child,
      mwc-button:first-child {
        --mdc-shape-small: 4px 0 0 4px;
        border-radius: 4px 0 0 4px;
      }
      ha-icon-button:last-child,
      mwc-button:last-child {
        border-radius: 0 4px 4px 0;
        border-right-width: 1px;
        --mdc-shape-small: 0 4px 4px 0;
        --mdc-button-outline-width: 1px;
      }
      ha-icon-button:only-child,
      mwc-button:only-child {
        --mdc-shape-small: 4px;
        border-right-width: 1px;
      }
    `;}}]};},s$2);

const getListWeekRange=currentDate=>{const startDate=new Date(currentDate.valueOf());const endDate=new Date(currentDate.valueOf());endDate.setDate(endDate.getDate()+7);return {start:startDate,end:endDate};};const defaultFullCalendarConfig={headerToolbar:false,plugins:[main$2,main,main$1],initialView:"dayGridMonth",dayMaxEventRows:true,height:"parent",eventDisplay:"list-item",locales:allLocales,views:{list:{visibleRange:getListWeekRange}}};const viewButtons=[{label:"Month View",value:"dayGridMonth",iconPath:mdiViewModule},{label:"Week View",value:"dayGridWeek",iconPath:mdiViewWeek},{label:"Day View",value:"dayGridDay",iconPath:mdiViewDay},{label:"List View",value:"list",iconPath:mdiViewAgenda}];let HAFullCalendar=_decorate(null,function(_initialize,_LitElement){class HAFullCalendar extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HAFullCalendar,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[e$3({type:Boolean,reflect:true})],key:"narrow",value(){return false;}},{kind:"field",decorators:[e$3({attribute:false})],key:"events",value(){return [];}},{kind:"field",decorators:[e$3({attribute:false})],key:"views",value(){return ["dayGridMonth","dayGridWeek","dayGridDay"];}},{kind:"field",decorators:[e$3()],key:"initialView",value(){return "dayGridMonth";}},{kind:"field",key:"calendar",value:void 0},{kind:"field",decorators:[t$1()],key:"_activeView",value(){return this.initialView;}},{kind:"method",key:"updateSize",value:function updateSize(){var _this$calendar;(_this$calendar=this.calendar)===null||_this$calendar===void 0?void 0:_this$calendar.updateSize();}},{kind:"method",key:"render",value:function render(){const viewToggleButtons=this._viewToggleButtons(this.views);return $$2`
      ${this.calendar?$$2`
            <div class="header">
              ${!this.narrow?$$2`
                    <div class="navigation">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >${this.hass.localize("ui.components.calendar.today")}</mwc-button
                      >
                      <ha-icon-button
                        .label=${this.hass.localize("ui.common.previous")}
                        .path=${mdiChevronLeft}
                        class="prev"
                        @click=${this._handlePrev}
                      >
                      </ha-icon-button>
                      <ha-icon-button
                        .label=${this.hass.localize("ui.common.next")}
                        .path=${mdiChevronRight}
                        class="next"
                        @click=${this._handleNext}
                      >
                      </ha-icon-button>
                    </div>
                    <h1>${this.calendar.view.title}</h1>
                    <ha-button-toggle-group
                      .buttons=${viewToggleButtons}
                      .active=${this._activeView}
                      @value-changed=${this._handleView}
                    ></ha-button-toggle-group>
                  `:$$2`
                    <div class="controls">
                      <h1>${this.calendar.view.title}</h1>
                      <div>
                        <ha-icon-button
                          .label=${this.hass.localize("ui.common.previous")}
                          .path=${mdiChevronLeft}
                          class="prev"
                          @click=${this._handlePrev}
                        >
                        </ha-icon-button>
                        <ha-icon-button
                          .label=${this.hass.localize("ui.common.next")}
                          .path=${mdiChevronRight}
                          class="next"
                          @click=${this._handleNext}
                        >
                        </ha-icon-button>
                      </div>
                    </div>
                    <div class="controls">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >${this.hass.localize("ui.components.calendar.today")}</mwc-button
                      >
                      <ha-button-toggle-group
                        .buttons=${viewToggleButtons}
                        .active=${this._activeView}
                        @value-changed=${this._handleView}
                      ></ha-button-toggle-group>
                    </div>
                  `}
            </div>
          `:""}
      <div id="calendar"></div>
    `;}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){_get(_getPrototypeOf(HAFullCalendar.prototype),"willUpdate",this).call(this,changedProps);if(!this.calendar){return;}if(changedProps.has("events")){this.calendar.removeAllEventSources();this.calendar.addEventSource(this.events);}if(changedProps.has("views")&&!this.views.includes(this._activeView)){this._activeView=this.initialView&&this.views.includes(this.initialView)?this.initialView:this.views[0];this.calendar.changeView(this._activeView);this._fireViewChanged();}const oldHass=changedProps.get("hass");if(oldHass&&oldHass.language!==this.hass.language){this.calendar.setOption("locale",this.hass.language);}}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){const config={...defaultFullCalendarConfig,locale:this.hass.language,initialView:this.initialView,eventTimeFormat:{hour:useAmPm(this.hass.locale)?"numeric":"2-digit",minute:useAmPm(this.hass.locale)?"numeric":"2-digit",hour12:useAmPm(this.hass.locale)}};config.dateClick=info=>this._handleDateClick(info);config.eventClick=info=>this._handleEventClick(info);this.calendar=new Calendar(this.shadowRoot.getElementById("calendar"),config);this.calendar.render();this._fireViewChanged();}},{kind:"method",key:"_handleEventClick",value:function _handleEventClick(info){if(info.view.type!=="dayGridMonth"){return;}this._activeView="dayGridDay";this.calendar.changeView("dayGridDay");this.calendar.gotoDate(info.event.startStr);}},{kind:"method",key:"_handleDateClick",value:function _handleDateClick(info){if(info.view.type!=="dayGridMonth"){return;}this._activeView="dayGridDay";this.calendar.changeView("dayGridDay");this.calendar.gotoDate(info.dateStr);}},{kind:"method",key:"_handleNext",value:function _handleNext(){this.calendar.next();this._fireViewChanged();}},{kind:"method",key:"_handlePrev",value:function _handlePrev(){this.calendar.prev();this._fireViewChanged();}},{kind:"method",key:"_handleToday",value:function _handleToday(){this.calendar.today();this._fireViewChanged();}},{kind:"method",key:"_handleView",value:function _handleView(ev){this._activeView=ev.detail.value;this.calendar.changeView(this._activeView);this._fireViewChanged();}},{kind:"method",key:"_fireViewChanged",value:function _fireViewChanged(){fireEvent(this,"view-changed",{start:this.calendar.view.activeStart,end:this.calendar.view.activeEnd,view:this.calendar.view.type});}},{kind:"field",key:"_viewToggleButtons",value(){return memoizeOne(views=>viewButtons.filter(button=>views.includes(button.value)));}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyle,r$2`
        ${o$2(fullcalendarStyle)}
        ${o$2(daygridStyle)}
        ${o$2(listStyle)}

        :host {
          display: flex;
          flex-direction: column;
          --fc-theme-standard-border-color: var(--divider-color);
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
        }

        :host([narrow]) .header {
          padding-right: 8px;
          padding-left: 8px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: initial;
        }

        .navigation {
          display: flex;
          align-items: center;
          flex-grow: 0;
        }

        a {
          color: var(--primary-text-color);
        }

        .controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .today {
          margin-right: 20px;
        }

        .prev,
        .next {
          --mdc-icon-button-size: 32px;
        }

        ha-button-toggle-group {
          color: var(--primary-color);
        }

        #calendar {
          flex-grow: 1;
          background-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          min-height: 400px;
          --fc-neutral-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-list-event-hover-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-theme-standard-border-color: var(--divider-color);
          --fc-border-color: var(--divider-color);
          --fc-page-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
        }

        a {
          color: inherit !important;
        }

        .fc-theme-standard .fc-scrollgrid {
          border: 1px solid var(--divider-color);
        }

        .fc-scrollgrid-section-header td {
          border: none;
        }

        th.fc-col-header-cell.fc-day {
          color: var(--secondary-text-color);
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .fc-daygrid-dot-event:hover {
          background-color: inherit;
        }

        .fc-daygrid-day-top {
          text-align: center;
          padding-top: 5px;
          justify-content: center;
        }

        table.fc-scrollgrid-sync-table
          tbody
          tr:first-child
          .fc-daygrid-day-top {
          padding-top: 0;
        }

        a.fc-daygrid-day-number {
          float: none !important;
          font-size: 12px;
        }

        .fc .fc-daygrid-day-number {
          padding: 3px !important;
        }

        .fc .fc-daygrid-day.fc-day-today {
          background: inherit;
        }

        td.fc-day-today .fc-daygrid-day-top {
          padding-top: 4px;
        }

        td.fc-day-today .fc-daygrid-day-number {
          height: 24px;
          color: var(--text-primary-color) !important;
          background-color: var(--primary-color);
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          width: max-content;
          min-width: 24px;
          line-height: 140%;
        }

        .fc-daygrid-day-events {
          margin-top: 4px;
        }

        .fc-event {
          border-radius: 4px;
          line-height: 1.7;
        }

        .fc-daygrid-block-event .fc-event-main {
          padding: 0 1px;
        }

        .fc-day-past .fc-daygrid-day-events {
          opacity: 0.5;
        }

        .fc-icon-x:before {
          font-family: var(--paper-font-common-base_-_font-family);
          content: "X";
        }

        .fc-popover {
          background-color: var(--primary-background-color) !important;
        }

        .fc-popover-header {
          background-color: var(--secondary-background-color) !important;
        }

        .fc-theme-standard .fc-list-day-frame {
          background-color: transparent;
        }

        .fc-list.fc-view,
        .fc-list-event.fc-event td {
          border: none;
        }

        .fc-list-day.fc-day th {
          border-bottom: none;
          border-top: 1px solid var(--fc-theme-standard-border-color, #ddd) !important;
        }

        .fc-list-day-text {
          font-size: 16px;
          font-weight: 400;
        }

        .fc-list-day-side-text {
          font-weight: 400;
          font-size: 16px;
          color: var(--primary-color);
        }

        .fc-list-table td,
        .fc-list-day-frame {
          padding-top: 12px;
          padding-bottom: 12px;
        }

        :host([narrow])
          .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-time,
        :host([narrow])
          .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-title,
        :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-bottom {
          display: none;
        }

        :host([narrow])
          .fc
          .fc-dayGridMonth-view
          .fc-daygrid-event-harness-abs {
          visibility: visible !important;
          position: static;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-events {
          display: flex;
          min-height: 2em !important;
          justify-content: center;
          flex-wrap: wrap;
          max-height: 2em;
          height: 2em;
          overflow: hidden;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-scrollgrid-sync-table {
          overflow: hidden;
        }

        .fc-scroller::-webkit-scrollbar {
          width: 0.4rem;
          height: 0.4rem;
        }

        .fc-scroller::-webkit-scrollbar-thumb {
          -webkit-border-radius: 4px;
          border-radius: 4px;
          background: var(--scrollbar-thumb-color);
        }

        .fc-scroller {
          overflow-y: auto;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }
      `];}}]};},s$2);window.customElements.define("ha-full-calendar",HAFullCalendar);

let HuiCalendarCard=_decorate([n$1("hui-calendar-card")],function(_initialize,_LitElement){class HuiCalendarCard extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiCalendarCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-calendar-card-editor-dev.js');return document.createElement("hui-calendar-card-editor");}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(hass,entities,entitiesFill){const includeDomains=["calendar"];const maxEntities=2;const foundEntities=findEntities(hass,maxEntities,entities,entitiesFill,includeDomains);return {entities:foundEntities};}},{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"_events",value(){return [];}},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",decorators:[t$1()],key:"_calendars",value(){return [];}},{kind:"field",decorators:[t$1()],key:"_narrow",value(){return false;}},{kind:"field",decorators:[t$1()],key:"_veryNarrow",value(){return false;}},{kind:"field",decorators:[i$2("ha-full-calendar",true)],key:"_calendar",value:void 0},{kind:"field",key:"_startDate",value:void 0},{kind:"field",key:"_endDate",value:void 0},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){var _config$entities,_this$_config;if(!((_config$entities=config.entities)!==null&&_config$entities!==void 0&&_config$entities.length)){throw new Error("Entities must be specified");}if(!Array.isArray(config.entities)){throw new Error("Entities need to be an array");}this._calendars=config.entities.map((entity,idx)=>({entity_id:entity,backgroundColor:getColorByIndex(idx)}));if(((_this$_config=this._config)===null||_this$_config===void 0?void 0:_this$_config.entities)!==config.entities){this._fetchCalendarEvents();}this._config={initial_view:"dayGridMonth",...config};}},{kind:"method",key:"getCardSize",value:function getCardSize(){var _this$_config2;return (_this$_config2=this._config)!==null&&_this$_config2!==void 0&&_this$_config2.header?1:0+11;}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HuiCalendarCard.prototype),"connectedCallback",this).call(this);this.updateComplete.then(()=>this._attachObserver());}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){if(this._resizeObserver){this._resizeObserver.disconnect();}}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass||!this._calendars.length){return $$2``;}const views=this._veryNarrow?["list"]:["list","dayGridMonth","dayGridDay"];return $$2`
      <ha-card>
        <div class="header">${this._config.title}</div>
        <ha-full-calendar
          .narrow=${this._narrow}
          .events=${this._events}
          .hass=${this.hass}
          .views=${views}
          .initialView=${this._config.initial_view}
          @view-changed=${this._handleViewChanged}
        ></ha-full-calendar>
      </ha-card>
    `;}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HuiCalendarCard.prototype),"updated",this).call(this,changedProps);if(!this._config||!this.hass){return;}const oldHass=changedProps.get("hass");const oldConfig=changedProps.get("_config");if(!oldHass||!oldConfig||changedProps.has("hass")&&oldHass.themes!==this.hass.themes||changedProps.has("_config")&&oldConfig.theme!==this._config.theme){applyThemesOnElement(this,this.hass.themes,this._config.theme);}}},{kind:"method",key:"_handleViewChanged",value:function _handleViewChanged(ev){this._startDate=ev.detail.start;this._endDate=ev.detail.end;this._fetchCalendarEvents();}},{kind:"method",key:"_fetchCalendarEvents",value:async function _fetchCalendarEvents(){if(!this._startDate||!this._endDate){return;}this._events=await fetchCalendarEvents(this.hass,this._startDate,this._endDate,this._calendars);}},{kind:"method",key:"_measureCard",value:function _measureCard(){var _this$_calendar;const card=this.shadowRoot.querySelector("ha-card");if(!card){return;}this._narrow=card.offsetWidth<870;this._veryNarrow=card.offsetWidth<350;(_this$_calendar=this._calendar)===null||_this$_calendar===void 0?void 0:_this$_calendar.updateSize();}},{kind:"method",key:"_attachObserver",value:async function _attachObserver(){if(!this._resizeObserver){await installResizeObserver();this._resizeObserver=new ResizeObserver(debounce(()=>this._measureCard(),250,false));}const card=this.shadowRoot.querySelector("ha-card");// If we show an error or warning there is no ha-card
if(!card){return;}this._resizeObserver.observe(card);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      ha-card {
        position: relative;
        padding: 0 8px 8px;
        box-sizing: border-box;
        height: 100%;
      }

      .header {
        color: var(--ha-card-header-color, --primary-text-color);
        font-size: var(--ha-card-header-font-size, 24px);
        line-height: 1.2;
        padding-top: 16px;
        padding-left: 8px;
      }
    `;}}]};},s$2);

var huiCalendarCard = /*#__PURE__*/Object.freeze({
  __proto__: null,
  HuiCalendarCard: HuiCalendarCard
});

const computeCardSize=card=>{if(typeof card.getCardSize==="function"){return card.getCardSize();}if(customElements.get(card.localName)){return 1;}return customElements.whenDefined(card.localName).then(()=>computeCardSize(card));};

// Parse array of entity objects from config
const processConfigEntities=(entities,checkEntityId=true)=>{if(!entities||!Array.isArray(entities)){throw new Error("Entities need to be an array");}return entities.map((entityConf,index)=>{if(typeof entityConf==="object"&&!Array.isArray(entityConf)&&entityConf.type){return entityConf;}let config;if(typeof entityConf==="string"){config={entity:entityConf};}else if(typeof entityConf==="object"&&!Array.isArray(entityConf)){if(!("entity"in entityConf)){throw new Error(`Entity object at position ${index} is missing entity field.`);}config=entityConf;}else {throw new Error(`Invalid entity specified at position ${index}.`);}if(checkEntityId&&!isValidEntityId(config.entity)){throw new Error(`Invalid entity ID at position ${index}: ${config.entity}`);}return config;});};

const turnOnOffEntities=(hass,entityIds,turnOn=true)=>{const domainsToCall={};entityIds.forEach(entityId=>{if(STATES_OFF.includes(hass.states[entityId].state)===turnOn){const stateDomain=computeDomain(entityId);const serviceDomain=["cover","lock"].includes(stateDomain)?stateDomain:"homeassistant";if(!(serviceDomain in domainsToCall)){domainsToCall[serviceDomain]=[];}domainsToCall[serviceDomain].push(entityId);}});Object.keys(domainsToCall).forEach(domain=>{let service;switch(domain){case"lock":service=turnOn?"unlock":"lock";break;case"cover":service=turnOn?"open_cover":"close_cover";break;default:service=turnOn?"turn_on":"turn_off";}const entities=domainsToCall[domain];hass.callService(domain,service,{entity_id:entities});});};

_decorate([n$1("hui-entities-toggle")],function(_initialize,_LitElement){class HuiEntitiesToggle extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiEntitiesToggle,d:[{kind:"field",decorators:[e$3({type:Array})],key:"entities",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_toggleEntities",value:void 0},{kind:"method",key:"willUpdate",value:function willUpdate(changedProperties){_get(_getPrototypeOf(HuiEntitiesToggle.prototype),"willUpdate",this).call(this,changedProperties);if(changedProperties.has("entities")){this._toggleEntities=this.entities.filter(entityId=>entityId in this.hass.states&&DOMAINS_TOGGLE.has(entityId.split(".",1)[0]));}}},{kind:"method",key:"render",value:function render(){var _this$_toggleEntities;if(!((_this$_toggleEntities=this._toggleEntities)!==null&&_this$_toggleEntities!==void 0&&_this$_toggleEntities.length)){return $$2``;}return $$2`
      <ha-switch
        aria-label=${this.hass.localize("ui.panel.lovelace.card.entities.toggle")}
        .checked=${this._toggleEntities.some(entityId=>{const stateObj=this.hass.states[entityId];return stateObj&&stateObj.state==="on";})}
        @change=${this._callService}
      ></ha-switch>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        width: 40px;
        display: block;
      }
      ha-switch {
        padding: 13px 4px;
        margin: -4px -1px;
      }
    `;}},{kind:"method",key:"_callService",value:function _callService(ev){forwardHaptic("light");const turnOn=ev.target.checked;turnOnOffEntities(this.hass,this._toggleEntities,turnOn);}}]};},s$2);

const LAZY_LOAD_TYPES$2={picture:()=>import('./hui-picture-header-footer-dev.js'),buttons:()=>import('./hui-buttons-header-footer-dev.js'),graph:()=>import('./hui-graph-header-footer-dev.js')};const createHeaderFooterElement=config=>createLovelaceElement("header-footer",config,undefined,LAZY_LOAD_TYPES$2,undefined,undefined);const getHeaderFooterElementClass=type=>getLovelaceElementClass(type,"header-footer",undefined,LAZY_LOAD_TYPES$2);

function hasConfigChanged(element,changedProps){if(changedProps.has("_config")){return true;}const oldHass=changedProps.get("hass");if(!oldHass){return true;}if(oldHass.connected!==element.hass.connected||oldHass.themes!==element.hass.themes||oldHass.locale!==element.hass.locale||oldHass.localize!==element.hass.localize||oldHass.config.state!==element.hass.config.state){return true;}return false;}// Check if config or Entity changed
function hasConfigOrEntityChanged(element,changedProps){if(hasConfigChanged(element,changedProps)){return true;}const oldHass=changedProps.get("hass");return oldHass.states[element._config.entity]!==element.hass.states[element._config.entity];}// Check if config or Entities changed
function hasConfigOrEntitiesChanged(element,changedProps){if(hasConfigChanged(element,changedProps)){return true;}const oldHass=changedProps.get("hass");const entities=processConfigEntities(element._config.entities,false);return entities.some(entity=>"entity"in entity&&oldHass.states[entity.entity]!==element.hass.states[entity.entity]);}

// Toggle Attribute Polyfill because it's too new for some browsers
const toggleAttribute=(el,name,force)=>{if(force!==undefined){force=!!force;}if(el.hasAttribute(name)){if(force){return true;}el.removeAttribute(name);return false;}if(force===false){return false;}el.setAttribute(name,"");return true;};

let HuiGenericEntityRow=_decorate(null,function(_initialize,_LitElement){class HuiGenericEntityRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiGenericEntityRow,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"config",value:void 0},{kind:"field",decorators:[e$3()],key:"secondaryText",value:void 0},{kind:"field",decorators:[e$3({type:Boolean})],key:"hideName",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean})],static:true,key:"cssSize",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean})],key:"catchInteraction",value:void 0},{kind:"method",key:"render",value:// Allows to control if this row should capture the user interaction, e.g. with its
// toggle switch, button or input field. Some domains dynamically decide what to show
// => static determination will not work => the caller has to pass the desired value in.
// Same applies for custom components that want to override the default behavior.
// Default behavior is controlled by DOMAINS_INPUT_ROW.
function render(){var _this$config$name,_this$catchInteractio;if(!this.hass||!this.config){return $$2``;}const stateObj=this.config.entity?this.hass.states[this.config.entity]:undefined;if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this.config.entity)}
        </hui-warning>
      `;}const domain=computeDomain(this.config.entity);// By default, we always show a pointer, since if there is no explicit configuration provided,
// the frontend always assumes "more-info" in the action handler. We only need to hide the pointer
// if the tap action is explicitly set to "none".
const pointer=!(this.config.tap_action&&this.config.tap_action.action==="none");const hasSecondary=this.secondaryText||this.config.secondary_info;const name=(_this$config$name=this.config.name)!==null&&_this$config$name!==void 0?_this$config$name:computeStateName(stateObj);return $$2`
      <state-badge
        class=${o$1({pointer})}
        .hass=${this.hass}
        .stateObj=${stateObj}
        .overrideIcon=${this.config.icon}
        .overrideImage=${this.config.image}
        .stateColor=${this.config.state_color}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({hasHold:hasAction(this.config.hold_action),hasDoubleClick:hasAction(this.config.double_tap_action)})}
        tabindex=${l$2(pointer?"0":undefined)}
      ></state-badge>
      ${!this.hideName?$$2` <div
            class="info  ${o$1({pointer,"text-contenttt":!hasSecondary})}"
            @action=${this._handleAction}
            .actionHandler=${actionHandler({hasHold:hasAction(this.config.hold_action),hasDoubleClick:hasAction(this.config.double_tap_action)})}
            .title=${name}
          >
            ${this.config.name||computeStateName(stateObj)}
            ${hasSecondary?$$2`
                  <div class="secondary">
                    ${this.secondaryText||(this.config.secondary_info==="entity-id"?stateObj.entity_id:this.config.secondary_info==="last-changed"?$$2`
                          <ha-relative-time
                            .hass=${this.hass}
                            .datetime=${stateObj.last_changed}
                            capitalize
                          ></ha-relative-time>
                        `:this.config.secondary_info==="last-updated"?$$2`
                          <ha-relative-time
                            .hass=${this.hass}
                            .datetime=${stateObj.last_updated}
                            capitalize
                          ></ha-relative-time>
                        `:this.config.secondary_info==="last-triggered"?stateObj.attributes.last_triggered?$$2`
                            <ha-relative-time
                              .hass=${this.hass}
                              .datetime=${stateObj.attributes.last_triggered}
                              capitalize
                            ></ha-relative-time>
                          `:this.hass.localize("ui.panel.lovelace.cards.entities.never_triggered"):this.config.secondary_info==="position"&&stateObj.attributes.current_position!==undefined?`${this.hass.localize("ui.card.cover.position")}: ${stateObj.attributes.current_position}`:this.config.secondary_info==="tilt-position"&&stateObj.attributes.current_tilt_position!==undefined?`${this.hass.localize("ui.card.cover.tilt_position")}: ${stateObj.attributes.current_tilt_position}`:this.config.secondary_info==="brightness"&&stateObj.attributes.brightness?$$2`${Math.round(stateObj.attributes.brightness/255*100)}
                        %`:"")}
                  </div>
                `:""}
          </div>`:$$2``}
      ${!this.config.hideInteract// aqui remove toggs
?((_this$catchInteractio=this.catchInteraction)!==null&&_this$catchInteractio!==void 0?_this$catchInteractio:!DOMAINS_INPUT_ROW.includes(domain)// aqui toggles
)?$$2` <div
              class="text-content2 ${o$1({pointer})}"
              @action=${this._handleAction}
              .actionHandler=${actionHandler({hasHold:hasAction(this.config.hold_action),hasDoubleClick:hasAction(this.config.double_tap_action)})}
            >
              <slot></slot>
            </div>`:$$2`<slot></slot>`:$$2``}
    `;}},{kind:"method",key:"updated",value:function updated(changedProps){var _this$config;_get(_getPrototypeOf(HuiGenericEntityRow.prototype),"updated",this).call(this,changedProps);toggleAttribute(this,"no-secondary",!this.secondaryText&&!((_this$config=this.config)!==null&&_this$config!==void 0&&_this$config.secondary_info));if(changedProps.has("hass")){toggleAttribute(this,"rtl",computeRTL(this.hass));}}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this.config,ev.detail.action);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: flex;
        align-items: center;
        flex-direction: row;
      }
      .info {
        padding-left: 10%;
        padding-right: 10%;
        flex: 1 1 30%;
      }
      .info,
      .info > * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .flex ::slotted(*) {
        margin-left: 8px;
        min-width: 0;
      }
      .flex ::slotted([slot="secondary"]) {
        margin-left: 0;
      }
      .secondary,
      ha-relative-time {
        color: var(--secondary-text-color);
      }
      state-badge {
        flex: 0 0 24px;
      }
      :host([rtl]) .flex {
        margin-left: 0;
        margin-right: 16px;
      }
      :host([rtl]) .flex ::slotted(*) {
        margin-left: 0;
        margin-right: 8px;
      }
      .pointer {
        cursor: pointer;
      }

      .text-content2 {
        max-width: 60px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;}}]};},s$2);customElements.define("hui-generic-entity-row",HuiGenericEntityRow);

_decorate([n$1("hui-media-player-entity-row")],function(_initialize,_LitElement){class HuiMediaPlayerEntityRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiMediaPlayerEntityRow,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",decorators:[t$1()],key:"_narrow",value(){return false;}},{kind:"field",decorators:[t$1()],key:"_veryNarrow",value(){return false;}},{kind:"field",key:"_resizeObserver",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config||!config.entity){throw new Error("Entity must be specified");}this._config=config;}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HuiMediaPlayerEntityRow.prototype),"connectedCallback",this).call(this);this._attachObserver();}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){var _this$_resizeObserver;(_this$_resizeObserver=this._resizeObserver)===null||_this$_resizeObserver===void 0?void 0:_this$_resizeObserver.unobserve(this);}},{kind:"method",key:"willUpdate",value:function willUpdate(){if(!this.hasUpdated){this._measureCard();}}},{kind:"method",key:"firstUpdated",value:function firstUpdated(){this._attachObserver();}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this.hass||!this._config){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}const entityState=stateObj.state;const controlButton=this._computeControlButton(stateObj);const assumedState=stateObj.attributes.assumed_state===true;const buttons=$$2`
      ${!this._narrow&&(entityState==="playing"||assumedState)&&supportsFeature(stateObj,SUPPORT_PREVIOUS_TRACK)?$$2`
            <ha-icon-button
              .path=${mdiSkipPrevious}
              .label=${this.hass.localize("ui.card.media_player.media_previous_track")}
              @click=${this._previousTrack}
            ></ha-icon-button>
          `:""}
      ${!assumedState&&(entityState==="playing"&&(supportsFeature(stateObj,SUPPORT_PAUSE)||supportsFeature(stateObj,SUPPORT_STOP$1))||(entityState==="paused"||entityState==="idle")&&supportsFeature(stateObj,SUPPORT_PLAY)||entityState==="on"&&(supportsFeature(stateObj,SUPPORT_PLAY)||supportsFeature(stateObj,SUPPORT_PAUSE)))?$$2`
            <ha-icon-button
              .path=${controlButton.icon}
              .label=${this.hass.localize(`ui.card.media_player.${controlButton.action}`)}
              @click=${this._playPauseStop}
            ></ha-icon-button>
          `:""}
      ${assumedState&&supportsFeature(stateObj,SUPPORT_PLAY)?$$2`
            <ha-icon-button
              .path=${mdiPlay}
              .label=${this.hass.localize(`ui.card.media_player.media_play`)}
              @click=${this._play}
            ></ha-icon-button>
          `:""}
      ${assumedState&&supportsFeature(stateObj,SUPPORT_PAUSE)?$$2`
            <ha-icon-button
              .path=${mdiPause}
              .label=${this.hass.localize(`ui.card.media_player.media_pause`)}
              @click=${this._pause}
            ></ha-icon-button>
          `:""}
      ${assumedState&&supportsFeature(stateObj,SUPPORT_STOP$1)?$$2`
            <ha-icon-button
              .path=${mdiStop}
              .label=${this.hass.localize(`ui.card.media_player.media_stop`)}
              @click=${this._stop}
            ></ha-icon-button>
          `:""}
      ${(entityState==="playing"||assumedState)&&supportsFeature(stateObj,SUPPORT_NEXT_TRACK)?$$2`
            <ha-icon-button
              .path=${mdiSkipNext}
              .label=${this.hass.localize("ui.card.media_player.media_next_track")}
              @click=${this._nextTrack}
            ></ha-icon-button>
          `:""}
    `;const mediaDescription=computeMediaDescription(stateObj);return $$2`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .secondaryText=${mediaDescription||computeStateDisplay(this.hass.localize,stateObj,this.hass.locale)}
      >
        <div class="controls">
          ${supportsFeature(stateObj,SUPPORT_TURN_ON)&&entityState==="off"&&!UNAVAILABLE_STATES.includes(entityState)?$$2`
                <ha-icon-button
                  .path=${mdiPower}
                  .label=${this.hass.localize("ui.card.media_player.turn_on")}
                  @click=${this._togglePower}
                ></ha-icon-button>
              `:!supportsFeature(stateObj,SUPPORT_VOLUME_SET)&&!supportsFeature(stateObj,SUPPORT_VOLUME_BUTTONS)?buttons:""}
          ${supportsFeature(stateObj,SUPPORT_TURN_OFF)&&entityState!=="off"&&!UNAVAILABLE_STATES.includes(entityState)?$$2`
                <ha-icon-button
                  .path=${mdiPower}
                  .label=${this.hass.localize("ui.card.media_player.turn_off")}
                  @click=${this._togglePower}
                ></ha-icon-button>
              `:""}
        </div>
      </hui-generic-entity-row>
      ${(supportsFeature(stateObj,SUPPORT_VOLUME_SET)||supportsFeature(stateObj,SUPPORT_VOLUME_BUTTONS))&&![UNAVAILABLE,UNKNOWN,"off"].includes(entityState)?$$2`
            <div class="flex">
              <div class="volume">
                ${supportsFeature(stateObj,SUPPORT_VOLUME_MUTE)?$$2`
                      <ha-icon-button
                        .path=${stateObj.attributes.is_volume_muted?mdiVolumeOff:mdiVolumeHigh}
                        .label=${this.hass.localize(`ui.card.media_player.${stateObj.attributes.is_volume_muted?"media_volume_mute":"media_volume_unmute"}`)}
                        @click=${this._toggleMute}
                      ></ha-icon-button>
                    `:""}
                ${!this._veryNarrow&&supportsFeature(stateObj,SUPPORT_VOLUME_SET)?$$2`
                      <ha-slider
                        .dir=${computeRTLDirection(this.hass)}
                        .value=${Number(stateObj.attributes.volume_level)*100}
                        pin
                        @change=${this._selectedValueChanged}
                        ignore-bar-touch
                        id="input"
                      ></ha-slider>
                    `:!this._veryNarrow&&supportsFeature(stateObj,SUPPORT_VOLUME_BUTTONS)?$$2`
                      <ha-icon-button
                        .path=${mdiVolumeMinus}
                        .label=${this.hass.localize("ui.card.media_player.media_volume_down")}
                        @click=${this._volumeDown}
                      ></ha-icon-button>
                      <ha-icon-button
                        .path=${mdiVolumePlus}
                        .label=${this.hass.localize("ui.card.media_player.media_volume_up")}
                        @click=${this._volumeUp}
                      ></ha-icon-button>
                    `:""}
              </div>

              <div class="controls">${buttons}</div>
            </div>
          `:""}
    `;}},{kind:"method",key:"_attachObserver",value:async function _attachObserver(){if(!this._resizeObserver){await installResizeObserver();this._resizeObserver=new ResizeObserver(debounce(()=>this._measureCard(),250,false));}this._resizeObserver.observe(this);}},{kind:"method",key:"_measureCard",value:function _measureCard(){if(!this.isConnected){return;}this._narrow=(this.clientWidth||0)<300;this._veryNarrow=(this.clientWidth||0)<225;}},{kind:"method",key:"_computeControlButton",value:function _computeControlButton(stateObj){return stateObj.state==="on"?{icon:mdiPlayPause,action:"media_play_pause"}:stateObj.state!=="playing"?{icon:mdiPlay,action:"media_play"}:supportsFeature(stateObj,SUPPORT_PAUSE)?{icon:mdiPause,action:"media_pause"}:{icon:mdiStop,action:"media_stop"};}},{kind:"method",key:"_togglePower",value:function _togglePower(){const stateObj=this.hass.states[this._config.entity];this.hass.callService("media_player",stateObj.state==="off"?"turn_on":"turn_off",{entity_id:this._config.entity});}},{kind:"method",key:"_playPauseStop",value:function _playPauseStop(){const stateObj=this.hass.states[this._config.entity];const service=stateObj.state!=="playing"?"media_play":supportsFeature(stateObj,SUPPORT_PAUSE)?"media_pause":"media_stop";this.hass.callService("media_player",service,{entity_id:this._config.entity});}},{kind:"method",key:"_play",value:function _play(){this.hass.callService("media_player","media_play",{entity_id:this._config.entity});}},{kind:"method",key:"_pause",value:function _pause(){this.hass.callService("media_player","media_pause",{entity_id:this._config.entity});}},{kind:"method",key:"_stop",value:function _stop(){this.hass.callService("media_player","media_stop",{entity_id:this._config.entity});}},{kind:"method",key:"_previousTrack",value:function _previousTrack(){this.hass.callService("media_player","media_previous_track",{entity_id:this._config.entity});}},{kind:"method",key:"_nextTrack",value:function _nextTrack(){this.hass.callService("media_player","media_next_track",{entity_id:this._config.entity});}},{kind:"method",key:"_toggleMute",value:function _toggleMute(){this.hass.callService("media_player","volume_mute",{entity_id:this._config.entity,is_volume_muted:!this.hass.states[this._config.entity].attributes.is_volume_muted});}},{kind:"method",key:"_volumeDown",value:function _volumeDown(){this.hass.callService("media_player","volume_down",{entity_id:this._config.entity});}},{kind:"method",key:"_volumeUp",value:function _volumeUp(){this.hass.callService("media_player","volume_up",{entity_id:this._config.entity});}},{kind:"method",key:"_selectedValueChanged",value:function _selectedValueChanged(ev){this.hass.callService("media_player","volume_set",{entity_id:this._config.entity,volume_level:ev.target.value/100});}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: block;
      }
      .flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .volume {
        display: flex;
        flex-grow: 2;
        flex-shrink: 2;
      }
      .controls {
        white-space: nowrap;
      }
      ha-slider {
        flex-grow: 2;
        flex-shrink: 2;
        width: 100%;
        margin: 0 -8px 0 1px;
      }
    `;}}]};},s$2);

_decorate([n$1("hui-scene-entity-row")],function(_initialize,_LitElement){class HuiSceneEntityRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiSceneEntityRow,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config){throw new Error("Invalid configuration");}this._config=config;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}return $$2`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <mwc-button
          @click=${this._callService}
          .disabled=${stateObj.state===UNAVAILABLE}
          class="text-content"
        >
          ${this._config.action_name||this.hass.localize("ui.card.scene.activate")}
        </mwc-button>
      </hui-generic-entity-row>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      mwc-button {
        margin-right: -0.57em;
      }
      :host {
        cursor: pointer;
      }
    `;}},{kind:"method",key:"_callService",value:function _callService(ev){ev.stopPropagation();activateScene(this.hass,this._config.entity);}}]};},s$2);

_decorate([n$1("hui-script-entity-row")],function(_initialize,_LitElement){class HuiScriptEntityRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiScriptEntityRow,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config){throw new Error("Invalid configuration");}this._config=config;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}return $$2`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${stateObj.state==="on"?$$2`<mwc-button @click=${this._cancelScript}>
              ${stateObj.attributes.mode!=="single"&&(stateObj.attributes.current||0)>0?this.hass.localize("ui.card.script.cancel_multiple","number",stateObj.attributes.current):this.hass.localize("ui.card.script.cancel")}
            </mwc-button>`:""}
        ${stateObj.state==="off"||stateObj.attributes.max?$$2`<mwc-button
              @click=${this._runScript}
              .disabled=${UNAVAILABLE_STATES.includes(stateObj.state)||!canRun(stateObj)}
            >
              ${this._config.action_name||this.hass.localize("ui.card.script.run")}
            </mwc-button>`:""}
      </hui-generic-entity-row>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      mwc-button:last-child {
        margin-right: -0.57em;
      }
    `;}},{kind:"method",key:"_cancelScript",value:function _cancelScript(ev){ev.stopPropagation();this._callService("turn_off");}},{kind:"method",key:"_runScript",value:function _runScript(ev){ev.stopPropagation();this._callService("turn_on");}},{kind:"method",key:"_callService",value:function _callService(service){this.hass.callService("script",service,{entity_id:this._config.entity});}}]};},s$2);

_decorate([n$1("hui-sensor-entity-row")],function(_initialize,_LitElement){class HuiSensorEntityRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiSensorEntityRow,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config){throw new Error("Invalid configuration");}this._config=config;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}return $$2`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        <div
          class="text-content"
          @action=${this._handleAction}
          .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
        >
          ${stateObj.attributes.device_class===SENSOR_DEVICE_CLASS_TIMESTAMP&&!UNAVAILABLE_STATES.includes(stateObj.state)?$$2`
                <hui-timestamp-display
                  .hass=${this.hass}
                  .ts=${new Date(stateObj.state)}
                  .format=${this._config.format}
                  capitalize
                ></hui-timestamp-display>
              `:computeStateDisplay(this.hass.localize,stateObj,this.hass.locale)}
        </div>
      </hui-generic-entity-row>
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      div {
        text-align: right;
      }
      .text-content {
        max-width: 33px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;}}]};},s$2);

_decorate([n$1("hui-text-entity-row")],function(_initialize,_LitElement){class HuiTextEntityRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiTextEntityRow,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config){throw new Error("Invalid configuration");}this._config=config;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}return $$2`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${computeStateDisplay(this.hass.localize,stateObj,this.hass.locale)}
      </hui-generic-entity-row>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      div {
        text-align: right;
      }
      .pointer {
        cursor: pointer;
      }
    `;}}]};},s$2);

_decorate([n$1("hui-toggle-entity-row")],function(_initialize,_LitElement){class HuiToggleEntityRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiToggleEntityRow,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config){throw new Error("Invalid configuration");}this._config=config;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}const showToggle=stateObj.state==="on"||stateObj.state==="off"||UNAVAILABLE_STATES.includes(stateObj.state);return $$2`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .catchInteraction=${!showToggle}
      >
        ${showToggle?$$2`
              <ha-entity-toggle
                .hass=${this.hass}
                .stateObj=${stateObj}
              ></ha-entity-toggle>
            `:$$2`
              <div class="text-content">
                ${computeStateDisplay(this.hass.localize,stateObj,this.hass.locale)}
              </div>
            `}
      </hui-generic-entity-row>
    `;}}]};},s$2);

_decorate([n$1("hui-attribute-row")],function(_initialize,_LitElement){class HuiAttributeRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiAttributeRow,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config){throw new Error("Invalid configuration");}if(!config.entity){throw new Error("Entity not specified");}if(!config.attribute){throw new Error("Attribute not specified");}this._config=config;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}const attribute=stateObj.attributes[this._config.attribute];let date;if(this._config.format){date=new Date(attribute);}return $$2`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${this._config.prefix}
        ${this._config.format&&checkValidDate(date)?$$2` <hui-timestamp-display
              .hass=${this.hass}
              .ts=${date}
              .format=${this._config.format}
              capitalize
            ></hui-timestamp-display>`:typeof attribute==="number"?formatNumber(attribute,this.hass.locale):attribute!==undefined?formatAttributeValue(this.hass,attribute):"—"}
        ${this._config.suffix}
      </hui-generic-entity-row>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      div {
        text-align: right;
      }
    `;}}]};},s$2);

var huiAttributeRow = /*#__PURE__*/Object.freeze({
  __proto__: null
});

let HuiButtonRow=_decorate([n$1("hui-button-row")],function(_initialize,_LitElement){class HuiButtonRow extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiButtonRow,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config){throw new Error("Invalid configuration");}if(!config.name&&!config.entity){throw new Error("No name and no entity specified");}this._config={tap_action:{action:config.entity&&DOMAINS_TOGGLE.has(computeDomain(config.entity))?"toggle":"more-info"},hold_action:{action:"more-info"},...config};}},{kind:"method",key:"render",value:function render(){var _this$_config$name;if(!this._config){return $$2``;}const stateObj=this._config.entity&&this.hass?this.hass.states[this._config.entity]:undefined;const name=(_this$_config$name=this._config.name)!==null&&_this$_config$name!==void 0?_this$_config$name:stateObj?computeStateName(stateObj):"";return $$2`
      <ha-state-icon .icon=${this._config.icon} .state=${stateObj}>
      </ha-state-icon>
      <div class="flex">
        <div .title=${name}>${name}</div>
        <mwc-button
          @action=${this._handleAction}
          .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
          >${this._config.action_name?this._config.action_name:this.hass.localize("ui.card.service.run")}</mwc-button
        >
      </div>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: flex;
        align-items: center;
      }
      ha-state-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      .flex {
        flex: 1;
        overflow: hidden;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .flex div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      mwc-button {
        margin-right: -0.57em;
      }
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}}]};},s$2);

_decorate([n$1("hui-call-service-row")],function(_initialize,_HuiButtonRow){class HuiCallServiceRow extends _HuiButtonRow{constructor(...args){super(...args);_initialize(this);}}return {F:HuiCallServiceRow,d:[{kind:"method",key:"setConfig",value:function setConfig(config){const callServiceConfig=config;if(!callServiceConfig){throw new Error("Invalid configuration");}if(!callServiceConfig.name){throw new Error("No name specified");}if(!callServiceConfig.service){throw new Error("No service specified");}_get(_getPrototypeOf(HuiCallServiceRow.prototype),"setConfig",this).call(this,{tap_action:{action:"call-service",service:callServiceConfig.service,service_data:callServiceConfig.service_data},...callServiceConfig,type:"button"});}}]};},HuiButtonRow);

const ALWAYS_LOADED_TYPES$2=new Set(["media-player-entity","scene-entity","script-entity","sensor-entity","text-entity","toggle-entity","button","call-service"]);const LAZY_LOAD_TYPES$1={"button-entity":()=>import('./hui-button-entity-row-dev.js'),"climate-entity":()=>import('./hui-climate-entity-row-dev.js'),"cover-entity":()=>import('./hui-cover-entity-row-dev.js'),"group-entity":()=>import('./hui-group-entity-row-dev.js'),"input-button-entity":()=>import('./hui-input-button-entity-row-dev.js'),"humidifier-entity":()=>import('./hui-humidifier-entity-row-dev.js'),"input-datetime-entity":()=>import('./hui-input-datetime-entity-row-dev.js'),"input-number-entity":()=>import('./hui-input-number-entity-row-dev.js'),"input-select-entity":()=>import('./hui-input-select-entity-row-dev.js'),"input-text-entity":()=>import('./hui-input-text-entity-row-dev.js'),"lock-entity":()=>import('./hui-lock-entity-row-dev.js'),"number-entity":()=>import('./hui-number-entity-row-dev.js'),"select-entity":()=>import('./hui-select-entity-row-dev.js'),"timer-entity":()=>import('./hui-timer-entity-row-dev.js'),conditional:()=>import('./hui-conditional-row-dev.js'),"weather-entity":()=>import('./hui-weather-entity-row-dev.js'),divider:()=>import('./hui-divider-row-dev.js'),section:()=>import('./hui-section-row-dev.js'),weblink:()=>import('./hui-weblink-row-dev.js'),// cast: () => import("../special-rows/hui-cast-row"),
buttons:()=>import('./hui-buttons-row-dev.js'),attribute:()=>Promise.resolve().then(function () { return huiAttributeRow; }),text:()=>import('./hui-text-row-dev.js')};const DOMAIN_TO_ELEMENT_TYPE={_domain_not_found:"text",alert:"toggle",automation:"toggle",button:"button",climate:"climate",cover:"cover",fan:"toggle",group:"group",humidifier:"humidifier",input_boolean:"toggle",input_button:"input-button",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",number:"number",remote:"toggle",scene:"scene",script:"script",select:"select",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",// Temporary. Once climate is rewritten,
// water heater should get its own row.
water_heater:"climate",input_datetime:"input-datetime",weather:"weather"};const createRowElement=config=>createLovelaceElement("row",config,ALWAYS_LOADED_TYPES$2,LAZY_LOAD_TYPES$1,DOMAIN_TO_ELEMENT_TYPE,undefined);const getRowElementClass=type=>getLovelaceElementClass(type,"row",ALWAYS_LOADED_TYPES$2,LAZY_LOAD_TYPES$1);

_decorate([n$1("hui-entities-card")],function(_initialize,_LitElement){class HuiEntitiesCard extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiEntitiesCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-entities-card-editor-dev.js');return document.createElement("hui-entities-card-editor");}},{kind:"field",decorators:[e$3({type:Boolean})],key:"hideInteract",value(){return false;}},{kind:"field",decorators:[e$3({type:String})],key:"layout",value(){return "big";}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(hass,entities,entitiesFallback){const maxEntities=3;const foundEntities=findEntities(hass,maxEntities,entities,entitiesFallback,["light","switch"]);return {type:"entities",entities:foundEntities};}},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",key:"_hass",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"_showHeaderToggle",value:void 0},{kind:"field",key:"_headerElement",value:void 0},{kind:"field",key:"_footerElement",value:void 0},{kind:"set",key:"hass",value:function hass(_hass){var _this$shadowRoot,_this$shadowRoot2;this._hass=_hass;(_this$shadowRoot=this.shadowRoot)===null||_this$shadowRoot===void 0?void 0:_this$shadowRoot.querySelectorAll("#states > div > *").forEach(element=>{element.hass=_hass;});if(this._headerElement){this._headerElement.hass=_hass;}if(this._footerElement){this._footerElement.hass=_hass;}const entitiesToggle=(_this$shadowRoot2=this.shadowRoot)===null||_this$shadowRoot2===void 0?void 0:_this$shadowRoot2.querySelector("hui-entities-toggle");if(entitiesToggle){entitiesToggle.hass=_hass;}}},{kind:"method",key:"getCardSize",value:async function getCardSize(){if(!this._config){return 0;}// +1 for the header
let size=(this._config.title||this._showHeaderToggle?2:0)+1;// + (this._config.entities.length || 1);
if(this._headerElement){const headerSize=computeCardSize(this._headerElement);size+=headerSize instanceof Promise?await headerSize:headerSize;}if(this._footerElement){const footerSize=computeCardSize(this._footerElement);size+=footerSize instanceof Promise?await footerSize:footerSize;}return size;}},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entities||!Array.isArray(config.entities)){throw new Error("Entities must be specified");}const entities=processConfigEntities(config.entities);this._config=config;this._configEntities=entities;if(config.title!==undefined&&config.show_header_toggle===undefined){// Default value is show toggle if we can at least toggle 2 entities.
let toggleable=0;for(const rowConf of entities){if(!("entity"in rowConf)){continue;}toggleable+=Number(DOMAINS_TOGGLE.has(computeDomain(rowConf.entity)));if(toggleable===2){break;}}this._showHeaderToggle=toggleable===2;}else {this._showHeaderToggle=config.show_header_toggle;}if(this._config.header){this._headerElement=createHeaderFooterElement(this._config.header);this._headerElement.type="header";if(this._hass){this._headerElement.hass=this._hass;}}else {this._headerElement=undefined;}if(this._config.footer){this._footerElement=createHeaderFooterElement(this._config.footer);this._footerElement.type="footer";if(this._hass){this._footerElement.hass=this._hass;}}else {this._footerElement=undefined;}}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HuiEntitiesCard.prototype),"updated",this).call(this,changedProps);if(!this._config||!this._hass){return;}const oldHass=changedProps.get("_hass");const oldConfig=changedProps.get("_config");if(changedProps.has("_hass")&&(!oldHass||oldHass.themes!==this._hass.themes)||changedProps.has("_config")&&(!oldConfig||oldConfig.theme!==this._config.theme)){applyThemesOnElement(this,this._hass.themes,this._config.theme);}}},{kind:"method",key:"render",value:function render(){var _this$_config3,_this$_config4,_this$_config5,_this$_config6;if(!this._config||!this._hass){return $$2``;}if(this.layout==="medium"){var _this$_config,_this$_config2;this.hideInteract=// eslint-disable-next-line no-unneeded-ternary
(_this$_config=this._config)!==null&&_this$_config!==void 0&&_this$_config.entities.length&&((_this$_config2=this._config)===null||_this$_config2===void 0?void 0:_this$_config2.entities.length)>4?true// hide interact
:false;// show interact
}if(this.layout==="small"){this.hideInteract=true;}return $$2`
      <ha-card
        class=${o$1({squared:this.layout!=="big"})}
      >
        <div
          id="states"
          class=${o$1({"card-content":this.layout==="big","card-content-medium2":this.layout==="medium"&&((_this$_config3=this._config)===null||_this$_config3===void 0?void 0:_this$_config3.entities.length)&&((_this$_config4=this._config)===null||_this$_config4===void 0?void 0:_this$_config4.entities.length)>4,"card-content-medium":this.layout==="medium"&&(!((_this$_config5=this._config)!==null&&_this$_config5!==void 0&&_this$_config5.entities.length)||((_this$_config6=this._config)===null||_this$_config6===void 0?void 0:_this$_config6.entities.length)<=4),"card-content-small":this.layout==="small"})}
        >
          ${!this._config.title&&!this._showHeaderToggle&&!this._config.icon?"":$$2`
                <div
                  class=${o$1({"card-header":this.layout==="big","card-header-medium":this.layout==="medium","card-header-small":this.layout==="small"})}
                >
                  <div
                    class=${o$1({name:this.layout==="big"||this.layout==="medium","name-small":this.layout==="small"})}
                  >
                    ${this._config.icon?$$2`
                          <ha-icon
                            class="icon"
                            .icon=${this._config.icon}
                          ></ha-icon>
                        `:""}
                    ${this._config.title}
                  </div>
                  ${!this._showHeaderToggle?$$2``:$$2`
                        <hui-entities-toggle
                          .hass=${this._hass}
                          .entities=${this._configEntities.filter(conf=>"entity"in conf).map(conf=>conf.entity)}
                        ></hui-entities-toggle>
                      `}
                </div>
              `}
          ${this._configEntities.map(entityConf=>this.renderEntity(entityConf))}
        </div>

        ${this._footerElement?$$2`<div class="header-footer footer">${this._footerElement}</div>`:""}
      </ha-card>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      ha-card {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 1.5rem;
        overflow: hidden;
      }

      .squared {
        aspect-ratio: 1;
      }

      .card-header .name {
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .card-header-medium .name {
        max-width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name-small {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 50%;
        padding-left: 5%;
      }

      #states > * {
        margin: 0;
        margin-bottom: 3%;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        align-items: center;
        margin: 0px;
        width: 100%;
        height: 35px;
      }

      .card-header-medium {
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        align-items: center;
        margin: 0px;
        width: 100%;
        height: 0px;
      }

      .card-header-small {
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        align-items: center;
        margin: 0px;
        width: 95%;
        height: 0px;
      }

      .card-content-small {
        height: 90%;
        width: 90%;
        display: grid;
        justify-content: space-between;
        margin: 5%;
        margin-left: 10%;
        align-items: center;
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(3, 34%);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-content-medium {
        height: 90%;
        width: 90%;
        display: grid;
        justify-content: center;
        margin: 3%;
        align-items: center;
        grid-template-columns: repeat(1, 90%);
        grid-template-rows: repeat(4, 25%);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-content-medium2 {
        height: 90%;
        width: 90%;
        display: grid;
        justify-content: center;
        margin: 5%;
        align-items: center;
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(4, 25%);
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-content-medium2 .card-header {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      .card-content-medium2 .card-header-medium {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      #states > div > * {
        overflow: clip visible;
      }

      #states > div {
        position: relative;
      }
    `;}},{kind:"method",key:"renderEntity",value:function renderEntity(entityConf){const element=createRowElement((!("type"in entityConf)||entityConf.type==="conditional")&&this._config.state_color?{state_color:true,hideInteract:this.hideInteract,layout:this.layout,...entityConf}:{hideInteract:this.hideInteract,layout:this.layout,...entityConf});if(this._hass){element.hass=this._hass;}return $$2`<div>${element}</div>`;}}]};},s$2);

_decorate([n$1("hui-entity-button-card")],function(_initialize,_HuiButtonCard){class HuiEntityButtonCard extends _HuiButtonCard{constructor(...args){super(...args);_initialize(this);}}return {F:HuiEntityButtonCard,d:[{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entity){throw new Error("Entity must be specified");}_get(_getPrototypeOf(HuiEntityButtonCard.prototype),"setConfig",this).call(this,config);}}]};},HuiButtonCard);

let HuiEntityCard=_decorate([n$1("hui-entity-card")],function(_initialize,_LitElement){class HuiEntityCard extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiEntityCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-entity-card-editor-dev.js');return document.createElement("hui-entity-card-editor");}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(hass,entities,entitiesFill){const includeDomains=["sensor","light","switch"];const maxEntities=1;const foundEntities=findEntities(hass,maxEntities,entities,entitiesFill,includeDomains);return {entity:foundEntities[0]||""};}},{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",key:"_footerElement",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entity){throw new Error("Entity must be specified");}if(config.entity&&!isValidEntityId(config.entity)){throw new Error("Invalid entity");}this._config=config;if(this._config.footer){this._footerElement=createHeaderFooterElement(this._config.footer);}else if(this._footerElement){this._footerElement=undefined;}}},{kind:"method",key:"getCardSize",value:async function getCardSize(){let size=2;if(this._footerElement){const footerSize=computeCardSize(this._footerElement);size+=footerSize instanceof Promise?await footerSize:footerSize;}return size;}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}const domain=computeStateDomain(stateObj);const showUnit=this._config.attribute?this._config.attribute in stateObj.attributes:!UNAVAILABLE_STATES.includes(stateObj.state);const name=this._config.name||computeStateName(stateObj);return $$2`
      <ha-card @click=${this._handleClick} tabindex="0">
        <div class="header">
          <div class="name" .title=${name}>${name}</div>
          <div class="icon">
            <ha-state-icon
              .icon=${this._config.icon}
              .state=${stateObj}
              data-domain=${l$2(this._config.state_color||domain==="light"&&this._config.state_color!==false?domain:undefined)}
              data-state=${stateObj?computeActiveState(stateObj):""}
            ></ha-state-icon>
          </div>
        </div>
        <div class="info">
          ${UNAVAILABLE_STATES.includes(stateObj.state)?$$2` <unavailable-icon></unavailable-icon> `:$$2` <span class="value"
                >${"attribute"in this._config?stateObj.attributes[this._config.attribute]!==undefined?formatAttributeValue(this.hass,stateObj.attributes[this._config.attribute]):this.hass.localize("state.default.unknown"):isNumericState(stateObj)?formatNumber(stateObj.state,this.hass.locale):$$2`<unavailable-icon></unavailable-icon>`}</span
              >`}
          ${showUnit?$$2`
                <span class="measurement"
                  >${this._config.unit||(this._config.attribute?"":stateObj.attributes.unit_of_measurement)}</span
                >
              `:""}
        </div>
        ${this._footerElement}
      </ha-card>
    `;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){// Side Effect used to update footer hass while keeping optimizations
if(this._footerElement){this._footerElement.hass=this.hass;}return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HuiEntityCard.prototype),"updated",this).call(this,changedProps);if(!this._config||!this.hass){return;}const oldHass=changedProps.get("hass");const oldConfig=changedProps.get("_config");if(!oldHass||!oldConfig||oldHass.themes!==this.hass.themes||oldConfig.theme!==this._config.theme){applyThemesOnElement(this,this.hass.themes,this._config.theme);}}},{kind:"method",key:"_handleClick",value:function _handleClick(){fireEvent(this,"hass-more-info",{entityId:this._config.entity});}},{kind:"get",static:true,key:"styles",value:function styles(){return [iconColorCSS,r$2`
        ha-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
          outline: none;
        }

        .header {
          display: flex;
          padding: 8px 16px 0;
          justify-content: space-between;
        }

        .name {
          color: var(--secondary-text-color);
          line-height: 40px;
          font-weight: 500;
          font-size: 16px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .icon {
          color: var(--state-icon-color, #7b7b7b);
          line-height: 40px;
        }

        .info {
          padding: 0px 16px 16px;
          margin-top: -4px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          line-height: 28px;
        }

        .value {
          font-size: 28px;
          margin-right: 4px;
        }

        .measurement {
          font-size: 18px;
          color: var(--secondary-text-color);
        }
      `];}}]};},s$2);

_decorate([n$1("hui-warning-element")],function(_initialize,_LitElement){class HuiWarningElement extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiWarningElement,d:[{kind:"field",decorators:[e$3()],key:"label",value:void 0},{kind:"method",key:"render",value:function render(){return $$2`
      <ha-svg-icon .path=${mdiAlertOutline} .title=${this.label}></ha-svg-icon>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      ha-svg-icon {
        color: var(--warning-color);
      }
    `;}}]};},s$2);

_decorate([n$1("hui-glance-card")],function(_initialize,_LitElement){class HuiGlanceCard extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiGlanceCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-glance-card-editor-dev.js');return document.createElement("hui-glance-card-editor");}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(hass,entities,entitiesFallback){const includeDomains=["sensor"];const maxEntities=3;const foundEntities=findEntities(hass,maxEntities,entities,entitiesFallback,includeDomains);return {type:"glance",entities:foundEntities};}},{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"method",key:"getCardSize",value:function getCardSize(){const rowHeight=(this._config.show_icon?1:0)+(this._config.show_name?1:0)+(this._config.show_state?1:0);const numRows=Math.ceil(this._configEntities.length/(this._config.columns||5));return (this._config.title?2:0)+rowHeight*numRows;}},{kind:"method",key:"setConfig",value:function setConfig(config){this._config={show_name:true,show_state:true,show_icon:true,state_color:true,...config};const entities=processConfigEntities(config.entities).map(entityConf=>({hold_action:{action:"more-info"},...entityConf}));for(const entity of entities){if(entity.tap_action&&entity.tap_action.action==="call-service"&&!entity.tap_action.service||entity.hold_action&&entity.hold_action.action==="call-service"&&!entity.hold_action.service){throw new Error('Missing required property "service" when tap_action or hold_action is call-service');}}const columns=config.columns||Math.min(config.entities.length,5);this.style.setProperty("--glance-column-width",`${100/columns}%`);this._configEntities=entities;if(this.hass){this.requestUpdate();}}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){if(changedProps.has("_config")){return true;}const oldHass=changedProps.get("hass");if(!this._configEntities||!oldHass||oldHass.themes!==this.hass.themes||oldHass.locale!==this.hass.locale){return true;}for(const entity of this._configEntities){if(oldHass.states[entity.entity]!==this.hass.states[entity.entity]){return true;}}return false;}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const{title}=this._config;return $$2`
      <ha-card .header=${title}>
        <div class=${o$1({entities:true,"no-header":!title})}>
          ${this._configEntities.map(entityConf=>this.renderEntity(entityConf))}
        </div>
      </ha-card>
    `;}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HuiGlanceCard.prototype),"updated",this).call(this,changedProps);if(!this._config||!this.hass){return;}const oldHass=changedProps.get("hass");const oldConfig=changedProps.get("_config");if(!oldHass||!oldConfig||oldHass.themes!==this.hass.themes||oldConfig.theme!==this._config.theme){applyThemesOnElement(this,this.hass.themes,this._config.theme);}}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      ha-card {
        height: 100%;
      }
      .entities {
        display: flex;
        padding: 0 16px 4px;
        flex-wrap: wrap;
        box-sizing: border-box;
        align-items: center;
        align-content: center;
      }
      .entities.no-header {
        padding-top: 16px;
      }
      .entity {
        box-sizing: border-box;
        padding: 0 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        margin-bottom: 12px;
        width: var(--glance-column-width, 20%);
      }
      .entity:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 14px;
        padding: 4px;
        margin: -4px 0;
      }
      .entity div {
        width: 100%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name {
        min-height: var(--paper-font-body1_-_line-height, 20px);
      }
      .warning {
        cursor: default;
        position: relative;
        padding: 8px;
        width: calc(var(--glance-column-width, 20%) - 4px);
        margin: 0 2px;
      }
      .warning::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.12;
        pointer-events: none;
        content: "";
        border-radius: 4px;
        background-color: var(--warning-color);
      }
      state-badge {
        margin: 8px 0;
      }
      hui-warning-element {
        padding: 8px;
      }
    `;}},{kind:"method",key:"renderEntity",value:function renderEntity(entityConf){var _entityConf$name,_ref;const stateObj=this.hass.states[entityConf.entity];if(!stateObj){return $$2`<div class="entity warning">
        ${this._config.show_name?$$2`
              <div class="name">
                ${createEntityNotFoundWarning(this.hass,entityConf.entity)}
              </div>
            `:""}
        ${this._config.show_icon?$$2` <hui-warning-element
              .label=${createEntityNotFoundWarning(this.hass,entityConf.entity)}
            ></hui-warning-element>`:""}
        <div>${this._config.show_state?entityConf.entity:""}</div>
      </div>`;}const name=(_entityConf$name=entityConf.name)!==null&&_entityConf$name!==void 0?_entityConf$name:computeStateName(stateObj);return $$2`
      <div
        class="entity"
        .config=${entityConf}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({hasHold:hasAction(entityConf.hold_action),hasDoubleClick:hasAction(entityConf.double_tap_action)})}
        tabindex=${l$2(hasAction(entityConf.tap_action)?"0":undefined)}
      >
        ${this._config.show_name?$$2` <div class="name" .title=${name}>${name}</div> `:""}
        ${this._config.show_icon?$$2`
              <state-badge
                .hass=${this.hass}
                .stateObj=${stateObj}
                .overrideIcon=${entityConf.icon}
                .overrideImage=${entityConf.image}
                .stateColor=${(_ref=entityConf.state_color===false||entityConf.state_color)!==null&&_ref!==void 0?_ref:this._config.state_color}
              ></state-badge>
            `:""}
        ${this._config.show_state&&entityConf.show_state!==false?$$2`
              <div>
                ${computeDomain(entityConf.entity)==="sensor"&&stateObj.attributes.device_class===SENSOR_DEVICE_CLASS_TIMESTAMP&&!UNAVAILABLE_STATES.includes(stateObj.state)?$$2`
                      <hui-timestamp-display
                        .hass=${this.hass}
                        .ts=${new Date(stateObj.state)}
                        .format=${entityConf.format}
                        capitalize
                      ></hui-timestamp-display>
                    `:entityConf.show_last_changed?$$2`
                      <ha-relative-time
                        .hass=${this.hass}
                        .datetime=${stateObj.last_changed}
                        capitalize
                      ></ha-relative-time>
                    `:computeStateDisplay(this.hass.localize,stateObj,this.hass.locale)}
              </div>
            `:""}
      </div>
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){const config=ev.currentTarget.config;handleAction(this,this.hass,config,ev.detail.action);}}]};},s$2);

let HuiStackCard=_decorate(null,function(_initialize,_LitElement){class HuiStackCard extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiStackCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-stack-card-editor-dev.js');return document.createElement("hui-stack-card-editor");}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(){return {cards:[]};}},{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"editMode",value:void 0},{kind:"field",decorators:[e$3()],key:"_cards",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function getCardSize(){return 1;}},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config||!config.cards||!Array.isArray(config.cards)){throw new Error("Invalid configuration");}this._config=config;this._cards=config.cards.map(card=>{const element=this._createCardElement(card);return element;});}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HuiStackCard.prototype),"updated",this).call(this,changedProps);if(!this._cards||!changedProps.has("hass")&&!changedProps.has("editMode")){return;}for(const element of this._cards){if(this.hass){element.hass=this.hass;}if(this.editMode!==undefined){element.editMode=this.editMode;}}}},{kind:"method",key:"render",value:function render(){if(!this._config||!this._cards){return $$2``;}return $$2`
      ${this._config.title?$$2`<h1 class="card-header">${this._config.title}</h1>`:""}
      <div id="root">${this._cards}</div>
    `;}},{kind:"get",static:true,key:"sharedStyles",value:function sharedStyles(){return r$2`
      .card-header {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        font-weight: normal;
        margin-block-start: 0px;
        margin-block-end: 0px;
        letter-spacing: -0.012em;
        line-height: 32px;
        display: block;
        padding: 24px 16px 16px;
        max-width: 350px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;}},{kind:"method",key:"_createCardElement",value:function _createCardElement(cardConfig){var _this$_config;const element=createCardElement(cardConfig);if(this.hass){element.hass=this.hass;}const dict={"1":"big","2":"medium","3":"small"};element.layout=dict[(_this$_config=this._config)===null||_this$_config===void 0?void 0:_this$_config.columns];element.addEventListener("ll-rebuild",ev=>{ev.stopPropagation();this._rebuildCard(element,cardConfig);},{once:true});return element;}},{kind:"method",key:"_rebuildCard",value:function _rebuildCard(cardElToReplace,config){const newCardEl=this._createCardElement(config);if(cardElToReplace.parentElement){cardElToReplace.parentElement.replaceChild(newCardEl,cardElToReplace);}this._cards=this._cards.map(curCardEl=>curCardEl===cardElToReplace?newCardEl:curCardEl);}}]};},s$2);

const DEFAULT_COLUMNS=3;const SQUARE_ROW_HEIGHTS_BY_COLUMNS={1:5,2:3,3:2};class HuiGridCard extends HuiStackCard{static async getConfigElement(){await import('./hui-grid-card-editor-dev.js');return document.createElement("hui-grid-card-editor");}async getCardSize(){if(!this._cards||!this._config){return 0;}if(this.square){const rowHeight=SQUARE_ROW_HEIGHTS_BY_COLUMNS[this.columns]||1;return (this._cards.length<this.columns?rowHeight:this._cards.length/this.columns*rowHeight)+(this._config.title?1:0);}const promises=[];for(const element of this._cards){promises.push(computeCardSize(element));}const cardSizes=await Promise.all(promises);let totalHeight=this._config.title?1:0;// Each column will adjust to max card size of it's row
for(let start=0;start<cardSizes.length;start+=this.columns){totalHeight+=Math.max(...cardSizes.slice(start,start+this.columns));}return totalHeight;}get columns(){var _this$_config;return ((_this$_config=this._config)===null||_this$_config===void 0?void 0:_this$_config.columns)||DEFAULT_COLUMNS;}get square(){var _this$_config2;return ((_this$_config2=this._config)===null||_this$_config2===void 0?void 0:_this$_config2.square)!==false;}setConfig(config){var _this$_config3;super.setConfig(config);this.style.setProperty("--grid-card-column-count",String(this.columns));// TODO: alterar aqui para nome_do_dict[String(this.columns)]
console.log("CONFI",this._config);// TODO: a lterar de "1" para "grande" em localize   this.hass!.localize(`ui.panel.lovelace.editor.card.grid.big`);
if(this.square&&((_this$_config3=this._config)===null||_this$_config3===void 0?void 0:_this$_config3.columns)!=="1"){this.setAttribute("square","");}else {this.removeAttribute("square");}}static get styles(){return [super.sharedStyles,r$2`
        #root {
          display: grid;
          grid-template-columns: repeat(
            var(--grid-card-column-count, ${DEFAULT_COLUMNS}),
            minmax(0, 1fr)
          );
          grid-gap: var(--grid-card-gap, 8px);
        }
        :host([square]) #root {
          grid-auto-rows: 1fr;
        }
        :host([square]) #root::before {
          content: "";
          width: 0;
          padding-bottom: 100%;
          grid-row: 1 / 1;
          grid-column: 1 / 1;
        }

        :host([square]) #root > *:not([hidden]) {
          grid-row: 1 / 1;
          grid-column: 1 / 1;
        }
        :host([square]) #root > *:not([hidden]) ~ *:not([hidden]) {
          /*
	       * Remove grid-row and grid-column from every element that comes after
	       * the first not-hidden element
	       */
          grid-row: unset;
          grid-column: unset;
        }
      `];}}customElements.define("hui-grid-card",HuiGridCard);

let RoundSlider$1=_decorate(null,function(_initialize,_LitElement){class RoundSlider extends _LitElement{constructor(){super();_initialize(this);this.dragEnd=this.dragEnd.bind(this);this.drag=this.drag.bind(this);this._keyStep=this._keyStep.bind(this);}}return {F:RoundSlider,d:[{kind:"field",decorators:[e$3({type:Number})],key:"value",value:void 0},{kind:"field",decorators:[e$3({type:Number})],key:"high",value:void 0},{kind:"field",decorators:[e$3({type:Number})],key:"low",value:void 0},{kind:"field",decorators:[e$3({type:Number})],key:"min",value(){return 0;}},{kind:"field",decorators:[e$3({type:Number})],key:"max",value(){return 100;}},{kind:"field",decorators:[e$3({type:Number})],key:"step",value(){return 1;}},{kind:"field",decorators:[e$3({type:Number})],key:"startAngle",value(){return 135;}},{kind:"field",decorators:[e$3({type:Number})],key:"arcLength",value(){return 270;}},{kind:"field",decorators:[e$3({type:Number})],key:"handleSize",value(){return 6;}},{kind:"field",decorators:[e$3({type:Number})],key:"handleZoom",value(){return 1.5;}},{kind:"field",decorators:[e$3({type:Boolean})],key:"readonly",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean})],key:"disabled",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,reflect:true})],key:"dragging",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean})],key:"rtl",value(){return false;}},{kind:"field",decorators:[e$3()],key:"valueLabel",value:void 0},{kind:"field",decorators:[e$3()],key:"lowLabel",value:void 0},{kind:"field",decorators:[e$3()],key:"highLabel",value:void 0},{kind:"field",decorators:[t$1()],key:"_scale",value(){return 1;}},{kind:"field",key:"_reverseOrder",value:void 0},{kind:"field",key:"_rotation",value:void 0},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(RoundSlider.prototype),"connectedCallback",this).call(this);document.addEventListener("mouseup",this.dragEnd);document.addEventListener("touchend",this.dragEnd,{passive:false});document.addEventListener("mousemove",this.drag);document.addEventListener("touchmove",this.drag,{passive:false});document.addEventListener("keydown",this._keyStep);}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(RoundSlider.prototype),"disconnectedCallback",this).call(this);document.removeEventListener("mouseup",this.dragEnd);document.removeEventListener("touchend",this.dragEnd);document.removeEventListener("mousemove",this.drag);document.removeEventListener("touchmove",this.drag);document.removeEventListener("keydown",this._keyStep);}},{kind:"get",key:"_start",value:function _start(){return this.startAngle*Math.PI/180;}},{kind:"get",key:"_len",value:function _len(){// Things get weird if length is more than a complete turn
return Math.min(this.arcLength*Math.PI/180,2*Math.PI-0.01);}},{kind:"get",key:"_end",value:function _end(){return this._start+this._len;}},{kind:"get",key:"_showHandle",value:function _showHandle(){// If handle is shown
if(this.readonly)return false;if(this.value==null&&(this.high==null||this.low==null))return false;return true;}},{kind:"method",key:"_angleInside",value:function _angleInside(angle){// Check if an angle is on the arc
let a=(this.startAngle+this.arcLength/2-angle+180+360)%360-180;return a<this.arcLength/2&&a>-this.arcLength/2;}},{kind:"method",key:"_angle2xy",value:function _angle2xy(angle){if(this.rtl)return {x:-Math.cos(angle),y:Math.sin(angle)};return {x:Math.cos(angle),y:Math.sin(angle)};}},{kind:"method",key:"_xy2angle",value:function _xy2angle(x,y){if(this.rtl)x=-x;return (Math.atan2(y,x)-this._start+2*Math.PI)%(2*Math.PI);}},{kind:"method",key:"_value2angle",value:function _value2angle(value){value=Math.min(this.max,Math.max(this.min,value));const fraction=(value-this.min)/(this.max-this.min);return this._start+fraction*this._len;}},{kind:"method",key:"_angle2value",value:function _angle2value(angle){return Math.round((angle/this._len*(this.max-this.min)+this.min)/this.step)*this.step;}},{kind:"get",key:"_boundaries",value:function _boundaries(){// Get the maximum extents of the bar arc
const start=this._angle2xy(this._start);const end=this._angle2xy(this._end);let up=1;if(!this._angleInside(270))up=Math.max(-start.y,-end.y);let down=1;if(!this._angleInside(90))down=Math.max(start.y,end.y);let left=1;if(!this._angleInside(180))left=Math.max(-start.x,-end.x);let right=1;if(!this._angleInside(0))right=Math.max(start.x,end.x);return {up,down,left,right,height:up+down,width:left+right};}},{kind:"method",key:"_mouse2value",value:function _mouse2value(ev){var _querySelector;const mouseX=ev.type.startsWith("touch")?ev.touches[0].clientX:ev.clientX;const mouseY=ev.type.startsWith("touch")?ev.touches[0].clientY:ev.clientY;const rect=(_querySelector=this.shadowRoot.querySelector("svg"))===null||_querySelector===void 0?void 0:_querySelector.getBoundingClientRect();const boundaries=this._boundaries;const x=mouseX-(rect.left+boundaries.left*rect.width/boundaries.width);const y=mouseY-(rect.top+boundaries.up*rect.height/boundaries.height);const angle=this._xy2angle(x,y);const pos=this._angle2value(angle);return pos;}},{kind:"method",key:"dragStart",value:function dragStart(ev){if(!this._showHandle||this.disabled)return;let handle=ev.target;let cooldown;// Avoid double events mouseDown->focus
if(this._rotation&&this._rotation.type!=="focus")return;// If the bar was touched, find the nearest handle and drag from that
if(handle.classList.contains("shadowpath")){if(ev.type==="touchstart")cooldown=window.setTimeout(()=>{if(this._rotation)this._rotation.cooldown=undefined;},200);if(this.low==null){handle=this.shadowRoot.querySelector("#value");}else {const mouse=this._mouse2value(ev);if(Math.abs(mouse-this.low)<Math.abs(mouse-this.high)){handle=this.shadowRoot.querySelector("#low");}else {handle=this.shadowRoot.querySelector("#high");}}}// If an invisible handle was clicked, switch to the visible counterpart
if(handle.classList.contains("overflow"))handle=handle.nextElementSibling;if(!handle.classList.contains("handle"))return;handle.setAttribute("stroke-width",String(2*this.handleSize*this.handleZoom*this._scale));const min=handle.id==="high"?this.low:this.min;const max=handle.id==="low"?this.high:this.max;this._rotation={handle,min,max,start:this[handle.id],type:ev.type,cooldown};this.dragging=true;}},{kind:"method",key:"_cleanupRotation",value:function _cleanupRotation(){const handle=this._rotation.handle;handle.setAttribute("stroke-width",String(2*this.handleSize*this._scale));this._rotation=undefined;this.dragging=false;handle.blur();}},{kind:"method",key:"dragEnd",value:function dragEnd(_ev){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const handle=this._rotation.handle;this._cleanupRotation();let event=new CustomEvent("value-changed",{detail:{[handle.id]:this[handle.id]},bubbles:true,composed:true});this.dispatchEvent(event);// This makes the low handle render over the high handle if they both are
// close to the top end.  Otherwise if would be unclickable, and the high
// handle locked by the low.  Calcualtion is done in the dragEnd handler to
// avoid "z fighting" while dragging.
if(this.low&&this.low>=0.99*this.max)this._reverseOrder=true;else this._reverseOrder=false;}},{kind:"method",key:"drag",value:function drag(ev){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;if(this._rotation.cooldown){window.clearTimeout(this._rotation.cooldown);this._cleanupRotation();return;}if(this._rotation.type==="focus")return;ev.preventDefault();const pos=this._mouse2value(ev);this._dragpos(pos);}},{kind:"method",key:"_dragpos",value:function _dragpos(pos){if(pos<this._rotation.min||pos>this._rotation.max)return;const handle=this._rotation.handle;this[handle.id]=pos;let event=new CustomEvent("value-changing",{detail:{[handle.id]:pos},bubbles:true,composed:true});this.dispatchEvent(event);}},{kind:"method",key:"_keyStep",value:function _keyStep(ev){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const handle=this._rotation.handle;if(ev.key==="ArrowLeft"||ev.key==="ArrowDown"){ev.preventDefault();if(this.rtl)this._dragpos(this[handle.id]+this.step);else this._dragpos(this[handle.id]-this.step);}if(ev.key==="ArrowRight"||ev.key==="ArrowUp"){ev.preventDefault();if(this.rtl)this._dragpos(this[handle.id]-this.step);else this._dragpos(this[handle.id]+this.step);}if(ev.key==="Home"){ev.preventDefault();this._dragpos(this.min);}if(ev.key==="End"){ev.preventDefault();this._dragpos(this.max);}}},{kind:"method",key:"updated",value:function updated(changedProperties){// Adjust margin in the bar slider stroke width is greater than the handle size
if(this.shadowRoot.querySelector(".slider")){const styles=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(styles&&styles["strokeWidth"]){const stroke=parseFloat(styles["strokeWidth"]);if(stroke>this.handleSize*this.handleZoom){const view=this._boundaries;const margin=`
          ${stroke/2*Math.abs(view.up)}px
          ${stroke/2*Math.abs(view.right)}px
          ${stroke/2*Math.abs(view.down)}px
          ${stroke/2*Math.abs(view.left)}px`;this.shadowRoot.querySelector("svg").style.margin=margin;}}}// Workaround for vector-effect not working in IE and pre-Chromium Edge
// That's also why the _scale property exists
if(this.shadowRoot.querySelector("svg")&&// @ts-expect-error
this.shadowRoot.querySelector("svg").style.vectorEffect===undefined){if(changedProperties.has("_scale")&&this._scale!=1){this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(e=>{if(e.getAttribute("stroke-width"))return;const orig=parseFloat(getComputedStyle(e).getPropertyValue("stroke-width"));e.style.strokeWidth=`${orig*this._scale}px`;});}const rect=this.shadowRoot.querySelector("svg").getBoundingClientRect();const scale=Math.max(rect.width,rect.height);this._scale=2/scale;}}},{kind:"method",key:"_renderArc",value:function _renderArc(start,end){const diff=end-start;const startXY=this._angle2xy(start);const endXY=this._angle2xy(end+0.001);// Safari doesn't like arcs with no length
return `
      M ${startXY.x} ${startXY.y}
      A 1 1,
        0,
        ${diff>Math.PI?"1":"0"} ${this.rtl?"0":"1"},
        ${endXY.x} ${endXY.y}
    `;}},{kind:"method",key:"_renderHandle",value:function _renderHandle(id){const theta=this._value2angle(this[id]);const pos=this._angle2xy(theta);const label={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[id]||"";// Two handles are drawn. One visible, and one invisible that's twice as
// big. Makes it easier to click.
return y$1`
      <g class="${id} handle">
        <path
          id=${id}
          class="overflow"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x+0.001} ${pos.y+0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${id}
          class="handle"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x+0.001} ${pos.y+0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2*this.handleSize*this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          role="slider"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this[id]}
          aria-disabled=${this.disabled}
          aria-label=${label||""}
          />
        </g>
      `;}},{kind:"method",key:"render",value:function render(){const view=this._boundaries;return $$2`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-view.left} ${-view.up} ${view.width} ${view.height}"
        style="margin: ${this.handleSize*this.handleZoom}px;"
        ?disabled=${this.disabled}
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
          />
          <path
            class="bar"
            vector-effect="non-scaling-stroke"
            d=${this._renderArc(this._value2angle(this.low!=null?this.low:this.min),this._value2angle(this.high!=null?this.high:this.value))}
          />
          <path
            class="shadowpath"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
            stroke="rgba(0,0,0,0)"
            stroke-width="${3*this.handleSize*this._scale}"
            stroke-linecap="butt"
          />
        </g>

        <g class="handles">
          ${this._showHandle?this.low!=null?this._reverseOrder?y$1`${this._renderHandle("high")} ${this._renderHandle("low")}`:y$1`${this._renderHandle("low")} ${this._renderHandle("high")}`:y$1`${this._renderHandle("value")}`:``}
        </g>
      </svg>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
        display: block;
      }
      path {
        transition: stroke 1s ease-out, stroke-width 200ms ease-out;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      svg[disabled] .bar {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      g.handles {
        stroke: var(
          --round-slider-handle-color,
          var(--round-slider-bar-color, deepskyblue)
        );
        stroke-linecap: round;
        cursor: var(--round-slider-handle-cursor, pointer);
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      svg[disabled] g.handles {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      .handle:focus {
        outline: unset;
      }
    `;}}]};},s$2);customElements.define("round-slider2",RoundSlider$1);

let LightColorModes;(function(LightColorModes){LightColorModes["UNKNOWN"]="unknown";LightColorModes["ONOFF"]="onoff";LightColorModes["BRIGHTNESS"]="brightness";LightColorModes["COLOR_TEMP"]="color_temp";LightColorModes["WHITE"]="white";LightColorModes["HS"]="hs";LightColorModes["XY"]="xy";LightColorModes["RGB"]="rgb";LightColorModes["RGBW"]="rgbw";LightColorModes["RGBWW"]="rgbww";})(LightColorModes||(LightColorModes={}));const modesSupportingColor=[LightColorModes.HS,LightColorModes.XY,LightColorModes.RGB,LightColorModes.RGBW,LightColorModes.RGBWW];const modesSupportingDimming=[...modesSupportingColor,LightColorModes.COLOR_TEMP,LightColorModes.BRIGHTNESS];const SUPPORT_EFFECT=4;const lightSupportsColorMode=(entity,mode)=>{var _entity$attributes$su;return (_entity$attributes$su=entity.attributes.supported_color_modes)===null||_entity$attributes$su===void 0?void 0:_entity$attributes$su.includes(mode);};const lightIsInColorMode=entity=>modesSupportingColor.includes(entity.attributes.color_mode);const lightSupportsColor=entity=>{var _entity$attributes$su2;return (_entity$attributes$su2=entity.attributes.supported_color_modes)===null||_entity$attributes$su2===void 0?void 0:_entity$attributes$su2.some(mode=>modesSupportingColor.includes(mode));};const lightSupportsDimming=entity=>{var _entity$attributes$su3;return (_entity$attributes$su3=entity.attributes.supported_color_modes)===null||_entity$attributes$su3===void 0?void 0:_entity$attributes$su3.some(mode=>modesSupportingDimming.includes(mode));};const getLightCurrentModeRgbColor=entity=>entity.attributes.color_mode===LightColorModes.RGBWW?entity.attributes.rgbww_color:entity.attributes.color_mode===LightColorModes.RGBW?entity.attributes.rgbw_color:entity.attributes.rgb_color;

_decorate([n$1("hui-light-card")],function(_initialize,_LitElement){class HuiLightCard extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiLightCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-light-card-editor-dev.js');return document.createElement("hui-light-card-editor");}},{kind:"field",decorators:[e$3({type:Boolean})],key:"statusslider",value(){return true;}},{kind:"field",decorators:[e$3({type:Boolean})],key:"dialog",value(){return false;}},{kind:"field",decorators:[e$3({type:String})],key:"layout",value(){return "big";}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(hass,entities,entitiesFallback){const includeDomains=["light"];const maxEntities=1;const foundEntities=findEntities(hass,maxEntities,entities,entitiesFallback,includeDomains);return {type:"light",entity:foundEntities[0]||""};}},{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",key:"_brightnessTimout",value:void 0},{kind:"method",key:"getCardSize",value:function getCardSize(){return 5;}},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entity||config.entity.split(".")[0]!=="light"){throw new Error("Missing light entity");}this._config={tap_action:{action:"toggle"},hold_action:{action:"more-info"},...config};}},{kind:"method",key:"render",value:function render(){var _this$_config$name;if(!this.hass||!this._config){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}const brightness=Math.round(stateObj.attributes.brightness/255*100)||0;const name=(_this$_config$name=this._config.name)!==null&&_this$_config$name!==void 0?_this$_config$name:computeStateName(stateObj);return $$2`
      <ha-card>
        <ha-icon-button
          class="more-info"
          .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
          .path=${mdiDotsVertical}
          @click=${this._handleMoreInfo}
          tabindex="0"
        ></ha-icon-button>

        <div
          class=${o$1({"content-big":this.layout==="big","content-small":this.layout==="small"||this.layout==="medium",unavailable:UNAVAILABLE_STATES.includes(stateObj.state)})}
        >
          <div
            class=${o$1({"controls-big":this.layout==="big","controls-small":this.layout==="small"||this.layout==="medium"})}
          >
            <div
              class=${o$1({"slider-big":this.layout==="big","slider-small":this.layout==="small"||this.layout==="medium"})}
            >
              ${this.layout==="big"?$$2`
                    <round-slider2
                      class="round-slider"
                      min="0"
                      max="100"
                      .value=${brightness}
                      .disabled=${UNAVAILABLE_STATES.includes(stateObj.state)}
                      @value-changing=${this._dragEvent}
                      @value-changed=${this._setBrightness}
                      style=${i$3({visibility:lightSupportsDimming(stateObj)?"visible":"hidden"})}
                    ></round-slider2>
                  `:$$2``}

              <ha-icon-button
                class=${o$1({"light-button":this.layout==="big","light-button-small":this.layout==="small"||this.layout==="medium","slider-left":lightSupportsDimming(stateObj),"state-on":stateObj.state==="on","state-unavailable":stateObj.state===UNAVAILABLE})}
                .disabled=${UNAVAILABLE_STATES.includes(stateObj.state)}
                style=${i$3({filter:this._computeBrightness(stateObj),color:this._computeColor(stateObj)})}
                @action=${this._handleAction}
                .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
                tabindex="0"
              >
                <div class="container-icon">
                  <ha-state-icon
                    .icon=${this._config.icon}
                    .state=${stateObj}
                  ></ha-state-icon>
                </div>
              </ha-icon-button>
            </div>
          </div>
          <div
            class=${o$1({info:this.layout==="big","info-small":this.layout==="small","info-medium":this.layout==="medium"})}
            .title=${name}
          >
            ${UNAVAILABLE_STATES.includes(stateObj.state)?$$2` <unavailable-icon></unavailable-icon> `:$$2`
                  <div
                    class=${o$1({brightness:this.layout==="big","brightness-null":this.layout==="small"||this.layout==="medium"})}
                  >
                    %
                  </div>
                `}
            ${name}
          </div>
        </div>
      </ha-card>
    `;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HuiLightCard.prototype),"updated",this).call(this,changedProps);if(!this._config||!this.hass){return;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return;}const oldHass=changedProps.get("hass");const oldConfig=changedProps.get("_config");if(!oldHass||!oldConfig||oldHass.themes!==this.hass.themes||oldConfig.theme!==this._config.theme){applyThemesOnElement(this,this.hass.themes,this._config.theme);}}},{kind:"method",key:"_dragEvent",value:function _dragEvent(e){this.shadowRoot.querySelector(".brightness").innerHTML=`${e.detail.value} %`;this._showBrightness();this._hideBrightness();}},{kind:"method",key:"_showBrightness",value:function _showBrightness(){clearTimeout(this._brightnessTimout);this.shadowRoot.querySelector(".brightness").classList.add("show_brightness");}},{kind:"method",key:"_hideBrightness",value:function _hideBrightness(){this._brightnessTimout=window.setTimeout(()=>{this.shadowRoot.querySelector(".brightness").classList.remove("show_brightness");},500);}},{kind:"method",key:"_setBrightness",value:function _setBrightness(e){this.hass.callService("light","turn_on",{entity_id:this._config.entity,brightness_pct:e.detail.value});}},{kind:"method",key:"_computeBrightness",value:function _computeBrightness(stateObj){if(stateObj.state==="off"||!stateObj.attributes.brightness){return "";}const brightness=stateObj.attributes.brightness;return `brightness(${(brightness+245)/5}%)`;}},{kind:"method",key:"_computeColor",value:function _computeColor(stateObj){if(stateObj.state==="off"){return "";}return stateObj.attributes.rgb_color?`rgb(${stateObj.attributes.rgb_color.join(",")})`:"";}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}},{kind:"method",key:"_handleMoreInfo",value:function _handleMoreInfo(){fireEvent(this,"hass-more-info",{entityId:this._config.entity});}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      ha-card {
        height: 100%;
        padding: 4% 0;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        border-radius: 1.5rem;
      }

      .light-button-small {
        color: var(--paper-item-icon-color, #7b7b7b);
        width: var(--mdc-icon-size, 24px);
        height: var(--mdc-icon-size, 24px);
        border-radius: 100%;
        --mdc-icon-button-size: 100%;
        --mdc-icon-size: 100%;
      }

      .light-button {
        color: var(--paper-item-icon-color, #7b7b7b);
        grid-row-start: 1;
        grid-column-start: 1;
        margin-top: 8%;
        margin-left: 20%;
        width: 60%;
        height: 60%;
        box-sizing: border-box;
        border-radius: 100%;
        --mdc-icon-button-size: 100%;
        --mdc-icon-size: 100%;
      }
      mwc-icon-button {
        height: 100%;
        width: 100%;
      }
      .content-big {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .content-small {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
      }
      .container-icon {
        height: 100%;
        width: 100%;
      }

      .controls-big {
        width: 50%;
        text-align: center;
      }

      .controls-small {
        width: 63%;
        height: 70%;
        margin-right: 40%;
        text-align: center;
      }

      .info {
        text-align: center;
        padding: 5%;
        padding-top: 0%;
        font-size: 2.3rem;
        font-weight: 450;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 80%;
        text-overflow: ellipsis;
        justify-content: space-between;
      }

      .info-medium {
        padding: 5%;
        font-size: 1.8rem;
        font-weight: 450;
        padding-bottom: 4%;
        margin-bottom: 4%;
        margin-left: 7%;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 200px;
        float: left;
        text-overflow: ellipsis;
      }

      .info-small {
        padding: 5%;
        font-size: 1.2rem;
        font-weight: 450;
        padding-bottom: 4%;
        margin-bottom: 4%;
        margin-left: 7%;
        display: inline-block;
        max-width: 110px;
        white-space: nowrap;
        float: left;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      ha-state-icon {
        width: 100%;
        height: 100%;
      }

      ha-icon-button + span {
        text-align: center;
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 1;
      }
      unavailable-icon {
        position: absolute;
        top: 11px;
        right: 25%;
      }
      .slider-big {
        height: 100%;
        width: 100%;
        position: relative;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr;
        /* max-width: 150px; */
      }

      .slider-small {
        height: 90%;
        width: 100%;
        position: relative;
        /* max-width: 200px; */
      }
      .round-slider {
        grid-row-start: 1;
        grid-column-start: 1;
        --round-slider-path-color: var(--slider-track-color);
        --round-slider-bar-color: var(--accent-color);
        float: top;
      }

      .light-button.state-on {
        color: var(--state-light-active-color, #ffbd4b);
      }
      .light-button-small.state-on {
        color: var(--state-light-active-color, #ffbd4b);
      }

      .light-button.state-unavailable {
        color: var(--state-icon-unavailable-color);
      }
      .light-button-small.state-unavailable {
        color: var(--state-icon-unavailable-color);
      }

      .brightness {
        font-size: 1.3rem;
        padding-bottom: 10%;
        padding-left: 2%;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        -moz-transition: opacity 0.5s ease-in-out;
        -webkit-transition: opacity 0.5s ease-in-out;
      }

      .brightness-null {
        display: none;
      }

      .show_brightness {
        opacity: 1;
      }
    `;}}]};},s$2);

const includeDomains=["counter","input_number","number","sensor"];_decorate([n$1("hui-sensor-card")],function(_initialize,_HuiEntityCard){class HuiSensorCard extends _HuiEntityCard{constructor(...args){super(...args);_initialize(this);}}return {F:HuiSensorCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-sensor-card-editor-dev.js');return document.createElement("hui-sensor-card-editor");}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(hass,entities,entitiesFallback){const maxEntities=1;const entityFilter=stateObj=>!isNaN(Number(stateObj.state))&&!!stateObj.attributes.unit_of_measurement;const foundEntities=findEntities(hass,maxEntities,entities,entitiesFallback,includeDomains,entityFilter);return {type:"sensor",entity:foundEntities[0]||"",graph:"line"};}},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entity||!includeDomains.includes(computeDomain(config.entity))){throw new Error("Missing sensor entity");}const{graph,detail,hours_to_show,...cardConfig}=config;const entityCardConfig={...cardConfig,type:"entity"};if(graph==="line"){const footerConfig={type:"graph",entity:config.entity,detail:detail||1,hours_to_show:hours_to_show||24,limits:config.limits};entityCardConfig.footer=footerConfig;}_get(_getPrototypeOf(HuiSensorCard.prototype),"setConfig",this).call(this,entityCardConfig);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      ha-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        outline: none;
        border-radius: 1.5rem;
        overflow: hidden;
      }
      .header {
        display: flex;
        padding: 8px 16px 0;
        justify-content: space-between;
      }
      .name {
        color: var(--accent-color);
        line-height: 40px;
        font-weight: 500;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .icon {
        color: var(--state-icon-color, #44739e);
        line-height: 40px;
      }
      @media only screen and (max-width: 768px) {
        .info {
          font-size: 3rem;
        }
      }
      .info {
        padding-left: 10%;
        padding-bottom: 10%;
        margin-top: -4px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 28px;
        font-size: 1.5vmax;
        font-weight: 450;
      }
      svg {
        border-radius: 1.5rem;
      }
    `;}}]};},HuiEntityCard);

class RoundSlider extends s$2{constructor(){super();this.min=0;this.max=100;this.step=1;this.startAngle=135;this.arcLength=270;this.handleSize=6;this.handleZoom=1.5;this.readonly=false;this.disabled=false;this.dragging=false;this.rtl=false;this._scale=1;this.dragEnd=this.dragEnd.bind(this);this.drag=this.drag.bind(this);this._keyStep=this._keyStep.bind(this);}connectedCallback(){super.connectedCallback();document.addEventListener("mouseup",this.dragEnd);document.addEventListener("touchend",this.dragEnd,{passive:false});document.addEventListener("mousemove",this.drag);document.addEventListener("touchmove",this.drag,{passive:false});document.addEventListener("keydown",this._keyStep);}disconnectedCallback(){super.disconnectedCallback();document.removeEventListener("mouseup",this.dragEnd);document.removeEventListener("touchend",this.dragEnd);document.removeEventListener("mousemove",this.drag);document.removeEventListener("touchmove",this.drag);document.removeEventListener("keydown",this._keyStep);}get _start(){return this.startAngle*Math.PI/180;}get _len(){// Things get weird if length is more than a complete turn
return Math.min(this.arcLength*Math.PI/180,2*Math.PI-0.01);}get _end(){return this._start+this._len;}get _showHandle(){// If handle is shown
if(this.readonly)return false;if(this.value==null&&(this.high==null||this.low==null))return false;return true;}_angleInside(angle){// Check if an angle is on the arc
let a=(this.startAngle+this.arcLength/2-angle+180+360)%360-180;return a<this.arcLength/2&&a>-this.arcLength/2;}_angle2xy(angle){if(this.rtl)return {x:-Math.cos(angle),y:Math.sin(angle)};return {x:Math.cos(angle),y:Math.sin(angle)};}_xy2angle(x,y){if(this.rtl)x=-x;return (Math.atan2(y,x)-this._start+2*Math.PI)%(2*Math.PI);}_value2angle(value){value=Math.min(this.max,Math.max(this.min,value));const fraction=(value-this.min)/(this.max-this.min);return this._start+fraction*this._len;}_angle2value(angle){return Math.round((angle/this._len*(this.max-this.min)+this.min)/this.step)*this.step;}get _boundaries(){// Get the maximum extents of the bar arc
const start=this._angle2xy(this._start);const end=this._angle2xy(this._end);let up=1;if(!this._angleInside(270))up=Math.max(-start.y,-end.y);let down=1;if(!this._angleInside(90))down=Math.max(start.y,end.y);let left=1;if(!this._angleInside(180))left=Math.max(-start.x,-end.x);let right=1;if(!this._angleInside(0))right=Math.max(start.x,end.x);return {up,down,left,right,height:up+down,width:left+right};}_mouse2value(ev){const mouseX=ev.type.startsWith("touch")?ev.touches[0].clientX:ev.clientX;const mouseY=ev.type.startsWith("touch")?ev.touches[0].clientY:ev.clientY;const rect=this.shadowRoot.querySelector("svg").getBoundingClientRect();const boundaries=this._boundaries;const x=mouseX-(rect.left+boundaries.left*rect.width/boundaries.width);const y=mouseY-(rect.top+boundaries.up*rect.height/boundaries.height);const angle=this._xy2angle(x,y);const pos=this._angle2value(angle);return pos;}dragStart(ev){if(!this._showHandle||this.disabled)return;let handle=ev.target;let cooldown=undefined;// Avoid double events mouseDown->focus
if(this._rotation&&this._rotation.type!=="focus")return;// If the bar was touched, find the nearest handle and drag from that
if(handle.classList.contains("shadowpath")){if(ev.type==="touchstart")cooldown=window.setTimeout(()=>{if(this._rotation)this._rotation.cooldown=undefined;},200);if(this.low==null){handle=this.shadowRoot.querySelector("#value");}else {const mouse=this._mouse2value(ev);if(Math.abs(mouse-this.low)<Math.abs(mouse-this.high)){handle=this.shadowRoot.querySelector("#low");}else {handle=this.shadowRoot.querySelector("#high");}}}// If an invisible handle was clicked, switch to the visible counterpart
if(handle.classList.contains("overflow"))handle=handle.nextElementSibling;if(!handle.classList.contains("handle"))return;handle.setAttribute("stroke-width",String(2*this.handleSize*this.handleZoom*this._scale));const min=handle.id==="high"?this.low:this.min;const max=handle.id==="low"?this.high:this.max;this._rotation={handle,min,max,start:this[handle.id],type:ev.type,cooldown};this.dragging=true;}_cleanupRotation(){const handle=this._rotation.handle;handle.setAttribute("stroke-width",String(2*this.handleSize*this._scale));this._rotation=undefined;this.dragging=false;handle.blur();}dragEnd(_ev){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const handle=this._rotation.handle;this._cleanupRotation();let event=new CustomEvent("value-changed",{detail:{[handle.id]:this[handle.id]},bubbles:true,composed:true});this.dispatchEvent(event);// This makes the low handle render over the high handle if they both are
// close to the top end.  Otherwise if would be unclickable, and the high
// handle locked by the low.  Calcualtion is done in the dragEnd handler to
// avoid "z fighting" while dragging.
if(this.low&&this.low>=0.99*this.max)this._reverseOrder=true;else this._reverseOrder=false;}drag(ev){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;if(this._rotation.cooldown){window.clearTimeout(this._rotation.cooldown);this._cleanupRotation();return;}if(this._rotation.type==="focus")return;ev.preventDefault();const pos=this._mouse2value(ev);this._dragpos(pos);}_dragpos(pos){if(pos<this._rotation.min||pos>this._rotation.max)return;const handle=this._rotation.handle;this[handle.id]=pos;let event=new CustomEvent("value-changing",{detail:{[handle.id]:pos},bubbles:true,composed:true});this.dispatchEvent(event);}_keyStep(ev){if(!this._showHandle||this.disabled)return;if(!this._rotation)return;const handle=this._rotation.handle;if(ev.key==="ArrowLeft"||ev.key==="ArrowDown"){ev.preventDefault();if(this.rtl)this._dragpos(this[handle.id]+this.step);else this._dragpos(this[handle.id]-this.step);}if(ev.key==="ArrowRight"||ev.key==="ArrowUp"){ev.preventDefault();if(this.rtl)this._dragpos(this[handle.id]-this.step);else this._dragpos(this[handle.id]+this.step);}if(ev.key==="Home"){ev.preventDefault();this._dragpos(this.min);}if(ev.key==="End"){ev.preventDefault();this._dragpos(this.max);}}updated(changedProperties){// Adjust margin in the bar slider stroke width is greater than the handle size
if(this.shadowRoot.querySelector(".slider")){const styles=window.getComputedStyle(this.shadowRoot.querySelector(".slider"));if(styles&&styles["strokeWidth"]){const stroke=parseFloat(styles["strokeWidth"]);if(stroke>this.handleSize*this.handleZoom){const view=this._boundaries;const margin=`
          ${stroke/2*Math.abs(view.up)}px
          ${stroke/2*Math.abs(view.right)}px
          ${stroke/2*Math.abs(view.down)}px
          ${stroke/2*Math.abs(view.left)}px`;this.shadowRoot.querySelector("svg").style.margin=margin;}}}// Workaround for vector-effect not working in IE and pre-Chromium Edge
// That's also why the _scale property exists
if(this.shadowRoot.querySelector("svg")&&// @ts-expect-error
this.shadowRoot.querySelector("svg").style.vectorEffect===undefined){if(changedProperties.has("_scale")&&this._scale!=1){this.shadowRoot.querySelector("svg").querySelectorAll("path").forEach(e=>{if(e.getAttribute("stroke-width"))return;const orig=parseFloat(getComputedStyle(e).getPropertyValue("stroke-width"));e.style.strokeWidth=`${orig*this._scale}px`;});}const rect=this.shadowRoot.querySelector("svg").getBoundingClientRect();const scale=Math.max(rect.width,rect.height);this._scale=2/scale;}}_renderArc(start,end){const diff=end-start;const startXY=this._angle2xy(start);const endXY=this._angle2xy(end+0.001);// Safari doesn't like arcs with no length
return `
      M ${startXY.x} ${startXY.y}
      A 1 1,
        0,
        ${diff>Math.PI?"1":"0"} ${this.rtl?"0":"1"},
        ${endXY.x} ${endXY.y}
    `;}_renderHandle(id){const theta=this._value2angle(this[id]);const pos=this._angle2xy(theta);const label={value:this.valueLabel,low:this.lowLabel,high:this.highLabel}[id]||"";// Two handles are drawn. One visible, and one invisible that's twice as
// big. Makes it easier to click.
return y$1`
      <g class="${id} handle">
        <path
          id=${id}
          class="overflow"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x+0.001} ${pos.y+0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke="rgba(0,0,0,0)"
          stroke-width="${4*this.handleSize*this._scale}"
          />
        <path
          id=${id}
          class="handle"
          d="
          M ${pos.x} ${pos.y}
          L ${pos.x+0.001} ${pos.y+0.001}
          "
          vector-effect="non-scaling-stroke"
          stroke-width="${2*this.handleSize*this._scale}"
          tabindex="0"
          @focus=${this.dragStart}
          @blur=${this.dragEnd}
          role="slider"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this[id]}
          aria-disabled=${this.disabled}
          aria-label=${label||""}
          />
        </g>
      `;}render(){const view=this._boundaries;return $$2`
      <svg
        @mousedown=${this.dragStart}
        @touchstart=${this.dragStart}
        xmln="http://www.w3.org/2000/svg"
        viewBox="${-view.left} ${-view.up} ${view.width} ${view.height}"
        style="margin: ${this.handleSize*this.handleZoom}px;"
        ?disabled=${this.disabled}
        focusable="false"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
          />
          <path
            class="bar"
            vector-effect="non-scaling-stroke"
            d=${this._renderArc(this._value2angle(this.low!=null?this.low:this.min),this._value2angle(this.high!=null?this.high:this.value))}
          />
          <path
            class="shadowpath"
            d=${this._renderArc(this._start,this._end)}
            vector-effect="non-scaling-stroke"
            stroke="rgba(0,0,0,0)"
            stroke-width="${3*this.handleSize*this._scale}"
            stroke-linecap="butt"
          />
        </g>

        <g class="handles">
          ${this._showHandle?this.low!=null?this._reverseOrder?y$1`${this._renderHandle("high")} ${this._renderHandle("low")}`:y$1`${this._renderHandle("low")} ${this._renderHandle("high")}`:y$1`${this._renderHandle("value")}`:``}
        </g>
      </svg>
    `;}static get styles(){return r$2`
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        overflow: visible;
        display: block;
      }
      path {
        transition: stroke 1s ease-out, stroke-width 200ms ease-out;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      svg[disabled] .bar {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      g.handles {
        stroke: var(
          --round-slider-handle-color,
          var(--round-slider-bar-color, deepskyblue)
        );
        stroke-linecap: round;
        cursor: var(--round-slider-handle-cursor, pointer);
      }
      g.low.handle {
        stroke: var(--round-slider-low-handle-color);
      }
      g.high.handle {
        stroke: var(--round-slider-high-handle-color);
      }
      svg[disabled] g.handles {
        stroke: var(--round-slider-disabled-bar-color, darkgray);
      }
      .handle:focus {
        outline: unset;
      }
    `;}}__decorate$1([e$3({type:Number})],RoundSlider.prototype,"value",void 0);__decorate$1([e$3({type:Number})],RoundSlider.prototype,"high",void 0);__decorate$1([e$3({type:Number})],RoundSlider.prototype,"low",void 0);__decorate$1([e$3({type:Number})],RoundSlider.prototype,"min",void 0);__decorate$1([e$3({type:Number})],RoundSlider.prototype,"max",void 0);__decorate$1([e$3({type:Number})],RoundSlider.prototype,"step",void 0);__decorate$1([e$3({type:Number})],RoundSlider.prototype,"startAngle",void 0);__decorate$1([e$3({type:Number})],RoundSlider.prototype,"arcLength",void 0);__decorate$1([e$3({type:Number})],RoundSlider.prototype,"handleSize",void 0);__decorate$1([e$3({type:Number})],RoundSlider.prototype,"handleZoom",void 0);__decorate$1([e$3({type:Boolean})],RoundSlider.prototype,"readonly",void 0);__decorate$1([e$3({type:Boolean})],RoundSlider.prototype,"disabled",void 0);__decorate$1([e$3({type:Boolean,reflect:true})],RoundSlider.prototype,"dragging",void 0);__decorate$1([e$3({type:Boolean})],RoundSlider.prototype,"rtl",void 0);__decorate$1([e$3()],RoundSlider.prototype,"valueLabel",void 0);__decorate$1([e$3()],RoundSlider.prototype,"lowLabel",void 0);__decorate$1([e$3()],RoundSlider.prototype,"highLabel",void 0);__decorate$1([t$1()],RoundSlider.prototype,"_scale",void 0);customElements.define("round-slider",RoundSlider);

const modeIcons={auto:mdiCalendarSync,heat_cool:mdiAutorenew,heat:mdiFire,cool:mdiSnowflake,off:mdiPower,fan_only:mdiFan,dry:mdiWaterPercent};_decorate([n$1("hui-thermostat-card")],function(_initialize,_LitElement){class HuiThermostatCard extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiThermostatCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-thermostat-card-editor-dev.js');return document.createElement("hui-thermostat-card-editor");}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(hass,entities,entitiesFallback){const includeDomains=["climate"];const maxEntities=1;const foundEntities=findEntities(hass,maxEntities,entities,entitiesFallback,includeDomains);return {type:"thermostat",entity:foundEntities[0]||""};}},{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",decorators:[t$1()],key:"_setTemp",value:void 0},{kind:"field",decorators:[i$2("ha-card")],key:"_card",value:void 0},{kind:"field",decorators:[e$3({type:String})],key:"layout",value(){return "big";}},{kind:"method",key:"getCardSize",value:function getCardSize(){return 7;}},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entity||config.entity.split(".")[0]!=="climate"){throw new Error("Missing climate entity");}this._config=config;}},{kind:"method",key:"render",value:function render(){if(!this.hass||!this._config){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning>
          ${createEntityNotFoundWarning(this.hass,this._config.entity)}
        </hui-warning>
      `;}const mode=stateObj.state in modeIcons?stateObj.state:"unknown-mode";const name=this._config.name||computeStateName(this.hass.states[this._config.entity]);const targetTemp=stateObj.attributes.temperature!==null&&Number.isFinite(Number(stateObj.attributes.temperature))?stateObj.attributes.temperature:stateObj.attributes.min_temp;if(this.hass.config.unit_system.temperature==="°C"){stateObj.attributes.min_temp=5;stateObj.attributes.max_temp=35;}const slider=stateObj.state===UNAVAILABLE?$$2` <round-slider disabled="true"></round-slider> `:$$2`
            ${this.layout==="big"?$$2` <round-slider
                  .value=${targetTemp}
                  .low=${stateObj.attributes.target_temp_low}
                  .high=${stateObj.attributes.target_temp_high}
                  .min=${stateObj.attributes.min_temp}
                  .max=${stateObj.attributes.max_temp}
                  .step=${this._stepSize}
                  @value-changing=${this._dragEvent}
                  @value-changed=${this._setTemperature}
                ></round-slider>`:$$2``}
          `;const currentTemperature=y$1`
        <svg viewBox="0 0 40 20" class=${o$1({"current_temp-small":this.layout==="medium"||this.layout==="small"})} >
          <text
            x="50%"
            dx="1"
            y="60%"
            text-anchor="middle"
            style="font-size: 10px;"
            class=${o$1({"text_temp-small":this.layout==="medium"||this.layout==="small"})}
          >
            ${stateObj.attributes.current_temperature!==null&&!isNaN(stateObj.attributes.current_temperature)?y$1`${formatNumber(stateObj.attributes.current_temperature,this.hass.locale)}
            <tspan dx="-3" dy="-6.5" style="font-size: 4px;">
              ${this.hass.config.unit_system.temperature}
            </tspan>`:""}
          </text>
        </svg>
      `;const setValues=y$1`
      <svg id="set-values"
      class=${o$1({"set-values":this.layout==="big"||this.layout==="medium","set-values-small":this.layout==="small"})}>
        <g>
          <text text-anchor="middle" class="set-value">
          <tspan dx="0" dy="0" class="set_value-small">
              Set
            </tspan>
            ${stateObj.state===UNAVAILABLE?this.hass.localize("state.default.unavailable"):this._setTemp===undefined||this._setTemp===null?"":Array.isArray(this._setTemp)?this._stepSize===1?y$1`
                      ${formatNumber(this._setTemp[0],this.hass.locale,{maximumFractionDigits:0})} -
                      ${formatNumber(this._setTemp[1],this.hass.locale,{maximumFractionDigits:0})}
                      `:y$1`
                      ${formatNumber(this._setTemp[0],this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})} -
                      ${formatNumber(this._setTemp[1],this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}
                      `:this._stepSize===1?y$1`
                      ${formatNumber(this._setTemp,this.hass.locale,{maximumFractionDigits:0})}
                      `:y$1`
                      ${formatNumber(this._setTemp,this.hass.locale,{minimumFractionDigits:1,maximumFractionDigits:1})}
                      `}
          </text>
          <text dy="22" text-anchor="middle" id="set-mode">
          ${this.layout==="big"?$$2`
                  ${stateObj.attributes.hvac_action?this.hass.localize(`state_attributes.climate.hvac_action.${stateObj.attributes.hvac_action}`):this.hass.localize(`component.climate.state._.${stateObj.state}`)}
                  ${stateObj.attributes.preset_mode&&stateObj.attributes.preset_mode!==CLIMATE_PRESET_NONE?$$2`
                        -
                        ${this.hass.localize(`state_attributes.climate.preset_mode.${stateObj.attributes.preset_mode}`)||stateObj.attributes.preset_mode}
                      `:""}
                `:$$2``}
            </text>
        </g>
      </svg>
    `;return $$2`
      ${this.layout==="big"?$$2`
            <ha-card
              class=${o$1({[mode]:true})}
            >
              <ha-icon-button
                class="more-info"
                .label=${this.hass.localize("ui.panel.lovelace.cards.show_more_info")}
                .path=${mdiDotsVertical}
                @click=${this._handleMoreInfo}
                tabindex="0"
              ></ha-icon-button>

              <div class="content">
                <div class="controls">
                  <div class="slider">
                    ${slider}
                    <div class="slider-center">
                      <div id="temperature">
                        ${currentTemperature} ${setValues}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="info" .title=${name}>
                  <div class="modes">
                    ${(stateObj.attributes.hvac_modes||[]).concat().sort(compareClimateHvacModes).map(modeItem=>this._renderIcon(modeItem,mode))}
                  </div>
                  ${name}
                </div>
              </div>
            </ha-card>
          `:$$2`
            <ha-card
              class=${o$1({[mode]:true})}
              @click=${this._handleMoreInfo}
            >
              <div class="content">
                <div
                  class=${o$1({"controls-small":this.layout==="small","controls-medium":this.layout==="medium"})}
                >
                  <div class="slider-small">
                    ${slider}
                    <div class="slider-center-small">
                      <div
                        class=${o$1({"temperature-medium":this.layout==="medium","temperature-small":this.layout==="small"})}
                      >
                        ${currentTemperature}
                      </div>
                      <div
                        class=${o$1({temp_values:this.layout==="medium","temp_values-small":this.layout==="small"})}
                      >
                        ${setValues}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class=${o$1({"info-small":this.layout==="small","info-medium":this.layout==="medium"})}
                  .title=${name}
                >
                  <div class="modes-small">
                    ${(stateObj.attributes.hvac_modes||[]).concat().sort(compareClimateHvacModes).map(modeItem=>this._renderIcon(modeItem,mode))}
                  </div>
                  ${name}
                </div>
              </div>
            </ha-card>
          `}
    `;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HuiThermostatCard.prototype),"updated",this).call(this,changedProps);if(!this._config||!this.hass||!changedProps.has("hass")&&!changedProps.has("_config")){return;}const oldHass=changedProps.get("hass");const oldConfig=changedProps.get("_config");if(!oldHass||!oldConfig||oldHass.themes!==this.hass.themes||oldConfig.theme!==this._config.theme){applyThemesOnElement(this,this.hass.themes,this._config.theme);}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return;}if(!oldHass||oldHass.states[this._config.entity]!==stateObj){this._rescale_svg();}}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){if(!this.hass||!this._config||!changedProps.has("hass")){return;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return;}const oldHass=changedProps.get("hass");if(!oldHass||oldHass.states[this._config.entity]!==stateObj){this._setTemp=this._getSetTemp(stateObj);}}},{kind:"method",key:"_rescale_svg",value:function _rescale_svg(){// Set the viewbox of the SVG containing the set temperature to perfectly
// fit the text
// That way it will auto-scale correctly
// This is not done to the SVG containing the current temperature, because
// it should not be centered on the text, but only on the value
const card=this._card;if(card){card.updateComplete.then(()=>{const svgRoot=this.shadowRoot.querySelector("#set-values");const box=svgRoot.querySelector("g").getBBox();svgRoot.setAttribute("viewBox",`${box.x} ${box.y} ${box.width} ${box.height}`);svgRoot.setAttribute("width",`${box.width}`);svgRoot.setAttribute("height",`${box.height}`);});}}},{kind:"get",key:"_stepSize",value:function _stepSize(){const stateObj=this.hass.states[this._config.entity];if(stateObj.attributes.target_temp_step){return stateObj.attributes.target_temp_step;}return this.hass.config.unit_system.temperature===UNIT_F?1:0.5;}},{kind:"method",key:"_getSetTemp",value:function _getSetTemp(stateObj){if(stateObj.state===UNAVAILABLE){return undefined;}if(stateObj.attributes.target_temp_low&&stateObj.attributes.target_temp_high){return [stateObj.attributes.target_temp_low,stateObj.attributes.target_temp_high];}return stateObj.attributes.temperature;}},{kind:"method",key:"_dragEvent",value:function _dragEvent(e){const stateObj=this.hass.states[this._config.entity];if(e.detail.low){this._setTemp=[e.detail.low,stateObj.attributes.target_temp_high];}else if(e.detail.high){this._setTemp=[stateObj.attributes.target_temp_low,e.detail.high];}else {this._setTemp=e.detail.value;}}},{kind:"method",key:"_setTemperature",value:function _setTemperature(e){const stateObj=this.hass.states[this._config.entity];if(e.detail.low){this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:e.detail.low,target_temp_high:stateObj.attributes.target_temp_high});}else if(e.detail.high){this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:stateObj.attributes.target_temp_low,target_temp_high:e.detail.high});}else {this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:e.detail.value});}}},{kind:"method",key:"_renderIcon",value:function _renderIcon(mode,currentMode){if(!modeIcons[mode]){return $$2``;}return $$2`
      <ha-icon-button
        class=${o$1({"selected-icon":currentMode===mode})}
        .mode=${mode}
        @click=${this._handleAction}
        tabindex="0"
        .path=${modeIcons[mode]}
        .label=${this.hass.localize(`component.climate.state._.${mode}`)}
      >
      </ha-icon-button>
    `;}},{kind:"method",key:"_handleMoreInfo",value:function _handleMoreInfo(){fireEvent(this,"hass-more-info",{entityId:this._config.entity});}},{kind:"method",key:"_handleAction",value:function _handleAction(e){this.hass.callService("climate","set_hvac_mode",{entity_id:this._config.entity,hvac_mode:e.currentTarget.mode});}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: block;
      }

      ha-card {
        height: 100%;
        position: relative;
        overflow: hidden;
        border-radius: 1.5rem;
        --name-font-size: 1.2rem;
        --brightness-font-size: 1.2rem;
        --rail-border-color: transparent;
      }
      .auto,
      .heat_cool {
        --mode-color: var(--state-climate-auto-color);
      }
      .cool {
        --mode-color: var(--state-climate-cool-color);
      }
      .heat {
        --mode-color: var(--state-climate-heat-color);
      }
      .manual {
        --mode-color: var(--state-climate-manual-color);
      }
      .off {
        --mode-color: var(--state-climate-off-color);
      }
      .fan_only {
        --mode-color: var(--state-climate-fan_only-color);
      }
      .eco {
        --mode-color: var(--state-climate-eco-color);
      }
      .dry {
        --mode-color: var(--state-climate-dry-color);
      }
      .idle {
        --mode-color: var(--state-climate-idle-color);
      }
      .unknown-mode {
        --mode-color: var(--state-unknown-color);
      }

      .more-info {
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        border-radius: 100%;
        color: var(--secondary-text-color);
        z-index: 1;
      }

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .controls {
        display: flex;
        justify-content: center;
        height: 100%;
        padding: 16px;
        position: relative;
        align-items: center;
        align-content: center;
      }
      .controls-small {
        display: flex;
        justify-content: center;
        height: 100%;
        padding: 9px;
        padding-bottom: 0;
        position: relative;
        align-items: center;
        align-content: center;
      }
      .controls-medium {
        display: flex;
        justify-content: center;
        height: 100%;
        padding: 16px;
        padding-bottom: 0;
        position: relative;
        align-items: center;
        align-content: center;
      }

      .slider {
        height: 100%;
        width: 100%;
        position: relative;
        max-width: 250px;
        min-width: 100px;
      }
      .slider-small {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      round-slider {
        --round-slider-path-color: var(--slider-track-color);
        --round-slider-bar-color: var(--mode-color);
        padding-bottom: 10%;
      }

      .slider-center {
        position: absolute;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        box-sizing: border-box;
        border-radius: 100%;
        left: 20px;
        top: 20px;
        text-align: center;
        overflow-wrap: break-word;
        pointer-events: none;
      }
      .slider-center-small {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        overflow-wrap: break-word;
        pointer-events: none;
        height: 100%;
        width: 100%;
      }

      #temperature {
        position: absolute;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 50%;
        top: 45%;
        left: 50%;
      }
      .temperature-medium {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 63%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--accent-color);
      }
      .temperature-small {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 60%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--accent-color);
      }
      .current_temp-small {
        margin-top: 11%;
      }
      .temp_values {
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 100%;
        margin-top: 13%;
      }
      .temp_values-small {
        display: flex;
        justify-content: center;
        align-content: center;
        height: 15%;
        margin-top: 16%;
      }

      .set-values {
        max-width: 80%;
        transform: translate(0, -50%);
        font-size: 20px;
      }
      .set-values-small {
        max-width: 80%;
        transform: translate(0, -50%);
        font-size: 16px;
      }

      #set-mode {
        fill: var(--secondary-text-color);
        font-size: 16px;
      }
      .set_value {
        font-size: 15px;
      }
      .set_value-small {
        font-size: 15px;
      }

      .info {
        justify-content: center;
        text-align: center;
        padding: 5px;
        padding-bottom: 44px;
        margin-top: -70px;
        font-size: 1.5rem;
        font-weight: 450;
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        font-weight: 450;
        float: left;
        text-overflow: ellipsis;
      }
      .info-medium {
        justify-content: center;
        text-align: center;
        padding: 22px;
        padding-top: 0;
        font-size: var(--name-font-size);
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 185px;
        font-weight: 450;
        float: left;
        text-overflow: ellipsis;
      }
      .info-small {
        justify-content: center;
        text-align: center;
        padding: 15px;
        padding-top: 0;
        font-size: var(--name-font-size);
        white-space: nowrap;
        display: inline-block;
        overflow: hidden;
        max-width: 110px;
        font-weight: 450;
        font-size: 14px;
        float: left;
        text-overflow: ellipsis;
      }

      .modes > * {
        color: var(--disabled-text-color);
        cursor: pointer;
        display: inline-block;
      }

      .modes .selected-icon {
        color: var(--mode-color);
      }
      .modes-small {
        display: none;
      }

      text {
        fill: var(--primary-text-color);
      }
      .text_temp-small {
        fill: var(--card-background-color);
      }
    `;}}]};},s$2);

const weatherSVGs=new Set(["clear-night","cloudy","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]);const weatherIcons={exceptional:mdiAlertCircleOutline};const weatherAttrIcons={humidity:mdiWaterPercent,wind_bearing:mdiWeatherWindy,wind_speed:mdiWeatherWindy,pressure:mdiGauge,visibility:mdiWeatherFog,precipitation:mdiWeatherRainy};const cloudyStates=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]);const rainStates=new Set(["hail","rainy","pouring"]);const windyStates=new Set(["windy","windy-variant"]);const snowyStates=new Set(["snowy","snowy-rainy"]);const lightningStates=new Set(["lightning","lightning-rainy"]);const cardinalDirections=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];const getWindBearingText=degree=>{const degreenum=parseInt(degree,10);if(isFinite(degreenum)){// eslint-disable-next-line no-bitwise
return cardinalDirections[((degreenum+11.25)/22.5|0)%16];}return degree;};const getWindBearing=bearing=>{if(bearing!=null){return getWindBearingText(bearing);}return "";};const getWind=(hass,speed,bearing)=>{const speedText=`${formatNumber(speed,hass.locale)} ${getWeatherUnit(hass,"wind_speed")}`;if(bearing!==null){const cardinalDirection=getWindBearing(bearing);return `${speedText} (${hass.localize(`ui.card.weather.cardinal_direction.${cardinalDirection.toLowerCase()}`)||cardinalDirection})`;}return speedText;};const getWeatherUnit=(hass,measure)=>{switch(measure){case"visibility":return hass.config.unit_system.length||"";case"precipitation":return hass.config.unit_system.accumulated_precipitation||"";case"humidity":case"precipitation_probability":return "%";default:return hass.config.unit_system[measure]||"";}};const getSecondaryWeatherAttribute=(hass,stateObj)=>{var _stateObj$attributes$;const extrema=getWeatherExtrema(hass,stateObj);if(extrema){return extrema;}let value;let attribute;if((_stateObj$attributes$=stateObj.attributes.forecast)!==null&&_stateObj$attributes$!==void 0&&_stateObj$attributes$.length&&stateObj.attributes.forecast[0].precipitation!==undefined&&stateObj.attributes.forecast[0].precipitation!==null){value=stateObj.attributes.forecast[0].precipitation;attribute="precipitation";}else if("humidity"in stateObj.attributes){value=stateObj.attributes.humidity;attribute="humidity";}else {return undefined;}const weatherAttrIcon=weatherAttrIcons[attribute];return $$2`
    ${weatherAttrIcon?$$2`
          <ha-svg-icon class="attr-icon" .path=${weatherAttrIcon}></ha-svg-icon>
        `:hass.localize(`ui.card.weather.attributes.${attribute}`)}
    ${formatNumber(value,hass.locale,{maximumFractionDigits:1})}
    ${getWeatherUnit(hass,attribute)}
  `;};const getWeatherExtrema=(hass,stateObj)=>{var _stateObj$attributes$2;if(!((_stateObj$attributes$2=stateObj.attributes.forecast)!==null&&_stateObj$attributes$2!==void 0&&_stateObj$attributes$2.length)){return undefined;}let tempLow;let tempHigh;const today=new Date().getDate();for(const forecast of stateObj.attributes.forecast){if(new Date(forecast.datetime).getDate()!==today){break;}if(!tempHigh||forecast.temperature>tempHigh){tempHigh=forecast.temperature;}if(!tempLow||forecast.templow&&forecast.templow<tempLow){tempLow=forecast.templow;}if(!forecast.templow&&(!tempLow||forecast.temperature<tempLow)){tempLow=forecast.temperature;}}if(!tempLow&&!tempHigh){return undefined;}const unit=getWeatherUnit(hass,"temperature");return $$2`
    ${tempHigh?`${formatNumber(tempHigh,hass.locale)} ${unit}`:""}
    ${tempLow&&tempHigh?" / ":""}
    ${tempLow?`${formatNumber(tempLow,hass.locale)} ${unit}`:""}
  `;};const weatherSVGStyles=r$2`
  .rain {
    fill: var(--weather-icon-rain-color, #30b3ff);
  }
  .sun {
    fill: var(--weather-icon-sun-color, #fdd93c);
  }
  .moon {
    fill: var(--weather-icon-moon-color, #fcf497);
  }
  .cloud-back {
    fill: var(--weather-icon-cloud-back-color, #d4d4d4);
  }
  .cloud-front {
    fill: var(--weather-icon-cloud-front-color, #f9f9f9);
  }
`;const getWeatherStateSVG=(state,nightTime)=>y$1`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${state==="sunny"?y$1`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        `:""}
  ${state==="clear-night"?y$1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:""}
  ${state==="partlycloudy"&&nightTime?y$1`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:state==="partlycloudy"?y$1`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:""}
  ${cloudyStates.has(state)?y$1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${rainStates.has(state)?y$1`
          <path
            class="rain"
            d="m5.2852 14.734c-0.22401 0.24765-0.57115 0.2988-0.77505 0.11395-0.20391-0.1845-0.18732-0.53481 0.036689-0.78281 0.14817-0.16298 0.59126-0.32914 0.87559-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.065617 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m11.257 14.163c-0.22437 0.24765-0.57115 0.2988-0.77505 0.11395-0.2039-0.1845-0.18768-0.53481 0.03669-0.78281 0.14817-0.16298 0.59126-0.32914 0.8756-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.06562 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m8.432 15.878c-0.15452 0.17039-0.3937 0.20567-0.53446 0.07867-0.14041-0.12735-0.12876-0.36865 0.025753-0.53975 0.10195-0.11218 0.40711-0.22684 0.60325-0.29175 0.085725-0.02858 0.15628 0.03563 0.13652 0.12382-0.045508 0.20108-0.12912 0.51647-0.23107 0.629"
          />
          <path
            class="rain"
            d="m7.9991 14.118c-0.19226 0.21237-0.49001 0.25612-0.66499 0.09737-0.17462-0.15804-0.16051-0.45861 0.03175-0.67098 0.12665-0.14005 0.50729-0.28293 0.75071-0.36336 0.10689-0.03563 0.19473 0.0441 0.17004 0.15346-0.056092 0.25082-0.16051 0.64347-0.28751 0.78352"
          />
        `:""}
  ${state==="pouring"?y$1`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        `:""}
  ${windyStates.has(state)?y$1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${snowyStates.has(state)?y$1`
          <path
            class="rain"
            d="m 8.4319893,15.348341 c 0,0.257881 -0.209197,0.467079 -0.467078,0.467079 -0.258586,0 -0.46743,-0.209198 -0.46743,-0.467079 0,-0.258233 0.208844,-0.467431 0.46743,-0.467431 0.257881,0 0.467078,0.209198 0.467078,0.467431"
          />
          <path
            class="rain"
            d="m 11.263878,14.358553 c 0,0.364067 -0.295275,0.659694 -0.659695,0.659694 -0.364419,0 -0.6596937,-0.295627 -0.6596937,-0.659694 0,-0.364419 0.2952747,-0.659694 0.6596937,-0.659694 0.36442,0 0.659695,0.295275 0.659695,0.659694"
          />
          <path
            class="rain"
            d="m 5.3252173,13.69847 c 0,0.364419 -0.295275,0.660047 -0.659695,0.660047 -0.364067,0 -0.659694,-0.295628 -0.659694,-0.660047 0,-0.364067 0.295627,-0.659694 0.659694,-0.659694 0.36442,0 0.659695,0.295627 0.659695,0.659694"
          />
        `:""}
  ${lightningStates.has(state)?y$1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;const getWeatherStateIcon=(state,element,nightTime)=>{const userDefinedIcon=getComputedStyle(element).getPropertyValue(`--weather-icon-${state}`);if(userDefinedIcon){return $$2`
      <div
        style="background-size: cover;${i$3({"background-image":userDefinedIcon})}"
      ></div>
    `;}if(weatherSVGs.has(state)){return $$2`${getWeatherStateSVG(state,nightTime)}`;}if(state in weatherIcons){return $$2`
      <ha-svg-icon
        class="weather-icon"
        .path=${weatherIcons[state]}
      ></ha-svg-icon>
    `;}return undefined;};const DAY_IN_MILLISECONDS$1=86400000;const isForecastHourly=forecast=>{if(forecast&&forecast!==null&&forecast!==void 0&&forecast.length&&(forecast===null||forecast===void 0?void 0:forecast.length)>2){const date1=new Date(forecast[1].datetime);const date2=new Date(forecast[2].datetime);const timeDiff=date2.getTime()-date1.getTime();return timeDiff<DAY_IN_MILLISECONDS$1;}return undefined;};

const DAY_IN_MILLISECONDS=86400000;_decorate([n$1("hui-weather-forecast-card")],function(_initialize,_LitElement){class HuiWeatherForecastCard extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiWeatherForecastCard,d:[{kind:"method",static:true,key:"getConfigElement",value:async function getConfigElement(){await import('./hui-weather-forecast-card-editor-dev.js');return document.createElement("hui-weather-forecast-card-editor");}},{kind:"method",static:true,key:"getStubConfig",value:function getStubConfig(hass,entities,entitiesFallback){const includeDomains=["weather"];const maxEntities=1;const foundEntities=findEntities(hass,maxEntities,entities,entitiesFallback,includeDomains);return {type:"weather-forecast",entity:foundEntities[0]||""};}},{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",decorators:[t$1()],key:"_cardSize",value(){return "big";}},{kind:"field",decorators:[e$3({type:String})],key:"layout",value(){return "big";}},{kind:"field",decorators:[e$3({type:Boolean,reflect:true,attribute:"veryverynarrow"})],key:"_veryVeryNarrow",value(){return false;}},{kind:"method",key:"getCardSize",value:function getCardSize(){var _this$_config,_this$_config2;let cardSize=0;if(((_this$_config=this._config)===null||_this$_config===void 0?void 0:_this$_config.show_current)!==false){cardSize+=2;}if(((_this$_config2=this._config)===null||_this$_config2===void 0?void 0:_this$_config2.show_forecast)!==false){cardSize+=3;}return cardSize;}},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entity){throw new Error("Entity must be specified");}if(!isValidEntityId(config.entity)){throw new Error("Invalid entity");}this._config=config;}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"willUpdate",value:function willUpdate(){if(!this.hasUpdated){this._measureCard();}}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HuiWeatherForecastCard.prototype),"updated",this).call(this,changedProps);if(!this._config||!this.hass){return;}const oldHass=changedProps.get("hass");const oldConfig=changedProps.get("_config");if(changedProps.has("hass")&&!oldHass||changedProps.has("_config")&&!oldConfig||changedProps.has("hass")&&oldHass.themes!==this.hass.themes||changedProps.has("_config")&&oldConfig.theme!==this._config.theme){applyThemesOnElement(this,this.hass.themes,this._config.theme);}}},{kind:"method",key:"render",value:function render(){var _this$_config3,_stateObj$attributes$,_this$_config4,_this$_config$name;if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning> ${createEntityNotFoundWarning(this.hass)} </hui-warning>
      `;}if(stateObj.state===UNAVAILABLE){return $$2`
        <ha-card class="unavailable" @click=${this._handleAction}>
          ${this.hass.localize("ui.panel.lovelace.warning.entity_unavailable","entity",`${computeStateName(stateObj)} (${this._config.entity})`)}
        </ha-card>
      `;}const forecast=((_this$_config3=this._config)===null||_this$_config3===void 0?void 0:_this$_config3.show_forecast)!==false&&(_stateObj$attributes$=stateObj.attributes.forecast)!==null&&_stateObj$attributes$!==void 0&&_stateObj$attributes$.length?stateObj.attributes.forecast.slice(0,this._veryVeryNarrow?3:5):undefined;const weather=!forecast||((_this$_config4=this._config)===null||_this$_config4===void 0?void 0:_this$_config4.show_current)!==false;const hourly=isForecastHourly(forecast);let dayNight;if(hourly){const dateFirst=new Date(forecast[0].datetime);const datelast=new Date(forecast[forecast.length-1].datetime);const dayDiff=datelast.getTime()-dateFirst.getTime();dayNight=dayDiff>DAY_IN_MILLISECONDS;}const weatherStateIcon=getWeatherStateIcon(stateObj.state,this);const name=(_this$_config$name=this._config.name)!==null&&_this$_config$name!==void 0?_this$_config$name:computeStateName(stateObj);return $$2`
      <ha-card
        class=${o$1({"ha-card-small":this.layout==="small","ha-card-medium":this.layout==="medium","ha-card":this.layout==="big"})}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
        tabindex=${l$2(hasAction(this._config.tap_action)?"0":undefined)}
      >
        ${weather?$$2`
              <div class="content">
                <div
                  class=${o$1({"icon-image-small":this.layout==="small","icon-image-medium":this.layout==="medium","icon-image":this.layout==="big"})}
                >
                  ${weatherStateIcon||$$2`
                    <ha-state-icon
                      class="weather-icon"
                      .state=${stateObj}
                    ></ha-state-icon>
                  `}
                </div>
                <div class="info">
                  <div
                    class=${o$1({"name-state-medium":this.layout==="medium","name-state":this.layout==="big"})}
                  >
                    ${this.layout==="big"?$$2`<div class="state-big">
                            ${computeStateDisplay(this.hass.localize,stateObj,this.hass.locale)}
                          </div>
                          <div class="name" .title=${name}>${name}</div>`:$$2``}
                  </div>
                  <div class="temp-attribute">
                    <div
                      class=${o$1({"temp-small":this.layout==="small","temp-medium":this.layout==="medium",temp:this.layout==="big"})}
                    >
                      ${formatNumber(stateObj.attributes.temperature,this.hass.locale)}&nbsp;<span
                        >${getWeatherUnit(this.hass,"temperature")}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            `:""}
        ${forecast&&this.layout==="big"?$$2`
              <div class="forecast">
                ${forecast.map(item=>this._showValue(item.templow)||this._showValue(item.temperature)?$$2`
                        <div>
                          <div>
                            ${dayNight?$$2`
                                  ${new Date(item.datetime).toLocaleDateString(this.hass.language,{weekday:"short"})}
                                  <div class="daynight">
                                    ${item.daytime===undefined||item.daytime?this.hass.localize("ui.card.weather.day"):this.hass.localize("ui.card.weather.night")}<br />
                                  </div>
                                `:hourly?$$2`
                                  ${formatTime(new Date(item.datetime),this.hass.locale)}
                                `:$$2`
                                  ${new Date(item.datetime).toLocaleDateString(this.hass.language,{weekday:"short"})}
                                `}
                          </div>
                          ${this._showValue(item.condition)?$$2`
                                <div class="forecast-image-icon">
                                  ${getWeatherStateIcon(item.condition,this,!(item.daytime||item.daytime===undefined))}
                                </div>
                              `:""}
                          <div class="temp">
                            ${this._showValue(item.temperature)?$$2`${formatNumber(item.temperature,this.hass.locale)}°`:"—"}
                          </div>
                          <div class="templow">
                            ${this._showValue(item.templow)?$$2`${formatNumber(item.templow,this.hass.locale)}°`:hourly?"":"—"}
                          </div>
                        </div>
                      `:"")}
              </div>
            `:""}
      </ha-card>
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}},{kind:"method",key:"_measureCard",value:function _measureCard(){if(!this.isConnected){return;}const card=this.shadowRoot.querySelector("ha-card");// If we show an error or warning there is no ha-card
if(!card){return;}if(card.offsetWidth<375){this.setAttribute("narrow","");}else {this.removeAttribute("narrow");}if(card.offsetWidth<300){this.setAttribute("verynarrow","");}else {this.removeAttribute("verynarrow");}this._veryVeryNarrow=card.offsetWidth<245;}},{kind:"method",key:"_showValue",value:function _showValue(item){return typeof item!=="undefined"&&item!==null;}},{kind:"get",static:true,key:"styles",value:function styles(){return [weatherSVGStyles,r$2`
        ha-card {
          cursor: pointer;
          outline: none;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
        }
        .ha-card-small {
          cursor: pointer;
          outline: none;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          box-sizing: border-box;
          border-radius: 1.5rem;
          aspect-ratio: 1;
          padding: 0;
        }

        .content {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
        }

        .icon-image {
          display: flex;
          align-items: center;
          min-width: 64px;
          margin-right: 16px;
        }
        .icon-image-small > * {
          height: 45px;
          margin-top: 8%;
        }

        .icon-image-medium > * {
          height: 50px;
          width: 50px;
        }
        .icon-image > * {
          flex: 0 0 64px;
          height: 64px;
        }

        .weather-icon {
          --mdc-icon-size: 64px;
        }

        .info {
          display: flex;
          justify-content: space-between;
          flex-grow: 1;
          overflow: hidden;
        }
        .temp-attribute {
          text-align: right;
        }

        .temp-attribute .temp {
          position: relative;
          margin-right: 24px;
        }

        .temp-attribute .temp span {
          position: absolute;
          font-size: 24px;
          top: 1px;
        }
        .temp-small {
          font-weight: 450;
        }

        .state-big,
        .temp-attribute .temp {
          font-size: 20px;
          line-height: 1.2;
        }

        .name,
        .attribute {
          font-size: 14px;
          line-height: 1;
        }

        .name-state {
          overflow: hidden;
          padding-right: 12px;
          width: 100%;
        }

        .name,
        .state-big {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .state-medium {
          font-size: 1rem;
          font-weight: 450;
          margin-bottom: 5%;
        }
        .temp-medium {
          font-size: 1.2rem;
          font-weight: 450;
        }

        .attribute {
          white-space: nowrap;
        }

        .forecast {
          display: flex;
          justify-content: space-around;
          padding-top: 16px;
        }

        .forecast > div {
          text-align: center;
        }

        .forecast .icon,
        .forecast .temp {
          margin: 4px 0;
        }

        .forecast .temp {
          font-size: 16px;
        }

        .forecast-image-icon {
          padding-top: 4px;
          padding-bottom: 4px;
          display: flex;
          justify-content: center;
        }

        .forecast-image-icon > * {
          width: 40px;
          height: 40px;
          --mdc-icon-size: 40px;
        }

        .forecast-icon {
          --mdc-icon-size: 40px;
        }

        .attr-icon {
          --mdc-icon-size: 20px;
        }

        .attribute,
        .templow,
        .daynight,
        .name {
          color: var(--secondary-text-color);
        }

        .unavailable {
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          padding: 10px 20px;
          text-align: center;
        }

        /* ============= NARROW ============= */

        :host([narrow]) .icon-image {
          min-width: 52px;
        }

        :host([narrow]) .weather-image {
          flex: 0 0 52px;
          width: 52px;
        }

        :host([narrow]) .icon-image .weather-icon {
          --mdc-icon-size: 52px;
        }

        :host([narrow]) .state,
        :host([narrow]) .temp-attribute .temp {
          font-size: 22px;
        }

        :host([narrow]) .temp-attribute .temp {
          margin-right: 16px;
        }

        :host([narrow]) .temp span {
          top: 1px;
          font-size: 16px;
        }

        /* ============= VERY NARROW ============= */

        :host([veryNarrow]) .name,
        :host([veryNarrow]) .attribute {
          display: none;
        }

        :host([veryNarrow]) .info {
          flex-direction: column;
          align-items: flex-start;
        }

        :host([veryNarrow]) .name-state {
          padding-right: 0;
        }

        /* ============= VERY VERY NARROW ============= */

        :host([veryVeryNarrow]) .info {
          align-items: center;
        }

        :host([veryVeryNarrow]) .content {
          flex-wrap: wrap;
          justify-content: center;
          flex-direction: column;
        }

        :host([veryVeryNarrow]) .icon-image {
          margin-right: 0;
        }
      `];}}]};},s$2);

const ALWAYS_LOADED_TYPES$1=new Set(["entity","entities","button","entity-button","glance","grid","light","sensor","thermostat","weather-forecast"]);const LAZY_LOAD_TYPES={"alarm-panel":()=>import('./hui-alarm-panel-card-dev.js'),area:()=>import('./hui-area-card-dev.js'),calendar:()=>Promise.resolve().then(function () { return huiCalendarCard; }),conditional:()=>import('./hui-conditional-card-dev.js'),"empty-state":()=>import('./hui-empty-state-card-dev.js'),"energy-carbon-consumed-gauge":()=>import('./hui-energy-carbon-consumed-gauge-card-dev.js'),"energy-date-selection":()=>import('./hui-energy-date-selection-card-dev.js'),"energy-devices-graph":()=>import('./hui-energy-devices-graph-card-dev.js'),"energy-distribution":()=>import('./hui-energy-distribution-card-dev.js'),"energy-gas-graph":()=>import('./hui-energy-gas-graph-card-dev.js'),"energy-grid-neutrality-gauge":()=>import('./hui-energy-grid-neutrality-gauge-card-dev.js'),"energy-solar-consumed-gauge":()=>import('./hui-energy-solar-consumed-gauge-card-dev.js'),"energy-solar-graph":()=>import('./hui-energy-solar-graph-card-dev.js'),"energy-sources-table":()=>import('./hui-energy-sources-table-card-dev.js'),"energy-usage-graph":()=>import('./hui-energy-usage-graph-card-dev.js'),"entity-filter":()=>import('./hui-entity-filter-card-dev.js'),error:()=>import('./hui-error-card-dev.js'),gauge:()=>import('./hui-gauge-card-dev.js'),"history-graph":()=>import('./hui-history-graph-card-dev.js'),"horizontal-stack":()=>import('./hui-horizontal-stack-card-dev.js'),humidifier:()=>import('./hui-humidifier-card-dev.js'),iframe:()=>import('./hui-iframe-card-dev.js'),logbook:()=>import('./hui-logbook-card-dev.js'),map:()=>import('./hui-map-card-dev.js'),markdown:()=>import('./hui-markdown-card-dev.js'),"media-control":()=>import('./hui-media-control-card-dev.js'),"picture-elements":()=>import('./hui-picture-elements-card-dev.js'),"picture-entity":()=>import('./hui-picture-entity-card-dev.js'),"picture-camera":()=>import('./hui-picture-camera-card-dev.js'),"picture-glance":()=>import('./hui-picture-glance-card-dev.js'),picture:()=>import('./hui-picture-card-dev.js'),"plant-status":()=>import('./hui-plant-status-card-dev.js'),"safe-mode":()=>import('./hui-safe-mode-card-dev.js'),"shopping-list":()=>import('./hui-shopping-list-card-dev.js'),starting:()=>import('./hui-starting-card-dev.js'),"statistics-graph":()=>import('./hui-statistics-graph-card-dev.js'),"vertical-stack":()=>import('./hui-vertical-stack-card-dev.js')};// This will not return an error card but will throw the error
const tryCreateCardElement=config=>tryCreateLovelaceElement("card",config,ALWAYS_LOADED_TYPES$1,LAZY_LOAD_TYPES,undefined,undefined);const createCardElement=config=>createLovelaceElement("card",config,ALWAYS_LOADED_TYPES$1,LAZY_LOAD_TYPES,undefined,undefined);const getCardElementClass=type=>getLovelaceElementClass(type,"card",ALWAYS_LOADED_TYPES$1,LAZY_LOAD_TYPES);

function createStyledHuiElement(elementConfig){const element=createHuiElement(elementConfig);// keep conditional card as a transparent container so let its position remain static
if(element.tagName!=="HUI-CONDITIONAL-ELEMENT"){element.classList.add("element");}if(elementConfig.style){Object.keys(elementConfig.style).forEach(prop=>{element.style.setProperty(prop,elementConfig.style[prop]);});}return element;}

function checkConditionsMet(conditions,hass){return conditions.every(c=>{const state=hass.states[c.entity]?hass.states[c.entity].state:UNAVAILABLE;return c.state?state===c.state:state!==c.state_not;});}function validateConditionalConfig(conditions){return conditions.every(c=>c.entity&&(c.state||c.state_not));}

class HuiConditionalElement extends HTMLElement{constructor(...args){super(...args);_defineProperty(this,"_hass",void 0);_defineProperty(this,"_config",void 0);_defineProperty(this,"_elements",[]);}setConfig(config){if(!config.conditions||!Array.isArray(config.conditions)||!config.elements||!Array.isArray(config.elements)||!validateConditionalConfig(config.conditions)){throw new Error("Invalid configuration");}if(this._elements.length>0){this._elements.forEach(el=>{if(el.parentElement){el.parentElement.removeChild(el);}});this._elements=[];}this._config=config;this._config.elements.forEach(elementConfig=>{this._elements.push(createStyledHuiElement(elementConfig));});this.updateElements();}set hass(hass){this._hass=hass;this.updateElements();}updateElements(){if(!this._hass||!this._config){return;}const visible=checkConditionsMet(this._config.conditions,this._hass);this._elements.forEach(el=>{if(visible){el.hass=this._hass;if(!el.parentElement){this.appendChild(el);}}else if(el.parentElement){el.parentElement.removeChild(el);}});}}customElements.define("hui-conditional-element",HuiConditionalElement);

function computeActionTooltip(hass,state,config,isHold){if(!config||!config.action||config.action==="none"){return "";}let tooltip=(isHold?hass.localize("ui.panel.lovelace.cards.picture-elements.hold"):hass.localize("ui.panel.lovelace.cards.picture-elements.tap"))+" ";switch(config.action){case"navigate":tooltip+=`${hass.localize("ui.panel.lovelace.cards.picture-elements.navigate_to","location",config.navigation_path)}`;break;case"url":tooltip+=`${hass.localize("ui.panel.lovelace.cards.picture-elements.url","url_path",config.url_path)}`;break;case"toggle":tooltip+=`${hass.localize("ui.panel.lovelace.cards.picture-elements.toggle","name",state)}`;break;case"call-service":tooltip+=`${hass.localize("ui.panel.lovelace.cards.picture-elements.call_service","name",config.service)}`;break;case"more-info":tooltip+=`${hass.localize("ui.panel.lovelace.cards.picture-elements.more_info","name",state)}`;break;}return tooltip;}const computeTooltip=(hass,config)=>{if(config.title===null){return "";}if(config.title){return config.title;}let stateName="";let tooltip="";if(config.entity){stateName=config.entity in hass.states?computeStateName(hass.states[config.entity]):config.entity;}if(!config.tap_action&&!config.hold_action){return stateName;}const tapTooltip=config.tap_action?computeActionTooltip(hass,stateName,config.tap_action,false):"";const holdTooltip=config.hold_action?computeActionTooltip(hass,stateName,config.hold_action,true):"";const newline=tapTooltip&&holdTooltip?"\n":"";tooltip=tapTooltip+newline+holdTooltip;return tooltip;};

_decorate([n$1("hui-icon-element")],function(_initialize,_LitElement){class HuiIconElement extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiIconElement,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.icon){throw Error("Icon required");}this._config={hold_action:{action:"more-info"},...config};}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}return $$2`
      <ha-icon
        .icon=${this._config.icon}
        .title=${computeTooltip(this.hass,this._config)}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
        tabindex=${l$2(hasAction(this._config.tap_action)?"0":undefined)}
      ></ha-icon>
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        cursor: pointer;
      }
      ha-icon:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `;}}]};},s$2);

// Handle 16x9, 16:9, 1.78x1, 1.78:1, 1.78
// Ignore everything else
const parseOrThrow=num=>{const parsed=parseFloat(num);if(isNaN(parsed)){throw new Error(`${num} is not a number`);}return parsed;};function parseAspectRatio(input){if(!input){return null;}try{if(input.endsWith("%")){return {w:100,h:parseOrThrow(input.substr(0,input.length-1))};}const arr=input.replace(":","x").split("x");if(arr.length===0){return null;}return arr.length===1?{w:parseOrThrow(arr[0]),h:1}:{w:parseOrThrow(arr[0]),h:parseOrThrow(arr[1])};}catch(err){// Ignore the error
}return null;}

const timeCachePromiseFunc=async(cacheKey,cacheTime,func,hass,entityId,...args)=>{let cache=hass[cacheKey];if(!cache){cache=hass[cacheKey]={};}const lastResult=cache[entityId];if(lastResult){return lastResult;}const result=func(hass,entityId,...args);cache[entityId]=result;result.then(// When successful, set timer to clear cache
()=>setTimeout(()=>{cache[entityId]=undefined;},cacheTime),// On failure, clear cache right away
()=>{cache[entityId]=undefined;});return result;};

const CAMERA_SUPPORT_STREAM=2;const STREAM_TYPE_HLS="hls";const STREAM_TYPE_WEB_RTC="web_rtc";const computeMJPEGStreamUrl=entity=>`/api/camera_proxy_stream/${entity.entity_id}?token=${entity.attributes.access_token}`;const fetchThumbnailUrlWithCache=async(hass,entityId,width,height)=>{const base_url=await timeCachePromiseFunc("_cameraTmbUrl",9000,fetchThumbnailUrl,hass,entityId);return `${base_url}&width=${width}&height=${height}`;};const fetchThumbnailUrl=async(hass,entityId)=>{const path=await getSignedPath(hass,`/api/camera_proxy/${entityId}`);return hass.hassUrl(path.path);};const fetchStreamUrl=async(hass,entityId,format)=>{const data={type:"camera/stream",entity_id:entityId};if(format){// @ts-ignore
data.format=format;}const stream=await hass.callWS(data);stream.url=hass.hassUrl(stream.url);return stream;};const handleWebRtcOffer=(hass,entityId,offer)=>hass.callWS({type:"camera/web_rtc_offer",entity_id:entityId,offer:offer});const fetchCameraPrefs=(hass,entityId)=>hass.callWS({type:"camera/get_prefs",entity_id:entityId});const updateCameraPrefs=(hass,entityId,prefs)=>hass.callWS({type:"camera/update_prefs",entity_id:entityId,...prefs});

_decorate([n$1("ha-hls-player")],function(_initialize,_LitElement){class HaHLSPlayer extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaHLSPlayer,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"url",value:void 0},{kind:"field",decorators:[e$3({type:Boolean,attribute:"controls"})],key:"controls",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"muted"})],key:"muted",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"autoplay"})],key:"autoPlay",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"playsinline"})],key:"playsInline",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value(){return false;}},{kind:"field",decorators:[i$2("video")],key:"_videoEl",value:void 0},{kind:"field",decorators:[t$1()],key:"_error",value:void 0},{kind:"field",decorators:[t$1()],key:"_errorIsFatal",value(){return false;}},{kind:"field",key:"_hlsPolyfillInstance",value:void 0},{kind:"field",key:"_exoPlayer",value(){return false;}},{kind:"field",static:true,key:"streamCount",value(){return 0;}},{kind:"method",key:"connectedCallback",value:// don't cache this, as we remove it on disconnects
function connectedCallback(){_get(_getPrototypeOf(HaHLSPlayer.prototype),"connectedCallback",this).call(this);HaHLSPlayer.streamCount+=1;if(this.hasUpdated){this._resetError();this._startHls();}}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaHLSPlayer.prototype),"disconnectedCallback",this).call(this);HaHLSPlayer.streamCount-=1;this._cleanUp();}},{kind:"method",key:"render",value:function render(){return $$2`
      ${this._error?$$2`<ha-alert
            alert-type="error"
            class=${this._errorIsFatal?"fatal":"retry"}
          >
            ${this._error}
          </ha-alert>`:""}
      ${!this._errorIsFatal?$$2`<video
            ?autoplay=${this.autoPlay}
            .muted=${this.muted}
            ?playsinline=${this.playsInline}
            ?controls=${this.controls}
          ></video>`:""}
    `;}},{kind:"method",key:"updated",value:function updated(changedProps){_get(_getPrototypeOf(HaHLSPlayer.prototype),"updated",this).call(this,changedProps);const urlChanged=changedProps.has("url");if(!urlChanged){return;}this._cleanUp();this._resetError();this._startHls();}},{kind:"method",key:"_startHls",value:async function _startHls(){var _this$hass$auth$exter;const masterPlaylistPromise=fetch(this.url);const Hls=(await import('./hls.light.min-dev.js')).default;if(!this.isConnected){return;}let hlsSupported=Hls.isSupported();if(!hlsSupported){hlsSupported=this._videoEl.canPlayType("application/vnd.apple.mpegurl")!=="";}if(!hlsSupported){this._setFatalError(this.hass.localize("ui.components.media-browser.video_not_supported"));return;}const useExoPlayer=this.allowExoPlayer&&((_this$hass$auth$exter=this.hass.auth.external)===null||_this$hass$auth$exter===void 0?void 0:_this$hass$auth$exter.config.hasExoPlayer);const masterPlaylist=await(await masterPlaylistPromise).text();if(!this.isConnected){return;}// Parse playlist assuming it is a master playlist. Match group 1 is whether hevc, match group 2 is regular playlist url
// See https://tools.ietf.org/html/rfc8216 for HLS spec details
const playlistRegexp=/#EXT-X-STREAM-INF:.*?(?:CODECS=".*?(hev1|hvc1)?\..*?".*?)?(?:\n|\r\n)(.+)/g;const match=playlistRegexp.exec(masterPlaylist);const matchTwice=playlistRegexp.exec(masterPlaylist);// Get the regular playlist url from the input (master) playlist, falling back to the input playlist if necessary
// This avoids the player having to load and parse the master playlist again before loading the regular playlist
let playlist_url;if(match!==null&&matchTwice===null){// Only send the regular playlist url if we match exactly once
playlist_url=new URL(match[2],this.url).href;}else {playlist_url=this.url;}// If codec is HEVC and ExoPlayer is supported, use ExoPlayer.
if(useExoPlayer&&match!==null&&match[1]!==undefined){this._renderHLSExoPlayer(playlist_url);}else if(Hls.isSupported()){this._renderHLSPolyfill(this._videoEl,Hls,playlist_url);}else {this._renderHLSNative(this._videoEl,playlist_url);}}},{kind:"method",key:"_renderHLSExoPlayer",value:async function _renderHLSExoPlayer(url){this._exoPlayer=true;window.addEventListener("resize",this._resizeExoPlayer);this.updateComplete.then(()=>nextRender()).then(this._resizeExoPlayer);this._videoEl.style.visibility="hidden";await this.hass.auth.external.sendMessage({type:"exoplayer/play_hls",payload:{url:new URL(url,window.location.href).toString(),muted:this.muted}});}},{kind:"field",key:"_resizeExoPlayer",value(){return ()=>{if(!this._videoEl){return;}const rect=this._videoEl.getBoundingClientRect();this.hass.auth.external.fireMessage({type:"exoplayer/resize",payload:{left:rect.left,top:rect.top,right:rect.right,bottom:rect.bottom}});};}},{kind:"method",key:"_isLLHLSSupported",value:function _isLLHLSSupported(){// LL-HLS keeps multiple requests in flight, which can run into browser limitations without
// an http/2 proxy to pipeline requests. However, a small number of streams active at
// once should be OK.
// The stream count may be incremented multiple times before this function is called to check
// the count e.g. when loading a page with many streams on it. The race can work in our favor
// so we now have a better idea on if we'll use too many browser connections later.
if(HaHLSPlayer.streamCount<=2){return true;}if(!("performance"in window)||performance.getEntriesByType("resource").length===0){return false;}const perfEntry=performance.getEntriesByType("resource")[0];return "nextHopProtocol"in perfEntry&&perfEntry.nextHopProtocol==="h2";}},{kind:"method",key:"_renderHLSPolyfill",value:async function _renderHLSPolyfill(videoEl,Hls,url){const hls=new Hls({backBufferLength:60,fragLoadingTimeOut:30000,manifestLoadingTimeOut:30000,levelLoadingTimeOut:30000,maxLiveSyncPlaybackRate:2,lowLatencyMode:this._isLLHLSSupported()});this._hlsPolyfillInstance=hls;hls.attachMedia(videoEl);hls.on(Hls.Events.MEDIA_ATTACHED,()=>{this._resetError();hls.loadSource(url);});hls.on(Hls.Events.FRAG_LOADED,(_event,_data)=>{this._resetError();});hls.on(Hls.Events.ERROR,(_event,data)=>{// Some errors are recovered automatically by the hls player itself, and the others handled
// in this function require special actions to recover. Errors retried in this function
// are done with backoff to not cause unecessary failures.
if(!data.fatal){return;}if(data.type===Hls.ErrorTypes.NETWORK_ERROR){switch(data.details){case Hls.ErrorDetails.MANIFEST_LOAD_ERROR:{let error="Error starting stream, see logs for details";if(data.response!==undefined&&data.response.code!==undefined){if(data.response.code>=500){error+=" (Server failure)";}else if(data.response.code>=400){error+=" (Stream never started)";}else {error+=" ("+data.response.code+")";}}this._setRetryableError(error);break;}case Hls.ErrorDetails.MANIFEST_LOAD_TIMEOUT:this._setRetryableError("Timeout while starting stream");break;default:this._setRetryableError("Stream network error");break;}hls.startLoad();}else if(data.type===Hls.ErrorTypes.MEDIA_ERROR){this._setRetryableError("Error with media stream contents");hls.recoverMediaError();}else {this._setFatalError("Error playing stream");}});}},{kind:"method",key:"_renderHLSNative",value:async function _renderHLSNative(videoEl,url){videoEl.src=url;videoEl.addEventListener("loadedmetadata",()=>{videoEl.play();});}},{kind:"method",key:"_cleanUp",value:function _cleanUp(){if(this._hlsPolyfillInstance){this._hlsPolyfillInstance.destroy();this._hlsPolyfillInstance=undefined;}if(this._exoPlayer){window.removeEventListener("resize",this._resizeExoPlayer);this.hass.auth.external.fireMessage({type:"exoplayer/stop"});this._exoPlayer=false;}if(this._videoEl){this._videoEl.removeAttribute("src");this._videoEl.load();}}},{kind:"method",key:"_resetError",value:function _resetError(){this._error=undefined;this._errorIsFatal=false;}},{kind:"method",key:"_setFatalError",value:function _setFatalError(errorMessage){this._error=errorMessage;this._errorIsFatal=true;}},{kind:"method",key:"_setRetryableError",value:function _setRetryableError(errorMessage){this._error=errorMessage;this._errorIsFatal=false;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host,
      video {
        display: block;
      }

      video {
        width: 100%;
        max-height: var(--video-max-height, calc(100vh - 97px));
      }

      .fatal {
        display: block;
        padding: 100px 16px;
      }

      .retry {
        display: block;
      }
    `;}}]};},s$2);

/**
 * A WebRTC stream is established by first sending an offer through a signal
 * path via an integration. An answer is returned, then the rest of the stream
 * is handled entirely client side.
 */_decorate([n$1("ha-web-rtc-player")],function(_initialize,_LitElement){class HaWebRtcPlayer extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaWebRtcPlayer,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"entityid",value:void 0},{kind:"field",decorators:[e$3({type:Boolean,attribute:"controls"})],key:"controls",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"muted"})],key:"muted",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"autoplay"})],key:"autoPlay",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"playsinline"})],key:"playsInline",value(){return false;}},{kind:"field",decorators:[t$1()],key:"_error",value:void 0},{kind:"field",decorators:[i$2("#remote-stream")],key:"_videoEl",value:void 0},{kind:"field",key:"_peerConnection",value:void 0},{kind:"field",key:"_remoteStream",value:void 0},{kind:"method",key:"render",value:// don't cache this, as we remove it on disconnects
function render(){if(this._error){return $$2`<ha-alert alert-type="error">${this._error}</ha-alert>`;}return $$2`
      <video
        id="remote-stream"
        ?autoplay=${this.autoPlay}
        .muted=${this.muted}
        ?playsinline=${this.playsInline}
        ?controls=${this.controls}
      ></video>
    `;}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HaWebRtcPlayer.prototype),"connectedCallback",this).call(this);if(this.hasUpdated){this._startWebRtc();}}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaWebRtcPlayer.prototype),"disconnectedCallback",this).call(this);this._cleanUp();}},{kind:"method",key:"updated",value:function updated(changedProperties){if(!changedProperties.has("entityid")){return;}if(!this._videoEl){return;}this._startWebRtc();}},{kind:"method",key:"_startWebRtc",value:async function _startWebRtc(){this._error=undefined;const peerConnection=new RTCPeerConnection();// Some cameras (such as nest) require a data channel to establish a stream
// however, not used by any integrations.
peerConnection.createDataChannel("dataSendChannel");peerConnection.addTransceiver("audio",{direction:"recvonly"});peerConnection.addTransceiver("video",{direction:"recvonly"});const offerOptions={offerToReceiveAudio:true,offerToReceiveVideo:true};const offer=await peerConnection.createOffer(offerOptions);await peerConnection.setLocalDescription(offer);let webRtcAnswer;try{webRtcAnswer=await handleWebRtcOffer(this.hass,this.entityid,offer.sdp);}catch(err){this._error="Failed to start WebRTC stream: "+err.message;peerConnection.close();return;}// Setup callbacks to render remote stream once media tracks are discovered.
const remoteStream=new MediaStream();peerConnection.addEventListener("track",event=>{remoteStream.addTrack(event.track);this._videoEl.srcObject=remoteStream;});this._remoteStream=remoteStream;// Initiate the stream with the remote device
const remoteDesc=new RTCSessionDescription({type:"answer",sdp:webRtcAnswer.answer});try{await peerConnection.setRemoteDescription(remoteDesc);}catch(err){this._error="Failed to connect WebRTC stream: "+err.message;peerConnection.close();return;}this._peerConnection=peerConnection;}},{kind:"method",key:"_cleanUp",value:function _cleanUp(){if(this._remoteStream){this._remoteStream.getTracks().forEach(track=>{track.stop();});this._remoteStream=undefined;}if(this._videoEl){this._videoEl.removeAttribute("src");this._videoEl.load();}if(this._peerConnection){this._peerConnection.close();this._peerConnection=undefined;}}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host,
      video {
        display: block;
      }

      video {
        width: 100%;
        max-height: var(--video-max-height, calc(100vh - 97px));
      }
    `;}}]};},s$2);

_decorate([n$1("ha-camera-stream")],function(_initialize,_LitElement){class HaCameraStream extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaCameraStream,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateObj",value:void 0},{kind:"field",decorators:[e$3({type:Boolean,attribute:"controls"})],key:"controls",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"muted"})],key:"muted",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean,attribute:"allow-exoplayer"})],key:"allowExoPlayer",value(){return false;}},{kind:"field",decorators:[t$1()],key:"_forceMJPEG",value:void 0},{kind:"field",decorators:[t$1()],key:"_url",value:void 0},{kind:"field",decorators:[t$1()],key:"_connected",value(){return false;}},{kind:"method",key:"willUpdate",value:// We keep track if we should force MJPEG if there was a failure
// to get the HLS stream url. This is reset if we change entities.
function willUpdate(changedProps){var _changedProps$get;if(changedProps.has("stateObj")&&!this._shouldRenderMJPEG&&this.stateObj&&((_changedProps$get=changedProps.get("stateObj"))===null||_changedProps$get===void 0?void 0:_changedProps$get.entity_id)!==this.stateObj.entity_id&&this.stateObj.attributes.frontend_stream_type===STREAM_TYPE_HLS){this._forceMJPEG=undefined;this._url=undefined;this._getStreamUrl();}}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HaCameraStream.prototype),"connectedCallback",this).call(this);this._connected=true;}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaCameraStream.prototype),"disconnectedCallback",this).call(this);this._connected=false;}},{kind:"method",key:"render",value:function render(){if(!this.stateObj){return $$2``;}if(__DEMO__||this._shouldRenderMJPEG||true){// TODO FAZER CONDIÇÂO COM CUSTOM COMPONENT LOADEDitit
return $$2` <img
        .src=${__DEMO__?this.stateObj.attributes.entity_picture:this._connected?computeMJPEGStreamUrl(this.stateObj):""}
        .alt=${`Preview of the ${computeStateName(this.stateObj)} camera.`}
      />`;}if(this.stateObj.attributes.frontend_stream_type===STREAM_TYPE_HLS){return this._url?$$2`<ha-hls-player
            autoplay
            playsinline
            .allowExoPlayer=${this.allowExoPlayer}
            .muted=${this.muted}
            .controls=${this.controls}
            .hass=${this.hass}
            .url=${this._url}
          ></ha-hls-player>`:$$2``;}if(this.stateObj.attributes.frontend_stream_type===STREAM_TYPE_WEB_RTC){return $$2`<ha-web-rtc-player
        autoplay
        playsinline
        .muted=${this.muted}
        .controls=${this.controls}
        .hass=${this.hass}
        .entityid=${this.stateObj.entity_id}
      ></ha-web-rtc-player>`;}return $$2``;}},{kind:"get",key:"_shouldRenderMJPEG",value:function _shouldRenderMJPEG(){if(this._forceMJPEG===this.stateObj.entity_id){// Fallback when unable to fetch stream url
return true;}if(!supportsFeature(this.stateObj,CAMERA_SUPPORT_STREAM)){// Steaming is not supported by the camera so fallback to MJPEG stream
return true;}if(this.stateObj.attributes.frontend_stream_type===STREAM_TYPE_WEB_RTC){// Browser support required for WebRTC
return typeof RTCPeerConnection==="undefined";}// Server side stream component required for HLS
return !isComponentLoaded(this.hass,"stream");// meter aqui nome de uma custom component
}},{kind:"method",key:"_getStreamUrl",value:async function _getStreamUrl(){try{const{url}=await fetchStreamUrl(this.hass,this.stateObj.entity_id);this._url=url;}catch(err){// Fails if we were unable to get a stream
// eslint-disable-next-line
console.error(err);this._forceMJPEG=this.stateObj.entity_id;}}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host,
      img {
        display: block;
      }

      img {
        width: 100%;
        border-radius: 1.5rem;
      }
    `;}}]};},s$2);

const UPDATE_INTERVAL=10000;const DEFAULT_FILTER="grayscale(100%)";const MAX_IMAGE_WIDTH=640;const ASPECT_RATIO_DEFAULT=9/16;var LoadState;(function(LoadState){LoadState[LoadState["Loading"]=1]="Loading";LoadState[LoadState["Loaded"]=2]="Loaded";LoadState[LoadState["Error"]=3]="Error";})(LoadState||(LoadState={}));_decorate([n$1("hui-image")],function(_initialize,_LitElement){class HuiImage extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiImage,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3()],key:"entity",value:void 0},{kind:"field",decorators:[e$3()],key:"image",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateImage",value:void 0},{kind:"field",decorators:[e$3()],key:"cameraImage",value:void 0},{kind:"field",decorators:[e$3()],key:"cameraView",value:void 0},{kind:"field",decorators:[e$3()],key:"aspectRatio",value:void 0},{kind:"field",decorators:[e$3()],key:"filter",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateFilter",value:void 0},{kind:"field",decorators:[e$3()],key:"darkModeImage",value:void 0},{kind:"field",decorators:[e$3()],key:"darkModeFilter",value:void 0},{kind:"field",decorators:[t$1()],key:"_imageVisible",value(){return false;}},{kind:"field",decorators:[t$1()],key:"_loadState",value:void 0},{kind:"field",decorators:[t$1()],key:"_cameraImageSrc",value:void 0},{kind:"field",decorators:[t$1()],key:"_loadedImageSrc",value:void 0},{kind:"field",key:"_intersectionObserver",value:void 0},{kind:"field",key:"_lastImageHeight",value:void 0},{kind:"field",key:"_cameraUpdater",value:void 0},{kind:"field",key:"_ratio",value(){return null;}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HuiImage.prototype),"connectedCallback",this).call(this);if(this._loadState===undefined){this._loadState=LoadState.Loading;}if(this.cameraImage&&this.cameraView!=="live"){this._startIntersectionObserverOrUpdates();}}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HuiImage.prototype),"disconnectedCallback",this).call(this);this._stopUpdateCameraInterval();this._stopIntersectionObserver();this._imageVisible=undefined;}},{kind:"method",key:"handleIntersectionCallback",value:function handleIntersectionCallback(entries){this._imageVisible=entries[0].isIntersecting;}},{kind:"method",key:"willUpdate",value:function willUpdate(changedProps){if(changedProps.has("hass")){const oldHass=changedProps.get("hass");if(this._shouldStartCameraUpdates(oldHass)){this._startIntersectionObserverOrUpdates();}else if(!this.hass.connected){this._stopUpdateCameraInterval();this._stopIntersectionObserver();this._loadState=LoadState.Loading;this._cameraImageSrc=undefined;this._loadedImageSrc=undefined;}}if(changedProps.has("_imageVisible")){if(this._imageVisible){if(this._shouldStartCameraUpdates()){this._startUpdateCameraInterval();}}else {this._stopUpdateCameraInterval();}}if(changedProps.has("aspectRatio")){this._ratio=this.aspectRatio?parseAspectRatio(this.aspectRatio):null;}if(this._loadState===LoadState.Loading&&!this.cameraImage){this._loadState=LoadState.Loaded;}}},{kind:"method",key:"render",value:function render(){if(!this.hass){return $$2``;}const useRatio=Boolean(this._ratio&&this._ratio.w>0&&this._ratio.h>0);const stateObj=this.entity?this.hass.states[this.entity]:undefined;const entityState=stateObj?stateObj.state:UNAVAILABLE;// Figure out image source to use
let imageSrc;let cameraObj;// Track if we are we using a fallback image, used for filter.
let imageFallback=!this.stateImage;if(this.cameraImage){if(this.cameraView==="live"){cameraObj=this.hass.states[this.cameraImage];}else {imageSrc=this._cameraImageSrc;}}else if(this.stateImage){const stateImage=this.stateImage[entityState];if(stateImage){imageSrc=stateImage;}else {imageSrc=this.image;imageFallback=true;}}else if(this.darkModeImage&&this.hass.themes.darkMode){imageSrc=this.darkModeImage;}else {imageSrc=this.image;}if(imageSrc){imageSrc=this.hass.hassUrl(imageSrc);}// Figure out filter to use
let filter=this.filter||"";if(this.hass.themes.darkMode&&this.darkModeFilter){filter+=this.darkModeFilter;}if(this.stateFilter&&this.stateFilter[entityState]){filter+=this.stateFilter[entityState];}if(!filter&&this.entity){const isOff=!stateObj||STATES_OFF.includes(entityState);filter=isOff&&imageFallback?DEFAULT_FILTER:"";}return $$2`
      <div
        style=${i$3({paddingBottom:useRatio?`${(100*this._ratio.h/this._ratio.w).toFixed(2)}%`:undefined,backgroundImage:useRatio&&this._loadedImageSrc?`url("${this._loadedImageSrc}")`:undefined,filter:this._loadState===LoadState.Loaded||this.cameraView==="live"?undefined// filter
:undefined})}
        class="container ${o$1({ratio:useRatio})}"
      >
        ${this.cameraImage&&this.cameraView==="live"?$$2`
              <ha-camera-stream
                muted
                .hass=${this.hass}
                .stateObj=${cameraObj}
              ></ha-camera-stream>
            `:imageSrc===undefined?$$2``:$$2`
              <img
                id="image"
                src=${imageSrc}
                @error=${this._onImageError}
                @load=${this._onImageLoad}
                style=${i$3({display:useRatio||this._loadState===LoadState.Loaded?"block":"none"})}
              />
            `}
        ${this._loadState===LoadState.Error?$$2`<div
              id="brokenImage"
              style=${i$3({height:!useRatio?`${this._lastImageHeight||"100"}px`:undefined})}
            ></div>`:this.cameraView!=="live"&&(imageSrc===undefined||this._loadState===LoadState.Loading)?$$2`<div
              class="progress-container"
              style=${i$3({height:!useRatio?`${this._lastImageHeight||"100"}px`:undefined})}
            >
              <ha-circular-progress
                class="render-spinner"
                active
                size="small"
              ></ha-circular-progress>
            </div>`:""}
      </div>
    `;}},{kind:"method",key:"_shouldStartCameraUpdates",value:function _shouldStartCameraUpdates(oldHass){return !!((!oldHass||oldHass.connected!==this.hass.connected)&&this.hass.connected&&this.cameraView!=="live");}},{kind:"method",key:"_startIntersectionObserverOrUpdates",value:function _startIntersectionObserverOrUpdates(){if("IntersectionObserver"in window){if(!this._intersectionObserver){this._intersectionObserver=new IntersectionObserver(this.handleIntersectionCallback.bind(this));}this._intersectionObserver.observe(this);}else {// No support for IntersectionObserver
// assume all images are visible
this._imageVisible=true;this._startUpdateCameraInterval();}}},{kind:"method",key:"_stopIntersectionObserver",value:function _stopIntersectionObserver(){if(this._intersectionObserver){this._intersectionObserver.disconnect();}}},{kind:"method",key:"_startUpdateCameraInterval",value:function _startUpdateCameraInterval(){this._stopUpdateCameraInterval();this._updateCameraImageSrc();if(this.cameraImage&&this.isConnected){this._cameraUpdater=window.setInterval(()=>this._updateCameraImageSrcAtInterval(),UPDATE_INTERVAL);}}},{kind:"method",key:"_stopUpdateCameraInterval",value:function _stopUpdateCameraInterval(){if(this._cameraUpdater){clearInterval(this._cameraUpdater);this._cameraUpdater=undefined;}}},{kind:"method",key:"_onImageError",value:function _onImageError(){this._loadState=LoadState.Error;}},{kind:"method",key:"_onImageLoad",value:async function _onImageLoad(ev){this._loadState=LoadState.Loaded;const imgEl=ev.target;if(this._ratio&&this._ratio.w>0&&this._ratio.h>0){this._loadedImageSrc=imgEl.src;}await this.updateComplete;this._lastImageHeight=imgEl.offsetHeight;}},{kind:"method",key:"_updateCameraImageSrcAtInterval",value:async function _updateCameraImageSrcAtInterval(){// If we hit the interval and it was still loading
// it means we timed out so we should show the error.
if(this._loadState===LoadState.Loading){this._onImageError();}return this._updateCameraImageSrc();}},{kind:"method",key:"_updateCameraImageSrc",value:async function _updateCameraImageSrc(){if(!this.hass||!this.cameraImage){return;}const cameraState=this.hass.states[this.cameraImage];if(!cameraState){this._onImageError();return;}const element_width=this.clientWidth||MAX_IMAGE_WIDTH;let width=Math.ceil(element_width*devicePixelRatio);let height;// If the image has not rendered yet we have no height
if(!this._lastImageHeight){if(this._ratio&&this._ratio.w>0&&this._ratio.h>0){height=Math.ceil(width*(this._ratio.h/this._ratio.w));}else {// If we don't have a ratio and we don't have a height
// we ask for 200% of what we need because the aspect
// ratio might result in a smaller image
width*=2;height=Math.ceil(width*ASPECT_RATIO_DEFAULT);}}else {height=Math.ceil(this._lastImageHeight*devicePixelRatio);}this._cameraImageSrc=await fetchThumbnailUrlWithCache(this.hass,this.cameraImage,width,height);if(this._cameraImageSrc===undefined){this._onImageError();}}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        display: block;
      }

      .container {
        transition: filter 0.2s linear;
      }

      img {
        display: block;
        height: auto;
        width: 100%;
      }

      .progress-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .ratio {
        position: relative;
        width: 100%;
        height: 0;
        background-position: center;
        background-size: cover;
      }

      .ratio img,
      .ratio div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .ratio img {
        visibility: hidden;
      }

      #brokenImage {
        background: grey url("/static/images/image-broken.svg") center/36px
          no-repeat;
      }
    `;}}]};},s$2);

_decorate([n$1("hui-image-element")],function(_initialize,_LitElement){class HuiImageElement extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiImageElement,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config){throw Error("Invalid configuration");}this._config={hold_action:{action:"more-info"},...config};// eslint-disable-next-line wc/no-self-class
this.classList.toggle("clickable",this._config.tap_action&&this._config.tap_action.action!=="none");}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}return $$2`
      <hui-image
        .hass=${this.hass}
        .entity=${this._config.entity}
        .image=${this._config.image}
        .stateImage=${this._config.state_image}
        .cameraImage=${this._config.entity}
        .filter=${this._config.filter}
        .stateFilter=${this._config.state_filter}
        .title=${computeTooltip(this.hass,this._config)}
        .aspectRatio=${this._config.aspect_ratio}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
        tabindex=${l$2(hasAction(this._config.tap_action)?"0":undefined)}
      ></hui-image>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host(.clickable) {
        cursor: pointer;
        overflow: hidden;
        -webkit-touch-callout: none !important;
      }
      hui-image {
        -webkit-user-select: none !important;
      }
      hui-image:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}}]};},s$2);

//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/* @polymerMixin */const EventsMixin=dedupingMixin(superClass=>class extends superClass{/**
   * Dispatches a custom event with an optional detail value.
   *
   * @param {string} type Name of event type.
   * @param {*=} detail Detail value containing event-specific
   *   payload.
   * @param {{ bubbles: (boolean|undefined),
               cancelable: (boolean|undefined),
                composed: (boolean|undefined) }=}
    *  options Object specifying options.  These may include:
    *  `bubbles` (boolean, defaults to `true`),
    *  `cancelable` (boolean, defaults to false), and
    *  `node` on which to fire the event (HTMLElement, defaults to `this`).
    * @return {Event} The new event that was fired.
    */fire(type,detail,options){options=options||{};return fireEvent(options.node||this,type,detail,options);}});

_decorate([n$1("ha-progress-button")],function(_initialize,_LitElement){class HaProgressButton extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaProgressButton,d:[{kind:"field",decorators:[e$3({type:Boolean})],key:"disabled",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean})],key:"progress",value(){return false;}},{kind:"field",decorators:[e$3({type:Boolean})],key:"raised",value(){return false;}},{kind:"field",decorators:[i$2("mwc-button",true)],key:"_button",value:void 0},{kind:"method",key:"render",value:function render(){return $$2`
      <mwc-button
        ?raised=${this.raised}
        .disabled=${this.disabled||this.progress}
        @click=${this._buttonTapped}
      >
        <slot></slot>
      </mwc-button>
      ${this.progress?$$2`<div class="progress">
            <ha-circular-progress size="small" active></ha-circular-progress>
          </div>`:""}
    `;}},{kind:"method",key:"actionSuccess",value:function actionSuccess(){this._tempClass("success");}},{kind:"method",key:"actionError",value:function actionError(){this._tempClass("error");}},{kind:"method",key:"_tempClass",value:function _tempClass(className){this._button.classList.add(className);setTimeout(()=>{this._button.classList.remove(className);},1000);}},{kind:"method",key:"_buttonTapped",value:function _buttonTapped(ev){if(this.progress){ev.stopPropagation();}}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        outline: none;
        display: inline-block;
        position: relative;
      }

      mwc-button {
        transition: all 1s;
      }

      mwc-button.success {
        --mdc-theme-primary: white;
        background-color: var(--success-color);
        transition: none;
        border-radius: 4px;
      }

      mwc-button[raised].success {
        --mdc-theme-primary: var(--success-color);
        --mdc-theme-on-primary: white;
      }

      mwc-button.error {
        --mdc-theme-primary: white;
        background-color: var(--error-color);
        transition: none;
        border-radius: 4px;
      }

      mwc-button[raised].error {
        --mdc-theme-primary: var(--error-color);
        --mdc-theme-on-primary: white;
      }

      .progress {
        bottom: 0;
        margin-top: 4px;
        position: absolute;
        text-align: center;
        top: 0;
        width: 100%;
      }
    `;}}]};},s$2);

/*
 * @appliesMixin EventsMixin
 */class HaCallServiceButton extends EventsMixin(PolymerElement){static get template(){return html`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        tabindex="0"
        ><slot></slot
      ></ha-progress-button>
    `;}static get properties(){return {hass:{type:Object},progress:{type:Boolean,value:false},domain:{type:String},service:{type:String},serviceData:{type:Object,value:{}},confirmation:{type:String}};}callService(){this.progress=true;// eslint-disable-next-line @typescript-eslint/no-this-alias
const el=this;const eventData={domain:this.domain,service:this.service,serviceData:this.serviceData};this.hass.callService(this.domain,this.service,this.serviceData).then(()=>{el.progress=false;el.$.progress.actionSuccess();eventData.success=true;},()=>{el.progress=false;el.$.progress.actionError();eventData.success=false;}).then(()=>{el.fire("hass-service-called",eventData);});}buttonTapped(){if(this.confirmation){showConfirmationDialog(this,{text:this.confirmation,confirm:()=>this.callService()});}else {this.callService();}}}customElements.define("ha-call-service-button",HaCallServiceButton);

_decorate([n$1("hui-service-button-element")],function(_initialize,_LitElement){class HuiServiceButtonElement extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiServiceButtonElement,d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"field",key:"_domain",value:void 0},{kind:"field",key:"_service",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config||!config.service){throw Error("Service required");}[this._domain,this._service]=config.service.split(".",2);if(!this._domain){throw Error("Service does not have a service domain");}if(!this._service){throw Error("Service does not have a service name");}this._config=config;}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}return $$2`
      <ha-call-service-button
        .hass=${this.hass}
        .domain=${this._domain}
        .service=${this._service}
        .serviceData=${this._config.service_data}
        >${this._config.title}</ha-call-service-button
      >
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      ha-call-service-button {
        color: var(--primary-color);
        white-space: nowrap;
      }
    `;}}]};},s$2);

_decorate([n$1("hui-state-badge-element")],function(_initialize,_LitElement){class HuiStateBadgeElement extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiStateBadgeElement,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entity){throw Error("Entity required");}this._config={hold_action:{action:"more-info"},...config};}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning-element
          .label=${createEntityNotFoundWarning(this.hass,this._config.entity)}
        ></hui-warning-element>
      `;}return $$2`
      <ha-state-label-badge
        .hass=${this.hass}
        .state=${stateObj}
        .title=${this._config.title===undefined?computeStateName(stateObj):this._config.title===null?"":this._config.title}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
        tabindex=${l$2(hasAction(this._config.tap_action)?"0":undefined)}
      ></ha-state-label-badge>
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}}]};},s$2);

_decorate([n$1("hui-state-icon-element")],function(_initialize,_LitElement){class HuiStateIconElement extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiStateIconElement,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entity){throw Error("Entity required");}this._config={state_color:true,hold_action:{action:"more-info"},...config};}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning-element
          .label=${createEntityNotFoundWarning(this.hass,this._config.entity)}
        ></hui-warning-element>
      `;}return $$2`
      <state-badge
        .stateObj=${stateObj}
        .title=${computeTooltip(this.hass,this._config)}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
        tabindex=${l$2(hasAction(this._config.tap_action)?"0":undefined)}
        .overrideIcon=${this._config.icon}
        .stateColor=${this._config.state_color}
      ></state-badge>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        cursor: pointer;
      }
      state-badge:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}}]};},s$2);

_decorate([n$1("hui-state-label-element")],function(_initialize,_LitElement){class HuiStateLabelElement extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HuiStateLabelElement,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[t$1()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function setConfig(config){if(!config.entity){throw Error("Entity required");}this._config={hold_action:{action:"more-info"},...config};}},{kind:"method",key:"shouldUpdate",value:function shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps);}},{kind:"method",key:"render",value:function render(){if(!this._config||!this.hass){return $$2``;}const stateObj=this.hass.states[this._config.entity];if(!stateObj){return $$2`
        <hui-warning-element
          .label=${createEntityNotFoundWarning(this.hass,this._config.entity)}
        ></hui-warning-element>
      `;}if(this._config.attribute&&!(this._config.attribute in stateObj.attributes)){return $$2`
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.attribute_not_found","attribute",this._config.attribute,"entity",this._config.entity)}
        ></hui-warning-element>
      `;}return $$2`
      <div
        .title=${computeTooltip(this.hass,this._config)}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({hasHold:hasAction(this._config.hold_action),hasDoubleClick:hasAction(this._config.double_tap_action)})}
        tabindex=${l$2(hasAction(this._config.tap_action)?"0":undefined)}
      >
        ${this._config.prefix}${!this._config.attribute?computeStateDisplay(this.hass.localize,stateObj,this.hass.locale):stateObj.attributes[this._config.attribute]}${this._config.suffix}
      </div>
    `;}},{kind:"method",key:"_handleAction",value:function _handleAction(ev){handleAction(this,this.hass,this._config,ev.detail.action);}},{kind:"get",static:true,key:"styles",value:function styles(){return r$2`
      :host {
        cursor: pointer;
      }
      div {
        padding: 8px;
        white-space: nowrap;
      }
      div:focus {
        outline: none;
        background: var(--divider-color);
        border-radius: 100%;
      }
    `;}}]};},s$2);

const ALWAYS_LOADED_TYPES=new Set(["conditional","icon","image","service-button","state-badge","state-icon","state-label"]);const createHuiElement=config=>createLovelaceElement("element",config,ALWAYS_LOADED_TYPES);

let MoreInfoContent=_decorate(null,function(_initialize,_ReactiveElement){class MoreInfoContent extends _ReactiveElement{constructor(...args){super(...args);_initialize(this);}}return {F:MoreInfoContent,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({attribute:false})],key:"stateObj",value:void 0},{kind:"field",key:"_detachedChild",value:void 0},{kind:"method",key:"createRenderRoot",value:function createRenderRoot(){return this;}// This is not a lit element, but an updating element, so we implement update
},{kind:"method",key:"update",value:function update(changedProps){_get(_getPrototypeOf(MoreInfoContent.prototype),"update",this).call(this,changedProps);const stateObj=this.stateObj;const hass=this.hass;if(!stateObj||!hass){if(this.lastChild){this._detachedChild=this.lastChild;// Detach child to prevent it from doing work.
this.removeChild(this.lastChild);}return;}if(this._detachedChild){this.appendChild(this._detachedChild);this._detachedChild=undefined;}let moreInfoType;if(stateObj.attributes&&"custom_ui_more_info"in stateObj.attributes){moreInfoType=stateObj.attributes.custom_ui_more_info;}else {const type=stateMoreInfoType(stateObj);importMoreInfoControl(type);moreInfoType=type==="hidden"?undefined:`more-info-${type}`;}if(!moreInfoType){return;}dynamicContentUpdater(this,moreInfoType.toUpperCase(),{hass,stateObj});}}]};},a$3);customElements.define("more-info-content",MoreInfoContent);

const DOMAINS_NO_INFO=["camera","configurator"];/**
 * Entity domains that should be editable *if* they have an id present;
 * {@see shouldShowEditIcon}.
 * */const EDITABLE_DOMAINS_WITH_ID=["scene","automation"];/**
 * Entity Domains that should always be editable; {@see shouldShowEditIcon}.
 * */const EDITABLE_DOMAINS=[""];// ["script"];
let MoreInfoDialog=_decorate([n$1("ha-more-info-dialog")],function(_initialize,_LitElement){class MoreInfoDialog extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:MoreInfoDialog,d:[{kind:"field",decorators:[e$3({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$3({type:Boolean,reflect:true})],key:"large",value(){return false;}},{kind:"field",decorators:[t$1()],key:"_entityId",value:void 0},{kind:"field",decorators:[t$1()],key:"_currTabIndex",value(){return 0;}},{kind:"method",key:"showDialog",value:function showDialog(params){this._entityId=params.entityId;if(!this._entityId){this.closeDialog();return;}this.large=false;}},{kind:"method",key:"closeDialog",value:function closeDialog(){this._entityId=undefined;this._currTabIndex=0;fireEvent(this,"dialog-closed",{dialog:this.localName});}},{kind:"method",key:"shouldShowEditIcon",value:function shouldShowEditIcon(domain,stateObj){if(__DEMO__){return false;}if(EDITABLE_DOMAINS_WITH_ID.includes(domain)&&stateObj.attributes.id){return true;}if(EDITABLE_DOMAINS.includes(domain)){return true;}if(domain==="person"&&stateObj.attributes.editable!=="false"){return true;}return false;}},{kind:"method",key:"render",value:function render(){if(!this._entityId){return $$2``;}const entityId=this._entityId;const stateObj=this.hass.states[entityId];if(!stateObj){return $$2``;}const domain=computeDomain(entityId);const name=computeStateName(stateObj)||" ";return $$2`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        .heading=${name}
        hideActions
        data-domain=${domain}
      >
        <div slot="heading" class="heading">
          <ha-header-bar>
            <ha-icon-button
              slot="navigationIcon"
              id="cancel"
              dialogAction="cancel"
              .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
              .path=${mdiClose}
            ></ha-icon-button>
            <div slot="title" class="main-title" .title=${name}>${name}</div>
            <!-- ${this.hass.user.is_admin&&this.shouldShowEditIcon(domain,stateObj)?$$2`
                  <ha-icon-button
                    slot="actionItems"
                    .label=${this.hass.localize("ui.dialogs.more_info_control.settings")}
                    .path=${mdiCog}
                    @click=${this._gotoSettings}
                  ></ha-icon-button>
                `:""}
            ${this.shouldShowEditIcon(domain,stateObj)?$$2`
                  <ha-icon-button
                    slot="actionItems"
                    .label=${this.hass.localize("ui.dialogs.more_info_control.edit")}
                    .path=${mdiPencil}
                    @click=${this._gotoEdit}
                  ></ha-icon-button>
                `:""} -->
          </ha-header-bar>
          ${DOMAINS_WITH_MORE_INFO.includes(domain)&&(this._computeShowHistoryComponent(entityId)||this._computeShowLogBookComponent(entityId))?$$2`
                <mwc-tab-bar
                  .activeIndex=${this._currTabIndex}
                  @MDCTabBar:activated=${this._handleTabChanged}
                >
                  <mwc-tab
                    .label=${this.hass.localize("ui.dialogs.more_info_control.details")}
                    dialogInitialFocus
                  ></mwc-tab>
                  <mwc-tab
                    .label=${this.hass.localize("ui.dialogs.more_info_control.history")}
                  ></mwc-tab>
                </mwc-tab-bar>
              `:""}
        </div>
        <div class="content" tabindex="-1" dialogInitialFocus>
          ${d$1(this._currTabIndex===0?$$2`
                  ${DOMAINS_NO_INFO.includes(domain)?"":$$2`
                        <state-card-content
                          in-dialog
                          .stateObj=${stateObj}
                          .hass=${this.hass}
                        ></state-card-content>
                      `}
                  ${DOMAINS_WITH_MORE_INFO.includes(domain)||!this._computeShowHistoryComponent(entityId)?"":$$2`<ha-more-info-history
                        .hass=${this.hass}
                        .entityId=${this._entityId}
                      ></ha-more-info-history>`}
                  ${DOMAINS_WITH_MORE_INFO.includes(domain)||!this._computeShowLogBookComponent(entityId)?"":$$2`<ha-more-info-logbook
                        .hass=${this.hass}
                        .entityId=${this._entityId}
                      ></ha-more-info-logbook>`}
                  <more-info-content
                    .stateObj=${stateObj}
                    .hass=${this.hass}
                  ></more-info-content>
                  ${stateObj.attributes.restored?$$2`
                        <p>
                          ${this.hass.localize("ui.dialogs.more_info_control.restored.not_provided")}
                        </p>
                        <p>
                          ${this.hass.localize("ui.dialogs.more_info_control.restored.remove_intro")}
                        </p>
                        <mwc-button
                          class="warning"
                          @click=${this._removeEntity}
                        >
                          ${this.hass.localize("ui.dialogs.more_info_control.restored.remove_action")}
                        </mwc-button>
                      `:""}
                `:$$2`
                  <ha-more-info-history
                    .hass=${this.hass}
                    .entityId=${this._entityId}
                  ></ha-more-info-history>
                  <ha-more-info-logbook
                    .hass=${this.hass}
                    .entityId=${this._entityId}
                  ></ha-more-info-logbook>
                `)}
        </div>
      </ha-dialog>
    `;}},{kind:"method",key:"_enlarge",value:function _enlarge(){this.large=!this.large;}},{kind:"method",key:"_computeShowHistoryComponent",value:function _computeShowHistoryComponent(entityId){return isComponentLoaded(this.hass,"history")&&!DOMAINS_MORE_INFO_NO_HISTORY.includes(computeDomain(entityId));}},{kind:"method",key:"_computeShowLogBookComponent",value:function _computeShowLogBookComponent(entityId){if(!isComponentLoaded(this.hass,"logbook")){return false;}const stateObj=this.hass.states[entityId];if(!stateObj||stateObj.attributes.unit_of_measurement){return false;}const domain=computeDomain(entityId);if(CONTINUOUS_DOMAINS.includes(domain)||DOMAINS_MORE_INFO_NO_HISTORY.includes(domain)){return false;}return true;}},{kind:"method",key:"_removeEntity",value:function _removeEntity(){const entityId=this._entityId;showConfirmationDialog(this,{title:this.hass.localize("ui.dialogs.more_info_control.restored.confirm_remove_title"),text:this.hass.localize("ui.dialogs.more_info_control.restored.confirm_remove_text"),confirmText:this.hass.localize("ui.common.remove"),dismissText:this.hass.localize("ui.common.cancel"),confirm:()=>{removeEntityRegistryEntry(this.hass,entityId);}});}},{kind:"method",key:"_gotoSettings",value:function _gotoSettings(){replaceDialog();showEntityEditorDialog(this,{entity_id:this._entityId});this.closeDialog();}},{kind:"method",key:"_gotoEdit",value:function _gotoEdit(){const stateObj=this.hass.states[this._entityId];const domain=computeDomain(this._entityId);let idToPassThroughUrl=stateObj.entity_id;if(EDITABLE_DOMAINS_WITH_ID.includes(domain)||domain==="person"){idToPassThroughUrl=stateObj.attributes.id;}navigate(`/config/${domain}/edit/${idToPassThroughUrl}`);this.closeDialog();}},{kind:"method",key:"_handleTabChanged",value:function _handleTabChanged(ev){const newTab=ev.detail.index;if(newTab===this._currTabIndex){return;}this._currTabIndex=ev.detail.index;}},{kind:"get",static:true,key:"styles",value:function styles(){return [haStyleDialog,r$2`
        ha-dialog {
          --dialog-surface-position: static;
          --dialog-content-position: static;
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          /* flex-shrink: 0; */
          display: block;
        }
        .content {
          max-width: 100%;
          outline: none;
        }

        /* #cancel {
          position: absolute;
          right: 0;
          z-index: 100;
        } */

        /* @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-header-bar {
            --mdc-theme-primary: var(--app-header-background-color);
            --mdc-theme-on-primary: var(--app-header-text-color, white);
            border-bottom: none;
          }
        } */

        .heading {
          border-bottom: 1px solid
            var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          ha-dialog {
            --mdc-dialog-max-width: 90vw;
          }

          .content {
            width: 352px;
          }

          ha-header-bar {
            width: 400px;
          }

          .main-title {
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: default;
          }

          ha-dialog[data-domain="camera"] .content,
          ha-dialog[data-domain="camera"] ha-header-bar {
            width: auto;
          }

          :host([large]) .content {
            width: calc(90vw - 48px);
          }

          :host([large]) ha-dialog[data-domain="camera"] .content,
          :host([large]) ha-header-bar {
            width: 90vw;
          }
        }

        ha-dialog[data-domain="camera"] {
          --dialog-content-padding: 0;
        }

        state-card-content,
        ha-more-info-history,
        ha-more-info-logbook:not(:last-child) {
          display: block;
          margin-bottom: 16px;
        }
        @media all and (max-width: 650px) {
          state-card-content {
            width: 250px;
          }
        }
      `];}}]};},s$2);

var haMoreInfoDialog = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MoreInfoDialog: MoreInfoDialog
});

export { setInputSelectOption as $, getWind as A, formatTimeWeekday as B, CAMERA_SUPPORT_STREAM as C, isValidEntityId as D, EventsMixin as E, getRowElementClass as F, getHeaderFooterElementClass as G, deepEqual as H, IronResizableBehavior as I, getCardElementClass as J, customCards as K, LightColorModes as L, tryCreateCardElement as M, getCustomCardEntry as N, CUSTOM_TYPE_PREFIX as O, memoize as P, actionHandler as Q, hasAction as R, STREAM_TYPE_HLS as S, handleAction as T, processConfigEntities as U, computeTooltip as V, findEntities as W, hasConfigOrEntityChanged as X, fetchRecent as Y, createEntityNotFoundWarning as Z, isTiltOnly as _, CLIMATE_SUPPORT_TARGET_TEMPERATURE as a, setSelectOption as a0, computeDisplayTimer as a1, timerTimeRemaining as a2, createRowElement as a3, validateConditionalConfig as a4, checkConditionsMet as a5, getWeatherStateIcon as a6, getSecondaryWeatherAttribute as a7, weatherSVGStyles as a8, formatTimeWithSeconds as a9, computeCardSize as aa, createCardElement as ab, calculateStatisticsSumGrowth as ac, startOfYesterday as ad, fetchStatistics as ae, toggleAttribute as af, calculateStatisticSumGrowth as ag, getColorByIndex as ah, getStatisticIds as ai, getGraphColorByIndex as aj, statisticsHaveType as ak, throttle as al, hasConfigOrEntitiesChanged as am, getRecentWithCache as an, HuiStackCard as ao, parseAspectRatio as ap, getLogbookData as aq, createStyledHuiElement as ar, STATE_NOT_RUNNING as as, haMoreInfoDialog as at, CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE as b, conditionalClamp as c, d$1 as d, CLIMATE_SUPPORT_TARGET_HUMIDITY as e, fetchCameraPrefs as f, CLIMATE_SUPPORT_FAN_MODE as g, CLIMATE_SUPPORT_PRESET_MODE as h, CLIMATE_SUPPORT_SWING_MODE as i, CLIMATE_SUPPORT_AUX_HEAT as j, compareClimateHvacModes as k, importMoreInfoControl as l, domainMoreInfoType as m, lightSupportsDimming as n, computeStateDisplay as o, lightSupportsColorMode as p, lightSupportsColor as q, SUPPORT_EFFECT as r, lightIsInColorMode as s, getLightCurrentModeRgbColor as t, updateCameraPrefs as u, navigate as v, formatTime as w, LocalizeMixin as x, isForecastHourly as y, getWeatherUnit as z };
