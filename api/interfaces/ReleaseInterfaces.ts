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
import FormInputInterfaces = require("../interfaces/common/FormInputInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AgentArtifactDefinition {
    alias?: string;
    artifactType?: AgentArtifactType;
    details?: string;
    name?: string;
    version?: string;
}

export enum AgentArtifactType {
    XamlBuild = 0,
    Build = 1,
    Jenkins = 2,
    FileShare = 3,
    Nuget = 4,
    TfsOnPrem = 5,
    GitHub = 6,
    TFGit = 7,
    ExternalTfsBuild = 8,
    Custom = 9,
    Tfvc = 10,
}

export interface AgentBasedDeployPhase extends DeployPhase {
    deploymentInput?: AgentDeploymentInput;
}

export interface AgentDeploymentInput extends DeploymentInput {
    imageId?: number;
    parallelExecution?: ExecutionInput;
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

export enum ApprovalExecutionOrder {
    BeforeGates = 1,
    AfterSuccessfulGates = 2,
    AfterGatesAlways = 4,
}

export enum ApprovalFilters {
    /**
     * No approvals or approval snapshots
     */
    None = 0,
    /**
     * Manual approval steps but no approval snapshots (Use with ApprovalSnapshots for snapshots)
     */
    ManualApprovals = 1,
    /**
     * Automated approval steps but no approval snapshots (Use with ApprovalSnapshots for snapshots)
     */
    AutomatedApprovals = 2,
    /**
     * No approval steps, but approval snapshots (Use with either ManualApprovals or AutomatedApprovals for approval steps)
     */
    ApprovalSnapshots = 4,
    /**
     * All approval steps and approval snapshots
     */
    All = 7,
}

export interface ApprovalOptions {
    autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped?: boolean;
    enforceIdentityRevalidation?: boolean;
    executionOrder?: ApprovalExecutionOrder;
    releaseCreatorCanBeApprover?: boolean;
    requiredApproverCount?: number;
    timeoutInMinutes?: number;
}

export enum ApprovalStatus {
    Undefined = 0,
    Pending = 1,
    Approved = 2,
    Rejected = 4,
    Reassigned = 6,
    Canceled = 7,
    Skipped = 8,
}

export enum ApprovalType {
    Undefined = 0,
    PreDeploy = 1,
    PostDeploy = 2,
    All = 3,
}

export interface Artifact {
    /**
     * Gets or sets alias.
     */
    alias?: string;
    /**
     * Gets or sets definition reference. e.g. {"project":{"id":"fed755ea-49c5-4399-acea-fd5b5aa90a6c","name":"myProject"},"definition":{"id":"1","name":"mybuildDefinition"},"connection":{"id":"1","name":"myConnection"}}
     */
    definitionReference?: { [key: string] : ArtifactSourceReference; };
    /**
     * Gets or sets as artifact is primary or not.
     */
    isPrimary?: boolean;
    isRetained?: boolean;
    sourceId?: string;
    /**
     * Gets or sets type. It can have value as 'Build', 'Jenkins', 'GitHub', 'Nuget', 'Team Build (external)', 'ExternalTFSBuild', 'Git', 'TFVC', 'ExternalTfsXamlBuild'.
     */
    type?: string;
}

export interface ArtifactContributionDefinition {
    artifactTriggerConfiguration?: ArtifactTriggerConfiguration;
    artifactType?: string;
    artifactTypeStreamMapping?: { [key: string] : string; };
    browsableArtifactTypeMapping?: { [key: string] : string; };
    dataSourceBindings?: DataSourceBinding[];
    displayName?: string;
    downloadTaskId?: string;
    endpointTypeId?: string;
    inputDescriptors?: FormInputInterfaces.InputDescriptor[];
    name?: string;
    taskInputMapping?: { [key: string] : string; };
    uniqueSourceIdentifier?: string;
}

export interface ArtifactDownloadInputBase {
    alias?: string;
    artifactDownloadMode?: string;
    artifactType?: string;
}

export interface ArtifactFilter {
    createReleaseOnBuildTagging?: boolean;
    sourceBranch?: string;
    tags?: string[];
    useBuildDefinitionBranch?: boolean;
}

export interface ArtifactInstanceData {
    accountName?: string;
    authenticationToken?: string;
    tfsUrl?: string;
    version?: string;
}

export interface ArtifactMetadata {
    /**
     * Sets alias of artifact.
     */
    alias?: string;
    /**
     * Sets instance reference of artifact. e.g. for build artifact it is build number.
     */
    instanceReference?: BuildVersion;
}

export interface ArtifactProvider {
    id?: number;
    name?: string;
    sourceUri?: string;
    version?: string;
}

export interface ArtifactsDownloadInput {
    downloadInputs?: ArtifactDownloadInputBase[];
}

export interface ArtifactSourceId {
    artifactTypeId?: string;
    sourceIdInputs?: SourceIdInput[];
}

export interface ArtifactSourceIdsQueryResult {
    artifactSourceIds?: ArtifactSourceId[];
}

export interface ArtifactSourceReference {
    id?: string;
    name?: string;
}

export interface ArtifactSourceTrigger extends ReleaseTriggerBase {
    /**
     * Artifact source alias for Artifact Source trigger type
     */
    artifactAlias?: string;
    triggerConditions?: ArtifactFilter[];
}

export interface ArtifactTriggerConfiguration {
    isTriggerSupported?: boolean;
    isTriggerSupportedOnlyInHosted?: boolean;
    isWebhookSupportedAtServerLevel?: boolean;
    payloadHashHeaderName?: string;
    resources?: { [key: string] : string; };
    webhookPayloadMapping?: { [key: string] : string; };
}

export interface ArtifactTypeDefinition {
    artifactTriggerConfiguration?: ArtifactTriggerConfiguration;
    artifactType?: string;
    displayName?: string;
    endpointTypeId?: string;
    inputDescriptors?: FormInputInterfaces.InputDescriptor[];
    name?: string;
    uniqueSourceIdentifier?: string;
}

export interface ArtifactVersion {
    alias?: string;
    defaultVersion?: BuildVersion;
    errorMessage?: string;
    sourceId?: string;
    versions?: BuildVersion[];
}

export interface ArtifactVersionQueryResult {
    artifactVersions?: ArtifactVersion[];
}

export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
    Undelete = 4,
}

export enum AuthorizationHeaderFor {
    RevalidateApproverIdentity = 0,
    OnBehalfOf = 1,
}

export interface AutoTriggerIssue {
    issue?: Issue;
    issueSource?: IssueSource;
    project?: ProjectReference;
    releaseDefinitionReference?: ReleaseDefinitionShallowReference;
    releaseTriggerType?: ReleaseTriggerType;
}

export interface AzureKeyVaultVariableGroupProviderData extends VariableGroupProviderData {
    lastRefreshedOn?: Date;
    serviceEndpointId?: string;
    vault?: string;
}

export interface AzureKeyVaultVariableValue extends VariableValue {
    contentType?: string;
    enabled?: boolean;
    expires?: Date;
}

export interface BaseDeploymentInput {
    condition?: string;
    /**
     * Gets or sets the job cancel timeout in minutes for deployment which are cancelled by user for this release environment
     */
    jobCancelTimeoutInMinutes?: number;
    overrideInputs?: { [key: string] : string; };
    /**
     * Gets or sets the job execution timeout in minutes for deployment which are queued against this release environment
     */
    timeoutInMinutes?: number;
}

export interface BuildArtifactDownloadInput extends ArtifactDownloadInputBase {
    artifactItems?: string[];
}

export interface BuildVersion {
    commitMessage?: string;
    definitionId?: string;
    definitionName?: string;
    id?: string;
    name?: string;
    sourceBranch?: string;
    sourcePullRequestVersion?: SourcePullRequestVersion;
    sourceRepositoryId?: string;
    sourceRepositoryType?: string;
    sourceVersion?: string;
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
     * The type of source. "TfsVersionControl", "TfsGit", etc.
     */
    changeType?: string;
    /**
     * The location of a user-friendly representation of the resource.
     */
    displayUri?: string;
    /**
     * Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.
     */
    id?: string;
    /**
     * The location of the full representation of the resource.
     */
    location?: string;
    /**
     * A description of the change. This might be a commit message or changeset description.
     */
    message?: string;
    /**
     * The person or process that pushed the change.
     */
    pushedBy?: VSSInterfaces.IdentityRef;
    /**
     * The person or process that pushed the change.
     */
    pusher?: string;
    /**
     * A timestamp for the change.
     */
    timestamp?: Date;
}

export interface CodeRepositoryReference {
    repositoryReference?: { [key: string] : ReleaseManagementInputValue; };
    /**
     * It can have value as ‘GitHub’, ‘Vsts’.
     */
    systemType?: PullRequestSystemType;
}

export interface Condition {
    /**
     * Gets or sets the condition type.
     */
    conditionType?: ConditionType;
    /**
     * Gets or sets the name of the condition. e.g. 'ReleaseStarted'.
     */
    name?: string;
    /**
     * Gets or set value of the condition.
     */
    value?: string;
}

export enum ConditionType {
    /**
     * The condition type is undefined.
     */
    Undefined = 0,
    /**
     * The condition type is event.
     */
    Event = 1,
    /**
     * The condition type is environment state.
     */
    EnvironmentState = 2,
    /**
     * The condition type is artifact.
     */
    Artifact = 4,
}

export interface ConfigurationVariableValue {
    /**
     * Gets or sets if a variable can be overridden at deployment time or not.
     */
    allowOverride?: boolean;
    /**
     * Gets or sets as variable is secret or not.
     */
    isSecret?: boolean;
    /**
     * Gets or sets value of the configuration variable.
     */
    value?: string;
}

export interface Consumer {
    consumerId?: number;
    consumerName?: string;
}

export interface ContainerImageTrigger extends ReleaseTriggerBase {
    alias?: string;
}

export interface ContinuousDeploymentTriggerIssue extends AutoTriggerIssue {
    artifactType?: string;
    artifactVersionId?: string;
    sourceId?: string;
}

export interface ControlOptions {
    alwaysRun?: boolean;
    continueOnError?: boolean;
    enabled?: boolean;
}

export interface CustomArtifactDownloadInput extends ArtifactDownloadInputBase {
}

export interface DataSourceBinding {
    callbackContextTemplate?: string;
    callBackRequiredTemplate?: string;
    dataSourceName?: string;
    endpointId?: string;
    endpointUrl?: string;
    initialContextTemplate?: string;
    parameters?: { [key: string] : string; };
    requestContent?: string;
    requestVerb?: string;
    resultSelector?: string;
    resultTemplate?: string;
    target?: string;
}

