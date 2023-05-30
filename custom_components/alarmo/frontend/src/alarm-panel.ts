import { mdiPlus } from '@mdi/js';
import { LitElement, html, CSSResultGroup, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import { UnsubscribeFunc } from 'home-assistant-js-websocket';
import memoizeOne from 'memoize-one';
import Fuse from 'fuse.js';
import { getCameraEntities } from './common';
import { localize } from './localize/localize';
import { loadHaForm } from './load-ha-elements';
import { cameraCard } from './types';
import { SubscribeMixin } from './subscribe-mixin';
import { fetchCameraDatabase } from './data/websocket';
import { CameraDatabase, CameraInfo } from './types';
import './components/raceland-camera-card';
import './components/new-camera-card';

@customElement('alarm-panel')
export class MyAlarmPanel extends SubscribeMixin(LitElement) {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property({ attribute: false }) public cameraDatabase!: CameraDatabase;

  @property({ attribute: false }) public cameraList!: Array<CameraInfo>;

  @property({ attribute: false }) public narrow!: boolean;

  @state() private _filter = '';

  public hassSubscribe(): Promise<UnsubscribeFunc>[] {
    //Connect to backend. Ensures update when backend data is modified
    return [
      this.hass!.connection.subscribeMessage(() => this._fetchData(), { type: 'camera_dashboard_config_updated' }),
    ];
  }

  private async _fetchData(): Promise<void> {
    if (!this.hass) {
      return;
    }
    this.cameraList = await getCameraEntities(this.hass.states);
  }

  async firstUpdated(changedProps) {
    super.firstUpdated(changedProps);

    this.cameraDatabase = await fetchCameraDatabase(this.hass);
    this.cameraList = await getCameraEntities(this.hass.states);

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
                  <new-camera-card
                    .hass=${this.hass}
                    .narrow=${this.narrow}
                    @click=${this._addCamera}
                  ></new-camera-card>
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
    fireEvent(this, 'show-dialog', {
      dialogTag: 'add-camera-dialog',
      dialogImport: () => import('./components/dialogs/add-camera-dialog'),
      dialogParams: { cameraDatabase: this.cameraDatabase.manufacturer },
    });
  }

  private _handleSearchChange(ev: CustomEvent) {
    this._filter = ev.detail.value;
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
