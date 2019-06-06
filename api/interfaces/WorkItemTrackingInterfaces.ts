/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

"use strict";

import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AccountMyWorkResult {
    /**
     * True, when length of WorkItemDetails is same as the limit
     */
    querySizeLimitExceeded?: boolean;
    /**
     * WorkItem Details
     */
    workItemDetails?: AccountWorkWorkItemModel[];
}

/**
 * Represents Work Item Recent Activity
 */
export interface AccountRecentActivityWorkItemModel extends AccountRecentActivityWorkItemModelBase {
    /**
     * Assigned To
     */
    assignedTo?: string;
}

/**
 * Represents Work Item Recent Activity
 */
export interface AccountRecentActivityWorkItemModel2 extends AccountRecentActivityWorkItemModelBase {
    /**
     * Assigned To
     */
    assignedTo?: VSSInterfaces.IdentityRef;
}

/**
 * Represents Work Item Recent Activity
 */
export interface AccountRecentActivityWorkItemModelBase {
    /**
     * Date of the last Activity by the user
     */
    activityDate?: Date;
    /**
     * Type of the activity
     */
    activityType?: WorkItemRecentActivityType;
    /**
     * Last changed date of the work item
     */
    changedDate?: Date;
    /**
     * Work Item Id
     */
    id?: number;
    /**
     * TeamFoundationId of the user this activity belongs to
     */
    identityId?: string;
    /**
     * State of the work item
     */
    state?: string;
    /**
     * Team project the work item belongs to
     */
    teamProject?: string;
    /**
     * Title of the work item
     */
    title?: string;
    /**
     * Type of Work Item
     */
    workItemType?: string;
}

/**
 * Represents Recent Mention Work Item
 */
export interface AccountRecentMentionWorkItemModel {
    /**
     * Assigned To
     */
    assignedTo?: string;
    /**
     * Work Item Id
     */
    id?: number;
    /**
     * Lastest date that the user were mentioned
     */
    mentionedDateField?: Date;
    /**
     * State of the work item
     */
    state?: string;
    /**
     * Team project the work item belongs to
     */
    teamProject?: string;
    /**
     * Title of the work item
     */
    title?: string;
    /**
     * Type of Work Item
     */
    workItemType?: string;
}

export interface AccountWorkWorkItemModel {
    assignedTo?: string;
    changedDate?: Date;
    id?: number;
    state?: string;
    teamProject?: string;
    title?: string;
    workItemType?: string;
}

/**
 * Contains criteria for querying work items based on artifact URI.
 */
export interface ArtifactUriQuery {
    /**
     * List of artifact URIs to use for querying work items.
     */
    artifactUris?: string[];
}

/**
 * Defines result of artifact URI query on work items. Contains mapping of work item IDs to artifact URI.
 */
export interface ArtifactUriQueryResult {
    /**
     * A Dictionary that maps a list of work item references to the given list of artifact URI.
     */
    artifactUrisQueryResult?: { [key: string] : WorkItemReference[]; };
}

export interface AttachmentReference {
    id?: string;
    url?: string;
}

/**
 * Flag to control error policy in a batch classification nodes get request.
 */
export enum ClassificationNodesErrorPolicy {
    Fail = 1,
    Omit = 2,
}

/**
 * Comment on a Work Item.
 */
export interface Comment extends WorkItemTrackingResource {
    /**
     * IdentityRef of the creator of the comment.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * The creation date of the comment.
     */
    createdDate?: Date;
    /**
     * Effective Date/time value for adding the comment. Can be optionally different from CreatedDate.
     */
    createdOnBehalfDate?: Date;
    /**
     * Identity on whose behalf this comment has been added. Can be optionally different from CreatedBy.
     */
    createdOnBehalfOf?: VSSInterfaces.IdentityRef;
    /**
     * The id assigned to the comment.
     */
    id?: number;
    /**
     * Indicates if the comment has been deleted.
     */
    isDeleted?: boolean;
    /**
     * The mentions of the comment.
     */
    mentions?: CommentMention[];
    /**
     * IdentityRef of the user who last modified the comment.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * The last modification date of the comment.
     */
    modifiedDate?: Date;
    /**
     * The reactions of the comment.
     */
    reactions?: CommentReaction[];
    /**
     * The text of the comment.
     */
    text?: string;
    /**
     * The current version of the comment.
     */
    version?: number;
    /**
     * The id of the work item this comment belongs to.
     */
    workItemId?: number;
}

/**
 * Represents a request to create a work item comment.
 */
export interface CommentCreate {
    /**
     * The text of the comment.
     */
    text: string;
}

/**
 * Specifies the additional data retrieval options for work item comments.
 */
export enum CommentExpandOptions {
    None = 0,
    /**
     * Include comment reactions.
     */
    Reactions = 1,
    /**
     * Include comment mentions.
     */
    Mentions = 2,
    /**
     * Include the rendered text (html) in addition to MD text.
     */
    RenderedText = 8,
    /**
     * If specified, then ONLY rendered text (html) will be returned, w/o markdown. Supposed to be used internally from data provides for optimization purposes.
     */
    RenderedTextOnly = 16,
    All = -17,
}

/**
 * Represents a list of work item comments.
 */
export interface CommentList extends WorkItemTrackingResource {
    /**
     * List of comments in the current batch.
     */
    comments?: Comment[];
    /**
     * A string token that can be used to retrieving next page of comments if available. Otherwise null.
     */
    continuationToken?: string;
    /**
     * The count of comments in the current batch.
     */
    count?: number;
    /**
     * Uri to the next page of comments if it is available. Otherwise null.
     */
    nextPage?: string;
    /**
     * Total count of comments on a work item.
     */
    totalCount?: number;
}

export interface CommentMention extends WorkItemTrackingResource {
    /**
     * The artifact portion of the parsed text. (i.e. the work item's id)
     */
    artifactId?: string;
    /**
     * The type the parser assigned to the mention. (i.e. person, work item, etc)
     */
    artifactType?: string;
    /**
     * The comment id of the mention.
     */
    commentId?: number;
    /**
     * The resolved target of the mention. An example of this could be a user's tfid
     */
    targetId?: string;
}

