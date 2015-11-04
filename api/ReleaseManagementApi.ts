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
import ReleaseManagementInterfaces = require("./interfaces/ReleaseManagementInterfaces");

export interface IReleaseManagementApi extends basem.ClientApiBase {
    getAgentArtifactDefinitions(project: string, releaseId: number, onResult: (err: any, statusCode: number, agentartifacts: ReleaseManagementInterfaces.AgentArtifactDefinition[]) => void): void;
    getApprovals(project: string, assignedToFilter: string, statusFilter: ReleaseManagementInterfaces.ApprovalStatus, releaseIdFilter: number, onResult: (err: any, statusCode: number, approvals: ReleaseManagementInterfaces.ReleaseApproval[]) => void): void;
    getApprovalHistory(project: string, approvalStepId: number, onResult: (err: any, statusCode: number, approvals: ReleaseManagementInterfaces.ReleaseApproval[]) => void): void;
    updateReleaseApproval(approvalUpdateMetadata: ReleaseManagementInterfaces.ApprovalUpdateMetadata, project: string, approvalId: number, onResult: (err: any, statusCode: number, approval: ReleaseManagementInterfaces.ReleaseApproval) => void): void;
    createArtifact(artifact: ReleaseManagementInterfaces.Artifact, project: string, onResult: (err: any, statusCode: number, artifact: ReleaseManagementInterfaces.Artifact) => void): void;
    getArtifact(project: string, definitionId: number, onResult: (err: any, statusCode: number, artifact: ReleaseManagementInterfaces.Artifact) => void): void;
    getArtifacts(project: string, typeId: string, name: string, sourceId: string, onResult: (err: any, statusCode: number, artifacts: ReleaseManagementInterfaces.Artifact[]) => void): void;
    updateArtifacts(artifactDefinitions: ReleaseManagementInterfaces.ArtifactDefinition[], project: string, onResult: (err: any, statusCode: number, artifacts: ReleaseManagementInterfaces.ArtifactDefinition[]) => void): void;
    createReleaseDefinition(releaseDefinition: ReleaseManagementInterfaces.ReleaseDefinition, project: string, onResult: (err: any, statusCode: number, definition: ReleaseManagementInterfaces.ReleaseDefinition) => void): void;
    deleteReleaseDefinition(project: string, definitionId: number, onResult: (err: any, statusCode: number) => void): void;
    getReleaseDefinition(project: string, definitionId: number, onResult: (err: any, statusCode: number, definition: ReleaseManagementInterfaces.ReleaseDefinition) => void): void;
    getReleaseDefinitions(project: string, searchText: string, artifactIdFilter: number, onResult: (err: any, statusCode: number, definitions: ReleaseManagementInterfaces.ReleaseDefinition[]) => void): void;
    updateReleaseDefinition(releaseDefinition: ReleaseManagementInterfaces.ReleaseDefinition, project: string, onResult: (err: any, statusCode: number, definition: ReleaseManagementInterfaces.ReleaseDefinition) => void): void;
    createDefinitionEnvironmentTemplate(template: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate, project: string, onResult: (err: any, statusCode: number, environmenttemplate: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate) => void): void;
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string, onResult: (err: any, statusCode: number) => void): void;
    getDefinitionEnvironmentTemplate(project: string, templateId: string, onResult: (err: any, statusCode: number, environmenttemplate: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate) => void): void;
    listDefinitionEnvironmentTemplates(project: string, onResult: (err: any, statusCode: number, environmenttemplates: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate[]) => void): void;
    getInputValues(query: FormInputInterfaces.InputValuesQuery, project: string, onResult: (err: any, statusCode: number, inputvaluesquery: FormInputInterfaces.InputValuesQuery) => void): void;
    getLogs(project: string, releaseId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    createRelease(releaseStartMetadata: ReleaseManagementInterfaces.ReleaseStartMetadata, project: string, onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => void): void;
    deleteRelease(project: string, releaseId: number, onResult: (err: any, statusCode: number) => void): void;
    getRelease(project: string, releaseId: number, includeAllApprovals: boolean, onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => void): void;
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact: boolean, onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.ReleaseDefinitionSummary) => void): void;
    getReleases(project: string, definitionId: number, searchText: string, statusFilter: ReleaseManagementInterfaces.ReleaseStatus, minCreatedTime: Date, maxCreatedTime: Date, queryOrder: ReleaseManagementInterfaces.ReleaseQueryOrder, top: number, continuationToken: number, onResult: (err: any, statusCode: number, releases: ReleaseManagementInterfaces.Release[]) => void): void;
    updateRelease(release: ReleaseManagementInterfaces.Release, project: string, releaseId: number, onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => void): void;
    updateReleaseStatus(releaseUpdateMetadata: ReleaseManagementInterfaces.ReleaseUpdateMetadata, project: string, releaseId: number, onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => void): void;
    getArtifactsSources(project: string, typeId: string, onResult: (err: any, statusCode: number, source: ReleaseManagementInterfaces.ArtifactSourceIdsQueryResult) => void): void;
    getArtifactTypeDefinitions(project: string, onResult: (err: any, statusCode: number, types: ReleaseManagementInterfaces.ArtifactTypeDefinition[]) => void): void;
    getArtifactVersions(project: string, releaseDefinitionId: number, onResult: (err: any, statusCode: number, version: ReleaseManagementInterfaces.ArtifactVersionQueryResult) => void): void;
    getArtifactVersionsForSources(artifactSources: ReleaseManagementInterfaces.ArtifactSource[], project: string, onResult: (err: any, statusCode: number, version: ReleaseManagementInterfaces.ArtifactVersionQueryResult) => void): void;
}

