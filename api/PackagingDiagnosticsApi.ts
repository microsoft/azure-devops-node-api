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
import PackagingDiagnosticsInterfaces = require("./interfaces/PackagingDiagnosticsInterfaces");

export interface IPackagingDiagnosticsApi extends basem.ClientApiBase {
    getItem(experience: string, item: string): Promise<PackagingDiagnosticsInterfaces.ItemStoreItem>;
}

export class PackagingDiagnosticsApi extends basem.ClientApiBase implements IPackagingDiagnosticsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-PackagingDiagnostics-api');
    }

    /**
    * Exposes ItemStore items to the AccountAdmin service. This is an undocumented internal API intended only to support engineering diagnostics via the AccountAdmin service. Do not rely on its existence or structure. This API can only be called by the AccountAdmin service.
    * 
    * @param {string} experience
    * @param {string} item
    */
    public async getItem(
        experience: string,
        item: string
        ): Promise<PackagingDiagnosticsInterfaces.ItemStoreItem> {

        return new Promise<PackagingDiagnosticsInterfaces.ItemStoreItem>(async (resolve, reject) => {
            let routeValues: any = {
                experience: experience,
                item: item
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "PackagingDiagnostics",
                    "590f8ec4-01ec-46ea-907e-f2aafa542f89",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<PackagingDiagnosticsInterfaces.ItemStoreItem>;
                res = await this.rest.get<PackagingDiagnosticsInterfaces.ItemStoreItem>(url, options);

                let ret = this.formatResponse(res.result,
                                              PackagingDiagnosticsInterfaces.TypeInfo.ItemStoreItem,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
