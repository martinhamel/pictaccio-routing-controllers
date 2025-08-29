"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewObj = ViewObj;
const index_1 = require("../index");
/**
 * Injects a request's query parameter value to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
function ViewObj(options) {
    return function (object, methodName, index) {
        var _a;
        (0, index_1.getMetadataArgsStorage)().params.push({
            type: 'view-obj',
            object: object,
            method: methodName,
            index: index,
            parse: options ? options.parse : false,
            required: options ? options.required : false,
            classTransform: options ? options.transform : undefined,
            explicitType: options ? options.type : undefined,
            validate: options ? options.validate : undefined,
            isArray: (_a = options === null || options === void 0 ? void 0 : options.isArray) !== null && _a !== void 0 ? _a : false,
        });
    };
}
//# sourceMappingURL=ViewObj.js.map