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
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import compatBase = require("././GalleryCompatHttpClientBase");
import GalleryInterfaces = require("./interfaces/GalleryInterfaces");

export interface IGalleryApi extends compatBase.GalleryCompatHttpClientBase {
    shareExtensionById(extensionId: string, accountName: string): Promise<void>;
    unshareExtensionById(extensionId: string, accountName: string): Promise<void>;
    shareExtension(publisherName: string, extensionName: string, accountName: string): Promise<void>;
    unshareExtension(publisherName: string, extensionName: string, accountName: string): Promise<void>;
    getAcquisitionOptions(itemId: string, installationTarget: string, testCommerce?: boolean, isFreeOrTrialInstall?: boolean): Promise<GalleryInterfaces.AcquisitionOptions>;
    requestAcquisition(acquisitionRequest: GalleryInterfaces.ExtensionAcquisitionRequest): Promise<GalleryInterfaces.ExtensionAcquisitionRequest>;
    getAssetByName(customHeaders: any, publisherName: string, extensionName: string, version: string, assetType: string, accountToken?: string, acceptDefault?: boolean, accountTokenHeader?: String): Promise<NodeJS.ReadableStream>;
    getAsset(customHeaders: any, extensionId: string, version: string, assetType: string, accountToken?: string, acceptDefault?: boolean, accountTokenHeader?: String): Promise<NodeJS.ReadableStream>;
    getAssetAuthenticated(customHeaders: any, publisherName: string, extensionName: string, version: string, assetType: string, accountToken?: string, accountTokenHeader?: String): Promise<NodeJS.ReadableStream>;
    associateAzurePublisher(publisherName: string, azurePublisherId: string): Promise<GalleryInterfaces.AzurePublisher>;
    queryAssociatedAzurePublisher(publisherName: string): Promise<GalleryInterfaces.AzurePublisher>;
    getCategories(languages?: string): Promise<string[]>;
    getCategoryDetails(categoryName: string, languages?: string, product?: string): Promise<GalleryInterfaces.CategoriesResult>;
    getCategoryTree(product: string, categoryId: string, lcid?: number, source?: string, productVersion?: string, skus?: string, subSkus?: string, productArchitecture?: string): Promise<GalleryInterfaces.ProductCategory>;
    getRootCategories(product: string, lcid?: number, source?: string, productVersion?: string, skus?: string, subSkus?: string): Promise<GalleryInterfaces.ProductCategoriesResult>;
    getCertificate(publisherName: string, extensionName: string, version?: string): Promise<NodeJS.ReadableStream>;
    getContentVerificationLog(publisherName: string, extensionName: string): Promise<NodeJS.ReadableStream>;
    createSupportRequest(customerSupportRequest: GalleryInterfaces.CustomerSupportRequest): Promise<void>;
    createDraftForEditExtension(publisherName: string, extensionName: string): Promise<GalleryInterfaces.ExtensionDraft>;
    performEditExtensionDraftOperation(draftPatch: GalleryInterfaces.ExtensionDraftPatch, publisherName: string, extensionName: string, draftId: string): Promise<GalleryInterfaces.ExtensionDraft>;
    updatePayloadInDraftForEditExtension(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string, extensionName: string, draftId: string, fileName?: String): Promise<GalleryInterfaces.ExtensionDraft>;
    addAssetForEditExtensionDraft(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string, extensionName: string, draftId: string, assetType: string): Promise<GalleryInterfaces.ExtensionDraftAsset>;
    createDraftForNewExtension(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string, product: String, fileName?: String): Promise<GalleryInterfaces.ExtensionDraft>;
    performNewExtensionDraftOperation(draftPatch: GalleryInterfaces.ExtensionDraftPatch, publisherName: string, draftId: string): Promise<GalleryInterfaces.ExtensionDraft>;
    updatePayloadInDraftForNewExtension(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string, draftId: string, fileName?: String): Promise<GalleryInterfaces.ExtensionDraft>;
    addAssetForNewExtensionDraft(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string, draftId: string, assetType: string): Promise<GalleryInterfaces.ExtensionDraftAsset>;
    getAssetFromEditExtensionDraft(publisherName: string, draftId: string, assetType: string, extensionName: string): Promise<NodeJS.ReadableStream>;
    getAssetFromNewExtensionDraft(publisherName: string, draftId: string, assetType: string): Promise<NodeJS.ReadableStream>;
    getExtensionEvents(publisherName: string, extensionName: string, count?: number, afterDate?: Date, include?: string, includeProperty?: string): Promise<GalleryInterfaces.ExtensionEvents>;
    publishExtensionEvents(extensionEvents: GalleryInterfaces.ExtensionEvents[]): Promise<void>;
    queryExtensions(customHeaders: any, extensionQuery: GalleryInterfaces.ExtensionQuery, accountToken?: string, accountTokenHeader?: String): Promise<GalleryInterfaces.ExtensionQueryResult>;
    createExtension(customHeaders: any, contentStream: NodeJS.ReadableStream, extensionType?: string, reCaptchaToken?: string): Promise<GalleryInterfaces.PublishedExtension>;
    deleteExtensionById(extensionId: string, version?: string): Promise<void>;
    getExtensionById(extensionId: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtensionById(extensionId: string, reCaptchaToken?: string): Promise<GalleryInterfaces.PublishedExtension>;
    createExtensionWithPublisher(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string, extensionType?: string, reCaptchaToken?: string): Promise<GalleryInterfaces.PublishedExtension>;
    deleteExtension(publisherName: string, extensionName: string, version?: string): Promise<void>;
    getExtension(customHeaders: any, publisherName: string, extensionName: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags, accountToken?: string, accountTokenHeader?: String): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtension(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string, extensionName: string, extensionType?: string, reCaptchaToken?: string, bypassScopeCheck?: boolean): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtensionProperties(publisherName: string, extensionName: string, flags: GalleryInterfaces.PublishedExtensionFlags): Promise<GalleryInterfaces.PublishedExtension>;
    shareExtensionWithHost(publisherName: string, extensionName: string, hostType: string, hostName: string): Promise<void>;
    unshareExtensionWithHost(publisherName: string, extensionName: string, hostType: string, hostName: string): Promise<void>;
    extensionValidator(azureRestApiRequestModel: GalleryInterfaces.AzureRestApiRequestModel): Promise<void>;
    sendNotifications(notificationData: GalleryInterfaces.NotificationsData): Promise<void>;
    getPackage(customHeaders: any, publisherName: string, extensionName: string, version: string, accountToken?: string, acceptDefault?: boolean, accountTokenHeader?: String): Promise<NodeJS.ReadableStream>;
    getAssetWithToken(customHeaders: any, publisherName: string, extensionName: string, version: string, assetType: string, assetToken?: string, accountToken?: string, acceptDefault?: boolean, accountTokenHeader?: String): Promise<NodeJS.ReadableStream>;
    deletePublisherAsset(publisherName: string, assetType?: string): Promise<void>;
    getPublisherAsset(publisherName: string, assetType?: string): Promise<NodeJS.ReadableStream>;
    updatePublisherAsset(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string, assetType?: string, fileName?: String): Promise<{ [key: string] : string; }>;
    fetchDomainToken(publisherName: string): Promise<string>;
    verifyDomainToken(publisherName: string): Promise<void>;
    queryPublishers(publisherQuery: GalleryInterfaces.PublisherQuery): Promise<GalleryInterfaces.PublisherQueryResult>;
    createPublisher(publisher: GalleryInterfaces.Publisher): Promise<GalleryInterfaces.Publisher>;
    deletePublisher(publisherName: string): Promise<void>;
    getPublisher(publisherName: string, flags?: number): Promise<GalleryInterfaces.Publisher>;
    updatePublisher(publisher: GalleryInterfaces.Publisher, publisherName: string): Promise<GalleryInterfaces.Publisher>;
    updatePublisherMembers(roleAssignments: GalleryInterfaces.PublisherUserRoleAssignmentRef[], publisherName: string, limitToCallerIdentityDomain?: boolean): Promise<GalleryInterfaces.PublisherRoleAssignment[]>;
    getPublisherWithoutToken(publisherName: string): Promise<GalleryInterfaces.Publisher>;
    getQuestions(publisherName: string, extensionName: string, count?: number, page?: number, afterDate?: Date): Promise<GalleryInterfaces.QuestionsResult>;
    reportQuestion(concern: GalleryInterfaces.Concern, pubName: string, extName: string, questionId: number): Promise<GalleryInterfaces.Concern>;
    createQuestion(question: GalleryInterfaces.Question, publisherName: string, extensionName: string): Promise<GalleryInterfaces.Question>;
    deleteQuestion(publisherName: string, extensionName: string, questionId: number): Promise<void>;
    updateQuestion(question: GalleryInterfaces.Question, publisherName: string, extensionName: string, questionId: number): Promise<GalleryInterfaces.Question>;
    createResponse(response: GalleryInterfaces.Response, publisherName: string, extensionName: string, questionId: number): Promise<GalleryInterfaces.Response>;
    deleteResponse(publisherName: string, extensionName: string, questionId: number, responseId: number): Promise<void>;
    updateResponse(response: GalleryInterfaces.Response, publisherName: string, extensionName: string, questionId: number, responseId: number): Promise<GalleryInterfaces.Response>;
    getExtensionReports(publisherName: string, extensionName: string, days?: number, count?: number, afterDate?: Date): Promise<any>;
    getReviews(publisherName: string, extensionName: string, count?: number, filterOptions?: GalleryInterfaces.ReviewFilterOptions, beforeDate?: Date, afterDate?: Date): Promise<GalleryInterfaces.ReviewsResult>;
    getReviewsSummary(pubName: string, extName: string, beforeDate?: Date, afterDate?: Date): Promise<GalleryInterfaces.ReviewSummary>;
    createReview(review: GalleryInterfaces.Review, pubName: string, extName: string): Promise<GalleryInterfaces.Review>;
    deleteReview(pubName: string, extName: string, reviewId: number): Promise<void>;
    updateReview(reviewPatch: GalleryInterfaces.ReviewPatch, pubName: string, extName: string, reviewId: number): Promise<GalleryInterfaces.ReviewPatch>;
    createCategory(category: GalleryInterfaces.ExtensionCategory): Promise<GalleryInterfaces.ExtensionCategory>;
    getGalleryUserSettings(userScope: string, key?: string): Promise<{ [key: string] : any; }>;
    setGalleryUserSettings(entries: { [key: string] : any; }, userScope: string): Promise<void>;
    generateKey(keyType: string, expireCurrentSeconds?: number): Promise<void>;
    getSigningKey(keyType: string): Promise<string>;
    updateExtensionStatistics(extensionStatisticsUpdate: GalleryInterfaces.ExtensionStatisticUpdate, publisherName: string, extensionName: string): Promise<void>;
    getExtensionDailyStats(publisherName: string, extensionName: string, days?: number, aggregate?: GalleryInterfaces.ExtensionStatsAggregateType, afterDate?: Date): Promise<GalleryInterfaces.ExtensionDailyStats>;
    getExtensionDailyStatsAnonymous(publisherName: string, extensionName: string, version: string): Promise<GalleryInterfaces.ExtensionDailyStats>;
    incrementExtensionDailyStat(publisherName: string, extensionName: string, version: string, statType: string, targetPlatform?: string): Promise<void>;
    getVerificationLog(publisherName: string, extensionName: string, version: string, targetPlatform?: string): Promise<NodeJS.ReadableStream>;
    updateVSCodeWebExtensionStatistics(itemName: string, version: string, statType: GalleryInterfaces.VSCodeWebExtensionStatisicsType): Promise<void>;
}

export class GalleryApi extends compatBase.GalleryCompatHttpClientBase implements IGalleryApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Gallery-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "69d21c00-f135-441b-b5ce-3626378e0819";

