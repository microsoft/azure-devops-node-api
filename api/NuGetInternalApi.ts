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
import NuGetInternalInterfaces = require("./interfaces/NuGetInternalInterfaces");

export interface INuGetInternalApi extends basem.ClientApiBase {
    getPackageVersion(feedId: string, packageName: string, packageVersion: string, showDeleted?: boolean): Promise<NuGetInternalInterfaces.InternalNuGetMetadataEntry>;
}

export class NuGetInternalApi extends basem.ClientApiBase implements INuGetInternalApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-NuGetInternal-api');
    }

    /**
    * @param {string} feedId
    * @param {string} packageName
    * @param {string} packageVersion
    * @param {boolean} showDeleted
    */
    public async getPackageVersion(
        feedId: string,
        packageName: string,
        packageVersion: string,
        showDeleted?: boolean
        ): Promise<NuGetInternalInterfaces.InternalNuGetMetadataEntry> {

        return new Promise<NuGetInternalInterfaces.InternalNuGetMetadataEntry>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageName: packageName,
                packageVersion: packageVersion
            };

            let queryValues: any = {
                showDeleted: showDeleted,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "nugetInternal",
                    "89262d36-dccd-4f20-b1ff-1dcd2d3e61d0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<NuGetInternalInterfaces.InternalNuGetMetadataEntry>;
                res = await this.rest.get<NuGetInternalInterfaces.InternalNuGetMetadataEntry>(url, options);

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
