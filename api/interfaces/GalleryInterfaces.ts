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

export interface Answers {
    /**
     * Gets or sets the vs marketplace extension name
     */
    vSMarketplaceExtensionName: string;
    /**
     * Gets or sets the vs marketplace publsiher name
     */
    vSMarketplacePublisherName: string;
}

export interface AssetDetails {
    /**
     * Gets or sets the Answers, which contains vs marketplace extension name and publisher name
     */
    answers: Answers;
    /**
     * Gets or sets the VS publisher Id
     */
    publisherNaturalIdentifier: string;
}

export interface AzurePublisher {
    azurePublisherId: string;
    publisherName: string;
}

export interface AzureRestApiRequestModel {
    /**
     * Gets or sets the Asset details
     */
    assetDetails: AssetDetails;
    /**
     * Gets or sets the asset id
     */
    assetId: string;
    /**
     * Gets or sets the asset version
     */
    assetVersion: number;
    /**
     * Gets or sets the customer support email
     */
    customerSupportEmail: string;
    /**
     * Gets or sets the integration contact email
     */
    integrationContactEmail: string;
    /**
     * Gets or sets the asset version
     */
    operation: string;
    /**
     * Gets or sets the plan identifier if any.
     */
    planId: string;
    /**
     * Gets or sets the publisher id
     */
    publisherId: string;
    /**
     * Gets or sets the resource type
     */
    type: string;
}

export interface AzureRestApiResponseModel extends AzureRestApiRequestModel {
    /**
     * Gets or sets the Asset operation status
     */
    operationStatus: RestApiResponseStatusModel;
}

/**
 * This is the set of categories in response to the get category query
 */
export interface CategoriesResult {
    categories: ExtensionCategory[];
}

/**
 * Definition of one title of a category
 */
export interface CategoryLanguageTitle {
    /**
     * The language for which the title is applicable
     */
    lang: string;
    /**
     * The language culture id of the lang parameter
     */
    lcid: number;
    /**
     * Actual title to be shown on the UI
     */
    title: string;
}

export enum ConcernCategory {
    General = 1,
    Abusive = 2,
    Spam = 4,
}

