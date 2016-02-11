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
}

export interface ApprovalOptions {
    releaseCreatorCanBeApprover: boolean;
    requiredApproverCount: number;
}

export interface ApprovalPendingEvent {
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
}

export interface Artifact {
    alias: string;
    definitionReference: { [key: string] : ArtifactSourceReference; };
    id: number;
    isPrimary: boolean;
    type: string;
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

export interface ArtifactTypeDefinition {
    inputDescriptors: FormInputInterfaces.InputDescriptor[];
    name: string;
}

export interface ArtifactVersion {
    artifactSourceId: number;
    errorMessage: string;
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
}

export interface ConfigurationVariableValue {
    isSecret: boolean;
    value: string;
}

export interface Consumer {
    consumerId: number;
    consumerName: string;
}

export interface DeploymentAttempt {
    attempt: number;
    /**
     * Error log to show any unexpected error that occurred during executing deploy step
     */
    errorLog: string;
    id: number;
    job: ReleaseTask;
    runPlanId: string;
    tasks: ReleaseTask[];
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

export enum EnvironmentStatus {
    Undefined = 0,
    NotStarted = 1,
    Pending = 2,
    Succeeded = 3,
    Rejected = 4,
    InProgress = 5,
    Canceled = 6,
    Queued = 7,
}

export interface Issue {
    issueType: string;
    message: string;
}

export interface RealtimeReleaseEvent {
    projectId: string;
    releaseId: number;
}

export interface Release {
    artifacts: Artifact[];
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    description: string;
    environments: ReleaseEnvironment[];
    id: number;
    keepForever: boolean;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    name: string;
    poolName: string;
    reason: ReleaseReason;
    releaseDefinition: ShallowReference;
    releaseNameFormat: string;
    status: ReleaseStatus;
    variables: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseApproval {
    approvalType: ApprovalType;
    approvedBy: VSSInterfaces.IdentityRef;
    approver: VSSInterfaces.IdentityRef;
    comments: string;
    createdOn: Date;
    history: ReleaseApprovalHistory[];
    id: number;
    isAutomated: boolean;
    isNotificationOn: boolean;
    modifiedOn: Date;
    rank: number;
    release: ShallowReference;
    releaseDefinition: ShallowReference;
    releaseEnvironment: ShallowReference;
    revision: number;
    status: ApprovalStatus;
    trialNumber: number;
}

export interface ReleaseApprovalHistory {
    approver: VSSInterfaces.IdentityRef;
    changedBy: VSSInterfaces.IdentityRef;
    comments: string;
    createdOn: Date;
    modifiedOn: Date;
    revision: number;
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

export interface ReleaseDefinition {
    artifacts: Artifact[];
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    environments: ReleaseDefinitionEnvironment[];
    id: number;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    name: string;
    releaseNameFormat: string;
    retentionPolicy: RetentionPolicy;
    revision: number;
    triggers: ReleaseTrigger[];
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
    deployStep: ReleaseDefinitionDeployStep;
    executionPolicy: EnvironmentExecutionPolicy;
    id: number;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    postDeployApprovals: ReleaseDefinitionApprovals;
    preDeployApprovals: ReleaseDefinitionApprovals;
    queueId: number;
    rank: number;
    runOptions: { [key: string] : string; };
    variables: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseDefinitionEnvironmentStep {
    id: number;
}

export interface ReleaseDefinitionEnvironmentSummary {
    id: number;
    lastReleases: ShallowReference[];
    name: string;
}

export interface ReleaseDefinitionEnvironmentTemplate {
    canDelete: boolean;
    category: string;
    description: string;
    environment: ReleaseDefinitionEnvironment;
    iconTaskId: string;
    id: string;
    name: string;
}

export enum ReleaseDefinitionExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
}

export interface ReleaseDefinitionRevision {
    changedBy: VSSInterfaces.IdentityRef;
    changedDate: Date;
    changeType: AuditAction;
    definitionId: number;
    definitionUrl: string;
    revision: number;
}

export interface ReleaseDefinitionSummary {
    environments: ReleaseDefinitionEnvironmentSummary[];
    releaseDefinition: ShallowReference;
    releases: Release[];
}

export interface ReleaseEnvironment {
    conditions: Condition[];
    createdOn: Date;
    definitionEnvironmentId: number;
    demands: any[];
    deploySteps: DeploymentAttempt[];
    id: number;
    modifiedOn: Date;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    postApprovalsSnapshot: ReleaseDefinitionApprovals;
    postDeployApprovals: ReleaseApproval[];
    preApprovalsSnapshot: ReleaseDefinitionApprovals;
    preDeployApprovals: ReleaseApproval[];
    queueId: number;
    rank: number;
    releaseId: number;
    runOptions: { [key: string] : string; };
    scheduledDeploymentTime: Date;
    status: EnvironmentStatus;
    variables: { [key: string] : ConfigurationVariableValue; };
    workflowTasks: WorkflowTask[];
}

export interface ReleaseEnvironmentCompletedEvent {
    createdByName: string;
    definitionName: string;
    environment: ReleaseEnvironment;
    projectName: string;
    releaseCreatedBy: VSSInterfaces.IdentityRef;
    releaseLogsUri: string;
    releaseName: string;
    status: string;
    title: string;
    webAccessUri: string;
}

export enum ReleaseExpands {
    None = 0,
    Environments = 2,
    Artifacts = 4,
    Approvals = 8,
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

export interface ReleaseStartMetadata {
    artifacts: ArtifactMetadata[];
    definitionId: number;
    description: string;
    isDraft: boolean;
    reason: ReleaseReason;
}

export enum ReleaseStatus {
    Undefined = 0,
    Draft = 1,
    Abandoned = 2,
    Active = 3,
}

export interface ReleaseTask {
    agentName: string;
    dateEnded: Date;
    dateStarted: Date;
    id: number;
    issues: Issue[];
    lineCount: number;
    name: string;
    rank: number;
    status: TaskStatus;
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
    releaseStepId: number;
    tasks: ReleaseTask[];
}

export interface ReleaseTrigger {
    /**
     * Artifact source alias for ArtifactSource trigger type - value is null for all other trigger types
     */
    artifactAlias: string;
    /**
     * Release schedule for Schedule trigger type - value is null for all other trigger types
     */
    schedule: ReleaseSchedule;
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
    keepForever: boolean;
    status: ReleaseStatus;
}

export interface ReleaseWorkItemRef {
    id: string;
    url: string;
}

export interface RetentionPolicy {
    daysToKeep: number;
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

export interface ShallowReference {
    id: number;
    name: string;
    url: string;
}

export interface SourceIdInput {
    id: string;
    name: string;
}

export enum TaskStatus {
    Unknown = 0,
    Pending = 1,
    InProgress = 2,
    Success = 3,
    Failure = 4,
    Canceled = 5,
    Skipped = 6,
}

export interface TimeZone {
    displayName: string;
    id: string;
}

export interface TimeZoneList {
    utcTimeZone: TimeZone;
    validTimeZones: TimeZone[];
}

export interface WorkflowTask {
    alwaysRun: boolean;
    continueOnError: boolean;
    enabled: boolean;
    inputs: { [key: string] : string; };
    name: string;
    taskId: string;
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
        }
    },
    ApprovalOptions: {
        fields: <any>null
    },
    ApprovalPendingEvent: {
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
        }
    },
    Artifact: {
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
        }
    },
    ConfigurationVariableValue: {
        fields: <any>null
    },
    Consumer: {
        fields: <any>null
    },
    DeploymentAttempt: {
        fields: <any>null
    },
    EnvironmentExecutionPolicy: {
        fields: <any>null
    },
    EnvironmentStatus: {
        enumValues: {
            "undefined": 0,
            "notStarted": 1,
            "pending": 2,
            "succeeded": 3,
            "rejected": 4,
            "inProgress": 5,
            "canceled": 6,
            "queued": 7,
        }
    },
    Issue: {
        fields: <any>null
    },
    RealtimeReleaseEvent: {
        fields: <any>null
    },
    Release: {
        fields: <any>null
    },
    ReleaseApproval: {
        fields: <any>null
    },
    ReleaseApprovalHistory: {
        fields: <any>null
    },
    ReleaseArtifact: {
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
        }
    },
    ReleaseDefinitionRevision: {
        fields: <any>null
    },
    ReleaseDefinitionSummary: {
        fields: <any>null
    },
    ReleaseEnvironment: {
        fields: <any>null
    },
    ReleaseEnvironmentCompletedEvent: {
        fields: <any>null
    },
    ReleaseExpands: {
        enumValues: {
            "none": 0,
            "environments": 2,
            "artifacts": 4,
            "approvals": 8,
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
        }
    },
    ReleaseSchedule: {
        fields: <any>null
    },
    ReleaseStartMetadata: {
        fields: <any>null
    },
    ReleaseStatus: {
        enumValues: {
            "undefined": 0,
            "draft": 1,
            "abandoned": 2,
            "active": 3,
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
    ReleaseTrigger: {
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
    ShallowReference: {
        fields: <any>null
    },
    SourceIdInput: {
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
        }
    },
    TimeZone: {
        fields: <any>null
    },
    TimeZoneList: {
        fields: <any>null
    },
    WorkflowTask: {
        fields: <any>null
    },
};

TypeInfo.AgentArtifactDefinition.fields = {
    artifactType: {
        enumType: TypeInfo.AgentArtifactType
    },
};

TypeInfo.ApprovalOptions.fields = {
};

TypeInfo.ApprovalPendingEvent.fields = {
};

TypeInfo.Artifact.fields = {
    definitionReference: {
        isArray: true,
        typeInfo: TypeInfo.ArtifactSourceReference
    },
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

TypeInfo.ArtifactTypeDefinition.fields = {
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    },
};

TypeInfo.ArtifactVersion.fields = {
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

TypeInfo.DeploymentAttempt.fields = {
    job: {
        typeInfo: TypeInfo.ReleaseTask
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTask
    },
};

TypeInfo.EnvironmentExecutionPolicy.fields = {
};

TypeInfo.Issue.fields = {
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
    reason: {
        enumType: TypeInfo.ReleaseReason
    },
    releaseDefinition: {
        typeInfo: TypeInfo.ShallowReference
    },
    status: {
        enumType: TypeInfo.ReleaseStatus
    },
    variables: {
        isArray: true,
        typeInfo: TypeInfo.ConfigurationVariableValue
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
        typeInfo: TypeInfo.ShallowReference
    },
    releaseDefinition: {
        typeInfo: TypeInfo.ShallowReference
    },
    releaseEnvironment: {
        typeInfo: TypeInfo.ShallowReference
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

TypeInfo.ReleaseArtifact.fields = {
    artifactProvider: {
        typeInfo: TypeInfo.ArtifactProvider
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
    modifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    modifiedOn: {
        isDate: true,
    },
    retentionPolicy: {
        typeInfo: TypeInfo.RetentionPolicy
    },
    triggers: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTrigger
    },
    variables: {
        isArray: true,
        typeInfo: TypeInfo.ConfigurationVariableValue
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
    deployStep: {
        typeInfo: TypeInfo.ReleaseDefinitionDeployStep
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
    variables: {
        isArray: true,
        typeInfo: TypeInfo.ConfigurationVariableValue
    },
};

TypeInfo.ReleaseDefinitionEnvironmentStep.fields = {
};

TypeInfo.ReleaseDefinitionEnvironmentSummary.fields = {
    lastReleases: {
        isArray: true,
        typeInfo: TypeInfo.ShallowReference
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

TypeInfo.ReleaseDefinitionSummary.fields = {
    environments: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseDefinitionEnvironmentSummary
    },
    releaseDefinition: {
        typeInfo: TypeInfo.ShallowReference
    },
    releases: {
        isArray: true,
        typeInfo: TypeInfo.Release
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
    deploySteps: {
        isArray: true,
        typeInfo: TypeInfo.DeploymentAttempt
    },
    modifiedOn: {
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
    scheduledDeploymentTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.EnvironmentStatus
    },
    variables: {
        isArray: true,
        typeInfo: TypeInfo.ConfigurationVariableValue
    },
    workflowTasks: {
        isArray: true,
        typeInfo: TypeInfo.WorkflowTask
    },
};

TypeInfo.ReleaseEnvironmentCompletedEvent.fields = {
    environment: {
        typeInfo: TypeInfo.ReleaseEnvironment
    },
    releaseCreatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.ReleaseSchedule.fields = {
    daysToRelease: {
        enumType: TypeInfo.ScheduleDays
    },
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
    issues: {
        isArray: true,
        typeInfo: TypeInfo.Issue
    },
    status: {
        enumType: TypeInfo.TaskStatus
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

TypeInfo.ReleaseTrigger.fields = {
    schedule: {
        typeInfo: TypeInfo.ReleaseSchedule
    },
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

TypeInfo.ShallowReference.fields = {
};

TypeInfo.SourceIdInput.fields = {
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

TypeInfo.WorkflowTask.fields = {
};
