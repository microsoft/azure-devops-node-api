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
import LicensingInterfaces = require("../interfaces/common/LicensingInterfaces");


export interface AccessLevel {
    accountLicenseType: LicensingInterfaces.AccountLicenseType;
    licenseDisplayName: string;
    licensingSource: LicensingInterfaces.LicensingSource;
}

export interface Extension {
    id: string;
    name: string;
}

export interface GraphMember {
    _links: any;
    disabled: boolean;
    displayName: string;
    entitySubtype: string;
    entityType: string;
    /**
     * The unique identifier within the member's scope. This identifier will not change for the lifetime of the member.
     */
    id: string;
    /**
     * The source for the origin identifier
     */
    origin: string;
    /**
     * The unique identifier from the system of origin
     */
    originId: string;
    principalName: string;
    transientDescriptor: IdentitiesInterfaces.IdentityDescriptor;
    url: string;
}

export interface Group {
    displayName: string;
    groupType: GroupType;
}

export enum GroupType {
    ProjectManager = 0,
    ProjectReader = 1,
    ProjectContributor = 2,
    ProjectAdministrator = 3,
    Custom = 4,
}

export interface MemberEntitlement {
    /**
     * Member's access level denoted by a license
     */
    accessLevel: AccessLevel;
    /**
     * Member's extensions
     */
    extensions: Extension[];
    /**
     * The unique identifier which matches the Id of the GraphMember
     */
    id: string;
    /**
     * Date the Member last access the collection
     */
    lastAccessedDate: Date;
    /**
     * Member reference
     */
    member: GraphMember;
    /**
     * Relation between a project and the member's effective permissions in that project
     */
    projectEntitlements: ProjectEntitlement[];
}

export interface MemberEntitlementsPatchResponse extends MemberEntitlementsResponseBase {
    /**
     * List of results for each operation
     */
    operationResults: OperationResult[];
}

export interface MemberEntitlementsPostResponse extends MemberEntitlementsResponseBase {
    /**
     * Operation result
     */
    operationResult: OperationResult;
}

export interface MemberEntitlementsResponseBase {
    /**
     * True if all operations were successful
     */
    isSuccess: boolean;
    /**
     * Result of the member entitlement after the operations have been applied
     */
    memberEntitlement: MemberEntitlement;
}

export interface OperationResult {
    /**
     * List of error codes paired with their corresponding error messages
     */
    errors: { key: number; value: string }[];
    /**
     * Success status of the operation
     */
    isSuccess: boolean;
    /**
     * Result of the MemberEntitlement after the operation
     */
    result: MemberEntitlement;
}

export interface ProjectEntitlement {
    group: Group;
    isProjectPermissionInherited: boolean;
    projectRef: ProjectRef;
}

export interface ProjectRef {
    id: string;
    name: string;
}

export var TypeInfo = {
    AccessLevel: {
        fields: <any>null
    },
    Extension: {
        fields: <any>null
    },
    GraphMember: {
        fields: <any>null
    },
    Group: {
        fields: <any>null
    },
    GroupType: {
        enumValues: {
            "projectManager": 0,
            "projectReader": 1,
            "projectContributor": 2,
            "projectAdministrator": 3,
            "custom": 4,
        }
    },
    MemberEntitlement: {
        fields: <any>null
    },
    MemberEntitlementsPatchResponse: {
        fields: <any>null
    },
    MemberEntitlementsPostResponse: {
        fields: <any>null
    },
    MemberEntitlementsResponseBase: {
        fields: <any>null
    },
    OperationResult: {
        fields: <any>null
    },
    ProjectEntitlement: {
        fields: <any>null
    },
    ProjectRef: {
        fields: <any>null
    },
};

TypeInfo.AccessLevel.fields = {
    accountLicenseType: {
        enumType: LicensingInterfaces.TypeInfo.AccountLicenseType
    },
    licensingSource: {
        enumType: LicensingInterfaces.TypeInfo.LicensingSource
    },
};

TypeInfo.Extension.fields = {
};

TypeInfo.GraphMember.fields = {
    transientDescriptor: {
        typeInfo: IdentitiesInterfaces.TypeInfo.IdentityDescriptor
    },
};

TypeInfo.Group.fields = {
    groupType: {
        enumType: TypeInfo.GroupType
    },
};

TypeInfo.MemberEntitlement.fields = {
    accessLevel: {
        typeInfo: TypeInfo.AccessLevel
    },
    extensions: {
        isArray: true,
        typeInfo: TypeInfo.Extension
    },
    lastAccessedDate: {
        isDate: true,
    },
    member: {
        typeInfo: TypeInfo.GraphMember
    },
    projectEntitlements: {
        isArray: true,
        typeInfo: TypeInfo.ProjectEntitlement
    },
};

TypeInfo.MemberEntitlementsPatchResponse.fields = {
    memberEntitlement: {
        typeInfo: TypeInfo.MemberEntitlement
    },
    operationResults: {
        isArray: true,
        typeInfo: TypeInfo.OperationResult
    },
};

TypeInfo.MemberEntitlementsPostResponse.fields = {
    memberEntitlement: {
        typeInfo: TypeInfo.MemberEntitlement
    },
    operationResult: {
        typeInfo: TypeInfo.OperationResult
    },
};

TypeInfo.MemberEntitlementsResponseBase.fields = {
    memberEntitlement: {
        typeInfo: TypeInfo.MemberEntitlement
    },
};

TypeInfo.OperationResult.fields = {
    result: {
        typeInfo: TypeInfo.MemberEntitlement
    },
};

TypeInfo.ProjectEntitlement.fields = {
    group: {
        typeInfo: TypeInfo.Group
    },
    projectRef: {
        typeInfo: TypeInfo.ProjectRef
    },
};

TypeInfo.ProjectRef.fields = {
};
