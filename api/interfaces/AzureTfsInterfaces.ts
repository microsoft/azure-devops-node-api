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

import OperationsInterfaces = require("../interfaces/common/OperationsInterfaces");


export enum ClientType {
    Undefined = 0,
    Ibiza = 1,
}

export interface ContinuousDeploymentConfiguration {
    accountConfiguration: ResourceConfiguration;
    pipelineConfiguration: PipelineConfiguration;
    projectConfiguration: ResourceConfiguration;
    sourceConfiguration: SourceConfiguration;
    targetConfiguration: Property[];
    testConfiguration: Property[];
}

export interface ContinuousDeploymentOperation extends OperationsInterfaces.Operation {
    deploymentStepIds: Property[];
}

export interface PipelineConfiguration {
    clientType: ClientType;
    prodEnvironmentName: string;
    testEnvironmentName: string;
}

export interface Property {
    name: string;
    value: string;
}

export interface ResourceConfiguration {
    createIfNotFound: boolean;
    properties: Property[];
    resourceName: string;
}

export interface SourceConfiguration {
    sourceRepository: SourceRepository;
    sourceVersion: string;
}

export interface SourceRepository {
    identifier: string;
    /**
     * The properties cannot be IEnumerable/IList, since XML serializer does not work well with interfaces. This object gets passed as job parameter which uses XML serializer.
     */
    properties: Property[];
    repositoryType: SourceRepositoryType;
}

export enum SourceRepositoryType {
    Invalid = 0,
    VstsGit = 1,
    GitHub = 2,
    VstsTfvc = 3,
    ExternalGit = 4,
}

export var TypeInfo = {
    ClientType: {
        enumValues: {
            "undefined": 0,
            "ibiza": 1,
        }
    },
    ContinuousDeploymentConfiguration: {
        fields: <any>null
    },
    ContinuousDeploymentOperation: {
        fields: <any>null
    },
    PipelineConfiguration: {
        fields: <any>null
    },
    Property: {
        fields: <any>null
    },
    ResourceConfiguration: {
        fields: <any>null
    },
    SourceConfiguration: {
        fields: <any>null
    },
    SourceRepository: {
        fields: <any>null
    },
    SourceRepositoryType: {
        enumValues: {
            "invalid": 0,
            "vstsGit": 1,
            "gitHub": 2,
            "vstsTfvc": 3,
            "externalGit": 4,
        }
    },
};

TypeInfo.ContinuousDeploymentConfiguration.fields = {
    accountConfiguration: {
        typeInfo: TypeInfo.ResourceConfiguration
    },
    pipelineConfiguration: {
        typeInfo: TypeInfo.PipelineConfiguration
    },
    projectConfiguration: {
        typeInfo: TypeInfo.ResourceConfiguration
    },
    sourceConfiguration: {
        typeInfo: TypeInfo.SourceConfiguration
    },
    targetConfiguration: {
        isArray: true,
        typeInfo: TypeInfo.Property
    },
    testConfiguration: {
        isArray: true,
        typeInfo: TypeInfo.Property
    },
};

TypeInfo.ContinuousDeploymentOperation.fields = {
    deploymentStepIds: {
        isArray: true,
        typeInfo: TypeInfo.Property
    },
    status: {
        enumType: OperationsInterfaces.TypeInfo.OperationStatus
    },
};

TypeInfo.PipelineConfiguration.fields = {
    clientType: {
        enumType: TypeInfo.ClientType
    },
};

TypeInfo.Property.fields = {
};

TypeInfo.ResourceConfiguration.fields = {
    properties: {
        isArray: true,
        typeInfo: TypeInfo.Property
    },
};

TypeInfo.SourceConfiguration.fields = {
    sourceRepository: {
        typeInfo: TypeInfo.SourceRepository
    },
};

TypeInfo.SourceRepository.fields = {
    properties: {
        isArray: true,
        typeInfo: TypeInfo.Property
    },
    repositoryType: {
        enumType: TypeInfo.SourceRepositoryType
    },
};
