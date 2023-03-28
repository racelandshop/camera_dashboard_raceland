import{_ as i,c as t,d as e,t as s,$ as a,z as o,Q as n,r as c,n as r}from"./main-0443badf.js";import"lit-html/is-server.js";import{X as l,Z as h,a6 as d,Q as f,R as u,o as p,z as m,a7 as g,T as _,a8 as v}from"./c.449fa12b.js";import{j as x,h as b,f as y}from"./c.603f0acc.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";i([r("hui-weather-entity-row")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[s()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(i){if(null==i||!i.entity)throw new Error("Entity must be specified");this._config=i}},{kind:"method",key:"shouldUpdate",value:function(i){return l(this,i)}},{kind:"method",key:"render",value:function(){if(!this.hass||!this._config)return a``;const i=this.hass.states[this._config.entity];if(!i)return a`
        <hui-warning>
          ${h(this.hass,this._config.entity)}
        </hui-warning>
      `;const t=!(this._config.tap_action&&"none"!==this._config.tap_action.action),e=d(i.state,this);return a`
      <div
        class="icon-image ${o({pointer:t})}"
        @action=${this._handleAction}
        .actionHandler=${f({hasHold:u(this._config.hold_action),hasDoubleClick:u(this._config.double_tap_action)})}
        tabindex=${n(t?"0":void 0)}
      >
        ${e||a`
          <ha-state-icon
            class="weather-icon"
            .state=${i}
          ></ha-state-icon>
        `}
      </div>
      <div
        class="info ${o({pointer:t})}"
        @action=${this._handleAction}
        .actionHandler=${f({hasHold:u(this._config.hold_action),hasDoubleClick:u(this._config.double_tap_action)})}
      >
        ${this._config.name||x(i)}
      </div>
      <div
        class="attributes ${o({pointer:t})}"
        @action=${this._handleAction}
        .actionHandler=${f({hasHold:u(this._config.hold_action),hasDoubleClick:u(this._config.double_tap_action)})}
      >
        <div>
          ${b.includes(i.state)?p(this.hass.localize,i,this.hass.locale):a`
                ${y(i.attributes.temperature,this.hass.locale)}
                ${m(this.hass,"temperature")}
              `}
        </div>
        <div class="secondary">
          ${g(this.hass,i)}
        </div>
      </div>
    `}},{kind:"method",key:"_handleAction",value:function(i){_(this,this.hass,this._config,i.detail.action)}},{kind:"get",static:!0,key:"styles",value:function(){return[v,c`
        :host {
          display: flex;
          align-items: center;
          flex-direction: row;
        }

        .info {
          margin-left: 16px;
          flex: 1 0 60px;
        }

        .info,
        .info > * {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .icon-image {
          display: flex;
          align-items: center;
          min-width: 40px;
        }

        .icon-image > * {
          flex: 0 0 40px;
          height: 40px;
        }

        .icon-image:focus {
          outline: none;
          background-color: var(--divider-color);
          border-radius: 50%;
        }

        .weather-icon {
          --mdc-icon-size: 40px;
        }

        :host([rtl]) .flex {
          margin-left: 0;
          margin-right: 16px;
        }

        .pointer {
          cursor: pointer;
        }

        .attributes {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: right;
          margin-left: 8px;
        }

        .secondary {
          color: var(--secondary-text-color);
        }
      `]}}]}}),t);