export interface DefinitionEnvironmentReference {
    definitionEnvironmentId?: number;
    definitionEnvironmentName?: string;
    releaseDefinitionId?: number;
    releaseDefinitionName?: string;
}

export interface Demand {
    name?: string;
    value?: string;
}

export interface Deployment {
    /**
     * Gets links to access the deployment.
     */
    _links?: any;
    /**
     * Gets attempt number.
     */
    attempt?: number;
    /**
     * Gets the date on which deployment is complete.
     */
    completedOn?: Date;
    /**
     * Gets the list of condition associated with deployment.
     */
    conditions?: Condition[];
    /**
     * Gets release definition environment id.
     */
    definitionEnvironmentId?: number;
    /**
     * Gets status of the deployment.
     */
    deploymentStatus?: DeploymentStatus;
    /**
     * Gets the unique identifier for deployment.
     */
    id?: number;
    /**
     * Gets the identity who last modified the deployment.
     */
    lastModifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets the date on which deployment is last modified.
     */
    lastModifiedOn?: Date;
    /**
     * Gets operation status of deployment.
     */
    operationStatus?: DeploymentOperationStatus;
    /**
     * Gets list of PostDeployApprovals.
     */
    postDeployApprovals?: ReleaseApproval[];
    /**
     * Gets list of PreDeployApprovals.
     */
    preDeployApprovals?: ReleaseApproval[];
    /**
     * Gets or sets project reference.
     */
    projectReference?: ProjectReference;
    /**
     * Gets the date on which deployment is queued.
     */
    queuedOn?: Date;
    /**
     * Gets reason of deployment.
     */
    reason?: DeploymentReason;
    /**
     * Gets the reference of release.
     */
    release?: ReleaseReference;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which the deployment is associated.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference which specifies the reference of the release environment to which the deployment is associated.
     */
    releaseEnvironment?: ReleaseEnvironmentShallowReference;
    /**
     * Gets the identity who requested.
     */
    requestedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets the identity for whom deployment is requested.
     */
    requestedFor?: VSSInterfaces.IdentityRef;
    /**
     * Gets the date on which deployment is scheduled.
     */
    scheduledDeploymentTime?: Date;
    /**
     * Gets the date on which deployment is started.
     */
    startedOn?: Date;
}

export interface DeploymentApprovalCompletedEvent {
    approval?: ReleaseApproval;
    project?: ProjectReference;
    release?: Release;
}

export interface DeploymentApprovalPendingEvent {
    approval?: ReleaseApproval;
    approvalOptions?: ApprovalOptions;
    completedApprovals?: ReleaseApproval[];
    data?: { [key: string] : any; };
    deployment?: Deployment;
    isMultipleRankApproval?: boolean;
    pendingApprovals?: ReleaseApproval[];
    project?: ProjectReference;
    release?: Release;
}

export interface DeploymentAttempt {
    attempt?: number;
    deploymentId?: number;
    /**
     * Error log to show any unexpected error that occurred during executing deploy step
     */
    errorLog?: string;
    /**
     * Specifies whether deployment has started or not
     */
    hasStarted?: boolean;
    id?: number;
    /**
     * All the issues related to the deployment
     */
    issues?: Issue[];
    job?: ReleaseTask;
    lastModifiedBy?: VSSInterfaces.IdentityRef;
    lastModifiedOn?: Date;
    operationStatus?: DeploymentOperationStatus;
    postDeploymentGates?: ReleaseGates;
    preDeploymentGates?: ReleaseGates;
    queuedOn?: Date;
    reason?: DeploymentReason;
    releaseDeployPhases?: ReleaseDeployPhase[];
    requestedBy?: VSSInterfaces.IdentityRef;
    requestedFor?: VSSInterfaces.IdentityRef;
    runPlanId?: string;
    status?: DeploymentStatus;
    tasks?: ReleaseTask[];
}

export interface DeploymentAuthorizationInfo {
    authorizationHeaderFor?: AuthorizationHeaderFor;
    resources?: string[];
    tenantId?: string;
    vstsAccessTokenKey?: string;
}

export enum DeploymentAuthorizationOwner {
    Automatic = 0,
    DeploymentSubmitter = 1,
    FirstPreDeploymentApprover = 2,
}

export interface DeploymentCompletedEvent {
    comment?: string;
    data?: { [key: string] : any; };
    deployment?: Deployment;
    environment?: ReleaseEnvironment;
    project?: ProjectReference;
}

export enum DeploymentExpands {
    All = 0,
    DeploymentOnly = 1,
    Approvals = 2,
    Artifacts = 4,
}

export interface DeploymentInput extends BaseDeploymentInput {
    artifactsDownloadInput?: ArtifactsDownloadInput;
    demands?: Demand[];
    enableAccessToken?: boolean;
    queueId?: number;
    skipArtifactsDownload?: boolean;
}

export interface DeploymentJob {
    job?: ReleaseTask;
    tasks?: ReleaseTask[];
}

export interface DeploymentManualInterventionPendingEvent {
    deployment?: Deployment;
    emailRecipients?: string[];
    environmentOwner?: VSSInterfaces.IdentityRef;
    manualIntervention?: ManualIntervention;
    project?: ProjectReference;
    release?: Release;
}

export enum DeploymentOperationStatus {
    /**
     * The deployment operation status is undefined.
     */
    Undefined = 0,
    /**
     * The deployment operation status is queued.
     */
    Queued = 1,
    /**
     * The deployment operation status is scheduled.
     */
    Scheduled = 2,
    /**
     * The deployment operation status is pending.
     */
    Pending = 4,
    /**
     * The deployment operation status is approved.
     */
    Approved = 8,
    /**
     * The deployment operation status is rejected.
     */
    Rejected = 16,
    /**
     * The deployment operation status is deferred.
     */
    Deferred = 32,
    /**
     * The deployment operation status is queued for agent.
     */
    QueuedForAgent = 64,
    /**
     * The deployment operation status is phase inprogress.
     */
    PhaseInProgress = 128,
    /**
     * The deployment operation status is phase succeeded.
     */
    PhaseSucceeded = 256,
    /**
     * The deployment operation status is phase partially succeeded.
     */
    PhasePartiallySucceeded = 512,
    /**
     * The deployment operation status is phase failed.
     */
    PhaseFailed = 1024,
    /**
     * The deployment operation status is canceled.
     */
    Canceled = 2048,
    /**
     * The deployment operation status is phase canceled.
     */
    PhaseCanceled = 4096,
    /**
     * The deployment operation status is manualintervention pending.
     */
    ManualInterventionPending = 8192,
    /**
     * The deployment operation status is queued for pipeline.
     */
    QueuedForPipeline = 16384,
    /**
     * The deployment operation status is cancelling.
     */
    Cancelling = 32768,
    /**
     * The deployment operation status is EvaluatingGates.
     */
    EvaluatingGates = 65536,
    /**
     * The deployment operation status is GateFailed.
     */
    GateFailed = 131072,
    /**
     * The deployment operation status is all.
     */
    All = 258047,
}

export interface DeploymentQueryParameters {
    artifactSourceId?: string;
    artifactTypeId?: string;
    artifactVersions?: string[];
    deploymentsPerEnvironment?: number;
    deploymentStatus?: DeploymentStatus;
    environments?: DefinitionEnvironmentReference[];
    expands?: DeploymentExpands;
    isDeleted?: boolean;
    latestDeploymentsOnly?: boolean;
    maxDeploymentsPerEnvironment?: number;
    maxModifiedTime?: Date;
    minModifiedTime?: Date;
    operationStatus?: DeploymentOperationStatus;
    queryOrder?: ReleaseQueryOrder;
    queryType?: DeploymentsQueryType;
    sourceBranch?: string;
}

export enum DeploymentReason {
    /**
     * The deployment reason is none.
     */
    None = 0,
    /**
     * The deployment reason is manual.
     */
    Manual = 1,
    /**
     * The deployment reason is automated.
     */
    Automated = 2,
    /**
     * The deployment reason is scheduled.
     */
    Scheduled = 4,
    /**
     * The deployment reason is RedeployTrigger.
     */
    RedeployTrigger = 8,
}

export enum DeploymentsQueryType {
    Regular = 1,
    FailingSince = 2,
}

export interface DeploymentStartedEvent {
    environment?: ReleaseEnvironment;
    project?: ProjectReference;
    release?: Release;
}

export enum DeploymentStatus {
    /**
     * The deployment status is undefined.
     */
    Undefined = 0,
    /**
     * The deployment status is not deployed.
     */
    NotDeployed = 1,
    /**
     * The deployment status is inprogress.
     */
    InProgress = 2,
    /**
     * The deployment status is succeeded.
     */
    Succeeded = 4,
    /**
     * The deployment status is partiallysucceeded.
     */
    PartiallySucceeded = 8,
    /**
     * The deployment status is failed.
     */
    Failed = 16,
    /**
     * The deployment status is all.
     */
    All = 31,
}

export interface DeployPhase {
    name?: string;
    phaseType?: DeployPhaseTypes;
    rank?: number;
    workflowTasks?: WorkflowTask[];
}

export enum DeployPhaseStatus {
    Undefined = 0,
    NotStarted = 1,
    InProgress = 2,
    PartiallySucceeded = 4,
    Succeeded = 8,
    Failed = 16,
    Canceled = 32,
    Skipped = 64,
    Cancelling = 128,
}

export enum DeployPhaseTypes {
    Undefined = 0,
    AgentBasedDeployment = 1,
    RunOnServer = 2,
    MachineGroupBasedDeployment = 4,
    /**
     * Phase type which contains tasks which acts as Gates for the deployment to go forward.
     */
    DeploymentGates = 8,
}

export interface EmailRecipients {
    emailAddresses?: string[];
    tfsIds?: string[];
}

/**
 * Defines policy on environment queuing at Release Management side queue. We will send to Environment Runner [creating pre-deploy and other steps] only when the policies mentioned are satisfied.
 */
export interface EnvironmentExecutionPolicy {
    /**
     * This policy decides, how many environments would be with Environment Runner.
     */
    concurrencyCount?: number;
    /**
     * Queue depth in the EnvironmentQueue table, this table keeps the environment entries till Environment Runner is free [as per it's policy] to take another environment for running.
     */
    queueDepthCount?: number;
}

export interface EnvironmentOptions {
    autoLinkWorkItems?: boolean;
    badgeEnabled?: boolean;
    emailNotificationType?: string;
    emailRecipients?: string;
    enableAccessToken?: boolean;
    publishDeploymentStatus?: boolean;
    pullRequestDeploymentEnabled?: boolean;
    skipArtifactsDownload?: boolean;
    timeoutInMinutes?: number;
}

