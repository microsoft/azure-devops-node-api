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
    getAccount(accountId: string, properties?: string): Promise<AccountsInterfaces.Account>;
    getAccounts(ownerId?: string, memberId?: string, properties?: string): Promise<AccountsInterfaces.Account[]>;
    isValidAccountName(accountName: string): Promise<AccountsInterfaces.AccountNameAvailability>;
    getRegions(): Promise<AccountsInterfaces.AccountRegion[]>;
    getAccountSettings(): Promise<{ [key: string] : string; }>;
}

export class AccountsApi extends basem.ClientApiBase implements IAccountsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Accounts-api');
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
                    "3.2-preview.1",
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
    * @param {string} properties
    */
    public async getAccount(
        accountId: string,
        properties?: string
        ): Promise<AccountsInterfaces.Account> {

        return new Promise<AccountsInterfaces.Account>(async (resolve, reject) => {
            let routeValues: any = {
                accountId: accountId
            };

            let queryValues: any = {
                properties: properties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Account",
                    "229a6a53-b428-4ffb-a835-e8f36b5b4b1e",
                    routeValues,
                    queryValues);

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
    * A new version GetAccounts API. Only supports limited set of parameters, returns a list of account ref objects that only contains AccountUrl, AccountName and AccountId information, will use collection host Id as the AccountId.
    * 
    * @param {string} ownerId - Owner Id to query for
    * @param {string} memberId - Member Id to query for
    * @param {string} properties - Only support service URL properties
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
                    "3.2-preview.1",
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
    * @param {string} accountName
    */
    public async isValidAccountName(
        accountName: string
        ): Promise<AccountsInterfaces.AccountNameAvailability> {

        return new Promise<AccountsInterfaces.AccountNameAvailability>(async (resolve, reject) => {
            let routeValues: any = {
                accountName: accountName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Account",
                    "65dd1dc5-53fe-4c67-9b4e-0ec3e2539998",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AccountsInterfaces.AccountNameAvailability>;
                res = await this.rest.get<AccountsInterfaces.AccountNameAvailability>(url, options);

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
    */
    public async getRegions(
        ): Promise<AccountsInterfaces.AccountRegion[]> {

        return new Promise<AccountsInterfaces.AccountRegion[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Account",
                    "642a93c7-8385-4d63-a5a5-20d044fe504f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AccountsInterfaces.AccountRegion[]>;
                res = await this.rest.get<AccountsInterfaces.AccountRegion[]>(url, options);

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

    /**
    */
    public async getAccountSettings(
        ): Promise<{ [key: string] : string; }> {

        return new Promise<{ [key: string] : string; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
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