export interface EventCounts {
    /**
     * Average rating on the day for extension
     */
    averageRating: number;
    /**
     * Number of times the extension was bought in hosted scenario (applies only to VSTS extensions)
     */
    buyCount: number;
    /**
     * Number of times the extension was bought in connected scenario (applies only to VSTS extensions)
     */
    connectedBuyCount: number;
    /**
     * Number of times the extension was installed in connected scenario (applies only to VSTS extensions)
     */
    connectedInstallCount: number;
    /**
     * Number of times the extension was downloaded (applies only to VSTS extensions)
     */
    downloadCount: number;
    /**
     * Number of times the extension was installed
     */
    installCount: number;
    /**
     * Number of times the extension was installed as a trial (applies only to VSTS extensions)
     */
    tryCount: number;
    /**
     * Number of times the extension was uninstalled (applies only to VSTS extensions)
     */
    uninstallCount: number;
    /**
     * Number of detail page views
     */
    webPageViews: number;
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

export interface ExtensionBadge {
    description: string;
    imgUri: string;
    link: string;
}

export interface ExtensionCategory {
    /**
     * The name of the products with which this category is associated to.
     */
    associatedProducts: string[];
    categoryId: number;
    /**
     * This is the internal name for a category
     */
    categoryName: string;
    /**
     * This parameter is obsolete. Refer to LanguageTitles for langauge specific titles
     */
    language: string;
    /**
     * The list of all the titles of this category in various languages
     */
    languageTitles: CategoryLanguageTitle[];
    /**
     * This is the internal name of the parent if this is associated with a parent
     */
    parentCategoryName: string;
}

export interface ExtensionDailyStat {
    /**
     * Stores the event counts
     */
    counts: EventCounts;
    /**
     * Timestamp of this data point
     */
    statisticDate: Date;
    /**
     * Version of the extension
     */
    version: string;
}

export interface ExtensionDailyStats {
    /**
     * List of extension statistics data points
     */
    dailyStats: ExtensionDailyStat[];
    /**
     * Id of the extension, this will never be sent back to the client. For internal use only.
     */
    extensionId: string;
    /**
     * Name of the extension
     */
    extensionName: string;
    /**
     * Name of the publisher
     */
    publisherName: string;
    /**
     * Count of stats
     */
    statCount: number;
}

export enum ExtensionDeploymentTechnology {
    Exe = 1,
    Msi = 2,
    Vsix = 3,
    ReferralLink = 4,
}

/**
 * Stores details of each event
 */
export interface ExtensionEvent {
    /**
     * Id which identifies each data point uniquely
     */
    id: number;
    properties: any;
    /**
     * Timestamp of when the event occured
     */
    statisticDate: Date;
    /**
     * Version of the extension
     */
    version: string;
}

/**
 * Container object for all extension events. Stores all install and uninstall events related to an extension. The events container is generic so can store data of any type of event. New event types can be added without altering the contract.
 */
export interface ExtensionEvents {
    /**
     * Generic container for events data. The dictionary key denotes the type of event and the list contains properties related to that event
     */
    events: { [key: string] : ExtensionEvent[]; };
    /**
     * Id of the extension, this will never be sent back to the client. This field will mainly be used when EMS calls into Gallery REST API to update install/uninstall events for various extensions in one go.
     */
    extensionId: string;
    /**
     * Name of the extension
     */
    extensionName: string;
    /**
     * Name of the publisher
     */
    publisherName: string;
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

export enum ExtensionLifecycleEventType {
    Uninstall = 1,
    Install = 2,
    Review = 3,
    Other = 999,
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
    /**
     * Query for extensions that are featured in their own category, The filterValue for this is name of category of extensions.
     */
    FeaturedInCategory = 11,
    /**
     * When retrieving extensions from a query, exclude the extensions which are having the given flags. The value specified for this filter should be a string representing the integer values of the flags to be excluded. In case of mulitple flags to be specified, a logical OR of the interger values should be given as value for this filter This should be at most one filter of this type. This only acts as a restrictive filter after. In case of having a particular flag in both IncludeWithFlags and ExcludeWithFlags, excludeFlags will remove the included extensions giving empty result for that flag.
     */
    ExcludeWithFlags = 12,
    /**
     * When retrieving extensions from a query, include the extensions which are having the given flags. The value specified for this filter should be a string representing the integer values of the flags to be included. In case of mulitple flags to be specified, a logical OR of the interger values should be given as value for this filter This should be at most one filter of this type. This only acts as a restrictive filter after. In case of having a particular flag in both IncludeWithFlags and ExcludeWithFlags, excludeFlags will remove the included extensions giving empty result for that flag. In case of multiple flags given in IncludeWithFlags in ORed fashion, extensions having any of the given flags will be included.
     */
    IncludeWithFlags = 13,
    /**
     * Fitler the extensions based on the LCID values applicable. Any extensions which are not having any LCID values will also be filtered. This is currenlty only supported for VS extensions.
     */
    Lcid = 14,
    /**
     * Filter to provide the version of the installation target. This filter will be used along with InstallationTarget filter. The value should be a valid version string. Currently supported only if search text is provided.
     */
    InstallationTargetVersion = 15,
    /**
     * Filter type for specifying a range of installation target version. The filter will be used along with InstallationTarget filter. The value should be a pair of well formed version values separated by hyphen(-). Currently supported only if search text is provided.
     */
    InstallationTargetVersionRange = 16,
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
     * This flag switches the asset uri to use GetAssetByName instead of CDN When this is used, values of base asset uri and base asset uri fallback are switched When this is used, source of asset files are pointed to Gallery service always even if CDN is available
     */
    UseFallbackAssetUri = 1024,
    /**
     * This flag is used to get all the metadata values associated with the extension. This is not applicable to VSTS or VSCode extensions and usage is only internal.
     */
    IncludeMetadata = 2048,
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
    Delete = 4,
}

export interface ExtensionStatisticUpdate {
    extensionName: string;
    operation: ExtensionStatisticOperation;
    publisherName: string;
    statistic: ExtensionStatistic;
}

export interface ExtensionVersion {
    assetUri: string;
    badges: ExtensionBadge[];
    fallbackAssetUri: string;
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
    maxInclusive: boolean;
    maxVersion: string;
    minInclusive: boolean;
    minVersion: string;
    target: string;
    targetVersion: string;
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
    deploymentType: ExtensionDeploymentTechnology;
    displayName: string;
    extensionId: string;
    extensionName: string;
    flags: PublishedExtensionFlags;
    installationTargets: InstallationTarget[];
    lastUpdated: Date;
    longDescription: string;
    /**
     * Date on which the extension was first uploaded.
     */
    publishedDate: Date;
    publisher: PublisherFacts;
    /**
     * Date on which the extension first went public.
     */
    releaseDate: Date;
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
     * The Paid flag indicates that the commerce can be enabled for this extension. Publisher needs to setup Offer/Pricing plan in Azure. If Paid flag is set and a corresponding Offer is not available, the extension will automatically be marked as Preview. If the publisher intends to make the extension Paid in the future, it is mandatory to set the Preview flag. This is currently available only for VSTS extensions only.
     */
    Paid = 16,
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
    /**
     * The Unpublished flag indicates that the extension can't be installed/downloaded. Users who have installed such an extension can continue to use the extension.
     */
    Unpublished = 4096,
    /**
     * The Trial flag indicates that the extension is in Trial version. The flag is right now being used only with respec to Visual Studio extensions.
     */
    Trial = 8192,
}

export interface Publisher {
    displayName: string;
    emailAddress: string[];
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

export enum PublisherQueryFlags {
    /**
     * None is used to retrieve only the basic publisher details.
     */
    None = 0,
    /**
     * Is used to include a list of basic extension details for all extensions published by the requested publisher.
     */
    IncludeExtensions = 1,
    /**
     * Is used to include email address of all the users who are marked as owners for the publisher
     */
    IncludeEmailAddress = 2,
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
 * The core structure of a QnA item
 */
export interface QnAItem {
    /**
     * Time when the review was first created
     */
    createdDate: Date;
    /**
     * Unique identifier of a QnA item
     */
    id: number;
    /**
     * Get status of item
     */
    status: QnAItemStatus;
    /**
     * Text description of the QnA item
     */
    text: string;
    /**
     * Time when the review was edited/updated
     */
    updatedDate: Date;
    /**
     * User details for the item.
     */
    user: UserIdentityRef;
}

export enum QnAItemStatus {
    None = 0,
    /**
     * The UserEditable flag indicates whether the item is editable by the logged in user.
     */
    UserEditable = 1,
    /**
     * The PublisherCreated flag indicates whether the item has been created by extension publisher.
     */
    PublisherCreated = 2,
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

/**
 * The structure of the question / thread
 */
export interface Question extends QnAItem {
    /**
     * List of answers in for the question / thread
     */
    responses: Response[];
}

export interface QuestionsResult {
    /**
     * Flag indicating if there are more QnA threads to be shown (for paging)
     */
    hasMoreQuestions: boolean;
    /**
     * List of the QnA threads
     */
    questions: Question[];
}

export interface RatingCountPerRating {
    /**
     * Rating value
     */
    rating: number;
    /**
     * Count of total ratings
     */
    ratingCount: number;
}

/**
 * The structure of a response
 */
export interface Response extends QnAItem {
}

export enum RestApiResponseStatus {
    /**
     * The operation is completed.
     */
    Completed = 0,
    /**
     * The operation is failed.
     */
    Failed = 1,
    /**
     * The operation is in progress.
     */
    Inprogress = 2,
    /**
     * The operation is in skipped.
     */
    Skipped = 3,
}

/**
 * REST Api Response
 */
export interface RestApiResponseStatusModel {
    /**
     * Gets or sets the operation details
     */
    operationDetails: any;
    /**
     * Gets or sets the operation id
     */
    operationId: string;
    /**
     * Gets or sets the completed status percentage
     */
    percentageCompleted: number;
    /**
     * Gets or sets the status
     */
    status: RestApiResponseStatus;
    /**
     * Gets or sets the status message
     */
    statusMessage: string;
}

export interface Review {
    /**
     * Admin Reply, if any, for this review
     */
    adminReply: ReviewReply;
    /**
     * Unique identifier of a review item
     */
    id: number;
    /**
     * Flag for soft deletion
     */
    isDeleted: boolean;
    isIgnored: boolean;
    /**
     * Version of the product for which review was submitted
     */
    productVersion: string;
    /**
     * Rating procided by the user
     */
    rating: number;
    /**
     * Reply, if any, for this review
     */
    reply: ReviewReply;
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
     * Name of the user
     */
    userDisplayName: string;
    /**
     * Id of the user who submitted the review
     */
    userId: string;
}

export enum ReviewFilterOptions {
    /**
     * No filtering, all reviews are returned (default option)
     */
    None = 0,
    /**
     * Filter out review items with empty review text
     */
    FilterEmptyReviews = 1,
    /**
     * Filter out review items with empty usernames
     */
    FilterEmptyUserNames = 2,
}

export interface ReviewPatch {
    /**
     * Denotes the patch operation type
     */
    operation: ReviewPatchOperation;
    /**
     * Use when patch operation is FlagReview
     */
    reportedConcern: UserReportedConcern;
    /**
     * Use when patch operation is EditReview
     */
    reviewItem: Review;
}

export enum ReviewPatchOperation {
    /**
     * Flag a review
     */
    FlagReview = 1,
    /**
     * Update an existing review
     */
    UpdateReview = 2,
    /**
     * Submit a reply for a review
     */
    ReplyToReview = 3,
    /**
     * Submit an admin response
     */
    AdminResponseForReview = 4,
}

export interface ReviewReply {
    /**
     * Id of the reply
     */
    id: number;
    /**
     * Flag for soft deletion
     */
    isDeleted: boolean;
    /**
     * Version of the product when the reply was submitted or updated
     */
    productVersion: string;
    /**
     * Content of the reply
     */
    replyText: string;
    /**
     * Id of the review, to which this reply belongs
     */
    reviewId: number;
    /**
     * Title of the reply
     */
    title: string;
    /**
     * Date the reply was submitted or updated
     */
    updatedDate: Date;
    /**
     * Id of the user who left the reply
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

export interface ReviewSummary {
    /**
     * Average Rating
     */
    averageRating: number;
    /**
     * Count of total ratings
     */
    ratingCount: number;
    /**
     * Split of count accross rating
     */
    ratingSplit: RatingCountPerRating[];
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
    /**
     * The results will be sorted as per Published date of the extensions
     */
    PublishedDate = 5,
    /**
     * The results will be sorted as per Average ratings of the extensions
     */
    AverageRating = 6,
    /**
     * The results will be sorted as per Trending Daily Score of the extensions
     */
    TrendingDaily = 7,
    /**
     * The results will be sorted as per Trending weekly Score of the extensions
     */
    TrendingWeekly = 8,
    /**
     * The results will be sorted as per Trending monthly Score of the extensions
     */
    TrendingMonthly = 9,
    /**
     * The results will be sorted as per ReleaseDate of the extensions (date on which the extension first went public)
     */
    ReleaseDate = 10,
    /**
     * The results will be sorted as per Author defined in the VSix/Metadata. If not defined, publisher name is used This is specifically needed by VS IDE, other (new and old) clients are not encouraged to use this
     */
    Author = 11,
    /**
     * The results will be sorted as per Weighted Rating of the extension.
     */
    WeightedRating = 12,
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

/**
 * Identity reference with name and guid
 */
export interface UserIdentityRef {
    /**
     * User display name
     */
    displayName: string;
    /**
     * User VSID
     */
    id: string;
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
    Answers: {
        fields: <any>null
    },
    AssetDetails: {
        fields: <any>null
    },
    AzurePublisher: {
        fields: <any>null
    },
    AzureRestApiRequestModel: {
        fields: <any>null
    },
    AzureRestApiResponseModel: {
        fields: <any>null
    },
    CategoriesResult: {
        fields: <any>null
    },
    CategoryLanguageTitle: {
        fields: <any>null
    },
    ConcernCategory: {
        enumValues: {
            "general": 1,
            "abusive": 2,
            "spam": 4,
        }
    },
    EventCounts: {
        fields: <any>null
    },
    ExtensionAcquisitionRequest: {
        fields: <any>null
    },
    ExtensionBadge: {
        fields: <any>null
    },
    ExtensionCategory: {
        fields: <any>null
    },
    ExtensionDailyStat: {
        fields: <any>null
    },
    ExtensionDailyStats: {
        fields: <any>null
    },
    ExtensionDeploymentTechnology: {
        enumValues: {
            "exe": 1,
            "msi": 2,
            "vsix": 3,
            "referralLink": 4,
        }
    },
    ExtensionEvent: {
        fields: <any>null
    },
    ExtensionEvents: {
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
    ExtensionLifecycleEventType: {
        enumValues: {
            "uninstall": 1,
            "install": 2,
            "review": 3,
            "other": 999,
        }
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
            "featuredInCategory": 11,
            "excludeWithFlags": 12,
            "includeWithFlags": 13,
            "lcid": 14,
            "installationTargetVersion": 15,
            "installationTargetVersionRange": 16,
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
            "useFallbackAssetUri": 1024,
            "includeMetadata": 2048,
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
            "delete": 4,
        }
    },
    ExtensionStatisticUpdate: {
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
            "paid": 16,
            "public": 256,
            "multiVersion": 512,
            "system": 1024,
            "preview": 2048,
            "unpublished": 4096,
            "trial": 8192,
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
    PublisherQueryFlags: {
        enumValues: {
            "none": 0,
            "includeExtensions": 1,
            "includeEmailAddress": 2,
        }
    },
    PublisherQueryResult: {
        fields: <any>null
    },
    QnAItem: {
        fields: <any>null
    },
    QnAItemStatus: {
        enumValues: {
            "none": 0,
            "userEditable": 1,
            "publisherCreated": 2,
        }
    },
    QueryFilter: {
        fields: <any>null
    },
    Question: {
        fields: <any>null
    },
    QuestionsResult: {
        fields: <any>null
    },
    RatingCountPerRating: {
        fields: <any>null
    },
    Response: {
        fields: <any>null
    },
    RestApiResponseStatus: {
        enumValues: {
            "completed": 0,
            "failed": 1,
            "inprogress": 2,
            "skipped": 3,
        }
    },
    RestApiResponseStatusModel: {
        fields: <any>null
    },
    Review: {
        fields: <any>null
    },
    ReviewFilterOptions: {
        enumValues: {
            "none": 0,
            "filterEmptyReviews": 1,
            "filterEmptyUserNames": 2,
        }
    },
    ReviewPatch: {
        fields: <any>null
    },
    ReviewPatchOperation: {
        enumValues: {
            "flagReview": 1,
            "updateReview": 2,
            "replyToReview": 3,
            "adminResponseForReview": 4,
        }
    },
    ReviewReply: {
        fields: <any>null
    },
    ReviewsResult: {
        fields: <any>null
    },
    ReviewSummary: {
        fields: <any>null
    },
    SortByType: {
        enumValues: {
            "relevance": 0,
            "lastUpdatedDate": 1,
            "title": 2,
            "publisher": 3,
            "installCount": 4,
            "publishedDate": 5,
            "averageRating": 6,
            "trendingDaily": 7,
            "trendingWeekly": 8,
            "trendingMonthly": 9,
            "releaseDate": 10,
            "author": 11,
            "weightedRating": 12,
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
    UserIdentityRef: {
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

TypeInfo.Answers.fields = {
};

TypeInfo.AssetDetails.fields = {
    answers: {
        typeInfo: TypeInfo.Answers
    },
};

TypeInfo.AzurePublisher.fields = {
};

TypeInfo.AzureRestApiRequestModel.fields = {
    assetDetails: {
        typeInfo: TypeInfo.AssetDetails
    },
};

TypeInfo.AzureRestApiResponseModel.fields = {
    assetDetails: {
        typeInfo: TypeInfo.AssetDetails
    },
    operationStatus: {
        typeInfo: TypeInfo.RestApiResponseStatusModel
    },
};

TypeInfo.CategoriesResult.fields = {
    categories: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionCategory
    },
};

TypeInfo.CategoryLanguageTitle.fields = {
};

TypeInfo.EventCounts.fields = {
};

TypeInfo.ExtensionAcquisitionRequest.fields = {
    assignmentType: {
        enumType: TypeInfo.AcquisitionAssignmentType
    },
    operationType: {
        enumType: TypeInfo.AcquisitionOperationType
    },
};

TypeInfo.ExtensionBadge.fields = {
};

TypeInfo.ExtensionCategory.fields = {
    languageTitles: {
        isArray: true,
        typeInfo: TypeInfo.CategoryLanguageTitle
    },
};

TypeInfo.ExtensionDailyStat.fields = {
    counts: {
        typeInfo: TypeInfo.EventCounts
    },
    statisticDate: {
        isDate: true,
    },
};

TypeInfo.ExtensionDailyStats.fields = {
    dailyStats: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionDailyStat
    },
};

TypeInfo.ExtensionEvent.fields = {
    statisticDate: {
        isDate: true,
    },
};

TypeInfo.ExtensionEvents.fields = {
    events: {
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

TypeInfo.ExtensionStatisticUpdate.fields = {
    operation: {
        enumType: TypeInfo.ExtensionStatisticOperation
    },
    statistic: {
        typeInfo: TypeInfo.ExtensionStatistic
    },
};

TypeInfo.ExtensionVersion.fields = {
    badges: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionBadge
    },
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
    deploymentType: {
        enumType: TypeInfo.ExtensionDeploymentTechnology
    },
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
    publishedDate: {
        isDate: true,
    },
    publisher: {
        typeInfo: TypeInfo.PublisherFacts
    },
    releaseDate: {
        isDate: true,
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

TypeInfo.QnAItem.fields = {
    createdDate: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.QnAItemStatus
    },
    updatedDate: {
        isDate: true,
    },
    user: {
        typeInfo: TypeInfo.UserIdentityRef
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

TypeInfo.Question.fields = {
    createdDate: {
        isDate: true,
    },
    responses: {
        isArray: true,
        typeInfo: TypeInfo.Response
    },
    status: {
        enumType: TypeInfo.QnAItemStatus
    },
    updatedDate: {
        isDate: true,
    },
    user: {
        typeInfo: TypeInfo.UserIdentityRef
    },
};

TypeInfo.QuestionsResult.fields = {
    questions: {
        isArray: true,
        typeInfo: TypeInfo.Question
    },
};

TypeInfo.RatingCountPerRating.fields = {
};

TypeInfo.Response.fields = {
    createdDate: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.QnAItemStatus
    },
    updatedDate: {
        isDate: true,
    },
    user: {
        typeInfo: TypeInfo.UserIdentityRef
    },
};

TypeInfo.RestApiResponseStatusModel.fields = {
    status: {
        enumType: TypeInfo.RestApiResponseStatus
    },
};

TypeInfo.Review.fields = {
    adminReply: {
        typeInfo: TypeInfo.ReviewReply
    },
    reply: {
        typeInfo: TypeInfo.ReviewReply
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.ReviewPatch.fields = {
    operation: {
        enumType: TypeInfo.ReviewPatchOperation
    },
    reportedConcern: {
        typeInfo: TypeInfo.UserReportedConcern
    },
    reviewItem: {
        typeInfo: TypeInfo.Review
    },
};

TypeInfo.ReviewReply.fields = {
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

TypeInfo.ReviewSummary.fields = {
    ratingSplit: {
        isArray: true,
        typeInfo: TypeInfo.RatingCountPerRating
    },
};

TypeInfo.UserExtensionPolicy.fields = {
    permissions: {
        typeInfo: TypeInfo.ExtensionPolicy
    },
};

TypeInfo.UserIdentityRef.fields = {
};

TypeInfo.UserReportedConcern.fields = {
    category: {
        enumType: TypeInfo.ConcernCategory
    },
    submittedDate: {
        isDate: true,
    },
};
