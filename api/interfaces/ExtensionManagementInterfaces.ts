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

import GalleryInterfaces = require("../interfaces/GalleryInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export enum AcquisitionAssignmentType {
    None = 0,
    /**
     * Just assign for me
     */
    Me = 1,
    /**
     * Assign for all users in the account
     */
    All = 2,
}

export interface AcquisitionOperation {
    /**
     * State of the the AcquisitionOperation for the current user
     */
    operationState: AcquisitionOperationState;
    /**
     * AcquisitionOperationType: install, request, buy, etc...
     */
    operationType: AcquisitionOperationType;
    /**
     * Optional reason to justify current state. Typically used with Disallow state.
     */
    reason: string;
    /**
     * List of reasons indicating why the operation is not allowed.
     */
    reasons: AcquisitionOperationDisallowReason[];
}

export interface AcquisitionOperationDisallowReason {
    /**
     * User-friendly message clarifying the reason for disallowance
     */
    message: string;
    /**
     * Type of reason for disallowance - AlreadyInstalled, UnresolvedDemand, etc.
     */
    type: string;
}

export enum AcquisitionOperationState {
    /**
     * Not allowed to use this AcquisitionOperation
     */
    Disallow = 0,
    /**
     * Allowed to use this AcquisitionOperation
     */
    Allow = 1,
    /**
     * Operation has already been completed and is no longer available
     */
    Completed = 3,
}

export enum AcquisitionOperationType {
    /**
     * Not yet used
     */
    Get = 0,
    /**
     * Install this extension into the host provided
     */
    Install = 1,
    /**
     * Buy licenses for this extension and install into the host provided
     */
    Buy = 2,
    /**
     * Not yet used
     */
    Try = 3,
    /**
     * Not yet used
     */
    Request = 4,
    /**
     * No action found
     */
    None = 5,
}

/**
 * Market item acquisition options (install, buy, etc) for an installation target.
 */
export interface AcquisitionOptions {
    /**
     * Default Operation for the ItemId in this target
     */
    defaultOperation: AcquisitionOperation;
    /**
     * The item id that this options refer to
     */
    itemId: string;
    /**
     * Operations allowed for the ItemId in this target
     */
    operations: AcquisitionOperation[];
    /**
     * The target that this options refer to
     */
    target: string;
}

/**
 * An individual contribution made by an extension
 */
export interface Contribution extends ContributionBase {
    /**
     * List of constraints (filters) that should be applied to the availability of this contribution
     */
    constraints: ContributionConstraint[];
    /**
     * Includes is a set of contributions that should have this contribution included in their targets list.
     */
    includes: string[];
    /**
     * Properties/attributes of this contribution
     */
    properties: any;
    /**
     * The ids of the contribution(s) that this contribution targets. (parent contributions)
     */
    targets: string[];
    /**
     * Id of the Contribution Type
     */
    type: string;
}

/**
 * Base class shared by contributions and contribution types
 */
export interface ContributionBase {
    /**
     * Description of the contribution/type
     */
    description: string;
    /**
     * Fully qualified identifier of the contribution/type
     */
    id: string;
    /**
     * VisibleTo can be used to restrict whom can reference a given contribution/type. This value should be a list of publishers or extensions access is restricted too.  Examples: "ms" - Means only the "ms" publisher can reference this. "ms.vss-web" - Means only the "vss-web" extension from the "ms" publisher can reference this.
     */
    visibleTo: string[];
}

/**
 * Specifies a constraint that can be used to dynamically include/exclude a given contribution
 */
export interface ContributionConstraint {
    /**
     * An optional property that can be specified to group constraints together. All constraints within a group are AND'd together (all must be evaluate to True in order for the contribution to be included). Different groups of constraints are OR'd (only one group needs to evaluate to True for the contribution to be included).
     */
    group: number;
    /**
     * If true, negate the result of the filter (include the contribution if the applied filter returns false instead of true)
     */
    inverse: boolean;
    /**
     * Name of the IContributionFilter class
     */
    name: string;
    /**
     * Properties that are fed to the contribution filter class
     */
    properties: any;
    /**
     * Constraints can be optionally be applied to one or more of the relationships defined in the contribution. If no relationships are defined then all relationships are associated with the constraint. This means the default behaviour will elimiate the contribution from the tree completely if the constraint is applied.
     */
    relationships: string[];
}

export enum ContributionLicensingBehaviorType {
    /**
     * Default value - only include the contribution if the user is licensed for the extension
     */
    OnlyIfLicensed = 0,
    /**
     * Only include the contribution if the user is NOT licensed for the extension
     */
    OnlyIfUnlicensed = 1,
    /**
     * Always include the contribution regardless of whether or not the user is licensed for the extension
     */
    AlwaysInclude = 2,
}

