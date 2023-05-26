import { mdiPlus } from '@mdi/js';
import { LitElement, html, CSSResultGroup, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import memoizeOne from 'memoize-one';
import Fuse from 'fuse.js';
import './components/raceland-camera-card';
import './components/new-camera-card';
import { getCameraEntities } from './common';
import { fetchCameraDatabase, fetchCameraList } from './data/websocket'; //fetchCameraList is not necessary. getCameraEntities
import { showCreateCameraDialog } from './helpers/show-create-camera-dialog';
import { showDeleteCameraDialog } from './helpers/show-delete-camera-dialog';
import { showEditCameraDialog } from './helpers/show-edit-camera-dialog';
import { showCameraDialog } from './helpers/show-camera-form-dialog';
import { showTestDialog } from './helpers/show-create-test-dialog';
import { CameraDashboardElement } from './cameraDashboardElement';
import { localize } from './localize/localize';
import { loadHaForm } from './load-ha-elements';
import { cameraInfo, cameraCard, cameraModel, backEventOptions, schemaForm, CameraConfiguration } from './types';

declare global {
  // for fire event
  interface HASSDomEvents {
    'teste-event': undefined;
    'add-new-camera': undefined;
    'delete-camera': { cameraInfo: cameraInfo };
    'edit-camera': { cameraInfo: cameraInfo };
    'open-camera-brand-dialog': {
      modelsInfo?: Array<cameraModel>;
    };
    'open-camera-add-camera-form': {
      cameraModelInfo: cameraModel;
      data: CameraConfiguration;
      schema: schemaForm;
      formType: string;
      backEvent: backEventOptions;
    };
    'update-camera-dashboard': undefined;
    'open-teste-dialog': undefined;
  }
}

@customElement('alarm-panel')
export class MyAlarmPanel extends CameraDashboardElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public narrow!: boolean;

  @property({ attribute: false }) public registeredCameras!: any;

  @property({ attribute: false }) public newCameras!: any;

  @property({ attribute: false }) public cameraDatabase: any; //TODO I think I had interface for this. If not built it

  @property({ attribute: false }) public cameraInfo!: cameraInfo;

  @property({ attribute: false }) public cameraList!: any;

  @state() private _filter = '';

  async firstUpdated(changedProps) {
    super.firstUpdated(changedProps);

    this.cameraDatabase = await fetchCameraDatabase(this.hass);
    this.cameraList = await getCameraEntities(this.hass.states);

    ////// These are teste event
    this.addEventListener('teste-event', () => {
      console.log('The EVENT was fired. Hurray!');
    });

    this.addEventListener('open-teste-dialog', () => {
      showTestDialog(this);
    });
    //// -------------------------////

    //this.cameraList = await fetchCameraList(this.hass);

    //this.addEventListener('more-info-camera', ev => {
    //  this._handleMoreInfoCamera(ev);
    //});

    //this.addEventListener('update-camera-dashboard', () => {
    //  console.log('fired the event listener');
    //  this._updateCameraDashboard();
    //});

    //this.addEventListener('add-new-camera', () => {
    //  showCreateCameraDialog(this, { cameraDatabase: this.cameraDatabase.Manufacturer });
    //});

    //this.addEventListener('open-camera-add-camera-form', ev => {
    //  showCameraDialog(this, {
    //    cameraModelInfo: ev.detail.cameraModelInfo,
    //    schema: ev.detail.schema,
    //    data: ev.detail.data,
    //    formType: ev.detail.formType,
    //    backEvent: ev.detail.backEvent,
    //  });
    //});

    // this.addEventListener('delete-camera', ev => {
    //   showDeleteCameraDialog(this, { cameraInfo: ev.detail.cameraInfo });
    // });

    // this.addEventListener('edit-camera', ev => {
    //   showEditCameraDialog(this, { cameraInfo: ev.detail.cameraInfo });
    // });

    await loadHaForm();
    this.requestUpdate();
  }

  private _filterCameras = memoizeOne((cameras, filter?: string) => {
    if (!filter) {
      return cameras;
    }
    let filteredCameras = cameras;
    const options: Fuse.IFuseOptions<cameraCard> = {
      keys: ['name'],
      isCaseSensitive: false,
      minMatchCharLength: 1,
      threshold: 0.2,
    };
    const fuse = new Fuse(filteredCameras, options);
    filteredCameras = fuse.search(filter).map(result => result.item);
    return filteredCameras;
  });

  protected render() {
    if (!customElements.get('ha-app-layout'))
      return html`
        loading...
      `;

    const filteredCameras = this._filterCameras(this.cameraList, this._filter);
    return html`
      ${window.screen.width <= 900
        ? html`
            <div id="header">
              <app-header fixed slot="header">
                <app-toolbar>
                  <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
                </app-toolbar>
              </app-header>
              <search-input
                .hass=${this.hass}
                .filter=${this._filter}
                @value-changed=${this._handleSearchChange}
                .label=${localize('search.cameras')}
              ></search-input>
            </div>
          `
        : html`
            <search-input
              .hass=${this.hass}
              .filter=${this._filter}
              @value-changed=${this._handleSearchChange}
              .label=${localize('search.cameras')}
            ></search-input>
          `}
      <div class="sep"></div>
      <div class="content">
        <div class="contentFather">
          <div
            class=${classMap({
              'camera-list': filteredCameras?.length !== 0,
              'camera-list-one': filteredCameras?.length === 0,
            })}
          >
            ${filteredCameras?.length === 0
              ? html`
                  <new-camera-card .hass=${this.hass} .narrow=${this.narrow}></new-camera-card>
                `
              : filteredCameras?.map(
                  (cam_info: any) =>
                    html`
                      <raceland-camera-card
                        .hass=${this.hass}
                        .narrow=${this.narrow}
                        .record=${false}
                        .cameraInfo=${cam_info}
                      ></raceland-camera-card>
                    `
                )}
          </div>
        </div>
      </div>
      ${filteredCameras?.length === 0
        ? html``
        : html`
            <ha-fab .label=${localize('common.camera')} extended @click=${this._addCamera} })}>
              <ha-svg-icon slot="icon" .path=${mdiPlus}></ha-svg-icon>
            </ha-fab>
          `}
    `;
  }

  private _addCamera() {
    fireEvent(this, 'open-teste-dialog');
    //fireEvent(this, 'add-new-camera');
  }

  private _handleSearchChange(ev: CustomEvent) {
    this._filter = ev.detail.value;
  }

  protected async _updateCameraDashboard() {
    this.registeredCameras = getCameraEntities(this.hass.states);
    this.cameraList = await fetchCameraList(this.hass);
  }

  static get styles(): CSSResultGroup {
    return css`
      raceland-camera-card {
        display: flex;
        flex-direction: column;
        height: 80%;
        width: 100%;
        border-style: solid;
        border-width: min(var(--ha-card-border-width, 1px), 10px);
        border-color: transparent;
        border-radius: var(--ha-card-border-radius, 4px);
      }
      .camera-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows: 160px;
      }
      search-input {
        display: block;
        --mdc-shape-small: var(--card-picker-search-shape);
        margin: var(--card-picker-search-margin);
        height: 55px;
        width: 100%;
      }
      new-camera-card {
        background-color: var(--card-background-color, white);
        box-shadow: var(
          --mdc-fab-box-shadow,
          0px 3px 5px -1px rgba(0, 0, 0, 0.2),
          0px 6px 10px 0px rgba(0, 0, 0, 0.14),
          0px 1px 18px 0px rgba(0, 0, 0, 0.12)
        );
        font-family: Arial;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        font-size: 2.3rem;
        height: 100%;
        box-sizing: border-box;
        justify-content: center;
        position: relative;
        overflow: hidden;
        border-radius: 1.5rem;
        font-weight: 550;
        max-width: 400px;
      }
      ha-menu-button {
        color: var(--primary-text-color);
      }
      .camera-list-one {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-left: 4px;
        margin-right: 4px;
      }
      /* @media only screen and (max-width: 1200px) {
        search-input {
          width: 100%;
          height: 55px;
        }
      } */
      @media only screen and (max-width: 900px) {
        .camera-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(178px, 1fr));
          grid-auto-rows: 130px;
          row-gap: 3%;
          margin-bottom: 15%;
          margin-right: 3px;
        }
        #header {
          display: flex;
          background-color: var(--card-background-color);
          height: 55px;
        }
        app-toolbar {
          padding: 0 12px;
        }
        search-input {
          width: 100%;
          height: 55px;
        }
        raceland-camera-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          border-style: solid;
          border-width: min(var(--ha-card-border-width, 1px), 10px);
          border-color: transparent;
          border-radius: var(--ha-card-border-radius, 4px);
        }
      }

      ha-quick-bar {
        display: none;
      }
      .sep {
        padding-top: 2%;
      }
      .content {
        width: 99.5%;
        height: 720px;
      }
      ha-fab {
        position: fixed;
        float: right;
        right: calc(16px + env(safe-area-inset-right));
        bottom: calc(16px + env(safe-area-inset-bottom));
        z-index: 1;
      }
    `;
  }
}
