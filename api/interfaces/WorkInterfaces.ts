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

import SystemInterfaces = require("../interfaces/System");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");
import WorkItemTrackingInterfaces = require("../interfaces/WorkItemTracking");


export interface Activity {
    capacityPerDay: number;
    name: string;
}

export interface attribute {
}

export interface BacklogColumn {
    columnFieldReference: WorkItemTrackingInterfaces.WorkItemFieldReference;
    width: number;
}

export interface BacklogConfiguration {
    /**
     * Behavior/type field mapping
     */
    backlogFields: BacklogFields;
    /**
     * Bugs behavior
     */
    bugsBehavior: BugsBehavior;
    /**
     * Hidden Backlog
     */
    hiddenBacklogs: string[];
    /**
     * Portfolio backlog descriptors
     */
    portfolioBacklogs: BacklogLevelConfiguration[];
    /**
     * Requirement backlog
     */
    requirementBacklog: BacklogLevelConfiguration;
    /**
     * Task backlog
     */
    taskBacklog: BacklogLevelConfiguration;
    url: string;
    /**
     * Mapped states for work item types
     */
    workItemTypeMappedStates: WorkItemTypeStateInfo[];
}

export interface BacklogFields {
    /**
     * Field Type (e.g. Order, Activity) to Field Reference Name map
     */
    typeFields: { [key: string] : string; };
}

/**
 * Contract representing a backlog level
 */
export interface BacklogLevel {
    /**
     * Reference name of the corresponding WIT category
     */
    categoryReferenceName: string;
    /**
     * Plural name for the backlog level
     */
    pluralName: string;
    /**
     * Collection of work item states that are included in the plan. The server will filter to only these work item types.
     */
    workItemStates: string[];
    /**
     * Collection of valid workitem type names for the given backlog level
     */
    workItemTypes: string[];
}

export interface BacklogLevelConfiguration {
    /**
     * List of fields to include in Add Panel
     */
    addPanelFields: WorkItemTrackingInterfaces.WorkItemFieldReference[];
    /**
     * Color for the backlog level
     */
    color: string;
    /**
     * Default list of columns for the backlog
     */
    columnFields: BacklogColumn[];
    /**
     * Defaulst Work Item Type for the backlog
     */
    defaultWorkItemType: WorkItemTrackingInterfaces.WorkItemTypeReference;
    /**
     * Backlog Id (for Legacy Backlog Level from process config it can be categoryref name)
     */
    id: string;
    /**
     * Backlog Name
     */
    name: string;
    /**
     * Backlog Rank (Taskbacklog is 0)
     */
    rank: number;
    /**
     * Max number of work items to show in the given backlog
     */
    workItemCountLimit: number;
    /**
     * Work Item types participating in this backlog as known by the project/Process, can be overridden by team settings for bugs
     */
    workItemTypes: WorkItemTrackingInterfaces.WorkItemTypeReference[];
}

export interface Board extends BoardReference {
    _links: any;
    allowedMappings: { [key: string] : { [key: string] : string[]; }; };
    canEdit: boolean;
    columns: BoardColumn[];
    fields: BoardFields;
    isValid: boolean;
    revision: number;
    rows: BoardRow[];
}

export interface BoardCardRuleSettings {
    _links: any;
    rules: { [key: string] : Rule[]; };
    url: string;
}

export interface BoardCardSettings {
    cards: { [key: string] : FieldSetting[]; };
}

export interface BoardChart extends BoardChartReference {
    /**
     * The links for the resource
     */
    _links: any;
    /**
     * The settings for the resource
     */
    settings: { [key: string] : any; };
}

