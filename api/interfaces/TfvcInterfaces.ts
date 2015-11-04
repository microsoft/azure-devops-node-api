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

import TfsInterfaces = require("../interfaces/common/TfsInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface AssociatedWorkItem {
    assignedTo: string;
    id: number;
    state: string;
    title: string;
    /**
     * REST url
     */
    url: string;
    webUrl: string;
    workItemType: string;
}

export interface Change<T> {
    changeType: VersionControlChangeType;
    item: T;
    newContent: ItemContent;
    sourceServerItem: string;
    url: string;
}

export interface ChangeCountDictionary {
}

export interface ChangeList<T> {
    allChangesIncluded: boolean;
    changeCounts: { [key: number] : number; };
    changes: Change<T>[];
    comment: string;
    commentTruncated: boolean;
    creationDate: Date;
    notes: CheckinNote[];
    owner: string;
    ownerDisplayName: string;
    ownerId: string;
    sortDate: Date;
    version: string;
}

/**
 * Criteria used in a search for change lists
 */
export interface ChangeListSearchCriteria {
    /**
     * If provided, a version descriptor to compare against base
     */
    compareVersion: string;
    /**
     * If true, don't include delete history entries
     */
    excludeDeletes: boolean;
    /**
     * Whether or not to follow renames for the given item being queried
     */
    followRenames: boolean;
    /**
     * If provided, only include history entries created after this date (string)
     */
    fromDate: string;
    /**
     * If provided, a version descriptor for the earliest change list to include
     */
    fromVersion: string;
    /**
     * Path of item to search under
     */
    itemPath: string;
    /**
     * Version of the items to search
     */
    itemVersion: string;
    /**
     * Number of results to skip (used when clicking more...)
     */
    skip: number;
    /**
     * If provided, only include history entries created before this date (string)
     */
    toDate: string;
    /**
     * If provided, the maximum number of history entries to return
     */
    top: number;
    /**
     * If provided, a version descriptor for the latest change list to include
     */
    toVersion: string;
    /**
     * Alias or display name of user who made the changes
     */
    user: string;
}

export interface CheckinNote {
    name: string;
    value: string;
}

export interface FileContentMetadata {
    contentType: string;
    encoding: number;
    extension: string;
    fileName: string;
    isBinary: boolean;
    isImage: boolean;
    vsLink: string;
}

export interface GitBaseVersionDescriptor extends GitVersionDescriptor {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    baseVersion: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    baseVersionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    baseVersionType: GitVersionType;
}

export interface GitBlobRef {
    _links: any;
    /**
     * SHA1 hash of git object
     */
    objectId: string;
    /**
     * Size of blob content (in bytes)
     */
    size: number;
    url: string;
}

export interface GitBranchStats {
    aheadCount: number;
    behindCount: number;
    commit: GitCommitRef;
    isBaseVersion: boolean;
    name: string;
}

export interface GitChange extends Change<GitItem> {
}

export interface GitCommit extends GitCommitRef {
    push: GitPushRef;
    treeId: string;
}

export interface GitCommitChanges {
    changeCounts: ChangeCountDictionary;
    changes: GitChange[];
}

export interface GitCommitDiffs {
    aheadCount: number;
    allChangesIncluded: boolean;
    baseCommit: string;
    behindCount: number;
    changeCounts: { [key: number] : number; };
    changes: GitChange[];
    commonCommit: string;
    targetCommit: string;
}

export interface GitCommitRef {
    _links: any;
    author: GitUserDate;
    changeCounts: ChangeCountDictionary;
    changes: GitChange[];
    comment: string;
    commentTruncated: boolean;
    commitId: string;
    committer: GitUserDate;
    parents: string[];
    remoteUrl: string;
    url: string;
}

export interface GitCommitToCreate {
    baseRef: GitRef;
    comment: string;
    pathActions: GitPathAction[];
}

export interface GitHistoryQueryResults extends HistoryQueryResults<GitItem> {
    /**
     * Seed commit used for querying history.  Used for skip feature.
     */
    startingCommitId: string;
    unpopulatedCount: number;
    unprocessedCount: number;
}

export interface GitItem extends ItemModel {
    /**
     * SHA1 of commit item was fetched at
     */
    commitId: string;
    /**
     * Type of object (Commit, Tree, Blob, Tag, ...)
     */
    gitObjectType: GitObjectType;
    /**
     * Shallow ref to commit that last changed this item Only populated if latestProcessedChange is requested May not be accurate if latest change is not yet cached
     */
    latestProcessedChange: GitCommitRef;
    /**
     * Git object id
     */
    objectId: string;
    /**
     * Git object id
     */
    originalObjectId: string;
}

export interface GitItemDescriptor {
    /**
     * Path to item
     */
    path: string;
    /**
     * Specifies whether to include children (OneLevel), all descendants (Full), or None
     */
    recursionLevel: VersionControlRecursionType;
    /**
     * Version string (interpretation based on VersionType defined in subclass
     */
    version: string;
    /**
     * Version modifiers (e.g. previous)
     */
    versionOptions: GitVersionOptions;
    /**
     * How to interpret version (branch,tag,commit)
     */
    versionType: GitVersionType;
}

export interface GitItemRequestData {
    /**
     * Whether to include metadata for all items
     */
    includeContentMetadata: boolean;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Collection of items to fetch, including path, version, and recursion level
     */
    itemDescriptors: GitItemDescriptor[];
    /**
     * Whether to include shallow ref to commit that last changed each item
     */
    latestProcessedChange: boolean;
}

/**
 * Encapsulates the reference metadata of a Git media object.
 */
