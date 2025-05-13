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


/**
 * Billable Committers Details for Advanced Security Services
 */
export interface BillableCommitterDetails {
    /**
     * ID (SHA-1) of the commit.
     */
    commitId?: string;
    /**
     * Committer email address after parsing.
     */
    committerEmail?: string;
    /**
     * Time reported by the commit.
     */
    commitTime?: Date;
    /**
     * DisplayName of the Pusher.
     */
    displayName?: string;
    /**
     * MailNickName of the Pusher.
     */
    mailNickName?: string;
    /**
     * Project Id commit was pushed to.
     */
    projectId?: string;
    /**
     * Project name commit was pushed to.
     */
    projectName?: string;
    /**
     * Time of the push that contained the commit.
     */
    pushedTime?: Date;
    /**
     * Pusher Id for the push.
     */
    pusherId?: string;
    /**
     * Push Id that contained the commit.
     */
    pushId?: number;
    /**
     * RepositoryId commit was pushed to.
     */
    repoId?: string;
    /**
     * Repository name commit was pushed to.
     */
    repoName?: string;
    /**
     * SamAccountName of the Pusher.
     */
    samAccountName?: string;
    /**
     * Visual Studio ID /Team Foundation ID
     */
    vSID?: string;
}

/**
 * Information related to billed committers using Advanced Security services
 */
export interface BilledCommitter {
    /**
     * Cuid of the billed committer. CUID is unique across an Azure Subscription.
     */
    cuid?: string;
    /**
     * Identity Reference object of the billed committer
     */
    userIdentity?: VSSInterfaces.IdentityRef;
}

/**
 * A list of billed committers
 */
export interface BilledCommittersList {
    /**
     * A list of BilledCommitter objects that contain the identityRef of committers.
     */
    billedUsers?: BilledCommitter[];
    /**
     * Count of billed committers in BilledUsers
     */
    uniqueCommitterCount?: number;
}

export interface CodeSecurityFeatures {
    /**
     * CodeQL enablement status set to False when disabled and True when enabled; Null is never explicitly set.
     */
    codeQLEnabled?: boolean;
    /**
     * The VSID of the last user who modified the enablement status of Code Security.
     */
    codeSecurityChangedBy?: string;
    /**
     * Code Security enablement status set to False when disabled and True when enabled; Null is never explicitly set.
     */
    codeSecurityEnabled?: boolean;
    /**
     * The last time the status of Code Security for this repository was updated
     */
    codeSecurityEnablementLastChangedDate?: Date;
    /**
     * Dependabot enablement status set to False when disabled and True when enabled; Null is never explicitly set. <br />When true, Dependabot will open PRs to support security updates for outdated dependencies. <br />Setting Dependabot enablement state is only supported for repo enablement and not org or project enablement at this time.
     */
    dependabotEnabled?: boolean;
    /**
     * Dependency Scanning Injection enablement status set to False when disabled and True when enabled; Null is never explicitly set. <br /> If Advanced Security is NOT already enabled, behavior will depend on if Advanced Security is to be enabled/disabled. DependencyScanningInjectionEnabled will not affect anything in this scenario. <br /> If Advanced Security is to be disabled, the value of DependencyScanningInjectionEnabled will have no effect. <br /> Setting Dependency Scanning enablement state is only supported for repo enablement and not org or project enablement at this time.
     */
    dependencyScanningInjectionEnabled?: boolean;
}

export interface EnablementOnCreateSettings {
    /**
     * Automatically enable Code Security on newly created repositories.
     */
    enableCodeSecurityOnCreate?: boolean;
    /**
     * Automatically enable Secret Protection on newly created repositories.
     */
    enableSecretProtectionOnCreate?: boolean;
}

/**
 * Information related to meter usage estimate for Code Security plan and/or Secret Protection plan
 */
export interface MeterUsageEstimate {
    /**
     * Meter usage estimate when enabling Code Security plan
     */
    codeSecurityMeterUsageEstimate?: BilledCommittersList;
    /**
     * Meter usage estimate when enabling Secret Protection plan
     */
    secretProtectionMeterUsageEstimate?: BilledCommittersList;
}

/**
 * Information related to meter usage for a Scanning plan
 */
export interface MeterUsageForPlan {
    /**
     * The Azure DevOps account
     */
    accountId?: string;
    azureSubscriptionId?: string;
    /**
     * The identityRef of committers that contributed to repositories with Scanning plan enabled
     */
    billedUsers?: BilledCommittersList;
    /**
     * The date this billing information pertains to
     */
    billingDate?: Date;
    /**
     * True when the Scanning plan is enabled in this organization
     */
    isPlanEnabled?: boolean;
    /**
     * The Azure subscription
     */
    tenantId?: string;
}

