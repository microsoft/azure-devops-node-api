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


export enum AuthenticationType {
    /**
     * No authentication is required.
     */
    None = 0,
    /**
     * OAuth authentication.
     */
    OAuth = 10,
    /**
     * Externally-configured authentication.
     */
    External = 30,
}

/**
 * Defines the data contract of a consumer.
 */
export interface Consumer {
    /**
     * Reference Links
     */
    _links: any;
    /**
     * Gets this consumer's actions.
     */
    actions: ConsumerAction[];
    /**
     * Gets or sets this consumer's authentication type.
     */
    authenticationType: AuthenticationType;
    /**
     * Gets or sets this consumer's localized description.
     */
    description: string;
    /**
     * Non-null only if subscriptions for this consumer are configured externally.
     */
    externalConfiguration: ExternalConfigurationDescriptor;
    /**
     * Gets or sets this consumer's identifier.
     */
    id: string;
    /**
     * Gets or sets this consumer's image URL, if any.
     */
    imageUrl: string;
    /**
     * Gets or sets this consumer's information URL, if any.
     */
    informationUrl: string;
    /**
     * Gets or sets this consumer's input descriptors.
     */
    inputDescriptors: FormInputInterfaces.InputDescriptor[];
    /**
     * Gets or sets this consumer's localized name.
     */
    name: string;
    /**
     * The url for this resource
     */
    url: string;
}

/**
 * Defines the data contract of a consumer action.
 */
export interface ConsumerAction {
    /**
     * Reference Links
     */
    _links: any;
    /**
     * Gets or sets the flag indicating if resource version can be overridden when creating or editing a subscription.
     */
    allowResourceVersionOverride: boolean;
    /**
     * Gets or sets the identifier of the consumer to which this action belongs.
     */
    consumerId: string;
    /**
     * Gets or sets this action's localized description.
     */
    description: string;
    /**
     * Gets or sets this action's identifier.
     */
    id: string;
    /**
     * Gets or sets this action's input descriptors.
     */
    inputDescriptors: FormInputInterfaces.InputDescriptor[];
    /**
     * Gets or sets this action's localized name.
     */
    name: string;
    /**
     * Gets or sets this action's supported event identifiers.
     */
    supportedEventTypes: string[];
    /**
     * Gets or sets this action's supported resource versions.
     */
    supportedResourceVersions: { [key: string] : string[]; };
    /**
     * The url for this resource
     */
    url: string;
}

/**
 * Encapsulates the properties of an event.
 */
export interface Event {
    /**
     * Gets or sets the UTC-based date and time that this event was created.
     */
    createdDate: Date;
    /**
     * Gets or sets the detailed message associated with this event.
     */
    detailedMessage: FormattedEventMessage;
    /**
     * Gets or sets the type of this event.
     */
    eventType: string;
    /**
     * Gets or sets the unique identifier of this event.
     */
    id: string;
    /**
     * Gets or sets the (brief) message associated with this event.
     */
    message: FormattedEventMessage;
    /**
     * Gets or sets the identifier of the publisher that raised this event.
     */
    publisherId: string;
    /**
     * Gets or sets the data associated with this event.
     */
    resource: any;
    /**
     * Gets or sets the resource containers.
     */
    resourceContainers: { [key: string] : ResourceContainer; };
    /**
     * Gets or sets the version of the data associated with this event.
     */
    resourceVersion: string;
    /**
     * Gets or sets the scope for this event.
     */
    scope: EventScope;
    /**
     * Gets or sets the Session Token that can be used in further interactions
     */
    sessionToken: SessionToken;
}

export enum EventScope {
    /**
     * No input scope specified.
     */
    All = 0,
    /**
     * Team Project scope.
     */
    Project = 1,
    /**
     * Team scope.
     */
    Team = 2,
    /**
     * Collection scope.
     */
    Collection = 3,
    /**
     * Account scope.
     */
    Account = 4,
    /**
     * Deployment scope.
     */
    Deployment = 5,
}

/**
 * Describes how to configure a subscription that is managed externally.
 */
export interface ExternalConfigurationDescriptor {
    /**
     * Url of the site to create this type of subscription.
     */
    createSubscriptionUrl: string;
    /**
     * The name of an input property that contains the URL to edit a subscription.
     */
    editSubscriptionPropertyName: string;
}

/**
 * Provides different formats of an event message
 */
export interface FormattedEventMessage {
    /**
     * Gets or sets the html format of the message
     */
    html: string;
    /**
     * Gets or sets the markdown format of the message
     */
    markdown: string;
    /**
     * Gets or sets the raw text of the message
     */
    text: string;
}

/**
 * Defines the data contract of the result of processing an event for a subscription.
 */
