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
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import DeploymentInterfaces = require("./interfaces/DeploymentInterfaces");

export interface IDeploymentApi extends basem.ClientApiBase {
    addImageDetails(imageDetails: DeploymentInterfaces.ImageDetails, project: string): Promise<void>;
}

export class DeploymentApi extends basem.ClientApiBase implements IDeploymentApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-deployment-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "8580c551-69db-4092-9050-c9ccd4521d2e";

    /**
     * @param {DeploymentInterfaces.ImageDetails} imageDetails
     * @param {string} project - Project ID or project name
     */
    public async addImageDetails(
        imageDetails: DeploymentInterfaces.ImageDetails,
        project: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "Deployment",
                    "647bb185-908a-4660-b59b-dff3d1ace8de",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, imageDetails, options);

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
