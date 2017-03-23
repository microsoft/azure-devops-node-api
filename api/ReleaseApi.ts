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
import FormInputInterfaces = require("./interfaces/common/FormInputInterfaces");
import ReleaseInterfaces = require("./interfaces/ReleaseInterfaces");

export interface IReleaseApi extends basem.ClientApiBase {
    getAgentArtifactDefinitions(project: string, releaseId: number): Promise<ReleaseInterfaces.AgentArtifactDefinition[]>;
    getApprovalHistory(project: string, approvalStepId: number): Promise<ReleaseInterfaces.ReleaseApproval>;
    getApproval(project: string, approvalId: number, includeHistory?: boolean): Promise<ReleaseInterfaces.ReleaseApproval>;
    updateReleaseApproval(approval: ReleaseInterfaces.ReleaseApproval, project: string, approvalId: number): Promise<ReleaseInterfaces.ReleaseApproval>;
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: ReleaseInterfaces.ApprovalStatus, releaseIdsFilter?: number[], typeFilter?: ReleaseInterfaces.ApprovalType, top?: number, continuationToken?: number, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, includeMyGroupApprovals?: boolean): Promise<ReleaseInterfaces.ReleaseApproval[]>;
    getReleaseChanges(project: string, releaseId: number, baseReleaseId?: number, top?: number): Promise<ReleaseInterfaces.Change[]>;
    setupContinuousDeployment(configData: ReleaseInterfaces.ContinuousDeploymentSetupData, project: string): Promise<string>;
    getDefinitionEnvironments(project: string, taskGroupId?: string): Promise<ReleaseInterfaces.DefinitionEnvironmentReference[]>;
    createReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Promise<ReleaseInterfaces.ReleaseDefinition>;
    deleteReleaseDefinition(project: string, definitionId: number): Promise<void>;
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): Promise<ReleaseInterfaces.ReleaseDefinition>;
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number): Promise<NodeJS.ReadableStream>;
    getReleaseDefinitions(project: string, searchText?: string, expand?: ReleaseInterfaces.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: ReleaseInterfaces.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[]): Promise<ReleaseInterfaces.ReleaseDefinition[]>;
    getReleaseDefinitionsForArtifactSource(project: string, artifactType: string, artifactSourceId: string, expand?: ReleaseInterfaces.ReleaseDefinitionExpands): Promise<ReleaseInterfaces.ReleaseDefinition[]>;
    updateReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Promise<ReleaseInterfaces.ReleaseDefinition>;
    getDeployments(project: string, definitionId?: number, definitionEnvironmentId?: number, createdBy?: string, minModifiedTime?: Date, maxModifiedTime?: Date, deploymentStatus?: ReleaseInterfaces.DeploymentStatus, operationStatus?: ReleaseInterfaces.DeploymentOperationStatus, latestAttemptsOnly?: boolean, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, top?: number, continuationToken?: number, createdFor?: string): Promise<ReleaseInterfaces.Deployment[]>;
    getDeploymentsForMultipleEnvironments(queryParameters: ReleaseInterfaces.DeploymentQueryParameters, project: string): Promise<ReleaseInterfaces.Deployment[]>;
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number): Promise<ReleaseInterfaces.ReleaseEnvironment>;
    updateReleaseEnvironment(environmentUpdateData: ReleaseInterfaces.ReleaseEnvironmentUpdateMetadata, project: string, releaseId: number, environmentId: number): Promise<ReleaseInterfaces.ReleaseEnvironment>;
    createDefinitionEnvironmentTemplate(template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate, project: string): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<void>;
    getDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    listDefinitionEnvironmentTemplates(project: string): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>;
    createFavorites(favoriteItems: ReleaseInterfaces.FavoriteItem[], project: string, scope: string, identityId?: string): Promise<ReleaseInterfaces.FavoriteItem[]>;
    deleteFavorites(project: string, scope: string, identityId?: string, favoriteItemIds?: string): Promise<void>;
    getFavorites(project: string, scope: string, identityId?: string): Promise<ReleaseInterfaces.FavoriteItem[]>;
    createFolder(folder: ReleaseInterfaces.Folder, project: string, path: string): Promise<ReleaseInterfaces.Folder>;
    deleteFolder(project: string, path: string): Promise<void>;
    getFolders(project: string, path?: string, queryOrder?: ReleaseInterfaces.FolderPathQueryOrder): Promise<ReleaseInterfaces.Folder[]>;
    updateFolder(folder: ReleaseInterfaces.Folder, project: string, path: string): Promise<ReleaseInterfaces.Folder>;
    getReleaseHistory(project: string, releaseId: number): Promise<ReleaseInterfaces.ReleaseRevision[]>;
    getInputValues(query: FormInputInterfaces.InputValuesQuery, project: string): Promise<FormInputInterfaces.InputValuesQuery>;
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId?: number): Promise<NodeJS.ReadableStream>;
    getLogs(project: string, releaseId: number): Promise<NodeJS.ReadableStream>;
    getTaskLog(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number, taskId: number): Promise<NodeJS.ReadableStream>;
    getManualIntervention(project: string, releaseId: number, manualInterventionId: number): Promise<ReleaseInterfaces.ManualIntervention>;
    getManualInterventions(project: string, releaseId: number): Promise<ReleaseInterfaces.ManualIntervention[]>;
    updateManualIntervention(manualInterventionUpdateMetadata: ReleaseInterfaces.ManualInterventionUpdateMetadata, project: string, releaseId: number, manualInterventionId: number): Promise<ReleaseInterfaces.ManualIntervention>;
    getMetrics(project: string, minMetricsTime?: Date): Promise<ReleaseInterfaces.Metric[]>;
    getReleaseProjects(artifactType: string, artifactSourceId: string): Promise<ReleaseInterfaces.ProjectReference[]>;
    getReleases(project?: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: ReleaseInterfaces.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: ReleaseInterfaces.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[]): Promise<ReleaseInterfaces.Release[]>;
    createRelease(releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata, project: string): Promise<ReleaseInterfaces.Release>;
    deleteRelease(project: string, releaseId: number, comment?: string): Promise<void>;
    getRelease(project: string, releaseId: number, includeAllApprovals?: boolean, propertyFilters?: string[]): Promise<ReleaseInterfaces.Release>;
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact?: boolean, definitionEnvironmentIdsFilter?: number[]): Promise<ReleaseInterfaces.ReleaseDefinitionSummary>;
    getReleaseRevision(project: string, releaseId: number, definitionSnapshotRevision: number): Promise<NodeJS.ReadableStream>;
    undeleteRelease(project: string, releaseId: number, comment: string): Promise<void>;
    updateRelease(release: ReleaseInterfaces.Release, project: string, releaseId: number): Promise<ReleaseInterfaces.Release>;
    updateReleaseResource(releaseUpdateMetadata: ReleaseInterfaces.ReleaseUpdateMetadata, project: string, releaseId: number): Promise<ReleaseInterfaces.Release>;
    getReleaseSettings(project: string): Promise<ReleaseInterfaces.ReleaseSettings>;
    updateReleaseSettings(releaseSettings: ReleaseInterfaces.ReleaseSettings, project: string): Promise<ReleaseInterfaces.ReleaseSettings>;
    getDefinitionRevision(project: string, definitionId: number, revision: number): Promise<NodeJS.ReadableStream>;
    getReleaseDefinitionHistory(project: string, definitionId: number): Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]>;
    getSummaryMailSections(project: string, releaseId: number): Promise<ReleaseInterfaces.SummaryMailSection[]>;
    sendSummaryMail(mailMessage: ReleaseInterfaces.MailMessage, project: string, releaseId: number): Promise<void>;
    getSourceBranches(project: string, definitionId: number): Promise<string[]>;
    addDefinitionTag(project: string, releaseDefinitionId: number, tag: string): Promise<string[]>;
    addDefinitionTags(tags: string[], project: string, releaseDefinitionId: number): Promise<string[]>;
    deleteDefinitionTag(project: string, releaseDefinitionId: number, tag: string): Promise<string[]>;
    getDefinitionTags(project: string, releaseDefinitionId: number): Promise<string[]>;
    addReleaseTag(project: string, releaseId: number, tag: string): Promise<string[]>;
    addReleaseTags(tags: string[], project: string, releaseId: number): Promise<string[]>;
    deleteReleaseTag(project: string, releaseId: number, tag: string): Promise<string[]>;
    getReleaseTags(project: string, releaseId: number): Promise<string[]>;
    getTags(project: string): Promise<string[]>;
    getTasks(project: string, releaseId: number, environmentId: number, attemptId?: number): Promise<ReleaseInterfaces.ReleaseTask[]>;
    getTasksForTaskGroup(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number): Promise<ReleaseInterfaces.ReleaseTask[]>;
    getArtifactTypeDefinitions(project: string): Promise<ReleaseInterfaces.ArtifactTypeDefinition[]>;
    getArtifactVersions(project: string, releaseDefinitionId: number): Promise<ReleaseInterfaces.ArtifactVersionQueryResult>;
    getArtifactVersionsForSources(artifacts: ReleaseInterfaces.Artifact[], project: string): Promise<ReleaseInterfaces.ArtifactVersionQueryResult>;
    getReleaseWorkItemsRefs(project: string, releaseId: number, baseReleaseId?: number, top?: number): Promise<ReleaseInterfaces.ReleaseWorkItemRef[]>;
}