export interface EnvironmentRetentionPolicy {
    daysToKeep?: number;
    releasesToKeep?: number;
    retainBuild?: boolean;
}

export enum EnvironmentStatus {
    Undefined = 0,
    NotStarted = 1,
    InProgress = 2,
    Succeeded = 4,
    Canceled = 8,
    Rejected = 16,
    Queued = 32,
    Scheduled = 64,
    PartiallySucceeded = 128,
}

export interface EnvironmentTrigger {
    definitionEnvironmentId?: number;
    releaseDefinitionId?: number;
    triggerContent?: string;
    triggerType?: EnvironmentTriggerType;
}

export interface EnvironmentTriggerContent {
    action?: string;
    eventTypes?: string[];
}

export enum EnvironmentTriggerType {
    Undefined = 0,
    DeploymentGroupRedeploy = 1,
}

export interface ExecutionInput {
    parallelExecutionType?: ParallelExecutionTypes;
}

/**
 * Class to represent favorite entry
 */
export interface FavoriteItem {
    /**
     * Application specific data for the entry
     */
    data?: string;
    /**
     * Unique Id of the the entry
     */
    id?: string;
    /**
     * Display text for favorite entry
     */
    name?: string;
    /**
     * Application specific favorite entry type. Empty or Null represents that Favorite item is a Folder
     */
    type?: string;
}

export interface Folder {
    createdBy?: VSSInterfaces.IdentityRef;
    createdOn?: Date;
    description?: string;
    lastChangedBy?: VSSInterfaces.IdentityRef;
    lastChangedDate?: Date;
    path?: string;
}

export enum FolderPathQueryOrder {
    /**
     * No order
     */
    None = 0,
    /**
     * Order by folder name and path ascending.
     */
    Ascending = 1,
    /**
     * Order by folder name and path descending.
     */
    Descending = 2,
}

export interface GatesDeploymentInput extends BaseDeploymentInput {
    minimumSuccessDuration?: number;
    samplingInterval?: number;
    stabilizationTime?: number;
}

export interface GatesDeployPhase extends DeployPhase {
    deploymentInput?: GatesDeploymentInput;
}

export enum GateStatus {
    None = 0,
    Pending = 1,
    InProgress = 2,
    Succeeded = 4,
    Failed = 8,
    Canceled = 16,
}

export interface GateUpdateMetadata {
    /**
     * Comment
     */
    comment?: string;
    /**
     * Name of gate to be ignored.
     */
    gatesToIgnore?: string[];
}

export interface GitArtifactDownloadInput extends ArtifactDownloadInputBase {
}

export interface GitHubArtifactDownloadInput extends ArtifactDownloadInputBase {
}

export interface IgnoredGate {
    /**
     * Gets the date on which gate is last ignored.
     */
    lastModifiedOn?: Date;
    /**
     * Name of gate ignored.
     */
    name?: string;
}

export interface Issue {
    data?: { [key: string] : string; };
    issueType?: string;
    message?: string;
}

export enum IssueSource {
    None = 0,
    User = 1,
    System = 2,
}

export interface JenkinsArtifactDownloadInput extends ArtifactDownloadInputBase {
    artifactItems?: string[];
}

export interface MachineGroupBasedDeployPhase extends DeployPhase {
    deploymentInput?: MachineGroupDeploymentInput;
}

export interface MachineGroupDeploymentInput extends DeploymentInput {
    deploymentHealthOption?: string;
    healthPercent?: number;
    tags?: string[];
}

export interface MailMessage {
    body?: string;
    cC?: EmailRecipients;
    inReplyTo?: string;
    messageId?: string;
    replyBy?: Date;
    replyTo?: EmailRecipients;
    sections?: MailSectionType[];
    senderType?: SenderType;
    subject?: string;
    to?: EmailRecipients;
}

export enum MailSectionType {
    Details = 0,
    Environments = 1,
    Issues = 2,
    TestResults = 3,
    WorkItems = 4,
    ReleaseInfo = 5,
}

export interface ManualIntervention {
    /**
     * Gets or sets the identity who should approve.
     */
    approver?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets comments for approval.
     */
    comments?: string;
    /**
     * Gets date on which it got created.
     */
    createdOn?: Date;
    /**
     * Gets the unique identifier for manual intervention.
     */
    id?: number;
    /**
     * Gets or sets instructions for approval.
     */
    instructions?: string;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: Date;
    /**
     * Gets or sets the name.
     */
    name?: string;
    /**
     * Gets releaseReference for manual intervention.
     */
    release?: ReleaseShallowReference;
    /**
     * Gets releaseDefinitionReference for manual intervention.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference for manual intervention.
     */
    releaseEnvironment?: ReleaseEnvironmentShallowReference;
    /**
     * Gets or sets the status of the manual intervention.
     */
    status?: ManualInterventionStatus;
    /**
     * Get task instance identifier.
     */
    taskInstanceId?: string;
    /**
     * Gets url to access the manual intervention.
     */
    url?: string;
}

/**
 * Describes manual intervention status
 */
export enum ManualInterventionStatus {
    /**
     * The manual intervention does not have the status set.
     */
    Unknown = 0,
    /**
     * The manual intervention is pending.
     */
    Pending = 1,
    /**
     * The manual intervention is rejected.
     */
    Rejected = 2,
    /**
     * The manual intervention is approved.
     */
    Approved = 4,
    /**
     * The manual intervention is canceled.
     */
    Canceled = 8,
}

export interface ManualInterventionUpdateMetadata {
    /**
     * Sets the comment for manual intervention update.
     */
    comment?: string;
    /**
     * Sets the status of the manual intervention.
     */
    status?: ManualInterventionStatus;
}

export interface MappingDetails {
    mappings?: { [key: string] : FormInputInterfaces.InputValue; };
}

export interface Metric {
    name?: string;
    value?: number;
}

export interface MultiConfigInput extends ParallelExecutionInputBase {
    multipliers?: string;
}

export interface MultiMachineInput extends ParallelExecutionInputBase {
}

export interface PackageTrigger extends ReleaseTriggerBase {
    alias?: string;
}

export interface ParallelExecutionInputBase extends ExecutionInput {
    continueOnError?: boolean;
    maxNumberOfAgents?: number;
}

export enum ParallelExecutionTypes {
    None = 0,
    MultiConfiguration = 1,
    MultiMachine = 2,
}

export interface PipelineProcess {
    type?: PipelineProcessTypes;
}

export enum PipelineProcessTypes {
    Designer = 1,
    Yaml = 2,
}

export interface ProjectReference {
    /**
     * Gets the unique identifier of this field.
     */
    id?: string;
    /**
     * Gets name of project.
     */
    name?: string;
}

export interface PropertySelector {
    properties?: string[];
    selectorType?: PropertySelectorType;
}

export enum PropertySelectorType {
    Inclusion = 0,
    Exclusion = 1,
}

export interface PullRequestConfiguration {
    codeRepositoryReference?: CodeRepositoryReference;
    /**
     * In case of Source based artifacts, Code reference will be present in Artifact details.
     */
    useArtifactReference?: boolean;
}

export interface PullRequestFilter {
    tags?: string[];
    targetBranch?: string;
}

export enum PullRequestSystemType {
    None = 0,
    TfsGit = 1,
    GitHub = 2,
}

export interface PullRequestTrigger extends ReleaseTriggerBase {
    artifactAlias?: string;
    pullRequestConfiguration?: PullRequestConfiguration;
    statusPolicyName?: string;
    triggerConditions?: PullRequestFilter[];
}

export interface QueuedReleaseData {
    projectId?: string;
    queuePosition?: number;
    releaseId?: number;
}

export interface RealtimeReleaseDefinitionEvent {
    definitionId?: number;
    projectId?: string;
}

export interface RealtimeReleaseEvent {
    environmentId?: number;
    projectId?: string;
    releaseId?: number;
}

