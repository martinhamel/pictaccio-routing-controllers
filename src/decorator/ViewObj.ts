import { ParamOptions } from '../decorator-options/ParamOptions';
import { getMetadataArgsStorage } from '../index';

/**
 * Injects a request's query parameter value to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
export function ViewObj(options?: ParamOptions): Function {
  return function (object: Object, methodName: string, index: number) {
    getMetadataArgsStorage().params.push({
      type: 'view-obj',
      object: object,
      method: methodName,
      index: index,
      parse: options ? options.parse as boolean : false,
      required: options ? options.required as boolean : false,
      classTransform: options ? options.transform : undefined,
      explicitType: options ? options.type : undefined,
      validate: options ? options.validate : undefined,
      isArray: options?.isArray ?? false,
    });
  };
}
