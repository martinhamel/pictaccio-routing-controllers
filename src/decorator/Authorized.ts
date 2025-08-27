import { getMetadataArgsStorage } from '../index';
import { OwnershipChecker } from '../metadata/types/OwnershipChecker';

/**
 * Marks controller action to have a special access.
 * Authorization logic must be defined in routing-controllers settings.
 */
export function Authorized(): Function;

/**
 * Marks controller action to have a special access.
 * Authorization logic must be defined in routing-controllers settings.
 */
export function Authorized(role: any): Function;

/**
 * Marks controller action to have a special access.
 * Authorization logic must be defined in routing-controllers settings.
 */
export function Authorized(roles: any[]): Function;

/**
 * Marks controller action to have a special access.
 * Authorization logic must be defined in routing-controllers settings.
 */
export function Authorized(role: Function): Function;

/**
 * Same as the others but adds possibility to provide ownership information
 */
export function Authorized(role: any, ownershipChecker?: OwnershipChecker): Function;
export function Authorized(role: any[], ownershipChecker?: OwnershipChecker): Function;
export function Authorized(role: Function, ownershipChecker?: OwnershipChecker): Function;

/**
 * Marks controller action to have a special access.
 * Authorization logic must be defined in routing-controllers settings.
 */
export function Authorized(roleOrRoles?: string | string[] | Function,
                           ownershipChecker?: OwnershipChecker): Function {
  return function (clsOrObject: Function | Object, method?: string) {
    getMetadataArgsStorage().responseHandlers.push({
      type: 'authorized',
      target: method ? clsOrObject.constructor : (clsOrObject as Function),
      method: method,
      value: roleOrRoles,
      secondaryValue: ownershipChecker
    });
  };
}
