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



export enum AccountLicenseType {
    None = 0,
    EarlyAdopter = 1,
    Express = 2,
    Professional = 3,
    Advanced = 4,
    Stakeholder = 5,
}

export interface ClientRightsContainer {
    certificateBytes: number[];
    token: string;
}

export enum ExtensionFilterOptions {
    None = 1,
    Bundle = 2,
    AccountAssignment = 4,
    All = 7,
}

export enum ExtensionOperation {
    Assign = 0,
    Unassign = 1,
}

export enum LicensingSource {
    None = 0,
    Account = 1,
    Msdn = 2,
    Profile = 3,
    Auto = 4,
}

export enum MsdnLicenseType {
    None = 0,
    Eligible = 1,
    Professional = 2,
    Platforms = 3,
    TestProfessional = 4,
    Premium = 5,
    Ultimate = 6,
    Enterprise = 7,
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
    ClientRightsContainer: {
        fields: <any>null
    },
    ExtensionFilterOptions: {
        enumValues: {
            "none": 1,
            "bundle": 2,
            "accountAssignment": 4,
            "all": 7,
        }
    },
    ExtensionOperation: {
        enumValues: {
            "assign": 0,
            "unassign": 1,
        }
    },
    LicensingSource: {
        enumValues: {
            "none": 0,
            "account": 1,
            "msdn": 2,
            "profile": 3,
            "auto": 4,
        }
    },
    MsdnLicenseType: {
        enumValues: {
            "none": 0,
            "eligible": 1,
            "professional": 2,
            "platforms": 3,
            "testProfessional": 4,
            "premium": 5,
            "ultimate": 6,
            "enterprise": 7,
        }
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

TypeInfo.ClientRightsContainer.fields = {
};
