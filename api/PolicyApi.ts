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
import PolicyInterfaces = require("./interfaces/PolicyInterfaces");

export interface IPolicyApi extends basem.ClientApiBase {
    createPolicyConfiguration(configuration: PolicyInterfaces.PolicyConfiguration, project: string, configurationId?: number): Promise<PolicyInterfaces.PolicyConfiguration>;
    deletePolicyConfiguration(project: string, configurationId: number): Promise<void>;
    getPolicyConfiguration(project: string, configurationId: number): Promise<PolicyInterfaces.PolicyConfiguration>;
    getPolicyConfigurations(project: string, scope?: string, policyType?: string): Promise<PolicyInterfaces.PolicyConfiguration[]>;
    updatePolicyConfiguration(configuration: PolicyInterfaces.PolicyConfiguration, project: string, configurationId: number): Promise<PolicyInterfaces.PolicyConfiguration>;
    getPolicyEvaluation(project: string, evaluationId: string): Promise<PolicyInterfaces.PolicyEvaluationRecord>;
    requeuePolicyEvaluation(project: string, evaluationId: string): Promise<PolicyInterfaces.PolicyEvaluationRecord>;
    getPolicyEvaluations(project: string, artifactId: string, includeNotApplicable?: boolean, top?: number, skip?: number): Promise<PolicyInterfaces.PolicyEvaluationRecord[]>;
    getPolicyConfigurationRevision(project: string, configurationId: number, revisionId: number): Promise<PolicyInterfaces.PolicyConfiguration>;
    getPolicyConfigurationRevisions(project: string, configurationId: number, top?: number, skip?: number): Promise<PolicyInterfaces.PolicyConfiguration[]>;
    getPolicyType(project: string, typeId: string): Promise<PolicyInterfaces.PolicyType>;
    getPolicyTypes(project: string): Promise<PolicyInterfaces.PolicyType[]>;
}

