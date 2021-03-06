/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var SyncDescriptor = /** @class */ (function () {
    function SyncDescriptor(ctor) {
        var _staticArguments = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _staticArguments[_i - 1] = arguments[_i];
        }
        this.ctor = ctor;
        this.staticArguments = _staticArguments;
    }
    return SyncDescriptor;
}());
export { SyncDescriptor };
