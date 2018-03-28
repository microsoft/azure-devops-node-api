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
import GraphInterfaces = require("./interfaces/GraphInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IGraphApi extends basem.ClientApiBase {
    getCachePolicies(): Promise<GraphInterfaces.GraphCachePolicies>;
    getDescriptor(storageKey: string): Promise<GraphInterfaces.GraphDescriptorResult>;
    getGlobalExtendedProperties(batch: GraphInterfaces.GraphGlobalExtendedPropertyBatch): Promise<{ [key: string] : any; }>;
    writeGlobalExtendedProperties(identityProperties: { [key: string] : any; }): Promise<void>;
    createGroup(creationContext: GraphInterfaces.GraphGroupCreationContext, scopeDescriptor?: string, groupDescriptors?: string[]): Promise<GraphInterfaces.GraphGroup>;
    deleteGroup(groupDescriptor: string): Promise<void>;
    findGroupsBySearchFactor(searchFactor: GraphInterfaces.GraphMemberSearchFactor, searchValue?: string, forceDomainQualification?: boolean): Promise<GraphInterfaces.GraphGroup[]>;
    getGroup(groupDescriptor: string): Promise<GraphInterfaces.GraphGroup>;
    updateGroup(customHeaders: any, groupDescriptor: string, patchDocument: VSSInterfaces.JsonPatchDocument): Promise<GraphInterfaces.GraphGroup>;
    lookupMembers(memberLookup: GraphInterfaces.GraphSubjectLookup): Promise<{ [key: string] : GraphInterfaces.GraphMember; }>;
    findMembersBySearchFactor(searchFactor: GraphInterfaces.GraphMemberSearchFactor, searchValue?: string, forceDomainQualification?: boolean): Promise<GraphInterfaces.GraphMember[]>;
    getMemberByCuid(memberCuid: string): Promise<GraphInterfaces.GraphMember>;
    getMemberByDescriptor(memberDescriptor: string): Promise<GraphInterfaces.GraphMember>;
    addMembership(subjectDescriptor: string, containerDescriptor: string): Promise<GraphInterfaces.GraphMembership>;
    checkMembershipExistence(subjectDescriptor: string, containerDescriptor: string): Promise<void>;
    getMembership(subjectDescriptor: string, containerDescriptor: string): Promise<GraphInterfaces.GraphMembership>;
    removeMembership(subjectDescriptor: string, containerDescriptor: string): Promise<void>;
    listMemberships(subjectDescriptor: string, direction?: GraphInterfaces.GraphTraversalDirection, depth?: number): Promise<GraphInterfaces.GraphMembership[]>;
    getMembershipState(subjectDescriptor: string): Promise<GraphInterfaces.GraphMembershipState>;
    traverseMemberships(subjectDescriptor: string, direction?: GraphInterfaces.GraphTraversalDirection, depth?: number): Promise<GraphInterfaces.GraphMembershipTraversal>;
    createScope(creationContext: GraphInterfaces.GraphScopeCreationContext, scopeDescriptor?: string): Promise<GraphInterfaces.GraphScope>;
    deleteScope(scopeDescriptor: string): Promise<void>;
    getScope(scopeDescriptor: string): Promise<GraphInterfaces.GraphScope>;
    updateScope(customHeaders: any, scopeDescriptor: string, patchDocument: VSSInterfaces.JsonPatchDocument): Promise<void>;
    getIdentityShardingState(): Promise<GraphInterfaces.IdentityShardingState>;
    getStorageKey(subjectDescriptor: string): Promise<GraphInterfaces.GraphStorageKeyResult>;
    lookupSubjects(subjectLookup: GraphInterfaces.GraphSubjectLookup): Promise<{ [key: string] : GraphInterfaces.GraphSubject; }>;
    getSubject(subjectDescriptor: string): Promise<GraphInterfaces.GraphSubject>;
    createUser(creationContext: GraphInterfaces.GraphUserCreationContext, groupDescriptors?: string[]): Promise<GraphInterfaces.GraphUser>;
    deleteUser(userDescriptor: string): Promise<void>;
    findUsersBySearchFactor(searchFactor: GraphInterfaces.GraphMemberSearchFactor, searchValue?: string, forceDomainQualification?: boolean): Promise<GraphInterfaces.GraphUser[]>;
    getClaimsUserByIdentityDescriptor(claimsUserIdentityDescriptor: string): Promise<GraphInterfaces.GraphUser>;
    getCuidBasedUserByLegacyDescriptor(cuidBasedUserLegacyDescriptor: string): Promise<GraphInterfaces.GraphUser>;
    getUser(userDescriptor: string): Promise<GraphInterfaces.GraphUser>;
}

