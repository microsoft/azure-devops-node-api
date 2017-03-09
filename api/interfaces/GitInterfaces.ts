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

import TfsCoreInterfaces = require("../interfaces/CoreInterfaces");
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

export interface AsyncGitOperationNotification {
    operationId: number;
}

export interface AsyncRefOperationCommitLevelEventNotification extends AsyncGitOperationNotification {
    commitId: string;
}

export interface AsyncRefOperationCompletedNotification extends AsyncGitOperationNotification {
    newRefName: string;
}

export interface AsyncRefOperationConflictNotification extends AsyncRefOperationCommitLevelEventNotification {
}

export interface AsyncRefOperationGeneralFailureNotification extends AsyncGitOperationNotification {
}

export interface AsyncRefOperationProgressNotification extends AsyncRefOperationCommitLevelEventNotification {
    progress: number;
}

/**
 * Meta data for a file attached to an artifact
 */
export interface Attachment {
    _links: any;
    /**
     * The person that uploaded this attachment
     */
    author: VSSInterfaces.IdentityRef;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the server by using SHA1 hash function.
     */
    contentHash: string;
    /**
     * The time the attachment was uploaded
     */
    createdDate: Date;
    /**
     * The description of the attachment, can be null.
     */
    description: string;
    /**
     * The display name of the attachment, can't be null or empty.
     */
    displayName: string;
    /**
     * Id of the code review attachment
     */
    id: number;
    properties: any;
    /**
     * The url to download the content of the attachment
     */
    url: string;
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
     * Path of item to search under. If the itemPaths memebr is used then it will take precedence over this.
     */
    itemPath: string;
    /**
     * List of item paths to search under. If this member is used then itemPath will be ignored.
     */
    itemPaths: string[];
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

export interface Comment {
    _links: any;
    /**
     * The author of the pull request comment.
     */
    author: VSSInterfaces.IdentityRef;
    /**
     * Determines what kind of comment when it was created.
     */
    commentType: CommentType;
    /**
     * The comment's content.
     */
    content: string;
    /**
     * The pull request comment id. It always starts from 1.
     */
    id: number;
    /**
     * Marks if this comment was soft-deleted.
     */
    isDeleted: boolean;
    /**
     * The date a comment was last updated.
     */
    lastUpdatedDate: Date;
    /**
     * The pull request comment id of the parent comment. This is used for replies
     */
    parentCommentId: number;
    /**
     * The date a comment was first published.
     */
    publishedDate: Date;
    /**
     * A list of the users who've liked this comment.
     */
    usersLiked: VSSInterfaces.IdentityRef[];
}

/**
 * Iteration context is used to specify comparing iteration Ids when a comment thread is added while comparing 2 iterations.
 */
export interface CommentIterationContext {
    /**
     * First comparing iteration Id. Minimum value is 1.
     */
    firstComparingIteration: number;
    /**
     * Second comparing iteration Id. Minimum value is 1.
     */
    secondComparingIteration: number;
}

export interface CommentPosition {
    /**
     * Position line starting with one.
     */
    line: number;
    /**
     * Position offset starting with zero.
     */
    offset: number;
}

/**
 * Represents a given comment thread
 */
export interface CommentThread {
    _links: any;
    /**
     * A list of the comments.
     */
    comments: Comment[];
    /**
     * The comment thread id.
     */
    id: number;
    /**
     * Specify if the thread is deleted which happens when all comments are deleted
     */
    isDeleted: boolean;
    /**
     * The time this thread was last updated.
     */
    lastUpdatedDate: Date;
    /**
     * A list of (optional) thread properties.
     */
    properties: any;
    /**
     * The time this thread was published.
     */
    publishedDate: Date;
    /**
     * The status of the comment thread.
     */
    status: CommentThreadStatus;
    /**
     * Specify thread context such as position in left/right file.
     */
    threadContext: CommentThreadContext;
}

export interface CommentThreadContext {
    /**
     * File path relative to the root of the repository. It's up to the client to use any path format.
     */
    filePath: string;
    /**
     * Position of last character of the comment in left file.
     */
    leftFileEnd: CommentPosition;
    /**
     * Position of first character of the comment in left file.
     */
    leftFileStart: CommentPosition;
    /**
     * Position of last character of the comment in right file.
     */
    rightFileEnd: CommentPosition;
    /**
     * Position of first character of the comment in right file.
     */
    rightFileStart: CommentPosition;
}

export enum CommentThreadStatus {
    Unknown = 0,
    Active = 1,
    Fixed = 2,
    WontFix = 3,
    Closed = 4,
    ByDesign = 5,
    Pending = 6,
}

/**
 * Criteria to decide if and how a thread should be tracked
 */
export interface CommentTrackingCriteria {
    /**
     * The first comparing iteration being viewed. Threads will be tracked if this is greater than 0.
     */
    firstComparingIteration: number;
    /**
     * The second comparing iteration being viewed. Threads will be tracked if this is greater than 0.
     */
    secondComparingIteration: number;
}

export enum CommentType {
    /**
     * The comment type is not known.
     */
    Unknown = 0,
    /**
     * This is a regular user comment.
     */
    Text = 1,
    /**
     * The comment comes as a result of a code change.
     */
    CodeChange = 2,
    /**
     * The comment represents a system message.
     */
    System = 3,
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

export interface GitAnnotatedTag {
    /**
     * Tagging Message
     */
    message: string;
    name: string;
    objectId: string;
    /**
     * User name, Email and date of tagging
     */
    taggedBy: GitUserDate;
    /**
     * Sha1Id of target object
     */
    taggedObjectId: string;
    /**
     * Type of object being tagged - commit, tag, blob...
     */
    taggedObjectType: GitObjectType;
    url: string;
}

export enum GitAsyncOperationStatus {
    Queued = 1,
    InProgress = 2,
    Completed = 3,
    Failed = 4,
    Abandoned = 5,
}

export interface GitAsyncRefOperation {
    _links: any;
    detailedStatus: GitAsyncRefOperationDetail;
    parameters: GitAsyncRefOperationParameters;
    status: GitAsyncOperationStatus;
    url: string;
}

export interface GitAsyncRefOperationDetail {
    conflict: boolean;
    currentCommitId: string;
    progress: number;
}

export interface GitAsyncRefOperationParameters {
    generatedRefName: string;
    ontoRefName: string;
    repository: GitRepository;
    source: GitAsyncRefOperationSource;
}

export interface GitAsyncRefOperationSource {
    commitList: GitCommitRef[];
    pullRequestId: number;
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
    /**
     * Id of the change within the group.  For example, within the iteration
     */
    changeId: number;
    /**
     * New Content template to be used
     */
    newContentTemplate: GitTemplate;
    /**
     * Original path of item if different from current path
     */
    originalPath: string;
}

export interface GitCherryPick extends GitAsyncRefOperation {
    cherryPickId: number;
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
    statuses: GitStatus[];
    url: string;
    workItems: VSSInterfaces.ResourceRef[];
}

export interface GitCommitToCreate {
    baseRef: GitRef;
    comment: string;
    pathActions: GitPathAction[];
}

export interface GitConflict {
    _links: any;
    conflictId: number;
    conflictPath: string;
    conflictType: GitConflictType;
    mergeBaseCommit: GitCommitRef;
    mergeOrigin: GitMergeOriginRef;
    mergeSourceCommit: GitCommitRef;
    mergeTargetCommit: GitCommitRef;
    resolutionError: GitResolutionError;
    resolutionStatus: GitResolutionStatus;
    resolvedBy: VSSInterfaces.IdentityRef;
    resolvedDate: Date;
    url: string;
}

/**
 * Data object for AddAdd conflict
 */
export interface GitConflictAddAdd extends GitConflict {
    resolution: GitResolutionMergeContent;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
}

/**
 * Data object for RenameAdd conflict
 */
export interface GitConflictAddRename extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPathConflict;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
    targetOriginalPath: string;
}

/**
 * Data object for EditDelete conflict
 */
export interface GitConflictDeleteEdit extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    targetBlob: GitBlobRef;
}

