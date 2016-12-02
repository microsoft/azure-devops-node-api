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

import FormInputInterfaces = require("../interfaces/common/FormInputInterfaces");
import VSS_Common_Contracts = require("../VSS/WebApi/Contracts");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface ActorFilter extends RoleBasedFilter {
}

export interface ArtifactFilter extends BaseSubscriptionFilter {
    artifactId: string;
    artifactType: string;
    artifactUri: string;
    type: string;
}

export interface ArtifactSubscription {
    artifactId: string;
    artifactType: string;
    subscriptionId: number;
}

export interface BaseSubscriptionFilter {
    eventType: string;
    type: string;
}

export interface BatchNotificationOperation {
    notificationOperation: NotificationOperation;
    notificationQueryConditions: NotificationQueryCondition[];
}

export interface BlockFilter extends RoleBasedFilter {
}

export interface BlockSubscriptionChannel {
    type: string;
}

export interface ChatRoomSubscriptionChannel extends SubscriptionChannelWithAddress {
    type: string;
}

export interface EmailHtmlSubscriptionChannel extends SubscriptionChannelWithAddress {
    type: string;
}

export interface EmailPlaintextSubscriptionChannel extends SubscriptionChannelWithAddress {
    type: string;
}

export interface EventBacklogStatus {
    maxUnprocessedEventAgeMs: number;
    timeSinceLastProcessedEventMs: number;
    unprocessedEvents: number;
}

export interface ExpressionFilter extends BaseSubscriptionFilter {
    criteria: ExpressionFilterModel;
    type: string;
}

/**
 * Subscription Filter Clause represents a single clause in a subscription filter e.g. If the subscription has the following criteria "Project Name = [Current Project] AND Assigned To = [Me] it will be represented as two Filter Clauses Clause 1: Index = 1, Logical Operator: NULL  , FieldName = 'Project Name', Operator = '=', Value = '[Current Project]' Clause 2: Index = 2, Logical Operator: 'AND' , FieldName = 'Assigned To' , Operator = '=', Value = '[Me]'
 */
export interface ExpressionFilterClause {
    fieldName: string;
    /**
     * The order in which this clause appeared in the filter query
     */
    index: number;
    /**
     * Logical Operator 'AND', 'OR' or NULL (only for the first clause in the filter)
     */
    logicalOperator: string;
    operator: string;
    value: string;
}

/**
 * Represents a hierarchy of SubscritionFilterClauses that have been grouped together through either adding a group in the WebUI or using parethesis in the Subscription condition string
 */
export interface ExpressionFilterGroup {
    /**
     * The index of the last FilterClause in this group
     */
    end: number;
    /**
     * Level of the group, since groups can be nested for each nested group the level will increase by 1
     */
    level: number;
    /**
     * The index of the first FilterClause in this group
     */
    start: number;
}

export interface ExpressionFilterModel {
    /**
     * Flat list of clauses in this subscription
     */
    clauses: ExpressionFilterClause[];
    /**
     * Grouping of clauses in the subscription
     */
    groups: ExpressionFilterGroup[];
    /**
     * Max depth of the Subscription tree
     */
    maxGroupLevel: number;
}

export interface FieldInputValues extends FormInputInterfaces.InputValues {
    operators: number[];
}

export interface FieldValuesQuery extends FormInputInterfaces.InputValuesQuery {
    inputValues: FieldInputValues[];
    scope: string;
}

export interface ISubscriptionChannel {
    type: string;
}

export interface ISubscriptionFilter {
    eventType: string;
    type: string;
}

export interface MessageQueueSubscriptionChannel {
    type: string;
}

export interface NotificationBacklogStatus {
    channel: string;
    maxUnprocessedNotificationAgeMs: number;
    timeSinceLastProcessedNotificationMs: number;
    unprocessedNotifications: number;
}