export interface GitMediaObjectRef {
    /**
     * Gets or sets the reference links of the Git media object.
     */
    _links: any;
    /**
     * Gets or sets the Git media object identifier. This Id property duplicates the Oid property, but is required by the VSO REST specification.
     */
    id: string;
    /**
     * Gets or sets the Git media object identifier. This property exists for adherence to the GitHub Git Media contract.
     */
    oid: string;
    /**
     * Gets or sets the size of the Git media object in bytes. This property exists for adherence to the GitHub Git Media contract.
     */
    size: number;
    /**
     * Gets or sets the URL for the Git media object.
     */
    url: string;
}

export enum GitObjectType {
    Bad = 0,
    Commit = 1,
    Tree = 2,
    Blob = 3,
    Tag = 4,
    Ext2 = 5,
    OfsDelta = 6,
    RefDelta = 7,
}

export interface GitPathAction {
    action: GitPathActions;
    base64Content: string;
    path: string;
    rawTextContent: string;
    targetPath: string;
}

export enum GitPathActions {
    None = 0,
    Edit = 1,
    Delete = 2,
    Add = 3,
    Rename = 4,
}

export interface GitPullRequest {
    _links: any;
    closedDate: Date;
    codeReviewId: number;
    commits: GitCommitRef[];
    completionOptions: GitPullRequestCompletionOptions;
    createdBy: VSSInterfaces.IdentityRef;
    creationDate: Date;
    description: string;
    lastMergeCommit: GitCommitRef;
    lastMergeSourceCommit: GitCommitRef;
    lastMergeTargetCommit: GitCommitRef;
    mergeId: string;
    mergeStatus: PullRequestAsyncStatus;
    pullRequestId: number;
    remoteUrl: string;
    repository: GitRepository;
    reviewers: IdentityRefWithVote[];
    sourceRefName: string;
    status: PullRequestStatus;
    targetRefName: string;
    title: string;
    upgraded: boolean;
    url: string;
}

export interface GitPullRequestCompletionOptions {
    deleteSourceBranch: boolean;
    mergeCommitMessage: string;
}

export interface GitPullRequestSearchCriteria {
    creatorId: string;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    repositoryId: string;
    reviewerId: string;
    sourceRefName: string;
    status: PullRequestStatus;
    targetRefName: string;
}

export interface GitPush extends GitPushRef {
    commits: GitCommitRef[];
    refUpdates: GitRefUpdate[];
    repository: GitRepository;
}

export interface GitPushEventData {
    afterId: string;
    beforeId: string;
    branch: string;
    commits: GitCommit[];
    repository: GitRepository;
}

export interface GitPushRef {
    _links: any;
    date: Date;
    pushCorrelationId: string;
    pushedBy: VSSInterfaces.IdentityRef;
    pushId: number;
    url: string;
}

export interface GitPushSearchCriteria {
    fromDate: Date;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    includeRefUpdates: boolean;
    pusherId: string;
    refName: string;
    toDate: Date;
}

export interface GitQueryCommitsCriteria {
    /**
     * Number of entries to skip
     */
    $skip: number;
    /**
     * Maximum number of entries to retrieve
     */
    $top: number;
    /**
     * Alias or display name of the author
     */
    author: string;
    /**
     * If provided, the earliest commit in the graph to search
     */
    compareVersion: GitVersionDescriptor;
    /**
     * If true, don't include delete history entries
     */
    excludeDeletes: boolean;
    /**
     * If provided, a lower bound for filtering commits alphabetically
     */
    fromCommitId: string;
    /**
     * If provided, only include history entries created after this date (string)
     */
    fromDate: string;
    /**
     * If provided, specifies the exact commit ids of the commits to fetch. May not be combined with other parameters.
     */
    ids: string[];
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Path of item to search under
     */
    itemPath: string;
    /**
     * If provided, identifies the commit or branch to search
     */
    itemVersion: GitVersionDescriptor;
    /**
     * If provided, an upper bound for filtering commits alphabetically
     */
    toCommitId: string;
    /**
     * If provided, only include history entries created before this date (string)
     */
    toDate: string;
    /**
     * Alias or display name of the committer
     */
    user: string;
}

export interface GitRef {
    _links: any;
    isLockedBy: VSSInterfaces.IdentityRef;
    name: string;
    objectId: string;
    url: string;
}

export interface GitRefUpdate {
    name: string;
    newObjectId: string;
    oldObjectId: string;
    repositoryId: string;
}

export enum GitRefUpdateMode {
    /**
     * Indicates the Git protocol model where any refs that can be updated will be updated, but any failures will not prevent other updates from succeeding.
     */
    BestEffort = 0,
    /**
     * Indicates that all ref updates must succeed or none will succeed. All ref updates will be atomically written. If any failure is encountered, previously successful updates will be rolled back and the entire operation will fail.
     */
    AllOrNone = 1,
}

export interface GitRefUpdateResult {
    /**
     * Custom message for the result object For instance, Reason for failing.
     */
    customMessage: string;
    /**
     * Ref name
     */
    name: string;
    /**
     * New object ID
     */
    newObjectId: string;
    /**
     * Old object ID
     */
    oldObjectId: string;
    /**
     * Name of the plugin that rejected the updated.
     */
    rejectedBy: string;
    /**
     * Repository ID
     */
    repositoryId: string;
    /**
     * True if the ref update succeeded, false otherwise
     */
    success: boolean;
    /**
     * Status of the update from the TFS server.
     */
    updateStatus: GitRefUpdateStatus;
}

export interface GitRefUpdateResultSet {
    countFailed: number;
    countSucceeded: number;
    pushCorrelationId: string;
    pushIds: { [key: number] : number; };
    pushTime: Date;
    results: GitRefUpdateResult[];
}