/**
 * Contains information about work item comment reaction for a particular reaction type.
 */
export interface CommentReaction extends WorkItemTrackingResource {
    /**
     * The id of the comment this reaction belongs to.
     */
    commentId?: number;
    /**
     * Total number of reactions for the CommentReactionType.
     */
    count?: number;
    /**
     * Flag to indicate if the current user has engaged on this particular EngagementType (e.g. if they liked the associated comment).
     */
    isCurrentUserEngaged?: boolean;
    /**
     * Type of the reaction.
     */
    type?: CommentReactionType;
}

/**
 * Represents different reaction types for a work item comment.
 */
export enum CommentReactionType {
    Like = 0,
    Dislike = 1,
    Heart = 2,
    Hooray = 3,
    Smile = 4,
    Confused = 5,
}

export enum CommentSortOrder {
    /**
     * The results will be sorted in Ascending order.
     */
    Asc = 1,
    /**
     * The results will be sorted in Descending order.
     */
    Desc = 2,
}

/**
 * Represents a request to update a work item comment.
 */
export interface CommentUpdate {
    /**
     * The updated text of the comment.
     */
    text: string;
}

/**
 * Represents a specific version of a comment on a work item.
 */
export interface CommentVersion extends WorkItemTrackingResource {
    /**
     * IdentityRef of the creator of the comment.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * The creation date of the comment.
     */
    createdDate?: Date;
    /**
     * Effective Date/time value for adding the comment. Can be optionally different from CreatedDate.
     */
    createdOnBehalfDate?: Date;
    /**
     * Identity on whose behalf this comment has been added. Can be optionally different from CreatedBy.
     */
    createdOnBehalfOf?: VSSInterfaces.IdentityRef;
    /**
     * The id assigned to the comment.
     */
    id?: number;
    /**
     * Indicates if the comment has been deleted at this version.
     */
    isDeleted?: boolean;
    /**
     * IdentityRef of the user who modified the comment at this version.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * The modification date of the comment for this version.
     */
    modifiedDate?: Date;
    /**
     * The rendered content of the comment at this version.
     */
    renderedText?: string;
    /**
     * The text of the comment at this version.
     */
    text?: string;
    /**
     * The version number.
     */
    version?: number;
}

/**
 * Describes a list of dependent fields for a rule.
 */
export interface FieldDependentRule extends WorkItemTrackingResource {
    /**
     * The dependent fields.
     */
    dependentFields?: WorkItemFieldReference[];
}

/**
 * Describes a set fields for rule evaluation.
 */
export interface FieldsToEvaluate {
    /**
     * List of fields to evaluate.
     */
    fields?: string[];
    /**
     * Updated field values to evaluate.
     */
    fieldUpdates?: { [key: string] : any; };
    /**
     * Initial field values.
     */
    fieldValues?: { [key: string] : any; };
    /**
     * URL of the work item type for which the rules need to be executed.
     */
    rulesFrom?: string[];
}

/**
 * Enum for field types.
 */
export enum FieldType {
    /**
     * String field type.
     */
    String = 0,
    /**
     * Integer field type.
     */
    Integer = 1,
    /**
     * Datetime field type.
     */
    DateTime = 2,
    /**
     * Plain text field type.
     */
    PlainText = 3,
    /**
     * HTML (Multiline) field type.
     */
    Html = 4,
    /**
     * Treepath field type.
     */
    TreePath = 5,
    /**
     * History field type.
     */
    History = 6,
    /**
     * Double field type.
     */
    Double = 7,
    /**
     * Guid field type.
     */
    Guid = 8,
    /**
     * Boolean field type.
     */
    Boolean = 9,
    /**
     * Identity field type.
     */
    Identity = 10,
    /**
     * String picklist field type. When creating a string picklist field from REST API, use "String" FieldType.
     */
    PicklistString = 11,
    /**
     * Integer picklist field type. When creating a integer picklist field from REST API, use "Integer" FieldType.
     */
    PicklistInteger = 12,
    /**
     * Double picklist field type. When creating a double picklist field from REST API, use "Double" FieldType.
     */
    PicklistDouble = 13,
}

/**
 * Enum for field usages.
 */
export enum FieldUsage {
    /**
     * Empty usage.
     */
    None = 0,
    /**
     * Work item field usage.
     */
    WorkItem = 1,
    /**
     * Work item link field usage.
     */
    WorkItemLink = 2,
    /**
     * Treenode field usage.
     */
    Tree = 3,
    /**
     * Work Item Type Extension usage.
     */
    WorkItemTypeExtension = 4,
}

/**
 * Flag to expand types of fields.
 */
export enum GetFieldsExpand {
    /**
     * Default behavior.
     */
    None = 0,
    /**
     * Adds extension fields to the response.
     */
    ExtensionFields = 1,
}

/**
 * Describes a reference to an identity.
 */
export interface IdentityReference extends VSSInterfaces.IdentityRef {
    id?: string;
    /**
     * Legacy back-compat property. This has been the WIT specific value from Constants. Will be hidden (but exists) on the client unless they are targeting the newest version
     */
    name?: string;
}

/**
 * Link description.
 */
export interface Link {
    /**
     * Collection of link attributes.
     */
    attributes?: { [key: string] : any; };
    /**
     * Relation type.
     */
    rel?: string;
    /**
     * Link url.
     */
    url?: string;
}

/**
 * The link query mode which determines the behavior of the query.
 */
export enum LinkQueryMode {
    /**
     * Returns flat list of work items.
     */
    WorkItems = 0,
    /**
     * Returns work items where the source, target, and link criteria are all satisfied.
     */
    LinksOneHopMustContain = 1,
    /**
     * Returns work items that satisfy the source and link criteria, even if no linked work item satisfies the target criteria.
     */
    LinksOneHopMayContain = 2,
    /**
     * Returns work items that satisfy the source, only if no linked work item satisfies the link and target criteria.
     */
    LinksOneHopDoesNotContain = 3,
    LinksRecursiveMustContain = 4,
    /**
     * Returns work items a hierarchy of work items that by default satisfy the source
     */
    LinksRecursiveMayContain = 5,
    LinksRecursiveDoesNotContain = 6,
}