/**
 * Data object for RenameDelete conflict
 */
export interface GitConflictDeleteRename extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    targetBlob: GitBlobRef;
    targetNewPath: string;
}

/**
 * Data object for FileDirectory conflict
 */
export interface GitConflictDirectoryFile extends GitConflict {
    resolution: GitResolutionPathConflict;
    sourceTree: GitTreeRef;
    targetBlob: GitBlobRef;
}

/**
 * Data object for DeleteEdit conflict
 */
export interface GitConflictEditDelete extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    sourceBlob: GitBlobRef;
}

/**
 * Data object for EditEdit conflict
 */
export interface GitConflictEditEdit extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionMergeContent;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
}

/**
 * Data object for DirectoryFile conflict
 */
export interface GitConflictFileDirectory extends GitConflict {
    resolution: GitResolutionPathConflict;
    sourceBlob: GitBlobRef;
    targetTree: GitTreeRef;
}

/**
 * Data object for Rename1to2 conflict
 */
export interface GitConflictRename1to2 extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionRename1to2;
    sourceBlob: GitBlobRef;
    sourceNewPath: string;
    targetBlob: GitBlobRef;
    targetNewPath: string;
}

/**
 * Data object for Rename2to1 conflict
 */
export interface GitConflictRename2to1 extends GitConflict {
    resolution: GitResolutionPathConflict;
    sourceNewBlob: GitBlobRef;
    sourceOriginalBlob: GitBlobRef;
    sourceOriginalPath: string;
    targetNewBlob: GitBlobRef;
    targetOriginalBlob: GitBlobRef;
    targetOriginalPath: string;
}

/**
 * Data object for AddRename conflict
 */
export interface GitConflictRenameAdd extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPathConflict;
    sourceBlob: GitBlobRef;
    sourceOriginalPath: string;
    targetBlob: GitBlobRef;
}

/**
 * Data object for DeleteRename conflict
 */
export interface GitConflictRenameDelete extends GitConflict {
    baseBlob: GitBlobRef;
    resolution: GitResolutionPickOneAction;
    sourceBlob: GitBlobRef;
    sourceNewPath: string;
}

/**
 * Data object for RenameRename conflict
 */
export interface GitConflictRenameRename extends GitConflict {
    baseBlob: GitBlobRef;
    originalPath: string;
    resolution: GitResolutionMergeContent;
    sourceBlob: GitBlobRef;
    targetBlob: GitBlobRef;
}

export enum GitConflictType {
    /**
     * No conflict
     */
    None = 0,
    /**
     * Added on source and target; content differs
     */
    AddAdd = 1,
    /**
     * Added on source and rename destination on target
     */
    AddRename = 2,
    /**
     * Deleted on source and edited on target
     */
    DeleteEdit = 3,
    /**
     * Deleted on source and renamed on target
     */
    DeleteRename = 4,
    /**
     * Path is a directory on source and a file on target
     */
    DirectoryFile = 5,
    /**
     * Children of directory which has DirectoryFile or FileDirectory conflict
     */
    DirectoryChild = 6,
    /**
     * Edited on source and deleted on target
     */
    EditDelete = 7,
    /**
     * Edited on source and target; content differs
     */
    EditEdit = 8,
    /**
     * Path is a file on source and a directory on target
     */
    FileDirectory = 9,
    /**
     * Same file renamed on both source and target; destination paths differ
     */
    Rename1to2 = 10,
    /**
     * Different files renamed to same destination path on both source and target
     */
    Rename2to1 = 11,
    /**
     * Rename destination on source and new file on target
     */
    RenameAdd = 12,
    /**
     * Renamed on source and deleted on target
     */
    RenameDelete = 13,
    /**
     * Rename destination on both source and target; content differs
     */
    RenameRename = 14,
}

export interface GitDeletedRepository {
    createdDate: Date;
    deletedBy: VSSInterfaces.IdentityRef;
    deletedDate: Date;
    id: string;
    name: string;
    project: TfsCoreInterfaces.TeamProjectReference;
}

export interface GitFilePathsCollection {
    commitId: string;
    paths: string[];
    url: string;
}

export interface GitImportFailedEvent {
    sourceRepositoryName: string;
    targetRepository: GitRepository;
}

/**
 * Parameter for creating a git import request when source is Git version control
 */
export interface GitImportGitSource {
    /**
     * Tells if this is a sync request or not
     */
    overwrite: boolean;
    /**
     * Url for the source repo
     */
    url: string;
}

export interface GitImportRequest {
    _links: any;
    detailedStatus: GitImportStatusDetail;
    importRequestId: number;
    /**
     * Parameters for creating an import request
     */
    parameters: GitImportRequestParameters;
    repository: GitRepository;
    status: GitAsyncOperationStatus;
    url: string;
}

