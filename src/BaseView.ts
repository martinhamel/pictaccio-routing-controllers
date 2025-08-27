import { Action } from './Action';
import { ActionMetadata } from './metadata/ActionMetadata';

export abstract class BaseView {
  protected _controller: any;

  constructor(controller: any) {
    this._controller = controller;
  }

  /**
   *
   * @param actionMetadata
   * @param action
   * @param params
   */
  public executeAction(actionMetadata: ActionMetadata, action: Action, params: any[]): Promise<any> | any {
    throw new Error('Not implemented');
  }

  /* PROTECTED */
}