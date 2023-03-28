import{_ as t,c as i,d as e,j as a,k as o,S as s,$ as n,Q as c,z as r,r as h,n as d}from"./main-0443badf.js";import"lit-html/is-server.js";import{Q as l,R as u,T as f}from"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";let m=t([d("hui-picture-card")],(function(t,i){class d extends i{constructor(...i){super(...i),t(this)}}return{F:d,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await import("./c.85b43365.js"),document.createElement("hui-picture-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"picture",image:"/local/logoauto_og.png",tap_action:{action:"none"},hold_action:{action:"none"}}}},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 5}},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.image)throw new Error("Image required");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return 1!==t.size||!t.has("hass")||!t.get("hass")}},{kind:"method",key:"updated",value:function(t){if(a(o(d.prototype),"updated",this).call(this,t),!this._config||!this.hass)return;const i=t.get("hass"),e=t.get("_config");i&&e&&i.themes===this.hass.themes&&e.theme===this._config.theme||s(this,this.hass.themes,this._config.theme)}},{kind:"method",key:"render",value:function(){return this._config&&this.hass?n`
      <ha-card
        @action=${this._handleAction}
        .actionHandler=${l({hasHold:u(this._config.hold_action),hasDoubleClick:u(this._config.double_tap_action)})}
        tabindex=${c(u(this._config.tap_action)?"0":void 0)}
        class=${r({clickable:Boolean(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)})}
      >
        <img src=${this.hass.hassUrl(this._config.image)} />
      </ha-card>
    `:n``}},{kind:"get",static:!0,key:"styles",value:function(){return h`
      ha-card {
        overflow: hidden;
        height: 100%;
        border-radius: 1.5rem;
        display: flex;
        align-items: center;
      }

      ha-card.clickable {
        cursor: pointer;
      }

      img {
        display: block;
        width: 100%;
      }
    `}},{kind:"method",key:"_handleAction",value:function(t){f(this,this.hass,this._config,t.detail.action)}}]}}),i);export{m as HuiPictureCard};
