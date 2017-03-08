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
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface ArtifactFilter extends BaseSubscriptionFilter {
    artifactId: string;
    artifactType: string;
    artifactUri: string;
    type: string;
}

export interface BaseSubscriptionFilter {
    eventType: string;
    type: string;
}

export interface BatchNotificationOperation {
    notificationOperation: NotificationOperation;
    notificationQueryConditions: NotificationQueryCondition[];
}

export enum EvaluationOperationStatus {
    /**
     * The operation object does not have the status set.
     */
    NotSet = 0,
    /**
     * The operation has been queued.
     */
    Queued = 1,
    /**
     * The operation is in progress.
     */
    InProgress = 2,
    /**
     * The operation was cancelled by the user.
     */
    Cancelled = 3,
    /**
     * The operation completed successfully.
     */
    Succeeded = 4,
    /**
     * The operation completed with a failure.
     */
    Failed = 5,
    /**
     * The operation timed out.
     */
    TimedOut = 6,
    /**
     * The operation could not be found.
     */
    NotFound = 7,
}

/**
 * Encapsulates events result properties. It defines the total number of events used and the number of matched events.
 */
export interface EventsEvaluationResult {
    /**
     * Count of events evaluated.
     */
    count: number;
    /**
     * Count of matched events.
     */
    matchedCount: number;
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
    customSubscriptionsAllowed: boolean;
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

/**
 * Encapsulates notifications result properties. It defines the number of notifications and the recipients of notifications.
 */
export interface NotificationsEvaluationResult {
    /**
     * Count of generated notifications
     */
    count: number;
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

/**
 * A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.
 */
export interface NotificationSubscription {
    /**
     * Links to related resources, APIs, and views for the subscription.
     */
    _links: any;
    /**
     * Admin-managed settings for the subscription. Only applies when the subscriber is a group.
     */
    adminSettings: SubscriptionAdminSettings;
    /**
     * Channel for delivering notifications triggered by the subscription.
     */
    channel: ISubscriptionChannel;
    /**
     * Description of the subscription. Typically describes filter criteria which helps identity the subscription.
     */
    description: string;
    /**
     * Matching criteria for the subscription.
     */
    filter: ISubscriptionFilter;
    /**
     * Read-only indicators that further describe the subscription.
     */
    flags: SubscriptionFlags;
    /**
     * Subscription identifier.
     */
    id: string;
    /**
     * User that last modified (or created) the subscription.
     */
    lastModifiedBy: VSSInterfaces.IdentityRef;
    /**
     * Date when the subscription was last modified. If the subscription has not been updated since it was created, this value will indicate when the subscription was created.
     */
    modifiedDate: Date;
    /**
     * The permissions the user have for this subscriptions.
     */
    permissions: SubscriptionPermissions;
    /**
     * The container in which events must be published from in order to be matched by the subscription. If empty, the scope is the current host (typically an account or project collection). For example, a subscription scoped to project A will not produce notifications for events published from project B.
     */
    scope: SubscriptionScope;
    /**
     * Status of the subscription. Typically indicates whether the subscription is enabled or not.
     */
    status: SubscriptionStatus;
    /**
     * Message that provides more details about the status of the subscription.
     */
    statusMessage: string;
    /**
     * User or group that will receive notifications for events matching the subscription's filter criteria.
     */
    subscriber: VSSInterfaces.IdentityRef;
    /**
     * User-managed settings for the subscription. Only applies when the subscriber is a group. Typically used to indicate whether the calling user is opted in or out of a group subscription.
     */
    subscriptionUserSettings: SubscriptionUserSettings;
    /**
     * REST API URL of the subscriotion.
     */
    url: string;
}

/**
 * Parameters for creating a new subscription. A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.
 */
export interface NotificationSubscriptionCreateParameters {
    /**
     * Channel for delivering notifications triggered by the new subscription.
     */
    channel: ISubscriptionChannel;
    /**
     * Brief description for the new subscription. Typically describes filter criteria which helps identity the subscription.
     */
    description: string;
    /**
     * Matching criteria for the new subscription.
     */
    filter: ISubscriptionFilter;
    /**
     * The container in which events must be published from in order to be matched by the new subscription. If not specified, defaults to the current host (typically an account or project collection). For example, a subscription scoped to project A will not produce notifications for events published from project B.
     */
    scope: SubscriptionScope;
    /**
     * User or group that will receive notifications for events matching the subscription's filter criteria. If not specified, defaults to the calling user.
     */
    subscriber: VSSInterfaces.IdentityRef;
}

export interface NotificationSubscriptionsViewData {
    /**
     * The Url to the admin page
     */
    adminPageUrl: string;
    /**
     * Default service instance type, currently it is Tfs, it used if there is no publisher passed
     */
    defaultServiceInstanceType: string;
    eventsPublishers: NotificationEventPublisher[];
    /**
     * Supported  event types info, with their fields and field types
     */
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
    /**
     * Indicates whether the user's preferred email address is pending confirmation.
     */
    isSubscriberEmailPending: boolean;
    mapCategoryIdToCategoryName: { [key: string] : string; };
    mapCategoryIdToSubscriptionTemplates: { [key: string] : NotificationSubscriptionTemplate[]; };
    mapEventTypeToPublisherId: { [key: string] : string; };
    publishers: { [key: string] : NotificationEventPublisher; };
    scopes: { [key: string] : SubscriptionScope; };
    /**
     * Subscriber to use when creating new subscriptions in the view
     */
    subscriber: VSSInterfaces.IdentityRef;
    /**
     * Email address that notifications for this user will be sent to by default.
     */
    subscriberEmail: string;
    subscriptions: NotificationSubscription[];
    /**
     * The subscription evaluation operation settings needed for the UI
     */
    subsEvaluationSettings: SubscriptionEvaluationSettings;
}

export interface NotificationSubscriptionTemplate {
    description: string;
    filter: ISubscriptionFilter;
    id: string;
    notificationEventInformation: NotificationEventType;
    type: SubscriptionTemplateType;
}

/**
 * Parameters for updating an existing subscription. A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events. Note: only the fields to be updated should be set.
 */
export interface NotificationSubscriptionUpdateParameters {
    /**
     * Admin-managed settings for the subscription. Only applies to subscriptions where the subscriber is a group.
     */
    adminSettings: SubscriptionAdminSettings;
    /**
     * Channel for delivering notifications triggered by the subscription.
     */
    channel: ISubscriptionChannel;
    /**
     * Updated description for the subscription. Typically describes filter criteria which helps identity the subscription.
     */
    description: string;
    /**
     * Matching criteria for the subscription.
     */
    filter: ISubscriptionFilter;
    /**
     * The container in which events must be published from in order to be matched by the new subscription. If not specified, defaults to the current host (typically the current account or project collection). For example, a subscription scoped to project A will not produce notifications for events published from project B.
     */
    scope: SubscriptionScope;
    /**
     * Updated status for the subscription. Typically used to enable or disable a subscription.
     */
    status: SubscriptionStatus;
    /**
     * Optional message that provides more details about the updated status.
     */
    statusMessage: string;
    /**
     * User or group that will receive notifications for events matching the subscription's filter criteria.
     */
    subscriber: VSSInterfaces.IdentityRef;
    /**
     * User-managed settings for the subscription. Only applies to subscriptions where the subscriber is a group. Typically used to opt-in or opt-out a user from a group subscription.
     */
    subscriptionUserSettings: SubscriptionUserSettings;
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

/**
 * Admin-managed settings for a group subscription.
 */
export interface SubscriptionAdminSettings {
    /**
     * If true, members of the group subscribed to the associated subscription cannot opt (choose not to get notified)
     */
    blockUserOptOut: boolean;
}

export interface SubscriptionChannelWithAddress {
    address: string;
    type: string;
    useCustomAddress: boolean;
}

/**
 * Encapsulates the properties of a SubscriptionEvaluationRequest. It defines the subscription to be evaluated and time interval for events used in evaluation.
 */
export interface SubscriptionEvaluationRequest {
    /**
     * The min created date for the events used for matching in UTC. Use all events created since this date
     */
    minEventsCreatedDate: Date;
    /**
     * User or group that will receive notifications for events matching the subscription's filter criteria. If not specified, defaults to the calling user.
     */
    subscriptionCreateParameters: NotificationSubscriptionCreateParameters;
}

/**
 * Ecapsulates the subscription evaluation results. It defines the Date Interval that was used, number of events evaluated and events and notifications results
 */
export interface SubscriptionEvaluationResult {
    /**
     * Subscription evaluation job status
     */
    evaluationJobStatus: EvaluationOperationStatus;
    /**
     * Subscription evaluation events results.
     */
    events: EventsEvaluationResult;
    /**
     * The requestId which is the subscription evaluation jobId
     */
    id: string;
    /**
     * Subscription evaluation  notification results.
     */
    notifications: NotificationsEvaluationResult;
}

/**
 * Encapsulates the subscription evaluation settings needed for the UI
 */
export interface SubscriptionEvaluationSettings {
    /**
     * Indicates whether subscription evaluation before saving is enabled or not
     */
    enabled: boolean;
    /**
     * Time interval to check on subscription evaluation job in seconds
     */
    interval: number;
    /**
     * Threshold on the number of notifications for considering a subscription too noisy
     */
    threshold: number;
    /**
     * Time out for the subscription evaluation check in seconds
     */
    timeOut: number;
}

export enum SubscriptionFlags {
    /**
     * None
     */
    None = 0,
    /**
     * Subscription's subscriber is a group, not a user
     */
    GroupSubscription = 1,
    /**
     * Subscription is contributed and not persisted. This means certain fields of the subscription, like Filter, are read-only.
     */
    ContributedSubscription = 2,
    /**
     * A user that is member of the subscription's subscriber group can opt in/out of the subscription.
     */
    CanOptOut = 4,
}

/**
 * Encapsulates the properties needed to manage subscriptions, opt in and out of subscriptions.
 */
export interface SubscriptionManagement {
    serviceInstanceType: string;
    url: string;
}

export enum SubscriptionPermissions {
    /**
     * None
     */
    None = 0,
    /**
     * full view of description, filters, etc. Not limited.
     */
    View = 1,
    /**
     * update subscription
     */
    Edit = 2,
    /**
     * delete subscription
     */
    Delete = 4,
}

/**
 * Notification subscriptions query input.
 */
export interface SubscriptionQuery {
    /**
     * One or more conditions to query on. If more than 2 conditions are specified, the combined results of each condition is returned (i.e. conditions are logically OR'ed).
     */
    conditions: SubscriptionQueryCondition[];
    /**
     * Flags the refine the types of subscriptions that will be returned from the query.
     */
    queryFlags: SubscriptionQueryFlags;
}

/**
 * Conditions a subscription must match to qualify for the query result set. Not all fields are required. A subscription must match all conditions specified in order to qualify for the result set.
 */
export interface SubscriptionQueryCondition {
    /**
     * Filter conditions that matching subscriptions must have. Typically only the filter's type and event type are used for matching.
     */
    filter: ISubscriptionFilter;
    /**
     * Scope that matching subscriptions must have.
     */
    scope: string;
    /**
     * ID of the subscriber (user or group) that matching subscriptions must be subscribed to.
     */
    subscriber: string;
    /**
     * ID of the subscription to query for.
     */
    subscriptionId: string;
    subscriptionType: SubscriptionType;
}

export enum SubscriptionQueryFlags {
    None = 0,
    /**
     * Include all team subscriptions for teams that the user is not member of.
     */
    IncludeAllGroupSubscriptions = 1,
    /**
     * Include subscriptions with invalid subscribers.
     */
    IncludeInvalidSubscriptions = 2,
    /**
     * Include subscriptions marked for deletion.
     */
    IncludeDeletedSubscriptions = 4,
    /**
     * Include the full filter details with each subscription.
     */
    IncludeFilterDetails = 8,
    /**
     * For a subscription the caller does not have permission to view, return basic (non-confidential) information.
     */
    AlwaysReturnBasicInformation = 22,
    /**
     * Include all group, invalid, and subscriptions marked for deletion.
     */
    IncludeAllSubscriptions = 7,
}

/**
 * A resource, typically an account or project, in which events are published from.
 */
export interface SubscriptionScope extends VSSInterfaces.EventScope {
    name: string;
}

export interface SubscriptionStatisticViewData {
    events: { [key: string] : NotificationEventType; };
    isAdmin: boolean;
    /**
     * Date used for querying for those statistics
     */
    queryDate: Date;
    statistics: { [key: number] : NotificationStatistic[]; };
    subscriptions: { [key: string] : NotificationSubscription; };
}

export enum SubscriptionStatus {
    /**
     * Subscription is disabled because it generated a high volume of notifications.
     */
    JailedByNotificationsVolume = -200,
    /**
     * Subscription is disabled and will be deleted.
     */
    PendingDeletion = -100,
    /**
     * Subscription is disabled because its subscriber is unknown.
     */
    DisabledMissingIdentity = -6,
    /**
     * Subscription is disabled because it has an invalid role expression.
     */
    DisabledInvalidRoleExpression = -5,
    /**
     * Subscription is disabled because it has an invalid filter expression.
     */
    DisabledInvalidPathClause = -4,
    /**
     * Subscription is disabled because it is a duplicate of a default subscription.
     */
    DisabledAsDuplicateOfDefault = -3,
    /**
     * Subscription is disabled by an administrator, not the subscription's subscriber.
     */
    DisabledByAdmin = -2,
    /**
     * Subscription is disabled, typically by the owner of the subscription, and will not produce any notifications.
     */
    Disabled = -1,
    /**
     * Subscription is active.
     */
    Enabled = 0,
    /**
     * Subscription is active, but is on probation due to failed deliveries or other issues with the subscription.
     */
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
 * User-managed settings for a group subscription.
 */
export interface SubscriptionUserSettings {
    /**
     * Indicates whether the user will receive notifications for the associated group subscription.
     */
    optedOut: boolean;
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
    ArtifactFilter: {
        fields: <any>null
    },
    BaseSubscriptionFilter: {
        fields: <any>null
    },
    BatchNotificationOperation: {
        fields: <any>null
    },
    EvaluationOperationStatus: {
        enumValues: {
            "notSet": 0,
            "queued": 1,
            "inProgress": 2,
            "cancelled": 3,
            "succeeded": 4,
            "failed": 5,
            "timedOut": 6,
            "notFound": 7,
        }
    },
    EventsEvaluationResult: {
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
    NotificationsEvaluationResult: {
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
    NotificationSubscriptionCreateParameters: {
        fields: <any>null
    },
    NotificationSubscriptionsViewData: {
        fields: <any>null
    },
    NotificationSubscriptionTemplate: {
        fields: <any>null
    },
    NotificationSubscriptionUpdateParameters: {
        fields: <any>null
    },
    OperatorConstraint: {
        fields: <any>null
    },
    SubscriptionAdminSettings: {
        fields: <any>null
    },
    SubscriptionChannelWithAddress: {
        fields: <any>null
    },
    SubscriptionEvaluationRequest: {
        fields: <any>null
    },
    SubscriptionEvaluationResult: {
        fields: <any>null
    },
    SubscriptionEvaluationSettings: {
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
    SubscriptionPermissions: {
        enumValues: {
            "none": 0,
            "view": 1,
            "edit": 2,
            "delete": 4,
        }
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
            "includeFilterDetails": 8,
            "alwaysReturnBasicInformation": 22,
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
            "disabled": -1,
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
    SubscriptionUserSettings: {
        fields: <any>null
    },
    ValueDefinition: {
        fields: <any>null
    },
};

TypeInfo.ArtifactFilter.fields = {
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

TypeInfo.EventsEvaluationResult.fields = {
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
    error: {
        typeInfo: FormInputInterfaces.TypeInfo.InputValuesError
    },
    possibleValues: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputValue
    },
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

TypeInfo.NotificationsEvaluationResult.fields = {
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
    adminSettings: {
        typeInfo: TypeInfo.SubscriptionAdminSettings
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
    permissions: {
        enumType: TypeInfo.SubscriptionPermissions
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
    subscriptionUserSettings: {
        typeInfo: TypeInfo.SubscriptionUserSettings
    },
};

TypeInfo.NotificationSubscriptionCreateParameters.fields = {
    channel: {
        typeInfo: TypeInfo.ISubscriptionChannel
    },
    filter: {
        typeInfo: TypeInfo.ISubscriptionFilter
    },
    scope: {
        typeInfo: TypeInfo.SubscriptionScope
    },
    subscriber: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.NotificationSubscriptionsViewData.fields = {
    eventsPublishers: {
        isArray: true,
        typeInfo: TypeInfo.NotificationEventPublisher
    },
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
    subsEvaluationSettings: {
        typeInfo: TypeInfo.SubscriptionEvaluationSettings
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

TypeInfo.NotificationSubscriptionUpdateParameters.fields = {
    adminSettings: {
        typeInfo: TypeInfo.SubscriptionAdminSettings
    },
    channel: {
        typeInfo: TypeInfo.ISubscriptionChannel
    },
    filter: {
        typeInfo: TypeInfo.ISubscriptionFilter
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
    subscriptionUserSettings: {
        typeInfo: TypeInfo.SubscriptionUserSettings
    },
};

TypeInfo.OperatorConstraint.fields = {
};

TypeInfo.SubscriptionAdminSettings.fields = {
};

TypeInfo.SubscriptionChannelWithAddress.fields = {
};

TypeInfo.SubscriptionEvaluationRequest.fields = {
    minEventsCreatedDate: {
        isDate: true,
    },
    subscriptionCreateParameters: {
        typeInfo: TypeInfo.NotificationSubscriptionCreateParameters
    },
};

TypeInfo.SubscriptionEvaluationResult.fields = {
    evaluationJobStatus: {
        enumType: TypeInfo.EvaluationOperationStatus
    },
    events: {
        typeInfo: TypeInfo.EventsEvaluationResult
    },
    notifications: {
        typeInfo: TypeInfo.NotificationsEvaluationResult
    },
};

TypeInfo.SubscriptionEvaluationSettings.fields = {
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
    queryDate: {
        isDate: true,
    },
    statistics: {
    },
    subscriptions: {
    },
};

TypeInfo.SubscriptionUserSettings.fields = {
};

TypeInfo.ValueDefinition.fields = {
};
