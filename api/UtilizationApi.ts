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
import UtilizationInterfaces = require("./interfaces/UtilizationInterfaces");

export interface IUtilizationApi extends basem.ClientApiBase {
    getUsageSummary(queryCriteria: UtilizationInterfaces.UsageSummaryQueryCriteria): Promise<UtilizationInterfaces.CommandUsage[]>;
}

export class UtilizationApi extends basem.ClientApiBase implements IUtilizationApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Utilization-api');
    }

    /**
    * Returns the usage summary for the specified identity.
    * 
    * @param {UtilizationInterfaces.UsageSummaryQueryCriteria} queryCriteria - The query criteria for this request
    */
    public async getUsageSummary(
        queryCriteria: UtilizationInterfaces.UsageSummaryQueryCriteria
        ): Promise<UtilizationInterfaces.CommandUsage[]> {

        return new Promise<UtilizationInterfaces.CommandUsage[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                queryCriteria: queryCriteria,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Utilization",
                    "d3709376-907a-49d8-b7a7-c4ea99ca3772",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<UtilizationInterfaces.CommandUsage[]>;
                res = await this.rest.get<UtilizationInterfaces.CommandUsage[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              UtilizationInterfaces.TypeInfo.CommandUsage,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
