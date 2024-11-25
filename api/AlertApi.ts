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
import AlertInterfaces = require("./interfaces/AlertInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IAlertApi extends basem.ClientApiBase {
    getAlert(project: string, alertId: number, repository: string, ref?: string, expand?: AlertInterfaces.ExpandOption): Promise<AlertInterfaces.Alert>;
    getAlerts(project: string, repository: string, top?: number, orderBy?: string, criteria?: AlertInterfaces.SearchCriteria, continuationToken?: string): Promise<VSSInterfaces.PagedList<AlertInterfaces.Alert>>;
    getAlertSarif(project: string, alertId: number, repository: string, ref?: string, expand?: AlertInterfaces.ExpandOption): Promise<string>;
    updateAlert(stateUpdate: AlertInterfaces.AlertStateUpdate, project: string, alertId: number, repository: string): Promise<AlertInterfaces.Alert>;
    getAlertInstances(project: string, alertId: number, repository: string, ref?: string): Promise<AlertInterfaces.AlertAnalysisInstance[]>;
    updateAlertsMetadata(alertsMetadata: AlertInterfaces.AlertMetadata[], project: string, repository: string): Promise<AlertInterfaces.AlertMetadataChange[]>;
    uploadSarif(customHeaders: any, contentStream: NodeJS.ReadableStream, project: string, repository: string, notificationFlag?: String): Promise<number>;
    getBranches(project: string, repository: string, alertType: AlertInterfaces.AlertType, continuationToken?: string, branchNameContains?: string, top?: number, includePullRequestBranches?: boolean): Promise<AlertInterfaces.Branch[]>;
    getUxFilters(project: string, repository: string, alertType: AlertInterfaces.AlertType): Promise<AlertInterfaces.UxFilters>;
    getSarif(sarifId: number): Promise<AlertInterfaces.SarifUploadStatus>;
}

