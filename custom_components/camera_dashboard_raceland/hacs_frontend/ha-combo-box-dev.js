const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

import { dW as s, r, y as dedupingMixin, P as PolymerElement, q as html, dX as FlattenedNodesObserver, dY as templatize, dr as dashToCamelCase, i, J as t, w, e, x, _ as _decorate, c as s$1, d as e$1, G as i$1, j as _get, k as _getPrototypeOf, $, at as mdiClose, dO as mdiMenuUp, dP as mdiMenuDown, f as fireEvent, n } from './main-dev.js';
import 'lit-html/is-server.js';

let scheduled=false;let beforeRenderQueue=[];let afterRenderQueue=[];function schedule(){scheduled=true;// before next render
requestAnimationFrame(function(){scheduled=false;flushQueue(beforeRenderQueue);// after the render
setTimeout(function(){runQueue(afterRenderQueue);});});}function flushQueue(queue){while(queue.length){callMethod(queue.shift());}}function runQueue(queue){for(let i=0,l=queue.length;i<l;i++){callMethod(queue.shift());}}function callMethod(info){const context=info[0];const callback=info[1];const args=info[2];try{callback.apply(context,args);}catch(e){setTimeout(()=>{throw e;});}}/**
 * Enqueues a callback which will be run after the next render, equivalent
 * to one task (`setTimeout`) after the next `requestAnimationFrame`.
 *
 * This method is useful for tuning the first-render performance of an
 * element or application by deferring non-critical work until after the
 * first paint.  Typical non-render-critical work may include adding UI
 * event listeners and aria attributes.
 *
 * @param {*} context Context object the callback function will be bound to
 * @param {function(...*):void} callback Callback function
 * @param {!Array=} args An array of arguments to call the callback function with
 * @return {void}
 */function afterNextRender(context,callback,args){if(!scheduled){schedule();}afterRenderQueue.push([context,callback,args]);}

/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * Dummy custom element used for collecting
 * development time usage statistics.
 *
 * @private
 */class Material extends HTMLElement{static get version(){return '23.3.5';}}customElements.define('vaadin-material-styles',Material);

/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * @polymerMixin
 */const ThemePropertyMixin=superClass=>class VaadinThemePropertyMixin extends superClass{static get properties(){return {/**
         * Helper property with theme attribute value facilitating propagation
         * in shadow DOM.
         *
         * Enables the component implementation to propagate the `theme`
         * attribute value to the sub-components in Shadow DOM by binding
         * the sub-component’s "theme" attribute to the `theme` property of
         * the host.
         *
         * **NOTE:** Extending the mixin only provides the property for binding,
         * and does not make the propagation alone.
         *
         * See [Styling Components: Sub-components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components/#sub-components).
         * page for more information.
         *
         * @deprecated The `theme` property is not supposed for public use and will be dropped in Vaadin 24.
         * Please, use the `theme` attribute instead.
         * @protected
         */theme:{type:String,reflectToAttribute:true,observer:'__deprecatedThemePropertyChanged'},/**
         * Helper property with theme attribute value facilitating propagation
         * in shadow DOM.
         *
         * Enables the component implementation to propagate the `theme`
         * attribute value to the sub-components in Shadow DOM by binding
         * the sub-component’s "theme" attribute to the `theme` property of
         * the host.
         *
         * **NOTE:** Extending the mixin only provides the property for binding,
         * and does not make the propagation alone.
         *
         * See [Styling Components: Sub-components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components/#sub-components).
         * page for more information.
         *
         * @protected
         */_theme:{type:String,readOnly:true}};}/** @private */__deprecatedThemePropertyChanged(theme){this._set_theme(theme);}};

/**
 * @typedef {Object} Theme
 * @property {string} themeFor
 * @property {CSSResult[]} styles
 * @property {string | string[]} [include]
 * @property {string} [moduleId]
 *
 * @typedef {CSSResult[] | CSSResult} CSSResultGroup
 */ /**
 * @type {Theme[]}
 */const themeRegistry=[];/**
 * Registers CSS styles for a component type. Make sure to register the styles before
 * the first instance of a component of the type is attached to DOM.
 *
 * @param {string} themeFor The local/tag name of the component type to register the styles for
 * @param {CSSResultGroup} styles The CSS style rules to be registered for the component type
 * matching themeFor and included in the local scope of each component instance
 * @param {{moduleId?: string, include?: string | string[]}} options Additional options
 * @return {void}
 */function registerStyles(themeFor,styles,options={}){if(themeFor){if(hasThemes(themeFor)){console.warn(`The custom element definition for "${themeFor}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`);}}styles=flattenStyles(styles);if(window.Vaadin&&window.Vaadin.styleModules){window.Vaadin.styleModules.registerStyles(themeFor,styles,options);}else {themeRegistry.push({themeFor,styles,include:options.include,moduleId:options.moduleId});}}/**
 * Returns all registered themes. By default the themeRegistry is returned as is.
 * In case the style-modules adapter is imported, the themes are obtained from there instead
 * @returns {Theme[]}
 */function getAllThemes(){if(window.Vaadin&&window.Vaadin.styleModules){return window.Vaadin.styleModules.getAllThemes();}return themeRegistry;}/**
 * Returns true if the themeFor string matches the tag name
 * @param {string} themeFor
 * @param {string} tagName
 * @returns {boolean}
 */function matchesThemeFor(themeFor,tagName){return (themeFor||'').split(' ').some(themeForToken=>{return new RegExp(`^${themeForToken.split('*').join('.*')}$`).test(tagName);});}/**
 * Maps the moduleName to an include priority number which is used for
 * determining the order in which styles are applied.
 * @param {string} moduleName
 * @returns {number}
 */function getIncludePriority(moduleName=''){let includePriority=0;if(moduleName.startsWith('lumo-')||moduleName.startsWith('material-')){includePriority=1;}else if(moduleName.startsWith('vaadin-')){includePriority=2;}return includePriority;}/**
 * Flattens the styles into a single array of styles.
 * @param {CSSResultGroup} styles
 * @param {CSSResult[]} result
 * @returns {CSSResult[]}
 */function flattenStyles(styles=[]){return [styles].flat(Infinity).filter(style=>{if(style instanceof s){return true;}console.warn('An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`.');return false;});}/**
 * Gets an array of CSSResults matching the include property of the theme.
 * @param {Theme} theme
 * @returns {CSSResult[]}
 */function getIncludedStyles(theme){const includedStyles=[];if(theme.include){[].concat(theme.include).forEach(includeModuleId=>{const includedTheme=getAllThemes().find(s=>s.moduleId===includeModuleId);if(includedTheme){includedStyles.push(...getIncludedStyles(includedTheme),...includedTheme.styles);}else {console.warn(`Included moduleId ${includeModuleId} not found in style registry`);}},theme.styles);}return includedStyles;}/**
 * Includes the styles to the template.
 * @param {CSSResult[]} styles
 * @param {HTMLTemplateElement} template
 */function addStylesToTemplate(styles,template){const styleEl=document.createElement('style');styleEl.innerHTML=styles.map(style=>style.cssText).join('\n');template.content.appendChild(styleEl);}/**
 * Returns an array of themes that should be used for styling a component matching
 * the tag name. The array is sorted by the include order.
 * @param {string} tagName
 * @returns {Theme[]}
 */function getThemes(tagName){const defaultModuleName=`${tagName}-default-theme`;const themes=getAllThemes()// Filter by matching themeFor properties
.filter(theme=>theme.moduleId!==defaultModuleName&&matchesThemeFor(theme.themeFor,tagName)).map(theme=>({...theme,// Prepend styles from included themes
styles:[...getIncludedStyles(theme),...theme.styles],// Map moduleId to includePriority
includePriority:getIncludePriority(theme.moduleId)}))// Sort by includePriority
.sort((themeA,themeB)=>themeB.includePriority-themeA.includePriority);if(themes.length>0){return themes;}// No theme modules found, return the default module if it exists
return getAllThemes().filter(theme=>theme.moduleId===defaultModuleName);}/**
 * Check if the custom element type has themes applied.
 * @param {string} tagName
 * @returns {boolean}
 */function hasThemes(tagName){return classHasThemes(customElements.get(tagName));}/**
 * Check if the custom element type has themes applied.
 * @param {Function} elementClass
 * @returns {boolean}
 */function classHasThemes(elementClass){return elementClass&&Object.prototype.hasOwnProperty.call(elementClass,'__themes');}/**
 * @polymerMixin
 * @mixes ThemePropertyMixin
 */const ThemableMixin=superClass=>class VaadinThemableMixin extends ThemePropertyMixin(superClass){/**
     * Covers PolymerElement based component styling
     * @protected
     */static finalize(){super.finalize();// Make sure not to run the logic intended for PolymerElement when LitElement is used.
if(this.elementStyles){return;}const template=this.prototype._template;if(!template||classHasThemes(this)){return;}addStylesToTemplate(this.getStylesForThis(),template);}/**
     * Covers LitElement based component styling
     *
     * @protected
     */static finalizeStyles(styles){// The "styles" object originates from the "static get styles()" function of
// a LitElement based component. The theme styles are added after it
// so that they can override the component styles.
const themeStyles=this.getStylesForThis();return styles?[...super.finalizeStyles(styles),...themeStyles]:themeStyles;}/**
     * Get styles for the component type
     *
     * @private
     */static getStylesForThis(){const parent=Object.getPrototypeOf(this.prototype);const inheritedThemes=(parent?parent.constructor.__themes:[])||[];this.__themes=[...inheritedThemes,...getThemes(this.is)];const themeStyles=this.__themes.flatMap(theme=>theme.styles);// Remove duplicates
return themeStyles.filter((style,index)=>index===themeStyles.lastIndexOf(style));}};

const colorLight=r`
  :host {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: initial;
    --_material-text-field-input-line-opacity: initial;
    --_material-text-field-input-line-hover-opacity: initial;
    --_material-text-field-focused-label-opacity: initial;

    /* Button tweaks */
    --_material-button-raised-background-color: initial;
    --_material-button-outline-color: initial;

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: initial;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: initial;

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  [theme~='dark'] {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  a {
    color: inherit;
  }
`;registerStyles('',colorLight,{moduleId:'material-color-light'});const colorDark=r`
  :host {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }
`;registerStyles('',colorDark,{moduleId:'material-color-dark'});const colorBase=r`
  :host {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);
  }
`;const $tpl$2=document.createElement('template');$tpl$2.innerHTML=`<style>${colorBase.toString().replace(':host','html')}</style>`;document.head.appendChild($tpl$2.content);

const font=r`
  :host {
    /* Font family */
    --material-font-family: 'Roboto', sans-serif;

    /* Font sizes */
    --material-h1-font-size: 6rem;
    --material-h2-font-size: 3.75rem;
    --material-h3-font-size: 3rem;
    --material-h4-font-size: 2.125rem;
    --material-h5-font-size: 1.5rem;
    --material-h6-font-size: 1.25rem;
    --material-body-font-size: 1rem;
    --material-small-font-size: 0.875rem;
    --material-button-font-size: 0.875rem;
    --material-caption-font-size: 0.75rem;

    /* Icon size */
    --material-icon-font-size: 20px;
  }
`;const typography=r`
  body,
  :host {
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    line-height: 1.1;
    margin-top: 1.5em;
  }

  h1 {
    font-size: var(--material-h3-font-size);
    font-weight: 300;
    letter-spacing: -0.015em;
    margin-bottom: 1em;
    text-indent: -0.07em;
  }

  h2 {
    font-size: var(--material-h4-font-size);
    font-weight: 300;
    letter-spacing: -0.01em;
    margin-bottom: 0.75em;
    text-indent: -0.07em;
  }

  h3 {
    font-size: var(--material-h5-font-size);
    font-weight: 400;
    margin-bottom: 0.75em;
    text-indent: -0.05em;
  }

  h4 {
    font-size: var(--material-h6-font-size);
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-bottom: 0.75em;
    text-indent: -0.05em;
  }

  h5 {
    font-size: var(--material-body-font-size);
    font-weight: 500;
    margin-bottom: 0.5em;
    text-indent: -0.025em;
  }

  h6 {
    font-size: var(--material-small-font-size);
    font-weight: 500;
    letter-spacing: 0.01em;
    margin-bottom: 0.25em;
    text-indent: -0.025em;
  }

  a,
  b,
  strong {
    font-weight: 500;
  }
`;registerStyles('',typography,{moduleId:'material-typography'});const $tpl$1=document.createElement('template');$tpl$1.innerHTML=`<style>${font.toString().replace(':host','html')}</style>`;document.head.appendChild($tpl$1.content);/* Import Roboto from Google Fonts */if(!window.polymerSkipLoadingFontRoboto){/* prettier-ignore */const font='https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic';const link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.crossOrigin='anonymous';link.href=font;document.head.appendChild(link);}

const shadow=r`
  /* prettier-ignore */
  :host {
    /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */
    --material-shadow-elevation-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    --material-shadow-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 4px 22px 3px rgba(0, 0, 0, 0.12), 0 6px 7px -4px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);
    --material-shadow-elevation-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.4);
  }
`;const $tpl=document.createElement('template');$tpl.innerHTML=`<style>${shadow.toString().replace(':host','html')}</style>`;document.head.appendChild($tpl.content);

const overlay=r`
  :host {
    top: 16px;
    right: 16px;
    /* TODO (@jouni): remove unnecessary multiplication after https://github.com/vaadin/vaadin-overlay/issues/90 is fixed */
    bottom: calc(1px * var(--vaadin-overlay-viewport-bottom) + 16px);
    left: 16px;
  }

  [part='overlay'] {
    background-color: var(--material-background-color);
    border-radius: 4px;
    box-shadow: var(--material-shadow-elevation-4dp);
    color: var(--material-body-text-color);
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    font-weight: 400;
  }

  [part='content'] {
    padding: 8px 0;
  }

  [part='backdrop'] {
    opacity: 0.2;
    animation: 0.2s vaadin-overlay-backdrop-enter;
    will-change: opacity;
  }

  @keyframes vaadin-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }
`;registerStyles('',overlay,{moduleId:'material-overlay'});

registerStyles('vaadin-overlay',overlay,{moduleId:'material-vaadin-overlay'});

/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const testUserAgent=regexp=>regexp.test(navigator.userAgent);const testPlatform=regexp=>regexp.test(navigator.platform);const testVendor=regexp=>regexp.test(navigator.vendor);testUserAgent(/Android/);testUserAgent(/Chrome/)&&testVendor(/Google Inc/);testUserAgent(/Firefox/);// IPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
const isIPad=testPlatform(/^iPad/)||testPlatform(/^Mac/)&&navigator.maxTouchPoints>1;const isIPhone=testPlatform(/^iPhone/);const isIOS=isIPhone||isIPad;const isSafari=testUserAgent(/^((?!chrome|android).)*safari/i);const isTouch=(()=>{try{document.createEvent('TouchEvent');return true;}catch(e){return false;}})();

/**
 * @typedef ReactiveController
 * @type {import('lit').ReactiveController}
 */ /**
 * A mixin for connecting controllers to the element.
 *
 * @polymerMixin
 */const ControllerMixin=dedupingMixin(superClass=>class ControllerMixinClass extends superClass{constructor(){super();/**
         * @type {Set<ReactiveController>}
         */this.__controllers=new Set();}/** @protected */connectedCallback(){super.connectedCallback();this.__controllers.forEach(c=>{if(c.hostConnected){c.hostConnected();}});}/** @protected */disconnectedCallback(){super.disconnectedCallback();this.__controllers.forEach(c=>{if(c.hostDisconnected){c.hostDisconnected();}});}/**
       * Registers a controller to participate in the element update cycle.
       *
       * @param {ReactiveController} controller
       * @protected
       */addController(controller){this.__controllers.add(controller);// Call hostConnected if a controller is added after the element is attached.
if(this.$!==undefined&&this.isConnected&&controller.hostConnected){controller.hostConnected();}}/**
       * Removes a controller from the element.
       *
       * @param {ReactiveController} controller
       * @protected
       */removeController(controller){this.__controllers.delete(controller);}});

/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * Helper that provides a set of functions for RTL.
 */class DirHelper{/**
   * Get the scroll type in the current browser view.
   *
   * @return {string} the scroll type. Possible values are `default|reverse|negative`
   */static detectScrollType(){const dummy=document.createElement('div');dummy.textContent='ABCD';dummy.dir='rtl';dummy.style.fontSize='14px';dummy.style.width='4px';dummy.style.height='1px';dummy.style.position='absolute';dummy.style.top='-1000px';dummy.style.overflow='scroll';document.body.appendChild(dummy);let cachedType='reverse';if(dummy.scrollLeft>0){cachedType='default';}else {dummy.scrollLeft=2;if(dummy.scrollLeft<2){cachedType='negative';}}document.body.removeChild(dummy);return cachedType;}/**
   * Get the scrollLeft value of the element relative to the direction
   *
   * @param {string} scrollType type of the scroll detected with `detectScrollType`
   * @param {string} direction current direction of the element
   * @param {Element} element
   * @return {number} the scrollLeft value.
   */static getNormalizedScrollLeft(scrollType,direction,element){const{scrollLeft}=element;if(direction!=='rtl'||!scrollType){return scrollLeft;}switch(scrollType){case'negative':return element.scrollWidth-element.clientWidth+scrollLeft;case'reverse':return element.scrollWidth-element.clientWidth-scrollLeft;default:return scrollLeft;}}/**
   * Set the scrollLeft value of the element relative to the direction
   *
   * @param {string} scrollType type of the scroll detected with `detectScrollType`
   * @param {string} direction current direction of the element
   * @param {Element} element
   * @param {number} scrollLeft the scrollLeft value to be set
   */static setNormalizedScrollLeft(scrollType,direction,element,scrollLeft){if(direction!=='rtl'||!scrollType){element.scrollLeft=scrollLeft;return;}switch(scrollType){case'negative':element.scrollLeft=element.clientWidth-element.scrollWidth+scrollLeft;break;case'reverse':element.scrollLeft=element.scrollWidth-element.clientWidth-scrollLeft;break;default:element.scrollLeft=scrollLeft;break;}}}

/**
 * Array of Vaadin custom element classes that have been subscribed to the dir changes.
 */const directionSubscribers=[];function directionUpdater(){const documentDir=getDocumentDir();directionSubscribers.forEach(element=>{alignDirs(element,documentDir);});}let scrollType;const directionObserver=new MutationObserver(directionUpdater);directionObserver.observe(document.documentElement,{attributes:true,attributeFilter:['dir']});function alignDirs(element,documentDir,elementDir=element.getAttribute('dir')){if(documentDir){element.setAttribute('dir',documentDir);}else if(elementDir!=null){element.removeAttribute('dir');}}function getDocumentDir(){return document.documentElement.getAttribute('dir');}/**
 * A mixin to handle `dir` attribute based on the one set on the `<html>` element.
 *
 * @polymerMixin
 */const DirMixin=superClass=>class VaadinDirMixin extends superClass{static get properties(){return {/**
         * @protected
         */dir:{type:String,value:'',reflectToAttribute:true,converter:{fromAttribute:attr=>{return !attr?'':attr;},toAttribute:prop=>{return prop===''?null:prop;}}}};}/** @protected */static finalize(){super.finalize();if(!scrollType){scrollType=DirHelper.detectScrollType();}}/** @protected */connectedCallback(){super.connectedCallback();if(!this.hasAttribute('dir')||this.__restoreSubscription){this.__subscribe();alignDirs(this,getDocumentDir(),null);}}/** @protected */attributeChangedCallback(name,oldValue,newValue){super.attributeChangedCallback(name,oldValue,newValue);if(name!=='dir'){return;}const documentDir=getDocumentDir();// New value equals to the document direction and the element is not subscribed to the changes
const newValueEqlDocDir=newValue===documentDir&&directionSubscribers.indexOf(this)===-1;// Value was emptied and the element is not subscribed to the changes
const newValueEmptied=!newValue&&oldValue&&directionSubscribers.indexOf(this)===-1;// New value is different and the old equals to document direction and the element is not subscribed to the changes
const newDiffValue=newValue!==documentDir&&oldValue===documentDir;if(newValueEqlDocDir||newValueEmptied){this.__subscribe();alignDirs(this,documentDir,newValue);}else if(newDiffValue){this.__unsubscribe();}}/** @protected */disconnectedCallback(){super.disconnectedCallback();this.__restoreSubscription=directionSubscribers.includes(this);this.__unsubscribe();}/** @protected */_valueToNodeAttribute(node,value,attribute){// Override default Polymer attribute reflection to match native behavior of HTMLElement.dir property
// If the property contains an empty string then it should not create an empty attribute
if(attribute==='dir'&&value===''&&!node.hasAttribute('dir')){return;}super._valueToNodeAttribute(node,value,attribute);}/** @protected */_attributeToProperty(attribute,value,type){// Override default Polymer attribute reflection to match native behavior of HTMLElement.dir property
// If the attribute is removed, then the dir property should contain an empty string instead of null
if(attribute==='dir'&&!value){this.dir='';}else {super._attributeToProperty(attribute,value,type);}}/** @private */__subscribe(){if(!directionSubscribers.includes(this)){directionSubscribers.push(this);}}/** @private */__unsubscribe(){if(directionSubscribers.includes(this)){directionSubscribers.splice(directionSubscribers.indexOf(this),1);}}/**
     * @param {Element} element
     * @return {number}
     * @protected
     */__getNormalizedScrollLeft(element){return DirHelper.getNormalizedScrollLeft(scrollType,this.getAttribute('dir')||'ltr',element);}/**
     * @param {Element} element
     * @param {number} scrollLeft
     * @protected
     */__setNormalizedScrollLeft(element,scrollLeft){return DirHelper.setNormalizedScrollLeft(scrollType,this.getAttribute('dir')||'ltr',element,scrollLeft);}};