/**
 * A query that can be issued for contribution nodes
 */
export interface ContributionNodeQuery {
    /**
     * The contribution ids of the nodes to find.
     */
    contributionIds: string[];
    /**
     * Indicator if contribution provider details should be included in the result.
     */
    includeProviderDetails: boolean;
    /**
     * Query options tpo be used when fetching ContributionNodes
     */
    queryOptions: ContributionQueryOptions;
}

/**
 * Result of a contribution node query.  Wraps the resulting contribution nodes and provider details.
 */
export interface ContributionNodeQueryResult {
    /**
     * Map of contribution ids to corresponding node.
     */
    nodes: { [key: string] : SerializedContributionNode; };
    /**
     * Map of provder ids to the corresponding provider details object.
     */
    providerDetails: { [key: string] : ContributionProviderDetails; };
}

/**
 * Description about a property of a contribution type
 */
export interface ContributionPropertyDescription {
    /**
     * Description of the property
     */
    description: string;
    /**
     * Name of the property
     */
    name: string;
    /**
     * True if this property is required
     */
    required: boolean;
    /**
     * The type of value used for this property
     */
    type: ContributionPropertyType;
}

export enum ContributionPropertyType {
    /**
     * Contribution type is unknown (value may be anything)
     */
    Unknown = 0,
    /**
     * Value is a string
     */
    String = 1,
    /**
     * Value is a Uri
     */
    Uri = 2,
    /**
     * Value is a GUID
     */
    Guid = 4,
    /**
     * Value is True or False
     */
    Boolean = 8,
    /**
     * Value is an integer
     */
    Integer = 16,
    /**
     * Value is a double
     */
    Double = 32,
    /**
     * Value is a DateTime object
     */
    DateTime = 64,
    /**
     * Value is a generic Dictionary/JObject/property bag
     */
    Dictionary = 128,
    /**
     * Value is an array
     */
    Array = 256,
    /**
     * Value is an arbitrary/custom object
     */
    Object = 512,
}

export interface ContributionProviderDetails {
    /**
     * Friendly name for the provider.
     */
    displayName: string;
    /**
     * Unique identifier for this provider. The provider name can be used to cache the contribution data and refer back to it when looking for changes
     */
    name: string;
    /**
     * Properties associated with the provider
     */
    properties: { [key: string] : string; };
    /**
     * Version of contributions assoicated with this contribution provider.
     */
    version: string;
}

export enum ContributionQueryOptions {
    None = 0,
    /**
     * Include the direct contributions that have the ids queried.
     */
    IncludeSelf = 16,
    /**
     * Include the contributions that directly target the contributions queried.
     */
    IncludeChildren = 32,
    /**
     * Include the contributions from the entire sub-tree targetting the contributions queried.
     */
    IncludeSubTree = 96,
    /**
     * Include the contribution being queried as well as all contributions that target them recursively.
     */
    IncludeAll = 112,
    /**
     * Some callers may want the entire tree back without constraint evaluation being performed.
     */
    IgnoreConstraints = 256,
}

/**
 * A contribution type, given by a json schema
 */
export interface ContributionType extends ContributionBase {
    /**
     * Controls whether or not contributions of this type have the type indexed for queries. This allows clients to find all extensions that have a contribution of this type.  NOTE: Only TrustedPartners are allowed to specify indexed contribution types.
     */
    indexed: boolean;
    /**
     * Friendly name of the contribution/type
     */
    name: string;
    /**
     * Describes the allowed properties for this contribution type
     */
    properties: { [key: string] : ContributionPropertyDescription; };
}

/**
 * Contextual information that data providers can examine when populating their data
 */
export interface DataProviderContext {
    /**
     * Generic property bag that contains context-specific properties that data providers can use when populating their data dictionary
     */
    properties: { [key: string] : any; };
}

export interface DataProviderExceptionDetails {
    /**
     * The type of the exception that was thrown.
     */
    exceptionType: string;
    /**
     * Message that is associated with the exception.
     */
    message: string;
    /**
     * The StackTrace from the exception turned into a string.
     */
    stackTrace: string;
}

/**
 * A query that can be issued for data provider data
 */
export interface DataProviderQuery {
    /**
     * Contextual information to pass to the data providers
     */
    context: DataProviderContext;
    /**
     * The contribution ids of the data providers to resolve
     */
    contributionIds: string[];
}

/**
 * Result structure from calls to GetDataProviderData
 */
