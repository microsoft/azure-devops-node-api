// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import ifm = require('../interfaces/common/VsoBaseInterfaces');
import * as resthandlers from 'typed-rest-client/Handlers'; 

export class NtlmCredentialHandler extends resthandlers.NtlmCredentialHandler implements ifm.IRequestHandler {
    constructor(username: string, password: string, workstation?: string, domain?: string) {
        super(username, password, workstation, domain);
    }
}