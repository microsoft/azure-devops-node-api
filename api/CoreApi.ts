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
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import CoreInterfaces = require("./interfaces/CoreInterfaces");
import OperationsInterfaces = require("./interfaces/common/OperationsInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ICoreApi extends basem.ClientApiBase {
    removeProjectAvatar(projectId: string): Promise<void>;
    setProjectAvatar(avatarBlob: CoreInterfaces.ProjectAvatar, projectId: string): Promise<void>;
    createConnectedService(connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string): Promise<CoreInterfaces.WebApiConnectedService>;
    getConnectedServiceDetails(projectId: string, name: string): Promise<CoreInterfaces.WebApiConnectedServiceDetails>;
    getConnectedServices(projectId: string, kind?: CoreInterfaces.ConnectedServiceKind): Promise<CoreInterfaces.WebApiConnectedService[]>;
    createIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string): Promise<void>;
    deleteIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string): Promise<void>;
    getIdentityMru(mruName: string): Promise<VSSInterfaces.IdentityRef[]>;
    updateIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string): Promise<void>;
    getTeamMembersWithExtendedProperties(projectId: string, teamId: string, top?: number, skip?: number): Promise<VSSInterfaces.TeamMember[]>;
    getProcessById(processId: string): Promise<CoreInterfaces.Process>;
    getProcesses(): Promise<CoreInterfaces.Process[]>;
    getProjectCollection(collectionId: string): Promise<CoreInterfaces.TeamProjectCollection>;
    getProjectCollections(top?: number, skip?: number): Promise<CoreInterfaces.TeamProjectCollectionReference[]>;
    getProjectHistoryEntries(minRevision?: number): Promise<CoreInterfaces.ProjectInfo[]>;
    getProject(projectId: string, includeCapabilities?: boolean, includeHistory?: boolean): Promise<CoreInterfaces.TeamProject>;
    getProjects(stateFilter?: any, top?: number, skip?: number, continuationToken?: string, getDefaultTeamImageUrl?: boolean): Promise<CoreInterfaces.TeamProjectReference[]>;
    queueCreateProject(projectToCreate: CoreInterfaces.TeamProject): Promise<OperationsInterfaces.OperationReference>;
    queueDeleteProject(projectId: string): Promise<OperationsInterfaces.OperationReference>;
    updateProject(projectUpdate: CoreInterfaces.TeamProject, projectId: string): Promise<OperationsInterfaces.OperationReference>;
    getProjectProperties(projectId: string, keys?: string[]): Promise<CoreInterfaces.ProjectProperty[]>;
    setProjectProperties(customHeaders: any, projectId: string, patchDocument: VSSInterfaces.JsonPatchDocument): Promise<void>;
    createOrUpdateProxy(proxy: CoreInterfaces.Proxy): Promise<CoreInterfaces.Proxy>;
    deleteProxy(proxyUrl: string, site?: string): Promise<void>;
    getProxies(proxyUrl?: string): Promise<CoreInterfaces.Proxy[]>;
    getAllTeams(mine?: boolean, top?: number, skip?: number, expandIdentity?: boolean): Promise<CoreInterfaces.WebApiTeam[]>;
    createTeam(team: CoreInterfaces.WebApiTeam, projectId: string): Promise<CoreInterfaces.WebApiTeam>;
    deleteTeam(projectId: string, teamId: string): Promise<void>;
    getTeam(projectId: string, teamId: string, expandIdentity?: boolean): Promise<CoreInterfaces.WebApiTeam>;
    getTeams(projectId: string, mine?: boolean, top?: number, skip?: number, expandIdentity?: boolean): Promise<CoreInterfaces.WebApiTeam[]>;
    updateTeam(teamData: CoreInterfaces.WebApiTeam, projectId: string, teamId: string): Promise<CoreInterfaces.WebApiTeam>;
}

