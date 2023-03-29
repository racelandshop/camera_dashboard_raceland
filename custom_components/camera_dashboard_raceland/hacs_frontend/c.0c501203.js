import{_ as e,c as t,d as a,t as i,$ as s,eA as o,I as n,r,n as c}from"./main-0443badf.js";import{aQ as d}from"./c.603f0acc.js";import"lit-html/is-server.js";import"./c.5fc18361.js";import{g as l,e as h}from"./c.6d46f0a1.js";import{Z as u,ac as p}from"./c.449fa12b.js";import{S as g}from"./c.6c0b87be.js";import{severityMap as m}from"./c.d3e5949c.js";import"./c.039b4847.js";import"./c.c13d4687.js";import"./c.da136530.js";import"./c.655d6539.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";e([c("hui-energy-carbon-consumed-gauge-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"_config",value:void 0},{kind:"field",decorators:[i()],key:"_data",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"hassSubscribe",value:function(){var e;return[l(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>{this._data=e}))]}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return s``;if(!this._data)return s`${this.hass.localize("ui.panel.lovelace.cards.energy.loading")}`;if(!this._data.co2SignalEntity)return s``;if(!this.hass.states[this._data.co2SignalEntity])return s`<hui-warning>
        ${u(this.hass,this._data.co2SignalEntity)}
      </hui-warning>`;const e=this._data.prefs,t=h(e),a=p(this._data.stats,t.grid[0].flow_from.map((e=>e.stat_energy_from)));let i;if(0===a&&(i=100),this._data.fossilEnergyConsumption&&a){const e=this._data.fossilEnergyConsumption?Object.values(this._data.fossilEnergyConsumption).reduce(((e,t)=>e+t),0):0,s=t.solar&&p(this._data.stats,t.solar.map((e=>e.stat_energy_from)))||0,o=p(this._data.stats,t.grid[0].flow_to.map((e=>e.stat_energy_to)))||0,n=a+Math.max(0,s-o);i=d(100*(1-e/n))}return s`
      <ha-card>
        ${void 0!==i?s`
              <ha-svg-icon id="info" .path=${o}></ha-svg-icon>
              <paper-tooltip animation-delay="0" for="info" position="left">
                <span>
                  ${this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.card_indicates_energy_used")}
                </span>
              </paper-tooltip>
              <ha-gauge
                min="0"
                max="100"
                .value=${i}
                .locale=${this.hass.locale}
                label="%"
                style=${n({"--gauge-color":this._computeSeverity(i)})}
              ></ha-gauge>
              <div class="name">
                ${this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.non_fossil_energy_consumed")}
              </div>
            `:s`${this.hass.localize("ui.panel.lovelace.cards.energy.carbon_consumed_gauge.non_fossil_energy_not_calculated")}`}
      </ha-card>
    `}},{kind:"method",key:"_computeSeverity",value:function(e){return e<10?m.red:e<30?m.yellow:e>75?m.green:m.normal}},{kind:"get",static:!0,key:"styles",value:function(){return r`
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
    `}}]}}),g(t));
