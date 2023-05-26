import { fireEvent } from 'custom-card-helpers';

export interface DeleteCameraDialogParams {
  cameraInfo; //CameraInfo is a list of camera info (add this later with the corresponding camera info interface)
}

export const importDeleteCameraDialog = () => import('../components/dialogs/delete-camera-dialog');

export const showDeleteCameraDialog = (
  element: HTMLElement,
  DeleteCameraDialogParams: DeleteCameraDialogParams
): void => {
  fireEvent(element, 'show-dialog', {
    dialogTag: 'delete-camera-dialog',
    dialogImport: importDeleteCameraDialog,
    dialogParams: DeleteCameraDialogParams,
  });
};