export enum GitRefUpdateStatus {
    /**
     * Indicates that the ref update request was completed successfully.
     */
    Succeeded = 0,
    /**
     * Indicates that the ref update request could not be completed because part of the graph would be disconnected by this change, and the caller does not have ForcePush permission on the repository.
     */
    ForcePushRequired = 1,
    /**
     * Indicates that the ref update request could not be completed because the old object ID presented in the request was not the object ID of the ref when the database attempted the update. The most likely scenario is that the caller lost a race to update the ref.
     */
    StaleOldObjectId = 2,
    /**
     * Indicates that the ref update request could not be completed because the ref name presented in the request was not valid.
     */
    InvalidRefName = 3,
    /**
     * The request was not processed
     */
    Unprocessed = 4,
    /**
     * The ref update request could not be completed because the new object ID for the ref could not be resolved to a commit object (potentially through any number of tags)
     */
    UnresolvableToCommit = 5,
    /**
     * The ref update request could not be completed because the user lacks write permissions required to write this ref
     */
    WritePermissionRequired = 6,
    /**
     * The ref update request could not be completed because the user lacks note creation permissions required to write this note
     */
    ManageNotePermissionRequired = 7,
    /**
     * The ref update request could not be completed because the user lacks the permission to create a branch
     */
    CreateBranchPermissionRequired = 8,
    /**
     * The ref update request could not be completed because the user lacks the permission to create a tag
     */
    CreateTagPermissionRequired = 9,
    /**
     * The ref update could not be completed because it was rejected by the plugin.
     */
    RejectedByPlugin = 10,
    /**
     * The ref update could not be completed because the ref is locked by another user.
     */
    Locked = 11,
    /**
     * The ref update could not be completed because, in case-insensitive mode, the ref name conflicts with an existing, differently-cased ref name.
     */
    RefNameConflict = 12,
    /**
     * The ref update could not be completed because it was rejected by policy.
     */
    RejectedByPolicy = 13,
    /**
     * Indicates that the ref update request was completed successfully, but the ref doesn't actually exist so no changes were made.  This should only happen during deletes.
     */
    SucceededNonExistentRef = 14,
    /**
     * Indicates that the ref update request was completed successfully, but the passed-in ref was corrupt - as in, the old object ID was bad.  This should only happen during deletes.
     */
    SucceededCorruptRef = 15,
}

export interface GitRepository {
    _links: any;
    defaultBranch: string;
    id: string;
    name: string;
    project: TfsInterfaces.TeamProjectReference;
    remoteUrl: string;
    url: string;
}

export enum GitRepositoryPermissions {
    None = 0,
    Administer = 1,
    GenericRead = 2,
    GenericContribute = 4,
    ForcePush = 8,
    CreateBranch = 16,
    CreateTag = 32,
    ManageNote = 64,
    PolicyExempt = 128,
    /**
     * This defines the set of bits that are valid for the git permission space. When reading or writing git permissions, these are the only bits paid attention too.
     */
    All = 255,
    BranchLevelPermissions = 141,
}

export interface GitTargetVersionDescriptor extends GitVersionDescriptor {
    /**
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    targetVersion: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    targetVersionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
     */
    targetVersionType: GitVersionType;
}

export interface GitTreeEntryRef {
    /**
     * Blob or tree
     */
    gitObjectType: GitObjectType;
    /**
     * Mode represented as octal string
     */
    mode: string;
    /**
     * SHA1 hash of git object
     */
    objectId: string;
    /**
     * Path relative to parent tree object
     */
    relativePath: string;
    /**
     * Size of content
     */
    size: number;
    /**
     * url to retrieve tree or blob
     */
    url: string;
}

export interface GitTreeRef {
    _links: any;
    /**
     * SHA1 hash of git object
     */
    objectId: string;
    /**
     * Sum of sizes of all children
     */
    size: number;
    /**
     * Blobs and trees under this tree
     */
    treeEntries: GitTreeEntryRef[];
    /**
     * Url to tree
     */
    url: string;
}

export interface GitUserDate {
    date: Date;
    email: string;
    name: string;
}

export interface GitVersionDescriptor {
    /**
     * Version string identifier (name of tag/branch/index, SHA1 of commit)
     */
    version: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    versionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, commit, or index). Determines how Id is interpreted
     */
    versionType: GitVersionType;
}

export enum GitVersionOptions {
    /**
     * Not specified
     */
    None = 0,
    /**
     * Commit that changed item prior to the current version
     */
    PreviousChange = 1,
    /**
     * First parent of commit (HEAD^)
     */
    FirstParent = 2,
}

export enum GitVersionType {
    /**
     * Interpret the version as a branch name
     */
    Branch = 0,
    /**
     * Interpret the version as a tag name
     */
    Tag = 1,
    /**
     * Interpret the version as a commit ID (SHA1)
     */
    Commit = 2,
    /**
     * Interpret the version as an index name
     */
    Index = 3,
}

export interface HistoryEntry<T> {
    /**
     * The Change list (changeset/commit/shelveset) for this point in history
     */
    changeList: ChangeList<T>;
    /**
     * The change made to the item from this change list (only relevant for File history, not folders)
     */
    itemChangeType: VersionControlChangeType;
    /**
     * The path of the item at this point in history (only relevant for File history, not folders)
     */
    serverItem: string;
}

export interface HistoryQueryResults<T> {
    /**
     * True if there are more results available to fetch (we're returning the max # of items requested) A more RESTy solution would be to include a Link header
     */
    moreResultsAvailable: boolean;
    /**
     * The history entries (results) from this query
     */
    results: HistoryEntry<T>[];
}

export interface IdentityRefWithVote extends VSSInterfaces.IdentityRef {
    isRequired: boolean;
    reviewerUrl: string;
    vote: number;
    votedFor: IdentityRefWithVote[];
}

export interface IncludedGitCommit {
    commitId: string;
    commitTime: Date;
    parentCommitIds: string[];
    repositoryId: string;
}

export interface ItemContent {
    content: string;
    contentType: ItemContentType;
}

export enum ItemContentType {
    RawText = 0,
    Base64Encoded = 1,
}

