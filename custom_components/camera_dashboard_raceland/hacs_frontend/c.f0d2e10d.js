import{_ as e,c as t,d as a,t as s,$ as r,z as i,b as o,eF as n,eG as c,ew as l,eH as d,eI as h,eJ as u,r as f,n as p}from"./main-0443badf.js";import"lit-html/is-server.js";import{w as m}from"./c.449fa12b.js";import{f as g,x as y,j as _}from"./c.603f0acc.js";import{s as b,a as k,g as v,c as j}from"./c.6d46f0a1.js";import{S as x}from"./c.6c0b87be.js";import{i as $}from"./c.144e89ef.js";import{d as w,c as D}from"./c.655d6539.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";import"./c.c13d4687.js";import"./c.da136530.js";let S=e([p("hui-energy-solar-graph-card")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",decorators:[s()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[s()],key:"_start",value:()=>b()},{kind:"field",decorators:[s()],key:"_end",value:()=>k()},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var e;return[v(this.hass,{key:null===(e=this._config)||void 0===e?void 0:e.collection_key}).subscribe((e=>this._getStatistics(e)))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?r`
      <ha-card>
        ${this._config.title?r`<h1 class="card-header">${this._config.title}</h1>`:""}
        <div
          class="content ${i({"has-header":!!this._config.title})}"
        >
          <ha-chart-base
            .data=${this._chartData}
            .options=${this._createOptions(this._start,this._end,this.hass.locale)}
            chart-type="bar"
          ></ha-chart-base>
          ${this._chartData.datasets.length?"":r`<div class="no-data">
                ${$(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period")}
              </div>`}
        </div>
      </ha-card>
    `:r``}},{kind:"field",key:"_createOptions",value:()=>o(((e,t,a)=>{const s=w(t,e);return{parsing:!1,animation:!1,scales:{x:{type:"time",suggestedMin:e.getTime(),suggestedMax:t.getTime(),adapters:{date:{locale:a}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:e=>e.tick&&e.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:s>35?"monthyear":s>7?"date":s>2?"weekday":s>0?"datetime":"hour",minUnit:s>35?"month":s>2?"day":"hour"},offset:!0},y:{stacked:!0,type:"linear",title:{display:!0,text:"kWh"},ticks:{beginAtZero:!0}}},plugins:{tooltip:{mode:"nearest",callbacks:{title:e=>{if(s>0)return e[0].label;const t=new Date(e[0].parsed.x);return`${m(t,a)} – ${m(D(t,1),a)}`},label:e=>`${e.dataset.label}: ${g(e.parsed.y,a)} kWh`}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{line:{tension:.3,borderWidth:1.5},bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:y(a)}}))},{kind:"method",key:"_getStatistics",value:async function(e){const t=e.prefs.energy_sources.filter((e=>"solar"===e.type));let a;if(t.some((e=>{var t;return null===(t=e.config_entry_solar_forecast)||void 0===t?void 0:t.length})))try{a=await j(this.hass)}catch(e){}const s=[],r=getComputedStyle(this),i=r.getPropertyValue("--energy-solar-color").trim(),o=w(e.end||new Date,e.start);t.forEach(((t,f)=>{const p=[],m=this.hass.states[t.stat_energy_from],g=f>0?this.hass.themes.darkMode?n(c(l(i)),f):d(c(l(i)),f):void 0,y=g?h(u(g)):i;let b=null,k=null;const v=[];if(t.stat_energy_from in e.stats){const a=e.stats[t.stat_energy_from];for(const e of a){if(null===e.sum)continue;if(null===b){b=e.sum;continue}if(k===e.start)continue;const t=e.sum-b,a=new Date(e.start);v.push({x:a.getTime(),y:t}),k=e.start,b=e.sum}}if(v.length&&p.push({label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_solar_graph.production",{name:m?_(m):t.stat_energy_from}),borderColor:y,backgroundColor:y+"7F",data:v,stack:"solar"}),a&&t.config_entry_solar_forecast){const s={};if(t.config_entry_solar_forecast.forEach((t=>{a[t]&&Object.entries(a[t].wh_hours).forEach((([t,a])=>{const r=new Date(t);if(r<e.start||e.end&&r>e.end)return;o>35&&r.setDate(1),o>2?r.setHours(0,0,0,0):r.setMinutes(0,0,0);const i=r.getTime();i in s?s[i]+=a:s[i]=a}))})),s){const e=[];for(const[t,a]of Object.entries(s))e.push({x:Number(t),y:a/1e3});e.length&&p.push({type:"line",label:this.hass.localize("ui.panel.lovelace.cards.energy.energy_solar_graph.forecast",{name:m?_(m):t.stat_energy_from}),fill:!1,stepped:!1,borderColor:r.getPropertyValue("--primary-text-color"),borderDash:[7,5],pointRadius:0,data:e})}}Array.prototype.push.apply(s,p)})),this._start=e.start,this._end=e.end||k(),this._chartData={datasets:s}}},{kind:"get",static:!0,key:"styles",value:function(){return f`
      ha-card {
        height: 100%;
      }
      .card-header {
        padding-bottom: 0;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
      .no-data {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20%;
        margin-left: 32px;
        box-sizing: border-box;
      }
    `}}]}}),x(t));export{S as HuiEnergySolarGraphCard};
