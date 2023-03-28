const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

import { _ as _decorate, c as s, d as e, $, z as o, at as mdiClose, f as fireEvent, r, n, dm as mdiInformationOutline, ae as mdiAlertOutline, ao as mdiAlertCircleOutline, dn as mdiCheckboxMarkedCircleOutline, U as __extends, V as __assign, ay as MDCFoundation, ah as __decorate, aB as observer, G as i, dp as o$1, az as BaseElement, dq as FormElement, br as Polymer, q as html, E as dom, dr as dashToCamelCase, P as PolymerElement, ds as setTouchAction, dt as numbers$1, du as normalizeKey, dv as KEY, dw as Corner, t, K as e$1, Q as l, w, dx as floatingLabel, dy as lineRipple, aA as addHasRemoveClass, dz as isNodeElement, j as _get, k as _getPrototypeOf } from './main-dev.js';
import 'lit-html/is-server.js';

const ALERT_ICONS={info:mdiInformationOutline,warning:mdiAlertOutline,error:mdiAlertCircleOutline,success:mdiCheckboxMarkedCircleOutline};_decorate([n("ha-alert")],function(_initialize,_LitElement){class HaAlert extends _LitElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaAlert,d:[{kind:"field",decorators:[e()],key:"title",value(){return "";}},{kind:"field",decorators:[e({attribute:"alert-type"})],key:"alertType",value(){return "info";}},{kind:"field",decorators:[e({type:Boolean})],key:"dismissable",value(){return false;}},{kind:"field",decorators:[e({type:Boolean})],key:"rtl",value(){return false;}},{kind:"method",key:"render",value:function render(){return $`
      <div
        class="issue-type ${o({rtl:this.rtl,[this.alertType]:true})}"
        role="alert"
      >
        <div class="icon ${this.title?"":"no-title"}">
          <slot name="icon">
            <ha-svg-icon .path=${ALERT_ICONS[this.alertType]}></ha-svg-icon>
          </slot>
        </div>
        <div class="content">
          <div class="main-content">
            ${this.title?$`<div class="title">${this.title}</div>`:""}
            <slot></slot>
          </div>
          <div class="action">
            <slot name="action">
              ${this.dismissable?$`<ha-icon-button
                    @click=${this._dismiss_clicked}
                    label="Dismiss alert"
                    .path=${mdiClose}
                  ></ha-icon-button>`:""}
            </slot>
          </div>
        </div>
      </div>
    `;}},{kind:"method",key:"_dismiss_clicked",value:function _dismiss_clicked(){fireEvent(this,"alert-dismissed-clicked");}},{kind:"field",static:true,key:"styles",value(){return r`
    .issue-type {
      position: relative;
      height: calc(100% - 16px);
      width: calc(100% - 16px);
      padding: 8px;
      /* max-width: 250px; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .issue-type.rtl {
      flex-direction: row-reverse;
    }
    .issue-type::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.12;
      pointer-events: none;
      content: "";
      border-radius: 1.5rem;
    }
    .icon {
      z-index: 1;
      text-align: center;
    }
    .icon.no-title {
      align-self: center;
    }
    .issue-type.rtl > .content {
      flex-direction: row-reverse;
      text-align: right;
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .action {
      z-index: 1;
      width: min-content;
      --mdc-theme-primary: var(--primary-text-color);
    }
    .main-content {
      overflow-wrap: anywhere;
      word-break: break-word;
      margin-left: 8px;
      margin-right: 0;
    }
    .issue-type.rtl > .content > .main-content {
      margin-left: 0;
      margin-right: 8px;
    }
    .title {
      margin-top: 5%;
      font-size: 0.9rem;
    }
    .action mwc-button,
    .action ha-icon-button {
      --mdc-theme-primary: var(--primary-text-color);
      --mdc-icon-button-size: 36px;
    }
    .issue-type.info > .icon {
      color: var(--info-color);
    }
    .issue-type.info::after {
      background-color: var(--info-color);
    }

    .issue-type.warning > .icon {
      color: var(--warning-color);
    }
    .issue-type.warning::after {
      background-color: var(--warning-color);
    }

    .issue-type.error > .icon {
      color: var(--error-color);
    }
    .issue-type.error::after {
      background-color: var(--error-color);
    }

    .issue-type.success > .icon {
      color: var(--success-color);
    }
    .issue-type.success::after {
      background-color: var(--success-color);
    }
  `;}}]};},s);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var cssClasses$1={ROOT:'mdc-form-field'};var strings$1={LABEL_SELECTOR:'.mdc-form-field > label'};

var MDCFormFieldFoundation=/** @class */function(_super){__extends(MDCFormFieldFoundation,_super);function MDCFormFieldFoundation(adapter){var _this=_super.call(this,__assign(__assign({},MDCFormFieldFoundation.defaultAdapter),adapter))||this;_this.click=function(){_this.handleClick();};return _this;}Object.defineProperty(MDCFormFieldFoundation,"cssClasses",{get:function(){return cssClasses$1;},enumerable:false,configurable:true});Object.defineProperty(MDCFormFieldFoundation,"strings",{get:function(){return strings$1;},enumerable:false,configurable:true});Object.defineProperty(MDCFormFieldFoundation,"defaultAdapter",{get:function(){return {activateInputRipple:function(){return undefined;},deactivateInputRipple:function(){return undefined;},deregisterInteractionHandler:function(){return undefined;},registerInteractionHandler:function(){return undefined;}};},enumerable:false,configurable:true});MDCFormFieldFoundation.prototype.init=function(){this.adapter.registerInteractionHandler('click',this.click);};MDCFormFieldFoundation.prototype.destroy=function(){this.adapter.deregisterInteractionHandler('click',this.click);};MDCFormFieldFoundation.prototype.handleClick=function(){var _this=this;this.adapter.activateInputRipple();requestAnimationFrame(function(){_this.adapter.deactivateInputRipple();});};return MDCFormFieldFoundation;}(MDCFoundation);var MDCFormFieldFoundation$1 = MDCFormFieldFoundation;

class FormfieldBase extends BaseElement{constructor(){super(...arguments);this.alignEnd=false;this.spaceBetween=false;this.nowrap=false;this.label='';this.mdcFoundationClass=MDCFormFieldFoundation$1;}createAdapter(){return {registerInteractionHandler:(type,handler)=>{this.labelEl.addEventListener(type,handler);},deregisterInteractionHandler:(type,handler)=>{this.labelEl.removeEventListener(type,handler);},activateInputRipple:async()=>{const input=this.input;if(input instanceof FormElement){const ripple=await input.ripple;if(ripple){ripple.startPress();}}},deactivateInputRipple:async()=>{const input=this.input;if(input instanceof FormElement){const ripple=await input.ripple;if(ripple){ripple.endPress();}}}};}get input(){var _a,_b;return (_b=(_a=this.slottedInputs)===null||_a===void 0?void 0:_a[0])!==null&&_b!==void 0?_b:null;}render(){const classes={'mdc-form-field--align-end':this.alignEnd,'mdc-form-field--space-between':this.spaceBetween,'mdc-form-field--nowrap':this.nowrap};return $`
      <div class="mdc-form-field ${o(classes)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`;}click(){this._labelClick();}_labelClick(){const input=this.input;if(input){input.focus();input.click();}}}__decorate([e({type:Boolean})],FormfieldBase.prototype,"alignEnd",void 0);__decorate([e({type:Boolean})],FormfieldBase.prototype,"spaceBetween",void 0);__decorate([e({type:Boolean})],FormfieldBase.prototype,"nowrap",void 0);__decorate([e({type:String}),observer(async function(label){var _a;(_a=this.input)===null||_a===void 0?void 0:_a.setAttribute('aria-label',label);})],FormfieldBase.prototype,"label",void 0);__decorate([i('.mdc-form-field')],FormfieldBase.prototype,"mdcRoot",void 0);__decorate([o$1('',true,'*')],FormfieldBase.prototype,"slottedInputs",void 0);__decorate([i('label')],FormfieldBase.prototype,"labelEl",void 0);

const styles$1=r`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;

/**
`iron-a11y-announcer` is a singleton element that is intended to add a11y
to features that require on-demand announcement from screen readers. In
order to make use of the announcer, it is best to request its availability
in the announcing element.

Example:

    Polymer({

      is: 'x-chatty',

      attached: function() {
        // This will create the singleton element if it has not
        // been created yet:
        Polymer.IronA11yAnnouncer.requestAvailability();
      }
    });

After the `iron-a11y-announcer` has been made available, elements can
make announces by firing bubbling `iron-announce` events.

Example:

    this.fire('iron-announce', {
      text: 'This is an announcement!'
    }, { bubbles: true });

Note: announcements are only audible if you have a screen reader enabled.

@demo demo/index.html
*/const IronA11yAnnouncer=Polymer({/** @override */_template:html`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:'iron-a11y-announcer',properties:{/**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */mode:{type:String,value:'polite'},/**
     * The timeout on refreshing the announcement text. Larger timeouts are
     * needed for certain screen readers to re-announce the same message.
     */timeout:{type:Number,value:150},_text:{type:String,value:''}},/** @override */created:function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this;}document.addEventListener('iron-announce',this._onIronAnnounce.bind(this));},/**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */announce:function(text){this._text='';this.async(function(){this._text=text;},this.timeout);},_onIronAnnounce:function(event){if(event.detail&&event.detail.text){this.announce(event.detail.text);}}});IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement('iron-a11y-announcer');}if(document.body){document.body.appendChild(IronA11yAnnouncer.instance);}else {document.addEventListener('load',function(){document.body.appendChild(IronA11yAnnouncer.instance);});}};

class IronMeta{/**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */constructor(options){IronMeta[' '](options);/** @type {string} */this.type=options&&options.type||'default';/** @type {string|null|undefined} */this.key=options&&options.key;if(options&&'value'in options){/** @type {*} */this.value=options.value;}}/** @return {*} */get value(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key];}}/** @param {*} value */set value(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key];}else {type[key]=value;}}}/** @return {!Array<*>} */get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return [];}return Object.keys(items).map(function(key){return metaDatas[this.type][key];},this);}}/**
   * @param {string} key
   * @return {*}
   */byKey(key){this.key=key;return this.value;}}// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[' ']=function(){};IronMeta.types={};var metaDatas=IronMeta.types;/**
`iron-meta` is a generic element you can use for sharing information across the
DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
such that any instance of iron-meta has access to the shared information. You
can use `iron-meta` to share whatever you want (or create an extension [like
x-meta] for enhancements).

The `iron-meta` instances containing your actual data can be loaded in an
import, or constructed in any way you see fit. The only requirement is that you
create them before you try to access them.

Examples:

If I create an instance like this:

    <iron-meta key="info" value="foo/bar"></iron-meta>

Note that value="foo/bar" is the metadata I've defined. I could define more
attributes or use child nodes to define additional metadata.

Now I can access that element (and it's metadata) from any iron-meta instance
via the byKey method, e.g.

    meta.byKey('info');

Pure imperative form would be like:

    document.createElement('iron-meta').byKey('info');

Or, in a Polymer element, you can include a meta in your template:

    <iron-meta id="meta"></iron-meta>
    ...
    this.$.meta.byKey('info');

@group Iron Elements
@demo demo/index.html
@element iron-meta
*/Polymer({is:'iron-meta',properties:{/**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */type:{type:String,value:'default'},/**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */key:{type:String},/**
     * The meta-data to store or retrieve.
     * @type {*}
     */value:{type:String,notify:true},/**
     * If true, `value` is set to the iron-meta instance itself.
     */self:{type:Boolean,observer:'_selfChanged'},__meta:{type:Boolean,computed:'__computeMeta(type, key, value)'}},hostAttributes:{hidden:true},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value;}else if(this.value!==meta.value){this.value=meta.value;}return meta;},get list(){return this.__meta&&this.__meta.list;},_selfChanged:function(self){if(self){this.value=this;}},/**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */byKey:function(key){return new IronMeta({type:this.type,key:key}).value;}});

/**
 * Singleton IronMeta instance.
 */let IronValidatableBehaviorMeta=null;/**
 * `Use IronValidatableBehavior` to implement an element that validates
 * user input. Use the related `IronValidatorBehavior` to add custom
 * validation logic to an iron-input.
 *
 * By default, an `<iron-form>` element validates its fields when the user
 * presses the submit button. To validate a form imperatively, call the form's
 * `validate()` method, which in turn will call `validate()` on all its
 * children. By using `IronValidatableBehavior`, your custom element
 * will get a public `validate()`, which will return the validity of the
 * element, and a corresponding `invalid` attribute, which can be used for
 * styling.
 *
 * To implement the custom validation logic of your element, you must override
 * the protected `_getValidity()` method of this behaviour, rather than
 * `validate()`. See
 * [this](https://github.com/PolymerElements/iron-form/blob/master/demo/simple-element.html)
 * for an example.
 *
 * ### Accessibility
 *
 * Changing the `invalid` property, either manually or by calling `validate()`
 * will update the `aria-invalid` attribute.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */const IronValidatableBehavior={properties:{/**
     * Name of the validator to use.
     */validator:{type:String},/**
     * True if the last call to `validate` is invalid.
     */invalid:{notify:true,reflectToAttribute:true,type:Boolean,value:false,observer:'_invalidChanged'}},registered:function(){IronValidatableBehaviorMeta=new IronMeta({type:'validator'});},_invalidChanged:function(){if(this.invalid){this.setAttribute('aria-invalid','true');}else {this.removeAttribute('aria-invalid');}},/* Recompute this every time it's needed, because we don't know if the
   * underlying IronValidatableBehaviorMeta has changed. */get _validator(){return IronValidatableBehaviorMeta&&IronValidatableBehaviorMeta.byKey(this.validator);},/**
   * @return {boolean} True if the validator `validator` exists.
   */hasValidator:function(){return this._validator!=null;},/**
   * Returns true if the `value` is valid, and updates `invalid`. If you want
   * your element to have custom validation logic, do not override this method;
   * override `_getValidity(value)` instead.

   * @param {Object} value Deprecated: The value to be validated. By default,
   * it is passed to the validator's `validate()` function, if a validator is
   set.
   * If this argument is not specified, then the element's `value` property
   * is used, if it exists.
   * @return {boolean} True if `value` is valid.
   */validate:function(value){// If this is an element that also has a value property, and there was
// no explicit value argument passed, use the element's property instead.
if(value===undefined&&this.value!==undefined)this.invalid=!this._getValidity(this.value);else this.invalid=!this._getValidity(value);return !this.invalid;},/**
   * Returns true if `value` is valid.  By default, it is passed
   * to the validator's `validate()` function, if a validator is set. You
   * should override this method if you want to implement custom validity
   * logic for your element.
   *
   * @param {Object} value The value to be validated.
   * @return {boolean} True if `value` is valid.
   */_getValidity:function(value){if(this.hasValidator()){return this._validator.validate(value);}return true;}};