export interface NotificationEventBacklogStatus {
    eventBacklogStatus: EventBacklogStatus;
    notificationBacklogStatus: NotificationBacklogStatus[];
}

/**
 * Encapsulates the properties of a filterable field. A filterable field is a field in an event that can used to filter notifications for a certain event type.
 */
export interface NotificationEventField {
    /**
     * Gets or sets the type of this field.
     */
    fieldType: NotificationEventFieldType;
    /**
     * Gets or sets the unique identifier of this field.
     */
    id: string;
    /**
     * Gets or sets the name of this field.
     */
    name: string;
    /**
     * Gets or sets the path to the field in the event object. This path can be either Json Path or XPath, depending on if the event will be serialized into Json or XML
     */
    path: string;
    /**
     * Gets or sets the scopes that this field supports. If not specified then the event type scopes apply.
     */
    supportedScopes: string[];
}

/**
 * Encapsulates the properties of a field type. It describes the data type of a field, the operators it support and how to populate it in the UI
 */
export interface NotificationEventFieldType {
    /**
     * Gets or sets the unique identifier of this field type.
     */
    id: string;
    operatorConstraints: OperatorConstraint[];
    /**
     * Gets or sets the list of operators that this type supports.
     */
    operators: string[];
    /**
     * Gets or sets the value definition of this field like the getValuesMethod and template to display in the UI
     */
    value: ValueDefinition;
}

/**
 * Encapsulates the properties of a notification event publisher.
 */
export interface NotificationEventPublisher {
    id: string;
    subscriptionManagementInfo: SubscriptionManagement;
    url: string;
}

/**
 * Encapsulates the properties of an event role.  An event Role is used for role based subscription for example for a buildCompletedEvent, one role is request by field
 */
export interface NotificationEventRole {
    /**
     * Gets or sets an Id for that role, this id is used by the event.
     */
    id: string;
    /**
     * Gets or sets the Name for that role, this name is used for UI display.
     */
    name: string;
}

/**
 * Encapsulates the properties of an event type. It defines the fields, that can be used for filtering, for that event type.
 */
export interface NotificationEventType {
    category: NotificationEventTypeCategory;
    /**
     * Gets or sets the color representing this event type. Example: rgb(128,245,211) or #fafafa
     */
    color: string;
    eventPublisher: NotificationEventPublisher;
    fields: { [key: string] : NotificationEventField; };
    hasInitiator: boolean;
    /**
     * Gets or sets the icon representing this event type. Can be a URL or a CSS class. Example: css://some-css-class
     */
    icon: string;
    /**
     * Gets or sets the unique identifier of this event definition.
     */
    id: string;
    /**
     * Gets or sets the name of this event definition.
     */
    name: string;
    roles: NotificationEventRole[];
    /**
     * Gets or sets the scopes that this event type supports
     */
    supportedScopes: string[];
    /**
     * Gets or sets the rest end point to get this event type details (fields, fields types)
     */
    url: string;
}

/**
 * Encapsulates the properties of a category. A category will be used by the UI to group event types
 */
export interface NotificationEventTypeCategory {
    /**
     * Gets or sets the unique identifier of this category.
     */
    id: string;
    /**
     * Gets or sets the friendly name of this category.
     */
    name: string;
}

export enum NotificationOperation {
    None = 0,
    SuspendUnprocessed = 1,
}

export interface NotificationQueryCondition {
    eventInitiator: string;
    eventType: string;
    subscriber: string;
    subscriptionId: string;
}

export interface NotificationStatistic {
    date: Date;
    hitCount: number;
    path: string;
    type: NotificationStatisticType;
    user: VSSInterfaces.IdentityRef;
}

export interface NotificationStatisticsQuery {
    conditions: NotificationStatisticsQueryConditions[];
}

export interface NotificationStatisticsQueryConditions {
    date: Date;
    hitCountMinimum: number;
    path: string;
    type: NotificationStatisticType;
    user: VSSInterfaces.IdentityRef;
}

