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
import DelegatedAuthorizationInterfaces = require("./interfaces/DelegatedAuthorizationInterfaces");
import IdentitiesInterfaces = require("./interfaces/IdentitiesInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IIdentitiesApi extends basem.ClientApiBase {
    createOrBindWithClaims(sourceIdentity: IdentitiesInterfaces.Identity): Promise<IdentitiesInterfaces.Identity>;
    createGroups(container: any): Promise<IdentitiesInterfaces.Identity[]>;
    deleteGroup(groupId: string): Promise<void>;
    listGroups(scopeIds?: string, recurse?: boolean, deleted?: boolean, properties?: string): Promise<IdentitiesInterfaces.Identity[]>;
    getIdentityChanges(identitySequenceId: number, groupSequenceId: number, scopeId?: string): Promise<IdentitiesInterfaces.ChangedIdentities>;
    getUserIdentityIdsByDomainId(domainId: string): Promise<string[]>;
    readIdentities(descriptors?: string, identityIds?: string, searchFilter?: string, filterValue?: string, queryMembership?: IdentitiesInterfaces.QueryMembership, properties?: string, includeRestrictedVisibility?: boolean, options?: IdentitiesInterfaces.ReadIdentitiesOptions): Promise<IdentitiesInterfaces.Identity[]>;
    readIdentitiesByScope(scopeId: string, queryMembership?: IdentitiesInterfaces.QueryMembership, properties?: string): Promise<IdentitiesInterfaces.Identity[]>;
    readIdentity(identityId: string, queryMembership?: IdentitiesInterfaces.QueryMembership, properties?: string): Promise<IdentitiesInterfaces.Identity>;
    updateIdentities(identities: VSSInterfaces.VssJsonCollectionWrapperV<IdentitiesInterfaces.Identity[]>): Promise<IdentitiesInterfaces.IdentityUpdateData[]>;
    updateIdentity(identity: IdentitiesInterfaces.Identity, identityId: string): Promise<void>;
    createIdentity(frameworkIdentityInfo: IdentitiesInterfaces.FrameworkIdentityInfo): Promise<IdentitiesInterfaces.Identity>;
    readIdentityBatch(batchInfo: IdentitiesInterfaces.IdentityBatchInfo): Promise<IdentitiesInterfaces.Identity[]>;
    getIdentitySnapshot(scopeId: string): Promise<IdentitiesInterfaces.IdentitySnapshot>;
    getMaxSequenceId(): Promise<number>;
    getSelf(): Promise<IdentitiesInterfaces.IdentitySelf>;
    addMember(containerId: string, memberId: string): Promise<boolean>;
    readMember(containerId: string, memberId: string, queryMembership?: IdentitiesInterfaces.QueryMembership): Promise<IdentitiesInterfaces.IdentityDescriptor>;
    readMembers(containerId: string, queryMembership?: IdentitiesInterfaces.QueryMembership): Promise<IdentitiesInterfaces.IdentityDescriptor[]>;
    removeMember(containerId: string, memberId: string): Promise<boolean>;
    readMemberOf(memberId: string, containerId: string, queryMembership?: IdentitiesInterfaces.QueryMembership): Promise<IdentitiesInterfaces.IdentityDescriptor>;
    readMembersOf(memberId: string, queryMembership?: IdentitiesInterfaces.QueryMembership): Promise<IdentitiesInterfaces.IdentityDescriptor[]>;
    createScope(info: IdentitiesInterfaces.CreateScopeInfo, scopeId: string): Promise<IdentitiesInterfaces.IdentityScope>;
    deleteScope(scopeId: string): Promise<void>;
    getScopeById(scopeId: string): Promise<IdentitiesInterfaces.IdentityScope>;
    getScopeByName(scopeName: string): Promise<IdentitiesInterfaces.IdentityScope>;
    renameScope(renameScope: IdentitiesInterfaces.IdentityScope, scopeId: string): Promise<void>;
    getSignoutToken(): Promise<DelegatedAuthorizationInterfaces.AccessTokenResult>;
    getTenant(tenantId: string): Promise<IdentitiesInterfaces.TenantInfo>;
}