export enum LogicalOperation {
    NONE = 0,
    AND = 1,
    OR = 2,
}

/**
 * Project work item type state colors
 */
export interface ProjectWorkItemStateColors {
    /**
     * Project name
     */
    projectName?: string;
    /**
     * State colors for all work item type in a project
     */
    workItemTypeStateColors?: WorkItemTypeStateColors[];
}

/**
 * Enumerates the possible provisioning actions that can be triggered on process template update.
 */
export enum ProvisioningActionType {
    Import = 0,
    Validate = 1,
}

/**
 * Result of an update work item type XML update operation.
 */
export interface ProvisioningResult {
    /**
     * Details about of the provisioning import events.
     */
    provisioningImportEvents?: string[];
}

/**
 * Describes a request to get a list of queries
 */
export interface QueryBatchGetRequest {
    /**
     * The expand parameters for queries. Possible options are { None, Wiql, Clauses, All, Minimal }
     */
    $expand?: QueryExpand;
    /**
     * The flag to control error policy in a query batch request. Possible options are { Fail, Omit }.
     */
    errorPolicy?: QueryErrorPolicy;
    /**
     * The requested query ids
     */
    ids?: string[];
}

/**
 * Enum to control error policy in a query batch request.
 */
export enum QueryErrorPolicy {
    Fail = 1,
    Omit = 2,
}

/**
 * Determines which set of additional query properties to display
 */
export enum QueryExpand {
    /**
     * Expands Columns, Links and ChangeInfo
     */
    None = 0,
    /**
     * Expands Columns, Links,  ChangeInfo and WIQL text
     */
    Wiql = 1,
    /**
     * Expands Columns, Links, ChangeInfo, WIQL text and clauses
     */
    Clauses = 2,
    /**
     * Expands all properties
     */
    All = 3,
    /**
     * Displays minimal properties and the WIQL text
     */
    Minimal = 4,
}

/**
 * Represents an item in the work item query hierarchy. This can be either a query or a folder.
 */
export interface QueryHierarchyItem extends WorkItemTrackingResource {
    /**
     * The child query items inside a query folder.
     */
    children?: QueryHierarchyItem[];
    /**
     * The clauses for a flat query.
     */
    clauses?: WorkItemQueryClause;
    /**
     * The columns of the query.
     */
    columns?: WorkItemFieldReference[];
    /**
     * The identity who created the query item.
     */
    createdBy?: IdentityReference;
    /**
     * When the query item was created.
     */
    createdDate?: Date;
    /**
     * The link query mode.
     */
    filterOptions?: LinkQueryMode;
    /**
     * If this is a query folder, indicates if it contains any children.
     */
    hasChildren?: boolean;
    /**
     * The id of the query item.
     */
    id?: string;
    /**
     * Indicates if this query item is deleted. Setting this to false on a deleted query item will undelete it. Undeleting a query or folder will not bring back the permission changes that were previously applied to it.
     */
    isDeleted?: boolean;
    /**
     * Indicates if this is a query folder or a query.
     */
    isFolder?: boolean;
    /**
     * Indicates if the WIQL of this query is invalid. This could be due to invalid syntax or a no longer valid area/iteration path.
     */
    isInvalidSyntax?: boolean;
    /**
     * Indicates if this query item is public or private.
     */
    isPublic?: boolean;
    /**
     * The identity who last ran the query.
     */
    lastExecutedBy?: IdentityReference;
    /**
     * When the query was last run.
     */
    lastExecutedDate?: Date;
    /**
     * The identity who last modified the query item.
     */
    lastModifiedBy?: IdentityReference;
    /**
     * When the query item was last modified.
     */
    lastModifiedDate?: Date;
    /**
     * The link query clause.
     */
    linkClauses?: WorkItemQueryClause;
    /**
     * The name of the query item.
     */
    name?: string;
    /**
     * The path of the query item.
     */
    path?: string;
    /**
     * The recursion option for use in a tree query.
     */
    queryRecursionOption?: QueryRecursionOption;
    /**
     * The type of query.
     */
    queryType?: QueryType;
    /**
     * The sort columns of the query.
     */
    sortColumns?: WorkItemQuerySortColumn[];
    /**
     * The source clauses in a tree or one-hop link query.
     */
    sourceClauses?: WorkItemQueryClause;
    /**
     * The target clauses in a tree or one-hop link query.
     */
    targetClauses?: WorkItemQueryClause;
    /**
     * The WIQL text of the query
     */
    wiql?: string;
}

export interface QueryHierarchyItemsResult {
    /**
     * The count of items.
     */
    count?: number;
    /**
     * Indicates if the max return limit was hit but there are still more items
     */
    hasMore?: boolean;
    /**
     * The list of items
     */
    value?: QueryHierarchyItem[];
}

export enum QueryOption {
    Doing = 1,
    Done = 2,
    Followed = 3,
}

/**
 * Determines whether a tree query matches parents or children first.
 */
export enum QueryRecursionOption {
    /**
     * Returns work items that satisfy the source, even if no linked work item satisfies the target and link criteria.
     */
    ParentFirst = 0,
    /**
     * Returns work items that satisfy the target criteria, even if no work item satisfies the source and link criteria.
     */
    ChildFirst = 1,
}

/**
 * The query result type
 */
export enum QueryResultType {
    /**
     * A list of work items (for flat queries).
     */
    WorkItem = 1,
    /**
     * A list of work item links (for OneHop and Tree queries).
     */
    WorkItemLink = 2,
}

/**
 * The type of query.
 */
export enum QueryType {
    /**
     * Gets a flat list of work items.
     */
    Flat = 1,
    /**
     * Gets a tree of work items showing their link hierarchy.
     */
    Tree = 2,
    /**
     * Gets a list of work items and their direct links.
     */
    OneHop = 3,
}

/**
 * The reporting revision expand level.
 */
