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



export interface Process extends ProcessReference {
    _links: any;
    description: string;
    id: string;
    isDefault: boolean;
    type: ProcessType;
}

export interface ProcessReference {
    name: string;
    url: string;
}

export enum ProcessType {
    System = 0,
    Custom = 1,
    Inherited = 2,
}

export var TypeInfo = {
    Process: {
        fields: <any>null
    },
    ProcessReference: {
        fields: <any>null
    },
    ProcessType: {
        enumValues: {
            "system": 0,
            "custom": 1,
            "inherited": 2,
        }
    },
};

TypeInfo.Process.fields = {
    type: {
        enumType: TypeInfo.ProcessType
    },
};

TypeInfo.ProcessReference.fields = {
};
