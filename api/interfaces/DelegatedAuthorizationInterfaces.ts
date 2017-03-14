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


export interface AccessTokenResult {
    accessToken: VSSInterfaces.JsonWebToken;
    accessTokenError: TokenError;
    authorizationId: string;
    errorDescription: string;
    hasError: boolean;
    refreshToken: RefreshTokenGrant;
    tokenType: string;
    validTo: Date;
}

export interface AuthorizationGrant {
    grantType: GrantType;
}

export enum GrantType {
    None = 0,
    JwtBearer = 1,
    RefreshToken = 2,
    Implicit = 3,
    ClientCredentials = 4,
}

export interface RefreshTokenGrant extends AuthorizationGrant {
    jwt: VSSInterfaces.JsonWebToken;
}

export enum TokenError {
    None = 0,
    GrantTypeRequired = 1,
    AuthorizationGrantRequired = 2,
    ClientSecretRequired = 3,
    RedirectUriRequired = 4,
    InvalidAuthorizationGrant = 5,
    InvalidAuthorizationScopes = 6,
    InvalidRefreshToken = 7,
    AuthorizationNotFound = 8,
    AuthorizationGrantExpired = 9,
    AccessAlreadyIssued = 10,
    InvalidRedirectUri = 11,
    AccessTokenNotFound = 12,
    InvalidAccessToken = 13,
    AccessTokenAlreadyRefreshed = 14,
    InvalidClientSecret = 15,
    ClientSecretExpired = 16,
    ServerError = 17,
    AccessDenied = 18,
    AccessTokenKeyRequired = 19,
    InvalidAccessTokenKey = 20,
    FailedToGetAccessToken = 21,
    InvalidClientId = 22,
    InvalidClient = 23,
    InvalidValidTo = 24,
    InvalidUserId = 25,
    FailedToIssueAccessToken = 26,
    AuthorizationGrantScopeMissing = 27,
    InvalidPublicAccessTokenKey = 28,
    InvalidPublicAccessToken = 29,
}

export var TypeInfo = {
    AccessTokenResult: {
        fields: <any>null
    },
    AuthorizationGrant: {
        fields: <any>null
    },
    GrantType: {
        enumValues: {
            "none": 0,
            "jwtBearer": 1,
            "refreshToken": 2,
            "implicit": 3,
            "clientCredentials": 4,
        }
    },
    RefreshTokenGrant: {
        fields: <any>null
    },
    TokenError: {
        enumValues: {
            "none": 0,
            "grantTypeRequired": 1,
            "authorizationGrantRequired": 2,
            "clientSecretRequired": 3,
            "redirectUriRequired": 4,
            "invalidAuthorizationGrant": 5,
            "invalidAuthorizationScopes": 6,
            "invalidRefreshToken": 7,
            "authorizationNotFound": 8,
            "authorizationGrantExpired": 9,
            "accessAlreadyIssued": 10,
            "invalidRedirectUri": 11,
            "accessTokenNotFound": 12,
            "invalidAccessToken": 13,
            "accessTokenAlreadyRefreshed": 14,
            "invalidClientSecret": 15,
            "clientSecretExpired": 16,
            "serverError": 17,
            "accessDenied": 18,
            "accessTokenKeyRequired": 19,
            "invalidAccessTokenKey": 20,
            "failedToGetAccessToken": 21,
            "invalidClientId": 22,
            "invalidClient": 23,
            "invalidValidTo": 24,
            "invalidUserId": 25,
            "failedToIssueAccessToken": 26,
            "authorizationGrantScopeMissing": 27,
            "invalidPublicAccessTokenKey": 28,
            "invalidPublicAccessToken": 29,
        }
    },
};

TypeInfo.AccessTokenResult.fields = {
    accessToken: {
        typeInfo: VSSInterfaces.TypeInfo.JsonWebToken
    },
    accessTokenError: {
        enumType: TypeInfo.TokenError
    },
    refreshToken: {
        typeInfo: TypeInfo.RefreshTokenGrant
    },
    validTo: {
        isDate: true,
    },
};

TypeInfo.AuthorizationGrant.fields = {
    grantType: {
        enumType: TypeInfo.GrantType
    },
};

TypeInfo.RefreshTokenGrant.fields = {
    grantType: {
        enumType: TypeInfo.GrantType
    },
    jwt: {
        typeInfo: VSSInterfaces.TypeInfo.JsonWebToken
    },
};
