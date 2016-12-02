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


import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import AccountsInterfaces = require("./interfaces/AccountsInterfaces");

export interface IAccountsApi extends basem.ClientApiBase {
    deleteAccount(accountId: string): Promise<string>;
    createAccount(info: AccountsInterfaces.AccountCreateInfoInternal, usePrecreated?: boolean): Promise<AccountsInterfaces.Account>;
    getAccount(accountId: string, properties?: string): Promise<AccountsInterfaces.Account>;
    getAccounts(creatorId?: string, ownerId?: string, memberId?: string, includeOwner?: boolean, properties?: string, includeDisabledAccounts?: boolean): Promise<AccountsInterfaces.Account[]>;
    updateAccount(account: AccountsInterfaces.Account, accountId: string): Promise<void>;
    isValidAccountName(accountName: string): Promise<AccountsInterfaces.AccountNameAvailability>;
    getRegions(): Promise<AccountsInterfaces.AccountRegion[]>;
    getAccountSettings(): Promise<{ [key: string] : string; }>;
}

export class AccountsApi extends basem.ClientApiBase implements IAccountsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Accounts-api');
    }

    /**
    * @param {string} accountId
    */
    public async deleteAccount(
        accountId: string
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            
            let routeValues: any = {
                accountId: accountId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Account",
                    "6468322a-cb4d-43a3-84ad-be573301bbb3",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, null, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
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
                    "3.1-preview.1",
                    "Account",
                    "229a6a53-b428-4ffb-a835-e8f36b5b4b1e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, info, null);
                let serializationData = {  responseTypeMetadata: AccountsInterfaces.TypeInfo.Account, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "Account",
                    "229a6a53-b428-4ffb-a835-e8f36b5b4b1e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: AccountsInterfaces.TypeInfo.Account, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} creatorId
    * @param {string} ownerId
    * @param {string} memberId
    * @param {boolean} includeOwner
    * @param {string} properties
    * @param {boolean} includeDisabledAccounts
    */
    public async getAccounts(
        creatorId?: string,
        ownerId?: string,
        memberId?: string,
        includeOwner?: boolean,
        properties?: string,
        includeDisabledAccounts?: boolean
        ): Promise<AccountsInterfaces.Account[]> {

        return new Promise<AccountsInterfaces.Account[]>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            let queryValues: any = {
                creatorId: creatorId,
                ownerId: ownerId,
                memberId: memberId,
                includeOwner: includeOwner,
                properties: properties,
                includeDisabledAccounts: includeDisabledAccounts,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Account",
                    "229a6a53-b428-4ffb-a835-e8f36b5b4b1e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: AccountsInterfaces.TypeInfo.Account, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {AccountsInterfaces.Account} account
    * @param {string} accountId
    */
    public async updateAccount(
        account: AccountsInterfaces.Account,
        accountId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                accountId: accountId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Account",
                    "229a6a53-b428-4ffb-a835-e8f36b5b4b1e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, account, null);
                let serializationData = { requestTypeMetadata: AccountsInterfaces.TypeInfo.Account, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "Account",
                    "65dd1dc5-53fe-4c67-9b4e-0ec3e2539998",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "Account",
                    "642a93c7-8385-4d63-a5a5-20d044fe504f",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "Account",
                    "4e012dd4-f8e1-485d-9bb3-c50d83c5b71b",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