export enum NotificationStatisticType {
    NotificationBySubscription = 0,
    EventsByEventType = 1,
    NotificationByEventType = 2,
    EventsByEventTypePerUser = 3,
    NotificationByEventTypePerUser = 4,
    Events = 5,
    Notifications = 6,
    HourlyRangeStart = 1000,
    HourlyNotificationBySubscription = 1001,
    HourlyEventsByEventTypePerUser = 1002,
    HourlyEvents = 1003,
    HourlyNotifications = 1004,
}

export interface NotificationSubscription extends NotificationSubscriptionBase {
    _links: any;
    adminConfig: SubscriptionAdminConfig;
    channel: ISubscriptionChannel;
    flags: SubscriptionFlags;
    lastModifiedBy: VSSInterfaces.IdentityRef;
    modifiedDate: Date;
    scope: SubscriptionScope;
    /**
     * Raw status of the subscription
     */
    status: SubscriptionStatus;
    statusMessage: string;
    subscriber: VSSInterfaces.IdentityRef;
    subscriptionProvider: string;
    url: string;
    userConfig: SubscriptionUserConfig;
}

export interface NotificationSubscriptionBase {
    description: string;
    filter: ISubscriptionFilter;
    id: string;
}

export interface NotificationSubscriptionsViewData {
    eventTypes: { [key: string] : NotificationEventType; };
    /**
     * Indicates whether the current user generally has permissions to manage (create, delete, etc) subscriptions in the view
     */
    hasManagePermission: boolean;
    /**
     * Indicates whether the current user generally has permissions to see subscriptions in the view
     */
    hasViewPermission: boolean;
    /**
     * Is the subscription view being presented for the purpose of administration (not for managing personal subscriptions)
     */
    isAdminMode: boolean;
    mapCategoryIdToCategoryName: { [key: string] : string; };
    mapCategoryIdToSubscriptionTemplates: { [key: string] : NotificationSubscriptionTemplate[]; };
    mapEventTypeToCategoryId: { [key: string] : string; };
    mapEventTypeToPublisherId: { [key: string] : string; };
    publishers: { [key: string] : NotificationEventPublisher; };
    scopes: { [key: string] : SubscriptionScope; };
    /**
     * Subscriber to use when creating new subscriptions in the view
     */
    subscriber: VSSInterfaces.IdentityRef;
    subscriberEmail: string;
    subscriptions: NotificationSubscription[];
}

export interface NotificationSubscriptionTemplate extends NotificationSubscriptionBase {
    notificationEventInformation: NotificationEventType;
    type: SubscriptionTemplateType;
}

/**
 * Encapsulates the properties of an operator constraint. An operator constraint defines if some operator is available only for specific scope like a project scope.
 */
export interface OperatorConstraint {
    operator: string;
    /**
     * Gets or sets the list of scopes that this type supports.
     */
    supportedScopes: string[];
}

export interface RoleBasedFilter extends ExpressionFilter {
    exclusions: string[];
    inclusions: string[];
}

export interface ServiceHooksSubscriptionChannel {
    type: string;
}

export interface SoapSubscriptionChannel extends SubscriptionChannelWithAddress {
    type: string;
}

export interface SubscriptionAdminConfig {
    blockUserDisable: boolean;
    enabled: boolean;
}

export interface SubscriptionChannelWithAddress {
    address: string;
    type: string;
    useCustomAddress: boolean;
}

export enum SubscriptionFlags {
    None = 0,
    GroupSubscription = 1,
    ContributedSubscription = 2,
    CanOptOut = 4,
}

/**
 * Encapsulates the properties needed to manage subscriptions, opt in and out of subscriptions.
 */
export interface SubscriptionManagement {
    serviceInstanceType: string;
    url: string;
}

/**
 * For quering, back in response
 */
export interface SubscriptionQuery {
    conditions: SubscriptionQueryCondition[];
    queryFlags: SubscriptionQueryFlags;
}