export interface Release {
    /**
     * Gets links to access the release.
     */
    _links?: any;
    /**
     * Gets or sets the list of artifacts.
     */
    artifacts?: Artifact[];
    /**
     * Gets or sets comment.
     */
    comment?: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn?: Date;
    /**
     * Gets revision number of definition snapshot.
     */
    definitionSnapshotRevision?: number;
    /**
     * Gets or sets description of release.
     */
    description?: string;
    /**
     * Gets list of environments.
     */
    environments?: ReleaseEnvironment[];
    /**
     * Gets the unique identifier of this field.
     */
    id?: number;
    /**
     * Whether to exclude the release from retention policies.
     */
    keepForever?: boolean;
    /**
     * Gets logs container url.
     */
    logsContainerUrl?: string;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: Date;
    /**
     * Gets name.
     */
    name?: string;
    /**
     * Gets pool name.
     */
    poolName?: string;
    /**
     * Gets or sets project reference.
     */
    projectReference?: ProjectReference;
    properties?: any;
    /**
     * Gets reason of release.
     */
    reason?: ReleaseReason;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this release is associated.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets release name format.
     */
    releaseNameFormat?: string;
    /**
     * Gets status.
     */
    status?: ReleaseStatus;
    /**
     * Gets or sets list of tags.
     */
    tags?: string[];
    triggeringArtifactAlias?: string;
    url?: string;
    /**
     * Gets the list of variable groups.
     */
    variableGroups?: VariableGroup[];
    /**
     * Gets or sets the dictionary of variables.
     */
    variables?: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseAbandonedEvent {
    project?: ProjectReference;
    release?: Release;
}

export interface ReleaseApproval {
    /**
     * Gets or sets the type of approval.
     */
    approvalType?: ApprovalType;
    /**
     * Gets the identity who approved.
     */
    approvedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the identity who should approve.
     */
    approver?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets attempt which specifies as which deployment attempt it belongs.
     */
    attempt?: number;
    /**
     * Gets or sets comments for approval.
     */
    comments?: string;
    /**
     * Gets date on which it got created.
     */
    createdOn?: Date;
    /**
     * Gets history which specifies all approvals associated with this approval.
     */
    history?: ReleaseApprovalHistory[];
    /**
     * Gets the unique identifier of this field.
     */
    id?: number;
    /**
     * Gets or sets as approval is automated or not.
     */
    isAutomated?: boolean;
    isNotificationOn?: boolean;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: Date;
    /**
     * Gets or sets rank which specifies the order of the approval. e.g. Same rank denotes parallel approval.
     */
    rank?: number;
    /**
     * Gets releaseReference which specifies the reference of the release to which this approval is associated.
     */
    release?: ReleaseShallowReference;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this approval is associated.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference which specifies the reference of the release environment to which this approval is associated.
     */
    releaseEnvironment?: ReleaseEnvironmentShallowReference;
    /**
     * Gets the revision number.
     */
    revision?: number;
    /**
     * Gets or sets the status of the approval.
     */
    status?: ApprovalStatus;
    trialNumber?: number;
    /**
     * Gets url to access the approval.
     */
    url?: string;
}

export interface ReleaseApprovalHistory {
    approver?: VSSInterfaces.IdentityRef;
    changedBy?: VSSInterfaces.IdentityRef;
    comments?: string;
    createdOn?: Date;
    modifiedOn?: Date;
    revision?: number;
}

export interface ReleaseApprovalPendingEvent {
    approval?: ReleaseApproval;
    approvalOptions?: ApprovalOptions;
    completedApprovals?: ReleaseApproval[];
    definitionName?: string;
    deployment?: Deployment;
    environmentId?: number;
    environmentName?: string;
    environments?: ReleaseEnvironment[];
    isMultipleRankApproval?: boolean;
    pendingApprovals?: ReleaseApproval[];
    releaseCreator?: string;
    releaseName?: string;
    title?: string;
    webAccessUri?: string;
}

export interface ReleaseArtifact {
    artifactProvider?: ArtifactProvider;
    artifactType?: string;
    definitionData?: string;
    definitionId?: number;
    description?: string;
    id?: number;
    name?: string;
    releaseId?: number;
}

export interface ReleaseCondition extends Condition {
    result?: boolean;
}

export interface ReleaseCreatedEvent {
    project?: ProjectReference;
    release?: Release;
}

export interface ReleaseDefinition extends ReleaseDefinitionShallowReference {
    /**
     * Gets or sets the list of artifacts.
     */
    artifacts?: Artifact[];
    /**
     * Gets or sets comment.
     */
    comment?: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn?: Date;
    /**
     * Gets or sets the description.
     */
    description?: string;
    /**
     * Gets or sets the list of environments.
     */
    environments?: ReleaseDefinitionEnvironment[];
    /**
     * Whether release definition is deleted.
     */
    isDeleted?: boolean;
    /**
     * Gets the reference of last release.
     */
    lastRelease?: ReleaseReference;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: Date;
    /**
     * Gets or sets pipeline process.
     */
    pipelineProcess?: PipelineProcess;
    /**
     * Gets or sets properties.
     */
    properties?: any;
    /**
     * Gets or sets the release name format.
     */
    releaseNameFormat?: string;
    retentionPolicy?: RetentionPolicy;
    /**
     * Gets the revision number.
     */
    revision?: number;
    /**
     * Gets or sets source of release definition.
     */
    source?: ReleaseDefinitionSource;
    /**
     * Gets or sets list of tags.
     */
    tags?: string[];
    /**
     * Gets or sets the list of triggers.
     */
    triggers?: ReleaseTriggerBase[];
    /**
     * Gets or sets the list of variable groups.
     */
    variableGroups?: number[];
    /**
     * Gets or sets the dictionary of variables.
     */
    variables?: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseDefinitionApprovals {
    approvalOptions?: ApprovalOptions;
    approvals?: ReleaseDefinitionApprovalStep[];
}

export interface ReleaseDefinitionApprovalStep extends ReleaseDefinitionEnvironmentStep {
    approver?: VSSInterfaces.IdentityRef;
    isAutomated?: boolean;
    isNotificationOn?: boolean;
    rank?: number;
}

export interface ReleaseDefinitionDeployStep extends ReleaseDefinitionEnvironmentStep {
    /**
     * The list of steps for this definition.
     */
    tasks?: WorkflowTask[];
}

export interface ReleaseDefinitionEnvironment {
    badgeUrl?: string;
    conditions?: Condition[];
    currentRelease?: ReleaseShallowReference;
    demands?: Demand[];
    deployPhases?: DeployPhase[];
    deployStep?: ReleaseDefinitionDeployStep;
    environmentOptions?: EnvironmentOptions;
    environmentTriggers?: EnvironmentTrigger[];
    executionPolicy?: EnvironmentExecutionPolicy;
    id?: number;
    name?: string;
    owner?: VSSInterfaces.IdentityRef;
    postDeployApprovals?: ReleaseDefinitionApprovals;
    postDeploymentGates?: ReleaseDefinitionGatesStep;
    preDeployApprovals?: ReleaseDefinitionApprovals;
    preDeploymentGates?: ReleaseDefinitionGatesStep;
    processParameters?: DistributedTaskCommonInterfaces.ProcessParameters;
    properties?: any;
    queueId?: number;
    rank?: number;
    retentionPolicy?: EnvironmentRetentionPolicy;
    runOptions?: { [key: string] : string; };
    schedules?: ReleaseSchedule[];
    variableGroups?: number[];
    variables?: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseDefinitionEnvironmentStep {
    id?: number;
}

export interface ReleaseDefinitionEnvironmentSummary {
    id?: number;
    lastReleases?: ReleaseShallowReference[];
    name?: string;
}

export interface ReleaseDefinitionEnvironmentTemplate {
    canDelete?: boolean;
    category?: string;
    description?: string;
    environment?: ReleaseDefinitionEnvironment;
    iconTaskId?: string;
    iconUri?: string;
    id?: string;
    isDeleted?: boolean;
    name?: string;
}

export enum ReleaseDefinitionExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Triggers = 8,
    Variables = 16,
    Tags = 32,
    LastRelease = 64,
}

export interface ReleaseDefinitionGate {
    tasks?: WorkflowTask[];
}

export interface ReleaseDefinitionGatesOptions {
    isEnabled?: boolean;
    minimumSuccessDuration?: number;
    samplingInterval?: number;
    stabilizationTime?: number;
    timeout?: number;
}

export interface ReleaseDefinitionGatesStep {
    gates?: ReleaseDefinitionGate[];
    gatesOptions?: ReleaseDefinitionGatesOptions;
    id?: number;
}

export enum ReleaseDefinitionQueryOrder {
    IdAscending = 0,
    IdDescending = 1,
    NameAscending = 2,
    NameDescending = 3,
}

export interface ReleaseDefinitionRevision {
    /**
     * Gets api-version for revision object.
     */
    apiVersion?: string;
    /**
     * Gets the identity who did change.
     */
    changedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets date on which it got changed.
     */
    changedDate?: Date;
    /**
     * Gets type of change.
     */
    changeType?: AuditAction;
    /**
     * Gets comments for revision.
     */
    comment?: string;
    /**
     * Get id of the definition.
     */
    definitionId?: number;
    /**
     * Gets definition url.
     */
    definitionUrl?: string;
    /**
     * Get revision number of the definition.
     */
    revision?: number;
}

export interface ReleaseDefinitionShallowReference {
    /**
     * Gets the links to related resources, APIs, and views for the release definition.
     */
    _links?: any;
    /**
     * Gets the unique identifier of release definition.
     */
    id?: number;
    /**
     * Gets or sets the name of the release definition.
     */
    name?: string;
    /**
     * Gets or sets the path of the release definition.
     */
    path?: string;
    /**
     * Gets or sets project reference.
     */
    projectReference?: ProjectReference;
    /**
     * Gets the REST API url to access the release definition.
     */
    url?: string;
}

export enum ReleaseDefinitionSource {
    Undefined = 0,
    RestApi = 1,
    UserInterface = 2,
    Ibiza = 4,
    PortalExtensionApi = 8,
}

export interface ReleaseDefinitionSummary {
    environments?: ReleaseDefinitionEnvironmentSummary[];
    releaseDefinition?: ReleaseDefinitionShallowReference;
    releases?: Release[];
}

export interface ReleaseDefinitionUndeleteParameter {
    /**
     * Gets or sets comment.
     */
    comment?: string;
}

export interface ReleaseDeployPhase {
    deploymentJobs?: DeploymentJob[];
    errorLog?: string;
    id?: number;
    manualInterventions?: ManualIntervention[];
    name?: string;
    phaseId?: string;
    phaseType?: DeployPhaseTypes;
    rank?: number;
    runPlanId?: string;
    /**
     * Phase start time
     */
    startedOn?: Date;
    status?: DeployPhaseStatus;
}

export interface ReleaseEnvironment {
    /**
     * Gets list of conditions.
     */
    conditions?: ReleaseCondition[];
    /**
     * Gets date on which it got created.
     */
    createdOn?: Date;
    /**
     * Gets definition environment id.
     */
    definitionEnvironmentId?: number;
    /**
     * Gets demands.
     */
    demands?: Demand[];
    /**
     * Gets list of deploy phases snapshot.
     */
    deployPhasesSnapshot?: DeployPhase[];
    /**
     * Gets deploy steps.
     */
    deploySteps?: DeploymentAttempt[];
    /**
     * Gets environment options.
     */
    environmentOptions?: EnvironmentOptions;
    /**
     * Gets the unique identifier of this field.
     */
    id?: number;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: Date;
    /**
     * Gets name.
     */
    name?: string;
    /**
     * Gets next scheduled UTC time.
     */
    nextScheduledUtcTime?: Date;
    /**
     * Gets the identity who is owner for release environment.
     */
    owner?: VSSInterfaces.IdentityRef;
    /**
     * Gets list of post deploy approvals snapshot.
     */
    postApprovalsSnapshot?: ReleaseDefinitionApprovals;
    /**
     * Gets list of post deploy approvals.
     */
    postDeployApprovals?: ReleaseApproval[];
    postDeploymentGatesSnapshot?: ReleaseDefinitionGatesStep;
    /**
     * Gets list of pre deploy approvals snapshot.
     */
    preApprovalsSnapshot?: ReleaseDefinitionApprovals;
    /**
     * Gets list of pre deploy approvals.
     */
    preDeployApprovals?: ReleaseApproval[];
    preDeploymentGatesSnapshot?: ReleaseDefinitionGatesStep;
    /**
     * Gets process parameters.
     */
    processParameters?: DistributedTaskCommonInterfaces.ProcessParameters;
    /**
     * Gets queue id.
     */
    queueId?: number;
    /**
     * Gets rank.
     */
    rank?: number;
    /**
     * Gets release reference which specifies the reference of the release to which this release environment is associated.
     */
    release?: ReleaseShallowReference;
    /**
     * Gets the identity who created release.
     */
    releaseCreatedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this release environment is associated.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets release description.
     */
    releaseDescription?: string;
    /**
     * Gets release id.
     */
    releaseId?: number;
    /**
     * Gets schedule deployment time of release environment.
     */
    scheduledDeploymentTime?: Date;
    /**
     * Gets list of schedules.
     */
    schedules?: ReleaseSchedule[];
    /**
     * Gets environment status.
     */
    status?: EnvironmentStatus;
    /**
     * Gets time to deploy.
     */
    timeToDeploy?: number;
    /**
     * Gets trigger reason.
     */
    triggerReason?: string;
    /**
     * Gets the list of variable groups.
     */
    variableGroups?: VariableGroup[];
    /**
     * Gets the dictionary of variables.
     */
    variables?: { [key: string] : ConfigurationVariableValue; };
    /**
     * Gets list of workflow tasks.
     */
    workflowTasks?: WorkflowTask[];
}

export interface ReleaseEnvironmentCompletedEvent {
    createdByName?: string;
    definitionId?: number;
    definitionName?: string;
    environment?: ReleaseEnvironment;
    environmentId?: number;
    projectName?: string;
    reason?: DeploymentReason;
    releaseCreatedBy?: VSSInterfaces.IdentityRef;
    releaseLogsUri?: string;
    releaseName?: string;
    status?: string;
    title?: string;
    webAccessUri?: string;
}

export interface ReleaseEnvironmentShallowReference {
    /**
     * Gets the links to related resources, APIs, and views for the release environment.
     */
    _links?: any;
    /**
     * Gets the unique identifier of release environment.
     */
    id?: number;
    /**
     * Gets or sets the name of the release environment.
     */
    name?: string;
    /**
     * Gets the REST API url to access the release environment.
     */
    url?: string;
}

export interface ReleaseEnvironmentStatusUpdatedEvent extends RealtimeReleaseDefinitionEvent {
    environmentId?: number;
    environmentStatus?: EnvironmentStatus;
    latestDeploymentOperationStatus?: DeploymentOperationStatus;
    latestDeploymentStatus?: DeploymentStatus;
    releaseId?: number;
}

export interface ReleaseEnvironmentUpdateMetadata {
    /**
     * Gets or sets comment.
     */
    comment?: string;
    /**
     * Gets or sets scheduled deployment time.
     */
    scheduledDeploymentTime?: Date;
    /**
     * Gets or sets status of environment.
     */
    status?: EnvironmentStatus;
    /**
     * Sets list of environment variables to be overridden at deployment time.
     */
    variables?: { [key: string] : ConfigurationVariableValue; };
}

export enum ReleaseExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Approvals = 8,
    ManualInterventions = 16,
    Variables = 32,
    Tags = 64,
}

export interface ReleaseGates {
    deploymentJobs?: DeploymentJob[];
    id?: number;
    ignoredGates?: IgnoredGate[];
    lastModifiedOn?: Date;
    runPlanId?: string;
    stabilizationCompletedOn?: Date;
    startedOn?: Date;
    status?: GateStatus;
    succeedingSince?: Date;
}

export interface ReleaseGatesPhase extends ReleaseDeployPhase {
    ignoredGates?: IgnoredGate[];
    stabilizationCompletedOn?: Date;
    succeedingSince?: Date;
}

export interface ReleaseManagementInputValue {
    /**
     * The text to show for the display of this value
     */
    displayValue?: string;
    /**
     * The value to store for this input
     */
    value?: string;
}

export enum ReleaseQueryOrder {
    Descending = 0,
    Ascending = 1,
}

export enum ReleaseReason {
    None = 0,
    Manual = 1,
    ContinuousIntegration = 2,
    Schedule = 3,
    PullRequest = 4,
}

export interface ReleaseReference {
    /**
     * Gets links to access the release.
     */
    _links?: any;
    /**
     * Gets list of artifacts.
     */
    artifacts?: Artifact[];
    /**
     * Gets the identity who created.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn?: Date;
    /**
     * Gets description.
     */
    description?: string;
    /**
     * Gets the unique identifier of this field.
     */
    id?: number;
    /**
     * Gets the identity who modified.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets name of release.
     */
    name?: string;
    /**
     * Gets reason for release.
     */
    reason?: ReleaseReason;
    /**
     * Gets release definition shallow reference.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    url?: string;
    webAccessUri?: string;
}

export interface ReleaseRevision {
    changedBy?: VSSInterfaces.IdentityRef;
    changedDate?: Date;
    changeDetails?: string;
    changeType?: string;
    comment?: string;
    definitionSnapshotRevision?: number;
    releaseId?: number;
}

export interface ReleaseSchedule {
    /**
     * Days of the week to release
     */
    daysToRelease?: ScheduleDays;
    /**
     * Team Foundation Job Definition Job Id
     */
    jobId?: string;
    /**
     * Local time zone hour to start
     */
    startHours?: number;
    /**
     * Local time zone minute to start
     */
    startMinutes?: number;
    /**
     * Time zone Id of release schedule, such as 'UTC'
     */
    timeZoneId?: string;
}

export interface ReleaseSettings {
    retentionSettings?: RetentionSettings;
}

export interface ReleaseShallowReference {
    /**
     * Gets the links to related resources, APIs, and views for the release.
     */
    _links?: any;
    /**
     * Gets the unique identifier of release.
     */
    id?: number;
    /**
     * Gets or sets the name of the release.
     */
    name?: string;
    /**
     * Gets the REST API url to access the release.
     */
    url?: string;
}

export interface ReleaseStartEnvironmentMetadata {
    /**
     * Sets release definition environment id.
     */
    definitionEnvironmentId?: number;
    /**
     * Sets list of environments variables to be overridden at deployment time.
     */
    variables?: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseStartMetadata {
    /**
     * Sets list of artifact to create a release.
     */
    artifacts?: ArtifactMetadata[];
    /**
     * Sets definition Id to create a release.
     */
    definitionId?: number;
    /**
     * Sets description to create a release.
     */
    description?: string;
    /**
     * Sets list of environments meta data.
     */
    environmentsMetadata?: ReleaseStartEnvironmentMetadata[];
    /**
     * Sets 'true' to create release in draft mode, 'false' otherwise.
     */
    isDraft?: boolean;
    /**
     * Sets list of environments to manual as condition.
     */
    manualEnvironments?: string[];
    properties?: any;
    /**
     * Sets reason to create a release.
     */
    reason?: ReleaseReason;
    /**
     * Sets list of release variables to be overridden at deployment time.
     */
    variables?: { [key: string] : ConfigurationVariableValue; };
}

export enum ReleaseStatus {
    Undefined = 0,
    Draft = 1,
    Active = 2,
    Abandoned = 4,
}

export interface ReleaseTask {
    agentName?: string;
    dateEnded?: Date;
    dateStarted?: Date;
    finishTime?: Date;
    id?: number;
    issues?: Issue[];
    lineCount?: number;
    logUrl?: string;
    name?: string;
    percentComplete?: number;
    rank?: number;
    resultCode?: string;
    startTime?: Date;
    status?: TaskStatus;
    task?: WorkflowTaskReference;
    timelineRecordId?: string;
}

export interface ReleaseTaskAttachment {
    _links?: any;
    createdOn?: Date;
    modifiedBy?: VSSInterfaces.IdentityRef;
    modifiedOn?: Date;
    name?: string;
    recordId?: string;
    timelineId?: string;
    type?: string;
}

export interface ReleaseTaskLogUpdatedEvent extends RealtimeReleaseEvent {
    lines?: string[];
    stepRecordId?: string;
    timelineRecordId?: string;
}

export interface ReleaseTasksUpdatedEvent extends RealtimeReleaseEvent {
    job?: ReleaseTask;
    planId?: string;
    releaseDeployPhaseId?: number;
    releaseStepId?: number;
    tasks?: ReleaseTask[];
}

export interface ReleaseTriggerBase {
    triggerType?: ReleaseTriggerType;
}

export enum ReleaseTriggerType {
    Undefined = 0,
    ArtifactSource = 1,
    Schedule = 2,
    SourceRepo = 3,
    ContainerImage = 4,
    Package = 5,
    PullRequest = 6,
}

export interface ReleaseUpdatedEvent extends RealtimeReleaseEvent {
    release?: Release;
}

export interface ReleaseUpdateMetadata {
    /**
     * Sets comment for release.
     */
    comment?: string;
    /**
     * Set 'true' to exclude the release from retention policies.
     */
    keepForever?: boolean;
    /**
     * Sets list of manual environments.
     */
    manualEnvironments?: string[];
    /**
     * Sets status of the release.
     */
    status?: ReleaseStatus;
}

export interface ReleaseWorkItemRef {
    assignee?: string;
    id?: string;
    state?: string;
    title?: string;
    type?: string;
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

export interface RetentionPolicy {
    daysToKeep?: number;
}

export interface RetentionSettings {
    daysToKeepDeletedReleases?: number;
    defaultEnvironmentRetentionPolicy?: EnvironmentRetentionPolicy;
    maximumEnvironmentRetentionPolicy?: EnvironmentRetentionPolicy;
}

export interface RunOnServerDeployPhase extends DeployPhase {
    deploymentInput?: ServerDeploymentInput;
}

export enum ScheduleDays {
    None = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 4,
    Thursday = 8,
    Friday = 16,
    Saturday = 32,
    Sunday = 64,
    All = 127,
}

export interface ScheduledReleaseTrigger extends ReleaseTriggerBase {
    /**
     * Release schedule for Scheduled Release trigger type
     */
    schedule?: ReleaseSchedule;
}

export enum SenderType {
    ServiceAccount = 1,
    RequestingUser = 2,
}

export interface ServerDeploymentInput extends BaseDeploymentInput {
    parallelExecution?: ExecutionInput;
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

export enum SingleReleaseExpands {
    None = 0,
    Tasks = 1,
}

export interface SourceIdInput {
    id?: string;
    name?: string;
}

export interface SourcePullRequestVersion {
    /**
     * Pull Request Id for which the release will publish status
     */
    pullRequestId?: string;
    pullRequestMergedAt?: Date;
    /**
     * Source branch commit Id of the Pull Request for which the release will publish status
     */
    sourceBranchCommitId?: string;
}

export interface SourceRepoTrigger extends ReleaseTriggerBase {
    alias?: string;
    branchFilters?: string[];
}

export interface SummaryMailSection {
    htmlContent?: string;
    rank?: number;
    sectionType?: MailSectionType;
    title?: string;
}

export interface TaskOrchestrationPlanGroupReference {
    planGroup?: string;
    projectId?: string;
}

export interface TaskOrchestrationPlanGroupsStartedEvent {
    planGroups?: TaskOrchestrationPlanGroupReference[];
}

export enum TaskStatus {
    Unknown = 0,
    Pending = 1,
    InProgress = 2,
    Success = 3,
    Failure = 4,
    Canceled = 5,
    Skipped = 6,
    Succeeded = 7,
    Failed = 8,
    PartiallySucceeded = 9,
}

export interface TfvcArtifactDownloadInput extends ArtifactDownloadInputBase {
}

export interface TimeZone {
    displayName?: string;
    id?: string;
}

export interface TimeZoneList {
    utcTimeZone?: TimeZone;
    validTimeZones?: TimeZone[];
}

export interface VariableGroup {
    /**
     * Gets or sets the identity who created.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets date on which it got created.
     */
    createdOn?: Date;
    /**
     * Gets or sets description.
     */
    description?: string;
    /**
     * Gets the unique identifier of this field.
     */
    id?: number;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: Date;
    /**
     * Gets or sets name.
     */
    name?: string;
    /**
     * Gets or sets provider data.
     */
    providerData?: VariableGroupProviderData;
    /**
     * Gets or sets type.
     */
    type?: string;
    variables?: { [key: string] : VariableValue; };
}

export enum VariableGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}

export interface VariableGroupProviderData {
}

export interface VariableValue {
    isSecret?: boolean;
    value?: string;
}

export interface WorkflowTask {
    alwaysRun?: boolean;
    condition?: string;
    continueOnError?: boolean;
    definitionType?: string;
    enabled?: boolean;
    environment?: { [key: string] : string; };
    inputs?: { [key: string] : string; };
    name?: string;
    overrideInputs?: { [key: string] : string; };
    refName?: string;
    taskId: string;
    timeoutInMinutes?: number;
    version: string;
}

export interface WorkflowTaskReference {
    id?: string;
    name?: string;
    version?: string;
}

export interface YamlFileSource {
    /**
     * Gets or sets definition reference. e.g. {"project":{"id":"fed755ea-49c5-4399-acea-fd5b5aa90a6c","name":"myProject"},"definition":{"id":"1","name":"mybuildDefinition"},"connection":{"id":"1","name":"myConnection"}}
     */
    sourceReference?: { [key: string] : YamlSourceReference; };
    type?: YamlFileSourceTypes;
}

export enum YamlFileSourceTypes {
    None = 0,
    TFSGit = 1,
}

export interface YamlPipelineProcess extends PipelineProcess {
    errors?: string[];
    filename?: string;
    fileSource?: YamlFileSource;
    resources?: YamlPipelineProcessResources;
}

export interface YamlPipelineProcessResources {
    endpoints?: ServiceEndpointReference[];
    queues?: AgentPoolQueueReference[];
}

export interface YamlSourceReference {
    id?: string;
    name?: string;
}

export var TypeInfo = {
    AgentArtifactDefinition: <any>{
    },
    AgentArtifactType: {
        enumValues: {
            "xamlBuild": 0,
            "build": 1,
            "jenkins": 2,
            "fileShare": 3,
            "nuget": 4,
            "tfsOnPrem": 5,
            "gitHub": 6,
            "tFGit": 7,
            "externalTfsBuild": 8,
            "custom": 9,
            "tfvc": 10
        }
    },
    AgentBasedDeployPhase: <any>{
    },
    AgentDeploymentInput: <any>{
    },
    ApprovalExecutionOrder: {
        enumValues: {
            "beforeGates": 1,
            "afterSuccessfulGates": 2,
            "afterGatesAlways": 4
        }
    },
    ApprovalFilters: {
        enumValues: {
            "none": 0,
            "manualApprovals": 1,
            "automatedApprovals": 2,
            "approvalSnapshots": 4,
            "all": 7
        }
    },
    ApprovalOptions: <any>{
    },
    ApprovalStatus: {
        enumValues: {
            "undefined": 0,
            "pending": 1,
            "approved": 2,
            "rejected": 4,
            "reassigned": 6,
            "canceled": 7,
            "skipped": 8
        }
    },
    ApprovalType: {
        enumValues: {
            "undefined": 0,
            "preDeploy": 1,
            "postDeploy": 2,
            "all": 3
        }
    },
    ArtifactContributionDefinition: <any>{
    },
    ArtifactMetadata: <any>{
    },
    ArtifactSourceTrigger: <any>{
    },
    ArtifactTypeDefinition: <any>{
    },
    ArtifactVersion: <any>{
    },
    ArtifactVersionQueryResult: <any>{
    },
    AuditAction: {
        enumValues: {
            "add": 1,
            "update": 2,
            "delete": 3,
            "undelete": 4
        }
    },
    AuthorizationHeaderFor: {
        enumValues: {
            "revalidateApproverIdentity": 0,
            "onBehalfOf": 1
        }
    },
    AutoTriggerIssue: <any>{
    },
    AzureKeyVaultVariableGroupProviderData: <any>{
    },
    AzureKeyVaultVariableValue: <any>{
    },
    BuildVersion: <any>{
    },
    Change: <any>{
    },
    CodeRepositoryReference: <any>{
    },
    Condition: <any>{
    },
    ConditionType: {
        enumValues: {
            "undefined": 0,
            "event": 1,
            "environmentState": 2,
            "artifact": 4
        }
    },
    ContainerImageTrigger: <any>{
    },
    ContinuousDeploymentTriggerIssue: <any>{
    },
    Deployment: <any>{
    },
    DeploymentApprovalCompletedEvent: <any>{
    },
    DeploymentApprovalPendingEvent: <any>{
    },
    DeploymentAttempt: <any>{
    },
    DeploymentAuthorizationInfo: <any>{
    },
    DeploymentAuthorizationOwner: {
        enumValues: {
            "automatic": 0,
            "deploymentSubmitter": 1,
            "firstPreDeploymentApprover": 2
        }
    },
    DeploymentCompletedEvent: <any>{
    },
    DeploymentExpands: {
        enumValues: {
            "all": 0,
            "deploymentOnly": 1,
            "approvals": 2,
            "artifacts": 4
        }
    },
    DeploymentJob: <any>{
    },
    DeploymentManualInterventionPendingEvent: <any>{
    },
    DeploymentOperationStatus: {
        enumValues: {
            "undefined": 0,
            "queued": 1,
            "scheduled": 2,
            "pending": 4,
            "approved": 8,
            "rejected": 16,
            "deferred": 32,
            "queuedForAgent": 64,
            "phaseInProgress": 128,
            "phaseSucceeded": 256,
            "phasePartiallySucceeded": 512,
            "phaseFailed": 1024,
            "canceled": 2048,
            "phaseCanceled": 4096,
            "manualInterventionPending": 8192,
            "queuedForPipeline": 16384,
            "cancelling": 32768,
            "evaluatingGates": 65536,
            "gateFailed": 131072,
            "all": 258047
        }
    },
    DeploymentQueryParameters: <any>{
    },
    DeploymentReason: {
        enumValues: {
            "none": 0,
            "manual": 1,
            "automated": 2,
            "scheduled": 4,
            "redeployTrigger": 8
        }
    },
    DeploymentsQueryType: {
        enumValues: {
            "regular": 1,
            "failingSince": 2
        }
    },
    DeploymentStartedEvent: <any>{
    },
    DeploymentStatus: {
        enumValues: {
            "undefined": 0,
            "notDeployed": 1,
            "inProgress": 2,
            "succeeded": 4,
            "partiallySucceeded": 8,
            "failed": 16,
            "all": 31
        }
    },
    DeployPhase: <any>{
    },
    DeployPhaseStatus: {
        enumValues: {
            "undefined": 0,
            "notStarted": 1,
            "inProgress": 2,
            "partiallySucceeded": 4,
            "succeeded": 8,
            "failed": 16,
            "canceled": 32,
            "skipped": 64,
            "cancelling": 128
        }
    },
    DeployPhaseTypes: {
        enumValues: {
            "undefined": 0,
            "agentBasedDeployment": 1,
            "runOnServer": 2,
            "machineGroupBasedDeployment": 4,
            "deploymentGates": 8
        }
    },
    EnvironmentStatus: {
        enumValues: {
            "undefined": 0,
            "notStarted": 1,
            "inProgress": 2,
            "succeeded": 4,
            "canceled": 8,
            "rejected": 16,
            "queued": 32,
            "scheduled": 64,
            "partiallySucceeded": 128
        }
    },
    EnvironmentTrigger: <any>{
    },
    EnvironmentTriggerType: {
        enumValues: {
            "undefined": 0,
            "deploymentGroupRedeploy": 1
        }
    },
    ExecutionInput: <any>{
    },
    Folder: <any>{
    },
    FolderPathQueryOrder: {
        enumValues: {
            "none": 0,
            "ascending": 1,
            "descending": 2
        }
    },
    GatesDeployPhase: <any>{
    },
    GateStatus: {
        enumValues: {
            "none": 0,
            "pending": 1,
            "inProgress": 2,
            "succeeded": 4,
            "failed": 8,
            "canceled": 16
        }
    },
    IgnoredGate: <any>{
    },
    IssueSource: {
        enumValues: {
            "none": 0,
            "user": 1,
            "system": 2
        }
    },
    MachineGroupBasedDeployPhase: <any>{
    },
    MailMessage: <any>{
    },
    MailSectionType: {
        enumValues: {
            "details": 0,
            "environments": 1,
            "issues": 2,
            "testResults": 3,
            "workItems": 4,
            "releaseInfo": 5
        }
    },
    ManualIntervention: <any>{
    },
    ManualInterventionStatus: {
        enumValues: {
            "unknown": 0,
            "pending": 1,
            "rejected": 2,
            "approved": 4,
            "canceled": 8
        }
    },
    ManualInterventionUpdateMetadata: <any>{
    },
    MultiConfigInput: <any>{
    },
    MultiMachineInput: <any>{
    },
    PackageTrigger: <any>{
    },
    ParallelExecutionInputBase: <any>{
    },
    ParallelExecutionTypes: {
        enumValues: {
            "none": 0,
            "multiConfiguration": 1,
            "multiMachine": 2
        }
    },
    PipelineProcess: <any>{
    },
    PipelineProcessTypes: {
        enumValues: {
            "designer": 1,
            "yaml": 2
        }
    },
    PropertySelector: <any>{
    },
    PropertySelectorType: {
        enumValues: {
            "inclusion": 0,
            "exclusion": 1
        }
    },
    PullRequestConfiguration: <any>{
    },
    PullRequestSystemType: {
        enumValues: {
            "none": 0,
            "tfsGit": 1,
            "gitHub": 2
        }
    },
    PullRequestTrigger: <any>{
    },
    Release: <any>{
    },
    ReleaseAbandonedEvent: <any>{
    },
    ReleaseApproval: <any>{
    },
    ReleaseApprovalHistory: <any>{
    },
    ReleaseApprovalPendingEvent: <any>{
    },
    ReleaseCondition: <any>{
    },
    ReleaseCreatedEvent: <any>{
    },
    ReleaseDefinition: <any>{
    },
    ReleaseDefinitionApprovals: <any>{
    },
    ReleaseDefinitionEnvironment: <any>{
    },
    ReleaseDefinitionEnvironmentTemplate: <any>{
    },
    ReleaseDefinitionExpands: {
        enumValues: {
            "none": 0,
            "environments": 2,
            "artifacts": 4,
            "triggers": 8,
            "variables": 16,
            "tags": 32,
            "lastRelease": 64
        }
    },
    ReleaseDefinitionQueryOrder: {
        enumValues: {
            "idAscending": 0,
            "idDescending": 1,
            "nameAscending": 2,
            "nameDescending": 3
        }
    },
    ReleaseDefinitionRevision: <any>{
    },
    ReleaseDefinitionSource: {
        enumValues: {
            "undefined": 0,
            "restApi": 1,
            "userInterface": 2,
            "ibiza": 4,
            "portalExtensionApi": 8
        }
    },
    ReleaseDefinitionSummary: <any>{
    },
    ReleaseDeployPhase: <any>{
    },
    ReleaseEnvironment: <any>{
    },
    ReleaseEnvironmentCompletedEvent: <any>{
    },
    ReleaseEnvironmentStatusUpdatedEvent: <any>{
    },
    ReleaseEnvironmentUpdateMetadata: <any>{
    },
    ReleaseExpands: {
        enumValues: {
            "none": 0,
            "environments": 2,
            "artifacts": 4,
            "approvals": 8,
            "manualInterventions": 16,
            "variables": 32,
            "tags": 64
        }
    },
    ReleaseGates: <any>{
    },
    ReleaseGatesPhase: <any>{
    },
    ReleaseQueryOrder: {
        enumValues: {
            "descending": 0,
            "ascending": 1
        }
    },
    ReleaseReason: {
        enumValues: {
            "none": 0,
            "manual": 1,
            "continuousIntegration": 2,
            "schedule": 3,
            "pullRequest": 4
        }
    },
    ReleaseReference: <any>{
    },
    ReleaseRevision: <any>{
    },
    ReleaseSchedule: <any>{
    },
    ReleaseStartMetadata: <any>{
    },
    ReleaseStatus: {
        enumValues: {
            "undefined": 0,
            "draft": 1,
            "active": 2,
            "abandoned": 4
        }
    },
    ReleaseTask: <any>{
    },
    ReleaseTaskAttachment: <any>{
    },
    ReleaseTasksUpdatedEvent: <any>{
    },
    ReleaseTriggerBase: <any>{
    },
    ReleaseTriggerType: {
        enumValues: {
            "undefined": 0,
            "artifactSource": 1,
            "schedule": 2,
            "sourceRepo": 3,
            "containerImage": 4,
            "package": 5,
            "pullRequest": 6
        }
    },
    ReleaseUpdatedEvent: <any>{
    },
    ReleaseUpdateMetadata: <any>{
    },
    RunOnServerDeployPhase: <any>{
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
    ScheduledReleaseTrigger: <any>{
    },
    SenderType: {
        enumValues: {
            "serviceAccount": 1,
            "requestingUser": 2
        }
    },
    ServerDeploymentInput: <any>{
    },
    SingleReleaseExpands: {
        enumValues: {
            "none": 0,
            "tasks": 1
        }
    },
    SourcePullRequestVersion: <any>{
    },
    SourceRepoTrigger: <any>{
    },
    SummaryMailSection: <any>{
    },
    TaskStatus: {
        enumValues: {
            "unknown": 0,
            "pending": 1,
            "inProgress": 2,
            "success": 3,
            "failure": 4,
            "canceled": 5,
            "skipped": 6,
            "succeeded": 7,
            "failed": 8,
            "partiallySucceeded": 9
        }
    },
    VariableGroup: <any>{
    },
    VariableGroupActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16
        }
    },
    YamlFileSource: <any>{
    },
    YamlFileSourceTypes: {
        enumValues: {
            "none": 0,
            "tFSGit": 1
        }
    },
    YamlPipelineProcess: <any>{
    },
};

TypeInfo.AgentArtifactDefinition.fields = {
    artifactType: {
        enumType: TypeInfo.AgentArtifactType
    }
};

TypeInfo.AgentBasedDeployPhase.fields = {
    deploymentInput: {
        typeInfo: TypeInfo.AgentDeploymentInput
    },
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    }
};

TypeInfo.AgentDeploymentInput.fields = {
    parallelExecution: {
        typeInfo: TypeInfo.ExecutionInput
    }
};

TypeInfo.ApprovalOptions.fields = {
    executionOrder: {
        enumType: TypeInfo.ApprovalExecutionOrder
    }
};

TypeInfo.ArtifactContributionDefinition.fields = {
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    }
};

