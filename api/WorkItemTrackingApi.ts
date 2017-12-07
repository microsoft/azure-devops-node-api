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
import TfsCoreInterfaces = require("./interfaces/CoreInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
import WorkItemTrackingInterfaces = require("./interfaces/WorkItemTrackingInterfaces");

export interface IWorkItemTrackingApi extends basem.ClientApiBase {
    getAccountMyWorkData(queryOption?: WorkItemTrackingInterfaces.QueryOption): Promise<WorkItemTrackingInterfaces.AccountMyWorkResult>;
    getRecentActivityData(): Promise<WorkItemTrackingInterfaces.AccountRecentActivityWorkItemModel[]>;
    getRecentMentions(): Promise<WorkItemTrackingInterfaces.AccountRecentMentionWorkItemModel[]>;
    getWorkArtifactLinkTypes(): Promise<WorkItemTrackingInterfaces.WorkArtifactLink[]>;
    queryWorkItemsForArtifactUris(artifactUriQuery: WorkItemTrackingInterfaces.ArtifactUriQuery): Promise<WorkItemTrackingInterfaces.ArtifactUriQueryResult>;
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, fileName?: string, uploadType?: string, areaPath?: string): Promise<WorkItemTrackingInterfaces.AttachmentReference>;
    getAttachmentContent(id: string, fileName?: string): Promise<NodeJS.ReadableStream>;
    getAttachmentZip(id: string, fileName?: string): Promise<NodeJS.ReadableStream>;
    getRootNodes(project: string, depth?: number): Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>;
    createOrUpdateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    deleteClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, reclassifyId?: number): Promise<void>;
    getClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, depth?: number): Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    updateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    getComment(id: number, revision: number): Promise<WorkItemTrackingInterfaces.WorkItemComment>;
    getComments(id: number, fromRevision?: number, top?: number, order?: WorkItemTrackingInterfaces.CommentSortOrder): Promise<WorkItemTrackingInterfaces.WorkItemComments>;
    deleteField(fieldNameOrRefName: string, project?: string): Promise<void>;
    getField(fieldNameOrRefName: string, project?: string): Promise<WorkItemTrackingInterfaces.WorkItemField>;
    getFields(project?: string, expand?: WorkItemTrackingInterfaces.GetFieldsExpand): Promise<WorkItemTrackingInterfaces.WorkItemField[]>;
    updateField(workItemField: WorkItemTrackingInterfaces.WorkItemField, fieldNameOrRefName: string, project?: string): Promise<void>;
    createQuery(postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string): Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    deleteQuery(project: string, query: string): Promise<void>;
    getQueries(project: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]>;
    getQuery(project: string, query: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    searchQueries(project: string, filter: string, top?: number, expand?: WorkItemTrackingInterfaces.QueryExpand, includeDeleted?: boolean): Promise<WorkItemTrackingInterfaces.QueryHierarchyItemsResult>;
    updateQuery(queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean): Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    destroyWorkItem(id: number, project?: string): Promise<void>;
    getDeletedWorkItem(id: number, project?: string): Promise<WorkItemTrackingInterfaces.WorkItemDelete>;
    getDeletedWorkItemReferences(project?: string): Promise<WorkItemTrackingInterfaces.WorkItemReference[]>;
    getDeletedWorkItems(ids: number[], project?: string): Promise<WorkItemTrackingInterfaces.WorkItemDeleteReference[]>;
    restoreWorkItem(payload: WorkItemTrackingInterfaces.WorkItemDeleteUpdate, id: number, project?: string): Promise<WorkItemTrackingInterfaces.WorkItemDelete>;
    getRevision(id: number, revisionNumber: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Promise<WorkItemTrackingInterfaces.WorkItem>;
    getRevisions(id: number, top?: number, skip?: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    evaluateRulesOnField(ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate): Promise<void>;
    createTemplate(template: WorkItemTrackingInterfaces.WorkItemTemplate, teamContext: TfsCoreInterfaces.TeamContext): Promise<WorkItemTrackingInterfaces.WorkItemTemplate>;
    getTemplates(teamContext: TfsCoreInterfaces.TeamContext, workitemtypename?: string): Promise<WorkItemTrackingInterfaces.WorkItemTemplateReference[]>;
    deleteTemplate(teamContext: TfsCoreInterfaces.TeamContext, templateId: string): Promise<void>;
    getTemplate(teamContext: TfsCoreInterfaces.TeamContext, templateId: string): Promise<WorkItemTrackingInterfaces.WorkItemTemplate>;
    replaceTemplate(templateContent: WorkItemTrackingInterfaces.WorkItemTemplate, teamContext: TfsCoreInterfaces.TeamContext, templateId: string): Promise<WorkItemTrackingInterfaces.WorkItemTemplate>;
    getUpdate(id: number, updateNumber: number): Promise<WorkItemTrackingInterfaces.WorkItemUpdate>;
    getUpdates(id: number, top?: number, skip?: number): Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>;
    queryByWiql(wiql: WorkItemTrackingInterfaces.Wiql, teamContext?: TfsCoreInterfaces.TeamContext, timePrecision?: boolean, top?: number): Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    queryById(id: string, teamContext?: TfsCoreInterfaces.TeamContext, timePrecision?: boolean): Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    getWorkItemIconJson(icon: string, color?: string, v?: number): Promise<WorkItemTrackingInterfaces.WorkItemIcon>;
    getWorkItemIcons(): Promise<WorkItemTrackingInterfaces.WorkItemIcon[]>;
    getWorkItemIconSvg(icon: string, color?: string, v?: number): Promise<NodeJS.ReadableStream>;
    getReportingLinks(project?: string, types?: string[], continuationToken?: string, startDateTime?: Date): Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>;
    getRelationType(relation: string): Promise<WorkItemTrackingInterfaces.WorkItemRelationType>;
    getRelationTypes(): Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>;
    readReportingRevisionsGet(project?: string, fields?: string[], types?: string[], continuationToken?: string, startDateTime?: Date, includeIdentityRef?: boolean, includeDeleted?: boolean, includeTagRef?: boolean, includeLatestOnly?: boolean, expand?: WorkItemTrackingInterfaces.ReportingRevisionsExpand, includeDiscussionChangesOnly?: boolean, maxPageSize?: number): Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    readReportingRevisionsPost(filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter, project?: string, continuationToken?: string, startDateTime?: Date, expand?: WorkItemTrackingInterfaces.ReportingRevisionsExpand): Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    deleteWorkItem(id: number, destroy?: boolean): Promise<WorkItemTrackingInterfaces.WorkItemDelete>;
    getWorkItem(id: number, fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItems(ids: number[], fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand, errorPolicy?: WorkItemTrackingInterfaces.WorkItemErrorPolicy): Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    updateWorkItem(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean, suppressNotifications?: boolean): Promise<WorkItemTrackingInterfaces.WorkItem>;
    createWorkItem(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean, suppressNotifications?: boolean): Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItemTemplate(project: string, type: string, fields?: string, asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItemStateColors(projectNames: string[]): Promise<WorkItemTrackingInterfaces.ProjectWorkItemStateColors[]>;
    getWorkItemNextStatesOnCheckinAction(ids: number[], action?: string): Promise<WorkItemTrackingInterfaces.WorkItemNextStateOnTransition[]>;
    getWorkItemTypeCategories(project: string): Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>;
    getWorkItemTypeCategory(project: string, category: string): Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory>;
    getWorkItemTypeColors(projectNames: string[]): Promise<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColor[] }[]>;
    getWorkItemTypeColorAndIcons(projectNames: string[]): Promise<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColorAndIcon[] }[]>;
    getWorkItemType(project: string, type: string): Promise<WorkItemTrackingInterfaces.WorkItemType>;
    getWorkItemTypes(project: string): Promise<WorkItemTrackingInterfaces.WorkItemType[]>;
    getWorkItemTypeField(project: string, type: string, field: string, expand?: WorkItemTrackingInterfaces.WorkItemTypeFieldsExpandLevel): Promise<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance>;
    getWorkItemTypeFields(project: string, type: string, expand?: WorkItemTrackingInterfaces.WorkItemTypeFieldsExpandLevel): Promise<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance[]>;
    getWorkItemTypeStates(project: string, type: string): Promise<WorkItemTrackingInterfaces.WorkItemStateColor[]>;
    exportWorkItemTypeDefinition(project?: string, type?: string, exportGlobalLists?: boolean): Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate>;
    updateWorkItemTypeDefinition(updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project?: string): Promise<WorkItemTrackingInterfaces.ProvisioningResult>;
}

export class WorkItemTrackingApi extends basem.ClientApiBase implements IWorkItemTrackingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-WorkItemTracking-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "5264459e-e5e0-4bd8-b118-0985e68a4ec5";

    /**
     * INTERNAL ONLY: USED BY ACCOUNT MY WORK PAGE. This returns Doing, Done, Follows and activity work items details.
     * 
     * @param {WorkItemTrackingInterfaces.QueryOption} queryOption
     */
    public async getAccountMyWorkData(
        queryOption?: WorkItemTrackingInterfaces.QueryOption
        ): Promise<WorkItemTrackingInterfaces.AccountMyWorkResult> {

        return new Promise<WorkItemTrackingInterfaces.AccountMyWorkResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                '$queryOption': queryOption,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "def3d688-ddf5-4096-9024-69beea15cdbd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.AccountMyWorkResult>;
                res = await this.rest.get<WorkItemTrackingInterfaces.AccountMyWorkResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.AccountMyWorkResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * INTERNAL ONLY: USED BY ACCOUNT MY WORK PAGE. This returns Doing, Done, Follows and activity work items details.
     * 
     */
    public async getRecentActivityData(
        ): Promise<WorkItemTrackingInterfaces.AccountRecentActivityWorkItemModel[]> {

        return new Promise<WorkItemTrackingInterfaces.AccountRecentActivityWorkItemModel[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "1bc988f4-c15f-4072-ad35-497c87e3a909",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.AccountRecentActivityWorkItemModel[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.AccountRecentActivityWorkItemModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.AccountRecentActivityWorkItemModel,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * INTERNAL ONLY: USED BY ACCOUNT MY WORK PAGE.
     * 
     */
    public async getRecentMentions(
        ): Promise<WorkItemTrackingInterfaces.AccountRecentMentionWorkItemModel[]> {

        return new Promise<WorkItemTrackingInterfaces.AccountRecentMentionWorkItemModel[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "d60eeb6e-e18c-4478-9e94-a0094e28f41c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.AccountRecentMentionWorkItemModel[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.AccountRecentMentionWorkItemModel[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.AccountRecentMentionWorkItemModel,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the list of work item tracking outbound artifact link types.
     * 
     */
    public async getWorkArtifactLinkTypes(
        ): Promise<WorkItemTrackingInterfaces.WorkArtifactLink[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkArtifactLink[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "1a31de40-e318-41cd-a6c6-881077df52e3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkArtifactLink[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkArtifactLink[]>(url, options);

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
     * Queries work items linked to a given list of artifact URI.
     * 
     * @param {WorkItemTrackingInterfaces.ArtifactUriQuery} artifactUriQuery - Defines a list of artifact URI for querying work items.
     */
    public async queryWorkItemsForArtifactUris(
        artifactUriQuery: WorkItemTrackingInterfaces.ArtifactUriQuery
        ): Promise<WorkItemTrackingInterfaces.ArtifactUriQueryResult> {

        return new Promise<WorkItemTrackingInterfaces.ArtifactUriQueryResult>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "a9a9aa7a-8c09-44d3-ad1b-46e855c1e3d3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.ArtifactUriQueryResult>;
                res = await this.rest.create<WorkItemTrackingInterfaces.ArtifactUriQueryResult>(url, artifactUriQuery, options);

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
     * Uploads an attachment.
     * 
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} fileName - The name of the file
     * @param {string} uploadType - Attachment upload type: Simple or Chunked
     * @param {string} areaPath - Target project Area Path
     */
    public async createAttachment(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        fileName?: string,
        uploadType?: string,
        areaPath?: string
        ): Promise<WorkItemTrackingInterfaces.AttachmentReference> {

        return new Promise<WorkItemTrackingInterfaces.AttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                fileName: fileName,
                uploadType: uploadType,
                areaPath: areaPath,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "e07b5fa4-1499-494d-a496-64b860fd64ff",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.AttachmentReference>;
                res = await this.rest.uploadStream<WorkItemTrackingInterfaces.AttachmentReference>("POST", url, contentStream, options);

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
     * Downloads an attachment.
     * 
     * @param {string} id - Attachment ID
     * @param {string} fileName - Name of the file
     */
    public async getAttachmentContent(
        id: string,
        fileName?: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                fileName: fileName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "e07b5fa4-1499-494d-a496-64b860fd64ff",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Downloads an attachment.
     * 
     * @param {string} id - Attachment ID
     * @param {string} fileName - Name of the file
     */
    public async getAttachmentZip(
        id: string,
        fileName?: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                fileName: fileName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "e07b5fa4-1499-494d-a496-64b860fd64ff",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets root classification nodes under the project.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} depth - Depth of children to fetch.
     */
    public async getRootNodes(
        project: string,
        depth?: number
        ): Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                '$depth': depth,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a70579d1-f53a-48ee-a5be-7be8659023b9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create new or update an existing classification node.
     * 
     * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode - Node to create or update.
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup - Structure group of the classification node, area or iteration.
     * @param {string} path - Path of the classification node.
     */
    public async createOrUpdateClassificationNode(
        postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode,
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path?: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                structureGroup: structureGroup,
                path: path
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "5a172953-1b41-49d3-840a-33f79c3ce89f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
                res = await this.rest.create<WorkItemTrackingInterfaces.WorkItemClassificationNode>(url, postedNode, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete an existing classification node.
     * 
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup - Structure group of the classification node, area or iteration.
     * @param {string} path - Path of the classification node.
     * @param {number} reclassifyId - Id of the target classification node for reclassification.
     */
    public async deleteClassificationNode(
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path?: string,
        reclassifyId?: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                structureGroup: structureGroup,
                path: path
            };

            let queryValues: any = {
                '$reclassifyId': reclassifyId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "5a172953-1b41-49d3-840a-33f79c3ce89f",
                    routeValues,
                    queryValues);

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
     * Gets the classification node for a given node path.
     * 
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup - Structure group of the classification node, area or iteration.
     * @param {string} path - Path of the classification node.
     * @param {number} depth - Depth of children to fetch.
     */
    public async getClassificationNode(
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path?: string,
        depth?: number
        ): Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                structureGroup: structureGroup,
                path: path
            };

            let queryValues: any = {
                '$depth': depth,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "5a172953-1b41-49d3-840a-33f79c3ce89f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemClassificationNode>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update an existing classification node.
     * 
     * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode - Node to create or update.
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup - Structure group of the classification node, area or iteration.
     * @param {string} path - Path of the classification node.
     */
    public async updateClassificationNode(
        postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode,
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path?: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                structureGroup: structureGroup,
                path: path
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "5a172953-1b41-49d3-840a-33f79c3ce89f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
                res = await this.rest.update<WorkItemTrackingInterfaces.WorkItemClassificationNode>(url, postedNode, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets a comment for a work item at the specified revision.
     * 
     * @param {number} id - Work item id
     * @param {number} revision - Revision for which the comment need to be fetched
     */
    public async getComment(
        id: number,
        revision: number
        ): Promise<WorkItemTrackingInterfaces.WorkItemComment> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemComment>(async (resolve, reject) => {
            let routeValues: any = {
                id: id,
                revision: revision
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "19335ae7-22f7-4308-93d8-261f9384b7cf",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemComment>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemComment>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemComment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the specified number of comments for a work item from the specified revision.
     * 
     * @param {number} id - Work item id
     * @param {number} fromRevision - Revision from which comments are to be fetched
     * @param {number} top - The number of comments to return
     * @param {WorkItemTrackingInterfaces.CommentSortOrder} order - Ascending or descending by revision id
     */
    public async getComments(
        id: number,
        fromRevision?: number,
        top?: number,
        order?: WorkItemTrackingInterfaces.CommentSortOrder
        ): Promise<WorkItemTrackingInterfaces.WorkItemComments> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemComments>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                fromRevision: fromRevision,
                '$top': top,
                order: order,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "19335ae7-22f7-4308-93d8-261f9384b7cf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemComments>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemComments>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemComments,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Deletes the field.
     * 
     * @param {string} fieldNameOrRefName - Field simple name or reference name
     * @param {string} project - Project ID or project name
     */
    public async deleteField(
        fieldNameOrRefName: string,
        project?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                fieldNameOrRefName: fieldNameOrRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "b51fd764-e5c2-4b9b-aaf7-3395cf4bdd94",
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
     * Gets information on a specific field.
     * 
     * @param {string} fieldNameOrRefName - Field simple name or reference name
     * @param {string} project - Project ID or project name
     */
    public async getField(
        fieldNameOrRefName: string,
        project?: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemField> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemField>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                fieldNameOrRefName: fieldNameOrRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "b51fd764-e5c2-4b9b-aaf7-3395cf4bdd94",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemField>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemField>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemField,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns information for all fields.
     * 
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.GetFieldsExpand} expand - Use ExtensionFields to include extension fields, otherwise exclude them. Unless the feature flag for this parameter is enabled, extension fields are always included.
     */
    public async getFields(
        project?: string,
        expand?: WorkItemTrackingInterfaces.GetFieldsExpand
        ): Promise<WorkItemTrackingInterfaces.WorkItemField[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemField[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "b51fd764-e5c2-4b9b-aaf7-3395cf4bdd94",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemField[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemField[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemField,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Updates the field.
     * 
     * @param {WorkItemTrackingInterfaces.WorkItemField} workItemField - New field definition
     * @param {string} fieldNameOrRefName - Field simple name or reference name
     * @param {string} project - Project ID or project name
     */
    public async updateField(
        workItemField: WorkItemTrackingInterfaces.WorkItemField,
        fieldNameOrRefName: string,
        project?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                fieldNameOrRefName: fieldNameOrRefName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "b51fd764-e5c2-4b9b-aaf7-3395cf4bdd94",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, workItemField, options);

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
     * Creates a query, or moves a query.
     * 
     * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} postedQuery - The query to create.
     * @param {string} project - Project ID or project name
     * @param {string} query - The parent path for the query to create.
     */
    public async createQuery(
        postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem,
        project: string,
        query: string
        ): Promise<WorkItemTrackingInterfaces.QueryHierarchyItem> {

        return new Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                query: query
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a67d190c-c41f-424b-814d-0e906f659301",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.QueryHierarchyItem>;
                res = await this.rest.create<WorkItemTrackingInterfaces.QueryHierarchyItem>(url, postedQuery, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a query or a folder
     * 
     * @param {string} project - Project ID or project name
     * @param {string} query - ID or path of the query or folder to delete.
     */
    public async deleteQuery(
        project: string,
        query: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                query: query
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a67d190c-c41f-424b-814d-0e906f659301",
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
     * Gets the root queries and their children
     * 
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.QueryExpand} expand - Include the query string (wiql), clauses, query result columns, and sort options in the results.
     * @param {number} depth - In the folder of queries, return child queries and folders to this depth.
     * @param {boolean} includeDeleted - Include deleted queries and folders
     */
    public async getQueries(
        project: string,
        expand?: WorkItemTrackingInterfaces.QueryExpand,
        depth?: number,
        includeDeleted?: boolean
        ): Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]> {

        return new Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                '$expand': expand,
                '$depth': depth,
                '$includeDeleted': includeDeleted,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a67d190c-c41f-424b-814d-0e906f659301",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.QueryHierarchyItem[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.QueryHierarchyItem[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieves an individual query and its children
     * 
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {WorkItemTrackingInterfaces.QueryExpand} expand - Include the query string (wiql), clauses, query result columns, and sort options in the results.
     * @param {number} depth - In the folder of queries, return child queries and folders to this depth.
     * @param {boolean} includeDeleted - Include deleted queries and folders
     */
    public async getQuery(
        project: string,
        query: string,
        expand?: WorkItemTrackingInterfaces.QueryExpand,
        depth?: number,
        includeDeleted?: boolean
        ): Promise<WorkItemTrackingInterfaces.QueryHierarchyItem> {

        return new Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                query: query
            };

            let queryValues: any = {
                '$expand': expand,
                '$depth': depth,
                '$includeDeleted': includeDeleted,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a67d190c-c41f-424b-814d-0e906f659301",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.QueryHierarchyItem>;
                res = await this.rest.get<WorkItemTrackingInterfaces.QueryHierarchyItem>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Searches all queries the user has access to in the current project
     * 
     * @param {string} project - Project ID or project name
     * @param {string} filter - The text to filter the queries with.
     * @param {number} top - The number of queries to return (Default is 50 and maximum is 200).
     * @param {WorkItemTrackingInterfaces.QueryExpand} expand
     * @param {boolean} includeDeleted - Include deleted queries and folders
     */
    public async searchQueries(
        project: string,
        filter: string,
        top?: number,
        expand?: WorkItemTrackingInterfaces.QueryExpand,
        includeDeleted?: boolean
        ): Promise<WorkItemTrackingInterfaces.QueryHierarchyItemsResult> {

        return new Promise<WorkItemTrackingInterfaces.QueryHierarchyItemsResult>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                '$filter': filter,
                '$top': top,
                '$expand': expand,
                '$includeDeleted': includeDeleted,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a67d190c-c41f-424b-814d-0e906f659301",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.QueryHierarchyItemsResult>;
                res = await this.rest.get<WorkItemTrackingInterfaces.QueryHierarchyItemsResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItemsResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a query or a folder. This allows you to update, rename and move queries and folders.
     * 
     * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} queryUpdate - The query to update.
     * @param {string} project - Project ID or project name
     * @param {string} query - The path for the query to update.
     * @param {boolean} undeleteDescendants - Undelete the children of this folder.
     */
    public async updateQuery(
        queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem,
        project: string,
        query: string,
        undeleteDescendants?: boolean
        ): Promise<WorkItemTrackingInterfaces.QueryHierarchyItem> {

        return new Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                query: query
            };

            let queryValues: any = {
                '$undeleteDescendants': undeleteDescendants,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a67d190c-c41f-424b-814d-0e906f659301",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.QueryHierarchyItem>;
                res = await this.rest.update<WorkItemTrackingInterfaces.QueryHierarchyItem>(url, queryUpdate, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Destroys the specified work item permanently from the Recycle Bin. This action can not be undone.
     * 
     * @param {number} id - ID of the work item to be destroyed permanently
     * @param {string} project - Project ID or project name
     */
    public async destroyWorkItem(
        id: number,
        project?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "b70d8d39-926c-465e-b927-b1bf0e5ca0e0",
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
     * Gets a deleted work item from Recycle Bin.
     * 
     * @param {number} id - ID of the work item to be returned
     * @param {string} project - Project ID or project name
     */
    public async getDeletedWorkItem(
        id: number,
        project?: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemDelete> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemDelete>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "b70d8d39-926c-465e-b927-b1bf0e5ca0e0",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemDelete>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemDelete>(url, options);

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
     * Gets a list of the IDs and the URLs of the deleted the work items in the Recycle Bin.
     * 
     * @param {string} project - Project ID or project name
     */
    public async getDeletedWorkItemReferences(
        project?: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemReference[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "b70d8d39-926c-465e-b927-b1bf0e5ca0e0",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemReference[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemReference[]>(url, options);

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
     * Gets the work items from the recycle bin, whose IDs have been specified in the parameters
     * 
     * @param {number[]} ids - Comma separated list of IDs of the deleted work items to be returned
     * @param {string} project - Project ID or project name
     */
    public async getDeletedWorkItems(
        ids: number[],
        project?: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemDeleteReference[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemDeleteReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                ids: ids && ids.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "b70d8d39-926c-465e-b927-b1bf0e5ca0e0",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemDeleteReference[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemDeleteReference[]>(url, options);

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
     * Restores the deleted work item from Recycle Bin.
     * 
     * @param {WorkItemTrackingInterfaces.WorkItemDeleteUpdate} payload - Paylod with instructions to update the IsDeleted flag to false
     * @param {number} id - ID of the work item to be restored
     * @param {string} project - Project ID or project name
     */
    public async restoreWorkItem(
        payload: WorkItemTrackingInterfaces.WorkItemDeleteUpdate,
        id: number,
        project?: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemDelete> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemDelete>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "b70d8d39-926c-465e-b927-b1bf0e5ca0e0",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemDelete>;
                res = await this.rest.update<WorkItemTrackingInterfaces.WorkItemDelete>(url, payload, options);

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
     * Returns a fully hydrated work item for the requested revision
     * 
     * @param {number} id
     * @param {number} revisionNumber
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     */
    public async getRevision(
        id: number,
        revisionNumber: number,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand
        ): Promise<WorkItemTrackingInterfaces.WorkItem> {

        return new Promise<WorkItemTrackingInterfaces.WorkItem>(async (resolve, reject) => {
            let routeValues: any = {
                id: id,
                revisionNumber: revisionNumber
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a00c85a5-80fa-4565-99c3-bcd2181434bb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItem>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItem>(url, options);

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
     * Returns the list of fully hydrated work item revisions, paged.
     * 
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     */
    public async getRevisions(
        id: number,
        top?: number,
        skip?: number,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand
        ): Promise<WorkItemTrackingInterfaces.WorkItem[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a00c85a5-80fa-4565-99c3-bcd2181434bb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItem[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItem[]>(url, options);

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
     * Validates the fields values.
     * 
     * @param {WorkItemTrackingInterfaces.FieldsToEvaluate} ruleEngineInput
     */
    public async evaluateRulesOnField(
        ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "1a3a1536-dca6-4509-b9c3-dd9bb2981506",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, ruleEngineInput, options);

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
     * Creates a template
     * 
     * @param {WorkItemTrackingInterfaces.WorkItemTemplate} template - Template contents
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     */
    public async createTemplate(
        template: WorkItemTrackingInterfaces.WorkItemTemplate,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<WorkItemTrackingInterfaces.WorkItemTemplate> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemTemplate>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "6a90345f-a676-4969-afce-8e163e1d5642",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemTemplate>;
                res = await this.rest.create<WorkItemTrackingInterfaces.WorkItemTemplate>(url, template, options);

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
     * Gets template
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} workitemtypename - Optional, When specified returns templates for given Work item type.
     */
    public async getTemplates(
        teamContext: TfsCoreInterfaces.TeamContext,
        workitemtypename?: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemTemplateReference[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemTemplateReference[]>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            let queryValues: any = {
                workitemtypename: workitemtypename,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "6a90345f-a676-4969-afce-8e163e1d5642",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemTemplateReference[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemTemplateReference[]>(url, options);

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
     * Deletes the template with given id
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} templateId - Template id
     */
    public async deleteTemplate(
        teamContext: TfsCoreInterfaces.TeamContext,
        templateId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                templateId: templateId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "fb10264a-8836-48a0-8033-1b0ccd2748d5",
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
     * Gets the template with specified id
     * 
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} templateId - Template Id
     */
    public async getTemplate(
        teamContext: TfsCoreInterfaces.TeamContext,
        templateId: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemTemplate> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemTemplate>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                templateId: templateId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "fb10264a-8836-48a0-8033-1b0ccd2748d5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemTemplate>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemTemplate>(url, options);

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
     * Replace template contents
     * 
     * @param {WorkItemTrackingInterfaces.WorkItemTemplate} templateContent - Template contents to replace with
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {string} templateId - Template id
     */
    public async replaceTemplate(
        templateContent: WorkItemTrackingInterfaces.WorkItemTemplate,
        teamContext: TfsCoreInterfaces.TeamContext,
        templateId: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemTemplate> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemTemplate>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                templateId: templateId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "fb10264a-8836-48a0-8033-1b0ccd2748d5",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemTemplate>;
                res = await this.rest.replace<WorkItemTrackingInterfaces.WorkItemTemplate>(url, templateContent, options);

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
     * Returns a single update for a work item
     * 
     * @param {number} id
     * @param {number} updateNumber
     */
    public async getUpdate(
        id: number,
        updateNumber: number
        ): Promise<WorkItemTrackingInterfaces.WorkItemUpdate> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemUpdate>(async (resolve, reject) => {
            let routeValues: any = {
                id: id,
                updateNumber: updateNumber
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "6570bf97-d02c-4a91-8d93-3abe9895b1a9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemUpdate>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemUpdate>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemUpdate,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a the deltas between work item revisions
     * 
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     */
    public async getUpdates(
        id: number,
        top?: number,
        skip?: number
        ): Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "6570bf97-d02c-4a91-8d93-3abe9895b1a9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemUpdate[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemUpdate[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemUpdate,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the results of the query given its WIQL.
     * 
     * @param {WorkItemTrackingInterfaces.Wiql} wiql - The query containing the WIQL.
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {boolean} timePrecision - Whether or not to use time precision.
     * @param {number} top - The max number of results to return.
     */
    public async queryByWiql(
        wiql: WorkItemTrackingInterfaces.Wiql,
        teamContext?: TfsCoreInterfaces.TeamContext,
        timePrecision?: boolean,
        top?: number
        ): Promise<WorkItemTrackingInterfaces.WorkItemQueryResult> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            let queryValues: any = {
                timePrecision: timePrecision,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "1a9c53f7-f243-4447-b110-35ef023636e4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemQueryResult>;
                res = await this.rest.create<WorkItemTrackingInterfaces.WorkItemQueryResult>(url, wiql, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemQueryResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the results of the query given the query ID.
     * 
     * @param {string} id - The query ID.
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {boolean} timePrecision - Whether or not to use time precision.
     */
    public async queryById(
        id: string,
        teamContext?: TfsCoreInterfaces.TeamContext,
        timePrecision?: boolean
        ): Promise<WorkItemTrackingInterfaces.WorkItemQueryResult> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>(async (resolve, reject) => {
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team,
                id: id
            };

            let queryValues: any = {
                timePrecision: timePrecision,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "a02355f5-5f8a-4671-8e32-369d23aac83d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemQueryResult>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemQueryResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              WorkItemTrackingInterfaces.TypeInfo.WorkItemQueryResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a work item icon given the friendly name and icon color.
     * 
     * @param {string} icon - The name of the icon
     * @param {string} color - The 6-digit hex color for the icon
     * @param {number} v - The version of the icon (used only for cache invalidation)
     */
    public async getWorkItemIconJson(
        icon: string,
        color?: string,
        v?: number
        ): Promise<WorkItemTrackingInterfaces.WorkItemIcon> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemIcon>(async (resolve, reject) => {
            let routeValues: any = {
                icon: icon
            };

            let queryValues: any = {
                color: color,
                v: v,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "4e1eb4a5-1970-4228-a682-ec48eb2dca30",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemIcon>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemIcon>(url, options);

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
     * Get a list of all work item icons.
     * 
     */
    public async getWorkItemIcons(
        ): Promise<WorkItemTrackingInterfaces.WorkItemIcon[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemIcon[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "4e1eb4a5-1970-4228-a682-ec48eb2dca30",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemIcon[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemIcon[]>(url, options);

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
     * Get a work item icon given the friendly name and icon color.
     * 
     * @param {string} icon - The name of the icon
     * @param {string} color - The 6-digit hex color for the icon
     * @param {number} v - The version of the icon (used only for cache invalidation)
     */
    public async getWorkItemIconSvg(
        icon: string,
        color?: string,
        v?: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                icon: icon
            };

            let queryValues: any = {
                color: color,
                v: v,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "4e1eb4a5-1970-4228-a682-ec48eb2dca30",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("image/svg+xml", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a batch of work item links
     * 
     * @param {string} project - Project ID or project name
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
     * @param {string} continuationToken - Specifies the continuationToken to start the batch from. Omit this parameter to get the first batch of links.
     * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
     */
    public async getReportingLinks(
        project?: string,
        types?: string[],
        continuationToken?: string,
        startDateTime?: Date
        ): Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch> {

        return new Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                types: types && types.join(","),
                continuationToken: continuationToken,
                startDateTime: startDateTime,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "b5b5b6d0-0308-40a1-b3f4-b9bb3c66878f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>;
                res = await this.rest.get<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>(url, options);

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
     * Gets the work item relation type definition.
     * 
     * @param {string} relation - The relation name
     */
    public async getRelationType(
        relation: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemRelationType> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemRelationType>(async (resolve, reject) => {
            let routeValues: any = {
                relation: relation
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "f5d33bc9-5b49-4a3c-a9bd-f3cd46dd2165",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemRelationType>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemRelationType>(url, options);

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
     * Gets the work item relation types.
     * 
     */
    public async getRelationTypes(
        ): Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "f5d33bc9-5b49-4a3c-a9bd-f3cd46dd2165",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemRelationType[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemRelationType[]>(url, options);

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
     * Get a batch of work item revisions with the option of including deleted items
     * 
     * @param {string} project - Project ID or project name
     * @param {string[]} fields - A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     * @param {string} continuationToken - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {boolean} includeIdentityRef - Return an identity reference instead of a string value for identity fields.
     * @param {boolean} includeDeleted - Specify if the deleted item should be returned.
     * @param {boolean} includeTagRef - Specify if the tag objects should be returned for System.Tags field.
     * @param {boolean} includeLatestOnly - Return only the latest revisions of work items, skipping all historical revisions
     * @param {WorkItemTrackingInterfaces.ReportingRevisionsExpand} expand - Return all the fields in work item revisions, including long text fields which are not returned by default
     * @param {boolean} includeDiscussionChangesOnly - Return only the those revisions of work items, where only history field was changed
     * @param {number} maxPageSize - The maximum number of results to return in this batch
     */
    public async readReportingRevisionsGet(
        project?: string,
        fields?: string[],
        types?: string[],
        continuationToken?: string,
        startDateTime?: Date,
        includeIdentityRef?: boolean,
        includeDeleted?: boolean,
        includeTagRef?: boolean,
        includeLatestOnly?: boolean,
        expand?: WorkItemTrackingInterfaces.ReportingRevisionsExpand,
        includeDiscussionChangesOnly?: boolean,
        maxPageSize?: number
        ): Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch> {

        return new Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                fields: fields && fields.join(","),
                types: types && types.join(","),
                continuationToken: continuationToken,
                startDateTime: startDateTime,
                includeIdentityRef: includeIdentityRef,
                includeDeleted: includeDeleted,
                includeTagRef: includeTagRef,
                includeLatestOnly: includeLatestOnly,
                '$expand': expand,
                includeDiscussionChangesOnly: includeDiscussionChangesOnly,
                '$maxPageSize': maxPageSize,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "f828fe59-dd87-495d-a17c-7a8d6211ca6c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
                res = await this.rest.get<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>(url, options);

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
     * Get a batch of work item revisions. This request may be used if your list of fields is large enough that it may run the URL over the length limit.
     * 
     * @param {WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
     * @param {string} project - Project ID or project name
     * @param {string} continuationToken - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {WorkItemTrackingInterfaces.ReportingRevisionsExpand} expand
     */
    public async readReportingRevisionsPost(
        filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter,
        project?: string,
        continuationToken?: string,
        startDateTime?: Date,
        expand?: WorkItemTrackingInterfaces.ReportingRevisionsExpand
        ): Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch> {

        return new Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                continuationToken: continuationToken,
                startDateTime: startDateTime,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "f828fe59-dd87-495d-a17c-7a8d6211ca6c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
                res = await this.rest.create<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>(url, filter, options);

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
     * Deletes the specified work item and sends it to the Recycle Bin, so that it can be restored back, if required. Optionally, if the destroy parameter has been set to true, it destroys the work item permanently.
     * 
     * @param {number} id - ID of the work item to be deleted
     * @param {boolean} destroy - Optional parameter, if set to true, the work item is deleted permanently
     */
    public async deleteWorkItem(
        id: number,
        destroy?: boolean
        ): Promise<WorkItemTrackingInterfaces.WorkItemDelete> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemDelete>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                destroy: destroy,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemDelete>;
                res = await this.rest.del<WorkItemTrackingInterfaces.WorkItemDelete>(url, options);

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
     * Returns a single work item.
     * 
     * @param {number} id - The work item id
     * @param {string[]} fields - Comma-separated list of requested fields
     * @param {Date} asOf - AsOf UTC date time string
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand - The expand parameters for work item attributes
     */
    public async getWorkItem(
        id: number,
        fields?: string[],
        asOf?: Date,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand
        ): Promise<WorkItemTrackingInterfaces.WorkItem> {

        return new Promise<WorkItemTrackingInterfaces.WorkItem>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                fields: fields && fields.join(","),
                asOf: asOf,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItem>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItem>(url, options);

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
     * Returns a list of work items.
     * 
     * @param {number[]} ids - The comma-separated list of requested work item ids
     * @param {string[]} fields - Comma-separated list of requested fields
     * @param {Date} asOf - AsOf UTC date time string
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand - The expand parameters for work item attributes
     * @param {WorkItemTrackingInterfaces.WorkItemErrorPolicy} errorPolicy - The flag to control error policy in a bulk get work items request
     */
    public async getWorkItems(
        ids: number[],
        fields?: string[],
        asOf?: Date,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand,
        errorPolicy?: WorkItemTrackingInterfaces.WorkItemErrorPolicy
        ): Promise<WorkItemTrackingInterfaces.WorkItem[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItem[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                ids: ids && ids.join(","),
                fields: fields && fields.join(","),
                asOf: asOf,
                '$expand': expand,
                errorPolicy: errorPolicy,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItem[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItem[]>(url, options);

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
     * Updates a single work item.
     * 
     * @param {VSSInterfaces.JsonPatchDocument} document - The JSON Patch document representing the update
     * @param {number} id - The id of the work item to update
     * @param {boolean} validateOnly - Indicate if you only want to validate the changes without saving the work item
     * @param {boolean} bypassRules - Do not enforce the work item type rules on this update
     * @param {boolean} suppressNotifications - Do not fire any notifications for this change
     */
    public async updateWorkItem(
        customHeaders: any,
        document: VSSInterfaces.JsonPatchDocument,
        id: number,
        validateOnly?: boolean,
        bypassRules?: boolean,
        suppressNotifications?: boolean
        ): Promise<WorkItemTrackingInterfaces.WorkItem> {

        return new Promise<WorkItemTrackingInterfaces.WorkItem>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                validateOnly: validateOnly,
                bypassRules: bypassRules,
                suppressNotifications: suppressNotifications,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItem>;
                res = await this.rest.update<WorkItemTrackingInterfaces.WorkItem>(url, document, options);

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
     * Creates a single work item.
     * 
     * @param {VSSInterfaces.JsonPatchDocument} document - The JSON Patch document representing the work item
     * @param {string} project - Project ID or project name
     * @param {string} type - The work item type of the work item to create
     * @param {boolean} validateOnly - Indicate if you only want to validate the changes without saving the work item
     * @param {boolean} bypassRules - Do not enforce the work item type rules on this update
     * @param {boolean} suppressNotifications - Do not fire any notifications for this change
     */
    public async createWorkItem(
        customHeaders: any,
        document: VSSInterfaces.JsonPatchDocument,
        project: string,
        type: string,
        validateOnly?: boolean,
        bypassRules?: boolean,
        suppressNotifications?: boolean
        ): Promise<WorkItemTrackingInterfaces.WorkItem> {

        return new Promise<WorkItemTrackingInterfaces.WorkItem>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                type: type
            };

            let queryValues: any = {
                validateOnly: validateOnly,
                bypassRules: bypassRules,
                suppressNotifications: suppressNotifications,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "62d3d110-0047-428c-ad3c-4fe872c91c74",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItem>;
                res = await this.rest.create<WorkItemTrackingInterfaces.WorkItem>(url, document, options);

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
     * Returns a single work item from a template.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type - The work item type name
     * @param {string} fields - Comma-separated list of requested fields
     * @param {Date} asOf - AsOf UTC date time string
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand - The expand parameters for work item attributes
     */
    public async getWorkItemTemplate(
        project: string,
        type: string,
        fields?: string,
        asOf?: Date,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand
        ): Promise<WorkItemTrackingInterfaces.WorkItem> {

        return new Promise<WorkItemTrackingInterfaces.WorkItem>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                type: type
            };

            let queryValues: any = {
                fields: fields,
                asOf: asOf,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "62d3d110-0047-428c-ad3c-4fe872c91c74",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItem>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItem>(url, options);

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
     * INTERNAL ONLY: It will be used for My account work experience. Get the work item type state color for multiple projects
     * 
     * @param {string[]} projectNames
     */
    public async getWorkItemStateColors(
        projectNames: string[]
        ): Promise<WorkItemTrackingInterfaces.ProjectWorkItemStateColors[]> {

        return new Promise<WorkItemTrackingInterfaces.ProjectWorkItemStateColors[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "0b83df8a-3496-4ddb-ba44-63634f4cda61",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.ProjectWorkItemStateColors[]>;
                res = await this.rest.create<WorkItemTrackingInterfaces.ProjectWorkItemStateColors[]>(url, projectNames, options);

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
     * Returns the next state on the given work item IDs.
     * 
     * @param {number[]} ids - list of work item ids
     * @param {string} action - possible actions. Currently only supports checkin
     */
    public async getWorkItemNextStatesOnCheckinAction(
        ids: number[],
        action?: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemNextStateOnTransition[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemNextStateOnTransition[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                ids: ids && ids.join(","),
                action: action,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "afae844b-e2f6-44c2-8053-17b3bb936a40",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemNextStateOnTransition[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemNextStateOnTransition[]>(url, options);

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
     * Returns a the deltas between work item revisions.
     * 
     * @param {string} project - Project ID or project name
     */
    public async getWorkItemTypeCategories(
        project: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "9b9f5734-36c8-415e-ba67-f83b45c31408",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>(url, options);

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
     * Returns a the deltas between work item revisions.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} category - The category name
     */
    public async getWorkItemTypeCategory(
        project: string,
        category: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                category: category
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "9b9f5734-36c8-415e-ba67-f83b45c31408",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemTypeCategory>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemTypeCategory>(url, options);

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
     * INTERNAL ONLY: It will be used for My account work experience. Get the wit type color for multiple projects
     * 
     * @param {string[]} projectNames
     */
    public async getWorkItemTypeColors(
        projectNames: string[]
        ): Promise<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColor[] }[]> {

        return new Promise<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColor[] }[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "958fde80-115e-43fb-bd65-749c48057faf",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColor[] }[]>;
                res = await this.rest.create<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColor[] }[]>(url, projectNames, options);

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
     * INTERNAL ONLY: It is used for color and icon providers. Get the wit type color for multiple projects
     * 
     * @param {string[]} projectNames
     */
    public async getWorkItemTypeColorAndIcons(
        projectNames: string[]
        ): Promise<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColorAndIcon[] }[]> {

        return new Promise<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColorAndIcon[] }[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "f0f8dc62-3975-48ce-8051-f636b68b52e3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColorAndIcon[] }[]>;
                res = await this.rest.create<{ key: string; value: WorkItemTrackingInterfaces.WorkItemTypeColorAndIcon[] }[]>(url, projectNames, options);

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
     * Returns a work item type definition.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type - Work item type name
     */
    public async getWorkItemType(
        project: string,
        type: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemType> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemType>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                type: type
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "7c8d7a76-4a09-43e8-b5df-bd792f4ac6aa",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemType>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemType>(url, options);

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
     * Returns the list of work item types
     * 
     * @param {string} project - Project ID or project name
     */
    public async getWorkItemTypes(
        project: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemType[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemType[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "7c8d7a76-4a09-43e8-b5df-bd792f4ac6aa",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemType[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemType[]>(url, options);

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
     * Get field of a work item type.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type - Work item type
     * @param {string} field
     * @param {WorkItemTrackingInterfaces.WorkItemTypeFieldsExpandLevel} expand - Expand level for the API response. Properties: to include allowedvalues, default value, isRequired etc. as a part of response; None: to skip these properties.
     */
    public async getWorkItemTypeField(
        project: string,
        type: string,
        field: string,
        expand?: WorkItemTrackingInterfaces.WorkItemTypeFieldsExpandLevel
        ): Promise<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                type: type,
                field: field
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "bd293ce5-3d25-4192-8e67-e8092e879efb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance>(url, options);

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
     * Get a list of fields for a work Item type.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type - Work item type.
     * @param {WorkItemTrackingInterfaces.WorkItemTypeFieldsExpandLevel} expand - Expand level for the API response. Properties: to include allowedvalues, default value, isRequired etc. as a part of response; None: to skip these properties.
     */
    public async getWorkItemTypeFields(
        project: string,
        type: string,
        expand?: WorkItemTrackingInterfaces.WorkItemTypeFieldsExpandLevel
        ): Promise<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                type: type
            };

            let queryValues: any = {
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.2",
                    "wit",
                    "bd293ce5-3d25-4192-8e67-e8092e879efb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemTypeFieldInstance[]>(url, options);

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
     * Returns the state names and colors for a work item type.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type - The state name
     */
    public async getWorkItemTypeStates(
        project: string,
        type: string
        ): Promise<WorkItemTrackingInterfaces.WorkItemStateColor[]> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemStateColor[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                type: type
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "7c9d7a76-4a09-43e8-b5df-bd792f4ac6aa",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemStateColor[]>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemStateColor[]>(url, options);

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
     * Export work item type
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {boolean} exportGlobalLists
     */
    public async exportWorkItemTypeDefinition(
        project?: string,
        type?: string,
        exportGlobalLists?: boolean
        ): Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate> {

        return new Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                type: type
            };

            let queryValues: any = {
                exportGlobalLists: exportGlobalLists,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "8637ac8b-5eb6-4f90-b3f7-4f2ff576a459",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.WorkItemTypeTemplate>;
                res = await this.rest.get<WorkItemTrackingInterfaces.WorkItemTypeTemplate>(url, options);

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
     * Add/updates a work item type
     * 
     * @param {WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel} updateModel
     * @param {string} project - Project ID or project name
     */
    public async updateWorkItemTypeDefinition(
        updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel,
        project?: string
        ): Promise<WorkItemTrackingInterfaces.ProvisioningResult> {

        return new Promise<WorkItemTrackingInterfaces.ProvisioningResult>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "wit",
                    "8637ac8b-5eb6-4f90-b3f7-4f2ff576a459",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WorkItemTrackingInterfaces.ProvisioningResult>;
                res = await this.rest.create<WorkItemTrackingInterfaces.ProvisioningResult>(url, updateModel, options);

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
