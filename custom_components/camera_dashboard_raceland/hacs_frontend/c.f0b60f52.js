import{_ as e,c as t,d as i,$ as o,r as d,n as a}from"./main-0443badf.js";import"lit-html/is-server.js";e([a("camera-brand-icon-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[i({type:Boolean,reflect:!0})],key:"disabled",value:()=>!1},{kind:"field",decorators:[i({type:String})],key:"svgPath",value:void 0},{kind:"field",decorators:[i({type:String})],key:"label",value:()=>""},{kind:"field",decorators:[i({attribute:!1})],key:"cameraModelList",value:void 0},{kind:"field",decorators:[i({type:Boolean})],key:"hideTitle",value:()=>!1},{kind:"field",static:!0,key:"shadowRootOptions",value:()=>({mode:"open",delegatesFocus:!0})},{kind:"method",key:"render",value:function(){return o`
      <mwc-icon-button
        .ariaLabel=${this.label}
        .title=${this.hideTitle?"":this.label}
        .disabled=${this.disabled}
      >
        ${this.svgPath?o`<img src=${this.svgPath} alt="Brand Icon" />`:o`${this.hideTitle?"":this.label}`}
      </mwc-icon-button>
    `}},{kind:"get",static:!0,key:"styles",value:function(){return d`
      :host {
        display: inline-block;
        outline: none;
      }
      :host([disabled]) {
        pointer-events: none;
      }
      mwc-icon-button {
        width: 100%;
        border-radius: 25px;
        border: 2px solid #73ad21;
        padding: 20px 20px 20px 20px;
        text-align: center;
        cursor: pointer;
        --mdc-theme-on-primary: currentColor;
        --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
      }
    `}}]}}),t);
