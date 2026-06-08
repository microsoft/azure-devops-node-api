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
import ServiceEndpointInterfaces = require("./interfaces/ServiceEndpointInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IServiceEndpointApiBase extends basem.ClientApiBase {
    getAzureManagementGroups(): Promise<ServiceEndpointInterfaces.AzureManagementGroupQueryResult>;
    getAzureSubscriptions(): Promise<ServiceEndpointInterfaces.AzureSubscriptionQueryResult>;
    executeServiceEndpointRequest(serviceEndpointRequest: ServiceEndpointInterfaces.ServiceEndpointRequest, project: string, endpointId: string): Promise<ServiceEndpointInterfaces.ServiceEndpointRequestResult>;
    queryServiceEndpoint(binding: ServiceEndpointInterfaces.DataSourceBinding, project: string): Promise<string[]>;
    createServiceEndpoint(endpoint: ServiceEndpointInterfaces.ServiceEndpoint): Promise<ServiceEndpointInterfaces.ServiceEndpoint>;
    deleteServiceEndpoint(endpointId: string, projectIds: string[], deep?: boolean): Promise<void>;
    getServiceEndpointsByTypeAndOwner(type: string, owner: string): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>;
    shareServiceEndpoint(endpointProjectReferences: ServiceEndpointInterfaces.ServiceEndpointProjectReference[], endpointId: string): Promise<void>;
    updateServiceEndpoint(endpoint: ServiceEndpointInterfaces.ServiceEndpoint, endpointId: string, operation?: string): Promise<ServiceEndpointInterfaces.ServiceEndpoint>;
    updateServiceEndpoints(endpoints: ServiceEndpointInterfaces.ServiceEndpoint[]): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>;
    getServiceEndpointDetails(project: string, endpointId: string, actionFilter?: ServiceEndpointInterfaces.ServiceEndpointActionFilter, loadConfidentialData?: boolean): Promise<ServiceEndpointInterfaces.ServiceEndpoint>;
    getServiceEndpoints(project: string, type?: string, authSchemes?: string[], endpointIds?: string[], owner?: string, includeFailed?: boolean, includeDetails?: boolean, actionFilter?: ServiceEndpointInterfaces.ServiceEndpointActionFilter): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>;
    getServiceEndpointsByNames(project: string, endpointNames: string[], type?: string, authSchemes?: string[], owner?: string, includeFailed?: boolean, includeDetails?: boolean): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>;
    getServiceEndpointsWithRefreshedAuthentication(refreshAuthenticationParameters: ServiceEndpointInterfaces.RefreshAuthenticationParameters[], project: string, endpointIds: string[]): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>;
    getServiceEndpointExecutionRecords(project: string, endpointId: string, top?: number, continuationToken?: number): Promise<VSSInterfaces.PagedList<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord>>;
    addServiceEndpointExecutionRecords(input: ServiceEndpointInterfaces.ServiceEndpointExecutionRecordsInput, project: string): Promise<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord[]>;
    createOAuthConfiguration(configurationParams: ServiceEndpointInterfaces.OAuthConfigurationParams): Promise<ServiceEndpointInterfaces.OAuthConfiguration>;
    deleteOAuthConfiguration(configurationId: string): Promise<ServiceEndpointInterfaces.OAuthConfiguration>;
    getOAuthConfiguration(configurationId: string): Promise<ServiceEndpointInterfaces.OAuthConfiguration>;
    getOAuthConfigurations(endpointType?: string, actionFilter?: ServiceEndpointInterfaces.OAuthConfigurationActionFilter): Promise<ServiceEndpointInterfaces.OAuthConfiguration[]>;
    updateOAuthConfiguration(configurationParams: ServiceEndpointInterfaces.OAuthConfigurationParams, configurationId: string): Promise<ServiceEndpointInterfaces.OAuthConfiguration>;
    querySharedProjects(endpointId: string, project: string): Promise<ServiceEndpointInterfaces.ProjectReference[]>;
    shareEndpointWithProject(endpointId: string, fromProject: string, withProject: string): Promise<void>;
    getServiceEndpointTypes(type?: string, scheme?: string): Promise<ServiceEndpointInterfaces.ServiceEndpointType[]>;
    getFilteredServiceEndpointTypes(typesFilter: string[]): Promise<ServiceEndpointInterfaces.ServiceEndpointType[]>;
    createAadOAuthRequest(tenantId: string, redirectUri: string, promptOption?: ServiceEndpointInterfaces.AadLoginPromptOption, completeCallbackPayload?: string, completeCallbackByAuthCode?: boolean): Promise<string>;
    getVstsAadTenantId(): Promise<string>;
}

