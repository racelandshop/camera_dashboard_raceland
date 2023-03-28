import{_ as t,c as e,d as s,$ as a,am as i,r as n,n as o,a5 as l,a6 as r,ad as c,A as d,e2 as u,e3 as v,e4 as h}from"./main-0443badf.js";import"lit-html/is-server.js";import{s as b}from"./c.039b4847.js";import{a as m,s as p}from"./c.603f0acc.js";import"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";const f=8192,_=[{translationKey:"start",icon:l,serviceName:"start",isVisible:t=>p(t,f)},{translationKey:"pause",icon:r,serviceName:"pause",isVisible:t=>p(t,f)&&p(t,4)},{translationKey:"start_pause",icon:c,serviceName:"start_pause",isVisible:t=>!p(t,f)&&p(t,4)},{translationKey:"stop",icon:d,serviceName:"stop",isVisible:t=>p(t,8)},{translationKey:"clean_spot",icon:u,serviceName:"clean_spot",isVisible:t=>p(t,1024)},{translationKey:"locate",icon:v,serviceName:"locate",isVisible:t=>p(t,512)},{translationKey:"return_home",icon:h,serviceName:"return_to_base",isVisible:t=>p(t,16)}];t([o("more-info-vacuum")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){if(!this.hass||!this.stateObj)return a``;const t=this.stateObj;return a`
      ${t.state!==m?a` <div class="flex-horizontal">
            ${p(t,128)?a`
                  <div>
                    <span class="status-subtitle"
                      >${this.hass.localize("ui.dialogs.more_info_control.vacuum.status")}:
                    </span>
                    <span><strong>${t.attributes.status}</strong></span>
                  </div>
                `:""}
            ${p(t,64)&&t.attributes.battery_level?a`
                  <div>
                    <span>
                      ${t.attributes.battery_level} %
                      <ha-icon
                        .icon=${t.attributes.battery_icon}
                      ></ha-icon>
                    </span>
                  </div>
                `:""}
          </div>`:""}
      ${_.some((e=>e.isVisible(t)))?a`
            <div>
              <p></p>
              <div class="status-subtitle">
                ${this.hass.localize("ui.dialogs.more_info_control.vacuum.commands")}
              </div>
              <div class="flex-horizontal">
                ${_.filter((e=>e.isVisible(t))).map((e=>a`
                    <div>
                      <ha-icon-button
                        .path=${e.icon}
                        .entry=${e}
                        @click=${this.callService}
                        .label=${this.hass.localize(`ui.dialogs.more_info_control.vacuum.${e.translationKey}`)}
                        .disabled=${t.state===m}
                      ></ha-icon-button>
                    </div>
                  `))}
              </div>
            </div>
          `:""}
      ${p(t,32)?a`
            <div>
              <div class="flex-horizontal">
                <ha-select
                  .label=${this.hass.localize("ui.dialogs.more_info_control.vacuum.fan_speed")}
                  .disabled=${t.state===m}
                  .value=${t.attributes.fan_speed}
                  @selected=${this.handleFanSpeedChanged}
                  fixedMenuPosition
                  naturalMenuWidth
                  @closed=${b}
                >
                  ${t.attributes.fan_speed_list.map((t=>a`
                      <mwc-list-item .value=${t}>${t}</mwc-list-item>
                    `))}
                </ha-select>
                <div
                  style="justify-content: center; align-self: center; padding-top: 1.3em"
                >
                  <span>
                    <ha-svg-icon .path=${i}></ha-svg-icon>
                    ${t.attributes.fan_speed}
                  </span>
                </div>
              </div>
              <p></p>
            </div>
          `:""}

      <ha-attributes
        .hass=${this.hass}
        .stateObj=${this.stateObj}
        .extraFilters=${"fan_speed,fan_speed_list,status,battery_level,battery_icon"}
      ></ha-attributes>
    `}},{kind:"method",key:"callService",value:function(t){const e=t.target.entry;this.hass.callService("vacuum",e.serviceName,{entity_id:this.stateObj.entity_id})}},{kind:"method",key:"handleFanSpeedChanged",value:function(t){const e=this.stateObj.attributes.fan_speed,s=t.target.value;s&&e!==s&&this.hass.callService("vacuum","set_fan_speed",{entity_id:this.stateObj.entity_id,fan_speed:s})}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      :host {
        line-height: 1.5;
      }
      .status-subtitle {
        color: var(--secondary-text-color);
      }
      .flex-horizontal {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    `}}]}}),e);
