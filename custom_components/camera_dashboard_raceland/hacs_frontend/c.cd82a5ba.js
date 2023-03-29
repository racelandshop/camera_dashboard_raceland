import{_ as t,c as e,d as i,t as s,$ as n,r as a,n as o}from"./main-0443badf.js";import"lit-html/is-server.js";import{s as c}from"./c.039b4847.js";import{j as r,h,k as d}from"./c.603f0acc.js";import{X as l,Z as u,$ as f}from"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([o("hui-input-select-entity-row")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t||!t.entity)throw new Error("Entity must be specified");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return l(this,t)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return n``;const t=this.hass.states[this._config.entity];return t?n`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        hideName
      >
        <ha-select
          .label=${this._config.name||r(t)}
          .value=${t.state}
          .disabled=${h.includes(t.state)}
          naturalMenuWidth
          @selected=${this._selectedChanged}
          @click=${c}
          @closed=${c}
        >
          ${t.attributes.options?t.attributes.options.map((t=>n`<mwc-list-item .value=${t}
                    >${t}</mwc-list-item
                  >`)):""}
        </ha-select>
      </hui-generic-entity-row>
    `:n`
        <hui-warning>
          ${u(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"field",static:!0,key:"styles",value:()=>a`
    hui-generic-entity-row {
      display: flex;
      align-items: center;
    }
    ha-select {
      width: 100%;
      --ha-select-min-width: 0;
    }
  `},{kind:"method",key:"_selectedChanged",value:function(t){const e=this.hass.states[this._config.entity],i=t.target.value;i!==e.state&&(d("light"),f(this.hass,e.entity_id,i))}}]}}),e);
