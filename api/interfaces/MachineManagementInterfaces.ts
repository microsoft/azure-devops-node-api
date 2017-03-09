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



export interface FriendlyImageName {
    id: number;
    imageName: string;
    isDefault: boolean;
}

export interface MachineConfiguration {
    data: number[];
    settingsJSON: string;
    thumbprint: string;
    thumbprintAlgorithm: string;
    url: string;
}

export interface MachineConfigurationResponse {
    authConfiguration: MachineConfiguration;
    settingsConfiguration: MachineConfiguration;
}

/**
 * Represents an individual machine instance within a machine pool managed by a Team Foundation Server.
 */
export interface MachineInstance {
    /**
     * Gets the current token used for authentication to the server.
     */
    accessToken: number[];
    /**
     * Gets a value indicating whether or not the instance is current connected.
     */
    connected: boolean;
    /**
     * Gets the date on which this instance last initiated a connection with the server.
     */
    connectedOn: Date;
    /**
     * Gets the date on which this instance was originally created.
     */
    createdOn: Date;
    /**
     * Gets the date on which this instance lost connectivity with the server.
     */
    disconnectedOn: Date;
    /**
     * Gets a value indicating whether or not this instance is currently enabled.
     */
    enabled: boolean;
    factoryDiskId: number;
    /**
     * Gets the name of the image which is currently in use.
     */
    imageName: string;
    /**
     * Gets the version of the image which is currently in use.
     */
    imageVersion: string;
    /**
     * Gets the name of the machine instance.
     */
    instanceName: string;
    oSDiskId: number;
    /**
     * Gets or sets a collection of properties which may be used to extend the storage fields available for a given machine instance.
     */
    properties: any;
    /**
     * Gets the name of the message queue used for communication to the machine.
     */
    queueName: string;
    /**
     * Gets the date on which this instance was registered by a given computer.
     */
    registeredOn: Date;
    requestId: number;
    /**
     * Gets a value indicating the current status of the instance.
     */
    state: string;
    storageAccountId: number;
}

export interface MachineInstanceMessage {
    body: string;
    messageId: number;
    messageType: string;
}

/**
 * Represents a pool of machines managed by Machine Management Service
 */
export interface MachinePool {
    /**
     * Setting to false takes this Machine Pool out of the rotation and will cause no more Machine Requests to get routed to it.
     */
    enabled: boolean;
    /**
     * Gets or sets the image name to use when provisioning new machine instances in the pool.
     */
    imageName: string;
    imageVersion: string;
    /**
     * Gets or sets the configured number of machines available in the machine pool.
     */
    machineCount: number;
    /**
     * Gets or sets the deallocated number of machines available in the machine pool.
     */
    maxMachineCount: number;
    /**
     * Gets the identifier of the operation which is currently active on the machine pool.
     */
    operationId: string;
    /**
     * Gets the name of the operation which is currently queued or active on the machine pool.
     */
    operationName: string;
    performanceTier: string;
    /**
     * Gets the name of the machine pool.
     */
    poolName: string;
    /**
     * Gets the type of the machine pool.
     */
    poolType: string;
    /**
     * Gets or sets a collection of properties which may be used to extend the storage fields available for a given machine pool.
     */
    properties: any;
    region: string;
    /**
     * Gets or sets the default maximum request duration. Requests which run beyond this value will be forcefully canceled and the machine or machines running the request will be reclaimed by the pool.
     */
    requestTimeout: any;
    resourceGroupData: string;
    resourceGroupIdentifier: string;
    resourceProviderType: string;
    runPoolOrchestrationId: string;
    /**
     * Gets the current status of the machine pool.
     */
    state: string;
}

export interface MachinePoolEvent {
    content: { [key: string] : any; };
    createdOn: Date;
    eventId: string;
    eventName: string;
    instanceName: string;
}

export interface MachineRegistrationResponseData {
    machineInstance: MachineInstance;
    machinePool: MachinePool;
    machineRequestTypes: MachineRequestType[];
}

export interface MachineRequest {
    assignedResourceVersion: string;
    /**
     * Gets the time which this request was assigned to a machine.
     */
    assignedTime: Date;
    assignmentAttempts: number;
    /**
     * Gets the time at which the request completed execution on a machine.
     */
    finishTime: Date;
    /**
     * Gets the identifier of the host which this request targets.
     */
    hostId: string;
    /**
     * Gets the fully-qualified URL of the host which this request targets.
     */
    hostUri: string;
    /**
     * Gets the custom inputs provided to the request.
     */
    inputs: { [key: string] : string; };
    isScheduled: boolean;
    maxParallelism: number;
    /**
     * Gets the final outcome of the request.
     */
    outcome: MachineRequestOutcome;
    /**
     * Gets the set of custom outputs, if any, provided by the machine runtime.
     */
    outputs: { [key: string] : string; };
    /**
     * Gets the name of the machine pool which this request targets.
     */
    poolName: string;
    /**
     * Gets the type of machine pool which this request targets.
     */
    poolType: string;
    /**
     * Gets the time which this request was queued.
     */
    queuedTime: Date;
    /**
     * Gets the identifier for this request.
     */
    requestId: number;
    requestType: string;
    requiredResourceVersion: string;
    serviceOwner: string;
    /**
     * Gets the time at which the request began execution on a machine.
     */
    startTime: Date;
    /**
     * Gets or sets the maximum amount of time the request is allowed to execute. If no value is specified the default value is inherited from the machine pool.
     */
    timeout: any;
    /**
     * Gets the unique trace activity identifier for correlating activity across subsystems.
     */
    traceActivityId: string;
    /**
     * Gets the time at which the request was from a machine.
     */
    unassignedTime: Date;
}

