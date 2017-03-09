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

import DiscussionInterfaces = require("../interfaces/DiscussionInterfaces");
import IdentitiesInterfaces = require("../interfaces/IdentitiesInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


/**
 * This class contains the metadata of a file attached to a code review.
 */
export interface Attachment {
    _links: any;
    author: VSSInterfaces.IdentityRef;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the client by using SHA1 hash function.
     */
    contentHash: string;
    createdDate: Date;
    /**
     * The description of the attachment, can be null.
     */
    description: string;
    /**
     * The display name of the attachment, can't be null or empty.
     */
    displayName: string;
    id: number;
    properties: any;
}

export interface ChangeEntry {
    base: ChangeEntryFileInfo;
    /**
     * Uniquely tracks each change in an iteration. Automatically generated in server.
     */
    changeId: number;
    changeTrackingId: number;
    /**
     * Change types as provided by source control. It contains change types that aren't supported by Type field.
     */
    extendedChangeType: string;
    iterationId: number;
    modified: ChangeEntryFileInfo;
    /**
     * Specify simplified change types that can be used by client to drive client logic.
     */
    type: ChangeType;
}

export interface ChangeEntryFileInfo extends ReviewFileContentInfo {
}

export enum ChangeEntryFileType {
    Base = 0,
    Modified = 1,
}

export enum ChangeType {
    None = 0,
    Add = 1,
    Edit = 2,
    Rename = 8,
    Move = 16,
    Delete = 32,
}

export interface CommentThread extends DiscussionInterfaces.DiscussionThread {
    /**
     * Specify thread context such as position in left/right file.
     */
    threadContext: CommentThreadContext;
}

export interface CommentThreadContext {
    /**
     * Used to track a comment across iterations.
     */
    changeTrackingId: number;
    /**
     * File path relative to the root of the repository. It's up to the client to use any path format.
     */
    filePath: string;
    /**
     * Specify comparing iteration Ids when a comment thread is added while comparing 2 iterations.
     */
    iterationContext: IterationContext;
    /**
     * Position of last character of the comment in left file.
     */
    leftFileEnd: Position;
    /**
     * Position of first character of the comment in left file.
     */
    leftFileStart: Position;
    /**
     * Position of last character of the comment in right file.
     */
    rightFileEnd: Position;
    /**
     * Position of first character of the comment in right file.
     */
    rightFileStart: Position;
    /**
     * The criteria used to track this thread. If this property is filled out when the thread is returned, then the thread has been tracked from its original location using the given criteria.
     */
    trackingCriteria: CommentTrackingCriteria;
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

export interface DownloadContentsCriteria {
    /**
     * If provided, specifies the exact content hashes of the files to fetch. Cannot be combined with other parameters such as IterationIds.
     */
    contentHashes: string[];
    /**
     * If provided, specifies the file type to fetch. Applicable only for content hashes.
     */
    fileType: ReviewFileType;
    /**
     * If provided, filter iteration files by fetching only base files or modified files. Applicable only for iterations.
     */
    filterBy: ChangeEntryFileType;
    /**
     * If provided, specifies the iteration ids of the files to fetch. Cannot be combined with Content hashes.
     */
    iterationIds: number[];
}

export interface Iteration {
    _links: any;
    author: VSSInterfaces.IdentityRef;
    changeList: ChangeEntry[];
    createdDate: Date;
    description: string;
    id: number;
    isUnpublished: boolean;
    properties: any;
    reviewId: number;
    statuses: Status[];
    updatedDate: Date;
}

export interface IterationChanges {
    changeEntries: ChangeEntry[];
    nextSkip: string[];
    nextTop: string[];
}

/**
 * Iteration context is used to specify comparing iteration Ids when a comment thread is added while comparing 2 iterations.
 */
export interface IterationContext {
    /**
     * First comparing iteration Id. Minimum value is 1.
     */
    firstComparingIteration: number;
    /**
     * Second comparing iteration Id. Minimum value is 1.
     */
    secondComparingIteration: number;
}

export enum MetaState {
    NotSet = 0,
    Pending = 1,
    Succeeded = 2,
    Failed = 3,
}

/**
 * Context used while sharing a review.
 */
export interface NotificationContext {
    /**
     * Optional user note or message.
     */
    message: string;
    /**
     * Identities of users who will receive a share notification.
     */
    receivers: VSSInterfaces.IdentityRef[];
    /**
     * Append text to subject of share notification. Ex: Email subject. When missing, server will set to a default.
     */
    subject: string;
}

export interface Position {
    /**
     * Position line starting with one.
     */
    line: number;
    /**
     * Position offset starting with zero.
     */
    offset: number;
}

export interface Review {
    _links: any;
    attachments: Attachment[];
    author: VSSInterfaces.IdentityRef;
    completedDate: Date;
    createdDate: Date;
    description: string;
    id: number;
    isDeleted: boolean;
    iterations: Iteration[];
    projectId: string;
    properties: any;
    reviewers: Reviewer[];
    sourceArtifactId: string;
    status: ReviewStatus;
    statuses: Status[];
    title: string;
    updatedDate: Date;
}

export interface Reviewer {
    createdDate: Date;
    identity: VSSInterfaces.IdentityRef;
    /**
     * Id of a valid published iteration. Latest iteration where the reviewer had voted. When a reviewer votes, client provided iterationId must be a published iterationId. When null, latest published iterationId is used.
     */
    iterationId: number;
    /**
     * Specifies reviewer kind. Its set to "optional" if not set for a new reviewer.
     */
    kind: ReviewerKind;
    modifiedDate: Date;
    /**
     * Specifies reviewer vote. By default, its set to "No response" if not set for a new reviewer. If a reviewer has voted on multiple iterations then it provides vote of latest iteration.
     */
    reviewerStateId: number;
    votedFor: string[];
    /**
     * Specifies the groups (if any) for which this reviewer has voted. It will have length > 0 only if the reviewer is a member of other groups and have voted. Voted means having reviewer state other than the initial "NotStarted" state.
     */
    votedForGroups: Reviewer[];
}

export enum ReviewerKind {
    /**
     * Specifies that a reviewer was added by an author but reviewer approval isn't mandatory for review approval.
     */
    Optional = 0,
    /**
     * Specifies that a reviewer was added by an author. Reviewer must vote to conclude that a review is signed-off/approved. For example, a review needs to be approved in order to merge a pull request.
     */
    Required = 1,
}

export interface ReviewFileContentInfo {
    _links: any;
    /**
     * A generic way to store metadata about a particular change entry content. This information is later used by the IReviewContentProvider to decide how to retrieve the content.
     */
    flags: number;
    path: string;
    reviewId: number;
    /**
     * Content hash of on-disk representation of file content. Its calculated by the client by using SHA1 hash function. Ensure that uploaded file has same encoding as in source control.
     */
    sHA1Hash: string;
}

export interface ReviewFilesZipContent {
    nextSkip: string[];
    nextTop: string[];
    zipStream: any;
}

export enum ReviewFileType {
    ChangeEntry = 0,
    Attachment = 1,
}

export interface ReviewSearchCriteria {
    creatorIdentity: IdentitiesInterfaces.IdentityDescriptor;
    includeDeleted: boolean;
    maxCreatedDate: Date;
    maxUpdatedDate: Date;
    minCreatedDate: Date;
    minUpdatedDate: Date;
    orderAscending: boolean;
    reviewerIdentity: IdentitiesInterfaces.IdentityDescriptor;
    sourceArtifactPrefix: string;
    status: ReviewStatus;
}

/**
 * This class contains the code review settings of a team project.
 */
export interface ReviewSettings {
    _links: any;
    /**
     * The settings shared between all the source control connections.
     */
    globalSettings: any;
    /**
     * The settings that are not shared by all the source control connections.
     */
    settings: { [key: string] : any; };
}

export enum ReviewStatus {
    Active = 0,
    Completed = 1,
    Abandoned = 2,
    Creating = 3,
}

/**
 * This class contains the metadata of a service/extension posting status. Status can be associated with a code review or a review iteration.
 */
export interface Status {
    _links: any;
    context: StatusContext;
    createdDate: Date;
    /**
     * The description of the status, can be null.
     */
    description: string;
    id: number;
    iterationId: number;
    state: MetaState;
    /**
     * The url associated with the status, can be null.
     */
    targetUrl: string;
    updatedDate: Date;
}

/**
 * This class contains the metadata of a service/extension posting status context.
 */
export interface StatusContext {
    /**
     * The genre of the status, can be null.
     */
    genre: string;
    /**
     * The name of the status, can't be null or empty.
     */
    name: string;
}

export var TypeInfo = {
    Attachment: {
        fields: <any>null
    },
    ChangeEntry: {
        fields: <any>null
    },
    ChangeEntryFileInfo: {
        fields: <any>null
    },
    ChangeEntryFileType: {
        enumValues: {
            "base": 0,
            "modified": 1,
        }
    },
    ChangeType: {
        enumValues: {
            "none": 0,
            "add": 1,
            "edit": 2,
            "rename": 8,
            "move": 16,
            "delete": 32,
        }
    },
    CommentThread: {
        fields: <any>null
    },
    CommentThreadContext: {
        fields: <any>null
    },
    CommentTrackingCriteria: {
        fields: <any>null
    },
    DownloadContentsCriteria: {
        fields: <any>null
    },
    Iteration: {
        fields: <any>null
    },
    IterationChanges: {
        fields: <any>null
    },
    IterationContext: {
        fields: <any>null
    },
    MetaState: {
        enumValues: {
            "notSet": 0,
            "pending": 1,
            "succeeded": 2,
            "failed": 3,
        }
    },
    NotificationContext: {
        fields: <any>null
    },
    Position: {
        fields: <any>null
    },
    Review: {
        fields: <any>null
    },
    Reviewer: {
        fields: <any>null
    },
    ReviewerKind: {
        enumValues: {
            "optional": 0,
            "required": 1,
        }
    },
    ReviewFileContentInfo: {
        fields: <any>null
    },
    ReviewFilesZipContent: {
        fields: <any>null
    },
    ReviewFileType: {
        enumValues: {
            "changeEntry": 0,
            "attachment": 1,
        }
    },
    ReviewSearchCriteria: {
        fields: <any>null
    },
    ReviewSettings: {
        fields: <any>null
    },
    ReviewStatus: {
        enumValues: {
            "active": 0,
            "completed": 1,
            "abandoned": 2,
            "creating": 3,
        }
    },
    Status: {
        fields: <any>null
    },
    StatusContext: {
        fields: <any>null
    },
};

TypeInfo.Attachment.fields = {
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    createdDate: {
        isDate: true,
    },
};

TypeInfo.ChangeEntry.fields = {
    base: {
        typeInfo: TypeInfo.ChangeEntryFileInfo
    },
    modified: {
        typeInfo: TypeInfo.ChangeEntryFileInfo
    },
    type: {
        enumType: TypeInfo.ChangeType
    },
};

TypeInfo.ChangeEntryFileInfo.fields = {
};

TypeInfo.CommentThread.fields = {
    comments: {
        isArray: true,
        typeInfo: DiscussionInterfaces.TypeInfo.DiscussionComment
    },
    lastUpdatedDate: {
        isDate: true,
    },
    publishedDate: {
        isDate: true,
    },
    status: {
        enumType: DiscussionInterfaces.TypeInfo.DiscussionStatus
    },
    threadContext: {
        typeInfo: TypeInfo.CommentThreadContext
    },
};

TypeInfo.CommentThreadContext.fields = {
    iterationContext: {
        typeInfo: TypeInfo.IterationContext
    },
    leftFileEnd: {
        typeInfo: TypeInfo.Position
    },
    leftFileStart: {
        typeInfo: TypeInfo.Position
    },
    rightFileEnd: {
        typeInfo: TypeInfo.Position
    },
    rightFileStart: {
        typeInfo: TypeInfo.Position
    },
    trackingCriteria: {
        typeInfo: TypeInfo.CommentTrackingCriteria
    },
};

TypeInfo.CommentTrackingCriteria.fields = {
};

TypeInfo.DownloadContentsCriteria.fields = {
    fileType: {
        enumType: TypeInfo.ReviewFileType
    },
    filterBy: {
        enumType: TypeInfo.ChangeEntryFileType
    },
};

TypeInfo.Iteration.fields = {
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    changeList: {
        isArray: true,
        typeInfo: TypeInfo.ChangeEntry
    },
    createdDate: {
        isDate: true,
    },
    statuses: {
        isArray: true,
        typeInfo: TypeInfo.Status
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.IterationChanges.fields = {
    changeEntries: {
        isArray: true,
        typeInfo: TypeInfo.ChangeEntry
    },
};

TypeInfo.IterationContext.fields = {
};

TypeInfo.NotificationContext.fields = {
    receivers: {
        isArray: true,
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.Position.fields = {
};

TypeInfo.Review.fields = {
    attachments: {
        isArray: true,
        typeInfo: TypeInfo.Attachment
    },
    author: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    completedDate: {
        isDate: true,
    },
    createdDate: {
        isDate: true,
    },
    iterations: {
        isArray: true,
        typeInfo: TypeInfo.Iteration
    },
    reviewers: {
        isArray: true,
        typeInfo: TypeInfo.Reviewer
    },
    status: {
        enumType: TypeInfo.ReviewStatus
    },
    statuses: {
        isArray: true,
        typeInfo: TypeInfo.Status
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.Reviewer.fields = {
    createdDate: {
        isDate: true,
    },
    identity: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    kind: {
        enumType: TypeInfo.ReviewerKind
    },
    modifiedDate: {
        isDate: true,
    },
    votedForGroups: {
        isArray: true,
        typeInfo: TypeInfo.Reviewer
    },
};

TypeInfo.ReviewFileContentInfo.fields = {
};

TypeInfo.ReviewFilesZipContent.fields = {
};

TypeInfo.ReviewSearchCriteria.fields = {
    creatorIdentity: {
        typeInfo: IdentitiesInterfaces.TypeInfo.IdentityDescriptor
    },
    maxCreatedDate: {
        isDate: true,
    },
    maxUpdatedDate: {
        isDate: true,
    },
    minCreatedDate: {
        isDate: true,
    },
    minUpdatedDate: {
        isDate: true,
    },
    reviewerIdentity: {
        typeInfo: IdentitiesInterfaces.TypeInfo.IdentityDescriptor
    },
    status: {
        enumType: TypeInfo.ReviewStatus
    },
};

TypeInfo.ReviewSettings.fields = {
};

TypeInfo.Status.fields = {
    context: {
        typeInfo: TypeInfo.StatusContext
    },
    createdDate: {
        isDate: true,
    },
    state: {
        enumType: TypeInfo.MetaState
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.StatusContext.fields = {
};
