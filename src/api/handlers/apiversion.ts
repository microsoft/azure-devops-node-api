// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/// <reference path="../definitions/node.d.ts"/>

import VsoBaseInterfaces = require('../interfaces/common/VsoBaseInterfaces');

export class ApiVersionHandler implements VsoBaseInterfaces.IRequestHandler {
    apiVersion: string;

    constructor(apiVersion: string) {
        this.apiVersion = apiVersion;
    }

    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options:any): void {
    	if (options.headers && options.headers['Accept']) {
    		options.headers["Accept"] = options.headers['Accept'] + '; api-version=' + this.apiVersion;	
    	}
    }
}
