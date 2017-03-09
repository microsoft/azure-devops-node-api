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



export interface Policy {
    effectiveValue: any;
    enforce: boolean;
    isValueUndefined: boolean;
    name: string;
    parentPolicy: Policy;
    value: any;
}

export interface PolicyInfo {
    description: string;
    moreInfoLink: string;
    name: string;
}

export var TypeInfo = {
    Policy: {
        fields: <any>null
    },
    PolicyInfo: {
        fields: <any>null
    },
};

TypeInfo.Policy.fields = {
    parentPolicy: {
        typeInfo: TypeInfo.Policy
    },
};

TypeInfo.PolicyInfo.fields = {
};
