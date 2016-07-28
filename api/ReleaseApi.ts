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
import FormInputInterfaces = require("./interfaces/common/FormInputInterfaces");
import ReleaseInterfaces = require("./interfaces/ReleaseInterfaces");

export interface IReleaseApi extends basem.ClientApiBase {
    getAgentArtifactDefinitions(project: string, releaseId: number): Q.Promise<ReleaseInterfaces.AgentArtifactDefinition[]>;
    getApprovalHistory(project: string, approvalStepId: number): Q.Promise<ReleaseInterfaces.ReleaseApproval>;
    getApproval(project: string, approvalId: number, includeHistory?: boolean): Q.Promise<ReleaseInterfaces.ReleaseApproval>;
    updateReleaseApproval(approval: ReleaseInterfaces.ReleaseApproval, project: string, approvalId: number): Q.Promise<ReleaseInterfaces.ReleaseApproval>;
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: ReleaseInterfaces.ApprovalStatus, releaseIdsFilter?: number[], typeFilter?: ReleaseInterfaces.ApprovalType, top?: number, continuationToken?: number, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, includeMyGroupApprovals?: boolean): Q.Promise<ReleaseInterfaces.ReleaseApproval[]>;
    getReleaseChanges(project: string, releaseId: number, baseReleaseId?: number, top?: number): Q.Promise<ReleaseInterfaces.Change[]>;
    createReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Q.Promise<ReleaseInterfaces.ReleaseDefinition>;
    deleteReleaseDefinition(project: string, definitionId: number): Q.Promise<void>;
    getReleaseDefinition(project: string, definitionId: number): Q.Promise<ReleaseInterfaces.ReleaseDefinition>;
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number): Q.Promise<NodeJS.ReadableStream>;
    getReleaseDefinitions(project: string, searchText?: string, expand?: ReleaseInterfaces.ReleaseDefinitionExpands): Q.Promise<ReleaseInterfaces.ReleaseDefinition[]>;
    getReleaseDefinitionsForArtifactSource(project: string, artifactType: string, artifactSourceId: string, expand?: ReleaseInterfaces.ReleaseDefinitionExpands): Q.Promise<ReleaseInterfaces.ReleaseDefinition[]>;
    updateReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Q.Promise<ReleaseInterfaces.ReleaseDefinition>;
    getDeployments(project: string, definitionId?: number, definitionEnvironmentId?: number, createdBy?: string, operationStatus?: ReleaseInterfaces.DeploymentStatus, deploymentStatus?: ReleaseInterfaces.DeploymentStatus, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, top?: number, continuationToken?: number): Q.Promise<ReleaseInterfaces.Deployment[]>;
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number): Q.Promise<ReleaseInterfaces.ReleaseEnvironment>;
    updateReleaseEnvironment(environmentUpdateData: ReleaseInterfaces.ReleaseEnvironmentUpdateMetadata, project: string, releaseId: number, environmentId: number): Q.Promise<ReleaseInterfaces.ReleaseEnvironment>;
    createDefinitionEnvironmentTemplate(template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate, project: string): Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string): Q.Promise<void>;
    getDefinitionEnvironmentTemplate(project: string, templateId: string): Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    listDefinitionEnvironmentTemplates(project: string): Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>;
    getReleaseHistory(project: string, releaseId: number): Q.Promise<ReleaseInterfaces.ReleaseRevision[]>;
    getInputValues(query: FormInputInterfaces.InputValuesQuery, project: string): Q.Promise<FormInputInterfaces.InputValuesQuery>;
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId?: number): Q.Promise<NodeJS.ReadableStream>;
    getLogs(project: string, releaseId: number): Q.Promise<NodeJS.ReadableStream>;
    getTaskLog(project: string, releaseId: number, environmentId: number, taskGroupId: number, taskId: number): Q.Promise<NodeJS.ReadableStream>;
    getManualIntervention(project: string, releaseId: number, manualInterventionId: number): Q.Promise<ReleaseInterfaces.ManualIntervention>;
    getManualInterventions(project: string, releaseId: number): Q.Promise<ReleaseInterfaces.ManualIntervention[]>;
    updateManualIntervention(manualInterventionUpdateMetadata: ReleaseInterfaces.ManualInterventionUpdateMetadata, project: string, releaseId: number, manualInterventionId: number): Q.Promise<ReleaseInterfaces.ManualIntervention>;
    createRelease(releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata, project: string): Q.Promise<ReleaseInterfaces.Release>;
    deleteRelease(project: string, releaseId: number, comment?: string): Q.Promise<void>;
    getRelease(project: string, releaseId: number, includeAllApprovals?: boolean): Q.Promise<ReleaseInterfaces.Release>;
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact?: boolean): Q.Promise<ReleaseInterfaces.ReleaseDefinitionSummary>;
    getReleaseRevision(project: string, releaseId: number, definitionSnapshotRevision: number): Q.Promise<NodeJS.ReadableStream>;
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: ReleaseInterfaces.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: ReleaseInterfaces.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean): Q.Promise<ReleaseInterfaces.Release[]>;
    undeleteRelease(project: string, releaseId: number, comment: string): Q.Promise<void>;
    updateRelease(release: ReleaseInterfaces.Release, project: string, releaseId: number): Q.Promise<ReleaseInterfaces.Release>;
    updateReleaseResource(releaseUpdateMetadata: ReleaseInterfaces.ReleaseUpdateMetadata, project: string, releaseId: number): Q.Promise<ReleaseInterfaces.Release>;
    getDefinitionRevision(project: string, definitionId: number, revision: number): Q.Promise<NodeJS.ReadableStream>;
    getReleaseDefinitionHistory(project: string, definitionId: number): Q.Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]>;
    getSummaryMailSections(project: string, releaseId: number): Q.Promise<ReleaseInterfaces.SummaryMailSection[]>;
    sendSummaryMail(mailMessage: ReleaseInterfaces.MailMessage, project: string, releaseId: number): Q.Promise<void>;
    getSourceBranches(project: string, definitionId: number): Q.Promise<string[]>;
    getTasks(project: string, releaseId: number, environmentId: number, attemptId?: number): Q.Promise<ReleaseInterfaces.ReleaseTask[]>;
    getTasksForTaskGroup(project: string, releaseId: number, environmentId: number, taskGroupId: number): Q.Promise<ReleaseInterfaces.ReleaseTask[]>;
    getArtifactTypeDefinitions(project: string): Q.Promise<ReleaseInterfaces.ArtifactTypeDefinition[]>;
    getArtifactVersions(project: string, releaseDefinitionId: number): Q.Promise<ReleaseInterfaces.ArtifactVersionQueryResult>;
    getArtifactVersionsForSources(artifacts: ReleaseInterfaces.Artifact[], project: string): Q.Promise<ReleaseInterfaces.ArtifactVersionQueryResult>;
    getReleaseWorkItemsRefs(project: string, releaseId: number, baseReleaseId?: number, top?: number): Q.Promise<ReleaseInterfaces.ReleaseWorkItemRef[]>;
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
    public getAgentArtifactDefinitions(
        project: string,
        releaseId: number
        ): Q.Promise<ReleaseInterfaces.AgentArtifactDefinition[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.AgentArtifactDefinition[]>();

        var onResult = (err: any, statusCode: number, agentartifacts: ReleaseInterfaces.AgentArtifactDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agentartifacts);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "f2571c27-bf50-4938-b396-32d109ddef26", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.AgentArtifactDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.AgentArtifactDefinition[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} approvalStepId
     */
    public getApprovalHistory(
        project: string,
        approvalStepId: number
        ): Q.Promise<ReleaseInterfaces.ReleaseApproval> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseApproval>();

        var onResult = (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approval);
            }
        };

        var routeValues: any = {
            project: project,
            approvalStepId: approvalStepId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "250c7158-852e-4130-a00f-a0cce9b72d05", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseApproval>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} approvalId
     * @param {boolean} includeHistory
     */
    public getApproval(
        project: string,
        approvalId: number,
        includeHistory?: boolean
        ): Q.Promise<ReleaseInterfaces.ReleaseApproval> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseApproval>();

        var onResult = (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approval);
            }
        };

        var routeValues: any = {
            project: project,
            approvalId: approvalId
        };

        var queryValues: any = {
            includeHistory: includeHistory,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "9328e074-59fb-465a-89d9-b09c82ee5109", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseApproval>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.ReleaseApproval} approval
     * @param {string} project - Project ID or project name
     * @param {number} approvalId
     */
    public updateReleaseApproval(
        approval: ReleaseInterfaces.ReleaseApproval,
        project: string,
        approvalId: number
        ): Q.Promise<ReleaseInterfaces.ReleaseApproval> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseApproval>();

        var onResult = (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approval);
            }
        };

        var routeValues: any = {
            project: project,
            approvalId: approvalId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "9328e074-59fb-465a-89d9-b09c82ee5109", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, approval, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseApproval>>deferred.promise;
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
    public getApprovals(
        project: string,
        assignedToFilter?: string,
        statusFilter?: ReleaseInterfaces.ApprovalStatus,
        releaseIdsFilter?: number[],
        typeFilter?: ReleaseInterfaces.ApprovalType,
        top?: number,
        continuationToken?: number,
        queryOrder?: ReleaseInterfaces.ReleaseQueryOrder,
        includeMyGroupApprovals?: boolean
        ): Q.Promise<ReleaseInterfaces.ReleaseApproval[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseApproval[]>();

        var onResult = (err: any, statusCode: number, approvals: ReleaseInterfaces.ReleaseApproval[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approvals);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            assignedToFilter: assignedToFilter,
            statusFilter: statusFilter,
            releaseIdsFilter: releaseIdsFilter && releaseIdsFilter.join(","),
            typeFilter: typeFilter,
            top: top,
            continuationToken: continuationToken,
            queryOrder: queryOrder,
            includeMyGroupApprovals: includeMyGroupApprovals,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "b47c6458-e73b-47cb-a770-4df1e8813a91", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseApproval[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     */
    public getReleaseChanges(
        project: string,
        releaseId: number,
        baseReleaseId?: number,
        top?: number
        ): Q.Promise<ReleaseInterfaces.Change[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.Change[]>();

        var onResult = (err: any, statusCode: number, changes: ReleaseInterfaces.Change[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(changes);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            baseReleaseId: baseReleaseId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "8dcf9fe9-ca37-4113-8ee1-37928e98407c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Change, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.Change[]>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     */
    public createReleaseDefinition(
        releaseDefinition: ReleaseInterfaces.ReleaseDefinition,
        project: string
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinition> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition>();

        var onResult = (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, releaseDefinition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinition>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     */
    public deleteReleaseDefinition(
        project: string,
        definitionId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     */
    public getReleaseDefinition(
        project: string,
        definitionId: number
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinition> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition>();

        var onResult = (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        };

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinition>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} revision
     */
    public getReleaseDefinitionRevision(
        project: string,
        definitionId: number,
        revision: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, definition: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        };

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        var queryValues: any = {
            revision: revision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} searchText
     * @param {ReleaseInterfaces.ReleaseDefinitionExpands} expand
     */
    public getReleaseDefinitions(
        project: string,
        searchText?: string,
        expand?: ReleaseInterfaces.ReleaseDefinitionExpands
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinition[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition[]>();

        var onResult = (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definitions);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            searchText: searchText,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinition[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} artifactType
     * @param {string} artifactSourceId
     * @param {ReleaseInterfaces.ReleaseDefinitionExpands} expand
     */
    public getReleaseDefinitionsForArtifactSource(
        project: string,
        artifactType: string,
        artifactSourceId: string,
        expand?: ReleaseInterfaces.ReleaseDefinitionExpands
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinition[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition[]>();

        var onResult = (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definitions);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            artifactType: artifactType,
            artifactSourceId: artifactSourceId,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinition[]>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     */
    public updateReleaseDefinition(
        releaseDefinition: ReleaseInterfaces.ReleaseDefinition,
        project: string
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinition> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition>();

        var onResult = (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, releaseDefinition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinition>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} definitionEnvironmentId
     * @param {string} createdBy
     * @param {ReleaseInterfaces.DeploymentStatus} operationStatus
     * @param {ReleaseInterfaces.DeploymentStatus} deploymentStatus
     * @param {ReleaseInterfaces.ReleaseQueryOrder} queryOrder
     * @param {number} top
     * @param {number} continuationToken
     */
    public getDeployments(
        project: string,
        definitionId?: number,
        definitionEnvironmentId?: number,
        createdBy?: string,
        operationStatus?: ReleaseInterfaces.DeploymentStatus,
        deploymentStatus?: ReleaseInterfaces.DeploymentStatus,
        queryOrder?: ReleaseInterfaces.ReleaseQueryOrder,
        top?: number,
        continuationToken?: number
        ): Q.Promise<ReleaseInterfaces.Deployment[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.Deployment[]>();

        var onResult = (err: any, statusCode: number, deployments: ReleaseInterfaces.Deployment[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(deployments);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            definitionId: definitionId,
            definitionEnvironmentId: definitionEnvironmentId,
            createdBy: createdBy,
            operationStatus: operationStatus,
            deploymentStatus: deploymentStatus,
            queryOrder: queryOrder,
            '$top': top,
            continuationToken: continuationToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "b005ef73-cddc-448e-9ba2-5193bf36b19f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Deployment, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.Deployment[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     */
    public getReleaseEnvironment(
        project: string,
        releaseId: number,
        environmentId: number
        ): Q.Promise<ReleaseInterfaces.ReleaseEnvironment> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseEnvironment>();

        var onResult = (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environment);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a7e426b1-03dc-48af-9dfe-c98bac612dcb", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseEnvironment, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseEnvironment>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.ReleaseEnvironmentUpdateMetadata} environmentUpdateData
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     */
    public updateReleaseEnvironment(
        environmentUpdateData: ReleaseInterfaces.ReleaseEnvironmentUpdateMetadata,
        project: string,
        releaseId: number,
        environmentId: number
        ): Q.Promise<ReleaseInterfaces.ReleaseEnvironment> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseEnvironment>();

        var onResult = (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environment);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a7e426b1-03dc-48af-9dfe-c98bac612dcb", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseEnvironmentUpdateMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseEnvironment, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, environmentUpdateData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseEnvironment>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate} template
     * @param {string} project - Project ID or project name
     */
    public createDefinitionEnvironmentTemplate(
        template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate,
        project: string
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>();

        var onResult = (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplate);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, template, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     */
    public deleteDefinitionEnvironmentTemplate(
        project: string,
        templateId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            templateId: templateId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     */
    public getDefinitionEnvironmentTemplate(
        project: string,
        templateId: string
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>();

        var onResult = (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplate);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            templateId: templateId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     */
    public listDefinitionEnvironmentTemplates(
        project: string
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>();

        var onResult = (err: any, statusCode: number, environmenttemplates: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplates);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public getReleaseHistory(
        project: string,
        releaseId: number
        ): Q.Promise<ReleaseInterfaces.ReleaseRevision[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseRevision[]>();

        var onResult = (err: any, statusCode: number, history: ReleaseInterfaces.ReleaseRevision[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(history);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "23f461c8-629a-4144-a076-3054fa5f268a", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseRevision, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseRevision[]>>deferred.promise;
    }

    /**
     * @param {FormInputInterfaces.InputValuesQuery} query
     * @param {string} project - Project ID or project name
     */
    public getInputValues(
        query: FormInputInterfaces.InputValuesQuery,
        project: string
        ): Q.Promise<FormInputInterfaces.InputValuesQuery> {
    
        var deferred = Q.defer<FormInputInterfaces.InputValuesQuery>();

        var onResult = (err: any, statusCode: number, inputvaluesquery: FormInputInterfaces.InputValuesQuery) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(inputvaluesquery);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "71dd499b-317d-45ea-9134-140ea1932b5e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, query, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<FormInputInterfaces.InputValuesQuery>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} taskId
     * @param {number} attemptId
     */
    public getLog(
        project: string,
        releaseId: number,
        environmentId: number,
        taskId: number,
        attemptId?: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId,
            taskId: taskId
        };

        var queryValues: any = {
            attemptId: attemptId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "e71ba1ed-c0a4-4a28-a61f-2dd5f68cf3fd", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public getLogs(
        project: string,
        releaseId: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "c37fbab5-214b-48e4-a55b-cb6b4f6e4038", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} taskGroupId
     * @param {number} taskId
     */
    public getTaskLog(
        project: string,
        releaseId: number,
        environmentId: number,
        taskGroupId: number,
        taskId: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId,
            taskGroupId: taskGroupId,
            taskId: taskId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "17c91af7-09fd-4256-bff1-c24ee4f73bc0", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} manualInterventionId
     */
    public getManualIntervention(
        project: string,
        releaseId: number,
        manualInterventionId: number
        ): Q.Promise<ReleaseInterfaces.ManualIntervention> {
    
        var deferred = Q.defer<ReleaseInterfaces.ManualIntervention>();

        var onResult = (err: any, statusCode: number, manualIntervention: ReleaseInterfaces.ManualIntervention) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(manualIntervention);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            manualInterventionId: manualInterventionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "616c46e4-f370-4456-adaa-fbaf79c7b79e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ManualIntervention, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ManualIntervention>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public getManualInterventions(
        project: string,
        releaseId: number
        ): Q.Promise<ReleaseInterfaces.ManualIntervention[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ManualIntervention[]>();

        var onResult = (err: any, statusCode: number, manualInterventions: ReleaseInterfaces.ManualIntervention[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(manualInterventions);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "616c46e4-f370-4456-adaa-fbaf79c7b79e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ManualIntervention, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ManualIntervention[]>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.ManualInterventionUpdateMetadata} manualInterventionUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} manualInterventionId
     */
    public updateManualIntervention(
        manualInterventionUpdateMetadata: ReleaseInterfaces.ManualInterventionUpdateMetadata,
        project: string,
        releaseId: number,
        manualInterventionId: number
        ): Q.Promise<ReleaseInterfaces.ManualIntervention> {
    
        var deferred = Q.defer<ReleaseInterfaces.ManualIntervention>();

        var onResult = (err: any, statusCode: number, manualIntervention: ReleaseInterfaces.ManualIntervention) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(manualIntervention);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            manualInterventionId: manualInterventionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "616c46e4-f370-4456-adaa-fbaf79c7b79e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ManualInterventionUpdateMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ManualIntervention, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, manualInterventionUpdateMetadata, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ManualIntervention>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.ReleaseStartMetadata} releaseStartMetadata
     * @param {string} project - Project ID or project name
     */
    public createRelease(
        releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata,
        project: string
        ): Q.Promise<ReleaseInterfaces.Release> {
    
        var deferred = Q.defer<ReleaseInterfaces.Release>();

        var onResult = (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseStartMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, releaseStartMetadata, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.Release>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} comment
     */
    public deleteRelease(
        project: string,
        releaseId: number,
        comment?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            comment: comment,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {boolean} includeAllApprovals
     */
    public getRelease(
        project: string,
        releaseId: number,
        includeAllApprovals?: boolean
        ): Q.Promise<ReleaseInterfaces.Release> {
    
        var deferred = Q.defer<ReleaseInterfaces.Release>();

        var onResult = (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            includeAllApprovals: includeAllApprovals,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.Release>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} releaseCount
     * @param {boolean} includeArtifact
     */
    public getReleaseDefinitionSummary(
        project: string,
        definitionId: number,
        releaseCount: number,
        includeArtifact?: boolean
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinitionSummary> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionSummary>();

        var onResult = (err: any, statusCode: number, release: ReleaseInterfaces.ReleaseDefinitionSummary) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            definitionId: definitionId,
            releaseCount: releaseCount,
            includeArtifact: includeArtifact,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionSummary, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinitionSummary>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} definitionSnapshotRevision
     */
    public getReleaseRevision(
        project: string,
        releaseId: number,
        definitionSnapshotRevision: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, release: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            definitionSnapshotRevision: definitionSnapshotRevision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
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
     */
    public getReleases(
        project: string,
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
        isDeleted?: boolean
        ): Q.Promise<ReleaseInterfaces.Release[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.Release[]>();

        var onResult = (err: any, statusCode: number, releases: ReleaseInterfaces.Release[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(releases);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
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
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.Release[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} comment
     */
    public undeleteRelease(
        project: string,
        releaseId: number,
        comment: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            comment: comment,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.Release} release
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public updateRelease(
        release: ReleaseInterfaces.Release,
        project: string,
        releaseId: number
        ): Q.Promise<ReleaseInterfaces.Release> {
    
        var deferred = Q.defer<ReleaseInterfaces.Release>();

        var onResult = (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, release, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.Release>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.ReleaseUpdateMetadata} releaseUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public updateReleaseResource(
        releaseUpdateMetadata: ReleaseInterfaces.ReleaseUpdateMetadata,
        project: string,
        releaseId: number
        ): Q.Promise<ReleaseInterfaces.Release> {
    
        var deferred = Q.defer<ReleaseInterfaces.Release>();

        var onResult = (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseUpdateMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, releaseUpdateMetadata, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.Release>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} revision
     */
    public getDefinitionRevision(
        project: string,
        definitionId: number,
        revision: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, revision: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revision);
            }
        };

        var routeValues: any = {
            project: project,
            definitionId: definitionId,
            revision: revision
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "258b82e0-9d41-43f3-86d6-fef14ddd44bc", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     */
    public getReleaseDefinitionHistory(
        project: string,
        definitionId: number
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionRevision[]>();

        var onResult = (err: any, statusCode: number, revisions: ReleaseInterfaces.ReleaseDefinitionRevision[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revisions);
            }
        };

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "258b82e0-9d41-43f3-86d6-fef14ddd44bc", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionRevision, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public getSummaryMailSections(
        project: string,
        releaseId: number
        ): Q.Promise<ReleaseInterfaces.SummaryMailSection[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.SummaryMailSection[]>();

        var onResult = (err: any, statusCode: number, sendmail: ReleaseInterfaces.SummaryMailSection[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(sendmail);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "224e92b2-8d13-4c14-b120-13d877c516f8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.SummaryMailSection, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.SummaryMailSection[]>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.MailMessage} mailMessage
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     */
    public sendSummaryMail(
        mailMessage: ReleaseInterfaces.MailMessage,
        project: string,
        releaseId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "224e92b2-8d13-4c14-b120-13d877c516f8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.MailMessage, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, mailMessage, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     */
    public getSourceBranches(
        project: string,
        definitionId: number
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        var onResult = (err: any, statusCode: number, sourcebranches: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(sourcebranches);
            }
        };

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "0e5def23-78b3-461f-8198-1558f25041c8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     */
    public getTasks(
        project: string,
        releaseId: number,
        environmentId: number,
        attemptId?: number
        ): Q.Promise<ReleaseInterfaces.ReleaseTask[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseTask[]>();

        var onResult = (err: any, statusCode: number, tasks: ReleaseInterfaces.ReleaseTask[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tasks);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId
        };

        var queryValues: any = {
            attemptId: attemptId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "36b276e0-3c70-4320-a63c-1a2e1466a0d1", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseTask, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseTask[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} taskGroupId
     */
    public getTasksForTaskGroup(
        project: string,
        releaseId: number,
        environmentId: number,
        taskGroupId: number
        ): Q.Promise<ReleaseInterfaces.ReleaseTask[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseTask[]>();

        var onResult = (err: any, statusCode: number, tasks: ReleaseInterfaces.ReleaseTask[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tasks);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId,
            taskGroupId: taskGroupId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "4259191d-4b0a-4409-9fb3-09f22ab9bc47", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseTask, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseTask[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     */
    public getArtifactTypeDefinitions(
        project: string
        ): Q.Promise<ReleaseInterfaces.ArtifactTypeDefinition[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ArtifactTypeDefinition[]>();

        var onResult = (err: any, statusCode: number, types: ReleaseInterfaces.ArtifactTypeDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(types);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "8efc2a3c-1fc8-4f6d-9822-75e98cecb48f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ArtifactTypeDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ArtifactTypeDefinition[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     */
    public getArtifactVersions(
        project: string,
        releaseDefinitionId: number
        ): Q.Promise<ReleaseInterfaces.ArtifactVersionQueryResult> {
    
        var deferred = Q.defer<ReleaseInterfaces.ArtifactVersionQueryResult>();

        var onResult = (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(version);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            releaseDefinitionId: releaseDefinitionId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "30fc787e-a9e0-4a07-9fbc-3e903aa051d2", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ArtifactVersionQueryResult>>deferred.promise;
    }

    /**
     * @param {ReleaseInterfaces.Artifact[]} artifacts
     * @param {string} project - Project ID or project name
     */
    public getArtifactVersionsForSources(
        artifacts: ReleaseInterfaces.Artifact[],
        project: string
        ): Q.Promise<ReleaseInterfaces.ArtifactVersionQueryResult> {
    
        var deferred = Q.defer<ReleaseInterfaces.ArtifactVersionQueryResult>();

        var onResult = (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(version);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "30fc787e-a9e0-4a07-9fbc-3e903aa051d2", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, artifacts, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ArtifactVersionQueryResult>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     */
    public getReleaseWorkItemsRefs(
        project: string,
        releaseId: number,
        baseReleaseId?: number,
        top?: number
        ): Q.Promise<ReleaseInterfaces.ReleaseWorkItemRef[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseWorkItemRef[]>();

        var onResult = (err: any, statusCode: number, workitems: ReleaseInterfaces.ReleaseWorkItemRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workitems);
            }
        };

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            baseReleaseId: baseReleaseId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "4f165cc0-875c-4768-b148-f12f78769fab", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<ReleaseInterfaces.ReleaseWorkItemRef[]>>deferred.promise;
    }

}
