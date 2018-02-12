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


/**
 * Representaion of a ContributionNode that can be used for serialized to clients.
 */
export interface ClientContribution {
    /**
     * Description of the contribution/type
     */
    description: string;
    /**
     * Fully qualified identifier of the contribution/type
     */
    id: string;
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
 * Representaion of a ContributionNode that can be used for serialized to clients.
 */
export interface ClientContributionNode {
    /**
     * List of ids for contributions which are children to the current contribution.
     */
    children: string[];
    /**
     * Contribution associated with this node.
     */
    contribution: ClientContribution;
    /**
     * List of ids for contributions which are parents to the current contribution.
     */
    parents: string[];
}

export interface ClientContributionProviderDetails {
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

/**
 * A client data provider are the details needed to make the data provider request from the client.
 */
export interface ClientDataProviderQuery extends DataProviderQuery {
    /**
     * The Id of the service instance type that should be communicated with in order to resolve the data providers from the client given the query values.
     */
    queryServiceInstanceType: string;
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
     * List of demanded claims in order for the user to see this contribution (like anonymous, public, member...).
     */
    restrictedTo: string[];
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
     * Fully qualified identifier of a shared constraint
     */
    id: string;
    /**
     * If true, negate the result of the filter (include the contribution if the applied filter returns false instead of true)
     */
    inverse: boolean;
    /**
     * Name of the IContributionFilter plugin
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

/**
 * Represents different ways of including contributions based on licensing
 */
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
    nodes: { [key: string] : ClientContributionNode; };
    /**
     * Map of provder ids to the corresponding provider details object.
     */
    providerDetails: { [key: string] : ClientContributionProviderDetails; };
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

/**
 * The type of value used for a property
 */
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

/**
 * Options that control the contributions to include in a query
 */
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
     * This is the set of data providers that were requested, but either they were defined as client providers, or as remote providers that failed and may be retried by the client.
     */
    clientProviders: { [key: string] : ClientDataProviderQuery; };
    /**
     * Property bag of data keyed off of the data provider contribution id
     */
    data: { [key: string] : any; };
    /**
     * Set of exceptions that occurred resolving the data providers.
     */
    exceptions: { [key: string] : DataProviderExceptionDetails; };
    /**
     * List of data providers resolved in the data-provider query
     */
    resolvedProviders: ResolvedDataProvider[];
    /**
     * Scope name applied to this data provider result.
     */
    scopeName: string;
    /**
     * Scope value applied to this data provider result.
     */
    scopeValue: string;
    /**
     * Property bag of shared data that was contributed to by any of the individual data providers
     */
    sharedData: { [key: string] : any; };
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

/**
 * Set of flags applied to extensions that are relevant to contribution consumers
 */
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
     * List of shared constraints defined by this extension
     */
    constraints: ContributionConstraint[];
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
     * Default user claims applied to all contributions (except the ones which have been speficied restrictedTo explicitly) to control the visibility of a contribution.
     */
    restrictedTo: string[];
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
 * States of an extension Note:  If you add value to this enum, you need to do 2 other things.  First add the back compat enum in value src\Vssf\Sdk\Server\Contributions\InstalledExtensionMessage.cs.  Second, you can not send the new value on the message bus.  You need to remove it from the message bus event prior to being sent.
 */
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

/**
 * Installation issue type (Warning, Error)
 */
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

export var TypeInfo = {
    ContributionLicensingBehaviorType: {
        enumValues: {
            "onlyIfLicensed": 0,
            "onlyIfUnlicensed": 1,
            "alwaysInclude": 2
        }
    },
    ContributionNodeQuery: <any>{
    },
    ContributionPropertyDescription: <any>{
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
            "object": 512
        }
    },
    ContributionQueryOptions: {
        enumValues: {
            "none": 0,
            "includeSelf": 16,
            "includeChildren": 32,
            "includeSubTree": 96,
            "includeAll": 112,
            "ignoreConstraints": 256
        }
    },
    ContributionType: <any>{
    },
    ExtensionFlags: {
        enumValues: {
            "builtIn": 1,
            "trusted": 2
        }
    },
    ExtensionLicensing: <any>{
    },
    ExtensionManifest: <any>{
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
            "warning": 512
        }
    },
    InstalledExtension: <any>{
    },
    InstalledExtensionState: <any>{
    },
    InstalledExtensionStateIssue: <any>{
    },
    InstalledExtensionStateIssueType: {
        enumValues: {
            "warning": 0,
            "error": 1
        }
    },
    LicensingOverride: <any>{
    },
};

TypeInfo.ContributionNodeQuery.fields = {
    queryOptions: {
        enumType: TypeInfo.ContributionQueryOptions
    }
};

TypeInfo.ContributionPropertyDescription.fields = {
    type: {
        enumType: TypeInfo.ContributionPropertyType
    }
};

TypeInfo.ContributionType.fields = {
    properties: {
        isDictionary: true,
        dictionaryValueTypeInfo: TypeInfo.ContributionPropertyDescription
    }
};

TypeInfo.ExtensionLicensing.fields = {
    overrides: {
        isArray: true,
        typeInfo: TypeInfo.LicensingOverride
    }
};

TypeInfo.ExtensionManifest.fields = {
    contributionTypes: {
        isArray: true,
        typeInfo: TypeInfo.ContributionType
    },
    licensing: {
        typeInfo: TypeInfo.ExtensionLicensing
    }
};

TypeInfo.InstalledExtension.fields = {
    contributionTypes: {
        isArray: true,
        typeInfo: TypeInfo.ContributionType
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
    }
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
    }
};

TypeInfo.InstalledExtensionStateIssue.fields = {
    type: {
        enumType: TypeInfo.InstalledExtensionStateIssueType
    }
};

TypeInfo.LicensingOverride.fields = {
    behavior: {
        enumType: TypeInfo.ContributionLicensingBehaviorType
    }
};