export interface SubscriptionQueryCondition {
    filter: ISubscriptionFilter;
    scope: string;
    subscriber: string;
    subscriptionType: SubscriptionType;
}

export enum SubscriptionQueryFlags {
    None = 0,
    /**
     * IncludeAllGroupSubscriptions will include all team subscriptions even for teams that the user is not member of
     */
    IncludeAllGroupSubscriptions = 1,
    /**
     * IncludeInvalidSubscriptions will include all subscriptions that have invalid subscriber
     */
    IncludeInvalidSubscriptions = 2,
    /**
     * IncludeDeletedSubscriptions will include subscriptions marked for deletion
     */
    IncludeDeletedSubscriptions = 4,
    /**
     * AllSubscriptions will include subscriptions
     */
    IncludeAllSubscriptions = 7,
}

/**
 * Encapsulates the properties of a scope.
 */
export interface SubscriptionScope extends VSS_Common_Contracts.EventScope {
    /**
     * Gets or sets the name of this scope (for example, the name of a project)
     */
    name: string;
}

export interface SubscriptionStatisticViewData {
    events: { [key: string] : NotificationEventType; };
    isAdmin: boolean;
    statistics: { [key: number] : NotificationStatistic[]; };
    subscriptions: { [key: string] : NotificationSubscription; };
}

export enum SubscriptionStatus {
    JailedByNotificationsVolume = -200,
    PendingDeletion = -100,
    DisabledMissingIdentity = -6,
    DisabledInvalidRoleExpression = -5,
    DisabledInvalidPathClause = -4,
    DisabledAsDuplicateOfDefault = -3,
    DisabledByAdmin = -2,
    DisabledByUser = -1,
    Enabled = 0,
    EnabledOnProbation = 1,
}

export enum SubscriptionTemplateType {
    User = 0,
    Team = 1,
    Both = 2,
    None = 3,
}

export enum SubscriptionType {
    Default = 0,
    Shared = 1,
}

/**
 * Default subscriptions for now. return status for user.
 */
export interface SubscriptionUserConfig {
    enabled: boolean;
}

export interface UnsupportedFilter extends BaseSubscriptionFilter {
    type: string;
}

export interface UnsupportedSubscriptionChannel {
    type: string;
}

export interface UserSubscriptionChannel extends SubscriptionChannelWithAddress {
    type: string;
}

/**
 * Encapsulates the properties of a field value definition. It has the information needed to retrieve the list of possible values for a certain field and how to handle that field values in the UI. This information includes what type of object this value represents, which property to use for UI display and which property to use for saving the subscription
 */
export interface ValueDefinition {
    /**
     * Gets or sets the data source.
     */
    dataSource: any[];
    /**
     * Gets or sets the rest end point.
     */
    endPoint: string;
    /**
     * Gets or sets the result template.
     */
    resultTemplate: string;
}

