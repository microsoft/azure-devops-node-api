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
import FeedInterfaces = require("./interfaces/FeedInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IFeedApi extends basem.ClientApiBase {
    getFeedChange(feedId: string): Promise<FeedInterfaces.FeedChange>;
    getFeedChanges(includeDeleted?: boolean, continuationToken?: number, batchSize?: number): Promise<FeedInterfaces.FeedChangesResponse>;
    createFeed(feed: FeedInterfaces.Feed): Promise<FeedInterfaces.Feed>;
    deleteFeed(feedId: string): Promise<void>;
    getFeed(feedId: string): Promise<FeedInterfaces.Feed>;
    getFeeds(feedRole?: FeedInterfaces.FeedRole): Promise<FeedInterfaces.Feed[]>;
    updateFeed(feed: FeedInterfaces.Feed, feedId: string): Promise<FeedInterfaces.Feed>;
    getGlobalPermissions(): Promise<FeedInterfaces.GlobalPermission[]>;
    setGlobalPermissions(globalPermissions: FeedInterfaces.GlobalPermission[]): Promise<FeedInterfaces.GlobalPermission[]>;
    getPackageChanges(feedId: string, continuationToken?: number, batchSize?: number): Promise<FeedInterfaces.PackageChangesResponse>;
    getPackage(feedId: string, packageId: string, includeAllVersions?: boolean, includeUrls?: boolean, isListed?: boolean, isRelease?: boolean, includeDeleted?: boolean): Promise<FeedInterfaces.Package>;
    getPackages(feedId: string, protocolType?: string, packageNameQuery?: string, normalizedPackageName?: string, includeUrls?: boolean, includeAllVersions?: boolean, isListed?: boolean, getTopPackageVersions?: boolean, isRelease?: boolean, includeDescription?: boolean, top?: number, skip?: number, includeDeleted?: boolean, isCached?: boolean): Promise<FeedInterfaces.Package[]>;
    getFeedPermissions(feedId: string, includeIds?: boolean): Promise<FeedInterfaces.FeedPermission[]>;
    setFeedPermissions(feedPermission: FeedInterfaces.FeedPermission[], feedId: string): Promise<FeedInterfaces.FeedPermission[]>;
    deletePackageVersion(feedId: string, packageId: string, packageVersionId: string, deletedDate?: Date): Promise<void>;
    getPackageVersion(feedId: string, packageId: string, packageVersionId: string, includeUrls?: boolean, isListed?: boolean, isDeleted?: boolean): Promise<FeedInterfaces.PackageVersion>;
    getPackageVersions(feedId: string, packageId: string, includeUrls?: boolean, isListed?: boolean, isDeleted?: boolean): Promise<FeedInterfaces.PackageVersion[]>;
    updatePackageVersion(customHeaders: any, patchJson: VSSInterfaces.JsonPatchDocument, feedId: string, packageId: string, packageVersionId: string): Promise<void>;
    createFeedView(view: FeedInterfaces.FeedView, feedId: string): Promise<FeedInterfaces.FeedView>;
    deleteFeedView(feedId: string, viewId: string): Promise<void>;
    getFeedView(feedId: string, viewId: string): Promise<FeedInterfaces.FeedView>;
    getFeedViews(feedId: string): Promise<FeedInterfaces.FeedView[]>;
    updateFeedView(view: FeedInterfaces.FeedView, feedId: string, viewId: string): Promise<FeedInterfaces.FeedView>;
}

