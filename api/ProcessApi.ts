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
import ProcessInterfaces = require("./interfaces/ProcessInterfaces");

export interface IProcessApi extends basem.ClientApiBase {
    getProcessById(processId: string): Promise<ProcessInterfaces.Process>;
    getProcesses(): Promise<ProcessInterfaces.Process[]>;
}

export class ProcessApi extends basem.ClientApiBase implements IProcessApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Core-api');
    }

    /**
    * Retrieve process by id
    * 
    * @param {string} processId
    */
    public async getProcessById(
        processId: string
        ): Promise<ProcessInterfaces.Process> {

        return new Promise<ProcessInterfaces.Process>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "core",
                    "93878975-88c5-4e6a-8abb-7ddd77a8a7d8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProcessInterfaces.Process>;
                res = await this.rest.get<ProcessInterfaces.Process>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProcessInterfaces.TypeInfo.Process,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    */
    public async getProcesses(
        ): Promise<ProcessInterfaces.Process[]> {

        return new Promise<ProcessInterfaces.Process[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "core",
                    "93878975-88c5-4e6a-8abb-7ddd77a8a7d8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<ProcessInterfaces.Process[]>;
                res = await this.rest.get<ProcessInterfaces.Process[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ProcessInterfaces.TypeInfo.Process,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
