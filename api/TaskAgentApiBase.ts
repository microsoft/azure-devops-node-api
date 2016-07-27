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


import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITaskAgentApiBase extends basem.ClientApiBase {
    addAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    deleteAgent(poolId: number, agentId: number): Q.Promise<void>;
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[]): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[], demands?: string[]): Q.Promise<TaskAgentInterfaces.TaskAgent[]>;
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Q.Promise<TaskAgentInterfaces.TaskAgent>;
    getAzureSubscriptions(scopeIdentifier: string): Q.Promise<TaskAgentInterfaces.AzureSubscription[]>;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Q.Promise<string[]>;
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string): Q.Promise<void>;
    getAgentRequest(poolId: number, requestId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    getAgentRequestsForAgent(poolId: number, agentId: number, completedRequestCount?: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForAgents(poolId: number, agentIds: number[], completedRequestCount?: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForPlan(poolId: number, planId: string, jobId?: string): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    queueAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    updateAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    deleteMessage(poolId: number, messageId: number, sessionId: string): Q.Promise<void>;
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): Q.Promise<TaskAgentInterfaces.TaskAgentMessage>;
    refreshAgent(poolId: number, agentId: number): Q.Promise<void>;
    refreshAgents(poolId: number): Q.Promise<void>;
    sendMessage(message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number): Q.Promise<void>;
    addMetaTaskDefinition(definition: TaskAgentInterfaces.MetaTaskDefinition, project: string): Q.Promise<TaskAgentInterfaces.MetaTaskDefinition>;
    deleteMetaTaskDefinition(project: string, metaTaskDefinitionId: string): Q.Promise<void>;
    getMetaTaskDefinitions(project: string, metaTaskDefinitionId?: string, expanded?: boolean): Q.Promise<TaskAgentInterfaces.MetaTaskDefinition[]>;
    updateMetaTaskDefinition(definition: TaskAgentInterfaces.MetaTaskDefinition, project: string): Q.Promise<TaskAgentInterfaces.MetaTaskDefinition>;
    getPackage(packageType: string, platform: string, version: string): Q.Promise<TaskAgentInterfaces.PackageMetadata>;
    getPackages(packageType?: string, platform?: string, top?: number): Q.Promise<TaskAgentInterfaces.PackageMetadata[]>;
    getAgentPoolRoles(poolId?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    addAgentPool(pool: TaskAgentInterfaces.TaskAgentPool): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    deleteAgentPool(poolId: number): Q.Promise<void>;
    getAgentPool(poolId: number, properties?: string[]): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentPools(poolName?: string, properties?: string[]): Q.Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    updateAgentPool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number): Q.Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentQueueRoles(queueId?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    addAgentQueue(queue: TaskAgentInterfaces.TaskAgentQueue, project?: string): Q.Promise<TaskAgentInterfaces.TaskAgentQueue>;
    createQueuesForAgentPools(project?: string): Q.Promise<void>;
    deleteAgentQueue(queueId: number, project?: string): Q.Promise<void>;
    getAgentQueue(queueId: number, project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Q.Promise<TaskAgentInterfaces.TaskAgentQueue>;
    getAgentQueues(project?: string, queueName?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Q.Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    queryDataProvider(binding: TaskAgentInterfaces.DataSourceBinding, scopeIdentifier: string, endpointId: string): Q.Promise<any>;
    queryServiceEndpoint(binding: TaskAgentInterfaces.DataSourceBinding, scopeIdentifier: string): Q.Promise<string[]>;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): Q.Promise<void>;
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[]): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    updateServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string): Q.Promise<TaskAgentInterfaces.ServiceEndpoint>;
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
     */
    public addAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgent> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        var onResult = (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, agent, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {boolean} includeCapabilities
     * @param {boolean} includeAssignedRequest
     * @param {string[]} propertyFilters
     */
    public getAgent(
        poolId: number,
        agentId: number,
        includeCapabilities?: boolean,
        includeAssignedRequest?: boolean,
        propertyFilters?: string[]
        ): Q.Promise<TaskAgentInterfaces.TaskAgent> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        var onResult = (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        var queryValues: any = {
            includeCapabilities: includeCapabilities,
            includeAssignedRequest: includeAssignedRequest,
            propertyFilters: propertyFilters && propertyFilters.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgent>>deferred.promise;
    }

    /**
     * @param {number} poolId
     * @param {string} agentName
     * @param {boolean} includeCapabilities
     * @param {boolean} includeAssignedRequest
     * @param {string[]} propertyFilters
     * @param {string[]} demands
     */
    public getAgents(
        poolId: number,
        agentName?: string,
        includeCapabilities?: boolean,
        includeAssignedRequest?: boolean,
        propertyFilters?: string[],
        demands?: string[]
        ): Q.Promise<TaskAgentInterfaces.TaskAgent[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgent[]>();

        var onResult = (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agents);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            agentName: agentName,
            includeCapabilities: includeCapabilities,
            includeAssignedRequest: includeAssignedRequest,
            propertyFilters: propertyFilters && propertyFilters.join(","),
            demands: demands && demands.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, agent, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, agent, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgent>>deferred.promise;
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     */
    public getAzureSubscriptions(
        scopeIdentifier: string
        ): Q.Promise<TaskAgentInterfaces.AzureSubscription[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.AzureSubscription[]>();

        var onResult = (err: any, statusCode: number, azurermsubscriptions: TaskAgentInterfaces.AzureSubscription[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(azurermsubscriptions);
            }
        };

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "bcd6189c-0303-471f-a8e1-acb22b74d700", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.AzureSubscription[]>>deferred.promise;
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

        var onResult = (err: any, statusCode: number, endpoint: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(endpoint);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "f223b809-8c33-4b7d-b53f-07232569b5d6", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, endpoint, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            requestId: requestId
        };

        var queryValues: any = {
            lockToken: lockToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequest);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            requestId: requestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest>>deferred.promise;
    }

    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {number} completedRequestCount
     */
    public getAgentRequestsForAgent(
        poolId: number,
        agentId: number,
        completedRequestCount?: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest[]>();

        var onResult = (err: any, statusCode: number, jobrequests: TaskAgentInterfaces.TaskAgentJobRequest[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequests);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            agentId: agentId,
            completedRequestCount: completedRequestCount,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>>deferred.promise;
    }

    /**
     * @param {number} poolId
     * @param {number[]} agentIds
     * @param {number} completedRequestCount
     */
    public getAgentRequestsForAgents(
        poolId: number,
        agentIds: number[],
        completedRequestCount?: number
        ): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest[]>();

        var onResult = (err: any, statusCode: number, jobrequests: TaskAgentInterfaces.TaskAgentJobRequest[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequests);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            agentIds: agentIds && agentIds.join(","),
            completedRequestCount: completedRequestCount,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>>deferred.promise;
    }

    /**
     * @param {number} poolId
     * @param {string} planId
     * @param {string} jobId
     */
    public getAgentRequestsForPlan(
        poolId: number,
        planId: string,
        jobId?: string
        ): Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest[]>();

        var onResult = (err: any, statusCode: number, jobrequests: TaskAgentInterfaces.TaskAgentJobRequest[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequests);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            planId: planId,
            jobId: jobId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>>deferred.promise;
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

        var onResult = (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequest);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, request, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequest);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            requestId: requestId
        };

        var queryValues: any = {
            lockToken: lockToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, request, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            messageId: messageId
        };

        var queryValues: any = {
            sessionId: sessionId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number, message: TaskAgentInterfaces.TaskAgentMessage) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(message);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            sessionId: sessionId,
            lastMessageId: lastMessageId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            agentId: agentId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            requestId: requestId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, message, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {TaskAgentInterfaces.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     */
    public addMetaTaskDefinition(
        definition: TaskAgentInterfaces.MetaTaskDefinition,
        project: string
        ): Q.Promise<TaskAgentInterfaces.MetaTaskDefinition> {
    
        var deferred = Q.defer<TaskAgentInterfaces.MetaTaskDefinition>();

        var onResult = (err: any, statusCode: number, metatask: TaskAgentInterfaces.MetaTaskDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(metatask);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "71aa53a2-0ce0-46f2-856b-8cbc1cdffa4e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, definition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.MetaTaskDefinition>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     */
    public deleteMetaTaskDefinition(
        project: string,
        metaTaskDefinitionId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            metaTaskDefinitionId: metaTaskDefinitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "71aa53a2-0ce0-46f2-856b-8cbc1cdffa4e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} metaTaskDefinitionId
     * @param {boolean} expanded
     */
    public getMetaTaskDefinitions(
        project: string,
        metaTaskDefinitionId?: string,
        expanded?: boolean
        ): Q.Promise<TaskAgentInterfaces.MetaTaskDefinition[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.MetaTaskDefinition[]>();

        var onResult = (err: any, statusCode: number, metatask: TaskAgentInterfaces.MetaTaskDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(metatask);
            }
        };

        var routeValues: any = {
            project: project,
            metaTaskDefinitionId: metaTaskDefinitionId
        };

        var queryValues: any = {
            expanded: expanded,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "71aa53a2-0ce0-46f2-856b-8cbc1cdffa4e", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.MetaTaskDefinition[]>>deferred.promise;
    }

    /**
     * @param {TaskAgentInterfaces.MetaTaskDefinition} definition
     * @param {string} project - Project ID or project name
     */
    public updateMetaTaskDefinition(
        definition: TaskAgentInterfaces.MetaTaskDefinition,
        project: string
        ): Q.Promise<TaskAgentInterfaces.MetaTaskDefinition> {
    
        var deferred = Q.defer<TaskAgentInterfaces.MetaTaskDefinition>();

        var onResult = (err: any, statusCode: number, metatask: TaskAgentInterfaces.MetaTaskDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(metatask);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "71aa53a2-0ce0-46f2-856b-8cbc1cdffa4e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, definition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.MetaTaskDefinition>>deferred.promise;
    }

    /**
     * @param {string} packageType
     * @param {string} platform
     * @param {string} version
     */
    public getPackage(
        packageType: string,
        platform: string,
        version: string
        ): Q.Promise<TaskAgentInterfaces.PackageMetadata> {
    
        var deferred = Q.defer<TaskAgentInterfaces.PackageMetadata>();

        var onResult = (err: any, statusCode: number, _package: TaskAgentInterfaces.PackageMetadata) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(_package);
            }
        };

        var routeValues: any = {
            packageType: packageType,
            platform: platform,
            version: version
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "distributedtask", "8ffcd551-079c-493a-9c02-54346299d144", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.PackageMetadata, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.PackageMetadata>>deferred.promise;
    }

    /**
     * @param {string} packageType
     * @param {string} platform
     * @param {number} top
     */
    public getPackages(
        packageType?: string,
        platform?: string,
        top?: number
        ): Q.Promise<TaskAgentInterfaces.PackageMetadata[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.PackageMetadata[]>();

        var onResult = (err: any, statusCode: number, packages: TaskAgentInterfaces.PackageMetadata[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(packages);
            }
        };

        var routeValues: any = {
            packageType: packageType,
            platform: platform
        };

        var queryValues: any = {
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "distributedtask", "8ffcd551-079c-493a-9c02-54346299d144", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.PackageMetadata, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.PackageMetadata[]>>deferred.promise;
    }

    /**
     * @param {number} poolId
     */
    public getAgentPoolRoles(
        poolId?: number
        ): Q.Promise<VSSInterfaces.IdentityRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        var onResult = (err: any, statusCode: number, poolroles: VSSInterfaces.IdentityRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(poolroles);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "381dd2bb-35cf-4103-ae8c-3c815b25763c", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pool);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, pool, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pool);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        var queryValues: any = {
            properties: properties && properties.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pools);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            poolName: poolName,
            properties: properties && properties.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pool);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, pool, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, queueroles: VSSInterfaces.IdentityRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queueroles);
            }
        };

        var routeValues: any = {
            queueId: queueId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "b0c6d64d-c9fa-4946-b8de-77de623ee585", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<VSSInterfaces.IdentityRef[]>>deferred.promise;
    }

    /**
     * @param {TaskAgentInterfaces.TaskAgentQueue} queue
     * @param {string} project - Project ID or project name
     */
    public addAgentQueue(
        queue: TaskAgentInterfaces.TaskAgentQueue,
        project?: string
        ): Q.Promise<TaskAgentInterfaces.TaskAgentQueue> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentQueue>();

        var onResult = (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queue);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, queue, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentQueue>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     */
    public createQueuesForAgentPools(
        project?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {number} queueId
     * @param {string} project - Project ID or project name
     */
    public deleteAgentQueue(
        queueId: number,
        project?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            queueId: queueId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {number} queueId
     * @param {string} project - Project ID or project name
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     */
    public getAgentQueue(
        queueId: number,
        project?: string,
        actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter
        ): Q.Promise<TaskAgentInterfaces.TaskAgentQueue> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentQueue>();

        var onResult = (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queue);
            }
        };

        var routeValues: any = {
            project: project,
            queueId: queueId
        };

        var queryValues: any = {
            actionFilter: actionFilter,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentQueue>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} queueName
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     */
    public getAgentQueues(
        project?: string,
        queueName?: string,
        actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter
        ): Q.Promise<TaskAgentInterfaces.TaskAgentQueue[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAgentQueue[]>();

        var onResult = (err: any, statusCode: number, queues: TaskAgentInterfaces.TaskAgentQueue[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queues);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            queueName: queueName,
            actionFilter: actionFilter,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgentQueue[]>>deferred.promise;
    }

    /**
     * @param {TaskAgentInterfaces.DataSourceBinding} binding
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     */
    public queryDataProvider(
        binding: TaskAgentInterfaces.DataSourceBinding,
        scopeIdentifier: string,
        endpointId: string
        ): Q.Promise<any> {
    
        var deferred = Q.defer<any>();

        var onResult = (err: any, statusCode: number, serviceendpointproxy: any) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpointproxy);
            }
        };

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        var queryValues: any = {
            endpointId: endpointId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e3a44534-7b94-4add-a053-8af449589c62", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, binding, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<any>>deferred.promise;
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

        var onResult = (err: any, statusCode: number, serviceendpointproxy: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpointproxy);
            }
        };

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e3a44534-7b94-4add-a053-8af449589c62", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, binding, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<string[]>>deferred.promise;
    }

    /**
     * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     */
    public createServiceEndpoint(
        endpoint: TaskAgentInterfaces.ServiceEndpoint,
        scopeIdentifier: string
        ): Q.Promise<TaskAgentInterfaces.ServiceEndpoint> {
    
        var deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint>();

        var onResult = (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoint);
            }
        };

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, endpoint, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoint);
            }
        };

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.ServiceEndpoint>>deferred.promise;
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     */
    public getServiceEndpoints(
        scopeIdentifier: string,
        type?: string,
        authSchemes?: string[],
        endpointIds?: string[]
        ): Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint[]>();

        var onResult = (err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoints);
            }
        };

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        var queryValues: any = {
            type: type,
            authSchemes: authSchemes && authSchemes.join(","),
            endpointIds: endpointIds && endpointIds.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.ServiceEndpoint[]>>deferred.promise;
    }

    /**
     * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} endpointId
     */
    public updateServiceEndpoint(
        endpoint: TaskAgentInterfaces.ServiceEndpoint,
        scopeIdentifier: string,
        endpointId: string
        ): Q.Promise<TaskAgentInterfaces.ServiceEndpoint> {
    
        var deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint>();

        var onResult = (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoint);
            }
        };

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, endpoint, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.ServiceEndpoint>>deferred.promise;
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

        var onResult = (err: any, statusCode: number, serviceendpointtypes: TaskAgentInterfaces.ServiceEndpointType[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpointtypes);
            }
        };

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        var queryValues: any = {
            type: type,
            scheme: scheme,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "7c74af83-8605-45c1-a30b-7a05d5d7f8c1", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpointType, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(session);
            }
        };

        var routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "134e239e-2df3-4794-a6f6-24f1f19ec8dc", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, session, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            sessionId: sessionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "134e239e-2df3-4794-a6f6-24f1f19ec8dc", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            taskId: taskId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number, task: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(task);
            }
        };

        var routeValues: any = {
            taskId: taskId,
            versionString: versionString
        };

        var queryValues: any = {
            visibility: visibility,
            scopeLocal: scopeLocal,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, task: TaskAgentInterfaces.TaskDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(task);
            }
        };

        var routeValues: any = {
            taskId: taskId,
            versionString: versionString
        };

        var queryValues: any = {
            visibility: visibility,
            scopeLocal: scopeLocal,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tasks);
            }
        };

        var routeValues: any = {
            taskId: taskId
        };

        var queryValues: any = {
            visibility: visibility,
            scopeLocal: scopeLocal,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(usercapabilitie);
            }
        };

        var routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "30ba3ada-fedf-4da8-bbb5-dacf2f82e176", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, userCapabilities, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TaskAgentInterfaces.TaskAgent>>deferred.promise;
    }

}