TypeInfo.ArtifactMetadata.fields = {
    instanceReference: {
        typeInfo: TypeInfo.BuildVersion
    }
};

TypeInfo.ArtifactSourceTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    }
};

TypeInfo.ArtifactTypeDefinition.fields = {
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    }
};

TypeInfo.ArtifactVersion.fields = {
    defaultVersion: {
        typeInfo: TypeInfo.BuildVersion
    },
    versions: {
        isArray: true,
        typeInfo: TypeInfo.BuildVersion
    }
};

TypeInfo.ArtifactVersionQueryResult.fields = {
    artifactVersions: {
        isArray: true,
        typeInfo: TypeInfo.ArtifactVersion
    }
};

TypeInfo.AutoTriggerIssue.fields = {
    issueSource: {
        enumType: TypeInfo.IssueSource
    },
    releaseTriggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    }
};

TypeInfo.AzureKeyVaultVariableGroupProviderData.fields = {
    lastRefreshedOn: {
        isDate: true,
    }
};

TypeInfo.AzureKeyVaultVariableValue.fields = {
    expires: {
        isDate: true,
    }
};

TypeInfo.BuildVersion.fields = {
    sourcePullRequestVersion: {
        typeInfo: TypeInfo.SourcePullRequestVersion
    }
};

