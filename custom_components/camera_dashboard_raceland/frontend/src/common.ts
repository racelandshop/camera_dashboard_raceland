import { CameraInfo } from './types';
import { computeDomain } from 'custom-card-helpers';

/** Compute the object ID of a state. */
export const computeObjectId = (entityId: string): string => entityId.substr(entityId.indexOf('.') + 1);

export const computeStateName = (stateObj: any): string =>
  stateObj.attributes.friendly_name === undefined
    ? computeObjectId(stateObj.entity_id).replace(/_/g, ' ')
    : stateObj.attributes.friendly_name || '';

export function getCameraEntities(states) {
  const cameras: CameraInfo[] = [];
  for (const [key, value] of Object.entries(states)) {
    if (computeDomain(key) === 'camera') {
      cameras.push({
        name: value.attributes.friendly_name,
        entityID: value.entity_id,
        state: value.state,
      });
    }
  }
  return cameras;
}

export function removeTrailingSpacesInput(data) {
  const newData = {};
  for (const [key, value] of Object.entries(data)) {
    switch (typeof value) {
      case 'string':
        newData[key] = value.trim();
        break;
      case 'boolean':
      case 'number':
        newData[key] = value;
        break;
      default:
        newData[key] = value;
        break;
    }
  }
  return newData;
}