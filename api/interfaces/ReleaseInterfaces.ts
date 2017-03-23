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

import FormInputInterfaces = require("../interfaces/common/FormInputInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AgentArtifactDefinition {
    alias: string;
    artifactType: AgentArtifactType;
    details: string;
    name: string;
    version: string;
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
    deploymentInput: AgentDeploymentInput;
}

export interface AgentDeploymentInput extends DeploymentInput {
    imageId: number;
    parallelExecution: ExecutionInput;
}

export interface ApprovalOptions {
    autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped: boolean;
    enforceIdentityRevalidation: boolean;
    releaseCreatorCanBeApprover: boolean;
    requiredApproverCount: number;
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
    alias: string;
    definitionReference: { [key: string] : ArtifactSourceReference; };
    isPrimary: boolean;
    sourceId: string;
    type: string;
}

export interface ArtifactContributionDefinition {
    artifactType: string;
    artifactTypeStreamMapping: { [key: string] : string; };
    browsableArtifactTypeMapping: { [key: string] : string; };
    dataSourceBindings: DataSourceBinding[];
    displayName: string;
    downloadTaskId: string;
    endpointTypeId: string;
    inputDescriptors: FormInputInterfaces.InputDescriptor[];
    name: string;
    uniqueSourceIdentifier: string;
}

export interface ArtifactFilter {
    sourceBranch: string;
    tags: string[];
}

export interface ArtifactInstanceData {
    accountName: string;
    authenticationToken: string;
    tfsUrl: string;
    version: string;
}

export interface ArtifactMetadata {
    alias: string;
    instanceReference: BuildVersion;
}

export interface ArtifactProvider {
    id: number;
    name: string;
    sourceUri: string;
    version: string;
}

export interface ArtifactSourceId {
    artifactTypeId: string;
    sourceIdInputs: SourceIdInput[];
}

export interface ArtifactSourceIdsQueryResult {
    artifactSourceIds: ArtifactSourceId[];
}

export interface ArtifactSourceReference {
    id: string;
    name: string;
}

export interface ArtifactSourceTrigger extends ReleaseTriggerBase {
    /**
     * Artifact source alias for Artifact Source trigger type
     */
    artifactAlias: string;
    triggerConditions: ArtifactFilter[];
}

export interface ArtifactTypeDefinition {
    displayName: string;
    inputDescriptors: FormInputInterfaces.InputDescriptor[];
    name: string;
    uniqueSourceIdentifier: string;
}

export interface ArtifactVersion {
    alias: string;
    defaultVersion: BuildVersion;
    errorMessage: string;
    sourceId: string;
    versions: BuildVersion[];
}

export interface ArtifactVersionQueryResult {
    artifactVersions: ArtifactVersion[];
}

export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
}

export enum AuthorizationHeaderFor {
    RevalidateApproverIdentity = 0,
    OnBehalfOf = 1,
}

export interface BaseDeploymentInput {
    shareOutputVariables: boolean;
}

export interface BuildVersion {
    id: string;
    name: string;
    sourceBranch: string;
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
     * The type of change. "commit", "changeset", etc.
     */
    changeType: string;
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
     * A timestamp for the change.
     */
    timestamp: Date;
}

export interface Condition {
    conditionType: ConditionType;
    name: string;
    value: string;
}

export enum ConditionType {
    Undefined = 0,
    Event = 1,
    EnvironmentState = 2,
    Artifact = 4,
}

export interface ConfigurationVariableValue {
    isSecret: boolean;
    value: string;
}

export interface Consumer {
    consumerId: number;
    consumerName: string;
}

export interface ContinuousDeploymentAppServicePlanConfiguration {
    appServicePlan: string;
    appServicePlanName: string;
    appServicePricingTier: string;
}

export interface ContinuousDeploymentSetupData {
    branch: string;
    environmentName: string;
    projectId: string;
    repoId: string;
    resourceGroup: string;
    slotConfiguration: ContinuousDeploymentSlotConfiguration;
    sourceConfiguration: ContinuousDeploymentSourceConfiguration;
    subscriptionId: string;
    subscriptionName: string;
    tenantId: string;
    testWebAppConfiguration: ContinuousDeploymentTestWebAppConfiguration;
    webAppName: string;
    webAppProjectType: ContinuousDeploymentWebAppProjectType;
}

export interface ContinuousDeploymentSlotConfiguration {
    slotName: string;
    webAppLocation: string;
}

export interface ContinuousDeploymentSourceConfiguration {
    branch: string;
    sourceRepository: SourceRepository;
}

export interface ContinuousDeploymentTestWebAppConfiguration {
    appServicePlanConfiguration: ContinuousDeploymentAppServicePlanConfiguration;
    environmentName: string;
    testWebAppLocation: string;
    testWebAppName: string;
}

export enum ContinuousDeploymentWebAppProjectType {
    AspNetWap = 0,
    AspNetCore = 1,
    NodeJSWithGulp = 2,
    NodeJSWithGrunt = 3,
}

export interface ControlOptions {
    alwaysRun: boolean;
    continueOnError: boolean;
    enabled: boolean;
}

export interface DataSourceBinding {
    dataSourceName: string;
    endpointId: string;
    endpointUrl: string;
    parameters: { [key: string] : string; };
    resultSelector: string;
    resultTemplate: string;
    target: string;
}

export interface DefinitionEnvironmentReference {
    definitionEnvironmentId: number;
    definitionEnvironmentName: string;
    releaseDefinitionId: number;
    releaseDefinitionName: string;
}

export interface Deployment {
    _links: any;
    attempt: number;
    conditions: Condition[];
    definitionEnvironmentId: number;
    deploymentStatus: DeploymentStatus;
    id: number;
    lastModifiedBy: VSSInterfaces.IdentityRef;
    lastModifiedOn: Date;
    operationStatus: DeploymentOperationStatus;
    postDeployApprovals: ReleaseApproval[];
    preDeployApprovals: ReleaseApproval[];
    queuedOn: Date;
    reason: DeploymentReason;
    release: ReleaseReference;
    releaseDefinition: ReleaseDefinitionShallowReference;
    releaseEnvironment: ReleaseEnvironmentShallowReference;
    requestedBy: VSSInterfaces.IdentityRef;
    requestedFor: VSSInterfaces.IdentityRef;
    scheduledDeploymentTime: Date;
    startedOn: Date;
}

export interface DeploymentApprovalCompletedEvent {
    approval: ReleaseApproval;
    project: ProjectReference;
    release: Release;
}

export interface DeploymentApprovalPendingEvent {
    approval: ReleaseApproval;
    approvalOptions: ApprovalOptions;
    completedApprovals: ReleaseApproval[];
    data: { [key: string] : any; };
    deployment: Deployment;
    isMultipleRankApproval: boolean;
    pendingApprovals: ReleaseApproval[];
    project: ProjectReference;
    release: Release;
}

export interface DeploymentAttempt {
    attempt: number;
    deploymentId: number;
    /**
     * Error log to show any unexpected error that occurred during executing deploy step
     */
    errorLog: string;
    /**
     * The time at which the deployment started, and null if it has not been deployed yet
     */
    hasStarted: boolean;
    id: number;
    job: ReleaseTask;
    lastModifiedBy: VSSInterfaces.IdentityRef;
    lastModifiedOn: Date;
    operationStatus: DeploymentOperationStatus;
    queuedOn: Date;
    reason: DeploymentReason;
    releaseDeployPhases: ReleaseDeployPhase[];
    requestedBy: VSSInterfaces.IdentityRef;
    requestedFor: VSSInterfaces.IdentityRef;
    runPlanId: string;
    status: DeploymentStatus;
    tasks: ReleaseTask[];
}

