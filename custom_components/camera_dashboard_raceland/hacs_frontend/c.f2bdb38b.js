import{_ as t,c as i,d as e,t as s,j as a,k as n,$ as o,z as c,r,n as h}from"./main-0443badf.js";import"lit-html/is-server.js";import"./c.d5b6e6ef.js";import{U as d,am as l,ae as _}from"./c.449fa12b.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";let f=t([h("hui-statistics-graph-card")],(function(t,i){class h extends i{constructor(...i){super(...i),t(this)}}return{F:h,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.8525e8a3.js"),document.createElement("hui-statistics-graph-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"statistics-graph",entities:[]}}},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_statistics",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"field",key:"_entities",value:()=>[]},{kind:"field",key:"_names",value:()=>({})},{kind:"field",key:"_fetching",value:()=>!1},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){a(n(h.prototype),"disconnectedCallback",this).call(this),this._interval&&(clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"connectedCallback",value:function(){a(n(h.prototype),"connectedCallback",this).call(this),this.hasUpdated&&(this._getStatistics(),clearInterval(this._interval),this._interval=window.setInterval((()=>this._getStatistics()),36e5))}},{kind:"method",key:"getCardSize",value:function(){var t,i;return null!==(t=this._config)&&void 0!==t&&t.title?2:0+2*((null===(i=this._entities)||void 0===i?void 0:i.length)||1)}},{kind:"method",key:"setConfig",value:function(t){if(!t.entities||!Array.isArray(t.entities))throw new Error("Entities need to be an array");if(!t.entities.length)throw new Error("You must include at least one entity");const i=t.entities?d(t.entities,!1):[];this._entities=[],i.forEach((t=>{this._entities.push(t.entity),t.name&&(this._names[t.entity]=t.name)})),"string"==typeof t.stat_types?this._config={...t,stat_types:[t.stat_types]}:t.stat_types?this._config=t:this._config={...t,stat_types:["sum","min","max","mean"]}}},{kind:"method",key:"shouldUpdate",value:function(t){return!!t.has("_statistics")||l(this,t)}},{kind:"method",key:"willUpdate",value:function(t){if(a(n(h.prototype),"willUpdate",this).call(this,t),!this._config||!t.has("_config"))return;const i=t.get("_config");(null==i?void 0:i.entities)===this._config.entities&&(null==i?void 0:i.days_to_show)===this._config.days_to_show&&(null==i?void 0:i.period)===this._config.period||(this._getStatistics(),clearInterval(this._interval),this._interval=window.setInterval((()=>this._getStatistics()),36e5))}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?o`
      <ha-card .header=${this._config.title}>
        <div
          class="content ${c({"has-header":!!this._config.title})}"
        >
          <statistics-chart
            .hass=${this.hass}
            .isLoadingData=${!this._statistics}
            .statisticsData=${this._statistics}
            .chartType=${this._config.chart_type||"line"}
            .statTypes=${this._config.stat_types}
            .names=${this._names}
          ></statistics-chart>
        </div>
      </ha-card>
    `:o``}},{kind:"method",key:"_getStatistics",value:async function(){if(this._fetching)return;const t=new Date;t.setTime(t.getTime()-36e5*(24*(this._config.days_to_show||30)+1)),this._fetching=!0;try{this._statistics=await _(this.hass,t,void 0,this._entities,this._config.period)}finally{this._fetching=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      ha-card {
        height: 100%;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
    `}}]}}),i);export{f as HuiStatisticsGraphCard};
