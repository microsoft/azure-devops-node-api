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
import AzureTfsInterfaces = require("./interfaces/AzureTfsInterfaces");

export interface IAzureTfsApi extends basem.ClientApiBase {
    configureContinuousDeployment(configuration: AzureTfsInterfaces.ContinuousDeploymentConfiguration): Promise<AzureTfsInterfaces.ContinuousDeploymentOperation>;
    getContinuousDeploymentOperation(continuousDeploymentOperationId: string): Promise<AzureTfsInterfaces.ContinuousDeploymentOperation>;
}

export class AzureTfsApi extends basem.ClientApiBase implements IAzureTfsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-AzureTfs-api');
    }

    /**
    * @param {AzureTfsInterfaces.ContinuousDeploymentConfiguration} configuration
    */
    public async configureContinuousDeployment(
        configuration: AzureTfsInterfaces.ContinuousDeploymentConfiguration
        ): Promise<AzureTfsInterfaces.ContinuousDeploymentOperation> {

        return new Promise<AzureTfsInterfaces.ContinuousDeploymentOperation>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "AzureTfs",
                    "76e9f914-2f9a-405d-8a22-e7034cb400c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<AzureTfsInterfaces.ContinuousDeploymentOperation>;
                res = await this.rest.create<AzureTfsInterfaces.ContinuousDeploymentOperation>(url, configuration, options);

                let ret = this.formatResponse(res.result,
                                              AzureTfsInterfaces.TypeInfo.ContinuousDeploymentOperation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} continuousDeploymentOperationId
    */
    public async getContinuousDeploymentOperation(
        continuousDeploymentOperationId: string
        ): Promise<AzureTfsInterfaces.ContinuousDeploymentOperation> {

        return new Promise<AzureTfsInterfaces.ContinuousDeploymentOperation>(async (resolve, reject) => {
            let routeValues: any = {
                continuousDeploymentOperationId: continuousDeploymentOperationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "AzureTfs",
                    "76e9f914-2f9a-405d-8a22-e7034cb400c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<AzureTfsInterfaces.ContinuousDeploymentOperation>;
                res = await this.rest.get<AzureTfsInterfaces.ContinuousDeploymentOperation>(url, options);

                let ret = this.formatResponse(res.result,
                                              AzureTfsInterfaces.TypeInfo.ContinuousDeploymentOperation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
