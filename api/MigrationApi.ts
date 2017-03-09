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
import MigrationInterfaces = require("./interfaces/MigrationInterfaces");

export interface IMigrationApi extends basem.ClientApiBase {
    createSasToken(request: MigrationInterfaces.SasTokenInfo): Promise<MigrationInterfaces.SasTokenInfo>;
}

export class MigrationApi extends basem.ClientApiBase implements IMigrationApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Migration-api');
    }

    /**
    * @param {MigrationInterfaces.SasTokenInfo} request
    */
    public async createSasToken(
        request: MigrationInterfaces.SasTokenInfo
        ): Promise<MigrationInterfaces.SasTokenInfo> {

        return new Promise<MigrationInterfaces.SasTokenInfo>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Migration",
                    "d6978331-6b7a-4c2a-905f-7797d31a92a0",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<MigrationInterfaces.SasTokenInfo>;
                res = await this.rest.create<MigrationInterfaces.SasTokenInfo>(url, request, options);

                let ret = this.formatResponse(res.result,
                                              MigrationInterfaces.TypeInfo.SasTokenInfo,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
