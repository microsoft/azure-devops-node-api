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

import LicensingInterfaces = require("../../interfaces/common/LicensingInterfaces");
import OperationsInterfaces = require("../../interfaces/common/OperationsInterfaces");


export interface ApplicationStatus {
    extensions?: ExtensionApplicationStatus[];
    isTruncated?: boolean;
    licenses?: LicenseApplicationStatus[];
    option?: RuleOption;
    status?: OperationsInterfaces.OperationStatus;
}

export interface ExtensionApplicationStatus extends LicensingApplicationStatus {
    extensionId?: string;
    incompatible?: number;
    unassigned?: number;
}

/**
 * Represents an Extension Rule
 */
export interface ExtensionRule {
    /**
     * Extension Id
     */
    extensionId?: string;
    /**
     * Status of the group rule (applied, missing licenses, etc)
     */
    status?: GroupLicensingRuleStatus;
}

/**
 * Batching of subjects to lookup using the Graph API
 */
export interface GraphSubjectLookup {
    lookupKeys?: GraphSubjectLookupKey[];
}

export interface GraphSubjectLookupKey {
    descriptor?: string;
}

/**
 * Represents a GroupLicensingRule
 */
export interface GroupLicensingRule {
    /**
     * Extension Rules
     */
    extensionRules?: ExtensionRule[];
    /**
     * License Rule
     */
    licenseRule?: LicenseRule;
    /**
     * SubjectDescriptor for the rule
     */
    subjectDescriptor?: string;
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
    extensionsToAdd?: string[];
    /**
     * Extensions to Remove
     */
    extensionsToRemove?: string[];
    /**
     * New License
     */
    license?: LicensingInterfaces.License;
    /**
     * SubjectDescriptor for the rule
     */
    subjectDescriptor?: string;
}

export interface LicenseApplicationStatus extends LicensingApplicationStatus {
    accountUserLicense?: LicensingInterfaces.AccountUserLicense;
    license?: LicensingInterfaces.License;
}

/**
 * Represents a License Rule
 */
export interface LicenseRule {
    /**
     * The last time the rule was executed (regardless of whether any changes were made)
     */
    lastExecuted?: Date;
    /**
     * License
     */
    license?: LicensingInterfaces.License;
    /**
     * Status of the group rule (applied, missing licenses, etc)
     */
    status?: GroupLicensingRuleStatus;
}

export interface LicensingApplicationStatus {
    assigned?: number;
    failed?: number;
    insufficientResources?: number;
}

export enum RuleOption {
    ApplyGroupRule = 0,
    TestApplyGroupRule = 1,
}

export var TypeInfo = {
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
    LicenseApplicationStatus: <any>{
    },
    LicenseRule: <any>{
    },
    RuleOption: {
        enumValues: {
            "applyGroupRule": 0,
            "testApplyGroupRule": 1
        }
    },
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
        typeInfo: LicensingInterfaces.TypeInfo.License
    }
};

TypeInfo.LicenseApplicationStatus.fields = {
    accountUserLicense: {
        typeInfo: LicensingInterfaces.TypeInfo.AccountUserLicense
    },
    license: {
        typeInfo: LicensingInterfaces.TypeInfo.License
    }
};

TypeInfo.LicenseRule.fields = {
    lastExecuted: {
        isDate: true,
    },
    license: {
        typeInfo: LicensingInterfaces.TypeInfo.License
    },
    status: {
        enumType: TypeInfo.GroupLicensingRuleStatus
    }
};
