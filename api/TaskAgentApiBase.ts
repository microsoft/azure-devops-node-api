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
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");

export interface ITaskAgentApiBase extends basem.ClientApiBase {
    addAgentCloud(agentCloud: TaskAgentInterfaces.TaskAgentCloud): Promise<TaskAgentInterfaces.TaskAgentCloud>;
    deleteAgentCloud(agentCloudId: number): Promise<TaskAgentInterfaces.TaskAgentCloud>;
    getAgentCloud(agentCloudId: number): Promise<TaskAgentInterfaces.TaskAgentCloud>;
    getAgentClouds(): Promise<TaskAgentInterfaces.TaskAgentCloud[]>;
    getAgentCloudTypes(): Promise<TaskAgentInterfaces.TaskAgentCloudType[]>;
    queueAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, queueId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    addAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    deleteAgent(poolId: number, agentId: number): Promise<void>;
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[]): Promise<TaskAgentInterfaces.TaskAgent>;
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[], demands?: string[]): Promise<TaskAgentInterfaces.TaskAgent[]>;
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    getAzureManagementGroups(): Promise<TaskAgentInterfaces.AzureManagementGroupQueryResult>;
    getAzureSubscriptions(): Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult>;
    generateDeploymentGroupAccessToken(project: string, deploymentGroupId: number): Promise<string>;
    addDeploymentGroup(deploymentGroup: TaskAgentInterfaces.DeploymentGroupCreateParameter, project: string): Promise<TaskAgentInterfaces.DeploymentGroup>;
    deleteDeploymentGroup(project: string, deploymentGroupId: number): Promise<void>;
    getDeploymentGroup(project: string, deploymentGroupId: number, actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter, expand?: TaskAgentInterfaces.DeploymentGroupExpands): Promise<TaskAgentInterfaces.DeploymentGroup>;
    getDeploymentGroups(project: string, name?: string, actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter, expand?: TaskAgentInterfaces.DeploymentGroupExpands, continuationToken?: string, top?: number, ids?: number[]): Promise<TaskAgentInterfaces.DeploymentGroup[]>;
    updateDeploymentGroup(deploymentGroup: TaskAgentInterfaces.DeploymentGroupUpdateParameter, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentGroup>;
    getDeploymentGroupsMetrics(project: string, deploymentGroupName?: string, continuationToken?: string, top?: number): Promise<TaskAgentInterfaces.DeploymentGroupMetrics[]>;
    getAgentRequestsForDeploymentMachine(project: string, deploymentGroupId: number, machineId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForDeploymentMachines(project: string, deploymentGroupId: number, machineIds?: number[], completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    refreshDeploymentMachines(project: string, deploymentGroupId: number): Promise<void>;
    generateDeploymentPoolAccessToken(poolId: number): Promise<string>;
    getDeploymentPoolsSummary(poolName?: string, expands?: TaskAgentInterfaces.DeploymentPoolSummaryExpands): Promise<TaskAgentInterfaces.DeploymentPoolSummary[]>;
    getAgentRequestsForDeploymentTarget(project: string, deploymentGroupId: number, targetId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForDeploymentTargets(project: string, deploymentGroupId: number, targetIds?: number[], ownerId?: number, completedOn?: Date, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    refreshDeploymentTargets(project: string, deploymentGroupId: number): Promise<void>;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Promise<string[]>;
    getServiceEndpointExecutionRecords(project: string, endpointId: string, top?: number): Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>;
    addServiceEndpointExecutionRecords(input: TaskAgentInterfaces.ServiceEndpointExecutionRecordsInput, project: string): Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>;
    getTaskHubLicenseDetails(hubName: string, includeEnterpriseUsersCount?: boolean, includeHostedAgentMinutesCount?: boolean): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    updateTaskHubLicenseDetails(taskHubLicenseDetails: TaskAgentInterfaces.TaskHubLicenseDetails, hubName: string): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    validateInputs(inputValidationRequest: TaskAgentInterfaces.InputValidationRequest): Promise<TaskAgentInterfaces.InputValidationRequest>;
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string, result?: TaskAgentInterfaces.TaskResult): Promise<void>;
    getAgentRequest(poolId: number, requestId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    getAgentRequestsForAgent(poolId: number, agentId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForAgents(poolId: number, agentIds?: number[], completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForPlan(poolId: number, planId: string, jobId?: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    queueAgentRequestByPool(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    updateAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    generateDeploymentMachineGroupAccessToken(project: string, machineGroupId: number): Promise<string>;
    addDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    deleteDeploymentMachineGroup(project: string, machineGroupId: number): Promise<void>;
    getDeploymentMachineGroup(project: string, machineGroupId: number, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    getDeploymentMachineGroups(project: string, machineGroupName?: string, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup[]>;
    updateDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    getDeploymentMachineGroupMachines(project: string, machineGroupId: number, tagFilters?: string[]): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    updateDeploymentMachineGroupMachines(deploymentMachines: TaskAgentInterfaces.DeploymentMachine[], project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    addDeploymentMachine(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    deleteDeploymentMachine(project: string, deploymentGroupId: number, machineId: number): Promise<void>;
    getDeploymentMachine(project: string, deploymentGroupId: number, machineId: number, expand?: TaskAgentInterfaces.DeploymentMachineExpands): Promise<TaskAgentInterfaces.DeploymentMachine>;
    getDeploymentMachines(project: string, deploymentGroupId: number, tags?: string[], name?: string, expand?: TaskAgentInterfaces.DeploymentMachineExpands): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    replaceDeploymentMachine(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, machineId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    updateDeploymentMachine(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, machineId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    updateDeploymentMachines(machines: TaskAgentInterfaces.DeploymentMachine[], project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
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
    getPackages(packageType: string, platform?: string, top?: number): Promise<TaskAgentInterfaces.PackageMetadata[]>;
    getAgentPoolMetadata(poolId: number): Promise<NodeJS.ReadableStream>;
    addAgentPool(pool: TaskAgentInterfaces.TaskAgentPool): Promise<TaskAgentInterfaces.TaskAgentPool>;
    deleteAgentPool(poolId: number): Promise<void>;
    getAgentPool(poolId: number, properties?: string[], actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter): Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentPools(poolName?: string, properties?: string[], poolType?: TaskAgentInterfaces.TaskAgentPoolType, actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter): Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    updateAgentPool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPool>;
    addAgentQueue(queue: TaskAgentInterfaces.TaskAgentQueue, project?: string): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    createTeamProject(project?: string): Promise<void>;
    deleteAgentQueue(queueId: number, project?: string): Promise<void>;
    getAgentQueue(queueId: number, project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    getAgentQueues(project?: string, queueName?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    getAgentQueuesByIds(queueIds: number[], project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    getAgentQueuesByNames(queueNames: string[], project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    getAgentCloudRequests(agentCloudId: number): Promise<TaskAgentInterfaces.TaskAgentCloudRequest[]>;
    getResourceLimits(): Promise<TaskAgentInterfaces.ResourceLimit[]>;
    getResourceUsage(parallelismTag?: string, poolIsHosted?: boolean, includeRunningRequests?: boolean): Promise<TaskAgentInterfaces.ResourceUsage>;
    getTaskGroupHistory(project: string, taskGroupId: string): Promise<TaskAgentInterfaces.TaskGroupRevision[]>;
    deleteSecureFile(project: string, secureFileId: string): Promise<void>;
    downloadSecureFile(project: string, secureFileId: string, ticket: string, download?: boolean): Promise<NodeJS.ReadableStream>;
    getSecureFile(project: string, secureFileId: string, includeDownloadTicket?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile>;
    getSecureFiles(project: string, namePattern?: string, includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    getSecureFilesByIds(project: string, secureFileIds: string[], includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    getSecureFilesByNames(project: string, secureFileNames: string[], includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    querySecureFilesByProperties(condition: string, project: string, namePattern?: string): Promise<TaskAgentInterfaces.SecureFile[]>;
    updateSecureFile(secureFile: TaskAgentInterfaces.SecureFile, project: string, secureFileId: string): Promise<TaskAgentInterfaces.SecureFile>;
    updateSecureFiles(secureFiles: TaskAgentInterfaces.SecureFile[], project: string): Promise<TaskAgentInterfaces.SecureFile[]>;
    uploadSecureFile(customHeaders: any, contentStream: NodeJS.ReadableStream, project: string, name: string): Promise<TaskAgentInterfaces.SecureFile>;
    executeServiceEndpointRequest(serviceEndpointRequest: TaskAgentInterfaces.ServiceEndpointRequest, project: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpointRequestResult>;
    queryServiceEndpoint(binding: TaskAgentInterfaces.DataSourceBinding, project: string): Promise<string[]>;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, project: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    deleteServiceEndpoint(project: string, endpointId: string): Promise<void>;
    getServiceEndpointDetails(project: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpoints(project: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    getServiceEndpointsByNames(project: string, endpointNames: string[], type?: string, authSchemes?: string[], includeFailed?: boolean): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    updateServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, project: string, endpointId: string, operation?: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    updateServiceEndpoints(endpoints: TaskAgentInterfaces.ServiceEndpoint[], project: string): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    getServiceEndpointTypes(type?: string, scheme?: string): Promise<TaskAgentInterfaces.ServiceEndpointType[]>;
    createAgentSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number): Promise<TaskAgentInterfaces.TaskAgentSession>;
    deleteAgentSession(poolId: number, sessionId: string): Promise<void>;
    addDeploymentTarget(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    deleteDeploymentTarget(project: string, deploymentGroupId: number, targetId: number): Promise<void>;
    getDeploymentTarget(project: string, deploymentGroupId: number, targetId: number, expand?: TaskAgentInterfaces.DeploymentTargetExpands): Promise<TaskAgentInterfaces.DeploymentMachine>;
    getDeploymentTargets(project: string, deploymentGroupId: number, tags?: string[], name?: string, partialNameMatch?: boolean, expand?: TaskAgentInterfaces.DeploymentTargetExpands, agentStatus?: TaskAgentInterfaces.TaskAgentStatusFilter, agentJobResult?: TaskAgentInterfaces.TaskAgentJobResultFilter, continuationToken?: string, top?: number, enabled?: boolean): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    replaceDeploymentTarget(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, targetId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    updateDeploymentTarget(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, targetId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    updateDeploymentTargets(machines: TaskAgentInterfaces.DeploymentTargetUpdateParameter[], project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    addTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroupCreateParameter, project: string): Promise<TaskAgentInterfaces.TaskGroup>;
    deleteTaskGroup(project: string, taskGroupId: string, comment?: string): Promise<void>;
    getTaskGroup(project: string, taskGroupId: string, versionSpec: string, expand?: TaskAgentInterfaces.TaskGroupExpands): Promise<TaskAgentInterfaces.TaskGroup>;
    getTaskGroupRevision(project: string, taskGroupId: string, revision: number): Promise<NodeJS.ReadableStream>;
    getTaskGroups(project: string, taskGroupId?: string, expanded?: boolean, taskIdFilter?: string, deleted?: boolean, top?: number, continuationToken?: Date, queryOrder?: TaskAgentInterfaces.TaskGroupQueryOrder): Promise<TaskAgentInterfaces.TaskGroup[]>;
    publishPreviewTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroup, project: string, taskGroupId: string, disablePriorVersions?: boolean): Promise<TaskAgentInterfaces.TaskGroup[]>;
    publishTaskGroup(taskGroupMetadata: TaskAgentInterfaces.PublishTaskGroupMetadata, project: string, parentTaskGroupId: string): Promise<TaskAgentInterfaces.TaskGroup[]>;
    undeleteTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroup, project: string): Promise<TaskAgentInterfaces.TaskGroup[]>;
    updateTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroupUpdateParameter, project: string, taskGroupId?: string): Promise<TaskAgentInterfaces.TaskGroup>;
    deleteTaskDefinition(taskId: string): Promise<void>;
    getTaskContentZip(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<NodeJS.ReadableStream>;
    getTaskDefinition(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition>;
    getTaskDefinitions(taskId?: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition[]>;
    updateAgentUpdateState(poolId: number, agentId: number, currentState: string): Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgentUserCapabilities(userCapabilities: { [key: string] : string; }, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    addVariableGroup(group: TaskAgentInterfaces.VariableGroupParameters, project: string): Promise<TaskAgentInterfaces.VariableGroup>;
    deleteVariableGroup(project: string, groupId: number): Promise<void>;
    getVariableGroup(project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
    getVariableGroups(project: string, groupName?: string, actionFilter?: TaskAgentInterfaces.VariableGroupActionFilter, top?: number, continuationToken?: number, queryOrder?: TaskAgentInterfaces.VariableGroupQueryOrder): Promise<TaskAgentInterfaces.VariableGroup[]>;
    getVariableGroupsById(project: string, groupIds: number[]): Promise<TaskAgentInterfaces.VariableGroup[]>;
    updateVariableGroup(group: TaskAgentInterfaces.VariableGroupParameters, project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
    acquireAccessToken(authenticationRequest: TaskAgentInterfaces.AadOauthTokenRequest): Promise<TaskAgentInterfaces.AadOauthTokenResult>;
    createAadOAuthRequest(tenantId: string, redirectUri: string, promptOption?: TaskAgentInterfaces.AadLoginPromptOption, completeCallbackPayload?: string, completeCallbackByAuthCode?: boolean): Promise<string>;
    getVstsAadTenantId(): Promise<string>;
}

export class TaskAgentApiBase extends basem.ClientApiBase implements ITaskAgentApiBase {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-TaskAgent-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "a85b8835-c1a1-4aac-ae97-1c3d0ba72dbd";

    /**
     * @param {TaskAgentInterfaces.TaskAgentCloud} agentCloud
     */
    public async addAgentCloud(
        agentCloud: TaskAgentInterfaces.TaskAgentCloud
        ): Promise<TaskAgentInterfaces.TaskAgentCloud> {

        return new Promise<TaskAgentInterfaces.TaskAgentCloud>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "bfa72b3d-0fc6-43fb-932b-a7f6559f93b9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentCloud>;
                res = await this.rest.create<TaskAgentInterfaces.TaskAgentCloud>(url, agentCloud, options);

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
     * @param {number} agentCloudId
     */
    public async deleteAgentCloud(
        agentCloudId: number
        ): Promise<TaskAgentInterfaces.TaskAgentCloud> {

        return new Promise<TaskAgentInterfaces.TaskAgentCloud>(async (resolve, reject) => {
            let routeValues: any = {
                agentCloudId: agentCloudId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "bfa72b3d-0fc6-43fb-932b-a7f6559f93b9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentCloud>;
                res = await this.rest.del<TaskAgentInterfaces.TaskAgentCloud>(url, options);

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
     * @param {number} agentCloudId
     */
    public async getAgentCloud(
        agentCloudId: number
        ): Promise<TaskAgentInterfaces.TaskAgentCloud> {

        return new Promise<TaskAgentInterfaces.TaskAgentCloud>(async (resolve, reject) => {
            let routeValues: any = {
                agentCloudId: agentCloudId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "bfa72b3d-0fc6-43fb-932b-a7f6559f93b9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentCloud>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentCloud>(url, options);

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
    public async getAgentClouds(
        ): Promise<TaskAgentInterfaces.TaskAgentCloud[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentCloud[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "bfa72b3d-0fc6-43fb-932b-a7f6559f93b9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentCloud[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentCloud[]>(url, options);

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
     * Get agent cloud types.
     * 
     */
    public async getAgentCloudTypes(
        ): Promise<TaskAgentInterfaces.TaskAgentCloudType[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentCloudType[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "5932e193-f376-469d-9c3e-e5588ce12cb5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentCloudType[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentCloudType[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentCloudType,
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
     * @param {number} queueId
     */
    public async queueAgentRequest(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        queueId: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest>(async (resolve, reject) => {
            let routeValues: any = {
                queueId: queueId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "f5f81ffb-f396-498d-85b1-5ada145e648a",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
     * Returns list of azure subscriptions
     * 
     */
    public async getAzureManagementGroups(
        ): Promise<TaskAgentInterfaces.AzureManagementGroupQueryResult> {

        return new Promise<TaskAgentInterfaces.AzureManagementGroupQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "39fe3bf2-7ee0-4198-a469-4a29929afa9c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.AzureManagementGroupQueryResult>;
                res = await this.rest.get<TaskAgentInterfaces.AzureManagementGroupQueryResult>(url, options);

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
     * Returns list of azure subscriptions
     * 
     */
    public async getAzureSubscriptions(
        ): Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult> {

        return new Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * GET a PAT token for managing (configuring, removing, tagging) deployment targets in a deployment group.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment targets are managed.
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
                    "5.0-preview.1",
                    "distributedtask",
                    "3d197ba2-c3e9-4253-882f-0ee2440f8174",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, null, options);

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
     * Create a deployment group.
     * 
     * @param {TaskAgentInterfaces.DeploymentGroupCreateParameter} deploymentGroup - Deployment group to create.
     * @param {string} project - Project ID or project name
     */
    public async addDeploymentGroup(
        deploymentGroup: TaskAgentInterfaces.DeploymentGroupCreateParameter,
        project: string
        ): Promise<TaskAgentInterfaces.DeploymentGroup> {

        return new Promise<TaskAgentInterfaces.DeploymentGroup>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * Delete a deployment group.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to be deleted.
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
                    "5.0-preview.1",
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
     * Get a deployment group by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group.
     * @param {TaskAgentInterfaces.DeploymentGroupActionFilter} actionFilter - Get the deployment group only if this action can be performed on it.
     * @param {TaskAgentInterfaces.DeploymentGroupExpands} expand - Include these additional details in the returned object.
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
                    "5.0-preview.1",
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
     * Get a list of deployment groups by name or IDs.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} name - Name of the deployment group.
     * @param {TaskAgentInterfaces.DeploymentGroupActionFilter} actionFilter - Get only deployment groups on which this action can be performed.
     * @param {TaskAgentInterfaces.DeploymentGroupExpands} expand - Include these additional details in the returned objects.
     * @param {string} continuationToken - Get deployment groups with names greater than this continuationToken lexicographically.
     * @param {number} top - Maximum number of deployment groups to return. Default is **1000**.
     * @param {number[]} ids - Comma separated list of IDs of the deployment groups.
     */
    public async getDeploymentGroups(
        project: string,
        name?: string,
        actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter,
        expand?: TaskAgentInterfaces.DeploymentGroupExpands,
        continuationToken?: string,
        top?: number,
        ids?: number[]
        ): Promise<TaskAgentInterfaces.DeploymentGroup[]> {

        return new Promise<TaskAgentInterfaces.DeploymentGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                name: name,
                actionFilter: actionFilter,
                '$expand': expand,
                continuationToken: continuationToken,
                '$top': top,
                ids: ids && ids.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * Update a deployment group.
     * 
     * @param {TaskAgentInterfaces.DeploymentGroupUpdateParameter} deploymentGroup - Deployment group to update.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group.
     */
    public async updateDeploymentGroup(
        deploymentGroup: TaskAgentInterfaces.DeploymentGroupUpdateParameter,
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
                    "5.0-preview.1",
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
     * Get a list of deployment group metrics.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} deploymentGroupName - Name of the deployment group.
     * @param {string} continuationToken - Get metrics for deployment groups with names greater than this continuationToken lexicographically.
     * @param {number} top - Maximum number of deployment group metrics to return. Default is **50**.
     */
    public async getDeploymentGroupsMetrics(
        project: string,
        deploymentGroupName?: string,
        continuationToken?: string,
        top?: number
        ): Promise<TaskAgentInterfaces.DeploymentGroupMetrics[]> {

        return new Promise<TaskAgentInterfaces.DeploymentGroupMetrics[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                deploymentGroupName: deploymentGroupName,
                continuationToken: continuationToken,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "281c6308-427a-49e1-b83a-dac0f4862189",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentGroupMetrics[]>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentGroupMetrics[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentGroupMetrics,
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
     * @param {number} machineId
     * @param {number} completedRequestCount
     */
    public async getAgentRequestsForDeploymentMachine(
        project: string,
        deploymentGroupId: number,
        machineId: number,
        completedRequestCount?: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {
        if (machineId == null) {
            throw new TypeError('machineId can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            let queryValues: any = {
                machineId: machineId,
                completedRequestCount: completedRequestCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "a3540e5b-f0dc-4668-963b-b752459be545",
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
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number[]} machineIds
     * @param {number} completedRequestCount
     */
    public async getAgentRequestsForDeploymentMachines(
        project: string,
        deploymentGroupId: number,
        machineIds?: number[],
        completedRequestCount?: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            let queryValues: any = {
                machineIds: machineIds && machineIds.join(","),
                completedRequestCount: completedRequestCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "a3540e5b-f0dc-4668-963b-b752459be545",
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
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     */
    public async refreshDeploymentMachines(
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
                    "5.0-preview.1",
                    "distributedtask",
                    "91006ac4-0f68-4d82-a2bc-540676bd73ce",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
     * GET a PAT token for managing (configuring, removing, tagging) deployment agents in a deployment pool.
     * 
     * @param {number} poolId - ID of the deployment pool in which deployment agents are managed.
     */
    public async generateDeploymentPoolAccessToken(
        poolId: number
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "e077ee4a-399b-420b-841f-c43fbc058e0b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, null, options);

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
     * Get a list of deployment pool summaries.
     * 
     * @param {string} poolName - Name of the deployment pool.
     * @param {TaskAgentInterfaces.DeploymentPoolSummaryExpands} expands - Include these additional details in the returned objects.
     */
    public async getDeploymentPoolsSummary(
        poolName?: string,
        expands?: TaskAgentInterfaces.DeploymentPoolSummaryExpands
        ): Promise<TaskAgentInterfaces.DeploymentPoolSummary[]> {

        return new Promise<TaskAgentInterfaces.DeploymentPoolSummary[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                poolName: poolName,
                expands: expands,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6525d6c6-258f-40e0-a1a9-8a24a3957625",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentPoolSummary[]>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentPoolSummary[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentPoolSummary,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get agent requests for a deployment target.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to which the target belongs.
     * @param {number} targetId - ID of the deployment target.
     * @param {number} completedRequestCount - Maximum number of completed requests to return. Default is **50**
     */
    public async getAgentRequestsForDeploymentTarget(
        project: string,
        deploymentGroupId: number,
        targetId: number,
        completedRequestCount?: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {
        if (targetId == null) {
            throw new TypeError('targetId can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            let queryValues: any = {
                targetId: targetId,
                completedRequestCount: completedRequestCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "2fac0be3-8c8f-4473-ab93-c1389b08a2c9",
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
     * Get agent requests for a list deployment targets.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to which the targets belong.
     * @param {number[]} targetIds - Comma separated list of IDs of the deployment targets.
     * @param {number} ownerId - Id of owner of agent job request.
     * @param {Date} completedOn - Datetime to return request after this time.
     * @param {number} completedRequestCount - Maximum number of completed requests to return for each target. Default is **50**
     */
    public async getAgentRequestsForDeploymentTargets(
        project: string,
        deploymentGroupId: number,
        targetIds?: number[],
        ownerId?: number,
        completedOn?: Date,
        completedRequestCount?: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            let queryValues: any = {
                targetIds: targetIds && targetIds.join(","),
                ownerId: ownerId,
                completedOn: completedOn,
                completedRequestCount: completedRequestCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "2fac0be3-8c8f-4473-ab93-c1389b08a2c9",
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
     * Upgrade the deployment targets in a deployment group.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group.
     */
    public async refreshDeploymentTargets(
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
                    "5.0-preview.1",
                    "distributedtask",
                    "1c1a817f-f23d-41c6-bf8d-14b638f64152",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
                    "5.0-preview.1",
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
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @param {number} top
     */
    public async getServiceEndpointExecutionRecords(
        project: string,
        endpointId: string,
        top?: number
        ): Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]> {

        return new Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                endpointId: endpointId
            };

            let queryValues: any = {
                top: top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "3ad71e20-7586-45f9-a6c8-0342e00835ac",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>;
                res = await this.rest.get<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ServiceEndpointExecutionRecord,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TaskAgentInterfaces.ServiceEndpointExecutionRecordsInput} input
     * @param {string} project - Project ID or project name
     */
    public async addServiceEndpointExecutionRecords(
        input: TaskAgentInterfaces.ServiceEndpointExecutionRecordsInput,
        project: string
        ): Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]> {

        return new Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "11a45c69-2cce-4ade-a361-c9f5a37239ee",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>;
                res = await this.rest.create<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>(url, input, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ServiceEndpointExecutionRecord,
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
                    "5.0-preview.3",
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
                    "5.0-preview.3",
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
                    "5.0-preview.1",
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
        if (lockToken == null) {
            throw new TypeError('lockToken can not be null or undefined');
        }

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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
        if (agentId == null) {
            throw new TypeError('agentId can not be null or undefined');
        }

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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
        if (planId == null) {
            throw new TypeError('planId can not be null or undefined');
        }

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
                    "5.0-preview.1",
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
    public async queueAgentRequestByPool(
        request: TaskAgentInterfaces.TaskAgentJobRequest,
        poolId: number
        ): Promise<TaskAgentInterfaces.TaskAgentJobRequest> {

        return new Promise<TaskAgentInterfaces.TaskAgentJobRequest>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
        if (lockToken == null) {
            throw new TypeError('lockToken can not be null or undefined');
        }

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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
                    "distributedtask",
                    "f8c7c0de-ac0d-469b-9cb1-c21f72d67693",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, null, options);

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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
     * @param {TaskAgentInterfaces.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     */
    public async addDeploymentMachine(
        machine: TaskAgentInterfaces.DeploymentMachine,
        project: string,
        deploymentGroupId: number
        ): Promise<TaskAgentInterfaces.DeploymentMachine> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6f6d406f-cfe6-409c-9327-7009928077e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine>;
                res = await this.rest.create<TaskAgentInterfaces.DeploymentMachine>(url, machine, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
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
     * @param {number} machineId
     */
    public async deleteDeploymentMachine(
        project: string,
        deploymentGroupId: number,
        machineId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId,
                machineId: machineId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6f6d406f-cfe6-409c-9327-7009928077e7",
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
     * @param {number} machineId
     * @param {TaskAgentInterfaces.DeploymentMachineExpands} expand
     */
    public async getDeploymentMachine(
        project: string,
        deploymentGroupId: number,
        machineId: number,
        expand?: TaskAgentInterfaces.DeploymentMachineExpands
        ): Promise<TaskAgentInterfaces.DeploymentMachine> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId,
                machineId: machineId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6f6d406f-cfe6-409c-9327-7009928077e7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentMachine>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
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
     * @param {string[]} tags
     * @param {string} name
     * @param {TaskAgentInterfaces.DeploymentMachineExpands} expand
     */
    public async getDeploymentMachines(
        project: string,
        deploymentGroupId: number,
        tags?: string[],
        name?: string,
        expand?: TaskAgentInterfaces.DeploymentMachineExpands
        ): Promise<TaskAgentInterfaces.DeploymentMachine[]> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            let queryValues: any = {
                tags: tags && tags.join(","),
                name: name,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * @param {TaskAgentInterfaces.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     */
    public async replaceDeploymentMachine(
        machine: TaskAgentInterfaces.DeploymentMachine,
        project: string,
        deploymentGroupId: number,
        machineId: number
        ): Promise<TaskAgentInterfaces.DeploymentMachine> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId,
                machineId: machineId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6f6d406f-cfe6-409c-9327-7009928077e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine>;
                res = await this.rest.replace<TaskAgentInterfaces.DeploymentMachine>(url, machine, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TaskAgentInterfaces.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     */
    public async updateDeploymentMachine(
        machine: TaskAgentInterfaces.DeploymentMachine,
        project: string,
        deploymentGroupId: number,
        machineId: number
        ): Promise<TaskAgentInterfaces.DeploymentMachine> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId,
                machineId: machineId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6f6d406f-cfe6-409c-9327-7009928077e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine>;
                res = await this.rest.update<TaskAgentInterfaces.DeploymentMachine>(url, machine, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TaskAgentInterfaces.DeploymentMachine[]} machines
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     */
    public async updateDeploymentMachines(
        machines: TaskAgentInterfaces.DeploymentMachine[],
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
                    "5.0-preview.1",
                    "distributedtask",
                    "6f6d406f-cfe6-409c-9327-7009928077e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine[]>;
                res = await this.rest.update<TaskAgentInterfaces.DeploymentMachine[]>(url, machines, options);

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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
        if (sessionId == null) {
            throw new TypeError('sessionId can not be null or undefined');
        }

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
                    "5.0-preview.1",
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
        if (sessionId == null) {
            throw new TypeError('sessionId can not be null or undefined');
        }

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
                    "5.0-preview.1",
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
        if (agentId == null) {
            throw new TypeError('agentId can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                agentId: agentId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
                    "5.0-preview.1",
                    "distributedtask",
                    "c3a054f6-7a8a-49c0-944e-3a8e5d7adfd7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
        if (requestId == null) {
            throw new TypeError('requestId can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            let queryValues: any = {
                requestId: requestId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
                    "5.0-preview.2",
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
        packageType: string,
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
                    "5.0-preview.2",
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
    public async getAgentPoolMetadata(
        poolId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                poolId: poolId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "0d62f887-9f53-48b9-9161-4c35d5735b0f",
                    routeValues);

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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
                    "distributedtask",
                    "900fa995-c559-4923-aae7-f8424fe4fbea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.replace<void>(url, null, options);

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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
     * @param {number[]} queueIds
     * @param {string} project - Project ID or project name
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     */
    public async getAgentQueuesByIds(
        queueIds: number[],
        project?: string,
        actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter
        ): Promise<TaskAgentInterfaces.TaskAgentQueue[]> {
        if (queueIds == null) {
            throw new TypeError('queueIds can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.TaskAgentQueue[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                queueIds: queueIds && queueIds.join(","),
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * @param {string[]} queueNames
     * @param {string} project - Project ID or project name
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     */
    public async getAgentQueuesByNames(
        queueNames: string[],
        project?: string,
        actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter
        ): Promise<TaskAgentInterfaces.TaskAgentQueue[]> {
        if (queueNames == null) {
            throw new TypeError('queueNames can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.TaskAgentQueue[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                queueNames: queueNames && queueNames.join(","),
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * @param {number} agentCloudId
     */
    public async getAgentCloudRequests(
        agentCloudId: number
        ): Promise<TaskAgentInterfaces.TaskAgentCloudRequest[]> {

        return new Promise<TaskAgentInterfaces.TaskAgentCloudRequest[]>(async (resolve, reject) => {
            let routeValues: any = {
                agentCloudId: agentCloudId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "20189bd7-5134-49c2-b8e9-f9e856eea2b2",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentCloudRequest[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentCloudRequest[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentCloudRequest,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     */
    public async getResourceLimits(
        ): Promise<TaskAgentInterfaces.ResourceLimit[]> {

        return new Promise<TaskAgentInterfaces.ResourceLimit[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "1f1f0557-c445-42a6-b4a0-0df605a3a0f8",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ResourceLimit[]>;
                res = await this.rest.get<TaskAgentInterfaces.ResourceLimit[]>(url, options);

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
     * @param {string} parallelismTag
     * @param {boolean} poolIsHosted
     * @param {boolean} includeRunningRequests
     */
    public async getResourceUsage(
        parallelismTag?: string,
        poolIsHosted?: boolean,
        includeRunningRequests?: boolean
        ): Promise<TaskAgentInterfaces.ResourceUsage> {

        return new Promise<TaskAgentInterfaces.ResourceUsage>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                parallelismTag: parallelismTag,
                poolIsHosted: poolIsHosted,
                includeRunningRequests: includeRunningRequests,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "distributedtask",
                    "eae1d376-a8b1-4475-9041-1dfdbe8f0143",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ResourceUsage>;
                res = await this.rest.get<TaskAgentInterfaces.ResourceUsage>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.ResourceUsage,
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
                    "5.0-preview.1",
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
     * @param {string} secureFileId - The unique secure file Id
     */
    public async deleteSecureFile(
        project: string,
        secureFileId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                secureFileId: secureFileId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * @param {string} secureFileId - The unique secure file Id
     * @param {string} ticket - A valid download ticket
     * @param {boolean} download - If download is true, the file is sent as attachement in the response body. If download is false, the response body contains the file stream.
     */
    public async downloadSecureFile(
        project: string,
        secureFileId: string,
        ticket: string,
        download?: boolean
        ): Promise<NodeJS.ReadableStream> {
        if (ticket == null) {
            throw new TypeError('ticket can not be null or undefined');
        }

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
                    "5.0-preview.1",
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
     * @param {string} secureFileId - The unique secure file Id
     * @param {boolean} includeDownloadTicket - If includeDownloadTicket is true and the caller has permissions, a download ticket is included in the response.
     * @param {TaskAgentInterfaces.SecureFileActionFilter} actionFilter
     */
    public async getSecureFile(
        project: string,
        secureFileId: string,
        includeDownloadTicket?: boolean,
        actionFilter?: TaskAgentInterfaces.SecureFileActionFilter
        ): Promise<TaskAgentInterfaces.SecureFile> {

        return new Promise<TaskAgentInterfaces.SecureFile>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                secureFileId: secureFileId
            };

            let queryValues: any = {
                includeDownloadTicket: includeDownloadTicket,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
     * @param {string[]} secureFileIds - A list of secure file Ids
     * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param {TaskAgentInterfaces.SecureFileActionFilter} actionFilter
     */
    public async getSecureFilesByIds(
        project: string,
        secureFileIds: string[],
        includeDownloadTickets?: boolean,
        actionFilter?: TaskAgentInterfaces.SecureFileActionFilter
        ): Promise<TaskAgentInterfaces.SecureFile[]> {
        if (secureFileIds == null) {
            throw new TypeError('secureFileIds can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.SecureFile[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                secureFileIds: secureFileIds && secureFileIds.join(","),
                includeDownloadTickets: includeDownloadTickets,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * @param {string[]} secureFileNames - A list of secure file Ids
     * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param {TaskAgentInterfaces.SecureFileActionFilter} actionFilter
     */
    public async getSecureFilesByNames(
        project: string,
        secureFileNames: string[],
        includeDownloadTickets?: boolean,
        actionFilter?: TaskAgentInterfaces.SecureFileActionFilter
        ): Promise<TaskAgentInterfaces.SecureFile[]> {
        if (secureFileNames == null) {
            throw new TypeError('secureFileNames can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.SecureFile[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                secureFileNames: secureFileNames && secureFileNames.join(","),
                includeDownloadTickets: includeDownloadTickets,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
     * @param {string} secureFileId - The unique secure file Id
     */
    public async updateSecureFile(
        secureFile: TaskAgentInterfaces.SecureFile,
        project: string,
        secureFileId: string
        ): Promise<TaskAgentInterfaces.SecureFile> {

        return new Promise<TaskAgentInterfaces.SecureFile>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                secureFileId: secureFileId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
        if (name == null) {
            throw new TypeError('name can not be null or undefined');
        }

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
                    "5.0-preview.1",
                    "distributedtask",
                    "adcfd8bc-b184-43ba-bd84-7c8c6a2ff421",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

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
        if (endpointId == null) {
            throw new TypeError('endpointId can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.ServiceEndpointRequestResult>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                endpointId: endpointId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
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
                    "5.0-preview.2",
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
                    "5.0-preview.2",
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
                    "5.0-preview.2",
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
                    "5.0-preview.2",
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
                    "5.0-preview.2",
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
     * @param {string} project - Project ID or project name
     * @param {string[]} endpointNames
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {boolean} includeFailed
     */
    public async getServiceEndpointsByNames(
        project: string,
        endpointNames: string[],
        type?: string,
        authSchemes?: string[],
        includeFailed?: boolean
        ): Promise<TaskAgentInterfaces.ServiceEndpoint[]> {
        if (endpointNames == null) {
            throw new TypeError('endpointNames can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.ServiceEndpoint[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                endpointNames: endpointNames && endpointNames.join(","),
                type: type,
                authSchemes: authSchemes && authSchemes.join(","),
                includeFailed: includeFailed,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
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
     * @param {string} operation
     */
    public async updateServiceEndpoint(
        endpoint: TaskAgentInterfaces.ServiceEndpoint,
        project: string,
        endpointId: string,
        operation?: string
        ): Promise<TaskAgentInterfaces.ServiceEndpoint> {

        return new Promise<TaskAgentInterfaces.ServiceEndpoint>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                endpointId: endpointId
            };

            let queryValues: any = {
                operation: operation,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues,
                    queryValues);

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
     * @param {TaskAgentInterfaces.ServiceEndpoint[]} endpoints
     * @param {string} project - Project ID or project name
     */
    public async updateServiceEndpoints(
        endpoints: TaskAgentInterfaces.ServiceEndpoint[],
        project: string
        ): Promise<TaskAgentInterfaces.ServiceEndpoint[]> {

        return new Promise<TaskAgentInterfaces.ServiceEndpoint[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.2",
                    "distributedtask",
                    "dca61d2f-3444-410a-b5ec-db2fc4efb4c5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.ServiceEndpoint[]>;
                res = await this.rest.replace<TaskAgentInterfaces.ServiceEndpoint[]>(url, endpoints, options);

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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
     * Register a deployment target to a deployment group. Generally this is called by agent configuration tool.
     * 
     * @param {TaskAgentInterfaces.DeploymentMachine} machine - Deployment target to register.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to which the deployment target is registered.
     */
    public async addDeploymentTarget(
        machine: TaskAgentInterfaces.DeploymentMachine,
        project: string,
        deploymentGroupId: number
        ): Promise<TaskAgentInterfaces.DeploymentMachine> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "2f0aa599-c121-4256-a5fd-ba370e0ae7b6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine>;
                res = await this.rest.create<TaskAgentInterfaces.DeploymentMachine>(url, machine, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a deployment target in a deployment group. This deletes the agent from associated deployment pool too.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment target is deleted.
     * @param {number} targetId - ID of the deployment target to delete.
     */
    public async deleteDeploymentTarget(
        project: string,
        deploymentGroupId: number,
        targetId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId,
                targetId: targetId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "2f0aa599-c121-4256-a5fd-ba370e0ae7b6",
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
     * Get a deployment target by its ID in a deployment group
     * 
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to which deployment target belongs.
     * @param {number} targetId - ID of the deployment target to return.
     * @param {TaskAgentInterfaces.DeploymentTargetExpands} expand - Include these additional details in the returned objects.
     */
    public async getDeploymentTarget(
        project: string,
        deploymentGroupId: number,
        targetId: number,
        expand?: TaskAgentInterfaces.DeploymentTargetExpands
        ): Promise<TaskAgentInterfaces.DeploymentMachine> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId,
                targetId: targetId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "2f0aa599-c121-4256-a5fd-ba370e0ae7b6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine>;
                res = await this.rest.get<TaskAgentInterfaces.DeploymentMachine>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of deployment targets in a deployment group.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group.
     * @param {string[]} tags - Get only the deployment targets that contain all these comma separted list of tags.
     * @param {string} name - Name pattern of the deployment targets to return.
     * @param {boolean} partialNameMatch - When set to true, treats **name** as pattern. Else treats it as absolute match. Default is **false**.
     * @param {TaskAgentInterfaces.DeploymentTargetExpands} expand - Include these additional details in the returned objects.
     * @param {TaskAgentInterfaces.TaskAgentStatusFilter} agentStatus - Get only deployment targets that have this status.
     * @param {TaskAgentInterfaces.TaskAgentJobResultFilter} agentJobResult - Get only deployment targets that have this last job result.
     * @param {string} continuationToken - Get deployment targets with names greater than this continuationToken lexicographically.
     * @param {number} top - Maximum number of deployment targets to return. Default is **1000**.
     * @param {boolean} enabled - Get only deployment targets that are enabled or disabled. Default is 'null' which returns all the targets.
     */
    public async getDeploymentTargets(
        project: string,
        deploymentGroupId: number,
        tags?: string[],
        name?: string,
        partialNameMatch?: boolean,
        expand?: TaskAgentInterfaces.DeploymentTargetExpands,
        agentStatus?: TaskAgentInterfaces.TaskAgentStatusFilter,
        agentJobResult?: TaskAgentInterfaces.TaskAgentJobResultFilter,
        continuationToken?: string,
        top?: number,
        enabled?: boolean
        ): Promise<TaskAgentInterfaces.DeploymentMachine[]> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId
            };

            let queryValues: any = {
                tags: tags && tags.join(","),
                name: name,
                partialNameMatch: partialNameMatch,
                '$expand': expand,
                agentStatus: agentStatus,
                agentJobResult: agentJobResult,
                continuationToken: continuationToken,
                '$top': top,
                enabled: enabled,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "2f0aa599-c121-4256-a5fd-ba370e0ae7b6",
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
     * Replace a deployment target in a deployment group. Generally this is called by agent configuration tool.
     * 
     * @param {TaskAgentInterfaces.DeploymentMachine} machine - New deployment target.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment target is replaced.
     * @param {number} targetId - ID of the deployment target to replace.
     */
    public async replaceDeploymentTarget(
        machine: TaskAgentInterfaces.DeploymentMachine,
        project: string,
        deploymentGroupId: number,
        targetId: number
        ): Promise<TaskAgentInterfaces.DeploymentMachine> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId,
                targetId: targetId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "2f0aa599-c121-4256-a5fd-ba370e0ae7b6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine>;
                res = await this.rest.replace<TaskAgentInterfaces.DeploymentMachine>(url, machine, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a deployment target and its agent properties in a deployment group. Generally this is called by agent configuration tool.
     * 
     * @param {TaskAgentInterfaces.DeploymentMachine} machine - Deployment target to update.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment target is updated.
     * @param {number} targetId - ID of the deployment target to update.
     */
    public async updateDeploymentTarget(
        machine: TaskAgentInterfaces.DeploymentMachine,
        project: string,
        deploymentGroupId: number,
        targetId: number
        ): Promise<TaskAgentInterfaces.DeploymentMachine> {

        return new Promise<TaskAgentInterfaces.DeploymentMachine>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                deploymentGroupId: deploymentGroupId,
                targetId: targetId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "2f0aa599-c121-4256-a5fd-ba370e0ae7b6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine>;
                res = await this.rest.update<TaskAgentInterfaces.DeploymentMachine>(url, machine, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.DeploymentMachine,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update tags of a list of deployment targets in a deployment group.
     * 
     * @param {TaskAgentInterfaces.DeploymentTargetUpdateParameter[]} machines - Deployment targets with tags to udpdate.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment targets are updated.
     */
    public async updateDeploymentTargets(
        machines: TaskAgentInterfaces.DeploymentTargetUpdateParameter[],
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
                    "5.0-preview.1",
                    "distributedtask",
                    "2f0aa599-c121-4256-a5fd-ba370e0ae7b6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.DeploymentMachine[]>;
                res = await this.rest.update<TaskAgentInterfaces.DeploymentMachine[]>(url, machines, options);

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
     * Create a task group.
     * 
     * @param {TaskAgentInterfaces.TaskGroupCreateParameter} taskGroup - Task group object to create.
     * @param {string} project - Project ID or project name
     */
    public async addTaskGroup(
        taskGroup: TaskAgentInterfaces.TaskGroupCreateParameter,
        project: string
        ): Promise<TaskAgentInterfaces.TaskGroup> {

        return new Promise<TaskAgentInterfaces.TaskGroup>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * Delete a task group.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group to be deleted.
     * @param {string} comment - Comments to delete.
     */
    public async deleteTaskGroup(
        project: string,
        taskGroupId: string,
        comment?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                taskGroupId: taskGroupId
            };

            let queryValues: any = {
                comment: comment,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
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
     * Get task group.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group.
     * @param {string} versionSpec - version specification of the task group. examples: 1, 1.0.
     * @param {TaskAgentInterfaces.TaskGroupExpands} expand - The properties that should be expanded. example $expand=Tasks will expand nested task groups.
     */
    public async getTaskGroup(
        project: string,
        taskGroupId: string,
        versionSpec: string,
        expand?: TaskAgentInterfaces.TaskGroupExpands
        ): Promise<TaskAgentInterfaces.TaskGroup> {
        if (versionSpec == null) {
            throw new TypeError('versionSpec can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.TaskGroup>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                taskGroupId: taskGroupId
            };

            let queryValues: any = {
                versionSpec: versionSpec,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskGroup>;
                res = await this.rest.get<TaskAgentInterfaces.TaskGroup>(url, options);

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
     * @param {number} revision
     */
    public async getTaskGroupRevision(
        project: string,
        taskGroupId: string,
        revision: number
        ): Promise<NodeJS.ReadableStream> {
        if (revision == null) {
            throw new TypeError('revision can not be null or undefined');
        }

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
                    "5.0-preview.1",
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
     * List task groups.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group.
     * @param {boolean} expanded - 'true' to recursively expand task groups. Default is 'false'.
     * @param {string} taskIdFilter - Guid of the taskId to filter.
     * @param {boolean} deleted - 'true'to include deleted task groups. Default is 'false'.
     * @param {number} top - Number of task groups to get.
     * @param {Date} continuationToken - Gets the task groups after the continuation token provided.
     * @param {TaskAgentInterfaces.TaskGroupQueryOrder} queryOrder - Gets the results in the defined order. Default is 'CreatedOnDescending'.
     */
    public async getTaskGroups(
        project: string,
        taskGroupId?: string,
        expanded?: boolean,
        taskIdFilter?: string,
        deleted?: boolean,
        top?: number,
        continuationToken?: Date,
        queryOrder?: TaskAgentInterfaces.TaskGroupQueryOrder
        ): Promise<TaskAgentInterfaces.TaskGroup[]> {

        return new Promise<TaskAgentInterfaces.TaskGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                taskGroupId: taskGroupId
            };

            let queryValues: any = {
                expanded: expanded,
                taskIdFilter: taskIdFilter,
                deleted: deleted,
                '$top': top,
                continuationToken: continuationToken,
                queryOrder: queryOrder,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * @param {string} taskGroupId
     * @param {boolean} disablePriorVersions
     */
    public async publishPreviewTaskGroup(
        taskGroup: TaskAgentInterfaces.TaskGroup,
        project: string,
        taskGroupId: string,
        disablePriorVersions?: boolean
        ): Promise<TaskAgentInterfaces.TaskGroup[]> {

        return new Promise<TaskAgentInterfaces.TaskGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                taskGroupId: taskGroupId
            };

            let queryValues: any = {
                disablePriorVersions: disablePriorVersions,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskGroup[]>;
                res = await this.rest.update<TaskAgentInterfaces.TaskGroup[]>(url, taskGroup, options);

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
     * @param {TaskAgentInterfaces.PublishTaskGroupMetadata} taskGroupMetadata
     * @param {string} project - Project ID or project name
     * @param {string} parentTaskGroupId
     */
    public async publishTaskGroup(
        taskGroupMetadata: TaskAgentInterfaces.PublishTaskGroupMetadata,
        project: string,
        parentTaskGroupId: string
        ): Promise<TaskAgentInterfaces.TaskGroup[]> {
        if (parentTaskGroupId == null) {
            throw new TypeError('parentTaskGroupId can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.TaskGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                parentTaskGroupId: parentTaskGroupId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskGroup[]>;
                res = await this.rest.replace<TaskAgentInterfaces.TaskGroup[]>(url, taskGroupMetadata, options);

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
    public async undeleteTaskGroup(
        taskGroup: TaskAgentInterfaces.TaskGroup,
        project: string
        ): Promise<TaskAgentInterfaces.TaskGroup[]> {

        return new Promise<TaskAgentInterfaces.TaskGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "6c08ffbf-dbf1-4f9a-94e5-a1cbd47005e7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskGroup[]>;
                res = await this.rest.update<TaskAgentInterfaces.TaskGroup[]>(url, taskGroup, options);

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
     * Update a task group.
     * 
     * @param {TaskAgentInterfaces.TaskGroupUpdateParameter} taskGroup - Task group to update.
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group to update.
     */
    public async updateTaskGroup(
        taskGroup: TaskAgentInterfaces.TaskGroupUpdateParameter,
        project: string,
        taskGroupId?: string
        ): Promise<TaskAgentInterfaces.TaskGroup> {

        return new Promise<TaskAgentInterfaces.TaskGroup>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                taskGroupId: taskGroupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
        if (currentState == null) {
            throw new TypeError('currentState can not be null or undefined');
        }

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
                    "5.0-preview.1",
                    "distributedtask",
                    "8cc1b02b-ae49-4516-b5ad-4f9b29967c30",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgent>;
                res = await this.rest.replace<TaskAgentInterfaces.TaskAgent>(url, null, options);

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
                    "5.0-preview.1",
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
     * Add a variable group.
     * 
     * @param {TaskAgentInterfaces.VariableGroupParameters} group - Variable group to add.
     * @param {string} project - Project ID or project name
     */
    public async addVariableGroup(
        group: TaskAgentInterfaces.VariableGroupParameters,
        project: string
        ): Promise<TaskAgentInterfaces.VariableGroup> {

        return new Promise<TaskAgentInterfaces.VariableGroup>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * Delete a variable group
     * 
     * @param {string} project - Project ID or project name
     * @param {number} groupId - Id of the variable group.
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
                    "5.0-preview.1",
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
     * Get a variable group.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} groupId - Id of the variable group.
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
                    "5.0-preview.1",
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
     * Get variable groups.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} groupName - Name of variable group.
     * @param {TaskAgentInterfaces.VariableGroupActionFilter} actionFilter - Action filter for the variable group. It specifies the action which can be performed on the variable groups.
     * @param {number} top - Number of variable groups to get.
     * @param {number} continuationToken - Gets the variable groups after the continuation token provided.
     * @param {TaskAgentInterfaces.VariableGroupQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdDescending'.
     */
    public async getVariableGroups(
        project: string,
        groupName?: string,
        actionFilter?: TaskAgentInterfaces.VariableGroupActionFilter,
        top?: number,
        continuationToken?: number,
        queryOrder?: TaskAgentInterfaces.VariableGroupQueryOrder
        ): Promise<TaskAgentInterfaces.VariableGroup[]> {

        return new Promise<TaskAgentInterfaces.VariableGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                groupName: groupName,
                actionFilter: actionFilter,
                '$top': top,
                continuationToken: continuationToken,
                queryOrder: queryOrder,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * Get variable groups by ids.
     * 
     * @param {string} project - Project ID or project name
     * @param {number[]} groupIds - Comma separated list of Ids of variable groups.
     */
    public async getVariableGroupsById(
        project: string,
        groupIds: number[]
        ): Promise<TaskAgentInterfaces.VariableGroup[]> {
        if (groupIds == null) {
            throw new TypeError('groupIds can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.VariableGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                groupIds: groupIds && groupIds.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
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
     * Update a variable group.
     * 
     * @param {TaskAgentInterfaces.VariableGroupParameters} group - Variable group to update.
     * @param {string} project - Project ID or project name
     * @param {number} groupId - Id of the variable group to update.
     */
    public async updateVariableGroup(
        group: TaskAgentInterfaces.VariableGroupParameters,
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
                    "5.0-preview.1",
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
                    "5.0-preview.1",
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
     * @param {string} completeCallbackPayload
     * @param {boolean} completeCallbackByAuthCode
     */
    public async createAadOAuthRequest(
        tenantId: string,
        redirectUri: string,
        promptOption?: TaskAgentInterfaces.AadLoginPromptOption,
        completeCallbackPayload?: string,
        completeCallbackByAuthCode?: boolean
        ): Promise<string> {
        if (tenantId == null) {
            throw new TypeError('tenantId can not be null or undefined');
        }
        if (redirectUri == null) {
            throw new TypeError('redirectUri can not be null or undefined');
        }

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                tenantId: tenantId,
                redirectUri: redirectUri,
                promptOption: promptOption,
                completeCallbackPayload: completeCallbackPayload,
                completeCallbackByAuthCode: completeCallbackByAuthCode,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "5.0-preview.1",
                    "distributedtask",
                    "9c63205e-3a0f-42a0-ad88-095200f13607",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, null, options);

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
                    "5.0-preview.1",
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