export class PolicyApi extends basem.ClientApiBase implements IPolicyApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Policy-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "fb13a388-40dd-4a04-b530-013a739c72ef";

    /**
     * Create a policy configuration of a given policy type.
     * 
     * @param {PolicyInterfaces.PolicyConfiguration} configuration - The policy configuration to create.
     * @param {string} project - Project ID or project name
     * @param {number} configurationId
     */
    public async createPolicyConfiguration(
        configuration: PolicyInterfaces.PolicyConfiguration,
        project: string,
        configurationId?: number
        ): Promise<PolicyInterfaces.PolicyConfiguration> {

        return new Promise<PolicyInterfaces.PolicyConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                configurationId: configurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyConfiguration>;
                res = await this.rest.create<PolicyInterfaces.PolicyConfiguration>(url, configuration, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyConfiguration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a policy configuration by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} configurationId - ID of the policy configuration to delete.
     */
    public async deletePolicyConfiguration(
        project: string,
        configurationId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                configurationId: configurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get a policy configuration by its ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} configurationId - ID of the policy configuration
     */
    public async getPolicyConfiguration(
        project: string,
        configurationId: number
        ): Promise<PolicyInterfaces.PolicyConfiguration> {

        return new Promise<PolicyInterfaces.PolicyConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                configurationId: configurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyConfiguration>;
                res = await this.rest.get<PolicyInterfaces.PolicyConfiguration>(url, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyConfiguration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of policy configurations in a project.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} scope - [Provided for legacy reasons] The scope on which a subset of policies is defined.
     * @param {string} policyType - Filter returned policies to only this type
     */
    public async getPolicyConfigurations(
        project: string,
        scope?: string,
        policyType?: string
        ): Promise<PolicyInterfaces.PolicyConfiguration[]> {

        return new Promise<PolicyInterfaces.PolicyConfiguration[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                scope: scope,
                policyType: policyType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyConfiguration[]>;
                res = await this.rest.get<PolicyInterfaces.PolicyConfiguration[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyConfiguration,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a policy configuration by its ID.
     * 
     * @param {PolicyInterfaces.PolicyConfiguration} configuration - The policy configuration to update.
     * @param {string} project - Project ID or project name
     * @param {number} configurationId - ID of the existing policy configuration to be updated.
     */
    public async updatePolicyConfiguration(
        configuration: PolicyInterfaces.PolicyConfiguration,
        project: string,
        configurationId: number
        ): Promise<PolicyInterfaces.PolicyConfiguration> {

        return new Promise<PolicyInterfaces.PolicyConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                configurationId: configurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyConfiguration>;
                res = await this.rest.replace<PolicyInterfaces.PolicyConfiguration>(url, configuration, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyConfiguration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the present evaluation state of a policy.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} evaluationId - ID of the policy evaluation to be retrieved.
     */
    public async getPolicyEvaluation(
        project: string,
        evaluationId: string
        ): Promise<PolicyInterfaces.PolicyEvaluationRecord> {

        return new Promise<PolicyInterfaces.PolicyEvaluationRecord>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                evaluationId: evaluationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "46aecb7a-5d2c-4647-897b-0209505a9fe4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyEvaluationRecord>;
                res = await this.rest.get<PolicyInterfaces.PolicyEvaluationRecord>(url, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyEvaluationRecord,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Requeue the policy evaluation.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} evaluationId - ID of the policy evaluation to be retrieved.
     */
    public async requeuePolicyEvaluation(
        project: string,
        evaluationId: string
        ): Promise<PolicyInterfaces.PolicyEvaluationRecord> {

        return new Promise<PolicyInterfaces.PolicyEvaluationRecord>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                evaluationId: evaluationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "46aecb7a-5d2c-4647-897b-0209505a9fe4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyEvaluationRecord>;
                res = await this.rest.update<PolicyInterfaces.PolicyEvaluationRecord>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyEvaluationRecord,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieves a list of all the policy evaluation statuses for a specific pull request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} artifactId - A string which uniquely identifies the target of a policy evaluation.
     * @param {boolean} includeNotApplicable - Some policies might determine that they do not apply to a specific pull request. Setting this parameter to true will return evaluation records even for policies which don't apply to this pull request.
     * @param {number} top - The number of policy evaluation records to retrieve.
     * @param {number} skip - The number of policy evaluation records to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     */
    public async getPolicyEvaluations(
        project: string,
        artifactId: string,
        includeNotApplicable?: boolean,
        top?: number,
        skip?: number
        ): Promise<PolicyInterfaces.PolicyEvaluationRecord[]> {
        if (artifactId == null) {
            throw new TypeError('artifactId can not be null or undefined');
        }

        return new Promise<PolicyInterfaces.PolicyEvaluationRecord[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                artifactId: artifactId,
                includeNotApplicable: includeNotApplicable,
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "c23ddff5-229c-4d04-a80b-0fdce9f360c8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyEvaluationRecord[]>;
                res = await this.rest.get<PolicyInterfaces.PolicyEvaluationRecord[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyEvaluationRecord,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a specific revision of a given policy by ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} configurationId - The policy configuration ID.
     * @param {number} revisionId - The revision ID.
     */
    public async getPolicyConfigurationRevision(
        project: string,
        configurationId: number,
        revisionId: number
        ): Promise<PolicyInterfaces.PolicyConfiguration> {

        return new Promise<PolicyInterfaces.PolicyConfiguration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                configurationId: configurationId,
                revisionId: revisionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "fe1e68a2-60d3-43cb-855b-85e41ae97c95",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyConfiguration>;
                res = await this.rest.get<PolicyInterfaces.PolicyConfiguration>(url, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyConfiguration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve all revisions for a given policy.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} configurationId - The policy configuration ID.
     * @param {number} top - The number of revisions to retrieve.
     * @param {number} skip - The number of revisions to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     */
    public async getPolicyConfigurationRevisions(
        project: string,
        configurationId: number,
        top?: number,
        skip?: number
        ): Promise<PolicyInterfaces.PolicyConfiguration[]> {

        return new Promise<PolicyInterfaces.PolicyConfiguration[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                configurationId: configurationId
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "fe1e68a2-60d3-43cb-855b-85e41ae97c95",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyConfiguration[]>;
                res = await this.rest.get<PolicyInterfaces.PolicyConfiguration[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              PolicyInterfaces.TypeInfo.PolicyConfiguration,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a specific policy type by ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} typeId - The policy ID.
     */
    public async getPolicyType(
        project: string,
        typeId: string
        ): Promise<PolicyInterfaces.PolicyType> {

        return new Promise<PolicyInterfaces.PolicyType>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                typeId: typeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "44096322-2d3d-466a-bb30-d1b7de69f61f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyType>;
                res = await this.rest.get<PolicyInterfaces.PolicyType>(url, options);

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
     * Retrieve all available policy types.
     * 
     * @param {string} project - Project ID or project name
     */
    public async getPolicyTypes(
        project: string
        ): Promise<PolicyInterfaces.PolicyType[]> {

        return new Promise<PolicyInterfaces.PolicyType[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "6.1-preview.1",
                    "policy",
                    "44096322-2d3d-466a-bb30-d1b7de69f61f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyType[]>;
                res = await this.rest.get<PolicyInterfaces.PolicyType[]>(url, options);

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

}
