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



export interface AdminBehavior {
    abstract: boolean;
    color: string;
    custom: boolean;
    description: string;
    fields: AdminBehaviorField[];
    id: string;
    inherits: string;
    name: string;
    overriden: boolean;
    rank: number;
}

export interface AdminBehaviorField {
    behaviorFieldId: string;
    id: string;
    name: string;
}

export interface ProcessImportResult {
    helpUrl: string;
    id: string;
    promoteJobId: string;
    validationResults: ValidationIssue[];
}

export interface ProcessPromoteStatus {
    complete: number;
    id: string;
    message: string;
    pending: number;
    remainingRetries: number;
    successful: boolean;
}

export interface ValidationIssue {
    description: string;
    file: string;
    issueType: ValidationIssueType;
    line: number;
}

export enum ValidationIssueType {
    Warning = 0,
    Error = 1,
}

export var TypeInfo = {
    AdminBehavior: {
        fields: <any>null
    },
    AdminBehaviorField: {
        fields: <any>null
    },
    ProcessImportResult: {
        fields: <any>null
    },
    ProcessPromoteStatus: {
        fields: <any>null
    },
    ValidationIssue: {
        fields: <any>null
    },
    ValidationIssueType: {
        enumValues: {
            "warning": 0,
            "error": 1,
        }
    },
};

TypeInfo.AdminBehavior.fields = {
    fields: {
        isArray: true,
        typeInfo: TypeInfo.AdminBehaviorField
    },
};

TypeInfo.AdminBehaviorField.fields = {
};

TypeInfo.ProcessImportResult.fields = {
    validationResults: {
        isArray: true,
        typeInfo: TypeInfo.ValidationIssue
    },
};

TypeInfo.ProcessPromoteStatus.fields = {
};

TypeInfo.ValidationIssue.fields = {
    issueType: {
        enumType: TypeInfo.ValidationIssueType
    },
};