export class ReleaseApi extends basem.ClientApiBase implements IReleaseApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Release-api');
    }

    /**
     * Returns the artifact details that automation agent requires
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async getAgentArtifactDefinitions(
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.AgentArtifactDefinition[]> {

        return new Promise<ReleaseInterfaces.AgentArtifactDefinition[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "f2571c27-bf50-4938-b396-32d109ddef26",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.AgentArtifactDefinition[]>;
                res = await this.rest.get<ReleaseInterfaces.AgentArtifactDefinition[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.AgentArtifactDefinition,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} approvalStepId
     */
    public async getApprovalHistory(
        project: string,
        approvalStepId: number
        ): Promise<ReleaseInterfaces.ReleaseApproval> {

        return new Promise<ReleaseInterfaces.ReleaseApproval>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                approvalStepId: approvalStepId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "250c7158-852e-4130-a00f-a0cce9b72d05",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseApproval>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseApproval>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseApproval,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} approvalId
     * @param {boolean} includeHistory
     */
    public async getApproval(
        project: string,
        approvalId: number,
        includeHistory?: boolean
        ): Promise<ReleaseInterfaces.ReleaseApproval> {

        return new Promise<ReleaseInterfaces.ReleaseApproval>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                approvalId: approvalId
            };

            let queryValues: any = {
                includeHistory: includeHistory,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "9328e074-59fb-465a-89d9-b09c82ee5109",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseApproval>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseApproval>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseApproval,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseApproval} approval
     * @param {string} project - Project ID or project name
     * @param {number} approvalId
     */
    public async updateReleaseApproval(
        approval: ReleaseInterfaces.ReleaseApproval,
        project: string,
        approvalId: number
        ): Promise<ReleaseInterfaces.ReleaseApproval> {

        return new Promise<ReleaseInterfaces.ReleaseApproval>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                approvalId: approvalId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "9328e074-59fb-465a-89d9-b09c82ee5109",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseApproval>;
                res = await this.rest.update<ReleaseInterfaces.ReleaseApproval>(url, approval, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseApproval,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} assignedToFilter
     * @param {ReleaseInterfaces.ApprovalStatus} statusFilter
     * @param {number[]} releaseIdsFilter
     * @param {ReleaseInterfaces.ApprovalType} typeFilter
     * @param {number} top
     * @param {number} continuationToken
     * @param {ReleaseInterfaces.ReleaseQueryOrder} queryOrder
     * @param {boolean} includeMyGroupApprovals
     */
    public async getApprovals(
        project: string,
        assignedToFilter?: string,
        statusFilter?: ReleaseInterfaces.ApprovalStatus,
        releaseIdsFilter?: number[],
        typeFilter?: ReleaseInterfaces.ApprovalType,
        top?: number,
        continuationToken?: number,
        queryOrder?: ReleaseInterfaces.ReleaseQueryOrder,
        includeMyGroupApprovals?: boolean
        ): Promise<ReleaseInterfaces.ReleaseApproval[]> {

        return new Promise<ReleaseInterfaces.ReleaseApproval[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                assignedToFilter: assignedToFilter,
                statusFilter: statusFilter,
                releaseIdsFilter: releaseIdsFilter && releaseIdsFilter.join(","),
                typeFilter: typeFilter,
                top: top,
                continuationToken: continuationToken,
                queryOrder: queryOrder,
                includeMyGroupApprovals: includeMyGroupApprovals,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Release",
                    "b47c6458-e73b-47cb-a770-4df1e8813a91",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseApproval[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseApproval[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseApproval,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     */
    public async getReleaseChanges(
        project: string,
        releaseId: number,
        baseReleaseId?: number,
        top?: number
        ): Promise<ReleaseInterfaces.Change[]> {

        return new Promise<ReleaseInterfaces.Change[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            let queryValues: any = {
                baseReleaseId: baseReleaseId,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "8dcf9fe9-ca37-4113-8ee1-37928e98407c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Change[]>;
                res = await this.rest.get<ReleaseInterfaces.Change[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Change,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.ContinuousDeploymentSetupData} configData
     * @param {string} project - Project ID or project name
     */
    public async setupContinuousDeployment(
        configData: ReleaseInterfaces.ContinuousDeploymentSetupData,
        project: string
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Release",
                    "c5788899-1e84-439b-b5f9-dbc10ecffe24",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, configData, options);

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
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     */
    public async getDefinitionEnvironments(
        project: string,
        taskGroupId?: string
        ): Promise<ReleaseInterfaces.DefinitionEnvironmentReference[]> {

        return new Promise<ReleaseInterfaces.DefinitionEnvironmentReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                taskGroupId: taskGroupId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "12b5d21a-f54c-430e-a8c1-7515d196890e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.DefinitionEnvironmentReference[]>;
                res = await this.rest.get<ReleaseInterfaces.DefinitionEnvironmentReference[]>(url, options);

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
     * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     */
    public async createReleaseDefinition(
        releaseDefinition: ReleaseInterfaces.ReleaseDefinition,
        project: string
        ): Promise<ReleaseInterfaces.ReleaseDefinition> {

        return new Promise<ReleaseInterfaces.ReleaseDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinition>;
                res = await this.rest.create<ReleaseInterfaces.ReleaseDefinition>(url, releaseDefinition, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinition,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     */
    public async deleteReleaseDefinition(
        project: string,
        definitionId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                definitionId: definitionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
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
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {string[]} propertyFilters
     */
    public async getReleaseDefinition(
        project: string,
        definitionId: number,
        propertyFilters?: string[]
        ): Promise<ReleaseInterfaces.ReleaseDefinition> {

        return new Promise<ReleaseInterfaces.ReleaseDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                definitionId: definitionId
            };

            let queryValues: any = {
                propertyFilters: propertyFilters && propertyFilters.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinition>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseDefinition>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinition,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} revision
     */
    public async getReleaseDefinitionRevision(
        project: string,
        definitionId: number,
        revision: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                definitionId: definitionId
            };

            let queryValues: any = {
                revision: revision,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} searchText
     * @param {ReleaseInterfaces.ReleaseDefinitionExpands} expand
     * @param {string} artifactType
     * @param {string} artifactSourceId
     * @param {number} top
     * @param {string} continuationToken
     * @param {ReleaseInterfaces.ReleaseDefinitionQueryOrder} queryOrder
     * @param {string} path
     * @param {boolean} isExactNameMatch
     * @param {string[]} tagFilter
     * @param {string[]} propertyFilters
     */
    public async getReleaseDefinitions(
        project: string,
        searchText?: string,
        expand?: ReleaseInterfaces.ReleaseDefinitionExpands,
        artifactType?: string,
        artifactSourceId?: string,
        top?: number,
        continuationToken?: string,
        queryOrder?: ReleaseInterfaces.ReleaseDefinitionQueryOrder,
        path?: string,
        isExactNameMatch?: boolean,
        tagFilter?: string[],
        propertyFilters?: string[]
        ): Promise<ReleaseInterfaces.ReleaseDefinition[]> {

        return new Promise<ReleaseInterfaces.ReleaseDefinition[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                searchText: searchText,
                '$expand': expand,
                artifactType: artifactType,
                artifactSourceId: artifactSourceId,
                '$top': top,
                continuationToken: continuationToken,
                queryOrder: queryOrder,
                path: path,
                isExactNameMatch: isExactNameMatch,
                tagFilter: tagFilter && tagFilter.join(","),
                propertyFilters: propertyFilters && propertyFilters.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinition[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseDefinition[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinition,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} artifactType
     * @param {string} artifactSourceId
     * @param {ReleaseInterfaces.ReleaseDefinitionExpands} expand
     */
    public async getReleaseDefinitionsForArtifactSource(
        project: string,
        artifactType: string,
        artifactSourceId: string,
        expand?: ReleaseInterfaces.ReleaseDefinitionExpands
        ): Promise<ReleaseInterfaces.ReleaseDefinition[]> {

        return new Promise<ReleaseInterfaces.ReleaseDefinition[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                artifactType: artifactType,
                artifactSourceId: artifactSourceId,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinition[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseDefinition[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinition,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     */
    public async updateReleaseDefinition(
        releaseDefinition: ReleaseInterfaces.ReleaseDefinition,
        project: string
        ): Promise<ReleaseInterfaces.ReleaseDefinition> {

        return new Promise<ReleaseInterfaces.ReleaseDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.3",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinition>;
                res = await this.rest.replace<ReleaseInterfaces.ReleaseDefinition>(url, releaseDefinition, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinition,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} definitionEnvironmentId
     * @param {string} createdBy
     * @param {Date} minModifiedTime
     * @param {Date} maxModifiedTime
     * @param {ReleaseInterfaces.DeploymentStatus} deploymentStatus
     * @param {ReleaseInterfaces.DeploymentOperationStatus} operationStatus
     * @param {boolean} latestAttemptsOnly
     * @param {ReleaseInterfaces.ReleaseQueryOrder} queryOrder
     * @param {number} top
     * @param {number} continuationToken
     * @param {string} createdFor
     */
    public async getDeployments(
        project: string,
        definitionId?: number,
        definitionEnvironmentId?: number,
        createdBy?: string,
        minModifiedTime?: Date,
        maxModifiedTime?: Date,
        deploymentStatus?: ReleaseInterfaces.DeploymentStatus,
        operationStatus?: ReleaseInterfaces.DeploymentOperationStatus,
        latestAttemptsOnly?: boolean,
        queryOrder?: ReleaseInterfaces.ReleaseQueryOrder,
        top?: number,
        continuationToken?: number,
        createdFor?: string
        ): Promise<ReleaseInterfaces.Deployment[]> {

        return new Promise<ReleaseInterfaces.Deployment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                definitionId: definitionId,
                definitionEnvironmentId: definitionEnvironmentId,
                createdBy: createdBy,
                minModifiedTime: minModifiedTime,
                maxModifiedTime: maxModifiedTime,
                deploymentStatus: deploymentStatus,
                operationStatus: operationStatus,
                latestAttemptsOnly: latestAttemptsOnly,
                queryOrder: queryOrder,
                '$top': top,
                continuationToken: continuationToken,
                createdFor: createdFor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "b005ef73-cddc-448e-9ba2-5193bf36b19f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Deployment[]>;
                res = await this.rest.get<ReleaseInterfaces.Deployment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Deployment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.DeploymentQueryParameters} queryParameters
     * @param {string} project - Project ID or project name
     */
    public async getDeploymentsForMultipleEnvironments(
        queryParameters: ReleaseInterfaces.DeploymentQueryParameters,
        project: string
        ): Promise<ReleaseInterfaces.Deployment[]> {

        return new Promise<ReleaseInterfaces.Deployment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "b005ef73-cddc-448e-9ba2-5193bf36b19f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Deployment[]>;
                res = await this.rest.create<ReleaseInterfaces.Deployment[]>(url, queryParameters, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Deployment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     */
    public async getReleaseEnvironment(
        project: string,
        releaseId: number,
        environmentId: number
        ): Promise<ReleaseInterfaces.ReleaseEnvironment> {

        return new Promise<ReleaseInterfaces.ReleaseEnvironment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a7e426b1-03dc-48af-9dfe-c98bac612dcb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseEnvironment>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseEnvironment>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseEnvironment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseEnvironmentUpdateMetadata} environmentUpdateData
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     */
    public async updateReleaseEnvironment(
        environmentUpdateData: ReleaseInterfaces.ReleaseEnvironmentUpdateMetadata,
        project: string,
        releaseId: number,
        environmentId: number
        ): Promise<ReleaseInterfaces.ReleaseEnvironment> {

        return new Promise<ReleaseInterfaces.ReleaseEnvironment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a7e426b1-03dc-48af-9dfe-c98bac612dcb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseEnvironment>;
                res = await this.rest.update<ReleaseInterfaces.ReleaseEnvironment>(url, environmentUpdateData, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseEnvironment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate} template
     * @param {string} project - Project ID or project name
     */
    public async createDefinitionEnvironmentTemplate(
        template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate,
        project: string
        ): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate> {

        return new Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Release",
                    "6b03b696-824e-4479-8eb2-6644a51aba89",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
                res = await this.rest.create<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>(url, template, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     */
    public async deleteDefinitionEnvironmentTemplate(
        project: string,
        templateId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                templateId: templateId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Release",
                    "6b03b696-824e-4479-8eb2-6644a51aba89",
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
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     */
    public async getDefinitionEnvironmentTemplate(
        project: string,
        templateId: string
        ): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate> {

        return new Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                templateId: templateId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Release",
                    "6b03b696-824e-4479-8eb2-6644a51aba89",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     */
    public async listDefinitionEnvironmentTemplates(
        project: string
        ): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]> {

        return new Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Release",
                    "6b03b696-824e-4479-8eb2-6644a51aba89",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.FavoriteItem[]} favoriteItems
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     */
    public async createFavorites(
        favoriteItems: ReleaseInterfaces.FavoriteItem[],
        project: string,
        scope: string,
        identityId?: string
        ): Promise<ReleaseInterfaces.FavoriteItem[]> {

        return new Promise<ReleaseInterfaces.FavoriteItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                scope: scope
            };

            let queryValues: any = {
                identityId: identityId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "938f7222-9acb-48fe-b8a3-4eda04597171",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.FavoriteItem[]>;
                res = await this.rest.create<ReleaseInterfaces.FavoriteItem[]>(url, favoriteItems, options);

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
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     * @param {string} favoriteItemIds
     */
    public async deleteFavorites(
        project: string,
        scope: string,
        identityId?: string,
        favoriteItemIds?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                scope: scope
            };

            let queryValues: any = {
                identityId: identityId,
                favoriteItemIds: favoriteItemIds,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "938f7222-9acb-48fe-b8a3-4eda04597171",
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
     * @param {string} project - Project ID or project name
     * @param {string} scope
     * @param {string} identityId
     */
    public async getFavorites(
        project: string,
        scope: string,
        identityId?: string
        ): Promise<ReleaseInterfaces.FavoriteItem[]> {

        return new Promise<ReleaseInterfaces.FavoriteItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                scope: scope
            };

            let queryValues: any = {
                identityId: identityId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "938f7222-9acb-48fe-b8a3-4eda04597171",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.FavoriteItem[]>;
                res = await this.rest.get<ReleaseInterfaces.FavoriteItem[]>(url, options);

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
     * Creates a new folder
     * 
     * @param {ReleaseInterfaces.Folder} folder
     * @param {string} project - Project ID or project name
     * @param {string} path
     */
    public async createFolder(
        folder: ReleaseInterfaces.Folder,
        project: string,
        path: string
        ): Promise<ReleaseInterfaces.Folder> {

        return new Promise<ReleaseInterfaces.Folder>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                path: path
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "f7ddf76d-ce0c-4d68-94ff-becaec5d9dea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Folder>;
                res = await this.rest.create<ReleaseInterfaces.Folder>(url, folder, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Folder,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Deletes a definition folder for given folder name and path and all it's existing definitions
     * 
     * @param {string} project - Project ID or project name
     * @param {string} path
     */
    public async deleteFolder(
        project: string,
        path: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                path: path
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "f7ddf76d-ce0c-4d68-94ff-becaec5d9dea",
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
     * Gets folders
     * 
     * @param {string} project - Project ID or project name
     * @param {string} path
     * @param {ReleaseInterfaces.FolderPathQueryOrder} queryOrder
     */
    public async getFolders(
        project: string,
        path?: string,
        queryOrder?: ReleaseInterfaces.FolderPathQueryOrder
        ): Promise<ReleaseInterfaces.Folder[]> {

        return new Promise<ReleaseInterfaces.Folder[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                path: path
            };

            let queryValues: any = {
                queryOrder: queryOrder,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "f7ddf76d-ce0c-4d68-94ff-becaec5d9dea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Folder[]>;
                res = await this.rest.get<ReleaseInterfaces.Folder[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Folder,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Updates an existing folder at given  existing path
     * 
     * @param {ReleaseInterfaces.Folder} folder
     * @param {string} project - Project ID or project name
     * @param {string} path
     */
    public async updateFolder(
        folder: ReleaseInterfaces.Folder,
        project: string,
        path: string
        ): Promise<ReleaseInterfaces.Folder> {

        return new Promise<ReleaseInterfaces.Folder>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                path: path
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "f7ddf76d-ce0c-4d68-94ff-becaec5d9dea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Folder>;
                res = await this.rest.update<ReleaseInterfaces.Folder>(url, folder, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Folder,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async getReleaseHistory(
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.ReleaseRevision[]> {

        return new Promise<ReleaseInterfaces.ReleaseRevision[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "23f461c8-629a-4144-a076-3054fa5f268a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseRevision[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseRevision[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseRevision,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {FormInputInterfaces.InputValuesQuery} query
     * @param {string} project - Project ID or project name
     */
    public async getInputValues(
        query: FormInputInterfaces.InputValuesQuery,
        project: string
        ): Promise<FormInputInterfaces.InputValuesQuery> {

        return new Promise<FormInputInterfaces.InputValuesQuery>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "71dd499b-317d-45ea-9134-140ea1932b5e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FormInputInterfaces.InputValuesQuery>;
                res = await this.rest.create<FormInputInterfaces.InputValuesQuery>(url, query, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} taskId
     * @param {number} attemptId
     */
    public async getLog(
        project: string,
        releaseId: number,
        environmentId: number,
        taskId: number,
        attemptId?: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                taskId: taskId
            };

            let queryValues: any = {
                attemptId: attemptId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "e71ba1ed-c0a4-4a28-a61f-2dd5f68cf3fd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async getLogs(
        project: string,
        releaseId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Release",
                    "c37fbab5-214b-48e4-a55b-cb6b4f6e4038",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} releaseDeployPhaseId
     * @param {number} taskId
     */
    public async getTaskLog(
        project: string,
        releaseId: number,
        environmentId: number,
        releaseDeployPhaseId: number,
        taskId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                releaseDeployPhaseId: releaseDeployPhaseId,
                taskId: taskId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Release",
                    "17c91af7-09fd-4256-bff1-c24ee4f73bc0",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} manualInterventionId
     */
    public async getManualIntervention(
        project: string,
        releaseId: number,
        manualInterventionId: number
        ): Promise<ReleaseInterfaces.ManualIntervention> {

        return new Promise<ReleaseInterfaces.ManualIntervention>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                manualInterventionId: manualInterventionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "616c46e4-f370-4456-adaa-fbaf79c7b79e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ManualIntervention>;
                res = await this.rest.get<ReleaseInterfaces.ManualIntervention>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ManualIntervention,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async getManualInterventions(
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.ManualIntervention[]> {

        return new Promise<ReleaseInterfaces.ManualIntervention[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "616c46e4-f370-4456-adaa-fbaf79c7b79e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ManualIntervention[]>;
                res = await this.rest.get<ReleaseInterfaces.ManualIntervention[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ManualIntervention,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.ManualInterventionUpdateMetadata} manualInterventionUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} manualInterventionId
     */
    public async updateManualIntervention(
        manualInterventionUpdateMetadata: ReleaseInterfaces.ManualInterventionUpdateMetadata,
        project: string,
        releaseId: number,
        manualInterventionId: number
        ): Promise<ReleaseInterfaces.ManualIntervention> {

        return new Promise<ReleaseInterfaces.ManualIntervention>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                manualInterventionId: manualInterventionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "616c46e4-f370-4456-adaa-fbaf79c7b79e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ManualIntervention>;
                res = await this.rest.update<ReleaseInterfaces.ManualIntervention>(url, manualInterventionUpdateMetadata, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ManualIntervention,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {Date} minMetricsTime
     */
    public async getMetrics(
        project: string,
        minMetricsTime?: Date
        ): Promise<ReleaseInterfaces.Metric[]> {

        return new Promise<ReleaseInterfaces.Metric[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                minMetricsTime: minMetricsTime,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "cd1502bb-3c73-4e11-80a6-d11308dceae5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Metric[]>;
                res = await this.rest.get<ReleaseInterfaces.Metric[]>(url, options);

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
     * @param {string} artifactType
     * @param {string} artifactSourceId
     */
    public async getReleaseProjects(
        artifactType: string,
        artifactSourceId: string
        ): Promise<ReleaseInterfaces.ProjectReference[]> {

        return new Promise<ReleaseInterfaces.ProjectReference[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                artifactType: artifactType,
                artifactSourceId: artifactSourceId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "917ace4a-79d1-45a7-987c-7be4db4268fa",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ProjectReference[]>;
                res = await this.rest.get<ReleaseInterfaces.ProjectReference[]>(url, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} definitionEnvironmentId
     * @param {string} searchText
     * @param {string} createdBy
     * @param {ReleaseInterfaces.ReleaseStatus} statusFilter
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime
     * @param {Date} maxCreatedTime
     * @param {ReleaseInterfaces.ReleaseQueryOrder} queryOrder
     * @param {number} top
     * @param {number} continuationToken
     * @param {ReleaseInterfaces.ReleaseExpands} expand
     * @param {string} artifactTypeId
     * @param {string} sourceId
     * @param {string} artifactVersionId
     * @param {string} sourceBranchFilter
     * @param {boolean} isDeleted
     * @param {string[]} tagFilter
     * @param {string[]} propertyFilters
     */
    public async getReleases(
        project?: string,
        definitionId?: number,
        definitionEnvironmentId?: number,
        searchText?: string,
        createdBy?: string,
        statusFilter?: ReleaseInterfaces.ReleaseStatus,
        environmentStatusFilter?: number,
        minCreatedTime?: Date,
        maxCreatedTime?: Date,
        queryOrder?: ReleaseInterfaces.ReleaseQueryOrder,
        top?: number,
        continuationToken?: number,
        expand?: ReleaseInterfaces.ReleaseExpands,
        artifactTypeId?: string,
        sourceId?: string,
        artifactVersionId?: string,
        sourceBranchFilter?: string,
        isDeleted?: boolean,
        tagFilter?: string[],
        propertyFilters?: string[]
        ): Promise<ReleaseInterfaces.Release[]> {

        return new Promise<ReleaseInterfaces.Release[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                definitionId: definitionId,
                definitionEnvironmentId: definitionEnvironmentId,
                searchText: searchText,
                createdBy: createdBy,
                statusFilter: statusFilter,
                environmentStatusFilter: environmentStatusFilter,
                minCreatedTime: minCreatedTime,
                maxCreatedTime: maxCreatedTime,
                queryOrder: queryOrder,
                '$top': top,
                continuationToken: continuationToken,
                '$expand': expand,
                artifactTypeId: artifactTypeId,
                sourceId: sourceId,
                artifactVersionId: artifactVersionId,
                sourceBranchFilter: sourceBranchFilter,
                isDeleted: isDeleted,
                tagFilter: tagFilter && tagFilter.join(","),
                propertyFilters: propertyFilters && propertyFilters.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Release[]>;
                res = await this.rest.get<ReleaseInterfaces.Release[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Release,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseStartMetadata} releaseStartMetadata
     * @param {string} project - Project ID or project name
     */
    public async createRelease(
        releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata,
        project: string
        ): Promise<ReleaseInterfaces.Release> {

        return new Promise<ReleaseInterfaces.Release>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Release>;
                res = await this.rest.create<ReleaseInterfaces.Release>(url, releaseStartMetadata, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Release,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} comment
     */
    public async deleteRelease(
        project: string,
        releaseId: number,
        comment?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            let queryValues: any = {
                comment: comment,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
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
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {boolean} includeAllApprovals
     * @param {string[]} propertyFilters
     */
    public async getRelease(
        project: string,
        releaseId: number,
        includeAllApprovals?: boolean,
        propertyFilters?: string[]
        ): Promise<ReleaseInterfaces.Release> {

        return new Promise<ReleaseInterfaces.Release>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            let queryValues: any = {
                includeAllApprovals: includeAllApprovals,
                propertyFilters: propertyFilters && propertyFilters.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Release>;
                res = await this.rest.get<ReleaseInterfaces.Release>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Release,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} releaseCount
     * @param {boolean} includeArtifact
     * @param {number[]} definitionEnvironmentIdsFilter
     */
    public async getReleaseDefinitionSummary(
        project: string,
        definitionId: number,
        releaseCount: number,
        includeArtifact?: boolean,
        definitionEnvironmentIdsFilter?: number[]
        ): Promise<ReleaseInterfaces.ReleaseDefinitionSummary> {

        return new Promise<ReleaseInterfaces.ReleaseDefinitionSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                definitionId: definitionId,
                releaseCount: releaseCount,
                includeArtifact: includeArtifact,
                definitionEnvironmentIdsFilter: definitionEnvironmentIdsFilter && definitionEnvironmentIdsFilter.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinitionSummary>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseDefinitionSummary>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinitionSummary,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} definitionSnapshotRevision
     */
    public async getReleaseRevision(
        project: string,
        releaseId: number,
        definitionSnapshotRevision: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            let queryValues: any = {
                definitionSnapshotRevision: definitionSnapshotRevision,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} comment
     */
    public async undeleteRelease(
        project: string,
        releaseId: number,
        comment: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            let queryValues: any = {
                comment: comment,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, options);

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
     * @param {ReleaseInterfaces.Release} release
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async updateRelease(
        release: ReleaseInterfaces.Release,
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.Release> {

        return new Promise<ReleaseInterfaces.Release>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Release>;
                res = await this.rest.replace<ReleaseInterfaces.Release>(url, release, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Release,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseUpdateMetadata} releaseUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async updateReleaseResource(
        releaseUpdateMetadata: ReleaseInterfaces.ReleaseUpdateMetadata,
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.Release> {

        return new Promise<ReleaseInterfaces.Release>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.4",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.Release>;
                res = await this.rest.update<ReleaseInterfaces.Release>(url, releaseUpdateMetadata, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.Release,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     */
    public async getReleaseSettings(
        project: string
        ): Promise<ReleaseInterfaces.ReleaseSettings> {

        return new Promise<ReleaseInterfaces.ReleaseSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "c63c3718-7cfd-41e0-b89b-81c1ca143437",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseSettings>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseSettings>(url, options);

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
     * Updates the release settings
     * 
     * @param {ReleaseInterfaces.ReleaseSettings} releaseSettings
     * @param {string} project - Project ID or project name
     */
    public async updateReleaseSettings(
        releaseSettings: ReleaseInterfaces.ReleaseSettings,
        project: string
        ): Promise<ReleaseInterfaces.ReleaseSettings> {

        return new Promise<ReleaseInterfaces.ReleaseSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "c63c3718-7cfd-41e0-b89b-81c1ca143437",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseSettings>;
                res = await this.rest.replace<ReleaseInterfaces.ReleaseSettings>(url, releaseSettings, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} revision
     */
    public async getDefinitionRevision(
        project: string,
        definitionId: number,
        revision: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                definitionId: definitionId,
                revision: revision
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "258b82e0-9d41-43f3-86d6-fef14ddd44bc",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     */
    public async getReleaseDefinitionHistory(
        project: string,
        definitionId: number
        ): Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]> {

        return new Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                definitionId: definitionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "258b82e0-9d41-43f3-86d6-fef14ddd44bc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinitionRevision[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseDefinitionRevision[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseDefinitionRevision,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async getSummaryMailSections(
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.SummaryMailSection[]> {

        return new Promise<ReleaseInterfaces.SummaryMailSection[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "224e92b2-8d13-4c14-b120-13d877c516f8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.SummaryMailSection[]>;
                res = await this.rest.get<ReleaseInterfaces.SummaryMailSection[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.SummaryMailSection,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ReleaseInterfaces.MailMessage} mailMessage
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async sendSummaryMail(
        mailMessage: ReleaseInterfaces.MailMessage,
        project: string,
        releaseId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "224e92b2-8d13-4c14-b120-13d877c516f8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, mailMessage, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     */
    public async getSourceBranches(
        project: string,
        definitionId: number
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                definitionId: definitionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "0e5def23-78b3-461f-8198-1558f25041c8",
                    routeValues);

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
     * Adds a tag to a definition
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @param {string} tag
     */
    public async addDefinitionTag(
        project: string,
        releaseDefinitionId: number,
        tag: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseDefinitionId: releaseDefinitionId,
                tag: tag
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "3d21b4c8-c32e-45b2-a7cb-770a369012f4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.update<string[]>(url, options);

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
     * Adds multiple tags to a definition
     * 
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     */
    public async addDefinitionTags(
        tags: string[],
        project: string,
        releaseDefinitionId: number
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseDefinitionId: releaseDefinitionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "3d21b4c8-c32e-45b2-a7cb-770a369012f4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.create<string[]>(url, tags, options);

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
     * Deletes a tag from a definition
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @param {string} tag
     */
    public async deleteDefinitionTag(
        project: string,
        releaseDefinitionId: number,
        tag: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseDefinitionId: releaseDefinitionId,
                tag: tag
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "3d21b4c8-c32e-45b2-a7cb-770a369012f4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.del<string[]>(url, options);

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
     * Gets the tags for a definition
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     */
    public async getDefinitionTags(
        project: string,
        releaseDefinitionId: number
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseDefinitionId: releaseDefinitionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "3d21b4c8-c32e-45b2-a7cb-770a369012f4",
                    routeValues);

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
     * Adds a tag to a releaseId
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} tag
     */
    public async addReleaseTag(
        project: string,
        releaseId: number,
        tag: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                tag: tag
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "c5b602b6-d1b3-4363-8a51-94384f78068f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.update<string[]>(url, options);

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
     * Adds tag to a release
     * 
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async addReleaseTags(
        tags: string[],
        project: string,
        releaseId: number
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "c5b602b6-d1b3-4363-8a51-94384f78068f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.create<string[]>(url, tags, options);

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
     * Deletes a tag from a release
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} tag
     */
    public async deleteReleaseTag(
        project: string,
        releaseId: number,
        tag: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                tag: tag
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "c5b602b6-d1b3-4363-8a51-94384f78068f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.del<string[]>(url, options);

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
     * Gets the tags for a release
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public async getReleaseTags(
        project: string,
        releaseId: number
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "c5b602b6-d1b3-4363-8a51-94384f78068f",
                    routeValues);

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
     * @param {string} project - Project ID or project name
     */
    public async getTags(
        project: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "86cee25a-68ba-4ba3-9171-8ad6ffc6df93",
                    routeValues);

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
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     */
    public async getTasks(
        project: string,
        releaseId: number,
        environmentId: number,
        attemptId?: number
        ): Promise<ReleaseInterfaces.ReleaseTask[]> {

        return new Promise<ReleaseInterfaces.ReleaseTask[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId
            };

            let queryValues: any = {
                attemptId: attemptId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "36b276e0-3c70-4320-a63c-1a2e1466a0d1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseTask[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseTask[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseTask,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} releaseDeployPhaseId
     */
    public async getTasksForTaskGroup(
        project: string,
        releaseId: number,
        environmentId: number,
        releaseDeployPhaseId: number
        ): Promise<ReleaseInterfaces.ReleaseTask[]> {

        return new Promise<ReleaseInterfaces.ReleaseTask[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                releaseDeployPhaseId: releaseDeployPhaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "Release",
                    "4259191d-4b0a-4409-9fb3-09f22ab9bc47",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseTask[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseTask[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseTask,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     */
    public async getArtifactTypeDefinitions(
        project: string
        ): Promise<ReleaseInterfaces.ArtifactTypeDefinition[]> {

        return new Promise<ReleaseInterfaces.ArtifactTypeDefinition[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "8efc2a3c-1fc8-4f6d-9822-75e98cecb48f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ArtifactTypeDefinition[]>;
                res = await this.rest.get<ReleaseInterfaces.ArtifactTypeDefinition[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ArtifactTypeDefinition,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     */
    public async getArtifactVersions(
        project: string,
        releaseDefinitionId: number
        ): Promise<ReleaseInterfaces.ArtifactVersionQueryResult> {

        return new Promise<ReleaseInterfaces.ArtifactVersionQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseDefinitionId: releaseDefinitionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "30fc787e-a9e0-4a07-9fbc-3e903aa051d2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ArtifactVersionQueryResult>;
                res = await this.rest.get<ReleaseInterfaces.ArtifactVersionQueryResult>(url, options);

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
     * @param {ReleaseInterfaces.Artifact[]} artifacts
     * @param {string} project - Project ID or project name
     */
    public async getArtifactVersionsForSources(
        artifacts: ReleaseInterfaces.Artifact[],
        project: string
        ): Promise<ReleaseInterfaces.ArtifactVersionQueryResult> {

        return new Promise<ReleaseInterfaces.ArtifactVersionQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "30fc787e-a9e0-4a07-9fbc-3e903aa051d2",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ArtifactVersionQueryResult>;
                res = await this.rest.create<ReleaseInterfaces.ArtifactVersionQueryResult>(url, artifacts, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     */
    public async getReleaseWorkItemsRefs(
        project: string,
        releaseId: number,
        baseReleaseId?: number,
        top?: number
        ): Promise<ReleaseInterfaces.ReleaseWorkItemRef[]> {

        return new Promise<ReleaseInterfaces.ReleaseWorkItemRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            let queryValues: any = {
                baseReleaseId: baseReleaseId,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "Release",
                    "4f165cc0-875c-4768-b148-f12f78769fab",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseWorkItemRef[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseWorkItemRef[]>(url, options);

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