export interface DataProviderResult {
    /**
     * Property bag of data keyed off of the data provider contribution id
     */
    data: { [key: string] : any; };
    /**
     * List of data providers resolved in the data-provider query
     */
    resolvedProviders: ResolvedDataProvider[];
}

/**
 * Contract for handling the extension acquisition process
 */
export interface ExtensionAcquisitionRequest {
    /**
     * How the item is being assigned
     */
    assignmentType: AcquisitionAssignmentType;
    /**
     * The id of the subscription used for purchase
     */
    billingId: string;
    /**
     * The marketplace id (publisherName.extensionName) for the item
     */
    itemId: string;
    /**
     * The type of operation, such as install, request, purchase
     */
    operationType: AcquisitionOperationType;
    /**
     * Additional properties which can be added to the request.
     */
    properties: any;
    /**
     * How many licenses should be purchased
     */
    quantity: number;
}

/**
 * Represents the state of an extension request
 */
export interface ExtensionAuditAction {
}

/**
 * Audit log for an extension
 */
export interface ExtensionAuditLog {
    /**
     * Collection of audit log entries
     */
    entries: ExtensionAuditLogEntry[];
    /**
     * Extension that the change was made for
     */
    extensionName: string;
    /**
     * Publisher that the extension is part of
     */
    publisherName: string;
}

/**
 * An audit log entry for an extension
 */
export interface ExtensionAuditLogEntry {
    /**
     * Change that was made to extension
     */
    auditAction: string;
    /**
     * Date at which the change was made
     */
    auditDate: Date;
    /**
     * Extra information about the change
     */
    comment: string;
    /**
     * Represents the user who made the change
     */
    updatedBy: VSSInterfaces.IdentityRef;
}

export interface ExtensionAuthorization {
    id: string;
    scopes: string[];
}

/**
 * Represents a single collection for extension data documents
 */
export interface ExtensionDataCollection {
    /**
     * The name of the collection
     */
    collectionName: string;
    /**
     * A list of documents belonging to the collection
     */
    documents: any[];
    /**
     * The type of the collection's scope, such as Default or User
     */
    scopeType: string;
    /**
     * The value of the collection's scope, such as Current or Me
     */
    scopeValue: string;
}

/**
 * Represents a query to receive a set of extension data collections
 */
export interface ExtensionDataCollectionQuery {
    /**
     * A list of collections to query
     */
    collections: ExtensionDataCollection[];
}

export interface ExtensionEvent {
    /**
     * The extension which has been updated
     */
    extension: GalleryInterfaces.PublishedExtension;
    /**
     * The current version of the extension that was updated
     */
    extensionVersion: string;
    /**
     * Name of the collection for which the extension was requested
     */
    host: ExtensionHost;
    /**
     * Gallery host url
     */
    links: ExtensionEventUrls;
    /**
     * Represents the user who initiated the update
     */
    modifiedBy: VSSInterfaces.IdentityRef;
    /**
     * The type of update that was made
     */
    updateType: ExtensionUpdateType;
}

/**
 * Base class for an event callback for an extension
 */
export interface ExtensionEventCallback {
    /**
     * The uri of the endpoint that is hit when an event occurs
     */
    uri: string;
}

/**
 * Collection of event callbacks - endpoints called when particular extension events occur.
 */
export interface ExtensionEventCallbackCollection {
    /**
     * Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension disable has occurred.
     */
    postDisable: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension enable has occurred.
     */
    postEnable: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension install has completed.
     */
    postInstall: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension uninstall has occurred.
     */
    postUninstall: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension update has occurred.
     */
    postUpdate: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST reqeust to notify that an extension install is about to occur.  Response indicates whether to proceed or abort.
     */
    preInstall: ExtensionEventCallback;
    /**
     * For multi-version extensions, defines an endpoint that gets called via an OPTIONS request to determine the particular version of the extension to be used
     */
    versionCheck: ExtensionEventCallback;
}

export interface ExtensionEventUrls extends ExtensionUrls {
    /**
     * Url of the extension management page
     */
    manageExtensionsPage: string;
}

export enum ExtensionFlags {
    /**
     * A built-in extension is installed for all VSTS accounts by default
     */
    BuiltIn = 1,
    /**
     * The extension comes from a fully-trusted publisher
     */
    Trusted = 2,
}

export interface ExtensionHost {
    id: string;
    name: string;
}

/**
 * How an extension should handle including contributions based on licensing
 */
export interface ExtensionLicensing {
    /**
     * A list of contributions which deviate from the default licensing behavior
     */
    overrides: LicensingOverride[];
}

/**
 * Base class for extension properties which are shared by the extension manifest and the extension model
 */
