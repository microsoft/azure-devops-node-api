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

import TfsCoreInterfaces = require("../interfaces/CoreInterfaces");


export enum BuildFrameworkDetectionType {
    Shallow = 0,
    Full = 10,
}

export interface ConfigurationFile {
    /**
     * The content of the file.
     */
    content: string;
    /**
     * Indicates if the content is base64 encoded.
     */
    isBase64Encoded: boolean;
    /**
     * The full path of the file, relative to the root of the repository.
     */
    path: string;
}

export interface CreatedResources {
    resources?: { [key: string] : any; };
}

/**
 * This class is used to create a pipeline connection within the team project provided. If the team project does not exist, it will be created.
 */
export interface CreatePipelineConnectionInputs {
    /**
     * The team project settings for an existing team project or for a new team project.
     */
    project?: TfsCoreInterfaces.TeamProject;
    /**
     * This dictionary contains information that is specific to the provider. This data is opaque to the rest of the Pipelines infrastructure and does NOT contribute to the resources Token. The format of the string and its contents depend on the implementation of the provider.
     */
    providerData?: { [key: string] : string; };
    /**
     * The external source provider id for which the connection is being made.
     */
    providerId: string;
    /**
     * If provided, this will be the URL returned with the PipelineConnection. This will override any other redirect URL that would have been generated for the connection.
     */
    redirectUrl?: string;
    /**
     * Where the request to create the pipeline originated (such as 'GitHub Marketplace' or 'Azure DevOps')
     */
    requestSource?: string;
}

export interface DetectedBuildFramework {
    /**
     * List of build targets discovered for the framework to act upon.
     */
    buildTargets: DetectedBuildTarget[];
    /**
     * The unique identifier of the build framework.
     */
    id: string;
    /**
     * Additional detected settings for the build framework.
     */
    settings: { [key: string] : string; };
    /**
     * The version of the framework if it can be determined from the sources.
     */
    version: string;
}

export interface DetectedBuildTarget {
    path: string;
    settings: { [key: string] : string; };
    type: string;
}

export interface PipelineConnection {
    /**
     * The account id that contains the team project for the connection.
     */
    accountId?: string;
    /**
     * The definition id that was created for the connection.
     */
    definitionId?: number;
    /**
     * This is the URL that the user should be taken to in order to continue setup.
     */
    redirectUrl?: string;
    /**
     * The service endpoint that was created for the connection.
     */
    serviceEndpointId?: string;
    /**
     * The team project that contains the definition for the connection.
     */
    teamProjectId?: string;
}

export interface ResourceCreationParameter {
    resourceToCreate?: any;
    type?: string;
}

export var TypeInfo = {
    BuildFrameworkDetectionType: {
        enumValues: {
            "shallow": 0,
            "full": 10
        }
    },
    CreatePipelineConnectionInputs: <any>{
    },
};

TypeInfo.CreatePipelineConnectionInputs.fields = {
    project: {
        typeInfo: TfsCoreInterfaces.TypeInfo.TeamProject
    }
};