export class CoreApi extends basem.ClientApiBase implements ICoreApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Core-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "79134c72-4a58-4b42-976c-04e7115f32bf";

    /**
     * Removes the avatar for the project.
     * 
     * @param {string} projectId - The ID or name of the project.
     */
    public async removeProjectAvatar(
        projectId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "54b2a2a0-859b-4d05-827c-ec4c862f641a",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Sets the avatar for the project.
     * 
     * @param {CoreInterfaces.ProjectAvatar} avatarBlob - The avatar blob data object to upload.
     * @param {string} projectId - The ID or name of the project.
     */
    public async setProjectAvatar(
        avatarBlob: CoreInterfaces.ProjectAvatar,
        projectId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "54b2a2a0-859b-4d05-827c-ec4c862f641a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, avatarBlob, options);

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
     * @param {CoreInterfaces.WebApiConnectedServiceDetails} connectedServiceCreationData
     * @param {string} projectId
     */
    public async createConnectedService(
        connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails,
        projectId: string
        ): Promise<CoreInterfaces.WebApiConnectedService> {

        return new Promise<CoreInterfaces.WebApiConnectedService>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "b4f70219-e18b-42c5-abe3-98b07d35525e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.WebApiConnectedService>;
                res = await this.rest.create<CoreInterfaces.WebApiConnectedService>(url, connectedServiceCreationData, options);

                let ret = this.formatResponse(res.result,
                                              CoreInterfaces.TypeInfo.WebApiConnectedService,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} projectId
     * @param {string} name
     */
    public async getConnectedServiceDetails(
        projectId: string,
        name: string
        ): Promise<CoreInterfaces.WebApiConnectedServiceDetails> {

        return new Promise<CoreInterfaces.WebApiConnectedServiceDetails>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                name: name
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "b4f70219-e18b-42c5-abe3-98b07d35525e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.WebApiConnectedServiceDetails>;
                res = await this.rest.get<CoreInterfaces.WebApiConnectedServiceDetails>(url, options);

                let ret = this.formatResponse(res.result,
                                              CoreInterfaces.TypeInfo.WebApiConnectedServiceDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} projectId
     * @param {CoreInterfaces.ConnectedServiceKind} kind
     */
    public async getConnectedServices(
        projectId: string,
        kind?: CoreInterfaces.ConnectedServiceKind
        ): Promise<CoreInterfaces.WebApiConnectedService[]> {

        return new Promise<CoreInterfaces.WebApiConnectedService[]>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            let queryValues: any = {
                kind: kind,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "b4f70219-e18b-42c5-abe3-98b07d35525e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.WebApiConnectedService[]>;
                res = await this.rest.get<CoreInterfaces.WebApiConnectedService[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CoreInterfaces.TypeInfo.WebApiConnectedService,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     */
    public async createIdentityMru(
        mruData: CoreInterfaces.IdentityData,
        mruName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                mruName: mruName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "5ead0b70-2572-4697-97e9-f341069a783a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, mruData, options);

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
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     */
    public async deleteIdentityMru(
        mruData: CoreInterfaces.IdentityData,
        mruName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                mruName: mruName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "5ead0b70-2572-4697-97e9-f341069a783a",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} mruName
     */
    public async getIdentityMru(
        mruName: string
        ): Promise<VSSInterfaces.IdentityRef[]> {

        return new Promise<VSSInterfaces.IdentityRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                mruName: mruName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "5ead0b70-2572-4697-97e9-f341069a783a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.IdentityRef[]>;
                res = await this.rest.get<VSSInterfaces.IdentityRef[]>(url, options);

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
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     */
    public async updateIdentityMru(
        mruData: CoreInterfaces.IdentityData,
        mruName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                mruName: mruName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "5ead0b70-2572-4697-97e9-f341069a783a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, mruData, options);

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
     * Get a list of members for a specific team.
     * 
     * @param {string} projectId - The name or ID (GUID) of the team project the team belongs to.
     * @param {string} teamId - The name or ID (GUID) of the team .
     * @param {number} top
     * @param {number} skip
     */
    public async getTeamMembersWithExtendedProperties(
        projectId: string,
        teamId: string,
        top?: number,
        skip?: number
        ): Promise<VSSInterfaces.TeamMember[]> {

        return new Promise<VSSInterfaces.TeamMember[]>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                teamId: teamId
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.2",
                    "core",
                    "294c494c-2600-4d7e-b76c-3dd50c3c95be",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.TeamMember[]>;
                res = await this.rest.get<VSSInterfaces.TeamMember[]>(url, options);

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
     * Get a process by ID.
     * 
     * @param {string} processId - ID for a process.
     */
    public async getProcessById(
        processId: string
        ): Promise<CoreInterfaces.Process> {

        return new Promise<CoreInterfaces.Process>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "93878975-88c5-4e6a-8abb-7ddd77a8a7d8",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.Process>;
                res = await this.rest.get<CoreInterfaces.Process>(url, options);

                let ret = this.formatResponse(res.result,
                                              CoreInterfaces.TypeInfo.Process,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of processes.
     * 
     */
    public async getProcesses(
        ): Promise<CoreInterfaces.Process[]> {

        return new Promise<CoreInterfaces.Process[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "93878975-88c5-4e6a-8abb-7ddd77a8a7d8",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.Process[]>;
                res = await this.rest.get<CoreInterfaces.Process[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CoreInterfaces.TypeInfo.Process,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get project collection with the specified id or name.
     * 
     * @param {string} collectionId
     */
    public async getProjectCollection(
        collectionId: string
        ): Promise<CoreInterfaces.TeamProjectCollection> {

        return new Promise<CoreInterfaces.TeamProjectCollection>(async (resolve, reject) => {
            let routeValues: any = {
                collectionId: collectionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.2",
                    "core",
                    "8031090f-ef1d-4af6-85fc-698cd75d42bf",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.TeamProjectCollection>;
                res = await this.rest.get<CoreInterfaces.TeamProjectCollection>(url, options);

                let ret = this.formatResponse(res.result,
                                              CoreInterfaces.TypeInfo.TeamProjectCollection,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get project collection references for this application.
     * 
     * @param {number} top
     * @param {number} skip
     */
    public async getProjectCollections(
        top?: number,
        skip?: number
        ): Promise<CoreInterfaces.TeamProjectCollectionReference[]> {

        return new Promise<CoreInterfaces.TeamProjectCollectionReference[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.2",
                    "core",
                    "8031090f-ef1d-4af6-85fc-698cd75d42bf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.TeamProjectCollectionReference[]>;
                res = await this.rest.get<CoreInterfaces.TeamProjectCollectionReference[]>(url, options);

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
     * Gets the history of changes to the project.
     * 
     * @param {number} minRevision - The minimum revision number to return in the history.
     */
    public async getProjectHistoryEntries(
        minRevision?: number
        ): Promise<CoreInterfaces.ProjectInfo[]> {

        return new Promise<CoreInterfaces.ProjectInfo[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                minRevision: minRevision,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.2",
                    "core",
                    "6488a877-4749-4954-82ea-7340d36be9f2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.ProjectInfo[]>;
                res = await this.rest.get<CoreInterfaces.ProjectInfo[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CoreInterfaces.TypeInfo.ProjectInfo,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get project with the specified id or name, optionally including capabilities.
     * 
     * @param {string} projectId
     * @param {boolean} includeCapabilities - Include capabilities (such as source control) in the team project result (default: false).
     * @param {boolean} includeHistory - Search within renamed projects (that had such name in the past).
     */
    public async getProject(
        projectId: string,
        includeCapabilities?: boolean,
        includeHistory?: boolean
        ): Promise<CoreInterfaces.TeamProject> {

        return new Promise<CoreInterfaces.TeamProject>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            let queryValues: any = {
                includeCapabilities: includeCapabilities,
                includeHistory: includeHistory,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.4",
                    "core",
                    "603fe2ac-9723-48b9-88ad-09305aa6c6e1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.TeamProject>;
                res = await this.rest.get<CoreInterfaces.TeamProject>(url, options);

                let ret = this.formatResponse(res.result,
                                              CoreInterfaces.TypeInfo.TeamProject,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get all projects in the organization that the authenticated user has access to.
     * 
     * @param {any} stateFilter - Filter on team projects in a specific team project state (default: WellFormed).
     * @param {number} top
     * @param {number} skip
     * @param {string} continuationToken
     * @param {boolean} getDefaultTeamImageUrl
     */
    public async getProjects(
        stateFilter?: any,
        top?: number,
        skip?: number,
        continuationToken?: string,
        getDefaultTeamImageUrl?: boolean
        ): Promise<CoreInterfaces.TeamProjectReference[]> {

        return new Promise<CoreInterfaces.TeamProjectReference[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                stateFilter: stateFilter,
                '$top': top,
                '$skip': skip,
                continuationToken: continuationToken,
                getDefaultTeamImageUrl: getDefaultTeamImageUrl,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.4",
                    "core",
                    "603fe2ac-9723-48b9-88ad-09305aa6c6e1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.TeamProjectReference[]>;
                res = await this.rest.get<CoreInterfaces.TeamProjectReference[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CoreInterfaces.TypeInfo.TeamProjectReference,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Queues a project to be created. Use the [GetOperation](../../operations/operations/get) to periodically check for create project status.
     * 
     * @param {CoreInterfaces.TeamProject} projectToCreate - The project to create.
     */
    public async queueCreateProject(
        projectToCreate: CoreInterfaces.TeamProject
        ): Promise<OperationsInterfaces.OperationReference> {

        return new Promise<OperationsInterfaces.OperationReference>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.4",
                    "core",
                    "603fe2ac-9723-48b9-88ad-09305aa6c6e1",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<OperationsInterfaces.OperationReference>;
                res = await this.rest.create<OperationsInterfaces.OperationReference>(url, projectToCreate, options);

                let ret = this.formatResponse(res.result,
                                              OperationsInterfaces.TypeInfo.OperationReference,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Queues a project to be deleted. Use the [GetOperation](../../operations/operations/get) to periodically check for delete project status.
     * 
     * @param {string} projectId - The project id of the project to delete.
     */
    public async queueDeleteProject(
        projectId: string
        ): Promise<OperationsInterfaces.OperationReference> {

        return new Promise<OperationsInterfaces.OperationReference>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.4",
                    "core",
                    "603fe2ac-9723-48b9-88ad-09305aa6c6e1",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<OperationsInterfaces.OperationReference>;
                res = await this.rest.del<OperationsInterfaces.OperationReference>(url, options);

                let ret = this.formatResponse(res.result,
                                              OperationsInterfaces.TypeInfo.OperationReference,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update an existing project's name, abbreviation, description, or restore a project.
     * 
     * @param {CoreInterfaces.TeamProject} projectUpdate - The updates for the project. The state must be set to wellFormed to restore the project.
     * @param {string} projectId - The project id of the project to update.
     */
    public async updateProject(
        projectUpdate: CoreInterfaces.TeamProject,
        projectId: string
        ): Promise<OperationsInterfaces.OperationReference> {

        return new Promise<OperationsInterfaces.OperationReference>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.4",
                    "core",
                    "603fe2ac-9723-48b9-88ad-09305aa6c6e1",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<OperationsInterfaces.OperationReference>;
                res = await this.rest.update<OperationsInterfaces.OperationReference>(url, projectUpdate, options);

                let ret = this.formatResponse(res.result,
                                              OperationsInterfaces.TypeInfo.OperationReference,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a collection of team project properties.
     * 
     * @param {string} projectId - The team project ID.
     * @param {string[]} keys - A comma-delimited string of team project property names. Wildcard characters ("?" and "*") are supported. If no key is specified, all properties will be returned.
     */
    public async getProjectProperties(
        projectId: string,
        keys?: string[]
        ): Promise<CoreInterfaces.ProjectProperty[]> {

        return new Promise<CoreInterfaces.ProjectProperty[]>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            let queryValues: any = {
                keys: keys && keys.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "4976a71a-4487-49aa-8aab-a1eda469037a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.ProjectProperty[]>;
                res = await this.rest.get<CoreInterfaces.ProjectProperty[]>(url, options);

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
     * Create, update, and delete team project properties.
     * 
     * @param {string} projectId - The team project ID.
     * @param {VSSInterfaces.JsonPatchDocument} patchDocument - A JSON Patch document that represents an array of property operations. See RFC 6902 for more details on JSON Patch. The accepted operation verbs are Add and Remove, where Add is used for both creating and updating properties. The path consists of a forward slash and a property name.
     */
    public async setProjectProperties(
        customHeaders: any,
        projectId: string,
        patchDocument: VSSInterfaces.JsonPatchDocument
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.1",
                    "core",
                    "4976a71a-4487-49aa-8aab-a1eda469037a",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {CoreInterfaces.Proxy} proxy
     */
    public async createOrUpdateProxy(
        proxy: CoreInterfaces.Proxy
        ): Promise<CoreInterfaces.Proxy> {

        return new Promise<CoreInterfaces.Proxy>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.2",
                    "core",
                    "ec1f4311-f2b4-4c15-b2b8-8990b80d2908",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.Proxy>;
                res = await this.rest.replace<CoreInterfaces.Proxy>(url, proxy, options);

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
     * @param {string} proxyUrl
     * @param {string} site
     */
    public async deleteProxy(
        proxyUrl: string,
        site?: string
        ): Promise<void> {
        if (proxyUrl == null) {
            throw new TypeError('proxyUrl can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                proxyUrl: proxyUrl,
                site: site,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.2",
                    "core",
                    "ec1f4311-f2b4-4c15-b2b8-8990b80d2908",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} proxyUrl
     */
    public async getProxies(
        proxyUrl?: string
        ): Promise<CoreInterfaces.Proxy[]> {

        return new Promise<CoreInterfaces.Proxy[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                proxyUrl: proxyUrl,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.2",
                    "core",
                    "ec1f4311-f2b4-4c15-b2b8-8990b80d2908",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.Proxy[]>;
                res = await this.rest.get<CoreInterfaces.Proxy[]>(url, options);

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
     * Get a list of all teams.
     * 
     * @param {boolean} mine - If true, then return all teams requesting user is member. Otherwise return all teams user has read access.
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @param {boolean} expandIdentity - A value indicating whether or not to expand Identity information in the result WebApiTeam object.
     */
    public async getAllTeams(
        mine?: boolean,
        top?: number,
        skip?: number,
        expandIdentity?: boolean
        ): Promise<CoreInterfaces.WebApiTeam[]> {

        return new Promise<CoreInterfaces.WebApiTeam[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                '$mine': mine,
                '$top': top,
                '$skip': skip,
                '$expandIdentity': expandIdentity,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.3",
                    "core",
                    "7a4d9ee9-3433-4347-b47a-7a80f1cf307e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.WebApiTeam[]>;
                res = await this.rest.get<CoreInterfaces.WebApiTeam[]>(url, options);

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
     * Create a team in a team project.
     * 
     * @param {CoreInterfaces.WebApiTeam} team - The team data used to create the team.
     * @param {string} projectId - The name or ID (GUID) of the team project in which to create the team.
     */
    public async createTeam(
        team: CoreInterfaces.WebApiTeam,
        projectId: string
        ): Promise<CoreInterfaces.WebApiTeam> {

        return new Promise<CoreInterfaces.WebApiTeam>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.3",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.WebApiTeam>;
                res = await this.rest.create<CoreInterfaces.WebApiTeam>(url, team, options);

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
     * Delete a team.
     * 
     * @param {string} projectId - The name or ID (GUID) of the team project containing the team to delete.
     * @param {string} teamId - The name of ID of the team to delete.
     */
    public async deleteTeam(
        projectId: string,
        teamId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                teamId: teamId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.3",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get a specific team.
     * 
     * @param {string} projectId - The name or ID (GUID) of the team project containing the team.
     * @param {string} teamId - The name or ID (GUID) of the team.
     * @param {boolean} expandIdentity - A value indicating whether or not to expand Identity information in the result WebApiTeam object.
     */
    public async getTeam(
        projectId: string,
        teamId: string,
        expandIdentity?: boolean
        ): Promise<CoreInterfaces.WebApiTeam> {

        return new Promise<CoreInterfaces.WebApiTeam>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                teamId: teamId
            };

            let queryValues: any = {
                '$expandIdentity': expandIdentity,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.3",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.WebApiTeam>;
                res = await this.rest.get<CoreInterfaces.WebApiTeam>(url, options);

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
     * Get a list of teams.
     * 
     * @param {string} projectId
     * @param {boolean} mine - If true return all the teams requesting user is member, otherwise return all the teams user has read access.
     * @param {number} top - Maximum number of teams to return.
     * @param {number} skip - Number of teams to skip.
     * @param {boolean} expandIdentity - A value indicating whether or not to expand Identity information in the result WebApiTeam object.
     */
    public async getTeams(
        projectId: string,
        mine?: boolean,
        top?: number,
        skip?: number,
        expandIdentity?: boolean
        ): Promise<CoreInterfaces.WebApiTeam[]> {

        return new Promise<CoreInterfaces.WebApiTeam[]>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId
            };

            let queryValues: any = {
                '$mine': mine,
                '$top': top,
                '$skip': skip,
                '$expandIdentity': expandIdentity,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.3",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.WebApiTeam[]>;
                res = await this.rest.get<CoreInterfaces.WebApiTeam[]>(url, options);

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
     * Update a team's name and/or description.
     * 
     * @param {CoreInterfaces.WebApiTeam} teamData
     * @param {string} projectId - The name or ID (GUID) of the team project containing the team to update.
     * @param {string} teamId - The name of ID of the team to update.
     */
    public async updateTeam(
        teamData: CoreInterfaces.WebApiTeam,
        projectId: string,
        teamId: string
        ): Promise<CoreInterfaces.WebApiTeam> {

        return new Promise<CoreInterfaces.WebApiTeam>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                teamId: teamId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.1-preview.3",
                    "core",
                    "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<CoreInterfaces.WebApiTeam>;
                res = await this.rest.update<CoreInterfaces.WebApiTeam>(url, teamData, options);

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
