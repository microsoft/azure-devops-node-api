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
import WorkItemTrackingProcessInterfaces = require("./interfaces/WorkItemTrackingProcessInterfaces");

export interface IWorkItemTrackingApi extends basem.ClientApiBase {
    getBehavior(processId: string, behaviorRefName: string, expand?: WorkItemTrackingProcessInterfaces.GetBehaviorsExpand): Promise<WorkItemTrackingProcessInterfaces.WorkItemBehavior>;
    getBehaviors(processId: string, expand?: WorkItemTrackingProcessInterfaces.GetBehaviorsExpand): Promise<WorkItemTrackingProcessInterfaces.WorkItemBehavior[]>;
    getFields(processId: string): Promise<WorkItemTrackingProcessInterfaces.FieldModel[]>;
    getWorkItemTypeFields(processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.FieldModel[]>;
    createProcess(createRequest: WorkItemTrackingProcessInterfaces.CreateProcessModel): Promise<WorkItemTrackingProcessInterfaces.ProcessModel>;
    deleteProcess(processTypeId: string): Promise<void>;
    getProcessById(processTypeId: string, expand?: WorkItemTrackingProcessInterfaces.GetProcessExpandLevel): Promise<WorkItemTrackingProcessInterfaces.ProcessModel>;
    getProcesses(expand?: WorkItemTrackingProcessInterfaces.GetProcessExpandLevel): Promise<WorkItemTrackingProcessInterfaces.ProcessModel[]>;
    updateProcess(updateRequest: WorkItemTrackingProcessInterfaces.UpdateProcessModel, processTypeId: string): Promise<WorkItemTrackingProcessInterfaces.ProcessModel>;
    getWorkItemType(processId: string, witRefName: string, expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeModel>;
    getWorkItemTypes(processId: string, expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeModel[]>;
}

export class WorkItemTrackingApi extends basem.ClientApiBase implements IWorkItemTrackingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-WorkItemTracking-api');
    }

    /**
    * @param {string} processId
    * @param {string} behaviorRefName
    * @param {WorkItemTrackingProcessInterfaces.GetBehaviorsExpand} expand
    */
    public async getBehavior(
        processId: string,
        behaviorRefName: string,
        expand?: WorkItemTrackingProcessInterfaces.GetBehaviorsExpand
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemBehavior> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                behaviorRefName: behaviorRefName
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "d1800200-f184-4e75-a5f2-ad0b04b4373e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemBehavior>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemBehavior>(url, options);

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
    * @param {WorkItemTrackingProcessInterfaces.GetBehaviorsExpand} expand
    */
    public async getBehaviors(
        processId: string,
        expand?: WorkItemTrackingProcessInterfaces.GetBehaviorsExpand
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemBehavior[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemBehavior[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "d1800200-f184-4e75-a5f2-ad0b04b4373e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemBehavior[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemBehavior[]>(url, options);

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
    * @param {string} processId
    */
    public async getFields(
        processId: string
        ): Promise<WorkItemTrackingProcessInterfaces.FieldModel[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.FieldModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "7a0e7a1a-0b34-4ae0-9744-0aaffb7d0ed1",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.FieldModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.FieldModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.FieldModel,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} processId
    * @param {string} witRefName
    */
    public async getWorkItemTypeFields(
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.FieldModel[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.FieldModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "bc0ad8dc-e3f3-46b0-b06c-5bf861793196",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.FieldModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.FieldModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.FieldModel,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {WorkItemTrackingProcessInterfaces.CreateProcessModel} createRequest
    */
    public async createProcess(
        createRequest: WorkItemTrackingProcessInterfaces.CreateProcessModel
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessModel> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessModel>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessModel>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.ProcessModel>(url, createRequest, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessModel,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} processTypeId
    */
    public async deleteProcess(
        processTypeId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processTypeId: processTypeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
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
    * @param {string} processTypeId
    * @param {WorkItemTrackingProcessInterfaces.GetProcessExpandLevel} expand
    */
    public async getProcessById(
        processTypeId: string,
        expand?: WorkItemTrackingProcessInterfaces.GetProcessExpandLevel
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessModel> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessModel>(async (resolve, reject) => {
            let routeValues: any = {
                processTypeId: processTypeId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessModel>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessModel>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessModel,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {WorkItemTrackingProcessInterfaces.GetProcessExpandLevel} expand
    */
    public async getProcesses(
        expand?: WorkItemTrackingProcessInterfaces.GetProcessExpandLevel
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessModel[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessModel[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessModel,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {WorkItemTrackingProcessInterfaces.UpdateProcessModel} updateRequest
    * @param {string} processTypeId
    */
    public async updateProcess(
        updateRequest: WorkItemTrackingProcessInterfaces.UpdateProcessModel,
        processTypeId: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessModel> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessModel>(async (resolve, reject) => {
            let routeValues: any = {
                processTypeId: processTypeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessModel>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.ProcessModel>(url, updateRequest, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessModel,
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
    * @param {string} witRefName
    * @param {WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand} expand
    */
    public async getWorkItemType(
        processId: string,
        witRefName: string,
        expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeModel> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "e2e9d1a6-432d-4062-8870-bfcb8c324ad7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemTypeModel>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemTypeModel>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.WorkItemTypeModel,
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
    * @param {WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand} expand
    */
    public async getWorkItemTypes(
        processId: string,
        expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeModel[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processes",
                    "e2e9d1a6-432d-4062-8870-bfcb8c324ad7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemTypeModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemTypeModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.WorkItemTypeModel,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
