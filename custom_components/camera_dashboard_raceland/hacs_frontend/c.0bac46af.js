import{_ as t,c as i,d as s,$ as e,n as r}from"./main-0443badf.js";import"lit-html/is-server.js";import{X as o,Z as a}from"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([r("hui-humidifier-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s()],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return o(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return e``;const t=this.hass.states[this._config.entity];return t?e`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .secondaryText=${t.attributes.humidity?`${this.hass.localize("ui.card.humidifier.humidity")}:\n            ${t.attributes.humidity} %${t.attributes.mode?` (${this.hass.localize(`state_attributes.humidifier.mode.${t.attributes.mode}`)||t.attributes.mode})`:""}`:""}
      >
        <ha-entity-toggle
          .hass=${this.hass}
          .stateObj=${t}
        ></ha-entity-toggle>
      </hui-generic-entity-row>
    `:e`
        <hui-warning>
          ${a(this.hass,this._config.entity)}
        </hui-warning>
      `}}]}}),i);
