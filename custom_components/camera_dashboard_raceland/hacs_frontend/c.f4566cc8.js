import{_ as t,d as e,g as i,t as s,k as o,l as n,S as a,x as r,y as h,o as l,q as c}from"./main-b570e60a.js";import{z as d,F as u,c as f}from"./c.5a5021e9.js";import{W as g,al as _,U as k,aq as m}from"./c.4d0662f5.js";import"./c.309a65b6.js";import"./c.2aff7a3c.js";import"./c.84af24de.js";import"./c.17776df6.js";import"./c.bc207e00.js";let v=t([c("hui-logbook-card")],(function(t,e){class c extends e{constructor(...e){super(...e),t(this)}}return{F:c,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.8b185296.js"),document.createElement("hui-logbook-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(t,e,i){return{entities:g(t,3,e,i,["light","switch"])}}},{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",decorators:[s()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[s()],key:"_configEntities",value:void 0},{kind:"field",decorators:[s()],key:"_userIdToName",value:()=>({})},{kind:"field",key:"_lastLogbookDate",value:void 0},{kind:"field",key:"_fetchUserPromise",value:void 0},{kind:"field",key:"_error",value:void 0},{kind:"field",key:"_throttleGetLogbookEntries",value(){return _((()=>{this._getLogBookData()}),1e4)}},{kind:"method",key:"getCardSize",value:function(){var t;return 9+(null!==(t=this._config)&&void 0!==t&&t.title?1:0)}},{kind:"method",key:"setConfig",value:function(t){if(!t.entities.length)throw new Error("Entities must be specified");this._configEntities=k(t.entities),this._config={hours_to_show:24,...t}}},{kind:"method",key:"shouldUpdate",value:function(t){if(t.has("_config")||t.has("_persons")||t.has("_logbookEntries"))return!0;const e=t.get("hass");if(!this._configEntities||!e||e.themes!==this.hass.themes||e.locale!==this.hass.locale)return!0;for(const t of this._configEntities)if(e.states[t.entity]!==this.hass.states[t.entity])return!0;return!1}},{kind:"method",key:"firstUpdated",value:function(){this._fetchUserPromise=this._fetchUserNames()}},{kind:"method",key:"updated",value:function(t){if(o(n(c.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;const e=t.has("_config"),i=t.has("hass"),s=t.get("hass"),r=t.get("_config");if((i&&(null==s?void 0:s.themes)!==this.hass.themes||e&&(null==r?void 0:r.theme)!==this._config.theme)&&a(this,this.hass.themes,this._config.theme),!e||(null==r?void 0:r.entities)===this._config.entities&&(null==r?void 0:r.hours_to_show)===this._config.hours_to_show)s&&this._configEntities.some((t=>s.states[t.entity]!==this.hass.states[t.entity]))&&setTimeout(this._throttleGetLogbookEntries,1e3);else{if(this._logbookEntries=void 0,this._lastLogbookDate=void 0,!this._configEntities)return;this._throttleGetLogbookEntries()}}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?d(this.hass,"logbook")?r`
      <ha-card
        .header=${this._config.title}
        class=${h({"no-header":!this._config.title})}
      >
        <div class="content">
          ${this._error?r`
                <div class="no-entries">
                  ${`${this.hass.localize("ui.components.logbook.retrieval_error")}: ${this._error}`}
                </div>
              `:this._logbookEntries?this._logbookEntries.length?r`
                <ha-logbook
                  narrow
                  relative-time
                  virtualize
                  .hass=${this.hass}
                  .entries=${this._logbookEntries}
                  .userIdToName=${this._userIdToName}
                ></ha-logbook>
              `:r`
                <div class="no-entries">
                  ${this.hass.localize("ui.components.logbook.entries_not_found")}
                </div>
              `:r`
                <ha-circular-progress
                  active
                  alt=${this.hass.localize("ui.common.loading")}
                ></ha-circular-progress>
              `}
        </div>
      </ha-card>
    `:r`
        <hui-warning>
          ${this.hass.localize("ui.components.logbook.component_not_loaded")}</hui-warning
        >
      `:r``}},{kind:"method",key:"_getLogBookData",value:async function(){if(!this.hass||!this._config||!d(this.hass,"logbook"))return;const t=new Date((new Date).getTime()-60*this._config.hours_to_show*60*1e3),e=this._lastLogbookDate||t,i=new Date;let s;try{[s]=await Promise.all([m(this.hass,e.toISOString(),i.toISOString(),this._configEntities.map((t=>t.entity)).toString(),!0),this._fetchUserPromise])}catch(t){return void(this._error=t.message)}const o=this._logbookEntries?[...s,...this._logbookEntries]:s;this._logbookEntries=o.filter((e=>new Date(e.when)>t)),this._lastLogbookDate=i}},{kind:"method",key:"_fetchUserNames",value:async function(){var t;const e={},i=(null===(t=this.hass.user)||void 0===t?void 0:t.is_admin)&&u(this.hass);if(Object.values(this.hass.states).forEach((t=>{t.attributes.user_id&&"person"===f(t)&&(this._userIdToName[t.attributes.user_id]=t.attributes.friendly_name)})),i){const t=await i;for(const i of t)i.id in e||(e[i.id]=i.name)}this._userIdToName=e}},{kind:"get",static:!0,key:"styles",value:function(){return[l`
        ha-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .content {
          padding: 0 16px 16px;
        }

        .no-header .content {
          padding-top: 16px;
        }

        .no-entries {
          text-align: center;
          padding: 16px;
          color: var(--secondary-text-color);
        }

        ha-logbook {
          height: 385px;
          display: block;
        }

        ha-circular-progress {
          display: flex;
          justify-content: center;
        }
      `]}}]}}),e);export{v as HuiLogbookCard};
