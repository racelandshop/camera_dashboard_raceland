import{_ as e,c as i,t as r,$ as t,r as o,n}from"./main-0443badf.js";import{d as s}from"./c.5fe2e3ab.js";import"lit-html/is-server.js";import"./c.039b4847.js";let a=e([n("hui-error-card")],(function(e,i){return{F:class extends i{constructor(...i){super(...i),e(this)}},d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[r()],key:"_config",value:void 0},{kind:"method",key:"getCardSize",value:function(){return 4}},{kind:"method",key:"setConfig",value:function(e){this._config=e}},{kind:"method",key:"render",value:function(){if(!this._config)return t``;let e;if(this._config.origConfig)try{e=s(this._config.origConfig)}catch(i){e=`[Error dumping ${this._config.origConfig}]`}return t`<ha-alert alert-type="error" .title=${this._config.error}>
      ${e?t`<pre>${e}</pre>`:""}
    </ha-alert>`}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      pre {
        font-family: var(--code-font-family, monospace);
        white-space: break-spaces;
        user-select: text;
        display: none;
      }
    `}}]}}),i);export{a as HuiErrorCard};
