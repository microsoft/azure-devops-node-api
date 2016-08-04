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
    getAgentArtifactDefinitions(project: string, releaseId: number): Promise<ReleaseInterfaces.AgentArtifactDefinition[]>;
    getApprovalHistory(project: string, approvalStepId: number): Promise<ReleaseInterfaces.ReleaseApproval>;
    getApproval(project: string, approvalId: number, includeHistory?: boolean): Promise<ReleaseInterfaces.ReleaseApproval>;
    updateReleaseApproval(approval: ReleaseInterfaces.ReleaseApproval, project: string, approvalId: number): Promise<ReleaseInterfaces.ReleaseApproval>;
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: ReleaseInterfaces.ApprovalStatus, releaseIdsFilter?: number[], typeFilter?: ReleaseInterfaces.ApprovalType, top?: number, continuationToken?: number, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, includeMyGroupApprovals?: boolean): Promise<ReleaseInterfaces.ReleaseApproval[]>;
    getReleaseChanges(project: string, releaseId: number, baseReleaseId?: number, top?: number): Promise<ReleaseInterfaces.Change[]>;
    createReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Promise<ReleaseInterfaces.ReleaseDefinition>;
    deleteReleaseDefinition(project: string, definitionId: number): Promise<void>;
    getReleaseDefinition(project: string, definitionId: number): Promise<ReleaseInterfaces.ReleaseDefinition>;
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number): Promise<NodeJS.ReadableStream>;
    getReleaseDefinitions(project: string, searchText?: string, expand?: ReleaseInterfaces.ReleaseDefinitionExpands): Promise<ReleaseInterfaces.ReleaseDefinition[]>;
    getReleaseDefinitionsForArtifactSource(project: string, artifactType: string, artifactSourceId: string, expand?: ReleaseInterfaces.ReleaseDefinitionExpands): Promise<ReleaseInterfaces.ReleaseDefinition[]>;
    updateReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Promise<ReleaseInterfaces.ReleaseDefinition>;
    getDeployments(project: string, definitionId?: number, definitionEnvironmentId?: number, createdBy?: string, operationStatus?: ReleaseInterfaces.DeploymentStatus, deploymentStatus?: ReleaseInterfaces.DeploymentStatus, latestAttemptsOnly?: boolean, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, top?: number, continuationToken?: number): Promise<ReleaseInterfaces.Deployment[]>;
    getDeploymentsForMultipleEnvironments(queryParameters: ReleaseInterfaces.DeploymentQueryParameters, project: string): Promise<ReleaseInterfaces.Deployment[]>;
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number): Promise<ReleaseInterfaces.ReleaseEnvironment>;
    updateReleaseEnvironment(environmentUpdateData: ReleaseInterfaces.ReleaseEnvironmentUpdateMetadata, project: string, releaseId: number, environmentId: number): Promise<ReleaseInterfaces.ReleaseEnvironment>;
    createDefinitionEnvironmentTemplate(template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate, project: string): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<void>;
    getDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    listDefinitionEnvironmentTemplates(project: string): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>;
    getReleaseHistory(project: string, releaseId: number): Promise<ReleaseInterfaces.ReleaseRevision[]>;
    getInputValues(query: FormInputInterfaces.InputValuesQuery, project: string): Promise<FormInputInterfaces.InputValuesQuery>;
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId?: number): Promise<NodeJS.ReadableStream>;
    getLogs(project: string, releaseId: number): Promise<NodeJS.ReadableStream>;
    getTaskLog(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number, taskId: number): Promise<NodeJS.ReadableStream>;
    getManualIntervention(project: string, releaseId: number, manualInterventionId: number): Promise<ReleaseInterfaces.ManualIntervention>;
    getManualInterventions(project: string, releaseId: number): Promise<ReleaseInterfaces.ManualIntervention[]>;
    updateManualIntervention(manualInterventionUpdateMetadata: ReleaseInterfaces.ManualInterventionUpdateMetadata, project: string, releaseId: number, manualInterventionId: number): Promise<ReleaseInterfaces.ManualIntervention>;
    createRelease(releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata, project: string): Promise<ReleaseInterfaces.Release>;
    deleteRelease(project: string, releaseId: number, comment?: string): Promise<void>;
    getRelease(project: string, releaseId: number, includeAllApprovals?: boolean): Promise<ReleaseInterfaces.Release>;
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact?: boolean, definitionEnvironmentIdsFilter?: number[]): Promise<ReleaseInterfaces.ReleaseDefinitionSummary>;
    getReleaseRevision(project: string, releaseId: number, definitionSnapshotRevision: number): Promise<NodeJS.ReadableStream>;
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: ReleaseInterfaces.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: ReleaseInterfaces.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean): Promise<ReleaseInterfaces.Release[]>;
    undeleteRelease(project: string, releaseId: number, comment: string): Promise<void>;
    updateRelease(release: ReleaseInterfaces.Release, project: string, releaseId: number): Promise<ReleaseInterfaces.Release>;
    updateReleaseResource(releaseUpdateMetadata: ReleaseInterfaces.ReleaseUpdateMetadata, project: string, releaseId: number): Promise<ReleaseInterfaces.Release>;
    getDefinitionRevision(project: string, definitionId: number, revision: number): Promise<NodeJS.ReadableStream>;
    getReleaseDefinitionHistory(project: string, definitionId: number): Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]>;
    getSummaryMailSections(project: string, releaseId: number): Promise<ReleaseInterfaces.SummaryMailSection[]>;
    sendSummaryMail(mailMessage: ReleaseInterfaces.MailMessage, project: string, releaseId: number): Promise<void>;
    getSourceBranches(project: string, definitionId: number): Promise<string[]>;
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
    public getAgentArtifactDefinitions(
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.AgentArtifactDefinition[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.AgentArtifactDefinition[]>();

        let onResult = (err: any, statusCode: number, agentartifacts: ReleaseInterfaces.AgentArtifactDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agentartifacts);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "f2571c27-bf50-4938-b396-32d109ddef26", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.AgentArtifactDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} approvalStepId
    */
    public getApprovalHistory(
        project: string,
        approvalStepId: number
        ): Promise<ReleaseInterfaces.ReleaseApproval> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseApproval>();

        let onResult = (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approval);
            }
        };

        let routeValues: any = {
            project: project,
            approvalStepId: approvalStepId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "250c7158-852e-4130-a00f-a0cce9b72d05", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ReleaseApproval> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseApproval>();

        let onResult = (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approval);
            }
        };

        let routeValues: any = {
            project: project,
            approvalId: approvalId
        };

        let queryValues: any = {
            includeHistory: includeHistory,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "9328e074-59fb-465a-89d9-b09c82ee5109", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ReleaseApproval> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseApproval>();

        let onResult = (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approval);
            }
        };

        let routeValues: any = {
            project: project,
            approvalId: approvalId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "9328e074-59fb-465a-89d9-b09c82ee5109", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, approval, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ReleaseApproval[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseApproval[]>();

        let onResult = (err: any, statusCode: number, approvals: ReleaseInterfaces.ReleaseApproval[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approvals);
            }
        };

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
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "b47c6458-e73b-47cb-a770-4df1e8813a91", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.Change[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.Change[]>();

        let onResult = (err: any, statusCode: number, changes: ReleaseInterfaces.Change[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(changes);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        let queryValues: any = {
            baseReleaseId: baseReleaseId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "8dcf9fe9-ca37-4113-8ee1-37928e98407c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Change, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition
    * @param {string} project - Project ID or project name
    */
    public createReleaseDefinition(
        releaseDefinition: ReleaseInterfaces.ReleaseDefinition,
        project: string
        ): Promise<ReleaseInterfaces.ReleaseDefinition> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition>();

        let onResult = (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, releaseDefinition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    */
    public deleteReleaseDefinition(
        project: string,
        definitionId: number
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    */
    public getReleaseDefinition(
        project: string,
        definitionId: number
        ): Promise<ReleaseInterfaces.ReleaseDefinition> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition>();

        let onResult = (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        };

        let routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, definition: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        };

        let routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        let queryValues: any = {
            revision: revision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ReleaseDefinition[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition[]>();

        let onResult = (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definitions);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            searchText: searchText,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ReleaseDefinition[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition[]>();

        let onResult = (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definitions);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            artifactType: artifactType,
            artifactSourceId: artifactSourceId,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition
    * @param {string} project - Project ID or project name
    */
    public updateReleaseDefinition(
        releaseDefinition: ReleaseInterfaces.ReleaseDefinition,
        project: string
        ): Promise<ReleaseInterfaces.ReleaseDefinition> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition>();

        let onResult = (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, releaseDefinition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    * @param {number} definitionEnvironmentId
    * @param {string} createdBy
    * @param {ReleaseInterfaces.DeploymentStatus} operationStatus
    * @param {ReleaseInterfaces.DeploymentStatus} deploymentStatus
    * @param {boolean} latestAttemptsOnly
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
        latestAttemptsOnly?: boolean,
        queryOrder?: ReleaseInterfaces.ReleaseQueryOrder,
        top?: number,
        continuationToken?: number
        ): Promise<ReleaseInterfaces.Deployment[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.Deployment[]>();

        let onResult = (err: any, statusCode: number, deployments: ReleaseInterfaces.Deployment[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(deployments);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            definitionId: definitionId,
            definitionEnvironmentId: definitionEnvironmentId,
            createdBy: createdBy,
            operationStatus: operationStatus,
            deploymentStatus: deploymentStatus,
            latestAttemptsOnly: latestAttemptsOnly,
            queryOrder: queryOrder,
            '$top': top,
            continuationToken: continuationToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "b005ef73-cddc-448e-9ba2-5193bf36b19f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Deployment, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ReleaseInterfaces.DeploymentQueryParameters} queryParameters
    * @param {string} project - Project ID or project name
    */
    public getDeploymentsForMultipleEnvironments(
        queryParameters: ReleaseInterfaces.DeploymentQueryParameters,
        project: string
        ): Promise<ReleaseInterfaces.Deployment[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.Deployment[]>();

        let onResult = (err: any, statusCode: number, deployment: ReleaseInterfaces.Deployment[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(deployment);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "b005ef73-cddc-448e-9ba2-5193bf36b19f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.DeploymentQueryParameters, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Deployment, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, queryParameters, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ReleaseEnvironment> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseEnvironment>();

        let onResult = (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environment);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a7e426b1-03dc-48af-9dfe-c98bac612dcb", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseEnvironment, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ReleaseEnvironment> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseEnvironment>();

        let onResult = (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environment);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a7e426b1-03dc-48af-9dfe-c98bac612dcb", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseEnvironmentUpdateMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseEnvironment, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, environmentUpdateData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate} template
    * @param {string} project - Project ID or project name
    */
    public createDefinitionEnvironmentTemplate(
        template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate,
        project: string
        ): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>();

        let onResult = (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplate);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, template, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    public deleteDefinitionEnvironmentTemplate(
        project: string,
        templateId: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            templateId: templateId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    public getDefinitionEnvironmentTemplate(
        project: string,
        templateId: string
        ): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>();

        let onResult = (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplate);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            templateId: templateId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public listDefinitionEnvironmentTemplates(
        project: string
        ): Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>();

        let onResult = (err: any, statusCode: number, environmenttemplates: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplates);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    */
    public getReleaseHistory(
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.ReleaseRevision[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseRevision[]>();

        let onResult = (err: any, statusCode: number, history: ReleaseInterfaces.ReleaseRevision[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(history);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "23f461c8-629a-4144-a076-3054fa5f268a", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseRevision, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {FormInputInterfaces.InputValuesQuery} query
    * @param {string} project - Project ID or project name
    */
    public getInputValues(
        query: FormInputInterfaces.InputValuesQuery,
        project: string
        ): Promise<FormInputInterfaces.InputValuesQuery> {
    
        let deferred = Q.defer<FormInputInterfaces.InputValuesQuery>();

        let onResult = (err: any, statusCode: number, inputvaluesquery: FormInputInterfaces.InputValuesQuery) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(inputvaluesquery);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "71dd499b-317d-45ea-9134-140ea1932b5e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, query, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId,
            taskId: taskId
        };

        let queryValues: any = {
            attemptId: attemptId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "e71ba1ed-c0a4-4a28-a61f-2dd5f68cf3fd", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    */
    public getLogs(
        project: string,
        releaseId: number
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "c37fbab5-214b-48e4-a55b-cb6b4f6e4038", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    * @param {number} environmentId
    * @param {number} releaseDeployPhaseId
    * @param {number} taskId
    */
    public getTaskLog(
        project: string,
        releaseId: number,
        environmentId: number,
        releaseDeployPhaseId: number,
        taskId: number
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId,
            releaseDeployPhaseId: releaseDeployPhaseId,
            taskId: taskId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "17c91af7-09fd-4256-bff1-c24ee4f73bc0", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ManualIntervention> {
    
        let deferred = Q.defer<ReleaseInterfaces.ManualIntervention>();

        let onResult = (err: any, statusCode: number, manualIntervention: ReleaseInterfaces.ManualIntervention) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(manualIntervention);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId,
            manualInterventionId: manualInterventionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "616c46e4-f370-4456-adaa-fbaf79c7b79e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ManualIntervention, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    */
    public getManualInterventions(
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.ManualIntervention[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ManualIntervention[]>();

        let onResult = (err: any, statusCode: number, manualInterventions: ReleaseInterfaces.ManualIntervention[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(manualInterventions);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "616c46e4-f370-4456-adaa-fbaf79c7b79e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ManualIntervention, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ManualIntervention> {
    
        let deferred = Q.defer<ReleaseInterfaces.ManualIntervention>();

        let onResult = (err: any, statusCode: number, manualIntervention: ReleaseInterfaces.ManualIntervention) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(manualIntervention);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId,
            manualInterventionId: manualInterventionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "616c46e4-f370-4456-adaa-fbaf79c7b79e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ManualInterventionUpdateMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ManualIntervention, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, manualInterventionUpdateMetadata, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ReleaseInterfaces.ReleaseStartMetadata} releaseStartMetadata
    * @param {string} project - Project ID or project name
    */
    public createRelease(
        releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata,
        project: string
        ): Promise<ReleaseInterfaces.Release> {
    
        let deferred = Q.defer<ReleaseInterfaces.Release>();

        let onResult = (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseStartMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, releaseStartMetadata, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        let queryValues: any = {
            comment: comment,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.Release> {
    
        let deferred = Q.defer<ReleaseInterfaces.Release>();

        let onResult = (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        let queryValues: any = {
            includeAllApprovals: includeAllApprovals,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    * @param {number} releaseCount
    * @param {boolean} includeArtifact
    * @param {number[]} definitionEnvironmentIdsFilter
    */
    public getReleaseDefinitionSummary(
        project: string,
        definitionId: number,
        releaseCount: number,
        includeArtifact?: boolean,
        definitionEnvironmentIdsFilter?: number[]
        ): Promise<ReleaseInterfaces.ReleaseDefinitionSummary> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionSummary>();

        let onResult = (err: any, statusCode: number, release: ReleaseInterfaces.ReleaseDefinitionSummary) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            definitionId: definitionId,
            releaseCount: releaseCount,
            includeArtifact: includeArtifact,
            definitionEnvironmentIdsFilter: definitionEnvironmentIdsFilter && definitionEnvironmentIdsFilter.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionSummary, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, release: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        let queryValues: any = {
            definitionSnapshotRevision: definitionSnapshotRevision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.Release[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.Release[]>();

        let onResult = (err: any, statusCode: number, releases: ReleaseInterfaces.Release[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(releases);
            }
        };

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
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        let queryValues: any = {
            comment: comment,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.Release> {
    
        let deferred = Q.defer<ReleaseInterfaces.Release>();

        let onResult = (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, release, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.Release> {
    
        let deferred = Q.defer<ReleaseInterfaces.Release>();

        let onResult = (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.4", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseUpdateMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, releaseUpdateMetadata, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, revision: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revision);
            }
        };

        let routeValues: any = {
            project: project,
            definitionId: definitionId,
            revision: revision
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "258b82e0-9d41-43f3-86d6-fef14ddd44bc", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    */
    public getReleaseDefinitionHistory(
        project: string,
        definitionId: number
        ): Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseDefinitionRevision[]>();

        let onResult = (err: any, statusCode: number, revisions: ReleaseInterfaces.ReleaseDefinitionRevision[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revisions);
            }
        };

        let routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "258b82e0-9d41-43f3-86d6-fef14ddd44bc", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionRevision, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    */
    public getSummaryMailSections(
        project: string,
        releaseId: number
        ): Promise<ReleaseInterfaces.SummaryMailSection[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.SummaryMailSection[]>();

        let onResult = (err: any, statusCode: number, sendmail: ReleaseInterfaces.SummaryMailSection[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(sendmail);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "224e92b2-8d13-4c14-b120-13d877c516f8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.SummaryMailSection, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "224e92b2-8d13-4c14-b120-13d877c516f8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.MailMessage, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, mailMessage, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    */
    public getSourceBranches(
        project: string,
        definitionId: number
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, sourcebranches: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(sourcebranches);
            }
        };

        let routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "0e5def23-78b3-461f-8198-1558f25041c8", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ReleaseTask[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseTask[]>();

        let onResult = (err: any, statusCode: number, tasks: ReleaseInterfaces.ReleaseTask[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tasks);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId
        };

        let queryValues: any = {
            attemptId: attemptId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "36b276e0-3c70-4320-a63c-1a2e1466a0d1", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseTask, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    * @param {number} environmentId
    * @param {number} releaseDeployPhaseId
    */
    public getTasksForTaskGroup(
        project: string,
        releaseId: number,
        environmentId: number,
        releaseDeployPhaseId: number
        ): Promise<ReleaseInterfaces.ReleaseTask[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseTask[]>();

        let onResult = (err: any, statusCode: number, tasks: ReleaseInterfaces.ReleaseTask[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tasks);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId,
            releaseDeployPhaseId: releaseDeployPhaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "Release", "4259191d-4b0a-4409-9fb3-09f22ab9bc47", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseTask, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public getArtifactTypeDefinitions(
        project: string
        ): Promise<ReleaseInterfaces.ArtifactTypeDefinition[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ArtifactTypeDefinition[]>();

        let onResult = (err: any, statusCode: number, types: ReleaseInterfaces.ArtifactTypeDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(types);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "8efc2a3c-1fc8-4f6d-9822-75e98cecb48f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ArtifactTypeDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseDefinitionId
    */
    public getArtifactVersions(
        project: string,
        releaseDefinitionId: number
        ): Promise<ReleaseInterfaces.ArtifactVersionQueryResult> {
    
        let deferred = Q.defer<ReleaseInterfaces.ArtifactVersionQueryResult>();

        let onResult = (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(version);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            releaseDefinitionId: releaseDefinitionId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "30fc787e-a9e0-4a07-9fbc-3e903aa051d2", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {ReleaseInterfaces.Artifact[]} artifacts
    * @param {string} project - Project ID or project name
    */
    public getArtifactVersionsForSources(
        artifacts: ReleaseInterfaces.Artifact[],
        project: string
        ): Promise<ReleaseInterfaces.ArtifactVersionQueryResult> {
    
        let deferred = Q.defer<ReleaseInterfaces.ArtifactVersionQueryResult>();

        let onResult = (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(version);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "30fc787e-a9e0-4a07-9fbc-3e903aa051d2", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, artifacts, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<ReleaseInterfaces.ReleaseWorkItemRef[]> {
    
        let deferred = Q.defer<ReleaseInterfaces.ReleaseWorkItemRef[]>();

        let onResult = (err: any, statusCode: number, workitems: ReleaseInterfaces.ReleaseWorkItemRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workitems);
            }
        };

        let routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        let queryValues: any = {
            baseReleaseId: baseReleaseId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "Release", "4f165cc0-875c-4768-b148-f12f78769fab", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

}
