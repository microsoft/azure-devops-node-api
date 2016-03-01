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
 * Container class for changed identities
 */
export interface ChangedIdentities {
    /**
     * Changed Identities
     */
    identities: Identity[];
    /**
     * Last Identity SequenceId
     */
    sequenceContext: ChangedIdentitiesContext;
}

/**
 * Context class for changed identities
 */
export interface ChangedIdentitiesContext {
    /**
     * Last Group SequenceId
     */
    groupSequenceId: number;
    /**
     * Last Identity SequenceId
     */
    identitySequenceId: number;
}

export interface CreateGroupsInfo {
    groups: Identity[];
    scopeId: string;
}

export interface CreateScopeInfo {
    adminGroupDescription: string;
    adminGroupName: string;
    creatorId: string;
    parentScopeId: string;
    scopeName: string;
    scopeType: GroupScopeType;
}

export interface FrameworkIdentityInfo {
    displayName: string;
    identifier: string;
    identityType: FrameworkIdentityType;
    role: string;
}

export enum FrameworkIdentityType {
    None = 0,
    ServiceIdentity = 1,
    AggregateIdentity = 2,
    ImportedIdentity = 3,
}

export interface GroupMembership {
    active: boolean;
    descriptor: IdentityDescriptor;
    id: string;
    queriedId: string;
}

export enum GroupScopeType {
    Generic = 0,
    ServiceHost = 1,
    TeamProject = 2,
}

export interface Identity {
    /**
     * The custom display name for the identity (if any). Setting this property to an empty string will clear the existing custom display name. Setting this property to null will not affect the existing persisted value (since null values do not get sent over the wire or to the database)
     */
    customDisplayName: string;
    descriptor: IdentityDescriptor;
    id: string;
    isActive: boolean;
    isContainer: boolean;
    masterId: string;
    memberIds: string[];
    memberOf: IdentityDescriptor[];
    members: IdentityDescriptor[];
    metaTypeId: number;
    properties: any;
    /**
     * The display name for the identity as specified by the source identity provider.
     */
    providerDisplayName: string;
    resourceVersion: number;
    uniqueUserId: number;
}

export interface IdentityBatchInfo {
    descriptors: IdentityDescriptor[];
    identityIds: string[];
    includeRestrictedVisibility: boolean;
    propertyNames: string[];
    queryMembership: QueryMembership;
}

/**
 * An Identity descriptor is a wrapper for the identity type (Windows SID, Passport) along with a unique identifier such as the SID or PUID.
 */
export interface IdentityDescriptor {
    /**
     * The unique identifier for this identity, not exceeding 256 chars, which will be persisted.
     */
    identifier: string;
    /**
     * Type of descriptor (for example, Windows, Passport, etc.).
     */
    identityType: string;
}

export enum IdentityMetaType {
    Member = 0,
    Guest = 1,
    Unknown = 255,
}

export interface IdentityScope {
    administrators: IdentityDescriptor;
    id: string;
    isActive: boolean;
    isGlobal: boolean;
    localScopeId: string;
    name: string;
    parentId: string;
    scopeType: GroupScopeType;
    securingHostId: string;
}

export enum IdentitySearchFilter {
    /**
     * NT account name (domain\alias)
     */
    AccountName = 0,
    /**
     * Display name
     */
    DisplayName = 1,
    /**
     * Find project admin group
     */
    AdministratorsGroup = 2,
    /**
     * Find the identity using the identifier
     */
    Identifier = 3,
    /**
     * Email address
     */
    MailAddress = 4,
    /**
     * A general search for an identity.
     */
    General = 5,
    /**
     * Alternate login username
     */
    Alias = 6,
    /**
     * Find identity using Domain/TenantId
     */
    Domain = 7,
}

export interface IdentitySelf {
    accountName: string;
    displayName: string;
    id: string;
    tenants: TenantInfo[];
}

export interface IdentitySnapshot {
    groups: Identity[];
    identityIds: string[];
    memberships: GroupMembership[];
    scopeId: string;
    scopes: IdentityScope[];
}

export enum IdentityTypeId {
    WindowsIdentity = 3,
    TeamFoundationIdentity = 4,
    ClaimsIdentity = 5,
    BindPendingIdentity = 6,
    UnauthenticatedIdentity = 7,
    ServiceIdentity = 8,
    AggregateIdentity = 9,
    ImportedIdentity = 10,
    ServerTestIdentity = 100,
}

export interface IdentityUpdateData {
    id: string;
    index: number;
    updated: boolean;
}

export interface JsonPatchOperationData<T> {
    op: string;
    path: string;
    value: T;
}

export interface MruIdentitiesUpdateData extends JsonPatchOperationData<string[]> {
}

export enum QueryMembership {
    /**
     * Query will not return any membership data
     */
    None = 0,
    /**
     * Query will return only direct membership data
     */
    Direct = 1,
    /**
     * Query will return expanded membership data
     */
    Expanded = 2,
    /**
     * Query will return expanded up membership data (parents only)
     */
    ExpandedUp = 3,
    /**
     * Query will return expanded down membership data (children only)
     */
    ExpandedDown = 4,
}

export enum ReadIdentitiesOptions {
    None = 0,
    FilterIllegalMemberships = 1,
}

export interface ReadOnlyIdentityDescriptor extends IdentityDescriptor {
    identifier: string;
    identityType: string;
}

export enum SpecialGroupType {
    Generic = 0,
    AdministrativeApplicationGroup = 1,
    ServiceApplicationGroup = 2,
    EveryoneApplicationGroup = 3,
    LicenseesApplicationGroup = 4,
    AzureActiveDirectoryApplicationGroup = 5,
}