export interface ExtensionManifest {
    /**
     * Uri used as base for other relative uri's defined in extension
     */
    baseUri: string;
    /**
     * List of contributions made by this extension
     */
    contributions: Contribution[];
    /**
     * List of contribution types defined by this extension
     */
    contributionTypes: ContributionType[];
    /**
     * List of explicit demands required by this extension
     */
    demands: string[];
    /**
     * Collection of endpoints that get called when particular extension events occur
     */
    eventCallbacks: ExtensionEventCallbackCollection;
    /**
     * Secondary location that can be used as base for other relative uri's defined in extension
     */
    fallbackBaseUri: string;
    /**
     * Language Culture Name set by the Gallery
     */
    language: string;
    /**
     * How this extension behaves with respect to licensing
     */
    licensing: ExtensionLicensing;
    /**
     * Version of the extension manifest format/content
     */
    manifestVersion: number;
    /**
     * List of all oauth scopes required by this extension
     */
    scopes: string[];
    /**
     * The ServiceInstanceType(Guid) of the VSTS service that must be available to an account in order for the extension to be installed
     */
    serviceInstanceType: string;
}

/**
 * A request for an extension (to be installed or have a license assigned)
 */
export interface ExtensionRequest {
    /**
     * Required message supplied if the request is rejected
     */
    rejectMessage: string;
    /**
     * Date at which the request was made
     */
    requestDate: Date;
    /**
     * Represents the user who made the request
     */
    requestedBy: VSSInterfaces.IdentityRef;
    /**
     * Optional message supplied by the requester justifying the request
     */
    requestMessage: string;
    /**
     * Represents the state of the request
     */
    requestState: ExtensionRequestState;
    /**
     * Date at which the request was resolved
     */
    resolveDate: Date;
    /**
     * Represents the user who resolved the request
     */
    resolvedBy: VSSInterfaces.IdentityRef;
}

export interface ExtensionRequestEvent {
    /**
     * The extension which has been requested
     */
    extension: GalleryInterfaces.PublishedExtension;
    /**
     * Information about the host for which this extension is requested
     */
    host: ExtensionHost;
    /**
     * Name of the collection for which the extension was requested
     */
    hostName: string;
    /**
     * Gallery host url
     */
    links: ExtensionRequestUrls;
    /**
     * The extension request object
     */
    request: ExtensionRequest;
    /**
     * The type of update that was made
     */
    updateType: ExtensionRequestUpdateType;
}

export interface ExtensionRequestsEvent {
    /**
     * The extension which has been requested
     */
    extension: GalleryInterfaces.PublishedExtension;
    /**
     * Information about the host for which this extension is requested
     */
    host: ExtensionHost;
    /**
     * Gallery host url
     */
    links: ExtensionRequestUrls;
    /**
     * The extension request object
     */
    requests: ExtensionRequest[];
    /**
     * The type of update that was made
     */
    updateType: ExtensionRequestUpdateType;
}

export enum ExtensionRequestState {
    /**
     * The request has been opened, but not yet responded to
     */
    Open = 0,
    /**
     * The request was accepted (extension installed or license assigned)
     */
    Accepted = 1,
    /**
     * The request was rejected (extension not installed or license not assigned)
     */
    Rejected = 2,
}

export enum ExtensionRequestUpdateType {
    Created = 1,
    Approved = 2,
    Rejected = 3,
    Deleted = 4,
}

export interface ExtensionRequestUrls extends ExtensionUrls {
    /**
     * Link to view the extension request
     */
    requestPage: string;
}

/**
 * The state of an extension
 */
export interface ExtensionState extends InstalledExtensionState {
    extensionName: string;
    /**
     * The time at which the version was last checked
     */
    lastVersionCheck: Date;
    publisherName: string;
    version: string;
}

export enum ExtensionStateFlags {
    /**
     * No flags set
     */
    None = 0,
    /**
     * Extension is disabled
     */
    Disabled = 1,
    /**
     * Extension is a built in
     */
    BuiltIn = 2,
    /**
     * Extension has multiple versions
     */
    MultiVersion = 4,
    /**
     * Extension is not installed.  This is for builtin extensions only and can not otherwise be set.
     */
    UnInstalled = 8,
    /**
     * Error performing version check
     */
    VersionCheckError = 16,
    /**
     * Trusted extensions are ones that are given special capabilities. These tend to come from Microsoft and can't be published by the general public.  Note: BuiltIn extensions are always trusted.
     */
    Trusted = 32,
    /**
     * Extension is currently in an error state
     */
    Error = 64,
    /**
     * Extension scopes have changed and the extension requires re-authorization
     */
    NeedsReauthorization = 128,
    /**
     * Error performing auto-upgrade. For example, if the new version has demands not supported the extension cannot be auto-upgraded.
     */
    AutoUpgradeError = 256,
    /**
     * Extension is currently in a warning state, that can cause a degraded experience. The degraded experience can be caused for example by some installation issues detected such as implicit demands not supported.
     */
    Warning = 512,
}

