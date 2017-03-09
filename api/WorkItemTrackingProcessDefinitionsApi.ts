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
import WorkItemTrackingProcessDefinitionsInterfaces = require("./interfaces/WorkItemTrackingProcessDefinitionsInterfaces");

export interface IWorkItemTrackingApi extends basem.ClientApiBase {
    createBehavior(behavior: WorkItemTrackingProcessDefinitionsInterfaces.BehaviorCreateModel, processId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>;
    deleteBehavior(processId: string, behaviorId: string): Promise<void>;
    getBehavior(processId: string, behaviorId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>;
    getBehaviors(processId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel[]>;
    replaceBehavior(behaviorData: WorkItemTrackingProcessDefinitionsInterfaces.BehaviorReplaceModel, processId: string, behaviorId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>;
    addControlToGroup(control: WorkItemTrackingProcessDefinitionsInterfaces.Control, processId: string, witRefName: string, groupId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Control>;
    editControl(control: WorkItemTrackingProcessDefinitionsInterfaces.Control, processId: string, witRefName: string, groupId: string, controlId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Control>;
    removeControlFromGroup(processId: string, witRefName: string, groupId: string, controlId: string): Promise<void>;
    setControlInGroup(control: WorkItemTrackingProcessDefinitionsInterfaces.Control, processId: string, witRefName: string, groupId: string, controlId: string, removeFromGroupId?: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Control>;
    createField(field: WorkItemTrackingProcessDefinitionsInterfaces.FieldModel, processId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel>;
    deleteField(processId: string, field: string): Promise<void>;
    updateField(field: WorkItemTrackingProcessDefinitionsInterfaces.FieldUpdate, processId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel>;
    addGroup(group: WorkItemTrackingProcessDefinitionsInterfaces.Group, processId: string, witRefName: string, pageId: string, sectionId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group>;
    editGroup(group: WorkItemTrackingProcessDefinitionsInterfaces.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group>;
    removeGroup(processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string): Promise<void>;
    setGroupInPage(group: WorkItemTrackingProcessDefinitionsInterfaces.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string, removeFromPageId: string, removeFromSectionId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group>;
    setGroupInSection(group: WorkItemTrackingProcessDefinitionsInterfaces.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string, removeFromSectionId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group>;
    getFormLayout(processId: string, witRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FormLayout>;
    getListsMetadata(): Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListMetadataModel[]>;
    createList(picklist: WorkItemTrackingProcessDefinitionsInterfaces.PickListModel): Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>;
    deleteList(listId: string): Promise<void>;
    getList(listId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>;
    updateList(picklist: WorkItemTrackingProcessDefinitionsInterfaces.PickListModel, listId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>;
    addPage(page: WorkItemTrackingProcessDefinitionsInterfaces.Page, processId: string, witRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Page>;
    editPage(page: WorkItemTrackingProcessDefinitionsInterfaces.Page, processId: string, witRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Page>;
    removePage(processId: string, witRefName: string, pageId: string): Promise<void>;
    createStateDefinition(stateModel: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateInputModel, processId: string, witRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>;
    deleteStateDefinition(processId: string, witRefName: string, stateId: string): Promise<void>;
    getStateDefinition(processId: string, witRefName: string, stateId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>;
    getStateDefinitions(processId: string, witRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel[]>;
    hideStateDefinition(hideStateModel: WorkItemTrackingProcessDefinitionsInterfaces.HideStateModel, processId: string, witRefName: string, stateId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>;
    updateStateDefinition(stateModel: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateInputModel, processId: string, witRefName: string, stateId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>;
    addBehaviorToWorkItemType(behavior: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior, processId: string, witRefNameForBehaviors: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>;
    getBehaviorForWorkItemType(processId: string, witRefNameForBehaviors: string, behaviorRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>;
    getBehaviorsForWorkItemType(processId: string, witRefNameForBehaviors: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior[]>;
    removeBehaviorFromWorkItemType(processId: string, witRefNameForBehaviors: string, behaviorRefName: string): Promise<void>;
    updateBehaviorToWorkItemType(behavior: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior, processId: string, witRefNameForBehaviors: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>;
    addWorkItemTypeField(field: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel, processId: string, witRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
    removeWorkItemTypeField(processId: string, witRefName: string, field: string): Promise<void>;
    addWorkItemTypeFieldRule(fieldRule: WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel, processId: string, witRefNameForRules: string, fieldRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>;
    deleteWorkItemTypeFieldRule(processId: string, witRefNameForRules: string, fieldRefName: string, ruleId: string): Promise<void>;
    getWorkItemTypeFieldRule(processId: string, witRefNameForRules: string, fieldRefName: string, ruleId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>;
    getWorkItemTypeFieldRules(processId: string, witRefNameForRules: string, fieldRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel[]>;
    updateWorkItemTypeFieldRule(fieldRule: WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel, processId: string, witRefNameForRules: string, fieldRefName: string, ruleId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>;
    createWorkItemType(workitemType: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel, processId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
    deleteWorkItemType(processId: string, witRefName: string): Promise<void>;
    getWorkItemType(processId: string, witRefName: string, expand?: WorkItemTrackingProcessDefinitionsInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
    getWorkItemTypes(processId: string, expand?: WorkItemTrackingProcessDefinitionsInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel[]>;
    updateWorkItemType(workitemTypeUpdate: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeUpdateModel, processId: string, witRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
    addFieldToWorkItemType(field: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel, processId: string, witRefNameForFields: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
    getWorkItemTypeField(processId: string, witRefNameForFields: string, fieldRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
    getWorkItemTypeFields(processId: string, witRefNameForFields: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel[]>;
    removeFieldFromWorkItemType(processId: string, witRefNameForFields: string, fieldRefName: string): Promise<void>;
}

export class WorkItemTrackingApi extends basem.ClientApiBase implements IWorkItemTrackingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-WorkItemTracking-api');
    }

    /**
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.BehaviorCreateModel} behavior
    * @param {string} processId
    */
    public async createBehavior(
        behavior: WorkItemTrackingProcessDefinitionsInterfaces.BehaviorCreateModel,
        processId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "47a651f4-fb70-43bf-b96b-7c0ba947142b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>(url, behavior, options);

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
    * @param {string} behaviorId
    */
    public async deleteBehavior(
        processId: string,
        behaviorId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                behaviorId: behaviorId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "47a651f4-fb70-43bf-b96b-7c0ba947142b",
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
    * @param {string} processId
    * @param {string} behaviorId
    */
    public async getBehavior(
        processId: string,
        behaviorId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                behaviorId: behaviorId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "47a651f4-fb70-43bf-b96b-7c0ba947142b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>(url, options);

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
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel[]> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "47a651f4-fb70-43bf-b96b-7c0ba947142b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel[]>(url, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.BehaviorReplaceModel} behaviorData
    * @param {string} processId
    * @param {string} behaviorId
    */
    public async replaceBehavior(
        behaviorData: WorkItemTrackingProcessDefinitionsInterfaces.BehaviorReplaceModel,
        processId: string,
        behaviorId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                behaviorId: behaviorId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "47a651f4-fb70-43bf-b96b-7c0ba947142b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>;
                res = await this.rest.replace<WorkItemTrackingProcessDefinitionsInterfaces.BehaviorModel>(url, behaviorData, options);

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
    * Creates a control, giving it an id, and adds it to the group. So far, the only controls that don't know how to generate their own ids are control extensions.
    * 
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.Control} control
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} groupId
    */
    public async addControlToGroup(
        control: WorkItemTrackingProcessDefinitionsInterfaces.Control,
        processId: string,
        witRefName: string,
        groupId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Control> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.Control>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                groupId: groupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "e2e3166a-627a-4e9b-85b2-d6a097bbd731",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.Control>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.Control>(url, control, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.Control} control
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} groupId
    * @param {string} controlId
    */
    public async editControl(
        control: WorkItemTrackingProcessDefinitionsInterfaces.Control,
        processId: string,
        witRefName: string,
        groupId: string,
        controlId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Control> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.Control>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                groupId: groupId,
                controlId: controlId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "e2e3166a-627a-4e9b-85b2-d6a097bbd731",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.Control>;
                res = await this.rest.update<WorkItemTrackingProcessDefinitionsInterfaces.Control>(url, control, options);

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
    * @param {string} witRefName
    * @param {string} groupId
    * @param {string} controlId
    */
    public async removeControlFromGroup(
        processId: string,
        witRefName: string,
        groupId: string,
        controlId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                groupId: groupId,
                controlId: controlId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "e2e3166a-627a-4e9b-85b2-d6a097bbd731",
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
    * Puts a control withan id into a group. Controls backed by fields can generate their own id.
    * 
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.Control} control
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} groupId
    * @param {string} controlId
    * @param {string} removeFromGroupId
    */
    public async setControlInGroup(
        control: WorkItemTrackingProcessDefinitionsInterfaces.Control,
        processId: string,
        witRefName: string,
        groupId: string,
        controlId: string,
        removeFromGroupId?: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Control> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.Control>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                groupId: groupId,
                controlId: controlId
            };

            let queryValues: any = {
                removeFromGroupId: removeFromGroupId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "e2e3166a-627a-4e9b-85b2-d6a097bbd731",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.Control>;
                res = await this.rest.replace<WorkItemTrackingProcessDefinitionsInterfaces.Control>(url, control, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.FieldModel} field
    * @param {string} processId
    */
    public async createField(
        field: WorkItemTrackingProcessDefinitionsInterfaces.FieldModel,
        processId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "f36c66c7-911d-4163-8938-d3c5d0d7f5aa",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel>(url, field, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.FieldModel,
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
    * @param {string} field
    */
    public async deleteField(
        processId: string,
        field: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                field: field
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "f36c66c7-911d-4163-8938-d3c5d0d7f5aa",
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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.FieldUpdate} field
    * @param {string} processId
    */
    public async updateField(
        field: WorkItemTrackingProcessDefinitionsInterfaces.FieldUpdate,
        processId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "f36c66c7-911d-4163-8938-d3c5d0d7f5aa",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel>;
                res = await this.rest.update<WorkItemTrackingProcessDefinitionsInterfaces.FieldModel>(url, field, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.FieldModel,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.Group} group
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} pageId
    * @param {string} sectionId
    */
    public async addGroup(
        group: WorkItemTrackingProcessDefinitionsInterfaces.Group,
        processId: string,
        witRefName: string,
        pageId: string,
        sectionId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                pageId: pageId,
                sectionId: sectionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "2617828b-e850-4375-a92a-04855704d4c3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.Group>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.Group>(url, group, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.Group} group
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} pageId
    * @param {string} sectionId
    * @param {string} groupId
    */
    public async editGroup(
        group: WorkItemTrackingProcessDefinitionsInterfaces.Group,
        processId: string,
        witRefName: string,
        pageId: string,
        sectionId: string,
        groupId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                pageId: pageId,
                sectionId: sectionId,
                groupId: groupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "2617828b-e850-4375-a92a-04855704d4c3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.Group>;
                res = await this.rest.update<WorkItemTrackingProcessDefinitionsInterfaces.Group>(url, group, options);

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
    * @param {string} witRefName
    * @param {string} pageId
    * @param {string} sectionId
    * @param {string} groupId
    */
    public async removeGroup(
        processId: string,
        witRefName: string,
        pageId: string,
        sectionId: string,
        groupId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                pageId: pageId,
                sectionId: sectionId,
                groupId: groupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "2617828b-e850-4375-a92a-04855704d4c3",
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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.Group} group
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} pageId
    * @param {string} sectionId
    * @param {string} groupId
    * @param {string} removeFromPageId
    * @param {string} removeFromSectionId
    */
    public async setGroupInPage(
        group: WorkItemTrackingProcessDefinitionsInterfaces.Group,
        processId: string,
        witRefName: string,
        pageId: string,
        sectionId: string,
        groupId: string,
        removeFromPageId: string,
        removeFromSectionId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                pageId: pageId,
                sectionId: sectionId,
                groupId: groupId
            };

            let queryValues: any = {
                removeFromPageId: removeFromPageId,
                removeFromSectionId: removeFromSectionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "2617828b-e850-4375-a92a-04855704d4c3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.Group>;
                res = await this.rest.replace<WorkItemTrackingProcessDefinitionsInterfaces.Group>(url, group, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.Group} group
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} pageId
    * @param {string} sectionId
    * @param {string} groupId
    * @param {string} removeFromSectionId
    */
    public async setGroupInSection(
        group: WorkItemTrackingProcessDefinitionsInterfaces.Group,
        processId: string,
        witRefName: string,
        pageId: string,
        sectionId: string,
        groupId: string,
        removeFromSectionId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.Group>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                pageId: pageId,
                sectionId: sectionId,
                groupId: groupId
            };

            let queryValues: any = {
                removeFromSectionId: removeFromSectionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "2617828b-e850-4375-a92a-04855704d4c3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.Group>;
                res = await this.rest.replace<WorkItemTrackingProcessDefinitionsInterfaces.Group>(url, group, options);

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
    * @param {string} witRefName
    */
    public async getFormLayout(
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FormLayout> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.FormLayout>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "3eacc80a-ddca-4404-857a-6331aac99063",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.FormLayout>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.FormLayout>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.FormLayout,
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
    public async getListsMetadata(
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListMetadataModel[]> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListMetadataModel[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "b45cc931-98e3-44a1-b1cd-2e8e9c6dc1c6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.PickListMetadataModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.PickListMetadataModel[]>(url, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.PickListModel} picklist
    */
    public async createList(
        picklist: WorkItemTrackingProcessDefinitionsInterfaces.PickListModel
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "0b6179e2-23ce-46b2-b094-2ffa5ee70286",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>(url, picklist, options);

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
    * @param {string} listId
    */
    public async deleteList(
        listId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                listId: listId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "0b6179e2-23ce-46b2-b094-2ffa5ee70286",
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
    * @param {string} listId
    */
    public async getList(
        listId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>(async (resolve, reject) => {
            let routeValues: any = {
                listId: listId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "0b6179e2-23ce-46b2-b094-2ffa5ee70286",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>(url, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.PickListModel} picklist
    * @param {string} listId
    */
    public async updateList(
        picklist: WorkItemTrackingProcessDefinitionsInterfaces.PickListModel,
        listId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>(async (resolve, reject) => {
            let routeValues: any = {
                listId: listId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "0b6179e2-23ce-46b2-b094-2ffa5ee70286",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>;
                res = await this.rest.replace<WorkItemTrackingProcessDefinitionsInterfaces.PickListModel>(url, picklist, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.Page} page
    * @param {string} processId
    * @param {string} witRefName
    */
    public async addPage(
        page: WorkItemTrackingProcessDefinitionsInterfaces.Page,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Page> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.Page>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "1b4ac126-59b2-4f37-b4df-0a48ba807edb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.Page>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.Page>(url, page, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.Page,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.Page} page
    * @param {string} processId
    * @param {string} witRefName
    */
    public async editPage(
        page: WorkItemTrackingProcessDefinitionsInterfaces.Page,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.Page> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.Page>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "1b4ac126-59b2-4f37-b4df-0a48ba807edb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.Page>;
                res = await this.rest.update<WorkItemTrackingProcessDefinitionsInterfaces.Page>(url, page, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.Page,
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
    * @param {string} pageId
    */
    public async removePage(
        processId: string,
        witRefName: string,
        pageId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                pageId: pageId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "1b4ac126-59b2-4f37-b4df-0a48ba807edb",
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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateInputModel} stateModel
    * @param {string} processId
    * @param {string} witRefName
    */
    public async createStateDefinition(
        stateModel: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateInputModel,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "4303625d-08f4-4461-b14b-32c65bba5599",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>(url, stateModel, options);

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
    * @param {string} witRefName
    * @param {string} stateId
    */
    public async deleteStateDefinition(
        processId: string,
        witRefName: string,
        stateId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                stateId: stateId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "4303625d-08f4-4461-b14b-32c65bba5599",
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
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} stateId
    */
    public async getStateDefinition(
        processId: string,
        witRefName: string,
        stateId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                stateId: stateId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "4303625d-08f4-4461-b14b-32c65bba5599",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>(url, options);

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
    * @param {string} witRefName
    */
    public async getStateDefinitions(
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel[]> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "4303625d-08f4-4461-b14b-32c65bba5599",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel[]>(url, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.HideStateModel} hideStateModel
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} stateId
    */
    public async hideStateDefinition(
        hideStateModel: WorkItemTrackingProcessDefinitionsInterfaces.HideStateModel,
        processId: string,
        witRefName: string,
        stateId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                stateId: stateId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "4303625d-08f4-4461-b14b-32c65bba5599",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>;
                res = await this.rest.replace<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>(url, hideStateModel, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateInputModel} stateModel
    * @param {string} processId
    * @param {string} witRefName
    * @param {string} stateId
    */
    public async updateStateDefinition(
        stateModel: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateInputModel,
        processId: string,
        witRefName: string,
        stateId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                stateId: stateId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "4303625d-08f4-4461-b14b-32c65bba5599",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>;
                res = await this.rest.update<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateResultModel>(url, stateModel, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior} behavior
    * @param {string} processId
    * @param {string} witRefNameForBehaviors
    */
    public async addBehaviorToWorkItemType(
        behavior: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior,
        processId: string,
        witRefNameForBehaviors: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForBehaviors: witRefNameForBehaviors
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "921dfb88-ef57-4c69-94e5-dd7da2d7031d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>(url, behavior, options);

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
    * @param {string} witRefNameForBehaviors
    * @param {string} behaviorRefName
    */
    public async getBehaviorForWorkItemType(
        processId: string,
        witRefNameForBehaviors: string,
        behaviorRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForBehaviors: witRefNameForBehaviors,
                behaviorRefName: behaviorRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "921dfb88-ef57-4c69-94e5-dd7da2d7031d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>(url, options);

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
    * @param {string} witRefNameForBehaviors
    */
    public async getBehaviorsForWorkItemType(
        processId: string,
        witRefNameForBehaviors: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior[]> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForBehaviors: witRefNameForBehaviors
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "921dfb88-ef57-4c69-94e5-dd7da2d7031d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior[]>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior[]>(url, options);

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
    * @param {string} witRefNameForBehaviors
    * @param {string} behaviorRefName
    */
    public async removeBehaviorFromWorkItemType(
        processId: string,
        witRefNameForBehaviors: string,
        behaviorRefName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForBehaviors: witRefNameForBehaviors,
                behaviorRefName: behaviorRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "921dfb88-ef57-4c69-94e5-dd7da2d7031d",
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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior} behavior
    * @param {string} processId
    * @param {string} witRefNameForBehaviors
    */
    public async updateBehaviorToWorkItemType(
        behavior: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior,
        processId: string,
        witRefNameForBehaviors: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForBehaviors: witRefNameForBehaviors
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "921dfb88-ef57-4c69-94e5-dd7da2d7031d",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>;
                res = await this.rest.update<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior>(url, behavior, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel} field
    * @param {string} processId
    * @param {string} witRefName
    */
    public async addWorkItemTypeField(
        field: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "afd8a636-9883-4427-895d-7b7cafecde50",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>(url, field, options);

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
    * @param {string} witRefName
    * @param {string} field
    */
    public async removeWorkItemTypeField(
        processId: string,
        witRefName: string,
        field: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                field: field
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "afd8a636-9883-4427-895d-7b7cafecde50",
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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel} fieldRule
    * @param {string} processId
    * @param {string} witRefNameForRules
    * @param {string} fieldRefName
    */
    public async addWorkItemTypeFieldRule(
        fieldRule: WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel,
        processId: string,
        witRefNameForRules: string,
        fieldRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForRules: witRefNameForRules,
                fieldRefName: fieldRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "8b13e121-0af4-41f5-91d2-91af48e55f81",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>(url, fieldRule, options);

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
    * @param {string} witRefNameForRules
    * @param {string} fieldRefName
    * @param {string} ruleId
    */
    public async deleteWorkItemTypeFieldRule(
        processId: string,
        witRefNameForRules: string,
        fieldRefName: string,
        ruleId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForRules: witRefNameForRules,
                fieldRefName: fieldRefName,
                ruleId: ruleId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "8b13e121-0af4-41f5-91d2-91af48e55f81",
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
    * @param {string} processId
    * @param {string} witRefNameForRules
    * @param {string} fieldRefName
    * @param {string} ruleId
    */
    public async getWorkItemTypeFieldRule(
        processId: string,
        witRefNameForRules: string,
        fieldRefName: string,
        ruleId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForRules: witRefNameForRules,
                fieldRefName: fieldRefName,
                ruleId: ruleId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "8b13e121-0af4-41f5-91d2-91af48e55f81",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>(url, options);

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
    * @param {string} witRefNameForRules
    * @param {string} fieldRefName
    */
    public async getWorkItemTypeFieldRules(
        processId: string,
        witRefNameForRules: string,
        fieldRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel[]> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForRules: witRefNameForRules,
                fieldRefName: fieldRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "8b13e121-0af4-41f5-91d2-91af48e55f81",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel[]>(url, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel} fieldRule
    * @param {string} processId
    * @param {string} witRefNameForRules
    * @param {string} fieldRefName
    * @param {string} ruleId
    */
    public async updateWorkItemTypeFieldRule(
        fieldRule: WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel,
        processId: string,
        witRefNameForRules: string,
        fieldRefName: string,
        ruleId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForRules: witRefNameForRules,
                fieldRefName: fieldRefName,
                ruleId: ruleId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "8b13e121-0af4-41f5-91d2-91af48e55f81",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>;
                res = await this.rest.replace<WorkItemTrackingProcessDefinitionsInterfaces.FieldRuleModel>(url, fieldRule, options);

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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel} workitemType
    * @param {string} processId
    */
    public async createWorkItemType(
        workitemType: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel,
        processId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "1ce0acad-4638-49c3-969c-04aa65ba6bea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>(url, workitemType, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.WorkItemTypeModel,
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
    */
    public async deleteWorkItemType(
        processId: string,
        witRefName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "1ce0acad-4638-49c3-969c-04aa65ba6bea",
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
    * @param {string} processId
    * @param {string} witRefName
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.GetWorkItemTypeExpand} expand
    */
    public async getWorkItemType(
        processId: string,
        witRefName: string,
        expand?: WorkItemTrackingProcessDefinitionsInterfaces.GetWorkItemTypeExpand
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>(async (resolve, reject) => {
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
                    "processDefinitions",
                    "1ce0acad-4638-49c3-969c-04aa65ba6bea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.WorkItemTypeModel,
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
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.GetWorkItemTypeExpand} expand
    */
    public async getWorkItemTypes(
        processId: string,
        expand?: WorkItemTrackingProcessDefinitionsInterfaces.GetWorkItemTypeExpand
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel[]> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "1ce0acad-4638-49c3-969c-04aa65ba6bea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.WorkItemTypeModel,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeUpdateModel} workitemTypeUpdate
    * @param {string} processId
    * @param {string} witRefName
    */
    public async updateWorkItemType(
        workitemTypeUpdate: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeUpdateModel,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "1ce0acad-4638-49c3-969c-04aa65ba6bea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
                res = await this.rest.update<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>(url, workitemTypeUpdate, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.WorkItemTypeModel,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel} field
    * @param {string} processId
    * @param {string} witRefNameForFields
    */
    public async addFieldToWorkItemType(
        field: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel,
        processId: string,
        witRefNameForFields: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForFields: witRefNameForFields
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "976713b4-a62e-499e-94dc-eeb869ea9126",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>(url, field, options);

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
    * @param {string} witRefNameForFields
    * @param {string} fieldRefName
    */
    public async getWorkItemTypeField(
        processId: string,
        witRefNameForFields: string,
        fieldRefName: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForFields: witRefNameForFields,
                fieldRefName: fieldRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "976713b4-a62e-499e-94dc-eeb869ea9126",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>(url, options);

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
    * @param {string} witRefNameForFields
    */
    public async getWorkItemTypeFields(
        processId: string,
        witRefNameForFields: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel[]> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForFields: witRefNameForFields
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "976713b4-a62e-499e-94dc-eeb869ea9126",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel[]>(url, options);

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
    * @param {string} witRefNameForFields
    * @param {string} fieldRefName
    */
    public async removeFieldFromWorkItemType(
        processId: string,
        witRefNameForFields: string,
        fieldRefName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForFields: witRefNameForFields,
                fieldRefName: fieldRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "processDefinitions",
                    "976713b4-a62e-499e-94dc-eeb869ea9126",
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

}
