import{_ as t,c as e,d as i,t as s,$ as a,r as n,n as r}from"./main-0443badf.js";import"lit-html/is-server.js";import{j as o,a as h,h as d}from"./c.603f0acc.js";import{s as c}from"./c.c1dd06c9.js";import{X as u,Z as l}from"./c.449fa12b.js";import"./c.039b4847.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([r("hui-input-text-entity-row")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return u(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return a``;const t=this.hass.states[this._config.entity];return t?a`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        hideName
      >
        <ha-textfield
          .label=${this._config.name||o(t)}
          .disabled=${t.state===h}
          .value=${t.state}
          .minlength=${t.attributes.min}
          .maxlength=${t.attributes.max}
          .autoValidate=${t.attributes.pattern}
          .pattern=${t.attributes.pattern}
          .type=${t.attributes.mode}
          @change=${this._selectedValueChanged}
          placeholder="(empty value)"
        ></ha-textfield>
      </hui-generic-entity-row>
    `:a`
        <hui-warning>
          ${l(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"method",key:"_selectedValueChanged",value:function(t){const e=this.hass.states[this._config.entity],i=t.target.value;i&&d.includes(i)?t.target.value=e.state:(i!==e.state&&c(this.hass,e.entity_id,i),t.target.blur())}},{kind:"field",static:!0,key:"styles",value:()=>n`
    hui-generic-entity-row {
      display: flex;
      align-items: center;
    }
    ha-textfield {
      width: 100%;
    }
  `}]}}),e);