/**
 * Optional details to include when returning an item model
 */
export interface ItemDetailsOptions {
    /**
     * If true, include metadata about the file type
     */
    includeContentMetadata: boolean;
    /**
     * Specifies whether to include children (OneLevel), all descendants (Full) or None for folder items
     */
    recursionLevel: VersionControlRecursionType;
}

export interface ItemModel {
    _links: any;
    contentMetadata: FileContentMetadata;
    isFolder: boolean;
    isSymLink: boolean;
    path: string;
    url: string;
}

export enum PullRequestAsyncStatus {
    NotSet = 0,
    Queued = 1,
    Conflicts = 2,
    Succeeded = 3,
    RejectedByPolicy = 4,
    Failure = 5,
}

export enum PullRequestStatus {
    NotSet = 0,
    Active = 1,
    Abandoned = 2,
    Completed = 3,
    All = 4,
}

export interface TfvcBranch extends TfvcBranchRef {
    children: TfvcBranch[];
    mappings: TfvcBranchMapping[];
    parent: TfvcShallowBranchRef;
    relatedBranches: TfvcShallowBranchRef[];
}

export interface TfvcBranchMapping {
    depth: string;
    serverItem: string;
    type: string;
}

export interface TfvcBranchRef extends TfvcShallowBranchRef {
    _links: any;
    createdDate: Date;
    description: string;
    isDeleted: boolean;
    owner: VSSInterfaces.IdentityRef;
    url: string;
}

export interface TfvcChange extends Change<TfvcItem> {
    /**
     * List of merge sources in case of rename or branch creation.
     */
    mergeSources: TfvcMergeSource[];
    /**
     * Version at which a (shelved) change was pended against
     */
    pendingVersion: number;
}

export interface TfvcChangeset extends TfvcChangesetRef {
    accountId: string;
    changes: TfvcChange[];
    checkinNotes: CheckinNote[];
    collectionId: string;
    hasMoreChanges: boolean;
    policyOverride: TfvcPolicyOverrideInfo;
    teamProjectIds: string[];
    workItems: AssociatedWorkItem[];
}

export interface TfvcChangesetRef {
    _links: any;
    author: VSSInterfaces.IdentityRef;
    changesetId: number;
    checkedInBy: VSSInterfaces.IdentityRef;
    comment: string;
    commentTruncated: boolean;
    createdDate: Date;
    url: string;
}

/**
 * Criteria used in a search for change lists
 */
export interface TfvcChangesetSearchCriteria {
    /**
     * Alias or display name of user who made the changes
     */
    author: string;
    /**
     * Whether or not to follow renames for the given item being queried
     */
    followRenames: boolean;
    /**
     * If provided, only include changesets created after this date (string) Think of a better name for this.
     */
    fromDate: string;
    /**
     * If provided, only include changesets after this changesetID
     */
    fromId: number;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Path of item to search under
     */
    path: string;
    /**
     * If provided, only include changesets created before this date (string) Think of a better name for this.
     */
    toDate: string;
    /**
     * If provided, a version descriptor for the latest change list to include
     */
    toId: number;
}

export interface TfvcChangesetsRequestData {
    changesetIds: number[];
    commentLength: number;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
}

export interface TfvcCheckinEventData {
    changeset: TfvcChangeset;
    project: TfsInterfaces.TeamProjectReference;
}

export interface TfvcHistoryEntry extends HistoryEntry<TfvcItem> {
    /**
     * The encoding of the item at this point in history (only relevant for File history, not folders)
     */
    encoding: number;
    /**
     * The file id of the item at this point in history (only relevant for File history, not folders)
     */
    fileId: number;
}

export interface TfvcItem extends ItemModel {
    changeDate: Date;
    deletionId: number;
    isBranch: boolean;
    isPendingChange: boolean;
    version: number;
}

/**
 * Item path and Version descriptor properties
 */
export interface TfvcItemDescriptor {
    path: string;
    recursionLevel: VersionControlRecursionType;
    version: string;
    versionOption: TfvcVersionOption;
    versionType: TfvcVersionType;
}

export interface TfvcItemRequestData {
    /**
     * If true, include metadata about the file type
     */
    includeContentMetadata: boolean;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    itemDescriptors: TfvcItemDescriptor[];
}

export interface TfvcLabel extends TfvcLabelRef {
    items: TfvcItem[];
}

export interface TfvcLabelRef {
    _links: any;
    description: string;
    id: number;
    labelScope: string;
    modifiedDate: Date;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    url: string;
}

export interface TfvcLabelRequestData {
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    itemLabelFilter: string;
    labelScope: string;
    maxItemCount: number;
    name: string;
    owner: string;
}

export interface TfvcMergeSource {
    /**
     * Indicates if this a rename source. If false, it is a merge source.
     */
    isRename: boolean;
    /**
     * The server item of the merge source
     */
    serverItem: string;
    /**
     * Start of the version range
     */
    versionFrom: number;
    /**
     * End of the version range
     */
    versionTo: number;
}

export interface TfvcPolicyFailureInfo {
    message: string;
    policyName: string;
}

export interface TfvcPolicyOverrideInfo {
    comment: string;
    policyFailures: TfvcPolicyFailureInfo[];
}

export interface TfvcShallowBranchRef {
    path: string;
}

export interface TfvcShelveset extends TfvcShelvesetRef {
    changes: TfvcChange[];
    notes: CheckinNote[];
    policyOverride: TfvcPolicyOverrideInfo;
    workItems: AssociatedWorkItem[];
}

export interface TfvcShelvesetRef {
    _links: any;
    comment: string;
    commentTruncated: boolean;
    createdDate: Date;
    id: string;
    name: string;
    owner: VSSInterfaces.IdentityRef;
    url: string;
}