export interface DeploymentAuthorizationInfo {
    authorizationHeaderFor: AuthorizationHeaderFor;
    resources: string[];
    tenantId: string;
    vstsAccessTokenKey: string;
}

export enum DeploymentAuthorizationOwner {
    Automatic = 0,
    DeploymentSubmitter = 1,
    FirstPreDeploymentApprover = 2,
}

export interface DeploymentCompletedEvent {
    comment: string;
    data: { [key: string] : any; };
    deployment: Deployment;
    environment: ReleaseEnvironment;
    project: ProjectReference;
}

export interface DeploymentInput extends BaseDeploymentInput {
    demands: any[];
    enableAccessToken: boolean;
    queueId: number;
    skipArtifactsDownload: boolean;
    timeoutInMinutes: number;
}

export interface DeploymentJob {
    job: ReleaseTask;
    tasks: ReleaseTask[];
}

export interface DeploymentManualInterventionPendingEvent {
    deployment: Deployment;
    emailRecipients: string[];
    environmentOwner: VSSInterfaces.IdentityRef;
    manualIntervention: ManualIntervention;
    project: ProjectReference;
    release: Release;
}

export enum DeploymentOperationStatus {
    Undefined = 0,
    Queued = 1,
    Scheduled = 2,
    Pending = 4,
    Approved = 8,
    Rejected = 16,
    Deferred = 32,
    QueuedForAgent = 64,
    PhaseInProgress = 128,
    PhaseSucceeded = 256,
    PhasePartiallySucceeded = 512,
    PhaseFailed = 1024,
    Canceled = 2048,
    PhaseCanceled = 4096,
    ManualInterventionPending = 8192,
    QueuedForPipeline = 16384,
}

export interface DeploymentQueryParameters {
    artifactSourceId: string;
    artifactTypeId: string;
    artifactVersions: string[];
    deploymentStatus: DeploymentStatus;
    environments: DefinitionEnvironmentReference[];
    isDeleted: boolean;
    latestDeploymentsOnly: boolean;
    maxDeploymentsPerEnvironment: number;
    maxModifiedTime: Date;
    minModifiedTime: Date;
    operationStatus: DeploymentOperationStatus;
    queryOrder: ReleaseQueryOrder;
}

export enum DeploymentReason {
    None = 0,
    Manual = 1,
    Automated = 2,
    Scheduled = 4,
}

export interface DeploymentStartedEvent {
    environment: ReleaseEnvironment;
    project: ProjectReference;
    release: Release;
}

export enum DeploymentStatus {
    Undefined = 0,
    NotDeployed = 1,
    InProgress = 2,
    Succeeded = 4,
    PartiallySucceeded = 8,
    Failed = 16,
}

export interface DeployPhase {
    name: string;
    phaseType: DeployPhaseTypes;
    rank: number;
    workflowTasks: WorkflowTask[];
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
}

export enum DeployPhaseTypes {
    Undefined = 0,
    AgentBasedDeployment = 1,
    RunOnServer = 2,
    MachineGroupBasedDeployment = 4,
}

export interface EmailRecipients {
    emailAddresses: string[];
    tfsIds: string[];
}

/**
 * Defines policy on environment queuing at Release Management side queue. We will send to Environment Runner [creating pre-deploy and other steps] only when the policies mentioned are satisfied.
 */
export interface EnvironmentExecutionPolicy {
    /**
     * This policy decides, how many environments would be with Environment Runner.
     */
    concurrencyCount: number;
    /**
     * Queue depth in the EnvironmentQueue table, this table keeps the environment entries till Environment Runner is free [as per it's policy] to take another environment for running.
     */
    queueDepthCount: number;
}

export interface EnvironmentOptions {
    emailNotificationType: string;
    emailRecipients: string;
    enableAccessToken: boolean;
    skipArtifactsDownload: boolean;
    timeoutInMinutes: number;
}

