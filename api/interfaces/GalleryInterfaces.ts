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

export interface ExtensionAccount {
    accountId: string;
    accountName: string;
}

export interface ExtensionFile {
    assetType: string;
    contentType: string;
    fileId: number;
    shortDescription: string;
    version: string;
}

/**
 * The FilterResult is the set of extensions that matched a particular query filter.
 */
export interface ExtensionFilterResult {
    /**
     * This is the set of appplications that matched the query filter supplied.
     */
    extensions: PublishedExtension[];
    /**
     * The PagingToken is returned from a request when more records exist that match the result than were requested or could be returned. A follow-up query with this paging token can be used to retrieve more results.
     */
    pagingToken: string;
}

/**
 * Package that will be used to create or update a published extension
 */
export interface ExtensionPackage {
    /**
     * Base 64 encoded extension package
     */
    extensionManifest: string;
}

/**
 * An ExtensionQuery is used to search the gallery for a set of extensions that match one of many filter values.
 */
export interface ExtensionQuery {
    /**
     * Each filter is a unique query and will have matching set of extensions returned from the request. Each result will have the same index in the resulting array that the filter had in the incoming query.
     */
    filters: QueryFilter[];
    /**
     * The Flags are used to deterine which set of information the caller would like returned for the matched extensions.
     */
    flags: ExtensionQueryFlags;
}

export enum ExtensionQueryFilterType {
    /**
     * The values are used as tags. All tags are treated as "OR" conditions with each other. There may be some value put on the number of matched tags from the query.
     */
    Tag = 1,
    /**
     * The Values are an ExtensionName or fragment that is used to match other extension names.
     */
    DisplayName = 2,
    /**
     * The Filter is one or more tokens that define what scope to return private extensions for.
     */
    Private = 3,
    /**
     * Retrieve a set of extensions based on their id's. The values should be the extension id's encoded as strings.
     */
    Id = 4,
    /**
     * The catgeory is unlike other filters. It is AND'd with the other filters instead of being a seperate query.
     */
    Category = 5,
    /**
     * Certain contribution types may be indexed to allow for query by type. User defined types can't be indexed at the moment.
     */
    ContributionType = 6,
}

export enum ExtensionQueryFlags {
    /**
     * None is used to retrieve only the basic extension details.
     */
    None = 0,
    /**
     * IncludeVersions will return version information for extensions returned
     */
    IncludeVersions = 1,
    /**
     * IncludeFiles will return information about which files were found within the extension that were stored independant of the manifest. When asking for files, versions will be included as well since files are returned as a property of the versions.  These files can be retrieved using the path to the file without requiring the entire manifest be downloaded.
     */
    IncludeFiles = 2,
    /**
     * Include the Categories and Tags that were added to the extension definition.
     */
    IncludeCategoryAndTags = 4,
    /**
     * Include the details about which accounts the extension has been shared with if the extesion is a private extension.
     */
    IncludeSharedAccounts = 8,
    /**
     * Include properties associated with versions of the extension
     */
    IncludeVersionProperties = 16,
    /**
     * Excluding non-validated extensions will remove any extension versions that either are in the process of being validated or have failed validation.
     */
    ExcludeNonValidated = 32,
    /**
     * AllAttributes is designed to be a mask that defines all sub-elements of the extension should be returned.
     */
    AllAttributes = 31,
}

/**
 * This is the set of extensions that matched a supplied query through the filters given.
 */
export interface ExtensionQueryResult {
    /**
     * For each filter supplied in the query, a filter result will be returned in the query result.
     */
    results: ExtensionFilterResult[];
}

export interface ExtensionVersion {
    files: ExtensionFile[];
    flags: ExtensionVersionFlags;
    lastUpdated: Date;
    properties: { key: string; value: string }[];
    validationResultMessage: string;
    version: string;
    versionDescription: string;
}

export enum ExtensionVersionFlags {
    /**
     * No flags exist for this version.
     */
    None = 0,
    /**
     * The Validated flag for a version means the extension version has passed validation and can be used..
     */
    Validated = 1,
}

