import { fireEvent } from 'custom-card-helpers';
import { cameraModel } from "../types";
// eslint-disable-next-line prettier/prettier
import type { backEventOptions, schemaForm } from "../types";

export interface CameraFormsDialogParams {
  data?: any;
  schema: schemaForm;
  formType: string;
  backEvent: backEventOptions;
  cameraModelInfo?: cameraModel;
}

export const importCameraFormDialog = () => import("../components/dialogs/formulary");

export const showCameraDialog = (
  element: HTMLElement,
  cameraFormDialogParams: CameraFormsDialogParams
): void => {
  fireEvent(element, "show-dialog", {
    dialogTag: "raceland-formulary",
    dialogImport: importCameraFormDialog,
    dialogParams: cameraFormDialogParams,
  });
};
