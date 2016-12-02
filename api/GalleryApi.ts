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
import GalleryInterfaces = require("./interfaces/GalleryInterfaces");

export interface IGalleryApi extends basem.ClientApiBase {
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
    getCertificate(publisherName: string, extensionName: string, version?: string): Promise<NodeJS.ReadableStream>;
    queryExtensions(extensionQuery: GalleryInterfaces.ExtensionQuery, accountToken?: string): Promise<GalleryInterfaces.ExtensionQueryResult>;
    createExtension(extensionPackage: GalleryInterfaces.ExtensionPackage): Promise<GalleryInterfaces.PublishedExtension>;
    deleteExtensionById(extensionId: string, version?: string): Promise<void>;
    getExtensionById(extensionId: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtensionById(extensionPackage: GalleryInterfaces.ExtensionPackage, extensionId: string): Promise<GalleryInterfaces.PublishedExtension>;
    createExtensionWithPublisher(extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string): Promise<GalleryInterfaces.PublishedExtension>;
    deleteExtension(publisherName: string, extensionName: string, version?: string): Promise<void>;
    getExtension(publisherName: string, extensionName: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags, accountToken?: string): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtension(extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, extensionName: string): Promise<GalleryInterfaces.PublishedExtension>;
    updateExtensionProperties(publisherName: string, extensionName: string, flags: GalleryInterfaces.PublishedExtensionFlags): Promise<GalleryInterfaces.PublishedExtension>;
    extensionValidator(azureRestApiRequestModel: GalleryInterfaces.AzureRestApiRequestModel): Promise<void>;
    getAssetWithToken(publisherName: string, extensionName: string, version: string, assetType: string, assetToken?: string, accountToken?: string, acceptDefault?: boolean): Promise<NodeJS.ReadableStream>;
    queryPublishers(publisherQuery: GalleryInterfaces.PublisherQuery): Promise<GalleryInterfaces.PublisherQueryResult>;
    createPublisher(publisher: GalleryInterfaces.Publisher): Promise<GalleryInterfaces.Publisher>;
    deletePublisher(publisherName: string): Promise<void>;
    getPublisher(publisherName: string, flags?: number): Promise<GalleryInterfaces.Publisher>;
    updatePublisher(publisher: GalleryInterfaces.Publisher, publisherName: string): Promise<GalleryInterfaces.Publisher>;
    getReviews(publisherName: string, extensionName: string, count?: number, filterOptions?: GalleryInterfaces.ReviewFilterOptions, beforeDate?: Date, afterDate?: Date): Promise<GalleryInterfaces.ReviewsResult>;
    createReview(review: GalleryInterfaces.Review, pubName: string, extName: string): Promise<GalleryInterfaces.Review>;
    deleteReview(pubName: string, extName: string, reviewId: number): Promise<void>;
    updateReview(reviewPatch: GalleryInterfaces.ReviewPatch, pubName: string, extName: string, reviewId: number): Promise<GalleryInterfaces.ReviewPatch>;
    createCategory(category: GalleryInterfaces.ExtensionCategory): Promise<GalleryInterfaces.ExtensionCategory>;
    getGalleryUserSettings(userScope: string, key?: string): Promise<{ [key: string] : any; }>;
    setGalleryUserSettings(entries: { [key: string] : any; }, userScope: string): Promise<void>;
    generateKey(keyType: string, expireCurrentSeconds?: number): Promise<void>;
    getSigningKey(keyType: string): Promise<string>;
    updateExtensionStatistics(extensionStatisticsUpdate: GalleryInterfaces.ExtensionStatisticUpdate, publisherName: string, extensionName: string): Promise<void>;
}

export class GalleryApi extends basem.ClientApiBase implements IGalleryApi {
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
                    "3.1-preview.1",
                    "gallery",
                    "1f19631b-a0b4-4a03-89c2-d79785d24360",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, null, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "1f19631b-a0b4-4a03-89c2-d79785d24360",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "a1e66d8f-f5de-4d16-8309-91a4e015ee46",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, null, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "a1e66d8f-f5de-4d16-8309-91a4e015ee46",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "9d0a0105-075e-4760-aa15-8bcf54d1bd7d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.AcquisitionOptions, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "3adb1f2d-e328-446e-be73-9f6d98071c45",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, acquisitionRequest, null);
                let serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionAcquisitionRequest, responseTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionAcquisitionRequest, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
            let onResult = (err: any, statusCode: number, assetbyname: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(assetbyname);
                }
            };

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
                    "3.1-preview.1",
                    "gallery",
                    "7529171f-a002-4180-93ba-685f358a0482",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
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
            let onResult = (err: any, statusCode: number, asset: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(asset);
                }
            };

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
                    "3.1-preview.1",
                    "gallery",
                    "5d545f3d-ef47-488b-8be3-f5ee1517856c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
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
            let onResult = (err: any, statusCode: number, authenticatedasset: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(authenticatedasset);
                }
            };

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
                    "3.1-preview.1",
                    "gallery",
                    "506aff36-2622-4f70-8063-77cce6366d20",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
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
                    "3.1-preview.1",
                    "gallery",
                    "efd202a6-9d87-4ebc-9229-d2b8ae2fdb6d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, null, null);
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
                    "3.1-preview.1",
                    "gallery",
                    "efd202a6-9d87-4ebc-9229-d2b8ae2fdb6d",
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
                    "3.1-preview.1",
                    "gallery",
                    "e0a5a71e-3ac3-43a0-ae7d-0bb5c3046a2a",
                    routeValues,
                    queryValues);

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
                    "3.1-preview.1",
                    "gallery",
                    "75d3c04d-84d2-4973-acd2-22627587dabc",
                    routeValues,
                    queryValues);

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
            let onResult = (err: any, statusCode: number, certificate: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(certificate);
                }
            };

            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "gallery",
                    "e905ad6a-3f1f-4d08-9f6d-7d357ff8b7d0",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
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
                    "3.1-preview.1",
                    "gallery",
                    "eb9d5ee1-6d43-456b-b80e-8a96fbc014b6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, extensionQuery, null);
                let serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionQuery, responseTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionQueryResult, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
    */
    public async createExtension(
        extensionPackage: GalleryInterfaces.ExtensionPackage
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, extensionPackage, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
    * @param {string} extensionId
    */
    public async updateExtensionById(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        extensionId: string
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            
            let routeValues: any = {
                extensionId: extensionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "gallery",
                    "a41192c8-9525-4b58-bc86-179fa549d80d",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, extensionPackage, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
    * @param {string} publisherName
    */
    public async createExtensionWithPublisher(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        publisherName: string
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            
            let routeValues: any = {
                publisherName: publisherName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, extensionPackage, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
    * @param {string} publisherName
    * @param {string} extensionName
    */
    public async updateExtension(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        publisherName: string,
        extensionName: string
        ): Promise<GalleryInterfaces.PublishedExtension> {

        return new Promise<GalleryInterfaces.PublishedExtension>(async (resolve, reject) => {
            
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, extensionPackage, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "e11ea35a-16fe-4b80-ab11-c4cab88a0966",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, null, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "05e8a5e1-8c59-4c2c-8856-0ff087d1a844",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, azureRestApiRequestModel, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
            let onResult = (err: any, statusCode: number, privateasset: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(privateasset);
                }
            };

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
                    "3.1-preview.1",
                    "gallery",
                    "364415a1-0077-4a41-a7a0-06edd4497492",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
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
                    "3.1-preview.1",
                    "gallery",
                    "2ad6ee0a-b53f-4034-9d1d-d009fda1212e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, publisherQuery, null);
                let serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.PublisherQuery, responseTypeMetadata: GalleryInterfaces.TypeInfo.PublisherQueryResult, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, publisher, null);
                let serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, publisher, null);
                let serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "5b3f819f-f247-42ad-8c00-dd9ab9ab246d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.ReviewsResult, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, review, null);
                let serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.Review, responseTypeMetadata: GalleryInterfaces.TypeInfo.Review, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, reviewPatch, null);
                let serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ReviewPatch, responseTypeMetadata: GalleryInterfaces.TypeInfo.ReviewPatch, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "476531a3-7024-4516-a76a-ed64d3008ad6",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, category, null);
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
                    "3.1-preview.1",
                    "gallery",
                    "9b75ece3-7960-401c-848b-148ac01ca350",
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
                    "3.1-preview.1",
                    "gallery",
                    "9b75ece3-7960-401c-848b-148ac01ca350",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, entries, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "92ed5cf4-c38b-465a-9059-2f2fb7c624b5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, null, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.1",
                    "gallery",
                    "92ed5cf4-c38b-465a-9059-2f2fb7c624b5",
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
                    "3.1-preview.1",
                    "gallery",
                    "a0ea3204-11e9-422d-a9ca-45851cc41400",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, extensionStatisticsUpdate, null);
                let serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionStatisticUpdate, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