export interface TfvcShelvesetRequestData {
    /**
     * Whether to include policyOverride and notes
     */
    includeDetails: boolean;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks: boolean;
    /**
     * Whether to include workItems
     */
    includeWorkItems: boolean;
    /**
     * Max number of changes to include
     */
    maxChangeCount: number;
    /**
     * Max length of comment
     */
    maxCommentLength: number;
    /**
     * Shelveset's name
     */
    name: string;
    /**
     * Owner's ID. Could be a name or a guid.
     */
    owner: string;
}

export interface TfvcVersionDescriptor {
    version: string;
    versionOption: TfvcVersionOption;
    versionType: TfvcVersionType;
}

export enum TfvcVersionOption {
    None = 0,
    Previous = 1,
    UseRename = 2,
}

export enum TfvcVersionType {
    None = 0,
    Changeset = 1,
    Shelveset = 2,
    Change = 3,
    Date = 4,
    Latest = 5,
    Tip = 6,
    MergeSource = 7,
}

export interface UpdateRefsRequest {
    refUpdateRequests: GitRefUpdate[];
    updateMode: GitRefUpdateMode;
}

export enum VersionControlChangeType {
    None = 0,
    Add = 1,
    Edit = 2,
    Encoding = 4,
    Rename = 8,
    Delete = 16,
    Undelete = 32,
    Branch = 64,
    Merge = 128,
    Lock = 256,
    Rollback = 512,
    SourceRename = 1024,
    TargetRename = 2048,
    Property = 4096,
    All = 8191,
}

export interface VersionControlProjectInfo {
    project: TfsInterfaces.TeamProjectReference;
    supportsGit: boolean;
    supportsTFVC: boolean;
}

export enum VersionControlRecursionType {
    None = 0,
    OneLevel = 1,
    Full = 120,
}

export var TypeInfo = {
    AssociatedWorkItem: {
        fields: <any>null
    },
    Change: {
        fields: <any>null
    },
    ChangeCountDictionary: {
        fields: <any>null
    },
    ChangeList: {
        fields: <any>null
    },
    ChangeListSearchCriteria: {
        fields: <any>null
    },
    CheckinNote: {
        fields: <any>null
    },
    FileContentMetadata: {
        fields: <any>null
    },
    GitBaseVersionDescriptor: {
        fields: <any>null
    },
    GitBlobRef: {
        fields: <any>null
    },
    GitBranchStats: {
        fields: <any>null
    },
    GitChange: {
        fields: <any>null
    },
    GitCommit: {
        fields: <any>null
    },
    GitCommitChanges: {
        fields: <any>null
    },
    GitCommitDiffs: {
        fields: <any>null
    },
    GitCommitRef: {
        fields: <any>null
    },
    GitCommitToCreate: {
        fields: <any>null
    },
    GitHistoryQueryResults: {
        fields: <any>null
    },
    GitItem: {
        fields: <any>null
    },
    GitItemDescriptor: {
        fields: <any>null
    },
    GitItemRequestData: {
        fields: <any>null
    },
    GitMediaObjectRef: {
        fields: <any>null
    },
    GitObjectType: {
        enumValues: {
            "bad": 0,
            "commit": 1,
            "tree": 2,
            "blob": 3,
            "tag": 4,
            "ext2": 5,
            "ofsDelta": 6,
            "refDelta": 7,
        }
    },
    GitPathAction: {
        fields: <any>null
    },
    GitPathActions: {
        enumValues: {
            "none": 0,
            "edit": 1,
            "delete": 2,
            "add": 3,
            "rename": 4,
        }
    },
    GitPullRequest: {
        fields: <any>null
    },
    GitPullRequestCompletionOptions: {
        fields: <any>null
    },
    GitPullRequestSearchCriteria: {
        fields: <any>null
    },
    GitPush: {
        fields: <any>null
    },
    GitPushEventData: {
        fields: <any>null
    },
    GitPushRef: {
        fields: <any>null
    },
    GitPushSearchCriteria: {
        fields: <any>null
    },
    GitQueryCommitsCriteria: {
        fields: <any>null
    },
    GitRef: {
        fields: <any>null
    },
    GitRefUpdate: {
        fields: <any>null
    },
    GitRefUpdateMode: {
        enumValues: {
            "bestEffort": 0,
            "allOrNone": 1,
        }
    },
    GitRefUpdateResult: {
        fields: <any>null
    },
    GitRefUpdateResultSet: {
        fields: <any>null
    },
    GitRefUpdateStatus: {
        enumValues: {
            "succeeded": 0,
            "forcePushRequired": 1,
            "staleOldObjectId": 2,
            "invalidRefName": 3,
            "unprocessed": 4,
            "unresolvableToCommit": 5,
            "writePermissionRequired": 6,
            "manageNotePermissionRequired": 7,
            "createBranchPermissionRequired": 8,
            "createTagPermissionRequired": 9,
            "rejectedByPlugin": 10,
            "locked": 11,
            "refNameConflict": 12,
            "rejectedByPolicy": 13,
            "succeededNonExistentRef": 14,
            "succeededCorruptRef": 15,
        }
    },
    GitRepository: {
        fields: <any>null
    },
    GitRepositoryPermissions: {
        enumValues: {
            "none": 0,
            "administer": 1,
            "genericRead": 2,
            "genericContribute": 4,
            "forcePush": 8,
            "createBranch": 16,
            "createTag": 32,
            "manageNote": 64,
            "policyExempt": 128,
            "all": 255,
            "branchLevelPermissions": 141,
        }
    },
    GitTargetVersionDescriptor: {
        fields: <any>null
    },
    GitTreeEntryRef: {
        fields: <any>null
    },
    GitTreeRef: {
        fields: <any>null
    },
    GitUserDate: {
        fields: <any>null
    },
    GitVersionDescriptor: {
        fields: <any>null
    },
    GitVersionOptions: {
        enumValues: {
            "none": 0,
            "previousChange": 1,
            "firstParent": 2,
        }
    },
    GitVersionType: {
        enumValues: {
            "branch": 0,
            "tag": 1,
            "commit": 2,
            "index": 3,
        }
    },
    HistoryEntry: {
        fields: <any>null
    },
    HistoryQueryResults: {
        fields: <any>null
    },
    IdentityRefWithVote: {
        fields: <any>null
    },
    IncludedGitCommit: {
        fields: <any>null
    },
    ItemContent: {
        fields: <any>null
    },
    ItemContentType: {
        enumValues: {
            "rawText": 0,
            "base64Encoded": 1,
        }
    },
    ItemDetailsOptions: {
        fields: <any>null
    },
    ItemModel: {
        fields: <any>null
    },
    PullRequestAsyncStatus: {
        enumValues: {
            "notSet": 0,
            "queued": 1,
            "conflicts": 2,
            "succeeded": 3,
            "rejectedByPolicy": 4,
            "failure": 5,
        }
    },
    PullRequestStatus: {
        enumValues: {
            "notSet": 0,
            "active": 1,
            "abandoned": 2,
            "completed": 3,
            "all": 4,
        }
    },
    TfvcBranch: {
        fields: <any>null
    },
    TfvcBranchMapping: {
        fields: <any>null
    },
    TfvcBranchRef: {
        fields: <any>null
    },
    TfvcChange: {
        fields: <any>null
    },
    TfvcChangeset: {
        fields: <any>null
    },
    TfvcChangesetRef: {
        fields: <any>null
    },
    TfvcChangesetSearchCriteria: {
        fields: <any>null
    },
    TfvcChangesetsRequestData: {
        fields: <any>null
    },
    TfvcCheckinEventData: {
        fields: <any>null
    },
    TfvcHistoryEntry: {
        fields: <any>null
    },
    TfvcItem: {
        fields: <any>null
    },
    TfvcItemDescriptor: {
        fields: <any>null
    },
    TfvcItemRequestData: {
        fields: <any>null
    },
    TfvcLabel: {
        fields: <any>null
    },
    TfvcLabelRef: {
        fields: <any>null
    },
    TfvcLabelRequestData: {
        fields: <any>null
    },
    TfvcMergeSource: {
        fields: <any>null
    },
    TfvcPolicyFailureInfo: {
        fields: <any>null
    },
    TfvcPolicyOverrideInfo: {
        fields: <any>null
    },
    TfvcShallowBranchRef: {
        fields: <any>null
    },
    TfvcShelveset: {
        fields: <any>null
    },
    TfvcShelvesetRef: {
        fields: <any>null
    },
    TfvcShelvesetRequestData: {
        fields: <any>null
    },
    TfvcVersionDescriptor: {
        fields: <any>null
    },
    TfvcVersionOption: {
        enumValues: {
            "none": 0,
            "previous": 1,
            "useRename": 2,
        }
    },
    TfvcVersionType: {
        enumValues: {
            "none": 0,
            "changeset": 1,
            "shelveset": 2,
            "change": 3,
            "date": 4,
            "latest": 5,
            "tip": 6,
            "mergeSource": 7,
        }
    },
    UpdateRefsRequest: {
        fields: <any>null
    },
    VersionControlChangeType: {
        enumValues: {
            "none": 0,
            "add": 1,
            "edit": 2,
            "encoding": 4,
            "rename": 8,
            "delete": 16,
            "undelete": 32,
            "branch": 64,
            "merge": 128,
            "lock": 256,
            "rollback": 512,
            "sourceRename": 1024,
            "targetRename": 2048,
            "property": 4096,
            "all": 8191,
        }
    },
    VersionControlProjectInfo: {
        fields: <any>null
    },
    VersionControlRecursionType: {
        enumValues: {
            "none": 0,
            "oneLevel": 1,
            "full": 120,
        }
    },
};

