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

export interface ILicensingApi extends basem.ClientApiBase {
    getExtensionLicenseUsage(): Promise<common/LicensingInterfaces.AccountLicenseExtensionUsage[]>;
    getCertificate(): Promise<NodeJS.ReadableStream>;
    getClientRights(rightName?: string, productVersion?: string, edition?: string, relType?: string, includeCertificate?: boolean, canary?: string, machineId?: string): Promise<common/LicensingInterfaces.ClientRightsContainer>;
    assignAvailableAccountEntitlement(userId: string): Promise<common/LicensingInterfaces.AccountEntitlement>;
    getAccountEntitlement(): Promise<common/LicensingInterfaces.AccountEntitlement>;
    assignAccountEntitlementForUser(body: common/LicensingInterfaces.AccountEntitlementUpdateModel, userId: string): Promise<common/LicensingInterfaces.AccountEntitlement>;
    deleteUserEntitlements(userId: string): Promise<void>;
    getAccountEntitlementForUser(userId: string, determineRights?: boolean): Promise<common/LicensingInterfaces.AccountEntitlement>;
    obtainAvailableAccountEntitlements(userIds: string[]): Promise<common/LicensingInterfaces.AccountEntitlement[]>;
    assignExtensionToAllEligibleUsers(extensionId: string): Promise<common/LicensingInterfaces.ExtensionOperationResult[]>;
    getEligibleUsersForExtension(extensionId: string, options: common/LicensingInterfaces.ExtensionFilterOptions): Promise<string[]>;
    getExtensionStatusForUsers(extensionId: string): Promise<{ [key: string] : common/LicensingInterfaces.ExtensionAssignmentDetails; }>;
    assignExtensionToUsers(body: common/LicensingInterfaces.ExtensionAssignment): Promise<common/LicensingInterfaces.ExtensionOperationResult[]>;
    getExtensionsAssignedToUser(userId: string): Promise<{ [key: string] : common/LicensingInterfaces.LicensingSource; }>;
    unassignExtensionFromUsers(body: common/LicensingInterfaces.ExtensionAssignment): Promise<common/LicensingInterfaces.ExtensionOperationResult[]>;
    getExtensionsAssignedToUsers(userIds: string[]): Promise<{ [key: string] : string[]; }>;
    getExtensionLicenseData(extensionId: string): Promise<common/LicensingInterfaces.ExtensionLicenseData>;
    registerExtensionLicense(extensionLicenseData: common/LicensingInterfaces.ExtensionLicenseData): Promise<boolean>;
    computeExtensionRights(ids: string[]): Promise<{ [key: string] : boolean; }>;
    getExtensionRights(): Promise<common/LicensingInterfaces.ExtensionRightsResult>;
    getMsdnPresence(): Promise<void>;
    getEntitlements(): Promise<common/LicensingInterfaces.MsdnEntitlement[]>;
    getAccountLicensesUsage(): Promise<common/LicensingInterfaces.AccountLicenseUsage[]>;
    getUsageRights(rightName?: string): Promise<common/LicensingInterfaces.IUsageRight[]>;
}

