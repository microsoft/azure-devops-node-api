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
import WorkItemTrackingProcessInterfaces = require("./interfaces/WorkItemTrackingProcessInterfaces");

export interface IWorkItemTrackingProcessApi extends basem.ClientApiBase {
    createProcessBehavior(behavior: WorkItemTrackingProcessInterfaces.ProcessBehaviorCreateRequest, processId: string): Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior>;
    deleteProcessBehavior(processId: string, behaviorRefName: string): Promise<void>;
    getProcessBehavior(processId: string, behaviorRefName: string, expand?: WorkItemTrackingProcessInterfaces.GetBehaviorsExpand): Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior>;
    getProcessBehaviors(processId: string, expand?: WorkItemTrackingProcessInterfaces.GetBehaviorsExpand): Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior[]>;
    updateProcessBehavior(behaviorData: WorkItemTrackingProcessInterfaces.ProcessBehaviorUpdateRequest, processId: string, behaviorRefName: string): Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior>;
    createControlInGroup(control: WorkItemTrackingProcessInterfaces.Control, processId: string, witRefName: string, groupId: string): Promise<WorkItemTrackingProcessInterfaces.Control>;
    moveControlToGroup(control: WorkItemTrackingProcessInterfaces.Control, processId: string, witRefName: string, groupId: string, controlId: string, removeFromGroupId?: string): Promise<WorkItemTrackingProcessInterfaces.Control>;
    removeControlFromGroup(processId: string, witRefName: string, groupId: string, controlId: string): Promise<void>;
    updateControl(control: WorkItemTrackingProcessInterfaces.Control, processId: string, witRefName: string, groupId: string, controlId: string): Promise<WorkItemTrackingProcessInterfaces.Control>;
    addFieldToWorkItemType(field: WorkItemTrackingProcessInterfaces.AddProcessWorkItemTypeFieldRequest, processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>;
    getAllWorkItemTypeFields(processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField[]>;
    getWorkItemTypeField(processId: string, witRefName: string, fieldRefName: string, expand?: WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeFieldsExpandLevel): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>;
    removeWorkItemTypeField(processId: string, witRefName: string, fieldRefName: string): Promise<void>;
    updateWorkItemTypeField(field: WorkItemTrackingProcessInterfaces.UpdateProcessWorkItemTypeFieldRequest, processId: string, witRefName: string, fieldRefName: string): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>;
    addGroup(group: WorkItemTrackingProcessInterfaces.Group, processId: string, witRefName: string, pageId: string, sectionId: string): Promise<WorkItemTrackingProcessInterfaces.Group>;
    moveGroupToPage(group: WorkItemTrackingProcessInterfaces.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string, removeFromPageId: string, removeFromSectionId: string): Promise<WorkItemTrackingProcessInterfaces.Group>;
    moveGroupToSection(group: WorkItemTrackingProcessInterfaces.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string, removeFromSectionId: string): Promise<WorkItemTrackingProcessInterfaces.Group>;
    removeGroup(processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string): Promise<void>;
    updateGroup(group: WorkItemTrackingProcessInterfaces.Group, processId: string, witRefName: string, pageId: string, sectionId: string, groupId: string): Promise<WorkItemTrackingProcessInterfaces.Group>;
    getFormLayout(processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.FormLayout>;
    createList(picklist: WorkItemTrackingProcessInterfaces.PickList): Promise<WorkItemTrackingProcessInterfaces.PickList>;
    deleteList(listId: string): Promise<void>;
    getList(listId: string): Promise<WorkItemTrackingProcessInterfaces.PickList>;
    getListsMetadata(): Promise<WorkItemTrackingProcessInterfaces.PickListMetadata[]>;
    updateList(picklist: WorkItemTrackingProcessInterfaces.PickList, listId: string): Promise<WorkItemTrackingProcessInterfaces.PickList>;
    addPage(page: WorkItemTrackingProcessInterfaces.Page, processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.Page>;
    removePage(processId: string, witRefName: string, pageId: string): Promise<void>;
    updatePage(page: WorkItemTrackingProcessInterfaces.Page, processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.Page>;
    createNewProcess(createRequest: WorkItemTrackingProcessInterfaces.CreateProcessModel): Promise<WorkItemTrackingProcessInterfaces.ProcessInfo>;
    deleteProcessById(processTypeId: string): Promise<void>;
    editProcess(updateRequest: WorkItemTrackingProcessInterfaces.UpdateProcessModel, processTypeId: string): Promise<WorkItemTrackingProcessInterfaces.ProcessInfo>;
    getListOfProcesses(expand?: WorkItemTrackingProcessInterfaces.GetProcessExpandLevel): Promise<WorkItemTrackingProcessInterfaces.ProcessInfo[]>;
    getProcessByItsId(processTypeId: string, expand?: WorkItemTrackingProcessInterfaces.GetProcessExpandLevel): Promise<WorkItemTrackingProcessInterfaces.ProcessInfo>;
    addProcessWorkItemTypeRule(processRuleCreate: WorkItemTrackingProcessInterfaces.CreateProcessRuleRequest, processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.ProcessRule>;
    deleteProcessWorkItemTypeRule(processId: string, witRefName: string, ruleId: string): Promise<void>;
    getProcessWorkItemTypeRule(processId: string, witRefName: string, ruleId: string): Promise<WorkItemTrackingProcessInterfaces.ProcessRule>;
    getProcessWorkItemTypeRules(processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.ProcessRule[]>;
    updateProcessWorkItemTypeRule(processRule: WorkItemTrackingProcessInterfaces.UpdateProcessRuleRequest, processId: string, witRefName: string, ruleId: string): Promise<WorkItemTrackingProcessInterfaces.ProcessRule>;
    createStateDefinition(stateModel: WorkItemTrackingProcessInterfaces.WorkItemStateInputModel, processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
    deleteStateDefinition(processId: string, witRefName: string, stateId: string): Promise<void>;
    getStateDefinition(processId: string, witRefName: string, stateId: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
    getStateDefinitions(processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel[]>;
    hideStateDefinition(hideStateModel: WorkItemTrackingProcessInterfaces.HideStateModel, processId: string, witRefName: string, stateId: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
    updateStateDefinition(stateModel: WorkItemTrackingProcessInterfaces.WorkItemStateInputModel, processId: string, witRefName: string, stateId: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
    deleteSystemControl(processId: string, witRefName: string, controlId: string): Promise<WorkItemTrackingProcessInterfaces.Control[]>;
    getSystemControls(processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.Control[]>;
    updateSystemControl(control: WorkItemTrackingProcessInterfaces.Control, processId: string, witRefName: string, controlId: string): Promise<WorkItemTrackingProcessInterfaces.Control>;
    createProcessWorkItemType(workItemType: WorkItemTrackingProcessInterfaces.CreateProcessWorkItemTypeRequest, processId: string): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>;
    deleteProcessWorkItemType(processId: string, witRefName: string): Promise<void>;
    getProcessWorkItemType(processId: string, witRefName: string, expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>;
    getProcessWorkItemTypes(processId: string, expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType[]>;
    updateProcessWorkItemType(workItemTypeUpdate: WorkItemTrackingProcessInterfaces.UpdateProcessWorkItemTypeRequest, processId: string, witRefName: string): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>;
    addBehaviorToWorkItemType(behavior: WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior, processId: string, witRefNameForBehaviors: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>;
    getBehaviorForWorkItemType(processId: string, witRefNameForBehaviors: string, behaviorRefName: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>;
    getBehaviorsForWorkItemType(processId: string, witRefNameForBehaviors: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior[]>;
    removeBehaviorFromWorkItemType(processId: string, witRefNameForBehaviors: string, behaviorRefName: string): Promise<void>;
    updateBehaviorToWorkItemType(behavior: WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior, processId: string, witRefNameForBehaviors: string): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>;
}

export class WorkItemTrackingProcessApi extends basem.ClientApiBase implements IWorkItemTrackingProcessApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-WorkItemTracking-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "5264459e-e5e0-4bd8-b118-0985e68a4ec5";

    /**
     * Creates a single behavior in the given process.
     * 
     * @param {WorkItemTrackingProcessInterfaces.ProcessBehaviorCreateRequest} behavior
     * @param {string} processId - The ID of the process
     */
    public async createProcessBehavior(
        behavior: WorkItemTrackingProcessInterfaces.ProcessBehaviorCreateRequest,
        processId: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "d1800200-f184-4e75-a5f2-ad0b04b4373e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessBehavior>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.ProcessBehavior>(url, behavior, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessBehavior,
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
     * @param {string} behaviorRefName - The reference name of the behavior
     */
    public async deleteProcessBehavior(
        processId: string,
        behaviorRefName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                behaviorRefName: behaviorRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "d1800200-f184-4e75-a5f2-ad0b04b4373e",
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
     * Returns a behavior of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} behaviorRefName - The reference name of the behavior
     * @param {WorkItemTrackingProcessInterfaces.GetBehaviorsExpand} expand
     */
    public async getProcessBehavior(
        processId: string,
        behaviorRefName: string,
        expand?: WorkItemTrackingProcessInterfaces.GetBehaviorsExpand
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                behaviorRefName: behaviorRefName
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "d1800200-f184-4e75-a5f2-ad0b04b4373e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessBehavior>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessBehavior>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessBehavior,
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
    public async getProcessBehaviors(
        processId: string,
        expand?: WorkItemTrackingProcessInterfaces.GetBehaviorsExpand
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "d1800200-f184-4e75-a5f2-ad0b04b4373e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessBehavior[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessBehavior[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessBehavior,
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
     * @param {WorkItemTrackingProcessInterfaces.ProcessBehaviorUpdateRequest} behaviorData
     * @param {string} processId - The ID of the process
     * @param {string} behaviorRefName - The reference name of the behavior
     */
    public async updateProcessBehavior(
        behaviorData: WorkItemTrackingProcessInterfaces.ProcessBehaviorUpdateRequest,
        processId: string,
        behaviorRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                behaviorRefName: behaviorRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "d1800200-f184-4e75-a5f2-ad0b04b4373e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessBehavior>;
                res = await this.rest.replace<WorkItemTrackingProcessInterfaces.ProcessBehavior>(url, behaviorData, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessBehavior,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Creates a control in a group.
     * 
     * @param {WorkItemTrackingProcessInterfaces.Control} control - The control.
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} groupId - The ID of the group to add the control to.
     */
    public async createControlInGroup(
        control: WorkItemTrackingProcessInterfaces.Control,
        processId: string,
        witRefName: string,
        groupId: string
        ): Promise<WorkItemTrackingProcessInterfaces.Control> {

        return new Promise<WorkItemTrackingProcessInterfaces.Control>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                groupId: groupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "1f59b363-a2d0-4b7e-9bc6-eb9f5f3f0e58",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Control>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.Control>(url, control, options);

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
     * Moves a control to a specified group.
     * 
     * @param {WorkItemTrackingProcessInterfaces.Control} control - The control.
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} groupId - The ID of the group to move the control to.
     * @param {string} controlId - The ID of the control.
     * @param {string} removeFromGroupId - The group ID to remove the control from.
     */
    public async moveControlToGroup(
        control: WorkItemTrackingProcessInterfaces.Control,
        processId: string,
        witRefName: string,
        groupId: string,
        controlId: string,
        removeFromGroupId?: string
        ): Promise<WorkItemTrackingProcessInterfaces.Control> {

        return new Promise<WorkItemTrackingProcessInterfaces.Control>(async (resolve, reject) => {
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
                    "7.1-preview.1",
                    "processes",
                    "1f59b363-a2d0-4b7e-9bc6-eb9f5f3f0e58",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Control>;
                res = await this.rest.replace<WorkItemTrackingProcessInterfaces.Control>(url, control, options);

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
     * Removes a control from the work item form.
     * 
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} groupId - The ID of the group.
     * @param {string} controlId - The ID of the control to remove.
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
                    "7.1-preview.1",
                    "processes",
                    "1f59b363-a2d0-4b7e-9bc6-eb9f5f3f0e58",
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
     * Updates a control on the work item form.
     * 
     * @param {WorkItemTrackingProcessInterfaces.Control} control - The updated control.
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} groupId - The ID of the group.
     * @param {string} controlId - The ID of the control.
     */
    public async updateControl(
        control: WorkItemTrackingProcessInterfaces.Control,
        processId: string,
        witRefName: string,
        groupId: string,
        controlId: string
        ): Promise<WorkItemTrackingProcessInterfaces.Control> {

        return new Promise<WorkItemTrackingProcessInterfaces.Control>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                groupId: groupId,
                controlId: controlId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "1f59b363-a2d0-4b7e-9bc6-eb9f5f3f0e58",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Control>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.Control>(url, control, options);

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
     * Adds a field to a work item type.
     * 
     * @param {WorkItemTrackingProcessInterfaces.AddProcessWorkItemTypeFieldRequest} field
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     */
    public async addFieldToWorkItemType(
        field: WorkItemTrackingProcessInterfaces.AddProcessWorkItemTypeFieldRequest,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "bc0ad8dc-e3f3-46b0-b06c-5bf861793196",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>(url, field, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessWorkItemTypeField,
                                              false);

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
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     */
    public async getAllWorkItemTypeFields(
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "bc0ad8dc-e3f3-46b0-b06c-5bf861793196",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessWorkItemTypeField,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a field in a work item type.
     * 
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} fieldRefName - The reference name of the field.
     * @param {WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeFieldsExpandLevel} expand
     */
    public async getWorkItemTypeField(
        processId: string,
        witRefName: string,
        fieldRefName: string,
        expand?: WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeFieldsExpandLevel
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                fieldRefName: fieldRefName
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "bc0ad8dc-e3f3-46b0-b06c-5bf861793196",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessWorkItemTypeField,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Removes a field from a work item type. Does not permanently delete the field.
     * 
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} fieldRefName - The reference name of the field.
     */
    public async removeWorkItemTypeField(
        processId: string,
        witRefName: string,
        fieldRefName: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                fieldRefName: fieldRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "bc0ad8dc-e3f3-46b0-b06c-5bf861793196",
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
     * Updates a field in a work item type.
     * 
     * @param {WorkItemTrackingProcessInterfaces.UpdateProcessWorkItemTypeFieldRequest} field
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} fieldRefName - The reference name of the field.
     */
    public async updateWorkItemTypeField(
        field: WorkItemTrackingProcessInterfaces.UpdateProcessWorkItemTypeFieldRequest,
        processId: string,
        witRefName: string,
        fieldRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                fieldRefName: fieldRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "bc0ad8dc-e3f3-46b0-b06c-5bf861793196",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.ProcessWorkItemTypeField>(url, field, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessWorkItemTypeField,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Adds a group to the work item form.
     * 
     * @param {WorkItemTrackingProcessInterfaces.Group} group - The group.
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} pageId - The ID of the page to add the group to.
     * @param {string} sectionId - The ID of the section to add the group to.
     */
    public async addGroup(
        group: WorkItemTrackingProcessInterfaces.Group,
        processId: string,
        witRefName: string,
        pageId: string,
        sectionId: string
        ): Promise<WorkItemTrackingProcessInterfaces.Group> {

        return new Promise<WorkItemTrackingProcessInterfaces.Group>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                pageId: pageId,
                sectionId: sectionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "766e44e1-36a8-41d7-9050-c343ff02f7a5",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Group>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.Group>(url, group, options);

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
     * Moves a group to a different page and section.
     * 
     * @param {WorkItemTrackingProcessInterfaces.Group} group - The updated group.
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} pageId - The ID of the page the group is in.
     * @param {string} sectionId - The ID of the section the group is i.n
     * @param {string} groupId - The ID of the group.
     * @param {string} removeFromPageId - ID of the page to remove the group from.
     * @param {string} removeFromSectionId - ID of the section to remove the group from.
     */
    public async moveGroupToPage(
        group: WorkItemTrackingProcessInterfaces.Group,
        processId: string,
        witRefName: string,
        pageId: string,
        sectionId: string,
        groupId: string,
        removeFromPageId: string,
        removeFromSectionId: string
        ): Promise<WorkItemTrackingProcessInterfaces.Group> {
        if (removeFromPageId == null) {
            throw new TypeError('removeFromPageId can not be null or undefined');
        }
        if (removeFromSectionId == null) {
            throw new TypeError('removeFromSectionId can not be null or undefined');
        }

        return new Promise<WorkItemTrackingProcessInterfaces.Group>(async (resolve, reject) => {
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
                    "7.1-preview.1",
                    "processes",
                    "766e44e1-36a8-41d7-9050-c343ff02f7a5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Group>;
                res = await this.rest.replace<WorkItemTrackingProcessInterfaces.Group>(url, group, options);

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
     * Moves a group to a different section.
     * 
     * @param {WorkItemTrackingProcessInterfaces.Group} group - The updated group.
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} pageId - The ID of the page the group is in.
     * @param {string} sectionId - The ID of the section the group is in.
     * @param {string} groupId - The ID of the group.
     * @param {string} removeFromSectionId - ID of the section to remove the group from.
     */
    public async moveGroupToSection(
        group: WorkItemTrackingProcessInterfaces.Group,
        processId: string,
        witRefName: string,
        pageId: string,
        sectionId: string,
        groupId: string,
        removeFromSectionId: string
        ): Promise<WorkItemTrackingProcessInterfaces.Group> {
        if (removeFromSectionId == null) {
            throw new TypeError('removeFromSectionId can not be null or undefined');
        }

        return new Promise<WorkItemTrackingProcessInterfaces.Group>(async (resolve, reject) => {
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
                    "7.1-preview.1",
                    "processes",
                    "766e44e1-36a8-41d7-9050-c343ff02f7a5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Group>;
                res = await this.rest.replace<WorkItemTrackingProcessInterfaces.Group>(url, group, options);

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
     * Removes a group from the work item form.
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
                    "7.1-preview.1",
                    "processes",
                    "766e44e1-36a8-41d7-9050-c343ff02f7a5",
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
     * Updates a group in the work item form.
     * 
     * @param {WorkItemTrackingProcessInterfaces.Group} group - The updated group.
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} pageId - The ID of the page the group is in.
     * @param {string} sectionId - The ID of the section the group is in.
     * @param {string} groupId - The ID of the group.
     */
    public async updateGroup(
        group: WorkItemTrackingProcessInterfaces.Group,
        processId: string,
        witRefName: string,
        pageId: string,
        sectionId: string,
        groupId: string
        ): Promise<WorkItemTrackingProcessInterfaces.Group> {

        return new Promise<WorkItemTrackingProcessInterfaces.Group>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                pageId: pageId,
                sectionId: sectionId,
                groupId: groupId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "766e44e1-36a8-41d7-9050-c343ff02f7a5",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Group>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.Group>(url, group, options);

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
     * Gets the form layout.
     * 
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     */
    public async getFormLayout(
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.FormLayout> {

        return new Promise<WorkItemTrackingProcessInterfaces.FormLayout>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "fa8646eb-43cd-4b71-9564-40106fd63e40",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.FormLayout>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.FormLayout>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.FormLayout,
                                              false);

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
     * @param {WorkItemTrackingProcessInterfaces.PickList} picklist - Picklist
     */
    public async createList(
        picklist: WorkItemTrackingProcessInterfaces.PickList
        ): Promise<WorkItemTrackingProcessInterfaces.PickList> {

        return new Promise<WorkItemTrackingProcessInterfaces.PickList>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "01e15468-e27c-4e20-a974-bd957dcccebc",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.PickList>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.PickList>(url, picklist, options);

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
                    "7.1-preview.1",
                    "processes",
                    "01e15468-e27c-4e20-a974-bd957dcccebc",
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
     * Returns a picklist.
     * 
     * @param {string} listId - The ID of the list
     */
    public async getList(
        listId: string
        ): Promise<WorkItemTrackingProcessInterfaces.PickList> {

        return new Promise<WorkItemTrackingProcessInterfaces.PickList>(async (resolve, reject) => {
            let routeValues: any = {
                listId: listId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "01e15468-e27c-4e20-a974-bd957dcccebc",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.PickList>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.PickList>(url, options);

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
     * Returns meta data of the picklist.
     * 
     */
    public async getListsMetadata(
        ): Promise<WorkItemTrackingProcessInterfaces.PickListMetadata[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.PickListMetadata[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "01e15468-e27c-4e20-a974-bd957dcccebc",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.PickListMetadata[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.PickListMetadata[]>(url, options);

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
     * Updates a list.
     * 
     * @param {WorkItemTrackingProcessInterfaces.PickList} picklist
     * @param {string} listId - The ID of the list
     */
    public async updateList(
        picklist: WorkItemTrackingProcessInterfaces.PickList,
        listId: string
        ): Promise<WorkItemTrackingProcessInterfaces.PickList> {

        return new Promise<WorkItemTrackingProcessInterfaces.PickList>(async (resolve, reject) => {
            let routeValues: any = {
                listId: listId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "01e15468-e27c-4e20-a974-bd957dcccebc",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.PickList>;
                res = await this.rest.replace<WorkItemTrackingProcessInterfaces.PickList>(url, picklist, options);

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
     * Adds a page to the work item form.
     * 
     * @param {WorkItemTrackingProcessInterfaces.Page} page - The page.
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     */
    public async addPage(
        page: WorkItemTrackingProcessInterfaces.Page,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.Page> {

        return new Promise<WorkItemTrackingProcessInterfaces.Page>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "1cc7b29f-6697-4d9d-b0a1-2650d3e1d584",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Page>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.Page>(url, page, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.Page,
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
                    "7.1-preview.1",
                    "processes",
                    "1cc7b29f-6697-4d9d-b0a1-2650d3e1d584",
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
     * Updates a page on the work item form
     * 
     * @param {WorkItemTrackingProcessInterfaces.Page} page - The page
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     */
    public async updatePage(
        page: WorkItemTrackingProcessInterfaces.Page,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.Page> {

        return new Promise<WorkItemTrackingProcessInterfaces.Page>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "1cc7b29f-6697-4d9d-b0a1-2650d3e1d584",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Page>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.Page>(url, page, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.Page,
                                              false);

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
     * @param {WorkItemTrackingProcessInterfaces.CreateProcessModel} createRequest - CreateProcessModel.
     */
    public async createNewProcess(
        createRequest: WorkItemTrackingProcessInterfaces.CreateProcessModel
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessInfo> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessInfo>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessInfo>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.ProcessInfo>(url, createRequest, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessInfo,
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
    public async deleteProcessById(
        processTypeId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                processTypeId: processTypeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
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
     * Edit a process of a specific ID.
     * 
     * @param {WorkItemTrackingProcessInterfaces.UpdateProcessModel} updateRequest
     * @param {string} processTypeId
     */
    public async editProcess(
        updateRequest: WorkItemTrackingProcessInterfaces.UpdateProcessModel,
        processTypeId: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessInfo> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessInfo>(async (resolve, reject) => {
            let routeValues: any = {
                processTypeId: processTypeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessInfo>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.ProcessInfo>(url, updateRequest, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessInfo,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get list of all processes including system and inherited.
     * 
     * @param {WorkItemTrackingProcessInterfaces.GetProcessExpandLevel} expand
     */
    public async getListOfProcesses(
        expand?: WorkItemTrackingProcessInterfaces.GetProcessExpandLevel
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessInfo[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessInfo[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessInfo[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessInfo[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessInfo,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a single process of a specified ID.
     * 
     * @param {string} processTypeId
     * @param {WorkItemTrackingProcessInterfaces.GetProcessExpandLevel} expand
     */
    public async getProcessByItsId(
        processTypeId: string,
        expand?: WorkItemTrackingProcessInterfaces.GetProcessExpandLevel
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessInfo> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessInfo>(async (resolve, reject) => {
            let routeValues: any = {
                processTypeId: processTypeId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "02cc6a73-5cfb-427d-8c8e-b49fb086e8af",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessInfo>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessInfo>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessInfo,
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
     * @param {WorkItemTrackingProcessInterfaces.CreateProcessRuleRequest} processRuleCreate
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     */
    public async addProcessWorkItemTypeRule(
        processRuleCreate: WorkItemTrackingProcessInterfaces.CreateProcessRuleRequest,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessRule> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessRule>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessRule>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.ProcessRule>(url, processRuleCreate, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessRule,
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
    public async deleteProcessWorkItemTypeRule(
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
                    "7.1-preview.2",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
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
     * Returns a single rule in the work item type of the process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} ruleId - The ID of the rule
     */
    public async getProcessWorkItemTypeRule(
        processId: string,
        witRefName: string,
        ruleId: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessRule> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessRule>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                ruleId: ruleId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessRule>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessRule>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessRule,
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
    public async getProcessWorkItemTypeRules(
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessRule[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessRule[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessRule[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessRule[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessRule,
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
     * @param {WorkItemTrackingProcessInterfaces.UpdateProcessRuleRequest} processRule
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} ruleId - The ID of the rule
     */
    public async updateProcessWorkItemTypeRule(
        processRule: WorkItemTrackingProcessInterfaces.UpdateProcessRuleRequest,
        processId: string,
        witRefName: string,
        ruleId: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessRule> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessRule>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                ruleId: ruleId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "76fe3432-d825-479d-a5f6-983bbb78b4f3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessRule>;
                res = await this.rest.replace<WorkItemTrackingProcessInterfaces.ProcessRule>(url, processRule, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessRule,
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
     * @param {WorkItemTrackingProcessInterfaces.WorkItemStateInputModel} stateModel
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     */
    public async createStateDefinition(
        stateModel: WorkItemTrackingProcessInterfaces.WorkItemStateInputModel,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "31015d57-2dff-4a46-adb3-2fb4ee3dcec9",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>(url, stateModel, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.WorkItemStateResultModel,
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
                    "7.1-preview.1",
                    "processes",
                    "31015d57-2dff-4a46-adb3-2fb4ee3dcec9",
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
                    "7.1-preview.1",
                    "processes",
                    "31015d57-2dff-4a46-adb3-2fb4ee3dcec9",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.WorkItemStateResultModel,
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
                    "7.1-preview.1",
                    "processes",
                    "31015d57-2dff-4a46-adb3-2fb4ee3dcec9",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.WorkItemStateResultModel,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Hides a state definition in the work item type of the process.Only states with customizationType:System can be hidden.
     * 
     * @param {WorkItemTrackingProcessInterfaces.HideStateModel} hideStateModel
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} stateId - The ID of the state
     */
    public async hideStateDefinition(
        hideStateModel: WorkItemTrackingProcessInterfaces.HideStateModel,
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
                    "7.1-preview.1",
                    "processes",
                    "31015d57-2dff-4a46-adb3-2fb4ee3dcec9",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
                res = await this.rest.replace<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>(url, hideStateModel, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.WorkItemStateResultModel,
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
     * @param {WorkItemTrackingProcessInterfaces.WorkItemStateInputModel} stateModel
     * @param {string} processId - ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {string} stateId - ID of the state
     */
    public async updateStateDefinition(
        stateModel: WorkItemTrackingProcessInterfaces.WorkItemStateInputModel,
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
                    "7.1-preview.1",
                    "processes",
                    "31015d57-2dff-4a46-adb3-2fb4ee3dcec9",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.WorkItemStateResultModel>(url, stateModel, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.WorkItemStateResultModel,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Deletes a system control modification on the work item form.
     * 
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} controlId - The ID of the control.
     */
    public async deleteSystemControl(
        processId: string,
        witRefName: string,
        controlId: string
        ): Promise<WorkItemTrackingProcessInterfaces.Control[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.Control[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                controlId: controlId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "ff9a3d2c-32b7-4c6c-991c-d5a251fb9098",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Control[]>;
                res = await this.rest.del<WorkItemTrackingProcessInterfaces.Control[]>(url, options);

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
     * Gets edited system controls for a work item type in a process. To get all system controls (base + edited) use layout API(s)
     * 
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     */
    public async getSystemControls(
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.Control[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.Control[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "ff9a3d2c-32b7-4c6c-991c-d5a251fb9098",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Control[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.Control[]>(url, options);

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
     * Updates/adds a system control on the work item form.
     * 
     * @param {WorkItemTrackingProcessInterfaces.Control} control
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     * @param {string} controlId - The ID of the control.
     */
    public async updateSystemControl(
        control: WorkItemTrackingProcessInterfaces.Control,
        processId: string,
        witRefName: string,
        controlId: string
        ): Promise<WorkItemTrackingProcessInterfaces.Control> {

        return new Promise<WorkItemTrackingProcessInterfaces.Control>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName,
                controlId: controlId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "ff9a3d2c-32b7-4c6c-991c-d5a251fb9098",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.Control>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.Control>(url, control, options);

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
     * @param {WorkItemTrackingProcessInterfaces.CreateProcessWorkItemTypeRequest} workItemType
     * @param {string} processId - The ID of the process on which to create work item type.
     */
    public async createProcessWorkItemType(
        workItemType: WorkItemTrackingProcessInterfaces.CreateProcessWorkItemTypeRequest,
        processId: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "e2e9d1a6-432d-4062-8870-bfcb8c324ad7",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>(url, workItemType, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessWorkItemType,
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
     * @param {string} processId - The ID of the process.
     * @param {string} witRefName - The reference name of the work item type.
     */
    public async deleteProcessWorkItemType(
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
                    "7.1-preview.2",
                    "processes",
                    "e2e9d1a6-432d-4062-8870-bfcb8c324ad7",
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
     * Returns a single work item type in a process.
     * 
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     * @param {WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand} expand - Flag to determine what properties of work item type to return
     */
    public async getProcessWorkItemType(
        processId: string,
        witRefName: string,
        expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "e2e9d1a6-432d-4062-8870-bfcb8c324ad7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessWorkItemType,
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
     * @param {WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand} expand - Flag to determine what properties of work item type to return
     */
    public async getProcessWorkItemTypes(
        processId: string,
        expand?: WorkItemTrackingProcessInterfaces.GetWorkItemTypeExpand
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "e2e9d1a6-432d-4062-8870-bfcb8c324ad7",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessWorkItemType[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.ProcessWorkItemType[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessWorkItemType,
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
     * @param {WorkItemTrackingProcessInterfaces.UpdateProcessWorkItemTypeRequest} workItemTypeUpdate
     * @param {string} processId - The ID of the process
     * @param {string} witRefName - The reference name of the work item type
     */
    public async updateProcessWorkItemType(
        workItemTypeUpdate: WorkItemTrackingProcessInterfaces.UpdateProcessWorkItemTypeRequest,
        processId: string,
        witRefName: string
        ): Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType> {

        return new Promise<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefName: witRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "processes",
                    "e2e9d1a6-432d-4062-8870-bfcb8c324ad7",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.ProcessWorkItemType>(url, workItemTypeUpdate, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingProcessInterfaces.TypeInfo.ProcessWorkItemType,
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
     * @param {WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior} behavior
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForBehaviors - Work item type reference name for the behavior
     */
    public async addBehaviorToWorkItemType(
        behavior: WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior,
        processId: string,
        witRefNameForBehaviors: string
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForBehaviors: witRefNameForBehaviors
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "6d765a2e-4e1b-4b11-be93-f953be676024",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>;
                res = await this.rest.create<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>(url, behavior, options);

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
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForBehaviors: witRefNameForBehaviors,
                behaviorRefName: behaviorRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "6d765a2e-4e1b-4b11-be93-f953be676024",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>(url, options);

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
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior[]> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior[]>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForBehaviors: witRefNameForBehaviors
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "6d765a2e-4e1b-4b11-be93-f953be676024",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior[]>;
                res = await this.rest.get<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior[]>(url, options);

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
                    "7.1-preview.1",
                    "processes",
                    "6d765a2e-4e1b-4b11-be93-f953be676024",
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
     * Updates a behavior for the work item type of the process.
     * 
     * @param {WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior} behavior
     * @param {string} processId - The ID of the process
     * @param {string} witRefNameForBehaviors - Work item type reference name for the behavior
     */
    public async updateBehaviorToWorkItemType(
        behavior: WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior,
        processId: string,
        witRefNameForBehaviors: string
        ): Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior> {

        return new Promise<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>(async (resolve, reject) => {
            let routeValues: any = {
                processId: processId,
                witRefNameForBehaviors: witRefNameForBehaviors
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "processes",
                    "6d765a2e-4e1b-4b11-be93-f953be676024",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>;
                res = await this.rest.update<WorkItemTrackingProcessInterfaces.WorkItemTypeBehavior>(url, behavior, options);

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
