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


export enum AadLoginPromptOption {
    /**
     * Do not provide a prompt option
     */
    NoOption = 0,
    /**
     * Force the user to login again.
     */
    Login = 1,
    /**
     * Force the user to select which account they are logging in with instead of automatically picking the user up from the session state. NOTE: This does not work for switching bewtween the variants of a dual-homed user.
     */
    SelectAccount = 2,
    /**
     * Force the user to login again.  Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login.
     */
    FreshLogin = 3,
}

export interface AadOauthTokenRequest {
    refresh: boolean;
    resource: string;
    tenantId: string;
    token: string;
}

export interface AadOauthTokenResult {
    accessToken: string;
    refreshTokenCache: string;
}

export interface AgentChangeEvent {
    agent: TaskAgent;
    eventType: string;
    pool: TaskAgentPoolReference;
    poolId: number;
    timeStamp: Date;
}

export interface AgentJobRequestMessage extends JobRequestMessage {
    lockedUntil: Date;
    lockToken: string;
    requestId: number;
    tasks: TaskInstance[];
}

export interface AgentMigrationMessage {
    accessToken: string;
}

export interface AgentPoolEvent {
    eventType: string;
    pool: TaskAgentPool;
}

export interface AgentQueueEvent {
    eventType: string;
    queue: TaskAgentQueue;
}

export interface AgentQueuesEvent {
    eventType: string;
    queues: TaskAgentQueue[];
}

export interface AgentRefreshMessage {
    agentId: number;
    targetVersion: string;
    timeout: any;
}

export interface AgentRequestEvent {
    eventType: string;
    planId: string;
    poolId: number;
    reservedAgentId: number;
    result: TaskResult;
    timeStamp: Date;
}

export enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
}

export interface AuthorizationHeader {
    name: string;
    value: string;
}

export interface AzureSpnOperationStatus {
    state: string;
    statusMessage: string;
}

export interface AzureSubscription {
    displayName: string;
    subscriptionId: string;
    subscriptionTenantId: string;
    subscriptionTenantName: string;
}

export interface AzureSubscriptionQueryResult {
    errorMessage: string;
    value: AzureSubscription[];
}

export interface DataSource {
    endpointUrl: string;
    name: string;
    resultSelector: string;
}

export interface DataSourceBinding extends DistributedTaskCommonInterfaces.DataSourceBindingBase {
}

export interface DataSourceDetails {
    dataSourceName: string;
    dataSourceUrl: string;
    parameters: { [key: string] : string; };
    resultSelector: string;
}

export interface DependencyBinding {
    key: string;
    value: string;
}

export interface DependencyData {
    input: string;
    map: { key: string; value: { key: string; value: string }[] }[];
}

export interface DependsOn {
    input: string;
    map: DependencyBinding[];
}

export interface DeploymentGroup extends DeploymentGroupReference {
    machineCount: number;
    machines: DeploymentMachine[];
}

export enum DeploymentGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}

export enum DeploymentGroupExpands {
    None = 0,
    Machines = 2,
}

export interface DeploymentGroupReference {
    id: number;
    name: string;
    pool: TaskAgentPoolReference;
    project: ProjectReference;
}

export interface DeploymentMachine {
    agent: TaskAgentReference;
    tags: string[];
}

export interface DeploymentMachineGroup extends DeploymentMachineGroupReference {
    machines: DeploymentMachine[];
    size: number;
}

export interface DeploymentMachineGroupReference {
    id: number;
    name: string;
    pool: TaskAgentPoolReference;
    project: ProjectReference;
}

export interface DeploymentMachinesChangeEvent {
    machineGroupReference: DeploymentGroupReference;
    machines: DeploymentMachine[];
}

export interface EndpointAuthorization {
    parameters: { [key: string] : string; };
    scheme: string;
}

export interface EndpointUrl {
    dependsOn: DependsOn;
    displayName: string;
    helpText: string;
    isVisible: string;
    value: string;
}

export interface HelpLink {
    text: string;
    url: string;
}

export interface InputValidationItem {
    isValid: boolean;
    reason: string;
    type: string;
    value: string;
}

export interface InputValidationRequest {
    inputs: { [key: string] : InputValidationItem; };
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
    outputVariables: { [key: string] : VariableValue; };
    requestId: number;
    result: TaskResult;
}

/**
 * Represents the context of variables and vectors for a job request.
 */
export interface JobEnvironment {
    endpoints: ServiceEndpoint[];
    mask: MaskHint[];
    options: { [key: string] : JobOption; };
    secureFiles: SecureFile[];
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

export interface JobEventConfig {
    timeout: string;
}

export interface JobEventsConfig {
    jobAssigned: JobEventConfig;
    jobCompleted: JobEventConfig;
    jobStarted: JobEventConfig;
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
    messageType: string;
    plan: TaskOrchestrationPlanReference;
    timeline: TimelineReference;
}

export interface JobStartedEvent extends JobEvent {
}

export enum MachineGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}

export interface MaskHint {
    type: MaskType;
    value: string;
}

export enum MaskType {
    Variable = 1,
    Regex = 2,
}

/**
 * Represents a downloadable package.
 */
export interface PackageMetadata {
    /**
     * The date the package was created
     */
    createdOn: Date;
    /**
     * A direct link to download the package.
     */
    downloadUrl: string;
    /**
     * The UI uses this to display instructions, i.e. "unzip MyAgent.zip"
     */
    filename: string;
    /**
     * MD5 hash as a base64 string
     */
    hashValue: string;
    /**
     * A link to documentation
     */
    infoUrl: string;
    /**
     * The platform (win7, linux, etc.)
     */
    platform: string;
    /**
     * The type of package (e.g. "agent")
     */
    type: string;
    /**
     * The package version.
     */
    version: PackageVersion;
}

