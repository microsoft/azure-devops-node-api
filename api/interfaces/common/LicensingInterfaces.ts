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

import VSS_Accounts_Contracts = require("../VSS/Accounts/Contracts");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


/**
 * Represents a license granted to a user in an account
 */
export interface AccountEntitlement {
    /**
     * Gets or sets the id of the account to which the license belongs
     */
    accountId: string;
    /**
     * Gets or sets the date the license was assigned
     */
    assignmentDate: Date;
    /**
     * Gets or sets the date of the user last sign-in to this account
     */
    lastAccessedDate: Date;
    license: License;
    /**
     * The computed rights of this user in the account.
     */
    rights: AccountRights;
    /**
     * The status of the user in the account
     */
    status: VSS_Accounts_Contracts.AccountUserStatus;
    /**
     * Identity information of the user to which the license belongs
     */
    user: VSSInterfaces.IdentityRef;
    /**
     * Gets the id of the user to which the license belongs
     */
    userId: string;
}

/**
 * Model for updating an AccountEntitlement for a user, used for the Web API
 */
export interface AccountEntitlementUpdateModel {
    /**
     * Gets or sets the license for the entitlement
     */
    license: License;
}

export interface AccountLicenseExtensionUsage {
    extensionId: string;
    extensionName: string;
    provisionedCount: number;
    usedCount: number;
}

export enum AccountLicenseType {
    None = 0,
    EarlyAdopter = 1,
    Express = 2,
    Professional = 3,
    Advanced = 4,
    Stakeholder = 5,
}

export interface AccountLicenseUsage {
    license: AccountUserLicense;
    provisionedCount: number;
    usedCount: number;
}

export interface AccountRights {
    level: VisualStudioOnlineServiceLevel;
    reason: string;
}

export interface AccountUserLicense {
    license: number;
    source: LicensingSource;
}

export interface ClientRightsContainer {
    certificateBytes: number[];
    token: string;
}

/**
 * Model for assigning an extension to users, used for the Web API
 */
export interface ExtensionAssignment {
    /**
     * Gets or sets the extension ID to assign.
     */
    extensionGalleryId: string;
    /**
     * Gets or sets the licensing source.
     */
    licensingSource: LicensingSource;
    /**
     * Gets or sets the user IDs to assign the extension to.
     */
    userIds: string[];
}

export enum ExtensionFilterOptions {
    None = 1,
    Bundle = 2,
    AccountAssignment = 4,
    ImplicitAssignment = 8,
    All = -1,
}

export interface ExtensionLicenseData {
    createdDate: Date;
    extensionId: string;
    isFree: boolean;
    minimumRequiredAccessLevel: VisualStudioOnlineServiceLevel;
    updatedDate: Date;
}

export enum ExtensionOperation {
    Assign = 0,
    Unassign = 1,
}

export interface ExtensionOperationResult {
    accountId: string;
    extensionId: string;
    message: string;
    operation: ExtensionOperation;
    result: OperationResult;
    userId: string;
}

/**
 * Container for service licensing rights
 */
export interface IServiceRight {
    serviceLevel: VisualStudioOnlineServiceLevel;
}

/**
 * Container for licensing rights
 */
export interface IUsageRight {
    /**
     * Rights data
     */
    attributes: { [key: string] : any; };
    /**
     * Rights expiration
     */
    expirationDate: Date;
    /**
     * Name, uniquely identifying a usage right
     */
    name: string;
    /**
     * Version
     */
    version: string;
}

/**
 * The base class for a specific license source and license
 */
export interface License {
    /**
     * Gets the source of the license
     */
    source: LicensingSource;
}

export enum LicensingSource {
    None = 0,
    Account = 1,
    Msdn = 2,
    Profile = 3,
    Auto = 4,
    Trial = 5,
}

export interface MsdnEntitlement {
    /**
     * Entilement id assigned to Entitlement in Benefits Database.
     */
    entitlementCode: string;
    /**
     * Entitlement Name e.g. Downloads, Chat.
     */
    entitlementName: string;
    /**
     * Type of Entitlement e.g. Downloads, Chat.
     */
    entitlementType: string;
    /**
     * Entitlement activation status
     */
    isActivated: boolean;
    /**
     * Entitlement availability
     */
    isEntitlementAvailable: boolean;
    /**
     * Write MSDN Channel into CRCT (Retail,MPN,VL,BizSpark,DreamSpark,MCT,FTE,Technet,WebsiteSpark,Other)
     */
    subscriptionChannel: string;
    /**
     * Subscription Expiration Date.
     */
    subscriptionExpirationDate: Date;
    /**
     * Subscription id which identifies the subscription itself. This is the Benefit Detail Guid from BMS.
     */
    subscriptionId: string;
    /**
     * Identifier of the subscription or benefit level.
     */
    subscriptionLevelCode: string;
    /**
     * Name of subscription level.
     */
    subscriptionLevelName: string;
    /**
     * Subscription Status Code (ACT, PND, INA ...).
     */
    subscriptionStatus: string;
}