export interface BoardChartReference {
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export interface BoardColumn {
    columnType: BoardColumnType;
    description: string;
    id: string;
    isSplit: boolean;
    itemLimit: number;
    name: string;
    stateMappings: { [key: string] : string; };
}

export enum BoardColumnType {
    Incoming = 0,
    InProgress = 1,
    Outgoing = 2,
}

export interface BoardFields {
    columnField: FieldReference;
    doneField: FieldReference;
    rowField: FieldReference;
}

export interface BoardFilterSettings {
    criteria: FilterModel;
    parentWorkItemIds: number[];
    queryText: string;
}

export interface BoardReference {
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Full http link to the resource
     */
    url: string;
}

export interface BoardRow {
    id: string;
    name: string;
}

export interface BoardSuggestedValue {
    name: string;
}

export interface BoardUserSettings {
    autoRefreshState: boolean;
}

export enum BugsBehavior {
    Off = 0,
    AsRequirements = 1,
    AsTasks = 2,
}

/**
 * Expected data from PATCH
 */
export interface CapacityPatch {
    activities: Activity[];
    daysOff: DateRange[];
}

/**
 * Card settings, such as fields and rules
 */
export interface CardFieldSettings {
    /**
     * A collection of field information of additional fields on cards. The index in the collection signifies the order of the field among the additional fields. Currently unused. Should be used with User Story 691539: Card setting: additional fields
     */
    additionalFields: FieldInfo[];
    /**
     * Display format for the assigned to field
     */
    assignedToDisplayFormat: IdentityDisplayFormat;
    /**
     * A collection of field information of rendered core fields on cards.
     */
    coreFields: FieldInfo[];
    /**
     * Flag indicating whether to show assigned to field on cards. When true, AssignedToDisplayFormat will determine how the field will be displayed
     */
    showAssignedTo: boolean;
    /**
     * Flag indicating whether to show empty fields on cards
     */
    showEmptyFields: boolean;
    /**
     * Flag indicating whether to show ID on cards
     */
    showId: boolean;
    /**
     * Flag indicating whether to show state field on cards
     */
    showState: boolean;
    /**
     * Flag indicating whether to show tags on cards
     */
    showTags: boolean;
}

/**
 * Card settings, such as fields and rules
 */
export interface CardSettings {
    /**
     * A collection of settings related to rendering of fields on cards
     */
    fields: CardFieldSettings;
}

/**
 * Details about a given backlog category
 */
export interface CategoryConfiguration {
    /**
     * Name
     */
    name: string;
    /**
     * Category Reference Name
     */
    referenceName: string;
    /**
     * Work item types for the backlog category
     */
    workItemTypes: WorkItemTrackingInterfaces.WorkItemTypeReference[];
}

export interface CreatePlan {
    /**
     * Description of the plan
     */
    description: string;
    /**
     * Name of the plan to create.
     */
    name: string;
    /**
     * Plan properties.
     */
    properties: any;
    /**
     * Type of plan to create.
     */
    type: PlanType;
}

export interface DateRange {
    /**
     * End of the date range.
     */
    end: Date;
    /**
     * Start of the date range.
     */
    start: Date;
}

/**
 * Data contract for Data of Delivery View
 */
export interface DeliveryViewData extends PlanViewData {
    /**
     * Work item child id to parenet id map
     */
    childIdToParentIdMap: { [key: number] : number; };
    /**
     * Filter criteria status of the timeline
     */
    criteriaStatus: TimelineCriteriaStatus;
    /**
     * The end date of the delivery view data
     */
    endDate: Date;
    /**
     * The start date for the delivery view data
     */
    startDate: Date;
    /**
     * All the team data
     */
    teams: TimelineTeamData[];
}

/**
 * Collection of properties, specific to the DeliveryTimelineView
 */
export interface DeliveryViewPropertyCollection extends PlanPropertyCollection {
    /**
     * Card settings
     */
    cardSettings: CardSettings;
    /**
     * Field criteria
     */
    criteria: FilterClause[];
    /**
     * Markers. Will be missing/null if there are no markers.
     */
    markers: Marker[];
    /**
     * Team backlog mappings
     */
    teamBacklogMappings: TeamBacklogMapping[];
}

/**
 * Object bag storing the set of permissions relevant to this plan
 */
export interface FieldInfo {
    /**
     * The additional field display name
     */
    displayName: string;
    /**
     * The additional field type
     */
    fieldType: FieldType;
    /**
     * Indicates if the field definition is for an identity field.
     */
    isIdentity: boolean;
    /**
     * The additional field reference name
     */
    referenceName: string;
}

/**
 * An abstracted reference to a field
 */
export interface FieldReference {
    /**
     * fieldRefName for the field
     */
    referenceName: string;
    /**
     * Full http link to more information about the field
     */
    url: string;
}

export interface FieldSetting {
}

export enum FieldType {
    String = 0,
    PlainText = 1,
    Integer = 2,
    DateTime = 3,
    TreePath = 4,
    Boolean = 5,
    Double = 6,
}

export interface FilterClause {
    fieldName: string;
    index: number;
    logicalOperator: string;
    operator: string;
    value: string;
}

export interface FilterGroup {
    end: number;
    level: number;
    start: number;
}

export interface FilterModel {
    clauses: FilterClause[];
    groups: FilterGroup[];
    maxGroupLevel: number;
}

export enum IdentityDisplayFormat {
    /**
     * Display avatar only
     */
    AvatarOnly = 0,
    /**
     * Display Full name only
     */
    FullName = 1,
    /**
     * Display Avatar and Full name
     */
    AvatarAndFullName = 2,
}

/**
 * Client serialization contract for Delivery Timeline Markers.
 */
export interface Marker {
    /**
     * Color associated with the marker.
     */
    color: string;
    /**
     * Where the marker should be displayed on the timeline.
     */
    date: Date;
    /**
     * Label/title for the marker.
     */
    label: string;
}

export interface Member {
    displayName: string;
    id: string;
    imageUrl: string;
    uniqueName: string;
    url: string;
}

export interface ParentChildWIMap {
    childWorkItemIds: number[];
    id: number;
    title: string;
}

/**
 * Data contract for the plan definition
 */
export interface Plan {
    /**
     * Identity that created this plan. Defaults to null for records before upgrading to ScaledAgileViewComponent4.
     */
    createdByIdentity: VSSInterfaces.IdentityRef;
    /**
     * Date when the plan was created
     */
    createdDate: Date;
    /**
     * Description of the plan
     */
    description: string;
    /**
     * Id of the plan
     */
    id: string;
    /**
     * Identity that last modified this plan. Defaults to null for records before upgrading to ScaledAgileViewComponent4.
     */
    modifiedByIdentity: VSSInterfaces.IdentityRef;
    /**
     * Date when the plan was last modified. Default to CreatedDate when the plan is first created.
     */
    modifiedDate: Date;
    /**
     * Name of the plan
     */
    name: string;
    /**
     * The PlanPropertyCollection instance associated with the plan. These are dependent on the type of the plan. For example, DeliveryTimelineView, it would be of type DeliveryViewPropertyCollection.
     */
    properties: any;
    /**
     * Revision of the plan. Used to safeguard users from overwriting each other's changes.
     */
    revision: number;
    /**
     * Type of the plan
     */
    type: PlanType;
    /**
     * The resource url to locate the plan via rest api
     */
    url: string;
    /**
     * Bit flag indicating set of permissions a user has to the plan.
     */
    userPermissions: PlanUserPermissions;
}

/**
 * Metadata about a plan definition that is stored in favorites service
 */
export interface PlanMetadata {
    /**
     * Identity of the creator of the plan
     */
    createdByIdentity: VSSInterfaces.IdentityRef;
    /**
     * Description of plan
     */
    description: string;
    /**
     * Last modified date of the plan
     */
    modifiedDate: Date;
    /**
     * Bit flag indicating set of permissions a user has to the plan.
     */
    userPermissions: PlanUserPermissions;
}

/**
 * Base class for properties of a scaled agile plan
 */
export interface PlanPropertyCollection {
}

export enum PlanType {
    DeliveryTimelineView = 0,
}

export enum PlanUserPermissions {
    /**
     * None
     */
    None = 0,
    /**
     * Permission to view this plan.
     */
    View = 1,
    /**
     * Permission to update this plan.
     */
    Edit = 2,
    /**
     * Permission to delete this plan.
     */
    Delete = 4,
    /**
     * Permission to manage this plan.
     */
    Manage = 8,
    /**
     * Full control permission for this plan.
     */
    AllPermissions = 15,
}

/**
 * Base class for plan view data contracts. Anything common goes here.
 */
export interface PlanViewData {
    id: string;
    revision: number;
}

/**
 * Process Configurations for the project
 */
export interface ProcessConfiguration {
    /**
     * Details about bug work items
     */
    bugWorkItems: CategoryConfiguration;
    /**
     * Details about portfolio backlogs
     */
    portfolioBacklogs: CategoryConfiguration[];
    /**
     * Details of requirement backlog
     */
    requirementBacklog: CategoryConfiguration;
    /**
     * Details of task backlog
     */
    taskBacklog: CategoryConfiguration;
    /**
     * Type fields for the process configuration
     */
    typeFields: { [key: string] : WorkItemTrackingInterfaces.WorkItemFieldReference; };
    url: string;
}

export interface Rule {
    clauses: FilterClause[];
    filter: string;
    isEnabled: string;
    name: string;
    settings: attribute;
}

/**
 * Mapping of teams to the corresponding work item category
 */
export interface TeamBacklogMapping {
    categoryReferenceName: string;
    teamId: string;
}

/**
 * Represents a single TeamFieldValue
 */
export interface TeamFieldValue {
    includeChildren: boolean;
    value: string;
}

/**
 * Essentially a collection of team field values
 */
export interface TeamFieldValues extends TeamSettingsDataContractBase {
    /**
     * The default team field value
     */
    defaultValue: string;
    /**
     * Shallow ref to the field being used as a team field
     */
    field: FieldReference;
    /**
     * Collection of all valid team field values
     */
    values: TeamFieldValue[];
}

/**
 * Expected data from PATCH
 */
export interface TeamFieldValuesPatch {
    defaultValue: string;
    values: TeamFieldValue[];
}

export interface TeamIterationAttributes {
    finishDate: Date;
    startDate: Date;
}

/**
 * Represents capacity for a specific team member
 */
export interface TeamMemberCapacity extends TeamSettingsDataContractBase {
    /**
     * Collection of capacities associated with the team member
     */
    activities: Activity[];
    /**
     * The days off associated with the team member
     */
    daysOff: DateRange[];
    /**
     * Shallow Ref to the associated team member
     */
    teamMember: Member;
}

/**
 * Data contract for TeamSettings
 */
export interface TeamSetting extends TeamSettingsDataContractBase {
    /**
     * Backlog Iteration
     */
    backlogIteration: TeamSettingsIteration;
    /**
     * Information about categories that are visible on the backlog.
     */
    backlogVisibilities: { [key: string] : boolean; };
    /**
     * BugsBehavior (Off, AsTasks, AsRequirements, ...)
     */
    bugsBehavior: BugsBehavior;
    /**
     * Default Iteration, the iteration used when creating a new work item on the queries page.
     */
    defaultIteration: TeamSettingsIteration;
    /**
     * Default Iteration macro (if any)
     */
    defaultIterationMacro: string;
    /**
     * Days that the team is working
     */
    workingDays: SystemInterfaces.DayOfWeek[];
}

/**
 * Base class for TeamSettings data contracts. Anything common goes here.
 */
export interface TeamSettingsDataContractBase {
    /**
     * Collection of links relevant to resource
     */
    _links: any;
    /**
     * Full http link to the resource
     */
    url: string;
}

export interface TeamSettingsDaysOff extends TeamSettingsDataContractBase {
    daysOff: DateRange[];
}

export interface TeamSettingsDaysOffPatch {
    daysOff: DateRange[];
}

/**
 * Represents a shallow ref for a single iteration
 */
export interface TeamSettingsIteration extends TeamSettingsDataContractBase {
    /**
     * Attributes such as start and end date
     */
    attributes: TeamIterationAttributes;
    /**
     * Id of the resource
     */
    id: string;
    /**
     * Name of the resource
     */
    name: string;
    /**
     * Relative path of the iteration
     */
    path: string;
}

/**
 * Data contract for what we expect to receive when PATCH
 */
export interface TeamSettingsPatch {
    backlogIteration: string;
    backlogVisibilities: { [key: string] : boolean; };
    bugsBehavior: BugsBehavior;
    defaultIteration: string;
    defaultIterationMacro: string;
    workingDays: SystemInterfaces.DayOfWeek[];
}

export interface TimelineCriteriaStatus {
    message: string;
    type: TimelineCriteriaStatusCode;
}

export enum TimelineCriteriaStatusCode {
    /**
     * No error - filter is good.
     */
    OK = 0,
    /**
     * One of the filter clause is invalid.
     */
    InvalidFilterClause = 1,
    /**
     * Unknown error.
     */
    Unknown = 2,
}

export interface TimelineIterationStatus {
    message: string;
    type: TimelineIterationStatusCode;
}

export enum TimelineIterationStatusCode {
    /**
     * No error - iteration data is good.
     */
    OK = 0,
    /**
     * This iteration overlaps with another iteration, no data is returned for this iteration.
     */
    IsOverlapping = 1,
}

export interface TimelineTeamData {
    /**
     * Backlog matching the mapped backlog associated with this team.
     */
    backlog: BacklogLevel;
    /**
     * The field reference names of the work item data
     */
    fieldReferenceNames: string[];
    /**
     * The id of the team
     */
    id: string;
    /**
     * Was iteration and work item data retrieved for this team.  Teams with IsExpanded false have not had their iteration, work item, and field related data queried and will never contain this data. If true then these items are queried and, if there are items in the queried range, there will be data.
     */
    isExpanded: boolean;
    /**
     * The iteration data, including the work items, in the queried date range.
     */
    iterations: TimelineTeamIteration[];
    /**
     * The name of the team
     */
    name: string;
    /**
     * The order by field name of this team
     */
    orderByField: string;
    /**
     * The field reference names of the partially paged work items, such as ID, WorkItemType
     */
    partiallyPagedFieldReferenceNames: string[];
    /**
     * The project id the team belongs team
     */
    projectId: string;
    /**
     * Status for this team.
     */
    status: TimelineTeamStatus;
    /**
     * The team field default value
     */
    teamFieldDefaultValue: string;
    /**
     * The team field name of this team
     */
    teamFieldName: string;
    /**
     * The team field values
     */
    teamFieldValues: TeamFieldValue[];
    /**
     * Colors for the work item types.
     */
    workItemTypeColors: WorkItemColor[];
}

export interface TimelineTeamIteration {
    /**
     * The end date of the iteration
     */
    finishDate: Date;
    /**
     * The iteration name
     */
    name: string;
    /**
     * All the partially paged workitems in this iteration.
     */
    partiallyPagedWorkItems: any[][];
    /**
     * The iteration path
     */
    path: string;
    /**
     * The start date of the iteration
     */
    startDate: Date;
    /**
     * The status of this iteration
     */
    status: TimelineIterationStatus;
    /**
     * The work items that have been paged in this iteration
     */
    workItems: any[][];
}

export interface TimelineTeamStatus {
    message: string;
    type: TimelineTeamStatusCode;
}

export enum TimelineTeamStatusCode {
    /**
     * No error - all data for team is good.
     */
    OK = 0,
    /**
     * Team does not exist or access is denied.
     */
    DoesntExistOrAccessDenied = 1,
    /**
     * Maximum number of teams was exceeded. No team data will be returned for this team.
     */
    MaxTeamsExceeded = 2,
    /**
     * Maximum number of team fields (ie Area paths) have been exceeded. No team data will be returned for this team.
     */
    MaxTeamFieldsExceeded = 3,
    /**
     * Backlog does not exist or is missing crucial information.
     */
    BacklogInError = 4,
    /**
     * Team field value is not set for this team. No team data will be returned for this team
     */
    MissingTeamFieldValue = 5,
    /**
     * Team does not have a single iteration with date range.
     */
    NoIterationsExist = 6,
}

export interface UpdatePlan {
    /**
     * Description of the plan
     */
    description: string;
    /**
     * Name of the plan to create.
     */
    name: string;
    /**
     * Plan properties.
     */
    properties: any;
    /**
     * Revision of the plan that was updated - the value used here should match the one the server gave the client in the Plan.
     */
    revision: number;
    /**
     * Type of the plan
     */
    type: PlanType;
}

/**
 * Work item color.
 */
export interface WorkItemColor {
    primaryColor: string;
    workItemTypeName: string;
}

export interface WorkItemTypeStateInfo {
    /**
     * State name to state category map
     */
    states: { [key: string] : string; };
    /**
     * Work Item type name
     */
    workItemTypeName: string;
}

export var TypeInfo = {
    Activity: {
        fields: <any>null
    },
    attribute: {
        fields: <any>null
    },
    BacklogColumn: {
        fields: <any>null
    },
    BacklogConfiguration: {
        fields: <any>null
    },
    BacklogFields: {
        fields: <any>null
    },
    BacklogLevel: {
        fields: <any>null
    },
    BacklogLevelConfiguration: {
        fields: <any>null
    },
    Board: {
        fields: <any>null
    },
    BoardCardRuleSettings: {
        fields: <any>null
    },
    BoardCardSettings: {
        fields: <any>null
    },
    BoardChart: {
        fields: <any>null
    },
    BoardChartReference: {
        fields: <any>null
    },
    BoardColumn: {
        fields: <any>null
    },
    BoardColumnType: {
        enumValues: {
            "incoming": 0,
            "inProgress": 1,
            "outgoing": 2,
        }
    },
    BoardFields: {
        fields: <any>null
    },
    BoardFilterSettings: {
        fields: <any>null
    },
    BoardReference: {
        fields: <any>null
    },
    BoardRow: {
        fields: <any>null
    },
    BoardSuggestedValue: {
        fields: <any>null
    },
    BoardUserSettings: {
        fields: <any>null
    },
    BugsBehavior: {
        enumValues: {
            "off": 0,
            "asRequirements": 1,
            "asTasks": 2,
        }
    },
    CapacityPatch: {
        fields: <any>null
    },
    CardFieldSettings: {
        fields: <any>null
    },
    CardSettings: {
        fields: <any>null
    },
    CategoryConfiguration: {
        fields: <any>null
    },
    CreatePlan: {
        fields: <any>null
    },
    DateRange: {
        fields: <any>null
    },
    DeliveryViewData: {
        fields: <any>null
    },
    DeliveryViewPropertyCollection: {
        fields: <any>null
    },
    FieldInfo: {
        fields: <any>null
    },
    FieldReference: {
        fields: <any>null
    },
    FieldSetting: {
        fields: <any>null
    },
    FieldType: {
        enumValues: {
            "string": 0,
            "plainText": 1,
            "integer": 2,
            "dateTime": 3,
            "treePath": 4,
            "boolean": 5,
            "double": 6,
        }
    },
    FilterClause: {
        fields: <any>null
    },
    FilterGroup: {
        fields: <any>null
    },
    FilterModel: {
        fields: <any>null
    },
    IdentityDisplayFormat: {
        enumValues: {
            "avatarOnly": 0,
            "fullName": 1,
            "avatarAndFullName": 2,
        }
    },
    Marker: {
        fields: <any>null
    },
    Member: {
        fields: <any>null
    },
    ParentChildWIMap: {
        fields: <any>null
    },
    Plan: {
        fields: <any>null
    },
    PlanMetadata: {
        fields: <any>null
    },
    PlanPropertyCollection: {
        fields: <any>null
    },
    PlanType: {
        enumValues: {
            "deliveryTimelineView": 0,
        }
    },
    PlanUserPermissions: {
        enumValues: {
            "none": 0,
            "view": 1,
            "edit": 2,
            "delete": 4,
            "manage": 8,
            "allPermissions": 15,
        }
    },
    PlanViewData: {
        fields: <any>null
    },
    ProcessConfiguration: {
        fields: <any>null
    },
    Rule: {
        fields: <any>null
    },
    TeamBacklogMapping: {
        fields: <any>null
    },
    TeamFieldValue: {
        fields: <any>null
    },
    TeamFieldValues: {
        fields: <any>null
    },
    TeamFieldValuesPatch: {
        fields: <any>null
    },
    TeamIterationAttributes: {
        fields: <any>null
    },
    TeamMemberCapacity: {
        fields: <any>null
    },
    TeamSetting: {
        fields: <any>null
    },
    TeamSettingsDataContractBase: {
        fields: <any>null
    },
    TeamSettingsDaysOff: {
        fields: <any>null
    },
    TeamSettingsDaysOffPatch: {
        fields: <any>null
    },
    TeamSettingsIteration: {
        fields: <any>null
    },
    TeamSettingsPatch: {
        fields: <any>null
    },
    TimelineCriteriaStatus: {
        fields: <any>null
    },
    TimelineCriteriaStatusCode: {
        enumValues: {
            "oK": 0,
            "invalidFilterClause": 1,
            "unknown": 2,
        }
    },
    TimelineIterationStatus: {
        fields: <any>null
    },
    TimelineIterationStatusCode: {
        enumValues: {
            "oK": 0,
            "isOverlapping": 1,
        }
    },
    TimelineTeamData: {
        fields: <any>null
    },
    TimelineTeamIteration: {
        fields: <any>null
    },
    TimelineTeamStatus: {
        fields: <any>null
    },
    TimelineTeamStatusCode: {
        enumValues: {
            "oK": 0,
            "doesntExistOrAccessDenied": 1,
            "maxTeamsExceeded": 2,
            "maxTeamFieldsExceeded": 3,
            "backlogInError": 4,
            "missingTeamFieldValue": 5,
            "noIterationsExist": 6,
        }
    },
    UpdatePlan: {
        fields: <any>null
    },
    WorkItemColor: {
        fields: <any>null
    },
    WorkItemTypeStateInfo: {
        fields: <any>null
    },
};

TypeInfo.Activity.fields = {
};

TypeInfo.attribute.fields = {
};

TypeInfo.BacklogColumn.fields = {
    columnFieldReference: {
        typeInfo: WorkItemTrackingInterfaces.TypeInfo.WorkItemFieldReference
    },
};

TypeInfo.BacklogConfiguration.fields = {
    backlogFields: {
        typeInfo: TypeInfo.BacklogFields
    },
    bugsBehavior: {
        enumType: TypeInfo.BugsBehavior
    },
    portfolioBacklogs: {
        isArray: true,
        typeInfo: TypeInfo.BacklogLevelConfiguration
    },
    requirementBacklog: {
        typeInfo: TypeInfo.BacklogLevelConfiguration
    },
    taskBacklog: {
        typeInfo: TypeInfo.BacklogLevelConfiguration
    },
    workItemTypeMappedStates: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemTypeStateInfo
    },
};

