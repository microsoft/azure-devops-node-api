// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/// <reference path="./definitions/mocha.d.ts"/>

var assert = require("assert");
describe('Dummy test', function () {
    it('tests should run from gulp file', function () {
        assert.equal(true, true);
    })
})


//  //TODO: fix tests below to work with newest clients and structure

//import agentifm = require('../api/interfaces/TaskAgentInterfaces');
//import buildifm = require('../api/interfaces/BuildInterfaces');
//import agentm = require('../api/TaskAgentApi');
//import buildm = require('../api/BuildApi');
//import taskm = require('../api/TaskApi');
//import restm = require('../api/RestClient');
//import httpm = require('./httpclient');
//import assert = require('assert');
//import Q = require('q');
//import VSSInterfaces = require('./interfaces/common/VssInterfaces');
//import TfsInterfaces = require('./interfaces/common/TfsInterfaces');

//var httpClient = new httpm.HttpClient("TestUser")
//var restClient = new restm.RestClient("", httpClient);

////TODO: change to testserver before committing
//var TaskAgentApi = new agentm.TaskAgentApi("https://tedward.tfsbuildhost8.tfsallin.net/", []);

//it("TaskAgent tests", function () {
//    //TaskAgentApi.connect();
//    assert.notEqual(TaskAgentApi, null, "create an agent api");
//    var agent = new DummyTaskAgent(1, "myagent", "1.0");

//    //#createAgent
//    var testagent;
//    var createAgentOnResult = function (err: any, statusCode: number, retagent: agentifm.TaskAgent) {
//        testagent = <DummyTaskAgent>retagent;
//    };
//    TaskAgentApi.createAgent(agent, 42, createAgentOnResult);

//    //normally the following tests would have to be in onresult, but we're not actually making async calls
//    assert.equal(testagent.id, 1, "createAgent agent remains the same - id test");
//    assert.equal(testagent.name, "myagent", "createAgent agent remains the same - name test");
//    assert.equal(testagent.version, "1.0", "createAgent agent remains the same - version test");
//    assert.equal(testagent.verb, "POST", "createAgent calls correct Http Method -- POST");
//    assert.equal(testagent.relativeUrl, "_apis/distributedtask/pools/42/agents", "createAgent route template formats correctly and is sent correctly");

//    //#deleteAgent
//    var retStatusCode;
//    var deleteAgentOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.deleteAgent(42, 1, deleteAgentOnResult);

//    assert.equal(retStatusCode, 200, "deleteAgent went through");

//    var deleteAgentRouteValues = {
//        poolId: 42,
//        agentId: 1,
//        area: "distributedtask",
//        resource: "agents"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/pools/{poolId}/{resource}/{agentId}", deleteAgentRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42/agents/1", "deleteAgent route template formats correctly");
//}

//export class DummyTaskAgent implements agentifm.TaskAgent {
//	id: number;
//	name: string;
//    version: string;
//    /**
//    * Gets the date on which this agent was created.
//    */
//    createdOn: Date;
//    /**
//     * Gets or sets a value indicating whether or not this agent should be enabled for job execution.
//     */
//    enabled: boolean;
//    /**
//     * Gets or sets the maximum job parallelism allowed on this host.
//     */
//    maxParallelism: number;
//    properties: any;
//    /**
//     * Gets the current connectivity status of the agent.
//     */
//    status: agentifm.TaskAgentStatus;
//    /**
//     * Gets the date on which the last connectivity status change occurred.
//     */
//    statusChangedOn: Date;
//    systemCapabilities: { [key: string]: string; };
//    userCapabilities: { [key: string]: string; };

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;
	
//	constructor(id: number, name: string, version: string) {
//		this.id = id;
//		this.name = name;
//		this.version = version;
//	}
//}

