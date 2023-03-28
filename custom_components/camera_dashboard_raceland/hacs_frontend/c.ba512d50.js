import{_ as t,c as s,d as i,$ as a,bb as e,aq as r,an as h,ap as o,b5 as l,r as n,n as c,cM as d,bc as u,ao as v,ar as b,e7 as m,e8 as p,e9 as $,ea as f,eb as g,as as w,ec as y,ed as j,ee as x,ef as O}from"./main-0443badf.js";import"lit-html/is-server.js";import{f as _,ak as k}from"./c.603f0acc.js";import{y as V,z,A as D,B as q}from"./c.449fa12b.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";const A={"clear-night":d,cloudy:u,exceptional:v,fog:b,hail:m,lightning:p,"lightning-rainy":$,partlycloudy:f,pouring:g,rainy:w,snowy:y,"snowy-rainy":j,sunny:x,windy:o,"windy-variant":O};t([c("more-info-weather")],(function(t,s){return{F:class extends s{constructor(...s){super(...s),t(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"stateObj",value:void 0},{kind:"method",key:"shouldUpdate",value:function(t){if(t.has("stateObj"))return!0;const s=t.get("hass");return!s||s.locale!==this.hass.locale||s.config.unit_system!==this.hass.config.unit_system}},{kind:"method",key:"render",value:function(){if(!this.hass||!this.stateObj)return a``;const t=V(this.stateObj.attributes.forecast);return a`
      <div class="flex">
        <ha-svg-icon .path=${e}></ha-svg-icon>
        <div class="main">
          ${this.hass.localize("ui.card.weather.attributes.temperature")}
        </div>
        <div>
          ${_(this.stateObj.attributes.temperature,this.hass.locale)}
          ${z(this.hass,"temperature")}
        </div>
      </div>
      ${this._showValue(this.stateObj.attributes.pressure)?a`
            <div class="flex">
              <ha-svg-icon .path=${r}></ha-svg-icon>
              <div class="main">
                ${this.hass.localize("ui.card.weather.attributes.air_pressure")}
              </div>
              <div>
                ${_(this.stateObj.attributes.pressure,this.hass.locale)}
                ${z(this.hass,"pressure")}
              </div>
            </div>
          `:""}
      ${this._showValue(this.stateObj.attributes.humidity)?a`
            <div class="flex">
              <ha-svg-icon .path=${h}></ha-svg-icon>
              <div class="main">
                ${this.hass.localize("ui.card.weather.attributes.humidity")}
              </div>
              <div>
                ${_(this.stateObj.attributes.humidity,this.hass.locale)}
                %
              </div>
            </div>
          `:""}
      ${this._showValue(this.stateObj.attributes.wind_speed)?a`
            <div class="flex">
              <ha-svg-icon .path=${o}></ha-svg-icon>
              <div class="main">
                ${this.hass.localize("ui.card.weather.attributes.wind_speed")}
              </div>
              <div>
                ${D(this.hass,this.stateObj.attributes.wind_speed,this.stateObj.attributes.wind_bearing)}
              </div>
            </div>
          `:""}
      ${this._showValue(this.stateObj.attributes.visibility)?a`
            <div class="flex">
              <ha-svg-icon .path=${l}></ha-svg-icon>
              <div class="main">
                ${this.hass.localize("ui.card.weather.attributes.visibility")}
              </div>
              <div>
                ${_(this.stateObj.attributes.visibility,this.hass.locale)}
                ${z(this.hass,"length")}
              </div>
            </div>
          `:""}
      ${this.stateObj.attributes.forecast?a`
            <div class="section">
              ${this.hass.localize("ui.card.weather.forecast")}:
            </div>
            ${this.stateObj.attributes.forecast.map((s=>this._showValue(s.templow)||this._showValue(s.temperature)?a`<div class="flex">
                    ${s.condition?a`
                          <ha-svg-icon
                            .path=${A[s.condition]}
                          ></ha-svg-icon>
                        `:""}
                    ${t?a`
                          <div class="main">
                            ${q(new Date(s.datetime),this.hass.locale)}
                          </div>
                        `:a`
                          <div class="main">
                            ${k(new Date(s.datetime),this.hass.locale)}
                          </div>
                        `}
                    <div class="templow">
                      ${this._showValue(s.templow)?`${_(s.templow,this.hass.locale)}\n                          ${z(this.hass,"temperature")}`:t?"":"—"}
                    </div>
                    <div class="temp">
                      ${this._showValue(s.temperature)?`${_(s.temperature,this.hass.locale)}\n                        ${z(this.hass,"temperature")}`:"—"}
                    </div>
                  </div>`:""))}
          `:""}
      ${this.stateObj.attributes.attribution?a`
            <div class="attribution">
              ${this.stateObj.attributes.attribution}
            </div>
          `:""}
    `}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      ha-svg-icon {
        color: var(--paper-item-icon-color);
      }
      .section {
        margin: 16px 0 8px 0;
        font-size: 1.2em;
      }

      .flex {
        display: flex;
        height: 32px;
        align-items: center;
      }

      .main {
        flex: 1;
        margin-left: 24px;
      }

      .temp,
      .templow {
        min-width: 48px;
        text-align: right;
      }

      .templow {
        margin: 0 16px;
        color: var(--secondary-text-color);
      }

      .attribution {
        color: var(--secondary-text-color);
        text-align: center;
      }
    `}},{kind:"method",key:"_showValue",value:function(t){return null!=t}}]}}),s);
