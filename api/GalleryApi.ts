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
import GalleryInterfaces = require("./interfaces/GalleryInterfaces");

export interface IGalleryApi extends basem.ClientApiBase {
    shareExtensionById(extensionId: string, accountName: string): Q.Promise<void>;
    unshareExtensionById(extensionId: string, accountName: string): Q.Promise<void>;
    shareExtension(publisherName: string, extensionName: string, accountName: string): Q.Promise<void>;
    unshareExtension(publisherName: string, extensionName: string, accountName: string): Q.Promise<void>;
    getAcquisitionOptions(itemId: string, installationTarget: string, testCommerce?: boolean, isFreeOrTrialInstall?: boolean): Q.Promise<GalleryInterfaces.AcquisitionOptions>;
    requestAcquisition(acquisitionRequest: GalleryInterfaces.ExtensionAcquisitionRequest): Q.Promise<GalleryInterfaces.ExtensionAcquisitionRequest>;
    getAssetByName(publisherName: string, extensionName: string, version: string, assetType: string, accountToken?: string, acceptDefault?: boolean): Q.Promise<NodeJS.ReadableStream>;
    getAsset(extensionId: string, version: string, assetType: string, accountToken?: string, acceptDefault?: boolean): Q.Promise<NodeJS.ReadableStream>;
    getAssetAuthenticated(publisherName: string, extensionName: string, version: string, assetType: string, accountToken?: string): Q.Promise<NodeJS.ReadableStream>;
    associateAzurePublisher(publisherName: string, azurePublisherId: string): Q.Promise<GalleryInterfaces.AzurePublisher>;
    queryAssociatedAzurePublisher(publisherName: string): Q.Promise<GalleryInterfaces.AzurePublisher>;
    getCategories(languages?: string): Q.Promise<string[]>;
    getCertificate(publisherName: string, extensionName: string, version?: string): Q.Promise<NodeJS.ReadableStream>;
    queryExtensions(extensionQuery: GalleryInterfaces.ExtensionQuery, accountToken?: string): Q.Promise<GalleryInterfaces.ExtensionQueryResult>;
    createExtension(extensionPackage: GalleryInterfaces.ExtensionPackage): Q.Promise<GalleryInterfaces.PublishedExtension>;
    deleteExtensionById(extensionId: string, version?: string): Q.Promise<void>;
    getExtensionById(extensionId: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags): Q.Promise<GalleryInterfaces.PublishedExtension>;
    updateExtensionById(extensionPackage: GalleryInterfaces.ExtensionPackage, extensionId: string): Q.Promise<GalleryInterfaces.PublishedExtension>;
    createExtensionWithPublisher(extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string): Q.Promise<GalleryInterfaces.PublishedExtension>;
    deleteExtension(publisherName: string, extensionName: string, version?: string): Q.Promise<void>;
    getExtension(publisherName: string, extensionName: string, version?: string, flags?: GalleryInterfaces.ExtensionQueryFlags, accountToken?: string): Q.Promise<GalleryInterfaces.PublishedExtension>;
    updateExtension(extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, extensionName: string): Q.Promise<GalleryInterfaces.PublishedExtension>;
    extensionValidator(azureRestApiRequestModel: GalleryInterfaces.AzureRestApiRequestModel): Q.Promise<void>;
    getPackage(publisherName: string, extensionName: string, version: string, accountToken?: string, acceptDefault?: boolean): Q.Promise<NodeJS.ReadableStream>;
    getAssetWithToken(publisherName: string, extensionName: string, version: string, assetType: string, assetToken?: string, accountToken?: string, acceptDefault?: boolean): Q.Promise<NodeJS.ReadableStream>;
    queryPublishers(publisherQuery: GalleryInterfaces.PublisherQuery): Q.Promise<GalleryInterfaces.PublisherQueryResult>;
    createPublisher(publisher: GalleryInterfaces.Publisher): Q.Promise<GalleryInterfaces.Publisher>;
    deletePublisher(publisherName: string): Q.Promise<void>;
    getPublisher(publisherName: string, flags?: number): Q.Promise<GalleryInterfaces.Publisher>;
    updatePublisher(publisher: GalleryInterfaces.Publisher, publisherName: string): Q.Promise<GalleryInterfaces.Publisher>;
    getReviews(publisherName: string, extensionName: string, count?: number, filterOptions?: GalleryInterfaces.ReviewFilterOptions, beforeDate?: Date, afterDate?: Date): Q.Promise<GalleryInterfaces.ReviewsResult>;
    createReview(review: GalleryInterfaces.Review, pubName: string, extName: string): Q.Promise<GalleryInterfaces.Review>;
    deleteReview(pubName: string, extName: string, reviewId: number): Q.Promise<void>;
    updateReview(reviewPatch: GalleryInterfaces.ReviewPatch, pubName: string, extName: string, reviewId: number): Q.Promise<GalleryInterfaces.ReviewPatch>;
    createCategory(category: GalleryInterfaces.ExtensionCategory): Q.Promise<GalleryInterfaces.ExtensionCategory>;
    generateKey(keyType: string, expireCurrentSeconds?: number): Q.Promise<void>;
    getSigningKey(keyType: string): Q.Promise<string>;
    updateExtensionStatistics(extensionStatisticsUpdate: GalleryInterfaces.ExtensionStatisticUpdate, publisherName: string, extensionName: string): Q.Promise<void>;
}