export var TypeInfo = {
    ActorFilter: {
        fields: <any>null
    },
    ArtifactFilter: {
        fields: <any>null
    },
    ArtifactSubscription: {
        fields: <any>null
    },
    BaseSubscriptionFilter: {
        fields: <any>null
    },
    BatchNotificationOperation: {
        fields: <any>null
    },
    BlockFilter: {
        fields: <any>null
    },
    BlockSubscriptionChannel: {
        fields: <any>null
    },
    ChatRoomSubscriptionChannel: {
        fields: <any>null
    },
    EmailHtmlSubscriptionChannel: {
        fields: <any>null
    },
    EmailPlaintextSubscriptionChannel: {
        fields: <any>null
    },
    EventBacklogStatus: {
        fields: <any>null
    },
    ExpressionFilter: {
        fields: <any>null
    },
    ExpressionFilterClause: {
        fields: <any>null
    },
    ExpressionFilterGroup: {
        fields: <any>null
    },
    ExpressionFilterModel: {
        fields: <any>null
    },
    FieldInputValues: {
        fields: <any>null
    },
    FieldValuesQuery: {
        fields: <any>null
    },
    ISubscriptionChannel: {
        fields: <any>null
    },
    ISubscriptionFilter: {
        fields: <any>null
    },
    MessageQueueSubscriptionChannel: {
        fields: <any>null
    },
    NotificationBacklogStatus: {
        fields: <any>null
    },
    NotificationEventBacklogStatus: {
        fields: <any>null
    },
    NotificationEventField: {
        fields: <any>null
    },
    NotificationEventFieldType: {
        fields: <any>null
    },
    NotificationEventPublisher: {
        fields: <any>null
    },
    NotificationEventRole: {
        fields: <any>null
    },
    NotificationEventType: {
        fields: <any>null
    },
    NotificationEventTypeCategory: {
        fields: <any>null
    },
    NotificationOperation: {
        enumValues: {
            "none": 0,
            "suspendUnprocessed": 1,
        }
    },
    NotificationQueryCondition: {
        fields: <any>null
    },
    NotificationStatistic: {
        fields: <any>null
    },
    NotificationStatisticsQuery: {
        fields: <any>null
    },
    NotificationStatisticsQueryConditions: {
        fields: <any>null
    },
    NotificationStatisticType: {
        enumValues: {
            "notificationBySubscription": 0,
            "eventsByEventType": 1,
            "notificationByEventType": 2,
            "eventsByEventTypePerUser": 3,
            "notificationByEventTypePerUser": 4,
            "events": 5,
            "notifications": 6,
            "hourlyRangeStart": 1000,
            "hourlyNotificationBySubscription": 1001,
            "hourlyEventsByEventTypePerUser": 1002,
            "hourlyEvents": 1003,
            "hourlyNotifications": 1004,
        }
    },
    NotificationSubscription: {
        fields: <any>null
    },
    NotificationSubscriptionBase: {
        fields: <any>null
    },
    NotificationSubscriptionsViewData: {
        fields: <any>null
    },
    NotificationSubscriptionTemplate: {
        fields: <any>null
    },
    OperatorConstraint: {
        fields: <any>null
    },
    RoleBasedFilter: {
        fields: <any>null
    },
    ServiceHooksSubscriptionChannel: {
        fields: <any>null
    },
    SoapSubscriptionChannel: {
        fields: <any>null
    },
    SubscriptionAdminConfig: {
        fields: <any>null
    },
    SubscriptionChannelWithAddress: {
        fields: <any>null
    },
    SubscriptionFlags: {
        enumValues: {
            "none": 0,
            "groupSubscription": 1,
            "contributedSubscription": 2,
            "canOptOut": 4,
        }
    },
    SubscriptionManagement: {
        fields: <any>null
    },
    SubscriptionQuery: {
        fields: <any>null
    },
    SubscriptionQueryCondition: {
        fields: <any>null
    },
    SubscriptionQueryFlags: {
        enumValues: {
            "none": 0,
            "includeAllGroupSubscriptions": 1,
            "includeInvalidSubscriptions": 2,
            "includeDeletedSubscriptions": 4,
            "includeAllSubscriptions": 7,
        }
    },
    SubscriptionScope: {
        fields: <any>null
    },
    SubscriptionStatisticViewData: {
        fields: <any>null
    },
    SubscriptionStatus: {
        enumValues: {
            "jailedByNotificationsVolume": -200,
            "pendingDeletion": -100,
            "disabledMissingIdentity": -6,
            "disabledInvalidRoleExpression": -5,
            "disabledInvalidPathClause": -4,
            "disabledAsDuplicateOfDefault": -3,
            "disabledByAdmin": -2,
            "disabledByUser": -1,
            "enabled": 0,
            "enabledOnProbation": 1,
        }
    },
    SubscriptionTemplateType: {
        enumValues: {
            "user": 0,
            "team": 1,
            "both": 2,
            "none": 3,
        }
    },
    SubscriptionType: {
        enumValues: {
            "default": 0,
            "shared": 1,
        }
    },
    SubscriptionUserConfig: {
        fields: <any>null
    },
    UnsupportedFilter: {
        fields: <any>null
    },
    UnsupportedSubscriptionChannel: {
        fields: <any>null
    },
    UserSubscriptionChannel: {
        fields: <any>null
    },
    ValueDefinition: {
        fields: <any>null
    },
};

