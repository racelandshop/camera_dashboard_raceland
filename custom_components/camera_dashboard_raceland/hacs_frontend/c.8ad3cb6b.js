import{r as t}from"./main-0443badf.js";import"lit-html/is-server.js";import{ao as r,aa as a}from"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";customElements.define("hui-horizontal-stack-card",class extends r{async getCardSize(){if(!this._cards)return 0;const t=[];for(const r of this._cards)t.push(a(r));const r=await Promise.all(t);return Math.max(...r)}static get styles(){return[super.sharedStyles,t`
        #root {
          display: flex;
          height: 100%;
        }
        #root > * {
          flex: 1 1 0;
          margin: var(
            --horizontal-stack-card-margin,
            var(--stack-card-margin, 0 4px)
          );
          min-width: 0;
        }
        #root > *:first-child {
          margin-left: 0;
        }
        #root > *:last-child {
          margin-right: 0;
        }
      `]}});