export interface EnvironmentRetentionPolicy {
    daysToKeep: number;
    releasesToKeep: number;
    retainBuild: boolean;
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

export interface ExecutionInput {
    parallelExecutionType: ParallelExecutionTypes;
}

/**
 * Class to represent favorite entry
 */
export interface FavoriteItem {
    /**
     * Application specific data for the entry
     */
    data: string;
    /**
     * Unique Id of the the entry
     */
    id: string;
    /**
     * Display text for favorite entry
     */
    name: string;
    /**
     * Application specific favorite entry type. Empty or Null represents that Favorite item is a Folder
     */
    type: string;
}

export interface Folder {
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    description: string;
    lastChangedBy: VSSInterfaces.IdentityRef;
    lastChangedDate: Date;
    path: string;
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

export interface Issue {
    issueType: string;
    message: string;
}

export interface MachineGroupBasedDeployPhase extends DeployPhase {
    deploymentInput: MachineGroupDeploymentInput;
}

export interface MachineGroupDeploymentInput extends DeploymentInput {
    deploymentHealthOption: string;
    healthPercent: number;
    tags: string[];
}

export interface MailMessage {
    body: string;
    cC: EmailRecipients;
    inReplyTo: string;
    messageId: string;
    replyBy: Date;
    replyTo: EmailRecipients;
    sections: MailSectionType[];
    senderType: SenderType;
    subject: string;
    to: EmailRecipients;
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
    approver: VSSInterfaces.IdentityRef;
    comments: string;
    createdOn: Date;
    id: number;
    instructions: string;
    modifiedOn: Date;
    name: string;
    release: ReleaseShallowReference;
    releaseDefinition: ReleaseDefinitionShallowReference;
    releaseEnvironment: ReleaseEnvironmentShallowReference;
    status: ManualInterventionStatus;
    taskInstanceId: string;
    url: string;
}

export enum ManualInterventionStatus {
    Unknown = 0,
    Pending = 1,
    Rejected = 2,
    Approved = 4,
    Canceled = 8,
}

export interface ManualInterventionUpdateMetadata {
    comment: string;
    status: ManualInterventionStatus;
}

export interface MappingDetails {
    mappings: { [key: string] : FormInputInterfaces.InputValue; };
}

export interface Metric {
    name: string;
    value: number;
}

export interface MultiConfigInput extends ParallelExecutionInputBase {
    multipliers: string;
}

export interface MultiMachineInput extends ParallelExecutionInputBase {
}

export interface ParallelExecutionInputBase extends ExecutionInput {
    continueOnError: boolean;
    maxNumberOfAgents: number;
}

export enum ParallelExecutionTypes {
    None = 0,
    MultiConfiguration = 1,
    MultiMachine = 2,
}

export interface ProjectReference {
    id: string;
    name: string;
}

export interface PropertySelector {
    properties: string[];
    selectorType: PropertySelectorType;
}

export enum PropertySelectorType {
    Inclusion = 0,
    Exclusion = 1,
}

export interface QueuedReleaseData {
    projectId: string;
    queuePosition: number;
    releaseId: number;
}

export interface RealtimeReleaseEvent {
    projectId: string;
    releaseId: number;
}

export interface Release {
    _links: any;
    artifacts: Artifact[];
    comment: string;
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    definitionSnapshotRevision: number;
    description: string;
    environments: ReleaseEnvironment[];
    id: number;
    keepForever: boolean;
    logsContainerUrl: string;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    name: string;
    poolName: string;
    projectReference: ProjectReference;
    properties: any;
    reason: ReleaseReason;
    releaseDefinition: ReleaseDefinitionShallowReference;
    releaseNameFormat: string;
    status: ReleaseStatus;
    tags: string[];
    url: string;
    variableGroups: VariableGroup[];
    variables: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseAbandonedEvent {
    project: ProjectReference;
    release: Release;
}

export interface ReleaseApproval {
    approvalType: ApprovalType;
    approvedBy: VSSInterfaces.IdentityRef;
    approver: VSSInterfaces.IdentityRef;
    attempt: number;
    comments: string;
    createdOn: Date;
    history: ReleaseApprovalHistory[];
    id: number;
    isAutomated: boolean;
    isNotificationOn: boolean;
    modifiedOn: Date;
    rank: number;
    release: ReleaseShallowReference;
    releaseDefinition: ReleaseDefinitionShallowReference;
    releaseEnvironment: ReleaseEnvironmentShallowReference;
    revision: number;
    status: ApprovalStatus;
    trialNumber: number;
    url: string;
}

export interface ReleaseApprovalHistory {
    approver: VSSInterfaces.IdentityRef;
    changedBy: VSSInterfaces.IdentityRef;
    comments: string;
    createdOn: Date;
    modifiedOn: Date;
    revision: number;
}

export interface ReleaseApprovalPendingEvent {
    approval: ReleaseApproval;
    approvalOptions: ApprovalOptions;
    completedApprovals: ReleaseApproval[];
    definitionName: string;
    deployment: Deployment;
    environmentId: number;
    environmentName: string;
    environments: ReleaseEnvironment[];
    isMultipleRankApproval: boolean;
    pendingApprovals: ReleaseApproval[];
    releaseCreator: string;
    releaseName: string;
    title: string;
    webAccessUri: string;
}

export interface ReleaseArtifact {
    artifactProvider: ArtifactProvider;
    artifactType: string;
    definitionData: string;
    definitionId: number;
    description: string;
    id: number;
    name: string;
    releaseId: number;
}

export interface ReleaseCreatedEvent {
    project: ProjectReference;
    release: Release;
}

export interface ReleaseDefinition {
    _links: any;
    artifacts: Artifact[];
    comment: string;
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    environments: ReleaseDefinitionEnvironment[];
    id: number;
    lastRelease: ReleaseReference;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    name: string;
    path: string;
    properties: any;
    releaseNameFormat: string;
    retentionPolicy: RetentionPolicy;
    revision: number;
    source: ReleaseDefinitionSource;
    tags: string[];
    triggers: ReleaseTriggerBase[];
    url: string;
    variableGroups: number[];
    variables: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseDefinitionApprovals {
    approvalOptions: ApprovalOptions;
    approvals: ReleaseDefinitionApprovalStep[];
}

export interface ReleaseDefinitionApprovalStep extends ReleaseDefinitionEnvironmentStep {
    approver: VSSInterfaces.IdentityRef;
    isAutomated: boolean;
    isNotificationOn: boolean;
    rank: number;
}

export interface ReleaseDefinitionDeployStep extends ReleaseDefinitionEnvironmentStep {
    /**
     * The list of steps for this definition.
     */
    tasks: WorkflowTask[];
}

export interface ReleaseDefinitionEnvironment {
    conditions: Condition[];
    demands: any[];
    deployPhases: DeployPhase[];
    deployStep: ReleaseDefinitionDeployStep;
    environmentOptions: EnvironmentOptions;
    executionPolicy: EnvironmentExecutionPolicy;
    id: number;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    postDeployApprovals: ReleaseDefinitionApprovals;
    preDeployApprovals: ReleaseDefinitionApprovals;
    queueId: number;
    rank: number;
    retentionPolicy: EnvironmentRetentionPolicy;
    runOptions: { [key: string] : string; };
    schedules: ReleaseSchedule[];
    variables: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseDefinitionEnvironmentStep {
    id: number;
}

export interface ReleaseDefinitionEnvironmentSummary {
    id: number;
    lastReleases: ReleaseShallowReference[];
    name: string;
}

export interface ReleaseDefinitionEnvironmentTemplate {
    canDelete: boolean;
    category: string;
    description: string;
    environment: ReleaseDefinitionEnvironment;
    iconTaskId: string;
    iconUri: string;
    id: string;
    name: string;
}

export enum ReleaseDefinitionExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Triggers = 8,
    Variables = 16,
    Tags = 32,
}

export enum ReleaseDefinitionQueryOrder {
    IdAscending = 0,
    IdDescending = 1,
    NameAscending = 2,
    NameDescending = 3,
}

export interface ReleaseDefinitionRevision {
    changedBy: VSSInterfaces.IdentityRef;
    changedDate: Date;
    changeType: AuditAction;
    comment: string;
    definitionId: number;
    definitionUrl: string;
    revision: number;
}

export interface ReleaseDefinitionShallowReference {
    _links: any;
    id: number;
    name: string;
    url: string;
}

export enum ReleaseDefinitionSource {
    Undefined = 0,
    RestApi = 1,
    UserInterface = 2,
    Ibiza = 4,
    PortalExtensionApi = 8,
}

export interface ReleaseDefinitionSummary {
    environments: ReleaseDefinitionEnvironmentSummary[];
    releaseDefinition: ReleaseDefinitionShallowReference;
    releases: Release[];
}

export interface ReleaseDeployPhase {
    deploymentJobs: DeploymentJob[];
    errorLog: string;
    id: number;
    manualInterventions: ManualIntervention[];
    phaseType: DeployPhaseTypes;
    rank: number;
    runPlanId: string;
    status: DeployPhaseStatus;
}

export interface ReleaseEnvironment {
    conditions: Condition[];
    createdOn: Date;
    definitionEnvironmentId: number;
    demands: any[];
    deployPhasesSnapshot: DeployPhase[];
    deploySteps: DeploymentAttempt[];
    environmentOptions: EnvironmentOptions;
    id: number;
    modifiedOn: Date;
    name: string;
    nextScheduledUtcTime: Date;
    owner: VSSInterfaces.IdentityRef;
    postApprovalsSnapshot: ReleaseDefinitionApprovals;
    postDeployApprovals: ReleaseApproval[];
    preApprovalsSnapshot: ReleaseDefinitionApprovals;
    preDeployApprovals: ReleaseApproval[];
    queueId: number;
    rank: number;
    release: ReleaseShallowReference;
    releaseCreatedBy: VSSInterfaces.IdentityRef;
    releaseDefinition: ReleaseDefinitionShallowReference;
    releaseDescription: string;
    releaseId: number;
    scheduledDeploymentTime: Date;
    schedules: ReleaseSchedule[];
    status: EnvironmentStatus;
    timeToDeploy: number;
    triggerReason: string;
    variables: { [key: string] : ConfigurationVariableValue; };
    workflowTasks: WorkflowTask[];
}

export interface ReleaseEnvironmentCompletedEvent {
    conditions: Condition[];
    createdByName: string;
    definitionId: number;
    definitionName: string;
    environment: ReleaseEnvironment;
    environmentId: number;
    projectName: string;
    reason: DeploymentReason;
    releaseCreatedBy: VSSInterfaces.IdentityRef;
    releaseLogsUri: string;
    releaseName: string;
    status: string;
    title: string;
    webAccessUri: string;
}

export interface ReleaseEnvironmentShallowReference {
    _links: any;
    id: number;
    name: string;
    url: string;
}

export interface ReleaseEnvironmentUpdateMetadata {
    comment: string;
    scheduledDeploymentTime: Date;
    status: EnvironmentStatus;
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

export enum ReleaseQueryOrder {
    Descending = 0,
    Ascending = 1,
}

export enum ReleaseReason {
    None = 0,
    Manual = 1,
    ContinuousIntegration = 2,
    Schedule = 3,
    IndividualCI = 4,
    BatchedCI = 5,
}

export interface ReleaseReference {
    _links: any;
    artifacts: Artifact[];
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    description: string;
    id: number;
    modifiedBy: VSSInterfaces.IdentityRef;
    name: string;
    reason: ReleaseReason;
    releaseDefinition: ReleaseDefinitionShallowReference;
    url: string;
    webAccessUri: string;
}

export interface ReleaseRevision {
    changedBy: VSSInterfaces.IdentityRef;
    changedDate: Date;
    changeDetails: string;
    changeType: string;
    comment: string;
    definitionSnapshotRevision: number;
    releaseId: number;
}

export interface ReleaseSchedule {
    /**
     * Days of the week to release
     */
    daysToRelease: ScheduleDays;
    /**
     * Team Foundation Job Definition Job Id
     */
    jobId: string;
    /**
     * Local time zone hour to start
     */
    startHours: number;
    /**
     * Local time zone minute to start
     */
    startMinutes: number;
    /**
     * Time zone Id of release schedule, such as 'UTC'
     */
    timeZoneId: string;
}

export interface ReleaseSettings {
    retentionSettings: RetentionSettings;
}

export interface ReleaseShallowReference {
    _links: any;
    id: number;
    name: string;
    url: string;
}

export interface ReleaseStartMetadata {
    artifacts: ArtifactMetadata[];
    definitionId: number;
    description: string;
    isDraft: boolean;
    manualEnvironments: string[];
    properties: any;
    reason: ReleaseReason;
}

export enum ReleaseStatus {
    Undefined = 0,
    Draft = 1,
    Active = 2,
    Abandoned = 4,
}

export interface ReleaseTask {
    agentName: string;
    dateEnded: Date;
    dateStarted: Date;
    finishTime: Date;
    id: number;
    issues: Issue[];
    lineCount: number;
    logUrl: string;
    name: string;
    rank: number;
    startTime: Date;
    status: TaskStatus;
    task: WorkflowTaskReference;
    timelineRecordId: string;
}

export interface ReleaseTaskLogUpdatedEvent extends RealtimeReleaseEvent {
    environmentId: number;
    lines: string[];
    timelineRecordId: string;
}

export interface ReleaseTasksUpdatedEvent extends RealtimeReleaseEvent {
    environmentId: number;
    job: ReleaseTask;
    releaseDeployPhaseId: number;
    releaseStepId: number;
    tasks: ReleaseTask[];
}

export interface ReleaseTriggerBase {
    triggerType: ReleaseTriggerType;
}

export enum ReleaseTriggerType {
    Undefined = 0,
    ArtifactSource = 1,
    Schedule = 2,
}

export interface ReleaseUpdatedEvent extends RealtimeReleaseEvent {
    release: Release;
}

export interface ReleaseUpdateMetadata {
    comment: string;
    keepForever: boolean;
    manualEnvironments: string[];
    status: ReleaseStatus;
}

export interface ReleaseWorkItemRef {
    id: string;
    url: string;
}

export interface RetentionPolicy {
    daysToKeep: number;
}

export interface RetentionSettings {
    daysToKeepDeletedReleases: number;
    defaultEnvironmentRetentionPolicy: EnvironmentRetentionPolicy;
    maximumEnvironmentRetentionPolicy: EnvironmentRetentionPolicy;
}

export interface RunOnServerDeployPhase extends DeployPhase {
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
    schedule: ReleaseSchedule;
}

export enum SenderType {
    ServiceAccount = 1,
    RequestingUser = 2,
}

export interface SourceIdInput {
    id: string;
    name: string;
}

export interface SourceRepository {
    endpointIdentifier: string;
    identifier: string;
    repositoryType: SourceRepositoryType;
}

export enum SourceRepositoryType {
    Invalid = 0,
    VstsGit = 1,
    GitHub = 2,
}

export interface SummaryMailSection {
    htmlContent: string;
    rank: number;
    sectionType: MailSectionType;
    title: string;
}

export interface TaskOrchestrationPlanGroupReference {
    planGroup: string;
    projectId: string;
}

export interface TaskOrchestrationPlanGroupsStartedEvent {
    planGroups: TaskOrchestrationPlanGroupReference[];
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

export interface TimeZone {
    displayName: string;
    id: string;
}

export interface TimeZoneList {
    utcTimeZone: TimeZone;
    validTimeZones: TimeZone[];
}

export interface VariableGroup {
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    description: string;
    id: number;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    name: string;
    variables: { [key: string] : VariableValue; };
}

export enum VariableGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}

export interface VariableValue {
    isSecret: boolean;
    value: string;
}

export interface WorkflowTask {
    alwaysRun: boolean;
    continueOnError: boolean;
    definitionType: string;
    enabled: boolean;
    inputs: { [key: string] : string; };
    name: string;
    taskId: string;
    timeoutInMinutes: number;
    version: string;
}

export interface WorkflowTaskReference {
    id: string;
    name: string;
    version: string;
}

export var TypeInfo = {
    AgentArtifactDefinition: {
        fields: <any>null
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
            "tfvc": 10,
        }
    },
    AgentBasedDeployPhase: {
        fields: <any>null
    },
    AgentDeploymentInput: {
        fields: <any>null
    },
    ApprovalOptions: {
        fields: <any>null
    },
    ApprovalStatus: {
        enumValues: {
            "undefined": 0,
            "pending": 1,
            "approved": 2,
            "rejected": 4,
            "reassigned": 6,
            "canceled": 7,
            "skipped": 8,
        }
    },
    ApprovalType: {
        enumValues: {
            "undefined": 0,
            "preDeploy": 1,
            "postDeploy": 2,
            "all": 3,
        }
    },
    Artifact: {
        fields: <any>null
    },
    ArtifactContributionDefinition: {
        fields: <any>null
    },
    ArtifactFilter: {
        fields: <any>null
    },
    ArtifactInstanceData: {
        fields: <any>null
    },
    ArtifactMetadata: {
        fields: <any>null
    },
    ArtifactProvider: {
        fields: <any>null
    },
    ArtifactSourceId: {
        fields: <any>null
    },
    ArtifactSourceIdsQueryResult: {
        fields: <any>null
    },
    ArtifactSourceReference: {
        fields: <any>null
    },
    ArtifactSourceTrigger: {
        fields: <any>null
    },
    ArtifactTypeDefinition: {
        fields: <any>null
    },
    ArtifactVersion: {
        fields: <any>null
    },
    ArtifactVersionQueryResult: {
        fields: <any>null
    },
    AuditAction: {
        enumValues: {
            "add": 1,
            "update": 2,
            "delete": 3,
        }
    },
    AuthorizationHeaderFor: {
        enumValues: {
            "revalidateApproverIdentity": 0,
            "onBehalfOf": 1,
        }
    },
    BaseDeploymentInput: {
        fields: <any>null
    },
    BuildVersion: {
        fields: <any>null
    },
    Change: {
        fields: <any>null
    },
    Condition: {
        fields: <any>null
    },
    ConditionType: {
        enumValues: {
            "undefined": 0,
            "event": 1,
            "environmentState": 2,
            "artifact": 4,
        }
    },
    ConfigurationVariableValue: {
        fields: <any>null
    },
    Consumer: {
        fields: <any>null
    },
    ContinuousDeploymentAppServicePlanConfiguration: {
        fields: <any>null
    },
    ContinuousDeploymentSetupData: {
        fields: <any>null
    },
    ContinuousDeploymentSlotConfiguration: {
        fields: <any>null
    },
    ContinuousDeploymentSourceConfiguration: {
        fields: <any>null
    },
    ContinuousDeploymentTestWebAppConfiguration: {
        fields: <any>null
    },
    ContinuousDeploymentWebAppProjectType: {
        enumValues: {
            "aspNetWap": 0,
            "aspNetCore": 1,
            "nodeJSWithGulp": 2,
            "nodeJSWithGrunt": 3,
        }
    },
    ControlOptions: {
        fields: <any>null
    },
    DataSourceBinding: {
        fields: <any>null
    },
    DefinitionEnvironmentReference: {
        fields: <any>null
    },
    Deployment: {
        fields: <any>null
    },
    DeploymentApprovalCompletedEvent: {
        fields: <any>null
    },
    DeploymentApprovalPendingEvent: {
        fields: <any>null
    },
    DeploymentAttempt: {
        fields: <any>null
    },
    DeploymentAuthorizationInfo: {
        fields: <any>null
    },
    DeploymentAuthorizationOwner: {
        enumValues: {
            "automatic": 0,
            "deploymentSubmitter": 1,
            "firstPreDeploymentApprover": 2,
        }
    },
    DeploymentCompletedEvent: {
        fields: <any>null
    },
    DeploymentInput: {
        fields: <any>null
    },
    DeploymentJob: {
        fields: <any>null
    },
    DeploymentManualInterventionPendingEvent: {
        fields: <any>null
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
        }
    },
    DeploymentQueryParameters: {
        fields: <any>null
    },
    DeploymentReason: {
        enumValues: {
            "none": 0,
            "manual": 1,
            "automated": 2,
            "scheduled": 4,
        }
    },
    DeploymentStartedEvent: {
        fields: <any>null
    },
    DeploymentStatus: {
        enumValues: {
            "undefined": 0,
            "notDeployed": 1,
            "inProgress": 2,
            "succeeded": 4,
            "partiallySucceeded": 8,
            "failed": 16,
        }
    },
    DeployPhase: {
        fields: <any>null
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
        }
    },
    DeployPhaseTypes: {
        enumValues: {
            "undefined": 0,
            "agentBasedDeployment": 1,
            "runOnServer": 2,
            "machineGroupBasedDeployment": 4,
        }
    },
    EmailRecipients: {
        fields: <any>null
    },
    EnvironmentExecutionPolicy: {
        fields: <any>null
    },
    EnvironmentOptions: {
        fields: <any>null
    },
    EnvironmentRetentionPolicy: {
        fields: <any>null
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
            "partiallySucceeded": 128,
        }
    },
    ExecutionInput: {
        fields: <any>null
    },
    FavoriteItem: {
        fields: <any>null
    },
    Folder: {
        fields: <any>null
    },
    FolderPathQueryOrder: {
        enumValues: {
            "none": 0,
            "ascending": 1,
            "descending": 2,
        }
    },
    Issue: {
        fields: <any>null
    },
    MachineGroupBasedDeployPhase: {
        fields: <any>null
    },
    MachineGroupDeploymentInput: {
        fields: <any>null
    },
    MailMessage: {
        fields: <any>null
    },
    MailSectionType: {
        enumValues: {
            "details": 0,
            "environments": 1,
            "issues": 2,
            "testResults": 3,
            "workItems": 4,
            "releaseInfo": 5,
        }
    },
    ManualIntervention: {
        fields: <any>null
    },
    ManualInterventionStatus: {
        enumValues: {
            "unknown": 0,
            "pending": 1,
            "rejected": 2,
            "approved": 4,
            "canceled": 8,
        }
    },
    ManualInterventionUpdateMetadata: {
        fields: <any>null
    },
    MappingDetails: {
        fields: <any>null
    },
    Metric: {
        fields: <any>null
    },
    MultiConfigInput: {
        fields: <any>null
    },
    MultiMachineInput: {
        fields: <any>null
    },
    ParallelExecutionInputBase: {
        fields: <any>null
    },
    ParallelExecutionTypes: {
        enumValues: {
            "none": 0,
            "multiConfiguration": 1,
            "multiMachine": 2,
        }
    },
    ProjectReference: {
        fields: <any>null
    },
    PropertySelector: {
        fields: <any>null
    },
    PropertySelectorType: {
        enumValues: {
            "inclusion": 0,
            "exclusion": 1,
        }
    },
    QueuedReleaseData: {
        fields: <any>null
    },
    RealtimeReleaseEvent: {
        fields: <any>null
    },
    Release: {
        fields: <any>null
    },
    ReleaseAbandonedEvent: {
        fields: <any>null
    },
    ReleaseApproval: {
        fields: <any>null
    },
    ReleaseApprovalHistory: {
        fields: <any>null
    },
    ReleaseApprovalPendingEvent: {
        fields: <any>null
    },
    ReleaseArtifact: {
        fields: <any>null
    },
    ReleaseCreatedEvent: {
        fields: <any>null
    },
    ReleaseDefinition: {
        fields: <any>null
    },
    ReleaseDefinitionApprovals: {
        fields: <any>null
    },
    ReleaseDefinitionApprovalStep: {
        fields: <any>null
    },
    ReleaseDefinitionDeployStep: {
        fields: <any>null
    },
    ReleaseDefinitionEnvironment: {
        fields: <any>null
    },
    ReleaseDefinitionEnvironmentStep: {
        fields: <any>null
    },
    ReleaseDefinitionEnvironmentSummary: {
        fields: <any>null
    },
    ReleaseDefinitionEnvironmentTemplate: {
        fields: <any>null
    },
    ReleaseDefinitionExpands: {
        enumValues: {
            "none": 0,
            "environments": 2,
            "artifacts": 4,
            "triggers": 8,
            "variables": 16,
            "tags": 32,
        }
    },
    ReleaseDefinitionQueryOrder: {
        enumValues: {
            "idAscending": 0,
            "idDescending": 1,
            "nameAscending": 2,
            "nameDescending": 3,
        }
    },
    ReleaseDefinitionRevision: {
        fields: <any>null
    },
    ReleaseDefinitionShallowReference: {
        fields: <any>null
    },
    ReleaseDefinitionSource: {
        enumValues: {
            "undefined": 0,
            "restApi": 1,
            "userInterface": 2,
            "ibiza": 4,
            "portalExtensionApi": 8,
        }
    },
    ReleaseDefinitionSummary: {
        fields: <any>null
    },
    ReleaseDeployPhase: {
        fields: <any>null
    },
    ReleaseEnvironment: {
        fields: <any>null
    },
    ReleaseEnvironmentCompletedEvent: {
        fields: <any>null
    },
    ReleaseEnvironmentShallowReference: {
        fields: <any>null
    },
    ReleaseEnvironmentUpdateMetadata: {
        fields: <any>null
    },
    ReleaseExpands: {
        enumValues: {
            "none": 0,
            "environments": 2,
            "artifacts": 4,
            "approvals": 8,
            "manualInterventions": 16,
            "variables": 32,
            "tags": 64,
        }
    },
    ReleaseQueryOrder: {
        enumValues: {
            "descending": 0,
            "ascending": 1,
        }
    },
    ReleaseReason: {
        enumValues: {
            "none": 0,
            "manual": 1,
            "continuousIntegration": 2,
            "schedule": 3,
            "individualCI": 4,
            "batchedCI": 5,
        }
    },
    ReleaseReference: {
        fields: <any>null
    },
    ReleaseRevision: {
        fields: <any>null
    },
    ReleaseSchedule: {
        fields: <any>null
    },
    ReleaseSettings: {
        fields: <any>null
    },
    ReleaseShallowReference: {
        fields: <any>null
    },
    ReleaseStartMetadata: {
        fields: <any>null
    },
    ReleaseStatus: {
        enumValues: {
            "undefined": 0,
            "draft": 1,
            "active": 2,
            "abandoned": 4,
        }
    },
    ReleaseTask: {
        fields: <any>null
    },
    ReleaseTaskLogUpdatedEvent: {
        fields: <any>null
    },
    ReleaseTasksUpdatedEvent: {
        fields: <any>null
    },
    ReleaseTriggerBase: {
        fields: <any>null
    },
    ReleaseTriggerType: {
        enumValues: {
            "undefined": 0,
            "artifactSource": 1,
            "schedule": 2,
        }
    },
    ReleaseUpdatedEvent: {
        fields: <any>null
    },
    ReleaseUpdateMetadata: {
        fields: <any>null
    },
    ReleaseWorkItemRef: {
        fields: <any>null
    },
    RetentionPolicy: {
        fields: <any>null
    },
    RetentionSettings: {
        fields: <any>null
    },
    RunOnServerDeployPhase: {
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
    ScheduledReleaseTrigger: {
        fields: <any>null
    },
    SenderType: {
        enumValues: {
            "serviceAccount": 1,
            "requestingUser": 2,
        }
    },
    SourceIdInput: {
        fields: <any>null
    },
    SourceRepository: {
        fields: <any>null
    },
    SourceRepositoryType: {
        enumValues: {
            "invalid": 0,
            "vstsGit": 1,
            "gitHub": 2,
        }
    },
    SummaryMailSection: {
        fields: <any>null
    },
    TaskOrchestrationPlanGroupReference: {
        fields: <any>null
    },
    TaskOrchestrationPlanGroupsStartedEvent: {
        fields: <any>null
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
            "partiallySucceeded": 9,
        }
    },
    TimeZone: {
        fields: <any>null
    },
    TimeZoneList: {
        fields: <any>null
    },
    VariableGroup: {
        fields: <any>null
    },
    VariableGroupActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16,
        }
    },
    VariableValue: {
        fields: <any>null
    },
    WorkflowTask: {
        fields: <any>null
    },
    WorkflowTaskReference: {
        fields: <any>null
    },
};

