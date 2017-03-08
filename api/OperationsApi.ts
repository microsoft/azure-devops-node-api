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
import OperationsInterfaces = require("./interfaces/OperationsInterfaces");

export interface IOperationsApi extends basem.ClientApiBase {
    getOperation(operationId: string): Promise<OperationsInterfaces.Operation>;
}

export class OperationsApi extends basem.ClientApiBase implements IOperationsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Operations-api');
    }

    /**
    * Gets an operation from the the Id.
    * 
    * @param {string} operationId - The id for the operation.
    */
    public async getOperation(
        operationId: string
        ): Promise<OperationsInterfaces.Operation> {

        return new Promise<OperationsInterfaces.Operation>(async (resolve, reject) => {
            let routeValues: any = {
                operationId: operationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "operations",
                    "9a1b74b4-2ca8-4a9f-8470-c2f2e6fdc949",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<OperationsInterfaces.Operation>;
                res = await this.rest.get<OperationsInterfaces.Operation>(url, options);

                let ret = this.formatResponse(res.result,
                                              OperationsInterfaces.TypeInfo.Operation,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