/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ // We consider the keyboard to be active if the window has received a keydown
// Use capture phase so we detect events even if they're handled.
window.addEventListener('keydown',()=>{},{capture:true});window.addEventListener('mousedown',()=>{},{capture:true});/**
 * Returns true if the element is hidden directly with `display: none` or `visibility: hidden`,
 * false otherwise.
 *
 * The method doesn't traverse the element's ancestors, it only checks for the CSS properties
 * set directly to or inherited by the element.
 *
 * @param {HTMLElement} element
 * @return {boolean}
 */function isElementHiddenDirectly(element){// Check inline style first to save a re-flow.
const style=element.style;if(style.visibility==='hidden'||style.display==='none'){return true;}const computedStyle=window.getComputedStyle(element);if(computedStyle.visibility==='hidden'||computedStyle.display==='none'){return true;}return false;}/**
 * Returns the normalized element tabindex. If not focusable, returns -1.
 * It checks for the attribute "tabindex" instead of the element property
 * `tabIndex` since browsers assign different values to it.
 * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
 *
 * @param {HTMLElement} element
 * @return {number}
 */function normalizeTabIndex(element){if(!isElementFocusable(element)){return -1;}const tabIndex=element.getAttribute('tabindex')||0;return Number(tabIndex);}/**
 * Returns if element `a` has lower tab order compared to element `b`
 * (both elements are assumed to be focusable and tabbable).
 * Elements with tabindex = 0 have lower tab order compared to elements
 * with tabindex > 0.
 * If both have same tabindex, it returns false.
 *
 * @param {HTMLElement} a
 * @param {HTMLElement} b
 * @return {boolean}
 */function hasLowerTabOrder(a,b){// Normalize tabIndexes
// e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
const ati=Math.max(a.tabIndex,0);const bti=Math.max(b.tabIndex,0);return ati===0||bti===0?bti>ati:ati>bti;}/**
 * Merge sort iterator, merges the two arrays into one, sorted by tabindex.
 *
 * @param {HTMLElement[]} left
 * @param {HTMLElement[]} right
 * @return {HTMLElement[]}
 */function mergeSortByTabIndex(left,right){const result=[];while(left.length>0&&right.length>0){if(hasLowerTabOrder(left[0],right[0])){result.push(right.shift());}else {result.push(left.shift());}}return result.concat(left,right);}/**
 * Sorts an array of elements by tabindex. Returns a new array.
 *
 * @param {HTMLElement[]} elements
 * @return {HTMLElement[]}
 */function sortElementsByTabIndex(elements){// Implement a merge sort as Array.prototype.sort does a non-stable sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const len=elements.length;if(len<2){return elements;}const pivot=Math.ceil(len/2);const left=sortElementsByTabIndex(elements.slice(0,pivot));const right=sortElementsByTabIndex(elements.slice(pivot));return mergeSortByTabIndex(left,right);}/**
 * Searches for nodes that are tabbable and adds them to the `result` array.
 * Returns if the `result` array needs to be sorted by tabindex.
 *
 * @param {Node} node The starting point for the search; added to `result` if tabbable.
 * @param {HTMLElement[]} result
 * @return {boolean}
 * @private
 */function collectFocusableNodes(node,result){if(node.nodeType!==Node.ELEMENT_NODE||isElementHiddenDirectly(node)){// Don't traverse children if the node is not an HTML element or not visible.
return false;}const element=/** @type {HTMLElement} */node;const tabIndex=normalizeTabIndex(element);let needsSort=tabIndex>0;if(tabIndex>=0){result.push(element);}let children=[];if(element.localName==='slot'){children=element.assignedNodes({flatten:true});}else {// Use shadow root if possible, will check for distributed nodes.
children=(element.shadowRoot||element).children;}[...children].forEach(child=>{// Ensure method is always invoked to collect focusable children.
needsSort=collectFocusableNodes(child,result)||needsSort;});return needsSort;}/**
 * Returns true if the element is focusable, otherwise false.
 *
 * The list of focusable elements is taken from http://stackoverflow.com/a/1600194/4228703.
 * However, there isn't a definite list, it's up to the browser.
 * The only standard we have is DOM Level 2 HTML https://www.w3.org/TR/DOM-Level-2-HTML/html.html,
 * according to which the only elements that have a `focus()` method are:
 * - HTMLInputElement
 * - HTMLSelectElement
 * - HTMLTextAreaElement
 * - HTMLAnchorElement
 *
 * This notably omits HTMLButtonElement and HTMLAreaElement.
 * Referring to these tests with tabbables in different browsers
 * http://allyjs.io/data-tables/focusable.html
 *
 * @param {HTMLElement} element
 * @return {boolean}
 */function isElementFocusable(element){// The element cannot be focused if its `tabindex` attribute is set to `-1`.
if(element.matches('[tabindex="-1"]')){return false;}// Elements that cannot be focused if they have a `disabled` attribute.
if(element.matches('input, select, textarea, button, object')){return element.matches(':not([disabled])');}// Elements that can be focused even if they have a `disabled` attribute.
return element.matches('a[href], area[href], iframe, [tabindex], [contentEditable]');}/**
 * Returns true if the element is focused, false otherwise.
 *
 * @param {HTMLElement} element
 * @return {boolean}
 */function isElementFocused(element){return element.getRootNode().activeElement===element;}/**
 * Returns a tab-ordered array of focusable elements for a root element.
 * The resulting array will include the root element if it is focusable.
 *
 * The method traverses nodes in shadow DOM trees too if any.
 *
 * @param {HTMLElement} element
 * @return {HTMLElement[]}
 */function getFocusableElements(element){const focusableElements=[];const needsSortByTabIndex=collectFocusableNodes(element,focusableElements);// If there is at least one element with tabindex > 0, we need to sort
// the final array by tabindex.≈
if(needsSortByTabIndex){return sortElementsByTabIndex(focusableElements);}return focusableElements;}

const instances=[];/**
 * A controller for trapping focus within a DOM node.
 */class FocusTrapController{/**
   * @param {HTMLElement} host
   */constructor(host){/**
     * The controller host element.
     *
     * @type {HTMLElement}
     */this.host=host;/**
     * A node for trapping focus in.
     *
     * @type {HTMLElement | null}
     * @private
     */this.__trapNode=null;this.__onKeyDown=this.__onKeyDown.bind(this);}hostConnected(){document.addEventListener('keydown',this.__onKeyDown);}hostDisconnected(){document.removeEventListener('keydown',this.__onKeyDown);}/**
   * Activates a focus trap for a DOM node that will prevent focus from escaping the node.
   * The trap can be deactivated with the `.releaseFocus()` method.
   *
   * If focus is initially outside the trap, the method will move focus inside,
   * on the first focusable element of the trap in the tab order.
   * The first focusable element can be the trap node itself if it is focusable
   * and comes first in the tab order.
   *
   * If there are no focusable elements, the method will throw an exception
   * and the trap will not be set.
   *
   * @param {HTMLElement} trapNode
   */trapFocus(trapNode){this.__trapNode=trapNode;if(this.__focusableElements.length===0){this.__trapNode=null;throw new Error('The trap node should have at least one focusable descendant or be focusable itself.');}instances.push(this);if(this.__focusedElementIndex===-1){this.__focusableElements[0].focus();}}/**
   * Deactivates the focus trap set with the `.trapFocus()` method
   * so that it becomes possible to tab outside the trap node.
   */releaseFocus(){this.__trapNode=null;instances.pop();}/**
   * A `keydown` event handler that manages tabbing navigation when the trap is enabled.
   *
   * - Moves focus to the next focusable element of the trap on `Tab` press.
   * When no next element to focus, the method moves focus to the first focusable element.
   * - Moves focus to the prev focusable element of the trap on `Shift+Tab` press.
   * When no prev element to focus, the method moves focus to the last focusable element.
   *
   * @param {KeyboardEvent} event
   * @private
   */__onKeyDown(event){if(!this.__trapNode){return;}// Only handle events for the last instance
if(this!==Array.from(instances).pop()){return;}if(event.key==='Tab'){event.preventDefault();const backward=event.shiftKey;this.__focusNextElement(backward);}}/**
   * - Moves focus to the next focusable element if `backward === false`.
   * When no next element to focus, the method moves focus to the first focusable element.
   * - Moves focus to the prev focusable element if `backward === true`.
   * When no prev element to focus the method moves focus to the last focusable element.
   *
   * If no focusable elements, the method returns immediately.
   *
   * @param {boolean} backward
   * @private
   */__focusNextElement(backward=false){const focusableElements=this.__focusableElements;const step=backward?-1:1;const currentIndex=this.__focusedElementIndex;const nextIndex=(focusableElements.length+currentIndex+step)%focusableElements.length;const element=focusableElements[nextIndex];element.focus();if(element.localName==='input'){element.select();}}/**
   * An array of tab-ordered focusable elements inside the trap node.
   *
   * @return {HTMLElement[]}
   * @private
   */get __focusableElements(){return getFocusableElements(this.__trapNode);}/**
   * The index of the element inside the trap node that currently has focus.
   *
   * @return {HTMLElement | undefined}
   * @private
   */get __focusedElementIndex(){const focusableElements=this.__focusableElements;return focusableElements.indexOf(focusableElements.filter(isElementFocused).pop());}}

/**
 *
 * `<vaadin-overlay>` is a Web Component for creating overlays. The content of the overlay
 * can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the overlay uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `owner`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `owner`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-overlay id="overlay"></vaadin-overlay>
 * ```
 * ```js
 * const overlay = document.querySelector('#overlay');
 * overlay.renderer = function(root) {
 *  root.textContent = "Overlay content";
 * };
 * ```
 *
 * Renderer is called on the opening of the overlay and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * **NOTE:** when the renderer property is defined, the `<template>` content is not used.
 *
 * ### Templating
 *
 * Alternatively, the content can be provided with Polymer Template.
 * Overlay finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * After the content from the template is stamped, the `content` property
 * points to the content container.
 *
 * The overlay provides `forwardHostProp` when calling
 * `Polymer.Templatize.templatize` for the template, so that the bindings
 * from the parent scope propagate to the content.
 *
 * ### Styling
 *
 * To style the overlay content, use styles in the parent scope:
 *
 * - If the overlay is used in a component, then the component styles
 *   apply the overlay content.
 * - If the overlay is used in the global DOM scope, then global styles
 *   apply to the overlay content.
 *
 * See examples for styling the overlay content in the live demos.
 *
 * The following Shadow DOM parts are available for styling the overlay component itself:
 *
 * Part name  | Description
 * -----------|---------------------------------------------------------|
 * `backdrop` | Backdrop of the overlay
 * `overlay`  | Container for position/sizing/alignment of the content
 * `content`  | Content of the overlay
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part
 * ---|---|---
 * `opening` | Applied just after the overlay is attached to the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 * `closing` | Applied just before the overlay is detached from the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 *
 * The following custom CSS properties are available for styling:
 *
 * Custom CSS property | Description | Default value
 * ---|---|---
 * `--vaadin-overlay-viewport-bottom` | Bottom offset of the visible viewport area | `0` or detected offset
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @fires {CustomEvent} opened-changed - Fired when the `opened` property changes.
 * @fires {CustomEvent} vaadin-overlay-open - Fired after the overlay is opened.
 * @fires {CustomEvent} vaadin-overlay-close - Fired before the overlay will be closed. If canceled the closing of the overlay is canceled as well.
 * @fires {CustomEvent} vaadin-overlay-closing - Fired when the overlay will be closed.
 * @fires {CustomEvent} vaadin-overlay-outside-click - Fired before the overlay will be closed on outside click. If canceled the closing of the overlay is canceled as well.
 * @fires {CustomEvent} vaadin-overlay-escape-press - Fired before the overlay will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
 *
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes DirMixin
 * @mixes ControllerMixin
 */class Overlay extends ThemableMixin(DirMixin(ControllerMixin(PolymerElement))){static get template(){return html`
      <style>
        :host {
          z-index: 200;
          position: fixed;

          /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

          /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
          top: 0;
          right: 0;
          bottom: var(--vaadin-overlay-viewport-bottom);
          left: 0;

          /* Use flexbox alignment for the overlay part. */
          display: flex;
          flex-direction: column; /* makes dropdowns sizing easier */
          /* Align to center by default. */
          align-items: center;
          justify-content: center;

          /* Allow centering when max-width/max-height applies. */
          margin: auto;

          /* The host is not clickable, only the overlay part is. */
          pointer-events: none;

          /* Remove tap highlight on touch devices. */
          -webkit-tap-highlight-color: transparent;

          /* CSS API for host */
          --vaadin-overlay-viewport-bottom: 0;
        }

        :host([hidden]),
        :host(:not([opened]):not([closing])) {
          display: none !important;
        }

        [part='overlay'] {
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          pointer-events: auto;

          /* Prevent overflowing the host in MSIE 11 */
          max-width: 100%;
          box-sizing: border-box;

          -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
        }

        [part='backdrop'] {
          z-index: -1;
          content: '';
          background: rgba(0, 0, 0, 0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          pointer-events: auto;
        }
      </style>

      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `;}static get is(){return 'vaadin-overlay';}static get properties(){return {/**
       * When true, the overlay is visible and attached to body.
       */opened:{type:Boolean,notify:true,observer:'_openedChanged',reflectToAttribute:true},/**
       * Owner element passed with renderer function
       * @type {HTMLElement}
       */owner:Element,/**
       * Custom function for rendering the content of the overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `owner` The host element of the renderer function.
       * - `model` The object with the properties related with rendering.
       * @type {OverlayRenderer | null | undefined}
       */renderer:Function,/**
       * The template of the overlay content.
       * @type {HTMLTemplateElement | null | undefined}
       */template:{type:Object,notify:true},/**
       * References the content container after the template is stamped.
       * @type {!HTMLElement | undefined}
       */content:{type:Object,notify:true},/**
       * When true the overlay has backdrop on top of content when opened.
       * @type {boolean}
       */withBackdrop:{type:Boolean,value:false,reflectToAttribute:true},/**
       * Object with properties that is passed to `renderer` function
       */model:Object,/**
       * When true the overlay won't disable the main content, showing
       * it doesn’t change the functionality of the user interface.
       * @type {boolean}
       */modeless:{type:Boolean,value:false,reflectToAttribute:true,observer:'_modelessChanged'},/**
       * When set to true, the overlay is hidden. This also closes the overlay
       * immediately in case there is a closing animation in progress.
       * @type {boolean}
       */hidden:{type:Boolean,reflectToAttribute:true,observer:'_hiddenChanged'},/**
       * When true move focus to the first focusable element in the overlay,
       * or to the overlay if there are no focusable elements.
       * @type {boolean}
       */focusTrap:{type:Boolean,value:false},/**
       * Set to true to enable restoring of focus when overlay is closed.
       * @type {boolean}
       */restoreFocusOnClose:{type:Boolean,value:false},/**
       * Set to specify the element which should be focused on overlay close,
       * if `restoreFocusOnClose` is set to true.
       * @type {HTMLElement}
       */restoreFocusNode:{type:HTMLElement},/** @private */_mouseDownInside:{type:Boolean},/** @private */_mouseUpInside:{type:Boolean},/** @private */_instance:{type:Object},/** @private */_originalContentPart:Object,/** @private */_contentNodes:Array,/** @private */_oldOwner:Element,/** @private */_oldModel:Object,/** @private */_oldTemplate:Object,/** @private */_oldRenderer:Object,/** @private */_oldOpened:Boolean};}static get observers(){return ['_templateOrRendererChanged(template, renderer, owner, model, opened)'];}constructor(){super();this._boundMouseDownListener=this._mouseDownListener.bind(this);this._boundMouseUpListener=this._mouseUpListener.bind(this);this._boundOutsideClickListener=this._outsideClickListener.bind(this);this._boundKeydownListener=this._keydownListener.bind(this);this._observer=new FlattenedNodesObserver(this,info=>{this._setTemplateFromNodes(info.addedNodes);});// Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.
this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this);/* c8 ignore next 3 */if(isIOS){this._boundIosResizeListener=()=>this._detectIosNavbar();}this.__focusTrapController=new FocusTrapController(this);}/** @protected */ready(){super.ready();this._observer.flush();// Need to add dummy click listeners to this and the backdrop or else
// the document click event listener (_outsideClickListener) may never
// get invoked on iOS Safari (reproducible in <vaadin-dialog>
// and <vaadin-context-menu>).
this.addEventListener('click',()=>{});this.$.backdrop.addEventListener('click',()=>{});this.addController(this.__focusTrapController);}/** @private */_detectIosNavbar(){/* c8 ignore next 15 */if(!this.opened){return;}const innerHeight=window.innerHeight;const innerWidth=window.innerWidth;const landscape=innerWidth>innerHeight;const clientHeight=document.documentElement.clientHeight;if(landscape&&clientHeight>innerHeight){this.style.setProperty('--vaadin-overlay-viewport-bottom',`${clientHeight-innerHeight}px`);}else {this.style.setProperty('--vaadin-overlay-viewport-bottom','0');}}/**
   * @param {!Array<!Element>} nodes
   * @protected
   */_setTemplateFromNodes(nodes){this.template=nodes.find(node=>node.localName&&node.localName==='template')||this.template;}/**
   * @param {Event=} sourceEvent
   * @event vaadin-overlay-close
   * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
   */close(sourceEvent){const evt=new CustomEvent('vaadin-overlay-close',{bubbles:true,cancelable:true,detail:{sourceEvent}});this.dispatchEvent(evt);if(!evt.defaultPrevented){this.opened=false;}}/** @protected */connectedCallback(){super.connectedCallback();/* c8 ignore next 3 */if(this._boundIosResizeListener){this._detectIosNavbar();window.addEventListener('resize',this._boundIosResizeListener);}}/** @protected */disconnectedCallback(){super.disconnectedCallback();/* c8 ignore next 3 */if(this._boundIosResizeListener){window.removeEventListener('resize',this._boundIosResizeListener);}}/**
   * Requests an update for the content of the overlay.
   * While performing the update, it invokes the renderer passed in the `renderer` property.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */requestContentUpdate(){if(this.renderer){this.renderer.call(this.owner,this.content,this.owner,this.model);}}/** @private */_ironOverlayCanceled(event){event.preventDefault();}/** @private */_mouseDownListener(event){this._mouseDownInside=event.composedPath().indexOf(this.$.overlay)>=0;}/** @private */_mouseUpListener(event){this._mouseUpInside=event.composedPath().indexOf(this.$.overlay)>=0;}/**
   * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
   * propagating the event to the listener in the button. Otherwise, if the clicked button would call
   * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
   *
   * @event vaadin-overlay-outside-click
   * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
   *
   * @private
   */_outsideClickListener(event){if(event.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=false;this._mouseUpInside=false;return;}if(!this._last){return;}const evt=new CustomEvent('vaadin-overlay-outside-click',{bubbles:true,cancelable:true,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event);}}/**
   * @event vaadin-overlay-escape-press
   * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
   *
   * @private
   */_keydownListener(event){if(!this._last){return;}// Only close modeless overlay on Esc press when it contains focus
if(this.modeless&&!event.composedPath().includes(this.$.overlay)){return;}if(event.key==='Escape'){const evt=new CustomEvent('vaadin-overlay-escape-press',{bubbles:true,cancelable:true,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event);}}}/** @protected */_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children));}/**
   * @event vaadin-overlay-open
   * fired after the `vaadin-overlay` is opened.
   *
   * @private
   */_openedChanged(opened,wasOpened){if(!this._instance){this._ensureTemplatized();}if(opened){// Store focused node.
this.__restoreFocusNode=this._getActiveElement();this._animatedOpening();afterNextRender(this,()=>{if(this.focusTrap){this.__focusTrapController.trapFocus(this.$.overlay);}const evt=new CustomEvent('vaadin-overlay-open',{bubbles:true});this.dispatchEvent(evt);});document.addEventListener('keydown',this._boundKeydownListener);if(!this.modeless){this._addGlobalListeners();}}else if(wasOpened){if(this.focusTrap){this.__focusTrapController.releaseFocus();}this._animatedClosing();document.removeEventListener('keydown',this._boundKeydownListener);if(!this.modeless){this._removeGlobalListeners();}}}/** @private */_hiddenChanged(hidden){if(hidden&&this.hasAttribute('closing')){this._flushAnimation('closing');}}/**
   * @return {boolean}
   * @protected
   */_shouldAnimate(){const name=getComputedStyle(this).getPropertyValue('animation-name');const hidden=getComputedStyle(this).getPropertyValue('display')==='none';return !hidden&&name&&name!=='none';}/**
   * @param {string} type
   * @param {Function} callback
   * @protected
   */_enqueueAnimation(type,callback){const handler=`__${type}Handler`;const listener=event=>{if(event&&event.target!==this){return;}callback();this.removeEventListener('animationend',listener);delete this[handler];};this[handler]=listener;this.addEventListener('animationend',listener);}/**
   * @param {string} type
   * @protected
   */_flushAnimation(type){const handler=`__${type}Handler`;if(typeof this[handler]==='function'){this[handler]();}}/** @protected */_animatedOpening(){if(this.parentNode===document.body&&this.hasAttribute('closing')){this._flushAnimation('closing');}this._attachOverlay();if(!this.modeless){this._enterModalState();}this.setAttribute('opening','');if(this._shouldAnimate()){this._enqueueAnimation('opening',()=>{this._finishOpening();});}else {this._finishOpening();}}/** @protected */_attachOverlay(){this._placeholder=document.createComment('vaadin-overlay-placeholder');this.parentNode.insertBefore(this._placeholder,this);document.body.appendChild(this);this.bringToFront();}/** @protected */_finishOpening(){document.addEventListener('iron-overlay-canceled',this._boundIronOverlayCanceledListener);this.removeAttribute('opening');}/** @protected */_finishClosing(){document.removeEventListener('iron-overlay-canceled',this._boundIronOverlayCanceledListener);this._detachOverlay();this.$.overlay.style.removeProperty('pointer-events');this.removeAttribute('closing');}/**
   * @event vaadin-overlay-closing
   * Fired when the overlay will be closed.
   *
   * @protected
   */_animatedClosing(){if(this.hasAttribute('opening')){this._flushAnimation('opening');}if(this._placeholder){this._exitModalState();// Use this.restoreFocusNode if specified, otherwise fallback to the node
// which was focused before opening the overlay.
const restoreFocusNode=this.restoreFocusNode||this.__restoreFocusNode;if(this.restoreFocusOnClose&&restoreFocusNode){// If the activeElement is `<body>` or inside the overlay,
// we are allowed to restore the focus. In all the other
// cases focus might have been moved elsewhere by another
// component or by the user interaction (e.g. click on a
// button outside the overlay).
const activeElement=this._getActiveElement();if(activeElement===document.body||this._deepContains(activeElement)){// Focusing the restoreFocusNode doesn't always work synchronously on Firefox and Safari
// (e.g. combo-box overlay close on outside click).
setTimeout(()=>restoreFocusNode.focus());}this.__restoreFocusNode=null;}this.setAttribute('closing','');this.dispatchEvent(new CustomEvent('vaadin-overlay-closing'));if(this._shouldAnimate()){this._enqueueAnimation('closing',()=>{this._finishClosing();});}else {this._finishClosing();}}}/** @protected */_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder);this._placeholder.parentNode.removeChild(this._placeholder);}/**
   * Returns all attached overlays in visual stacking order.
   * @private
   */static get __attachedInstances(){return Array.from(document.body.children).filter(el=>el instanceof Overlay&&!el.hasAttribute('closing')).sort((a,b)=>a.__zIndex-b.__zIndex||0);}/**
   * Returns true if this is the last one in the opened overlays stack
   * @return {boolean}
   * @protected
   */get _last(){return this===Overlay.__attachedInstances.pop();}/** @private */_modelessChanged(modeless){if(!modeless){if(this.opened){this._addGlobalListeners();this._enterModalState();}}else {this._removeGlobalListeners();this._exitModalState();}}/** @protected */_addGlobalListeners(){document.addEventListener('mousedown',this._boundMouseDownListener);document.addEventListener('mouseup',this._boundMouseUpListener);// Firefox leaks click to document on contextmenu even if prevented
// https://bugzilla.mozilla.org/show_bug.cgi?id=990614
document.documentElement.addEventListener('click',this._boundOutsideClickListener,true);}/** @protected */_enterModalState(){if(document.body.style.pointerEvents!=='none'){// Set body pointer-events to 'none' to disable mouse interactions with
// other document nodes.
this._previousDocumentPointerEvents=document.body.style.pointerEvents;document.body.style.pointerEvents='none';}// Disable pointer events in other attached overlays
Overlay.__attachedInstances.forEach(el=>{if(el!==this){el.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents='none';}});}/** @protected */_removeGlobalListeners(){document.removeEventListener('mousedown',this._boundMouseDownListener);document.removeEventListener('mouseup',this._boundMouseUpListener);document.documentElement.removeEventListener('click',this._boundOutsideClickListener,true);}/** @protected */_exitModalState(){if(this._previousDocumentPointerEvents!==undefined){// Restore body pointer-events
document.body.style.pointerEvents=this._previousDocumentPointerEvents;delete this._previousDocumentPointerEvents;}// Restore pointer events in the previous overlay(s)
const instances=Overlay.__attachedInstances;let el;// Use instances.pop() to ensure the reverse order
while(el=instances.pop()){if(el===this){// Skip the current instance
continue;}el.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');if(!el.modeless){// Stop after the last modal
break;}}}/** @protected */_removeOldContent(){if(!this.content||!this._contentNodes){return;}this._observer.disconnect();this._contentNodes.forEach(node=>{if(node.parentNode===this.content){this.content.removeChild(node);}});if(this._originalContentPart){// Restore the original <div part="content">
this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content);this.$.content=this._originalContentPart;this._originalContentPart=undefined;}this._observer.connect();this._contentNodes=undefined;this.content=undefined;}/**
   * @param {!HTMLTemplateElement} template
   * @protected
   */_stampOverlayTemplate(template){this._removeOldContent();if(!template._Templatizer){template._Templatizer=templatize(template,this,{forwardHostProp(prop,value){if(this._instance){this._instance.forwardHostProp(prop,value);}}});}this._instance=new template._Templatizer({});this._contentNodes=Array.from(this._instance.root.childNodes);const templateRoot=template._templateRoot||(template._templateRoot=template.getRootNode());if(templateRoot!==document){if(!this.$.content.shadowRoot){this.$.content.attachShadow({mode:'open'});}let scopeCssText=Array.from(templateRoot.querySelectorAll('style')).reduce((result,style)=>result+style.textContent,'');// The overlay root’s :host styles should not apply inside the overlay
scopeCssText=scopeCssText.replace(/:host/g,':host-nomatch');if(scopeCssText){// Append a style to the content shadowRoot
const style=document.createElement('style');style.textContent=scopeCssText;this.$.content.shadowRoot.appendChild(style);this._contentNodes.unshift(style);}this.$.content.shadowRoot.appendChild(this._instance.root);this.content=this.$.content.shadowRoot;}else {this.appendChild(this._instance.root);this.content=this;}}/** @private */_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this.template=undefined;}else if(renderer!==oldRenderer){this.renderer=undefined;}}/** @private */ // eslint-disable-next-line max-params
_templateOrRendererChanged(template,renderer,owner,model,opened){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error('You should only use either a renderer or a template for overlay content');}const ownerOrModelChanged=this._oldOwner!==owner||this._oldModel!==model;this._oldModel=model;this._oldOwner=owner;const templateChanged=this._oldTemplate!==template;this._oldTemplate=template;const rendererChanged=this._oldRenderer!==renderer;this._oldRenderer=renderer;const openedChanged=this._oldOpened!==opened;this._oldOpened=opened;if(rendererChanged){this.content=this;this.content.innerHTML='';// Whenever a Lit-based renderer is used, it assigns a Lit part to the node it was rendered into.
// When clearing the rendered content, this part needs to be manually disposed of.
// Otherwise, using a Lit-based renderer on the same node will throw an exception or render nothing afterward.
delete this.content._$litPart$;}if(template&&templateChanged){this._stampOverlayTemplate(template);}else if(renderer&&(rendererChanged||openedChanged||ownerOrModelChanged)){if(opened){this.requestContentUpdate();}}}/**
   * @return {!Element}
   * @protected
   */_getActiveElement(){// Document.activeElement can be null
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
let active=document.activeElement||document.body;while(active.shadowRoot&&active.shadowRoot.activeElement){active=active.shadowRoot.activeElement;}return active;}/**
   * @param {!Node} node
   * @return {boolean}
   * @protected
   */_deepContains(node){if(this.contains(node)){return true;}let n=node;const doc=node.ownerDocument;// Walk from node to `this` or `document`
while(n&&n!==doc&&n!==this){n=n.parentNode||n.host;}return n===this;}/**
   * Brings the overlay as visually the frontmost one
   */bringToFront(){let zIndex='';const frontmost=Overlay.__attachedInstances.filter(o=>o!==this).pop();if(frontmost){const frontmostZIndex=frontmost.__zIndex;zIndex=frontmostZIndex+1;}this.style.zIndex=zIndex;this.__zIndex=zIndex||parseFloat(getComputedStyle(this).zIndex);}}customElements.define(Overlay.is,Overlay);