/**
`<iron-input>` is a wrapper to a native `<input>` element, that adds two-way
binding and prevention of invalid input. To use it, you must distribute a native
`<input>` yourself. You can continue to use the native `input` as you would
normally:

    <iron-input>
      <input>
    </iron-input>

    <iron-input>
      <input type="email" disabled>
    </iron-input>

### Two-way binding

By default you can only get notified of changes to a native `<input>`'s `value`
due to user input:

    <input value="{{myValue::input}}">

This means that if you imperatively set the value (i.e. `someNativeInput.value =
'foo'`), no events will be fired and this change cannot be observed.

`iron-input` adds the `bind-value` property that mirrors the native `input`'s
'`value` property; this property can be used for two-way data binding.
`bind-value` will notify if it is changed either by user input or by script.

    <iron-input bind-value="{{myValue}}">
      <input>
    </iron-input>

Note: this means that if you want to imperatively set the native `input`'s, you
_must_ set `bind-value` instead, so that the wrapper `iron-input` can be
notified.

### Validation

`iron-input` uses the native `input`'s validation. For simplicity, `iron-input`
has a `validate()` method (which internally just checks the distributed
`input`'s validity), which sets an `invalid` attribute that can also be used for
styling.

To validate automatically as you type, you can use the `auto-validate`
attribute.

`iron-input` also fires an `iron-input-validate` event after `validate()` is
called. You can use it to implement a custom validator:

    var CatsOnlyValidator = {
      validate: function(ironInput) {
        var valid = !ironInput.bindValue || ironInput.bindValue === 'cat';
        ironInput.invalid = !valid;
        return valid;
      }
    }
    ironInput.addEventListener('iron-input-validate', function() {
      CatsOnly.validate(input2);
    });

You can also use an element implementing an
[`IronValidatorBehavior`](/element/PolymerElements/iron-validatable-behavior).
This example can also be found in the demo for this element:

    <iron-input validator="cats-only">
      <input>
    </iron-input>

### Preventing invalid input

It may be desirable to only allow users to enter certain characters. You can use
the `allowed-pattern` attribute to accomplish this. This feature is separate
from validation, and `allowed-pattern` does not affect how the input is
validated.

    // Only allow typing digits, but a valid input has exactly 5 digits.
    <iron-input allowed-pattern="[0-9]">
      <input pattern="\d{5}">
    </iron-input>

@demo demo/index.html
*/Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:'iron-input',behaviors:[IronValidatableBehavior],/**
   * Fired whenever `validate()` is called.
   *
   * @event iron-input-validate
   */properties:{/**
     * Use this property instead of `value` for two-way data binding, or to
     * set a default value for the input. **Do not** use the distributed
     * input's `value` property to set a default value.
     */bindValue:{type:String,value:''},/**
     * Computed property that echoes `bindValue` (mostly used for Polymer 1.0
     * backcompatibility, if you were one-way binding to the Polymer 1.0
     * `input is="iron-input"` value attribute).
     */value:{type:String,computed:'_computeValue(bindValue)'},/**
     * Regex-like list of characters allowed as input; all characters not in the
     * list will be rejected. The recommended format should be a list of allowed
     * characters, for example, `[a-zA-Z0-9.+-!;:]`.
     *
     * This pattern represents the allowed characters for the field; as the user
     * inputs text, each individual character will be checked against the
     * pattern (rather than checking the entire value as a whole). If a
     * character is not a match, it will be rejected.
     *
     * Pasted input will have each character checked individually; if any
     * character doesn't match `allowedPattern`, the entire pasted string will
     * be rejected.
     *
     * Note: if you were using `iron-input` in 1.0, you were also required to
     * set `prevent-invalid-input`. This is no longer needed as of Polymer 2.0,
     * and will be set automatically for you if an `allowedPattern` is provided.
     *
     */allowedPattern:{type:String},/**
     * Set to true to auto-validate the input value as you type.
     */autoValidate:{type:Boolean,value:false},/**
     * The native input element.
     */_inputElement:Object},observers:['_bindValueChanged(bindValue, _inputElement)'],listeners:{'input':'_onInput','keypress':'_onKeypress'},created:function(){IronA11yAnnouncer.requestAvailability();this._previousValidInput='';this._patternAlreadyChecked=false;},attached:function(){// If the input is added at a later time, update the internal reference.
this._observer=dom(this).observeNodes(function(info){this._initSlottedInput();}.bind(this));},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer);this._observer=null;}},/**
   * Returns the distributed input element.
   */get inputElement(){return this._inputElement;},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0];if(this.inputElement&&this.inputElement.value){this.bindValue=this.inputElement.value;}this.fire('iron-input-ready');},get _patternRegExp(){var pattern;if(this.allowedPattern){pattern=new RegExp(this.allowedPattern);}else {switch(this.inputElement.type){case'number':pattern=/[0-9.,e-]/;break;}}return pattern;},/**
   * @suppress {checkTypes}
   */_bindValueChanged:function(bindValue,inputElement){// The observer could have run before attached() when we have actually
// initialized this property.
if(!inputElement){return;}if(bindValue===undefined){inputElement.value=null;}else if(bindValue!==inputElement.value){this.inputElement.value=bindValue;}if(this.autoValidate){this.validate();}// manually notify because we don't want to notify until after setting value
this.fire('bind-value-changed',{value:bindValue});},_onInput:function(){// Need to validate each of the characters pasted if they haven't
// been validated inside `_onKeypress` already.
if(this.allowedPattern&&!this._patternAlreadyChecked){var valid=this._checkPatternValidity();if(!valid){this._announceInvalidCharacter('Invalid string of characters not entered.');this.inputElement.value=this._previousValidInput;}}this.bindValue=this._previousValidInput=this.inputElement.value;this._patternAlreadyChecked=false;},_isPrintable:function(event){// What a control/printable character is varies wildly based on the browser.
// - most control characters (arrows, backspace) do not send a `keypress`
// event
//   in Chrome, but the *do* on Firefox
// - in Firefox, when they do send a `keypress` event, control chars have
//   a charCode = 0, keyCode = xx (for ex. 40 for down arrow)
// - printable characters always send a keypress event.
// - in Firefox, printable chars always have a keyCode = 0. In Chrome, the
// keyCode
//   always matches the charCode.
// None of this makes any sense.
// For these keys, ASCII code == browser keycode.
var anyNonPrintable=event.keyCode==8||// backspace
event.keyCode==9||// tab
event.keyCode==13||// enter
event.keyCode==27;// escape
// For these keys, make sure it's a browser keycode and not an ASCII code.
var mozNonPrintable=event.keyCode==19||// pause
event.keyCode==20||// caps lock
event.keyCode==45||// insert
event.keyCode==46||// delete
event.keyCode==144||// num lock
event.keyCode==145||// scroll lock
event.keyCode>32&&event.keyCode<41||// page up/down, end, home, arrows
event.keyCode>111&&event.keyCode<124;// fn keys
return !anyNonPrintable&&!(event.charCode==0&&mozNonPrintable);},_onKeypress:function(event){if(!this.allowedPattern&&this.inputElement.type!=='number'){return;}var regexp=this._patternRegExp;if(!regexp){return;}// Handle special keys and backspace
if(event.metaKey||event.ctrlKey||event.altKey){return;}// Check the pattern either here or in `_onInput`, but not in both.
this._patternAlreadyChecked=true;var thisChar=String.fromCharCode(event.charCode);if(this._isPrintable(event)&&!regexp.test(thisChar)){event.preventDefault();this._announceInvalidCharacter('Invalid character '+thisChar+' not entered.');}},_checkPatternValidity:function(){var regexp=this._patternRegExp;if(!regexp){return true;}for(var i=0;i<this.inputElement.value.length;i++){if(!regexp.test(this.inputElement.value[i])){return false;}}return true;},/**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, then any constraints.
   * @return {boolean} True if the value is valid.
   */validate:function(){if(!this.inputElement){this.invalid=false;return true;}// Use the nested input's native validity.
var valid=this.inputElement.checkValidity();// Only do extra checking if the browser thought this was valid.
if(valid){// Empty, required input is invalid
if(this.required&&this.bindValue===''){valid=false;}else if(this.hasValidator()){valid=IronValidatableBehavior.validate.call(this,this.bindValue);}}this.invalid=!valid;this.fire('iron-input-validate');return valid;},_announceInvalidCharacter:function(message){this.fire('iron-announce',{text:message});},_computeValue:function(bindValue){return bindValue;}});