TypeInfo.ActorFilter.fields = {
    criteria: {
        typeInfo: TypeInfo.ExpressionFilterModel
    },
};

TypeInfo.ArtifactFilter.fields = {
};

TypeInfo.ArtifactSubscription.fields = {
};

TypeInfo.BaseSubscriptionFilter.fields = {
};

TypeInfo.BatchNotificationOperation.fields = {
    notificationOperation: {
        enumType: TypeInfo.NotificationOperation
    },
    notificationQueryConditions: {
        isArray: true,
        typeInfo: TypeInfo.NotificationQueryCondition
    },
};

TypeInfo.BlockFilter.fields = {
    criteria: {
        typeInfo: TypeInfo.ExpressionFilterModel
    },
};

TypeInfo.BlockSubscriptionChannel.fields = {
};

TypeInfo.ChatRoomSubscriptionChannel.fields = {
};

TypeInfo.EmailHtmlSubscriptionChannel.fields = {
};

TypeInfo.EmailPlaintextSubscriptionChannel.fields = {
};

TypeInfo.EventBacklogStatus.fields = {
};

TypeInfo.ExpressionFilter.fields = {
    criteria: {
        typeInfo: TypeInfo.ExpressionFilterModel
    },
};

TypeInfo.ExpressionFilterClause.fields = {
};

TypeInfo.ExpressionFilterGroup.fields = {
};

TypeInfo.ExpressionFilterModel.fields = {
    clauses: {
        isArray: true,
        typeInfo: TypeInfo.ExpressionFilterClause
    },
    groups: {
        isArray: true,
        typeInfo: TypeInfo.ExpressionFilterGroup
    },
};

TypeInfo.FieldInputValues.fields = {
};

TypeInfo.FieldValuesQuery.fields = {
    inputValues: {
        isArray: true,
        typeInfo: TypeInfo.FieldInputValues
    },
    inputValues: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputValues
    },
};

TypeInfo.ISubscriptionChannel.fields = {
};

TypeInfo.ISubscriptionFilter.fields = {
};

TypeInfo.MessageQueueSubscriptionChannel.fields = {
};

TypeInfo.NotificationBacklogStatus.fields = {
};

TypeInfo.NotificationEventBacklogStatus.fields = {
    eventBacklogStatus: {
        typeInfo: TypeInfo.EventBacklogStatus
    },
    notificationBacklogStatus: {
        isArray: true,
        typeInfo: TypeInfo.NotificationBacklogStatus
    },
};

TypeInfo.NotificationEventField.fields = {
    fieldType: {
        typeInfo: TypeInfo.NotificationEventFieldType
    },
};

TypeInfo.NotificationEventFieldType.fields = {
    operatorConstraints: {
        isArray: true,
        typeInfo: TypeInfo.OperatorConstraint
    },
    value: {
        typeInfo: TypeInfo.ValueDefinition
    },
};

TypeInfo.NotificationEventPublisher.fields = {
    subscriptionManagementInfo: {
        typeInfo: TypeInfo.SubscriptionManagement
    },
};

TypeInfo.NotificationEventRole.fields = {
};

TypeInfo.NotificationEventType.fields = {
    category: {
        typeInfo: TypeInfo.NotificationEventTypeCategory
    },
    eventPublisher: {
        typeInfo: TypeInfo.NotificationEventPublisher
    },
    fields: {
    },
    roles: {
        isArray: true,
        typeInfo: TypeInfo.NotificationEventRole
    },
};

