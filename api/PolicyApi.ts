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
import PolicyInterfaces = require("./interfaces/PolicyInterfaces");

export interface IPolicyApi extends basem.ClientApiBase {
    createPolicyConfiguration(configuration: PolicyInterfaces.PolicyConfiguration, project: string, configurationId?: number): Promise<PolicyInterfaces.PolicyConfiguration>;
    deletePolicyConfiguration(project: string, configurationId: number): Promise<void>;
    getPolicyConfiguration(project: string, configurationId: number): Promise<PolicyInterfaces.PolicyConfiguration>;
    getPolicyConfigurations(project: string): Promise<PolicyInterfaces.PolicyConfiguration[]>;
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
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Policy-api');
    }

    /**
     * @param {PolicyInterfaces.PolicyConfiguration} configuration
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
                    "3.2-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
                    routeValues);

                let url: string = verData.requestUrl;
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
     * @param {string} project - Project ID or project name
     * @param {number} configurationId
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
                    "3.2-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
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
     * @param {number} configurationId
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
                    "3.2-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
                    routeValues);

                let url: string = verData.requestUrl;
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
     * @param {string} project - Project ID or project name
     */
    public async getPolicyConfigurations(
        project: string
        ): Promise<PolicyInterfaces.PolicyConfiguration[]> {

        return new Promise<PolicyInterfaces.PolicyConfiguration[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
                    routeValues);

                let url: string = verData.requestUrl;
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
     * @param {PolicyInterfaces.PolicyConfiguration} configuration
     * @param {string} project - Project ID or project name
     * @param {number} configurationId
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
                    "3.2-preview.1",
                    "policy",
                    "dad91cbe-d183-45f8-9c6e-9c1164472121",
                    routeValues);

                let url: string = verData.requestUrl;
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
     * @param {string} project - Project ID or project name
     * @param {string} evaluationId
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
                    "3.2-preview.1",
                    "policy",
                    "46aecb7a-5d2c-4647-897b-0209505a9fe4",
                    routeValues);

                let url: string = verData.requestUrl;
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
     * @param {string} project - Project ID or project name
     * @param {string} evaluationId
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
                    "3.2-preview.1",
                    "policy",
                    "46aecb7a-5d2c-4647-897b-0209505a9fe4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<PolicyInterfaces.PolicyEvaluationRecord>;
                res = await this.rest.update<PolicyInterfaces.PolicyEvaluationRecord>(url, options);

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
     * @param {string} project - Project ID or project name
     * @param {string} artifactId
     * @param {boolean} includeNotApplicable
     * @param {number} top
     * @param {number} skip
     */
    public async getPolicyEvaluations(
        project: string,
        artifactId: string,
        includeNotApplicable?: boolean,
        top?: number,
        skip?: number
        ): Promise<PolicyInterfaces.PolicyEvaluationRecord[]> {

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
                    "3.2-preview.1",
                    "policy",
                    "c23ddff5-229c-4d04-a80b-0fdce9f360c8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
     * @param {string} project - Project ID or project name
     * @param {number} configurationId
     * @param {number} revisionId
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
                    "3.2-preview.1",
                    "policy",
                    "fe1e68a2-60d3-43cb-855b-85e41ae97c95",
                    routeValues);

                let url: string = verData.requestUrl;
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
     * @param {string} project - Project ID or project name
     * @param {number} configurationId
     * @param {number} top
     * @param {number} skip
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
                    "3.2-preview.1",
                    "policy",
                    "fe1e68a2-60d3-43cb-855b-85e41ae97c95",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
     * @param {string} project - Project ID or project name
     * @param {string} typeId
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
                    "3.2-preview.1",
                    "policy",
                    "44096322-2d3d-466a-bb30-d1b7de69f61f",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "policy",
                    "44096322-2d3d-466a-bb30-d1b7de69f61f",
                    routeValues);

                let url: string = verData.requestUrl;
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
