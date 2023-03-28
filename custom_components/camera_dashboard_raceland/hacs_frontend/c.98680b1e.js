import{r}from"./main-0443badf.js";import"lit-html/is-server.js";import{ao as t,aa as a}from"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";customElements.define("hui-vertical-stack-card",class extends t{async getCardSize(){if(!this._cards)return 0;const r=[];for(const t of this._cards)r.push(a(t));return(await Promise.all(r)).reduce(((r,t)=>r+t),0)}static get styles(){return[super.sharedStyles,r`
        #root {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        #root > * {
          margin: var(
            --vertical-stack-card-margin,
            var(--stack-card-margin, 4px 0)
          );
        }
        #root > *:first-child {
          margin-top: 0;
        }
        #root > *:last-child {
          margin-bottom: 0;
        }
      `]}});
