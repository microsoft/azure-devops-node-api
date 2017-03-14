/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

"use strict";

import DistributedTaskCommonInterfaces = require("../interfaces/DistributedTaskCommonInterfaces");
import TfsCoreInterfaces = require("../interfaces/CoreInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AgentPoolQueue {
    _links: any;
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * The pool used by this queue.
     */
    pool: TaskAgentPoolReference;
    /**
     * Full http link to the resource
     */
    url: string;
}

export enum AgentStatus {
    /**
     * Indicates that the build agent cannot be contacted.
     */
    Unavailable = 0,
    /**
     * Indicates that the build agent is currently available.
     */
    Available = 1,
    /**
     * Indicates that the build agent has taken itself offline.
     */
    Offline = 2,
}

export interface ArtifactResource {
    _links: any;
    /**
     * The type-specific resource data. For example, "#/10002/5/drop", "$/drops/5", "\\myshare\myfolder\mydrops\5"
     */
    data: string;
    /**
     * Link to the resource. This might include things like query parameters to download as a zip file
     */
    downloadUrl: string;
    /**
     * Properties of Artifact Resource
     */
    properties: { [key: string] : string; };
    /**
     * The type of the resource: File container, version control folder, UNC path, etc.
     */
    type: string;
    /**
     * Link to the resource
     */
    url: string;
}

export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
}

/**
 * Data representation of a build
 */
export interface Build {
    _links: any;
    /**
     * Build number/name of the build
     */
    buildNumber: string;
    /**
     * Build number revision
     */
    buildNumberRevision: number;
    /**
     * The build controller. This should only be set if the definition type is Xaml.
     */
    controller: BuildController;
    /**
     * The definition associated with the build
     */
    definition: DefinitionReference;
    /**
     * Indicates whether the build has been deleted.
     */
    deleted: boolean;
    /**
     * Process or person that deleted the build
     */
    deletedBy: VSSInterfaces.IdentityRef;
    /**
     * Date the build was deleted
     */
    deletedDate: Date;
    /**
     * Description of how the build was deleted
     */
    deletedReason: string;
    /**
     * Demands
     */
    demands: any[];
    /**
     * Time that the build was completed
     */
    finishTime: Date;
    /**
     * Id of the build
     */
    id: number;
    keepForever: boolean;
    /**
     * Process or person that last changed the build
     */
    lastChangedBy: VSSInterfaces.IdentityRef;
    /**
     * Date the build was last changed
     */
    lastChangedDate: Date;
    /**
     * Log location of the build
     */
    logs: BuildLogReference;
    /**
     * Orchestration plan for the build
     */
    orchestrationPlan: TaskOrchestrationPlanReference;
    /**
     * Parameters for the build
     */
    parameters: string;
    /**
     * Orchestration plans associated with the build (build, cleanup)
     */
    plans: TaskOrchestrationPlanReference[];
    /**
     * The build's priority
     */
    priority: QueuePriority;
    /**
     * The team project
     */
    project: TfsCoreInterfaces.TeamProjectReference;
    properties: any;
    /**
     * Quality of the xaml build (good, bad, etc.)
     */
    quality: string;
    /**
     * The queue. This should only be set if the definition type is Build.
     */
    queue: AgentPoolQueue;
    /**
     * Queue option of the build.
     */
    queueOptions: QueueOptions;
    /**
     * The current position of the build in the queue
     */
    queuePosition: number;
    /**
     * Time that the build was queued
     */
    queueTime: Date;
    /**
     * Reason that the build was created
     */
    reason: BuildReason;
    /**
     * The repository
     */
    repository: BuildRepository;
    /**
     * The identity that queued the build
     */
    requestedBy: VSSInterfaces.IdentityRef;
    /**
     * The identity on whose behalf the build was queued
     */
    requestedFor: VSSInterfaces.IdentityRef;
    /**
     * The build result
     */
    result: BuildResult;
    /**
     * Specifies if Build should be retained by Release
     */
    retainedByRelease: boolean;
    /**
     * Source branch
     */
    sourceBranch: string;
    /**
     * Source version
     */
    sourceVersion: string;
    /**
     * Time that the build was started
     */
    startTime: Date;
    /**
     * Status of the build
     */
    status: BuildStatus;
    tags: string[];
    /**
     * Sourceprovider-specific information about what triggered the build
     */
    triggerInfo: { [key: string] : string; };
    /**
     * Uri of the build
     */
    uri: string;
    /**
     * REST url of the build
     */
    url: string;
    validationResults: BuildRequestValidationResult[];
}

export interface BuildAgent {
    buildDirectory: string;
    controller: XamlBuildControllerReference;
    createdDate: Date;
    description: string;
    enabled: boolean;
    id: number;
    messageQueueUrl: string;
    name: string;
    reservedForBuild: string;
    server: XamlBuildServerReference;
    status: AgentStatus;
    statusMessage: string;
    updatedDate: Date;
    uri: string;
    url: string;
}

export interface BuildAgentReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export interface BuildArtifact {
    /**
     * The artifact id
     */
    id: number;
    /**
     * The name of the artifact
     */
    name: string;
    /**
     * The actual resource
     */
    resource: ArtifactResource;
}

export interface BuildArtifactAddedEvent extends BuildUpdatedEvent {
    artifact: BuildArtifact;
}

export enum BuildAuthorizationScope {
    /**
     * The identity used should have build service account permissions scoped to the project collection. This is useful when resources for a single build are spread across multiple projects.
     */
    ProjectCollection = 1,
    /**
     * The identity used should have build service account permissions scoped to the project in which the build definition resides. This is useful for isolation of build jobs to a particular team project to avoid any unintentional escalation of privilege attacks during a build.
     */
    Project = 2,
}

/**
 * Data representation of a build badge
 */
export interface BuildBadge {
    /**
     * Build id, if exists that this badge corresponds to
     */
    buildId: number;
    /**
     * Self Url that generates SVG
     */
    imageUrl: string;
}

export interface BuildChangesCalculatedEvent extends BuildUpdatedEvent {
    changes: Change[];
}

export interface BuildCompletedEvent extends BuildUpdatedEvent {
}

export interface BuildController extends XamlBuildControllerReference {
    _links: any;
    /**
     * The date the controller was created.
     */
    createdDate: Date;
    /**
     * The description of the controller.
     */
    description: string;
    /**
     * Indicates whether the controller is enabled.
     */
    enabled: boolean;
    /**
     * The status of the controller.
     */
    status: ControllerStatus;
    /**
     * The date the controller was last updated.
     */
    updatedDate: Date;
    /**
     * The controller's URI.
     */
    uri: string;
}

export interface BuildDefinition extends BuildDefinitionReference {
    /**
     * Indicates whether badges are enabled for this definition
     */
    badgeEnabled: boolean;
    build: BuildDefinitionStep[];
    /**
     * The build number format
     */
    buildNumberFormat: string;
    /**
     * The comment entered when saving the definition
     */
    comment: string;
    demands: any[];
    /**
     * The description
     */
    description: string;
    /**
     * The drop location for the definition
     */
    dropLocation: string;
    /**
     * Gets or sets the job authorization scope for builds which are queued against this definition
     */
    jobAuthorizationScope: BuildAuthorizationScope;
    /**
     * Gets or sets the job execution timeout in minutes for builds which are queued against this definition
     */
    jobTimeoutInMinutes: number;
    latestBuild: Build;
    latestCompletedBuild: Build;
    options: BuildOption[];
    /**
     * Process Parameters
     */
    processParameters: DistributedTaskCommonInterfaces.ProcessParameters;
    properties: any;
    /**
     * The repository
     */
    repository: BuildRepository;
    retentionRules: RetentionPolicy[];
    tags: string[];
    triggers: BuildTrigger[];
    variables: { [key: string] : BuildDefinitionVariable; };
}

