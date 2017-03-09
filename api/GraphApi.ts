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
    getDescriptorById(id: string, isMasterId?: boolean): Promise<GraphInterfaces.SubjectDescriptor>;
    createGroup(creationContext: GraphInterfaces.GraphGroupCreationContext, scopeDescriptor?: string, groupDescriptors?: GraphInterfaces.SubjectDescriptor[]): Promise<GraphInterfaces.GraphGroup>;
    deleteGroup(groupDescriptor: string): Promise<void>;
    getGroup(groupDescriptor: string): Promise<GraphInterfaces.GraphGroup>;
    getGroups(scopeDescriptor?: string, subjectTypes?: string[]): Promise<GraphInterfaces.GraphGroup[]>;
    updateGroup(customHeaders: any, groupDescriptor: string, patchDocument: VSSInterfaces.JsonPatchDocument): Promise<GraphInterfaces.GraphGroup>;
    addMembership(subjectDescriptor: string, containerDescriptor: string): Promise<GraphInterfaces.GraphMembership>;
    checkMembership(subjectDescriptor: string, containerDescriptor: string): Promise<void>;
    getMembership(subjectDescriptor: string, containerDescriptor: string): Promise<GraphInterfaces.GraphMembership>;
    removeMembership(subjectDescriptor: string, containerDescriptor: string): Promise<void>;
    getMemberships(subjectDescriptor: string, direction?: string): Promise<GraphInterfaces.GraphMembership[]>;
    createScope(creationContext: GraphInterfaces.GraphScopeCreationContext, scopeDescriptor?: string): Promise<GraphInterfaces.GraphScope>;
    deleteScope(scopeDescriptor: string): Promise<void>;
    getScope(scopeDescriptor: string): Promise<GraphInterfaces.GraphScope>;
    updateScope(customHeaders: any, scopeDescriptor: string, patchDocument: VSSInterfaces.JsonPatchDocument): Promise<void>;
    lookupSubjects(subjectLookup: GraphInterfaces.GraphSubjectLookup): Promise<GraphInterfaces.GraphSubject[]>;
    createUser(creationContext: GraphInterfaces.GraphUserCreationContext, groupDescriptors?: GraphInterfaces.SubjectDescriptor[]): Promise<GraphInterfaces.GraphUser>;
    deleteUser(userDescriptor: string): Promise<void>;
    getUser(userDescriptor: string): Promise<GraphInterfaces.GraphUser>;
    getUsers(subjectTypes?: string[]): Promise<GraphInterfaces.GraphUser[]>;
}

