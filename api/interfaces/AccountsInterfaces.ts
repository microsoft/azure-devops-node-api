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


export interface Account {
    /**
     * Identifier for an Account
     */
    accountId: string;
    /**
     * Name for an account
     */
    accountName: string;
    /**
     * Owner of account
     */
    accountOwner: string;
    /**
     * Current account status
     */
    accountStatus: AccountStatus;
    /**
     * Type of account: Personal, Organization
     */
    accountType: AccountType;
    /**
     * Uri for an account
     */
    accountUri: string;
    /**
     * Who created the account
     */
    createdBy: string;
    /**
     * Date account was created
     */
    createdDate: Date;
    /**
     * Identity of last person to update the account
     */
    lastUpdatedBy: string;
    /**
     * Date account was last updated
     */
    lastUpdatedDate: Date;
    /**
     * Namespace for an account
     */
    namespaceId: string;
    /**
     * Organization that created the account
     */
    organizationName: string;
    /**
     * Extended properties
     */
    properties: any;
    /**
     * Reason for current status
     */
    statusReason: string;
}

export interface AccountCreateInfoInternal {
    accountName: string;
    creator: string;
    organization: string;
    preferences: AccountPreferencesInternal;
    properties: any;
    serviceDefinitions: { key: string; value: string }[];
}

export interface AccountLicenseInfo {
    consumedCount: number;
    inUseCount: number;
    licenseName: string;
}

export enum AccountLicenseSource {
    /**
     * The following correspond to various license sources
     */
    None = 2,
    VsExpress = 10,
    VsPro = 12,
    VsTestPro = 14,
    VsPremium = 16,
    VsUltimate = 18,
    MSDN = 38,
    MsdnPro = 40,
    MsdnTestPro = 42,
    MsdnPremium = 44,
    MsdnUltimate = 46,
    MsdnPlatforms = 48,
    VSOStandard = 50,
    VSOAdvanced = 52,
    VSOProStandard = 54,
    Win8 = 56,
    Desktop = 58,
    Phone = 60,
    /**
     * Early adopters may get a special license
     */
    VsEarlyAdopter = 70,
}

export interface AccountNameAvailability {
    isValidName: boolean;
    /**
     * Reason for current status
     */
    statusReason: string;
}

export interface AccountPreferencesInternal {
    culture: any;
    language: any;
    timeZone: any;
}

/**
 * Account region metadata
 */
export interface AccountRegion {
    /**
     * Display name of the account region
     */
    displayName: string;
    /**
     * Whether the region is default or not
     */
    isDefault: boolean;
    /**
     * Azure location name
     */
    locationName: string;
}

export enum AccountServiceRights {
    StandardLicense = 0,
    AdvancedLicense = 1,
    ProfessionalLicense = 2,
    None = 3,
}

export enum AccountStatus {
    None = 0,
    /**
     * This hosting account is active and assigned to a customer.
     */
    Enabled = 1,
    /**
     * This hosting account is disabled.
     */
    Disabled = 2,
    /**
     * This account is part of deletion batch and scheduled for deletion.
     */
    Deleted = 3,
}

export enum AccountType {
    Personal = 0,
    Organization = 1,
}

export interface AccountUser {
    /**
     * Identifier for an Account
     */
    accountId: string;
    /**
     * Date account was created
     */
    creationDate: Date;
    /**
     * Date account was last updated
     */
    lastUpdated: Date;
    /**
     * What is the license for this user MSDN, VSPro, etc.
     */
    licenseSource: AccountLicenseSource;
    /**
     * What are the users service rights
     */
    serviceRights: AccountServiceRights;
    /**
     * The user identity to be associated with the account
     */
    userId: string;
    /**
     * Current account status
     */
    userStatus: AccountUserStatus;
}

export enum AccountUserStatus {
    None = 0,
    /**
     * User has signed in at least once to the VSTS account
     */
    Active = 1,
    /**
     * User cannot sign in; primarily used by admin to temporarily remove a user due to absence or license reallocation
     */
    Disabled = 2,
    /**
     * User is removed from the VSTS account by the VSTS account admin
     */
    Deleted = 3,
    /**
     * User is invited to join the VSTS account by the VSTS account admin, but has not signed up/signed in yet
     */
    Pending = 4,
    /**
     * User can sign in; primarily used when license is in expired state and we give a grace period
     */
    Expired = 5,
    /**
     * User is disabled; if reenabled, they will still be in the Pending state
     */
    PendingDisabled = 6,
}

export var TypeInfo = {
    Account: {
        fields: <any>null
    },
    AccountCreateInfoInternal: {
        fields: <any>null
    },
    AccountLicenseInfo: {
        fields: <any>null
    },
    AccountLicenseSource: {
        enumValues: {
            "none": 2,
            "vsExpress": 10,
            "vsPro": 12,
            "vsTestPro": 14,
            "vsPremium": 16,
            "vsUltimate": 18,
            "mSDN": 38,
            "msdnPro": 40,
            "msdnTestPro": 42,
            "msdnPremium": 44,
            "msdnUltimate": 46,
            "msdnPlatforms": 48,
            "vSOStandard": 50,
            "vSOAdvanced": 52,
            "vSOProStandard": 54,
            "win8": 56,
            "desktop": 58,
            "phone": 60,
            "vsEarlyAdopter": 70,
        }
    },
    AccountNameAvailability: {
        fields: <any>null
    },
    AccountPreferencesInternal: {
        fields: <any>null
    },
    AccountRegion: {
        fields: <any>null
    },
    AccountServiceRights: {
        enumValues: {
            "standardLicense": 0,
            "advancedLicense": 1,
            "professionalLicense": 2,
            "none": 3,
        }
    },
    AccountStatus: {
        enumValues: {
            "none": 0,
            "enabled": 1,
            "disabled": 2,
            "deleted": 3,
        }
    },
    AccountType: {
        enumValues: {
            "personal": 0,
            "organization": 1,
        }
    },
    AccountUser: {
        fields: <any>null
    },
    AccountUserStatus: {
        enumValues: {
            "none": 0,
            "active": 1,
            "disabled": 2,
            "deleted": 3,
            "pending": 4,
            "expired": 5,
            "pendingDisabled": 6,
        }
    },
};

TypeInfo.Account.fields = {
    accountStatus: {
        enumType: TypeInfo.AccountStatus
    },
    accountType: {
        enumType: TypeInfo.AccountType
    },
    createdDate: {
        isDate: true,
    },
    lastUpdatedDate: {
        isDate: true,
    },
};

TypeInfo.AccountCreateInfoInternal.fields = {
    preferences: {
        typeInfo: TypeInfo.AccountPreferencesInternal
    },
};

TypeInfo.AccountLicenseInfo.fields = {
};

TypeInfo.AccountNameAvailability.fields = {
};

TypeInfo.AccountPreferencesInternal.fields = {
};

TypeInfo.AccountRegion.fields = {
};

TypeInfo.AccountUser.fields = {
    creationDate: {
        isDate: true,
    },
    lastUpdated: {
        isDate: true,
    },
    licenseSource: {
        enumType: TypeInfo.AccountLicenseSource
    },
    serviceRights: {
        enumType: TypeInfo.AccountServiceRights
    },
    userStatus: {
        enumType: TypeInfo.AccountUserStatus
    },
};
