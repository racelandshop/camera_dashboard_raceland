import{e,i as t,O as n,K as r,T as s}from"./main-b570e60a.js";const i=e(class extends t{constructor(e){if(super(e),n(this,"_element",void 0),e.type!==r.CHILD)throw new Error("dynamicElementDirective can only be used in content bindings")}update(e,[t,n]){return this._element&&this._element.localName===t?(n&&Object.entries(n).forEach((([e,t])=>{this._element[e]=t})),s):this.render(t,n)}render(e,t){return this._element=document.createElement(e),t&&Object.entries(t).forEach((([e,t])=>{this._element[e]=t})),this._element}});export{i as d};