export interface IQReleaseManagementApi extends basem.QClientApiBase {
    
    getAgentArtifactDefinitions(project: string,  releaseId: number): Q.Promise<ReleaseManagementInterfaces.AgentArtifactDefinition[]>;
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: ReleaseManagementInterfaces.ApprovalStatus,  releaseIdFilter?: number): Q.Promise<ReleaseManagementInterfaces.ReleaseApproval[]>;
    getApprovalHistory(project: string,  approvalStepId: number): Q.Promise<ReleaseManagementInterfaces.ReleaseApproval[]>;
    updateReleaseApproval(approvalUpdateMetadata: ReleaseManagementInterfaces.ApprovalUpdateMetadata, project: string,  approvalId: number): Q.Promise<ReleaseManagementInterfaces.ReleaseApproval>;
    createArtifact(artifact: ReleaseManagementInterfaces.Artifact,  project: string): Q.Promise<ReleaseManagementInterfaces.Artifact>;
    getArtifact(project: string,  definitionId: number): Q.Promise<ReleaseManagementInterfaces.Artifact>;
    getArtifacts(project: string, typeId?: string, name?: string,  sourceId?: string): Q.Promise<ReleaseManagementInterfaces.Artifact[]>;
    updateArtifacts(artifactDefinitions: ReleaseManagementInterfaces.ArtifactDefinition[],  project: string): Q.Promise<ReleaseManagementInterfaces.ArtifactDefinition[]>;
    createReleaseDefinition(releaseDefinition: ReleaseManagementInterfaces.ReleaseDefinition,  project: string): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition>;
    getReleaseDefinition(project: string,  definitionId: number): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition>;
    getReleaseDefinitions(project: string, searchText?: string,  artifactIdFilter?: number): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition[]>;
    updateReleaseDefinition(releaseDefinition: ReleaseManagementInterfaces.ReleaseDefinition,  project: string): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition>;
    createDefinitionEnvironmentTemplate(template: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate,  project: string): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    getDefinitionEnvironmentTemplate(project: string,  templateId: string): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate>;
    listDefinitionEnvironmentTemplates( project: string): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate[]>;
    getInputValues(query: FormInputInterfaces.InputValuesQuery,  project: string): Q.Promise<FormInputInterfaces.InputValuesQuery>;
    createRelease(releaseStartMetadata: ReleaseManagementInterfaces.ReleaseStartMetadata,  project: string): Q.Promise<ReleaseManagementInterfaces.Release>;
    getRelease(project: string, releaseId: number,  includeAllApprovals?: boolean): Q.Promise<ReleaseManagementInterfaces.Release>;
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number,  includeArtifact?: boolean): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionSummary>;
    getReleases(project: string, definitionId?: number, searchText?: string, statusFilter?: ReleaseManagementInterfaces.ReleaseStatus, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: ReleaseManagementInterfaces.ReleaseQueryOrder, top?: number,  continuationToken?: number): Q.Promise<ReleaseManagementInterfaces.Release[]>;
    updateRelease(release: ReleaseManagementInterfaces.Release, project: string,  releaseId: number): Q.Promise<ReleaseManagementInterfaces.Release>;
    updateReleaseStatus(releaseUpdateMetadata: ReleaseManagementInterfaces.ReleaseUpdateMetadata, project: string,  releaseId: number): Q.Promise<ReleaseManagementInterfaces.Release>;
    getArtifactsSources(project: string,  typeId?: string): Q.Promise<ReleaseManagementInterfaces.ArtifactSourceIdsQueryResult>;
    getArtifactTypeDefinitions( project: string): Q.Promise<ReleaseManagementInterfaces.ArtifactTypeDefinition[]>;
    getArtifactVersions(project: string,  releaseDefinitionId: number): Q.Promise<ReleaseManagementInterfaces.ArtifactVersionQueryResult>;
    getArtifactVersionsForSources(artifactSources: ReleaseManagementInterfaces.ArtifactSource[],  project: string): Q.Promise<ReleaseManagementInterfaces.ArtifactVersionQueryResult>;
}

