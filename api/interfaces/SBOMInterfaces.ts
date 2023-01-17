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



/**
 * This holds the configuration for the ManifestTool. The values in this file are populated from the command line, config file and default.
 */
export interface Configuration {
    /**
     * Additional set of command-line arguments for Component Detector.
     */
    additionalComponentDetectorArgs?: ConfigurationSetting<string>;
    /**
     * The folder containing the build components and packages.
     */
    buildComponentPath?: ConfigurationSetting<string>;
    /**
     * The root folder of the drop directory to validate or generate.
     */
    buildDropPath?: ConfigurationSetting<string>;
    /**
     * Full file name of a list file that contains all files to be validated.
     */
    buildListFile?: ConfigurationSetting<string>;
    /**
     * The path of the signed catalog file used to validate the manifest.json.
     */
    catalogFilePath?: ConfigurationSetting<string>;
    /**
     * The json file that contains the configuration for the DropValidator.
     */
    configFilePath?: ConfigurationSetting<string>;
    /**
     * Comma separated list of docker image names or hashes to be scanned for packages, ex: ubuntu:16.04, 56bab49eef2ef07505f6a1b0d5bd3a601dfc3c76ad4460f24c91d6fa298369ab.
     */
    dockerImagesToScan?: ConfigurationSetting<string>;
    /**
     * Full file path to a file that contains list of external SBOMs to be included as External document reference.
     */
    externalDocumentReferenceListFile?: ConfigurationSetting<string>;
    /**
     * The Hash algorithm to use while verifying the hash value of a file.
     */
    hashAlgorithm?: ConfigurationSetting<string>;
    /**
     * If set, will not fail validation on the files presented in Manifest but missing on the disk.
     */
    ignoreMissing?: ConfigurationSetting<boolean>;
    /**
     * The root folder where the generated manifest (and other files like bsi.json) files will be placed. By default we will generate this folder in the same level as the build drop with the name '_manifest'
     */
    manifestDirPath?: ConfigurationSetting<string>;
    /**
     * A list of name and version of the manifest that we are generating.
     */
    manifestInfo?: ConfigurationSetting<ManifestInfo[]>;
    /**
     * The action currently being performed by the manifest tool.
     */
    manifestToolAction?: ManifestToolActions;
    /**
     * The name of the package this SBOM represents.
     */
    packageName?: ConfigurationSetting<string>;
    /**
     * The version of the package this SBOM represents.
     */
    packageVersion?: ConfigurationSetting<string>;
    /**
     * The number of parallel threads to use for the workflows.
     */
    parallelism?: ConfigurationSetting<number>;
    /**
     * If you're downloading only a part of the drop using the '-r' or 'root' parameter in the drop client, specify the same string value here in order to skip validating paths that are not downloaded.
     */
    rootPathFilter?: ConfigurationSetting<string>;
    /**
     * If specified, we will store the generated telemetry for the execution of the SBOM tool at this path.
     */
    telemetryFilePath?: ConfigurationSetting<string>;
    /**
     * If set, will validate the manifest using the signed catalog file.
     */
    validateSignature?: ConfigurationSetting<boolean>;
}

/**
 * Encapsulates a configuration setting to provide metadata about the setting source and type.
 */
export interface ConfigurationSetting<T> {
    /**
     * The source where this setting came from.
     */
    source?: string;
    /**
     * The actual value of the setting.
     */
    value?: T;
}

/**
 * Used to provide the filename and hash of the SBOM file to be added to the catalog file.
 */
export interface FileHash {
    /**
     * The filename of the SBOM.
     */
    fileName?: string;
    /**
     * The string hash of the SBOM file.
     */
    hash?: string;
    /**
     * The HashAlgorithmName used to generate the hash of the file.
     */
    hashAlgorithmName?: HashAlgorithmName;
}

/**
 * Defines a manifest name and version.
 */
export interface ManifestInfo {
    /**
     * The name of the manifest.
     */
    name?: string;
    /**
     * The version of the manifest.
     */
    version?: string;
}

export enum ManifestToolActions {
    None = 0,
    Validate = 1,
    Generate = 2,
    All = 3,
}

/**
 * Enum that represents the result of a signing submission or status request.
 */
export enum Result {
    Success = 0,
    Failure = 1,
    InProgress = 2,
}

/**
 * Represents a SBOM file object and contains additional properties related to the file.
 */
export interface SBOMFile {
    /**
     * The size of the SBOM file in bytes.
     */
    fileSizeInBytes?: number;
    /**
     * The path where the final generated SBOM is placed.
     */
    sbomFilePath?: string;
    /**
     * The name and version of the format of the generated SBOM.
     */
    sbomFormatName?: ManifestInfo;
}

/**
 * The telemetry that is logged to a file/console for the given SBOM execution.
 */
export interface SBOMTelemetry {
    /**
     * All available bsi data from the task build execution which includes build and system environment variables like repository and build information.
     */
    bSIData?: { [key: string] : string; };
    /**
     * The source of the bsi data.
     */
    bSISource?: string;
    /**
     * The end to end results of the extension task.
     */
    e2ETaskResult?: string;
    /**
     * A list of ConfigurationSetting`1 representing each input parameter used in the validation.
     */
    parameters?: Configuration;
    /**
     * The result of the execution
     */
    result?: string;
    /**
     * A list of the SBOM formats and related file properties that was used in the generation/validation of the SBOM.
     */
    sBOMFormatsUsed?: SBOMFile[];
    /**
     * Any internal switches and their value that were used during the execution. A switch can be something that was provided through a configuraiton or an environment variable.
     */
    switches?: { [key: string] : any; };
    /**
     * Error messages that came from the extension task.
     */
    taskErrorMessage?: string;
    /**
     * The unique id for this telemetry
     */
    telemetryId?: string;
    /**
     * The result of the tool as a numeric value.
     */
    toolExecutionResult?: number;
}

/**
 * The base reponse object for all responses from the signing api.
 */
export interface SignResponseBase {
    /**
     * The customer correlation id that is sent to ESRP for correlating the current request to ESRP.
     */
    customerCorrelationId?: string;
    /**
     * If this is an error response, it will have more information about the error.
     */
    errorInfo?: string;
    /**
     * The result of the response.
     */
    result?: Result;
}

/**
 * The response returned by the sign status api.
 */
export interface SignStatusResponse extends SignResponseBase {
    /**
     * The pre-signed download url used to download the signed catalog file.
     */
    downloadUrl?: string;
}

export var TypeInfo = {
    Configuration: <any>{
    },
    ManifestToolActions: {
        enumValues: {
            "none": 0,
            "validate": 1,
            "generate": 2,
            "all": 3
        }
    },
    Result: {
        enumValues: {
            "success": 0,
            "failure": 1,
            "inProgress": 2
        }
    },
    SBOMTelemetry: <any>{
    },
    SignResponseBase: <any>{
    },
    SignStatusResponse: <any>{
    },
};

TypeInfo.Configuration.fields = {
    manifestToolAction: {
        enumType: TypeInfo.ManifestToolActions
    }
};

TypeInfo.SBOMTelemetry.fields = {
    parameters: {
        typeInfo: TypeInfo.Configuration
    }
};

TypeInfo.SignResponseBase.fields = {
    result: {
        enumType: TypeInfo.Result
    }
};

TypeInfo.SignStatusResponse.fields = {
    result: {
        enumType: TypeInfo.Result
    }
};