export enum ReportingRevisionsExpand {
    /**
     * Default behavior.
     */
    None = 0,
    /**
     * Add fields to the response.
     */
    Fields = 1,
}

export interface ReportingWorkItemLinksBatch extends StreamedBatch<WorkItemRelation> {
}

export interface ReportingWorkItemRevisionsBatch extends StreamedBatch<WorkItem> {
}

/**
 * The class reprensents the reporting work item revision filer.
 */
export interface ReportingWorkItemRevisionsFilter {
    /**
     * A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     */
    fields?: string[];
    /**
     * Include deleted work item in the result.
     */
    includeDeleted?: boolean;
    /**
     * Return an identity reference instead of a string value for identity fields.
     */
    includeIdentityRef?: boolean;
    /**
     * Include only the latest version of a work item, skipping over all previous revisions of the work item.
     */
    includeLatestOnly?: boolean;
    /**
     * Include tag reference instead of string value for System.Tags field
     */
    includeTagRef?: boolean;
    /**
     * A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     */
    types?: string[];
}

/**
 * The class describes reporting work item revision batch.
 */
export interface StreamedBatch<T> {
    /**
     * ContinuationToken acts as a waterMark. Used while quering large results.
     */
    continuationToken?: string;
    /**
     * Returns 'true' if it's last batch, 'false' otherwise.
     */
    isLastBatch?: boolean;
    /**
     * The next link for the work item.
     */
    nextLink?: string;
    /**
     * Values such as rel, sourceId, TargetId, ChangedDate, isActive.
     */
    values?: T[];
}

/**
 * Enumerates types of supported xml templates used for customization.
 */
export enum TemplateType {
    WorkItemType = 0,
    GlobalWorkflow = 1,
}

/**
 * Types of tree node structures.
 */
export enum TreeNodeStructureType {
    /**
     * Area type.
     */
    Area = 0,
    /**
     * Iteration type.
     */
    Iteration = 1,
}

/**
 * Types of tree structures groups.
 */
export enum TreeStructureGroup {
    Areas = 0,
    Iterations = 1,
}

/**
 * A WIQL query
 */
export interface Wiql {
    /**
     * The text of the WIQL query
     */
    query?: string;
}

/**
 * A work artifact link describes an outbound artifact link type.
 */
export interface WorkArtifactLink {
    /**
     * Target artifact type.
     */
    artifactType?: string;
    /**
     * Outbound link type.
     */
    linkType?: string;
    /**
     * Target tool type.
     */
    toolType?: string;
}

/**
 * Describes a work item.
 */
export interface WorkItem extends WorkItemTrackingResource {
    /**
     * Reference to a specific version of the comment added/edited/deleted in this revision.
     */
    commentVersionRef?: WorkItemCommentVersionRef;
    /**
     * Map of field and values for the work item.
     */
    fields?: { [key: string] : any; };
    /**
     * The work item ID.
     */
    id?: number;
    /**
     * Relations of the work item.
     */
    relations?: WorkItemRelation[];
    /**
     * Revision number of the work item.
     */
    rev?: number;
}

/**
 * Describes a request to get a set of work items
 */
export interface WorkItemBatchGetRequest {
    /**
     * The expand parameters for work item attributes. Possible options are { None, Relations, Fields, Links, All }
     */
    $expand?: WorkItemExpand;
    /**
     * AsOf UTC date time string
     */
    asOf?: Date;
    /**
     * The flag to control error policy in a bulk get work items request. Possible options are {Fail, Omit}.
     */
    errorPolicy?: WorkItemErrorPolicy;
    /**
     * The requested fields
     */
    fields?: string[];
    /**
     * The requested work item ids
     */
    ids?: number[];
}

/**
 * Defines a classification node for work item tracking.
 */
export interface WorkItemClassificationNode extends WorkItemTrackingResource {
    /**
     * Dictionary that has node attributes like start/finish date for iteration nodes.
     */
    attributes?: { [key: string] : any; };
    /**
     * List of child nodes fetched.
     */
    children?: WorkItemClassificationNode[];
    /**
     * Flag that indicates if the classification node has any child nodes.
     */
    hasChildren?: boolean;
    /**
     * Integer ID of the classification node.
     */
    id?: number;
    /**
     * GUID ID of the classification node.
     */
    identifier?: string;
    /**
     * Name of the classification node.
     */
    name?: string;
    /**
     * Path of the classification node.
     */
    path?: string;
    /**
     * Node structure type.
     */
    structureType?: TreeNodeStructureType;
}

/**
 * Comment on Work Item
 */
export interface WorkItemComment extends WorkItemTrackingResource {
    /**
     * Identity of user who added the comment.
     */
    revisedBy?: IdentityReference;
    /**
     * The date of comment.
     */
    revisedDate?: Date;
    /**
     * The work item revision number.
     */
    revision?: number;
    /**
     * The text of the comment.
     */
    text?: string;
}

/**
 * Collection of comments.
 */
export interface WorkItemComments extends WorkItemTrackingResource {
    /**
     * Comments collection.
     */
    comments?: WorkItemComment[];
    /**
     * The count of comments.
     */
    count?: number;
    /**
     * Count of comments from the revision.
     */
    fromRevisionCount?: number;
    /**
     * Total count of comments.
     */
    totalCount?: number;
}

/**
 * Represents the reference to a specific version of a comment on a Work Item.
 */
export interface WorkItemCommentVersionRef extends WorkItemTrackingResourceReference {
    /**
     * The id assigned to the comment.
     */
    commentId?: number;
    /**
     * [Internal] The work item revision where this comment was originally added.
     */
    createdInRevision?: number;
    /**
     * [Internal] Specifies whether comment was deleted.
     */
    isDeleted?: boolean;
    /**
     * [Internal] The text of the comment.
     */
    text?: string;
    /**
     * The version number.
     */
    version?: number;
}

/**
 * Full deleted work item object. Includes the work item itself.
 */
export interface WorkItemDelete extends WorkItemDeleteReference {
    /**
     * The work item object that was deleted.
     */
    resource?: WorkItem;
}