export class ReleaseManagementApi extends basem.ClientApiBase implements IReleaseManagementApi {

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-ReleaseManagement-api');
    }

    /**
     * Returns the artifact details that automation agent requires
     * 
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.AgentArtifactDefinition[]
     */
    public getAgentArtifactDefinitions(
        project: string,
        releaseId: number,
        onResult: (err: any, statusCode: number, agentartifacts: ReleaseManagementInterfaces.AgentArtifactDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "d843590d-370d-47ef-97f5-bea3ceff021f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.AgentArtifactDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} assignedToFilter
     * @param {ReleaseManagementInterfaces.ApprovalStatus} statusFilter
     * @param {number} releaseIdFilter
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseApproval[]
     */
    public getApprovals(
        project: string,
        assignedToFilter: string,
        statusFilter: ReleaseManagementInterfaces.ApprovalStatus,
        releaseIdFilter: number,
        onResult: (err: any, statusCode: number, approvals: ReleaseManagementInterfaces.ReleaseApproval[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            assignedToFilter: assignedToFilter,
            statusFilter: statusFilter,
            releaseIdFilter: releaseIdFilter,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "1166ae8c-9f6d-4dcf-8544-b3d4c1eb4e4b", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} approvalStepId
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseApproval[]
     */
    public getApprovalHistory(
        project: string,
        approvalStepId: number,
        onResult: (err: any, statusCode: number, approvals: ReleaseManagementInterfaces.ReleaseApproval[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            approvalStepId: approvalStepId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "0b896e11-8fc4-4a23-8390-d144c1b4f832", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseManagementInterfaces.ApprovalUpdateMetadata} approvalUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} approvalId
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseApproval
     */
    public updateReleaseApproval(
        approvalUpdateMetadata: ReleaseManagementInterfaces.ApprovalUpdateMetadata,
        project: string,
        approvalId: number,
        onResult: (err: any, statusCode: number, approval: ReleaseManagementInterfaces.ReleaseApproval) => void
        ): void {

        var routeValues: any = {
            project: project,
            approvalId: approvalId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "0173e33f-0f3f-4085-a001-90e5fc8e1f9b", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ApprovalUpdateMetadata, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseApproval, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, approvalUpdateMetadata, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseManagementInterfaces.Artifact} artifact
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.Artifact
     */
    public createArtifact(
        artifact: ReleaseManagementInterfaces.Artifact,
        project: string,
        onResult: (err: any, statusCode: number, artifact: ReleaseManagementInterfaces.Artifact) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "2b11036a-8011-4f3c-8492-9600ad9740b2", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Artifact, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Artifact, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, artifact, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.Artifact
     */
    public getArtifact(
        project: string,
        definitionId: number,
        onResult: (err: any, statusCode: number, artifact: ReleaseManagementInterfaces.Artifact) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            definitionId: definitionId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "2b11036a-8011-4f3c-8492-9600ad9740b2", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Artifact, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} typeId
     * @param {string} name
     * @param {string} sourceId
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.Artifact[]
     */
    public getArtifacts(
        project: string,
        typeId: string,
        name: string,
        sourceId: string,
        onResult: (err: any, statusCode: number, artifacts: ReleaseManagementInterfaces.Artifact[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            typeId: typeId,
            name: name,
            sourceId: sourceId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "2b11036a-8011-4f3c-8492-9600ad9740b2", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Artifact, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseManagementInterfaces.ArtifactDefinition[]} artifactDefinitions
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ArtifactDefinition[]
     */
    public updateArtifacts(
        artifactDefinitions: ReleaseManagementInterfaces.ArtifactDefinition[],
        project: string,
        onResult: (err: any, statusCode: number, artifacts: ReleaseManagementInterfaces.ArtifactDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "2b11036a-8011-4f3c-8492-9600ad9740b2", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ArtifactDefinition, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ArtifactDefinition, responseIsCollection: true };
            
            this.restClient.update(url, apiVersion, artifactDefinitions, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseManagementInterfaces.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseDefinition
     */
    public createReleaseDefinition(
        releaseDefinition: ReleaseManagementInterfaces.ReleaseDefinition,
        project: string,
        onResult: (err: any, statusCode: number, definition: ReleaseManagementInterfaces.ReleaseDefinition) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "6b4d717d-9b96-495d-bbfa-b54cbb0a77d6", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinition, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
            
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

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "6b4d717d-9b96-495d-bbfa-b54cbb0a77d6", routeValues)
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
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseDefinition
     */
    public getReleaseDefinition(
        project: string,
        definitionId: number,
        onResult: (err: any, statusCode: number, definition: ReleaseManagementInterfaces.ReleaseDefinition) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "6b4d717d-9b96-495d-bbfa-b54cbb0a77d6", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
            
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
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseDefinition[]
     */
    public getReleaseDefinitions(
        project: string,
        searchText: string,
        artifactIdFilter: number,
        onResult: (err: any, statusCode: number, definitions: ReleaseManagementInterfaces.ReleaseDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            searchText: searchText,
            artifactIdFilter: artifactIdFilter,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "6b4d717d-9b96-495d-bbfa-b54cbb0a77d6", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseManagementInterfaces.ReleaseDefinition} releaseDefinition
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseDefinition
     */
    public updateReleaseDefinition(
        releaseDefinition: ReleaseManagementInterfaces.ReleaseDefinition,
        project: string,
        onResult: (err: any, statusCode: number, definition: ReleaseManagementInterfaces.ReleaseDefinition) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "6b4d717d-9b96-495d-bbfa-b54cbb0a77d6", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinition, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinition, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, releaseDefinition, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate} template
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate
     */
    public createDefinitionEnvironmentTemplate(
        template: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate,
        project: string,
        onResult: (err: any, statusCode: number, environmenttemplate: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "6124b10c-df09-4ec6-85fe-00fab2c768e1", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: false };
            
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
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "6124b10c-df09-4ec6-85fe-00fab2c768e1", routeValues, queryValues)
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
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate
     */
    public getDefinitionEnvironmentTemplate(
        project: string,
        templateId: string,
        onResult: (err: any, statusCode: number, environmenttemplate: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            templateId: templateId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "6124b10c-df09-4ec6-85fe-00fab2c768e1", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate[]
     */
    public listDefinitionEnvironmentTemplates(
        project: string,
        onResult: (err: any, statusCode: number, environmenttemplates: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "6124b10c-df09-4ec6-85fe-00fab2c768e1", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinitionEnvironmentTemplate, responseIsCollection: true };
            
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

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "c55d6d03-d176-48a7-b083-db055dc0d017", routeValues)
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

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "e53a645a-4803-49a2-9669-7f5156e1b051", routeValues)
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
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "e53a645a-4803-49a2-9669-7f5156e1b052", routeValues, queryValues)
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
     * @param {ReleaseManagementInterfaces.ReleaseStartMetadata} releaseStartMetadata
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.Release
     */
    public createRelease(
        releaseStartMetadata: ReleaseManagementInterfaces.ReleaseStartMetadata,
        project: string,
        onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "5a351e69-12ea-426b-ac51-a1ec3a4526f7", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseStartMetadata, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Release, responseIsCollection: false };
            
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

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "5a351e69-12ea-426b-ac51-a1ec3a4526f7", routeValues)
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
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.Release
     */
    public getRelease(
        project: string,
        releaseId: number,
        includeAllApprovals: boolean,
        onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        var queryValues: any = {
            includeAllApprovals: includeAllApprovals,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "5a351e69-12ea-426b-ac51-a1ec3a4526f7", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Release, responseIsCollection: false };
            
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
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ReleaseDefinitionSummary
     */
    public getReleaseDefinitionSummary(
        project: string,
        definitionId: number,
        releaseCount: number,
        includeArtifact: boolean,
        onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.ReleaseDefinitionSummary) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            definitionId: definitionId,
            releaseCount: releaseCount,
            includeArtifact: includeArtifact,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "5a351e69-12ea-426b-ac51-a1ec3a4526f7", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseDefinitionSummary, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param {string} searchText
     * @param {ReleaseManagementInterfaces.ReleaseStatus} statusFilter
     * @param {Date} minCreatedTime
     * @param {Date} maxCreatedTime
     * @param {ReleaseManagementInterfaces.ReleaseQueryOrder} queryOrder
     * @param {number} top
     * @param {number} continuationToken
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.Release[]
     */
    public getReleases(
        project: string,
        definitionId: number,
        searchText: string,
        statusFilter: ReleaseManagementInterfaces.ReleaseStatus,
        minCreatedTime: Date,
        maxCreatedTime: Date,
        queryOrder: ReleaseManagementInterfaces.ReleaseQueryOrder,
        top: number,
        continuationToken: number,
        onResult: (err: any, statusCode: number, releases: ReleaseManagementInterfaces.Release[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            definitionId: definitionId,
            searchText: searchText,
            statusFilter: statusFilter,
            minCreatedTime: minCreatedTime,
            maxCreatedTime: maxCreatedTime,
            queryOrder: queryOrder,
            '$top': top,
            continuationToken: continuationToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "5a351e69-12ea-426b-ac51-a1ec3a4526f7", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Release, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseManagementInterfaces.Release} release
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.Release
     */
    public updateRelease(
        release: ReleaseManagementInterfaces.Release,
        project: string,
        releaseId: number,
        onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "5a351e69-12ea-426b-ac51-a1ec3a4526f7", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Release, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Release, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, release, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseManagementInterfaces.ReleaseUpdateMetadata} releaseUpdateMetadata
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.Release
     */
    public updateReleaseStatus(
        releaseUpdateMetadata: ReleaseManagementInterfaces.ReleaseUpdateMetadata,
        project: string,
        releaseId: number,
        onResult: (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => void
        ): void {

        var routeValues: any = {
            project: project,
            releaseId: releaseId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "5a351e69-12ea-426b-ac51-a1ec3a4526f7", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ReleaseUpdateMetadata, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.Release, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, releaseUpdateMetadata, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} typeId
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ArtifactSourceIdsQueryResult
     */
    public getArtifactsSources(
        project: string,
        typeId: string,
        onResult: (err: any, statusCode: number, source: ReleaseManagementInterfaces.ArtifactSourceIdsQueryResult) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            typeId: typeId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "e1270c26-707f-4c70-b8d8-0451d8647ed2", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ArtifactSourceIdsQueryResult, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ArtifactTypeDefinition[]
     */
    public getArtifactTypeDefinitions(
        project: string,
        onResult: (err: any, statusCode: number, types: ReleaseManagementInterfaces.ArtifactTypeDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "e994d372-77c0-433f-a0db-13a67931a5a8", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ArtifactTypeDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseDefinitionId
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ArtifactVersionQueryResult
     */
    public getArtifactVersions(
        project: string,
        releaseDefinitionId: number,
        onResult: (err: any, statusCode: number, version: ReleaseManagementInterfaces.ArtifactVersionQueryResult) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            releaseDefinitionId: releaseDefinitionId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "00d6d075-cad1-4e02-ac77-4666ed953d87", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ArtifactVersionQueryResult, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {ReleaseManagementInterfaces.ArtifactSource[]} artifactSources
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ReleaseManagementInterfaces.ArtifactVersionQueryResult
     */
    public getArtifactVersionsForSources(
        artifactSources: ReleaseManagementInterfaces.ArtifactSource[],
        project: string,
        onResult: (err: any, statusCode: number, version: ReleaseManagementInterfaces.ArtifactVersionQueryResult) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "ReleaseManagement", "00d6d075-cad1-4e02-ac77-4666ed953d87", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ArtifactSource, responseTypeMetadata: ReleaseManagementInterfaces.TypeInfo.ArtifactVersionQueryResult, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, artifactSources, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QReleaseManagementApi extends basem.QClientApiBase implements IQReleaseManagementApi {
    
    api: ReleaseManagementApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, ReleaseManagementApi);
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
        ): Q.Promise<ReleaseManagementInterfaces.AgentArtifactDefinition[]> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.AgentArtifactDefinition[]>();

        this.api.getAgentArtifactDefinitions(project, releaseId, (err: any, statusCode: number, agentartifacts: ReleaseManagementInterfaces.AgentArtifactDefinition[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agentartifacts);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.AgentArtifactDefinition[]>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {string} assignedToFilter
    * @param {ReleaseManagementInterfaces.ApprovalStatus} statusFilter
    * @param {number} releaseIdFilter
    */
    public getApprovals(
        project: string, 
        assignedToFilter?: string, 
        statusFilter?: ReleaseManagementInterfaces.ApprovalStatus, 
        releaseIdFilter?: number
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseApproval[]> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseApproval[]>();

        this.api.getApprovals(project, assignedToFilter, statusFilter, releaseIdFilter, (err: any, statusCode: number, approvals: ReleaseManagementInterfaces.ReleaseApproval[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approvals);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseApproval[]>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {number} approvalStepId
    */
    public getApprovalHistory(
        project: string, 
        approvalStepId: number
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseApproval[]> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseApproval[]>();

        this.api.getApprovalHistory(project, approvalStepId, (err: any, statusCode: number, approvals: ReleaseManagementInterfaces.ReleaseApproval[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approvals);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseApproval[]>>deferred.promise;
    }
    
    /**
    * @param {ReleaseManagementInterfaces.ApprovalUpdateMetadata} approvalUpdateMetadata
    * @param {string} project - Project ID or project name
    * @param {number} approvalId
    */
    public updateReleaseApproval(
        approvalUpdateMetadata: ReleaseManagementInterfaces.ApprovalUpdateMetadata, 
        project: string, 
        approvalId: number
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseApproval> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseApproval>();

        this.api.updateReleaseApproval(approvalUpdateMetadata, project, approvalId, (err: any, statusCode: number, approval: ReleaseManagementInterfaces.ReleaseApproval) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(approval);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseApproval>>deferred.promise;
    }
    
    /**
    * @param {ReleaseManagementInterfaces.Artifact} artifact
    * @param {string} project - Project ID or project name
    */
    public createArtifact(
        artifact: ReleaseManagementInterfaces.Artifact, 
        project: string
        ): Q.Promise<ReleaseManagementInterfaces.Artifact> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.Artifact>();

        this.api.createArtifact(artifact, project, (err: any, statusCode: number, artifact: ReleaseManagementInterfaces.Artifact) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifact);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.Artifact>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    */
    public getArtifact(
        project: string, 
        definitionId: number
        ): Q.Promise<ReleaseManagementInterfaces.Artifact> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.Artifact>();

        this.api.getArtifact(project, definitionId, (err: any, statusCode: number, artifact: ReleaseManagementInterfaces.Artifact) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifact);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.Artifact>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {string} typeId
    * @param {string} name
    * @param {string} sourceId
    */
    public getArtifacts(
        project: string, 
        typeId?: string, 
        name?: string, 
        sourceId?: string
        ): Q.Promise<ReleaseManagementInterfaces.Artifact[]> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.Artifact[]>();

        this.api.getArtifacts(project, typeId, name, sourceId, (err: any, statusCode: number, artifacts: ReleaseManagementInterfaces.Artifact[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifacts);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.Artifact[]>>deferred.promise;
    }
    
    /**
    * @param {ReleaseManagementInterfaces.ArtifactDefinition[]} artifactDefinitions
    * @param {string} project - Project ID or project name
    */
    public updateArtifacts(
        artifactDefinitions: ReleaseManagementInterfaces.ArtifactDefinition[], 
        project: string
        ): Q.Promise<ReleaseManagementInterfaces.ArtifactDefinition[]> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ArtifactDefinition[]>();

        this.api.updateArtifacts(artifactDefinitions, project, (err: any, statusCode: number, artifacts: ReleaseManagementInterfaces.ArtifactDefinition[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifacts);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ArtifactDefinition[]>>deferred.promise;
    }
    
    /**
    * @param {ReleaseManagementInterfaces.ReleaseDefinition} releaseDefinition
    * @param {string} project - Project ID or project name
    */
    public createReleaseDefinition(
        releaseDefinition: ReleaseManagementInterfaces.ReleaseDefinition, 
        project: string
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseDefinition>();

        this.api.createReleaseDefinition(releaseDefinition, project, (err: any, statusCode: number, definition: ReleaseManagementInterfaces.ReleaseDefinition) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    */
    public getReleaseDefinition(
        project: string, 
        definitionId: number
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseDefinition>();

        this.api.getReleaseDefinition(project, definitionId, (err: any, statusCode: number, definition: ReleaseManagementInterfaces.ReleaseDefinition) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {string} searchText
    * @param {number} artifactIdFilter
    */
    public getReleaseDefinitions(
        project: string, 
        searchText?: string, 
        artifactIdFilter?: number
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition[]> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseDefinition[]>();

        this.api.getReleaseDefinitions(project, searchText, artifactIdFilter, (err: any, statusCode: number, definitions: ReleaseManagementInterfaces.ReleaseDefinition[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definitions);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition[]>>deferred.promise;
    }
    
    /**
    * @param {ReleaseManagementInterfaces.ReleaseDefinition} releaseDefinition
    * @param {string} project - Project ID or project name
    */
    public updateReleaseDefinition(
        releaseDefinition: ReleaseManagementInterfaces.ReleaseDefinition, 
        project: string
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseDefinition>();

        this.api.updateReleaseDefinition(releaseDefinition, project, (err: any, statusCode: number, definition: ReleaseManagementInterfaces.ReleaseDefinition) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseDefinition>>deferred.promise;
    }
    
    /**
    * @param {ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate} template
    * @param {string} project - Project ID or project name
    */
    public createDefinitionEnvironmentTemplate(
        template: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate, 
        project: string
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate>();

        this.api.createDefinitionEnvironmentTemplate(template, project, (err: any, statusCode: number, environmenttemplate: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplate);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    public getDefinitionEnvironmentTemplate(
        project: string, 
        templateId: string
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate>();

        this.api.getDefinitionEnvironmentTemplate(project, templateId, (err: any, statusCode: number, environmenttemplate: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplate);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    */
    public listDefinitionEnvironmentTemplates(
        project: string
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate[]> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate[]>();

        this.api.listDefinitionEnvironmentTemplates(project, (err: any, statusCode: number, environmenttemplates: ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(environmenttemplates);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionEnvironmentTemplate[]>>deferred.promise;
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
            if(err) {
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
    * @param {ReleaseManagementInterfaces.ReleaseStartMetadata} releaseStartMetadata
    * @param {string} project - Project ID or project name
    */
    public createRelease(
        releaseStartMetadata: ReleaseManagementInterfaces.ReleaseStartMetadata, 
        project: string
        ): Q.Promise<ReleaseManagementInterfaces.Release> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.Release>();

        this.api.createRelease(releaseStartMetadata, project, (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.Release>>deferred.promise;
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
        ): Q.Promise<ReleaseManagementInterfaces.Release> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.Release>();

        this.api.getRelease(project, releaseId, includeAllApprovals, (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.Release>>deferred.promise;
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
        ): Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionSummary> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ReleaseDefinitionSummary>();

        this.api.getReleaseDefinitionSummary(project, definitionId, releaseCount, includeArtifact, (err: any, statusCode: number, release: ReleaseManagementInterfaces.ReleaseDefinitionSummary) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ReleaseDefinitionSummary>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    * @param {string} searchText
    * @param {ReleaseManagementInterfaces.ReleaseStatus} statusFilter
    * @param {Date} minCreatedTime
    * @param {Date} maxCreatedTime
    * @param {ReleaseManagementInterfaces.ReleaseQueryOrder} queryOrder
    * @param {number} top
    * @param {number} continuationToken
    */
    public getReleases(
        project: string, 
        definitionId?: number, 
        searchText?: string, 
        statusFilter?: ReleaseManagementInterfaces.ReleaseStatus, 
        minCreatedTime?: Date, 
        maxCreatedTime?: Date, 
        queryOrder?: ReleaseManagementInterfaces.ReleaseQueryOrder, 
        top?: number, 
        continuationToken?: number
        ): Q.Promise<ReleaseManagementInterfaces.Release[]> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.Release[]>();

        this.api.getReleases(project, definitionId, searchText, statusFilter, minCreatedTime, maxCreatedTime, queryOrder, top, continuationToken, (err: any, statusCode: number, releases: ReleaseManagementInterfaces.Release[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(releases);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.Release[]>>deferred.promise;
    }
    
    /**
    * @param {ReleaseManagementInterfaces.Release} release
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    */
    public updateRelease(
        release: ReleaseManagementInterfaces.Release, 
        project: string, 
        releaseId: number
        ): Q.Promise<ReleaseManagementInterfaces.Release> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.Release>();

        this.api.updateRelease(release, project, releaseId, (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.Release>>deferred.promise;
    }
    
    /**
    * @param {ReleaseManagementInterfaces.ReleaseUpdateMetadata} releaseUpdateMetadata
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    */
    public updateReleaseStatus(
        releaseUpdateMetadata: ReleaseManagementInterfaces.ReleaseUpdateMetadata, 
        project: string, 
        releaseId: number
        ): Q.Promise<ReleaseManagementInterfaces.Release> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.Release>();

        this.api.updateReleaseStatus(releaseUpdateMetadata, project, releaseId, (err: any, statusCode: number, release: ReleaseManagementInterfaces.Release) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(release);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.Release>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {string} typeId
    */
    public getArtifactsSources(
        project: string, 
        typeId?: string
        ): Q.Promise<ReleaseManagementInterfaces.ArtifactSourceIdsQueryResult> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ArtifactSourceIdsQueryResult>();

        this.api.getArtifactsSources(project, typeId, (err: any, statusCode: number, source: ReleaseManagementInterfaces.ArtifactSourceIdsQueryResult) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(source);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ArtifactSourceIdsQueryResult>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    */
    public getArtifactTypeDefinitions(
        project: string
        ): Q.Promise<ReleaseManagementInterfaces.ArtifactTypeDefinition[]> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ArtifactTypeDefinition[]>();

        this.api.getArtifactTypeDefinitions(project, (err: any, statusCode: number, types: ReleaseManagementInterfaces.ArtifactTypeDefinition[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(types);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ArtifactTypeDefinition[]>>deferred.promise;
    }
    
    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseDefinitionId
    */
    public getArtifactVersions(
        project: string, 
        releaseDefinitionId: number
        ): Q.Promise<ReleaseManagementInterfaces.ArtifactVersionQueryResult> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ArtifactVersionQueryResult>();

        this.api.getArtifactVersions(project, releaseDefinitionId, (err: any, statusCode: number, version: ReleaseManagementInterfaces.ArtifactVersionQueryResult) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(version);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ArtifactVersionQueryResult>>deferred.promise;
    }
    
    /**
    * @param {ReleaseManagementInterfaces.ArtifactSource[]} artifactSources
    * @param {string} project - Project ID or project name
    */
    public getArtifactVersionsForSources(
        artifactSources: ReleaseManagementInterfaces.ArtifactSource[], 
        project: string
        ): Q.Promise<ReleaseManagementInterfaces.ArtifactVersionQueryResult> {
    
        var deferred = Q.defer<ReleaseManagementInterfaces.ArtifactVersionQueryResult>();

        this.api.getArtifactVersionsForSources(artifactSources, project, (err: any, statusCode: number, version: ReleaseManagementInterfaces.ArtifactVersionQueryResult) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(version);
            }
        });

        return <Q.Promise<ReleaseManagementInterfaces.ArtifactVersionQueryResult>>deferred.promise;
    }
    
}