/**
 * Use `Polymer.PaperInputAddonBehavior` to implement an add-on for
 * `<paper-input-container>`. A add-on appears below the input, and may display
 * information based on the input value and validity such as a character counter
 * or an error message.
 * @polymerBehavior
 */const PaperInputAddonBehavior={attached:function(){this.fire('addon-attached');},/**
   * The function called by `<paper-input-container>` when the input value or
   * validity changes.
   * @param {{
   *   invalid: boolean,
   *   inputElement: (Element|undefined),
   *   value: (string|undefined)
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function(state){}};

/*
`<paper-input-char-counter>` is a character counter for use with
`<paper-input-container>`. It shows the number of characters entered in the
input and the max length if it is specified.

    <paper-input-container>
      <input maxlength="20">
      <paper-input-char-counter></paper-input-char-counter>
    </paper-input-container>

### Styling

The following mixin is available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-char-counter` | Mixin applied to the element | `{}`
*/Polymer({/** @override */_template:html`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:'paper-input-char-counter',behaviors:[PaperInputAddonBehavior],properties:{_charCounterStr:{type:String,value:'0'}},/**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function(state){if(!state.inputElement){return;}state.value=state.value||'';var counter=state.value.toString().length.toString();if(state.inputElement.hasAttribute('maxlength')){counter+='/'+state.inputElement.getAttribute('maxlength');}this._charCounterStr=counter;}});

const template$1=html`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;template$1.setAttribute('style','display: none;');document.head.appendChild(template$1.content);/*
`<paper-input-container>` is a container for a `<label>`, an `<iron-input>` or
`<textarea>` and optional add-on elements such as an error message or character
counter, used to implement Material Design text fields.

For example:

    <paper-input-container>
      <label slot="label">Your name</label>
      <iron-input slot="input">
        <input>
      </iron-input>
      // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
instead of the above.
    </paper-input-container>

You can style the nested `<input>` however you want; if you want it to look like
a Material Design input, you can style it with the
--paper-input-container-shared-input-style mixin.

Do not wrap `<paper-input-container>` around elements that already include it,
such as `<paper-input>`. Doing so may cause events to bounce infinitely between
the container and its contained element.

### Listening for input changes

By default, it listens for changes on the `bind-value` attribute on its children
nodes and perform tasks such as auto-validating and label styling when the
`bind-value` changes. You can configure the attribute it listens to with the
`attr-for-value` attribute.

### Using a custom input element

You can use a custom input element in a `<paper-input-container>`, for example
to implement a compound input field like a social security number input. The
custom input element should have the `paper-input-input` class, have a
`notify:true` value property and optionally implements
`Polymer.IronValidatableBehavior` if it is validatable.

    <paper-input-container attr-for-value="ssn-value">
      <label slot="label">Social security number</label>
      <ssn-input slot="input" class="paper-input-input"></ssn-input>
    </paper-input-container>


If you're using a `<paper-input-container>` imperatively, it's important to make
sure that you attach its children (the `iron-input` and the optional `label`)
before you attach the `<paper-input-container>` itself, so that it can be set up
correctly.

### Validation

If the `auto-validate` attribute is set, the input container will validate the
input and update the container styling when the input value changes.

### Add-ons

Add-ons are child elements of a `<paper-input-container>` with the `add-on`
attribute and implements the `Polymer.PaperInputAddonBehavior` behavior. They
are notified when the input value or validity changes, and may implement
functionality such as error messages or character counters. They appear at the
bottom of the input.

### Prefixes and suffixes
These are child elements of a `<paper-input-container>` with the `prefix`
or `suffix` attribute, and are displayed inline with the input, before or after.

    <paper-input-container>
      <div slot="prefix">$</div>
      <label slot="label">Total</label>
      <iron-input slot="input">
        <input>
      </iron-input>
      // In Polymer 1.0, you would use `<input is="iron-input" slot="input">`
instead of the above. <paper-icon-button slot="suffix"
icon="clear"></paper-icon-button>
    </paper-input-container>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-color` | Label and underline color when the input is not focused | `--secondary-text-color`
`--paper-input-container-focus-color` | Label and underline color when the input is focused | `--primary-color`
`--paper-input-container-invalid-color` | Label and underline color when the input is is invalid | `--error-color`
`--paper-input-container-input-color` | Input foreground color | `--primary-text-color`
`--paper-input-container` | Mixin applied to the container | `{}`
`--paper-input-container-disabled` | Mixin applied to the container when it's disabled | `{}`
`--paper-input-container-label` | Mixin applied to the label | `{}`
`--paper-input-container-label-focus` | Mixin applied to the label when the input is focused | `{}`
`--paper-input-container-label-floating` | Mixin applied to the label when floating | `{}`
`--paper-input-container-input` | Mixin applied to the input | `{}`
`--paper-input-container-input-align` | The vertical-align property of the input | `bottom`
`--paper-input-container-input-disabled` | Mixin applied to the input when the component is disabled | `{}`
`--paper-input-container-input-focus` | Mixin applied to the input when focused | `{}`
`--paper-input-container-input-invalid` | Mixin applied to the input when invalid | `{}`
`--paper-input-container-input-webkit-spinner` | Mixin applied to the webkit spinner | `{}`
`--paper-input-container-input-webkit-clear` | Mixin applied to the webkit clear button | `{}`
`--paper-input-container-input-webkit-calendar-picker-indicator` | Mixin applied to the webkit calendar picker indicator | `{}`
`--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer clear button | `{}`
`--paper-input-container-underline` | Mixin applied to the underline | `{}`
`--paper-input-container-underline-focus` | Mixin applied to the underline when the input is focused | `{}`
`--paper-input-container-underline-disabled` | Mixin applied to the underline when the input is disabled | `{}`
`--paper-input-prefix` | Mixin applied to the input prefix | `{}`
`--paper-input-suffix` | Mixin applied to the input suffix | `{}`
`--paper-input-container-label-before` | Mixin applied to label before pseudo element | {}
`--paper-input-container-label-after` | Mixin applied to label after pseudo element (useful for required asterisk) | {}

This element is `display:block` by default, but you can set the `inline`
attribute to make it `display:inline-block`.
*/Polymer({/** @override */_template:html`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:'paper-input-container',properties:{/**
     * Set to true to disable the floating label. The label disappears when the
     * input value is not null.
     */noLabelFloat:{type:Boolean,value:false},/**
     * Set to true to always float the floating label.
     */alwaysFloatLabel:{type:Boolean,value:false},/**
     * The attribute to listen for value changes on.
     */attrForValue:{type:String,value:'bind-value'},/**
     * Set to true to auto-validate the input value when it changes.
     */autoValidate:{type:Boolean,value:false},/**
     * True if the input is invalid. This property is set automatically when the
     * input value changes if auto-validating, or when the `iron-input-validate`
     * event is heard from a child.
     */invalid:{observer:'_invalidChanged',type:Boolean,value:false},/**
     * True if the input has focus.
     */focused:{readOnly:true,type:Boolean,value:false,notify:true},_addons:{type:Array// do not set a default value here intentionally - it will be initialized
// lazily when a distributed child is attached, which may occur before
// configuration for this element in polyfill.
},_inputHasContent:{type:Boolean,value:false},_inputSelector:{type:String,value:'input,iron-input,textarea,.paper-input-input'},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this);}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this);}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this);}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this);}}},listeners:{'addon-attached':'_onAddonAttached','iron-input-validate':'_onIronInputValidate'},get _valueChangedEvent(){return this.attrForValue+'-changed';},get _propertyForValue(){return dashToCamelCase(this.attrForValue);},get _inputElement(){return dom(this).querySelector(this._inputSelector);},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value;},/** @override */ready:function(){// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. We need to track whether the first time we
// encounter the value is basically this first time, so that we can validate
// it correctly the rest of the time. See
// https://github.com/PolymerElements/paper-input/issues/605
this.__isFirstValueUpdate=true;if(!this._addons){this._addons=[];}this.addEventListener('focus',this._boundOnFocus,true);this.addEventListener('blur',this._boundOnBlur,true);},/** @override */attached:function(){if(this.attrForValue){this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged);}else {this.addEventListener('input',this._onInput);}// Only validate when attached if the input already has a value.
if(this._inputElementValue&&this._inputElementValue!=''){this._handleValueAndAutoValidate(this._inputElement);}else {this._handleValue(this._inputElement);}},/** @private */_onAddonAttached:function(event){if(!this._addons){this._addons=[];}var target=event.target;if(this._addons.indexOf(target)===-1){this._addons.push(target);if(this.isAttached){this._handleValue(this._inputElement);}}},/** @private */_onFocus:function(){this._setFocused(true);},/** @private */_onBlur:function(){this._setFocused(false);this._handleValueAndAutoValidate(this._inputElement);},/** @private */_onInput:function(event){this._handleValueAndAutoValidate(event.target);},/** @private */_onValueChanged:function(event){var input=event.target;// Paper-input treats a value of undefined differently at startup than
// the rest of the time (specifically: it does not validate it at startup,
// but it does after that. If this is in fact the bootup case, ignore
// validation, just this once.
if(this.__isFirstValueUpdate){this.__isFirstValueUpdate=false;if(input.value===undefined||input.value===''){return;}}this._handleValueAndAutoValidate(event.target);},/** @private */_handleValue:function(inputElement){var value=this._inputElementValue;// type="number" hack needed because this.value is empty until it's valid
if(value||value===0||inputElement.type==='number'&&!inputElement.checkValidity()){this._inputHasContent=true;}else {this._inputHasContent=false;}this.updateAddons({inputElement:inputElement,value:value,invalid:this.invalid});},/** @private */_handleValueAndAutoValidate:function(inputElement){if(this.autoValidate&&inputElement){var valid;if(inputElement.validate){valid=inputElement.validate(this._inputElementValue);}else {valid=inputElement.checkValidity();}this.invalid=!valid;}// Call this last to notify the add-ons.
this._handleValue(inputElement);},/** @private */_onIronInputValidate:function(event){this.invalid=this._inputElement.invalid;},/** @private */_invalidChanged:function(){if(this._addons){this.updateAddons({invalid:this.invalid});}},/**
   * Call this to update the state of add-ons.
   * @param {Object} state Add-on state.
   */updateAddons:function(state){for(var addon,index=0;addon=this._addons[index];index++){addon.update(state);}},/** @private */_computeInputContentClass:function(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent){var cls='input-content';if(!noLabelFloat){var label=this.querySelector('label');if(alwaysFloatLabel||_inputHasContent){cls+=' label-is-floating';// If the label is floating, ignore any offsets that may have been
// applied from a prefix element.
this.$.labelAndInputContainer.style.position='static';if(invalid){cls+=' is-invalid';}else if(focused){cls+=' label-is-highlighted';}}else {// When the label is not floating, it should overlap the input element.
if(label){this.$.labelAndInputContainer.style.position='relative';}if(invalid){cls+=' is-invalid';}}}else {if(_inputHasContent){cls+=' label-is-hidden';}if(invalid){cls+=' is-invalid';}}if(focused){cls+=' focused';}return cls;},/** @private */_computeUnderlineClass:function(focused,invalid){var cls='underline';if(invalid){cls+=' is-invalid';}else if(focused){cls+=' is-highlighted';}return cls;},/** @private */_computeAddOnContentClass:function(focused,invalid){var cls='add-on-content';if(invalid){cls+=' is-invalid';}else if(focused){cls+=' is-highlighted';}return cls;}});

/*
`<paper-input-error>` is an error message for use with
`<paper-input-container>`. The error is displayed when the
`<paper-input-container>` is `invalid`.

    <paper-input-container>
      <input pattern="[0-9]*">
      <paper-input-error slot="add-on">Only numbers are
allowed!</paper-input-error>
    </paper-input-container>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-invalid-color` | The foreground color of the error | `--error-color`
`--paper-input-error` | Mixin applied to the error | `{}`
*/Polymer({/** @override */_template:html`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:'paper-input-error',behaviors:[PaperInputAddonBehavior],properties:{/**
     * True if the error is showing.
     */invalid:{readOnly:true,reflectToAttribute:true,type:Boolean}},/**
   * This overrides the update function in PaperInputAddonBehavior.
   * @param {{
   *   inputElement: (Element|undefined),
   *   value: (string|undefined),
   *   invalid: boolean
   * }} state -
   *     inputElement: The input element.
   *     value: The input value.
   *     invalid: True if the input value is invalid.
   */update:function(state){this._setInvalid(state.invalid);}});

/**
  IronFormElementBehavior adds a `name`, `value` and `required` properties to
  a custom element. It mostly exists for backcompatibility with Polymer 1.x, and
  is probably not something you want to use.

  @demo demo/index.html
  @polymerBehavior
 */const IronFormElementBehavior={properties:{/**
     * The name of this element.
     */name:{type:String},/**
     * The value for this element.
     * @type {*}
     */value:{notify:true,type:String},/**
     * Set to true to mark the input as required. If used in a form, a
     * custom element that uses this behavior should also use
     * IronValidatableBehavior and define a custom validation method.
     * Otherwise, a `required` element will always be considered valid.
     * It's also strongly recommended to provide a visual style for the element
     * when its value is invalid.
     */required:{type:Boolean,value:false}},// Empty implementations for backcompatibility.
attached:function(){},detached:function(){}};

/**
 * Chrome uses an older version of DOM Level 3 Keyboard Events
 *
 * Most keys are labeled as text, but some are Unicode codepoints.
 * Values taken from:
 * http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
 */var KEY_IDENTIFIER={'U+0008':'backspace','U+0009':'tab','U+001B':'esc','U+0020':'space','U+007F':'del'};/**
 * Special table for KeyboardEvent.keyCode.
 * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
 * than that.
 *
 * Values from:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
 */var KEY_CODE={8:'backspace',9:'tab',13:'enter',27:'esc',33:'pageup',34:'pagedown',35:'end',36:'home',32:'space',37:'left',38:'up',39:'right',40:'down',46:'del',106:'*'};/**
 * MODIFIER_KEYS maps the short name for modifier keys used in a key
 * combo string to the property name that references those same keys
 * in a KeyboardEvent instance.
 */var MODIFIER_KEYS={'shift':'shiftKey','ctrl':'ctrlKey','alt':'altKey','meta':'metaKey'};/**
 * KeyboardEvent.key is mostly represented by printable character made by
 * the keyboard, with unprintable keys labeled nicely.
 *
 * However, on OS X, Alt+char can make a Unicode character that follows an
 * Apple-specific mapping. In this case, we fall back to .keyCode.
 */var KEY_CHAR=/[a-z0-9*]/;/**
 * Matches a keyIdentifier string.
 */var IDENT_CHAR=/U\+/;/**
 * Matches arrow keys in Gecko 27.0+
 */var ARROW_KEY=/^arrow/;/**
 * Matches space keys everywhere (notably including IE10's exceptional name
 * `spacebar`).
 */var SPACE_KEY=/^space(bar)?/;/**
 * Matches ESC key.
 *
 * Value from: http://w3c.github.io/uievents-key/#key-Escape
 */var ESC_KEY=/^escape$/;/**
 * Transforms the key.
 * @param {string} key The KeyBoardEvent.key
 * @param {Boolean} [noSpecialChars] Limits the transformation to
 * alpha-numeric characters.
 */function transformKey(key,noSpecialChars){var validKey='';if(key){var lKey=key.toLowerCase();if(lKey===' '||SPACE_KEY.test(lKey)){validKey='space';}else if(ESC_KEY.test(lKey)){validKey='esc';}else if(lKey.length==1){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey;}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace('arrow','');}else if(lKey=='multiply'){// numpad '*' can map to Multiply on IE/Windows
validKey='*';}else {validKey=lKey;}}return validKey;}function transformKeyIdentifier(keyIdent){var validKey='';if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent];}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace('U+','0x'),16);validKey=String.fromCharCode(keyIdent).toLowerCase();}else {validKey=keyIdent.toLowerCase();}}return validKey;}function transformKeyCode(keyCode){var validKey='';if(Number(keyCode)){if(keyCode>=65&&keyCode<=90){// ascii a-z
// lowercase is 32 offset from uppercase
validKey=String.fromCharCode(32+keyCode);}else if(keyCode>=112&&keyCode<=123){// function keys f1-f12
validKey='f'+(keyCode-112+1);}else if(keyCode>=48&&keyCode<=57){// top 0-9 keys
validKey=String(keyCode-48);}else if(keyCode>=96&&keyCode<=105){// num pad 0-9
validKey=String(keyCode-96);}else {validKey=KEY_CODE[keyCode];}}return validKey;}/**
 * Calculates the normalized key for a KeyboardEvent.
 * @param {KeyboardEvent} keyEvent
 * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
 * transformation to alpha-numeric chars. This is useful with key
 * combinations like shift + 2, which on FF for MacOS produces
 * keyEvent.key = @
 * To get 2 returned, set noSpecialChars = true
 * To get @ returned, set noSpecialChars = false
 */function normalizedKeyForEvent(keyEvent,noSpecialChars){// Fall back from .key, to .detail.key for artifical keyboard events,
// and then to deprecated .keyIdentifier and .keyCode.
if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars);}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars);}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||'';}function keyComboMatchesEvent(keyCombo,event){// For combos with modifiers we support only alpha-numeric keys
var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey);}function parseKeyComboString(keyComboString){if(keyComboString.length===1){return {combo:keyComboString,key:keyComboString,event:'keydown'};}return keyComboString.split('+').reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(':');var keyName=eventParts[0];var event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=true;parsedKeyCombo.hasModifiers=true;}else {parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||'keydown';}return parsedKeyCombo;},{combo:keyComboString.split(':').shift()});}function parseEventString(eventString){return eventString.trim().split(' ').map(function(keyComboString){return parseKeyComboString(keyComboString);});}/**
 * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
 * keyboard commands that pertain to [WAI-ARIA best
 * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
 * element takes care of browser differences with respect to Keyboard events and
 * uses an expressive syntax to filter key presses.
 *
 * Use the `keyBindings` prototype property to express what combination of keys
 * will trigger the callback. A key binding has the format
 * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
 * `"KEY:EVENT": "callback"` are valid as well). Some examples:
 *
 *      keyBindings: {
 *        'space': '_onKeydown', // same as 'space:keydown'
 *        'shift+tab': '_onKeydown',
 *        'enter:keypress': '_onKeypress',
 *        'esc:keyup': '_onKeyup'
 *      }
 *
 * The callback will receive with an event containing the following information
 * in `event.detail`:
 *
 *      _onKeydown: function(event) {
 *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
 *        console.log(event.detail.key); // KEY only, e.g. "tab"
 *        console.log(event.detail.event); // EVENT, e.g. "keydown"
 *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
 *      }
 *
 * Use the `keyEventTarget` attribute to set up event handlers on a specific
 * node.
 *
 * See the [demo source
 * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
 * for an example.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */const IronA11yKeysBehavior={properties:{/**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */keyEventTarget:{type:Object,value:function(){return this;}},/**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */stopKeyboardEventPropagation:{type:Boolean,value:false},_boundKeyHandlers:{type:Array,value:function(){return [];}},// We use this due to a limitation in IE10 where instances will have
// own properties of everything on the "prototype".
_imperativeKeyBindings:{type:Object,value:function(){return {};}}},observers:['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],/**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */keyBindings:{},registered:function(){this._prepKeyBindings();},attached:function(){this._listenKeyEventListeners();},detached:function(){this._unlistenKeyEventListeners();},/**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners();},/**
   * When called, will remove all imperatively-added key bindings.
   */removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners();},/**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */keyboardEventMatchesKeys:function(event,eventString){var keyCombos=parseEventString(eventString);for(var i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return true;}}return false;},_collectKeyBindings:function(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings;});if(keyBindings.indexOf(this.keyBindings)===-1){keyBindings.push(this.keyBindings);}return keyBindings;},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString]);}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString]);}// Give precedence to combos with modifiers to be checked first.
for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers;var b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1;});}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName]);},this);},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners();}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return;}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName];var boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler);},this);},_unlistenKeyEventListeners:function(){var keyHandlerTuple;var keyEventTarget;var eventName;var boundKeyHandler;while(this._boundKeyHandlers.length){// My kingdom for block-scope binding and destructuring assignment..
keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler);}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation();}// if event has been already prevented, don't do anything
if(event.defaultPrevented){return;}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0];var handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);// exit the loop if eventDefault was prevented
if(event.defaultPrevented){return;}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:true});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault();}}};

/**
 * @demo demo/index.html
 * @polymerBehavior
 */const IronControlState={properties:{/**
     * If true, the element currently has focus.
     */focused:{type:Boolean,value:false,notify:true,readOnly:true,reflectToAttribute:true},/**
     * If true, the user cannot interact with this element.
     */disabled:{type:Boolean,value:false,notify:true,observer:'_disabledChanged',reflectToAttribute:true},/**
     * Value of the `tabindex` attribute before `disabled` was activated.
     * `null` means the attribute was not present.
     * @type {?string|undefined}
     */_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this);}}},observers:['_changedControlState(focused, disabled)'],/**
   * @return {void}
   */ready:function(){this.addEventListener('focus',this._boundFocusBlurHandler,true);this.addEventListener('blur',this._boundFocusBlurHandler,true);},_focusBlurHandler:function(event){// Polymer takes care of retargeting events.
this._setFocused(event.type==='focus');return;},_disabledChanged:function(disabled,old){this.setAttribute('aria-disabled',disabled?'true':'false');this.style.pointerEvents=disabled?'none':'';if(disabled){// Read the `tabindex` attribute instead of the `tabIndex` property.
// The property returns `-1` if there is no `tabindex` attribute.
// This distinction is important when restoring the value because
// leaving `-1` hides shadow root children from the tab order.
this._oldTabIndex=this.getAttribute('tabindex');this._setFocused(false);this.tabIndex=-1;this.blur();}else if(this._oldTabIndex!==undefined){if(this._oldTabIndex===null){this.removeAttribute('tabindex');}else {this.setAttribute('tabindex',this._oldTabIndex);}}},_changedControlState:function(){// _controlStateChanged is abstract, follow-on behaviors may implement it
if(this._controlStateChanged){this._controlStateChanged();}}};

// aria-labelledby) and add-ons.
const PaperInputHelper={};PaperInputHelper.NextLabelID=1;PaperInputHelper.NextAddonID=1;PaperInputHelper.NextInputID=1;/**
 * Use `PaperInputBehavior` to implement inputs with `<paper-input-container>`.
 * This behavior is implemented by `<paper-input>`. It exposes a number of
 * properties from `<paper-input-container>` and `<input is="iron-input">` and
 * they should be bound in your template.
 *
 * The input element can be accessed by the `inputElement` property if you need
 * to access properties or methods that are not exposed.
 * @polymerBehavior PaperInputBehavior
 */const PaperInputBehaviorImpl={properties:{/**
     * Fired when the input changes due to user interaction.
     *
     * @event change
     */ /**
     * The label for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * `<label>`'s content and `hidden` property, e.g.
     * `<label hidden$="[[!label]]">[[label]]</label>` in your `template`
     */label:{type:String},/**
     * The value for this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<iron-input>`'s `bindValue`
     * property, or the value property of your input that is `notify:true`.
     * @type {*}
     */value:{notify:true,type:String},/**
     * Set to true to disable this input. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * both the `<paper-input-container>`'s and the input's `disabled` property.
     */disabled:{type:Boolean,value:false},/**
     * Returns true if the value is invalid. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to both the
     * `<paper-input-container>`'s and the input's `invalid` property.
     *
     * If `autoValidate` is true, the `invalid` attribute is managed
     * automatically, which can clobber attempts to manage it manually.
     */invalid:{type:Boolean,value:false,notify:true},/**
     * Set this to specify the pattern allowed by `preventInvalidInput`. If
     * you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `allowedPattern`
     * property.
     */allowedPattern:{type:String},/**
     * The type of the input. The supported types are the
     * [native input's
     * types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the (Polymer 1) `<input is="iron-input">`'s or
     * (Polymer 2)
     * `<iron-input>`'s `type` property.
     */type:{type:String},/**
     * The datalist of the input (if any). This should match the id of an
     * existing `<datalist>`. If you're using PaperInputBehavior to implement
     * your own paper-input-like element, bind this to the `<input
     * is="iron-input">`'s `list` property.
     */list:{type:String},/**
     * A pattern to validate the `input` with. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `pattern` property.
     */pattern:{type:String},/**
     * Set to true to mark the input as required. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<input is="iron-input">`'s `required` property.
     */required:{type:Boolean,value:false},/**
     * The error message to display when the input is invalid. If you're using
     * PaperInputBehavior to implement your own paper-input-like element,
     * bind this to the `<paper-input-error>`'s content, if using.
     */errorMessage:{type:String},/**
     * Set to true to show a character counter.
     */charCounter:{type:Boolean,value:false},/**
     * Set to true to disable the floating label. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `noLabelFloat` property.
     */noLabelFloat:{type:Boolean,value:false},/**
     * Set to true to always float the label. If you're using PaperInputBehavior
     * to implement your own paper-input-like element, bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */alwaysFloatLabel:{type:Boolean,value:false},/**
     * Set to true to auto-validate the input value. If you're using
     * PaperInputBehavior to implement your own paper-input-like element, bind
     * this to the `<paper-input-container>`'s `autoValidate` property.
     */autoValidate:{type:Boolean,value:false},/**
     * Name of the validator to use. If you're using PaperInputBehavior to
     * implement your own paper-input-like element, bind this to
     * the `<input is="iron-input">`'s `validator` property.
     */validator:{type:String},// HTMLInputElement attributes for binding if needed
/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocomplete`
     * property.
     */autocomplete:{type:String,value:'off'},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autofocus`
     * property.
     *
     * @type {!boolean}
     */autofocus:{type:Boolean,observer:'_autofocusChanged'},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `inputmode`
     * property.
     */inputmode:{type:String},/**
     * The minimum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `minlength`
     * property.
     */minlength:{type:Number},/**
     * The maximum length of the input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `maxlength`
     * property.
     */maxlength:{type:Number},/**
     * The minimum (numeric or date-time) input value.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `min` property.
     */min:{type:String},/**
     * The maximum (numeric or date-time) input value.
     * Can be a String (e.g. `"2000-01-01"`) or a Number (e.g. `2`).
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `max` property.
     */max:{type:String},/**
     * Limits the numeric or date-time increments.
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `step` property.
     */step:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `name` property.
     */name:{type:String},/**
     * A placeholder string in addition to the label. If this is set, the label
     * will always float.
     */placeholder:{type:String,// need to set a default so _computeAlwaysFloatLabel is run
value:''},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `readonly`
     * property.
     */readonly:{type:Boolean,value:false},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `size` property.
     */size:{type:Number},// Nonstandard attributes for binding if needed
/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocapitalize`
     * property.
     *
     * @type {string}
     */autocapitalize:{type:String,value:'none'},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autocorrect`
     * property.
     */autocorrect:{type:String,value:'off'},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `autosave`
     * property, used with type=search.
     */autosave:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `results` property,
     * used with type=search.
     */results:{type:Number},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the `<input is="iron-input">`'s `accept` property,
     * used with type=file.
     */accept:{type:String},/**
     * If you're using PaperInputBehavior to implement your own paper-input-like
     * element, bind this to the`<input is="iron-input">`'s `multiple` property,
     * used with type=file.
     */multiple:{type:Boolean},/** @private */_ariaDescribedBy:{type:String,value:''},/** @private */_ariaLabelledBy:{type:String,value:''},/** @private */_inputId:{type:String,value:''}},listeners:{'addon-attached':'_onAddonAttached'},/**
   * @type {!Object}
   */keyBindings:{'shift+tab:keydown':'_onShiftTabDown'},/** @private */hostAttributes:{tabindex:0},/**
   * Returns a reference to the input element.
   * @return {!HTMLElement}
   */get inputElement(){// Chrome generates audit errors if an <input type="password"> has a
// duplicate ID, which is almost always true in Shady DOM. Generate
// a unique ID instead.
if(!this.$){this.$={};}if(!this.$.input){this._generateInputId();this.$.input=this.$$('#'+this._inputId);}return this.$.input;},/**
   * Returns a reference to the focusable element.
   * @return {!HTMLElement}
   */get _focusableElement(){return this.inputElement;},/** @override */created:function(){// These types have some default placeholder text; overlapping
// the label on top of it looks terrible. Auto-float the label in this case.
this._typesThatHaveText=['date','datetime','datetime-local','month','time','week','file'];},/** @override */attached:function(){this._updateAriaLabelledBy();// In the 2.0 version of the element, this is handled in `onIronInputReady`,
// i.e. after the native input has finished distributing. In the 1.0
// version, the input is in the shadow tree, so it's already available.
if(!PolymerElement&&this.inputElement&&this._typesThatHaveText.indexOf(this.inputElement.type)!==-1){this.alwaysFloatLabel=true;}},_appendStringWithSpace:function(str,more){if(str){str=str+' '+more;}else {str=more;}return str;},_onAddonAttached:function(event){var target=dom(event).rootTarget;if(target.id){this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,target.id);}else {var id='paper-input-add-on-'+PaperInputHelper.NextAddonID++;target.id=id;this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,id);}},/**
   * Validates the input element and sets an error style if needed.
   *
   * @return {boolean}
   */validate:function(){return this.inputElement.validate();},/**
   * Forward focus to inputElement. Overriden from IronControlState.
   */_focusBlurHandler:function(event){IronControlState._focusBlurHandler.call(this,event);// Forward the focus to the nested input.
if(this.focused&&!this._shiftTabPressed&&this._focusableElement){this._focusableElement.focus();}},/**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */_onShiftTabDown:function(event){var oldTabIndex=this.getAttribute('tabindex');this._shiftTabPressed=true;this.setAttribute('tabindex','-1');this.async(function(){this.setAttribute('tabindex',oldTabIndex);this._shiftTabPressed=false;},1);},/**
   * If `autoValidate` is true, then validates the element.
   */_handleAutoValidate:function(){if(this.autoValidate)this.validate();},/**
   * Restores the cursor to its original position after updating the value.
   * @param {string} newValue The value that should be saved.
   */updateValueAndPreserveCaret:function(newValue){// Not all elements might have selection, and even if they have the
// right properties, accessing them might throw an exception (like for
// <input type=number>)
try{var start=this.inputElement.selectionStart;this.value=newValue;// The cursor automatically jumps to the end after re-setting the value,
// so restore it to its original position.
this.inputElement.selectionStart=start;this.inputElement.selectionEnd=start;}catch(e){// Just set the value and give up on the caret.
this.value=newValue;}},_computeAlwaysFloatLabel:function(alwaysFloatLabel,placeholder){return placeholder||alwaysFloatLabel;},_updateAriaLabelledBy:function(){var label=dom(this.root).querySelector('label');if(!label){this._ariaLabelledBy='';return;}var labelledBy;if(label.id){labelledBy=label.id;}else {labelledBy='paper-input-label-'+PaperInputHelper.NextLabelID++;label.id=labelledBy;}this._ariaLabelledBy=labelledBy;},_generateInputId:function(){if(!this._inputId||this._inputId===''){this._inputId='input-'+PaperInputHelper.NextInputID++;}},_onChange:function(event){// In the Shadow DOM, the `change` event is not leaked into the
// ancestor tree, so we must do this manually.
// See
// https://w3c.github.io/webcomponents/spec/shadow/#events-that-are-not-leaked-into-ancestor-trees.
if(this.shadowRoot){this.fire(event.type,{sourceEvent:event},{node:this,bubbles:event.bubbles,cancelable:event.cancelable});}},_autofocusChanged:function(){// Firefox doesn't respect the autofocus attribute if it's applied after
// the page is loaded (Chrome/WebKit do respect it), preventing an
// autofocus attribute specified in markup from taking effect when the
// element is upgraded. As a workaround, if the autofocus property is set,
// and the focus hasn't already been moved elsewhere, we take focus.
if(this.autofocus&&this._focusableElement){// In IE 11, the default document.activeElement can be the page's
// outermost html element, but there are also cases (under the
// polyfill?) in which the activeElement is not a real HTMLElement, but
// just a plain object. We identify the latter case as having no valid
// activeElement.
var activeElement=document.activeElement;var isActiveElementValid=activeElement instanceof HTMLElement;// Has some other element has already taken the focus?
var isSomeElementActive=isActiveElementValid&&activeElement!==document.body&&activeElement!==document.documentElement;/* IE 11 */if(!isSomeElementActive){// No specific element has taken the focus yet, so we can take it.
this._focusableElement.focus();}}}};/** @polymerBehavior */const PaperInputBehavior=[IronControlState,IronA11yKeysBehavior,PaperInputBehaviorImpl];

/**
Material design: [Text
fields](https://www.google.com/design/spec/components/text-fields.html)

`<paper-input>` is a single-line text field with Material Design styling.

    <paper-input label="Input label"></paper-input>

It may include an optional error message or character counter.

    <paper-input error-message="Invalid input!" label="Input
    label"></paper-input> <paper-input char-counter label="Input
    label"></paper-input>

It can also include custom prefix or suffix elements, which are displayed
before or after the text input itself. In order for an element to be
considered as a prefix, it must have the `prefix` attribute (and similarly
for `suffix`).

    <paper-input label="total">
      <div prefix>$</div>
      <paper-icon-button slot="suffix" icon="clear"></paper-icon-button>
    </paper-input>

A `paper-input` can use the native `type=search` or `type=file` features.
However, since we can't control the native styling of the input (search icon,
file button, date placeholder, etc.), in these cases the label will be
automatically floated. The `placeholder` attribute can still be used for
additional informational text.

    <paper-input label="search!" type="search"
        placeholder="search for cats" autosave="test" results="5">
    </paper-input>

See `Polymer.PaperInputBehavior` for more API docs.

### Focus

To focus a paper-input, you can call the native `focus()` method as long as the
paper input has a tab index. Similarly, `blur()` will blur the element.

### Styling

See `Polymer.PaperInputContainer` for a list of custom properties used to
style this element.

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-ms-clear` | Mixin applied to the Internet Explorer reveal button (the eyeball) | {}

@element paper-input
@demo demo/index.html
*/Polymer({is:'paper-input',/** @override */_template:html`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `,behaviors:[PaperInputBehavior,IronFormElementBehavior],properties:{value:{// Required for the correct TypeScript type-generation
type:String},inputRole:{type:String,value:undefined},inputAriaHaspopup:{type:String,value:undefined}},/**
   * Returns a reference to the focusable element. Overridden from
   * PaperInputBehavior to correctly focus the native input.
   *
   * @return {!HTMLElement}
   */get _focusableElement(){return this.inputElement._inputElement;},// Note: This event is only available in the 1.0 version of this element.
// In 2.0, the functionality of `_onIronInputReady` is done in
// PaperInputBehavior::attached.
listeners:{'iron-input-ready':'_onIronInputReady'},_onIronInputReady:function(){// Even though this is only used in the next line, save this for
// backwards compatibility, since the native input had this ID until 2.0.5.
if(!this.$.nativeInput){this.$.nativeInput=/** @type {!Element} */this.$$('input');}if(this.inputElement&&this._typesThatHaveText.indexOf(this.$.nativeInput.type)!==-1){this.alwaysFloatLabel=true;}// Only validate when attached if the input already has a value.
if(!!this.inputElement.bindValue){this.$.container._handleValueAndAutoValidate(this.inputElement);}}});

/**
 * `iron-range-behavior` provides the behavior for something with a minimum to
 * maximum range.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */const IronRangeBehavior={properties:{/**
     * The number that represents the current value.
     */value:{type:Number,value:0,notify:true,reflectToAttribute:true},/**
     * The number that indicates the minimum value of the range.
     */min:{type:Number,value:0,notify:true},/**
     * The number that indicates the maximum value of the range.
     */max:{type:Number,value:100,notify:true},/**
     * Specifies the value granularity of the range's value.
     */step:{type:Number,value:1,notify:true},/**
     * Returns the ratio of the value.
     */ratio:{type:Number,value:0,readOnly:true,notify:true}},observers:['_update(value, min, max, step)'],_calcRatio:function(value){return (this._clampValue(value)-this.min)/(this.max-this.min);},_clampValue:function(value){return Math.min(this.max,Math.max(this.min,this._calcStep(value)));},_calcStep:function(value){// polymer/issues/2493
value=parseFloat(value);if(!this.step){return value;}var numSteps=Math.round((value-this.min)/this.step);if(this.step<1){/**
       * For small values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can divide by the reciprocal of `step`
       */return numSteps/(1/this.step)+this.min;}else {return numSteps*this.step+this.min;}},_validateValue:function(){var v=this._clampValue(this.value);this.value=this.oldValue=isNaN(v)?this.oldValue:v;return this.value!==v;},_update:function(){this._validateValue();this._setRatio(this._calcRatio(this.value)*100);}};

/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

The progress bars are for situations where the percentage completed can be
determined. They give users a quick sense of how much longer an operation
will take.

Example:

    <paper-progress value="10"></paper-progress>

There is also a secondary progress which is useful for displaying intermediate
progress, such as the buffer level during a streaming playback progress bar.

Example:

    <paper-progress value="10" secondary-progress="30"></paper-progress>

### Styling progress bar:

To change the active progress bar color:

    paper-progress {
       --paper-progress-active-color: #e91e63;
    }

To change the secondary progress bar color:

    paper-progress {
      --paper-progress-secondary-color: #f8bbd0;
    }

To change the progress bar background color:

    paper-progress {
      --paper-progress-container-color: #64ffda;
    }

Add the class `transiting` to a paper-progress to animate the progress bar when
the value changed. You can also customize the transition:

    paper-progress {
      --paper-progress-transition-duration: 0.08s;
      --paper-progress-transition-timing-function: ease;
      --paper-progress-transition-delay: 0s;
    }

To change the duration of the indeterminate cycle:

    paper-progress {
      --paper-progress-indeterminate-cycle-duration: 2s;
    }

The following mixins are available for styling:

Custom property | Description | Default
----------------|-------------|---------
`--paper-progress-container` | Mixin applied to container | `{}`
`--paper-progress-transition-duration` | Duration of the transition | `0.08s`
`--paper-progress-transition-timing-function` | The timing function for the transition | `ease`
`--paper-progress-transition-delay` | delay for the transition | `0s`
`--paper-progress-container-color` | Color of the container | `--google-grey-300`
`--paper-progress-active-color` | The color of the active bar | `--google-green-500`
`--paper-progress-secondary-color` | The color of the secondary bar | `--google-green-100`
`--paper-progress-disabled-active-color` | The color of the active bar if disabled | `--google-grey-500`
`--paper-progress-disabled-secondary-color` | The color of the secondary bar if disabled  | `--google-grey-300`
`--paper-progress-height` | The height of the progress bar | `4px`
`--paper-progress-indeterminate-cycle-duration` | Duration of an indeterminate cycle | `2s`

@group Paper Elements
@element paper-progress
@demo demo/index.html
*/Polymer({_template:html`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:'paper-progress',behaviors:[IronRangeBehavior],properties:{/**
     * The number that represents the current secondary progress.
     */secondaryProgress:{type:Number,value:0},/**
     * The secondary ratio
     */secondaryRatio:{type:Number,value:0,readOnly:true},/**
     * Use an indeterminate progress indicator.
     */indeterminate:{type:Boolean,value:false,observer:'_toggleIndeterminate'},/**
     * True if the progress is disabled.
     */disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:'_disabledChanged'}},observers:['_progressChanged(secondaryProgress, value, min, max, indeterminate)'],hostAttributes:{role:'progressbar'},_toggleIndeterminate:function(indeterminate){// If we use attribute/class binding, the animation sometimes doesn't
// translate properly on Safari 7.1. So instead, we toggle the class here in
// the update method.
this.toggleClass('indeterminate',indeterminate,this.$.primaryProgress);},_transformProgress:function(progress,ratio){var transform='scaleX('+ratio/100+')';progress.style.transform=progress.style.webkitTransform=transform;},_mainRatioChanged:function(ratio){this._transformProgress(this.$.primaryProgress,ratio);},_progressChanged:function(secondaryProgress,value,min,max,indeterminate){secondaryProgress=this._clampValue(secondaryProgress);value=this._clampValue(value);var secondaryRatio=this._calcRatio(secondaryProgress)*100;var mainRatio=this._calcRatio(value)*100;this._setSecondaryRatio(secondaryRatio);this._transformProgress(this.$.secondaryProgress,secondaryRatio);this._transformProgress(this.$.primaryProgress,mainRatio);this.secondaryProgress=secondaryProgress;if(indeterminate){this.removeAttribute('aria-valuenow');}else {this.setAttribute('aria-valuenow',value);}this.setAttribute('aria-valuemin',min);this.setAttribute('aria-valuemax',max);},_disabledChanged:function(disabled){this.setAttribute('aria-disabled',disabled?'true':'false');},_hideSecondaryProgress:function(secondaryRatio){return secondaryRatio===0;}});

/**
 * @demo demo/index.html
 * @polymerBehavior IronButtonState
 */const IronButtonStateImpl={properties:{/**
     * If true, the user is currently holding down the button.
     */pressed:{type:Boolean,readOnly:true,value:false,reflectToAttribute:true,observer:'_pressedChanged'},/**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */toggles:{type:Boolean,value:false,reflectToAttribute:true},/**
     * If true, the button is a toggle and is currently in the active state.
     */active:{type:Boolean,value:false,notify:true,reflectToAttribute:true},/**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */pointerDown:{type:Boolean,readOnly:true,value:false},/**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */receivedFocusFromKeyboard:{type:Boolean,readOnly:true},/**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */ariaActiveAttribute:{type:String,value:'aria-pressed',observer:'_ariaActiveAttributeChanged'}},listeners:{down:'_downHandler',up:'_upHandler',tap:'_tapHandler'},observers:['_focusChanged(focused)','_activeChanged(active, ariaActiveAttribute)'],/**
   * @type {!Object}
   */keyBindings:{'enter:keydown':'_asyncClick','space:keydown':'_spaceKeyDownHandler','space:keyup':'_spaceKeyUpHandler'},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){// a tap is needed to toggle the active state
this._userActivate(!this.active);}else {this.active=false;}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(false);}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused);},// to emulate native checkbox, (de-)activations from a user interaction fire
// 'change' events
_userActivate:function(active){if(this.active!==active){this.active=active;this.fire('change');}},_downHandler:function(event){this._setPointerDown(true);this._setPressed(true);this._setReceivedFocusFromKeyboard(false);},_upHandler:function(){this._setPointerDown(false);this._setPressed(false);},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(true);},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;if(this.pressed){this._asyncClick();}this._setPressed(false);},// trigger click asynchronously, the asynchrony is useful to allow one
// event handler to unwind before triggering another event
_asyncClick:function(){this.async(function(){this.click();},1);},// any of these changes are considered a change to button state
_pressedChanged:function(pressed){this._changedButtonState();},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue);}},_activeChanged:function(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?'true':'false');}else {this.removeAttribute(this.ariaActiveAttribute);}this._changedButtonState();},_controlStateChanged:function(){if(this.disabled){this._setPressed(false);}else {this._changedButtonState();}},// provide hook for follow-on behaviors to react to button-state
_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged();// abstract
}}};/** @polymerBehavior */const IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];

var Utility={distance:function(x1,y1,x2,y2){var xDelta=x1-x2;var yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta);},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};/**
 * @param {HTMLElement} element
 * @constructor
 */function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=Math.max(this.width,this.height);}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect();},furthestCornerDistanceFrom:function(x,y){var topLeft=Utility.distance(x,y,0,0);var topRight=Utility.distance(x,y,this.width,0);var bottomLeft=Utility.distance(x,y,0,this.height);var bottomRight=Utility.distance(x,y,this.width,this.height);return Math.max(topLeft,topRight,bottomLeft,bottomRight);}};/**
 * @param {HTMLElement} element
 * @constructor
 */function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement('div');this.waveContainer=document.createElement('div');this.wave.style.backgroundColor=this.color;this.wave.classList.add('wave');this.waveContainer.classList.add('wave-container');dom(this.waveContainer).appendChild(this.wave);this.resetInteractionState();}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters;},get center(){return this.element.center;},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0;}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed;}return elapsed;},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0;},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1000;},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1000;},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds;},get initialOpacity(){return this.element.initialOpacity;},get opacityDecayVelocity(){return this.element.opacityDecayVelocity;},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width;var height2=this.containerMetrics.height*this.containerMetrics.height;var waveRadius=Math.min(Math.sqrt(width2+height2),Ripple.MAX_RADIUS)*1.1+5;var duration=1.1-0.2*(waveRadius/Ripple.MAX_RADIUS);var timeNow=this.mouseInteractionSeconds/duration;var size=waveRadius*(1-Math.pow(80,-timeNow));return Math.abs(size);},get opacity(){if(!this.mouseUpStart){return this.initialOpacity;}return Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity);},get outerOpacity(){// Linear increase in background opacity, capped at the opacity
// of the wavefront (waveOpacity).
var outerOpacity=this.mouseUpElapsedSeconds*0.3;var waveOpacity=this.opacity;return Math.max(0,Math.min(outerOpacity,waveOpacity));},get isOpacityFullyDecayed(){return this.opacity<0.01&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS);},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS);},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius;},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2));},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart);}return this.xStart;},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart);}return this.yStart;},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart;},resetInteractionState:function(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element);},draw:function(){var scale;var dx;var dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;// 2d transform for safari because of border-radius and overflow:hidden
// clipping bug. https://bugs.webkit.org/show_bug.cgi?id=98538
this.waveContainer.style.webkitTransform='translate('+dx+'px, '+dy+'px)';this.waveContainer.style.transform='translate3d('+dx+'px, '+dy+'px, 0)';this.wave.style.webkitTransform='scale('+scale+','+scale+')';this.wave.style.transform='scale3d('+scale+','+scale+',1)';},/** @param {Event=} event */downAction:function(event){var xCenter=this.containerMetrics.width/2;var yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd);}else {this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2;}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd);}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+'px';this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+'px';this.waveContainer.style.width=this.containerMetrics.size+'px';this.waveContainer.style.height=this.containerMetrics.size+'px';},/** @param {Event=} event */upAction:function(event){if(!this.isMouseDown){return;}this.mouseUpStart=Utility.now();},remove:function(){dom(dom(this.waveContainer).parentNode).removeChild(this.waveContainer);}};/**
Material design: [Surface
reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)

`paper-ripple` provides a visual effect that other paper elements can
use to simulate a rippling effect emanating from the point of contact.  The
effect can be visualized as a concentric circle with motion.

Example:

    <div style="position:relative">
      <paper-ripple></paper-ripple>
    </div>

Note, it's important that the parent container of the ripple be relative
position, otherwise the ripple will emanate outside of the desired container.

`paper-ripple` listens to "mousedown" and "mouseup" events so it would display
ripple effect when touches on it.  You can also defeat the default behavior and
manually route the down and up actions to the ripple element.  Note that it is
important if you call `downAction()` you will have to make sure to call
`upAction()` so that `paper-ripple` would end the animation loop.

Example:

    <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
    ...
    downAction: function(e) {
      this.$.ripple.downAction(e.detail);
    },
    upAction: function(e) {
      this.$.ripple.upAction();
    }

Styling ripple effect:

  Use CSS color property to style the ripple:

    paper-ripple {
      color: #4285f4;
    }

  Note that CSS color property is inherited so it is not required to set it on
  the `paper-ripple` element directly.

By default, the ripple is centered on the point of contact.  Apply the
`recenters` attribute to have the ripple grow toward the center of its
container.

    <paper-ripple recenters></paper-ripple>

You can also  center the ripple inside its container from the start.

    <paper-ripple center></paper-ripple>

Apply `circle` class to make the rippling effect within a circle.

    <paper-ripple class="circle"></paper-ripple>

@element paper-ripple
@demo demo/index.html
*/Polymer({/** @override */_template:html`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:'paper-ripple',behaviors:[IronA11yKeysBehavior],properties:{/**
     * The initial opacity set on the wave.
     * @type number
     * @default 0.25
     */initialOpacity:{type:Number,value:0.25},/**
     * How fast (opacity per second) the wave fades out.
     *
     * @type number
     * @default 0.8
     */opacityDecayVelocity:{type:Number,value:0.8},/**
     * If true, ripples will exhibit a gravitational pull towards
     * the center of their container as they fade away.
     *
     * @type boolean
     * @default false
     */recenters:{type:Boolean,value:false},/**
     * If true, ripples will center inside its container
     *
     * @type boolean
     * @default false
     */center:{type:Boolean,value:false},/**
     * A list of the visual ripples.
     *
     * @type Array
     * @default []
     */ripples:{type:Array,value:function(){return [];}},/**
     * True when there are visible ripples animating within the
     * element.
     */animating:{type:Boolean,readOnly:true,reflectToAttribute:true,value:false},/**
     * If true, the ripple will remain in the "down" state until `holdDown`
     * is set to false again.
     */holdDown:{type:Boolean,value:false,observer:'_holdDownChanged'},/**
     * If true, the ripple will not generate a ripple effect
     * via pointer interaction.
     * Calling ripple's imperative api like `simulatedRipple` will
     * still generate the ripple effect.
     */noink:{type:Boolean,value:false},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this);}}},get target(){return this.keyEventTarget;},/**
   * @type {!Object}
   */keyBindings:{'enter:keydown':'_onEnterKeydown','space:keydown':'_onSpaceKeydown','space:keyup':'_onSpaceKeyup'},/** @override */attached:function(){// Set up a11yKeysBehavior to listen to key events on the target,
// so that space and enter activate the ripple even if the target doesn't
// handle key events. The key handlers deal with `noink` themselves.
if(dom(this).parentNode.nodeType==11){// DOCUMENT_FRAGMENT_NODE
this.keyEventTarget=dom(this).getOwnerRoot().host;}else {this.keyEventTarget=dom(this).parentNode;}var keyEventTarget=/** @type {!EventTarget} */this.keyEventTarget;this.listen(keyEventTarget,'up','uiUpAction');this.listen(keyEventTarget,'down','uiDownAction');},/** @override */detached:function(){this.unlisten(this.keyEventTarget,'up','uiUpAction');this.unlisten(this.keyEventTarget,'down','uiDownAction');this.keyEventTarget=null;},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return true;}}return false;},simulatedRipple:function(){this.downAction(null);// Please see polymer/polymer#1305
this.async(function(){this.upAction();},1);},/**
   * Provokes a ripple down effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiDownAction:function(event){if(!this.noink){this.downAction(event);}},/**
   * Provokes a ripple down effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */downAction:function(event){if(this.holdDown&&this.ripples.length>0){return;}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=true;this.animate();}},/**
   * Provokes a ripple up effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiUpAction:function(event){if(!this.noink){this.upAction(event);}},/**
   * Provokes a ripple up effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */upAction:function(event){if(this.holdDown){return;}this.ripples.forEach(function(ripple){ripple.upAction(event);});this._animating=true;this.animate();},onAnimationComplete:function(){this._animating=false;this.$.background.style.backgroundColor='';this.fire('transitionend');},addRipple:function(){var ripple=new Ripple(this);dom(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(true);return ripple;},removeRipple:function(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(rippleIndex<0){return;}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(false);}},/**
   * Deprecated. Please use animateRipple() instead.
   *
   * This method name conflicts with Element#animate().
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate.
   *
   * @suppress {checkTypes}
   * @override
   */animate:function(){if(!this._animating){return;}var index;var ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple);}}if(!this.shouldKeepAnimating&&this.ripples.length===0){this.onAnimationComplete();}else {window.requestAnimationFrame(this._boundAnimate);}},/**
   * An alias for animate() whose name does not conflict with the platform
   * Element.animate() method.
   */animateRipple:function(){return this.animate();},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1);},_onSpaceKeydown:function(){this.uiDownAction();},_onSpaceKeyup:function(){this.uiUpAction();},// note: holdDown does not respect noink since it can be a focus based