export interface Notification {
    /**
     * Gets or sets date and time that this result was created.
     */
    createdDate: Date;
    /**
     * Details about this notification (if available)
     */
    details: NotificationDetails;
    /**
     * The event id associated with this notification
     */
    eventId: string;
    /**
     * The notification id
     */
    id: number;
    /**
     * Gets or sets date and time that this result was last modified.
     */
    modifiedDate: Date;
    /**
     * Result of the notification
     */
    result: NotificationResult;
    /**
     * Status of the notification
     */
    status: NotificationStatus;
    /**
     * The subscriber Id  associated with this notification. This is the last identity who touched in the subscription. In case of test notifications it can be the tester if the subscription is not created yet.
     */
    subscriberId: string;
    /**
     * The subscription id associated with this notification
     */
    subscriptionId: string;
}

/**
 * Defines the data contract of notification details.
 */
export interface NotificationDetails {
    /**
     * Gets or sets the time that this notification was completed (response received from the consumer)
     */
    completedDate: Date;
    /**
     * Gets or sets this notification detail's consumer action identifier.
     */
    consumerActionId: string;
    /**
     * Gets or sets this notification detail's consumer identifier.
     */
    consumerId: string;
    /**
     * Gets or sets this notification detail's consumer inputs.
     */
    consumerInputs: { [key: string] : string; };
    /**
     * Gets or sets the time that this notification was dequeued for processing
     */
    dequeuedDate: Date;
    /**
     * Gets or sets this notification detail's error detail.
     */
    errorDetail: string;
    /**
     * Gets or sets this notification detail's error message.
     */
    errorMessage: string;
    /**
     * Gets or sets this notification detail's event content.
     */
    event: Event;
    /**
     * Gets or sets this notification detail's event type.
     */
    eventType: string;
    /**
     * Gets or sets the time that this notification was finished processing (just before the request is sent to the consumer)
     */
    processedDate: Date;
    /**
     * Gets or sets this notification detail's publisher identifier.
     */
    publisherId: string;
    /**
     * Gets or sets this notification detail's publisher inputs.
     */
    publisherInputs: { [key: string] : string; };
    /**
     * Gets or sets the time that this notification was queued (created)
     */
    queuedDate: Date;
    /**
     * Gets or sets this notification detail's request.
     */
    request: string;
    /**
     * Number of requests attempted to be sent to the consumer
     */
    requestAttempts: number;
    /**
     * Duration of the request to the consumer in seconds
     */
    requestDuration: number;
    /**
     * Gets or sets this notification detail's reponse.
     */
    response: string;
}

export enum NotificationResult {
    /**
     * The notification has not yet completed
     */
    Pending = 0,
    /**
     * The notification was sent successfully
     */
    Succeeded = 10,
    /**
     * The notification failed to be sent successfully to the consumer
     */
    Failed = 20,
}

/**
 * Summary of a particular result and count.
 */
export interface NotificationResultsSummaryDetail {
    /**
     * Count of notification sent out with a matching result.
     */
    notificationCount: number;
    /**
     * Result of the notification
     */
    result: NotificationResult;
}

/**
 * Defines a query for service hook notifications.
 */
export interface NotificationsQuery {
    /**
     * The subscriptions associated with the notifications returned from the query
     */
    associatedSubscriptions: Subscription[];
    /**
     * If true, we will return all notification history for the query provided; otherwise, the summary is returned.
     */
    includeDetails: boolean;
    /**
     * Optional maximum date at which the notification was created
     */
    maxCreatedDate: Date;
    /**
     * Optional maximum number of overall results to include
     */
    maxResults: number;
    /**
     * Optional maximum number of results for each subscription. Only takes effect when a list of subscription ids is supplied in the query.
     */
    maxResultsPerSubscription: number;
    /**
     * Optional minimum date at which the notification was created
     */
    minCreatedDate: Date;
    /**
     * Optional publisher id to restrict the results to
     */
    publisherId: string;
    /**
     * Results from the query
     */
    results: Notification[];
    /**
     * Optional notification result type to filter results to
     */
    resultType: NotificationResult;
    /**
     * Optional notification status to filter results to
     */
    status: NotificationStatus;
    /**
     * Optional list of subscription ids to restrict the results to
     */
    subscriptionIds: string[];
    /**
     * Summary of notifications - the count of each result type (success, fail, ..).
     */
    summary: NotificationSummary[];
}

export enum NotificationStatus {
    /**
     * The notification has been queued
     */
    Queued = 10,
    /**
     * The notification has been dequeued and has begun processing.
     */
    Processing = 20,
    /**
     * The consumer action has processed the notification. The request is in progress.
     */
    RequestInProgress = 30,
    /**
     * The request completed
     */
    Completed = 100,
}

/**
 * Summary of the notifications for a subscription.
 */
export interface NotificationSummary {
    /**
     * The notification results for this particular subscription.
     */
    results: NotificationResultsSummaryDetail[];
    /**
     * The subscription id associated with this notification
     */
    subscriptionId: string;
}

