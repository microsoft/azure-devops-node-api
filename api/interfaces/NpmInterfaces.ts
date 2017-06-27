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


export interface Package {
    _links: any;
    /**
     * Deprecated message, if any, for the package
     */
    deprecateMessage: string;
    id: string;
    /**
     * The display name of the package
     */
    name: string;
    /**
     * If and when the package was deleted
     */
    unpublishedDate: Date;
    /**
     * The version of the package
     */
    version: string;
}

export interface PackageVersionDetails {
    /**
     * Indicates the deprecate message of a package version
     */
    deprecateMessage: string;
    /**
     * The view to which the package version will be added
     */
    views: VSSInterfaces.JsonPatchOperation;
}

export var TypeInfo = {
    Package: <any>{
    },
    PackageVersionDetails: <any>{
    },
};

TypeInfo.Package.fields = {
    unpublishedDate: {
        isDate: true,
    }
};

TypeInfo.PackageVersionDetails.fields = {
    views: {
        typeInfo: VSSInterfaces.TypeInfo.JsonPatchOperation
    }
};
