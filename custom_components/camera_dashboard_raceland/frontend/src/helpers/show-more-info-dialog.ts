import { fireEvent } from 'custom-card-helpers';

export interface MoreInfoParams {
  entityId: string;
}

export const importMoreInfoCameraDialog = () => import('../components/dialogs/ha-more-info-dialog');

export const showMoreInfoDialog = (element: HTMLElement, moreInfoParams: MoreInfoParams): void => {
  fireEvent(element, 'show-dialog', {
    dialogTag: 'ha-more-info-dialog-camera',
    dialogImport: () => importMoreInfoCameraDialog,
    dialogParams: moreInfoParams,
  });
};
