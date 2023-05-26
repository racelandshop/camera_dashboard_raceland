import { LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators';
import { Dashboard } from './data/dashboard';
import { localize } from './localize/localize';
import { ProvideHassLitMixin } from './provide-hass-lit-mixin';
//import { fetchCameraList } from './data/websocket';
//import { getCameraEntities } from './common';

export class CameraDashboardElement extends ProvideHassLitMixin(LitElement) {
  @property({ attribute: false }) public racelandDashoardData!: Dashboard;
  public connectedCallback() {
    super.connectedCallback();

    if (this.racelandDashoardData === undefined) {
      this.racelandDashoardData = {
        language: 'en',
        updates: [],
        resources: [],
        removed: [],
        sections: [],
        localize: (string: string, replace?: Record<string, any>) =>
          localize(this.racelandDashoardData?.language || 'en', string, replace),
      };
    }

    this.addEventListener('update-camera-dashboard', () => {
      console.log('fired the event listener in the mixin class');
      this._updateCameraDashboard();
    });
  }

  protected _updateCameraDashboard() {
    console.log('the updateCameraDashboard is being fired');
    const obj = null;
    let shouldUpdate = false;

    Object.keys(obj).forEach(key => {
      if (JSON.stringify(this.racelandDashoardData[key]) !== JSON.stringify(obj[key])) {
        shouldUpdate = true;
      }
    });

    if (shouldUpdate) {
      this.racelandDashoardData = { ...this.racelandDashoardData, ...obj };
    }
  }

  protected updated(changedProps: PropertyValues) {
    super.updated(changedProps);
  }
}
