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

import OperationsInterfaces = require("../interfaces/common/OperationsInterfaces");


export enum AccountLicenseType {
    None = 0,
    EarlyAdopter = 1,
    Express = 2,
    Professional = 3,
    Advanced = 4,
    Stakeholder = 5,
}

export interface AccountUserLicense {
    license: number;
    source: LicensingSource;
}

export interface ApplicationStatus {
    extensions: ExtensionApplicationStatus[];
    isTruncated: boolean;
    licenses: LicenseApplicationStatus[];
    option: RuleOption;
    status: OperationsInterfaces.OperationStatus;
}

export interface ExtensionApplicationStatus extends LicensingApplicationStatus {
    extensionId: string;
    incompatible: number;
    unassigned: number;
}

/**
 * Represents an Extension Rule
 */
export interface ExtensionRule {
    /**
     * Extension Id
     */
    extensionId: string;
    /**
     * Status of the group rule (applied, missing licenses, etc)
     */
    status: GroupLicensingRuleStatus;
}

export interface GraphSubjectLookup {
    lookupKeys: GraphSubjectLookupKey[];
}

export interface GraphSubjectLookupKey {
    descriptor: string;
}

/**
 * Represents a GroupLicensingRule
 */
export interface GroupLicensingRule {
    /**
     * Extension Rules
     */
    extensionRules: ExtensionRule[];
    /**
     * License Rule
     */
    licenseRule: LicenseRule;
    /**
     * SubjectDescriptor for the rule
     */
    subjectDescriptor: string;
}

export enum GroupLicensingRuleStatus {
    /**
     * Rule is created or updated, but apply is pending
     */
    ApplyPending = 0,
    /**
     * Rule is applied
     */
    Applied = 1,
    /**
     * The group rule was incompatible
     */
    Incompatible = 5,
    /**
     * Rule failed to apply unexpectedly and should be retried
     */
    UnableToApply = 10,
}

/**
 * Represents an GroupLicensingRuleUpdate Model
 */
export interface GroupLicensingRuleUpdate {
    /**
     * Extensions to Add
     */
    extensionsToAdd: string[];
    /**
     * Extensions to Remove
     */
    extensionsToRemove: string[];
    /**
     * New License
     */
    license: License;
    /**
     * SubjectDescriptor for the rule
     */
    subjectDescriptor: string;
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

export interface LicenseApplicationStatus extends LicensingApplicationStatus {
    accountUserLicense: AccountUserLicense;
    license: License;
}

/**
 * Represents a License Rule
 */
export interface LicenseRule {
    /**
     * The last time the rule was executed (regardless of whether any changes were made)
     */
    lastExecuted: Date;
    /**
     * License
     */
    license: License;
    /**
     * Status of the group rule (applied, missing licenses, etc)
     */
    status: GroupLicensingRuleStatus;
}

export interface LicensingApplicationStatus {
    assigned: number;
    failed: number;
    insufficientResources: number;
}

export enum LicensingSource {
    None = 0,
    Account = 1,
    Msdn = 2,
    Profile = 3,
    Auto = 4,
    Trial = 5,
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

export enum RuleOption {
    ApplyGroupRule = 0,
    TestApplyGroupRule = 1,
}

export var TypeInfo = {
    AccountLicenseType: {
        enumValues: {
            "none": 0,
            "earlyAdopter": 1,
            "express": 2,
            "professional": 3,
            "advanced": 4,
            "stakeholder": 5
        }
    },
    AccountUserLicense: <any>{
    },
    ApplicationStatus: <any>{
    },
    ExtensionRule: <any>{
    },
    GroupLicensingRule: <any>{
    },
    GroupLicensingRuleStatus: {
        enumValues: {
            "applyPending": 0,
            "applied": 1,
            "incompatible": 5,
            "unableToApply": 10
        }
    },
    GroupLicensingRuleUpdate: <any>{
    },
    License: <any>{
    },
    LicenseApplicationStatus: <any>{
    },
    LicenseRule: <any>{
    },
    LicensingSource: {
        enumValues: {
            "none": 0,
            "account": 1,
            "msdn": 2,
            "profile": 3,
            "auto": 4,
            "trial": 5
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
            "enterprise": 7
        }
    },
    RuleOption: {
        enumValues: {
            "applyGroupRule": 0,
            "testApplyGroupRule": 1
        }
    },
};

TypeInfo.AccountUserLicense.fields = {
    source: {
        enumType: TypeInfo.LicensingSource
    }
};

TypeInfo.ApplicationStatus.fields = {
    licenses: {
        isArray: true,
        typeInfo: TypeInfo.LicenseApplicationStatus
    },
    option: {
        enumType: TypeInfo.RuleOption
    },
    status: {
        enumType: OperationsInterfaces.TypeInfo.OperationStatus
    }
};

TypeInfo.ExtensionRule.fields = {
    status: {
        enumType: TypeInfo.GroupLicensingRuleStatus
    }
};

TypeInfo.GroupLicensingRule.fields = {
    extensionRules: {
        isArray: true,
        typeInfo: TypeInfo.ExtensionRule
    },
    licenseRule: {
        typeInfo: TypeInfo.LicenseRule
    }
};

TypeInfo.GroupLicensingRuleUpdate.fields = {
    license: {
        typeInfo: TypeInfo.License
    }
};

TypeInfo.License.fields = {
    source: {
        enumType: TypeInfo.LicensingSource
    }
};

TypeInfo.LicenseApplicationStatus.fields = {
    accountUserLicense: {
        typeInfo: TypeInfo.AccountUserLicense
    },
    license: {
        typeInfo: TypeInfo.License
    }
};

TypeInfo.LicenseRule.fields = {
    lastExecuted: {
        isDate: true,
    },
    license: {
        typeInfo: TypeInfo.License
    },
    status: {
        enumType: TypeInfo.GroupLicensingRuleStatus
    }
};