/**
 * Reference to a deleted work item.
 */
export interface WorkItemDeleteReference {
    /**
     * The HTTP status code for work item operation in a batch request.
     */
    code?: number;
    /**
     * The user who deleted the work item type.
     */
    deletedBy?: string;
    /**
     * The work item deletion date.
     */
    deletedDate?: string;
    /**
     * Work item ID.
     */
    id?: number;
    /**
     * The exception message for work item operation in a batch request.
     */
    message?: string;
    /**
     * Name or title of the work item.
     */
    name?: string;
    /**
     * Parent project of the deleted work item.
     */
    project?: string;
    /**
     * Type of work item.
     */
    type?: string;
    /**
     * REST API URL of the resource
     */
    url?: string;
}

/**
 * Shallow Reference to a deleted work item.
 */
export interface WorkItemDeleteShallowReference {
    /**
     * Work item ID.
     */
    id?: number;
    /**
     * REST API URL of the resource
     */
    url?: string;
}

/**
 * Describes an update request for a deleted work item.
 */
export interface WorkItemDeleteUpdate {
    /**
     * Sets a value indicating whether this work item is deleted.
     */
    isDeleted?: boolean;
}

/**
 * Enum to control error policy in a bulk get work items request.
 */
export enum WorkItemErrorPolicy {
    /**
     * Fail work error policy.
     */
    Fail = 1,
    /**
     * Omit work error policy.
     */
    Omit = 2,
}

/**
 * Flag to control payload properties from get work item command.
 */
export enum WorkItemExpand {
    /**
     * Default behavior.
     */
    None = 0,
    /**
     * Relations work item expand.
     */
    Relations = 1,
    /**
     * Fields work item expand.
     */
    Fields = 2,
    /**
     * Links work item expand.
     */
    Links = 3,
    /**
     * Expands all.
     */
    All = 4,
}

/**
 * Describes a field on a work item and it's properties specific to that work item type.
 */
export interface WorkItemField extends WorkItemTrackingResource {
    /**
     * Indicates whether the field is sortable in server queries.
     */
    canSortBy?: boolean;
    /**
     * The description of the field.
     */
    description?: string;
    /**
     * Indicates whether this field is an identity field.
     */
    isIdentity?: boolean;
    /**
     * Indicates whether this instance is picklist.
     */
    isPicklist?: boolean;
    /**
     * Indicates whether this instance is a suggested picklist .
     */
    isPicklistSuggested?: boolean;
    /**
     * Indicates whether the field can be queried in the server.
     */
    isQueryable?: boolean;
    /**
     * The name of the field.
     */
    name?: string;
    /**
     * If this field is picklist, the identifier of the picklist associated, otherwise null
     */
    picklistId?: string;
    /**
     * Indicates whether the field is [read only].
     */
    readOnly?: boolean;
    /**
     * The reference name of the field.
     */
    referenceName?: string;
    /**
     * The supported operations on this field.
     */
    supportedOperations?: WorkItemFieldOperation[];
    /**
     * The type of the field.
     */
    type?: FieldType;
    /**
     * The usage of the field.
     */
    usage?: FieldUsage;
}

/**
 * Describes a work item field operation.
 */
export interface WorkItemFieldOperation {
    /**
     * Friendly name of the operation.
     */
    name?: string;
    /**
     * Reference name of the operation.
     */
    referenceName?: string;
}

/**
 * Reference to a field in a work item
 */
export interface WorkItemFieldReference {
    /**
     * The friendly name of the field.
     */
    name?: string;
    /**
     * The reference name of the field.
     */
    referenceName?: string;
    /**
     * The REST URL of the resource.
     */
    url?: string;
}

/**
 * Describes an update to a work item field.
 */
export interface WorkItemFieldUpdate {
    /**
     * The new value of the field.
     */
    newValue?: any;
    /**
     * The old value of the field.
     */
    oldValue?: any;
}

export interface WorkItemHistory extends WorkItemTrackingResource {
    rev?: number;
    revisedBy?: IdentityReference;
    revisedDate?: Date;
    value?: string;
}

/**
 * Reference to a work item icon.
 */
export interface WorkItemIcon {
    /**
     * The identifier of the icon.
     */
    id?: string;
    /**
     * The REST URL of the resource.
     */
    url?: string;
}

/**
 * A link between two work items.
 */
export interface WorkItemLink {
    /**
     * The type of link.
     */
    rel?: string;
    /**
     * The source work item.
     */
    source?: WorkItemReference;
    /**
     * The target work item.
     */
    target?: WorkItemReference;
}

/**
 * Describes the next state for a work item.
 */
export interface WorkItemNextStateOnTransition {
    /**
     * Error code if there is no next state transition possible.
     */
    errorCode?: string;
    /**
     * Work item ID.
     */
    id?: number;
    /**
     * Error message if there is no next state transition possible.
     */
    message?: string;
    /**
     * Name of the next state on transition.
     */
    stateOnTransition?: string;
}

/**
 * Represents a clause in a work item query. This shows the structure of a work item query.
 */
export interface WorkItemQueryClause {
    /**
     * Child clauses if the current clause is a logical operator
     */
    clauses?: WorkItemQueryClause[];
    /**
     * Field associated with condition
     */
    field?: WorkItemFieldReference;
    /**
     * Right side of the condition when a field to field comparison
     */
    fieldValue?: WorkItemFieldReference;
    /**
     * Determines if this is a field to field comparison
     */
    isFieldValue?: boolean;
    /**
     * Logical operator separating the condition clause
     */
    logicalOperator?: LogicalOperation;
    /**
     * The field operator
     */
    operator?: WorkItemFieldOperation;
    /**
     * Right side of the condition when a field to value comparison
     */
    value?: string;
}

/**
 * The result of a work item query.
 */
