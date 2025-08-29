"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewRender = ViewRender;
const index_1 = require("../index");
function ViewRender(template) {
    return function (object, methodName) {
        (0, index_1.getMetadataArgsStorage)().responseHandlers.push({
            type: 'view',
            target: object.constructor,
            method: methodName,
            value: template
        });
        (0, index_1.getMetadataArgsStorage)().responseHandlers.push({
            type: 'rendered-template',
            target: object.constructor,
            method: methodName,
            value: template,
        });
    };
}
//# sourceMappingURL=ViewRender.js.map