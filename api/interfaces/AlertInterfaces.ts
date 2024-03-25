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


export interface Alert {
    /**
     * Identifier for the alert. It is unqiue within Azure DevOps organization.
     */
    alertId?: number;
    /**
     * Type of the alert. E.g. secret, code, etc.
     */
    alertType?: AlertType;
    /**
     * Confidence level of the alert.
     */
    confidence?: Confidence;
    /**
     * Contains information for the dismissal of the alert if the alert has been dismissed.
     */
    dismissal?: Dismissal;
    /**
     * This value is computed and returned by the service. This value represents the first time the service has seen this issue reported in an analysis instance.
     */
    firstSeenDate?: Date;
    /**
     * This value is computed and returned by the service. If the issue is fixed, this value represents the time the service has seen this issue fixed in an analysis instance.
     */
    fixedDate?: Date;
    /**
     * Reference to a git object, e.g. branch ref.
     */
    gitRef?: string;
    /**
     * This value is computed and returned by the service. This value represents the first time the vulnerability was introduced.
     */
    introducedDate?: Date;
    /**
     * This value is computed and returned by the service. This value represents the last time the service has seen this issue reported in an analysis instance.
     */
    lastSeenDate?: Date;
    /**
     * Logical locations for the alert. This value is computed and returned by the service. It is a value based on the results from all analysis configurations. An example of a logical location is a component.
     */
    logicalLocations?: LogicalLocation[];
    /**
     * This value is computed and returned by the service. It is a value based on the results from all analysis configurations. An example of a physical location is a file location.
     */
    physicalLocations?: PhysicalLocation[];
    /**
     * Repository URL where the alert was detected.
     */
    repositoryUrl?: string;
    /**
     * Severity of the alert.
     */
    severity?: Severity;
    /**
     * This value is computed and returned by the service. It is a value based on the results from all analysis configurations.
     */
    state?: State;
    /**
     * Title will only be rendered as text and does not support markdown formatting. There is a maximum character limit of 256.
     */
    title?: string;
    /**
     * Tools that have detected this issue.
     */
    tools?: Tool[];
    /**
     * A truncated/obfuscated version of the secret pertaining to the alert (if applicable).
     */
    truncatedSecret?: string;
    /**
     * ValidationFingerprints for the secret liveness check. Only returned on demand in Get API with Expand parameter set to be ValidationFingerprint (not returned in List API)
     */
    validationFingerprints?: ValidationFingerprint[];
}

/**
 * Summary of the state of the alert for a given analysis configuration.
 */
export interface AlertAnalysisInstance {
    /**
     * Analysis configuration.
     */
    analysisConfiguration?: AnalysisConfiguration;
    /**
     * Analysis instance where the issue was first detected for a given analysis configuration.
     */
    firstSeen?: AnalysisInstance;
    /**
     * Analysis instance where the issue was fixed for a given analysis configuration.
     */
    fixedIn?: AnalysisInstance;
    /**
     * Analysis instance where the issue was last detected for a given analysis configuration.
     */
    lastSeen?: AnalysisInstance;
    /**
     * The most recent instatnce of the analysis.
     */
    recentAnalysisInstance?: AnalysisInstance;
    /**
     * Result state for a given analysis configuration.
     */
    state?: State;
}

/**
 * Alert metadata.
 */
export interface AlertMetadata {
    /**
     * The ID of the alert.
     */
    alertId?: number;
    /**
     * A list of metadata to be associated with the alert.
     */
    metadata?: Metadata[];
}

/**
 * Used to represent an update in a relationship between an alert and an artifact.
 */
export interface AlertMetadataChange {
    /**
     * The ID of the alert.
     */
    alertId?: number;
    /**
     * The change that occurred to the metadata.
     */
    metadataChange?: MetadataChange;
}

export interface AlertStateUpdate {
    dismissedComment?: string;
    dismissedReason?: DismissalType;
    state?: State;
}

