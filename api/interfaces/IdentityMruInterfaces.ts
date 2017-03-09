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



export interface JsonPatchOperationData<T> {
    op: string;
    path: string;
    value: T;
}

export interface MruIdentitiesUpdateData extends JsonPatchOperationData<string[]> {
}

export var TypeInfo = {
    JsonPatchOperationData: {
        fields: <any>null
    },
    MruIdentitiesUpdateData: {
        fields: <any>null
    },
};

TypeInfo.JsonPatchOperationData.fields = {
};

TypeInfo.MruIdentitiesUpdateData.fields = {
};
