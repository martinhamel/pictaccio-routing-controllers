import { OwnershipChecker } from '../metadata/types/OwnershipChecker';
/**
 * Marks controller action to have a special access.
 * Authorization logic must be defined in routing-controllers settings.
 */
export declare function Authorized(): Function;
/**
 * Marks controller action to have a special access.
 * Authorization logic must be defined in routing-controllers settings.
 */
export declare function Authorized(role: any): Function;
/**
 * Marks controller action to have a special access.
 * Authorization logic must be defined in routing-controllers settings.
 */
export declare function Authorized(roles: any[]): Function;
/**
 * Marks controller action to have a special access.
 * Authorization logic must be defined in routing-controllers settings.
 */
export declare function Authorized(role: Function): Function;
/**
 * Same as the others but adds possibility to provide ownership information
 */
export declare function Authorized(role: any, ownershipChecker?: OwnershipChecker): Function;
export declare function Authorized(role: any[], ownershipChecker?: OwnershipChecker): Function;
export declare function Authorized(role: Function, ownershipChecker?: OwnershipChecker): Function;
