﻿/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

"use strict";

import GraphInterfaces = require("../../interfaces/GraphInterfaces");


/**
 * Information about the location of a REST API resource
 */
export interface ApiResourceLocation {
    /**
     * Area name for this resource
     */
    area?: string;
    /**
     * Unique Identifier for this location
     */
    id?: string;
    /**
     * Maximum api version that this resource supports (current server version for this resource)
     */
    maxVersion?: string;
    /**
     * Minimum api version that this resource supports
     */
    minVersion?: string;
    /**
     * The latest version of this resource location that is in "Release" (non-preview) mode
     */
    releasedVersion?: string;
    /**
     * Resource name
     */
    resourceName?: string;
    /**
     * The current resource version supported by this resource location
     */
    resourceVersion?: number;
    /**
     * This location's route template (templated relative path)
     */
    routeTemplate?: string;
}

/**
 * Represents version information for a REST Api resource
 */
export interface ApiResourceVersion {
    /**
     * String representation of the Public API version. This is the version that the public sees and is used for a large group of services (e.g. the TFS 1.0 API)
     */
    apiVersion?: string;
    /**
     * Is the public API version in preview
     */
    isPreview?: boolean;
    /**
     * Internal resource version. This is defined per-resource and is used to support build-to-build compatibility of API changes within a given (in-preview) public api version. For example, within the TFS 1.0 API release cycle, while it is still in preview, a resource's data structure may be changed. This resource can be versioned such that older clients will still work (requests will be sent to the older version) and new/upgraded clients will talk to the new version of the resource.
     */
    resourceVersion?: number;
}

/**
 * Enumeration of the options that can be passed in on Connect.
 */
export enum ConnectOptions {
    /**
     * Retrieve no optional data.
     */
    None = 0,
    /**
     * Includes information about AccessMappings and ServiceDefinitions.
     */
    IncludeServices = 1,
    /**
     * Includes the last user access for this host.
     */
    IncludeLastUserAccess = 2,
    /**
     * This is only valid on the deployment host and when true. Will only return inherited definitions.
     */
    IncludeInheritedDefinitionsOnly = 4,
    /**
     * When true will only return non inherited definitions. Only valid at non-deployment host.
     */
    IncludeNonInheritedDefinitionsOnly = 8,
}

export enum DeploymentFlags {
    None = 0,
    Hosted = 1,
    OnPremises = 2,
}

/**
 * Defines an "actor" for an event.
 */
export interface EventActor {
    /**
     * Required: This is the identity of the user for the specified role.
     */
    id?: string;
    /**
     * Required: The event specific name of a role.
     */
    role?: string;
}

/**
 * Defines a scope for an event.
 */
export interface EventScope {
    /**
     * Required: This is the identity of the scope for the type.
     */
    id?: string;
    /**
     * Optional: The display name of the scope
     */
    name?: string;
    /**
     * Required: The event specific type of a scope.
     */
    type?: string;
}

export interface IdentityRef extends GraphInterfaces.GraphSubjectBase {
    /**
     * Deprecated - Can be retrieved by querying the Graph user referenced in the "self" entry of the IdentityRef "_links" dictionary
     */
    directoryAlias?: string;
    id?: string;
    /**
     * Deprecated - Available in the "avatar" entry of the IdentityRef "_links" dictionary
     */
    imageUrl?: string;
    /**
     * Deprecated - Can be retrieved by querying the Graph membership state referenced in the "membershipState" entry of the GraphUser "_links" dictionary
     */
    inactive?: boolean;
    /**
     * Deprecated - Can be inferred from the subject type of the descriptor (Descriptor.IsAadUserType/Descriptor.IsAadGroupType)
     */
    isAadIdentity?: boolean;
    /**
     * Deprecated - Can be inferred from the subject type of the descriptor (Descriptor.IsGroupType)
     */
    isContainer?: boolean;
    isDeletedInOrigin?: boolean;
    /**
     * Deprecated - not in use in most preexisting implementations of ToIdentityRef
     */
    profileUrl?: string;
    /**
     * Deprecated - use Domain+PrincipalName instead
     */
    uniqueName?: string;
}

