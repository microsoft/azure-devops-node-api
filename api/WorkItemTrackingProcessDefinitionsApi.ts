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
    createWorkItemType(workItemType: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel, processId: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
    deleteWorkItemType(processId: string, witRefName: string): Promise<void>;
    getWorkItemType(processId: string, witRefName: string, expand?: WorkItemTrackingProcessDefinitionsInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
    getWorkItemTypes(processId: string, expand?: WorkItemTrackingProcessDefinitionsInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel[]>;
    updateWorkItemType(workItemTypeUpdate: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeUpdateModel, processId: string, witRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
    addFieldToWorkItemType(field: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel, processId: string, witRefNameForFields: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
    getWorkItemTypeField(processId: string, witRefNameForFields: string, fieldRefName: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
    getWorkItemTypeFields(processId: string, witRefNameForFields: string): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel[]>;
    removeFieldFromWorkItemType(processId: string, witRefNameForFields: string, fieldRefName: string): Promise<void>;
}

export class WorkItemTrackingApi extends basem.ClientApiBase implements IWorkItemTrackingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-WorkItemTracking-api', options);
    }

    /**
     * Creates a single behavior in the given process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.BehaviorCreateModel} behavior
     * @param {string} processId - The ID of the process
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
                    "4.1-preview.1",
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
     * Removes a behavior in the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} behaviorId - The ID of the behavior
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
                    "4.1-preview.1",
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
     * Returns a single behavior in the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} behaviorId - The ID of the behavior
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
                    "4.1-preview.1",
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
     * Returns a list of all behaviors in the process.
     * 
     * @param {string} processId - The ID of the process
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
                    "4.1-preview.1",
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
     * Replaces a behavior in the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.BehaviorReplaceModel} behaviorData
     * @param {string} processId - The ID of the process
     * @param {string} behaviorId - The ID of the behavior
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
                    "4.1-preview.1",
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
     * Creates a control in a group
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.Control} control - The control
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} groupId - The ID of the group to add the control to
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
                    "4.1-preview.1",
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
     * Updates a control on the work item form
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.Control} control - The updated control
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} groupId - The ID of the group
     * @param {string} controlId - The ID of the control
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
                    "4.1-preview.1",
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
     * Removes a control from the work item form
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} groupId - The ID of the group
     * @param {string} controlId - The ID of the control to remove
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
                    "4.1-preview.1",
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
     * Moves a control to a new group
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.Control} control - The control
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} groupId - The ID of the group to move the control to
     * @param {string} controlId - The id of the control
     * @param {string} removeFromGroupId - The group to remove the control from
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
                    "4.1-preview.1",
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
     * Creates a single field in the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.FieldModel} field
     * @param {string} processId - The ID of the process
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
                    "4.1-preview.1",
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
     * Updates a given field in the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.FieldUpdate} field
     * @param {string} processId - The ID of the process
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
                    "4.1-preview.1",
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
     * Adds a group to the work item form
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.Group} group - The group
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page to add the group to
     * @param {string} sectionId - The ID of the section to add the group to
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
                    "4.1-preview.1",
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
     * Updates a group in the work item form
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.Group} group - The updated group
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page the group is in
     * @param {string} sectionId - The ID of the section the group is in
     * @param {string} groupId - The ID of the group
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
                    "4.1-preview.1",
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
     * Removes a group from the work item form
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page the group is in
     * @param {string} sectionId - The ID of the section to the group is in
     * @param {string} groupId - The ID of the group
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
                    "4.1-preview.1",
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
     * Moves a group to a different page and section
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.Group} group - The updated group
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page the group is in
     * @param {string} sectionId - The ID of the section the group is in
     * @param {string} groupId - The ID of the group
     * @param {string} removeFromPageId - ID of the page to remove the group from
     * @param {string} removeFromSectionId - ID of the section to remove the group from
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
                    "4.1-preview.1",
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
     * Moves a group to a different section
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.Group} group - The updated group
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page the group is in
     * @param {string} sectionId - The ID of the section the group is in
     * @param {string} groupId - The ID of the group
     * @param {string} removeFromSectionId - ID of the section to remove the group from
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
                    "4.1-preview.1",
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
     * Gets the form layout
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
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
                    "4.1-preview.1",
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
     * Returns meta data of the picklist.
     * 
     */
    public async getListsMetadata(
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListMetadataModel[]> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.PickListMetadataModel[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
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
     * Creates a picklist.
     * 
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
                    "4.1-preview.1",
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
     * Removes a picklist.
     * 
     * @param {string} listId - The ID of the list
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
                    "4.1-preview.1",
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
     * Returns a picklist.
     * 
     * @param {string} listId - The ID of the list
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
                    "4.1-preview.1",
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
     * Updates a list.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.PickListModel} picklist
     * @param {string} listId - The ID of the list
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
                    "4.1-preview.1",
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
     * Adds a page to the work item form
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.Page} page - The page
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
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
                    "4.1-preview.1",
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
     * Updates a page on the work item form
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.Page} page - The page
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
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
                    "4.1-preview.1",
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
     * Removes a page from the work item form
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} pageId - The ID of the page
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
                    "4.1-preview.1",
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
     * Creates a state definition in the work item type of the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateInputModel} stateModel
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
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
                    "4.1-preview.1",
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
     * Removes a state definition in the work item type of the process.
     * 
     * @param {string} processId - ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} stateId - ID of the state
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
                    "4.1-preview.1",
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
     * Returns a state definition in the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} stateId - The ID of the state
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
                    "4.1-preview.1",
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
     * Returns a list of all state definitions in the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
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
                    "4.1-preview.1",
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
     * Hides a state definition in the work item type of the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.HideStateModel} hideStateModel
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} stateId - The ID of the state
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
                    "4.1-preview.1",
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
     * Updates a given state definition in the work item type of the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemStateInputModel} stateModel
     * @param {string} processId - ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} stateId - ID of the state
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
                    "4.1-preview.1",
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
     * Adds a behavior to the work item type of the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior} behavior
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForBehaviors - Work item type reference name for the behavior
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
                    "4.1-preview.1",
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
     * Returns a behavior for the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForBehaviors - Work item type reference name for the behavior
     * @param {string} behaviorRefName - The reference name of the behavior
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
                    "4.1-preview.1",
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
     * Returns a list of all behaviors for the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForBehaviors - Work item type reference name for the behavior
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
                    "4.1-preview.1",
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
     * Removes a behavior for the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForBehaviors - Work item type reference name for the behavior
     * @param {string} behaviorRefName - The reference name of the behavior
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
                    "4.1-preview.1",
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
     * Updates a behavior for the work item type of the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeBehavior} behavior
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForBehaviors - Work item type reference name for the behavior
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
                    "4.1-preview.1",
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
     * Creates a work item type in the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel} workItemType
     * @param {string} processId - The ID of the process
     */
    public async createWorkItemType(
        workItemType: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel,
        processId: string
        ): Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel> {

        return new Promise<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "processDefinitions",
                    "1ce0acad-4638-49c3-969c-04aa65ba6bea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>(url, workItemType, options);

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
     * Removes a work itewm type in the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
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
                    "4.1-preview.1",
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
     * Returns a work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
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
                    "4.1-preview.1",
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
     * Returns a list of all work item types in the process.
     * 
     * @param {string} processId - The ID of the process
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
                    "4.1-preview.1",
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
     * Updates a work item type of the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeUpdateModel} workItemTypeUpdate
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     */
    public async updateWorkItemType(
        workItemTypeUpdate: WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeUpdateModel,
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
                    "4.1-preview.1",
                    "processDefinitions",
                    "1ce0acad-4638-49c3-969c-04aa65ba6bea",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>;
                res = await this.rest.update<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeModel>(url, workItemTypeUpdate, options);

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
     * Adds a field to the work item type in the process.
     * 
     * @param {WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel} field
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForFields - Work item type reference name for the field
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
                    "4.1-preview.1",
                    "processDefinitions",
                    "976713b4-a62e-499e-94dc-eeb869ea9126",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
                res = await this.rest.create<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>(url, field, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.WorkItemTypeFieldModel,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retuens a single field in the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForFields - Work item type reference name for fields
     * @param {string} fieldRefName - The reference name of the field
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
                    "4.1-preview.1",
                    "processDefinitions",
                    "976713b4-a62e-499e-94dc-eeb869ea9126",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.WorkItemTypeFieldModel,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a list of all fields in the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForFields - Work item type reference name for fields
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
                    "4.1-preview.1",
                    "processDefinitions",
                    "976713b4-a62e-499e-94dc-eeb869ea9126",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessDefinitionsInterfaces.WorkItemTypeFieldModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessDefinitionsInterfaces.TypeInfo.WorkItemTypeFieldModel,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Removes a field in the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForFields - Work item type reference name for fields
     * @param {string} fieldRefName - The reference name of the field
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
                    "4.1-preview.1",
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
