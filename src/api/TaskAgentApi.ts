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

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.

/// <reference path="./definitions/node.d.ts"/>
/// <reference path="./definitions/Q.d.ts"/>

import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITaskAgentApi extends basem.ClientApiBase {
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
    updateUserCapabilities(userCapabilities: { [key: string] : string; }, poolId: number, agentId: number, onResult: (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => void): void;
}

export interface IQTaskAgentApi extends basem.QClientApiBase {
    
    createAgent(agent: TaskAgentInterfaces.TaskAgent,  poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean,  propertyFilters?: string): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, propertyFilters?: string,  demands?: string): Q.Promise<TaskAgentInterfaces.TaskAgent[]>;
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number,  agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number,  agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    queryEndpoint( endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Q.Promise<string[]>;
    getRequest(poolId: number,  requestId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    queueRequest(request: TaskAgentInterfaces.TaskAgentJobRequest,  poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    updateRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number,  lockToken: string): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    getMessage(poolId: number, sessionId: string,  lastMessageId?: number): Q.Promise<TaskAgentInterfaces.TaskAgentMessage>;
    createPool( pool: TaskAgentInterfaces.TaskAgentPool): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getPool(poolId: number,  properties?: string): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getPools(poolName?: string,  properties?: string): Q.Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    updatePool(pool: TaskAgentInterfaces.TaskAgentPool,  poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentPoolRoles( poolId?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string,  endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpointDetails(scopeIdentifier: string,  endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpoints(scopeIdentifier: string,  type?: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    createSession(session: TaskAgentInterfaces.TaskAgentSession,  poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentSession>;
    getTaskContent(taskId: string,  versionString?: string): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>;
    getTaskDefinitions( visibility: string[]): Q.Promise<TaskAgentInterfaces.TaskDefinition[]>;
    updateUserCapabilities(userCapabilities: { [key: string] : string; }, poolId: number,  agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
}

export class TaskAgentApi extends basem.ClientApiBase implements ITaskAgentApi {

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-TaskAgent-api');
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    public createAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number,
        onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
        ): void {

        var routeValues = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, agent, serializationData, onResult);
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

        var routeValues = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {boolean} includeCapabilities
     * @param {string} propertyFilters
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    public getAgent(
        poolId: number,
        agentId: number,
        includeCapabilities: boolean,
        propertyFilters: string,
        onResult: (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => void
        ): void {

        var routeValues = {
            poolId: poolId,
            agentId: agentId
        };

        var queryValues = {
            includeCapabilities: includeCapabilities,
            propertyFilters: propertyFilters
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {number} poolId
     * @param {string} agentName
     * @param {boolean} includeCapabilities
     * @param {string} propertyFilters
     * @param {string} demands
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent[]
     */
    public getAgents(
        poolId: number,
        agentName: string,
        includeCapabilities: boolean,
        propertyFilters: string,
        demands: string,
        onResult: (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => void
        ): void {

        var routeValues = {
            poolId: poolId
        };

        var queryValues = {
            agentName: agentName,
            includeCapabilities: includeCapabilities,
            propertyFilters: propertyFilters,
            demands: demands
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
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

        var routeValues = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.replace(path, apiVersion, agent, serializationData, onResult);
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

        var routeValues = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.update(path, apiVersion, agent, serializationData, onResult);
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

        var routeValues = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "f223b809-8c33-4b7d-b53f-07232569b5d6", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskDefinitionEndpoint, responseIsCollection: true };
            
            this.restClient.create(path, apiVersion, endpoint, serializationData, onResult);
        });
    }

    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @param onResult callback function
     */
    public deleteRequest(
        poolId: number,
        requestId: number,
        lockToken: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            poolId: poolId,
            requestId: requestId
        };

        var queryValues = {
            lockToken: lockToken
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentJobRequest
     */
    public getRequest(
        poolId: number,
        requestId: number,
        onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void
        ): void {

        var routeValues = {
            poolId: poolId,
            requestId: requestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentJobRequest
     */
    public queueRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number,
        onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void
        ): void {

        var routeValues = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, request, serializationData, onResult);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentJobRequest
     */
    public updateRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number,
        requestId: number,
        lockToken: string,
        onResult: (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => void
        ): void {

        var routeValues = {
            poolId: poolId,
            requestId: requestId
        };

        var queryValues = {
            lockToken: lockToken
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
            
            this.restClient.update(path, apiVersion, request, serializationData, onResult);
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

        var routeValues = {
            poolId: poolId,
            messageId: messageId
        };

        var queryValues = {
            sessionId: sessionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
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

        var routeValues = {
            poolId: poolId
        };

        var queryValues = {
            sessionId: sessionId,
            lastMessageId: lastMessageId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentMessage, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
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

        var routeValues = {
            poolId: poolId
        };

        var queryValues = {
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, null, serializationData, onResult);
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

        var routeValues = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, null, serializationData, onResult);
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

        var routeValues = {
            poolId: poolId
        };

        var queryValues = {
            requestId: requestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentMessage, responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, message, serializationData, onResult);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentPool} pool
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool
     */
    public createPool(
        pool: TaskAgentInterfaces.TaskAgentPool,
        onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
        ): void {

        var routeValues = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, pool, serializationData, onResult);
        });
    }

    /**
     * @param {number} poolId
     * @param onResult callback function
     */
    public deletePool(
        poolId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {number} poolId
     * @param {string} properties
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool
     */
    public getPool(
        poolId: number,
        properties: string,
        onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
        ): void {

        var routeValues = {
            poolId: poolId
        };

        var queryValues = {
            properties: properties
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {string} poolName
     * @param {string} properties
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool[]
     */
    public getPools(
        poolName: string,
        properties: string,
        onResult: (err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]) => void
        ): void {

        var routeValues = {
        };

        var queryValues = {
            poolName: poolName,
            properties: properties
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentPool} pool
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentPool
     */
    public updatePool(
        pool: TaskAgentInterfaces.TaskAgentPool,
        poolId: number,
        onResult: (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => void
        ): void {

        var routeValues = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
            
            this.restClient.update(path, apiVersion, pool, serializationData, onResult);
        });
    }

    /**
     * @param {number} poolId
     * @param onResult callback function with the resulting VSSInterfaces.IdentityRef[]
     */
    public getAgentPoolRoles(
        poolId: number,
        onResult: (err: any, statusCode: number, roles: VSSInterfaces.IdentityRef[]) => void
        ): void {

        var routeValues = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "9e627af6-3635-4ddf-a275-dca904802338", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: VSSInterfaces.TypeInfo.IdentityRef, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
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

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpoint, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpoint, responseIsCollection: false };
            
            this.restClient.replace(path, apiVersion, endpoint, serializationData, onResult);
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

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
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

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpoint, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param onResult callback function with the resulting TaskAgentInterfaces.ServiceEndpoint[]
     */
    public getServiceEndpoints(
        scopeIdentifier: string,
        type: string,
        onResult: (err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier
        };

        var queryValues = {
            type: type
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpoint, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentSession} session
     * @param {number} poolId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgentSession
     */
    public createSession(
        session: TaskAgentInterfaces.TaskAgentSession,
        poolId: number,
        onResult: (err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession) => void
        ): void {

        var routeValues = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "134e239e-2df3-4794-a6f6-24f1f19ec8dc", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, session, serializationData, onResult);
        });
    }

    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @param onResult callback function
     */
    public deleteSession(
        poolId: number,
        sessionId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            poolId: poolId,
            sessionId: sessionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "134e239e-2df3-4794-a6f6-24f1f19ec8dc", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
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

        var routeValues = {
            taskId: taskId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskDefinition[]
     */
    public getTaskContent(
        taskId: string,
        versionString: string,
        onResult: (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => void
        ): void {

        var routeValues = {
            taskId: taskId,
            versionString: versionString
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskDefinition, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getTaskContentZip(
        taskId: string,
        versionString: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues = {
            taskId: taskId,
            versionString: versionString
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(path, apiVersion, "application/zip", onResult);
        });
    }

    /**
     * @param {string[]} visibility
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskDefinition[]
     */
    public getTaskDefinitions(
        visibility: string[],
        onResult: (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => void
        ): void {

        var routeValues = {
        };

        var queryValues = {
            visibility: visibility
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskDefinition, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {string} taskId
     * @param {boolean} overwrite
     * @param onResult callback function
     */
    public uploadTaskDefinition(
        taskId: string,
        overwrite: boolean,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            taskId: taskId
        };

        var queryValues = {
            overwrite: overwrite
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.replace(path, apiVersion, null, serializationData, onResult);
        });
    }

    /**
     * @param {{ [key: string] : string; }} userCapabilities
     * @param {number} poolId
     * @param {number} agentId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAgent
     */
    public updateUserCapabilities(
        userCapabilities: { [key: string] : string; },
        poolId: number,
        agentId: number,
        onResult: (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => void
        ): void {

        var routeValues = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "30ba3ada-fedf-4da8-bbb5-dacf2f82e176", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
            
            this.restClient.replace(path, apiVersion, userCapabilities, serializationData, onResult);
        });
    }

}

export class QTaskAgentApi extends basem.QClientApiBase implements IQTaskAgentApi {
    
    api: TaskAgentApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, TaskAgentApi);
    }

    
    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    */
    public createAgent(
        agent: TaskAgentInterfaces.TaskAgent, 
        poolId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgent> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        this.api.createAgent(agent, poolId, (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
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
    * @param {boolean} includeCapabilities
    * @param {string} propertyFilters
    */
    public getAgent(
        poolId: number, 
        agentId: number, 
        includeCapabilities?: boolean, 
        propertyFilters?: string
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
    * @param {string} propertyFilters
    * @param {string} demands
    */
    public getAgents(
        poolId: number, 
        agentName?: string, 
        includeCapabilities?: boolean, 
        propertyFilters?: string, 
        demands?: string
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
    */
    public getRequest(
        poolId: number, 
        requestId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest>();

        this.api.getRequest(poolId, requestId, (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
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
    public queueRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest, 
        poolId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest>();

        this.api.queueRequest(request, poolId, (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
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
    public updateRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest, 
        poolId: number, 
        requestId: number, 
        lockToken: string
        ): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest>();

        this.api.updateRequest(request, poolId, requestId, lockToken, (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
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
    * @param {TaskAgentInterfaces.TaskAgentPool} pool
    */
    public createPool(
        pool: TaskAgentInterfaces.TaskAgentPool
        ): Q.Promise<TaskAgentInterfaces.TaskAgentPool> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool>();

        this.api.createPool(pool, (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
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
    * @param {string} properties
    */
    public getPool(
        poolId: number, 
        properties?: string
        ): Q.Promise<TaskAgentInterfaces.TaskAgentPool> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool>();

        this.api.getPool(poolId, properties, (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
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
    * @param {string} properties
    */
    public getPools(
        poolName?: string, 
        properties?: string
        ): Q.Promise<TaskAgentInterfaces.TaskAgentPool[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool[]>();

        this.api.getPools(poolName, properties, (err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]) => {
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
    public updatePool(
        pool: TaskAgentInterfaces.TaskAgentPool, 
        poolId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentPool> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool>();

        this.api.updatePool(pool, poolId, (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
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
    public getAgentPoolRoles(
        poolId?: number
        ): Q.Promise<VSSInterfaces.IdentityRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        this.api.getAgentPoolRoles(poolId, (err: any, statusCode: number, roles: VSSInterfaces.IdentityRef[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(roles);
            }
        });

        return <Q.Promise<VSSInterfaces.IdentityRef[]>>deferred.promise;
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
    */
    public getServiceEndpoints(
        scopeIdentifier: string, 
        type?: string
        ): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint[]>();

        this.api.getServiceEndpoints(scopeIdentifier, type, (err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]) => {
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
    * @param {TaskAgentInterfaces.TaskAgentSession} session
    * @param {number} poolId
    */
    public createSession(
        session: TaskAgentInterfaces.TaskAgentSession, 
        poolId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentSession> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentSession>();

        this.api.createSession(session, poolId, (err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession) => {
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
    * @param {string} taskId
    * @param {string} versionString
    */
    public getTaskContent(
        taskId: string, 
        versionString?: string
        ): Q.Promise<TaskAgentInterfaces.TaskDefinition[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskDefinition[]>();

        this.api.getTaskContent(taskId, versionString, (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => {
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
    * @param {string[]} visibility
    */
    public getTaskDefinitions(
        visibility: string[]
        ): Q.Promise<TaskAgentInterfaces.TaskDefinition[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskDefinition[]>();

        this.api.getTaskDefinitions(visibility, (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => {
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
    public updateUserCapabilities(
        userCapabilities: { [key: string] : string; }, 
        poolId: number, 
        agentId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgent> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        this.api.updateUserCapabilities(userCapabilities, poolId, agentId, (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => {
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
