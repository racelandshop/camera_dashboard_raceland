!function(t){"use strict";function e(t,e,r,i){var o,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,r,a):o(e,r))||a);return n>3&&a&&Object.defineProperty(e,r,a),a}var r="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const i=window,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),a=new WeakMap;class s{constructor(t,e,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&a.set(e,t))}return t}toString(){return this.cssText}}const c=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new s(r,t,n)},l=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var h;const d=window,p=d.trustedTypes,u=p?p.emptyScript:"",m=d.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},f=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:f};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,r)=>{const i=this._$Ep(r,e);void 0!==i&&(this._$Ev.set(i,r),t.push(i))}),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{o?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const r=document.createElement("style"),o=i.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=e.cssText,t.appendChild(r)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=v){var i;const o=this.constructor._$Ep(t,r);if(void 0!==o&&!0===r.reflect){const n=(void 0!==(null===(i=r.converter)||void 0===i?void 0:i.toAttribute)?r.converter:g).toAttribute(e,r.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var r;const i=this.constructor,o=i._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=i.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:g;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var _;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==m||m({ReactiveElement:y}),(null!==(h=d.reactiveElementVersions)&&void 0!==h?h:d.reactiveElementVersions=[]).push("1.6.1");const b=window,x=b.trustedTypes,w=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,A="?"+$,k=`<${A}>`,M=document,S=()=>M.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,L="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,I=/>/g,O=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,N=/"/g,j=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),D=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),T=new WeakMap,F=M.createTreeWalker(M,129,null,!1),V=(t,e)=>{const r=t.length-1,i=[];let o,n=2===e?"<svg>":"",a=R;for(let e=0;e<r;e++){const r=t[e];let s,c,l=-1,h=0;for(;h<r.length&&(a.lastIndex=h,c=a.exec(r),null!==c);)h=a.lastIndex,a===R?"!--"===c[1]?a=P:void 0!==c[1]?a=I:void 0!==c[2]?(j.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=O):void 0!==c[3]&&(a=O):a===O?">"===c[0]?(a=null!=o?o:R,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?O:'"'===c[3]?N:H):a===N||a===H?a=O:a===P||a===I?a=R:(a=O,o=void 0);const d=a===O&&t[e+1].startsWith("/>")?" ":"";n+=a===R?r+k:l>=0?(i.push(s),r.slice(0,l)+"$lit$"+r.slice(l)+$+d):r+$+(-2===l?(i.push(void 0),e):d)}const s=n+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(s):s,i]};class B{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,n=0;const a=t.length-1,s=this.parts,[c,l]=V(t,e);if(this.el=B.createElement(c,r),F.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=F.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const r=l[n++];if(t.push(e),void 0!==r){const t=i.getAttribute(r.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(r);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?G:"@"===e[1]?X:Z})}else s.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(j.test(i.tagName)){const t=i.textContent.split($),e=t.length-1;if(e>0){i.textContent=x?x.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],S()),F.nextNode(),s.push({type:2,index:++o});i.append(t[e],S())}}}else if(8===i.nodeType)if(i.data===A)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf($,t+1));)s.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const r=M.createElement("template");return r.innerHTML=t,r}}function W(t,e,r=t,i){var o,n,a,s;if(e===D)return e;let c=void 0!==i?null===(o=r._$Co)||void 0===o?void 0:o[i]:r._$Cl;const l=E(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(n=null==c?void 0:c._$AO)||void 0===n||n.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,r,i)),void 0!==i?(null!==(a=(s=r)._$Co)&&void 0!==a?a:s._$Co=[])[i]=c:r._$Cl=c),void 0!==c&&(e=W(t,c._$AS(t,e.values),c,i)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:r},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:M).importNode(r,!0);F.currentNode=o;let n=F.nextNode(),a=0,s=0,c=i[0];for(;void 0!==c;){if(a===c.index){let e;2===c.type?e=new K(n,n.nextSibling,this,t):1===c.type?e=new c.ctor(n,c.name,c.strings,this,t):6===c.type&&(e=new Y(n,this,t)),this._$AV.push(e),c=i[++s]}a!==(null==c?void 0:c.index)&&(n=F.nextNode(),a++)}return o}v(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class K{constructor(t,e,r,i){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cp=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),E(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==D&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&E(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){var e;const{values:r,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(r);else{const t=new q(o,this),e=t.u(this.options);t.v(r),this.$(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new B(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const o of t)i===e.length?e.push(r=new K(this.k(S()),this.k(S()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,r,i,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){const o=this.strings;let n=!1;if(void 0===o)t=W(this,t,e,0),n=!E(t)||t!==this._$AH&&t!==D,n&&(this._$AH=t);else{const i=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=W(this,i[r+a],e,a),s===D&&(s=this._$AH[a]),n||(n=!E(s)||s!==this._$AH[a]),s===U?t=U:t!==U&&(t+=(null!=s?s:"")+o[a+1]),this._$AH[a]=s}n&&!i&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const Q=x?x.emptyScript:"";class G extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class X extends Z{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=W(this,t,e,0))&&void 0!==r?r:U)===D)return;const i=this._$AH,o=t===U&&i!==U||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==U&&(i===U||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=b.litHtmlPolyfillSupport;null==tt||tt(B,K),(null!==(_=b.litHtmlVersions)&&void 0!==_?_:b.litHtmlVersions=[]).push("2.7.3");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var et,rt;class it extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{var i,o;const n=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e;let a=n._$litPart$;if(void 0===a){const t=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;n._$litPart$=a=new K(e.insertBefore(S(),t),t,void 0,null!=r?r:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}it.finalized=!0,it._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:it});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:it}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.3.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const nt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function st(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):at(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function ct(t){return st({...t,state:!0})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const lt=({finisher:t,descriptor:e})=>(r,i)=>{var o;if(void 0===i){const i=null!==(o=r.originalKey)&&void 0!==o?o:r.key,n=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(r.key)}:{...r,key:i};return null!=t&&(n.finisher=function(e){t(e,i)}),n}{const o=r.constructor;void 0!==e&&Object.defineProperty(r,i,e(i)),null==t||t(o,i)}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const dt=1;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const pt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),t.type!==dt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,i;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(e)}const o=t.element.classList;this.it.forEach(t=>{t in e||(o.remove(t),this.it.delete(t))});for(const t in e){const r=!!e[t];r===this.it.has(t)||(null===(i=this.nt)||void 0===i?void 0:i.has(t))||(r?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)))}return D}});var ut,mt;!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ut||(ut={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(mt||(mt={}));var gt=function(t,e,r,i){i=i||{},r=null==r?{}:r;var o=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=r,t.dispatchEvent(o),o},ft=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function vt(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(i=t[r],o=e[r],!(i===o||ft(i)&&ft(o)))return!1;var i,o;return!0}function yt(t){return Array.isArray?Array.isArray(t):"[object Array]"===kt(t)}function _t(t){return"string"==typeof t}function bt(t){return"number"==typeof t}function xt(t){return!0===t||!1===t||function(t){return wt(t)&&null!==t}(t)&&"[object Boolean]"==kt(t)}function wt(t){return"object"==typeof t}function $t(t){return null!=t}function At(t){return!t.trim().length}function kt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Mt=Object.prototype.hasOwnProperty;class St{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(t=>{let r=Et(t);e+=r.weight,this._keys.push(r),this._keyMap[r.id]=r,e+=r.weight}),this._keys.forEach(t=>{t.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Et(t){let e=null,r=null,i=null,o=1,n=null;if(_t(t)||yt(t))i=t,e=Ct(t),r=Lt(t);else{if(!Mt.call(t,"name"))throw new Error((t=>`Missing ${t} property in key`)("name"));const a=t.name;if(i=a,Mt.call(t,"weight")&&(o=t.weight,o<=0))throw new Error((t=>`Property 'weight' in key '${t}' must be a positive integer`)(a));e=Ct(a),r=Lt(a),n=t.getFn}return{path:e,id:r,weight:o,src:i,getFn:n}}function Ct(t){return yt(t)?t:t.split(".")}function Lt(t){return yt(t)?t.join("."):t}var Rt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(t,e){let r=[],i=!1;const o=(t,e,n)=>{if($t(t))if(e[n]){const a=t[e[n]];if(!$t(a))return;if(n===e.length-1&&(_t(a)||bt(a)||xt(a)))r.push(function(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)}(a));else if(yt(a)){i=!0;for(let t=0,r=a.length;t<r;t+=1)o(a[t],e,n+1)}else e.length&&o(a,e,n+1)}else r.push(t)};return o(t,_t(e)?e.split("."):e,0),i?r:r[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const Pt=/[^ ]+/g;class It{constructor({getFn:t=Rt.getFn,fieldNormWeight:e=Rt.fieldNormWeight}={}){this.norm=function(t=1,e=3){const r=new Map,i=Math.pow(10,e);return{get(e){const o=e.match(Pt).length;if(r.has(o))return r.get(o);const n=1/Math.pow(o,.5*t),a=parseFloat(Math.round(n*i)/i);return r.set(o,a),a},clear(){r.clear()}}}(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((t,e)=>{this._keysMap[t.id]=e})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,_t(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();_t(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,r=this.size();e<r;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!$t(t)||At(t))return;let r={v:t,i:e,n:this.norm.get(t)};this.records.push(r)}_addObject(t,e){let r={i:e,$:{}};this.keys.forEach((e,i)=>{let o=e.getFn?e.getFn(t):this.getFn(t,e.path);if($t(o))if(yt(o)){let t=[];const e=[{nestedArrIndex:-1,value:o}];for(;e.length;){const{nestedArrIndex:r,value:i}=e.pop();if($t(i))if(_t(i)&&!At(i)){let e={v:i,i:r,n:this.norm.get(i)};t.push(e)}else yt(i)&&i.forEach((t,r)=>{e.push({nestedArrIndex:r,value:t})})}r.$[i]=t}else if(_t(o)&&!At(o)){let t={v:o,n:this.norm.get(o)};r.$[i]=t}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Ot(t,e,{getFn:r=Rt.getFn,fieldNormWeight:i=Rt.fieldNormWeight}={}){const o=new It({getFn:r,fieldNormWeight:i});return o.setKeys(t.map(Et)),o.setSources(e),o.create(),o}function Ht(t,{errors:e=0,currentLocation:r=0,expectedLocation:i=0,distance:o=Rt.distance,ignoreLocation:n=Rt.ignoreLocation}={}){const a=e/t.length;if(n)return a;const s=Math.abs(i-r);return o?a+s/o:s?1:a}function Nt(t,e,r,{location:i=Rt.location,distance:o=Rt.distance,threshold:n=Rt.threshold,findAllMatches:a=Rt.findAllMatches,minMatchCharLength:s=Rt.minMatchCharLength,includeMatches:c=Rt.includeMatches,ignoreLocation:l=Rt.ignoreLocation}={}){if(e.length>32)throw new Error(`Pattern length exceeds max of ${32}.`);const h=e.length,d=t.length,p=Math.max(0,Math.min(i,d));let u=n,m=p;const g=s>1||c,f=g?Array(d):[];let v;for(;(v=t.indexOf(e,m))>-1;){let t=Ht(e,{currentLocation:v,expectedLocation:p,distance:o,ignoreLocation:l});if(u=Math.min(t,u),m=v+h,g){let t=0;for(;t<h;)f[v+t]=1,t+=1}}m=-1;let y=[],_=1,b=h+d;const x=1<<h-1;for(let i=0;i<h;i+=1){let n=0,s=b;for(;n<s;){Ht(e,{errors:i,currentLocation:p+s,expectedLocation:p,distance:o,ignoreLocation:l})<=u?n=s:b=s,s=Math.floor((b-n)/2+n)}b=s;let c=Math.max(1,p-s+1),v=a?d:Math.min(p+s,d)+h,w=Array(v+2);w[v+1]=(1<<i)-1;for(let n=v;n>=c;n-=1){let a=n-1,s=r[t.charAt(a)];if(g&&(f[a]=+!!s),w[n]=(w[n+1]<<1|1)&s,i&&(w[n]|=(y[n+1]|y[n])<<1|1|y[n+1]),w[n]&x&&(_=Ht(e,{errors:i,currentLocation:a,expectedLocation:p,distance:o,ignoreLocation:l}),_<=u)){if(u=_,m=a,m<=p)break;c=Math.max(1,2*p-m)}}if(Ht(e,{errors:i+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:l})>u)break;y=w}const w={isMatch:m>=0,score:Math.max(.001,_)};if(g){const t=function(t=[],e=Rt.minMatchCharLength){let r=[],i=-1,o=-1,n=0;for(let a=t.length;n<a;n+=1){let a=t[n];a&&-1===i?i=n:a||-1===i||(o=n-1,o-i+1>=e&&r.push([i,o]),i=-1)}return t[n-1]&&n-i>=e&&r.push([i,n-1]),r}(f,s);t.length?c&&(w.indices=t):w.isMatch=!1}return w}function jt(t){let e={};for(let r=0,i=t.length;r<i;r+=1){const o=t.charAt(r);e[o]=(e[o]||0)|1<<i-r-1}return e}class zt{constructor(t,{location:e=Rt.location,threshold:r=Rt.threshold,distance:i=Rt.distance,includeMatches:o=Rt.includeMatches,findAllMatches:n=Rt.findAllMatches,minMatchCharLength:a=Rt.minMatchCharLength,isCaseSensitive:s=Rt.isCaseSensitive,ignoreLocation:c=Rt.ignoreLocation}={}){if(this.options={location:e,threshold:r,distance:i,includeMatches:o,findAllMatches:n,minMatchCharLength:a,isCaseSensitive:s,ignoreLocation:c},this.pattern=s?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(t,e)=>{this.chunks.push({pattern:t,alphabet:jt(t),startIndex:e})},h=this.pattern.length;if(h>32){let t=0;const e=h%32,r=h-e;for(;t<r;)l(this.pattern.substr(t,32),t),t+=32;if(e){const t=h-32;l(this.pattern.substr(t),t)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:r}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return r&&(e.indices=[[0,t.length-1]]),e}const{location:i,distance:o,threshold:n,findAllMatches:a,minMatchCharLength:s,ignoreLocation:c}=this.options;let l=[],h=0,d=!1;this.chunks.forEach(({pattern:e,alphabet:p,startIndex:u})=>{const{isMatch:m,score:g,indices:f}=Nt(t,e,p,{location:i+u,distance:o,threshold:n,findAllMatches:a,minMatchCharLength:s,includeMatches:r,ignoreLocation:c});m&&(d=!0),h+=g,m&&f&&(l=[...l,...f])});let p={isMatch:d,score:d?h/this.chunks.length:1};return d&&r&&(p.indices=l),p}}class Dt{constructor(t){this.pattern=t}static isMultiMatch(t){return Ut(t,this.multiRegex)}static isSingleMatch(t){return Ut(t,this.singleRegex)}search(){}}function Ut(t,e){const r=t.match(e);return r?r[1]:null}class Tt extends Dt{constructor(t,{location:e=Rt.location,threshold:r=Rt.threshold,distance:i=Rt.distance,includeMatches:o=Rt.includeMatches,findAllMatches:n=Rt.findAllMatches,minMatchCharLength:a=Rt.minMatchCharLength,isCaseSensitive:s=Rt.isCaseSensitive,ignoreLocation:c=Rt.ignoreLocation}={}){super(t),this._bitapSearch=new zt(t,{location:e,threshold:r,distance:i,includeMatches:o,findAllMatches:n,minMatchCharLength:a,isCaseSensitive:s,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Ft extends Dt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,r=0;const i=[],o=this.pattern.length;for(;(e=t.indexOf(this.pattern,r))>-1;)r=e+o,i.push([e,r-1]);const n=!!i.length;return{isMatch:n,score:n?0:1,indices:i}}}const Vt=[class extends Dt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},Ft,class extends Dt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends Dt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends Dt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends Dt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends Dt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},Tt],Bt=Vt.length,Wt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const qt=new Set([Tt.type,Ft.type]);class Kt{constructor(t,{isCaseSensitive:e=Rt.isCaseSensitive,includeMatches:r=Rt.includeMatches,minMatchCharLength:i=Rt.minMatchCharLength,ignoreLocation:o=Rt.ignoreLocation,findAllMatches:n=Rt.findAllMatches,location:a=Rt.location,threshold:s=Rt.threshold,distance:c=Rt.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:r,minMatchCharLength:i,findAllMatches:n,ignoreLocation:o,location:a,threshold:s,distance:c},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map(t=>{let r=t.trim().split(Wt).filter(t=>t&&!!t.trim()),i=[];for(let t=0,o=r.length;t<o;t+=1){const o=r[t];let n=!1,a=-1;for(;!n&&++a<Bt;){const t=Vt[a];let r=t.isMultiMatch(o);r&&(i.push(new t(r,e)),n=!0)}if(!n)for(a=-1;++a<Bt;){const t=Vt[a];let r=t.isSingleMatch(o);if(r){i.push(new t(r,e));break}}}return i})}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let o=0,n=[],a=0;for(let i=0,s=e.length;i<s;i+=1){const s=e[i];n.length=0,o=0;for(let e=0,i=s.length;e<i;e+=1){const i=s[e],{isMatch:c,indices:l,score:h}=i.search(t);if(!c){a=0,o=0,n.length=0;break}if(o+=1,a+=h,r){const t=i.constructor.type;qt.has(t)?n=[...n,...l]:n.push(l)}}if(o){let t={isMatch:!0,score:a/o};return r&&(t.indices=n),t}}return{isMatch:!1,score:1}}}const Zt=[];function Jt(t,e){for(let r=0,i=Zt.length;r<i;r+=1){let i=Zt[r];if(i.condition(t,e))return new i(t,e)}return new zt(t,e)}const Qt="$and",Gt="$or",Xt="$path",Yt="$val",te=t=>!(!t[Qt]&&!t[Gt]),ee=t=>({[Qt]:Object.keys(t).map(e=>({[e]:t[e]}))});function re(t,e,{auto:r=!0}={}){const i=t=>{let o=Object.keys(t);const n=(t=>!!t[Xt])(t);if(!n&&o.length>1&&!te(t))return i(ee(t));if((t=>!yt(t)&&wt(t)&&!te(t))(t)){const i=n?t[Xt]:o[0],a=n?t[Yt]:t[i];if(!_t(a))throw new Error((t=>"Invalid value for key "+t)(i));const s={keyId:Lt(i),pattern:a};return r&&(s.searcher=Jt(a,e)),s}let a={children:[],operator:o[0]};return o.forEach(e=>{const r=t[e];yt(r)&&r.forEach(t=>{a.children.push(i(t))})}),a};return te(t)||(t=ee(t)),i(t)}function ie(t,e){const r=t.matches;e.matches=[],$t(r)&&r.forEach(t=>{if(!$t(t.indices)||!t.indices.length)return;const{indices:r,value:i}=t;let o={indices:r,value:i};t.key&&(o.key=t.key.src),t.idx>-1&&(o.refIndex=t.idx),e.matches.push(o)})}function oe(t,e){e.score=t.score}class ne{constructor(t,e={},r){this.options={...Rt,...e},this.options.useExtendedSearch,this._keyStore=new St(this.options.keys),this.setCollection(t,r)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof It))throw new Error("Incorrect 'index' type");this._myIndex=e||Ot(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){$t(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];t(o,r)&&(this.removeAt(r),r-=1,i-=1,e.push(o))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:n,ignoreFieldNorm:a}=this.options;let s=_t(t)?_t(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=Rt.ignoreFieldNorm}){t.forEach(t=>{let r=1;t.matches.forEach(({key:t,norm:i,score:o})=>{const n=t?t.weight:null;r*=Math.pow(0===o&&n?Number.EPSILON:o,(n||1)*(e?1:i))}),t.score=r})}(s,{ignoreFieldNorm:a}),o&&s.sort(n),bt(e)&&e>-1&&(s=s.slice(0,e)),function(t,e,{includeMatches:r=Rt.includeMatches,includeScore:i=Rt.includeScore}={}){const o=[];return r&&o.push(ie),i&&o.push(oe),t.map(t=>{const{idx:r}=t,i={item:e[r],refIndex:r};return o.length&&o.forEach(e=>{e(t,i)}),i})}(s,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const e=Jt(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:t,i:r,n:o})=>{if(!$t(t))return;const{isMatch:n,score:a,indices:s}=e.searchIn(t);n&&i.push({item:t,idx:r,matches:[{score:a,value:t,norm:o,indices:s}]})}),i}_searchLogical(t){const e=re(t,this.options),r=(t,e,i)=>{if(!t.children){const{keyId:r,searcher:o}=t,n=this._findMatches({key:this._keyStore.get(r),value:this._myIndex.getValueForItemAtKeyId(e,r),searcher:o});return n&&n.length?[{idx:i,item:e,matches:n}]:[]}const o=[];for(let n=0,a=t.children.length;n<a;n+=1){const a=t.children[n],s=r(a,e,i);if(s.length)o.push(...s);else if(t.operator===Qt)return[]}return o},i=this._myIndex.records,o={},n=[];return i.forEach(({$:t,i:i})=>{if($t(t)){let a=r(e,t,i);a.length&&(o[i]||(o[i]={idx:i,item:t,matches:[]},n.push(o[i])),a.forEach(({matches:t})=>{o[i].matches.push(...t)}))}}),n}_searchObjectList(t){const e=Jt(t,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:t,i:i})=>{if(!$t(t))return;let n=[];r.forEach((r,i)=>{n.push(...this._findMatches({key:r,value:t[i],searcher:e}))}),n.length&&o.push({idx:i,item:t,matches:n})}),o}_findMatches({key:t,value:e,searcher:r}){if(!$t(e))return[];let i=[];if(yt(e))e.forEach(({v:e,i:o,n:n})=>{if(!$t(e))return;const{isMatch:a,score:s,indices:c}=r.searchIn(e);a&&i.push({score:s,key:t,value:e,idx:o,norm:n,indices:c})});else{const{v:o,n:n}=e,{isMatch:a,score:s,indices:c}=r.searchIn(o);a&&i.push({score:s,key:t,value:o,norm:n,indices:c})}return i}}ne.version="6.6.2",ne.createIndex=Ot,ne.parseIndex=function(t,{getFn:e=Rt.getFn,fieldNormWeight:r=Rt.fieldNormWeight}={}){const{keys:i,records:o}=t,n=new It({getFn:e,fieldNormWeight:r});return n.setKeys(i),n.setIndexRecords(o),n},ne.config=Rt,ne.parseQuery=re,function(...t){Zt.push(...t)}(Kt);var ae={camera:"camera",edit:"Edit",delete:"Delete",back:"Back",confirm:"confirm",add_camera:"Add Camera",edit_camera:"Edit Camera",delete_camera:"Delete Camera",custom_camera:"Custom Camera",go_back:"Back"},se={verify_action:"This action can not be undone"},ce={cameras:"Search cameras",brands:"Search Brands",models:"Search Models"},le={integration:"Select type of Integration",name:"Camera Name (Obligatory)",still_image_url:"Static Image URL",stream_source:"Stream URL",username:"Username",password:"Password",record_video_of_camera:"Record Video of Camera",ip:"IP",number_of_cameras:"Number of cameras",advanced_options:"Advanced Options",authentication:"Select Authetication",verify_ssl:"Verify SSL",rtsp_transport:"Select RTSP Transport",framerate:"Framerate",channel:"Channel",still_url_door:"Still Image Door",stream_source_door:"Stream Door",add_multi_channels:"Add all channels?",issues:{missing_integration:"Select an integration type",name:"Camera name is required",duplicated_camera_name:"There is already a camera with that name",static_stream_source_missing:"No static or stream URL",ip_missing:"No IP address provided",n_cameras:"Number of cameras is not valid"}},he={common:ae,dialog_text:se,search:ce,form:le},de={camera:"Camera",edit:"Editar",delete:"Apagar",back:"Voltar"},pe={common:de};const ue={en:Object.freeze({__proto__:null,common:ae,dialog_text:se,search:ce,form:le,default:he}),pt:Object.freeze({__proto__:null,common:de,default:pe})};function me(t,e="",r=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let o;try{o=t.split(".").reduce((t,e)=>t[e],ue[i])}catch(e){o=t.split(".").reduce((t,e)=>t[e],ue.en)}return void 0===o&&(o=t.split(".").reduce((t,e)=>t[e],ue.en)),""!==e&&""!==r&&(o=o.replace(e,r)),o}let ge=class extends it{render(){return z`
      <ha-button-menu corner="BOTTOM_LEFT" @action=${this._handleAction}>
        <ha-icon-button slot="trigger" .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}></ha-icon-button>
        <mwc-list-item>
          <ha-svg-icon .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}></ha-svg-icon>
          ${me("common.edit")}
        </mwc-list-item>
        <!-- <div class="line"></div> -->
        <mwc-list-item class="delete-item">
          <ha-svg-icon .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}></ha-svg-icon>
          ${me("common.delete")}
        </mwc-list-item>
      </ha-button-menu>
    `}_handleAction(t){switch(t.detail.index){case 0:gt(this,"edit-camera",{cameraInfo:this.cameraInfo});break;case 1:gt(this,"delete-camera",{cameraInfo:this.cameraInfo})}}static get styles(){return c`
      :host {
        display: inline-block;
        position: relative;
      }
      ::slotted([disabled]) {
        color: var(--disabled-text-color);
      }
      mwc-list-item {
        /* font-family: "Roboto"; */
        font-style: normal;
        font-weight: 400;
        text-align: center;
      }
      .delete-item {
        color: #ff4747;
      }
      .line {
        width: 112px;
        height: 47px;
        position: absolute;
        border-top: 1px solid #7b7b7b;
        transform: matrix(1, 0.01, -0.01, 1, 0, 0);
      }
      ha-svg-icon {
        margin-right: 10px;
      }
    `}};e([st({attribute:!1})],ge.prototype,"hass",void 0),e([st({attribute:!1})],ge.prototype,"cameraInfo",void 0),ge=e([nt("camera-button-menu")],ge);const fe=c`
  a {
    text-decoration: var(--hcv-text-decoration-link);
    color: var(--hcv-text-color-link);
  }
