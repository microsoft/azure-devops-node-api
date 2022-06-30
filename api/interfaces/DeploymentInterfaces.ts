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
 * An alias to a repo revision.
 */
export interface AliasContext {
    /**
     * The alias kind.
     */
    kind?: Kind;
    /**
     * The alias name.
     */
    name?: string;
}

/**
 * Artifact describes a build product.
 */
export interface Artifact {
    /**
     * Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container.
     */
    checksum?: string;
    /**
     * Artifact ID, if any; for container images, this will be a URL by digest like `docker.io/projectID/imagename@sha256:123456`.
     */
    id?: string;
    /**
     * Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.
     */
    names?: string[];
}

export interface ArtifactProvenance {
    attestation?: Occurrence[];
    build?: Occurrence;
    deployment?: Occurrence[];
    image?: Occurrence;
    resourceUri?: string;
    vulnerability?: Occurrence[];
}

export enum AttackComplexity {
    Unspecified = 0,
    Low = 1,
    High = 2,
}

export enum AttackVector {
    Unspecified = 0,
    Network = 1,
    Adjacent = 2,
    Local = 3,
    Physical = 4,
}

export interface AttestationDetails extends BaseMetadataDetails {
    /**
     * The human readable name of this attestation authority
     */
    humanReadableName?: string;
    /**
     * The serialized payload that is verified by one or more `signatures`.
     */
    serializedPayload?: string;
    /**
     * One or more signatures over `serialized_payload`.  Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`.
     */
    signatures?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Signature[];
}

/**
 * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
 */
export interface AttestationOccurrence {
    /**
     * Required. The serialized payload that is verified by one or more `signatures`.
     */
    serializedPayload?: any;
    /**
     * One or more signatures over `serialized_payload`.  Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`.  See `Signature` in common.proto for more details on signature structure and verification.
     */
    signatures?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Grafeas.V1.Signature[];
}

export interface BaseMetadataDetails {
    /**
     * Description of this note.
     */
    description?: string;
    /**
     * The name of the note
     */
    name?: string;
    /**
     * URLs associated with this note.
     */
    relatedUrl?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.RelatedUrl[];
    /**
     * Resource URI for the associated image(s)
     */
    resourceUri?: string[];
}

/**
 * Artifact describes a build product.
 */
export interface BuildArtifact {
    /**
     * Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container
     */
    checksum?: string;
    /**
     * Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`.
     */
    id?: string;
    /**
     * Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.
     */
    names?: string[];
}

/**
 * Details of a build occurrence.
 */
export interface BuildOccurrence {
    /**
     * Required. The actual provenance for the build.
     */
    provenance?: BuildProvenance;
    /**
     * Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification.  The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.
     */
    provenanceBytes?: string;
}

/**
 * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
 */
export interface BuildProvenance {
    /**
     * Output of the build.
     */
    buildArtifacts?: BuildArtifact[];
    /**
     * Version string of the builder at the time this build was executed.
     */
    builderVersion?: string;
    /**
     * Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.
     */
    buildOptions?: { [key: string] : string; };
    /**
     * Output of the build.
     */
    builtArtifacts?: Artifact[];
    /**
     * Commands requested by the build.
     */
    commands?: Command[];
    /**
     * Time at which the build was created.
     */
    createTime?: Date;
    /**
     * E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.
     */
    creator?: string;
    /**
     * Time at which execution of the build was finished.
     */
    endTime?: Date;
    /**
     * Required. Unique identifier of the build.
     */
    id?: string;
    /**
     * URI where any logs for this provenance were written.
     */
    logsUri?: string;
    /**
     * ID of the project.
     */
    projectId?: string;
    /**
     * Details of the Source input to the build.
     */
    sourceProvenance?: Source;
    /**
     * Time at which execution of the build was started.
     */
    startTime?: Date;
    /**
     * Trigger identifier if the build was triggered automatically; empty if not.
     */
    triggerId?: string;
}

/**
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
 */
export interface CloudRepoSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: AliasContext;
    /**
     * The ID of the repo.
     */
    repoId?: RepoId;
    /**
     * A revision ID.
     */
    revisionId?: string;
}

/**
 * Command describes a step performed as part of the build pipeline.
 */
