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
import FormInputInterfaces = require("./interfaces/common/FormInputInterfaces");
import ReleaseInterfaces = require("./interfaces/ReleaseInterfaces");

export interface IReleaseApi extends basem.ClientApiBase {
    getAgentArtifactDefinitions(project: string, releaseId: number): Promise<ReleaseInterfaces.AgentArtifactDefinition[]>;
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: ReleaseInterfaces.ApprovalStatus, releaseIdsFilter?: number[], typeFilter?: ReleaseInterfaces.ApprovalType, top?: number, continuationToken?: number, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, includeMyGroupApprovals?: boolean): Promise<ReleaseInterfaces.ReleaseApproval[]>;
    getApprovalHistory(project: string, approvalStepId: number): Promise<ReleaseInterfaces.ReleaseApproval>;
    getApproval(project: string, approvalId: number, includeHistory?: boolean): Promise<ReleaseInterfaces.ReleaseApproval>;
    updateReleaseApproval(approval: ReleaseInterfaces.ReleaseApproval, project: string, approvalId: number): Promise<ReleaseInterfaces.ReleaseApproval>;
    updateReleaseApprovals(approvals: ReleaseInterfaces.ReleaseApproval[], project: string): Promise<ReleaseInterfaces.ReleaseApproval[]>;
    getTaskAttachmentContent(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string, recordId: string, type: string, name: string): Promise<NodeJS.ReadableStream>;
    getReleaseTaskAttachmentContent(project: string, releaseId: number, environmentId: number, attemptId: number, planId: string, timelineId: string, recordId: string, type: string, name: string): Promise<NodeJS.ReadableStream>;
    getTaskAttachments(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string, type: string): Promise<ReleaseInterfaces.ReleaseTaskAttachment[]>;
    getReleaseTaskAttachments(project: string, releaseId: number, environmentId: number, attemptId: number, planId: string, type: string): Promise<ReleaseInterfaces.ReleaseTaskAttachment[]>;
    getAutoTriggerIssues(artifactType: string, sourceId: string, artifactVersionId: string, project?: string): Promise<ReleaseInterfaces.AutoTriggerIssue[]>;
    getDeploymentBadge(projectId: string, releaseDefinitionId: number, environmentId: number, branchName?: string): Promise<string>;
    getReleaseChanges(project: string, releaseId: number, baseReleaseId?: number, top?: number, artifactAlias?: string): Promise<ReleaseInterfaces.Change[]>;
    getDefinitionEnvironments(project: string, taskGroupId?: string, propertyFilters?: string[]): Promise<ReleaseInterfaces.DefinitionEnvironmentReference[]>;
    createReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Promise<ReleaseInterfaces.ReleaseDefinition>;
    deleteReleaseDefinition(project: string, definitionId: number, comment?: string, forceDelete?: boolean): Promise<void>;
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): Promise<ReleaseInterfaces.ReleaseDefinition>;
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number): Promise<NodeJS.ReadableStream>;
    getReleaseDefinitions(project: string, searchText?: string, expand?: ReleaseInterfaces.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: ReleaseInterfaces.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[], definitionIdFilter?: string[], isDeleted?: boolean, searchTextContainsFolderName?: boolean): Promise<ReleaseInterfaces.ReleaseDefinition[]>;
    undeleteReleaseDefinition(releaseDefinitionUndeleteParameter: ReleaseInterfaces.ReleaseDefinitionUndeleteParameter, project: string, definitionId: number): Promise<ReleaseInterfaces.ReleaseDefinition>;
    updateReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Promise<ReleaseInterfaces.ReleaseDefinition>;
    getDeployments(project: string, definitionId?: number, definitionEnvironmentId?: number, createdBy?: string, minModifiedTime?: Date, maxModifiedTime?: Date, deploymentStatus?: ReleaseInterfaces.DeploymentStatus, operationStatus?: ReleaseInterfaces.DeploymentOperationStatus, latestAttemptsOnly?: boolean, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, top?: number, continuationToken?: number, createdFor?: string, minStartedTime?: Date, maxStartedTime?: Date, sourceBranch?: string): Promise<ReleaseInterfaces.Deployment[]>;
    getDeploymentsForMultipleEnvironments(queryParameters: ReleaseInterfaces.DeploymentQueryParameters, project: string): Promise<ReleaseInterfaces.Deployment[]>;
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number): Promise<ReleaseInterfaces.ReleaseEnvironment>;
    updateReleaseEnvironment(environmentUpdateData: ReleaseInterfaces.ReleaseEnvironmentUpdateMetadata, project: string, releaseId: number, environmentId: number): Promise<ReleaseInterfaces.ReleaseEnvironment>;
    createDefinitionEnvironmentTemplate(template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate, project: string): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<void>;
    getDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    listDefinitionEnvironmentTemplates(project: string, isDeleted?: boolean): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>;
    undeleteReleaseDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    createFavorites(favoriteItems: ReleaseInterfaces.FavoriteItem[], project: string, scope: string, identityId?: string): Promise<ReleaseInterfaces.FavoriteItem[]>;
    deleteFavorites(project: string, scope: string, identityId?: string, favoriteItemIds?: string): Promise<void>;
    getFavorites(project: string, scope: string, identityId?: string): Promise<ReleaseInterfaces.FavoriteItem[]>;
    getFlightAssignments(flightName?: string): Promise<string[]>;
    createFolder(folder: ReleaseInterfaces.Folder, project: string, path?: string): Promise<ReleaseInterfaces.Folder>;
    deleteFolder(project: string, path: string): Promise<void>;
    getFolders(project: string, path?: string, queryOrder?: ReleaseInterfaces.FolderPathQueryOrder): Promise<ReleaseInterfaces.Folder[]>;
    updateFolder(folder: ReleaseInterfaces.Folder, project: string, path: string): Promise<ReleaseInterfaces.Folder>;
    updateGates(gateUpdateMetadata: ReleaseInterfaces.GateUpdateMetadata, project: string, gateStepId: number): Promise<ReleaseInterfaces.ReleaseGates>;
    getReleaseHistory(project: string, releaseId: number): Promise<ReleaseInterfaces.ReleaseRevision[]>;
    getInputValues(query: FormInputInterfaces.InputValuesQuery, project: string): Promise<FormInputInterfaces.InputValuesQuery>;
    getIssues(project: string, buildId: number, sourceId?: string): Promise<ReleaseInterfaces.AutoTriggerIssue[]>;
    getGateLog(project: string, releaseId: number, environmentId: number, gateId: number, taskId: number): Promise<NodeJS.ReadableStream>;
    getLogs(project: string, releaseId: number): Promise<NodeJS.ReadableStream>;
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId?: number): Promise<NodeJS.ReadableStream>;
    getTaskLog2(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string, taskId: number, startLine?: number, endLine?: number): Promise<NodeJS.ReadableStream>;
    getTaskLog(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number, taskId: number, startLine?: number, endLine?: number): Promise<NodeJS.ReadableStream>;
    getManualIntervention(project: string, releaseId: number, manualInterventionId: number): Promise<ReleaseInterfaces.ManualIntervention>;
    getManualInterventions(project: string, releaseId: number): Promise<ReleaseInterfaces.ManualIntervention[]>;
    updateManualIntervention(manualInterventionUpdateMetadata: ReleaseInterfaces.ManualInterventionUpdateMetadata, project: string, releaseId: number, manualInterventionId: number): Promise<ReleaseInterfaces.ManualIntervention>;
    getMetrics(project: string, minMetricsTime?: Date): Promise<ReleaseInterfaces.Metric[]>;
    getReleaseProjects(artifactType: string, artifactSourceId: string): Promise<ReleaseInterfaces.ProjectReference[]>;
    getReleases(project?: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: ReleaseInterfaces.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: ReleaseInterfaces.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[], releaseIdFilter?: number[], path?: string): Promise<ReleaseInterfaces.Release[]>;
    createRelease(releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata, project: string): Promise<ReleaseInterfaces.Release>;
    deleteRelease(project: string, releaseId: number, comment?: string): Promise<void>;
    getRelease(project: string, releaseId: number, approvalFilters?: ReleaseInterfaces.ApprovalFilters, propertyFilters?: string[], expand?: ReleaseInterfaces.SingleReleaseExpands, topGateRecords?: number): Promise<ReleaseInterfaces.Release>;
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
    getTasksForTaskGroup(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number): Promise<ReleaseInterfaces.ReleaseTask[]>;
    getTasks2(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string): Promise<ReleaseInterfaces.ReleaseTask[]>;
    getTasks(project: string, releaseId: number, environmentId: number, attemptId?: number): Promise<ReleaseInterfaces.ReleaseTask[]>;
    getArtifactTypeDefinitions(project: string): Promise<ReleaseInterfaces.ArtifactTypeDefinition[]>;
    getArtifactVersions(project: string, releaseDefinitionId: number): Promise<ReleaseInterfaces.ArtifactVersionQueryResult>;
    getArtifactVersionsForSources(artifacts: ReleaseInterfaces.Artifact[], project: string): Promise<ReleaseInterfaces.ArtifactVersionQueryResult>;
    getReleaseWorkItemsRefs(project: string, releaseId: number, baseReleaseId?: number, top?: number, artifactAlias?: string): Promise<ReleaseInterfaces.ReleaseWorkItemRef[]>;
}