TypeInfo.BacklogFields.fields = {
};

TypeInfo.BacklogLevel.fields = {
};

TypeInfo.BacklogLevelConfiguration.fields = {
    addPanelFields: {
        isArray: true,
        typeInfo: WorkItemTrackingInterfaces.TypeInfo.WorkItemFieldReference
    },
    columnFields: {
        isArray: true,
        typeInfo: TypeInfo.BacklogColumn
    },
    defaultWorkItemType: {
        typeInfo: WorkItemTrackingInterfaces.TypeInfo.WorkItemTypeReference
    },
    workItemTypes: {
        isArray: true,
        typeInfo: WorkItemTrackingInterfaces.TypeInfo.WorkItemTypeReference
    },
};

TypeInfo.Board.fields = {
    columns: {
        isArray: true,
        typeInfo: TypeInfo.BoardColumn
    },
    fields: {
        typeInfo: TypeInfo.BoardFields
    },
    rows: {
        isArray: true,
        typeInfo: TypeInfo.BoardRow
    },
};

TypeInfo.BoardCardRuleSettings.fields = {
    rules: {
    },
};

TypeInfo.BoardCardSettings.fields = {
    cards: {
    },
};

TypeInfo.BoardChart.fields = {
};

TypeInfo.BoardChartReference.fields = {
};

