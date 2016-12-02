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


import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
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
    getAzureSubscriptions(): Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult>;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Promise<string[]>;
    getTaskHubLicenseDetails(hubName: string, includeEnterpriseUsersCount?: boolean): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    updateTaskHubLicenseDetails(taskHubLicenseDetails: TaskAgentInterfaces.TaskHubLicenseDetails, hubName: string): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string): Promise<void>;
    getAgentRequest(poolId: number, requestId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    getAgentRequestsForAgent(poolId: number, agentId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForAgents(poolId: number, agentIds?: number[], completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForPlan(poolId: number, planId: string, jobId?: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    queueAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    updateAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    addDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    deleteDeploymentMachineGroup(project: string, machineGroupId: number): Promise<void>;
    getDeploymentMachineGroup(project: string, machineGroupId: number, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    getDeploymentMachineGroups(project: string, machineGroupName?: string, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup[]>;
    updateDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    getDeploymentMachines(project: string, machineGroupId: number, tagFilters?: string[]): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    updateDeploymentMachines(deploymentMachines: TaskAgentInterfaces.DeploymentMachine[], project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    deleteMessage(poolId: number, messageId: number, sessionId: string): Promise<void>;
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): Promise<TaskAgentInterfaces.TaskAgentMessage>;
    refreshAgent(poolId: number, agentId: number): Promise<void>;
    refreshAgents(poolId: number): Promise<void>;
    sendMessage(message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number): Promise<void>;
    getPackage(packageType: string, platform: string, version: string): Promise<TaskAgentInterfaces.PackageMetadata>;
    getPackages(packageType?: string, platform?: string, top?: number): Promise<TaskAgentInterfaces.PackageMetadata[]>;
    getAgentPoolRoles(poolId?: number): Promise<VSSInterfaces.IdentityRef[]>;
    addAgentPool(pool: TaskAgentInterfaces.TaskAgentPool): Promise<TaskAgentInterfaces.TaskAgentPool>;
    deleteAgentPool(poolId: number): Promise<void>;
    getAgentPool(poolId: number, properties?: string[], actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter): Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentPools(poolName?: string, properties?: string[], poolType?: TaskAgentInterfaces.TaskAgentPoolType, actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter): Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    updateAgentPool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentQueueRoles(queueId?: number): Promise<VSSInterfaces.IdentityRef[]>;
    addAgentQueue(queue: TaskAgentInterfaces.TaskAgentQueue, project?: string): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    createTeamProject(project?: string): Promise<void>;
    deleteAgentQueue(queueId: number, project?: string): Promise<void>;
    getAgentQueue(queueId: number, project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    getAgentQueues(project?: string, queueName?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    executeServiceEndpointRequest(serviceEndpointRequest: TaskAgentInterfaces.ServiceEndpointRequest, project: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpointRequestResult>;
    queryServiceEndpoint(binding: TaskAgentInterfaces.DataSourceBinding, project: string): Promise<string[]>;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, project: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    deleteServiceEndpoint(project: string, endpointId: string): Promise<void>;
    getServiceEndpointDetails(project: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpoints(project: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    updateServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, project: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpointTypes(type?: string, scheme?: string): Promise<TaskAgentInterfaces.ServiceEndpointType[]>;
    createAgentSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number): Promise<TaskAgentInterfaces.TaskAgentSession>;
    deleteAgentSession(poolId: number, sessionId: string): Promise<void>;
    addTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroup, project: string): Promise<TaskAgentInterfaces.TaskGroup>;
    deleteTaskGroup(project: string, taskGroupId: string): Promise<void>;
    getTaskGroups(project: string, taskGroupId?: string, expanded?: boolean): Promise<TaskAgentInterfaces.TaskGroup[]>;
    updateTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroup, project: string): Promise<TaskAgentInterfaces.TaskGroup>;
    deleteTaskDefinition(taskId: string): Promise<void>;
    getTaskContentZip(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<NodeJS.ReadableStream>;
    getTaskDefinition(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition>;
    getTaskDefinitions(taskId?: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition[]>;
    updateAgentUserCapabilities(userCapabilities: { [key: string] : string; }, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    addVariableGroup(group: TaskAgentInterfaces.VariableGroup, project: string): Promise<TaskAgentInterfaces.VariableGroup>;
    deleteVariableGroup(project: string, groupId: number): Promise<void>;
    getVariableGroup(project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
    getVariableGroups(project: string, groupName?: string, actionFilter?: TaskAgentInterfaces.VariableGroupActionFilter): Promise<TaskAgentInterfaces.VariableGroup[]>;
    getVariableGroupsById(project: string, groupIds: number[]): Promise<TaskAgentInterfaces.VariableGroup[]>;
    updateVariableGroup(group: TaskAgentInterfaces.VariableGroup, project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
}

export class TaskAgentApiBase extends basem.ClientApiBase implements ITaskAgentApiBase {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-TaskAgent-api');
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    */
    public async addAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgent> {

        return new Promise<TaskAgentInterfaces.TaskAgent>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, agent, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    */
    public async deleteAgent(
        poolId: number,
        agentId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                agentId: agentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    * @param {boolean} includeCapabilities
    * @param {boolean} includeAssignedRequest
    * @param {string[]} propertyFilters
    */
    public async getAgent(
        poolId: number,
        agentId: number,
        includeCapabilities?: boolean,
        includeAssignedRequest?: boolean,
        propertyFilters?: string[]
        ): Promise<TaskAgentInterfaces.TaskAgent> {

        return new Promise<TaskAgentInterfaces.TaskAgent>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                agentId: agentId
            };

            let queryValues: any = {
                includeCapabilities: includeCapabilities,
                includeAssignedRequest: includeAssignedRequest,
                propertyFilters: propertyFilters && propertyFilters.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {string} agentName
    * @param {boolean} includeCapabilities
    * @param {boolean} includeAssignedRequest
    * @param {string[]} propertyFilters
    * @param {string[]} demands
    */
    public async getAgents(
        poolId: number,
        agentName?: string,
        includeCapabilities?: boolean,
        includeAssignedRequest?: boolean,
        propertyFilters?: string[],
        demands?: string[]
        ): Promise<TaskAgentInterfaces.TaskAgent[]> {

        return new Promise<TaskAgentInterfaces.TaskAgent[]>(async (resolve, reject) => {
            
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    * @param {number} agentId
    */
    public async replaceAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number,
        agentId: number
        ): Promise<TaskAgentInterfaces.TaskAgent> {

        return new Promise<TaskAgentInterfaces.TaskAgent>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                agentId: agentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, agent, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgent} agent
    * @param {number} poolId
    * @param {number} agentId
    */
    public async updateAgent(
        agent: TaskAgentInterfaces.TaskAgent,
        poolId: number,
        agentId: number
        ): Promise<TaskAgentInterfaces.TaskAgent> {

        return new Promise<TaskAgentInterfaces.TaskAgent>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                agentId: agentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, agent, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    */
    public async getAzureSubscriptions(
        ): Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult> {

        return new Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "bcd6189c-0303-471f-a8e1-acb22b74d700",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
    * 
    * @param {TaskAgentInterfaces.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
    */
    public async queryEndpoint(
        endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "f223b809-8c33-4b7d-b53f-07232569b5d6",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, endpoint, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} hubName
    * @param {boolean} includeEnterpriseUsersCount
    */
    public async getTaskHubLicenseDetails(
        hubName: string,
        includeEnterpriseUsersCount?: boolean
        ): Promise<TaskAgentInterfaces.TaskHubLicenseDetails> {

        return new Promise<TaskAgentInterfaces.TaskHubLicenseDetails>(async (resolve, reject) => {
            
            let routeValues: any = {
                hubName: hubName
            };

            let queryValues: any = {
                includeEnterpriseUsersCount: includeEnterpriseUsersCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "f9f0f436-b8a1-4475-9041-1ccdbf8f0128",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskHubLicenseDetails} taskHubLicenseDetails
    * @param {string} hubName
    */
    public async updateTaskHubLicenseDetails(
        taskHubLicenseDetails: TaskAgentInterfaces.TaskHubLicenseDetails,
        hubName: string
        ): Promise<TaskAgentInterfaces.TaskHubLicenseDetails> {

        return new Promise<TaskAgentInterfaces.TaskHubLicenseDetails>(async (resolve, reject) => {
            
            let routeValues: any = {
                hubName: hubName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "f9f0f436-b8a1-4475-9041-1ccdbf8f0128",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, taskHubLicenseDetails, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} requestId
    * @param {string} lockToken
    */
    public async deleteAgentRequest(
        poolId: number,
        requestId: number,
        lockToken: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                requestId: requestId
            };

            let queryValues: any = {
                lockToken: lockToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} requestId
    */
    public async getAgentRequest(
        poolId: number,
        requestId: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                requestId: requestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    * @param {number} completedRequestCount
    */
    public async getAgentRequestsForAgent(
        poolId: number,
        agentId: number,
        completedRequestCount?: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                agentId: agentId,
                completedRequestCount: completedRequestCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number[]} agentIds
    * @param {number} completedRequestCount
    */
    public async getAgentRequestsForAgents(
        poolId: number,
        agentIds?: number[],
        completedRequestCount?: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                agentIds: agentIds && agentIds.join(","),
                completedRequestCount: completedRequestCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {string} planId
    * @param {string} jobId
    */
    public async getAgentRequestsForPlan(
        poolId: number,
        planId: string,
        jobId?: string
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                planId: planId,
                jobId: jobId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
    * @param {number} poolId
    */
    public async queueAgentRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, request, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
    * @param {number} poolId
    * @param {number} requestId
    * @param {string} lockToken
    */
    public async updateAgentRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number,
        requestId: number,
        lockToken: string
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                requestId: requestId
            };

            let queryValues: any = {
                lockToken: lockToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, request, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.DeploymentMachineGroup} machineGroup
    * @param {string} project - Project ID or project name
    */
    public async addDeploymentMachineGroup(
        machineGroup: TaskAgentInterfaces.DeploymentMachineGroup,
        project: string
        ): Promise<TaskAgentInterfaces.DeploymentMachineGroup> {

        return new Promise<TaskAgentInterfaces.DeploymentMachineGroup>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, machineGroup, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} machineGroupId
    */
    public async deleteDeploymentMachineGroup(
        project: string,
        machineGroupId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                machineGroupId: machineGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} machineGroupId
    * @param {TaskAgentInterfaces.MachineGroupActionFilter} actionFilter
    */
    public async getDeploymentMachineGroup(
        project: string,
        machineGroupId: number,
        actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter
        ): Promise<TaskAgentInterfaces.DeploymentMachineGroup> {

        return new Promise<TaskAgentInterfaces.DeploymentMachineGroup>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                machineGroupId: machineGroupId
            };

            let queryValues: any = {
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} machineGroupName
    * @param {TaskAgentInterfaces.MachineGroupActionFilter} actionFilter
    */
    public async getDeploymentMachineGroups(
        project: string,
        machineGroupName?: string,
        actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter
        ): Promise<TaskAgentInterfaces.DeploymentMachineGroup[]> {

        return new Promise<TaskAgentInterfaces.DeploymentMachineGroup[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                machineGroupName: machineGroupName,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.DeploymentMachineGroup} machineGroup
    * @param {string} project - Project ID or project name
    * @param {number} machineGroupId
    */
    public async updateDeploymentMachineGroup(
        machineGroup: TaskAgentInterfaces.DeploymentMachineGroup,
        project: string,
        machineGroupId: number
        ): Promise<TaskAgentInterfaces.DeploymentMachineGroup> {

        return new Promise<TaskAgentInterfaces.DeploymentMachineGroup>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                machineGroupId: machineGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, machineGroup, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} machineGroupId
    * @param {string[]} tagFilters
    */
    public async getDeploymentMachines(
        project: string,
        machineGroupId: number,
        tagFilters?: string[]
        ): Promise<TaskAgentInterfaces.DeploymentMachine[]> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                machineGroupId: machineGroupId
            };

            let queryValues: any = {
                tagFilters: tagFilters && tagFilters.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "966c3874-c347-4b18-a90c-d509116717fd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.DeploymentMachine, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.DeploymentMachine[]} deploymentMachines
    * @param {string} project - Project ID or project name
    * @param {number} machineGroupId
    */
    public async updateDeploymentMachines(
        deploymentMachines: TaskAgentInterfaces.DeploymentMachine[],
        project: string,
        machineGroupId: number
        ): Promise<TaskAgentInterfaces.DeploymentMachine[]> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                machineGroupId: machineGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "966c3874-c347-4b18-a90c-d509116717fd",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, deploymentMachines, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.DeploymentMachine, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.DeploymentMachine, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} messageId
    * @param {string} sessionId
    */
    public async deleteMessage(
        poolId: number,
        messageId: number,
        sessionId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                messageId: messageId
            };

            let queryValues: any = {
                sessionId: sessionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {string} sessionId
    * @param {number} lastMessageId
    */
    public async getMessage(
        poolId: number,
        sessionId: string,
        lastMessageId?: number
        ): Promise<TaskAgentInterfaces.TaskAgentMessage> {

        return new Promise<TaskAgentInterfaces.TaskAgentMessage>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                sessionId: sessionId,
                lastMessageId: lastMessageId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    */
    public async refreshAgent(
        poolId: number,
        agentId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                agentId: agentId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, null, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    */
    public async refreshAgents(
        poolId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, null, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentMessage} message
    * @param {number} poolId
    * @param {number} requestId
    */
    public async sendMessage(
        message: TaskAgentInterfaces.TaskAgentMessage,
        poolId: number,
        requestId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                requestId: requestId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, message, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} packageType
    * @param {string} platform
    * @param {string} version
    */
    public async getPackage(
        packageType: string,
        platform: string,
        version: string
        ): Promise<TaskAgentInterfaces.PackageMetadata> {

        return new Promise<TaskAgentInterfaces.PackageMetadata>(async (resolve, reject) => {
            
            let routeValues: any = {
                packageType: packageType,
                platform: platform,
                version: version
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "distributedtask",
                    "8ffcd551-079c-493a-9c02-54346299d144",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.PackageMetadata, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} packageType
    * @param {string} platform
    * @param {number} top
    */
    public async getPackages(
        packageType?: string,
        platform?: string,
        top?: number
        ): Promise<TaskAgentInterfaces.PackageMetadata[]> {

        return new Promise<TaskAgentInterfaces.PackageMetadata[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                packageType: packageType,
                platform: platform
            };

            let queryValues: any = {
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "distributedtask",
                    "8ffcd551-079c-493a-9c02-54346299d144",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.PackageMetadata, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    */
    public async getAgentPoolRoles(
        poolId?: number
        ): Promise<VSSInterfaces.IdentityRef[]> {

        return new Promise<VSSInterfaces.IdentityRef[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "381dd2bb-35cf-4103-ae8c-3c815b25763c",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPool} pool
    */
    public async addAgentPool(
        pool: TaskAgentInterfaces.TaskAgentPool
        ): Promise<TaskAgentInterfaces.TaskAgentPool> {

        return new Promise<TaskAgentInterfaces.TaskAgentPool>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, pool, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    */
    public async deleteAgentPool(
        poolId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {string[]} properties
    * @param {TaskAgentInterfaces.TaskAgentPoolActionFilter} actionFilter
    */
    public async getAgentPool(
        poolId: number,
        properties?: string[],
        actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter
        ): Promise<TaskAgentInterfaces.TaskAgentPool> {

        return new Promise<TaskAgentInterfaces.TaskAgentPool>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                properties: properties && properties.join(","),
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} poolName
    * @param {string[]} properties
    * @param {TaskAgentInterfaces.TaskAgentPoolType} poolType
    * @param {TaskAgentInterfaces.TaskAgentPoolActionFilter} actionFilter
    */
    public async getAgentPools(
        poolName?: string,
        properties?: string[],
        poolType?: TaskAgentInterfaces.TaskAgentPoolType,
        actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter
        ): Promise<TaskAgentInterfaces.TaskAgentPool[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentPool[]>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            let queryValues: any = {
                poolName: poolName,
                properties: properties && properties.join(","),
                poolType: poolType,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPool} pool
    * @param {number} poolId
    */
    public async updateAgentPool(
        pool: TaskAgentInterfaces.TaskAgentPool,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentPool> {

        return new Promise<TaskAgentInterfaces.TaskAgentPool>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, pool, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentPool, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} queueId
    */
    public async getAgentQueueRoles(
        queueId?: number
        ): Promise<VSSInterfaces.IdentityRef[]> {

        return new Promise<VSSInterfaces.IdentityRef[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                queueId: queueId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "b0c6d64d-c9fa-4946-b8de-77de623ee585",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentQueue} queue
    * @param {string} project - Project ID or project name
    */
    public async addAgentQueue(
        queue: TaskAgentInterfaces.TaskAgentQueue,
        project?: string
        ): Promise<TaskAgentInterfaces.TaskAgentQueue> {

        return new Promise<TaskAgentInterfaces.TaskAgentQueue>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, queue, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentQueue, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentQueue, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public async createTeamProject(
        project?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, null, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} queueId
    * @param {string} project - Project ID or project name
    */
    public async deleteAgentQueue(
        queueId: number,
        project?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                queueId: queueId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} queueId
    * @param {string} project - Project ID or project name
    * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
    */
    public async getAgentQueue(
        queueId: number,
        project?: string,
        actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter
        ): Promise<TaskAgentInterfaces.TaskAgentQueue> {

        return new Promise<TaskAgentInterfaces.TaskAgentQueue>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                queueId: queueId
            };

            let queryValues: any = {
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentQueue, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} queueName
    * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
    */
    public async getAgentQueues(
        project?: string,
        queueName?: string,
        actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter
        ): Promise<TaskAgentInterfaces.TaskAgentQueue[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentQueue[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                queueName: queueName,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentQueue, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.ServiceEndpointRequest} serviceEndpointRequest
    * @param {string} project - Project ID or project name
    * @param {string} endpointId
    */
    public async executeServiceEndpointRequest(
        serviceEndpointRequest: TaskAgentInterfaces.ServiceEndpointRequest,
        project: string,
        endpointId: string
        ): Promise<TaskAgentInterfaces.ServiceEndpointRequestResult> {

        return new Promise<TaskAgentInterfaces.ServiceEndpointRequestResult>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                endpointId: endpointId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "distributedtask",
                    "f956a7de-d766-43af-81b1-e9e349245634",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, serviceEndpointRequest, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpointRequestResult, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
    * 
    * @param {TaskAgentInterfaces.DataSourceBinding} binding - Describes the data source to fetch.
    * @param {string} project - Project ID or project name
    */
    public async queryServiceEndpoint(
        binding: TaskAgentInterfaces.DataSourceBinding,
        project: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "distributedtask",
                    "f956a7de-d766-43af-81b1-e9e349245634",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, binding, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
    * @param {string} project - Project ID or project name
    */
    public async createServiceEndpoint(
        endpoint: TaskAgentInterfaces.ServiceEndpoint,
        project: string
        ): Promise<TaskAgentInterfaces.ServiceEndpoint> {

        return new Promise<TaskAgentInterfaces.ServiceEndpoint>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, endpoint, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} endpointId
    */
    public async deleteServiceEndpoint(
        project: string,
        endpointId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                endpointId: endpointId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} endpointId
    */
    public async getServiceEndpointDetails(
        project: string,
        endpointId: string
        ): Promise<TaskAgentInterfaces.ServiceEndpoint> {

        return new Promise<TaskAgentInterfaces.ServiceEndpoint>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                endpointId: endpointId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} type
    * @param {string[]} authSchemes
    * @param {string[]} endpointIds
    * @param {boolean} includeFailed
    */
    public async getServiceEndpoints(
        project: string,
        type?: string,
        authSchemes?: string[],
        endpointIds?: string[],
        includeFailed?: boolean
        ): Promise<TaskAgentInterfaces.ServiceEndpoint[]> {

        return new Promise<TaskAgentInterfaces.ServiceEndpoint[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                type: type,
                authSchemes: authSchemes && authSchemes.join(","),
                endpointIds: endpointIds && endpointIds.join(","),
                includeFailed: includeFailed,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
    * @param {string} project - Project ID or project name
    * @param {string} endpointId
    */
    public async updateServiceEndpoint(
        endpoint: TaskAgentInterfaces.ServiceEndpoint,
        project: string,
        endpointId: string
        ): Promise<TaskAgentInterfaces.ServiceEndpoint> {

        return new Promise<TaskAgentInterfaces.ServiceEndpoint>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                endpointId: endpointId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, endpoint, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} type
    * @param {string} scheme
    */
    public async getServiceEndpointTypes(
        type?: string,
        scheme?: string
        ): Promise<TaskAgentInterfaces.ServiceEndpointType[]> {

        return new Promise<TaskAgentInterfaces.ServiceEndpointType[]>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            let queryValues: any = {
                type: type,
                scheme: scheme,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "7c74af83-8605-45c1-a30b-7a05d5d7f8c1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.ServiceEndpointType, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentSession} session
    * @param {number} poolId
    */
    public async createAgentSession(
        session: TaskAgentInterfaces.TaskAgentSession,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentSession> {

        return new Promise<TaskAgentInterfaces.TaskAgentSession>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "134e239e-2df3-4794-a6f6-24f1f19ec8dc",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, session, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgentSession, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {string} sessionId
    */
    public async deleteAgentSession(
        poolId: number,
        sessionId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                sessionId: sessionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "134e239e-2df3-4794-a6f6-24f1f19ec8dc",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskGroup} taskGroup
    * @param {string} project - Project ID or project name
    */
    public async addTaskGroup(
        taskGroup: TaskAgentInterfaces.TaskGroup,
        project: string
        ): Promise<TaskAgentInterfaces.TaskGroup> {

        return new Promise<TaskAgentInterfaces.TaskGroup>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, taskGroup, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} taskGroupId
    */
    public async deleteTaskGroup(
        project: string,
        taskGroupId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                taskGroupId: taskGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} taskGroupId
    * @param {boolean} expanded
    */
    public async getTaskGroups(
        project: string,
        taskGroupId?: string,
        expanded?: boolean
        ): Promise<TaskAgentInterfaces.TaskGroup[]> {

        return new Promise<TaskAgentInterfaces.TaskGroup[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                taskGroupId: taskGroupId
            };

            let queryValues: any = {
                expanded: expanded,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskGroup} taskGroup
    * @param {string} project - Project ID or project name
    */
    public async updateTaskGroup(
        taskGroup: TaskAgentInterfaces.TaskGroup,
        project: string
        ): Promise<TaskAgentInterfaces.TaskGroup> {

        return new Promise<TaskAgentInterfaces.TaskGroup>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, taskGroup, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} taskId
    */
    public async deleteTaskDefinition(
        taskId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                taskId: taskId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} taskId
    * @param {string} versionString
    * @param {string[]} visibility
    * @param {boolean} scopeLocal
    */
    public async getTaskContentZip(
        taskId: string,
        versionString: string,
        visibility?: string[],
        scopeLocal?: boolean
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let onResult = (err: any, statusCode: number, task: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(task);
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} taskId
    * @param {string} versionString
    * @param {string[]} visibility
    * @param {boolean} scopeLocal
    */
    public async getTaskDefinition(
        taskId: string,
        versionString: string,
        visibility?: string[],
        scopeLocal?: boolean
        ): Promise<TaskAgentInterfaces.TaskDefinition> {

        return new Promise<TaskAgentInterfaces.TaskDefinition>(async (resolve, reject) => {
            
            let routeValues: any = {
                taskId: taskId,
                versionString: versionString
            };

            let queryValues: any = {
                visibility: visibility,
                scopeLocal: scopeLocal,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} taskId
    * @param {string[]} visibility
    * @param {boolean} scopeLocal
    */
    public async getTaskDefinitions(
        taskId?: string,
        visibility?: string[],
        scopeLocal?: boolean
        ): Promise<TaskAgentInterfaces.TaskDefinition[]> {

        return new Promise<TaskAgentInterfaces.TaskDefinition[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                taskId: taskId
            };

            let queryValues: any = {
                visibility: visibility,
                scopeLocal: scopeLocal,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {{ [key: string] : string; }} userCapabilities
    * @param {number} poolId
    * @param {number} agentId
    */
    public async updateAgentUserCapabilities(
        userCapabilities: { [key: string] : string; },
        poolId: number,
        agentId: number
        ): Promise<TaskAgentInterfaces.TaskAgent> {

        return new Promise<TaskAgentInterfaces.TaskAgent>(async (resolve, reject) => {
            
            let routeValues: any = {
                poolId: poolId,
                agentId: agentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "30ba3ada-fedf-4da8-bbb5-dacf2f82e176",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, userCapabilities, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAgent, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.VariableGroup} group
    * @param {string} project - Project ID or project name
    */
    public async addVariableGroup(
        group: TaskAgentInterfaces.VariableGroup,
        project: string
        ): Promise<TaskAgentInterfaces.VariableGroup> {

        return new Promise<TaskAgentInterfaces.VariableGroup>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, group, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.VariableGroup, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.VariableGroup, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} groupId
    */
    public async deleteVariableGroup(
        project: string,
        groupId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                groupId: groupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} groupId
    */
    public async getVariableGroup(
        project: string,
        groupId: number
        ): Promise<TaskAgentInterfaces.VariableGroup> {

        return new Promise<TaskAgentInterfaces.VariableGroup>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                groupId: groupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.VariableGroup, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} groupName
    * @param {TaskAgentInterfaces.VariableGroupActionFilter} actionFilter
    */
    public async getVariableGroups(
        project: string,
        groupName?: string,
        actionFilter?: TaskAgentInterfaces.VariableGroupActionFilter
        ): Promise<TaskAgentInterfaces.VariableGroup[]> {

        return new Promise<TaskAgentInterfaces.VariableGroup[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                groupName: groupName,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.VariableGroup, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number[]} groupIds
    */
    public async getVariableGroupsById(
        project: string,
        groupIds: number[]
        ): Promise<TaskAgentInterfaces.VariableGroup[]> {

        return new Promise<TaskAgentInterfaces.VariableGroup[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                groupIds: groupIds && groupIds.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.VariableGroup, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.VariableGroup} group
    * @param {string} project - Project ID or project name
    * @param {number} groupId
    */
    public async updateVariableGroup(
        group: TaskAgentInterfaces.VariableGroup,
        project: string,
        groupId: number
        ): Promise<TaskAgentInterfaces.VariableGroup> {

        return new Promise<TaskAgentInterfaces.VariableGroup>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                groupId: groupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.replace(url, apiVersion, group, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.VariableGroup, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.VariableGroup, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