export class FeedApi extends basem.ClientApiBase implements IFeedApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Packaging-api');
    }

    /**
     * @param {string} feedId
     */
    public async getFeedChange(
        feedId: string
        ): Promise<FeedInterfaces.FeedChange> {

        return new Promise<FeedInterfaces.FeedChange>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "29ba2dad-389a-4661-b5d3-de76397ca05b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.FeedChange>;
                res = await this.rest.get<FeedInterfaces.FeedChange>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.FeedChange,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {boolean} includeDeleted
     * @param {number} continuationToken
     * @param {number} batchSize
     */
    public async getFeedChanges(
        includeDeleted?: boolean,
        continuationToken?: number,
        batchSize?: number
        ): Promise<FeedInterfaces.FeedChangesResponse> {

        return new Promise<FeedInterfaces.FeedChangesResponse>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeDeleted: includeDeleted,
                continuationToken: continuationToken,
                batchSize: batchSize,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "29ba2dad-389a-4661-b5d3-de76397ca05b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.FeedChangesResponse>;
                res = await this.rest.get<FeedInterfaces.FeedChangesResponse>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.FeedChangesResponse,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {FeedInterfaces.Feed} feed
     */
    public async createFeed(
        feed: FeedInterfaces.Feed
        ): Promise<FeedInterfaces.Feed> {

        return new Promise<FeedInterfaces.Feed>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "c65009a7-474a-4ad1-8b42-7d852107ef8c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.Feed>;
                res = await this.rest.create<FeedInterfaces.Feed>(url, feed, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.Feed,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     */
    public async deleteFeed(
        feedId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "c65009a7-474a-4ad1-8b42-7d852107ef8c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

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
     * @param {string} feedId
     */
    public async getFeed(
        feedId: string
        ): Promise<FeedInterfaces.Feed> {

        return new Promise<FeedInterfaces.Feed>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "c65009a7-474a-4ad1-8b42-7d852107ef8c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.Feed>;
                res = await this.rest.get<FeedInterfaces.Feed>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.Feed,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {FeedInterfaces.FeedRole} feedRole
     */
    public async getFeeds(
        feedRole?: FeedInterfaces.FeedRole
        ): Promise<FeedInterfaces.Feed[]> {

        return new Promise<FeedInterfaces.Feed[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                feedRole: feedRole,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "c65009a7-474a-4ad1-8b42-7d852107ef8c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.Feed[]>;
                res = await this.rest.get<FeedInterfaces.Feed[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.Feed,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {FeedInterfaces.Feed} feed
     * @param {string} feedId
     */
    public async updateFeed(
        feed: FeedInterfaces.Feed,
        feedId: string
        ): Promise<FeedInterfaces.Feed> {

        return new Promise<FeedInterfaces.Feed>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "c65009a7-474a-4ad1-8b42-7d852107ef8c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.Feed>;
                res = await this.rest.update<FeedInterfaces.Feed>(url, feed, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.Feed,
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
    public async getGlobalPermissions(
        ): Promise<FeedInterfaces.GlobalPermission[]> {

        return new Promise<FeedInterfaces.GlobalPermission[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "a74419ef-b477-43df-8758-3cd1cd5f56c6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.GlobalPermission[]>;
                res = await this.rest.get<FeedInterfaces.GlobalPermission[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.GlobalPermission,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {FeedInterfaces.GlobalPermission[]} globalPermissions
     */
    public async setGlobalPermissions(
        globalPermissions: FeedInterfaces.GlobalPermission[]
        ): Promise<FeedInterfaces.GlobalPermission[]> {

        return new Promise<FeedInterfaces.GlobalPermission[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "a74419ef-b477-43df-8758-3cd1cd5f56c6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.GlobalPermission[]>;
                res = await this.rest.update<FeedInterfaces.GlobalPermission[]>(url, globalPermissions, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.GlobalPermission,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {number} continuationToken
     * @param {number} batchSize
     */
    public async getPackageChanges(
        feedId: string,
        continuationToken?: number,
        batchSize?: number
        ): Promise<FeedInterfaces.PackageChangesResponse> {

        return new Promise<FeedInterfaces.PackageChangesResponse>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            let queryValues: any = {
                continuationToken: continuationToken,
                batchSize: batchSize,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "323a0631-d083-4005-85ae-035114dfb681",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.PackageChangesResponse>;
                res = await this.rest.get<FeedInterfaces.PackageChangesResponse>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.PackageChangesResponse,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageId
     * @param {boolean} includeAllVersions
     * @param {boolean} includeUrls
     * @param {boolean} isListed
     * @param {boolean} isRelease
     * @param {boolean} includeDeleted
     */
    public async getPackage(
        feedId: string,
        packageId: string,
        includeAllVersions?: boolean,
        includeUrls?: boolean,
        isListed?: boolean,
        isRelease?: boolean,
        includeDeleted?: boolean
        ): Promise<FeedInterfaces.Package> {

        return new Promise<FeedInterfaces.Package>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageId: packageId
            };

            let queryValues: any = {
                includeAllVersions: includeAllVersions,
                includeUrls: includeUrls,
                isListed: isListed,
                isRelease: isRelease,
                includeDeleted: includeDeleted,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "7a20d846-c929-4acc-9ea2-0d5a7df1b197",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.Package>;
                res = await this.rest.get<FeedInterfaces.Package>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.Package,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} protocolType
     * @param {string} packageNameQuery
     * @param {string} normalizedPackageName
     * @param {boolean} includeUrls
     * @param {boolean} includeAllVersions
     * @param {boolean} isListed
     * @param {boolean} getTopPackageVersions
     * @param {boolean} isRelease
     * @param {boolean} includeDescription
     * @param {number} top
     * @param {number} skip
     * @param {boolean} includeDeleted
     * @param {boolean} isCached
     */
    public async getPackages(
        feedId: string,
        protocolType?: string,
        packageNameQuery?: string,
        normalizedPackageName?: string,
        includeUrls?: boolean,
        includeAllVersions?: boolean,
        isListed?: boolean,
        getTopPackageVersions?: boolean,
        isRelease?: boolean,
        includeDescription?: boolean,
        top?: number,
        skip?: number,
        includeDeleted?: boolean,
        isCached?: boolean
        ): Promise<FeedInterfaces.Package[]> {

        return new Promise<FeedInterfaces.Package[]>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            let queryValues: any = {
                protocolType: protocolType,
                packageNameQuery: packageNameQuery,
                normalizedPackageName: normalizedPackageName,
                includeUrls: includeUrls,
                includeAllVersions: includeAllVersions,
                isListed: isListed,
                getTopPackageVersions: getTopPackageVersions,
                isRelease: isRelease,
                includeDescription: includeDescription,
                '$top': top,
                '$skip': skip,
                includeDeleted: includeDeleted,
                isCached: isCached,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "7a20d846-c929-4acc-9ea2-0d5a7df1b197",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.Package[]>;
                res = await this.rest.get<FeedInterfaces.Package[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.Package,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {boolean} includeIds
     */
    public async getFeedPermissions(
        feedId: string,
        includeIds?: boolean
        ): Promise<FeedInterfaces.FeedPermission[]> {

        return new Promise<FeedInterfaces.FeedPermission[]>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            let queryValues: any = {
                includeIds: includeIds,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "be8c1476-86a7-44ed-b19d-aec0e9275cd8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.FeedPermission[]>;
                res = await this.rest.get<FeedInterfaces.FeedPermission[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.FeedPermission,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {FeedInterfaces.FeedPermission[]} feedPermission
     * @param {string} feedId
     */
    public async setFeedPermissions(
        feedPermission: FeedInterfaces.FeedPermission[],
        feedId: string
        ): Promise<FeedInterfaces.FeedPermission[]> {

        return new Promise<FeedInterfaces.FeedPermission[]>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "be8c1476-86a7-44ed-b19d-aec0e9275cd8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.FeedPermission[]>;
                res = await this.rest.update<FeedInterfaces.FeedPermission[]>(url, feedPermission, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.FeedPermission,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageId
     * @param {string} packageVersionId
     * @param {Date} deletedDate
     */
    public async deletePackageVersion(
        feedId: string,
        packageId: string,
        packageVersionId: string,
        deletedDate?: Date
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageId: packageId,
                packageVersionId: packageVersionId
            };

            let queryValues: any = {
                deletedDate: deletedDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "3b331909-6a86-44cc-b9ec-c1834c35498f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

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
     * @param {string} feedId
     * @param {string} packageId
     * @param {string} packageVersionId
     * @param {boolean} includeUrls
     * @param {boolean} isListed
     * @param {boolean} isDeleted
     */
    public async getPackageVersion(
        feedId: string,
        packageId: string,
        packageVersionId: string,
        includeUrls?: boolean,
        isListed?: boolean,
        isDeleted?: boolean
        ): Promise<FeedInterfaces.PackageVersion> {

        return new Promise<FeedInterfaces.PackageVersion>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageId: packageId,
                packageVersionId: packageVersionId
            };

            let queryValues: any = {
                includeUrls: includeUrls,
                isListed: isListed,
                isDeleted: isDeleted,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "3b331909-6a86-44cc-b9ec-c1834c35498f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.PackageVersion>;
                res = await this.rest.get<FeedInterfaces.PackageVersion>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.PackageVersion,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} packageId
     * @param {boolean} includeUrls
     * @param {boolean} isListed
     * @param {boolean} isDeleted
     */
    public async getPackageVersions(
        feedId: string,
        packageId: string,
        includeUrls?: boolean,
        isListed?: boolean,
        isDeleted?: boolean
        ): Promise<FeedInterfaces.PackageVersion[]> {

        return new Promise<FeedInterfaces.PackageVersion[]>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageId: packageId
            };

            let queryValues: any = {
                includeUrls: includeUrls,
                isListed: isListed,
                isDeleted: isDeleted,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "3b331909-6a86-44cc-b9ec-c1834c35498f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.PackageVersion[]>;
                res = await this.rest.get<FeedInterfaces.PackageVersion[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.PackageVersion,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {VSSInterfaces.JsonPatchDocument} patchJson
     * @param {string} feedId
     * @param {string} packageId
     * @param {string} packageVersionId
     */
    public async updatePackageVersion(
        customHeaders: any,
        patchJson: VSSInterfaces.JsonPatchDocument,
        feedId: string,
        packageId: string,
        packageVersionId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                packageId: packageId,
                packageVersionId: packageVersionId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "3b331909-6a86-44cc-b9ec-c1834c35498f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, patchJson, options);

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
     * @param {FeedInterfaces.FeedView} view
     * @param {string} feedId
     */
    public async createFeedView(
        view: FeedInterfaces.FeedView,
        feedId: string
        ): Promise<FeedInterfaces.FeedView> {

        return new Promise<FeedInterfaces.FeedView>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "42a8502a-6785-41bc-8c16-89477d930877",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.FeedView>;
                res = await this.rest.create<FeedInterfaces.FeedView>(url, view, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.FeedView,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     * @param {string} viewId
     */
    public async deleteFeedView(
        feedId: string,
        viewId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                viewId: viewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "42a8502a-6785-41bc-8c16-89477d930877",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

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
     * @param {string} feedId
     * @param {string} viewId
     */
    public async getFeedView(
        feedId: string,
        viewId: string
        ): Promise<FeedInterfaces.FeedView> {

        return new Promise<FeedInterfaces.FeedView>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                viewId: viewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "42a8502a-6785-41bc-8c16-89477d930877",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.FeedView>;
                res = await this.rest.get<FeedInterfaces.FeedView>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.FeedView,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} feedId
     */
    public async getFeedViews(
        feedId: string
        ): Promise<FeedInterfaces.FeedView[]> {

        return new Promise<FeedInterfaces.FeedView[]>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "42a8502a-6785-41bc-8c16-89477d930877",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.FeedView[]>;
                res = await this.rest.get<FeedInterfaces.FeedView[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.FeedView,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {FeedInterfaces.FeedView} view
     * @param {string} feedId
     * @param {string} viewId
     */
    public async updateFeedView(
        view: FeedInterfaces.FeedView,
        feedId: string,
        viewId: string
        ): Promise<FeedInterfaces.FeedView> {

        return new Promise<FeedInterfaces.FeedView>(async (resolve, reject) => {
            let routeValues: any = {
                feedId: feedId,
                viewId: viewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.1",
                    "Packaging",
                    "42a8502a-6785-41bc-8c16-89477d930877",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FeedInterfaces.FeedView>;
                res = await this.rest.update<FeedInterfaces.FeedView>(url, view, options);

                let ret = this.formatResponse(res.result,
                                              FeedInterfaces.TypeInfo.FeedView,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
