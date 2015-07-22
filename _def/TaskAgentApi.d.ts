/// <reference path="../../src/api/definitions/node.d.ts" />
/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
export interface ITaskAgentApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    createAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    deleteAgent(poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void): void;
    getAgent(poolId: number, agentId: number, includeCapabilities: boolean, propertyFilters: string, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    getAgents(poolId: number, agentName: string, includeCapabilities: boolean, propertyFilters: string, demands: string, onResult: (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => void): void;
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint, onResult: (err: any, statusCode: number, endpoint: string[]) => void): void;
    deleteRequest(poolId: number, requestId: number, lockToken: string, onResult: (err: any, statusCode: number) => void): void;
    getRequest(poolId: number, requestId: number, onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void): void;
    queueRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void): void;
    updateRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string, onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void): void;
    deleteMessage(poolId: number, messageId: number, sessionId: string, onResult: (err: any, statusCode: number) => void): void;
    getMessage(poolId: number, sessionId: string, lastMessageId: number, onResult: (err: any, statusCode: number, message: TaskAgentInterfaces.TaskAgentMessage) => void): void;
    refreshAgent(poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void): void;
    refreshAgents(poolId: number, onResult: (err: any, statusCode: number) => void): void;
    sendMessage(message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number, onResult: (err: any, statusCode: number) => void): void;
    createPool(pool: TaskAgentInterfaces.TaskAgentPool, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void): void;
    deletePool(poolId: number, onResult: (err: any, statusCode: number) => void): void;
    getPool(poolId: number, properties: string, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void): void;
    getPools(poolName: string, properties: string, onResult: (err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]) => void): void;
    updatePool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void): void;
    getAgentPoolRoles(poolId: number, onResult: (err: any, statusCode: number, roles: VSSInterfaces.IdentityRef[]) => void): void;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => void): void;
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number) => void): void;
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => void): void;
    getServiceEndpoints(scopeIdentifier: string, type: string, onResult: (err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]) => void): void;
    createSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number, onResult: (err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession) => void): void;
    deleteSession(poolId: number, sessionId: string, onResult: (err: any, statusCode: number) => void): void;
    deleteTaskDefinition(taskId: string, onResult: (err: any, statusCode: number) => void): void;
    getTaskContent(taskId: string, versionString: string, onResult: (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => void): void;
    getTaskContentZip(taskId: string, versionString: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getTaskDefinitions(visibility: string[], onResult: (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => void): void;
    uploadTaskDefinition(taskId: string, overwrite: boolean, onResult: (err: any, statusCode: number) => void): void;
    updateUserCapabilities(userCapabilities: {
        [key: string]: string;
    }, poolId: number, agentId: number, onResult: (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => void): void;
}
export interface IQTaskAgentApi {
    connect(): Q.Promise<void>;
    createAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, propertyFilters?: string): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, propertyFilters?: string, demands?: string): Q.Promise<TaskAgentInterfaces.TaskAgent[]>;
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Q.Promise<string[]>;
    getRequest(poolId: number, requestId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    queueRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    updateRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): Q.Promise<TaskAgentInterfaces.TaskAgentMessage>;
    createPool(pool: TaskAgentInterfaces.TaskAgentPool): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getPool(poolId: number, properties?: string): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getPools(poolName?: string, properties?: string): Q.Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    updatePool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentPoolRoles(poolId?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpoints(scopeIdentifier: string, type?: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    createSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentSession>;
    getTaskContent(taskId: string, versionString?: string): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>;
    getTaskDefinitions(visibility: string[]): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>;
    updateUserCapabilities(userCapabilities: {
        [key: string]: string;
    }, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
}
export declare class TaskAgentApi implements ITaskAgentApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    setUserAgent(userAgent: string): void;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    createAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function
     */
    deleteAgent(poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {boolean} includeCapabilities
     * @param {string} propertyFilters
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    getAgent(poolId: number, agentId: number, includeCapabilities: boolean, propertyFilters: string, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    /**
     * @param {number} poolId
     * @param {string} agentName
     * @param {boolean} includeCapabilities
     * @param {string} propertyFilters
     * @param {string} demands
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent[]
     */
    getAgents(poolId: number, agentName: string, includeCapabilities: boolean, propertyFilters: string, demands: string, onResult: (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    /**
     * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
     *
     * @param {TaskAgentInterfaces.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
     * @param onResult callback function with the resulting string[]
     */
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint, onResult: (err: any, statusCode: number, endpoint: string[]) => void): void;
    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @param onResult callback function
     */
    deleteRequest(poolId: number, requestId: number, lockToken: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentJobRequest
     */
    getRequest(poolId: number, requestId: number, onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentJobRequest
     */
    queueRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentJobRequest
     */
    updateRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string, onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void): void;
    /**
     * @param {number} poolId
     * @param {number} messageId
     * @param {string} sessionId
     * @param onResult callback function
     */
    deleteMessage(poolId: number, messageId: number, sessionId: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @param {number} lastMessageId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentMessage
     */
    getMessage(poolId: number, sessionId: string, lastMessageId: number, onResult: (err: any, statusCode: number, message: TaskAgentInterfaces.TaskAgentMessage) => void): void;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function
     */
    refreshAgent(poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {number} poolId
     * @param onResult callback function
     */
    refreshAgents(poolId: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskAgentMessage} message
     * @param {number} poolId
     * @param {number} requestId
     * @param onResult callback function
     */
    sendMessage(message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskAgentPool} pool
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool
     */
    createPool(pool: TaskAgentInterfaces.TaskAgentPool, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void): void;
    /**
     * @param {number} poolId
     * @param onResult callback function
     */
    deletePool(poolId: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {number} poolId
     * @param {string} properties
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool
     */
    getPool(poolId: number, properties: string, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void): void;
    /**
     * @param {string} poolName
     * @param {string} properties
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool[]
     */
    getPools(poolName: string, properties: string, onResult: (err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskAgentPool} pool
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool
     */
    updatePool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void): void;
    /**
     * @param {number} poolId
     * @param onResult callback function with the resulting VSSInterfaces.IdentityRef[]
     */
    getAgentPoolRoles(poolId: number, onResult: (err: any, statusCode: number, roles: VSSInterfaces.IdentityRef[]) => void): void;
    /**
     * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param onResult callback function with the resulting TaskAgentInterfaces.ServiceEndpoint
     */
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param onResult callback function
     */
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param onResult callback function with the resulting TaskAgentInterfaces.ServiceEndpoint
     */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param onResult callback function with the resulting TaskAgentInterfaces.ServiceEndpoint[]
     */
    getServiceEndpoints(scopeIdentifier: string, type: string, onResult: (err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskAgentSession} session
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentSession
     */
    createSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number, onResult: (err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession) => void): void;
    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @param onResult callback function
     */
    deleteSession(poolId: number, sessionId: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} taskId
     * @param onResult callback function
     */
    deleteTaskDefinition(taskId: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskDefinition[]
     */
    getTaskContent(taskId: string, versionString: string, onResult: (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => void): void;
    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param onResult callback function with the resulting ArrayBuffer
     */
    getTaskContentZip(taskId: string, versionString: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * @param {string[]} visibility
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskDefinition[]
     */
    getTaskDefinitions(visibility: string[], onResult: (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => void): void;
    /**
     * @param {string} taskId
     * @param {boolean} overwrite
     * @param onResult callback function
     */
    uploadTaskDefinition(taskId: string, overwrite: boolean, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {{ [key: string] : string; }} userCapabilities
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    updateUserCapabilities(userCapabilities: {
        [key: string]: string;
    }, poolId: number, agentId: number, onResult: (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => void): void;
}
export declare class QTaskAgentApi implements IQTaskAgentApi {
    TaskAgentApi: ITaskAgentApi;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    connect(): Q.Promise<any>;
    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    */
    createAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    /**
    * @param {number} poolId
    * @param {number} agentId
    * @param {boolean} includeCapabilities
    * @param {string} propertyFilters
    */
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, propertyFilters?: string): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    /**
    * @param {number} poolId
    * @param {string} agentName
    * @param {boolean} includeCapabilities
    * @param {string} propertyFilters
    * @param {string} demands
    */
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, propertyFilters?: string, demands?: string): Q.Promise<TaskAgentInterfaces.TaskAgent[]>;
    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    * @param {number} agentId
    */
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    * @param {number} agentId
    */
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    /**
    * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
    *
    * @param {TaskAgentInterfaces.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
    */
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Q.Promise<string[]>;
    /**
    * @param {number} poolId
    * @param {number} requestId
    */
    getRequest(poolId: number, requestId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    /**
    * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
    * @param {number} poolId
    */
    queueRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    /**
    * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
    * @param {number} poolId
    * @param {number} requestId
    * @param {string} lockToken
    */
    updateRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    /**
    * @param {number} poolId
    * @param {string} sessionId
    * @param {number} lastMessageId
    */
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): Q.Promise<TaskAgentInterfaces.TaskAgentMessage>;
    /**
    * @param {TaskAgentInterfaces.TaskAgentPool} pool
    */
    createPool(pool: TaskAgentInterfaces.TaskAgentPool): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    /**
    * @param {number} poolId
    * @param {string} properties
    */
    getPool(poolId: number, properties?: string): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    /**
    * @param {string} poolName
    * @param {string} properties
    */
    getPools(poolName?: string, properties?: string): Q.Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    /**
    * @param {TaskAgentInterfaces.TaskAgentPool} pool
    * @param {number} poolId
    */
    updatePool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    /**
    * @param {number} poolId
    */
    getAgentPoolRoles(poolId?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    /**
    * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} endpointId
    */
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} endpointId
    */
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} type
    */
    getServiceEndpoints(scopeIdentifier: string, type?: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    /**
    * @param {TaskAgentInterfaces.TaskAgentSession} session
    * @param {number} poolId
    */
    createSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentSession>;
    /**
    * @param {string} taskId
    * @param {string} versionString
    */
    getTaskContent(taskId: string, versionString?: string): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>;
    /**
    * @param {string[]} visibility
    */
    getTaskDefinitions(visibility: string[]): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>;
    /**
    * @param {{ [key: string] : string; }} userCapabilities
    * @param {number} poolId
    * @param {number} agentId
    */
    updateUserCapabilities(userCapabilities: {
        [key: string]: string;
    }, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
}