export enum AlertType {
    /**
     * The code has an unspecified vulnerability type
     */
    Unknown = 0,
    /**
     * The code uses a dependency with a known vulnerability.
     */
    Dependency = 1,
    /**
     * The code contains a secret that has now been compromised and must be revoked.
     */
    Secret = 2,
    /**
     * The code contains a weakness determined by static analysis.
     */
    Code = 3,
}

/**
 * AnalysisConfiguration class models a build definition.
 */
export interface AnalysisConfiguration {
    /**
     * Details for the configuration. Populated values depend on the type of configuration.
     */
    analysisConfigurationDetails?: AnalysisConfigurationDetails;
    /**
     * Identifier for the analysis configuration.
     */
    analysisConfigurationId?: number;
    /**
     * Type of the configuration.
     */
    analysisConfigurationType?: AnalysisConfigurationType;
    /**
     * Name of the tool that ran on this configuration.
     */
    toolName?: string;
    /**
     * The latest version of the tool that ran on this configuration.
     */
    toolVersion?: string;
}

export interface AnalysisConfigurationDetails {
    /**
     * Reference to a git object, e.g. branch ref.
     */
    gitRef?: string;
    /**
     * Is this the default branch?
     */
    isDefaultBranch?: boolean;
    /**
     * Phase ID of the pipeline.
     */
    phaseId?: string;
    /**
     * Phase name.
     */
    phaseName?: string;
    /**
     * AzureDevOps pipeline id.
     */
    pipelineId?: number;
    /**
     * Name of the pipeline.
     */
    pipelineName?: string;
}

export enum AnalysisConfigurationType {
    /**
     * Default analysis configuration that is not attached to any other configuration data
     */
    Default = 0,
    /**
     * Ado Pipeline, contains branch, pipeline, phase, and ADOPipelineId
     */
    AdoPipeline = 1,
}

/**
 * AnalysisInstance class models a build.
 */
export interface AnalysisInstance {
    /**
     * CommitId is a commit id for that instance
     */
    commitId?: string;
    /**
     * Analysis configuration.
     */
    configuration?: AnalysisConfiguration;
    /**
     * Date when the analysis was created.
     */
    createdDate?: Date;
    /**
     * InstanceIdentifier is a key that uniquely establishes this instance
     */
    instanceIdentifier?: string;
    /**
     * Results that were reported by the analysis.
     */
    results?: AnalysisResult[];
    /**
     * Url is the permalink to the build.
     */
    url?: string;
}

export interface AnalysisResult {
    analysisResultId?: number;
    firstIntroducedInstanceId?: number;
    fixedInstanceId?: number;
    introducedInstanceId?: number;
    lastSeenInstanceId?: number;
    result?: Result;
    state?: State;
}

export interface Branch {
    branchId?: number;
    deletedDate?: Date;
    name?: string;
}

/**
 * This enum defines the dependency components.
 */
export enum ComponentType {
    Unknown = 0,
    NuGet = 1,
    /**
     * Indicates the component is an Npm package.
     */
    Npm = 2,
    /**
     * Indicates the component is a Maven artifact.
     */
    Maven = 3,
    /**
     * Indicates the component is a Git repository.
     */
    Git = 4,
    /**
     * Indicates the component is not any of the supported component types by Governance.
     */
    Other = 5,
    /**
     * Indicates the component is a Ruby gem.
     */
    RubyGems = 6,
    /**
     * Indicates the component is a Cargo package.
     */
    Cargo = 7,
    /**
     * Indicates the component is a Pip package.
     */
    Pip = 8,
    /**
     * Indicates the component is a loose file. Not a package as understood by different package managers.
     */
    File = 9,
    /**
     * Indicates the component is a Go package.
     */
    Go = 10,
    /**
     * Indicates the component is a Docker Image
     */
    DockerImage = 11,
    /**
     * Indicates the component is a CocoaPods pod.
     */
    Pod = 12,
    /**
     * Indicates the component is found in a linux environment. A package understood by linux based package managers like apt and rpm.
     */
    Linux = 13,
    /**
     * Indicates the component is a Conda package.
     */
    Conda = 14,
    /**
     * Indicates the component is a Docker Reference.
     */
    DockerReference = 15,
    /**
     * Indicates the component is a Vcpkg Package.
     */
    Vcpkg = 16,
}

