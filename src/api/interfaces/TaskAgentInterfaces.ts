/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*
* See following wiki page for instructions on how to regenerate:
*   https://vsowiki.com/index.php?title=Rest_Client_Generation
*/

"use strict";

import VSSInterfaces = require("./common/VSSInterfaces");


export interface AgentPoolEvent {
    eventType: string;
    pool: TaskAgentPool;
}

export interface AgentRefreshMessage {
    agentId: number;
    timeout: any;
}

export enum ConnectedServiceKind {
    /**
     * Custom or unknown service
     */
    Custom = 0,
    /**
     * Azure Subscription
     */
    AzureSubscription = 1,
    /**
     * Chef Connection
     */
    Chef = 2,
    /**
     * Generic Connection
     */
    Generic = 3,
    /**
     * GitHub Connection
     */
    GitHub = 4,
}

export interface EndpointAuthorization {
    parameters: { [key: string] : string; };
    scheme: string;
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

export interface JobAssignedEvent extends JobEvent {
    request: TaskAgentJobRequest;
}

export interface JobCancelMessage {
    jobId: string;
    timeout: any;
}

export interface JobCompletedEvent extends JobEvent {
    result: TaskResult;
}
/**
 * Represents the context of variables and vectors for a job request.
 */
export interface JobEnvironment {
    endpoints: ServiceEndpoint[];
    mask: MaskHint[];
    options: { [key: number] : JobOption; };
    /**
     * Gets or sets the endpoint used for communicating back to the calling service.
     */
    systemConnection: ServiceEndpoint;
    variables: { [key: string] : string; };
}

export interface JobEvent {
    jobId: string;
    name: string;
}
/**
 * Represents an option that may affect the way an agent runs the job.
 */
export interface JobOption {
    data: { [key: string] : string; };
    /**
     * Gets the id of the option.
     */
    id: string;
}

export interface JobRequestMessage {
    environment: JobEnvironment;
    jobId: string;
    jobName: string;
    lockedUntil: Date;
    lockToken: string;
    plan: TaskOrchestrationPlanReference;
    requestId: number;
    tasks: TaskInstance[];
    timeline: TimelineReference;
}

export interface MaskHint {
    type: MaskType;
    value: string;
}

export enum MaskType {
    Variable = 1,
    Regex = 2,
}

export interface PlanEnvironment {
    mask: MaskHint[];
    options: { [key: number] : JobOption; };
    variables: { [key: string] : string; };
}
/**
 * Represents an endpoint which may be used by an orchestration job.
 */
export interface ServiceEndpoint {
    /**
     * Gets or sets the authorization data for talking to the endpoint.
     */
    authorization: EndpointAuthorization;
    /**
     * The Gets or sets Identity reference for the user who created the Service endpoint
     */
    createdBy: VSSInterfaces.IdentityRef;
    data: { [key: string] : string; };
    /**
     * Gets or Sets description of endpoint
     */
    description: string;
    /**
     * Gets or sets the identifier of this endpoint.
     */
    id: string;
    /**
     * Gets or sets the friendly name of the endpoint.
     */
    name: string;
    /**
     * Gets or sets the type of the endpoint.
     */
    type: string;
    /**
     * Gets or sets the url of the endpoint.
     */
    url: string;
}

export interface TaskAgent extends TaskAgentReference {
    /**
     * Gets the date on which this agent was created.
     */
    createdOn: Date;
    /**
     * Gets or sets a value indicating whether or not this agent should be enabled for job execution.
     */
    enabled: boolean;
    /**
     * Gets or sets the maximum job parallelism allowed on this host.
     */
    maxParallelism: number;
    properties: any;
    /**
     * Gets the current connectivity status of the agent.
     */
    status: TaskAgentStatus;
    /**
     * Gets the date on which the last connectivity status change occurred.
     */
    statusChangedOn: Date;
    systemCapabilities: { [key: string] : string; };
    userCapabilities: { [key: string] : string; };
}

export interface TaskAgentJobRequest {
    assignTime: Date;
    demands: any[];
    finishTime: Date;
    hostId: string;
    jobId: string;
    lockedUntil: Date;
    planId: string;
    planType: string;
    queueTime: Date;
    receiveTime: Date;
    requestId: number;
    reservedAgent: TaskAgentReference;
    result: TaskResult;
    scopeId: string;
    serviceOwner: string;
}

export interface TaskAgentMessage {
    body: string;
    messageId: number;
    messageType: string;
}

export interface TaskAgentPool extends TaskAgentPoolReference {
    /**
     * Gets the administrators group for this agent pool.
     */
    administratorsGroup: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets a value indicating whether or not a queue should be automatically provisioned for each project collection or not.
     */
    autoProvision: boolean;
    /**
     * Gets the identity who created this pool. The creator of the pool is automatically added into the administrators group for the pool on creation.
     */
    createdBy: VSSInterfaces.IdentityRef;
    /**
     * Gets the date/time of the pool creation.
     */
    createdOn: Date;
    /**
     * Gets the scope identifier for groups/roles which are owned by this pool.
     */
    groupScopeId: string;
    /**
     * Gets or sets a value indicating whether or not this pool is managed by the service.
     */
    isHosted: boolean;
    properties: any;
    /**
     * Gets the service accounts group for this agent pool.
     */
    serviceAccountsGroup: VSSInterfaces.IdentityRef;
    /**
     * Gets the current size of the pool.
     */
    size: number;
}

export interface TaskAgentPoolReference {
    id: number;
    name: string;
    scope: string;
}

export interface TaskAgentReference {
    /**
     * Gets the identifier of the agent.
     */
    id: number;
    /**
     * Gets the name of the agent.
     */
    name: string;
    /**
     * Gets the version of the agent.
     */
    version: string;
}

export interface TaskAgentSession {
    agent: TaskAgentReference;
    ownerName: string;
    sessionId: string;
    systemCapabilities: { [key: string] : string; };
}

export enum TaskAgentStatus {
    Offline = 1,
    Online = 2,
}

export interface TaskDefinition {
    agentExecution: TaskExecution;
    author: string;
    category: string;
    contentsUploaded: boolean;
    demands: any[];
    description: string;
    friendlyName: string;
    groups: TaskGroupDefinition[];
    helpMarkDown: string;
    hostType: string;
    iconUrl: string;
    id: string;
    inputs: TaskInputDefinition[];
    instanceNameFormat: string;
    minimumAgentVersion: string;
    name: string;
    packageLocation: string;
    packageType: string;
    serverOwned: boolean;
    sourceDefinitions: TaskSourceDefinition[];
    sourceLocation: string;
    version: TaskVersion;
    visibility: string[];
}

export interface TaskDefinitionEndpoint {
    /**
     * An ID that identifies a service connection to be used for authenticating endpoint requests.
     */
    connectionId: string;
    /**
     * The scope as understood by Connected Services. Essentialy, a project-id for now.
     */
    scope: string;
    /**
     * An XPath/Json based selector to filter response returned by fetching the endpoint Url. An XPath based selector must be prefixed with the string "xpath:". A Json based selector must be prefixed with "json:".  The following selector defines an XPath for extracting nodes named 'ServiceName'.  endpoint.Selector = "xpath://ServiceName";
     */
    selector: string;
    /**
     * TaskId that this endpoint belongs to.
     */
    taskId: string;
    /**
     * URL to GET.
     */
    url: string;
}

export interface TaskExecution {
    /**
     * The utility task to run.  Specifying this means that this task definition is simply a meta task to call another task. This is useful for tasks that call utility tasks like powershell and commandline
     */
    execTask: TaskReference;
    /**
     * If a task is going to run code, then this provides the type/script etc... information by platform. For example, it might look like. net45: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } net20: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } java: { jar: "powershelltask.tasks.automation.teamfoundation.microsoft.com", } node: { script: "powershellhost.js", }
     */
    platformInstructions: { [key: string] : { [key: string] : string; }; };
}

export interface TaskGroupDefinition {
    displayName: string;
    isExpanded: boolean;
    name: string;
}

export interface TaskInputDefinition {
    defaultValue: string;
    groupName: string;
    helpMarkDown: string;
    label: string;
    name: string;
    options: { [key: string] : string; };
    properties: { [key: string] : string; };
    required: boolean;
    type: string;
    visibleRule: string;
}

export interface TaskInstance extends TaskReference {
    alwaysRun: boolean;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    instanceId: string;
}

export interface TaskLog extends TaskLogReference {
    createdOn: Date;
    indexLocation: string;
    lastChangedOn: Date;
    lineCount: number;
    path: string;
}

export interface TaskLogReference {
    id: number;
    location: string;
}

export interface TaskOrchestrationContainer extends TaskOrchestrationItem {
    children: TaskOrchestrationItem[];
    continueOnError: boolean;
    parallel: boolean;
    rollback: TaskOrchestrationContainer;
}

export interface TaskOrchestrationItem {
    itemType: TaskOrchestrationItemType;
}

export enum TaskOrchestrationItemType {
    Container = 0,
    Job = 1,
}

export interface TaskOrchestrationJob extends TaskOrchestrationItem {
    demands: any[];
    executeAs: VSSInterfaces.IdentityRef;
    executionTimeout: any;
    instanceId: string;
    name: string;
    tasks: TaskInstance[];
    variables: { [key: string] : string; };
}

export interface TaskOrchestrationPlan extends TaskOrchestrationPlanReference {
    environment: PlanEnvironment;
    finishTime: Date;
    implementation: TaskOrchestrationContainer;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TaskOrchestrationPlanState;
    timeline: TimelineReference;
}

export interface TaskOrchestrationPlanReference {
    artifactLocation: string;
    artifactUri: string;
    planId: string;
    planType: string;
    scopeIdentifier: string;
    version: number;
}

export enum TaskOrchestrationPlanState {
    InProgress = 1,
    Queued = 2,
    Completed = 4,
}

export interface TaskPackageMetadata {
    /**
     * Gets the name of the package.
     */
    type: string;
    /**
     * Gets the url of the package.
     */
    url: string;
    /**
     * Gets the version of the package.
     */
    version: string;
}

export interface TaskReference {
    id: string;
    inputs: { [key: string] : string; };
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

export interface TaskSourceDefinition {
    authKey: string;
    endpoint: string;
    selector: string;
    target: string;
}

export interface TaskVersion {
    isTest: boolean;
    major: number;
    minor: number;
    patch: number;
}
/**
 * Represents a shallow reference to a TeamProject.
 */
export interface TeamProjectReference {
    /**
     * Project abbreviation.
     */
    abbreviation: string;
    /**
     * The project's description (if any).
     */
    description: string;
    /**
     * Project identifier.
     */
    id: string;
    /**
     * Project name.
     */
    name: string;
    /**
     * Project state.
     */
    state: any;
    /**
     * Url to the full version of the object.
     */
    url: string;
}

export interface Timeline extends TimelineReference {
    lastChangedBy: string;
    lastChangedOn: Date;
    records: TimelineRecord[];
}

export interface TimelineRecord {
    changeId: number;
    currentOperation: string;
    details: TimelineReference;
    errorCount: number;
    finishTime: Date;
    id: string;
    issues: Issue[];
    lastModified: Date;
    location: string;
    log: TaskLogReference;
    name: string;
    order: number;
    parentId: string;
    percentComplete: number;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TimelineRecordState;
    type: string;
    warningCount: number;
    workerName: string;
}

export enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}

export interface TimelineReference {
    changeId: number;
    id: string;
    location: string;
}

export interface WebApiConnectedService extends WebApiConnectedServiceRef {
    /**
     * The user who did the OAuth authentication to created this service
     */
    authenticatedBy: VSSInterfaces.IdentityRef;
    /**
     * Extra description on the service.
     */
    description: string;
    /**
     * Friendly Name of service connection
     */
    friendlyName: string;
    /**
     * Id/Name of the connection service. For Ex: Subscription Id for Azure Connection
     */
    id: string;
    /**
     * The kind of service.
     */
    kind: string;
    /**
     * The project associated with this service
     */
    project: TeamProjectReference;
    /**
     * Optional uri to connect directly to the service such as https://windows.azure.com
     */
    serviceUri: string;
}

export interface WebApiConnectedServiceDetails extends WebApiConnectedServiceRef {
    /**
     * Meta data for service connection
     */
    connectedServiceMetaData: WebApiConnectedService;
    /**
     * Credential info
     */
    credentialsXml: string;
    /**
     * Optional uri to connect directly to the service such as https://windows.azure.com
     */
    endPoint: string;
}

export interface WebApiConnectedServiceRef {
    id: string;
    url: string;
}

export var TypeInfo = {
    AgentPoolEvent: {
        fields: <any>null
    },
    AgentRefreshMessage: {
        fields: <any>null
    },
    ConnectedServiceKind: {
        enumValues: {
            "custom": 0,
            "azureSubscription": 1,
            "chef": 2,
            "generic": 3,
            "gitHub": 4,
        }
    },
    EndpointAuthorization: {
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
    JobAssignedEvent: {
        fields: <any>null
    },
    JobCancelMessage: {
        fields: <any>null
    },
    JobCompletedEvent: {
        fields: <any>null
    },
    JobEnvironment: {
        fields: <any>null
    },
    JobEvent: {
        fields: <any>null
    },
    JobOption: {
        fields: <any>null
    },
    JobRequestMessage: {
        fields: <any>null
    },
    MaskHint: {
        fields: <any>null
    },
    MaskType: {
        enumValues: {
            "variable": 1,
            "regex": 2,
        }
    },
    PlanEnvironment: {
        fields: <any>null
    },
    ServiceEndpoint: {
        fields: <any>null
    },
    TaskAgent: {
        fields: <any>null
    },
    TaskAgentJobRequest: {
        fields: <any>null
    },
    TaskAgentMessage: {
        fields: <any>null
    },
    TaskAgentPool: {
        fields: <any>null
    },
    TaskAgentPoolReference: {
        fields: <any>null
    },
    TaskAgentReference: {
        fields: <any>null
    },
    TaskAgentSession: {
        fields: <any>null
    },
    TaskAgentStatus: {
        enumValues: {
            "offline": 1,
            "online": 2,
        }
    },
    TaskDefinition: {
        fields: <any>null
    },
    TaskDefinitionEndpoint: {
        fields: <any>null
    },
    TaskExecution: {
        fields: <any>null
    },
    TaskGroupDefinition: {
        fields: <any>null
    },
    TaskInputDefinition: {
        fields: <any>null
    },
    TaskInstance: {
        fields: <any>null
    },
    TaskLog: {
        fields: <any>null
    },
    TaskLogReference: {
        fields: <any>null
    },
    TaskOrchestrationContainer: {
        fields: <any>null
    },
    TaskOrchestrationItem: {
        fields: <any>null
    },
    TaskOrchestrationItemType: {
        enumValues: {
            "container": 0,
            "job": 1,
        }
    },
    TaskOrchestrationJob: {
        fields: <any>null
    },
    TaskOrchestrationPlan: {
        fields: <any>null
    },
    TaskOrchestrationPlanReference: {
        fields: <any>null
    },
    TaskOrchestrationPlanState: {
        enumValues: {
            "inProgress": 1,
            "queued": 2,
            "completed": 4,
        }
    },
    TaskPackageMetadata: {
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
    TaskSourceDefinition: {
        fields: <any>null
    },
    TaskVersion: {
        fields: <any>null
    },
    TeamProjectReference: {
        fields: <any>null
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
    TimelineReference: {
        fields: <any>null
    },
    WebApiConnectedService: {
        fields: <any>null
    },
    WebApiConnectedServiceDetails: {
        fields: <any>null
    },
    WebApiConnectedServiceRef: {
        fields: <any>null
    },
};

TypeInfo.AgentPoolEvent.fields = {
    pool: {
        typeInfo: TypeInfo.TaskAgentPool
    },
};

TypeInfo.AgentRefreshMessage.fields = {
};

TypeInfo.EndpointAuthorization.fields = {
};

TypeInfo.Issue.fields = {
    type: {
        enumType: TypeInfo.IssueType
    },
};

TypeInfo.JobAssignedEvent.fields = {
    request: {
        typeInfo: TypeInfo.TaskAgentJobRequest
    },
};

TypeInfo.JobCancelMessage.fields = {
};

TypeInfo.JobCompletedEvent.fields = {
    result: {
        enumType: TypeInfo.TaskResult
    },
};

TypeInfo.JobEnvironment.fields = {
    endpoints: {
        isArray: true,
        typeInfo: TypeInfo.ServiceEndpoint
    },
    mask: {
        isArray: true,
        typeInfo: TypeInfo.MaskHint
    },
    options: {
        isArray: true,
        typeInfo: TypeInfo.JobOption
    },
    systemConnection: {
        typeInfo: TypeInfo.ServiceEndpoint
    },
};

TypeInfo.JobEvent.fields = {
};

TypeInfo.JobOption.fields = {
};

TypeInfo.JobRequestMessage.fields = {
    environment: {
        typeInfo: TypeInfo.JobEnvironment
    },
    lockedUntil: {
        isDate: true,
    },
    plan: {
        typeInfo: TypeInfo.TaskOrchestrationPlanReference
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.TaskInstance
    },
    timeline: {
        typeInfo: TypeInfo.TimelineReference
    },
};

TypeInfo.MaskHint.fields = {
    type: {
        enumType: TypeInfo.MaskType
    },
};

TypeInfo.PlanEnvironment.fields = {
    mask: {
        isArray: true,
        typeInfo: TypeInfo.MaskHint
    },
    options: {
        isArray: true,
        typeInfo: TypeInfo.JobOption
    },
};

TypeInfo.ServiceEndpoint.fields = {
    authorization: {
        typeInfo: TypeInfo.EndpointAuthorization
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.TaskAgent.fields = {
    createdOn: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.TaskAgentStatus
    },
    statusChangedOn: {
        isDate: true,
    },
};

TypeInfo.TaskAgentJobRequest.fields = {
    assignTime: {
        isDate: true,
    },
    finishTime: {
        isDate: true,
    },
    lockedUntil: {
        isDate: true,
    },
    queueTime: {
        isDate: true,
    },
    receiveTime: {
        isDate: true,
    },
    reservedAgent: {
        typeInfo: TypeInfo.TaskAgentReference
    },
    result: {
        enumType: TypeInfo.TaskResult
    },
};

TypeInfo.TaskAgentMessage.fields = {
};

TypeInfo.TaskAgentPool.fields = {
    administratorsGroup: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdOn: {
        isDate: true,
    },
    serviceAccountsGroup: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.TaskAgentPoolReference.fields = {
};

TypeInfo.TaskAgentReference.fields = {
};

TypeInfo.TaskAgentSession.fields = {
    agent: {
        typeInfo: TypeInfo.TaskAgentReference
    },
};

TypeInfo.TaskDefinition.fields = {
    agentExecution: {
        typeInfo: TypeInfo.TaskExecution
    },
    groups: {
        isArray: true,
        typeInfo: TypeInfo.TaskGroupDefinition
    },
    inputs: {
        isArray: true,
        typeInfo: TypeInfo.TaskInputDefinition
    },
    sourceDefinitions: {
        isArray: true,
        typeInfo: TypeInfo.TaskSourceDefinition
    },
    version: {
        typeInfo: TypeInfo.TaskVersion
    },
};

TypeInfo.TaskDefinitionEndpoint.fields = {
};

TypeInfo.TaskExecution.fields = {
    execTask: {
        typeInfo: TypeInfo.TaskReference
    },
};

TypeInfo.TaskGroupDefinition.fields = {
};

TypeInfo.TaskInputDefinition.fields = {
};

TypeInfo.TaskInstance.fields = {
};

TypeInfo.TaskLog.fields = {
    createdOn: {
        isDate: true,
    },
    lastChangedOn: {
        isDate: true,
    },
};

TypeInfo.TaskLogReference.fields = {
};

TypeInfo.TaskOrchestrationContainer.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.TaskOrchestrationItem
    },
    itemType: {
        enumType: TypeInfo.TaskOrchestrationItemType
    },
    rollback: {
        typeInfo: TypeInfo.TaskOrchestrationContainer
    },
};

TypeInfo.TaskOrchestrationItem.fields = {
    itemType: {
        enumType: TypeInfo.TaskOrchestrationItemType
    },
};

TypeInfo.TaskOrchestrationJob.fields = {
    executeAs: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    itemType: {
        enumType: TypeInfo.TaskOrchestrationItemType
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.TaskInstance
    },
};

TypeInfo.TaskOrchestrationPlan.fields = {
    environment: {
        typeInfo: TypeInfo.PlanEnvironment
    },
    finishTime: {
        isDate: true,
    },
    implementation: {
        typeInfo: TypeInfo.TaskOrchestrationContainer
    },
    result: {
        enumType: TypeInfo.TaskResult
    },
    startTime: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.TaskOrchestrationPlanState
    },
    timeline: {
        typeInfo: TypeInfo.TimelineReference
    },
};

TypeInfo.TaskOrchestrationPlanReference.fields = {
};

TypeInfo.TaskPackageMetadata.fields = {
};

TypeInfo.TaskReference.fields = {
};

TypeInfo.TaskSourceDefinition.fields = {
};

TypeInfo.TaskVersion.fields = {
};

TypeInfo.TeamProjectReference.fields = {
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
        typeInfo: TypeInfo.TaskLogReference
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
};

TypeInfo.TimelineReference.fields = {
};

TypeInfo.WebApiConnectedService.fields = {
    authenticatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    project: {
        typeInfo: TypeInfo.TeamProjectReference
    },
};

TypeInfo.WebApiConnectedServiceDetails.fields = {
    connectedServiceMetaData: {
        typeInfo: TypeInfo.WebApiConnectedService
    },
};

TypeInfo.WebApiConnectedServiceRef.fields = {
};
