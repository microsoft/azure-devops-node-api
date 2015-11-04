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
import GalleryInterfaces = require("./interfaces/GalleryInterfaces");

export interface IGalleryApi extends basem.ClientApiBase {
    shareExtensionById(extensionId: string, accountName: string, onResult: (err: any, statusCode: number) => void): void;
    unshareExtensionById(extensionId: string, accountName: string, onResult: (err: any, statusCode: number) => void): void;
    shareExtension(publisherName: string, extensionName: string, accountName: string, onResult: (err: any, statusCode: number) => void): void;
    unshareExtension(publisherName: string, extensionName: string, accountName: string, onResult: (err: any, statusCode: number) => void): void;
    getAcquisitionOptions(itemId: string, installationTarget: string, onResult: (err: any, statusCode: number, acquisitionoption: GalleryInterfaces.AcquisitionOptions) => void): void;
    requestAcquisition(acquisitionRequest: GalleryInterfaces.ExtensionAcquisitionRequest, onResult: (err: any, statusCode: number) => void): void;
    getAssetByName(publisherName: string, extensionName: string, version: string, assetType: string, accountToken: string, acceptDefault: boolean, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getAsset(extensionId: string, version: string, assetType: string, accountToken: string, acceptDefault: boolean, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getCategories(languages: string, onResult: (err: any, statusCode: number, categories: string[]) => void): void;
    getCertificate(publisherName: string, extensionName: string, version: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    queryExtensions(extensionQuery: GalleryInterfaces.ExtensionQuery, accountToken: string, onResult: (err: any, statusCode: number, extensionquery: GalleryInterfaces.ExtensionQueryResult) => void): void;
    createExtension(extensionPackage: GalleryInterfaces.ExtensionPackage, onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void): void;
    deleteExtensionById(extensionId: string, version: string, onResult: (err: any, statusCode: number) => void): void;
    getExtensionById(extensionId: string, version: string, flags: GalleryInterfaces.ExtensionQueryFlags, onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void): void;
    updateExtensionById(extensionPackage: GalleryInterfaces.ExtensionPackage, extensionId: string, onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void): void;
    createExtensionWithPublisher(extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void): void;
    deleteExtension(publisherName: string, extensionName: string, version: string, onResult: (err: any, statusCode: number) => void): void;
    getExtension(publisherName: string, extensionName: string, version: string, flags: GalleryInterfaces.ExtensionQueryFlags, accountToken: string, onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void): void;
    updateExtension(extensionPackage: GalleryInterfaces.ExtensionPackage, publisherName: string, extensionName: string, onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void): void;
    getAssetWithToken(publisherName: string, extensionName: string, version: string, assetType: string, assetToken: string, accountToken: string, acceptDefault: boolean, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    queryPublishers(publisherQuery: GalleryInterfaces.PublisherQuery, onResult: (err: any, statusCode: number, publisherquery: GalleryInterfaces.PublisherQueryResult) => void): void;
    createPublisher(publisher: GalleryInterfaces.Publisher, onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void): void;
    deletePublisher(publisherName: string, onResult: (err: any, statusCode: number) => void): void;
    getPublisher(publisherName: string, flags: number, onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void): void;
    updatePublisher(publisher: GalleryInterfaces.Publisher, publisherName: string, onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void): void;
    generateKey(keyType: string, expireCurrentSeconds: number, onResult: (err: any, statusCode: number) => void): void;
    getSigningKey(keyType: string, onResult: (err: any, statusCode: number, signingkey: string) => void): void;
}

export interface IQGalleryApi extends basem.QClientApiBase {
    shareExtensionById(extensionId: string, accountName: string): Q.Promise<void>;
    unshareExtensionById(extensionId: string, accountName: string): Q.Promise<void>;
    shareExtension(publisherName: string, extensionName: string, accountName: string): Q.Promise<void>;
    unshareExtension(publisherName: string, extensionName: string, accountName: string): Q.Promise<void>;
    getAcquisitionOptions(itemId: string, installationTarget: string): Q.Promise<GalleryInterfaces.AcquisitionOptions>;
    requestAcquisition(acquisitionRequest: GalleryInterfaces.ExtensionAcquisitionRequest): Q.Promise<void>;
    getAssetByName(publisherName: string, extensionName: string, version: string, assetType: string, accountToken?: string, acceptDefault?: boolean): Q.Promise<NodeJS.ReadableStream>;
    getAsset(extensionId: string, version: string, assetType: string, accountToken?: string, acceptDefault?: boolean): Q.Promise<NodeJS.ReadableStream>;
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
    getAssetWithToken(publisherName: string, extensionName: string, version: string, assetType: string, assetToken?: string, accountToken?: string, acceptDefault?: boolean): Q.Promise<NodeJS.ReadableStream>;
    queryPublishers(publisherQuery: GalleryInterfaces.PublisherQuery): Q.Promise<GalleryInterfaces.PublisherQueryResult>;
    createPublisher(publisher: GalleryInterfaces.Publisher): Q.Promise<GalleryInterfaces.Publisher>;
    deletePublisher(publisherName: string): Q.Promise<void>;
    getPublisher(publisherName: string, flags?: number): Q.Promise<GalleryInterfaces.Publisher>;
    updatePublisher(publisher: GalleryInterfaces.Publisher, publisherName: string): Q.Promise<GalleryInterfaces.Publisher>;
    generateKey(keyType: string, expireCurrentSeconds?: number): Q.Promise<void>;
    getSigningKey(keyType: string): Q.Promise<string>;
}

export class GalleryApi extends basem.ClientApiBase implements IGalleryApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Gallery-api');
    }

    /**
     * @param {string} extensionId
     * @param {string} accountName
     * @param onResult callback function
     */
    public shareExtensionById(
        extensionId: string,
        accountName: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            extensionId: extensionId,
            accountName: accountName
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "1f19631b-a0b4-4a03-89c2-d79785d24360", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} extensionId
     * @param {string} accountName
     * @param onResult callback function
     */
    public unshareExtensionById(
        extensionId: string,
        accountName: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            extensionId: extensionId,
            accountName: accountName
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "1f19631b-a0b4-4a03-89c2-d79785d24360", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} accountName
     * @param onResult callback function
     */
    public shareExtension(
        publisherName: string,
        extensionName: string,
        accountName: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            accountName: accountName
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "a1e66d8f-f5de-4d16-8309-91a4e015ee46", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} accountName
     * @param onResult callback function
     */
    public unshareExtension(
        publisherName: string,
        extensionName: string,
        accountName: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            accountName: accountName
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "a1e66d8f-f5de-4d16-8309-91a4e015ee46", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} itemId
     * @param {string} installationTarget
     * @param onResult callback function with the resulting GalleryInterfaces.AcquisitionOptions
     */
    public getAcquisitionOptions(
        itemId: string,
        installationTarget: string,
        onResult: (err: any, statusCode: number, acquisitionoption: GalleryInterfaces.AcquisitionOptions) => void
        ): void {

        var routeValues: any = {
            itemId: itemId
        };

        var queryValues: any = {
            installationTarget: installationTarget,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "9d0a0105-075e-4760-aa15-8bcf54d1bd7d", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.AcquisitionOptions, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionAcquisitionRequest} acquisitionRequest
     * @param onResult callback function
     */
    public requestAcquisition(
        acquisitionRequest: GalleryInterfaces.ExtensionAcquisitionRequest,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "3adb1f2d-e328-446e-be73-9f6d98071c45", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionAcquisitionRequest, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, acquisitionRequest, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {string} assetType
     * @param {string} accountToken
     * @param {boolean} acceptDefault
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getAssetByName(
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        accountToken: string,
        acceptDefault: boolean,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

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
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "7529171f-a002-4180-93ba-685f358a0482", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} extensionId
     * @param {string} version
     * @param {string} assetType
     * @param {string} accountToken
     * @param {boolean} acceptDefault
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getAsset(
        extensionId: string,
        version: string,
        assetType: string,
        accountToken: string,
        acceptDefault: boolean,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            extensionId: extensionId,
            version: version,
            assetType: assetType
        };

        var queryValues: any = {
            accountToken: accountToken,
            acceptDefault: acceptDefault,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "5d545f3d-ef47-488b-8be3-f5ee1517856c", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} languages
     * @param onResult callback function with the resulting string[]
     */
    public getCategories(
        languages: string,
        onResult: (err: any, statusCode: number, categories: string[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            languages: languages,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "e0a5a71e-3ac3-43a0-ae7d-0bb5c3046a2a", routeValues, queryValues)
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

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getCertificate(
        publisherName: string,
        extensionName: string,
        version: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            version: version
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "e905ad6a-3f1f-4d08-9f6d-7d357ff8b7d0", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionQuery} extensionQuery
     * @param {string} accountToken
     * @param onResult callback function with the resulting GalleryInterfaces.ExtensionQueryResult
     */
    public queryExtensions(
        extensionQuery: GalleryInterfaces.ExtensionQuery,
        accountToken: string,
        onResult: (err: any, statusCode: number, extensionquery: GalleryInterfaces.ExtensionQueryResult) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            accountToken: accountToken,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "eb9d5ee1-6d43-456b-b80e-8a96fbc014b6", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionQuery, responseTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionQueryResult, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, extensionQuery, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
     * @param onResult callback function with the resulting GalleryInterfaces.PublishedExtension
     */
    public createExtension(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "a41192c8-9525-4b58-bc86-179fa549d80d", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionPackage, responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, extensionPackage, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} extensionId
     * @param {string} version
     * @param onResult callback function
     */
    public deleteExtensionById(
        extensionId: string,
        version: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            extensionId: extensionId
        };

        var queryValues: any = {
            version: version,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "a41192c8-9525-4b58-bc86-179fa549d80d", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} extensionId
     * @param {string} version
     * @param {GalleryInterfaces.ExtensionQueryFlags} flags
     * @param onResult callback function with the resulting GalleryInterfaces.PublishedExtension
     */
    public getExtensionById(
        extensionId: string,
        version: string,
        flags: GalleryInterfaces.ExtensionQueryFlags,
        onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void
        ): void {

        var routeValues: any = {
            extensionId: extensionId
        };

        var queryValues: any = {
            version: version,
            flags: flags,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "a41192c8-9525-4b58-bc86-179fa549d80d", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
     * @param {string} extensionId
     * @param onResult callback function with the resulting GalleryInterfaces.PublishedExtension
     */
    public updateExtensionById(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        extensionId: string,
        onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void
        ): void {

        var routeValues: any = {
            extensionId: extensionId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "a41192c8-9525-4b58-bc86-179fa549d80d", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionPackage, responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
            
            this.restClient.replace(url, apiVersion, extensionPackage, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
     * @param {string} publisherName
     * @param onResult callback function with the resulting GalleryInterfaces.PublishedExtension
     */
    public createExtensionWithPublisher(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        publisherName: string,
        onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "e11ea35a-16fe-4b80-ab11-c4cab88a0966", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionPackage, responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, extensionPackage, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param onResult callback function
     */
    public deleteExtension(
        publisherName: string,
        extensionName: string,
        version: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        var queryValues: any = {
            version: version,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "e11ea35a-16fe-4b80-ab11-c4cab88a0966", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} version
     * @param {GalleryInterfaces.ExtensionQueryFlags} flags
     * @param {string} accountToken
     * @param onResult callback function with the resulting GalleryInterfaces.PublishedExtension
     */
    public getExtension(
        publisherName: string,
        extensionName: string,
        version: string,
        flags: GalleryInterfaces.ExtensionQueryFlags,
        accountToken: string,
        onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        var queryValues: any = {
            version: version,
            flags: flags,
            accountToken: accountToken,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "e11ea35a-16fe-4b80-ab11-c4cab88a0966", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {GalleryInterfaces.ExtensionPackage} extensionPackage
     * @param {string} publisherName
     * @param {string} extensionName
     * @param onResult callback function with the resulting GalleryInterfaces.PublishedExtension
     */
    public updateExtension(
        extensionPackage: GalleryInterfaces.ExtensionPackage,
        publisherName: string,
        extensionName: string,
        onResult: (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "e11ea35a-16fe-4b80-ab11-c4cab88a0966", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.ExtensionPackage, responseTypeMetadata: GalleryInterfaces.TypeInfo.PublishedExtension, responseIsCollection: false };
            
            this.restClient.replace(url, apiVersion, extensionPackage, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
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
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getAssetWithToken(
        publisherName: string,
        extensionName: string,
        version: string,
        assetType: string,
        assetToken: string,
        accountToken: string,
        acceptDefault: boolean,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

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
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "364415a1-0077-4a41-a7a0-06edd4497492", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {GalleryInterfaces.PublisherQuery} publisherQuery
     * @param onResult callback function with the resulting GalleryInterfaces.PublisherQueryResult
     */
    public queryPublishers(
        publisherQuery: GalleryInterfaces.PublisherQuery,
        onResult: (err: any, statusCode: number, publisherquery: GalleryInterfaces.PublisherQueryResult) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "2ad6ee0a-b53f-4034-9d1d-d009fda1212e", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.PublisherQuery, responseTypeMetadata: GalleryInterfaces.TypeInfo.PublisherQueryResult, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, publisherQuery, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {GalleryInterfaces.Publisher} publisher
     * @param onResult callback function with the resulting GalleryInterfaces.Publisher
     */
    public createPublisher(
        publisher: GalleryInterfaces.Publisher,
        onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, publisher, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} publisherName
     * @param onResult callback function
     */
    public deletePublisher(
        publisherName: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} publisherName
     * @param {number} flags
     * @param onResult callback function with the resulting GalleryInterfaces.Publisher
     */
    public getPublisher(
        publisherName: string,
        flags: number,
        onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName
        };

        var queryValues: any = {
            flags: flags,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {GalleryInterfaces.Publisher} publisher
     * @param {string} publisherName
     * @param onResult callback function with the resulting GalleryInterfaces.Publisher
     */
    public updatePublisher(
        publisher: GalleryInterfaces.Publisher,
        publisherName: string,
        onResult: (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => void
        ): void {

        var routeValues: any = {
            publisherName: publisherName
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "4ddec66a-e4f6-4f5d-999e-9e77710d7ff4", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseTypeMetadata: GalleryInterfaces.TypeInfo.Publisher, responseIsCollection: false };
            
            this.restClient.replace(url, apiVersion, publisher, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} keyType
     * @param {number} expireCurrentSeconds
     * @param onResult callback function
     */
    public generateKey(
        keyType: string,
        expireCurrentSeconds: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            keyType: keyType
        };

        var queryValues: any = {
            expireCurrentSeconds: expireCurrentSeconds,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "92ed5cf4-c38b-465a-9059-2f2fb7c624b5", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} keyType
     * @param onResult callback function with the resulting string
     */
    public getSigningKey(
        keyType: string,
        onResult: (err: any, statusCode: number, signingkey: string) => void
        ): void {

        var routeValues: any = {
            keyType: keyType
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "gallery", "92ed5cf4-c38b-465a-9059-2f2fb7c624b5", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QGalleryApi extends basem.QClientApiBase implements IQGalleryApi {
    api: GalleryApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, api);
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

        this.api.shareExtensionById(extensionId, accountName, (err: any, statusCode: number) => {
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
    * @param {string} extensionId
    * @param {string} accountName
    */
    public unshareExtensionById(
        extensionId: string,
        accountName: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.unshareExtensionById(extensionId, accountName, (err: any, statusCode: number) => {
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

        this.api.shareExtension(publisherName, extensionName, accountName, (err: any, statusCode: number) => {
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

        this.api.unshareExtension(publisherName, extensionName, accountName, (err: any, statusCode: number) => {
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
    * @param {string} itemId
    * @param {string} installationTarget
    */
    public getAcquisitionOptions(
        itemId: string,
        installationTarget: string
        ): Q.Promise<GalleryInterfaces.AcquisitionOptions> {
    
        var deferred = Q.defer<GalleryInterfaces.AcquisitionOptions>();

        this.api.getAcquisitionOptions(itemId, installationTarget, (err: any, statusCode: number, acquisitionoption: GalleryInterfaces.AcquisitionOptions) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(acquisitionoption);
            }
        });

        return <Q.Promise<GalleryInterfaces.AcquisitionOptions>>deferred.promise;
    }

    /**
    * @param {GalleryInterfaces.ExtensionAcquisitionRequest} acquisitionRequest
    */
    public requestAcquisition(
        acquisitionRequest: GalleryInterfaces.ExtensionAcquisitionRequest
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.requestAcquisition(acquisitionRequest, (err: any, statusCode: number) => {
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

        this.api.getAssetByName(publisherName, extensionName, version, assetType, accountToken, acceptDefault, (err: any, statusCode: number, assetbyname: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(assetbyname);
            }
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

        this.api.getAsset(extensionId, version, assetType, accountToken, acceptDefault, (err: any, statusCode: number, asset: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(asset);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * @param {string} languages
    */
    public getCategories(
        languages?: string
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.api.getCategories(languages, (err: any, statusCode: number, categories: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(categories);
            }
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

        this.api.getCertificate(publisherName, extensionName, version, (err: any, statusCode: number, certificate: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(certificate);
            }
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

        this.api.queryExtensions(extensionQuery, accountToken, (err: any, statusCode: number, extensionquery: GalleryInterfaces.ExtensionQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extensionquery);
            }
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

        this.api.createExtension(extensionPackage, (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
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

        this.api.deleteExtensionById(extensionId, version, (err: any, statusCode: number) => {
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

        this.api.getExtensionById(extensionId, version, flags, (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
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

        this.api.updateExtensionById(extensionPackage, extensionId, (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
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

        this.api.createExtensionWithPublisher(extensionPackage, publisherName, (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
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

        this.api.deleteExtension(publisherName, extensionName, version, (err: any, statusCode: number) => {
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

        this.api.getExtension(publisherName, extensionName, version, flags, accountToken, (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
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

        this.api.updateExtension(extensionPackage, publisherName, extensionName, (err: any, statusCode: number, extension: GalleryInterfaces.PublishedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(extension);
            }
        });

        return <Q.Promise<GalleryInterfaces.PublishedExtension>>deferred.promise;
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

        this.api.getAssetWithToken(publisherName, extensionName, version, assetType, assetToken, accountToken, acceptDefault, (err: any, statusCode: number, privateasset: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(privateasset);
            }
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

        this.api.queryPublishers(publisherQuery, (err: any, statusCode: number, publisherquery: GalleryInterfaces.PublisherQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(publisherquery);
            }
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

        this.api.createPublisher(publisher, (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(publisher);
            }
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

        this.api.deletePublisher(publisherName, (err: any, statusCode: number) => {
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
    * @param {string} publisherName
    * @param {number} flags
    */
    public getPublisher(
        publisherName: string,
        flags?: number
        ): Q.Promise<GalleryInterfaces.Publisher> {
    
        var deferred = Q.defer<GalleryInterfaces.Publisher>();

        this.api.getPublisher(publisherName, flags, (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(publisher);
            }
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

        this.api.updatePublisher(publisher, publisherName, (err: any, statusCode: number, publisher: GalleryInterfaces.Publisher) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(publisher);
            }
        });

        return <Q.Promise<GalleryInterfaces.Publisher>>deferred.promise;
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

        this.api.generateKey(keyType, expireCurrentSeconds, (err: any, statusCode: number) => {
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
    * @param {string} keyType
    */
    public getSigningKey(
        keyType: string
        ): Q.Promise<string> {
    
        var deferred = Q.defer<string>();

        this.api.getSigningKey(keyType, (err: any, statusCode: number, signingkey: string) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(signingkey);
            }
        });

        return <Q.Promise<string>>deferred.promise;
    }

}
