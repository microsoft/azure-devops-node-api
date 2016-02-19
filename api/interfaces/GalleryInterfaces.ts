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

export enum ConcernCategory {
    General = 1,
    Abusive = 2,
    Spam = 4,
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
    /**
     * A list of target guids where the item should be acquired (installed, requested, etc.), such as account id
     */
    targets: string[];
}

export interface ExtensionFile {
    assetType: string;
    contentType: string;
    fileId: number;
    isDefault: boolean;
    isPublic: boolean;
    language: string;
    shortDescription: string;
    source: string;
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
    /**
     * This is the additional optional metadata for the given result. E.g. Total count of results which is useful in case of paged results
     */
    resultMetadata: ExtensionFilterResultMetadata[];
}

/**
 * ExtensionFilterResultMetadata is one set of metadata for the result e.g. Total count. There can be multiple metadata items for one metadata.
 */
export interface ExtensionFilterResultMetadata {
    /**
     * The metadata items for the category
     */
    metadataItems: MetadataItem[];
    /**
     * Defines the category of metadata items
     */
    metadataType: string;
}

/**
 * Represents the component pieces of an extensions fully qualified name, along with the fully qualified name.
 */
export interface ExtensionIdentifier {
    /**
     * The ExtensionName component part of the fully qualified ExtensionIdentifier
     */
    extensionName: string;
    /**
     * The PublisherName component part of the fully qualified ExtensionIdentifier
     */
    publisherName: string;
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
 * Policy with a set of permissions on extension operations
 */
export interface ExtensionPolicy {
    /**
     * Permissions on 'Install' operation
     */
    install: ExtensionPolicyFlags;
    /**
     * Permission on 'Request' operation
     */
    request: ExtensionPolicyFlags;
}

export enum ExtensionPolicyFlags {
    /**
     * No permission
     */
    None = 0,
    /**
     * Permission on private extensions
     */
    Private = 1,
    /**
     * Permission on public extensions
     */
    Public = 2,
    /**
     * Premission in extensions that are in preview
     */
    Preview = 4,
    /**
     * Premission in relased extensions
     */
    Released = 8,
    /**
     * Permission in 1st party extensions
     */
    FirstParty = 16,
    /**
     * Mask that defines all permissions
     */
    All = 31,
}

/**
 * An ExtensionQuery is used to search the gallery for a set of extensions that match one of many filter values.
 */
export interface ExtensionQuery {
    /**
     * When retrieving extensions with a query; frequently the caller only needs a small subset of the assets. The caller may specify a list of asset types that should be returned if the extension contains it. All other assets will not be returned.
     */
    assetTypes: string[];
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
    /**
     * Retrieve an set extension based on the name based identifier. This differs from the internal id (which is being deprecated).
     */
    Name = 7,
    /**
     * The InstallationTarget for an extension defines the target consumer for the extension. This may be something like VS, VSOnline, or VSCode
     */
    InstallationTarget = 8,
    /**
     * Query for featured extensions, no value is allowed when using the query type.
     */
    Featured = 9,
    /**
     * The SearchText provided by the user to search for extensions
     */
    SearchText = 10,
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
     * Include the set of installation targets the extension has requested.
     */
    IncludeInstallationTargets = 64,
    /**
     * Include the base uri for assets of this extension
     */
    IncludeAssetUri = 128,
    /**
     * Include the statistics associated with this extension
     */
    IncludeStatistics = 256,
    /**
     * When retrieving versions from a query, only include the latest version of the extensions that matched. This is useful when the caller doesn't need all the published versions. It will save a significant size in the returned payload.
     */
    IncludeLatestVersionOnly = 512,
    /**
     * AllAttributes is designed to be a mask that defines all sub-elements of the extension should be returned.  NOTE: This is not actually All flags. This is now locked to the set defined since changing this enum would be a breaking change and would change the behavior of anyone using it. Try not to use this value when making calls to the service, instead be explicit about the options required.
     */
    AllAttributes = 479,
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

export interface ExtensionShare {
    id: string;
    name: string;
    type: string;
}

export interface ExtensionStatistic {
    statisticName: string;
    value: number;
}

export enum ExtensionStatisticOperation {
    None = 0,
    Set = 1,
    Increment = 2,
    Decrement = 3,
}

export interface ExtensionVersion {
    assetUri: string;
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

export interface InstallationTarget {
    target: string;
}

/**
 * MetadataItem is one value of metadata under a given category of metadata
 */
export interface MetadataItem {
    /**
     * The count of the metadata item
     */
    count: number;
    /**
     * The name of the metadata item
     */
    name: string;
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
    categories: string[];
    displayName: string;
    extensionId: string;
    extensionName: string;
    flags: PublishedExtensionFlags;
    installationTargets: InstallationTarget[];
    lastUpdated: Date;
    longDescription: string;
    publisher: PublisherFacts;
    sharedWith: ExtensionShare[];
    shortDescription: string;
    statistics: ExtensionStatistic[];
    tags: string[];
    versions: ExtensionVersion[];
}

export enum PublishedExtensionFlags {
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
     * Trusted extensions are ones that are given special capabilities. These tend to come from Microsoft and can't be published by the general public.  Note: BuiltIn extensions are always trusted.
     */
    Trusted = 8,
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
     * The Preview flag indicates that the extension is still under preview (not yet of "release" quality). These extensions may be decorated differently in the gallery and may have different policies applied to them.
     */
    Preview = 2048,
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
    flags: PublisherFlags;
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
     * A verified publisher is one that Microsoft has done some review of and ensured the publisher meets a set of requirements. The requirements to become a verified publisher are not listed here.  They can be found in public documentation (TBD).
     */
    Verified = 2,
    /**
     * This is the set of flags that can't be supplied by the developer and is managed by the service itself.
     */
    ServiceFlags = 3,
}

export enum PublisherPermissions {
    /**
     * This gives the bearer the rights to read Publishers and Extensions.
     */
    Read = 1,
    /**
     * This gives the bearer the rights to update, delete, and share Extensions (but not the ability to create them).
     */
    UpdateExtension = 2,
    /**
     * This gives the bearer the rights to create new Publishers at the root of the namespace.
     */
    CreatePublisher = 4,
    /**
     * This gives the bearer the rights to create new Extensions within a publisher.
     */
    PublishExtension = 8,
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
    /**
     * This gives the bearer the rights to delete any extension.
     */
    DeleteExtension = 128,
    /**
     * This gives the bearer the rights edit the publisher settings.
     */
    EditSettings = 256,
    /**
     * This gives the bearer the rights to see all permissions on the publisher.
     */
    ViewPermissions = 512,
    /**
     * This gives the bearer the rights to assign permissions on the publisher.
     */
    ManagePermissions = 1024,
    /**
     * This gives the bearer the rights to delete the publisher.
     */
    DeletePublisher = 2048,
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
     * The page number requested by the user. If not provided 1 is assumed by default.
     */
    pageNumber: number;
    /**
     * The page size defines the number of results the caller wants for this filter. The count can't exceed the overall query size limits.
     */
    pageSize: number;
    /**
     * The paging token is a distinct type of filter and the other filter fields are ignored. The paging token represents the continuation of a previously executed query. The information about where in the result and what fields are being filtered are embeded in the token.
     */
    pagingToken: string;
    /**
     * Defines the type of sorting to be applied on the results. The page slice is cut of the sorted results only.
     */
    sortBy: number;
    /**
     * Defines the order of sorting, 1 for Ascending, 2 for Descending, else default ordering based on the SortBy value
     */
    sortOrder: number;
}

export interface Review {
    /**
     * Unique identifier of a review item
     */
    id: number;
    /**
     * Flag for soft deletion
     */
    isDeleted: boolean;
    /**
     * Version of the product for which review was submitted
     */
    productVersion: string;
    /**
     * Rating procided by the user
     */
    rating: number;
    /**
     * Text description of the review
     */
    text: string;
    /**
     * Title of the review
     */
    title: string;
    /**
     * Time when the review was edited/updated
     */
    updatedDate: Date;
    /**
     * Id of the user who submitted the review
     */
    userId: string;
}

export interface ReviewsResult {
    /**
     * Flag indicating if there are more reviews to be shown (for paging)
     */
    hasMoreReviews: boolean;
    /**
     * List of reviews
     */
    reviews: Review[];
    /**
     * Count of total review items
     */
    totalReviewCount: number;
}

export enum SigningKeyPermissions {
    Read = 1,
    Write = 2,
}

export enum SortByType {
    /**
     * The results will be sorted by relevance in case search query is given, if no search query resutls will be provided as is
     */
    Relevance = 0,
    /**
     * The results will be sorted as per Last Updated date of the extensions with recently updated at the top
     */
    LastUpdatedDate = 1,
    /**
     * Results will be sorted Alphabetically as per the title of the extension
     */
    Title = 2,
    /**
     * Results will be sorted Alphabetically as per Publisher title
     */
    Publisher = 3,
    /**
     * Results will be sorted by Install Count
     */
    InstallCount = 4,
}

export enum SortOrderType {
    /**
     * Results will be sorted in the default order as per the sorting type defined. The default varies for each type, e.g. for Relevance, default is Descnding, for Title default is Ascending etc.
     */
    Default = 0,
    /**
     * The results will be sorted in Ascending order
     */
    Ascending = 1,
    /**
     * The results will be sorted in Descending order
     */
    Descending = 2,
}

/**
 * Represents the extension policy applied to a given user
 */
export interface UserExtensionPolicy {
    /**
     * User display name that this policy refers to
     */
    displayName: string;
    /**
     * The extension policy applied to the user
     */
    permissions: ExtensionPolicy;
    /**
     * User id that this policy refers to
     */
    userId: string;
}

export interface UserReportedConcern {
    /**
     * Category of the concern
     */
    category: ConcernCategory;
    /**
     * User comment associated with the report
     */
    concernText: string;
    /**
     * Id of the review which was reported
     */
    reviewId: number;
    /**
     * Date the report was submitted
     */
    submittedDate: Date;
    /**
     * Id of the user who reported a review
     */
    userId: string;
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
    ConcernCategory: {
        enumValues: {
            "general": 1,
            "abusive": 2,
            "spam": 4,
        }
    },
    ExtensionAcquisitionRequest: {
        fields: <any>null
    },
    ExtensionFile: {
        fields: <any>null
    },
    ExtensionFilterResult: {
        fields: <any>null
    },
    ExtensionFilterResultMetadata: {
        fields: <any>null
    },
    ExtensionIdentifier: {
        fields: <any>null
    },
    ExtensionPackage: {
        fields: <any>null
    },
    ExtensionPolicy: {
        fields: <any>null
    },
    ExtensionPolicyFlags: {
        enumValues: {
            "none": 0,
            "private": 1,
            "public": 2,
            "preview": 4,
            "released": 8,
            "firstParty": 16,
            "all": 31,
        }
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
            "name": 7,
            "installationTarget": 8,
            "featured": 9,
            "searchText": 10,
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
            "includeInstallationTargets": 64,
            "includeAssetUri": 128,
            "includeStatistics": 256,
            "includeLatestVersionOnly": 512,
            "allAttributes": 479,
        }
    },
    ExtensionQueryResult: {
        fields: <any>null
    },
    ExtensionShare: {
        fields: <any>null
    },
    ExtensionStatistic: {
        fields: <any>null
    },
    ExtensionStatisticOperation: {
        enumValues: {
            "none": 0,
            "set": 1,
            "increment": 2,
            "decrement": 3,
        }
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
    InstallationTarget: {
        fields: <any>null
    },
    MetadataItem: {
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
            "none": 0,
            "disabled": 1,
            "builtIn": 2,
            "validated": 4,
            "trusted": 8,
            "public": 256,
            "multiVersion": 512,
            "system": 1024,
            "preview": 2048,
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
            "verified": 2,
            "serviceFlags": 3,
        }
    },
    PublisherPermissions: {
        enumValues: {
            "read": 1,
            "updateExtension": 2,
            "createPublisher": 4,
            "publishExtension": 8,
            "admin": 16,
            "trustedPartner": 32,
            "privateRead": 64,
            "deleteExtension": 128,
            "editSettings": 256,
            "viewPermissions": 512,
            "managePermissions": 1024,
            "deletePublisher": 2048,
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
    Review: {
        fields: <any>null
    },
    ReviewsResult: {
        fields: <any>null
    },
    SigningKeyPermissions: {
        enumValues: {
            "read": 1,
            "write": 2,
        }
    },
    SortByType: {
        enumValues: {
            "relevance": 0,
            "lastUpdatedDate": 1,
            "title": 2,
            "publisher": 3,
            "installCount": 4,
        }
    },
    SortOrderType: {
        enumValues: {
            "default": 0,
            "ascending": 1,
            "descending": 2,
        }
    },
    UserExtensionPolicy: {
        fields: <any>null
    },
    UserReportedConcern: {
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

TypeInfo.ExtensionAcquisitionRequest.fields = {
    assignmentType: {
        enumType: TypeInfo.AcquisitionAssignmentType
    },
    operationType: {
        enumType: TypeInfo.AcquisitionOperationType
    },
};

TypeInfo.ExtensionFile.fields = {
};

TypeInfo.ExtensionFilterResult.fields = {
    extensions: {
        isArray: true,
        typeInfo: TypeInfo.PublishedExtension
    },
    resultMetadata: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionFilterResultMetadata
    },
};

TypeInfo.ExtensionFilterResultMetadata.fields = {
    metadataItems: {
        isArray: true,
        typeInfo: TypeInfo.MetadataItem
    },
};

TypeInfo.ExtensionIdentifier.fields = {
};

TypeInfo.ExtensionPackage.fields = {
};

TypeInfo.ExtensionPolicy.fields = {
    install: {
        enumType: TypeInfo.ExtensionPolicyFlags
    },
    request: {
        enumType: TypeInfo.ExtensionPolicyFlags
    },
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

TypeInfo.ExtensionShare.fields = {
};

TypeInfo.ExtensionStatistic.fields = {
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

TypeInfo.InstallationTarget.fields = {
};

TypeInfo.MetadataItem.fields = {
};

TypeInfo.PublishedExtension.fields = {
    flags: {
        enumType: TypeInfo.PublishedExtensionFlags
    },
    installationTargets: {
        isArray: true,
        typeInfo: TypeInfo.InstallationTarget
    },
    lastUpdated: {
        isDate: true,
    },
    publisher: {
        typeInfo: TypeInfo.PublisherFacts
    },
    sharedWith: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionShare
    },
    statistics: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionStatistic
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
    flags: {
        enumType: TypeInfo.PublisherFlags
    },
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

TypeInfo.Review.fields = {
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.ReviewsResult.fields = {
    reviews: {
        isArray: true,
        typeInfo: TypeInfo.Review
    },
};

TypeInfo.UserExtensionPolicy.fields = {
    permissions: {
        typeInfo: TypeInfo.ExtensionPolicy
    },
};

TypeInfo.UserReportedConcern.fields = {
    category: {
        enumType: TypeInfo.ConcernCategory
    },
    submittedDate: {
        isDate: true,
    },
};
