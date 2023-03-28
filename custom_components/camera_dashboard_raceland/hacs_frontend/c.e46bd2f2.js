import{_ as i,c as e,d as t,t as s,$ as o,f as a,n}from"./main-0443badf.js";import"lit-html/is-server.js";import{aq as c}from"./c.603f0acc.js";import"./c.0f12f325.js";import"./c.039b4847.js";import{g as h}from"./c.dbb16202.js";import{c as l}from"./c.d63070ce.js";import"./c.4b06445e.js";import"./c.08cfec83.js";import"./c.1f741597.js";const r=["sensor"];let d=i([n("hui-graph-footer-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[t({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){c(i,h),this._config=i}},{kind:"get",key:"_entity",value:function(){return this._config.entity||""}},{kind:"get",key:"_detail",value:function(){var i;return null!==(i=this._config.detail)&&void 0!==i?i:1}},{kind:"get",key:"_hours_to_show",value:function(){return this._config.hours_to_show||24}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?o`
      <div class="card-config">
        <ha-entity-picker
          allow-custom-entity
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .hass=${this.hass}
          .value=${this._entity}
          .configValue=${"entity"}
          .includeDomains=${r}
          @change=${this._valueChanged}
        ></ha-entity-picker>
        <div class="side-by-side">
          <ha-formfield
            label=${this.hass.localize("ui.panel.lovelace.editor.card.sensor.show_more_detail")}
          >
            <ha-switch
              .checked=${2===this._detail}
              .configValue=${"detail"}
              @change=${this._change}
            ></ha-switch>
          </ha-formfield>
          <ha-textfield
            type="number"
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hours_to_show")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value=${this._hours_to_show}
            min="1"
            .configValue=${"hours_to_show"}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>
      </div>
    `:o``}},{kind:"method",key:"_change",value:function(i){if(!this._config||!this.hass)return;const e=i.target.checked?2:1;this._detail!==e&&(this._config={...this._config,detail:e},a(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_valueChanged",value:function(i){if(!this._config||!this.hass)return;const e=i.target;if(this[`_${e.configValue}`]!==e.value){if(e.configValue)if(""===e.value||"number"===e.type&&isNaN(Number(e.value)))this._config={...this._config},delete this._config[e.configValue];else{let i=e.value;"number"===e.type&&(i=Number(i)),this._config={...this._config,[e.configValue]:i}}a(this,"config-changed",{config:this._config})}}},{kind:"get",static:!0,key:"styles",value:function(){return l}}]}}),e);export{d as HuiGraphFooterEditor};
