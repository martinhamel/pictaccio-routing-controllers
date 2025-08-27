import { getMetadataArgsStorage } from '../index';

export function ViewRender(template: string) {
  return function(object: any, methodName: string) {
    getMetadataArgsStorage().responseHandlers.push({
      type: 'view',
      target: object.constructor,
      method: methodName,
      value: template
    });

    getMetadataArgsStorage().responseHandlers.push({
      type: 'rendered-template',
      target: object.constructor,
      method: methodName,
      value: template,
    });
  };
}