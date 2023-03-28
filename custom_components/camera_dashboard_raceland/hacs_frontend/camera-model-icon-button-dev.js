const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

import { _ as _decorate, c as s, d as e, $, r, n } from './main-dev.js';
import 'lit-html/is-server.js';

_decorate([n("camera-model-icon-button")],function(_initialize,_LitElement){class CameraModelIconButton extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:CameraModelIconButton,d:[{kind:"field",decorators:[e({type:Boolean,reflect:true})],key:"disabled",value(){return false;}},{kind:"field",decorators:[e({type:String})],key:"label",value(){return "";}},{kind:"field",decorators:[e({attribute:false})],key:"cameraModelInfo",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"hideTitle",value(){return false;}},{kind:"field",static:true,key:"shadowRootOptions",value(){return {mode:"open",delegatesFocus:true};}},{kind:"method",key:"render",value:function render(){return $`
      <mwc-icon-button
        .ariaLabel=${this.label}
        .title=${this.hideTitle?"":this.label}
        .disabled=${this.disabled}
      >
        ${this.hideTitle?"":this.label}
      </mwc-icon-button>
    `;}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
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
    `;}}]};},s);
