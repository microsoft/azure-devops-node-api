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
import ExtensionManagementInterfaces = require("./interfaces/ExtensionManagementInterfaces");
import GalleryInterfaces = require("./interfaces/GalleryInterfaces");

export interface IExtensionManagementApi extends basem.ClientApiBase {
    getAcquisitionOptions(itemId: string, testCommerce?: boolean, isFreeOrTrialInstall?: boolean): Promise<ExtensionManagementInterfaces.AcquisitionOptions>;
    requestAcquisition(acquisitionRequest: ExtensionManagementInterfaces.ExtensionAcquisitionRequest): Promise<ExtensionManagementInterfaces.ExtensionAcquisitionRequest>;
    registerAuthorization(publisherName: string, extensionName: string, registrationId: string): Promise<ExtensionManagementInterfaces.ExtensionAuthorization>;
    createDocumentByName(doc: any, publisherName: string, extensionName: string, scopeType: string, scopeValue: string, collectionName: string): Promise<any>;
    deleteDocumentByName(publisherName: string, extensionName: string, scopeType: string, scopeValue: string, collectionName: string, documentId: string): Promise<void>;
    getDocumentByName(publisherName: string, extensionName: string, scopeType: string, scopeValue: string, collectionName: string, documentId: string): Promise<any>;
    getDocumentsByName(publisherName: string, extensionName: string, scopeType: string, scopeValue: string, collectionName: string): Promise<any[]>;
    setDocumentByName(doc: any, publisherName: string, extensionName: string, scopeType: string, scopeValue: string, collectionName: string): Promise<any>;
    updateDocumentByName(doc: any, publisherName: string, extensionName: string, scopeType: string, scopeValue: string, collectionName: string): Promise<any>;
    queryCollectionsByName(collectionQuery: ExtensionManagementInterfaces.ExtensionDataCollectionQuery, publisherName: string, extensionName: string): Promise<ExtensionManagementInterfaces.ExtensionDataCollection[]>;
    getStates(includeDisabled?: boolean, includeErrors?: boolean, includeInstallationIssues?: boolean): Promise<ExtensionManagementInterfaces.ExtensionState[]>;
    queryExtensions(query: ExtensionManagementInterfaces.InstalledExtensionQuery): Promise<ExtensionManagementInterfaces.InstalledExtension[]>;
    getInstalledExtensions(includeDisabledExtensions?: boolean, includeErrors?: boolean, assetTypes?: string[], includeInstallationIssues?: boolean): Promise<ExtensionManagementInterfaces.InstalledExtension[]>;
    updateInstalledExtension(extension: ExtensionManagementInterfaces.InstalledExtension): Promise<ExtensionManagementInterfaces.InstalledExtension>;
    getInstalledExtensionByName(publisherName: string, extensionName: string, assetTypes?: string[]): Promise<ExtensionManagementInterfaces.InstalledExtension>;
    installExtensionByName(publisherName: string, extensionName: string, version?: string): Promise<ExtensionManagementInterfaces.InstalledExtension>;
    uninstallExtensionByName(publisherName: string, extensionName: string, reason?: string, reasonCode?: string): Promise<void>;
    getPolicies(userId: string): Promise<GalleryInterfaces.UserExtensionPolicy>;
    resolveRequest(rejectMessage: string, publisherName: string, extensionName: string, requesterId: string, state: ExtensionManagementInterfaces.ExtensionRequestState): Promise<number>;
    getRequests(): Promise<ExtensionManagementInterfaces.RequestedExtension[]>;
    resolveAllRequests(rejectMessage: string, publisherName: string, extensionName: string, state: ExtensionManagementInterfaces.ExtensionRequestState): Promise<number>;
    deleteRequest(publisherName: string, extensionName: string): Promise<void>;
    requestExtension(publisherName: string, extensionName: string, requestMessage: string): Promise<ExtensionManagementInterfaces.RequestedExtension>;
    getToken(): Promise<string>;
}