/**
 * Wrapper around an event which is being published
 */
export interface PublisherEvent {
    /**
     * The event being published
     */
    event: Event;
    /**
     * Gets or sets the id of the notification.
     */
    notificationId: number;
    /**
     * Gets or sets the array of older supported resource versions.
     */
    otherResourceVersions: VersionedResource[];
    /**
     * Optional publisher-input filters which restricts the set of subscriptions which are triggered by the event
     */
    publisherInputFilters: FormInputInterfaces.InputFilter[];
}

export interface PublishEventsRequestData {
    events: PublisherEvent[];
}

/**
 * The base class for all resource containers, i.e. Account, Collection, Project
 */
export interface ResourceContainer {
    /**
     * Gets or sets the container's base URL, i.e. the URL of the host (collection, application, or deploument) containing the container resource.
     */
    baseUrl: string;
    /**
     * Gets or sets the container's specific Id.
     */
    id: string;
    /**
     * Gets or sets the container's name.
     */
    name: string;
    /**
     * Gets or sets the container's REST API URL.
     */
    url: string;
}

/**
 * Represents a session token to be attached in Events for Consumer actions that need it.
 */
export interface SessionToken {
    /**
     * The error message in case of error
     */
    error: string;
    /**
     * The access token
     */
    token: string;
    /**
     * The expiration date in UTC
     */
    validTo: Date;
}

/**
 * Encapsulates an event subscription.
 */
export interface Subscription {
    /**
     * Reference Links
     */
    _links: any;
    actionDescription: string;
    consumerActionId: string;
    consumerId: string;
    /**
     * Consumer input values
     */
    consumerInputs: { [key: string] : string; };
    createdBy: VSSInterfaces.IdentityRef;
    createdDate: Date;
    eventDescription: string;
    eventType: string;
    id: string;
    modifiedBy: VSSInterfaces.IdentityRef;
    modifiedDate: Date;
    probationRetries: number;
    publisherId: string;
    /**
     * Publisher input values
     */
    publisherInputs: { [key: string] : string; };
    resourceVersion: string;
    scope: EventScope;
    status: SubscriptionStatus;
    subscriber: VSSInterfaces.IdentityRef;
    url: string;
}

export enum SubscriptionInputScope {
    /**
     * An input defined and consumed by a Publisher or Publisher Event Type
     */
    Publisher = 10,
    /**
     * An input defined and consumed by a Consumer or Consumer Action
     */
    Consumer = 20,
}

/**
 * Query for obtaining information about the possible/allowed values for one or more subscription inputs
 */
export interface SubscriptionInputValuesQuery {
    /**
     * The input values to return on input, and the result from the consumer on output.
     */
    inputValues: FormInputInterfaces.InputValues[];
    /**
     * The scope at which the properties to query belong
     */
    scope: SubscriptionInputScope;
    /**
     * Subscription containing information about the publisher/consumer and the current input values
     */
    subscription: Subscription;
}

/**
 * Defines a query for service hook subscriptions.
 */
export interface SubscriptionsQuery {
    /**
     * Optional consumer action id to restrict the results to (null for any)
     */
    consumerActionId: string;
    /**
     * Optional consumer id to restrict the results to (null for any)
     */
    consumerId: string;
    /**
     * Filter for subscription consumer inputs
     */
    consumerInputFilters: FormInputInterfaces.InputFilter[];
    /**
     * Optional event type id to restrict the results to (null for any)
     */
    eventType: string;
    /**
     * Optional publisher id to restrict the results to (null for any)
     */
    publisherId: string;
    /**
     * Filter for subscription publisher inputs
     */
    publisherInputFilters: FormInputInterfaces.InputFilter[];
    /**
     * Results from the query
     */
    results: Subscription[];
    /**
     * Optional scope - default scope is 'project'
     */
    scope: EventScope;
    /**
     * Optional subscriber filter.
     */
    subscriberId: string;
}

export enum SubscriptionStatus {
    /**
     * The subscription is enabled.
     */
    Enabled = 0,
    /**
     * The subscription is temporarily on probation by the system.
     */
    OnProbation = 10,
    /**
     * The subscription is disabled by a user.
     */
    DisabledByUser = 20,
    /**
     * The subscription is disabled by the system.
     */
    DisabledBySystem = 30,
}

/**
 * Encapsulates the resource version and its data or reference to the compatible version. Only one of the two last fields should be not null.
 */
export interface VersionedResource {
    /**
     * Gets or sets the reference to the compatible version.
     */
    compatibleWith: string;
    /**
     * Gets or sets the resource data.
     */
    resource: any;
    /**
     * Gets or sets the version of the resource data.
     */
    resourceVersion: string;
}