export enum ExtensionUpdateType {
    Installed = 1,
    Uninstalled = 2,
    Enabled = 3,
    Disabled = 4,
    VersionUpdated = 5,
    ActionRequired = 6,
    ActionResolved = 7,
}

export interface ExtensionUrls {
    /**
     * Url of the extension icon
     */
    extensionIcon: string;
    /**
     * Link to view the extension details page
     */
    extensionPage: string;
}

/**
 * Represents a VSTS extension along with its installation state
 */
export interface InstalledExtension extends ExtensionManifest {
    /**
     * The friendly extension id for this extension - unique for a given publisher.
     */
    extensionId: string;
    /**
     * The display name of the extension.
     */
    extensionName: string;
    /**
     * This is the set of files available from the extension.
     */
    files: GalleryInterfaces.ExtensionFile[];
    /**
     * Extension flags relevant to contribution consumers
     */
    flags: ExtensionFlags;
    /**
     * Information about this particular installation of the extension
     */
    installState: InstalledExtensionState;
    /**
     * This represents the date/time the extensions was last updated in the gallery. This doesnt mean this version was updated the value represents changes to any and all versions of the extension.
     */
    lastPublished: Date;
    /**
     * Unique id of the publisher of this extension
     */
    publisherId: string;
    /**
     * The display name of the publisher
     */
    publisherName: string;
    /**
     * Unique id for this extension (the same id is used for all versions of a single extension)
     */
    registrationId: string;
    /**
     * Version of this extension
     */
    version: string;
}

export interface InstalledExtensionQuery {
    assetTypes: string[];
    monikers: GalleryInterfaces.ExtensionIdentifier[];
}

/**
 * The state of an installed extension
 */
export interface InstalledExtensionState {
    /**
     * States of an installed extension
     */
    flags: ExtensionStateFlags;
    /**
     * List of installation issues
     */
    installationIssues: InstalledExtensionStateIssue[];
    /**
     * The time at which this installation was last updated
     */
    lastUpdated: Date;
}

/**
 * Represents an installation issue
 */
export interface InstalledExtensionStateIssue {
    /**
     * The error message
     */
    message: string;
    /**
     * Source of the installation issue, for example  "Demands"
     */
    source: string;
    /**
     * Installation issue type (Warning, Error)
     */
    type: InstalledExtensionStateIssueType;
}

export enum InstalledExtensionStateIssueType {
    /**
     * Represents an installation warning, for example an implicit demand not supported
     */
    Warning = 0,
    /**
     * Represents an installation error, for example an explicit demand not supported
     */
    Error = 1,
}

/**
 * Maps a contribution to a licensing behavior
 */
export interface LicensingOverride {
    /**
     * How the inclusion of this contribution should change based on licensing
     */
    behavior: ContributionLicensingBehaviorType;
    /**
     * Fully qualified contribution id which we want to define licensing behavior for
     */
    id: string;
}

/**
 * A request for an extension (to be installed or have a license assigned)
 */
export interface RequestedExtension {
    /**
     * The unique name of the extension
     */
    extensionName: string;
    /**
     * A list of each request for the extension
     */
    extensionRequests: ExtensionRequest[];
    /**
     * DisplayName of the publisher that owns the extension being published.
     */
    publisherDisplayName: string;
    /**
     * Represents the Publisher of the requested extension
     */
    publisherName: string;
    /**
     * The total number of requests for an extension
     */
    requestCount: number;
}

/**
 * Entry for a specific data provider's resulting data
 */
export interface ResolvedDataProvider {
    /**
     * The total time the data provider took to resolve its data (in milliseconds)
     */
    duration: number;
    error: string;
    id: string;
}

export interface Scope {
    description: string;
    title: string;
    value: string;
}

/**
 * Representaion of a ContributionNode that can be used for serialized to clients.
 */
export interface SerializedContributionNode {
    /**
     * List of ids for contributions which are children to the current contribution.
     */
    children: string[];
    /**
     * Contribution associated with this node.
     */
    contribution: Contribution;
    /**
     * List of ids for contributions which are parents to the current contribution.
     */
    parents: string[];
}

/**
 * Information about the extension
 */