export interface WorkItemQueryResult {
    /**
     * The date the query was run in the context of.
     */
    asOf?: Date;
    /**
     * The columns of the query.
     */
    columns?: WorkItemFieldReference[];
    /**
     * The result type
     */
    queryResultType?: QueryResultType;
    /**
     * The type of the query
     */
    queryType?: QueryType;
    /**
     * The sort columns of the query.
     */
    sortColumns?: WorkItemQuerySortColumn[];
    /**
     * The work item links returned by the query.
     */
    workItemRelations?: WorkItemLink[];
    /**
     * The work items returned by the query.
     */
    workItems?: WorkItemReference[];
}

/**
 * A sort column.
 */
export interface WorkItemQuerySortColumn {
    /**
     * The direction to sort by.
     */
    descending?: boolean;
    /**
     * A work item field.
     */
    field?: WorkItemFieldReference;
}

/**
 * Type of the activity
 */
export enum WorkItemRecentActivityType {
    Visited = 0,
    Edited = 1,
    Deleted = 2,
    Restored = 3,
}

/**
 * Contains reference to a work item.
 */
export interface WorkItemReference {
    /**
     * Work item ID.
     */
    id?: number;
    /**
     * REST API URL of the resource
     */
    url?: string;
}

export interface WorkItemRelation extends Link {
}

/**
 * Represents the work item type relatiion type.
 */
export interface WorkItemRelationType extends WorkItemTrackingReference {
    /**
     * The collection of relation type attributes.
     */
    attributes?: { [key: string] : any; };
}

/**
 * Descrives updates to a work item's relations.
 */
export interface WorkItemRelationUpdates {
    /**
     * List of newly added relations.
     */
    added?: WorkItemRelation[];
    /**
     * List of removed relations.
     */
    removed?: WorkItemRelation[];
    /**
     * List of updated relations.
     */
    updated?: WorkItemRelation[];
}

/**
 * Work item type state name, color and state category
 */
export interface WorkItemStateColor {
    /**
     * Category of state
     */
    category?: string;
    /**
     * Color value
     */
    color?: string;
    /**
     * Work item type state name
     */
    name?: string;
}

/**
 * Describes a state transition in a work item.
 */
export interface WorkItemStateTransition {
    /**
     * Gets a list of actions needed to transition to that state.
     */
    actions?: string[];
    /**
     * Name of the next state.
     */
    to?: string;
}

/**
 * Describes a work item template.
 */
export interface WorkItemTemplate extends WorkItemTemplateReference {
    /**
     * Mapping of field and its templated value.
     */
    fields: { [key: string] : string; };
}

/**
 * Describes a shallow reference to a work item template.
 */
export interface WorkItemTemplateReference extends WorkItemTrackingResource {
    /**
     * The description of the work item template.
     */
    description?: string;
    /**
     * The identifier of the work item template.
     */
    id?: string;
    /**
     * The name of the work item template.
     */
    name: string;
    /**
     * The name of the work item type.
     */
    workItemTypeName: string;
}

export interface WorkItemTrackingReference extends WorkItemTrackingResource {
    /**
     * The name.
     */
    name?: string;
    /**
     * The reference name.
     */
    referenceName?: string;
}

/**
 * Base class for WIT REST resources.
 */
export interface WorkItemTrackingResource extends WorkItemTrackingResourceReference {
    /**
     * Link references to related REST resources.
     */
    _links?: any;
}

/**
 * Base class for work item tracking resource references.
 */
export interface WorkItemTrackingResourceReference {
    url?: string;
}

/**
 * Describes a work item type.
 */
export interface WorkItemType extends WorkItemTrackingResource {
    /**
     * The color.
     */
    color?: string;
    /**
     * The description of the work item type.
     */
    description?: string;
    /**
     * The fields that exist on the work item type.
     */
    fieldInstances?: WorkItemTypeFieldInstance[];
    /**
     * The fields that exist on the work item type.
     */
    fields?: WorkItemTypeFieldInstance[];
    /**
     * The icon of the work item type.
     */
    icon?: WorkItemIcon;
    /**
     * True if work item type is disabled
     */
    isDisabled?: boolean;
    /**
     * Gets the name of the work item type.
     */
    name?: string;
    /**
     * The reference name of the work item type.
     */
    referenceName?: string;
    /**
     * Gets state information for the work item type.
     */
    states?: WorkItemStateColor[];
    /**
     * Gets the various state transition mappings in the work item type.
     */
    transitions?: { [key: string] : WorkItemStateTransition[]; };
    /**
     * The XML form.
     */
    xmlForm?: string;
}

/**
 * Describes a work item type category.
 */
export interface WorkItemTypeCategory extends WorkItemTrackingResource {
    /**
     * Gets or sets the default type of the work item.
     */
    defaultWorkItemType?: WorkItemTypeReference;
    /**
     * The name of the category.
     */
    name?: string;
    /**
     * The reference name of the category.
     */
    referenceName?: string;
    /**
     * The work item types that belond to the category.
     */
    workItemTypes?: WorkItemTypeReference[];
}

/**
 * Describes a work item type's colors.
 */
export interface WorkItemTypeColor {
    /**
     * Gets or sets the color of the primary.
     */
    primaryColor?: string;
    /**
     * Gets or sets the color of the secondary.
     */
    secondaryColor?: string;
    /**
     * The name of the work item type.
     */
    workItemTypeName?: string;
}

/**
 * Describes work item type nam, its icon and color.
 */
export interface WorkItemTypeColorAndIcon {
    /**
     * The color of the work item type in hex format.
     */
    color?: string;
    /**
     * Tthe work item type icon.
     */
    icon?: string;
    /**
     * The name of the work item type.
     */
    workItemTypeName?: string;
}

/**
 * Field instance of a work item type.
 */
export interface WorkItemTypeFieldInstance extends WorkItemTypeFieldInstanceBase {
    /**
     * The list of field allowed values.
     */
    allowedValues?: string[];
    /**
     * Represents the default value of the field.
     */
    defaultValue?: string;
}

/**
 * Base field instance for workItemType fields.
 */
export interface WorkItemTypeFieldInstanceBase extends WorkItemFieldReference {
    /**
     * Indicates whether field value is always required.
     */
    alwaysRequired?: boolean;
    /**
     * The list of dependent fields.
     */
    dependentFields?: WorkItemFieldReference[];
    /**
     * Gets the help text for the field.
     */
    helpText?: string;
}