TypeInfo.AssociatedWorkItem.fields = {
};

TypeInfo.Change.fields = {
    changeType: {
        enumType: TypeInfo.VersionControlChangeType
    },
    newContent: {
        typeInfo: TypeInfo.ItemContent
    },
};

TypeInfo.ChangeCountDictionary.fields = {
};

TypeInfo.ChangeList.fields = {
    creationDate: {
        isDate: true,
    },
    notes: {
        isArray: true,
        typeInfo: TypeInfo.CheckinNote
    },
    sortDate: {
        isDate: true,
    },
};

TypeInfo.ChangeListSearchCriteria.fields = {
};

TypeInfo.CheckinNote.fields = {
};

TypeInfo.FileContentMetadata.fields = {
};

TypeInfo.GitBaseVersionDescriptor.fields = {
    baseVersionOptions: {
        enumType: TypeInfo.GitVersionOptions
    },
    baseVersionType: {
        enumType: TypeInfo.GitVersionType
    },
    versionOptions: {
        enumType: TypeInfo.GitVersionOptions
    },
    versionType: {
        enumType: TypeInfo.GitVersionType
    },
};

TypeInfo.GitBlobRef.fields = {
};

TypeInfo.GitBranchStats.fields = {
    commit: {
        typeInfo: TypeInfo.GitCommitRef
    },
};

TypeInfo.GitChange.fields = {
    changeType: {
        enumType: TypeInfo.VersionControlChangeType
    },
    item: {
        typeInfo: TypeInfo.GitItem
    },
    newContent: {
        typeInfo: TypeInfo.ItemContent
    },
};

TypeInfo.GitCommit.fields = {
    author: {
        typeInfo: TypeInfo.GitUserDate
    },
    changeCounts: {
        typeInfo: TypeInfo.ChangeCountDictionary
    },
    changes: {
        isArray: true,
        typeInfo: TypeInfo.GitChange
    },
    committer: {
        typeInfo: TypeInfo.GitUserDate
    },
    push: {
        typeInfo: TypeInfo.GitPushRef
    },
};