export interface PackageVersion {
    major: number;
    minor: number;
    patch: number;
}

export interface PlanEnvironment {
    mask: MaskHint[];
    options: { [key: string] : JobOption; };
    variables: { [key: string] : string; };
}

export enum PlanGroupStatusFilter {
    Running = 1,
    Queued = 2,
    All = 3,
}

export interface ProjectReference {
    id: string;
    name: string;
}

export interface ResultTransformationDetails {
    resultTemplate: string;
}

export interface SecureFile {
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    id: number;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    name: string;
    properties: { [key: string] : string; };
    ticket: string;
}

export enum SecureFileActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}

export interface SendJobResponse {
    events: JobEventsConfig;
    variables: { [key: string] : string; };
}

export interface ServerExecutionDefinition {
    events: JobEventsConfig;
}

export interface ServerJobRequestMessage extends JobRequestMessage {
    taskDefinition: TaskDefinition;
    taskInstance: TaskInstance;
}

/**
 * Represents an endpoint which may be used by an orchestration job.
 */
export interface ServiceEndpoint {
    administratorsGroup: VSSInterfaces.IdentityRef;
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
    groupScopeId: string;
    /**
     * Gets or sets the identifier of this endpoint.
     */
    id: string;
    /**
     * EndPoint state indictor
     */
    isReady: boolean;
    /**
     * Gets or sets the friendly name of the endpoint.
     */
    name: string;
    /**
     * Error message during creation/deletion of endpoint
     */
    operationStatus: any;
    readersGroup: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the type of the endpoint.
     */
    type: string;
    /**
     * Gets or sets the url of the endpoint.
     */
    url: string;
}

export interface ServiceEndpointAuthenticationScheme {
    authorizationHeaders: AuthorizationHeader[];
    displayName: string;
    inputDescriptors: FormInputInterfaces.InputDescriptor[];
    scheme: string;
}

export interface ServiceEndpointDetails {
    authorization: EndpointAuthorization;
    data: { [key: string] : string; };
    type: string;
    url: string;
}

export interface ServiceEndpointRequest {
    dataSourceDetails: DataSourceDetails;
    resultTransformationDetails: ResultTransformationDetails;
    serviceEndpointDetails: ServiceEndpointDetails;
}

export interface ServiceEndpointRequestResult {
    errorMessage: string;
    result: any;
    statusCode: string;
}

export interface ServiceEndpointType {
    authenticationSchemes: ServiceEndpointAuthenticationScheme[];
    dataSources: DataSource[];
    dependencyData: DependencyData[];
    description: string;
    displayName: string;
    endpointUrl: EndpointUrl;
    helpLink: HelpLink;
    helpMarkDown: string;
    iconUrl: string;
    inputDescriptors: FormInputInterfaces.InputDescriptor[];
    name: string;
}

export interface TaskAgent extends TaskAgentReference {
    /**
     * Gets the request which is currently assigned to this agent.
     */
    assignedRequest: TaskAgentJobRequest;
    /**
     * Gets or sets the authorization information for this agent.
     */
    authorization: TaskAgentAuthorization;
    /**
     * Gets the date on which this agent was created.
     */
    createdOn: Date;
    /**
     * Gets or sets the maximum job parallelism allowed on this host.
     */
    maxParallelism: number;
    /**
     * Gets the pending update for this agent.
     */
    pendingUpdate: TaskAgentUpdate;
    properties: any;
    /**
     * Gets the date on which the last connectivity status change occurred.
     */
    statusChangedOn: Date;
    systemCapabilities: { [key: string] : string; };
    userCapabilities: { [key: string] : string; };
}

/**
 * Provides data necessary for authorizing the agent using OAuth 2.0 authentication flows.
 */
export interface TaskAgentAuthorization {
    /**
     * Gets or sets the endpoint used to obtain access tokens from the configured token service.
     */
    authorizationUrl: string;
    /**
     * Gets or sets the client identifier for this agent.
     */
    clientId: string;
    /**
     * Gets or sets the public key used to verify the identity of this agent.
     */
    publicKey: TaskAgentPublicKey;
}

export interface TaskAgentJobRequest {
    assignTime: Date;
    data: { [key: string] : string; };
    definition: TaskOrchestrationOwner;
    demands: any[];
    finishTime: Date;
    hostId: string;
    jobId: string;
    jobName: string;
    lockedUntil: Date;
    matchedAgents: TaskAgentReference[];
    owner: TaskOrchestrationOwner;
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

/**
 * Provides a contract for receiving messages from the task orchestrator.
 */
export interface TaskAgentMessage {
    /**
     * Gets or sets the body of the message. If the IV property is provided the body will need to be decrypted using the TaskAgentSession.EncryptionKey value in addition to the IV.
     */
    body: string;
    /**
     * Gets or sets the intialization vector used to encrypt this message.
     */
    iV: number[];
    /**
     * Gets or sets the message identifier.
     */
    messageId: number;
    /**
     * Gets or sets the message type, describing the data contract found in TaskAgentMessage.Body.
     */
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
    properties: any;
    /**
     * Gets a value indicating whether or not roles have been provisioned for this pool.
     */
    provisioned: boolean;
    /**
     * Gets the service accounts group for this agent pool.
     */
    serviceAccountsGroup: VSSInterfaces.IdentityRef;
    /**
     * Gets the current size of the pool.
     */
    size: number;
}

export enum TaskAgentPoolActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}

