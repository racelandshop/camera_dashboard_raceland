import{_ as t,c as e,d as i,$ as s,r,n as a}from"./main-0443badf.js";import"lit-html/is-server.js";import"./c.449fa12b.js";import"./c.cad1d45a.js";import"./c.14628a02.js";import"./c.603f0acc.js";import"./c.039b4847.js";import"./c.60b82eb5.js";import"./c.efb702cd.js";t([a("more-info-script")],(function(t,e){return{F:class extends e{constructor(...e){super(...e),t(this)}},d:[{kind:"field",decorators:[i({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[i()],key:"stateObj",value:void 0},{kind:"method",key:"render",value:function(){return this.hass&&this.stateObj?s`
      <hr />
      <div class="flex">
        <div>
          ${this.hass.localize("ui.dialogs.more_info_control.script.last_triggered")}:
        </div>
        ${this.stateObj.attributes.last_triggered?s`
              <ha-relative-time
                .hass=${this.hass}
                .datetime=${this.stateObj.attributes.last_triggered}
                capitalize
              ></ha-relative-time>
            `:this.hass.localize("ui.components.relative_time.never")}
      </div>
    `:s``}},{kind:"get",static:!0,key:"styles",value:function(){return r`
      .flex {
        display: flex;
        justify-content: space-between;
      }
      hr {
        border-color: var(--divider-color);
        border-bottom: none;
        margin: 16px 0;
      }
    `}}]}}),e);
