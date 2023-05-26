import { html, LitElement  } from 'lit';
import type { HassDialog } from './make-dialog-manager';
import { customElement, property, state } from 'lit/decorators';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';

@customElement('test-dialog')
export class HuiCreateDialogCamera extends LitElement implements HassDialog<any> {
  @property({ attribute: false }) protected hass!: HomeAssistant;

  @state() private _currTabIndex = 0;

  @state() private open = true;

  public async showDialog(params): Promise<void> {
    console.log("Opening Dialog")
    this.open = true;
  }

  public closeDialog(): boolean {
    this.open = false;
    this._currTabIndex = 0;
    return true;
  }

  protected render() {
    if (!this.open) {
      return html``;
    }

    fireEvent(this, 'teste-event')
    return html`
        <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        >
        <div class="cancel">
            <div slot="heading" class="heading">
            <ha-header-bar id="bar">
                <div slot="title" class="main-title" .title=${name}>
                </div>
                <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass!.localize("ui.dialogs.more_info_control.dismiss")}
                id="cancel"
                .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
                ></ha-icon-button>
            </ha-header-bar>
            </div>
        </div>
        <div class="options">
            <ha-fab
            class="button-confirm"
            .label="Custom"
            extended
            >
            </ha-fab>
        </div>
        </ha-dialog>
  `;
  }
}