const loader=r`
  [part~='loader'] {
    height: 2px;
    background: var(--material-background-color)
      linear-gradient(
        90deg,
        transparent 0%,
        transparent 20%,
        var(--material-primary-color) 20%,
        var(--material-primary-color) 40%,
        transparent 40%,
        transparent 60%,
        var(--material-primary-color) 60%,
        var(--material-primary-color) 80%,
        transparent 80%,
        transparent 100%
      )
      0 0 / 400% 100% repeat-x;
    opacity: 0;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part='loader'] {
    animation: 3s linear infinite material-loader-progress, 0.3s 0.1s both material-loader-fade-in;
  }

  [part='loader']::before {
    content: '';
    display: block;
    height: 100%;
    opacity: 0.16;
    background: var(--material-primary-color);
  }

  @keyframes material-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes material-loader-progress {
    0% {
      background-position: 0 0;
      background-size: 300% 100%;
    }

    33% {
      background-position: -100% 0;
      background-size: 400% 100%;
    }

    67% {
      background-position: -200% 0;
      background-size: 250% 100%;
    }

    100% {
      background-position: -300% 0;
      background-size: 300% 100%;
    }
  }

  /* RTL specific styles */

  @keyframes material-loader-progress-rtl {
    0% {
      background-position: 100% 0;
      background-size: 300% 100%;
    }

    33% {
      background-position: 200% 0;
      background-size: 400% 100%;
    }

    67% {
      background-position: 300% 0;
      background-size: 250% 100%;
    }

    100% {
      background-position: 400% 0;
      background-size: 300% 100%;
    }
  }

  :host([loading][dir='rtl']) [part='loader'] {
    animation: 3s linear infinite material-loader-progress-rtl, 0.3s 0.1s both material-loader-fade-in;
  }
`;

const menuOverlay=overlay;registerStyles('',menuOverlay,{moduleId:'material-menu-overlay'});

const comboBoxOverlay=r`
  :host {
    --_vaadin-combo-box-items-container-border-width: 8px 0;
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  [part='overlay'] {
    position: relative;
    overflow: visible;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  [part='content'] {
    padding: 0;
  }

  [part~='loader'] {
    position: absolute;
    z-index: 1;
    top: -2px;
    left: 0;
    right: 0;
  }
`;registerStyles('vaadin-combo-box-overlay',[menuOverlay,comboBoxOverlay,loader],{moduleId:'material-combo-box-overlay'});

const template=document.createElement('template');template.innerHTML=`
  <style>
    @font-face {
      font-family: 'material-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAjAAAsAAAAADaAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAFZSk1xEY21hcAAAAYgAAACNAAACNOuCXH5nbHlmAAACGAAABDoAAAX4NWGBxmhlYWQAAAZUAAAAMAAAADZhSa2YaGhlYQAABoQAAAAeAAAAJBGxCLtobXR4AAAGpAAAABMAAABAjXoAAGxvY2EAAAa4AAAAIgAAACIKMAjcbWF4cAAABtwAAAAfAAAAIAEeAFRuYW1lAAAG/AAAATQAAAJe3l764XBvc3QAAAgwAAAAkAAAAMondETCeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYOS4wTiBgZWBga2WbQIDA2MAhGZpYChlymZgYGJgZWbACgLSXFMYHF4xvuJnv/CvgOEG+wXG6UBhRpAcAA0HDXt4nO2R2Q0DIQxEHwt7HzSSGlJQvlJkqqGJjYdJGbH0PPJgELKBEcjBIyiQ3iQUr3BT9zNb9wvP3lPkt3rfkZNy1KXnIXpLvDgxs7DGvZ2Dk4saxxP/OHr+/KqqCZo+08EgzUa7acVoym002lubDNLZIF0M0tUg3Yz22XaD9DD6XTsN0ssgrYb6BZEQJiUAAAB4nH1UXUgcVxS+Z2ZnZpeq7IT9CbTY2Z24o1m72+zPTB/UFSS2MWssTZRs6doqialmy27bPIghPzQttCxjfEhjfGhoUFLBQoVdKixSkofCEkurwQdBgw1NqeCWFrokVt3b3pnRqm3J/Nw598537v3Od869CBC5uFm2EZkRAgl4kQcOuFm1NJcv3R+kBVpQS/dNdzcilH9w80e0F+8EPsiDAjCkUv485SMIgqd8GxHT3dIc8UYUQnjefINLoGfR88RDDIt2F3lFdwXYeVslBF2BBgjzIR/QLt7FzZ7Kb+7Pn5LfkMnDNhrfP++wjexYnlx6Z9fPtTXGZnAyh5hbiEHIApwFJPpD/OYg5TdNqnAJbpFgiGXgWIbp13AgWQhxllFL49RJFcumVWKVxlWY2cI1buHIdE6gV1S4h2WVOsn0qziMw8Ta0iLBLKFnjPk0qDYrlyArluaIJnpD+UmXaSONbu38IO40Qn+9RPQxo/3oEFLIPG6ORRxrdTqQ0yEoMlJkq+RBkod2Sz6QPFalARRZcFaC02HlKoBjaVFLgemrmVwGr0aPHYuCPZOD4VwG7NG2tihezeRmRq8NPaiPROofDF2D5h373etU+VHcwJkJrJDN4b5cFhc0J7Blc3A9lwVbtG1t7T9+OKfbjK00jr89D1r4umZj9IqWcQtFTUMRivQKLoPinhifQ8LTYhTDwbDIB02TM//HxGB5RiuEp1NeP5DPkwQZ+pLa2GQr0D7kRY3ba/+z8C5lQ7qyAV1Zm6EswXKszelwOgKKrMghySN5TJOPlxfwVEcHHFlYhsLyAhzp6MBTC8uPe+KxtEeSPOlY/Lsds+e15qbqmprqpuaxbYOt6IrjicVFPBHv6opD++IitMe7Nir/7WqYtLDHWTeQieyrXssyN4sqUBWqQy8jVMWKgqaivE/RahBYu02PJRhQJFZ0a9zDIcUCcjikxyu6OUkOCloSWIoMBwNaoHYb+8v8I1wsruKRzro7FzGXNi+l12PV3oPD3aeTZ7uzZeWxaEttLZi68Q+yt0YbvZD69acnUPZHAc50Rr4vfYYvCm4d1Nna1wPv/zYClrdhLf3kQJr5ovts8nT3cI23OgMveFuisfLyUh4OpS5oowe9cuH13h6s/v45LsB7cIWt9ba0xlxo114j9QU80IIpyiytf0xNo11nko90SJiCnj3rdvREEFEbEPfm2eEEF8/+nLxqlHNdJFJHSnt0avTmw9rZmvHUucsDycRtn9/vu51IFpN9x/E31DTTnty7B0jh8V+e+zoQ2oJpHi/6TmhYjRalNZa3CLcqVGuw05XX+Gj3do5cAZ1VWC8x4MlRSI6Tq+6+3pGbmcErl+5FPj0/cPgVfY0BxmZUWqS+N1HqxSk8r2+2RxPpT1pfDQam+q0njl/+6IbB3qjBD1LvNB3GD3EKhqCIy9DfIQrMlQAAeJxjYGRgYABiYWGbw/H8Nl8ZuDkTgCIMNaobGhH0v0zO++wXgFwOBiaQKAAHHgoPeJxjYGRgYL/wr4CBgcuKAQg47zMwMqACAQBc2wOEAAB4nGNgYGDgTCAec1mh8gG9VgYDAAAAAAAAGAAwAGIAdgCKAJ4AwAEkATIBcAHcAlQCYgKwAvwAAHicY2BkYGAQYPBgYGEAASYg5gJCBob/YD4DABFeAXMAeJx9kL1uwjAUhU8gUJVIVaWqnRgsVepSEX5G1BkkRgb2EBwIcuLIMUi8QR+kT9CH6NgH6VP0xHiBAVtyvvvdc50oAB7xgwDNCvDgzma1cMfqzG3Ss+eQ/Oq5gwhjz136D889vGPhOcITDrwhCO9p+vj03GL+y3Ob/ttzSP713MEL/jx30Q/guYdV0Pcc4S0wRWKlyRM1yFNd1ku5PajkSl5WK2nqXJdiHI8uG3NZSkOzEeuTqI/bibWZyIwuxEyXViqlRWX0XqY23llbTYfDzPs41QUKJLCQMMhJCgM+U2iUqLGk3/JfKHbMzeSt3sr5mqapBf9/jNHNiTl96XrnzIZTa5x41jjyiya0FhnrjBnNuwRmbrZJK25NU7nenialj7FzUxWmGHJnV/nYvb34BzHZcLZ4nG2M0Q6CMBRDV2CIOhTf/Ak+am5XIdyw5QoS/l4W4ptN2uYkTVWmdt3VfzXIkKOARokDKhxxwhkGNS64osFNXaxIWFoflnGx4s2Oc0xQOcs0eivadeQGs+VHwtgyPaf6B9K/ukk7pjTj4IbKS4jpT9P2JTmtZDa3vn/bB5MvItu1FOJgfTnHVEp9AbKdMX4=) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --material-icons-arrow-downward: "\\ea01";
      --material-icons-arrow-upward: "\\ea02";
      --material-icons-calendar: "\\ea03";
      --material-icons-check: "\\ea04";
      --material-icons-chevron-left: "\\ea05";
      --material-icons-chevron-right: "\\ea06";
      --material-icons-clear: "\\ea07";
      --material-icons-clock: "\\ea08";
      --material-icons-dropdown: "\\ea09";
      --material-icons-error: "\\ea0a";
      --material-icons-eye: "\\ea0b";
      --material-icons-eye-disabled: "\\ea0c";
      --material-icons-play: "\\ea0d";
      --material-icons-reload: "\\ea0e";
      --material-icons-upload: "\\ea0f";
    }
  </style>
`;document.head.appendChild(template.content);

const item=r`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    min-height: 36px;
    padding: 8px 32px 8px 10px;
    overflow: hidden;
    font-family: var(--material-font-family);
    font-size: var(--material-small-font-size);
    line-height: 24px;
  }

  /* It's the list-box's responsibility to add the focus style */
  :host([focused]) {
    outline: none;
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_material-item-selected-icon-display, none);
    content: '';
    font-family: material-icons;
    font-size: 24px;
    line-height: 1;
    font-weight: 400;
    width: 24px;
    text-align: center;
    margin-right: 10px;
    color: var(--material-secondary-text-color);
    flex: none;
  }

  :host([selected]) [part='checkmark']::before {
    content: var(--material-icons-check);
  }

  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--material-secondary-background-color);
    }

    :host([focused]:not([disabled])) {
      background-color: var(--material-divider-color);
    }
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--material-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding: 8px 10px 8px 32px;
  }

  :host([dir='rtl']) [part='checkmark']::before {
    margin-right: 0;
    margin-left: 10px;
  }
`;registerStyles('vaadin-item',item,{moduleId:'material-item'});

const comboBoxItem=r`
  :host {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    padding: 4px 10px;
    --_material-item-selected-icon-display: block;
  }
`;registerStyles('vaadin-combo-box-item',[item,comboBoxItem],{moduleId:'material-combo-box-item'});

/**
 * An item element used by the `<vaadin-combo-box>` dropdown.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name   | Description
 * ------------|--------------
 * `checkmark` | The graphical checkmark shown for a selected item
 * `content`   | The element that wraps the item content
 *
 * The following state attributes are exposed for styling:
 *
 * Attribute    | Description
 * -------------|-------------
 * `selected`   | Set when the item is selected
 * `focused`    | Set when the item is focused
 *
 * See [Styling Components](https://vaadin.com/docs/latest/styling/custom-theme/styling-components) documentation.
 *
 * @mixes ThemableMixin
 * @mixes DirMixin
 * @private
 */class ComboBoxItem extends ThemableMixin(DirMixin(PolymerElement)){static get template(){return html`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `;}static get is(){return 'vaadin-combo-box-item';}static get properties(){return {/**
       * The index of the item
       */index:Number,/**
       * The item to render
       * @type {(String|Object)}
       */item:Object,/**
       * The text label corresponding to the item
       */label:String,/**
       * True when item is selected
       */selected:{type:Boolean,value:false,reflectToAttribute:true},/**
       * True when item is focused
       */focused:{type:Boolean,value:false,reflectToAttribute:true},/**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */renderer:Function,/**
       * Saved instance of a custom renderer function.
       */_oldRenderer:Function};}static get observers(){return ['__rendererOrItemChanged(renderer, index, item.*, selected, focused)','__updateLabel(label, renderer)'];}connectedCallback(){super.connectedCallback();this._comboBox=this.parentNode.comboBox;const hostDir=this._comboBox.getAttribute('dir');if(hostDir){this.setAttribute('dir',hostDir);}}/**
   * Requests an update for the content of the item.
   * While performing the update, it invokes the renderer passed in the `renderer` property.
   *
   * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
   */requestContentUpdate(){if(!this.renderer){return;}const model={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,model);}/** @private */__rendererOrItemChanged(renderer,index,item){if(item===undefined||index===undefined){return;}if(this._oldRenderer!==renderer){this.innerHTML='';// Whenever a Lit-based renderer is used, it assigns a Lit part to the node it was rendered into.
// When clearing the rendered content, this part needs to be manually disposed of.
// Otherwise, using a Lit-based renderer on the same node will throw an exception or render nothing afterward.
delete this._$litPart$;}if(renderer){this._oldRenderer=renderer;this.requestContentUpdate();}}/** @private */__updateLabel(label,renderer){if(renderer){return;}this.textContent=label;}}customElements.define(ComboBoxItem.is,ComboBoxItem);

/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * Returns an array of ancestor root nodes for the given node.
 *
 * A root node is either a document node or a document fragment node (Shadow Root).
 * The array is collected by a bottom-up DOM traversing that starts with the given node
 * and involves both the light DOM and ancestor shadow DOM trees.
 *
 * @param {Node} node
 * @return {Node[]}
 */function getAncestorRootNodes(node){const result=[];while(node){if(node.nodeType===Node.DOCUMENT_NODE){result.push(node);break;}if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE){result.push(node);node=node.host;continue;}if(node.assignedSlot){node=node.assignedSlot;continue;}node=node.parentNode;}return result;}