export interface BuildDefinitionChangedEvent {
    changeType: AuditAction;
    definition: BuildDefinition;
}

export interface BuildDefinitionChangingEvent {
    changeType: AuditAction;
    newDefinition: BuildDefinition;
    originalDefinition: BuildDefinition;
}

export interface BuildDefinitionReference extends DefinitionReference {
    _links: any;
    /**
     * The author of the definition.
     */
    authoredBy: VSSInterfaces.IdentityRef;
    /**
     * If this is a draft definition, it might have a parent
     */
    draftOf: DefinitionReference;
    metrics: BuildMetric[];
    /**
     * The quality of the definition document (draft, etc.)
     */
    quality: DefinitionQuality;
    /**
     * The default queue which should be used for requests.
     */
    queue: AgentPoolQueue;
}

export interface BuildDefinitionRevision {
    changedBy: VSSInterfaces.IdentityRef;
    changedDate: Date;
    changeType: AuditAction;
    comment: string;
    definitionUrl: string;
    name: string;
    revision: number;
}

export interface BuildDefinitionSourceProvider {
    /**
     * Uri of the associated definition
     */
    definitionUri: string;
    /**
     * fields associated with this build definition
     */
    fields: { [key: string] : string; };
    /**
     * Id of this source provider
     */
    id: number;
    /**
     * The lst time this source provider was modified
     */
    lastModified: Date;
    /**
     * Name of the source provider
     */
    name: string;
    /**
     * Which trigger types are supported by this definition source provider
     */
    supportedTriggerTypes: DefinitionTriggerType;
}

export interface BuildDefinitionStep {
    alwaysRun: boolean;
    condition: string;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    inputs: { [key: string] : string; };
    task: TaskDefinitionReference;
    timeoutInMinutes: number;
}

export interface BuildDefinitionTemplate {
    canDelete: boolean;
    category: string;
    description: string;
    icons: { [key: string] : string; };
    iconTaskId: string;
    id: string;
    name: string;
    template: BuildDefinition;
}

export interface BuildDefinitionVariable {
    allowOverride: boolean;
    isSecret: boolean;
    value: string;
}

export interface BuildDeletedEvent extends RealtimeBuildEvent {
    build: Build;
}

export interface BuildDeployment {
    deployment: BuildSummary;
    sourceBuild: XamlBuildReference;
}

export interface BuildDestroyedEvent extends RealtimeBuildEvent {
    build: Build;
}

/**
 * Represents a build log.
 */
export interface BuildLog extends BuildLogReference {
    /**
     * The date the log was created.
     */
    createdOn: Date;
    /**
     * The date the log was last changed.
     */
    lastChangedOn: Date;
    /**
     * The number of lines in the log.
     */
    lineCount: number;
}

/**
 * Data representation of a build log reference
 */
export interface BuildLogReference {
    /**
     * The id of the log.
     */
    id: number;
    /**
     * The type of the log location.
     */
    type: string;
    /**
     * Full link to the log resource.
     */
    url: string;
}

export interface BuildMetric {
    /**
     * Scoped date of the metric
     */
    date: Date;
    /**
     * The int value of the metric
     */
    intValue: number;
    /**
     * The name of the metric
     */
    name: string;
    /**
     * The scope of the metric
     */
    scope: string;
}

export interface BuildOption {
    definition: BuildOptionDefinitionReference;
    enabled: boolean;
    inputs: { [key: string] : string; };
}

export interface BuildOptionDefinition extends BuildOptionDefinitionReference {
    description: string;
    groups: BuildOptionGroupDefinition[];
    inputs: BuildOptionInputDefinition[];
    name: string;
    ordinal: number;
}

export interface BuildOptionDefinitionReference {
    id: string;
}

export interface BuildOptionGroupDefinition {
    displayName: string;
    isExpanded: boolean;
    name: string;
}

export interface BuildOptionInputDefinition {
    defaultValue: string;
    groupName: string;
    help: { [key: string] : string; };
    label: string;
    name: string;
    options: { [key: string] : string; };
    required: boolean;
    type: BuildOptionInputType;
    visibleRule: string;
}

export enum BuildOptionInputType {
    String = 0,
    Boolean = 1,
    StringList = 2,
    Radio = 3,
    PickList = 4,
    MultiLine = 5,
}

export enum BuildPhaseStatus {
    /**
     * The state is not known.
     */
    Unknown = 0,
    /**
     * The build phase completed unsuccessfully.
     */
    Failed = 1,
    /**
     * The build phase completed successfully.
     */
    Succeeded = 2,
}

export interface BuildPollingSummaryEvent {
}

export interface BuildProcessTemplate {
    description: string;
    fileExists: boolean;
    id: number;
    parameters: string;
    serverPath: string;
    supportedReasons: BuildReason;
    teamProject: string;
    templateType: ProcessTemplateType;
    url: string;
    version: string;
}

export enum BuildQueryOrder {
    /**
     * Order by finish time ascending.
     */
    FinishTimeAscending = 2,
    /**
     * Order by finish time descending.
     */
    FinishTimeDescending = 3,
}

export interface BuildQueuedEvent extends BuildUpdatedEvent {
}

export enum BuildReason {
    /**
     * No reason. This value should not be used.
     */
    None = 0,
    /**
     * The build was started manually.
     */
    Manual = 1,
    /**
     * The build was started for the trigger TriggerType.ContinuousIntegration.
     */
    IndividualCI = 2,
    /**
     * The build was started for the trigger TriggerType.BatchedContinuousIntegration.
     */
    BatchedCI = 4,
    /**
     * The build was started for the trigger TriggerType.Schedule.
     */
    Schedule = 8,
    /**
     * The build was created by a user.
     */
    UserCreated = 32,
    /**
     * The build was started manually for private validation.
     */
    ValidateShelveset = 64,
    /**
     * The build was started for the trigger ContinuousIntegrationType.Gated.
     */
    CheckInShelveset = 128,
    /**
     * The build was started by a pull request. Added in resource version 3.
     */
    PullRequest = 256,
    /**
     * The build was triggered for retention policy purposes.
     */
    Triggered = 431,
    /**
     * All reasons.
     */
    All = 495,
}

export interface BuildReference {
    _links: any;
    /**
     * Build number/name of the build
     */
    buildNumber: string;
    /**
     * Time that the build was completed
     */
    finishTime: Date;
    /**
     * Id of the build
     */
    id: number;
    /**
     * Time that the build was queued
     */
    queueTime: Date;
    /**
     * The identity on whose behalf the build was queued
     */
    requestedFor: VSSInterfaces.IdentityRef;
    /**
     * The build result
     */
    result: BuildResult;
    /**
     * Time that the build was started
     */
    startTime: Date;
    /**
     * Status of the build
     */
    status: BuildStatus;
}

