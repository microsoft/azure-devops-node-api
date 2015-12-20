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

/// <reference path="../node/node.d.ts"/>
/// <reference path="../q/Q.d.ts"/>

import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TfsCoreInterfaces = require("./interfaces/CoreInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
import WorkItemTrackingInterfaces = require("./interfaces/WorkItemTrackingInterfaces");

export interface IWorkItemTrackingApi extends basem.ClientApiBase {
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, fileName: string, uploadType: string, onResult: (err: any, statusCode: number, attachment: WorkItemTrackingInterfaces.AttachmentReference) => void): void;
    getAttachmentContent(id: string, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getAttachmentZip(id: string, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getRootNodes(project: string, depth: number, onResult: (err: any, statusCode: number, classificationNodes: WorkItemTrackingInterfaces.WorkItemClassificationNode[]) => void): void;
    createOrUpdateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, onResult: (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => void): void;
    deleteClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, reclassifyId: number, onResult: (err: any, statusCode: number) => void): void;
    getClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, depth: number, onResult: (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => void): void;
    updateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, onResult: (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => void): void;
    getField(field: string, onResult: (err: any, statusCode: number, field: WorkItemTrackingInterfaces.WorkItemField) => void): void;
    getFields(onResult: (err: any, statusCode: number, fields: WorkItemTrackingInterfaces.WorkItemField[]) => void): void;
    getHistory(id: number, top: number, skip: number, onResult: (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory[]) => void): void;
    getHistoryById(id: number, revisionNumber: number, onResult: (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory) => void): void;
    createQuery(postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, onResult: (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => void): void;
    deleteQuery(project: string, query: string, onResult: (err: any, statusCode: number) => void): void;
    getQueries(project: string, expand: WorkItemTrackingInterfaces.QueryExpand, depth: number, includeDeleted: boolean, onResult: (err: any, statusCode: number, queries: WorkItemTrackingInterfaces.QueryHierarchyItem[]) => void): void;
    getQuery(project: string, query: string, expand: WorkItemTrackingInterfaces.QueryExpand, depth: number, includeDeleted: boolean, onResult: (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => void): void;
    updateQuery(queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants: boolean, onResult: (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => void): void;
    getRevision(id: number, revisionNumber: number, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, revision: WorkItemTrackingInterfaces.WorkItem) => void): void;
    getRevisions(id: number, top: number, skip: number, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, revisions: WorkItemTrackingInterfaces.WorkItem[]) => void): void;
    evaluateRulesOnField(ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate, onResult: (err: any, statusCode: number) => void): void;
    getUpdate(id: number, updateNumber: number, onResult: (err: any, statusCode: number, update: WorkItemTrackingInterfaces.WorkItemUpdate) => void): void;
    getUpdates(id: number, top: number, skip: number, onResult: (err: any, statusCode: number, updates: WorkItemTrackingInterfaces.WorkItemUpdate[]) => void): void;
    queryByWiql(wiql: WorkItemTrackingInterfaces.Wiql, teamContext: TfsCoreInterfaces.TeamContext, onResult: (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => void): void;
    queryById(id: string, teamContext: TfsCoreInterfaces.TeamContext, onResult: (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => void): void;
    getReportingLinks(project: string, types: string[], watermark: number, startDateTime: Date, onResult: (err: any, statusCode: number, workItemLink: WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch) => void): void;
    getRelationType(relation: string, onResult: (err: any, statusCode: number, workItemRelationType: WorkItemTrackingInterfaces.WorkItemRelationType) => void): void;
    getRelationTypes(onResult: (err: any, statusCode: number, workItemRelationTypes: WorkItemTrackingInterfaces.WorkItemRelationType[]) => void): void;
    readReportingRevisionsGet(project: string, fields: string[], types: string[], watermark: number, startDateTime: Date, includeIdentityRef: boolean, onResult: (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => void): void;
    readReportingRevisionsPost(filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter, project: string, watermark: number, startDateTime: Date, onResult: (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => void): void;
    createWorkItem(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly: boolean, bypassRules: boolean, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    getWorkItem(id: number, fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    getWorkItems(ids: number[], fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, workItems: WorkItemTrackingInterfaces.WorkItem[]) => void): void;
    updateWorkItem(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly: boolean, bypassRules: boolean, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    getWorkItemTemplate(project: string, type: string, fields: string, asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    updateWorkItemTemplate(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly: boolean, bypassRules: boolean, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    getWorkItemTypeCategories(project: string, onResult: (err: any, statusCode: number, workItemTypeCategories: WorkItemTrackingInterfaces.WorkItemTypeCategory[]) => void): void;
    getWorkItemTypeCategory(project: string, category: string, onResult: (err: any, statusCode: number, workItemTypeCategorie: WorkItemTrackingInterfaces.WorkItemTypeCategory) => void): void;
    getWorkItemType(project: string, type: string, onResult: (err: any, statusCode: number, workItemType: WorkItemTrackingInterfaces.WorkItemType) => void): void;
    getWorkItemTypes(project: string, onResult: (err: any, statusCode: number, workItemTypes: WorkItemTrackingInterfaces.WorkItemType[]) => void): void;
    getDependentFields(project: string, type: string, field: string, onResult: (err: any, statusCode: number, workItemTypesField: WorkItemTrackingInterfaces.FieldDependentRule) => void): void;
    exportWorkItemTypeDefinition(project: string, type: string, exportGlobalLists: boolean, onResult: (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.WorkItemTypeTemplate) => void): void;
    updateWorkItemTypeDefinition(updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project: string, onResult: (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.ProvisioningResult) => void): void;
}

export interface IQWorkItemTrackingApi extends basem.QClientApiBase {
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, fileName?: string, uploadType?: string): Q.Promise<WorkItemTrackingInterfaces.AttachmentReference>;
    getAttachmentContent(id: string, fileName?: string): Q.Promise<NodeJS.ReadableStream>;
    getAttachmentZip(id: string, fileName?: string): Q.Promise<NodeJS.ReadableStream>;
    getRootNodes(project: string, depth?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>;
    createOrUpdateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    deleteClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, reclassifyId?: number): Q.Promise<void>;
    getClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, depth?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    updateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    getField(field: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemField>;
    getFields(): Q.Promise<WorkItemTrackingInterfaces.WorkItemField[]>;
    getHistory(id: number, top?: number, skip?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory[]>;
    getHistoryById(id: number, revisionNumber: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory>;
    createQuery(postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    deleteQuery(project: string, query: string): Q.Promise<void>;
    getQueries(project: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]>;
    getQuery(project: string, query: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    updateQuery(queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    getRevision(id: number, revisionNumber: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getRevisions(id: number, top?: number, skip?: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    evaluateRulesOnField(ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate): Q.Promise<void>;
    getUpdate(id: number, updateNumber: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate>;
    getUpdates(id: number, top?: number, skip?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>;
    queryByWiql(wiql: WorkItemTrackingInterfaces.Wiql, teamContext?: TfsCoreInterfaces.TeamContext): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    queryById(id: string, teamContext?: TfsCoreInterfaces.TeamContext): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    getReportingLinks(project?: string, types?: string[], watermark?: number, startDateTime?: Date): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>;
    getRelationType(relation: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType>;
    getRelationTypes(): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>;
    readReportingRevisionsGet(project?: string, fields?: string[], types?: string[], watermark?: number, startDateTime?: Date, includeIdentityRef?: boolean): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    readReportingRevisionsPost(filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter, project?: string, watermark?: number, startDateTime?: Date): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    createWorkItem(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItem(id: number, fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItems(ids: number[], fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    updateWorkItem(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItemTemplate(project: string, type: string, fields?: string, asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    updateWorkItemTemplate(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItemTypeCategories(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>;
    getWorkItemTypeCategory(project: string, category: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory>;
    getWorkItemType(project: string, type: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemType>;
    getWorkItemTypes(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemType[]>;
    getDependentFields(project: string, type: string, field: string): Q.Promise<WorkItemTrackingInterfaces.FieldDependentRule>;
    exportWorkItemTypeDefinition(project?: string, type?: string, exportGlobalLists?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate>;
    updateWorkItemTypeDefinition(updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project?: string): Q.Promise<WorkItemTrackingInterfaces.ProvisioningResult>;
}

export class WorkItemTrackingApi extends basem.ClientApiBase implements IWorkItemTrackingApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-WorkItemTracking-api');
    }

    /**
     * Creates an attachment.
     * 
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} fileName
     * @param {string} uploadType
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.AttachmentReference
     */
    public createAttachment(
        customHeaders: VsoBaseInterfaces.IHeaders,
        contentStream: NodeJS.ReadableStream,
        fileName: string,
        uploadType: string,
        onResult: (err: any, statusCode: number, attachment: WorkItemTrackingInterfaces.AttachmentReference) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            fileName: fileName,
            uploadType: uploadType,
        };
        
        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/octet-stream";

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "e07b5fa4-1499-494d-a496-64b860fd64ff", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.AttachmentReference, responseIsCollection: false };
            
            this.restClient.uploadStream('POST', url, apiVersion, contentStream, customHeaders, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns an attachment
     * 
     * @param {string} id
     * @param {string} fileName
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getAttachmentContent(
        id: string,
        fileName: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            fileName: fileName,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "e07b5fa4-1499-494d-a496-64b860fd64ff", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns an attachment
     * 
     * @param {string} id
     * @param {string} fileName
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getAttachmentZip(
        id: string,
        fileName: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            fileName: fileName,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "e07b5fa4-1499-494d-a496-64b860fd64ff", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} depth
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemClassificationNode[]
     */
    public getRootNodes(
        project: string,
        depth: number,
        onResult: (err: any, statusCode: number, classificationNodes: WorkItemTrackingInterfaces.WorkItemClassificationNode[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            '$depth': depth,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "a70579d1-f53a-48ee-a5be-7be8659023b9", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemClassificationNode
     */
    public createOrUpdateClassificationNode(
        postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode,
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path: string,
        onResult: (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => void
        ): void {

        var routeValues: any = {
            project: project,
            structureGroup: structureGroup,
            path: path
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "5a172953-1b41-49d3-840a-33f79c3ce89f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, postedNode, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param {number} reclassifyId
     * @param onResult callback function
     */
    public deleteClassificationNode(
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path: string,
        reclassifyId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            structureGroup: structureGroup,
            path: path
        };

        var queryValues: any = {
            '$reclassifyId': reclassifyId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "5a172953-1b41-49d3-840a-33f79c3ce89f", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param {number} depth
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemClassificationNode
     */
    public getClassificationNode(
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path: string,
        depth: number,
        onResult: (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => void
        ): void {

        var routeValues: any = {
            project: project,
            structureGroup: structureGroup,
            path: path
        };

        var queryValues: any = {
            '$depth': depth,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "5a172953-1b41-49d3-840a-33f79c3ce89f", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemClassificationNode
     */
    public updateClassificationNode(
        postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode,
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path: string,
        onResult: (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => void
        ): void {

        var routeValues: any = {
            project: project,
            structureGroup: structureGroup,
            path: path
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "5a172953-1b41-49d3-840a-33f79c3ce89f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, postedNode, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} field
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemField
     */
    public getField(
        field: string,
        onResult: (err: any, statusCode: number, field: WorkItemTrackingInterfaces.WorkItemField) => void
        ): void {

        var routeValues: any = {
            field: field
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "b51fd764-e5c2-4b9b-aaf7-3395cf4bdd94", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemField, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemField[]
     */
    public getFields(
        onResult: (err: any, statusCode: number, fields: WorkItemTrackingInterfaces.WorkItemField[]) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "b51fd764-e5c2-4b9b-aaf7-3395cf4bdd94", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemField, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns history of all revision for a given work item ID
     * 
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemHistory[]
     */
    public getHistory(
        id: number,
        top: number,
        skip: number,
        onResult: (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory[]) => void
        ): void {

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "f74eba29-47a1-4152-9381-84040aced527", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemHistory, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns the history value of particular revision
     * 
     * @param {number} id
     * @param {number} revisionNumber
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemHistory
     */
    public getHistoryById(
        id: number,
        revisionNumber: number,
        onResult: (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory) => void
        ): void {

        var routeValues: any = {
            id: id,
            revisionNumber: revisionNumber
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "f74eba29-47a1-4152-9381-84040aced527", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemHistory, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Creates a query, or moves a query.
     * 
     * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} postedQuery - The query to create.
     * @param {string} project - Project ID or project name
     * @param {string} query - The parent path for the query to create.
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.QueryHierarchyItem
     */
    public createQuery(
        postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem,
        project: string,
        query: string,
        onResult: (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => void
        ): void {

        var routeValues: any = {
            project: project,
            query: query
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, postedQuery, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param onResult callback function
     */
    public deleteQuery(
        project: string,
        query: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            query: query
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * Retrieves all queries the user has access to in the current project
     * 
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.QueryExpand} expand
     * @param {number} depth
     * @param {boolean} includeDeleted
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.QueryHierarchyItem[]
     */
    public getQueries(
        project: string,
        expand: WorkItemTrackingInterfaces.QueryExpand,
        depth: number,
        includeDeleted: boolean,
        onResult: (err: any, statusCode: number, queries: WorkItemTrackingInterfaces.QueryHierarchyItem[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            '$expand': expand,
            '$depth': depth,
            '$includeDeleted': includeDeleted,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Retrieves a single query by project and either id or path
     * 
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {WorkItemTrackingInterfaces.QueryExpand} expand
     * @param {number} depth
     * @param {boolean} includeDeleted
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.QueryHierarchyItem
     */
    public getQuery(
        project: string,
        query: string,
        expand: WorkItemTrackingInterfaces.QueryExpand,
        depth: number,
        includeDeleted: boolean,
        onResult: (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => void
        ): void {

        var routeValues: any = {
            project: project,
            query: query
        };

        var queryValues: any = {
            '$expand': expand,
            '$depth': depth,
            '$includeDeleted': includeDeleted,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} queryUpdate
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {boolean} undeleteDescendants
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.QueryHierarchyItem
     */
    public updateQuery(
        queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem,
        project: string,
        query: string,
        undeleteDescendants: boolean,
        onResult: (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => void
        ): void {

        var routeValues: any = {
            project: project,
            query: query
        };

        var queryValues: any = {
            '$undeleteDescendants': undeleteDescendants,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, queryUpdate, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a fully hydrated work item for the requested revision
     * 
     * @param {number} id
     * @param {number} revisionNumber
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    public getRevision(
        id: number,
        revisionNumber: number,
        expand: WorkItemTrackingInterfaces.WorkItemExpand,
        onResult: (err: any, statusCode: number, revision: WorkItemTrackingInterfaces.WorkItem) => void
        ): void {

        var routeValues: any = {
            id: id,
            revisionNumber: revisionNumber
        };

        var queryValues: any = {
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "a00c85a5-80fa-4565-99c3-bcd2181434bb", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItem, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns the list of fully hydrated work item revisions, paged.
     * 
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItem[]
     */
    public getRevisions(
        id: number,
        top: number,
        skip: number,
        expand: WorkItemTrackingInterfaces.WorkItemExpand,
        onResult: (err: any, statusCode: number, revisions: WorkItemTrackingInterfaces.WorkItem[]) => void
        ): void {

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "a00c85a5-80fa-4565-99c3-bcd2181434bb", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItem, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Validates the fields values.
     * 
     * @param {WorkItemTrackingInterfaces.FieldsToEvaluate} ruleEngineInput
     * @param onResult callback function
     */
    public evaluateRulesOnField(
        ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "wit", "1a3a1536-dca6-4509-b9c3-dd9bb2981506", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.FieldsToEvaluate, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, ruleEngineInput, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * Returns a single update for a work item
     * 
     * @param {number} id
     * @param {number} updateNumber
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemUpdate
     */
    public getUpdate(
        id: number,
        updateNumber: number,
        onResult: (err: any, statusCode: number, update: WorkItemTrackingInterfaces.WorkItemUpdate) => void
        ): void {

        var routeValues: any = {
            id: id,
            updateNumber: updateNumber
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "6570bf97-d02c-4a91-8d93-3abe9895b1a9", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemUpdate, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a the deltas between work item revisions
     * 
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemUpdate[]
     */
    public getUpdates(
        id: number,
        top: number,
        skip: number,
        onResult: (err: any, statusCode: number, updates: WorkItemTrackingInterfaces.WorkItemUpdate[]) => void
        ): void {

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "6570bf97-d02c-4a91-8d93-3abe9895b1a9", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemUpdate, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets the results of the query.
     * 
     * @param {WorkItemTrackingInterfaces.Wiql} wiql - The query containing the wiql.
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemQueryResult
     */
    public queryByWiql(
        wiql: WorkItemTrackingInterfaces.Wiql,
        teamContext: TfsCoreInterfaces.TeamContext,
        onResult: (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => void
        ): void {

        var project = teamContext.projectId || teamContext.project;
        var team = teamContext.teamId || teamContext.team;

        var routeValues: any = {
            project: project,
            team: team
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "1a9c53f7-f243-4447-b110-35ef023636e4", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.Wiql, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemQueryResult, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, wiql, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets the results of the query by id.
     * 
     * @param {string} id - The query id.
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemQueryResult
     */
    public queryById(
        id: string,
        teamContext: TfsCoreInterfaces.TeamContext,
        onResult: (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => void
        ): void {

        var project = teamContext.projectId || teamContext.project;
        var team = teamContext.teamId || teamContext.team;

        var routeValues: any = {
            project: project,
            team: team,
            id: id
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "a02355f5-5f8a-4671-8e32-369d23aac83d", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemQueryResult, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Get a batch of work item links
     * 
     * @param {string} project - Project ID or project name
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of links.
     * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch
     */
    public getReportingLinks(
        project: string,
        types: string[],
        watermark: number,
        startDateTime: Date,
        onResult: (err: any, statusCode: number, workItemLink: WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            types: types && types.join(","),
            watermark: watermark,
            startDateTime: startDateTime,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "wit", "b5b5b6d0-0308-40a1-b3f4-b9bb3c66878f", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.ReportingWorkItemLinksBatch, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Gets the work item relation types.
     * 
     * @param {string} relation
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemRelationType
     */
    public getRelationType(
        relation: string,
        onResult: (err: any, statusCode: number, workItemRelationType: WorkItemTrackingInterfaces.WorkItemRelationType) => void
        ): void {

        var routeValues: any = {
            relation: relation
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "f5d33bc9-5b49-4a3c-a9bd-f3cd46dd2165", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemRelationType, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemRelationType[]
     */
    public getRelationTypes(
        onResult: (err: any, statusCode: number, workItemRelationTypes: WorkItemTrackingInterfaces.WorkItemRelationType[]) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "f5d33bc9-5b49-4a3c-a9bd-f3cd46dd2165", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemRelationType, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Get a batch of work item revisions
     * 
     * @param {string} project - Project ID or project name
     * @param {string[]} fields - A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {boolean} includeIdentityRef - Return an identity reference instead of a string value for identity fields.
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch
     */
    public readReportingRevisionsGet(
        project: string,
        fields: string[],
        types: string[],
        watermark: number,
        startDateTime: Date,
        includeIdentityRef: boolean,
        onResult: (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            fields: fields && fields.join(","),
            types: types && types.join(","),
            watermark: watermark,
            startDateTime: startDateTime,
            includeIdentityRef: includeIdentityRef,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "wit", "f828fe59-dd87-495d-a17c-7a8d6211ca6c", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.ReportingWorkItemRevisionsBatch, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Get a batch of work item revisions
     * 
     * @param {WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
     * @param {string} project - Project ID or project name
     * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch
     */
    public readReportingRevisionsPost(
        filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter,
        project: string,
        watermark: number,
        startDateTime: Date,
        onResult: (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            watermark: watermark,
            startDateTime: startDateTime,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "wit", "f828fe59-dd87-495d-a17c-7a8d6211ca6c", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.ReportingWorkItemRevisionsFilter, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.ReportingWorkItemRevisionsBatch, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, filter, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {VSSInterfaces.JsonPatchDocument} document
     * @param {string} project
     * @param {string} type
     * @param {boolean} validateOnly
     * @param {boolean} bypassRules
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    public createWorkItem(
        customHeaders: VsoBaseInterfaces.IHeaders,
        document: VSSInterfaces.JsonPatchDocument,
        project: string,
        type: string,
        validateOnly: boolean,
        bypassRules: boolean,
        onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void
        ): void {

        var routeValues: any = {
            project: project,
            type: type
        };

        var queryValues: any = {
            validateOnly: validateOnly,
            bypassRules: bypassRules,
        };
        
        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/json-patch+json";

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "62d3d110-0047-428c-ad3c-4fe872c91c74", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: VSSInterfaces.TypeInfo.JsonPatchDocument, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItem, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, document, customHeaders, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a single work item
     * 
     * @param {number} id
     * @param {string[]} fields
     * @param {Date} asOf
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    public getWorkItem(
        id: number,
        fields: string[],
        asOf: Date,
        expand: WorkItemTrackingInterfaces.WorkItemExpand,
        onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void
        ): void {

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            fields: fields && fields.join(","),
            asOf: asOf,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItem, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a list of work items
     * 
     * @param {number[]} ids
     * @param {string[]} fields
     * @param {Date} asOf
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItem[]
     */
    public getWorkItems(
        ids: number[],
        fields: string[],
        asOf: Date,
        expand: WorkItemTrackingInterfaces.WorkItemExpand,
        onResult: (err: any, statusCode: number, workItems: WorkItemTrackingInterfaces.WorkItem[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            ids: ids && ids.join(","),
            fields: fields && fields.join(","),
            asOf: asOf,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItem, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {VSSInterfaces.JsonPatchDocument} document
     * @param {number} id
     * @param {boolean} validateOnly
     * @param {boolean} bypassRules
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    public updateWorkItem(
        customHeaders: VsoBaseInterfaces.IHeaders,
        document: VSSInterfaces.JsonPatchDocument,
        id: number,
        validateOnly: boolean,
        bypassRules: boolean,
        onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void
        ): void {

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            validateOnly: validateOnly,
            bypassRules: bypassRules,
        };
        
        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/json-patch+json";

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: VSSInterfaces.TypeInfo.JsonPatchDocument, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItem, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, document, customHeaders, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a single work item from a template
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string} fields
     * @param {Date} asOf
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    public getWorkItemTemplate(
        project: string,
        type: string,
        fields: string,
        asOf: Date,
        expand: WorkItemTrackingInterfaces.WorkItemExpand,
        onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void
        ): void {

        var routeValues: any = {
            project: project,
            type: type
        };

        var queryValues: any = {
            fields: fields,
            asOf: asOf,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "62d3d110-0047-428c-ad3c-4fe872c91c74", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItem, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {VSSInterfaces.JsonPatchDocument} document
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {boolean} validateOnly
     * @param {boolean} bypassRules
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    public updateWorkItemTemplate(
        customHeaders: VsoBaseInterfaces.IHeaders,
        document: VSSInterfaces.JsonPatchDocument,
        project: string,
        type: string,
        validateOnly: boolean,
        bypassRules: boolean,
        onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void
        ): void {

        var routeValues: any = {
            project: project,
            type: type
        };

        var queryValues: any = {
            validateOnly: validateOnly,
            bypassRules: bypassRules,
        };
        
        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/json-patch+json";

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "62d3d110-0047-428c-ad3c-4fe872c91c74", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: VSSInterfaces.TypeInfo.JsonPatchDocument, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItem, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, document, customHeaders, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemTypeCategory[]
     */
    public getWorkItemTypeCategories(
        project: string,
        onResult: (err: any, statusCode: number, workItemTypeCategories: WorkItemTrackingInterfaces.WorkItemTypeCategory[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "9b9f5734-36c8-415e-ba67-f83b45c31408", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemTypeCategory, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a the deltas between work item revisions
     * 
     * @param {string} project - Project ID or project name
     * @param {string} category
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemTypeCategory
     */
    public getWorkItemTypeCategory(
        project: string,
        category: string,
        onResult: (err: any, statusCode: number, workItemTypeCategorie: WorkItemTrackingInterfaces.WorkItemTypeCategory) => void
        ): void {

        var routeValues: any = {
            project: project,
            category: category
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "9b9f5734-36c8-415e-ba67-f83b45c31408", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemTypeCategory, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a the deltas between work item revisions
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemType
     */
    public getWorkItemType(
        project: string,
        type: string,
        onResult: (err: any, statusCode: number, workItemType: WorkItemTrackingInterfaces.WorkItemType) => void
        ): void {

        var routeValues: any = {
            project: project,
            type: type
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "7c8d7a76-4a09-43e8-b5df-bd792f4ac6aa", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemType, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemType[]
     */
    public getWorkItemTypes(
        project: string,
        onResult: (err: any, statusCode: number, workItemTypes: WorkItemTrackingInterfaces.WorkItemType[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "wit", "7c8d7a76-4a09-43e8-b5df-bd792f4ac6aa", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemType, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns the dependent fields for the corresponding workitem type and fieldname
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string} field
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.FieldDependentRule
     */
    public getDependentFields(
        project: string,
        type: string,
        field: string,
        onResult: (err: any, statusCode: number, workItemTypesField: WorkItemTrackingInterfaces.FieldDependentRule) => void
        ): void {

        var routeValues: any = {
            project: project,
            type: type,
            field: field
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "wit", "bd293ce5-3d25-4192-8e67-e8092e879efb", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.FieldDependentRule, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Export work item type
     * 
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {boolean} exportGlobalLists
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.WorkItemTypeTemplate
     */
    public exportWorkItemTypeDefinition(
        project: string,
        type: string,
        exportGlobalLists: boolean,
        onResult: (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.WorkItemTypeTemplate) => void
        ): void {

        var routeValues: any = {
            project: project,
            type: type
        };

        var queryValues: any = {
            exportGlobalLists: exportGlobalLists,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "wit", "8637ac8b-5eb6-4f90-b3f7-4f2ff576a459", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemTypeTemplate, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Add/updates a work item type
     * 
     * @param {WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel} updateModel
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting WorkItemTrackingInterfaces.ProvisioningResult
     */
    public updateWorkItemTypeDefinition(
        updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel,
        project: string,
        onResult: (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.ProvisioningResult) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "wit", "8637ac8b-5eb6-4f90-b3f7-4f2ff576a459", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemTypeTemplateUpdateModel, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.ProvisioningResult, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, updateModel, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QWorkItemTrackingApi extends basem.QClientApiBase implements IQWorkItemTrackingApi {
    api: WorkItemTrackingApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, WorkItemTrackingApi);
    }

    /**
    * Creates an attachment.
    * 
    * @param {NodeJS.ReadableStream} contentStream - Content to upload
    * @param {string} fileName
    * @param {string} uploadType
    */
    public createAttachment(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        fileName?: string,
        uploadType?: string
        ): Q.Promise<WorkItemTrackingInterfaces.AttachmentReference> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.AttachmentReference>();

        this.api.createAttachment(customHeaders, contentStream, fileName, uploadType, (err: any, statusCode: number, attachment: WorkItemTrackingInterfaces.AttachmentReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.AttachmentReference>>deferred.promise;
    }

    /**
    * Returns an attachment
    * 
    * @param {string} id
    * @param {string} fileName
    */
    public getAttachmentContent(
        id: string,
        fileName?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getAttachmentContent(id, fileName, (err: any, statusCode: number, attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * Returns an attachment
    * 
    * @param {string} id
    * @param {string} fileName
    */
    public getAttachmentZip(
        id: string,
        fileName?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getAttachmentZip(id, fileName, (err: any, statusCode: number, attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} depth
    */
    public getRootNodes(
        project: string,
        depth?: number
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>();

        this.api.getRootNodes(project, depth, (err: any, statusCode: number, classificationNodes: WorkItemTrackingInterfaces.WorkItemClassificationNode[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(classificationNodes);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>>deferred.promise;
    }

    /**
    * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode
    * @param {string} project - Project ID or project name
    * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
    * @param {string} path
    */
    public createOrUpdateClassificationNode(
        postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode,
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path?: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemClassificationNode>();

        this.api.createOrUpdateClassificationNode(postedNode, project, structureGroup, path, (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(classificationNode);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
    * @param {string} path
    * @param {number} reclassifyId
    */
    public deleteClassificationNode(
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path?: string,
        reclassifyId?: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteClassificationNode(project, structureGroup, path, reclassifyId, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
    * @param {string} path
    * @param {number} depth
    */
    public getClassificationNode(
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path?: string,
        depth?: number
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemClassificationNode>();

        this.api.getClassificationNode(project, structureGroup, path, depth, (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(classificationNode);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>>deferred.promise;
    }

    /**
    * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode
    * @param {string} project - Project ID or project name
    * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
    * @param {string} path
    */
    public updateClassificationNode(
        postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode,
        project: string,
        structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup,
        path?: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemClassificationNode>();

        this.api.updateClassificationNode(postedNode, project, structureGroup, path, (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(classificationNode);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>>deferred.promise;
    }

    /**
    * @param {string} field
    */
    public getField(
        field: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemField> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemField>();

        this.api.getField(field, (err: any, statusCode: number, field: WorkItemTrackingInterfaces.WorkItemField) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(field);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemField>>deferred.promise;
    }

    /**
    */
    public getFields(
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemField[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemField[]>();

        this.api.getFields((err: any, statusCode: number, fields: WorkItemTrackingInterfaces.WorkItemField[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(fields);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemField[]>>deferred.promise;
    }

    /**
    * Returns history of all revision for a given work item ID
    * 
    * @param {number} id
    * @param {number} top
    * @param {number} skip
    */
    public getHistory(
        id: number,
        top?: number,
        skip?: number
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemHistory[]>();

        this.api.getHistory(id, top, skip, (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(history);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory[]>>deferred.promise;
    }

    /**
    * Returns the history value of particular revision
    * 
    * @param {number} id
    * @param {number} revisionNumber
    */
    public getHistoryById(
        id: number,
        revisionNumber: number
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemHistory>();

        this.api.getHistoryById(id, revisionNumber, (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(history);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory>>deferred.promise;
    }

    /**
    * Creates a query, or moves a query.
    * 
    * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} postedQuery - The query to create.
    * @param {string} project - Project ID or project name
    * @param {string} query - The parent path for the query to create.
    */
    public createQuery(
        postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem,
        project: string,
        query: string
        ): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.QueryHierarchyItem>();

        this.api.createQuery(postedQuery, project, query, (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(querie);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} query
    */
    public deleteQuery(
        project: string,
        query: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteQuery(project, query, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * Retrieves all queries the user has access to in the current project
    * 
    * @param {string} project - Project ID or project name
    * @param {WorkItemTrackingInterfaces.QueryExpand} expand
    * @param {number} depth
    * @param {boolean} includeDeleted
    */
    public getQueries(
        project: string,
        expand?: WorkItemTrackingInterfaces.QueryExpand,
        depth?: number,
        includeDeleted?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.QueryHierarchyItem[]>();

        this.api.getQueries(project, expand, depth, includeDeleted, (err: any, statusCode: number, queries: WorkItemTrackingInterfaces.QueryHierarchyItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queries);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]>>deferred.promise;
    }

    /**
    * Retrieves a single query by project and either id or path
    * 
    * @param {string} project - Project ID or project name
    * @param {string} query
    * @param {WorkItemTrackingInterfaces.QueryExpand} expand
    * @param {number} depth
    * @param {boolean} includeDeleted
    */
    public getQuery(
        project: string,
        query: string,
        expand?: WorkItemTrackingInterfaces.QueryExpand,
        depth?: number,
        includeDeleted?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.QueryHierarchyItem>();

        this.api.getQuery(project, query, expand, depth, includeDeleted, (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(querie);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>>deferred.promise;
    }

    /**
    * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} queryUpdate
    * @param {string} project - Project ID or project name
    * @param {string} query
    * @param {boolean} undeleteDescendants
    */
    public updateQuery(
        queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem,
        project: string,
        query: string,
        undeleteDescendants?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.QueryHierarchyItem>();

        this.api.updateQuery(queryUpdate, project, query, undeleteDescendants, (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(querie);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>>deferred.promise;
    }

    /**
    * Returns a fully hydrated work item for the requested revision
    * 
    * @param {number} id
    * @param {number} revisionNumber
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    public getRevision(
        id: number,
        revisionNumber: number,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItem>();

        this.api.getRevision(id, revisionNumber, expand, (err: any, statusCode: number, revision: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revision);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItem>>deferred.promise;
    }

    /**
    * Returns the list of fully hydrated work item revisions, paged.
    * 
    * @param {number} id
    * @param {number} top
    * @param {number} skip
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    public getRevisions(
        id: number,
        top?: number,
        skip?: number,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItem[]>();

        this.api.getRevisions(id, top, skip, expand, (err: any, statusCode: number, revisions: WorkItemTrackingInterfaces.WorkItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revisions);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>>deferred.promise;
    }

    /**
    * Validates the fields values.
    * 
    * @param {WorkItemTrackingInterfaces.FieldsToEvaluate} ruleEngineInput
    */
    public evaluateRulesOnField(
        ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.evaluateRulesOnField(ruleEngineInput, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
    * Returns a single update for a work item
    * 
    * @param {number} id
    * @param {number} updateNumber
    */
    public getUpdate(
        id: number,
        updateNumber: number
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemUpdate>();

        this.api.getUpdate(id, updateNumber, (err: any, statusCode: number, update: WorkItemTrackingInterfaces.WorkItemUpdate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(update);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate>>deferred.promise;
    }

    /**
    * Returns a the deltas between work item revisions
    * 
    * @param {number} id
    * @param {number} top
    * @param {number} skip
    */
    public getUpdates(
        id: number,
        top?: number,
        skip?: number
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemUpdate[]>();

        this.api.getUpdates(id, top, skip, (err: any, statusCode: number, updates: WorkItemTrackingInterfaces.WorkItemUpdate[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(updates);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>>deferred.promise;
    }

    /**
    * Gets the results of the query.
    * 
    * @param {WorkItemTrackingInterfaces.Wiql} wiql - The query containing the wiql.
    * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
    */
    public queryByWiql(
        wiql: WorkItemTrackingInterfaces.Wiql,
        teamContext?: TfsCoreInterfaces.TeamContext
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemQueryResult>();

        this.api.queryByWiql(wiql, teamContext, (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(wiql);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>>deferred.promise;
    }

    /**
    * Gets the results of the query by id.
    * 
    * @param {string} id - The query id.
    * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
    */
    public queryById(
        id: string,
        teamContext?: TfsCoreInterfaces.TeamContext
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemQueryResult>();

        this.api.queryById(id, teamContext, (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(wiql);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>>deferred.promise;
    }

    /**
    * Get a batch of work item links
    * 
    * @param {string} project - Project ID or project name
    * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
    * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of links.
    * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
    */
    public getReportingLinks(
        project?: string,
        types?: string[],
        watermark?: number,
        startDateTime?: Date
        ): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>();

        this.api.getReportingLinks(project, types, watermark, startDateTime, (err: any, statusCode: number, workItemLink: WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemLink);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>>deferred.promise;
    }

    /**
    * Gets the work item relation types.
    * 
    * @param {string} relation
    */
    public getRelationType(
        relation: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemRelationType>();

        this.api.getRelationType(relation, (err: any, statusCode: number, workItemRelationType: WorkItemTrackingInterfaces.WorkItemRelationType) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemRelationType);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType>>deferred.promise;
    }

    /**
    */
    public getRelationTypes(
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemRelationType[]>();

        this.api.getRelationTypes((err: any, statusCode: number, workItemRelationTypes: WorkItemTrackingInterfaces.WorkItemRelationType[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemRelationTypes);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>>deferred.promise;
    }

    /**
    * Get a batch of work item revisions
    * 
    * @param {string} project - Project ID or project name
    * @param {string[]} fields - A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
    * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
    * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
    * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
    * @param {boolean} includeIdentityRef - Return an identity reference instead of a string value for identity fields.
    */
    public readReportingRevisionsGet(
        project?: string,
        fields?: string[],
        types?: string[],
        watermark?: number,
        startDateTime?: Date,
        includeIdentityRef?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>();

        this.api.readReportingRevisionsGet(project, fields, types, watermark, startDateTime, includeIdentityRef, (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemRevision);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>>deferred.promise;
    }

    /**
    * Get a batch of work item revisions
    * 
    * @param {WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
    * @param {string} project - Project ID or project name
    * @param {number} watermark - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
    * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
    */
    public readReportingRevisionsPost(
        filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter,
        project?: string,
        watermark?: number,
        startDateTime?: Date
        ): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>();

        this.api.readReportingRevisionsPost(filter, project, watermark, startDateTime, (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemRevision);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>>deferred.promise;
    }

    /**
    * @param {VSSInterfaces.JsonPatchDocument} document
    * @param {string} project
    * @param {string} type
    * @param {boolean} validateOnly
    * @param {boolean} bypassRules
    */
    public createWorkItem(
        customHeaders: any,
        document: VSSInterfaces.JsonPatchDocument,
        project: string,
        type: string,
        validateOnly?: boolean,
        bypassRules?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItem>();

        this.api.createWorkItem(customHeaders, document, project, type, validateOnly, bypassRules, (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItem>>deferred.promise;
    }

    /**
    * Returns a single work item
    * 
    * @param {number} id
    * @param {string[]} fields
    * @param {Date} asOf
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    public getWorkItem(
        id: number,
        fields?: string[],
        asOf?: Date,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItem>();

        this.api.getWorkItem(id, fields, asOf, expand, (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItem>>deferred.promise;
    }

    /**
    * Returns a list of work items
    * 
    * @param {number[]} ids
    * @param {string[]} fields
    * @param {Date} asOf
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    public getWorkItems(
        ids: number[],
        fields?: string[],
        asOf?: Date,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItem[]>();

        this.api.getWorkItems(ids, fields, asOf, expand, (err: any, statusCode: number, workItems: WorkItemTrackingInterfaces.WorkItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItems);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>>deferred.promise;
    }

    /**
    * @param {VSSInterfaces.JsonPatchDocument} document
    * @param {number} id
    * @param {boolean} validateOnly
    * @param {boolean} bypassRules
    */
    public updateWorkItem(
        customHeaders: any,
        document: VSSInterfaces.JsonPatchDocument,
        id: number,
        validateOnly?: boolean,
        bypassRules?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItem>();

        this.api.updateWorkItem(customHeaders, document, id, validateOnly, bypassRules, (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItem>>deferred.promise;
    }

    /**
    * Returns a single work item from a template
    * 
    * @param {string} project - Project ID or project name
    * @param {string} type
    * @param {string} fields
    * @param {Date} asOf
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    public getWorkItemTemplate(
        project: string,
        type: string,
        fields?: string,
        asOf?: Date,
        expand?: WorkItemTrackingInterfaces.WorkItemExpand
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItem>();

        this.api.getWorkItemTemplate(project, type, fields, asOf, expand, (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItem>>deferred.promise;
    }

    /**
    * @param {VSSInterfaces.JsonPatchDocument} document
    * @param {string} project - Project ID or project name
    * @param {string} type
    * @param {boolean} validateOnly
    * @param {boolean} bypassRules
    */
    public updateWorkItemTemplate(
        customHeaders: any,
        document: VSSInterfaces.JsonPatchDocument,
        project: string,
        type: string,
        validateOnly?: boolean,
        bypassRules?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItem>();

        this.api.updateWorkItemTemplate(customHeaders, document, project, type, validateOnly, bypassRules, (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItem>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public getWorkItemTypeCategories(
        project: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>();

        this.api.getWorkItemTypeCategories(project, (err: any, statusCode: number, workItemTypeCategories: WorkItemTrackingInterfaces.WorkItemTypeCategory[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypeCategories);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>>deferred.promise;
    }

    /**
    * Returns a the deltas between work item revisions
    * 
    * @param {string} project - Project ID or project name
    * @param {string} category
    */
    public getWorkItemTypeCategory(
        project: string,
        category: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemTypeCategory>();

        this.api.getWorkItemTypeCategory(project, category, (err: any, statusCode: number, workItemTypeCategorie: WorkItemTrackingInterfaces.WorkItemTypeCategory) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypeCategorie);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory>>deferred.promise;
    }

    /**
    * Returns a the deltas between work item revisions
    * 
    * @param {string} project - Project ID or project name
    * @param {string} type
    */
    public getWorkItemType(
        project: string,
        type: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemType> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemType>();

        this.api.getWorkItemType(project, type, (err: any, statusCode: number, workItemType: WorkItemTrackingInterfaces.WorkItemType) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemType);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemType>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public getWorkItemTypes(
        project: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemType[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemType[]>();

        this.api.getWorkItemTypes(project, (err: any, statusCode: number, workItemTypes: WorkItemTrackingInterfaces.WorkItemType[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypes);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemType[]>>deferred.promise;
    }

    /**
    * Returns the dependent fields for the corresponding workitem type and fieldname
    * 
    * @param {string} project - Project ID or project name
    * @param {string} type
    * @param {string} field
    */
    public getDependentFields(
        project: string,
        type: string,
        field: string
        ): Q.Promise<WorkItemTrackingInterfaces.FieldDependentRule> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.FieldDependentRule>();

        this.api.getDependentFields(project, type, field, (err: any, statusCode: number, workItemTypesField: WorkItemTrackingInterfaces.FieldDependentRule) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypesField);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.FieldDependentRule>>deferred.promise;
    }

    /**
    * Export work item type
    * 
    * @param {string} project - Project ID or project name
    * @param {string} type
    * @param {boolean} exportGlobalLists
    */
    public exportWorkItemTypeDefinition(
        project?: string,
        type?: string,
        exportGlobalLists?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemTypeTemplate>();

        this.api.exportWorkItemTypeDefinition(project, type, exportGlobalLists, (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.WorkItemTypeTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypeTemplate);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate>>deferred.promise;
    }

    /**
    * Add/updates a work item type
    * 
    * @param {WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel} updateModel
    * @param {string} project - Project ID or project name
    */
    public updateWorkItemTypeDefinition(
        updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel,
        project?: string
        ): Q.Promise<WorkItemTrackingInterfaces.ProvisioningResult> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.ProvisioningResult>();

        this.api.updateWorkItemTypeDefinition(updateModel, project, (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.ProvisioningResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypeTemplate);
            }
        });

        return <Q.Promise<WorkItemTrackingInterfaces.ProvisioningResult>>deferred.promise;
    }

}