const PROP_NAMES_VERTICAL={start:'top',end:'bottom'};const PROP_NAMES_HORIZONTAL={start:'left',end:'right'};const targetResizeObserver=new ResizeObserver(entries=>{setTimeout(()=>{entries.forEach(entry=>{if(entry.target.__overlay){entry.target.__overlay._updatePosition();}});});});/**
 * @polymerMixin
 */const PositionMixin=superClass=>class PositionMixin extends superClass{static get properties(){return {/**
         * The element next to which this overlay should be aligned.
         * The position of the overlay relative to the positionTarget can be adjusted
         * with properties `horizontalAlign`, `verticalAlign`, `noHorizontalOverlap`
         * and `noVerticalOverlap`.
         */positionTarget:{type:Object,value:null},/**
         * When `positionTarget` is set, this property defines whether to align the overlay's
         * left or right side to the target element by default.
         * Possible values are `start` and `end`.
         * RTL is taken into account when interpreting the value.
         * The overlay is automatically flipped to the opposite side when it doesn't fit into
         * the default side defined by this property.
         *
         * @attr {start|end} horizontal-align
         */horizontalAlign:{type:String,value:'start'},/**
         * When `positionTarget` is set, this property defines whether to align the overlay's
         * top or bottom side to the target element by default.
         * Possible values are `top` and `bottom`.
         * The overlay is automatically flipped to the opposite side when it doesn't fit into
         * the default side defined by this property.
         *
         * @attr {top|bottom} vertical-align
         */verticalAlign:{type:String,value:'top'},/**
         * When `positionTarget` is set, this property defines whether the overlay should overlap
         * the target element in the x-axis, or be positioned right next to it.
         *
         * @attr {boolean} no-horizontal-overlap
         */noHorizontalOverlap:{type:Boolean,value:false},/**
         * When `positionTarget` is set, this property defines whether the overlay should overlap
         * the target element in the y-axis, or be positioned right above/below it.
         *
         * @attr {boolean} no-vertical-overlap
         */noVerticalOverlap:{type:Boolean,value:false}};}static get observers(){return ['__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap)','__overlayOpenedChanged(opened, positionTarget)'];}constructor(){super();this.__onScroll=this.__onScroll.bind(this);this._updatePosition=this._updatePosition.bind(this);}/** @protected */connectedCallback(){super.connectedCallback();if(this.opened){this.__addUpdatePositionEventListeners();}}/** @protected */disconnectedCallback(){super.disconnectedCallback();this.__removeUpdatePositionEventListeners();}/** @private */__addUpdatePositionEventListeners(){window.addEventListener('resize',this._updatePosition);this.__positionTargetAncestorRootNodes=getAncestorRootNodes(this.positionTarget);this.__positionTargetAncestorRootNodes.forEach(node=>{node.addEventListener('scroll',this.__onScroll,true);});}/** @private */__removeUpdatePositionEventListeners(){window.removeEventListener('resize',this._updatePosition);if(this.__positionTargetAncestorRootNodes){this.__positionTargetAncestorRootNodes.forEach(node=>{node.removeEventListener('scroll',this.__onScroll,true);});this.__positionTargetAncestorRootNodes=null;}}/** @private */__overlayOpenedChanged(opened,positionTarget){this.__removeUpdatePositionEventListeners();if(positionTarget){positionTarget.__overlay=null;targetResizeObserver.unobserve(positionTarget);if(opened){this.__addUpdatePositionEventListeners();positionTarget.__overlay=this;targetResizeObserver.observe(positionTarget);}}if(opened){const computedStyle=getComputedStyle(this);if(!this.__margins){this.__margins={};['top','bottom','left','right'].forEach(propName=>{this.__margins[propName]=parseInt(computedStyle[propName],10);});}this.setAttribute('dir',computedStyle.direction);this._updatePosition();// Schedule another position update (to cover virtual keyboard opening for example)
requestAnimationFrame(()=>this._updatePosition());}}get __isRTL(){return this.getAttribute('dir')==='rtl';}__positionSettingsChanged(){this._updatePosition();}/** @private */__onScroll(e){// If the scroll event occurred inside the overlay, ignore it.
if(!this.contains(e.target)){this._updatePosition();}}_updatePosition(){if(!this.positionTarget||!this.opened){return;}const targetRect=this.positionTarget.getBoundingClientRect();// Detect the desired alignment and update the layout accordingly
const shouldAlignStartVertically=this.__shouldAlignStartVertically(targetRect);this.style.justifyContent=shouldAlignStartVertically?'flex-start':'flex-end';const shouldAlignStartHorizontally=this.__shouldAlignStartHorizontally(targetRect,this.__isRTL);const flexStart=!this.__isRTL&&shouldAlignStartHorizontally||this.__isRTL&&!shouldAlignStartHorizontally;this.style.alignItems=flexStart?'flex-start':'flex-end';// Get the overlay rect after possible overlay alignment changes
const overlayRect=this.getBoundingClientRect();// Obtain vertical positioning properties
const verticalProps=this.__calculatePositionInOneDimension(targetRect,overlayRect,this.noVerticalOverlap,PROP_NAMES_VERTICAL,this,shouldAlignStartVertically);// Obtain horizontal positioning properties
const horizontalProps=this.__calculatePositionInOneDimension(targetRect,overlayRect,this.noHorizontalOverlap,PROP_NAMES_HORIZONTAL,this,shouldAlignStartHorizontally);// Apply the positioning properties to the overlay
Object.assign(this.style,verticalProps,horizontalProps);this.toggleAttribute('bottom-aligned',!shouldAlignStartVertically);this.toggleAttribute('top-aligned',shouldAlignStartVertically);this.toggleAttribute('end-aligned',!flexStart);this.toggleAttribute('start-aligned',flexStart);}__shouldAlignStartHorizontally(targetRect,rtl){// Using previous size to fix a case where window resize may cause the overlay to be squeezed
// smaller than its current space before the fit-calculations.
const contentWidth=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const viewportWidth=Math.min(window.innerWidth,document.documentElement.clientWidth);const defaultAlignLeft=!rtl&&this.horizontalAlign==='start'||rtl&&this.horizontalAlign==='end';return this.__shouldAlignStart(targetRect,contentWidth,viewportWidth,this.__margins,defaultAlignLeft,this.noHorizontalOverlap,PROP_NAMES_HORIZONTAL);}__shouldAlignStartVertically(targetRect){// Using previous size to fix a case where window resize may cause the overlay to be squeezed
// smaller than its current space before the fit-calculations.
const contentHeight=Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const viewportHeight=Math.min(window.innerHeight,document.documentElement.clientHeight);const defaultAlignTop=this.verticalAlign==='top';return this.__shouldAlignStart(targetRect,contentHeight,viewportHeight,this.__margins,defaultAlignTop,this.noVerticalOverlap,PROP_NAMES_VERTICAL);}// eslint-disable-next-line max-params
__shouldAlignStart(targetRect,contentSize,viewportSize,margins,defaultAlignStart,noOverlap,propNames){const spaceForStartAlignment=viewportSize-targetRect[noOverlap?propNames.end:propNames.start]-margins[propNames.end];const spaceForEndAlignment=targetRect[noOverlap?propNames.start:propNames.end]-margins[propNames.start];const spaceForDefaultAlignment=defaultAlignStart?spaceForStartAlignment:spaceForEndAlignment;const spaceForOtherAlignment=defaultAlignStart?spaceForEndAlignment:spaceForStartAlignment;const shouldGoToDefaultSide=spaceForDefaultAlignment>spaceForOtherAlignment||spaceForDefaultAlignment>contentSize;return defaultAlignStart===shouldGoToDefaultSide;}/**
     * Returns an adjusted value after resizing the browser window,
     * to avoid wrong calculations when e.g. previously set `bottom`
     * CSS property value is larger than the updated viewport height.
     * See https://github.com/vaadin/web-components/issues/4604
     */__adjustBottomProperty(cssPropNameToSet,propNames,currentValue){let adjustedProp;if(cssPropNameToSet===propNames.end){// Adjust horizontally
if(propNames.end===PROP_NAMES_VERTICAL.end){const viewportHeight=Math.min(window.innerHeight,document.documentElement.clientHeight);if(currentValue>viewportHeight&&this.__oldViewportHeight){const heightDiff=this.__oldViewportHeight-viewportHeight;adjustedProp=currentValue-heightDiff;}this.__oldViewportHeight=viewportHeight;}// Adjust vertically
if(propNames.end===PROP_NAMES_HORIZONTAL.end){const viewportWidth=Math.min(window.innerWidth,document.documentElement.clientWidth);if(currentValue>viewportWidth&&this.__oldViewportWidth){const widthDiff=this.__oldViewportWidth-viewportWidth;adjustedProp=currentValue-widthDiff;}this.__oldViewportWidth=viewportWidth;}}return adjustedProp;}/**
     * Returns an object with CSS position properties to set,
     * e.g. { top: "100px" }
     */ // eslint-disable-next-line max-params
__calculatePositionInOneDimension(targetRect,overlayRect,noOverlap,propNames,overlay,shouldAlignStart){const cssPropNameToSet=shouldAlignStart?propNames.start:propNames.end;const cssPropNameToClear=shouldAlignStart?propNames.end:propNames.start;const currentValue=parseFloat(overlay.style[cssPropNameToSet]||getComputedStyle(overlay)[cssPropNameToSet]);const adjustedValue=this.__adjustBottomProperty(cssPropNameToSet,propNames,currentValue);const diff=overlayRect[shouldAlignStart?propNames.start:propNames.end]-targetRect[noOverlap===shouldAlignStart?propNames.end:propNames.start];const valueToSet=adjustedValue?`${adjustedValue}px`:`${currentValue+diff*(shouldAlignStart?-1:1)}px`;return {[cssPropNameToSet]:valueToSet,[cssPropNameToClear]:''};}};

