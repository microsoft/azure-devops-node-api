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



export enum DelegatedAppTokenType {
    Session = 0,
    App = 1,
}

export interface WebSessionToken {
    appId: string;
    extensionName: string;
    force: boolean;
    name: string;
    namedTokenId: string;
    publisherName: string;
    token: string;
    tokenType: DelegatedAppTokenType;
    validTo: Date;
}

export var TypeInfo = {
    DelegatedAppTokenType: {
        enumValues: {
            "session": 0,
            "app": 1,
        }
    },
    WebSessionToken: {
        fields: <any>null
    },
};

TypeInfo.WebSessionToken.fields = {
    tokenType: {
        enumType: TypeInfo.DelegatedAppTokenType
    },
    validTo: {
        isDate: true,
    },
};
