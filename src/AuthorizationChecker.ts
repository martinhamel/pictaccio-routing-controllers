import { Action } from './Action';
import { OwnershipChecker } from './metadata/types/OwnershipChecker';

/**
 * Special function used to check user authorization roles per request.
 * Must return true or promise with boolean true resolved for authorization to succeed.
 */
export type AuthorizationChecker = (action: Action,
                                    roles: any[],
                                    hasOwnership: OwnershipChecker) => Promise<boolean> | boolean;
