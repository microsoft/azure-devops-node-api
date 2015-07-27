/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*
* See following wiki page for instructions on how to regenerate:
*   https://vsowiki.com/index.php?title=Rest_Client_Generation
*/

"use strict";

import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AttachmentReference {
    id: string;
    url: string;
}

export interface FieldDependentRule extends WorkItemTrackingResource {
    dependentFields: WorkItemFieldReference[];
}

export interface FieldsToEvaluate {
    fields: string[];
    fieldUpdates: { [key: string] : any; };
    fieldValues: { [key: string] : any; };
    rulesFrom: string[];
}

export enum FieldType {
    String = 0,
    Integer = 1,
    DateTime = 2,
    PlainText = 3,
    Html = 4,
    TreePath = 5,
    History = 6,
    Double = 7,
    Guid = 8,
    Boolean = 9,
}

export enum FieldUsage {
    None = 0,
    WorkItem = 1,
    WorkItemLink = 2,
    Tree = 3,
    WorkItemTypeExtension = 4,
}

export interface IdentityReference {
    id: string;
    name: string;
    url: string;
}

export interface Link {
    attributes: { [key: string] : any; };
    rel: string;
    title: string;
    url: string;
}

export enum LinkQueryMode {
    WorkItems = 0,
    LinksOneHopMustContain = 1,
    LinksOneHopMayContain = 2,
    LinksOneHopDoesNotContain = 3,
    LinksRecursiveMustContain = 4,
    LinksRecursiveMayContain = 5,
    LinksRecursiveDoesNotContain = 6,
}

export enum LogicalOperation {
    NONE = 0,
    AND = 1,
    OR = 2,
}

export interface ProjectReference {
    id: string;
    name: string;
    url: string;
}

export enum ProvisioningActionType {
    Import = 0,
    Validate = 1,
}

export interface ProvisioningResult {
    provisioningImportEvents: string[];
}

export enum QueryExpand {
    None = 0,
    Wiql = 1,
    Clauses = 2,
    All = 3,
}

export interface QueryHierarchyItem extends WorkItemTrackingResource {
    children: QueryHierarchyItem[];
    clauses: WorkItemQueryClause;
    columns: WorkItemFieldReference[];
    filterOptions: LinkQueryMode;
    hasChildren: boolean;
    id: string;
    isDeleted: boolean;
    isFolder: boolean;
    isInvalidSyntax: boolean;
    isPublic: boolean;
    linkClauses: WorkItemQueryClause;
    name: string;
    path: string;
    queryType: QueryType;
    sortColumns: WorkItemQuerySortColumn[];
    sourceClauses: WorkItemQueryClause;
    targetClauses: WorkItemQueryClause;
    wiql: string;
}

export enum QueryResultType {
    WorkItem = 1,
    WorkItemLink = 2,
}

export enum QueryType {
    Flat = 1,
    Tree = 2,
    OneHop = 3,
}

export interface ReportingWorkItemLink {
    changedDate: Date;
    isActive: boolean;
    rel: string;
    sourceId: number;
    targetId: number;
}

export interface ReportingWorkItemLinksBatch extends StreamedBatch<ReportingWorkItemLink> {
}

export interface ReportingWorkItemRevisionsBatch extends StreamedBatch<WorkItem> {
}

export interface StreamedBatch<T> {
    isLastBatch: boolean;
    nextLink: string;
    values: T[];
}

export enum TemplateType {
    WorkItemType = 0,
    GlobalWorkflow = 1,
}

export enum TreeNodeStructureType {
    Area = 0,
    Iteration = 1,
}

export enum TreeStructureGroup {
    Areas = 0,
    Iterations = 1,
}

export interface Wiql {
    query: string;
}

export interface WorkItem extends WorkItemTrackingResource {
    fields: { [key: string] : any; };
    id: number;
    relations: WorkItemRelation[];
    rev: number;
}

export interface WorkItemClassificationNode extends WorkItemTrackingResource {
    attributes: { [key: string] : any; };
    children: WorkItemClassificationNode[];
    id: number;
    name: string;
    structureType: TreeNodeStructureType;
}

export enum WorkItemExpand {
    None = 0,
    Relations = 1,
    Fields = 2,
    All = 3,
}

