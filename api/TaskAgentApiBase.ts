/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.

/// <reference path="../node/node.d.ts"/>
/// <reference path="../q/Q.d.ts"/>

import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITaskAgentApiBase extends basem.ClientApiBase {
    addAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    deleteAgent(poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void): void;
    getAgent(poolId: number, agentId: number, includeCapabilities: boolean, propertyFilters: string[], onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    getAgents(poolId: number, agentName: string, includeCapabilities: boolean, propertyFilters: string[], demands: string[], onResult: (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => void): void;
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number, onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void): void;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint, onResult: (err: any, statusCode: number, endpoint: string[]) => void): void;
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string, onResult: (err: any, statusCode: number) => void): void;
    getAgentRequest(poolId: number, requestId: number, onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void): void;
    queueAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void): void;
    updateAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string, onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void): void;
    deleteMessage(poolId: number, messageId: number, sessionId: string, onResult: (err: any, statusCode: number) => void): void;
    getMessage(poolId: number, sessionId: string, lastMessageId: number, onResult: (err: any, statusCode: number, message: TaskAgentInterfaces.TaskAgentMessage) => void): void;
    refreshAgent(poolId: number, agentId: number, onResult: (err: any, statusCode: number) => void): void;
    refreshAgents(poolId: number, onResult: (err: any, statusCode: number) => void): void;
    sendMessage(message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number, onResult: (err: any, statusCode: number) => void): void;
    getPackage(packageType: string, onResult: (err: any, statusCode: number, _package: TaskAgentInterfaces.TaskPackageMetadata) => void): void;
    getPackages(onResult: (err: any, statusCode: number, packages: TaskAgentInterfaces.TaskPackageMetadata[]) => void): void;
    getPackageZip(packageType: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getAgentPoolRoles(poolId: number, onResult: (err: any, statusCode: number, poolroles: VSSInterfaces.IdentityRef[]) => void): void;
    addAgentPool(pool: TaskAgentInterfaces.TaskAgentPool, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void): void;
    deleteAgentPool(poolId: number, onResult: (err: any, statusCode: number) => void): void;
    getAgentPool(poolId: number, properties: string[], onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void): void;
    getAgentPools(poolName: string, properties: string[], onResult: (err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]) => void): void;
    updateAgentPool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number, onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void): void;
    getAgentQueueRoles(queueId: number, onResult: (err: any, statusCode: number, queueroles: VSSInterfaces.IdentityRef[]) => void): void;
    addAgentQueue(queue: TaskAgentInterfaces.TaskAgentQueue, onResult: (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => void): void;
    deleteAgentQueue(queueId: number, onResult: (err: any, statusCode: number) => void): void;
    getAgentQueue(queueId: number, actionFilter: TaskAgentInterfaces.TaskAgentQueueActionFilter, onResult: (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => void): void;
    getAgentQueues(queueName: string, actionFilter: TaskAgentInterfaces.TaskAgentQueueActionFilter, onResult: (err: any, statusCode: number, queues: TaskAgentInterfaces.TaskAgentQueue[]) => void): void;
    queryServiceEndpoint(binding: TaskAgentInterfaces.DataSourceBinding, scopeIdentifier: string, onResult: (err: any, statusCode: number, serviceendpointproxy: string[]) => void): void;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => void): void;
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number) => void): void;
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string, onResult: (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => void): void;
    getServiceEndpoints(scopeIdentifier: string, type: string, authSchemes: string[], onResult: (err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]) => void): void;
    getServiceEndpointTypes(scopeIdentifier: string, type: string, scheme: string, onResult: (err: any, statusCode: number, serviceendpointtypes: TaskAgentInterfaces.ServiceEndpointType[]) => void): void;
    createAgentSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number, onResult: (err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession) => void): void;
    deleteAgentSession(poolId: number, sessionId: string, onResult: (err: any, statusCode: number) => void): void;
    deleteTaskDefinition(taskId: string, onResult: (err: any, statusCode: number) => void): void;
    getTaskContentZip(taskId: string, versionString: string, visibility: string[], scopeLocal: boolean, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getTaskDefinition(taskId: string, versionString: string, visibility: string[], scopeLocal: boolean, onResult: (err: any, statusCode: number, task: TaskAgentInterfaces.TaskDefinition) => void): void;
    getTaskDefinitions(taskId: string, visibility: string[], scopeLocal: boolean, onResult: (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => void): void;
    updateAgentUserCapabilities(userCapabilities: { [key: string] : string; }, poolId: number, agentId: number, onResult: (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => void): void;
}

export interface IQTaskAgentApiBase extends basem.QClientApiBase {
    addAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    deleteAgent(poolId: number, agentId: number): Q.Promise<void>;
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, propertyFilters?: string[]): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, propertyFilters?: string[], demands?: string[]): Q.Promise<TaskAgentInterfaces.TaskAgent[]>;
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Q.Promise<string[]>;
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string): Q.Promise<void>;
    getAgentRequest(poolId: number, requestId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    queueAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    updateAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    deleteMessage(poolId: number, messageId: number, sessionId: string): Q.Promise<void>;
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): Q.Promise<TaskAgentInterfaces.TaskAgentMessage>;
    refreshAgent(poolId: number, agentId: number): Q.Promise<void>;
    refreshAgents(poolId: number): Q.Promise<void>;
    sendMessage(message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number): Q.Promise<void>;
    getPackage(packageType: string): Q.Promise<TaskAgentInterfaces.TaskPackageMetadata>;
    getPackages(): Q.Promise<TaskAgentInterfaces.TaskPackageMetadata[]>;
    getPackageZip(packageType: string): Q.Promise<NodeJS.ReadableStream>;
    getAgentPoolRoles(poolId?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    addAgentPool(pool: TaskAgentInterfaces.TaskAgentPool): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    deleteAgentPool(poolId: number): Q.Promise<void>;
    getAgentPool(poolId: number, properties?: string[]): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentPools(poolName?: string, properties?: string[]): Q.Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    updateAgentPool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentQueueRoles(queueId?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    addAgentQueue(queue: TaskAgentInterfaces.TaskAgentQueue): Q.Promise<TaskAgentInterfaces.TaskAgentQueue>;
    deleteAgentQueue(queueId: number): Q.Promise<void>;
    getAgentQueue(queueId: number, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Q.Promise<TaskAgentInterfaces.TaskAgentQueue>;
    getAgentQueues(queueName?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Q.Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    queryServiceEndpoint(binding: TaskAgentInterfaces.DataSourceBinding, scopeIdentifier: string): Q.Promise<string[]>;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): Q.Promise<void>;
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[]): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    getServiceEndpointTypes(scopeIdentifier: string, type?: string, scheme?: string): Q.Promise<TaskAgentInterfaces.ServiceEndpointType[]>;
    createAgentSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentSession>;
    deleteAgentSession(poolId: number, sessionId: string): Q.Promise<void>;
    deleteTaskDefinition(taskId: string): Q.Promise<void>;
    getTaskContentZip(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Q.Promise<NodeJS.ReadableStream>;
    getTaskDefinition(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Q.Promise<TaskAgentInterfaces.TaskDefinition>;
    getTaskDefinitions(taskId?: string, visibility?: string[], scopeLocal?: boolean): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>;
    updateAgentUserCapabilities(userCapabilities: { [key: string] : string; }, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
}

export class TaskAgentApiBase extends basem.ClientApiBase implements ITaskAgentApiBase {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-TaskAgent-api');
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    public addAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number,
        onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, agent, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function
     */
    public deleteAgent(
        poolId: number,
        agentId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {boolean} includeCapabilities
     * @param {string[]} propertyFilters
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    public getAgent(
        poolId: number,
        agentId: number,
        includeCapabilities: boolean,
        propertyFilters: string[],
        onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        var queryValues: any = {
            includeCapabilities: includeCapabilities,
            propertyFilters: propertyFilters && propertyFilters.join(","),
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} poolId
     * @param {string} agentName
     * @param {boolean} includeCapabilities
     * @param {string[]} propertyFilters
     * @param {string[]} demands
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent[]
     */
    public getAgents(
        poolId: number,
        agentName: string,
        includeCapabilities: boolean,
        propertyFilters: string[],
        demands: string[],
        onResult: (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            agentName: agentName,
            includeCapabilities: includeCapabilities,
            propertyFilters: propertyFilters && propertyFilters.join(","),
            demands: demands && demands.join(","),
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    public replaceAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number,
        agentId: number,
        onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.replace(url, apiVersion, agent, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    public updateAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number,
        agentId: number,
        onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, agent, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
     * 
     * @param {TaskAgentInterfaces.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
     * @param onResult callback function with the resulting string[]
     */
    public queryEndpoint(
        endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint,
        onResult: (err: any, statusCode: number, endpoint: string[]) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "f223b809-8c33-4b7d-b53f-07232569b5d6", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskDefinitionEndpoint, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, endpoint, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @param onResult callback function
     */
    public deleteAgentRequest(
        poolId: number,
        requestId: number,
        lockToken: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            requestId: requestId
        };

        var queryValues: any = {
            lockToken: lockToken,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentJobRequest
     */
    public getAgentRequest(
        poolId: number,
        requestId: number,
        onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            requestId: requestId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentJobRequest
     */
    public queueAgentRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number,
        onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, request, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentJobRequest
     */
    public updateAgentRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number,
        requestId: number,
        lockToken: string,
        onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            requestId: requestId
        };

        var queryValues: any = {
            lockToken: lockToken,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, request, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} poolId
     * @param {number} messageId
     * @param {string} sessionId
     * @param onResult callback function
     */
    public deleteMessage(
        poolId: number,
        messageId: number,
        sessionId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            messageId: messageId
        };

        var queryValues: any = {
            sessionId: sessionId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @param {number} lastMessageId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentMessage
     */
    public getMessage(
        poolId: number,
        sessionId: string,
        lastMessageId: number,
        onResult: (err: any, statusCode: number, message: TaskAgentInterfaces.TaskAgentMessage) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            sessionId: sessionId,
            lastMessageId: lastMessageId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentMessage, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function
     */
    public refreshAgent(
        poolId: number,
        agentId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            agentId: agentId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {number} poolId
     * @param onResult callback function
     */
    public refreshAgents(
        poolId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentMessage} message
     * @param {number} poolId
     * @param {number} requestId
     * @param onResult callback function
     */
    public sendMessage(
        message: TaskAgentInterfaces.TaskAgentMessage,
        poolId: number,
        requestId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            requestId: requestId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentMessage, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, message, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     * 
     * @param {string} packageType
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskPackageMetadata
     */
    public getPackage(
        packageType: string,
        onResult: (err: any, statusCode: number, _package: TaskAgentInterfaces.TaskPackageMetadata) => void
        ): void {

        var routeValues: any = {
            packageType: packageType
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "8ffcd551-079c-493a-9c02-54346299d144", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskPackageMetadata, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskPackageMetadata[]
     */
    public getPackages(
        onResult: (err: any, statusCode: number, packages: TaskAgentInterfaces.TaskPackageMetadata[]) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "8ffcd551-079c-493a-9c02-54346299d144", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskPackageMetadata, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
     * 
     * @param {string} packageType
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getPackageZip(
        packageType: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            packageType: packageType
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "8ffcd551-079c-493a-9c02-54346299d144", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} poolId
     * @param onResult callback function with the resulting VSSInterfaces.IdentityRef[]
     */
    public getAgentPoolRoles(
        poolId: number,
        onResult: (err: any, statusCode: number, poolroles: VSSInterfaces.IdentityRef[]) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "381dd2bb-35cf-4103-ae8c-3c815b25763c", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: VSSInterfaces.TypeInfo.IdentityRef, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentPool} pool
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool
     */
    public addAgentPool(
        pool: TaskAgentInterfaces.TaskAgentPool,
        onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, pool, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} poolId
     * @param onResult callback function
     */
    public deleteAgentPool(
        poolId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {number} poolId
     * @param {string[]} properties
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool
     */
    public getAgentPool(
        poolId: number,
        properties: string[],
        onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            properties: properties && properties.join(","),
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} poolName
     * @param {string[]} properties
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool[]
     */
    public getAgentPools(
        poolName: string,
        properties: string[],
        onResult: (err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            poolName: poolName,
            properties: properties && properties.join(","),
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentPool} pool
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool
     */
    public updateAgentPool(
        pool: TaskAgentInterfaces.TaskAgentPool,
        poolId: number,
        onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, pool, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} queueId
     * @param onResult callback function with the resulting VSSInterfaces.IdentityRef[]
     */
    public getAgentQueueRoles(
        queueId: number,
        onResult: (err: any, statusCode: number, queueroles: VSSInterfaces.IdentityRef[]) => void
        ): void {

        var routeValues: any = {
            queueId: queueId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "b0c6d64d-c9fa-4946-b8de-77de623ee585", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: VSSInterfaces.TypeInfo.IdentityRef, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentQueue} queue
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentQueue
     */
    public addAgentQueue(
        queue: TaskAgentInterfaces.TaskAgentQueue,
        onResult: (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentQueue, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentQueue, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, queue, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} queueId
     * @param onResult callback function
     */
    public deleteAgentQueue(
        queueId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            queueId: queueId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {number} queueId
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentQueue
     */
    public getAgentQueue(
        queueId: number,
        actionFilter: TaskAgentInterfaces.TaskAgentQueueActionFilter,
        onResult: (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => void
        ): void {

        var routeValues: any = {
            queueId: queueId
        };

        var queryValues: any = {
            actionFilter: actionFilter,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentQueue, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} queueName
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentQueue[]
     */
    public getAgentQueues(
        queueName: string,
        actionFilter: TaskAgentInterfaces.TaskAgentQueueActionFilter,
        onResult: (err: any, statusCode: number, queues: TaskAgentInterfaces.TaskAgentQueue[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            queueName: queueName,
            actionFilter: actionFilter,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentQueue, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     * 
     * @param {TaskAgentInterfaces.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param onResult callback function with the resulting string[]
     */
    public queryServiceEndpoint(
        binding: TaskAgentInterfaces.DataSourceBinding,
        scopeIdentifier: string,
        onResult: (err: any, statusCode: number, serviceendpointproxy: string[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "e3a44534-7b94-4add-a053-8af449589c62", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.DataSourceBinding, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, binding, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param onResult callback function with the resulting TaskAgentInterfaces.ServiceEndpoint
     */
    public createServiceEndpoint(
        endpoint: TaskAgentInterfaces.ServiceEndpoint,
        scopeIdentifier: string,
        endpointId: string,
        onResult: (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpoint, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpoint, responseIsCollection: false };
            
            this.restClient.replace(url, apiVersion, endpoint, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param onResult callback function
     */
    public deleteServiceEndpoint(
        scopeIdentifier: string,
        endpointId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     * @param onResult callback function with the resulting TaskAgentInterfaces.ServiceEndpoint
     */
    public getServiceEndpointDetails(
        scopeIdentifier: string,
        endpointId: string,
        onResult: (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpoint, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param onResult callback function with the resulting TaskAgentInterfaces.ServiceEndpoint[]
     */
    public getServiceEndpoints(
        scopeIdentifier: string,
        type: string,
        authSchemes: string[],
        onResult: (err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        var queryValues: any = {
            type: type,
            authSchemes: authSchemes && authSchemes.join(","),
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpoint, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string} scheme
     * @param onResult callback function with the resulting TaskAgentInterfaces.ServiceEndpointType[]
     */
    public getServiceEndpointTypes(
        scopeIdentifier: string,
        type: string,
        scheme: string,
        onResult: (err: any, statusCode: number, serviceendpointtypes: TaskAgentInterfaces.ServiceEndpointType[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        var queryValues: any = {
            type: type,
            scheme: scheme,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "7c74af83-8605-45c1-a30b-7a05d5d7f8c1", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpointType, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentSession} session
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentSession
     */
    public createAgentSession(
        session: TaskAgentInterfaces.TaskAgentSession,
        poolId: number,
        onResult: (err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession) => void
        ): void {

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "134e239e-2df3-4794-a6f6-24f1f19ec8dc", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, session, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @param onResult callback function
     */
    public deleteAgentSession(
        poolId: number,
        sessionId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            sessionId: sessionId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "134e239e-2df3-4794-a6f6-24f1f19ec8dc", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} taskId
     * @param onResult callback function
     */
    public deleteTaskDefinition(
        taskId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            taskId: taskId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getTaskContentZip(
        taskId: string,
        versionString: string,
        visibility: string[],
        scopeLocal: boolean,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            taskId: taskId,
            versionString: versionString
        };

        var queryValues: any = {
            visibility: visibility,
            scopeLocal: scopeLocal,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskDefinition
     */
    public getTaskDefinition(
        taskId: string,
        versionString: string,
        visibility: string[],
        scopeLocal: boolean,
        onResult: (err: any, statusCode: number, task: TaskAgentInterfaces.TaskDefinition) => void
        ): void {

        var routeValues: any = {
            taskId: taskId,
            versionString: versionString
        };

        var queryValues: any = {
            visibility: visibility,
            scopeLocal: scopeLocal,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskDefinition, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} taskId
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskDefinition[]
     */
    public getTaskDefinitions(
        taskId: string,
        visibility: string[],
        scopeLocal: boolean,
        onResult: (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => void
        ): void {

        var routeValues: any = {
            taskId: taskId
        };

        var queryValues: any = {
            visibility: visibility,
            scopeLocal: scopeLocal,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {{ [key: string] : string; }} userCapabilities
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    public updateAgentUserCapabilities(
        userCapabilities: { [key: string] : string; },
        poolId: number,
        agentId: number,
        onResult: (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => void
        ): void {

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "distributedtask", "30ba3ada-fedf-4da8-bbb5-dacf2f82e176", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.replace(url, apiVersion, userCapabilities, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QTaskAgentApiBase extends basem.QClientApiBase implements IQTaskAgentApiBase {
    api: TaskAgentApiBase;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], api: typeof basem.ClientApiBase) {
        super(baseUrl, handlers, api);
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    */
    public addAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgent> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        this.api.addAgent(agent, poolId, (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgent>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    */
    public deleteAgent(
        poolId: number,
        agentId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteAgent(poolId, agentId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    * @param {boolean} includeCapabilities
    * @param {string[]} propertyFilters
    */
    public getAgent(
        poolId: number,
        agentId: number,
        includeCapabilities?: boolean,
        propertyFilters?: string[]
        ): Q.Promise<TaskAgentInterfaces.TaskAgent> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        this.api.getAgent(poolId, agentId, includeCapabilities, propertyFilters, (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgent>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {string} agentName
    * @param {boolean} includeCapabilities
    * @param {string[]} propertyFilters
    * @param {string[]} demands
    */
    public getAgents(
        poolId: number,
        agentName?: string,
        includeCapabilities?: boolean,
        propertyFilters?: string[],
        demands?: string[]
        ): Q.Promise<TaskAgentInterfaces.TaskAgent[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent[]>();

        this.api.getAgents(poolId, agentName, includeCapabilities, propertyFilters, demands, (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agents);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgent[]>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    * @param {number} agentId
    */
    public replaceAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number,
        agentId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgent> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        this.api.replaceAgent(agent, poolId, agentId, (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgent>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    * @param {number} agentId
    */
    public updateAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number,
        agentId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgent> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        this.api.updateAgent(agent, poolId, agentId, (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgent>>deferred.promise;
    }

    /**
    * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
    * 
    * @param {TaskAgentInterfaces.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
    */
    public queryEndpoint(
        endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.api.queryEndpoint(endpoint, (err: any, statusCode: number, endpoint: string[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(endpoint);
            }
        });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {number} requestId
    * @param {string} lockToken
    */
    public deleteAgentRequest(
        poolId: number,
        requestId: number,
        lockToken: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteAgentRequest(poolId, requestId, lockToken, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {number} requestId
    */
    public getAgentRequest(
        poolId: number,
        requestId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest>();

        this.api.getAgentRequest(poolId, requestId, (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequest);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
    * @param {number} poolId
    */
    public queueAgentRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest>();

        this.api.queueAgentRequest(request, poolId, (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequest);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
    * @param {number} poolId
    * @param {number} requestId
    * @param {string} lockToken
    */
    public updateAgentRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number,
        requestId: number,
        lockToken: string
        ): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest>();

        this.api.updateAgentRequest(request, poolId, requestId, lockToken, (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequest);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {number} messageId
    * @param {string} sessionId
    */
    public deleteMessage(
        poolId: number,
        messageId: number,
        sessionId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteMessage(poolId, messageId, sessionId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {string} sessionId
    * @param {number} lastMessageId
    */
    public getMessage(
        poolId: number,
        sessionId: string,
        lastMessageId?: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentMessage> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentMessage>();

        this.api.getMessage(poolId, sessionId, lastMessageId, (err: any, statusCode: number, message: TaskAgentInterfaces.TaskAgentMessage) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(message);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentMessage>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    */
    public refreshAgent(
        poolId: number,
        agentId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.refreshAgent(poolId, agentId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {number} poolId
    */
    public refreshAgents(
        poolId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.refreshAgents(poolId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentMessage} message
    * @param {number} poolId
    * @param {number} requestId
    */
    public sendMessage(
        message: TaskAgentInterfaces.TaskAgentMessage,
        poolId: number,
        requestId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.sendMessage(message, poolId, requestId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
    * 
    * @param {string} packageType
    */
    public getPackage(
        packageType: string
        ): Q.Promise<TaskAgentInterfaces.TaskPackageMetadata> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskPackageMetadata>();

        this.api.getPackage(packageType, (err: any, statusCode: number, _package: TaskAgentInterfaces.TaskPackageMetadata) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(_package);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskPackageMetadata>>deferred.promise;
    }

    /**
    */
    public getPackages(
        ): Q.Promise<TaskAgentInterfaces.TaskPackageMetadata[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskPackageMetadata[]>();

        this.api.getPackages((err: any, statusCode: number, packages: TaskAgentInterfaces.TaskPackageMetadata[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(packages);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskPackageMetadata[]>>deferred.promise;
    }

    /**
    * This method can return packages/{packageType} -- package stream OR TaskPackageMetadata if requested for json
    * 
    * @param {string} packageType
    */
    public getPackageZip(
        packageType: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getPackageZip(packageType, (err: any, statusCode: number, _package: NodeJS.ReadableStream) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(_package);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * @param {number} poolId
    */
    public getAgentPoolRoles(
        poolId?: number
        ): Q.Promise<VSSInterfaces.IdentityRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        this.api.getAgentPoolRoles(poolId, (err: any, statusCode: number, poolroles: VSSInterfaces.IdentityRef[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(poolroles);
            }
        });

        return <Q.Promise<VSSInterfaces.IdentityRef[]>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPool} pool
    */
    public addAgentPool(
        pool: TaskAgentInterfaces.TaskAgentPool
        ): Q.Promise<TaskAgentInterfaces.TaskAgentPool> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool>();

        this.api.addAgentPool(pool, (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pool);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentPool>>deferred.promise;
    }

    /**
    * @param {number} poolId
    */
    public deleteAgentPool(
        poolId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteAgentPool(poolId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {string[]} properties
    */
    public getAgentPool(
        poolId: number,
        properties?: string[]
        ): Q.Promise<TaskAgentInterfaces.TaskAgentPool> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool>();

        this.api.getAgentPool(poolId, properties, (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pool);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentPool>>deferred.promise;
    }

    /**
    * @param {string} poolName
    * @param {string[]} properties
    */
    public getAgentPools(
        poolName?: string,
        properties?: string[]
        ): Q.Promise<TaskAgentInterfaces.TaskAgentPool[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool[]>();

        this.api.getAgentPools(poolName, properties, (err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pools);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentPool[]>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPool} pool
    * @param {number} poolId
    */
    public updateAgentPool(
        pool: TaskAgentInterfaces.TaskAgentPool,
        poolId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentPool> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool>();

        this.api.updateAgentPool(pool, poolId, (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pool);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentPool>>deferred.promise;
    }

    /**
    * @param {number} queueId
    */
    public getAgentQueueRoles(
        queueId?: number
        ): Q.Promise<VSSInterfaces.IdentityRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        this.api.getAgentQueueRoles(queueId, (err: any, statusCode: number, queueroles: VSSInterfaces.IdentityRef[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queueroles);
            }
        });

        return <Q.Promise<VSSInterfaces.IdentityRef[]>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentQueue} queue
    */
    public addAgentQueue(
        queue: TaskAgentInterfaces.TaskAgentQueue
        ): Q.Promise<TaskAgentInterfaces.TaskAgentQueue> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentQueue>();

        this.api.addAgentQueue(queue, (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queue);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentQueue>>deferred.promise;
    }

    /**
    * @param {number} queueId
    */
    public deleteAgentQueue(
        queueId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteAgentQueue(queueId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {number} queueId
    * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
    */
    public getAgentQueue(
        queueId: number,
        actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter
        ): Q.Promise<TaskAgentInterfaces.TaskAgentQueue> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentQueue>();

        this.api.getAgentQueue(queueId, actionFilter, (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queue);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentQueue>>deferred.promise;
    }

    /**
    * @param {string} queueName
    * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
    */
    public getAgentQueues(
        queueName?: string,
        actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter
        ): Q.Promise<TaskAgentInterfaces.TaskAgentQueue[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentQueue[]>();

        this.api.getAgentQueues(queueName, actionFilter, (err: any, statusCode: number, queues: TaskAgentInterfaces.TaskAgentQueue[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queues);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentQueue[]>>deferred.promise;
    }

    /**
    * Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
    * 
    * @param {TaskAgentInterfaces.DataSourceBinding} binding - Describes the data source to fetch.
    * @param {string} scopeIdentifier - The project GUID to scope the request
    */
    public queryServiceEndpoint(
        binding: TaskAgentInterfaces.DataSourceBinding,
        scopeIdentifier: string
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.api.queryServiceEndpoint(binding, scopeIdentifier, (err: any, statusCode: number, serviceendpointproxy: string[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpointproxy);
            }
        });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} endpointId
    */
    public createServiceEndpoint(
        endpoint: TaskAgentInterfaces.ServiceEndpoint,
        scopeIdentifier: string,
        endpointId: string
        ): Q.Promise<TaskAgentInterfaces.ServiceEndpoint> {
    
        var deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint>();

        this.api.createServiceEndpoint(endpoint, scopeIdentifier, endpointId, (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoint);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.ServiceEndpoint>>deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} endpointId
    */
    public deleteServiceEndpoint(
        scopeIdentifier: string,
        endpointId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteServiceEndpoint(scopeIdentifier, endpointId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} endpointId
    */
    public getServiceEndpointDetails(
        scopeIdentifier: string,
        endpointId: string
        ): Q.Promise<TaskAgentInterfaces.ServiceEndpoint> {
    
        var deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint>();

        this.api.getServiceEndpointDetails(scopeIdentifier, endpointId, (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoint);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.ServiceEndpoint>>deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} type
    * @param {string[]} authSchemes
    */
    public getServiceEndpoints(
        scopeIdentifier: string,
        type?: string,
        authSchemes?: string[]
        ): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint[]>();

        this.api.getServiceEndpoints(scopeIdentifier, type, authSchemes, (err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoints);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]>>deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} type
    * @param {string} scheme
    */
    public getServiceEndpointTypes(
        scopeIdentifier: string,
        type?: string,
        scheme?: string
        ): Q.Promise<TaskAgentInterfaces.ServiceEndpointType[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.ServiceEndpointType[]>();

        this.api.getServiceEndpointTypes(scopeIdentifier, type, scheme, (err: any, statusCode: number, serviceendpointtypes: TaskAgentInterfaces.ServiceEndpointType[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpointtypes);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.ServiceEndpointType[]>>deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentSession} session
    * @param {number} poolId
    */
    public createAgentSession(
        session: TaskAgentInterfaces.TaskAgentSession,
        poolId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentSession> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentSession>();

        this.api.createAgentSession(session, poolId, (err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(session);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentSession>>deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {string} sessionId
    */
    public deleteAgentSession(
        poolId: number,
        sessionId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteAgentSession(poolId, sessionId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {string} taskId
    */
    public deleteTaskDefinition(
        taskId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteTaskDefinition(taskId, (err: any, statusCode: number) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {string} taskId
    * @param {string} versionString
    * @param {string[]} visibility
    * @param {boolean} scopeLocal
    */
    public getTaskContentZip(
        taskId: string,
        versionString: string,
        visibility?: string[],
        scopeLocal?: boolean
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getTaskContentZip(taskId, versionString, visibility, scopeLocal, (err: any, statusCode: number, task: NodeJS.ReadableStream) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(task);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * @param {string} taskId
    * @param {string} versionString
    * @param {string[]} visibility
    * @param {boolean} scopeLocal
    */
    public getTaskDefinition(
        taskId: string,
        versionString: string,
        visibility?: string[],
        scopeLocal?: boolean
        ): Q.Promise<TaskAgentInterfaces.TaskDefinition> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskDefinition>();

        this.api.getTaskDefinition(taskId, versionString, visibility, scopeLocal, (err: any, statusCode: number, task: TaskAgentInterfaces.TaskDefinition) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(task);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskDefinition>>deferred.promise;
    }

    /**
    * @param {string} taskId
    * @param {string[]} visibility
    * @param {boolean} scopeLocal
    */
    public getTaskDefinitions(
        taskId?: string,
        visibility?: string[],
        scopeLocal?: boolean
        ): Q.Promise<TaskAgentInterfaces.TaskDefinition[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskDefinition[]>();

        this.api.getTaskDefinitions(taskId, visibility, scopeLocal, (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tasks);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskDefinition[]>>deferred.promise;
    }

    /**
    * @param {{ [key: string] : string; }} userCapabilities
    * @param {number} poolId
    * @param {number} agentId
    */
    public updateAgentUserCapabilities(
        userCapabilities: { [key: string] : string; },
        poolId: number,
        agentId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgent> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        this.api.updateAgentUserCapabilities(userCapabilities, poolId, agentId, (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(usercapabilitie);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAgent>>deferred.promise;
    }

}
