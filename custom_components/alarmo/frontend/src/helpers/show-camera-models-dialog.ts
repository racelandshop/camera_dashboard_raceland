import { fireEvent } from 'custom-card-helpers';
import { cameraModel } from '../types';

export interface CameraModelsDialogParams {
  cameraDatabase: any;
  modelsInfo: Array<cameraModel>;
}

export const importCameraModelsDialog = () => import('../components/dialogs/add-camera-model-dialog');

export const showModelOptionsDialog = (
  element: HTMLElement,
  cameraModelsDialogParams: CameraModelsDialogParams
): void => {
  console.log('calling the dialog');
  console.log(cameraModelsDialogParams);
  fireEvent(element, 'show-dialog', {
    dialogTag: 'camera-brand-dialog',
    dialogImport: importCameraModelsDialog,
    dialogParams: cameraModelsDialogParams,
  });
};