export interface WorkItemField extends WorkItemTrackingResource {
    name: string;
    readOnly: boolean;
    referenceName: string;
    supportedOperations: WorkItemFieldOperation[];
    type: FieldType;
}

export interface WorkItemFieldOperation {
    name: string;
    referenceName: string;
}

export interface WorkItemFieldReference {
    name: string;
    referenceName: string;
    url: string;
}

export interface WorkItemFieldUpdate {
    newValue: any;
    oldValue: any;
}

export interface WorkItemHistory extends WorkItemTrackingResource {
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
    value: string;
}

export interface WorkItemLink {
    rel: string;
    source: WorkItemReference;
    target: WorkItemReference;
}

export interface WorkItemQueryClause {
    clauses: WorkItemQueryClause[];
    field: WorkItemFieldReference;
    fieldValue: WorkItemFieldReference;
    isFieldValue: boolean;
    logicalOperator: LogicalOperation;
    operator: WorkItemFieldOperation;
    value: string;
}

export interface WorkItemQueryResult {
    asOf: Date;
    columns: WorkItemFieldReference[];
    queryResultType: QueryResultType;
    queryType: QueryType;
    sortColumns: WorkItemQuerySortColumn[];
    workItemRelations: WorkItemLink[];
    workItems: WorkItemReference[];
}

export interface WorkItemQuerySortColumn {
    descending: boolean;
    field: WorkItemFieldReference;
}

export interface WorkItemReference {
    id: number;
    url: string;
}

export interface WorkItemRelation extends Link {
}

export interface WorkItemRelationType extends WorkItemTrackingReference {
    attributes: { [key: string] : any; };
}

export interface WorkItemRelationUpdates {
    added: WorkItemRelation[];
    removed: WorkItemRelation[];
    updated: WorkItemRelation[];
}

export interface WorkItemRevisionReference extends WorkItemReference {
    rev: number;
}

export interface WorkItemTrackingReference extends WorkItemTrackingResource {
    name: string;
    referenceName: string;
}

export interface WorkItemTrackingResource extends WorkItemTrackingResourceReference {
    _links: any;
}

export interface WorkItemTrackingResourceReference {
    url: string;
}

export interface WorkItemType extends WorkItemTrackingResource {
    description: string;
    fields: WorkItemTypeFieldInstance[];
    name: string;
    xmlForm: string;
}

export interface WorkItemTypeCategory extends WorkItemTrackingResource {
    defaultWorkItemType: WorkItemTypeReference;
    name: string;
    referenceName: string;
    workItemTypes: WorkItemTypeReference[];
}

export interface WorkItemTypeFieldInstance {
    field: WorkItemFieldReference;
    helpText: string;
}

export interface WorkItemTypeReference extends WorkItemTrackingResourceReference {
    name: string;
}

export interface WorkItemTypeTemplate {
    template: string;
}

export interface WorkItemTypeTemplateUpdateModel {
    actionType: ProvisioningActionType;
    methodology: string;
    template: string;
    templateType: TemplateType;
}

export interface WorkItemUpdate extends WorkItemTrackingResourceReference {
    fields: { [key: string] : WorkItemFieldUpdate; };
    id: number;
    relations: WorkItemRelationUpdates;
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
    workItemId: number;
}

