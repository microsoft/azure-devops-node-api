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

export interface Change<T> {
    changeType: VersionControlChangeType;
    item: T;
    newContent: ItemContent;
    sourceServerItem: string;
    url: string;
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

export interface ItemContent {
    content: string;
    contentType: ItemContentType;
}

export enum ItemContentType {
    RawText = 0,
    Base64Encoded = 1,
}

export interface ItemModel {
    _links: any;
    contentMetadata: FileContentMetadata;
    isFolder: boolean;
    isSymLink: boolean;
    path: string;
    url: string;
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
    Change: {
        fields: <any>null
    },
    CheckinNote: {
        fields: <any>null
    },
    FileContentMetadata: {
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
    ItemModel: {
        fields: <any>null
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

TypeInfo.Change.fields = {
    changeType: {
        enumType: TypeInfo.VersionControlChangeType
    },
    newContent: {
        typeInfo: TypeInfo.ItemContent
    },
};

TypeInfo.CheckinNote.fields = {
};

TypeInfo.FileContentMetadata.fields = {
};

TypeInfo.ItemContent.fields = {
    contentType: {
        enumType: TypeInfo.ItemContentType
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

TypeInfo.VersionControlProjectInfo.fields = {
    defaultSourceControlType: {
        enumType: TfsCoreInterfaces.TypeInfo.SourceControlTypes
    },
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProjectReference
    },
};
