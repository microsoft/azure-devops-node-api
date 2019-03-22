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
import TFS_SourceControl_Contracts = require("../interfaces/TfvcInterfaces");
import TFS_TestManagement_Contracts = require("../interfaces/TestInterfaces");
import TfsCoreInterfaces = require("../interfaces/CoreInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


/**
 * Represents a queue for running builds.
 */
export interface AgentPoolQueue {
    _links?: any;
    /**
     * The ID of the queue.
     */
    id?: number;
    /**
     * The name of the queue.
     */
    name?: string;
    /**
     * The pool used by this queue.
     */
    pool?: TaskAgentPoolReference;
    /**
     * The full http link to the resource.
     */
    url?: string;
}

/**
 * Represents a reference to an agent queue.
 */
export interface AgentPoolQueueReference extends ResourceReference {
    /**
     * The ID of the queue.
     */
    id?: number;
}

/**
 * Describes how a phase should run against an agent queue.
 */
export interface AgentPoolQueueTarget extends PhaseTarget {
    /**
     * Agent specification of the target.
     */
    agentSpecification?: AgentSpecification;
    /**
     * Enables scripts and other processes launched while executing phase to access the OAuth token
     */
    allowScriptsAuthAccessOption?: boolean;
    demands?: Demand[];
    /**
     * The execution options.
     */
    executionOptions?: AgentTargetExecutionOptions;
    /**
     * The queue.
     */
    queue?: AgentPoolQueue;
}

/**
 * Specification of the agent defined by the pool provider.
 */
export interface AgentSpecification {
    /**
     * Agent specification unique identifier.
     */
    identifier?: string;
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

/**
 * Additional options for running phases against an agent queue.
 */
export interface AgentTargetExecutionOptions {
    /**
     * Indicates the type of execution options.
     */
    type?: number;
}

export interface ArtifactResource {
    _links?: any;
    /**
     * Type-specific data about the artifact.
     */
    data?: string;
    /**
     * A link to download the resource.
     */
    downloadUrl?: string;
    /**
     * Type-specific properties of the artifact.
     */
    properties?: { [key: string] : string; };
    /**
     * The type of the resource: File container, version control folder, UNC path, etc.
     */
    type?: string;
    /**
     * The full http link to the resource.
     */
    url?: string;
}

/**
 * Represents an attachment to a build.
 */
export interface Attachment {
    _links?: any;
    /**
     * The name of the attachment.
     */
    name?: string;
}

export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
}

/**
 * Data representation of a build.
 */
export interface Build {
    _links?: any;
    /**
     * The agent specification for the build.
     */
    agentSpecification?: AgentSpecification;
    /**
     * The build number/name of the build.
     */
    buildNumber?: string;
    /**
     * The build number revision.
     */
    buildNumberRevision?: number;
    /**
     * The build controller. This is only set if the definition type is Xaml.
     */
    controller?: BuildController;
    /**
     * The definition associated with the build.
     */
    definition?: DefinitionReference;
    /**
     * Indicates whether the build has been deleted.
     */
    deleted?: boolean;
    /**
     * The identity of the process or person that deleted the build.
     */
    deletedBy?: VSSInterfaces.IdentityRef;
    /**
     * The date the build was deleted.
     */
    deletedDate?: Date;
    /**
     * The description of how the build was deleted.
     */
    deletedReason?: string;
    /**
     * A list of demands that represents the agent capabilities required by this build.
     */
    demands?: Demand[];
    /**
     * The time that the build was completed.
     */
    finishTime?: Date;
    /**
     * The ID of the build.
     */
    id?: number;
    /**
     * Indicates whether the build should be skipped by retention policies.
     */
    keepForever?: boolean;
    /**
     * The identity representing the process or person that last changed the build.
     */
    lastChangedBy?: VSSInterfaces.IdentityRef;
    /**
     * The date the build was last changed.
     */
    lastChangedDate?: Date;
    /**
     * Information about the build logs.
     */
    logs?: BuildLogReference;
    /**
     * The orchestration plan for the build.
     */
    orchestrationPlan?: TaskOrchestrationPlanReference;
    /**
     * The parameters for the build.
     */
    parameters?: string;
    /**
     * Orchestration plans associated with the build (build, cleanup)
     */
    plans?: TaskOrchestrationPlanReference[];
    /**
     * The build's priority.
     */
    priority?: QueuePriority;
    /**
     * The team project.
     */
    project?: TfsCoreInterfaces.TeamProjectReference;
    properties?: any;
    /**
     * The quality of the xaml build (good, bad, etc.)
     */
    quality?: string;
    /**
     * The queue. This is only set if the definition type is Build.
     */
    queue?: AgentPoolQueue;
    /**
     * Additional options for queueing the build.
     */
    queueOptions?: QueueOptions;
    /**
     * The current position of the build in the queue.
     */
    queuePosition?: number;
    /**
     * The time that the build was queued.
     */
    queueTime?: Date;
    /**
     * The reason that the build was created.
     */
    reason?: BuildReason;
    /**
     * The repository.
     */
    repository?: BuildRepository;
    /**
     * The identity that queued the build.
     */
    requestedBy?: VSSInterfaces.IdentityRef;
    /**
     * The identity on whose behalf the build was queued.
     */
    requestedFor?: VSSInterfaces.IdentityRef;
    /**
     * The build result.
     */
    result?: BuildResult;
    /**
     * Indicates whether the build is retained by a release.
     */
    retainedByRelease?: boolean;
    /**
     * The source branch.
     */
    sourceBranch?: string;
    /**
     * The source version.
     */
    sourceVersion?: string;
    /**
     * The time that the build was started.
     */
    startTime?: Date;
    /**
     * The status of the build.
     */
    status?: BuildStatus;
    tags?: string[];
    /**
     * The build that triggered this build via a Build completion trigger.
     */
    triggeredByBuild?: Build;
    /**
     * Sourceprovider-specific information about what triggered the build
     */
    triggerInfo?: { [key: string] : string; };
    /**
     * The URI of the build.
     */
    uri?: string;
    /**
     * The REST URL of the build.
     */
    url?: string;
    validationResults?: BuildRequestValidationResult[];
}

export interface BuildAgent {
    buildDirectory?: string;
    controller?: XamlBuildControllerReference;
    createdDate?: Date;
    description?: string;
    enabled?: boolean;
    id?: number;
    messageQueueUrl?: string;
    name?: string;
    reservedForBuild?: string;
    server?: XamlBuildServerReference;
    status?: AgentStatus;
    statusMessage?: string;
    updatedDate?: Date;
    uri?: string;
    url?: string;
}

export interface BuildAgentReference {
    /**
     * Id of the resource
     */
    id?: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name?: string;
    /**
     * Full http link to the resource
     */
    url?: string;
}

/**
 * Represents an artifact produced by a build.
 */
export interface BuildArtifact {
    /**
     * The artifact ID.
     */
    id?: number;
    /**
     * The name of the artifact.
     */
    name?: string;
    /**
     * The actual resource.
     */
    resource?: ArtifactResource;
}

/**
 * Represents the desired scope of authorization for a build.
 */
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
 * Represents a build badge.
 */
export interface BuildBadge {
    /**
     * The ID of the build represented by this badge.
     */
    buildId?: number;
    /**
     * A link to the SVG resource.
     */
    imageUrl?: string;
}

export interface BuildCompletedEvent extends BuildUpdatedEvent {
    /**
     * Changes associated with a build used for build notifications
     */
    changes?: Change[];
    /**
     * Pull request for the build used for build notifications
     */
    pullRequest?: PullRequest;
    /**
     * Test results associated with a build used for build notifications
     */
    testResults?: TFS_TestManagement_Contracts.AggregatedResultsAnalysis;
    /**
     * Timeline records associated with a build used for build notifications
     */
    timelineRecords?: TimelineRecord[];
    /**
     * Work items associated with a build used for build notifications
     */
    workItems?: TFS_SourceControl_Contracts.AssociatedWorkItem[];
}

/**
 * Represents a build completion trigger.
 */
export interface BuildCompletionTrigger extends BuildTrigger {
    branchFilters?: string[];
    /**
     * A reference to the definition that should trigger builds for this definition.
     */
    definition?: DefinitionReference;
    requiresSuccessfulBuild?: boolean;
}

export interface BuildController extends XamlBuildControllerReference {
    _links?: any;
    /**
     * The date the controller was created.
     */
    createdDate?: Date;
    /**
     * The description of the controller.
     */
    description?: string;
    /**
     * Indicates whether the controller is enabled.
     */
    enabled?: boolean;
    /**
     * The status of the controller.
     */
    status?: ControllerStatus;
    /**
     * The date the controller was last updated.
     */
    updatedDate?: Date;
    /**
     * The controller's URI.
     */
    uri?: string;
}

/**
 * Represents a build definition.
 */
export interface BuildDefinition extends BuildDefinitionReference {
    /**
     * Indicates whether badges are enabled for this definition.
     */
    badgeEnabled?: boolean;
    /**
     * The build number format.
     */
    buildNumberFormat?: string;
    /**
     * A save-time comment for the definition.
     */
    comment?: string;
    demands?: Demand[];
    /**
     * The description.
     */
    description?: string;
    /**
     * The drop location for the definition.
     */
    dropLocation?: string;
    /**
     * The job authorization scope for builds queued against this definition.
     */
    jobAuthorizationScope?: BuildAuthorizationScope;
    /**
     * The job cancel timeout (in minutes) for builds cancelled by user for this definition.
     */
    jobCancelTimeoutInMinutes?: number;
    /**
     * The job execution timeout (in minutes) for builds queued against this definition.
     */
    jobTimeoutInMinutes?: number;
    options?: BuildOption[];
    /**
     * The build process.
     */
    process?: BuildProcess;
    /**
     * The process parameters for this definition.
     */
    processParameters?: DistributedTaskCommonInterfaces.ProcessParameters;
    properties?: any;
    /**
     * The repository.
     */
    repository?: BuildRepository;
    retentionRules?: RetentionPolicy[];
    tags?: string[];
    triggers?: BuildTrigger[];
    variableGroups?: VariableGroup[];
    variables?: { [key: string] : BuildDefinitionVariable; };
}

/**
 * For back-compat with extensions that use the old Steps format instead of Process and Phases
 */
export interface BuildDefinition3_2 extends BuildDefinitionReference3_2 {
    /**
     * Indicates whether badges are enabled for this definition
     */
    badgeEnabled?: boolean;
    build?: BuildDefinitionStep[];
    /**
     * The build number format
     */
    buildNumberFormat?: string;
    /**
     * The comment entered when saving the definition
     */
    comment?: string;
    demands?: Demand[];
    /**
     * The description
     */
    description?: string;
    /**
     * The drop location for the definition
     */
    dropLocation?: string;
    /**
     * The job authorization scope for builds which are queued against this definition
     */
    jobAuthorizationScope?: BuildAuthorizationScope;
    /**
     * The job cancel timeout in minutes for builds which are cancelled by user for this definition
     */
    jobCancelTimeoutInMinutes?: number;
    /**
     * The job execution timeout in minutes for builds which are queued against this definition
     */
    jobTimeoutInMinutes?: number;
    latestBuild?: Build;
    latestCompletedBuild?: Build;
    options?: BuildOption[];
    /**
     * Process Parameters
     */
    processParameters?: DistributedTaskCommonInterfaces.ProcessParameters;
    properties?: any;
    /**
     * The repository
     */
    repository?: BuildRepository;
    retentionRules?: RetentionPolicy[];
    tags?: string[];
    triggers?: BuildTrigger[];
    variables?: { [key: string] : BuildDefinitionVariable; };
}

/**
 * Represents a reference to a build definition.
 */
export interface BuildDefinitionReference extends DefinitionReference {
    _links?: any;
    /**
     * The author of the definition.
     */
    authoredBy?: VSSInterfaces.IdentityRef;
    /**
     * A reference to the definition that this definition is a draft of, if this is a draft definition.
     */
    draftOf?: DefinitionReference;
    /**
     * The list of drafts associated with this definition, if this is not a draft definition.
     */
    drafts?: DefinitionReference[];
    latestBuild?: Build;
    latestCompletedBuild?: Build;
    metrics?: BuildMetric[];
    /**
     * The quality of the definition document (draft, etc.)
     */
    quality?: DefinitionQuality;
    /**
     * The default queue for builds run against this definition.
     */
    queue?: AgentPoolQueue;
}

/**
 * For back-compat with extensions that use the old Steps format instead of Process and Phases
 */
export interface BuildDefinitionReference3_2 extends DefinitionReference {
    _links?: any;
    /**
     * The author of the definition.
     */
    authoredBy?: VSSInterfaces.IdentityRef;
    /**
     * A reference to the definition that this definition is a draft of, if this is a draft definition.
     */
    draftOf?: DefinitionReference;
    /**
     * The list of drafts associated with this definition, if this is not a draft definition.
     */
    drafts?: DefinitionReference[];
    metrics?: BuildMetric[];
    /**
     * The quality of the definition document (draft, etc.)
     */
    quality?: DefinitionQuality;
    /**
     * The default queue for builds run against this definition.
     */
    queue?: AgentPoolQueue;
}

/**
 * Represents a revision of a build definition.
 */
export interface BuildDefinitionRevision {
    /**
     * The identity of the person or process that changed the definition.
     */
    changedBy?: VSSInterfaces.IdentityRef;
    /**
     * The date and time that the definition was changed.
     */
    changedDate?: Date;
    /**
     * The change type (add, edit, delete).
     */
    changeType?: AuditAction;
    /**
     * The comment associated with the change.
     */
    comment?: string;
    /**
     * A link to the definition at this revision.
     */
    definitionUrl?: string;
    /**
     * The name of the definition.
     */
    name?: string;
    /**
     * The revision number.
     */
    revision?: number;
}

export interface BuildDefinitionSourceProvider {
    /**
     * Uri of the associated definition
     */
    definitionUri?: string;
    /**
     * fields associated with this build definition
     */
    fields?: { [key: string] : string; };
    /**
     * Id of this source provider
     */
    id?: number;
    /**
     * The lst time this source provider was modified
     */
    lastModified?: Date;
    /**
     * Name of the source provider
     */
    name?: string;
    /**
     * Which trigger types are supported by this definition source provider
     */
    supportedTriggerTypes?: DefinitionTriggerType;
}

/**
 * Represents a step in a build phase.
 */
export interface BuildDefinitionStep {
    /**
     * Indicates whether this step should run even if a previous step fails.
     */
    alwaysRun?: boolean;
    /**
     * A condition that determines whether this step should run.
     */
    condition?: string;
    /**
     * Indicates whether the phase should continue even if this step fails.
     */
    continueOnError?: boolean;
    /**
     * The display name for this step.
     */
    displayName?: string;
    /**
     * Indicates whether the step is enabled.
     */
    enabled?: boolean;
    environment?: { [key: string] : string; };
    inputs?: { [key: string] : string; };
    /**
     * The reference name for this step.
     */
    refName?: string;
    /**
     * The task associated with this step.
     */
    task: TaskDefinitionReference;
    /**
     * The time, in minutes, that this step is allowed to run.
     */
    timeoutInMinutes?: number;
}

/**
 * Represents a template from which new build definitions can be created.
 */
export interface BuildDefinitionTemplate {
    /**
     * Indicates whether the template can be deleted.
     */
    canDelete?: boolean;
    /**
     * The template category.
     */
    category?: string;
    /**
     * An optional hosted agent queue for the template to use by default.
     */
    defaultHostedQueue?: string;
    /**
     * A description of the template.
     */
    description?: string;
    icons?: { [key: string] : string; };
    /**
     * The ID of the task whose icon is used when showing this template in the UI.
     */
    iconTaskId?: string;
    /**
     * The ID of the template.
     */
    id: string;
    /**
     * The name of the template.
     */
    name: string;
    /**
     * The actual template.
     */
    template?: BuildDefinition;
}

/**
 * For back-compat with extensions that use the old Steps format instead of Process and Phases
 */
export interface BuildDefinitionTemplate3_2 {
    canDelete?: boolean;
    category?: string;
    defaultHostedQueue?: string;
    description?: string;
    icons?: { [key: string] : string; };
    iconTaskId?: string;
    id: string;
    name: string;
    template?: BuildDefinition3_2;
}

/**
 * Represents a variable used by a build definition.
 */
export interface BuildDefinitionVariable {
    /**
     * Indicates whether the value can be set at queue time.
     */
    allowOverride?: boolean;
    /**
     * Indicates whether the variable's value is a secret.
     */
    isSecret?: boolean;
    /**
     * The value of the variable.
     */
    value?: string;
}

export interface BuildDeletedEvent extends RealtimeBuildEvent {
    build: Build;
}

export interface BuildDeployment {
    deployment?: BuildSummary;
    sourceBuild?: XamlBuildReference;
}

export interface BuildEvent {
    data?: string[];
    identifier?: string;
}

/**
 * Represents a build log.
 */
export interface BuildLog extends BuildLogReference {
    /**
     * The date and time the log was created.
     */
    createdOn?: Date;
    /**
     * The date and time the log was last changed.
     */
    lastChangedOn?: Date;
    /**
     * The number of lines in the log.
     */
    lineCount?: number;
}

/**
 * Represents a reference to a build log.
 */
export interface BuildLogReference {
    /**
     * The ID of the log.
     */
    id?: number;
    /**
     * The type of the log location.
     */
    type?: string;
    /**
     * A full link to the log resource.
     */
    url?: string;
}

/**
 * Represents metadata about builds in the system.
 */
export interface BuildMetric {
    /**
     * The date for the scope.
     */
    date?: Date;
    /**
     * The value.
     */
    intValue?: number;
    /**
     * The name of the metric.
     */
    name?: string;
    /**
     * The scope.
     */
    scope?: string;
}

/**
 * Represents the application of an optional behavior to a build definition.
 */
export interface BuildOption {
    /**
     * A reference to the build option.
     */
    definition: BuildOptionDefinitionReference;
    /**
     * Indicates whether the behavior is enabled.
     */
    enabled?: boolean;
    inputs?: { [key: string] : string; };
}

/**
 * Represents an optional behavior that can be applied to a build definition.
 */
export interface BuildOptionDefinition extends BuildOptionDefinitionReference {
    /**
     * The description.
     */
    description?: string;
    /**
     * The list of input groups defined for the build option.
     */
    groups?: BuildOptionGroupDefinition[];
    /**
     * The list of inputs defined for the build option.
     */
    inputs?: BuildOptionInputDefinition[];
    /**
     * The name of the build option.
     */
    name?: string;
    /**
     * A value that indicates the relative order in which the behavior should be applied.
     */
    ordinal?: number;
}

/**
 * Represents a reference to a build option definition.
 */
export interface BuildOptionDefinitionReference {
    /**
     * The ID of the referenced build option.
     */
    id: string;
}

/**
 * Represents a group of inputs for a build option.
 */
export interface BuildOptionGroupDefinition {
    /**
     * The name of the group to display in the UI.
     */
    displayName?: string;
    /**
     * Indicates whether the group is initially displayed as expanded in the UI.
     */
    isExpanded?: boolean;
    /**
     * The internal name of the group.
     */
    name?: string;
}

/**
 * Represents an input for a build option.
 */
export interface BuildOptionInputDefinition {
    /**
     * The default value.
     */
    defaultValue?: string;
    /**
     * The name of the input group that this input belongs to.
     */
    groupName?: string;
    help?: { [key: string] : string; };
    /**
     * The label for the input.
     */
    label?: string;
    /**
     * The name of the input.
     */
    name?: string;
    options?: { [key: string] : string; };
    /**
     * Indicates whether the input is required to have a value.
     */
    required?: boolean;
    /**
     * Indicates the type of the input value.
     */
    type?: BuildOptionInputType;
    /**
     * The rule that is applied to determine whether the input is visible in the UI.
     */
    visibleRule?: string;
}

export enum BuildOptionInputType {
    String = 0,
    Boolean = 1,
    StringList = 2,
    Radio = 3,
    PickList = 4,
    MultiLine = 5,
    BranchFilter = 6,
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

/**
 * Represents a build process.
 */
export interface BuildProcess {
    /**
     * The type of the process.
     */
    type?: number;
}

/**
 * Represents resources used by a build process.
 */
export interface BuildProcessResources {
    endpoints?: ServiceEndpointReference[];
    files?: SecureFileReference[];
    queues?: AgentPoolQueueReference[];
    variableGroups?: VariableGroupReference[];
}

export interface BuildProcessTemplate {
    description?: string;
    fileExists?: boolean;
    id?: number;
    parameters?: string;
    serverPath?: string;
    supportedReasons?: BuildReason;
    teamProject?: string;
    templateType?: ProcessTemplateType;
    url?: string;
    version?: string;
}

/**
 * Specifies the desired ordering of builds.
 */
export enum BuildQueryOrder {
    /**
     * Order by finish time ascending.
     */
    FinishTimeAscending = 2,
    /**
     * Order by finish time descending.
     */
    FinishTimeDescending = 3,
    /**
     * Order by queue time descending.
     */
    QueueTimeDescending = 4,
    /**
     * Order by queue time ascending.
     */
    QueueTimeAscending = 5,
    /**
     * Order by start time descending.
     */
    StartTimeDescending = 6,
    /**
     * Order by start time ascending.
     */
    StartTimeAscending = 7,
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
     * The build was started for the trigger TriggerType.ScheduleForced.
     */
    ScheduleForced = 16,
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
     * The build was started when another build completed.
     */
    BuildCompletion = 512,
    /**
     * The build was triggered for retention policy purposes.
     */
    Triggered = 943,
    /**
     * All reasons.
     */
    All = 1007,
}

/**
 * Represents a reference to a build.
 */
export interface BuildReference {
    _links?: any;
    /**
     * The build number.
     */
    buildNumber?: string;
    /**
     * Indicates whether the build has been deleted.
     */
    deleted?: boolean;
    /**
     * The time that the build was completed.
     */
    finishTime?: Date;
    /**
     * The ID of the build.
     */
    id?: number;
    /**
     * The time that the build was queued.
     */
    queueTime?: Date;
    /**
     * The identity on whose behalf the build was queued.
     */
    requestedFor?: VSSInterfaces.IdentityRef;
    /**
     * The build result.
     */
    result?: BuildResult;
    /**
     * The time that the build was started.
     */
    startTime?: Date;
    /**
     * The build status.
     */
    status?: BuildStatus;
}

/**
 * Represents information about a build report.
 */
export interface BuildReportMetadata {
    /**
     * The Id of the build.
     */
    buildId?: number;
    /**
     * The content of the report.
     */
    content?: string;
    /**
     * The type of the report.
     */
    type?: string;
}

/**
 * Represents a repository used by a build definition.
 */
export interface BuildRepository {
    /**
     * Indicates whether to checkout submodules.
     */
    checkoutSubmodules?: boolean;
    /**
     * Indicates whether to clean the target folder when getting code from the repository.
     */
    clean?: string;
    /**
     * The name of the default branch.
     */
    defaultBranch?: string;
    /**
     * The ID of the repository.
     */
    id?: string;
    /**
     * The friendly name of the repository.
     */
    name?: string;
    properties?: { [key: string] : string; };
    /**
     * The root folder.
     */
    rootFolder?: string;
    /**
     * The type of the repository.
     */
    type?: string;
    /**
     * The URL of the repository.
     */
    url?: string;
}

/**
 * Represents the result of validating a build request.
 */
export interface BuildRequestValidationResult {
    /**
     * The message associated with the result.
     */
    message?: string;
    /**
     * The result.
     */
    result?: ValidationResult;
}

/**
 * Represents information about resources used by builds in the system.
 */
export interface BuildResourceUsage {
    /**
     * The number of build agents.
     */
    distributedTaskAgents?: number;
    /**
     * The number of paid private agent slots.
     */
    paidPrivateAgentSlots?: number;
    /**
     * The total usage.
     */
    totalUsage?: number;
    /**
     * The number of XAML controllers.
     */
    xamlControllers?: number;
}

/**
 * This is not a Flags enum because we don't want to set multiple statuses on a build. However, when adding values, please stick to powers of 2 as if it were a Flags enum This will ensure that things that key off multiple result types (like labelling sources) continue to work
 */
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

export interface BuildsDeletedEvent extends BuildsDeletedEvent1 {
}

export interface BuildsDeletedEvent1 {
    buildIds?: number[];
    /**
     * The ID of the definition.
     */
    definitionId?: number;
    /**
     * The ID of the project.
     */
    projectId?: string;
}

export interface BuildServer {
    agents?: BuildAgentReference[];
    controller?: XamlBuildControllerReference;
    id?: number;
    isVirtual?: boolean;
    messageQueueUrl?: string;
    name?: string;
    requireClientCertificates?: boolean;
    status?: ServiceHostStatus;
    statusChangedDate?: Date;
    uri?: string;
    url?: string;
    version?: number;
}

/**
 * Represents system-wide build settings.
 */
export interface BuildSettings {
    /**
     * The number of days to keep records of deleted builds.
     */
    daysToKeepDeletedBuildsBeforeDestroy?: number;
    /**
     * The default retention policy.
     */
    defaultRetentionPolicy?: RetentionPolicy;
    /**
     * The maximum retention policy.
     */
    maximumRetentionPolicy?: RetentionPolicy;
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
    build?: XamlBuildReference;
    finishTime?: Date;
    keepForever?: boolean;
    quality?: string;
    reason?: BuildReason;
    requestedFor?: VSSInterfaces.IdentityRef;
    startTime?: Date;
    status?: BuildStatus;
}

export interface BuildTagsAddedEvent extends BuildUpdatedEvent {
    allTags: string[];
    newTags: string[];
}

/**
 * Represents a trigger for a buld definition.
 */
export interface BuildTrigger {
    /**
     * The type of the trigger.
     */
    triggerType?: DefinitionTriggerType;
}

export interface BuildUpdatedEvent extends RealtimeBuildEvent {
    build: Build;
}

/**
 * Represents a workspace mapping.
 */
export interface BuildWorkspace {
    mappings?: MappingDetails[];
}

/**
 * Represents a change associated with a build.
 */
export interface Change {
    /**
     * The author of the change.
     */
    author?: VSSInterfaces.IdentityRef;
    /**
     * The location of a user-friendly representation of the resource.
     */
    displayUri?: string;
    /**
     * The identifier for the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset ID.
     */
    id?: string;
    /**
     * The location of the full representation of the resource.
     */
    location?: string;
    /**
     * The description of the change. This might be a commit message or changeset description.
     */
    message?: string;
    /**
     * Indicates whether the message was truncated.
     */
    messageTruncated?: boolean;
    /**
     * The person or process that pushed the change.
     */
    pusher?: string;
    /**
     * The timestamp for the change.
     */
    timestamp?: Date;
    /**
     * The type of change. "commit", "changeset", etc.
     */
    type?: string;
}

export interface ConsoleLogEvent extends RealtimeBuildEvent {
    lines?: string[];
    stepRecordId?: string;
    timelineId: string;
    timelineRecordId: string;
}

export interface ContinuousDeploymentDefinition {
    /**
     * The connected service associated with the continuous deployment
     */
    connectedService?: TfsCoreInterfaces.WebApiConnectedServiceRef;
    /**
     * The definition associated with the continuous deployment
     */
    definition?: XamlDefinitionReference;
    gitBranch?: string;
    hostedServiceName?: string;
    project?: TfsCoreInterfaces.TeamProjectReference;
    repositoryId?: string;
    storageAccountName?: string;
    subscriptionId?: string;
    website?: string;
    webspace?: string;
}

/**
 * Represents a continuous integration (CI) trigger.
 */
export interface ContinuousIntegrationTrigger extends BuildTrigger {
    /**
     * Indicates whether changes should be batched while another CI build is running.
     */
    batchChanges?: boolean;
    branchFilters?: string[];
    /**
     * The maximum number of simultaneous CI builds that will run per branch.
     */
    maxConcurrentBuildsPerBranch?: number;
    pathFilters?: string[];
    /**
     * The polling interval, in seconds.
     */
    pollingInterval?: number;
    /**
     * The ID of the job used to poll an external repository.
     */
    pollingJobId?: string;
    settingsSourceType?: number;
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

/**
 * Specifies the desired ordering of definitions.
 */
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
 * Represents a reference to a definition.
 */
export interface DefinitionReference {
    /**
     * The date this version of the definition was created.
     */
    createdDate?: Date;
    /**
     * The ID of the referenced definition.
     */
    id?: number;
    /**
     * The name of the referenced definition.
     */
    name?: string;
    /**
     * The folder path of the definition.
     */
    path?: string;
    /**
     * A reference to the project.
     */
    project?: TfsCoreInterfaces.TeamProjectReference;
    /**
     * A value that indicates whether builds can be queued against this definition.
     */
    queueStatus?: DefinitionQueueStatus;
    /**
     * The definition revision number.
     */
    revision?: number;
    /**
     * The type of the definition.
     */
    type?: DefinitionType;
    /**
     * The definition's URI.
     */
    uri?: string;
    /**
     * The REST URL of the definition.
     */
    url?: string;
}

export interface DefinitionResourceReference {
    /**
     * Indicates whether the resource is authorized for use.
     */
    authorized?: boolean;
    /**
     * The id of the resource.
     */
    id?: string;
    /**
     * A friendly name for the resource.
     */
    name?: string;
    /**
     * The type of the resource.
     */
    type?: string;
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
     * A build should be triggered when another build completes.
     */
    BuildCompletion = 128,
    /**
     * All types.
     */
    All = 255,
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
 * Represents a demand used by a definition or build.
 */
export interface Demand {
    /**
     * The name of the capability referenced by the demand.
     */
    name?: string;
    /**
     * The demanded value.
     */
    value?: string;
}

/**
 * Represents a dependency.
 */
export interface Dependency {
    /**
     * The event. The dependency is satisfied when the referenced object emits this event.
     */
    event?: string;
    /**
     * The scope. This names the object referenced by the dependency.
     */
    scope?: string;
}

/**
 * Represents the data from the build information nodes for type "DeploymentInformation" for xaml builds
 */
export interface Deployment {
    type?: string;
}

/**
 * Deployment information for type "Build"
 */
export interface DeploymentBuild extends Deployment {
    buildId?: number;
}

/**
 * Deployment information for type "Deploy"
 */
export interface DeploymentDeploy extends Deployment {
    message?: string;
}

/**
 * Deployment information for type "Test"
 */
export interface DeploymentTest extends Deployment {
    runId?: number;
}

/**
 * Represents a build process supported by the build definition designer.
 */
export interface DesignerProcess extends BuildProcess {
    phases?: Phase[];
    /**
     * The target for the build process.
     */
    target?: DesignerProcessTarget;
}

/**
 * Represents the target for the build process.
 */
export interface DesignerProcessTarget {
    /**
     * Agent specification for the build process.
     */
    agentSpecification?: AgentSpecification;
}

export interface DockerProcess extends BuildProcess {
    target?: DockerProcessTarget;
}

/**
 * Represents the target for the docker build process.
 */
export interface DockerProcessTarget extends DesignerProcessTarget {
}

/**
 * Represents a folder that contains build definitions.
 */
export interface Folder {
    /**
     * The process or person who created the folder.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * The date the folder was created.
     */
    createdOn?: Date;
    /**
     * The description.
     */
    description?: string;
    /**
     * The process or person that last changed the folder.
     */
    lastChangedBy?: VSSInterfaces.IdentityRef;
    /**
     * The date the folder was last changed.
     */
    lastChangedDate?: Date;
    /**
     * The full path.
     */
    path?: string;
    /**
     * The project.
     */
    project?: TfsCoreInterfaces.TeamProjectReference;
}

/**
 * Specifies the desired ordering of folders.
 */
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

/**
 * Represents the ability to build forks of the selected repository.
 */
export interface Forks {
    /**
     * Indicates whether a build should use secrets when building forks of the selected repository.
     */
    allowSecrets?: boolean;
    /**
     * Indicates whether the trigger should queue builds for forks of the selected repository.
     */
    enabled?: boolean;
}

/**
 * Represents a gated check-in trigger.
 */
export interface GatedCheckInTrigger extends BuildTrigger {
    pathFilters?: string[];
    /**
     * Indicates whether CI triggers should run after the gated check-in succeeds.
     */
    runContinuousIntegration?: boolean;
    /**
     * Indicates whether to take workspace mappings into account when determining whether a build should run.
     */
    useWorkspaceMappings?: boolean;
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
    fields?: { [key: string] : string; };
    /**
     * Process or person that last modified this node
     */
    lastModifiedBy?: string;
    /**
     * Date this node was last modified
     */
    lastModifiedDate?: Date;
    /**
     * Node Id of this information node
     */
    nodeId?: number;
    /**
     * Id of parent node (xml tree)
     */
    parentId?: number;
    /**
     * The type of the information node
     */
    type?: string;
}

/**
 * Represents an issue (error, warning) associated with a build.
 */
export interface Issue {
    /**
     * The category.
     */
    category?: string;
    data?: { [key: string] : string; };
    /**
     * A description of the issue.
     */
    message?: string;
    /**
     * The type (error, warning) of the issue.
     */
    type?: IssueType;
}

export enum IssueType {
    Error = 1,
    Warning = 2,
}

/**
 * Represents an entry in a workspace mapping.
 */
export interface MappingDetails {
    /**
     * The local path.
     */
    localPath?: string;
    /**
     * The mapping type.
     */
    mappingType?: string;
    /**
     * The server path.
     */
    serverPath?: string;
}

/**
 * Represents options for running a phase against multiple agents.
 */
export interface MultipleAgentExecutionOptions extends AgentTargetExecutionOptions {
    /**
     * Indicates whether failure on one agent should prevent the phase from running on other agents.
     */
    continueOnError?: boolean;
    /**
     * The maximum number of agents to use simultaneously.
     */
    maxConcurrency?: number;
}

/**
 * Represents a phase of a build definition.
 */
export interface Phase {
    /**
     * The condition that must be true for this phase to execute.
     */
    condition?: string;
    dependencies?: Dependency[];
    /**
     * The job authorization scope for builds queued against this definition.
     */
    jobAuthorizationScope?: BuildAuthorizationScope;
    /**
     * The cancellation timeout, in minutes, for builds queued against this definition.
     */
    jobCancelTimeoutInMinutes?: number;
    /**
     * The job execution timeout, in minutes, for builds queued against this definition.
     */
    jobTimeoutInMinutes?: number;
    /**
     * The name of the phase.
     */
    name?: string;
    /**
     * The unique ref name of the phase.
     */
    refName?: string;
    steps?: BuildDefinitionStep[];
    /**
     * The target (agent, server, etc.) for this phase.
     */
    target?: PhaseTarget;
    variables?: { [key: string] : BuildDefinitionVariable; };
}

/**
 * Represents the target of a phase.
 */
export interface PhaseTarget {
    /**
     * The type of the target.
     */
    type?: number;
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

/**
 * Represents a pull request object.  These are retrieved from Source Providers.
 */
export interface PullRequest {
    /**
     * The links to other objects related to this object.
     */
    _links?: any;
    /**
     * Author of the pull request.
     */
    author?: VSSInterfaces.IdentityRef;
    /**
     * Current state of the pull request, e.g. open, merged, closed, conflicts, etc.
     */
    currentState?: string;
    /**
     * Description for the pull request.
     */
    description?: string;
    /**
     * Unique identifier for the pull request
     */
    id?: string;
    /**
     * The name of the provider this pull request is associated with.
     */
    providerName?: string;
    /**
     * Source branch ref of this pull request
     */
    sourceBranchRef?: string;
    /**
     * Owner of the source repository of this pull request
     */
    sourceRepositoryOwner?: string;
    /**
     * Target branch ref of this pull request
     */
    targetBranchRef?: string;
    /**
     * Owner of the target repository of this pull request
     */
    targetRepositoryOwner?: string;
    /**
     * Title of the pull request.
     */
    title?: string;
}

/**
 * Represents a pull request trigger.
 */
export interface PullRequestTrigger extends BuildTrigger {
    /**
     * Indicates if an update to a PR should delete current in-progress builds.
     */
    autoCancel?: boolean;
    branchFilters?: string[];
    forks?: Forks;
    isCommentRequiredForPullRequest?: boolean;
    pathFilters?: string[];
    requireCommentsForNonTeamMembersOnly?: boolean;
    settingsSourceType?: number;
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

/**
 * Represents a repository's webhook returned from a source provider.
 */
export interface RepositoryWebhook {
    /**
     * The friendly name of the repository.
     */
    name?: string;
    types?: DefinitionTriggerType[];
    /**
     * The URL of the repository.
     */
    url?: string;
}

/**
 * Represents a reference to a resource.
 */
export interface ResourceReference {
    /**
     * An alias to be used when referencing the resource.
     */
    alias?: string;
}

export enum ResultSet {
    /**
     * Include all repositories
     */
    All = 0,
    /**
     * Include most relevant repositories for user
     */
    Top = 1,
}

/**
 * Represents a retention policy for a build definition.
 */
export interface RetentionPolicy {
    artifacts?: string[];
    artifactTypesToDelete?: string[];
    branches?: string[];
    /**
     * The number of days to keep builds.
     */
    daysToKeep?: number;
    /**
     * Indicates whether the build record itself should be deleted.
     */
    deleteBuildRecord?: boolean;
    /**
     * Indicates whether to delete test results associated with the build.
     */
    deleteTestResults?: boolean;
    /**
     * The minimum number of builds to keep.
     */
    minimumToKeep?: number;
}

export interface Schedule {
    branchFilters?: string[];
    /**
     * Days for a build (flags enum for days of the week)
     */
    daysToBuild?: ScheduleDays;
    /**
     * The Job Id of the Scheduled job that will queue the scheduled build. Since a single trigger can have multiple schedules and we want a single job to process a single schedule (since each schedule has a list of branches to build), the schedule itself needs to define the Job Id. This value will be filled in when a definition is added or updated.  The UI does not provide it or use it.
     */
    scheduleJobId?: string;
    /**
     * Flag to determine if this schedule should only build if the associated source has been changed.
     */
    scheduleOnlyWithChanges?: boolean;
    /**
     * Local timezone hour to start
     */
    startHours?: number;
    /**
     * Local timezone minute to start
     */
    startMinutes?: number;
    /**
     * Time zone of the build schedule (String representation of the time zone ID)
     */
    timeZoneId?: string;
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

/**
 * Represents a schedule trigger.
 */
export interface ScheduleTrigger extends BuildTrigger {
    schedules?: Schedule[];
}

/**
 * Represents a reference to a secure file.
 */
export interface SecureFileReference extends ResourceReference {
    /**
     * The ID of the secure file.
     */
    id?: string;
}

/**
 * Represents a phase target that runs on the server.
 */
export interface ServerTarget extends PhaseTarget {
    /**
     * The execution options.
     */
    executionOptions?: ServerTargetExecutionOptions;
}

/**
 * Represents options for running a phase on the server.
 */
export interface ServerTargetExecutionOptions {
    /**
     * The type.
     */
    type?: number;
}

/**
 * Represents a referenec to a service endpoint.
 */
export interface ServiceEndpointReference extends ResourceReference {
    /**
     * The ID of the service endpoint.
     */
    id?: string;
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

export interface SourceProviderAttributes {
    /**
     * The name of the source provider.
     */
    name?: string;
    /**
     * The capabilities supported by this source provider.
     */
    supportedCapabilities?: { [key: string] : boolean; };
    /**
     * The types of triggers supported by this source provider.
     */
    supportedTriggers?: SupportedTrigger[];
}

export enum SourceProviderAvailability {
    /**
     * The source provider is available in the hosted environment.
     */
    Hosted = 1,
    /**
     * The source provider is available in the on-premises environment.
     */
    OnPremises = 2,
    /**
     * The source provider is available in all environments.
     */
    All = 3,
}

/**
 * Represents a work item related to some source item. These are retrieved from Source Providers.
 */
export interface SourceRelatedWorkItem {
    _links?: any;
    /**
     * Identity ref for the person that the work item is assigned to.
     */
    assignedTo?: VSSInterfaces.IdentityRef;
    /**
     * Current state of the work item, e.g. Active, Resolved, Closed, etc.
     */
    currentState?: string;
    /**
     * Long description for the work item.
     */
    description?: string;
    /**
     * Unique identifier for the work item
     */
    id?: string;
    /**
     * The name of the provider the work item is associated with.
     */
    providerName?: string;
    /**
     * Short name for the work item.
     */
    title?: string;
    /**
     * Type of work item, e.g. Bug, Task, User Story, etc.
     */
    type?: string;
}

/**
 * A set of repositories returned from the source provider.
 */
export interface SourceRepositories {
    /**
     * A token used to continue this paged request; 'null' if the request is complete
     */
    continuationToken?: string;
    /**
     * The number of repositories requested for each page
     */
    pageLength?: number;
    /**
     * A list of repositories
     */
    repositories?: SourceRepository[];
    /**
     * The total number of pages, or '-1' if unknown
     */
    totalPageCount?: number;
}

/**
 * Represents a repository returned from a source provider.
 */
export interface SourceRepository {
    /**
     * The name of the default branch.
     */
    defaultBranch?: string;
    /**
     * The full name of the repository.
     */
    fullName?: string;
    /**
     * The ID of the repository.
     */
    id?: string;
    /**
     * The friendly name of the repository.
     */
    name?: string;
    properties?: { [key: string] : string; };
    /**
     * The name of the source provider the repository is from.
     */
    sourceProviderName?: string;
    /**
     * The URL of the repository.
     */
    url?: string;
}

/**
 * Represents an item in a repository from a source provider.
 */
export interface SourceRepositoryItem {
    /**
     * Whether the item is able to have sub-items (e.g., is a folder).
     */
    isContainer?: boolean;
    /**
     * The full path of the item, relative to the root of the repository.
     */
    path?: string;
    /**
     * The type of the item (folder, file, etc).
     */
    type?: string;
    /**
     * The URL of the item.
     */
    url?: string;
}

export interface SupportedTrigger {
    /**
     * The default interval to wait between polls (only relevant when NotificationType is Polling).
     */
    defaultPollingInterval?: number;
    /**
     * How the trigger is notified of changes.
     */
    notificationType?: string;
    /**
     * The capabilities supported by this trigger.
     */
    supportedCapabilities?: { [key: string] : SupportLevel; };
    /**
     * The type of trigger.
     */
    type?: DefinitionTriggerType;
}

export enum SupportLevel {
    /**
     * The functionality is not supported.
     */
    Unsupported = 0,
    /**
     * The functionality is supported.
     */
    Supported = 1,
    /**
     * The functionality is required.
     */
    Required = 2,
}

/**
 * Represents a Subversion mapping entry.
 */
export interface SvnMappingDetails {
    /**
     * The depth.
     */
    depth?: number;
    /**
     * Indicates whether to ignore externals.
     */
    ignoreExternals?: boolean;
    /**
     * The local path.
     */
    localPath?: string;
    /**
     * The revision.
     */
    revision?: string;
    /**
     * The server path.
     */
    serverPath?: string;
}

/**
 * Represents a subversion workspace.
 */
export interface SvnWorkspace {
    mappings?: SvnMappingDetails[];
}

/**
 * Represents a reference to an agent pool.
 */
export interface TaskAgentPoolReference {
    /**
     * The pool ID.
     */
    id?: number;
    /**
     * A value indicating whether or not this pool is managed by the service.
     */
    isHosted?: boolean;
    /**
     * The pool name.
     */
    name?: string;
}

/**
 * A reference to a task definition.
 */
export interface TaskDefinitionReference {
    /**
     * The type of task (task or task group).
     */
    definitionType?: string;
    /**
     * The ID of the task.
     */
    id: string;
    /**
     * The version of the task.
     */
    versionSpec: string;
}

/**
 * Represents a reference to a plan group.
 */
export interface TaskOrchestrationPlanGroupReference {
    /**
     * The name of the plan group.
     */
    planGroup?: string;
    /**
     * The project ID.
     */
    projectId?: string;
}

export interface TaskOrchestrationPlanGroupsStartedEvent {
    planGroups: TaskOrchestrationPlanGroupReference[];
}

/**
 * Represents a reference to an orchestration plan.
 */
export interface TaskOrchestrationPlanReference {
    /**
     * The type of the plan.
     */
    orchestrationType?: number;
    /**
     * The ID of the plan.
     */
    planId?: string;
}

/**
 * Represents a reference to a task.
 */
export interface TaskReference {
    /**
     * The ID of the task definition.
     */
    id?: string;
    /**
     * The name of the task definition.
     */
    name?: string;
    /**
     * The version of the task definition.
     */
    version?: string;
}

export enum TaskResult {
    Succeeded = 0,
    SucceededWithIssues = 1,
    Failed = 2,
    Canceled = 3,
    Skipped = 4,
    Abandoned = 5,
}

/**
 * Represents the timeline of a build.
 */
export interface Timeline extends TimelineReference {
    /**
     * The process or person that last changed the timeline.
     */
    lastChangedBy?: string;
    /**
     * The time the timeline was last changed.
     */
    lastChangedOn?: Date;
    records?: TimelineRecord[];
}

export interface TimelineAttempt {
    /**
     * Gets or sets the attempt of the record.
     */
    attempt?: number;
    /**
     * Gets or sets the record identifier located within the specified timeline.
     */
    recordId?: string;
    /**
     * Gets or sets the timeline identifier which owns the record representing this attempt.
     */
    timelineId?: string;
}

/**
 * Represents an entry in a build's timeline.
 */
export interface TimelineRecord {
    _links?: any;
    /**
     * Attempt number of record.
     */
    attempt?: number;
    /**
     * The change ID.
     */
    changeId?: number;
    /**
     * A string that indicates the current operation.
     */
    currentOperation?: string;
    /**
     * A reference to a sub-timeline.
     */
    details?: TimelineReference;
    /**
     * The number of errors produced by this operation.
     */
    errorCount?: number;
    /**
     * The finish time.
     */
    finishTime?: Date;
    /**
     * The ID of the record.
     */
    id?: string;
    /**
     * String identifier that is consistent across attempts.
     */
    identifier?: string;
    issues?: Issue[];
    /**
     * The time the record was last modified.
     */
    lastModified?: Date;
    /**
     * A reference to the log produced by this operation.
     */
    log?: BuildLogReference;
    /**
     * The name.
     */
    name?: string;
    /**
     * An ordinal value relative to other records.
     */
    order?: number;
    /**
     * The ID of the record's parent.
     */
    parentId?: string;
    /**
     * The current completion percentage.
     */
    percentComplete?: number;
    previousAttempts?: TimelineAttempt[];
    /**
     * The result.
     */
    result?: TaskResult;
    /**
     * The result code.
     */
    resultCode?: string;
    /**
     * The start time.
     */
    startTime?: Date;
    /**
     * The state of the record.
     */
    state?: TimelineRecordState;
    /**
     * A reference to the task represented by this timeline record.
     */
    task?: TaskReference;
    /**
     * The type of the record.
     */
    type?: string;
    /**
     * The REST URL of the timeline record.
     */
    url?: string;
    /**
     * The number of warnings produced by this operation.
     */
    warningCount?: number;
    /**
     * The name of the agent running the operation.
     */
    workerName?: string;
}

export enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}

export interface TimelineRecordsUpdatedEvent extends RealtimeBuildEvent {
    timelineRecords: TimelineRecord[];
}

/**
 * Represents a reference to a timeline.
 */
export interface TimelineReference {
    /**
     * The change ID.
     */
    changeId?: number;
    /**
     * The ID of the timeline.
     */
    id?: string;
    /**
     * The REST URL of the timeline.
     */
    url?: string;
}

export enum ValidationResult {
    OK = 0,
    Warning = 1,
    Error = 2,
}

/**
 * Represents a variable group.
 */
export interface VariableGroup extends VariableGroupReference {
    /**
     * The description.
     */
    description?: string;
    /**
     * The name of the variable group.
     */
    name?: string;
    /**
     * The type of the variable group.
     */
    type?: string;
    variables?: { [key: string] : BuildDefinitionVariable; };
}

/**
 * Represents a reference to a variable group.
 */
export interface VariableGroupReference {
    /**
     * The Name of the variable group.
     */
    alias?: string;
    /**
     * The ID of the variable group.
     */
    id?: number;
}

/**
 * Represents options for running a phase based on values specified by a list of variables.
 */
export interface VariableMultipliersAgentExecutionOptions extends AgentTargetExecutionOptions {
    /**
     * Indicates whether failure on one agent should prevent the phase from running on other agents.
     */
    continueOnError?: boolean;
    /**
     * The maximum number of agents to use in parallel.
     */
    maxConcurrency?: number;
    multipliers?: string[];
}

/**
 * Represents options for running a phase based on values specified by a list of variables.
 */
export interface VariableMultipliersServerExecutionOptions extends ServerTargetExecutionOptions {
    /**
     * Indicates whether failure of one job should prevent the phase from running in other jobs.
     */
    continueOnError?: boolean;
    /**
     * The maximum number of server jobs to run in parallel.
     */
    maxConcurrency?: number;
    multipliers?: string[];
}

/**
 * Mapping for a workspace
 */
export interface WorkspaceMapping {
    /**
     * Uri of the associated definition
     */
    definitionUri?: string;
    /**
     * Depth of this mapping
     */
    depth?: number;
    /**
     * local location of the definition
     */
    localItem?: string;
    /**
     * type of workspace mapping
     */
    mappingType?: WorkspaceMappingType;
    /**
     * Server location of the definition
     */
    serverItem?: string;
    /**
     * Id of the workspace
     */
    workspaceId?: number;
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
    definitionUri?: string;
    /**
     * The identity that last modified this template
     */
    lastModifiedBy?: string;
    /**
     * The last time this template was modified
     */
    lastModifiedDate?: Date;
    /**
     * List of workspace mappings
     */
    mappings?: WorkspaceMapping[];
    /**
     * Id of the workspace for this template
     */
    workspaceId?: number;
}

export interface XamlBuildControllerReference {
    /**
     * Id of the resource
     */
    id?: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name?: string;
    /**
     * Full http link to the resource
     */
    url?: string;
}

export interface XamlBuildDefinition extends DefinitionReference {
    _links?: any;
    /**
     * Batch size of the definition
     */
    batchSize?: number;
    buildArgs?: string;
    /**
     * The continuous integration quiet period
     */
    continuousIntegrationQuietPeriod?: number;
    /**
     * The build controller
     */
    controller?: BuildController;
    /**
     * The date this definition was created
     */
    createdOn?: Date;
    /**
     * Default drop location for builds from this definition
     */
    defaultDropLocation?: string;
    /**
     * Description of the definition
     */
    description?: string;
    /**
     * The last build on this definition
     */
    lastBuild?: XamlBuildReference;
    /**
     * The repository
     */
    repository?: BuildRepository;
    /**
     * The reasons supported by the template
     */
    supportedReasons?: BuildReason;
    /**
     * How builds are triggered from this definition
     */
    triggerType?: DefinitionTriggerType;
}

export interface XamlBuildReference {
    /**
     * Id of the resource
     */
    id?: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name?: string;
    /**
     * Full http link to the resource
     */
    url?: string;
}

export interface XamlBuildServerReference {
    /**
     * Id of the resource
     */
    id?: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name?: string;
    /**
     * Full http link to the resource
     */
    url?: string;
}

export interface XamlDefinitionReference {
    /**
     * Id of the resource
     */
    id?: number;
    /**
     * Name of the linked resource (definition name, controller name, etc.)
     */
    name?: string;
    /**
     * Full http link to the resource
     */
    url?: string;
}

/**
 * Represents a YAML process.
 */
export interface YamlProcess extends BuildProcess {
    errors?: string[];
    /**
     * The resources used by the build definition.
     */
    resources?: BuildProcessResources;
    /**
     * The YAML filename.
     */
    yamlFilename?: string;
}

export var TypeInfo = {
    AgentStatus: {
        enumValues: {
            "unavailable": 0,
            "available": 1,
            "offline": 2
        }
    },
    AuditAction: {
        enumValues: {
            "add": 1,
            "update": 2,
            "delete": 3
        }
    },
    Build: <any>{
    },
    BuildAgent: <any>{
    },
    BuildAuthorizationScope: {
        enumValues: {
            "projectCollection": 1,
            "project": 2
        }
    },
    BuildCompletedEvent: <any>{
    },
    BuildCompletionTrigger: <any>{
    },
    BuildController: <any>{
    },
    BuildDefinition: <any>{
    },
    BuildDefinition3_2: <any>{
    },
    BuildDefinitionReference: <any>{
    },
    BuildDefinitionReference3_2: <any>{
    },
    BuildDefinitionRevision: <any>{
    },
    BuildDefinitionSourceProvider: <any>{
    },
    BuildDefinitionTemplate: <any>{
    },
    BuildDefinitionTemplate3_2: <any>{
    },
    BuildDeletedEvent: <any>{
    },
    BuildDeployment: <any>{
    },
    BuildLog: <any>{
    },
    BuildMetric: <any>{
    },
    BuildOptionDefinition: <any>{
    },
    BuildOptionInputDefinition: <any>{
    },
    BuildOptionInputType: {
        enumValues: {
            "string": 0,
            "boolean": 1,
            "stringList": 2,
            "radio": 3,
            "pickList": 4,
            "multiLine": 5,
            "branchFilter": 6
        }
    },
    BuildPhaseStatus: {
        enumValues: {
            "unknown": 0,
            "failed": 1,
            "succeeded": 2
        }
    },
    BuildProcessTemplate: <any>{
    },
    BuildQueryOrder: {
        enumValues: {
            "finishTimeAscending": 2,
            "finishTimeDescending": 3,
            "queueTimeDescending": 4,
            "queueTimeAscending": 5,
            "startTimeDescending": 6,
            "startTimeAscending": 7
        }
    },
    BuildQueuedEvent: <any>{
    },
    BuildReason: {
        enumValues: {
            "none": 0,
            "manual": 1,
            "individualCI": 2,
            "batchedCI": 4,
            "schedule": 8,
            "scheduleForced": 16,
            "userCreated": 32,
            "validateShelveset": 64,
            "checkInShelveset": 128,
            "pullRequest": 256,
            "buildCompletion": 512,
            "triggered": 943,
            "all": 1007
        }
    },
    BuildReference: <any>{
    },
    BuildRequestValidationResult: <any>{
    },
    BuildResult: {
        enumValues: {
            "none": 0,
            "succeeded": 2,
            "partiallySucceeded": 4,
            "failed": 8,
            "canceled": 32
        }
    },
    BuildServer: <any>{
    },
    BuildStatus: {
        enumValues: {
            "none": 0,
            "inProgress": 1,
            "completed": 2,
            "cancelling": 4,
            "postponed": 8,
            "notStarted": 32,
            "all": 47
        }
    },
    BuildSummary: <any>{
    },
    BuildTagsAddedEvent: <any>{
    },
    BuildTrigger: <any>{
    },
    BuildUpdatedEvent: <any>{
    },
    Change: <any>{
    },
    ContinuousDeploymentDefinition: <any>{
    },
    ContinuousIntegrationTrigger: <any>{
    },
    ControllerStatus: {
        enumValues: {
            "unavailable": 0,
            "available": 1,
            "offline": 2
        }
    },
    DefinitionQuality: {
        enumValues: {
            "definition": 1,
            "draft": 2
        }
    },
    DefinitionQueryOrder: {
        enumValues: {
            "none": 0,
            "lastModifiedAscending": 1,
            "lastModifiedDescending": 2,
            "definitionNameAscending": 3,
            "definitionNameDescending": 4
        }
    },
    DefinitionQueueStatus: {
        enumValues: {
            "enabled": 0,
            "paused": 1,
            "disabled": 2
        }
    },
    DefinitionReference: <any>{
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
            "buildCompletion": 128,
            "all": 255
        }
    },
    DefinitionType: {
        enumValues: {
            "xaml": 1,
            "build": 2
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
            "all": 31
        }
    },
    DesignerProcess: <any>{
    },
    Folder: <any>{
    },
    FolderQueryOrder: {
        enumValues: {
            "none": 0,
            "folderAscending": 1,
            "folderDescending": 2
        }
    },
    GatedCheckInTrigger: <any>{
    },
    GetOption: {
        enumValues: {
            "latestOnQueue": 0,
            "latestOnBuild": 1,
            "custom": 2
        }
    },
    InformationNode: <any>{
    },
    Issue: <any>{
    },
    IssueType: {
        enumValues: {
            "error": 1,
            "warning": 2
        }
    },
    Phase: <any>{
    },
    ProcessTemplateType: {
        enumValues: {
            "custom": 0,
            "default": 1,
            "upgrade": 2
        }
    },
    PullRequestTrigger: <any>{
    },
    QueryDeletedOption: {
        enumValues: {
            "excludeDeleted": 0,
            "includeDeleted": 1,
            "onlyDeleted": 2
        }
    },
    QueueOptions: {
        enumValues: {
            "none": 0,
            "doNotRun": 1
        }
    },
    QueuePriority: {
        enumValues: {
            "low": 5,
            "belowNormal": 4,
            "normal": 3,
            "aboveNormal": 2,
            "high": 1
        }
    },
    RepositoryCleanOptions: {
        enumValues: {
            "source": 0,
            "sourceAndOutputDir": 1,
            "sourceDir": 2,
            "allBuildDir": 3
        }
    },
    RepositoryWebhook: <any>{
    },
    ResultSet: {
        enumValues: {
            "all": 0,
            "top": 1
        }
    },
    Schedule: <any>{
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
            "all": 127
        }
    },
    ScheduleTrigger: <any>{
    },
    ServiceHostStatus: {
        enumValues: {
            "online": 1,
            "offline": 2
        }
    },
    SourceProviderAttributes: <any>{
    },
    SourceProviderAvailability: {
        enumValues: {
            "hosted": 1,
            "onPremises": 2,
            "all": 3
        }
    },
    SupportedTrigger: <any>{
    },
    SupportLevel: {
        enumValues: {
            "unsupported": 0,
            "supported": 1,
            "required": 2
        }
    },
    TaskResult: {
        enumValues: {
            "succeeded": 0,
            "succeededWithIssues": 1,
            "failed": 2,
            "canceled": 3,
            "skipped": 4,
            "abandoned": 5
        }
    },
    Timeline: <any>{
    },
    TimelineRecord: <any>{
    },
    TimelineRecordState: {
        enumValues: {
            "pending": 0,
            "inProgress": 1,
            "completed": 2
        }
    },
    TimelineRecordsUpdatedEvent: <any>{
    },
    ValidationResult: {
        enumValues: {
            "ok": 0,
            "warning": 1,
            "error": 2
        }
    },
    WorkspaceMapping: <any>{
    },
    WorkspaceMappingType: {
        enumValues: {
            "map": 0,
            "cloak": 1
        }
    },
    WorkspaceTemplate: <any>{
    },
    XamlBuildDefinition: <any>{
    },
};

TypeInfo.Build.fields = {
    controller: {
        typeInfo: TypeInfo.BuildController
    },
    definition: {
        typeInfo: TypeInfo.DefinitionReference
    },
    deletedDate: {
        isDate: true,
    },
    finishTime: {
        isDate: true,
    },
    lastChangedDate: {
        isDate: true,
    },
    priority: {
        enumType: TypeInfo.QueuePriority
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
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
    result: {
        enumType: TypeInfo.BuildResult
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.BuildStatus
    },
    triggeredByBuild: {
        typeInfo: TypeInfo.Build
    },
    validationResults: {
        isArray: true,
        typeInfo: TypeInfo.BuildRequestValidationResult
    }
};

TypeInfo.BuildAgent.fields = {
    createdDate: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.AgentStatus
    },
    updatedDate: {
        isDate: true,
    }
};

TypeInfo.BuildCompletedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    },
    changes: {
        isArray: true,
        typeInfo: TypeInfo.Change
    },
    testResults: {
        typeInfo: TFS_TestManagement_Contracts.TypeInfo.AggregatedResultsAnalysis
    },
    timelineRecords: {
        isArray: true,
        typeInfo: TypeInfo.TimelineRecord
    }
};

TypeInfo.BuildCompletionTrigger.fields = {
    definition: {
        typeInfo: TypeInfo.DefinitionReference
    },
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    }
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
    }
};

TypeInfo.BuildDefinition.fields = {
    createdDate: {
        isDate: true,
    },
    draftOf: {
        typeInfo: TypeInfo.DefinitionReference
    },
    drafts: {
        isArray: true,
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
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    quality: {
        enumType: TypeInfo.DefinitionQuality
    },
    queueStatus: {
        enumType: TypeInfo.DefinitionQueueStatus
    },
    triggers: {
        isArray: true,
        typeInfo: TypeInfo.BuildTrigger
    },
    type: {
        enumType: TypeInfo.DefinitionType
    }
};

TypeInfo.BuildDefinition3_2.fields = {
    createdDate: {
        isDate: true,
    },
    draftOf: {
        typeInfo: TypeInfo.DefinitionReference
    },
    drafts: {
        isArray: true,
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
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    quality: {
        enumType: TypeInfo.DefinitionQuality
    },
    queueStatus: {
        enumType: TypeInfo.DefinitionQueueStatus
    },
    triggers: {
        isArray: true,
        typeInfo: TypeInfo.BuildTrigger
    },
    type: {
        enumType: TypeInfo.DefinitionType
    }
};

TypeInfo.BuildDefinitionReference.fields = {
    createdDate: {
        isDate: true,
    },
    draftOf: {
        typeInfo: TypeInfo.DefinitionReference
    },
    drafts: {
        isArray: true,
        typeInfo: TypeInfo.DefinitionReference
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
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    quality: {
        enumType: TypeInfo.DefinitionQuality
    },
    queueStatus: {
        enumType: TypeInfo.DefinitionQueueStatus
    },
    type: {
        enumType: TypeInfo.DefinitionType
    }
};

TypeInfo.BuildDefinitionReference3_2.fields = {
    createdDate: {
        isDate: true,
    },
    draftOf: {
        typeInfo: TypeInfo.DefinitionReference
    },
    drafts: {
        isArray: true,
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
    queueStatus: {
        enumType: TypeInfo.DefinitionQueueStatus
    },
    type: {
        enumType: TypeInfo.DefinitionType
    }
};

TypeInfo.BuildDefinitionRevision.fields = {
    changedDate: {
        isDate: true,
    },
    changeType: {
        enumType: TypeInfo.AuditAction
    }
};

TypeInfo.BuildDefinitionSourceProvider.fields = {
    lastModified: {
        isDate: true,
    },
    supportedTriggerTypes: {
        enumType: TypeInfo.DefinitionTriggerType
    }
};

TypeInfo.BuildDefinitionTemplate.fields = {
    template: {
        typeInfo: TypeInfo.BuildDefinition
    }
};

TypeInfo.BuildDefinitionTemplate3_2.fields = {
    template: {
        typeInfo: TypeInfo.BuildDefinition3_2
    }
};

TypeInfo.BuildDeletedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    }
};

TypeInfo.BuildDeployment.fields = {
    deployment: {
        typeInfo: TypeInfo.BuildSummary
    }
};

TypeInfo.BuildLog.fields = {
    createdOn: {
        isDate: true,
    },
    lastChangedOn: {
        isDate: true,
    }
};

TypeInfo.BuildMetric.fields = {
    date: {
        isDate: true,
    }
};

TypeInfo.BuildOptionDefinition.fields = {
    inputs: {
        isArray: true,
        typeInfo: TypeInfo.BuildOptionInputDefinition
    }
};

TypeInfo.BuildOptionInputDefinition.fields = {
    type: {
        enumType: TypeInfo.BuildOptionInputType
    }
};

TypeInfo.BuildProcessTemplate.fields = {
    supportedReasons: {
        enumType: TypeInfo.BuildReason
    },
    templateType: {
        enumType: TypeInfo.ProcessTemplateType
    }
};

TypeInfo.BuildQueuedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    }
};

TypeInfo.BuildReference.fields = {
    finishTime: {
        isDate: true,
    },
    queueTime: {
        isDate: true,
    },
    result: {
        enumType: TypeInfo.BuildResult
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.BuildStatus
    }
};

TypeInfo.BuildRequestValidationResult.fields = {
    result: {
        enumType: TypeInfo.ValidationResult
    }
};

TypeInfo.BuildServer.fields = {
    status: {
        enumType: TypeInfo.ServiceHostStatus
    },
    statusChangedDate: {
        isDate: true,
    }
};

TypeInfo.BuildSummary.fields = {
    finishTime: {
        isDate: true,
    },
    reason: {
        enumType: TypeInfo.BuildReason
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.BuildStatus
    }
};

TypeInfo.BuildTagsAddedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    }
};

