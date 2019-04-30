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
    /**
     * Gets or sets the artifact definition alias.
     */
    alias?: string;
    /**
     * Gets or sets the artifact type.
     */
    artifactType?: AgentArtifactType;
    /**
     * Gets or sets the artifact definition details.
     */
    details?: string;
    /**
     * Gets or sets the name of artifact definition.
     */
    name?: string;
    /**
     * Gets or sets the version of artifact definition.
     */
    version?: string;
}

export enum AgentArtifactType {
    /**
     * Indicates XamlBuild artifact
     */
    XamlBuild = 0,
    /**
     * Indicates Build artifact
     */
    Build = 1,
    /**
     * Indicates Jenkins artifact
     */
    Jenkins = 2,
    /**
     * Indicates FileShare artifact
     */
    FileShare = 3,
    /**
     * Indicates Nuget artifact
     */
    Nuget = 4,
    /**
     * Indicates TfsOnPrem artifact
     */
    TfsOnPrem = 5,
    /**
     * Indicates GitHub artifact
     */
    GitHub = 6,
    /**
     * Indicates TFGit artifact
     */
    TFGit = 7,
    /**
     * Indicates ExternalTfsBuild artifact
     */
    ExternalTfsBuild = 8,
    /**
     * Indicates Custom artifact
     */
    Custom = 9,
    /**
     * Indicates Tfvc artifact
     */
    Tfvc = 10,
}

export interface AgentBasedDeployPhase extends DeployPhase {
    /**
     * Gets and sets the agent job deployment input
     */
    deploymentInput?: AgentDeploymentInput;
}

