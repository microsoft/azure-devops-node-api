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
    addWorkItemTypeRule(fieldRule: WorkItemTrackingProcessInterfaces.FieldRuleModel, processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel>;
    deleteWorkItemTypeRule(processId: string, witRefName: string, ruleId: string): Promise<void>;
    getWorkItemTypeRule(processId: string, witRefName: string, ruleId: string): Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel>;
    getWorkItemTypeRules(processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel[]>;
    updateWorkItemTypeRule(fieldRule: WorkItemTrackingProcessInterfaces.FieldRuleModel, processId: string, witRefName: string, ruleId: string): Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel>;
    getStateDefinition(processId: string, witRefName: string, stateId: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
    getStateDefinitions(processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel[]>;
    getWorkItemType(processId: string, witRefName: string, expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeModel>;
    getWorkItemTypes(processId: string, expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeModel[]>;
}

export class WorkItemTrackingApi extends basem.ClientApiBase implements IWorkItemTrackingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-WorkItemTracking-api', options);
    }

    /**
     * Returns a behavior of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} behaviorRefName - Reference name of the behavior
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
                    "4.1-preview.1",
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
     * Returns a list of all behaviors in the process.
     * 
     * @param {string} processId - The ID of the process
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
                    "4.1-preview.1",
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
     * Returns a list of all fields in a process.
     * 
     * @param {string} processId - The ID of the process
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
                    "4.1-preview.1",
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
     * Returns a list of all fields in a work item type.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
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
                    "4.1-preview.1",
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
     * Creates a process.
     * 
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
                    "4.1-preview.1",
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
     * Removes a process of a specific ID.
     * 
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
                    "4.1-preview.1",
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
     * Returns a single process of a specified ID.
     * 
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
                    "4.1-preview.1",
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
     * Returns a list of all processes.
     * 
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
                    "4.1-preview.1",
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
     * Updates a process of a specific ID.
     * 
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
                    "4.1-preview.1",
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
     * Adds a rule to work item type in the process.
     * 
     * @param {WorkItemTrackingProcessInterfaces.FieldRuleModel} fieldRule
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     */
    public async addWorkItemTypeRule(
        fieldRule: WorkItemTrackingProcessInterfaces.FieldRuleModel,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel> {

        return new Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.FieldRuleModel>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.FieldRuleModel>(url, fieldRule, options);

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
     * Removes a rule from the work item type in the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} ruleId - The ID of the rule
     */
    public async deleteWorkItemTypeRule(
        processId: string,
        witRefName: string,
        ruleId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                ruleId: ruleId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
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
     * Returns a single rule in the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} ruleId - The ID of the rule
     */
    public async getWorkItemTypeRule(
        processId: string,
        witRefName: string,
        ruleId: string
        ): Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel> {

        return new Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                ruleId: ruleId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.FieldRuleModel>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.FieldRuleModel>(url, options);

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
     * Returns a list of all rules in the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     */
    public async getWorkItemTypeRules(
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.FieldRuleModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.FieldRuleModel[]>(url, options);

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
     * Updates a rule in the work item type of the process.
     * 
     * @param {WorkItemTrackingProcessInterfaces.FieldRuleModel} fieldRule
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} ruleId - The ID of the rule
     */
    public async updateWorkItemTypeRule(
        fieldRule: WorkItemTrackingProcessInterfaces.FieldRuleModel,
        processId: string,
        witRefName: string,
        ruleId: string
        ): Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel> {

        return new Promise<WorkItemTrackingProcessInterfaces.FieldRuleModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                ruleId: ruleId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.FieldRuleModel>;
                res = await this.rest.replace<WorkItemTrackingProcessInterfaces.FieldRuleModel>(url, fieldRule, options);

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
     * Returns a single state definition in a work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} stateId - The ID of the state
     */
    public async getStateDefinition(
        processId: string,
        witRefName: string,
        stateId: string
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                stateId: stateId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "processes",
                    "31015d57-2dff-4a46-adb3-2fb4ee3dcec9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>(url, options);

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
     * Returns a list of all state definitions in a work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     */
    public async getStateDefinitions(
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "processes",
                    "31015d57-2dff-4a46-adb3-2fb4ee3dcec9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel[]>(url, options);

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
     * Returns a single work item type in a process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
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
                    "4.1-preview.1",
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
     * Returns a list of all work item types in a process.
     * 
     * @param {string} processId - The ID of the process
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
                    "4.1-preview.1",
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
