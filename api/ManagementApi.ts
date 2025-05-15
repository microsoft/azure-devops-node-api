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
import ManagementInterfaces = require("./interfaces/ManagementInterfaces");

export interface IManagementApi extends basem.ClientApiBase {
    getRepoEnablementStatus2(project: string, repository: string, includeAllProperties?: boolean): Promise<ManagementInterfaces.RepoEnablementSettings>;
    updateRepoAdvSecEnablementStatus2(savedAdvSecEnablementStatus: ManagementInterfaces.RepoEnablementSettings, project: string, repository: string): Promise<void>;
    createBillingSnapshot(meterUsage: ManagementInterfaces.MeterUsage): Promise<void>;
    getBillableCommitterDetails(billingDate?: Date): Promise<ManagementInterfaces.BillableCommitterDetails[]>;
    getLastMeterUsage(): Promise<ManagementInterfaces.MeterUsage>;
    getMeterUsage(billingDate?: Date): Promise<ManagementInterfaces.MeterUsage>;
    createBillingSnapshot2(meterUsage: ManagementInterfaces.MeterUsageForPlan, plan: ManagementInterfaces.Plan): Promise<void>;
    getBillableCommitterDetails2(plan: ManagementInterfaces.Plan, billingDate?: Date): Promise<ManagementInterfaces.BillableCommitterDetails[]>;
    getLastMeterUsage2(plan: ManagementInterfaces.Plan): Promise<ManagementInterfaces.MeterUsageForPlan>;
    getMeterUsage2(plan: ManagementInterfaces.Plan, billingDate?: Date): Promise<ManagementInterfaces.MeterUsageForPlan>;
    getOrgEnablementStatus(includeAllProperties?: boolean): Promise<ManagementInterfaces.AdvSecEnablementSettings>;
    updateOrgEnablementStatus(savedAdvSecEnablementStatus: ManagementInterfaces.AdvSecEnablementSettingsUpdate): Promise<void>;
    getOrgEnablementStatus2(includeAllProperties?: boolean): Promise<ManagementInterfaces.OrgEnablementSettings>;
    updateOrgEnablementStatus2(orgEnablementSettings: ManagementInterfaces.OrgEnablementSettings): Promise<void>;
    getEstimatedBillablePushersDetailsForOrg(): Promise<ManagementInterfaces.BilledCommitter[]>;
    getEstimatedOrgBillablePushers(): Promise<string[]>;
    getEstimatedBillablePushersDetailsForOrg2(plan: ManagementInterfaces.Plan): Promise<ManagementInterfaces.MeterUsageEstimate>;
    getProjectEnablementStatus(project: string, includeAllProperties?: boolean): Promise<ManagementInterfaces.AdvSecEnablementSettings>;
    updateProjectEnablementStatus(savedAdvSecEnablementStatus: ManagementInterfaces.AdvSecEnablementSettingsUpdate, project: string): Promise<void>;
    getProjectEnablementStatus2(project: string, includeAllProperties?: boolean): Promise<ManagementInterfaces.ProjectEnablementSettings>;
    updateProjectEnablementStatus2(projectEnablementSettings: ManagementInterfaces.ProjectEnablementSettings, project: string): Promise<void>;
    getEstimatedBillablePushersDetailsForProject(project: string): Promise<ManagementInterfaces.BilledCommitter[]>;
    getEstimatedBillablePushersForProject(project: string): Promise<string[]>;
    getEstimatedBillablePushersDetailsForProject2(project: string, plan?: ManagementInterfaces.Plan): Promise<ManagementInterfaces.MeterUsageEstimate>;
    getRepoEnablementStatus(project: string, repository: string, includeAllProperties?: boolean): Promise<ManagementInterfaces.AdvSecEnablementStatus>;
    updateRepoAdvSecEnablementStatus(savedAdvSecEnablementStatus: ManagementInterfaces.AdvSecEnablementStatusUpdate, project: string, repository: string): Promise<void>;
    getEstimatedBillableCommitersDetailsForRepo(project: string, repository: string): Promise<ManagementInterfaces.BilledCommitter[]>;
    getEstimatedBillableCommittersForRepo(project: string, repository: string): Promise<string[]>;
    getEstimatedRepoBillableCommittersDetails2(project: string, repository: string, plan?: ManagementInterfaces.Plan): Promise<ManagementInterfaces.MeterUsageEstimate>;
}