    /**
     * @param {string} extensionId
     * @param {string} accountName
     */
    public async shareExtensionById(
        extensionId: string,
        accountName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId,
                accountName: accountName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "1f19631b-a0b4-4a03-89c2-d79785d24360",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
     * @param {string} extensionId
     * @param {string} accountName
     */
    public async unshareExtensionById(
        extensionId: string,
        accountName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId,
                accountName: accountName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "1f19631b-a0b4-4a03-89c2-d79785d24360",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} accountName
     */
    public async shareExtension(
        publisherName: string,
        extensionName: string,
        accountName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                accountName: accountName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "a1e66d8f-f5de-4d16-8309-91a4e015ee46",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} accountName
     */
    public async unshareExtension(
        publisherName: string,
        extensionName: string,
        accountName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                accountName: accountName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "a1e66d8f-f5de-4d16-8309-91a4e015ee46",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} itemId
     * @param {string} installationTarget
     * @param {boolean} testCommerce
     * @param {boolean} isFreeOrTrialInstall
     */
    public async getAcquisitionOptions(
        itemId: string,
        installationTarget: string,
        testCommerce?: boolean,
        isFreeOrTrialInstall?: boolean
        ): Promise<GalleryInterfaces.AcquisitionOptions> {
        if (installationTarget == null) {
            throw new TypeError('installationTarget can not be null or undefined');
        }

        return new Promise<GalleryInterfaces.AcquisitionOptions>(async (resolve, reject) => {
            let routeValues: any = {
                itemId: itemId
            };

            let queryValues: any = {
                installationTarget: installationTarget,
                testCommerce: testCommerce,
                isFreeOrTrialInstall: isFreeOrTrialInstall,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "9d0a0105-075e-4760-aa15-8bcf54d1bd7d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.AcquisitionOptions>;
                res = await this.rest.get<GalleryInterfaces.AcquisitionOptions>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.AcquisitionOptions,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionAcquisitionRequest} acquisitionRequest
     */
    public async requestAcquisition(
        acquisitionRequest: GalleryInterfaces.ExtensionAcquisitionRequest
        ): Promise<GalleryInterfaces.ExtensionAcquisitionRequest> {

        return new Promise<GalleryInterfaces.ExtensionAcquisitionRequest>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "3adb1f2d-e328-446e-be73-9f6d98071c45",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionAcquisitionRequest>;
                res = await this.rest.create<GalleryInterfaces.ExtensionAcquisitionRequest>(url, acquisitionRequest, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionAcquisitionRequest,
                                              false);

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
     * @param {string} version
     * @param {string} assetType
     * @param {string} accountToken
     * @param {boolean} acceptDefault
     * @param {String} accountTokenHeader - Header to pass the account token
     */
    public async getAssetByName(
        customHeaders: any,
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        accountToken?: string,
        acceptDefault?: boolean,
        accountTokenHeader?: String
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version,
                assetType: assetType
            };

            let queryValues: any = {
                accountToken: accountToken,
                acceptDefault: acceptDefault,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["X-Market-AccountToken"] = "accountTokenHeader";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "7529171f-a002-4180-93ba-685f358a0482",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} extensionId
     * @param {string} version
     * @param {string} assetType
     * @param {string} accountToken
     * @param {boolean} acceptDefault
     * @param {String} accountTokenHeader - Header to pass the account token
     */
    public async getAsset(
        customHeaders: any,
        extensionId: string,
        version: string,
        assetType: string,
        accountToken?: string,
        acceptDefault?: boolean,
        accountTokenHeader?: String
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId,
                version: version,
                assetType: assetType
            };

            let queryValues: any = {
                accountToken: accountToken,
                acceptDefault: acceptDefault,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["X-Market-AccountToken"] = "accountTokenHeader";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "5d545f3d-ef47-488b-8be3-f5ee1517856c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {string} assetType
     * @param {string} accountToken
     * @param {String} accountTokenHeader - Header to pass the account token
     */
    public async getAssetAuthenticated(
        customHeaders: any,
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        accountToken?: string,
        accountTokenHeader?: String
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version,
                assetType: assetType
            };

            let queryValues: any = {
                accountToken: accountToken,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["X-Market-AccountToken"] = "accountTokenHeader";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "506aff36-2622-4f70-8063-77cce6366d20",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} azurePublisherId
     */
    public async associateAzurePublisher(
        publisherName: string,
        azurePublisherId: string
        ): Promise<GalleryInterfaces.AzurePublisher> {
        if (azurePublisherId == null) {
            throw new TypeError('azurePublisherId can not be null or undefined');
        }

        return new Promise<GalleryInterfaces.AzurePublisher>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            let queryValues: any = {
                azurePublisherId: azurePublisherId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "efd202a6-9d87-4ebc-9229-d2b8ae2fdb6d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.AzurePublisher>;
                res = await this.rest.replace<GalleryInterfaces.AzurePublisher>(url, null, options);

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
     * @param {string} publisherName
     */
    public async queryAssociatedAzurePublisher(
        publisherName: string
        ): Promise<GalleryInterfaces.AzurePublisher> {

        return new Promise<GalleryInterfaces.AzurePublisher>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "efd202a6-9d87-4ebc-9229-d2b8ae2fdb6d",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.AzurePublisher>;
                res = await this.rest.get<GalleryInterfaces.AzurePublisher>(url, options);

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
     * @param {string} languages
     */
    public async getCategories(
        languages?: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                languages: languages,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "e0a5a71e-3ac3-43a0-ae7d-0bb5c3046a2a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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

    /**
     * @param {string} categoryName
     * @param {string} languages
     * @param {string} product
     */
    public async getCategoryDetails(
        categoryName: string,
        languages?: string,
        product?: string
        ): Promise<GalleryInterfaces.CategoriesResult> {

        return new Promise<GalleryInterfaces.CategoriesResult>(async (resolve, reject) => {
            let routeValues: any = {
                categoryName: categoryName
            };

            let queryValues: any = {
                languages: languages,
                product: product,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "75d3c04d-84d2-4973-acd2-22627587dabc",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.CategoriesResult>;
                res = await this.rest.get<GalleryInterfaces.CategoriesResult>(url, options);

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
     * @param {string} product
     * @param {string} categoryId
     * @param {number} lcid
     * @param {string} source
     * @param {string} productVersion
     * @param {string} skus
     * @param {string} subSkus
     * @param {string} productArchitecture
     */
    public async getCategoryTree(
        product: string,
        categoryId: string,
        lcid?: number,
        source?: string,
        productVersion?: string,
        skus?: string,
        subSkus?: string,
        productArchitecture?: string
        ): Promise<GalleryInterfaces.ProductCategory> {

        return new Promise<GalleryInterfaces.ProductCategory>(async (resolve, reject) => {
            let routeValues: any = {
                product: product,
                categoryId: categoryId
            };

            let queryValues: any = {
                lcid: lcid,
                source: source,
                productVersion: productVersion,
                skus: skus,
                subSkus: subSkus,
                productArchitecture: productArchitecture,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "1102bb42-82b0-4955-8d8a-435d6b4cedd3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ProductCategory>;
                res = await this.rest.get<GalleryInterfaces.ProductCategory>(url, options);

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
     * @param {string} product
     * @param {number} lcid
     * @param {string} source
     * @param {string} productVersion
     * @param {string} skus
     * @param {string} subSkus
     */
    public async getRootCategories(
        product: string,
        lcid?: number,
        source?: string,
        productVersion?: string,
        skus?: string,
        subSkus?: string
        ): Promise<GalleryInterfaces.ProductCategoriesResult> {

        return new Promise<GalleryInterfaces.ProductCategoriesResult>(async (resolve, reject) => {
            let routeValues: any = {
                product: product
            };

            let queryValues: any = {
                lcid: lcid,
                source: source,
                productVersion: productVersion,
                skus: skus,
                subSkus: subSkus,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "31fba831-35b2-46f6-a641-d05de5a877d8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ProductCategoriesResult>;
                res = await this.rest.get<GalleryInterfaces.ProductCategoriesResult>(url, options);

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
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     */
    public async getCertificate(
        publisherName: string,
        extensionName: string,
        version?: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "e905ad6a-3f1f-4d08-9f6d-7d357ff8b7d0",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     */
    public async getContentVerificationLog(
        publisherName: string,
        extensionName: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "c0f1c7c4-3557-4ffb-b774-1e48c4865e99",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GalleryInterfaces.CustomerSupportRequest} customerSupportRequest
     */
    public async createSupportRequest(
        customerSupportRequest: GalleryInterfaces.CustomerSupportRequest
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "8eded385-026a-4c15-b810-b8eb402771f1",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, customerSupportRequest, options);

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
     * @param {string} publisherName
     * @param {string} extensionName
     */
    public async createDraftForEditExtension(
        publisherName: string,
        extensionName: string
        ): Promise<GalleryInterfaces.ExtensionDraft> {

        return new Promise<GalleryInterfaces.ExtensionDraft>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "02b33873-4e61-496e-83a2-59d1df46b7d8",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDraft>;
                res = await this.rest.create<GalleryInterfaces.ExtensionDraft>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionDraft,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionDraftPatch} draftPatch
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} draftId
     */
    public async performEditExtensionDraftOperation(
        draftPatch: GalleryInterfaces.ExtensionDraftPatch,
        publisherName: string,
        extensionName: string,
        draftId: string
        ): Promise<GalleryInterfaces.ExtensionDraft> {

        return new Promise<GalleryInterfaces.ExtensionDraft>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                draftId: draftId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "02b33873-4e61-496e-83a2-59d1df46b7d8",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDraft>;
                res = await this.rest.update<GalleryInterfaces.ExtensionDraft>(url, draftPatch, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionDraft,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} draftId
     * @param {String} fileName - Header to pass the filename of the uploaded data
     */
    public async updatePayloadInDraftForEditExtension(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string,
        extensionName: string,
        draftId: string,
        fileName?: String
        ): Promise<GalleryInterfaces.ExtensionDraft> {

        return new Promise<GalleryInterfaces.ExtensionDraft>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                draftId: draftId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";
            customHeaders["X-Market-UploadFileName"] = "fileName";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "02b33873-4e61-496e-83a2-59d1df46b7d8",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDraft>;
                res = await this.rest.uploadStream<GalleryInterfaces.ExtensionDraft>("PUT", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionDraft,
                                              false);

                resolve(ret);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} draftId
     * @param {string} assetType
     */
    public async addAssetForEditExtensionDraft(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string,
        extensionName: string,
        draftId: string,
        assetType: string
        ): Promise<GalleryInterfaces.ExtensionDraftAsset> {

        return new Promise<GalleryInterfaces.ExtensionDraftAsset>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                draftId: draftId,
                assetType: assetType
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "f1db9c47-6619-4998-a7e5-d7f9f41a4617",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDraftAsset>;
                res = await this.rest.uploadStream<GalleryInterfaces.ExtensionDraftAsset>("PUT", url, contentStream, options);

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
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} publisherName
     * @param {String} product - Header to pass the product type of the payload file
     * @param {String} fileName - Header to pass the filename of the uploaded data
     */
    public async createDraftForNewExtension(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string,
        product: String,
        fileName?: String
        ): Promise<GalleryInterfaces.ExtensionDraft> {

        return new Promise<GalleryInterfaces.ExtensionDraft>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";
            customHeaders["X-Market-UploadFileProduct"] = "product";
            customHeaders["X-Market-UploadFileName"] = "fileName";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "b3ab127d-ebb9-4d22-b611-4e09593c8d79",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDraft>;
                res = await this.rest.uploadStream<GalleryInterfaces.ExtensionDraft>("POST", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionDraft,
                                              false);

                resolve(ret);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionDraftPatch} draftPatch
     * @param {string} publisherName
     * @param {string} draftId
     */
    public async performNewExtensionDraftOperation(
        draftPatch: GalleryInterfaces.ExtensionDraftPatch,
        publisherName: string,
        draftId: string
        ): Promise<GalleryInterfaces.ExtensionDraft> {

        return new Promise<GalleryInterfaces.ExtensionDraft>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                draftId: draftId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "b3ab127d-ebb9-4d22-b611-4e09593c8d79",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDraft>;
                res = await this.rest.update<GalleryInterfaces.ExtensionDraft>(url, draftPatch, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionDraft,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} publisherName
     * @param {string} draftId
     * @param {String} fileName - Header to pass the filename of the uploaded data
     */
    public async updatePayloadInDraftForNewExtension(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string,
        draftId: string,
        fileName?: String
        ): Promise<GalleryInterfaces.ExtensionDraft> {

        return new Promise<GalleryInterfaces.ExtensionDraft>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                draftId: draftId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";
            customHeaders["X-Market-UploadFileName"] = "fileName";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "b3ab127d-ebb9-4d22-b611-4e09593c8d79",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDraft>;
                res = await this.rest.uploadStream<GalleryInterfaces.ExtensionDraft>("PUT", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionDraft,
                                              false);

                resolve(ret);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} publisherName
     * @param {string} draftId
     * @param {string} assetType
     */
    public async addAssetForNewExtensionDraft(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string,
        draftId: string,
        assetType: string
        ): Promise<GalleryInterfaces.ExtensionDraftAsset> {

        return new Promise<GalleryInterfaces.ExtensionDraftAsset>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                draftId: draftId,
                assetType: assetType
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "88c0b1c8-b4f1-498a-9b2a-8446ef9f32e7",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDraftAsset>;
                res = await this.rest.uploadStream<GalleryInterfaces.ExtensionDraftAsset>("PUT", url, contentStream, options);

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
     * @param {string} publisherName
     * @param {string} draftId
     * @param {string} assetType
     * @param {string} extensionName
     */
    public async getAssetFromEditExtensionDraft(
        publisherName: string,
        draftId: string,
        assetType: string,
        extensionName: string
        ): Promise<NodeJS.ReadableStream> {
        if (extensionName == null) {
            throw new TypeError('extensionName can not be null or undefined');
        }

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                draftId: draftId,
                assetType: assetType
            };

            let queryValues: any = {
                extensionName: extensionName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "88c0b1c8-b4f1-498a-9b2a-8446ef9f32e7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} draftId
     * @param {string} assetType
     */
    public async getAssetFromNewExtensionDraft(
        publisherName: string,
        draftId: string,
        assetType: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                draftId: draftId,
                assetType: assetType
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "88c0b1c8-b4f1-498a-9b2a-8446ef9f32e7",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get install/uninstall events of an extension. If both count and afterDate parameters are specified, count takes precedence.
     * 
     * @param {string} publisherName - Name of the publisher
     * @param {string} extensionName - Name of the extension
     * @param {number} count - Count of events to fetch, applies to each event type.
     * @param {Date} afterDate - Fetch events that occurred on or after this date
     * @param {string} include - Filter options. Supported values: install, uninstall, review, acquisition, sales. Default is to fetch all types of events
     * @param {string} includeProperty - Event properties to include. Currently only 'lastContactDetails' is supported for uninstall events
     */
    public async getExtensionEvents(
        publisherName: string,
        extensionName: string,
        count?: number,
        afterDate?: Date,
        include?: string,
        includeProperty?: string
        ): Promise<GalleryInterfaces.ExtensionEvents> {

        return new Promise<GalleryInterfaces.ExtensionEvents>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                count: count,
                afterDate: afterDate,
                include: include,
                includeProperty: includeProperty,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "3d13c499-2168-4d06-bef4-14aba185dcd5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionEvents>;
                res = await this.rest.get<GalleryInterfaces.ExtensionEvents>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionEvents,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * API endpoint to publish extension install/uninstall events. This is meant to be invoked by EMS only for sending us data related to install/uninstall of an extension.
     * 
     * @param {GalleryInterfaces.ExtensionEvents[]} extensionEvents
     */
    public async publishExtensionEvents(
        extensionEvents: GalleryInterfaces.ExtensionEvents[]
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "0bf2bd3a-70e0-4d5d-8bf7-bd4a9c2ab6e7",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, extensionEvents, options);

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
     * @param {GalleryInterfaces.ExtensionQuery} extensionQuery
     * @param {string} accountToken
     * @param {String} accountTokenHeader - Header to pass the account token
     */
    public async queryExtensions(
        customHeaders: any,
        extensionQuery: GalleryInterfaces.ExtensionQuery,
        accountToken?: string,
        accountTokenHeader?: String
        ): Promise<GalleryInterfaces.ExtensionQueryResult> {

        return new Promise<GalleryInterfaces.ExtensionQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                accountToken: accountToken,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["X-Market-AccountToken"] = "accountTokenHeader";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "eb9d5ee1-6d43-456b-b80e-8a96fbc014b6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionQueryResult>;
                res = await this.rest.create<GalleryInterfaces.ExtensionQueryResult>(url, extensionQuery, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionQueryResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} extensionType
     * @param {string} reCaptchaToken
     */
    public async createExtension(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        extensionType?: string,
        reCaptchaToken?: string
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                extensionType: extensionType,
                reCaptchaToken: reCaptchaToken,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.uploadStream<GalleryInterfaces.PublishedExtension>("POST", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.PublishedExtension,
                                              false);

                resolve(ret);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} extensionId
     * @param {string} version
     */
    public async deleteExtensionById(
        extensionId: string,
        version?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId
            };

            let queryValues: any = {
                version: version,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} extensionId
     * @param {string} version
     * @param {GalleryInterfaces.ExtensionQueryFlags} flags
     */
    public async getExtensionById(
        extensionId: string,
        version?: string,
        flags?: GalleryInterfaces.ExtensionQueryFlags
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId
            };

            let queryValues: any = {
                version: version,
                flags: flags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.get<GalleryInterfaces.PublishedExtension>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.PublishedExtension,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} extensionId
     * @param {string} reCaptchaToken
     */
    public async updateExtensionById(
        extensionId: string,
        reCaptchaToken?: string
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId
            };

            let queryValues: any = {
                reCaptchaToken: reCaptchaToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.replace<GalleryInterfaces.PublishedExtension>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.PublishedExtension,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} publisherName
     * @param {string} extensionType
     * @param {string} reCaptchaToken
     */
    public async createExtensionWithPublisher(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string,
        extensionType?: string,
        reCaptchaToken?: string
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            let queryValues: any = {
                extensionType: extensionType,
                reCaptchaToken: reCaptchaToken,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.uploadStream<GalleryInterfaces.PublishedExtension>("POST", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.PublishedExtension,
                                              false);

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
     * @param {string} version
     */
    public async deleteExtension(
        publisherName: string,
        extensionName: string,
        version?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                version: version,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {GalleryInterfaces.ExtensionQueryFlags} flags
     * @param {string} accountToken
     * @param {String} accountTokenHeader - Header to pass the account token
     */
    public async getExtension(
        customHeaders: any,
        publisherName: string,
        extensionName: string,
        version?: string,
        flags?: GalleryInterfaces.ExtensionQueryFlags,
        accountToken?: string,
        accountTokenHeader?: String
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                version: version,
                flags: flags,
                accountToken: accountToken,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["X-Market-AccountToken"] = "accountTokenHeader";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.get<GalleryInterfaces.PublishedExtension>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.PublishedExtension,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * REST endpoint to update an extension.
     * 
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} publisherName - Name of the publisher
     * @param {string} extensionName - Name of the extension
     * @param {string} extensionType
     * @param {string} reCaptchaToken
     * @param {boolean} bypassScopeCheck - This parameter decides if the scope change check needs to be invoked or not
     */
    public async updateExtension(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string,
        extensionName: string,
        extensionType?: string,
        reCaptchaToken?: string,
        bypassScopeCheck?: boolean
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                extensionType: extensionType,
                reCaptchaToken: reCaptchaToken,
                bypassScopeCheck: bypassScopeCheck,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.uploadStream<GalleryInterfaces.PublishedExtension>("PUT", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.PublishedExtension,
                                              false);

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
     * @param {GalleryInterfaces.PublishedExtensionFlags} flags
     */
    public async updateExtensionProperties(
        publisherName: string,
        extensionName: string,
        flags: GalleryInterfaces.PublishedExtensionFlags
        ): Promise<GalleryInterfaces.PublishedExtension> {
        if (flags == null) {
            throw new TypeError('flags can not be null or undefined');
        }

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                flags: flags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.update<GalleryInterfaces.PublishedExtension>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.PublishedExtension,
                                              false);

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
     * @param {string} hostType
     * @param {string} hostName
     */
    public async shareExtensionWithHost(
        publisherName: string,
        extensionName: string,
        hostType: string,
        hostName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                hostType: hostType,
                hostName: hostName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "328a3af8-d124-46e9-9483-01690cd415b9",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} hostType
     * @param {string} hostName
     */
    public async unshareExtensionWithHost(
        publisherName: string,
        extensionName: string,
        hostType: string,
        hostName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                hostType: hostType,
                hostName: hostName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "328a3af8-d124-46e9-9483-01690cd415b9",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {GalleryInterfaces.AzureRestApiRequestModel} azureRestApiRequestModel
     */
    public async extensionValidator(
        azureRestApiRequestModel: GalleryInterfaces.AzureRestApiRequestModel
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "05e8a5e1-8c59-4c2c-8856-0ff087d1a844",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, azureRestApiRequestModel, options);

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
     * Send Notification
     * 
     * @param {GalleryInterfaces.NotificationsData} notificationData - Denoting the data needed to send notification
     */
    public async sendNotifications(
        notificationData: GalleryInterfaces.NotificationsData
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "eab39817-413c-4602-a49f-07ad00844980",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, notificationData, options);

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
     * This endpoint gets hit when you download a VSTS extension from the Web UI
     * 
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {string} accountToken
     * @param {boolean} acceptDefault
     * @param {String} accountTokenHeader - Header to pass the account token
     */
    public async getPackage(
        customHeaders: any,
        publisherName: string,
        extensionName: string,
        version: string,
        accountToken?: string,
        acceptDefault?: boolean,
        accountTokenHeader?: String
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version
            };

            let queryValues: any = {
                accountToken: accountToken,
                acceptDefault: acceptDefault,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["X-Market-AccountToken"] = "accountTokenHeader";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "7cb576f8-1cae-4c4b-b7b1-e4af5759e965",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {string} assetType
     * @param {string} assetToken
     * @param {string} accountToken
     * @param {boolean} acceptDefault
     * @param {String} accountTokenHeader - Header to pass the account token
     */
    public async getAssetWithToken(
        customHeaders: any,
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        assetToken?: string,
        accountToken?: string,
        acceptDefault?: boolean,
        accountTokenHeader?: String
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version,
                assetType: assetType,
                assetToken: assetToken
            };

            let queryValues: any = {
                accountToken: accountToken,
                acceptDefault: acceptDefault,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["X-Market-AccountToken"] = "accountTokenHeader";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "364415a1-0077-4a41-a7a0-06edd4497492",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete publisher asset like logo
     * 
     * @param {string} publisherName - Internal name of the publisher
     * @param {string} assetType - Type of asset. Default value is 'logo'.
     */
    public async deletePublisherAsset(
        publisherName: string,
        assetType?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            let queryValues: any = {
                assetType: assetType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "21143299-34f9-4c62-8ca8-53da691192f9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get publisher asset like logo as a stream
     * 
     * @param {string} publisherName - Internal name of the publisher
     * @param {string} assetType - Type of asset. Default value is 'logo'.
     */
    public async getPublisherAsset(
        publisherName: string,
        assetType?: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            let queryValues: any = {
                assetType: assetType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "21143299-34f9-4c62-8ca8-53da691192f9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update publisher asset like logo. It accepts asset file as an octet stream and file name is passed in header values.
     * 
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} publisherName - Internal name of the publisher
     * @param {string} assetType - Type of asset. Default value is 'logo'.
     * @param {String} fileName - Header to pass the filename of the uploaded data
     */
    public async updatePublisherAsset(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string,
        assetType?: string,
        fileName?: String
        ): Promise<{ [key: string] : string; }> {

        return new Promise<{ [key: string] : string; }>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            let queryValues: any = {
                assetType: assetType,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";
            customHeaders["X-Market-UploadFileName"] = "fileName";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "21143299-34f9-4c62-8ca8-53da691192f9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<{ [key: string] : string; }>;
                res = await this.rest.uploadStream<{ [key: string] : string; }>("PUT", url, contentStream, options);

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
     * @param {string} publisherName
     */
    public async fetchDomainToken(
        publisherName: string
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "67a609ef-fa74-4b52-8664-78d76f7b3634",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.get<string>(url, options);

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
     * @param {string} publisherName
     */
    public async verifyDomainToken(
        publisherName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "67a609ef-fa74-4b52-8664-78d76f7b3634",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, null, options);

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
     * @param {GalleryInterfaces.PublisherQuery} publisherQuery
     */
    public async queryPublishers(
        publisherQuery: GalleryInterfaces.PublisherQuery
        ): Promise<GalleryInterfaces.PublisherQueryResult> {

        return new Promise<GalleryInterfaces.PublisherQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "2ad6ee0a-b53f-4034-9d1d-d009fda1212e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.PublisherQueryResult>;
                res = await this.rest.create<GalleryInterfaces.PublisherQueryResult>(url, publisherQuery, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.PublisherQueryResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GalleryInterfaces.Publisher} publisher
     */
    public async createPublisher(
        publisher: GalleryInterfaces.Publisher
        ): Promise<GalleryInterfaces.Publisher> {

        return new Promise<GalleryInterfaces.Publisher>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Publisher>;
                res = await this.rest.create<GalleryInterfaces.Publisher>(url, publisher, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Publisher,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} publisherName
     */
    public async deletePublisher(
        publisherName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} publisherName
     * @param {number} flags
     */
    public async getPublisher(
        publisherName: string,
        flags?: number
        ): Promise<GalleryInterfaces.Publisher> {

        return new Promise<GalleryInterfaces.Publisher>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            let queryValues: any = {
                flags: flags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Publisher>;
                res = await this.rest.get<GalleryInterfaces.Publisher>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Publisher,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GalleryInterfaces.Publisher} publisher
     * @param {string} publisherName
     */
    public async updatePublisher(
        publisher: GalleryInterfaces.Publisher,
        publisherName: string
        ): Promise<GalleryInterfaces.Publisher> {

        return new Promise<GalleryInterfaces.Publisher>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Publisher>;
                res = await this.rest.replace<GalleryInterfaces.Publisher>(url, publisher, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Publisher,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Endpoint to add/modify publisher membership. Currently Supports only addition/modification of 1 user at a time Works only for adding members of same tenant.
     * 
     * @param {GalleryInterfaces.PublisherUserRoleAssignmentRef[]} roleAssignments - List of user identifiers(email address) and role to be added. Currently only one entry is supported.
     * @param {string} publisherName - The name/id of publisher to which users have to be added
     * @param {boolean} limitToCallerIdentityDomain - Should cross tenant addtions be allowed or not.
     */
    public async updatePublisherMembers(
        roleAssignments: GalleryInterfaces.PublisherUserRoleAssignmentRef[],
        publisherName: string,
        limitToCallerIdentityDomain?: boolean
        ): Promise<GalleryInterfaces.PublisherRoleAssignment[]> {

        return new Promise<GalleryInterfaces.PublisherRoleAssignment[]>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            let queryValues: any = {
                limitToCallerIdentityDomain: limitToCallerIdentityDomain,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.PublisherRoleAssignment[]>;
                res = await this.rest.create<GalleryInterfaces.PublisherRoleAssignment[]>(url, roleAssignments, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.PublisherRoleAssignment,
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
     */
    public async getPublisherWithoutToken(
        publisherName: string
        ): Promise<GalleryInterfaces.Publisher> {

        return new Promise<GalleryInterfaces.Publisher>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "215a2ed8-458a-4850-ad5a-45f1dabc3461",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Publisher>;
                res = await this.rest.get<GalleryInterfaces.Publisher>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Publisher,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a list of questions with their responses associated with an extension.
     * 
     * @param {string} publisherName - Name of the publisher who published the extension.
     * @param {string} extensionName - Name of the extension.
     * @param {number} count - Number of questions to retrieve (defaults to 10).
     * @param {number} page - Page number from which set of questions are to be retrieved.
     * @param {Date} afterDate - If provided, results questions are returned which were posted after this date
     */
    public async getQuestions(
        publisherName: string,
        extensionName: string,
        count?: number,
        page?: number,
        afterDate?: Date
        ): Promise<GalleryInterfaces.QuestionsResult> {

        return new Promise<GalleryInterfaces.QuestionsResult>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                count: count,
                page: page,
                afterDate: afterDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "c010d03d-812c-4ade-ae07-c1862475eda5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.QuestionsResult>;
                res = await this.rest.get<GalleryInterfaces.QuestionsResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.QuestionsResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Flags a concern with an existing question for an extension.
     * 
     * @param {GalleryInterfaces.Concern} concern - User reported concern with a question for the extension.
     * @param {string} pubName - Name of the publisher who published the extension.
     * @param {string} extName - Name of the extension.
     * @param {number} questionId - Identifier of the question to be updated for the extension.
     */
    public async reportQuestion(
        concern: GalleryInterfaces.Concern,
        pubName: string,
        extName: string,
        questionId: number
        ): Promise<GalleryInterfaces.Concern> {

        return new Promise<GalleryInterfaces.Concern>(async (resolve, reject) => {
            let routeValues: any = {
                pubName: pubName,
                extName: extName,
                questionId: questionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "784910cd-254a-494d-898b-0728549b2f10",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Concern>;
                res = await this.rest.create<GalleryInterfaces.Concern>(url, concern, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Concern,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Creates a new question for an extension.
     * 
     * @param {GalleryInterfaces.Question} question - Question to be created for the extension.
     * @param {string} publisherName - Name of the publisher who published the extension.
     * @param {string} extensionName - Name of the extension.
     */
    public async createQuestion(
        question: GalleryInterfaces.Question,
        publisherName: string,
        extensionName: string
        ): Promise<GalleryInterfaces.Question> {

        return new Promise<GalleryInterfaces.Question>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "6d1d9741-eca8-4701-a3a5-235afc82dfa4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Question>;
                res = await this.rest.create<GalleryInterfaces.Question>(url, question, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Question,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Deletes an existing question and all its associated responses for an extension. (soft delete)
     * 
     * @param {string} publisherName - Name of the publisher who published the extension.
     * @param {string} extensionName - Name of the extension.
     * @param {number} questionId - Identifier of the question to be deleted for the extension.
     */
    public async deleteQuestion(
        publisherName: string,
        extensionName: string,
        questionId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                questionId: questionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "6d1d9741-eca8-4701-a3a5-235afc82dfa4",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Updates an existing question for an extension.
     * 
     * @param {GalleryInterfaces.Question} question - Updated question to be set for the extension.
     * @param {string} publisherName - Name of the publisher who published the extension.
     * @param {string} extensionName - Name of the extension.
     * @param {number} questionId - Identifier of the question to be updated for the extension.
     */
    public async updateQuestion(
        question: GalleryInterfaces.Question,
        publisherName: string,
        extensionName: string,
        questionId: number
        ): Promise<GalleryInterfaces.Question> {

        return new Promise<GalleryInterfaces.Question>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                questionId: questionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "6d1d9741-eca8-4701-a3a5-235afc82dfa4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Question>;
                res = await this.rest.update<GalleryInterfaces.Question>(url, question, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Question,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Creates a new response for a given question for an extension.
     * 
     * @param {GalleryInterfaces.Response} response - Response to be created for the extension.
     * @param {string} publisherName - Name of the publisher who published the extension.
     * @param {string} extensionName - Name of the extension.
     * @param {number} questionId - Identifier of the question for which response is to be created for the extension.
     */
    public async createResponse(
        response: GalleryInterfaces.Response,
        publisherName: string,
        extensionName: string,
        questionId: number
        ): Promise<GalleryInterfaces.Response> {

        return new Promise<GalleryInterfaces.Response>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                questionId: questionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "7f8ae5e0-46b0-438f-b2e8-13e8513517bd",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Response>;
                res = await this.rest.create<GalleryInterfaces.Response>(url, response, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Response,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Deletes a response for an extension. (soft delete)
     * 
     * @param {string} publisherName - Name of the publisher who published the extension.
     * @param {string} extensionName - Name of the extension.
     * @param {number} questionId - Identifies the question whose response is to be deleted.
     * @param {number} responseId - Identifies the response to be deleted.
     */
    public async deleteResponse(
        publisherName: string,
        extensionName: string,
        questionId: number,
        responseId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                questionId: questionId,
                responseId: responseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "7f8ae5e0-46b0-438f-b2e8-13e8513517bd",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Updates an existing response for a given question for an extension.
     * 
     * @param {GalleryInterfaces.Response} response - Updated response to be set for the extension.
     * @param {string} publisherName - Name of the publisher who published the extension.
     * @param {string} extensionName - Name of the extension.
     * @param {number} questionId - Identifier of the question for which response is to be updated for the extension.
     * @param {number} responseId - Identifier of the response which has to be updated.
     */
    public async updateResponse(
        response: GalleryInterfaces.Response,
        publisherName: string,
        extensionName: string,
        questionId: number,
        responseId: number
        ): Promise<GalleryInterfaces.Response> {

        return new Promise<GalleryInterfaces.Response>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                questionId: questionId,
                responseId: responseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "7f8ae5e0-46b0-438f-b2e8-13e8513517bd",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Response>;
                res = await this.rest.update<GalleryInterfaces.Response>(url, response, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Response,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns extension reports
     * 
     * @param {string} publisherName - Name of the publisher who published the extension
     * @param {string} extensionName - Name of the extension
     * @param {number} days - Last n days report. If afterDate and days are specified, days will take priority
     * @param {number} count - Number of events to be returned
     * @param {Date} afterDate - Use if you want to fetch events newer than the specified date
     */
    public async getExtensionReports(
        publisherName: string,
        extensionName: string,
        days?: number,
        count?: number,
        afterDate?: Date
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                days: days,
                count: count,
                afterDate: afterDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "79e0c74f-157f-437e-845f-74fbb4121d4c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<any>;
                res = await this.rest.get<any>(url, options);

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
     * Returns a list of reviews associated with an extension
     * 
     * @param {string} publisherName - Name of the publisher who published the extension
     * @param {string} extensionName - Name of the extension
     * @param {number} count - Number of reviews to retrieve (defaults to 5)
     * @param {GalleryInterfaces.ReviewFilterOptions} filterOptions - FilterOptions to filter out empty reviews etcetera, defaults to none
     * @param {Date} beforeDate - Use if you want to fetch reviews older than the specified date, defaults to null
     * @param {Date} afterDate - Use if you want to fetch reviews newer than the specified date, defaults to null
     */
    public async getReviews(
        publisherName: string,
        extensionName: string,
        count?: number,
        filterOptions?: GalleryInterfaces.ReviewFilterOptions,
        beforeDate?: Date,
        afterDate?: Date
        ): Promise<GalleryInterfaces.ReviewsResult> {

        return new Promise<GalleryInterfaces.ReviewsResult>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                count: count,
                filterOptions: filterOptions,
                beforeDate: beforeDate,
                afterDate: afterDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "5b3f819f-f247-42ad-8c00-dd9ab9ab246d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ReviewsResult>;
                res = await this.rest.get<GalleryInterfaces.ReviewsResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ReviewsResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a summary of the reviews
     * 
     * @param {string} pubName - Name of the publisher who published the extension
     * @param {string} extName - Name of the extension
     * @param {Date} beforeDate - Use if you want to fetch summary of reviews older than the specified date, defaults to null
     * @param {Date} afterDate - Use if you want to fetch summary of reviews newer than the specified date, defaults to null
     */
    public async getReviewsSummary(
        pubName: string,
        extName: string,
        beforeDate?: Date,
        afterDate?: Date
        ): Promise<GalleryInterfaces.ReviewSummary> {

        return new Promise<GalleryInterfaces.ReviewSummary>(async (resolve, reject) => {
            let routeValues: any = {
                pubName: pubName,
                extName: extName
            };

            let queryValues: any = {
                beforeDate: beforeDate,
                afterDate: afterDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "b7b44e21-209e-48f0-ae78-04727fc37d77",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ReviewSummary>;
                res = await this.rest.get<GalleryInterfaces.ReviewSummary>(url, options);

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
     * Creates a new review for an extension
     * 
     * @param {GalleryInterfaces.Review} review - Review to be created for the extension
     * @param {string} pubName - Name of the publisher who published the extension
     * @param {string} extName - Name of the extension
     */
    public async createReview(
        review: GalleryInterfaces.Review,
        pubName: string,
        extName: string
        ): Promise<GalleryInterfaces.Review> {

        return new Promise<GalleryInterfaces.Review>(async (resolve, reject) => {
            let routeValues: any = {
                pubName: pubName,
                extName: extName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.Review>;
                res = await this.rest.create<GalleryInterfaces.Review>(url, review, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.Review,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Deletes a review
     * 
     * @param {string} pubName - Name of the publisher who published the extension
     * @param {string} extName - Name of the extension
     * @param {number} reviewId - Id of the review which needs to be updated
     */
    public async deleteReview(
        pubName: string,
        extName: string,
        reviewId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                pubName: pubName,
                extName: extName,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Updates or Flags a review
     * 
     * @param {GalleryInterfaces.ReviewPatch} reviewPatch - ReviewPatch object which contains the changes to be applied to the review
     * @param {string} pubName - Name of the publisher who published the extension
     * @param {string} extName - Name of the extension
     * @param {number} reviewId - Id of the review which needs to be updated
     */
    public async updateReview(
        reviewPatch: GalleryInterfaces.ReviewPatch,
        pubName: string,
        extName: string,
        reviewId: number
        ): Promise<GalleryInterfaces.ReviewPatch> {

        return new Promise<GalleryInterfaces.ReviewPatch>(async (resolve, reject) => {
            let routeValues: any = {
                pubName: pubName,
                extName: extName,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ReviewPatch>;
                res = await this.rest.update<GalleryInterfaces.ReviewPatch>(url, reviewPatch, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ReviewPatch,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionCategory} category
     */
    public async createCategory(
        category: GalleryInterfaces.ExtensionCategory
        ): Promise<GalleryInterfaces.ExtensionCategory> {

        return new Promise<GalleryInterfaces.ExtensionCategory>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "476531a3-7024-4516-a76a-ed64d3008ad6",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionCategory>;
                res = await this.rest.create<GalleryInterfaces.ExtensionCategory>(url, category, options);

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
     * Get all setting entries for the given user/all-users scope
     * 
     * @param {string} userScope - User-Scope at which to get the value. Should be "me" for the current user or "host" for all users.
     * @param {string} key - Optional key under which to filter all the entries
     */
    public async getGalleryUserSettings(
        userScope: string,
        key?: string
        ): Promise<{ [key: string] : any; }> {

        return new Promise<{ [key: string] : any; }>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope,
                key: key
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "9b75ece3-7960-401c-848b-148ac01ca350",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ [key: string] : any; }>;
                res = await this.rest.get<{ [key: string] : any; }>(url, options);

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
     * Set all setting entries for the given user/all-users scope
     * 
     * @param {{ [key: string] : any; }} entries - A key-value pair of all settings that need to be set
     * @param {string} userScope - User-Scope at which to get the value. Should be "me" for the current user or "host" for all users.
     */
    public async setGalleryUserSettings(
        entries: { [key: string] : any; },
        userScope: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userScope: userScope
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "9b75ece3-7960-401c-848b-148ac01ca350",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, entries, options);

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
     * @param {string} keyType
     * @param {number} expireCurrentSeconds
     */
    public async generateKey(
        keyType: string,
        expireCurrentSeconds?: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                keyType: keyType
            };

            let queryValues: any = {
                expireCurrentSeconds: expireCurrentSeconds,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "92ed5cf4-c38b-465a-9059-2f2fb7c624b5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
     * @param {string} keyType
     */
    public async getSigningKey(
        keyType: string
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                keyType: keyType
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "92ed5cf4-c38b-465a-9059-2f2fb7c624b5",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.get<string>(url, options);

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
     * @param {GalleryInterfaces.ExtensionStatisticUpdate} extensionStatisticsUpdate
     * @param {string} publisherName
     * @param {string} extensionName
     */
    public async updateExtensionStatistics(
        extensionStatisticsUpdate: GalleryInterfaces.ExtensionStatisticUpdate,
        publisherName: string,
        extensionName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "a0ea3204-11e9-422d-a9ca-45851cc41400",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, extensionStatisticsUpdate, options);

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
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {number} days
     * @param {GalleryInterfaces.ExtensionStatsAggregateType} aggregate
     * @param {Date} afterDate
     */
    public async getExtensionDailyStats(
        publisherName: string,
        extensionName: string,
        days?: number,
        aggregate?: GalleryInterfaces.ExtensionStatsAggregateType,
        afterDate?: Date
        ): Promise<GalleryInterfaces.ExtensionDailyStats> {

        return new Promise<GalleryInterfaces.ExtensionDailyStats>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                days: days,
                aggregate: aggregate,
                afterDate: afterDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "ae06047e-51c5-4fb4-ab65-7be488544416",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDailyStats>;
                res = await this.rest.get<GalleryInterfaces.ExtensionDailyStats>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionDailyStats,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * This route/location id only supports HTTP POST anonymously, so that the page view daily stat can be incremented from Marketplace client. Trying to call GET on this route should result in an exception. Without this explicit implementation, calling GET on this public route invokes the above GET implementation GetExtensionDailyStats.
     * 
     * @param {string} publisherName - Name of the publisher
     * @param {string} extensionName - Name of the extension
     * @param {string} version - Version of the extension
     */
    public async getExtensionDailyStatsAnonymous(
        publisherName: string,
        extensionName: string,
        version: string
        ): Promise<GalleryInterfaces.ExtensionDailyStats> {

        return new Promise<GalleryInterfaces.ExtensionDailyStats>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "4fa7adb6-ca65-4075-a232-5f28323288ea",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.ExtensionDailyStats>;
                res = await this.rest.get<GalleryInterfaces.ExtensionDailyStats>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.ExtensionDailyStats,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Increments a daily statistic associated with the extension
     * 
     * @param {string} publisherName - Name of the publisher
     * @param {string} extensionName - Name of the extension
     * @param {string} version - Version of the extension
     * @param {string} statType - Type of stat to increment
     * @param {string} targetPlatform
     */
    public async incrementExtensionDailyStat(
        publisherName: string,
        extensionName: string,
        version: string,
        statType: string,
        targetPlatform?: string
        ): Promise<void> {
        if (statType == null) {
            throw new TypeError('statType can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version
            };

            let queryValues: any = {
                statType: statType,
                targetPlatform: targetPlatform,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "4fa7adb6-ca65-4075-a232-5f28323288ea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {string} targetPlatform
     */
    public async getVerificationLog(
        publisherName: string,
        extensionName: string,
        version: string,
        targetPlatform?: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version
            };

            let queryValues: any = {
                targetPlatform: targetPlatform,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "c5523abe-b843-437f-875b-5833064efe4d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} itemName
     * @param {string} version
     * @param {GalleryInterfaces.VSCodeWebExtensionStatisicsType} statType
     */
    public async updateVSCodeWebExtensionStatistics(
        itemName: string,
        version: string,
        statType: GalleryInterfaces.VSCodeWebExtensionStatisicsType
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                itemName: itemName,
                version: version,
                statType: statType
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "gallery",
                    "205c91a8-7841-4fd3-ae4f-5a745d5a8df5",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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

}
