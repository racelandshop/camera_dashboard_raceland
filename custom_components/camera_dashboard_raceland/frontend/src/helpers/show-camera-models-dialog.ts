import { fireEvent } from 'custom-card-helpers';
import { CameraModel } from '../types';

export interface CameraModelsDialogParams {
  cameraDatabase: any;
  modelsInfo: Array<CameraModel>;
}

export const importCameraModelsDialog = () => import('../components/dialogs/add-camera-model-dialog');

export const showModelOptionsDialog = (
  element: HTMLElement,
  cameraModelsDialogParams: CameraModelsDialogParams
): void => {
  fireEvent(element, 'show-dialog', {
    dialogTag: 'camera-brand-dialog',
    dialogImport: importCameraModelsDialog,
    dialogParams: cameraModelsDialogParams,
  });
};