export class GalleryApi extends basem.ClientApiBase implements IGalleryApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Gallery-api');
    }

    /**
     * @param {string} extensionId
     * @param {string} accountName
     */
    public shareExtensionById(
        extensionId: string,
        accountName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            extensionId: extensionId,
            accountName: accountName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "1f19631b-a0b4-4a03-89c2-d79785d24360", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} extensionId
     * @param {string} accountName
     */
    public unshareExtensionById(
        extensionId: string,
        accountName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            extensionId: extensionId,
            accountName: accountName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "1f19631b-a0b4-4a03-89c2-d79785d24360", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} accountName
     */
    public shareExtension(
        publisherName: string,
        extensionName: string,
        accountName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            accountName: accountName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "a1e66d8f-f5de-4d16-8309-91a4e015ee46", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} accountName
     */
    public unshareExtension(
        publisherName: string,
        extensionName: string,
        accountName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            accountName: accountName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "a1e66d8f-f5de-4d16-8309-91a4e015ee46", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} itemId
     * @param {string} installationTarget
     * @param {boolean} testCommerce
     * @param {boolean} isFreeOrTrialInstall
     */
    public getAcquisitionOptions(
        itemId: string,
        installationTarget: string,
        testCommerce?: boolean,
        isFreeOrTrialInstall?: boolean
        ): Q.Promise<GalleryInterfaces.AcquisitionOptions> {
    
        var deferred = Q.defer<GalleryInterfaces.AcquisitionOptions>();

        var onResult = (err: any, statusCode: number, acquisitionoption: GalleryInterfaces.AcquisitionOptions) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(acquisitionoption);
            }
        };

        var routeValues: any = {
            itemId: itemId
        };

        var queryValues: any = {
            installationTarget: installationTarget,
            testCommerce: testCommerce,
            isFreeOrTrialInstall: isFreeOrTrialInstall,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "9d0a0105-075e-4760-aa15-8bcf54d1bd7d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.AcquisitionOptions, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.AcquisitionOptions>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.ExtensionAcquisitionRequest} acquisitionRequest
     */
    public requestAcquisition(
        acquisitionRequest: GalleryInterfaces.ExtensionAcquisitionRequest
        ): Q.Promise<GalleryInterfaces.ExtensionAcquisitionRequest> {
    
        var deferred = Q.defer<GalleryInterfaces.ExtensionAcquisitionRequest>();

        var onResult = (err: any, statusCode: number, acquisitionrequest: GalleryInterfaces.ExtensionAcquisitionRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(acquisitionrequest);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "3adb1f2d-e328-446e-be73-9f6d98071c45", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionAcquisitionRequest, responseTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionAcquisitionRequest, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, acquisitionRequest, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.ExtensionAcquisitionRequest>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {string} assetType
     * @param {string} accountToken
     * @param {boolean} acceptDefault
     */
    public getAssetByName(
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        accountToken?: string,
        acceptDefault?: boolean
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, assetbyname: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(assetbyname);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            version: version,
            assetType: assetType
        };

        var queryValues: any = {
            accountToken: accountToken,
            acceptDefault: acceptDefault,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "7529171f-a002-4180-93ba-685f358a0482", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {string} extensionId
     * @param {string} version
     * @param {string} assetType
     * @param {string} accountToken
     * @param {boolean} acceptDefault
     */
    public getAsset(
        extensionId: string,
        version: string,
        assetType: string,
        accountToken?: string,
        acceptDefault?: boolean
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, asset: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(asset);
            }
        };

        var routeValues: any = {
            extensionId: extensionId,
            version: version,
            assetType: assetType
        };

        var queryValues: any = {
            accountToken: accountToken,
            acceptDefault: acceptDefault,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "5d545f3d-ef47-488b-8be3-f5ee1517856c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {string} assetType
     * @param {string} accountToken
     */
    public getAssetAuthenticated(
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        accountToken?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, authenticatedasset: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(authenticatedasset);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            version: version,
            assetType: assetType
        };

        var queryValues: any = {
            accountToken: accountToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "506aff36-2622-4f70-8063-77cce6366d20", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {string} azurePublisherId
     */
    public associateAzurePublisher(
        publisherName: string,
        azurePublisherId: string
        ): Q.Promise<GalleryInterfaces.AzurePublisher> {
    
        var deferred = Q.defer<GalleryInterfaces.AzurePublisher>();

        var onResult = (err: any, statusCode: number, azurepublisher: GalleryInterfaces.AzurePublisher) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(azurepublisher);
            }
        };

        var routeValues: any = {
            publisherName: publisherName
        };

        var queryValues: any = {
            azurePublisherId: azurePublisherId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "efd202a6-9d87-4ebc-9229-d2b8ae2fdb6d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.AzurePublisher>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     */
    public queryAssociatedAzurePublisher(
        publisherName: string
        ): Q.Promise<GalleryInterfaces.AzurePublisher> {
    
        var deferred = Q.defer<GalleryInterfaces.AzurePublisher>();

        var onResult = (err: any, statusCode: number, azurepublisher: GalleryInterfaces.AzurePublisher) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(azurepublisher);
            }
        };

        var routeValues: any = {
            publisherName: publisherName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "efd202a6-9d87-4ebc-9229-d2b8ae2fdb6d", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.AzurePublisher>>deferred.promise;
    }

    /**
     * @param {string} languages
     */
    public getCategories(
        languages?: string
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        var onResult = (err: any, statusCode: number, categories: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(categories);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            languages: languages,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "e0a5a71e-3ac3-43a0-ae7d-0bb5c3046a2a", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     */
    public getCertificate(
        publisherName: string,
        extensionName: string,
        version?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, certificate: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(certificate);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            version: version
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "e905ad6a-3f1f-4d08-9f6d-7d357ff8b7d0", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.ExtensionQuery} extensionQuery
     * @param {string} accountToken
     */
    public queryExtensions(
        extensionQuery: GalleryInterfaces.ExtensionQuery,
        accountToken?: string
        ): Q.Promise<GalleryInterfaces.ExtensionQueryResult> {
    
        var deferred = Q.defer<GalleryInterfaces.ExtensionQueryResult>();

        var onResult = (err: any, statusCode: number, extensionquery: GalleryInterfaces.ExtensionQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extensionquery);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            accountToken: accountToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "eb9d5ee1-6d43-456b-b80e-8a96fbc014b6", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionQuery, responseTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionQueryResult, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, extensionQuery, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.ExtensionQueryResult>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
     */
    public createExtension(
        extensionPackage: GalleryInterfaces.ExtensionPackage
        ): Q.Promise<GalleryInterfaces.PublishedExtension> {
    
        var deferred = Q.defer<GalleryInterfaces.PublishedExtension>();

        var onResult = (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "a41192c8-9525-4b58-bc86-179fa549d80d", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, extensionPackage, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.PublishedExtension>>deferred.promise;
    }

    /**
     * @param {string} extensionId
     * @param {string} version
     */
    public deleteExtensionById(
        extensionId: string,
        version?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            extensionId: extensionId
        };

        var queryValues: any = {
            version: version,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "a41192c8-9525-4b58-bc86-179fa549d80d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} extensionId
     * @param {string} version
     * @param {GalleryInterfaces.ExtensionQueryFlags} flags
     */
    public getExtensionById(
        extensionId: string,
        version?: string,
        flags?: GalleryInterfaces.ExtensionQueryFlags
        ): Q.Promise<GalleryInterfaces.PublishedExtension> {
    
        var deferred = Q.defer<GalleryInterfaces.PublishedExtension>();

        var onResult = (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
        };

        var routeValues: any = {
            extensionId: extensionId
        };

        var queryValues: any = {
            version: version,
            flags: flags,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "a41192c8-9525-4b58-bc86-179fa549d80d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.PublishedExtension>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
     * @param {string} extensionId
     */
    public updateExtensionById(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        extensionId: string
        ): Q.Promise<GalleryInterfaces.PublishedExtension> {
    
        var deferred = Q.defer<GalleryInterfaces.PublishedExtension>();

        var onResult = (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
        };

        var routeValues: any = {
            extensionId: extensionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "a41192c8-9525-4b58-bc86-179fa549d80d", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, extensionPackage, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.PublishedExtension>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
     * @param {string} publisherName
     */
    public createExtensionWithPublisher(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        publisherName: string
        ): Q.Promise<GalleryInterfaces.PublishedExtension> {
    
        var deferred = Q.defer<GalleryInterfaces.PublishedExtension>();

        var onResult = (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
        };

        var routeValues: any = {
            publisherName: publisherName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "e11ea35a-16fe-4b80-ab11-c4cab88a0966", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, extensionPackage, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.PublishedExtension>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     */
    public deleteExtension(
        publisherName: string,
        extensionName: string,
        version?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        var queryValues: any = {
            version: version,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "e11ea35a-16fe-4b80-ab11-c4cab88a0966", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {GalleryInterfaces.ExtensionQueryFlags} flags
     * @param {string} accountToken
     */
    public getExtension(
        publisherName: string,
        extensionName: string,
        version?: string,
        flags?: GalleryInterfaces.ExtensionQueryFlags,
        accountToken?: string
        ): Q.Promise<GalleryInterfaces.PublishedExtension> {
    
        var deferred = Q.defer<GalleryInterfaces.PublishedExtension>();

        var onResult = (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        var queryValues: any = {
            version: version,
            flags: flags,
            accountToken: accountToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "e11ea35a-16fe-4b80-ab11-c4cab88a0966", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.PublishedExtension>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
     * @param {string} publisherName
     * @param {string} extensionName
     */
    public updateExtension(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        publisherName: string,
        extensionName: string
        ): Q.Promise<GalleryInterfaces.PublishedExtension> {
    
        var deferred = Q.defer<GalleryInterfaces.PublishedExtension>();

        var onResult = (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "e11ea35a-16fe-4b80-ab11-c4cab88a0966", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, extensionPackage, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.PublishedExtension>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.AzureRestApiRequestModel} azureRestApiRequestModel
     */
    public extensionValidator(
        azureRestApiRequestModel: GalleryInterfaces.AzureRestApiRequestModel
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "05e8a5e1-8c59-4c2c-8856-0ff087d1a844", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, azureRestApiRequestModel, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {string} accountToken
     * @param {boolean} acceptDefault
     */
    public getPackage(
        publisherName: string,
        extensionName: string,
        version: string,
        accountToken?: string,
        acceptDefault?: boolean
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, _package: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(_package);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            version: version
        };

        var queryValues: any = {
            accountToken: accountToken,
            acceptDefault: acceptDefault,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "7cb576f8-1cae-4c4b-b7b1-e4af5759e965", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
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
    public getAssetWithToken(
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        assetToken?: string,
        accountToken?: string,
        acceptDefault?: boolean
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, privateasset: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(privateasset);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            version: version,
            assetType: assetType,
            assetToken: assetToken
        };

        var queryValues: any = {
            accountToken: accountToken,
            acceptDefault: acceptDefault,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "364415a1-0077-4a41-a7a0-06edd4497492", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.PublisherQuery} publisherQuery
     */
    public queryPublishers(
        publisherQuery: GalleryInterfaces.PublisherQuery
        ): Q.Promise<GalleryInterfaces.PublisherQueryResult> {
    
        var deferred = Q.defer<GalleryInterfaces.PublisherQueryResult>();

        var onResult = (err: any, statusCode: number, publisherquery: GalleryInterfaces.PublisherQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(publisherquery);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "2ad6ee0a-b53f-4034-9d1d-d009fda1212e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.PublisherQuery, responseTypeMetadata: GalleryInterfaces.TypeInfo.PublisherQueryResult, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, publisherQuery, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.PublisherQueryResult>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.Publisher} publisher
     */
    public createPublisher(
        publisher: GalleryInterfaces.Publisher
        ): Q.Promise<GalleryInterfaces.Publisher> {
    
        var deferred = Q.defer<GalleryInterfaces.Publisher>();

        var onResult = (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(publisher);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, publisher, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.Publisher>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     */
    public deletePublisher(
        publisherName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            publisherName: publisherName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} publisherName
     * @param {number} flags
     */
    public getPublisher(
        publisherName: string,
        flags?: number
        ): Q.Promise<GalleryInterfaces.Publisher> {
    
        var deferred = Q.defer<GalleryInterfaces.Publisher>();

        var onResult = (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(publisher);
            }
        };

        var routeValues: any = {
            publisherName: publisherName
        };

        var queryValues: any = {
            flags: flags,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.Publisher>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.Publisher} publisher
     * @param {string} publisherName
     */
    public updatePublisher(
        publisher: GalleryInterfaces.Publisher,
        publisherName: string
        ): Q.Promise<GalleryInterfaces.Publisher> {
    
        var deferred = Q.defer<GalleryInterfaces.Publisher>();

        var onResult = (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(publisher);
            }
        };

        var routeValues: any = {
            publisherName: publisherName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, publisher, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.Publisher>>deferred.promise;
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
    public getReviews(
        publisherName: string,
        extensionName: string,
        count?: number,
        filterOptions?: GalleryInterfaces.ReviewFilterOptions,
        beforeDate?: Date,
        afterDate?: Date
        ): Q.Promise<GalleryInterfaces.ReviewsResult> {
    
        var deferred = Q.defer<GalleryInterfaces.ReviewsResult>();

        var onResult = (err: any, statusCode: number, review: GalleryInterfaces.ReviewsResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(review);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        var queryValues: any = {
            count: count,
            filterOptions: filterOptions,
            beforeDate: beforeDate,
            afterDate: afterDate,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "5b3f819f-f247-42ad-8c00-dd9ab9ab246d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.ReviewsResult, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.ReviewsResult>>deferred.promise;
    }

    /**
     * Creates a new review for an extension
     * 
     * @param {GalleryInterfaces.Review} review - Review to be created for the extension
     * @param {string} pubName - Name of the publisher who published the extension
     * @param {string} extName - Name of the extension
     */
    public createReview(
        review: GalleryInterfaces.Review,
        pubName: string,
        extName: string
        ): Q.Promise<GalleryInterfaces.Review> {
    
        var deferred = Q.defer<GalleryInterfaces.Review>();

        var onResult = (err: any, statusCode: number, review: GalleryInterfaces.Review) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(review);
            }
        };

        var routeValues: any = {
            pubName: pubName,
            extName: extName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.Review, responseTypeMetadata: GalleryInterfaces.TypeInfo.Review, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, review, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.Review>>deferred.promise;
    }

    /**
     * Deletes a review
     * 
     * @param {string} pubName - Name of the pubilsher who published the extension
     * @param {string} extName - Name of the extension
     * @param {number} reviewId - Id of the review which needs to be updated
     */
    public deleteReview(
        pubName: string,
        extName: string,
        reviewId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            pubName: pubName,
            extName: extName,
            reviewId: reviewId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * Updates or Flags a review
     * 
     * @param {GalleryInterfaces.ReviewPatch} reviewPatch - ReviewPatch object which contains the changes to be applied to the review
     * @param {string} pubName - Name of the pubilsher who published the extension
     * @param {string} extName - Name of the extension
     * @param {number} reviewId - Id of the review which needs to be updated
     */
    public updateReview(
        reviewPatch: GalleryInterfaces.ReviewPatch,
        pubName: string,
        extName: string,
        reviewId: number
        ): Q.Promise<GalleryInterfaces.ReviewPatch> {
    
        var deferred = Q.defer<GalleryInterfaces.ReviewPatch>();

        var onResult = (err: any, statusCode: number, review: GalleryInterfaces.ReviewPatch) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(review);
            }
        };

        var routeValues: any = {
            pubName: pubName,
            extName: extName,
            reviewId: reviewId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "e6e85b9d-aa70-40e6-aa28-d0fbf40b91a3", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ReviewPatch, responseTypeMetadata: GalleryInterfaces.TypeInfo.ReviewPatch, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, reviewPatch, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.ReviewPatch>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.ExtensionCategory} category
     */
    public createCategory(
        category: GalleryInterfaces.ExtensionCategory
        ): Q.Promise<GalleryInterfaces.ExtensionCategory> {
    
        var deferred = Q.defer<GalleryInterfaces.ExtensionCategory>();

        var onResult = (err: any, statusCode: number, securedCategorie: GalleryInterfaces.ExtensionCategory) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(securedCategorie);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "476531a3-7024-4516-a76a-ed64d3008ad6", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, category, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GalleryInterfaces.ExtensionCategory>>deferred.promise;
    }

    /**
     * @param {string} keyType
     * @param {number} expireCurrentSeconds
     */
    public generateKey(
        keyType: string,
        expireCurrentSeconds?: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            keyType: keyType
        };

        var queryValues: any = {
            expireCurrentSeconds: expireCurrentSeconds,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "92ed5cf4-c38b-465a-9059-2f2fb7c624b5", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} keyType
     */
    public getSigningKey(
        keyType: string
        ): Q.Promise<string> {
    
        var deferred = Q.defer<string>();

        var onResult = (err: any, statusCode: number, signingkey: string) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(signingkey);
            }
        };

        var routeValues: any = {
            keyType: keyType
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "92ed5cf4-c38b-465a-9059-2f2fb7c624b5", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<string>>deferred.promise;
    }

    /**
     * @param {GalleryInterfaces.ExtensionStatisticUpdate} extensionStatisticsUpdate
     * @param {string} publisherName
     * @param {string} extensionName
     */
    public updateExtensionStatistics(
        extensionStatisticsUpdate: GalleryInterfaces.ExtensionStatisticUpdate,
        publisherName: string,
        extensionName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "gallery", "a0ea3204-11e9-422d-a9ca-45851cc41400", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionStatisticUpdate, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, extensionStatisticsUpdate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

}