export class ReleaseApi extends basem.ClientApiBase implements IReleaseApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Release-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "efc2f575-36ef-48e9-b672-0c6fb4a48ac5";

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
                    "6.0-preview.1",
                    "Release",
                    "f2571c27-bf50-4938-b396-32d109ddef26",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get a list of approvals
     * 
     * @param {string} project - Project ID or project name
     * @param {string} assignedToFilter - Approvals assigned to this user.
     * @param {ReleaseInterfaces.ApprovalStatus} statusFilter - Approvals with this status. Default is 'pending'.
     * @param {number[]} releaseIdsFilter - Approvals for release id(s) mentioned in the filter. Multiple releases can be mentioned by separating them with ',' e.g. releaseIdsFilter=1,2,3,4.
     * @param {ReleaseInterfaces.ApprovalType} typeFilter - Approval with this type.
     * @param {number} top - Number of approvals to get. Default is 50.
     * @param {number} continuationToken - Gets the approvals after the continuation token provided.
     * @param {ReleaseInterfaces.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created approvals. Default is 'descending'.
     * @param {boolean} includeMyGroupApprovals - 'true' to include my group approvals. Default is 'false'.
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
                    "6.0-preview.3",
                    "Release",
                    "b47c6458-e73b-47cb-a770-4df1e8813a91",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get approval history.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} approvalStepId - Id of the approval.
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
                    "6.0-preview.3",
                    "Release",
                    "250c7158-852e-4130-a00f-a0cce9b72d05",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get an approval.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} approvalId - Id of the approval.
     * @param {boolean} includeHistory - 'true' to include history of the approval. Default is 'false'.
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
                    "6.0-preview.3",
                    "Release",
                    "9328e074-59fb-465a-89d9-b09c82ee5109",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Update status of an approval
     * 
     * @param {ReleaseInterfaces.ReleaseApproval} approval - ReleaseApproval object having status, approver and comments.
     * @param {string} project - Project ID or project name
     * @param {number} approvalId - Id of the approval.
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
                    "6.0-preview.3",
                    "Release",
                    "9328e074-59fb-465a-89d9-b09c82ee5109",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {ReleaseInterfaces.ReleaseApproval[]} approvals
     * @param {string} project - Project ID or project name
     */
    public async updateReleaseApprovals(
        approvals: ReleaseInterfaces.ReleaseApproval[],
        project: string
        ): Promise<ReleaseInterfaces.ReleaseApproval[]> {

        return new Promise<ReleaseInterfaces.ReleaseApproval[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.3",
                    "Release",
                    "c957584a-82aa-4131-8222-6d47f78bfa7a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseApproval[]>;
                res = await this.rest.update<ReleaseInterfaces.ReleaseApproval[]>(url, approvals, options);

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
     * Get a task attachment.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of the release environment.
     * @param {number} attemptId - Attempt number of deployment.
     * @param {string} timelineId - Timeline Id of the task.
     * @param {string} recordId - Record Id of attachment.
     * @param {string} type - Type of the attachment.
     * @param {string} name - Name of the attachment.
     */
    public async getTaskAttachmentContent(
        project: string,
        releaseId: number,
        environmentId: number,
        attemptId: number,
        timelineId: string,
        recordId: string,
        type: string,
        name: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                attemptId: attemptId,
                timelineId: timelineId,
                recordId: recordId,
                type: type,
                name: name
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "c4071f6d-3697-46ca-858e-8b10ff09e52f",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a release task attachment.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of the release environment.
     * @param {number} attemptId - Attempt number of deployment.
     * @param {string} planId - Plan Id of the deploy phase.
     * @param {string} timelineId - Timeline Id of the task.
     * @param {string} recordId - Record Id of attachment.
     * @param {string} type - Type of the attachment.
     * @param {string} name - Name of the attachment.
     */
    public async getReleaseTaskAttachmentContent(
        project: string,
        releaseId: number,
        environmentId: number,
        attemptId: number,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string,
        name: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                attemptId: attemptId,
                planId: planId,
                timelineId: timelineId,
                recordId: recordId,
                type: type,
                name: name
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "60b86efb-7b8c-4853-8f9f-aa142b77b479",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the task attachments.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of the release environment.
     * @param {number} attemptId - Attempt number of deployment.
     * @param {string} timelineId - Timeline Id of the task.
     * @param {string} type - Type of the attachment.
     */
    public async getTaskAttachments(
        project: string,
        releaseId: number,
        environmentId: number,
        attemptId: number,
        timelineId: string,
        type: string
        ): Promise<ReleaseInterfaces.ReleaseTaskAttachment[]> {

        return new Promise<ReleaseInterfaces.ReleaseTaskAttachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                attemptId: attemptId,
                timelineId: timelineId,
                type: type
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "214111ee-2415-4df2-8ed2-74417f7d61f9",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseTaskAttachment[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseTaskAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseTaskAttachment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the release task attachments.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of the release environment.
     * @param {number} attemptId - Attempt number of deployment.
     * @param {string} planId - Plan Id of the deploy phase.
     * @param {string} type - Type of the attachment.
     */
    public async getReleaseTaskAttachments(
        project: string,
        releaseId: number,
        environmentId: number,
        attemptId: number,
        planId: string,
        type: string
        ): Promise<ReleaseInterfaces.ReleaseTaskAttachment[]> {

        return new Promise<ReleaseInterfaces.ReleaseTaskAttachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                attemptId: attemptId,
                planId: planId,
                type: type
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "a4d06688-0dfa-4895-82a5-f43ec9452306",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseTaskAttachment[]>;
                res = await this.rest.get<ReleaseInterfaces.ReleaseTaskAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseTaskAttachment,
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
     * @param {string} sourceId
     * @param {string} artifactVersionId
     * @param {string} project - Project ID or project name
     */
    public async getAutoTriggerIssues(
        artifactType: string,
        sourceId: string,
        artifactVersionId: string,
        project?: string
        ): Promise<ReleaseInterfaces.AutoTriggerIssue[]> {
        if (artifactType == null) {
            throw new TypeError('artifactType can not be null or undefined');
        }
        if (sourceId == null) {
            throw new TypeError('sourceId can not be null or undefined');
        }
        if (artifactVersionId == null) {
            throw new TypeError('artifactVersionId can not be null or undefined');
        }

        return new Promise<ReleaseInterfaces.AutoTriggerIssue[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                artifactType: artifactType,
                sourceId: sourceId,
                artifactVersionId: artifactVersionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "c1a68497-69da-40fb-9423-cab19cfeeca9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.AutoTriggerIssue[]>;
                res = await this.rest.get<ReleaseInterfaces.AutoTriggerIssue[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.AutoTriggerIssue,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets a badge that indicates the status of the most recent deployment for an environment.
     * 
     * @param {string} projectId - The ID of the Project.
     * @param {number} releaseDefinitionId - The ID of the Release Definition.
     * @param {number} environmentId - The ID of the Environment.
     * @param {string} branchName - The name of the branch.
     */
    public async getDeploymentBadge(
        projectId: string,
        releaseDefinitionId: number,
        environmentId: number,
        branchName?: string
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                projectId: projectId,
                releaseDefinitionId: releaseDefinitionId,
                environmentId: environmentId,
                branchName: branchName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "1a60a35d-b8c9-45fb-bf67-da0829711147",
                    routeValues);

                let url: string = verData.requestUrl!;
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

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     * @param {string} artifactAlias
     */
    public async getReleaseChanges(
        project: string,
        releaseId: number,
        baseReleaseId?: number,
        top?: number,
        artifactAlias?: string
        ): Promise<ReleaseInterfaces.Change[]> {

        return new Promise<ReleaseInterfaces.Change[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            let queryValues: any = {
                baseReleaseId: baseReleaseId,
                '$top': top,
                artifactAlias: artifactAlias,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "8dcf9fe9-ca37-4113-8ee1-37928e98407c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @param {string[]} propertyFilters
     */
    public async getDefinitionEnvironments(
        project: string,
        taskGroupId?: string,
        propertyFilters?: string[]
        ): Promise<ReleaseInterfaces.DefinitionEnvironmentReference[]> {

        return new Promise<ReleaseInterfaces.DefinitionEnvironmentReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                taskGroupId: taskGroupId,
                propertyFilters: propertyFilters && propertyFilters.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "12b5d21a-f54c-430e-a8c1-7515d196890e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Create a release definition
     * 
     * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition - release definition object to create.
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
                    "6.0-preview.4",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Delete a release definition.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string} comment - Comment for deleting a release definition.
     * @param {boolean} forceDelete - 'true' to automatically cancel any in-progress release deployments and proceed with release definition deletion . Default is 'false'.
     */
    public async deleteReleaseDefinition(
        project: string,
        definitionId: number,
        comment?: string,
        forceDelete?: boolean
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                definitionId: definitionId
            };

            let queryValues: any = {
                comment: comment,
                forceDelete: forceDelete,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.4",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
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
     * Get a release definition.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definition will contain values for the specified property Ids (if they exist). If not set, properties will not be included.
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
                    "6.0-preview.4",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get release definition of a given revision.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition.
     * @param {number} revision - Revision number of the release definition.
     */
    public async getReleaseDefinitionRevision(
        project: string,
        definitionId: number,
        revision: number
        ): Promise<NodeJS.ReadableStream> {
        if (revision == null) {
            throw new TypeError('revision can not be null or undefined');
        }

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
                    "6.0-preview.4",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of release definitions.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} searchText - Get release definitions with names containing searchText.
     * @param {ReleaseInterfaces.ReleaseDefinitionExpands} expand - The properties that should be expanded in the list of Release definitions.
     * @param {string} artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {number} top - Number of release definitions to get.
     * @param {string} continuationToken - Gets the release definitions after the continuation token provided.
     * @param {ReleaseInterfaces.ReleaseDefinitionQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param {string} path - Gets the release definitions under the specified path.
     * @param {boolean} isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definitions will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release Definition from results irrespective of whether it has property set or not.
     * @param {string[]} definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @param {boolean} isDeleted - 'true' to get release definitions that has been deleted. Default is 'false'
     * @param {boolean} searchTextContainsFolderName - 'true' to get the release definitions under the folder with name as specified in searchText. Default is 'false'.
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
        propertyFilters?: string[],
        definitionIdFilter?: string[],
        isDeleted?: boolean,
        searchTextContainsFolderName?: boolean
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
                definitionIdFilter: definitionIdFilter && definitionIdFilter.join(","),
                isDeleted: isDeleted,
                searchTextContainsFolderName: searchTextContainsFolderName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.4",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Undelete a release definition.
     * 
     * @param {ReleaseInterfaces.ReleaseDefinitionUndeleteParameter} releaseDefinitionUndeleteParameter - Object for undelete release definition.
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the release definition to be undeleted
     */
    public async undeleteReleaseDefinition(
        releaseDefinitionUndeleteParameter: ReleaseInterfaces.ReleaseDefinitionUndeleteParameter,
        project: string,
        definitionId: number
        ): Promise<ReleaseInterfaces.ReleaseDefinition> {

        return new Promise<ReleaseInterfaces.ReleaseDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                definitionId: definitionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.4",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinition>;
                res = await this.rest.update<ReleaseInterfaces.ReleaseDefinition>(url, releaseDefinitionUndeleteParameter, options);

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
     * Update a release definition.
     * 
     * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition - Release definition object to update.
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
                    "6.0-preview.4",
                    "Release",
                    "d8f96f24-8ea7-4cb6-baab-2df8fc515665",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {Date} minStartedTime
     * @param {Date} maxStartedTime
     * @param {string} sourceBranch
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
        createdFor?: string,
        minStartedTime?: Date,
        maxStartedTime?: Date,
        sourceBranch?: string
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
                minStartedTime: minStartedTime,
                maxStartedTime: maxStartedTime,
                sourceBranch: sourceBranch,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.2",
                    "Release",
                    "b005ef73-cddc-448e-9ba2-5193bf36b19f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.2",
                    "Release",
                    "b005ef73-cddc-448e-9ba2-5193bf36b19f",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get a release environment.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of the release environment.
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
                    "6.0-preview.6",
                    "Release",
                    "a7e426b1-03dc-48af-9dfe-c98bac612dcb",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Update the status of a release environment
     * 
     * @param {ReleaseInterfaces.ReleaseEnvironmentUpdateMetadata} environmentUpdateData - Environment update meta data.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
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
                    "6.0-preview.6",
                    "Release",
                    "a7e426b1-03dc-48af-9dfe-c98bac612dcb",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Creates a definition environment template
     * 
     * @param {ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate} template - Definition environment template to create
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
                    "6.0-preview.4",
                    "Release",
                    "6b03b696-824e-4479-8eb2-6644a51aba89",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Delete a definition environment template
     * 
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the definition environment template
     */
    public async deleteDefinitionEnvironmentTemplate(
        project: string,
        templateId: string
        ): Promise<void> {
        if (templateId == null) {
            throw new TypeError('templateId can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                templateId: templateId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.4",
                    "Release",
                    "6b03b696-824e-4479-8eb2-6644a51aba89",
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
     * Gets a definition environment template
     * 
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the definition environment template
     */
    public async getDefinitionEnvironmentTemplate(
        project: string,
        templateId: string
        ): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate> {
        if (templateId == null) {
            throw new TypeError('templateId can not be null or undefined');
        }

        return new Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                templateId: templateId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.4",
                    "Release",
                    "6b03b696-824e-4479-8eb2-6644a51aba89",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Gets a list of definition environment templates
     * 
     * @param {string} project - Project ID or project name
     * @param {boolean} isDeleted - 'true' to get definition environment templates that have been deleted. Default is 'false'
     */
    public async listDefinitionEnvironmentTemplates(
        project: string,
        isDeleted?: boolean
        ): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]> {

        return new Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                isDeleted: isDeleted,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.4",
                    "Release",
                    "6b03b696-824e-4479-8eb2-6644a51aba89",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Undelete a release definition environment template.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} templateId - Id of the definition environment template to be undeleted
     */
    public async undeleteReleaseDefinitionEnvironmentTemplate(
        project: string,
        templateId: string
        ): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate> {
        if (templateId == null) {
            throw new TypeError('templateId can not be null or undefined');
        }

        return new Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                templateId: templateId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.4",
                    "Release",
                    "6b03b696-824e-4479-8eb2-6644a51aba89",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
                res = await this.rest.update<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>(url, null, options);

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
                    "6.0-preview.1",
                    "Release",
                    "938f7222-9acb-48fe-b8a3-4eda04597171",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "938f7222-9acb-48fe-b8a3-4eda04597171",
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
                    "6.0-preview.1",
                    "Release",
                    "938f7222-9acb-48fe-b8a3-4eda04597171",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} flightName
     */
    public async getFlightAssignments(
        flightName?: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                flightName: flightName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "409d301f-3046-46f3-beb9-4357fbce0a8c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Creates a new folder.
     * 
     * @param {ReleaseInterfaces.Folder} folder - folder.
     * @param {string} project - Project ID or project name
     * @param {string} path - Path of the folder.
     */
    public async createFolder(
        folder: ReleaseInterfaces.Folder,
        project: string,
        path?: string
        ): Promise<ReleaseInterfaces.Folder> {

        return new Promise<ReleaseInterfaces.Folder>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                path: path
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.2",
                    "Release",
                    "f7ddf76d-ce0c-4d68-94ff-becaec5d9dea",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Deletes a definition folder for given folder name and path and all it's existing definitions.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} path - Path of the folder to delete.
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
                    "6.0-preview.2",
                    "Release",
                    "f7ddf76d-ce0c-4d68-94ff-becaec5d9dea",
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
     * Gets folders.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} path - Path of the folder.
     * @param {ReleaseInterfaces.FolderPathQueryOrder} queryOrder - Gets the results in the defined order. Default is 'None'.
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
                    "6.0-preview.2",
                    "Release",
                    "f7ddf76d-ce0c-4d68-94ff-becaec5d9dea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Updates an existing folder at given existing path.
     * 
     * @param {ReleaseInterfaces.Folder} folder - folder.
     * @param {string} project - Project ID or project name
     * @param {string} path - Path of the folder to update.
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
                    "6.0-preview.2",
                    "Release",
                    "f7ddf76d-ce0c-4d68-94ff-becaec5d9dea",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Updates the gate for a deployment.
     * 
     * @param {ReleaseInterfaces.GateUpdateMetadata} gateUpdateMetadata - Metadata to patch the Release Gates.
     * @param {string} project - Project ID or project name
     * @param {number} gateStepId - Gate step Id.
     */
    public async updateGates(
        gateUpdateMetadata: ReleaseInterfaces.GateUpdateMetadata,
        project: string,
        gateStepId: number
        ): Promise<ReleaseInterfaces.ReleaseGates> {

        return new Promise<ReleaseInterfaces.ReleaseGates>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                gateStepId: gateStepId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "2666a539-2001-4f80-bcc7-0379956749d4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ReleaseGates>;
                res = await this.rest.update<ReleaseInterfaces.ReleaseGates>(url, gateUpdateMetadata, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ReleaseGates,
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
                    "6.0-preview.1",
                    "Release",
                    "23f461c8-629a-4144-a076-3054fa5f268a",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "71dd499b-317d-45ea-9134-140ea1932b5e",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {number} buildId
     * @param {string} sourceId
     */
    public async getIssues(
        project: string,
        buildId: number,
        sourceId?: string
        ): Promise<ReleaseInterfaces.AutoTriggerIssue[]> {

        return new Promise<ReleaseInterfaces.AutoTriggerIssue[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                buildId: buildId
            };

            let queryValues: any = {
                sourceId: sourceId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "cd42261a-f5c6-41c8-9259-f078989b9f25",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.AutoTriggerIssue[]>;
                res = await this.rest.get<ReleaseInterfaces.AutoTriggerIssue[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.AutoTriggerIssue,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets gate logs
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
     * @param {number} gateId - Id of the gate.
     * @param {number} taskId - ReleaseTask Id for the log.
     */
    public async getGateLog(
        project: string,
        releaseId: number,
        environmentId: number,
        gateId: number,
        taskId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                gateId: gateId,
                taskId: taskId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.2",
                    "Release",
                    "dec7ca5a-7f7f-4797-8bf1-8efc0dc93b28",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get logs for a release Id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
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
                    "6.0-preview.2",
                    "Release",
                    "c37fbab5-214b-48e4-a55b-cb6b4f6e4038",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets logs
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
     * @param {number} taskId - ReleaseTask Id for the log.
     * @param {number} attemptId - Id of the attempt.
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
                    "6.0-preview.2",
                    "Release",
                    "e71ba1ed-c0a4-4a28-a61f-2dd5f68cf3fd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the task log of a release as a plain text file.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
     * @param {number} attemptId
     * @param {string} timelineId
     * @param {number} taskId - ReleaseTask Id for the log.
     * @param {number} startLine - Starting line number for logs
     * @param {number} endLine - Ending line number for logs
     */
    public async getTaskLog2(
        project: string,
        releaseId: number,
        environmentId: number,
        attemptId: number,
        timelineId: string,
        taskId: number,
        startLine?: number,
        endLine?: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                attemptId: attemptId,
                timelineId: timelineId,
                taskId: taskId
            };

            let queryValues: any = {
                startLine: startLine,
                endLine: endLine,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.2",
                    "Release",
                    "2577e6c3-6999-4400-bc69-fe1d837755fe",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the task log of a release as a plain text file.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} environmentId - Id of release environment.
     * @param {number} releaseDeployPhaseId - Release deploy phase Id.
     * @param {number} taskId - ReleaseTask Id for the log.
     * @param {number} startLine - Starting line number for logs
     * @param {number} endLine - Ending line number for logs
     */
    public async getTaskLog(
        project: string,
        releaseId: number,
        environmentId: number,
        releaseDeployPhaseId: number,
        taskId: number,
        startLine?: number,
        endLine?: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                releaseDeployPhaseId: releaseDeployPhaseId,
                taskId: taskId
            };

            let queryValues: any = {
                startLine: startLine,
                endLine: endLine,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.2",
                    "Release",
                    "17c91af7-09fd-4256-bff1-c24ee4f73bc0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get manual intervention for a given release and manual intervention id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} manualInterventionId - Id of the manual intervention.
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
                    "6.0-preview.1",
                    "Release",
                    "616c46e4-f370-4456-adaa-fbaf79c7b79e",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * List all manual interventions for a given release.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
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
                    "6.0-preview.1",
                    "Release",
                    "616c46e4-f370-4456-adaa-fbaf79c7b79e",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Update manual intervention.
     * 
     * @param {ReleaseInterfaces.ManualInterventionUpdateMetadata} manualInterventionUpdateMetadata - Meta data to update manual intervention.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} manualInterventionId - Id of the manual intervention.
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
                    "6.0-preview.1",
                    "Release",
                    "616c46e4-f370-4456-adaa-fbaf79c7b79e",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "cd1502bb-3c73-4e11-80a6-d11308dceae5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
        if (artifactType == null) {
            throw new TypeError('artifactType can not be null or undefined');
        }
        if (artifactSourceId == null) {
            throw new TypeError('artifactSourceId can not be null or undefined');
        }

        return new Promise<ReleaseInterfaces.ProjectReference[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                artifactType: artifactType,
                artifactSourceId: artifactSourceId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "917ace4a-79d1-45a7-987c-7be4db4268fa",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get a list of releases
     * 
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Releases from this release definition Id.
     * @param {number} definitionEnvironmentId
     * @param {string} searchText - Releases with names containing searchText.
     * @param {string} createdBy - Releases created by this user.
     * @param {ReleaseInterfaces.ReleaseStatus} statusFilter - Releases that have this status.
     * @param {number} environmentStatusFilter
     * @param {Date} minCreatedTime - Releases that were created after this time.
     * @param {Date} maxCreatedTime - Releases that were created before this time.
     * @param {ReleaseInterfaces.ReleaseQueryOrder} queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param {number} top - Number of releases to get. Default is 50.
     * @param {number} continuationToken - Gets the releases after the continuation token provided.
     * @param {ReleaseInterfaces.ReleaseExpands} expand - The property that should be expanded in the list of releases.
     * @param {string} artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param {string} sourceId - Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param {string} artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param {string} sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param {boolean} isDeleted - Gets the soft deleted releases, if true.
     * @param {string[]} tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Releases will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release from results irrespective of whether it has property set or not.
     * @param {number[]} releaseIdFilter - A comma-delimited list of releases Ids. Only releases with these Ids will be returned.
     * @param {string} path - Releases under this folder path will be returned
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
        propertyFilters?: string[],
        releaseIdFilter?: number[],
        path?: string
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
                releaseIdFilter: releaseIdFilter && releaseIdFilter.join(","),
                path: path,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.8",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Create a release.
     * 
     * @param {ReleaseInterfaces.ReleaseStartMetadata} releaseStartMetadata - Metadata to create a release.
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
                    "6.0-preview.8",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Soft delete a release
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {string} comment - Comment for deleting a release.
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
                    "6.0-preview.8",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
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
     * Get a Release
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {ReleaseInterfaces.ApprovalFilters} approvalFilters - A filter which would allow fetching approval steps selectively based on whether it is automated, or manual. This would also decide whether we should fetch pre and post approval snapshots. Assumes All by default
     * @param {string[]} propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release will contain values for the specified property Ids (if they exist). If not set, properties will not be included.
     * @param {ReleaseInterfaces.SingleReleaseExpands} expand - A property that should be expanded in the release.
     * @param {number} topGateRecords - Number of release gate records to get. Default is 5.
     */
    public async getRelease(
        project: string,
        releaseId: number,
        approvalFilters?: ReleaseInterfaces.ApprovalFilters,
        propertyFilters?: string[],
        expand?: ReleaseInterfaces.SingleReleaseExpands,
        topGateRecords?: number
        ): Promise<ReleaseInterfaces.Release> {

        return new Promise<ReleaseInterfaces.Release>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            let queryValues: any = {
                approvalFilters: approvalFilters,
                propertyFilters: propertyFilters && propertyFilters.join(","),
                '$expand': expand,
                '$topGateRecords': topGateRecords,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.8",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get release summary of a given definition Id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the definition to get release summary.
     * @param {number} releaseCount - Count of releases to be included in summary.
     * @param {boolean} includeArtifact - Include artifact details.Default is 'false'.
     * @param {number[]} definitionEnvironmentIdsFilter
     */
    public async getReleaseDefinitionSummary(
        project: string,
        definitionId: number,
        releaseCount: number,
        includeArtifact?: boolean,
        definitionEnvironmentIdsFilter?: number[]
        ): Promise<ReleaseInterfaces.ReleaseDefinitionSummary> {
        if (definitionId == null) {
            throw new TypeError('definitionId can not be null or undefined');
        }
        if (releaseCount == null) {
            throw new TypeError('releaseCount can not be null or undefined');
        }

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
                    "6.0-preview.8",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get release for a given revision number.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release.
     * @param {number} definitionSnapshotRevision - Definition snapshot revision number.
     */
    public async getReleaseRevision(
        project: string,
        releaseId: number,
        definitionSnapshotRevision: number
        ): Promise<NodeJS.ReadableStream> {
        if (definitionSnapshotRevision == null) {
            throw new TypeError('definitionSnapshotRevision can not be null or undefined');
        }

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
                    "6.0-preview.8",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Undelete a soft deleted release.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of release to be undeleted.
     * @param {string} comment - Any comment for undeleting.
     */
    public async undeleteRelease(
        project: string,
        releaseId: number,
        comment: string
        ): Promise<void> {
        if (comment == null) {
            throw new TypeError('comment can not be null or undefined');
        }

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
                    "6.0-preview.8",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, null, options);

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
     * Update a complete release object.
     * 
     * @param {ReleaseInterfaces.Release} release - Release object for update.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release to update.
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
                    "6.0-preview.8",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Update few properties of a release.
     * 
     * @param {ReleaseInterfaces.ReleaseUpdateMetadata} releaseUpdateMetadata - Properties of release to update.
     * @param {string} project - Project ID or project name
     * @param {number} releaseId - Id of the release to update.
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
                    "6.0-preview.8",
                    "Release",
                    "a166fde7-27ad-408e-ba75-703c2cc9d500",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Gets the release settings
     * 
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
                    "6.0-preview.1",
                    "Release",
                    "c63c3718-7cfd-41e0-b89b-81c1ca143437",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "c63c3718-7cfd-41e0-b89b-81c1ca143437",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get release definition for a given definitionId and revision
     * 
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the definition.
     * @param {number} revision - Id of the revision.
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
                    "6.0-preview.1",
                    "Release",
                    "258b82e0-9d41-43f3-86d6-fef14ddd44bc",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get revision history for a release definition
     * 
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - Id of the definition.
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
                    "6.0-preview.1",
                    "Release",
                    "258b82e0-9d41-43f3-86d6-fef14ddd44bc",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "224e92b2-8d13-4c14-b120-13d877c516f8",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "224e92b2-8d13-4c14-b120-13d877c516f8",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "0e5def23-78b3-461f-8198-1558f25041c8",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "3d21b4c8-c32e-45b2-a7cb-770a369012f4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.update<string[]>(url, null, options);

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
                    "6.0-preview.1",
                    "Release",
                    "3d21b4c8-c32e-45b2-a7cb-770a369012f4",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "3d21b4c8-c32e-45b2-a7cb-770a369012f4",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "3d21b4c8-c32e-45b2-a7cb-770a369012f4",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "c5b602b6-d1b3-4363-8a51-94384f78068f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.update<string[]>(url, null, options);

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
                    "6.0-preview.1",
                    "Release",
                    "c5b602b6-d1b3-4363-8a51-94384f78068f",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "c5b602b6-d1b3-4363-8a51-94384f78068f",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "c5b602b6-d1b3-4363-8a51-94384f78068f",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "86cee25a-68ba-4ba3-9171-8ad6ffc6df93",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.2",
                    "Release",
                    "4259191d-4b0a-4409-9fb3-09f22ab9bc47",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {number} attemptId
     * @param {string} timelineId
     */
    public async getTasks2(
        project: string,
        releaseId: number,
        environmentId: number,
        attemptId: number,
        timelineId: string
        ): Promise<ReleaseInterfaces.ReleaseTask[]> {

        return new Promise<ReleaseInterfaces.ReleaseTask[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId,
                environmentId: environmentId,
                attemptId: attemptId,
                timelineId: timelineId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.2",
                    "Release",
                    "4259291d-4b0a-4409-9fb3-04f22ab9bc47",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.2",
                    "Release",
                    "36b276e0-3c70-4320-a63c-1a2e1466a0d1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
                    "6.0-preview.1",
                    "Release",
                    "8efc2a3c-1fc8-4f6d-9822-75e98cecb48f",
                    routeValues);

                let url: string = verData.requestUrl!;
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
        if (releaseDefinitionId == null) {
            throw new TypeError('releaseDefinitionId can not be null or undefined');
        }

        return new Promise<ReleaseInterfaces.ArtifactVersionQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseDefinitionId: releaseDefinitionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "30fc787e-a9e0-4a07-9fbc-3e903aa051d2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ArtifactVersionQueryResult>;
                res = await this.rest.get<ReleaseInterfaces.ArtifactVersionQueryResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ArtifactVersionQueryResult,
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
                    "6.0-preview.1",
                    "Release",
                    "30fc787e-a9e0-4a07-9fbc-3e903aa051d2",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ReleaseInterfaces.ArtifactVersionQueryResult>;
                res = await this.rest.create<ReleaseInterfaces.ArtifactVersionQueryResult>(url, artifacts, options);

                let ret = this.formatResponse(res.result,
                                              ReleaseInterfaces.TypeInfo.ArtifactVersionQueryResult,
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
     * @param {string} artifactAlias
     */
    public async getReleaseWorkItemsRefs(
        project: string,
        releaseId: number,
        baseReleaseId?: number,
        top?: number,
        artifactAlias?: string
        ): Promise<ReleaseInterfaces.ReleaseWorkItemRef[]> {

        return new Promise<ReleaseInterfaces.ReleaseWorkItemRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                releaseId: releaseId
            };

            let queryValues: any = {
                baseReleaseId: baseReleaseId,
                '$top': top,
                artifactAlias: artifactAlias,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.0-preview.1",
                    "Release",
                    "4f165cc0-875c-4768-b148-f12f78769fab",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
