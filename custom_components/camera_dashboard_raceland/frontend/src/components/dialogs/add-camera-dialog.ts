import { mdiPlus } from '@mdi/js';
import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { HomeAssistant } from 'custom-card-helpers';
import { classMap } from 'lit/directives/class-map';
import memoizeOne from 'memoize-one';
import Fuse from 'fuse.js';
import { showCreateCameraDialog } from '../../helpers/show-create-camera-dialog';
import { showModelOptionsDialog } from '../../helpers/show-camera-models-dialog';
import { showCameraDialog } from '../../helpers/show-camera-form-dialog';
import { customSchema, customCameraExtraOptionSchema, defaultCustomCameraAdvanceOptions } from '../../schemas';
import { localize } from '../../localize/localize';
import { cancelIcon } from '../../icon_path';
import { haStyleDialog } from '../../styles/ha-styles';
import { CameraBrand, CameraModel, CameraDatabase } from '../../types';
import '../camera-brand-icon-button';
import '../search-input-round';

@customElement('add-camera-dialog')
export class HuiCreateDialogCamera extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public cameraDatabase!: CameraDatabase;

  @state() private _currTabIndex = 0;

  @state() private _filter = '';

  @state() private open!: boolean;

  public async showDialog(params): Promise<void> {
    this.open = true;
    this.cameraDatabase = params.cameraDatabase;
  }

  public closeDialog(): boolean {
    this.open = false;
    this._currTabIndex = 0;
    return true;
  }

  private _filterBrands = memoizeOne((cameraDatabase, filter?: string) => {
    if (!filter) {
      return cameraDatabase;
    }
    let filteredBrands = cameraDatabase;
    const options: Fuse.IFuseOptions<CameraBrand> = {
      keys: ['name'],
      isCaseSensitive: false,
      minMatchCharLength: 1,
      threshold: 0.2,
    };
    const fuse = new Fuse(filteredBrands, options);
    filteredBrands = fuse.search(filter).map(result => result.item);
    return filteredBrands;
  });

  protected render(): TemplateResult {
    if (!this.open) {
      return html``;
    }

    const cameraDatabase = this._filterBrands(this.cameraDatabase, this._filter);

    return html`
      <ha-dialog
        open
        scrimClickAction
        hideActions
        @closed=${this.closeDialog}
        class=${classMap({ table: this._currTabIndex === 1 })}
      >
        <div class="cancel">
          <div slot="heading" class="heading">
            <ha-header-bar id="bar">
              <div slot="title" class="main-title">
                ${localize('common.add_camera')}
              </div>
              <ha-icon-button
                slot="navigationIcon"
                dialogAction="cancel"
                .label=${this.hass!.localize('ui.dialogs.more_info_control.dismiss')}
                id="cancel"
                .path=${cancelIcon}
              ></ha-icon-button>
            </ha-header-bar>
          </div>
        </div>
        <div class="content">
          <div class="contentFather">
            <div class="search-bar">
              <search-input-round
                .hass=${this.hass}
                .filter=${this._filter}
                class="rounded"
                @value-changed=${this._handleSearchChange}
                .label=${localize('search.brands')}
              ></search-input-round>
            </div>

            <div class="brand-list">
              ${cameraDatabase.map((cameraBrandInfo: CameraBrand) => {
                return html`
                  <camera-brand-icon-button
                    .cameraBrandInfo=${cameraBrandInfo}
                    .label=${cameraBrandInfo.name}
                    .cameraModelList=${cameraBrandInfo.models}
                    .svgPath=${'/local/logos/' + cameraBrandInfo.name + '.svg'}
                    @click=${(ev: Event) => this._openCameraBrandDialog(ev, cameraBrandInfo.models)}
                  ></camera-brand-icon-button>
                `;
              })}
            </div>
          </div>
        </div>
        <div class="options">
          <ha-fab
            class="button-confirm"
            .label=${localize('common.custom_camera')}
            extended
            @click=${this._addCustomCamera}
          >
            <ha-svg-icon slot="icon" .path=${mdiPlus}></ha-svg-icon>
          </ha-fab>
        </div>
      </ha-dialog>
    `;
  }

  private _openCameraBrandDialog(ev, cameraModelsList: CameraModel[]) {
    const element = ev.target as HTMLElement;
    showModelOptionsDialog(element, {
      cameraDatabase: this.cameraDatabase,
      modelsInfo: cameraModelsList,
    });
    this.closeDialog();
  }

  private _addCustomCamera(ev) {
    const dialogData = {
      cameraModelInfo: {} as CameraModel,
      schema: {
        header: { title: localize('common.add_camera') },
        body: customSchema,
        extra_options: customCameraExtraOptionSchema,
        footer: {
          back: localize('common.go_back'),
          accept: localize('common.add_camera'),
        },
      },
      data: defaultCustomCameraAdvanceOptions,
      formType: 'custom_camera',
      backEvent: { call: showCreateCameraDialog, eventData: { cameraDatabase: this.cameraDatabase } },
    };

    const element = ev.target as HTMLElement;
    showCameraDialog(element, dialogData);
    this.closeDialog();
  }

  private _handleSearchChange(ev: CustomEvent) {
    //Refer hui-card-picker if more more information is required
    this._filter = ev.detail.value;
  }

  static get styles(): CSSResultGroup {
    return [
      haStyleDialog,
      css`
        @media all and (max-width: 450px), all and (max-height: 500px) {
          /* overrule the ha-style-dialog max-height on small screens */
          ha-dialog {
            --mdc-dialog-max-height: 100%;
            height: 100%;
          }
        }

        @media all and (min-width: 1000px) {
          ha-dialog {
            --mdc-dialog-min-width: 900px;
          }
        }

        @media all and (max-width: 500px), all and (max-height: 500px) {
          hui-entity-picker-table {
            height: calc(100vh - 158px);
          }
        }

        ha-dialog {
          --mdc-dialog-max-width: 500px;
          --dialog-content-padding: 2px 24px 20px 24px;
          --dialog-z-index: 5;
        }
        .content {
          width: 100%;
        }
        .contentFather {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        search-input-round {
          display: block;
          --mdc-shape-small: var(--card-picker-search-shape);
          margin: var(--card-picker-search-margin);
          height: 55px;
          width: 100%;
          float: right;
        }
        ha-header-bar {
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-primary: var(--mdc-theme-surface);
          flex-shrink: 0;
        }
        ha-textfield::part(camera) {
          width: 450px;
        }
        .button-confirm {
          float: right;
        }
        .search-bar {
          height: 73px;
          width: 89%;
          padding: 10px 40px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .add-camera {
          float: left;
          font-size: 30px;
          font-weight: bold;
          line-height: 42px;
          color: #303033;
          padding: 1% 1% 1% 1%;
          /* text-align: center; */
          width: 38%;
        }

        .brand-list {
          display: grid;
          width: 90%;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 4%;
          padding: 0px 55px 25px;
        }

        .options {
          width: 100%;
          margin-top: 4%;
          position: sticky;
          float: right;
          right: calc(16px + env(safe-area-inset-right));
          bottom: calc(16px + env(safe-area-inset-bottom));
          z-index: 1;
        }
        camera-brand-icon-button {
          width: 81%;
        }
        @media only screen and (max-width: 500px) {
          .search-bar {
            height: 55px;
            padding: 0px 25px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .content {
            height: 685px;
          }
        }
        @media only screen and (max-width: 1000px) {
          .brand-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5%;
            width: 90%;
            padding: 0px 8px 25px;
          }
          camera-brand-icon-button {
            width: 65%;
          }
        }
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'add-camera-dialog': HuiCreateDialogCamera;
  }
}
