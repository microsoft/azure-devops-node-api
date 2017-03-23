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
import compatBase = require("././GalleryCompatHttpClientBase");
import GalleryInterfaces = require("./interfaces/GalleryInterfaces");

export interface IGalleryApi extends compatBase.GalleryCompatHttpClientBase {
    shareExtensionById(extensionId: string, accountName: string): Promise<void>;
    unshareExtensionById(extensionId: string, accountName: string): Promise<void>;
    shareExtension(publisherName: string, extensionName: string, accountName: string): Promise<void>;
    unshareExtension(publisherName: string, extensionName: string, accountName: string): Promise<void>;
    getAcquisitionOptions(itemId: string, installationTarget: string, testCommerce?: boolean, isFreeOrTrialInstall?: boolean): Promise<GalleryInterfaces.AcquisitionOptions>;
    requestAcquisition(acquisitionRequest: GalleryInterfaces.ExtensionAcquisitionRequest): Promise<GalleryInterfaces.ExtensionAcquisitionRequest>;
    getAssetByName(publisherName: string, extensionName: string, version: string, assetType: string, accountToken?: string, acceptDefault?: boolean): Promise<NodeJS.ReadableStream>;
    getAsset(extensionId: string, version: string, assetType: string, accountToken?: string, acceptDefault?: boolean): Promise<NodeJS.ReadableStream>;
    getAssetAuthenticated(publisherName: string, extensionName: string, version: string, assetType: string, accountToken?: string): Promise<NodeJS.ReadableStream>;
    associateAzurePublisher(publisherName: string, azurePublisherId: string): Promise<GalleryInterfaces.AzurePublisher>;
    queryAssociatedAzurePublisher(publisherName: string): Promise<GalleryInterfaces.AzurePublisher>;
    getCategories(languages?: string): Promise<string[]>;
    getCategoryDetails(categoryName: string, languages?: string, product?: string): Promise<GalleryInterfaces.CategoriesResult>;
    getCategoryTree(product: string, categoryId: string, lcid?: number, source?: string, productVersion?: string, skus?: string, subSkus?: string): Promise<GalleryInterfaces.ProductCategory>;
    getRootCategories(product: string, lcid?: number, source?: string, productVersion?: string, skus?: string, subSkus?: string): Promise<GalleryInterfaces.ProductCategoriesResult>;
    getCertificate(publisherName: string, extensionName: string, version?: string): Promise<NodeJS.ReadableStream>;
    getExtensionEvents(publisherName: string, extensionName: string, count?: number, afterDate?: Date, include?: string): Promise<GalleryInterfaces.ExtensionEvents>;
    publishExtensionEvents(extensionEvents: GalleryInterfaces.ExtensionEvents[]): Promise<void>;
    queryExtensions(extensionQuery: GalleryInterfaces.ExtensionQuery, accountToken?: string): Promise<GalleryInterfaces.ExtensionQueryResult>;
    createExtension(customHeaders: any, contentStream: NodeJS.ReadableStream): Promise<GalleryInterfaces.PublishedExtension>;
    deleteExtensionById(extensionId: string, version?: string): Promise<void>;
    getExtensionById(extensionId: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtensionById(extensionId: string): Promise<GalleryInterfaces.PublishedExtension>;
    createExtensionWithPublisher(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string): Promise<GalleryInterfaces.PublishedExtension>;
    deleteExtension(publisherName: string, extensionName: string, version?: string): Promise<void>;
    getExtension(publisherName: string, extensionName: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags, accountToken?: string): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtension(customHeaders: any, contentStream: NodeJS.ReadableStream, publisherName: string, extensionName: string): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtensionProperties(publisherName: string, extensionName: string, flags: GalleryInterfaces.PublishedExtensionFlags): Promise<GalleryInterfaces.PublishedExtension>;
    extensionValidator(azureRestApiRequestModel: GalleryInterfaces.AzureRestApiRequestModel): Promise<void>;
    getPackage(publisherName: string, extensionName: string, version: string, accountToken?: string, acceptDefault?: boolean): Promise<NodeJS.ReadableStream>;
    getAssetWithToken(publisherName: string, extensionName: string, version: string, assetType: string, assetToken?: string, accountToken?: string, acceptDefault?: boolean): Promise<NodeJS.ReadableStream>;
    queryPublishers(publisherQuery: GalleryInterfaces.PublisherQuery): Promise<GalleryInterfaces.PublisherQueryResult>;
    createPublisher(publisher: GalleryInterfaces.Publisher): Promise<GalleryInterfaces.Publisher>;
    deletePublisher(publisherName: string): Promise<void>;
    getPublisher(publisherName: string, flags?: number): Promise<GalleryInterfaces.Publisher>;
    updatePublisher(publisher: GalleryInterfaces.Publisher, publisherName: string): Promise<GalleryInterfaces.Publisher>;
    getQuestions(publisherName: string, extensionName: string, count?: number, page?: number): Promise<GalleryInterfaces.QuestionsResult>;
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
    getExtensionDailyStats(publisherName: string, extensionName: string, days?: number, aggregate?: GalleryInterfaces.ExtensionStatsAggregateType): Promise<GalleryInterfaces.ExtensionDailyStats>;
    getExtensionDailyStatsAnonymous(publisherName: string, extensionName: string, version: string): Promise<GalleryInterfaces.ExtensionDailyStats>;
    incrementExtensionDailyStat(publisherName: string, extensionName: string, version: string, statType: string): Promise<void>;
}

export class GalleryApi extends compatBase.GalleryCompatHttpClientBase implements IGalleryApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Gallery-api');
    }

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
                    "3.2-preview.1",
                    "gallery",
                    "1f19631b-a0b4-4a03-89c2-d79785d24360",
                    routeValues);

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
                    "3.2-preview.1",
                    "gallery",
                    "1f19631b-a0b4-4a03-89c2-d79785d24360",
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
                    "3.2-preview.1",
                    "gallery",
                    "a1e66d8f-f5de-4d16-8309-91a4e015ee46",
                    routeValues);

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
                    "3.2-preview.1",
                    "gallery",
                    "a1e66d8f-f5de-4d16-8309-91a4e015ee46",
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
                    "3.2-preview.1",
                    "gallery",
                    "9d0a0105-075e-4760-aa15-8bcf54d1bd7d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "3adb1f2d-e328-446e-be73-9f6d98071c45",
                    routeValues);

                let url: string = verData.requestUrl;
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
    */
    public async getAssetByName(
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        accountToken?: string,
        acceptDefault?: boolean
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "7529171f-a002-4180-93ba-685f358a0482",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
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
    */
    public async getAsset(
        extensionId: string,
        version: string,
        assetType: string,
        accountToken?: string,
        acceptDefault?: boolean
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "5d545f3d-ef47-488b-8be3-f5ee1517856c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
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
    */
    public async getAssetAuthenticated(
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        accountToken?: string
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "506aff36-2622-4f70-8063-77cce6366d20",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
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

        return new Promise<GalleryInterfaces.AzurePublisher>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            let queryValues: any = {
                azurePublisherId: azurePublisherId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "efd202a6-9d87-4ebc-9229-d2b8ae2fdb6d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.AzurePublisher>;
                res = await this.rest.replace<GalleryInterfaces.AzurePublisher>(url, options);

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
                    "3.2-preview.1",
                    "gallery",
                    "efd202a6-9d87-4ebc-9229-d2b8ae2fdb6d",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "e0a5a71e-3ac3-43a0-ae7d-0bb5c3046a2a",
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
                    "3.2-preview.1",
                    "gallery",
                    "75d3c04d-84d2-4973-acd2-22627587dabc",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
    */
    public async getCategoryTree(
        product: string,
        categoryId: string,
        lcid?: number,
        source?: string,
        productVersion?: string,
        skus?: string,
        subSkus?: string
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
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "1102bb42-82b0-4955-8d8a-435d6b4cedd3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "31fba831-35b2-46f6-a641-d05de5a877d8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "e905ad6a-3f1f-4d08-9f6d-7d357ff8b7d0",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get install/uninstall events of an extension.
    * 
    * @param {string} publisherName - Name of the publisher
    * @param {string} extensionName - Name of the extension
    * @param {number} count - Count of events to fetch, applies to each event type.
    * @param {Date} afterDate - Fetch events that occured on or after this value
    * @param {string} include - Filter options. Supported values: includeInstall, includeUninstall. Default is to fetch all types of events
    */
    public async getExtensionEvents(
        publisherName: string,
        extensionName: string,
        count?: number,
        afterDate?: Date,
        include?: string
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
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "3d13c499-2168-4d06-bef4-14aba185dcd5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "0bf2bd3a-70e0-4d5d-8bf7-bd4a9c2ab6e7",
                    routeValues);

                let url: string = verData.requestUrl;
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
    */
    public async queryExtensions(
        extensionQuery: GalleryInterfaces.ExtensionQuery,
        accountToken?: string
        ): Promise<GalleryInterfaces.ExtensionQueryResult> {

        return new Promise<GalleryInterfaces.ExtensionQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                accountToken: accountToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "eb9d5ee1-6d43-456b-b80e-8a96fbc014b6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

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
    */
    public async createExtension(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues);

                let url: string = verData.requestUrl;
                
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
                    "3.2-preview.2",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
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
                    "3.2-preview.2",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
    */
    public async updateExtensionById(
        extensionId: string
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.replace<GalleryInterfaces.PublishedExtension>(url, options);

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
    */
    public async createExtensionWithPublisher(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues);

                let url: string = verData.requestUrl;
                
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
                    "3.2-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
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
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} version
    * @param {GalleryInterfaces.ExtensionQueryFlags} flags
    * @param {string} accountToken
    */
    public async getExtension(
        publisherName: string,
        extensionName: string,
        version?: string,
        flags?: GalleryInterfaces.ExtensionQueryFlags,
        accountToken?: string
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
    * @param {NodeJS.ReadableStream} contentStream - Content to upload
    * @param {string} publisherName
    * @param {string} extensionName
    */
    public async updateExtension(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        publisherName: string,
        extensionName: string
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues);

                let url: string = verData.requestUrl;
                
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
                    "3.2-preview.2",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.PublishedExtension>;
                res = await this.rest.update<GalleryInterfaces.PublishedExtension>(url, options);

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
                    "3.2-preview.1",
                    "gallery",
                    "05e8a5e1-8c59-4c2c-8856-0ff087d1a844",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} version
    * @param {string} accountToken
    * @param {boolean} acceptDefault
    */
    public async getPackage(
        publisherName: string,
        extensionName: string,
        version: string,
        accountToken?: string,
        acceptDefault?: boolean
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "7cb576f8-1cae-4c4b-b7b1-e4af5759e965",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
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
    */
    public async getAssetWithToken(
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        assetToken?: string,
        accountToken?: string,
        acceptDefault?: boolean
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "364415a1-0077-4a41-a7a0-06edd4497492",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
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
                    "3.2-preview.1",
                    "gallery",
                    "2ad6ee0a-b53f-4034-9d1d-d009fda1212e",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
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
                    "3.2-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * Returns a list of questions with their responses associated with an extension.
    * 
    * @param {string} publisherName - Name of the publisher who published the extension.
    * @param {string} extensionName - Name of the extension.
    * @param {number} count - Number of questions to retrieve (defaults to 10).
    * @param {number} page - Page number from which set of questions are to be retrieved.
    */
    public async getQuestions(
        publisherName: string,
        extensionName: string,
        count?: number,
        page?: number
        ): Promise<GalleryInterfaces.QuestionsResult> {

        return new Promise<GalleryInterfaces.QuestionsResult>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                count: count,
                page: page,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "c010d03d-812c-4ade-ae07-c1862475eda5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "784910cd-254a-494d-898b-0728549b2f10",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "6d1d9741-eca8-4701-a3a5-235afc82dfa4",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "6d1d9741-eca8-4701-a3a5-235afc82dfa4",
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
                    "3.2-preview.1",
                    "gallery",
                    "6d1d9741-eca8-4701-a3a5-235afc82dfa4",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "7f8ae5e0-46b0-438f-b2e8-13e8513517bd",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "7f8ae5e0-46b0-438f-b2e8-13e8513517bd",
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
                    "3.2-preview.1",
                    "gallery",
                    "7f8ae5e0-46b0-438f-b2e8-13e8513517bd",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * @param {number} days - Last n days report
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
                    "3.2-preview.1",
                    "gallery",
                    "79e0c74f-157f-437e-845f-74fbb4121d4c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "5b3f819f-f247-42ad-8c00-dd9ab9ab246d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "b7b44e21-209e-48f0-ae78-04727fc37d77",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * @param {string} pubName - Name of the pubilsher who published the extension
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
                    "3.2-preview.1",
                    "gallery",
                    "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3",
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
    * Updates or Flags a review
    * 
    * @param {GalleryInterfaces.ReviewPatch} reviewPatch - ReviewPatch object which contains the changes to be applied to the review
    * @param {string} pubName - Name of the pubilsher who published the extension
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
                    "3.2-preview.1",
                    "gallery",
                    "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "476531a3-7024-4516-a76a-ed64d3008ad6",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "9b75ece3-7960-401c-848b-148ac01ca350",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "9b75ece3-7960-401c-848b-148ac01ca350",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "92ed5cf4-c38b-465a-9059-2f2fb7c624b5",
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
                    "3.2-preview.1",
                    "gallery",
                    "92ed5cf4-c38b-465a-9059-2f2fb7c624b5",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "a0ea3204-11e9-422d-a9ca-45851cc41400",
                    routeValues);

                let url: string = verData.requestUrl;
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
    */
    public async getExtensionDailyStats(
        publisherName: string,
        extensionName: string,
        days?: number,
        aggregate?: GalleryInterfaces.ExtensionStatsAggregateType
        ): Promise<GalleryInterfaces.ExtensionDailyStats> {

        return new Promise<GalleryInterfaces.ExtensionDailyStats>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                days: days,
                aggregate: aggregate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "ae06047e-51c5-4fb4-ab65-7be488544416",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "gallery",
                    "4fa7adb6-ca65-4075-a232-5f28323288ea",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} version
    * @param {string} statType
    */
    public async incrementExtensionDailyStat(
        publisherName: string,
        extensionName: string,
        version: string,
        statType: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version
            };

            let queryValues: any = {
                statType: statType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "gallery",
                    "4fa7adb6-ca65-4075-a232-5f28323288ea",
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

}