TypeInfo.BuildTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    }
};

TypeInfo.BuildUpdatedEvent.fields = {
    build: {
        typeInfo: TypeInfo.Build
    }
};

TypeInfo.Change.fields = {
    timestamp: {
        isDate: true,
    }
};

TypeInfo.ContinuousDeploymentDefinition.fields = {
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    }
};

TypeInfo.ContinuousIntegrationTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    }
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
    }
};

TypeInfo.DesignerProcess.fields = {
    phases: {
        isArray: true,
        typeInfo: TypeInfo.Phase
    }
};

TypeInfo.Folder.fields = {
    createdOn: {
        isDate: true,
    },
    lastChangedDate: {
        isDate: true,
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    }
};

TypeInfo.GatedCheckInTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    }
};

TypeInfo.InformationNode.fields = {
    lastModifiedDate: {
        isDate: true,
    }
};

TypeInfo.Issue.fields = {
    type: {
        enumType: TypeInfo.IssueType
    }
};

TypeInfo.Phase.fields = {
    jobAuthorizationScope: {
        enumType: TypeInfo.BuildAuthorizationScope
    }
};

TypeInfo.PullRequestTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    }
};

TypeInfo.RepositoryWebhook.fields = {
    types: {
        isArray: true,
        enumType: TypeInfo.DefinitionTriggerType
    }
};