export class ServiceEndpointApiBase extends basem.ClientApiBase implements IServiceEndpointApiBase {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions, userAgent?: string) {
        super(baseUrl, handlers, userAgent || 'node-ServiceEndpoint-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "1814ab31-2f4f-4a9f-8761-f4d77dc5a5d7";

    /**
     * Returns list of azure subscriptions
     * 
     */
    public async getAzureManagementGroups(
        ): Promise<ServiceEndpointInterfaces.AzureManagementGroupQueryResult> {

        return new Promise<ServiceEndpointInterfaces.AzureManagementGroupQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "9acb984c-4f88-4e13-9691-2e688dddc047",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.AzureManagementGroupQueryResult>;
                res = await this.rest.get<ServiceEndpointInterfaces.AzureManagementGroupQueryResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Returns list of azure subscriptions
     * 
     */
    public async getAzureSubscriptions(
        ): Promise<ServiceEndpointInterfaces.AzureSubscriptionQueryResult> {

        return new Promise<ServiceEndpointInterfaces.AzureSubscriptionQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "18e8f65d-4e19-4a01-a621-cf0f2d938108",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.AzureSubscriptionQueryResult>;
                res = await this.rest.get<ServiceEndpointInterfaces.AzureSubscriptionQueryResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Proxy for a GET request defined by a service endpoint.
     * 
     * @param {ServiceEndpointInterfaces.ServiceEndpointRequest} serviceEndpointRequest - Service endpoint request.
     * @param {string} project - Project ID or project name
     * @param {string} endpointId - Id of the service endpoint.
     */
    public async executeServiceEndpointRequest(
        serviceEndpointRequest: ServiceEndpointInterfaces.ServiceEndpointRequest,
        project: string,
        endpointId: string
        ): Promise<ServiceEndpointInterfaces.ServiceEndpointRequestResult> {
        if (endpointId == null) {
            throw new TypeError('endpointId can not be null or undefined');
        }

        return new Promise<ServiceEndpointInterfaces.ServiceEndpointRequestResult>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                endpointId: endpointId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "cc63bb57-2a5f-4a7a-b79c-c142d308657e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpointRequestResult>;
                res = await this.rest.create<ServiceEndpointInterfaces.ServiceEndpointRequestResult>(url, serviceEndpointRequest, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpointRequestResult,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Proxy for a GET request defined by a service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     * 
     * @param {ServiceEndpointInterfaces.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} project - Project ID or project name
     */
    public async queryServiceEndpoint(
        binding: ServiceEndpointInterfaces.DataSourceBinding,
        project: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "cc63bb57-2a5f-4a7a-b79c-c142d308657e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.create<string[]>(url, binding, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Creates a new service endpoint
     * 
     * @param {ServiceEndpointInterfaces.ServiceEndpoint} endpoint - Service endpoint to create
     */
    public async createServiceEndpoint(
        endpoint: ServiceEndpointInterfaces.ServiceEndpoint
        ): Promise<ServiceEndpointInterfaces.ServiceEndpoint> {

        return new Promise<ServiceEndpointInterfaces.ServiceEndpoint>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "14e48fdc-2c8b-41ce-a0c3-e26f6cc55bd0",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpoint>;
                res = await this.rest.create<ServiceEndpointInterfaces.ServiceEndpoint>(url, endpoint, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpoint,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Delete a service endpoint
     * 
     * @param {string} endpointId - Endpoint Id of endpoint to delete
     * @param {string[]} projectIds - project Ids from which endpoint needs to be deleted
     * @param {boolean} deep - delete the spn created by endpoint
     */
    public async deleteServiceEndpoint(
        endpointId: string,
        projectIds: string[],
        deep?: boolean
        ): Promise<void> {
        if (projectIds == null) {
            throw new TypeError('projectIds can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                endpointId: endpointId
            };

            let queryValues: any = {
                projectIds: projectIds && projectIds.join(","),
                deep: deep,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "14e48fdc-2c8b-41ce-a0c3-e26f6cc55bd0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Get service endpoints for org by type and owner. Returns only id, name and url and used only internally by licensing service
     * 
     * @param {string} type - Type of the service endpoints.
     * @param {string} owner - Owner for service endpoints.
     */
    public async getServiceEndpointsByTypeAndOwner(
        type: string,
        owner: string
        ): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]> {
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }
        if (owner == null) {
            throw new TypeError('owner can not be null or undefined');
        }

        return new Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                type: type,
                owner: owner,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "14e48fdc-2c8b-41ce-a0c3-e26f6cc55bd0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpoint[]>;
                res = await this.rest.get<ServiceEndpointInterfaces.ServiceEndpoint[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpoint,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Share service endpoint across projects
     * 
     * @param {ServiceEndpointInterfaces.ServiceEndpointProjectReference[]} endpointProjectReferences - Project reference details of the target project
     * @param {string} endpointId - Endpoint Id of the endpoint to share
     */
    public async shareServiceEndpoint(
        endpointProjectReferences: ServiceEndpointInterfaces.ServiceEndpointProjectReference[],
        endpointId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                endpointId: endpointId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "14e48fdc-2c8b-41ce-a0c3-e26f6cc55bd0",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, endpointProjectReferences, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Update the service endpoint
     * 
     * @param {ServiceEndpointInterfaces.ServiceEndpoint} endpoint - Updated data for the endpoint
     * @param {string} endpointId - Endpoint Id of the endpoint to update
     * @param {string} operation - operation type
     */
    public async updateServiceEndpoint(
        endpoint: ServiceEndpointInterfaces.ServiceEndpoint,
        endpointId: string,
        operation?: string
        ): Promise<ServiceEndpointInterfaces.ServiceEndpoint> {

        return new Promise<ServiceEndpointInterfaces.ServiceEndpoint>(async (resolve, reject) => {
            let routeValues: any = {
                endpointId: endpointId
            };

            let queryValues: any = {
                operation: operation,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "14e48fdc-2c8b-41ce-a0c3-e26f6cc55bd0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpoint>;
                res = await this.rest.replace<ServiceEndpointInterfaces.ServiceEndpoint>(url, endpoint, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpoint,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Update the service endpoints.
     * 
     * @param {ServiceEndpointInterfaces.ServiceEndpoint[]} endpoints - Names of the service endpoints to update.
     */
    public async updateServiceEndpoints(
        endpoints: ServiceEndpointInterfaces.ServiceEndpoint[]
        ): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]> {

        return new Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "14e48fdc-2c8b-41ce-a0c3-e26f6cc55bd0",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpoint[]>;
                res = await this.rest.replace<ServiceEndpointInterfaces.ServiceEndpoint[]>(url, endpoints, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpoint,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Get the service endpoint details.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} endpointId - Id of the service endpoint.
     * @param {ServiceEndpointInterfaces.ServiceEndpointActionFilter} actionFilter - Action filter for the service connection. It specifies the action which can be performed on the service connection.
     * @param {boolean} loadConfidentialData - Flag to include confidential details of service endpoint. This is for internal use only.
     */
    public async getServiceEndpointDetails(
        project: string,
        endpointId: string,
        actionFilter?: ServiceEndpointInterfaces.ServiceEndpointActionFilter,
        loadConfidentialData?: boolean
        ): Promise<ServiceEndpointInterfaces.ServiceEndpoint> {

        return new Promise<ServiceEndpointInterfaces.ServiceEndpoint>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                endpointId: endpointId
            };

            let queryValues: any = {
                actionFilter: actionFilter,
                loadConfidentialData: loadConfidentialData,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "e85f1c62-adfc-4b74-b618-11a150fb195e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpoint>;
                res = await this.rest.get<ServiceEndpointInterfaces.ServiceEndpoint>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpoint,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Get the service endpoints.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type - Type of the service endpoints.
     * @param {string[]} authSchemes - Authorization schemes used for service endpoints.
     * @param {string[]} endpointIds - Ids of the service endpoints.
     * @param {string} owner - Owner for service endpoints.
     * @param {boolean} includeFailed - Failed flag for service endpoints.
     * @param {boolean} includeDetails - Flag to include more details for service endpoints. This is for internal use only and the flag will be treated as false for all other requests
     * @param {ServiceEndpointInterfaces.ServiceEndpointActionFilter} actionFilter - The "actionFilter" parameter allows users to evaluate requestor permissions and retrieve a list of endpoints that match the specified conditions, ensuring that only relevant endpoints are returned based on their permissions
     */
    public async getServiceEndpoints(
        project: string,
        type?: string,
        authSchemes?: string[],
        endpointIds?: string[],
        owner?: string,
        includeFailed?: boolean,
        includeDetails?: boolean,
        actionFilter?: ServiceEndpointInterfaces.ServiceEndpointActionFilter
        ): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]> {

        return new Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                type: type,
                authSchemes: authSchemes && authSchemes.join(","),
                endpointIds: endpointIds && endpointIds.join(","),
                owner: owner,
                includeFailed: includeFailed,
                includeDetails: includeDetails,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "e85f1c62-adfc-4b74-b618-11a150fb195e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpoint[]>;
                res = await this.rest.get<ServiceEndpointInterfaces.ServiceEndpoint[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpoint,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Get the service endpoints by name.
     * 
     * @param {string} project - Project ID or project name
     * @param {string[]} endpointNames - Names of the service endpoints.
     * @param {string} type - Type of the service endpoints.
     * @param {string[]} authSchemes - Authorization schemes used for service endpoints.
     * @param {string} owner - Owner for service endpoints.
     * @param {boolean} includeFailed - Failed flag for service endpoints.
     * @param {boolean} includeDetails - Flag to include more details for service endpoints. This is for internal use only and the flag will be treated as false for all other requests
     */
    public async getServiceEndpointsByNames(
        project: string,
        endpointNames: string[],
        type?: string,
        authSchemes?: string[],
        owner?: string,
        includeFailed?: boolean,
        includeDetails?: boolean
        ): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]> {
        if (endpointNames == null) {
            throw new TypeError('endpointNames can not be null or undefined');
        }

        return new Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                endpointNames: endpointNames && endpointNames.join(","),
                type: type,
                authSchemes: authSchemes && authSchemes.join(","),
                owner: owner,
                includeFailed: includeFailed,
                includeDetails: includeDetails,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "e85f1c62-adfc-4b74-b618-11a150fb195e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpoint[]>;
                res = await this.rest.get<ServiceEndpointInterfaces.ServiceEndpoint[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpoint,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Gets the service endpoints and patch new authorization parameters
     * 
     * @param {ServiceEndpointInterfaces.RefreshAuthenticationParameters[]} refreshAuthenticationParameters - Scope, Validity of Token requested.
     * @param {string} project - Project ID or project name
     * @param {string[]} endpointIds - Ids of the service endpoints.
     */
    public async getServiceEndpointsWithRefreshedAuthentication(
        refreshAuthenticationParameters: ServiceEndpointInterfaces.RefreshAuthenticationParameters[],
        project: string,
        endpointIds: string[]
        ): Promise<ServiceEndpointInterfaces.ServiceEndpoint[]> {
        if (endpointIds == null) {
            throw new TypeError('endpointIds can not be null or undefined');
        }

        return new Promise<ServiceEndpointInterfaces.ServiceEndpoint[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                endpointIds: endpointIds && endpointIds.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "serviceendpoint",
                    "e85f1c62-adfc-4b74-b618-11a150fb195e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpoint[]>;
                res = await this.rest.create<ServiceEndpointInterfaces.ServiceEndpoint[]>(url, refreshAuthenticationParameters, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpoint,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Get service endpoint execution records.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} endpointId - Id of the service endpoint.
     * @param {number} top - Number of service endpoint execution records to get.
     * @param {number} continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of records
     */
    public async getServiceEndpointExecutionRecords(
        project: string,
        endpointId: string,
        top?: number,
        continuationToken?: number
        ): Promise<VSSInterfaces.PagedList<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord>> {

        return new Promise<VSSInterfaces.PagedList<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                endpointId: endpointId
            };

            let queryValues: any = {
                top: top,
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "10a16738-9299-4cd1-9a81-fd23ad6200d0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord>>;
                res = await this.rest.get<VSSInterfaces.PagedList<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord>>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpointExecutionRecord,
                                              true);
                if (res.headers && res.headers['x-ms-continuationtoken']) {
                    ret.continuationToken = res.headers['x-ms-continuationtoken'];
                }

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Add service endpoint execution records.
     * 
     * @param {ServiceEndpointInterfaces.ServiceEndpointExecutionRecordsInput} input - Service endpoint execution records to add.
     * @param {string} project - Project ID or project name
     */
    public async addServiceEndpointExecutionRecords(
        input: ServiceEndpointInterfaces.ServiceEndpointExecutionRecordsInput,
        project: string
        ): Promise<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord[]> {

        return new Promise<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "55b9ed4b-5404-41b1-b9d2-7ed757d02bb0",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord[]>;
                res = await this.rest.create<ServiceEndpointInterfaces.ServiceEndpointExecutionRecord[]>(url, input, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpointExecutionRecord,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * @param {ServiceEndpointInterfaces.OAuthConfigurationParams} configurationParams
     */
    public async createOAuthConfiguration(
        configurationParams: ServiceEndpointInterfaces.OAuthConfigurationParams
        ): Promise<ServiceEndpointInterfaces.OAuthConfiguration> {

        return new Promise<ServiceEndpointInterfaces.OAuthConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "702edb4e-3952-43fe-a4eb-288938f3ba35",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.OAuthConfiguration>;
                res = await this.rest.create<ServiceEndpointInterfaces.OAuthConfiguration>(url, configurationParams, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.OAuthConfiguration,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * @param {string} configurationId
     */
    public async deleteOAuthConfiguration(
        configurationId: string
        ): Promise<ServiceEndpointInterfaces.OAuthConfiguration> {

        return new Promise<ServiceEndpointInterfaces.OAuthConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                configurationId: configurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "702edb4e-3952-43fe-a4eb-288938f3ba35",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.OAuthConfiguration>;
                res = await this.rest.del<ServiceEndpointInterfaces.OAuthConfiguration>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.OAuthConfiguration,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * @param {string} configurationId
     */
    public async getOAuthConfiguration(
        configurationId: string
        ): Promise<ServiceEndpointInterfaces.OAuthConfiguration> {

        return new Promise<ServiceEndpointInterfaces.OAuthConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                configurationId: configurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "702edb4e-3952-43fe-a4eb-288938f3ba35",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.OAuthConfiguration>;
                res = await this.rest.get<ServiceEndpointInterfaces.OAuthConfiguration>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.OAuthConfiguration,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * @param {string} endpointType
     * @param {ServiceEndpointInterfaces.OAuthConfigurationActionFilter} actionFilter
     */
    public async getOAuthConfigurations(
        endpointType?: string,
        actionFilter?: ServiceEndpointInterfaces.OAuthConfigurationActionFilter
        ): Promise<ServiceEndpointInterfaces.OAuthConfiguration[]> {

        return new Promise<ServiceEndpointInterfaces.OAuthConfiguration[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                endpointType: endpointType,
                actionFilter: actionFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "702edb4e-3952-43fe-a4eb-288938f3ba35",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.OAuthConfiguration[]>;
                res = await this.rest.get<ServiceEndpointInterfaces.OAuthConfiguration[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.OAuthConfiguration,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * @param {ServiceEndpointInterfaces.OAuthConfigurationParams} configurationParams
     * @param {string} configurationId
     */
    public async updateOAuthConfiguration(
        configurationParams: ServiceEndpointInterfaces.OAuthConfigurationParams,
        configurationId: string
        ): Promise<ServiceEndpointInterfaces.OAuthConfiguration> {

        return new Promise<ServiceEndpointInterfaces.OAuthConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                configurationId: configurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "702edb4e-3952-43fe-a4eb-288938f3ba35",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.OAuthConfiguration>;
                res = await this.rest.replace<ServiceEndpointInterfaces.OAuthConfiguration>(url, configurationParams, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.OAuthConfiguration,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * @param {string} endpointId
     * @param {string} project
     */
    public async querySharedProjects(
        endpointId: string,
        project: string
        ): Promise<ServiceEndpointInterfaces.ProjectReference[]> {
        if (project == null) {
            throw new TypeError('project can not be null or undefined');
        }

        return new Promise<ServiceEndpointInterfaces.ProjectReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                endpointId: endpointId
            };

            let queryValues: any = {
                project: project,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "86e77201-c1f7-46c9-8672-9dfc2f6f568a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ProjectReference[]>;
                res = await this.rest.get<ServiceEndpointInterfaces.ProjectReference[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * @param {string} endpointId
     * @param {string} fromProject
     * @param {string} withProject
     */
    public async shareEndpointWithProject(
        endpointId: string,
        fromProject: string,
        withProject: string
        ): Promise<void> {
        if (fromProject == null) {
            throw new TypeError('fromProject can not be null or undefined');
        }
        if (withProject == null) {
            throw new TypeError('withProject can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                endpointId: endpointId
            };

            let queryValues: any = {
                fromProject: fromProject,
                withProject: withProject,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "86e77201-c1f7-46c9-8672-9dfc2f6f568a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Get service endpoint types.
     * 
     * @param {string} type - Type of service endpoint.
     * @param {string} scheme - Scheme of service endpoint.
     */
    public async getServiceEndpointTypes(
        type?: string,
        scheme?: string
        ): Promise<ServiceEndpointInterfaces.ServiceEndpointType[]> {

        return new Promise<ServiceEndpointInterfaces.ServiceEndpointType[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                type: type,
                scheme: scheme,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "5a7938a4-655e-486c-b562-b78c54a7e87b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpointType[]>;
                res = await this.rest.get<ServiceEndpointInterfaces.ServiceEndpointType[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpointType,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * Get service endpoint types with passed types filter.
     * 
     * @param {string[]} typesFilter - Filter to limit returned types
     */
    public async getFilteredServiceEndpointTypes(
        typesFilter: string[]
        ): Promise<ServiceEndpointInterfaces.ServiceEndpointType[]> {

        return new Promise<ServiceEndpointInterfaces.ServiceEndpointType[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "serviceendpoint",
                    "a01a273f-aa29-4066-b042-3ea628ef6848",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ServiceEndpointInterfaces.ServiceEndpointType[]>;
                res = await this.rest.create<ServiceEndpointInterfaces.ServiceEndpointType[]>(url, typesFilter, options);

                let ret = this.formatResponse(res.result,
                                              ServiceEndpointInterfaces.TypeInfo.ServiceEndpointType,
                                              true);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

    /**
     * @param {string} tenantId
     * @param {string} redirectUri
     * @param {ServiceEndpointInterfaces.AadLoginPromptOption} promptOption
     * @param {string} completeCallbackPayload
     * @param {boolean} completeCallbackByAuthCode
     */
    public async createAadOAuthRequest(
        tenantId: string,
        redirectUri: string,
        promptOption?: ServiceEndpointInterfaces.AadLoginPromptOption,
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
                    "7.2-preview.1",
                    "serviceendpoint",
                    "47911d38-53e1-467a-8c32-d871599d5498",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.create<string>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
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
                    "7.2-preview.1",
                    "serviceendpoint",
                    "47911d38-53e1-467a-8c32-d871599d5498",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.get<string>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                this.extractRateLimitHeaders(res.headers, ret);
                resolve(ret);
                
            }
            catch (err) {
                this.extractRateLimitHeaders(err?.responseHeaders, err);
                reject(err);
            }
        });
    }

}
