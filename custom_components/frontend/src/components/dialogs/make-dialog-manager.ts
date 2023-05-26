import { HASSDomEvent, ValidHassDomEvent } from 'custom-card-helpers';
import { ProvideHassElement } from '../../provide-hass-lit-mixin';

const MAIN_WINDOW_NAME = 'ha-main-window';

const mainWindow = window.name === MAIN_WINDOW_NAME ? window : parent.name === MAIN_WINDOW_NAME ? parent : top!;

declare global {
  // for fire event
  interface HASSDomEvents {
    'show-dialog': ShowDialogParams<unknown>;
    'close-dialog': undefined;
    'dialog-closed': DialogClosedParams;
  }
  // for add event listener
  interface HTMLElementEventMap {
    'show-dialog': HASSDomEvent<ShowDialogParams<unknown>>;
    'dialog-closed': HASSDomEvent<DialogClosedParams>;
  }
}

export interface HassDialog<T = HASSDomEvents[ValidHassDomEvent]> extends HTMLElement {
  showDialog(params: T);
  closeDialog?: () => boolean | void;
}

interface ShowDialogParams<T> {
  dialogTag: keyof HTMLElementTagNameMap;
  dialogImport: () => Promise<unknown>;
  dialogParams: T;
  addHistory?: boolean;
}

export interface DialogClosedParams {
  dialog: string;
}

export interface DialogState {
  dialog: string;
  open: boolean;
  oldState: null | DialogState;
  dialogParams?: unknown;
}

const LOADED = {};

export const showDialog = async (
  element: HTMLElement & ProvideHassElement,
  root: ShadowRoot | HTMLElement,
  dialogTag: string,
  dialogParams: unknown,
  dialogImport?: () => Promise<unknown>,
  addHistory = true
) => {
  if (!(dialogTag in LOADED)) {
    if (!dialogImport) {
      return;
    }
    LOADED[dialogTag] = dialogImport().then(() => {
      const dialogEl = document.createElement(dialogTag) as HassDialog;
      element.provideHass(dialogEl);
      return dialogEl;
    });
  }

  if (addHistory) {
    mainWindow.history.replaceState(
      {
        dialog: dialogTag,
        open: false,
        oldState:
          mainWindow.history.state?.open && mainWindow.history.state?.dialog !== dialogTag
            ? mainWindow.history.state
            : null,
      },
      ''
    );
    try {
      mainWindow.history.pushState({ dialog: dialogTag, dialogParams: dialogParams, open: true }, '');
    } catch (err) {
      // dialogParams could not be cloned, probably contains callback
      mainWindow.history.pushState({ dialog: dialogTag, dialogParams: null, open: true }, '');
    }
  }
  console.log('dialogTag', dialogTag);
  console.log('LOADED', LOADED);
  const dialogElement = await LOADED[dialogTag];
  // Append it again so it's the last element in the root,
  // so it's guaranteed to be on top of the other elements
  root.appendChild(dialogElement);
  dialogElement.showDialog(dialogParams);
};

export const replaceDialog = () => {
  mainWindow.history.replaceState({ ...mainWindow.history.state, replaced: true }, '');
};

export const closeDialog = async (dialogTag: string): Promise<boolean> => {
  if (!(dialogTag in LOADED)) {
    return true;
  }
  const dialogElement: HassDialog = await LOADED[dialogTag];
  if (dialogElement.closeDialog) {
    return dialogElement.closeDialog() !== false;
  }
  return true;
};

export const makeDialogManager = (element: HTMLElement & ProvideHassElement, root: ShadowRoot | HTMLElement) => {
  element.addEventListener('show-dialog', (e: HASSDomEvent<ShowDialogParams<unknown>>) => {
    const { dialogTag, dialogImport, dialogParams, addHistory } = e.detail;
    showDialog(element, root, dialogTag, dialogParams, dialogImport, addHistory);
  });
};
