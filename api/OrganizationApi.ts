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
import OrganizationInterfaces = require("./interfaces/OrganizationInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IOrganizationApi extends basem.ClientApiBase {
    updateCollectionProperties(customHeaders: any, collectionId: string, patchDocument: VSSInterfaces.JsonPatchDocument): Promise<boolean>;
    createCollection(resource: OrganizationInterfaces.Collection): Promise<OrganizationInterfaces.Collection>;
    deleteCollection(collectionId: string): Promise<boolean>;
    getCollection(collectionId: string, propertyNames?: string[]): Promise<OrganizationInterfaces.Collection>;
    getCollections(): Promise<OrganizationInterfaces.Collection[]>;
    restoreCollection(collectionId: string, collectionName: string): Promise<boolean>;
    updateCollection(customHeaders: any, patchDocument: VSSInterfaces.JsonPatchDocument, collectionId: string): Promise<OrganizationInterfaces.Collection>;
    exportOrganizationMigrationBlob(organizationId: string): Promise<OrganizationInterfaces.OrganizationMigrationBlob>;
    importOrganizationMigrationBlob(migrationBlob: OrganizationInterfaces.OrganizationMigrationBlob): Promise<void>;
    updateOrganizationProperties(customHeaders: any, organizationId: string, patchDocument: VSSInterfaces.JsonPatchDocument): Promise<boolean>;
    createOrganization(resource: OrganizationInterfaces.Organization): Promise<OrganizationInterfaces.Organization>;
    getOrganization(organizationId: string, propertyNames?: string[]): Promise<OrganizationInterfaces.Organization>;
    getOrganizations(searchKind: OrganizationInterfaces.OrganizationSearchKind, searchValue: string, isActivated?: boolean): Promise<OrganizationInterfaces.Organization[]>;
    updateOrganization(customHeaders: any, patchDocument: VSSInterfaces.JsonPatchDocument, organizationId: string): Promise<OrganizationInterfaces.Organization>;
    getRegions(): Promise<OrganizationInterfaces.Region[]>;
}

