import{e,i as s,K as t,m as l,dB as r,r as n,dC as o,s as i,T as u}from"./main-b570e60a.js";const a=(e,s,t)=>{const l=new Map;for(let r=s;r<=t;r++)l.set(e[r],r);return l},f=e(class extends s{constructor(e){if(super(e),e.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}ht(e,s,t){let l;void 0===t?t=s:void 0!==s&&(l=s);const r=[],n=[];let o=0;for(const s of e)r[o]=l?l(s,o):o,n[o]=t(s,o),o++;return{values:n,keys:r}}render(e,s,t){return this.ht(e,s,t).values}update(e,[s,t,f]){var c;const h=l(e),{values:d,keys:v}=this.ht(s,t,f);if(!Array.isArray(h))return this.ut=v,d;const p=null!==(c=this.ut)&&void 0!==c?c:this.ut=[],y=[];let x,g,m=0,b=h.length-1,k=0,w=d.length-1;for(;m<=b&&k<=w;)if(null===h[m])m++;else if(null===h[b])b--;else if(p[m]===v[k])y[k]=r(h[m],d[k]),m++,k++;else if(p[b]===v[w])y[w]=r(h[b],d[w]),b--,w--;else if(p[m]===v[w])y[w]=r(h[m],d[w]),n(e,y[w+1],h[m]),m++,w--;else if(p[b]===v[k])y[k]=r(h[b],d[k]),n(e,h[m],h[b]),b--,k++;else if(void 0===x&&(x=a(v,k,w),g=a(p,m,b)),x.has(p[m]))if(x.has(p[b])){const s=g.get(v[k]),t=void 0!==s?h[s]:null;if(null===t){const s=n(e,h[m]);r(s,d[k]),y[k]=s}else y[k]=r(t,d[k]),n(e,h[m],t),h[s]=null;k++}else o(h[b]),b--;else o(h[m]),m++;for(;k<=w;){const s=n(e,y[w+1]);r(s,d[k]),y[k++]=s}for(;m<=b;){const e=h[m++];null!==e&&o(e)}return this.ut=v,i(e,y),u}});export{f as c};
