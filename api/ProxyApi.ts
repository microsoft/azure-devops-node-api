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
import ProxyInterfaces = require("./interfaces/ProxyInterfaces");

export interface IProxyApi extends basem.ClientApiBase {
    createOrUpdateProxy(proxy: ProxyInterfaces.Proxy): Promise<ProxyInterfaces.Proxy>;
    deleteProxy(proxyUrl: string, site?: string): Promise<void>;
    getProxies(proxyUrl?: string): Promise<ProxyInterfaces.Proxy[]>;
}

export class ProxyApi extends basem.ClientApiBase implements IProxyApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Core-api');
    }

    /**
    * @param {ProxyInterfaces.Proxy} proxy
    */
    public async createOrUpdateProxy(
        proxy: ProxyInterfaces.Proxy
        ): Promise<ProxyInterfaces.Proxy> {

        return new Promise<ProxyInterfaces.Proxy>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "core",
                    "ec1f4311-f2b4-4c15-b2b8-8990b80d2908",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProxyInterfaces.Proxy>;
                res = await this.rest.replace<ProxyInterfaces.Proxy>(url, proxy, options);

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
    * @param {string} proxyUrl
    * @param {string} site
    */
    public async deleteProxy(
        proxyUrl: string,
        site?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                proxyUrl: proxyUrl,
                site: site,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "core",
                    "ec1f4311-f2b4-4c15-b2b8-8990b80d2908",
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
    * @param {string} proxyUrl
    */
    public async getProxies(
        proxyUrl?: string
        ): Promise<ProxyInterfaces.Proxy[]> {

        return new Promise<ProxyInterfaces.Proxy[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                proxyUrl: proxyUrl,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "core",
                    "ec1f4311-f2b4-4c15-b2b8-8990b80d2908",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProxyInterfaces.Proxy[]>;
                res = await this.rest.get<ProxyInterfaces.Proxy[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
