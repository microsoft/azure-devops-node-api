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


/**
 * This class contains the metadata of service/extension getting stats on artifacts for the given user. Summary statistics data about artifacts will be returned in this format.
 */
export interface ArtifactStats {
    artifactId: string;
    commentsCount: { [key: number] : number; };
    discussionArtifactId: string;
    lastUpdatedDate: Date;
    newCommentsCount: { [key: number] : number; };
    user: VSSInterfaces.IdentityRef;
}

/**
 * This class contains the metadata of a service/extension getting/putting user visit times.
 */
export interface ArtifactVisit {
    artifactId: string;
    /**
     * The last date the user visited this artifact.
     */
    lastVisitedDate: Date;
    /**
     * The previous last date the user visited this artifact, before updating.
     */
    previousLastVisitedDate: Date;
    user: VSSInterfaces.IdentityRef;
}

export enum CommentThreadType {
    All = 0,
    System = 1,
    Text = 2,
    ReviewLevel = 3,
    Code = 4,
    Iteration = 5,
    Vote = 6,
}

export var TypeInfo = {
    ArtifactStats: {
        fields: <any>null
    },
    ArtifactVisit: {
        fields: <any>null
    },
    CommentThreadType: {
        enumValues: {
            "all": 0,
            "system": 1,
            "text": 2,
            "reviewLevel": 3,
            "code": 4,
            "iteration": 5,
            "vote": 6,
        }
    },
};

TypeInfo.ArtifactStats.fields = {
    commentsCount: {
    },
    lastUpdatedDate: {
        isDate: true,
    },
    newCommentsCount: {
    },
    user: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.ArtifactVisit.fields = {
    lastVisitedDate: {
        isDate: true,
    },
    previousLastVisitedDate: {
        isDate: true,
    },
    user: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};