TypeInfo.AgentArtifactDefinition.fields = {
    artifactType: {
        enumType: TypeInfo.AgentArtifactType
    },
};

TypeInfo.AgentBasedDeployPhase.fields = {
    deploymentInput: {
        typeInfo: TypeInfo.AgentDeploymentInput
    },
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    },
    workflowTasks: {
        isArray: true,
        typeInfo: TypeInfo.WorkflowTask
    },
};

TypeInfo.AgentDeploymentInput.fields = {
    parallelExecution: {
        typeInfo: TypeInfo.ExecutionInput
    },
};

TypeInfo.ApprovalOptions.fields = {
};

TypeInfo.Artifact.fields = {
    definitionReference: {
    },
};

TypeInfo.ArtifactContributionDefinition.fields = {
    dataSourceBindings: {
        isArray: true,
        typeInfo: TypeInfo.DataSourceBinding
    },
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    },
};

TypeInfo.ArtifactFilter.fields = {
};

TypeInfo.ArtifactInstanceData.fields = {
};

TypeInfo.ArtifactMetadata.fields = {
    instanceReference: {
        typeInfo: TypeInfo.BuildVersion
    },
};

TypeInfo.ArtifactProvider.fields = {
};

TypeInfo.ArtifactSourceId.fields = {
    sourceIdInputs: {
        isArray: true,
        typeInfo: TypeInfo.SourceIdInput
    },
};