export enum Confidence {
    /**
     * High confidence level for alert
     */
    High = 0,
    /**
     * Other confidence level for alert
     */
    Other = 1,
}

/**
 * Information about a vulnerable dependency
 */
export interface Dependency {
    /**
     * Dependency name
     */
    componentName?: string;
    /**
     * Source of the dependency
     */
    componentType?: ComponentType;
    /**
     * Version information
     */
    componentVersion?: string;
    /**
     * Unique ID for the dependency
     */
    dependencyId?: number;
}

/**
 * An instance of a vulnerable dependency that was detected
 */
export interface DependencyResult {
    /**
     * Information about the vulnerable dependency that was found
     */
    dependency?: Dependency;
    /**
     * Unique ID for this dependency
     */
    dependencyResultId?: number;
    /**
     * ID for the Result that this instance belongs to
     */
    resultId?: number;
    /**
     * Heirarchal information when multiple instances are found
     */
    rootDependencyId?: number;
    /**
     * Information about where the dependency was found
     */
    versionControlFilePath?: VersionControlFilePath;
}

/**
 * Information about an alert dismissal
 */
export interface Dismissal {
    /**
     * Unique ID for this dismissal
     */
    dismissalId?: number;
    /**
     * Reason for the dismissal
     */
    dismissalType?: DismissalType;
    /**
     * Informational message attached to the dismissal
     */
    message?: string;
    requestedOn?: Date;
    /**
     * Identity that dismissed the alert
     */
    stateChangedBy?: string;
    /**
     * Identity that dismissed the alert
     */
    stateChangedByIdentity?: VSSInterfaces.IdentityRef;
}

export enum DismissalType {
    /**
     * Dismissal type unknown
     */
    Unknown = 0,
    /**
     * Dismissal indicating alert has been fixed
     */
    Fixed = 1,
    /**
     * Dismissal indicating user is accepting a risk for the alert
     */
    AcceptedRisk = 2,
    /**
     * Dismissal indicating alert is a false positive and will likely not be fixed.
     */
    FalsePositive = 3,
}

export enum ExpandOption {
    /**
     * No Expands.
     */
    None = 0,
    /**
     * Return validationFingerprints in Alert.
     */
    ValidationFingerprint = 1,
}

export interface LogicalLocation {
    fullyQualifiedName?: string;
    /**
     * Possible values: "unknown" "rootDependency" and "vulnerableDependency"
     */
    kind?: string;
}

/**
 * The metadata operation to be performed on the alert.
 */
export interface Metadata {
    /**
     * The type of operation to be performed.
     */
    op?: MetadataOperation;
    /**
     * The metadata value
     */
    value?: RelationMetadata;
}

/**
 * The change that has been made to the metadata.
 */
export interface MetadataChange {
    /**
     * The type of change on the metadata.
     */
    changeType?: MetadataChangeType;
    /**
     * Represents a metadata association to an alert.
     */
    value?: RelationMetadata;
}

/**
 * The type of change that occurred to the metadata.
 */
export enum MetadataChangeType {
    None = 0,
    Created = 1,
    Updated = 2,
    Deleted = 3,
}

/**
 * The operation to be performed on the metadata.
 */
export enum MetadataOperation {
    Add = 0,
    Remove = 1,
}

/**
 * Location in the source control system where the issue was found
 */
export interface PhysicalLocation {
    /**
     * Path of the file where the issue was found
     */
    filePath?: string;
    /**
     * Details about the location where the issue was found including a snippet
     */
    region?: Region;
    /**
     * Source control system-specific information about the location
     */
    versionControl?: VersionControlDetails;
}

export interface Pipeline {
    adoPipelineId?: number;
    name?: string;
    phase?: string;
    phaseId?: string;
}

export interface Region {
    /**
     * The column where the code snippet ends
     */
    columnEnd?: number;
    /**
     * The column where the code snippet starts
     */
    columnStart?: number;
    /**
     * The line number where the code snippet ends
     */
    lineEnd?: number;
    /**
     * The line number where the code snippet starts
     */
    lineStart?: number;
}