`,ve=c`
  ha-svg-icon {
    color: var(--hcv-color-icon);
  }
`,ye=c`
  mwc-button[raised] {
    border-radius: 4px;
  }
  mwc-button[raised] > ha-circular-progress {
    --mdc-theme-primary: var(--hcv-text-color-primary);
  }
`;c`
  *::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  *::-webkit-scrollbar-track {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: var(--scrollbar-thumb-color);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--accent-color);
    border-radius: 0.3em;
  }
  .scroll {
    overflow-y: auto;
    scrollbar-color: var(--scrollbar-thumb-color) transparent;
    scrollbar-width: thin;
  }
`;const _e=c`
  button.link {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;
  }
`,be=c`
  :host {
    font-family: var(--paper-font-body1_-_font-family);
    -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
    font-size: var(--paper-font-body1_-_font-size);
    font-weight: var(--paper-font-body1_-_font-weight);
    line-height: var(--paper-font-body1_-_line-height);
  }

  app-header-layout,
  ha-app-layout {
    background-color: var(--primary-background-color, var(--primary-background));
  }

  app-header,
  app-toolbar {
    background-color: var(--app-header-background-color);
    font-weight: 400;
    color: var(--header-text-color);
  }

  app-toolbar {
    height: var(--header-height);
    border-bottom: 1px solid var(--divider-color);
    box-sizing: border-box;
  }

  app-header div[sticky] {
    height: 104px;
  }

  app-toolbar [main-title] {
    margin-left: 20px;
  }

  h1 {
    font-family: var(--paper-font-headline_-_font-family);
    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
    white-space: var(--paper-font-headline_-_white-space);
    overflow: var(--paper-font-headline_-_overflow);
    text-overflow: var(--paper-font-headline_-_text-overflow);
    font-size: var(--paper-font-headline_-_font-size);
    font-weight: var(--paper-font-headline_-_font-weight);
    line-height: var(--paper-font-headline_-_line-height);
  }

  h2 {
    font-family: var(--paper-font-title_-_font-family);
    -webkit-font-smoothing: var(--paper-font-title_-_-webkit-font-smoothing);
    white-space: var(--paper-font-title_-_white-space);
    overflow: var(--paper-font-title_-_overflow);
    text-overflow: var(--paper-font-title_-_text-overflow);
    font-size: var(--paper-font-title_-_font-size);
    font-weight: var(--paper-font-title_-_font-weight);
    line-height: var(--paper-font-title_-_line-height);
  }

  h3 {
    font-family: var(--paper-font-subhead_-_font-family);
    -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
    white-space: var(--paper-font-subhead_-_white-space);
    overflow: var(--paper-font-subhead_-_overflow);
    text-overflow: var(--paper-font-subhead_-_text-overflow);
    font-size: var(--paper-font-subhead_-_font-size);
    font-weight: var(--paper-font-subhead_-_font-weight);
    line-height: var(--paper-font-subhead_-_line-height);
  }

  a {
    color: var(--accent-color) !important;
  }

  .secondary {
    color: var(--secondary-text-color);
  }

  .error {
    color: var(--error-color);
  }

  .warning {
    color: var(--error-color);
  }

  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }

  ${_e}

  .card-actions a {
    text-decoration: none;
  }

  .card-actions .warning {
    --mdc-theme-primary: var(--error-color);
  }

  .layout.horizontal,
  .layout.vertical {
    display: flex;
  }
  @media only screen and (max-width: 800px) {
    .layout.horizontal,
    .layout.vertical {
      /* display: block; */
    }
  }
  .layout.inline {
    display: inline-flex;
  }
  .layout.horizontal {
    flex-direction: row;
  }
  .layout.vertical {
    flex-direction: column;
  }
  .layout.wrap {
    flex-wrap: wrap;
  }
  .layout.no-wrap {
    flex-wrap: nowrap;
  }
  .layout.center,
  .layout.center-center {
    align-items: center;
  }
  .layout.bottom {
    align-items: flex-end;
  }
  .layout.center-justified,
  .layout.center-center {
    justify-content: center;
  }
  .flex {
    flex: 1;
    flex-basis: 0.000000001px;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }
  .layout.justified {
    justify-content: space-between;
  }