export class GraphApi extends basem.ClientApiBase implements IGraphApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Graph-api', options);
    }

    /**
     */
    public async getCachePolicies(
        ): Promise<GraphInterfaces.GraphCachePolicies> {

        return new Promise<GraphInterfaces.GraphCachePolicies>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "beb83272-b415-48e8-ac1e-a9b805760739",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphCachePolicies>;
                res = await this.rest.get<GraphInterfaces.GraphCachePolicies>(url, options);

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
     * Resolve a storage key to a descriptor
     * 
     * @param {string} storageKey - Storage key of the subject (user, group, scope, etc.) to resolve
     */
    public async getDescriptor(
        storageKey: string
        ): Promise<GraphInterfaces.GraphDescriptorResult> {

        return new Promise<GraphInterfaces.GraphDescriptorResult>(async (resolve, reject) => {
            let routeValues: any = {
                storageKey: storageKey
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "048aee0a-7072-4cde-ab73-7af77b1e0b4e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphDescriptorResult>;
                res = await this.rest.get<GraphInterfaces.GraphDescriptorResult>(url, options);

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
     * @param {GraphInterfaces.GraphGlobalExtendedPropertyBatch} batch
     */
    public async getGlobalExtendedProperties(
        batch: GraphInterfaces.GraphGlobalExtendedPropertyBatch
        ): Promise<{ [key: string] : any; }> {

        return new Promise<{ [key: string] : any; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "de5a3b9c-0d60-455a-b405-4bb8f0954d3c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ [key: string] : any; }>;
                res = await this.rest.create<{ [key: string] : any; }>(url, batch, options);

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
     * @param {{ [key: string] : any; }} identityProperties
     */
    public async writeGlobalExtendedProperties(
        identityProperties: { [key: string] : any; }
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "de5a3b9c-0d60-455a-b405-4bb8f0954d3c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, identityProperties, options);

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
     * Create a new VSTS group or materialize an existing AAD group.
     * 
     * @param {GraphInterfaces.GraphGroupCreationContext} creationContext - The subset of the full graph group used to uniquely find the graph subject in an external provider.
     * @param {string} scopeDescriptor - A descriptor referencing the scope (collection, project) in which the group should be created. If omitted, will be created in the scope of the enclosing account or organization. Valid only for VSTS groups.
     * @param {string[]} groupDescriptors - A comma separated list of descriptors referencing groups you want the graph group to join
     */
    public async createGroup(
        creationContext: GraphInterfaces.GraphGroupCreationContext,
        scopeDescriptor?: string,
        groupDescriptors?: string[]
        ): Promise<GraphInterfaces.GraphGroup> {

        return new Promise<GraphInterfaces.GraphGroup>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                scopeDescriptor: scopeDescriptor,
                groupDescriptors: groupDescriptors && groupDescriptors.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphGroup>;
                res = await this.rest.create<GraphInterfaces.GraphGroup>(url, creationContext, options);

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
     * Removes a VSTS group from all of its parent groups.
     * 
     * @param {string} groupDescriptor - The descriptor of the group to delete.
     */
    public async deleteGroup(
        groupDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                groupDescriptor: groupDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
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
     * This endpoint returns a result for any group that has ever been valid in the system, even if the group has since been deleted or has had all their memberships deleted. The current validity of the group is indicated through its disabled property, which is omitted when false.
     * 
     * @param {GraphInterfaces.GraphMemberSearchFactor} searchFactor - The search factor for what it is that you are searching for
     * @param {string} searchValue - The value of the search factor
     * @param {boolean} forceDomainQualification - In cases that you are searching for principle name, this parameter will specify that system should force the principle name being domain qualified
     */
    public async findGroupsBySearchFactor(
        searchFactor: GraphInterfaces.GraphMemberSearchFactor,
        searchValue?: string,
        forceDomainQualification?: boolean
        ): Promise<GraphInterfaces.GraphGroup[]> {

        return new Promise<GraphInterfaces.GraphGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                searchFactor: searchFactor,
                searchValue: searchValue,
                forceDomainQualification: forceDomainQualification,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphGroup[]>;
                res = await this.rest.get<GraphInterfaces.GraphGroup[]>(url, options);

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
     * Get a group by its descriptor.
     * 
     * @param {string} groupDescriptor - The descriptor of the desired graph group.
     */
    public async getGroup(
        groupDescriptor: string
        ): Promise<GraphInterfaces.GraphGroup> {

        return new Promise<GraphInterfaces.GraphGroup>(async (resolve, reject) => {
            let routeValues: any = {
                groupDescriptor: groupDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphGroup>;
                res = await this.rest.get<GraphInterfaces.GraphGroup>(url, options);

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
     * Update the properties of a VSTS group.
     * 
     * @param {string} groupDescriptor - The descriptor of the group to modify.
     * @param {VSSInterfaces.JsonPatchDocument} patchDocument - The JSON+Patch document containing the fields to alter.
     */
    public async updateGroup(
        customHeaders: any,
        groupDescriptor: string,
        patchDocument: VSSInterfaces.JsonPatchDocument
        ): Promise<GraphInterfaces.GraphGroup> {

        return new Promise<GraphInterfaces.GraphGroup>(async (resolve, reject) => {
            let routeValues: any = {
                groupDescriptor: groupDescriptor
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GraphInterfaces.GraphGroup>;
                res = await this.rest.update<GraphInterfaces.GraphGroup>(url, patchDocument, options);

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
     * @param {GraphInterfaces.GraphSubjectLookup} memberLookup
     */
    public async lookupMembers(
        memberLookup: GraphInterfaces.GraphSubjectLookup
        ): Promise<{ [key: string] : GraphInterfaces.GraphMember; }> {

        return new Promise<{ [key: string] : GraphInterfaces.GraphMember; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "3d74d524-ae3d-4d24-a9a7-f8a5cf82347a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ [key: string] : GraphInterfaces.GraphMember; }>;
                res = await this.rest.create<{ [key: string] : GraphInterfaces.GraphMember; }>(url, memberLookup, options);

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
     * This endpoint returns a result for any member that has ever been valid in the system, even if the member has since been deleted or has had all their memberships deleted. The current validity of the member is indicated through its disabled property, which is omitted when false.
     * 
     * @param {GraphInterfaces.GraphMemberSearchFactor} searchFactor - The search factor for what it is that you are searching for
     * @param {string} searchValue - The value of the search factor
     * @param {boolean} forceDomainQualification - In cases that you are searching for principle name, this parameter will specify that system should force the principle name being domain qualified
     */
    public async findMembersBySearchFactor(
        searchFactor: GraphInterfaces.GraphMemberSearchFactor,
        searchValue?: string,
        forceDomainQualification?: boolean
        ): Promise<GraphInterfaces.GraphMember[]> {

        return new Promise<GraphInterfaces.GraphMember[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                searchFactor: searchFactor,
                searchValue: searchValue,
                forceDomainQualification: forceDomainQualification,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "8b9ecdb2-b752-485a-8418-cc15cf12ee07",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMember[]>;
                res = await this.rest.get<GraphInterfaces.GraphMember[]>(url, options);

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
     * This endpoint returns a result for any member that has ever been valid in the system, even if the member has since been deleted or has had all their memberships deleted. The current validity of the member is indicated through its disabled property, which is omitted when false.
     * 
     * @param {string} memberCuid - The Consistently Unique Identifier of the desired member.
     */
    public async getMemberByCuid(
        memberCuid: string
        ): Promise<GraphInterfaces.GraphMember> {

        return new Promise<GraphInterfaces.GraphMember>(async (resolve, reject) => {
            let routeValues: any = {
                memberCuid: memberCuid
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "42939f1e-03ad-4ae9-9013-40f717a49d89",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMember>;
                res = await this.rest.get<GraphInterfaces.GraphMember>(url, options);

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
     * This endpoint returns a result for any member that has ever been valid in the system, even if the member has since been deleted or has had all their memberships deleted. The current validity of the member is indicated through its disabled property, which is omitted when false.
     * 
     * @param {string} memberDescriptor - The descriptor of the desired member.
     */
    public async getMemberByDescriptor(
        memberDescriptor: string
        ): Promise<GraphInterfaces.GraphMember> {

        return new Promise<GraphInterfaces.GraphMember>(async (resolve, reject) => {
            let routeValues: any = {
                memberDescriptor: memberDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "b9af63a7-5db6-4af8-aae7-387f775ea9c6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMember>;
                res = await this.rest.get<GraphInterfaces.GraphMember>(url, options);

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
     * Create a new membership between a container and subject.
     * 
     * @param {string} subjectDescriptor - A descriptor to a group or user that can be the child subject in the relationship.
     * @param {string} containerDescriptor - A descriptor to a group that can be the container in the relationship.
     */
    public async addMembership(
        subjectDescriptor: string,
        containerDescriptor: string
        ): Promise<GraphInterfaces.GraphMembership> {

        return new Promise<GraphInterfaces.GraphMembership>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor,
                containerDescriptor: containerDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "3fd2e6ca-fb30-443a-b579-95b19ed0934c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembership>;
                res = await this.rest.replace<GraphInterfaces.GraphMembership>(url, options);

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
     * Check to see if a membership relationship between a container and subject exists.
     * 
     * @param {string} subjectDescriptor - The group or user that is a child subject of the relationship.
     * @param {string} containerDescriptor - The group that is the container in the relationship.
     */
    public async checkMembershipExistence(
        subjectDescriptor: string,
        containerDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor,
                containerDescriptor: containerDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "3fd2e6ca-fb30-443a-b579-95b19ed0934c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.head<void>(url, options);

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
     * Get a membership relationship between a container and subject.
     * 
     * @param {string} subjectDescriptor - A descriptor to the child subject in the relationship.
     * @param {string} containerDescriptor - A descriptor to the container in the relationship.
     */
    public async getMembership(
        subjectDescriptor: string,
        containerDescriptor: string
        ): Promise<GraphInterfaces.GraphMembership> {

        return new Promise<GraphInterfaces.GraphMembership>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor,
                containerDescriptor: containerDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "3fd2e6ca-fb30-443a-b579-95b19ed0934c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembership>;
                res = await this.rest.get<GraphInterfaces.GraphMembership>(url, options);

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
     * Deletes a membership between a container and subject.
     * 
     * @param {string} subjectDescriptor - A descriptor to a group or user that is the child subject in the relationship.
     * @param {string} containerDescriptor - A descriptor to a group that is the container in the relationship.
     */
    public async removeMembership(
        subjectDescriptor: string,
        containerDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor,
                containerDescriptor: containerDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "3fd2e6ca-fb30-443a-b579-95b19ed0934c",
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
     * Get all the memberships where this descriptor is a member in the relationship.
     * 
     * @param {string} subjectDescriptor - Fetch all direct memberships of this descriptor.
     * @param {GraphInterfaces.GraphTraversalDirection} direction - Defaults to Up.
     * @param {number} depth - The maximum number of edges to traverse up or down the membership tree. Currently the only supported value is '1'.
     */
    public async listMemberships(
        subjectDescriptor: string,
        direction?: GraphInterfaces.GraphTraversalDirection,
        depth?: number
        ): Promise<GraphInterfaces.GraphMembership[]> {

        return new Promise<GraphInterfaces.GraphMembership[]>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            let queryValues: any = {
                direction: direction,
                depth: depth,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "e34b6394-6b30-4435-94a9-409a5eef3e31",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembership[]>;
                res = await this.rest.get<GraphInterfaces.GraphMembership[]>(url, options);

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
     * Check whether a subject is active or inactive.
     * 
     * @param {string} subjectDescriptor - Descriptor of the subject (user, group, scope, etc.) to check state of
     */
    public async getMembershipState(
        subjectDescriptor: string
        ): Promise<GraphInterfaces.GraphMembershipState> {

        return new Promise<GraphInterfaces.GraphMembershipState>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "1ffe5c94-1144-4191-907b-d0211cad36a8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembershipState>;
                res = await this.rest.get<GraphInterfaces.GraphMembershipState>(url, options);

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
     * Traverse memberships of the given subject descriptor.
     * 
     * @param {string} subjectDescriptor - Fetch the descendants/ancestors of this descriptor depending on direction.
     * @param {GraphInterfaces.GraphTraversalDirection} direction - The default value is Up.
     * @param {number} depth - The default value is '1'.
     */
    public async traverseMemberships(
        subjectDescriptor: string,
        direction?: GraphInterfaces.GraphTraversalDirection,
        depth?: number
        ): Promise<GraphInterfaces.GraphMembershipTraversal> {

        return new Promise<GraphInterfaces.GraphMembershipTraversal>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            let queryValues: any = {
                direction: direction,
                depth: depth,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "5d59d874-746f-4f9b-9459-0e571f1ded8c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphMembershipTraversal>;
                res = await this.rest.get<GraphInterfaces.GraphMembershipTraversal>(url, options);

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
     * @param {GraphInterfaces.GraphScopeCreationContext} creationContext
     * @param {string} scopeDescriptor
     */
    public async createScope(
        creationContext: GraphInterfaces.GraphScopeCreationContext,
        scopeDescriptor?: string
        ): Promise<GraphInterfaces.GraphScope> {

        return new Promise<GraphInterfaces.GraphScope>(async (resolve, reject) => {
            let routeValues: any = {
                scopeDescriptor: scopeDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "21b5fea7-2513-41d0-af78-b8cdb0f328bb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphScope>;
                res = await this.rest.create<GraphInterfaces.GraphScope>(url, creationContext, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphScope,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeDescriptor
     */
    public async deleteScope(
        scopeDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                scopeDescriptor: scopeDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "21b5fea7-2513-41d0-af78-b8cdb0f328bb",
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
     * Get a scope identified by its descriptor
     * 
     * @param {string} scopeDescriptor - A descriptor that uniquely identifies a scope.
     */
    public async getScope(
        scopeDescriptor: string
        ): Promise<GraphInterfaces.GraphScope> {

        return new Promise<GraphInterfaces.GraphScope>(async (resolve, reject) => {
            let routeValues: any = {
                scopeDescriptor: scopeDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "21b5fea7-2513-41d0-af78-b8cdb0f328bb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphScope>;
                res = await this.rest.get<GraphInterfaces.GraphScope>(url, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphScope,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeDescriptor
     * @param {VSSInterfaces.JsonPatchDocument} patchDocument
     */
    public async updateScope(
        customHeaders: any,
        scopeDescriptor: string,
        patchDocument: VSSInterfaces.JsonPatchDocument
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                scopeDescriptor: scopeDescriptor
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "21b5fea7-2513-41d0-af78-b8cdb0f328bb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, patchDocument, options);

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
    public async getIdentityShardingState(
        ): Promise<GraphInterfaces.IdentityShardingState> {

        return new Promise<GraphInterfaces.IdentityShardingState>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "706e2a05-eb8a-4417-b599-2713b5b3e0a6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.IdentityShardingState>;
                res = await this.rest.get<GraphInterfaces.IdentityShardingState>(url, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.IdentityShardingState,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Resolve a descriptor to a storage key.
     * 
     * @param {string} subjectDescriptor
     */
    public async getStorageKey(
        subjectDescriptor: string
        ): Promise<GraphInterfaces.GraphStorageKeyResult> {

        return new Promise<GraphInterfaces.GraphStorageKeyResult>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "eb85f8cc-f0f6-4264-a5b1-ffe2e4d4801f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphStorageKeyResult>;
                res = await this.rest.get<GraphInterfaces.GraphStorageKeyResult>(url, options);

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
     * Resolve descriptors to users, groups or scopes (Subjects) in a batch.
     * 
     * @param {GraphInterfaces.GraphSubjectLookup} subjectLookup - A list of descriptors that specifies a subset of subjects to retrieve. Each descriptor uniquely identifies the subject across all instance scopes, but only at a single point in time.
     */
    public async lookupSubjects(
        subjectLookup: GraphInterfaces.GraphSubjectLookup
        ): Promise<{ [key: string] : GraphInterfaces.GraphSubject; }> {

        return new Promise<{ [key: string] : GraphInterfaces.GraphSubject; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "4dd4d168-11f2-48c4-83e8-756fa0de027c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ [key: string] : GraphInterfaces.GraphSubject; }>;
                res = await this.rest.create<{ [key: string] : GraphInterfaces.GraphSubject; }>(url, subjectLookup, options);

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
     * @param {string} subjectDescriptor
     */
    public async getSubject(
        subjectDescriptor: string
        ): Promise<GraphInterfaces.GraphSubject> {

        return new Promise<GraphInterfaces.GraphSubject>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "1d44a2ac-4f8a-459e-83c2-1c92626fb9c6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphSubject>;
                res = await this.rest.get<GraphInterfaces.GraphSubject>(url, options);

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
     * Materialize an existing AAD or MSA user into the VSTS account.
     * 
     * @param {GraphInterfaces.GraphUserCreationContext} creationContext - The subset of the full graph user used to uniquely find the graph subject in an external provider.
     * @param {string[]} groupDescriptors - A comma separated list of descriptors of groups you want the graph user to join
     */
    public async createUser(
        creationContext: GraphInterfaces.GraphUserCreationContext,
        groupDescriptors?: string[]
        ): Promise<GraphInterfaces.GraphUser> {

        return new Promise<GraphInterfaces.GraphUser>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                groupDescriptors: groupDescriptors && groupDescriptors.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphUser>;
                res = await this.rest.create<GraphInterfaces.GraphUser>(url, creationContext, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphUser,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Disables a user.
     * 
     * @param {string} userDescriptor - The descriptor of the user to delete.
     */
    public async deleteUser(
        userDescriptor: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                userDescriptor: userDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
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
     * This endpoint returns a result for any user that has ever been valid in the system, even if the user has since been deleted or has had all their memberships deleted. The current validity of the user is indicated through its disabled property, which is omitted when false.
     * 
     * @param {GraphInterfaces.GraphMemberSearchFactor} searchFactor - The search factor for what it is that you are searching for
     * @param {string} searchValue - The value of the search factor
     * @param {boolean} forceDomainQualification - In cases that you are searching for principle name, this parameter will specify that system should force the principle name being domain qualified
     */
    public async findUsersBySearchFactor(
        searchFactor: GraphInterfaces.GraphMemberSearchFactor,
        searchValue?: string,
        forceDomainQualification?: boolean
        ): Promise<GraphInterfaces.GraphUser[]> {

        return new Promise<GraphInterfaces.GraphUser[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                searchFactor: searchFactor,
                searchValue: searchValue,
                forceDomainQualification: forceDomainQualification,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphUser[]>;
                res = await this.rest.get<GraphInterfaces.GraphUser[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphUser,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} claimsUserIdentityDescriptor
     */
    public async getClaimsUserByIdentityDescriptor(
        claimsUserIdentityDescriptor: string
        ): Promise<GraphInterfaces.GraphUser> {

        return new Promise<GraphInterfaces.GraphUser>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                claimsUserIdentityDescriptor: claimsUserIdentityDescriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphUser>;
                res = await this.rest.get<GraphInterfaces.GraphUser>(url, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphUser,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} cuidBasedUserLegacyDescriptor
     */
    public async getCuidBasedUserByLegacyDescriptor(
        cuidBasedUserLegacyDescriptor: string
        ): Promise<GraphInterfaces.GraphUser> {

        return new Promise<GraphInterfaces.GraphUser>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                cuidBasedUserLegacyDescriptor: cuidBasedUserLegacyDescriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphUser>;
                res = await this.rest.get<GraphInterfaces.GraphUser>(url, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphUser,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a user by its descriptor.
     * 
     * @param {string} userDescriptor - The descriptor of the desired user.
     */
    public async getUser(
        userDescriptor: string
        ): Promise<GraphInterfaces.GraphUser> {

        return new Promise<GraphInterfaces.GraphUser>(async (resolve, reject) => {
            let routeValues: any = {
                userDescriptor: userDescriptor
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "Graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GraphInterfaces.GraphUser>;
                res = await this.rest.get<GraphInterfaces.GraphUser>(url, options);

                let ret = this.formatResponse(res.result,
                                              GraphInterfaces.TypeInfo.GraphUser,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