TypeInfo.Change.fields = {
    timestamp: {
        isDate: true,
    }
};

TypeInfo.CodeRepositoryReference.fields = {
    systemType: {
        enumType: TypeInfo.PullRequestSystemType
    }
};

TypeInfo.Condition.fields = {
    conditionType: {
        enumType: TypeInfo.ConditionType
    }
};

TypeInfo.ContainerImageTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    }
};

TypeInfo.ContinuousDeploymentTriggerIssue.fields = {
    issueSource: {
        enumType: TypeInfo.IssueSource
    },
    releaseTriggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    }
};

TypeInfo.Deployment.fields = {
    completedOn: {
        isDate: true,
    },
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.Condition
    },
    deploymentStatus: {
        enumType: TypeInfo.DeploymentStatus
    },
    lastModifiedOn: {
        isDate: true,
    },
    operationStatus: {
        enumType: TypeInfo.DeploymentOperationStatus
    },
    postDeployApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    preDeployApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    queuedOn: {
        isDate: true,
    },
    reason: {
        enumType: TypeInfo.DeploymentReason
    },
    release: {
        typeInfo: TypeInfo.ReleaseReference
    },
    scheduledDeploymentTime: {
        isDate: true,
    },
    startedOn: {
        isDate: true,
    }
};

