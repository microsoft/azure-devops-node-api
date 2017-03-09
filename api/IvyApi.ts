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
import IvyInterfaces = require("./interfaces/IvyInterfaces");

export interface IIvyApi extends basem.ClientApiBase {
    packageInfo(feed: string, module: string, revision?: string): Promise<IvyInterfaces.IvyPackage>;
}

export class IvyApi extends basem.ClientApiBase implements IIvyApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Ivy-api');
    }

    /**
    * @param {string} feed
    * @param {string} module
    * @param {string} revision
    */
    public async packageInfo(
        feed: string,
        module: string,
        revision?: string
        ): Promise<IvyInterfaces.IvyPackage> {

        return new Promise<IvyInterfaces.IvyPackage>(async (resolve, reject) => {
            let routeValues: any = {
                feed: feed,
                module: module,
                revision: revision
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "ivy",
                    "36c942a9-5f36-4b8e-b7cd-dbb106910490",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IvyInterfaces.IvyPackage>;
                res = await this.rest.get<IvyInterfaces.IvyPackage>(url, options);

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
