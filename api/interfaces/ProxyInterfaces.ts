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

import IdentitiesInterfaces = require("../interfaces/IdentitiesInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");


export interface Proxy {
    authorization: ProxyAuthorization;
    /**
     * This is a description string
     */
    description: string;
    /**
     * The friendly name of the server
     */
    friendlyName: string;
    globalDefault: boolean;
    /**
     * This is a string representation of the site that the proxy server is located in (e.g. "NA-WA-RED")
     */
    site: string;
    siteDefault: boolean;
    /**
     * The URL of the proxy server
     */
    url: string;
}

export interface ProxyAuthorization {
    /**
     * Gets or sets the endpoint used to obtain access tokens from the configured token service.
     */
    authorizationUrl: string;
    /**
     * Gets or sets the client identifier for this proxy.
     */
    clientId: string;
    /**
     * Gets or sets the user identity to authorize for on-prem.
     */
    identity: IdentitiesInterfaces.IdentityDescriptor;
    /**
     * Gets or sets the public key used to verify the identity of this proxy. Only specify on hosted.
     */
    publicKey: VSSInterfaces.PublicKey;
}

export var TypeInfo = {
    Proxy: {
        fields: <any>null
    },
    ProxyAuthorization: {
        fields: <any>null
    },
};

TypeInfo.Proxy.fields = {
    authorization: {
        typeInfo: TypeInfo.ProxyAuthorization
    },
};

TypeInfo.ProxyAuthorization.fields = {
    identity: {
        typeInfo: IdentitiesInterfaces.TypeInfo.IdentityDescriptor
    },
    publicKey: {
        typeInfo: VSSInterfaces.TypeInfo.PublicKey
    },
};