// effect.
_holdDownChanged:function(newVal,oldVal){if(oldVal===undefined){return;}if(newVal){this.downAction();}else {this.upAction();}}/**
  Fired when the animation finishes.
  This is useful if you want to wait until
  the ripple animation finishes to perform some action.

  @event transitionend
  @param {{node: Object}} detail Contains the animated node.
  */});

/**
 * `PaperRippleBehavior` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 *
 * @polymerBehavior PaperRippleBehavior
 */const PaperRippleBehavior={properties:{/**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */noink:{type:Boolean,observer:'_noinkChanged'},/**
     * @type {Element|undefined}
     */_rippleContainer:{type:Object}},/**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */_buttonStateChanged:function(){if(this.focused){this.ensureRipple();}},/**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event);}},/**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple);}if(optTriggeringEvent){// Check if the event happened inside of the ripple container
// Fall back to host instead of the root because distributed text
// nodes are not valid event targets
var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(/** @type {Node} */target)){this._ripple.uiDownAction(optTriggeringEvent);}}}},/**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */getRipple:function(){this.ensureRipple();return this._ripple;},/**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */hasRipple:function(){return Boolean(this._ripple);},/**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */_createRipple:function(){var element=/** @type {!PaperRippleElement} */document.createElement('paper-ripple');return element;},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink;}}};

