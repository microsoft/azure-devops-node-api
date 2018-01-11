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
import AccountsInterfaces = require("./interfaces/AccountsInterfaces");

export interface IAccountsApi extends basem.ClientApiBase {
    createAccount(info: AccountsInterfaces.AccountCreateInfoInternal, usePrecreated?: boolean): Promise<AccountsInterfaces.Account>;
    getAccount(accountId: string): Promise<AccountsInterfaces.Account>;
    getAccounts(ownerId?: string, memberId?: string, properties?: string): Promise<AccountsInterfaces.Account[]>;
    getAccountSettings(): Promise<{ [key: string] : string; }>;
}

export class AccountsApi extends basem.ClientApiBase implements IAccountsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Accounts-api', options);
    }

    /**
     * @param {AccountsInterfaces.AccountCreateInfoInternal} info
     * @param {boolean} usePrecreated
     */
    public async createAccount(
        info: AccountsInterfaces.AccountCreateInfoInternal,
        usePrecreated?: boolean
        ): Promise<AccountsInterfaces.Account> {

        return new Promise<AccountsInterfaces.Account>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                usePrecreated: usePrecreated,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "Account",
                    "229a6a53-b428-4ffb-a835-e8f36b5b4b1e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AccountsInterfaces.Account>;
                res = await this.rest.create<AccountsInterfaces.Account>(url, info, options);

                let ret = this.formatResponse(res.result,
                                              AccountsInterfaces.TypeInfo.Account,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} accountId
     */
    public async getAccount(
        accountId: string
        ): Promise<AccountsInterfaces.Account> {

        return new Promise<AccountsInterfaces.Account>(async (resolve, reject) => {
            let routeValues: any = {
                accountId: accountId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "Account",
                    "229a6a53-b428-4ffb-a835-e8f36b5b4b1e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AccountsInterfaces.Account>;
                res = await this.rest.get<AccountsInterfaces.Account>(url, options);

                let ret = this.formatResponse(res.result,
                                              AccountsInterfaces.TypeInfo.Account,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of accounts for a specific owner or a specific member.
     * 
     * @param {string} ownerId - ID for the owner of the accounts.
     * @param {string} memberId - ID for a member of the accounts.
     * @param {string} properties
     */
    public async getAccounts(
        ownerId?: string,
        memberId?: string,
        properties?: string
        ): Promise<AccountsInterfaces.Account[]> {

        return new Promise<AccountsInterfaces.Account[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                ownerId: ownerId,
                memberId: memberId,
                properties: properties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "Account",
                    "229a6a53-b428-4ffb-a835-e8f36b5b4b1e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AccountsInterfaces.Account[]>;
                res = await this.rest.get<AccountsInterfaces.Account[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              AccountsInterfaces.TypeInfo.Account,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     */
    public async getAccountSettings(
        ): Promise<{ [key: string] : string; }> {

        return new Promise<{ [key: string] : string; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "Account",
                    "4e012dd4-f8e1-485d-9bb3-c50d83c5b71b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ [key: string] : string; }>;
                res = await this.rest.get<{ [key: string] : string; }>(url, options);

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