export class GraphApi extends basem.ClientApiBase implements IGraphApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Graph-api');
    }

    /**
    * @param {string} id
    * @param {boolean} isMasterId
    */
    public async getDescriptorById(
        id: string,
        isMasterId?: boolean
        ): Promise<GraphInterfaces.SubjectDescriptor> {

        return new Promise<GraphInterfaces.SubjectDescriptor>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                isMasterId: isMasterId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "graph",
                    "048aee0a-7072-4cde-ab73-7af77b1e0b4e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GraphInterfaces.SubjectDescriptor>;
                res = await this.rest.get<GraphInterfaces.SubjectDescriptor>(url, options);

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
    * The body of the request must be a derived type of GraphGroupCreationContext which contains a group reference. A group reference must either:  1. uniquely identify a group that exists in the graph of the instance's identity provider , such as Azure Active Directory (AAD) or Microsoft account (MSA), for a hosted VS Team Services account, or Active Directory (AD), for a TFS server. Use one of these supported creation contexts: - originId(e.g.the AAD object ID) [GraphGroupOriginIdCreationContext] - principalName(e.g.the AAD group principal name or the Microsoft account name) [GraphGroupPrincipalNameCreationContext]  2. Uniquely identify a group that exists in a hosted VS Team Services account and you want to restore that group. Use GraphGroupVstsCreationContext and fill only one of the following peroperties: - id (to reference a specific VS Team Services group in the restore case only) - descriptors (to reference a specific VS Team Services group in the restore case only)  3. Specify properties that should be used to create a new Team Foundation group. Use the GraphGroupVstsCreationContext  - displayName [required] - description - optional test to help understand the pupose of the group - id - optionally specify the internal Guid - descriptor - optionally specify the sid at creation time
    * 
    * @param {GraphInterfaces.GraphGroupCreationContext} creationContext - The subset of the full graph group used to uniquely find the graph subject in an external provider.
    * @param {string} scopeDescriptor
    * @param {GraphInterfaces.SubjectDescriptor[]} groupDescriptors - A comma separated list of descriptors referencing groups you want the graph group to join
    */
    public async createGroup(
        creationContext: GraphInterfaces.GraphGroupCreationContext,
        scopeDescriptor?: string,
        groupDescriptors?: GraphInterfaces.SubjectDescriptor[]
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
                    "3.2-preview.1",
                    "graph",
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
    * This call makes the group disabled and by default removes all members. If the includeMemberships=false flag is set, the memberships within this group are not evaluated and provide no permissions. Calls to GET .../groups/{} will return the group with disabled marked true. Other GET calls, which may return multiple groups, can control whether or not deleted groups should be returned using the disabled flag, which defaults to false.
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
                    "3.2-preview.1",
                    "graph",
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
    * This endpoint returns a result for any descriptor that has ever been valid in the system, even if the group has since been deleted or has had all their memberships deleted. The current validity of the group is indicated through its disabled property, which is omitted when false.
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
                    "3.2-preview.1",
                    "graph",
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
    * @param {string} scopeDescriptor
    * @param {string[]} subjectTypes
    */
    public async getGroups(
        scopeDescriptor?: string,
        subjectTypes?: string[]
        ): Promise<GraphInterfaces.GraphGroup[]> {

        return new Promise<GraphInterfaces.GraphGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                scopeDescriptor: scopeDescriptor,
                subjectTypes: subjectTypes && subjectTypes.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "graph",
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
    * Update the fields of a VS Team Services group.  Currently limited to only changing the description and account name.
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
                    "3.2-preview.1",
                    "graph",
                    "ebbe6af8-0b91-4c13-8cf1-777c14858188",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
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
    * Create a new membership between two eligible members
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
                    "3.2-preview.1",
                    "graph",
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
    * This method will search for a requested membership and return 200 if the membership is found.
    * 
    * @param {string} subjectDescriptor - The group or user that is a child of the relationship.
    * @param {string} containerDescriptor - The group that is the parent in the relationship.
    */
    public async checkMembership(
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
                    "3.2-preview.1",
                    "graph",
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
    * This method will search for a requested membership and return the membership if found.
    * 
    * @param {string} subjectDescriptor - A descriptor to the member in the relationship.
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
                    "3.2-preview.1",
                    "graph",
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
    * Deletes a membership between to members of the graph.
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
                    "3.2-preview.1",
                    "graph",
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
    * Get all the memberships where this descriptor is a member in the relationship by default. To get relationships where the descriptor is a container, use the optional parameter direction with a value of down. Scopes are not supported in this method yet.
    * 
    * @param {string} subjectDescriptor - Fetch all direct memberships of this descriptor.
    * @param {string} direction - Defaults to up.
    */
    public async getMemberships(
        subjectDescriptor: string,
        direction?: string
        ): Promise<GraphInterfaces.GraphMembership[]> {

        return new Promise<GraphInterfaces.GraphMembership[]>(async (resolve, reject) => {
            let routeValues: any = {
                subjectDescriptor: subjectDescriptor
            };

            let queryValues: any = {
                direction: direction,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "graph",
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
                    "3.2-preview.1",
                    "graph",
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
                    "3.2-preview.1",
                    "graph",
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
                    "3.2-preview.1",
                    "graph",
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
                    "3.2-preview.1",
                    "graph",
                    "21b5fea7-2513-41d0-af78-b8cdb0f328bb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
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
    * @param {GraphInterfaces.GraphSubjectLookup} subjectLookup
    */
    public async lookupSubjects(
        subjectLookup: GraphInterfaces.GraphSubjectLookup
        ): Promise<GraphInterfaces.GraphSubject[]> {

        return new Promise<GraphInterfaces.GraphSubject[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "graph",
                    "4dd4d168-11f2-48c4-83e8-756fa0de027c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GraphInterfaces.GraphSubject[]>;
                res = await this.rest.create<GraphInterfaces.GraphSubject[]>(url, subjectLookup, options);

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
    * The body of the request must be a derived type of GraphUserCreationContext which contains a user reference. The user reference must uniquely identify a user that exists in the graph of the instance's identity provider, such as Azure Active Directory (AAD) or Microsoft Account (MSA), for a hosted VS Team Services account, or Active Directory (AD), for a TFS server. The properties supported for each user reference include: - originId(e.g.the AAD object ID) [GraphUserOriginIdCreationContext] - principalName(e.g.the AAD user principal name or the Microsoft account name) [GraphUserPrincipalNameCreationContext] - onPremisesSecurityIdentifier(e.g.the AD security identifier)  [GraphUserOriginIdCreationContext] - id (optional, if you want the ID to be a particular GUID)  If the user to be added corresponds to a user that was previously deleted, then that user will be restored. If the user was deleted with includeMemberships=false, they will have their previous memberships upon completion of the subsequent add request.
    * 
    * @param {GraphInterfaces.GraphUserCreationContext} creationContext - The subset of the full graph user used to uniquely find the graph subject in an external provider.
    * @param {GraphInterfaces.SubjectDescriptor[]} groupDescriptors - A comma separated list of descriptors of groups you want the graph user to join
    */
    public async createUser(
        creationContext: GraphInterfaces.GraphUserCreationContext,
        groupDescriptors?: GraphInterfaces.SubjectDescriptor[]
        ): Promise<GraphInterfaces.GraphUser> {

        return new Promise<GraphInterfaces.GraphUser>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                groupDescriptors: groupDescriptors && groupDescriptors.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GraphInterfaces.GraphUser>;
                res = await this.rest.create<GraphInterfaces.GraphUser>(url, creationContext, options);

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
    * This is a soft delete. Calls to GET .../users/{persistentId} will return the user with disabled marked true. Other GET calls, which may return multiple users, can control whether or not deleted users should be returned using the disabled flag, which defaults to false.
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
                    "3.2-preview.1",
                    "graph",
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
    * @param {string} userDescriptor
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
                    "3.2-preview.1",
                    "graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GraphInterfaces.GraphUser>;
                res = await this.rest.get<GraphInterfaces.GraphUser>(url, options);

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
    * Gets all users in the current scope (usually organization or account). The optional parameters are used to filter down the returned results. May truncate exceptionally large result sets. Returned results are in no guaranteed order.
    * 
    * @param {string[]} subjectTypes - A comma separated list of user subject subtypes to reduce the retrieved results, e.g. Microsoft.IdentityModel.Claims.ClaimsIdentity>
    */
    public async getUsers(
        subjectTypes?: string[]
        ): Promise<GraphInterfaces.GraphUser[]> {

        return new Promise<GraphInterfaces.GraphUser[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                subjectTypes: subjectTypes && subjectTypes.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "graph",
                    "005e26ec-6b77-4e4f-a986-b3827bf241f5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<GraphInterfaces.GraphUser[]>;
                res = await this.rest.get<GraphInterfaces.GraphUser[]>(url, options);

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