/**
 * Parameters for creating an import request
 */
export interface GitImportRequestParameters {
    /**
     * Option to delete service endpoint when import is done
     */
    deleteServiceEndpointAfterImportIsDone: boolean;
    /**
     * Source for importing git repository
     */
    gitSource: GitImportGitSource;
    /**
     * Service Endpoint for connection to external endpoint
     */
    serviceEndpointId: string;
    /**
     * Source for importing tfvc repository
     */
    tfvcSource: GitImportTfvcSource;
}

export interface GitImportStatusDetail {
    allSteps: string[];
    currentStep: number;
    errorMessage: string;
}

export interface GitImportSucceededEvent {
    sourceRepositoryName: string;
    targetRepository: GitRepository;
}

/**
 * Parameter for creating a git import request when source is tfvc version control
 */
export interface GitImportTfvcSource {
    /**
     * Set true to import History, false otherwise
     */
    importHistory: boolean;
    /**
     * Get history for last n days (max allowed value is 180 days)
     */
    importHistoryDurationInDays: number;
    /**
     * Path which we want to import (this can be copied from Path Control in Explorer)
     */
    path: string;
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

export interface GitLastChangeItem {
    /**
     * Gets or sets the commit Id this item was modified most recently for the provided version.
     */
    commitId: string;
    /**
     * Gets or sets the path of the item.
     */
    path: string;
}

export interface GitLastChangeTreeItems {
    /**
     * The list of commits referenced by Items, if they were requested.
     */
    commits: GitCommitRef[];
    /**
     * The last change of items.
     */
    items: GitLastChangeItem[];
    /**
     * The last explored time, in case the result is not comprehensive. Null otherwise.
     */
    lastExploredTime: Date;
}

export interface GitMergeOriginRef {
    pullRequestId: number;
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

export interface GitPathToItemsCollection {
    items: { [key: string] : GitItem[]; };
}

export interface GitPullRequest {
    _links: any;
    artifactId: string;
    autoCompleteSetBy: VSSInterfaces.IdentityRef;
    closedBy: VSSInterfaces.IdentityRef;
    closedDate: Date;
    codeReviewId: number;
    commits: GitCommitRef[];
    completionOptions: GitPullRequestCompletionOptions;
    completionQueueTime: Date;
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
    supportsIterations: boolean;
    targetRefName: string;
    title: string;
    url: string;
    workItemRefs: VSSInterfaces.ResourceRef[];
}

export interface GitPullRequestChange extends GitChange {
    /**
     * Id used to track files through multiple changes
     */
    changeTrackingId: number;
}

/**
 * Represents a given user or system Pull Request comment thread
 */
export interface GitPullRequestCommentThread extends CommentThread {
    /**
     * Extended context information unique to pull requests
     */
    pullRequestThreadContext: GitPullRequestCommentThreadContext;
}

export interface GitPullRequestCommentThreadContext {
    /**
     * Used to track a comment across iterations. This value can be found by looking at the iteration's changes list. Must be set for pull requests with iteration support. Otherwise, it's not required for 'legacy' pull requests.
     */
    changeTrackingId: number;
    /**
     * Specify comparing iteration Ids when a comment thread is added while comparing 2 iterations.
     */
    iterationContext: CommentIterationContext;
    /**
     * The criteria used to track this thread. If this property is filled out when the thread is returned, then the thread has been tracked from its original location using the given criteria.
     */
    trackingCriteria: CommentTrackingCriteria;
}

export interface GitPullRequestCompletionOptions {
    bypassPolicy: boolean;
    deleteSourceBranch: boolean;
    mergeCommitMessage: string;
    squashMerge: boolean;
}

export interface GitPullRequestIteration {
    _links: any;
    author: VSSInterfaces.IdentityRef;
    changeList: GitPullRequestChange[];
    commits: GitCommitRef[];
    commonRefCommit: GitCommitRef;
    createdDate: Date;
    description: string;
    hasMoreCommits: boolean;
    id: number;
    push: GitPushRef;
    reason: IterationReason;
    sourceRefCommit: GitCommitRef;
    targetRefCommit: GitCommitRef;
    updatedDate: Date;
}

export interface GitPullRequestIterationChanges {
    changeEntries: GitPullRequestChange[];
    nextSkip: number;
    nextTop: number;
}

/**
 * A pull request query
 */
export interface GitPullRequestQuery {
    /**
     * The query to perform
     */
    queries: GitPullRequestQueryInput[];
    /**
     * The results of the query
     */
    results: { [key: string] : GitPullRequest[]; }[];
}

/**
 * The input required for a pull request query. Currently there is only one query: LastMergeCommit, which returns all pull requests whose LastMergeCommit is in the list of CommitIds.
 */
export interface GitPullRequestQueryInput {
    /**
     * The list commit ids to search for.
     */
    items: string[];
    /**
     * The type of query to perform
     */
    type: GitPullRequestQueryType;
}

export enum GitPullRequestQueryType {
    /**
     * No query type set
     */
    NotSet = 0,
    /**
     * search by merge commit
     */
    LastMergeCommit = 1,
    /**
     * search by commit
     */
    Commit = 2,
}

export interface GitPullRequestReviewFileContentInfo {
    _links: any;
    /**
     * The file change path.
     */
    path: string;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the client by using SHA1 hash function. Ensure that uploaded file has same encoding as in source control.
     */
    sHA1Hash: string;
}

export enum GitPullRequestReviewFileType {
    ChangeEntry = 0,
    Attachment = 1,
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

/**
 * This class contains the metadata of a service/extension posting status. Status can be associated with a pull request or an iteration.
 */
export interface GitPullRequestStatus extends GitStatus {
    iterationId: number;
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

export interface GitQueryBranchStatsCriteria {
    baseCommit: GitVersionDescriptor;
    targetCommits: GitVersionDescriptor[];
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
     * Whether to include linked work items
     */
    includeWorkItems: boolean;
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
    isLocked: boolean;
    isLockedBy: VSSInterfaces.IdentityRef;
    name: string;
    objectId: string;
    peeledObjectId: string;
    statuses: GitStatus[];
    url: string;
}

export interface GitRefFavorite {
    _links: any;
    id: number;
    identityId: string;
    name: string;
    repositoryId: string;
    type: RefFavoriteType;
    url: string;
}

export interface GitRefLockRequest {
    lock: boolean;
    name: string;
}

export interface GitRefUpdate {
    isLocked: boolean;
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
     * Whether the ref is locked or not
     */
    isLocked: boolean;
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
    pushIds: { [key: string] : number; };
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
    project: TfsCoreInterfaces.TeamProjectReference;
    remoteUrl: string;
    url: string;
    validRemoteUrls: string[];
}

export interface GitRepositoryStats {
    activePullRequestsCount: number;
    branchesCount: number;
    commitsCount: number;
    repositoryId: string;
}

export interface GitResolution {
}

export enum GitResolutionError {
    /**
     * No error
     */
    None = 0,
    /**
     * User set a blob id for resolving a content merge, but blob was not found in repo during application
     */
    MergeContentNotFound = 1,
    /**
     * Attempted to resolve a conflict by moving a file to another path, but path was already in use
     */
    PathInUse = 2,
    /**
     * No error
     */
    InvalidPath = 3,
    /**
     * GitResolutionAction was set to an unrecognized value
     */
    UnknownAction = 4,
    /**
     * GitResolutionMergeType was set to an unrecognized value
     */
    UnknownMergeType = 5,
    /**
     * Any error for which a more specific code doesn't apply
     */
    OtherError = 255,
}

export interface GitResolutionMergeContent extends GitResolution {
    mergeType: GitResolutionMergeType;
    userMergedBlob: GitBlobRef;
    userMergedContent: number[];
}

export enum GitResolutionMergeType {
    Undecided = 0,
    TakeSourceContent = 1,
    TakeTargetContent = 2,
    AutoMerged = 3,
    UserMerged = 4,
}

export interface GitResolutionPathConflict extends GitResolution {
    action: GitResolutionPathConflictAction;
    renamePath: string;
}

export enum GitResolutionPathConflictAction {
    Undecided = 0,
    KeepSourceRenameTarget = 1,
    KeepSourceDeleteTarget = 2,
    KeepTargetRenameSource = 3,
    KeepTargetDeleteSource = 4,
}

export interface GitResolutionPickOneAction extends GitResolution {
    action: GitResolutionWhichAction;
}

export interface GitResolutionRename1to2 extends GitResolutionMergeContent {
    action: GitResolutionRename1to2Action;
}

export enum GitResolutionRename1to2Action {
    Undecided = 0,
    KeepSourcePath = 1,
    KeepTargetPath = 2,
    KeepBothFiles = 3,
}

export enum GitResolutionStatus {
    Unresolved = 0,
    PartiallyResolved = 1,
    Resolved = 2,
}

export enum GitResolutionWhichAction {
    Undecided = 0,
    PickSourceAction = 1,
    PickTargetAction = 2,
}

export interface GitRevert extends GitAsyncRefOperation {
    revertId: number;
}

export interface GitStatus {
    _links: any;
    context: GitStatusContext;
    createdBy: VSSInterfaces.IdentityRef;
    creationDate: Date;
    description: string;
    state: GitStatusState;
    targetUrl: string;
    updatedDate: Date;
}

export interface GitStatusContext {
    genre: string;
    name: string;
}

export enum GitStatusState {
    NotSet = 0,
    Pending = 1,
    Succeeded = 2,
    Failed = 3,
    Error = 4,
}

export interface GitSuggestion {
    properties: { [key: string] : any; };
    type: string;
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

export interface GitTemplate {
    /**
     * Name of the Template
     */
    name: string;
    /**
     * Type of the Template
     */
    type: string;
}

export interface GitTreeDiff {
    /**
     * ObjectId of the base tree of this diff.
     */
    baseTreeId: string;
    /**
     * List of tree entries that differ between the base and target tree.  Renames and object type changes are returned as a delete for the old object and add for the new object.  If a continuation token is returned in the response header, some tree entries are yet to be processed and may yeild more diff entries. If the continuation token is not returned all the diff entries have been included in this response.
     */
    diffEntries: GitTreeDiffEntry[];
    /**
     * ObjectId of the target tree of this diff.
     */
    targetTreeId: string;
    /**
     * REST Url to this resource.
     */
    url: string;
}

export interface GitTreeDiffEntry {
    /**
     * SHA1 hash of the object in the base tree, if it exists. Will be null in case of adds.
     */
    baseObjectId: string;
    /**
     * Type of change that affected this entry.
     */
    changeType: VersionControlChangeType;
    /**
     * Object type of the tree entry. Blob, Tree or Commit("submodule")
     */
    objectType: GitObjectType;
    /**
     * Relative path in base and target trees.
     */
    path: string;
    /**
     * SHA1 hash of the object in the target tree, if it exists. Will be null in case of deletes.
     */
    targetObjectId: string;
}

export interface GitTreeDiffResponse {
    /**
     * The HTTP client methods find the continuation token header in the response and populate this field.
     */
    continuationToken: string[];
    treeDiff: GitTreeDiff;
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
     * Version string identifier (name of tag/branch, SHA1 of commit)
     */
    version: string;
    /**
     * Version options - Specify additional modifiers to version (e.g Previous)
     */
    versionOptions: GitVersionOptions;
    /**
     * Version type (branch, tag, or commit). Determines how Id is interpreted
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

export interface IdentityRefWithVote extends VSSInterfaces.IdentityRef {
    isRequired: boolean;
    reviewerUrl: string;
    vote: number;
    votedFor: IdentityRefWithVote[];
}

export interface ImportRepositoryValidation {
    gitSource: GitImportGitSource;
    password: string;
    tfvcSource: GitImportTfvcSource;
    username: string;
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

export enum IterationReason {
    Push = 0,
    ForcePush = 1,
    Create = 2,
    Rebase = 4,
    Unknown = 8,
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

/**
 * Initial config contract sent to extensions creating tabs on the pull request page
 */
export interface PullRequestTabExtensionConfig {
    pullRequestId: number;
    repositoryId: string;
}

export enum RefFavoriteType {
    Invalid = 0,
    Folder = 1,
    Ref = 2,
}

/**
 * Context used while sharing a pull request.
 */
export interface ShareNotificationContext {
    /**
     * Optional user note or message.
     */
    message: string;
    /**
     * Identities of users who will receive a share notification.
     */
    receivers: VSSInterfaces.IdentityRef[];
}

/**
 * Represents a Supported IDE entity.
 */
export interface SupportedIde {
    /**
     * The download URL for the IDE.
     */
    downloadUrl: string;
    /**
     * The type of the IDE.
     */
    ideType: SupportedIdeType;
    /**
     * The name of the IDE.
     */
    name: string;
    /**
     * The URL to open the protocol handler for the IDE.
     */
    protocolHandlerUrl: string;
    /**
     * A list of SupportedPlatforms.
     */
    supportedPlatforms: string[];
}

export enum SupportedIdeType {
    Unknown = 0,
    AndroidStudio = 1,
    AppCode = 2,
    CLion = 3,
    DataGrip = 4,
    Eclipse = 13,
    IntelliJ = 5,
    MPS = 6,
    PhpStorm = 7,
    PyCharm = 8,
    RubyMine = 9,
    Tower = 10,
    VisualStudio = 11,
    WebStorm = 12,
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
    itemPath: string;
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
    project: TfsCoreInterfaces.TeamProjectReference;
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
    /**
     * MD5 hash as a base 64 string, applies to files only.
     */
    hashValue: string;
    isBranch: boolean;
    isPendingChange: boolean;
    /**
     * The size of the file, if applicable.
     */
    size: number;
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

/**
 * This is the deep shelveset class
 */
export interface TfvcShelveset extends TfvcShelvesetRef {
    changes: TfvcChange[];
    notes: CheckinNote[];
    policyOverride: TfvcPolicyOverrideInfo;
    workItems: AssociatedWorkItem[];
}

/**
 * This is the shallow shelveset class
 */
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
     * Whether to include policyOverride and notes Only applies when requesting a single deep shelveset
     */
    includeDetails: boolean;
    /**
     * Whether to include the _links field on the shallow references. Does not apply when requesting a single deep shelveset object. Links will always be included in the deep shelveset.
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
    defaultSourceControlType: TfsCoreInterfaces.SourceControlTypes;
    project: TfsCoreInterfaces.TeamProjectReference;
    supportsGit: boolean;
    supportsTFVC: boolean;
}

export enum VersionControlRecursionType {
    /**
     * Only return the specified item.
     */
    None = 0,
    /**
     * Return the specified item and its direct children.
     */
    OneLevel = 1,
    /**
     * Return the specified item and its direct children, as well as recursive chains of nested child folders that only contain a single folder.
     */
    OneLevelPlusNestedEmptyFolders = 4,
    /**
     * Return specified item and all descendants
     */
    Full = 120,
}

export var TypeInfo = {
    AssociatedWorkItem: {
        fields: <any>null
    },
    AsyncGitOperationNotification: {
        fields: <any>null
    },
    AsyncRefOperationCommitLevelEventNotification: {
        fields: <any>null
    },
    AsyncRefOperationCompletedNotification: {
        fields: <any>null
    },
    AsyncRefOperationConflictNotification: {
        fields: <any>null
    },
    AsyncRefOperationGeneralFailureNotification: {
        fields: <any>null
    },
    AsyncRefOperationProgressNotification: {
        fields: <any>null
    },
    Attachment: {
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
    Comment: {
        fields: <any>null
    },
    CommentIterationContext: {
        fields: <any>null
    },
    CommentPosition: {
        fields: <any>null
    },
    CommentThread: {
        fields: <any>null
    },
    CommentThreadContext: {
        fields: <any>null
    },
    CommentThreadStatus: {
        enumValues: {
            "unknown": 0,
            "active": 1,
            "fixed": 2,
            "wontFix": 3,
            "closed": 4,
            "byDesign": 5,
            "pending": 6,
        }
    },
    CommentTrackingCriteria: {
        fields: <any>null
    },
    CommentType: {
        enumValues: {
            "unknown": 0,
            "text": 1,
            "codeChange": 2,
            "system": 3,
        }
    },
    FileContentMetadata: {
        fields: <any>null
    },
    GitAnnotatedTag: {
        fields: <any>null
    },
    GitAsyncOperationStatus: {
        enumValues: {
            "queued": 1,
            "inProgress": 2,
            "completed": 3,
            "failed": 4,
            "abandoned": 5,
        }
    },
    GitAsyncRefOperation: {
        fields: <any>null
    },
    GitAsyncRefOperationDetail: {
        fields: <any>null
    },
    GitAsyncRefOperationParameters: {
        fields: <any>null
    },
    GitAsyncRefOperationSource: {
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
    GitCherryPick: {
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
    GitConflict: {
        fields: <any>null
    },
    GitConflictAddAdd: {
        fields: <any>null
    },
    GitConflictAddRename: {
        fields: <any>null
    },
    GitConflictDeleteEdit: {
        fields: <any>null
    },
    GitConflictDeleteRename: {
        fields: <any>null
    },
    GitConflictDirectoryFile: {
        fields: <any>null
    },
    GitConflictEditDelete: {
        fields: <any>null
    },
    GitConflictEditEdit: {
        fields: <any>null
    },
    GitConflictFileDirectory: {
        fields: <any>null
    },
    GitConflictRename1to2: {
        fields: <any>null
    },
    GitConflictRename2to1: {
        fields: <any>null
    },
    GitConflictRenameAdd: {
        fields: <any>null
    },
    GitConflictRenameDelete: {
        fields: <any>null
    },
    GitConflictRenameRename: {
        fields: <any>null
    },
    GitConflictType: {
        enumValues: {
            "none": 0,
            "addAdd": 1,
            "addRename": 2,
            "deleteEdit": 3,
            "deleteRename": 4,
            "directoryFile": 5,
            "directoryChild": 6,
            "editDelete": 7,
            "editEdit": 8,
            "fileDirectory": 9,
            "rename1to2": 10,
            "rename2to1": 11,
            "renameAdd": 12,
            "renameDelete": 13,
            "renameRename": 14,
        }
    },
    GitDeletedRepository: {
        fields: <any>null
    },
    GitFilePathsCollection: {
        fields: <any>null
    },
    GitImportFailedEvent: {
        fields: <any>null
    },
    GitImportGitSource: {
        fields: <any>null
    },
    GitImportRequest: {
        fields: <any>null
    },
    GitImportRequestParameters: {
        fields: <any>null
    },
    GitImportStatusDetail: {
        fields: <any>null
    },
    GitImportSucceededEvent: {
        fields: <any>null
    },
    GitImportTfvcSource: {
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
    GitLastChangeItem: {
        fields: <any>null
    },
    GitLastChangeTreeItems: {
        fields: <any>null
    },
    GitMergeOriginRef: {
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
    GitPathToItemsCollection: {
        fields: <any>null
    },
    GitPullRequest: {
        fields: <any>null
    },
    GitPullRequestChange: {
        fields: <any>null
    },
    GitPullRequestCommentThread: {
        fields: <any>null
    },
    GitPullRequestCommentThreadContext: {
        fields: <any>null
    },
    GitPullRequestCompletionOptions: {
        fields: <any>null
    },
    GitPullRequestIteration: {
        fields: <any>null
    },
    GitPullRequestIterationChanges: {
        fields: <any>null
    },
    GitPullRequestQuery: {
        fields: <any>null
    },
    GitPullRequestQueryInput: {
        fields: <any>null
    },
    GitPullRequestQueryType: {
        enumValues: {
            "notSet": 0,
            "lastMergeCommit": 1,
            "commit": 2,
        }
    },
    GitPullRequestReviewFileContentInfo: {
        fields: <any>null
    },
    GitPullRequestReviewFileType: {
        enumValues: {
            "changeEntry": 0,
            "attachment": 1,
        }
    },
    GitPullRequestSearchCriteria: {
        fields: <any>null
    },
    GitPullRequestStatus: {
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
    GitQueryBranchStatsCriteria: {
        fields: <any>null
    },
    GitQueryCommitsCriteria: {
        fields: <any>null
    },
    GitRef: {
        fields: <any>null
    },
    GitRefFavorite: {
        fields: <any>null
    },
    GitRefLockRequest: {
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
    GitRepositoryStats: {
        fields: <any>null
    },
    GitResolution: {
        fields: <any>null
    },
    GitResolutionError: {
        enumValues: {
            "none": 0,
            "mergeContentNotFound": 1,
            "pathInUse": 2,
            "invalidPath": 3,
            "unknownAction": 4,
            "unknownMergeType": 5,
            "otherError": 255,
        }
    },
    GitResolutionMergeContent: {
        fields: <any>null
    },
    GitResolutionMergeType: {
        enumValues: {
            "undecided": 0,
            "takeSourceContent": 1,
            "takeTargetContent": 2,
            "autoMerged": 3,
            "userMerged": 4,
        }
    },
    GitResolutionPathConflict: {
        fields: <any>null
    },
    GitResolutionPathConflictAction: {
        enumValues: {
            "undecided": 0,
            "keepSourceRenameTarget": 1,
            "keepSourceDeleteTarget": 2,
            "keepTargetRenameSource": 3,
            "keepTargetDeleteSource": 4,
        }
    },
    GitResolutionPickOneAction: {
        fields: <any>null
    },
    GitResolutionRename1to2: {
        fields: <any>null
    },
    GitResolutionRename1to2Action: {
        enumValues: {
            "undecided": 0,
            "keepSourcePath": 1,
            "keepTargetPath": 2,
            "keepBothFiles": 3,
        }
    },
    GitResolutionStatus: {
        enumValues: {
            "unresolved": 0,
            "partiallyResolved": 1,
            "resolved": 2,
        }
    },
    GitResolutionWhichAction: {
        enumValues: {
            "undecided": 0,
            "pickSourceAction": 1,
            "pickTargetAction": 2,
        }
    },
    GitRevert: {
        fields: <any>null
    },
    GitStatus: {
        fields: <any>null
    },
    GitStatusContext: {
        fields: <any>null
    },
    GitStatusState: {
        enumValues: {
            "notSet": 0,
            "pending": 1,
            "succeeded": 2,
            "failed": 3,
            "error": 4,
        }
    },
    GitSuggestion: {
        fields: <any>null
    },
    GitTargetVersionDescriptor: {
        fields: <any>null
    },
    GitTemplate: {
        fields: <any>null
    },
    GitTreeDiff: {
        fields: <any>null
    },
    GitTreeDiffEntry: {
        fields: <any>null
    },
    GitTreeDiffResponse: {
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
        }
    },
    HistoryEntry: {
        fields: <any>null
    },
    IdentityRefWithVote: {
        fields: <any>null
    },
    ImportRepositoryValidation: {
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
    IterationReason: {
        enumValues: {
            "push": 0,
            "forcePush": 1,
            "create": 2,
            "rebase": 4,
            "unknown": 8,
        }
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
    PullRequestTabExtensionConfig: {
        fields: <any>null
    },
    RefFavoriteType: {
        enumValues: {
            "invalid": 0,
            "folder": 1,
            "ref": 2,
        }
    },
    ShareNotificationContext: {
        fields: <any>null
    },
    SupportedIde: {
        fields: <any>null
    },
    SupportedIdeType: {
        enumValues: {
            "unknown": 0,
            "androidStudio": 1,
            "appCode": 2,
            "cLion": 3,
            "dataGrip": 4,
            "eclipse": 13,
            "intelliJ": 5,
            "mPS": 6,
            "phpStorm": 7,
            "pyCharm": 8,
            "rubyMine": 9,
            "tower": 10,
            "visualStudio": 11,
            "webStorm": 12,
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
            "oneLevelPlusNestedEmptyFolders": 4,
            "full": 120,
        }
    },
};

TypeInfo.AssociatedWorkItem.fields = {
};

TypeInfo.AsyncGitOperationNotification.fields = {
};

TypeInfo.AsyncRefOperationCommitLevelEventNotification.fields = {
};

TypeInfo.AsyncRefOperationCompletedNotification.fields = {
};

TypeInfo.AsyncRefOperationConflictNotification.fields = {
};

TypeInfo.AsyncRefOperationGeneralFailureNotification.fields = {
};

TypeInfo.AsyncRefOperationProgressNotification.fields = {
};

TypeInfo.Attachment.fields = {
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdDate: {
        isDate: true,
    },
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
    changeCounts: {
    },
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

TypeInfo.Comment.fields = {
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    commentType: {
        enumType: TypeInfo.CommentType
    },
    lastUpdatedDate: {
        isDate: true,
    },
    publishedDate: {
        isDate: true,
    },
    usersLiked: {
        isArray: true,
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.CommentIterationContext.fields = {
};

TypeInfo.CommentPosition.fields = {
};

TypeInfo.CommentThread.fields = {
    comments: {
        isArray: true,
        typeInfo: TypeInfo.Comment
    },
    lastUpdatedDate: {
        isDate: true,
    },
    publishedDate: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.CommentThreadStatus
    },
    threadContext: {
        typeInfo: TypeInfo.CommentThreadContext
    },
};

TypeInfo.CommentThreadContext.fields = {
    leftFileEnd: {
        typeInfo: TypeInfo.CommentPosition
    },
    leftFileStart: {
        typeInfo: TypeInfo.CommentPosition
    },
    rightFileEnd: {
        typeInfo: TypeInfo.CommentPosition
    },
    rightFileStart: {
        typeInfo: TypeInfo.CommentPosition
    },
};

TypeInfo.CommentTrackingCriteria.fields = {
};

TypeInfo.FileContentMetadata.fields = {
};

TypeInfo.GitAnnotatedTag.fields = {
    taggedBy: {
        typeInfo: TypeInfo.GitUserDate
    },
    taggedObjectType: {
        enumType: TypeInfo.GitObjectType
    },
};

TypeInfo.GitAsyncRefOperation.fields = {
    detailedStatus: {
        typeInfo: TypeInfo.GitAsyncRefOperationDetail
    },
    parameters: {
        typeInfo: TypeInfo.GitAsyncRefOperationParameters
    },
    status: {
        enumType: TypeInfo.GitAsyncOperationStatus
    },
};

TypeInfo.GitAsyncRefOperationDetail.fields = {
};

TypeInfo.GitAsyncRefOperationParameters.fields = {
    repository: {
        typeInfo: TypeInfo.GitRepository
    },
    source: {
        typeInfo: TypeInfo.GitAsyncRefOperationSource
    },
};

TypeInfo.GitAsyncRefOperationSource.fields = {
    commitList: {
        isArray: true,
        typeInfo: TypeInfo.GitCommitRef
    },
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
    newContentTemplate: {
        typeInfo: TypeInfo.GitTemplate
    },
};

TypeInfo.GitCherryPick.fields = {
    detailedStatus: {
        typeInfo: TypeInfo.GitAsyncRefOperationDetail
    },
    parameters: {
        typeInfo: TypeInfo.GitAsyncRefOperationParameters
    },
    status: {
        enumType: TypeInfo.GitAsyncOperationStatus
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
    statuses: {
        isArray: true,
        typeInfo: TypeInfo.GitStatus
    },
    workItems: {
        isArray: true,
        typeInfo: VSSInterfaces.TypeInfo.ResourceRef
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
    changeCounts: {
    },
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
    statuses: {
        isArray: true,
        typeInfo: TypeInfo.GitStatus
    },
    workItems: {
        isArray: true,
        typeInfo: VSSInterfaces.TypeInfo.ResourceRef
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

TypeInfo.GitConflict.fields = {
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
};

TypeInfo.GitConflictAddAdd.fields = {
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionMergeContent
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    targetBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictAddRename.fields = {
    baseBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionPathConflict
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    targetBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictDeleteEdit.fields = {
    baseBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionPickOneAction
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    targetBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictDeleteRename.fields = {
    baseBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionPickOneAction
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    targetBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictDirectoryFile.fields = {
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionPathConflict
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceTree: {
        typeInfo: TypeInfo.GitTreeRef
    },
    targetBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictEditDelete.fields = {
    baseBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionPickOneAction
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictEditEdit.fields = {
    baseBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionMergeContent
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    targetBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictFileDirectory.fields = {
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionPathConflict
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    targetTree: {
        typeInfo: TypeInfo.GitTreeRef
    },
};

TypeInfo.GitConflictRename1to2.fields = {
    baseBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionRename1to2
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    targetBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictRename2to1.fields = {
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionPathConflict
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceNewBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    sourceOriginalBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    targetNewBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    targetOriginalBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictRenameAdd.fields = {
    baseBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionPathConflict
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    targetBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictRenameDelete.fields = {
    baseBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionPickOneAction
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitConflictRenameRename.fields = {
    baseBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    conflictType: {
        enumType: TypeInfo.GitConflictType
    },
    mergeBaseCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeOrigin: {
        typeInfo: TypeInfo.GitMergeOriginRef
    },
    mergeSourceCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    mergeTargetCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    resolution: {
        typeInfo: TypeInfo.GitResolutionMergeContent
    },
    resolutionError: {
        enumType: TypeInfo.GitResolutionError
    },
    resolutionStatus: {
        enumType: TypeInfo.GitResolutionStatus
    },
    resolvedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    resolvedDate: {
        isDate: true,
    },
    sourceBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
    targetBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitDeletedRepository.fields = {
    createdDate: {
        isDate: true,
    },
    deletedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    deletedDate: {
        isDate: true,
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
};

TypeInfo.GitFilePathsCollection.fields = {
};

TypeInfo.GitImportFailedEvent.fields = {
    targetRepository: {
        typeInfo: TypeInfo.GitRepository
    },
};

TypeInfo.GitImportGitSource.fields = {
};

TypeInfo.GitImportRequest.fields = {
    detailedStatus: {
        typeInfo: TypeInfo.GitImportStatusDetail
    },
    parameters: {
        typeInfo: TypeInfo.GitImportRequestParameters
    },
    repository: {
        typeInfo: TypeInfo.GitRepository
    },
    status: {
        enumType: TypeInfo.GitAsyncOperationStatus
    },
};

TypeInfo.GitImportRequestParameters.fields = {
    gitSource: {
        typeInfo: TypeInfo.GitImportGitSource
    },
    tfvcSource: {
        typeInfo: TypeInfo.GitImportTfvcSource
    },
};

TypeInfo.GitImportStatusDetail.fields = {
};

TypeInfo.GitImportSucceededEvent.fields = {
    targetRepository: {
        typeInfo: TypeInfo.GitRepository
    },
};

TypeInfo.GitImportTfvcSource.fields = {
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

TypeInfo.GitLastChangeItem.fields = {
};

TypeInfo.GitLastChangeTreeItems.fields = {
    commits: {
        isArray: true,
        typeInfo: TypeInfo.GitCommitRef
    },
    items: {
        isArray: true,
        typeInfo: TypeInfo.GitLastChangeItem
    },
    lastExploredTime: {
        isDate: true,
    },
};

TypeInfo.GitMergeOriginRef.fields = {
};

TypeInfo.GitPathAction.fields = {
    action: {
        enumType: TypeInfo.GitPathActions
    },
};

TypeInfo.GitPathToItemsCollection.fields = {
    items: {
    },
};

TypeInfo.GitPullRequest.fields = {
    autoCompleteSetBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    closedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
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
    completionQueueTime: {
        isDate: true,
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
    workItemRefs: {
        isArray: true,
        typeInfo: VSSInterfaces.TypeInfo.ResourceRef
    },
};

TypeInfo.GitPullRequestChange.fields = {
    changeType: {
        enumType: TypeInfo.VersionControlChangeType
    },
    item: {
        typeInfo: TypeInfo.GitItem
    },
    newContent: {
        typeInfo: TypeInfo.ItemContent
    },
    newContentTemplate: {
        typeInfo: TypeInfo.GitTemplate
    },
};

TypeInfo.GitPullRequestCommentThread.fields = {
    comments: {
        isArray: true,
        typeInfo: TypeInfo.Comment
    },
    lastUpdatedDate: {
        isDate: true,
    },
    publishedDate: {
        isDate: true,
    },
    pullRequestThreadContext: {
        typeInfo: TypeInfo.GitPullRequestCommentThreadContext
    },
    status: {
        enumType: TypeInfo.CommentThreadStatus
    },
    threadContext: {
        typeInfo: TypeInfo.CommentThreadContext
    },
};

TypeInfo.GitPullRequestCommentThreadContext.fields = {
    iterationContext: {
        typeInfo: TypeInfo.CommentIterationContext
    },
    trackingCriteria: {
        typeInfo: TypeInfo.CommentTrackingCriteria
    },
};

TypeInfo.GitPullRequestCompletionOptions.fields = {
};

TypeInfo.GitPullRequestIteration.fields = {
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    changeList: {
        isArray: true,
        typeInfo: TypeInfo.GitPullRequestChange
    },
    commits: {
        isArray: true,
        typeInfo: TypeInfo.GitCommitRef
    },
    commonRefCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    createdDate: {
        isDate: true,
    },
    push: {
        typeInfo: TypeInfo.GitPushRef
    },
    reason: {
        enumType: TypeInfo.IterationReason
    },
    sourceRefCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    targetRefCommit: {
        typeInfo: TypeInfo.GitCommitRef
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.GitPullRequestIterationChanges.fields = {
    changeEntries: {
        isArray: true,
        typeInfo: TypeInfo.GitPullRequestChange
    },
};

TypeInfo.GitPullRequestQuery.fields = {
    queries: {
        isArray: true,
        typeInfo: TypeInfo.GitPullRequestQueryInput
    },
};

TypeInfo.GitPullRequestQueryInput.fields = {
    type: {
        enumType: TypeInfo.GitPullRequestQueryType
    },
};

TypeInfo.GitPullRequestReviewFileContentInfo.fields = {
};

TypeInfo.GitPullRequestSearchCriteria.fields = {
    status: {
        enumType: TypeInfo.PullRequestStatus
    },
};

TypeInfo.GitPullRequestStatus.fields = {
    context: {
        typeInfo: TypeInfo.GitStatusContext
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    creationDate: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.GitStatusState
    },
    updatedDate: {
        isDate: true,
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

TypeInfo.GitQueryBranchStatsCriteria.fields = {
    baseCommit: {
        typeInfo: TypeInfo.GitVersionDescriptor
    },
    targetCommits: {
        isArray: true,
        typeInfo: TypeInfo.GitVersionDescriptor
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
    statuses: {
        isArray: true,
        typeInfo: TypeInfo.GitStatus
    },
};

TypeInfo.GitRefFavorite.fields = {
    type: {
        enumType: TypeInfo.RefFavoriteType
    },
};

TypeInfo.GitRefLockRequest.fields = {
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
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
};

TypeInfo.GitRepositoryStats.fields = {
};

TypeInfo.GitResolution.fields = {
};

TypeInfo.GitResolutionMergeContent.fields = {
    mergeType: {
        enumType: TypeInfo.GitResolutionMergeType
    },
    userMergedBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitResolutionPathConflict.fields = {
    action: {
        enumType: TypeInfo.GitResolutionPathConflictAction
    },
};

TypeInfo.GitResolutionPickOneAction.fields = {
    action: {
        enumType: TypeInfo.GitResolutionWhichAction
    },
};

TypeInfo.GitResolutionRename1to2.fields = {
    action: {
        enumType: TypeInfo.GitResolutionRename1to2Action
    },
    mergeType: {
        enumType: TypeInfo.GitResolutionMergeType
    },
    userMergedBlob: {
        typeInfo: TypeInfo.GitBlobRef
    },
};

TypeInfo.GitRevert.fields = {
    detailedStatus: {
        typeInfo: TypeInfo.GitAsyncRefOperationDetail
    },
    parameters: {
        typeInfo: TypeInfo.GitAsyncRefOperationParameters
    },
    status: {
        enumType: TypeInfo.GitAsyncOperationStatus
    },
};

TypeInfo.GitStatus.fields = {
    context: {
        typeInfo: TypeInfo.GitStatusContext
    },
    createdBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    creationDate: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.GitStatusState
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.GitStatusContext.fields = {
};

TypeInfo.GitSuggestion.fields = {
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

TypeInfo.GitTemplate.fields = {
};

TypeInfo.GitTreeDiff.fields = {
    diffEntries: {
        isArray: true,
        typeInfo: TypeInfo.GitTreeDiffEntry
    },
};

TypeInfo.GitTreeDiffEntry.fields = {
    changeType: {
        enumType: TypeInfo.VersionControlChangeType
    },
    objectType: {
        enumType: TypeInfo.GitObjectType
    },
};

TypeInfo.GitTreeDiffResponse.fields = {
    treeDiff: {
        typeInfo: TypeInfo.GitTreeDiff
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

TypeInfo.IdentityRefWithVote.fields = {
    votedFor: {
        isArray: true,
        typeInfo: TypeInfo.IdentityRefWithVote
    },
};

TypeInfo.ImportRepositoryValidation.fields = {
    gitSource: {
        typeInfo: TypeInfo.GitImportGitSource
    },
    tfvcSource: {
        typeInfo: TypeInfo.GitImportTfvcSource
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

TypeInfo.PullRequestTabExtensionConfig.fields = {
};

TypeInfo.ShareNotificationContext.fields = {
    receivers: {
        isArray: true,
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.SupportedIde.fields = {
    ideType: {
        enumType: TypeInfo.SupportedIdeType
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
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
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
    defaultSourceControlType: {
        enumType: TfsCoreInterfaces.TypeInfo.SourceControlTypes
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
};
