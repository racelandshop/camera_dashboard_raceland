import{_ as t,c as s,d as e,t as i,$ as o,r as a}from"./main-0443badf.js";import"lit-html/is-server.js";import{d as r}from"./c.b3195fc3.js";import{c as n}from"./c.603f0acc.js";import{l as d,m as c}from"./c.449fa12b.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";let h=t(null,(function(t,s){return{F:class extends s{constructor(...s){super(...s),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"stateObj",value:void 0},{kind:"field",decorators:[i()],key:"_groupDomainStateObj",value:void 0},{kind:"field",decorators:[i()],key:"_moreInfoType",value:void 0},{kind:"method",key:"updated",value:function(t){if(!this.hass||!this.stateObj||!t.has("hass")&&!t.has("stateObj"))return;const s=this.stateObj.attributes.entity_id.map((t=>this.hass.states[t])).filter((t=>t));if(!s.length)return this._groupDomainStateObj=void 0,void(this._moreInfoType=void 0);const e=s.find((t=>"on"===t.state))||s[0],i=n(e);if("group"!==i&&s.every((t=>i===n(t)))){this._groupDomainStateObj={...e,entity_id:this.stateObj.entity_id,attributes:{...e.attributes}};const t=c(i);d(t),this._moreInfoType="hidden"===t?void 0:`more-info-${t}`}else this._groupDomainStateObj=void 0,this._moreInfoType=void 0}},{kind:"method",key:"render",value:function(){return this.hass&&this.stateObj?o`${this._moreInfoType?r(this._moreInfoType,{hass:this.hass,stateObj:this._groupDomainStateObj}):""}
    ${this.stateObj.attributes.entity_id.map((t=>{const s=this.hass.states[t];return s?o`
        <state-card-content
          .stateObj=${s}
          .hass=${this.hass}
        ></state-card-content>
      `:""}))}`:o``}},{kind:"get",static:!0,key:"styles",value:function(){return a`
      state-card-content {
        display: block;
        margin-top: 8px;
      }
    `}}]}}),s);customElements.define("more-info-group",h);