export interface BuildReportMetadata {
    buildId: number;
    content: string;
    type: string;
}

export interface BuildRepository {
    checkoutSubmodules: boolean;
    /**
     * Indicates whether to clean the target folder when getting code from the repository. This is a String so that it can reference variables.
     */
    clean: string;
    /**
     * Gets or sets the name of the default branch.
     */
    defaultBranch: string;
    id: string;
    /**
     * Gets or sets the friendly name of the repository.
     */
    name: string;
    properties: { [key: string] : string; };
    /**
     * Gets or sets the root folder.
     */
    rootFolder: string;
    /**
     * Gets or sets the type of the repository.
     */
    type: string;
    /**
     * Gets or sets the url of the repository.
     */
    url: string;
}

export interface BuildRequestValidationResult {
    message: string;
    result: ValidationResult;
}

export interface BuildResourceUsage {
    distributedTaskAgents: number;
    paidPrivateAgentSlots: number;
    totalUsage: number;
    xamlControllers: number;
}

export enum BuildResult {
    /**
     * No result
     */
    None = 0,
    /**
     * The build completed successfully.
     */
    Succeeded = 2,
    /**
     * The build completed compilation successfully but had other errors.
     */
    PartiallySucceeded = 4,
    /**
     * The build completed unsuccessfully.
     */
    Failed = 8,
    /**
     * The build was canceled before starting.
     */
    Canceled = 32,
}

export interface BuildServer {
    agents: BuildAgentReference[];
    controller: XamlBuildControllerReference;
    id: number;
    isVirtual: boolean;
    messageQueueUrl: string;
    name: string;
    requireClientCertificates: boolean;
    status: ServiceHostStatus;
    statusChangedDate: Date;
    uri: string;
    url: string;
    version: number;
}

export interface BuildSettings {
    daysToKeepDeletedBuildsBeforeDestroy: number;
    defaultRetentionPolicy: RetentionPolicy;
    maximumRetentionPolicy: RetentionPolicy;
}

export interface BuildStartedEvent extends BuildUpdatedEvent {
}

export enum BuildStatus {
    /**
     * No status.
     */
    None = 0,
    /**
     * The build is currently in progress.
     */
    InProgress = 1,
    /**
     * The build has completed.
     */
    Completed = 2,
    /**
     * The build is cancelling
     */
    Cancelling = 4,
    /**
     * The build is inactive in the queue.
     */
    Postponed = 8,
    /**
     * The build has not yet started.
     */
    NotStarted = 32,
    /**
     * All status.
     */
    All = 47,
}

export interface BuildSummary {
    build: XamlBuildReference;
    finishTime: Date;
    keepForever: boolean;
    quality: string;
    reason: BuildReason;
    requestedFor: VSSInterfaces.IdentityRef;
    startTime: Date;
    status: BuildStatus;
}

export interface BuildTrigger {
    triggerType: DefinitionTriggerType;
}

export interface BuildUpdatedEvent extends RealtimeBuildEvent {
    build: Build;
}

export interface BuildWorkspace {
    mappings: MappingDetails[];
}

/**
 * Represents a change associated with a build.
 */
export interface Change {
    /**
     * The author of the change.
     */
    author: VSSInterfaces.IdentityRef;
    /**
     * The location of a user-friendly representation of the resource.
     */
    displayUri: string;
    /**
     * Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.
     */
    id: string;
    /**
     * The location of the full representation of the resource.
     */
    location: string;
    /**
     * A description of the change. This might be a commit message or changeset description.
     */
    message: string;
    /**
     * Indicates whether the message was truncated
     */
    messageTruncated: boolean;
    /**
     * A timestamp for the change.
     */
    timestamp: Date;
    /**
     * The type of change. "commit", "changeset", etc.
     */
    type: string;
}

export interface ConsoleLogEvent extends RealtimeBuildEvent {
    lines: string[];
    timelineId: string;
    timelineRecordId: string;
}

export interface ContinuousDeploymentDefinition {
    /**
     * The connected service associated with the continuous deployment
     */
    connectedService: TfsCoreInterfaces.WebApiConnectedServiceRef;
    /**
     * The definition associated with the continuous deployment
     */
    definition: XamlDefinitionReference;
    gitBranch: string;
    hostedServiceName: string;
    project: TfsCoreInterfaces.TeamProjectReference;
    repositoryId: string;
    storageAccountName: string;
    subscriptionId: string;
    website: string;
    webspace: string;
}

export interface ContinuousIntegrationTrigger extends BuildTrigger {
    batchChanges: boolean;
    branchFilters: string[];
    maxConcurrentBuildsPerBranch: number;
    pathFilters: string[];
    /**
     * The polling interval in seconds.
     */
    pollingInterval: number;
    /**
     * This is the id of the polling job that polls the external repository.  Once the build definition is saved/updated, this value is set.
     */
    pollingJobId: string;
}

export enum ControllerStatus {
    /**
     * Indicates that the build controller cannot be contacted.
     */
    Unavailable = 0,
    /**
     * Indicates that the build controller is currently available.
     */
    Available = 1,
    /**
     * Indicates that the build controller has taken itself offline.
     */
    Offline = 2,
}

export enum DefinitionQuality {
    Definition = 1,
    Draft = 2,
}

export enum DefinitionQueryOrder {
    /**
     * No order
     */
    None = 0,
    /**
     * Order by created on/last modified time ascending.
     */
    LastModifiedAscending = 1,
    /**
     * Order by created on/last modified time descending.
     */
    LastModifiedDescending = 2,
    /**
     * Order by definition name ascending.
     */
    DefinitionNameAscending = 3,
    /**
     * Order by definition name descending.
     */
    DefinitionNameDescending = 4,
}

export enum DefinitionQueueStatus {
    /**
     * When enabled the definition queue allows builds to be queued by users, the system will queue scheduled, gated and continuous integration builds, and the queued builds will be started by the system.
     */
    Enabled = 0,
    /**
     * When paused the definition queue allows builds to be queued by users and the system will queue scheduled, gated and continuous integration builds. Builds in the queue will not be started by the system.
     */
    Paused = 1,
    /**
     * When disabled the definition queue will not allow builds to be queued by users and the system will not queue scheduled, gated or continuous integration builds. Builds already in the queue will not be started by the system.
     */
    Disabled = 2,
}

/**
 * A reference to a definition.
 */
