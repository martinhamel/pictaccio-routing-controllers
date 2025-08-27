import { Action } from './Action';
import { ActionMetadata } from './metadata/ActionMetadata';
export declare abstract class BaseView {
    protected _controller: any;
    constructor(controller: any);
    /**
     *
     * @param actionMetadata
     * @param action
     * @param params
     */
    executeAction(actionMetadata: ActionMetadata, action: Action, params: any[]): Promise<any> | any;
}