/**
 * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
 * focus.
 *
 * @polymerBehavior PaperInkyFocusBehavior
 */const PaperInkyFocusBehaviorImpl={observers:['_focusedChanged(receivedFocusFromKeyboard)'],_focusedChanged:function(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple();}if(this.hasRipple()){this._ripple.holdDown=receivedFocusFromKeyboard;}},_createRipple:function(){var ripple=PaperRippleBehavior._createRipple();ripple.id='ink';ripple.setAttribute('center','');ripple.classList.add('circle');return ripple;}};/** @polymerBehavior */const PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];

const template=html`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;template.setAttribute('strip-whitespace','');/**
Material design:
[Sliders](https://www.google.com/design/spec/components/sliders.html)

`paper-slider` allows user to select a value from a range of values by
moving the slider thumb.  The interactive nature of the slider makes it a
great choice for settings that reflect intensity levels, such as volume,
brightness, or color saturation.

Example:

    <paper-slider></paper-slider>

Use `min` and `max` to specify the slider range.  Default is 0 to 100.

Example:

    <paper-slider min="10" max="200" value="110"></paper-slider>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-slider-container-color` | The background color of the bar | `--paper-grey-400`
`--paper-slider-bar-color` | The background color of the slider | `transparent`
`--paper-slider-active-color` | The progress bar color | `--google-blue-700`
`--paper-slider-secondary-color` | The secondary progress bar color | `--google-blue-300`
`--paper-slider-knob-color` | The knob color | `--google-blue-700`
`--paper-slider-disabled-knob-color` | The disabled knob color | `--paper-grey-400`
`--paper-slider-pin-color` | The pin color | `--google-blue-700`
`--paper-slider-font-color` | The pin's text color | `#fff`
`--paper-slider-markers-color` | The snaps markers color | `#000`
`--paper-slider-disabled-active-color` | The disabled progress bar color | `--paper-grey-400`
`--paper-slider-disabled-secondary-color` | The disabled secondary progress bar color | `--paper-grey-400`
`--paper-slider-knob-start-color` | The fill color of the knob at the far left | `transparent`
`--paper-slider-knob-start-border-color` | The border color of the knob at the far left | `--paper-grey-400`
`--paper-slider-pin-start-color` | The color of the pin at the far left | `--paper-grey-400`
`--paper-slider-height` | Height of the progress bar | `2px`
`--paper-slider-input` | Mixin applied to the input in editable mode | `{}`
`--paper-slider-input-container-input` | Mixin applied to the paper-input-container-input in editable mode | `{}`

@group Paper Elements
@element paper-slider
@demo demo/index.html
*/Polymer({_template:template,is:'paper-slider',behaviors:[IronA11yKeysBehavior,IronFormElementBehavior,PaperInkyFocusBehavior,IronRangeBehavior],properties:{value:{type:Number,value:0},/**
     * If true, the slider thumb snaps to tick marks evenly spaced based
     * on the `step` property value.
     */snaps:{type:Boolean,value:false,notify:true},/**
     * If true, a pin with numeric value label is shown when the slider thumb
     * is pressed. Use for settings for which users need to know the exact
     * value of the setting.
     */pin:{type:Boolean,value:false,notify:true},/**
     * The number that represents the current secondary progress.
     */secondaryProgress:{type:Number,value:0,notify:true,observer:'_secondaryProgressChanged'},/**
     * If true, an input is shown and user can use it to set the slider value.
     */editable:{type:Boolean,value:false},/**
     * The immediate value of the slider.  This value is updated while the user
     * is dragging the slider.
     */immediateValue:{type:Number,value:0,readOnly:true,notify:true},/**
     * The maximum number of markers
     */maxMarkers:{type:Number,value:0,notify:true},/**
     * If true, the knob is expanded
     */expand:{type:Boolean,value:false,readOnly:true},/**
     * If true, a touchmove on the slider bar doesn't drag the slider thunb.
     * Tapping on the slider bar still updates the slider's position
     */ignoreBarTouch:{type:Boolean,value:false},/**
     * True when the user is dragging the slider.
     */dragging:{type:Boolean,value:false,readOnly:true,notify:true},transiting:{type:Boolean,value:false,readOnly:true},markers:{type:Array,readOnly:true,value:function(){return [];}}},observers:['_updateKnob(value, min, max, snaps, step)','_valueChanged(value)','_immediateValueChanged(immediateValue)','_updateMarkers(maxMarkers, min, max, snaps)'],hostAttributes:{role:'slider',tabindex:0},/** @type {!Object} */keyBindings:{'left':'_leftKey','right':'_rightKey','down pagedown home':'_decrementKey','up pageup end':'_incrementKey'},ready:function(){if(this.ignoreBarTouch){setTouchAction(this.$.sliderBar,'auto');}},/**
   * Increases value by `step` but not above `max`.
   * @method increment
   */increment:function(){this.value=this._clampValue(this.value+this.step);},/**
   * Decreases value by `step` but not below `min`.
   * @method decrement
   */decrement:function(){this.value=this._clampValue(this.value-this.step);},_updateKnob:function(value,min,max,snaps,step){this.setAttribute('aria-valuemin',min);this.setAttribute('aria-valuemax',max);this.setAttribute('aria-valuenow',value);this._positionKnob(this._calcRatio(value)*100);},_valueChanged:function(){this.fire('value-change',{composed:true});},_immediateValueChanged:function(){if(this.dragging){this.fire('immediate-value-change',{composed:true});}else {this.value=this.immediateValue;}},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress);},_expandKnob:function(){this._setExpand(true);},_resetKnob:function(){this.cancelDebouncer('expandKnob');this._setExpand(false);},_positionKnob:function(ratio){this._setImmediateValue(this._calcStep(this._calcKnobPosition(ratio)));this._setRatio(this._calcRatio(this.immediateValue)*100);this.$.sliderKnob.style.left=this.ratio+'%';if(this.dragging){this._knobstartx=this.ratio*this._w/100;this.translate3d(0,0,0,this.$.sliderKnob);}},_calcKnobPosition:function(ratio){return (this.max-this.min)*ratio/100+this.min;},_onTrack:function(event){event.stopPropagation();switch(event.detail.state){case'start':this._trackStart(event);break;case'track':this._trackX(event);break;case'end':this._trackEnd();break;}},_trackStart:function(event){this._setTransiting(false);this._w=this.$.sliderBar.offsetWidth;this._x=this.ratio*this._w/100;this._startx=this._x;this._knobstartx=this._startx;this._minx=-this._startx;this._maxx=this._w-this._startx;this.$.sliderKnob.classList.add('dragging');this._setDragging(true);},_trackX:function(event){if(!this.dragging){this._trackStart(event);}var direction=this._isRTL?-1:1;var dx=Math.min(this._maxx,Math.max(this._minx,event.detail.dx*direction));this._x=this._startx+dx;var immediateValue=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(immediateValue);// update knob's position
var translateX=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(translateX+'px',0,0,this.$.sliderKnob);},_trackEnd:function(){var s=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove('dragging');this._setDragging(false);this._resetKnob();this.value=this.immediateValue;s.transform=s.webkitTransform='';this.fire('change',{composed:true});},_knobdown:function(event){this._expandKnob();// cancel selection
event.preventDefault();// set the focus manually because we will called prevent default
this.focus();},_bartrack:function(event){if(this._allowBarEvent(event)){this._onTrack(event);}},_barclick:function(event){this._w=this.$.sliderBar.offsetWidth;var rect=this.$.sliderBar.getBoundingClientRect();var ratio=(event.detail.x-rect.left)/this._w*100;if(this._isRTL){ratio=100-ratio;}var prevRatio=this.ratio;this._setTransiting(true);this._positionKnob(ratio);// if the ratio doesn't change, sliderKnob's animation won't start
// and `_knobTransitionEnd` won't be called
// Therefore, we need to manually update the `transiting` state
if(prevRatio===this.ratio){this._setTransiting(false);}this.async(function(){this.fire('change',{composed:true});});// cancel selection
event.preventDefault();// set the focus manually because we will called prevent default
this.focus();},_bardown:function(event){if(this._allowBarEvent(event)){this.debounce('expandKnob',this._expandKnob,60);this._barclick(event);}},_knobTransitionEnd:function(event){if(event.target===this.$.sliderKnob){this._setTransiting(false);}},_updateMarkers:function(maxMarkers,min,max,snaps){if(!snaps){this._setMarkers([]);}var steps=Math.round((max-min)/this.step);if(steps>maxMarkers){steps=maxMarkers;}if(steps<0||!isFinite(steps)){steps=0;}this._setMarkers(new Array(steps));},_mergeClasses:function(classes){return Object.keys(classes).filter(function(className){return classes[className];}).join(' ');},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable});},_allowBarEvent:function(event){return !this.ignoreBarTouch||event.detail.sourceEvent instanceof MouseEvent;},get _isRTL(){if(this.__isRTL===undefined){this.__isRTL=window.getComputedStyle(this)['direction']==='rtl';}return this.__isRTL;},_leftKey:function(event){if(this._isRTL)this._incrementKey(event);else this._decrementKey(event);},_rightKey:function(event){if(this._isRTL)this._decrementKey(event);else this._incrementKey(event);},_incrementKey:function(event){if(!this.disabled){if(event.detail.key==='end'){this.value=this.max;}else {this.increment();}this.fire('change');event.preventDefault();}},_decrementKey:function(event){if(!this.disabled){if(event.detail.key==='home'){this.value=this.min;}else {this.decrement();}this.fire('change');event.preventDefault();}},_changeValue:function(event){this.value=event.target.value;this.fire('change',{composed:true});},_inputKeyDown:function(event){event.stopPropagation();},// create the element ripple inside the `sliderKnob`
_createRipple:function(){this._rippleContainer=this.$.sliderKnob;return PaperInkyFocusBehaviorImpl._createRipple.call(this);},// Hide the ripple when user is not interacting with keyboard.
// This behavior is different from other ripple-y controls, but is
// according to spec:
// https://www.google.com/design/spec/components/sliders.html
_focusedChanged:function(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple();}if(this.hasRipple()){// note, ripple must be un-hidden prior to setting `holdDown`
if(receivedFocusFromKeyboard){this._ripple.style.display='';}else {this._ripple.style.display='none';}this._ripple.holdDown=receivedFocusFromKeyboard;}}/**
   * Fired when the slider's value changes.
   *
   * @event value-change
   */ /**
   * Fired when the slider's immediateValue changes. Only occurs while the
   * user is dragging.
   *
   * To detect changes to immediateValue that happen for any input (i.e.
   * dragging, tapping, clicking, etc.) listen for immediate-value-changed
   * instead.
   *
   * @event immediate-value-change
   */ /**
   * Fired when the slider's value changes due to user interaction.
   *
   * Changes to the slider's value due to changes in an underlying
   * bound variable will not trigger this event.
   *
   * @event change
   */});

