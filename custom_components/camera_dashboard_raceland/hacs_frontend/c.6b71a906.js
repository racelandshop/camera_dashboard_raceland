import{_ as t,c as s,d as i,b as e,$ as a,f as n,r as o,n as r}from"./main-0443badf.js";import"lit-html/is-server.js";import{v as d}from"./c.449fa12b.js";import"./c.27b1d4ce.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([r("more-info-person")],(function(t,s){return{F:class extends s{constructor(...s){super(...s),t(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"stateObj",value:void 0},{kind:"field",key:"_entityArray",value:()=>e((t=>[t]))},{kind:"method",key:"render",value:function(){var t;return this.hass&&this.stateObj?a`
      ${this.stateObj.attributes.latitude&&this.stateObj.attributes.longitude?a`
            <ha-map
              .hass=${this.hass}
              .entities=${this._entityArray(this.stateObj.entity_id)}
              autoFit
            ></ha-map>
          `:""}
      ${null!==(t=this.hass.user)&&void 0!==t&&t.is_admin&&"not_home"===this.stateObj.state&&this.stateObj.attributes.latitude&&this.stateObj.attributes.longitude?a`
            <div class="actions">
              <mwc-button @click=${this._handleAction}>
                ${this.hass.localize("ui.dialogs.more_info_control.person.create_zone")}
              </mwc-button>
            </div>
          `:""}
      <ha-attributes
        .hass=${this.hass}
        .stateObj=${this.stateObj}
        extra-filters="id,user_id,editable"
      ></ha-attributes>
    `:a``}},{kind:"method",key:"_handleAction",value:function(){this.stateObj.attributes.latitude,this.stateObj.attributes.longitude,d("/config/zone/new"),n(this,"hass-more-info",{entityId:null})}},{kind:"get",static:!0,key:"styles",value:function(){return o`
      .flex {
        display: flex;
        justify-content: space-between;
      }
      .actions {
        margin: 8px 0;
        text-align: right;
      }
      ha-map {
        margin-top: 16px;
        margin-bottom: 16px;
      }
    `}}]}}),s);