registerStyles('vaadin-combo-box-overlay',r`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:'vaadin-combo-box-overlay-styles'});let memoizedTemplate;/**
 * An element used internally by `<vaadin-combo-box>`. Not intended to be used separately.
 *
 * @extends Overlay
 * @private
 */class ComboBoxOverlay extends PositionMixin(Overlay){static get is(){return 'vaadin-combo-box-overlay';}static get template(){if(!memoizedTemplate){memoizedTemplate=super.template.cloneNode(true);memoizedTemplate.content.querySelector('[part~="overlay"]').removeAttribute('tabindex');}return memoizedTemplate;}static get observers(){return ['_setOverlayWidth(positionTarget, opened)'];}connectedCallback(){super.connectedCallback();const comboBox=this._comboBox;const hostDir=comboBox&&comboBox.getAttribute('dir');if(hostDir){this.setAttribute('dir',hostDir);}}ready(){super.ready();const loader=document.createElement('div');loader.setAttribute('part','loader');const content=this.shadowRoot.querySelector('[part~="content"]');content.parentNode.insertBefore(loader,content);}_outsideClickListener(event){const eventPath=event.composedPath();if(!eventPath.includes(this.positionTarget)&&!eventPath.includes(this)){this.close();}}_setOverlayWidth(positionTarget,opened){if(positionTarget&&opened){const propPrefix=this.localName;this.style.setProperty(`--_${propPrefix}-default-width`,`${positionTarget.clientWidth}px`);const customWidth=getComputedStyle(this._comboBox).getPropertyValue(`--${propPrefix}-width`);if(customWidth===''){this.style.removeProperty(`--${propPrefix}-width`);}else {this.style.setProperty(`--${propPrefix}-width`,customWidth);}this._updatePosition();}}}customElements.define(ComboBoxOverlay.is,ComboBoxOverlay);

/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let uniqueId=0;/**
 * Returns a unique integer id.
 *
 * @return {number}
 */function generateUniqueId(){// eslint-disable-next-line no-plusplus
return uniqueId++;}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */ /**
 * @fileoverview
 *
 * This module provides a number of strategies for enqueuing asynchronous
 * tasks. Each sub-module provides a standard `run(fn)` interface that returns a
 * handle, and a `cancel(handle)` interface for canceling async tasks before
 * they run.
 *
 * @summary Module that provides a number of strategies for enqueuing
 * asynchronous tasks.
 */ // Microtask implemented using Mutation Observer
let microtaskCurrHandle=0;let microtaskLastHandle=0;const microtaskCallbacks=[];let microtaskNodeContent=0;let microtaskScheduled=false;const microtaskNode=document.createTextNode('');new window.MutationObserver(microtaskFlush).observe(microtaskNode,{characterData:true});function microtaskFlush(){microtaskScheduled=false;const len=microtaskCallbacks.length;for(let i=0;i<len;i++){const cb=microtaskCallbacks[i];if(cb){try{cb();}catch(e){setTimeout(()=>{throw e;});}}}microtaskCallbacks.splice(0,len);microtaskLastHandle+=len;}/**
 * Async interface wrapper around `setTimeout`.
 *
 * @namespace
 * @summary Async interface wrapper around `setTimeout`.
 */const timeOut={/**
   * Returns a sub-module with the async interface providing the provided
   * delay.
   *
   * @memberof timeOut
   * @param {number=} delay Time to wait before calling callbacks in ms
   * @return {!AsyncInterface} An async timeout interface
   */after(delay){return {run(fn){return window.setTimeout(fn,delay);},cancel(handle){window.clearTimeout(handle);}};},/**
   * Enqueues a function called in the next task.
   *
   * @memberof timeOut
   * @param {!Function} fn Callback to run
   * @param {number=} delay Delay in milliseconds
   * @return {number} Handle used for canceling task
   */run(fn,delay){return window.setTimeout(fn,delay);},/**
   * Cancels a previously enqueued `timeOut` callback.
   *
   * @memberof timeOut
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){window.clearTimeout(handle);}};/**
 * Async interface wrapper around `requestAnimationFrame`.
 *
 * @namespace
 * @summary Async interface wrapper around `requestAnimationFrame`.
 */const animationFrame={/**
   * Enqueues a function called at `requestAnimationFrame` timing.
   *
   * @memberof animationFrame
   * @param {function(number):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run(fn){return window.requestAnimationFrame(fn);},/**
   * Cancels a previously enqueued `animationFrame` callback.
   *
   * @memberof animationFrame
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){window.cancelAnimationFrame(handle);}};/**
 * Async interface wrapper around `requestIdleCallback`.  Falls back to
 * `setTimeout` on browsers that do not support `requestIdleCallback`.
 *
 * @namespace
 * @summary Async interface wrapper around `requestIdleCallback`.
 */const idlePeriod={/**
   * Enqueues a function called at `requestIdleCallback` timing.
   *
   * @memberof idlePeriod
   * @param {function(!IdleDeadline):void} fn Callback to run
   * @return {number} Handle used for canceling task
   */run(fn){return window.requestIdleCallback?window.requestIdleCallback(fn):window.setTimeout(fn,16);},/**
   * Cancels a previously enqueued `idlePeriod` callback.
   *
   * @memberof idlePeriod
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){if(window.cancelIdleCallback){window.cancelIdleCallback(handle);}else {window.clearTimeout(handle);}}};/**
 * Async interface for enqueuing callbacks that run at microtask timing.
 *
 * Note that microtask timing is achieved via a single `MutationObserver`,
 * and thus callbacks enqueued with this API will all run in a single
 * batch, and not interleaved with other microtasks such as promises.
 * Promises are avoided as an implementation choice for the time being
 * due to Safari bugs that cause Promises to lack microtask guarantees.
 *
 * @namespace
 * @summary Async interface for enqueuing callbacks that run at microtask
 *   timing.
 */const microTask={/**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */run(callback){if(!microtaskScheduled){microtaskScheduled=true;microtaskNode.textContent=microtaskNodeContent;microtaskNodeContent+=1;}microtaskCallbacks.push(callback);const result=microtaskCurrHandle;microtaskCurrHandle+=1;return result;},/**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */cancel(handle){const idx=handle-microtaskLastHandle;if(idx>=0){if(!microtaskCallbacks[idx]){throw new Error(`invalid async handle: ${handle}`);}microtaskCallbacks[idx]=null;}}};

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/ /**
 * @summary Collapse multiple callbacks into one invocation after a timer.
 */class Debouncer{/**
   * Creates a debouncer if no debouncer is passed as a parameter
   * or it cancels an active debouncer otherwise. The following
   * example shows how a debouncer can be called multiple times within a
   * microtask and "debounced" such that the provided callback function is
   * called once. Add this method to a custom element:
   *
   * ```js
   * import {microTask} from '@vaadin/component-base/src/async.js';
   * import {Debouncer} from '@vaadin/component-base/src/debounce.js';
   * // ...
   *
   * _debounceWork() {
   *   this._debounceJob = Debouncer.debounce(this._debounceJob,
   *       microTask, () => this._doWork());
   * }
   * ```
   *
   * If the `_debounceWork` method is called multiple times within the same
   * microtask, the `_doWork` function will be called only once at the next
   * microtask checkpoint.
   *
   * Note: In testing it is often convenient to avoid asynchrony. To accomplish
   * this with a debouncer, you can use `enqueueDebouncer` and
   * `flush`. For example, extend the above example by adding
   * `enqueueDebouncer(this._debounceJob)` at the end of the
   * `_debounceWork` method. Then in a test, call `flush` to ensure
   * the debouncer has completed.
   *
   * @param {Debouncer?} debouncer Debouncer object.
   * @param {!AsyncInterface} asyncModule Object with Async interface
   * @param {function()} callback Callback to run.
   * @return {!Debouncer} Returns a debouncer object.
   */static debounce(debouncer,asyncModule,callback){if(debouncer instanceof Debouncer){// Cancel the async callback, but leave in debouncerQueue if it was
// enqueued, to maintain 1.x flush order
debouncer._cancelAsync();}else {debouncer=new Debouncer();}debouncer.setConfig(asyncModule,callback);return debouncer;}constructor(){this._asyncModule=null;this._callback=null;this._timer=null;}/**
   * Sets the scheduler; that is, a module with the Async interface,
   * a callback and optional arguments to be passed to the run function
   * from the async module.
   *
   * @param {!AsyncInterface} asyncModule Object with Async interface.
   * @param {function()} callback Callback to run.
   * @return {void}
   */setConfig(asyncModule,callback){this._asyncModule=asyncModule;this._callback=callback;this._timer=this._asyncModule.run(()=>{this._timer=null;debouncerQueue.delete(this);this._callback();});}/**
   * Cancels an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */cancel(){if(this.isActive()){this._cancelAsync();// Canceling a debouncer removes its spot from the flush queue,
// so if a debouncer is manually canceled and re-debounced, it
// will reset its flush order (this is a very minor difference from 1.x)
// Re-debouncing via the `debounce` API retains the 1.x FIFO flush order
debouncerQueue.delete(this);}}/**
   * Cancels a debouncer's async callback.
   *
   * @return {void}
   */_cancelAsync(){if(this.isActive()){this._asyncModule.cancel(/** @type {number} */this._timer);this._timer=null;}}/**
   * Flushes an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */flush(){if(this.isActive()){this.cancel();this._callback();}}/**
   * Returns true if the debouncer is active.
   *
   * @return {boolean} True if active.
   */isActive(){return this._timer!=null;}}let debouncerQueue=new Set();/**
 * Adds a `Debouncer` to a list of globally flushable tasks.
 *
 * @param {!Debouncer} debouncer Debouncer to enqueue
 * @return {void}
 */function enqueueDebouncer(debouncer){debouncerQueue.add(debouncer);}/**
 * Flushes any enqueued debouncers
 *
 * @return {boolean} Returns whether any debouncers were flushed
 */function flushDebouncers(){const didFlush=Boolean(debouncerQueue.size);// If new debouncers are added while flushing, Set.forEach will ensure
// newly added ones are also flushed
debouncerQueue.forEach(debouncer=>{try{debouncer.flush();}catch(e){setTimeout(()=>{throw e;});}});return didFlush;}const flush=()=>{let debouncers;do{debouncers=flushDebouncers();}while(debouncers);};

const IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);const IOS_TOUCH_SCROLLING=IOS&&IOS[1]>=8;const DEFAULT_PHYSICAL_COUNT=3;/**
 * DO NOT EDIT THIS FILE!
 *
 * This file includes the iron-list scrolling engine copied from
 * https://github.com/PolymerElements/iron-list/blob/master/iron-list.js
 *
 * If something in the scrolling engine needs to be changed
 * for the virtualizer's purposes, override a function
 * in virtualizer-iron-list-adapter.js instead of changing it here.
 *
 * This will allow us to keep the iron-list code here as close to
 * the original as possible.
 */const ironList={/**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */_ratio:0.5,/**
   * The padding-top value for the list.
   */_scrollerPaddingTop:0,/**
   * This value is a cached value of `scrollTop` from the last `scroll` event.
   */_scrollPosition:0,/**
   * The sum of the heights of all the tiles in the DOM.
   */_physicalSize:0,/**
   * The average `offsetHeight` of the tiles observed till now.
   */_physicalAverage:0,/**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */_physicalAverageCount:0,/**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */_physicalTop:0,/**
   * The number of items in the list.
   */_virtualCount:0,/**
   * The estimated scroll height based on `_physicalAverage`
   */_estScrollHeight:0,/**
   * The scroll height of the dom node
   */_scrollHeight:0,/**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */_viewportHeight:0,/**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */_viewportWidth:0,/**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!HTMLElement>}
   */_physicalItems:null,/**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */_physicalSizes:null,/**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */_firstVisibleIndexVal:null,/**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */_lastVisibleIndexVal:null,/**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */_maxPages:2,/**
   * The cost of stamping a template in ms.
   */_templateCost:0,/**
   * The bottom of the physical content.
   */get _physicalBottom(){return this._physicalTop+this._physicalSize;},/**
   * The bottom of the scroll.
   */get _scrollBottom(){return this._scrollPosition+this._viewportHeight;},/**
   * The n-th item rendered in the last physical item.
   */get _virtualEnd(){return this._virtualStart+this._physicalCount-1;},/**
   * The height of the physical content that isn't on the screen.
   */get _hiddenContentSize(){return this._physicalSize-this._viewportHeight;},/**
   * The maximum scroll top value.
   */get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset;},/**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */get _maxVirtualStart(){const virtualCount=this._virtualCount;return Math.max(0,virtualCount-this._physicalCount);},get _virtualStart(){return this._virtualStartVal||0;},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);this._virtualStartVal=val;},get _physicalStart(){return this._physicalStartVal||0;},/**
   * The k-th tile that is at the top of the scrolling list.
   */set _physicalStart(val){val%=this._physicalCount;if(val<0){val=this._physicalCount+val;}this._physicalStartVal=val;},/**
   * The k-th tile that is at the bottom of the scrolling list.
   */get _physicalEnd(){return (this._physicalStart+this._physicalCount-1)%this._physicalCount;},get _physicalCount(){return this._physicalCountVal||0;},set _physicalCount(val){this._physicalCountVal=val;},/**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */get _optPhysicalSize(){return this._viewportHeight===0?Infinity:this._viewportHeight*this._maxPages;},/**
   * True if the current list is visible.
   */get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight);},/**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */get firstVisibleIndex(){let idx=this._firstVisibleIndexVal;if(idx==null){let physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems((pidx,vidx)=>{physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return vidx;}})||0;this._firstVisibleIndexVal=idx;}return idx;},/**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */get lastVisibleIndex(){let idx=this._lastVisibleIndexVal;if(idx==null){let physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems((pidx,vidx)=>{if(physicalOffset<this._scrollBottom){idx=vidx;}physicalOffset+=this._getPhysicalSizeIncrement(pidx);});this._lastVisibleIndexVal=idx;}return idx;},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset;},/**
   * Recycles the physical items when needed.
   */_scrollHandler(){const scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let delta=scrollTop-this._scrollPosition;const isScrollingDown=delta>=0;// Track the current scroll position.
this._scrollPosition=scrollTop;// Clear indexes for first and last visible indexes.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Random access.
if(Math.abs(delta)>this._physicalSize&&this._physicalSize>0){delta-=this._scrollOffset;const idxAdjustment=Math.round(delta/this._physicalAverage);this._virtualStart+=idxAdjustment;this._physicalStart+=idxAdjustment;// Estimate new physical offset based on the virtual start index.
// adjusts the physical start position to stay in sync with the clamped
// virtual start index. It's critical not to let this value be
// more than the scroll position however, since that would result in
// the physical items not covering the viewport, and leading to
// _increasePoolIfNeeded to run away creating items to try to fill it.
this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition);this._update();}else if(this._physicalCount>0){const reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart+=reusables.indexes.length;this._physicalStart+=reusables.indexes.length;}else {this._virtualStart-=reusables.indexes.length;this._physicalStart-=reusables.indexes.length;}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce('_increasePoolIfNeeded',this._increasePoolIfNeeded.bind(this,0),microTask);}},/**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */_getReusables(fromTop){let ith,offsetContent,physicalItemHeight;const idxs=[];const protectedOffsetContent=this._hiddenContentSize*this._ratio;const virtualStart=this._virtualStart;const virtualEnd=this._virtualEnd;const physicalCount=this._physicalCount;let top=this._physicalTop+this._scrollOffset;const bottom=this._physicalBottom+this._scrollOffset;// This may be called outside of a scrollHandler, so use last cached position
const scrollTop=this._scrollPosition;const scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;offsetContent=scrollTop-top;}else {ith=this._physicalEnd;offsetContent=bottom-scrollBottom;}// eslint-disable-next-line no-constant-condition
while(true){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent-=physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break;}if(fromTop){// Check that index is within the valid range.
if(virtualEnd+idxs.length+1>=this._virtualCount){break;}// Check that the index is not visible.
if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break;}idxs.push(ith);top+=physicalItemHeight;ith=(ith+1)%physicalCount;}else {// Check that index is within the valid range.
if(virtualStart-idxs.length<=0){break;}// Check that the index is not visible.
if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break;}idxs.push(ith);top-=physicalItemHeight;ith=ith===0?physicalCount-1:ith-1;}}return {indexes:idxs,physicalTop:top-this._scrollOffset};},/**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */_update(itemSet,movingUp){if(itemSet&&itemSet.length===0||this._physicalCount===0){return;}this._assignModels(itemSet);this._updateMetrics(itemSet);// Adjust offset after measuring.
if(movingUp){while(movingUp.length){const idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx);}}this._positionItems();this._updateScrollerSize();},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition;},/**
   * Increases the pool size.
   */_increasePoolIfNeeded(count){const nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);const delta=nextPhysicalCount-this._physicalCount;let nextIncrease=Math.round(this._physicalCount*0.5);if(delta<0){return;}if(delta>0){const ts=window.performance.now();// Concat arrays in place.
[].push.apply(this._physicalItems,this._createPool(delta));// Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
// support it.
for(let i=0;i<delta;i++){this._physicalSizes.push(0);}this._physicalCount+=delta;// Update the physical start if it needs to preserve the model of the
// focused item. In this situation, the focused item is currently rendered
// and its model would have changed after increasing the pool if the
// physical start remained unchanged.
if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart+=delta;}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(this._physicalCount*0.5);}if(this._virtualEnd>=this._virtualCount-1||nextIncrease===0);else if(!this._isClientFull()){this._debounce('_increasePoolIfNeeded',this._increasePoolIfNeeded.bind(this,nextIncrease),microTask);}else if(this._physicalSize<this._optPhysicalSize){// Yield and increase the pool during idle time until the physical size is
// optimal.
this._debounce('_increasePoolIfNeeded',this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),idlePeriod);}},/**
   * Renders the a new list.
   */_render(){if(!this.isAttached||!this._isVisible){return;}if(this._physicalCount!==0){const reusables=this._getReusables(true);this._physicalTop=reusables.physicalTop;this._virtualStart+=reusables.indexes.length;this._physicalStart+=reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0);}else if(this._virtualCount>0){// Initial render
this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);}},/**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */_itemsChanged(change){if(change.path==='items'){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0);}this._debounce('_render',this._render,animationFrame);}},/**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */_iterateItems(fn,itemSet){let pidx,vidx,rtn,i;if(arguments.length===2&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if((rtn=fn.call(this,pidx,vidx))!=null){return rtn;}}}else {pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn;}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn;}}}},/**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */_computeVidx(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart);}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx;},/**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */_updateMetrics(itemSet){// Make sure we distributed all the physical items
// so we can measure them.
flush();let newPhysicalSize=0;let oldPhysicalSize=0;const prevAvgCount=this._physicalAverageCount;const prevPhysicalAvg=this._physicalAverage;// eslint-disable-next-line @typescript-eslint/no-unused-vars
this._iterateItems((pidx,vidx)=>{oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0;},itemSet);this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;// Update the average if it measured something.
if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount);}},/**
   * Updates the position of the physical items.
   */_positionItems(){this._adjustScrollPosition();let y=this._physicalTop;this._iterateItems(pidx=>{this.translate3d(0,`${y}px`,0,this._physicalItems[pidx]);y+=this._physicalSizes[pidx];});},_getPhysicalSizeIncrement(pidx){return this._physicalSizes[pidx];},/**
   * Adjusts the scroll position when it was overestimated.
   */_adjustScrollPosition(){const deltaHeight=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);// Note: the delta can be positive or negative.
if(deltaHeight!==0){this._physicalTop-=deltaHeight;// This may be called outside of a scrollHandler, so use last cached position
const scrollTop=this._scrollPosition;// Juking scroll position during interial scrolling on iOS is no bueno
if(!IOS_TOUCH_SCROLLING&&scrollTop>0){this._resetScrollPosition(scrollTop-deltaHeight);}}},/**
   * Sets the position of the scroll.
   */_resetScrollPosition(pos){if(this.scrollTarget&&pos>=0){this._scrollTop=pos;this._scrollPosition=this._scrollTop;}},/**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */_updateScrollerSize(forceUpdate){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;forceUpdate=forceUpdate||this._scrollHeight===0;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;// Amortize height adjustment, so it won't trigger large repaints too often.
if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=`${this._estScrollHeight}px`;this._scrollHeight=this._estScrollHeight;}},/**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */scrollToIndex(idx){if(typeof idx!=='number'||idx<0||idx>this.items.length-1){return;}flush();// Items should have been rendered prior scrolling to an index.
if(this._physicalCount===0){return;}idx=this._clamp(idx,0,this._virtualCount-1);// Update the virtual start only when needed.
if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=idx-1;}this._assignModels();this._updateMetrics();// Estimate new physical offset.
this._physicalTop=this._virtualStart*this._physicalAverage;let currentTopItem=this._physicalStart;let currentVirtualItem=this._virtualStart;let targetOffsetTop=0;const hiddenContentSize=this._hiddenContentSize;// Scroll to the item as much as we can.
while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop+=this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem+=1;}this._updateScrollerSize(true);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);// Clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;},/**
   * Reset the physical average and the average count.
   */_resetAverage(){this._physicalAverage=0;this._physicalAverageCount=0;},/**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */_resizeHandler(){this._debounce('_render',()=>{// Clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(this._isVisible){this.updateViewportBoundaries();// Reinstall the scroll event listener.
this.toggleScrollListener(true);this._resetAverage();this._render();}else {// Uninstall the scroll event listener.
this.toggleScrollListener(false);}},animationFrame);},_isIndexRendered(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd;},_getPhysicalIndex(vidx){return (this._physicalStart+(vidx-this._virtualStart))%this._physicalCount;},_clamp(v,min,max){return Math.min(max,Math.max(min,v));},_debounce(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name]);}};

// When the size is larger than MAX_VIRTUAL_COUNT _vidxOffset is used
const MAX_VIRTUAL_COUNT=100000;const OFFSET_ADJUST_MIN_THRESHOLD=1000;class IronListAdapter{constructor({createElements,updateElement,scrollTarget,scrollContainer,elementsContainer,reorderElements}){this.isAttached=true;this._vidxOffset=0;this.createElements=createElements;this.updateElement=updateElement;this.scrollTarget=scrollTarget;this.scrollContainer=scrollContainer;this.elementsContainer=elementsContainer||scrollContainer;this.reorderElements=reorderElements;// Iron-list uses this value to determine how many pages of elements to render
this._maxPages=1.3;// Placeholder height (used for sizing elements that have intrinsic 0 height after update)
this.__placeholderHeight=200;// A queue of 10 previous element heights
this.__elementHeightQueue=Array(10);this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100};this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler());if(getComputedStyle(this.scrollTarget).overflow==='visible'){this.scrollTarget.style.overflow='auto';}if(getComputedStyle(this.scrollContainer).position==='static'){this.scrollContainer.style.position='relative';}this.__resizeObserver.observe(this.scrollTarget);this.scrollTarget.addEventListener('scroll',()=>this._scrollHandler());this._scrollLineHeight=this._getScrollLineHeight();this.scrollTarget.addEventListener('wheel',e=>this.__onWheel(e));if(this.reorderElements){// Reordering the physical elements cancels the user's grab of the scroll bar handle on Safari.
// Need to defer reordering until the user lets go of the scroll bar handle.
this.scrollTarget.addEventListener('mousedown',()=>{this.__mouseDown=true;});this.scrollTarget.addEventListener('mouseup',()=>{this.__mouseDown=false;if(this.__pendingReorder){this.__reorderElements();}});}}get scrollOffset(){return 0;}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset;}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset;}scrollToIndex(index){if(typeof index!=='number'||isNaN(index)||this.size===0||!this.scrollTarget.offsetHeight){return;}index=this._clamp(index,0,this.size-1);const visibleElementCount=this.__getVisibleElements().length;let targetVirtualIndex=Math.floor(index/this.size*this._virtualCount);if(this._virtualCount-targetVirtualIndex<visibleElementCount){targetVirtualIndex=this._virtualCount-(this.size-index);this._vidxOffset=this.size-this._virtualCount;}else if(targetVirtualIndex<visibleElementCount){if(index<OFFSET_ADJUST_MIN_THRESHOLD){targetVirtualIndex=index;this._vidxOffset=0;}else {targetVirtualIndex=OFFSET_ADJUST_MIN_THRESHOLD;this._vidxOffset=index-targetVirtualIndex;}}else {this._vidxOffset=index-targetVirtualIndex;}this.__skipNextVirtualIndexAdjust=true;super.scrollToIndex(targetVirtualIndex);if(this.adjustedFirstVisibleIndex!==index&&this._scrollTop<this._maxScrollTop&&!this.grid){// Workaround an iron-list issue by manually adjusting the scroll position
this._scrollTop-=this.__getIndexScrollOffset(index)||0;}this._scrollHandler();}flush(){// The scroll target is hidden.
if(this.scrollTarget.offsetHeight===0){return;}this._resizeHandler();flush();this._scrollHandler();if(this.__fixInvalidItemPositioningDebouncer){this.__fixInvalidItemPositioningDebouncer.flush();}if(this.__scrollReorderDebouncer){this.__scrollReorderDebouncer.flush();}if(this.__debouncerWheelAnimationFrame){this.__debouncerWheelAnimationFrame.flush();}}update(startIndex=0,endIndex=this.size-1){this.__getVisibleElements().forEach(el=>{if(el.__virtualIndex>=startIndex&&el.__virtualIndex<=endIndex){this.__updateElement(el,el.__virtualIndex,true);}});}__updateElement(el,index,forceSameIndexUpdates){// Clean up temporary placeholder sizing
if(el.style.paddingTop){el.style.paddingTop='';}if(!this.__preventElementUpdates&&(el.__lastUpdatedIndex!==index||forceSameIndexUpdates)){this.updateElement(el,index);el.__lastUpdatedIndex=index;}const elementHeight=el.offsetHeight;if(elementHeight===0){// If the elements have 0 height after update (for example due to lazy rendering),
// it results in iron-list requesting to create an unlimited count of elements.
// Assign a temporary placeholder sizing to elements that would otherwise end up having
// no height.
el.style.paddingTop=`${this.__placeholderHeight}px`;// Manually schedule the resize handler to make sure the placeholder padding is
// cleared in case the resize observer never triggers.
requestAnimationFrame(()=>this._resizeHandler());}else {// Add element height to the queue
this.__elementHeightQueue.push(elementHeight);this.__elementHeightQueue.shift();// Calcualte new placeholder height based on the average of the defined values in the
// element height queue
const filteredHeights=this.__elementHeightQueue.filter(h=>h!==undefined);this.__placeholderHeight=Math.round(filteredHeights.reduce((a,b)=>a+b,0)/filteredHeights.length);}}__getIndexScrollOffset(index){const element=this.__getVisibleElements().find(el=>el.__virtualIndex===index);return element?this.scrollTarget.getBoundingClientRect().top-element.getBoundingClientRect().top:undefined;}get size(){return this.__size;}set size(size){if(size===this.size){return;}// Cancel active debouncers
if(this.__fixInvalidItemPositioningDebouncer){this.__fixInvalidItemPositioningDebouncer.cancel();}if(this._debouncers&&this._debouncers._increasePoolIfNeeded){// Avoid creating unnecessary elements on the following flush()
this._debouncers._increasePoolIfNeeded.cancel();}// Prevent element update while the scroll position is being restored
this.__preventElementUpdates=true;// Record the scroll position before changing the size
let fvi;// First visible index
let fviOffsetBefore;// Scroll offset of the first visible index
if(size>0){fvi=this.adjustedFirstVisibleIndex;fviOffsetBefore=this.__getIndexScrollOffset(fvi);}// Change the size
this.__size=size;this._itemsChanged({path:'items'});flush();// Try to restore the scroll position if the new size is larger than 0
if(size>0){fvi=Math.min(fvi,size-1);this.scrollToIndex(fvi);const fviOffsetAfter=this.__getIndexScrollOffset(fvi);if(fviOffsetBefore!==undefined&&fviOffsetAfter!==undefined){this._scrollTop+=fviOffsetBefore-fviOffsetAfter;}}if(!this.elementsContainer.children.length){requestAnimationFrame(()=>this._resizeHandler());}this.__preventElementUpdates=false;// Schedule and flush a resize handler
this._resizeHandler();flush();}/** @private */get _scrollTop(){return this.scrollTarget.scrollTop;}/** @private */set _scrollTop(top){this.scrollTarget.scrollTop=top;}/** @private */get items(){return {length:Math.min(this.size,MAX_VIRTUAL_COUNT)};}/** @private */get offsetHeight(){return this.scrollTarget.offsetHeight;}/** @private */get $(){return {items:this.scrollContainer};}/** @private */updateViewportBoundaries(){const styles=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles['padding-top'],10);this._isRTL=Boolean(styles.direction==='rtl');this._viewportWidth=this.elementsContainer.offsetWidth;this._viewportHeight=this.scrollTarget.offsetHeight;this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight;if(this.grid){this._updateGridMetrics();}}/** @private */setAttribute(){}/** @private */_createPool(size){const physicalItems=this.createElements(size);const fragment=document.createDocumentFragment();physicalItems.forEach(el=>{el.style.position='absolute';fragment.appendChild(el);this.__resizeObserver.observe(el);});this.elementsContainer.appendChild(fragment);return physicalItems;}/** @private */_assignModels(itemSet){this._iterateItems((pidx,vidx)=>{const el=this._physicalItems[pidx];el.hidden=vidx>=this.size;if(!el.hidden){el.__virtualIndex=vidx+(this._vidxOffset||0);this.__updateElement(el,el.__virtualIndex);}else {delete el.__lastUpdatedIndex;}},itemSet);}/** @private */_isClientFull(){// Workaround an issue in iron-list that can cause it to freeze on fast scroll
setTimeout(()=>{this.__clientFull=true;});return this.__clientFull||super._isClientFull();}/** @private */translate3d(_x,y,_z,el){el.style.transform=`translateY(${y})`;}/** @private */toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const delta=this.scrollTarget.scrollTop-this._scrollPosition;super._scrollHandler();if(this._physicalCount!==0){const isScrollingDown=delta>=0;const reusables=this._getReusables(!isScrollingDown);if(reusables.indexes.length){// After running super._scrollHandler, fix internal properties to workaround an iron-list issue.
// See https://github.com/vaadin/web-components/issues/1691
this._physicalTop=reusables.physicalTop;if(isScrollingDown){this._virtualStart-=reusables.indexes.length;this._physicalStart-=reusables.indexes.length;}else {this._virtualStart+=reusables.indexes.length;this._physicalStart+=reusables.indexes.length;}this._resizeHandler();}}if(delta){// There was a change in scroll top. Schedule a check for invalid item positioning.
this.__fixInvalidItemPositioningDebouncer=Debouncer.debounce(this.__fixInvalidItemPositioningDebouncer,timeOut.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning());}if(this.reorderElements){this.__scrollReorderDebouncer=Debouncer.debounce(this.__scrollReorderDebouncer,timeOut.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements());}this.__previousScrollTop=this._scrollTop;// If the first visible index is not 0 when scrolled to the top,
// scroll to index 0 to fix the issue.
if(this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(delta)>0){this.scrollToIndex(0);}}/**
   * Work around an iron-list issue with invalid item positioning.
   * See https://github.com/vaadin/flow-components/issues/4306
   * @private
   */__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected){return;}// Check if the first physical item element is below the top of the viewport
const physicalTopBelowTop=this._physicalTop>this._scrollTop;// Check if the last physical item element is above the bottom of the viewport
const physicalBottomAboveBottom=this._physicalBottom<this._scrollBottom;// Check if the first index is visible
const firstIndexVisible=this.adjustedFirstVisibleIndex===0;// Check if the last index is visible
const lastIndexVisible=this.adjustedLastVisibleIndex===this.size-1;if(physicalTopBelowTop&&!firstIndexVisible||physicalBottomAboveBottom&&!lastIndexVisible){// Invalid state! Try to recover.
const isScrollingDown=physicalBottomAboveBottom;// Set the "_ratio" property temporarily to 0 to make iron-list's _getReusables
// place all the free physical items on one side of the viewport.
const originalRatio=this._ratio;this._ratio=0;// Fake a scroll change to make _scrollHandler place the physical items
// on the desired side.
this._scrollPosition=this._scrollTop+(isScrollingDown?-1:1);this._scrollHandler();// Restore the original "_ratio" value.
this._ratio=originalRatio;}}/** @private */__onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY)){return;}let deltaY=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE){// Scrolling by "lines of text" instead of pixels
deltaY*=this._scrollLineHeight;}else if(e.deltaMode===WheelEvent.DOM_DELTA_PAGE){// Scrolling by "pages" instead of pixels
deltaY*=this._scrollPageHeight;}this._deltaYAcc=this._deltaYAcc||0;if(this._wheelAnimationFrame){// Accumulate wheel delta while a frame is being processed
this._deltaYAcc+=deltaY;e.preventDefault();return;}deltaY+=this._deltaYAcc;this._deltaYAcc=0;this._wheelAnimationFrame=true;this.__debouncerWheelAnimationFrame=Debouncer.debounce(this.__debouncerWheelAnimationFrame,animationFrame,()=>{this._wheelAnimationFrame=false;});const momentum=Math.abs(e.deltaX)+Math.abs(deltaY);if(this._canScroll(this.scrollTarget,e.deltaX,deltaY)){e.preventDefault();this.scrollTarget.scrollTop+=deltaY;this.scrollTarget.scrollLeft+=e.deltaX;this._hasResidualMomentum=true;this._ignoreNewWheel=true;this._debouncerIgnoreNewWheel=Debouncer.debounce(this._debouncerIgnoreNewWheel,timeOut.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=false;});}else if(this._hasResidualMomentum&&momentum<=this._previousMomentum||this._ignoreNewWheel){e.preventDefault();}else if(momentum>this._previousMomentum){this._hasResidualMomentum=false;}this._previousMomentum=momentum;}/**
   * Determines if the element has an ancestor that handles the scroll delta prior to this
   *
   * @private
   */_hasScrolledAncestor(el,deltaX,deltaY){if(el===this.scrollTarget||el===this.scrollTarget.getRootNode().host){return false;}else if(this._canScroll(el,deltaX,deltaY)&&['auto','scroll'].indexOf(getComputedStyle(el).overflow)!==-1){return true;}else if(el!==this&&el.parentElement){return this._hasScrolledAncestor(el.parentElement,deltaX,deltaY);}}_canScroll(el,deltaX,deltaY){return deltaY>0&&el.scrollTop<el.scrollHeight-el.offsetHeight||deltaY<0&&el.scrollTop>0||deltaX>0&&el.scrollLeft<el.scrollWidth-el.offsetWidth||deltaX<0&&el.scrollLeft>0;}/**
   * @returns {Number|undefined} - The browser's default font-size in pixels
   * @private
   */_getScrollLineHeight(){const el=document.createElement('div');el.style.fontSize='initial';el.style.display='none';document.body.appendChild(el);const fontSize=window.getComputedStyle(el).fontSize;document.body.removeChild(el);return fontSize?window.parseInt(fontSize):undefined;}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(element=>!element.hidden);}/** @private */__reorderElements(){if(this.__mouseDown){this.__pendingReorder=true;return;}this.__pendingReorder=false;const adjustedVirtualStart=this._virtualStart+(this._vidxOffset||0);// Which row to use as a target?
const visibleElements=this.__getVisibleElements();const elementWithFocus=visibleElements.find(element=>element.contains(this.elementsContainer.getRootNode().activeElement)||element.contains(this.scrollTarget.getRootNode().activeElement));const targetElement=elementWithFocus||visibleElements[0];if(!targetElement){// All elements are hidden, don't reorder
return;}// Where the target row should be?
const targetPhysicalIndex=targetElement.__virtualIndex-adjustedVirtualStart;// Reodrer the DOM elements to keep the target row at the target physical index
const delta=visibleElements.indexOf(targetElement)-targetPhysicalIndex;if(delta>0){for(let i=0;i<delta;i++){this.elementsContainer.appendChild(visibleElements[i]);}}else if(delta<0){for(let i=visibleElements.length+delta;i<visibleElements.length;i++){this.elementsContainer.insertBefore(visibleElements[i],visibleElements[0]);}}// Due to a rendering bug, reordering the rows can make parts of the scroll target disappear
// on Safari when using sticky positioning in case the scroll target is inside a flexbox.
// This issue manifests with grid (the header can disappear if grid is used inside a flexbox)
if(isSafari){const{transform}=this.scrollTarget.style;this.scrollTarget.style.transform='translateZ(0)';setTimeout(()=>{this.scrollTarget.style.transform=transform;});}}/** @private */_adjustVirtualIndexOffset(delta){if(this._virtualCount>=this.size){this._vidxOffset=0;}else if(this.__skipNextVirtualIndexAdjust){this.__skipNextVirtualIndexAdjust=false;}else if(Math.abs(delta)>10000){// Process a large scroll position change
const scale=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight);const offset=scale*this.size;this._vidxOffset=Math.round(offset-scale*this._virtualCount);}else {// Make sure user can always swipe/wheel scroll to the start and end
const oldOffset=this._vidxOffset;const threshold=OFFSET_ADJUST_MIN_THRESHOLD;const maxShift=100;// Near start
if(this._scrollTop===0){this._vidxOffset=0;if(oldOffset!==this._vidxOffset){super.scrollToIndex(0);}}else if(this.firstVisibleIndex<threshold&&this._vidxOffset>0){this._vidxOffset-=Math.min(this._vidxOffset,maxShift);super.scrollToIndex(this.firstVisibleIndex+(oldOffset-this._vidxOffset));}// Near end
const maxOffset=this.size-this._virtualCount;if(this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0){this._vidxOffset=maxOffset;if(oldOffset!==this._vidxOffset){super.scrollToIndex(this._virtualCount-1);}}else if(this.firstVisibleIndex>this._virtualCount-threshold&&this._vidxOffset<maxOffset){this._vidxOffset+=Math.min(maxOffset-this._vidxOffset,maxShift);super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-oldOffset));}}}}Object.setPrototypeOf(IronListAdapter.prototype,ironList);

class Virtualizer{/**
   * @typedef {Object} VirtualizerConfig
   * @property {Function} createElements Function that returns the given number of new elements
   * @property {Function} updateElement Function that updates the element at a specific index
   * @property {HTMLElement} scrollTarget Reference to the scrolling element
   * @property {HTMLElement} scrollContainer Reference to a wrapper for the item elements (or a slot) inside the scrollTarget
   * @property {HTMLElement | undefined} elementsContainer Reference to the container in which the item elements are placed, defaults to scrollContainer
   * @property {boolean | undefined} reorderElements Determines whether the physical item elements should be kept in order in the DOM
   * @param {VirtualizerConfig} config Configuration for the virtualizer
   */constructor(config){this.__adapter=new IronListAdapter(config);}/**
   * The size of the virtualizer
   * @return {number | undefined} The size of the virtualizer
   */get size(){return this.__adapter.size;}/**
   * The size of the virtualizer
   * @param {number} size The size of the virtualizer
   */set size(size){this.__adapter.size=size;}/**
   * Scroll to a specific index in the virtual list
   *
   * @method scrollToIndex
   * @param {number} index The index of the item
   */scrollToIndex(index){this.__adapter.scrollToIndex(index);}/**
   * Requests the virtualizer to re-render the item elements on an index range, if currently in the DOM
   *
   * @method update
   * @param {number | undefined} startIndex The start index of the range
   * @param {number | undefined} endIndex The end index of the range
   */update(startIndex=0,endIndex=this.size-1){this.__adapter.update(startIndex,endIndex);}/**
   * Flushes active asynchronous tasks so that the component and the DOM end up in a stable state
   *
   * @method update
   * @param {number | undefined} startIndex The start index of the range
   * @param {number | undefined} endIndex The end index of the range
   */flush(){this.__adapter.flush();}/**
   * Gets the index of the first visible item in the viewport.
   *
   * @return {number}
   */get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex;}/**
   * Gets the index of the last visible item in the viewport.
   *
   * @return {number}
   */get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex;}}

/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /*
 * Placeholder object class representing items being loaded.
 *
 * @private
 */const ComboBoxPlaceholder=class ComboBoxPlaceholder{toString(){return '';}};

/**
 * Element for internal use only.
 *
 * @extends HTMLElement
 * @private
 */class ComboBoxScroller extends PolymerElement{static get is(){return 'vaadin-combo-box-scroller';}static get template(){return html`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `;}static get properties(){return {/**
       * A full set of items to filter the visible options from.
       * Set to an empty array when combo-box is not opened.
       */items:{type:Array,observer:'__itemsChanged'},/**
       * Index of an item that has focus outline and is scrolled into view.
       * The actual focus still remains in the input field.
       */focusedIndex:{type:Number,observer:'__focusedIndexChanged'},/**
       * Set to true while combo-box fetches new page from the data provider.
       */loading:{type:Boolean,observer:'__loadingChanged'},/**
       * Whether the combo-box is currently opened or not. If set to false,
       * calling `scrollIntoView` does not have any effect.
       */opened:{type:Boolean,observer:'__openedChanged'},/**
       * The selected item from the `items` array.
       */selectedItem:{type:Object,observer:'__selectedItemChanged'},/**
       * Path for the id of the item, used to detect whether the item is selected.
       */itemIdPath:{type:String},/**
       * Reference to the combo-box, used by the item elements.
       */comboBox:{type:Object},/**
       * Function used to set a label for every combo-box item.
       */getItemLabel:{type:Object},/**
       * Function used to render the content of every combo-box item.
       */renderer:{type:Object,observer:'__rendererChanged'},/**
       * Used to propagate the `theme` attribute from the host element.
       */theme:{type:String}};}constructor(){super();this.__boundOnItemClick=this.__onItemClick.bind(this);}__openedChanged(opened){if(opened){this.requestContentUpdate();}}/** @protected */ready(){super.ready();// Ensure every instance has unique ID
this.id=`${this.localName}-${generateUniqueId()}`;// Allow extensions to customize tag name for the items
this.__hostTagName=this.constructor.is.replace('-scroller','');this.setAttribute('role','listbox');this.addEventListener('click',e=>e.stopPropagation());this.__patchWheelOverScrolling();this.__virtualizer=new Virtualizer({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector});}requestContentUpdate(){if(this.__virtualizer){this.__virtualizer.update();}}scrollIntoView(index){if(!(this.opened&&index>=0)){return;}const visibleItemsCount=this._visibleItemsCount();let targetIndex=index;if(index>this.__virtualizer.lastVisibleIndex-1){// Index is below the bottom, scrolling down. Make the item appear at the bottom.
// First scroll to target (will be at the top of the scroller) to make sure it's rendered.
this.__virtualizer.scrollToIndex(index);// Then calculate the index for the following scroll (to get the target to bottom of the scroller).
targetIndex=index-visibleItemsCount+1;}else if(index>this.__virtualizer.firstVisibleIndex){// The item is already visible, scrolling is unnecessary per se. But we need to trigger iron-list to set
// the correct scrollTop on the scrollTarget. Scrolling to firstVisibleIndex.
targetIndex=this.__virtualizer.firstVisibleIndex;}this.__virtualizer.scrollToIndex(Math.max(0,targetIndex));// Sometimes the item is partly below the bottom edge, detect and adjust.
const lastPhysicalItem=[...this.children].find(el=>!el.hidden&&el.index===this.__virtualizer.lastVisibleIndex);if(!lastPhysicalItem||index!==lastPhysicalItem.index){return;}const lastPhysicalItemRect=lastPhysicalItem.getBoundingClientRect();const scrollerRect=this.getBoundingClientRect();const scrollTopAdjust=lastPhysicalItemRect.bottom-scrollerRect.bottom+this._viewportTotalPaddingBottom;if(scrollTopAdjust>0){this.scrollTop+=scrollTopAdjust;}}/** @private */__getAriaRole(itemIndex){return itemIndex!==undefined?'option':false;}/** @private */__getAriaSelected(focusedIndex,itemIndex){return this.__isItemFocused(focusedIndex,itemIndex).toString();}/** @private */__isItemFocused(focusedIndex,itemIndex){return !this.loading&&focusedIndex===itemIndex;}/** @private */__isItemSelected(item,selectedItem,itemIdPath){if(item instanceof ComboBoxPlaceholder){return false;}else if(itemIdPath&&item!==undefined&&selectedItem!==undefined){return this.get(itemIdPath,item)===this.get(itemIdPath,selectedItem);}return item===selectedItem;}/** @private */__itemsChanged(items){if(this.__virtualizer&&items){this.__virtualizer.size=items.length;this.__virtualizer.flush();this.requestContentUpdate();}}/** @private */__loadingChanged(){this.requestContentUpdate();}/** @private */__selectedItemChanged(){this.requestContentUpdate();}/** @private */__focusedIndexChanged(index,oldIndex){if(index!==oldIndex){this.requestContentUpdate();}// Do not jump back to the previously focused item while loading
// when requesting next page from the data provider on scroll.
if(index>=0&&!this.loading){this.scrollIntoView(index);}}/** @private */__rendererChanged(renderer,oldRenderer){if(renderer||oldRenderer){this.requestContentUpdate();}}/** @private */__createElements(count){return [...Array(count)].map(()=>{const item=document.createElement(`${this.__hostTagName}-item`);item.addEventListener('click',this.__boundOnItemClick);// Negative tabindex prevents the item content from being focused.
item.tabIndex='-1';item.style.width='100%';return item;});}/** @private */__updateElement(el,index){const item=this.items[index];const focusedIndex=this.focusedIndex;el.setProperties({item,index,label:this.getItemLabel(item),selected:this.__isItemSelected(item,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(focusedIndex,index)});el.id=`${this.__hostTagName}-item-${index}`;el.setAttribute('role',this.__getAriaRole(index));el.setAttribute('aria-selected',this.__getAriaSelected(focusedIndex,index));el.setAttribute('aria-posinset',index+1);el.setAttribute('aria-setsize',this.items.length);if(this.theme){el.setAttribute('theme',this.theme);}else {el.removeAttribute('theme');}if(item instanceof ComboBoxPlaceholder){this.__requestItemByIndex(index);}}/** @private */__onItemClick(e){this.dispatchEvent(new CustomEvent('selection-changed',{detail:{item:e.currentTarget.item}}));}/**
   * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
   * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
   * scrolling the parent similarly to touch scrolling.
   */__patchWheelOverScrolling(){this.$.selector.addEventListener('wheel',e=>{const scrolledToTop=this.scrollTop===0;const scrolledToBottom=this.scrollHeight-this.scrollTop-this.clientHeight<=1;if(scrolledToTop&&e.deltaY<0){e.preventDefault();}else if(scrolledToBottom&&e.deltaY>0){e.preventDefault();}});}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===undefined){const itemsStyle=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[itemsStyle.paddingBottom,itemsStyle.borderBottomWidth].map(v=>{return parseInt(v,10);}).reduce((sum,v)=>{return sum+v;});}return this._cachedViewportTotalPaddingBottom;}/**
   * Dispatches an `index-requested` event for the given index to notify
   * the data provider that it should start loading the page containing the requested index.
   *
   * The event is dispatched asynchronously to prevent an immediate page request and therefore
   * a possible infinite recursion in case the data provider implements page request cancelation logic
   * by invoking data provider page callbacks with an empty array.
   * The infinite recursion may occur otherwise since invoking a data provider page callback with an empty array
   * triggers a synchronous scroller update and, if the callback corresponds to the currently visible page,
   * the scroller will synchronously request the page again which may lead to looping in the end.
   * That was the case for the Flow counterpart:
   * https://github.com/vaadin/flow-components/issues/3553#issuecomment-1239344828
   */__requestItemByIndex(index){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent('index-requested',{detail:{index,currentScrollerPos:this._oldScrollerPosition}}));});}/** @private */_visibleItemsCount(){// Ensure items are positioned
this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex);const hasItems=this.__virtualizer.size>0;return hasItems?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0;}}customElements.define(ComboBoxScroller.is,ComboBoxScroller);

/**
 * A mixin to provide required state and validation logic.
 *
 * @polymerMixin
 */const ValidateMixin=dedupingMixin(superclass=>class ValidateMixinClass extends superclass{static get properties(){return {/**
           * Set to true when the field is invalid.
           */invalid:{type:Boolean,reflectToAttribute:true,notify:true,value:false},/**
           * Specifies that the user must fill in a value.
           */required:{type:Boolean,reflectToAttribute:true}};}/**
       * Validates the field and sets the `invalid` property based on the result.
       *
       * The method fires a `validated` event with the result of the validation.
       *
       * @return {boolean} True if the value is valid.
       */validate(){const isValid=this.checkValidity();this._setInvalid(!isValid);this.dispatchEvent(new CustomEvent('validated',{detail:{valid:isValid}}));return isValid;}/**
       * Returns true if the field value satisfies all constraints (if any).
       *
       * @return {boolean}
       */checkValidity(){return !this.required||!!this.value;}/**
       * @param {boolean} invalid
       * @protected
       */_setInvalid(invalid){if(this._shouldSetInvalid(invalid)){this.invalid=invalid;}}/**
       * Override this method to define whether the given `invalid` state should be set.
       *
       * @param {boolean} _invalid
       * @return {boolean}
       * @protected
       */_shouldSetInvalid(_invalid){return true;}/**
       * Fired whenever the field is validated.
       *
       * @event validated
       * @param {Object} detail
       * @param {boolean} detail.valid the result of the validation.
       */});

/**
 * @polymerMixin
 */const ComboBoxDataProviderMixin=superClass=>class DataProviderMixin extends superClass{static get properties(){return {/**
         * Number of items fetched at a time from the dataprovider.
         * @attr {number} page-size
         * @type {number}
         */pageSize:{type:Number,value:50,observer:'_pageSizeChanged'},/**
         * Total number of items.
         * @type {number | undefined}
         */size:{type:Number,observer:'_sizeChanged'},/**
         * Function that provides items lazily. Receives arguments `params`, `callback`
         *
         * `params.page` Requested page index
         *
         * `params.pageSize` Current page size
         *
         * `params.filter` Currently applied filter
         *
         * `callback(items, size)` Callback function with arguments:
         *   - `items` Current page of items
         *   - `size` Total number of items.
         * @type {ComboBoxDataProvider | undefined}
         */dataProvider:{type:Object,observer:'_dataProviderChanged'},/** @private */_pendingRequests:{value:()=>{return {};}},/** @private */__placeHolder:{value:new ComboBoxPlaceholder()},/** @private */__previousDataProviderFilter:{type:String}};}static get observers(){return ['_dataProviderFilterChanged(filter)','_warnDataProviderValue(dataProvider, value)','_ensureFirstPage(opened)'];}/** @protected */ready(){super.ready();this._scroller.addEventListener('index-requested',e=>{const index=e.detail.index;const currentScrollerPos=e.detail.currentScrollerPos;const allowedIndexRange=Math.floor(this.pageSize*1.5);// Ignores the indexes, which are being re-sent during scrolling reset,
// if the corresponding page is around the current scroller position.
// Otherwise, there might be a last pages duplicates, which cause the
// loading indicator hanging and blank items
if(this._shouldSkipIndex(index,allowedIndexRange,currentScrollerPos)){return;}if(index!==undefined){const page=this._getPageForIndex(index);if(this._shouldLoadPage(page)){this._loadPage(page);}}});}/** @private */_dataProviderFilterChanged(filter){if(this.__previousDataProviderFilter===undefined&&filter===''){this.__previousDataProviderFilter=filter;return;}if(this.__previousDataProviderFilter!==filter){this.__previousDataProviderFilter=filter;this._pendingRequests={};// Immediately mark as loading if this refresh leads to re-fetching pages
// This prevents some issues with the properties below triggering
// observers that also rely on the loading state
this.loading=this._shouldFetchData();// Reset size and internal loading state
this.size=undefined;this.clearCache();}}/** @private */_shouldFetchData(){if(!this.dataProvider){return false;}return this.opened||this.filter&&this.filter.length;}/** @private */_ensureFirstPage(opened){if(opened&&this._shouldLoadPage(0)){this._loadPage(0);}}/** @private */_shouldSkipIndex(index,allowedIndexRange,currentScrollerPos){return currentScrollerPos!==0&&index>=currentScrollerPos-allowedIndexRange&&index<=currentScrollerPos+allowedIndexRange;}/** @private */_shouldLoadPage(page){if(!this.filteredItems||this._forceNextRequest){this._forceNextRequest=false;return true;}const loadedItem=this.filteredItems[page*this.pageSize];if(loadedItem!==undefined){return loadedItem instanceof ComboBoxPlaceholder;}return this.size===undefined;}/** @private */_loadPage(page){// Make sure same page isn't requested multiple times.
if(this._pendingRequests[page]||!this.dataProvider){return;}const params={page,pageSize:this.pageSize,filter:this.filter};const callback=(items,size)=>{if(this._pendingRequests[page]!==callback){return;}const filteredItems=this.filteredItems?[...this.filteredItems]:[];filteredItems.splice(params.page*params.pageSize,items.length,...items);this.filteredItems=filteredItems;if(!this.opened&&!this._isInputFocused()){this._commitValue();}if(size!==undefined){this.size=size;}delete this._pendingRequests[page];if(Object.keys(this._pendingRequests).length===0){this.loading=false;}};this._pendingRequests[page]=callback;// Set the `loading` flag only after marking the request as pending
// to prevent the same page from getting requested multiple times
// as a result of `__loadingChanged` in the scroller which requests
// a virtualizer update which in turn may trigger a data provider page request.
this.loading=true;this.dataProvider(params,callback);}/** @private */_getPageForIndex(index){return Math.floor(index/this.pageSize);}/**
     * Clears the cached pages and reloads data from dataprovider when needed.
     */clearCache(){if(!this.dataProvider){return;}this._pendingRequests={};const filteredItems=[];for(let i=0;i<(this.size||0);i++){filteredItems.push(this.__placeHolder);}this.filteredItems=filteredItems;if(this._shouldFetchData()){this._forceNextRequest=false;this._loadPage(0);}else {this._forceNextRequest=true;}}/** @private */_sizeChanged(size=0){const filteredItems=(this.filteredItems||[]).slice(0,size);for(let i=0;i<size;i++){filteredItems[i]=filteredItems[i]!==undefined?filteredItems[i]:this.__placeHolder;}this.filteredItems=filteredItems;// Cleans up the redundant pending requests for pages > size
// Refers to https://github.com/vaadin/vaadin-flow-components/issues/229
this._flushPendingRequests(size);}/** @private */_pageSizeChanged(pageSize,oldPageSize){if(Math.floor(pageSize)!==pageSize||pageSize<1){this.pageSize=oldPageSize;throw new Error('`pageSize` value must be an integer > 0');}this.clearCache();}/** @private */_dataProviderChanged(dataProvider,oldDataProvider){this._ensureItemsOrDataProvider(()=>{this.dataProvider=oldDataProvider;});this.clearCache();}/** @private */_ensureItemsOrDataProvider(restoreOldValueCallback){if(this.items!==undefined&&this.dataProvider!==undefined){restoreOldValueCallback();throw new Error('Using `items` and `dataProvider` together is not supported');}else if(this.dataProvider&&!this.filteredItems){this.filteredItems=[];}}/** @private */_warnDataProviderValue(dataProvider,value){if(dataProvider&&value!==''&&(this.selectedItem===undefined||this.selectedItem===null)){const valueIndex=this.__getItemIndexByValue(this.filteredItems,value);if(valueIndex<0||!this._getItemLabel(this.filteredItems[valueIndex])){console.warn('Warning: unable to determine the label for the provided `value`. '+'Nothing to display in the text field. This usually happens when '+'setting an initial `value` before any items are returned from '+'the `dataProvider` callback. Consider setting `selectedItem` '+'instead of `value`');}}}/**
     * This method cleans up the page callbacks which refers to the
     * non-existing pages, i.e. which item indexes are greater than the
     * changed size.
     * This case is basically happens when:
     * 1. Users scroll fast to the bottom and combo box generates the
     * redundant page request/callback
     * 2. Server side uses undefined size lazy loading and suddenly reaches
     * the exact size which is on the range edge
     * (for default page size = 50, it will be 100, 200, 300, ...).
     * @param size the new size of items
     * @private
     */_flushPendingRequests(size){if(this._pendingRequests){const lastPage=Math.ceil(size/this.pageSize);const pendingRequestsKeys=Object.keys(this._pendingRequests);for(let reqIdx=0;reqIdx<pendingRequestsKeys.length;reqIdx++){const page=parseInt(pendingRequestsKeys[reqIdx]);if(page>=lastPage){this._pendingRequests[page]([],size);}}}}};

/**
 * A mixin to provide disabled property for field components.
 *
 * @polymerMixin
 */const DisabledMixin=dedupingMixin(superclass=>class DisabledMixinClass extends superclass{static get properties(){return {/**
           * If true, the user cannot interact with this element.
           */disabled:{type:Boolean,value:false,observer:'_disabledChanged',reflectToAttribute:true}};}/**
       * @param {boolean} disabled
       * @protected
       */_disabledChanged(disabled){this._setAriaDisabled(disabled);}/**
       * @param {boolean} disabled
       * @protected
       */_setAriaDisabled(disabled){if(disabled){this.setAttribute('aria-disabled','true');}else {this.removeAttribute('aria-disabled');}}/**
       * Overrides the default element `click` method in order to prevent
       * firing the `click` event when the element is disabled.
       * @protected
       * @override
       */click(){if(!this.disabled){super.click();}}});

/**
 * A mixin that manages keyboard handling.
 * The mixin subscribes to the keyboard events while an actual implementation
 * for the event handlers is left to the client (a component or another mixin).
 *
 * @polymerMixin
 */const KeyboardMixin=dedupingMixin(superclass=>class KeyboardMixinClass extends superclass{/** @protected */ready(){super.ready();this.addEventListener('keydown',event=>{this._onKeyDown(event);});this.addEventListener('keyup',event=>{this._onKeyUp(event);});}/**
       * A handler for the `keydown` event. By default, it calls
       * separate methods for handling "Enter" and "Escape" keys.
       * Override the method to implement your own behavior.
       *
       * @param {KeyboardEvent} event
       * @protected
       */_onKeyDown(event){switch(event.key){case'Enter':this._onEnter(event);break;case'Escape':this._onEscape(event);break;}}/**
       * A handler for the `keyup` event. By default, it does nothing.
       * Override the method to implement your own behavior.
       *
       * @param {KeyboardEvent} _event
       * @protected
       */_onKeyUp(_event){// To be implemented.
}/**
       * A handler for the "Enter" key. By default, it does nothing.
       * Override the method to implement your own behavior.
       *
       * @param {KeyboardEvent} _event
       * @protected
       */_onEnter(_event){// To be implemented.
}/**
       * A handler for the "Escape" key. By default, it does nothing.
       * Override the method to implement your own behavior.
       *
       * @param {KeyboardEvent} _event
       * @protected
       */_onEscape(_event){// To be implemented.
}});

/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * Passes the component to the template renderer callback if the template renderer is imported.
 * Otherwise, if there is a template, it warns that the template renderer needs to be imported.
 *
 * @param {HTMLElement} component
 */function processTemplates(component){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(component);return;}if(component.querySelector('template')){console.warn(`WARNING: <template> inside <${component.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`);}}

/**
 * A mixin to store the reference to an input element
 * and add input and change event listeners to it.
 *
 * @polymerMixin
 */const InputMixin=dedupingMixin(superclass=>class InputMixinClass extends superclass{static get properties(){return {/**
           * A reference to the input element controlled by the mixin.
           * Any component implementing this mixin is expected to provide it
           * by using `this._setInputElement(input)` Polymer API.
           *
           * A typical case is using `InputController` that does this automatically.
           * However, the input element does not have to always be native <input>:
           * as an example, <vaadin-combo-box-light> accepts other components.
           *
           * @protected
           * @type {!HTMLElement}
           */inputElement:{type:Object,readOnly:true,observer:'_inputElementChanged'},/**
           * String used to define input type.
           * @protected
           */type:{type:String,readOnly:true},/**
           * The value of the field.
           */value:{type:String,value:'',observer:'_valueChanged',notify:true},/**
           * When true, the input element has a non-empty value entered by the user.
           * @protected
           */_hasInputValue:{type:Boolean,value:false,observer:'_hasInputValueChanged'}};}constructor(){super();this._boundOnInput=this.__onInput.bind(this);this._boundOnChange=this._onChange.bind(this);}/**
       * Clear the value of the field.
       */clear(){this.value='';}/**
       * Add event listeners to the input element instance.
       * Override this method to add custom listeners.
       * @param {!HTMLElement} input
       * @protected
       */_addInputListeners(input){input.addEventListener('input',this._boundOnInput);input.addEventListener('change',this._boundOnChange);}/**
       * Remove event listeners from the input element instance.
       * @param {!HTMLElement} input
       * @protected
       */_removeInputListeners(input){input.removeEventListener('input',this._boundOnInput);input.removeEventListener('change',this._boundOnChange);}/**
       * A method to forward the value property set on the field
       * programmatically back to the input element value.
       * Override this method to perform additional checks,
       * for example to skip this in certain conditions.
       * @param {string} value
       * @protected
       */_forwardInputValue(value){// Value might be set before an input element is initialized.
// This case should be handled separately by a component that
// implements this mixin, for example in `connectedCallback`.
if(!this.inputElement){return;}if(value!=null){this.inputElement.value=value;}else {this.inputElement.value='';}}/**
       * @param {HTMLElement | undefined} input
       * @param {HTMLElement | undefined} oldInput
       * @protected
       */_inputElementChanged(input,oldInput){if(input){this._addInputListeners(input);}else if(oldInput){this._removeInputListeners(oldInput);}}/**
       * Observer to notify about the change of private property.
       *
       * @private
       */_hasInputValueChanged(hasValue,oldHasValue){if(hasValue||oldHasValue){this.dispatchEvent(new CustomEvent('has-input-value-changed'));}}/**
       * An input event listener used to update `_hasInputValue` property.
       * Do not override this method.
       *
       * @param {Event} event
       * @private
       */__onInput(event){this._setHasInputValue(event);this._onInput(event);}/**
       * An input event listener used to update the field value.
       *
       * @param {Event} event
       * @protected
       */_onInput(event){// In the case a custom web component is passed as `inputElement`,
// the actual native input element, on which the event occurred,
// can be inside shadow trees.
const target=event.composedPath()[0];// Ignore fake input events e.g. used by clear button.
this.__userInput=event.isTrusted;this.value=target.value;this.__userInput=false;}/**
       * A change event listener.
       * Override this method with an actual implementation.
       * @param {Event} _event
       * @protected
       */_onChange(_event){}/**
       * Toggle the has-value attribute based on the value property.
       *
       * @param {boolean} hasValue
       * @protected
       */_toggleHasValue(hasValue){this.toggleAttribute('has-value',hasValue);}/**
       * Observer called when a value property changes.
       * @param {string | undefined} newVal
       * @param {string | undefined} oldVal
       * @protected
       */_valueChanged(newVal,oldVal){this._toggleHasValue(this._hasValue);// Setting initial value to empty string, do nothing.
if(newVal===''&&oldVal===undefined){return;}// Value is set by the user, no need to sync it back to input.
if(this.__userInput){return;}// Setting a value programmatically, sync it to input element.
this._forwardInputValue(newVal);}/**
       * Indicates whether the value is different from the default one.
       * Override if the `value` property has a type other than `string`.
       *
       * @protected
       */get _hasValue(){return this.value!=null&&this.value!=='';}/**
       * Sets the `_hasInputValue` property based on the `input` event.
       *
       * @param {InputEvent} event
       * @protected
       */_setHasInputValue(event){// In the case a custom web component is passed as `inputElement`,
// the actual native input element, on which the event occurred,
// can be inside shadow trees.
const target=event.composedPath()[0];this._hasInputValue=target.value.length>0;}});

/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */ /**
 * A controller which prevents the virtual keyboard from showing up on mobile devices
 * when the field's overlay is closed.
 */class VirtualKeyboardController{/**
   * @param {{ inputElement?: HTMLElement; opened: boolean } & HTMLElement} host
   */constructor(host){this.host=host;host.addEventListener('opened-changed',()=>{if(!host.opened){// Prevent opening the virtual keyboard when the input gets re-focused on dropdown close
this.__setVirtualKeyboardEnabled(false);}});// Re-enable virtual keyboard on blur, so it gets opened when the field is focused again
host.addEventListener('blur',()=>this.__setVirtualKeyboardEnabled(true));// Re-enable the virtual keyboard whenever the field is touched
host.addEventListener('touchstart',()=>this.__setVirtualKeyboardEnabled(true));}/** @private */__setVirtualKeyboardEnabled(value){if(this.host.inputElement){this.host.inputElement.inputMode=value?'':'none';}}}

/**
 * Checks if the value is supported as an item value in this control.
 *
 * @param {unknown} value
 * @return {boolean}
 */function isValidValue(value){return value!==undefined&&value!==null;}/**
 * Returns the index of the first item that satisfies the provided testing function
 * ignoring placeholder items.
 *
 * @param {Array<ComboBoxItem | string>} items
 * @param {Function} callback
 * @return {number}
 */function findItemIndex(items,callback){return items.findIndex(item=>{if(item instanceof ComboBoxPlaceholder){return false;}return callback(item);});}/**
 * @polymerMixin
 * @param {function(new:HTMLElement)} subclass
 */const ComboBoxMixin=subclass=>class VaadinComboBoxMixinElement extends ControllerMixin(KeyboardMixin(InputMixin(DisabledMixin(subclass)))){static get properties(){return {/**
         * True if the dropdown is open, false otherwise.
         * @type {boolean}
         */opened:{type:Boolean,notify:true,value:false,reflectToAttribute:true,observer:'_openedChanged'},/**
         * Set true to prevent the overlay from opening automatically.
         * @attr {boolean} auto-open-disabled
         */autoOpenDisabled:{type:Boolean},/**
         * When present, it specifies that the field is read-only.
         * @type {boolean}
         */readonly:{type:Boolean,value:false,reflectToAttribute:true},/**
         * Custom function for rendering the content of every item.
         * Receives three arguments:
         *
         * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
         * - `comboBox` The reference to the `<vaadin-combo-box>` element.
         * - `model` The object with the properties related with the rendered
         *   item, contains:
         *   - `model.index` The index of the rendered item.
         *   - `model.item` The item.
         * @type {ComboBoxRenderer | undefined}
         */renderer:Function,/**
         * A full set of items to filter the visible options from.
         * The items can be of either `String` or `Object` type.
         * @type {!Array<!ComboBoxItem | string> | undefined}
         */items:{type:Array,observer:'_itemsChanged'},/**
         * If `true`, the user can input a value that is not present in the items list.
         * `value` property will be set to the input value in this case.
         * Also, when `value` is set programmatically, the input value will be set
         * to reflect that value.
         * @attr {boolean} allow-custom-value
         * @type {boolean}
         */allowCustomValue:{type:Boolean,value:false},/**
         * A subset of items, filtered based on the user input. Filtered items
         * can be assigned directly to omit the internal filtering functionality.
         * The items can be of either `String` or `Object` type.
         * @type {!Array<!ComboBoxItem | string> | undefined}
         */filteredItems:{type:Array,observer:'_filteredItemsChanged'},/**
         * Used to detect user value changes and fire `change` events.
         * @private
         */_lastCommittedValue:String,/**
         * When set to `true`, "loading" attribute is added to host and the overlay element.
         * @type {boolean}
         */loading:{type:Boolean,value:false,reflectToAttribute:true},/**
         * @type {number}
         * @protected
         */_focusedIndex:{type:Number,observer:'_focusedIndexChanged',value:-1},/**
         * Filtering string the user has typed into the input field.
         * @type {string}
         */filter:{type:String,value:'',notify:true},/**
         * The selected item from the `items` array.
         * @type {ComboBoxItem | string | undefined}
         */selectedItem:{type:Object,notify:true},/**
         * Path for label of the item. If `items` is an array of objects, the
         * `itemLabelPath` is used to fetch the displayed string label for each
         * item.
         *
         * The item label is also used for matching items when processing user
         * input, i.e., for filtering and selecting items.
         * @attr {string} item-label-path
         * @type {string}
         */itemLabelPath:{type:String,value:'label',observer:'_itemLabelPathChanged'},/**
         * Path for the value of the item. If `items` is an array of objects, the
         * `itemValuePath:` is used to fetch the string value for the selected
         * item.
         *
         * The item value is used in the `value` property of the combo box,
         * to provide the form value.
         * @attr {string} item-value-path
         * @type {string}
         */itemValuePath:{type:String,value:'value'},/**
         * Path for the id of the item. If `items` is an array of objects,
         * the `itemIdPath` is used to compare and identify the same item
         * in `selectedItem` and `filteredItems` (items given by the
         * `dataProvider` callback).
         * @attr {string} item-id-path
         */itemIdPath:String,/**
         * @type {!HTMLElement | undefined}
         * @protected
         */_toggleElement:{type:Object,observer:'_toggleElementChanged'},/** @private */_closeOnBlurIsPrevented:Boolean,/** @private */_scroller:Object,/** @private */_overlayOpened:{type:Boolean,observer:'_overlayOpenedChanged'}};}static get observers(){return ['_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)','_openedOrItemsChanged(opened, filteredItems, loading)','_updateScroller(_scroller, filteredItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, theme)'];}constructor(){super();this._boundOnFocusout=this._onFocusout.bind(this);this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this);this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this);this._boundOnClick=this._onClick.bind(this);this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this);this._boundOnTouchend=this._onTouchend.bind(this);}/**
     * Tag name prefix used by scroller and items.
     * @protected
     * @return {string}
     */get _tagNamePrefix(){return 'vaadin-combo-box';}/**
     * @return {string | undefined}
     * @protected
     */get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:undefined;}/**
     * @param {string} value
     * @protected
     */set _inputElementValue(value){if(this.inputElement){this.inputElement[this._propertyForValue]=value;}}/**
     * Get a reference to the native `<input>` element.
     * Override to provide a custom input.
     * @protected
     * @return {HTMLInputElement | undefined}
     */get _nativeInput(){return this.inputElement;}/**
     * Override method inherited from `InputMixin`
     * to customize the input element.
     * @protected
     * @override
     */_inputElementChanged(inputElement){super._inputElementChanged(inputElement);const input=this._nativeInput;if(input){input.autocomplete='off';input.autocapitalize='off';input.setAttribute('role','combobox');input.setAttribute('aria-autocomplete','list');input.setAttribute('aria-expanded',!!this.opened);// Disable the macOS Safari spell check auto corrections.
input.setAttribute('spellcheck','false');// Disable iOS autocorrect suggestions.
input.setAttribute('autocorrect','off');this._revertInputValueToValue();if(this.clearElement){this.clearElement.addEventListener('mousedown',this._boundOnClearButtonMouseDown);}}}/** @protected */ready(){super.ready();this._initOverlay();this._initScroller();this.addEventListener('focusout',this._boundOnFocusout);this._lastCommittedValue=this.value;this.addEventListener('click',this._boundOnClick);this.addEventListener('touchend',this._boundOnTouchend);const bringToFrontListener=()=>{requestAnimationFrame(()=>{this.$.overlay.bringToFront();});};this.addEventListener('mousedown',bringToFrontListener);this.addEventListener('touchstart',bringToFrontListener);processTemplates(this);this.addController(new VirtualKeyboardController(this));}/** @protected */disconnectedCallback(){super.disconnectedCallback();// Close the overlay on detach
this.close();}/**
     * Requests an update for the content of items.
     * While performing the update, it invokes the renderer (passed in the `renderer` property) once an item.
     *
     * It is not guaranteed that the update happens immediately (synchronously) after it is requested.
     */requestContentUpdate(){if(!this._scroller){return;}this._scroller.requestContentUpdate();this._getItemElements().forEach(item=>{item.requestContentUpdate();});}/**
     * Opens the dropdown list.
     */open(){// Prevent _open() being called when input is disabled or read-only
if(!this.disabled&&!this.readonly){this.opened=true;}}/**
     * Closes the dropdown list.
     */close(){this.opened=false;}/**
     * Override Polymer lifecycle callback to handle `filter` property change after
     * the observer for `opened` property is triggered. This is needed when opening
     * combo-box on user input to ensure the focused index is set correctly.
     *
     * @param {!Object} currentProps Current accessor values
     * @param {?Object} changedProps Properties changed since the last call
     * @param {?Object} oldProps Previous values for each changed property
     * @protected
     * @override
     */_propertiesChanged(currentProps,changedProps,oldProps){super._propertiesChanged(currentProps,changedProps,oldProps);if(changedProps.filter!==undefined){this._filterChanged(changedProps.filter);}}/** @private */_initOverlay(){const overlay=this.$.overlay;// Store instance for detecting "dir" attribute on opening
overlay._comboBox=this;overlay.addEventListener('touchend',this._boundOnOverlayTouchAction);overlay.addEventListener('touchmove',this._boundOnOverlayTouchAction);// Prevent blurring the input when clicking inside the overlay
overlay.addEventListener('mousedown',e=>e.preventDefault());// Manual two-way binding for the overlay "opened" property
overlay.addEventListener('opened-changed',e=>{this._overlayOpened=e.detail.value;});}/**
     * Create and initialize the scroller element.
     * Override to provide custom host reference.
     *
     * @protected
     */_initScroller(host){const scrollerTag=`${this._tagNamePrefix}-scroller`;const overlay=this.$.overlay;overlay.renderer=root=>{if(!root.firstChild){root.appendChild(document.createElement(scrollerTag));}};// Ensure the scroller is rendered
overlay.requestContentUpdate();const scroller=overlay.querySelector(scrollerTag);scroller.comboBox=host||this;scroller.getItemLabel=this._getItemLabel.bind(this);scroller.addEventListener('selection-changed',this._boundOverlaySelectedItemChanged);// Trigger the observer to set properties
this._scroller=scroller;}/** @private */ // eslint-disable-next-line max-params
_updateScroller(scroller,items,opened,loading,selectedItem,itemIdPath,focusedIndex,renderer,theme){if(scroller){if(opened){scroller.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||'65vh';}scroller.setProperties({items:opened?items:[],opened,loading,selectedItem,itemIdPath,focusedIndex,renderer,theme});}}/** @private */_openedOrItemsChanged(opened,items,loading){// Close the overlay if there are no items to display.
// See https://github.com/vaadin/vaadin-combo-box/pull/964
this._overlayOpened=!!(opened&&(loading||items&&items.length));}/** @private */_overlayOpenedChanged(opened,wasOpened){if(opened){this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-opened',{bubbles:true,composed:true}));this._onOpened();}else if(wasOpened&&this.filteredItems&&this.filteredItems.length){this.close();this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-closed',{bubbles:true,composed:true}));}}/** @private */_focusedIndexChanged(index,oldIndex){if(oldIndex===undefined){return;}this._updateActiveDescendant(index);}/** @protected */_isInputFocused(){return this.inputElement&&isElementFocused(this.inputElement);}/** @private */_updateActiveDescendant(index){const input=this._nativeInput;if(!input){return;}const item=this._getItemElements().find(el=>el.index===index);if(item){input.setAttribute('aria-activedescendant',item.id);}else {input.removeAttribute('aria-activedescendant');}}/** @private */_openedChanged(opened,wasOpened){// Prevent _close() being called when opened is set to its default value (false).
if(wasOpened===undefined){return;}if(opened){this._openedWithFocusRing=this.hasAttribute('focus-ring');// For touch devices, we don't want to popup virtual keyboard
// unless input element is explicitly focused by the user.
if(!this._isInputFocused()&&!isTouch){this.focus();}this.$.overlay.restoreFocusOnClose=true;}else {this._onClosed();if(this._openedWithFocusRing&&this._isInputFocused()){this.setAttribute('focus-ring','');}}const input=this._nativeInput;if(input){input.setAttribute('aria-expanded',!!opened);if(opened){input.setAttribute('aria-controls',this._scroller.id);}else {input.removeAttribute('aria-controls');}}}/** @private */_onOverlayTouchAction(){// On touch devices, blur the input on touch start inside the overlay, in order to hide
// the virtual keyboard. But don't close the overlay on this blur.
this._closeOnBlurIsPrevented=true;this.inputElement.blur();this._closeOnBlurIsPrevented=false;}/** @protected */_isClearButton(event){return event.composedPath()[0]===this.clearElement;}/**
     * @param {Event} event
     * @protected
     */_handleClearButtonClick(event){event.preventDefault();this._clear();// De-select dropdown item
if(this.opened){this.requestContentUpdate();}}/**
     * @param {Event} event
     * @private
     */_onToggleButtonClick(event){// Prevent parent components such as `vaadin-grid`
// from handling the click event after it bubbles.
event.preventDefault();if(this.opened){this.close();}else {this.open();}}/**
     * @param {Event} event
     * @protected
     */_onHostClick(event){if(!this.autoOpenDisabled){event.preventDefault();this.open();}}/** @private */_onClick(e){const path=e.composedPath();if(this._isClearButton(e)){this._handleClearButtonClick(e);}else if(path.indexOf(this._toggleElement)>-1){this._onToggleButtonClick(e);}else {this._onHostClick(e);}}/**
     * Override an event listener from `KeyboardMixin`.
     *
     * @param {KeyboardEvent} e
     * @protected
     * @override
     */_onKeyDown(e){super._onKeyDown(e);if(e.key==='Tab'){this.$.overlay.restoreFocusOnClose=false;}else if(e.key==='ArrowDown'){this._onArrowDown();// Prevent caret from moving
e.preventDefault();}else if(e.key==='ArrowUp'){this._onArrowUp();// Prevent caret from moving
e.preventDefault();}}/** @private */_getItemLabel(item){let label=item&&this.itemLabelPath?this.get(this.itemLabelPath,item):undefined;if(label===undefined||label===null){label=item?item.toString():'';}return label;}/** @private */_getItemValue(item){let value=item&&this.itemValuePath?this.get(this.itemValuePath,item):undefined;if(value===undefined){value=item?item.toString():'';}return value;}/** @private */_onArrowDown(){if(this.opened){const items=this.filteredItems;if(items){this._focusedIndex=Math.min(items.length-1,this._focusedIndex+1);this._prefillFocusedItemLabel();}}else {this.open();}}/** @private */_onArrowUp(){if(this.opened){if(this._focusedIndex>-1){this._focusedIndex=Math.max(0,this._focusedIndex-1);}else {const items=this.filteredItems;if(items){this._focusedIndex=items.length-1;}}this._prefillFocusedItemLabel();}else {this.open();}}/** @private */_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const focusedItem=this.filteredItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(focusedItem);this._markAllSelectionRange();}}/** @private */_setSelectionRange(start,end){// Setting selection range focuses and/or moves the caret in some browsers,
// and there's no need to modify the selection range if the input isn't focused anyway.
// This affects Safari. When the overlay is open, and then hitting tab, browser should focus
// the next focusable element instead of the combo-box itself.
if(this._isInputFocused()&&this.inputElement.setSelectionRange){this.inputElement.setSelectionRange(start,end);}}/** @private */_markAllSelectionRange(){if(this._inputElementValue!==undefined){this._setSelectionRange(0,this._inputElementValue.length);}}/** @private */_clearSelectionRange(){if(this._inputElementValue!==undefined){const pos=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(pos,pos);}}/** @private */_closeOrCommit(){if(!this.opened&&!this.loading){this._commitValue();}else {this.close();}}/**
     * Override an event listener from `KeyboardMixin`.
     *
     * @param {KeyboardEvent} e
     * @protected
     * @override
     */_onEnter(e){// Do not commit value when custom values are disallowed and input value is not a valid option
// also stop propagation of the event, otherwise the user could submit a form while the input
// still contains an invalid value
if(!this.allowCustomValue&&this._inputElementValue!==''&&this._focusedIndex<0){// Do not submit the surrounding form.
e.preventDefault();// Do not trigger global listeners
e.stopPropagation();return;}// Stop propagation of the enter event only if the dropdown is opened, this
// "consumes" the enter event for the action of closing the dropdown
if(this.opened){// Do not submit the surrounding form.
e.preventDefault();// Do not trigger global listeners
e.stopPropagation();}this._closeOrCommit();}/**
     * Override an event listener from `KeyboardMixin`.
     * Do not call `super` in order to override clear
     * button logic defined in `InputControlMixin`.
     *
     * @param {!KeyboardEvent} e
     * @protected
     * @override
     */_onEscape(e){if(this.autoOpenDisabled){// Auto-open is disabled
if(this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0){// The overlay is open or
// The input value has changed but the change hasn't been committed, so cancel it.
e.stopPropagation();this._focusedIndex=-1;this.cancel();}else if(this.clearButtonVisible&&!this.opened&&!!this.value){e.stopPropagation();// The clear button is visible and the overlay is closed, so clear the value.
this._clear();}}else if(this.opened){// Auto-open is enabled
// The overlay is open
e.stopPropagation();if(this._focusedIndex>-1){// An item is focused, revert the input to the filtered value
this._focusedIndex=-1;this._revertInputValue();}else {// No item is focused, cancel the change and close the overlay
this.cancel();}}else if(this.clearButtonVisible&&!!this.value){e.stopPropagation();// The clear button is visible and the overlay is closed, so clear the value.
this._clear();}}/** @private */_toggleElementChanged(toggleElement){if(toggleElement){// Don't blur the input on toggle mousedown
toggleElement.addEventListener('mousedown',e=>e.preventDefault());// Unfocus previously focused element if focus is not inside combo box (on touch devices)
toggleElement.addEventListener('click',()=>{if(isTouch&&!this._isInputFocused()){document.activeElement.blur();}});}}/**
     * Clears the current value.
     * @protected
     */_clear(){this.selectedItem=null;if(this.allowCustomValue){this.value='';}this._detectAndDispatchChange();}/**
     * Reverts back to original value.
     */cancel(){this._revertInputValueToValue();// In the next _detectAndDispatchChange() call, the change detection should not pass
this._lastCommittedValue=this.value;this._closeOrCommit();}/** @private */_onOpened(){// Defer scroll position adjustment to improve performance.
requestAnimationFrame(()=>{this._scrollIntoView(this._focusedIndex);// Set attribute after the items are rendered when overlay is opened for the first time.
this._updateActiveDescendant(this._focusedIndex);});// _detectAndDispatchChange() should not consider value changes done before opening
this._lastCommittedValue=this.value;}/** @private */_onClosed(){if(!this.loading||this.allowCustomValue){this._commitValue();}}/** @private */_commitValue(){if(this._focusedIndex>-1){const focusedItem=this.filteredItems[this._focusedIndex];if(this.selectedItem!==focusedItem){this.selectedItem=focusedItem;}// Make sure input field is updated in case value doesn't change (i.e. FOO -> foo)
this._inputElementValue=this._getItemLabel(this.selectedItem);}else if(this._inputElementValue===''||this._inputElementValue===undefined){this.selectedItem=null;if(this.allowCustomValue){this.value='';}}else {// Try to find an item which label matches the input value.
const items=[...(this.filteredItems||[]),this.selectedItem];const itemMatchingInputValue=items[this.__getItemIndexByLabel(items,this._inputElementValue)];if(this.allowCustomValue&&// To prevent a repetitive input value being saved after pressing ESC and Tab.
!itemMatchingInputValue){const customValue=this._inputElementValue;// Store reference to the last custom value for checking it on focusout.
this._lastCustomValue=customValue;// An item matching by label was not found, but custom values are allowed.
// Dispatch a custom-value-set event with the input value.
const e=new CustomEvent('custom-value-set',{detail:customValue,composed:true,cancelable:true,bubbles:true});this.dispatchEvent(e);if(!e.defaultPrevented){this.value=customValue;}}else if(!this.allowCustomValue&&!this.opened&&itemMatchingInputValue){// An item matching by label was found, select it.
this.value=this._getItemValue(itemMatchingInputValue);}else {// Revert the input value
this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||'';}}this._detectAndDispatchChange();this._clearSelectionRange();this.filter='';}/**
     * @return {string}
     * @protected
     */get _propertyForValue(){return 'value';}/**
     * Override an event listener from `InputMixin`.
     * @param {!Event} event
     * @protected
     * @override
     */_onInput(event){const filter=this._inputElementValue;// When opening dropdown on user input, both `opened` and `filter` properties are set.
// Perform a batched property update instead of relying on sync property observers.
// This is necessary to avoid an extra data-provider request for loading first page.
const props={};if(this.filter===filter){// Filter and input value might get out of sync, while keyboard navigating for example.
// Afterwards, input value might be changed to the same value as used in filtering.
// In situation like these, we need to make sure all the filter changes handlers are run.
this._filterChanged(this.filter);}else {props.filter=filter;}if(!this.opened&&!this._isClearButton(event)&&!this.autoOpenDisabled){props.opened=true;}this.setProperties(props);}/**
     * Override an event listener from `InputMixin`.
     * @param {!Event} event
     * @protected
     * @override
     */_onChange(event){// Suppress the native change event fired on the native input.
// We use `_detectAndDispatchChange` to fire a custom event.
event.stopPropagation();}/** @private */_itemLabelPathChanged(itemLabelPath){if(typeof itemLabelPath!=='string'){console.error('You should set itemLabelPath to a valid string');}}/** @private */_filterChanged(filter){// Scroll to the top of the list whenever the filter changes.
this._scrollIntoView(0);this._focusedIndex=-1;if(this.items){this.filteredItems=this._filterItems(this.items,filter);}else {// With certain use cases (e. g., external filtering), `items` are
// undefined. Filtering is unnecessary per se, but the filteredItems
// observer should still be invoked to update focused item.
this._filteredItemsChanged(this.filteredItems);}}/** @protected */_revertInputValue(){if(this.filter!==''){this._inputElementValue=this.filter;}else {this._revertInputValueToValue();}this._clearSelectionRange();}/** @private */_revertInputValueToValue(){if(this.allowCustomValue&&!this.selectedItem){this._inputElementValue=this.value;}else {this._inputElementValue=this._getItemLabel(this.selectedItem);}}/** @private */_selectedItemChanged(selectedItem){if(selectedItem===null||selectedItem===undefined){if(this.filteredItems){if(!this.allowCustomValue){this.value='';}this._toggleHasValue(this._hasValue);this._inputElementValue=this.value;}}else {const value=this._getItemValue(selectedItem);if(this.value!==value){this.value=value;if(this.value!==value){// The value was changed to something else in value-changed listener,
// so prevent from resetting it to the previous value.
return;}}this._toggleHasValue(true);this._inputElementValue=this._getItemLabel(selectedItem);}if(this.filteredItems){this._focusedIndex=this.filteredItems.indexOf(selectedItem);}}/**
     * Override an observer from `InputMixin`.
     * @protected
     * @override
     */_valueChanged(value,oldVal){if(value===''&&oldVal===undefined){// Initializing, no need to do anything
// See https://github.com/vaadin/vaadin-combo-box/issues/554
return;}if(isValidValue(value)){if(this._getItemValue(this.selectedItem)!==value){this._selectItemForValue(value);}if(!this.selectedItem&&this.allowCustomValue){this._inputElementValue=value;}this._toggleHasValue(this._hasValue);}else {this.selectedItem=null;}this.filter='';// In the next _detectAndDispatchChange() call, the change detection should pass
this._lastCommittedValue=undefined;}/** @private */_detectAndDispatchChange(){if(this.value!==this._lastCommittedValue){this.dispatchEvent(new CustomEvent('change',{bubbles:true}));this._lastCommittedValue=this.value;}}/** @private */_itemsChanged(items,oldItems){this._ensureItemsOrDataProvider(()=>{this.items=oldItems;});if(items){this.filteredItems=items.slice(0);}else if(oldItems){// Only clear filteredItems if the component had items previously but got cleared
this.filteredItems=null;}}/** @private */_filteredItemsChanged(filteredItems,oldFilteredItems){// Store the currently focused item if any. The focused index preserves
// in the case when more filtered items are loading but it is reset
// when the user types in a filter query.
const focusedItem=oldFilteredItems?oldFilteredItems[this._focusedIndex]:null;// Try to sync `selectedItem` based on `value` once a new set of `filteredItems` is available
// (as a result of external filtering or when they have been loaded by the data provider).
// When `value` is specified but `selectedItem` is not, it means that there was no item
// matching `value` at the moment `value` was set, so `selectedItem` has remained unsynced.
const valueIndex=this.__getItemIndexByValue(filteredItems,this.value);if((this.selectedItem===null||this.selectedItem===undefined)&&valueIndex>=0){this.selectedItem=filteredItems[valueIndex];}// Try to first set focus on the item that had been focused before `filteredItems` were updated
// if it is still present in the `filteredItems` array. Otherwise, set the focused index
// depending on the selected item or the filter query.
const focusedItemIndex=this.__getItemIndexByValue(filteredItems,this._getItemValue(focusedItem));if(focusedItemIndex>-1){this._focusedIndex=focusedItemIndex;}else {this.__setInitialFocusedIndex();}}/** @private */__setInitialFocusedIndex(){const inputValue=this._inputElementValue;if(inputValue===undefined||inputValue===this._getItemLabel(this.selectedItem)){// When the input element value is the same as the current value or not defined,
// set the focused index to the item that matches the value.
this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this._getItemLabel(this.selectedItem));}else {// When the user filled in something that is different from the current value = filtering is enabled,
// set the focused index to the item that matches the filter query.
this._focusedIndex=this.__getItemIndexByLabel(this.filteredItems,this.filter);}}/** @private */_filterItems(arr,filter){if(!arr){return arr;}const filteredItems=arr.filter(item=>{filter=filter?filter.toString().toLowerCase():'';// Check if item contains input value.
return this._getItemLabel(item).toString().toLowerCase().indexOf(filter)>-1;});return filteredItems;}/** @private */_selectItemForValue(value){const valueIndex=this.__getItemIndexByValue(this.filteredItems,value);const previouslySelectedItem=this.selectedItem;if(valueIndex>=0){this.selectedItem=this.filteredItems[valueIndex];}else if(this.dataProvider&&this.selectedItem===undefined){this.selectedItem=undefined;}else {this.selectedItem=null;}if(this.selectedItem===null&&previouslySelectedItem===null){this._selectedItemChanged(this.selectedItem);}}/** @private */_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`));}/** @private */_scrollIntoView(index){if(!this._scroller){return;}this._scroller.scrollIntoView(index);}/**
     * Returns the first item that matches the provided value.
     *
     * @private
     */__getItemIndexByValue(items,value){if(!items||!isValidValue(value)){return -1;}return findItemIndex(items,item=>{return this._getItemValue(item)===value;});}/**
     * Returns the first item that matches the provided label.
     * Labels are matched against each other case insensitively.
     *
     * @private
     */__getItemIndexByLabel(items,label){if(!items||!label){return -1;}return findItemIndex(items,item=>{return this._getItemLabel(item).toString().toLowerCase()===label.toString().toLowerCase();});}/** @private */_overlaySelectedItemChanged(e){// Stop this private event from leaking outside.
e.stopPropagation();if(e.detail.item instanceof ComboBoxPlaceholder){// Placeholder items should not be selectable.
return;}if(this.opened){this._focusedIndex=this.filteredItems.indexOf(e.detail.item);this.close();}}/** @private */__onClearButtonMouseDown(event){event.preventDefault();// Prevent native focusout event
this.inputElement.focus();}/** @private */_onFocusout(event){// VoiceOver on iOS fires `focusout` event when moving focus to the item in the dropdown.
// Do not focus the input in this case, because it would break announcement for the item.
if(event.relatedTarget&&event.relatedTarget.localName===`${this._tagNamePrefix}-item`){return;}// Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
if(event.relatedTarget===this.$.overlay){event.composedPath()[0].focus();return;}if(!this.readonly&&!this._closeOnBlurIsPrevented){// User's logic in `custom-value-set` event listener might cause input to blur,
// which will result in attempting to commit the same custom value once again.
if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return;}this._closeOrCommit();}}/** @private */_onTouchend(event){if(!this.clearElement||event.composedPath()[0]!==this.clearElement){return;}event.preventDefault();this._clear();}/**
     * Fired when the value changes.
     *
     * @event value-changed
     * @param {Object} detail
     * @param {String} detail.value the combobox value
     */ /**
     * Fired when selected item changes.
     *
     * @event selected-item-changed
     * @param {Object} detail
     * @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
     */ /**
     * Fired when the user sets a custom value.
     * @event custom-value-set
     * @param {String} detail the custom value
     */ /**
     * Fired when value changes.
     * To comply with https://developer.mozilla.org/en-US/docs/Web/Events/change
     * @event change
     */ /**
     * Fired after the `vaadin-combo-box-overlay` opens.
     *
     * @event vaadin-combo-box-dropdown-opened
     */ /**
     * Fired after the `vaadin-combo-box-overlay` closes.
     *
     * @event vaadin-combo-box-dropdown-closed
     */};