const PaperSliderClass=customElements.get("paper-slider");let subTemplate;class HaSlider extends PaperSliderClass{static get template(){if(!subTemplate){subTemplate=PaperSliderClass.template.cloneNode(true);const superStyle=subTemplate.content.querySelector("style");// append style to add mirroring of pin in RTL
superStyle.appendChild(document.createTextNode(`
          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {
            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            }

            .pin > .slider-knob > .slider-knob-inner {
              font-size:  var(--ha-slider-pin-font-size, 15px);
              line-height: normal;
              cursor: pointer;
            }

            .disabled.ring > .slider-knob > .slider-knob-inner {
              background-color: var(--paper-slider-disabled-knob-color, var(--disabled-text-color));
              border: 2px solid var(--paper-slider-disabled-knob-color, var(--disabled-text-color));
            }

            .pin > .slider-knob > .slider-knob-inner::before {
              top: unset;
              margin-left: unset;

              bottom: calc(15px + var(--calculated-paper-slider-height)/2);
              left: 50%;
              width: 2.2em;
              height: 2.2em;

              -webkit-transform-origin: left bottom;
              transform-origin: left bottom;
              -webkit-transform: rotate(-45deg) scale(0) translate(0);
              transform: rotate(-45deg) scale(0) translate(0);
            }

            .pin.expand > .slider-knob > .slider-knob-inner::before {
              -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
              transform: rotate(-45deg) scale(1) translate(7px, -7px);
            }

            .pin > .slider-knob > .slider-knob-inner::after {
              top: unset;
              font-size: unset;

              bottom: calc(15px + var(--calculated-paper-slider-height)/2);
              left: 50%;
              margin-left: -1.1em;
              width: 2.2em;
              height: 2.1em;

              -webkit-transform-origin: center bottom;
              transform-origin: center bottom;
              -webkit-transform: scale(0) translate(0);
              transform: scale(0) translate(0);
            }

            .pin.expand > .slider-knob > .slider-knob-inner::after {
              -webkit-transform: scale(1) translate(0, -10px);
              transform: scale(1) translate(0, -10px);
            }

            .slider-input {
              width: 54px;
            }
        `));}return subTemplate;}_setImmediateValue(newImmediateValue){super._setImmediateValue(this.step>=1?Math.round(newImmediateValue):Math.round(newImmediateValue*100)/100);}_calcStep(value){if(!this.step){return parseFloat(value);}const numSteps=Math.round((value-this.min)/this.step);const stepStr=this.step.toString();const stepPointAt=stepStr.indexOf(".");if(stepPointAt!==-1){/**
       * For small values of this.step, if we calculate the step using
       * For non-integer values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can round with the decimal precision of `step`
       */const precision=10**(stepStr.length-stepPointAt-1);return Math.round((numSteps*this.step+this.min)*precision)/precision;}return numSteps*this.step+this.min;}}customElements.define("ha-slider",HaSlider);

_decorate([n("ha-formfield")],function(_initialize,_FormfieldBase){class HaFormfield extends _FormfieldBase{constructor(...args){super(...args);_initialize(this);}}return {F:HaFormfield,d:[{kind:"method",key:"_labelClick",value:function _labelClick(){const input=this.input;if(input){input.focus();switch(input.tagName){case"HA-CHECKBOX":case"HA-RADIO":input.checked=!input.checked;fireEvent(input,"change");break;default:input.click();break;}}}},{kind:"field",static:true,key:"styles",value(){return [styles$1,r`
      :host(:not([alignEnd])) ::slotted(ha-switch) {
        margin-right: 10px;
      }
      :host([dir="rtl"]:not([alignEnd])) ::slotted(ha-switch) {
        margin-left: 10px;
        margin-right: auto;
      }
      .mdc-form-field {
        margin-top: 8px;
      }
    `];}}]};},FormfieldBase);

/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ELEMENTS_KEY_ALLOWED_IN=['input','button','textarea','select'];/**
 * Ensures that preventDefault is only called if the containing element
 * doesn't consume the event, and it will cause an unintended scroll.
 *
 * @param evt keyboard event to be prevented.
 */var preventDefaultEvent=function(evt){var target=evt.target;if(!target){return;}var tagName=(""+target.tagName).toLowerCase();if(ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName)===-1){evt.preventDefault();}};

/**
 * Initializes a state object for typeahead. Use the same reference for calls to
 * typeahead functions.
 *
 * @return The current state of the typeahead process. Each state reference
 *     represents a typeahead instance as the reference is typically mutated
 *     in-place.
 */function initState(){var state={bufferClearTimeout:0,currentFirstChar:'',sortedIndexCursor:0,typeaheadBuffer:''};return state;}/**
 * Initializes typeahead state by indexing the current list items by primary
 * text into the sortedIndexByFirstChar data structure.
 *
 * @param listItemCount numer of items in the list
 * @param getPrimaryTextByItemIndex function that returns the primary text at a
 *     given index
 *
 * @return Map that maps the first character of the primary text to the full
 *     list text and it's index
 */function initSortedIndex(listItemCount,getPrimaryTextByItemIndex){var sortedIndexByFirstChar=new Map();// Aggregate item text to index mapping
for(var i=0;i<listItemCount;i++){var primaryText=getPrimaryTextByItemIndex(i).trim();if(!primaryText){continue;}var firstChar=primaryText[0].toLowerCase();if(!sortedIndexByFirstChar.has(firstChar)){sortedIndexByFirstChar.set(firstChar,[]);}sortedIndexByFirstChar.get(firstChar).push({text:primaryText.toLowerCase(),index:i});}// Sort the mapping
// TODO(b/157162694): Investigate replacing forEach with Map.values()
sortedIndexByFirstChar.forEach(function(values){values.sort(function(first,second){return first.index-second.index;});});return sortedIndexByFirstChar;}/**
 * Given the next desired character from the user, it attempts to find the next
 * list option matching the buffer. Wraps around if at the end of options.
 *
 * @param opts Options and accessors
 *   - nextChar - the next character to match against items
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - skipFocus - whether or not to focus the matched item
 *   - isItemAtIndexDisabled - function that determines whether an item at a
 *        given index is disabled
 * @param state The typeahead state instance. See `initState`.
 *
 * @return The index of the matched item, or -1 if no match.
 */function matchItem(opts,state){var nextChar=opts.nextChar,focusItemAtIndex=opts.focusItemAtIndex,sortedIndexByFirstChar=opts.sortedIndexByFirstChar,focusedItemIndex=opts.focusedItemIndex,skipFocus=opts.skipFocus,isItemAtIndexDisabled=opts.isItemAtIndexDisabled;clearTimeout(state.bufferClearTimeout);state.bufferClearTimeout=setTimeout(function(){clearBuffer(state);},numbers$1.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);state.typeaheadBuffer=state.typeaheadBuffer+nextChar;var index;if(state.typeaheadBuffer.length===1){index=matchFirstChar(sortedIndexByFirstChar,focusedItemIndex,isItemAtIndexDisabled,state);}else {index=matchAllChars(sortedIndexByFirstChar,isItemAtIndexDisabled,state);}if(index!==-1&&!skipFocus){focusItemAtIndex(index);}return index;}/**
 * Matches the user's single input character in the buffer to the
 * next option that begins with such character. Wraps around if at
 * end of options. Returns -1 if no match is found.
 */function matchFirstChar(sortedIndexByFirstChar,focusedItemIndex,isItemAtIndexDisabled,state){var firstChar=state.typeaheadBuffer[0];var itemsMatchingFirstChar=sortedIndexByFirstChar.get(firstChar);if(!itemsMatchingFirstChar){return -1;}// Has the same firstChar been recently matched?
// Also, did starting index remain the same between key presses?
// If both hold true, simply increment index.
if(firstChar===state.currentFirstChar&&itemsMatchingFirstChar[state.sortedIndexCursor].index===focusedItemIndex){state.sortedIndexCursor=(state.sortedIndexCursor+1)%itemsMatchingFirstChar.length;var newIndex=itemsMatchingFirstChar[state.sortedIndexCursor].index;if(!isItemAtIndexDisabled(newIndex)){return newIndex;}}// If we're here, it means one of the following happened:
// - either firstChar or startingIndex has changed, invalidating the
// cursor.
// - The next item of typeahead is disabled, so we have to look further.
state.currentFirstChar=firstChar;var newCursorPosition=-1;var cursorPosition;// Find the first non-disabled item as a fallback.
for(cursorPosition=0;cursorPosition<itemsMatchingFirstChar.length;cursorPosition++){if(!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)){newCursorPosition=cursorPosition;break;}}// Advance cursor to first item matching the firstChar that is positioned
// after starting item. Cursor is unchanged from fallback if there's no
// such item.
for(;cursorPosition<itemsMatchingFirstChar.length;cursorPosition++){if(itemsMatchingFirstChar[cursorPosition].index>focusedItemIndex&&!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)){newCursorPosition=cursorPosition;break;}}if(newCursorPosition!==-1){state.sortedIndexCursor=newCursorPosition;return itemsMatchingFirstChar[state.sortedIndexCursor].index;}return -1;}/**
 * Attempts to find the next item that matches all of the typeahead buffer.
 * Wraps around if at end of options. Returns -1 if no match is found.
 */function matchAllChars(sortedIndexByFirstChar,isItemAtIndexDisabled,state){var firstChar=state.typeaheadBuffer[0];var itemsMatchingFirstChar=sortedIndexByFirstChar.get(firstChar);if(!itemsMatchingFirstChar){return -1;}// Do nothing if text already matches
var startingItem=itemsMatchingFirstChar[state.sortedIndexCursor];if(startingItem.text.lastIndexOf(state.typeaheadBuffer,0)===0&&!isItemAtIndexDisabled(startingItem.index)){return startingItem.index;}// Find next item that matches completely; if no match, we'll eventually
// loop around to same position
var cursorPosition=(state.sortedIndexCursor+1)%itemsMatchingFirstChar.length;var nextCursorPosition=-1;while(cursorPosition!==state.sortedIndexCursor){var currentItem=itemsMatchingFirstChar[cursorPosition];var matches=currentItem.text.lastIndexOf(state.typeaheadBuffer,0)===0;var isEnabled=!isItemAtIndexDisabled(currentItem.index);if(matches&&isEnabled){nextCursorPosition=cursorPosition;break;}cursorPosition=(cursorPosition+1)%itemsMatchingFirstChar.length;}if(nextCursorPosition!==-1){state.sortedIndexCursor=nextCursorPosition;return itemsMatchingFirstChar[state.sortedIndexCursor].index;}return -1;}/**
 * Whether or not the given typeahead instaance state is currently typing.
 *
 * @param state The typeahead state instance. See `initState`.
 */function isTypingInProgress(state){return state.typeaheadBuffer.length>0;}/**
 * Clears the typeahaed buffer so that it resets item matching to the first
 * character.
 *
 * @param state The typeahead state instance. See `initState`.
 */function clearBuffer(state){state.typeaheadBuffer='';}/**
 * Given a keydown event, it calculates whether or not to automatically focus a
 * list item depending on what was typed mimicing the typeahead functionality of
 * a standard <select> element that is open.
 *
 * @param opts Options and accessors
 *   - event - the KeyboardEvent to handle and parse
 *   - sortedIndexByFirstChar - output of `initSortedIndex(...)`
 *   - focusedItemIndex - the index of the currently focused item
 *   - focusItemAtIndex - function that focuses a list item at given index
 *   - isItemAtFocusedIndexDisabled - whether or not the currently focused item
 *      is disabled
 *   - isTargetListItem - whether or not the event target is a list item
 * @param state The typeahead state instance. See `initState`.
 *
 * @returns index of the item matched by the keydown. -1 if not matched.
 */function handleKeydown(opts,state){var event=opts.event,isTargetListItem=opts.isTargetListItem,focusedItemIndex=opts.focusedItemIndex,focusItemAtIndex=opts.focusItemAtIndex,sortedIndexByFirstChar=opts.sortedIndexByFirstChar,isItemAtIndexDisabled=opts.isItemAtIndexDisabled;var isArrowLeft=normalizeKey(event)==='ArrowLeft';var isArrowUp=normalizeKey(event)==='ArrowUp';var isArrowRight=normalizeKey(event)==='ArrowRight';var isArrowDown=normalizeKey(event)==='ArrowDown';var isHome=normalizeKey(event)==='Home';var isEnd=normalizeKey(event)==='End';var isEnter=normalizeKey(event)==='Enter';var isSpace=normalizeKey(event)==='Spacebar';if(event.ctrlKey||event.metaKey||isArrowLeft||isArrowUp||isArrowRight||isArrowDown||isHome||isEnd||isEnter){return -1;}var isCharacterKey=!isSpace&&event.key.length===1;if(isCharacterKey){preventDefaultEvent(event);var matchItemOpts={focusItemAtIndex:focusItemAtIndex,focusedItemIndex:focusedItemIndex,nextChar:event.key.toLowerCase(),sortedIndexByFirstChar:sortedIndexByFirstChar,skipFocus:false,isItemAtIndexDisabled:isItemAtIndexDisabled};return matchItem(matchItemOpts,state);}if(!isSpace){return -1;}if(isTargetListItem){preventDefaultEvent(event);}var typeaheadOnListItem=isTargetListItem&&isTypingInProgress(state);if(typeaheadOnListItem){var matchItemOpts={focusItemAtIndex:focusItemAtIndex,focusedItemIndex:focusedItemIndex,nextChar:' ',sortedIndexByFirstChar:sortedIndexByFirstChar,skipFocus:false,isItemAtIndexDisabled:isItemAtIndexDisabled};// space participates in typeahead matching if in rapid typing mode
return matchItem(matchItemOpts,state);}return -1;}

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var cssClasses={ACTIVATED:'mdc-select--activated',DISABLED:'mdc-select--disabled',FOCUSED:'mdc-select--focused',INVALID:'mdc-select--invalid',MENU_INVALID:'mdc-select__menu--invalid',OUTLINED:'mdc-select--outlined',REQUIRED:'mdc-select--required',ROOT:'mdc-select',WITH_LEADING_ICON:'mdc-select--with-leading-icon'};var strings={ARIA_CONTROLS:'aria-controls',ARIA_DESCRIBEDBY:'aria-describedby',ARIA_SELECTED_ATTR:'aria-selected',CHANGE_EVENT:'MDCSelect:change',HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:'.mdc-floating-label',LEADING_ICON_SELECTOR:'.mdc-select__icon',LINE_RIPPLE_SELECTOR:'.mdc-line-ripple',MENU_SELECTOR:'.mdc-select__menu',OUTLINE_SELECTOR:'.mdc-notched-outline',SELECTED_TEXT_SELECTOR:'.mdc-select__selected-text',SELECT_ANCHOR_SELECTOR:'.mdc-select__anchor',VALUE_ATTR:'data-value'};var numbers={LABEL_SCALE:0.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330};