export interface DefinitionReference {
    /**
     * The date the definition was created
     */
    createdDate: Date;
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * The path this definitions belongs to
     */
    path: string;
    /**
     * The project.
     */
    project: TfsCoreInterfaces.TeamProjectReference;
    /**
     * If builds can be queued from this definition
     */
    queueStatus: DefinitionQueueStatus;
    /**
     * The definition revision number.
     */
    revision: number;
    /**
     * The type of the definition.
     */
    type: DefinitionType;
    /**
     * The Uri of the definition
     */
    uri: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export enum DefinitionTriggerType {
    /**
     * Manual builds only.
     */
    None = 1,
    /**
     * A build should be started for each changeset.
     */
    ContinuousIntegration = 2,
    /**
     * A build should be started for multiple changesets at a time at a specified interval.
     */
    BatchedContinuousIntegration = 4,
    /**
     * A build should be started on a specified schedule whether or not changesets exist.
     */
    Schedule = 8,
    /**
     * A validation build should be started for each check-in.
     */
    GatedCheckIn = 16,
    /**
     * A validation build should be started for each batch of check-ins.
     */
    BatchedGatedCheckIn = 32,
    /**
     * A build should be triggered when a GitHub pull request is created or updated. Added in resource version 3
     */
    PullRequest = 64,
    /**
     * All types.
     */
    All = 127,
}

export enum DefinitionType {
    Xaml = 1,
    Build = 2,
}

export enum DeleteOptions {
    /**
     * No data should be deleted. This value should not be used.
     */
    None = 0,
    /**
     * The drop location should be deleted.
     */
    DropLocation = 1,
    /**
     * The test results should be deleted.
     */
    TestResults = 2,
    /**
     * The version control label should be deleted.
     */
    Label = 4,
    /**
     * The build should be deleted.
     */
    Details = 8,
    /**
     * Published symbols should be deleted.
     */
    Symbols = 16,
    /**
     * All data should be deleted.
     */
    All = 31,
}

/**
 * Represents the data from the build information nodes for type "DeploymentInformation" for xaml builds
 */
export interface Deployment {
    type: string;
}

/**
 * Deployment information for type "Build"
 */
export interface DeploymentBuild extends Deployment {
    buildId: number;
}

/**
 * Deployment information for type "Deploy"
 */
export interface DeploymentDeploy extends Deployment {
    message: string;
}

/**
 * Deployment information for type "Test"
 */
export interface DeploymentTest extends Deployment {
    runId: number;
}

export interface Folder {
    /**
     * Process or person who created the folder
     */
    createdBy: VSSInterfaces.IdentityRef;
    /**
     * Creation date of the folder
     */
    createdOn: Date;
    /**
     * The description of the folder
     */
    description: string;
    /**
     * Process or person that last changed the folder
     */
    lastChangedBy: VSSInterfaces.IdentityRef;
    /**
     * Date the folder was last changed
     */
    lastChangedDate: Date;
    /**
     * The path of the folder
     */
    path: string;
    /**
     * The project.
     */
    project: TfsCoreInterfaces.TeamProjectReference;
}

export enum FolderQueryOrder {
    /**
     * No order
     */
    None = 0,
    /**
     * Order by folder name and path ascending.
     */
    FolderAscending = 1,
    /**
     * Order by folder name and path descending.
     */
    FolderDescending = 2,
}

export interface GatedCheckInTrigger extends BuildTrigger {
    pathFilters: string[];
    runContinuousIntegration: boolean;
    useWorkspaceMappings: boolean;
}

export enum GetOption {
    /**
     * Use the latest changeset at the time the build is queued.
     */
    LatestOnQueue = 0,
    /**
     * Use the latest changeset at the time the build is started.
     */
    LatestOnBuild = 1,
    /**
     * A user-specified version has been supplied.
     */
    Custom = 2,
}

/**
 * Data representation of an information node associated with a build
 */
export interface InformationNode {
    /**
     * Fields of the information node
     */
    fields: { [key: string] : string; };
    /**
     * Process or person that last modified this node
     */
    lastModifiedBy: string;
    /**
     * Date this node was last modified
     */
    lastModifiedDate: Date;
    /**
     * Node Id of this information node
     */
    nodeId: number;
    /**
     * Id of parent node (xml tree)
     */
    parentId: number;
    /**
     * The type of the information node
     */
    type: string;
}

export interface Issue {
    category: string;
    data: { [key: string] : string; };
    message: string;
    type: IssueType;
}

export enum IssueType {
    Error = 1,
    Warning = 2,
}

export interface MappingDetails {
    localPath: string;
    mappingType: string;
    serverPath: string;
}

export enum ProcessTemplateType {
    /**
     * Indicates a custom template.
     */
    Custom = 0,
    /**
     * Indicates a default template.
     */
    Default = 1,
    /**
     * Indicates an upgrade template.
     */
    Upgrade = 2,
}

export interface PullRequestTrigger extends BuildTrigger {
    branchFilters: string[];
}

export enum QueryDeletedOption {
    /**
     * Include only non-deleted builds.
     */
    ExcludeDeleted = 0,
    /**
     * Include deleted and non-deleted builds.
     */
    IncludeDeleted = 1,
    /**
     * Include only deleted builds.
     */
    OnlyDeleted = 2,
}

export enum QueueOptions {
    /**
     * No queue options
     */
    None = 0,
    /**
     * Create a plan Id for the build, do not run it
     */
    DoNotRun = 1,
}

export enum QueuePriority {
    /**
     * Low priority.
     */
    Low = 5,
    /**
     * Below normal priority.
     */
    BelowNormal = 4,
    /**
     * Normal priority.
     */
    Normal = 3,
    /**
     * Above normal priority.
     */
    AboveNormal = 2,
    /**
     * High priority.
     */
    High = 1,
}

export interface RealtimeBuildEvent {
    buildId: number;
}

export enum RepositoryCleanOptions {
    Source = 0,
    SourceAndOutputDir = 1,
    /**
     * Re-create $(build.sourcesDirectory)
     */
    SourceDir = 2,
    /**
     * Re-create $(agnet.buildDirectory) which contains $(build.sourcesDirectory), $(build.binariesDirectory) and any folders that left from previous build.
     */
    AllBuildDir = 3,
}

export interface RetentionPolicy {
    artifacts: string[];
    artifactTypesToDelete: string[];
    branches: string[];
    daysToKeep: number;
    deleteBuildRecord: boolean;
    deleteTestResults: boolean;
    minimumToKeep: number;
}

export interface Schedule {
    branchFilters: string[];
    /**
     * Days for a build (flags enum for days of the week)
     */
    daysToBuild: ScheduleDays;
    /**
     * The Job Id of the Scheduled job that will queue the scheduled build. Since a single trigger can have multiple schedules and we want a single job to process a single schedule (since each schedule has a list of branches to build), the schedule itself needs to define the Job Id. This value will be filled in when a definition is added or updated.  The UI does not provide it or use it.
     */
    scheduleJobId: string;
    /**
     * Local timezone hour to start
     */
    startHours: number;
    /**
     * Local timezone minute to start
     */
    startMinutes: number;
    /**
     * Time zone of the build schedule (string representation of the time zone id)
     */
    timeZoneId: string;
}

export enum ScheduleDays {
    /**
     * Do not run.
     */
    None = 0,
    /**
     * Run on Monday.
     */
    Monday = 1,
    /**
     * Run on Tuesday.
     */
    Tuesday = 2,
    /**
     * Run on Wednesday.
     */
    Wednesday = 4,
    /**
     * Run on Thursday.
     */
    Thursday = 8,
    /**
     * Run on Friday.
     */
    Friday = 16,
    /**
     * Run on Saturday.
     */
    Saturday = 32,
    /**
     * Run on Sunday.
     */
    Sunday = 64,
    /**
     * Run on all days of the week.
     */
    All = 127,
}

export interface ScheduleTrigger extends BuildTrigger {
    schedules: Schedule[];
}

export enum ServiceHostStatus {
    /**
     * The service host is currently connected and accepting commands.
     */
    Online = 1,
    /**
     * The service host is currently disconnected and not accepting commands.
     */
    Offline = 2,
}

export interface SvnMappingDetails {
    depth: number;
    ignoreExternals: boolean;
    localPath: string;
    revision: string;
    serverPath: string;
}

export interface SvnWorkspace {
    mappings: SvnMappingDetails[];
}

export interface SyncBuildCompletedEvent extends BuildUpdatedEvent {
}

export interface SyncBuildStartedEvent extends BuildUpdatedEvent {
}

export interface TaskAgentPoolReference {
    id: number;
    /**
     * Gets or sets a value indicating whether or not this pool is managed by the service.
     */
    isHosted: boolean;
    name: string;
}

export interface TaskDefinitionReference {
    definitionType: string;
    id: string;
    versionSpec: string;
}

export interface TaskOrchestrationPlanGroupReference {
    planGroup: string;
    projectId: string;
}

export interface TaskOrchestrationPlanGroupsStartedEvent {
    planGroups: TaskOrchestrationPlanGroupReference[];
}

export interface TaskOrchestrationPlanReference {
    /**
     * Orchestration Type for Build (build, cleanup etc.)
     */
    orchestrationType: number;
    planId: string;
}

export interface TaskReference {
    id: string;
    name: string;
    version: string;
}

export enum TaskResult {
    Succeeded = 0,
    SucceededWithIssues = 1,
    Failed = 2,
    Canceled = 3,
    Skipped = 4,
    Abandoned = 5,
}

export interface Timeline extends TimelineReference {
    lastChangedBy: string;
    lastChangedOn: Date;
    records: TimelineRecord[];
}

export interface TimelineRecord {
    _links: any;
    changeId: number;
    currentOperation: string;
    details: TimelineReference;
    errorCount: number;
    finishTime: Date;
    id: string;
    issues: Issue[];
    lastModified: Date;
    log: BuildLogReference;
    name: string;
    order: number;
    parentId: string;
    percentComplete: number;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TimelineRecordState;
    task: TaskReference;
    type: string;
    url: string;
    warningCount: number;
    workerName: string;
}

export enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}

