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
import IdentityMruInterfaces = require("./interfaces/IdentityMruInterfaces");

export interface IIdentityMruApi extends basem.ClientApiBase {
    getMruIdentities(identityId: string, containerId: string): Promise<string[]>;
    setMruIdentities(identityIds: string[], identityId: string, containerId: string): Promise<void>;
    updateMruIdentities(updateData: IdentityMruInterfaces.MruIdentitiesUpdateData, identityId: string, containerId: string): Promise<void>;
}

export class IdentityMruApi extends basem.ClientApiBase implements IIdentityMruApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-IdentityMru-api');
    }

    /**
    * @param {string} identityId
    * @param {string} containerId
    */
    public async getMruIdentities(
        identityId: string,
        containerId: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                identityId: identityId,
                containerId: containerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Identity",
                    "15d952a1-bb4e-436c-88ca-cfe1e9ff3331",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string[]>;
                res = await this.rest.get<string[]>(url, options);

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

    /**
    * @param {string[]} identityIds
    * @param {string} identityId
    * @param {string} containerId
    */
    public async setMruIdentities(
        identityIds: string[],
        identityId: string,
        containerId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                identityId: identityId,
                containerId: containerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Identity",
                    "15d952a1-bb4e-436c-88ca-cfe1e9ff3331",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, identityIds, options);

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
    * @param {IdentityMruInterfaces.MruIdentitiesUpdateData} updateData
    * @param {string} identityId
    * @param {string} containerId
    */
    public async updateMruIdentities(
        updateData: IdentityMruInterfaces.MruIdentitiesUpdateData,
        identityId: string,
        containerId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                identityId: identityId,
                containerId: containerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Identity",
                    "15d952a1-bb4e-436c-88ca-cfe1e9ff3331",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, updateData, options);

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