/**
 * The metadata to be associated with the alert.
 */
export interface RelationMetadata {
    /**
     * Any additional attributes of the metadata.
     */
    attributes?: { [key: string] : any; };
    /**
     * The type of the metadata.
     */
    rel?: string;
    /**
     * The URL of the metadata.
     */
    url?: string;
}

export interface Result {
    /**
     * Additional information about the alert.  Valid when ResultType is Dependency
     */
    dependencyResult?: DependencyResult;
    /**
     * Full fingerprint of the Result.  This is used to detect duplicate instances of the same alert
     */
    fingerprint?: string;
    /**
     * Unique ID of the fingerprint of the Result
     */
    fingerprintId?: number;
    /**
     * Unique ID of the Result
     */
    resultId?: number;
    /**
     * This is the index into the SARIF Results array. If we have to do any tool specific insertions, we'll use this key to index back into the SARIF Results array.
     */
    resultIndex?: number;
    /**
     * Detailed description of the rule that triggered the alert
     */
    resultMessage?: string;
    /**
     * The type of rule that triggered the alert
     */
    resultType?: ResultType;
    /**
     * ID of the rule that the triggered the alert
     */
    ruleId?: number;
    /**
     * Short description of the rule that triggered the alert
     */
    ruleShortDescription?: string;
    /**
     * The severity of the alert
     */
    severity?: Severity;
    /**
     * Additional information about the alert.  Valid when ResultType is VersionControl
     */
    versionControlResult?: VersionControlResult;
}

/**
 * This enum defines the different result types.
 */
export enum ResultType {
    /**
     * The result was found from an unspecified analysis type
     */
    Unknown = 0,
    /**
     * The result was found from dependency analysis
     */
    Dependency = 1,
    /**
     * The result was found from static code analysis
     */
    VersionControl = 2,
}

/**
 * The analysis rule that caused the alert.
 */
export interface Rule {
    /**
     * Additional properties of this rule dependent on the rule type.  For example, dependency rules may include the CVE ID if it is available.
     */
    additionalProperties?: { [key: string] : any; };
    /**
     * Description of what this rule detects
     */
    description?: string;
    /**
     * Plain-text rule identifier
     */
    friendlyName?: string;
    /**
     * Additional information about this rule
     */
    helpMessage?: string;
    /**
     * Tool-specific rule identifier
     */
    opaqueId?: string;
    /**
     * Markdown-formatted list of resources to learn more about the Rule. In some cases, RuleInfo.AdditionalProperties.advisoryUrls is used instead.
     */
    resources?: string;
    /**
     * Classification tags for this rule
     */
    tags?: string[];
}

export enum SarifJobStatus {
    /**
     * The job type when it is new
     */
    New = 0,
    /**
     * The job type when it is queued
     */
    Queued = 1,
    /**
     * The job type when it is completed
     */
    Completed = 2,
    /**
     * The job type when it fails
     */
    Failed = 3,
}

export interface SarifUploadStatus {
    errors?: SarifValidationError[];
    processingStatus?: SarifJobStatus;
}

export interface SarifValidationError {
    nodePointer?: string;
    validationError?: string;
}

