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



export enum SasRequestPermissions {
    None = 0,
    Read = 1,
    Write = 2,
    Delete = 4,
    List = 8,
    Add = 16,
    Create = 32,
    Verify = 32768,
    All = 32831,
}

export interface SasTokenInfo {
    expiration: any;
    permissions: SasRequestPermissions;
    resourceUri: string;
    sasToken: string;
}

export var TypeInfo = {
    SasRequestPermissions: {
        enumValues: {
            "none": 0,
            "read": 1,
            "write": 2,
            "delete": 4,
            "list": 8,
            "add": 16,
            "create": 32,
            "verify": 32768,
            "all": 32831,
        }
    },
    SasTokenInfo: {
        fields: <any>null
    },
};

TypeInfo.SasTokenInfo.fields = {
    permissions: {
        enumType: TypeInfo.SasRequestPermissions
    },
};
