//import '@material/mwc-menu';
//import '@material/mwc-list/mwc-list-item';
import { ActionDetail } from '@material/mwc-list/mwc-list-foundation';
import { mdiDotsVertical, mdiDelete, mdiPencil } from '@mdi/js';
import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators';
import { fireEvent, HomeAssistant } from 'custom-card-helpers';
import { localize } from '../localize/localize';

@customElement('camera-button-menu')
export class cameraButtonMenu extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @property({ attribute: false }) public cameraInfo; //add type hint

  protected render(): TemplateResult {
    return html`
      <ha-button-menu corner="BOTTOM_LEFT" @action=${this._handleAction}>
        <ha-icon-button slot="trigger" .path=${mdiDotsVertical}></ha-icon-button>
        <mwc-list-item>
          <ha-svg-icon .path=${mdiPencil}></ha-svg-icon>
          ${localize('common.edit')}
        </mwc-list-item>
        <!-- <div class="line"></div> -->
        <mwc-list-item class="delete-item">
          <ha-svg-icon .path=${mdiDelete}></ha-svg-icon>
          ${localize('common.delete')}
        </mwc-list-item>
      </ha-button-menu>
    `;
  }

  private _handleAction(ev: CustomEvent<ActionDetail>) {
    switch (ev.detail.index) {
      case 0:
        fireEvent(this, 'edit-camera', { cameraInfo: this.cameraInfo });
        break;
      case 1:
        fireEvent(this, 'delete-camera', { cameraInfo: this.cameraInfo });
        break;
    }
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: inline-block;
        position: relative;
      }
      ::slotted([disabled]) {
        color: var(--disabled-text-color);
      }
      mwc-list-item {
        /* font-family: "Roboto"; */
        font-style: normal;
        font-weight: 400;
        text-align: center;
      }
      .delete-item {
        color: #ff4747;
      }
      .line {
        width: 112px;
        height: 47px;
        position: absolute;
        border-top: 1px solid #7b7b7b;
        transform: matrix(1, 0.01, -0.01, 1, 0, 0);
      }
      ha-svg-icon {
        margin-right: 10px;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'camera-button-menu': cameraButtonMenu;
  }
}