`;c`
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-heading-ink-color: var(--primary-text-color);
    --mdc-dialog-content-ink-color: var(--primary-text-color);
    --justify-action-buttons: space-between;
    --mdc-switch__pointer_events: auto;
  }

  ha-dialog .form {
    padding-bottom: 24px;
    color: var(--primary-text-color);
  }

  a {
    color: var(--accent-color) !important;
  }

  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --mdc-dialog-min-width: calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));
      --mdc-dialog-max-width: calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));
      --mdc-dialog-min-height: 100%;
      --mdc-dialog-max-height: 100%;
      --vertial-align-dialog: flex-end;
      --ha-dialog-border-radius: 0px;
    }
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  .error {
    color: var(--error-color);
  }
`,c`
  .ha-scrollbar::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
  }

  .ha-scrollbar::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background: var(--scrollbar-thumb-color);
  }

  .ha-scrollbar {
    overflow-y: auto;
    scrollbar-color: var(--scrollbar-thumb-color) transparent;
    scrollbar-width: thin;
  }
`,c`
  body {
    background-color: var(--primary-background-color, var(--primary-background));
    color: var(--primary-text-color);
    height: calc(100vh - 32px);
    width: 100vw;
  }
`;const xe=[be,ve,c`
  .warning {
    color: var(--hcv-color-warning);
  }
  .pending_update {
    color: var(--hcv-color-update);
  }
  .pending_restart,
  .error,
  .uninstall {
    color: var(--hcv-color-error);
    --mdc-theme-primary: var(--hcv-color-error);
  }
  .header {
    opacity: var(--dark-primary-opacity);
    padding: 8px 0 4px 16px;
  }