export interface OrgEnablementSettings {
    /**
     * Includes code security features that can be enabled.
     */
    codeSecurityFeatures?: CodeSecurityFeatures;
    /**
     * Auto enablement setting for newly created repositories.
     */
    enablementOnCreateSettings?: EnablementOnCreateSettings;
    /**
     * A list of enablement statuses for repositories within the specified organization or project.
     */
    reposEnablementStatus?: RepoEnablementSettings[];
    /**
     * Includes secret protection features that can be enabled.
     */
    secretProtectionFeatures?: SecretProtectionFeatures;
}

export enum Plan {
    /**
     * No plan is indicated
     */
    None = 0,
    /**
     * The Code Security plan
     */
    CodeSecurity = 1,
    /**
     * The Secret Protection plan
     */
    SecretProtection = 2,
    /**
     * Include all plans
     */
    All = 3,
}

export interface ProjectEnablementSettings {
    /**
     * Includes code security features that can be enabled.
     */
    codeSecurityFeatures?: CodeSecurityFeatures;
    /**
     * Auto enablement setting for newly created repositories.
     */
    enablementOnCreateSettings?: EnablementOnCreateSettings;
    /**
     * A list of enablement statuses for repositories within the specified organization or project.
     */
    reposEnablementStatus?: RepoEnablementSettings[];
    /**
     * Includes secret protection features that can be enabled.
     */
    secretProtectionFeatures?: SecretProtectionFeatures;
}

export interface RepoEnablementSettings {
    /**
     * Includes Code Security features that can be enabled.
     */
    codeSecurityFeatures?: CodeSecurityFeatures;
    /**
     * Indicates whether the repository is part of the bundled SKU (old billing plan) or unbundled SKUs (new billing plan).
     */
    isBundledSKU?: boolean;
    /**
     * The project Id
     */
    projectId?: string;
    /**
     * The repository Id
     */
    repositoryId?: string;
    /**
     * Includes Secret Protection features that can be enabled.
     */
    secretProtectionFeatures?: SecretProtectionFeatures;
}

export interface SecretProtectionFeatures {
    /**
     * When true, pushes containing secrets will be blocked. <br />When false, pushes are scanned for secrets and are not blocked. <br />If includeAllProperties in the request is false, this value will be null.
     */
    blockPushes?: boolean;
    /**
     * The VSID of the last user who modified the enablement status of Secret Protection.
     */
    secretProtectionChangedBy?: string;
    /**
     * Secret Protection enablement status set to False when disabled and True when enabled; Null is never explicitly set.
     */
    secretProtectionEnabled?: boolean;
    /**
     * The last time the status of Secret Protection for this repository was updated
     */
    secretProtectionEnablementLastChangedDate?: Date;
}

export var TypeInfo = {
    BillableCommitterDetails: <any>{
    },
    CodeSecurityFeatures: <any>{
    },
    MeterUsageForPlan: <any>{
    },
    OrgEnablementSettings: <any>{
    },
    Plan: {
        enumValues: {
            "codeSecurity": 1,
            "secretProtection": 2,
            "all": 3
        }
    },
    ProjectEnablementSettings: <any>{
    },
    RepoEnablementSettings: <any>{
    },
    SecretProtectionFeatures: <any>{
    },
};

TypeInfo.BillableCommitterDetails.fields = {
    commitTime: {
        isDate: true,
    },
    pushedTime: {
        isDate: true,
    }
};

TypeInfo.CodeSecurityFeatures.fields = {
    codeSecurityEnablementLastChangedDate: {
        isDate: true,
    }
};

TypeInfo.MeterUsageForPlan.fields = {
    billingDate: {
        isDate: true,
    }
};

TypeInfo.OrgEnablementSettings.fields = {
    codeSecurityFeatures: {
        typeInfo: TypeInfo.CodeSecurityFeatures
    },
    reposEnablementStatus: {
        isArray: true,
        typeInfo: TypeInfo.RepoEnablementSettings
    },
    secretProtectionFeatures: {
        typeInfo: TypeInfo.SecretProtectionFeatures
    }
};

TypeInfo.ProjectEnablementSettings.fields = {
    codeSecurityFeatures: {
        typeInfo: TypeInfo.CodeSecurityFeatures
    },
    reposEnablementStatus: {
        isArray: true,
        typeInfo: TypeInfo.RepoEnablementSettings
    },
    secretProtectionFeatures: {
        typeInfo: TypeInfo.SecretProtectionFeatures
    }
};

TypeInfo.RepoEnablementSettings.fields = {
    codeSecurityFeatures: {
        typeInfo: TypeInfo.CodeSecurityFeatures
    },
    secretProtectionFeatures: {
        typeInfo: TypeInfo.SecretProtectionFeatures
    }
};

TypeInfo.SecretProtectionFeatures.fields = {
    secretProtectionEnablementLastChangedDate: {
        isDate: true,
    }
};
