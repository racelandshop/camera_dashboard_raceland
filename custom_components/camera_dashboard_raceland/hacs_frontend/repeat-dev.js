const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

import { e, i, J as t, a, dB as c$1, u as u$1, dC as m, s, O as b } from './main-dev.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const u=(e,s,t)=>{const r=new Map();for(let l=s;l<=t;l++)r.set(e[l],l);return r;},c=e(class extends i{constructor(e){if(super(e),e.type!==t.CHILD)throw Error("repeat() can only be used in text expressions");}dt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l};}render(e,s,t){return this.dt(e,s,t).values;}update(s$1,[t,r,c]){var d;const a$1=a(s$1),{values:p,keys:v}=this.dt(t,r,c);if(!Array.isArray(a$1))return this.at=v,p;const h=null!==(d=this.at)&&void 0!==d?d:this.at=[],m$1=[];let y,x,j=0,k=a$1.length-1,w=0,A=p.length-1;for(;j<=k&&w<=A;)if(null===a$1[j])j++;else if(null===a$1[k])k--;else if(h[j]===v[w])m$1[w]=c$1(a$1[j],p[w]),j++,w++;else if(h[k]===v[A])m$1[A]=c$1(a$1[k],p[A]),k--,A--;else if(h[j]===v[A])m$1[A]=c$1(a$1[j],p[A]),u$1(s$1,m$1[A+1],a$1[j]),j++,A--;else if(h[k]===v[w])m$1[w]=c$1(a$1[k],p[w]),u$1(s$1,a$1[j],a$1[k]),k--,w++;else if(void 0===y&&(y=u(v,w,A),x=u(h,j,k)),y.has(h[j])){if(y.has(h[k])){const e=x.get(v[w]),t=void 0!==e?a$1[e]:null;if(null===t){const e=u$1(s$1,a$1[j]);c$1(e,p[w]),m$1[w]=e;}else m$1[w]=c$1(t,p[w]),u$1(s$1,a$1[j],t),a$1[e]=null;w++;}else m(a$1[k]),k--;}else m(a$1[j]),j++;for(;w<=A;){const e=u$1(s$1,m$1[A+1]);c$1(e,p[w]),m$1[w++]=e;}for(;j<=k;){const e=a$1[j++];null!==e&&m(e);}return this.at=v,s(s$1,m$1),b;}});

export { c };
