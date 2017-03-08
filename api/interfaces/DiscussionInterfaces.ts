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

import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export enum CommentType {
    Unknown = 0,
    Text = 1,
    CodeChange = 2,
    System = 3,
}

export interface DiscussionComment {
    _links: any;
    author: VSSInterfaces.IdentityRef;
    canDelete: boolean;
    commentType: CommentType;
    content: string;
    /**
     * CommentId in a thread always starting from 1.
     */
    id: number;
    isDeleted: boolean;
    lastUpdatedDate: Date;
    /**
     * Used for comment replies. It must be a commentId of a comment in comment list of a thread.
     */
    parentId: number;
    publishedDate: Date;
    threadId: number;
    usersLiked: VSSInterfaces.IdentityRef[];
}

export interface DiscussionCommentCollection {
}

export enum DiscussionStatus {
    Unknown = 0,
    Active = 1,
    Fixed = 2,
    WontFix = 3,
    Closed = 4,
    ByDesign = 5,
    Pending = 6,
}

export interface DiscussionThread {
    _links: any;
    artifactUri: string;
    comments: DiscussionComment[];
    commentsCount: number;
    id: number;
    /**
     * A discussion is considered as deleted when all its comments are deleted. If thread has comments property set to null or Comments.Length is zero then return false. This property returns false by default because for all REST API calls comments property is not set.
     */
    isDeleted: boolean;
    lastUpdatedDate: Date;
    properties: any;
    publishedDate: Date;
    status: DiscussionStatus;
    workItemId: number;
}

export interface DiscussionThreadCollection {
}

export var TypeInfo = {
    CommentType: {
        enumValues: {
            "unknown": 0,
            "text": 1,
            "codeChange": 2,
            "system": 3,
        }
    },
    DiscussionComment: {
        fields: <any>null
    },
    DiscussionCommentCollection: {
        fields: <any>null
    },
    DiscussionStatus: {
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
    DiscussionThread: {
        fields: <any>null
    },
    DiscussionThreadCollection: {
        fields: <any>null
    },
};

TypeInfo.DiscussionComment.fields = {
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

TypeInfo.DiscussionCommentCollection.fields = {
};

TypeInfo.DiscussionThread.fields = {
    comments: {
        isArray: true,
        typeInfo: TypeInfo.DiscussionComment
    },
    lastUpdatedDate: {
        isDate: true,
    },
    publishedDate: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.DiscussionStatus
    },
};

TypeInfo.DiscussionThreadCollection.fields = {
};