TypeInfo.BoardColumn.fields = {
    columnType: {
        enumType: TypeInfo.BoardColumnType
    },
};

TypeInfo.BoardFields.fields = {
    columnField: {
        typeInfo: TypeInfo.FieldReference
    },
    doneField: {
        typeInfo: TypeInfo.FieldReference
    },
    rowField: {
        typeInfo: TypeInfo.FieldReference
    },
};

TypeInfo.BoardFilterSettings.fields = {
    criteria: {
        typeInfo: TypeInfo.FilterModel
    },
};

TypeInfo.BoardReference.fields = {
};

TypeInfo.BoardRow.fields = {
};

TypeInfo.BoardSuggestedValue.fields = {
};

TypeInfo.BoardUserSettings.fields = {
};

TypeInfo.CapacityPatch.fields = {
    activities: {
        isArray: true,
        typeInfo: TypeInfo.Activity
    },
    daysOff: {
        isArray: true,
        typeInfo: TypeInfo.DateRange
    },
};

TypeInfo.CardFieldSettings.fields = {
    additionalFields: {
        isArray: true,
        typeInfo: TypeInfo.FieldInfo
    },
    assignedToDisplayFormat: {
        enumType: TypeInfo.IdentityDisplayFormat
    },
    coreFields: {
        isArray: true,
        typeInfo: TypeInfo.FieldInfo
    },
};