export interface TimelineRecordsUpdatedEvent extends RealtimeBuildEvent {
    timelineRecords: TimelineRecord[];
}

export interface TimelineReference {
    changeId: number;
    id: string;
    url: string;
}

export enum ValidationResult {
    OK = 0,
    Warning = 1,
    Error = 2,
}

/**
 * Mapping for a workspace
 */
export interface WorkspaceMapping {
    /**
     * Uri of the associated definition
     */
    definitionUri: string;
    /**
     * Depth of this mapping
     */
    depth: number;
    /**
     * local location of the definition
     */
    localItem: string;
    /**
     * type of workspace mapping
     */
    mappingType: WorkspaceMappingType;
    /**
     * Server location of the definition
     */
    serverItem: string;
    /**
     * Id of the workspace
     */
    workspaceId: number;
}

export enum WorkspaceMappingType {
    /**
     * The path is mapped in the workspace.
     */
    Map = 0,
    /**
     * The path is cloaked in the workspace.
     */
    Cloak = 1,
}

export interface WorkspaceTemplate {
    /**
     * Uri of the associated definition
     */
    definitionUri: string;
    /**
     * The identity that last modified this template
     */
    lastModifiedBy: string;
    /**
     * The last time this template was modified
     */
    lastModifiedDate: Date;
    /**
     * List of workspace mappings
     */
    mappings: WorkspaceMapping[];
    /**
     * Id of the workspace for this template
     */
    workspaceId: number;
}

export interface XamlBuildControllerReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export interface XamlBuildDefinition extends DefinitionReference {
    _links: any;
    /**
     * Batch size of the definition
     */
    batchSize: number;
    buildArgs: string;
    /**
     * The continuous integration quiet period
     */
    continuousIntegrationQuietPeriod: number;
    /**
     * The build controller
     */
    controller: BuildController;
    /**
     * The date this definition was created
     */
    createdOn: Date;
    /**
     * Default drop location for builds from this definition
     */
    defaultDropLocation: string;
    /**
     * Description of the definition
     */
    description: string;
    /**
     * The last build on this definition
     */
    lastBuild: XamlBuildReference;
    /**
     * The repository
     */
    repository: BuildRepository;
    /**
     * The reasons supported by the template
     */
    supportedReasons: BuildReason;
    /**
     * How builds are triggered from this definition
     */
    triggerType: DefinitionTriggerType;
}

