export interface AttachmentReference {
    id: string;
    url: string;
}
export interface FieldDependentRule extends WorkItemTrackingResource {
    dependentFields: WorkItemFieldReference[];
}
export interface FieldsToEvaluate {
    fields: string[];
    fieldUpdates: {
        [key: string]: any;
    };
    fieldValues: {
        [key: string]: any;
    };
    rulesFrom: string[];
}
export declare enum FieldType {
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
export declare enum FieldUsage {
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
    attributes: {
        [key: string]: any;
    };
    rel: string;
    title: string;
    url: string;
}
export declare enum LinkQueryMode {
    WorkItems = 0,
    LinksOneHopMustContain = 1,
    LinksOneHopMayContain = 2,
    LinksOneHopDoesNotContain = 3,
    LinksRecursiveMustContain = 4,
    LinksRecursiveMayContain = 5,
    LinksRecursiveDoesNotContain = 6,
}
export declare enum LogicalOperation {
    NONE = 0,
    AND = 1,
    OR = 2,
}
export interface ProjectReference {
    id: string;
    name: string;
    url: string;
}
export declare enum ProvisioningActionType {
    Import = 0,
    Validate = 1,
}
export interface ProvisioningResult {
    provisioningImportEvents: string[];
}
export declare enum QueryExpand {
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
export declare enum QueryResultType {
    WorkItem = 1,
    WorkItemLink = 2,
}
export declare enum QueryType {
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
export declare enum TemplateType {
    WorkItemType = 0,
    GlobalWorkflow = 1,
}
export declare enum TreeNodeStructureType {
    Area = 0,
    Iteration = 1,
}
export declare enum TreeStructureGroup {
    Areas = 0,
    Iterations = 1,
}
export interface Wiql {
    query: string;
}
export interface WorkItem extends WorkItemTrackingResource {
    fields: {
        [key: string]: any;
    };
    id: number;
    relations: WorkItemRelation[];
    rev: number;
}
export interface WorkItemClassificationNode extends WorkItemTrackingResource {
    attributes: {
        [key: string]: any;
    };
    children: WorkItemClassificationNode[];
    id: number;
    name: string;
    structureType: TreeNodeStructureType;
}
export declare enum WorkItemExpand {
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
    attributes: {
        [key: string]: any;
    };
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
    fields: {
        [key: string]: WorkItemFieldUpdate;
    };
    id: number;
    relations: WorkItemRelationUpdates;
    rev: number;
    revisedBy: IdentityReference;
    revisedDate: Date;
    workItemId: number;
}
export declare var TypeInfo: {
    AttachmentReference: {
        fields: any;
    };
    FieldDependentRule: {
        fields: any;
    };
    FieldsToEvaluate: {
        fields: any;
    };
    FieldType: {
        enumValues: {
            "string": number;
            "integer": number;
            "dateTime": number;
            "plainText": number;
            "html": number;
            "treePath": number;
            "history": number;
            "double": number;
            "guid": number;
            "boolean": number;
        };
    };
    FieldUsage: {
        enumValues: {
            "none": number;
            "workItem": number;
            "workItemLink": number;
            "tree": number;
            "workItemTypeExtension": number;
        };
    };
    IdentityReference: {
        fields: any;
    };
    Link: {
        fields: any;
    };
    LinkQueryMode: {
        enumValues: {
            "workItems": number;
            "linksOneHopMustContain": number;
            "linksOneHopMayContain": number;
            "linksOneHopDoesNotContain": number;
            "linksRecursiveMustContain": number;
            "linksRecursiveMayContain": number;
            "linksRecursiveDoesNotContain": number;
        };
    };
    LogicalOperation: {
        enumValues: {
            "nONE": number;
            "aND": number;
            "oR": number;
        };
    };
    ProjectReference: {
        fields: any;
    };
    ProvisioningActionType: {
        enumValues: {
            "import": number;
            "validate": number;
        };
    };
    ProvisioningResult: {
        fields: any;
    };
    QueryExpand: {
        enumValues: {
            "none": number;
            "wiql": number;
            "clauses": number;
            "all": number;
        };
    };
    QueryHierarchyItem: {
        fields: any;
    };
    QueryResultType: {
        enumValues: {
            "workItem": number;
            "workItemLink": number;
        };
    };
    QueryType: {
        enumValues: {
            "flat": number;
            "tree": number;
            "oneHop": number;
        };
    };
    ReportingWorkItemLink: {
        fields: any;
    };
    ReportingWorkItemLinksBatch: {
        fields: any;
    };
    ReportingWorkItemRevisionsBatch: {
        fields: any;
    };
    StreamedBatch: {
        fields: any;
    };
    TemplateType: {
        enumValues: {
            "workItemType": number;
            "globalWorkflow": number;
        };
    };
    TreeNodeStructureType: {
        enumValues: {
            "area": number;
            "iteration": number;
        };
    };
    TreeStructureGroup: {
        enumValues: {
            "areas": number;
            "iterations": number;
        };
    };
    Wiql: {
        fields: any;
    };
    WorkItem: {
        fields: any;
    };
    WorkItemClassificationNode: {
        fields: any;
    };
    WorkItemExpand: {
        enumValues: {
            "none": number;
            "relations": number;
            "fields": number;
            "all": number;
        };
    };
    WorkItemField: {
        fields: any;
    };
    WorkItemFieldOperation: {
        fields: any;
    };
    WorkItemFieldReference: {
        fields: any;
    };
    WorkItemFieldUpdate: {
        fields: any;
    };
    WorkItemHistory: {
        fields: any;
    };
    WorkItemLink: {
        fields: any;
    };
    WorkItemQueryClause: {
        fields: any;
    };
    WorkItemQueryResult: {
        fields: any;
    };
    WorkItemQuerySortColumn: {
        fields: any;
    };
    WorkItemReference: {
        fields: any;
    };
    WorkItemRelation: {
        fields: any;
    };
    WorkItemRelationType: {
        fields: any;
    };
    WorkItemRelationUpdates: {
        fields: any;
    };
    WorkItemRevisionReference: {
        fields: any;
    };
    WorkItemTrackingReference: {
        fields: any;
    };
    WorkItemTrackingResource: {
        fields: any;
    };
    WorkItemTrackingResourceReference: {
        fields: any;
    };
    WorkItemType: {
        fields: any;
    };
    WorkItemTypeCategory: {
        fields: any;
    };
    WorkItemTypeFieldInstance: {
        fields: any;
    };
    WorkItemTypeReference: {
        fields: any;
    };
    WorkItemTypeTemplate: {
        fields: any;
    };
    WorkItemTypeTemplateUpdateModel: {
        fields: any;
    };
    WorkItemUpdate: {
        fields: any;
    };
};
