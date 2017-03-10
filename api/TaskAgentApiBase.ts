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

import * as restm from 'typed-rest-client/RestClient';
import * as httpm from 'typed-rest-client/HttpClient';
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
    generateDeploymentGroupAccessToken(project: string, deploymentGroupId: number): Promise<string>;
    addDeploymentGroup(deploymentGroup: TaskAgentInterfaces.DeploymentGroup, project: string): Promise<TaskAgentInterfaces.DeploymentGroup>;
    deleteDeploymentGroup(project: string, deploymentGroupId: number): Promise<void>;
    getDeploymentGroup(project: string, deploymentGroupId: number, actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter, expand?: TaskAgentInterfaces.DeploymentGroupExpands): Promise<TaskAgentInterfaces.DeploymentGroup>;
    getDeploymentGroups(project: string, name?: string, actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter, expand?: TaskAgentInterfaces.DeploymentGroupExpands): Promise<TaskAgentInterfaces.DeploymentGroup[]>;
    updateDeploymentGroup(deploymentGroup: TaskAgentInterfaces.DeploymentGroup, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentGroup>;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Promise<string[]>;
    getTaskHubLicenseDetails(hubName: string, includeEnterpriseUsersCount?: boolean, includeHostedAgentMinutesCount?: boolean): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    updateTaskHubLicenseDetails(taskHubLicenseDetails: TaskAgentInterfaces.TaskHubLicenseDetails, hubName: string): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    validateInputs(inputValidationRequest: TaskAgentInterfaces.InputValidationRequest): Promise<TaskAgentInterfaces.InputValidationRequest>;
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string, result?: TaskAgentInterfaces.TaskResult): Promise<void>;
    getAgentRequest(poolId: number, requestId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    getAgentRequestsForAgent(poolId: number, agentId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForAgents(poolId: number, agentIds?: number[], completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForPlan(poolId: number, planId: string, jobId?: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    queueAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    updateAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    generateDeploymentMachineGroupAccessToken(project: string, machineGroupId: number): Promise<string>;
    addDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    deleteDeploymentMachineGroup(project: string, machineGroupId: number): Promise<void>;
    getDeploymentMachineGroup(project: string, machineGroupId: number, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    getDeploymentMachineGroups(project: string, machineGroupName?: string, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup[]>;
    updateDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    getDeploymentMachineGroupMachines(project: string, machineGroupId: number, tagFilters?: string[]): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    updateDeploymentMachineGroupMachines(deploymentMachines: TaskAgentInterfaces.DeploymentMachine[], project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    getDeploymentMachines(project: string, deploymentGroupId: number, tags?: string[]): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    updateDeploymentMachines(deploymentMachines: TaskAgentInterfaces.DeploymentMachine[], project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    createAgentPoolMaintenanceDefinition(definition: TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
    deleteAgentPoolMaintenanceDefinition(poolId: number, definitionId: number): Promise<void>;
    getAgentPoolMaintenanceDefinition(poolId: number, definitionId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
    getAgentPoolMaintenanceDefinitions(poolId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition[]>;
    updateAgentPoolMaintenanceDefinition(definition: TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition, poolId: number, definitionId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
    deleteAgentPoolMaintenanceJob(poolId: number, jobId: number): Promise<void>;
    getAgentPoolMaintenanceJob(poolId: number, jobId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
    getAgentPoolMaintenanceJobLogs(poolId: number, jobId: number): Promise<NodeJS.ReadableStream>;
    getAgentPoolMaintenanceJobs(poolId: number, definitionId?: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob[]>;
    queueAgentPoolMaintenanceJob(job: TaskAgentInterfaces.TaskAgentPoolMaintenanceJob, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
    updateAgentPoolMaintenanceJob(job: TaskAgentInterfaces.TaskAgentPoolMaintenanceJob, poolId: number, jobId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
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
    getTaskGroupHistory(project: string, taskGroupId: string): Promise<TaskAgentInterfaces.TaskGroupRevision[]>;
    deleteSecureFile(project: string, secureFileId: number): Promise<void>;
    downloadSecureFile(project: string, secureFileId: number, ticket: string, download?: boolean): Promise<NodeJS.ReadableStream>;
    getSecureFile(project: string, secureFileId: number, includeDownloadTicket?: boolean): Promise<TaskAgentInterfaces.SecureFile>;
    getSecureFiles(project: string, namePattern?: string, includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    getSecureFilesByIds(project: string, secureFileIds: number[], includeDownloadTickets?: boolean): Promise<TaskAgentInterfaces.SecureFile[]>;
    querySecureFilesByProperties(condition: string, project: string, namePattern?: string): Promise<TaskAgentInterfaces.SecureFile[]>;
    updateSecureFile(secureFile: TaskAgentInterfaces.SecureFile, project: string, secureFileId: number): Promise<TaskAgentInterfaces.SecureFile>;
    updateSecureFiles(secureFiles: TaskAgentInterfaces.SecureFile[], project: string): Promise<TaskAgentInterfaces.SecureFile[]>;
    uploadSecureFile(customHeaders: any, contentStream: NodeJS.ReadableStream, project: string, name: string): Promise<TaskAgentInterfaces.SecureFile>;
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
    getTaskGroupRevision(project: string, taskGroupId: string, revision: number): Promise<NodeJS.ReadableStream>;
    getTaskGroups(project: string, taskGroupId?: string, expanded?: boolean): Promise<TaskAgentInterfaces.TaskGroup[]>;
    updateTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroup, project: string): Promise<TaskAgentInterfaces.TaskGroup>;
    deleteTaskDefinition(taskId: string): Promise<void>;
    getTaskContentZip(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<NodeJS.ReadableStream>;
    getTaskDefinition(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition>;
    getTaskDefinitions(taskId?: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition[]>;
    updateAgentUpdateState(poolId: number, agentId: number, currentState: string): Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgentUserCapabilities(userCapabilities: { [key: string] : string; }, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    addVariableGroup(group: TaskAgentInterfaces.VariableGroup, project: string): Promise<TaskAgentInterfaces.VariableGroup>;
    deleteVariableGroup(project: string, groupId: number): Promise<void>;
    getVariableGroup(project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
    getVariableGroups(project: string, groupName?: string, actionFilter?: TaskAgentInterfaces.VariableGroupActionFilter): Promise<TaskAgentInterfaces.VariableGroup[]>;
    getVariableGroupsById(project: string, groupIds: number[]): Promise<TaskAgentInterfaces.VariableGroup[]>;
    updateVariableGroup(group: TaskAgentInterfaces.VariableGroup, project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
    acquireAccessToken(authenticationRequest: TaskAgentInterfaces.AadOauthTokenRequest): Promise<TaskAgentInterfaces.AadOauthTokenResult>;
    createAadOAuthRequest(tenantId: string, redirectUri: string, promptOption?: TaskAgentInterfaces.AadLoginPromptOption): Promise<string>;
    getVstsAadTenantId(): Promise<string>;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgent>;
                res = await this.rest.create<TaskAgentInterfaces.TaskAgent>(url, agent, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgent,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgent>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgent>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgent,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgent[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgent[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgent,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgent>;
                res = await this.rest.replace<TaskAgentInterfaces.TaskAgent>(url, agent, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgent,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "e298ef32-5878-4cab-993c-043836571f42",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgent>;
                res = await this.rest.update<TaskAgentInterfaces.TaskAgent>(url, agent, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgent,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "bcd6189c-0303-471f-a8e1-acb22b74d700",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.AzureSubscriptionQueryResult>;
                res = await this.rest.get<TaskAgentInterfaces.AzureSubscriptionQueryResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} deploymentGroupId
    */
    public async generateDeploymentGroupAccessToken(
        project: string,
        deploymentGroupId: number
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "3d197ba2-c3e9-4253-882f-0ee2440f8174",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.DeploymentGroup} deploymentGroup
    * @param {string} project - Project ID or project name
    */
    public async addDeploymentGroup(
        deploymentGroup: TaskAgentInterfaces.DeploymentGroup,
        project: string
        ): Promise<TaskAgentInterfaces.DeploymentGroup> {

        return new Promise<TaskAgentInterfaces.DeploymentGroup>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "083c4d89-ab35-45af-aa11-7cf66895c53e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentGroup>;
                res = await this.rest.create<TaskAgentInterfaces.DeploymentGroup>(url, deploymentGroup, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentGroup,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} deploymentGroupId
    */
    public async deleteDeploymentGroup(
        project: string,
        deploymentGroupId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "083c4d89-ab35-45af-aa11-7cf66895c53e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} deploymentGroupId
    * @param {TaskAgentInterfaces.DeploymentGroupActionFilter} actionFilter
    * @param {TaskAgentInterfaces.DeploymentGroupExpands} expand
    */
    public async getDeploymentGroup(
        project: string,
        deploymentGroupId: number,
        actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter,
        expand?: TaskAgentInterfaces.DeploymentGroupExpands
        ): Promise<TaskAgentInterfaces.DeploymentGroup> {

        return new Promise<TaskAgentInterfaces.DeploymentGroup>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            let queryValues: any = {
                actionFilter: actionFilter,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "083c4d89-ab35-45af-aa11-7cf66895c53e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentGroup>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentGroup>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentGroup,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} name
    * @param {TaskAgentInterfaces.DeploymentGroupActionFilter} actionFilter
    * @param {TaskAgentInterfaces.DeploymentGroupExpands} expand
    */
    public async getDeploymentGroups(
        project: string,
        name?: string,
        actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter,
        expand?: TaskAgentInterfaces.DeploymentGroupExpands
        ): Promise<TaskAgentInterfaces.DeploymentGroup[]> {

        return new Promise<TaskAgentInterfaces.DeploymentGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                name: name,
                actionFilter: actionFilter,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "083c4d89-ab35-45af-aa11-7cf66895c53e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentGroup[]>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentGroup[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentGroup,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.DeploymentGroup} deploymentGroup
    * @param {string} project - Project ID or project name
    * @param {number} deploymentGroupId
    */
    public async updateDeploymentGroup(
        deploymentGroup: TaskAgentInterfaces.DeploymentGroup,
        project: string,
        deploymentGroupId: number
        ): Promise<TaskAgentInterfaces.DeploymentGroup> {

        return new Promise<TaskAgentInterfaces.DeploymentGroup>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "083c4d89-ab35-45af-aa11-7cf66895c53e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentGroup>;
                res = await this.rest.update<TaskAgentInterfaces.DeploymentGroup>(url, deploymentGroup, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentGroup,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "f223b809-8c33-4b7d-b53f-07232569b5d6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string[]>;
                res = await this.rest.create<string[]>(url, endpoint, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} hubName
    * @param {boolean} includeEnterpriseUsersCount
    * @param {boolean} includeHostedAgentMinutesCount
    */
    public async getTaskHubLicenseDetails(
        hubName: string,
        includeEnterpriseUsersCount?: boolean,
        includeHostedAgentMinutesCount?: boolean
        ): Promise<TaskAgentInterfaces.TaskHubLicenseDetails> {

        return new Promise<TaskAgentInterfaces.TaskHubLicenseDetails>(async (resolve, reject) => {
            let routeValues: any = {
                hubName: hubName
            };

            let queryValues: any = {
                includeEnterpriseUsersCount: includeEnterpriseUsersCount,
                includeHostedAgentMinutesCount: includeHostedAgentMinutesCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "f9f0f436-b8a1-4475-9041-1ccdbf8f0128",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskHubLicenseDetails>;
                res = await this.rest.get<TaskAgentInterfaces.TaskHubLicenseDetails>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "f9f0f436-b8a1-4475-9041-1ccdbf8f0128",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskHubLicenseDetails>;
                res = await this.rest.replace<TaskAgentInterfaces.TaskHubLicenseDetails>(url, taskHubLicenseDetails, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.InputValidationRequest} inputValidationRequest
    */
    public async validateInputs(
        inputValidationRequest: TaskAgentInterfaces.InputValidationRequest
        ): Promise<TaskAgentInterfaces.InputValidationRequest> {

        return new Promise<TaskAgentInterfaces.InputValidationRequest>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "58475b1e-adaf-4155-9bc1-e04bf1fff4c2",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.InputValidationRequest>;
                res = await this.rest.create<TaskAgentInterfaces.InputValidationRequest>(url, inputValidationRequest, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
    * @param {TaskAgentInterfaces.TaskResult} result
    */
    public async deleteAgentRequest(
        poolId: number,
        requestId: number,
        lockToken: string,
        result?: TaskAgentInterfaces.TaskResult
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                requestId: requestId
            };

            let queryValues: any = {
                lockToken: lockToken,
                result: result,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentJobRequest>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentJobRequest>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentJobRequest[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentJobRequest[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentJobRequest[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentJobRequest[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentJobRequest[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentJobRequest[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentJobRequest>;
                res = await this.rest.create<TaskAgentInterfaces.TaskAgentJobRequest>(url, request, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "fc825784-c92a-4299-9221-998a02d1b54f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentJobRequest>;
                res = await this.rest.update<TaskAgentInterfaces.TaskAgentJobRequest>(url, request, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentJobRequest,
                                              false);

                resolve(ret);
                
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
    public async generateDeploymentMachineGroupAccessToken(
        project: string,
        machineGroupId: number
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                machineGroupId: machineGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "f8c7c0de-ac0d-469b-9cb1-c21f72d67693",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachineGroup>;
                res = await this.rest.create<TaskAgentInterfaces.DeploymentMachineGroup>(url, machineGroup, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachineGroup>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentMachineGroup>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachineGroup[]>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentMachineGroup[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "d4adf50f-80c6-4ac8-9ca1-6e4e544286e9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachineGroup>;
                res = await this.rest.update<TaskAgentInterfaces.DeploymentMachineGroup>(url, machineGroup, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachineGroup,
                                              false);

                resolve(ret);
                
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
    public async getDeploymentMachineGroupMachines(
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
                    "3.2-preview.1",
                    "distributedtask",
                    "966c3874-c347-4b18-a90c-d509116717fd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine[]>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentMachine[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              true);

                resolve(ret);
                
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
    public async updateDeploymentMachineGroupMachines(
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
                    "3.2-preview.1",
                    "distributedtask",
                    "966c3874-c347-4b18-a90c-d509116717fd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine[]>;
                res = await this.rest.update<TaskAgentInterfaces.DeploymentMachine[]>(url, deploymentMachines, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} deploymentGroupId
    * @param {string[]} tags
    */
    public async getDeploymentMachines(
        project: string,
        deploymentGroupId: number,
        tags?: string[]
        ): Promise<TaskAgentInterfaces.DeploymentMachine[]> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            let queryValues: any = {
                tags: tags && tags.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "6f6d406f-cfe6-409c-9327-7009928077e7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine[]>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentMachine[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.DeploymentMachine[]} deploymentMachines
    * @param {string} project - Project ID or project name
    * @param {number} deploymentGroupId
    */
    public async updateDeploymentMachines(
        deploymentMachines: TaskAgentInterfaces.DeploymentMachine[],
        project: string,
        deploymentGroupId: number
        ): Promise<TaskAgentInterfaces.DeploymentMachine[]> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "6f6d406f-cfe6-409c-9327-7009928077e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine[]>;
                res = await this.rest.update<TaskAgentInterfaces.DeploymentMachine[]>(url, deploymentMachines, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition} definition
    * @param {number} poolId
    */
    public async createAgentPoolMaintenanceDefinition(
        definition: TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition> {

        return new Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "80572e16-58f0-4419-ac07-d19fde32195c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
                res = await this.rest.create<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>(url, definition, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPoolMaintenanceDefinition,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} definitionId
    */
    public async deleteAgentPoolMaintenanceDefinition(
        poolId: number,
        definitionId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                definitionId: definitionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "80572e16-58f0-4419-ac07-d19fde32195c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} definitionId
    */
    public async getAgentPoolMaintenanceDefinition(
        poolId: number,
        definitionId: number
        ): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition> {

        return new Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                definitionId: definitionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "80572e16-58f0-4419-ac07-d19fde32195c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPoolMaintenanceDefinition,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    */
    public async getAgentPoolMaintenanceDefinitions(
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition[]>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "80572e16-58f0-4419-ac07-d19fde32195c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPoolMaintenanceDefinition,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition} definition
    * @param {number} poolId
    * @param {number} definitionId
    */
    public async updateAgentPoolMaintenanceDefinition(
        definition: TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition,
        poolId: number,
        definitionId: number
        ): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition> {

        return new Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                definitionId: definitionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "80572e16-58f0-4419-ac07-d19fde32195c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
                res = await this.rest.replace<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>(url, definition, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPoolMaintenanceDefinition,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} jobId
    */
    public async deleteAgentPoolMaintenanceJob(
        poolId: number,
        jobId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                jobId: jobId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "15e7ab6e-abce-4601-a6d8-e111fe148f46",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} jobId
    */
    public async getAgentPoolMaintenanceJob(
        poolId: number,
        jobId: number
        ): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob> {

        return new Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                jobId: jobId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "15e7ab6e-abce-4601-a6d8-e111fe148f46",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPoolMaintenanceJob,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} jobId
    */
    public async getAgentPoolMaintenanceJobLogs(
        poolId: number,
        jobId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                jobId: jobId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "15e7ab6e-abce-4601-a6d8-e111fe148f46",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} definitionId
    */
    public async getAgentPoolMaintenanceJobs(
        poolId: number,
        definitionId?: number
        ): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob[]>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                definitionId: definitionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "15e7ab6e-abce-4601-a6d8-e111fe148f46",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPoolMaintenanceJob,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPoolMaintenanceJob} job
    * @param {number} poolId
    */
    public async queueAgentPoolMaintenanceJob(
        job: TaskAgentInterfaces.TaskAgentPoolMaintenanceJob,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob> {

        return new Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "15e7ab6e-abce-4601-a6d8-e111fe148f46",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
                res = await this.rest.create<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>(url, job, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPoolMaintenanceJob,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskAgentPoolMaintenanceJob} job
    * @param {number} poolId
    * @param {number} jobId
    */
    public async updateAgentPoolMaintenanceJob(
        job: TaskAgentInterfaces.TaskAgentPoolMaintenanceJob,
        poolId: number,
        jobId: number
        ): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob> {

        return new Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                jobId: jobId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "15e7ab6e-abce-4601-a6d8-e111fe148f46",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
                res = await this.rest.update<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>(url, job, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPoolMaintenanceJob,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentMessage>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentMessage>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, message, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.2",
                    "distributedtask",
                    "8ffcd551-079c-493a-9c02-54346299d144",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.PackageMetadata>;
                res = await this.rest.get<TaskAgentInterfaces.PackageMetadata>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.PackageMetadata,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.2",
                    "distributedtask",
                    "8ffcd551-079c-493a-9c02-54346299d144",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.PackageMetadata[]>;
                res = await this.rest.get<TaskAgentInterfaces.PackageMetadata[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.PackageMetadata,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "381dd2bb-35cf-4103-ae8c-3c815b25763c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VSSInterfaces.IdentityRef[]>;
                res = await this.rest.get<VSSInterfaces.IdentityRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPool>;
                res = await this.rest.create<TaskAgentInterfaces.TaskAgentPool>(url, pool, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPool,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPool>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentPool>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPool,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPool[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentPool[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPool,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "a8c47e17-4d56-4a56-92bb-de7ea7dc65be",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentPool>;
                res = await this.rest.update<TaskAgentInterfaces.TaskAgentPool>(url, pool, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentPool,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "b0c6d64d-c9fa-4946-b8de-77de623ee585",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VSSInterfaces.IdentityRef[]>;
                res = await this.rest.get<VSSInterfaces.IdentityRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentQueue>;
                res = await this.rest.create<TaskAgentInterfaces.TaskAgentQueue>(url, queue, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentQueue,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentQueue>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentQueue>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentQueue,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentQueue[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentQueue[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentQueue,
                                              true);

                resolve(ret);
                
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
    public async getTaskGroupHistory(
        project: string,
        taskGroupId: string
        ): Promise<TaskAgentInterfaces.TaskGroupRevision[]> {

        return new Promise<TaskAgentInterfaces.TaskGroupRevision[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                taskGroupId: taskGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "100cc92a-b255-47fa-9ab3-e44a2985a3ac",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskGroupRevision[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskGroupRevision[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskGroupRevision,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Delete a secure file
    * 
    * @param {string} project - Project ID or project name
    * @param {number} secureFileId - The unique secure file Id
    */
    public async deleteSecureFile(
        project: string,
        secureFileId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                secureFileId: secureFileId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Download a secure file by Id
    * 
    * @param {string} project - Project ID or project name
    * @param {number} secureFileId - The unique secure file Id
    * @param {string} ticket - A valid download ticket
    * @param {boolean} download - If download is true, the file is sent as attachement in the response body. If download is false, the response body contains the file stream.
    */
    public async downloadSecureFile(
        project: string,
        secureFileId: number,
        ticket: string,
        download?: boolean
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                secureFileId: secureFileId
            };

            let queryValues: any = {
                ticket: ticket,
                download: download,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get a secure file
    * 
    * @param {string} project - Project ID or project name
    * @param {number} secureFileId - The unique secure file Id
    * @param {boolean} includeDownloadTicket - If includeDownloadTicket is true and the caller has permissions, a download ticket is included in the response.
    */
    public async getSecureFile(
        project: string,
        secureFileId: number,
        includeDownloadTicket?: boolean
        ): Promise<TaskAgentInterfaces.SecureFile> {

        return new Promise<TaskAgentInterfaces.SecureFile>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                secureFileId: secureFileId
            };

            let queryValues: any = {
                includeDownloadTicket: includeDownloadTicket,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.SecureFile>;
                res = await this.rest.get<TaskAgentInterfaces.SecureFile>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.SecureFile,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get secure files
    * 
    * @param {string} project - Project ID or project name
    * @param {string} namePattern - Name of the secure file to match. Can include wildcards to match multiple files.
    * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
    * @param {TaskAgentInterfaces.SecureFileActionFilter} actionFilter - Filter by secure file permissions for View, Manage or Use action. Defaults to View.
    */
    public async getSecureFiles(
        project: string,
        namePattern?: string,
        includeDownloadTickets?: boolean,
        actionFilter?: TaskAgentInterfaces.SecureFileActionFilter
        ): Promise<TaskAgentInterfaces.SecureFile[]> {

        return new Promise<TaskAgentInterfaces.SecureFile[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                namePattern: namePattern,
                includeDownloadTickets: includeDownloadTickets,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.SecureFile[]>;
                res = await this.rest.get<TaskAgentInterfaces.SecureFile[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.SecureFile,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get secure files
    * 
    * @param {string} project - Project ID or project name
    * @param {number[]} secureFileIds - A list of secure file Ids
    * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
    */
    public async getSecureFilesByIds(
        project: string,
        secureFileIds: number[],
        includeDownloadTickets?: boolean
        ): Promise<TaskAgentInterfaces.SecureFile[]> {

        return new Promise<TaskAgentInterfaces.SecureFile[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                secureFileIds: secureFileIds && secureFileIds.join(","),
                includeDownloadTickets: includeDownloadTickets,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.SecureFile[]>;
                res = await this.rest.get<TaskAgentInterfaces.SecureFile[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.SecureFile,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Query secure files using a name pattern and a condition on file properties.
    * 
    * @param {string} condition - The main condition syntax is described [here](https://go.microsoft.com/fwlink/?linkid=842996). Use the *property('property-name')* function to access the value of the specified property of a secure file. It returns null if the property is not set. E.g. ``` and( eq( property('devices'), '2' ), in( property('provisioning profile type'), 'ad hoc', 'development' ) ) ```
    * @param {string} project - Project ID or project name
    * @param {string} namePattern - Name of the secure file to match. Can include wildcards to match multiple files.
    */
    public async querySecureFilesByProperties(
        condition: string,
        project: string,
        namePattern?: string
        ): Promise<TaskAgentInterfaces.SecureFile[]> {

        return new Promise<TaskAgentInterfaces.SecureFile[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                namePattern: namePattern,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.SecureFile[]>;
                res = await this.rest.create<TaskAgentInterfaces.SecureFile[]>(url, condition, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.SecureFile,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update the name or properties of an existing secure file
    * 
    * @param {TaskAgentInterfaces.SecureFile} secureFile - The secure file with updated name and/or properties
    * @param {string} project - Project ID or project name
    * @param {number} secureFileId - The unique secure file Id
    */
    public async updateSecureFile(
        secureFile: TaskAgentInterfaces.SecureFile,
        project: string,
        secureFileId: number
        ): Promise<TaskAgentInterfaces.SecureFile> {

        return new Promise<TaskAgentInterfaces.SecureFile>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                secureFileId: secureFileId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.SecureFile>;
                res = await this.rest.update<TaskAgentInterfaces.SecureFile>(url, secureFile, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.SecureFile,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update properties and/or names of a set of secure files. Files are identified by their IDs. Properties provided override the existing one entirely, i.e. do not merge.
    * 
    * @param {TaskAgentInterfaces.SecureFile[]} secureFiles - A list of secure file objects. Only three field must be populated Id, Name, and Properties. The rest of fields in the object are ignored.
    * @param {string} project - Project ID or project name
    */
    public async updateSecureFiles(
        secureFiles: TaskAgentInterfaces.SecureFile[],
        project: string
        ): Promise<TaskAgentInterfaces.SecureFile[]> {

        return new Promise<TaskAgentInterfaces.SecureFile[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.SecureFile[]>;
                res = await this.rest.update<TaskAgentInterfaces.SecureFile[]>(url, secureFiles, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.SecureFile,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Upload a secure file, include the file stream in the request body
    * 
    * @param {NodeJS.ReadableStream} contentStream - Content to upload
    * @param {string} project - Project ID or project name
    * @param {string} name - Name of the file to upload
    */
    public async uploadSecureFile(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        project: string,
        name: string
        ): Promise<TaskAgentInterfaces.SecureFile> {

        return new Promise<TaskAgentInterfaces.SecureFile>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                name: name,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.SecureFile>;
                res = await this.rest.uploadStream<TaskAgentInterfaces.SecureFile>("POST", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.SecureFile,
                                              false);

                resolve(ret);
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
                    "3.2-preview.2",
                    "distributedtask",
                    "f956a7de-d766-43af-81b1-e9e349245634",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.ServiceEndpointRequestResult>;
                res = await this.rest.create<TaskAgentInterfaces.ServiceEndpointRequestResult>(url, serviceEndpointRequest, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ServiceEndpointRequestResult,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.2",
                    "distributedtask",
                    "f956a7de-d766-43af-81b1-e9e349245634",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string[]>;
                res = await this.rest.create<string[]>(url, binding, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.ServiceEndpoint>;
                res = await this.rest.create<TaskAgentInterfaces.ServiceEndpoint>(url, endpoint, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.ServiceEndpoint>;
                res = await this.rest.get<TaskAgentInterfaces.ServiceEndpoint>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.ServiceEndpoint[]>;
                res = await this.rest.get<TaskAgentInterfaces.ServiceEndpoint[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.ServiceEndpoint>;
                res = await this.rest.replace<TaskAgentInterfaces.ServiceEndpoint>(url, endpoint, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "7c74af83-8605-45c1-a30b-7a05d5d7f8c1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.ServiceEndpointType[]>;
                res = await this.rest.get<TaskAgentInterfaces.ServiceEndpointType[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ServiceEndpointType,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "134e239e-2df3-4794-a6f6-24f1f19ec8dc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentSession>;
                res = await this.rest.create<TaskAgentInterfaces.TaskAgentSession>(url, session, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentSession,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "134e239e-2df3-4794-a6f6-24f1f19ec8dc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskGroup>;
                res = await this.rest.create<TaskAgentInterfaces.TaskGroup>(url, taskGroup, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskGroup,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} taskGroupId
    * @param {number} revision
    */
    public async getTaskGroupRevision(
        project: string,
        taskGroupId: string,
        revision: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                taskGroupId: taskGroupId
            };

            let queryValues: any = {
                revision: revision,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
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
                    "3.2-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskGroup[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskGroup[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskGroup,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskGroup>;
                res = await this.rest.replace<TaskAgentInterfaces.TaskGroup>(url, taskGroup, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskGroup,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
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
                    "3.2-preview.1",
                    "distributedtask",
                    "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskDefinition>;
                res = await this.rest.get<TaskAgentInterfaces.TaskDefinition>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskDefinition[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskDefinition[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} poolId
    * @param {number} agentId
    * @param {string} currentState
    */
    public async updateAgentUpdateState(
        poolId: number,
        agentId: number,
        currentState: string
        ): Promise<TaskAgentInterfaces.TaskAgent> {

        return new Promise<TaskAgentInterfaces.TaskAgent>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId,
                agentId: agentId
            };

            let queryValues: any = {
                currentState: currentState,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "8cc1b02b-ae49-4516-b5ad-4f9b29967c30",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgent>;
                res = await this.rest.replace<TaskAgentInterfaces.TaskAgent>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgent,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "30ba3ada-fedf-4da8-bbb5-dacf2f82e176",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgent>;
                res = await this.rest.replace<TaskAgentInterfaces.TaskAgent>(url, userCapabilities, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgent,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.VariableGroup>;
                res = await this.rest.create<TaskAgentInterfaces.VariableGroup>(url, group, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.VariableGroup,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.VariableGroup>;
                res = await this.rest.get<TaskAgentInterfaces.VariableGroup>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.VariableGroup,
                                              false);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.VariableGroup[]>;
                res = await this.rest.get<TaskAgentInterfaces.VariableGroup[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.VariableGroup,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.VariableGroup[]>;
                res = await this.rest.get<TaskAgentInterfaces.VariableGroup[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.VariableGroup,
                                              true);

                resolve(ret);
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "f5b09dd5-9d54-45a1-8b5a-1c8287d634cc",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.VariableGroup>;
                res = await this.rest.replace<TaskAgentInterfaces.VariableGroup>(url, group, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.VariableGroup,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.AadOauthTokenRequest} authenticationRequest
    */
    public async acquireAccessToken(
        authenticationRequest: TaskAgentInterfaces.AadOauthTokenRequest
        ): Promise<TaskAgentInterfaces.AadOauthTokenResult> {

        return new Promise<TaskAgentInterfaces.AadOauthTokenResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "9c63205e-3a0f-42a0-ad88-095200f13607",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<TaskAgentInterfaces.AadOauthTokenResult>;
                res = await this.rest.create<TaskAgentInterfaces.AadOauthTokenResult>(url, authenticationRequest, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} tenantId
    * @param {string} redirectUri
    * @param {TaskAgentInterfaces.AadLoginPromptOption} promptOption
    */
    public async createAadOAuthRequest(
        tenantId: string,
        redirectUri: string,
        promptOption?: TaskAgentInterfaces.AadLoginPromptOption
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                tenantId: tenantId,
                redirectUri: redirectUri,
                promptOption: promptOption,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "9c63205e-3a0f-42a0-ad88-095200f13607",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    */
    public async getVstsAadTenantId(
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "distributedtask",
                    "9c63205e-3a0f-42a0-ad88-095200f13607",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<string>;
                res = await this.rest.get<string>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
