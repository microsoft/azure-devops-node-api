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

/// <reference path="../node/node.d.ts"/>
/// <reference path="../q/Q.d.ts"/>

import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import AccountsInterfaces = require("./interfaces/AccountsInterfaces");

export interface IAccountsApi extends basem.ClientApiBase {
    deleteAccount(accountId: string, onResult: (err: any, statusCode: number, AccountDeletion: string) => void): void;
    createAccount(info: AccountsInterfaces.AccountCreateInfoInternal, usePrecreated: boolean, onResult: (err: any, statusCode: number, Account: AccountsInterfaces.Account) => void): void;
    getAccount(accountId: string, properties: string, onResult: (err: any, statusCode: number, Account: AccountsInterfaces.Account) => void): void;
    getAccounts(creatorId: string, ownerId: string, memberId: string, includeOwner: boolean, properties: string, includeDisabledAccounts: boolean, onResult: (err: any, statusCode: number, Accounts: AccountsInterfaces.Account[]) => void): void;
    updateAccount(account: AccountsInterfaces.Account, accountId: string, onResult: (err: any, statusCode: number) => void): void;
    isValidAccountName(accountName: string, onResult: (err: any, statusCode: number, Availability: AccountsInterfaces.AccountNameAvailability) => void): void;
    getRegions(onResult: (err: any, statusCode: number, Regions: AccountsInterfaces.AccountRegion[]) => void): void;
    getAccountSettings(onResult: (err: any, statusCode: number, Settings: { [key: string] : string; }) => void): void;
}

export interface IQAccountsApi extends basem.QClientApiBase {
    deleteAccount(accountId: string): Q.Promise<string>;
    createAccount(info: AccountsInterfaces.AccountCreateInfoInternal, usePrecreated?: boolean): Q.Promise<AccountsInterfaces.Account>;
    getAccount(accountId: string, properties?: string): Q.Promise<AccountsInterfaces.Account>;
    getAccounts(creatorId?: string, ownerId?: string, memberId?: string, includeOwner?: boolean, properties?: string, includeDisabledAccounts?: boolean): Q.Promise<AccountsInterfaces.Account[]>;
    updateAccount(account: AccountsInterfaces.Account, accountId: string): Q.Promise<void>;
    isValidAccountName(accountName: string): Q.Promise<AccountsInterfaces.AccountNameAvailability>;
    getRegions(): Q.Promise<AccountsInterfaces.AccountRegion[]>;
    getAccountSettings(): Q.Promise<{ [key: string] : string; }>;
}