export interface XamlBuildReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export interface XamlBuildServerReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export interface XamlDefinitionReference {
    /**
     * Id of the resource
     */
    id: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export var TypeInfo = {
    AgentPoolQueue: {
        fields: <any>null
    },
    AgentStatus: {
        enumValues: {
            "unavailable": 0,
            "available": 1,
            "offline": 2,
        }
    },
    ArtifactResource: {
        fields: <any>null
    },
    AuditAction: {
        enumValues: {
            "add": 1,
            "update": 2,
            "delete": 3,
        }
    },
    Build: {
        fields: <any>null
    },
    BuildAgent: {
        fields: <any>null
    },
    BuildAgentReference: {
        fields: <any>null
    },
    BuildArtifact: {
        fields: <any>null
    },
    BuildArtifactAddedEvent: {
        fields: <any>null
    },
    BuildAuthorizationScope: {
        enumValues: {
            "projectCollection": 1,
            "project": 2,
        }
    },
    BuildBadge: {
        fields: <any>null
    },
    BuildChangesCalculatedEvent: {
        fields: <any>null
    },
    BuildCompletedEvent: {
        fields: <any>null
    },
    BuildController: {
        fields: <any>null
    },
    BuildDefinition: {
        fields: <any>null
    },
    BuildDefinitionChangedEvent: {
        fields: <any>null
    },
    BuildDefinitionChangingEvent: {
        fields: <any>null
    },
    BuildDefinitionReference: {
        fields: <any>null
    },
    BuildDefinitionRevision: {
        fields: <any>null
    },
    BuildDefinitionSourceProvider: {
        fields: <any>null
    },
    BuildDefinitionStep: {
        fields: <any>null
    },
    BuildDefinitionTemplate: {
        fields: <any>null
    },
    BuildDefinitionVariable: {
        fields: <any>null
    },
    BuildDeletedEvent: {
        fields: <any>null
    },
    BuildDeployment: {
        fields: <any>null
    },
    BuildDestroyedEvent: {
        fields: <any>null
    },
    BuildLog: {
        fields: <any>null
    },
    BuildLogReference: {
        fields: <any>null
    },
    BuildMetric: {
        fields: <any>null
    },
    BuildOption: {
        fields: <any>null
    },
    BuildOptionDefinition: {
        fields: <any>null
    },
    BuildOptionDefinitionReference: {
        fields: <any>null
    },
    BuildOptionGroupDefinition: {
        fields: <any>null
    },
    BuildOptionInputDefinition: {
        fields: <any>null
    },
    BuildOptionInputType: {
        enumValues: {
            "string": 0,
            "boolean": 1,
            "stringList": 2,
            "radio": 3,
            "pickList": 4,
            "multiLine": 5,
        }
    },
    BuildPhaseStatus: {
        enumValues: {
            "unknown": 0,
            "failed": 1,
            "succeeded": 2,
        }
    },
    BuildPollingSummaryEvent: {
        fields: <any>null
    },
    BuildProcessTemplate: {
        fields: <any>null
    },
    BuildQueryOrder: {
        enumValues: {
            "finishTimeAscending": 2,
            "finishTimeDescending": 3,
        }
    },
    BuildQueuedEvent: {
        fields: <any>null
    },
    BuildReason: {
        enumValues: {
            "none": 0,
            "manual": 1,
            "individualCI": 2,
            "batchedCI": 4,
            "schedule": 8,
            "userCreated": 32,
            "validateShelveset": 64,
            "checkInShelveset": 128,
            "pullRequest": 256,
            "triggered": 431,
            "all": 495,
        }
    },
    BuildReference: {
        fields: <any>null
    },
    BuildReportMetadata: {
        fields: <any>null
    },
    BuildRepository: {
        fields: <any>null
    },
    BuildRequestValidationResult: {
        fields: <any>null
    },
    BuildResourceUsage: {
        fields: <any>null
    },
    BuildResult: {
        enumValues: {
            "none": 0,
            "succeeded": 2,
            "partiallySucceeded": 4,
            "failed": 8,
            "canceled": 32,
        }
    },
    BuildServer: {
        fields: <any>null
    },
    BuildSettings: {
        fields: <any>null
    },
    BuildStartedEvent: {
        fields: <any>null
    },
    BuildStatus: {
        enumValues: {
            "none": 0,
            "inProgress": 1,
            "completed": 2,
            "cancelling": 4,
            "postponed": 8,
            "notStarted": 32,
            "all": 47,
        }
    },
    BuildSummary: {
        fields: <any>null
    },
    BuildTrigger: {
        fields: <any>null
    },
    BuildUpdatedEvent: {
        fields: <any>null
    },
    BuildWorkspace: {
        fields: <any>null
    },
    Change: {
        fields: <any>null
    },
    ConsoleLogEvent: {
        fields: <any>null
    },
    ContinuousDeploymentDefinition: {
        fields: <any>null
    },
    ContinuousIntegrationTrigger: {
        fields: <any>null
    },
    ControllerStatus: {
        enumValues: {
            "unavailable": 0,
            "available": 1,
            "offline": 2,
        }
    },
    DefinitionQuality: {
        enumValues: {
            "definition": 1,
            "draft": 2,
        }
    },
    DefinitionQueryOrder: {
        enumValues: {
            "none": 0,
            "lastModifiedAscending": 1,
            "lastModifiedDescending": 2,
            "definitionNameAscending": 3,
            "definitionNameDescending": 4,
        }
    },
    DefinitionQueueStatus: {
        enumValues: {
            "enabled": 0,
            "paused": 1,
            "disabled": 2,
        }
    },
    DefinitionReference: {
        fields: <any>null
    },
    DefinitionTriggerType: {
        enumValues: {
            "none": 1,
            "continuousIntegration": 2,
            "batchedContinuousIntegration": 4,
            "schedule": 8,
            "gatedCheckIn": 16,
            "batchedGatedCheckIn": 32,
            "pullRequest": 64,
            "all": 127,
        }
    },
    DefinitionType: {
        enumValues: {
            "xaml": 1,
            "build": 2,
        }
    },
    DeleteOptions: {
        enumValues: {
            "none": 0,
            "dropLocation": 1,
            "testResults": 2,
            "label": 4,
            "details": 8,
            "symbols": 16,
            "all": 31,
        }
    },
    Deployment: {
        fields: <any>null
    },
    DeploymentBuild: {
        fields: <any>null
    },
    DeploymentDeploy: {
        fields: <any>null
    },
    DeploymentTest: {
        fields: <any>null
    },
    Folder: {
        fields: <any>null
    },
    FolderQueryOrder: {
        enumValues: {
            "none": 0,
            "folderAscending": 1,
            "folderDescending": 2,
        }
    },
    GatedCheckInTrigger: {
        fields: <any>null
    },
    GetOption: {
        enumValues: {
            "latestOnQueue": 0,
            "latestOnBuild": 1,
            "custom": 2,
        }
    },
    InformationNode: {
        fields: <any>null
    },
    Issue: {
        fields: <any>null
    },
    IssueType: {
        enumValues: {
            "error": 1,
            "warning": 2,
        }
    },
    MappingDetails: {
        fields: <any>null
    },
    ProcessTemplateType: {
        enumValues: {
            "custom": 0,
            "default": 1,
            "upgrade": 2,
        }
    },
    PullRequestTrigger: {
        fields: <any>null
    },
    QueryDeletedOption: {
        enumValues: {
            "excludeDeleted": 0,
            "includeDeleted": 1,
            "onlyDeleted": 2,
        }
    },
    QueueOptions: {
        enumValues: {
            "none": 0,
            "doNotRun": 1,
        }
    },
    QueuePriority: {
        enumValues: {
            "low": 5,
            "belowNormal": 4,
            "normal": 3,
            "aboveNormal": 2,
            "high": 1,
        }
    },
    RealtimeBuildEvent: {
        fields: <any>null
    },
    RepositoryCleanOptions: {
        enumValues: {
            "source": 0,
            "sourceAndOutputDir": 1,
            "sourceDir": 2,
            "allBuildDir": 3,
        }
    },
    RetentionPolicy: {
        fields: <any>null
    },
    Schedule: {
        fields: <any>null
    },
    ScheduleDays: {
        enumValues: {
            "none": 0,
            "monday": 1,
            "tuesday": 2,
            "wednesday": 4,
            "thursday": 8,
            "friday": 16,
            "saturday": 32,
            "sunday": 64,
            "all": 127,
        }
    },
    ScheduleTrigger: {
        fields: <any>null
    },
    ServiceHostStatus: {
        enumValues: {
            "online": 1,
            "offline": 2,
        }
    },
    SvnMappingDetails: {
        fields: <any>null
    },
    SvnWorkspace: {
        fields: <any>null
    },
    SyncBuildCompletedEvent: {
        fields: <any>null
    },
    SyncBuildStartedEvent: {
        fields: <any>null
    },
    TaskAgentPoolReference: {
        fields: <any>null
    },
    TaskDefinitionReference: {
        fields: <any>null
    },
    TaskOrchestrationPlanGroupReference: {
        fields: <any>null
    },
    TaskOrchestrationPlanGroupsStartedEvent: {
        fields: <any>null
    },
    TaskOrchestrationPlanReference: {
        fields: <any>null
    },
    TaskReference: {
        fields: <any>null
    },
    TaskResult: {
        enumValues: {
            "succeeded": 0,
            "succeededWithIssues": 1,
            "failed": 2,
            "canceled": 3,
            "skipped": 4,
            "abandoned": 5,
        }
    },
    Timeline: {
        fields: <any>null
    },
    TimelineRecord: {
        fields: <any>null
    },
    TimelineRecordState: {
        enumValues: {
            "pending": 0,
            "inProgress": 1,
            "completed": 2,
        }
    },
    TimelineRecordsUpdatedEvent: {
        fields: <any>null
    },
    TimelineReference: {
        fields: <any>null
    },
    ValidationResult: {
        enumValues: {
            "oK": 0,
            "warning": 1,
            "error": 2,
        }
    },
    WorkspaceMapping: {
        fields: <any>null
    },
    WorkspaceMappingType: {
        enumValues: {
            "map": 0,
            "cloak": 1,
        }
    },
    WorkspaceTemplate: {
        fields: <any>null
    },
    XamlBuildControllerReference: {
        fields: <any>null
    },
    XamlBuildDefinition: {
        fields: <any>null
    },
    XamlBuildReference: {
        fields: <any>null
    },
    XamlBuildServerReference: {
        fields: <any>null
    },
    XamlDefinitionReference: {
        fields: <any>null
    },
};

TypeInfo.AgentPoolQueue.fields = {
    pool: {
        typeInfo: TypeInfo.TaskAgentPoolReference
    },
};

TypeInfo.ArtifactResource.fields = {
};

TypeInfo.Build.fields = {
    controller: {
        typeInfo: TypeInfo.BuildController
    },
    definition: {
        typeInfo: TypeInfo.DefinitionReference
    },
    deletedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    deletedDate: {
        isDate: true,
    },
    finishTime: {
        isDate: true,
    },
    lastChangedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastChangedDate: {
        isDate: true,
    },
    logs: {
        typeInfo: TypeInfo.BuildLogReference
    },
    orchestrationPlan: {
        typeInfo: TypeInfo.TaskOrchestrationPlanReference
    },
    plans: {
        isArray: true,
        typeInfo: TypeInfo.TaskOrchestrationPlanReference
    },
    priority: {
        enumType: TypeInfo.QueuePriority
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    queue: {
        typeInfo: TypeInfo.AgentPoolQueue
    },
    queueOptions: {
        enumType: TypeInfo.QueueOptions
    },
    queueTime: {
        isDate: true,
    },
    reason: {
        enumType: TypeInfo.BuildReason
    },
    repository: {
        typeInfo: TypeInfo.BuildRepository
    },
    requestedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    requestedFor: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    result: {
        enumType: TypeInfo.BuildResult
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.BuildStatus
    },
    validationResults: {
        isArray: true,
        typeInfo: TypeInfo.BuildRequestValidationResult
    },
};

TypeInfo.BuildAgent.fields = {
    controller: {
        typeInfo: TypeInfo.XamlBuildControllerReference
    },
    createdDate: {
        isDate: true,
    },
    server: {
        typeInfo: TypeInfo.XamlBuildServerReference
    },
    status: {
        enumType: TypeInfo.AgentStatus
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.BuildAgentReference.fields = {
};

TypeInfo.BuildArtifact.fields = {
    resource: {
        typeInfo: TypeInfo.ArtifactResource
    },
};

TypeInfo.BuildArtifactAddedEvent.fields = {
    artifact: {
        typeInfo: TypeInfo.BuildArtifact
    },
    build: {
        typeInfo: TypeInfo.Build
    },
};

TypeInfo.BuildBadge.fields = {
};

TypeInfo.BuildChangesCalculatedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
    changes: {
        isArray: true,
        typeInfo: TypeInfo.Change
    },
};

TypeInfo.BuildCompletedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
};

TypeInfo.BuildController.fields = {
    createdDate: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.ControllerStatus
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.BuildDefinition.fields = {
    authoredBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    build: {
        isArray: true,
        typeInfo: TypeInfo.BuildDefinitionStep
    },
    createdDate: {
        isDate: true,
    },
    draftOf: {
        typeInfo: TypeInfo.DefinitionReference
    },
    jobAuthorizationScope: {
        enumType: TypeInfo.BuildAuthorizationScope
    },
    latestBuild: {
        typeInfo: TypeInfo.Build
    },
    latestCompletedBuild: {
        typeInfo: TypeInfo.Build
    },
    metrics: {
        isArray: true,
        typeInfo: TypeInfo.BuildMetric
    },
    options: {
        isArray: true,
        typeInfo: TypeInfo.BuildOption
    },
    processParameters: {
        typeInfo: DistributedTaskCommonInterfaces.TypeInfo.ProcessParameters
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    quality: {
        enumType: TypeInfo.DefinitionQuality
    },
    queue: {
        typeInfo: TypeInfo.AgentPoolQueue
    },
    queueStatus: {
        enumType: TypeInfo.DefinitionQueueStatus
    },
    repository: {
        typeInfo: TypeInfo.BuildRepository
    },
    retentionRules: {
        isArray: true,
        typeInfo: TypeInfo.RetentionPolicy
    },
    triggers: {
        isArray: true,
        typeInfo: TypeInfo.BuildTrigger
    },
    type: {
        enumType: TypeInfo.DefinitionType
    },
    variables: {
    },
};

TypeInfo.BuildDefinitionChangedEvent.fields = {
    changeType: {
        enumType: TypeInfo.AuditAction
    },
    definition: {
        typeInfo: TypeInfo.BuildDefinition
    },
};

TypeInfo.BuildDefinitionChangingEvent.fields = {
    changeType: {
        enumType: TypeInfo.AuditAction
    },
    newDefinition: {
        typeInfo: TypeInfo.BuildDefinition
    },
    originalDefinition: {
        typeInfo: TypeInfo.BuildDefinition
    },
};

TypeInfo.BuildDefinitionReference.fields = {
    authoredBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdDate: {
        isDate: true,
    },
    draftOf: {
        typeInfo: TypeInfo.DefinitionReference
    },
    metrics: {
        isArray: true,
        typeInfo: TypeInfo.BuildMetric
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    quality: {
        enumType: TypeInfo.DefinitionQuality
    },
    queue: {
        typeInfo: TypeInfo.AgentPoolQueue
    },
    queueStatus: {
        enumType: TypeInfo.DefinitionQueueStatus
    },
    type: {
        enumType: TypeInfo.DefinitionType
    },
};

TypeInfo.BuildDefinitionRevision.fields = {
    changedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    changedDate: {
        isDate: true,
    },
    changeType: {
        enumType: TypeInfo.AuditAction
    },
};

TypeInfo.BuildDefinitionSourceProvider.fields = {
    lastModified: {
        isDate: true,
    },
    supportedTriggerTypes: {
        enumType: TypeInfo.DefinitionTriggerType
    },
};

TypeInfo.BuildDefinitionStep.fields = {
    task: {
        typeInfo: TypeInfo.TaskDefinitionReference
    },
};

TypeInfo.BuildDefinitionTemplate.fields = {
    template: {
        typeInfo: TypeInfo.BuildDefinition
    },
};

TypeInfo.BuildDefinitionVariable.fields = {
};

TypeInfo.BuildDeletedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
};

TypeInfo.BuildDeployment.fields = {
    deployment: {
        typeInfo: TypeInfo.BuildSummary
    },
    sourceBuild: {
        typeInfo: TypeInfo.XamlBuildReference
    },
};

TypeInfo.BuildDestroyedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
};

TypeInfo.BuildLog.fields = {
    createdOn: {
        isDate: true,
    },
    lastChangedOn: {
        isDate: true,
    },
};

TypeInfo.BuildLogReference.fields = {
};

TypeInfo.BuildMetric.fields = {
    date: {
        isDate: true,
    },
};

TypeInfo.BuildOption.fields = {
    definition: {
        typeInfo: TypeInfo.BuildOptionDefinitionReference
    },
};

TypeInfo.BuildOptionDefinition.fields = {
    groups: {
        isArray: true,
        typeInfo: TypeInfo.BuildOptionGroupDefinition
    },
    inputs: {
        isArray: true,
        typeInfo: TypeInfo.BuildOptionInputDefinition
    },
};

TypeInfo.BuildOptionDefinitionReference.fields = {
};

TypeInfo.BuildOptionGroupDefinition.fields = {
};

TypeInfo.BuildOptionInputDefinition.fields = {
    type: {
        enumType: TypeInfo.BuildOptionInputType
    },
};

TypeInfo.BuildPollingSummaryEvent.fields = {
};

TypeInfo.BuildProcessTemplate.fields = {
    supportedReasons: {
        enumType: TypeInfo.BuildReason
    },
    templateType: {
        enumType: TypeInfo.ProcessTemplateType
    },
};

TypeInfo.BuildQueuedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
};

TypeInfo.BuildReference.fields = {
    finishTime: {
        isDate: true,
    },
    queueTime: {
        isDate: true,
    },
    requestedFor: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    result: {
        enumType: TypeInfo.BuildResult
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.BuildStatus
    },
};

TypeInfo.BuildReportMetadata.fields = {
};

TypeInfo.BuildRepository.fields = {
};

TypeInfo.BuildRequestValidationResult.fields = {
    result: {
        enumType: TypeInfo.ValidationResult
    },
};

TypeInfo.BuildResourceUsage.fields = {
};

TypeInfo.BuildServer.fields = {
    agents: {
        isArray: true,
        typeInfo: TypeInfo.BuildAgentReference
    },
    controller: {
        typeInfo: TypeInfo.XamlBuildControllerReference
    },
    status: {
        enumType: TypeInfo.ServiceHostStatus
    },
    statusChangedDate: {
        isDate: true,
    },
};

TypeInfo.BuildSettings.fields = {
    defaultRetentionPolicy: {
        typeInfo: TypeInfo.RetentionPolicy
    },
    maximumRetentionPolicy: {
        typeInfo: TypeInfo.RetentionPolicy
    },
};

TypeInfo.BuildStartedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
};

TypeInfo.BuildSummary.fields = {
    build: {
        typeInfo: TypeInfo.XamlBuildReference
    },
    finishTime: {
        isDate: true,
    },
    reason: {
        enumType: TypeInfo.BuildReason
    },
    requestedFor: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.BuildStatus
    },
};