export interface SearchCriteria {
    /**
     * If provided, only return alerts with the ids specified. <br />Otherwise, return any alert.
     */
    alertIds?: number[];
    /**
     * If provided, only return alerts of this type. Otherwise, return alerts of all types.
     */
    alertType?: AlertType;
    /**
     * If provided, only return alerts at these confidence levels. <br />Otherwise, return alerts at any confidence level.
     */
    confidenceLevels?: Confidence[];
    /**
     * If provided, only alerts for this dependency are returned. <br />Otherwise, return alerts for all dependencies. <br />In a sarif submission, a dependency (or a vulnerable component) is specified in result.RelatedLocations[].logicalLocation.
     */
    dependencyName?: string;
    /**
     * If provided, only return alerts last seen after this date. <br />Otherwise return all alerts.
     */
    fromDate?: Date;
    /**
     * If provided, only return alerts whose titles match this pattern.
     */
    keywords?: string;
    /**
     * If provided, only return alerts that were modified since this date. <br />Otherwise return all alerts.
     */
    modifiedSince?: Date;
    /**
     * If true, only return alerts found on the default branch of the repository. <br />If there have been no runs completed on the default branch, the last run is used instead regardless of the branch used for that run. <br />This option is ignored if ref is provided.
     */
    onlyDefaultBranchAlerts?: boolean;
    /**
     * If provided with pipelineName, only return alerts detected in this pipeline phase <br />Otherwise, return alerts detected in all phases.
     */
    phaseId?: string;
    /**
     * If provided with pipelineName, only return alerts detected in this pipeline phase <br />Otherwise, return alerts detected in all phases.
     */
    phaseName?: string;
    /**
     * If provided, only return alerts detected in this pipeline. <br />Otherwise, return alerts detected in all pipelines.
     */
    pipelineName?: string;
    /**
     * If provided, only include alerts for this ref. <br />If not provided and OnlyDefaultBranch is true, only include alerts found on the default branch or last run branch if there is no analysis configuration for the default branch. <br />Otherwise, include alerts from all branches.
     */
    ref?: string;
    /**
     * If provided, only return alerts for this rule. <br />Otherwise, return alerts of all rules.
     */
    ruleId?: string;
    /**
     * If provided, only return alerts for this rule. <br />Otherwise, return alerts for all rules.
     */
    ruleName?: string;
    /**
     * If provided, only return alerts at these severities. <br />Otherwise, return alerts at any serverity.
     */
    severities?: Severity[];
    /**
     * If provided, only return alerts in these states. <br />Otherwise, return alerts in any state.
     */
    states?: State[];
    /**
     * If provided, only return alerts last seen before this date. <br />Otherwise return all alerts.
     */
    toDate?: Date;
    /**
     * If provided with toolName, only return alerts detected by this tool. <br />Otherwise, return alerts detected by all tools.
     */
    toolName?: string;
}

export enum Severity {
    Low = 0,
    Medium = 1,
    High = 2,
    Critical = 3,
    Note = 4,
    Warning = 5,
    Error = 6,
}

export enum State {
    /**
     * Alert is in an indeterminate state
     */
    Unknown = 0,
    /**
     * Alert has been detected in the code
     */
    Active = 1,
    /**
     * Alert was dismissed by a user
     */
    Dismissed = 2,
    /**
     * The issue is no longer detected in the code
     */
    Fixed = 4,
    /**
     * The tool has determined that the issue is no longer a risk
     */
    AutoDismissed = 8,
}

/**
 * An Analysis tool that can generate security alerts
 */
export interface Tool {
    /**
     * Name of the tool
     */
    name?: string;
    /**
     * The rules that the tool defines
     */
    rules?: Rule[];
}

export interface UxFilters {
    /**
     * Branches to display alerts for.  If empty, show alerts from all branches
     */
    branches?: Branch[];
    /**
     * Confidence levels to show, only valid when AlertType is Secret.
     */
    confidenceLevels?: Confidence[];
    packages?: Dependency[];
    /**
     * Pipelines to show alerts for.  If empty, show alerts for all pipelines
     */
    pipelines?: Pipeline[];
    progressPercentage?: number;
    rules?: Rule[];
    secretTypes?: string[];
    /**
     * Alert severities to show.  If empty show all alert servities
     */
    severities?: Severity[];
    /**
     * Alert states to show.  If empty show all alert states
     */
    states?: State[];
    tools?: Tool[];
}

export interface ValidationFingerprint {
    validationFingerprintHash?: string;
    validationFingerprintJson?: string;
}

/**
 * Information for locating files in a source control system
 */
export interface VersionControlDetails {
    commitHash?: string;
    itemUrl?: string;
}

export interface VersionControlFilePath {
    /**
     * Path of the file in the version control system
     */
    filePath?: string;
    /**
     * Hash of the file in the version control system
     */
    filePathHash?: number[];
    /**
     * Unique ID for the file in the version control system
     */
    versionControlFilePathId?: number;
}

