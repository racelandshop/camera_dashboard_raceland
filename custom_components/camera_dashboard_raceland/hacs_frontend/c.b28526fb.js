import{_ as i,c as t,d as e,t as a,G as o,$ as d,f as c,r as n,n as s}from"./main-0443badf.js";import"./c.14628a02.js";import"./c.cad1d45a.js";import"lit-html/is-server.js";import{am as l,ao as r,an as h,al as u,aw as f,as as g,aq as v}from"./c.603f0acc.js";import{s as _}from"./c.039b4847.js";import"./c.0f12f325.js";import"./c.50237dc6.js";import"./c.52ac4162.js";import{b as m}from"./c.dfac5a1d.js";import{c as p}from"./c.d63070ce.js";import"./c.4b06445e.js";import"./c.449fa12b.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";import"./c.5fe2e3ab.js";import"./c.183c12e5.js";import"./c.439151c3.js";import"./c.b3195fc3.js";import"./c.1e8dc8c4.js";import"./c.ee3f8e81.js";import"./c.408a3f19.js";import"./c.4c3690c6.js";import"./c.1f741597.js";import"./c.08cfec83.js";const b=l({entity:r(),state:h(r()),state_not:h(r())}),k=u(m,l({card:f(),conditions:h(g(b))}));let $=i([s("hui-conditional-card-editor")],(function(i,t){return{F:class extends t{constructor(...t){super(...t),i(this)}},d:[{kind:"field",decorators:[e({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[e({attribute:!1})],key:"lovelace",value:void 0},{kind:"field",decorators:[a()],key:"_config",value:void 0},{kind:"field",decorators:[a()],key:"_GUImode",value:()=>!0},{kind:"field",decorators:[a()],key:"_guiModeAvailable",value:()=>!0},{kind:"field",decorators:[a()],key:"_cardTab",value:()=>!1},{kind:"field",decorators:[o("hui-card-element-editor")],key:"_cardEditorEl",value:void 0},{kind:"method",key:"setConfig",value:function(i){v(i,k),this._config=i}},{kind:"method",key:"focusYamlEditor",value:function(){var i;null===(i=this._cardEditorEl)||void 0===i||i.focusYamlEditor()}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?d`
      <mwc-tab-bar
        .activeIndex=${this._cardTab?1:0}
        @MDCTabBar:activated=${this._selectTab}
      >
        <mwc-tab
          .label=${this.hass.localize("ui.panel.lovelace.editor.card.conditional.conditions")}
        ></mwc-tab>
        <mwc-tab
          .label=${this.hass.localize("ui.panel.lovelace.editor.card.conditional.card")}
        ></mwc-tab>
      </mwc-tab-bar>
      ${this._cardTab?d`
            <div class="card">
              ${void 0!==this._config.card.type?d`
                    <div class="card-options">
                      <mwc-button
                        @click=${this._toggleMode}
                        .disabled=${!this._guiModeAvailable}
                        class="gui-mode-button"
                      >
                        ${this.hass.localize(!this._cardEditorEl||this._GUImode?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                      </mwc-button>
                      <mwc-button @click=${this._handleReplaceCard}
                        >${this.hass.localize("ui.panel.lovelace.editor.card.conditional.change_type")}</mwc-button
                      >
                    </div>
                    <hui-card-element-editor
                      .hass=${this.hass}
                      .value=${this._config.card}
                      .lovelace=${this.lovelace}
                      @config-changed=${this._handleCardChanged}
                      @GUImode-changed=${this._handleGUIModeChanged}
                    ></hui-card-element-editor>
                  `:d`
                    <hui-card-picker
                      .hass=${this.hass}
                      .lovelace=${this.lovelace}
                      @config-changed=${this._handleCardPicked}
                    ></hui-card-picker>
                  `}
            </div>
          `:d`
            <div class="conditions">
              ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.condition_explanation")}
              ${this._config.conditions.map(((i,t)=>{var e;return d`
                  <div class="condition">
                    <div class="entity">
                      <ha-entity-picker
                        .hass=${this.hass}
                        .value=${i.entity}
                        .idx=${t}
                        .configValue=${"entity"}
                        @change=${this._changeCondition}
                        allow-custom-entity
                      ></ha-entity-picker>
                    </div>
                    <div class="state">
                      <ha-select
                        .value=${void 0!==i.state_not?"true":"false"}
                        .idx=${t}
                        .configValue=${"invert"}
                        @selected=${this._changeCondition}
                        @closed=${_}
                        naturalMenuWidth
                        fixedMenuPosition
                      >
                        <mwc-list-item value="false">
                          ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.state_equal")}
                        </mwc-list-item>
                        <mwc-list-item value="true">
                          ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.state_not_equal")}
                        </mwc-list-item>
                      </ha-select>
                      <ha-textfield
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.state")} (${this.hass.localize("ui.panel.lovelace.editor.card.conditional.current_state")}: ${null===(e=this.hass)||void 0===e?void 0:e.states[i.entity].state})"
                        .value=${void 0!==i.state_not?i.state_not:i.state}
                        .idx=${t}
                        .configValue=${"state"}
                        @input=${this._changeCondition}
                      ></ha-textfield>
                    </div>
                  </div>
                `}))}
              <div class="condition">
                <ha-entity-picker
                  .hass=${this.hass}
                  @change=${this._addCondition}
                ></ha-entity-picker>
              </div>
            </div>
          `}
    `:d``}},{kind:"method",key:"_selectTab",value:function(i){this._cardTab=1===i.detail.index}},{kind:"method",key:"_toggleMode",value:function(){var i;null===(i=this._cardEditorEl)||void 0===i||i.toggleMode()}},{kind:"method",key:"_setMode",value:function(i){this._GUImode=i,this._cardEditorEl&&(this._cardEditorEl.GUImode=i)}},{kind:"method",key:"_handleGUIModeChanged",value:function(i){i.stopPropagation(),this._GUImode=i.detail.guiMode,this._guiModeAvailable=i.detail.guiModeAvailable}},{kind:"method",key:"_handleCardPicked",value:function(i){i.stopPropagation(),this._config&&(this._setMode(!0),this._guiModeAvailable=!0,this._config={...this._config,card:i.detail.config},c(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_handleCardChanged",value:function(i){i.stopPropagation(),this._config&&(this._config={...this._config,card:i.detail.config},this._guiModeAvailable=i.detail.guiModeAvailable,c(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_handleReplaceCard",value:function(){this._config&&(this._config={...this._config,card:{}},c(this,"config-changed",{config:this._config}))}},{kind:"method",key:"_addCondition",value:function(i){const t=i.target;if(""===t.value||!this._config)return;const e=[...this._config.conditions];e.push({entity:t.value,state:""}),this._config={...this._config,conditions:e},t.value="",c(this,"config-changed",{config:this._config})}},{kind:"method",key:"_changeCondition",value:function(i){const t=i.target;if(!this._config||!t)return;const e=[...this._config.conditions];if("entity"===t.configValue&&""===t.value)e.splice(t.idx,1);else{const i={...e[t.idx]};"entity"===t.configValue?i.entity=t.value:"state"===t.configValue?void 0!==i.state_not?i.state_not=t.value:i.state=t.value:"invert"===t.configValue&&("true"===t.value?i.state&&(i.state_not=i.state,delete i.state):i.state_not&&(i.state=i.state_not,delete i.state_not)),e[t.idx]=i}this._config={...this._config,conditions:e},c(this,"config-changed",{config:this._config})}},{kind:"get",static:!0,key:"styles",value:function(){return[p,n`
        mwc-tab-bar {
          border-bottom: 1px solid var(--divider-color);
        }
        .conditions {
          margin-top: 8px;
        }
        .condition {
          margin-top: 8px;
          border: 1px solid var(--divider-color);
          padding: 12px;
        }
        .condition .state {
          display: flex;
          align-items: flex-end;
        }
        .condition .state ha-select {
          margin-right: 16px;
        }
        .condition .state ha-textfield {
          flex-grow: 1;
        }

        .card {
          margin-top: 8px;
          border: 1px solid var(--divider-color);
          padding: 12px;
        }
        @media (max-width: 450px) {
          .card,
          .condition {
            margin: 8px -12px 0;
          }
        }
        .card .card-options {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .gui-mode-button {
          margin-right: auto;
        }
      `]}}]}}),t);export{$ as HuiConditionalCardEditor};
