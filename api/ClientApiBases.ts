// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import serm = require('./Serialization');
import * as rm from 'typed-rest-client/RestClient';
import * as hm from 'typed-rest-client/HttpClient';

export class ClientApiBase {
    baseUrl: string;
    userAgent: string;
    http: hm.HttpClient;
    rest: rm.RestClient;

    // TODO: delete these three after regen
    httpClient: httpm.HttpCallbackClient;
    restCallbackClient: restm.RestCallbackClient;
    restClient: restm.RestClient;

    vsoClient: vsom.VsoClient;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], userAgent?: string);

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], userAgent: string) {
        this.baseUrl = baseUrl;

        this.http = new hm.HttpClient(userAgent, handlers);
        this.rest = new rm.RestClient(userAgent, null, handlers);

        // TODO: delete these three after regen
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
            this.restCallbackClient.get(this.vsoClient.resolveUrl('/_apis/connectionData'), "", (err: any, statusCode: number, obj: any) => {
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

    public createRequestOptions(type: string, apiVersion?: string) {
        let options: rm.IRequestOptions = <rm.IRequestOptions>{};
        options.acceptHeader = this.createAcceptHeader(type, apiVersion);
        return options;
    }

    public formatResponse(data: any, responseTypeMetadata: any, isCollection: boolean): any {
        let serializationData = {  
            responseTypeMetadata: responseTypeMetadata, 
            responseIsCollection: isCollection 
        };
        let deserializedResult = serm.ContractSerializer.deserialize(data, 
                                            serializationData.responseTypeMetadata, 
                                            false, 
                                            serializationData.responseIsCollection);
        return deserializedResult;
    } 
}