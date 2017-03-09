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
import ConnectedServiceInterfaces = require("./interfaces/ConnectedServiceInterfaces");

export interface IConnectedServiceApi extends basem.ClientApiBase {
    createAuthRequest(authRequest: ConnectedServiceInterfaces.AuthRequest, project: string, providerId: string): Promise<ConnectedServiceInterfaces.AuthRequest>;
}

export class ConnectedServiceApi extends basem.ClientApiBase implements IConnectedServiceApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-ConnectedService-api');
    }

    /**
    * @param {ConnectedServiceInterfaces.AuthRequest} authRequest
    * @param {string} project - Project ID or project name
    * @param {string} providerId
    */
    public async createAuthRequest(
        authRequest: ConnectedServiceInterfaces.AuthRequest,
        project: string,
        providerId: string
        ): Promise<ConnectedServiceInterfaces.AuthRequest> {

        return new Promise<ConnectedServiceInterfaces.AuthRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                providerId: providerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "connectedService",
                    "e921b68f-92d6-44d4-aa88-19c84be1c4c7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ConnectedServiceInterfaces.AuthRequest>;
                res = await this.rest.create<ConnectedServiceInterfaces.AuthRequest>(url, authRequest, options);

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