TypeInfo.CardSettings.fields = {
    fields: {
        typeInfo: TypeInfo.CardFieldSettings
    },
};

TypeInfo.CategoryConfiguration.fields = {
    workItemTypes: {
        isArray: true,
        typeInfo: WorkItemTrackingInterfaces.TypeInfo.WorkItemTypeReference
    },
};

TypeInfo.CreatePlan.fields = {
    type: {
        enumType: TypeInfo.PlanType
    },
};

TypeInfo.DateRange.fields = {
    end: {
        isDate: true,
    },
    start: {
        isDate: true,
    },
};

TypeInfo.DeliveryViewData.fields = {
    criteriaStatus: {
        typeInfo: TypeInfo.TimelineCriteriaStatus
    },
    endDate: {
        isDate: true,
    },
    startDate: {
        isDate: true,
    },
    teams: {
        isArray: true,
        typeInfo: TypeInfo.TimelineTeamData
    },
};

TypeInfo.DeliveryViewPropertyCollection.fields = {
    cardSettings: {
        typeInfo: TypeInfo.CardSettings
    },
    criteria: {
        isArray: true,
        typeInfo: TypeInfo.FilterClause
    },
    markers: {
        isArray: true,
        typeInfo: TypeInfo.Marker
    },
    teamBacklogMappings: {
        isArray: true,
        typeInfo: TypeInfo.TeamBacklogMapping
    },
};