export interface SupportedExtension {
    /**
     * Unique Identifier for this extension
     */
    extension: string;
    /**
     * Unique Identifier for this publisher
     */
    publisher: string;
    /**
     * Supported version for this extension
     */
    version: string;
}

export var TypeInfo = {
    AcquisitionAssignmentType: {
        enumValues: {
            "none": 0,
            "me": 1,
            "all": 2,
        }
    },
    AcquisitionOperation: {
        fields: <any>null
    },
    AcquisitionOperationDisallowReason: {
        fields: <any>null
    },
    AcquisitionOperationState: {
        enumValues: {
            "disallow": 0,
            "allow": 1,
            "completed": 3,
        }
    },
    AcquisitionOperationType: {
        enumValues: {
            "get": 0,
            "install": 1,
            "buy": 2,
            "try": 3,
            "request": 4,
            "none": 5,
        }
    },
    AcquisitionOptions: {
        fields: <any>null
    },
    Contribution: {
        fields: <any>null
    },
    ContributionBase: {
        fields: <any>null
    },
    ContributionConstraint: {
        fields: <any>null
    },
    ContributionLicensingBehaviorType: {
        enumValues: {
            "onlyIfLicensed": 0,
            "onlyIfUnlicensed": 1,
            "alwaysInclude": 2,
        }
    },
    ContributionNodeQuery: {
        fields: <any>null
    },
    ContributionNodeQueryResult: {
        fields: <any>null
    },
    ContributionPropertyDescription: {
        fields: <any>null
    },
    ContributionPropertyType: {
        enumValues: {
            "unknown": 0,
            "string": 1,
            "uri": 2,
            "guid": 4,
            "boolean": 8,
            "integer": 16,
            "double": 32,
            "dateTime": 64,
            "dictionary": 128,
            "array": 256,
            "object": 512,
        }
    },
    ContributionProviderDetails: {
        fields: <any>null
    },
    ContributionQueryOptions: {
        enumValues: {
            "none": 0,
            "includeSelf": 16,
            "includeChildren": 32,
            "includeSubTree": 96,
            "includeAll": 112,
            "ignoreConstraints": 256,
        }
    },
    ContributionType: {
        fields: <any>null
    },
    DataProviderContext: {
        fields: <any>null
    },
    DataProviderExceptionDetails: {
        fields: <any>null
    },
    DataProviderQuery: {
        fields: <any>null
    },
    DataProviderResult: {
        fields: <any>null
    },
    ExtensionAcquisitionRequest: {
        fields: <any>null
    },
    ExtensionAuditAction: {
        fields: <any>null
    },
    ExtensionAuditLog: {
        fields: <any>null
    },
    ExtensionAuditLogEntry: {
        fields: <any>null
    },
    ExtensionAuthorization: {
        fields: <any>null
    },
    ExtensionDataCollection: {
        fields: <any>null
    },
    ExtensionDataCollectionQuery: {
        fields: <any>null
    },
    ExtensionEvent: {
        fields: <any>null
    },
    ExtensionEventCallback: {
        fields: <any>null
    },
    ExtensionEventCallbackCollection: {
        fields: <any>null
    },
    ExtensionEventUrls: {
        fields: <any>null
    },
    ExtensionFlags: {
        enumValues: {
            "builtIn": 1,
            "trusted": 2,
        }
    },
    ExtensionHost: {
        fields: <any>null
    },
    ExtensionLicensing: {
        fields: <any>null
    },
    ExtensionManifest: {
        fields: <any>null
    },
    ExtensionRequest: {
        fields: <any>null
    },
    ExtensionRequestEvent: {
        fields: <any>null
    },
    ExtensionRequestsEvent: {
        fields: <any>null
    },
    ExtensionRequestState: {
        enumValues: {
            "open": 0,
            "accepted": 1,
            "rejected": 2,
        }
    },
    ExtensionRequestUpdateType: {
        enumValues: {
            "created": 1,
            "approved": 2,
            "rejected": 3,
            "deleted": 4,
        }
    },
    ExtensionRequestUrls: {
        fields: <any>null
    },
    ExtensionState: {
        fields: <any>null
    },
    ExtensionStateFlags: {
        enumValues: {
            "none": 0,
            "disabled": 1,
            "builtIn": 2,
            "multiVersion": 4,
            "unInstalled": 8,
            "versionCheckError": 16,
            "trusted": 32,
            "error": 64,
            "needsReauthorization": 128,
            "autoUpgradeError": 256,
            "warning": 512,
        }
    },
    ExtensionUpdateType: {
        enumValues: {
            "installed": 1,
            "uninstalled": 2,
            "enabled": 3,
            "disabled": 4,
            "versionUpdated": 5,
            "actionRequired": 6,
            "actionResolved": 7,
        }
    },
    ExtensionUrls: {
        fields: <any>null
    },
    InstalledExtension: {
        fields: <any>null
    },
    InstalledExtensionQuery: {
        fields: <any>null
    },
    InstalledExtensionState: {
        fields: <any>null
    },
    InstalledExtensionStateIssue: {
        fields: <any>null
    },
    InstalledExtensionStateIssueType: {
        enumValues: {
            "warning": 0,
            "error": 1,
        }
    },
    LicensingOverride: {
        fields: <any>null
    },
    RequestedExtension: {
        fields: <any>null
    },
    ResolvedDataProvider: {
        fields: <any>null
    },
    Scope: {
        fields: <any>null
    },
    SerializedContributionNode: {
        fields: <any>null
    },
    SupportedExtension: {
        fields: <any>null
    },
};

