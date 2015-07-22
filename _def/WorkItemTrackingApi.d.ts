/// <reference path="../../src/api/definitions/node.d.ts" />
/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
import WorkItemTrackingInterfaces = require("./interfaces/WorkItemTrackingInterfaces");
export interface IWorkItemTrackingApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    createAttachment(contentStream: NodeJS.ReadableStream, customHeaders: any, content: string, fileName: string, uploadType: string, onResult: (err: any, statusCode: number, attachment: WorkItemTrackingInterfaces.AttachmentReference) => void): void;
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
    queryByWiql(wiql: WorkItemTrackingInterfaces.Wiql, project: string, onResult: (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => void): void;
    queryById(id: string, project: string, onResult: (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => void): void;
    getReportingLinks(project: string, watermark: number, onResult: (err: any, statusCode: number, workItemLink: WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch) => void): void;
    getRelationType(relation: string, onResult: (err: any, statusCode: number, workItemRelationType: WorkItemTrackingInterfaces.WorkItemRelationType) => void): void;
    getRelationTypes(onResult: (err: any, statusCode: number, workItemRelationTypes: WorkItemTrackingInterfaces.WorkItemRelationType[]) => void): void;
    readReportingRevisionsGet(project: string, fields: string[], watermark: number, onResult: (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => void): void;
    readReportingRevisionsPost(fieldsList: string[], project: string, watermark: number, onResult: (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => void): void;
    getWorkItem(id: number, fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    getWorkItems(ids: number[], fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, workItems: WorkItemTrackingInterfaces.WorkItem[]) => void): void;
    updateWorkItem(document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly: boolean, bypassRules: boolean, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    getWorkItemTemplate(project: string, type: string, fields: string, asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    updateWorkItemTemplate(document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly: boolean, bypassRules: boolean, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    getWorkItemTypeCategories(project: string, onResult: (err: any, statusCode: number, workItemTypeCategories: WorkItemTrackingInterfaces.WorkItemTypeCategory[]) => void): void;
    getWorkItemTypeCategory(project: string, category: string, onResult: (err: any, statusCode: number, workItemTypeCategorie: WorkItemTrackingInterfaces.WorkItemTypeCategory) => void): void;
    getWorkItemType(project: string, type: string, onResult: (err: any, statusCode: number, workItemType: WorkItemTrackingInterfaces.WorkItemType) => void): void;
    getWorkItemTypes(project: string, onResult: (err: any, statusCode: number, workItemTypes: WorkItemTrackingInterfaces.WorkItemType[]) => void): void;
    getDependentFields(project: string, type: string, field: string, onResult: (err: any, statusCode: number, workItemTypesField: WorkItemTrackingInterfaces.FieldDependentRule) => void): void;
    exportWorkItemTypeDefinition(project: string, type: string, exportGlobalLists: boolean, onResult: (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.WorkItemTypeTemplate) => void): void;
    updateWorkItemTypeDefinition(updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project: string, onResult: (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.ProvisioningResult) => void): void;
}
export interface IQWorkItemTrackingApi {
    connect(): Q.Promise<void>;
    createAttachment(contentStream: NodeJS.ReadableStream, customHeaders: any, content: string, fileName?: string, uploadType?: string): Q.Promise<WorkItemTrackingInterfaces.AttachmentReference>;
    getRootNodes(project: string, depth?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>;
    createOrUpdateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    getClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, depth?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    updateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    getField(field: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemField>;
    getFields(): Q.Promise<WorkItemTrackingInterfaces.WorkItemField[]>;
    getHistory(id: number, top?: number, skip?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory[]>;
    getHistoryById(id: number, revisionNumber: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory>;
    createQuery(postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    getQueries(project: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]>;
    getQuery(project: string, query: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    updateQuery(queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    getRevision(id: number, revisionNumber: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getRevisions(id: number, top?: number, skip?: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    getUpdate(id: number, updateNumber: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate>;
    getUpdates(id: number, top?: number, skip?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>;
    queryByWiql(wiql: WorkItemTrackingInterfaces.Wiql, project?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    queryById(id: string, project?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    getReportingLinks(project?: string, watermark?: number): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>;
    getRelationType(relation: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType>;
    getRelationTypes(): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>;
    readReportingRevisionsGet(project?: string, fields?: string[], watermark?: number): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    readReportingRevisionsPost(fieldsList: string[], project?: string, watermark?: number): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    getWorkItem(id: number, fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItems(ids: number[], fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    updateWorkItem(document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItemTemplate(project: string, type: string, fields?: string, asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    updateWorkItemTemplate(document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    getWorkItemTypeCategories(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>;
    getWorkItemTypeCategory(project: string, category: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory>;
    getWorkItemType(project: string, type: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemType>;
    getWorkItemTypes(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemType[]>;
    getDependentFields(project: string, type: string, field: string): Q.Promise<WorkItemTrackingInterfaces.FieldDependentRule>;
    exportWorkItemTypeDefinition(project?: string, type?: string, exportGlobalLists?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate>;
    updateWorkItemTypeDefinition(updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project?: string): Q.Promise<WorkItemTrackingInterfaces.ProvisioningResult>;
}
export declare class WorkItemTrackingApi implements IWorkItemTrackingApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    setUserAgent(userAgent: string): void;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    /**
     * Creates an attachment.
     *
     * @param {string} content
     * @param {string} fileName
     * @param {string} uploadType
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.AttachmentReference
     */
    createAttachment(contentStream: NodeJS.ReadableStream, customHeaders: any, content: string, fileName: string, uploadType: string, onResult: (err: any, statusCode: number, attachment: WorkItemTrackingInterfaces.AttachmentReference) => void): void;
    /**
     * Returns an attachment
     *
     * @param {string} id
     * @param {string} fileName
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getAttachmentContent(id: string, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Returns an attachment
     *
     * @param {string} id
     * @param {string} fileName
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getAttachmentZip(id: string, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} depth
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemClassificationNode[]
     */
    getRootNodes(project: string, depth: number, onResult: (err: any, statusCode: number, classificationNodes: WorkItemTrackingInterfaces.WorkItemClassificationNode[]) => void): void;
    /**
     * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemClassificationNode
     */
    createOrUpdateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, onResult: (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param {number} reclassifyId
     * @param onResult cllback function
     */
    deleteClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, reclassifyId: number, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param {number} depth
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemClassificationNode
     */
    getClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, depth: number, onResult: (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => void): void;
    /**
     * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
     * @param {string} path
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemClassificationNode
     */
    updateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path: string, onResult: (err: any, statusCode: number, classificationNode: WorkItemTrackingInterfaces.WorkItemClassificationNode) => void): void;
    /**
     * @param {string} field
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemField
     */
    getField(field: string, onResult: (err: any, statusCode: number, field: WorkItemTrackingInterfaces.WorkItemField) => void): void;
    /**
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemField[]
     */
    getFields(onResult: (err: any, statusCode: number, fields: WorkItemTrackingInterfaces.WorkItemField[]) => void): void;
    /**
     * Returns history of all revision for a given work item ID
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemHistory[]
     */
    getHistory(id: number, top: number, skip: number, onResult: (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory[]) => void): void;
    /**
     * Returns the history value of particular revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemHistory
     */
    getHistoryById(id: number, revisionNumber: number, onResult: (err: any, statusCode: number, history: WorkItemTrackingInterfaces.WorkItemHistory) => void): void;
    /**
     * Creates a query, or moves a query.
     *
     * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} postedQuery - The query to create.
     * @param {string} project - Project ID or project name
     * @param {string} query - The parent path for the query to create.
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.QueryHierarchyItem
     */
    createQuery(postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, onResult: (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param onResult cllback function
     */
    deleteQuery(project: string, query: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * Retrieves all queries the user has access to in the current project
     *
     * @param {string} project - Project ID or project name
     * @param {WorkItemTrackingInterfaces.QueryExpand} expand
     * @param {number} depth
     * @param {boolean} includeDeleted
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.QueryHierarchyItem[]
     */
    getQueries(project: string, expand: WorkItemTrackingInterfaces.QueryExpand, depth: number, includeDeleted: boolean, onResult: (err: any, statusCode: number, queries: WorkItemTrackingInterfaces.QueryHierarchyItem[]) => void): void;
    /**
     * Retrieves a single query by project and either id or path
     *
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {WorkItemTrackingInterfaces.QueryExpand} expand
     * @param {number} depth
     * @param {boolean} includeDeleted
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.QueryHierarchyItem
     */
    getQuery(project: string, query: string, expand: WorkItemTrackingInterfaces.QueryExpand, depth: number, includeDeleted: boolean, onResult: (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => void): void;
    /**
     * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} queryUpdate
     * @param {string} project - Project ID or project name
     * @param {string} query
     * @param {boolean} undeleteDescendants
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.QueryHierarchyItem
     */
    updateQuery(queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants: boolean, onResult: (err: any, statusCode: number, querie: WorkItemTrackingInterfaces.QueryHierarchyItem) => void): void;
    /**
     * Returns a fully hydrated work item for the requested revision
     *
     * @param {number} id
     * @param {number} revisionNumber
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    getRevision(id: number, revisionNumber: number, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, revision: WorkItemTrackingInterfaces.WorkItem) => void): void;
    /**
     * Returns the list of fully hydrated work item revisions, paged.
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItem[]
     */
    getRevisions(id: number, top: number, skip: number, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, revisions: WorkItemTrackingInterfaces.WorkItem[]) => void): void;
    /**
     * Validates the fields values.
     *
     * @param {WorkItemTrackingInterfaces.FieldsToEvaluate} ruleEngineInput
     * @param onResult cllback function
     */
    evaluateRulesOnField(ruleEngineInput: WorkItemTrackingInterfaces.FieldsToEvaluate, onResult: (err: any, statusCode: number) => void): void;
    /**
     * Returns a single update for a work item
     *
     * @param {number} id
     * @param {number} updateNumber
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemUpdate
     */
    getUpdate(id: number, updateNumber: number, onResult: (err: any, statusCode: number, update: WorkItemTrackingInterfaces.WorkItemUpdate) => void): void;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {number} id
     * @param {number} top
     * @param {number} skip
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemUpdate[]
     */
    getUpdates(id: number, top: number, skip: number, onResult: (err: any, statusCode: number, updates: WorkItemTrackingInterfaces.WorkItemUpdate[]) => void): void;
    /**
     * Gets the results of the query.
     *
     * @param {WorkItemTrackingInterfaces.Wiql} wiql - The query containing the wiql.
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemQueryResult
     */
    queryByWiql(wiql: WorkItemTrackingInterfaces.Wiql, project: string, onResult: (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => void): void;
    /**
     * Gets the results of the query by id.
     *
     * @param {string} id - The query id.
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemQueryResult
     */
    queryById(id: string, project: string, onResult: (err: any, statusCode: number, wiql: WorkItemTrackingInterfaces.WorkItemQueryResult) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} watermark
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch
     */
    getReportingLinks(project: string, watermark: number, onResult: (err: any, statusCode: number, workItemLink: WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch) => void): void;
    /**
     * Gets the work item relation types.
     *
     * @param {string} relation
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemRelationType
     */
    getRelationType(relation: string, onResult: (err: any, statusCode: number, workItemRelationType: WorkItemTrackingInterfaces.WorkItemRelationType) => void): void;
    /**
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemRelationType[]
     */
    getRelationTypes(onResult: (err: any, statusCode: number, workItemRelationTypes: WorkItemTrackingInterfaces.WorkItemRelationType[]) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param {string[]} fields
     * @param {number} watermark
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch
     */
    readReportingRevisionsGet(project: string, fields: string[], watermark: number, onResult: (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => void): void;
    /**
     * @param {string[]} fieldsList
     * @param {string} project - Project ID or project name
     * @param {number} watermark
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch
     */
    readReportingRevisionsPost(fieldsList: string[], project: string, watermark: number, onResult: (err: any, statusCode: number, workItemRevision: WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch) => void): void;
    /**
     * Returns a single work item
     *
     * @param {number} id
     * @param {string[]} fields
     * @param {Date} asOf
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    getWorkItem(id: number, fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    /**
     * Returns a list of work items
     *
     * @param {number[]} ids
     * @param {string[]} fields
     * @param {Date} asOf
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItem[]
     */
    getWorkItems(ids: number[], fields: string[], asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, workItems: WorkItemTrackingInterfaces.WorkItem[]) => void): void;
    /**
     * @param {VSSInterfaces.JsonPatchDocument} document
     * @param {number} id
     * @param {boolean} validateOnly
     * @param {boolean} bypassRules
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    updateWorkItem(document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly: boolean, bypassRules: boolean, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    /**
     * Returns a single work item from a template
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string} fields
     * @param {Date} asOf
     * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    getWorkItemTemplate(project: string, type: string, fields: string, asOf: Date, expand: WorkItemTrackingInterfaces.WorkItemExpand, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    /**
     * @param {VSSInterfaces.JsonPatchDocument} document
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {boolean} validateOnly
     * @param {boolean} bypassRules
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItem
     */
    updateWorkItemTemplate(document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly: boolean, bypassRules: boolean, onResult: (err: any, statusCode: number, workItem: WorkItemTrackingInterfaces.WorkItem) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemTypeCategory[]
     */
    getWorkItemTypeCategories(project: string, onResult: (err: any, statusCode: number, workItemTypeCategories: WorkItemTrackingInterfaces.WorkItemTypeCategory[]) => void): void;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {string} project - Project ID or project name
     * @param {string} category
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemTypeCategory
     */
    getWorkItemTypeCategory(project: string, category: string, onResult: (err: any, statusCode: number, workItemTypeCategorie: WorkItemTrackingInterfaces.WorkItemTypeCategory) => void): void;
    /**
     * Returns a the deltas between work item revisions
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemType
     */
    getWorkItemType(project: string, type: string, onResult: (err: any, statusCode: number, workItemType: WorkItemTrackingInterfaces.WorkItemType) => void): void;
    /**
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemType[]
     */
    getWorkItemTypes(project: string, onResult: (err: any, statusCode: number, workItemTypes: WorkItemTrackingInterfaces.WorkItemType[]) => void): void;
    /**
     * Returns the dependent fields for the corresponding workitem type and fieldname
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string} field
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.FieldDependentRule
     */
    getDependentFields(project: string, type: string, field: string, onResult: (err: any, statusCode: number, workItemTypesField: WorkItemTrackingInterfaces.FieldDependentRule) => void): void;
    /**
     * Export work item type
     *
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {boolean} exportGlobalLists
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.WorkItemTypeTemplate
     */
    exportWorkItemTypeDefinition(project: string, type: string, exportGlobalLists: boolean, onResult: (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.WorkItemTypeTemplate) => void): void;
    /**
     * Add/updates a work item type
     *
     * @param {WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel} updateModel
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting WorkItemTrackingInterfaces.ProvisioningResult
     */
    updateWorkItemTypeDefinition(updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project: string, onResult: (err: any, statusCode: number, workItemTypeTemplate: WorkItemTrackingInterfaces.ProvisioningResult) => void): void;
}
export declare class QWorkItemTrackingApi implements IQWorkItemTrackingApi {
    WorkItemTrackingApi: IWorkItemTrackingApi;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    connect(): Q.Promise<any>;
    /**
    * Creates an attachment.
    *
    * @param {string} content
    * @param {string} fileName
    * @param {string} uploadType
    */
    createAttachment(contentStream: NodeJS.ReadableStream, customHeaders: any, content: string, fileName?: string, uploadType?: string): Q.Promise<WorkItemTrackingInterfaces.AttachmentReference>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} depth
    */
    getRootNodes(project: string, depth?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode[]>;
    /**
    * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode
    * @param {string} project - Project ID or project name
    * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
    * @param {string} path
    */
    createOrUpdateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    /**
    * @param {string} project - Project ID or project name
    * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
    * @param {string} path
    * @param {number} depth
    */
    getClassificationNode(project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string, depth?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    /**
    * @param {WorkItemTrackingInterfaces.WorkItemClassificationNode} postedNode
    * @param {string} project - Project ID or project name
    * @param {WorkItemTrackingInterfaces.TreeStructureGroup} structureGroup
    * @param {string} path
    */
    updateClassificationNode(postedNode: WorkItemTrackingInterfaces.WorkItemClassificationNode, project: string, structureGroup: WorkItemTrackingInterfaces.TreeStructureGroup, path?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemClassificationNode>;
    /**
    * @param {string} field
    */
    getField(field: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemField>;
    /**
    */
    getFields(): Q.Promise<WorkItemTrackingInterfaces.WorkItemField[]>;
    /**
    * Returns history of all revision for a given work item ID
    *
    * @param {number} id
    * @param {number} top
    * @param {number} skip
    */
    getHistory(id: number, top?: number, skip?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory[]>;
    /**
    * Returns the history value of particular revision
    *
    * @param {number} id
    * @param {number} revisionNumber
    */
    getHistoryById(id: number, revisionNumber: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemHistory>;
    /**
    * Creates a query, or moves a query.
    *
    * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} postedQuery - The query to create.
    * @param {string} project - Project ID or project name
    * @param {string} query - The parent path for the query to create.
    */
    createQuery(postedQuery: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    /**
    * Retrieves all queries the user has access to in the current project
    *
    * @param {string} project - Project ID or project name
    * @param {WorkItemTrackingInterfaces.QueryExpand} expand
    * @param {number} depth
    * @param {boolean} includeDeleted
    */
    getQueries(project: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem[]>;
    /**
    * Retrieves a single query by project and either id or path
    *
    * @param {string} project - Project ID or project name
    * @param {string} query
    * @param {WorkItemTrackingInterfaces.QueryExpand} expand
    * @param {number} depth
    * @param {boolean} includeDeleted
    */
    getQuery(project: string, query: string, expand?: WorkItemTrackingInterfaces.QueryExpand, depth?: number, includeDeleted?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    /**
    * @param {WorkItemTrackingInterfaces.QueryHierarchyItem} queryUpdate
    * @param {string} project - Project ID or project name
    * @param {string} query
    * @param {boolean} undeleteDescendants
    */
    updateQuery(queryUpdate: WorkItemTrackingInterfaces.QueryHierarchyItem, project: string, query: string, undeleteDescendants?: boolean): Q.Promise<WorkItemTrackingInterfaces.QueryHierarchyItem>;
    /**
    * Returns a fully hydrated work item for the requested revision
    *
    * @param {number} id
    * @param {number} revisionNumber
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    getRevision(id: number, revisionNumber: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    /**
    * Returns the list of fully hydrated work item revisions, paged.
    *
    * @param {number} id
    * @param {number} top
    * @param {number} skip
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    getRevisions(id: number, top?: number, skip?: number, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    /**
    * Returns a single update for a work item
    *
    * @param {number} id
    * @param {number} updateNumber
    */
    getUpdate(id: number, updateNumber: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate>;
    /**
    * Returns a the deltas between work item revisions
    *
    * @param {number} id
    * @param {number} top
    * @param {number} skip
    */
    getUpdates(id: number, top?: number, skip?: number): Q.Promise<WorkItemTrackingInterfaces.WorkItemUpdate[]>;
    /**
    * Gets the results of the query.
    *
    * @param {WorkItemTrackingInterfaces.Wiql} wiql - The query containing the wiql.
    * @param {string} project - Project ID or project name
    */
    queryByWiql(wiql: WorkItemTrackingInterfaces.Wiql, project?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    /**
    * Gets the results of the query by id.
    *
    * @param {string} id - The query id.
    * @param {string} project - Project ID or project name
    */
    queryById(id: string, project?: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemQueryResult>;
    /**
    * @param {string} project - Project ID or project name
    * @param {number} watermark
    */
    getReportingLinks(project?: string, watermark?: number): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemLinksBatch>;
    /**
    * Gets the work item relation types.
    *
    * @param {string} relation
    */
    getRelationType(relation: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType>;
    /**
    */
    getRelationTypes(): Q.Promise<WorkItemTrackingInterfaces.WorkItemRelationType[]>;
    /**
    * @param {string} project - Project ID or project name
    * @param {string[]} fields
    * @param {number} watermark
    */
    readReportingRevisionsGet(project?: string, fields?: string[], watermark?: number): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    /**
    * @param {string[]} fieldsList
    * @param {string} project - Project ID or project name
    * @param {number} watermark
    */
    readReportingRevisionsPost(fieldsList: string[], project?: string, watermark?: number): Q.Promise<WorkItemTrackingInterfaces.ReportingWorkItemRevisionsBatch>;
    /**
    * Returns a single work item
    *
    * @param {number} id
    * @param {string[]} fields
    * @param {Date} asOf
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    getWorkItem(id: number, fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    /**
    * Returns a list of work items
    *
    * @param {number[]} ids
    * @param {string[]} fields
    * @param {Date} asOf
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    getWorkItems(ids: number[], fields?: string[], asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem[]>;
    /**
    * @param {VSSInterfaces.JsonPatchDocument} document
    * @param {number} id
    * @param {boolean} validateOnly
    * @param {boolean} bypassRules
    */
    updateWorkItem(document: VSSInterfaces.JsonPatchDocument, id: number, validateOnly?: boolean, bypassRules?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    /**
    * Returns a single work item from a template
    *
    * @param {string} project - Project ID or project name
    * @param {string} type
    * @param {string} fields
    * @param {Date} asOf
    * @param {WorkItemTrackingInterfaces.WorkItemExpand} expand
    */
    getWorkItemTemplate(project: string, type: string, fields?: string, asOf?: Date, expand?: WorkItemTrackingInterfaces.WorkItemExpand): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    /**
    * @param {VSSInterfaces.JsonPatchDocument} document
    * @param {string} project - Project ID or project name
    * @param {string} type
    * @param {boolean} validateOnly
    * @param {boolean} bypassRules
    */
    updateWorkItemTemplate(document: VSSInterfaces.JsonPatchDocument, project: string, type: string, validateOnly?: boolean, bypassRules?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItem>;
    /**
    * @param {string} project - Project ID or project name
    */
    getWorkItemTypeCategories(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory[]>;
    /**
    * Returns a the deltas between work item revisions
    *
    * @param {string} project - Project ID or project name
    * @param {string} category
    */
    getWorkItemTypeCategory(project: string, category: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeCategory>;
    /**
    * Returns a the deltas between work item revisions
    *
    * @param {string} project - Project ID or project name
    * @param {string} type
    */
    getWorkItemType(project: string, type: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemType>;
    /**
    * @param {string} project - Project ID or project name
    */
    getWorkItemTypes(project: string): Q.Promise<WorkItemTrackingInterfaces.WorkItemType[]>;
    /**
    * Returns the dependent fields for the corresponding workitem type and fieldname
    *
    * @param {string} project - Project ID or project name
    * @param {string} type
    * @param {string} field
    */
    getDependentFields(project: string, type: string, field: string): Q.Promise<WorkItemTrackingInterfaces.FieldDependentRule>;
    /**
    * Export work item type
    *
    * @param {string} project - Project ID or project name
    * @param {string} type
    * @param {boolean} exportGlobalLists
    */
    exportWorkItemTypeDefinition(project?: string, type?: string, exportGlobalLists?: boolean): Q.Promise<WorkItemTrackingInterfaces.WorkItemTypeTemplate>;
    /**
    * Add/updates a work item type
    *
    * @param {WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel} updateModel
    * @param {string} project - Project ID or project name
    */
    updateWorkItemTypeDefinition(updateModel: WorkItemTrackingInterfaces.WorkItemTypeTemplateUpdateModel, project?: string): Q.Promise<WorkItemTrackingInterfaces.ProvisioningResult>;
}
