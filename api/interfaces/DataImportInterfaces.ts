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



export interface ActivateDataImportRequest extends FrameworkDataImportRequest {
    /**
     * Which host (if any should be moved) the move should have already happened.
     */
    hostToMovePostImport: DataImportHostMove;
    /**
     * Tells to preserve registry settings for this import (used later during the dry-run import removal)
     */
    keepRegistryData: boolean;
    /**
     * Dry Run or Production Run
     */
    runType: DataImportRunType;
    /**
     * When moving the Account to the Target Database, the Target Database will be preserved And will need to be downgraded, this is the size to downgrade it too. It should be values from DatabaseServiceObjective enum
     */
    targetDatabaseDowngradeSize: string;
}

export interface DatabaseDataImportRequest extends FrameworkDataImportRequest {
    /**
     * Read only connection string to the source database.
     */
    connectionString: string;
    /**
     * Which host (if any should be moved) the move will happen later.
     */
    hostToMovePostImport: DataImportHostMove;
    /**
     * When HostToMovePostImport is Both, this is the Host Id that will be used to select Database to move them too.
     */
    neighborHostId: string;
    /**
     * Dry Run or Production Run
     */
    runType: DataImportRunType;
    /**
     * When true, the file content is imported, otherwise empty files will be created.
     */
    skipFileContentImport: boolean;
    /**
     * When true, no post import validation checks are done.
     */
    skipPostImportValidation: boolean;
}

export interface DataImportDehydrateRequest extends FrameworkDataImportRequest {
}

export enum DataImportHostMove {
    /**
     * Make no host move (SPS for example)
     */
    None = 0,
    /**
     * Move the Account from the golden database to the target database that is holding their Collection Host (Large TFS Customer that we want to leaving in a "single" tenant database)
     */
    Account = 2,
    /**
     * Move the Collection host back into the golden database from the target database (Small Customers that don't need to be in a "single" tenant database)
     */
    Collection = 4,
    /**
     * Move the Collection And Account hosts to existing database (Large TFS Customer that we want to group many of their collections into a single Database)
     */
    Both = 6,
}

export interface DataImportRequestStatus extends ServicingOrchestrationRequestStatus {
}

export enum DataImportRunType {
    None = 0,
    DryRun = 1,
    ProductionRun = 2,
}

export interface FrameworkDataImportRequest extends FrameworkServicingOrchestrationRequest {
}

export interface FrameworkServicingOrchestrationRequest extends ServicingOrchestrationRequest {
    /**
     * Host Id this request is targeting
     */
    hostId: string;
}

export interface HostMoveDataImportRequest extends FrameworkDataImportRequest {
    /**
     * Host Id of the collection we are importing. OBSOLETE (remove after M100)  TODO: TAKS 625726 - remove in M105
     */
    collectionHostId: string;
    /**
     * Which host to move during this request
     */
    hostToMove: DataImportHostMove;
    /**
     * Describes which host (or hosts) will be moved during the entire import.
     */
    hostToMovePostImport: DataImportHostMove;
    /**
     * When HostToMovePostImport is Both, this is the Host Id that will be used to select Database to move them too.
     */
    neighborHostId: string;
}

export interface PropertyCollection {
}

export interface PropertyPair {
    name: string;
    value: string;
}

export interface RemoveDataImportRequest extends FrameworkDataImportRequest {
    /**
     * When "true" would perform removal even if import successfully completed
     */
    ignoreImportStatus: boolean;
}

export interface ServicingOrchestrationRequest {
    /**
     * The Servicing Job Id used to process this particular request
     */
    jobId: string;
    /**
     * Property bag for the custom data
     */
    properties: PropertyCollection;
    /**
     * Id of the import request (MUST be the same for all activities of the particular import)
     */
    requestId: string;
    /**
     * Full type name of the payload used to construct proper object during the deserialization
     */
    typeName: string;
}

export interface ServicingOrchestrationRequestStatus {
    completedDate: Date;
    completedStepCount: number;
    createdDate: Date;
    properties: PropertyCollection;
    requestId: string;
    servicingJobId: string;
    startDate: Date;
    status: ServicingOrchestrationStatus;
    statusMessage: string;
    totalStepCount: number;
}

export enum ServicingOrchestrationStatus {
    Created = 0,
    Queued = 1,
    Running = 2,
    Completed = 3,
    Failed = 4,
}

export var TypeInfo = {
    ActivateDataImportRequest: {
        fields: <any>null
    },
    DatabaseDataImportRequest: {
        fields: <any>null
    },
    DataImportDehydrateRequest: {
        fields: <any>null
    },
    DataImportHostMove: {
        enumValues: {
            "none": 0,
            "account": 2,
            "collection": 4,
            "both": 6,
        }
    },
    DataImportRequestStatus: {
        fields: <any>null
    },
    DataImportRunType: {
        enumValues: {
            "none": 0,
            "dryRun": 1,
            "productionRun": 2,
        }
    },
    FrameworkDataImportRequest: {
        fields: <any>null
    },
    FrameworkServicingOrchestrationRequest: {
        fields: <any>null
    },
    HostMoveDataImportRequest: {
        fields: <any>null
    },
    PropertyCollection: {
        fields: <any>null
    },
    PropertyPair: {
        fields: <any>null
    },
    RemoveDataImportRequest: {
        fields: <any>null
    },
    ServicingOrchestrationRequest: {
        fields: <any>null
    },
    ServicingOrchestrationRequestStatus: {
        fields: <any>null
    },
    ServicingOrchestrationStatus: {
        enumValues: {
            "created": 0,
            "queued": 1,
            "running": 2,
            "completed": 3,
            "failed": 4,
        }
    },
};

TypeInfo.ActivateDataImportRequest.fields = {
    hostToMovePostImport: {
        enumType: TypeInfo.DataImportHostMove
    },
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
    runType: {
        enumType: TypeInfo.DataImportRunType
    },
};

TypeInfo.DatabaseDataImportRequest.fields = {
    hostToMovePostImport: {
        enumType: TypeInfo.DataImportHostMove
    },
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
    runType: {
        enumType: TypeInfo.DataImportRunType
    },
};

TypeInfo.DataImportDehydrateRequest.fields = {
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
};

TypeInfo.DataImportRequestStatus.fields = {
    completedDate: {
        isDate: true,
    },
    createdDate: {
        isDate: true,
    },
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
    startDate: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.ServicingOrchestrationStatus
    },
};

TypeInfo.FrameworkDataImportRequest.fields = {
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
};

TypeInfo.FrameworkServicingOrchestrationRequest.fields = {
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
};

TypeInfo.HostMoveDataImportRequest.fields = {
    hostToMove: {
        enumType: TypeInfo.DataImportHostMove
    },
    hostToMovePostImport: {
        enumType: TypeInfo.DataImportHostMove
    },
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
};

TypeInfo.PropertyCollection.fields = {
};

TypeInfo.PropertyPair.fields = {
};

TypeInfo.RemoveDataImportRequest.fields = {
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
};

TypeInfo.ServicingOrchestrationRequest.fields = {
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
};

TypeInfo.ServicingOrchestrationRequestStatus.fields = {
    completedDate: {
        isDate: true,
    },
    createdDate: {
        isDate: true,
    },
    properties: {
        typeInfo: TypeInfo.PropertyCollection
    },
    startDate: {
        isDate: true,
    },
    status: {
        enumType: TypeInfo.ServicingOrchestrationStatus
    },
};
