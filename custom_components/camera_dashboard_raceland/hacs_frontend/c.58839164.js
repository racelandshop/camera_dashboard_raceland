import{_ as t,d as i,g as e,t as s,k as a,l as n,x as o,y as h,o as r,q as c}from"./main-b570e60a.js";import{U as d,al as l,am as u,an as f}from"./c.4d0662f5.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.5a5021e9.js";import"./c.2aff7a3c.js";import"./c.309a65b6.js";import"./c.bc207e00.js";let y=t([c("hui-history-graph-card")],(function(t,i){class c extends i{constructor(...i){super(...i),t(this)}}return{F:c,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.6e214c01.js"),document.createElement("hui-history-graph-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"history-graph",entities:["sun.sun"]}}},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_stateHistory",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",key:"_configEntities",value:void 0},{kind:"field",key:"_names",value:()=>({})},{kind:"field",key:"_cacheConfig",value:void 0},{kind:"field",key:"_fetching",value:()=>!1},{kind:"field",key:"_throttleGetStateHistory",value:void 0},{kind:"method",key:"getCardSize",value:function(){var t,i;return null!==(t=this._config)&&void 0!==t&&t.title?2:0+2*((null===(i=this._configEntities)||void 0===i?void 0:i.length)||1)}},{kind:"method",key:"setConfig",value:function(t){if(!t.entities||!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(!t.entities.length)throw new Error("You must include at least one entity");this._configEntities=t.entities?d(t.entities):[];const i=[];this._configEntities.forEach((t=>{i.push(t.entity),t.name&&(this._names[t.entity]=t.name)})),this._throttleGetStateHistory=l((()=>{this._getStateHistory()}),t.refresh_interval||1e4),this._cacheConfig={cacheKey:i.join(),hoursToShow:t.hours_to_show||24},this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return!!t.has("_stateHistory")||u(this,t)}},{kind:"method",key:"updated",value:function(t){if(a(n(c.prototype),"updated",this).call(this,t),!(this._config&&this.hass&&this._throttleGetStateHistory&&this._cacheConfig))return;if(!t.has("_config")&&!t.has("hass"))return;const i=t.get("_config");!t.has("_config")||(null==i?void 0:i.entities)===this._config.entities&&(null==i?void 0:i.hours_to_show)===this._config.hours_to_show?t.has("hass")&&setTimeout(this._throttleGetStateHistory,1e3):this._throttleGetStateHistory()}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?o`
      <ha-card .header=${this._config.title}>
        <div
          class="content ${h({"has-header":!!this._config.title})}"
        >
          <state-history-charts
            .hass=${this.hass}
            .isLoadingData=${!this._stateHistory}
            .historyData=${this._stateHistory}
            .names=${this._names}
            up-to-now
            no-single
          ></state-history-charts>
        </div>
      </ha-card>
    `:o``}},{kind:"method",key:"_getStateHistory",value:async function(){if(!this._fetching){this._fetching=!0;try{this._stateHistory={...await f(this.hass,this._cacheConfig.cacheKey,this._cacheConfig,this.hass.localize,this.hass.language)}}finally{this._fetching=!1}}}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      ha-card {
        height: 100%;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
    `}}]}}),i);export{y as HuiHistoryGraphCard};
