import VSSInterfaces = require("../interfaces/common/VSSInterfaces");
export interface AgentPoolEvent {
    eventType: string;
    pool: TaskAgentPool;
}
export interface AgentRefreshMessage {
    agentId: number;
    timeout: any;
}
export declare enum ConnectedServiceKind {
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
    parameters: {
        [key: string]: string;
    };
    scheme: string;
}
export interface Issue {
    category: string;
    data: {
        [key: string]: string;
    };
    message: string;
    type: IssueType;
}
export declare enum IssueType {
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
    options: {
        [key: number]: JobOption;
    };
    /**
     * Gets or sets the endpoint used for communicating back to the calling service.
     */
    systemConnection: ServiceEndpoint;
    variables: {
        [key: string]: string;
    };
}
export interface JobEvent {
    jobId: string;
    name: string;
}
/**
 * Represents an option that may affect the way an agent runs the job.
 */
export interface JobOption {
    data: {
        [key: string]: string;
    };
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
export declare enum MaskType {
    Variable = 1,
    Regex = 2,
}
export interface PlanEnvironment {
    mask: MaskHint[];
    options: {
        [key: number]: JobOption;
    };
    variables: {
        [key: string]: string;
    };
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
    data: {
        [key: string]: string;
    };
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
    systemCapabilities: {
        [key: string]: string;
    };
    userCapabilities: {
        [key: string]: string;
    };
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
    systemCapabilities: {
        [key: string]: string;
    };
}
export declare enum TaskAgentStatus {
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
    platformInstructions: {
        [key: string]: {
            [key: string]: string;
        };
    };
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
    options: {
        [key: string]: string;
    };
    properties: {
        [key: string]: string;
    };
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
export declare enum TaskOrchestrationItemType {
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
    variables: {
        [key: string]: string;
    };
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
export declare enum TaskOrchestrationPlanState {
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
    inputs: {
        [key: string]: string;
    };
    name: string;
    version: string;
}
export declare enum TaskResult {
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
export declare enum TimelineRecordState {
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
export declare var TypeInfo: {
    AgentPoolEvent: {
        fields: any;
    };
    AgentRefreshMessage: {
        fields: any;
    };
    ConnectedServiceKind: {
        enumValues: {
            "custom": number;
            "azureSubscription": number;
            "chef": number;
            "generic": number;
            "gitHub": number;
        };
    };
    EndpointAuthorization: {
        fields: any;
    };
    Issue: {
        fields: any;
    };
    IssueType: {
        enumValues: {
            "error": number;
            "warning": number;
        };
    };
    JobAssignedEvent: {
        fields: any;
    };
    JobCancelMessage: {
        fields: any;
    };
    JobCompletedEvent: {
        fields: any;
    };
    JobEnvironment: {
        fields: any;
    };
    JobEvent: {
        fields: any;
    };
    JobOption: {
        fields: any;
    };
    JobRequestMessage: {
        fields: any;
    };
    MaskHint: {
        fields: any;
    };
    MaskType: {
        enumValues: {
            "variable": number;
            "regex": number;
        };
    };
    PlanEnvironment: {
        fields: any;
    };
    ServiceEndpoint: {
        fields: any;
    };
    TaskAgent: {
        fields: any;
    };
    TaskAgentJobRequest: {
        fields: any;
    };
    TaskAgentMessage: {
        fields: any;
    };
    TaskAgentPool: {
        fields: any;
    };
    TaskAgentPoolReference: {
        fields: any;
    };
    TaskAgentReference: {
        fields: any;
    };
    TaskAgentSession: {
        fields: any;
    };
    TaskAgentStatus: {
        enumValues: {
            "offline": number;
            "online": number;
        };
    };
    TaskDefinition: {
        fields: any;
    };
    TaskDefinitionEndpoint: {
        fields: any;
    };
    TaskExecution: {
        fields: any;
    };
    TaskGroupDefinition: {
        fields: any;
    };
    TaskInputDefinition: {
        fields: any;
    };
    TaskInstance: {
        fields: any;
    };
    TaskLog: {
        fields: any;
    };
    TaskLogReference: {
        fields: any;
    };
    TaskOrchestrationContainer: {
        fields: any;
    };
    TaskOrchestrationItem: {
        fields: any;
    };
    TaskOrchestrationItemType: {
        enumValues: {
            "container": number;
            "job": number;
        };
    };
    TaskOrchestrationJob: {
        fields: any;
    };
    TaskOrchestrationPlan: {
        fields: any;
    };
    TaskOrchestrationPlanReference: {
        fields: any;
    };
    TaskOrchestrationPlanState: {
        enumValues: {
            "inProgress": number;
            "queued": number;
            "completed": number;
        };
    };
    TaskPackageMetadata: {
        fields: any;
    };
    TaskReference: {
        fields: any;
    };
    TaskResult: {
        enumValues: {
            "succeeded": number;
            "succeededWithIssues": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
            "abandoned": number;
        };
    };
    TaskSourceDefinition: {
        fields: any;
    };
    TaskVersion: {
        fields: any;
    };
    TeamProjectReference: {
        fields: any;
    };
    Timeline: {
        fields: any;
    };
    TimelineRecord: {
        fields: any;
    };
    TimelineRecordState: {
        enumValues: {
            "pending": number;
            "inProgress": number;
            "completed": number;
        };
    };
    TimelineReference: {
        fields: any;
    };
    WebApiConnectedService: {
        fields: any;
    };
    WebApiConnectedServiceDetails: {
        fields: any;
    };
    WebApiConnectedServiceRef: {
        fields: any;
    };
};