TypeInfo.DeploymentApprovalCompletedEvent.fields = {
    approval: {
        typeInfo: TypeInfo.ReleaseApproval
    },
    release: {
        typeInfo: TypeInfo.Release
    }
};

TypeInfo.DeploymentApprovalPendingEvent.fields = {
    approval: {
        typeInfo: TypeInfo.ReleaseApproval
    },
    approvalOptions: {
        typeInfo: TypeInfo.ApprovalOptions
    },
    completedApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    deployment: {
        typeInfo: TypeInfo.Deployment
    },
    pendingApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    release: {
        typeInfo: TypeInfo.Release
    }
};

TypeInfo.DeploymentAttempt.fields = {
    job: {
        typeInfo: TypeInfo.ReleaseTask
    },
    lastModifiedOn: {
        isDate: true,
    },
    operationStatus: {
        enumType: TypeInfo.DeploymentOperationStatus
    },
    postDeploymentGates: {
        typeInfo: TypeInfo.ReleaseGates
    },
    preDeploymentGates: {
        typeInfo: TypeInfo.ReleaseGates
    },
    queuedOn: {
        isDate: true,
    },
    reason: {
        enumType: TypeInfo.DeploymentReason
    },
    releaseDeployPhases: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseDeployPhase
    },
    status: {
        enumType: TypeInfo.DeploymentStatus
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTask
    }
};

TypeInfo.DeploymentAuthorizationInfo.fields = {
    authorizationHeaderFor: {
        enumType: TypeInfo.AuthorizationHeaderFor
    }
};

TypeInfo.DeploymentCompletedEvent.fields = {
    deployment: {
        typeInfo: TypeInfo.Deployment
    },
    environment: {
        typeInfo: TypeInfo.ReleaseEnvironment
    }
};

TypeInfo.DeploymentJob.fields = {
    job: {
        typeInfo: TypeInfo.ReleaseTask
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTask
    }
};

TypeInfo.DeploymentManualInterventionPendingEvent.fields = {
    deployment: {
        typeInfo: TypeInfo.Deployment
    },
    manualIntervention: {
        typeInfo: TypeInfo.ManualIntervention
    },
    release: {
        typeInfo: TypeInfo.Release
    }
};

TypeInfo.DeploymentQueryParameters.fields = {
    deploymentStatus: {
        enumType: TypeInfo.DeploymentStatus
    },
    expands: {
        enumType: TypeInfo.DeploymentExpands
    },
    maxModifiedTime: {
        isDate: true,
    },
    minModifiedTime: {
        isDate: true,
    },
    operationStatus: {
        enumType: TypeInfo.DeploymentOperationStatus
    },
    queryOrder: {
        enumType: TypeInfo.ReleaseQueryOrder
    },
    queryType: {
        enumType: TypeInfo.DeploymentsQueryType
    }
};

TypeInfo.DeploymentStartedEvent.fields = {
    environment: {
        typeInfo: TypeInfo.ReleaseEnvironment
    },
    release: {
        typeInfo: TypeInfo.Release
    }
};

TypeInfo.DeployPhase.fields = {
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    }
};

TypeInfo.EnvironmentTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.EnvironmentTriggerType
    }
};

TypeInfo.ExecutionInput.fields = {
    parallelExecutionType: {
        enumType: TypeInfo.ParallelExecutionTypes
    }
};

TypeInfo.Folder.fields = {
    createdOn: {
        isDate: true,
    },
    lastChangedDate: {
        isDate: true,
    }
};

TypeInfo.GatesDeployPhase.fields = {
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    }
};

TypeInfo.IgnoredGate.fields = {
    lastModifiedOn: {
        isDate: true,
    }
};

TypeInfo.MachineGroupBasedDeployPhase.fields = {
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    }
};

