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

export interface IMarketingPreferencesApi extends basem.ClientApiBase {
    getMarketingPreferences(contactPoints: string[]): Promise<{ [key: string] : boolean; }>;
    setMarketingPreferences(contactPoint: string, canContact: boolean, country: string): Promise<boolean>;
}

export class MarketingPreferencesApi extends basem.ClientApiBase implements IMarketingPreferencesApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-MarketingPreferences-api');
    }

    /**
    * @param {string[]} contactPoints
    */
    public async getMarketingPreferences(
        contactPoints: string[]
        ): Promise<{ [key: string] : boolean; }> {

        return new Promise<{ [key: string] : boolean; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                contactPoints: contactPoints,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "MarketingPreferences",
                    "2c34206e-7550-4ea7-b1f2-e0967c21ac13",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : boolean; }>;
                res = await this.rest.get<{ [key: string] : boolean; }>(url, options);

                let ret = this.formatResponse(res.result,
                                              TypeInfo.{ [key: string] : boolean; },
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Sets marketing preference of a given user
    * 
    * @param {string} contactPoint
    * @param {boolean} canContact
    * @param {string} country
    */
    public async setMarketingPreferences(
        contactPoint: string,
        canContact: boolean,
        country: string
        ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                contactPoint: contactPoint,
                canContact: canContact,
                country: country,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "MarketingPreferences",
                    "2c34206e-7550-4ea7-b1f2-e0967c21ac13",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<boolean>;
                res = await this.rest.create<boolean>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
