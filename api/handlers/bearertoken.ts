// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import ifm = require('../interfaces/common/VsoBaseInterfaces');
import * as resthandlers from 'typed-rest-client/Handlers'; 

export class BearerCredentialHandler extends resthandlers.BearerCredentialHandler implements ifm.IRequestHandler {
    constructor(token: string) {
        super(token);
    }
}