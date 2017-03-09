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


export enum GraphDisabledFilter {
    Unknown = 0,
    IncludeOnlyEnabled = 1,
    IncludeOnlyDisabled = 2,
    IncludeBoth = 3,
}

export interface GraphGroup extends GraphMember {
    /**
     * A short phrase to help human readers disambiguate groups with similar names
     */
    description: string;
}

/**
 * Do not attempt to use this type to create a new group. This type does not contain sufficient fields to create a new group.
 */
export interface GraphGroupCreationContext {
    /**
     * Optional: If provided, we will use this identifier for the Id of the created group
     */
    id: string;
}

/**
 * Use this type to create a new group that is a reference to an existing group from an external AD or AAD backed provider. This is the subset of GraphGroup fields required for creation of a group for the AAD and AD use case.
 */
export interface GraphGroupMailAddressCreationContext extends GraphGroupCreationContext {
    /**
     * This should be the mail address or the group in the source AD or AAD provider. Vsts will comunicate with the source provider to fill all other fields on creation.
     */
    mailAddress: string;
}

/**
 * Use this type to create a new group that is a reference to an existing group from an external AD or AAD backed provider. This is the subset of GraphGroup fields required for creation of a group for the AD and AAD use case.
 */
export interface GraphGroupOriginIdCreationContext extends GraphGroupCreationContext {
    /**
     * This should be the object id or sid of the group from the source AD or AAD provider. Vsts will comunicate with the source provider to fill all other fields on creation.
     */
    originId: string;
}

/**
 * Use this type to create a new Vsts group that is not backed by an external provider.
 */
export interface GraphGroupVstsCreationContext extends GraphGroupCreationContext {
    /**
     * For internal use only in back compat scenarios.
     */
    crossProject: boolean;
    /**
     * Used by VSTS groups; if set this will be the group description, otherwise ignored
     */
    description: string;
    descriptor: string;
    /**
     * Used by VSTS groups; if set this will be the group DisplayName, otherwise ignored
     */
    displayName: string;
    /**
     * For internal use only in back compat scenarios.
     */
    restrictedVisibility: boolean;
    /**
     * For internal use only in back compat scenarios.
     */
    specialGroupType: string;
}

export interface GraphMember extends GraphSubject {
    /**
     * This represents the name of the container of origin for a graph member. (For MSA this is "Windows Live ID", for AD the name of the domain, for AAD the name of the directory, for Vsts groups the ScopeId, etc)
     */
    domain: string;
    /**
     * The email address of record for a given graph member. This may be different than the principal name.
     */
    mailAddress: string;
    /**
     * Used only for internal back-compat scenarios.
     */
    metaTypeId: number;
}

export interface GraphMembership {
    containerDescriptor: string;
    memberDescriptor: string;
}

export interface GraphScope extends GraphSubject {
    /**
     * The subject descriptor that references the administrators group for this scope. Only members of this group can change the contents of this scope or assign other users permissions to access this scope.
     */
    administratorDescriptor: string;
    /**
     * When true, this scope is also a securing host for one or more scopes.
     */
    isGlobal: boolean;
    /**
     * The subject descriptor for the closest account or organization in the ancestor tree of this scope.
     */
    parentDescriptor: string;
    /**
     * The type of this scope. Typically ServiceHost or TeamProject.
     */
    scopeType: IdentitiesInterfaces.GroupScopeType;
    /**
     * The subject descriptor for the containing organization in the ancestor tree of this scope.
     */
    securingHostDescriptor: string;
}

/**
 * This type is the subset of fields that can be provided by the user to create a Vsts scope. Scope creation is currently limited to internal back-compat scenarios. End users that attempt to create a scope with this API will fail.
 */
export interface GraphScopeCreationContext {
    /**
     * Set this field to override the default decription of this scope's admin group.
     */
    adminGroupDescription: string;
    /**
     * All scopes have an Adminstrator Group that controls access to the contents of the scope. Set this field to use a non-default group name for that administrators group.
     */
    adminGroupName: string;
    /**
     * Set this optional field if this scope is created on behalf of a user other than the user making the request. This should be the Id of the user that is not the requestor.
     */
    creatorId: string;
    /**
     * An optional ID that uniquely represents the scope within it's parent scope. If this parameter is not provided, Vsts will generate on automatically.
     */
    id: string;
    /**
     * The scope must be provided with a unique name within the parent scope. This means the created scope can have a parent or child with the same name, but no siblings with the same name.
     */
    name: string;
    /**
     * The type of scope being created.
     */
    scopeType: IdentitiesInterfaces.GroupScopeType;
}

export interface GraphSubject {
    /**
     * This field contains zero or more iteresting links about the the graph subject. These links may be invoked to obtain additional relationships or more detailed information about this graph subject.
     */
    _links: any;
    /**
     * The descriptor is the primary way to reference the graph subject while the system is running. This field will uniquely identify the same graph subject across both Accounts and Organizations.
     */
    descriptor: string;
    /**
     * If this value is true, the graph subject is not active within the current Vsts scope. This graph subject can be used reliably for presenting historical data but may not be valid for other operations.
     */
    disabled: boolean;
    /**
     * This is the non-unique display name of the graph subject. To change this field, you must alter its value in the source provider.
     */
    displayName: string;
    /**
     * The unique identifier within the subject's scope. This identifier will not change for the lifetime of the subject. If you must perisist a reference to a graph subject within your system, only persist this field. All other fields can change over time.
     */
    id: string;
    /**
     * The type of source provider for the origin identifier (ex:AD, AAD, MSA)
     */
    origin: string;
    /**
     * The unique identifier from the system of origin. Typically a sid, object id or Guid. Linking and unlinking operations can cause this value to change for a user because the user is not backed by a different provider and has a different unique id in the new provider.
     */
    originId: string;
    /**
     * This is the PrincipalName of this graph subject from the source provider. The source provider may change this field over time and it is not guaranteed to be immutable for the life of the graph subject by Vsts.
     */
    principalName: string;
    /**
     * This field identifies the type of the graph subject (ex: Group, Scope, User).
     */
    subjectKind: string;
    /**
     * This url is the full route to the source resource of this graph subject.
     */
    url: string;
}

