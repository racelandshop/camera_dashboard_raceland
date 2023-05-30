import { mdiClose } from '@mdi/js';
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { cache } from 'lit/directives/cache';
import { computeDomain, HomeAssistant } from 'custom-card-helpers';
import { haStyleDialog } from '../../styles/ha-styles';

export interface MoreInfoDialogParams {
  entityId: string | null;
  sensorId?: string | null;
}

@customElement('ha-more-info-dialog-camera')
export class MoreInfoDialog extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ type: Boolean, reflect: true }) public large = false;

  @state() private _entityId?: string | null;

  @state() private _currTabIndex = 0;

  public showDialog(params: MoreInfoDialogParams) {
    this._entityId = params.entityId;
    if (!this._entityId) {
      this.closeDialog();
      return;
    }
    this.large = false;
  }

  public closeDialog() {
    this._entityId = undefined;
    this._currTabIndex = 0;
  }

  protected render() {
    if (!this._entityId) {
      return html``;
    }
    const entityId = this._entityId;
    const stateObj = this.hass.states[entityId] as any;

    if (!stateObj) {
      return html``;
    }

    const domain = computeDomain(entityId);
    const name = computeStateName(stateObj) || ' ';

    return html`
      <ha-dialog open @closed=${this.closeDialog} .heading=${name} hideActions data-domain=${domain}>
        <div slot="heading" class="heading">
          <ha-header-bar>
            <ha-icon-button
              slot="navigationIcon"
              id="cancel"
              dialogAction="cancel"
              .label=${this.hass.localize('ui.dialogs.more_info_control.dismiss')}
              .path=${mdiClose}
            ></ha-icon-button>
            <div slot="title" class="main-title" .title=${name}>${name}</div>
          </ha-header-bar>
          <mwc-tab-bar .activeIndex=${this._currTabIndex} @MDCTabBar:activated=${this._handleTabChanged}>
            <mwc-tab .label=${this.hass.localize('ui.dialogs.more_info_control.details')} dialogInitialFocus></mwc-tab>
            <mwc-tab .label=${this.hass.localize('ui.dialogs.more_info_control.history')}></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div class="content" tabindex="-1" dialogInitialFocus>
          ${cache(
            this._currTabIndex === 0
              ? html`
                  <more-info-content .stateObj=${stateObj} .hass=${this.hass}></more-info-content>
                  <p>
                    ${this.hass.localize('ui.dialogs.more_info_control.restored.not_provided')}
                  </p>
                  <p>
                    ${this.hass.localize('ui.dialogs.more_info_control.restored.remove_intro')}
                  </p>
                  <mwc-button class="warning" @click=${this._removeEntity}>
                    ${this.hass.localize('ui.dialogs.more_info_control.restored.remove_action')}
                  </mwc-button>
                `
              : ''
          )}
        </div>
      </ha-dialog>
    `;
  }

  //private _removeEntity() {
  //  const entityId = this._entityId!;
  //  showConfirmationDialog(this, {
  //    title: this.hass.localize('ui.dialogs.more_info_control.restored.confirm_remove_title'),
  //    text: this.hass.localize('ui.dialogs.more_info_control.restored.confirm_remove_text'),
  //    confirmText: this.hass.localize('ui.common.remove'),
  //    dismissText: this.hass.localize('ui.common.cancel'),
  //    confirm: () => {
  //      removeEntityRegistryEntry(this.hass, entityId);
  //    },
  //  });
  //}

  private _handleTabChanged(ev: CustomEvent): void {
    const newTab = ev.detail.index;
    if (newTab === this._currTabIndex) {
      return;
    }

    this._currTabIndex = ev.detail.index;
  }

  static get styles() {
    return [
      haStyleDialog,
      css`
        ha-dialog {
          --dialog-surface-position: static;
          --dialog-content-position: static;
        }

        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          /* flex-shrink: 0; */
          display: block;
        }
        .content {
          width: 85%;
          max-width: 100%;
          outline: none;
        }
        @media only screen and (max-width: 850px) and (orientation: landscape) {
          .content {
            position: absolute;
            width: 100%;
            top: 60%;
            transform: translate(0%, -50%);
            max-width: 100%;
            outline: none;
          }
        }
        @media only screen and (max-width: 450px) and (orientation: portrait) {
          .content {
            position: absolute;
            width: 100%;
            top: 50%;
            transform: translate(0%, -50%);
            max-width: 100%;
            outline: none;
          }
        }
        /* #cancel {
          position: absolute;
          right: 0;
          z-index: 100;
        } */

        /* @media all and (max-width: 450px), all and (max-height: 500px) {
          ha-header-bar {
            --mdc-theme-primary: var(--app-header-background-color);
            --mdc-theme-on-primary: var(--app-header-text-color, white);
            border-bottom: none;
          }
        } */

        .heading {
          border-bottom: 1px solid var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12));
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          ha-dialog {
            --mdc-dialog-max-width: 90vw;
          }

          .content {
            width: 352px;
          }

          ha-header-bar {
            width: 400px;
          }

          .main-title {
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: default;
          }

          ha-dialog[data-domain='camera'] .content,
          ha-dialog[data-domain='camera'] ha-header-bar {
            width: auto;
          }

          :host([large]) .content {
            width: calc(90vw - 48px);
          }

          :host([large]) ha-dialog[data-domain='camera'] .content,
          :host([large]) ha-header-bar {
            width: 90vw;
          }
        }

        ha-dialog[data-domain='camera'] {
          --dialog-content-padding: 0;
        }

        state-card-content,
        ha-more-info-logbook:not(:last-child) {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin-bottom: 15px;
        }
        ha-more-info-history {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
        }
        /* @media all and (max-width: 650px) {
          state-card-content {
            width: 250px;
          }
        } */
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ha-more-info-dialog': MoreInfoDialog;
  }
}
