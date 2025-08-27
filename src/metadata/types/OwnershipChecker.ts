import { Action } from '../../Action';

export type OwnershipChecker = (action?: Action, user?: any) => boolean | Promise<boolean>;