export interface Command {
    /**
     * Command-line arguments used when executing this command.
     */
    args?: string[];
    /**
     * Working directory (relative to project source root) used when running this command.
     */
    dir?: string;
    /**
     * Environment variables set before running this command.
     */
    env?: string[];
    /**
     * Optional unique identifier for this command, used in wait_for to reference this command as a dependency.
     */
    id?: string;
    /**
     * Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.
     */
    name?: string;
    /**
     * The ID(s) of the command(s) that this command depends on.
     */
    waitFor?: string[];
}

export enum ContextOneofCase {
    None = 0,
    CloudRepo = 1,
    Gerrit = 2,
    Git = 3,
}

/**
 * Common Vulnerability Scoring System version 3.
 */
export interface CVSSv3 {
    attackComplexity?: AttackComplexity;
    /**
     * Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.
     */
    attackVector?: AttackVector;
    availabilityImpact?: Impact;
    /**
     * The base score is a function of the base metric scores.
     */
    baseScore?: number;
    confidentialityImpact?: Impact;
    exploitabilityScore?: number;
    impactScore?: number;
    integrityImpact?: Impact;
    privilegesRequired?: PrivilegesRequired;
    scope?: Scope;
    userInteraction?: UserInteraction;
}

export interface DeploymentDetails extends BaseMetadataDetails {
    /**
     * Address of the runtime element hosting this deployment.
     */
    address?: string;
    /**
     * Configuration used to create this deployment.
     */
    config?: string;
    /**
     * Pipeline run data.
     */
    pipelineRunInfo?: PipelineRunInfo;
    /**
     * Types of platforms.
     */
    platform?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Platform;
    /**
     * Identity of the user that triggered this deployment.
     */
    userEmail?: string;
}

/**
 * The period during which some deployable was active in a runtime.
 */
export interface DeploymentOccurrence {
    /**
     * Address of the runtime element hosting this deployment.
     */
    address?: string;
    /**
     * Configuration used to create this deployment.
     */
    config?: string;
    /**
     * Required. Beginning of the lifetime of this deployment.
     */
    deployTime?: Date;
    /**
     * Platform hosting this deployment.
     */
    platform?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Grafeas.V1.Platform;
    /**
     * Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.
     */
    resourceUri?: string[];
    /**
     * End of the lifetime of this deployment.
     */
    undeployTime?: Date;
    /**
     * Identity of the user that triggered this deployment.
     */
    userEmail?: string;
}

export enum DetailsOneofCase {
    None = 0,
    Vulnerability = 8,
    Build = 9,
    Image = 10,
    Deployment = 11,
    Attestation = 12,
}

/**
 * Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.
 */
export interface FileHashes {
    /**
     * Required. Collection of file hashes.
     */
    fileHash?: Hash[];
}

/**
 * A set of properties that uniquely identify a given Docker image.
 */
export interface Fingerprint {
    /**
     * Required. The layer ID of the final layer in the Docker image's v1 representation.
     */
    v1Name?: string;
    /**
     * Required. The ordered list of v2 blobs that represent a given image.
     */
    v2Blob?: string[];
    /**
     * Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blob[bottom] [N] := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.
     */
    v2Name?: string;
}

/**
 * A SourceContext referring to a Gerrit project.
 */
export interface GerritSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: AliasContext;
    /**
     * The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project.
     */
    gerritProject?: string;
    /**
     * The URI of a running Gerrit instance.
     */
    hostUri?: string;
    /**
     * A revision (commit) ID.
     */
    revisionId?: string;
}

/**
 * A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
 */
export interface GitSourceContext {
    /**
     * Git commit hash.
     */
    revisionId?: string;
    /**
     * Git repository URL.
     */
    url?: string;
}

/**
 * Container message for hash values.
 */
export interface Hash {
    /**
     * Required. The type of hash that was performed, e.g. "SHA-256".
     */
    type?: string;
    /**
     * Required. The hash value.
     */
    value?: number[];
}

export enum IdOneofCase {
    None = 0,
    ProjectRepoId = 1,
    Uid = 2,
}