/**
 * One condition in a QueryFilter.
 */
export interface FilterCriteria {
    filterType: number;
    /**
     * The value used in the match based on the filter type.
     */
    value: string;
}

export enum PagingDirection {
    /**
     * Backward will return results from earlier in the resultset.
     */
    Backward = 1,
    /**
     * Forward will return results from later in the resultset.
     */
    Forward = 2,
}

export interface PublishedExtension {
    allowedAccounts: ExtensionAccount[];
    categories: string[];
    displayName: string;
    extensionId: string;
    extensionName: string;
    flags: PublishedExtensionFlags;
    lastUpdated: Date;
    longDescription: string;
    publisher: PublisherFacts;
    shortDescription: string;
    tags: string[];
    versions: ExtensionVersion[];
}

export enum PublishedExtensionFlags {
    /**
     * This should never be returned, it is used to represent a extension who's flags havent changed during update calls.
     */
    UnChanged = 1073741824,
    /**
     * No flags exist for this extension.
     */
    None = 0,
    /**
     * The Disabled flag for an extension means the extension can't be changed and won't be used by consumers. The disabled flag is managed by the service and can't be supplied by the Extension Developers.
     */
    Disabled = 1,
    /**
     * BuiltIn Extension are available to all Tenants. An explicit registration is not required. This attribute is reserved and can't be supplied by Extension Developers.  BuiltIn extensions are by definition Public. There is no need to set the public flag for extensions marked BuiltIn.
     */
    BuiltIn = 2,
    /**
     * This extension has been validated by the service. The extension meets the requirements specified. This attribute is reserved and can't be supplied by the Extension Developers. Validation is a process that ensures that all contributions are well formed. They meet the requirements defined by the contribution type they are extending. Note this attribute will be updated asynchronously as the extension is validated by the developer of the contribution type. There will be restricted access to the extension while this process is performed.
     */
    Validated = 4,
    /**
     * This extension registration is public, making its visibilty open to the public. This means all tenants have the ability to install this extension. Without this flag the extension will be private and will need to be shared with the tenants that can install it.
     */
    Public = 256,
    /**
     * This extension has multiple versions active at one time and version discovery should be done usig the defined "Version Discovery" protocol to determine the version available to a specific user or tenant.  @TODO: Link to Version Discovery Protocol.
     */
    MultiVersion = 512,
    /**
     * The system flag is reserved, and cant be used by publishers.
     */
    System = 1024,
    /**
     * This is the set of flags that can't be supplied by the developer and is managed by the service itself.
     */
    ServiceFlags = 1029,
}

export interface Publisher {
    displayName: string;
    extensions: PublishedExtension[];
    flags: PublisherFlags;
    lastUpdated: Date;
    longDescription: string;
    publisherId: string;
    publisherName: string;
    shortDescription: string;
}

/**
 * High-level information about the publisher, like id's and names
 */
export interface PublisherFacts {
    displayName: string;
    publisherId: string;
    publisherName: string;
}

/**
 * The FilterResult is the set of publishers that matched a particular query filter.
 */
export interface PublisherFilterResult {
    /**
     * This is the set of appplications that matched the query filter supplied.
     */
    publishers: Publisher[];
}

export enum PublisherFlags {
    /**
     * This should never be returned, it is used to represent a publisher who's flags havent changed during update calls.
     */
    UnChanged = 1073741824,
    /**
     * No flags exist for this publisher.
     */
    None = 0,
    /**
     * The Disabled flag for a publisher means the publisher can't be changed and won't be used by consumers, this extends to extensions owned by the publisher as well. The disabled flag is managed by the service and can't be supplied by the Extension Developers.
     */
    Disabled = 1,
    /**
     * This is the set of flags that can't be supplied by the developer and is managed by the service itself.
     */
    ServiceFlags = 1,
}

