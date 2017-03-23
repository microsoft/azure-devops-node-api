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
import ContributionsInterfaces = require("./interfaces/ContributionsInterfaces");

export interface IContributionsApi extends basem.ClientApiBase {
    queryContributionNodes(query: ContributionsInterfaces.ContributionNodeQuery): Promise<ContributionsInterfaces.ContributionNodeQueryResult>;
    queryDataProviders(query: ContributionsInterfaces.DataProviderQuery): Promise<ContributionsInterfaces.DataProviderResult>;
    getInstalledExtensions(contributionIds?: string[], includeDisabledApps?: boolean, assetTypes?: string[]): Promise<ContributionsInterfaces.InstalledExtension[]>;
    getInstalledExtensionByName(publisherName: string, extensionName: string, assetTypes?: string[]): Promise<ContributionsInterfaces.InstalledExtension>;
}

export class ContributionsApi extends basem.ClientApiBase implements IContributionsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Contributions-api');
    }

    /**
     * Query for contribution nodes and provider details according the parameters in the passed in query object.
     * 
     * @param {ContributionsInterfaces.ContributionNodeQuery} query
     */
    public async queryContributionNodes(
        query: ContributionsInterfaces.ContributionNodeQuery
        ): Promise<ContributionsInterfaces.ContributionNodeQueryResult> {

        return new Promise<ContributionsInterfaces.ContributionNodeQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Contribution",
                    "db7f2146-2309-4cee-b39c-c767777a1c55",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ContributionsInterfaces.ContributionNodeQueryResult>;
                res = await this.rest.create<ContributionsInterfaces.ContributionNodeQueryResult>(url, query, options);

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
     * @param {ContributionsInterfaces.DataProviderQuery} query
     */
    public async queryDataProviders(
        query: ContributionsInterfaces.DataProviderQuery
        ): Promise<ContributionsInterfaces.DataProviderResult> {

        return new Promise<ContributionsInterfaces.DataProviderResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Contribution",
                    "738368db-35ee-4b85-9f94-77ed34af2b0d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ContributionsInterfaces.DataProviderResult>;
                res = await this.rest.create<ContributionsInterfaces.DataProviderResult>(url, query, options);

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
     * @param {string[]} contributionIds
     * @param {boolean} includeDisabledApps
     * @param {string[]} assetTypes
     */
    public async getInstalledExtensions(
        contributionIds?: string[],
        includeDisabledApps?: boolean,
        assetTypes?: string[]
        ): Promise<ContributionsInterfaces.InstalledExtension[]> {

        return new Promise<ContributionsInterfaces.InstalledExtension[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                contributionIds: contributionIds && contributionIds.join(";"),
                includeDisabledApps: includeDisabledApps,
                assetTypes: assetTypes && assetTypes.join(":"),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Contribution",
                    "2648442b-fd63-4b9a-902f-0c913510f139",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ContributionsInterfaces.InstalledExtension[]>;
                res = await this.rest.get<ContributionsInterfaces.InstalledExtension[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ContributionsInterfaces.TypeInfo.InstalledExtension,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string[]} assetTypes
     */
    public async getInstalledExtensionByName(
        publisherName: string,
        extensionName: string,
        assetTypes?: string[]
        ): Promise<ContributionsInterfaces.InstalledExtension> {

        return new Promise<ContributionsInterfaces.InstalledExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                assetTypes: assetTypes && assetTypes.join(":"),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Contribution",
                    "3e2f6668-0798-4dcb-b592-bfe2fa57fde2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ContributionsInterfaces.InstalledExtension>;
                res = await this.rest.get<ContributionsInterfaces.InstalledExtension>(url, options);

                let ret = this.formatResponse(res.result,
                                              ContributionsInterfaces.TypeInfo.InstalledExtension,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