//export class DummyAgentPoolEvent implements agentifm.AgentPoolEvent {
//    eventType: string;
//    pool: DummyTaskAgentPool;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyAgentRefreshMessage implements agentifm.AgentRefreshMessage {
//    agentId: number;
//    timeout: any;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyEndpointAuthorization implements agentifm.EndpointAuthorization {
//    parameters: { [key: string] : string; };
//    scheme: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyIssue implements agentifm.Issue {
//    category: string;
//    data: { [key: string] : string; };
//    message: string;
//    type: agentifm.IssueType;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyJobAssignedEvent implements agentifm.JobAssignedEvent {
//    jobId: string;
//    name: string;
//    request: DummyTaskAgentJobRequest;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyJobCancelMessage implements agentifm.JobCancelMessage {
//    jobId: string;
//    timeout: any;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyJobCompletedEvent implements agentifm.JobCompletedEvent {
//    jobId: string;
//    name: string;
//    result: agentifm.TaskResult;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyJobEnvironment implements agentifm.JobEnvironment {
//    endpoints: DummyServiceEndpoint[];
//    mask: DummyMaskHint[];
//    options: { [key: number] : DummyJobOption; };
//    /**
//     * Gets or sets the endpoint used for communicating back to the calling service.
//     */
//    systemConnection: DummyServiceEndpoint;
//    variables: { [key: string] : string; };

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyJobEvent implements agentifm.JobEvent {
//    jobId: string;
//    name: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyJobOption implements agentifm.JobOption {
//    data: { [key: string] : string; };
//    /**
//     * Gets the id of the option.
//     */
//    id: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyJobRequestMessage implements agentifm.JobRequestMessage {
//    environment: DummyJobEnvironment;
//    jobId: string;
//    jobName: string;
//    lockedUntil: Date;
//    lockToken: string;
//    plan: DummyTaskOrchestrationPlanReference;
//    requestId: number;
//    tasks: DummyTaskInstance[];
//    timeline: DummyTimelineReference;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyMaskHint implements agentifm.MaskHint {
//    type: agentifm.MaskType;
//    value: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyPlanEnvironment implements agentifm.PlanEnvironment {
//    mask: DummyMaskHint[];
//    options: { [key: number] : DummyJobOption; };
//    variables: { [key: string] : string; };

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyServiceEndpoint implements agentifm.ServiceEndpoint {
//    /**
//     * Gets or sets the authorization data for talking to the endpoint.
//     */
//    authorization: DummyEndpointAuthorization;
//    /**
//     * The Gets or sets Identity reference for the user who created the Service endpoint
//     */
//    createdBy: VSSInterfaces.IdentityRef;
//    data: { [key: string] : string; };
//    /**
//     * Gets or Sets description of endpoint
//     */
//    description: string;
//    /**
//     * Gets or sets the identifier of this endpoint.
//     */
//    id: string;
//    /**
//     * Gets or sets the friendly name of the endpoint.
//     */
//    name: string;
//    /**
//     * Gets or sets the type of the endpoint.
//     */
//    type: string;
//    /**
//     * Gets or sets the url of the endpoint.
//     */
//    url: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskAgentJobRequest implements agentifm.TaskAgentJobRequest {
//    assignTime: Date;
//    demands: any[];
//    finishTime: Date;
//    hostId: string;
//    jobId: string;
//    lockedUntil: Date;
//    planId: string;
//    planType: string;
//    queueTime: Date;
//    receiveTime: Date;
//    requestId: number;
//    reservedAgent: DummyTaskAgentReference;
//    result: agentifm.TaskResult;
//    scopeId: string;
//    serviceOwner: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskAgentMessage implements agentifm.TaskAgentMessage {
//    body: string;
//    messageId: number;
//    messageType: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskAgentPool implements agentifm.TaskAgentPool {
//    /**
//     * Gets the administrators group for this agent pool.
//     */
//    administratorsGroup: VSSInterfaces.IdentityRef;
//    /**
//     * Gets or sets a value indicating whether or not a queue should be automatically provisioned for each project collection or not.
//     */
//    autoProvision: boolean;
//    /**
//     * Gets the identity who created this pool. The creator of the pool is automatically added into the administrators group for the pool on creation.
//     */
//    createdBy: VSSInterfaces.IdentityRef;
//    /**
//     * Gets the date/time of the pool creation.
//     */
//    createdOn: Date;
//    /**
//     * Gets the scope identifier for groups/roles which are owned by this pool.
//     */
//    groupScopeId: string;
//    id: number;
//    /**
//     * Gets or sets a value indicating whether or not this pool is managed by the service.
//     */
//    isHosted: boolean;
//    name: string;
//    properties: any;
//    scope: string;
//    /**
//     * Gets the service accounts group for this agent pool.
//     */
//    serviceAccountsGroup: VSSInterfaces.IdentityRef;
//    /**
//     * Gets the current size of the pool.
//     */
//    size: number;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskAgentPoolReference implements agentifm.TaskAgentPoolReference {
//    id: number;
//    name: string;
//    scope: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskAgentReference implements agentifm.TaskAgentReference {
//    /**
//     * Gets the identifier of the agent.
//     */
//    id: number;
//    /**
//     * Gets the name of the agent.
//     */
//    name: string;
//    /**
//     * Gets the version of the agent.
//     */
//    version: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskAgentSession implements agentifm.TaskAgentSession {
//    agent: DummyTaskAgentReference;
//    ownerName: string;
//    sessionId: string;
//    systemCapabilities: { [key: string] : string; };

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskDefinition implements agentifm.TaskDefinition {
//    agentExecution: DummyTaskExecution;
//    author: string;
//    category: string;
//    contentsUploaded: boolean;
//    demands: any[];
//    description: string;
//    friendlyName: string;
//    groups: DummyTaskGroupDefinition[];
//    helpMarkDown: string;
//    hostType: string;
//    iconUrl: string;
//    id: string;
//    inputs: DummyTaskInputDefinition[];
//    instanceNameFormat: string;
//    minimumAgentVersion: string;
//    name: string;
//    packageLocation: string;
//    packageType: string;
//    serverOwned: boolean;
//    sourceDefinitions: DummyTaskSourceDefinition[];
//    sourceLocation: string;
//    version: DummyTaskVersion;
//    visibility: string[];

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskDefinitionEndpoint implements agentifm.TaskDefinitionEndpoint {
//    /**
//     * An ID that identifies a service connection to be used for authenticating endpoint requests.
//     */
//    connectionId: string;
//    /**
//     * The scope as understood by Connected Services. Essentialy, a project-id for now.
//     */
//    scope: string;
//    /**
//     * An XPath/Json based selector to filter response returned by fetching the endpoint Url. An XPath based selector must be prefixed with the string "xpath:". A Json based selector must be prefixed with "json:".  The following selector defines an XPath for extracting nodes named 'ServiceName'.  endpoint.Selector = "xpath://ServiceName";
//     */
//    selector: string;
//    /**
//     * TaskId that this endpoint belongs to.
//     */
//    taskId: string;
//    /**
//     * URL to GET.
//     */
//    url: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskExecution implements agentifm.TaskExecution {
//    /**
//     * The utility task to run.  Specifying this means that this task definition is simply a meta task to call another task. This is useful for tasks that call utility tasks like powershell and commandline
//     */
//    execTask: DummyTaskReference;
//    /**
//     * If a task is going to run code, then this provides the type/script etc... information by platform. For example, it might look like. net45: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } net20: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } java: { jar: "powershelltask.tasks.automation.teamfoundation.microsoft.com", } node: { script: "powershellhost.js", }
//     */
//    platformInstructions: { [key: string] : { [key: string] : string; }; };

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskGroupDefinition implements agentifm.TaskGroupDefinition {
//    displayName: string;
//    isExpanded: boolean;
//    name: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskInputDefinition implements agentifm.TaskInputDefinition {
//    defaultValue: string;
//    groupName: string;
//    helpMarkDown: string;
//    label: string;
//    name: string;
//    options: { [key: string] : string; };
//    properties: { [key: string] : string; };
//    required: boolean;
//    type: string;
//    visibleRule: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskInstance implements agentifm.TaskInstance {
//    alwaysRun: boolean;
//    continueOnError: boolean;
//    displayName: string;
//    enabled: boolean;
//    id: string;
//    inputs: { [key: string] : string; };
//    instanceId: string;
//    name: string;
//    version: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskLog implements agentifm.TaskLog {
//    createdOn: Date;
//    id: number;
//    indexLocation: string;
//    lastChangedOn: Date;
//    lineCount: number;
//    location: string;
//    path: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskLogReference implements agentifm.TaskLogReference {
//    id: number;
//    location: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskOrchestrationContainer implements agentifm.TaskOrchestrationContainer {
//    children: DummyTaskOrchestrationItem[];
//    continueOnError: boolean;
//    itemType: agentifm.TaskOrchestrationItemType;
//    parallel: boolean;
//    rollback: DummyTaskOrchestrationContainer;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskOrchestrationItem implements agentifm.TaskOrchestrationItem {
//    itemType: agentifm.TaskOrchestrationItemType;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskOrchestrationJob implements agentifm.TaskOrchestrationJob {
//    demands: any[];
//    executeAs: VSSInterfaces.IdentityRef;
//    executionTimeout: any;
//    instanceId: string;
//    itemType: agentifm.TaskOrchestrationItemType;
//    name: string;
//    tasks: DummyTaskInstance[];
//    variables: { [key: string] : string; };

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskOrchestrationPlan implements agentifm.TaskOrchestrationPlan {
//    artifactLocation: string;
//    artifactUri: string;
//    environment: DummyPlanEnvironment;
//    finishTime: Date;
//    implementation: DummyTaskOrchestrationContainer;
//    planId: string;
//    planType: string;
//    result: agentifm.TaskResult;
//    resultCode: string;
//    scopeIdentifier: string;
//    startTime: Date;
//    state: agentifm.TaskOrchestrationPlanState;
//    timeline: DummyTimelineReference;
//    version: number;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskOrchestrationPlanReference implements agentifm.TaskOrchestrationPlanReference {
//    artifactLocation: string;
//    artifactUri: string;
//    planId: string;
//    planType: string;
//    scopeIdentifier: string;
//    version: number;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskPackageMetadata implements agentifm.TaskPackageMetadata {
//    /**
//     * Gets the name of the package.
//     */
//    type: string;
//    /**
//     * Gets the url of the package.
//     */
//    url: string;
//    /**
//     * Gets the version of the package.
//     */
//    version: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskReference implements agentifm.TaskReference {
//    id: string;
//    inputs: { [key: string] : string; };
//    name: string;
//    version: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskSourceDefinition implements agentifm.TaskSourceDefinition {
//    authKey: string;
//    endpoint: string;
//    selector: string;
//    target: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTaskVersion implements agentifm.TaskVersion {
//    isTest: boolean;
//    major: number;
//    minor: number;
//    patch: number;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTeamProjectReference implements agentifm.TeamProjectReference {
//    /**
//     * Project abbreviation.
//     */
//    abbreviation: string;
//    /**
//     * The project's description (if any).
//     */
//    description: string;
//    /**
//     * Project identifier.
//     */
//    id: string;
//    /**
//     * Project name.
//     */
//    name: string;
//    /**
//     * Project state.
//     */
//    state: any;
//    /**
//     * Url to the full version of the object.
//     */
//    url: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTimeline implements agentifm.Timeline {
//    changeId: number;
//    id: string;
//    lastChangedBy: string;
//    lastChangedOn: Date;
//    location: string;
//    records: DummyTimelineRecord[];

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTimelineRecord implements agentifm.TimelineRecord {
//    changeId: number;
//    currentOperation: string;
//    details: DummyTimelineReference;
//    errorCount: number;
//    finishTime: Date;
//    id: string;
//    issues: DummyIssue[];
//    lastModified: Date;
//    location: string;
//    log: DummyTaskLogReference;
//    name: string;
//    order: number;
//    parentId: string;
//    percentComplete: number;
//    result: agentifm.TaskResult;
//    resultCode: string;
//    startTime: Date;
//    state: agentifm.TimelineRecordState;
//    type: string;
//    warningCount: number;
//    workerName: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyTimelineReference implements agentifm.TimelineReference {
//    changeId: number;
//    id: string;
//    location: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyWebApiConnectedService implements agentifm.WebApiConnectedService {
//    /**
//     * The user who did the OAuth authentication to created this service
//     */
//    authenticatedBy: VSSInterfaces.IdentityRef;
//    /**
//     * Extra description on the service.
//     */
//    description: string;
//    /**
//     * Friendly Name of service connection
//     */
//    friendlyName: string;
//    /**
//     * Id/Name of the connection service. For Ex: Subscription Id for Azure Connection
//     */
//    id: string;
//    /**
//     * The kind of service.
//     */
//    kind: string;
//    /**
//     * The project associated with this service
//     */
//    project: DummyTeamProjectReference;
//    /**
//     * Optional uri to connect directly to the service such as https://windows.azure.com
//     */
//    serviceUri: string;
//    url: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyWebApiConnectedServiceDetails implements agentifm.WebApiConnectedServiceDetails {
//    /**
//     * Meta data for service connection
//     */
//    connectedServiceMetaData: DummyWebApiConnectedService;
//    /**
//     * Credential info
//     */
//    credentialsXml: string;
//    /**
//     * Optional uri to connect directly to the service such as https://windows.azure.com
//     */
//    endPoint: string;
//    id: string;
//    url: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyWebApiConnectedServiceRef implements agentifm.WebApiConnectedServiceRef {
//    id: string;
//    url: string;

//	//stuff below this are unrelated fields bundled in to test what is being sent to the server
//	verb: string;
//	relativeUrl: string;

//	constructor() {

//	}
//}

//export class DummyAgentPoolQueue implements buildifm.AgentPoolQueue {
//    _links: any;
//    /**
//     * Id of the resource
//     */
//    id: number;
//    /**
//     * Name of the linked resource (definition name, controller name, etc.)
//     */
//    name: string;
//    /**
//     * The pool used by this queue.
//     */
//    pool: DummyTaskAgentPoolReference;
//    /**
//     * Full http link to the resource
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyArtifactResource implements buildifm.ArtifactResource {
//    /**
//     * The type-specific resource data. For example, "#/10002/5/drop", "$/drops/5", "\\myshare\myfolder\mydrops\5"
//     */
//    data: string;
//    /**
//     * Link to the resource. This might include things like query parameters to download as a zip file
//     */
//    downloadUrl: string;
//    /**
//     * The type of the resource: File container, version control folder, UNC path, etc.
//     */
//    type: string;
//    /**
//     * Link to the resource
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuild implements buildifm.Build {
//    _links: any;
//    /**
//     * Build number/name of the build
//     */
//    buildNumber: string;
//    /**
//     * The build controller. This should only be set if the definition type is Xaml.
//     */
//    controller: DummyBuildController;
//    /**
//     * The definition associated with the build
//     */
//    definition: DummyDefinitionReference;
//    del
//    /**
//     * Demands
//     */
//    demands: any[];
//    /**
//     * Time that the build was completed
//     */
//    finishTime: Date;
//    /**
//     * Id of the build
//     */
//    id: number;
//    keepForever: boolean;
//    /**
//     * Process or person that last changed the build
//     */
//    lastChangedBy: VSSInterfaces.IdentityRef;
//    /**
//     * Date the build was last changed
//     */
//    lastChangedDate: Date;
//    /**
//     * Log location of the build
//     */
//    logs: DummyBuildLogReference;
//    /**
//     * Orchestration plan for the build
//     */
//    orchestrationPlan: DummyTaskOrchestrationPlanReference;
//    /**
//     * Parameters for the build
//     */
//    parameters: string;
//    /**
//     * The build's priority
//     */
//    priority: buildifm.QueuePriority;
//    /**
//     * The team project
//     */
//    project: TfsInterfaces.TeamProjectReference;
//    properties: any;
//    /**
//     * Quality of the xaml build (good, bad, etc.)
//     */
//    quality: string;
//    /**
//     * The queue. This should only be set if the definition type is Build.
//     */
//    queue: DummyAgentPoolQueue;
//    /**
//     * Queue option of the build.
//     */
//    queueOptions: buildifm.QueueOptions;
//    /**
//     * The current position of the build in the queue
//     */
//    queuePosition: number;
//    /**
//     * Time that the build was queued
//     */
//    queueTime: Date;
//    /**
//     * Reason that the build was created
//     */
//    reason: buildifm.BuildReason;
//    /**
//     * The repository
//     */
//    repository: DummyBuildRepository;
//    /**
//     * The identity that queued the build
//     */
//    requestedBy: VSSInterfaces.IdentityRef;
//    /**
//     * The identity on whose behalf the build was queued
//     */
//    requestedFor: VSSInterfaces.IdentityRef;
//    /**
//     * The build result
//     */
//    result: buildifm.BuildResult;
//    /**
//     * Source branch
//     */
//    sourceBranch: string;
//    /**
//     * Source version
//     */
//    sourceVersion: string;
//    /**
//     * Time that the build was started
//     */
//    startTime: Date;
//    /**
//     * Status of the build
//     */
//    status: buildifm.BuildStatus;
//    tags: string[];
//    /**
//     * Uri of the build
//     */
//    uri: string;
//    /**
//     * REST url of the build
//     */
//    url: string;
//    validationResults: DummyBuildRequestValidationResult[];

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildAgent implements buildifm.BuildAgent {
//    buildDirectory: string;
//    controller: DummyShallowReference;
//    createdDate: Date;
//    description: string;
//    enabled: boolean;
//    id: number;
//    messageQueueUrl: string;
//    name: string;
//    reservedForBuild: string;
//    server: DummyShallowReference;
//    status: buildifm.AgentStatus;
//    statusMessage: string;
//    updatedDate: Date;
//    uri: string;
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildArtifact implements buildifm.BuildArtifact {
//    /**
//     * The artifact id
//     */
//    id: number;
//    /**
//     * The name of the artifact
//     */
//    name: string;
//    /**
//     * The actual resource
//     */
//    resource: DummyArtifactResource;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildCompletedEvent implements buildifm.BuildCompletedEvent {
//    build: DummyBuild;
//    buildId: number;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildController implements buildifm.BuildController {
//    _links: any;
//    /**
//     * The date the controller was created.
//     */
//    createdDate: Date;
//    /**
//     * The description of the controller.
//     */
//    description: string;
//    /**
//     * Indicates whether the controller is enabled.
//     */
//    enabled: boolean;
//    /**
//     * Id of the resource
//     */
//    id: number;
//    /**
//     * Name of the linked resource (definition name, controller name, etc.)
//     */
//    name: string;
//    /**
//     * The status of the controller.
//     */
//    status: buildifm.ControllerStatus;
//    /**
//     * The date the controller was last updated.
//     */
//    updatedDate: Date;
//    /**
//     * The controller's URI.
//     */
//    uri: string;
//    /**
//     * Full http link to the resource
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDefinition implements buildifm.BuildDefinition {
//    _links: any;
//    /**
//     * The author of the definition.
//     */
//    authoredBy: VSSInterfaces.IdentityRef;
//    /**
//     * Indicates whether badges are enabled for this definition
//     */
//    badgeEnabled: boolean;
//    build: DummyBuildDefinitionStep[];
//    /**
//     * The build number format
//     */
//    buildNumberFormat: string;
//    /**
//     * The comment entered when saving the definition
//     */
//    comment: string;
//    /**
//     * The date the definition was created
//     */
//    createdDate: Date;
//    demands: any[];
//    /**
//     * The description
//     */
//    description: string;
//    /**
//     * If this is a draft definition, it might have a parent
//     */
//    draftOf: DummyDefinitionReference;
//    /**
//     * The drop location for the definition
//     */
//    dropLocation: string;
//    /**
//     * Id of the resource
//     */
//    id: number;
//    /**
//     * Gets or sets the job authorization scope for builds which are queued against this definition
//     */
//    jobAuthorizationScope: buildifm.BuildAuthorizationScope;
//    /**
//     * Gets or sets the job execution timeout in minutes for builds which are queued against this definition
//     */
//    jobTimeoutInMinutes: number;
//    /**
//     * Name of the linked resource (definition name, controller name, etc.)
//     */
//    name: string;
//    options: DummyBuildOption[];
//    /**
//     * The project.
//     */
//    project: TfsInterfaces.TeamProjectReference;
//    properties: any;
//    /**
//     * The quality of the definition document (draft, etc.)
//     */
//    quality: buildifm.DefinitionQuality;
//    /**
//     * The default queue which should be used for requests.
//     */
//    queue: DummyAgentPoolQueue;
//    /**
//     * If builds can be queued from this definition
//     */
//    queueStatus: buildifm.DefinitionQueueStatus;
//    /**
//     * The repository
//     */
//    repository: DummyBuildRepository;
//    retentionRules: DummyRetentionPolicy[];
//    /**
//     * The definition revision number.
//     */
//    revision: number;
//    triggers: DummyBuildTrigger[];
//    /**
//     * The type of the definition.
//     */
//    type: buildifm.DefinitionType;
//    /**
//     * The Uri of the definition
//     */
//    uri: string;
//    /**
//     * Full http link to the resource
//     */
//    url: string;
//    variables: { [key: string]: DummyBuildDefinitionVariable; };

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDefinitionChangedEvent implements buildifm.BuildDefinitionChangedEvent {
//    changeType: buildifm.AuditAction;
//    definition: DummyBuildDefinition;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDefinitionChangingEvent implements buildifm.BuildDefinitionChangingEvent {
//    changeType: buildifm.AuditAction;
//    newDefinition: DummyBuildDefinition;
//    originalDefinition: DummyBuildDefinition;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDefinitionReference implements buildifm.BuildDefinitionReference {
//    /**
//     * The author of the definition.
//     */
//    authoredBy: VSSInterfaces.IdentityRef;
//    /**
//     * If this is a draft definition, it might have a parent
//     */
//    draftOf: DummyDefinitionReference;
//    /**
//     * Id of the resource
//     */
//    id: number;
//    /**
//     * Name of the linked resource (definition name, controller name, etc.)
//     */
//    name: string;
//    /**
//     * The project.
//     */
//    project: TfsInterfaces.TeamProjectReference;
//    /**
//     * The quality of the definition document (draft, etc.)
//     */
//    quality: buildifm.DefinitionQuality;
//    /**
//     * The default queue which should be used for requests.
//     */
//    queue: DummyAgentPoolQueue;
//    /**
//     * If builds can be queued from this definition
//     */
//    queueStatus: buildifm.DefinitionQueueStatus;
//    /**
//     * The definition revision number.
//     */
//    revision: number;
//    /**
//     * The type of the definition.
//     */
//    type: buildifm.DefinitionType;
//    /**
//     * The Uri of the definition
//     */
//    uri: string;
//    /**
//     * Full http link to the resource
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDefinitionRevision implements buildifm.BuildDefinitionRevision {
//    changedBy: VSSInterfaces.IdentityRef;
//    changedDate: Date;
//    changeType: buildifm.AuditAction;
//    comment: string;
//    definitionUrl: string;
//    name: string;
//    revision: number;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDefinitionSourceProvider implements buildifm.BuildDefinitionSourceProvider {
//    /**
//     * Uri of the associated definition
//     */
//    definitionUri: string;
//    /**
//     * fields associated with this build definition
//     */
//    fields: { [key: string]: string; };
//    /**
//     * Id of this source provider
//     */
//    id: number;
//    /**
//     * The lst time this source provider was modified
//     */
//    lastModified: Date;
//    /**
//     * Name of the source provider
//     */
//    name: string;
//    /**
//     * Which trigger types are supported by this definition source provider
//     */
//    supportedTriggerTypes: buildifm.DefinitionTriggerType;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDefinitionStep implements buildifm.BuildDefinitionStep {
//    alwaysRun: boolean;
//    continueOnError: boolean;
//    displayName: string;
//    enabled: boolean;
//    inputs: { [key: string]: string; };
//    task: DummyTaskDefinitionReference;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDefinitionTemplate implements buildifm.BuildDefinitionTemplate {
//    canDelete: boolean;
//    category: string;
//    description: string;
//    iconTaskId: string;
//    id: string;
//    name: string;
//    template: DummyBuildDefinition;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDefinitionVariable implements buildifm.BuildDefinitionVariable {
//    allowOverride: boolean;
//    isSecret: boolean;
//    value: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildDeployment implements buildifm.BuildDeployment {
//    deployment: DummyBuildSummary;
//    sourceBuild: DummyShallowReference;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildLog implements buildifm.BuildLog {
//    /**
//     * The date the log was created.
//     */
//    createdOn: Date;
//    /**
//     * The id of the log.
//     */
//    id: number;
//    /**
//     * The date the log was last changed.
//     */
//    lastChangedOn: Date;
//    /**
//     * The number of lines in the log.
//     */
//    lineCount: number;
//    /**
//     * The type of the log location.
//     */
//    type: string;
//    /**
//     * Full link to the log resource.
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildLogReference implements buildifm.BuildLogReference {
//    /**
//     * The id of the log.
//     */
//    id: number;
//    /**
//     * The type of the log location.
//     */
//    type: string;
//    /**
//     * Full link to the log resource.
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildOption implements buildifm.BuildOption {
//    definition: DummyBuildOptionDefinitionReference;
//    enabled: boolean;
//    inputs: { [key: string]: string; };

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildOptionDefinition implements buildifm.BuildOptionDefinition {
//    description: string;
//    groups: DummyBuildOptionGroupDefinition[];
//    id: string;
//    inputs: DummyBuildOptionInputDefinition[];
//    name: string;
//    ordinal: number;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildOptionDefinitionReference implements buildifm.BuildOptionDefinitionReference {
//    id: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildOptionGroupDefinition implements buildifm.BuildOptionGroupDefinition {
//    displayName: string;
//    isExpanded: boolean;
//    name: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildOptionInputDefinition implements buildifm.BuildOptionInputDefinition {
//    defaultValue: string;
//    groupName: string;
//    help: { [key: string]: string; };
//    label: string;
//    name: string;
//    options: { [key: string]: string; };
//    required: boolean;
//    type: buildifm.BuildOptionInputType;
//    visibleRule: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildProcessTemplate implements buildifm.BuildProcessTemplate {
//    description: string;
//    fileExists: boolean;
//    id: number;
//    parameters: string;
//    serverPath: string;
//    supportedReasons: buildifm.BuildReason;
//    teamProject: string;
//    templateType: buildifm.ProcessTemplateType;
//    url: string;
//    version: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildRepository implements buildifm.BuildRepository {
//    checkoutSubmodules: boolean;
//    /**
//     * Indicates whether to clean the target folder when getting code from the repository. This is a String so that it can reference variables.
//     */
//    clean: string;
//    /**
//     * Gets or sets the name of the default branch.
//     */
//    defaultBranch: string;
//    id: string;
//    /**
//     * Gets or sets the friendly name of the repository.
//     */
//    name: string;
//    properties: { [key: string]: string; };
//    /**
//     * Gets or sets the root folder.
//     */
//    rootFolder: string;
//    /**
//     * Gets or sets the type of the repository.
//     */
//    type: string;
//    /**
//     * Gets or sets the url of the repository.
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildRequestValidationResult implements buildifm.BuildRequestValidationResult {
//    message: string;
//    result: buildifm.ValidationResult;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildsDeletedEvent implements buildifm.BuildsDeletedEvent {

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildServer implements buildifm.BuildServer {
//    agents: DummyShallowReference[];
//    controller: DummyShallowReference;
//    id: number;
//    isVirtual: boolean;
//    messageQueueUrl: string;
//    name: string;
//    requireClientCertificates: boolean;
//    status: buildifm.ServiceHostStatus;
//    statusChangedDate: Date;
//    uri: string;
//    url: string;
//    version: number;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildSettings implements buildifm.BuildSettings {
//    defaultRetentionPolicy: DummyRetentionPolicy;
//    maximumRetentionPolicy: DummyRetentionPolicy;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildStartedEvent implements buildifm.BuildStartedEvent {
//    build: DummyBuild;
//    buildId: number;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildSummary implements buildifm.BuildSummary {
//    build: DummyShallowReference;
//    finishTime: Date;
//    keepForever: boolean;
//    quality: string;
//    reason: buildifm.BuildReason;
//    requestedFor: VSSInterfaces.IdentityRef;
//    startTime: Date;
//    status: buildifm.BuildStatus;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildTrigger implements buildifm.BuildTrigger {
//    triggerType: buildifm.DefinitionTriggerType;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildUpdatedEvent implements buildifm.BuildUpdatedEvent {
//    build: DummyBuild;
//    buildId: number;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildWorkspace implements buildifm.BuildWorkspace {
//    mappings: DummyMappingDetails[];

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyChange implements buildifm.Change {
//    /**
//     * The author of the change.
//     */
//    author: VSSInterfaces.IdentityRef;
//    /**
//     * The location of a user-friendly representation of the resource.
//     */
//    displayUri: string;
//    /**
//     * Something that identifies the change. For a commit, this would be the SHA1. For a TFVC changeset, this would be the changeset id.
//     */
//    id: string;
//    /**
//     * The location of the full representation of the resource.
//     */
//    location: string;
//    /**
//     * A description of the change. This might be a commit message or changeset description.
//     */
//    message: string;
//    /**
//     * Indicates whether the message was truncated
//     */
//    messageTruncated: boolean;
//    /**
//     * A timestamp for the change.
//     */
//    timestamp: Date;
//    /**
//     * The type of change. "commit", "changeset", etc.
//     */
//    type: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyConsoleLogEvent implements buildifm.ConsoleLogEvent {
//    buildId: number;
//    lines: string[];
//    timelineId: string;
//    timelineRecordId: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyContinuousDeploymentDefinition implements buildifm.ContinuousDeploymentDefinition {
//    /**
//     * The connected service associated with the continuous deployment
//     */
//    connectedService: TfsInterfaces.WebApiConnectedServiceRef;
//    /**
//     * The definition associated with the continuous deployment
//     */
//    definition: DummyShallowReference;
//    gitBranch: string;
//    hostedServiceName: string;
//    project: TfsInterfaces.TeamProjectReference;
//    repositoryId: string;
//    storageAccountName: string;
//    subscriptionId: string;
//    website: string;
//    webspace: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyContinuousIntegrationTrigger implements buildifm.ContinuousIntegrationTrigger {
//    batchChanges: boolean;
//    branchFilters: string[];
//    triggerType: buildifm.DefinitionTriggerType;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyDefinitionReference implements buildifm.DefinitionReference {
//    /**
//     * Id of the resource
//     */
//    id: number;
//    /**
//     * Name of the linked resource (definition name, controller name, etc.)
//     */
//    name: string;
//    /**
//     * The project.
//     */
//    project: TfsInterfaces.TeamProjectReference;
//    /**
//     * If builds can be queued from this definition
//     */
//    queueStatus: buildifm.DefinitionQueueStatus;
//    /**
//     * The definition revision number.
//     */
//    revision: number;
//    /**
//     * The type of the definition.
//     */
//    type: buildifm.DefinitionType;
//    /**
//     * The Uri of the definition
//     */
//    uri: string;
//    /**
//     * Full http link to the resource
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyDeployment implements buildifm.Deployment {
//    type: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyDeploymentBuild implements buildifm.DeploymentBuild {
//    buildId: number;
//    type: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyDeploymentDeploy implements buildifm.DeploymentDeploy {
//    message: string;
//    type: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyDeploymentTest implements buildifm.DeploymentTest {
//    runId: number;
//    type: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyInformationNode implements buildifm.InformationNode {
//    /**
//     * Fields of the information node
//     */
//    fields: { [key: string]: string; };
//    /**
//     * Process or person that last modified this node
//     */
//    lastModifiedBy: string;
//    /**
//     * Date this node was last modified
//     */
//    lastModifiedDate: Date;
//    /**
//     * Node Id of this information node
//     */
//    nodeId: number;
//    /**
//     * Id of parent node (xml tree)
//     */
//    parentId: number;
//    /**
//     * The type of the information node
//     */
//    type: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyBuildIssue implements buildifm.Issue {
//    category: string;
//    data: { [key: string]: string; };
//    message: string;
//    type: buildifm.IssueType;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyMappingDetails implements buildifm.MappingDetails {
//    mappingType: string;
//    serverPath: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyPropertyValue implements buildifm.PropertyValue {
//    /**
//     * Guid of identity that changed this property value
//     */
//    changedBy: string;
//    /**
//     * The date this property value was changed
//     */
//    changedDate: Date;
//    /**
//     * Name in the name value mapping
//     */
//    propertyName: string;
//    /**
//     * Value in the name value mapping
//     */
//    value: any;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyRealtimeBuildEvent implements buildifm.RealtimeBuildEvent {
//    buildId: number;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyRequestReference implements buildifm.RequestReference {
//    /**
//     * Id of the resource
//     */
//    id: number;
//    /**
//     * Name of the requestor
//     */
//    requestedFor: VSSInterfaces.IdentityRef;
//    /**
//     * Full http link to the resource
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyRetentionPolicy implements buildifm.RetentionPolicy {
//    branches: string[];
//    daysToKeep: number;
//    deleteBuildRecord: boolean;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummySchedule implements buildifm.Schedule {
//    branchFilters: string[];
//    /**
//     * Days for a build (flags enum for days of the week)
//     */
//    daysToBuild: buildifm.ScheduleDays;
//    /**
//     * The Job Id of the Scheduled job that will queue the scheduled build. Since a single trigger can have multiple schedules and we want a single job to process a single schedule (since each schedule has a list of branches to build), the schedule itself needs to define the Job Id. This value will be filled in when a definition is added or updated.  The UI does not provide it or use it.
//     */
//    scheduleJobId: string;
//    /**
//     * Local timezone hour to start
//     */
//    startHours: number;
//    /**
//     * Local timezone minute to start
//     */
//    startMinutes: number;
//    /**
//     * Time zone of the build schedule (string representation of the time zone id)
//     */
//    timeZoneId: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyScheduleTrigger implements buildifm.ScheduleTrigger {
//    schedules: DummySchedule[];
//    triggerType: buildifm.DefinitionTriggerType;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyShallowReference implements buildifm.ShallowReference {
//    /**
//     * Id of the resource
//     */
//    id: number;
//    /**
//     * Name of the linked resource (definition name, controller name, etc.)
//     */
//    name: string;
//    /**
//     * Full http link to the resource
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyTaskDefinitionReference implements buildifm.TaskDefinitionReference {
//    id: string;
//    versionSpec: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyWorkspaceMapping implements buildifm.WorkspaceMapping {
//    /**
//     * Uri of the associated definition
//     */
//    definitionUri: string;
//    /**
//     * Depth of this mapping
//     */
//    depth: number;
//    /**
//     * local location of the definition
//     */
//    localItem: string;
//    /**
//     * type of workspace mapping
//     */
//    mappingType: buildifm.WorkspaceMappingType;
//    /**
//     * Server location of the definition
//     */
//    serverItem: string;
//    /**
//     * Id of the workspace
//     */
//    workspaceId: number;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyWorkspaceTemplate implements buildifm.WorkspaceTemplate {
//    /**
//     * Uri of the associated definition
//     */
//    definitionUri: string;
//    /**
//     * The identity that last modified this template
//     */
//    lastModifiedBy: string;
//    /**
//     * The last time this template was modified
//     */
//    lastModifiedDate: Date;
//    /**
//     * List of workspace mappings
//     */
//    mappings: DummyWorkspaceMapping[];
//    /**
//     * Id of the workspace for this template
//     */
//    workspaceId: number;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}

//export class DummyXamlBuildDefinition implements buildifm.XamlBuildDefinition {
//    _links: any;
//    /**
//     * Batch size of the definition
//     */
//    batchSize: number;
//    buildArgs: string;
//    /**
//     * The continuous integration quiet period
//     */
//    continuousIntegrationQuietPeriod: number;
//    /**
//     * The build controller
//     */
//    controller: DummyBuildController;
//    /**
//     * The date this definition was created
//     */
//    createdOn: Date;
//    /**
//     * Default drop location for builds from this definition
//     */
//    defaultDropLocation: string;
//    /**
//     * Description of the definition
//     */
//    description: string;
//    /**
//     * Id of the resource
//     */
//    id: number;
//    /**
//     * The last build on this definition
//     */
//    lastBuild: DummyShallowReference;
//    /**
//     * Name of the linked resource (definition name, controller name, etc.)
//     */
//    name: string;
//    /**
//     * The project.
//     */
//    project: TfsInterfaces.TeamProjectReference;
//    /**
//     * If builds can be queued from this definition
//     */
//    queueStatus: buildifm.DefinitionQueueStatus;
//    /**
//     * The definition revision number.
//     */
//    revision: number;
//    /**
//     * The reasons supported by the template
//     */
//    supportedReasons: buildifm.BuildReason;
//    /**
//     * How builds are triggered from this definition
//     */
//    triggerType: buildifm.DefinitionTriggerType;
//    /**
//     * The type of the definition.
//     */
//    type: buildifm.DefinitionType;
//    /**
//     * The Uri of the definition
//     */
//    uri: string;
//    /**
//     * Full http link to the resource
//     */
//    url: string;

//    //stuff below this are unrelated fields bundled in to test what is being sent to the server
//    verb: string;
//    relativeUrl: string;

//    constructor() {

//    }
//}



//var TaskAgentApi = new agentm.TaskAgentApi("http://TestServer", []);

//it("TaskAgent tests", function() {
//    var agent = new DummyTaskAgent(1, "myagent", "1.0");
//    assert.notEqual(TaskAgentApi, null, "create an agent api");

//    //#createAgent
//    var testagent;
//    var createAgentOnResult = function (err: any, statusCode: number, retagent: agentifm.TaskAgent) {
//        testagent = <DummyTaskAgent>retagent;
//    };
//    TaskAgentApi.createAgent(agent, 42, createAgentOnResult);

//    //normally the following tests would have to be in onresult, but we're not actually making async calls
//    assert.equal(testagent.id, 1, "createAgent agent remains the same - id test");
//    assert.equal(testagent.name, "myagent", "createAgent agent remains the same - name test");
//    assert.equal(testagent.version, "1.0", "createAgent agent remains the same - version test");
//    assert.equal(testagent.verb, "POST", "createAgent calls correct Http Method -- POST");
//    assert.equal(testagent.relativeUrl, "_apis/distributedtask/pools/42/agents", "createAgent route template formats correctly and is sent correctly");

//    //#deleteAgent
//    var retStatusCode;
//    var deleteAgentOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.deleteAgent(42, 1, deleteAgentOnResult);

//    assert.equal(retStatusCode, 200, "deleteAgent went through");

//    var deleteAgentRouteValues = {
//        poolId: 42,
//        agentId: 1,
//        area: "distributedtask",
//        resource: "agents"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/pools/{poolId}/{resource}/{agentId}", deleteAgentRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42/agents/1", "deleteAgent route template formats correctly");

//    //getAgent
//    var ret;
//    var getAgentOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getAgent(42, 1, false, "testpropertyFilters", getAgentOnResult);

//    assert.equal(ret.verb, "GET", "getAgent calls correct http method -- GET");

//    assert.equal(ret.relativeUrl, "_apis/distributedtask/pools/42/agents/1?includecapabilities=false&propertyfilters=testpropertyFilters", "getAgent route template formats correctly and is sent correctly");

//    //getAgents and null parameters
//    var ret;
//    var getAgentsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getAgents(42, "testagentName", null, null, null, getAgentsOnResult);

//    assert.equal(ret.verb, "GET", "getAgents calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "_apis/distributedtask/pools/42/agents?agentname=testagentName", "getAgents route template formats correctly and is sent correctly");

//    //replaceAgent
//    var sendTaskAgent = new DummyTaskAgent(1, "testagentName", "1.0");
//    var retTaskAgent;
//    var replaceAgentOnResult = function (err: any, statusCode: number, tempTaskAgent: agentifm.TaskAgent) {
//        retTaskAgent = <DummyTaskAgent>tempTaskAgent;
//    };
//    TaskAgentApi.replaceAgent(sendTaskAgent, 42, 1, replaceAgentOnResult);

//    assert.equal(retTaskAgent, sendTaskAgent, "replaceAgent TaskAgent remains the same");
//    assert.equal(retTaskAgent.verb, "PUT", "replaceAgent calls correct http method -- PUT");
//    assert.equal(retTaskAgent.relativeUrl, "_apis/distributedtask/pools/42/agents/1", "replaceAgent route template formats correctly and is sent correctly");

//    //updateAgent
//    var sendTaskAgent = new DummyTaskAgent(1, "myagent", "1.0");
//    var retTaskAgent;
//    var updateAgentOnResult = function (err: any, statusCode: number, tempTaskAgent: agentifm.TaskAgent) {
//        retTaskAgent = <DummyTaskAgent>tempTaskAgent;
//    };
//    TaskAgentApi.updateAgent(sendTaskAgent, 42, 1, updateAgentOnResult);

//    assert.equal(retTaskAgent, sendTaskAgent, "updateAgent TaskAgent remains the same");
//    assert.equal(retTaskAgent.verb, "PATCH", "updateAgent calls correct http method -- PATCH");
//    assert.equal(retTaskAgent.relativeUrl, "_apis/distributedtask/pools/42/agents/1", "updateAgent route template formats correctly and is sent correctly");

//    //deleteRequest
//    var retStatusCode;
//    var deleteRequestOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.deleteRequest(42, 1, "testLockToken", deleteRequestOnResult);

//    assert.equal(retStatusCode, 200, "deleteRequest went through");

//    var deleteRequestRouteValues = {
//        poolId: 42,
//        requestId: 1,
//        area: "distributedtask",
//        resource: "jobrequests"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/pools/{poolId}/{resource}/{requestId}", deleteRequestRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42/jobrequests/1", "deleteRequest route template formats correctly");

//    //getRequest
//    var ret;
//    var getRequestOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getRequest(42, 1, getRequestOnResult);

//    assert.equal(ret.verb, "GET", "getRequest calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "_apis/distributedtask/pools/42/jobrequests/1", "getRequest route template formats correctly and is sent correctly");

//    //queueRequest
//    var sendTaskAgentJobRequest = new DummyTaskAgentJobRequest();
//    var retTaskAgentJobRequest;
//    var queueRequestOnResult = function (err: any, statusCode: number, tempTaskAgentJobRequest: agentifm.TaskAgentJobRequest) {
//        retTaskAgentJobRequest = <DummyTaskAgentJobRequest>tempTaskAgentJobRequest;
//    };
//    TaskAgentApi.queueRequest(sendTaskAgentJobRequest, 42, queueRequestOnResult);

//    assert.equal(retTaskAgentJobRequest, sendTaskAgentJobRequest, "queueRequest TaskAgentJobRequest remains the same");
//    assert.equal(retTaskAgentJobRequest.verb, "POST", "queueRequest calls correct http method -- POST");
//    assert.equal(retTaskAgentJobRequest.relativeUrl, "_apis/distributedtask/pools/42/jobrequests", "queueRequest route template formats correctly and is sent correctly");

//    //updateRequest
//    var sendTaskAgentJobRequest = new DummyTaskAgentJobRequest();
//    var retTaskAgentJobRequest;
//    var updateRequestOnResult = function (err: any, statusCode: number, tempTaskAgentJobRequest: agentifm.TaskAgentJobRequest) {
//        retTaskAgentJobRequest = <DummyTaskAgentJobRequest>tempTaskAgentJobRequest;
//    };
//    TaskAgentApi.updateRequest(sendTaskAgentJobRequest, 42, 1, "testLockToken", updateRequestOnResult);

//    assert.equal(retTaskAgentJobRequest, sendTaskAgentJobRequest, "updateRequest TaskAgentJobRequest remains the same");
//    assert.equal(retTaskAgentJobRequest.verb, "PATCH", "updateRequest calls correct http method -- PATCH");
//    assert.equal(retTaskAgentJobRequest.relativeUrl, "_apis/distributedtask/pools/42/jobrequests/1?locktoken=testLockToken", "updateRequest route template formats correctly and is sent correctly");

//    //deleteMessage
//    var retStatusCode;
//    var deleteMessageOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.deleteMessage(42, 1, "testSessionId", deleteMessageOnResult);

//    assert.equal(retStatusCode, 200, "deleteMessage went through");

//    var deleteMessageRouteValues = {
//        poolId: 42,
//        messageId: 1,
//        area: "distributedtask",
//        resource: "messages"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/pools/{poolId}/{resource}/{messageId}", deleteMessageRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42/messages/1", "deleteMessage route template formats correctly");

//    //getMessage
//    var ret;
//    var getMessageOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getMessage(42, "testSessionId", 100, getMessageOnResult);

//    assert.equal(ret.verb, "GET", "getMessage calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "_apis/distributedtask/pools/42/messages?sessionid=testSessionId&lastmessageid=100", "getMessage route template formats correctly and is sent correctly");

//    //refreshAgent
//    var retStatusCode;
//    var refreshAgentOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.refreshAgent(42, 1, refreshAgentOnResult);

//    assert.equal(retStatusCode, 200, "refreshAgent went through");

//    var refreshAgentRouteValues = {
//        poolId: 42,
//        area: "distributedtask",
//        resource: "messages"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/pools/{poolId}/{resource}/{messageId}", refreshAgentRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42/messages", "refreshAgent route template formats correctly");

//    //refreshAgents
//    var retStatusCode;
//    var refreshAgentsOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.refreshAgents(42, refreshAgentsOnResult);

//    assert.equal(retStatusCode, 200, "refreshAgents went through");

//    var refreshAgentsRouteValues = {
//        poolId: 42,
//        area: "distributedtask",
//        resource: "messages"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/pools/{poolId}/{resource}/{messageId}", refreshAgentsRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42/messages", "refreshAgents route template formats correctly");

//    //sendMessage
//    var retStatusCode;
//    var sendMessageOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.refreshAgents(42, sendMessageOnResult);

//    assert.equal(retStatusCode, 200, "sendMessage went through");

//    var sendMessageRouteValues = {
//        poolId: 42,
//        area: "distributedtask",
//        resource: "messages"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/pools/{poolId}/{resource}/{messageId}", sendMessageRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42/messages", "sendMessage route template formats correctly");

//    //createPool
//    var sendTaskAgentPool = new DummyTaskAgentPool();
//    var retTaskAgentPool;
//    var createPoolOnResult = function (err: any, statusCode: number, tempTaskAgentPool: agentifm.TaskAgentPool) {
//        retTaskAgentPool = <DummyTaskAgentPool>tempTaskAgentPool;
//    };
//    TaskAgentApi.createPool(sendTaskAgentPool, createPoolOnResult);

//    assert.equal(retTaskAgentPool, sendTaskAgentPool, "createPool TaskAgentPool remains the same");
//    assert.equal(retTaskAgentPool.verb, "POST", "createPool calls correct http method -- POST");
//    assert.equal(retTaskAgentPool.relativeUrl, "_apis/distributedtask/pools", "createPool route template formats correctly and is sent correctly");

//    //deletePool
//    var retStatusCode;
//    var deletePoolOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.refreshAgents(42, deletePoolOnResult);

//    assert.equal(retStatusCode, 200, "deletePool went through");

//    var deletePoolRouteValues = {
//        poolId: 42,
//        area: "distributedtask",
//        resource: "pools"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/{resource}/{poolId}", deletePoolRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42", "deletePool route template formats correctly");

//    //getPool
//    var ret;
//    var getPoolOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getPool(42, "testproperties", getPoolOnResult);

//    assert.equal(ret.verb, "GET", "getPool calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "_apis/distributedtask/pools/42?properties=testproperties", "getPool route template formats correctly and is sent correctly");

//    //getPools
//    var ret;
//    var getPoolsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getPools("testpoolName", "testproperties", getPoolsOnResult);

//    assert.equal(ret.verb, "GET", "getPools calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "_apis/distributedtask/pools?poolname=testpoolName&properties=testproperties", "getPools route template formats correctly and is sent correctly");

//    //updatePool
//    var sendTaskAgentPool = new DummyTaskAgentPool();
//    var retTaskAgentPool;
//    var updatePoolOnResult = function (err: any, statusCode: number, tempTaskAgentPool: agentifm.TaskAgentPool) {
//        retTaskAgentPool = <DummyTaskAgentPool>tempTaskAgentPool;
//    };
//    TaskAgentApi.updatePool(sendTaskAgentPool, 42, updatePoolOnResult);

//    assert.equal(retTaskAgentPool, sendTaskAgentPool, "updatePool TaskAgentPool remains the same");
//    assert.equal(retTaskAgentPool.verb, "PATCH", "updatePool calls correct http method -- PATCH");
//    assert.equal(retTaskAgentPool.relativeUrl, "_apis/distributedtask/pools/42", "updatePool route template formats correctly and is sent correctly");

//    //getAgentPoolRoles
//    var ret;
//    var getAgentPoolRolesOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getAgentPoolRoles(42, getAgentPoolRolesOnResult);

//    assert.equal(ret.verb, "GET", "getAgentPoolRoles calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "_apis/distributedtask/roles/42", "getAgentPoolRoles route template formats correctly and is sent correctly");

//    //createServiceEndpoint
//    var sendServiceEndpoint = new DummyServiceEndpoint();
//    var retServiceEndpoint;
//    var createServiceEndpointOnResult = function (err: any, statusCode: number, tempServiceEndpoint: agentifm.ServiceEndpoint) {
//        retServiceEndpoint = <DummyServiceEndpoint>tempServiceEndpoint;
//    };
//    TaskAgentApi.createServiceEndpoint(sendServiceEndpoint, "testScopeIdentifier", "testEndpointId", createServiceEndpointOnResult);

//    assert.equal(retServiceEndpoint, sendServiceEndpoint, "createServiceEndpoint ServiceEndpoint remains the same");
//    assert.equal(retServiceEndpoint.verb, "PUT", "createServiceEndpoint calls correct http method -- PUT");
//    assert.equal(retServiceEndpoint.relativeUrl, "testScopeIdentifier/_apis/distributedtask/serviceendpoints/testEndpointId", "createServiceEndpoint route template formats correctly and is sent correctly");

//    //getServiceEndpointDetails
//    var ret;
//    var getServiceEndpointDetailsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getServiceEndpointDetails("testScopeIdentifier", "testEndpointId", getServiceEndpointDetailsOnResult);

//    assert.equal(ret.verb, "GET", "getServiceEndpointDetails calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testScopeIdentifier/_apis/distributedtask/serviceendpoints/testEndpointId", "getServiceEndpointDetails route template formats correctly and is sent correctly");

//    //getServiceEndpoints
//    var ret;
//    var getServiceEndpointsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getServiceEndpoints("testScopeIdentifier", "testtype", getServiceEndpointsOnResult);

//    assert.equal(ret.verb, "GET", "getServiceEndpoints calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testScopeIdentifier/_apis/distributedtask/serviceendpoints?type=testtype", "getServiceEndpoints route template formats correctly and is sent correctly");

//    //createSession
//    var sendTaskAgentSession = new DummyTaskAgentSession();
//    var retTaskAgentSession;
//    var createSessionOnResult = function (err: any, statusCode: number, tempTaskAgentSession: agentifm.TaskAgentSession) {
//        retTaskAgentSession = <DummyTaskAgentSession>tempTaskAgentSession;
//    };
//    TaskAgentApi.createSession(sendTaskAgentSession, 42, createSessionOnResult);

//    assert.equal(retTaskAgentSession, sendTaskAgentSession, "createSession TaskAgentSession remains the same");
//    assert.equal(retTaskAgentSession.verb, "POST", "createSession calls correct http method -- POST");
//    assert.equal(retTaskAgentSession.relativeUrl, "_apis/distributedtask/pools/42/sessions", "createSession route template formats correctly and is sent correctly");

//    //deleteSession
//    var retStatusCode;
//    var deleteSessionOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.deleteSession(42, "testSessionId", deleteSessionOnResult);

//    assert.equal(retStatusCode, 200, "deleteSession went through");

//    var deleteSessionRouteValues = {
//        poolId: 42,
//        sessionId: "testSessionId",
//        area: "distributedtask",
//        resource: "sessions"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/pools/{poolId}/{resource}/{sessionId}", deleteSessionRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42/sessions/testSessionId", "deleteSession route template formats correctly");

//    //deleteTaskDefinition
//    var retStatusCode;
//    var deleteTaskDefinitionOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.deleteTaskDefinition("testTaskId", deleteTaskDefinitionOnResult);

//    assert.equal(retStatusCode, 200, "deleteTaskDefinition went through");

//    var deleteTaskDefinitionRouteValues = {
//        taskId: "testTaskId",
//        area: "distributedtask",
//        resource: "tasks"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/{resource}/{taskId}/{versionString}", deleteTaskDefinitionRouteValues);

//    assert.equal(path, "_apis/distributedtask/tasks/testTaskId", "deleteTaskDefinition route template formats correctly");

//    //getTaskContent
//    var ret;
//    var getTaskContentOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getTaskContent("testTaskId", "testVersionString", getTaskContentOnResult);

//    assert.equal(ret.verb, "GET", "getTaskContent calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "_apis/distributedtask/tasks/testTaskId/testVersionString", "getTaskContent route template formats correctly and is sent correctly");

//    //getTaskDefinitions
//    var ret;
//    var getTaskDefinitionsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskAgentApi.getTaskDefinitions(["testVisibility", "testVisibilityToo"], getTaskDefinitionsOnResult);

//    assert.equal(ret.verb, "GET", "getTaskDefinitions calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "_apis/distributedtask/tasks?visibility=testVisibility,testVisibilityToo", "getTaskDefinitions route template formats correctly and is sent correctly");

//    //#getTaskContentZip DOWNLOAD
//    var retStatusCode;
//    var getTaskContentZipOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    TaskAgentApi.getTaskContentZip("testFilePath", "testTaskId", "testVersionString", getTaskContentZipOnResult);

//    assert.equal(retStatusCode, 200, "getTaskContentZip went through");

//    var getTaskContentZipRouteValues = {
//        taskId: "testTaskId",
//        versionString: "testVersionString",
//        area: "distributedtask",
//        resource: "tasks"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/{resource}/{taskId}/{versionString}", getTaskContentZipRouteValues);

//    assert.equal(path, "_apis/distributedtask/tasks/testTaskId/testVersionString", "getTaskContentZip route template formats correctly and is sent correctly");

//    //#uploadTaskDefinition UPLOAD
//    var sendStream: NodeJS.ReadableStream;
//    var retTaskDefinition;
//    var appendLogOnResult = function (err: any, statusCode: number, tempTaskDefinition: any) {
//        retTaskDefinition = tempTaskDefinition;
//    };
//    TaskAgentApi.uploadTaskDefinition(sendStream, ["application/json"], null, "testTaskId", true, appendLogOnResult);

//    assert.equal(retTaskDefinition.verb, "PUT", "getLog calls correct http method -- PUT");
//    assert.equal(retTaskDefinition.relativeUrl, "_apis/distributedtask/tasks/testTaskId?overwrite=true", "getLog route template formats correctly and is sent correctly");

//    //#updateUserCapabilities test has different structure than other PUT methods because the return type is a simple array
//    //TODO: handle return types that aren't full property bag objects better in tests
//    var retStatusCode;
//    var sendUserCapabilities: { [key: string]: string; } = {};
//    var retTaskAgent;
//    var updateUserCapabilitiesOnResult = function (err: any, statusCode: number, tempTaskAgent: DummyTaskAgent) {
//        retStatusCode = statusCode;
//        retTaskAgent = <DummyTaskAgent>tempTaskAgent;
//    };
//    TaskAgentApi.updateUserCapabilities(sendUserCapabilities, 42, 1, updateUserCapabilitiesOnResult);

//    assert.equal(retStatusCode, 200, "updateUserCapabilities went through");

//    var updateUserCapabilitiesRouteValues = {
//        poolId: 42,
//        agentId: 1,
//        area: "distributedtask",
//        resource: "usercapabilities"
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/pools/{poolId}/agents/{agentId}/{resource}", updateUserCapabilitiesRouteValues);

//    assert.equal(path, "_apis/distributedtask/pools/42/agents/1/usercapabilities", "updateUserCapabilities route template formats correctly");
//});

//var BuildApi = new buildm.BuildApi("http://TestServer", []);

//it("Build tests", function () {

//	//#createArtifact
//	var sendBuildArtifact = new DummyBuildArtifact();
//	var retBuildArtifact;
//	var createArtifactOnResult = function(err: any, statusCode: number, tempBuildArtifact: DummyBuildArtifact) {
//		retBuildArtifact = <DummyBuildArtifact>tempBuildArtifact;
//	};
//	BuildApi.createArtifact(sendBuildArtifact, 42, "testproject", createArtifactOnResult);

//	assert.equal(retBuildArtifact, sendBuildArtifact, "createArtifact BuildArtifact remains the same");
//	assert.equal(retBuildArtifact.verb, "POST", "createArtifact calls correct http method -- POST");
//	assert.equal(retBuildArtifact.relativeUrl, "testproject/_apis/build/builds/42/artifacts", "createArtifact route template formats correctly and is sent correctly");

//	//#getArtifact
//	var ret;
//    var getArtifactOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getArtifact(42, "testartifactName", "testproject", getArtifactOnResult);

//	assert.equal(ret.verb, "GET", "getArtifact calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testproject/_apis/build/builds/42/artifacts/testartifactName", "getArtifact route template formats correctly and is sent correctly");
    
//	//#getArtifactContentZip DOWNLOAD
//	var retStatusCode;
//    var getArtifactContentZipOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    BuildApi.getArtifactContentZip("testFilePath", 42, "testartifactName", "testproject", getArtifactContentZipOnResult);

//    assert.equal(retStatusCode, 200, "getArtifactContentZip went through");

//    var getArtifactContentZipRouteValues = {
//        project: "testproject",
//        buildId: 42,
//        artifactName: "testartifactName",
//        area: "build",
//        resource: "artifacts"
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/builds/{buildId}/{resource}/{artifactName}", getArtifactContentZipRouteValues);

//    assert.equal(path, "testproject/_apis/build/builds/42/artifacts/testartifactName", "getArtifactContentZip route template formats correctly and is sent correctly");

//	//#getArtifacts
//	var ret;
//    var getArtifactsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getArtifacts(42, "testproject", getArtifactsOnResult);

//	assert.equal(ret.verb, "GET", "getArtifacts calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/builds/42/artifacts", "getArtifacts route template formats correctly and is sent correctly");

//	//#getBadge
//	var ret;
//    var getBadgeOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBadge("testproject", 42, "testbranchName", getBadgeOnResult);

//	assert.equal(ret.verb, "GET", "getBadge calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "_apis/public/build/definitions/testproject/42/badge?branchname=testbranchName", "getBadge route template formats correctly and is sent correctly");

//	//#deleteBuild
//	var retStatusCode;
//	var deleteBuildOnResult = function(err: any, statusCode: number) {
//	    retStatusCode = statusCode;
//	};
//    BuildApi.deleteBuild(42, "testproject", deleteBuildOnResult);

//    assert.equal(retStatusCode, 200, "deleteBuild went through");

//    var deleteBuildRouteValues = {
//		project: "testproject",
//		buildId: 42,
//		area: "build",
//		resource: "builds"
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/{resource}/{buildId}", deleteBuildRouteValues);

//    assert.equal(path, "testproject/_apis/build/builds/42", "deleteBuild route template formats correctly");

//	//#getBuild
//	var ret;
//    var getBuildOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuild(42, "testproject", "testpropertyFilters", getBuildOnResult);

//	assert.equal(ret.verb, "GET", "getBuild calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testproject/_apis/build/builds/42?propertyfilters=testpropertyFilters", "getBuild route template formats correctly and is sent correctly");

//    //#getBuilds with no query parameters
//    var ret;
//    var getBuildsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    BuildApi.getBuilds("testproject", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, getBuildsOnResult);

//    assert.equal(ret.verb, "GET", "getBuilds calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testproject/_apis/build/builds", "getBuilds route template formats correctly and is sent correctly");

//	//#getBuilds with some parameters
//	var ret;
//    var getBuildsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    BuildApi.getBuilds("testproject", [1, 2], [3, 4], "testbuildNumber", new Date(2015, 6, 1, 4, 30, 0, 0), null, "testrequestedFor", buildifm.BuildReason.Manual, null, null, null, null, null, 10, "testcontinuationToken", 20, getBuildsOnResult);

//	assert.equal(ret.verb, "GET", "getBuilds calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testproject/_apis/build/builds?definitions=1,2&queues=3,4&buildnumber=testbuildNumber&minfinishtime=2015-07-01T08:30:00.000Z&requestedfor=testrequestedFor&reasonfilter=1&top=10&continuationtoken=testcontinuationToken&maxbuildsperdefinition=20", "getBuilds route template formats correctly and is sent correctly");

//	//#queueBuild
//	var sendBuild = new DummyBuild();
//	var retBuild;
//	var queueBuildOnResult = function(err: any, statusCode: number, tempBuild: DummyBuild) {
//		retBuild = <DummyBuild>tempBuild;
//	};
//	BuildApi.queueBuild(sendBuild, "testproject", false, queueBuildOnResult);

//	assert.equal(retBuild, sendBuild, "queueBuild Build remains the same");
//	assert.equal(retBuild.verb, "POST", "queueBuild calls correct http method -- POST");
//	assert.equal(retBuild.relativeUrl, "testproject/_apis/build/builds?ignorewarnings=false", "queueBuild route template formats correctly and is sent correctly");

//	//#updateBuild
//	var sendBuild = new DummyBuild();
//	var retBuild;
//    var updateBuildOnResult = function (err: any, statusCode: number, tempBuild: DummyBuild) {
//		retBuild = <DummyBuild>tempBuild;
//	};
//	BuildApi.updateBuild(sendBuild, 42, "testproject", updateBuildOnResult);

//	assert.equal(retBuild, sendBuild, "updateBuild Build remains the same");
//	assert.equal(retBuild.verb, "PATCH", "updateBuild calls correct http method -- PATCH");
//	assert.equal(retBuild.relativeUrl, "testproject/_apis/build/builds/42", "updateBuild route template formats correctly and is sent correctly");

//	//#getBuildCommits
//	var ret;
//    var getBuildCommitsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuildCommits("testproject", 42, 10, getBuildCommitsOnResult);

//	assert.equal(ret.verb, "GET", "getBuildCommits calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/builds/42/changes?top=10", "getBuildCommits route template formats correctly and is sent correctly");

//	//#getBuildController
//	var ret;
//    var getBuildControllerOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuildController(42, getBuildControllerOnResult);

//	assert.equal(ret.verb, "GET", "getBuildController calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "_apis/build/Controllers/42", "getBuildController route template formats correctly and is sent correctly");

//	//#getBuildControllers
//	var ret;
//    var getBuildControllersOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuildControllers("testname", getBuildControllersOnResult);

//	assert.equal(ret.verb, "GET", "getBuildControllers calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "_apis/build/Controllers?name=testname", "getBuildControllers route template formats correctly and is sent correctly");
    
//	//#createDefinition
//	var sendBuildDefinition = new DummyBuildDefinition();
//	var retBuildDefinition;
//	var createDefinitionOnResult = function(err: any, statusCode: number, tempBuildDefinition: DummyBuildDefinition) {
//		retBuildDefinition = <DummyBuildDefinition>tempBuildDefinition;
//	};
//	BuildApi.createDefinition(sendBuildDefinition, "testproject", 1, 2, createDefinitionOnResult);

//	assert.equal(retBuildDefinition, sendBuildDefinition, "createDefinition BuildDefinition remains the same");
//	assert.equal(retBuildDefinition.verb, "POST", "createDefinition calls correct http method -- POST");
//	assert.equal(retBuildDefinition.relativeUrl, "testproject/_apis/build/definitions?definitiontocloneid=1&definitiontoclonerevision=2", "createDefinition route template formats correctly and is sent correctly");

//	//#deleteDefinition
//	var retStatusCode;
//	var deleteDefinitionOnResult = function(err: any, statusCode: number) {
//	    retStatusCode = statusCode;
//	};
//    BuildApi.deleteDefinition(42, "testproject", deleteDefinitionOnResult);

//    assert.equal(retStatusCode, 200, "deleteDefinition went through");

//    var deleteDefinitionRouteValues = {
//		project: "testproject",
//		definitionId: 2,
//		area: "build",
//		resource: "definitions"
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/{resource}/{definitionId}", deleteDefinitionRouteValues);

//    assert.equal(path, "testproject/_apis/build/definitions/2", "deleteDefinition route template formats correctly");

//	//#getDefinition
//	var ret;
//    var getDefinitionOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getDefinition(42, "testproject", 1, ["pf1","pf2"], getDefinitionOnResult);

//	assert.equal(ret.verb, "GET", "getDefinition calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/definitions/42?revision=1&propertyfilters=pf1,pf2", "getDefinition route template formats correctly and is sent correctly");

//	//#getDefinitions
//	var ret;
//    var getDefinitionsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    BuildApi.getDefinitions("testproject", "testname", buildifm.DefinitionType.Build, getDefinitionsOnResult);

//	assert.equal(ret.verb, "GET", "getDefinitions calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/definitions?name=testname&type=2", "getDefinitions route template formats correctly and is sent correctly");

//	//#updateDefinition
//	var sendBuildDefinition = new DummyBuildDefinition();
//	var retBuildDefinition;
//	var updateDefinitionOnResult = function(err: any, statusCode: number, tempBuildDefinition: DummyBuildDefinition) {
//		retBuildDefinition = <DummyBuildDefinition>tempBuildDefinition;
//	};
//	BuildApi.updateDefinition(sendBuildDefinition, 42, "testproject", updateDefinitionOnResult);

//	assert.equal(retBuildDefinition, sendBuildDefinition, "updateDefinition BuildDefinition remains the same");
//	assert.equal(retBuildDefinition.verb, "PUT", "updateDefinition calls correct http method -- PUT");
//	assert.equal(retBuildDefinition.relativeUrl, "testproject/_apis/build/definitions/42", "updateDefinition route template formats correctly and is sent correctly");

//	//#getBuildDeployments
//	var ret;
//    var getBuildDeploymentsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuildDeployments("testproject", 42, getBuildDeploymentsOnResult);

//	assert.equal(ret.verb, "GET", "getBuildDeployments calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/builds/42/deployments", "getBuildDeployments route template formats correctly and is sent correctly");

//	//#getBuildLog DOWNLOAD
//    var retStatusCode;
//    var getArtifactContentZipOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    BuildApi.getBuildLog("testFilePath", "testproject", 42, 5, 1, 100, getArtifactContentZipOnResult);

//    assert.equal(retStatusCode, 200, "getArtifactContentZip went through");

//    var getBuildLogRouteValues = {
//        project: "testproject",
//        buildId: 42,
//        logId: 5,
//        area: "build",
//        resource: "logs"
//    };

//    var getBuildLogQueryValues = {
//        startLine: 1,
//        endLine: 100
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/builds/{buildId}/{resource}/{logId}", getBuildLogRouteValues, getBuildLogQueryValues);

//    assert.equal(path, "testproject/_apis/build/builds/42/logs/5?startline=1&endline=100", "getBuildLog route template formats correctly and is sent correctly");

//	//#getBuildLogs
//	var ret;
//    var getBuildLogsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuildLogs("testproject", 42,  getBuildLogsOnResult);

//	assert.equal(ret.verb, "GET", "getBuildLogs calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/builds/42/logs", "getBuildLogs route template formats correctly and is sent correctly");

//	//#getBuildLogsZip DOWNLOAD
//    var retStatusCode;
//    var getBuildLogsZipOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//    };
//    BuildApi.getBuildLogsZip("testfilePath", "testproject", 42, getBuildLogsZipOnResult);

//    assert.equal(retStatusCode, 200, "getArtifactContentZip went through");

//    var getBuildLogsZipRouteValues = {
//        project: "testproject",
//        buildId: 42,
//        area: "build",
//        resource: "logs"
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/builds/{buildId}/{resource}/{logId}", getBuildLogsZipRouteValues);

//    assert.equal(path, "testproject/_apis/build/builds/42/logs", "getBuildLogsZip route template formats correctly and is sent correctly");

//	//#getBuildOptionDefinitions
//	var ret;
//    var getBuildOptionDefinitionsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuildOptionDefinitions(getBuildOptionDefinitionsOnResult);

//	assert.equal(ret.verb, "GET", "getBuildOptionDefinitions calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "_apis/build/options", "getBuildOptionDefinitions route template formats correctly and is sent correctly");

//	//#createQueue
//	var sendAgentPoolQueue = new DummyAgentPoolQueue();
//	var retAgentPoolQueue;
//	var createQueueOnResult = function(err: any, statusCode: number, tempAgentPoolQueue: DummyAgentPoolQueue) {
//		retAgentPoolQueue = <DummyAgentPoolQueue>tempAgentPoolQueue;
//	};
//	BuildApi.createQueue(sendAgentPoolQueue, createQueueOnResult);

//	assert.equal(retAgentPoolQueue, sendAgentPoolQueue, "createQueue AgentPoolQueue remains the same");
//	assert.equal(retAgentPoolQueue.verb, "POST", "createQueue calls correct http method -- POST");
//	assert.equal(retAgentPoolQueue.relativeUrl, "_apis/build/queues", "createQueue route template formats correctly and is sent correctly");

//	//#deleteQueue
//	var retStatusCode;
//	var deleteQueueOnResult = function(err: any, statusCode: number) {
//	    retStatusCode = statusCode;
//	};
//    BuildApi.deleteQueue(42, deleteQueueOnResult);

//    assert.equal(retStatusCode, 200, "deleteQueue went through");

//    var deleteQueueRouteValues = {
//		area: "build",
//		resource: "queues"
//    };

//    var deleteQueueQueryValues = {
//        id: 42
//    };

//    var path: string = restClient.formatRouteTemplate("_apis/{area}/{resource}/{controllerId}", deleteQueueRouteValues, deleteQueueQueryValues);

//    assert.equal(path, "_apis/build/queues?id=42", "deleteQueue route template formats correctly");

//	//#getAgentPoolQueue
//	var ret;
//    var getAgentPoolQueueOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getAgentPoolQueue(42, getAgentPoolQueueOnResult);

//	assert.equal(ret.verb, "GET", "getAgentPoolQueue calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "_apis/build/queues/42", "getAgentPoolQueue route template formats correctly and is sent correctly");

//	//#getQueues
//	var ret;
//    var getQueuesOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getQueues("testname",  getQueuesOnResult);

//	assert.equal(ret.verb, "GET", "getQueues calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "_apis/build/queues?name=testname", "getQueues route template formats correctly and is sent correctly");

//	//#getDefinitionRevisions
//	var ret;
//    var getDefinitionRevisionsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getDefinitionRevisions("testproject", 42, getDefinitionRevisionsOnResult);

//	assert.equal(ret.verb, "GET", "getDefinitionRevisions calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/definitions/42/revisions", "getDefinitionRevisions route template formats correctly and is sent correctly");

//	//#getBuildSettings
//	var ret;
//    var getBuildSettingsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuildSettings(getBuildSettingsOnResult);

//	assert.equal(ret.verb, "GET", "getBuildSettings calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "_apis/build/settings", "getBuildSettings route template formats correctly and is sent correctly");

//	//#updateBuildSettings
//	var sendBuildSettings = new DummyBuildSettings();
//	var retBuildSettings;
//	var updateBuildSettingsOnResult = function(err: any, statusCode: number, tempBuildSettings: DummyBuildSettings) {
//		retBuildSettings = <DummyBuildSettings>tempBuildSettings;
//	};
//	BuildApi.updateBuildSettings(sendBuildSettings, updateBuildSettingsOnResult);

//	assert.equal(retBuildSettings, sendBuildSettings, "updateBuildSettings BuildSettings remains the same");
//	assert.equal(retBuildSettings.verb, "PATCH", "updateBuildSettings calls correct http method -- PATCH");
//	assert.equal(retBuildSettings.relativeUrl, "_apis/build/settings", "updateBuildSettings route template formats correctly and is sent correctly");

//	//#addBuildTag test has less than other PUT methods because the return type is a simple array
//    //TODO: handle return types that aren't full property bag objects better in tests
//    var retStatusCode;
//    var retTags = []
//	var addBuildTagOnResult = function(err: any, statusCode: number, temptags: string[]) {
//        retStatusCode = statusCode;
//        retTags = temptags;
//	};
//    BuildApi.addBuildTag("testproject", 42, "testtag", addBuildTagOnResult);

//    assert.equal(retStatusCode, 200, "addBuildTag went through");

//    var addBuildTagRouteValues = {
//        project: "testproject",
//        buildId: 42,
//        tag: "testtag",
//        area: "build",
//        resource: "tags"
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/builds/{buildId}/{resource}/{tag}", addBuildTagRouteValues);

//    assert.equal(path, "testproject/_apis/build/builds/42/tags/testtag", "addBuildTag route template formats correctly and is sent correctly");

//    //assert.equal(retstring, sendstring, "addBuildTag sendstring remains the same");
//	//assert.equal(retstring.verb, "PUT", "addBuildTag calls correct http method -- PUT");
//	//assert.equal(retstring.relativeUrl, "testproject/_apis/build/builds/42/tags/testtag", "addBuildTag route template formats correctly and is sent correctly");

//	//#addBuildTags test has different structure than other PUT methods because the return type is a simple array
//    //TODO: handle return types that aren't full property bag objects better in tests
//    var retStatusCode;
//    var sendTags = ["testtag1", "testtag2"];
//	var retTags = [];
//    var addBuildTagsOnResult = function (err: any, statusCode: number, temptags: string[]) {
//        retStatusCode = statusCode;
//        retTags = temptags;
//	};
//    BuildApi.addBuildTags(sendTags, "testproject", 42, addBuildTagsOnResult);

//    assert.equal(retStatusCode, 200, "addBuildTags went through");

//    var addBuildTagsRouteValues = {
//        project: "testproject",
//        buildId: 42,
//        area: "build",
//        resource: "tags"
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/builds/{buildId}/{resource}/{tag}", addBuildTagsRouteValues);

//    assert.equal(path, "testproject/_apis/build/builds/42/tags", "addBuildTags route template formats correctly and is sent correctly");

//    //assert.equal(retstring, sendstring, "addBuildTags sendstring remains the same");
//	//assert.equal(retstring.verb, "POST", "addBuildTags calls correct http method -- POST");
//	//assert.equal(retstring.relativeUrl, "testproject/_apis/build/builds/42/tags", "addBuildTags route template formats correctly and is sent correctly");

//	//#deleteBuildTag
//	var ret;
//    var deleteBuildTagOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.deleteBuildTag("testproject", 42, "testtag", deleteBuildTagOnResult);

//    assert.equal(ret.verb, "DELETE", "deleteBuildTag calls correct http method -- DELETE");

//    var routeValues = {
//        project: "testproject",
//        buildId: 42,
//        tag: "testtag",
//        area: "build",
//        resource: "tags"
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/builds/{buildId}/{resource}/{tag}", routeValues);

//	assert.equal(ret.relativeUrl, "testproject/_apis/build/builds/42/tags/testtag", "deleteBuildTag route template formats correctly and is sent correctly");

//	//#getBuildTags
//	var ret;
//    var getBuildTagsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuildTags("testproject", 42,  getBuildTagsOnResult);

//	assert.equal(ret.verb, "GET", "getBuildTags calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/builds/42/tags", "getBuildTags route template formats correctly and is sent correctly");

//	//#getTags
//	var ret;
//    var getTagsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getTags("testproject",  getTagsOnResult);

//	assert.equal(ret.verb, "GET", "getTags calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/tags", "getTags route template formats correctly and is sent correctly");

//	//#deleteTemplate
//	var retStatusCode;
//	var deleteTemplateOnResult = function(err: any, statusCode: number) {
//	    retStatusCode = statusCode;
//	};
//    BuildApi.deleteTemplate("testproject", "testtemplateId", deleteTemplateOnResult);

//    assert.equal(retStatusCode, 200, "deleteTemplate went through");

//    var deleteTemplateRouteValues = {
//        project: "testproject",
//        templateId: "testtemplateId",
//		area: "build",
//		resource: "templates"
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/definitions/{resource}/{templateId}", deleteTemplateRouteValues);

//    assert.equal(path, "testproject/_apis/build/definitions/templates/testtemplateId", "deleteTemplate route template formats correctly");

//	//#getTemplate
//	var ret;
//    var getTemplateOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getTemplate("testproject", "testtemplateId", getTemplateOnResult);

//	assert.equal(ret.verb, "GET", "getTemplate calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testproject/_apis/build/definitions/templates/testtemplateId", "getTemplate route template formats correctly and is sent correctly");

//	//#getTemplates
//	var ret;
//    var getTemplatesOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getTemplates("testproject",  getTemplatesOnResult);

//	assert.equal(ret.verb, "GET", "getTemplates calls correct http method -- GET");
//	assert.equal(ret.relativeUrl, "testproject/_apis/build/definitions/templates", "getTemplates route template formats correctly and is sent correctly");

//	//#saveTemplate
//	var sendBuildDefinitionTemplate = new DummyBuildDefinitionTemplate();
//	var retBuildDefinitionTemplate;
//	var saveTemplateOnResult = function(err: any, statusCode: number, tempBuildDefinitionTemplate: DummyBuildDefinitionTemplate) {
//		retBuildDefinitionTemplate = <DummyBuildDefinitionTemplate>tempBuildDefinitionTemplate;
//	};
//	BuildApi.saveTemplate(sendBuildDefinitionTemplate, "testproject", "testtemplateId", saveTemplateOnResult);

//	assert.equal(retBuildDefinitionTemplate, sendBuildDefinitionTemplate, "saveTemplate BuildDefinitionTemplate remains the same");
//	assert.equal(retBuildDefinitionTemplate.verb, "PUT", "saveTemplate calls correct http method -- PUT");
//    assert.equal(retBuildDefinitionTemplate.relativeUrl, "testproject/_apis/build/definitions/templates/testtemplateId", "saveTemplate route template formats correctly and is sent correctly");

//	//#getBuildTimeline
//	var ret;
//    var getBuildTimelineOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//	BuildApi.getBuildTimeline("testproject", 42, "testtimelineId", 5, getBuildTimelineOnResult);

//	assert.equal(ret.verb, "GET", "getBuildTimeline calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testproject/_apis/build/builds/42/Timeline/testtimelineId?changeid=5", "getBuildTimeline route template formats correctly and is sent correctly");

//	//#getBuildWorkItemsRefs test has less than other PUT methods because the return type is a simple array
//    //TODO: handle return types that aren't full property bag objects better in tests
//    var retStatusCode;
//    var sendCommitIds = [];
//	var retResourceRefs;
//    var getBuildWorkItemsRefsOnResult = function (err: any, statusCode: number, tempResourceRefs: VSSInterfaces.ResourceRef[]) {
//        retStatusCode = statusCode;
//		retResourceRefs = <VSSInterfaces.ResourceRef[]>tempResourceRefs;
//	};
//    BuildApi.getBuildWorkItemsRefs(sendCommitIds, "testproject", 42, 10, getBuildWorkItemsRefsOnResult);

//    assert.equal(retStatusCode, 200, "getBuildWorkItemsRefs went through");

//    var getBuildWorkItemsRefsRouteValues = {
//        project: "testproject",
//        buildId: 42,
//        area: "build",
//        resource: "workitems"
//    };

//    var path: string = restClient.formatRouteTemplate("{project}/_apis/{area}/builds/{buildId}/{resource}", getBuildWorkItemsRefsRouteValues);

//    assert.equal(path, "testproject/_apis/build/builds/42/workitems", "addBuildTag route template formats correctly");

//    //assert.equal(retResourceRef, sendCommitIds, "getBuildWorkItemsRefs sendCommitIds remains the same");
//	//assert.equal(retResourceRef.verb, "POST", "getBuildWorkItemsRefs calls correct http method -- POST");
//	//assert.equal(retResourceRef.relativeUrl, "testproject/_apis/build/builds/42/workitems?top=10", "getBuildWorkItemsRefs route template formats correctly and is sent correctly");
//});

//var TaskApi = new taskm.TaskApi("http://TestServer", []);

//it("Task tests", function() {
//    //#postEvent test is simpler than other POST tests because callback doesn't contain data
//	var sendJobEvent = new DummyJobEvent();
//    var retStatusCode;
//    var postEventOnResult = function (err: any, statusCode: number) {
//        retStatusCode = statusCode;
//	};
//    TaskApi.postEvent(sendJobEvent, "testScopeIdentifier", "testHubName", "testplanId", postEventOnResult);

//    assert.equal(retStatusCode, 200, "postEvent went through");

//    var postEventRouteValues = {
//        scopeIdentifier: "testScopeIdentifier",
//        hubName: "testHubName",
//        planId: "testplanId",
//        area: "distributedtask",
//        resource: "events"
//    };

//    var path: string = restClient.formatRouteTemplate("{scopeIdentifier}/_apis/{area}/hubs/{hubName}/plans/{planId}/{resource}", postEventRouteValues);

//    assert.equal(path, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/events", "postEvent route template formats correctly");

//	//#postLines test is simpler than other POST tests because callback doesn't contain data
//    var sendLines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>;
//    var retStatusCode;
//	var postLinesOnResult = function(err: any, statusCode: number) {
//        retStatusCode = statusCode;
//	};
//    TaskApi.postLines(sendLines, "testScopeIdentifier", "testHubName", "testplanId", "testtimelineId", "testrecordId", postLinesOnResult);

//    assert.equal(retStatusCode, 200, "postEvent went through");

//    var sendLinesRouteValues = {
//        scopeIdentifier: "testScopeIdentifier",
//        hubName: "testHubName",
//        planId: "testplanId",
//        timelineId: "testtimelineId",
//        recordId: "testrecordId",
//        area: "distributedtask",
//        resource: "feed"
//    };

//    var path: string = restClient.formatRouteTemplate("{scopeIdentifier}/_apis/{area}/hubs/{hubName}/plans/{planId}/timelines/{timelineId}/records/{recordId}/{resource}", sendLinesRouteValues);

//    assert.equal(path, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/timelines/testtimelineId/records/testrecordId/feed", "postLines route template formats correctly");
    
//	//#appendLog UPLOAD
//    var sendStream: NodeJS.ReadableStream;
//	var retTaskLog;
//    var appendLogOnResult = function (err: any, statusCode: number, tempTaskLog: DummyTaskLog) {
//		retTaskLog = <DummyTaskLog>tempTaskLog;
//	};
//    TaskApi.appendLog(sendStream, ["application/json"], null, "testScopeIdentifier", "testHubName", "testplanId", 42, appendLogOnResult);

//    assert.equal(retTaskLog.verb, "POST", "appendLog calls correct http method -- POST");
//    assert.equal(retTaskLog.relativeUrl, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/logs/42", "getLog route template formats correctly and is sent correctly");

//	//#createLog
//	var sendTaskLog = new DummyTaskLog();
//	var retTaskLog;
//	var createLogOnResult = function(err: any, statusCode: number, tempTaskLog: agentifm.TaskLog) {
//		retTaskLog = <DummyTaskLog>tempTaskLog;
//	};
//    TaskApi.createLog(sendTaskLog, "testScopeIdentifier", "testHubName", "testplanId", createLogOnResult);

//	assert.equal(retTaskLog, sendTaskLog, "createLog TaskLog remains the same");
//	assert.equal(retTaskLog.verb, "POST", "createLog calls correct http method -- POST");
//    assert.equal(retTaskLog.relativeUrl, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/logs", "createLog route template formats correctly and is sent correctly");

//	//#getLog
//	var ret;
//    var getLogOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskApi.getLog("testScopeIdentifier", "testHubName", "testplanId", 1, 2, 42, getLogOnResult);

//	assert.equal(ret.verb, "GET", "getLog calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/logs/1?startline=2&endline=42", "getLog route template formats correctly and is sent correctly");

//	//#getLogs
//	var ret;
//    var getLogsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskApi.getLogs("testScopeIdentifier", "testHubName", "testplanId", getLogsOnResult);

//	assert.equal(ret.verb, "GET", "getLogs calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/logs", "getLogs route template formats correctly and is sent correctly");

//	//#getPlan
//	var ret;
//    var getPlanOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskApi.getPlan("testScopeIdentifier", "testHubName", "testplanId", getPlanOnResult);

//	assert.equal(ret.verb, "GET", "getPlan calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId", "getPlan route template formats correctly and is sent correctly");

//	//#getRecords
//	var ret;
//    var getRecordsOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskApi.getRecords("testScopeIdentifier", "testHubName", "testplanId", "testtimelineId", 42, getRecordsOnResult);

//	assert.equal(ret.verb, "GET", "getRecords calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/timelines/testtimelineId/records?changeid=42", "getRecords route template formats correctly and is sent correctly");

//	//#updateRecords
//    var sendTimelineRecord: VSSInterfaces.VssJsonCollectionWrapperV<DummyTimelineRecord[]>;
//	var retTimelineRecord;
//	var updateRecordsOnResult = function(err: any, statusCode: number, tempTimelineRecord: DummyTimelineRecord[]) {
//        retTimelineRecord = <DummyTimelineRecord[]>tempTimelineRecord;
//	};
//    TaskApi.updateRecords(sendTimelineRecord, "testScopeIdentifier", "testHubName", "testplanId", "testtimelineId", updateRecordsOnResult);

//	//assert.equal(retTimelineRecord, sendTimelineRecord, "updateRecords TimelineRecord[] remains the same");
//	//assert.equal(retTimelineRecord.verb, "PATCH", "updateRecords calls correct http method -- PATCH");
//    //assert.equal(retTimelineRecord.relativeUrl, "_apis/distributedtask/hubs/{hubName}/plans/testplanId/timelines/testtimelineId/records", "updateRecords route template formats correctly and is sent correctly");

//	//#createTimeline
//	var sendTimeline = new DummyTimeline();
//	var retTimeline;
//	var createTimelineOnResult = function(err: any, statusCode: number, tempTimeline: DummyTimeline) {
//		retTimeline = <DummyTimeline>tempTimeline;
//	};
//    TaskApi.createTimeline(sendTimeline, "testScopeIdentifier", "testHubName", "testplanId", createTimelineOnResult);

//	assert.equal(retTimeline, sendTimeline, "createTimeline Timeline remains the same");
//	assert.equal(retTimeline.verb, "POST", "createTimeline calls correct http method -- POST");
//    assert.equal(retTimeline.relativeUrl, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/timelines", "createTimeline route template formats correctly and is sent correctly");

//	//#deleteTimeline
//	var retStatusCode;
//	var deleteTimelineOnResult = function(err: any, statusCode: number) {
//	    retStatusCode = statusCode;
//	};
//    TaskApi.deleteTimeline("testScopeIdentifier", "testHubName", "testplanId", "testtimelineId", deleteTimelineOnResult);

//    assert.equal(retStatusCode, 200, "deleteTimeline went through");

//    var deleteTimelineRouteValues = {
//        scopeIdentifier: "testScopeIdentifier",
//        hubName: "testHubName",
//        planId: "testplanId",
//        timelineId: "testtimelineId",
//		area: "distributedtask",
//		resource: "timelines"
//    };

//    var path: string = restClient.formatRouteTemplate("{scopeIdentifier}/_apis/{area}/hubs/{hubName}/plans/{planId}/{resource}/{timelineId}", deleteTimelineRouteValues);

//    assert.equal(path, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/timelines/testtimelineId", "deleteTimeline route template formats correctly");

//	//#getTimeline
//	var ret;
//    var getTimelineOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskApi.getTimeline("testScopeIdentifier", "testHubName", "testplanId", "testtimelineId", 42, true, getTimelineOnResult);

//	assert.equal(ret.verb, "GET", "getTimeline calls correct http method -- GET");
//    assert.equal(ret.relativeUrl, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/testplanId/timelines/testtimelineId?changeid=42&includerecords=true", "getTimeline route template formats correctly and is sent correctly");

//	//#getTimelines test has different structure than other GET methods because the return type is a simple array
//    //TODO: handle return types that aren't full property bag objects better in tests
//	var ret;
//    var getTimelinesOnResult = function (err: any, statusCode: number, temp: any) {
//        ret = temp;
//    };
//    TaskApi.getTimelines("testScopeIdentifier", "testHubName", "planId", getTimelinesOnResult);

//    assert.notEqual(ret, null, "getTimelines went through");

//    var getTimelinesRouteValues = {
//        scopeIdentifier: "testScopeIdentifier",
//        hubName: "testHubName",
//        planId: "planId",
//        area: "distributedtask",
//        resource: "timelines"
//    };

//    var path: string = restClient.formatRouteTemplate("{scopeIdentifier}/_apis/{area}/hubs/{hubName}/plans/{planId}/{resource}/{timelineId}", getTimelinesRouteValues);

//    assert.equal(path, "testScopeIdentifier/_apis/distributedtask/hubs/testHubName/plans/planId/timelines", "getTimelines route template formats correctly");
//});