/**
 * `<vaadin-combo-box-light>` is a customizable version of the `<vaadin-combo-box>` providing
 * only the dropdown functionality and leaving the input field definition to the user.
 *
 * The element has the same API as `<vaadin-combo-box>`.
 *
 * To create a custom input field, you need to add a child element which has a two-way
 * data-bindable property representing the input value. The property name is expected
 * to be `value` by default. For example, you can use `<vaadin-text-field>` element:
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <vaadin-text-field></vaadin-text-field>
 * </vaadin-combo-box-light>
 * ```
 *
 * If you are using custom input field that has other property for value,
 * set `class="input"` to enable corresponding logic, and use `attr-for-value`
 * attribute to specify which property to use:
 *
 * ```html
 * <vaadin-combo-box-light attr-for-value="input-value">
 *   <custom-input class="input"></custom-input>
 * </vaadin-combo-box-light>
 * ```
 *
 * You can also pass custom toggle and clear buttons with corresponding classes:
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <custom-input class="input" attr-for-value="input-value">
 *     <button slot="suffix" class="clear-button">Clear</button>
 *     <button slot="suffix" class="toggle-button">Toggle</button>
 *   </custom-input>
 * </vaadin-combo-box-light>
 * ```
 *
 * @fires {Event} change - Fired when the user commits a value change.
 * @fires {CustomEvent} custom-value-set - Fired when the user sets a custom value.
 * @fires {CustomEvent} filter-changed - Fired when the `filter` property changes.
 * @fires {CustomEvent} invalid-changed - Fired when the `invalid` property changes.
 * @fires {CustomEvent} opened-changed - Fired when the `opened` property changes.
 * @fires {CustomEvent} selected-item-changed - Fired when the `selectedItem` property changes.
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 * @fires {CustomEvent} validated - Fired whenever the field is validated.
 *
 * @extends HTMLElement
 * @mixes ComboBoxDataProviderMixin
 * @mixes ComboBoxMixin
 * @mixes ThemableMixin
 * @mixes ValidateMixin
 */class ComboBoxLight extends ComboBoxDataProviderMixin(ComboBoxMixin(ValidateMixin(ThemableMixin(PolymerElement)))){static get is(){return 'vaadin-combo-box-light';}static get template(){return html`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[inputElement]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-combo-box-overlay>
    `;}static get properties(){return {/**
       * Name of the two-way data-bindable property representing the
       * value of the custom input field.
       * @attr {string} attr-for-value
       * @type {string}
       */attrForValue:{type:String,value:'value'}};}/**
   * Used by `InputControlMixin` as a reference to the clear button element.
   * @protected
   * @return {!HTMLElement}
   */get clearElement(){return this.querySelector('.clear-button');}/** @protected */ready(){super.ready();this._toggleElement=this.querySelector('.toggle-button');// Wait until the slotted input DOM is ready
afterNextRender(this,()=>{this._setInputElement(this.querySelector('vaadin-text-field,.input'));this._revertInputValue();});}/**
   * Returns true if the current input value satisfies all constraints (if any).
   * @return {boolean}
   */checkValidity(){if(this.inputElement.validate){return this.inputElement.validate();}return super.checkValidity();}/**
   * @return {string}
   * @protected
   */get _propertyForValue(){return dashToCamelCase(this.attrForValue);}/**
   * @protected
   * @override
   * @return {HTMLInputElement | undefined}
   */get _nativeInput(){const input=this.inputElement;if(input){// Support `<input class="input">`
if(input instanceof HTMLInputElement){return input;}// Support `<input>` in light DOM (e.g. `vaadin-text-field`)
const slottedInput=input.querySelector('input');if(slottedInput){return slottedInput;}if(input.shadowRoot){// Support `<input>` in Shadow DOM (e.g. `mwc-textfield`)
const shadowInput=input.shadowRoot.querySelector('input');if(shadowInput){return shadowInput;}}}return undefined;}/** @protected */_isClearButton(event){return super._isClearButton(event)||event.type==='input'&&!event.isTrusted||// Fake input event dispatched by clear button
event.composedPath()[0].getAttribute('part')==='clear-button';}/**
   * @param {!Event} event
   * @protected
   */_onChange(event){super._onChange(event);if(this._isClearButton(event)){this._clear();}}}customElements.define(ComboBoxLight.is,ComboBoxLight);

