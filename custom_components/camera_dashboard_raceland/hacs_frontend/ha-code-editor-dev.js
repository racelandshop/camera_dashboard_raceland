const __DEMO__ = false;
    const __SUPERVISOR__ = true;
    const __BUILD__ = "latest"

import { aD as StructError } from './auth-dev.js';
import { _ as _decorate, l as a, d as e, t, j as _get, k as _getPrototypeOf, b as memoizeOne, f as fireEvent, r, n } from './main-dev.js';
import 'lit-html/is-server.js';

const handleStructError=(hass,err)=>{if(!(err instanceof StructError)){return {warnings:[err.message],errors:undefined};}const errors=[];const warnings=[];for(const failure of err.failures()){if(failure.value===undefined){errors.push(hass.localize("ui.errors.config.key_missing","key",failure.path.join(".")));}else if(failure.type==="never"){warnings.push(hass.localize("ui.errors.config.key_not_expected","key",failure.path.join(".")));}else if(failure.type==="union"){continue;}else if(failure.type==="enums"){warnings.push(hass.localize("ui.errors.config.key_wrong_type","key",failure.path.join("."),"type_correct",failure.message.replace("Expected ","").split(", ")[0],"type_wrong",JSON.stringify(failure.value)));}else {warnings.push(hass.localize("ui.errors.config.key_wrong_type","key",failure.path.join("."),"type_correct",failure.refinement||failure.type,"type_wrong",JSON.stringify(failure.value)));}}return {warnings,errors};};

let loaded;const loadCodeMirror=async()=>{if(!loaded){loaded=import('./codemirror-dev.js');}return loaded;};

const saveKeyBinding={key:"Mod-s",run:view=>{fireEvent(view.dom,"editor-save");return true;}};_decorate([n("ha-code-editor")],function(_initialize,_ReactiveElement){class HaCodeEditor extends _ReactiveElement{constructor(...args){super(...args);_initialize(this);}}return {F:HaCodeEditor,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[e()],key:"mode",value(){return "yaml";}},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[e({type:Boolean})],key:"autofocus",value(){return false;}},{kind:"field",decorators:[e({type:Boolean})],key:"readOnly",value(){return false;}},{kind:"field",decorators:[e({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value(){return false;}},{kind:"field",decorators:[e()],key:"error",value(){return false;}},{kind:"field",decorators:[t()],key:"_value",value(){return "";}},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"set",key:"value",value:function value(_value){this._value=_value;}},{kind:"get",key:"value",value:function value(){return this.codemirror?this.codemirror.state.doc.toString():this._value;}},{kind:"get",key:"hasComments",value:function hasComments(){if(!this.codemirror||!this._loadedCodeMirror){return false;}const className=this._loadedCodeMirror.HighlightStyle.get(this.codemirror.state,this._loadedCodeMirror.tags.comment);return !!this.shadowRoot.querySelector(`span.${className}`);}},{kind:"method",key:"connectedCallback",value:function connectedCallback(){_get(_getPrototypeOf(HaCodeEditor.prototype),"connectedCallback",this).call(this);if(!this.codemirror){return;}if(this.autofocus!==false){this.codemirror.focus();}}},{kind:"method",key:"update",value:function update(changedProps){_get(_getPrototypeOf(HaCodeEditor.prototype),"update",this).call(this,changedProps);if(!this.codemirror){return;}if(changedProps.has("mode")){this.codemirror.dispatch({effects:this._loadedCodeMirror.langCompartment.reconfigure(this._mode)});}if(changedProps.has("readOnly")){this.codemirror.dispatch({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))});}if(changedProps.has("_value")&&this._value!==this.value){this.codemirror.dispatch({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}});}if(changedProps.has("error")){this.classList.toggle("error-state",this.error);}}},{kind:"method",key:"firstUpdated",value:function firstUpdated(changedProps){_get(_getPrototypeOf(HaCodeEditor.prototype),"firstUpdated",this).call(this,changedProps);this._blockKeyboardShortcuts();this._load();}},{kind:"get",key:"_mode",value:function _mode(){return this._loadedCodeMirror.langs[this.mode];}},{kind:"method",key:"_load",value:async function _load(){this._loadedCodeMirror=await loadCodeMirror();const extensions=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(true),this._loadedCodeMirror.history(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,saveKeyBinding]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.theme,this._loadedCodeMirror.Prec.fallback(this._loadedCodeMirror.highlightStyle),this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.EditorView.updateListener.of(update=>this._onUpdate(update))];if(!this.readOnly&&this.autocompleteEntities&&this.hass){extensions.push(this._loadedCodeMirror.autocompletion({override:[this._entityCompletions.bind(this)],maxRenderedOptions:10}));}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions}),root:this.shadowRoot,parent:this.shadowRoot});}},{kind:"field",key:"_getStates",value(){return memoizeOne(states=>{if(!states){return [];}const options=Object.keys(states).map(key=>({type:"variable",label:key,detail:states[key].attributes.friendly_name,info:`State: ${states[key].state}`}));return options;});}},{kind:"method",key:"_entityCompletions",value:function _entityCompletions(context){const entityWord=context.matchBefore(/[a-z_]{3,}\./);if(!entityWord||entityWord.from===entityWord.to&&!context.explicit){return null;}const states=this._getStates(this.hass.states);if(!states||!states.length){return null;}return {from:Number(entityWord.from),options:states,span:/^\w*.\w*$/};}},{kind:"method",key:"_blockKeyboardShortcuts",value:function _blockKeyboardShortcuts(){this.addEventListener("keydown",ev=>ev.stopPropagation());}},{kind:"method",key:"_onUpdate",value:function _onUpdate(update){if(!update.docChanged){return;}const newValue=this.value;if(newValue===this._value){return;}this._value=newValue;fireEvent(this,"value-changed",{value:this._value});}},{kind:"get",static:true,key:"styles",value:function styles(){return r`
      :host(.error-state) .cm-gutters {
        border-color: var(--error-state-color, red);
      }
    `;}}]};},a);

export { handleStructError as h };
