import{_ as i,c as t,d as e,$ as o,Q as a,z as s,r as n,n as c}from"./main-0443badf.js";import"lit-html/is-server.js";import{Q as r,R as d,T as h}from"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";let l=i([c("hui-picture-header-footer")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"method",static:!0,key:"getStubConfig",value:function(){return{image:"https://www.home-assistant.io/images/lovelace/header-footer/balloons-header.png",tap_action:{action:"none"},hold_action:{action:"none"}}}},{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e()],key:"type",value:void 0},{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(i){if(!i||!i.image)throw new Error("Image required");this._config=i}},{kind:"method",key:"shouldUpdate",value:function(i){return 1!==i.size||!i.has("hass")||!i.get("hass")}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return o``;const i=Boolean(this._config.tap_action||this._config.hold_action);return o`
      <img
        @action=${this._handleAction}
        .actionHandler=${r({hasHold:d(this._config.hold_action),hasDoubleClick:d(this._config.double_tap_action)})}
        tabindex=${a(i?0:void 0)}
        class=${s({clickable:i})}
        src=${this.hass.hassUrl(this._config.image)}
      />
    `}},{kind:"get",static:!0,key:"styles",value:function(){return n`
      img.clickable {
        cursor: pointer;
      }

      img {
        display: block;
        width: 100%;
      }
    `}},{kind:"method",key:"_handleAction",value:function(i){h(this,this.hass,this._config,i.detail.action)}}]}}),t);export{l as HuiPictureHeaderFooter};
