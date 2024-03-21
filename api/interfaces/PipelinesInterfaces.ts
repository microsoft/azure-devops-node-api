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


/**
 * Artifacts are collections of files produced by a pipeline. Use artifacts to share files between stages in a pipeline or between different pipelines.
 */
export interface Artifact {
    /**
     * The name of the artifact.
     */
    name?: string;
    /**
     * Signed url for downloading this artifact
     */
    signedContent?: VSSInterfaces.SignedUrl;
    /**
     * Self-referential url
     */
    url?: string;
}

export interface BuildResourceParameters {
    version?: string;
}

export enum ConfigurationType {
    /**
     * Unknown type.
     */
    Unknown = 0,
    /**
     * YAML.
     */
    Yaml = 1,
    /**
     * Designer JSON.
     */
    DesignerJson = 2,
    /**
     * Just-in-time.
     */
    JustInTime = 3,
    /**
     * Designer-JSON.
     */
    DesignerHyphenJson = 2,
}

export interface Container {
    environment?: { [key: string] : string; };
    image?: string;
    mapDockerSocket?: boolean;
    options?: string;
    ports?: string[];
    volumes?: string[];
}

export interface ContainerResource {
    container?: Container;
}

export interface ContainerResourceParameters {
    version?: string;
}

/**
 * Configuration parameters of the pipeline.
 */
export interface CreatePipelineConfigurationParameters {
    /**
     * Type of configuration.
     */
    type?: ConfigurationType;
}

/**
 * Parameters to create a pipeline.
 */
export interface CreatePipelineParameters {
    /**
     * Configuration parameters of the pipeline.
     */
    configuration?: CreatePipelineConfigurationParameters;
    /**
     * Folder of the pipeline.
     */
    folder?: string;
    /**
     * Name of the pipeline.
     */
    name?: string;
}

/**
 * Expansion options for GetArtifact and ListArtifacts.
 */
export enum GetArtifactExpandOptions {
    /**
     * No expansion.
     */
    None = 0,
    /**
     * Include signed content.
     */
    SignedContent = 1,
}

/**
 * $expand options for GetLog and ListLogs.
 */
export enum GetLogExpandOptions {
    None = 0,
    SignedContent = 1,
}

/**
 * Log for a pipeline.
 */
export interface Log {
    /**
     * The date and time the log was created.
     */
    createdOn?: Date;
    /**
     * The ID of the log.
     */
    id?: number;
    /**
     * The date and time the log was last changed.
     */
    lastChangedOn?: Date;
    /**
     * The number of lines in the log.
     */
    lineCount?: number;
    signedContent?: VSSInterfaces.SignedUrl;
    url?: string;
}

/**
 * A collection of logs.
 */
export interface LogCollection {
    /**
     * The list of logs.
     */
    logs?: Log[];
    signedContent?: VSSInterfaces.SignedUrl;
    /**
     * URL of the log.
     */
    url?: string;
}

export interface PackageResourceParameters {
    version?: string;
}

/**
 * Definition of a pipeline.
 */
export interface Pipeline extends PipelineBase {
    _links?: any;
    configuration?: PipelineConfiguration;
    /**
     * URL of the pipeline
     */
    url?: string;
}

export interface PipelineBase {
    /**
     * Pipeline folder
     */
    folder?: string;
    /**
     * Pipeline ID
     */
    id?: number;
    /**
     * Pipeline name
     */
    name?: string;
    /**
     * Revision number
     */
    revision?: number;
}

export interface PipelineConfiguration {
    type?: ConfigurationType;
}

/**
 * A reference to a Pipeline.
 */
export interface PipelineReference extends PipelineBase {
    url?: string;
}

export interface PipelineResource {
    pipeline?: PipelineReference;
    version?: string;
}

export interface PipelineResourceParameters {
    version?: string;
}

export interface PreviewRun {
    finalYaml?: string;
}

export interface Repository {
    type?: RepositoryType;
}

export interface RepositoryResource {
    refName?: string;
    repository?: Repository;
    version?: string;
}

export interface RepositoryResourceParameters {
    refName?: string;
    /**
     * This is the security token to use when connecting to the repository.
     */
    token?: string;
    /**
     * Optional. This is the type of the token given. If not provided, a type of "Bearer" is assumed. Note: Use "Basic" for a PAT token.
     */
    tokenType?: string;
    version?: string;
}

export enum RepositoryType {
    Unknown = 0,
    GitHub = 1,
    AzureReposGit = 2,
    GitHubEnterprise = 3,
    AzureReposGitHyphenated = 2,
}

export interface Run extends RunReference {
    _links?: any;
    createdDate?: Date;
    finalYaml?: string;
    finishedDate?: Date;
    pipeline?: PipelineReference;
    resources?: RunResources;
    result?: RunResult;
    state?: RunState;
    templateParameters?: { [key: string] : any; };
    url?: string;
    variables?: { [key: string] : Variable; };
}

/**
 * Settings which influence pipeline runs.
 */
export interface RunPipelineParameters {
    /**
     * If true, don't actually create a new run. Instead, return the final YAML document after parsing templates.
     */
    previewRun?: boolean;
    /**
     * The resources the run requires.
     */
    resources?: RunResourcesParameters;
    stagesToSkip?: string[];
    templateParameters?: { [key: string] : string; };
    variables?: { [key: string] : Variable; };
    /**
     * If you use the preview run option, you may optionally supply different YAML. This allows you to preview the final YAML document without committing a changed file.
     */
    yamlOverride?: string;
}