export interface TenantInfo {
    homeTenant: boolean;
    tenantId: string;
    tenantName: string;
}

export var TypeInfo = {
    ChangedIdentities: {
        fields: <any>null
    },
    ChangedIdentitiesContext: {
        fields: <any>null
    },
    CreateGroupsInfo: {
        fields: <any>null
    },
    CreateScopeInfo: {
        fields: <any>null
    },
    FrameworkIdentityInfo: {
        fields: <any>null
    },
    FrameworkIdentityType: {
        enumValues: {
            "none": 0,
            "serviceIdentity": 1,
            "aggregateIdentity": 2,
            "importedIdentity": 3,
        }
    },
    GroupMembership: {
        fields: <any>null
    },
    GroupScopeType: {
        enumValues: {
            "generic": 0,
            "serviceHost": 1,
            "teamProject": 2,
        }
    },
    Identity: {
        fields: <any>null
    },
    IdentityBatchInfo: {
        fields: <any>null
    },
    IdentityDescriptor: {
        fields: <any>null
    },
    IdentityMetaType: {
        enumValues: {
            "member": 0,
            "guest": 1,
            "unknown": 255,
        }
    },
    IdentityScope: {
        fields: <any>null
    },
    IdentitySearchFilter: {
        enumValues: {
            "accountName": 0,
            "displayName": 1,
            "administratorsGroup": 2,
            "identifier": 3,
            "mailAddress": 4,
            "general": 5,
            "alias": 6,
            "domain": 7,
        }
    },
    IdentitySelf: {
        fields: <any>null
    },
    IdentitySnapshot: {
        fields: <any>null
    },
    IdentityTypeId: {
        enumValues: {
            "windowsIdentity": 3,
            "teamFoundationIdentity": 4,
            "claimsIdentity": 5,
            "bindPendingIdentity": 6,
            "unauthenticatedIdentity": 7,
            "serviceIdentity": 8,
            "aggregateIdentity": 9,
            "importedIdentity": 10,
            "serverTestIdentity": 100,
        }
    },
    IdentityUpdateData: {
        fields: <any>null
    },
    JsonPatchOperationData: {
        fields: <any>null
    },
    MruIdentitiesUpdateData: {
        fields: <any>null
    },
    QueryMembership: {
        enumValues: {
            "none": 0,
            "direct": 1,
            "expanded": 2,
            "expandedUp": 3,
            "expandedDown": 4,
        }
    },
    ReadIdentitiesOptions: {
        enumValues: {
            "none": 0,
            "filterIllegalMemberships": 1,
        }
    },
    ReadOnlyIdentityDescriptor: {
        fields: <any>null
    },
    SpecialGroupType: {
        enumValues: {
            "generic": 0,
            "administrativeApplicationGroup": 1,
            "serviceApplicationGroup": 2,
            "everyoneApplicationGroup": 3,
            "licenseesApplicationGroup": 4,
            "azureActiveDirectoryApplicationGroup": 5,
        }
    },
    TenantInfo: {
        fields: <any>null
    },
};

TypeInfo.ChangedIdentities.fields = {
    identities: {
        isArray: true,
        typeInfo: TypeInfo.Identity
    },
    sequenceContext: {
        typeInfo: TypeInfo.ChangedIdentitiesContext
    },
};

TypeInfo.ChangedIdentitiesContext.fields = {
};

TypeInfo.CreateGroupsInfo.fields = {
    groups: {
        isArray: true,
        typeInfo: TypeInfo.Identity
    },
};

TypeInfo.CreateScopeInfo.fields = {
    scopeType: {
        enumType: TypeInfo.GroupScopeType
    },
};

TypeInfo.FrameworkIdentityInfo.fields = {
    identityType: {
        enumType: TypeInfo.FrameworkIdentityType
    },
};

TypeInfo.GroupMembership.fields = {
    descriptor: {
        typeInfo: TypeInfo.IdentityDescriptor
    },
};

TypeInfo.Identity.fields = {
    descriptor: {
        typeInfo: TypeInfo.IdentityDescriptor
    },
    memberOf: {
        isArray: true,
        typeInfo: TypeInfo.IdentityDescriptor
    },
    members: {
        isArray: true,
        typeInfo: TypeInfo.IdentityDescriptor
    },
};

TypeInfo.IdentityBatchInfo.fields = {
    descriptors: {
        isArray: true,
        typeInfo: TypeInfo.IdentityDescriptor
    },
    queryMembership: {
        enumType: TypeInfo.QueryMembership
    },
};

TypeInfo.IdentityDescriptor.fields = {
};

TypeInfo.IdentityScope.fields = {
    administrators: {
        typeInfo: TypeInfo.IdentityDescriptor
    },
    scopeType: {
        enumType: TypeInfo.GroupScopeType
    },
};

TypeInfo.IdentitySelf.fields = {
    tenants: {
        isArray: true,
        typeInfo: TypeInfo.TenantInfo
    },
};

TypeInfo.IdentitySnapshot.fields = {
    groups: {
        isArray: true,
        typeInfo: TypeInfo.Identity
    },
    memberships: {
        isArray: true,
        typeInfo: TypeInfo.GroupMembership
    },
    scopes: {
        isArray: true,
        typeInfo: TypeInfo.IdentityScope
    },
};

TypeInfo.IdentityUpdateData.fields = {
};

TypeInfo.JsonPatchOperationData.fields = {
};

TypeInfo.MruIdentitiesUpdateData.fields = {
};

TypeInfo.ReadOnlyIdentityDescriptor.fields = {
};

TypeInfo.TenantInfo.fields = {
};