export enum PublisherPermissions {
    /**
     * This gives the bearer the rights to read Publishers and Extensions.
     */
    Read = 1,
    /**
     * This gives the bearer the rights to update Publishers and Extensions (but not the ability to Create them).
     */
    Write = 2,
    /**
     * This gives the bearer the rights to create new Publishers at the root of the namespace.
     */
    Create = 4,
    /**
     * This gives the bearer the rights to create new Extensions within a publisher.
     */
    Publish = 8,
    /**
     * Admin gives the bearer the rights to manage restricted attributes of Publishers and Extensions.
     */
    Admin = 16,
    /**
     * TrustedPartner gives the bearer the rights to publish a extensions with restricted capabilities.
     */
    TrustedPartner = 32,
    /**
     * PrivateRead is another form of read designed to allow higher privilege accessors the ability to read private extensions.
     */
    PrivateRead = 64,
}

/**
 * An PublisherQuery is used to search the gallery for a set of publishers that match one of many filter values.
 */
export interface PublisherQuery {
    /**
     * Each filter is a unique query and will have matching set of publishers returned from the request. Each result will have the same index in the resulting array that the filter had in the incoming query.
     */
    filters: QueryFilter[];
    /**
     * The Flags are used to deterine which set of information the caller would like returned for the matched publishers.
     */
    flags: PublisherQueryFlags;
}

export enum PublisherQueryFilterType {
    /**
     * The values are used as tags. All tags are treated as "OR" conditions with each other. There may be some value put on the number of matched tags from the query.
     */
    Tag = 1,
    /**
     * The Values are an PublisherName or fragment that is used to match other extension names.
     */
    DisplayName = 2,
    /**
     * The My Query filter is used to retrieve the set of publishers that I have access to publish extesions into. All Values are ignored and the calling user is used as the filter in this case.
     */
    My = 3,
}

export enum PublisherQueryFlags {
    /**
     * None is used to retrieve only the basic publisher details.
     */
    None = 0,
    /**
     * Is used to include a list of basic extension details for all extensions published by the requested publisher.
     */
    IncludeExtensions = 1,
}

/**
 * This is the set of publishers that matched a supplied query through the filters given.
 */
export interface PublisherQueryResult {
    /**
     * For each filter supplied in the query, a filter result will be returned in the query result.
     */
    results: PublisherFilterResult[];
}

/**
 * A filter used to define a set of extensions to return during a query.
 */
export interface QueryFilter {
    /**
     * The filter values define the set of values in this query. They are applied based on the QueryFilterType.
     */
    criteria: FilterCriteria[];
    /**
     * The PagingDirection is applied to a paging token if one exists. If not the direction is ignored, and Forward from the start of the resultset is used. Direction should be left out of the request unless a paging token is used to help prevent future issues.
     */
    direction: PagingDirection;
    /**
     * The page size defines the number of results the caller wants for this filter. The count can't exceed the overall query size limits.
     */
    pageSize: number;
    /**
     * The paging token is a distinct type of filter and the other filter fields are ignored. The paging token represents the continuation of a previously executed query. The information about where in the result and what fields are being filtered are embeded in the token.
     */
    pagingToken: string;
}

export enum SigningKeyPermissions {
    Read = 1,
    Write = 2,
}

