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
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, fileName?: string, uploadType?: string): Q.Promise<WorkItemTrackingInterfaces.AttachmentReference>;
    getAttachmentContent(id: string, fileName?: string): Q.Promise<NodeJS.ReadableStream>;
    getAttachmentZip(id: string, fileName?: string): Q.Promise<NodeJS.ReadableStream>;
    getRootNodes(project: string, depth?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>;
    createOrUpdateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    deleteClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, reclassifyId?: number): Q.Promise<void>;
    getClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, depth?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    updateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    getComment(id: number, revision: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemComment>;
    getComments(id: number, fromRevision?: number, top?: number, order?: WorkItemTrackingInterfaces.CommentSortOrder): Q.Promise<WorkItemTrackingInterfaces.WorkItemComments>;
    getField(field: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemField>;
    getFields(expand?: WorkItemTrackingInterfaces.GetFieldsExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItemField[]>;
    getHistory(id: number, top?: number, skip?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory[]>;
    getHistoryById(id: number, revisionNumber: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory>;
    createQuery(postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    deleteQuery(project: string, query: string): Q.Promise<void>;
    getQueries(project: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]>;
    getQuery(project: string, query: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    updateQuery(queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    destroyWorkItem(id: number, project?: string): Q.Promise<void>;
    getDeletedWorkItem(id: number, project?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemDelete>;
    getDeletedWorkItems(project?: string, ids?: number[]): Q.Promise<WorkItemTrackingInterfaces.WorkItemDeleteReference[]>;
    restoreWorkItem(payload: WorkItemTrackingInterfaces.WorkItemDeleteUpdate, id: number, project?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemDelete>;
    getRevision(id: number, revisionNumber: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getRevisions(id: number, top?: number, skip?: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    evaluateRulesOnField(ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate): Q.Promise<void>;
    createTemplate(template: WorkItemTrackingInterfaces.WorkItemTemplate, project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplate>;
    getTemplates(project: string, ownerId: string, workitemtypename?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplateReference[]>;
    deleteTemplate(project: string, templateId: string): Q.Promise<void>;
    getTemplate(project: string, templateId: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplate>;
    replaceTemplate(templateContent: WorkItemTrackingInterfaces.WorkItemTemplateReplaceContent, project: string, templateId: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplate>;
    getUpdate(id: number, updateNumber: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate>;
    getUpdates(id: number, top?: number, skip?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>;
    queryByWiql(wiql: WorkItemTrackingInterfaces.Wiql, teamContext?: TfsCoreInterfaces.TeamContext, timePrecision?: boolean, top?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    queryById(id: string, teamContext?: TfsCoreInterfaces.TeamContext, timePrecision?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    getReportingLinks(project?: string, types?: string[], continuationToken?: string, startDateTime?: Date): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>;
    getRelationType(relation: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType>;
    getRelationTypes(): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>;
    readReportingRevisionsGet(project?: string, fields?: string[], types?: string[], continuationToken?: string, startDateTime?: Date, includeIdentityRef?: boolean, includeDeleted?: boolean, includeTagRef?: boolean, includeLatestOnly?: boolean, expand?: WorkItemTrackingInterfaces.ReportingRevisionsExpand): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    readReportingRevisionsPost(filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter, project?: string, continuationToken?: string, startDateTime?: Date, expand?: WorkItemTrackingInterfaces.ReportingRevisionsExpand): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    deleteWorkItem(id: number, destroy?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItemDelete>;
    getWorkItem(id: number, fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItems(ids: number[], fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    updateWorkItem(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    createWorkItem(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItemTemplate(project: string, type: string, fields?: string, asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
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
     */
    public createAttachment(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        fileName?: string,
        uploadType?: string
        ): Q.Promise<WorkItemTrackingInterfaces.AttachmentReference> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.AttachmentReference>();

        var onResult = (err: any, statusCode: number, attachment: WorkItemTrackingInterfaces.AttachmentReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            fileName: fileName,
            uploadType: uploadType,
        };
        
        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/octet-stream";

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "e07b5fa4-1499-494d-a496-64b860fd64ff", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.uploadStream('POST', url, apiVersion, contentStream, customHeaders, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            fileName: fileName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "e07b5fa4-1499-494d-a496-64b860fd64ff", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            fileName: fileName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "e07b5fa4-1499-494d-a496-64b860fd64ff", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, classificationNodes: WorkItemTrackingInterfaces.WorkItemClassificationNode[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(classificationNodes);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            '$depth': depth,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "a70579d1-f53a-48ee-a5be-7be8659023b9", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(classificationNode);
            }
        };

        var routeValues: any = {
            project: project,
            structureGroup: structureGroup,
            path: path
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "5a172953-1b41-49d3-840a-33f79c3ce89f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, postedNode, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            structureGroup: structureGroup,
            path: path
        };

        var queryValues: any = {
            '$reclassifyId': reclassifyId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "5a172953-1b41-49d3-840a-33f79c3ce89f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(classificationNode);
            }
        };

        var routeValues: any = {
            project: project,
            structureGroup: structureGroup,
            path: path
        };

        var queryValues: any = {
            '$depth': depth,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "5a172953-1b41-49d3-840a-33f79c3ce89f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(classificationNode);
            }
        };

        var routeValues: any = {
            project: project,
            structureGroup: structureGroup,
            path: path
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "5a172953-1b41-49d3-840a-33f79c3ce89f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemClassificationNode, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, postedNode, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>>deferred.promise;
    }

    /**
     * Returns comment for a work item at the specified revision
     * 
     * @param {number} id
     * @param {number} revision
     */
    public getComment(
        id: number,
        revision: number
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemComment> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemComment>();

        var onResult = (err: any, statusCode: number, comment: WorkItemTrackingInterfaces.WorkItemComment) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(comment);
            }
        };

        var routeValues: any = {
            id: id,
            revision: revision
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "19335ae7-22f7-4308-93d8-261f9384b7cf", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemComment, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemComment>>deferred.promise;
    }

    /**
     * Returns specified number of comments for a work item from the specified revision
     * 
     * @param {number} id - Work item id
     * @param {number} fromRevision - Revision from which comments are to be fetched
     * @param {number} top - The number of comments to return
     * @param {WorkItemTrackingInterfaces.CommentSortOrder} order - Ascending or descending by revision id
     */
    public getComments(
        id: number,
        fromRevision?: number,
        top?: number,
        order?: WorkItemTrackingInterfaces.CommentSortOrder
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemComments> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemComments>();

        var onResult = (err: any, statusCode: number, comment: WorkItemTrackingInterfaces.WorkItemComments) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(comment);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            fromRevision: fromRevision,
            '$top': top,
            order: order,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "19335ae7-22f7-4308-93d8-261f9384b7cf", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemComments, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemComments>>deferred.promise;
    }

    /**
     * Gets information on a specific field.
     * 
     * @param {string} field - Field name
     */
    public getField(
        field: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemField> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemField>();

        var onResult = (err: any, statusCode: number, field: WorkItemTrackingInterfaces.WorkItemField) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(field);
            }
        };

        var routeValues: any = {
            field: field
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "b51fd764-e5c2-4b9b-aaf7-3395cf4bdd94", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemField, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemField>>deferred.promise;
    }

    /**
     * Returns information for all fields.
     * 
     * @param {WorkItemTrackingInterfaces.GetFieldsExpand} expand - Use ExtensionFields to include extension fields, otherwise exclude them. Unless the feature flag for this parameter is enabled, extension fields are always included.
     */
    public getFields(
        expand?: WorkItemTrackingInterfaces.GetFieldsExpand
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemField[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemField[]>();

        var onResult = (err: any, statusCode: number, fields: WorkItemTrackingInterfaces.WorkItemField[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(fields);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "b51fd764-e5c2-4b9b-aaf7-3395cf4bdd94", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemField, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(history);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "f74eba29-47a1-4152-9381-84040aced527", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemHistory, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(history);
            }
        };

        var routeValues: any = {
            id: id,
            revisionNumber: revisionNumber
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "f74eba29-47a1-4152-9381-84040aced527", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemHistory, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(querie);
            }
        };

        var routeValues: any = {
            project: project,
            query: query
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, postedQuery, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            query: query
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
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

        var onResult = (err: any, statusCode: number, queries: WorkItemTrackingInterfaces.QueryHierarchyItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(queries);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            '$expand': expand,
            '$depth': depth,
            '$includeDeleted': includeDeleted,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(querie);
            }
        };

        var routeValues: any = {
            project: project,
            query: query
        };

        var queryValues: any = {
            '$expand': expand,
            '$depth': depth,
            '$includeDeleted': includeDeleted,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(querie);
            }
        };

        var routeValues: any = {
            project: project,
            query: query
        };

        var queryValues: any = {
            '$undeleteDescendants': undeleteDescendants,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "a67d190c-c41f-424b-814d-0e906f659301", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.QueryHierarchyItem, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, queryUpdate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>>deferred.promise;
    }

    /**
     * @param {number} id
     * @param {string} project - Project ID or project name
     */
    public destroyWorkItem(
        id: number,
        project?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            id: id
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "b70d8d39-926c-465e-b927-b1bf0e5ca0e0", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {number} id
     * @param {string} project - Project ID or project name
     */
    public getDeletedWorkItem(
        id: number,
        project?: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemDelete> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemDelete>();

        var onResult = (err: any, statusCode: number, recyclebin: WorkItemTrackingInterfaces.WorkItemDelete) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(recyclebin);
            }
        };

        var routeValues: any = {
            project: project,
            id: id
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "b70d8d39-926c-465e-b927-b1bf0e5ca0e0", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemDelete>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number[]} ids
     */
    public getDeletedWorkItems(
        project?: string,
        ids?: number[]
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemDeleteReference[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemDeleteReference[]>();

        var onResult = (err: any, statusCode: number, recyclebin: WorkItemTrackingInterfaces.WorkItemDeleteReference[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(recyclebin);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            ids: ids && ids.join(","),
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "b70d8d39-926c-465e-b927-b1bf0e5ca0e0", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemDeleteReference[]>>deferred.promise;
    }

    /**
     * @param {WorkItemTrackingInterfaces.WorkItemDeleteUpdate} payload
     * @param {number} id
     * @param {string} project - Project ID or project name
     */
    public restoreWorkItem(
        payload: WorkItemTrackingInterfaces.WorkItemDeleteUpdate,
        id: number,
        project?: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemDelete> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemDelete>();

        var onResult = (err: any, statusCode: number, recyclebin: WorkItemTrackingInterfaces.WorkItemDelete) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(recyclebin);
            }
        };

        var routeValues: any = {
            project: project,
            id: id
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "b70d8d39-926c-465e-b927-b1bf0e5ca0e0", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, payload, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemDelete>>deferred.promise;
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

        var onResult = (err: any, statusCode: number, revision: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revision);
            }
        };

        var routeValues: any = {
            id: id,
            revisionNumber: revisionNumber
        };

        var queryValues: any = {
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "a00c85a5-80fa-4565-99c3-bcd2181434bb", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, revisions: WorkItemTrackingInterfaces.WorkItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(revisions);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "a00c85a5-80fa-4565-99c3-bcd2181434bb", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "1a3a1536-dca6-4509-b9c3-dd9bb2981506", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, ruleEngineInput, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {WorkItemTrackingInterfaces.WorkItemTemplate} template
     * @param {string} project - Project ID or project name
     */
    public createTemplate(
        template: WorkItemTrackingInterfaces.WorkItemTemplate,
        project: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplate> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemTemplate>();

        var onResult = (err: any, statusCode: number, template: WorkItemTrackingInterfaces.WorkItemTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(template);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "6a90345f-a676-4969-afce-8e163e1d5642", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, template, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplate>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} ownerId
     * @param {string} workitemtypename
     */
    public getTemplates(
        project: string,
        ownerId: string,
        workitemtypename?: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplateReference[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemTemplateReference[]>();

        var onResult = (err: any, statusCode: number, templates: WorkItemTrackingInterfaces.WorkItemTemplateReference[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(templates);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            ownerId: ownerId,
            workitemtypename: workitemtypename,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "6a90345f-a676-4969-afce-8e163e1d5642", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplateReference[]>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     */
    public deleteTemplate(
        project: string,
        templateId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            templateId: templateId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "fb10264a-8836-48a0-8033-1b0ccd2748d5", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     */
    public getTemplate(
        project: string,
        templateId: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplate> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemTemplate>();

        var onResult = (err: any, statusCode: number, template: WorkItemTrackingInterfaces.WorkItemTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(template);
            }
        };

        var routeValues: any = {
            project: project,
            templateId: templateId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "fb10264a-8836-48a0-8033-1b0ccd2748d5", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplate>>deferred.promise;
    }

    /**
     * @param {WorkItemTrackingInterfaces.WorkItemTemplateReplaceContent} templateContent
     * @param {string} project - Project ID or project name
     * @param {string} templateId
     */
    public replaceTemplate(
        templateContent: WorkItemTrackingInterfaces.WorkItemTemplateReplaceContent,
        project: string,
        templateId: string
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplate> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemTemplate>();

        var onResult = (err: any, statusCode: number, template: WorkItemTrackingInterfaces.WorkItemTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(template);
            }
        };

        var routeValues: any = {
            project: project,
            templateId: templateId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "fb10264a-8836-48a0-8033-1b0ccd2748d5", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, templateContent, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemTemplate>>deferred.promise;
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

        var onResult = (err: any, statusCode: number, update: WorkItemTrackingInterfaces.WorkItemUpdate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(update);
            }
        };

        var routeValues: any = {
            id: id,
            updateNumber: updateNumber
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "6570bf97-d02c-4a91-8d93-3abe9895b1a9", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemUpdate, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, updates: WorkItemTrackingInterfaces.WorkItemUpdate[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(updates);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "6570bf97-d02c-4a91-8d93-3abe9895b1a9", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemUpdate, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>>deferred.promise;
    }

    /**
     * Gets the results of the query.
     * 
     * @param {WorkItemTrackingInterfaces.Wiql} wiql - The query containing the wiql.
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {boolean} timePrecision
     * @param {number} top
     */
    public queryByWiql(
        wiql: WorkItemTrackingInterfaces.Wiql,
        teamContext?: TfsCoreInterfaces.TeamContext,
        timePrecision?: boolean,
        top?: number
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemQueryResult>();

        var onResult = (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(wiql);
            }
        };

        var project = teamContext.projectId || teamContext.project;
        var team = teamContext.teamId || teamContext.team;

        var routeValues: any = {
            project: project,
            team: team
        };

        var queryValues: any = {
            timePrecision: timePrecision,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "1a9c53f7-f243-4447-b110-35ef023636e4", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemQueryResult, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, wiql, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>>deferred.promise;
    }

    /**
     * Gets the results of the query by id.
     * 
     * @param {string} id - The query id.
     * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
     * @param {boolean} timePrecision
     */
    public queryById(
        id: string,
        teamContext?: TfsCoreInterfaces.TeamContext,
        timePrecision?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemQueryResult>();

        var onResult = (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(wiql);
            }
        };

        var project = teamContext.projectId || teamContext.project;
        var team = teamContext.teamId || teamContext.team;

        var routeValues: any = {
            project: project,
            team: team,
            id: id
        };

        var queryValues: any = {
            timePrecision: timePrecision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "a02355f5-5f8a-4671-8e32-369d23aac83d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemQueryResult, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>>deferred.promise;
    }

    /**
     * Get a batch of work item links
     * 
     * @param {string} project - Project ID or project name
     * @param {string[]} types - A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
     * @param {string} continuationToken - Specifies the continuationToken to start the batch from. Omit this parameter to get the first batch of links.
     * @param {Date} startDateTime - Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
     */
    public getReportingLinks(
        project?: string,
        types?: string[],
        continuationToken?: string,
        startDateTime?: Date
        ): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>();

        var onResult = (err: any, statusCode: number, workItemLink: WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemLink);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            types: types && types.join(","),
            continuationToken: continuationToken,
            startDateTime: startDateTime,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "b5b5b6d0-0308-40a1-b3f4-b9bb3c66878f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItemRelationType: WorkItemTrackingInterfaces.WorkItemRelationType) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemRelationType);
            }
        };

        var routeValues: any = {
            relation: relation
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "f5d33bc9-5b49-4a3c-a9bd-f3cd46dd2165", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType>>deferred.promise;
    }

    /**
     */
    public getRelationTypes(
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemRelationType[]>();

        var onResult = (err: any, statusCode: number, workItemRelationTypes: WorkItemTrackingInterfaces.WorkItemRelationType[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemRelationTypes);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "f5d33bc9-5b49-4a3c-a9bd-f3cd46dd2165", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>>deferred.promise;
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
     * @param {WorkItemTrackingInterfaces.ReportingRevisionsExpand} expand
     */
    public readReportingRevisionsGet(
        project?: string,
        fields?: string[],
        types?: string[],
        continuationToken?: string,
        startDateTime?: Date,
        includeIdentityRef?: boolean,
        includeDeleted?: boolean,
        includeTagRef?: boolean,
        includeLatestOnly?: boolean,
        expand?: WorkItemTrackingInterfaces.ReportingRevisionsExpand
        ): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>();

        var onResult = (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemRevision);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            fields: fields && fields.join(","),
            types: types && types.join(","),
            continuationToken: continuationToken,
            startDateTime: startDateTime,
            includeIdentityRef: includeIdentityRef,
            includeDeleted: includeDeleted,
            includeTagRef: includeTagRef,
            includeLatestOnly: includeLatestOnly,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "f828fe59-dd87-495d-a17c-7a8d6211ca6c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>>deferred.promise;
    }

    /**
     * Get a batch of work item revisions
     * 
     * @param {WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter} filter - An object that contains request settings: field filter, type filter, identity format
     * @param {string} project - Project ID or project name
     * @param {string} continuationToken - Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
     * @param {Date} startDateTime - Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
     * @param {WorkItemTrackingInterfaces.ReportingRevisionsExpand} expand
     */
    public readReportingRevisionsPost(
        filter: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsFilter,
        project?: string,
        continuationToken?: string,
        startDateTime?: Date,
        expand?: WorkItemTrackingInterfaces.ReportingRevisionsExpand
        ): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>();

        var onResult = (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemRevision);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            continuationToken: continuationToken,
            startDateTime: startDateTime,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "f828fe59-dd87-495d-a17c-7a8d6211ca6c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, filter, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>>deferred.promise;
    }

    /**
     * @param {number} id
     * @param {boolean} destroy
     */
    public deleteWorkItem(
        id: number,
        destroy?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItemDelete> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItemDelete>();

        var onResult = (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItemDelete) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            destroy: destroy,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.WorkItemDelete>>deferred.promise;
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

        var onResult = (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            fields: fields && fields.join(","),
            asOf: asOf,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItems: WorkItemTrackingInterfaces.WorkItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItems);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            ids: ids && ids.join(","),
            fields: fields && fields.join(","),
            asOf: asOf,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            validateOnly: validateOnly,
            bypassRules: bypassRules,
        };
        
        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/json-patch+json";

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "72c7ddf8-2cdc-4f60-90cd-ab71c14a399b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, document, customHeaders, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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
    public createWorkItem(
        customHeaders: any,
        document: VSSInterfaces.JsonPatchDocument,
        project: string,
        type: string,
        validateOnly?: boolean,
        bypassRules?: boolean
        ): Q.Promise<WorkItemTrackingInterfaces.WorkItem> {
    
        var deferred = Q.defer<WorkItemTrackingInterfaces.WorkItem>();

        var onResult = (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        };

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

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "62d3d110-0047-428c-ad3c-4fe872c91c74", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, document, customHeaders, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItem);
            }
        };

        var routeValues: any = {
            project: project,
            type: type
        };

        var queryValues: any = {
            fields: fields,
            asOf: asOf,
            '$expand': expand,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "62d3d110-0047-428c-ad3c-4fe872c91c74", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItemTypeCategories: WorkItemTrackingInterfaces.WorkItemTypeCategory[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypeCategories);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "9b9f5734-36c8-415e-ba67-f83b45c31408", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItemTypeCategorie: WorkItemTrackingInterfaces.WorkItemTypeCategory) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypeCategorie);
            }
        };

        var routeValues: any = {
            project: project,
            category: category
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "9b9f5734-36c8-415e-ba67-f83b45c31408", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItemType: WorkItemTrackingInterfaces.WorkItemType) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemType);
            }
        };

        var routeValues: any = {
            project: project,
            type: type
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "7c8d7a76-4a09-43e8-b5df-bd792f4ac6aa", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItemTypes: WorkItemTrackingInterfaces.WorkItemType[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypes);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "wit", "7c8d7a76-4a09-43e8-b5df-bd792f4ac6aa", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItemTypesField: WorkItemTrackingInterfaces.FieldDependentRule) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypesField);
            }
        };

        var routeValues: any = {
            project: project,
            type: type,
            field: field
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "bd293ce5-3d25-4192-8e67-e8092e879efb", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.WorkItemTypeTemplate) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypeTemplate);
            }
        };

        var routeValues: any = {
            project: project,
            type: type
        };

        var queryValues: any = {
            exportGlobalLists: exportGlobalLists,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "8637ac8b-5eb6-4f90-b3f7-4f2ff576a459", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
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

        var onResult = (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.ProvisioningResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(workItemTypeTemplate);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "wit", "8637ac8b-5eb6-4f90-b3f7-4f2ff576a459", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: WorkItemTrackingInterfaces.TypeInfo.WorkItemTypeTemplateUpdateModel, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, updateModel, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<WorkItemTrackingInterfaces.ProvisioningResult>>deferred.promise;
    }

}