export class AlertApi extends basem.ClientApiBase implements IAlertApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Alert-api', options);
    }

    /**
     * Get an alert.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} alertId - ID of alert to retrieve
     * @param {string} repository - Name or id  of a repository that alert is part of
     * @param {string} ref
     * @param {AlertInterfaces.ExpandOption} expand - Expand alert attributes. Possible options are {ValidationFingerprint, None}
     */
    public async getAlert(
        project: string,
        alertId: number,
        repository: string,
        ref?: string,
        expand?: AlertInterfaces.ExpandOption
        ): Promise<AlertInterfaces.Alert> {

        return new Promise<AlertInterfaces.Alert>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                alertId: alertId,
                repository: repository
            };

            let queryValues: any = {
                ref: ref,
                expand: expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Alert",
                    "e21b4630-b7d2-4031-99e3-3ad328cc4a7f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AlertInterfaces.Alert>;
                res = await this.rest.get<AlertInterfaces.Alert>(url, options);

                let ret = this.formatResponse(res.result,
                                              AlertInterfaces.TypeInfo.Alert,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get alerts for a repository
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repository - The name or ID of the repository
     * @param {number} top - The maximum number of alerts to return
     * @param {string} orderBy - Must be "id" "firstSeen" "lastSeen" "fixedOn" or "severity"  Defaults to "id"
     * @param {AlertInterfaces.SearchCriteria} criteria - Options to limit the alerts returned
     * @param {string} continuationToken - If there are more alerts than can be returned, a continuation token is placed in the "x-ms-continuationtoken" header.  Use that token here to get the next page of alerts
     */
    public async getAlerts(
        project: string,
        repository: string,
        top?: number,
        orderBy?: string,
        criteria?: AlertInterfaces.SearchCriteria,
        continuationToken?: string
        ): Promise<VSSInterfaces.PagedList<AlertInterfaces.Alert>> {

        return new Promise<VSSInterfaces.PagedList<AlertInterfaces.Alert>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repository: repository
            };

            let queryValues: any = {
                top: top,
                orderBy: orderBy,
                criteria: criteria,
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Alert",
                    "e21b4630-b7d2-4031-99e3-3ad328cc4a7f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<AlertInterfaces.Alert>>;
                res = await this.rest.get<VSSInterfaces.PagedList<AlertInterfaces.Alert>>(url, options);

                let ret = this.formatResponse(res.result,
                                              AlertInterfaces.TypeInfo.Alert,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get an alert.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} alertId - ID of alert to retrieve
     * @param {string} repository - Name or id  of a repository that alert is part of
     * @param {string} ref
     * @param {AlertInterfaces.ExpandOption} expand - Expand alert attributes. Possible options are {ValidationFingerprint, None}
     */
    public async getAlertSarif(
        project: string,
        alertId: number,
        repository: string,
        ref?: string,
        expand?: AlertInterfaces.ExpandOption
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                alertId: alertId,
                repository: repository
            };

            let queryValues: any = {
                ref: ref,
                expand: expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Alert",
                    "e21b4630-b7d2-4031-99e3-3ad328cc4a7f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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

    /**
     * Update the status of an alert
     * 
     * @param {AlertInterfaces.AlertStateUpdate} stateUpdate - The new status of the alert
     * @param {string} project - Project ID or project name
     * @param {number} alertId - The ID of the alert
     * @param {string} repository - The name or ID of the repository
     */
    public async updateAlert(
        stateUpdate: AlertInterfaces.AlertStateUpdate,
        project: string,
        alertId: number,
        repository: string
        ): Promise<AlertInterfaces.Alert> {

        return new Promise<AlertInterfaces.Alert>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                alertId: alertId,
                repository: repository
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Alert",
                    "e21b4630-b7d2-4031-99e3-3ad328cc4a7f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AlertInterfaces.Alert>;
                res = await this.rest.update<AlertInterfaces.Alert>(url, stateUpdate, options);

                let ret = this.formatResponse(res.result,
                                              AlertInterfaces.TypeInfo.Alert,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get instances of an alert on a branch specified with @ref. If @ref is not provided, return instances of an alert on default branch(if the alert exist in default branch) or latest affected branch.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} alertId - ID of alert to retrieve
     * @param {string} repository - Name or id of a repository that alert is part of
     * @param {string} ref
     */
    public async getAlertInstances(
        project: string,
        alertId: number,
        repository: string,
        ref?: string
        ): Promise<AlertInterfaces.AlertAnalysisInstance[]> {

        return new Promise<AlertInterfaces.AlertAnalysisInstance[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                alertId: alertId,
                repository: repository
            };

            let queryValues: any = {
                ref: ref,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Alert",
                    "f451ba96-0e95-458a-8dd5-3df894770a49",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AlertInterfaces.AlertAnalysisInstance[]>;
                res = await this.rest.get<AlertInterfaces.AlertAnalysisInstance[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              AlertInterfaces.TypeInfo.AlertAnalysisInstance,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update alert metadata associations.
     * 
     * @param {AlertInterfaces.AlertMetadata[]} alertsMetadata - A list of metadata to associate with alerts.
     * @param {string} project - Project ID or project name
     * @param {string} repository - The name or ID of the repository.
     */
    public async updateAlertsMetadata(
        alertsMetadata: AlertInterfaces.AlertMetadata[],
        project: string,
        repository: string
        ): Promise<AlertInterfaces.AlertMetadataChange[]> {

        return new Promise<AlertInterfaces.AlertMetadataChange[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repository: repository
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Alert",
                    "65de4b84-7519-4ae8-8623-175f79b49b80",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AlertInterfaces.AlertMetadataChange[]>;
                res = await this.rest.update<AlertInterfaces.AlertMetadataChange[]>(url, alertsMetadata, options);

                let ret = this.formatResponse(res.result,
                                              AlertInterfaces.TypeInfo.AlertMetadataChange,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Upload a Sarif containing security alerts
     * 
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} project - Project ID or project name
     * @param {string} repository - The name or ID of a repository
     * @param {String} notificationFlag - Header to signal that this is a progress notification
     */
    public async uploadSarif(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        project: string,
        repository: string,
        notificationFlag?: String
        ): Promise<number> {

        return new Promise<number>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repository: repository
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";
            customHeaders["X-AdvSec-NotificationSarif"] = "notificationFlag";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Alert",
                    "2a141cae-a50d-4c22-b41b-13f77748d035",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<number>;
                res = await this.rest.uploadStream<number>("POST", url, contentStream, options);

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
     * Returns the branches for which analysis results were submitted.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repository
     * @param {AlertInterfaces.AlertType} alertType - The type of alert: Dependency Scanning (1), Secret (2), Code QL (3), etc.
     * @param {string} continuationToken - A string variable that represents the branch name and is used to fetch branches that follow it in alphabetical order.
     * @param {string} branchNameContains - A string variable used to fetch branches that contain this string anywhere in the branch name, case insensitive.
     * @param {number} top - An int variable used to return the top k branches that satisfy the search criteria.
     * @param {boolean} includePullRequestBranches - A bool variable indicating whether or not to include pull request branches.
     */
    public async getBranches(
        project: string,
        repository: string,
        alertType: AlertInterfaces.AlertType,
        continuationToken?: string,
        branchNameContains?: string,
        top?: number,
        includePullRequestBranches?: boolean
        ): Promise<AlertInterfaces.Branch[]> {
        if (alertType == null) {
            throw new TypeError('alertType can not be null or undefined');
        }

        return new Promise<AlertInterfaces.Branch[]>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Branches", 
                project: project,
                repository: repository
            };

            let queryValues: any = {
                alertType: alertType,
                continuationToken: continuationToken,
                branchNameContains: branchNameContains,
                top: top,
                includePullRequestBranches: includePullRequestBranches,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Alert",
                    "8f90675b-f794-434d-8f2c-cfae0a11c02a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AlertInterfaces.Branch[]>;
                res = await this.rest.get<AlertInterfaces.Branch[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              AlertInterfaces.TypeInfo.Branch,
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
     * @param {string} repository
     * @param {AlertInterfaces.AlertType} alertType
     */
    public async getUxFilters(
        project: string,
        repository: string,
        alertType: AlertInterfaces.AlertType
        ): Promise<AlertInterfaces.UxFilters> {
        if (alertType == null) {
            throw new TypeError('alertType can not be null or undefined');
        }

        return new Promise<AlertInterfaces.UxFilters>(async (resolve, reject) => {
            let routeValues: any = {
                action: "Default", 
                project: project,
                repository: repository
            };

            let queryValues: any = {
                alertType: alertType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.1",
                    "Alert",
                    "8f90675b-f794-434d-8f2c-cfae0a11c02a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AlertInterfaces.UxFilters>;
                res = await this.rest.get<AlertInterfaces.UxFilters>(url, options);

                let ret = this.formatResponse(res.result,
                                              AlertInterfaces.TypeInfo.UxFilters,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the status of the Sarif processing job
     * 
     * @param {number} sarifId - Sarif ID returned when the Sarif was uploaded
     */
    public async getSarif(
        sarifId: number
        ): Promise<AlertInterfaces.SarifUploadStatus> {

        return new Promise<AlertInterfaces.SarifUploadStatus>(async (resolve, reject) => {
            let routeValues: any = {
                sarifId: sarifId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.2",
                    "Alert",
                    "a04689e7-0f81-48a2-8d18-40654c47494c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<AlertInterfaces.SarifUploadStatus>;
                res = await this.rest.get<AlertInterfaces.SarifUploadStatus>(url, options);

                let ret = this.formatResponse(res.result,
                                              AlertInterfaces.TypeInfo.SarifUploadStatus,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
