import{_ as a,d as t,t as e,g as i,x as o,M as n,o as s,q as r}from"./main-b570e60a.js";import{j as d}from"./c.5a5021e9.js";import{Q as h,R as c,V as l,T as p}from"./c.4d0662f5.js";a([r("hui-buttons-base")],(function(a,t){return{F:class extends t{constructor(...t){super(...t),a(this)}},d:[{kind:"field",decorators:[e()],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"configEntities",value:void 0},{kind:"method",key:"render",value:function(){return o`
      <div class="ha-scrollbar">
        ${(this.configEntities||[]).map((a=>{const t=this.hass.states[a.entity],e=a.show_name&&t||a.name&&!1!==a.show_name?a.name||d(t):"";return o`
            <ha-chip
              @action=${this._handleAction}
              .actionHandler=${h({hasHold:c(a.hold_action),hasDoubleClick:c(a.double_tap_action)})}
              .config=${a}
              tabindex="0"
              .hasIcon=${!1!==a.show_icon}
              .noText=${!e}
            >
              ${!1!==a.show_icon?o`
                    <state-badge
                      title=${l(this.hass,a)}
                      .hass=${this.hass}
                      .stateObj=${t}
                      .overrideIcon=${a.icon}
                      .overrideImage=${a.image}
                      class=${e?"":"no-text"}
                      stateColor
                      slot="icon"
                    ></state-badge>
                  `:""}
              ${e}
            </ha-chip>
          `}))}
      </div>
    `}},{kind:"method",key:"_handleAction",value:function(a){const t=a.currentTarget.config;p(this,this.hass,t,a.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return[n,s`
        .ha-scrollbar {
          padding: 8px;
          padding-top: var(--padding-top, 8px);
          padding-bottom: var(--padding-bottom, 8px);
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
          box-sizing: border-box;
          display: flex;
          flex-wrap: wrap;
        }
        state-badge {
          display: inline-flex;
          line-height: inherit;
          color: var(--secondary-text-color);
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          margin-left: -4px;
          margin-top: -2px;
        }
        state-badge.no-text {
          width: 26px;
          height: 26px;
          margin-left: -3px;
          margin-top: -3px;
        }
        ha-chip {
          padding: 4px;
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          .ha-scrollbar {
            flex-wrap: nowrap;
          }
        }
      `]}}]}}),t);