export class LicensingApi extends basem.ClientApiBase implements ILicensingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Licensing-api');
    }

    /**
    */
    public async getExtensionLicenseUsage(
        ): Promise<common/LicensingInterfaces.AccountLicenseExtensionUsage[]> {

        return new Promise<common/LicensingInterfaces.AccountLicenseExtensionUsage[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Licensing",
                    "01bce8d3-c130-480f-a332-474ae3f6662e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.AccountLicenseExtensionUsage[]>;
                res = await this.rest.get<common/LicensingInterfaces.AccountLicenseExtensionUsage[]>(url, options);

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
    */
    public async getCertificate(
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "2e0dbce7-a327-4bc0-a291-056139393f6d",
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
    * @param {string} rightName
    * @param {string} productVersion
    * @param {string} edition
    * @param {string} relType
    * @param {boolean} includeCertificate
    * @param {string} canary
    * @param {string} machineId
    */
    public async getClientRights(
        rightName?: string,
        productVersion?: string,
        edition?: string,
        relType?: string,
        includeCertificate?: boolean,
        canary?: string,
        machineId?: string
        ): Promise<common/LicensingInterfaces.ClientRightsContainer> {

        return new Promise<common/LicensingInterfaces.ClientRightsContainer>(async (resolve, reject) => {
            let routeValues: any = {
                rightName: rightName
            };

            let queryValues: any = {
                productVersion: productVersion,
                edition: edition,
                relType: relType,
                includeCertificate: includeCertificate,
                canary: canary,
                machineId: machineId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "643c72da-eaee-4163-9f07-d748ef5c2a0c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.ClientRightsContainer>;
                res = await this.rest.get<common/LicensingInterfaces.ClientRightsContainer>(url, options);

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
    * Assign an available entitilement to a user
    * 
    * @param {string} userId - The user to which to assign the entitilement
    */
    public async assignAvailableAccountEntitlement(
        userId: string
        ): Promise<common/LicensingInterfaces.AccountEntitlement> {

        return new Promise<common/LicensingInterfaces.AccountEntitlement>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                userId: userId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "c01e9fd5-0d8c-4d5e-9a68-734bd8da6a38",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.AccountEntitlement>;
                res = await this.rest.create<common/LicensingInterfaces.AccountEntitlement>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.AccountEntitlement,
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
    public async getAccountEntitlement(
        ): Promise<common/LicensingInterfaces.AccountEntitlement> {

        return new Promise<common/LicensingInterfaces.AccountEntitlement>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "c01e9fd5-0d8c-4d5e-9a68-734bd8da6a38",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.AccountEntitlement>;
                res = await this.rest.get<common/LicensingInterfaces.AccountEntitlement>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.AccountEntitlement,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Assign an explicit account entitlement
    * 
    * @param {common/LicensingInterfaces.AccountEntitlementUpdateModel} body - The update model for the entitlement
    * @param {string} userId - The id of the user
    */
    public async assignAccountEntitlementForUser(
        body: common/LicensingInterfaces.AccountEntitlementUpdateModel,
        userId: string
        ): Promise<common/LicensingInterfaces.AccountEntitlement> {

        return new Promise<common/LicensingInterfaces.AccountEntitlement>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "6490e566-b299-49a7-a4e4-28749752581f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.AccountEntitlement>;
                res = await this.rest.replace<common/LicensingInterfaces.AccountEntitlement>(url, body, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.AccountEntitlement,
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
    public async deleteUserEntitlements(
        userId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "6490e566-b299-49a7-a4e4-28749752581f",
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
    * Get the entitlements for a user
    * 
    * @param {string} userId - The id of the user
    * @param {boolean} determineRights
    */
    public async getAccountEntitlementForUser(
        userId: string,
        determineRights?: boolean
        ): Promise<common/LicensingInterfaces.AccountEntitlement> {

        return new Promise<common/LicensingInterfaces.AccountEntitlement>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            let queryValues: any = {
                determineRights: determineRights,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "6490e566-b299-49a7-a4e4-28749752581f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.AccountEntitlement>;
                res = await this.rest.get<common/LicensingInterfaces.AccountEntitlement>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.AccountEntitlement,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns AccountEntitlements that are currently assigned to the given list of users in the account
    * 
    * @param {string[]} userIds - List of user Ids.
    */
    public async obtainAvailableAccountEntitlements(
        userIds: string[]
        ): Promise<common/LicensingInterfaces.AccountEntitlement[]> {

        return new Promise<common/LicensingInterfaces.AccountEntitlement[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Licensing",
                    "cc3a0130-78ad-4a00-b1ca-49bef42f4656",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.AccountEntitlement[]>;
                res = await this.rest.create<common/LicensingInterfaces.AccountEntitlement[]>(url, userIds, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.AccountEntitlement,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Assigns the access to the given extension for all eligible users in the account that do not already have access to the extension though bundle or account assignment
    * 
    * @param {string} extensionId - The extension id to assign the access to.
    */
    public async assignExtensionToAllEligibleUsers(
        extensionId: string
        ): Promise<common/LicensingInterfaces.ExtensionOperationResult[]> {

        return new Promise<common/LicensingInterfaces.ExtensionOperationResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "5434f182-7f32-4135-8326-9340d887c08a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.ExtensionOperationResult[]>;
                res = await this.rest.replace<common/LicensingInterfaces.ExtensionOperationResult[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.ExtensionOperationResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns users that are currently eligible to assign the extension to. the list is filtered based on the value of ExtensionFilterOptions
    * 
    * @param {string} extensionId - The extension to check the eligibility of the users for.
    * @param {common/LicensingInterfaces.ExtensionFilterOptions} options - The options to filter the list.
    */
    public async getEligibleUsersForExtension(
        extensionId: string,
        options: common/LicensingInterfaces.ExtensionFilterOptions
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId
            };

            let queryValues: any = {
                options: options,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "5434f182-7f32-4135-8326-9340d887c08a",
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
    * Returns extension assignment status of all account users for the given extension
    * 
    * @param {string} extensionId - The extension to check the status of the users for.
    */
    public async getExtensionStatusForUsers(
        extensionId: string
        ): Promise<{ [key: string] : common/LicensingInterfaces.ExtensionAssignmentDetails; }> {

        return new Promise<{ [key: string] : common/LicensingInterfaces.ExtensionAssignmentDetails; }>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "5434f182-7f32-4135-8326-9340d887c08a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : common/LicensingInterfaces.ExtensionAssignmentDetails; }>;
                res = await this.rest.get<{ [key: string] : common/LicensingInterfaces.ExtensionAssignmentDetails; }>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.ExtensionAssignmentDetails,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Assigns the access to the given extension for a given list of users
    * 
    * @param {common/LicensingInterfaces.ExtensionAssignment} body - The extension assignment details.
    */
    public async assignExtensionToUsers(
        body: common/LicensingInterfaces.ExtensionAssignment
        ): Promise<common/LicensingInterfaces.ExtensionOperationResult[]> {

        return new Promise<common/LicensingInterfaces.ExtensionOperationResult[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "8cec75ea-044f-4245-ab0d-a82dafcc85ea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.ExtensionOperationResult[]>;
                res = await this.rest.replace<common/LicensingInterfaces.ExtensionOperationResult[]>(url, body, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.ExtensionOperationResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns extensions that are currently assigned to the user in the account
    * 
    * @param {string} userId - The user's identity id.
    */
    public async getExtensionsAssignedToUser(
        userId: string
        ): Promise<{ [key: string] : common/LicensingInterfaces.LicensingSource; }> {

        return new Promise<{ [key: string] : common/LicensingInterfaces.LicensingSource; }>(async (resolve, reject) => {
            let routeValues: any = {
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "8cec75ea-044f-4245-ab0d-a82dafcc85ea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : common/LicensingInterfaces.LicensingSource; }>;
                res = await this.rest.get<{ [key: string] : common/LicensingInterfaces.LicensingSource; }>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.LicensingSource,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Revokes the access to the given extension for a given list of users
    * 
    * @param {common/LicensingInterfaces.ExtensionAssignment} body - The extension assignment details.
    */
    public async unassignExtensionFromUsers(
        body: common/LicensingInterfaces.ExtensionAssignment
        ): Promise<common/LicensingInterfaces.ExtensionOperationResult[]> {

        return new Promise<common/LicensingInterfaces.ExtensionOperationResult[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "8cec75ea-044f-4245-ab0d-a82dafcc85ea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.ExtensionOperationResult[]>;
                res = await this.rest.del<common/LicensingInterfaces.ExtensionOperationResult[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.ExtensionOperationResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns extensions that are currently assigned to the given list of users in the account
    * 
    * @param {string[]} userIds - List of user Ids.
    */
    public async getExtensionsAssignedToUsers(
        userIds: string[]
        ): Promise<{ [key: string] : string[]; }> {

        return new Promise<{ [key: string] : string[]; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Licensing",
                    "1d42ddc2-3e7d-4daa-a0eb-e12c1dbd7c72",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : string[]; }>;
                res = await this.rest.replace<{ [key: string] : string[]; }>(url, userIds, options);

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
    * @param {string} extensionId
    */
    public async getExtensionLicenseData(
        extensionId: string
        ): Promise<common/LicensingInterfaces.ExtensionLicenseData> {

        return new Promise<common/LicensingInterfaces.ExtensionLicenseData>(async (resolve, reject) => {
            let routeValues: any = {
                extensionId: extensionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Licensing",
                    "004a420a-7bef-4b7f-8a50-22975d2067cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.ExtensionLicenseData>;
                res = await this.rest.get<common/LicensingInterfaces.ExtensionLicenseData>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.ExtensionLicenseData,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {common/LicensingInterfaces.ExtensionLicenseData} extensionLicenseData
    */
    public async registerExtensionLicense(
        extensionLicenseData: common/LicensingInterfaces.ExtensionLicenseData
        ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Licensing",
                    "004a420a-7bef-4b7f-8a50-22975d2067cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<boolean>;
                res = await this.rest.create<boolean>(url, extensionLicenseData, options);

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
    * @param {string[]} ids
    */
    public async computeExtensionRights(
        ids: string[]
        ): Promise<{ [key: string] : boolean; }> {

        return new Promise<{ [key: string] : boolean; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "5f1dbe21-f748-47c7-b5fd-3770c8bc2c08",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : boolean; }>;
                res = await this.rest.create<{ [key: string] : boolean; }>(url, ids, options);

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
    */
    public async getExtensionRights(
        ): Promise<common/LicensingInterfaces.ExtensionRightsResult> {

        return new Promise<common/LicensingInterfaces.ExtensionRightsResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "5f1dbe21-f748-47c7-b5fd-3770c8bc2c08",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.ExtensionRightsResult>;
                res = await this.rest.get<common/LicensingInterfaces.ExtensionRightsResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.ExtensionRightsResult,
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
    public async getMsdnPresence(
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "69522c3f-eecc-48d0-b333-f69ffb8fa6cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.get<void>(url, options);

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
    public async getEntitlements(
        ): Promise<common/LicensingInterfaces.MsdnEntitlement[]> {

        return new Promise<common/LicensingInterfaces.MsdnEntitlement[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "1cc6137e-12d5-4d44-a4f2-765006c9e85d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.MsdnEntitlement[]>;
                res = await this.rest.get<common/LicensingInterfaces.MsdnEntitlement[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.MsdnEntitlement,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    */
    public async getAccountLicensesUsage(
        ): Promise<common/LicensingInterfaces.AccountLicenseUsage[]> {

        return new Promise<common/LicensingInterfaces.AccountLicenseUsage[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "d3266b87-d395-4e91-97a5-0215b81a0b7d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.AccountLicenseUsage[]>;
                res = await this.rest.get<common/LicensingInterfaces.AccountLicenseUsage[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.AccountLicenseUsage,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} rightName
    */
    public async getUsageRights(
        rightName?: string
        ): Promise<common/LicensingInterfaces.IUsageRight[]> {

        return new Promise<common/LicensingInterfaces.IUsageRight[]>(async (resolve, reject) => {
            let routeValues: any = {
                rightName: rightName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "licensing",
                    "d09ac573-58fe-4948-af97-793db40a7e16",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<common/LicensingInterfaces.IUsageRight[]>;
                res = await this.rest.get<common/LicensingInterfaces.IUsageRight[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              common/LicensingInterfaces.TypeInfo.IUsageRight,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