TypeInfo.AcquisitionOperation.fields = {
    operationState: {
        enumType: TypeInfo.AcquisitionOperationState
    },
    operationType: {
        enumType: TypeInfo.AcquisitionOperationType
    },
    reasons: {
        isArray: true,
        typeInfo: TypeInfo.AcquisitionOperationDisallowReason
    },
};

TypeInfo.AcquisitionOperationDisallowReason.fields = {
};

TypeInfo.AcquisitionOptions.fields = {
    defaultOperation: {
        typeInfo: TypeInfo.AcquisitionOperation
    },
    operations: {
        isArray: true,
        typeInfo: TypeInfo.AcquisitionOperation
    },
};

TypeInfo.Contribution.fields = {
    constraints: {
        isArray: true,
        typeInfo: TypeInfo.ContributionConstraint
    },
};

TypeInfo.ContributionBase.fields = {
};

TypeInfo.ContributionConstraint.fields = {
};

TypeInfo.ContributionNodeQuery.fields = {
    queryOptions: {
        enumType: TypeInfo.ContributionQueryOptions
    },
};

TypeInfo.ContributionNodeQueryResult.fields = {
    nodes: {
    },
    providerDetails: {
    },
};

TypeInfo.ContributionPropertyDescription.fields = {
    type: {
        enumType: TypeInfo.ContributionPropertyType
    },
};

TypeInfo.ContributionProviderDetails.fields = {
};

TypeInfo.ContributionType.fields = {
    properties: {
    },
};

TypeInfo.DataProviderContext.fields = {
};

TypeInfo.DataProviderExceptionDetails.fields = {
};

TypeInfo.DataProviderQuery.fields = {
    context: {
        typeInfo: TypeInfo.DataProviderContext
    },
};

TypeInfo.DataProviderResult.fields = {
    resolvedProviders: {
        isArray: true,
        typeInfo: TypeInfo.ResolvedDataProvider
    },
};

TypeInfo.ExtensionAcquisitionRequest.fields = {
    assignmentType: {
        enumType: TypeInfo.AcquisitionAssignmentType
    },
    operationType: {
        enumType: TypeInfo.AcquisitionOperationType
    },
};

TypeInfo.ExtensionAuditAction.fields = {
};

TypeInfo.ExtensionAuditLog.fields = {
    entries: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionAuditLogEntry
    },
};

TypeInfo.ExtensionAuditLogEntry.fields = {
    auditDate: {
        isDate: true,
    },
    updatedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.ExtensionAuthorization.fields = {
};

TypeInfo.ExtensionDataCollection.fields = {
};

TypeInfo.ExtensionDataCollectionQuery.fields = {
    collections: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionDataCollection
    },
};

TypeInfo.ExtensionEvent.fields = {
    extension: {
        typeInfo: GalleryInterfaces.TypeInfo.PublishedExtension
    },
    host: {
        typeInfo: TypeInfo.ExtensionHost
    },
    links: {
        typeInfo: TypeInfo.ExtensionEventUrls
    },
    modifiedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    updateType: {
        enumType: TypeInfo.ExtensionUpdateType
    },
};

TypeInfo.ExtensionEventCallback.fields = {
};

TypeInfo.ExtensionEventCallbackCollection.fields = {
    postDisable: {
        typeInfo: TypeInfo.ExtensionEventCallback
    },
    postEnable: {
        typeInfo: TypeInfo.ExtensionEventCallback
    },
    postInstall: {
        typeInfo: TypeInfo.ExtensionEventCallback
    },
    postUninstall: {
        typeInfo: TypeInfo.ExtensionEventCallback
    },
    postUpdate: {
        typeInfo: TypeInfo.ExtensionEventCallback
    },
    preInstall: {
        typeInfo: TypeInfo.ExtensionEventCallback
    },
    versionCheck: {
        typeInfo: TypeInfo.ExtensionEventCallback
    },
};