TypeInfo.ArtifactSourceIdsQueryResult.fields = {
    artifactSourceIds: {
        isArray: true,
        typeInfo: TypeInfo.ArtifactSourceId
    },
};

TypeInfo.ArtifactSourceReference.fields = {
};

TypeInfo.ArtifactSourceTrigger.fields = {
    triggerConditions: {
        isArray: true,
        typeInfo: TypeInfo.ArtifactFilter
    },
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    },
};

TypeInfo.ArtifactTypeDefinition.fields = {
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    },
};

TypeInfo.ArtifactVersion.fields = {
    defaultVersion: {
        typeInfo: TypeInfo.BuildVersion
    },
    versions: {
        isArray: true,
        typeInfo: TypeInfo.BuildVersion
    },
};

TypeInfo.ArtifactVersionQueryResult.fields = {
    artifactVersions: {
        isArray: true,
        typeInfo: TypeInfo.ArtifactVersion
    },
};

TypeInfo.BaseDeploymentInput.fields = {
};

TypeInfo.BuildVersion.fields = {
};

TypeInfo.Change.fields = {
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    timestamp: {
        isDate: true,
    },
};

TypeInfo.Condition.fields = {
    conditionType: {
        enumType: TypeInfo.ConditionType
    },
};

TypeInfo.ConfigurationVariableValue.fields = {
};