TypeInfo.Schedule.fields = {
    daysToBuild: {
        enumType: TypeInfo.ScheduleDays
    }
};

TypeInfo.ScheduleTrigger.fields = {
    schedules: {
        isArray: true,
        typeInfo: TypeInfo.Schedule
    },
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    }
};

TypeInfo.SourceProviderAttributes.fields = {
    supportedTriggers: {
        isArray: true,
        typeInfo: TypeInfo.SupportedTrigger
    }
};

TypeInfo.SupportedTrigger.fields = {
    supportedCapabilities: {
        isDictionary: true,
        dictionaryValueEnumType: TypeInfo.SupportLevel
    },
    type: {
        enumType: TypeInfo.DefinitionTriggerType
    }
};

TypeInfo.Timeline.fields = {
    lastChangedOn: {
        isDate: true,
    },
    records: {
        isArray: true,
        typeInfo: TypeInfo.TimelineRecord
    }
};

TypeInfo.TimelineRecord.fields = {
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
    result: {
        enumType: TypeInfo.TaskResult
    },
    startTime: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.TimelineRecordState
    }
};

TypeInfo.TimelineRecordsUpdatedEvent.fields = {
    timelineRecords: {
        isArray: true,
        typeInfo: TypeInfo.TimelineRecord
    }
};

TypeInfo.WorkspaceMapping.fields = {
    mappingType: {
        enumType: TypeInfo.WorkspaceMappingType
    }
};

TypeInfo.WorkspaceTemplate.fields = {
    lastModifiedDate: {
        isDate: true,
    },
    mappings: {
        isArray: true,
        typeInfo: TypeInfo.WorkspaceMapping
    }
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
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
    queueStatus: {
        enumType: TypeInfo.DefinitionQueueStatus
    },
    supportedReasons: {
        enumType: TypeInfo.BuildReason
    },
    triggerType: {
        enumType: TypeInfo.DefinitionTriggerType
    },
    type: {
        enumType: TypeInfo.DefinitionType
    }
};