TypeInfo.BuildTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    },
};

TypeInfo.BuildUpdatedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
};

TypeInfo.BuildWorkspace.fields = {
    mappings: {
        isArray: true,
        typeInfo: TypeInfo.MappingDetails
    },
};

TypeInfo.Change.fields = {
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    timestamp: {
        isDate: true,
    },
};

TypeInfo.ConsoleLogEvent.fields = {
};

TypeInfo.ContinuousDeploymentDefinition.fields = {
    connectedService: {
        typeInfo: TfsCoreInterfaces.TypeInfo.WebApiConnectedServiceRef
    },
    definition: {
        typeInfo: TypeInfo.XamlDefinitionReference
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
};

TypeInfo.ContinuousIntegrationTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    },
};

TypeInfo.DefinitionReference.fields = {
    createdDate: {
        isDate: true,
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    queueStatus: {
        enumType: TypeInfo.DefinitionQueueStatus
    },
    type: {
        enumType: TypeInfo.DefinitionType
    },
};

TypeInfo.Deployment.fields = {
};

TypeInfo.DeploymentBuild.fields = {
};

TypeInfo.DeploymentDeploy.fields = {
};

TypeInfo.DeploymentTest.fields = {
};

TypeInfo.Folder.fields = {
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdOn: {
        isDate: true,
    },
    lastChangedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastChangedDate: {
        isDate: true,
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
};

TypeInfo.GatedCheckInTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    },
};