export class IdentitiesApi extends basem.ClientApiBase implements IIdentitiesApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Identities-api');
    }

    /**
    * @param {IdentitiesInterfaces.Identity} sourceIdentity
    */
    public async createOrBindWithClaims(
        sourceIdentity: IdentitiesInterfaces.Identity
        ): Promise<IdentitiesInterfaces.Identity> {

        return new Promise<IdentitiesInterfaces.Identity>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "90ddfe71-171c-446c-bf3b-b597cd562afd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.Identity>;
                res = await this.rest.replace<IdentitiesInterfaces.Identity>(url, sourceIdentity, options);

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
    * @param {any} container
    */
    public async createGroups(
        container: any
        ): Promise<IdentitiesInterfaces.Identity[]> {

        return new Promise<IdentitiesInterfaces.Identity[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "5966283b-4196-4d57-9211-1b68f41ec1c2",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.Identity[]>;
                res = await this.rest.create<IdentitiesInterfaces.Identity[]>(url, container, options);

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
    * @param {string} groupId
    */
    public async deleteGroup(
        groupId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                groupId: groupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "5966283b-4196-4d57-9211-1b68f41ec1c2",
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
    * @param {string} scopeIds
    * @param {boolean} recurse
    * @param {boolean} deleted
    * @param {string} properties
    */
    public async listGroups(
        scopeIds?: string,
        recurse?: boolean,
        deleted?: boolean,
        properties?: string
        ): Promise<IdentitiesInterfaces.Identity[]> {

        return new Promise<IdentitiesInterfaces.Identity[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                scopeIds: scopeIds,
                recurse: recurse,
                deleted: deleted,
                properties: properties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "5966283b-4196-4d57-9211-1b68f41ec1c2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.Identity[]>;
                res = await this.rest.get<IdentitiesInterfaces.Identity[]>(url, options);

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
    * @param {number} identitySequenceId
    * @param {number} groupSequenceId
    * @param {string} scopeId
    */
    public async getIdentityChanges(
        identitySequenceId: number,
        groupSequenceId: number,
        scopeId?: string
        ): Promise<IdentitiesInterfaces.ChangedIdentities> {

        return new Promise<IdentitiesInterfaces.ChangedIdentities>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                identitySequenceId: identitySequenceId,
                groupSequenceId: groupSequenceId,
                scopeId: scopeId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "28010c54-d0c0-4c89-a5b0-1c9e188b9fb7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.ChangedIdentities>;
                res = await this.rest.get<IdentitiesInterfaces.ChangedIdentities>(url, options);

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
    * @param {string} domainId
    */
    public async getUserIdentityIdsByDomainId(
        domainId: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                domainId: domainId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "28010c54-d0c0-4c89-a5b0-1c9e188b9fb7",
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
    * @param {string} descriptors
    * @param {string} identityIds
    * @param {string} searchFilter
    * @param {string} filterValue
    * @param {IdentitiesInterfaces.QueryMembership} queryMembership
    * @param {string} properties
    * @param {boolean} includeRestrictedVisibility
    * @param {IdentitiesInterfaces.ReadIdentitiesOptions} options
    */
    public async readIdentities(
        descriptors?: string,
        identityIds?: string,
        searchFilter?: string,
        filterValue?: string,
        queryMembership?: IdentitiesInterfaces.QueryMembership,
        properties?: string,
        includeRestrictedVisibility?: boolean,
        options?: IdentitiesInterfaces.ReadIdentitiesOptions
        ): Promise<IdentitiesInterfaces.Identity[]> {

        return new Promise<IdentitiesInterfaces.Identity[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                descriptors: descriptors,
                identityIds: identityIds,
                searchFilter: searchFilter,
                filterValue: filterValue,
                queryMembership: queryMembership,
                properties: properties,
                includeRestrictedVisibility: includeRestrictedVisibility,
                options: options,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "28010c54-d0c0-4c89-a5b0-1c9e188b9fb7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.Identity[]>;
                res = await this.rest.get<IdentitiesInterfaces.Identity[]>(url, options);

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
    * @param {string} scopeId
    * @param {IdentitiesInterfaces.QueryMembership} queryMembership
    * @param {string} properties
    */
    public async readIdentitiesByScope(
        scopeId: string,
        queryMembership?: IdentitiesInterfaces.QueryMembership,
        properties?: string
        ): Promise<IdentitiesInterfaces.Identity[]> {

        return new Promise<IdentitiesInterfaces.Identity[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                scopeId: scopeId,
                queryMembership: queryMembership,
                properties: properties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "28010c54-d0c0-4c89-a5b0-1c9e188b9fb7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.Identity[]>;
                res = await this.rest.get<IdentitiesInterfaces.Identity[]>(url, options);

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
    * @param {string} identityId
    * @param {IdentitiesInterfaces.QueryMembership} queryMembership
    * @param {string} properties
    */
    public async readIdentity(
        identityId: string,
        queryMembership?: IdentitiesInterfaces.QueryMembership,
        properties?: string
        ): Promise<IdentitiesInterfaces.Identity> {

        return new Promise<IdentitiesInterfaces.Identity>(async (resolve, reject) => {
            let routeValues: any = {
                identityId: identityId
            };

            let queryValues: any = {
                queryMembership: queryMembership,
                properties: properties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "28010c54-d0c0-4c89-a5b0-1c9e188b9fb7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.Identity>;
                res = await this.rest.get<IdentitiesInterfaces.Identity>(url, options);

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
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<IdentitiesInterfaces.Identity[]>} identities
    */
    public async updateIdentities(
        identities: VSSInterfaces.VssJsonCollectionWrapperV<IdentitiesInterfaces.Identity[]>
        ): Promise<IdentitiesInterfaces.IdentityUpdateData[]> {

        return new Promise<IdentitiesInterfaces.IdentityUpdateData[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "28010c54-d0c0-4c89-a5b0-1c9e188b9fb7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentityUpdateData[]>;
                res = await this.rest.replace<IdentitiesInterfaces.IdentityUpdateData[]>(url, identities, options);

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
    * @param {IdentitiesInterfaces.Identity} identity
    * @param {string} identityId
    */
    public async updateIdentity(
        identity: IdentitiesInterfaces.Identity,
        identityId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                identityId: identityId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "28010c54-d0c0-4c89-a5b0-1c9e188b9fb7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, identity, options);

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
    * @param {IdentitiesInterfaces.FrameworkIdentityInfo} frameworkIdentityInfo
    */
    public async createIdentity(
        frameworkIdentityInfo: IdentitiesInterfaces.FrameworkIdentityInfo
        ): Promise<IdentitiesInterfaces.Identity> {

        return new Promise<IdentitiesInterfaces.Identity>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "dd55f0eb-6ea2-4fe4-9ebe-919e7dd1dfb4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.Identity>;
                res = await this.rest.replace<IdentitiesInterfaces.Identity>(url, frameworkIdentityInfo, options);

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
    * @param {IdentitiesInterfaces.IdentityBatchInfo} batchInfo
    */
    public async readIdentityBatch(
        batchInfo: IdentitiesInterfaces.IdentityBatchInfo
        ): Promise<IdentitiesInterfaces.Identity[]> {

        return new Promise<IdentitiesInterfaces.Identity[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "299e50df-fe45-4d3a-8b5b-a5836fac74dc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.Identity[]>;
                res = await this.rest.create<IdentitiesInterfaces.Identity[]>(url, batchInfo, options);

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
    * @param {string} scopeId
    */
    public async getIdentitySnapshot(
        scopeId: string
        ): Promise<IdentitiesInterfaces.IdentitySnapshot> {

        return new Promise<IdentitiesInterfaces.IdentitySnapshot>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "d56223df-8ccd-45c9-89b4-eddf692400d7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentitySnapshot>;
                res = await this.rest.get<IdentitiesInterfaces.IdentitySnapshot>(url, options);

                let ret = this.formatResponse(res.result,
                                              IdentitiesInterfaces.TypeInfo.IdentitySnapshot,
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
    public async getMaxSequenceId(
        ): Promise<number> {

        return new Promise<number>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "e4a70778-cb2c-4e85-b7cc-3f3c7ae2d408",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<number>;
                res = await this.rest.get<number>(url, options);

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
    public async getSelf(
        ): Promise<IdentitiesInterfaces.IdentitySelf> {

        return new Promise<IdentitiesInterfaces.IdentitySelf>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "4bb02b5b-c120-4be2-b68e-21f7c50a4b82",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentitySelf>;
                res = await this.rest.get<IdentitiesInterfaces.IdentitySelf>(url, options);

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
    * @param {string} containerId
    * @param {string} memberId
    */
    public async addMember(
        containerId: string,
        memberId: string
        ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                containerId: containerId,
                memberId: memberId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "8ba35978-138e-41f8-8963-7b1ea2c5f775",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<boolean>;
                res = await this.rest.replace<boolean>(url, options);

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
    * @param {string} containerId
    * @param {string} memberId
    * @param {IdentitiesInterfaces.QueryMembership} queryMembership
    */
    public async readMember(
        containerId: string,
        memberId: string,
        queryMembership?: IdentitiesInterfaces.QueryMembership
        ): Promise<IdentitiesInterfaces.IdentityDescriptor> {

        return new Promise<IdentitiesInterfaces.IdentityDescriptor>(async (resolve, reject) => {
            let routeValues: any = {
                containerId: containerId,
                memberId: memberId
            };

            let queryValues: any = {
                queryMembership: queryMembership,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "8ba35978-138e-41f8-8963-7b1ea2c5f775",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentityDescriptor>;
                res = await this.rest.get<IdentitiesInterfaces.IdentityDescriptor>(url, options);

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
    * @param {string} containerId
    * @param {IdentitiesInterfaces.QueryMembership} queryMembership
    */
    public async readMembers(
        containerId: string,
        queryMembership?: IdentitiesInterfaces.QueryMembership
        ): Promise<IdentitiesInterfaces.IdentityDescriptor[]> {

        return new Promise<IdentitiesInterfaces.IdentityDescriptor[]>(async (resolve, reject) => {
            let routeValues: any = {
                containerId: containerId
            };

            let queryValues: any = {
                queryMembership: queryMembership,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "8ba35978-138e-41f8-8963-7b1ea2c5f775",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentityDescriptor[]>;
                res = await this.rest.get<IdentitiesInterfaces.IdentityDescriptor[]>(url, options);

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
    * @param {string} containerId
    * @param {string} memberId
    */
    public async removeMember(
        containerId: string,
        memberId: string
        ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                containerId: containerId,
                memberId: memberId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "8ba35978-138e-41f8-8963-7b1ea2c5f775",
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
    * @param {string} memberId
    * @param {string} containerId
    * @param {IdentitiesInterfaces.QueryMembership} queryMembership
    */
    public async readMemberOf(
        memberId: string,
        containerId: string,
        queryMembership?: IdentitiesInterfaces.QueryMembership
        ): Promise<IdentitiesInterfaces.IdentityDescriptor> {

        return new Promise<IdentitiesInterfaces.IdentityDescriptor>(async (resolve, reject) => {
            let routeValues: any = {
                memberId: memberId,
                containerId: containerId
            };

            let queryValues: any = {
                queryMembership: queryMembership,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "22865b02-9e4a-479e-9e18-e35b8803b8a0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentityDescriptor>;
                res = await this.rest.get<IdentitiesInterfaces.IdentityDescriptor>(url, options);

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
    * @param {string} memberId
    * @param {IdentitiesInterfaces.QueryMembership} queryMembership
    */
    public async readMembersOf(
        memberId: string,
        queryMembership?: IdentitiesInterfaces.QueryMembership
        ): Promise<IdentitiesInterfaces.IdentityDescriptor[]> {

        return new Promise<IdentitiesInterfaces.IdentityDescriptor[]>(async (resolve, reject) => {
            let routeValues: any = {
                memberId: memberId
            };

            let queryValues: any = {
                queryMembership: queryMembership,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "22865b02-9e4a-479e-9e18-e35b8803b8a0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentityDescriptor[]>;
                res = await this.rest.get<IdentitiesInterfaces.IdentityDescriptor[]>(url, options);

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
    * @param {IdentitiesInterfaces.CreateScopeInfo} info
    * @param {string} scopeId
    */
    public async createScope(
        info: IdentitiesInterfaces.CreateScopeInfo,
        scopeId: string
        ): Promise<IdentitiesInterfaces.IdentityScope> {

        return new Promise<IdentitiesInterfaces.IdentityScope>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "4e11e2bf-1e79-4eb5-8f34-a6337bd0de38",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentityScope>;
                res = await this.rest.replace<IdentitiesInterfaces.IdentityScope>(url, info, options);

                let ret = this.formatResponse(res.result,
                                              IdentitiesInterfaces.TypeInfo.IdentityScope,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeId
    */
    public async deleteScope(
        scopeId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "4e11e2bf-1e79-4eb5-8f34-a6337bd0de38",
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
    * @param {string} scopeId
    */
    public async getScopeById(
        scopeId: string
        ): Promise<IdentitiesInterfaces.IdentityScope> {

        return new Promise<IdentitiesInterfaces.IdentityScope>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "4e11e2bf-1e79-4eb5-8f34-a6337bd0de38",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentityScope>;
                res = await this.rest.get<IdentitiesInterfaces.IdentityScope>(url, options);

                let ret = this.formatResponse(res.result,
                                              IdentitiesInterfaces.TypeInfo.IdentityScope,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeName
    */
    public async getScopeByName(
        scopeName: string
        ): Promise<IdentitiesInterfaces.IdentityScope> {

        return new Promise<IdentitiesInterfaces.IdentityScope>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                scopeName: scopeName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "4e11e2bf-1e79-4eb5-8f34-a6337bd0de38",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.IdentityScope>;
                res = await this.rest.get<IdentitiesInterfaces.IdentityScope>(url, options);

                let ret = this.formatResponse(res.result,
                                              IdentitiesInterfaces.TypeInfo.IdentityScope,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {IdentitiesInterfaces.IdentityScope} renameScope
    * @param {string} scopeId
    */
    public async renameScope(
        renameScope: IdentitiesInterfaces.IdentityScope,
        scopeId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                scopeId: scopeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "4e11e2bf-1e79-4eb5-8f34-a6337bd0de38",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, renameScope, options);

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
    public async getSignoutToken(
        ): Promise<DelegatedAuthorizationInterfaces.AccessTokenResult> {

        return new Promise<DelegatedAuthorizationInterfaces.AccessTokenResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "be39e83c-7529-45e9-9c67-0410885880da",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DelegatedAuthorizationInterfaces.AccessTokenResult>;
                res = await this.rest.get<DelegatedAuthorizationInterfaces.AccessTokenResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              DelegatedAuthorizationInterfaces.TypeInfo.AccessTokenResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} tenantId
    */
    public async getTenant(
        tenantId: string
        ): Promise<IdentitiesInterfaces.TenantInfo> {

        return new Promise<IdentitiesInterfaces.TenantInfo>(async (resolve, reject) => {
            let routeValues: any = {
                tenantId: tenantId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "IMS",
                    "5f0a1723-2e2c-4c31-8cae-002d01bdd592",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<IdentitiesInterfaces.TenantInfo>;
                res = await this.rest.get<IdentitiesInterfaces.TenantInfo>(url, options);

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
