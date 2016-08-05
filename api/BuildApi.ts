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
import BuildInterfaces = require("./interfaces/BuildInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IBuildApi extends basem.ClientApiBase {
    createArtifact(artifact: BuildInterfaces.BuildArtifact, buildId: number, project?: string): Promise<BuildInterfaces.BuildArtifact>;
    getArtifact(buildId: number, artifactName: string, project?: string): Promise<BuildInterfaces.BuildArtifact>;
    getArtifactContentZip(buildId: number, artifactName: string, project?: string): Promise<NodeJS.ReadableStream>;
    getArtifacts(buildId: number, project?: string): Promise<BuildInterfaces.BuildArtifact[]>;
    getBadge(project: string, definitionId: number, branchName?: string): Promise<string>;
    getBuildBadge(project: string, repoType: string, repoId?: string, branchName?: string): Promise<BuildInterfaces.BuildBadge>;
    getBuildBadgeData(project: string, repoType: string, repoId?: string, branchName?: string): Promise<string>;
    deleteBuild(buildId: number, project?: string): Promise<void>;
    getBuild(buildId: number, project?: string, propertyFilters?: string): Promise<BuildInterfaces.Build>;
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: BuildInterfaces.BuildReason, statusFilter?: BuildInterfaces.BuildStatus, resultFilter?: BuildInterfaces.BuildResult, tagFilters?: string[], properties?: string[], top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: BuildInterfaces.QueryDeletedOption, queryOrder?: BuildInterfaces.BuildQueryOrder, branchName?: string, buildIds?: number[], repositoryId?: string, repositoryType?: string): Promise<BuildInterfaces.Build[]>;
    queueBuild(build: BuildInterfaces.Build, project?: string, ignoreWarnings?: boolean, checkInTicket?: string): Promise<BuildInterfaces.Build>;
    updateBuild(build: BuildInterfaces.Build, buildId: number, project?: string): Promise<BuildInterfaces.Build>;
    updateBuilds(builds: BuildInterfaces.Build[], project?: string): Promise<BuildInterfaces.Build[]>;
    getBuildChanges(project: string, buildId: number, continuationToken?: string, top?: number, includeSourceChange?: boolean): Promise<BuildInterfaces.Change[]>;
    getChangesBetweenBuilds(project: string, fromBuildId?: number, toBuildId?: number, top?: number): Promise<BuildInterfaces.Change[]>;
    getBuildController(controllerId: number): Promise<BuildInterfaces.BuildController>;
    getBuildControllers(name?: string): Promise<BuildInterfaces.BuildController[]>;
    createDefinition(definition: BuildInterfaces.BuildDefinition, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): Promise<BuildInterfaces.BuildDefinition>;
    deleteDefinition(definitionId: number, project?: string): Promise<void>;
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[]): Promise<BuildInterfaces.BuildDefinition>;
    getDefinitions(project?: string, name?: string, repositoryId?: string, repositoryType?: string, queryOrder?: BuildInterfaces.DefinitionQueryOrder, top?: number, continuationToken?: string, minMetricsTime?: Date, definitionIds?: number[], path?: string, builtAfter?: Date, notBuiltAfter?: Date): Promise<BuildInterfaces.BuildDefinitionReference[]>;
    updateDefinition(definition: BuildInterfaces.BuildDefinition, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): Promise<BuildInterfaces.BuildDefinition>;
    createFolder(folder: BuildInterfaces.Folder, project: string, path: string): Promise<BuildInterfaces.Folder>;
    deleteFolder(project: string, path: string): Promise<void>;
    getFolders(project: string, path?: string, queryOrder?: BuildInterfaces.FolderQueryOrder): Promise<BuildInterfaces.Folder[]>;
    updateFolder(folder: BuildInterfaces.Folder, project: string, path: string): Promise<BuildInterfaces.Folder>;
    getBuildLog(project: string, buildId: number, logId: number, startLine?: number, endLine?: number): Promise<NodeJS.ReadableStream>;
    getBuildLogLines(project: string, buildId: number, logId: number, startLine?: number, endLine?: number): Promise<string[]>;
    getBuildLogs(project: string, buildId: number): Promise<BuildInterfaces.BuildLog[]>;
    getBuildLogsZip(project: string, buildId: number): Promise<NodeJS.ReadableStream>;
    getDefinitionMetrics(project: string, definitionId: number, minMetricsTime?: Date): Promise<BuildInterfaces.BuildMetric[]>;
    getBuildOptionDefinitions(project?: string): Promise<BuildInterfaces.BuildOptionDefinition[]>;
    getBuildReport(project: string, buildId: number, type?: string): Promise<BuildInterfaces.BuildReportMetadata>;
    getBuildReportHtmlContent(project: string, buildId: number, type?: string): Promise<NodeJS.ReadableStream>;
    getResourceUsage(): Promise<BuildInterfaces.BuildResourceUsage>;
    getDefinitionRevisions(project: string, definitionId: number): Promise<BuildInterfaces.BuildDefinitionRevision[]>;
    getBuildSettings(): Promise<BuildInterfaces.BuildSettings>;
    updateBuildSettings(settings: BuildInterfaces.BuildSettings): Promise<BuildInterfaces.BuildSettings>;
    addBuildTag(project: string, buildId: number, tag: string): Promise<string[]>;
    addBuildTags(tags: string[], project: string, buildId: number): Promise<string[]>;
    deleteBuildTag(project: string, buildId: number, tag: string): Promise<string[]>;
    getBuildTags(project: string, buildId: number): Promise<string[]>;
    getTags(project: string): Promise<string[]>;
    deleteTemplate(project: string, templateId: string): Promise<void>;
    getTemplate(project: string, templateId: string): Promise<BuildInterfaces.BuildDefinitionTemplate>;
    getTemplates(project: string): Promise<BuildInterfaces.BuildDefinitionTemplate[]>;
    saveTemplate(template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string): Promise<BuildInterfaces.BuildDefinitionTemplate>;
    getBuildTimeline(project: string, buildId: number, timelineId?: string, changeId?: number, planId?: string): Promise<BuildInterfaces.Timeline>;
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number): Promise<VSSInterfaces.ResourceRef[]>;
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number): Promise<VSSInterfaces.ResourceRef[]>;
    getWorkItemsBetweenBuilds(project: string, fromBuildId: number, toBuildId: number, top?: number): Promise<VSSInterfaces.ResourceRef[]>;
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
    */
    public createArtifact(
        artifact: BuildInterfaces.BuildArtifact,
        buildId: number,
        project?: string
        ): Promise<BuildInterfaces.BuildArtifact> {
    
        let deferred = Q.defer<BuildInterfaces.BuildArtifact>();

        let onResult = (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifact);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, artifact, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<BuildInterfaces.BuildArtifact> {
    
        let deferred = Q.defer<BuildInterfaces.BuildArtifact>();

        let onResult = (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifact);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        let queryValues: any = {
            artifactName: artifactName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues, queryValues)
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, artifact: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifact);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        let queryValues: any = {
            artifactName: artifactName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues, queryValues)
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
    * Gets all artifacts for a build
    * 
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    */
    public getArtifacts(
        buildId: number,
        project?: string
        ): Promise<BuildInterfaces.BuildArtifact[]> {
    
        let deferred = Q.defer<BuildInterfaces.BuildArtifact[]>();

        let onResult = (err: any, statusCode: number, artifacts: BuildInterfaces.BuildArtifact[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(artifacts);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues)
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
    * @param {string} project
    * @param {number} definitionId
    * @param {string} branchName
    */
    public getBadge(
        project: string,
        definitionId: number,
        branchName?: string
        ): Promise<string> {
    
        let deferred = Q.defer<string>();

        let onResult = (err: any, statusCode: number, badge: string) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(badge);
            }
        };

        let routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        let queryValues: any = {
            branchName: branchName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "de6a4df8-22cd-44ee-af2d-39f6aa7a4261", routeValues, queryValues)
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
        ): Promise<BuildInterfaces.BuildBadge> {
    
        let deferred = Q.defer<BuildInterfaces.BuildBadge>();

        let onResult = (err: any, statusCode: number, buildbadge: BuildInterfaces.BuildBadge) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(buildbadge);
            }
        };

        let routeValues: any = {
            project: project,
            repoType: repoType
        };

        let queryValues: any = {
            repoId: repoId,
            branchName: branchName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "build", "21b3b9ce-fad5-4567-9ad0-80679794e003", routeValues, queryValues)
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
        ): Promise<string> {
    
        let deferred = Q.defer<string>();

        let onResult = (err: any, statusCode: number, buildbadge: string) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(buildbadge);
            }
        };

        let routeValues: any = {
            project: project,
            repoType: repoType
        };

        let queryValues: any = {
            repoId: repoId,
            branchName: branchName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "build", "21b3b9ce-fad5-4567-9ad0-80679794e003", routeValues, queryValues)
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
    * Deletes a build
    * 
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    */
    public deleteBuild(
        buildId: number,
        project?: string
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
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues)
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
        ): Promise<BuildInterfaces.Build> {
    
        let deferred = Q.defer<BuildInterfaces.Build>();

        let onResult = (err: any, statusCode: number, build: BuildInterfaces.Build) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(build);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        let queryValues: any = {
            propertyFilters: propertyFilters,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Build, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
    * @param {number} top - The maximum number of builds to retrieve
    * @param {string} continuationToken
    * @param {number} maxBuildsPerDefinition
    * @param {BuildInterfaces.QueryDeletedOption} deletedFilter
    * @param {BuildInterfaces.BuildQueryOrder} queryOrder
    * @param {string} branchName
    * @param {number[]} buildIds
    * @param {string} repositoryId
    * @param {string} repositoryType
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
        top?: number,
        continuationToken?: string,
        maxBuildsPerDefinition?: number,
        deletedFilter?: BuildInterfaces.QueryDeletedOption,
        queryOrder?: BuildInterfaces.BuildQueryOrder,
        branchName?: string,
        buildIds?: number[],
        repositoryId?: string,
        repositoryType?: string
        ): Promise<BuildInterfaces.Build[]> {
    
        let deferred = Q.defer<BuildInterfaces.Build[]>();

        let onResult = (err: any, statusCode: number, builds: BuildInterfaces.Build[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(builds);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
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
            '$top': top,
            continuationToken: continuationToken,
            maxBuildsPerDefinition: maxBuildsPerDefinition,
            deletedFilter: deletedFilter,
            queryOrder: queryOrder,
            branchName: branchName,
            buildIds: buildIds && buildIds.join(","),
            repositoryId: repositoryId,
            repositoryType: repositoryType,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Build, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<BuildInterfaces.Build> {
    
        let deferred = Q.defer<BuildInterfaces.Build>();

        let onResult = (err: any, statusCode: number, build: BuildInterfaces.Build) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(build);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            ignoreWarnings: ignoreWarnings,
            checkInTicket: checkInTicket,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.Build, responseTypeMetadata: BuildInterfaces.TypeInfo.Build, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, build, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<BuildInterfaces.Build> {
    
        let deferred = Q.defer<BuildInterfaces.Build>();

        let onResult = (err: any, statusCode: number, build: BuildInterfaces.Build) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(build);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.Build, responseTypeMetadata: BuildInterfaces.TypeInfo.Build, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, build, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Update a batch of builds
    * 
    * @param {BuildInterfaces.Build[]} builds
    * @param {string} project - Project ID or project name
    */
    public updateBuilds(
        builds: BuildInterfaces.Build[],
        project?: string
        ): Promise<BuildInterfaces.Build[]> {
    
        let deferred = Q.defer<BuildInterfaces.Build[]>();

        let onResult = (err: any, statusCode: number, builds: BuildInterfaces.Build[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(builds);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.Build, responseTypeMetadata: BuildInterfaces.TypeInfo.Build, responseIsCollection: true };
                
                this.restClient.update(url, apiVersion, builds, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<BuildInterfaces.Change[]> {
    
        let deferred = Q.defer<BuildInterfaces.Change[]>();

        let onResult = (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => {
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
            buildId: buildId
        };

        let queryValues: any = {
            continuationToken: continuationToken,
            '$top': top,
            includeSourceChange: includeSourceChange,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "54572c7b-bbd3-45d4-80dc-28be08941620", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Change, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<BuildInterfaces.Change[]> {
    
        let deferred = Q.defer<BuildInterfaces.Change[]>();

        let onResult = (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(changes);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            fromBuildId: fromBuildId,
            toBuildId: toBuildId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "f10f0ea5-18a1-43ec-a8fb-2042c7be9b43", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Change, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Gets a controller
    * 
    * @param {number} controllerId
    */
    public getBuildController(
        controllerId: number
        ): Promise<BuildInterfaces.BuildController> {
    
        let deferred = Q.defer<BuildInterfaces.BuildController>();

        let onResult = (err: any, statusCode: number, Controller: BuildInterfaces.BuildController) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Controller);
            }
        };

        let routeValues: any = {
            controllerId: controllerId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "fcac1932-2ee1-437f-9b6f-7f696be858f6", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildController, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Gets controller, optionally filtered by name
    * 
    * @param {string} name
    */
    public getBuildControllers(
        name?: string
        ): Promise<BuildInterfaces.BuildController[]> {
    
        let deferred = Q.defer<BuildInterfaces.BuildController[]>();

        let onResult = (err: any, statusCode: number, Controllers: BuildInterfaces.BuildController[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Controllers);
            }
        };

        let routeValues: any = {
        };

        let queryValues: any = {
            name: name,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "fcac1932-2ee1-437f-9b6f-7f696be858f6", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildController, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<BuildInterfaces.BuildDefinition> {
    
        let deferred = Q.defer<BuildInterfaces.BuildDefinition>();

        let onResult = (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => {
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

        let queryValues: any = {
            definitionToCloneId: definitionToCloneId,
            definitionToCloneRevision: definitionToCloneRevision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinition, responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinition, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, definition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues)
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
        ): Promise<BuildInterfaces.BuildDefinition> {
    
        let deferred = Q.defer<BuildInterfaces.BuildDefinition>();

        let onResult = (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => {
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
            propertyFilters: propertyFilters && propertyFilters.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinition, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Gets definitions, optionally filtered by name
    * 
    * @param {string} project - Project ID or project name
    * @param {string} name
    * @param {string} repositoryId
    * @param {string} repositoryType
    * @param {BuildInterfaces.DefinitionQueryOrder} queryOrder
    * @param {number} top
    * @param {string} continuationToken
    * @param {Date} minMetricsTime
    * @param {number[]} definitionIds
    * @param {string} path
    * @param {Date} builtAfter
    * @param {Date} notBuiltAfter
    */
    public getDefinitions(
        project?: string,
        name?: string,
        repositoryId?: string,
        repositoryType?: string,
        queryOrder?: BuildInterfaces.DefinitionQueryOrder,
        top?: number,
        continuationToken?: string,
        minMetricsTime?: Date,
        definitionIds?: number[],
        path?: string,
        builtAfter?: Date,
        notBuiltAfter?: Date
        ): Promise<BuildInterfaces.BuildDefinitionReference[]> {
    
        let deferred = Q.defer<BuildInterfaces.BuildDefinitionReference[]>();

        let onResult = (err: any, statusCode: number, definitions: BuildInterfaces.BuildDefinitionReference[]) => {
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
            name: name,
            repositoryId: repositoryId,
            repositoryType: repositoryType,
            queryOrder: queryOrder,
            '$top': top,
            continuationToken: continuationToken,
            minMetricsTime: minMetricsTime,
            definitionIds: definitionIds && definitionIds.join(","),
            path: path,
            builtAfter: builtAfter,
            notBuiltAfter: notBuiltAfter,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionReference, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<BuildInterfaces.BuildDefinition> {
    
        let deferred = Q.defer<BuildInterfaces.BuildDefinition>();

        let onResult = (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => {
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
            secretsSourceDefinitionId: secretsSourceDefinitionId,
            secretsSourceDefinitionRevision: secretsSourceDefinitionRevision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinition, responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinition, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, definition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Creates a new folder
    * 
    * @param {BuildInterfaces.Folder} folder
    * @param {string} project - Project ID or project name
    * @param {string} path
    */
    public createFolder(
        folder: BuildInterfaces.Folder,
        project: string,
        path: string
        ): Promise<BuildInterfaces.Folder> {
    
        let deferred = Q.defer<BuildInterfaces.Folder>();

        let onResult = (err: any, statusCode: number, folder: BuildInterfaces.Folder) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(folder);
            }
        };

        let routeValues: any = {
            project: project,
            path: path
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "a906531b-d2da-4f55-bda7-f3e676cc50d9", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.Folder, responseTypeMetadata: BuildInterfaces.TypeInfo.Folder, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, folder, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Deletes a definition folder for given folder name and path and all it's existing definitions and it's corresponding builds
    * 
    * @param {string} project - Project ID or project name
    * @param {string} path
    */
    public deleteFolder(
        project: string,
        path: string
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
            path: path
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "a906531b-d2da-4f55-bda7-f3e676cc50d9", routeValues)
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
    * Gets folders
    * 
    * @param {string} project - Project ID or project name
    * @param {string} path
    * @param {BuildInterfaces.FolderQueryOrder} queryOrder
    */
    public getFolders(
        project: string,
        path?: string,
        queryOrder?: BuildInterfaces.FolderQueryOrder
        ): Promise<BuildInterfaces.Folder[]> {
    
        let deferred = Q.defer<BuildInterfaces.Folder[]>();

        let onResult = (err: any, statusCode: number, folders: BuildInterfaces.Folder[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(folders);
            }
        };

        let routeValues: any = {
            project: project,
            path: path
        };

        let queryValues: any = {
            queryOrder: queryOrder,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "build", "a906531b-d2da-4f55-bda7-f3e676cc50d9", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Folder, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Updates an existing folder at given  existing path
    * 
    * @param {BuildInterfaces.Folder} folder
    * @param {string} project - Project ID or project name
    * @param {string} path
    */
    public updateFolder(
        folder: BuildInterfaces.Folder,
        project: string,
        path: string
        ): Promise<BuildInterfaces.Folder> {
    
        let deferred = Q.defer<BuildInterfaces.Folder>();

        let onResult = (err: any, statusCode: number, folder: BuildInterfaces.Folder) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(folder);
            }
        };

        let routeValues: any = {
            project: project,
            path: path
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "a906531b-d2da-4f55-bda7-f3e676cc50d9", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.Folder, responseTypeMetadata: BuildInterfaces.TypeInfo.Folder, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, folder, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
            buildId: buildId,
            logId: logId
        };

        let queryValues: any = {
            startLine: startLine,
            endLine: endLine,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues, queryValues)
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
    * Gets a log
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} logId
    * @param {number} startLine
    * @param {number} endLine
    */
    public getBuildLogLines(
        project: string,
        buildId: number,
        logId: number,
        startLine?: number,
        endLine?: number
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, logs: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(logs);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId,
            logId: logId
        };

        let queryValues: any = {
            startLine: startLine,
            endLine: endLine,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues, queryValues)
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
    * Gets logs for a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    public getBuildLogs(
        project: string,
        buildId: number
        ): Promise<BuildInterfaces.BuildLog[]> {
    
        let deferred = Q.defer<BuildInterfaces.BuildLog[]>();

        let onResult = (err: any, statusCode: number, logs: BuildInterfaces.BuildLog[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(logs);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildLog, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues)
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
    * Gets metrics of a definition
    * 
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    * @param {Date} minMetricsTime
    */
    public getDefinitionMetrics(
        project: string,
        definitionId: number,
        minMetricsTime?: Date
        ): Promise<BuildInterfaces.BuildMetric[]> {
    
        let deferred = Q.defer<BuildInterfaces.BuildMetric[]>();

        let onResult = (err: any, statusCode: number, metrics: BuildInterfaces.BuildMetric[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(metrics);
            }
        };

        let routeValues: any = {
            project: project,
            definitionId: definitionId
        };

        let queryValues: any = {
            minMetricsTime: minMetricsTime,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "build", "d973b939-0ce0-4fec-91d8-da3940fa1827", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildMetric, responseIsCollection: true };
                
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
    public getBuildOptionDefinitions(
        project?: string
        ): Promise<BuildInterfaces.BuildOptionDefinition[]> {
    
        let deferred = Q.defer<BuildInterfaces.BuildOptionDefinition[]>();

        let onResult = (err: any, statusCode: number, options: BuildInterfaces.BuildOptionDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(options);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "591cb5a4-2d46-4f3a-a697-5cd42b6bd332", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildOptionDefinition, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<BuildInterfaces.BuildReportMetadata> {
    
        let deferred = Q.defer<BuildInterfaces.BuildReportMetadata>();

        let onResult = (err: any, statusCode: number, report: BuildInterfaces.BuildReportMetadata) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(report);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        let queryValues: any = {
            type: type,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "45bcaa88-67e1-4042-a035-56d3b4a7d44c", routeValues, queryValues)
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, report: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(report);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        let queryValues: any = {
            type: type,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "45bcaa88-67e1-4042-a035-56d3b4a7d44c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/html", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    */
    public getResourceUsage(
        ): Promise<BuildInterfaces.BuildResourceUsage> {
    
        let deferred = Q.defer<BuildInterfaces.BuildResourceUsage>();

        let onResult = (err: any, statusCode: number, ResourceUsage: BuildInterfaces.BuildResourceUsage) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResourceUsage);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "3813d06c-9e36-4ea1-aac3-61a485d60e3d", routeValues)
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
    * Gets revisions of a definition
    * 
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    */
    public getDefinitionRevisions(
        project: string,
        definitionId: number
        ): Promise<BuildInterfaces.BuildDefinitionRevision[]> {
    
        let deferred = Q.defer<BuildInterfaces.BuildDefinitionRevision[]>();

        let onResult = (err: any, statusCode: number, revisions: BuildInterfaces.BuildDefinitionRevision[]) => {
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

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "7c116775-52e5-453e-8c5d-914d9762d8c4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionRevision, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    */
    public getBuildSettings(
        ): Promise<BuildInterfaces.BuildSettings> {
    
        let deferred = Q.defer<BuildInterfaces.BuildSettings>();

        let onResult = (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(setting);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "aa8c1c9c-ef8b-474a-b8c4-785c7b191d0d", routeValues)
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
    * Updates the build settings
    * 
    * @param {BuildInterfaces.BuildSettings} settings
    */
    public updateBuildSettings(
        settings: BuildInterfaces.BuildSettings
        ): Promise<BuildInterfaces.BuildSettings> {
    
        let deferred = Q.defer<BuildInterfaces.BuildSettings>();

        let onResult = (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(setting);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "aa8c1c9c-ef8b-474a-b8c4-785c7b191d0d", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, settings, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId,
            tag: tag
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.replace(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, tags, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId,
            tag: tag
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues)
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
    */
    public getTags(
        project: string
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, tags: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tags);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "build", "d84ac5c6-edc7-43d5-adc9-1b34be5dea09", routeValues)
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
    * Deletes a definition template
    * 
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    public deleteTemplate(
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
            project: project,
            templateId: templateId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues)
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
    * Gets definition template filtered by id
    * 
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    public getTemplate(
        project: string,
        templateId: string
        ): Promise<BuildInterfaces.BuildDefinitionTemplate> {
    
        let deferred = Q.defer<BuildInterfaces.BuildDefinitionTemplate>();

        let onResult = (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(template);
            }
        };

        let routeValues: any = {
            project: project,
            templateId: templateId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionTemplate, responseIsCollection: false };
                
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
    public getTemplates(
        project: string
        ): Promise<BuildInterfaces.BuildDefinitionTemplate[]> {
    
        let deferred = Q.defer<BuildInterfaces.BuildDefinitionTemplate[]>();

        let onResult = (err: any, statusCode: number, templates: BuildInterfaces.BuildDefinitionTemplate[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(templates);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionTemplate, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<BuildInterfaces.BuildDefinitionTemplate> {
    
        let deferred = Q.defer<BuildInterfaces.BuildDefinitionTemplate>();

        let onResult = (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(template);
            }
        };

        let routeValues: any = {
            project: project,
            templateId: templateId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionTemplate, responseTypeMetadata: BuildInterfaces.TypeInfo.BuildDefinitionTemplate, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, template, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Gets details for a build
    * 
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} timelineId
    * @param {number} changeId
    * @param {string} planId
    */
    public getBuildTimeline(
        project: string,
        buildId: number,
        timelineId?: string,
        changeId?: number,
        planId?: string
        ): Promise<BuildInterfaces.Timeline> {
    
        let deferred = Q.defer<BuildInterfaces.Timeline>();

        let onResult = (err: any, statusCode: number, Timeline: BuildInterfaces.Timeline) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Timeline);
            }
        };

        let routeValues: any = {
            project: project,
            buildId: buildId,
            timelineId: timelineId
        };

        let queryValues: any = {
            changeId: changeId,
            planId: planId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "8baac422-4c6e-4de5-8532-db96d92acffa", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: BuildInterfaces.TypeInfo.Timeline, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<VSSInterfaces.ResourceRef[]> {
    
        let deferred = Q.defer<VSSInterfaces.ResourceRef[]>();

        let onResult = (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => {
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
            buildId: buildId
        };

        let queryValues: any = {
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "5a21f5d2-5642-47e4-a0bd-1356e6731bee", routeValues, queryValues)
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
        ): Promise<VSSInterfaces.ResourceRef[]> {
    
        let deferred = Q.defer<VSSInterfaces.ResourceRef[]>();

        let onResult = (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => {
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
            buildId: buildId
        };

        let queryValues: any = {
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "5a21f5d2-5642-47e4-a0bd-1356e6731bee", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, commitIds, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<VSSInterfaces.ResourceRef[]> {
    
        let deferred = Q.defer<VSSInterfaces.ResourceRef[]>();

        let onResult = (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workitems);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            fromBuildId: fromBuildId,
            toBuildId: toBuildId,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "build", "52ba8915-5518-42e3-a4bb-b0182d159e2d", routeValues, queryValues)
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