`,fe,ye];let we=class extends it{render(){return z`
      <ha-card narrow=${this.narrow}>
        <div class="top-row">
          <!-- <button-recorder> @click=${this.handleRecord} </button-recorder> -->
          <camera-button-menu .hass=${this.hass} .cameraInfo=${this.cameraInfo}></camera-button-menu>
        </div>
        <ha-svg-icon class="main-camera-icon" path=${"M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"} @click=${this.more_info}></ha-svg-icon>
        <div class="card-title">${this.cameraInfo.name}</div>
      </ha-card>
    `}more_info(t){this.cameraInfo.entityID,console.log("Not implemented")}static get styles(){return[xe,c`
        ha-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          position: relative;
          align-items: center;
          text-align: center;
          padding: 1% 1% 1% 1%;
          height: 100%;
          font-size: 1.2rem;
        }
        ha-svg-icon {
          cursor: pointer;
        }
        .top-row {
          width: 100%;
          height: 20%;
          display: inline-block;
        }
        .record-on {
          float: left;
          cursor: pointer;
          color: #ff4747;
        }
        .record-off {
          float: left;
          cursor: pointer;
          color: #00ff00;
        }
        camera-button-menu {
          float: right;
        }
        .main-camera-icon {
          width: 70%;
          height: 60%;
        }
        .card-title {
          font-size: 1.1rem;
          width: 135px;
          font-weight: bold;
          white-space: nowrap;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          justify-content: space-between;
        }

        @media only screen and (max-width: 500px) {
          .card-title {
            font-size: 1.2rem;
            width: 137px;
            overflow: hidden;
            font-weight: bold;
            white-space: nowrap;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            justify-content: space-between;
          }
        }
        .card-content {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4% 0px;
          font-size: 1.2rem;
          height: 100%;
          box-sizing: border-box;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
        }

        .card-actions {
          border-top: none;
          bottom: 0;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
          padding: 5px;
        }
        .group-header {
          height: auto;
          align-content: center;
        }
        .group-header h1 {
          margin: 0;
          padding: 8px 16px;
          font-size: 22px;
        }
        h1 {
          margin-top: 0;
          min-height: 24px;
        }

        .pointer {
          cursor: pointer;
        }
        .description {
          opacity: var(--dark-primary-opacity);
          font-size: 14px;
          padding: 8px 16px;
        }

        .status-new {
          border-color: var(--hcv-color-new);
          --mdc-theme-primary: var(--hcv-color-new);
        }

        .status-update {
          border-color: var(--hcv-color-update);
        }

        .status-issue {
          border-color: var(--hcv-color-error);
        }

        .new-header {
          background-color: var(--hcv-color-new);
          color: var(--hcv-text-color-on-background);
        }

        .issue-header {
          background-color: var(--hcv-color-error);
          color: var(--hcv-text-color-on-background);
        }

        .update-header {
          background-color: var(--hcv-color-update);
          color: var(--hcv-text-color-on-background);
        }

        .default-header {
          padding: 2px 0 !important;
        }

        mwc-button.update-header {
          --mdc-theme-primary: var(--hcv-color-update);
          --mdc-theme-on-primary: var(--hcv-text-color-on-background);
        }

        .status-border {
          border-style: solid;
          border-width: min(var(--ha-card-border-width, 1px), 10px);
        }

        .status-header {
          top: 0;
          padding: 6px 1px;
          margin: -1px;
          width: 100%;
          font-weight: 500;
          text-align: center;
          left: 0;
          border-top-left-radius: var(--ha-card-border-radius, 4px);
          border-top-right-radius: var(--ha-card-border-radius, 4px);
        }

        ha-card[narrow] {
          width: calc(100% - 24px);
          margin: 11px;
        }

        ha-chip {
          padding: 4px;
          margin-top: 3px;
        }
      `]}};e([st({attribute:!1})],we.prototype,"hass",void 0),e([st({attribute:!1})],we.prototype,"cameraInfo",void 0),e([st({type:Boolean})],we.prototype,"record",void 0),e([st({type:Boolean})],we.prototype,"narrow",void 0),we=e([nt("raceland-camera-card")],we);
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
class $e{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}let Ae=class extends it{constructor(){super(...arguments),this._shouldRenderRipple=!1,this._rippleHandlers=new $e(()=>(this._shouldRenderRipple=!0,this._ripple))}render(){return z`
      <ha-card
        @click=${this._openAddCameraDialog}
        class="add-new-camera"
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
      >
        <ha-svg-icon .path=${r} id="icon"></ha-svg-icon>
        <div id="text">${me("common.add_camera")}</div>
        ${this._shouldRenderRipple?z`<mwc-ripple></mwc-ripple>`:""}
      </ha-card>
    `}_openAddCameraDialog(t){gt(this,"add-new-camera")}handleRippleActivate(t){this._rippleHandlers.startPress(t)}handleRippleDeactivate(){this._rippleHandlers.endPress()}handleRippleFocus(){this._rippleHandlers.startFocus()}handleRippleBlur(){this._rippleHandlers.endFocus()}static get styles(){return[c`
        ha-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          position: relative;
          align-items: center;
          text-align: center;
          padding: 1% 1% 1% 1%;
          height: 100%;
          font-size: 1.2rem;
        }

        .add-new-camera {
          background-color: var(--card-background-color, white);
          box-shadow: var(
            --mdc-fab-box-shadow,
            0px 3px 5px -1px rgba(0, 0, 0, 0.2),
            0px 6px 10px 0px rgba(0, 0, 0, 0.14),
            0px 1px 18px 0px rgba(0, 0, 0, 0.12)
          );
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 4% 0;
          font-size: 2.3rem;
          height: 100%;
          box-sizing: border-box;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border-radius: 1.5rem;
          font-weight: 550;
        }
        #text {
          text-align: center;
          margin-top: 10%;
          width: 60%;
          font-size: 2rem;
          font-weight: 550;
        }
        .add-new-camera:hover > #icon {
          background-color: var(--sidebar-selected-icon-color);
        }
        .add-new-camera:hover > #text {
          color: var(--sidebar-selected-icon-color);
        }
        #icon {
          background-color: rgb(144, 144, 145);
          color: white;
          border-radius: 100%;
          width: 30%;
          height: auto;
        }

        .description {
          opacity: var(--dark-primary-opacity);
          font-size: 14px;
          padding: 8px 16px;
        }

        .status-new {
          border-color: var(--hcv-color-new);
          --mdc-theme-primary: var(--hcv-color-new);
        }

        .status-update {
          border-color: var(--hcv-color-update);
        }

        .status-issue {
          border-color: var(--hcv-color-error);
        }

        .new-header {
          background-color: var(--hcv-color-new);
          color: var(--hcv-text-color-on-background);
        }

        .issue-header {
          background-color: var(--hcv-color-error);
          color: var(--hcv-text-color-on-background);
        }

        .update-header {
          background-color: var(--hcv-color-update);
          color: var(--hcv-text-color-on-background);
        }

        .default-header {
          padding: 2px 0 !important;
        }

        .status-border {
          border-style: solid;
          border-width: min(var(--ha-card-border-width, 1px), 10px);
        }

        .status-header {
          top: 0;
          padding: 6px 1px;
          margin: -1px;
          width: 100%;
          font-weight: 500;
          text-align: center;
          left: 0;
          border-top-left-radius: var(--ha-card-border-radius, 4px);
          border-top-right-radius: var(--ha-card-border-radius, 4px);
        }

        ha-card[narrow] {
          width: calc(100% - 24px);
          margin: 11px;
        }

        ha-chip {
          padding: 4px;
          margin-top: 3px;
        }
      `]}};function ke(t){const e=[];for(const[r,i]of Object.entries(t))"camera"===r.split(".")[0]&&e.push({name:i.attributes.friendly_name,entityID:i.entity_id,state:i.state});return e}e([st({attribute:!1})],Ae.prototype,"hass",void 0),e([st({type:Boolean})],Ae.prototype,"narrow",void 0),e([ct()],Ae.prototype,"_shouldRenderRipple",void 0),e([
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function(t){return lt({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("mwc-ripple")],Ae.prototype,"_ripple",void 0),e([function(t){return lt({finisher:(e,r)=>{Object.assign(e.prototype[r],t)}})}({passive:!0})],Ae.prototype,"handleRippleActivate",null),Ae=e([nt("new-camera-card")],Ae);const Me=()=>Promise.resolve().then((function(){return Le})),Se=t=>class extends t{constructor(){super(...arguments),this.__provideHass=[]}provideHass(t){this.__provideHass.push(t),t.hass=this.hass}updated(t){super.updated(t),t.has("hass")&&this.__provideHass.forEach(t=>{t.hass=this.hass})}};class Ee extends(Se(it)){connectedCallback(){super.connectedCallback(),void 0===this.racelandDashoardData&&(this.racelandDashoardData={language:"en",updates:[],resources:[],removed:[],sections:[],localize:(t,e)=>{var r;return me((null===(r=this.racelandDashoardData)||void 0===r?void 0:r.language)||"en",t,e)}}),this.addEventListener("update-camera-dashboard",()=>{console.log("fired the event listener in the mixin class"),this._updateCameraDashboard()})}_updateCameraDashboard(){console.log("the updateCameraDashboard is being fired");let t=!1;Object.keys(null).forEach(e=>{JSON.stringify(this.racelandDashoardData[e])!==JSON.stringify(null[e])&&(t=!0)}),t&&(this.racelandDashoardData=Object.assign(Object.assign({},this.racelandDashoardData),null))}updated(t){super.updated(t)}}e([st({attribute:!1})],Ee.prototype,"racelandDashoardData",void 0);t.MyAlarmPanel=class extends Ee{constructor(){super(...arguments),this._filter="",this._filterCameras=function(t,e){var r;void 0===e&&(e=vt);var i,o=[],n=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return n&&r===this&&e(a,o)||(i=t.apply(this,a),n=!0,r=this,o=a),i}}((t,e)=>{if(!e)return t;let r=t;return r=new ne(r,{keys:["name"],isCaseSensitive:!1,minMatchCharLength:1,threshold:.2}).search(e).map(t=>t.item),r})}async firstUpdated(t){super.firstUpdated(t),this.cameraDatabase=await(async t=>await t.connection.sendMessagePromise({type:"raceland-camera-dashboard/fetch_camera_db"}))(this.hass),this.cameraList=await ke(this.hass.states),this.addEventListener("teste-event",()=>{console.log("The EVENT was fired. Hurray!")}),this.addEventListener("open-teste-dialog",()=>{gt(this,"show-dialog",{dialogTag:"test-dialog",dialogImport:Me,dialogParams:{}})}),await(async()=>{if(customElements.get("ha-checkbox")&&customElements.get("ha-slider"))return;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");t.hass={panels:[{url_path:"tmp",component_name:"config"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const e=document.createElement("ha-panel-config");await e.routerOptions.routes.automation.load(),t.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-app-layout")})(),this.requestUpdate()}render(){if(!customElements.get("ha-app-layout"))return z`
        loading...
      `;const t=this._filterCameras(this.cameraList,this._filter);return z`
      ${window.screen.width<=900?z`
            <div id="header">
              <app-header fixed slot="header">
                <app-toolbar>
                  <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
                </app-toolbar>
              </app-header>
              <search-input
                .hass=${this.hass}
                .filter=${this._filter}
                @value-changed=${this._handleSearchChange}
                .label=${me("search.cameras")}
              ></search-input>
            </div>
          `:z`
            <search-input
              .hass=${this.hass}
              .filter=${this._filter}
              @value-changed=${this._handleSearchChange}
              .label=${me("search.cameras")}
            ></search-input>
          `}
      <div class="sep"></div>
      <div class="content">
        <div class="contentFather">
          <div
            class=${pt({"camera-list":0!==(null==t?void 0:t.length),"camera-list-one":0===(null==t?void 0:t.length)})}
          >
            ${0===(null==t?void 0:t.length)?z`
                  <new-camera-card .hass=${this.hass} .narrow=${this.narrow}></new-camera-card>
                `:null==t?void 0:t.map(t=>z`
                      <raceland-camera-card
                        .hass=${this.hass}
                        .narrow=${this.narrow}
                        .record=${!1}
                        .cameraInfo=${t}
                      ></raceland-camera-card>
                    `)}
          </div>
        </div>
      </div>
      ${0===(null==t?void 0:t.length)?z``:z`
            <ha-fab .label=${me("common.camera")} extended @click=${this._addCamera} })}>
              <ha-svg-icon slot="icon" .path=${r}></ha-svg-icon>
            </ha-fab>
          `}
    `}_addCamera(){gt(this,"open-teste-dialog")}_handleSearchChange(t){this._filter=t.detail.value}async _updateCameraDashboard(){this.registeredCameras=ke(this.hass.states),this.cameraList=await(async t=>await t.connection.sendMessagePromise({type:"raceland-camera-dashboard/fetch_camera_list"}))(this.hass)}static get styles(){return c`
      raceland-camera-card {
        display: flex;
        flex-direction: column;
        height: 80%;
        width: 100%;
        border-style: solid;
        border-width: min(var(--ha-card-border-width, 1px), 10px);
        border-color: transparent;
        border-radius: var(--ha-card-border-radius, 4px);
      }
      .camera-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: 160px;
      }
      search-input {
        display: block;
        --mdc-shape-small: var(--card-picker-search-shape);
        margin: var(--card-picker-search-margin);
        height: 55px;
        width: 100%;
      }
      new-camera-card {
        background-color: var(--card-background-color, white);
        box-shadow: var(
          --mdc-fab-box-shadow,
          0px 3px 5px -1px rgba(0, 0, 0, 0.2),
          0px 6px 10px 0px rgba(0, 0, 0, 0.14),
          0px 1px 18px 0px rgba(0, 0, 0, 0.12)
        );
        font-family: Arial;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 2.3rem;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
        position: relative;
        overflow: hidden;
        border-radius: 1.5rem;
        font-weight: 550;
        max-width: 400px;
      }
      ha-menu-button {
        color: var(--primary-text-color);
      }
      .camera-list-one {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 4px;
        margin-right: 4px;
      }
      /* @media only screen and (max-width: 1200px) {
        search-input {
          width: 100%;
          height: 55px;
        }
      } */
      @media only screen and (max-width: 900px) {
        .camera-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(178px, 1fr));
          grid-auto-rows: 130px;
          row-gap: 3%;
          margin-bottom: 15%;
          margin-right: 3px;
        }
        #header {
          display: flex;
          background-color: var(--card-background-color);
          height: 55px;
        }
        app-toolbar {
          padding: 0 12px;
        }
        search-input {
          width: 100%;
          height: 55px;
        }
        raceland-camera-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          border-style: solid;
          border-width: min(var(--ha-card-border-width, 1px), 10px);
          border-color: transparent;
          border-radius: var(--ha-card-border-radius, 4px);
        }
      }

      ha-quick-bar {
        display: none;
      }
      .sep {
        padding-top: 2%;
      }
      .content {
        width: 99.5%;
        height: 720px;
      }
      ha-fab {
        position: fixed;
        float: right;
        right: calc(16px + env(safe-area-inset-right));
        bottom: calc(16px + env(safe-area-inset-bottom));
        z-index: 1;
      }
    `}},e([st({attribute:!1})],t.MyAlarmPanel.prototype,"hass",void 0),e([st({attribute:!1})],t.MyAlarmPanel.prototype,"narrow",void 0),e([st({attribute:!1})],t.MyAlarmPanel.prototype,"registeredCameras",void 0),e([st({attribute:!1})],t.MyAlarmPanel.prototype,"newCameras",void 0),e([st({attribute:!1})],t.MyAlarmPanel.prototype,"cameraDatabase",void 0),e([st({attribute:!1})],t.MyAlarmPanel.prototype,"cameraInfo",void 0),e([st({attribute:!1})],t.MyAlarmPanel.prototype,"cameraList",void 0),e([ct()],t.MyAlarmPanel.prototype,"_filter",void 0),t.MyAlarmPanel=e([nt("alarm-panel")],t.MyAlarmPanel);let Ce=class extends it{constructor(){super(...arguments),this._currTabIndex=0,this.open=!0}async showDialog(t){console.log("Opening Dialog"),this.open=!0}closeDialog(){return this.open=!1,this._currTabIndex=0,!0}render(){return this.open?(gt(this,"teste-event"),z`
        <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        >
        <div class="cancel">
            <div slot="heading" class="heading">
            <ha-header-bar id="bar">
                <div slot="title" class="main-title" .title=${name}>
                </div>
                <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
                id="cancel"
                .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                ></ha-icon-button>
            </ha-header-bar>
            </div>
        </div>
        <div class="options">
            <ha-fab
            class="button-confirm"
            .label="Custom"
            extended
            >
            </ha-fab>
        </div>
        </ha-dialog>
  `):z``}};e([st({attribute:!1})],Ce.prototype,"hass",void 0),e([ct()],Ce.prototype,"_currTabIndex",void 0),e([ct()],Ce.prototype,"open",void 0),Ce=e([nt("test-dialog")],Ce);var Le=Object.freeze({__proto__:null,get HuiCreateDialogCamera(){return Ce}});Object.defineProperty(t,"__esModule",{value:!0})}({});
