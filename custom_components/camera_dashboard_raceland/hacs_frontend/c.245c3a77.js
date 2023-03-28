import{_ as e,c as a,d as i,t as o,$ as t,eA as s,I as r,r as n,n as c}from"./main-0443badf.js";import"./c.603f0acc.js";import"lit-html/is-server.js";import"./c.5fc18361.js";import{g as l,e as d}from"./c.6d46f0a1.js";import{ac as u}from"./c.449fa12b.js";import{S as p}from"./c.6c0b87be.js";import{severityMap as h}from"./c.d3e5949c.js";import"./c.039b4847.js";import"./c.c13d4687.js";import"./c.da136530.js";import"./c.655d6539.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";e([c("hui-energy-solar-consumed-gauge-card")],(function(e,a){return{F:class extends a{constructor(...a){super(...a),e(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"_config",value:void 0},{kind:"field",decorators:[o()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[l(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return t``;if(!this._data)return t`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;const e=this._data.prefs,a=d(e);if(!a.solar)return t``;const i=u(this._data.stats,a.solar.map((e=>e.stat_energy_from))),o=u(this._data.stats,a.grid[0].flow_to.map((e=>e.stat_energy_to)));let n;if(null!==o&&i){n=Math.max(0,i-o)/i*100}return t`
      <ha-card>
        ${void 0!==n?t`
              <ha-svg-icon id="info" .path=${s}></ha-svg-icon>
              <paper-tooltip animation-delay="0" for="info" position="left">
                <span>
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used")}
                  <br /><br />
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.card_indicates_solar_energy_used_charge_home_bat")}
                </span>
              </paper-tooltip>
              <ha-gauge
                min="0"
                max="100"
                .value=${n}
                .locale=${this.hass.locale}
                label="%"
                style=${r({"--gauge-color":this._computeSeverity(n)})}
              ></ha-gauge>
              <div class="name">
                ${this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_energy")}
              </div>
            `:0===i?this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.not_produced_solar_energy"):this.hass.localize("ui.panel.lovelace.cards.energy.solar_consumed_gauge.self_consumed_solar_could_not_calc")}
      </ha-card>
    `}},{kind:"method",key:"_computeSeverity",value:function(e){return e>75?h.green:e<50?h.yellow:h.normal}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      ha-card {
        height: 100%;
        overflow: hidden;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
      }

      ha-gauge {
        width: 100%;
        max-width: 250px;
      }

      .name {
        text-align: center;
        line-height: initial;
        color: var(--primary-text-color);
        width: 100%;
        font-size: 15px;
        margin-top: 8px;
      }

      ha-svg-icon {
        position: absolute;
        right: 4px;
        top: 4px;
        color: var(--secondary-text-color);
      }
      paper-tooltip > span {
        font-size: 12px;
        line-height: 12px;
      }
      paper-tooltip {
        width: 80%;
        max-width: 250px;
        top: 8px !important;
      }
    `}}]}}),p(a));