export interface VersionControlResult {
    /**
     * The ID to associate this structure with the cooresponding Result
     */
    resultId?: number;
    /**
     * Information about the snippet where the Result was found
     */
    versionControlSnippet?: VersionControlSnippet;
}

export interface VersionControlSnippet {
    /**
     * column in the code file where the snippet ends
     */
    endColumn?: number;
    /**
     * line in the code file where the snippet ends
     */
    endLine?: number;
    /**
     * column in the code file where the snippet starts
     */
    startColumn?: number;
    /**
     * line in the code file where the snippet starts
     */
    startLine?: number;
    /**
     * path of the code file in the version control system
     */
    versionControlFilePath?: VersionControlFilePath;
    /**
     * Unique Id number for the file path
     */
    versionControlFilePathId?: number;
    /**
     * Unique Id number for this snippet
     */
    versionControlSnippetId?: number;
}

export var TypeInfo = {
    Alert: <any>{
    },
    AlertAnalysisInstance: <any>{
    },
    AlertMetadata: <any>{
    },
    AlertMetadataChange: <any>{
    },
    AlertStateUpdate: <any>{
    },
    AlertType: {
        enumValues: {
            "unknown": 0,
            "dependency": 1,
            "secret": 2,
            "code": 3
        }
    },
    AnalysisConfiguration: <any>{
    },
    AnalysisConfigurationType: {
        enumValues: {
            "default": 0,
            "adoPipeline": 1
        }
    },
    AnalysisInstance: <any>{
    },
    AnalysisResult: <any>{
    },
    Branch: <any>{
    },
    ComponentType: {
        enumValues: {
            "unknown": 0,
            "nuGet": 1,
            "npm": 2,
            "maven": 3,
            "git": 4,
            "other": 5,
            "rubyGems": 6,
            "cargo": 7,
            "pip": 8,
            "file": 9,
            "go": 10,
            "dockerImage": 11,
            "pod": 12,
            "linux": 13,
            "conda": 14,
            "dockerReference": 15,
            "vcpkg": 16
        }
    },
    Confidence: {
        enumValues: {
            "high": 0,
            "other": 1
        }
    },
    Dependency: <any>{
    },
    DependencyResult: <any>{
    },
    Dismissal: <any>{
    },
    DismissalType: {
        enumValues: {
            "unknown": 0,
            "fixed": 1,
            "acceptedRisk": 2,
            "falsePositive": 3
        }
    },
    ExpandOption: {
        enumValues: {
            "none": 0,
            "validationFingerprint": 1
        }
    },
    Metadata: <any>{
    },
    MetadataChange: <any>{
    },
    MetadataChangeType: {
        enumValues: {
            "none": 0,
            "created": 1,
            "updated": 2,
            "deleted": 3
        }
    },
    MetadataOperation: {
        enumValues: {
            "add": 0,
            "remove": 1
        }
    },
    Result: <any>{
    },
    ResultType: {
        enumValues: {
            "unknown": 0,
            "dependency": 1,
            "versionControl": 2
        }
    },
    SarifJobStatus: {
        enumValues: {
            "new": 0,
            "queued": 1,
            "completed": 2,
            "failed": 3
        }
    },
    SarifUploadStatus: <any>{
    },
    SearchCriteria: <any>{
    },
    Severity: {
        enumValues: {
            "low": 0,
            "medium": 1,
            "high": 2,
            "critical": 3,
            "note": 4,
            "warning": 5,
            "error": 6
        }
    },
    State: {
        enumValues: {
            "unknown": 0,
            "active": 1,
            "dismissed": 2,
            "fixed": 4,
            "autoDismissed": 8
        }
    },
    UxFilters: <any>{
    },
};

TypeInfo.Alert.fields = {
    alertType: {
        enumType: TypeInfo.AlertType
    },
    confidence: {
        enumType: TypeInfo.Confidence
    },
    dismissal: {
        typeInfo: TypeInfo.Dismissal
    },
    firstSeenDate: {
        isDate: true,
    },
    fixedDate: {
        isDate: true,
    },
    introducedDate: {
        isDate: true,
    },
    lastSeenDate: {
        isDate: true,
    },
    severity: {
        enumType: TypeInfo.Severity
    },
    state: {
        enumType: TypeInfo.State
    }
};