/**
 * Expand options for the work item field(s) request.
 */
export enum WorkItemTypeFieldsExpandLevel {
    /**
     * Includes only basic properties of the field.
     */
    None = 0,
    /**
     * Includes allowed values for the field.
     */
    AllowedValues = 1,
    /**
     * Includes dependent fields of the field.
     */
    DependentFields = 2,
    /**
     * Includes allowed values and dependent fields of the field.
     */
    All = 3,
}

/**
 * Field Instance of a workItemype with detailed references.
 */
export interface WorkItemTypeFieldWithReferences extends WorkItemTypeFieldInstanceBase {
    /**
     * The list of field allowed values.
     */
    allowedValues?: any[];
    /**
     * Represents the default value of the field.
     */
    defaultValue?: any;
}

/**
 * Reference to a work item type.
 */
export interface WorkItemTypeReference extends WorkItemTrackingResourceReference {
    /**
     * Name of the work item type.
     */
    name?: string;
}

/**
 * State colors for a work item type
 */
export interface WorkItemTypeStateColors {
    /**
     * Work item type state colors
     */
    stateColors?: WorkItemStateColor[];
    /**
     * Work item type name
     */
    workItemTypeName?: string;
}

/**
 * Describes a work item type template.
 */
export interface WorkItemTypeTemplate {
    /**
     * XML template in string format.
     */
    template?: string;
}

/**
 * Describes a update work item type template request body.
 */
export interface WorkItemTypeTemplateUpdateModel {
    /**
     * Describes the type of the action for the update request.
     */
    actionType?: ProvisioningActionType;
    /**
     * Methodology to which the template belongs, eg. Agile, Scrum, CMMI.
     */
    methodology?: string;
    /**
     * String representation of the work item type template.
     */
    template?: string;
    /**
     * The type of the template described in the request body.
     */
    templateType?: TemplateType;
}

/**
 * Describes an update to a work item.
 */
export interface WorkItemUpdate extends WorkItemTrackingResource {
    /**
     * List of updates to fields.
     */
    fields?: { [key: string] : WorkItemFieldUpdate; };
    /**
     * ID of update.
     */
    id?: number;
    /**
     * List of updates to relations.
     */
    relations?: WorkItemRelationUpdates;
    /**
     * The revision number of work item update.
     */
    rev?: number;
    /**
     * Identity for the work item update.
     */
    revisedBy?: IdentityReference;
    /**
     * The work item updates revision date.
     */
    revisedDate?: Date;
    /**
     * The work item ID.
     */
    workItemId?: number;
}

export var TypeInfo = {
    AccountMyWorkResult: <any>{
    },
    AccountRecentActivityWorkItemModel: <any>{
    },
    AccountRecentActivityWorkItemModel2: <any>{
    },
    AccountRecentActivityWorkItemModelBase: <any>{
    },
    AccountRecentMentionWorkItemModel: <any>{
    },
    AccountWorkWorkItemModel: <any>{
    },
    ClassificationNodesErrorPolicy: {
        enumValues: {
            "fail": 1,
            "omit": 2
        }
    },
    Comment: <any>{
    },
    CommentExpandOptions: {
        enumValues: {
            "none": 0,
            "reactions": 1,
            "mentions": 2,
            "renderedText": 8,
            "renderedTextOnly": 16,
            "all": -17
        }
    },
    CommentList: <any>{
    },
    CommentReaction: <any>{
    },
    CommentReactionType: {
        enumValues: {
            "like": 0,
            "dislike": 1,
            "heart": 2,
            "hooray": 3,
            "smile": 4,
            "confused": 5
        }
    },
    CommentSortOrder: {
        enumValues: {
            "asc": 1,
            "desc": 2
        }
    },
    CommentVersion: <any>{
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
            "identity": 10,
            "picklistString": 11,
            "picklistInteger": 12,
            "picklistDouble": 13
        }
    },
    FieldUsage: {
        enumValues: {
            "none": 0,
            "workItem": 1,
            "workItemLink": 2,
            "tree": 3,
            "workItemTypeExtension": 4
        }
    },
    GetFieldsExpand: {
        enumValues: {
            "none": 0,
            "extensionFields": 1
        }
    },
    LinkQueryMode: {
        enumValues: {
            "workItems": 0,
            "linksOneHopMustContain": 1,
            "linksOneHopMayContain": 2,
            "linksOneHopDoesNotContain": 3,
            "linksRecursiveMustContain": 4,
            "linksRecursiveMayContain": 5,
            "linksRecursiveDoesNotContain": 6
        }
    },
    LogicalOperation: {
        enumValues: {
            "none": 0,
            "and": 1,
            "or": 2
        }
    },
    ProvisioningActionType: {
        enumValues: {
            "import": 0,
            "validate": 1
        }
    },
    QueryBatchGetRequest: <any>{
    },
    QueryErrorPolicy: {
        enumValues: {
            "fail": 1,
            "omit": 2
        }
    },
    QueryExpand: {
        enumValues: {
            "none": 0,
            "wiql": 1,
            "clauses": 2,
            "all": 3,
            "minimal": 4
        }
    },
    QueryHierarchyItem: <any>{
    },
    QueryHierarchyItemsResult: <any>{
    },
    QueryOption: {
        enumValues: {
            "doing": 1,
            "done": 2,
            "followed": 3
        }
    },
    QueryRecursionOption: {
        enumValues: {
            "parentFirst": 0,
            "childFirst": 1
        }
    },
    QueryResultType: {
        enumValues: {
            "workItem": 1,
            "workItemLink": 2
        }
    },
    QueryType: {
        enumValues: {
            "flat": 1,
            "tree": 2,
            "oneHop": 3
        }
    },
    ReportingRevisionsExpand: {
        enumValues: {
            "none": 0,
            "fields": 1
        }
    },
    TemplateType: {
        enumValues: {
            "workItemType": 0,
            "globalWorkflow": 1
        }
    },
    TreeNodeStructureType: {
        enumValues: {
            "area": 0,
            "iteration": 1
        }
    },
    TreeStructureGroup: {
        enumValues: {
            "areas": 0,
            "iterations": 1
        }
    },
    WorkItemBatchGetRequest: <any>{
    },
    WorkItemClassificationNode: <any>{
    },
    WorkItemComment: <any>{
    },
    WorkItemComments: <any>{
    },
    WorkItemErrorPolicy: {
        enumValues: {
            "fail": 1,
            "omit": 2
        }
    },
    WorkItemExpand: {
        enumValues: {
            "none": 0,
            "relations": 1,
            "fields": 2,
            "links": 3,
            "all": 4
        }
    },
    WorkItemField: <any>{
    },
    WorkItemHistory: <any>{
    },
    WorkItemQueryClause: <any>{
    },
    WorkItemQueryResult: <any>{
    },
    WorkItemRecentActivityType: {
        enumValues: {
            "visited": 0,
            "edited": 1,
            "deleted": 2,
            "restored": 3
        }
    },
    WorkItemTypeFieldsExpandLevel: {
        enumValues: {
            "none": 0,
            "allowedValues": 1,
            "dependentFields": 2,
            "all": 3
        }
    },
    WorkItemTypeTemplateUpdateModel: <any>{
    },
    WorkItemUpdate: <any>{
    },
};