export interface IdentityRefWithEmail extends IdentityRef {
    preferredEmailAddress?: string;
}

/**
 * The JSON model for JSON Patch Operations
 */
export interface JsonPatchDocument {
}

/**
 * The JSON model for a JSON Patch operation
 */
export interface JsonPatchOperation {
    /**
     * The path to copy from for the Move/Copy operation.
     */
    from?: string;
    /**
     * The patch operation
     */
    op: Operation;
    /**
     * The path for the operation. In the case of an array, a zero based index can be used to specify the position in the array (e.g. /biscuits/0/name). The "-" character can be used instead of an index to insert at the end of the array (e.g. /biscuits/-).
     */
    path: string;
    /**
     * The value for the operation. This is either a primitive or a JToken.
     */
    value?: any;
}

export interface JsonWebToken {
}

export enum JWTAlgorithm {
    None = 0,
    HS256 = 1,
    RS256 = 2,
}

export enum Operation {
    Add = 0,
    Remove = 1,
    Replace = 2,
    Move = 3,
    Copy = 4,
    Test = 5,
}

/**
 * A list that contains a single page of results from a query.
 */
export interface PagedList<T> {
    /**
     * A string that can be passed to the same endpoint that returned this PagedList in order to retrieve the next page of results.
     */
    continuationToken?: string;
}

/**
 * Represents the public key portion of an RSA asymmetric key.
 */
export interface PublicKey {
    /**
     * Gets or sets the exponent for the public key.
     */
    exponent?: number[];
    /**
     * Gets or sets the modulus for the public key.
     */
    modulus?: number[];
}

export interface Publisher {
    /**
     * Name of the publishing service.
     */
    name?: string;
    /**
     * Service Owner Guid Eg. Tfs : 00025394-6065-48CA-87D9-7F5672854EF7
     */
    serviceOwnerId?: string;
}

/**
 * The class to represent a REST reference link.  RFC: http://tools.ietf.org/html/draft-kelly-json-hal-06  The RFC is not fully implemented, additional properties are allowed on the reference link but as of yet we don't have a need for them.
 */
export interface ReferenceLink {
    href?: string;
}

export interface ResourceRef {
    id?: string;
    url?: string;
}

export interface ServiceEvent {
    /**
     * This is the id of the type. Constants that will be used by subscribers to identify/filter events being published on a topic.
     */
    eventType?: string;
    /**
     * This is the service that published this event.
     */
    publisher?: Publisher;
    /**
     * The resource object that carries specific information about the event. The object must have the ServiceEventObject applied for serialization/deserialization to work.
     */
    resource?: any;
    /**
     * This dictionary carries the context descriptors along with their ids.
     */
    resourceContainers?: { [key: string] : any; };
    /**
     * This is the version of the resource.
     */
    resourceVersion?: string;
}

/**
 * A signed url allowing limited-time anonymous access to private resources.
 */
export interface SignedUrl {
    /**
     * Timestamp when access expires.
     */
    signatureExpires?: Date;
    /**
     * The URL to allow access to.
     */
    url?: string;
}

export interface TeamMember {
    identity?: IdentityRef;
    isTeamAdmin?: boolean;
}

/**
 * A single secured timing consisting of a duration and start time
 */
export interface TimingEntry {
    /**
     * Duration of the entry in ticks
     */
    elapsedTicks?: number;
    /**
     * Properties to distinguish timings within the same group or to provide data to send with telemetry
     */
    properties?: { [key: string] : any; };
    /**
     * Offset from Server Request Context start time in microseconds
     */
    startOffset?: number;
}

/**
 * A set of secured performance timings all keyed off of the same string
 */
export interface TimingGroup {
    /**
     * The total number of timing entries associated with this group
     */
    count?: number;
    /**
     * Overall duration of all entries in this group in ticks
     */
    elapsedTicks?: number;
    /**
     * A list of timing entries in this group. Only the first few entries in each group are collected.
     */
    timings?: TimingEntry[];
}

/**
 * This class describes a trace filter, i.e. a set of criteria on whether or not a trace event should be emitted
 */