TypeInfo.AlertAnalysisInstance.fields = {
    analysisConfiguration: {
        typeInfo: TypeInfo.AnalysisConfiguration
    },
    firstSeen: {
        typeInfo: TypeInfo.AnalysisInstance
    },
    fixedIn: {
        typeInfo: TypeInfo.AnalysisInstance
    },
    lastSeen: {
        typeInfo: TypeInfo.AnalysisInstance
    },
    recentAnalysisInstance: {
        typeInfo: TypeInfo.AnalysisInstance
    },
    state: {
        enumType: TypeInfo.State
    }
};

TypeInfo.AlertMetadata.fields = {
    metadata: {
        isArray: true,
        typeInfo: TypeInfo.Metadata
    }
};

TypeInfo.AlertMetadataChange.fields = {
    metadataChange: {
        typeInfo: TypeInfo.MetadataChange
    }
};

TypeInfo.AlertStateUpdate.fields = {
    dismissedReason: {
        enumType: TypeInfo.DismissalType
    },
    state: {
        enumType: TypeInfo.State
    }
};

TypeInfo.AnalysisConfiguration.fields = {
    analysisConfigurationType: {
        enumType: TypeInfo.AnalysisConfigurationType
    }
};

TypeInfo.AnalysisInstance.fields = {
    configuration: {
        typeInfo: TypeInfo.AnalysisConfiguration
    },
    createdDate: {
        isDate: true,
    },
    results: {
        isArray: true,
        typeInfo: TypeInfo.AnalysisResult
    }
};

TypeInfo.AnalysisResult.fields = {
    result: {
        typeInfo: TypeInfo.Result
    },
    state: {
        enumType: TypeInfo.State
    }
};

TypeInfo.Branch.fields = {
    deletedDate: {
        isDate: true,
    }
};

TypeInfo.Dependency.fields = {
    componentType: {
        enumType: TypeInfo.ComponentType
    }
};

TypeInfo.DependencyResult.fields = {
    dependency: {
        typeInfo: TypeInfo.Dependency
    }
};

TypeInfo.Dismissal.fields = {
    dismissalType: {
        enumType: TypeInfo.DismissalType
    },
    requestedOn: {
        isDate: true,
    }
};

TypeInfo.Metadata.fields = {
    op: {
        enumType: TypeInfo.MetadataOperation
    }
};

TypeInfo.MetadataChange.fields = {
    changeType: {
        enumType: TypeInfo.MetadataChangeType
    }
};

TypeInfo.Result.fields = {
    dependencyResult: {
        typeInfo: TypeInfo.DependencyResult
    },
    resultType: {
        enumType: TypeInfo.ResultType
    },
    severity: {
        enumType: TypeInfo.Severity
    }
};

TypeInfo.SarifUploadStatus.fields = {
    processingStatus: {
        enumType: TypeInfo.SarifJobStatus
    }
};

TypeInfo.SearchCriteria.fields = {
    alertType: {
        enumType: TypeInfo.AlertType
    },
    confidenceLevels: {
        isArray: true,
        enumType: TypeInfo.Confidence
    },
    fromDate: {
        isDate: true,
    },
    modifiedSince: {
        isDate: true,
    },
    severities: {
        isArray: true,
        enumType: TypeInfo.Severity
    },
    states: {
        isArray: true,
        enumType: TypeInfo.State
    },
    toDate: {
        isDate: true,
    }
};

TypeInfo.UxFilters.fields = {
    branches: {
        isArray: true,
        typeInfo: TypeInfo.Branch
    },
    confidenceLevels: {
        isArray: true,
        enumType: TypeInfo.Confidence
    },
    packages: {
        isArray: true,
        typeInfo: TypeInfo.Dependency
    },
    severities: {
        isArray: true,
        enumType: TypeInfo.Severity
    },
    states: {
        isArray: true,
        enumType: TypeInfo.State
    }
};
