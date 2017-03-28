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


export interface PolicyConfiguration extends VersionedPolicyConfigurationRef {
    _links: any;
    createdBy: VSSInterfaces.IdentityRef;
    createdDate: Date;
    isBlocking: boolean;
    isDeleted: boolean;
    isEnabled: boolean;
    settings: any;
}

export interface PolicyConfigurationRef {
    id: number;
    type: PolicyTypeRef;
    url: string;
}

export interface PolicyEvaluationRecord {
    _links: any;
    artifactId: string;
    completedDate: Date;
    configuration: PolicyConfiguration;
    context: any;
    evaluationId: string;
    startedDate: Date;
    status: PolicyEvaluationStatus;
}

export enum PolicyEvaluationStatus {
    Queued = 0,
    Running = 1,
    Approved = 2,
    Rejected = 3,
    NotApplicable = 4,
    Broken = 5,
}

export interface PolicyType extends PolicyTypeRef {
    _links: any;
    description: string;
}

export interface PolicyTypeRef {
    displayName: string;
    id: string;
    url: string;
}

export interface VersionedPolicyConfigurationRef extends PolicyConfigurationRef {
    revision: number;
}

export var TypeInfo = {
    PolicyConfiguration: <any>{
    },
    PolicyEvaluationRecord: <any>{
    },
    PolicyEvaluationStatus: {
        enumValues: {
            "queued": 0,
            "running": 1,
            "approved": 2,
            "rejected": 3,
            "notApplicable": 4,
            "broken": 5
        }
    },
};

TypeInfo.PolicyConfiguration.fields = {
    createdDate: {
        isDate: true,
    },
};

TypeInfo.PolicyEvaluationRecord.fields = {
    completedDate: {
        isDate: true,
    },
    configuration: {
        typeInfo: TypeInfo.PolicyConfiguration
    },
    startedDate: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.PolicyEvaluationStatus
    },
};