export interface TaskAgentPoolMaintenanceDefinition {
    /**
     * Enable maintenance
     */
    enabled: boolean;
    /**
     * Id
     */
    id: number;
    /**
     * Maintenance job timeout per agent
     */
    jobTimeoutInMinutes: number;
    /**
     * Max percentage of agents within a pool running maintenance job at given time
     */
    maxConcurrentAgentsPercentage: number;
    options: TaskAgentPoolMaintenanceOptions;
    /**
     * Pool reference for the maintenance definition
     */
    pool: TaskAgentPoolReference;
    retentionPolicy: TaskAgentPoolMaintenanceRetentionPolicy;
    scheduleSetting: TaskAgentPoolMaintenanceSchedule;
}

export interface TaskAgentPoolMaintenanceJob {
    /**
     * The maintenance definition for the maintenance job
     */
    definitionId: number;
    /**
     * The total error counts during the maintenance job
     */
    errorCount: number;
    /**
     * Time that the maintenance job was completed
     */
    finishTime: Date;
    /**
     * Id of the maintenance job
     */
    jobId: number;
    /**
     * The log download url for the maintenance job
     */
    logsDownloadUrl: string;
    /**
     * Orchestration/Plan Id for the maintenance job
     */
    orchestrationId: string;
    /**
     * Pool reference for the maintenance job
     */
    pool: TaskAgentPoolReference;
    /**
     * Time that the maintenance job was queued
     */
    queueTime: Date;
    /**
     * The identity that queued the maintenance job
     */
    requestedBy: VSSInterfaces.IdentityRef;
    /**
     * The maintenance job result
     */
    result: TaskAgentPoolMaintenanceJobResult;
    /**
     * Time that the maintenance job was started
     */
    startTime: Date;
    /**
     * Status of the maintenance job
     */
    status: TaskAgentPoolMaintenanceJobStatus;
    targetAgents: TaskAgentReference[];
    /**
     * The total warning counts during the maintenance job
     */
    warningCount: number;
}

export enum TaskAgentPoolMaintenanceJobResult {
    Succeeded = 1,
    Failed = 2,
    Canceled = 4,
}

export enum TaskAgentPoolMaintenanceJobStatus {
    InProgress = 1,
    Completed = 2,
    Cancelling = 4,
    Queued = 8,
}

export interface TaskAgentPoolMaintenanceOptions {
    /**
     * time to consider a System.DefaultWorkingDirectory is stale
     */
    workingDirectoryExpirationInDays: number;
}

export interface TaskAgentPoolMaintenanceRetentionPolicy {
    /**
     * Number of records to keep for maintenance job executed with this definition.
     */
    numberOfHistoryRecordsToKeep: number;
}

export interface TaskAgentPoolMaintenanceSchedule {
    /**
     * Days for a build (flags enum for days of the week)
     */
    daysToBuild: TaskAgentPoolMaintenanceScheduleDays;
    /**
     * The Job Id of the Scheduled job that will queue the pool maintenance job.
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

export enum TaskAgentPoolMaintenanceScheduleDays {
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

export interface TaskAgentPoolReference {
    id: number;
    /**
     * Gets or sets a value indicating whether or not this pool is managed by the service.
     */
    isHosted: boolean;
    name: string;
    /**
     * Gets or sets the type of the pool
     */
    poolType: TaskAgentPoolType;
    scope: string;
}

export enum TaskAgentPoolType {
    Automation = 1,
    Deployment = 2,
}

/**
 * Represents the public key portion of an RSA asymmetric key.
 */
export interface TaskAgentPublicKey {
    /**
     * Gets or sets the exponent for the public key.
     */
    exponent: number[];
    /**
     * Gets or sets the modulus for the public key.
     */
    modulus: number[];
}

export interface TaskAgentQueue {
    groupScopeId: string;
    id: number;
    name: string;
    pool: TaskAgentPoolReference;
    projectId: string;
    provisioned: boolean;
}

export enum TaskAgentQueueActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}

export interface TaskAgentReference {
    _links: any;
    /**
     * Gets or sets a value indicating whether or not this agent should be enabled for job execution.
     */
    enabled: boolean;
    /**
     * Gets the identifier of the agent.
     */
    id: number;
    /**
     * Gets the name of the agent.
     */
    name: string;
    /**
     * Gets the current connectivity status of the agent.
     */
    status: TaskAgentStatus;
    /**
     * Gets the version of the agent.
     */
    version: string;
}

/**
 * Represents a session for performing message exchanges from an agent.
 */
export interface TaskAgentSession {
    /**
     * Gets or sets the agent which is the target of the session.
     */
    agent: TaskAgentReference;
    /**
     * Gets the key used to encrypt message traffic for this session.
     */
    encryptionKey: TaskAgentSessionKey;
    /**
     * Gets or sets the owner name of this session. Generally this will be the machine of origination.
     */
    ownerName: string;
    /**
     * Gets the unique identifier for this session.
     */
    sessionId: string;
    systemCapabilities: { [key: string] : string; };
}

/**
 * Represents a symmetric key used for message-level encryption for communication sent to an agent.
 */
export interface TaskAgentSessionKey {
    /**
     * Gets or sets a value indicating whether or not the key value is encrypted. If this value is true, the property should be decrypted using the RSA key exchanged with the server during registration.
     */
    encrypted: boolean;
    /**
     * Gets or sets the symmetric key value.
     */
    value: number[];
}

