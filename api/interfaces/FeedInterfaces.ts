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

import IdentitiesInterfaces = require("../interfaces/IdentitiesInterfaces");


export enum ChangeType {
    AddOrUpdate = 1,
    Delete = 2,
}

export interface Feed {
    _links: any;
    /**
     * If set, the feed will allow upload of packages that exist on the upstream
     */
    allowUpstreamNameConflict: boolean;
    deletedDate: Date;
    description: string;
    fullyQualifiedName: string;
    /**
     * If set, feed will hide all deleted/unpublished versions
     */
    hideDeletedPackageVersions: boolean;
    id: string;
    isReadOnly: boolean;
    name: string;
    permissions: FeedPermission[];
    /**
     * If set, the feed can proxy packages from an upstream feed
     */
    upstreamEnabled: boolean;
    /**
     * If set, time that the UpstreamEnabled property was changed. Will be null if UpstreamEnabled was never changed after Feed creation.
     */
    upstreamEnabledChangedDate: Date;
    url: string;
    view: FeedView;
}

export interface FeedChange {
    changeType: ChangeType;
    feed: Feed;
    feedContinuationToken: number;
    latestPackageContinuationToken: number;
}

export interface FeedChangesResponse {
    _links: any;
    count: number;
    feedChanges: FeedChange[];
    nextFeedContinuationToken: number;
}

export interface FeedPermission {
    identityDescriptor: IdentitiesInterfaces.IdentityDescriptor;
    identityId: string;
    role: FeedRole;
}

export enum FeedRole {
    Custom = 0,
    None = 1,
    Reader = 2,
    Contributor = 3,
    Administrator = 4,
}

export interface FeedView {
    _links: any;
    id: string;
    name: string;
    type: FeedViewType;
    url: string;
}

export enum FeedViewType {
    None = 0,
    Release = 1,
}

export interface GlobalPermission {
    identityDescriptor: IdentitiesInterfaces.IdentityDescriptor;
    role: GlobalRole;
}

export enum GlobalRole {
    Custom = 0,
    None = 1,
    FeedCreator = 2,
}

export interface MinimalPackageVersion {
    id: string;
    isCachedVersion: boolean;
    isDeleted: boolean;
    isLatest: boolean;
    isListed: boolean;
    /**
     * The normalized version representing the identity of a package version
     */
    normalizedVersion: string;
    packageDescription: string;
    publishDate: Date;
    storageId: string;
    /**
     * The display version of the package version
     */
    version: string;
    views: FeedView[];
}

export interface Package {
    _links: any;
    id: string;
    isCached: boolean;
    /**
     * The display name of the package
     */
    name: string;
    /**
     * The normalized name representing the identity of this package for this protocol type
     */
    normalizedName: string;
    protocolType: string;
    starCount: number;
    url: string;
    versions: MinimalPackageVersion[];
}

export interface PackageChange {
    package: Package;
    packageVersionChange: PackageVersionChange;
}

export interface PackageChangesResponse {
    _links: any;
    count: number;
    nextPackageContinuationToken: number;
    packageChanges: PackageChange[];
}

export interface PackageDependency {
    group: string;
    packageName: string;
    versionRange: string;
}

export interface PackageFile {
    children: PackageFile[];
    name: string;
    protocolMetadata: ProtocolMetadata;
}

export interface PackageVersion extends MinimalPackageVersion {
    _links: any;
    author: string;
    deletedDate: Date;
    dependencies: PackageDependency[];
    description: string;
    files: PackageFile[];
    otherVersions: MinimalPackageVersion[];
    protocolMetadata: ProtocolMetadata;
    summary: string;
    tags: string[];
    url: string;
}

export interface PackageVersionChange {
    changeType: ChangeType;
    continuationToken: number;
    packageVersion: PackageVersion;
}

export interface ProtocolMetadata {
    data: any;
    schemaVersion: number;
}

export var TypeInfo = {
    ChangeType: {
        enumValues: {
            "addOrUpdate": 1,
            "delete": 2
        }
    },
    Feed: <any>{
    },
    FeedChange: <any>{
    },
    FeedChangesResponse: <any>{
    },
    FeedPermission: <any>{
    },
    FeedRole: {
        enumValues: {
            "custom": 0,
            "none": 1,
            "reader": 2,
            "contributor": 3,
            "administrator": 4
        }
    },
    FeedView: <any>{
    },
    FeedViewType: {
        enumValues: {
            "none": 0,
            "release": 1
        }
    },
    GlobalPermission: <any>{
    },
    GlobalRole: {
        enumValues: {
            "custom": 0,
            "none": 1,
            "feedCreator": 2
        }
    },
    MinimalPackageVersion: <any>{
    },
    Package: <any>{
    },
    PackageChange: <any>{
    },
    PackageChangesResponse: <any>{
    },
    PackageVersion: <any>{
    },
    PackageVersionChange: <any>{
    },
};

TypeInfo.Feed.fields = {
    deletedDate: {
        isDate: true,
    },
    permissions: {
        isArray: true,
        typeInfo: TypeInfo.FeedPermission
    },
    upstreamEnabledChangedDate: {
        isDate: true,
    },
    view: {
        typeInfo: TypeInfo.FeedView
    }
};

TypeInfo.FeedChange.fields = {
    changeType: {
        enumType: TypeInfo.ChangeType
    },
    feed: {
        typeInfo: TypeInfo.Feed
    }
};

TypeInfo.FeedChangesResponse.fields = {
    feedChanges: {
        isArray: true,
        typeInfo: TypeInfo.FeedChange
    }
};

TypeInfo.FeedPermission.fields = {
    role: {
        enumType: TypeInfo.FeedRole
    }
};

TypeInfo.FeedView.fields = {
    type: {
        enumType: TypeInfo.FeedViewType
    }
};

TypeInfo.GlobalPermission.fields = {
    role: {
        enumType: TypeInfo.GlobalRole
    }
};

TypeInfo.MinimalPackageVersion.fields = {
    publishDate: {
        isDate: true,
    },
    views: {
        isArray: true,
        typeInfo: TypeInfo.FeedView
    }
};

TypeInfo.Package.fields = {
    versions: {
        isArray: true,
        typeInfo: TypeInfo.MinimalPackageVersion
    }
};

TypeInfo.PackageChange.fields = {
    package: {
        typeInfo: TypeInfo.Package
    },
    packageVersionChange: {
        typeInfo: TypeInfo.PackageVersionChange
    }
};

TypeInfo.PackageChangesResponse.fields = {
    packageChanges: {
        isArray: true,
        typeInfo: TypeInfo.PackageChange
    }
};

TypeInfo.PackageVersion.fields = {
    deletedDate: {
        isDate: true,
    },
    otherVersions: {
        isArray: true,
        typeInfo: TypeInfo.MinimalPackageVersion
    },
    publishDate: {
        isDate: true,
    },
    views: {
        isArray: true,
        typeInfo: TypeInfo.FeedView
    }
};

TypeInfo.PackageVersionChange.fields = {
    changeType: {
        enumType: TypeInfo.ChangeType
    },
    packageVersion: {
        typeInfo: TypeInfo.PackageVersion
    }
};
