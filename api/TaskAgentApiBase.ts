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
    addAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    deleteAgent(poolId: number, agentId: number): Promise<void>;
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[]): Promise<TaskAgentInterfaces.TaskAgent>;
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[], demands?: string[]): Promise<TaskAgentInterfaces.TaskAgent[]>;
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    getAzureSubscriptions(scopeIdentifier: string): Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult>;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Promise<string[]>;
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string): Promise<void>;
    getAgentRequest(poolId: number, requestId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    getAgentRequestsForAgent(poolId: number, agentId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForAgents(poolId: number, agentIds: number[], completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForPlan(poolId: number, planId: string, jobId?: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    queueAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    updateAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    deleteMessage(poolId: number, messageId: number, sessionId: string): Promise<void>;
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): Promise<TaskAgentInterfaces.TaskAgentMessage>;
    refreshAgent(poolId: number, agentId: number): Promise<void>;
    refreshAgents(poolId: number): Promise<void>;
    sendMessage(message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number): Promise<void>;
    addMetaTaskDefinition(definition: TaskAgentInterfaces.MetaTaskDefinition, project: string): Promise<TaskAgentInterfaces.MetaTaskDefinition>;
    deleteMetaTaskDefinition(project: string, metaTaskDefinitionId: string): Promise<void>;
    getMetaTaskDefinitions(project: string, metaTaskDefinitionId?: string, expanded?: boolean): Promise<TaskAgentInterfaces.MetaTaskDefinition[]>;
    updateMetaTaskDefinition(definition: TaskAgentInterfaces.MetaTaskDefinition, project: string): Promise<TaskAgentInterfaces.MetaTaskDefinition>;
    getPackage(packageType: string, platform: string, version: string): Promise<TaskAgentInterfaces.PackageMetadata>;
    getPackages(packageType?: string, platform?: string, top?: number): Promise<TaskAgentInterfaces.PackageMetadata[]>;
    getAgentPoolRoles(poolId?: number): Promise<VSSInterfaces.IdentityRef[]>;
    addAgentPool(pool: TaskAgentInterfaces.TaskAgentPool): Promise<TaskAgentInterfaces.TaskAgentPool>;
    deleteAgentPool(poolId: number): Promise<void>;
    getAgentPool(poolId: number, properties?: string[]): Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentPools(poolName?: string, properties?: string[]): Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    updateAgentPool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentQueueRoles(queueId?: number): Promise<VSSInterfaces.IdentityRef[]>;
    addAgentQueue(queue: TaskAgentInterfaces.TaskAgentQueue, project?: string): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    createQueuesForAgentPools(project?: string): Promise<void>;
    deleteAgentQueue(queueId: number, project?: string): Promise<void>;
    getAgentQueue(queueId: number, project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    getAgentQueues(project?: string, queueName?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    queryDataProvider(binding: TaskAgentInterfaces.DataSourceBinding, scopeIdentifier: string, endpointId: string): Promise<any>;
    queryServiceEndpoint(binding: TaskAgentInterfaces.DataSourceBinding, scopeIdentifier: string): Promise<string[]>;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    deleteServiceEndpoint(scopeIdentifier: string, endpointId: string): Promise<void>;
    getServiceEndpointDetails(scopeIdentifier: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpoints(scopeIdentifier: string, type?: string, authSchemes?: string[], endpointIds?: string[]): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    updateServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, scopeIdentifier: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpointTypes(scopeIdentifier: string, type?: string, scheme?: string): Promise<TaskAgentInterfaces.ServiceEndpointType[]>;
    createAgentSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number): Promise<TaskAgentInterfaces.TaskAgentSession>;
    deleteAgentSession(poolId: number, sessionId: string): Promise<void>;
    deleteTaskDefinition(taskId: string): Promise<void>;
    getTaskContentZip(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<NodeJS.ReadableStream>;
    getTaskDefinition(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition>;
    getTaskDefinitions(taskId?: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition[]>;
    updateAgentUserCapabilities(userCapabilities: { [key: string] : string; }, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
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
        ): Promise<TaskAgentInterfaces.TaskAgent> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        let onResult = (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, agent, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    */
    public deleteAgent(
        poolId: number,
        agentId: number
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgent> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        let onResult = (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        let queryValues: any = {
            includeCapabilities: includeCapabilities,
            includeAssignedRequest: includeAssignedRequest,
            propertyFilters: propertyFilters && propertyFilters.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgent[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgent[]>();

        let onResult = (err: any, statusCode: number, agents: TaskAgentInterfaces.TaskAgent[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agents);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        let queryValues: any = {
            agentName: agentName,
            includeCapabilities: includeCapabilities,
            includeAssignedRequest: includeAssignedRequest,
            propertyFilters: propertyFilters && propertyFilters.join(","),
            demands: demands && demands.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgent> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        let onResult = (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, agent, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgent> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        let onResult = (err: any, statusCode: number, agent: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(agent);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e298ef32-5878-4cab-993c-043836571f42", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, agent, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    */
    public getAzureSubscriptions(
        scopeIdentifier: string
        ): Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult> {
    
        let deferred = Q.defer<TaskAgentInterfaces.AzureSubscriptionQueryResult>();

        let onResult = (err: any, statusCode: number, azurermsubscription: TaskAgentInterfaces.AzureSubscriptionQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(azurermsubscription);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "bcd6189c-0303-471f-a8e1-acb22b74d700", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
    * 
    * @param {TaskAgentInterfaces.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
    */
    public queryEndpoint(
        endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, endpoint: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(endpoint);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "f223b809-8c33-4b7d-b53f-07232569b5d6", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, endpoint, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            requestId: requestId
        };

        let queryValues: any = {
            lockToken: lockToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {number} requestId
    */
    public getAgentRequest(
        poolId: number,
        requestId: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest>();

        let onResult = (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequest);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            requestId: requestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest[]>();

        let onResult = (err: any, statusCode: number, jobrequests: TaskAgentInterfaces.TaskAgentJobRequest[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequests);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        let queryValues: any = {
            agentId: agentId,
            completedRequestCount: completedRequestCount,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest[]>();

        let onResult = (err: any, statusCode: number, jobrequests: TaskAgentInterfaces.TaskAgentJobRequest[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequests);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        let queryValues: any = {
            agentIds: agentIds && agentIds.join(","),
            completedRequestCount: completedRequestCount,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest[]>();

        let onResult = (err: any, statusCode: number, jobrequests: TaskAgentInterfaces.TaskAgentJobRequest[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequests);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        let queryValues: any = {
            planId: planId,
            jobId: jobId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
    * @param {number} poolId
    */
    public queueAgentRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest>();

        let onResult = (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequest);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, request, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentJobRequest>();

        let onResult = (err: any, statusCode: number, jobrequest: TaskAgentInterfaces.TaskAgentJobRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(jobrequest);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            requestId: requestId
        };

        let queryValues: any = {
            lockToken: lockToken,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "fc825784-c92a-4299-9221-998a02d1b54f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, request, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            messageId: messageId
        };

        let queryValues: any = {
            sessionId: sessionId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgentMessage> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentMessage>();

        let onResult = (err: any, statusCode: number, message: TaskAgentInterfaces.TaskAgentMessage) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(message);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        let queryValues: any = {
            sessionId: sessionId,
            lastMessageId: lastMessageId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    */
    public refreshAgent(
        poolId: number,
        agentId: number
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        let queryValues: any = {
            agentId: agentId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {number} poolId
    */
    public refreshAgents(
        poolId: number
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        let queryValues: any = {
            requestId: requestId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, message, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.MetaTaskDefinition} definition
    * @param {string} project - Project ID or project name
    */
    public addMetaTaskDefinition(
        definition: TaskAgentInterfaces.MetaTaskDefinition,
        project: string
        ): Promise<TaskAgentInterfaces.MetaTaskDefinition> {
    
        let deferred = Q.defer<TaskAgentInterfaces.MetaTaskDefinition>();

        let onResult = (err: any, statusCode: number, metatask: TaskAgentInterfaces.MetaTaskDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(metatask);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "71aa53a2-0ce0-46f2-856b-8cbc1cdffa4e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, definition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} metaTaskDefinitionId
    */
    public deleteMetaTaskDefinition(
        project: string,
        metaTaskDefinitionId: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            project: project,
            metaTaskDefinitionId: metaTaskDefinitionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "71aa53a2-0ce0-46f2-856b-8cbc1cdffa4e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.MetaTaskDefinition[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.MetaTaskDefinition[]>();

        let onResult = (err: any, statusCode: number, metatask: TaskAgentInterfaces.MetaTaskDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(metatask);
            }
        };

        let routeValues: any = {
            project: project,
            metaTaskDefinitionId: metaTaskDefinitionId
        };

        let queryValues: any = {
            expanded: expanded,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "71aa53a2-0ce0-46f2-856b-8cbc1cdffa4e", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.MetaTaskDefinition} definition
    * @param {string} project - Project ID or project name
    */
    public updateMetaTaskDefinition(
        definition: TaskAgentInterfaces.MetaTaskDefinition,
        project: string
        ): Promise<TaskAgentInterfaces.MetaTaskDefinition> {
    
        let deferred = Q.defer<TaskAgentInterfaces.MetaTaskDefinition>();

        let onResult = (err: any, statusCode: number, metatask: TaskAgentInterfaces.MetaTaskDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(metatask);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "71aa53a2-0ce0-46f2-856b-8cbc1cdffa4e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, definition, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.PackageMetadata> {
    
        let deferred = Q.defer<TaskAgentInterfaces.PackageMetadata>();

        let onResult = (err: any, statusCode: number, _package: TaskAgentInterfaces.PackageMetadata) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(_package);
            }
        };

        let routeValues: any = {
            packageType: packageType,
            platform: platform,
            version: version
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "distributedtask", "8ffcd551-079c-493a-9c02-54346299d144", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.PackageMetadata, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.PackageMetadata[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.PackageMetadata[]>();

        let onResult = (err: any, statusCode: number, packages: TaskAgentInterfaces.PackageMetadata[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(packages);
            }
        };

        let routeValues: any = {
            packageType: packageType,
            platform: platform
        };

        let queryValues: any = {
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "distributedtask", "8ffcd551-079c-493a-9c02-54346299d144", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.PackageMetadata, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {number} poolId
    */
    public getAgentPoolRoles(
        poolId?: number
        ): Promise<VSSInterfaces.IdentityRef[]> {
    
        let deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        let onResult = (err: any, statusCode: number, poolroles: VSSInterfaces.IdentityRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(poolroles);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "381dd2bb-35cf-4103-ae8c-3c815b25763c", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPool} pool
    */
    public addAgentPool(
        pool: TaskAgentInterfaces.TaskAgentPool
        ): Promise<TaskAgentInterfaces.TaskAgentPool> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool>();

        let onResult = (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pool);
            }
        };

        let routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, pool, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {number} poolId
    */
    public deleteAgentPool(
        poolId: number
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {string[]} properties
    */
    public getAgentPool(
        poolId: number,
        properties?: string[]
        ): Promise<TaskAgentInterfaces.TaskAgentPool> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool>();

        let onResult = (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pool);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        let queryValues: any = {
            properties: properties && properties.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} poolName
    * @param {string[]} properties
    */
    public getAgentPools(
        poolName?: string,
        properties?: string[]
        ): Promise<TaskAgentInterfaces.TaskAgentPool[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool[]>();

        let onResult = (err: any, statusCode: number, pools: TaskAgentInterfaces.TaskAgentPool[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pools);
            }
        };

        let routeValues: any = {
        };

        let queryValues: any = {
            poolName: poolName,
            properties: properties && properties.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPool} pool
    * @param {number} poolId
    */
    public updateAgentPool(
        pool: TaskAgentInterfaces.TaskAgentPool,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentPool> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentPool>();

        let onResult = (err: any, statusCode: number, pool: TaskAgentInterfaces.TaskAgentPool) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pool);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "a8c47e17-4d56-4a56-92bb-de7ea7dc65be", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, pool, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {number} queueId
    */
    public getAgentQueueRoles(
        queueId?: number
        ): Promise<VSSInterfaces.IdentityRef[]> {
    
        let deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        let onResult = (err: any, statusCode: number, queueroles: VSSInterfaces.IdentityRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queueroles);
            }
        };

        let routeValues: any = {
            queueId: queueId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "b0c6d64d-c9fa-4946-b8de-77de623ee585", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentQueue} queue
    * @param {string} project - Project ID or project name
    */
    public addAgentQueue(
        queue: TaskAgentInterfaces.TaskAgentQueue,
        project?: string
        ): Promise<TaskAgentInterfaces.TaskAgentQueue> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentQueue>();

        let onResult = (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queue);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, queue, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public createQueuesForAgentPools(
        project?: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, null, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {number} queueId
    * @param {string} project - Project ID or project name
    */
    public deleteAgentQueue(
        queueId: number,
        project?: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            project: project,
            queueId: queueId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgentQueue> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentQueue>();

        let onResult = (err: any, statusCode: number, queue: TaskAgentInterfaces.TaskAgentQueue) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queue);
            }
        };

        let routeValues: any = {
            project: project,
            queueId: queueId
        };

        let queryValues: any = {
            actionFilter: actionFilter,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgentQueue[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentQueue[]>();

        let onResult = (err: any, statusCode: number, queues: TaskAgentInterfaces.TaskAgentQueue[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queues);
            }
        };

        let routeValues: any = {
            project: project
        };

        let queryValues: any = {
            queueName: queueName,
            actionFilter: actionFilter,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "900fa995-c559-4923-aae7-f8424fe4fbea", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<any> {
    
        let deferred = Q.defer<any>();

        let onResult = (err: any, statusCode: number, serviceendpointproxy: any) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpointproxy);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        let queryValues: any = {
            endpointId: endpointId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e3a44534-7b94-4add-a053-8af449589c62", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, binding, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, serviceendpointproxy: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpointproxy);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "e3a44534-7b94-4add-a053-8af449589c62", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, binding, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
    * @param {string} scopeIdentifier - The project GUID to scope the request
    */
    public createServiceEndpoint(
        endpoint: TaskAgentInterfaces.ServiceEndpoint,
        scopeIdentifier: string
        ): Promise<TaskAgentInterfaces.ServiceEndpoint> {
    
        let deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint>();

        let onResult = (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoint);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, endpoint, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} endpointId
    */
    public deleteServiceEndpoint(
        scopeIdentifier: string,
        endpointId: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} endpointId
    */
    public getServiceEndpointDetails(
        scopeIdentifier: string,
        endpointId: string
        ): Promise<TaskAgentInterfaces.ServiceEndpoint> {
    
        let deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint>();

        let onResult = (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoint);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.ServiceEndpoint[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint[]>();

        let onResult = (err: any, statusCode: number, serviceendpoints: TaskAgentInterfaces.ServiceEndpoint[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoints);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        let queryValues: any = {
            type: type,
            authSchemes: authSchemes && authSchemes.join(","),
            endpointIds: endpointIds && endpointIds.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.ServiceEndpoint> {
    
        let deferred = Q.defer<TaskAgentInterfaces.ServiceEndpoint>();

        let onResult = (err: any, statusCode: number, serviceendpoint: TaskAgentInterfaces.ServiceEndpoint) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpoint);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            endpointId: endpointId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "ca373c13-fec3-4b30-9525-35a117731384", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, endpoint, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.ServiceEndpointType[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.ServiceEndpointType[]>();

        let onResult = (err: any, statusCode: number, serviceendpointtypes: TaskAgentInterfaces.ServiceEndpointType[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(serviceendpointtypes);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier
        };

        let queryValues: any = {
            type: type,
            scheme: scheme,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "7c74af83-8605-45c1-a30b-7a05d5d7f8c1", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpointType, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentSession} session
    * @param {number} poolId
    */
    public createAgentSession(
        session: TaskAgentInterfaces.TaskAgentSession,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentSession> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgentSession>();

        let onResult = (err: any, statusCode: number, session: TaskAgentInterfaces.TaskAgentSession) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(session);
            }
        };

        let routeValues: any = {
            poolId: poolId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "134e239e-2df3-4794-a6f6-24f1f19ec8dc", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, session, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {number} poolId
    * @param {string} sessionId
    */
    public deleteAgentSession(
        poolId: number,
        sessionId: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            sessionId: sessionId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "134e239e-2df3-4794-a6f6-24f1f19ec8dc", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {string} taskId
    */
    public deleteTaskDefinition(
        taskId: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            taskId: taskId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, task: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(task);
            }
        };

        let routeValues: any = {
            taskId: taskId,
            versionString: versionString
        };

        let queryValues: any = {
            visibility: visibility,
            scopeLocal: scopeLocal,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskDefinition> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskDefinition>();

        let onResult = (err: any, statusCode: number, task: TaskAgentInterfaces.TaskDefinition) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(task);
            }
        };

        let routeValues: any = {
            taskId: taskId,
            versionString: versionString
        };

        let queryValues: any = {
            visibility: visibility,
            scopeLocal: scopeLocal,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskDefinition[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskDefinition[]>();

        let onResult = (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(tasks);
            }
        };

        let routeValues: any = {
            taskId: taskId
        };

        let queryValues: any = {
            visibility: visibility,
            scopeLocal: scopeLocal,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskAgent> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAgent>();

        let onResult = (err: any, statusCode: number, usercapabilitie: TaskAgentInterfaces.TaskAgent) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(usercapabilitie);
            }
        };

        let routeValues: any = {
            poolId: poolId,
            agentId: agentId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "30ba3ada-fedf-4da8-bbb5-dacf2f82e176", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, userCapabilities, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

}