export interface ImageDetails {
    artifactStorageSourceUri?: string;
    baseImageName?: string;
    baseImageUri?: string;
    branch?: string;
    buildOptions?: { [key: string] : string; };
    contextUrl?: string;
    createTime?: Date;
    creator?: string;
    distance?: number;
    hash?: number[];
    imageFingerprint?: ImageFingerprint;
    imageName?: string;
    imageSize?: string;
    imageType?: string;
    imageUri?: string;
    jobName?: string;
    layerInfo?: ImageLayer[];
    logsUri?: string;
    mediaType?: string;
    pipelineId?: string;
    pipelineName?: string;
    pipelineVersion?: string;
    projectId?: string;
    repositoryId?: string;
    repositoryName?: string;
    repositoryTypeName?: string;
    revisionId?: string;
    runId?: number;
    tags?: string[];
}

/**
 * A set of properties that uniquely identify a given Docker image.
 */
export interface ImageFingerprint {
    /**
     * The layer ID of the final layer in the Docker image's v1 representation.
     */
    v1Name?: string;
    /**
     * The ordered list of v2 blobs that represent a given image.
     */
    v2Blobs?: string[];
    /**
     * The name of the image's v2 blobs computed via: [bottom] := v2_blob[bottom] [N] := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.
     */
    v2Name?: string;
}

export interface ImageLayer {
    arguments?: string;
    createdOn?: Date;
    directive?: string;
    size?: string;
}

/**
 * Details of the derived image portion of the DockerImage relationship. This image would be produced from a Dockerfile with FROM <DockerImage.Basis in attached Note>.
 */
export interface ImageOccurrence {
    /**
     * Output only. This contains the base image URL for the derived image occurrence.
     */
    baseResourceUrl?: string;
    /**
     * Output only. The number of layers by which this image differs from the associated image basis.
     */
    distance?: number;
    /**
     * Required. The fingerprint of the derived image.
     */
    fingerprint?: Fingerprint;
    /**
     * This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.
     */
    layerInfo?: Layer[];
}

export enum Impact {
    Unspecified = 0,
    High = 1,
    Low = 2,
    None = 3,
}

export enum Kind {
    Unspecified = 0,
    Fixed = 1,
    Movable = 2,
    Other = 4,
}

export interface KnowledgeBase {
    /**
     * The KB name (generally of the form KB[0-9]+ (e.g., KB123456)).
     */
    name?: string;
    /**
     * A link to the KB in the [Windows update catalog] (https://www.catalog.update.microsoft.com/).
     */
    url?: string;
}

/**
 * Layer holds metadata specific to a layer of a Docker image.
 */
export interface Layer {
    /**
     * The recovered arguments to the Dockerfile directive.
     */
    arguments?: string;
    /**
     * Required. The recovered Dockerfile directive used to construct this layer. See https://docs.docker.com/engine/reference/builder/ for more information.
     */
    directive?: string;
}

/**
 * Kind represents the kinds of notes supported.
 */
export enum NoteKind {
    /**
     * Unknown.
     */
    Unspecified = 0,
    /**
     * The note and occurrence represent a package vulnerability.
     */
    Vulnerability = 1,
    /**
     * The note and occurrence assert build provenance.
     */
    Build = 2,
    /**
     * This represents an image basis relationship.
     */
    Image = 3,
    /**
     * The note and occurrence track deployment events.
     */
    Deployment = 5,
    /**
     * This represents a logical "role" that can attest to artifacts.
     */
    Attestation = 7,
}

export interface Occurrence {
    /**
     * Describes an attestation of an artifact.
     */
    attestation?: AttestationOccurrence;
    /**
     * Describes a verifiable build.
     */
    build?: BuildOccurrence;
    /**
     * Output only. The time this occurrence was created.
     */
    createTime?: Date;
    /**
     * Describes the deployment of an artifact on a runtime.
     */
    deployment?: DeploymentOccurrence;
    /**
     * Describes how this resource derives from the basis in the associated note.
     */
    image?: ImageOccurrence;
    /**
     * Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
     */
    kind?: NoteKind;
    /**
     * Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
     */
    name?: string;
    /**
     * Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.
     */
    noteName?: string;
    /**
     * A description of actions that can be taken to remedy the note.
     */
    remediation?: string;
    /**
     * Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, `https://docker.io/project/image@sha256:123abc` for a Docker image.
     */
    resourceUri?: string;
    /**
     * Output only. The time this occurrence was last updated.
     */
    updateTime?: Date;
    /**
     * Describes a security vulnerability.
     */
    vulnerability?: VulnerabilityOccurrence;
}

/**
 * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
 */