TypeInfo.FieldInfo.fields = {
    fieldType: {
        enumType: TypeInfo.FieldType
    },
};

TypeInfo.FieldReference.fields = {
};

TypeInfo.FieldSetting.fields = {
};

TypeInfo.FilterClause.fields = {
};

TypeInfo.FilterGroup.fields = {
};

TypeInfo.FilterModel.fields = {
    clauses: {
        isArray: true,
        typeInfo: TypeInfo.FilterClause
    },
    groups: {
        isArray: true,
        typeInfo: TypeInfo.FilterGroup
    },
};

TypeInfo.Marker.fields = {
    date: {
        isDate: true,
    },
};

TypeInfo.Member.fields = {
};

TypeInfo.ParentChildWIMap.fields = {
};

TypeInfo.Plan.fields = {
    createdByIdentity: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdDate: {
        isDate: true,
    },
    modifiedByIdentity: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    modifiedDate: {
        isDate: true,
    },
    type: {
        enumType: TypeInfo.PlanType
    },
    userPermissions: {
        enumType: TypeInfo.PlanUserPermissions
    },
};

TypeInfo.PlanMetadata.fields = {
    createdByIdentity: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    modifiedDate: {
        isDate: true,
    },
    userPermissions: {
        enumType: TypeInfo.PlanUserPermissions
    },
};