TypeInfo.MailMessage.fields = {
    replyBy: {
        isDate: true,
    },
    sections: {
        isArray: true,
        enumType: TypeInfo.MailSectionType
    },
    senderType: {
        enumType: TypeInfo.SenderType
    }
};

TypeInfo.ManualIntervention.fields = {
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.ManualInterventionStatus
    }
};

TypeInfo.ManualInterventionUpdateMetadata.fields = {
    status: {
        enumType: TypeInfo.ManualInterventionStatus
    }
};

TypeInfo.MultiConfigInput.fields = {
    parallelExecutionType: {
        enumType: TypeInfo.ParallelExecutionTypes
    }
};

TypeInfo.MultiMachineInput.fields = {
    parallelExecutionType: {
        enumType: TypeInfo.ParallelExecutionTypes
    }
};

TypeInfo.PackageTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    }
};

TypeInfo.ParallelExecutionInputBase.fields = {
    parallelExecutionType: {
        enumType: TypeInfo.ParallelExecutionTypes
    }
};

TypeInfo.PipelineProcess.fields = {
    type: {
        enumType: TypeInfo.PipelineProcessTypes
    }
};

TypeInfo.PropertySelector.fields = {
    selectorType: {
        enumType: TypeInfo.PropertySelectorType
    }
};

TypeInfo.PullRequestConfiguration.fields = {
    codeRepositoryReference: {
        typeInfo: TypeInfo.CodeRepositoryReference
    }
};

TypeInfo.PullRequestTrigger.fields = {
    pullRequestConfiguration: {
        typeInfo: TypeInfo.PullRequestConfiguration
    },
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    }
};

TypeInfo.Release.fields = {
    createdOn: {
        isDate: true,
    },
    environments: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseEnvironment
    },
    modifiedOn: {
        isDate: true,
    },
    reason: {
        enumType: TypeInfo.ReleaseReason
    },
    status: {
        enumType: TypeInfo.ReleaseStatus
    },
    variableGroups: {
        isArray: true,
        typeInfo: TypeInfo.VariableGroup
    }
};

TypeInfo.ReleaseAbandonedEvent.fields = {
    release: {
        typeInfo: TypeInfo.Release
    }
};

TypeInfo.ReleaseApproval.fields = {
    approvalType: {
        enumType: TypeInfo.ApprovalType
    },
    createdOn: {
        isDate: true,
    },
    history: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApprovalHistory
    },
    modifiedOn: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.ApprovalStatus
    }
};

TypeInfo.ReleaseApprovalHistory.fields = {
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    }
};

TypeInfo.ReleaseApprovalPendingEvent.fields = {
    approval: {
        typeInfo: TypeInfo.ReleaseApproval
    },
    approvalOptions: {
        typeInfo: TypeInfo.ApprovalOptions
    },
    completedApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    deployment: {
        typeInfo: TypeInfo.Deployment
    },
    environments: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseEnvironment
    },
    pendingApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    }
};

TypeInfo.ReleaseCondition.fields = {
    conditionType: {
        enumType: TypeInfo.ConditionType
    }
};

TypeInfo.ReleaseCreatedEvent.fields = {
    release: {
        typeInfo: TypeInfo.Release
    }
};

TypeInfo.ReleaseDefinition.fields = {
    createdOn: {
        isDate: true,
    },
    environments: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseDefinitionEnvironment
    },
    lastRelease: {
        typeInfo: TypeInfo.ReleaseReference
    },
    modifiedOn: {
        isDate: true,
    },
    pipelineProcess: {
        typeInfo: TypeInfo.PipelineProcess
    },
    source: {
        enumType: TypeInfo.ReleaseDefinitionSource
    },
    triggers: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTriggerBase
    }
};

TypeInfo.ReleaseDefinitionApprovals.fields = {
    approvalOptions: {
        typeInfo: TypeInfo.ApprovalOptions
    }
};

TypeInfo.ReleaseDefinitionEnvironment.fields = {
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.Condition
    },
    deployPhases: {
        isArray: true,
        typeInfo: TypeInfo.DeployPhase
    },
    environmentTriggers: {
        isArray: true,
        typeInfo: TypeInfo.EnvironmentTrigger
    },
    postDeployApprovals: {
        typeInfo: TypeInfo.ReleaseDefinitionApprovals
    },
    preDeployApprovals: {
        typeInfo: TypeInfo.ReleaseDefinitionApprovals
    },
    schedules: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseSchedule
    }
};

TypeInfo.ReleaseDefinitionEnvironmentTemplate.fields = {
    environment: {
        typeInfo: TypeInfo.ReleaseDefinitionEnvironment
    }
};

TypeInfo.ReleaseDefinitionRevision.fields = {
    changedDate: {
        isDate: true,
    },
    changeType: {
        enumType: TypeInfo.AuditAction
    }
};

TypeInfo.ReleaseDefinitionSummary.fields = {
    releases: {
        isArray: true,
        typeInfo: TypeInfo.Release
    }
};

TypeInfo.ReleaseDeployPhase.fields = {
    deploymentJobs: {
        isArray: true,
        typeInfo: TypeInfo.DeploymentJob
    },
    manualInterventions: {
        isArray: true,
        typeInfo: TypeInfo.ManualIntervention
    },
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    },
    startedOn: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.DeployPhaseStatus
    }
};

TypeInfo.ReleaseEnvironment.fields = {
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseCondition
    },
    createdOn: {
        isDate: true,
    },
    deployPhasesSnapshot: {
        isArray: true,
        typeInfo: TypeInfo.DeployPhase
    },
    deploySteps: {
        isArray: true,
        typeInfo: TypeInfo.DeploymentAttempt
    },
    modifiedOn: {
        isDate: true,
    },
    nextScheduledUtcTime: {
        isDate: true,
    },
    postApprovalsSnapshot: {
        typeInfo: TypeInfo.ReleaseDefinitionApprovals
    },
    postDeployApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    preApprovalsSnapshot: {
        typeInfo: TypeInfo.ReleaseDefinitionApprovals
    },
    preDeployApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    scheduledDeploymentTime: {
        isDate: true,
    },
    schedules: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseSchedule
    },
    status: {
        enumType: TypeInfo.EnvironmentStatus
    },
    variableGroups: {
        isArray: true,
        typeInfo: TypeInfo.VariableGroup
    }
};

TypeInfo.ReleaseEnvironmentCompletedEvent.fields = {
    environment: {
        typeInfo: TypeInfo.ReleaseEnvironment
    },
    reason: {
        enumType: TypeInfo.DeploymentReason
    }
};

TypeInfo.ReleaseEnvironmentStatusUpdatedEvent.fields = {
    environmentStatus: {
        enumType: TypeInfo.EnvironmentStatus
    },
    latestDeploymentOperationStatus: {
        enumType: TypeInfo.DeploymentOperationStatus
    },
    latestDeploymentStatus: {
        enumType: TypeInfo.DeploymentStatus
    }
};

TypeInfo.ReleaseEnvironmentUpdateMetadata.fields = {
    scheduledDeploymentTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.EnvironmentStatus
    }
};

TypeInfo.ReleaseGates.fields = {
    deploymentJobs: {
        isArray: true,
        typeInfo: TypeInfo.DeploymentJob
    },
    ignoredGates: {
        isArray: true,
        typeInfo: TypeInfo.IgnoredGate
    },
    lastModifiedOn: {
        isDate: true,
    },
    stabilizationCompletedOn: {
        isDate: true,
    },
    startedOn: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.GateStatus
    },
    succeedingSince: {
        isDate: true,
    }
};

TypeInfo.ReleaseGatesPhase.fields = {
    deploymentJobs: {
        isArray: true,
        typeInfo: TypeInfo.DeploymentJob
    },
    ignoredGates: {
        isArray: true,
        typeInfo: TypeInfo.IgnoredGate
    },
    manualInterventions: {
        isArray: true,
        typeInfo: TypeInfo.ManualIntervention
    },
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    },
    stabilizationCompletedOn: {
        isDate: true,
    },
    startedOn: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.DeployPhaseStatus
    },
    succeedingSince: {
        isDate: true,
    }
};

TypeInfo.ReleaseReference.fields = {
    createdOn: {
        isDate: true,
    },
    reason: {
        enumType: TypeInfo.ReleaseReason
    }
};

TypeInfo.ReleaseRevision.fields = {
    changedDate: {
        isDate: true,
    }
};

TypeInfo.ReleaseSchedule.fields = {
    daysToRelease: {
        enumType: TypeInfo.ScheduleDays
    }
};

TypeInfo.ReleaseStartMetadata.fields = {
    artifacts: {
        isArray: true,
        typeInfo: TypeInfo.ArtifactMetadata
    },
    reason: {
        enumType: TypeInfo.ReleaseReason
    }
};

TypeInfo.ReleaseTask.fields = {
    dateEnded: {
        isDate: true,
    },
    dateStarted: {
        isDate: true,
    },
    finishTime: {
        isDate: true,
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.TaskStatus
    }
};

TypeInfo.ReleaseTaskAttachment.fields = {
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    }
};

TypeInfo.ReleaseTasksUpdatedEvent.fields = {
    job: {
        typeInfo: TypeInfo.ReleaseTask
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTask
    }
};

TypeInfo.ReleaseTriggerBase.fields = {
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    }
};

TypeInfo.ReleaseUpdatedEvent.fields = {
    release: {
        typeInfo: TypeInfo.Release
    }
};

TypeInfo.ReleaseUpdateMetadata.fields = {
    status: {
        enumType: TypeInfo.ReleaseStatus
    }
};

TypeInfo.RunOnServerDeployPhase.fields = {
    deploymentInput: {
        typeInfo: TypeInfo.ServerDeploymentInput
    },
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    }
};

TypeInfo.ScheduledReleaseTrigger.fields = {
    schedule: {
        typeInfo: TypeInfo.ReleaseSchedule
    },
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    }
};

TypeInfo.ServerDeploymentInput.fields = {
    parallelExecution: {
        typeInfo: TypeInfo.ExecutionInput
    }
};

TypeInfo.SourcePullRequestVersion.fields = {
    pullRequestMergedAt: {
        isDate: true,
    }
};

TypeInfo.SourceRepoTrigger.fields = {
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    }
};

TypeInfo.SummaryMailSection.fields = {
    sectionType: {
        enumType: TypeInfo.MailSectionType
    }
};

TypeInfo.VariableGroup.fields = {
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    }
};

TypeInfo.YamlFileSource.fields = {
    type: {
        enumType: TypeInfo.YamlFileSourceTypes
    }
};

TypeInfo.YamlPipelineProcess.fields = {
    fileSource: {
        typeInfo: TypeInfo.YamlFileSource
    },
    type: {
        enumType: TypeInfo.PipelineProcessTypes
    }
};