export var TypeInfo = {
    ExtensionAccount: {
        fields: <any>null
    },
    ExtensionFile: {
        fields: <any>null
    },
    ExtensionFilterResult: {
        fields: <any>null
    },
    ExtensionPackage: {
        fields: <any>null
    },
    ExtensionQuery: {
        fields: <any>null
    },
    ExtensionQueryFilterType: {
        enumValues: {
            "tag": 1,
            "displayName": 2,
            "private": 3,
            "id": 4,
            "category": 5,
            "contributionType": 6,
        }
    },
    ExtensionQueryFlags: {
        enumValues: {
            "none": 0,
            "includeVersions": 1,
            "includeFiles": 2,
            "includeCategoryAndTags": 4,
            "includeSharedAccounts": 8,
            "includeVersionProperties": 16,
            "excludeNonValidated": 32,
            "allAttributes": 31,
        }
    },
    ExtensionQueryResult: {
        fields: <any>null
    },
    ExtensionVersion: {
        fields: <any>null
    },
    ExtensionVersionFlags: {
        enumValues: {
            "none": 0,
            "validated": 1,
        }
    },
    FilterCriteria: {
        fields: <any>null
    },
    PagingDirection: {
        enumValues: {
            "backward": 1,
            "forward": 2,
        }
    },
    PublishedExtension: {
        fields: <any>null
    },
    PublishedExtensionFlags: {
        enumValues: {
            "unChanged": 1073741824,
            "none": 0,
            "disabled": 1,
            "builtIn": 2,
            "validated": 4,
            "public": 256,
            "multiVersion": 512,
            "system": 1024,
            "serviceFlags": 1029,
        }
    },
    Publisher: {
        fields: <any>null
    },
    PublisherFacts: {
        fields: <any>null
    },
    PublisherFilterResult: {
        fields: <any>null
    },
    PublisherFlags: {
        enumValues: {
            "unChanged": 1073741824,
            "none": 0,
            "disabled": 1,
            "serviceFlags": 1,
        }
    },
    PublisherPermissions: {
        enumValues: {
            "read": 1,
            "write": 2,
            "create": 4,
            "publish": 8,
            "admin": 16,
            "trustedPartner": 32,
            "privateRead": 64,
        }
    },
    PublisherQuery: {
        fields: <any>null
    },
    PublisherQueryFilterType: {
        enumValues: {
            "tag": 1,
            "displayName": 2,
            "my": 3,
        }
    },
    PublisherQueryFlags: {
        enumValues: {
            "none": 0,
            "includeExtensions": 1,
        }
    },
    PublisherQueryResult: {
        fields: <any>null
    },
    QueryFilter: {
        fields: <any>null
    },
    SigningKeyPermissions: {
        enumValues: {
            "read": 1,
            "write": 2,
        }
    },
};

TypeInfo.ExtensionAccount.fields = {
};

TypeInfo.ExtensionFile.fields = {
};

TypeInfo.ExtensionFilterResult.fields = {
    extensions: {
        isArray: true,
        typeInfo: TypeInfo.PublishedExtension
    },
};

TypeInfo.ExtensionPackage.fields = {
};

TypeInfo.ExtensionQuery.fields = {
    filters: {
        isArray: true,
        typeInfo: TypeInfo.QueryFilter
    },
    flags: {
        enumType: TypeInfo.ExtensionQueryFlags
    },
};

TypeInfo.ExtensionQueryResult.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionFilterResult
    },
};

TypeInfo.ExtensionVersion.fields = {
    files: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionFile
    },
    flags: {
        enumType: TypeInfo.ExtensionVersionFlags
    },
    lastUpdated: {
        isDate: true,
    },
};

TypeInfo.FilterCriteria.fields = {
};

TypeInfo.PublishedExtension.fields = {
    allowedAccounts: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionAccount
    },
    flags: {
        enumType: TypeInfo.PublishedExtensionFlags
    },
    lastUpdated: {
        isDate: true,
    },
    publisher: {
        typeInfo: TypeInfo.PublisherFacts
    },
    versions: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionVersion
    },
};

TypeInfo.Publisher.fields = {
    extensions: {
        isArray: true,
        typeInfo: TypeInfo.PublishedExtension
    },
    flags: {
        enumType: TypeInfo.PublisherFlags
    },
    lastUpdated: {
        isDate: true,
    },
};

TypeInfo.PublisherFacts.fields = {
};

TypeInfo.PublisherFilterResult.fields = {
    publishers: {
        isArray: true,
        typeInfo: TypeInfo.Publisher
    },
};

TypeInfo.PublisherQuery.fields = {
    filters: {
        isArray: true,
        typeInfo: TypeInfo.QueryFilter
    },
    flags: {
        enumType: TypeInfo.PublisherQueryFlags
    },
};

TypeInfo.PublisherQueryResult.fields = {
    results: {
        isArray: true,
        typeInfo: TypeInfo.PublisherFilterResult
    },
};

TypeInfo.QueryFilter.fields = {
    criteria: {
        isArray: true,
        typeInfo: TypeInfo.FilterCriteria
    },
    direction: {
        enumType: TypeInfo.PagingDirection
    },
};
