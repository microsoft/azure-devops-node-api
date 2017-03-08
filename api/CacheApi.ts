/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.

import * as restm from 'typed-rest-client/RestClient';
import * as httpm from 'typed-rest-client/HttpClient';
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');

export interface ICacheApi extends basem.ClientApiBase {
    cache(data: any): Promise<string>;
    delete(cacheKey: string): Promise<void>;
    get(cacheKey: string): Promise<any>;
}

export class CacheApi extends basem.ClientApiBase implements ICacheApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Cache-api');
    }

    /**
    * @param {any} data
    */
    public async cache(
        data: any
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Cache",
                    "656342eb-ae7d-4ff2-802f-19c6e35b0fe6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string>;
                res = await this.rest.replace<string>(url, data, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} cacheKey
    */
    public async delete(
        cacheKey: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                cacheKey: cacheKey,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Cache",
                    "656342eb-ae7d-4ff2-802f-19c6e35b0fe6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} cacheKey
    */
    public async get(
        cacheKey: string
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                cacheKey: cacheKey,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Cache",
                    "656342eb-ae7d-4ff2-802f-19c6e35b0fe6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<any>;
                res = await this.rest.get<any>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
