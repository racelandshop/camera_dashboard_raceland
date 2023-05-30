!function(t){"use strict";function e(t,e,a,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(n=(o<3?r(n):o>3?r(e,a,n):r(e,a))||n);return o>3&&n&&Object.defineProperty(e,a,n),n}var a="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",i="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",r="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const o=window,n=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),c=new WeakMap;class l{constructor(t,e,a){if(this._$cssResult$=!0,a!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const a=void 0!==e&&1===e.length;a&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&c.set(e,t))}return t}toString(){return this.cssText}}const d=(t,...e)=>{const a=1===t.length?t[0]:e.reduce((e,a,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[i+1],t[0]);return new l(a,t,s)},h=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new l("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var p;const u=window,m=u.trustedTypes,g=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},b=(t,e)=>e!==t&&(e==e||t==t),x={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,a)=>{const i=this._$Ep(a,e);void 0!==i&&(this._$Ev.set(i,a),t.push(i))}),t}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const a="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,a,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,a){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||x}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const a of e)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(h(t))}else void 0!==t&&e.push(h(t));return e}static _$Ep(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,a;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(a=t.hostConnected)||void 0===a||a.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{const a=document.createElement("style"),i=o.litNonce;void 0!==i&&a.setAttribute("nonce",i),a.textContent=e.cssText,t.appendChild(a)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$EO(t,e,a=x){var i;const r=this.constructor._$Ep(t,a);if(void 0!==r&&!0===a.reflect){const o=(void 0!==(null===(i=a.converter)||void 0===i?void 0:i.toAttribute)?a.converter:v).toAttribute(e,a.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var a;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(a=t.converter)||void 0===a?void 0:a.fromAttribute)?t.converter:v;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,a){let i=!0;void 0!==t&&(((a=a||this.constructor.getPropertyOptions(t)).hasChanged||b)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===a.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,a))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(a)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(a)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var _;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:y}),(null!==(p=u.reactiveElementVersions)&&void 0!==p?p:u.reactiveElementVersions=[]).push("1.6.1");const w=window,$=w.trustedTypes,k=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,M="?"+C,S=`<${M}>`,L=document,E=()=>L.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,R=t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),T="[ \t\n\f\r]",D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,O=/>/g,j=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,N=/"/g,U=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...a)=>({_$litType$:t,strings:e,values:a}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,q=L.createTreeWalker(L,129,null,!1),Z=(t,e)=>{const a=t.length-1,i=[];let r,o=2===e?"<svg>":"",n=D;for(let e=0;e<a;e++){const a=t[e];let s,c,l=-1,d=0;for(;d<a.length&&(n.lastIndex=d,c=n.exec(a),null!==c);)d=n.lastIndex,n===D?"!--"===c[1]?n=z:void 0!==c[1]?n=O:void 0!==c[2]?(U.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=j):void 0!==c[3]&&(n=j):n===j?">"===c[0]?(n=null!=r?r:D,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,s=c[1],n=void 0===c[3]?j:'"'===c[3]?N:H):n===N||n===H?n=j:n===z||n===O?n=D:(n=j,r=void 0);const h=n===j&&t[e+1].startsWith("/>")?" ":"";o+=n===D?a+S:l>=0?(i.push(s),a.slice(0,l)+A+a.slice(l)+C+h):a+C+(-2===l?(i.push(void 0),e):h)}const s=o+(t[a]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==k?k.createHTML(s):s,i]};class K{constructor({strings:t,_$litType$:e},a){let i;this.parts=[];let r=0,o=0;const n=t.length-1,s=this.parts,[c,l]=Z(t,e);if(this.el=K.createElement(c,a),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=q.nextNode())&&s.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(A)||e.startsWith(C)){const a=l[o++];if(t.push(e),void 0!==a){const t=i.getAttribute(a.toLowerCase()+A).split(C),e=/([.?@])?(.*)/.exec(a);s.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?et:"@"===e[1]?at:X})}else s.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(U.test(i.tagName)){const t=i.textContent.split(C),e=t.length-1;if(e>0){i.textContent=$?$.emptyScript:"";for(let a=0;a<e;a++)i.append(t[a],E()),q.nextNode(),s.push({type:2,index:++r});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===M)s.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(C,t+1));)s.push({type:7,index:r}),t+=C.length-1}r++}}static createElement(t,e){const a=L.createElement("template");return a.innerHTML=t,a}}function J(t,e,a=t,i){var r,o,n,s;if(e===B)return e;let c=void 0!==i?null===(r=a._$Co)||void 0===r?void 0:r[i]:a._$Cl;const l=I(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,a,i)),void 0!==i?(null!==(n=(s=a)._$Co)&&void 0!==n?n:s._$Co=[])[i]=c:a._$Cl=c),void 0!==c&&(e=J(t,c._$AS(t,e.values),c,i)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:a},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:L).importNode(a,!0);q.currentNode=r;let o=q.nextNode(),n=0,s=0,c=i[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new G(o,o.nextSibling,this,t):1===c.type?e=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(e=new it(o,this,t)),this._$AV.push(e),c=i[++s]}n!==(null==c?void 0:c.index)&&(o=q.nextNode(),n++)}return r}v(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class G{constructor(t,e,a,i){var r;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),I(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):R(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(L.createTextNode(t)),this._$AH=t}g(t){var e;const{values:a,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(a);else{const t=new Q(r,this),e=t.u(this.options);t.v(a),this.$(e),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,i=0;for(const r of t)i===e.length?e.push(a=new G(this.k(E()),this.k(E()),this,this.options)):a=e[i],a._$AI(r),i++;i<e.length&&(this._$AR(a&&a._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class X{constructor(t,e,a,i,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,a,i){const r=this.strings;let o=!1;if(void 0===r)t=J(this,t,e,0),o=!I(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const i=t;let n,s;for(t=r[0],n=0;n<r.length-1;n++)s=J(this,i[a+n],e,n),s===B&&(s=this._$AH[n]),o||(o=!I(s)||s!==this._$AH[n]),s===V?t=V:t!==V&&(t+=(null!=s?s:"")+r[n+1]),this._$AH[n]=s}o&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}const tt=$?$.emptyScript:"";class et extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class at extends X{constructor(t,e,a,i,r){super(t,e,a,i,r),this.type=5}_$AI(t,e=this){var a;if((t=null!==(a=J(this,t,e,0))&&void 0!==a?a:V)===B)return;const i=this._$AH,r=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==a?a:this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const rt={O:A,P:C,A:M,C:1,M:Z,L:Q,D:R,R:J,I:G,V:X,H:et,N:at,U:Y,F:it},ot=w.litHtmlPolyfillSupport;null==ot||ot(K,G),(null!==(_=w.litHtmlVersions)&&void 0!==_?_:w.litHtmlVersions=[]).push("2.7.3");const nt=(t,e,a)=>{var i,r;const o=null!==(i=null==a?void 0:a.renderBefore)&&void 0!==i?i:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==a?void 0:a.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new G(e.insertBefore(E(),t),t,void 0,null!=a?a:{})}return n._$AI(t),n
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */};var st,ct;class lt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const a=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=a.firstChild),a}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}lt.finalized=!0,lt._$litElement$=!0,null===(st=globalThis.litElementHydrateSupport)||void 0===st||st.call(globalThis,{LitElement:lt});const dt=globalThis.litElementPolyfillSupport;null==dt||dt({LitElement:lt}),(null!==(ct=globalThis.litElementVersions)&&void 0!==ct?ct:globalThis.litElementVersions=[]).push("3.3.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ht=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:a,elements:i}=e;return{kind:a,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,pt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(a){a.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(a){a.createProperty(e.key,t)}};function ut(t){return(e,a)=>void 0!==a?((t,e,a)=>{e.constructor.createProperty(a,t)})(t,e,a):pt(t,e)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function mt(t){return ut({...t,state:!0})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const gt=({finisher:t,descriptor:e})=>(a,i)=>{var r;if(void 0===i){const i=null!==(r=a.originalKey)&&void 0!==r?r:a.key,o=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(a.key)}:{...a,key:i};return null!=t&&(o.finisher=function(e){t(e,i)}),o}{const r=a.constructor;void 0!==e&&Object.defineProperty(a,i,e(i)),null==t||t(r,i)}}
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
var ft;null===(ft=window.HTMLSlotElement)||void 0===ft||ft.prototype.assignedElements;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const vt=1,bt=t=>(...e)=>({_$litDirective$:t,values:e});class xt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const yt=bt(class extends xt{constructor(t){var e;if(super(t),t.type!==vt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var a,i;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!(null===(a=this.nt)||void 0===a?void 0:a.has(t))&&this.it.add(t);return this.render(e)}const r=t.element.classList;this.it.forEach(t=>{t in e||(r.remove(t),this.it.delete(t))});for(const t in e){const a=!!e[t];a===this.it.has(t)||(null===(i=this.nt)||void 0===i?void 0:i.has(t))||(a?(r.add(t),this.it.add(t)):(r.remove(t),this.it.delete(t)))}return B}});var _t,wt;function $t(t){return t.substr(0,t.indexOf("."))}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(_t||(_t={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(wt||(wt={}));var kt=function(t,e,a,i){i=i||{},a=null==a?{}:a;var r=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return r.detail=a,t.dispatchEvent(r),r},At=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function Ct(t,e){if(t.length!==e.length)return!1;for(var a=0;a<t.length;a++)if(i=t[a],r=e[a],!(i===r||At(i)&&At(r)))return!1;var i,r;return!0}function Mt(t,e){var a;void 0===e&&(e=Ct);var i,r=[],o=!1;return function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return o&&a===this&&e(n,r)||(i=t.apply(this,n),o=!0,a=this,r=n),i}}function St(t){return Array.isArray?Array.isArray(t):"[object Array]"===Dt(t)}function Lt(t){return"string"==typeof t}function Et(t){return"number"==typeof t}function It(t){return!0===t||!1===t||function(t){return Pt(t)&&null!==t}(t)&&"[object Boolean]"==Dt(t)}function Pt(t){return"object"==typeof t}function Rt(t){return null!=t}function Tt(t){return!t.trim().length}function Dt(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const zt=Object.prototype.hasOwnProperty;class Ot{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(t=>{let a=jt(t);e+=a.weight,this._keys.push(a),this._keyMap[a.id]=a,e+=a.weight}),this._keys.forEach(t=>{t.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function jt(t){let e=null,a=null,i=null,r=1,o=null;if(Lt(t)||St(t))i=t,e=Ht(t),a=Nt(t);else{if(!zt.call(t,"name"))throw new Error((t=>`Missing ${t} property in key`)("name"));const n=t.name;if(i=n,zt.call(t,"weight")&&(r=t.weight,r<=0))throw new Error((t=>`Property 'weight' in key '${t}' must be a positive integer`)(n));e=Ht(n),a=Nt(n),o=t.getFn}return{path:e,id:a,weight:r,src:i,getFn:o}}function Ht(t){return St(t)?t:t.split(".")}function Nt(t){return St(t)?t.join("."):t}var Ut={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(t,e){let a=[],i=!1;const r=(t,e,o)=>{if(Rt(t))if(e[o]){const n=t[e[o]];if(!Rt(n))return;if(o===e.length-1&&(Lt(n)||Et(n)||It(n)))a.push(function(t){return null==t?"":function(t){if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)}(n));else if(St(n)){i=!0;for(let t=0,a=n.length;t<a;t+=1)r(n[t],e,o+1)}else e.length&&r(n,e,o+1)}else a.push(t)};return r(t,Lt(e)?e.split("."):e,0),i?a:a[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const Ft=/[^ ]+/g;class Bt{constructor({getFn:t=Ut.getFn,fieldNormWeight:e=Ut.fieldNormWeight}={}){this.norm=function(t=1,e=3){const a=new Map,i=Math.pow(10,e);return{get(e){const r=e.match(Ft).length;if(a.has(r))return a.get(r);const o=1/Math.pow(r,.5*t),n=parseFloat(Math.round(o*i)/i);return a.set(r,n),n},clear(){a.clear()}}}(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((t,e)=>{this._keysMap[t.id]=e})}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,Lt(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();Lt(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,a=this.size();e<a;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!Rt(t)||Tt(t))return;let a={v:t,i:e,n:this.norm.get(t)};this.records.push(a)}_addObject(t,e){let a={i:e,$:{}};this.keys.forEach((e,i)=>{let r=e.getFn?e.getFn(t):this.getFn(t,e.path);if(Rt(r))if(St(r)){let t=[];const e=[{nestedArrIndex:-1,value:r}];for(;e.length;){const{nestedArrIndex:a,value:i}=e.pop();if(Rt(i))if(Lt(i)&&!Tt(i)){let e={v:i,i:a,n:this.norm.get(i)};t.push(e)}else St(i)&&i.forEach((t,a)=>{e.push({nestedArrIndex:a,value:t})})}a.$[i]=t}else if(Lt(r)&&!Tt(r)){let t={v:r,n:this.norm.get(r)};a.$[i]=t}}),this.records.push(a)}toJSON(){return{keys:this.keys,records:this.records}}}function Vt(t,e,{getFn:a=Ut.getFn,fieldNormWeight:i=Ut.fieldNormWeight}={}){const r=new Bt({getFn:a,fieldNormWeight:i});return r.setKeys(t.map(jt)),r.setSources(e),r.create(),r}function Wt(t,{errors:e=0,currentLocation:a=0,expectedLocation:i=0,distance:r=Ut.distance,ignoreLocation:o=Ut.ignoreLocation}={}){const n=e/t.length;if(o)return n;const s=Math.abs(i-a);return r?n+s/r:s?1:n}function qt(t,e,a,{location:i=Ut.location,distance:r=Ut.distance,threshold:o=Ut.threshold,findAllMatches:n=Ut.findAllMatches,minMatchCharLength:s=Ut.minMatchCharLength,includeMatches:c=Ut.includeMatches,ignoreLocation:l=Ut.ignoreLocation}={}){if(e.length>32)throw new Error(`Pattern length exceeds max of ${32}.`);const d=e.length,h=t.length,p=Math.max(0,Math.min(i,h));let u=o,m=p;const g=s>1||c,f=g?Array(h):[];let v;for(;(v=t.indexOf(e,m))>-1;){let t=Wt(e,{currentLocation:v,expectedLocation:p,distance:r,ignoreLocation:l});if(u=Math.min(t,u),m=v+d,g){let t=0;for(;t<d;)f[v+t]=1,t+=1}}m=-1;let b=[],x=1,y=d+h;const _=1<<d-1;for(let i=0;i<d;i+=1){let o=0,s=y;for(;o<s;){Wt(e,{errors:i,currentLocation:p+s,expectedLocation:p,distance:r,ignoreLocation:l})<=u?o=s:y=s,s=Math.floor((y-o)/2+o)}y=s;let c=Math.max(1,p-s+1),v=n?h:Math.min(p+s,h)+d,w=Array(v+2);w[v+1]=(1<<i)-1;for(let o=v;o>=c;o-=1){let n=o-1,s=a[t.charAt(n)];if(g&&(f[n]=+!!s),w[o]=(w[o+1]<<1|1)&s,i&&(w[o]|=(b[o+1]|b[o])<<1|1|b[o+1]),w[o]&_&&(x=Wt(e,{errors:i,currentLocation:n,expectedLocation:p,distance:r,ignoreLocation:l}),x<=u)){if(u=x,m=n,m<=p)break;c=Math.max(1,2*p-m)}}if(Wt(e,{errors:i+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:l})>u)break;b=w}const w={isMatch:m>=0,score:Math.max(.001,x)};if(g){const t=function(t=[],e=Ut.minMatchCharLength){let a=[],i=-1,r=-1,o=0;for(let n=t.length;o<n;o+=1){let n=t[o];n&&-1===i?i=o:n||-1===i||(r=o-1,r-i+1>=e&&a.push([i,r]),i=-1)}return t[o-1]&&o-i>=e&&a.push([i,o-1]),a}(f,s);t.length?c&&(w.indices=t):w.isMatch=!1}return w}function Zt(t){let e={};for(let a=0,i=t.length;a<i;a+=1){const r=t.charAt(a);e[r]=(e[r]||0)|1<<i-a-1}return e}class Kt{constructor(t,{location:e=Ut.location,threshold:a=Ut.threshold,distance:i=Ut.distance,includeMatches:r=Ut.includeMatches,findAllMatches:o=Ut.findAllMatches,minMatchCharLength:n=Ut.minMatchCharLength,isCaseSensitive:s=Ut.isCaseSensitive,ignoreLocation:c=Ut.ignoreLocation}={}){if(this.options={location:e,threshold:a,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:n,isCaseSensitive:s,ignoreLocation:c},this.pattern=s?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(t,e)=>{this.chunks.push({pattern:t,alphabet:Zt(t),startIndex:e})},d=this.pattern.length;if(d>32){let t=0;const e=d%32,a=d-e;for(;t<a;)l(this.pattern.substr(t,32),t),t+=32;if(e){const t=d-32;l(this.pattern.substr(t),t)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:a}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return a&&(e.indices=[[0,t.length-1]]),e}const{location:i,distance:r,threshold:o,findAllMatches:n,minMatchCharLength:s,ignoreLocation:c}=this.options;let l=[],d=0,h=!1;this.chunks.forEach(({pattern:e,alphabet:p,startIndex:u})=>{const{isMatch:m,score:g,indices:f}=qt(t,e,p,{location:i+u,distance:r,threshold:o,findAllMatches:n,minMatchCharLength:s,includeMatches:a,ignoreLocation:c});m&&(h=!0),d+=g,m&&f&&(l=[...l,...f])});let p={isMatch:h,score:h?d/this.chunks.length:1};return h&&a&&(p.indices=l),p}}class Jt{constructor(t){this.pattern=t}static isMultiMatch(t){return Qt(t,this.multiRegex)}static isSingleMatch(t){return Qt(t,this.singleRegex)}search(){}}function Qt(t,e){const a=t.match(e);return a?a[1]:null}class Gt extends Jt{constructor(t,{location:e=Ut.location,threshold:a=Ut.threshold,distance:i=Ut.distance,includeMatches:r=Ut.includeMatches,findAllMatches:o=Ut.findAllMatches,minMatchCharLength:n=Ut.minMatchCharLength,isCaseSensitive:s=Ut.isCaseSensitive,ignoreLocation:c=Ut.ignoreLocation}={}){super(t),this._bitapSearch=new Kt(t,{location:e,threshold:a,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:n,isCaseSensitive:s,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Xt extends Jt{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,a=0;const i=[],r=this.pattern.length;for(;(e=t.indexOf(this.pattern,a))>-1;)a=e+r,i.push([e,a-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const Yt=[class extends Jt{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},Xt,class extends Jt{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}},class extends Jt{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends Jt{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},class extends Jt{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}},class extends Jt{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}},Gt],te=Yt.length,ee=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const ae=new Set([Gt.type,Xt.type]);class ie{constructor(t,{isCaseSensitive:e=Ut.isCaseSensitive,includeMatches:a=Ut.includeMatches,minMatchCharLength:i=Ut.minMatchCharLength,ignoreLocation:r=Ut.ignoreLocation,findAllMatches:o=Ut.findAllMatches,location:n=Ut.location,threshold:s=Ut.threshold,distance:c=Ut.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:a,minMatchCharLength:i,findAllMatches:o,ignoreLocation:r,location:n,threshold:s,distance:c},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map(t=>{let a=t.trim().split(ee).filter(t=>t&&!!t.trim()),i=[];for(let t=0,r=a.length;t<r;t+=1){const r=a[t];let o=!1,n=-1;for(;!o&&++n<te;){const t=Yt[n];let a=t.isMultiMatch(r);a&&(i.push(new t(a,e)),o=!0)}if(!o)for(n=-1;++n<te;){const t=Yt[n];let a=t.isSingleMatch(r);if(a){i.push(new t(a,e));break}}}return i})}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:a,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let r=0,o=[],n=0;for(let i=0,s=e.length;i<s;i+=1){const s=e[i];o.length=0,r=0;for(let e=0,i=s.length;e<i;e+=1){const i=s[e],{isMatch:c,indices:l,score:d}=i.search(t);if(!c){n=0,r=0,o.length=0;break}if(r+=1,n+=d,a){const t=i.constructor.type;ae.has(t)?o=[...o,...l]:o.push(l)}}if(r){let t={isMatch:!0,score:n/r};return a&&(t.indices=o),t}}return{isMatch:!1,score:1}}}const re=[];function oe(t,e){for(let a=0,i=re.length;a<i;a+=1){let i=re[a];if(i.condition(t,e))return new i(t,e)}return new Kt(t,e)}const ne="$and",se="$or",ce="$path",le="$val",de=t=>!(!t[ne]&&!t[se]),he=t=>({[ne]:Object.keys(t).map(e=>({[e]:t[e]}))});function pe(t,e,{auto:a=!0}={}){const i=t=>{let r=Object.keys(t);const o=(t=>!!t[ce])(t);if(!o&&r.length>1&&!de(t))return i(he(t));if((t=>!St(t)&&Pt(t)&&!de(t))(t)){const i=o?t[ce]:r[0],n=o?t[le]:t[i];if(!Lt(n))throw new Error((t=>"Invalid value for key "+t)(i));const s={keyId:Nt(i),pattern:n};return a&&(s.searcher=oe(n,e)),s}let n={children:[],operator:r[0]};return r.forEach(e=>{const a=t[e];St(a)&&a.forEach(t=>{n.children.push(i(t))})}),n};return de(t)||(t=he(t)),i(t)}function ue(t,e){const a=t.matches;e.matches=[],Rt(a)&&a.forEach(t=>{if(!Rt(t.indices)||!t.indices.length)return;const{indices:a,value:i}=t;let r={indices:a,value:i};t.key&&(r.key=t.key.src),t.idx>-1&&(r.refIndex=t.idx),e.matches.push(r)})}function me(t,e){e.score=t.score}class ge{constructor(t,e={},a){this.options={...Ut,...e},this.options.useExtendedSearch,this._keyStore=new Ot(this.options.keys),this.setCollection(t,a)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof Bt))throw new Error("Incorrect 'index' type");this._myIndex=e||Vt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Rt(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=(()=>!1)){const e=[];for(let a=0,i=this._docs.length;a<i;a+=1){const r=this._docs[a];t(r,a)&&(this.removeAt(a),a-=1,i-=1,e.push(r))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:a,includeScore:i,shouldSort:r,sortFn:o,ignoreFieldNorm:n}=this.options;let s=Lt(t)?Lt(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return function(t,{ignoreFieldNorm:e=Ut.ignoreFieldNorm}){t.forEach(t=>{let a=1;t.matches.forEach(({key:t,norm:i,score:r})=>{const o=t?t.weight:null;a*=Math.pow(0===r&&o?Number.EPSILON:r,(o||1)*(e?1:i))}),t.score=a})}(s,{ignoreFieldNorm:n}),r&&s.sort(o),Et(e)&&e>-1&&(s=s.slice(0,e)),function(t,e,{includeMatches:a=Ut.includeMatches,includeScore:i=Ut.includeScore}={}){const r=[];return a&&r.push(ue),i&&r.push(me),t.map(t=>{const{idx:a}=t,i={item:e[a],refIndex:a};return r.length&&r.forEach(e=>{e(t,i)}),i})}(s,this._docs,{includeMatches:a,includeScore:i})}_searchStringList(t){const e=oe(t,this.options),{records:a}=this._myIndex,i=[];return a.forEach(({v:t,i:a,n:r})=>{if(!Rt(t))return;const{isMatch:o,score:n,indices:s}=e.searchIn(t);o&&i.push({item:t,idx:a,matches:[{score:n,value:t,norm:r,indices:s}]})}),i}_searchLogical(t){const e=pe(t,this.options),a=(t,e,i)=>{if(!t.children){const{keyId:a,searcher:r}=t,o=this._findMatches({key:this._keyStore.get(a),value:this._myIndex.getValueForItemAtKeyId(e,a),searcher:r});return o&&o.length?[{idx:i,item:e,matches:o}]:[]}const r=[];for(let o=0,n=t.children.length;o<n;o+=1){const n=t.children[o],s=a(n,e,i);if(s.length)r.push(...s);else if(t.operator===ne)return[]}return r},i=this._myIndex.records,r={},o=[];return i.forEach(({$:t,i:i})=>{if(Rt(t)){let n=a(e,t,i);n.length&&(r[i]||(r[i]={idx:i,item:t,matches:[]},o.push(r[i])),n.forEach(({matches:t})=>{r[i].matches.push(...t)}))}}),o}_searchObjectList(t){const e=oe(t,this.options),{keys:a,records:i}=this._myIndex,r=[];return i.forEach(({$:t,i:i})=>{if(!Rt(t))return;let o=[];a.forEach((a,i)=>{o.push(...this._findMatches({key:a,value:t[i],searcher:e}))}),o.length&&r.push({idx:i,item:t,matches:o})}),r}_findMatches({key:t,value:e,searcher:a}){if(!Rt(e))return[];let i=[];if(St(e))e.forEach(({v:e,i:r,n:o})=>{if(!Rt(e))return;const{isMatch:n,score:s,indices:c}=a.searchIn(e);n&&i.push({score:s,key:t,value:e,idx:r,norm:o,indices:c})});else{const{v:r,n:o}=e,{isMatch:n,score:s,indices:c}=a.searchIn(r);n&&i.push({score:s,key:t,value:r,norm:o,indices:c})}return i}}function fe(t){const e=[];for(const[a,i]of Object.entries(t))"camera"===$t(a)&&e.push({name:i.attributes.friendly_name,entityID:i.entity_id,state:i.state});return e}ge.version="6.6.2",ge.createIndex=Vt,ge.parseIndex=function(t,{getFn:e=Ut.getFn,fieldNormWeight:a=Ut.fieldNormWeight}={}){const{keys:i,records:r}=t,o=new Bt({getFn:e,fieldNormWeight:a});return o.setKeys(i),o.setIndexRecords(r),o},ge.config=Ut,ge.parseQuery=pe,function(...t){re.push(...t)}(ie);var ve={camera:"camera",edit:"Edit",delete:"Delete",back:"Back",confirm:"confirm",add_camera:"Add Camera",edit_camera:"Edit Camera",delete_camera:"Delete Camera",custom_camera:"Custom Camera",go_back:"Back"},be={verify_action:"This action can not be undone"},xe={cameras:"Search cameras",brands:"Search Brands",models:"Search Models"},ye={integration:"Select type of Integration",name:"Camera Name (Obligatory)",still_image_url:"Static Image URL",stream_source:"Stream URL",username:"Username",password:"Password",record_video_of_camera:"Record Video of Camera",ip:"IP",number_of_cameras:"Number of cameras",advanced_options:"Advanced Options",authentication:"Select Authetication",verify_ssl:"Verify SSL",rtsp_transport:"Select RTSP Transport",framerate:"Framerate",channel:"Channel",still_url_door:"Still Image Door",stream_source_door:"Stream Door",add_multi_channels:"Add all channels?",issues:{missing_integration:"Select an integration type",name:"Camera name is required",duplicated_camera_name:"There is already a camera with that name",static_stream_source_missing:"No static or stream URL",ip_missing:"No IP address provided",n_cameras:"Number of cameras is not valid"}},_e={common:ve,dialog_text:be,search:xe,form:ye},we={camera:"Camera",edit:"Editar",delete:"Apagar",back:"Voltar"},$e={common:we};const ke={en:Object.freeze({__proto__:null,common:ve,dialog_text:be,search:xe,form:ye,default:_e}),pt:Object.freeze({__proto__:null,common:we,default:$e})};function Ae(t,e="",a=""){const i=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=t.split(".").reduce((t,e)=>t[e],ke[i])}catch(e){r=t.split(".").reduce((t,e)=>t[e],ke.en)}return void 0===r&&(r=t.split(".").reduce((t,e)=>t[e],ke.en)),""!==e&&""!==a&&(r=r.replace(e,a)),r}const Ce=t=>{class a extends t{async connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const t=this.__unsubs.pop();t instanceof Promise?t.then(t=>t()):t()}this.__unsubs=void 0}}updated(t){super.updated(t),t.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return e([ut({attribute:!1})],a.prototype,"hass",void 0),a};let Me=class extends lt{render(){return F`
      <ha-button-menu corner="BOTTOM_LEFT" @action=${this._handleAction}>
        <ha-icon-button slot="trigger" .path=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}></ha-icon-button>
        <mwc-list-item>
          <ha-svg-icon .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}></ha-svg-icon>
          ${Ae("common.edit")}
        </mwc-list-item>
        <!-- <div class="line"></div> -->
        <mwc-list-item class="delete-item">
          <ha-svg-icon .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}></ha-svg-icon>
          ${Ae("common.delete")}
        </mwc-list-item>
      </ha-button-menu>
    `}_handleAction(t){switch(t.detail.index){case 0:kt(this,"edit-camera",{cameraInfo:this.cameraInfo});break;case 1:kt(this,"delete-camera",{cameraInfo:this.cameraInfo})}}static get styles(){return d`
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
    `}};e([ut({attribute:!1})],Me.prototype,"hass",void 0),e([ut({attribute:!1})],Me.prototype,"cameraInfo",void 0),Me=e([ht("camera-button-menu")],Me);const Se=d`
  a {
    text-decoration: var(--hcv-text-decoration-link);
    color: var(--hcv-text-color-link);
  }
`,Le=d`
  ha-svg-icon {
    color: var(--hcv-color-icon);
  }
`,Ee=d`
  mwc-button[raised] {
    border-radius: 4px;
  }
  mwc-button[raised] > ha-circular-progress {
    --mdc-theme-primary: var(--hcv-text-color-primary);
  }
`;d`
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
`;const Ie=d`
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
`,Pe=d`
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

  ${Ie}

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
`,Re=d`
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
`;d`
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
`,d`
  body {
    background-color: var(--primary-background-color, var(--primary-background));
    color: var(--primary-text-color);
    height: calc(100vh - 32px);
    width: 100vw;
  }
`;const Te=[Pe,Le,d`
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
`,Se,Ee];let De=class extends lt{render(){return F`
      <ha-card narrow=${this.narrow}>
        <div class="top-row">
          <camera-button-menu .hass=${this.hass} .cameraInfo=${this.cameraInfo}></camera-button-menu>
        </div>
        <ha-svg-icon class="main-camera-icon" path=${"M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z"} @click=${this.more_info}></ha-svg-icon>
        <div class="card-title">${this.cameraInfo.name}</div>
      </ha-card>
    `}more_info(t){const e=this.cameraInfo.entityID,a=t.target;kt(a,"show-dialog",{dialogTag:"ha-more-info-dialog-camera",dialogImport:()=>Promise.resolve().then((function(){return Ze})),dialogParams:{entityId:e}})}static get styles(){return[Te,d`
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
      `]}};e([ut({attribute:!1})],De.prototype,"hass",void 0),e([ut({attribute:!1})],De.prototype,"cameraInfo",void 0),e([ut({type:Boolean})],De.prototype,"record",void 0),e([ut({type:Boolean})],De.prototype,"narrow",void 0),De=e([ht("raceland-camera-card")],De);
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
class ze{constructor(t){this.startPress=e=>{t().then(t=>{t&&t.startPress(e)})},this.endPress=()=>{t().then(t=>{t&&t.endPress()})},this.startFocus=()=>{t().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{t().then(t=>{t&&t.endFocus()})},this.startHover=()=>{t().then(t=>{t&&t.startHover()})},this.endHover=()=>{t().then(t=>{t&&t.endHover()})}}}let Oe=class extends lt{constructor(){super(...arguments),this._shouldRenderRipple=!1,this._rippleHandlers=new ze(()=>(this._shouldRenderRipple=!0,this._ripple))}render(){return F`
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
        <ha-svg-icon .path=${r} id="icon"></ha-svg-icon>
        <div id="text">${Ae("common.add_camera")}</div>
        ${this._shouldRenderRipple?F`<mwc-ripple></mwc-ripple>`:""}
      </ha-card>
    `}handleRippleActivate(t){this._rippleHandlers.startPress(t)}handleRippleDeactivate(){this._rippleHandlers.endPress()}handleRippleFocus(){this._rippleHandlers.startFocus()}handleRippleBlur(){this._rippleHandlers.endFocus()}static get styles(){return[d`
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
      `]}};e([ut({attribute:!1})],Oe.prototype,"hass",void 0),e([ut({type:Boolean})],Oe.prototype,"narrow",void 0),e([mt()],Oe.prototype,"_shouldRenderRipple",void 0),e([
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function(t){return gt({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}("mwc-ripple")],Oe.prototype,"_ripple",void 0),e([function(t){return gt({finisher:(e,a)=>{Object.assign(e.prototype[a],t)}})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */({passive:!0})],Oe.prototype,"handleRippleActivate",null),Oe=e([ht("new-camera-card")],Oe),t.MyAlarmPanel=class extends(Ce(lt)){constructor(){super(...arguments),this._filter="",this._filterCameras=Mt((t,e)=>{if(!e)return t;let a=t;return a=new ge(a,{keys:["name"],isCaseSensitive:!1,minMatchCharLength:1,threshold:.2}).search(e).map(t=>t.item),a})}hassSubscribe(){return[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"camera_dashboard_config_updated"})]}async _fetchData(){this.hass&&(this.cameraList=await fe(this.hass.states))}async firstUpdated(t){super.firstUpdated(t),this.cameraDatabase=await(async t=>await t.connection.sendMessagePromise({type:"raceland-camera-dashboard/fetch_camera_db"}))(this.hass),this.cameraList=await fe(this.hass.states),await(async()=>{if(customElements.get("ha-checkbox")&&customElements.get("ha-slider"))return;await customElements.whenDefined("partial-panel-resolver");const t=document.createElement("partial-panel-resolver");t.hass={panels:[{url_path:"tmp",component_name:"config"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const e=document.createElement("ha-panel-config");await e.routerOptions.routes.automation.load(),t.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},t._updateRoutes(),await t.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-app-layout")})(),this.requestUpdate()}render(){if(!customElements.get("ha-app-layout"))return F`
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
                .label=${Ae("search.cameras")}
              ></search-input>
            </div>
          `:F`
            <search-input
              .hass=${this.hass}
              .filter=${this._filter}
              @value-changed=${this._handleSearchChange}
              .label=${Ae("search.cameras")}
            ></search-input>
          `}
      <div class="sep"></div>
      <div class="content">
        <div class="contentFather">
          <div
            class=${yt({"camera-list":0!==(null==t?void 0:t.length),"camera-list-one":0===(null==t?void 0:t.length)})}
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
            <ha-fab .label=${Ae("common.camera")} extended @click=${this._addCamera} })}>
              <ha-svg-icon slot="icon" .path=${r}></ha-svg-icon>
            </ha-fab>
          `}
    `}_addCamera(){kt(this,"show-dialog",{dialogTag:"add-camera-dialog",dialogImport:()=>Promise.resolve().then((function(){return ia})),dialogParams:{cameraDatabase:this.cameraDatabase.manufacturer}})}_handleSearchChange(t){this._filter=t.detail.value}static get styles(){return d`
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
    `}},e([ut({attribute:!1})],t.MyAlarmPanel.prototype,"hass",void 0),e([ut({attribute:!1})],t.MyAlarmPanel.prototype,"cameraDatabase",void 0),e([ut({attribute:!1})],t.MyAlarmPanel.prototype,"cameraList",void 0),e([ut({attribute:!1})],t.MyAlarmPanel.prototype,"narrow",void 0),e([mt()],t.MyAlarmPanel.prototype,"_filter",void 0),t.MyAlarmPanel=e([ht("alarm-panel")],t.MyAlarmPanel);
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const{I:je}=rt,He=(t,e)=>void 0===e?void 0!==(null==t?void 0:t._$litType$):(null==t?void 0:t._$litType$)===e,Ne=()=>document.createComment(""),Ue=(t,e,a)=>{var i;const r=t._$AA.parentNode,o=void 0===e?t._$AB:e._$AA;if(void 0===a){const e=r.insertBefore(Ne(),o),i=r.insertBefore(Ne(),o);a=new je(e,i,t,t.options)}else{const e=a._$AB.nextSibling,n=a._$AM,s=n!==t;if(s){let e;null===(i=a._$AQ)||void 0===i||i.call(a,t),a._$AM=t,void 0!==a._$AP&&(e=t._$AU)!==n._$AU&&a._$AP(e)}if(e!==o||s){let t=a._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,o),t=e}}}return a},Fe={},Be=(t,e=Fe)=>t._$AH=e,Ve=t=>t._$AH,We=bt(class extends xt{constructor(t){super(t),this.tt=new WeakMap}render(t){return[t]}update(t,[e]){if(He(this.et)&&(!He(e)||this.et.strings!==e.strings)){const e=Ve(t).pop();let a=this.tt.get(this.et.strings);if(void 0===a){const t=document.createDocumentFragment();a=nt(V,t),a.setConnected(!1),this.tt.set(this.et.strings,a)}Be(a,[e]),Ue(a,void 0,e)}if(He(e)){if(!He(this.et)||this.et.strings!==e.strings){const a=this.tt.get(e.strings);if(void 0!==a){const e=Ve(a).pop();(t=>{t._$AR()})(t),Ue(t,void 0,e),Be(t,[e])}}this.et=e}else this.et=void 0;return this.render(e)}});
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let qe=class extends lt{constructor(){super(...arguments),this.large=!1,this._currTabIndex=0}showDialog(t){this._entityId=t.entityId,this._entityId?this.large=!1:this.closeDialog()}closeDialog(){this._entityId=void 0,this._currTabIndex=0}render(){if(!this._entityId)return F``;const t=this._entityId,e=this.hass.states[t];if(!e)return F``;const a=$t(t),r=computeStateName(e)||" ";return F`
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
          <mwc-tab-bar .activeIndex=${this._currTabIndex} @MDCTabBar:activated=${this._handleTabChanged}>
            <mwc-tab .label=${this.hass.localize("ui.dialogs.more_info_control.details")} dialogInitialFocus></mwc-tab>
            <mwc-tab .label=${this.hass.localize("ui.dialogs.more_info_control.history")}></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="content" tabindex="-1" dialogInitialFocus>
          ${We(0===this._currTabIndex?F`
                  <more-info-content .stateObj=${e} .hass=${this.hass}></more-info-content>
                  <p>
                    ${this.hass.localize("ui.dialogs.more_info_control.restored.not_provided")}
                  </p>
                  <p>
                    ${this.hass.localize("ui.dialogs.more_info_control.restored.remove_intro")}
                  </p>
                  <mwc-button class="warning" @click=${this._removeEntity}>
                    ${this.hass.localize("ui.dialogs.more_info_control.restored.remove_action")}
                  </mwc-button>
                `:"")}
        </div>
      </ha-dialog>
    `}_handleTabChanged(t){t.detail.index!==this._currTabIndex&&(this._currTabIndex=t.detail.index)}static get styles(){return[Re,d`
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
      `]}};e([ut({attribute:!1})],qe.prototype,"hass",void 0),e([ut({type:Boolean,reflect:!0})],qe.prototype,"large",void 0),e([mt()],qe.prototype,"_entityId",void 0),e([mt()],qe.prototype,"_currTabIndex",void 0),qe=e([ht("ha-more-info-dialog-camera")],qe);var Ze=Object.freeze({__proto__:null,get MoreInfoDialog(){return qe}});const Ke=()=>Promise.resolve().then((function(){return ia})),Je=(t,e)=>{kt(t,"show-dialog",{dialogTag:"add-camera-dialog",dialogImport:Ke,dialogParams:e})},Qe=[{name:"name",selector:{text:{}}},{name:"still_image_url",selector:{text:{}}},{name:"stream_source",selector:{text:{}}},{type:"grid",name:"",schema:[{name:"username",selector:{text:{}}},{name:"password",selector:{text:{type:"password"}}}]},{name:"advanced_options",selector:{boolean:{}}}],Ge=[{name:"authentication",selector:{select:{options:["Basic","Digest"],mode:"dropdown"}}},{name:"verify_ssl",selector:{select:{options:["True","False"],mode:"dropdown"}}},{name:"rtsp_transport",selector:{select:{options:["tcp","udp","udp_multicast","http"],mode:"dropdown"}}},{name:"framerate",selector:{number:{min:1,max:60,step:1,mode:"slider",unit_of_measurement:"FPS"}}}],Xe="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";let Ye=class extends lt{constructor(){super(...arguments),this.disabled=!1,this.label="",this.hideTitle=!1}render(){return F`
      <mwc-icon-button .ariaLabel=${this.label} .title=${this.hideTitle?"":this.label} .disabled=${this.disabled}>
        ${this.svgPath?F`
              <img loading="lazy" referrerpolicy="no-referrer" src=${this.svgPath} alt="Brand Icon" />
            `:F`
              ${this.hideTitle?"":this.label}
            `}
      </mwc-icon-button>
    `}static get styles(){return d`
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
    `}};Ye.shadowRootOptions={mode:"open",delegatesFocus:!0},e([ut({type:Boolean,reflect:!0})],Ye.prototype,"disabled",void 0),e([ut({type:String})],Ye.prototype,"svgPath",void 0),e([ut({type:String})],Ye.prototype,"label",void 0),e([ut({attribute:!1})],Ye.prototype,"cameraModelList",void 0),e([ut({type:Boolean})],Ye.prototype,"hideTitle",void 0),Ye=e([ht("camera-brand-icon-button")],Ye);let ta=class extends lt{constructor(){super(...arguments),this.suffix=!1,this.autofocus=!1}focus(){var t;null===(t=this._input)||void 0===t||t.focus()}render(){return F`
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
    `}async _filterChanged(t){kt(this,"value-changed",{value:String(t)})}async _filterInputChanged(t){this._filterChanged(t.target.value)}async _clearSearch(){this._filterChanged("")}static get styles(){return d`
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
    `}};e([ut({attribute:!1})],ta.prototype,"hass",void 0),e([ut()],ta.prototype,"filter",void 0),e([ut({type:Boolean})],ta.prototype,"suffix",void 0),e([ut({type:Boolean})],ta.prototype,"autofocus",void 0),e([ut({type:String})],ta.prototype,"label",void 0),e([function(t,e){return gt({descriptor:a=>{const i={get(){var e,a;return null!==(a=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==a?a:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof a?Symbol():"__"+a;i.get=function(){var a,i;return void 0===this[e]&&(this[e]=null!==(i=null===(a=this.renderRoot)||void 0===a?void 0:a.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}("ha-textfield",!0)],ta.prototype,"_input",void 0),ta=e([ht("search-input-round")],ta);const ea=d`
  //TODO: If this is a const import from a file instead of defining it everytime
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    /* --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px; */
    --mdc-dialog-heading-ink-color: var(--primary-text-color);
    --mdc-dialog-content-ink-color: var(--primary-text-color);
    --justify-action-buttons: space-between;
    --mdc-switch__pointer_events: auto;
  }

  ha-dialog.form {
    padding-bottom: 24px;
    color: var(--primary-text-color);
  }

  a {
    color: var(--accent-color) !important;
  }

  /* make dialog fullscreen on small screens */
  @media all and (max-width: 500px), all and (max-height: 500px) {
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
`;let aa=class extends lt{constructor(){super(...arguments),this._currTabIndex=0,this._filter="",this._filterBrands=Mt((t,e)=>{if(!e)return t;let a=t;return a=new ge(a,{keys:["name"],isCaseSensitive:!1,minMatchCharLength:1,threshold:.2}).search(e).map(t=>t.item),a})}async showDialog(t){this.open=!0,this.cameraDatabase=t.cameraDatabase}closeDialog(){return this.open=!1,this._currTabIndex=0,!0}render(){if(!this.open)return F``;const t=this._filterBrands(this.cameraDatabase,this._filter);return F`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${yt({table:1===this._currTabIndex})}
      >
        <div class="cancel">
          <div slot="heading" class="heading">
            <ha-header-bar id="bar">
              <div slot="title" class="main-title">
                ${Ae("common.add_camera")}
              </div>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
                id="cancel"
                .path=${Xe}
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
                .label=${Ae("search.brands")}
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
            .label=${Ae("common.custom_camera")}
            extended
            @click=${this._addCustomCamera}
          >
            <ha-svg-icon slot="icon" .path=${r}></ha-svg-icon>
          </ha-fab>
        </div>
      </ha-dialog>
    `}_openCameraBrandDialog(t,e){const a=t.target;kt(a,"show-dialog",{dialogTag:"camera-brand-dialog",dialogImport:()=>Promise.resolve().then((function(){return la})),dialogParams:{cameraDatabase:this.cameraDatabase,modelsInfo:e}}),this.closeDialog()}_addCustomCamera(t){const e={cameraModelInfo:{},schema:{header:{title:Ae("common.add_camera")},body:Qe,extra_options:Ge,footer:{back:Ae("common.go_back"),accept:Ae("common.add_camera")}},data:{},formType:"custom_camera",backEvent:{call:Je,eventData:{cameraDatabase:this.cameraDatabase}}},a=t.target;kt(a,"show-dialog",{dialogTag:"raceland-formulary",dialogImport:()=>Promise.resolve().then((function(){return pa})),dialogParams:e}),this.closeDialog()}_handleSearchChange(t){this._filter=t.detail.value}static get styles(){return[ea,d`
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
          /* background-color: #4ba2ff; */
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

        .cancel {
          cursor: pointer;
          /* padding: 20px 20px 20px 20px; */
          width: 100%;
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
        .header_button {
          color: inherit;
          text-decoration: none;
        }

        .cancel-icon {
          float: right;
          width: 40px;
          height: 40px;
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
      `]}};e([ut({attribute:!1})],aa.prototype,"hass",void 0),e([ut({attribute:!1})],aa.prototype,"cameraDatabase",void 0),e([mt()],aa.prototype,"_currTabIndex",void 0),e([mt()],aa.prototype,"_filter",void 0),e([mt()],aa.prototype,"open",void 0),aa=e([ht("add-camera-dialog")],aa);var ia=Object.freeze({__proto__:null,haStyleDialog:ea,get HuiCreateDialogCamera(){return aa}});const ra=()=>Promise.resolve().then((function(){return la})),oa=(t,e)=>{kt(t,"show-dialog",{dialogTag:"camera-brand-dialog",dialogImport:ra,dialogParams:e})};let na=class extends lt{constructor(){super(...arguments),this.disabled=!1,this.label="",this.hideTitle=!1}render(){return F`
      <button .ariaLabel=${this.label} .title=${this.hideTitle?"":this.label} .disabled=${this.disabled}>
        ${this.hideTitle?"":this.label}
      </button>
    `}static get styles(){return d`
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
    `}};na.shadowRootOptions={mode:"open",delegatesFocus:!0},e([ut({type:Boolean,reflect:!0})],na.prototype,"disabled",void 0),e([ut({type:String})],na.prototype,"label",void 0),e([ut({attribute:!1})],na.prototype,"cameraModelInfo",void 0),e([ut({type:Boolean})],na.prototype,"hideTitle",void 0),na=e([ht("camera-model-icon-button")],na);const sa=d`
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-heading-ink-color: var(--primary-text-color);
    --mdc-dialog-content-ink-color: var(--primary-text-color);
    --justify-action-buttons: space-between;
    --mdc-switch__pointer_events: auto;
  }

  ha-dialog.form {
    padding-bottom: 24px;
    color: var(--primary-text-color);
  }

  a {
    color: var(--accent-color) !important;
  }

  /* make dialog fullscreen on small screens */
  @media all and (max-width: 500px), all and (max-height: 500px) {
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
`;let ca=class extends lt{constructor(){super(...arguments),this._currTabIndex=0,this._filter="",this._filterModels=Mt((t,e)=>{if(!e)return t;let a=t;return a=new ge(a,{keys:["version"],isCaseSensitive:!1,minMatchCharLength:1,threshold:.2}).search(e).map(t=>t.item),a})}showDialog(t){this.cameraDatabase=t.cameraDatabase,this.modelList=t.modelsInfo}closeDialog(){return this.modelList=void 0,this._currTabIndex=0,!0}render(){if(!this.modelList)return F``;const t=this._filterModels(this.modelList,this._filter),e=[],i=[];return F`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${yt({table:1===this._currTabIndex})}
      >
        <div class="cancel">
          <div slot="heading" class="heading">
            <ha-header-bar id="bar">
              <div slot="title" class="main-title" .title=${name}>
                ${Ae("common.add_camera")}
              </div>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
                id="cancel"
                .path=${Xe}
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
                .label=${Ae("search.brands")}
              ></search-input-round>
            </div>

            <div class="brand-list">
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
            .label=${Ae("common.custom_camera")}
            extended
            @click=${this._addCustomCamera}
          >
            <ha-svg-icon slot="icon" .path=${r}></ha-svg-icon>
          </ha-fab>
          <mwc-button class="button-back" @click=${this.goBack}>
            ${Ae("common.back")}
            <ha-svg-icon class="icon-back" slot="icon" .path=${a}></ha-svg-icon>
          </mwc-button>
        </div>
      </ha-dialog>
    `}_addCamera(t,e,a,i){e.fields.forEach(t=>{a.push(t)}),void 0!==e.advanced_options&&(a.push({name:"advanced_options",selector:{boolean:{}}}),e.advanced_options.forEach(t=>{i.push(t)}));const r={schema:{header:{title:Ae("common.add_camera")},body:a,extra_options:i,footer:{back:Ae("common.go_back"),accept:Ae("common.add_camera")}},cameraModelInfo:e,data:Object.assign(Object.assign({},e.default),{still_image_url:e.options.static,stream_source:e.options.stream}),formType:"brand_camera",backEvent:{call:oa,eventData:{cameraDatase:this.cameraDatabase,modelInfo:e}}},o=t.target;kt(o,"show-dialog",{dialogTag:"raceland-formulary",dialogImport:()=>Promise.resolve().then((function(){return pa})),dialogParams:r}),this.closeDialog()}_addCustomCamera(t){const e={cameraModelInfo:{},schema:{header:{title:Ae("common.add_camera")},body:Qe,extra_options:Ge,footer:{back:Ae("common.go_back"),accept:Ae("common.add_camera")}},data:{},formType:"custom_camera",backEvent:{call:Je,eventData:{cameraDatabase:this.cameraDatabase}}},a=t.target;kt(a,"show-dialog",{dialogTag:"raceland-formulary",dialogImport:()=>Promise.resolve().then((function(){return pa})),dialogParams:e}),this.closeDialog()}goBack(t){const e=t.target;Je(e,{cameraDatabase:this.cameraDatabase}),this.closeDialog()}_handleSearchChange(t){this._filter=t.detail.value}static get styles(){return[sa,d`
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
        .cancel {
          cursor: pointer;
          /* padding: 20px 20px 20px 20px; */
          width: 100%;
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

        .add-camera {
          float: left;
          /* font-family: "Roboto"; */
          font-style: normal;
          font-weight: 500;
          font-size: 36px;
          line-height: 42px;
          color: #303033;
          padding: 1% 1% 1% 1%;
          text-align: center;
          width: 38%;
        }
        .brand-list {
          display: grid;
          width: 90%;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 4%;
          padding: 0px 55px 25px;
        }

        .header_button {
          color: inherit;
          text-decoration: none;
        }

        mwc-tab-bar {
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
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
      `]}};e([ut({attribute:!1})],ca.prototype,"hass",void 0),e([mt()],ca.prototype,"cameraDatabase",void 0),e([ut({attribute:!1})],ca.prototype,"modelList",void 0),e([mt()],ca.prototype,"_currTabIndex",void 0),e([mt()],ca.prototype,"_filter",void 0),ca=e([ht("camera-brand-dialog")],ca);var la=Object.freeze({__proto__:null,haStyleDialog:sa,get HuiCreateDialogCameraBrand(){return ca}});const da=d`
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
`;let ha=class extends lt{constructor(){super(...arguments),this._currTabIndex=0,this._computeLabelCallback=t=>Ae("form."+t.name)}showDialog(t){this.schema=t.schema,this.backEvent=t.backEvent,this.data=t.data,this.formType=t.formType,this.cameraModelInfo=t.cameraModelInfo,this.open=!0,this.registeredCameras=fe(this.hass.states).map(t=>t.name)}closeDialog(){return this._currTabIndex=0,this.open=void 0,!0}render(){if(!this.open)return F``;const t=this.schema.body,e=this.schema.extra_options;return F`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${yt({table:1===this._currTabIndex})}
      >
        <div class="cancel">
          <div slot="heading" class="heading">
            <ha-header-bar id="bar">
              <div slot="title" class="main-title" .title=${name}>
                ${Ae("common.add_camera")}
              </div>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
                id="cancel"
                .path=${Xe}
              ></ha-icon-button>
            </ha-header-bar>
          </div>
        </div>
        <div
          class="content ${yt({"content-big":t.length<6})} "
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
            <ha-svg-icon slot="icon" .path=${r}></ha-svg-icon>
          </ha-fab>
          ${this.backEvent?F`
                <mwc-button class="button-back" dialogAction="close" @click=${this._goBack}>
                  ${this.schema.footer.back}
                  <ha-svg-icon class="icon-back" slot="icon" .path=${a}></ha-svg-icon>
                </mwc-button>
              `:F``}
        </div>
      </ha-dialog>
    `}_valueChanged(t){const e=function(t){const e={};for(const[a,i]of Object.entries(t))"string"==typeof i&&(e[a]=i.trim()),"boolean"==typeof i&&(e[a]=i),"number"==typeof i&&(e[a]=i);return e}(t.detail.value);this.data=Object.assign(Object.assign({},this.data),e)}validInputCustom(){return this.data.name?this.registeredCameras.includes(this.data.name)?(this.validIssue=Ae("form.issues.duplicated_camera_name"),!1):!(!this.data.still_image_url&&!this.data.stream_source)||(this.validIssue=Ae("form.issues.static_stream_source_missing"),!1):(this.validIssue=Ae("form.issues.name"),!1)}validInput(){if(!this.data.ip)return this.validIssue=Ae("form.issues.ip_missing"),!1;if(isNaN(Number(this.data.channel))||void 0!==this.data.channel&&this.data.channel<=0)return this.validIssue=Ae("form.issues.n_cameras"),!1;let t=[];const e=parseInt(this.data.channel);return t=void 0!==this.data.channel&&e>1?Array.from({length:e},(t,e)=>`${this.data.name} ${e+1}`):[this.data.name],!(t.filter(t=>this.registeredCameras.includes(t)).length>0)||(this.validIssue=Ae("form.issues.duplicated_camera_name"),!1)}async _accept(){if("custom_camera"===this.formType){if(!0===this.validInputCustom()){!0===await(async(t,e)=>await t.connection.sendMessagePromise(Object.assign({type:"raceland-camera-dashboard/register_camera"},e)))(this.hass,this.data)&&this.closeDialog()}}else if("brand_camera"===this.formType){!0===this.validInput()&&(await(async(t,e)=>await t.connection.sendMessagePromise(Object.assign({type:"raceland-camera-dashboard/register_model_camera"},e)))(this.hass,this.data),this.closeDialog())}}_goBack(t){const e=t.target;this.backEvent.call(e,this.backEvent.eventData)}static get styles(){return[da,d`
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
      `]}};e([ut({attribute:!1})],ha.prototype,"hass",void 0),e([ut({attribute:!1})],ha.prototype,"open",void 0),e([ut({attribute:!1})],ha.prototype,"data",void 0),e([ut({attribute:!1})],ha.prototype,"cameraModelInfo",void 0),e([ut({attribute:!1})],ha.prototype,"backEvent",void 0),e([ut({type:String})],ha.prototype,"formType",void 0),e([ut({attribute:!1})],ha.prototype,"schema",void 0),e([ut({attribute:!1})],ha.prototype,"registeredCameras",void 0),e([mt()],ha.prototype,"_currTabIndex",void 0),e([mt()],ha.prototype,"validIssue",void 0),ha=e([ht("raceland-formulary")],ha);var pa=Object.freeze({__proto__:null,haStyleDialog:da,get HuiCreateDialogCameraFormulary(){return ha}});Object.defineProperty(t,"__esModule",{value:!0})}({});
