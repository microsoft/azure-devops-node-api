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
import AuthenticationInterfaces = require("./interfaces/AuthenticationInterfaces");

export interface IAuthenticationApi extends basem.ClientApiBase {
    createSessionToken(sessionToken: AuthenticationInterfaces.WebSessionToken): Promise<AuthenticationInterfaces.WebSessionToken>;
}

export class AuthenticationApi extends basem.ClientApiBase implements IAuthenticationApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Authentication-api');
    }

    /**
    * @param {AuthenticationInterfaces.WebSessionToken} sessionToken
    */
    public async createSessionToken(
        sessionToken: AuthenticationInterfaces.WebSessionToken
        ): Promise<AuthenticationInterfaces.WebSessionToken> {

        return new Promise<AuthenticationInterfaces.WebSessionToken>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "WebPlatformAuth",
                    "11420b6b-3324-490a-848d-b8aafdb906ba",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<AuthenticationInterfaces.WebSessionToken>;
                res = await this.rest.create<AuthenticationInterfaces.WebSessionToken>(url, sessionToken, options);

                let ret = this.formatResponse(res.result,
                                              AuthenticationInterfaces.TypeInfo.WebSessionToken,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