TypeInfo.GitCommitChanges.fields = {
    changeCounts: {
        typeInfo: TypeInfo.ChangeCountDictionary
    },
    changes: {
        isArray: true,
        typeInfo: TypeInfo.GitChange
    },
};

TypeInfo.GitCommitDiffs.fields = {
    changes: {
        isArray: true,
        typeInfo: TypeInfo.GitChange
    },
};

TypeInfo.GitCommitRef.fields = {
    author: {
        typeInfo: TypeInfo.GitUserDate
    },
    changeCounts: {
        typeInfo: TypeInfo.ChangeCountDictionary
    },
    changes: {
        isArray: true,
        typeInfo: TypeInfo.GitChange
    },
    committer: {
        typeInfo: TypeInfo.GitUserDate
    },
};

TypeInfo.GitCommitToCreate.fields = {
    baseRef: {
        typeInfo: TypeInfo.GitRef
    },
    pathActions: {
        isArray: true,
        typeInfo: TypeInfo.GitPathAction
    },
};

TypeInfo.GitHistoryQueryResults.fields = {
};

TypeInfo.GitItem.fields = {
    contentMetadata: {
        typeInfo: TypeInfo.FileContentMetadata
    },
    gitObjectType: {
        enumType: TypeInfo.GitObjectType
    },
    latestProcessedChange: {
        typeInfo: TypeInfo.GitCommitRef
    },
};

TypeInfo.GitItemDescriptor.fields = {
    recursionLevel: {
        enumType: TypeInfo.VersionControlRecursionType
    },
    versionOptions: {
        enumType: TypeInfo.GitVersionOptions
    },
    versionType: {
        enumType: TypeInfo.GitVersionType
    },
};

TypeInfo.GitItemRequestData.fields = {
    itemDescriptors: {
        isArray: true,
        typeInfo: TypeInfo.GitItemDescriptor
    },
};

TypeInfo.GitMediaObjectRef.fields = {
};

TypeInfo.GitPathAction.fields = {
    action: {
        enumType: TypeInfo.GitPathActions
    },
};

