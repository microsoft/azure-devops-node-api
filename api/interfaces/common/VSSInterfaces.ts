/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*
* See following wiki page for instructions on how to regenerate:
*   https://vsowiki.com/index.php?title=Rest_Client_Generation
*/

"use strict";

export interface IdentityRef {
    displayName: string;
    id: string;
    imageUrl: string;
    isAadIdentity: boolean;
    isContainer: boolean;
    profileUrl: string;
    uniqueName: string;
    url: string;
}

export interface JsonPatchDocument {
}

/**
 * The JSON model for a JSON Patch operation
 */
export interface JsonPatchOperation {
    /**
     * The path to copy from for the Move/Copy operation.
     */
    from: string;
    /**
     * The patch operation
     */
    op: Operation;
    /**
     * The path for the operation
     */
    path: string;
    /**
     * The value for the operation. This is either a primitive or a JToken.
     */
    value: any;
}

export enum Operation {
    Add = 0,
    Remove = 1,
    Replace = 2,
    Move = 3,
    Copy = 4,
    Test = 5,
}

export interface ResourceRef {
    id: string;
    url: string;
}

export interface VssJsonCollectionWrapper extends VssJsonCollectionWrapperBase {
    value: any[];
}

export interface VssJsonCollectionWrapperV<T> extends VssJsonCollectionWrapperBase {
    value: T;
}

export interface VssJsonCollectionWrapperBase {
    count: number;
}

export var TypeInfo = {
    IdentityRef: {
        fields: <any>null
    },
    JsonPatchDocument: {
        fields: <any>null
    },
    JsonPatchOperation: {
        fields: <any>null
    },
    Operation: {
        enumValues: {
            "add": 0,
            "remove": 1,
            "replace": 2,
            "move": 3,
            "copy": 4,
            "test": 5,
        }
    },
    OperationReference: {
        fields: <any>null
    },
    ResourceRef: {
        fields: <any>null
    },
    VssJsonCollectionWrapper: {
        fields: <any>null
    },
    VssJsonCollectionWrapperV: {
        fields: <any>null
    },
    VssJsonCollectionWrapperBase: {
        fields: <any>null
    },
};

TypeInfo.IdentityRef.fields = {
};

TypeInfo.JsonPatchDocument.fields = {
};

TypeInfo.JsonPatchOperation.fields = {
    op: {
        enumType: TypeInfo.Operation
    },
};

TypeInfo.OperationReference.fields = {
};

TypeInfo.ResourceRef.fields = {
};

TypeInfo.VssJsonCollectionWrapper.fields = {
};

TypeInfo.VssJsonCollectionWrapperV.fields = {
};

TypeInfo.VssJsonCollectionWrapperBase.fields = {
};