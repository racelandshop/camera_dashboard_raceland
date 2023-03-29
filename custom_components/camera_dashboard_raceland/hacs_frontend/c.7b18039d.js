import{_ as t,c as a,d as e,$ as i,aI as l,f as s,r as o,n as d}from"./main-0443badf.js";import"lit-html/is-server.js";import{ae as n}from"./c.603f0acc.js";const r=()=>import("./c.d3fa7074.js");t([d("ha-date-input")],(function(t,a){return{F:class extends a{constructor(...a){super(...a),t(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"locale",value:void 0},{kind:"field",decorators:[e()],key:"value",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[e()],key:"label",value:void 0},{kind:"method",key:"render",value:function(){return i`<ha-textfield
      .label=${this.label}
      .disabled=${this.disabled}
      iconTrailing
      @click=${this._openDialog}
      .value=${this.value?n(new Date(this.value),this.locale):""}
    >
      <ha-svg-icon slot="trailingIcon" .path=${l}></ha-svg-icon>
    </ha-textfield>`}},{kind:"method",key:"_openDialog",value:function(){var t,a;this.disabled||(t=this,a={min:"1970-01-01",value:this.value,onChange:t=>this._valueChanged(t),locale:this.locale.language},s(t,"show-dialog",{dialogTag:"ha-dialog-date-picker",dialogImport:r,dialogParams:a}))}},{kind:"method",key:"_valueChanged",value:function(t){this.value!==t&&(this.value=t,s(this,"change"),s(this,"value-changed",{value:t}))}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      ha-svg-icon {
        color: var(--secondary-text-color);
      }
    `}}]}}),a);const c=t=>`${t.attributes.year||"1970"}-${String(t.attributes.month||"01").padStart(2,"0")}-${String(t.attributes.day||"01").padStart(2,"0")}T${String(t.attributes.hour||"00").padStart(2,"0")}:${String(t.attributes.minute||"00").padStart(2,"0")}:${String(t.attributes.second||"00").padStart(2,"0")}`,u=(t,a,e,i)=>{const l={entity_id:a,time:e,date:i};t.callService(a.split(".",1)[0],"set_datetime",l)};export{u as a,c as s};
