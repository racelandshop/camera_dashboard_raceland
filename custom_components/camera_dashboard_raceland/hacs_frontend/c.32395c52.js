import{_ as t,c as e,d as a,t as s,$ as i,z as r,b as o,eF as n,eG as d,ew as c,eH as l,eI as h,eJ as u,r as p,n as m}from"./main-0443badf.js";import"lit-html/is-server.js";import{s as f,a as g,g as y,b as k}from"./c.6d46f0a1.js";import{f as _,x as b,j as v}from"./c.603f0acc.js";import{w as j}from"./c.449fa12b.js";import{S as x}from"./c.6c0b87be.js";import{i as $}from"./c.144e89ef.js";import{d as S,c as w}from"./c.655d6539.js";import"./c.c13d4687.js";import"./c.da136530.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";let z=t([m("hui-energy-gas-graph-card")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[a({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",decorators:[s()],key:"_chartData",value:()=>({datasets:[]})},{kind:"field",decorators:[s()],key:"_start",value:()=>f()},{kind:"field",decorators:[s()],key:"_end",value:()=>g()},{kind:"field",decorators:[s()],key:"_unit",value:void 0},{kind:"field",key:"hassSubscribeRequiredHostProps",value:()=>["_config"]},{kind:"method",key:"hassSubscribe",value:function(){var t;return[y(this.hass,{key:null===(t=this._config)||void 0===t?void 0:t.collection_key}).subscribe((t=>this._getStatistics(t)))]}},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._config=t}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?i`
      <ha-card>
        ${this._config.title?i`<h1 class="card-header">${this._config.title}</h1>`:""}
        <div
          class="content ${r({"has-header":!!this._config.title})}"
        >
          <ha-chart-base
            .data=${this._chartData}
            .options=${this._createOptions(this._start,this._end,this.hass.locale,this._unit)}
            chart-type="bar"
          ></ha-chart-base>
          ${this._chartData.datasets.length?"":i`<div class="no-data">
                ${$(this._start)?this.hass.localize("ui.panel.lovelace.cards.energy.no_data"):this.hass.localize("ui.panel.lovelace.cards.energy.no_data_period")}
              </div>`}
        </div>
      </ha-card>
    `:i``}},{kind:"field",key:"_createOptions",value:()=>o(((t,e,a,s)=>{const i=S(e,t);return{parsing:!1,animation:!1,scales:{x:{type:"time",suggestedMin:t.getTime(),suggestedMax:e.getTime(),adapters:{date:{locale:a}},ticks:{maxRotation:0,sampleSize:5,autoSkipPadding:20,major:{enabled:!0},font:t=>t.tick&&t.tick.major?{weight:"bold"}:{}},time:{tooltipFormat:i>35?"monthyear":i>7?"date":i>2?"weekday":i>0?"datetime":"hour",minUnit:i>35?"month":i>2?"day":"hour"},offset:!0},y:{stacked:!0,type:"linear",title:{display:!0,text:s},ticks:{beginAtZero:!0}}},plugins:{tooltip:{mode:"nearest",callbacks:{title:t=>{if(i>0)return t[0].label;const e=new Date(t[0].parsed.x);return`${j(e,a)} – ${j(w(e,1),a)}`},label:t=>`${t.dataset.label}: ${_(t.parsed.y,a)} ${s}`}},filler:{propagate:!1},legend:{display:!1,labels:{usePointStyle:!0}}},hover:{mode:"nearest"},elements:{bar:{borderWidth:1.5,borderRadius:4},point:{hitRadius:5}},locale:b(a)}}))},{kind:"method",key:"_getStatistics",value:async function(t){const e=t.prefs.energy_sources.filter((t=>"gas"===t.type));this._unit=k(this.hass,t.prefs)||"m³";const a=[],s=getComputedStyle(this).getPropertyValue("--energy-gas-color").trim();e.forEach(((e,i)=>{const r=[],o=this.hass.states[e.stat_energy_from],p=i>0?this.hass.themes.darkMode?n(d(c(s)),i):l(d(c(s)),i):void 0,m=p?h(u(p)):s;let f=null,g=null;const y=[];if(e.stat_energy_from in t.stats){const a=t.stats[e.stat_energy_from];for(const t of a){if(null===t.sum)continue;if(null===f){f=t.sum;continue}if(g===t.start)continue;const e=t.sum-f,a=new Date(t.start);y.push({x:a.getTime(),y:e}),g=t.start,f=t.sum}}y.length&&r.push({label:o?v(o):e.stat_energy_from,borderColor:m,backgroundColor:m+"7F",data:y,stack:"gas"}),Array.prototype.push.apply(a,r)})),this._start=t.start,this._end=t.end||g(),this._chartData={datasets:a}}},{kind:"get",static:!0,key:"styles",value:function(){return p`
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
    `}}]}}),x(e));export{z as HuiEnergyGasGraphCard};
