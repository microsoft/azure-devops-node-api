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
}

export enum ApprovalType {
    Undefined = 0,
    PreDeploy = 1,
    PostDeploy = 2,
}

export interface ApprovalUpdateMetadata {
    /**
     * Changes the approver to this identity when status is Reassign
     */
    assignedTo: string;
    /**
     * Comment with which approval/rejection is made
     */
    comment: string;
    /**
     * Run the next step at this time.  ToDo: Start handling this when client needs it
     */
    scheduledTime: Date;
    /**
     * Target status of the approval step
     */
    status: ApprovalStatus;
}

export interface Artifact {
    definitions: ArtifactDefinition[];
    source: ArtifactSource;
}

export interface ArtifactDefinition {
    artifactSourceId: number;
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    description: string;
    id: number;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    name: string;
    path: string;
}

export interface ArtifactInstanceData {
    accountName: string;
    authenticationToken: string;
    tfsUrl: string;
    version: string;
}

export interface ArtifactProvider {
    id: number;
    name: string;
    sourceUri: string;
    version: string;
}

export interface ArtifactSource {
    actualSourceReference: { [key: string] : ArtifactSourceReference; };
    alias: string;
    artifactTypeId: string;
    artifactTypeName: string;
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    id: number;
    isPrimary: boolean;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    sourceData: { [key: string] : FormInputInterfaces.InputValue; };
}

export interface ArtifactSourceId {
    artifactTypeId: string;
    sourceIdInputs: SourceIdInput[];
}

export interface ArtifactSourceIdsQueryResult {
    artifactSourceIds: ArtifactSourceId[];
}

export interface ArtifactSourceReference {
    displayValue: string;
    value: string;
}