const initialValue={};class AbstractRendererDirective extends i{constructor(part){super(part);this.previousValue=initialValue;if(part.type!==t.ELEMENT){throw new Error('renderer only supports binding to element');}}render(_renderer,_value){return w;}update(part,[renderer,value]){var _a;const firstRender=this.previousValue===initialValue;if(!this.hasChanged(value)){return w;}// Copy the value if it's an array so that if it's mutated we don't forget
// what the previous values were.
this.previousValue=Array.isArray(value)?Array.from(value):value;const element=part.element;// TODO: support re-assigning renderer function.
if(firstRender){const host=(_a=part.options)===null||_a===void 0?void 0:_a.host;this.addRenderer(element,renderer,{host});}else {this.runRenderer(element);}return w;}hasChanged(value){let result=true;if(Array.isArray(value)){// Dirty-check arrays by item
if(Array.isArray(this.previousValue)&&this.previousValue.length===value.length&&value.every((v,i)=>v===this.previousValue[i])){result=false;}}else if(this.previousValue===value){// Dirty-check non-arrays by identity
result=false;}return result;}}

class ComboBoxRendererDirective extends AbstractRendererDirective{/**
     * Set renderer callback to the element.
     */addRenderer(element,renderer,options){element.renderer=(root,comboBox,model)=>{x(renderer.call(options.host,model.item,model,comboBox),root,options);};}/**
     * Run renderer callback on the element.
     */runRenderer(element){element.requestContentUpdate();}}const rendererDirective=e(ComboBoxRendererDirective);const comboBoxRenderer=(renderer,value)=>rendererDirective(renderer,value);

