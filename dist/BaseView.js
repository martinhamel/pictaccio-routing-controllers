"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseView = void 0;
class BaseView {
    constructor(controller) {
        this._controller = controller;
    }
    /**
     *
     * @param actionMetadata
     * @param action
     * @param params
     */
    executeAction(actionMetadata, action, params) {
        throw new Error('Not implemented');
    }
}
exports.BaseView = BaseView;
//# sourceMappingURL=BaseView.js.map