export interface PackageIssue {
    /**
     * The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in.
     */
    affectedCpeUri?: string;
    /**
     * The package this vulnerability was found in.
     */
    affectedPackage?: string;
    /**
     * The version of the package that is installed on the resource affected by this vulnerability.
     */
    affectedVersion?: PackageVersion;
    /**
     * Whether a fix is available for this package.
     */
    fixAvailable?: boolean;
    /**
     * The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected_cpe_uri.
     */
    fixedCpeUri?: string;
    /**
     * The package this vulnerability was fixed in. It is possible for this to be different from the affected_package.
     */
    fixedPackage?: string;
    /**
     * Required. The version of the package this vulnerability was fixed in. Setting this to VersionKind.MAXIMUM means no fix is yet available.
     */
    fixedVersion?: PackageVersion;
}

/**
 * Version contains structured information about the version of a package.
 */
export interface PackageVersion {
    /**
     * Used to correct mistakes in the version numbering scheme.
     */
    epoch?: number;
    fullName?: string;
    /**
     * Required. Distinguishes between sentinel MIN/MAX versions and normal versions.
     */
    kind?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.VersionKind;
    /**
     * Required only when version kind is NORMAL. The main part of the version name.
     */
    name?: string;
    /**
     * The iteration of the package build from the above version.
     */
    revision?: string;
}

/**
 * Pipeline run data.
 */
export interface PipelineRunInfo {
    deploymentPhaseIdentifier?: string;
    hubName?: string;
    jobName?: string;
    planId?: string;
}

/**
 * Platform hosting this deployment.
 */
export enum Platform {
    Unspecified = 0,
    Gke = 1,
    Flex = 2,
    Custom = 3,
}

export enum PrivilegesRequired {
    Unspecified = 0,
    None = 1,
    Low = 2,
    High = 3,
}

/**
 * Selects a repo using a project ID (e.g., winged-cargo-31) and a repo name within that project.
 */
export interface ProjectRepoId {
    /**
     * The ID of the project.
     */
    projectId?: string;
    /**
     * The name of the repo. Leave empty for the default repo.
     */
    repoName?: string;
}

/**
 * Metadata for any related URL information.
 */
export interface RelatedUrl {
    /**
     * Label to describe usage of the URL.
     */
    label?: string;
    /**
     * Specific URL associated with the resource.
     */
    url?: string;
}

/**
 * A unique identifier for a Cloud Repo.
 */
export interface RepoId {
    idCase?: IdOneofCase;
    /**
     * A combination of a project ID and a repo name.
     */
    projectRepoId?: ProjectRepoId;
    /**
     * A server-assigned, globally unique identifier.
     */
    uid?: string;
}

export enum Scope {
    Unspecified = 0,
    Unchanged = 1,
    Changed = 2,
}

export enum Severity {
    Unspecified = 0,
    Minimal = 1,
    Low = 2,
    Medium = 3,
    High = 2,
    Critical = 2,
}

export interface Signature {
    /**
     * The identifier for the public key that verifies this signature.
     */
    publicKeyId?: string;
    /**
     * The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.
     */
    signatureContent?: string;
}

/**
 * Source describes the location of the source used for the build.
 */
export interface Source {
    /**
     * If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.
     */
    additionalContexts?: SourceContext[];
    /**
     * If provided, the input binary artifacts for the build came from this location.
     */
    artifactStorageSourceUri?: string;
    /**
     * If provided, the source code used for the build came from this location.
     */
    context?: SourceContext;
    /**
     * Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build.  The keys to this map are file paths used as build source and the values contain the hash values for those files.  If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.
     */
    fileHashes?: { [key: string] : FileHashes; };
}

/**
 * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
 */
export interface SourceContext {
    /**
     * A SourceContext referring to a revision in a Google Cloud Source Repo.
     */
    cloudRepo?: CloudRepoSourceContext;
    contextCase?: ContextOneofCase;
    /**
     * A SourceContext referring to a Gerrit project.
     */
    gerrit?: GerritSourceContext;
    /**
     * A SourceContext referring to any third party Git repo (e.g., GitHub).
     */
    git?: GitSourceContext;
    /**
     * Labels with user defined metadata.
     */
    labels?: { [key: string] : string; };
}

export enum UserInteraction {
    Unspecified = 0,
    None = 1,
    Required = 2,
}