export enum MachineRequestOutcome {
    /**
     * Machine was not properly cleaned up
     */
    CleanupFailure = 2,
    /**
     * Request failed
     */
    Failure = 1,
    /**
     * Request was completely successful
     */
    Success = 0,
    /**
     * Request took too long and the machine was reclaimed
     */
    Timeout = 3,
    /**
     * A minor problem occurred
     */
    Warning = 4,
    /**
     * The machine request was killed by the server during machine registration
     */
    Disconnect = 5,
    /**
     * A failure not caused by MMS Infrastructure, can optionally be used by provisioner plugins to tag and track certain types of plugin specific failures.
     */
    NonInfrastructureFailure = 6,
    /**
     * The Machine Request was cancelled by the consuming system in the MachineRequestAssigned callback
     */
    Canceled = 7,
}

export interface MachineRequestResource {
    containerId: number;
    poolType: string;
    requestType: string;
    resourceId: number;
    resourceVersion: string;
    state: MachineRequestResourceState;
}

export enum MachineRequestResourceState {
    Created = 0,
    Downloading = 1,
    Available = 2,
}

export interface MachineRequestResult {
    cleanupDuration: any;
    outcome: MachineRequestOutcome;
    outputs: { [key: string] : string; };
    queuedDuration: any;
    runDuration: any;
    setupDuration: any;
}

export interface MachineRequestType {
    allowMultipleRequestsOfTypePerHost: boolean;
    description: string;
    name: string;
    properties: any;
}

export enum RequestState {
    Start = 0,
    Finish = 1,
}

export interface RequestStateData {
    accessToken: number[];
    instanceName: string;
    result: MachineRequestResult;
    state: RequestState;
}

export var TypeInfo = {
    FriendlyImageName: {
        fields: <any>null
    },
    MachineConfiguration: {
        fields: <any>null
    },
    MachineConfigurationResponse: {
        fields: <any>null
    },
    MachineInstance: {
        fields: <any>null
    },
    MachineInstanceMessage: {
        fields: <any>null
    },
    MachinePool: {
        fields: <any>null
    },
    MachinePoolEvent: {
        fields: <any>null
    },
    MachineRegistrationResponseData: {
        fields: <any>null
    },
    MachineRequest: {
        fields: <any>null
    },
    MachineRequestOutcome: {
        enumValues: {
            "cleanupFailure": 2,
            "failure": 1,
            "success": 0,
            "timeout": 3,
            "warning": 4,
            "disconnect": 5,
            "nonInfrastructureFailure": 6,
            "canceled": 7,
        }
    },
    MachineRequestResource: {
        fields: <any>null
    },
    MachineRequestResourceState: {
        enumValues: {
            "created": 0,
            "downloading": 1,
            "available": 2,
        }
    },
    MachineRequestResult: {
        fields: <any>null
    },
    MachineRequestType: {
        fields: <any>null
    },
    RequestState: {
        enumValues: {
            "start": 0,
            "finish": 1,
        }
    },
    RequestStateData: {
        fields: <any>null
    },
};

TypeInfo.FriendlyImageName.fields = {
};

TypeInfo.MachineConfiguration.fields = {
};

TypeInfo.MachineConfigurationResponse.fields = {
    authConfiguration: {
        typeInfo: TypeInfo.MachineConfiguration
    },
    settingsConfiguration: {
        typeInfo: TypeInfo.MachineConfiguration
    },
};

TypeInfo.MachineInstance.fields = {
    connectedOn: {
        isDate: true,
    },
    createdOn: {
        isDate: true,
    },
    disconnectedOn: {
        isDate: true,
    },
    registeredOn: {
        isDate: true,
    },
};

TypeInfo.MachineInstanceMessage.fields = {
};

TypeInfo.MachinePool.fields = {
};

TypeInfo.MachinePoolEvent.fields = {
    createdOn: {
        isDate: true,
    },
};

TypeInfo.MachineRegistrationResponseData.fields = {
    machineInstance: {
        typeInfo: TypeInfo.MachineInstance
    },
    machinePool: {
        typeInfo: TypeInfo.MachinePool
    },
    machineRequestTypes: {
        isArray: true,
        typeInfo: TypeInfo.MachineRequestType
    },
};

TypeInfo.MachineRequest.fields = {
    assignedTime: {
        isDate: true,
    },
    finishTime: {
        isDate: true,
    },
    outcome: {
        enumType: TypeInfo.MachineRequestOutcome
    },
    queuedTime: {
        isDate: true,
    },
    startTime: {
        isDate: true,
    },
    unassignedTime: {
        isDate: true,
    },
};

TypeInfo.MachineRequestResource.fields = {
    state: {
        enumType: TypeInfo.MachineRequestResourceState
    },
};

TypeInfo.MachineRequestResult.fields = {
    outcome: {
        enumType: TypeInfo.MachineRequestOutcome
    },
};

TypeInfo.MachineRequestType.fields = {
};

TypeInfo.RequestStateData.fields = {
    result: {
        typeInfo: TypeInfo.MachineRequestResult
    },
    state: {
        enumType: TypeInfo.RequestState
    },
};
