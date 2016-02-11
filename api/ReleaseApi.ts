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

/// <reference path="../node/node.d.ts"/>
/// <reference path="../q/Q.d.ts"/>

import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import FormInputInterfaces = require("./interfaces/common/FormInputInterfaces");
import ReleaseInterfaces = require("./interfaces/ReleaseInterfaces");

export interface IReleaseApi extends basem.ClientApiBase {
    getAgentArtifactDefinitions(project: string, releaseId: number, onResult: (err: any, statusCode: number, agentartifacts: ReleaseInterfaces.AgentArtifactDefinition[]) => void): void;
    getApprovals(project: string, assignedToFilter: string, statusFilter: ReleaseInterfaces.ApprovalStatus, releaseIdsFilter: number[], onResult: (err: any, statusCode: number, approvals: ReleaseInterfaces.ReleaseApproval[]) => void): void;
    getApprovalHistory(project: string, approvalStepId: number, onResult: (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => void): void;
    updateReleaseApproval(approval: ReleaseInterfaces.ReleaseApproval, project: string, approvalId: number, onResult: (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => void): void;
    getReleaseChanges(project: string, releaseId: number, baseReleaseId: number, top: number, onResult: (err: any, statusCode: number, changes: ReleaseInterfaces.Change[]) => void): void;
    createReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string, onResult: (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => void): void;
    deleteReleaseDefinition(project: string, definitionId: number, onResult: (err: any, statusCode: number) => void): void;
    getReleaseDefinition(project: string, definitionId: number, onResult: (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => void): void;
    getReleaseDefinitions(project: string, searchText: string, artifactIdFilter: number, expand: ReleaseInterfaces.ReleaseDefinitionExpands, onResult: (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => void): void;
    getReleaseDefinitionsForArtifactSource(project: string, artifactType: string, artifactSourceId: string, expand: ReleaseInterfaces.ReleaseDefinitionExpands, onResult: (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => void): void;
    updateReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string, onResult: (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => void): void;
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number, onResult: (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => void): void;
    updateReleaseEnvironment(environmentUpdateData: any, project: string, releaseId: number, environmentId: number, onResult: (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => void): void;
    createDefinitionEnvironmentTemplate(template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate, project: string, onResult: (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => void): void;
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string, onResult: (err: any, statusCode: number) => void): void;
    getDefinitionEnvironmentTemplate(project: string, templateId: string, onResult: (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => void): void;
    listDefinitionEnvironmentTemplates(project: string, onResult: (err: any, statusCode: number, environmenttemplates: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]) => void): void;
    getInputValues(query: FormInputInterfaces.InputValuesQuery, project: string, onResult: (err: any, statusCode: number, inputvaluesquery: FormInputInterfaces.InputValuesQuery) => void): void;
    getLogs(project: string, releaseId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    createRelease(releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata, project: string, onResult: (err: any, statusCode: number, release: ReleaseInterfaces.Release) => void): void;
    deleteRelease(project: string, releaseId: number, onResult: (err: any, statusCode: number) => void): void;
    getRelease(project: string, releaseId: number, includeAllApprovals: boolean, onResult: (err: any, statusCode: number, release: ReleaseInterfaces.Release) => void): void;
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact: boolean, onResult: (err: any, statusCode: number, release: ReleaseInterfaces.ReleaseDefinitionSummary) => void): void;
    getReleases(project: string, definitionId: number, definitionEnvironmentId: number, searchText: string, createdBy: string, statusFilter: ReleaseInterfaces.ReleaseStatus, minCreatedTime: Date, maxCreatedTime: Date, queryOrder: ReleaseInterfaces.ReleaseQueryOrder, top: number, continuationToken: number, expand: ReleaseInterfaces.ReleaseExpands, artifactTypeId: string, artifactSourceId: number, artifactVersionId: string, onResult: (err: any, statusCode: number, releases: ReleaseInterfaces.Release[]) => void): void;
    updateRelease(release: ReleaseInterfaces.Release, project: string, releaseId: number, onResult: (err: any, statusCode: number, release: ReleaseInterfaces.Release) => void): void;
    updateReleaseResource(releaseUpdateMetadata: ReleaseInterfaces.ReleaseUpdateMetadata, project: string, releaseId: number, onResult: (err: any, statusCode: number, release: ReleaseInterfaces.Release) => void): void;
    getReleaseDefinitionHistory(project: string, definitionId: number, onResult: (err: any, statusCode: number, revisions: ReleaseInterfaces.ReleaseDefinitionRevision[]) => void): void;
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getArtifactsSources(project: string, typeId: string, onResult: (err: any, statusCode: number, source: ReleaseInterfaces.ArtifactSourceIdsQueryResult) => void): void;
    getTasks(project: string, releaseId: number, environmentId: number, attemptId: number, onResult: (err: any, statusCode: number, tasks: ReleaseInterfaces.ReleaseTask[]) => void): void;
    getArtifactTypeDefinitions(project: string, onResult: (err: any, statusCode: number, types: ReleaseInterfaces.ArtifactTypeDefinition[]) => void): void;
    getArtifactVersions(project: string, releaseDefinitionId: number, onResult: (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => void): void;
    getArtifactVersionsForSources(artifacts: ReleaseInterfaces.Artifact[], project: string, onResult: (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => void): void;
    getReleaseWorkItemsRefs(project: string, releaseId: number, baseReleaseId: number, top: number, onResult: (err: any, statusCode: number, workitems: ReleaseInterfaces.ReleaseWorkItemRef[]) => void): void;
}

export interface IQReleaseApi extends basem.QClientApiBase {
    getAgentArtifactDefinitions(project: string, releaseId: number): Q.Promise<ReleaseInterfaces.AgentArtifactDefinition[]>;
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: ReleaseInterfaces.ApprovalStatus, releaseIdsFilter?: number[]): Q.Promise<ReleaseInterfaces.ReleaseApproval[]>;
    getApprovalHistory(project: string, approvalStepId: number): Q.Promise<ReleaseInterfaces.ReleaseApproval>;
    updateReleaseApproval(approval: ReleaseInterfaces.ReleaseApproval, project: string, approvalId: number): Q.Promise<ReleaseInterfaces.ReleaseApproval>;
    getReleaseChanges(project: string, releaseId: number, baseReleaseId?: number, top?: number): Q.Promise<ReleaseInterfaces.Change[]>;
    createReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Q.Promise<ReleaseInterfaces.ReleaseDefinition>;
    deleteReleaseDefinition(project: string, definitionId: number): Q.Promise<void>;
    getReleaseDefinition(project: string, definitionId: number): Q.Promise<ReleaseInterfaces.ReleaseDefinition>;
    getReleaseDefinitions(project: string, searchText?: string, artifactIdFilter?: number, expand?: ReleaseInterfaces.ReleaseDefinitionExpands): Q.Promise<ReleaseInterfaces.ReleaseDefinition[]>;
    getReleaseDefinitionsForArtifactSource(project: string, artifactType: string, artifactSourceId: string, expand?: ReleaseInterfaces.ReleaseDefinitionExpands): Q.Promise<ReleaseInterfaces.ReleaseDefinition[]>;
    updateReleaseDefinition(releaseDefinition: ReleaseInterfaces.ReleaseDefinition, project: string): Q.Promise<ReleaseInterfaces.ReleaseDefinition>;
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number): Q.Promise<ReleaseInterfaces.ReleaseEnvironment>;
    updateReleaseEnvironment(environmentUpdateData: any, project: string, releaseId: number, environmentId: number): Q.Promise<ReleaseInterfaces.ReleaseEnvironment>;
    createDefinitionEnvironmentTemplate(template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate, project: string): Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string): Q.Promise<void>;
    getDefinitionEnvironmentTemplate(project: string, templateId: string): Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    listDefinitionEnvironmentTemplates(project: string): Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>;
    getInputValues(query: FormInputInterfaces.InputValuesQuery, project: string): Q.Promise<FormInputInterfaces.InputValuesQuery>;
    getLogs(project: string, releaseId: number): Q.Promise<NodeJS.ReadableStream>;
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId?: number): Q.Promise<NodeJS.ReadableStream>;
    createRelease(releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata, project: string): Q.Promise<ReleaseInterfaces.Release>;
    deleteRelease(project: string, releaseId: number): Q.Promise<void>;
    getRelease(project: string, releaseId: number, includeAllApprovals?: boolean): Q.Promise<ReleaseInterfaces.Release>;
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact?: boolean): Q.Promise<ReleaseInterfaces.ReleaseDefinitionSummary>;
    getReleases(project: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: ReleaseInterfaces.ReleaseStatus, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: ReleaseInterfaces.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: ReleaseInterfaces.ReleaseExpands, artifactTypeId?: string, artifactSourceId?: number, artifactVersionId?: string): Q.Promise<ReleaseInterfaces.Release[]>;
    updateRelease(release: ReleaseInterfaces.Release, project: string, releaseId: number): Q.Promise<ReleaseInterfaces.Release>;
    updateReleaseResource(releaseUpdateMetadata: ReleaseInterfaces.ReleaseUpdateMetadata, project: string, releaseId: number): Q.Promise<ReleaseInterfaces.Release>;
    getReleaseDefinitionHistory(project: string, definitionId: number): Q.Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]>;
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number): Q.Promise<NodeJS.ReadableStream>;
    getArtifactsSources(project: string, typeId?: string): Q.Promise<ReleaseInterfaces.ArtifactSourceIdsQueryResult>;
    getTasks(project: string, releaseId: number, environmentId: number, attemptId?: number): Q.Promise<ReleaseInterfaces.ReleaseTask[]>;
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
     * @param onResult callback function with the resulting ReleaseInterfaces.AgentArtifactDefinition[]
     */
    public getAgentArtifactDefinitions(
        project: string,
        releaseId: number,
        onResult: (err: any, statusCode: number, agentartifacts: ReleaseInterfaces.AgentArtifactDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "f2571c27-bf50-4938-b396-32d109ddef26", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.AgentArtifactDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} assignedToFilter
     * @param {ReleaseInterfaces.ApprovalStatus} statusFilter
     * @param {number[]} releaseIdsFilter
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseApproval[]
     */
    public getApprovals(
        project: string,
        assignedToFilter: string,
        statusFilter: ReleaseInterfaces.ApprovalStatus,
        releaseIdsFilter: number[],
        onResult: (err: any, statusCode: number, approvals: ReleaseInterfaces.ReleaseApproval[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            assignedToFilter: assignedToFilter,
            statusFilter: statusFilter,
            releaseIdsFilter: releaseIdsFilter && releaseIdsFilter.join(","),
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "b47c6458-e73b-47cb-a770-4df1e8813a91", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} approvalStepId
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseApproval
     */
    public getApprovalHistory(
        project: string,
        approvalStepId: number,
        onResult: (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => void
        ): void {

        var routeValues: any = {
            project: project,
            approvalStepId: approvalStepId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "250c7158-852e-4130-a00f-a0cce9b72d05", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseApproval} approval
     * @param {string} project - Project ID or project name
     * @param {number} approvalId
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseApproval
     */
    public updateReleaseApproval(
        approval: ReleaseInterfaces.ReleaseApproval,
        project: string,
        approvalId: number,
        onResult: (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => void
        ): void {

        var routeValues: any = {
            project: project,
            approvalId: approvalId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "9328e074-59fb-465a-89d9-b09c82ee5109", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, approval, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     * @param onResult callback function with the resulting ReleaseInterfaces.Change[]
     */
    public getReleaseChanges(
        project: string,
        releaseId: number,
        baseReleaseId: number,
        top: number,
        onResult: (err: any, statusCode: number, changes: ReleaseInterfaces.Change[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            baseReleaseId: baseReleaseId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "8dcf9fe9-ca37-4113-8ee1-37928e98407c", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Change, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinition
     */
    public createReleaseDefinition(
        releaseDefinition: ReleaseInterfaces.ReleaseDefinition,
        project: string,
        onResult: (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, releaseDefinition, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param onResult callback function
     */
    public deleteReleaseDefinition(
        project: string,
        definitionId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinition
     */
    public getReleaseDefinition(
        project: string,
        definitionId: number,
        onResult: (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} searchText
     * @param {number} artifactIdFilter
     * @param {ReleaseInterfaces.ReleaseDefinitionExpands} expand
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinition[]
     */
    public getReleaseDefinitions(
        project: string,
        searchText: string,
        artifactIdFilter: number,
        expand: ReleaseInterfaces.ReleaseDefinitionExpands,
        onResult: (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            searchText: searchText,
            artifactIdFilter: artifactIdFilter,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} artifactType
     * @param {string} artifactSourceId
     * @param {ReleaseInterfaces.ReleaseDefinitionExpands} expand
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinition[]
     */
    public getReleaseDefinitionsForArtifactSource(
        project: string,
        artifactType: string,
        artifactSourceId: string,
        expand: ReleaseInterfaces.ReleaseDefinitionExpands,
        onResult: (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            artifactType: artifactType,
            artifactSourceId: artifactSourceId,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinition
     */
    public updateReleaseDefinition(
        releaseDefinition: ReleaseInterfaces.ReleaseDefinition,
        project: string,
        onResult: (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "d8f96f24-8ea7-4cb6-baab-2df8fc515665", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
            
            this.restClient.replace(url, apiVersion, releaseDefinition, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseEnvironment
     */
    public getReleaseEnvironment(
        project: string,
        releaseId: number,
        environmentId: number,
        onResult: (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a7e426b1-03dc-48af-9dfe-c98bac612dcb", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseEnvironment, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {any} environmentUpdateData
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseEnvironment
     */
    public updateReleaseEnvironment(
        environmentUpdateData: any,
        project: string,
        releaseId: number,
        environmentId: number,
        onResult: (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a7e426b1-03dc-48af-9dfe-c98bac612dcb", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseEnvironment, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, environmentUpdateData, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate} template
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate
     */
    public createDefinitionEnvironmentTemplate(
        template: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate,
        project: string,
        onResult: (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, template, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @param onResult callback function
     */
    public deleteDefinitionEnvironmentTemplate(
        project: string,
        templateId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            templateId: templateId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate
     */
    public getDefinitionEnvironmentTemplate(
        project: string,
        templateId: string,
        onResult: (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            templateId: templateId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]
     */
    public listDefinitionEnvironmentTemplates(
        project: string,
        onResult: (err: any, statusCode: number, environmenttemplates: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "6b03b696-824e-4479-8eb2-6644a51aba89", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {FormInputInterfaces.InputValuesQuery} query
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting FormInputInterfaces.InputValuesQuery
     */
    public getInputValues(
        query: FormInputInterfaces.InputValuesQuery,
        project: string,
        onResult: (err: any, statusCode: number, inputvaluesquery: FormInputInterfaces.InputValuesQuery) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "71dd499b-317d-45ea-9134-140ea1932b5e", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: FormInputInterfaces.TypeInfo.InputValuesQuery, responseTypeMetadata: FormInputInterfaces.TypeInfo.InputValuesQuery, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, query, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getLogs(
        project: string,
        releaseId: number,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "c37fbab5-214b-48e4-a55b-cb6b4f6e4038", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} taskId
     * @param {number} attemptId
     * @param onResult callback function with the resulting string
     */
    public getLog(
        project: string,
        releaseId: number,
        environmentId: number,
        taskId: number,
        attemptId: number,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId,
            taskId: taskId
        };

        var queryValues: any = {
            attemptId: attemptId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "e71ba1ed-c0a4-4a28-a61f-2dd5f68cf3fd", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseStartMetadata} releaseStartMetadata
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseInterfaces.Release
     */
    public createRelease(
        releaseStartMetadata: ReleaseInterfaces.ReleaseStartMetadata,
        project: string,
        onResult: (err: any, statusCode: number, release: ReleaseInterfaces.Release) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseStartMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, releaseStartMetadata, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param onResult callback function
     */
    public deleteRelease(
        project: string,
        releaseId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {boolean} includeAllApprovals
     * @param onResult callback function with the resulting ReleaseInterfaces.Release
     */
    public getRelease(
        project: string,
        releaseId: number,
        includeAllApprovals: boolean,
        onResult: (err: any, statusCode: number, release: ReleaseInterfaces.Release) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            includeAllApprovals: includeAllApprovals,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} releaseCount
     * @param {boolean} includeArtifact
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinitionSummary
     */
    public getReleaseDefinitionSummary(
        project: string,
        definitionId: number,
        releaseCount: number,
        includeArtifact: boolean,
        onResult: (err: any, statusCode: number, release: ReleaseInterfaces.ReleaseDefinitionSummary) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            definitionId: definitionId,
            releaseCount: releaseCount,
            includeArtifact: includeArtifact,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionSummary, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} definitionEnvironmentId
     * @param {string} searchText
     * @param {string} createdBy
     * @param {ReleaseInterfaces.ReleaseStatus} statusFilter
     * @param {Date} minCreatedTime
     * @param {Date} maxCreatedTime
     * @param {ReleaseInterfaces.ReleaseQueryOrder} queryOrder
     * @param {number} top
     * @param {number} continuationToken
     * @param {ReleaseInterfaces.ReleaseExpands} expand
     * @param {string} artifactTypeId
     * @param {number} artifactSourceId
     * @param {string} artifactVersionId
     * @param onResult callback function with the resulting ReleaseInterfaces.Release[]
     */
    public getReleases(
        project: string,
        definitionId: number,
        definitionEnvironmentId: number,
        searchText: string,
        createdBy: string,
        statusFilter: ReleaseInterfaces.ReleaseStatus,
        minCreatedTime: Date,
        maxCreatedTime: Date,
        queryOrder: ReleaseInterfaces.ReleaseQueryOrder,
        top: number,
        continuationToken: number,
        expand: ReleaseInterfaces.ReleaseExpands,
        artifactTypeId: string,
        artifactSourceId: number,
        artifactVersionId: string,
        onResult: (err: any, statusCode: number, releases: ReleaseInterfaces.Release[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            definitionId: definitionId,
            definitionEnvironmentId: definitionEnvironmentId,
            searchText: searchText,
            createdBy: createdBy,
            statusFilter: statusFilter,
            minCreatedTime: minCreatedTime,
            maxCreatedTime: maxCreatedTime,
            queryOrder: queryOrder,
            '$top': top,
            continuationToken: continuationToken,
            '$expand': expand,
            artifactTypeId: artifactTypeId,
            artifactSourceId: artifactSourceId,
            artifactVersionId: artifactVersionId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseInterfaces.Release} release
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param onResult callback function with the resulting ReleaseInterfaces.Release
     */
    public updateRelease(
        release: ReleaseInterfaces.Release,
        project: string,
        releaseId: number,
        onResult: (err: any, statusCode: number, release: ReleaseInterfaces.Release) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, release, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseInterfaces.ReleaseUpdateMetadata} releaseUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param onResult callback function with the resulting ReleaseInterfaces.Release
     */
    public updateReleaseResource(
        releaseUpdateMetadata: ReleaseInterfaces.ReleaseUpdateMetadata,
        project: string,
        releaseId: number,
        onResult: (err: any, statusCode: number, release: ReleaseInterfaces.Release) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a166fde7-27ad-408e-ba75-703c2cc9d500", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseUpdateMetadata, responseTypeMetadata: ReleaseInterfaces.TypeInfo.Release, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, releaseUpdateMetadata, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseDefinitionRevision[]
     */
    public getReleaseDefinitionHistory(
        project: string,
        definitionId: number,
        onResult: (err: any, statusCode: number, revisions: ReleaseInterfaces.ReleaseDefinitionRevision[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "258b82e0-9d41-43f3-86d6-fef14ddd44bc", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseDefinitionRevision, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {number} revision
     * @param onResult callback function with the resulting string
     */
    public getReleaseDefinitionRevision(
        project: string,
        definitionId: number,
        revision: number,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId,
            revision: revision
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "258b82e0-9d41-43f3-86d6-fef14ddd44bc", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} typeId
     * @param onResult callback function with the resulting ReleaseInterfaces.ArtifactSourceIdsQueryResult
     */
    public getArtifactsSources(
        project: string,
        typeId: string,
        onResult: (err: any, statusCode: number, source: ReleaseInterfaces.ArtifactSourceIdsQueryResult) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            typeId: typeId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "a9c09fe4-901e-4b2e-b05d-9888ad883ae9", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ArtifactSourceIdsQueryResult, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} environmentId
     * @param {number} attemptId
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseTask[]
     */
    public getTasks(
        project: string,
        releaseId: number,
        environmentId: number,
        attemptId: number,
        onResult: (err: any, statusCode: number, tasks: ReleaseInterfaces.ReleaseTask[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId,
            environmentId: environmentId
        };

        var queryValues: any = {
            attemptId: attemptId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "36b276e0-3c70-4320-a63c-1a2e1466a0d1", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseTask, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseInterfaces.ArtifactTypeDefinition[]
     */
    public getArtifactTypeDefinitions(
        project: string,
        onResult: (err: any, statusCode: number, types: ReleaseInterfaces.ArtifactTypeDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "8efc2a3c-1fc8-4f6d-9822-75e98cecb48f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ArtifactTypeDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @param onResult callback function with the resulting ReleaseInterfaces.ArtifactVersionQueryResult
     */
    public getArtifactVersions(
        project: string,
        releaseDefinitionId: number,
        onResult: (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            releaseDefinitionId: releaseDefinitionId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "30fc787e-a9e0-4a07-9fbc-3e903aa051d2", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ArtifactVersionQueryResult, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseInterfaces.Artifact[]} artifacts
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseInterfaces.ArtifactVersionQueryResult
     */
    public getArtifactVersionsForSources(
        artifacts: ReleaseInterfaces.Artifact[],
        project: string,
        onResult: (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "30fc787e-a9e0-4a07-9fbc-3e903aa051d2", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseInterfaces.TypeInfo.Artifact, responseTypeMetadata: ReleaseInterfaces.TypeInfo.ArtifactVersionQueryResult, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, artifacts, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} baseReleaseId
     * @param {number} top
     * @param onResult callback function with the resulting ReleaseInterfaces.ReleaseWorkItemRef[]
     */
    public getReleaseWorkItemsRefs(
        project: string,
        releaseId: number,
        baseReleaseId: number,
        top: number,
        onResult: (err: any, statusCode: number, workitems: ReleaseInterfaces.ReleaseWorkItemRef[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            baseReleaseId: baseReleaseId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Release", "4f165cc0-875c-4768-b148-f12f78769fab", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseInterfaces.TypeInfo.ReleaseWorkItemRef, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QReleaseApi extends basem.QClientApiBase implements IQReleaseApi {
    api: ReleaseApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, ReleaseApi);
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

        this.api.getAgentArtifactDefinitions(project, releaseId, (err: any, statusCode: number, agentartifacts: ReleaseInterfaces.AgentArtifactDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agentartifacts);
            }
        });

        return <Q.Promise<ReleaseInterfaces.AgentArtifactDefinition[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} assignedToFilter
    * @param {ReleaseInterfaces.ApprovalStatus} statusFilter
    * @param {number[]} releaseIdsFilter
    */
    public getApprovals(
        project: string,
        assignedToFilter?: string,
        statusFilter?: ReleaseInterfaces.ApprovalStatus,
        releaseIdsFilter?: number[]
        ): Q.Promise<ReleaseInterfaces.ReleaseApproval[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseApproval[]>();

        this.api.getApprovals(project, assignedToFilter, statusFilter, releaseIdsFilter, (err: any, statusCode: number, approvals: ReleaseInterfaces.ReleaseApproval[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approvals);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ReleaseApproval[]>>deferred.promise;
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

        this.api.getApprovalHistory(project, approvalStepId, (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approval);
            }
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

        this.api.updateReleaseApproval(approval, project, approvalId, (err: any, statusCode: number, approval: ReleaseInterfaces.ReleaseApproval) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approval);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ReleaseApproval>>deferred.promise;
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

        this.api.getReleaseChanges(project, releaseId, baseReleaseId, top, (err: any, statusCode: number, changes: ReleaseInterfaces.Change[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(changes);
            }
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

        this.api.createReleaseDefinition(releaseDefinition, project, (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
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

        this.api.deleteReleaseDefinition(project, definitionId, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
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

        this.api.getReleaseDefinition(project, definitionId, (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinition>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} searchText
    * @param {number} artifactIdFilter
    * @param {ReleaseInterfaces.ReleaseDefinitionExpands} expand
    */
    public getReleaseDefinitions(
        project: string,
        searchText?: string,
        artifactIdFilter?: number,
        expand?: ReleaseInterfaces.ReleaseDefinitionExpands
        ): Q.Promise<ReleaseInterfaces.ReleaseDefinition[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseDefinition[]>();

        this.api.getReleaseDefinitions(project, searchText, artifactIdFilter, expand, (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definitions);
            }
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

        this.api.getReleaseDefinitionsForArtifactSource(project, artifactType, artifactSourceId, expand, (err: any, statusCode: number, definitions: ReleaseInterfaces.ReleaseDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definitions);
            }
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

        this.api.updateReleaseDefinition(releaseDefinition, project, (err: any, statusCode: number, definition: ReleaseInterfaces.ReleaseDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinition>>deferred.promise;
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

        this.api.getReleaseEnvironment(project, releaseId, environmentId, (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environment);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ReleaseEnvironment>>deferred.promise;
    }

    /**
    * @param {any} environmentUpdateData
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    * @param {number} environmentId
    */
    public updateReleaseEnvironment(
        environmentUpdateData: any,
        project: string,
        releaseId: number,
        environmentId: number
        ): Q.Promise<ReleaseInterfaces.ReleaseEnvironment> {
    
        var deferred = Q.defer<ReleaseInterfaces.ReleaseEnvironment>();

        this.api.updateReleaseEnvironment(environmentUpdateData, project, releaseId, environmentId, (err: any, statusCode: number, environment: ReleaseInterfaces.ReleaseEnvironment) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environment);
            }
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

        this.api.createDefinitionEnvironmentTemplate(template, project, (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplate);
            }
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

        this.api.deleteDefinitionEnvironmentTemplate(project, templateId, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
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

        this.api.getDefinitionEnvironmentTemplate(project, templateId, (err: any, statusCode: number, environmenttemplate: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplate);
            }
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

        this.api.listDefinitionEnvironmentTemplates(project, (err: any, statusCode: number, environmenttemplates: ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplates);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinitionEnvironmentTemplate[]>>deferred.promise;
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

        this.api.getInputValues(query, project, (err: any, statusCode: number, inputvaluesquery: FormInputInterfaces.InputValuesQuery) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(inputvaluesquery);
            }
        });

        return <Q.Promise<FormInputInterfaces.InputValuesQuery>>deferred.promise;
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

        this.api.getLogs(project, releaseId, (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
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

        this.api.getLog(project, releaseId, environmentId, taskId, attemptId, (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
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

        this.api.createRelease(releaseStartMetadata, project, (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        });

        return <Q.Promise<ReleaseInterfaces.Release>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    */
    public deleteRelease(
        project: string,
        releaseId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteRelease(project, releaseId, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
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

        this.api.getRelease(project, releaseId, includeAllApprovals, (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
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

        this.api.getReleaseDefinitionSummary(project, definitionId, releaseCount, includeArtifact, (err: any, statusCode: number, release: ReleaseInterfaces.ReleaseDefinitionSummary) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinitionSummary>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    * @param {number} definitionEnvironmentId
    * @param {string} searchText
    * @param {string} createdBy
    * @param {ReleaseInterfaces.ReleaseStatus} statusFilter
    * @param {Date} minCreatedTime
    * @param {Date} maxCreatedTime
    * @param {ReleaseInterfaces.ReleaseQueryOrder} queryOrder
    * @param {number} top
    * @param {number} continuationToken
    * @param {ReleaseInterfaces.ReleaseExpands} expand
    * @param {string} artifactTypeId
    * @param {number} artifactSourceId
    * @param {string} artifactVersionId
    */
    public getReleases(
        project: string,
        definitionId?: number,
        definitionEnvironmentId?: number,
        searchText?: string,
        createdBy?: string,
        statusFilter?: ReleaseInterfaces.ReleaseStatus,
        minCreatedTime?: Date,
        maxCreatedTime?: Date,
        queryOrder?: ReleaseInterfaces.ReleaseQueryOrder,
        top?: number,
        continuationToken?: number,
        expand?: ReleaseInterfaces.ReleaseExpands,
        artifactTypeId?: string,
        artifactSourceId?: number,
        artifactVersionId?: string
        ): Q.Promise<ReleaseInterfaces.Release[]> {
    
        var deferred = Q.defer<ReleaseInterfaces.Release[]>();

        this.api.getReleases(project, definitionId, definitionEnvironmentId, searchText, createdBy, statusFilter, minCreatedTime, maxCreatedTime, queryOrder, top, continuationToken, expand, artifactTypeId, artifactSourceId, artifactVersionId, (err: any, statusCode: number, releases: ReleaseInterfaces.Release[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(releases);
            }
        });

        return <Q.Promise<ReleaseInterfaces.Release[]>>deferred.promise;
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

        this.api.updateRelease(release, project, releaseId, (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
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

        this.api.updateReleaseResource(releaseUpdateMetadata, project, releaseId, (err: any, statusCode: number, release: ReleaseInterfaces.Release) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        });

        return <Q.Promise<ReleaseInterfaces.Release>>deferred.promise;
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

        this.api.getReleaseDefinitionHistory(project, definitionId, (err: any, statusCode: number, revisions: ReleaseInterfaces.ReleaseDefinitionRevision[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revisions);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ReleaseDefinitionRevision[]>>deferred.promise;
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

        this.api.getReleaseDefinitionRevision(project, definitionId, revision, (err: any, statusCode: number, revision: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revision);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} typeId
    */
    public getArtifactsSources(
        project: string,
        typeId?: string
        ): Q.Promise<ReleaseInterfaces.ArtifactSourceIdsQueryResult> {
    
        var deferred = Q.defer<ReleaseInterfaces.ArtifactSourceIdsQueryResult>();

        this.api.getArtifactsSources(project, typeId, (err: any, statusCode: number, source: ReleaseInterfaces.ArtifactSourceIdsQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(source);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ArtifactSourceIdsQueryResult>>deferred.promise;
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

        this.api.getTasks(project, releaseId, environmentId, attemptId, (err: any, statusCode: number, tasks: ReleaseInterfaces.ReleaseTask[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tasks);
            }
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

        this.api.getArtifactTypeDefinitions(project, (err: any, statusCode: number, types: ReleaseInterfaces.ArtifactTypeDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(types);
            }
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

        this.api.getArtifactVersions(project, releaseDefinitionId, (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(version);
            }
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

        this.api.getArtifactVersionsForSources(artifacts, project, (err: any, statusCode: number, version: ReleaseInterfaces.ArtifactVersionQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(version);
            }
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

        this.api.getReleaseWorkItemsRefs(project, releaseId, baseReleaseId, top, (err: any, statusCode: number, workitems: ReleaseInterfaces.ReleaseWorkItemRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workitems);
            }
        });

        return <Q.Promise<ReleaseInterfaces.ReleaseWorkItemRef[]>>deferred.promise;
    }

}
