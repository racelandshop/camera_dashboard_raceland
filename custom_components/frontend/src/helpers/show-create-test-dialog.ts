import { fireEvent } from 'custom-card-helpers';

export const importCreateCameraDialog = () => import('../components/dialogs/teste-dialog');

export const showTestDialog = (element: HTMLElement): void => {
  fireEvent(element, 'show-dialog', {
    dialogTag: 'test-dialog',
    dialogImport: importCreateCameraDialog,
    dialogParams: {},
  });
};