TypeInfo.PlanPropertyCollection.fields = {
};

TypeInfo.PlanViewData.fields = {
};

TypeInfo.ProcessConfiguration.fields = {
    bugWorkItems: {
        typeInfo: TypeInfo.CategoryConfiguration
    },
    portfolioBacklogs: {
        isArray: true,
        typeInfo: TypeInfo.CategoryConfiguration
    },
    requirementBacklog: {
        typeInfo: TypeInfo.CategoryConfiguration
    },
    taskBacklog: {
        typeInfo: TypeInfo.CategoryConfiguration
    },
};

TypeInfo.Rule.fields = {
    clauses: {
        isArray: true,
        typeInfo: TypeInfo.FilterClause
    },
    settings: {
        typeInfo: TypeInfo.attribute
    },
};

TypeInfo.TeamBacklogMapping.fields = {
};

TypeInfo.TeamFieldValue.fields = {
};

TypeInfo.TeamFieldValues.fields = {
    field: {
        typeInfo: TypeInfo.FieldReference
    },
    values: {
        isArray: true,
        typeInfo: TypeInfo.TeamFieldValue
    },
};

TypeInfo.TeamFieldValuesPatch.fields = {
    values: {
        isArray: true,
        typeInfo: TypeInfo.TeamFieldValue
    },
};

