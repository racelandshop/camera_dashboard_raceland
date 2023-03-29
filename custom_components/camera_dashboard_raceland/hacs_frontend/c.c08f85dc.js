import{_ as e,$ as a,j as s,k as i,f as t,n as c}from"./main-0443badf.js";import"lit-html/is-server.js";import{al as o,am as r,as as l,aw as m,an as n,ao as d,ap as p,aq as h}from"./c.603f0acc.js";import{b as u}from"./c.dfac5a1d.js";import{HuiStackCardEditor as f}from"./c.bf2864cb.js";import"./c.039b4847.js";import"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";import"./c.50237dc6.js";import"./c.52ac4162.js";import"./c.5fe2e3ab.js";import"./c.183c12e5.js";import"./c.439151c3.js";import"./c.b3195fc3.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";import"./c.1f741597.js";import"./c.08cfec83.js";import"./c.d63070ce.js";const j=o(u,r({cards:l(m()),title:n(d()),square:n(p()),columns:n(d())}));let b=e([c("hui-grid-card-editor")],(function(e,c){class o extends c{constructor(...a){super(...a),e(this)}}return{F:o,d:[{kind:"method",key:"setConfig",value:function(e){h(e,j),this._config=e}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return a``;const e=[{type:"grid",name:"",schema:[{name:"columns",selector:{select:{options:[{value:"1",label:this.hass.localize("ui.panel.lovelace.editor.card.grid.big")},{value:"2",label:this.hass.localize("ui.panel.lovelace.editor.card.grid.medium")},{value:"3",label:this.hass.localize("ui.panel.lovelace.editor.card.grid.small")}]}}},{name:"title",selector:{text:{}}}]}],t={title:"",square:!0,columns:"3",...this._config};return a`
      <div class="formContainer" style="width:90%;margin-left:5%">
        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${e}
          .computeLabel=${this._computeLabelCallback}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
      ${s(i(o.prototype),"render",this).call(this)}
    `}},{kind:"method",key:"_valueChanged",value:function(e){t(this,"config-changed",{config:e.detail.value})}},{kind:"field",key:"_computeLabelCallback",value(){return e=>this.hass.localize(`ui.panel.lovelace.editor.card.grid.${e.name}`)}}]}}),f);export{b as HuiGridCardEditor};
