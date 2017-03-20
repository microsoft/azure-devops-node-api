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

export interface Authorization {
    accessIssued: Date;
    audience: string;
    authorizationId: string;
    identityId: string;
    isAccessUsed: boolean;
    isValid: boolean;
    redirectUri: string;
    registrationId: string;
    scopes: string;
    source: string;
    validFrom: Date;
    validTo: Date;
}

export interface AuthorizationDecision {
    authorization: Authorization;
    authorizationError: AuthorizationError;
    authorizationGrant: AuthorizationGrant;
    hasError: boolean;
    isAuthorized: boolean;
}

export interface AuthorizationDescription {
    clientRegistration: Registration;
    hasError: boolean;
    initiationError: InitiationError;
    scopeDescriptions: AuthorizationScopeDescription[];
}

export interface AuthorizationDetails {
    authorization: Authorization;
    clientRegistration: Registration;
    scopeDescriptions: AuthorizationScopeDescription[];
}

export enum AuthorizationError {
    None = 0,
    ClientIdRequired = 1,
    InvalidClientId = 2,
    ResponseTypeRequired = 3,
    ResponseTypeNotSupported = 4,
    ScopeRequired = 5,
    InvalidScope = 6,
    RedirectUriRequired = 7,
    InsecureRedirectUri = 8,
    InvalidRedirectUri = 9,
    InvalidUserId = 10,
    InvalidUserType = 11,
    AccessDenied = 12,
}

export interface AuthorizationGrant {
    grantType: GrantType;
}

export interface AuthorizationScopeDescription {
    description: string;
    market: string;
    title: string;
}

export enum ClientType {
    Confidential = 0,
    Public = 1,
    MediumTrust = 2,
    HighTrust = 3,
    FullTrust = 4,
}

export enum GrantType {
    None = 0,
    JwtBearer = 1,
    RefreshToken = 2,
    Implicit = 3,
    ClientCredentials = 4,
}

export interface HostAuthorization {
    hostId: string;
    id: string;
    isValid: boolean;
    registrationId: string;
}

export enum InitiationError {
    None = 0,
    ClientIdRequired = 1,
    InvalidClientId = 2,
    ResponseTypeRequired = 3,
    ResponseTypeNotSupported = 4,
    ScopeRequired = 5,
    InvalidScope = 6,
    RedirectUriRequired = 7,
    InsecureRedirectUri = 8,
    InvalidRedirectUri = 9,
}

export interface RefreshTokenGrant extends AuthorizationGrant {
    jwt: VSSInterfaces.JsonWebToken;
}

export interface Registration {
    clientType: ClientType;
    identityId: string;
    isValid: boolean;
    isWellKnown: boolean;
    organizationLocation: string;
    organizationName: string;
    /**
     * Raw cert data string from public key. This will be used for authenticating medium trust clients.
     */
    publicKey: string;
    redirectUris: string[];
    registrationDescription: string;
    registrationId: string;
    registrationLocation: string;
    registrationLogoSecureLocation: string;
    registrationName: string;
    registrationPrivacyStatementLocation: string;
    registrationTermsOfServiceLocation: string;
    responseTypes: string;
    scopes: string;
    secret: string;
    secretVersionId: string;
}

export enum ResponseType {
    None = 0,
    Assertion = 1,
    IdToken = 2,
    TenantPicker = 3,
    SignoutToken = 4,
    AppToken = 5,
    Code = 6,
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
    Authorization: {
        fields: <any>null
    },
    AuthorizationDecision: {
        fields: <any>null
    },
    AuthorizationDescription: {
        fields: <any>null
    },
    AuthorizationDetails: {
        fields: <any>null
    },
    AuthorizationError: {
        enumValues: {
            "none": 0,
            "clientIdRequired": 1,
            "invalidClientId": 2,
            "responseTypeRequired": 3,
            "responseTypeNotSupported": 4,
            "scopeRequired": 5,
            "invalidScope": 6,
            "redirectUriRequired": 7,
            "insecureRedirectUri": 8,
            "invalidRedirectUri": 9,
            "invalidUserId": 10,
            "invalidUserType": 11,
            "accessDenied": 12,
        }
    },
    AuthorizationGrant: {
        fields: <any>null
    },
    AuthorizationScopeDescription: {
        fields: <any>null
    },
    ClientType: {
        enumValues: {
            "confidential": 0,
            "public": 1,
            "mediumTrust": 2,
            "highTrust": 3,
            "fullTrust": 4,
        }
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
    HostAuthorization: {
        fields: <any>null
    },
    InitiationError: {
        enumValues: {
            "none": 0,
            "clientIdRequired": 1,
            "invalidClientId": 2,
            "responseTypeRequired": 3,
            "responseTypeNotSupported": 4,
            "scopeRequired": 5,
            "invalidScope": 6,
            "redirectUriRequired": 7,
            "insecureRedirectUri": 8,
            "invalidRedirectUri": 9,
        }
    },
    RefreshTokenGrant: {
        fields: <any>null
    },
    Registration: {
        fields: <any>null
    },
    ResponseType: {
        enumValues: {
            "none": 0,
            "assertion": 1,
            "idToken": 2,
            "tenantPicker": 3,
            "signoutToken": 4,
            "appToken": 5,
            "code": 6,
        }
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

TypeInfo.Authorization.fields = {
    accessIssued: {
        isDate: true,
    },
    validFrom: {
        isDate: true,
    },
    validTo: {
        isDate: true,
    },
};

TypeInfo.AuthorizationDecision.fields = {
    authorization: {
        typeInfo: TypeInfo.Authorization
    },
    authorizationError: {
        enumType: TypeInfo.AuthorizationError
    },
    authorizationGrant: {
        typeInfo: TypeInfo.AuthorizationGrant
    },
};

TypeInfo.AuthorizationDescription.fields = {
    clientRegistration: {
        typeInfo: TypeInfo.Registration
    },
    initiationError: {
        enumType: TypeInfo.InitiationError
    },
    scopeDescriptions: {
        isArray: true,
        typeInfo: TypeInfo.AuthorizationScopeDescription
    },
};

TypeInfo.AuthorizationDetails.fields = {
    authorization: {
        typeInfo: TypeInfo.Authorization
    },
    clientRegistration: {
        typeInfo: TypeInfo.Registration
    },
    scopeDescriptions: {
        isArray: true,
        typeInfo: TypeInfo.AuthorizationScopeDescription
    },
};

TypeInfo.AuthorizationGrant.fields = {
    grantType: {
        enumType: TypeInfo.GrantType
    },
};

TypeInfo.AuthorizationScopeDescription.fields = {
};

TypeInfo.HostAuthorization.fields = {
};

TypeInfo.RefreshTokenGrant.fields = {
    grantType: {
        enumType: TypeInfo.GrantType
    },
    jwt: {
        typeInfo: VSSInterfaces.TypeInfo.JsonWebToken
    },
};

TypeInfo.Registration.fields = {
    clientType: {
        enumType: TypeInfo.ClientType
    },
};
