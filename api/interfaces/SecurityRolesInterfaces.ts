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


export enum RoleAccess {
    /**
     * Access has been explicitly set.
     */
    Assigned = 1,
    /**
     * Access has been inherited from a higher scope.
     */
    Inherited = 2,
}

export interface RoleAssignment {
    /**
     * Designates the role as explicitly assigned or inherited.
     */
    access: RoleAccess;
    /**
     * User friendly description of access assignment.
     */
    accessDisplayName: string;
    /**
     * The user to whom the role is assigned.
     */
    identity: VSSInterfaces.IdentityRef;
    /**
     * The role assigned to the user.
     */
    role: SecurityRole;
}

export interface SecurityRole {
    /**
     * Permissions the role is allowed.
     */
    allowPermissions: number;
    /**
     * Permissions the role is denied.
     */
    denyPermissions: number;
    /**
     * Description of user access defined by the role
     */
    description: string;
    /**
     * User friendly name of the role.
     */
    displayName: string;
    /**
     * Globally unique identifier for the role.
     */
    identifier: string;
    /**
     * Unique name of the role in the scope.
     */
    name: string;
    /**
     * Returns the id of the ParentScope.
     */
    scope: string;
}

export interface UserRoleAssignmentRef {
    /**
     * The name of the role assigned.
     */
    roleName: string;
    /**
     * Identifier of the user given the role assignment.
     */
    uniqueName: string;
    /**
     * Unique id of the user given the role assignment.
     */
    userId: string;
}

export var TypeInfo = {
    RoleAccess: {
        enumValues: {
            "assigned": 1,
            "inherited": 2,
        }
    },
    RoleAssignment: {
        fields: <any>null
    },
    SecurityRole: {
        fields: <any>null
    },
    UserRoleAssignmentRef: {
        fields: <any>null
    },
};

TypeInfo.RoleAssignment.fields = {
    access: {
        enumType: TypeInfo.RoleAccess
    },
    identity: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
    role: {
        typeInfo: TypeInfo.SecurityRole
    },
};

TypeInfo.SecurityRole.fields = {
};

TypeInfo.UserRoleAssignmentRef.fields = {
};
