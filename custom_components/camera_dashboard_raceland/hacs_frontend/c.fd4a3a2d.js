import{_ as t,c as i,d as s,t as o,$ as e,r,n}from"./main-0443badf.js";import"lit-html/is-server.js";import{X as a,Z as c,_ as h}from"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([n("hui-cover-entity-row")],(function(t,i){return{F:class extends i{constructor(...i){super(...i),t(this)}},d:[{kind:"field",decorators:[s({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[o()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(t){if(!t)throw new Error("Invalid configuration");this._config=t}},{kind:"method",key:"shouldUpdate",value:function(t){return a(this,t)}},{kind:"method",key:"render",value:function(){if(!this._config||!this.hass)return e``;const t=this.hass.states[this._config.entity];return t?e`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
        ${"medium"!==this._config.layout?h(t)?e`
                <ha-cover-tilt-controls
                  .hass=${this.hass}
                  .stateObj=${t}
                ></ha-cover-tilt-controls>
              `:e`
                <ha-cover-controls
                  .hass=${this.hass}
                  .stateObj=${t}
                ></ha-cover-controls>
              `:e``}
      </hui-generic-entity-row>
    `:e`
        <hui-warning>
          ${c(this.hass,this._config.entity)}
        </hui-warning>
      `}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      ha-cover-controls,
      ha-cover-tilt-controls {
        margin-right: -0.57em;
      }
    `}}]}}),i);