TypeInfo.AccountMyWorkResult.fields = {
    workItemDetails: {
        isArray: true,
        typeInfo: TypeInfo.AccountWorkWorkItemModel
    }
};

TypeInfo.AccountRecentActivityWorkItemModel.fields = {
    activityDate: {
        isDate: true,
    },
    activityType: {
        enumType: TypeInfo.WorkItemRecentActivityType
    },
    changedDate: {
        isDate: true,
    }
};

TypeInfo.AccountRecentActivityWorkItemModel2.fields = {
    activityDate: {
        isDate: true,
    },
    activityType: {
        enumType: TypeInfo.WorkItemRecentActivityType
    },
    changedDate: {
        isDate: true,
    }
};

TypeInfo.AccountRecentActivityWorkItemModelBase.fields = {
    activityDate: {
        isDate: true,
    },
    activityType: {
        enumType: TypeInfo.WorkItemRecentActivityType
    },
    changedDate: {
        isDate: true,
    }
};

TypeInfo.AccountRecentMentionWorkItemModel.fields = {
    mentionedDateField: {
        isDate: true,
    }
};

TypeInfo.AccountWorkWorkItemModel.fields = {
    changedDate: {
        isDate: true,
    }
};

TypeInfo.Comment.fields = {
    createdDate: {
        isDate: true,
    },
    createdOnBehalfDate: {
        isDate: true,
    },
    modifiedDate: {
        isDate: true,
    },
    reactions: {
        isArray: true,
        typeInfo: TypeInfo.CommentReaction
    }
};

TypeInfo.CommentList.fields = {
    comments: {
        isArray: true,
        typeInfo: TypeInfo.Comment
    }
};

TypeInfo.CommentReaction.fields = {
    type: {
        enumType: TypeInfo.CommentReactionType
    }
};

TypeInfo.CommentVersion.fields = {
    createdDate: {
        isDate: true,
    },
    createdOnBehalfDate: {
        isDate: true,
    },
    modifiedDate: {
        isDate: true,
    }
};

TypeInfo.QueryBatchGetRequest.fields = {
    $expand: {
        enumType: TypeInfo.QueryExpand
    },
    errorPolicy: {
        enumType: TypeInfo.QueryErrorPolicy
    }
};

TypeInfo.QueryHierarchyItem.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.QueryHierarchyItem
    },
    clauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    createdDate: {
        isDate: true,
    },
    filterOptions: {
        enumType: TypeInfo.LinkQueryMode
    },
    lastExecutedDate: {
        isDate: true,
    },
    lastModifiedDate: {
        isDate: true,
    },
    linkClauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    queryRecursionOption: {
        enumType: TypeInfo.QueryRecursionOption
    },
    queryType: {
        enumType: TypeInfo.QueryType
    },
    sourceClauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    targetClauses: {
        typeInfo: TypeInfo.WorkItemQueryClause
    }
};

TypeInfo.QueryHierarchyItemsResult.fields = {
    value: {
        isArray: true,
        typeInfo: TypeInfo.QueryHierarchyItem
    }
};

TypeInfo.WorkItemBatchGetRequest.fields = {
    $expand: {
        enumType: TypeInfo.WorkItemExpand
    },
    asOf: {
        isDate: true,
    },
    errorPolicy: {
        enumType: TypeInfo.WorkItemErrorPolicy
    }
};

TypeInfo.WorkItemClassificationNode.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemClassificationNode
    },
    structureType: {
        enumType: TypeInfo.TreeNodeStructureType
    }
};

TypeInfo.WorkItemComment.fields = {
    revisedDate: {
        isDate: true,
    }
};

TypeInfo.WorkItemComments.fields = {
    comments: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemComment
    }
};

TypeInfo.WorkItemField.fields = {
    type: {
        enumType: TypeInfo.FieldType
    },
    usage: {
        enumType: TypeInfo.FieldUsage
    }
};

TypeInfo.WorkItemHistory.fields = {
    revisedDate: {
        isDate: true,
    }
};

TypeInfo.WorkItemQueryClause.fields = {
    clauses: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemQueryClause
    },
    logicalOperator: {
        enumType: TypeInfo.LogicalOperation
    }
};

TypeInfo.WorkItemQueryResult.fields = {
    asOf: {
        isDate: true,
    },
    queryResultType: {
        enumType: TypeInfo.QueryResultType
    },
    queryType: {
        enumType: TypeInfo.QueryType
    }
};

TypeInfo.WorkItemTypeTemplateUpdateModel.fields = {
    actionType: {
        enumType: TypeInfo.ProvisioningActionType
    },
    templateType: {
        enumType: TypeInfo.TemplateType
    }
};

TypeInfo.WorkItemUpdate.fields = {
    revisedDate: {
        isDate: true,
    }
};
