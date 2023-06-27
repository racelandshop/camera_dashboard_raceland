import { fireEvent } from 'custom-card-helpers';
import { CameraInfo } from '../types';

export interface DeleteCameraDialogParams {
  cameraInfo: CameraInfo;
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