TypeInfo.ExtensionEventUrls.fields = {
};

TypeInfo.ExtensionHost.fields = {
};

TypeInfo.ExtensionLicensing.fields = {
    overrides: {
        isArray: true,
        typeInfo: TypeInfo.LicensingOverride
    },
};

TypeInfo.ExtensionManifest.fields = {
    contributions: {
        isArray: true,
        typeInfo: TypeInfo.Contribution
    },
    contributionTypes: {
        isArray: true,
        typeInfo: TypeInfo.ContributionType
    },
    eventCallbacks: {
        typeInfo: TypeInfo.ExtensionEventCallbackCollection
    },
    licensing: {
        typeInfo: TypeInfo.ExtensionLicensing
    },
};

TypeInfo.ExtensionRequest.fields = {
    requestDate: {
        isDate: true,
    },
    requestedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    requestState: {
        enumType: TypeInfo.ExtensionRequestState
    },
    resolveDate: {
        isDate: true,
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.ExtensionRequestEvent.fields = {
    extension: {
        typeInfo: GalleryInterfaces.TypeInfo.PublishedExtension
    },
    host: {
        typeInfo: TypeInfo.ExtensionHost
    },
    links: {
        typeInfo: TypeInfo.ExtensionRequestUrls
    },
    request: {
        typeInfo: TypeInfo.ExtensionRequest
    },
    updateType: {
        enumType: TypeInfo.ExtensionRequestUpdateType
    },
};

TypeInfo.ExtensionRequestsEvent.fields = {
    extension: {
        typeInfo: GalleryInterfaces.TypeInfo.PublishedExtension
    },
    host: {
        typeInfo: TypeInfo.ExtensionHost
    },
    links: {
        typeInfo: TypeInfo.ExtensionRequestUrls
    },
    requests: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionRequest
    },
    updateType: {
        enumType: TypeInfo.ExtensionRequestUpdateType
    },
};

TypeInfo.ExtensionRequestUrls.fields = {
};

TypeInfo.ExtensionState.fields = {
    flags: {
        enumType: TypeInfo.ExtensionStateFlags
    },
    installationIssues: {
        isArray: true,
        typeInfo: TypeInfo.InstalledExtensionStateIssue
    },
    lastUpdated: {
        isDate: true,
    },
    lastVersionCheck: {
        isDate: true,
    },
};

TypeInfo.ExtensionUrls.fields = {
};

TypeInfo.InstalledExtension.fields = {
    contributions: {
        isArray: true,
        typeInfo: TypeInfo.Contribution
    },
    contributionTypes: {
        isArray: true,
        typeInfo: TypeInfo.ContributionType
    },
    eventCallbacks: {
        typeInfo: TypeInfo.ExtensionEventCallbackCollection
    },
    files: {
        isArray: true,
        typeInfo: GalleryInterfaces.TypeInfo.ExtensionFile
    },
    flags: {
        enumType: TypeInfo.ExtensionFlags
    },
    installState: {
        typeInfo: TypeInfo.InstalledExtensionState
    },
    lastPublished: {
        isDate: true,
    },
    licensing: {
        typeInfo: TypeInfo.ExtensionLicensing
    },
};

TypeInfo.InstalledExtensionQuery.fields = {
    monikers: {
        isArray: true,
        typeInfo: GalleryInterfaces.TypeInfo.ExtensionIdentifier
    },
};

TypeInfo.InstalledExtensionState.fields = {
    flags: {
        enumType: TypeInfo.ExtensionStateFlags
    },
    installationIssues: {
        isArray: true,
        typeInfo: TypeInfo.InstalledExtensionStateIssue
    },
    lastUpdated: {
        isDate: true,
    },
};

TypeInfo.InstalledExtensionStateIssue.fields = {
    type: {
        enumType: TypeInfo.InstalledExtensionStateIssueType
    },
};

TypeInfo.LicensingOverride.fields = {
    behavior: {
        enumType: TypeInfo.ContributionLicensingBehaviorType
    },
};

TypeInfo.RequestedExtension.fields = {
    extensionRequests: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionRequest
    },
};

TypeInfo.ResolvedDataProvider.fields = {
};

TypeInfo.Scope.fields = {
};

TypeInfo.SerializedContributionNode.fields = {
    contribution: {
        typeInfo: TypeInfo.Contribution
    },
};

TypeInfo.SupportedExtension.fields = {
};
