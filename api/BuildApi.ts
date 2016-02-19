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
import BuildInterfaces = require("./interfaces/BuildInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IBuildApi extends basem.ClientApiBase {
    createArtifact(artifact: BuildInterfaces.BuildArtifact, buildId: number, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void): void;
    getArtifact(buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void): void;
    getArtifactContentZip(buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getArtifacts(buildId: number, project: string, onResult: (err: any, statusCode: number, artifacts: BuildInterfaces.BuildArtifact[]) => void): void;
    getBadge(project: string, definitionId: number, branchName: string, onResult: (err: any, statusCode: number, badge: string) => void): void;
    getBuildBadge(project: string, repoType: string, repoId: string, branchName: string, onResult: (err: any, statusCode: number, buildbadge: BuildInterfaces.BuildBadge) => void): void;
    getBuildBadgeData(project: string, repoType: string, repoId: string, branchName: string, onResult: (err: any, statusCode: number, buildbadge: string) => void): void;
    deleteBuild(buildId: number, project: string, onResult: (err: any, statusCode: number) => void): void;
    getBuild(buildId: number, project: string, propertyFilters: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void): void;
    getBuilds(project: string, definitions: number[], queues: number[], buildNumber: string, minFinishTime: Date, maxFinishTime: Date, requestedFor: string, reasonFilter: BuildInterfaces.BuildReason, statusFilter: BuildInterfaces.BuildStatus, resultFilter: BuildInterfaces.BuildResult, tagFilters: string[], properties: string[], type: BuildInterfaces.DefinitionType, top: number, continuationToken: string, maxBuildsPerDefinition: number, deletedFilter: BuildInterfaces.QueryDeletedOption, queryOrder: BuildInterfaces.BuildQueryOrder, branchName: string, onResult: (err: any, statusCode: number, builds: BuildInterfaces.Build[]) => void): void;
    queueBuild(build: BuildInterfaces.Build, project: string, ignoreWarnings: boolean, checkInTicket: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void): void;
    updateBuild(build: BuildInterfaces.Build, buildId: number, project: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void): void;
    getBuildChanges(project: string, buildId: number, continuationToken: string, top: number, includeSourceChange: boolean, onResult: (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => void): void;
    getChangesBetweenBuilds(project: string, fromBuildId: number, toBuildId: number, top: number, onResult: (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => void): void;
    getBuildController(controllerId: number, onResult: (err: any, statusCode: number, Controller: BuildInterfaces.BuildController) => void): void;
    getBuildControllers(name: string, onResult: (err: any, statusCode: number, Controllers: BuildInterfaces.BuildController[]) => void): void;
    createDefinition(definition: BuildInterfaces.BuildDefinition, project: string, definitionToCloneId: number, definitionToCloneRevision: number, onResult: (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => void): void;
    deleteDefinition(definitionId: number, project: string, onResult: (err: any, statusCode: number) => void): void;
    getDefinition(definitionId: number, project: string, revision: number, propertyFilters: string[], onResult: (err: any, statusCode: number, definition: BuildInterfaces.DefinitionReference) => void): void;
    getDefinitions(project: string, name: string, type: BuildInterfaces.DefinitionType, repositoryId: string, repositoryType: string, queryOrder: BuildInterfaces.DefinitionQueryOrder, top: number, continuationToken: string, onResult: (err: any, statusCode: number, definitions: BuildInterfaces.DefinitionReference[]) => void): void;
    updateDefinition(definition: BuildInterfaces.BuildDefinition, definitionId: number, project: string, secretsSourceDefinitionId: number, secretsSourceDefinitionRevision: number, onResult: (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => void): void;
    getBuildDeployments(project: string, buildId: number, onResult: (err: any, statusCode: number, deployments: BuildInterfaces.Deployment[]) => void): void;
    getBuildLog(project: string, buildId: number, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBuildLogs(project: string, buildId: number, onResult: (err: any, statusCode: number, logs: BuildInterfaces.BuildLog[]) => void): void;
    getBuildLogsZip(project: string, buildId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBuildOptionDefinitions(project: string, onResult: (err: any, statusCode: number, options: BuildInterfaces.BuildOptionDefinition[]) => void): void;
    createQueue(queue: BuildInterfaces.AgentPoolQueue, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void): void;
    deleteQueue(id: number, onResult: (err: any, statusCode: number) => void): void;
    getAgentPoolQueue(controllerId: number, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void): void;
    getQueues(name: string, onResult: (err: any, statusCode: number, queues: BuildInterfaces.AgentPoolQueue[]) => void): void;
    getBuildReport(project: string, buildId: number, type: string, onResult: (err: any, statusCode: number, report: BuildInterfaces.BuildReportMetadata) => void): void;
    getBuildReportHtmlContent(project: string, buildId: number, type: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getResourceUsage(onResult: (err: any, statusCode: number, ResourceUsage: BuildInterfaces.BuildResourceUsage) => void): void;
    getDefinitionRevisions(project: string, definitionId: number, onResult: (err: any, statusCode: number, revisions: BuildInterfaces.BuildDefinitionRevision[]) => void): void;
    getBuildSettings(onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void): void;
    updateBuildSettings(settings: BuildInterfaces.BuildSettings, onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void): void;
    addBuildTag(project: string, buildId: number, tag: string, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    addBuildTags(tags: string[], project: string, buildId: number, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    deleteBuildTag(project: string, buildId: number, tag: string, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    getBuildTags(project: string, buildId: number, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    getTags(project: string, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    deleteTemplate(project: string, templateId: string, onResult: (err: any, statusCode: number) => void): void;
    getTemplate(project: string, templateId: string, onResult: (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => void): void;
    getTemplates(project: string, onResult: (err: any, statusCode: number, templates: BuildInterfaces.BuildDefinitionTemplate[]) => void): void;
    saveTemplate(template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string, onResult: (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => void): void;
    getBuildTimeline(project: string, buildId: number, timelineId: string, changeId: number, onResult: (err: any, statusCode: number, Timeline: BuildInterfaces.Timeline) => void): void;
    getBuildWorkItemsRefs(project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void): void;
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void): void;
    getWorkItemsBetweenBuilds(project: string, fromBuildId: number, toBuildId: number, top: number, onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void): void;
}

export interface IQBuildApi extends basem.QClientApiBase {
    createArtifact(artifact: BuildInterfaces.BuildArtifact, buildId: number, project?: string): Q.Promise<BuildInterfaces.BuildArtifact>;
    getArtifact(buildId: number, artifactName: string, project?: string): Q.Promise<BuildInterfaces.BuildArtifact>;
    getArtifactContentZip(buildId: number, artifactName: string, project?: string): Q.Promise<NodeJS.ReadableStream>;
    getArtifacts(buildId: number, project?: string): Q.Promise<BuildInterfaces.BuildArtifact[]>;
    getBadge(project: string, definitionId: number, branchName?: string): Q.Promise<string>;
    getBuildBadge(project: string, repoType: string, repoId?: string, branchName?: string): Q.Promise<BuildInterfaces.BuildBadge>;
    getBuildBadgeData(project: string, repoType: string, repoId?: string, branchName?: string): Q.Promise<string>;
    deleteBuild(buildId: number, project?: string): Q.Promise<void>;
    getBuild(buildId: number, project?: string, propertyFilters?: string): Q.Promise<BuildInterfaces.Build>;
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: BuildInterfaces.BuildReason, statusFilter?: BuildInterfaces.BuildStatus, resultFilter?: BuildInterfaces.BuildResult, tagFilters?: string[], properties?: string[], type?: BuildInterfaces.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: BuildInterfaces.QueryDeletedOption, queryOrder?: BuildInterfaces.BuildQueryOrder, branchName?: string): Q.Promise<BuildInterfaces.Build[]>;
    queueBuild(build: BuildInterfaces.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string): Q.Promise<BuildInterfaces.Build>;
    updateBuild(build: BuildInterfaces.Build, buildId: number, project?: string): Q.Promise<BuildInterfaces.Build>;
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean): Q.Promise<BuildInterfaces.Change[]>;
    getChangesBetweenBuilds(project: string, fromBuildId?: number, toBuildId?: number, top?: number): Q.Promise<BuildInterfaces.Change[]>;
    getBuildController(controllerId: number): Q.Promise<BuildInterfaces.BuildController>;
    getBuildControllers(name?: string): Q.Promise<BuildInterfaces.BuildController[]>;
    createDefinition(definition: BuildInterfaces.BuildDefinition, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): Q.Promise<BuildInterfaces.BuildDefinition>;
    deleteDefinition(definitionId: number, project?: string): Q.Promise<void>;
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[]): Q.Promise<BuildInterfaces.DefinitionReference>;
    getDefinitions(project?: string, name?: string, type?: BuildInterfaces.DefinitionType, repositoryId?: string, repositoryType?: string, queryOrder?: BuildInterfaces.DefinitionQueryOrder, top?: number, continuationToken?: string): Q.Promise<BuildInterfaces.DefinitionReference[]>;
    updateDefinition(definition: BuildInterfaces.BuildDefinition, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): Q.Promise<BuildInterfaces.BuildDefinition>;
    getBuildDeployments(project: string, buildId: number): Q.Promise<BuildInterfaces.Deployment[]>;
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number): Q.Promise<NodeJS.ReadableStream>;
    getBuildLogs(project: string, buildId: number): Q.Promise<BuildInterfaces.BuildLog[]>;
    getBuildLogsZip(project: string, buildId: number): Q.Promise<NodeJS.ReadableStream>;
    getBuildOptionDefinitions(project?: string): Q.Promise<BuildInterfaces.BuildOptionDefinition[]>;
    createQueue(queue: BuildInterfaces.AgentPoolQueue): Q.Promise<BuildInterfaces.AgentPoolQueue>;
    deleteQueue(id: number): Q.Promise<void>;
    getAgentPoolQueue(controllerId: number): Q.Promise<BuildInterfaces.AgentPoolQueue>;
    getQueues(name?: string): Q.Promise<BuildInterfaces.AgentPoolQueue[]>;
    getBuildReport(project: string, buildId: number, type?: string): Q.Promise<BuildInterfaces.BuildReportMetadata>;
    getBuildReportHtmlContent(project: string, buildId: number, type?: string): Q.Promise<NodeJS.ReadableStream>;
    getResourceUsage(): Q.Promise<BuildInterfaces.BuildResourceUsage>;
    getDefinitionRevisions(project: string, definitionId: number): Q.Promise<BuildInterfaces.BuildDefinitionRevision[]>;
    getBuildSettings(): Q.Promise<BuildInterfaces.BuildSettings>;
    updateBuildSettings(settings: BuildInterfaces.BuildSettings): Q.Promise<BuildInterfaces.BuildSettings>;
    addBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>;
    addBuildTags(tags: string[], project: string, buildId: number): Q.Promise<string[]>;
    deleteBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>;
    getBuildTags(project: string, buildId: number): Q.Promise<string[]>;
    getTags(project: string): Q.Promise<string[]>;
    deleteTemplate(project: string, templateId: string): Q.Promise<void>;
    getTemplate(project: string, templateId: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>;
    getTemplates(project: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate[]>;
    saveTemplate(template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>;
    getBuildTimeline(project: string, buildId: number, timelineId?: string, changeId?: number): Q.Promise<BuildInterfaces.Timeline>;
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number): Q.Promise<VSSInterfaces.ResourceRef[]>;
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number): Q.Promise<VSSInterfaces.ResourceRef[]>;
    getWorkItemsBetweenBuilds(project: string, fromBuildId: number, toBuildId: number, top?: number): Q.Promise<VSSInterfaces.ResourceRef[]>;
}

export class BuildApi extends basem.ClientApiBase implements IBuildApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Build-api');
    }

    /**
     * Associates an artifact with a build
     * 
     * @param {BuildInterfaces.BuildArtifact} artifact
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.BuildArtifact
     */
    public createArtifact(
        artifact: BuildInterfaces.BuildArtifact,
        buildId: number,
        project: string,
        onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.BuildArtifact, responseTypeMetadata: BuildInterfaces.TypeInfo.BuildArtifact, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, artifact, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets a specific artifact for a build
     * 
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.BuildArtifact
     */
    public getArtifact(
        buildId: number,
        artifactName: string,
        project: string,
        onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            artifactName: artifactName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildArtifact, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets a specific artifact for a build
     * 
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getArtifactContentZip(
        buildId: number,
        artifactName: string,
        project: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            artifactName: artifactName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues, queryValues)
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
     * Gets all artifacts for a build
     * 
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.BuildArtifact[]
     */
    public getArtifacts(
        buildId: number,
        project: string,
        onResult: (err: any, statusCode: number, artifacts: BuildInterfaces.BuildArtifact[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildArtifact, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project
     * @param {number} definitionId
     * @param {string} branchName
     * @param onResult callback function with the resulting string
     */
    public getBadge(
        project: string,
        definitionId: number,
        branchName: string,
        onResult: (err: any, statusCode: number, badge: string) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        var queryValues: any = {
            branchName: branchName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "de6a4df8-22cd-44ee-af2d-39f6aa7a4261", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} repoType
     * @param {string} repoId
     * @param {string} branchName
     * @param onResult callback function with the resulting BuildInterfaces.BuildBadge
     */
    public getBuildBadge(
        project: string,
        repoType: string,
        repoId: string,
        branchName: string,
        onResult: (err: any, statusCode: number, buildbadge: BuildInterfaces.BuildBadge) => void
        ): void {

        var routeValues: any = {
            project: project,
            repoType: repoType
        };

        var queryValues: any = {
            repoId: repoId,
            branchName: branchName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "build", "21b3b9ce-fad5-4567-9ad0-80679794e003", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildBadge, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} repoType
     * @param {string} repoId
     * @param {string} branchName
     * @param onResult callback function with the resulting string
     */
    public getBuildBadgeData(
        project: string,
        repoType: string,
        repoId: string,
        branchName: string,
        onResult: (err: any, statusCode: number, buildbadge: string) => void
        ): void {

        var routeValues: any = {
            project: project,
            repoType: repoType
        };

        var queryValues: any = {
            repoId: repoId,
            branchName: branchName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "build", "21b3b9ce-fad5-4567-9ad0-80679794e003", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Deletes a build
     * 
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param onResult callback function
     */
    public deleteBuild(
        buildId: number,
        project: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues)
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
     * Gets a build
     * 
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param onResult callback function with the resulting BuildInterfaces.Build
     */
    public getBuild(
        buildId: number,
        project: string,
        propertyFilters: string,
        onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            propertyFilters: propertyFilters,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Build, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets builds
     * 
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition ids
     * @param {number[]} queues - A comma-delimited list of queue ids
     * @param {string} buildNumber
     * @param {Date} minFinishTime
     * @param {Date} maxFinishTime
     * @param {string} requestedFor
     * @param {BuildInterfaces.BuildReason} reasonFilter
     * @param {BuildInterfaces.BuildStatus} statusFilter
     * @param {BuildInterfaces.BuildResult} resultFilter
     * @param {string[]} tagFilters - A comma-delimited list of tags
     * @param {string[]} properties - A comma-delimited list of properties to include in the results
     * @param {BuildInterfaces.DefinitionType} type - The definition type
     * @param {number} top - The maximum number of builds to retrieve
     * @param {string} continuationToken
     * @param {number} maxBuildsPerDefinition
     * @param {BuildInterfaces.QueryDeletedOption} deletedFilter
     * @param {BuildInterfaces.BuildQueryOrder} queryOrder
     * @param {string} branchName
     * @param onResult callback function with the resulting BuildInterfaces.Build[]
     */
    public getBuilds(
        project: string,
        definitions: number[],
        queues: number[],
        buildNumber: string,
        minFinishTime: Date,
        maxFinishTime: Date,
        requestedFor: string,
        reasonFilter: BuildInterfaces.BuildReason,
        statusFilter: BuildInterfaces.BuildStatus,
        resultFilter: BuildInterfaces.BuildResult,
        tagFilters: string[],
        properties: string[],
        type: BuildInterfaces.DefinitionType,
        top: number,
        continuationToken: string,
        maxBuildsPerDefinition: number,
        deletedFilter: BuildInterfaces.QueryDeletedOption,
        queryOrder: BuildInterfaces.BuildQueryOrder,
        branchName: string,
        onResult: (err: any, statusCode: number, builds: BuildInterfaces.Build[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            definitions: definitions && definitions.join(","),
            queues: queues && queues.join(","),
            buildNumber: buildNumber,
            minFinishTime: minFinishTime,
            maxFinishTime: maxFinishTime,
            requestedFor: requestedFor,
            reasonFilter: reasonFilter,
            statusFilter: statusFilter,
            resultFilter: resultFilter,
            tagFilters: tagFilters && tagFilters.join(","),
            properties: properties && properties.join(","),
            type: type,
            '$top': top,
            continuationToken: continuationToken,
            maxBuildsPerDefinition: maxBuildsPerDefinition,
            deletedFilter: deletedFilter,
            queryOrder: queryOrder,
            branchName: branchName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Build, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Queues a build
     * 
     * @param {BuildInterfaces.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param onResult callback function with the resulting BuildInterfaces.Build
     */
    public queueBuild(
        build: BuildInterfaces.Build,
        project: string,
        ignoreWarnings: boolean,
        checkInTicket: string,
        onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            ignoreWarnings: ignoreWarnings,
            checkInTicket: checkInTicket,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.Build, responseTypeMetadata: BuildInterfaces.TypeInfo.Build, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, build, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Updates a build
     * 
     * @param {BuildInterfaces.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.Build
     */
    public updateBuild(
        build: BuildInterfaces.Build,
        buildId: number,
        project: string,
        onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.Build, responseTypeMetadata: BuildInterfaces.TypeInfo.Build, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, build, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets the changes associated with a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     * @param onResult callback function with the resulting BuildInterfaces.Change[]
     */
    public getBuildChanges(
        project: string,
        buildId: number,
        continuationToken: string,
        top: number,
        includeSourceChange: boolean,
        onResult: (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            continuationToken: continuationToken,
            '$top': top,
            includeSourceChange: includeSourceChange,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "54572c7b-bbd3-45d4-80dc-28be08941620", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Change, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets the changes associated between given builds
     * 
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of changes to return
     * @param onResult callback function with the resulting BuildInterfaces.Change[]
     */
    public getChangesBetweenBuilds(
        project: string,
        fromBuildId: number,
        toBuildId: number,
        top: number,
        onResult: (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            fromBuildId: fromBuildId,
            toBuildId: toBuildId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "f10f0ea5-18a1-43ec-a8fb-2042c7be9b43", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Change, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets a controller
     * 
     * @param {number} controllerId
     * @param onResult callback function with the resulting BuildInterfaces.BuildController
     */
    public getBuildController(
        controllerId: number,
        onResult: (err: any, statusCode: number, Controller: BuildInterfaces.BuildController) => void
        ): void {

        var routeValues: any = {
            controllerId: controllerId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "fcac1932-2ee1-437f-9b6f-7f696be858f6", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildController, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets controller, optionally filtered by name
     * 
     * @param {string} name
     * @param onResult callback function with the resulting BuildInterfaces.BuildController[]
     */
    public getBuildControllers(
        name: string,
        onResult: (err: any, statusCode: number, Controllers: BuildInterfaces.BuildController[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            name: name,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "fcac1932-2ee1-437f-9b6f-7f696be858f6", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildController, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Creates a new definition
     * 
     * @param {BuildInterfaces.BuildDefinition} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinition
     */
    public createDefinition(
        definition: BuildInterfaces.BuildDefinition,
        project: string,
        definitionToCloneId: number,
        definitionToCloneRevision: number,
        onResult: (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            definitionToCloneId: definitionToCloneId,
            definitionToCloneRevision: definitionToCloneRevision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinition, responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinition, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, definition, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Deletes a definition and all associated builds
     * 
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param onResult callback function
     */
    public deleteDefinition(
        definitionId: number,
        project: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues)
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
     * Gets a definition, optionally at a specific revision
     * 
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param onResult callback function with the resulting BuildInterfaces.DefinitionReference
     */
    public getDefinition(
        definitionId: number,
        project: string,
        revision: number,
        propertyFilters: string[],
        onResult: (err: any, statusCode: number, definition: BuildInterfaces.DefinitionReference) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        var queryValues: any = {
            revision: revision,
            propertyFilters: propertyFilters && propertyFilters.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.DefinitionReference, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets definitions, optionally filtered by name
     * 
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {BuildInterfaces.DefinitionType} type
     * @param {string} repositoryId
     * @param {string} repositoryType
     * @param {BuildInterfaces.DefinitionQueryOrder} queryOrder
     * @param {number} top
     * @param {string} continuationToken
     * @param onResult callback function with the resulting BuildInterfaces.DefinitionReference[]
     */
    public getDefinitions(
        project: string,
        name: string,
        type: BuildInterfaces.DefinitionType,
        repositoryId: string,
        repositoryType: string,
        queryOrder: BuildInterfaces.DefinitionQueryOrder,
        top: number,
        continuationToken: string,
        onResult: (err: any, statusCode: number, definitions: BuildInterfaces.DefinitionReference[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            name: name,
            type: type,
            repositoryId: repositoryId,
            repositoryType: repositoryType,
            queryOrder: queryOrder,
            '$top': top,
            continuationToken: continuationToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.DefinitionReference, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Updates an existing definition
     * 
     * @param {BuildInterfaces.BuildDefinition} definition
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinition
     */
    public updateDefinition(
        definition: BuildInterfaces.BuildDefinition,
        definitionId: number,
        project: string,
        secretsSourceDefinitionId: number,
        secretsSourceDefinitionRevision: number,
        onResult: (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        var queryValues: any = {
            secretsSourceDefinitionId: secretsSourceDefinitionId,
            secretsSourceDefinitionRevision: secretsSourceDefinitionRevision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinition, responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinition, responseIsCollection: false };
            
            this.restClient.replace(url, apiVersion, definition, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets the deployment information associated with a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting BuildInterfaces.Deployment[]
     */
    public getBuildDeployments(
        project: string,
        buildId: number,
        onResult: (err: any, statusCode: number, deployments: BuildInterfaces.Deployment[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "f275be9a-556a-4ee9-b72f-f9c8370ccaee", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Deployment, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets a log
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getBuildLog(
        project: string,
        buildId: number,
        logId: number,
        startLine: number,
        endLine: number,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId,
            logId: logId
        };

        var queryValues: any = {
            startLine: startLine,
            endLine: endLine,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets logs for a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting BuildInterfaces.BuildLog[]
     */
    public getBuildLogs(
        project: string,
        buildId: number,
        onResult: (err: any, statusCode: number, logs: BuildInterfaces.BuildLog[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildLog, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets logs for a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getBuildLogsZip(
        project: string,
        buildId: number,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues)
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
     * @param onResult callback function with the resulting BuildInterfaces.BuildOptionDefinition[]
     */
    public getBuildOptionDefinitions(
        project: string,
        onResult: (err: any, statusCode: number, options: BuildInterfaces.BuildOptionDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "591cb5a4-2d46-4f3a-a697-5cd42b6bd332", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildOptionDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Creates a build queue
     * 
     * @param {BuildInterfaces.AgentPoolQueue} queue
     * @param onResult callback function with the resulting BuildInterfaces.AgentPoolQueue
     */
    public createQueue(
        queue: BuildInterfaces.AgentPoolQueue,
        onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "09f2a4b8-08c9-4991-85c3-d698937568be", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.AgentPoolQueue, responseTypeMetadata: BuildInterfaces.TypeInfo.AgentPoolQueue, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, queue, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Deletes a build queue
     * 
     * @param {number} id
     * @param onResult callback function
     */
    public deleteQueue(
        id: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            id: id,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "09f2a4b8-08c9-4991-85c3-d698937568be", routeValues, queryValues)
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
     * Gets a queue
     * 
     * @param {number} controllerId
     * @param onResult callback function with the resulting BuildInterfaces.AgentPoolQueue
     */
    public getAgentPoolQueue(
        controllerId: number,
        onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void
        ): void {

        var routeValues: any = {
            controllerId: controllerId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "09f2a4b8-08c9-4991-85c3-d698937568be", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.AgentPoolQueue, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets queues, optionally filtered by name
     * 
     * @param {string} name
     * @param onResult callback function with the resulting BuildInterfaces.AgentPoolQueue[]
     */
    public getQueues(
        name: string,
        onResult: (err: any, statusCode: number, queues: BuildInterfaces.AgentPoolQueue[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            name: name,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "09f2a4b8-08c9-4991-85c3-d698937568be", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.AgentPoolQueue, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets report for a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param onResult callback function with the resulting BuildInterfaces.BuildReportMetadata
     */
    public getBuildReport(
        project: string,
        buildId: number,
        type: string,
        onResult: (err: any, statusCode: number, report: BuildInterfaces.BuildReportMetadata) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            type: type,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "45bcaa88-67e1-4042-a035-56d3b4a7d44c", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildReportMetadata, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets report for a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} type
     * @param onResult callback function with the resulting any
     */
    public getBuildReportHtmlContent(
        project: string,
        buildId: number,
        type: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            type: type,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "45bcaa88-67e1-4042-a035-56d3b4a7d44c", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "text/html", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param onResult callback function with the resulting BuildInterfaces.BuildResourceUsage
     */
    public getResourceUsage(
        onResult: (err: any, statusCode: number, ResourceUsage: BuildInterfaces.BuildResourceUsage) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "3813d06c-9e36-4ea1-aac3-61a485d60e3d", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildResourceUsage, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets revisions of a definition
     * 
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinitionRevision[]
     */
    public getDefinitionRevisions(
        project: string,
        definitionId: number,
        onResult: (err: any, statusCode: number, revisions: BuildInterfaces.BuildDefinitionRevision[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "7c116775-52e5-453e-8c5d-914d9762d8c4", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionRevision, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param onResult callback function with the resulting BuildInterfaces.BuildSettings
     */
    public getBuildSettings(
        onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "aa8c1c9c-ef8b-474a-b8c4-785c7b191d0d", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildSettings, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Updates the build settings
     * 
     * @param {BuildInterfaces.BuildSettings} settings
     * @param onResult callback function with the resulting BuildInterfaces.BuildSettings
     */
    public updateBuildSettings(
        settings: BuildInterfaces.BuildSettings,
        onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "aa8c1c9c-ef8b-474a-b8c4-785c7b191d0d", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.BuildSettings, responseTypeMetadata: BuildInterfaces.TypeInfo.BuildSettings, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, settings, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Adds a tag to a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} tag
     * @param onResult callback function with the resulting string[]
     */
    public addBuildTag(
        project: string,
        buildId: number,
        tag: string,
        onResult: (err: any, statusCode: number, tags: string[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId,
            tag: tag
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: true };
            
            this.restClient.replace(url, apiVersion, null, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Adds tag to a build
     * 
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting string[]
     */
    public addBuildTags(
        tags: string[],
        project: string,
        buildId: number,
        onResult: (err: any, statusCode: number, tags: string[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, tags, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Deletes a tag from a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} tag
     * @param onResult callback function with the resulting string[]
     */
    public deleteBuildTag(
        project: string,
        buildId: number,
        tag: string,
        onResult: (err: any, statusCode: number, tags: string[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId,
            tag: tag
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: true };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets the tags for a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting string[]
     */
    public getBuildTags(
        project: string,
        buildId: number,
        onResult: (err: any, statusCode: number, tags: string[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting string[]
     */
    public getTags(
        project: string,
        onResult: (err: any, statusCode: number, tags: string[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "d84ac5c6-edc7-43d5-adc9-1b34be5dea09", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Deletes a definition template
     * 
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @param onResult callback function
     */
    public deleteTemplate(
        project: string,
        templateId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            templateId: templateId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues)
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
     * Gets definition template filtered by id
     * 
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinitionTemplate
     */
    public getTemplate(
        project: string,
        templateId: string,
        onResult: (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => void
        ): void {

        var routeValues: any = {
            project: project,
            templateId: templateId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionTemplate, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinitionTemplate[]
     */
    public getTemplates(
        project: string,
        onResult: (err: any, statusCode: number, templates: BuildInterfaces.BuildDefinitionTemplate[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionTemplate, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Saves a definition template
     * 
     * @param {BuildInterfaces.BuildDefinitionTemplate} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinitionTemplate
     */
    public saveTemplate(
        template: BuildInterfaces.BuildDefinitionTemplate,
        project: string,
        templateId: string,
        onResult: (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => void
        ): void {

        var routeValues: any = {
            project: project,
            templateId: templateId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionTemplate, responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionTemplate, responseIsCollection: false };
            
            this.restClient.replace(url, apiVersion, template, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets details for a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} timelineId
     * @param {number} changeId
     * @param onResult callback function with the resulting BuildInterfaces.Timeline
     */
    public getBuildTimeline(
        project: string,
        buildId: number,
        timelineId: string,
        changeId: number,
        onResult: (err: any, statusCode: number, Timeline: BuildInterfaces.Timeline) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId,
            timelineId: timelineId
        };

        var queryValues: any = {
            changeId: changeId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "8baac422-4c6e-4de5-8532-db96d92acffa", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Timeline, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets the work item ids associated with a build
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param onResult callback function with the resulting VSSInterfaces.ResourceRef[]
     */
    public getBuildWorkItemsRefs(
        project: string,
        buildId: number,
        top: number,
        onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "5a21f5d2-5642-47e4-a0bd-1356e6731bee", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: VSSInterfaces.TypeInfo.ResourceRef, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets the work item ids associated with build commits
     * 
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param onResult callback function with the resulting VSSInterfaces.ResourceRef[]
     */
    public getBuildWorkItemsRefsFromCommits(
        commitIds: string[],
        project: string,
        buildId: number,
        top: number,
        onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "5a21f5d2-5642-47e4-a0bd-1356e6731bee", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: VSSInterfaces.TypeInfo.ResourceRef, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, commitIds, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets all the work item ids inbetween fromBuildId to toBuildId
     * 
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId
     * @param {number} toBuildId
     * @param {number} top - The maximum number of workitems to return
     * @param onResult callback function with the resulting VSSInterfaces.ResourceRef[]
     */
    public getWorkItemsBetweenBuilds(
        project: string,
        fromBuildId: number,
        toBuildId: number,
        top: number,
        onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            fromBuildId: fromBuildId,
            toBuildId: toBuildId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "52ba8915-5518-42e3-a4bb-b0182d159e2d", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: VSSInterfaces.TypeInfo.ResourceRef, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QBuildApi extends basem.QClientApiBase implements IQBuildApi {
    api: BuildApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, BuildApi);
    }

    /**
    * Associates an artifact with a build
    * 
    * @param {BuildInterfaces.BuildArtifact} artifact
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    */
    public createArtifact(
        artifact: BuildInterfaces.BuildArtifact,
        buildId: number,
        project?: string
        ): Q.Promise<BuildInterfaces.BuildArtifact> {
    
        var deferred = Q.defer<BuildInterfaces.BuildArtifact>();

        this.api.createArtifact(artifact, buildId, project, (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifact);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildArtifact>>deferred.promise;
    }

    /**
    * Gets a specific artifact for a build
    * 
    * @param {number} buildId
    * @param {string} artifactName
    * @param {string} project - Project ID or project name
    */
    public getArtifact(
        buildId: number,
        artifactName: string,
        project?: string
        ): Q.Promise<BuildInterfaces.BuildArtifact> {
    
        var deferred = Q.defer<BuildInterfaces.BuildArtifact>();

        this.api.getArtifact(buildId, artifactName, project, (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifact);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildArtifact>>deferred.promise;
    }

    /**
    * Gets a specific artifact for a build
    * 
    * @param {number} buildId
    * @param {string} artifactName
    * @param {string} project - Project ID or project name
    */
    public getArtifactContentZip(
        buildId: number,
        artifactName: string,
        project?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getArtifactContentZip(buildId, artifactName, project, (err: any, statusCode: number, artifact: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifact);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * Gets all artifacts for a build
    * 
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    */
    public getArtifacts(
        buildId: number,
        project?: string
        ): Q.Promise<BuildInterfaces.BuildArtifact[]> {
    
        var deferred = Q.defer<BuildInterfaces.BuildArtifact[]>();

        this.api.getArtifacts(buildId, project, (err: any, statusCode: number, artifacts: BuildInterfaces.BuildArtifact[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifacts);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildArtifact[]>>deferred.promise;
    }

    /**
    * @param {string} project
    * @param {number} definitionId
    * @param {string} branchName
    */
    public getBadge(
        project: string,
        definitionId: number,
        branchName?: string
        ): Q.Promise<string> {
    
        var deferred = Q.defer<string>();

        this.api.getBadge(project, definitionId, branchName, (err: any, statusCode: number, badge: string) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(badge);
            }
        });

        return <Q.Promise<string>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} repoType
    * @param {string} repoId
    * @param {string} branchName
    */
    public getBuildBadge(
        project: string,
        repoType: string,
        repoId?: string,
        branchName?: string
        ): Q.Promise<BuildInterfaces.BuildBadge> {
    
        var deferred = Q.defer<BuildInterfaces.BuildBadge>();

        this.api.getBuildBadge(project, repoType, repoId, branchName, (err: any, statusCode: number, buildbadge: BuildInterfaces.BuildBadge) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(buildbadge);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildBadge>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} repoType
    * @param {string} repoId
    * @param {string} branchName
    */
    public getBuildBadgeData(
        project: string,
        repoType: string,
        repoId?: string,
        branchName?: string
        ): Q.Promise<string> {
    
        var deferred = Q.defer<string>();

        this.api.getBuildBadgeData(project, repoType, repoId, branchName, (err: any, statusCode: number, buildbadge: string) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(buildbadge);
            }
        });

        return <Q.Promise<string>>deferred.promise;
    }

    /**
    * Deletes a build
    * 
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    */
    public deleteBuild(
        buildId: number,
        project?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteBuild(buildId, project, (err: any, statusCode: number) => {
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
    * Gets a build
    * 
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
    */
    public getBuild(
        buildId: number,
        project?: string,
        propertyFilters?: string
        ): Q.Promise<BuildInterfaces.Build> {
    
        var deferred = Q.defer<BuildInterfaces.Build>();

        this.api.getBuild(buildId, project, propertyFilters, (err: any, statusCode: number, build: BuildInterfaces.Build) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(build);
            }
        });

        return <Q.Promise<BuildInterfaces.Build>>deferred.promise;
    }

    /**
    * Gets builds
    * 
    * @param {string} project - Project ID or project name
    * @param {number[]} definitions - A comma-delimited list of definition ids
    * @param {number[]} queues - A comma-delimited list of queue ids
    * @param {string} buildNumber
    * @param {Date} minFinishTime
    * @param {Date} maxFinishTime
    * @param {string} requestedFor
    * @param {BuildInterfaces.BuildReason} reasonFilter
    * @param {BuildInterfaces.BuildStatus} statusFilter
    * @param {BuildInterfaces.BuildResult} resultFilter
    * @param {string[]} tagFilters - A comma-delimited list of tags
    * @param {string[]} properties - A comma-delimited list of properties to include in the results
    * @param {BuildInterfaces.DefinitionType} type - The definition type
    * @param {number} top - The maximum number of builds to retrieve
    * @param {string} continuationToken
    * @param {number} maxBuildsPerDefinition
    * @param {BuildInterfaces.QueryDeletedOption} deletedFilter
    * @param {BuildInterfaces.BuildQueryOrder} queryOrder
    * @param {string} branchName
    */
    public getBuilds(
        project?: string,
        definitions?: number[],
        queues?: number[],
        buildNumber?: string,
        minFinishTime?: Date,
        maxFinishTime?: Date,
        requestedFor?: string,
        reasonFilter?: BuildInterfaces.BuildReason,
        statusFilter?: BuildInterfaces.BuildStatus,
        resultFilter?: BuildInterfaces.BuildResult,
        tagFilters?: string[],
        properties?: string[],
        type?: BuildInterfaces.DefinitionType,
        top?: number,
        continuationToken?: string,
        maxBuildsPerDefinition?: number,
        deletedFilter?: BuildInterfaces.QueryDeletedOption,
        queryOrder?: BuildInterfaces.BuildQueryOrder,
        branchName?: string
        ): Q.Promise<BuildInterfaces.Build[]> {
    
        var deferred = Q.defer<BuildInterfaces.Build[]>();

        this.api.getBuilds(project, definitions, queues, buildNumber, minFinishTime, maxFinishTime, requestedFor, reasonFilter, statusFilter, resultFilter, tagFilters, properties, type, top, continuationToken, maxBuildsPerDefinition, deletedFilter, queryOrder, branchName, (err: any, statusCode: number, builds: BuildInterfaces.Build[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(builds);
            }
        });

        return <Q.Promise<BuildInterfaces.Build[]>>deferred.promise;
    }

    /**
    * Queues a build
    * 
    * @param {BuildInterfaces.Build} build
    * @param {string} project - Project ID or project name
    * @param {boolean} ignoreWarnings
    * @param {string} checkInTicket
    */
    public queueBuild(
        build: BuildInterfaces.Build,
        project?: string,
        ignoreWarnings?: boolean,
        checkInTicket?: string
        ): Q.Promise<BuildInterfaces.Build> {
    
        var deferred = Q.defer<BuildInterfaces.Build>();

        this.api.queueBuild(build, project, ignoreWarnings, checkInTicket, (err: any, statusCode: number, build: BuildInterfaces.Build) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(build);
            }
        });

        return <Q.Promise<BuildInterfaces.Build>>deferred.promise;
    }

    /**
    * Updates a build
    * 
    * @param {BuildInterfaces.Build} build
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    */
    public updateBuild(
        build: BuildInterfaces.Build,
        buildId: number,
        project?: string
        ): Q.Promise<BuildInterfaces.Build> {
    
        var deferred = Q.defer<BuildInterfaces.Build>();

        this.api.updateBuild(build, buildId, project, (err: any, statusCode: number, build: BuildInterfaces.Build) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(build);
            }
        });

        return <Q.Promise<BuildInterfaces.Build>>deferred.promise;
    }

    /**
    * Gets the changes associated with a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} continuationToken
    * @param {number} top - The maximum number of changes to return
    * @param {boolean} includeSourceChange
    */
    public getBuildChanges(
        project: string,
        buildId: number,
        continuationToken?: string,
        top?: number,
        includeSourceChange?: boolean
        ): Q.Promise<BuildInterfaces.Change[]> {
    
        var deferred = Q.defer<BuildInterfaces.Change[]>();

        this.api.getBuildChanges(project, buildId, continuationToken, top, includeSourceChange, (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(changes);
            }
        });

        return <Q.Promise<BuildInterfaces.Change[]>>deferred.promise;
    }

    /**
    * Gets the changes associated between given builds
    * 
    * @param {string} project - Project ID or project name
    * @param {number} fromBuildId
    * @param {number} toBuildId
    * @param {number} top - The maximum number of changes to return
    */
    public getChangesBetweenBuilds(
        project: string,
        fromBuildId?: number,
        toBuildId?: number,
        top?: number
        ): Q.Promise<BuildInterfaces.Change[]> {
    
        var deferred = Q.defer<BuildInterfaces.Change[]>();

        this.api.getChangesBetweenBuilds(project, fromBuildId, toBuildId, top, (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(changes);
            }
        });

        return <Q.Promise<BuildInterfaces.Change[]>>deferred.promise;
    }

    /**
    * Gets a controller
    * 
    * @param {number} controllerId
    */
    public getBuildController(
        controllerId: number
        ): Q.Promise<BuildInterfaces.BuildController> {
    
        var deferred = Q.defer<BuildInterfaces.BuildController>();

        this.api.getBuildController(controllerId, (err: any, statusCode: number, Controller: BuildInterfaces.BuildController) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Controller);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildController>>deferred.promise;
    }

    /**
    * Gets controller, optionally filtered by name
    * 
    * @param {string} name
    */
    public getBuildControllers(
        name?: string
        ): Q.Promise<BuildInterfaces.BuildController[]> {
    
        var deferred = Q.defer<BuildInterfaces.BuildController[]>();

        this.api.getBuildControllers(name, (err: any, statusCode: number, Controllers: BuildInterfaces.BuildController[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Controllers);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildController[]>>deferred.promise;
    }

    /**
    * Creates a new definition
    * 
    * @param {BuildInterfaces.BuildDefinition} definition
    * @param {string} project - Project ID or project name
    * @param {number} definitionToCloneId
    * @param {number} definitionToCloneRevision
    */
    public createDefinition(
        definition: BuildInterfaces.BuildDefinition,
        project?: string,
        definitionToCloneId?: number,
        definitionToCloneRevision?: number
        ): Q.Promise<BuildInterfaces.BuildDefinition> {
    
        var deferred = Q.defer<BuildInterfaces.BuildDefinition>();

        this.api.createDefinition(definition, project, definitionToCloneId, definitionToCloneRevision, (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildDefinition>>deferred.promise;
    }

    /**
    * Deletes a definition and all associated builds
    * 
    * @param {number} definitionId
    * @param {string} project - Project ID or project name
    */
    public deleteDefinition(
        definitionId: number,
        project?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteDefinition(definitionId, project, (err: any, statusCode: number) => {
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
    * Gets a definition, optionally at a specific revision
    * 
    * @param {number} definitionId
    * @param {string} project - Project ID or project name
    * @param {number} revision
    * @param {string[]} propertyFilters
    */
    public getDefinition(
        definitionId: number,
        project?: string,
        revision?: number,
        propertyFilters?: string[]
        ): Q.Promise<BuildInterfaces.DefinitionReference> {
    
        var deferred = Q.defer<BuildInterfaces.DefinitionReference>();

        this.api.getDefinition(definitionId, project, revision, propertyFilters, (err: any, statusCode: number, definition: BuildInterfaces.DefinitionReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        });

        return <Q.Promise<BuildInterfaces.DefinitionReference>>deferred.promise;
    }

    /**
    * Gets definitions, optionally filtered by name
    * 
    * @param {string} project - Project ID or project name
    * @param {string} name
    * @param {BuildInterfaces.DefinitionType} type
    * @param {string} repositoryId
    * @param {string} repositoryType
    * @param {BuildInterfaces.DefinitionQueryOrder} queryOrder
    * @param {number} top
    * @param {string} continuationToken
    */
    public getDefinitions(
        project?: string,
        name?: string,
        type?: BuildInterfaces.DefinitionType,
        repositoryId?: string,
        repositoryType?: string,
        queryOrder?: BuildInterfaces.DefinitionQueryOrder,
        top?: number,
        continuationToken?: string
        ): Q.Promise<BuildInterfaces.DefinitionReference[]> {
    
        var deferred = Q.defer<BuildInterfaces.DefinitionReference[]>();

        this.api.getDefinitions(project, name, type, repositoryId, repositoryType, queryOrder, top, continuationToken, (err: any, statusCode: number, definitions: BuildInterfaces.DefinitionReference[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definitions);
            }
        });

        return <Q.Promise<BuildInterfaces.DefinitionReference[]>>deferred.promise;
    }

    /**
    * Updates an existing definition
    * 
    * @param {BuildInterfaces.BuildDefinition} definition
    * @param {number} definitionId
    * @param {string} project - Project ID or project name
    * @param {number} secretsSourceDefinitionId
    * @param {number} secretsSourceDefinitionRevision
    */
    public updateDefinition(
        definition: BuildInterfaces.BuildDefinition,
        definitionId: number,
        project?: string,
        secretsSourceDefinitionId?: number,
        secretsSourceDefinitionRevision?: number
        ): Q.Promise<BuildInterfaces.BuildDefinition> {
    
        var deferred = Q.defer<BuildInterfaces.BuildDefinition>();

        this.api.updateDefinition(definition, definitionId, project, secretsSourceDefinitionId, secretsSourceDefinitionRevision, (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(definition);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildDefinition>>deferred.promise;
    }

    /**
    * Gets the deployment information associated with a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    public getBuildDeployments(
        project: string,
        buildId: number
        ): Q.Promise<BuildInterfaces.Deployment[]> {
    
        var deferred = Q.defer<BuildInterfaces.Deployment[]>();

        this.api.getBuildDeployments(project, buildId, (err: any, statusCode: number, deployments: BuildInterfaces.Deployment[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(deployments);
            }
        });

        return <Q.Promise<BuildInterfaces.Deployment[]>>deferred.promise;
    }

    /**
    * Gets a log
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} logId
    * @param {number} startLine
    * @param {number} endLine
    */
    public getBuildLog(
        project: string,
        buildId: number,
        logId: number,
        startLine?: number,
        endLine?: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getBuildLog(project, buildId, logId, startLine, endLine, (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
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
    * Gets logs for a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    public getBuildLogs(
        project: string,
        buildId: number
        ): Q.Promise<BuildInterfaces.BuildLog[]> {
    
        var deferred = Q.defer<BuildInterfaces.BuildLog[]>();

        this.api.getBuildLogs(project, buildId, (err: any, statusCode: number, logs: BuildInterfaces.BuildLog[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(logs);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildLog[]>>deferred.promise;
    }

    /**
    * Gets logs for a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    public getBuildLogsZip(
        project: string,
        buildId: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getBuildLogsZip(project, buildId, (err: any, statusCode: number, log: NodeJS.ReadableStream) => {
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
    */
    public getBuildOptionDefinitions(
        project?: string
        ): Q.Promise<BuildInterfaces.BuildOptionDefinition[]> {
    
        var deferred = Q.defer<BuildInterfaces.BuildOptionDefinition[]>();

        this.api.getBuildOptionDefinitions(project, (err: any, statusCode: number, options: BuildInterfaces.BuildOptionDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(options);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildOptionDefinition[]>>deferred.promise;
    }

    /**
    * Creates a build queue
    * 
    * @param {BuildInterfaces.AgentPoolQueue} queue
    */
    public createQueue(
        queue: BuildInterfaces.AgentPoolQueue
        ): Q.Promise<BuildInterfaces.AgentPoolQueue> {
    
        var deferred = Q.defer<BuildInterfaces.AgentPoolQueue>();

        this.api.createQueue(queue, (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queue);
            }
        });

        return <Q.Promise<BuildInterfaces.AgentPoolQueue>>deferred.promise;
    }

    /**
    * Deletes a build queue
    * 
    * @param {number} id
    */
    public deleteQueue(
        id: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteQueue(id, (err: any, statusCode: number) => {
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
    * Gets a queue
    * 
    * @param {number} controllerId
    */
    public getAgentPoolQueue(
        controllerId: number
        ): Q.Promise<BuildInterfaces.AgentPoolQueue> {
    
        var deferred = Q.defer<BuildInterfaces.AgentPoolQueue>();

        this.api.getAgentPoolQueue(controllerId, (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queue);
            }
        });

        return <Q.Promise<BuildInterfaces.AgentPoolQueue>>deferred.promise;
    }

    /**
    * Gets queues, optionally filtered by name
    * 
    * @param {string} name
    */
    public getQueues(
        name?: string
        ): Q.Promise<BuildInterfaces.AgentPoolQueue[]> {
    
        var deferred = Q.defer<BuildInterfaces.AgentPoolQueue[]>();

        this.api.getQueues(name, (err: any, statusCode: number, queues: BuildInterfaces.AgentPoolQueue[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queues);
            }
        });

        return <Q.Promise<BuildInterfaces.AgentPoolQueue[]>>deferred.promise;
    }

    /**
    * Gets report for a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} type
    */
    public getBuildReport(
        project: string,
        buildId: number,
        type?: string
        ): Q.Promise<BuildInterfaces.BuildReportMetadata> {
    
        var deferred = Q.defer<BuildInterfaces.BuildReportMetadata>();

        this.api.getBuildReport(project, buildId, type, (err: any, statusCode: number, report: BuildInterfaces.BuildReportMetadata) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(report);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildReportMetadata>>deferred.promise;
    }

    /**
    * Gets report for a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} type
    */
    public getBuildReportHtmlContent(
        project: string,
        buildId: number,
        type?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getBuildReportHtmlContent(project, buildId, type, (err: any, statusCode: number, report: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(report);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    */
    public getResourceUsage(
        ): Q.Promise<BuildInterfaces.BuildResourceUsage> {
    
        var deferred = Q.defer<BuildInterfaces.BuildResourceUsage>();

        this.api.getResourceUsage((err: any, statusCode: number, ResourceUsage: BuildInterfaces.BuildResourceUsage) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResourceUsage);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildResourceUsage>>deferred.promise;
    }

    /**
    * Gets revisions of a definition
    * 
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    */
    public getDefinitionRevisions(
        project: string,
        definitionId: number
        ): Q.Promise<BuildInterfaces.BuildDefinitionRevision[]> {
    
        var deferred = Q.defer<BuildInterfaces.BuildDefinitionRevision[]>();

        this.api.getDefinitionRevisions(project, definitionId, (err: any, statusCode: number, revisions: BuildInterfaces.BuildDefinitionRevision[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revisions);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildDefinitionRevision[]>>deferred.promise;
    }

    /**
    */
    public getBuildSettings(
        ): Q.Promise<BuildInterfaces.BuildSettings> {
    
        var deferred = Q.defer<BuildInterfaces.BuildSettings>();

        this.api.getBuildSettings((err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(setting);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildSettings>>deferred.promise;
    }

    /**
    * Updates the build settings
    * 
    * @param {BuildInterfaces.BuildSettings} settings
    */
    public updateBuildSettings(
        settings: BuildInterfaces.BuildSettings
        ): Q.Promise<BuildInterfaces.BuildSettings> {
    
        var deferred = Q.defer<BuildInterfaces.BuildSettings>();

        this.api.updateBuildSettings(settings, (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(setting);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildSettings>>deferred.promise;
    }

    /**
    * Adds a tag to a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} tag
    */
    public addBuildTag(
        project: string,
        buildId: number,
        tag: string
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.api.addBuildTag(project, buildId, tag, (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
    * Adds tag to a build
    * 
    * @param {string[]} tags
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    public addBuildTags(
        tags: string[],
        project: string,
        buildId: number
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.api.addBuildTags(tags, project, buildId, (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
    * Deletes a tag from a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} tag
    */
    public deleteBuildTag(
        project: string,
        buildId: number,
        tag: string
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.api.deleteBuildTag(project, buildId, tag, (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
    * Gets the tags for a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    public getBuildTags(
        project: string,
        buildId: number
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.api.getBuildTags(project, buildId, (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public getTags(
        project: string
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.api.getTags(project, (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
    * Deletes a definition template
    * 
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    public deleteTemplate(
        project: string,
        templateId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteTemplate(project, templateId, (err: any, statusCode: number) => {
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
    * Gets definition template filtered by id
    * 
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    public getTemplate(
        project: string,
        templateId: string
        ): Q.Promise<BuildInterfaces.BuildDefinitionTemplate> {
    
        var deferred = Q.defer<BuildInterfaces.BuildDefinitionTemplate>();

        this.api.getTemplate(project, templateId, (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(template);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildDefinitionTemplate>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public getTemplates(
        project: string
        ): Q.Promise<BuildInterfaces.BuildDefinitionTemplate[]> {
    
        var deferred = Q.defer<BuildInterfaces.BuildDefinitionTemplate[]>();

        this.api.getTemplates(project, (err: any, statusCode: number, templates: BuildInterfaces.BuildDefinitionTemplate[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(templates);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildDefinitionTemplate[]>>deferred.promise;
    }

    /**
    * Saves a definition template
    * 
    * @param {BuildInterfaces.BuildDefinitionTemplate} template
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    public saveTemplate(
        template: BuildInterfaces.BuildDefinitionTemplate,
        project: string,
        templateId: string
        ): Q.Promise<BuildInterfaces.BuildDefinitionTemplate> {
    
        var deferred = Q.defer<BuildInterfaces.BuildDefinitionTemplate>();

        this.api.saveTemplate(template, project, templateId, (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(template);
            }
        });

        return <Q.Promise<BuildInterfaces.BuildDefinitionTemplate>>deferred.promise;
    }

    /**
    * Gets details for a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} timelineId
    * @param {number} changeId
    */
    public getBuildTimeline(
        project: string,
        buildId: number,
        timelineId?: string,
        changeId?: number
        ): Q.Promise<BuildInterfaces.Timeline> {
    
        var deferred = Q.defer<BuildInterfaces.Timeline>();

        this.api.getBuildTimeline(project, buildId, timelineId, changeId, (err: any, statusCode: number, Timeline: BuildInterfaces.Timeline) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Timeline);
            }
        });

        return <Q.Promise<BuildInterfaces.Timeline>>deferred.promise;
    }

    /**
    * Gets the work item ids associated with a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} top - The maximum number of workitems to return
    */
    public getBuildWorkItemsRefs(
        project: string,
        buildId: number,
        top?: number
        ): Q.Promise<VSSInterfaces.ResourceRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.ResourceRef[]>();

        this.api.getBuildWorkItemsRefs(project, buildId, top, (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workitems);
            }
        });

        return <Q.Promise<VSSInterfaces.ResourceRef[]>>deferred.promise;
    }

    /**
    * Gets the work item ids associated with build commits
    * 
    * @param {string[]} commitIds
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
    */
    public getBuildWorkItemsRefsFromCommits(
        commitIds: string[],
        project: string,
        buildId: number,
        top?: number
        ): Q.Promise<VSSInterfaces.ResourceRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.ResourceRef[]>();

        this.api.getBuildWorkItemsRefsFromCommits(commitIds, project, buildId, top, (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workitems);
            }
        });

        return <Q.Promise<VSSInterfaces.ResourceRef[]>>deferred.promise;
    }

    /**
    * Gets all the work item ids inbetween fromBuildId to toBuildId
    * 
    * @param {string} project - Project ID or project name
    * @param {number} fromBuildId
    * @param {number} toBuildId
    * @param {number} top - The maximum number of workitems to return
    */
    public getWorkItemsBetweenBuilds(
        project: string,
        fromBuildId: number,
        toBuildId: number,
        top?: number
        ): Q.Promise<VSSInterfaces.ResourceRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.ResourceRef[]>();

        this.api.getWorkItemsBetweenBuilds(project, fromBuildId, toBuildId, top, (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workitems);
            }
        });

        return <Q.Promise<VSSInterfaces.ResourceRef[]>>deferred.promise;
    }

}
