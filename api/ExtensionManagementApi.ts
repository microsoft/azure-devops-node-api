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
import ExtensionManagementInterfaces = require("./interfaces/ExtensionManagementInterfaces");
import GalleryInterfaces = require("./interfaces/GalleryInterfaces");

export interface IExtensionManagementApi extends basem.ClientApiBase {
    getAcquisitionOptions(itemId: string, testCommerce?: boolean, isFreeOrTrialInstall?: boolean, isAccountOwner?: boolean): Promise<ExtensionManagementInterfaces.AcquisitionOptions>;
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
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-ExtensionManagement-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "6c2b0933-3600-42ae-bf8b-93d4f7e83594";

    /**
     * @param {string} itemId
     * @param {boolean} testCommerce
     * @param {boolean} isFreeOrTrialInstall
     * @param {boolean} isAccountOwner
     */
    public async getAcquisitionOptions(
        itemId: string,
        testCommerce?: boolean,
        isFreeOrTrialInstall?: boolean,
        isAccountOwner?: boolean
        ): Promise<ExtensionManagementInterfaces.AcquisitionOptions> {

        return new Promise<ExtensionManagementInterfaces.AcquisitionOptions>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                itemId: itemId,
                testCommerce: testCommerce,
                isFreeOrTrialInstall: isFreeOrTrialInstall,
                isAccountOwner: isAccountOwner,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "288dff58-d13b-468e-9671-0fb754e9398c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.AcquisitionOptions>;
                res = await this.rest.get<ExtensionManagementInterfaces.AcquisitionOptions>(url, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.AcquisitionOptions,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ExtensionManagementInterfaces.ExtensionAcquisitionRequest} acquisitionRequest
     */
    public async requestAcquisition(
        acquisitionRequest: ExtensionManagementInterfaces.ExtensionAcquisitionRequest
        ): Promise<ExtensionManagementInterfaces.ExtensionAcquisitionRequest> {

        return new Promise<ExtensionManagementInterfaces.ExtensionAcquisitionRequest>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "da616457-eed3-4672-92d7-18d21f5c1658",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.ExtensionAcquisitionRequest>;
                res = await this.rest.create<ExtensionManagementInterfaces.ExtensionAcquisitionRequest>(url, acquisitionRequest, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.ExtensionAcquisitionRequest,
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
     * @param {string} registrationId
     */
    public async registerAuthorization(
        publisherName: string,
        extensionName: string,
        registrationId: string
        ): Promise<ExtensionManagementInterfaces.ExtensionAuthorization> {

        return new Promise<ExtensionManagementInterfaces.ExtensionAuthorization>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                registrationId: registrationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "f21cfc80-d2d2-4248-98bb-7820c74c4606",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.ExtensionAuthorization>;
                res = await this.rest.replace<ExtensionManagementInterfaces.ExtensionAuthorization>(url, options);

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
     * @param {any} doc
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} scopeType
     * @param {string} scopeValue
     * @param {string} collectionName
     */
    public async createDocumentByName(
        doc: any,
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                scopeType: scopeType,
                scopeValue: scopeValue,
                collectionName: collectionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<any>;
                res = await this.rest.create<any>(url, doc, options);

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
     * @param {string} scopeType
     * @param {string} scopeValue
     * @param {string} collectionName
     * @param {string} documentId
     */
    public async deleteDocumentByName(
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string,
        documentId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                scopeType: scopeType,
                scopeValue: scopeValue,
                collectionName: collectionName,
                documentId: documentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749",
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
     * @param {string} scopeType
     * @param {string} scopeValue
     * @param {string} collectionName
     * @param {string} documentId
     */
    public async getDocumentByName(
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string,
        documentId: string
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                scopeType: scopeType,
                scopeValue: scopeValue,
                collectionName: collectionName,
                documentId: documentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749",
                    routeValues);

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
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} scopeType
     * @param {string} scopeValue
     * @param {string} collectionName
     */
    public async getDocumentsByName(
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string
        ): Promise<any[]> {

        return new Promise<any[]>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                scopeType: scopeType,
                scopeValue: scopeValue,
                collectionName: collectionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<any[]>;
                res = await this.rest.get<any[]>(url, options);

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
     * @param {any} doc
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} scopeType
     * @param {string} scopeValue
     * @param {string} collectionName
     */
    public async setDocumentByName(
        doc: any,
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                scopeType: scopeType,
                scopeValue: scopeValue,
                collectionName: collectionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<any>;
                res = await this.rest.replace<any>(url, doc, options);

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
     * @param {any} doc
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} scopeType
     * @param {string} scopeValue
     * @param {string} collectionName
     */
    public async updateDocumentByName(
        doc: any,
        publisherName: string,
        extensionName: string,
        scopeType: string,
        scopeValue: string,
        collectionName: string
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                scopeType: scopeType,
                scopeValue: scopeValue,
                collectionName: collectionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "bbe06c18-1c8b-4fcd-b9c6-1535aaab8749",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<any>;
                res = await this.rest.update<any>(url, doc, options);

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
     * Query for one or more data collections for the specified extension.  Note: the token used for authorization must have been issued on behalf of the specified extension.
     * 
     * @param {ExtensionManagementInterfaces.ExtensionDataCollectionQuery} collectionQuery
     * @param {string} publisherName - Name of the publisher. Example: "fabrikam".
     * @param {string} extensionName - Name of the extension. Example: "ops-tools".
     */
    public async queryCollectionsByName(
        collectionQuery: ExtensionManagementInterfaces.ExtensionDataCollectionQuery,
        publisherName: string,
        extensionName: string
        ): Promise<ExtensionManagementInterfaces.ExtensionDataCollection[]> {

        return new Promise<ExtensionManagementInterfaces.ExtensionDataCollection[]>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "56c331f1-ce53-4318-adfd-4db5c52a7a2e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.ExtensionDataCollection[]>;
                res = await this.rest.create<ExtensionManagementInterfaces.ExtensionDataCollection[]>(url, collectionQuery, options);

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
     * List state and version information for all installed extensions.
     * 
     * @param {boolean} includeDisabled - If true (the default), include disabled extensions in the results.
     * @param {boolean} includeErrors - If true, include installed extensions in an error state in the results.
     * @param {boolean} includeInstallationIssues
     */
    public async getStates(
        includeDisabled?: boolean,
        includeErrors?: boolean,
        includeInstallationIssues?: boolean
        ): Promise<ExtensionManagementInterfaces.ExtensionState[]> {

        return new Promise<ExtensionManagementInterfaces.ExtensionState[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeDisabled: includeDisabled,
                includeErrors: includeErrors,
                includeInstallationIssues: includeInstallationIssues,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "92755d3d-9a8a-42b3-8a4d-87359fe5aa93",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.ExtensionState[]>;
                res = await this.rest.get<ExtensionManagementInterfaces.ExtensionState[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.ExtensionState,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ExtensionManagementInterfaces.InstalledExtensionQuery} query
     */
    public async queryExtensions(
        query: ExtensionManagementInterfaces.InstalledExtensionQuery
        ): Promise<ExtensionManagementInterfaces.InstalledExtension[]> {

        return new Promise<ExtensionManagementInterfaces.InstalledExtension[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "046c980f-1345-4ce2-bf85-b46d10ff4cfd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.InstalledExtension[]>;
                res = await this.rest.create<ExtensionManagementInterfaces.InstalledExtension[]>(url, query, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.InstalledExtension,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * List the installed extensions in the account / project collection.
     * 
     * @param {boolean} includeDisabledExtensions - If true (the default), include disabled extensions in the results.
     * @param {boolean} includeErrors - If true, include installed extensions with errors.
     * @param {string[]} assetTypes
     * @param {boolean} includeInstallationIssues
     */
    public async getInstalledExtensions(
        includeDisabledExtensions?: boolean,
        includeErrors?: boolean,
        assetTypes?: string[],
        includeInstallationIssues?: boolean
        ): Promise<ExtensionManagementInterfaces.InstalledExtension[]> {

        return new Promise<ExtensionManagementInterfaces.InstalledExtension[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeDisabledExtensions: includeDisabledExtensions,
                includeErrors: includeErrors,
                assetTypes: assetTypes && assetTypes.join(":"),
                includeInstallationIssues: includeInstallationIssues,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "275424d0-c844-4fe2-bda6-04933a1357d8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.InstalledExtension[]>;
                res = await this.rest.get<ExtensionManagementInterfaces.InstalledExtension[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.InstalledExtension,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update an installed extension. Typically this API is used to enable or disable an extension.
     * 
     * @param {ExtensionManagementInterfaces.InstalledExtension} extension
     */
    public async updateInstalledExtension(
        extension: ExtensionManagementInterfaces.InstalledExtension
        ): Promise<ExtensionManagementInterfaces.InstalledExtension> {

        return new Promise<ExtensionManagementInterfaces.InstalledExtension>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "275424d0-c844-4fe2-bda6-04933a1357d8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.InstalledExtension>;
                res = await this.rest.update<ExtensionManagementInterfaces.InstalledExtension>(url, extension, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.InstalledExtension,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get an installed extension by its publisher and extension name.
     * 
     * @param {string} publisherName - Name of the publisher. Example: "fabrikam".
     * @param {string} extensionName - Name of the extension. Example: "ops-tools".
     * @param {string[]} assetTypes
     */
    public async getInstalledExtensionByName(
        publisherName: string,
        extensionName: string,
        assetTypes?: string[]
        ): Promise<ExtensionManagementInterfaces.InstalledExtension> {

        return new Promise<ExtensionManagementInterfaces.InstalledExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                assetTypes: assetTypes && assetTypes.join(":"),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "fb0da285-f23e-4b56-8b53-3ef5f9f6de66",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.InstalledExtension>;
                res = await this.rest.get<ExtensionManagementInterfaces.InstalledExtension>(url, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.InstalledExtension,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Install the specified extension into the account / project collection.
     * 
     * @param {string} publisherName - Name of the publisher. Example: "fabrikam".
     * @param {string} extensionName - Name of the extension. Example: "ops-tools".
     * @param {string} version
     */
    public async installExtensionByName(
        publisherName: string,
        extensionName: string,
        version?: string
        ): Promise<ExtensionManagementInterfaces.InstalledExtension> {

        return new Promise<ExtensionManagementInterfaces.InstalledExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                version: version
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "fb0da285-f23e-4b56-8b53-3ef5f9f6de66",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.InstalledExtension>;
                res = await this.rest.create<ExtensionManagementInterfaces.InstalledExtension>(url, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.InstalledExtension,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Uninstall the specified extension from the account / project collection.
     * 
     * @param {string} publisherName - Name of the publisher. Example: "fabrikam".
     * @param {string} extensionName - Name of the extension. Example: "ops-tools".
     * @param {string} reason
     * @param {string} reasonCode
     */
    public async uninstallExtensionByName(
        publisherName: string,
        extensionName: string,
        reason?: string,
        reasonCode?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                reason: reason,
                reasonCode: reasonCode,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "fb0da285-f23e-4b56-8b53-3ef5f9f6de66",
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
     * @param {string} userId
     */
    public async getPolicies(
        userId: string
        ): Promise<GalleryInterfaces.UserExtensionPolicy> {

        return new Promise<GalleryInterfaces.UserExtensionPolicy>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "e5cc8c09-407b-4867-8319-2ae3338cbf6f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GalleryInterfaces.UserExtensionPolicy>;
                res = await this.rest.get<GalleryInterfaces.UserExtensionPolicy>(url, options);

                let ret = this.formatResponse(res.result,
                                              GalleryInterfaces.TypeInfo.UserExtensionPolicy,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} rejectMessage
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {string} requesterId
     * @param {ExtensionManagementInterfaces.ExtensionRequestState} state
     */
    public async resolveRequest(
        rejectMessage: string,
        publisherName: string,
        extensionName: string,
        requesterId: string,
        state: ExtensionManagementInterfaces.ExtensionRequestState
        ): Promise<number> {

        return new Promise<number>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName,
                requesterId: requesterId
            };

            let queryValues: any = {
                state: state,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "aa93e1f3-511c-4364-8b9c-eb98818f2e0b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<number>;
                res = await this.rest.update<number>(url, rejectMessage, options);

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
     */
    public async getRequests(
        ): Promise<ExtensionManagementInterfaces.RequestedExtension[]> {

        return new Promise<ExtensionManagementInterfaces.RequestedExtension[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "216b978f-b164-424e-ada2-b77561e842b7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.RequestedExtension[]>;
                res = await this.rest.get<ExtensionManagementInterfaces.RequestedExtension[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.RequestedExtension,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} rejectMessage
     * @param {string} publisherName
     * @param {string} extensionName
     * @param {ExtensionManagementInterfaces.ExtensionRequestState} state
     */
    public async resolveAllRequests(
        rejectMessage: string,
        publisherName: string,
        extensionName: string,
        state: ExtensionManagementInterfaces.ExtensionRequestState
        ): Promise<number> {

        return new Promise<number>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            let queryValues: any = {
                state: state,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "ba93e1f3-511c-4364-8b9c-eb98818f2e0b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<number>;
                res = await this.rest.update<number>(url, rejectMessage, options);

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
    public async deleteRequest(
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
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "f5afca1e-a728-4294-aa2d-4af0173431b5",
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
     * @param {string} requestMessage
     */
    public async requestExtension(
        publisherName: string,
        extensionName: string,
        requestMessage: string
        ): Promise<ExtensionManagementInterfaces.RequestedExtension> {

        return new Promise<ExtensionManagementInterfaces.RequestedExtension>(async (resolve, reject) => {
            let routeValues: any = {
                publisherName: publisherName,
                extensionName: extensionName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "f5afca1e-a728-4294-aa2d-4af0173431b5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ExtensionManagementInterfaces.RequestedExtension>;
                res = await this.rest.create<ExtensionManagementInterfaces.RequestedExtension>(url, requestMessage, options);

                let ret = this.formatResponse(res.result,
                                              ExtensionManagementInterfaces.TypeInfo.RequestedExtension,
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
    public async getToken(
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "ExtensionManagement",
                    "3a2e24ed-1d6f-4cb2-9f3b-45a96bbfaf50",
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

}