TypeInfo.NotificationEventTypeCategory.fields = {
};

TypeInfo.NotificationQueryCondition.fields = {
};

TypeInfo.NotificationStatistic.fields = {
    date: {
        isDate: true,
    },
    type: {
        enumType: TypeInfo.NotificationStatisticType
    },
    user: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.NotificationStatisticsQuery.fields = {
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.NotificationStatisticsQueryConditions
    },
};

TypeInfo.NotificationStatisticsQueryConditions.fields = {
    date: {
        isDate: true,
    },
    type: {
        enumType: TypeInfo.NotificationStatisticType
    },
    user: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.NotificationSubscription.fields = {
    adminConfig: {
        typeInfo: TypeInfo.SubscriptionAdminConfig
    },
    channel: {
        typeInfo: TypeInfo.ISubscriptionChannel
    },
    filter: {
        typeInfo: TypeInfo.ISubscriptionFilter
    },
    flags: {
        enumType: TypeInfo.SubscriptionFlags
    },
    lastModifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    modifiedDate: {
        isDate: true,
    },
    scope: {
        typeInfo: TypeInfo.SubscriptionScope
    },
    status: {
        enumType: TypeInfo.SubscriptionStatus
    },
    subscriber: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    userConfig: {
        typeInfo: TypeInfo.SubscriptionUserConfig
    },
};

TypeInfo.NotificationSubscriptionBase.fields = {
    filter: {
        typeInfo: TypeInfo.ISubscriptionFilter
    },
};

TypeInfo.NotificationSubscriptionsViewData.fields = {
    eventTypes: {
    },
    mapCategoryIdToSubscriptionTemplates: {
    },
    publishers: {
    },
    scopes: {
    },
    subscriber: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    subscriptions: {
        isArray: true,
        typeInfo: TypeInfo.NotificationSubscription
    },
};

TypeInfo.NotificationSubscriptionTemplate.fields = {
    filter: {
        typeInfo: TypeInfo.ISubscriptionFilter
    },
    notificationEventInformation: {
        typeInfo: TypeInfo.NotificationEventType
    },
    type: {
        enumType: TypeInfo.SubscriptionTemplateType
    },
};

TypeInfo.OperatorConstraint.fields = {
};

TypeInfo.RoleBasedFilter.fields = {
    criteria: {
        typeInfo: TypeInfo.ExpressionFilterModel
    },
};

TypeInfo.ServiceHooksSubscriptionChannel.fields = {
};

TypeInfo.SoapSubscriptionChannel.fields = {
};

TypeInfo.SubscriptionAdminConfig.fields = {
};

TypeInfo.SubscriptionChannelWithAddress.fields = {
};

TypeInfo.SubscriptionManagement.fields = {
};

TypeInfo.SubscriptionQuery.fields = {
    conditions: {
        isArray: true,
        typeInfo: TypeInfo.SubscriptionQueryCondition
    },
    queryFlags: {
        enumType: TypeInfo.SubscriptionQueryFlags
    },
};

TypeInfo.SubscriptionQueryCondition.fields = {
    filter: {
        typeInfo: TypeInfo.ISubscriptionFilter
    },
    subscriptionType: {
        enumType: TypeInfo.SubscriptionType
    },
};

TypeInfo.SubscriptionScope.fields = {
};

TypeInfo.SubscriptionStatisticViewData.fields = {
    events: {
    },
    statistics: {
    },
    subscriptions: {
    },
};

TypeInfo.SubscriptionUserConfig.fields = {
};

TypeInfo.UnsupportedFilter.fields = {
};

TypeInfo.UnsupportedSubscriptionChannel.fields = {
};

TypeInfo.UserSubscriptionChannel.fields = {
};

TypeInfo.ValueDefinition.fields = {
};
