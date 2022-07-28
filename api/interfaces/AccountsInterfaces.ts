﻿/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */

"use strict";



export interface Account {
    /**
     * Identifier for an Account
     */
    accountId?: string;
    /**
     * Name for an account
     */
    accountName?: string;
    /**
     * Owner of account
     */
    accountOwner?: string;
    /**
     * Current account status
     */
    accountStatus?: AccountStatus;
    /**
     * Type of account: Personal, Organization
     */
    accountType?: AccountType;
    /**
     * Uri for an account
     */
    accountUri?: string;
    /**
     * Who created the account
     */
    createdBy?: string;
    /**
     * Date account was created
     */
    createdDate?: Date;
    hasMoved?: boolean;
    /**
     * Identity of last person to update the account
     */
    lastUpdatedBy?: string;
    /**
     * Date account was last updated
     */
    lastUpdatedDate?: Date;
    /**
     * Namespace for an account
     */
    namespaceId?: string;
    newCollectionId?: string;
    /**
     * Organization that created the account
     */
    organizationName?: string;
    /**
     * Extended properties
     */
    properties?: any;
    /**
     * Reason for current status
     */
    statusReason?: string;
}

export interface AccountCreateInfoInternal {
    accountName?: string;
    creator?: string;
    organization?: string;
    preferences?: AccountPreferencesInternal;
    properties?: any;
    serviceDefinitions?: { key: string; value: string }[];
}

export interface AccountPreferencesInternal {
    culture?: any;
    language?: any;
    timeZone?: any;
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
    /**
     * This account is not mastered locally and has physically moved.
     */
    Moved = 4,
}

export enum AccountType {
    Personal = 0,
    Organization = 1,
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
    Account: <any>{
    },
    AccountStatus: {
        enumValues: {
            "none": 0,
            "enabled": 1,
            "disabled": 2,
            "deleted": 3,
            "moved": 4
        }
    },
    AccountType: {
        enumValues: {
            "personal": 0,
            "organization": 1
        }
    },
    AccountUserStatus: {
        enumValues: {
            "none": 0,
            "active": 1,
            "disabled": 2,
            "deleted": 3,
            "pending": 4,
            "expired": 5,
            "pendingDisabled": 6
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
    }
};