export interface AgentDeploymentInput extends DeploymentInput {
    /**
     * Specification for an agent on which a job gets executed.
     */
    agentSpecification?: AgentSpecification;
    /**
     * Gets or sets the image ID.
     */
    imageId?: number;
    /**
     * Gets or sets the parallel execution input.
     */
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

/**
 * Specification of the agent defined by the pool provider.
 */
export interface AgentSpecification {
    /**
     * Agent specification unique identifier.
     */
    identifier?: string;
}

export enum ApprovalExecutionOrder {
    /**
     * Approvals shown before gates.
     */
    BeforeGates = 1,
    /**
     * Approvals shown after successful execution of gates.
     */
    AfterSuccessfulGates = 2,
    /**
     * Approvals shown always after execution of gates.
     */
    AfterGatesAlways = 4,
}

export enum ApprovalFilters {
    /**
     * No approvals or approval snapshots.
     */
    None = 0,
    /**
     * Manual approval steps but no approval snapshots (Use with ApprovalSnapshots for snapshots).
     */
    ManualApprovals = 1,
    /**
     * Automated approval steps but no approval snapshots (Use with ApprovalSnapshots for snapshots).
     */
    AutomatedApprovals = 2,
    /**
     * No approval steps, but approval snapshots (Use with either ManualApprovals or AutomatedApprovals for approval steps).
     */
    ApprovalSnapshots = 4,
    /**
     * All approval steps and approval snapshots.
     */
    All = 7,
}

export interface ApprovalOptions {
    /**
     * Specify whether the approval can be skipped if the same approver approved the previous stage.
     */
    autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped?: boolean;
    /**
     * Specify whether revalidate identity of approver before completing the approval.
     */
    enforceIdentityRevalidation?: boolean;
    /**
     * Approvals execution order.
     */
    executionOrder?: ApprovalExecutionOrder;
    /**
     * Specify whether the user requesting a release or deployment should allow to approver.
     */
    releaseCreatorCanBeApprover?: boolean;
    /**
     * The number of approvals required to move release forward. '0' means all approvals required.
     */
    requiredApproverCount?: number;
    /**
     * Approval timeout. Approval default timeout is 30 days. Maximum allowed timeout is 365 days. '0' means default timeout i.e 30 days.
     */
    timeoutInMinutes?: number;
}

export enum ApprovalStatus {
    /**
     * Indicates the approval does not have the status set.
     */
    Undefined = 0,
    /**
     * Indicates the approval is pending.
     */
    Pending = 1,
    /**
     * Indicates the approval is approved.
     */
    Approved = 2,
    /**
     * Indicates the approval is rejected.
     */
    Rejected = 4,
    /**
     * Indicates the approval is reassigned.
     */
    Reassigned = 6,
    /**
     * Indicates the approval is canceled.
     */
    Canceled = 7,
    /**
     * Indicates the approval is skipped.
     */
    Skipped = 8,
}

export enum ApprovalType {
    /**
     * Indicates the approval type does not set.
     */
    Undefined = 0,
    /**
     * Indicates the approvals which executed before deployment.
     */
    PreDeploy = 1,
    /**
     * Indicates the approvals which executed after deployment.
     */
    PostDeploy = 2,
    /**
     * Indicates all approvals.
     */
    All = 3,
}

export interface Artifact {
    /**
     * Gets or sets alias.
     */
    alias?: string;
    /**
     * Gets or sets definition reference. e.g. {"project":{"id":"fed755ea-49c5-4399-acea-fd5b5aa90a6c","name":"myProject"},"definition":{"id":"1","name":"mybuildDefinition"},"connection":{"id":"1","name":"myConnection"}}.
     */
    definitionReference?: { [key: string] : ArtifactSourceReference; };
    /**
     * Indicates whether artifact is primary or not.
     */
    isPrimary?: boolean;
    /**
     * Indicates whether artifact is retained by release or not.
     */
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
    isCommitsTraceabilitySupported?: boolean;
    isWorkitemsTraceabilitySupported?: boolean;
    name?: string;
    taskInputMapping?: { [key: string] : string; };
    uniqueSourceIdentifier?: string;
}

export interface ArtifactDownloadInputBase {
    /**
     * Gets or sets the alias of artifact.
     */
    alias?: string;
    /**
     * Gets or sets the name of artifact definition. Valid values are 'Skip', 'Selective', 'All'.
     */
    artifactDownloadMode?: string;
    /**
     * Gets or sets the artifact items of the input.
     */
    artifactItems?: string[];
    /**
     * Gets or sets the type of artifact.
     */
    artifactType?: string;
}

export interface ArtifactFilter {
    /**
     * Gets or sets whether a release should be created on build tagging.
     */
    createReleaseOnBuildTagging?: boolean;
    /**
     * Gets or sets the branch for the filter.
     */
    sourceBranch?: string;
    /**
     * Gets or sets the list of tags for the filter.
     */
    tags?: string[];
    /**
     * Gets or sets whether filter should default to build definition branch.
     */
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
    /**
     * Gets or sets the id of artifact provider.
     */
    id?: number;
    /**
     * Gets or sets the name of artifact provider.
     */
    name?: string;
    /**
     * Gets or sets the link of artifact provider.
     */
    sourceUri?: string;
    /**
     * Gets or sets the version of artifact provider.
     */
    version?: string;
}

export interface ArtifactsDownloadInput {
    downloadInputs?: ArtifactDownloadInputBase[];
}

export interface ArtifactSourceId {
    /**
     * Gets or sets the artifact type of artifact source.
     */
    artifactTypeId?: string;
    /**
     * Gets or sets the list of sourceIdInput of artifact source.
     */
    sourceIdInputs?: SourceIdInput[];
}

export interface ArtifactSourceIdsQueryResult {
    /**
     * Gets or sets the list of artifactsourceIds.
     */
    artifactSourceIds?: ArtifactSourceId[];
}

export interface ArtifactSourceReference {
    /**
     * ID of the artifact source.
     */
    id?: string;
    /**
     * Name of the artifact source.
     */
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
    /**
     * Gets or sets the whether trigger is supported or not.
     */
    isTriggerSupported?: boolean;
    /**
     * Gets or sets the whether trigger is supported only on hosted environment.
     */
    isTriggerSupportedOnlyInHosted?: boolean;
    /**
     * Gets or sets the whether webhook is supported at server level.
     */
    isWebhookSupportedAtServerLevel?: boolean;
    /**
     * Gets or sets the payload hash header name for the artifact trigger configuration.
     */
    payloadHashHeaderName?: string;
    /**
     * Gets or sets the resources for artifact trigger configuration.
     */
    resources?: { [key: string] : string; };
    /**
     * Gets or sets the webhook payload mapping for artifact trigger configuration.
     */
    webhookPayloadMapping?: { [key: string] : string; };
}

export interface ArtifactTypeDefinition {
    /**
     * Gets or sets the artifact trigger configuration of artifact type defintion.
     */
    artifactTriggerConfiguration?: ArtifactTriggerConfiguration;
    /**
     * Gets or sets the artifact type of artifact type defintion. Valid values are 'Build', 'Package', 'Source' or 'ContainerImage'.
     */
    artifactType?: string;
    /**
     * Gets or sets the display name of artifact type defintion.
     */
    displayName?: string;
    /**
     * Gets or sets the endpoint type id of artifact type defintion.
     */
    endpointTypeId?: string;
    /**
     * Gets or sets the input descriptors of artifact type defintion.
     */
    inputDescriptors?: FormInputInterfaces.InputDescriptor[];
    /**
     * Gets or sets the name of artifact type defintion.
     */
    name?: string;
    /**
     * Gets or sets the unique source identifier of artifact type defintion.
     */
    uniqueSourceIdentifier?: string;
}

export interface ArtifactVersion {
    /**
     * Gets or sets the alias of artifact.
     */
    alias?: string;
    /**
     * Gets or sets the default version of artifact.
     */
    defaultVersion?: BuildVersion;
    /**
     * Gets or sets the error message encountered during quering of versions for artifact.
     */
    errorMessage?: string;
    sourceId?: string;
    /**
     * Gets or sets the list of build versions of artifact.
     */
    versions?: BuildVersion[];
}

export interface ArtifactVersionQueryResult {
    /**
     * Gets or sets the list for artifact versions of artifact version query result.
     */
    artifactVersions?: ArtifactVersion[];
}

export enum AuditAction {
    /**
     * Indicates the audit add.
     */
    Add = 1,
    /**
     * Indicates the audit update.
     */
    Update = 2,
    /**
     * Indicates the audit delete.
     */
    Delete = 3,
    /**
     * Indicates the audit undelete.
     */
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
    /**
     * Gets or sets last refershed time.
     */
    lastRefreshedOn?: Date;
    /**
     * Gets or sets the service endpoint ID.
     */
    serviceEndpointId?: string;
    /**
     * Gets or sets the vault name.
     */
    vault?: string;
}

export interface AzureKeyVaultVariableValue extends VariableValue {
    /**
     * Gets or sets the content type of key vault variable value.
     */
    contentType?: string;
    /**
     * Indicates the vault variable value enabled or not.
     */
    enabled?: boolean;
    /**
     * Gets or sets the expire time of key vault variable value.
     */
    expires?: Date;
}

export interface BaseDeploymentInput {
    /**
     * Gets or sets the job condition.
     */
    condition?: string;
    /**
     * Gets or sets the job cancel timeout in minutes for deployment which are cancelled by user for this release environment.
     */
    jobCancelTimeoutInMinutes?: number;
    /**
     * Gets or sets the override inputs.
     */
    overrideInputs?: { [key: string] : string; };
    /**
     * Gets or sets the job execution timeout in minutes for deployment which are queued against this release environment.
     */
    timeoutInMinutes?: number;
}

export interface BuildArtifactDownloadInput extends ArtifactDownloadInputBase {
}

export interface BuildVersion {
    /**
     * Gets or sets the commit message for the artifact.
     */
    commitMessage?: string;
    /**
     * Gets or sets the definition id.
     */
    definitionId?: string;
    /**
     * Gets or sets the definition name.
     */
    definitionName?: string;
    /**
     * Gets or sets the build id.
     */
    id?: string;
    /**
     * Gets or sets if the artifact supports multiple definitions.
     */
    isMultiDefinitionType?: boolean;
    /**
     * Gets or sets the build number.
     */
    name?: string;
    /**
     * Gets or sets the source branch for the artifact.
     */
    sourceBranch?: string;
    /**
     * Gets or sets the source pull request version for the artifact.
     */
    sourcePullRequestVersion?: SourcePullRequestVersion;
    /**
     * Gets or sets the repository id for the artifact.
     */
    sourceRepositoryId?: string;
    /**
     * Gets or sets the repository type for the artifact.
     */
    sourceRepositoryType?: string;
    /**
     * Gets or sets the source version for the artifact.
     */
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
    /**
     * Gets and sets the repository references.
     */
    repositoryReference?: { [key: string] : ReleaseManagementInputValue; };
    /**
     * It can have value as ‘GitHub’, ‘Vsts’.
     */
    systemType?: PullRequestSystemType;
}

export interface ComplianceSettings {
    /**
     * Block Release Definition save if any secrets is saved in Release Definition.
     */
    blockReleaseDefinitionSaveIfSecretPresent?: boolean;
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
     * Gets and sets if a variable can be overridden at deployment time or not.
     */
    allowOverride?: boolean;
    /**
     * Gets or sets as variable is secret or not.
     */
    isSecret?: boolean;
    /**
     * Gets and sets value of the configuration variable.
     */
    value?: string;
}

export interface Consumer {
    /**
     * ID of the consumer.
     */
    consumerId?: number;
    /**
     * Name of the consumer.
     */
    consumerName?: string;
}

export interface ContainerImageTrigger extends ReleaseTriggerBase {
    /**
     * Alias of the trigger.
     */
    alias?: string;
    /**
     * List tag filters applied while trigger.
     */
    tagFilters?: TagFilter[];
}

export interface ContinuousDeploymentTriggerIssue extends AutoTriggerIssue {
    /**
     * Artifact type.
     */
    artifactType?: string;
    /**
     * ArtifactVersion ID.
     */
    artifactVersionId?: string;
    /**
     * Artifact source ID.
     */
    sourceId?: string;
}

export interface ControlOptions {
    /**
     * Always run the job.
     */
    alwaysRun?: boolean;
    /**
     * Indicates whether to continuer job on error or not.
     */
    continueOnError?: boolean;
    /**
     * Indicates the job enabled or not.
     */
    enabled?: boolean;
}

export interface CustomArtifactDownloadInput extends ArtifactDownloadInputBase {
}

export interface DataSourceBinding {
    /**
     * Pagination format supported by this data source(ContinuationToken/SkipTop).
     */
    callbackContextTemplate?: string;
    /**
     * Subsequent calls needed?
     */
    callBackRequiredTemplate?: string;
    /**
     * Name of the datasource.
     */
    dataSourceName?: string;
    /**
     * Endpoint ID of the datasource.
     */
    endpointId?: string;
    /**
     * Endpoint URL of the datasource.
     */
    endpointUrl?: string;
    /**
     * Defines the initial value of the query params
     */
    initialContextTemplate?: string;
    /**
     * Parameters of the datasource.
     */
    parameters?: { [key: string] : string; };
    /**
     * Gets or sets http request body
     */
    requestContent?: string;
    /**
     * Gets or sets http request verb
     */
    requestVerb?: string;
    /**
     * Result selector applied on output of datasource result, for example jsonpath:$.value[?(@.properties.isEnabled == true)].
     */
    resultSelector?: string;
    /**
     * Format of the return results, for example. { "Value" : "{{{id}}}", "DisplayValue" : "{{{name}}}" }.
     */
    resultTemplate?: string;
    /**
     * Target of the datasource.
     */
    target?: string;
}

export interface DefinitionEnvironmentReference {
    /**
     * Definition environment ID.
     */
    definitionEnvironmentId?: number;
    /**
     * Definition environment name.
     */
    definitionEnvironmentName?: string;
    /**
     * ReleaseDefinition ID.
     */
    releaseDefinitionId?: number;
    /**
     * ReleaseDefinition name.
     */
    releaseDefinitionName?: string;
}

export interface Demand {
    /**
     * Gets and sets the name of demand.
     */
    name?: string;
    /**
     * Gets and sets the value of demand.
     */
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
    /**
     * Deployment attempt.
     */
    attempt?: number;
    /**
     * ID of the deployment.
     */
    deploymentId?: number;
    /**
     * Error log to show any unexpected error that occurred during executing deploy step
     */
    errorLog?: string;
    /**
     * Specifies whether deployment has started or not.
     */
    hasStarted?: boolean;
    /**
     * ID of deployment.
     */
    id?: number;
    /**
     * All the issues related to the deployment.
     */
    issues?: Issue[];
    job?: ReleaseTask;
    /**
     * Identity who last modified this deployment.
     */
    lastModifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Time when this deployment last modified.
     */
    lastModifiedOn?: Date;
    /**
     * Deployment opeartion status.
     */
    operationStatus?: DeploymentOperationStatus;
    /**
     * Post deployment gates that executed in this deployment.
     */
    postDeploymentGates?: ReleaseGates;
    /**
     * Pre deployment gates that executed in this deployment.
     */
    preDeploymentGates?: ReleaseGates;
    /**
     * When this deployment queued on.
     */
    queuedOn?: Date;
    /**
     * Reason for the deployment.
     */
    reason?: DeploymentReason;
    /**
     * List of release deployphases executed in this deployment.
     */
    releaseDeployPhases?: ReleaseDeployPhase[];
    /**
     * Identity who requested this deployment.
     */
    requestedBy?: VSSInterfaces.IdentityRef;
    /**
     * Identity for this deployment requested.
     */
    requestedFor?: VSSInterfaces.IdentityRef;
    runPlanId?: string;
    /**
     * status of the deployment.
     */
    status?: DeploymentStatus;
    tasks?: ReleaseTask[];
}

export interface DeploymentAuthorizationInfo {
    /**
     * Authorization header type, typically either RevalidateApproverIdentity or OnBehalfOf.
     */
    authorizationHeaderFor?: AuthorizationHeaderFor;
    /**
     * List of resources.
     */
    resources?: string[];
    /**
     * ID of the tenant.
     */
    tenantId?: string;
    /**
     * Access token key.
     */
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
    /**
     * Artifacts that downloaded during job execution.
     */
    artifactsDownloadInput?: ArtifactsDownloadInput;
    /**
     * List demands that needs to meet to execute the job.
     */
    demands?: Demand[];
    /**
     * Indicates whether to include access token in deployment job or not.
     */
    enableAccessToken?: boolean;
    /**
     * Id of the pool on which job get executed.
     */
    queueId?: number;
    /**
     * Indicates whether artifacts downloaded while job execution or not.
     */
    skipArtifactsDownload?: boolean;
}

export interface DeploymentJob {
    /**
     * Parent task of all executed tasks.
     */
    job?: ReleaseTask;
    /**
     * List of  executed tasks with in job.
     */
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
     * The deployment operation status is phase in progress.
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
    /**
     * Query deployments based specified artifact source id.
     */
    artifactSourceId?: string;
    /**
     * Query deployments based specified artifact type id.
     */
    artifactTypeId?: string;
    /**
     * Query deployments based specified artifact versions.
     */
    artifactVersions?: string[];
    /**
     * Query deployments number of deployments per environment.
     */
    deploymentsPerEnvironment?: number;
    /**
     * Query deployment based on deployment status.
     */
    deploymentStatus?: DeploymentStatus;
    /**
     * Query deployments of specified environments.
     */
    environments?: DefinitionEnvironmentReference[];
    /**
     * Query deployments based specified expands.
     */
    expands?: DeploymentExpands;
    /**
     * Specify deleted deployments should return or not.
     */
    isDeleted?: boolean;
    latestDeploymentsOnly?: boolean;
    maxDeploymentsPerEnvironment?: number;
    maxModifiedTime?: Date;
    minModifiedTime?: Date;
    /**
     * Query deployment based on deployment operation status.
     */
    operationStatus?: DeploymentOperationStatus;
    queryOrder?: ReleaseQueryOrder;
    /**
     * Query deployments based query type.
     */
    queryType?: DeploymentsQueryType;
    /**
     * Query deployments based specified source branch.
     */
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
     * The deployment status is in progress.
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
    /**
     * Gets and sets the name of deploy phase.
     */
    name?: string;
    /**
     * Indicates the deploy phase type.
     */
    phaseType?: DeployPhaseTypes;
    /**
     * Gets and sets the rank of deploy phase.
     */
    rank?: number;
    /**
     * Gets and sets the reference name of deploy phase.
     */
    refName?: string;
    /**
     * Gets and sets the workflow tasks for the deploy phase.
     */
    workflowTasks?: WorkflowTask[];
}

export enum DeployPhaseStatus {
    /**
     * Phase status not set.
     */
    Undefined = 0,
    /**
     * Phase execution not started.
     */
    NotStarted = 1,
    /**
     * Phase execution in progress.
     */
    InProgress = 2,
    /**
     * Phase execution partially succeeded.
     */
    PartiallySucceeded = 4,
    /**
     * Phase execution succeeded.
     */
    Succeeded = 8,
    /**
     * Phase execution failed.
     */
    Failed = 16,
    /**
     * Phase execution canceled.
     */
    Canceled = 32,
    /**
     * Phase execution skipped.
     */
    Skipped = 64,
    /**
     * Phase is in cancelling state.
     */
    Cancelling = 128,
}

export enum DeployPhaseTypes {
    /**
     * Phase type not defined. Don't use this.
     */
    Undefined = 0,
    /**
     * Phase type which contains tasks executed on agent.
     */
    AgentBasedDeployment = 1,
    /**
     * Phase type which contains tasks executed by server.
     */
    RunOnServer = 2,
    /**
     * Phase type which contains tasks executed on deployment group machines.
     */
    MachineGroupBasedDeployment = 4,
    /**
     * Phase type which contains tasks which acts as Gates for the deployment to go forward.
     */
    DeploymentGates = 8,
}

export interface EmailRecipients {
    /**
     * List of email addresses.
     */
    emailAddresses?: string[];
    /**
     * List of TFS IDs guids.
     */
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
    /**
     * Gets and sets as the auto link workitems or not.
     */
    autoLinkWorkItems?: boolean;
    /**
     * Gets and sets as the badge enabled or not.
     */
    badgeEnabled?: boolean;
    emailNotificationType?: string;
    emailRecipients?: string;
    enableAccessToken?: boolean;
    /**
     * Gets and sets as the publish deployment status or not.
     */
    publishDeploymentStatus?: boolean;
    /**
     * Gets and sets as the.pull request deployment enabled or not.
     */
    pullRequestDeploymentEnabled?: boolean;
    skipArtifactsDownload?: boolean;
    timeoutInMinutes?: number;
}

export interface EnvironmentRetentionPolicy {
    /**
     * Gets and sets the number of days to keep environment.
     */
    daysToKeep?: number;
    /**
     * Gets and sets the number of releases to keep.
     */
    releasesToKeep?: number;
    /**
     * Gets and sets as the build to be retained or not.
     */
    retainBuild?: boolean;
}

export enum EnvironmentStatus {
    /**
     * Environment status not set.
     */
    Undefined = 0,
    /**
     * Environment is in not started state.
     */
    NotStarted = 1,
    /**
     * Environment is in progress state.
     */
    InProgress = 2,
    /**
     * Environment is in succeeded state.
     */
    Succeeded = 4,
    /**
     * Environment is in canceled state.
     */
    Canceled = 8,
    /**
     * Environment is in rejected state.
     */
    Rejected = 16,
    /**
     * Environment is in queued state.
     */
    Queued = 32,
    /**
     * Environment is in scheduled state.
     */
    Scheduled = 64,
    /**
     * Environment is in partially succeeded state.
     */
    PartiallySucceeded = 128,
}

export interface EnvironmentTrigger {
    /**
     * Definition environment ID on which this trigger applicable.
     */
    definitionEnvironmentId?: number;
    /**
     * ReleaseDefinition ID on which this trigger applicable.
     */
    releaseDefinitionId?: number;
    /**
     * Gets or sets the trigger content.
     */
    triggerContent?: string;
    /**
     * Gets or sets the trigger type.
     */
    triggerType?: EnvironmentTriggerType;
}

export interface EnvironmentTriggerContent {
    /**
     * Gets or sets action.
     */
    action?: string;
    /**
     * Gets or sets list of event types.
     */
    eventTypes?: string[];
}

export enum EnvironmentTriggerType {
    /**
     * Environment trigger type undefined.
     */
    Undefined = 0,
    /**
     * Environment trigger type is deployment group redeploy.
     */
    DeploymentGroupRedeploy = 1,
    /**
     * Environment trigger type is Rollback.
     */
    RollbackRedeploy = 2,
}

export interface ExecutionInput {
    /**
     * Parallel execution type, for example MultiConfiguration or MultiMachine.
     */
    parallelExecutionType?: ParallelExecutionTypes;
}

/**
 * Class to represent favorite entry.
 */
export interface FavoriteItem {
    /**
     * Application specific data for the entry.
     */
    data?: string;
    /**
     * Unique Id of the the entry.
     */
    id?: string;
    /**
     * Display text for favorite entry.
     */
    name?: string;
    /**
     * Application specific favorite entry type. Empty or Null represents that Favorite item is a Folder.
     */
    type?: string;
}

export interface Folder {
    /**
     * Identity who created this folder.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Time when this folder created.
     */
    createdOn?: Date;
    /**
     * Description of the folder.
     */
    description?: string;
    /**
     * Identity who last changed this folder.
     */
    lastChangedBy?: VSSInterfaces.IdentityRef;
    /**
     * Time when this folder last changed.
     */
    lastChangedDate?: Date;
    /**
     * path of the folder.
     */
    path?: string;
}

export enum FolderPathQueryOrder {
    /**
     * No order.
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
    /**
     * Gates minimum success duration.
     */
    minimumSuccessDuration?: number;
    /**
     * Gates sampling interval.
     */
    samplingInterval?: number;
    /**
     * Gates stabilization time.
     */
    stabilizationTime?: number;
}

export interface GatesDeployPhase extends DeployPhase {
    /**
     * Gets and sets the gate job input.
     */
    deploymentInput?: GatesDeploymentInput;
}

export enum GateStatus {
    /**
     * The gate does not have the status set.
     */
    None = 0,
    /**
     * The gate is in pending state.
     */
    Pending = 1,
    /**
     * The gate is currently in progress.
     */
    InProgress = 2,
    /**
     * The gate completed successfully.
     */
    Succeeded = 4,
    /**
     * The gate execution failed.
     */
    Failed = 8,
    /**
     * The gate execution cancelled.
     */
    Canceled = 16,
}

export interface GateUpdateMetadata {
    /**
     * Comment.
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
    /**
     * Issue data.
     */
    data?: { [key: string] : string; };
    /**
     * Issue type, for example error, warning or info.
     */
    issueType?: string;
    /**
     * Issue message.
     */
    message?: string;
}

export enum IssueSource {
    None = 0,
    User = 1,
    System = 2,
}

export interface JenkinsArtifactDownloadInput extends ArtifactDownloadInputBase {
}

export interface MachineGroupBasedDeployPhase extends DeployPhase {
    /**
     * Gets and sets the deployment group job input
     */
    deploymentInput?: MachineGroupDeploymentInput;
}

export interface MachineGroupDeploymentInput extends DeploymentInput {
    /**
     * Deployment group health option.
     */
    deploymentHealthOption?: string;
    /**
     * Minimum percentage of the targets guaranteed to be healthy.
     */
    healthPercent?: number;
    /**
     * Deployment target tag filter.
     */
    tags?: string[];
}

export interface MailMessage {
    /**
     * Body of mail.
     */
    body?: string;
    /**
     * Mail CC recipients.
     */
    cC?: EmailRecipients;
    /**
     * Reply to.
     */
    inReplyTo?: string;
    /**
     * Message ID of the mail.
     */
    messageId?: string;
    /**
     * Data when should be replied to mail.
     */
    replyBy?: Date;
    /**
     * Reply to Email recipients.
     */
    replyTo?: EmailRecipients;
    /**
     * List of mail section types.
     */
    sections?: MailSectionType[];
    /**
     * Mail sender type.
     */
    senderType?: SenderType;
    /**
     * Subject of the mail.
     */
    subject?: string;
    /**
     * Mail To recipients.
     */
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
    /**
     * Name of the Metric.
     */
    name?: string;
    /**
     * Value of the Metric.
     */
    value?: number;
}

export interface MultiConfigInput extends ParallelExecutionInputBase {
    /**
     * Multipliers for parallel execution of deployment, for example x86,x64.
     */
    multipliers?: string;
}

export interface MultiMachineInput extends ParallelExecutionInputBase {
}

export interface PackageTrigger extends ReleaseTriggerBase {
    /**
     * Package trigger alias.
     */
    alias?: string;
}

export interface ParallelExecutionInputBase extends ExecutionInput {
    /**
     * Indicate whether continue execution of deployment on error or not.
     */
    continueOnError?: boolean;
    /**
     * Maximum number of agents used while parallel execution.
     */
    maxNumberOfAgents?: number;
}

export enum ParallelExecutionTypes {
    None = 0,
    MultiConfiguration = 1,
    MultiMachine = 2,
}

export interface PipelineProcess {
    /**
     * Pipeline process type.
     */
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
    /**
     * List of properties.
     */
    properties?: string[];
    /**
     * Property selector type.
     */
    selectorType?: PropertySelectorType;
}

export enum PropertySelectorType {
    /**
     * Include in property selector.
     */
    Inclusion = 0,
    /**
     * Exclude in property selector.
     */
    Exclusion = 1,
}

export interface PullRequestConfiguration {
    /**
     * Code repository reference.
     */
    codeRepositoryReference?: CodeRepositoryReference;
    /**
     * In case of Source based artifacts, Code reference will be present in Artifact details.
     */
    useArtifactReference?: boolean;
}

export interface PullRequestFilter {
    /**
     * List of tags.
     */
    tags?: string[];
    /**
     * Target branch of pull request.
     */
    targetBranch?: string;
}

export enum PullRequestSystemType {
    None = 0,
    TfsGit = 1,
    GitHub = 2,
}

export interface PullRequestTrigger extends ReleaseTriggerBase {
    /**
     * Artifact alias trigger is linked to.
     */
    artifactAlias?: string;
    /**
     * Code reference details of pull request.
     */
    pullRequestConfiguration?: PullRequestConfiguration;
    /**
     * Policy name using which status will be published to pull request.
     */
    statusPolicyName?: string;
    /**
     * List of filters applied while trigger.
     */
    triggerConditions?: PullRequestFilter[];
}

export interface QueuedReleaseData {
    /**
     * Project ID of the release.
     */
    projectId?: string;
    /**
     * Release queue position.
     */
    queuePosition?: number;
    /**
     * Queued release ID.
     */
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
     * Gets or sets the release definition revision.
     */
    releaseDefinitionRevision?: number;
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
    /**
     * Identity of the approver.
     */
    approver?: VSSInterfaces.IdentityRef;
    /**
     * Identity of the object who changed approval.
     */
    changedBy?: VSSInterfaces.IdentityRef;
    /**
     * Approval histroy comments.
     */
    comments?: string;
    /**
     * Time when this approval created.
     */
    createdOn?: Date;
    /**
     * Time when this approval modified.
     */
    modifiedOn?: Date;
    /**
     * Approval histroy revision.
     */
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
    /**
     * Gets or sets the artifact provider of ReleaseArtifact.
     */
    artifactProvider?: ArtifactProvider;
    /**
     * Gets or sets the artifact type of ReleaseArtifact.
     */
    artifactType?: string;
    /**
     * Gets or sets the definition json of ReleaseArtifact.
     */
    definitionData?: string;
    /**
     * Gets or sets the definition id of ReleaseArtifact.
     */
    definitionId?: number;
    /**
     * Gets or sets the description of ReleaseArtifact.
     */
    description?: string;
    /**
     * Gets or sets the id of ReleaseArtifact.
     */
    id?: number;
    /**
     * Gets or sets the name of ReleaseArtifact.
     */
    name?: string;
    /**
     * Gets or sets the release id.
     */
    releaseId?: number;
}

export interface ReleaseCondition extends Condition {
    /**
     * The release condition result.
     */
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
    /**
     * Gets or sets the approval options.
     */
    approvalOptions?: ApprovalOptions;
    /**
     * Gets or sets the approvals.
     */
    approvals?: ReleaseDefinitionApprovalStep[];
}

export interface ReleaseDefinitionApprovalStep extends ReleaseDefinitionEnvironmentStep {
    /**
     * Gets and sets the approver.
     */
    approver?: VSSInterfaces.IdentityRef;
    /**
     * Indicates whether the approval automated.
     */
    isAutomated?: boolean;
    /**
     * Indicates whether the approval notification set.
     */
    isNotificationOn?: boolean;
    /**
     * Gets or sets the rank of approval step.
     */
    rank?: number;
}

export interface ReleaseDefinitionDeployStep extends ReleaseDefinitionEnvironmentStep {
    /**
     * The list of steps for this definition.
     */
    tasks?: WorkflowTask[];
}

export interface ReleaseDefinitionEnvironment {
    /**
     * Gets or sets the BadgeUrl. BadgeUrl will be used when Badge will be enabled in Release Definition Environment.
     */
    badgeUrl?: string;
    /**
     * Gets or sets the environment conditions.
     */
    conditions?: Condition[];
    /**
     * Gets or sets the current release reference.
     */
    currentRelease?: ReleaseShallowReference;
    /**
     * Gets or sets the demands.
     */
    demands?: Demand[];
    /**
     * Gets or sets the deploy phases of environment.
     */
    deployPhases?: DeployPhase[];
    /**
     * Gets or sets the deploystep.
     */
    deployStep?: ReleaseDefinitionDeployStep;
    /**
     * Gets or sets the environment options.
     */
    environmentOptions?: EnvironmentOptions;
    /**
     * Gets or sets the triggers on environment.
     */
    environmentTriggers?: EnvironmentTrigger[];
    /**
     * Gets or sets the environment execution policy.
     */
    executionPolicy?: EnvironmentExecutionPolicy;
    /**
     * Gets and sets the ID of the ReleaseDefinitionEnvironment.
     */
    id?: number;
    /**
     * Gets and sets the name of the ReleaseDefinitionEnvironment.
     */
    name?: string;
    /**
     * Gets and sets the Owner of the ReleaseDefinitionEnvironment.
     */
    owner?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the post deployment approvals.
     */
    postDeployApprovals?: ReleaseDefinitionApprovals;
    /**
     * Gets or sets the post deployment gates.
     */
    postDeploymentGates?: ReleaseDefinitionGatesStep;
    /**
     * Gets or sets the pre deployment approvals.
     */
    preDeployApprovals?: ReleaseDefinitionApprovals;
    /**
     * Gets or sets the pre deployment gates.
     */
    preDeploymentGates?: ReleaseDefinitionGatesStep;
    /**
     * Gets or sets the environment process parameters.
     */
    processParameters?: DistributedTaskCommonInterfaces.ProcessParameters;
    /**
     * Gets or sets the properties on environment.
     */
    properties?: any;
    /**
     * Gets or sets the queue ID.
     */
    queueId?: number;
    /**
     * Gets and sets the rank of the ReleaseDefinitionEnvironment.
     */
    rank?: number;
    /**
     * Gets or sets the environment retention policy.
     */
    retentionPolicy?: EnvironmentRetentionPolicy;
    runOptions?: { [key: string] : string; };
    /**
     * Gets or sets the schedules
     */
    schedules?: ReleaseSchedule[];
    /**
     * Gets or sets the variable groups.
     */
    variableGroups?: number[];
    /**
     * Gets and sets the variables.
     */
    variables?: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseDefinitionEnvironmentStep {
    /**
     * ID of the approval or deploy step.
     */
    id?: number;
}

export interface ReleaseDefinitionEnvironmentSummary {
    /**
     * ID of ReleaseDefinition environment summary.
     */
    id?: number;
    /**
     * List of release shallow reference deployed using this ReleaseDefinition.
     */
    lastReleases?: ReleaseShallowReference[];
    /**
     * Name of ReleaseDefinition environment summary.
     */
    name?: string;
}

export interface ReleaseDefinitionEnvironmentTemplate {
    /**
     * Indicates whether template can be deleted or not.
     */
    canDelete?: boolean;
    /**
     * Category of the ReleaseDefinition environment template.
     */
    category?: string;
    /**
     * Description of the ReleaseDefinition environment template.
     */
    description?: string;
    /**
     * ReleaseDefinition environment data which used to create this template.
     */
    environment?: ReleaseDefinitionEnvironment;
    /**
     * ID of the task which used to display icon used for this template.
     */
    iconTaskId?: string;
    /**
     * Icon uri of the template.
     */
    iconUri?: string;
    /**
     * ID of the ReleaseDefinition environment template.
     */
    id?: string;
    /**
     * Indicates whether template deleted or not.
     */
    isDeleted?: boolean;
    /**
     * Name of the ReleaseDefinition environment template.
     */
    name?: string;
}

export enum ReleaseDefinitionExpands {
    /**
     * Returns top level properties of object.
     */
    None = 0,
    /**
     * Include environments in return object.
     */
    Environments = 2,
    /**
     * Include artifacts in return object.
     */
    Artifacts = 4,
    /**
     * Include triggers in return object.
     */
    Triggers = 8,
    /**
     * Include variables in return object.
     */
    Variables = 16,
    /**
     * Include tags in return object.
     */
    Tags = 32,
    /**
     * Include last release in return object.
     */
    LastRelease = 64,
}

export interface ReleaseDefinitionGate {
    /**
     * Gets or sets the gates workflow.
     */
    tasks?: WorkflowTask[];
}

export interface ReleaseDefinitionGatesOptions {
    /**
     * Gets or sets as the gates enabled or not.
     */
    isEnabled?: boolean;
    /**
     * Gets or sets the minimum duration for steady results after a successful gates evaluation.
     */
    minimumSuccessDuration?: number;
    /**
     * Gets or sets the time between re-evaluation of gates.
     */
    samplingInterval?: number;
    /**
     * Gets or sets the delay before evaluation.
     */
    stabilizationTime?: number;
    /**
     * Gets or sets the timeout after which gates fail.
     */
    timeout?: number;
}

export interface ReleaseDefinitionGatesStep {
    /**
     * Gets or sets the gates.
     */
    gates?: ReleaseDefinitionGate[];
    /**
     * Gets or sets the gate options.
     */
    gatesOptions?: ReleaseDefinitionGatesOptions;
    /**
     * ID of the ReleaseDefinitionGateStep.
     */
    id?: number;
}

export enum ReleaseDefinitionQueryOrder {
    /**
     * Return results based on release definition Id ascending order.
     */
    IdAscending = 0,
    /**
     * Return results based on release definition Id descending order.
     */
    IdDescending = 1,
    /**
     * Return results based on release definition name ascending order.
     */
    NameAscending = 2,
    /**
     * Return results based on release definition name descending order.
     */
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
     * Gets date on which ReleaseDefinition changed.
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
     * Gets definition URL.
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
    /**
     * Indicates ReleaseDefinition source not defined.
     */
    Undefined = 0,
    /**
     * Indicates ReleaseDefinition created using REST API.
     */
    RestApi = 1,
    /**
     * Indicates ReleaseDefinition created using UI.
     */
    UserInterface = 2,
    /**
     * Indicates ReleaseDefinition created from Ibiza.
     */
    Ibiza = 4,
    /**
     * Indicates ReleaseDefinition created from PortalExtension API.
     */
    PortalExtensionApi = 8,
}

export interface ReleaseDefinitionSummary {
    /**
     * List of Release Definition environment summary.
     */
    environments?: ReleaseDefinitionEnvironmentSummary[];
    /**
     * Release Definition reference.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * List of releases deployed using this Release Defintion.
     */
    releases?: Release[];
}

export interface ReleaseDefinitionUndeleteParameter {
    /**
     * Gets or sets comment.
     */
    comment?: string;
}

export interface ReleaseDeployPhase {
    /**
     * Deployment jobs of the phase.
     */
    deploymentJobs?: DeploymentJob[];
    /**
     * Phase execution error logs.
     */
    errorLog?: string;
    /**
     * ID of the phase.
     */
    id?: number;
    /**
     * List of manual intervention tasks execution information in phase.
     */
    manualInterventions?: ManualIntervention[];
    /**
     * Name of the phase.
     */
    name?: string;
    /**
     * ID of the phase.
     */
    phaseId?: string;
    /**
     * Type of the phase.
     */
    phaseType?: DeployPhaseTypes;
    /**
     * Rank of the phase.
     */
    rank?: number;
    /**
     * Run Plan ID of the phase.
     */
    runPlanId?: string;
    /**
     * Phase start time.
     */
    startedOn?: Date;
    /**
     * Status of the phase.
     */
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
    /**
     * Post deployment gates snapshot data.
     */
    postDeploymentGatesSnapshot?: ReleaseDefinitionGatesStep;
    /**
     * Gets list of pre deploy approvals snapshot.
     */
    preApprovalsSnapshot?: ReleaseDefinitionApprovals;
    /**
     * Gets list of pre deploy approvals.
     */
    preDeployApprovals?: ReleaseApproval[];
    /**
     * Pre deployment gates snapshot data.
     */
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
    /**
     * Contains the gates job details of each evaluation.
     */
    deploymentJobs?: DeploymentJob[];
    /**
     * ID of release gates.
     */
    id?: number;
    /**
     * List of ignored gates.
     */
    ignoredGates?: IgnoredGate[];
    /**
     * Gates last modified time.
     */
    lastModifiedOn?: Date;
    /**
     * Run plan ID of the gates.
     */
    runPlanId?: string;
    /**
     * Gates stabilization completed date and time.
     */
    stabilizationCompletedOn?: Date;
    /**
     * Gates evaluation started time.
     */
    startedOn?: Date;
    /**
     * Status of release gates.
     */
    status?: GateStatus;
    /**
     * Date and time at which all gates executed successfully.
     */
    succeedingSince?: Date;
}

export interface ReleaseGatesPhase extends ReleaseDeployPhase {
    /**
     * List of ignored gates.
     */
    ignoredGates?: IgnoredGate[];
    /**
     * Date and time at which stabilization of gates completed.
     */
    stabilizationCompletedOn?: Date;
    /**
     * Date and time at which all gates executed successfully.
     */
    succeedingSince?: Date;
}

export interface ReleaseManagementInputValue {
    /**
     * The text to show for the display of this value.
     */
    displayValue?: string;
    /**
     * The value to store for this input.
     */
    value?: string;
}

export interface ReleaseNotCreatedEvent {
    definitionReference?: ReleaseDefinitionShallowReference;
    message?: string;
    releaseReason?: ReleaseReason;
    requestedBy?: VSSInterfaces.IdentityRef;
}

export enum ReleaseQueryOrder {
    /**
     * Return results in descending order.
     */
    Descending = 0,
    /**
     * Return results in ascending order.
     */
    Ascending = 1,
}

export enum ReleaseReason {
    /**
     * Indicates the release triggered reason not set.
     */
    None = 0,
    /**
     * Indicates the release triggered manually.
     */
    Manual = 1,
    /**
     * Indicates the release triggered by continuous integration.
     */
    ContinuousIntegration = 2,
    /**
     * Indicates the release triggered by schedule.
     */
    Schedule = 3,
    /**
     * Indicates the release triggered by PullRequest.
     */
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
     * Gets the identity who created release.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets date on when this release created.
     */
    createdOn?: Date;
    /**
     * Gets description.
     */
    description?: string;
    /**
     * ID of the Release.
     */
    id?: number;
    /**
     * Gets the identity who modified release.
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
    /**
     * Gets or sets the identity who changed.
     */
    changedBy?: VSSInterfaces.IdentityRef;
    /**
     * Change date of the revision.
     */
    changedDate?: Date;
    /**
     * Change details of the revision.
     */
    changeDetails?: string;
    /**
     * Change details of the revision. Typically ChangeDetails values are Add and Update.
     */
    changeType?: string;
    /**
     * Comment of the revision.
     */
    comment?: string;
    /**
     * Release ID of which this revision belongs.
     */
    definitionSnapshotRevision?: number;
    /**
     * Gets or sets the release ID of which this revision belongs.
     */
    releaseId?: number;
}

export interface ReleaseSchedule {
    /**
     * Days of the week to release.
     */
    daysToRelease?: ScheduleDays;
    /**
     * Team Foundation Job Definition Job Id.
     */
    jobId?: string;
    /**
     * Flag to determine if this schedule should only release if the associated artifact has been changed or release definition changed.
     */
    scheduleOnlyWithChanges?: boolean;
    /**
     * Local time zone hour to start.
     */
    startHours?: number;
    /**
     * Local time zone minute to start.
     */
    startMinutes?: number;
    /**
     * Time zone Id of release schedule, such as 'UTC'.
     */
    timeZoneId?: string;
}

export interface ReleaseSettings {
    /**
     * Release Compliance settings.
     */
    complianceSettings?: ComplianceSettings;
    /**
     * Release retention settings.
     */
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
    /**
     * Release status not set.
     */
    Undefined = 0,
    /**
     * Release is in draft state.
     */
    Draft = 1,
    /**
     * Release status is in active.
     */
    Active = 2,
    /**
     * Release status is in abandoned.
     */
    Abandoned = 4,
}

export interface ReleaseTask {
    /**
     * Agent name on which task executed.
     */
    agentName?: string;
    dateEnded?: Date;
    dateStarted?: Date;
    /**
     * Finish time of the release task.
     */
    finishTime?: Date;
    /**
     * ID of the release task.
     */
    id?: number;
    /**
     * List of issues occurred while execution of task.
     */
    issues?: Issue[];
    /**
     * Number of lines log release task has.
     */
    lineCount?: number;
    /**
     * Log URL of the task.
     */
    logUrl?: string;
    /**
     * Name of the task.
     */
    name?: string;
    /**
     * Task execution complete precent.
     */
    percentComplete?: number;
    /**
     * Rank of the release task.
     */
    rank?: number;
    /**
     * Result code of the task.
     */
    resultCode?: string;
    /**
     * ID of the release task.
     */
    startTime?: Date;
    /**
     * Status of release task.
     */
    status?: TaskStatus;
    /**
     * Workflow task reference.
     */
    task?: WorkflowTaskReference;
    /**
     * Timeline record ID of the release task.
     */
    timelineRecordId?: string;
}

export interface ReleaseTaskAttachment {
    /**
     * Reference links of task.
     */
    _links?: any;
    /**
     * Data and time when it created.
     */
    createdOn?: Date;
    /**
     * Identity who modified.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Data and time when modified.
     */
    modifiedOn?: Date;
    /**
     * Name of the task attachment.
     */
    name?: string;
    /**
     * Record ID of the task.
     */
    recordId?: string;
    /**
     * Timeline ID of the task.
     */
    timelineId?: string;
    /**
     * Type of task attachment.
     */
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
    /**
     * Type of release trigger.
     */
    triggerType?: ReleaseTriggerType;
}

export enum ReleaseTriggerType {
    /**
     * Release trigger type not set.
     */
    Undefined = 0,
    /**
     * Artifact based release trigger.
     */
    ArtifactSource = 1,
    /**
     * Schedule based release trigger.
     */
    Schedule = 2,
    /**
     * Source repository based release trigger.
     */
    SourceRepo = 3,
    /**
     * Container image based release trigger.
     */
    ContainerImage = 4,
    /**
     * Package based release trigger.
     */
    Package = 5,
    /**
     * Pull request based release trigger.
     */
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
     * Sets name of the release.
     */
    name?: string;
    /**
     * Sets status of the release.
     */
    status?: ReleaseStatus;
}

export interface ReleaseWorkItemRef {
    assignee?: string;
    /**
     * Gets or sets the ID.
     */
    id?: string;
    /**
     * Gets or sets the state.
     */
    state?: string;
    /**
     * Gets or sets the title.
     */
    title?: string;
    /**
     * Gets or sets the type.
     */
    type?: string;
    /**
     * Gets or sets the workitem url.
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

export interface RetentionPolicy {
    /**
     * Indicates the number of days to keep deployment.
     */
    daysToKeep?: number;
}

export interface RetentionSettings {
    /**
     * Number of days to keep deleted releases.
     */
    daysToKeepDeletedReleases?: number;
    /**
     * Specifies the default environment retention policy.
     */
    defaultEnvironmentRetentionPolicy?: EnvironmentRetentionPolicy;
    /**
     * Specifies the maximum environment retention policy.
     */
    maximumEnvironmentRetentionPolicy?: EnvironmentRetentionPolicy;
}

export interface RunOnServerDeployPhase extends DeployPhase {
    /**
     * Gets and sets the agentless job input.
     */
    deploymentInput?: ServerDeploymentInput;
}

export enum ScheduleDays {
    /**
     * Scheduled day not set.
     */
    None = 0,
    /**
     * Scheduled on Monday.
     */
    Monday = 1,
    /**
     * Scheduled on Tuesday.
     */
    Tuesday = 2,
    /**
     * Scheduled on Wednesday.
     */
    Wednesday = 4,
    /**
     * Scheduled on Thursday.
     */
    Thursday = 8,
    /**
     * Scheduled on Friday.
     */
    Friday = 16,
    /**
     * Scheduled on Saturday.
     */
    Saturday = 32,
    /**
     * Scheduled on Sunday.
     */
    Sunday = 64,
    /**
     * Scheduled on all the days in week.
     */
    All = 127,
}

export interface ScheduledReleaseTrigger extends ReleaseTriggerBase {
    /**
     * Release schedule for Scheduled Release trigger type.
     */
    schedule?: ReleaseSchedule;
}

export enum SenderType {
    ServiceAccount = 1,
    RequestingUser = 2,
}

export interface ServerDeploymentInput extends BaseDeploymentInput {
    /**
     * Gets or sets the parallel execution input.
     */
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
    /**
     * Return top level properties of object.
     */
    None = 0,
    /**
     * Expand release with tasks.
     */
    Tasks = 1,
}

export interface SourceIdInput {
    /**
     * ID of source.
     */
    id?: string;
    /**
     * Name of the source.
     */
    name?: string;
}

export interface SourcePullRequestVersion {
    /**
     * Pull Request Iteration Id for which the release will publish status.
     */
    iterationId?: string;
    /**
     * Pull Request Id for which the release will publish status.
     */
    pullRequestId?: string;
    /**
     * Date and time of the pull request merge creation. It is required to keep timeline record of Releases created by pull request.
     */
    pullRequestMergedAt?: Date;
    /**
     * Source branch of the Pull Request.
     */
    sourceBranch?: string;
    /**
     * Source branch commit Id of the Pull Request for which the release will publish status.
     */
    sourceBranchCommitId?: string;
    /**
     * Target branch of the Pull Request.
     */
    targetBranch?: string;
}

export interface SourceRepoTrigger extends ReleaseTriggerBase {
    /**
     * Alias of the source repo trigger.
     */
    alias?: string;
    branchFilters?: string[];
}

export interface SummaryMailSection {
    /**
     * Html content of summary mail.
     */
    htmlContent?: string;
    /**
     * Rank of the summary mail.
     */
    rank?: number;
    /**
     * Summary mail section type. MailSectionType has section types.
     */
    sectionType?: MailSectionType;
    /**
     * Title of the summary mail.
     */
    title?: string;
}

export interface TagFilter {
    /**
     * Gets or sets the tag filter pattern.
     */
    pattern?: string;
}

export interface TaskOrchestrationPlanGroupReference {
    /**
     * Gets or sets the plan group.
     */
    planGroup?: string;
    /**
     * ID of the Project.
     */
    projectId?: string;
}

export interface TaskOrchestrationPlanGroupsStartedEvent {
    planGroups?: TaskOrchestrationPlanGroupReference[];
}

export enum TaskStatus {
    /**
     * The task does not have the status set.
     */
    Unknown = 0,
    /**
     * The task is in pending status.
     */
    Pending = 1,
    /**
     * The task is currently in progress.
     */
    InProgress = 2,
    /**
     * The task completed successfully.
     */
    Success = 3,
    /**
     * The task execution failed.
     */
    Failure = 4,
    /**
     * The task execution canceled.
     */
    Canceled = 5,
    /**
     * The task execution skipped.
     */
    Skipped = 6,
    /**
     * The task completed successfully.
     */
    Succeeded = 7,
    /**
     * The task execution failed.
     */
    Failed = 8,
    /**
     * The task execution partially succeeded.
     */
    PartiallySucceeded = 9,
}

export interface TfvcArtifactDownloadInput extends ArtifactDownloadInputBase {
}

export interface TimeZone {
    /**
     * Display name of the time zone.
     */
    displayName?: string;
    /**
     * Id of the time zone.
     */
    id?: string;
}

export interface TimeZoneList {
    /**
     * UTC timezone.
     */
    utcTimeZone?: TimeZone;
    /**
     * List of valid timezones.
     */
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
     * Denotes if a variable group is shared with other project or not.
     */
    isShared?: boolean;
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
    /**
     * Gets and sets the dictionary of variables.
     */
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
    /**
     * Gets or sets as the variable is secret or not.
     */
    isSecret?: boolean;
    /**
     * Gets or sets the value.
     */
    value?: string;
}

export interface WorkflowTask {
    /**
     * Gets or sets as the task always run or not.
     */
    alwaysRun?: boolean;
    /**
     * Gets or sets the task condition.
     */
    condition?: string;
    /**
     * Gets or sets as the task continue run on error or not.
     */
    continueOnError?: boolean;
    /**
     * Gets or sets the task definition type. Example:- 'Agent', DeploymentGroup', 'Server' or 'ServerGate'.
     */
    definitionType?: string;
    /**
     * Gets or sets as the task enabled or not.
     */
    enabled?: boolean;
    /**
     * Gets or sets the task environment variables.
     */
    environment?: { [key: string] : string; };
    /**
     * Gets or sets the task inputs.
     */
    inputs?: { [key: string] : string; };
    /**
     * Gets or sets the name of the task.
     */
    name?: string;
    /**
     * Gets or sets the task override inputs.
     */
    overrideInputs?: { [key: string] : string; };
    /**
     * Gets or sets the reference name of the task.
     */
    refName?: string;
    /**
     * Gets or sets the ID of the task.
     */
    taskId: string;
    /**
     * Gets or sets the task timeout.
     */
    timeoutInMinutes?: number;
    /**
     * Gets or sets the version of the task.
     */
    version: string;
}

export interface WorkflowTaskReference {
    /**
     * Task identifier.
     */
    id?: string;
    /**
     * Name of the task.
     */
    name?: string;
    /**
     * Version of the task.
     */
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
            "tfGit": 7,
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
            "deploymentGroupRedeploy": 1,
            "rollbackRedeploy": 2
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
    ReleaseNotCreatedEvent: <any>{
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
            "tfsGit": 1
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

TypeInfo.ReleaseNotCreatedEvent.fields = {
    releaseReason: {
        enumType: TypeInfo.ReleaseReason
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