TypeInfo.TeamIterationAttributes.fields = {
    finishDate: {
        isDate: true,
    },
    startDate: {
        isDate: true,
    },
};

TypeInfo.TeamMemberCapacity.fields = {
    activities: {
        isArray: true,
        typeInfo: TypeInfo.Activity
    },
    daysOff: {
        isArray: true,
        typeInfo: TypeInfo.DateRange
    },
    teamMember: {
        typeInfo: TypeInfo.Member
    },
};

TypeInfo.TeamSetting.fields = {
    backlogIteration: {
        typeInfo: TypeInfo.TeamSettingsIteration
    },
    bugsBehavior: {
        enumType: TypeInfo.BugsBehavior
    },
    defaultIteration: {
        typeInfo: TypeInfo.TeamSettingsIteration
    },
    workingDays: {
        isArray: true,
        enumType: SystemInterfaces.TypeInfo.DayOfWeek
    },
};

TypeInfo.TeamSettingsDataContractBase.fields = {
};

TypeInfo.TeamSettingsDaysOff.fields = {
    daysOff: {
        isArray: true,
        typeInfo: TypeInfo.DateRange
    },
};

TypeInfo.TeamSettingsDaysOffPatch.fields = {
    daysOff: {
        isArray: true,
        typeInfo: TypeInfo.DateRange
    },
};

TypeInfo.TeamSettingsIteration.fields = {
    attributes: {
        typeInfo: TypeInfo.TeamIterationAttributes
    },
};

TypeInfo.TeamSettingsPatch.fields = {
    bugsBehavior: {
        enumType: TypeInfo.BugsBehavior
    },
    workingDays: {
        isArray: true,
        enumType: SystemInterfaces.TypeInfo.DayOfWeek
    },
};

TypeInfo.TimelineCriteriaStatus.fields = {
    type: {
        enumType: TypeInfo.TimelineCriteriaStatusCode
    },
};

TypeInfo.TimelineIterationStatus.fields = {
    type: {
        enumType: TypeInfo.TimelineIterationStatusCode
    },
};

TypeInfo.TimelineTeamData.fields = {
    backlog: {
        typeInfo: TypeInfo.BacklogLevel
    },
    iterations: {
        isArray: true,
        typeInfo: TypeInfo.TimelineTeamIteration
    },
    status: {
        typeInfo: TypeInfo.TimelineTeamStatus
    },
    teamFieldValues: {
        isArray: true,
        typeInfo: TypeInfo.TeamFieldValue
    },
    workItemTypeColors: {
        isArray: true,
        typeInfo: TypeInfo.WorkItemColor
    },
};

TypeInfo.TimelineTeamIteration.fields = {
    finishDate: {
        isDate: true,
    },
    startDate: {
        isDate: true,
    },
    status: {
        typeInfo: TypeInfo.TimelineIterationStatus
    },
};

TypeInfo.TimelineTeamStatus.fields = {
    type: {
        enumType: TypeInfo.TimelineTeamStatusCode
    },
};

TypeInfo.UpdatePlan.fields = {
    type: {
        enumType: TypeInfo.PlanType
    },
};

TypeInfo.WorkItemColor.fields = {
};

TypeInfo.WorkItemTypeStateInfo.fields = {
};
