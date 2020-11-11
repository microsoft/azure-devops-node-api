// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import ifm = require('../interfaces/common/VsoBaseInterfaces');
import * as resthandlers from 'typed-rest-client/Handlers'; 

export class BasicCredentialHandler extends resthandlers.BasicCredentialHandler implements ifm.IRequestHandler {
    constructor(username: string, password: string, allowCrossOriginAuthentication?: boolean) {
        super(username, password, allowCrossOriginAuthentication);
    }
}