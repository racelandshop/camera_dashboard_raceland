import { fireEvent } from 'custom-card-helpers';

export interface CreateCameraDialogParams {
  cameraDatabase?: any;
}

export const importCreateCameraDialog = () => import('../components/dialogs/add-camera-dialog');

export const showCreateCameraDialog = (
  element: HTMLElement,
  createCameraDialogParams: CreateCameraDialogParams
): void => {
  fireEvent(element, 'show-dialog', {
    dialogTag: 'add-camera-dialog',
    dialogImport: importCreateCameraDialog,
    dialogParams: createCameraDialogParams,
  });
};
