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
import UserMappingInterfaces = require("./interfaces/UserMappingInterfaces");

export interface IUserMappingApi extends basem.ClientApiBase {
    activateUserAccountMapping(userId: string, accountId: string, userType?: UserMappingInterfaces.UserType): Promise<void>;
    queryAccountIds(userId: string, userType: UserMappingInterfaces.UserType, useEqualsCheckForUserTypeMatch?: boolean, includeDeletedAccounts?: boolean): Promise<string[]>;
}

export class UserMappingApi extends basem.ClientApiBase implements IUserMappingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-UserMapping-api');
    }

    /**
    * @param {string} userId
    * @param {string} accountId
    * @param {UserMappingInterfaces.UserType} userType
    */
    public async activateUserAccountMapping(
        userId: string,
        accountId: string,
        userType?: UserMappingInterfaces.UserType
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            let queryValues: any = {
                accountId: accountId,
                userType: userType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "UserMapping",
                    "0dbf02cc-5ec3-4250-a145-5beb580e0086",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, options);

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

    /**
    * @param {string} userId
    * @param {UserMappingInterfaces.UserType} userType
    * @param {boolean} useEqualsCheckForUserTypeMatch
    * @param {boolean} includeDeletedAccounts
    */
    public async queryAccountIds(
        userId: string,
        userType: UserMappingInterfaces.UserType,
        useEqualsCheckForUserTypeMatch?: boolean,
        includeDeletedAccounts?: boolean
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            let queryValues: any = {
                userType: userType,
                useEqualsCheckForUserTypeMatch: useEqualsCheckForUserTypeMatch,
                includeDeletedAccounts: includeDeletedAccounts,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "UserMapping",
                    "0dbf02cc-5ec3-4250-a145-5beb580e0086",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string[]>;
                res = await this.rest.get<string[]>(url, options);

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
