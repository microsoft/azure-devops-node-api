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

TypeInfo.ResourceRef.fields = {
};

TypeInfo.VssJsonCollectionWrapper.fields = {
};

TypeInfo.VssJsonCollectionWrapperV.fields = {
};

TypeInfo.VssJsonCollectionWrapperBase.fields = {
};