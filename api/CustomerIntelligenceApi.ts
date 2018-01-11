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
import CustomerIntelligenceInterfaces = require("./interfaces/CustomerIntelligenceInterfaces");

export interface ICustomerIntelligenceApi extends basem.ClientApiBase {
    publishEvents(events: CustomerIntelligenceInterfaces.CustomerIntelligenceEvent[]): Promise<void>;
}

export class CustomerIntelligenceApi extends basem.ClientApiBase implements ICustomerIntelligenceApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-CustomerIntelligence-api', options);
    }

    /**
     * @param {CustomerIntelligenceInterfaces.CustomerIntelligenceEvent[]} events
     */
    public async publishEvents(
        events: CustomerIntelligenceInterfaces.CustomerIntelligenceEvent[]
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "customerintelligence",
                    "b5cc35c2-ff2b-491d-a085-24b6e9f396fd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, events, options);

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