export interface RunReference {
    id?: number;
    name?: string;
}

export interface RunResources {
    containers?: { [key: string] : ContainerResource; };
    pipelines?: { [key: string] : PipelineResource; };
    repositories?: { [key: string] : RepositoryResource; };
}

export interface RunResourcesParameters {
    builds?: { [key: string] : BuildResourceParameters; };
    containers?: { [key: string] : ContainerResourceParameters; };
    packages?: { [key: string] : PackageResourceParameters; };
    pipelines?: { [key: string] : PipelineResourceParameters; };
    repositories?: { [key: string] : RepositoryResourceParameters; };
}

/**
 * This is not a Flags enum because we don't want to set multiple results on a build. However, when adding values, please stick to powers of 2 as if it were a Flags enum. This will make it easier to query multiple results.
 */
export enum RunResult {
    Unknown = 0,
    Succeeded = 1,
    Failed = 2,
    Canceled = 4,
}

/**
 * This is not a Flags enum because we don't want to set multiple states on a build. However, when adding values, please stick to powers of 2 as if it were a Flags enum. This will make it easier to query multiple states.
 */
export enum RunState {
    Unknown = 0,
    InProgress = 1,
    Canceling = 2,
    Completed = 4,
}

export interface SignalRConnection {
    signedContent?: VSSInterfaces.SignedUrl;
}

export interface Variable {
    isSecret?: boolean;
    value?: string;
}

export var TypeInfo = {
    Artifact: <any>{
    },
    ConfigurationType: {
        enumValues: {
            "unknown": 0,
            "yaml": 1,
            "designerJson": 2,
            "justInTime": 3,
            "designerHyphenJson": 2
        }
    },
    CreatePipelineConfigurationParameters: <any>{
    },
    CreatePipelineParameters: <any>{
    },
    GetArtifactExpandOptions: {
        enumValues: {
            "none": 0,
            "signedContent": 1
        }
    },
    GetLogExpandOptions: {
        enumValues: {
            "none": 0,
            "signedContent": 1
        }
    },
    Log: <any>{
    },
    LogCollection: <any>{
    },
    Pipeline: <any>{
    },
    PipelineConfiguration: <any>{
    },
    Repository: <any>{
    },
    RepositoryResource: <any>{
    },
    RepositoryType: {
        enumValues: {
            "unknown": 0,
            "gitHub": 1,
            "azureReposGit": 2,
            "gitHubEnterprise": 3,
            "azureReposGitHyphenated": 2
        }
    },
    Run: <any>{
    },
    RunResources: <any>{
    },
    RunResult: {
        enumValues: {
            "unknown": 0,
            "succeeded": 1,
            "failed": 2,
            "canceled": 4
        }
    },
    RunState: {
        enumValues: {
            "unknown": 0,
            "inProgress": 1,
            "canceling": 2,
            "completed": 4
        }
    },
    SignalRConnection: <any>{
    },
};

TypeInfo.Artifact.fields = {
    signedContent: {
        typeInfo: VSSInterfaces.TypeInfo.SignedUrl
    }
};

TypeInfo.CreatePipelineConfigurationParameters.fields = {
    type: {
        enumType: TypeInfo.ConfigurationType
    }
};

TypeInfo.CreatePipelineParameters.fields = {
    configuration: {
        typeInfo: TypeInfo.CreatePipelineConfigurationParameters
    }
};

TypeInfo.Log.fields = {
    createdOn: {
        isDate: true,
    },
    lastChangedOn: {
        isDate: true,
    },
    signedContent: {
        typeInfo: VSSInterfaces.TypeInfo.SignedUrl
    }
};

TypeInfo.LogCollection.fields = {
    logs: {
        isArray: true,
        typeInfo: TypeInfo.Log
    },
    signedContent: {
        typeInfo: VSSInterfaces.TypeInfo.SignedUrl
    }
};

TypeInfo.Pipeline.fields = {
    configuration: {
        typeInfo: TypeInfo.PipelineConfiguration
    }
};

TypeInfo.PipelineConfiguration.fields = {
    type: {
        enumType: TypeInfo.ConfigurationType
    }
};

TypeInfo.Repository.fields = {
    type: {
        enumType: TypeInfo.RepositoryType
    }
};

TypeInfo.RepositoryResource.fields = {
    repository: {
        typeInfo: TypeInfo.Repository
    }
};

TypeInfo.Run.fields = {
    createdDate: {
        isDate: true,
    },
    finishedDate: {
        isDate: true,
    },
    resources: {
        typeInfo: TypeInfo.RunResources
    },
    result: {
        enumType: TypeInfo.RunResult
    },
    state: {
        enumType: TypeInfo.RunState
    }
};

TypeInfo.RunResources.fields = {
    repositories: {
        isDictionary: true,
        dictionaryValueTypeInfo: TypeInfo.RepositoryResource
    }
};

TypeInfo.SignalRConnection.fields = {
    signedContent: {
        typeInfo: VSSInterfaces.TypeInfo.SignedUrl
    }
};