export var TypeInfo = {
    AttachmentReference: {
        fields: <any>null
    },
    FieldDependentRule: {
        fields: <any>null
    },
    FieldsToEvaluate: {
        fields: <any>null
    },
    FieldType: {
        enumValues: {
            "string": 0,
            "integer": 1,
            "dateTime": 2,
            "plainText": 3,
            "html": 4,
            "treePath": 5,
            "history": 6,
            "double": 7,
            "guid": 8,
            "boolean": 9,
        }
    },
    FieldUsage: {
        enumValues: {
            "none": 0,
            "workItem": 1,
            "workItemLink": 2,
            "tree": 3,
            "workItemTypeExtension": 4,
        }
    },
    IdentityReference: {
        fields: <any>null
    },
    Link: {
        fields: <any>null
    },
    LinkQueryMode: {
        enumValues: {
            "workItems": 0,
            "linksOneHopMustContain": 1,
            "linksOneHopMayContain": 2,
            "linksOneHopDoesNotContain": 3,
            "linksRecursiveMustContain": 4,
            "linksRecursiveMayContain": 5,
            "linksRecursiveDoesNotContain": 6,
        }
    },
    LogicalOperation: {
        enumValues: {
            "nONE": 0,
            "aND": 1,
            "oR": 2,
        }
    },
    ProjectReference: {
        fields: <any>null
    },
    ProvisioningActionType: {
        enumValues: {
            "import": 0,
            "validate": 1,
        }
    },
    ProvisioningResult: {
        fields: <any>null
    },
    QueryExpand: {
        enumValues: {
            "none": 0,
            "wiql": 1,
            "clauses": 2,
            "all": 3,
        }
    },
    QueryHierarchyItem: {
        fields: <any>null
    },
    QueryResultType: {
        enumValues: {
            "workItem": 1,
            "workItemLink": 2,
        }
    },
    QueryType: {
        enumValues: {
            "flat": 1,
            "tree": 2,
            "oneHop": 3,
        }
    },
    ReportingWorkItemLink: {
        fields: <any>null
    },
    ReportingWorkItemLinksBatch: {
        fields: <any>null
    },
    ReportingWorkItemRevisionsBatch: {
        fields: <any>null
    },
    StreamedBatch: {
        fields: <any>null
    },
    TemplateType: {
        enumValues: {
            "workItemType": 0,
            "globalWorkflow": 1,
        }
    },
    TreeNodeStructureType: {
        enumValues: {
            "area": 0,
            "iteration": 1,
        }
    },
    TreeStructureGroup: {
        enumValues: {
            "areas": 0,
            "iterations": 1,
        }
    },
    Wiql: {
        fields: <any>null
    },
    WorkItem: {
        fields: <any>null
    },
    WorkItemClassificationNode: {
        fields: <any>null
    },
    WorkItemExpand: {
        enumValues: {
            "none": 0,
            "relations": 1,
            "fields": 2,
            "all": 3,
        }
    },
    WorkItemField: {
        fields: <any>null
    },
    WorkItemFieldOperation: {
        fields: <any>null
    },
    WorkItemFieldReference: {
        fields: <any>null
    },
    WorkItemFieldUpdate: {
        fields: <any>null
    },
    WorkItemHistory: {
        fields: <any>null
    },
    WorkItemLink: {
        fields: <any>null
    },
    WorkItemQueryClause: {
        fields: <any>null
    },
    WorkItemQueryResult: {
        fields: <any>null
    },
    WorkItemQuerySortColumn: {
        fields: <any>null
    },
    WorkItemReference: {
        fields: <any>null
    },
    WorkItemRelation: {
        fields: <any>null
    },
    WorkItemRelationType: {
        fields: <any>null
    },
    WorkItemRelationUpdates: {
        fields: <any>null
    },
    WorkItemRevisionReference: {
        fields: <any>null
    },
    WorkItemTrackingReference: {
        fields: <any>null
    },
    WorkItemTrackingResource: {
        fields: <any>null
    },
    WorkItemTrackingResourceReference: {
        fields: <any>null
    },
    WorkItemType: {
        fields: <any>null
    },
    WorkItemTypeCategory: {
        fields: <any>null
    },
    WorkItemTypeFieldInstance: {
        fields: <any>null
    },
    WorkItemTypeReference: {
        fields: <any>null
    },
    WorkItemTypeTemplate: {
        fields: <any>null
    },
    WorkItemTypeTemplateUpdateModel: {
        fields: <any>null
    },
    WorkItemUpdate: {
        fields: <any>null
    },
};

TypeInfo.AttachmentReference.fields = {
};

TypeInfo.FieldDependentRule.fields = {
    dependentFields: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemFieldReference
    },
};

TypeInfo.FieldsToEvaluate.fields = {
};

TypeInfo.IdentityReference.fields = {
};

TypeInfo.Link.fields = {
};

TypeInfo.ProjectReference.fields = {
};

TypeInfo.ProvisioningResult.fields = {
};

TypeInfo.QueryHierarchyItem.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.QueryHierarchyItem
    },
    clauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    columns: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemFieldReference
    },
    filterOptions: {
        enumType: TypeInfo.LinkQueryMode
    },
    linkClauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    queryType: {
        enumType: TypeInfo.QueryType
    },
    sortColumns: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemQuerySortColumn
    },
    sourceClauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    targetClauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
};