registerStyles("vaadin-combo-box-item",r`
    :host {
      padding: 0;
    }
    :host([focused]:not([disabled])) {
      background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.12);
    }
    :host([selected]:not([disabled])) {
      background-color: transparent;
      color: var(--mdc-theme-primary);
      --mdc-ripple-color: var(--mdc-theme-primary);
      --mdc-theme-text-primary-on-background: var(--mdc-theme-primary);
    }
    :host([selected]:not([disabled])):before {
      background-color: var(--mdc-theme-primary);
      opacity: 0.12;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    :host([selected][focused]:not([disabled])):before {
      opacity: 0.24;
    }
    :host(:hover:not([disabled])) {
      background-color: transparent;
    }
    [part="content"] {
      width: 100%;
    }
    [part="checkmark"] {
      display: none;
    }
  `);_decorate([n("ha-combo-box")],function(_initialize,_LitElement){class HaComboBox extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaComboBox,d:[{kind:"field",decorators:[e$1({attribute:false})],key:"hass",value:void 0},{kind:"field",decorators:[e$1()],key:"label",value:void 0},{kind:"field",decorators:[e$1()],key:"value",value:void 0},{kind:"field",decorators:[e$1()],key:"placeholder",value:void 0},{kind:"field",decorators:[e$1()],key:"validationMessage",value:void 0},{kind:"field",decorators:[e$1()],key:"helper",value:void 0},{kind:"field",decorators:[e$1({attribute:"error-message"})],key:"errorMessage",value:void 0},{kind:"field",decorators:[e$1({type:Boolean})],key:"invalid",value:void 0},{kind:"field",decorators:[e$1({type:Boolean})],key:"icon",value:void 0},{kind:"field",decorators:[e$1()],key:"items",value:void 0},{kind:"field",decorators:[e$1()],key:"filteredItems",value:void 0},{kind:"field",decorators:[e$1({attribute:"allow-custom-value",type:Boolean})],key:"allowCustomValue",value:void 0},{kind:"field",decorators:[e$1({attribute:"item-value-path"})],key:"itemValuePath",value:void 0},{kind:"field",decorators:[e$1({attribute:"item-label-path"})],key:"itemLabelPath",value:void 0},{kind:"field",decorators:[e$1({attribute:"item-id-path"})],key:"itemIdPath",value:void 0},{kind:"field",decorators:[e$1()],key:"renderer",value:void 0},{kind:"field",decorators:[e$1({type:Boolean})],key:"disabled",value:void 0},{kind:"field",decorators:[e$1({type:Boolean})],key:"required",value:void 0},{kind:"field",decorators:[e$1({type:Boolean,reflect:true,attribute:"opened"})],key:"_opened",value:void 0},{kind:"field",decorators:[i$1("vaadin-combo-box-light",true)],key:"_comboBox",value:void 0},{kind:"field",key:"_overlayMutationObserver",value:void 0},{kind:"method",key:"open",value:// protected firstUpdated(): void {
//   this.requestUpdate();
// }
function open(){this.updateComplete.then(()=>{var _this$_comboBox;(_this$_comboBox=this._comboBox)===null||_this$_comboBox===void 0?void 0:_this$_comboBox.open();});}},{kind:"method",key:"focus",value:function focus(){this.updateComplete.then(()=>{var _this$_comboBox2,_this$_comboBox2$inpu;(_this$_comboBox2=this._comboBox)===null||_this$_comboBox2===void 0?void 0:(_this$_comboBox2$inpu=_this$_comboBox2.inputElement)===null||_this$_comboBox2$inpu===void 0?void 0:_this$_comboBox2$inpu.focus();});}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaComboBox.prototype),"disconnectedCallback",this).call(this);if(this._overlayMutationObserver){this._overlayMutationObserver.disconnect();this._overlayMutationObserver=undefined;}}},{kind:"get",key:"selectedItem",value:function selectedItem(){return this._comboBox.selectedItem;}},{kind:"method",key:"setInputValue",value:function setInputValue(value){this._comboBox.value=value;}},{kind:"method",key:"render",value:function render(){var _this$hass,_this$hass2;return $`
      <vaadin-combo-box-light
        .itemValuePath=${this.itemValuePath}
        .itemIdPath=${this.itemIdPath}
        .itemLabelPath=${this.itemLabelPath}
        .items=${this.items}
        .value=${this.value||""}
        .filteredItems=${this.filteredItems}
        .allowCustomValue=${this.allowCustomValue}
        .disabled=${this.disabled}
        .required=${this.required}
        ${comboBoxRenderer(this.renderer||this._defaultRowRenderer)}
        @opened-changed=${this._openedChanged}
        @filter-changed=${this._filterChanged}
        @value-changed=${this._valueChanged}
        attr-for-value="value"
      >
        <ha-textfield
          .label=${this.label}
          .placeholder=${this.placeholder}
          .disabled=${this.disabled}
          .required=${this.required}
          .validationMessage=${this.validationMessage}
          .errorMessage=${this.errorMessage}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          .suffix=${$`<div style="width: 28px;"></div>`}
          .icon=${this.icon}
          .invalid=${this.invalid}
          .helper=${this.helper}
          helperPersistent
        >
          <slot name="icon" slot="leadingIcon"></slot>
        </ha-textfield>
        ${this.value?$`<ha-svg-icon
              aria-label=${(_this$hass=this.hass)===null||_this$hass===void 0?void 0:_this$hass.localize("ui.components.combo-box.clear")}
              class="clear-button"
              .path=${mdiClose}
              @click=${this._clearValue}
            ></ha-svg-icon>`:""}
        <ha-svg-icon
          aria-label=${(_this$hass2=this.hass)===null||_this$hass2===void 0?void 0:_this$hass2.localize("ui.components.combo-box.show")}
          class="toggle-button"
          .path=${this._opened?mdiMenuUp:mdiMenuDown}
          @click=${this._toggleOpen}
        ></ha-svg-icon>
      </vaadin-combo-box-light>
    `;}},{kind:"field",key:"_defaultRowRenderer",value(){return item=>$`<mwc-list-item>
      ${this.itemLabelPath?item[this.itemLabelPath]:item}
    </mwc-list-item>`;}},{kind:"method",key:"_clearValue",value:function _clearValue(ev){ev.stopPropagation();fireEvent(this,"value-changed",{value:undefined});}},{kind:"method",key:"_toggleOpen",value:function _toggleOpen(ev){if(this._opened){var _this$_comboBox3;(_this$_comboBox3=this._comboBox)===null||_this$_comboBox3===void 0?void 0:_this$_comboBox3.close();ev.stopPropagation();}else {var _this$_comboBox4;(_this$_comboBox4=this._comboBox)===null||_this$_comboBox4===void 0?void 0:_this$_comboBox4.inputElement.focus();}}},{kind:"method",key:"_openedChanged",value:function _openedChanged(ev){const opened=ev.detail.value;// delay this so we can handle click event before setting _opened
setTimeout(()=>{this._opened=opened;},30);// @ts-ignore
fireEvent(this,ev.type,ev.detail);if(opened&&"MutationObserver"in window&&!this._overlayMutationObserver){const overlay=document.querySelector("vaadin-combo-box-overlay");if(!overlay){var _this$_comboBox5;console.log("esytou qausda");(_this$_comboBox5=this._comboBox)===null||_this$_comboBox5===void 0?void 0:_this$_comboBox5.close();setTimeout(()=>{var _this$_comboBox6;(_this$_comboBox6=this._comboBox)===null||_this$_comboBox6===void 0?void 0:_this$_comboBox6.open();},30);return;}this._overlayMutationObserver=new MutationObserver(mutations=>{mutations.forEach(mutation=>{if(mutation.type==="attributes"&&mutation.attributeName==="inert"){var _this$_overlayMutatio;(_this$_overlayMutatio=this._overlayMutationObserver)===null||_this$_overlayMutatio===void 0?void 0:_this$_overlayMutatio.disconnect();this._overlayMutationObserver=undefined;// @ts-expect-error
overlay.inert=false;}else if(mutation.type==="childList"){mutation.removedNodes.forEach(node=>{if(node.nodeName==="VAADIN-COMBO-BOX-OVERLAY"){var _this$_overlayMutatio2;(_this$_overlayMutatio2=this._overlayMutationObserver)===null||_this$_overlayMutatio2===void 0?void 0:_this$_overlayMutatio2.disconnect();this._overlayMutationObserver=undefined;}});}});});this._overlayMutationObserver.observe(overlay,{attributes:true});this._overlayMutationObserver.observe(document.body,{childList:true});}}},{kind:"method",key:"_filterChanged",value:function _filterChanged(ev){// @ts-ignore
fireEvent(this,ev.type,ev.detail,{composed:false});}},{kind:"method",key:"_valueChanged",value:function _valueChanged(ev){ev.stopPropagation();const newValue=ev.detail.value;if(newValue!==this.value){fireEvent(this,"value-changed",{value:newValue});}}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host {
        display: block;
        width: 100%;
      }
      vaadin-combo-box-light {
        position: relative;
      }
      ha-textfield {
        width: 100%;
      }
      ha-textfield > ha-icon-button {
        --mdc-icon-button-size: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      ha-svg-icon {
        color: var(--input-dropdown-icon-color);
        position: absolute;
        cursor: pointer;
      }
      .toggle-button {
        right: 12px;
        top: -10px;
        inset-inline-start: initial;
        inset-inline-end: 12px;
        direction: var(--direction);
      }
      :host([opened]) .toggle-button {
        color: var(--primary-color);
        /* border-radius: 1.5rem; */
      }
      :host([hover]) {
        /* border-radius: 1.5rem; */
      }
      .clear-button {
        --mdc-icon-size: 20px;
        top: -7px;
        right: 36px;
        inset-inline-start: initial;
        inset-inline-end: 36px;
        direction: var(--direction);
      }
    `;}}]};},s$1);
