// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');

export class ClientApiBase {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpCallbackClient;
    restClient: restm.RestCallbackClient;
    vsoClient: vsom.VsoClient;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], userAgent?: string);

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], userAgent: string) {
        this.baseUrl = baseUrl;
        this.httpClient = new httpm.HttpCallbackClient(userAgent, handlers);
        this.restClient = new restm.RestCallbackClient(this.httpClient);
        this.vsoClient = new vsom.VsoClient(baseUrl, this.restClient);
        this.userAgent = userAgent;
    }

    setUserAgent(userAgent: string) {
        this.userAgent = userAgent;
        this.httpClient.userAgent = userAgent;
    }
    
    public connect(): Promise<any> {
        var defer = Q.defer();
        
        this.restClient.get(this.vsoClient.resolveUrl('/_apis/connectionData'), "", null, null, (err: any, statusCode: number, obj: any) => {
            if (err) {
                err.statusCode = statusCode;
                defer.reject(err);
            }
            else {
                defer.resolve(obj);
            }
        });
        
        return defer.promise;
    }

    public createAcceptHeader(type: string, apiVersion?: string): string {
        return this.restClient.createAcceptHeader(type, apiVersion);
    }    
}