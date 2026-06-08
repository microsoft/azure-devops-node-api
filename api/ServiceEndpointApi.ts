// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import serviceendpointbasem = require('./ServiceEndpointApiBase');

export interface IServiceEndpointApi extends serviceendpointbasem.IServiceEndpointApiBase {
}

export class ServiceEndpointApi extends serviceendpointbasem.ServiceEndpointApiBase implements IServiceEndpointApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions, userAgent?: string) {
        super(baseUrl, handlers, options, userAgent);
    }
}
