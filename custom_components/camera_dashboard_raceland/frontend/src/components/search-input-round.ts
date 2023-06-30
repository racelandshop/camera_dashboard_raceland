import { mdiClose, mdiMagnify } from '@mdi/js';
import { css, CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';

@customElement('search-input-round')
class SearchInputRound extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @property() public filter?: string;

  @property({ type: Boolean })
  public suffix = false;

  @property({ type: Boolean })
  public autofocus = false;

  @property({ type: String })
  public label?: string;

  protected render(): TemplateResult {
    return html`
      <ha-textfield
        class="rounded"
        outlined
        .autofocus=${this.autofocus}
        .label=${this.label || 'Search'}
        .value=${this.filter || ''}
        icon
        .iconTrailing=${this.filter || this.suffix}
        @input=${this._filterInputChanged}
      >
        <slot name="prefix" slot="leadingIcon">
          <ha-svg-icon tabindex="-1" class="prefix" .path=${mdiMagnify}></ha-svg-icon>
        </slot>
        <div class="trailing" slot="trailingIcon">
          ${this.filter &&
            html`
              <ha-icon-button
                @click=${this._clearSearch}
                .label=${this.hass.localize('ui.common.clear')}
                .path=${mdiClose}
                class="clear-button"
              ></ha-icon-button>
            `}
          <slot name="suffix"></slot>
        </div>
      </ha-textfield>
    `;
  }

  private async _filterChanged(value: string) {
    fireEvent(this, 'value-changed', { value: String(value) });
  }

  private async _filterInputChanged(e) {
    this._filterChanged(e.target.value);
  }

  private async _clearSearch() {
    this._filterChanged('');
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: inline-flex;
      }
      ha-svg-icon,
      ha-icon-button {
        color: var(--primary-text-color);
      }
      ha-svg-icon {
        outline: none;
      }
      .clear-button {
        --mdc-icon-size: 20px;
      }
      ha-textfield.rounded {
        --mdc-shape-small: 28px;
        width: 100%;
      }
      .trailing {
        display: flex;
        align-items: center;
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'search-input-round': SearchInputRound;
  }
}