export enum OperationResult {
    Success = 0,
    Warning = 1,
    Error = 2,
}

export enum VisualStudioOnlineServiceLevel {
    /**
     * No service rights. The user cannot access the account
     */
    None = 0,
    /**
     * Default or minimum service level
     */
    Express = 1,
    /**
     * Premium service level - either by purchasing on the Azure portal or by purchasing the appropriate MSDN subscription
     */
    Advanced = 2,
    /**
     * Only available to a specific set of MSDN Subscribers
     */
    AdvancedPlus = 3,
    /**
     * Stakeholder service level
     */
    Stakeholder = 4,
}

export var TypeInfo = {
    AccountEntitlement: {
        fields: <any>null
    },
    AccountEntitlementUpdateModel: {
        fields: <any>null
    },
    AccountLicenseExtensionUsage: {
        fields: <any>null
    },
    AccountLicenseType: {
        enumValues: {
            "none": 0,
            "earlyAdopter": 1,
            "express": 2,
            "professional": 3,
            "advanced": 4,
            "stakeholder": 5,
        }
    },
    AccountLicenseUsage: {
        fields: <any>null
    },
    AccountRights: {
        fields: <any>null
    },
    AccountUserLicense: {
        fields: <any>null
    },
    ClientRightsContainer: {
        fields: <any>null
    },
    ExtensionAssignment: {
        fields: <any>null
    },
    ExtensionFilterOptions: {
        enumValues: {
            "none": 1,
            "bundle": 2,
            "accountAssignment": 4,
            "implicitAssignment": 8,
            "all": -1,
        }
    },
    ExtensionLicenseData: {
        fields: <any>null
    },
    ExtensionOperation: {
        enumValues: {
            "assign": 0,
            "unassign": 1,
        }
    },
    ExtensionOperationResult: {
        fields: <any>null
    },
    IServiceRight: {
        fields: <any>null
    },
    IUsageRight: {
        fields: <any>null
    },
    License: {
        fields: <any>null
    },
    LicensingSource: {
        enumValues: {
            "none": 0,
            "account": 1,
            "msdn": 2,
            "profile": 3,
            "auto": 4,
            "trial": 5,
        }
    },
    MsdnEntitlement: {
        fields: <any>null
    },
    OperationResult: {
        enumValues: {
            "success": 0,
            "warning": 1,
            "error": 2,
        }
    },
    VisualStudioOnlineServiceLevel: {
        enumValues: {
            "none": 0,
            "express": 1,
            "advanced": 2,
            "advancedPlus": 3,
            "stakeholder": 4,
        }
    },
};

TypeInfo.AccountEntitlement.fields = {
    assignmentDate: {
        isDate: true,
    },
    lastAccessedDate: {
        isDate: true,
    },
    license: {
        typeInfo: TypeInfo.License
    },
    rights: {
        typeInfo: TypeInfo.AccountRights
    },
    status: {
        enumType: VSS_Accounts_Contracts.TypeInfo.AccountUserStatus
    },
    user: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.AccountEntitlementUpdateModel.fields = {
    license: {
        typeInfo: TypeInfo.License
    },
};

TypeInfo.AccountLicenseExtensionUsage.fields = {
};

TypeInfo.AccountLicenseUsage.fields = {
    license: {
        typeInfo: TypeInfo.AccountUserLicense
    },
};

TypeInfo.AccountRights.fields = {
    level: {
        enumType: TypeInfo.VisualStudioOnlineServiceLevel
    },
};

TypeInfo.AccountUserLicense.fields = {
    source: {
        enumType: TypeInfo.LicensingSource
    },
};

TypeInfo.ClientRightsContainer.fields = {
};

TypeInfo.ExtensionAssignment.fields = {
    licensingSource: {
        enumType: TypeInfo.LicensingSource
    },
};

TypeInfo.ExtensionLicenseData.fields = {
    createdDate: {
        isDate: true,
    },
    minimumRequiredAccessLevel: {
        enumType: TypeInfo.VisualStudioOnlineServiceLevel
    },
    updatedDate: {
        isDate: true,
    },
};

TypeInfo.ExtensionOperationResult.fields = {
    operation: {
        enumType: TypeInfo.ExtensionOperation
    },
    result: {
        enumType: TypeInfo.OperationResult
    },
};

TypeInfo.IServiceRight.fields = {
    serviceLevel: {
        enumType: TypeInfo.VisualStudioOnlineServiceLevel
    },
};

TypeInfo.IUsageRight.fields = {
    expirationDate: {
        isDate: true,
    },
};

TypeInfo.License.fields = {
    source: {
        enumType: TypeInfo.LicensingSource
    },
};

TypeInfo.MsdnEntitlement.fields = {
    subscriptionExpirationDate: {
        isDate: true,
    },
};