TypeInfo.InformationNode.fields = {
    lastModifiedDate: {
        isDate: true,
    },
};

TypeInfo.Issue.fields = {
    type: {
        enumType: TypeInfo.IssueType
    },
};

TypeInfo.MappingDetails.fields = {
};

TypeInfo.PullRequestTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    },
};

TypeInfo.RealtimeBuildEvent.fields = {
};

TypeInfo.RetentionPolicy.fields = {
};

TypeInfo.Schedule.fields = {
    daysToBuild: {
        enumType: TypeInfo.ScheduleDays
    },
};

TypeInfo.ScheduleTrigger.fields = {
    schedules: {
        isArray: true,
        typeInfo: TypeInfo.Schedule
    },
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    },
};

TypeInfo.SvnMappingDetails.fields = {
};

TypeInfo.SvnWorkspace.fields = {
    mappings: {
        isArray: true,
        typeInfo: TypeInfo.SvnMappingDetails
    },
};

TypeInfo.SyncBuildCompletedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
};

TypeInfo.SyncBuildStartedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
};

TypeInfo.TaskAgentPoolReference.fields = {
};

TypeInfo.TaskDefinitionReference.fields = {
};

TypeInfo.TaskOrchestrationPlanGroupReference.fields = {
};

TypeInfo.TaskOrchestrationPlanGroupsStartedEvent.fields = {
    planGroups: {
        isArray: true,
        typeInfo: TypeInfo.TaskOrchestrationPlanGroupReference
    },
};

TypeInfo.TaskOrchestrationPlanReference.fields = {
};

TypeInfo.TaskReference.fields = {
};

TypeInfo.Timeline.fields = {
    lastChangedOn: {
        isDate: true,
    },
    records: {
        isArray: true,
        typeInfo: TypeInfo.TimelineRecord
    },
};

TypeInfo.TimelineRecord.fields = {
    details: {
        typeInfo: TypeInfo.TimelineReference
    },
    finishTime: {
        isDate: true,
    },
    issues: {
        isArray: true,
        typeInfo: TypeInfo.Issue
    },
    lastModified: {
        isDate: true,
    },
    log: {
        typeInfo: TypeInfo.BuildLogReference
    },
    result: {
        enumType: TypeInfo.TaskResult
    },
    startTime: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.TimelineRecordState
    },
    task: {
        typeInfo: TypeInfo.TaskReference
    },
};

TypeInfo.TimelineRecordsUpdatedEvent.fields = {
    timelineRecords: {
        isArray: true,
        typeInfo: TypeInfo.TimelineRecord
    },
};

TypeInfo.TimelineReference.fields = {
};

TypeInfo.WorkspaceMapping.fields = {
    mappingType: {
        enumType: TypeInfo.WorkspaceMappingType
    },
};

TypeInfo.WorkspaceTemplate.fields = {
    lastModifiedDate: {
        isDate: true,
    },
    mappings: {
        isArray: true,
        typeInfo: TypeInfo.WorkspaceMapping
    },
};

TypeInfo.XamlBuildControllerReference.fields = {
};

TypeInfo.XamlBuildDefinition.fields = {
    controller: {
        typeInfo: TypeInfo.BuildController
    },
    createdDate: {
        isDate: true,
    },
    createdOn: {
        isDate: true,
    },
    lastBuild: {
        typeInfo: TypeInfo.XamlBuildReference
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    queueStatus: {
        enumType: TypeInfo.DefinitionQueueStatus
    },
    repository: {
        typeInfo: TypeInfo.BuildRepository
    },
    supportedReasons: {
        enumType: TypeInfo.BuildReason
    },
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    },
    type: {
        enumType: TypeInfo.DefinitionType
    },
};

TypeInfo.XamlBuildReference.fields = {
};

TypeInfo.XamlBuildServerReference.fields = {
};

TypeInfo.XamlDefinitionReference.fields = {
};
