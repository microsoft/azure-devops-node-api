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
import WorkItemTrackingProcessTemplateInterfaces = require("./interfaces/WorkItemTrackingProcessTemplateInterfaces");

export interface IWorkItemTrackingApi extends basem.ClientApiBase {
    getBehavior(processId: string, behaviorRefName: string): Promise<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior>;
    getBehaviors(processId: string): Promise<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior[]>;
    exportProcessTemplate(id: string): Promise<any>;
    importProcessTemplate(customHeaders: any, contentStream: NodeJS.ReadableStream, ignoreWarnings?: boolean): Promise<WorkItemTrackingProcessTemplateInterfaces.ProcessImportResult>;
    importProcessTemplateStatus(id: string): Promise<WorkItemTrackingProcessTemplateInterfaces.ProcessPromoteStatus>;
}

export class WorkItemTrackingApi extends basem.ClientApiBase implements IWorkItemTrackingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-WorkItemTracking-api');
    }

    /**
    * @param {string} processId
    * @param {string} behaviorRefName
    */
    public async getBehavior(
        processId: string,
        behaviorRefName: string
        ): Promise<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior> {

        return new Promise<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            let queryValues: any = {
                behaviorRefName: behaviorRefName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processAdmin",
                    "90bf9317-3571-487b-bc8c-a523ba0e05d7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior>;
                res = await this.rest.get<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior>(url, options);

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
    * @param {string} processId
    */
    public async getBehaviors(
        processId: string
        ): Promise<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior[]> {

        return new Promise<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processAdmin",
                    "90bf9317-3571-487b-bc8c-a523ba0e05d7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior[]>;
                res = await this.rest.get<WorkItemTrackingProcessTemplateInterfaces.AdminBehavior[]>(url, options);

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
    * Returns requested process template
    * 
    * @param {string} id
    */
    public async exportProcessTemplate(
        id: string
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                id: id,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processAdmin",
                    "29e1f38d-9e9c-4358-86a5-cdf9896a5759",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<any>;
                res = await this.rest.get<any>(url, options);

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
    * Records supplied process template and triggers promote
    * 
    * @param {NodeJS.ReadableStream} contentStream - Content to upload
    * @param {boolean} ignoreWarnings
    */
    public async importProcessTemplate(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        ignoreWarnings?: boolean
        ): Promise<WorkItemTrackingProcessTemplateInterfaces.ProcessImportResult> {

        return new Promise<WorkItemTrackingProcessTemplateInterfaces.ProcessImportResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                ignoreWarnings: ignoreWarnings,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processAdmin",
                    "29e1f38d-9e9c-4358-86a5-cdf9896a5759",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessTemplateInterfaces.ProcessImportResult>;
                res = await this.rest.uploadStream<WorkItemTrackingProcessTemplateInterfaces.ProcessImportResult>("POST", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessTemplateInterfaces.TypeInfo.ProcessImportResult,
                                              false);

                resolve(ret);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Whether promote has completed for the specified promote job id
    * 
    * @param {string} id
    */
    public async importProcessTemplateStatus(
        id: string
        ): Promise<WorkItemTrackingProcessTemplateInterfaces.ProcessPromoteStatus> {

        return new Promise<WorkItemTrackingProcessTemplateInterfaces.ProcessPromoteStatus>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                id: id,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processAdmin",
                    "29e1f38d-9e9c-4358-86a5-cdf9896a5759",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessTemplateInterfaces.ProcessPromoteStatus>;
                res = await this.rest.get<WorkItemTrackingProcessTemplateInterfaces.ProcessPromoteStatus>(url, options);

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