/**
 * Whether this is an ordinary package version or a sentinel MIN/MAX version.
 */
export enum VersionKind {
    /**
     * Unknown.
     */
    Unspecified = 0,
    /**
     * A standard package version.
     */
    Normal = 1,
    /**
     * A special version representing negative infinity.
     */
    Minimum = 2,
    /**
     * A special version representing positive infinity.
     */
    Maximum = 3,
}

/**
 * A detail for a distro and package affected by this vulnerability and its associated fix (if one is available).
 */
export interface VulnerabilityDetail {
    /**
     * The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects.
     */
    affectedCpeUri?: string;
    /**
     * Required. The package this vulnerability affects.
     */
    affectedPackage?: string;
    /**
     * The version number at the end of an interval in which this vulnerability exists.
     */
    affectedVersionEnd?: PackageVersion;
    /**
     * The version number at the start of an interval in which this vulnerability exists. A vulnerability can affect a package between version numbers that are disjoint sets of intervals (example: [1.0.0-1.1.0], [2.4.6-2.4.8] and [4.5.6-4.6.8]) each of which will be represented in its own Detail. If a specific affected version is provided by a vulnerability database, affected_version_start and affected_version_end will be the same in that Detail.
     */
    affectedVersionStart?: PackageVersion;
    /**
     * A vendor-specific description of this vulnerability.
     */
    description?: string;
    /**
     * The distro recommended [CPE URI](https://cpe.mitre.org/specification/) to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_cpe_uri.
     */
    fixedCpeUri?: string;
    /**
     * The distro recommended package to update to that contains a fix for this vulnerability. It is possible for this to be different from the affected_package.
     */
    fixedPackage?: string;
    /**
     * The distro recommended version to update to that contains a fix for this vulnerability. Setting this to VersionKind.MAXIMUM means no such version is yet available.
     */
    fixedVersion?: PackageVersion;
    /**
     * Whether this detail is obsolete. Occurrences are expected not to point to obsolete details.
     */
    isObsolete?: boolean;
    /**
     * The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
     */
    packageType?: string;
    /**
     * The distro assigned severity of this vulnerability.
     */
    severityName?: string;
    /**
     * The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
     */
    sourceUpdateTime?: Date;
}

export interface VulnerabilityDetails extends BaseMetadataDetails {
    /**
     * The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.
     */
    cvssScore?: number;
    /**
     * The full description of the CVSSv3 for this vulnerability.
     */
    cvssV3?: CVSSv3;
    /**
     * Details of all known distros and packages affected by this vulnerability.
     */
    details?: VulnerabilityDetail[];
    /**
     * The distro assigned severity for this vulnerability when it is available, and note provider assigned severity when distro has not yet assigned a severity for this vulnerability.
     */
    effectiveSeverity?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Severity;
    /**
     * Whether at least one of the affected packages has a fix available.
     */
    fixAvailable?: boolean;
    /**
     * The set of affected locations and their fixes (if available) within the associated resource.
     */
    packageIssue?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.PackageIssue[];
    /**
     * The note provider assigned severity of this vulnerability.
     */
    severity?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Severity;
    /**
     * The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
     */
    type?: string;
    /**
     * Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version.
     */
    windowsDetails?: WindowsDetail[];
}

/**
 * An occurrence of a severity vulnerability on a resource.
 */
export interface VulnerabilityOccurrence {
    /**
     * Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity.
     */
    cvssScore?: number;
    /**
     * The distro assigned severity for this vulnerability when it is available, and note provider assigned severity when distro has not yet assigned a severity for this vulnerability.
     */
    effectiveSeverity?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Grafeas.V1.Severity;
    /**
     * Output only. Whether at least one of the affected packages has a fix available.
     */
    fixAvailable?: boolean;
    /**
     * Output only. A detailed description of this vulnerability.
     */
    longDescription?: string;
    /**
     * Required. The set of affected locations and their fixes (if available) within the associated resource.
     */
    packageIssue?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Grafeas.V1.PackageIssue[];
    /**
     * Output only. URLs related to this vulnerability.
     */
    relatedUrls?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Grafeas.V1.RelatedUrl[];
    /**
     * Output only. The note provider assigned severity of this vulnerability.
     */
    severity?: Microsoft.Azure.Pipelines.Deployment.WebApi.Contracts.Grafeas.V1.Severity;
    /**
     * Output only. A one sentence description of this vulnerability.
     */
    shortDescription?: string;
    /**
     * The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).
     */
    type?: string;
}

