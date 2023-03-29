import{_ as i,c as t,t as e,$ as n,r as o,n as r}from"./main-0443badf.js";import"lit-html/is-server.js";i([r("hui-text-row")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[e()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){if(!i||!i.name||!i.text)throw new Error("Name and text required");this._config=i}},{kind:"method",key:"render",value:function(){return this._config?n`
      <ha-icon .icon=${this._config.icon}></ha-icon>
      <div class="name" .title=${this._config.name}>${this._config.name}</div>
      <div class="text" .title=${this._config.text}>${this._config.text}</div>
    `:n``}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      :host {
        display: flex;
        align-items: center;
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      div {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name {
        margin-left: 16px;
      }
      .text {
        text-align: right;
      }
    `}}]}}),t);
