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


export enum ComponentType {
    Unknown = 0,
    Other = 1,
    NuGet = 2,
    Npm = 3,
}

export interface ComponentVersionReference {
    comparisonName: string;
    comparisonVersion: string;
    componentId: string;
    displayName: string;
    displayVersion: string;
    type: ComponentType;
    versionId: string;
}

export enum EvaluationState {
    Error = 0,
    Initialized = 1,
    Processing = 2,
    Approved = 3,
    Rejected = 4,
    RequiresInformation = 5,
    Intervention = 6,
}

export interface Policy {
    configuration: PolicyConfiguration;
    evaluatorId: string;
    id: string;
    name: string;
    url: string;
}

export interface PolicyConfiguration {
    data: any;
    schemaVersion: number;
}

export interface PolicyEvaluationStatus {
    errorRetryable: boolean;
    evaluationState: EvaluationState;
    evaluationStateReason: string;
    modificationDate: Date;
    policyId: string;
}

export interface Product {
    id: string;
    metadata: { [key: string] : string; };
    name: string;
    policies: Policy[];
    url: string;
}

export interface Registration {
    componentVersionReference: ComponentVersionReference;
    createdDate: Date;
    evaluationStatuses: PolicyEvaluationStatus[];
    id: string;
    metadata: { [key: string] : string; };
    productId: string;
    registrationState: EvaluationState;
    requestedBy: VSSInterfaces.IdentityRef;
}

export interface RegistrationRequest {
    componentName: string;
    componentType: ComponentType;
    componentVersion: string;
    metadata: { [key: string] : string; };
}

export var TypeInfo = {
    ComponentType: {
        enumValues: {
            "unknown": 0,
            "other": 1,
            "nuGet": 2,
            "npm": 3,
        }
    },
    ComponentVersionReference: {
        fields: <any>null
    },
    EvaluationState: {
        enumValues: {
            "error": 0,
            "initialized": 1,
            "processing": 2,
            "approved": 3,
            "rejected": 4,
            "requiresInformation": 5,
            "intervention": 6,
        }
    },
    Policy: {
        fields: <any>null
    },
    PolicyConfiguration: {
        fields: <any>null
    },
    PolicyEvaluationStatus: {
        fields: <any>null
    },
    Product: {
        fields: <any>null
    },
    Registration: {
        fields: <any>null
    },
    RegistrationRequest: {
        fields: <any>null
    },
};

TypeInfo.ComponentVersionReference.fields = {
    type: {
        enumType: TypeInfo.ComponentType
    },
};

TypeInfo.Policy.fields = {
    configuration: {
        typeInfo: TypeInfo.PolicyConfiguration
    },
};

TypeInfo.PolicyConfiguration.fields = {
};

TypeInfo.PolicyEvaluationStatus.fields = {
    evaluationState: {
        enumType: TypeInfo.EvaluationState
    },
    modificationDate: {
        isDate: true,
    },
};

TypeInfo.Product.fields = {
    policies: {
        isArray: true,
        typeInfo: TypeInfo.Policy
    },
};

TypeInfo.Registration.fields = {
    componentVersionReference: {
        typeInfo: TypeInfo.ComponentVersionReference
    },
    createdDate: {
        isDate: true,
    },
    evaluationStatuses: {
        isArray: true,
        typeInfo: TypeInfo.PolicyEvaluationStatus
    },
    registrationState: {
        enumType: TypeInfo.EvaluationState
    },
    requestedBy: {
        typeInfo: VSSInterfaces.TypeInfo.IdentityRef
    },
};

TypeInfo.RegistrationRequest.fields = {
    componentType: {
        enumType: TypeInfo.ComponentType
    },
};