export interface WindowsDetail {
    /**
     * The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability affects.
     */
    cpeUri?: string;
    /**
     * The description of this vulnerability.
     */
    description?: string;
    /**
     * Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed KBs presence is considered a fix.
     */
    fixingKbs?: KnowledgeBase[];
    /**
     * The name of this vulnerability.
     */
    name?: string;
    /**
     * The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
     */
    sourceUpdateTime?: Date;
}

export var TypeInfo = {
    AliasContext: <any>{
    },
    ArtifactProvenance: <any>{
    },
    AttackComplexity: {
        enumValues: {
            "unspecified": 0,
            "low": 1,
            "high": 2
        }
    },
    AttackVector: {
        enumValues: {
            "unspecified": 0,
            "network": 1,
            "adjacent": 2,
            "local": 3,
            "physical": 4
        }
    },
    BuildOccurrence: <any>{
    },
    BuildProvenance: <any>{
    },
    CloudRepoSourceContext: <any>{
    },
    ContextOneofCase: {
        enumValues: {
            "none": 0,
            "cloudRepo": 1,
            "gerrit": 2,
            "git": 3
        }
    },
    CVSSv3: <any>{
    },
    DeploymentDetails: <any>{
    },
    DeploymentOccurrence: <any>{
    },
    DetailsOneofCase: {
        enumValues: {
            "none": 0,
            "vulnerability": 8,
            "build": 9,
            "image": 10,
            "deployment": 11,
            "attestation": 12
        }
    },
    GerritSourceContext: <any>{
    },
    IdOneofCase: {
        enumValues: {
            "none": 0,
            "projectRepoId": 1,
            "uid": 2
        }
    },
    ImageDetails: <any>{
    },
    ImageLayer: <any>{
    },
    Impact: {
        enumValues: {
            "unspecified": 0,
            "high": 1,
            "low": 2,
            "none": 3
        }
    },
    Kind: {
        enumValues: {
            "unspecified": 0,
            "fixed": 1,
            "movable": 2,
            "other": 4
        }
    },
    NoteKind: {
        enumValues: {
            "unspecified": 0,
            "vulnerability": 1,
            "build": 2,
            "image": 3,
            "deployment": 5,
            "attestation": 7
        }
    },
    Occurrence: <any>{
    },
    PackageIssue: <any>{
    },
    PackageVersion: <any>{
    },
    Platform: {
        enumValues: {
            "unspecified": 0,
            "gke": 1,
            "flex": 2,
            "custom": 3
        }
    },
    PrivilegesRequired: {
        enumValues: {
            "unspecified": 0,
            "none": 1,
            "low": 2,
            "high": 3
        }
    },
    RepoId: <any>{
    },
    Scope: {
        enumValues: {
            "unspecified": 0,
            "unchanged": 1,
            "changed": 2
        }
    },
    Severity: {
        enumValues: {
            "unspecified": 0,
            "minimal": 1,
            "low": 2,
            "medium": 3,
            "high": 2,
            "critical": 2
        }
    },
    Source: <any>{
    },
    SourceContext: <any>{
    },
    UserInteraction: {
        enumValues: {
            "unspecified": 0,
            "none": 1,
            "required": 2
        }
    },
    VersionKind: {
        enumValues: {
            "unspecified": 0,
            "normal": 1,
            "minimum": 2,
            "maximum": 3
        }
    },
    VulnerabilityDetail: <any>{
    },
    VulnerabilityDetails: <any>{
    },
    VulnerabilityOccurrence: <any>{
    },
    WindowsDetail: <any>{
    },
};

TypeInfo.AliasContext.fields = {
    kind: {
        enumType: TypeInfo.Kind
    }
};

TypeInfo.ArtifactProvenance.fields = {
    attestation: {
        isArray: true,
        typeInfo: TypeInfo.Occurrence
    },
    build: {
        typeInfo: TypeInfo.Occurrence
    },
    deployment: {
        isArray: true,
        typeInfo: TypeInfo.Occurrence
    },
    image: {
        typeInfo: TypeInfo.Occurrence
    },
    vulnerability: {
        isArray: true,
        typeInfo: TypeInfo.Occurrence
    }
};