export class ExtensionManagementApi extends basem.ClientApiBase implements IExtensionManagementApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-ExtensionManagement-api');
    }

    /**
    * @param {string} itemId
    * @param {boolean} testCommerce
    * @param {boolean} isFreeOrTrialInstall
    */
    public getAcquisitionOptions(
        itemId: string,
        testCommerce?: boolean,
        isFreeOrTrialInstall?: boolean
        ): Promise<ExtensionManagementInterfaces.AcquisitionOptions> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.AcquisitionOptions>();

        let onResult = (err: any, statusCode: number, AcquisitionOption: ExtensionManagementInterfaces.AcquisitionOptions) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(AcquisitionOption);
            }
        };

        let routeValues: any = {
        };

        let queryValues: any = {
            itemId: itemId,
            testCommerce: testCommerce,
            isFreeOrTrialInstall: isFreeOrTrialInstall,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "288dff58-d13b-468e-9671-0fb754e9398c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.AcquisitionOptions, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ExtensionManagementInterfaces.ExtensionAcquisitionRequest} acquisitionRequest
    */
    public requestAcquisition(
        acquisitionRequest: ExtensionManagementInterfaces.ExtensionAcquisitionRequest
        ): Promise<ExtensionManagementInterfaces.ExtensionAcquisitionRequest> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.ExtensionAcquisitionRequest>();

        let onResult = (err: any, statusCode: number, AcquisitionRequest: ExtensionManagementInterfaces.ExtensionAcquisitionRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(AcquisitionRequest);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "da616457-eed3-4672-92d7-18d21f5c1658", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ExtensionManagementInterfaces.TypeInfo.ExtensionAcquisitionRequest, responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.ExtensionAcquisitionRequest, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, acquisitionRequest, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} registrationId
    */
    public registerAuthorization(
        publisherName: string,
        extensionName: string,
        registrationId: string
        ): Promise<ExtensionManagementInterfaces.ExtensionAuthorization> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.ExtensionAuthorization>();

        let onResult = (err: any, statusCode: number, Authorization: ExtensionManagementInterfaces.ExtensionAuthorization) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Authorization);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            registrationId: registrationId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "f21cfc80-d2d2-4248-98bb-7820c74c4606", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {any} doc
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} scopeType
    * @param {string} scopeValue
    * @param {string} collectionName
    */
    public createDocumentByName(
        doc: any,
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string
        ): Promise<any> {
    
        let deferred = Q.defer<any>();

        let onResult = (err: any, statusCode: number, Data: any) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Data);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            scopeType: scopeType,
            scopeValue: scopeValue,
            collectionName: collectionName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, doc, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} scopeType
    * @param {string} scopeValue
    * @param {string} collectionName
    * @param {string} documentId
    */
    public deleteDocumentByName(
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string,
        documentId: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            scopeType: scopeType,
            scopeValue: scopeValue,
            collectionName: collectionName,
            documentId: documentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} scopeType
    * @param {string} scopeValue
    * @param {string} collectionName
    * @param {string} documentId
    */
    public getDocumentByName(
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string,
        documentId: string
        ): Promise<any> {
    
        let deferred = Q.defer<any>();

        let onResult = (err: any, statusCode: number, Data: any) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Data);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            scopeType: scopeType,
            scopeValue: scopeValue,
            collectionName: collectionName,
            documentId: documentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
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
    * @param {string} scopeType
    * @param {string} scopeValue
    * @param {string} collectionName
    */
    public getDocumentsByName(
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string
        ): Promise<any[]> {
    
        let deferred = Q.defer<any[]>();

        let onResult = (err: any, statusCode: number, Data: any[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Data);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            scopeType: scopeType,
            scopeValue: scopeValue,
            collectionName: collectionName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {any} doc
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} scopeType
    * @param {string} scopeValue
    * @param {string} collectionName
    */
    public setDocumentByName(
        doc: any,
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string
        ): Promise<any> {
    
        let deferred = Q.defer<any>();

        let onResult = (err: any, statusCode: number, Data: any) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Data);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            scopeType: scopeType,
            scopeValue: scopeValue,
            collectionName: collectionName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, doc, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {any} doc
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} scopeType
    * @param {string} scopeValue
    * @param {string} collectionName
    */
    public updateDocumentByName(
        doc: any,
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string
        ): Promise<any> {
    
        let deferred = Q.defer<any>();

        let onResult = (err: any, statusCode: number, Data: any) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Data);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            scopeType: scopeType,
            scopeValue: scopeValue,
            collectionName: collectionName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, doc, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ExtensionManagementInterfaces.ExtensionDataCollectionQuery} collectionQuery
    * @param {string} publisherName
    * @param {string} extensionName
    */
    public queryCollectionsByName(
        collectionQuery: ExtensionManagementInterfaces.ExtensionDataCollectionQuery,
        publisherName: string,
        extensionName: string
        ): Promise<ExtensionManagementInterfaces.ExtensionDataCollection[]> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.ExtensionDataCollection[]>();

        let onResult = (err: any, statusCode: number, ExtensionDataCollectionQuery: ExtensionManagementInterfaces.ExtensionDataCollection[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ExtensionDataCollectionQuery);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "56c331f1-ce53-4318-adfd-4db5c52a7a2e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, collectionQuery, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {boolean} includeDisabled
    * @param {boolean} includeErrors
    * @param {boolean} includeInstallationIssues
    */
    public getStates(
        includeDisabled?: boolean,
        includeErrors?: boolean,
        includeInstallationIssues?: boolean
        ): Promise<ExtensionManagementInterfaces.ExtensionState[]> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.ExtensionState[]>();

        let onResult = (err: any, statusCode: number, ExtensionStates: ExtensionManagementInterfaces.ExtensionState[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ExtensionStates);
            }
        };

        let routeValues: any = {
        };

        let queryValues: any = {
            includeDisabled: includeDisabled,
            includeErrors: includeErrors,
            includeInstallationIssues: includeInstallationIssues,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "92755d3d-9a8a-42b3-8a4d-87359fe5aa93", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.ExtensionState, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ExtensionManagementInterfaces.InstalledExtensionQuery} query
    */
    public queryExtensions(
        query: ExtensionManagementInterfaces.InstalledExtensionQuery
        ): Promise<ExtensionManagementInterfaces.InstalledExtension[]> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.InstalledExtension[]>();

        let onResult = (err: any, statusCode: number, InstalledExtensionQuery: ExtensionManagementInterfaces.InstalledExtension[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(InstalledExtensionQuery);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "046c980f-1345-4ce2-bf85-b46d10ff4cfd", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.InstalledExtension, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, query, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {boolean} includeDisabledExtensions
    * @param {boolean} includeErrors
    * @param {string[]} assetTypes
    * @param {boolean} includeInstallationIssues
    */
    public getInstalledExtensions(
        includeDisabledExtensions?: boolean,
        includeErrors?: boolean,
        assetTypes?: string[],
        includeInstallationIssues?: boolean
        ): Promise<ExtensionManagementInterfaces.InstalledExtension[]> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.InstalledExtension[]>();

        let onResult = (err: any, statusCode: number, InstalledExtensions: ExtensionManagementInterfaces.InstalledExtension[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(InstalledExtensions);
            }
        };

        let routeValues: any = {
        };

        let queryValues: any = {
            includeDisabledExtensions: includeDisabledExtensions,
            includeErrors: includeErrors,
            assetTypes: assetTypes && assetTypes.join(":"),
            includeInstallationIssues: includeInstallationIssues,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "275424d0-c844-4fe2-bda6-04933a1357d8", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.InstalledExtension, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ExtensionManagementInterfaces.InstalledExtension} extension
    */
    public updateInstalledExtension(
        extension: ExtensionManagementInterfaces.InstalledExtension
        ): Promise<ExtensionManagementInterfaces.InstalledExtension> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.InstalledExtension>();

        let onResult = (err: any, statusCode: number, InstalledExtension: ExtensionManagementInterfaces.InstalledExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(InstalledExtension);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "275424d0-c844-4fe2-bda6-04933a1357d8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ExtensionManagementInterfaces.TypeInfo.InstalledExtension, responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.InstalledExtension, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, extension, null, serializationData, onResult);
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
        ): Promise<ExtensionManagementInterfaces.InstalledExtension> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.InstalledExtension>();

        let onResult = (err: any, statusCode: number, InstalledExtensionsByName: ExtensionManagementInterfaces.InstalledExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(InstalledExtensionsByName);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        let queryValues: any = {
            assetTypes: assetTypes && assetTypes.join(":"),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "fb0da285-f23e-4b56-8b53-3ef5f9f6de66", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.InstalledExtension, responseIsCollection: false };
                
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
    * @param {string} version
    */
    public installExtensionByName(
        publisherName: string,
        extensionName: string,
        version?: string
        ): Promise<ExtensionManagementInterfaces.InstalledExtension> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.InstalledExtension>();

        let onResult = (err: any, statusCode: number, InstalledExtensionsByName: ExtensionManagementInterfaces.InstalledExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(InstalledExtensionsByName);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            version: version
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "fb0da285-f23e-4b56-8b53-3ef5f9f6de66", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.InstalledExtension, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} reason
    * @param {string} reasonCode
    */
    public uninstallExtensionByName(
        publisherName: string,
        extensionName: string,
        reason?: string,
        reasonCode?: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        let queryValues: any = {
            reason: reason,
            reasonCode: reasonCode,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "fb0da285-f23e-4b56-8b53-3ef5f9f6de66", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {string} userId
    */
    public getPolicies(
        userId: string
        ): Promise<GalleryInterfaces.UserExtensionPolicy> {
    
        let deferred = Q.defer<GalleryInterfaces.UserExtensionPolicy>();

        let onResult = (err: any, statusCode: number, Policie: GalleryInterfaces.UserExtensionPolicy) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Policie);
            }
        };

        let routeValues: any = {
            userId: userId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "e5cc8c09-407b-4867-8319-2ae3338cbf6f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: GalleryInterfaces.TypeInfo.UserExtensionPolicy, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} rejectMessage
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} requesterId
    * @param {ExtensionManagementInterfaces.ExtensionRequestState} state
    */
    public resolveRequest(
        rejectMessage: string,
        publisherName: string,
        extensionName: string,
        requesterId: string,
        state: ExtensionManagementInterfaces.ExtensionRequestState
        ): Promise<number> {
    
        let deferred = Q.defer<number>();

        let onResult = (err: any, statusCode: number, RequestedExtension: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(RequestedExtension);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName,
            requesterId: requesterId
        };

        let queryValues: any = {
            state: state,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "aa93e1f3-511c-4364-8b9c-eb98818f2e0b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, rejectMessage, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    */
    public getRequests(
        ): Promise<ExtensionManagementInterfaces.RequestedExtension[]> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.RequestedExtension[]>();

        let onResult = (err: any, statusCode: number, RequestedExtensions: ExtensionManagementInterfaces.RequestedExtension[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(RequestedExtensions);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "216b978f-b164-424e-ada2-b77561e842b7", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.RequestedExtension, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} rejectMessage
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {ExtensionManagementInterfaces.ExtensionRequestState} state
    */
    public resolveAllRequests(
        rejectMessage: string,
        publisherName: string,
        extensionName: string,
        state: ExtensionManagementInterfaces.ExtensionRequestState
        ): Promise<number> {
    
        let deferred = Q.defer<number>();

        let onResult = (err: any, statusCode: number, RequestedExtension: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(RequestedExtension);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        let queryValues: any = {
            state: state,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "ba93e1f3-511c-4364-8b9c-eb98818f2e0b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, rejectMessage, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} publisherName
    * @param {string} extensionName
    */
    public deleteRequest(
        publisherName: string,
        extensionName: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "f5afca1e-a728-4294-aa2d-4af0173431b5", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {string} publisherName
    * @param {string} extensionName
    * @param {string} requestMessage
    */
    public requestExtension(
        publisherName: string,
        extensionName: string,
        requestMessage: string
        ): Promise<ExtensionManagementInterfaces.RequestedExtension> {
    
        let deferred = Q.defer<ExtensionManagementInterfaces.RequestedExtension>();

        let onResult = (err: any, statusCode: number, RequestedExtension: ExtensionManagementInterfaces.RequestedExtension) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(RequestedExtension);
            }
        };

        let routeValues: any = {
            publisherName: publisherName,
            extensionName: extensionName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "f5afca1e-a728-4294-aa2d-4af0173431b5", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ExtensionManagementInterfaces.TypeInfo.RequestedExtension, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, requestMessage, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    */
    public getToken(
        ): Promise<string> {
    
        let deferred = Q.defer<string>();

        let onResult = (err: any, statusCode: number, Token: string) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Token);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ExtensionManagement", "3a2e24ed-1d6f-4cb2-9f3b-45a96bbfaf50", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

}
