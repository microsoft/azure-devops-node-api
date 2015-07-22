/// <reference path="../../src/api/definitions/node.d.ts" />
/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import BuildInterfaces = require("./interfaces/BuildInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
export interface IBuildApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    createArtifact(artifact: BuildInterfaces.BuildArtifact, buildId: number, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void): void;
    getArtifact(buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void): void;
    getArtifactContentZip(buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getArtifacts(buildId: number, project: string, onResult: (err: any, statusCode: number, artifacts: BuildInterfaces.BuildArtifact[]) => void): void;
    getBadge(project: string, definitionId: number, branchName: string, onResult: (err: any, statusCode: number, badge: string) => void): void;
    deleteBuild(buildId: number, project: string, onResult: (err: any, statusCode: number) => void): void;
    getBuild(buildId: number, project: string, propertyFilters: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void): void;
    getBuilds(project: string, definitions: number[], queues: number[], buildNumber: string, minFinishTime: Date, maxFinishTime: Date, requestedFor: string, reasonFilter: BuildInterfaces.BuildReason, statusFilter: BuildInterfaces.BuildStatus, resultFilter: BuildInterfaces.BuildResult, tagFilters: string[], properties: string[], type: BuildInterfaces.DefinitionType, top: number, continuationToken: string, maxBuildsPerDefinition: number, deletedFilter: BuildInterfaces.QueryDeletedOption, queryOrder: BuildInterfaces.BuildQueryOrder, onResult: (err: any, statusCode: number, builds: BuildInterfaces.Build[]) => void): void;
    queueBuild(build: BuildInterfaces.Build, project: string, ignoreWarnings: boolean, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void): void;
    updateBuild(build: BuildInterfaces.Build, buildId: number, project: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void): void;
    getBuildCommits(project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => void): void;
    getBuildController(controllerId: number, onResult: (err: any, statusCode: number, Controller: BuildInterfaces.BuildController) => void): void;
    getBuildControllers(name: string, onResult: (err: any, statusCode: number, Controllers: BuildInterfaces.BuildController[]) => void): void;
    createDefinition(definition: BuildInterfaces.BuildDefinition, project: string, definitionToCloneId: number, definitionToCloneRevision: number, onResult: (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => void): void;
    deleteDefinition(definitionId: number, project: string, onResult: (err: any, statusCode: number) => void): void;
    getDefinition(definitionId: number, project: string, revision: number, propertyFilters: string[], onResult: (err: any, statusCode: number, definition: BuildInterfaces.DefinitionReference) => void): void;
    getDefinitions(project: string, name: string, type: BuildInterfaces.DefinitionType, onResult: (err: any, statusCode: number, definitions: BuildInterfaces.DefinitionReference[]) => void): void;
    updateDefinition(definition: BuildInterfaces.BuildDefinition, definitionId: number, project: string, secretsSourceDefinitionId: number, secretsSourceDefinitionRevision: number, onResult: (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => void): void;
    getBuildDeployments(project: string, buildId: number, onResult: (err: any, statusCode: number, deployments: BuildInterfaces.Deployment[]) => void): void;
    getBuildLog(project: string, buildId: number, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBuildLogs(project: string, buildId: number, onResult: (err: any, statusCode: number, logs: BuildInterfaces.BuildLog[]) => void): void;
    getBuildLogsZip(project: string, buildId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBuildOptionDefinitions(onResult: (err: any, statusCode: number, options: BuildInterfaces.BuildOptionDefinition[]) => void): void;
    createQueue(queue: BuildInterfaces.AgentPoolQueue, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void): void;
    deleteQueue(id: number, onResult: (err: any, statusCode: number) => void): void;
    getAgentPoolQueue(controllerId: number, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void): void;
    getQueues(name: string, onResult: (err: any, statusCode: number, queues: BuildInterfaces.AgentPoolQueue[]) => void): void;
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
}
export interface IQBuildApi {
    connect(): Q.Promise<void>;
    createArtifact(artifact: BuildInterfaces.BuildArtifact, buildId: number, project?: string): Q.Promise<BuildInterfaces.BuildArtifact>;
    getArtifact(buildId: number, artifactName: string, project?: string): Q.Promise<BuildInterfaces.BuildArtifact>;
    getArtifacts(buildId: number, project?: string): Q.Promise<BuildInterfaces.BuildArtifact[]>;
    getBadge(project: string, definitionId: number, branchName?: string): Q.Promise<string>;
    getBuild(buildId: number, project?: string, propertyFilters?: string): Q.Promise<BuildInterfaces.Build>;
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: BuildInterfaces.BuildReason, statusFilter?: BuildInterfaces.BuildStatus, resultFilter?: BuildInterfaces.BuildResult, tagFilters?: string[], properties?: string[], type?: BuildInterfaces.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: BuildInterfaces.QueryDeletedOption, queryOrder?: BuildInterfaces.BuildQueryOrder): Q.Promise<BuildInterfaces.Build[]>;
    queueBuild(build: BuildInterfaces.Build, project?: string, ignoreWarnings?: boolean): Q.Promise<BuildInterfaces.Build>;
    updateBuild(build: BuildInterfaces.Build, buildId: number, project?: string): Q.Promise<BuildInterfaces.Build>;
    getBuildCommits(project: string, buildId: number, top?: number): Q.Promise<BuildInterfaces.Change[]>;
    getBuildController(controllerId: number): Q.Promise<BuildInterfaces.BuildController>;
    getBuildControllers(name?: string): Q.Promise<BuildInterfaces.BuildController[]>;
    createDefinition(definition: BuildInterfaces.BuildDefinition, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): Q.Promise<BuildInterfaces.BuildDefinition>;
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[]): Q.Promise<BuildInterfaces.DefinitionReference>;
    getDefinitions(project?: string, name?: string, type?: BuildInterfaces.DefinitionType): Q.Promise<BuildInterfaces.DefinitionReference[]>;
    updateDefinition(definition: BuildInterfaces.BuildDefinition, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): Q.Promise<BuildInterfaces.BuildDefinition>;
    getBuildDeployments(project: string, buildId: number): Q.Promise<BuildInterfaces.Deployment[]>;
    getBuildLogs(project: string, buildId: number): Q.Promise<BuildInterfaces.BuildLog[]>;
    getBuildOptionDefinitions(): Q.Promise<BuildInterfaces.BuildOptionDefinition[]>;
    createQueue(queue: BuildInterfaces.AgentPoolQueue): Q.Promise<BuildInterfaces.AgentPoolQueue>;
    getAgentPoolQueue(controllerId: number): Q.Promise<BuildInterfaces.AgentPoolQueue>;
    getQueues(name?: string): Q.Promise<BuildInterfaces.AgentPoolQueue[]>;
    getDefinitionRevisions(project: string, definitionId: number): Q.Promise<BuildInterfaces.BuildDefinitionRevision[]>;
    getBuildSettings(): Q.Promise<BuildInterfaces.BuildSettings>;
    updateBuildSettings(settings: BuildInterfaces.BuildSettings): Q.Promise<BuildInterfaces.BuildSettings>;
    addBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>;
    addBuildTags(tags: string[], project: string, buildId: number): Q.Promise<string[]>;
    deleteBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>;
    getBuildTags(project: string, buildId: number): Q.Promise<string[]>;
    getTags(project: string): Q.Promise<string[]>;
    getTemplate(project: string, templateId: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>;
    getTemplates(project: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate[]>;
    saveTemplate(template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>;
    getBuildTimeline(project: string, buildId: number, timelineId?: string, changeId?: number): Q.Promise<BuildInterfaces.Timeline>;
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number): Q.Promise<VSSInterfaces.ResourceRef[]>;
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number): Q.Promise<VSSInterfaces.ResourceRef[]>;
}
export declare class BuildApi implements IBuildApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    setUserAgent(userAgent: string): void;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    /**
     * Associates an artifact with a build
     *
     * @param {BuildInterfaces.BuildArtifact} artifact
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.BuildArtifact
     */
    createArtifact(artifact: BuildInterfaces.BuildArtifact, buildId: number, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void): void;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.BuildArtifact
     */
    getArtifact(buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, artifact: BuildInterfaces.BuildArtifact) => void): void;
    /**
     * Gets a specific artifact for a build
     *
     * @param {number} buildId
     * @param {string} artifactName
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting ArrayBuffer
     */
    getArtifactContentZip(buildId: number, artifactName: string, project: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Gets all artifacts for a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.BuildArtifact[]
     */
    getArtifacts(buildId: number, project: string, onResult: (err: any, statusCode: number, artifacts: BuildInterfaces.BuildArtifact[]) => void): void;
    /**
     * @param {string} project
     * @param {number} definitionId
     * @param {string} branchName
     * @param onResult callback function with the resulting string
     */
    getBadge(project: string, definitionId: number, branchName: string, onResult: (err: any, statusCode: number, badge: string) => void): void;
    /**
     * Deletes a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param onResult callback function
     */
    deleteBuild(buildId: number, project: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
     * @param onResult callback function with the resulting BuildInterfaces.Build
     */
    getBuild(buildId: number, project: string, propertyFilters: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void): void;
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
     * @param onResult callback function with the resulting BuildInterfaces.Build[]
     */
    getBuilds(project: string, definitions: number[], queues: number[], buildNumber: string, minFinishTime: Date, maxFinishTime: Date, requestedFor: string, reasonFilter: BuildInterfaces.BuildReason, statusFilter: BuildInterfaces.BuildStatus, resultFilter: BuildInterfaces.BuildResult, tagFilters: string[], properties: string[], type: BuildInterfaces.DefinitionType, top: number, continuationToken: string, maxBuildsPerDefinition: number, deletedFilter: BuildInterfaces.QueryDeletedOption, queryOrder: BuildInterfaces.BuildQueryOrder, onResult: (err: any, statusCode: number, builds: BuildInterfaces.Build[]) => void): void;
    /**
     * Queues a build
     *
     * @param {BuildInterfaces.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param onResult callback function with the resulting BuildInterfaces.Build
     */
    queueBuild(build: BuildInterfaces.Build, project: string, ignoreWarnings: boolean, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void): void;
    /**
     * Updates a build
     *
     * @param {BuildInterfaces.Build} build
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.Build
     */
    updateBuild(build: BuildInterfaces.Build, buildId: number, project: string, onResult: (err: any, statusCode: number, build: BuildInterfaces.Build) => void): void;
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of changes to return
     * @param onResult callback function with the resulting BuildInterfaces.Change[]
     */
    getBuildCommits(project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, changes: BuildInterfaces.Change[]) => void): void;
    /**
     * Gets a controller
     *
     * @param {number} controllerId
     * @param onResult callback function with the resulting BuildInterfaces.BuildController
     */
    getBuildController(controllerId: number, onResult: (err: any, statusCode: number, Controller: BuildInterfaces.BuildController) => void): void;
    /**
     * Gets controller, optionally filtered by name
     *
     * @param {string} name
     * @param onResult callback function with the resulting BuildInterfaces.BuildController[]
     */
    getBuildControllers(name: string, onResult: (err: any, statusCode: number, Controllers: BuildInterfaces.BuildController[]) => void): void;
    /**
     * Creates a new definition
     *
     * @param {BuildInterfaces.BuildDefinition} definition
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinition
     */
    createDefinition(definition: BuildInterfaces.BuildDefinition, project: string, definitionToCloneId: number, definitionToCloneRevision: number, onResult: (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => void): void;
    /**
     * Deletes a definition and all associated builds
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param onResult callback function
     */
    deleteDefinition(definitionId: number, project: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * Gets a definition, optionally at a specific revision
     *
     * @param {number} definitionId
     * @param {string} project - Project ID or project name
     * @param {number} revision
     * @param {string[]} propertyFilters
     * @param onResult callback function with the resulting BuildInterfaces.DefinitionReference
     */
    getDefinition(definitionId: number, project: string, revision: number, propertyFilters: string[], onResult: (err: any, statusCode: number, definition: BuildInterfaces.DefinitionReference) => void): void;
    /**
     * Gets definitions, optionally filtered by name
     *
     * @param {string} project - Project ID or project name
     * @param {string} name
     * @param {BuildInterfaces.DefinitionType} type
     * @param onResult callback function with the resulting BuildInterfaces.DefinitionReference[]
     */
    getDefinitions(project: string, name: string, type: BuildInterfaces.DefinitionType, onResult: (err: any, statusCode: number, definitions: BuildInterfaces.DefinitionReference[]) => void): void;
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
    updateDefinition(definition: BuildInterfaces.BuildDefinition, definitionId: number, project: string, secretsSourceDefinitionId: number, secretsSourceDefinitionRevision: number, onResult: (err: any, statusCode: number, definition: BuildInterfaces.BuildDefinition) => void): void;
    /**
     * Gets the deployment information associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting BuildInterfaces.Deployment[]
     */
    getBuildDeployments(project: string, buildId: number, onResult: (err: any, statusCode: number, deployments: BuildInterfaces.Deployment[]) => void): void;
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
    getBuildLog(project: string, buildId: number, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting BuildInterfaces.BuildLog[]
     */
    getBuildLogs(project: string, buildId: number, onResult: (err: any, statusCode: number, logs: BuildInterfaces.BuildLog[]) => void): void;
    /**
     * Gets logs for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting ArrayBuffer
     */
    getBuildLogsZip(project: string, buildId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * @param onResult callback function with the resulting BuildInterfaces.BuildOptionDefinition[]
     */
    getBuildOptionDefinitions(onResult: (err: any, statusCode: number, options: BuildInterfaces.BuildOptionDefinition[]) => void): void;
    /**
     * Creates a build queue
     *
     * @param {BuildInterfaces.AgentPoolQueue} queue
     * @param onResult callback function with the resulting BuildInterfaces.AgentPoolQueue
     */
    createQueue(queue: BuildInterfaces.AgentPoolQueue, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void): void;
    /**
     * Deletes a build queue
     *
     * @param {number} id
     * @param onResult callback function
     */
    deleteQueue(id: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * Gets a queue
     *
     * @param {number} controllerId
     * @param onResult callback function with the resulting BuildInterfaces.AgentPoolQueue
     */
    getAgentPoolQueue(controllerId: number, onResult: (err: any, statusCode: number, queue: BuildInterfaces.AgentPoolQueue) => void): void;
    /**
     * Gets queues, optionally filtered by name
     *
     * @param {string} name
     * @param onResult callback function with the resulting BuildInterfaces.AgentPoolQueue[]
     */
    getQueues(name: string, onResult: (err: any, statusCode: number, queues: BuildInterfaces.AgentPoolQueue[]) => void): void;
    /**
     * Gets revisions of a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinitionRevision[]
     */
    getDefinitionRevisions(project: string, definitionId: number, onResult: (err: any, statusCode: number, revisions: BuildInterfaces.BuildDefinitionRevision[]) => void): void;
    /**
     * @param onResult callback function with the resulting BuildInterfaces.BuildSettings
     */
    getBuildSettings(onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void): void;
    /**
     * Updates the build settings
     *
     * @param {BuildInterfaces.BuildSettings} settings
     * @param onResult callback function with the resulting BuildInterfaces.BuildSettings
     */
    updateBuildSettings(settings: BuildInterfaces.BuildSettings, onResult: (err: any, statusCode: number, setting: BuildInterfaces.BuildSettings) => void): void;
    /**
     * Adds a tag to a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} tag
     * @param onResult callback function with the resulting string[]
     */
    addBuildTag(project: string, buildId: number, tag: string, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    /**
     * Adds tag to a build
     *
     * @param {string[]} tags
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting string[]
     */
    addBuildTags(tags: string[], project: string, buildId: number, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    /**
     * Deletes a tag from a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} tag
     * @param onResult callback function with the resulting string[]
     */
    deleteBuildTag(project: string, buildId: number, tag: string, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    /**
     * Gets the tags for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function with the resulting string[]
     */
    getBuildTags(project: string, buildId: number, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting string[]
     */
    getTags(project: string, onResult: (err: any, statusCode: number, tags: string[]) => void): void;
    /**
     * Deletes a definition template
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @param onResult callback function
     */
    deleteTemplate(project: string, templateId: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * Gets definition template filtered by id
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinitionTemplate
     */
    getTemplate(project: string, templateId: string, onResult: (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinitionTemplate[]
     */
    getTemplates(project: string, onResult: (err: any, statusCode: number, templates: BuildInterfaces.BuildDefinitionTemplate[]) => void): void;
    /**
     * Saves a definition template
     *
     * @param {BuildInterfaces.BuildDefinitionTemplate} template
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     * @param onResult callback function with the resulting BuildInterfaces.BuildDefinitionTemplate
     */
    saveTemplate(template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string, onResult: (err: any, statusCode: number, template: BuildInterfaces.BuildDefinitionTemplate) => void): void;
    /**
     * Gets details for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} timelineId
     * @param {number} changeId
     * @param onResult callback function with the resulting BuildInterfaces.Timeline
     */
    getBuildTimeline(project: string, buildId: number, timelineId: string, changeId: number, onResult: (err: any, statusCode: number, Timeline: BuildInterfaces.Timeline) => void): void;
    /**
     * Gets the work item ids associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return
     * @param onResult callback function with the resulting VSSInterfaces.ResourceRef[]
     */
    getBuildWorkItemsRefs(project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void): void;
    /**
     * Gets the work item ids associated with build commits
     *
     * @param {string[]} commitIds
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
     * @param onResult callback function with the resulting VSSInterfaces.ResourceRef[]
     */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top: number, onResult: (err: any, statusCode: number, workitems: VSSInterfaces.ResourceRef[]) => void): void;
}
export declare class QBuildApi implements IQBuildApi {
    BuildApi: IBuildApi;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    connect(): Q.Promise<any>;
    /**
    * Associates an artifact with a build
    *
    * @param {BuildInterfaces.BuildArtifact} artifact
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    */
    createArtifact(artifact: BuildInterfaces.BuildArtifact, buildId: number, project?: string): Q.Promise<BuildInterfaces.BuildArtifact>;
    /**
    * Gets a specific artifact for a build
    *
    * @param {number} buildId
    * @param {string} artifactName
    * @param {string} project - Project ID or project name
    */
    getArtifact(buildId: number, artifactName: string, project?: string): Q.Promise<BuildInterfaces.BuildArtifact>;
    /**
    * Gets all artifacts for a build
    *
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    */
    getArtifacts(buildId: number, project?: string): Q.Promise<BuildInterfaces.BuildArtifact[]>;
    /**
    * @param {string} project
    * @param {number} definitionId
    * @param {string} branchName
    */
    getBadge(project: string, definitionId: number, branchName?: string): Q.Promise<string>;
    /**
    * Gets a build
    *
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    * @param {string} propertyFilters - A comma-delimited list of properties to include in the results
    */
    getBuild(buildId: number, project?: string, propertyFilters?: string): Q.Promise<BuildInterfaces.Build>;
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
    */
    getBuilds(project?: string, definitions?: number[], queues?: number[], buildNumber?: string, minFinishTime?: Date, maxFinishTime?: Date, requestedFor?: string, reasonFilter?: BuildInterfaces.BuildReason, statusFilter?: BuildInterfaces.BuildStatus, resultFilter?: BuildInterfaces.BuildResult, tagFilters?: string[], properties?: string[], type?: BuildInterfaces.DefinitionType, top?: number, continuationToken?: string, maxBuildsPerDefinition?: number, deletedFilter?: BuildInterfaces.QueryDeletedOption, queryOrder?: BuildInterfaces.BuildQueryOrder): Q.Promise<BuildInterfaces.Build[]>;
    /**
    * Queues a build
    *
    * @param {BuildInterfaces.Build} build
    * @param {string} project - Project ID or project name
    * @param {boolean} ignoreWarnings
    */
    queueBuild(build: BuildInterfaces.Build, project?: string, ignoreWarnings?: boolean): Q.Promise<BuildInterfaces.Build>;
    /**
    * Updates a build
    *
    * @param {BuildInterfaces.Build} build
    * @param {number} buildId
    * @param {string} project - Project ID or project name
    */
    updateBuild(build: BuildInterfaces.Build, buildId: number, project?: string): Q.Promise<BuildInterfaces.Build>;
    /**
    * Gets the changes associated with a build
    *
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} top - The maximum number of changes to return
    */
    getBuildCommits(project: string, buildId: number, top?: number): Q.Promise<BuildInterfaces.Change[]>;
    /**
    * Gets a controller
    *
    * @param {number} controllerId
    */
    getBuildController(controllerId: number): Q.Promise<BuildInterfaces.BuildController>;
    /**
    * Gets controller, optionally filtered by name
    *
    * @param {string} name
    */
    getBuildControllers(name?: string): Q.Promise<BuildInterfaces.BuildController[]>;
    /**
    * Creates a new definition
    *
    * @param {BuildInterfaces.BuildDefinition} definition
    * @param {string} project - Project ID or project name
    * @param {number} definitionToCloneId
    * @param {number} definitionToCloneRevision
    */
    createDefinition(definition: BuildInterfaces.BuildDefinition, project?: string, definitionToCloneId?: number, definitionToCloneRevision?: number): Q.Promise<BuildInterfaces.BuildDefinition>;
    /**
    * Gets a definition, optionally at a specific revision
    *
    * @param {number} definitionId
    * @param {string} project - Project ID or project name
    * @param {number} revision
    * @param {string[]} propertyFilters
    */
    getDefinition(definitionId: number, project?: string, revision?: number, propertyFilters?: string[]): Q.Promise<BuildInterfaces.DefinitionReference>;
    /**
    * Gets definitions, optionally filtered by name
    *
    * @param {string} project - Project ID or project name
    * @param {string} name
    * @param {BuildInterfaces.DefinitionType} type
    */
    getDefinitions(project?: string, name?: string, type?: BuildInterfaces.DefinitionType): Q.Promise<BuildInterfaces.DefinitionReference[]>;
    /**
    * Updates an existing definition
    *
    * @param {BuildInterfaces.BuildDefinition} definition
    * @param {number} definitionId
    * @param {string} project - Project ID or project name
    * @param {number} secretsSourceDefinitionId
    * @param {number} secretsSourceDefinitionRevision
    */
    updateDefinition(definition: BuildInterfaces.BuildDefinition, definitionId: number, project?: string, secretsSourceDefinitionId?: number, secretsSourceDefinitionRevision?: number): Q.Promise<BuildInterfaces.BuildDefinition>;
    /**
    * Gets the deployment information associated with a build
    *
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    getBuildDeployments(project: string, buildId: number): Q.Promise<BuildInterfaces.Deployment[]>;
    /**
    * Gets logs for a build
    *
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    getBuildLogs(project: string, buildId: number): Q.Promise<BuildInterfaces.BuildLog[]>;
    /**
    */
    getBuildOptionDefinitions(): Q.Promise<BuildInterfaces.BuildOptionDefinition[]>;
    /**
    * Creates a build queue
    *
    * @param {BuildInterfaces.AgentPoolQueue} queue
    */
    createQueue(queue: BuildInterfaces.AgentPoolQueue): Q.Promise<BuildInterfaces.AgentPoolQueue>;
    /**
    * Gets a queue
    *
    * @param {number} controllerId
    */
    getAgentPoolQueue(controllerId: number): Q.Promise<BuildInterfaces.AgentPoolQueue>;
    /**
    * Gets queues, optionally filtered by name
    *
    * @param {string} name
    */
    getQueues(name?: string): Q.Promise<BuildInterfaces.AgentPoolQueue[]>;
    /**
    * Gets revisions of a definition
    *
    * @param {string} project - Project ID or project name
    * @param {number} definitionId
    */
    getDefinitionRevisions(project: string, definitionId: number): Q.Promise<BuildInterfaces.BuildDefinitionRevision[]>;
    /**
    */
    getBuildSettings(): Q.Promise<BuildInterfaces.BuildSettings>;
    /**
    * Updates the build settings
    *
    * @param {BuildInterfaces.BuildSettings} settings
    */
    updateBuildSettings(settings: BuildInterfaces.BuildSettings): Q.Promise<BuildInterfaces.BuildSettings>;
    /**
    * Adds a tag to a build
    *
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} tag
    */
    addBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>;
    /**
    * Adds tag to a build
    *
    * @param {string[]} tags
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    addBuildTags(tags: string[], project: string, buildId: number): Q.Promise<string[]>;
    /**
    * Deletes a tag from a build
    *
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} tag
    */
    deleteBuildTag(project: string, buildId: number, tag: string): Q.Promise<string[]>;
    /**
    * Gets the tags for a build
    *
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    getBuildTags(project: string, buildId: number): Q.Promise<string[]>;
    /**
    * @param {string} project - Project ID or project name
    */
    getTags(project: string): Q.Promise<string[]>;
    /**
    * Gets definition template filtered by id
    *
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    getTemplate(project: string, templateId: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>;
    /**
    * @param {string} project - Project ID or project name
    */
    getTemplates(project: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate[]>;
    /**
    * Saves a definition template
    *
    * @param {BuildInterfaces.BuildDefinitionTemplate} template
    * @param {string} project - Project ID or project name
    * @param {string} templateId
    */
    saveTemplate(template: BuildInterfaces.BuildDefinitionTemplate, project: string, templateId: string): Q.Promise<BuildInterfaces.BuildDefinitionTemplate>;
    /**
    * Gets details for a build
    *
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} timelineId
    * @param {number} changeId
    */
    getBuildTimeline(project: string, buildId: number, timelineId?: string, changeId?: number): Q.Promise<BuildInterfaces.Timeline>;
    /**
    * Gets the work item ids associated with a build
    *
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} top - The maximum number of workitems to return
    */
    getBuildWorkItemsRefs(project: string, buildId: number, top?: number): Q.Promise<VSSInterfaces.ResourceRef[]>;
    /**
    * Gets the work item ids associated with build commits
    *
    * @param {string[]} commitIds
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} top - The maximum number of workitems to return, also number of commits to consider if commitids are not sent
    */
    getBuildWorkItemsRefsFromCommits(commitIds: string[], project: string, buildId: number, top?: number): Q.Promise<VSSInterfaces.ResourceRef[]>;
}