TypeInfo.BuildOccurrence.fields = {
    provenance: {
        typeInfo: TypeInfo.BuildProvenance
    }
};

TypeInfo.BuildProvenance.fields = {
    createTime: {
        isDate: true,
    },
    endTime: {
        isDate: true,
    },
    sourceProvenance: {
        typeInfo: TypeInfo.Source
    },
    startTime: {
        isDate: true,
    }
};

TypeInfo.CloudRepoSourceContext.fields = {
    aliasContext: {
        typeInfo: TypeInfo.AliasContext
    },
    repoId: {
        typeInfo: TypeInfo.RepoId
    }
};

TypeInfo.CVSSv3.fields = {
    attackComplexity: {
        enumType: TypeInfo.AttackComplexity
    },
    attackVector: {
        enumType: TypeInfo.AttackVector
    },
    availabilityImpact: {
        enumType: TypeInfo.Impact
    },
    confidentialityImpact: {
        enumType: TypeInfo.Impact
    },
    integrityImpact: {
        enumType: TypeInfo.Impact
    },
    privilegesRequired: {
        enumType: TypeInfo.PrivilegesRequired
    },
    scope: {
        enumType: TypeInfo.Scope
    },
    userInteraction: {
        enumType: TypeInfo.UserInteraction
    }
};

TypeInfo.DeploymentDetails.fields = {
};

TypeInfo.DeploymentOccurrence.fields = {
    deployTime: {
        isDate: true,
    },
    undeployTime: {
        isDate: true,
    }
};

TypeInfo.GerritSourceContext.fields = {
    aliasContext: {
        typeInfo: TypeInfo.AliasContext
    }
};

TypeInfo.ImageDetails.fields = {
    createTime: {
        isDate: true,
    },
    layerInfo: {
        isArray: true,
        typeInfo: TypeInfo.ImageLayer
    }
};

TypeInfo.ImageLayer.fields = {
    createdOn: {
        isDate: true,
    }
};

TypeInfo.Occurrence.fields = {
    build: {
        typeInfo: TypeInfo.BuildOccurrence
    },
    createTime: {
        isDate: true,
    },
    deployment: {
        typeInfo: TypeInfo.DeploymentOccurrence
    },
    kind: {
        enumType: TypeInfo.NoteKind
    },
    updateTime: {
        isDate: true,
    },
    vulnerability: {
        typeInfo: TypeInfo.VulnerabilityOccurrence
    }
};

TypeInfo.PackageIssue.fields = {
    affectedVersion: {
        typeInfo: TypeInfo.PackageVersion
    },
    fixedVersion: {
        typeInfo: TypeInfo.PackageVersion
    }
};

TypeInfo.PackageVersion.fields = {
};

TypeInfo.RepoId.fields = {
    idCase: {
        enumType: TypeInfo.IdOneofCase
    }
};

TypeInfo.Source.fields = {
    additionalContexts: {
        isArray: true,
        typeInfo: TypeInfo.SourceContext
    },
    context: {
        typeInfo: TypeInfo.SourceContext
    }
};

TypeInfo.SourceContext.fields = {
    cloudRepo: {
        typeInfo: TypeInfo.CloudRepoSourceContext
    },
    contextCase: {
        enumType: TypeInfo.ContextOneofCase
    },
    gerrit: {
        typeInfo: TypeInfo.GerritSourceContext
    }
};

TypeInfo.VulnerabilityDetail.fields = {
    affectedVersionEnd: {
        typeInfo: TypeInfo.PackageVersion
    },
    affectedVersionStart: {
        typeInfo: TypeInfo.PackageVersion
    },
    fixedVersion: {
        typeInfo: TypeInfo.PackageVersion
    },
    sourceUpdateTime: {
        isDate: true,
    }
};

TypeInfo.VulnerabilityDetails.fields = {
    cvssV3: {
        typeInfo: TypeInfo.CVSSv3
    },
    details: {
        isArray: true,
        typeInfo: TypeInfo.VulnerabilityDetail
    },
    windowsDetails: {
        isArray: true,
        typeInfo: TypeInfo.WindowsDetail
    }
};

TypeInfo.VulnerabilityOccurrence.fields = {
};

TypeInfo.WindowsDetail.fields = {
    sourceUpdateTime: {
        isDate: true,
    }
};