export interface GraphSubjectLookup {
    lookupKeys: GraphSubjectLookupKey[];
}

export interface GraphSubjectLookupKey {
    descriptor: SubjectDescriptor;
}

export enum GraphTraversalDirection {
    Unknown = 0,
    Down = 1,
    Up = 2,
}

export interface GraphUser extends GraphMember {
}

/**
 * Do not attempt to use this type to create a new user. Use one of the subclasses instead. This type does not contain sufficient fields to create a new user.
 */
export interface GraphUserCreationContext {
    /**
     * Optional: If provided, we will use this identifier for the Id of the created user
     */
    id: string;
}

/**
 * Use this type to create a new user reference to an existing user from an external AD or AAD backed provider. This is the subset of GraphUser fields required for creation of a GraphUser for the AD and AAD use case when looking up the user by its mail address in the backing provider.
 */
export interface GraphUserMailAddressCreationContext extends GraphUserCreationContext {
    mailAddress: string;
}

/**
 * Use this type to create a new user reference to an existing user from an external AD or AAD backed provider. This is the subset of GraphUser fields required for creation of a GraphUser for the AD and AAD use case when looking up the user by its unique ID in the backing provider.
 */
export interface GraphUserOriginIdCreationContext extends GraphUserCreationContext {
    originId: string;
}

/**
 * Use this type to create a new user reference to an existing user from an external AD or AAD backed provider. This is the subset of GraphUser fields required for creation of a GraphUser for the AD and AAD use case when looking up the user by its principal name in the backing provider.
 */
export interface GraphUserPrincipalNameCreationContext extends GraphUserCreationContext {
    principalName: string;
}

export interface SubjectDescriptor {
    identifier: string;
    subjectType: string;
}

export var TypeInfo = {
    GraphDisabledFilter: {
        enumValues: {
            "unknown": 0,
            "includeOnlyEnabled": 1,
            "includeOnlyDisabled": 2,
            "includeBoth": 3,
        }
    },
    GraphGroup: {
        fields: <any>null
    },
    GraphGroupCreationContext: {
        fields: <any>null
    },
    GraphGroupMailAddressCreationContext: {
        fields: <any>null
    },
    GraphGroupOriginIdCreationContext: {
        fields: <any>null
    },
    GraphGroupVstsCreationContext: {
        fields: <any>null
    },
    GraphMember: {
        fields: <any>null
    },
    GraphMembership: {
        fields: <any>null
    },
    GraphScope: {
        fields: <any>null
    },
    GraphScopeCreationContext: {
        fields: <any>null
    },
    GraphSubject: {
        fields: <any>null
    },
    GraphSubjectLookup: {
        fields: <any>null
    },
    GraphSubjectLookupKey: {
        fields: <any>null
    },
    GraphTraversalDirection: {
        enumValues: {
            "unknown": 0,
            "down": 1,
            "up": 2,
        }
    },
    GraphUser: {
        fields: <any>null
    },
    GraphUserCreationContext: {
        fields: <any>null
    },
    GraphUserMailAddressCreationContext: {
        fields: <any>null
    },
    GraphUserOriginIdCreationContext: {
        fields: <any>null
    },
    GraphUserPrincipalNameCreationContext: {
        fields: <any>null
    },
    SubjectDescriptor: {
        fields: <any>null
    },
};

TypeInfo.GraphGroup.fields = {
};

TypeInfo.GraphGroupCreationContext.fields = {
};

TypeInfo.GraphGroupMailAddressCreationContext.fields = {
};

TypeInfo.GraphGroupOriginIdCreationContext.fields = {
};

TypeInfo.GraphGroupVstsCreationContext.fields = {
};

TypeInfo.GraphMember.fields = {
};

TypeInfo.GraphMembership.fields = {
};

TypeInfo.GraphScope.fields = {
    scopeType: {
        enumType: IdentitiesInterfaces.TypeInfo.GroupScopeType
    },
};

TypeInfo.GraphScopeCreationContext.fields = {
    scopeType: {
        enumType: IdentitiesInterfaces.TypeInfo.GroupScopeType
    },
};

TypeInfo.GraphSubject.fields = {
};

TypeInfo.GraphSubjectLookup.fields = {
    lookupKeys: {
        isArray: true,
        typeInfo: TypeInfo.GraphSubjectLookupKey
    },
};

TypeInfo.GraphSubjectLookupKey.fields = {
    descriptor: {
        typeInfo: TypeInfo.SubjectDescriptor
    },
};

TypeInfo.GraphUser.fields = {
};

TypeInfo.GraphUserCreationContext.fields = {
};

TypeInfo.GraphUserMailAddressCreationContext.fields = {
};

TypeInfo.GraphUserOriginIdCreationContext.fields = {
};

TypeInfo.GraphUserPrincipalNameCreationContext.fields = {
};

TypeInfo.SubjectDescriptor.fields = {
};
