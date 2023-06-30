!function(t){"use strict";function e(t,e,a,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,a,i);else for(var n=t.length-1;n>=0;n--)(r=t[n])&&(s=(o<3?r(s):o>3?r(e,a,s):r(e,a))||s);return o>3&&s&&Object.defineProperty(e,a,s),s}var a="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",i="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",r="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",o="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",s="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const n=window,c=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),d=new WeakMap;class h{constructor(t,e,a){if(this._$cssResult$=!0,a!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(c&&void 0===t){const a=void 0!==e&&1===e.length;a&&(t=d.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&d.set(e,t))}return t}toString(){return this.cssText}}const p=(t,...e)=>{const a=1===t.length?t[0]:e.reduce((e,a,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[i+1],t[0]);return new h(a,t,l)},m=c?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new h("string"==typeof t?t:t+"",void 0,l))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var u;const g=window,f=g.trustedTypes,v=f?f.emptyScript:"",b=g.reactiveElementPolyfillSupport,x={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},_=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:_};class w extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,a)=>{const i=this._$Ep(a,e);void 0!==i&&(this._$Ev.set(i,a),t.push(i))}),t}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const a="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,a,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const a of e)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(m(t))}else void 0!==t&&e.push(m(t));return e}static _$Ep(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,a;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(a=t.hostConnected)||void 0===a||a.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{c?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const a=document.createElement("style"),i=n.litNonce;void 0!==i&&a.setAttribute("nonce",i),a.textContent=e.cssText,t.appendChild(a)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$EO(t,e,a=y){var i;const r=this.constructor._$Ep(t,a);if(void 0!==r&&!0===a.reflect){const o=(void 0!==(null===(i=a.converter)||void 0===i?void 0:i.toAttribute)?a.converter:x).toAttribute(e,a.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var a;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(a=t.converter)||void 0===a?void 0:a.fromAttribute)?t.converter:x;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,a){let i=!0;void 0!==t&&(((a=a||this.constructor.getPropertyOptions(t)).hasChanged||_)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,a))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(a)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(a)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var $;w.finalized=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},null==b||b({ReactiveElement:w}),(null!==(u=g.reactiveElementVersions)&&void 0!==u?u:g.reactiveElementVersions=[]).push("1.6.1");const k=window,A=k.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,I=`lit$${(Math.random()+"").slice(9)}$`,S="?"+I,M=`<${S}>`,L=document,E=()=>L.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,R="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,z=/>/g,j=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,H=/"/g,U=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,q=L.createTreeWalker(L,129,null,!1),Z=(t,e)=>{const a=t.length-1,i=[];let r,o=2===e?"<svg>":"",s=T;for(let e=0;e<a;e++){const a=t[e];let n,c,l=-1,d=0;for(;d<a.length&&(s.lastIndex=d,c=s.exec(a),null!==c);)d=s.lastIndex,s===T?"!--"===c[1]?s=O:void 0!==c[1]?s=z:void 0!==c[2]?(U.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=j):void 0!==c[3]&&(s=j):s===j?">"===c[0]?(s=null!=r?r:T,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,n=c[1],s=void 0===c[3]?j:'"'===c[3]?H:N):s===H||s===N?s=j:s===O||s===z?s=T:(s=j,r=void 0);const h=s===j&&t[e+1].startsWith("/>")?" ":"";o+=s===T?a+M:l>=0?(i.push(n),a.slice(0,l)+"$lit$"+a.slice(l)+I+h):a+I+(-2===l?(i.push(void 0),e):h)}const n=o+(t[a]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==C?C.createHTML(n):n,i]};class K{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let r=0,o=0;const s=t.length-1,n=this.parts,[c,l]=Z(t,e);if(this.el=K.createElement(c,a),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=q.nextNode())&&n.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(I)){const a=l[o++];if(t.push(e),void 0!==a){const t=i.getAttribute(a.toLowerCase()+"$lit$").split(I),e=/([.?@])?(.*)/.exec(a);n.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?et:"@"===e[1]?at:X})}else n.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(U.test(i.tagName)){const t=i.textContent.split(I),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let a=0;a<e;a++)i.append(t[a],E()),q.nextNode(),n.push({type:2,index:++r});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===S)n.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(I,t+1));)n.push({type:7,index:r}),t+=I.length-1}r++}}static createElement(t,e){const a=L.createElement("template");return a.innerHTML=t,a}}function J(t,e,a=t,i){var r,o,s,n;if(e===B)return e;let c=void 0!==i?null===(r=a._$Co)||void 0===r?void 0:r[i]:a._$Cl;const l=D(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,a,i)),void 0!==i?(null!==(s=(n=a)._$Co)&&void 0!==s?s:n._$Co=[])[i]=c:a._$Cl=c),void 0!==c&&(e=J(t,c._$AS(t,e.values),c,i)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:a},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:L).importNode(a,!0);q.currentNode=r;let o=q.nextNode(),s=0,n=0,c=i[0];for(;void 0!==c;){if(s===c.index){let e;2===c.type?e=new Q(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new it(o,this,t)),this._$AV.push(e),c=i[++n]}s!==(null==c?void 0:c.index)&&(o=q.nextNode(),s++)}return r}v(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class Q{constructor(t,e,a,i){var r;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),D(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(L.createTextNode(t)),this._$AH=t}g(t){var e;const{values:a,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(a);else{const t=new G(r,this),e=t.u(this.options);t.v(a),this.$(e),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const r of t)i===e.length?e.push(a=new Q(this.k(E()),this.k(E()),this,this.options)):a=e[i],a._$AI(r),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,a,i,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,a,i){const r=this.strings;let o=!1;if(void 0===r)t=J(this,t,e,0),o=!D(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const i=t;let s,n;for(t=r[0],s=0;s<r.length-1;s++)n=J(this,i[a+s],e,s),n===B&&(n=this._$AH[s]),o||(o=!D(n)||n!==this._$AH[s]),n===V?t=V:t!==V&&(t+=(null!=n?n:"")+r[s+1]),this._$AH[s]=n}o&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}const tt=A?A.emptyScript:"";class et extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class at extends X{constructor(t,e,a,i,r){super(t,e,a,i,r),this.type=5}_$AI(t,e=this){var a;if((t=null!==(a=J(this,t,e,0))&&void 0!==a?a:V)===B)return;const i=this._$AH,r=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==a?a:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt=k.litHtmlPolyfillSupport;null==rt||rt(K,Q),(null!==($=k.litHtmlVersions)&&void 0!==$?$:k.litHtmlVersions=[]).push("2.7.3");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ot,st;class nt extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const a=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=a.firstChild),a}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,a)=>{var i,r;const o=null!==(i=null==a?void 0:a.renderBefore)&&void 0!==i?i:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==a?void 0:a.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new Q(e.insertBefore(E(),t),t,void 0,null!=a?a:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}nt.finalized=!0,nt._$litElement$=!0,null===(ot=globalThis.litElementHydrateSupport)||void 0===ot||ot.call(globalThis,{LitElement:nt});const ct=globalThis.litElementPolyfillSupport;null==ct||ct({LitElement:nt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const lt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:a,elements:i}=e;return{kind:a,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(a){a.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(a){a.createProperty(e.key,t)}};function ht(t){return(e,a)=>void 0!==a?((t,e,a)=>{e.constructor.createProperty(a,t)})(t,e,a):dt(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function pt(t){return ht({...t,state:!0})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const mt=({finisher:t,descriptor:e})=>(a,i)=>{var r;if(void 0===i){const i=null!==(r=a.originalKey)&&void 0!==r?r:a.key,o=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(a.key)}:{...a,key:i};return null!=t&&(o.finisher=function(e){t(e,i)}),o}{const r=a.constructor;void 0!==e&&Object.defineProperty(a,i,e(i)),null==t||t(r,i)}}
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
var ut;null===(ut=window.HTMLSlotElement)||void 0===ut||ut.prototype.assignedElements;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const gt=1;
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ft=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),t.type!==gt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var a,i;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(a=this.nt)||void 0===a?void 0:a.has(t))&&this.it.add(t);return this.render(e)}const r=t.element.classList;this.it.forEach(t=>{t in e||(r.remove(t),this.it.delete(t))});for(const t in e){const a=!!e[t];a===this.it.has(t)||(null===(i=this.nt)||void 0===i?void 0:i.has(t))||(a?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return B}});var vt=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function bt(t,e){if(t.length!==e.length)return!1;for(var a=0;a<t.length;a++)if(i=t[a],r=e[a],!(i===r||vt(i)&&vt(r)))return!1;var i,r;return!0}function xt(t,e){var a;void 0===e&&(e=bt);var i,r=[],o=!1;return function(){for(var s=[],n=0;n<arguments.length;n++)s[n]=arguments[n];return o&&a===this&&e(s,r)||(i=t.apply(this,s),o=!0,a=this,r=s),i}}function _t(t){return Array.isArray?Array.isArray(t):"[object Array]"===It(t)}function yt(t){return"string"==typeof t}function wt(t){return"number"==typeof t}function $t(t){return!0===t||!1===t||function(t){return kt(t)&&null!==t}(t)&&"[object Boolean]"==It(t)}function kt(t){return"object"==typeof t}function At(t){return null!=t}function Ct(t){return!t.trim().length}function It(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const St=Object.prototype.hasOwnProperty;class Mt{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(t=>{let a=Lt(t);e+=a.weight,this._keys.push(a),this._keyMap[a.id]=a,e+=a.weight}),this._keys.forEach(t=>{t.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Lt(t){let e=null,a=null,i=null,r=1,o=null;if(yt(t)||_t(t))i=t,e=Et(t),a=Dt(t);else{if(!St.call(t,"name"))throw new Error((t=>`Missing ${t} property in key`)("name"));const s=t.name;if(i=s,St.call(t,"weight")&&(r=t.weight,r<=0))throw new Error((t=>`Property 'weight' in key '${t}' must be a positive integer`)(s));e=Et(s),a=Dt(s),o=t.getFn}return{path:e,id:a,weight:r,src:i,getFn:o}}function Et(t){return _t(t)?t:t.split(".")}function Dt(t){return _t(t)?t.join("."):t}var Pt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(t,e){let a=[],i=!1;const r=(t,e,o)=>{if(At(t))if(e[o]){const s=t[e[o]];if(!At(s))return;if(o===e.length-1&&(yt(s)||wt(s)||$t(s)))a.push(function(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)}(s));else if(_t(s)){i=!0;for(let t=0,a=s.length;t<a;t+=1)r(s[t],e,o+1)}else e.length&&r(s,e,o+1)}else a.push(t)};return r(t,yt(e)?e.split("."):e,0),i?a:a[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const Rt=/[^ ]+/g;class Tt{constructor({getFn:t=Pt.getFn,fieldNormWeight:e=Pt.fieldNormWeight}={}){this.norm=function(t=1,e=3){const a=new Map,i=Math.pow(10,e);return{get(e){const r=e.match(Rt).length;if(a.has(r))return a.get(r);const o=1/Math.pow(r,.5*t),s=parseFloat(Math.round(o*i)/i);return a.set(r,s),s},clear(){a.clear()}}}(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((t,e)=>{this._keysMap[t.id]=e})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,yt(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();yt(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,a=this.size();e<a;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!At(t)||Ct(t))return;let a={v:t,i:e,n:this.norm.get(t)};this.records.push(a)}_addObject(t,e){let a={i:e,$:{}};this.keys.forEach((e,i)=>{let r=e.getFn?e.getFn(t):this.getFn(t,e.path);if(At(r))if(_t(r)){let t=[];const e=[{nestedArrIndex:-1,value:r}];for(;e.length;){const{nestedArrIndex:a,value:i}=e.pop();if(At(i))if(yt(i)&&!Ct(i)){let e={v:i,i:a,n:this.norm.get(i)};t.push(e)}else _t(i)&&i.forEach((t,a)=>{e.push({nestedArrIndex:a,value:t})})}a.$[i]=t}else if(yt(r)&&!Ct(r)){let t={v:r,n:this.norm.get(r)};a.$[i]=t}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function Ot(t,e,{getFn:a=Pt.getFn,fieldNormWeight:i=Pt.fieldNormWeight}={}){const r=new Tt({getFn:a,fieldNormWeight:i});return r.setKeys(t.map(Lt)),r.setSources(e),r.create(),r}function zt(t,{errors:e=0,currentLocation:a=0,expectedLocation:i=0,distance:r=Pt.distance,ignoreLocation:o=Pt.ignoreLocation}={}){const s=e/t.length;if(o)return s;const n=Math.abs(i-a);return r?s+n/r:n?1:s}function jt(t,e,a,{location:i=Pt.location,distance:r=Pt.distance,threshold:o=Pt.threshold,findAllMatches:s=Pt.findAllMatches,minMatchCharLength:n=Pt.minMatchCharLength,includeMatches:c=Pt.includeMatches,ignoreLocation:l=Pt.ignoreLocation}={}){if(e.length>32)throw new Error(`Pattern length exceeds max of ${32}.`);const d=e.length,h=t.length,p=Math.max(0,Math.min(i,h));let m=o,u=p;const g=n>1||c,f=g?Array(h):[];let v;for(;(v=t.indexOf(e,u))>-1;){let t=zt(e,{currentLocation:v,expectedLocation:p,distance:r,ignoreLocation:l});if(m=Math.min(t,m),u=v+d,g){let t=0;for(;t<d;)f[v+t]=1,t+=1}}u=-1;let b=[],x=1,_=d+h;const y=1<<d-1;for(let i=0;i<d;i+=1){let o=0,n=_;for(;o<n;){zt(e,{errors:i,currentLocation:p+n,expectedLocation:p,distance:r,ignoreLocation:l})<=m?o=n:_=n,n=Math.floor((_-o)/2+o)}_=n;let c=Math.max(1,p-n+1),v=s?h:Math.min(p+n,h)+d,w=Array(v+2);w[v+1]=(1<<i)-1;for(let o=v;o>=c;o-=1){let s=o-1,n=a[t.charAt(s)];if(g&&(f[s]=+!!n),w[o]=(w[o+1]<<1|1)&n,i&&(w[o]|=(b[o+1]|b[o])<<1|1|b[o+1]),w[o]&y&&(x=zt(e,{errors:i,currentLocation:s,expectedLocation:p,distance:r,ignoreLocation:l}),x<=m)){if(m=x,u=s,u<=p)break;c=Math.max(1,2*p-u)}}if(zt(e,{errors:i+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:l})>m)break;b=w}const w={isMatch:u>=0,score:Math.max(.001,x)};if(g){const t=function(t=[],e=Pt.minMatchCharLength){let a=[],i=-1,r=-1,o=0;for(let s=t.length;o<s;o+=1){let s=t[o];s&&-1===i?i=o:s||-1===i||(r=o-1,r-i+1>=e&&a.push([i,r]),i=-1)}return t[o-1]&&o-i>=e&&a.push([i,o-1]),a}(f,n);t.length?c&&(w.indices=t):w.isMatch=!1}return w}function Nt(t){let e={};for(let a=0,i=t.length;a<i;a+=1){const r=t.charAt(a);e[r]=(e[r]||0)|1<<i-a-1}return e}class Ht{constructor(t,{location:e=Pt.location,threshold:a=Pt.threshold,distance:i=Pt.distance,includeMatches:r=Pt.includeMatches,findAllMatches:o=Pt.findAllMatches,minMatchCharLength:s=Pt.minMatchCharLength,isCaseSensitive:n=Pt.isCaseSensitive,ignoreLocation:c=Pt.ignoreLocation}={}){if(this.options={location:e,threshold:a,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:n,ignoreLocation:c},this.pattern=n?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(t,e)=>{this.chunks.push({pattern:t,alphabet:Nt(t),startIndex:e})},d=this.pattern.length;if(d>32){let t=0;const e=d%32,a=d-e;for(;t<a;)l(this.pattern.substr(t,32),t),t+=32;if(e){const t=d-32;l(this.pattern.substr(t),t)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:a}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return a&&(e.indices=[[0,t.length-1]]),e}const{location:i,distance:r,threshold:o,findAllMatches:s,minMatchCharLength:n,ignoreLocation:c}=this.options;let l=[],d=0,h=!1;this.chunks.forEach(({pattern:e,alphabet:p,startIndex:m})=>{const{isMatch:u,score:g,indices:f}=jt(t,e,p,{location:i+m,distance:r,threshold:o,findAllMatches:s,minMatchCharLength:n,includeMatches:a,ignoreLocation:c});u&&(h=!0),d+=g,u&&f&&(l=[...l,...f])});let p={isMatch:h,score:h?d/this.chunks.length:1};return h&&a&&(p.indices=l),p}}class Ut{constructor(t){this.pattern=t}static isMultiMatch(t){return Ft(t,this.multiRegex)}static isSingleMatch(t){return Ft(t,this.singleRegex)}search(){}}function Ft(t,e){const a=t.match(e);return a?a[1]:null}class Bt extends Ut{constructor(t,{location:e=Pt.location,threshold:a=Pt.threshold,distance:i=Pt.distance,includeMatches:r=Pt.includeMatches,findAllMatches:o=Pt.findAllMatches,minMatchCharLength:s=Pt.minMatchCharLength,isCaseSensitive:n=Pt.isCaseSensitive,ignoreLocation:c=Pt.ignoreLocation}={}){super(t),this._bitapSearch=new Ht(t,{location:e,threshold:a,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:n,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Vt extends Ut{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,a=0;const i=[],r=this.pattern.length;for(;(e=t.indexOf(this.pattern,a))>-1;)a=e+r,i.push([e,a-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const Wt=[class extends Ut{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},Vt,class extends Ut{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends Ut{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends Ut{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends Ut{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends Ut{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},Bt],qt=Wt.length,Zt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const Kt=new Set([Bt.type,Vt.type]);class Jt{constructor(t,{isCaseSensitive:e=Pt.isCaseSensitive,includeMatches:a=Pt.includeMatches,minMatchCharLength:i=Pt.minMatchCharLength,ignoreLocation:r=Pt.ignoreLocation,findAllMatches:o=Pt.findAllMatches,location:s=Pt.location,threshold:n=Pt.threshold,distance:c=Pt.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:a,minMatchCharLength:i,findAllMatches:o,ignoreLocation:r,location:s,threshold:n,distance:c},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map(t=>{let a=t.trim().split(Zt).filter(t=>t&&!!t.trim()),i=[];for(let t=0,r=a.length;t<r;t+=1){const r=a[t];let o=!1,s=-1;for(;!o&&++s<qt;){const t=Wt[s];let a=t.isMultiMatch(r);a&&(i.push(new t(a,e)),o=!0)}if(!o)for(s=-1;++s<qt;){const t=Wt[s];let a=t.isSingleMatch(r);if(a){i.push(new t(a,e));break}}}return i})}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let r=0,o=[],s=0;for(let i=0,n=e.length;i<n;i+=1){const n=e[i];o.length=0,r=0;for(let e=0,i=n.length;e<i;e+=1){const i=n[e],{isMatch:c,indices:l,score:d}=i.search(t);if(!c){s=0,r=0,o.length=0;break}if(r+=1,s+=d,a){const t=i.constructor.type;Kt.has(t)?o=[...o,...l]:o.push(l)}}if(r){let t={isMatch:!0,score:s/r};return a&&(t.indices=o),t}}return{isMatch:!1,score:1}}}const Gt=[];function Qt(t,e){for(let a=0,i=Gt.length;a<i;a+=1){let i=Gt[a];if(i.condition(t,e))return new i(t,e)}return new Ht(t,e)}const Xt="$and",Yt="$or",te="$path",ee="$val",ae=t=>!(!t[Xt]&&!t[Yt]),ie=t=>({[Xt]:Object.keys(t).map(e=>({[e]:t[e]}))});function re(t,e,{auto:a=!0}={}){const i=t=>{let r=Object.keys(t);const o=(t=>!!t[te])(t);if(!o&&r.length>1&&!ae(t))return i(ie(t));if((t=>!_t(t)&&kt(t)&&!ae(t))(t)){const i=o?t[te]:r[0],s=o?t[ee]:t[i];if(!yt(s))throw new Error((t=>"Invalid value for key "+t)(i));const n={keyId:Dt(i),pattern:s};return a&&(n.searcher=Qt(s,e)),n}let s={children:[],operator:r[0]};return r.forEach(e=>{const a=t[e];_t(a)&&a.forEach(t=>{s.children.push(i(t))})}),s};return ae(t)||(t=ie(t)),i(t)}function oe(t,e){const a=t.matches;e.matches=[],At(a)&&a.forEach(t=>{if(!At(t.indices)||!t.indices.length)return;const{indices:a,value:i}=t;let r={indices:a,value:i};t.key&&(r.key=t.key.src),t.idx>-1&&(r.refIndex=t.idx),e.matches.push(r)})}function se(t,e){e.score=t.score}class ne{constructor(t,e={},a){this.options={...Pt,...e},this.options.useExtendedSearch,this._keyStore=new Mt(this.options.keys),this.setCollection(t,a)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof Tt))throw new Error("Incorrect 'index' type");this._myIndex=e||Ot(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){At(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let a=0,i=this._docs.length;a<i;a+=1){const r=this._docs[a];t(r,a)&&(this.removeAt(a),a-=1,i-=1,e.push(r))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:a,includeScore:i,shouldSort:r,sortFn:o,ignoreFieldNorm:s}=this.options;let n=yt(t)?yt(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=Pt.ignoreFieldNorm}){t.forEach(t=>{let a=1;t.matches.forEach(({key:t,norm:i,score:r})=>{const o=t?t.weight:null;a*=Math.pow(0===r&&o?Number.EPSILON:r,(o||1)*(e?1:i))}),t.score=a})}(n,{ignoreFieldNorm:s}),r&&n.sort(o),wt(e)&&e>-1&&(n=n.slice(0,e)),function(t,e,{includeMatches:a=Pt.includeMatches,includeScore:i=Pt.includeScore}={}){const r=[];return a&&r.push(oe),i&&r.push(se),t.map(t=>{const{idx:a}=t,i={item:e[a],refIndex:a};return r.length&&r.forEach(e=>{e(t,i)}),i})}(n,this._docs,{includeMatches:a,includeScore:i})}_searchStringList(t){const e=Qt(t,this.options),{records:a}=this._myIndex,i=[];return a.forEach(({v:t,i:a,n:r})=>{if(!At(t))return;const{isMatch:o,score:s,indices:n}=e.searchIn(t);o&&i.push({item:t,idx:a,matches:[{score:s,value:t,norm:r,indices:n}]})}),i}_searchLogical(t){const e=re(t,this.options),a=(t,e,i)=>{if(!t.children){const{keyId:a,searcher:r}=t,o=this._findMatches({key:this._keyStore.get(a),value:this._myIndex.getValueForItemAtKeyId(e,a),searcher:r});return o&&o.length?[{idx:i,item:e,matches:o}]:[]}const r=[];for(let o=0,s=t.children.length;o<s;o+=1){const s=t.children[o],n=a(s,e,i);if(n.length)r.push(...n);else if(t.operator===Xt)return[]}return r},i=this._myIndex.records,r={},o=[];return i.forEach(({$:t,i:i})=>{if(At(t)){let s=a(e,t,i);s.length&&(r[i]||(r[i]={idx:i,item:t,matches:[]},o.push(r[i])),s.forEach(({matches:t})=>{r[i].matches.push(...t)}))}}),o}_searchObjectList(t){const e=Qt(t,this.options),{keys:a,records:i}=this._myIndex,r=[];return i.forEach(({$:t,i:i})=>{if(!At(t))return;let o=[];a.forEach((a,i)=>{o.push(...this._findMatches({key:a,value:t[i],searcher:e}))}),o.length&&r.push({idx:i,item:t,matches:o})}),r}_findMatches({key:t,value:e,searcher:a}){if(!At(e))return[];let i=[];if(_t(e))e.forEach(({v:e,i:r,n:o})=>{if(!At(e))return;const{isMatch:s,score:n,indices:c}=a.searchIn(e);s&&i.push({score:n,key:t,value:e,idx:r,norm:o,indices:c})});else{const{v:r,n:o}=e,{isMatch:s,score:n,indices:c}=a.searchIn(r);s&&i.push({score:n,key:t,value:r,norm:o,indices:c})}return i}}var ce,le;function de(t){return t.substr(0,t.indexOf("."))}ne.version="6.6.2",ne.createIndex=Ot,ne.parseIndex=function(t,{getFn:e=Pt.getFn,fieldNormWeight:a=Pt.fieldNormWeight}={}){const{keys:i,records:r}=t,o=new Tt({getFn:e,fieldNormWeight:a});return o.setKeys(i),o.setIndexRecords(r),o},ne.config=Pt,ne.parseQuery=re,function(...t){Gt.push(...t)}(Jt),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ce||(ce={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(le||(le={}));var he=function(t,e,a,i){i=i||{},a=null==a?{}:a;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=a,t.dispatchEvent(r),r};const pe=()=>Promise.resolve().then((function(){return ea})),me=(t,e)=>{he(t,"show-dialog",{dialogTag:"add-camera-dialog",dialogImport:pe,dialogParams:e})};function ue(t){const e=[];for(const[a,i]of Object.entries(t))"camera"===de(a)&&e.push({name:i.attributes.friendly_name,entityID:i.entity_id,state:i.state});return e}function ge(t){const e={};for(const[a,i]of Object.entries(t))switch(typeof i){case"string":e[a]=i.trim();break;case"boolean":case"number":default:e[a]=i}return e}var fe={camera:"camera",edit:"Edit",delete:"Delete",back:"Back",confirm:"confirm",add_camera:"Add Camera",edit_camera:"Edit Camera",delete_camera:"Delete Camera",custom_camera:"Custom Camera",go_back:"Back"},ve={verify_action:"This action can not be undone"},be={cameras:"Search cameras",brands:"Search Brands",models:"Search Models"},xe={integration:"Select type of Integration",name:"Camera Name (Obligatory)",still_image_url:"Static Image URL",stream_source:"Stream URL",username:"Username",password:"Password",record_video_of_camera:"Record Video of Camera",ip:"IP",number_of_cameras:"Number of cameras",advanced_options:"Advanced Options",authentication:"Select Authetication",verify_ssl:"Verify SSL",rtsp_transport:"Select RTSP Transport",framerate:"Framerate",channel:"Channel",still_url_door:"Still Image Door",stream_source_door:"Stream Door",add_multi_channels:"Add all channels?",issues:{missing_integration:"Select an integration type",name:"Camera name is required",duplicated_camera_name:"There is already a camera with that name",static_stream_source_missing:"No static or stream URL",ip_missing:"No IP address provided",n_cameras:"Number of cameras is not valid",unspecified_backend_error:"Issue with the backend processing. Check the log file for more information"}},_e={common:fe,dialog_text:ve,search:be,form:xe},ye={camera:"câmera",edit:"Editar",delete:"Apagar",back:"Voltar",confirm:"confirmar",add_camera:"Adicionar Câmera",edit_camera:"Editar Câmera",delete_camera:"Apagar Câmera",custom_camera:"Câmera Personalizada",go_back:"Voltar"},we={verify_action:"Esta ação não pode ser revertida"},$e={cameras:"Procurar câmaras",brands:"Procurar Marcas",models:"Procurar Modelos"},ke={form:{integration:"Selecionar tipo de Integração",name:"Nome da Câmara (Obrigatório)",still_image_url:"URL da Imagem Estática",stream_source:"URL do Stream",username:"Utilizador",password:"Palavra-passe",record_video_of_camera:"Gravar Vídeo da Câmara",ip:"IP",number_of_cameras:"Número de câmaras",advanced_options:"Opções Avançadas",authentication:"Selecionar Autenticação",verify_ssl:"Verificar SSL",rtsp_transport:"Selecionar Transporte RTSP",framerate:"Taxa de Fotogramas",channel:"Canal",still_url_door:"URL da Imagem Estática (Porta)",stream_source_door:"URL do Stream (Porta)",add_multi_channels:"Adicionar todos os canais?",issues:{missing_integration:"Selecionar um tipo de integração",name:"Nome da câmara é obrigatório",duplicated_camera_name:"Já existe uma câmara com esse nome",static_stream_source_missing:"Nenhuma URL estática ou de stream fornecida",ip_missing:"Nenhum endereço IP fornecido",n_cameras:"Número de câmaras inválido",unspecified_backend_error:"Problema no processamento do servidor. Verifique o ficheiro de registo para mais informações"}}},Ae={common:ye,dialog_text:we,search:$e,form:ke};const Ce={en:Object.freeze({__proto__:null,common:fe,dialog_text:ve,search:be,form:xe,default:_e}),pt:Object.freeze({__proto__:null,common:ye,dialog_text:we,search:$e,form:ke,default:Ae})};function Ie(t,e="",a=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce((t,e)=>t[e],Ce[i])}catch(e){r=t.split(".").reduce((t,e)=>t[e],Ce.en)}return void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],Ce.en)),""!==e&&""!==a&&(r=r.replace(e,a)),r}const Se=t=>{class a extends t{async connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then(t=>t()):t()}this.__unsubs=void 0}}updated(t){super.updated(t),t.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return e([ht({attribute:!1})],a.prototype,"hass",void 0),a},Me=async(t,e)=>await t.connection.sendMessagePromise({type:"raceland-camera-dashboard/fetch_camera_information",entity_id:e}),Le=p`
  a {
    text-decoration: var(--hcv-text-decoration-link);
    color: var(--hcv-text-color-link);
  }
`,Ee=p`
  ha-svg-icon {
    color: var(--hcv-color-icon);
  }
`,De=p`
  mwc-button[raised] {
    border-radius: 4px;
  }
  mwc-button[raised] > ha-circular-progress {
    --mdc-theme-primary: var(--hcv-text-color-primary);
  }
`;p`
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
`;const Pe=p`
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
`,Re=p`
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

  ${Pe}

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
`,Te=p`
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

  ha-icon-button {
    cursor: pointer;
  }
  .cancel {
    width: 100%;
  }
`;p`
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
`,p`
  body {
    background-color: var(--primary-background-color, var(--primary-background));
    color: var(--primary-text-color);
    height: calc(100vh - 32px);
    width: 100vw;
  }
`;const Oe=[Re,Ee,p`
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
`,Le,De],ze=()=>Promise.resolve().then((function(){return ia})),je=()=>Promise.resolve().then((function(){return oa})),Ne=()=>Promise.resolve().then((function(){return na}));let He=class extends nt{render(){return F`
      <ha-button-menu corner="BOTTOM_LEFT" @action=${this._handleAction}>
        <ha-icon-button slot="trigger" .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}></ha-icon-button>
        <mwc-list-item>
          <ha-svg-icon .path=${o}></ha-svg-icon>
          ${Ie("common.edit")}
        </mwc-list-item>
        <!-- <div class="line"></div> -->
        <mwc-list-item class="delete-item">
          <ha-svg-icon .path=${r}></ha-svg-icon>
          ${Ie("common.delete")}
        </mwc-list-item>
      </ha-button-menu>
    `}async _handleAction(t){switch(t.detail.index){case 0:const t=await Me(this.hass,this.cameraInfo.entityID);he(this,"show-dialog",{dialogTag:"edit-camera-dialog",dialogImport:Ne,dialogParams:{cameraInfo:t}});break;case 1:((t,e)=>{he(t,"show-dialog",{dialogTag:"delete-camera-dialog",dialogImport:je,dialogParams:e})})(this,{cameraInfo:this.cameraInfo})}}static get styles(){return p`
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
    `}};e([ht({attribute:!1})],He.prototype,"hass",void 0),e([ht({attribute:!1})],He.prototype,"cameraInfo",void 0),He=e([lt("camera-button-menu")],He);let Ue=class extends nt{render(){return F`
      <ha-card narrow=${this.narrow}>
        <div class="top-row">
          <camera-button-menu .hass=${this.hass} .cameraInfo=${this.cameraInfo}></camera-button-menu>
        </div>
        <ha-svg-icon class="main-camera-icon" path=${"M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"} @click=${this.more_info}></ha-svg-icon>
        <div class="card-title">${this.cameraInfo.name}</div>
      </ha-card>
    `}more_info(t){const e=this.cameraInfo.entityID;((t,e)=>{he(t,"show-dialog",{dialogTag:"ha-more-info-dialog-camera",dialogImport:ze,dialogParams:e})})(t.target,{entityId:e})}static get styles(){return[Oe,p`
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
      `]}};e([ht({attribute:!1})],Ue.prototype,"hass",void 0),e([ht({attribute:!1})],Ue.prototype,"cameraInfo",void 0),e([ht({type:Boolean})],Ue.prototype,"record",void 0),e([ht({type:Boolean})],Ue.prototype,"narrow",void 0),Ue=e([lt("raceland-camera-card")],Ue);
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
class Fe{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}let Be=class extends nt{constructor(){super(...arguments),this._shouldRenderRipple=!1,this._rippleHandlers=new Fe(()=>(this._shouldRenderRipple=!0,this._ripple))}render(){return F`
      <ha-card
        class="add-new-camera"
        @focus=${this.handleRippleFocus}
        @blur=${this.handleRippleBlur}
        @mousedown=${this.handleRippleActivate}
        @mouseup=${this.handleRippleDeactivate}
        @touchstart=${this.handleRippleActivate}
        @touchend=${this.handleRippleDeactivate}
        @touchcancel=${this.handleRippleDeactivate}
      >
        <ha-svg-icon .path=${s} id="icon"></ha-svg-icon>
        <div id="text">${Ie("common.add_camera")}</div>
        ${this._shouldRenderRipple?F`<mwc-ripple></mwc-ripple>`:""}
      </ha-card>
    `}handleRippleActivate(t){this._rippleHandlers.startPress(t)}handleRippleDeactivate(){this._rippleHandlers.endPress()}handleRippleFocus(){this._rippleHandlers.startFocus()}handleRippleBlur(){this._rippleHandlers.endFocus()}static get styles(){return[p`
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
      `]}};e([ht({attribute:!1})],Be.prototype,"hass",void 0),e([ht({type:Boolean})],Be.prototype,"narrow",void 0),e([pt()],Be.prototype,"_shouldRenderRipple",void 0),e([
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function(t){return mt({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("mwc-ripple")],Be.prototype,"_ripple",void 0),e([function(t){return mt({finisher:(e,a)=>{Object.assign(e.prototype[a],t)}})}({passive:!0})],Be.prototype,"handleRippleActivate",null),Be=e([lt("new-camera-card")],Be),t.CameraDashboard=class extends(Se(nt)){constructor(){super(...arguments),this._filter="",this._filterCameras=xt((t,e)=>{if(!e)return t;let a=t;return a=new ne(a,{keys:["name"],isCaseSensitive:!1,minMatchCharLength:1,threshold:.2}).search(e).map(t=>t.item),a})}hassSubscribe(){return[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"camera_dashboard_config_updated"})]}async _fetchData(){this.hass&&(this.cameraList=await ue(this.hass.states))}async firstUpdated(t){super.firstUpdated(t),this.cameraDatabase=await(async t=>await t.connection.sendMessagePromise({type:"raceland-camera-dashboard/fetch_camera_db"}))(this.hass),this.cameraList=await ue(this.hass.states),await(async()=>{if(customElements.get("ha-checkbox")&&customElements.get("ha-slider"))return;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");t.hass={panels:[{url_path:"tmp",component_name:"config"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const e=document.createElement("ha-panel-config");await e.routerOptions.routes.automation.load(),t.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-app-layout")})(),this.requestUpdate()}render(){if(!customElements.get("ha-app-layout"))return F`
        loading...
      `;const t=this._filterCameras(this.cameraList,this._filter);return F`
      ${window.screen.width<=900?F`
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
                .label=${Ie("search.cameras")}
              ></search-input>
            </div>
          `:F`
            <search-input
              .hass=${this.hass}
              .filter=${this._filter}
              @value-changed=${this._handleSearchChange}
              .label=${Ie("search.cameras")}
            ></search-input>
          `}
      <div class="sep"></div>
      <div class="content">
        <div class="contentFather">
          <div
            class=${ft({"camera-list":0!==(null==t?void 0:t.length),"camera-list-one":0===(null==t?void 0:t.length)})}
          >
            ${0===(null==t?void 0:t.length)?F`
                  <new-camera-card
                    .hass=${this.hass}
                    .narrow=${this.narrow}
                    @click=${this._addCamera}
                  ></new-camera-card>
                `:null==t?void 0:t.map(t=>F`
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
      ${0===(null==t?void 0:t.length)?F``:F`
            <ha-fab .label=${Ie("common.camera")} extended @click=${this._addCamera} })}>
              <ha-svg-icon slot="icon" .path=${s}></ha-svg-icon>
            </ha-fab>
          `}
    `}_addCamera(){me(this,{cameraDatabase:this.cameraDatabase.manufacturer})}_handleSearchChange(t){this._filter=t.detail.value}static get styles(){return p`
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
    `}},e([ht({attribute:!1})],t.CameraDashboard.prototype,"hass",void 0),e([ht({attribute:!1})],t.CameraDashboard.prototype,"cameraDatabase",void 0),e([ht({attribute:!1})],t.CameraDashboard.prototype,"cameraList",void 0),e([ht({attribute:!1})],t.CameraDashboard.prototype,"narrow",void 0),e([pt()],t.CameraDashboard.prototype,"_filter",void 0),t.CameraDashboard=e([lt("camera-dashboard")],t.CameraDashboard);const Ve=()=>Promise.resolve().then((function(){return da})),We=(t,e)=>{he(t,"show-dialog",{dialogTag:"camera-brand-dialog",dialogImport:Ve,dialogParams:e})},qe=()=>Promise.resolve().then((function(){return pa})),Ze=(t,e)=>{he(t,"show-dialog",{dialogTag:"raceland-formulary",dialogImport:qe,dialogParams:e})},Ke=[{name:"name",selector:{text:{}}},{name:"still_image_url",selector:{text:{}}},{name:"stream_source",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"username",selector:{text:{}}},{name:"password",selector:{text:{type:"password"}}}]},{name:"advanced_options",selector:{boolean:{}}}],Je=[{name:"authentication",selector:{select:{options:["Basic","Digest"],mode:"dropdown"}}},{name:"verify_ssl",selector:{select:{options:["True","False"],mode:"dropdown"}}},{name:"rtsp_transport",selector:{select:{options:["None","tcp","udp","udp_multicast","http"],mode:"dropdown"}}},{name:"framerate",selector:{number:{min:1,max:60,step:1,mode:"slider",unit_of_measurement:"FPS"}}}],Ge={framerate:2},Qe="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";let Xe=class extends nt{constructor(){super(...arguments),this.disabled=!1,this.label="",this.hideTitle=!1}render(){return F`
      <mwc-icon-button .ariaLabel=${this.label} .title=${this.hideTitle?"":this.label} .disabled=${this.disabled}>
        ${this.svgPath?F`
              <img loading="lazy" referrerpolicy="no-referrer" src=${this.svgPath} alt="Brand Icon" />
            `:F`
              ${this.hideTitle?"":this.label}
            `}
      </mwc-icon-button>
    `}static get styles(){return p`
      :host {
        display: inline-block;
        outline: none;
      }
      :host([disabled]) {
        pointer-events: none;
      }
      img {
        width: 8rem;
      }
      mwc-icon-button {
        width: 100%;
        border-radius: 25px;
        border: 2px solid var(--secondary-text-color);
        padding: 20px 20px 20px 20px;
        text-align: center;
        background-color: white;
        cursor: pointer;
        --mdc-theme-on-primary: currentColor;
        --mdc-theme-text-disabled-on-light: var(--disabled-text-color);
      }
    `}};Xe.shadowRootOptions={mode:"open",delegatesFocus:!0},e([ht({type:Boolean,reflect:!0})],Xe.prototype,"disabled",void 0),e([ht({type:String})],Xe.prototype,"svgPath",void 0),e([ht({type:String})],Xe.prototype,"label",void 0),e([ht({attribute:!1})],Xe.prototype,"cameraModelList",void 0),e([ht({type:Boolean})],Xe.prototype,"hideTitle",void 0),Xe=e([lt("camera-brand-icon-button")],Xe);let Ye=class extends nt{constructor(){super(...arguments),this.suffix=!1,this.autofocus=!1}render(){return F`
      <ha-textfield
        class="rounded"
        outlined
        .autofocus=${this.autofocus}
        .label=${this.label||"Search"}
        .value=${this.filter||""}
        icon
        .iconTrailing=${this.filter||this.suffix}
        @input=${this._filterInputChanged}
      >
        <slot name="prefix" slot="leadingIcon">
          <ha-svg-icon tabindex="-1" class="prefix" .path=${"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"}></ha-svg-icon>
        </slot>
        <div class="trailing" slot="trailingIcon">
          ${this.filter&&F`
              <ha-icon-button
                @click=${this._clearSearch}
                .label=${this.hass.localize("ui.common.clear")}
                .path=${i}
                class="clear-button"
              ></ha-icon-button>
            `}
          <slot name="suffix"></slot>
        </div>
      </ha-textfield>
    `}async _filterChanged(t){he(this,"value-changed",{value:String(t)})}async _filterInputChanged(t){this._filterChanged(t.target.value)}async _clearSearch(){this._filterChanged("")}static get styles(){return p`
      :host {
        display: inline-flex;
      }
      ha-svg-icon,
      ha-icon-button {
        color: var(--primary-text-color);
      }
      ha-svg-icon {
        outline: none;
      }
      .clear-button {
        --mdc-icon-size: 20px;
      }
      ha-textfield.rounded {
        --mdc-shape-small: 28px;
        width: 100%;
      }
      .trailing {
        display: flex;
        align-items: center;
      }
    `}};e([ht({attribute:!1})],Ye.prototype,"hass",void 0),e([ht()],Ye.prototype,"filter",void 0),e([ht({type:Boolean})],Ye.prototype,"suffix",void 0),e([ht({type:Boolean})],Ye.prototype,"autofocus",void 0),e([ht({type:String})],Ye.prototype,"label",void 0),Ye=e([lt("search-input-round")],Ye);let ta=class extends nt{constructor(){super(...arguments),this._currTabIndex=0,this._filter="",this._filterBrands=xt((t,e)=>{if(!e)return t;let a=t;return a=new ne(a,{keys:["name"],isCaseSensitive:!1,minMatchCharLength:1,threshold:.2}).search(e).map(t=>t.item),a})}async showDialog(t){this.open=!0,this.cameraDatabase=t.cameraDatabase}closeDialog(){return this.open=!1,this._currTabIndex=0,!0}render(){if(!this.open)return F``;const t=this._filterBrands(this.cameraDatabase,this._filter);return F`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${ft({table:1===this._currTabIndex})}
      >
        <div class="cancel">
          <div slot="heading" class="heading">
            <ha-header-bar id="bar">
              <div slot="title" class="main-title">
                ${Ie("common.add_camera")}
              </div>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
                id="cancel"
                .path=${Qe}
              ></ha-icon-button>
            </ha-header-bar>
          </div>
        </div>
        <div class="content">
          <div class="contentFather">
            <div class="search-bar">
              <search-input-round
                .hass=${this.hass}
                .filter=${this._filter}
                class="rounded"
                @value-changed=${this._handleSearchChange}
                .label=${Ie("search.brands")}
              ></search-input-round>
            </div>

            <div class="brand-list">
              ${t.map(t=>F`
                  <camera-brand-icon-button
                    .cameraBrandInfo=${t}
                    .label=${t.name}
                    .cameraModelList=${t.models}
                    .svgPath=${"/local/logos/"+t.name+".svg"}
                    @click=${e=>this._openCameraBrandDialog(e,t.models)}
                  ></camera-brand-icon-button>
                `)}
            </div>
          </div>
        </div>
        <div class="options">
          <ha-fab
            class="button-confirm"
            .label=${Ie("common.custom_camera")}
            extended
            @click=${this._addCustomCamera}
          >
            <ha-svg-icon slot="icon" .path=${s}></ha-svg-icon>
          </ha-fab>
        </div>
      </ha-dialog>
    `}_openCameraBrandDialog(t,e){const a=t.target;We(a,{cameraDatabase:this.cameraDatabase,modelsInfo:e}),this.closeDialog()}_addCustomCamera(t){const e={cameraModelInfo:{},schema:{header:{title:Ie("common.add_camera")},body:Ke,extra_options:Je,footer:{back:Ie("common.go_back"),accept:Ie("common.add_camera")}},data:Ge,formType:"custom_camera",backEvent:{call:me,eventData:{cameraDatabase:this.cameraDatabase}}},a=t.target;Ze(a,e),this.closeDialog()}_handleSearchChange(t){this._filter=t.detail.value}static get styles(){return[Te,p`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 1000px) {
          ha-dialog {
            --mdc-dialog-min-width: 900px;
          }
        }

        @media all and (max-width: 500px), all and (max-height: 500px) {
          hui-entity-picker-table {
            height: calc(100vh - 158px);
          }
        }

        ha-dialog {
          --mdc-dialog-max-width: 500px;
          --dialog-content-padding: 2px 24px 20px 24px;
          --dialog-z-index: 5;
        }
        .content {
          width: 100%;
        }
        .contentFather {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        search-input-round {
          display: block;
          --mdc-shape-small: var(--card-picker-search-shape);
          margin: var(--card-picker-search-margin);
          height: 55px;
          width: 100%;
          float: right;
        }
        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
        }
        ha-textfield::part(camera) {
          width: 450px;
        }
        .button-confirm {
          float: right;
        }
        .search-bar {
          height: 73px;
          width: 89%;
          padding: 10px 40px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .add-camera {
          float: left;
          font-size: 30px;
          font-weight: bold;
          line-height: 42px;
          color: #303033;
          padding: 1% 1% 1% 1%;
          /* text-align: center; */
          width: 38%;
        }

        .brand-list {
          display: grid;
          width: 90%;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 4%;
          padding: 0px 55px 25px;
        }

        .options {
          width: 100%;
          margin-top: 4%;
          position: sticky;
          float: right;
          right: calc(16px + env(safe-area-inset-right));
          bottom: calc(16px + env(safe-area-inset-bottom));
          z-index: 1;
        }
        camera-brand-icon-button {
          width: 81%;
        }
        @media only screen and (max-width: 500px) {
          .search-bar {
            height: 55px;
            padding: 0px 25px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .content {
            height: 685px;
          }
        }
        @media only screen and (max-width: 1000px) {
          .brand-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5%;
            width: 90%;
            padding: 0px 8px 25px;
          }
          camera-brand-icon-button {
            width: 65%;
          }
        }
      `]}};e([ht({attribute:!1})],ta.prototype,"hass",void 0),e([ht({attribute:!1})],ta.prototype,"cameraDatabase",void 0),e([pt()],ta.prototype,"_currTabIndex",void 0),e([pt()],ta.prototype,"_filter",void 0),e([pt()],ta.prototype,"open",void 0),ta=e([lt("add-camera-dialog")],ta);var ea=Object.freeze({__proto__:null,get HuiCreateDialogCamera(){return ta}});let aa=class extends nt{constructor(){super(...arguments),this.large=!1,this._currTabIndex=0}showDialog(t){this._entityId=t.entityId,this._entityId?this.large=!1:this.closeDialog()}closeDialog(){this._entityId=void 0,this._currTabIndex=0}render(){if(!this._entityId)return F``;const t=this._entityId,e=this.hass.states[t];if(e.attributes.streamType=e.attributes.streamType?e.attributes.streamType:"video",!e)return F``;const a=de(t),r=(t=>{return void 0===t.attributes.friendly_name?(e=t.entity_id,e.substr(e.indexOf(".")+1)).replace(/_/g," "):t.attributes.friendly_name||"";var e})(e)||" ";return F`
      <ha-dialog open @closed=${this.closeDialog} .heading=${r} hideActions data-domain=${a}>
        <div slot="heading" class="heading">
          <ha-header-bar>
            <ha-icon-button
              slot="navigationIcon"
              id="cancel"
              dialogAction="cancel"
              .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
              .path=${i}
            ></ha-icon-button>
            <div slot="title" class="main-title" .title=${r}>${r}</div>
          </ha-header-bar>
        </div>
        <div class="content" tabindex="-1" dialogInitialFocus>
          <more-info-content .hass=${this.hass} .stateObj=${e}></more-info-content>
        </div>
      </ha-dialog>
    `}_handleTabChanged(t){t.detail.index!==this._currTabIndex&&(this._currTabIndex=t.detail.index)}static get styles(){return[Te,p`
        ha-dialog {
          --dialog-surface-position: static;
          --dialog-content-position: static;
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          /* flex-shrink: 0; */
          display: block;
        }
        .content {
          width: 85%;
          max-width: 100%;
          outline: none;
        }
        @media only screen and (max-width: 850px) and (orientation: landscape) {
          .content {
            position: absolute;
            width: 100%;
            top: 60%;
            transform: translate(0%, -50%);
            max-width: 100%;
            outline: none;
          }
        }
        @media only screen and (max-width: 450px) and (orientation: portrait) {
          .content {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translate(0%, -50%);
            max-width: 100%;
            outline: none;
          }
        }
        /* #cancel {
          position: absolute;
          right: 0;
          z-index: 100;
        } */

        /* @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-header-bar {
            --mdc-theme-primary: var(--app-header-background-color);
            --mdc-theme-on-primary: var(--app-header-text-color, white);
            border-bottom: none;
          }
        } */

        .heading {
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          ha-dialog {
            --mdc-dialog-max-width: 90vw;
          }

          .content {
            width: 352px;
          }

          ha-header-bar {
            width: 400px;
          }

          .main-title {
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: default;
          }

          ha-dialog[data-domain='camera'] .content,
          ha-dialog[data-domain='camera'] ha-header-bar {
            width: auto;
          }

          :host([large]) .content {
            width: calc(90vw - 48px);
          }

          :host([large]) ha-dialog[data-domain='camera'] .content,
          :host([large]) ha-header-bar {
            width: 90vw;
          }
        }

        ha-dialog[data-domain='camera'] {
          --dialog-content-padding: 0;
        }

        state-card-content,
        ha-more-info-logbook:not(:last-child) {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin-bottom: 15px;
        }
        ha-more-info-history {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }
        /* @media all and (max-width: 650px) {
          state-card-content {
            width: 250px;
          }
        } */
      `]}};e([ht({attribute:!1})],aa.prototype,"hass",void 0),e([ht({type:Boolean,reflect:!0})],aa.prototype,"large",void 0),e([pt()],aa.prototype,"_entityId",void 0),e([pt()],aa.prototype,"_currTabIndex",void 0),aa=e([lt("ha-more-info-dialog-camera")],aa);var ia=Object.freeze({__proto__:null,get MoreInfoDialog(){return aa}});let ra=class extends nt{constructor(){super(...arguments),this._currTabIndex=0}async showDialog(t){this._params=t,this.cameraConfiguration=await Me(this.hass,this._params.cameraInfo.entityID)}closeDialog(){this._params=void 0}render(){return this._params?F`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        .heading=${Ie("common.delete_camera")}
        class=${ft({table:1===this._currTabIndex})}
        @closed=${this.closeDialog}
      >
        <div class="header" slot="heading">
          <ha-header-bar>
            <span slot="title">
              <ha-svg-icon class="header-icon" slot="icon" .path=${r}></ha-svg-icon>
            </span>
          </ha-header-bar>
        </div>
        <div class="content">
          <div class="contentFather">
            <div class="text">
              <p class="big-text">${Ie("common.delete_camera")}</p>
              <p class="small-text">${Ie("dialog_text.verify_action")}</p>
            </div>
          </div>
        </div>
        <div class="options">
          <mwc-button class="button-cancel" @click=${this._cancel}>
            <ha-svg-icon class="icon-back" slot="icon" .path=${a}></ha-svg-icon>
            ${Ie("common.back")}
          </mwc-button>
          <mwc-button class="button-confirm" @click=${this._delete}>
            <ha-svg-icon class="confirm-icon" slot="icon" .path=${"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}></ha-svg-icon>
            ${Ie("common.confirm")}
          </mwc-button>
        </div>
      </ha-dialog>
    `:F``}_cancel(t){t&&t.stopPropagation(),this.closeDialog()}async _delete(t){var e,a;t&&t.stopPropagation();!0===await(async(t,e,a)=>await t.connection.sendMessagePromise({type:"raceland-camera-dashboard/remove_camera",entityID:a,unique_id:e}))(this.hass,null===(e=this.cameraConfiguration)||void 0===e?void 0:e.unique_id,null===(a=this.cameraConfiguration)||void 0===a?void 0:a.entityID)&&this.closeDialog()}static get styles(){return[Te,p`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 800px) {
          ha-dialog {
            --mdc-dialog-min-width: 500px;
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          hui-entity-picker-table {
            height: calc(100vh - 158px);
          }
        }

        ha-dialog {
          --mdc-dialog-max-width: 500px;
          --dialog-content-padding: 2px 24px 20px 24px;
          --dialog-z-index: 5;
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }
        .content {
          width: 100%;
        }
        .button-cancel {
          background-color: #a3abae;
          float: left;
          width: 90px;
        }
        .options {
          width: 100%;
        }

        .button-confirm {
          background-color: #4ba2ff;
          float: right;
        }
        .header {
          height: 80px;
        }
        mwc-button {
          padding: 10px;
          /* text-align: center; */
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0px 0px 5px 0px rgba(1, 1, 1, 0);
          --mdc-theme-primary: white;
          margin-bottom: 40px;
        }

        .header_button {
          color: inherit;
          text-decoration: none;
        }

        mwc-tab-bar {
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }
        .confirm-icon {
          width: 20px;
          height: 40px;
        }
        .header-icon {
          width: 60px;
          height: 60px;
          padding-top: 50px;
          color: #7b7b7b;
        }
        .text {
          margin: 0px 0px 20px 0px;
        }
        .big-text {
          /* font-family: "Roboto"; */
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          color: var(--primary-text-color);
          margin: 10px;
        }
        .small-text {
          /* font-family: "Roboto"; */
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          color: var(--primary-text-color);
          margin: 10px;
        }
        ha-svg-icon {
          margin-left: 0px;
          margin-right: 6px;
          display: inline-block;
          position: relative;
          vertical-align: top;
          font-size: 1.125rem;
          height: 2.125rem;
          width: 1.7rem;
        }
        @media only screen and (max-width: 500px) {
          .content {
            width: 100%;
            height: 171vw;
          }
        }
      `]}};e([ht({attribute:!1})],ra.prototype,"hass",void 0),e([pt()],ra.prototype,"_params",void 0),e([pt()],ra.prototype,"cameraConfiguration",void 0),e([pt()],ra.prototype,"_currTabIndex",void 0),ra=e([lt("delete-camera-dialog")],ra);var oa=Object.freeze({__proto__:null,get HuiDeleteDialogCamera(){return ra}});let sa=class extends nt{constructor(){super(...arguments),this._currTabIndex=0,this._computeLabelCallback=t=>Ie("form."+t.name)}async showDialog(t){const e={header:{title:Ie("common.add_camera")},body:Ke,extra_options:Je,footer:{accept:Ie("common.edit_camera")}};if(this._params=t,this.schema=e,this.dialogOpen=!0,this.cameraInfo=this._params.cameraInfo,this.registeredCameras=ue(this.hass.states).map(t=>t.name),void 0!==this.cameraInfo.authentication&&(this.cameraInfo.authentication=this.cameraInfo.authentication[0].toUpperCase()+this.cameraInfo.authentication.substring(1)),null!=this.cameraInfo.verify_ssl){let t=this.cameraInfo.verify_ssl;t=String(this.cameraInfo.verify_ssl),this.cameraInfo.verify_ssl=t[0].toUpperCase()+t.substring(1)}}closeDialog(){return this._currTabIndex=0,this.dialogOpen=void 0,!0}render(){if(void 0===this.cameraInfo||!this.dialogOpen)return F``;const t=this.schema.body,e=this.schema.extra_options;return F`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        class=${ft({table:1===this._currTabIndex})}
        @closed=${this.closeDialog}
      >
        <div class="cancel">
          <div slot="heading" class="heading">
            <ha-header-bar id="bar">
              <div slot="title" class="main-title" .title=${name}>
                ${Ie("common.edit_camera")}
              </div>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
                id="cancel"
                .path=${Qe}
              ></ha-icon-button>
            </ha-header-bar>
          </div>
        </div>
        <div class="content">
          <div class="contentFather">
            ${this.validIssue?F`
                  <div class="form-issue">${this.validIssue}</div>
                `:F``}
            <div class="form">
              <ha-form
                .hass=${this.hass}
                .data=${this.cameraInfo}
                .schema=${t}
                .computeLabel=${this._computeLabelCallback}
                @value-changed=${this._valueChanged}
              ></ha-form>
              ${e&&this.cameraInfo.advanced_options?F`
                    <ha-form
                      .hass=${this.hass}
                      .data=${this.cameraInfo}
                      .schema=${e}
                      .computeLabel=${this._computeLabelCallback}
                      @value-changed=${this._valueChanged}
                    ></ha-form>
                  `:F``}
            </div>
          </div>
        </div>
        <div class="options">
          <ha-fab class="button-confirm" .label=${this.schema.footer.accept} extended @click=${this._accept} })}>
            <ha-svg-icon slot="icon" .path=${o}></ha-svg-icon>
          </ha-fab>
        </div>
      </ha-dialog>
    `}_valueChanged(t){const e=ge(t.detail.value);this.cameraInfo=Object.assign(Object.assign({},this.cameraInfo),e)}async _accept(){if(!0===this.validInput()){this.cameraInfo=this.removeNull(this.cameraInfo);!0===await(async(t,e)=>await t.connection.sendMessagePromise(Object.assign({type:"raceland-camera-dashboard/edit_camera"},e)))(this.hass,this.cameraInfo)&&this.closeDialog()}}validInput(){return this.cameraInfo.integration?this.cameraInfo.name?this.registeredCameras.includes(this.cameraInfo.camera_name)?(this.validIssue=Ie("form.issues.duplicated_camera_name"),!1):!(!this.cameraInfo.still_image_url&&!this.cameraInfo.stream_source)||(this.validIssue=Ie("form.issues.static_stream_source_missing"),!1):(this.validIssue=Ie("form.issues.camera_name"),!1):(this.validIssue=Ie("form.issues.missing_integration"),!1)}removeNull(t){for(const[e,a]of Object.entries(t))null===a&&delete t[e];return t}static get styles(){return[Te,p`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 1000px) {
          ha-dialog {
            --mdc-dialog-min-width: 900px;
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          hui-entity-picker-table {
            height: calc(100vh - 158px);
          }
        }

        .cancel {
          cursor: pointer;
          /* padding: 20px 20px 20px 20px; */
          width: 100%;
        }
        .content {
          width: 100%;
        }

        ha-dialog {
          --mdc-dialog-max-width: 500px;
          --dialog-content-padding: 2px 24px 20px 24px;
          --dialog-z-index: 5;
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }

        ha-form {
          margin-left: 8%;
          margin-right: 8%;
        }

        ha-formfield {
          display: flex;
          height: 56px;
          align-items: center;
          --mdc-typography-body2-font-size: 1em;
        }

        .button-back {
          --mdc-theme-primary: #7b7b7b;
          float: left;
          margin-left: 5%;
        }
        .options {
          width: 100%;
          margin-bottom: 20px;
        }

        .form-issue {
          font-family: 'Roboto';
          font-style: normal;
          font-size: 12px;
          color: #e41111;
          padding: 1% 1% 1% 12%;
          text-align: left;
          width: 100%;
        }

        .icon-back {
          width: 30px;
          height: 30px;
        }
        .form {
          margin-left: 10%;
          margin-right: 10%;
        }

        mwc-button {
          padding: 10px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0px 0px 5px 0px rgba(1, 1, 1, 0);
          --mdc-theme-primary: white;
          margin-bottom: 40px;
        }

        .header_button {
          color: inherit;
          text-decoration: none;
        }

        mwc-tab-bar {
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }
        .cancel-icon {
          float: right;
          width: 40px;
          height: 40px;
        }
        @media only screen and (max-width: 500px) {
          .content {
            width: 100%;
            height: 171vw;
          }
        }
      `]}};e([ht({attribute:!1})],sa.prototype,"hass",void 0),e([ht({attribute:!1})],sa.prototype,"dialogOpen",void 0),e([ht({attribute:!1})],sa.prototype,"cameraInfo",void 0),e([pt()],sa.prototype,"_params",void 0),e([ht({attribute:!1})],sa.prototype,"backEvent",void 0),e([ht({attribute:!1})],sa.prototype,"registeredCameras",void 0),e([ht({attribute:!1})],sa.prototype,"schema",void 0),e([pt()],sa.prototype,"_currTabIndex",void 0),e([pt()],sa.prototype,"validIssue",void 0),sa=e([lt("edit-camera-dialog")],sa);var na=Object.freeze({__proto__:null,get HuiEditDialogCamera(){return sa}});let ca=class extends nt{constructor(){super(...arguments),this.disabled=!1,this.label="",this.hideTitle=!1}render(){return F`
      <button .ariaLabel=${this.label} .title=${this.hideTitle?"":this.label} .disabled=${this.disabled}>
        ${this.hideTitle?"":this.label}
      </button>
    `}static get styles(){return p`
      :host {
        display: inline-block;
        outline: none;
      }
      :host([disabled]) {
        pointer-events: none;
      }
      button {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-radius: 25px;
        border: 2px solid var(--secondary-text-color);
        padding: 27px;
        text-align: center;
        cursor: pointer;
        background-color: var(--card-background-color);
        font-size: 1rem;
        display: flex;
        justify-content: center;
        color: var(--primary-text-color);
      }
      @media only screen and (max-width: 500px) {
        button {
          padding: 20px;
          display: table-cell;
          vertical-align: middle;
          width: 34vw;
          border-radius: 25px;
          border: 2px solid var(--secondary-text-color);
          cursor: pointer;
          background-color: var(--card-background-color);
          font-size: 1rem;
          white-space: nowrap;
        }
      }
    `}};ca.shadowRootOptions={mode:"open",delegatesFocus:!0},e([ht({type:Boolean,reflect:!0})],ca.prototype,"disabled",void 0),e([ht({type:String})],ca.prototype,"label",void 0),e([ht({attribute:!1})],ca.prototype,"cameraModelInfo",void 0),e([ht({type:Boolean})],ca.prototype,"hideTitle",void 0),ca=e([lt("camera-model-icon-button")],ca);let la=class extends nt{constructor(){super(...arguments),this._currTabIndex=0,this._filter="",this._filterModels=xt((t,e)=>{if(!e)return t;let a=t;return a=new ne(a,{keys:["version"],isCaseSensitive:!1,minMatchCharLength:1,threshold:.2}).search(e).map(t=>t.item),a})}showDialog(t){this.cameraDatabase=t.cameraDatabase,this.modelList=t.modelsInfo}closeDialog(){return this.modelList=void 0,this._currTabIndex=0,!0}render(){if(!this.modelList)return F``;const t=this._filterModels(this.modelList,this._filter),e=[],i=[];return F`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${ft({table:1===this._currTabIndex})}
      >
        <div class="cancel">
          <div slot="heading" class="heading">
            <ha-header-bar id="bar">
              <div slot="title" class="main-title" .title=${name}>
                ${Ie("common.add_camera")}
              </div>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
                id="cancel"
                .path=${Qe}
              ></ha-icon-button>
            </ha-header-bar>
          </div>
        </div>
        <div class="content">
          <div class="contentFather">
            <div class="search-bar">
              <search-input-round
                .hass=${this.hass}
                .filter=${this._filter}
                class="rounded"
                @value-changed=${this._handleSearchChange}
                .label=${Ie("search.brands")}
              ></search-input-round>
            </div>

            <div class="model-list">
              ${t.map(t=>F`
                  <camera-model-icon-button
                    .label="${t.version}"
                    @click=${a=>this._addCamera(a,t,e,i)}
                  ></camera-model-icon-button>
                `)}
            </div>
          </div>
        </div>
        <div class="options">
          <ha-fab
            class="button-confirm"
            .label=${Ie("common.custom_camera")}
            extended
            @click=${this._addCustomCamera}
          >
            <ha-svg-icon slot="icon" .path=${s}></ha-svg-icon>
          </ha-fab>
          <mwc-button class="button-back" @click=${this.goBack}>
            ${Ie("common.back")}
            <ha-svg-icon class="icon-back" slot="icon" .path=${a}></ha-svg-icon>
          </mwc-button>
        </div>
      </ha-dialog>
    `}_addCamera(t,e,a,i){e.fields.forEach(t=>{a.push(t)}),void 0!==e.advanced_options&&(a.push({name:"advanced_options",selector:{boolean:{}}}),e.advanced_options.forEach(t=>{i.push(t)}));const r={schema:{header:{title:Ie("common.add_camera")},body:a,extra_options:i,footer:{back:Ie("common.go_back"),accept:Ie("common.add_camera")}},cameraModelInfo:e,data:Object.assign(Object.assign({},e.default),{still_image_url:e.options.static,stream_source:e.options.stream}),formType:"brand_camera",backEvent:{call:We,eventData:{cameraDatabase:this.cameraDatabase,modelsInfo:this.modelList}}},o=t.target;Ze(o,r),this.closeDialog()}_addCustomCamera(t){const e={cameraModelInfo:{},schema:{header:{title:Ie("common.add_camera")},body:Ke,extra_options:Je,footer:{back:Ie("common.go_back"),accept:Ie("common.add_camera")}},data:{},formType:"custom_camera",backEvent:{call:We,eventData:{cameraDatabase:this.cameraDatabase,modelsInfo:this.modelList}}},a=t.target;Ze(a,e),this.closeDialog()}goBack(t){const e=t.target;me(e,{cameraDatabase:this.cameraDatabase}),t&&t.stopPropagation(),this.closeDialog()}_handleSearchChange(t){this._filter=t.detail.value}static get styles(){return[Te,p`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 1000px) {
          ha-dialog {
            --mdc-dialog-min-width: 900px;
          }
        }
        .content {
          width: 100%;
        }
        .contentFather {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
        }

        search-input-round {
          display: block;
          --mdc-shape-small: var(--card-picker-search-shape);
          margin: var(--card-picker-search-margin);
          height: 55px;
          width: 100%;
          float: right;
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          hui-entity-picker-table {
            height: calc(100vh - 158px);
          }
        }

        ha-dialog {
          --mdc-dialog-max-width: 500px;
          --dialog-content-padding: 2px 24px 20px 24px;
          --dialog-z-index: 5;
        }
        .options {
          height: 50px;
          margin-top: 8%;
          width: 100%;
          position: sticky;
          float: right;
          right: calc(16px + env(safe-area-inset-right));
          bottom: calc(16px + env(safe-area-inset-bottom));
          z-index: 1;
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
        }

        .button-confirm {
          /* background-color: #4ba2ff; */
          float: right;
        }

        .button-back {
          --mdc-theme-primary: #7b7b7b;
          float: left;
          /* margin-left: 5%; */
        }

        .icon-back {
          width: 30px;
          height: 30px;
        }

        .search-bar {
          height: 73px;
          width: 80%;
          padding: 10px 58px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .model-list {
          display: grid;
          width: 90%;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 4%;
          padding: 0px 55px 25px;
        }

        @media only screen and (max-width: 1000px) {
          .brand-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5%;
            width: 90%;
            padding: 0px 8px 25px;
          }
          camera-model-icon-button {
            width: 85%;
          }
        }
      `]}};e([ht({attribute:!1})],la.prototype,"hass",void 0),e([pt()],la.prototype,"cameraDatabase",void 0),e([ht({attribute:!1})],la.prototype,"modelList",void 0),e([pt()],la.prototype,"_currTabIndex",void 0),e([pt()],la.prototype,"_filter",void 0),la=e([lt("camera-brand-dialog")],la);var da=Object.freeze({__proto__:null,get HuiCreateDialogCameraBrand(){return la}});let ha=class extends nt{constructor(){super(...arguments),this._currTabIndex=0,this._computeLabelCallback=t=>Ie("form."+t.name)}showDialog(t){this.schema=t.schema,this.backEvent=t.backEvent,this.data=t.data,this.formType=t.formType,this.cameraModelInfo=t.cameraModelInfo,this.open=!0,this.registeredCameras=ue(this.hass.states).map(t=>t.name)}closeDialog(){return this._currTabIndex=0,this.open=void 0,!0}render(){if(!this.open)return F``;const t=this.schema.body,e=this.schema.extra_options;return F`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${ft({table:1===this._currTabIndex})}
      >
        <div class="cancel">
          <div slot="heading" class="heading">
            <ha-header-bar id="bar">
              <div slot="title" class="main-title" .title=${name}>
                ${Ie("common.add_camera")}
              </div>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
                id="cancel"
                .path=${Qe}
              ></ha-icon-button>
            </ha-header-bar>
          </div>
        </div>
        <div
          class="content ${ft({"content-big":t.length<6})} "
        >
          <div class="contentFather">
            ${this.validIssue?F`
                  <div class="form-issue">${this.validIssue}</div>
                `:F``}
            <div class="form">
              <ha-form
                .hass=${this.hass}
                .data=${this.data}
                .schema=${t}
                .computeLabel=${this._computeLabelCallback}
                @value-changed=${this._valueChanged}
              ></ha-form>
              ${e&&this.data.advanced_options?F`
                    <ha-form
                      .hass=${this.hass}
                      .data=${this.data}
                      .schema=${e}
                      .computeLabel=${this._computeLabelCallback}
                      @value-changed=${this._valueChanged}
                    ></ha-form>
                  `:F``}
            </div>
          </div>
        </div>
        <div class="options">
          <ha-fab class="button-confirm" .label=${this.schema.footer.accept} extended @click=${this._accept} })}>
            <ha-svg-icon slot="icon" .path=${s}></ha-svg-icon>
          </ha-fab>
          ${this.backEvent?F`
                <mwc-button class="button-back" dialogAction="close" @click=${this._goBack}>
                  ${this.schema.footer.back}
                  <ha-svg-icon class="icon-back" slot="icon" .path=${a}></ha-svg-icon>
                </mwc-button>
              `:F``}
        </div>
      </ha-dialog>
    `}_valueChanged(t){const e=ge(t.detail.value);this.data=Object.assign(Object.assign({},this.data),e)}validInputCustom(){return this.data.name?this.registeredCameras.includes(this.data.name)?(this.validIssue=Ie("form.issues.duplicated_camera_name"),!1):!(!this.data.still_image_url&&!this.data.stream_source)||(this.validIssue=Ie("form.issues.static_stream_source_missing"),!1):(this.validIssue=Ie("form.issues.name"),!1)}validInput(){if(!this.data.ip)return this.validIssue=Ie("form.issues.ip_missing"),!1;if(isNaN(Number(this.data.channel))||void 0!==this.data.channel&&this.data.channel<=0)return this.validIssue=Ie("form.issues.n_cameras"),!1;let t=[];const e=parseInt(this.data.channel);return t=void 0!==this.data.channel&&e>1?Array.from({length:e},(t,e)=>`${this.data.name} ${e+1}`):[this.data.name],!(t.filter(t=>this.registeredCameras.includes(t)).length>0)||(this.validIssue=Ie("form.issues.duplicated_camera_name"),!1)}async _accept(){if("custom_camera"===this.formType){if(!0===this.validInputCustom()){!0===await(async(t,e)=>await t.connection.sendMessagePromise(Object.assign({type:"raceland-camera-dashboard/register_camera"},e)))(this.hass,this.data)?this.closeDialog():this.validIssue=Ie("form.issues.unspecified_backend_error")}}else if("brand_camera"===this.formType){if(!0===this.validInput()){!0===await(async(t,e)=>await t.connection.sendMessagePromise(Object.assign({type:"raceland-camera-dashboard/register_model_camera"},e)))(this.hass,this.data)?this.closeDialog():this.validIssue=Ie("form.issues.unspecified_backend_error"),this.closeDialog()}}}_goBack(t){const e=t.target;this.backEvent.call(e,this.backEvent.eventData)}static get styles(){return[Te,p`
        .content {
          width: 83%;
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
          .content-big {
            width: 83%;
            height: 225vw;
          }
        }

        @media all and (min-width: 1000px) {
          ha-dialog {
            --mdc-dialog-min-width: 900px;
          }
        }

        @media all and (max-width: 450px), all and (max-height: 500px) {
          hui-entity-picker-table {
            height: calc(100vh - 158px);
          }
        }

        ha-dialog {
          --mdc-dialog-max-width: 500px;
          --dialog-content-padding: 2px 24px 20px 24px;
          --dialog-z-index: 5;
        }
        .options {
          width: 100%;
          position: sticky;
          float: right;
          right: calc(16px + env(safe-area-inset-right));
          /* bottom: calc(16px + env(safe-area-inset-bottom)); */
          z-index: 1;
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }

        ha-form {
          margin-left: 8%;
          margin-right: 8%;
        }

        ha-formfield {
          display: flex;
          height: 56px;
          align-items: center;
          --mdc-typography-body2-font-size: 1em;
        }

        .button-confirm {
          /* background-color: #4ba2ff; */
          float: right;
        }

        .button-back {
          --mdc-theme-primary: #7b7b7b;
          float: left;
          /* margin-left: 5%; */
        }

        .form-issue {
          font-family: 'Roboto';
          font-style: normal;
          font-size: 12px;
          color: #e41111;
          padding: 1% 1% 1% 12%;
          text-align: left;
          width: 100%;
        }

        .icon-back {
          width: 30px;
          height: 30px;
        }
        .form {
          /* margin-left: 10%;
          margin-right: 10%; */
        }

        .header-text {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          color: #303033;
          padding: 1% 1% 1% 5%;
          text-align: center;
          width: 38%;
        }

        .brand-list {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 9%;
          padding: 0px 55px 25px;
        }

        .cancel {
          cursor: pointer;
          /* padding: 20px 20px 20px 20px; */
          width: 100%;
        }

        mwc-button {
          /* padding: 10px; */
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          border-radius: 30px;
          cursor: pointer;
          box-shadow: 0px 0px 5px 0px rgba(1, 1, 1, 0);
          --mdc-theme-primary: white;
          margin-bottom: 40px;
        }

        .header_button {
          color: inherit;
          text-decoration: none;
        }

        mwc-tab-bar {
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }
        .cancel-icon {
          float: right;
          width: 40px;
          height: 40px;
        }
      `]}};e([ht({attribute:!1})],ha.prototype,"hass",void 0),e([ht({attribute:!1})],ha.prototype,"open",void 0),e([ht({attribute:!1})],ha.prototype,"data",void 0),e([ht({attribute:!1})],ha.prototype,"cameraModelInfo",void 0),e([ht({attribute:!1})],ha.prototype,"backEvent",void 0),e([ht({type:String})],ha.prototype,"formType",void 0),e([ht({attribute:!1})],ha.prototype,"schema",void 0),e([ht({attribute:!1})],ha.prototype,"registeredCameras",void 0),e([pt()],ha.prototype,"_currTabIndex",void 0),e([pt()],ha.prototype,"validIssue",void 0),ha=e([lt("raceland-formulary")],ha);var pa=Object.freeze({__proto__:null,get HuiCreateDialogCameraFormulary(){return ha}});Object.defineProperty(t,"__esModule",{value:!0})}({});
