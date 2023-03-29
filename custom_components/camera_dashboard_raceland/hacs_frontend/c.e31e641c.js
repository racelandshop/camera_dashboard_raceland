import{_ as t,c as e,d as i,t as o,$ as r,z as s,r as a,n}from"./main-0443badf.js";import"lit-html/is-server.js";import{e as d}from"./c.603f0acc.js";import{U as c}from"./c.449fa12b.js";import"./c.4ac03fec.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";let l=t([n("hui-buttons-header-footer")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"method",static:!0,key:"getStubConfig",value:function(){return{entities:[]}}},{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"type",value:void 0},{kind:"field",decorators:[o()],key:"_configEntities",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 3}},{kind:"method",key:"setConfig",value:function(t){this._configEntities=c(t.entities).map((t=>{const e={tap_action:{action:"toggle"},hold_action:{action:"more-info"},...t};return"scene"===d(t.entity)&&(e.tap_action={action:"call-service",service:"scene.turn_on",target:{entity_id:e.entity}}),e}))}},{kind:"method",key:"render",value:function(){return r`
      ${"footer"===this.type?r`<li class="divider footer" role="separator"></li>`:""}
      <hui-buttons-base
        .hass=${this.hass}
        .configEntities=${this._configEntities}
        class=${s({footer:"footer"===this.type,header:"header"===this.type})}
      ></hui-buttons-base>
      ${"header"===this.type?r`<li class="divider header" role="separator"></li>`:""}
    `}},{kind:"field",static:!0,key:"styles",value:()=>a`
    .divider {
      height: 0;
      margin: 16px 0;
      list-style-type: none;
      border: none;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: var(--divider-color);
    }
    .divider.header {
      margin-top: 0;
    }
    hui-buttons-base.footer {
      --padding-bottom: 16px;
    }
    hui-buttons-base.header {
      --padding-top: 16px;
    }
  `}]}}),e);export{l as HuiButtonsHeaderFooter};