export interface ArtifactTypeDefinition {
    id: string;
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

export interface ConfigurationVariableValue {
    isSecret: boolean;
    value: string;
}

export interface Consumer {
    consumerId: number;
    consumerName: string;
}

export enum EnvironmentStatus {
    NotStarted = 0,
    Pending = 1,
    Succeeded = 2,
    Rejected = 3,
    InProgress = 4,
    Abandoned = 5,
    Stopped = 6,
    Canceled = 7,
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
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    name: string;
    poolName: string;
    reason: ReleaseReason;
    releaseDefinition: ShallowReference;
    releaseNameFormat: string;
    status: ReleaseStatus;
    targetEnvironmentId: number;
    variables: { [key: string] : ConfigurationVariableValue; };
}

export interface ReleaseApproval {
    approvalHistory: ShallowReference;
    approvalType: ApprovalType;
    approvedBy: VSSInterfaces.IdentityRef;
    approver: VSSInterfaces.IdentityRef;
    comments: string;
    createdOn: Date;
    dateCreated: Date;
    dateLastModified: Date;
    id: number;
    isAutomated: boolean;
    isNotificationOn: boolean;
    modifiedOn: Date;
    rank: number;
    release: ShallowReference;
    releaseDefinition: ShallowReference;
    releaseEnvironment: ShallowReference;
    status: ApprovalStatus;
    trialNumber: number;
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
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    environments: ReleaseDefinitionEnvironment[];
    id: number;
    isDeactivated: boolean;
    linkedArtifacts: Artifact[];
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    name: string;
    releaseNameFormat: string;
    revision: number;
    triggers: ReleaseTrigger[];
    variables: { [key: string] : ConfigurationVariableValue; };
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
    agentPoolId: number;
    demands: any[];
    deployStep: ReleaseDefinitionDeployStep;
    id: number;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    postDeploySteps: ReleaseDefinitionApprovalStep[];
    preDeploySteps: ReleaseDefinitionApprovalStep[];
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
    agentPoolId: number;
    createdOn: Date;
    definitionEnvironmentId: number;
    demands: any[];
    /**
     * Error log to show any unexpected error that occurred during executing deploy step in the current environment
     */
    deployStepErrorLog: string;
    id: number;
    modifiedOn: Date;
    name: string;
    originalPostDeployApprovals: ReleaseApproval[];
    originalPreDeployApprovals: ReleaseApproval[];
    owner: VSSInterfaces.IdentityRef;
    postDeployApprovals: ReleaseApproval[];
    preDeployApprovals: ReleaseApproval[];
    queueId: number;
    rank: number;
    releaseId: number;
    runOptions: { [key: string] : string; };
    status: EnvironmentStatus;
    tasks: ReleaseTask[];
    variables: { [key: string] : ConfigurationVariableValue; };
    workflowTasks: WorkflowTask[];
}

export interface ReleaseEnvironmentCompletedEvent {
    definitionName: string;
    environment: ReleaseEnvironment;
    projectName: string;
    releaseCreatedBy: VSSInterfaces.IdentityRef;
    releaseLogsUri: string;
    releaseName: string;
    status: string;
    targetEnvironmentName: string;
    title: string;
    webAccessUri: string;
}

export enum ReleaseQueryOrder {
    Descending = 0,
    Ascending = 1,
}

export enum ReleaseReason {
    None = 0,
    Manual = 1,
    ContinuousIntegration = 2,
}

export interface ReleaseStartMetadata {
    artifactSourceData: { [key: number] : FormInputInterfaces.InputValue; };
    definitionId: number;
    description: string;
    isDraft: boolean;
    reason: ReleaseReason;
    targetEnvironmentId: number;
}

export enum ReleaseStatus {
    Undefined = 0,
    Draft = 1,
    InProgress = 2,
    Released = 3,
    Stopped = 4,
    Rejected = 5,
    Abandoned = 6,
    Canceled = 7,
}

export interface ReleaseTask {
    agentName: string;
    attempt: number;
    dateEnded: Date;
    dateStarted: Date;
    environmentId: number;
    id: number;
    issues: Issue[];
    lineCount: number;
    name: string;
    rank: number;
    recordType: string;
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
    tasks: ReleaseTask[];
}

export interface ReleaseTrigger {
    targetEnvironmentName: string;
    /**
     * Id of the TriggerType object. For Trigger type ArtifactSource, this would be the ArtifactSourceId
     */
    triggerEntityId: number;
    triggerType: ReleaseTriggerType;
}

export enum ReleaseTriggerType {
    Undefined = 0,
    ArtifactSource = 1,
}

export interface ReleaseUpdatedEvent extends RealtimeReleaseEvent {
    release: Release;
}

export interface ReleaseUpdateMetadata {
    requestTime: Date;
    status: ReleaseStatus;
}

export interface ReleaseWorkItemRef {
    id: string;
    url: string;
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
        }
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
        }
    },
    ApprovalType: {
        enumValues: {
            "undefined": 0,
            "preDeploy": 1,
            "postDeploy": 2,
        }
    },
    ApprovalUpdateMetadata: {
        fields: <any>null
    },
    Artifact: {
        fields: <any>null
    },
    ArtifactDefinition: {
        fields: <any>null
    },
    ArtifactInstanceData: {
        fields: <any>null
    },
    ArtifactProvider: {
        fields: <any>null
    },
    ArtifactSource: {
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
    ConfigurationVariableValue: {
        fields: <any>null
    },
    Consumer: {
        fields: <any>null
    },
    EnvironmentStatus: {
        enumValues: {
            "notStarted": 0,
            "pending": 1,
            "succeeded": 2,
            "rejected": 3,
            "inProgress": 4,
            "abandoned": 5,
            "stopped": 6,
            "canceled": 7,
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
    ReleaseArtifact: {
        fields: <any>null
    },
    ReleaseDefinition: {
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
        }
    },
    ReleaseStartMetadata: {
        fields: <any>null
    },
    ReleaseStatus: {
        enumValues: {
            "undefined": 0,
            "draft": 1,
            "inProgress": 2,
            "released": 3,
            "stopped": 4,
            "rejected": 5,
            "abandoned": 6,
            "canceled": 7,
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
    WorkflowTask: {
        fields: <any>null
    },
};

TypeInfo.AgentArtifactDefinition.fields = {
    artifactType: {
        enumType: TypeInfo.AgentArtifactType
    },
};

TypeInfo.ApprovalPendingEvent.fields = {
};

TypeInfo.ApprovalUpdateMetadata.fields = {
    scheduledTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.ApprovalStatus
    },
};

TypeInfo.Artifact.fields = {
    definitions: {
        isArray: true,
        typeInfo: TypeInfo.ArtifactDefinition
    },
    source: {
        typeInfo: TypeInfo.ArtifactSource
    },
};

TypeInfo.ArtifactDefinition.fields = {
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
};

TypeInfo.ArtifactInstanceData.fields = {
};

TypeInfo.ArtifactProvider.fields = {
};

TypeInfo.ArtifactSource.fields = {
    actualSourceReference: {
        isArray: true,
        typeInfo: TypeInfo.ArtifactSourceReference
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
    modifiedOn: {
        isDate: true,
    },
    sourceData: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputValue
    },
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

TypeInfo.ConfigurationVariableValue.fields = {
};

TypeInfo.Consumer.fields = {
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
    approvalHistory: {
        typeInfo: TypeInfo.ShallowReference
    },
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
    dateCreated: {
        isDate: true,
    },
    dateLastModified: {
        isDate: true,
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

TypeInfo.ReleaseArtifact.fields = {
    artifactProvider: {
        typeInfo: TypeInfo.ArtifactProvider
    },
};

TypeInfo.ReleaseDefinition.fields = {
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
    linkedArtifacts: {
        isArray: true,
        typeInfo: TypeInfo.Artifact
    },
    modifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    modifiedOn: {
        isDate: true,
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
    deployStep: {
        typeInfo: TypeInfo.ReleaseDefinitionDeployStep
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    postDeploySteps: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseDefinitionApprovalStep
    },
    preDeploySteps: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseDefinitionApprovalStep
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
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    },
    originalPostDeployApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    originalPreDeployApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    postDeployApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    preDeployApprovals: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseApproval
    },
    status: {
        enumType: TypeInfo.EnvironmentStatus
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTask
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

TypeInfo.ReleaseStartMetadata.fields = {
    artifactSourceData: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputValue
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
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.ReleaseTask
    },
};

TypeInfo.ReleaseTrigger.fields = {
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
    requestTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.ReleaseStatus
    },
};

TypeInfo.ReleaseWorkItemRef.fields = {
};

TypeInfo.ShallowReference.fields = {
};

TypeInfo.SourceIdInput.fields = {
};

TypeInfo.WorkflowTask.fields = {
};