export class OrganizationApi extends basem.ClientApiBase implements IOrganizationApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Organization-api', options);
    }

    /**
    * @param {string} collectionId
    * @param {VSSInterfaces.JsonPatchDocument} patchDocument
    */
    public async updateCollectionProperties(
        customHeaders: any,
        collectionId: string,
        patchDocument: VSSInterfaces.JsonPatchDocument
    ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                collectionId: collectionId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "a0f9c508-a3c4-456b-a812-3fb0c4743521",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<boolean>;
                res = await this.rest.update<boolean>(url, patchDocument, options);

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
    * @param {OrganizationInterfaces.Collection} resource
    */
    public async createCollection(
        resource: OrganizationInterfaces.Collection
    ): Promise<OrganizationInterfaces.Collection> {

        return new Promise<OrganizationInterfaces.Collection>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "668b5607-0db2-49bb-83f8-5f46f1094250",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.Collection>;
                res = await this.rest.create<OrganizationInterfaces.Collection>(url, resource, options);

                let ret = this.formatResponse(res.result,
                    OrganizationInterfaces.TypeInfo.Collection,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} collectionId
    */
    public async deleteCollection(
        collectionId: string
    ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                collectionId: collectionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "668b5607-0db2-49bb-83f8-5f46f1094250",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<boolean>;
                res = await this.rest.del<boolean>(url, options);

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
    * @param {string} collectionId
    * @param {string[]} propertyNames
    */
    public async getCollection(
        collectionId: string,
        propertyNames?: string[]
    ): Promise<OrganizationInterfaces.Collection> {

        return new Promise<OrganizationInterfaces.Collection>(async (resolve, reject) => {
            let routeValues: any = {
                collectionId: collectionId
            };

            let queryValues: any = {
                propertyNames: propertyNames && propertyNames.join(","),
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "668b5607-0db2-49bb-83f8-5f46f1094250",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.Collection>;
                res = await this.rest.get<OrganizationInterfaces.Collection>(url, options);

                let ret = this.formatResponse(res.result,
                    OrganizationInterfaces.TypeInfo.Collection,
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
    public async getCollections(
    ): Promise<OrganizationInterfaces.Collection[]> {

        return new Promise<OrganizationInterfaces.Collection[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "668b5607-0db2-49bb-83f8-5f46f1094250",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.Collection[]>;
                res = await this.rest.get<OrganizationInterfaces.Collection[]>(url, options);

                let ret = this.formatResponse(res.result,
                    OrganizationInterfaces.TypeInfo.Collection,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} collectionId
    * @param {string} collectionName
    */
    public async restoreCollection(
        collectionId: string,
        collectionName: string
    ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                collectionId: collectionId
            };

            let queryValues: any = {
                collectionName: collectionName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "668b5607-0db2-49bb-83f8-5f46f1094250",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<boolean>;
                res = await this.rest.update<boolean>(url, options);

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
    * @param {VSSInterfaces.JsonPatchDocument} patchDocument
    * @param {string} collectionId
    */
    public async updateCollection(
        customHeaders: any,
        patchDocument: VSSInterfaces.JsonPatchDocument,
        collectionId: string
    ): Promise<OrganizationInterfaces.Collection> {

        return new Promise<OrganizationInterfaces.Collection>(async (resolve, reject) => {
            let routeValues: any = {
                collectionId: collectionId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "668b5607-0db2-49bb-83f8-5f46f1094250",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.Collection>;
                res = await this.rest.update<OrganizationInterfaces.Collection>(url, patchDocument, options);

                let ret = this.formatResponse(res.result,
                    OrganizationInterfaces.TypeInfo.Collection,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} organizationId
    */
    public async exportOrganizationMigrationBlob(
        organizationId: string
    ): Promise<OrganizationInterfaces.OrganizationMigrationBlob> {

        return new Promise<OrganizationInterfaces.OrganizationMigrationBlob>(async (resolve, reject) => {
            let routeValues: any = {
                organizationId: organizationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "93f69239-28ba-497e-b4d4-33e51e6303c3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.OrganizationMigrationBlob>;
                res = await this.rest.get<OrganizationInterfaces.OrganizationMigrationBlob>(url, options);

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
    * @param {OrganizationInterfaces.OrganizationMigrationBlob} migrationBlob
    */
    public async importOrganizationMigrationBlob(
        migrationBlob: OrganizationInterfaces.OrganizationMigrationBlob
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "93f69239-28ba-497e-b4d4-33e51e6303c3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, migrationBlob, options);

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
    * @param {string} organizationId
    * @param {VSSInterfaces.JsonPatchDocument} patchDocument
    */
    public async updateOrganizationProperties(
        customHeaders: any,
        organizationId: string,
        patchDocument: VSSInterfaces.JsonPatchDocument
    ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                organizationId: organizationId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "103707c6-236d-4434-a0a2-9031fbb65fa6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<boolean>;
                res = await this.rest.update<boolean>(url, patchDocument, options);

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
    * @param {OrganizationInterfaces.Organization} resource
    */
    public async createOrganization(
        resource: OrganizationInterfaces.Organization
    ): Promise<OrganizationInterfaces.Organization> {

        return new Promise<OrganizationInterfaces.Organization>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "95f49097-6cdc-4afe-a039-48b4d4c4cbf7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.Organization>;
                res = await this.rest.create<OrganizationInterfaces.Organization>(url, resource, options);

                let ret = this.formatResponse(res.result,
                    OrganizationInterfaces.TypeInfo.Organization,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} organizationId
    * @param {string[]} propertyNames
    */
    public async getOrganization(
        organizationId: string,
        propertyNames?: string[]
    ): Promise<OrganizationInterfaces.Organization> {

        return new Promise<OrganizationInterfaces.Organization>(async (resolve, reject) => {
            let routeValues: any = {
                organizationId: organizationId
            };

            let queryValues: any = {
                propertyNames: propertyNames && propertyNames.join(","),
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "95f49097-6cdc-4afe-a039-48b4d4c4cbf7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.Organization>;
                res = await this.rest.get<OrganizationInterfaces.Organization>(url, options);

                let ret = this.formatResponse(res.result,
                    OrganizationInterfaces.TypeInfo.Organization,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {OrganizationInterfaces.OrganizationSearchKind} searchKind
    * @param {string} searchValue
    * @param {boolean} isActivated
    */
    public async getOrganizations(
        searchKind: OrganizationInterfaces.OrganizationSearchKind,
        searchValue: string,
        isActivated?: boolean
    ): Promise<OrganizationInterfaces.Organization[]> {

        return new Promise<OrganizationInterfaces.Organization[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                searchKind: searchKind,
                searchValue: searchValue,
                isActivated: isActivated,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "95f49097-6cdc-4afe-a039-48b4d4c4cbf7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.Organization[]>;
                res = await this.rest.get<OrganizationInterfaces.Organization[]>(url, options);

                let ret = this.formatResponse(res.result,
                    OrganizationInterfaces.TypeInfo.Organization,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {VSSInterfaces.JsonPatchDocument} patchDocument
    * @param {string} organizationId
    */
    public async updateOrganization(
        customHeaders: any,
        patchDocument: VSSInterfaces.JsonPatchDocument,
        organizationId: string
    ): Promise<OrganizationInterfaces.Organization> {

        return new Promise<OrganizationInterfaces.Organization>(async (resolve, reject) => {
            let routeValues: any = {
                organizationId: organizationId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "95f49097-6cdc-4afe-a039-48b4d4c4cbf7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.Organization>;
                res = await this.rest.update<OrganizationInterfaces.Organization>(url, patchDocument, options);

                let ret = this.formatResponse(res.result,
                    OrganizationInterfaces.TypeInfo.Organization,
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
    public async getRegions(
    ): Promise<OrganizationInterfaces.Region[]> {

        return new Promise<OrganizationInterfaces.Region[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Organization",
                    "6f84936f-1801-46f6-94fa-1817545d366d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                let res: restm.IRestResponse<OrganizationInterfaces.Region[]>;
                res = await this.rest.get<OrganizationInterfaces.Region[]>(url, options);

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

}