TypeInfo.Consumer.fields = {
};

TypeInfo.ContinuousDeploymentAppServicePlanConfiguration.fields = {
};

TypeInfo.ContinuousDeploymentSetupData.fields = {
    slotConfiguration: {
        typeInfo: TypeInfo.ContinuousDeploymentSlotConfiguration
    },
    sourceConfiguration: {
        typeInfo: TypeInfo.ContinuousDeploymentSourceConfiguration
    },
    testWebAppConfiguration: {
        typeInfo: TypeInfo.ContinuousDeploymentTestWebAppConfiguration
    },
    webAppProjectType: {
        enumType: TypeInfo.ContinuousDeploymentWebAppProjectType
    },
};

TypeInfo.ContinuousDeploymentSlotConfiguration.fields = {
};

TypeInfo.ContinuousDeploymentSourceConfiguration.fields = {
    sourceRepository: {
        typeInfo: TypeInfo.SourceRepository
    },
};

TypeInfo.ContinuousDeploymentTestWebAppConfiguration.fields = {
    appServicePlanConfiguration: {
        typeInfo: TypeInfo.ContinuousDeploymentAppServicePlanConfiguration
    },
};

TypeInfo.ControlOptions.fields = {
};

TypeInfo.DataSourceBinding.fields = {
};

TypeInfo.DefinitionEnvironmentReference.fields = {
};

TypeInfo.Deployment.fields = {
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.Condition
    },
    deploymentStatus: {
        enumType: TypeInfo.DeploymentStatus
    },
    lastModifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
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
    releaseDefinition: {
        typeInfo: TypeInfo.ReleaseDefinitionShallowReference
    },
    releaseEnvironment: {
        typeInfo: TypeInfo.ReleaseEnvironmentShallowReference
    },
    requestedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    requestedFor: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    scheduledDeploymentTime: {
        isDate: true,
    },
    startedOn: {
        isDate: true,
    },
};