export class AccountsApi extends basem.ClientApiBase implements IAccountsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Accounts-api');
    }

    /**
     * @param {string} accountId
     * @param onResult callback function with the resulting string
     */
    public deleteAccount(
        accountId: string,
        onResult: (err: any, statusCode: number, AccountDeletion: string) => void
        ): void {

        var routeValues: any = {
            accountId: accountId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Account", "6468322a-cb4d-43a3-84ad-be573301bbb3", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {AccountsInterfaces.AccountCreateInfoInternal} info
     * @param {boolean} usePrecreated
     * @param onResult callback function with the resulting AccountsInterfaces.Account
     */
    public createAccount(
        info: AccountsInterfaces.AccountCreateInfoInternal,
        usePrecreated: boolean,
        onResult: (err: any, statusCode: number, Account: AccountsInterfaces.Account) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            usePrecreated: usePrecreated,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Account", "229a6a53-b428-4ffb-a835-e8f36b5b4b1e", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: AccountsInterfaces.TypeInfo.AccountCreateInfoInternal, responseTypeMetadata: AccountsInterfaces.TypeInfo.Account, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, info, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} accountId
     * @param {string} properties
     * @param onResult callback function with the resulting AccountsInterfaces.Account
     */
    public getAccount(
        accountId: string,
        properties: string,
        onResult: (err: any, statusCode: number, Account: AccountsInterfaces.Account) => void
        ): void {

        var routeValues: any = {
            accountId: accountId
        };

        var queryValues: any = {
            properties: properties,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Account", "229a6a53-b428-4ffb-a835-e8f36b5b4b1e", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: AccountsInterfaces.TypeInfo.Account, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} creatorId
     * @param {string} ownerId
     * @param {string} memberId
     * @param {boolean} includeOwner
     * @param {string} properties
     * @param {boolean} includeDisabledAccounts
     * @param onResult callback function with the resulting AccountsInterfaces.Account[]
     */
    public getAccounts(
        creatorId: string,
        ownerId: string,
        memberId: string,
        includeOwner: boolean,
        properties: string,
        includeDisabledAccounts: boolean,
        onResult: (err: any, statusCode: number, Accounts: AccountsInterfaces.Account[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            creatorId: creatorId,
            ownerId: ownerId,
            memberId: memberId,
            includeOwner: includeOwner,
            properties: properties,
            includeDisabledAccounts: includeDisabledAccounts,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Account", "229a6a53-b428-4ffb-a835-e8f36b5b4b1e", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: AccountsInterfaces.TypeInfo.Account, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {AccountsInterfaces.Account} account
     * @param {string} accountId
     * @param onResult callback function
     */
    public updateAccount(
        account: AccountsInterfaces.Account,
        accountId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            accountId: accountId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Account", "229a6a53-b428-4ffb-a835-e8f36b5b4b1e", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: AccountsInterfaces.TypeInfo.Account, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, account, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} accountName
     * @param onResult callback function with the resulting AccountsInterfaces.AccountNameAvailability
     */
    public isValidAccountName(
        accountName: string,
        onResult: (err: any, statusCode: number, Availability: AccountsInterfaces.AccountNameAvailability) => void
        ): void {

        var routeValues: any = {
            accountName: accountName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Account", "65dd1dc5-53fe-4c67-9b4e-0ec3e2539998", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: AccountsInterfaces.TypeInfo.AccountNameAvailability, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param onResult callback function with the resulting AccountsInterfaces.AccountRegion[]
     */
    public getRegions(
        onResult: (err: any, statusCode: number, Regions: AccountsInterfaces.AccountRegion[]) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Account", "642a93c7-8385-4d63-a5a5-20d044fe504f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: AccountsInterfaces.TypeInfo.AccountRegion, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param onResult callback function with the resulting { [key: string] : string; }
     */
    public getAccountSettings(
        onResult: (err: any, statusCode: number, Settings: { [key: string] : string; }) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Account", "4e012dd4-f8e1-485d-9bb3-c50d83c5b71b", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QAccountsApi extends basem.QClientApiBase implements IQAccountsApi {
    api: AccountsApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, AccountsApi);
    }

    /**
    * @param {string} accountId
    */
    public deleteAccount(
        accountId: string
        ): Q.Promise<string> {
    
        var deferred = Q.defer<string>();

        this.api.deleteAccount(accountId, (err: any, statusCode: number, AccountDeletion: string) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(AccountDeletion);
            }
        });

        return <Q.Promise<string>>deferred.promise;
    }

    /**
    * @param {AccountsInterfaces.AccountCreateInfoInternal} info
    * @param {boolean} usePrecreated
    */
    public createAccount(
        info: AccountsInterfaces.AccountCreateInfoInternal,
        usePrecreated?: boolean
        ): Q.Promise<AccountsInterfaces.Account> {
    
        var deferred = Q.defer<AccountsInterfaces.Account>();

        this.api.createAccount(info, usePrecreated, (err: any, statusCode: number, Account: AccountsInterfaces.Account) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Account);
            }
        });

        return <Q.Promise<AccountsInterfaces.Account>>deferred.promise;
    }

    /**
    * @param {string} accountId
    * @param {string} properties
    */
    public getAccount(
        accountId: string,
        properties?: string
        ): Q.Promise<AccountsInterfaces.Account> {
    
        var deferred = Q.defer<AccountsInterfaces.Account>();

        this.api.getAccount(accountId, properties, (err: any, statusCode: number, Account: AccountsInterfaces.Account) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Account);
            }
        });

        return <Q.Promise<AccountsInterfaces.Account>>deferred.promise;
    }

    /**
    * @param {string} creatorId
    * @param {string} ownerId
    * @param {string} memberId
    * @param {boolean} includeOwner
    * @param {string} properties
    * @param {boolean} includeDisabledAccounts
    */
    public getAccounts(
        creatorId?: string,
        ownerId?: string,
        memberId?: string,
        includeOwner?: boolean,
        properties?: string,
        includeDisabledAccounts?: boolean
        ): Q.Promise<AccountsInterfaces.Account[]> {
    
        var deferred = Q.defer<AccountsInterfaces.Account[]>();

        this.api.getAccounts(creatorId, ownerId, memberId, includeOwner, properties, includeDisabledAccounts, (err: any, statusCode: number, Accounts: AccountsInterfaces.Account[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Accounts);
            }
        });

        return <Q.Promise<AccountsInterfaces.Account[]>>deferred.promise;
    }

    /**
    * @param {AccountsInterfaces.Account} account
    * @param {string} accountId
    */
    public updateAccount(
        account: AccountsInterfaces.Account,
        accountId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.updateAccount(account, accountId, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {string} accountName
    */
    public isValidAccountName(
        accountName: string
        ): Q.Promise<AccountsInterfaces.AccountNameAvailability> {
    
        var deferred = Q.defer<AccountsInterfaces.AccountNameAvailability>();

        this.api.isValidAccountName(accountName, (err: any, statusCode: number, Availability: AccountsInterfaces.AccountNameAvailability) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Availability);
            }
        });

        return <Q.Promise<AccountsInterfaces.AccountNameAvailability>>deferred.promise;
    }

    /**
    */
    public getRegions(
        ): Q.Promise<AccountsInterfaces.AccountRegion[]> {
    
        var deferred = Q.defer<AccountsInterfaces.AccountRegion[]>();

        this.api.getRegions((err: any, statusCode: number, Regions: AccountsInterfaces.AccountRegion[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Regions);
            }
        });

        return <Q.Promise<AccountsInterfaces.AccountRegion[]>>deferred.promise;
    }

    /**
    */
    public getAccountSettings(
        ): Q.Promise<{ [key: string] : string; }> {
    
        var deferred = Q.defer<{ [key: string] : string; }>();

        this.api.getAccountSettings((err: any, statusCode: number, Settings: { [key: string] : string; }) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Settings);
            }
        });

        return <Q.Promise<{ [key: string] : string; }>>deferred.promise;
    }

}
