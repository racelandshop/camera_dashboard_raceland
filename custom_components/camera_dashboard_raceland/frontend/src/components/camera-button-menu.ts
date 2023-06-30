import { ActionDetail } from '@material/mwc-list/mwc-list-foundation';
import { mdiDotsVertical, mdiDelete, mdiPencil } from '@mdi/js';
import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators';
import { HomeAssistant } from 'custom-card-helpers';
import { showDeleteCameraDialog } from '../helpers/show-delete-camera-dialog';
import { localize } from '../localize/localize';
import { CameraInfo } from '../types';
import { showEditCameraDialog } from '../helpers/show-edit-camera-dialog';
import { fetchCameraInformation } from '../data/websocket';

@customElement('camera-button-menu')
export class CameraButtonMenu extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public cameraInfo!: CameraInfo;

  protected render(): TemplateResult {
    return html`
      <ha-button-menu corner="BOTTOM_LEFT" @action=${this._handleAction}>
        <ha-icon-button slot="trigger" .path=${mdiDotsVertical}></ha-icon-button>
        <mwc-list-item>
          <ha-svg-icon .path=${mdiPencil}></ha-svg-icon>
          ${localize('common.edit')}
        </mwc-list-item>
        <mwc-list-item class="delete-item">
          <ha-svg-icon .path=${mdiDelete}></ha-svg-icon>
          ${localize('common.delete')}
        </mwc-list-item>
      </ha-button-menu>
    `;
  }

  private async _handleAction(ev: CustomEvent<ActionDetail>) {
    switch (ev.detail.index) {
      case 0:
        const cameraFormParams = await fetchCameraInformation(this.hass, this.cameraInfo.entityID);
        showEditCameraDialog(this, { cameraInfo: cameraFormParams });
        break;
      case 1:
        showDeleteCameraDialog(this, { cameraInfo: this.cameraInfo });
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
    'camera-button-menu': CameraButtonMenu;
  }
}
