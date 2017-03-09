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


/**
 * Class for encapsulating the allowed and denied permissions for a given IdentityDescriptor.
 */
export interface AccessControlEntry {
    /**
     * The set of permission bits that represent the actions that the associated descriptor is allowed to perform.
     */
    allow: number;
    /**
     * The set of permission bits that represent the actions that the associated descriptor is not allowed to perform.
     */
    deny: number;
    /**
     * The descriptor for the user this AccessControlEntry applies to.
     */
    descriptor: IdentitiesInterfaces.IdentityDescriptor;
    /**
     * This value, when set, reports the inherited and effective information for the associated descriptor. This value is only set on AccessControlEntries returned by the QueryAccessControlList(s) call when its includeExtendedInfo parameter is set to true.
     */
    extendedInfo: AceExtendedInformation;
}

/**
 * The AccessControlList class is meant to associate a set of AccessControlEntries with a security token and its inheritance settings.
 */
export interface AccessControlList {
    /**
     * Storage of permissions keyed on the identity the permission is for.
     */
    acesDictionary: { [key: string] : AccessControlEntry; };
    /**
     * True if this ACL holds ACEs that have extended information.
     */
    includeExtendedInfo: boolean;
    /**
     * True if the given token inherits permissions from parents.
     */
    inheritPermissions: boolean;
    /**
     * The token that this AccessControlList is for.
     */
    token: string;
}

export interface AccessControlListsCollection {
}

/**
 * Holds the inherited and effective permission information for a given AccessControlEntry.
 */
export interface AceExtendedInformation {
    /**
     * This is the combination of all of the explicit and inherited permissions for this identity on this token.  These are the permissions used when determining if a given user has permission to perform an action.
     */
    effectiveAllow: number;
    /**
     * This is the combination of all of the explicit and inherited permissions for this identity on this token.  These are the permissions used when determining if a given user has permission to perform an action.
     */
    effectiveDeny: number;
    /**
     * These are the permissions that are inherited for this identity on this token.  If the token does not inherit permissions this will be 0.  Note that any permissions that have been explicitly set on this token for this identity, or any groups that this identity is a part of, are not included here.
     */
    inheritedAllow: number;
    /**
     * These are the permissions that are inherited for this identity on this token.  If the token does not inherit permissions this will be 0.  Note that any permissions that have been explicitly set on this token for this identity, or any groups that this identity is a part of, are not included here.
     */
    inheritedDeny: number;
}

export interface ActionDefinition {
    /**
     * The bit mask integer for this action. Must be a power of 2.
     */
    bit: number;
    /**
     * The localized display name for this action.
     */
    displayName: string;
    /**
     * The non-localized name for this action.
     */
    name: string;
    /**
     * The namespace that this action belongs to.  This will only be used for reading from the database.
     */
    namespaceId: string;
}

/**
 * Represents an evaluated permission.
 */
export interface PermissionEvaluation {
    /**
     * Permission bit for this evaluated permission.
     */
    permissions: number;
    /**
     * Security namespace identifier for this evaluated permission.
     */
    securityNamespaceId: string;
    /**
     * Security namespace-specific token for this evaluated permission.
     */
    token: string;
    /**
     * Permission evaluation value.
     */
    value: boolean;
}

/**
 * Represents a set of evaluated permissions.
 */
export interface PermissionEvaluationBatch {
    alwaysAllowAdministrators: boolean;
    /**
     * Array of permission evaluations to evaluate.
     */
    evaluations: PermissionEvaluation[];
}

/**
 * Class for describing the details of a TeamFoundationSecurityNamespace.
 */
export interface SecurityNamespaceDescription {
    /**
     * The list of actions that this Security Namespace is responsible for securing.
     */
    actions: ActionDefinition[];
    /**
     * This is the dataspace category that describes where the security information for this SecurityNamespace should be stored.
     */
    dataspaceCategory: string;
    /**
     * This localized name for this namespace.
     */
    displayName: string;
    /**
     * If the security tokens this namespace will be operating on need to be split on certain character lengths to determine its elements, that length should be specified here. If not, this value will be -1.
     */
    elementLength: number;
    /**
     * This is the type of the extension that should be loaded from the plugins directory for extending this security namespace.
     */
    extensionType: string;
    /**
     * If true, the security namespace is remotable, allowing another service to proxy the namespace.
     */
    isRemotable: boolean;
    /**
     * This non-localized for this namespace.
     */
    name: string;
    /**
     * The unique identifier for this namespace.
     */
    namespaceId: string;
    /**
     * The permission bits needed by a user in order to read security data on the Security Namespace.
     */
    readPermission: number;
    /**
     * If the security tokens this namespace will be operating on need to be split on certain characters to determine its elements that character should be specified here. If not, this value will be the null character.
     */
    separatorValue: string;
    /**
     * Used to send information about the structure of the security namespace over the web service.
     */
    structureValue: number;
    /**
     * The bits reserved by system store
     */
    systemBitMask: number;
    /**
     * If true, the security service will expect an ISecurityDataspaceTokenTranslator plugin to exist for this namespace
     */
    useTokenTranslator: boolean;
    /**
     * The permission bits needed by a user in order to modify security data on the Security Namespace.
     */
    writePermission: number;
}

export var TypeInfo = {
    AccessControlEntry: {
        fields: <any>null
    },
    AccessControlList: {
        fields: <any>null
    },
    AccessControlListsCollection: {
        fields: <any>null
    },
    AceExtendedInformation: {
        fields: <any>null
    },
    ActionDefinition: {
        fields: <any>null
    },
    PermissionEvaluation: {
        fields: <any>null
    },
    PermissionEvaluationBatch: {
        fields: <any>null
    },
    SecurityNamespaceDescription: {
        fields: <any>null
    },
};

TypeInfo.AccessControlEntry.fields = {
    descriptor: {
        typeInfo: IdentitiesInterfaces.TypeInfo.IdentityDescriptor
    },
    extendedInfo: {
        typeInfo: TypeInfo.AceExtendedInformation
    },
};

TypeInfo.AccessControlList.fields = {
    acesDictionary: {
    },
};

TypeInfo.AccessControlListsCollection.fields = {
};

TypeInfo.AceExtendedInformation.fields = {
};

TypeInfo.ActionDefinition.fields = {
};

TypeInfo.PermissionEvaluation.fields = {
};

TypeInfo.PermissionEvaluationBatch.fields = {
    evaluations: {
        isArray: true,
        typeInfo: TypeInfo.PermissionEvaluation
    },
};

TypeInfo.SecurityNamespaceDescription.fields = {
    actions: {
        isArray: true,
        typeInfo: TypeInfo.ActionDefinition
    },
};