TypeInfo.DeploymentApprovalCompletedEvent.fields = {
    approval: {
        typeInfo: TypeInfo.ReleaseApproval
    },
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
    release: {
        typeInfo: TypeInfo.Release
    },
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
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
    release: {
        typeInfo: TypeInfo.Release
    },
};

TypeInfo.DeploymentAttempt.fields = {
    job: {
        typeInfo: TypeInfo.ReleaseTask
    },
    lastModifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    lastModifiedOn: {
        isDate: true,
    },
    operationStatus: {
        enumType: TypeInfo.DeploymentOperationStatus
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
    requestedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    requestedFor: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    status: {
        enumType: TypeInfo.DeploymentStatus
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTask
    },
};

TypeInfo.DeploymentAuthorizationInfo.fields = {
    authorizationHeaderFor: {
        enumType: TypeInfo.AuthorizationHeaderFor
    },
};

TypeInfo.DeploymentCompletedEvent.fields = {
    deployment: {
        typeInfo: TypeInfo.Deployment
    },
    environment: {
        typeInfo: TypeInfo.ReleaseEnvironment
    },
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
};

TypeInfo.DeploymentInput.fields = {
};

TypeInfo.DeploymentJob.fields = {
    job: {
        typeInfo: TypeInfo.ReleaseTask
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTask
    },
};

TypeInfo.DeploymentManualInterventionPendingEvent.fields = {
    deployment: {
        typeInfo: TypeInfo.Deployment
    },
    environmentOwner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    manualIntervention: {
        typeInfo: TypeInfo.ManualIntervention
    },
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
    release: {
        typeInfo: TypeInfo.Release
    },
};

TypeInfo.DeploymentQueryParameters.fields = {
    deploymentStatus: {
        enumType: TypeInfo.DeploymentStatus
    },
    environments: {
        isArray: true,
        typeInfo: TypeInfo.DefinitionEnvironmentReference
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
};

TypeInfo.DeploymentStartedEvent.fields = {
    environment: {
        typeInfo: TypeInfo.ReleaseEnvironment
    },
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
    release: {
        typeInfo: TypeInfo.Release
    },
};

TypeInfo.DeployPhase.fields = {
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    },
    workflowTasks: {
        isArray: true,
        typeInfo: TypeInfo.WorkflowTask
    },
};

TypeInfo.EmailRecipients.fields = {
};

TypeInfo.EnvironmentExecutionPolicy.fields = {
};

TypeInfo.EnvironmentOptions.fields = {
};

TypeInfo.EnvironmentRetentionPolicy.fields = {
};

TypeInfo.ExecutionInput.fields = {
    parallelExecutionType: {
        enumType: TypeInfo.ParallelExecutionTypes
    },
};

TypeInfo.FavoriteItem.fields = {
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
};

TypeInfo.Issue.fields = {
};

TypeInfo.MachineGroupBasedDeployPhase.fields = {
    deploymentInput: {
        typeInfo: TypeInfo.MachineGroupDeploymentInput
    },
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    },
    workflowTasks: {
        isArray: true,
        typeInfo: TypeInfo.WorkflowTask
    },
};

TypeInfo.MachineGroupDeploymentInput.fields = {
};

TypeInfo.MailMessage.fields = {
    cC: {
        typeInfo: TypeInfo.EmailRecipients
    },
    replyBy: {
        isDate: true,
    },
    replyTo: {
        typeInfo: TypeInfo.EmailRecipients
    },
    sections: {
        isArray: true,
        enumType: TypeInfo.MailSectionType
    },
    senderType: {
        enumType: TypeInfo.SenderType
    },
    to: {
        typeInfo: TypeInfo.EmailRecipients
    },
};

TypeInfo.ManualIntervention.fields = {
    approver: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    },
    release: {
        typeInfo: TypeInfo.ReleaseShallowReference
    },
    releaseDefinition: {
        typeInfo: TypeInfo.ReleaseDefinitionShallowReference
    },
    releaseEnvironment: {
        typeInfo: TypeInfo.ReleaseEnvironmentShallowReference
    },
    status: {
        enumType: TypeInfo.ManualInterventionStatus
    },
};

TypeInfo.ManualInterventionUpdateMetadata.fields = {
    status: {
        enumType: TypeInfo.ManualInterventionStatus
    },
};

TypeInfo.MappingDetails.fields = {
};

TypeInfo.Metric.fields = {
};

TypeInfo.MultiConfigInput.fields = {
    parallelExecutionType: {
        enumType: TypeInfo.ParallelExecutionTypes
    },
};

TypeInfo.MultiMachineInput.fields = {
    parallelExecutionType: {
        enumType: TypeInfo.ParallelExecutionTypes
    },
};

TypeInfo.ParallelExecutionInputBase.fields = {
    parallelExecutionType: {
        enumType: TypeInfo.ParallelExecutionTypes
    },
};

TypeInfo.ProjectReference.fields = {
};

TypeInfo.PropertySelector.fields = {
    selectorType: {
        enumType: TypeInfo.PropertySelectorType
    },
};

TypeInfo.QueuedReleaseData.fields = {
};

TypeInfo.RealtimeReleaseEvent.fields = {
};

TypeInfo.Release.fields = {
    artifacts: {
        isArray: true,
        typeInfo: TypeInfo.Artifact
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdOn: {
        isDate: true,
    },
    environments: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseEnvironment
    },
    modifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    modifiedOn: {
        isDate: true,
    },
    projectReference: {
        typeInfo: TypeInfo.ProjectReference
    },
    reason: {
        enumType: TypeInfo.ReleaseReason
    },
    releaseDefinition: {
        typeInfo: TypeInfo.ReleaseDefinitionShallowReference
    },
    status: {
        enumType: TypeInfo.ReleaseStatus
    },
    variableGroups: {
        isArray: true,
        typeInfo: TypeInfo.VariableGroup
    },
    variables: {
    },
};

TypeInfo.ReleaseAbandonedEvent.fields = {
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
    release: {
        typeInfo: TypeInfo.Release
    },
};

TypeInfo.ReleaseApproval.fields = {
    approvalType: {
        enumType: TypeInfo.ApprovalType
    },
    approvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    approver: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
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
    release: {
        typeInfo: TypeInfo.ReleaseShallowReference
    },
    releaseDefinition: {
        typeInfo: TypeInfo.ReleaseDefinitionShallowReference
    },
    releaseEnvironment: {
        typeInfo: TypeInfo.ReleaseEnvironmentShallowReference
    },
    status: {
        enumType: TypeInfo.ApprovalStatus
    },
};

TypeInfo.ReleaseApprovalHistory.fields = {
    approver: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    changedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    },
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
    },
};

TypeInfo.ReleaseArtifact.fields = {
    artifactProvider: {
        typeInfo: TypeInfo.ArtifactProvider
    },
};

TypeInfo.ReleaseCreatedEvent.fields = {
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
    release: {
        typeInfo: TypeInfo.Release
    },
};

TypeInfo.ReleaseDefinition.fields = {
    artifacts: {
        isArray: true,
        typeInfo: TypeInfo.Artifact
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
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
    modifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    modifiedOn: {
        isDate: true,
    },
    retentionPolicy: {
        typeInfo: TypeInfo.RetentionPolicy
    },
    source: {
        enumType: TypeInfo.ReleaseDefinitionSource
    },
    triggers: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTriggerBase
    },
    variables: {
    },
};