var MDCSelectFoundation=/** @class */function(_super){__extends(MDCSelectFoundation,_super);/* istanbul ignore next: optional argument is not a branch statement */ /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */function MDCSelectFoundation(adapter,foundationMap){if(foundationMap===void 0){foundationMap={};}var _this=_super.call(this,__assign(__assign({},MDCSelectFoundation.defaultAdapter),adapter))||this;// Disabled state
_this.disabled=false;// isMenuOpen is used to track the state of the menu by listening to the
// MDCMenuSurface:closed event For reference, menu.open will return false if
// the menu is still closing, but isMenuOpen returns false only after the menu
// has closed
_this.isMenuOpen=false;// By default, select is invalid if it is required but no value is selected.
_this.useDefaultValidation=true;_this.customValidity=true;_this.lastSelectedIndex=numbers.UNSET_INDEX;_this.clickDebounceTimeout=0;_this.recentlyClicked=false;_this.leadingIcon=foundationMap.leadingIcon;_this.helperText=foundationMap.helperText;return _this;}Object.defineProperty(MDCSelectFoundation,"cssClasses",{get:function(){return cssClasses;},enumerable:false,configurable:true});Object.defineProperty(MDCSelectFoundation,"numbers",{get:function(){return numbers;},enumerable:false,configurable:true});Object.defineProperty(MDCSelectFoundation,"strings",{get:function(){return strings;},enumerable:false,configurable:true});Object.defineProperty(MDCSelectFoundation,"defaultAdapter",{/**
         * See {@link MDCSelectAdapter} for typing information on parameters and return types.
         */get:function(){// tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
return {addClass:function(){return undefined;},removeClass:function(){return undefined;},hasClass:function(){return false;},activateBottomLine:function(){return undefined;},deactivateBottomLine:function(){return undefined;},getSelectedIndex:function(){return -1;},setSelectedIndex:function(){return undefined;},hasLabel:function(){return false;},floatLabel:function(){return undefined;},getLabelWidth:function(){return 0;},setLabelRequired:function(){return undefined;},hasOutline:function(){return false;},notchOutline:function(){return undefined;},closeOutline:function(){return undefined;},setRippleCenter:function(){return undefined;},notifyChange:function(){return undefined;},setSelectedText:function(){return undefined;},isSelectAnchorFocused:function(){return false;},getSelectAnchorAttr:function(){return '';},setSelectAnchorAttr:function(){return undefined;},removeSelectAnchorAttr:function(){return undefined;},addMenuClass:function(){return undefined;},removeMenuClass:function(){return undefined;},openMenu:function(){return undefined;},closeMenu:function(){return undefined;},getAnchorElement:function(){return null;},setMenuAnchorElement:function(){return undefined;},setMenuAnchorCorner:function(){return undefined;},setMenuWrapFocus:function(){return undefined;},focusMenuItemAtIndex:function(){return undefined;},getMenuItemCount:function(){return 0;},getMenuItemValues:function(){return [];},getMenuItemTextAtIndex:function(){return '';},isTypeaheadInProgress:function(){return false;},typeaheadMatchItem:function(){return -1;}};// tslint:enable:object-literal-sort-keys
},enumerable:false,configurable:true});/** Returns the index of the currently selected menu item, or -1 if none. */MDCSelectFoundation.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex();};MDCSelectFoundation.prototype.setSelectedIndex=function(index,closeMenu,skipNotify){if(closeMenu===void 0){closeMenu=false;}if(skipNotify===void 0){skipNotify=false;}if(index>=this.adapter.getMenuItemCount()){return;}if(index===numbers.UNSET_INDEX){this.adapter.setSelectedText('');}else {this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());}this.adapter.setSelectedIndex(index);if(closeMenu){this.adapter.closeMenu();}if(!skipNotify&&this.lastSelectedIndex!==index){this.handleChange();}this.lastSelectedIndex=index;};MDCSelectFoundation.prototype.setValue=function(value,skipNotify){if(skipNotify===void 0){skipNotify=false;}var index=this.adapter.getMenuItemValues().indexOf(value);this.setSelectedIndex(index,/** closeMenu */false,skipNotify);};MDCSelectFoundation.prototype.getValue=function(){var index=this.adapter.getSelectedIndex();var menuItemValues=this.adapter.getMenuItemValues();return index!==numbers.UNSET_INDEX?menuItemValues[index]:'';};MDCSelectFoundation.prototype.getDisabled=function(){return this.disabled;};MDCSelectFoundation.prototype.setDisabled=function(isDisabled){this.disabled=isDisabled;if(this.disabled){this.adapter.addClass(cssClasses.DISABLED);this.adapter.closeMenu();}else {this.adapter.removeClass(cssClasses.DISABLED);}if(this.leadingIcon){this.leadingIcon.setDisabled(this.disabled);}if(this.disabled){// Prevent click events from focusing select. Simply pointer-events: none
// is not enough since screenreader clicks may bypass this.
this.adapter.removeSelectAnchorAttr('tabindex');}else {this.adapter.setSelectAnchorAttr('tabindex','0');}this.adapter.setSelectAnchorAttr('aria-disabled',this.disabled.toString());};/** Opens the menu. */MDCSelectFoundation.prototype.openMenu=function(){this.adapter.addClass(cssClasses.ACTIVATED);this.adapter.openMenu();this.isMenuOpen=true;this.adapter.setSelectAnchorAttr('aria-expanded','true');};/**
     * @param content Sets the content of the helper text.
     */MDCSelectFoundation.prototype.setHelperTextContent=function(content){if(this.helperText){this.helperText.setContent(content);}};/**
     * Re-calculates if the notched outline should be notched and if the label
     * should float.
     */MDCSelectFoundation.prototype.layout=function(){if(this.adapter.hasLabel()){var optionHasValue=this.getValue().length>0;var isFocused=this.adapter.hasClass(cssClasses.FOCUSED);var shouldFloatAndNotch=optionHasValue||isFocused;var isRequired=this.adapter.hasClass(cssClasses.REQUIRED);this.notchOutline(shouldFloatAndNotch);this.adapter.floatLabel(shouldFloatAndNotch);this.adapter.setLabelRequired(isRequired);}};/**
     * Synchronizes the list of options with the state of the foundation. Call
     * this whenever menu options are dynamically updated.
     */MDCSelectFoundation.prototype.layoutOptions=function(){var menuItemValues=this.adapter.getMenuItemValues();var selectedIndex=menuItemValues.indexOf(this.getValue());this.setSelectedIndex(selectedIndex,/** closeMenu */false,/** skipNotify */true);};MDCSelectFoundation.prototype.handleMenuOpened=function(){if(this.adapter.getMenuItemValues().length===0){return;}// Menu should open to the last selected element, should open to first menu item otherwise.
var selectedIndex=this.getSelectedIndex();var focusItemIndex=selectedIndex>=0?selectedIndex:0;this.adapter.focusMenuItemAtIndex(focusItemIndex);};MDCSelectFoundation.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr('aria-expanded','false');};MDCSelectFoundation.prototype.handleMenuClosed=function(){this.adapter.removeClass(cssClasses.ACTIVATED);this.isMenuOpen=false;// Unfocus the select if menu is closed without a selection
if(!this.adapter.isSelectAnchorFocused()){this.blur();}};/**
     * Handles value changes, via change event or programmatic updates.
     */MDCSelectFoundation.prototype.handleChange=function(){this.layout();this.adapter.notifyChange(this.getValue());var isRequired=this.adapter.hasClass(cssClasses.REQUIRED);if(isRequired&&this.useDefaultValidation){this.setValid(this.isValid());}};MDCSelectFoundation.prototype.handleMenuItemAction=function(index){this.setSelectedIndex(index,/** closeMenu */true);};/**
     * Handles focus events from select element.
     */MDCSelectFoundation.prototype.handleFocus=function(){this.adapter.addClass(cssClasses.FOCUSED);this.layout();this.adapter.activateBottomLine();};/**
     * Handles blur events from select element.
     */MDCSelectFoundation.prototype.handleBlur=function(){if(this.isMenuOpen){return;}this.blur();};MDCSelectFoundation.prototype.handleClick=function(normalizedX){if(this.disabled||this.recentlyClicked){return;}this.setClickDebounceTimeout();if(this.isMenuOpen){this.adapter.closeMenu();return;}this.adapter.setRippleCenter(normalizedX);this.openMenu();};/**
     * Handles keydown events on select element. Depending on the type of
     * character typed, does typeahead matching or opens menu.
     */MDCSelectFoundation.prototype.handleKeydown=function(event){if(this.isMenuOpen||!this.adapter.hasClass(cssClasses.FOCUSED)){return;}var isEnter=normalizeKey(event)===KEY.ENTER;var isSpace=normalizeKey(event)===KEY.SPACEBAR;var arrowUp=normalizeKey(event)===KEY.ARROW_UP;var arrowDown=normalizeKey(event)===KEY.ARROW_DOWN;var isModifier=event.ctrlKey||event.metaKey;// Typeahead
if(!isModifier&&(!isSpace&&event.key&&event.key.length===1||isSpace&&this.adapter.isTypeaheadInProgress())){var key=isSpace?' ':event.key;var typeaheadNextIndex=this.adapter.typeaheadMatchItem(key,this.getSelectedIndex());if(typeaheadNextIndex>=0){this.setSelectedIndex(typeaheadNextIndex);}event.preventDefault();return;}if(!isEnter&&!isSpace&&!arrowUp&&!arrowDown){return;}// Increment/decrement index as necessary and open menu.
if(arrowUp&&this.getSelectedIndex()>0){this.setSelectedIndex(this.getSelectedIndex()-1);}else if(arrowDown&&this.getSelectedIndex()<this.adapter.getMenuItemCount()-1){this.setSelectedIndex(this.getSelectedIndex()+1);}this.openMenu();event.preventDefault();};/**
     * Opens/closes the notched outline.
     */MDCSelectFoundation.prototype.notchOutline=function(openNotch){if(!this.adapter.hasOutline()){return;}var isFocused=this.adapter.hasClass(cssClasses.FOCUSED);if(openNotch){var labelScale=numbers.LABEL_SCALE;var labelWidth=this.adapter.getLabelWidth()*labelScale;this.adapter.notchOutline(labelWidth);}else if(!isFocused){this.adapter.closeOutline();}};/**
     * Sets the aria label of the leading icon.
     */MDCSelectFoundation.prototype.setLeadingIconAriaLabel=function(label){if(this.leadingIcon){this.leadingIcon.setAriaLabel(label);}};/**
     * Sets the text content of the leading icon.
     */MDCSelectFoundation.prototype.setLeadingIconContent=function(content){if(this.leadingIcon){this.leadingIcon.setContent(content);}};MDCSelectFoundation.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation;};MDCSelectFoundation.prototype.setUseDefaultValidation=function(useDefaultValidation){this.useDefaultValidation=useDefaultValidation;};MDCSelectFoundation.prototype.setValid=function(isValid){if(!this.useDefaultValidation){this.customValidity=isValid;}this.adapter.setSelectAnchorAttr('aria-invalid',(!isValid).toString());if(isValid){this.adapter.removeClass(cssClasses.INVALID);this.adapter.removeMenuClass(cssClasses.MENU_INVALID);}else {this.adapter.addClass(cssClasses.INVALID);this.adapter.addMenuClass(cssClasses.MENU_INVALID);}this.syncHelperTextValidity(isValid);};MDCSelectFoundation.prototype.isValid=function(){if(this.useDefaultValidation&&this.adapter.hasClass(cssClasses.REQUIRED)&&!this.adapter.hasClass(cssClasses.DISABLED)){// See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
// TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
return this.getSelectedIndex()!==numbers.UNSET_INDEX&&(this.getSelectedIndex()!==0||Boolean(this.getValue()));}return this.customValidity;};MDCSelectFoundation.prototype.setRequired=function(isRequired){if(isRequired){this.adapter.addClass(cssClasses.REQUIRED);}else {this.adapter.removeClass(cssClasses.REQUIRED);}this.adapter.setSelectAnchorAttr('aria-required',isRequired.toString());this.adapter.setLabelRequired(isRequired);};MDCSelectFoundation.prototype.getRequired=function(){return this.adapter.getSelectAnchorAttr('aria-required')==='true';};MDCSelectFoundation.prototype.init=function(){var anchorEl=this.adapter.getAnchorElement();if(anchorEl){this.adapter.setMenuAnchorElement(anchorEl);this.adapter.setMenuAnchorCorner(Corner.BOTTOM_START);}this.adapter.setMenuWrapFocus(false);this.setDisabled(this.adapter.hasClass(cssClasses.DISABLED));this.syncHelperTextValidity(!this.adapter.hasClass(cssClasses.INVALID));this.layout();this.layoutOptions();};/**
     * Unfocuses the select component.
     */MDCSelectFoundation.prototype.blur=function(){this.adapter.removeClass(cssClasses.FOCUSED);this.layout();this.adapter.deactivateBottomLine();var isRequired=this.adapter.hasClass(cssClasses.REQUIRED);if(isRequired&&this.useDefaultValidation){this.setValid(this.isValid());}};MDCSelectFoundation.prototype.syncHelperTextValidity=function(isValid){if(!this.helperText){return;}this.helperText.setValidity(isValid);var helperTextVisible=this.helperText.isVisible();var helperTextId=this.helperText.getId();if(helperTextVisible&&helperTextId){this.adapter.setSelectAnchorAttr(strings.ARIA_DESCRIBEDBY,helperTextId);}else {// Needed because screenreaders will read labels pointed to by
// `aria-describedby` even if they are `aria-hidden`.
this.adapter.removeSelectAnchorAttr(strings.ARIA_DESCRIBEDBY);}};MDCSelectFoundation.prototype.setClickDebounceTimeout=function(){var _this=this;clearTimeout(this.clickDebounceTimeout);this.clickDebounceTimeout=setTimeout(function(){_this.recentlyClicked=false;},numbers.CLICK_DEBOUNCE_TIMEOUT_MS);this.recentlyClicked=true;};return MDCSelectFoundation;}(MDCFoundation);var MDCSelectFoundation$1 = MDCSelectFoundation;

