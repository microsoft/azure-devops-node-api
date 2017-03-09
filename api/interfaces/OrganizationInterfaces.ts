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



export interface Collection {
    data: { [key: string] : any; };
    dateCreated: Date;
    /**
     * Identifier for a collection under an organization
     */
    id: string;
    lastUpdated: Date;
    /**
     * The unqiue name of collection under an organziation
     */
    name: string;
    owner: string;
    preferredRegion: string;
    /**
     * Extended properties
     */
    properties: any;
    status: CollectionStatus;
}

export enum CollectionStatus {
    Unknown = 0,
    Initial = 10,
    Enabled = 20,
    LogicallyDeleted = 30,
    MarkedForPhysicalDelete = 40,
}

export interface Organization {
    collections: Collection[];
    creatorId: string;
    data: { [key: string] : any; };
    dateCreated: Date;
    /**
     * Identifier for an Organization
     */
    id: string;
    isActivated: boolean;
    lastUpdated: Date;
    name: string;
    primaryCollection: Collection;
    /**
     * Extended properties
     */
    properties: any;
    status: OrganizationStatus;
    tenantId: string;
    type: OrganizationType;
}

export interface OrganizationMigrationBlob {
    blobAsJson: string;
    id: string;
}

export enum OrganizationSearchKind {
    Unknown = 0,
    ById = 1,
    ByName = 2,
    ByTenantId = 3,
}

export enum OrganizationStatus {
    Unknown = 0,
    Initial = 10,
    Enabled = 20,
    MarkedForDelete = 30,
}

export enum OrganizationType {
    Unknown = 0,
    Personal = 1,
    Work = 2,
}

export interface Policy {
    effectiveValue: any;
    enforce: boolean;
    isValueUndefined: boolean;
    name: string;
    parentPolicy: Policy;
    value: any;
}

export interface PolicyInfo {
    description: string;
    moreInfoLink: string;
    name: string;
}

export interface Region {
    /**
     * Display name for the region.
     */
    displayName: string;
    /**
     * Name identifier for the region.
     */
    name: string;
}

export var TypeInfo = {
    Collection: {
        fields: <any>null
    },
    CollectionStatus: {
        enumValues: {
            "unknown": 0,
            "initial": 10,
            "enabled": 20,
            "logicallyDeleted": 30,
            "markedForPhysicalDelete": 40,
        }
    },
    Organization: {
        fields: <any>null
    },
    OrganizationMigrationBlob: {
        fields: <any>null
    },
    OrganizationSearchKind: {
        enumValues: {
            "unknown": 0,
            "byId": 1,
            "byName": 2,
            "byTenantId": 3,
        }
    },
    OrganizationStatus: {
        enumValues: {
            "unknown": 0,
            "initial": 10,
            "enabled": 20,
            "markedForDelete": 30,
        }
    },
    OrganizationType: {
        enumValues: {
            "unknown": 0,
            "personal": 1,
            "work": 2,
        }
    },
    Policy: {
        fields: <any>null
    },
    PolicyInfo: {
        fields: <any>null
    },
    Region: {
        fields: <any>null
    },
};

TypeInfo.Collection.fields = {
    dateCreated: {
        isDate: true,
    },
    lastUpdated: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.CollectionStatus
    },
};

TypeInfo.Organization.fields = {
    collections: {
        isArray: true,
        typeInfo: TypeInfo.Collection
    },
    dateCreated: {
        isDate: true,
    },
    lastUpdated: {
        isDate: true,
    },
    primaryCollection: {
        typeInfo: TypeInfo.Collection
    },
    status: {
        enumType: TypeInfo.OrganizationStatus
    },
    type: {
        enumType: TypeInfo.OrganizationType
    },
};

TypeInfo.OrganizationMigrationBlob.fields = {
};

TypeInfo.Policy.fields = {
    parentPolicy: {
        typeInfo: TypeInfo.Policy
    },
};

TypeInfo.PolicyInfo.fields = {
};

TypeInfo.Region.fields = {
};