export var TypeInfo = {
    AuthenticationType: {
        enumValues: {
            "none": 0,
            "oAuth": 10,
            "external": 30
        }
    },
    Consumer: <any>{
    },
    ConsumerAction: <any>{
    },
    Event: <any>{
    },
    EventScope: {
        enumValues: {
            "all": 0,
            "project": 1,
            "team": 2,
            "collection": 3,
            "account": 4,
            "deployment": 5
        }
    },
    Notification: <any>{
    },
    NotificationDetails: <any>{
    },
    NotificationResult: {
        enumValues: {
            "pending": 0,
            "succeeded": 10,
            "failed": 20
        }
    },
    NotificationResultsSummaryDetail: <any>{
    },
    NotificationsQuery: <any>{
    },
    NotificationStatus: {
        enumValues: {
            "queued": 10,
            "processing": 20,
            "requestInProgress": 30,
            "completed": 100
        }
    },
    NotificationSummary: <any>{
    },
    PublisherEvent: <any>{
    },
    PublishEventsRequestData: <any>{
    },
    SessionToken: <any>{
    },
    Subscription: <any>{
    },
    SubscriptionInputScope: {
        enumValues: {
            "publisher": 10,
            "consumer": 20
        }
    },
    SubscriptionInputValuesQuery: <any>{
    },
    SubscriptionsQuery: <any>{
    },
    SubscriptionStatus: {
        enumValues: {
            "enabled": 0,
            "onProbation": 10,
            "disabledByUser": 20,
            "disabledBySystem": 30
        }
    },
};

TypeInfo.Consumer.fields = {
    actions: {
        isArray: true,
        typeInfo: TypeInfo.ConsumerAction
    },
    authenticationType: {
        enumType: TypeInfo.AuthenticationType
    },
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    },
};

TypeInfo.ConsumerAction.fields = {
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    },
};

TypeInfo.Event.fields = {
    createdDate: {
        isDate: true,
    },
    scope: {
        enumType: TypeInfo.EventScope
    },
    sessionToken: {
        typeInfo: TypeInfo.SessionToken
    },
};

TypeInfo.Notification.fields = {
    createdDate: {
        isDate: true,
    },
    details: {
        typeInfo: TypeInfo.NotificationDetails
    },
    modifiedDate: {
        isDate: true,
    },
    result: {
        enumType: TypeInfo.NotificationResult
    },
    status: {
        enumType: TypeInfo.NotificationStatus
    },
};

TypeInfo.NotificationDetails.fields = {
    completedDate: {
        isDate: true,
    },
    dequeuedDate: {
        isDate: true,
    },
    event: {
        typeInfo: TypeInfo.Event
    },
    processedDate: {
        isDate: true,
    },
    queuedDate: {
        isDate: true,
    },
};

TypeInfo.NotificationResultsSummaryDetail.fields = {
    result: {
        enumType: TypeInfo.NotificationResult
    },
};

TypeInfo.NotificationsQuery.fields = {
    associatedSubscriptions: {
        isArray: true,
        typeInfo: TypeInfo.Subscription
    },
    maxCreatedDate: {
        isDate: true,
    },
    minCreatedDate: {
        isDate: true,
    },
    results: {
        isArray: true,
        typeInfo: TypeInfo.Notification
    },
    resultType: {
        enumType: TypeInfo.NotificationResult
    },
    status: {
        enumType: TypeInfo.NotificationStatus
    },
    summary: {
        isArray: true,
        typeInfo: TypeInfo.NotificationSummary
    },
};

TypeInfo.NotificationSummary.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.NotificationResultsSummaryDetail
    },
};

TypeInfo.PublisherEvent.fields = {
    event: {
        typeInfo: TypeInfo.Event
    },
    publisherInputFilters: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputFilter
    },
};

TypeInfo.PublishEventsRequestData.fields = {
    events: {
        isArray: true,
        typeInfo: TypeInfo.PublisherEvent
    },
};

TypeInfo.SessionToken.fields = {
    validTo: {
        isDate: true,
    },
};

TypeInfo.Subscription.fields = {
    createdDate: {
        isDate: true,
    },
    modifiedDate: {
        isDate: true,
    },
    scope: {
        enumType: TypeInfo.EventScope
    },
    status: {
        enumType: TypeInfo.SubscriptionStatus
    },
};

TypeInfo.SubscriptionInputValuesQuery.fields = {
    scope: {
        enumType: TypeInfo.SubscriptionInputScope
    },
    subscription: {
        typeInfo: TypeInfo.Subscription
    },
};

TypeInfo.SubscriptionsQuery.fields = {
    consumerInputFilters: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputFilter
    },
    publisherInputFilters: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputFilter
    },
    results: {
        isArray: true,
        typeInfo: TypeInfo.Subscription
    },
    scope: {
        enumType: TypeInfo.EventScope
    },
};