export class ManagementApi extends basem.ClientApiBase implements IManagementApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions, userAgent?: string) {
        super(baseUrl, handlers, userAgent || 'node-Management-api', options);
    }

    /**
     * Determines if Code Security, Secret Protection, and their features are enabled for the repository.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repository - The name or ID of the repository
     * @param {boolean} includeAllProperties - When true, will also determine if pushes are blocked when secrets are detected
     */
    public async getRepoEnablementStatus2(
        project: string,
        repository: string,
        includeAllProperties?: boolean
        ): Promise<ManagementInterfaces.RepoEnablementSettings> {

        return new Promise<ManagementInterfaces.RepoEnablementSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repository: repository
            };

            let queryValues: any = {
                includeAllProperties: includeAllProperties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "1fcb5ea0-1e19-4c71-ab26-0784bce2d551",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.RepoEnablementSettings>;
                res = await this.rest.get<ManagementInterfaces.RepoEnablementSettings>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.RepoEnablementSettings,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update the enablement status of Code Security and Secret Protection, along with their respective features, for a given repository.
     * 
     * @param {ManagementInterfaces.RepoEnablementSettings} savedAdvSecEnablementStatus - new status
     * @param {string} project - Project ID or project name
     * @param {string} repository - Name or ID of the repository
     */
    public async updateRepoAdvSecEnablementStatus2(
        savedAdvSecEnablementStatus: ManagementInterfaces.RepoEnablementSettings,
        project: string,
        repository: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repository: repository
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "1fcb5ea0-1e19-4c71-ab26-0784bce2d551",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, savedAdvSecEnablementStatus, options);

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
     * During multi-org billing computation in primary scale unit(EUS21), this API is used to create billing snapshot for a specific org. Primary scale unit will call this API for each org in different scsle units to create billing snapshot. Data will be stored in the org specific partition DB -> billing snapshot table. This is needed as customers will fetch billing data from their org specific partition DB.
     * 
     * @param {ManagementInterfaces.MeterUsage} meterUsage
     */
    public async createBillingSnapshot(
        meterUsage: ManagementInterfaces.MeterUsage
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "e58d8091-3d07-48b1-9527-7d6295fd4081",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, meterUsage, options);

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
     * Get all billable committers details, including those not matched with a VSID.
     * 
     * @param {Date} billingDate - The date to query, or if not provided, today
     */
    public async getBillableCommitterDetails(
        billingDate?: Date
        ): Promise<ManagementInterfaces.BillableCommitterDetails[]> {

        return new Promise<ManagementInterfaces.BillableCommitterDetails[]>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Details", 
            };

            let queryValues: any = {
                billingDate: billingDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "e58d8091-3d07-48b1-9527-7d6295fd4081",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.BillableCommitterDetails[]>;
                res = await this.rest.get<ManagementInterfaces.BillableCommitterDetails[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.BillableCommitterDetails,
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
    public async getLastMeterUsage(
        ): Promise<ManagementInterfaces.MeterUsage> {

        return new Promise<ManagementInterfaces.MeterUsage>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Last", 
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "e58d8091-3d07-48b1-9527-7d6295fd4081",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.MeterUsage>;
                res = await this.rest.get<ManagementInterfaces.MeterUsage>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.MeterUsage,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get commiters used when calculating billing information.
     * 
     * @param {Date} billingDate - The date to query, or if not provided, today
     */
    public async getMeterUsage(
        billingDate?: Date
        ): Promise<ManagementInterfaces.MeterUsage> {

        return new Promise<ManagementInterfaces.MeterUsage>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
            };

            let queryValues: any = {
                billingDate: billingDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "e58d8091-3d07-48b1-9527-7d6295fd4081",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.MeterUsage>;
                res = await this.rest.get<ManagementInterfaces.MeterUsage>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.MeterUsage,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * During multi-org billing computation in primary scale unit(EUS21), this API is used to create billing snapshot for a specific org. Primary scale unit will call this API for each org in different scsle units to create billing snapshot. Data will be stored in the org specific partition DB -> billing snapshot table. This is needed as customers will fetch billing data from their org specific partition DB.
     * 
     * @param {ManagementInterfaces.MeterUsageForPlan} meterUsage
     * @param {ManagementInterfaces.Plan} plan
     */
    public async createBillingSnapshot2(
        meterUsage: ManagementInterfaces.MeterUsageForPlan,
        plan: ManagementInterfaces.Plan
        ): Promise<void> {
        if (plan == null) {
            throw new TypeError('plan can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
            };

            let queryValues: any = {
                plan: plan,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "9615bfcf-d592-4664-9059-4be0150ff16d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, meterUsage, options);

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
     * Get all billable committers details, including those not matched with a VSID.
     * 
     * @param {ManagementInterfaces.Plan} plan - The plan to query. Plans supported: CodeSecurity and SecretProtection. This is a mandatory parameter.
     * @param {Date} billingDate - The date to query, or if not provided, today
     */
    public async getBillableCommitterDetails2(
        plan: ManagementInterfaces.Plan,
        billingDate?: Date
        ): Promise<ManagementInterfaces.BillableCommitterDetails[]> {
        if (plan == null) {
            throw new TypeError('plan can not be null or undefined');
        }

        return new Promise<ManagementInterfaces.BillableCommitterDetails[]>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Details", 
            };

            let queryValues: any = {
                plan: plan,
                billingDate: billingDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "9615bfcf-d592-4664-9059-4be0150ff16d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.BillableCommitterDetails[]>;
                res = await this.rest.get<ManagementInterfaces.BillableCommitterDetails[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.BillableCommitterDetails,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {ManagementInterfaces.Plan} plan
     */
    public async getLastMeterUsage2(
        plan: ManagementInterfaces.Plan
        ): Promise<ManagementInterfaces.MeterUsageForPlan> {
        if (plan == null) {
            throw new TypeError('plan can not be null or undefined');
        }

        return new Promise<ManagementInterfaces.MeterUsageForPlan>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Last", 
            };

            let queryValues: any = {
                plan: plan,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "9615bfcf-d592-4664-9059-4be0150ff16d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.MeterUsageForPlan>;
                res = await this.rest.get<ManagementInterfaces.MeterUsageForPlan>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.MeterUsageForPlan,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get commiters used when calculating billing information.
     * 
     * @param {ManagementInterfaces.Plan} plan - The plan to query. Plans supported: CodeSecurity and SecretProtection. This is a mandatory parameter.
     * @param {Date} billingDate - The date to query, or if not provided, today
     */
    public async getMeterUsage2(
        plan: ManagementInterfaces.Plan,
        billingDate?: Date
        ): Promise<ManagementInterfaces.MeterUsageForPlan> {
        if (plan == null) {
            throw new TypeError('plan can not be null or undefined');
        }

        return new Promise<ManagementInterfaces.MeterUsageForPlan>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
            };

            let queryValues: any = {
                plan: plan,
                billingDate: billingDate,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "9615bfcf-d592-4664-9059-4be0150ff16d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.MeterUsageForPlan>;
                res = await this.rest.get<ManagementInterfaces.MeterUsageForPlan>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.MeterUsageForPlan,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the current status of Advanced Security for the organization
     * 
     * @param {boolean} includeAllProperties - When true, also determine if pushes are blocked if they contain secrets
     */
    public async getOrgEnablementStatus(
        includeAllProperties?: boolean
        ): Promise<ManagementInterfaces.AdvSecEnablementSettings> {

        return new Promise<ManagementInterfaces.AdvSecEnablementSettings>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeAllProperties: includeAllProperties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "d0c0450f-8882-46f4-a5a8-e48fea3095b0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.AdvSecEnablementSettings>;
                res = await this.rest.get<ManagementInterfaces.AdvSecEnablementSettings>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.AdvSecEnablementSettings,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update the status of Advanced Security for the organization
     * 
     * @param {ManagementInterfaces.AdvSecEnablementSettingsUpdate} savedAdvSecEnablementStatus - The new status
     */
    public async updateOrgEnablementStatus(
        savedAdvSecEnablementStatus: ManagementInterfaces.AdvSecEnablementSettingsUpdate
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "d0c0450f-8882-46f4-a5a8-e48fea3095b0",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, savedAdvSecEnablementStatus, options);

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
     * Get the current status of Advanced Security for the organization
     * 
     * @param {boolean} includeAllProperties - When true, also determine if pushes are blocked if they contain secrets
     */
    public async getOrgEnablementStatus2(
        includeAllProperties?: boolean
        ): Promise<ManagementInterfaces.OrgEnablementSettings> {

        return new Promise<ManagementInterfaces.OrgEnablementSettings>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                includeAllProperties: includeAllProperties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "41d7fd8d-71f1-485f-b48d-f68eb7f04a6b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.OrgEnablementSettings>;
                res = await this.rest.get<ManagementInterfaces.OrgEnablementSettings>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.OrgEnablementSettings,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update the status of Advanced Security for the organization
     * 
     * @param {ManagementInterfaces.OrgEnablementSettings} orgEnablementSettings - The new status
     */
    public async updateOrgEnablementStatus2(
        orgEnablementSettings: ManagementInterfaces.OrgEnablementSettings
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "41d7fd8d-71f1-485f-b48d-f68eb7f04a6b",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, orgEnablementSettings, options);

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
     * Estimate the pushers that would be added to the customer's usage if Advanced Security was enabled for this organization.
     * 
     */
    public async getEstimatedBillablePushersDetailsForOrg(
        ): Promise<ManagementInterfaces.BilledCommitter[]> {

        return new Promise<ManagementInterfaces.BilledCommitter[]>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Details", 
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "10a9e9c3-89bf-4312-92ed-139ddbcd2e28",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.BilledCommitter[]>;
                res = await this.rest.get<ManagementInterfaces.BilledCommitter[]>(url, options);

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
     * Estimate the committers that would be added to the customer's usage if Advanced Security was enabled for this organization.
     * 
     */
    public async getEstimatedOrgBillablePushers(
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "10a9e9c3-89bf-4312-92ed-139ddbcd2e28",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.get<string[]>(url, options);

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
     * Estimate the pushers that would be added to the customer's usage if Advanced Security was enabled for this organization.
     * 
     * @param {ManagementInterfaces.Plan} plan - The plan to query.
     */
    public async getEstimatedBillablePushersDetailsForOrg2(
        plan: ManagementInterfaces.Plan
        ): Promise<ManagementInterfaces.MeterUsageEstimate> {
        if (plan == null) {
            throw new TypeError('plan can not be null or undefined');
        }

        return new Promise<ManagementInterfaces.MeterUsageEstimate>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
            };

            let queryValues: any = {
                plan: plan,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "3fae4c8a-0597-45be-bf45-2925fe8036b3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.MeterUsageEstimate>;
                res = await this.rest.get<ManagementInterfaces.MeterUsageEstimate>(url, options);

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
     * Get the current status of Advanced Security for a project
     * 
     * @param {string} project - Project ID or project name
     * @param {boolean} includeAllProperties - When true, also determine if pushes are blocked if they contain secrets
     */
    public async getProjectEnablementStatus(
        project: string,
        includeAllProperties?: boolean
        ): Promise<ManagementInterfaces.AdvSecEnablementSettings> {

        return new Promise<ManagementInterfaces.AdvSecEnablementSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                includeAllProperties: includeAllProperties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "6b9a4b47-5f2d-40f3-8286-b0152079074d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.AdvSecEnablementSettings>;
                res = await this.rest.get<ManagementInterfaces.AdvSecEnablementSettings>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.AdvSecEnablementSettings,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update the status of Advanced Security for the project
     * 
     * @param {ManagementInterfaces.AdvSecEnablementSettingsUpdate} savedAdvSecEnablementStatus - The new status
     * @param {string} project - Project ID or project name
     */
    public async updateProjectEnablementStatus(
        savedAdvSecEnablementStatus: ManagementInterfaces.AdvSecEnablementSettingsUpdate,
        project: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "6b9a4b47-5f2d-40f3-8286-b0152079074d",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, savedAdvSecEnablementStatus, options);

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
     * Get the current status of Advanced Security for a project
     * 
     * @param {string} project - Project ID or project name
     * @param {boolean} includeAllProperties - When true, also determine if pushes are blocked if they contain secrets
     */
    public async getProjectEnablementStatus2(
        project: string,
        includeAllProperties?: boolean
        ): Promise<ManagementInterfaces.ProjectEnablementSettings> {

        return new Promise<ManagementInterfaces.ProjectEnablementSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                includeAllProperties: includeAllProperties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "534d98d2-d5a0-4bf4-94b3-1328019302f8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.ProjectEnablementSettings>;
                res = await this.rest.get<ManagementInterfaces.ProjectEnablementSettings>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.ProjectEnablementSettings,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update the status of Advanced Security for the project
     * 
     * @param {ManagementInterfaces.ProjectEnablementSettings} projectEnablementSettings - The new status
     * @param {string} project - Project ID or project name
     */
    public async updateProjectEnablementStatus2(
        projectEnablementSettings: ManagementInterfaces.ProjectEnablementSettings,
        project: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "534d98d2-d5a0-4bf4-94b3-1328019302f8",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, projectEnablementSettings, options);

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
     * Estimate the pushers that would be added to the customer's usage if Advanced Security was enabled for this project.
     * 
     * @param {string} project - Project ID or project name
     */
    public async getEstimatedBillablePushersDetailsForProject(
        project: string
        ): Promise<ManagementInterfaces.BilledCommitter[]> {

        return new Promise<ManagementInterfaces.BilledCommitter[]>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Details", 
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "bf09cb40-ecf4-4496-8cf7-9ec60c64fd3e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.BilledCommitter[]>;
                res = await this.rest.get<ManagementInterfaces.BilledCommitter[]>(url, options);

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
     * Estimate the number of committers that would be added to the customer's usage if Advanced Security was enabled for this project.
     * 
     * @param {string} project - Project ID or project name
     */
    public async getEstimatedBillablePushersForProject(
        project: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "bf09cb40-ecf4-4496-8cf7-9ec60c64fd3e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.get<string[]>(url, options);

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
     * Estimate the pushers that would be added to the customer's usage if Advanced Security was enabled for this project.
     * 
     * @param {string} project - Project ID or project name
     * @param {ManagementInterfaces.Plan} plan
     */
    public async getEstimatedBillablePushersDetailsForProject2(
        project: string,
        plan?: ManagementInterfaces.Plan
        ): Promise<ManagementInterfaces.MeterUsageEstimate> {

        return new Promise<ManagementInterfaces.MeterUsageEstimate>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
                project: project
            };

            let queryValues: any = {
                plan: plan,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "ffd0d73d-54b4-4f56-9d83-e8b08db8bfcf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.MeterUsageEstimate>;
                res = await this.rest.get<ManagementInterfaces.MeterUsageEstimate>(url, options);

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
     * Determine if Advanced Security is enabled for a repository
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repository - The name or ID of the repository
     * @param {boolean} includeAllProperties - When true, will also determine if pushes are blocked when secrets are detected
     */
    public async getRepoEnablementStatus(
        project: string,
        repository: string,
        includeAllProperties?: boolean
        ): Promise<ManagementInterfaces.AdvSecEnablementStatus> {

        return new Promise<ManagementInterfaces.AdvSecEnablementStatus>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repository: repository
            };

            let queryValues: any = {
                includeAllProperties: includeAllProperties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "d11a1c2b-b904-43dc-b970-bf42486262db",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.AdvSecEnablementStatus>;
                res = await this.rest.get<ManagementInterfaces.AdvSecEnablementStatus>(url, options);

                let ret = this.formatResponse(res.result,
                                              ManagementInterfaces.TypeInfo.AdvSecEnablementStatus,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update the enablement of Advanced Security for a repository
     * 
     * @param {ManagementInterfaces.AdvSecEnablementStatusUpdate} savedAdvSecEnablementStatus - new status
     * @param {string} project - Project ID or project name
     * @param {string} repository - Name or ID of the repository
     */
    public async updateRepoAdvSecEnablementStatus(
        savedAdvSecEnablementStatus: ManagementInterfaces.AdvSecEnablementStatusUpdate,
        project: string,
        repository: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repository: repository
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "d11a1c2b-b904-43dc-b970-bf42486262db",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, savedAdvSecEnablementStatus, options);

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
     * Estimate the committers that would be added to the customer's usage if Advanced Security was enabled for this repository.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repository
     */
    public async getEstimatedBillableCommitersDetailsForRepo(
        project: string,
        repository: string
        ): Promise<ManagementInterfaces.BilledCommitter[]> {

        return new Promise<ManagementInterfaces.BilledCommitter[]>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Details", 
                project: project,
                repository: repository
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "b60f1ebf-ae77-4557-bd7f-ae3d5598dd1f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.BilledCommitter[]>;
                res = await this.rest.get<ManagementInterfaces.BilledCommitter[]>(url, options);

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
     * Estimate the committers that would be added to the customer's usage if Advanced Security was enabled for this repository.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repository - The name or ID of the repository
     */
    public async getEstimatedBillableCommittersForRepo(
        project: string,
        repository: string
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
                project: project,
                repository: repository
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "b60f1ebf-ae77-4557-bd7f-ae3d5598dd1f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.get<string[]>(url, options);

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
     * Estimate the pushers that would be added to the customer's usage if Advanced Security was enabled for this repository.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repository - The name or ID of the repository
     * @param {ManagementInterfaces.Plan} plan - The plan to query.
     */
    public async getEstimatedRepoBillableCommittersDetails2(
        project: string,
        repository: string,
        plan?: ManagementInterfaces.Plan
        ): Promise<ManagementInterfaces.MeterUsageEstimate> {

        return new Promise<ManagementInterfaces.MeterUsageEstimate>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
                project: project,
                repository: repository
            };

            let queryValues: any = {
                plan: plan,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Management",
                    "1a7b7e0d-e0b6-48b4-b0b6-9b6c2a1984e3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<ManagementInterfaces.MeterUsageEstimate>;
                res = await this.rest.get<ManagementInterfaces.MeterUsageEstimate>(url, options);

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
