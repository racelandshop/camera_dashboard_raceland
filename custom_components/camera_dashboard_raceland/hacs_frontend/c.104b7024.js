import{_ as t,c as e,d as s,j as i,k as a,f as r,$ as c,r as o,n}from"./main-0443badf.js";import"lit-html/is-server.js";import"./c.60b82eb5.js";import{as as d}from"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.efb702cd.js";let h=t([n("hui-starting-card")],(function(t,e){class n extends e{constructor(...e){super(...e),t(this)}}return{F:n,d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 2}},{kind:"method",key:"setConfig",value:function(t){}},{kind:"method",key:"updated",value:function(t){i(a(n.prototype),"updated",this).call(this,t),t.has("hass")&&this.hass.config&&this.hass.config.state!==d&&r(this,"config-refresh")}},{kind:"method",key:"render",value:function(){return this.hass?c`
      <div class="content">
        <ha-circular-progress active></ha-circular-progress>
        ${this.hass.localize("ui.panel.lovelace.cards.starting.description")}
      </div>
    `:c``}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      :host {
        display: block;
        height: calc(100vh - var(--header-height));
      }
      ha-circular-progress {
        padding-bottom: 20px;
      }
      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}}]}}),e);export{h as HuiStartingCard};
