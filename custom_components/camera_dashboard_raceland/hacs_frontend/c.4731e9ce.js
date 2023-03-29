import{_ as i,c as e,d as t,$ as a,eg as o,r as l,n,b as s,f as c}from"./main-0443badf.js";import"lit-html/is-server.js";import{s as r}from"./c.039b4847.js";import"./c.603f0acc.js";import"./c.40dd8e68.js";i([n("ha-help-tooltip")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"position",value:()=>"top"},{kind:"method",key:"render",value:function(){return a`
      <ha-svg-icon .path=${o}></ha-svg-icon>
      <paper-tooltip
        offset="4"
        .position=${this.position}
        .fitToVisibleBounds=${!0}
        >${this.label}</paper-tooltip
      >
    `}},{kind:"get",static:!0,key:"styles",value:function(){return l`
      ha-svg-icon {
        --mdc-icon-size: var(--ha-help-tooltip-size, 14px);
        color: var(--ha-help-tooltip-color, var(--disabled-text-color));
      }
    `}}]}}),e),i([n("hui-action-editor")],(function(i,e){return{F:class extends e{constructor(...e){super(...e),i(this)}},d:[{kind:"field",decorators:[t()],key:"config",value:void 0},{kind:"field",decorators:[t()],key:"label",value:void 0},{kind:"field",decorators:[t()],key:"actions",value:void 0},{kind:"field",decorators:[t()],key:"tooltipText",value:void 0},{kind:"field",decorators:[t()],key:"hass",value:void 0},{kind:"get",key:"_navigation_path",value:function(){const i=this.config;return(null==i?void 0:i.navigation_path)||""}},{kind:"get",key:"_url_path",value:function(){const i=this.config;return(null==i?void 0:i.url_path)||""}},{kind:"get",key:"_service",value:function(){const i=this.config;return(null==i?void 0:i.service)||""}},{kind:"field",key:"_serviceAction",value(){return s((i=>({service:this._service,data:i.service_data,target:i.target})))}},{kind:"method",key:"render",value:function(){var i,e,t,o,l,n;return this.hass&&this.actions?a`
      <div class="dropdown">
        <ha-select
          .label=${this.label}
          .configValue=${"action"}
          @selected=${this._actionPicked}
          .value=${null!==(i=null===(e=this.config)||void 0===e?void 0:e.action)&&void 0!==i?i:"default"}
          @closed=${r}
          fixedMenuPosition
          naturalMenuWidt
        >
          <mwc-list-item value="default">
            ${this.hass.localize("ui.panel.lovelace.editor.action-editor.actions.default_action")}
          </mwc-list-item>
          ${this.actions.map((i=>a`
              <mwc-list-item .value=${i}>
                ${this.hass.localize(`ui.panel.lovelace.editor.action-editor.actions.${i}`)}
              </mwc-list-item>
            `))}
        </ha-select>
        ${this.tooltipText?a`
              <ha-help-tooltip .label=${this.tooltipText}></ha-help-tooltip>
            `:""}
      </div>
      ${"navigate"===(null===(t=this.config)||void 0===t?void 0:t.action)?a`
            <ha-textfield
              label=${this.hass.localize("ui.panel.lovelace.editor.action-editor.navigation_path")}
              .value=${this._navigation_path}
              .configValue=${"navigation_path"}
              @input=${this._valueChanged}
            ></ha-textfield>
          `:""}
      ${"url"===(null===(o=this.config)||void 0===o?void 0:o.action)?a`
            <ha-textfield
              .label=${this.hass.localize("ui.panel.lovelace.editor.action-editor.url_path")}
              .value=${this._url_path}
              .configValue=${"url_path"}
              @input=${this._valueChanged}
            ></ha-textfield>
          `:""}
      ${"call-service"===(null===(l=this.config)||void 0===l?void 0:l.action)?a`
            <ha-service-control
              .hass=${this.hass}
              .value=${this._serviceAction(this.config)}
              .showAdvanced=${null===(n=this.hass.userData)||void 0===n?void 0:n.showAdvanced}
              narrow
              @value-changed=${this._serviceValueChanged}
            ></ha-service-control>
          `:""}
    `:a``}},{kind:"method",key:"_actionPicked",value:function(i){var e;if(i.stopPropagation(),!this.hass)return;const t=i.target.value;if((null===(e=this.config)||void 0===e?void 0:e.action)===t)return;if("default"===t)return void c(this,"value-changed",{value:void 0});let a;switch(t){case"url":a={url_path:this._url_path};break;case"call-service":a={service:this._service};break;case"navigate":a={navigation_path:this._navigation_path}}c(this,"value-changed",{value:{action:t,...a}})}},{kind:"method",key:"_valueChanged",value:function(i){if(i.stopPropagation(),!this.hass)return;const e=i.target,t=i.target.value;this[`_${e.configValue}`]!==t&&e.configValue&&c(this,"value-changed",{value:{...this.config,[e.configValue]:t}})}},{kind:"method",key:"_serviceValueChanged",value:function(i){i.stopPropagation(),c(this,"value-changed",{value:{...this.config,service:i.detail.value.service||"",service_data:i.detail.value.data||{},target:i.detail.value.target||{}}})}},{kind:"get",static:!0,key:"styles",value:function(){return l`
      .dropdown {
        position: relative;
      }
      ha-help-tooltip {
        position: absolute;
        right: 40px;
        top: 16px;
      }
      ha-select,
      ha-textfield {
        width: 100%;
      }
      ha-textfield {
        margin-top: 8px;
      }
      ha-service-control {
        --service-control-padding: 0;
      }
    `}}]}}),e);