export interface TraceFilter {
    area?: string;
    exceptionType?: string;
    isEnabled?: boolean;
    layer?: string;
    level?: number;
    method?: string;
    /**
     * Used to serialize additional identity information (display name, etc) to clients. Not set by default. Server-side callers should use OwnerId.
     */
    owner?: IdentityRef;
    ownerId?: string;
    path?: string;
    processName?: string;
    service?: string;
    serviceHost?: string;
    timeCreated?: Date;
    traceId?: string;
    tracepoint?: number;
    uri?: string;
    userAgent?: string;
    userLogin?: string;
}

export interface VssJsonCollectionWrapper extends VssJsonCollectionWrapperBase {
    value?: any[];
}

/**
 * This class is used to serialize collections as a single JSON object on the wire.
 */
export interface VssJsonCollectionWrapperV<T> extends VssJsonCollectionWrapperBase {
    /**
     * The serialized item.
     */
    value?: T;
}

export interface VssJsonCollectionWrapperBase {
    /**
     * The number of serialized items.
     */
    count?: number;
}

/**
 * This is the type used for firing notifications intended for the subsystem in the Notifications SDK. For components that can't take a dependency on the Notifications SDK directly, they can use ITeamFoundationEventService.PublishNotification and the Notifications SDK ISubscriber implementation will get it.
 */
export interface VssNotificationEvent {
    /**
     * Optional: A list of actors which are additional identities with corresponding roles that are relevant to the event.
     */
    actors?: EventActor[];
    /**
     * Optional: A list of artifacts referenced or impacted by this event.
     */
    artifactUris?: string[];
    /**
     * Required: The event payload.  If Data is a string, it must be in Json or XML format.  Otherwise it must have a serialization format attribute.
     */
    data?: any;
    /**
     * Required: The name of the event.  This event must be registered in the context it is being fired.
     */
    eventType?: string;
    /**
     * How long before the event expires and will be cleaned up.  The default is to use the system default.
     */
    expiresIn?: any;
    /**
     * The id of the item, artifact, extension, project, etc.
     */
    itemId?: string;
    /**
     * How long to wait before processing this event.  The default is to process immediately.
     */
    processDelay?: any;
    /**
     * Optional: A list of scopes which are relevant to the event.
     */
    scopes?: EventScope[];
    /**
     * This is the time the original source event for this VssNotificationEvent was created.  For example, for something like a build completion notification SourceEventCreatedTime should be the time the build finished not the time this event was raised.
     */
    sourceEventCreatedTime?: Date;
}

export interface WrappedException {
    customProperties?: { [key: string] : any; };
    errorCode?: number;
    eventId?: number;
    helpLink?: string;
    innerException?: WrappedException;
    message?: string;
    stackTrace?: string;
    typeKey?: string;
    typeName?: string;
}

export var TypeInfo = {
    ConnectOptions: {
        enumValues: {
            "none": 0,
            "includeServices": 1,
            "includeLastUserAccess": 2,
            "includeInheritedDefinitionsOnly": 4,
            "includeNonInheritedDefinitionsOnly": 8
        }
    },
    DeploymentFlags: {
        enumValues: {
            "none": 0,
            "hosted": 1,
            "onPremises": 2
        }
    },
    JsonPatchOperation: <any>{
    },
    JWTAlgorithm: {
        enumValues: {
            "none": 0,
            "hS256": 1,
            "rS256": 2
        }
    },
    Operation: {
        enumValues: {
            "add": 0,
            "remove": 1,
            "replace": 2,
            "move": 3,
            "copy": 4,
            "test": 5
        }
    },
    SignedUrl: <any>{
    },
    TraceFilter: <any>{
    },
    VssNotificationEvent: <any>{
    },
};

TypeInfo.JsonPatchOperation.fields = {
    op: {
        enumType: TypeInfo.Operation
    }
};

TypeInfo.SignedUrl.fields = {
    signatureExpires: {
        isDate: true,
    }
};

TypeInfo.TraceFilter.fields = {
    timeCreated: {
        isDate: true,
    }
};

TypeInfo.VssNotificationEvent.fields = {
    sourceEventCreatedTime: {
        isDate: true,
    }
};
