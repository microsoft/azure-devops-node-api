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
    createBillingSnapshot(meterUsage: ManagementInterfaces.MeterUsage): Promise<void>;
    getBillableCommitterDetails(billingDate?: Date): Promise<ManagementInterfaces.BillableCommitterDetails[]>;
    getLastMeterUsage(): Promise<ManagementInterfaces.MeterUsage>;
    getMeterUsage(billingDate?: Date): Promise<ManagementInterfaces.MeterUsage>;
    getOrgEnablementStatus(includeAllProperties?: boolean): Promise<ManagementInterfaces.AdvSecEnablementSettings>;
    updateOrgEnablementStatus(savedAdvSecEnablementStatus: ManagementInterfaces.AdvSecEnablementSettingsUpdate): Promise<void>;
    getEstimatedBillablePushersDetailsForOrg(): Promise<ManagementInterfaces.BilledCommitter[]>;
    getEstimatedOrgBillablePushers(): Promise<string[]>;
    getProjectEnablementStatus(project: string, includeAllProperties?: boolean): Promise<ManagementInterfaces.AdvSecEnablementSettings>;
    updateProjectEnablementStatus(savedAdvSecEnablementStatus: ManagementInterfaces.AdvSecEnablementSettingsUpdate, project: string): Promise<void>;
    getEstimatedBillablePushersDetailsForProject(project: string): Promise<ManagementInterfaces.BilledCommitter[]>;
    getEstimatedProjectBillablePushers(project: string): Promise<string[]>;
    getRepoEnablementStatus(project: string, repository: string, includeAllProperties?: boolean): Promise<ManagementInterfaces.AdvSecEnablementStatus>;
    updateRepoAdvSecEnablementStatus(savedAdvSecEnablementStatus: ManagementInterfaces.AdvSecEnablementStatusUpdate, project: string, repository: string): Promise<void>;
    getEstimatedRepoBillableCommitters(project: string, repository: string): Promise<string[]>;
    getEstimatedRepoBillablePushersDetails(project: string, repository: string): Promise<ManagementInterfaces.BilledCommitter[]>;
}

export class ManagementApi extends basem.ClientApiBase implements IManagementApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Management-api', options);
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
    public async getEstimatedProjectBillablePushers(
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
     * @param {string} repository - The name or ID of the repository
     */
    public async getEstimatedRepoBillableCommitters(
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
     * @param {string} repository
     */
    public async getEstimatedRepoBillablePushersDetails(
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

}
