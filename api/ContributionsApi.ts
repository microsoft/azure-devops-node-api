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


import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import ContributionsInterfaces = require("./interfaces/ContributionsInterfaces");

export interface IContributionsApi extends basem.ClientApiBase {
    queryDataProviders(query: ContributionsInterfaces.DataProviderQuery): Promise<ContributionsInterfaces.DataProviderResult>;
    getInstalledExtensions(contributionIds?: string[], includeDisabledApps?: boolean, assetTypes?: string[]): Promise<ContributionsInterfaces.InstalledExtension[]>;
    getInstalledExtensionByName(publisherName: string, extensionName: string, assetTypes?: string[]): Promise<ContributionsInterfaces.InstalledExtension>;
}

export class ContributionsApi extends basem.ClientApiBase implements IContributionsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Contributions-api');
    }

    /**
    * @param {ContributionsInterfaces.DataProviderQuery} query
    */
    public queryDataProviders(
        query: ContributionsInterfaces.DataProviderQuery
        ): Promise<ContributionsInterfaces.DataProviderResult> {
    
        let deferred = Q.defer<ContributionsInterfaces.DataProviderResult>();

        let onResult = (err: any, statusCode: number, dataProvidersQuery: ContributionsInterfaces.DataProviderResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(dataProvidersQuery);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Contribution", "738368db-35ee-4b85-9f94-77ed34af2b0d", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, query, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string[]} contributionIds
    * @param {boolean} includeDisabledApps
    * @param {string[]} assetTypes
    */
    public getInstalledExtensions(
        contributionIds?: string[],
        includeDisabledApps?: boolean,
        assetTypes?: string[]
        ): Promise<ContributionsInterfaces.InstalledExtension[]> {
    
        let deferred = Q.defer<ContributionsInterfaces.InstalledExtension[]>();

        let onResult = (err: any, statusCode: number, InstalledApps: ContributionsInterfaces.InstalledExtension[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(InstalledApps);
            }
        };

        let routeValues: any = {
        };

        let queryValues: any = {
            contributionIds: contributionIds && contributionIds.join(";"),
            includeDisabledApps: includeDisabledApps,
            assetTypes: assetTypes && assetTypes.join(":"),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Contribution", "2648442b-fd63-4b9a-902f-0c913510f139", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ContributionsInterfaces.TypeInfo.InstalledExtension, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string[]} assetTypes
    */
    public getInstalledExtensionByName(
        publisherName: string,
        extensionName: string,
        assetTypes?: string[]
        ): Promise<ContributionsInterfaces.InstalledExtension> {
    
        let deferred = Q.defer<ContributionsInterfaces.InstalledExtension>();

        let onResult = (err: any, statusCode: number, InstalledApp: ContributionsInterfaces.InstalledExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(InstalledApp);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        let queryValues: any = {
            assetTypes: assetTypes && assetTypes.join(":"),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Contribution", "3e2f6668-0798-4dcb-b592-bfe2fa57fde2", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ContributionsInterfaces.TypeInfo.InstalledExtension, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

}
