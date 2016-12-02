// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');

export class ClientApiBase {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpCallbackClient;
    restCallbackClient: restm.RestCallbackClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], userAgent?: string);

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], userAgent: string) {
        this.baseUrl = baseUrl;
        this.httpClient = new httpm.HttpCallbackClient(userAgent, handlers);
        this.restCallbackClient = new restm.RestCallbackClient(this.httpClient);
        this.restClient = new restm.RestClient(userAgent, handlers);
        this.vsoClient = new vsom.VsoClient(baseUrl, this.restCallbackClient);
        this.userAgent = userAgent;
    }

    setUserAgent(userAgent: string) {
        this.userAgent = userAgent;
        this.httpClient.userAgent = userAgent;
    }
    
    public connect(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restCallbackClient.get(this.vsoClient.resolveUrl('/_apis/connectionData'), "", null, (err: any, statusCode: number, obj: any) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(obj);
                }
            }, null);
        });
    }

    public createAcceptHeader(type: string, apiVersion?: string): string {
        return this.restCallbackClient.createAcceptHeader(type, apiVersion);
    }    
}