const createValidityObj=(customValidity={})=>{/*
     * We need to make ValidityState an object because it is readonly and
     * we cannot use the spread operator. Also, we don't export
     * `CustomValidityState` because it is a leaky implementation and the user
     * already has access to `ValidityState` in lib.dom.ts. Also an interface
     * {a: Type} can be casted to {readonly a: Type} so passing any object
     * should be fine.
     */const objectifiedCustomValidity={};// eslint-disable-next-line guard-for-in
for(const propName in customValidity){/*
         * Casting is needed because ValidityState's props are all readonly and
         * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
         * interface is the same as ValidityState (but not readonly), but the
         * function signature casts the output to ValidityState (thus readonly).
         */objectifiedCustomValidity[propName]=customValidity[propName];}return Object.assign({badInput:false,customError:false,patternMismatch:false,rangeOverflow:false,rangeUnderflow:false,stepMismatch:false,tooLong:false,tooShort:false,typeMismatch:false,valid:true,valueMissing:false},objectifiedCustomValidity);};/**
 * @fires selected {SelectedDetail}
 * @fires action {ActionDetail}
 * @fires opened
 * @fires closed
 * @fires change
 * @fires invalid
 */class SelectBase extends FormElement{constructor(){super(...arguments);this.mdcFoundationClass=MDCSelectFoundation$1;this.disabled=false;this.outlined=false;this.label='';this.outlineOpen=false;this.outlineWidth=0;this.value='';this.name='';this.selectedText='';this.icon='';this.menuOpen=false;this.helper='';this.validateOnInitialRender=false;this.validationMessage='';this.required=false;this.naturalMenuWidth=false;this.isUiValid=true;this.fixedMenuPosition=false;// Transiently holds current typeahead prefix from user.
this.typeaheadState=initState();this.sortedIndexByFirstChar=new Map();this.menuElement_=null;this.listeners=[];this.onBodyClickBound=()=>undefined;this._menuUpdateComplete=null;this.valueSetDirectly=false;this.validityTransform=null;this._validity=createValidityObj();}get items(){// memoize menuElement to prevent unnecessary querySelector calls.
if(!this.menuElement_){this.menuElement_=this.menuElement;}if(this.menuElement_){return this.menuElement_.items;}return [];}get selected(){const menuElement=this.menuElement;if(menuElement){return menuElement.selected;}return null;}get index(){const menuElement=this.menuElement;if(menuElement){return menuElement.index;}return -1;}get shouldRenderHelperText(){return !!this.helper||!!this.validationMessage;}get validity(){this._checkValidity(this.value);return this._validity;}render(){const classes={'mdc-select--disabled':this.disabled,'mdc-select--no-label':!this.label,'mdc-select--filled':!this.outlined,'mdc-select--outlined':this.outlined,'mdc-select--with-leading-icon':!!this.icon,'mdc-select--required':this.required,'mdc-select--invalid':!this.isUiValid};const menuClasses={'mdc-select__menu--invalid':!this.isUiValid};const labelledby=!!this.label?'label':undefined;const describedby=this.shouldRenderHelperText?'helper-text':undefined;return $`
      <div
          class="mdc-select ${o(classes)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${l(labelledby)}
            aria-required=${this.required}
            aria-describedby=${l(describedby)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined?this.renderOutline():this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        <mwc-menu
            innerRole="listbox"
            wrapFocus
            class="mdc-select__menu mdc-menu mdc-menu-surface ${o(menuClasses)}"
            activatable
            .fullwidth=${this.fixedMenuPosition?false:!this.naturalMenuWidth}
            .open=${this.menuOpen}
            .anchor=${this.anchorElement}
            .fixed=${this.fixedMenuPosition}
            @selected=${this.onSelected}
            @opened=${this.onOpened}
            @closed=${this.onClosed}
            @items-updated=${this.onItemsUpdated}
            @keydown=${this.handleTypeahead}>
          <slot></slot>
        </mwc-menu>
      </div>
      ${this.renderHelperText()}`;}renderRipple(){if(this.outlined){return w;}return $`
      <span class="mdc-select__ripple"></span>
    `;}renderOutline(){if(!this.outlined){return w;}return $`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`;}renderLabel(){if(!this.label){return w;}return $`
      <span
          .floatingLabelFoundation=${floatingLabel(this.label)}
          id="label">${this.label}</span>
    `;}renderLeadingIcon(){if(!this.icon){return w;}return $`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`;}renderLineRipple(){if(this.outlined){return w;}return $`
      <span .lineRippleFoundation=${lineRipple()}></span>
    `;}renderHelperText(){if(!this.shouldRenderHelperText){return w;}const showValidationMessage=this.validationMessage&&!this.isUiValid;const classes={'mdc-select-helper-text--validation-msg':showValidationMessage};return $`
        <p
          class="mdc-select-helper-text ${o(classes)}"
          id="helper-text">${showValidationMessage?this.validationMessage:this.helper}</p>`;}createAdapter(){return Object.assign(Object.assign({},addHasRemoveClass(this.mdcRoot)),{activateBottomLine:()=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.activate();}},deactivateBottomLine:()=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.deactivate();}},hasLabel:()=>{return !!this.label;},floatLabel:shouldFloat=>{if(this.labelElement){this.labelElement.floatingLabelFoundation.float(shouldFloat);}},getLabelWidth:()=>{if(this.labelElement){return this.labelElement.floatingLabelFoundation.getWidth();}return 0;},setLabelRequired:isRequired=>{if(this.labelElement){this.labelElement.floatingLabelFoundation.setRequired(isRequired);}},hasOutline:()=>this.outlined,notchOutline:labelWidth=>{const outlineElement=this.outlineElement;if(outlineElement&&!this.outlineOpen){this.outlineWidth=labelWidth;this.outlineOpen=true;}},closeOutline:()=>{if(this.outlineElement){this.outlineOpen=false;}},setRippleCenter:normalizedX=>{if(this.lineRippleElement){const foundation=this.lineRippleElement.lineRippleFoundation;foundation.setRippleCenter(normalizedX);}},notifyChange:async value=>{if(!this.valueSetDirectly&&value===this.value){return;}this.valueSetDirectly=false;this.value=value;await this.updateComplete;const ev=new Event('change',{bubbles:true});this.dispatchEvent(ev);},setSelectedText:value=>this.selectedText=value,isSelectAnchorFocused:()=>{const selectAnchorElement=this.anchorElement;if(!selectAnchorElement){return false;}const rootNode=selectAnchorElement.getRootNode();return rootNode.activeElement===selectAnchorElement;},getSelectAnchorAttr:attr=>{const selectAnchorElement=this.anchorElement;if(!selectAnchorElement){return null;}return selectAnchorElement.getAttribute(attr);},setSelectAnchorAttr:(attr,value)=>{const selectAnchorElement=this.anchorElement;if(!selectAnchorElement){return;}selectAnchorElement.setAttribute(attr,value);},removeSelectAnchorAttr:attr=>{const selectAnchorElement=this.anchorElement;if(!selectAnchorElement){return;}selectAnchorElement.removeAttribute(attr);},openMenu:()=>{this.menuOpen=true;},closeMenu:()=>{this.menuOpen=false;},addMenuClass:()=>undefined,removeMenuClass:()=>undefined,getAnchorElement:()=>this.anchorElement,setMenuAnchorElement:()=>{/* Handled by anchor directive */},setMenuAnchorCorner:()=>{const menuElement=this.menuElement;if(menuElement){menuElement.corner='BOTTOM_START';}},setMenuWrapFocus:wrapFocus=>{const menuElement=this.menuElement;if(menuElement){menuElement.wrapFocus=wrapFocus;}},focusMenuItemAtIndex:index=>{const menuElement=this.menuElement;if(!menuElement){return;}const element=menuElement.items[index];if(!element){return;}element.focus();},getMenuItemCount:()=>{const menuElement=this.menuElement;if(menuElement){return menuElement.items.length;}return 0;},getMenuItemValues:()=>{const menuElement=this.menuElement;if(!menuElement){return [];}const items=menuElement.items;return items.map(item=>item.value);},getMenuItemTextAtIndex:index=>{const menuElement=this.menuElement;if(!menuElement){return '';}const element=menuElement.items[index];if(!element){return '';}return element.text;},getSelectedIndex:()=>this.index,setSelectedIndex:()=>undefined,isTypeaheadInProgress:()=>isTypingInProgress(this.typeaheadState),typeaheadMatchItem:(nextChar,startingIndex)=>{if(!this.menuElement){return -1;}const opts={focusItemAtIndex:index=>{this.menuElement.focusItemAtIndex(index);},focusedItemIndex:startingIndex?startingIndex:this.menuElement.getFocusedItemIndex(),nextChar,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:false,isItemAtIndexDisabled:index=>this.items[index].disabled};const index=matchItem(opts,this.typeaheadState);if(index!==-1){this.select(index);}return index;}});}checkValidity(){const isValid=this._checkValidity(this.value);if(!isValid){const invalidEvent=new Event('invalid',{bubbles:false,cancelable:true});this.dispatchEvent(invalidEvent);}return isValid;}reportValidity(){const isValid=this.checkValidity();this.isUiValid=isValid;return isValid;}_checkValidity(value){const nativeValidity=this.formElement.validity;let validity=createValidityObj(nativeValidity);if(this.validityTransform){const customValidity=this.validityTransform(value,validity);validity=Object.assign(Object.assign({},validity),customValidity);}this._validity=validity;return this._validity.valid;}setCustomValidity(message){this.validationMessage=message;this.formElement.setCustomValidity(message);}// tslint:disable:ban-ts-ignore
async getUpdateComplete(){await this._menuUpdateComplete;// @ts-ignore
const result=await super.getUpdateComplete();return result;}// tslint:enable:ban-ts-ignore
async firstUpdated(){const menuElement=this.menuElement;if(menuElement){this._menuUpdateComplete=menuElement.updateComplete;await this._menuUpdateComplete;}super.firstUpdated();this.mdcFoundation.isValid=()=>true;this.mdcFoundation.setValid=()=>undefined;this.mdcFoundation.setDisabled(this.disabled);if(this.validateOnInitialRender){this.reportValidity();}// Select an option based on init value
if(!this.selected){if(!this.items.length&&this.slotElement&&this.slotElement.assignedNodes({flatten:true}).length){// Shady DOM initial render fix
await new Promise(res=>requestAnimationFrame(res));await this.layout();}const hasEmptyFirstOption=this.items.length&&this.items[0].value==='';if(!this.value&&hasEmptyFirstOption){this.select(0);return;}this.selectByValue(this.value);}this.sortedIndexByFirstChar=initSortedIndex(this.items.length,index=>this.items[index].text);}onItemsUpdated(){this.sortedIndexByFirstChar=initSortedIndex(this.items.length,index=>this.items[index].text);}select(index){const menuElement=this.menuElement;if(menuElement){menuElement.select(index);}}selectByValue(value){let indexToSelect=-1;for(let i=0;i<this.items.length;i++){const item=this.items[i];if(item.value===value){indexToSelect=i;break;}}this.valueSetDirectly=true;this.select(indexToSelect);this.mdcFoundation.handleChange();}disconnectedCallback(){super.disconnectedCallback();for(const listener of this.listeners){listener.target.removeEventListener(listener.name,listener.cb);}}focus(){const focusEvt=new CustomEvent('focus');const selectAnchorElement=this.anchorElement;if(selectAnchorElement){selectAnchorElement.dispatchEvent(focusEvt);selectAnchorElement.focus();}}blur(){const focusEvt=new CustomEvent('blur');const selectAnchorElement=this.anchorElement;if(selectAnchorElement){selectAnchorElement.dispatchEvent(focusEvt);selectAnchorElement.blur();}}onFocus(){if(this.mdcFoundation){this.mdcFoundation.handleFocus();}}onBlur(){if(this.mdcFoundation){this.mdcFoundation.handleBlur();}const menuElement=this.menuElement;if(menuElement&&!menuElement.open){this.reportValidity();}}onClick(evt){if(this.mdcFoundation){this.focus();const targetClientRect=evt.target.getBoundingClientRect();let xCoord=0;if('touches'in evt){xCoord=evt.touches[0].clientX;}else {xCoord=evt.clientX;}const normalizedX=xCoord-targetClientRect.left;this.mdcFoundation.handleClick(normalizedX);}}onKeydown(evt){const arrowUp=normalizeKey(evt)===KEY.ARROW_UP;const arrowDown=normalizeKey(evt)===KEY.ARROW_DOWN;if(arrowDown||arrowUp){const shouldSelectNextItem=arrowUp&&this.index>0;const shouldSelectPrevItem=arrowDown&&this.index<this.items.length-1;if(shouldSelectNextItem){this.select(this.index-1);}else if(shouldSelectPrevItem){this.select(this.index+1);}evt.preventDefault();this.mdcFoundation.openMenu();return;}this.mdcFoundation.handleKeydown(evt);}// must capture to run before list foundation captures event
handleTypeahead(event){if(!this.menuElement){return;}const focusedItemIndex=this.menuElement.getFocusedItemIndex();const target=isNodeElement(event.target)?event.target:null;const isTargetListItem=target?target.hasAttribute('mwc-list-item'):false;const opts={event,focusItemAtIndex:index=>{this.menuElement.focusItemAtIndex(index);},focusedItemIndex,isTargetListItem,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:index=>this.items[index].disabled};handleKeydown(opts,this.typeaheadState);}async onSelected(event){if(!this.mdcFoundation){await this.updateComplete;}this.mdcFoundation.handleMenuItemAction(event.detail.index);const item=this.items[event.detail.index];if(item){this.value=item.value;}}onOpened(){if(this.mdcFoundation){this.menuOpen=true;this.mdcFoundation.handleMenuOpened();}}onClosed(){if(this.mdcFoundation){this.menuOpen=false;this.mdcFoundation.handleMenuClosed();}}setFormData(formData){if(this.name&&this.selected!==null){formData.append(this.name,this.value);}}async layout(updateItems=true){if(this.mdcFoundation){this.mdcFoundation.layout();}await this.updateComplete;const menuElement=this.menuElement;if(menuElement){menuElement.layout(updateItems);}const labelElement=this.labelElement;if(!labelElement){this.outlineOpen=false;return;}const shouldFloat=!!this.label&&!!this.value;labelElement.floatingLabelFoundation.float(shouldFloat);if(!this.outlined){return;}this.outlineOpen=shouldFloat;await this.updateComplete;/* When the textfield automatically notches due to a value and label
         * being defined, the textfield may be set to `display: none` by the user.
         * this means that the notch is of size 0px. We provide this function so
         * that the user may manually resize the notch to the floated label's
         * width.
         */const labelWidth=labelElement.floatingLabelFoundation.getWidth();if(this.outlineOpen){this.outlineWidth=labelWidth;}}async layoutOptions(){if(!this.mdcFoundation){return;}this.mdcFoundation.layoutOptions();}}__decorate([i('.mdc-select')],SelectBase.prototype,"mdcRoot",void 0);__decorate([i('.formElement')],SelectBase.prototype,"formElement",void 0);__decorate([i('slot')],SelectBase.prototype,"slotElement",void 0);__decorate([i('select')],SelectBase.prototype,"nativeSelectElement",void 0);__decorate([i('input')],SelectBase.prototype,"nativeInputElement",void 0);__decorate([i('.mdc-line-ripple')],SelectBase.prototype,"lineRippleElement",void 0);__decorate([i('.mdc-floating-label')],SelectBase.prototype,"labelElement",void 0);__decorate([i('mwc-notched-outline')],SelectBase.prototype,"outlineElement",void 0);__decorate([i('.mdc-menu')],SelectBase.prototype,"menuElement",void 0);__decorate([i('.mdc-select__anchor')],SelectBase.prototype,"anchorElement",void 0);__decorate([e({type:Boolean,attribute:'disabled',reflect:true}),observer(function(value){if(this.mdcFoundation){this.mdcFoundation.setDisabled(value);}})],SelectBase.prototype,"disabled",void 0);__decorate([e({type:Boolean}),observer(function(_newVal,oldVal){if(oldVal!==undefined&&this.outlined!==oldVal){this.layout(false);}})],SelectBase.prototype,"outlined",void 0);__decorate([e({type:String}),observer(function(_newVal,oldVal){if(oldVal!==undefined&&this.label!==oldVal){this.layout(false);}})],SelectBase.prototype,"label",void 0);__decorate([t()],SelectBase.prototype,"outlineOpen",void 0);__decorate([t()],SelectBase.prototype,"outlineWidth",void 0);__decorate([e({type:String}),observer(function(value){if(this.mdcFoundation){const initialization=this.selected===null&&!!value;const valueSetByUser=this.selected&&this.selected.value!==value;if(initialization||valueSetByUser){this.selectByValue(value);}this.reportValidity();}})],SelectBase.prototype,"value",void 0);__decorate([e()],SelectBase.prototype,"name",void 0);__decorate([t()],SelectBase.prototype,"selectedText",void 0);__decorate([e({type:String})],SelectBase.prototype,"icon",void 0);__decorate([t()],SelectBase.prototype,"menuOpen",void 0);__decorate([e({type:String})],SelectBase.prototype,"helper",void 0);__decorate([e({type:Boolean})],SelectBase.prototype,"validateOnInitialRender",void 0);__decorate([e({type:String})],SelectBase.prototype,"validationMessage",void 0);__decorate([e({type:Boolean})],SelectBase.prototype,"required",void 0);__decorate([e({type:Boolean})],SelectBase.prototype,"naturalMenuWidth",void 0);__decorate([t()],SelectBase.prototype,"isUiValid",void 0);__decorate([e({type:Boolean})],SelectBase.prototype,"fixedMenuPosition",void 0);__decorate([e$1({capture:true})],SelectBase.prototype,"handleTypeahead",null);

const styles=r`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;

// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
const debounce=(func,wait,immediate=false)=>{let timeout;const debouncedFunc=(...args)=>{const later=()=>{timeout=undefined;if(!immediate){func(...args);}};const callNow=immediate&&!timeout;clearTimeout(timeout);timeout=window.setTimeout(later,wait);if(callNow){func(...args);}};debouncedFunc.cancel=()=>{clearTimeout(timeout);};return debouncedFunc;};

const afterNextRender=cb=>{requestAnimationFrame(()=>setTimeout(cb,0));};const nextRender=()=>new Promise(resolve=>{afterNextRender(resolve);});

_decorate([n("ha-select")],function(_initialize,_SelectBase){class HaSelect extends _SelectBase{constructor(...args){super(...args);_initialize(this);}}return {F:HaSelect,d:[{kind:"field",decorators:[e({type:Boolean})],key:"icon",value:void 0},{kind:"method",key:"renderLeadingIcon",value:// @ts-ignore
function renderLeadingIcon(){if(!this.icon){return w;}return $`<span class="mdc-select__icon"
      ><slot name="icon"></slot
    ></span>`;}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HaSelect.prototype),"connectedCallback",this).call(this);window.addEventListener("translations-updated",this._translationsUpdated);}},{kind:"method",key:"disconnectedCallback",value:function disconnectedCallback(){_get(_getPrototypeOf(HaSelect.prototype),"disconnectedCallback",this).call(this);window.removeEventListener("translations-updated",this._translationsUpdated);}},{kind:"field",key:"_translationsUpdated",value(){return debounce(async()=>{await nextRender();this.layoutOptions();},500);}},{kind:"field",static:true,key:"styles",value(){return [styles,r`
      .mdc-line-ripple::before {
        border-bottom-width: 0px;
        z-index: 1;
      }
      .mdc-select:not(.mdc-select--disabled) .mdc-select__icon {
        color: var(--secondary-text-color);
      }
      .mdc-select__anchor {
        width: var(--ha-select-min-width, 200px);
        /* border-radius: 1.5rem !important; */
      }

      :host {
        /* --mdc-theme-surface: var(--input-fill-color); */
        border-bottom: 2px solid var(--form-border);
      }

      /* :host(:not([disabled]))
        .mdc-select.mdc-select--focused:not(.mdc-select--invalid)
        .mdc-floating-label {
        color: black;
      } */

      /* :host(:not([disabled]))
        .mdc-select.mdc-select--focused:not(.mdc-select--invalid)
        .mdc-select__dropdown-icon {
        fill: black;
      }*/

      .mdc-select--filled .mdc-select__anchor {
        height: 46px;
      }
      .mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after {
        /* border-bottom-color: black; */
        border-bottom: none;
      }
    `];}}]};},SelectBase);

const stopPropagation=ev=>ev.stopPropagation();

export { FormfieldBase as F, IronMeta as I, PaperInkyFocusBehavior as P, styles$1 as a, IronControlState as b, IronButtonState as c, debounce as d, PaperRippleBehavior as e, IronA11yKeysBehavior as f, afterNextRender as g, nextRender as n, stopPropagation as s };