TypeInfo.GitPullRequest.fields = {
    closedDate: {
        isDate: true,
    },
    commits: {
        isArray: true,
        typeInfo: TypeInfo.GitCommitRef
    },
    completionOptions: {
        typeInfo: TypeInfo.GitPullRequestCompletionOptions
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    creationDate: {
        isDate: true,
    },
    lastMergeCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    lastMergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    lastMergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeStatus: {
        enumType: TypeInfo.PullRequestAsyncStatus
    },
    repository: {
        typeInfo: TypeInfo.GitRepository
    },
    reviewers: {
        isArray: true,
        typeInfo: TypeInfo.IdentityRefWithVote
    },
    status: {
        enumType: TypeInfo.PullRequestStatus
    },
};

TypeInfo.GitPullRequestCompletionOptions.fields = {
};

TypeInfo.GitPullRequestSearchCriteria.fields = {
    status: {
        enumType: TypeInfo.PullRequestStatus
    },
};

TypeInfo.GitPush.fields = {
    commits: {
        isArray: true,
        typeInfo: TypeInfo.GitCommitRef
    },
    date: {
        isDate: true,
    },
    pushedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    refUpdates: {
        isArray: true,
        typeInfo: TypeInfo.GitRefUpdate
    },
    repository: {
        typeInfo: TypeInfo.GitRepository
    },
};

TypeInfo.GitPushEventData.fields = {
    commits: {
        isArray: true,
        typeInfo: TypeInfo.GitCommit
    },
    repository: {
        typeInfo: TypeInfo.GitRepository
    },
};

TypeInfo.GitPushRef.fields = {
    date: {
        isDate: true,
    },
    pushedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.GitPushSearchCriteria.fields = {
    fromDate: {
        isDate: true,
    },
    toDate: {
        isDate: true,
    },
};

TypeInfo.GitQueryCommitsCriteria.fields = {
    compareVersion: {
        typeInfo: TypeInfo.GitVersionDescriptor
    },
    itemVersion: {
        typeInfo: TypeInfo.GitVersionDescriptor
    },
};

TypeInfo.GitRef.fields = {
    isLockedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.GitRefUpdate.fields = {
};

TypeInfo.GitRefUpdateResult.fields = {
    updateStatus: {
        enumType: TypeInfo.GitRefUpdateStatus
    },
};

TypeInfo.GitRefUpdateResultSet.fields = {
    pushTime: {
        isDate: true,
    },
    results: {
        isArray: true,
        typeInfo: TypeInfo.GitRefUpdateResult
    },
};

TypeInfo.GitRepository.fields = {
    project: {
        typeInfo: TfsInterfaces.TypeInfo.TeamProjectReference
    },
};

TypeInfo.GitTargetVersionDescriptor.fields = {
    targetVersionOptions: {
        enumType: TypeInfo.GitVersionOptions
    },
    targetVersionType: {
        enumType: TypeInfo.GitVersionType
    },
    versionOptions: {
        enumType: TypeInfo.GitVersionOptions
    },
    versionType: {
        enumType: TypeInfo.GitVersionType
    },
};

TypeInfo.GitTreeEntryRef.fields = {
    gitObjectType: {
        enumType: TypeInfo.GitObjectType
    },
};

TypeInfo.GitTreeRef.fields = {
    treeEntries: {
        isArray: true,
        typeInfo: TypeInfo.GitTreeEntryRef
    },
};

TypeInfo.GitUserDate.fields = {
    date: {
        isDate: true,
    },
};

TypeInfo.GitVersionDescriptor.fields = {
    versionOptions: {
        enumType: TypeInfo.GitVersionOptions
    },
    versionType: {
        enumType: TypeInfo.GitVersionType
    },
};

TypeInfo.HistoryEntry.fields = {
    itemChangeType: {
        enumType: TypeInfo.VersionControlChangeType
    },
};

TypeInfo.HistoryQueryResults.fields = {
};

TypeInfo.IdentityRefWithVote.fields = {
    votedFor: {
        isArray: true,
        typeInfo: TypeInfo.IdentityRefWithVote
    },
};

TypeInfo.IncludedGitCommit.fields = {
    commitTime: {
        isDate: true,
    },
};

TypeInfo.ItemContent.fields = {
    contentType: {
        enumType: TypeInfo.ItemContentType
    },
};

TypeInfo.ItemDetailsOptions.fields = {
    recursionLevel: {
        enumType: TypeInfo.VersionControlRecursionType
    },
};

TypeInfo.ItemModel.fields = {
    contentMetadata: {
        typeInfo: TypeInfo.FileContentMetadata
    },
};

TypeInfo.TfvcBranch.fields = {
    children: {
        isArray: true,
        typeInfo: TypeInfo.TfvcBranch
    },
    createdDate: {
        isDate: true,
    },
    mappings: {
        isArray: true,
        typeInfo: TypeInfo.TfvcBranchMapping
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    parent: {
        typeInfo: TypeInfo.TfvcShallowBranchRef
    },
    relatedBranches: {
        isArray: true,
        typeInfo: TypeInfo.TfvcShallowBranchRef
    },
};

TypeInfo.TfvcBranchMapping.fields = {
};

TypeInfo.TfvcBranchRef.fields = {
    createdDate: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.TfvcChange.fields = {
    changeType: {
        enumType: TypeInfo.VersionControlChangeType
    },
    item: {
        typeInfo: TypeInfo.TfvcItem
    },
    mergeSources: {
        isArray: true,
        typeInfo: TypeInfo.TfvcMergeSource
    },
    newContent: {
        typeInfo: TypeInfo.ItemContent
    },
};

TypeInfo.TfvcChangeset.fields = {
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    changes: {
        isArray: true,
        typeInfo: TypeInfo.TfvcChange
    },
    checkedInBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    checkinNotes: {
        isArray: true,
        typeInfo: TypeInfo.CheckinNote
    },
    createdDate: {
        isDate: true,
    },
    policyOverride: {
        typeInfo: TypeInfo.TfvcPolicyOverrideInfo
    },
    workItems: {
        isArray: true,
        typeInfo: TypeInfo.AssociatedWorkItem
    },
};

TypeInfo.TfvcChangesetRef.fields = {
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    checkedInBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdDate: {
        isDate: true,
    },
};

TypeInfo.TfvcChangesetSearchCriteria.fields = {
};

TypeInfo.TfvcChangesetsRequestData.fields = {
};

TypeInfo.TfvcCheckinEventData.fields = {
    changeset: {
        typeInfo: TypeInfo.TfvcChangeset
    },
    project: {
        typeInfo: TfsInterfaces.TypeInfo.TeamProjectReference
    },
};

TypeInfo.TfvcHistoryEntry.fields = {
    itemChangeType: {
        enumType: TypeInfo.VersionControlChangeType
    },
};

TypeInfo.TfvcItem.fields = {
    changeDate: {
        isDate: true,
    },
    contentMetadata: {
        typeInfo: TypeInfo.FileContentMetadata
    },
};

TypeInfo.TfvcItemDescriptor.fields = {
    recursionLevel: {
        enumType: TypeInfo.VersionControlRecursionType
    },
    versionOption: {
        enumType: TypeInfo.TfvcVersionOption
    },
    versionType: {
        enumType: TypeInfo.TfvcVersionType
    },
};

TypeInfo.TfvcItemRequestData.fields = {
    itemDescriptors: {
        isArray: true,
        typeInfo: TypeInfo.TfvcItemDescriptor
    },
};

TypeInfo.TfvcLabel.fields = {
    items: {
        isArray: true,
        typeInfo: TypeInfo.TfvcItem
    },
    modifiedDate: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.TfvcLabelRef.fields = {
    modifiedDate: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.TfvcLabelRequestData.fields = {
};

TypeInfo.TfvcMergeSource.fields = {
};

TypeInfo.TfvcPolicyFailureInfo.fields = {
};

TypeInfo.TfvcPolicyOverrideInfo.fields = {
    policyFailures: {
        isArray: true,
        typeInfo: TypeInfo.TfvcPolicyFailureInfo
    },
};

TypeInfo.TfvcShallowBranchRef.fields = {
};

TypeInfo.TfvcShelveset.fields = {
    changes: {
        isArray: true,
        typeInfo: TypeInfo.TfvcChange
    },
    createdDate: {
        isDate: true,
    },
    notes: {
        isArray: true,
        typeInfo: TypeInfo.CheckinNote
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    policyOverride: {
        typeInfo: TypeInfo.TfvcPolicyOverrideInfo
    },
    workItems: {
        isArray: true,
        typeInfo: TypeInfo.AssociatedWorkItem
    },
};

TypeInfo.TfvcShelvesetRef.fields = {
    createdDate: {
        isDate: true,
    },
    owner: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.TfvcShelvesetRequestData.fields = {
};

TypeInfo.TfvcVersionDescriptor.fields = {
    versionOption: {
        enumType: TypeInfo.TfvcVersionOption
    },
    versionType: {
        enumType: TypeInfo.TfvcVersionType
    },
};

TypeInfo.UpdateRefsRequest.fields = {
    refUpdateRequests: {
        isArray: true,
        typeInfo: TypeInfo.GitRefUpdate
    },
    updateMode: {
        enumType: TypeInfo.GitRefUpdateMode
    },
};

TypeInfo.VersionControlProjectInfo.fields = {
    project: {
        typeInfo: TfsInterfaces.TypeInfo.TeamProjectReference
    },
};