export enum TaskAgentStatus {
    Offline = 1,
    Online = 2,
}

export interface TaskAgentUpdate {
    /**
     * The current state of this agent update
     */
    currentState: string;
    /**
     * The identity that request the agent update
     */
    requestedBy: VSSInterfaces.IdentityRef;
    /**
     * Gets the date on which this agent update was requested.
     */
    requestTime: Date;
    /**
     * Gets or sets the source agent version of the agent update
     */
    sourceVersion: PackageVersion;
    /**
     * Gets or sets the target agent version of the agent update
     */
    targetVersion: PackageVersion;
}

export interface TaskAttachment {
    _links: any;
    createdOn: Date;
    lastChangedBy: string;
    lastChangedOn: Date;
    name: string;
    recordId: string;
    timelineId: string;
    type: string;
}

export interface TaskChangeEvent {
}

export interface TaskDefinition {
    agentExecution: TaskExecution;
    author: string;
    category: string;
    contentsUploaded: boolean;
    contributionIdentifier: string;
    contributionVersion: string;
    dataSourceBindings: DataSourceBinding[];
    definitionType: string;
    demands: any[];
    description: string;
    disabled: boolean;
    execution: { [key: string] : any; };
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
    preview: boolean;
    releaseNotes: string;
    runsOn: string[];
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
     * An Json based keyselector to filter response returned by fetching the endpoint Url.A Json based keyselector must be prefixed with "jsonpath:". KeySelector can be used to specify the filter to get the keys for the values specified with Selector.  The following keyselector defines an Json for extracting nodes named 'ServiceName'.  endpoint.KeySelector = "jsonpath://ServiceName";
     */
    keySelector: string;
    /**
     * The scope as understood by Connected Services. Essentialy, a project-id for now.
     */
    scope: string;
    /**
     * An XPath/Json based selector to filter response returned by fetching the endpoint Url. An XPath based selector must be prefixed with the string "xpath:". A Json based selector must be prefixed with "jsonpath:".  The following selector defines an XPath for extracting nodes named 'ServiceName'.  endpoint.Selector = "xpath://ServiceName";
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

export interface TaskDefinitionReference {
    definitionType: string;
    id: string;
    versionSpec: string;
}

export enum TaskDefinitionStatus {
    Preinstalled = 1,
    ReceivedInstallOrUpdate = 2,
    Installed = 3,
    ReceivedUninstall = 4,
    Uninstalled = 5,
    RequestedUpdate = 6,
    Updated = 7,
    AlreadyUpToDate = 8,
    InlineUpdateReceived = 9,
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

export interface TaskGroup extends TaskDefinition {
    comment: string;
    createdBy: VSSInterfaces.IdentityRef;
    createdOn: Date;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedOn: Date;
    owner: string;
    revision: number;
    tasks: TaskGroupStep[];
}

export interface TaskGroupDefinition {
    displayName: string;
    isExpanded: boolean;
    name: string;
    tags: string[];
    visibleRule: string;
}

export interface TaskGroupRevision {
    changedBy: VSSInterfaces.IdentityRef;
    changedDate: Date;
    changeType: AuditAction;
    comment: string;
    fileId: number;
    revision: number;
    taskGroupId: string;
}

export interface TaskGroupStep {
    alwaysRun: boolean;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    inputs: { [key: string] : string; };
    task: TaskDefinitionReference;
    timeoutInMinutes: number;
}

export interface TaskHubLicenseDetails {
    enterpriseUsersCount: number;
    freeLicenseCount: number;
    hasLicenseCountEverUpdated: boolean;
    hostedAgentMinutesFreeCount: number;
    hostedAgentMinutesUsedCount: number;
    msdnUsersCount: number;
    purchasedHostedLicenseCount: number;
    purchasedLicenseCount: number;
    totalLicenseCount: number;
}

export interface TaskInputDefinition extends DistributedTaskCommonInterfaces.TaskInputDefinitionBase {
}

export interface TaskInstance extends TaskReference {
    alwaysRun: boolean;
    condition: string;
    continueOnError: boolean;
    displayName: string;
    enabled: boolean;
    instanceId: string;
    timeoutInMinutes: number;
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
    data: { [key: string] : string; };
    maxConcurrency: number;
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
    executionMode: string;
    executionTimeout: any;
    instanceId: string;
    name: string;
    tasks: TaskInstance[];
    variables: { [key: string] : string; };
}

export interface TaskOrchestrationOwner {
    _links: any;
    id: number;
    name: string;
}

export interface TaskOrchestrationPlan extends TaskOrchestrationPlanReference {
    environment: PlanEnvironment;
    finishTime: Date;
    implementation: TaskOrchestrationContainer;
    planGroup: string;
    requestedById: string;
    requestedForId: string;
    result: TaskResult;
    resultCode: string;
    startTime: Date;
    state: TaskOrchestrationPlanState;
    timeline: TimelineReference;
}

export interface TaskOrchestrationPlanReference {
    artifactLocation: string;
    artifactUri: string;
    definition: TaskOrchestrationOwner;
    owner: TaskOrchestrationOwner;
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

export interface TaskOrchestrationQueuedPlan {
    assignTime: Date;
    definition: TaskOrchestrationOwner;
    owner: TaskOrchestrationOwner;
    planGroup: string;
    planId: string;
    poolId: number;
    queuePosition: number;
    queueTime: Date;
    scopeIdentifier: string;
}

export interface TaskOrchestrationQueuedPlanGroup {
    definition: TaskOrchestrationOwner;
    owner: TaskOrchestrationOwner;
    planGroup: string;
    plans: TaskOrchestrationQueuedPlan[];
    project: ProjectReference;
    queuePosition: number;
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

export interface TaskSourceDefinition extends DistributedTaskCommonInterfaces.TaskSourceDefinitionBase {
}

export interface TaskVersion {
    isTest: boolean;
    major: number;
    minor: number;
    patch: number;
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
    task: TaskReference;
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

export var TypeInfo = {
    AadLoginPromptOption: {
        enumValues: {
            "noOption": 0,
            "login": 1,
            "selectAccount": 2,
            "freshLogin": 3,
        }
    },
    AadOauthTokenRequest: {
        fields: <any>null
    },
    AadOauthTokenResult: {
        fields: <any>null
    },
    AgentChangeEvent: {
        fields: <any>null
    },
    AgentJobRequestMessage: {
        fields: <any>null
    },
    AgentMigrationMessage: {
        fields: <any>null
    },
    AgentPoolEvent: {
        fields: <any>null
    },
    AgentQueueEvent: {
        fields: <any>null
    },
    AgentQueuesEvent: {
        fields: <any>null
    },
    AgentRefreshMessage: {
        fields: <any>null
    },
    AgentRequestEvent: {
        fields: <any>null
    },
    AuditAction: {
        enumValues: {
            "add": 1,
            "update": 2,
            "delete": 3,
        }
    },
    AuthorizationHeader: {
        fields: <any>null
    },
    AzureSpnOperationStatus: {
        fields: <any>null
    },
    AzureSubscription: {
        fields: <any>null
    },
    AzureSubscriptionQueryResult: {
        fields: <any>null
    },
    DataSource: {
        fields: <any>null
    },
    DataSourceBinding: {
        fields: <any>null
    },
    DataSourceDetails: {
        fields: <any>null
    },
    DependencyBinding: {
        fields: <any>null
    },
    DependencyData: {
        fields: <any>null
    },
    DependsOn: {
        fields: <any>null
    },
    DeploymentGroup: {
        fields: <any>null
    },
    DeploymentGroupActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16,
        }
    },
    DeploymentGroupExpands: {
        enumValues: {
            "none": 0,
            "machines": 2,
        }
    },
    DeploymentGroupReference: {
        fields: <any>null
    },
    DeploymentMachine: {
        fields: <any>null
    },
    DeploymentMachineGroup: {
        fields: <any>null
    },
    DeploymentMachineGroupReference: {
        fields: <any>null
    },
    DeploymentMachinesChangeEvent: {
        fields: <any>null
    },
    EndpointAuthorization: {
        fields: <any>null
    },
    EndpointUrl: {
        fields: <any>null
    },
    HelpLink: {
        fields: <any>null
    },
    InputValidationItem: {
        fields: <any>null
    },
    InputValidationRequest: {
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
    JobEventConfig: {
        fields: <any>null
    },
    JobEventsConfig: {
        fields: <any>null
    },
    JobOption: {
        fields: <any>null
    },
    JobRequestMessage: {
        fields: <any>null
    },
    JobStartedEvent: {
        fields: <any>null
    },
    MachineGroupActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16,
        }
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
    PackageMetadata: {
        fields: <any>null
    },
    PackageVersion: {
        fields: <any>null
    },
    PlanEnvironment: {
        fields: <any>null
    },
    PlanGroupStatusFilter: {
        enumValues: {
            "running": 1,
            "queued": 2,
            "all": 3,
        }
    },
    ProjectReference: {
        fields: <any>null
    },
    ResultTransformationDetails: {
        fields: <any>null
    },
    SecureFile: {
        fields: <any>null
    },
    SecureFileActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16,
        }
    },
    SendJobResponse: {
        fields: <any>null
    },
    ServerExecutionDefinition: {
        fields: <any>null
    },
    ServerJobRequestMessage: {
        fields: <any>null
    },
    ServiceEndpoint: {
        fields: <any>null
    },
    ServiceEndpointAuthenticationScheme: {
        fields: <any>null
    },
    ServiceEndpointDetails: {
        fields: <any>null
    },
    ServiceEndpointRequest: {
        fields: <any>null
    },
    ServiceEndpointRequestResult: {
        fields: <any>null
    },
    ServiceEndpointType: {
        fields: <any>null
    },
    TaskAgent: {
        fields: <any>null
    },
    TaskAgentAuthorization: {
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
    TaskAgentPoolActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16,
        }
    },
    TaskAgentPoolMaintenanceDefinition: {
        fields: <any>null
    },
    TaskAgentPoolMaintenanceJob: {
        fields: <any>null
    },
    TaskAgentPoolMaintenanceJobResult: {
        enumValues: {
            "succeeded": 1,
            "failed": 2,
            "canceled": 4,
        }
    },
    TaskAgentPoolMaintenanceJobStatus: {
        enumValues: {
            "inProgress": 1,
            "completed": 2,
            "cancelling": 4,
            "queued": 8,
        }
    },
    TaskAgentPoolMaintenanceOptions: {
        fields: <any>null
    },
    TaskAgentPoolMaintenanceRetentionPolicy: {
        fields: <any>null
    },
    TaskAgentPoolMaintenanceSchedule: {
        fields: <any>null
    },
    TaskAgentPoolMaintenanceScheduleDays: {
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
    TaskAgentPoolReference: {
        fields: <any>null
    },
    TaskAgentPoolType: {
        enumValues: {
            "automation": 1,
            "deployment": 2,
        }
    },
    TaskAgentPublicKey: {
        fields: <any>null
    },
    TaskAgentQueue: {
        fields: <any>null
    },
    TaskAgentQueueActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16,
        }
    },
    TaskAgentReference: {
        fields: <any>null
    },
    TaskAgentSession: {
        fields: <any>null
    },
    TaskAgentSessionKey: {
        fields: <any>null
    },
    TaskAgentStatus: {
        enumValues: {
            "offline": 1,
            "online": 2,
        }
    },
    TaskAgentUpdate: {
        fields: <any>null
    },
    TaskAttachment: {
        fields: <any>null
    },
    TaskChangeEvent: {
        fields: <any>null
    },
    TaskDefinition: {
        fields: <any>null
    },
    TaskDefinitionEndpoint: {
        fields: <any>null
    },
    TaskDefinitionReference: {
        fields: <any>null
    },
    TaskDefinitionStatus: {
        enumValues: {
            "preinstalled": 1,
            "receivedInstallOrUpdate": 2,
            "installed": 3,
            "receivedUninstall": 4,
            "uninstalled": 5,
            "requestedUpdate": 6,
            "updated": 7,
            "alreadyUpToDate": 8,
            "inlineUpdateReceived": 9,
        }
    },
    TaskExecution: {
        fields: <any>null
    },
    TaskGroup: {
        fields: <any>null
    },
    TaskGroupDefinition: {
        fields: <any>null
    },
    TaskGroupRevision: {
        fields: <any>null
    },
    TaskGroupStep: {
        fields: <any>null
    },
    TaskHubLicenseDetails: {
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
    TaskOrchestrationOwner: {
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
    TaskOrchestrationQueuedPlan: {
        fields: <any>null
    },
    TaskOrchestrationQueuedPlanGroup: {
        fields: <any>null
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
};

TypeInfo.AadOauthTokenRequest.fields = {
};

TypeInfo.AadOauthTokenResult.fields = {
};

TypeInfo.AgentChangeEvent.fields = {
    agent: {
        typeInfo: TypeInfo.TaskAgent
    },
    pool: {
        typeInfo: TypeInfo.TaskAgentPoolReference
    },
    timeStamp: {
        isDate: true,
    },
};

TypeInfo.AgentJobRequestMessage.fields = {
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

TypeInfo.AgentMigrationMessage.fields = {
};

TypeInfo.AgentPoolEvent.fields = {
    pool: {
        typeInfo: TypeInfo.TaskAgentPool
    },
};

TypeInfo.AgentQueueEvent.fields = {
    queue: {
        typeInfo: TypeInfo.TaskAgentQueue
    },
};

TypeInfo.AgentQueuesEvent.fields = {
    queues: {
        isArray: true,
        typeInfo: TypeInfo.TaskAgentQueue
    },
};

TypeInfo.AgentRefreshMessage.fields = {
};

TypeInfo.AgentRequestEvent.fields = {
    result: {
        enumType: TypeInfo.TaskResult
    },
    timeStamp: {
        isDate: true,
    },
};

TypeInfo.AuthorizationHeader.fields = {
};

TypeInfo.AzureSpnOperationStatus.fields = {
};

TypeInfo.AzureSubscription.fields = {
};

TypeInfo.AzureSubscriptionQueryResult.fields = {
    value: {
        isArray: true,
        typeInfo: TypeInfo.AzureSubscription
    },
};

TypeInfo.DataSource.fields = {
};

TypeInfo.DataSourceBinding.fields = {
};

TypeInfo.DataSourceDetails.fields = {
};

TypeInfo.DependencyBinding.fields = {
};

TypeInfo.DependencyData.fields = {
};

TypeInfo.DependsOn.fields = {
    map: {
        isArray: true,
        typeInfo: TypeInfo.DependencyBinding
    },
};

TypeInfo.DeploymentGroup.fields = {
    machines: {
        isArray: true,
        typeInfo: TypeInfo.DeploymentMachine
    },
    pool: {
        typeInfo: TypeInfo.TaskAgentPoolReference
    },
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
};

TypeInfo.DeploymentGroupReference.fields = {
    pool: {
        typeInfo: TypeInfo.TaskAgentPoolReference
    },
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
};

TypeInfo.DeploymentMachine.fields = {
    agent: {
        typeInfo: TypeInfo.TaskAgentReference
    },
};

TypeInfo.DeploymentMachineGroup.fields = {
    machines: {
        isArray: true,
        typeInfo: TypeInfo.DeploymentMachine
    },
    pool: {
        typeInfo: TypeInfo.TaskAgentPoolReference
    },
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
};

TypeInfo.DeploymentMachineGroupReference.fields = {
    pool: {
        typeInfo: TypeInfo.TaskAgentPoolReference
    },
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
};

TypeInfo.DeploymentMachinesChangeEvent.fields = {
    machineGroupReference: {
        typeInfo: TypeInfo.DeploymentGroupReference
    },
    machines: {
        isArray: true,
        typeInfo: TypeInfo.DeploymentMachine
    },
};

TypeInfo.EndpointAuthorization.fields = {
};

TypeInfo.EndpointUrl.fields = {
    dependsOn: {
        typeInfo: TypeInfo.DependsOn
    },
};

TypeInfo.HelpLink.fields = {
};

TypeInfo.InputValidationItem.fields = {
};

TypeInfo.InputValidationRequest.fields = {
    inputs: {
    },
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
    outputVariables: {
    },
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
    },
    secureFiles: {
        isArray: true,
        typeInfo: TypeInfo.SecureFile
    },
    systemConnection: {
        typeInfo: TypeInfo.ServiceEndpoint
    },
};

TypeInfo.JobEvent.fields = {
};

TypeInfo.JobEventConfig.fields = {
};

TypeInfo.JobEventsConfig.fields = {
    jobAssigned: {
        typeInfo: TypeInfo.JobEventConfig
    },
    jobCompleted: {
        typeInfo: TypeInfo.JobEventConfig
    },
    jobStarted: {
        typeInfo: TypeInfo.JobEventConfig
    },
};

TypeInfo.JobOption.fields = {
};

TypeInfo.JobRequestMessage.fields = {
    environment: {
        typeInfo: TypeInfo.JobEnvironment
    },
    plan: {
        typeInfo: TypeInfo.TaskOrchestrationPlanReference
    },
    timeline: {
        typeInfo: TypeInfo.TimelineReference
    },
};

TypeInfo.JobStartedEvent.fields = {
};

TypeInfo.MaskHint.fields = {
    type: {
        enumType: TypeInfo.MaskType
    },
};

TypeInfo.PackageMetadata.fields = {
    createdOn: {
        isDate: true,
    },
    version: {
        typeInfo: TypeInfo.PackageVersion
    },
};

TypeInfo.PackageVersion.fields = {
};

TypeInfo.PlanEnvironment.fields = {
    mask: {
        isArray: true,
        typeInfo: TypeInfo.MaskHint
    },
    options: {
    },
};

TypeInfo.ProjectReference.fields = {
};

TypeInfo.ResultTransformationDetails.fields = {
};

TypeInfo.SecureFile.fields = {
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

TypeInfo.SendJobResponse.fields = {
    events: {
        typeInfo: TypeInfo.JobEventsConfig
    },
};

TypeInfo.ServerExecutionDefinition.fields = {
    events: {
        typeInfo: TypeInfo.JobEventsConfig
    },
};

TypeInfo.ServerJobRequestMessage.fields = {
    environment: {
        typeInfo: TypeInfo.JobEnvironment
    },
    plan: {
        typeInfo: TypeInfo.TaskOrchestrationPlanReference
    },
    taskDefinition: {
        typeInfo: TypeInfo.TaskDefinition
    },
    taskInstance: {
        typeInfo: TypeInfo.TaskInstance
    },
    timeline: {
        typeInfo: TypeInfo.TimelineReference
    },
};

TypeInfo.ServiceEndpoint.fields = {
    administratorsGroup: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    authorization: {
        typeInfo: TypeInfo.EndpointAuthorization
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    readersGroup: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.ServiceEndpointAuthenticationScheme.fields = {
    authorizationHeaders: {
        isArray: true,
        typeInfo: TypeInfo.AuthorizationHeader
    },
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    },
};

TypeInfo.ServiceEndpointDetails.fields = {
    authorization: {
        typeInfo: TypeInfo.EndpointAuthorization
    },
};

TypeInfo.ServiceEndpointRequest.fields = {
    dataSourceDetails: {
        typeInfo: TypeInfo.DataSourceDetails
    },
    resultTransformationDetails: {
        typeInfo: TypeInfo.ResultTransformationDetails
    },
    serviceEndpointDetails: {
        typeInfo: TypeInfo.ServiceEndpointDetails
    },
};

TypeInfo.ServiceEndpointRequestResult.fields = {
};

TypeInfo.ServiceEndpointType.fields = {
    authenticationSchemes: {
        isArray: true,
        typeInfo: TypeInfo.ServiceEndpointAuthenticationScheme
    },
    dataSources: {
        isArray: true,
        typeInfo: TypeInfo.DataSource
    },
    dependencyData: {
        isArray: true,
        typeInfo: TypeInfo.DependencyData
    },
    endpointUrl: {
        typeInfo: TypeInfo.EndpointUrl
    },
    helpLink: {
        typeInfo: TypeInfo.HelpLink
    },
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    },
};

TypeInfo.TaskAgent.fields = {
    assignedRequest: {
        typeInfo: TypeInfo.TaskAgentJobRequest
    },
    authorization: {
        typeInfo: TypeInfo.TaskAgentAuthorization
    },
    createdOn: {
        isDate: true,
    },
    pendingUpdate: {
        typeInfo: TypeInfo.TaskAgentUpdate
    },
    status: {
        enumType: TypeInfo.TaskAgentStatus
    },
    statusChangedOn: {
        isDate: true,
    },
};

TypeInfo.TaskAgentAuthorization.fields = {
    publicKey: {
        typeInfo: TypeInfo.TaskAgentPublicKey
    },
};

TypeInfo.TaskAgentJobRequest.fields = {
    assignTime: {
        isDate: true,
    },
    definition: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
    },
    finishTime: {
        isDate: true,
    },
    lockedUntil: {
        isDate: true,
    },
    matchedAgents: {
        isArray: true,
        typeInfo: TypeInfo.TaskAgentReference
    },
    owner: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
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
    poolType: {
        enumType: TypeInfo.TaskAgentPoolType
    },
    serviceAccountsGroup: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.TaskAgentPoolMaintenanceDefinition.fields = {
    options: {
        typeInfo: TypeInfo.TaskAgentPoolMaintenanceOptions
    },
    pool: {
        typeInfo: TypeInfo.TaskAgentPoolReference
    },
    retentionPolicy: {
        typeInfo: TypeInfo.TaskAgentPoolMaintenanceRetentionPolicy
    },
    scheduleSetting: {
        typeInfo: TypeInfo.TaskAgentPoolMaintenanceSchedule
    },
};

TypeInfo.TaskAgentPoolMaintenanceJob.fields = {
    finishTime: {
        isDate: true,
    },
    pool: {
        typeInfo: TypeInfo.TaskAgentPoolReference
    },
    queueTime: {
        isDate: true,
    },
    requestedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    result: {
        enumType: TypeInfo.TaskAgentPoolMaintenanceJobResult
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.TaskAgentPoolMaintenanceJobStatus
    },
    targetAgents: {
        isArray: true,
        typeInfo: TypeInfo.TaskAgentReference
    },
};

TypeInfo.TaskAgentPoolMaintenanceOptions.fields = {
};

TypeInfo.TaskAgentPoolMaintenanceRetentionPolicy.fields = {
};

TypeInfo.TaskAgentPoolMaintenanceSchedule.fields = {
    daysToBuild: {
        enumType: TypeInfo.TaskAgentPoolMaintenanceScheduleDays
    },
};

TypeInfo.TaskAgentPoolReference.fields = {
    poolType: {
        enumType: TypeInfo.TaskAgentPoolType
    },
};

TypeInfo.TaskAgentPublicKey.fields = {
};

TypeInfo.TaskAgentQueue.fields = {
    pool: {
        typeInfo: TypeInfo.TaskAgentPoolReference
    },
};

TypeInfo.TaskAgentReference.fields = {
    status: {
        enumType: TypeInfo.TaskAgentStatus
    },
};

TypeInfo.TaskAgentSession.fields = {
    agent: {
        typeInfo: TypeInfo.TaskAgentReference
    },
    encryptionKey: {
        typeInfo: TypeInfo.TaskAgentSessionKey
    },
};

TypeInfo.TaskAgentSessionKey.fields = {
};

TypeInfo.TaskAgentUpdate.fields = {
    requestedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    requestTime: {
        isDate: true,
    },
    sourceVersion: {
        typeInfo: TypeInfo.PackageVersion
    },
    targetVersion: {
        typeInfo: TypeInfo.PackageVersion
    },
};

TypeInfo.TaskAttachment.fields = {
    createdOn: {
        isDate: true,
    },
    lastChangedOn: {
        isDate: true,
    },
};

TypeInfo.TaskChangeEvent.fields = {
};

TypeInfo.TaskDefinition.fields = {
    agentExecution: {
        typeInfo: TypeInfo.TaskExecution
    },
    dataSourceBindings: {
        isArray: true,
        typeInfo: TypeInfo.DataSourceBinding
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

TypeInfo.TaskDefinitionReference.fields = {
};

TypeInfo.TaskExecution.fields = {
    execTask: {
        typeInfo: TypeInfo.TaskReference
    },
};

TypeInfo.TaskGroup.fields = {
    agentExecution: {
        typeInfo: TypeInfo.TaskExecution
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdOn: {
        isDate: true,
    },
    dataSourceBindings: {
        isArray: true,
        typeInfo: TypeInfo.DataSourceBinding
    },
    groups: {
        isArray: true,
        typeInfo: TypeInfo.TaskGroupDefinition
    },
    inputs: {
        isArray: true,
        typeInfo: TypeInfo.TaskInputDefinition
    },
    modifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    modifiedOn: {
        isDate: true,
    },
    sourceDefinitions: {
        isArray: true,
        typeInfo: TypeInfo.TaskSourceDefinition
    },
    tasks: {
        isArray: true,
        typeInfo: TypeInfo.TaskGroupStep
    },
    version: {
        typeInfo: TypeInfo.TaskVersion
    },
};

TypeInfo.TaskGroupDefinition.fields = {
};

TypeInfo.TaskGroupRevision.fields = {
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

TypeInfo.TaskGroupStep.fields = {
    task: {
        typeInfo: TypeInfo.TaskDefinitionReference
    },
};

TypeInfo.TaskHubLicenseDetails.fields = {
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

TypeInfo.TaskOrchestrationOwner.fields = {
};

TypeInfo.TaskOrchestrationPlan.fields = {
    definition: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
    },
    environment: {
        typeInfo: TypeInfo.PlanEnvironment
    },
    finishTime: {
        isDate: true,
    },
    implementation: {
        typeInfo: TypeInfo.TaskOrchestrationContainer
    },
    owner: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
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
    definition: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
    },
    owner: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
    },
};

TypeInfo.TaskOrchestrationQueuedPlan.fields = {
    assignTime: {
        isDate: true,
    },
    definition: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
    },
    owner: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
    },
    queueTime: {
        isDate: true,
    },
};

TypeInfo.TaskOrchestrationQueuedPlanGroup.fields = {
    definition: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
    },
    owner: {
        typeInfo: TypeInfo.TaskOrchestrationOwner
    },
    plans: {
        isArray: true,
        typeInfo: TypeInfo.TaskOrchestrationQueuedPlan
    },
    project: {
        typeInfo: TypeInfo.ProjectReference
    },
};

TypeInfo.TaskPackageMetadata.fields = {
};

TypeInfo.TaskReference.fields = {
};

TypeInfo.TaskSourceDefinition.fields = {
};

TypeInfo.TaskVersion.fields = {
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
    task: {
        typeInfo: TypeInfo.TaskReference
    },
};

TypeInfo.TimelineReference.fields = {
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