TypeInfo.ReleaseDefinitionApprovals.fields = {
    approvalOptions: {
        typeInfo: TypeInfo.ApprovalOptions
    },
    approvals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseDefinitionApprovalStep
    },
};

TypeInfo.ReleaseDefinitionApprovalStep.fields = {
    approver: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.ReleaseDefinitionDeployStep.fields = {
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.WorkflowTask
    },
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
    deployStep: {
        typeInfo: TypeInfo.ReleaseDefinitionDeployStep
    },
    environmentOptions: {
        typeInfo: TypeInfo.EnvironmentOptions
    },
    executionPolicy: {
        typeInfo: TypeInfo.EnvironmentExecutionPolicy
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    postDeployApprovals: {
        typeInfo: TypeInfo.ReleaseDefinitionApprovals
    },
    preDeployApprovals: {
        typeInfo: TypeInfo.ReleaseDefinitionApprovals
    },
    retentionPolicy: {
        typeInfo: TypeInfo.EnvironmentRetentionPolicy
    },
    schedules: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseSchedule
    },
    variables: {
    },
};

TypeInfo.ReleaseDefinitionEnvironmentStep.fields = {
};

TypeInfo.ReleaseDefinitionEnvironmentSummary.fields = {
    lastReleases: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseShallowReference
    },
};

TypeInfo.ReleaseDefinitionEnvironmentTemplate.fields = {
    environment: {
        typeInfo: TypeInfo.ReleaseDefinitionEnvironment
    },
};

TypeInfo.ReleaseDefinitionRevision.fields = {
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

TypeInfo.ReleaseDefinitionShallowReference.fields = {
};

TypeInfo.ReleaseDefinitionSummary.fields = {
    environments: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseDefinitionEnvironmentSummary
    },
    releaseDefinition: {
        typeInfo: TypeInfo.ReleaseDefinitionShallowReference
    },
    releases: {
        isArray: true,
        typeInfo: TypeInfo.Release
    },
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
    status: {
        enumType: TypeInfo.DeployPhaseStatus
    },
};

TypeInfo.ReleaseEnvironment.fields = {
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.Condition
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
    environmentOptions: {
        typeInfo: TypeInfo.EnvironmentOptions
    },
    modifiedOn: {
        isDate: true,
    },
    nextScheduledUtcTime: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
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
    release: {
        typeInfo: TypeInfo.ReleaseShallowReference
    },
    releaseCreatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    releaseDefinition: {
        typeInfo: TypeInfo.ReleaseDefinitionShallowReference
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
    variables: {
    },
    workflowTasks: {
        isArray: true,
        typeInfo: TypeInfo.WorkflowTask
    },
};

TypeInfo.ReleaseEnvironmentCompletedEvent.fields = {
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.Condition
    },
    environment: {
        typeInfo: TypeInfo.ReleaseEnvironment
    },
    reason: {
        enumType: TypeInfo.DeploymentReason
    },
    releaseCreatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.ReleaseEnvironmentShallowReference.fields = {
};

TypeInfo.ReleaseEnvironmentUpdateMetadata.fields = {
    scheduledDeploymentTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.EnvironmentStatus
    },
};

TypeInfo.ReleaseReference.fields = {
    artifacts: {
        isArray: true,
        typeInfo: TypeInfo.Artifact
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdOn: {
        isDate: true,
    },
    modifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    reason: {
        enumType: TypeInfo.ReleaseReason
    },
    releaseDefinition: {
        typeInfo: TypeInfo.ReleaseDefinitionShallowReference
    },
};

TypeInfo.ReleaseRevision.fields = {
    changedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    changedDate: {
        isDate: true,
    },
};

TypeInfo.ReleaseSchedule.fields = {
    daysToRelease: {
        enumType: TypeInfo.ScheduleDays
    },
};

TypeInfo.ReleaseSettings.fields = {
    retentionSettings: {
        typeInfo: TypeInfo.RetentionSettings
    },
};

TypeInfo.ReleaseShallowReference.fields = {
};

TypeInfo.ReleaseStartMetadata.fields = {
    artifacts: {
        isArray: true,
        typeInfo: TypeInfo.ArtifactMetadata
    },
    reason: {
        enumType: TypeInfo.ReleaseReason
    },
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
    issues: {
        isArray: true,
        typeInfo: TypeInfo.Issue
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.TaskStatus
    },
    task: {
        typeInfo: TypeInfo.WorkflowTaskReference
    },
};

TypeInfo.ReleaseTaskLogUpdatedEvent.fields = {
};

TypeInfo.ReleaseTasksUpdatedEvent.fields = {
    job: {
        typeInfo: TypeInfo.ReleaseTask
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTask
    },
};

TypeInfo.ReleaseTriggerBase.fields = {
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    },
};

TypeInfo.ReleaseUpdatedEvent.fields = {
    release: {
        typeInfo: TypeInfo.Release
    },
};

TypeInfo.ReleaseUpdateMetadata.fields = {
    status: {
        enumType: TypeInfo.ReleaseStatus
    },
};

TypeInfo.ReleaseWorkItemRef.fields = {
};

TypeInfo.RetentionPolicy.fields = {
};

TypeInfo.RetentionSettings.fields = {
    defaultEnvironmentRetentionPolicy: {
        typeInfo: TypeInfo.EnvironmentRetentionPolicy
    },
    maximumEnvironmentRetentionPolicy: {
        typeInfo: TypeInfo.EnvironmentRetentionPolicy
    },
};

TypeInfo.RunOnServerDeployPhase.fields = {
    phaseType: {
        enumType: TypeInfo.DeployPhaseTypes
    },
    workflowTasks: {
        isArray: true,
        typeInfo: TypeInfo.WorkflowTask
    },
};

TypeInfo.ScheduledReleaseTrigger.fields = {
    schedule: {
        typeInfo: TypeInfo.ReleaseSchedule
    },
    triggerType: {
        enumType: TypeInfo.ReleaseTriggerType
    },
};

TypeInfo.SourceIdInput.fields = {
};

TypeInfo.SourceRepository.fields = {
    repositoryType: {
        enumType: TypeInfo.SourceRepositoryType
    },
};

TypeInfo.SummaryMailSection.fields = {
    sectionType: {
        enumType: TypeInfo.MailSectionType
    },
};

TypeInfo.TaskOrchestrationPlanGroupReference.fields = {
};

TypeInfo.TaskOrchestrationPlanGroupsStartedEvent.fields = {
    planGroups: {
        isArray: true,
        typeInfo: TypeInfo.TaskOrchestrationPlanGroupReference
    },
};

TypeInfo.TimeZone.fields = {
};

TypeInfo.TimeZoneList.fields = {
    utcTimeZone: {
        typeInfo: TypeInfo.TimeZone
    },
    validTimeZones: {
        isArray: true,
        typeInfo: TypeInfo.TimeZone
    },
};

TypeInfo.VariableGroup.fields = {
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdOn: {
        isDate: true,
    },
    modifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    modifiedOn: {
        isDate: true,
    },
    variables: {
    },
};

TypeInfo.VariableValue.fields = {
};

TypeInfo.WorkflowTask.fields = {
};

TypeInfo.WorkflowTaskReference.fields = {
};