TypeInfo.ReportingWorkItemLink.fields = {
    changedDate: {
        isDate: true,
    },
};

TypeInfo.ReportingWorkItemLinksBatch.fields = {
};

TypeInfo.ReportingWorkItemRevisionsBatch.fields = {
};

TypeInfo.StreamedBatch.fields = {
};

TypeInfo.Wiql.fields = {
};

TypeInfo.WorkItem.fields = {
    relations: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemRelation
    },
};

TypeInfo.WorkItemClassificationNode.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemClassificationNode
    },
    structureType: {
        enumType: TypeInfo.TreeNodeStructureType
    },
};

TypeInfo.WorkItemField.fields = {
    supportedOperations: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemFieldOperation
    },
    type: {
        enumType: TypeInfo.FieldType
    },
};

TypeInfo.WorkItemFieldOperation.fields = {
};

TypeInfo.WorkItemFieldReference.fields = {
};

TypeInfo.WorkItemFieldUpdate.fields = {
};

TypeInfo.WorkItemHistory.fields = {
    revisedBy: {
        typeInfo: TypeInfo.IdentityReference
    },
    revisedDate: {
        isDate: true,
    },
};

TypeInfo.WorkItemLink.fields = {
    source: {
        typeInfo: TypeInfo.WorkItemReference
    },
    target: {
        typeInfo: TypeInfo.WorkItemReference
    },
};

TypeInfo.WorkItemQueryClause.fields = {
    clauses: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    field: {
        typeInfo: TypeInfo.WorkItemFieldReference
    },
    fieldValue: {
        typeInfo: TypeInfo.WorkItemFieldReference
    },
    logicalOperator: {
        enumType: TypeInfo.LogicalOperation
    },
    operator: {
        typeInfo: TypeInfo.WorkItemFieldOperation
    },
};

TypeInfo.WorkItemQueryResult.fields = {
    asOf: {
        isDate: true,
    },
    columns: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemFieldReference
    },
    queryResultType: {
        enumType: TypeInfo.QueryResultType
    },
    queryType: {
        enumType: TypeInfo.QueryType
    },
    sortColumns: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemQuerySortColumn
    },
    workItemRelations: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemLink
    },
    workItems: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemReference
    },
};

TypeInfo.WorkItemQuerySortColumn.fields = {
    field: {
        typeInfo: TypeInfo.WorkItemFieldReference
    },
};

TypeInfo.WorkItemReference.fields = {
};

TypeInfo.WorkItemRelation.fields = {
};

TypeInfo.WorkItemRelationType.fields = {
};

TypeInfo.WorkItemRelationUpdates.fields = {
    added: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemRelation
    },
    removed: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemRelation
    },
    updated: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemRelation
    },
};

TypeInfo.WorkItemRevisionReference.fields = {
};

TypeInfo.WorkItemTrackingReference.fields = {
};

TypeInfo.WorkItemTrackingResource.fields = {
};

TypeInfo.WorkItemTrackingResourceReference.fields = {
};

TypeInfo.WorkItemType.fields = {
    fields: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemTypeFieldInstance
    },
};

TypeInfo.WorkItemTypeCategory.fields = {
    defaultWorkItemType: {
        typeInfo: TypeInfo.WorkItemTypeReference
    },
    workItemTypes: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemTypeReference
    },
};

TypeInfo.WorkItemTypeFieldInstance.fields = {
    field: {
        typeInfo: TypeInfo.WorkItemFieldReference
    },
};

TypeInfo.WorkItemTypeReference.fields = {
};

TypeInfo.WorkItemTypeTemplate.fields = {
};

TypeInfo.WorkItemTypeTemplateUpdateModel.fields = {
    actionType: {
        enumType: TypeInfo.ProvisioningActionType
    },
    templateType: {
        enumType: TypeInfo.TemplateType
    },
};

TypeInfo.WorkItemUpdate.fields = {
    fields: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemFieldUpdate
    },
    relations: {
        typeInfo: TypeInfo.WorkItemRelationUpdates
    },
    revisedBy: {
        typeInfo: TypeInfo.IdentityReference
    },
    revisedDate: {
        isDate: true,
    },
};
