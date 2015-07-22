/// <reference path="../../src/api/definitions/node.d.ts" />
/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import GitInterfaces = require("./interfaces/GitInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
export interface IGitApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    getBlob(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, Blob: GitInterfaces.GitBlobRef) => void): void;
    getBlobContent(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBlobsZip(blobIds: string[], repositoryId: string, project: string, filename: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBlobZip(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBranch(repositoryId: string, name: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, BranchStat: GitInterfaces.GitBranchStats) => void): void;
    getBranches(repositoryId: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, BranchStats: GitInterfaces.GitBranchStats[]) => void): void;
    getChanges(commitId: string, repositoryId: string, project: string, top: number, skip: number, onResult: (err: any, statusCode: number, Change: GitInterfaces.GitCommitChanges) => void): void;
    createCommit(repositoryId: string, project: string, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void): void;
    getCommit(commitId: string, repositoryId: string, project: string, changeCount: number, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void): void;
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project: string, skip: number, top: number, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void): void;
    getPushCommits(repositoryId: string, pushId: number, project: string, top: number, skip: number, includeLinks: boolean, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void): void;
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project: string, skip: number, top: number, onResult: (err: any, statusCode: number, CommitsBatch: GitInterfaces.GitCommitRef[]) => void): void;
    getItem(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Item: GitInterfaces.GitItem) => void): void;
    getItemContent(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getItems(repositoryId: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, includeLinks: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Items: GitInterfaces.GitItem[]) => void): void;
    getItemText(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getItemZip(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project: string, onResult: (err: any, statusCode: number, ItemsBatch: GitInterfaces.GitItem[][]) => void): void;
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => void): void;
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project: string, onResult: (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => void): void;
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number) => void): void;
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => void): void;
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project: string, onResult: (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => void): void;
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project: string, onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void): void;
    getPullRequest(repositoryId: string, pullRequestId: number, project: string, maxCommentLength: number, skip: number, top: number, onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void): void;
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project: string, maxCommentLength: number, skip: number, top: number, onResult: (err: any, statusCode: number, PullRequests: GitInterfaces.GitPullRequest[]) => void): void;
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project: string, onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void): void;
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project: string, commitsTop: number, commitsSkip: number, onResult: (err: any, statusCode: number, PullRequestWorkItems: GitInterfaces.AssociatedWorkItem[]) => void): void;
    createPush(push: GitInterfaces.GitPush, repositoryId: string, project: string, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void): void;
    getPush(repositoryId: string, pushId: number, project: string, includeCommits: number, includeRefUpdates: boolean, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void): void;
    getPushes(repositoryId: string, project: string, skip: number, top: number, searchCriteria: GitInterfaces.GitPushSearchCriteria, onResult: (err: any, statusCode: number, pushes: GitInterfaces.GitPush[]) => void): void;
    getRefs(repositoryId: string, project: string, filter: string, includeLinks: boolean, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRef[]) => void): void;
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project: string, projectId: string, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRefUpdateResult[]) => void): void;
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepository, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void): void;
    deleteRepository(repositoryId: string, project: string, onResult: (err: any, statusCode: number) => void): void;
    getRepositories(project: string, includeLinks: boolean, onResult: (err: any, statusCode: number, Repositories: GitInterfaces.GitRepository[]) => void): void;
    getRepository(repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void): void;
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void): void;
    getTree(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, Tree: GitInterfaces.GitTreeRef) => void): void;
    getTreeZip(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
}
export interface IQGitApi {
    connect(): Q.Promise<void>;
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): Q.Promise<GitInterfaces.GitBlobRef>;
    getBranch(repositoryId: string, name: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitBranchStats>;
    getBranches(repositoryId: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitBranchStats[]>;
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number): Q.Promise<GitInterfaces.GitCommitChanges>;
    createCommit(repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitCommit>;
    getCommit(commitId: string, repositoryId: string, project?: string, changeCount?: number): Q.Promise<GitInterfaces.GitCommit>;
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitItem>;
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitItem[]>;
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitItem[][]>;
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote>;
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote>;
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitPullRequest>;
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number): Q.Promise<GitInterfaces.GitPullRequest>;
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number): Q.Promise<GitInterfaces.GitPullRequest[]>;
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequest>;
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project?: string, commitsTop?: number, commitsSkip?: number): Q.Promise<GitInterfaces.AssociatedWorkItem[]>;
    createPush(push: GitInterfaces.GitPush, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitPush>;
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean): Q.Promise<GitInterfaces.GitPush>;
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: GitInterfaces.GitPushSearchCriteria): Q.Promise<GitInterfaces.GitPush[]>;
    getRefs(repositoryId: string, project?: string, filter?: string, includeLinks?: boolean): Q.Promise<GitInterfaces.GitRef[]>;
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string): Q.Promise<GitInterfaces.GitRefUpdateResult[]>;
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepository, project?: string): Q.Promise<GitInterfaces.GitRepository>;
    getRepositories(project?: string, includeLinks?: boolean): Q.Promise<GitInterfaces.GitRepository[]>;
    getRepository(repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitRepository>;
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitRepository>;
    getTree(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): Q.Promise<GitInterfaces.GitTreeRef>;
}
export declare class GitApi implements IGitApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    setUserAgent(userAgent: string): void;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    /**
     * Gets a single blob.
     *
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @param onResult cllback function with the resulting GitInterfaces.GitBlobRef
     */
    getBlob(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, Blob: GitInterfaces.GitBlobRef) => void): void;
    /**
     * Gets a single blob.
     *
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getBlobContent(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Gets one or more blobs in a zip file download.
     *
     * @param {string[]} blobIds
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {string} filename
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getBlobsZip(blobIds: string[], repositoryId: string, project: string, filename: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Gets a single blob.
     *
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getBlobZip(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Retrieve statistics about a single branch.
     *
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} name - Name of the branch
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
     * @param onResult cllback function with the resulting GitInterfaces.GitBranchStats
     */
    getBranch(repositoryId: string, name: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, BranchStat: GitInterfaces.GitBranchStats) => void): void;
    /**
     * Retrieve statistics about all branches within a repository.
     *
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
     * @param onResult cllback function with the resulting GitInterfaces.GitBranchStats[]
     */
    getBranches(repositoryId: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, BranchStats: GitInterfaces.GitBranchStats[]) => void): void;
    /**
     * Retrieve changes for a particular commit.
     *
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of changes to return.
     * @param {number} skip - The number of changes to skip.
     * @param onResult cllback function with the resulting GitInterfaces.GitCommitChanges
     */
    getChanges(commitId: string, repositoryId: string, project: string, top: number, skip: number, onResult: (err: any, statusCode: number, Change: GitInterfaces.GitCommitChanges) => void): void;
    /**
     * Create a git commit for a project
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.GitCommit
     */
    createCommit(repositoryId: string, project: string, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void): void;
    /**
     * Retrieve a particular commit.
     *
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} changeCount - The number of changes to include in the result.
     * @param onResult cllback function with the resulting GitInterfaces.GitCommit
     */
    getCommit(commitId: string, repositoryId: string, project: string, changeCount: number, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void): void;
    /**
     * Retrieve git commits for a project
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param onResult cllback function with the resulting GitInterfaces.GitCommitRef[]
     */
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project: string, skip: number, top: number, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void): void;
    /**
     * Retrieve a list of commits associated with a particular push.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of commits to return ("get the top x commits").
     * @param {number} skip - The number of commits to skip.
     * @param {boolean} includeLinks
     * @param onResult cllback function with the resulting GitInterfaces.GitCommitRef[]
     */
    getPushCommits(repositoryId: string, pushId: number, project: string, top: number, skip: number, includeLinks: boolean, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void): void;
    /**
     * Retrieve git commits for a project
     *
     * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria - Search options
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param onResult cllback function with the resulting GitInterfaces.GitCommitRef[]
     */
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project: string, skip: number, top: number, onResult: (err: any, statusCode: number, CommitsBatch: GitInterfaces.GitCommitRef[]) => void): void;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting GitInterfaces.GitItem
     */
    getItem(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Item: GitInterfaces.GitItem) => void): void;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getItemContent(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {boolean} includeLinks
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting GitInterfaces.GitItem[]
     */
    getItems(repositoryId: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, includeLinks: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Items: GitInterfaces.GitItem[]) => void): void;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting string
     */
    getItemText(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getItemZip(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     *
     * @param {GitInterfaces.GitItemRequestData} requestData
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.GitItem[][]
     */
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project: string, onResult: (err: any, statusCode: number, ItemsBatch: GitInterfaces.GitItem[][]) => void): void;
    /**
     * Adds a reviewer to a git pull request
     *
     * @param {GitInterfaces.IdentityRefWithVote} reviewer
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.IdentityRefWithVote
     */
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => void): void;
    /**
     * Adds reviewers to a git pull request
     *
     * @param {VSSInterfaces.IdentityRef[]} reviewers
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.IdentityRefWithVote[]
     */
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project: string, onResult: (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => void): void;
    /**
     * Adds reviewers to a git pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function
     */
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * Retrieve a reviewer from a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.IdentityRefWithVote
     */
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => void): void;
    /**
     * Retrieve a pull request reviewers
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.IdentityRefWithVote[]
     */
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project: string, onResult: (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => void): void;
    /**
     * Create a git pull request
     *
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToCreate
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.GitPullRequest
     */
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project: string, onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void): void;
    /**
     * Retrieve a pull request
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @param onResult cllback function with the resulting GitInterfaces.GitPullRequest
     */
    getPullRequest(repositoryId: string, pullRequestId: number, project: string, maxCommentLength: number, skip: number, top: number, onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void): void;
    /**
     * Query for pull requests
     *
     * @param {string} repositoryId
     * @param {GitInterfaces.GitPullRequestSearchCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @param onResult cllback function with the resulting GitInterfaces.GitPullRequest[]
     */
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project: string, maxCommentLength: number, skip: number, top: number, onResult: (err: any, statusCode: number, PullRequests: GitInterfaces.GitPullRequest[]) => void): void;
    /**
     * Updates a pull request
     *
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToUpdate
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.GitPullRequest
     */
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project: string, onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void): void;
    /**
     * Retrieve a pull request work items
     *
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} commitsTop
     * @param {number} commitsSkip
     * @param onResult cllback function with the resulting GitInterfaces.AssociatedWorkItem[]
     */
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project: string, commitsTop: number, commitsSkip: number, onResult: (err: any, statusCode: number, PullRequestWorkItems: GitInterfaces.AssociatedWorkItem[]) => void): void;
    /**
     * Push changes to the repository.
     *
     * @param {GitInterfaces.GitPush} push
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, a project-scoped route must be used.
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.GitPush
     */
    createPush(push: GitInterfaces.GitPush, repositoryId: string, project: string, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void): void;
    /**
     * Retrieve a particular push.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} includeCommits - The number of commits to include in the result.
     * @param {boolean} includeRefUpdates
     * @param onResult cllback function with the resulting GitInterfaces.GitPush
     */
    getPush(repositoryId: string, pushId: number, project: string, includeCommits: number, includeRefUpdates: boolean, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void): void;
    /**
     * Retrieves pushes associated with the specified repository.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {GitInterfaces.GitPushSearchCriteria} searchCriteria
     * @param onResult cllback function with the resulting GitInterfaces.GitPush[]
     */
    getPushes(repositoryId: string, project: string, skip: number, top: number, searchCriteria: GitInterfaces.GitPushSearchCriteria, onResult: (err: any, statusCode: number, pushes: GitInterfaces.GitPush[]) => void): void;
    /**
     * Queries the provided repository for its refs and returns them.
     *
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} filter - [optional] A filter to apply to the refs.
     * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     * @param onResult cllback function with the resulting GitInterfaces.GitRef[]
     */
    getRefs(repositoryId: string, project: string, filter: string, includeLinks: boolean, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRef[]) => void): void;
    /**
     * Creates or updates refs with the given information
     *
     * @param {GitInterfaces.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - The id of the project.
     * @param onResult cllback function with the resulting GitInterfaces.GitRefUpdateResult[]
     */
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project: string, projectId: string, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRefUpdateResult[]) => void): void;
    /**
     * Create a git repository
     *
     * @param {GitInterfaces.GitRepository} gitRepositoryToCreate
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.GitRepository
     */
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepository, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void): void;
    /**
     * Delete a git repository
     *
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function
     */
    deleteRepository(repositoryId: string, project: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * Retrieve git repositories.
     *
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks
     * @param onResult cllback function with the resulting GitInterfaces.GitRepository[]
     */
    getRepositories(project: string, includeLinks: boolean, onResult: (err: any, statusCode: number, Repositories: GitInterfaces.GitRepository[]) => void): void;
    /**
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.GitRepository
     */
    getRepository(repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void): void;
    /**
     * Updates the Git repository with the single populated change in the specified repository information.
     *
     * @param {GitInterfaces.GitRepository} newRepositoryInfo
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult cllback function with the resulting GitInterfaces.GitRepository
     */
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void): void;
    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     * @param onResult cllback function with the resulting GitInterfaces.GitTreeRef
     */
    getTree(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, Tree: GitInterfaces.GitTreeRef) => void): void;
    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     * @param onResult cllback function with the resulting ArrayBuffer
     */
    getTreeZip(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
}
export declare class QGitApi implements IQGitApi {
    GitApi: IGitApi;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    connect(): Q.Promise<any>;
    /**
    * Gets a single blob.
    *
    * @param {string} repositoryId
    * @param {string} sha1
    * @param {string} project - Project ID or project name
    * @param {boolean} download
    * @param {string} fileName
    */
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): Q.Promise<GitInterfaces.GitBlobRef>;
    /**
    * Retrieve statistics about a single branch.
    *
    * @param {string} repositoryId - Friendly name or guid of repository
    * @param {string} name - Name of the branch
    * @param {string} project - Project ID or project name
    * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
    */
    getBranch(repositoryId: string, name: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitBranchStats>;
    /**
    * Retrieve statistics about all branches within a repository.
    *
    * @param {string} repositoryId - Friendly name or guid of repository
    * @param {string} project - Project ID or project name
    * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
    */
    getBranches(repositoryId: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitBranchStats[]>;
    /**
    * Retrieve changes for a particular commit.
    *
    * @param {string} commitId - The id of the commit.
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {number} top - The maximum number of changes to return.
    * @param {number} skip - The number of changes to skip.
    */
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number): Q.Promise<GitInterfaces.GitCommitChanges>;
    /**
    * Create a git commit for a project
    *
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    */
    createCommit(repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitCommit>;
    /**
    * Retrieve a particular commit.
    *
    * @param {string} commitId - The id of the commit.
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {number} changeCount - The number of changes to include in the result.
    */
    getCommit(commitId: string, repositoryId: string, project?: string, changeCount?: number): Q.Promise<GitInterfaces.GitCommit>;
    /**
    * Retrieve git commits for a project
    *
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    */
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number): Q.Promise<GitInterfaces.GitCommitRef[]>;
    /**
    * Retrieve a list of commits associated with a particular push.
    *
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {number} pushId - The id of the push.
    * @param {string} project - Project ID or project name
    * @param {number} top - The maximum number of commits to return ("get the top x commits").
    * @param {number} skip - The number of commits to skip.
    * @param {boolean} includeLinks
    */
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean): Q.Promise<GitInterfaces.GitCommitRef[]>;
    /**
    * Retrieve git commits for a project
    *
    * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria - Search options
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    */
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number): Q.Promise<GitInterfaces.GitCommitRef[]>;
    /**
    * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
    *
    * @param {string} repositoryId
    * @param {string} path
    * @param {string} project - Project ID or project name
    * @param {string} scopePath
    * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
    * @param {boolean} includeContentMetadata
    * @param {boolean} latestProcessedChange
    * @param {boolean} download
    * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
    */
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitItem>;
    /**
    * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
    *
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    * @param {string} scopePath
    * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
    * @param {boolean} includeContentMetadata
    * @param {boolean} latestProcessedChange
    * @param {boolean} download
    * @param {boolean} includeLinks
    * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
    */
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitItem[]>;
    /**
    * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
    *
    * @param {GitInterfaces.GitItemRequestData} requestData
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    */
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitItem[][]>;
    /**
    * Adds a reviewer to a git pull request
    *
    * @param {GitInterfaces.IdentityRefWithVote} reviewer
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} reviewerId
    * @param {string} project - Project ID or project name
    */
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote>;
    /**
    * Adds reviewers to a git pull request
    *
    * @param {VSSInterfaces.IdentityRef[]} reviewers
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    */
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
    /**
    * Retrieve a reviewer from a pull request
    *
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} reviewerId
    * @param {string} project - Project ID or project name
    */
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote>;
    /**
    * Retrieve a pull request reviewers
    *
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    */
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
    /**
    * Create a git pull request
    *
    * @param {GitInterfaces.GitPullRequest} gitPullRequestToCreate
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    */
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitPullRequest>;
    /**
    * Retrieve a pull request
    *
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    * @param {number} maxCommentLength
    * @param {number} skip
    * @param {number} top
    */
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number): Q.Promise<GitInterfaces.GitPullRequest>;
    /**
    * Query for pull requests
    *
    * @param {string} repositoryId
    * @param {GitInterfaces.GitPullRequestSearchCriteria} searchCriteria
    * @param {string} project - Project ID or project name
    * @param {number} maxCommentLength
    * @param {number} skip
    * @param {number} top
    */
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number): Q.Promise<GitInterfaces.GitPullRequest[]>;
    /**
    * Updates a pull request
    *
    * @param {GitInterfaces.GitPullRequest} gitPullRequestToUpdate
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    */
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequest>;
    /**
    * Retrieve a pull request work items
    *
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    * @param {number} commitsTop
    * @param {number} commitsSkip
    */
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project?: string, commitsTop?: number, commitsSkip?: number): Q.Promise<GitInterfaces.AssociatedWorkItem[]>;
    /**
    * Push changes to the repository.
    *
    * @param {GitInterfaces.GitPush} push
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, a project-scoped route must be used.
    * @param {string} project - Project ID or project name
    */
    createPush(push: GitInterfaces.GitPush, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitPush>;
    /**
    * Retrieve a particular push.
    *
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {number} pushId - The id of the push.
    * @param {string} project - Project ID or project name
    * @param {number} includeCommits - The number of commits to include in the result.
    * @param {boolean} includeRefUpdates
    */
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean): Q.Promise<GitInterfaces.GitPush>;
    /**
    * Retrieves pushes associated with the specified repository.
    *
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    * @param {GitInterfaces.GitPushSearchCriteria} searchCriteria
    */
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: GitInterfaces.GitPushSearchCriteria): Q.Promise<GitInterfaces.GitPush[]>;
    /**
    * Queries the provided repository for its refs and returns them.
    *
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {string} filter - [optional] A filter to apply to the refs.
    * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
    */
    getRefs(repositoryId: string, project?: string, filter?: string, includeLinks?: boolean): Q.Promise<GitInterfaces.GitRef[]>;
    /**
    * Creates or updates refs with the given information
    *
    * @param {GitInterfaces.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {string} projectId - The id of the project.
    */
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string): Q.Promise<GitInterfaces.GitRefUpdateResult[]>;
    /**
    * Create a git repository
    *
    * @param {GitInterfaces.GitRepository} gitRepositoryToCreate
    * @param {string} project - Project ID or project name
    */
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepository, project?: string): Q.Promise<GitInterfaces.GitRepository>;
    /**
    * Retrieve git repositories.
    *
    * @param {string} project - Project ID or project name
    * @param {boolean} includeLinks
    */
    getRepositories(project?: string, includeLinks?: boolean): Q.Promise<GitInterfaces.GitRepository[]>;
    /**
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    */
    getRepository(repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitRepository>;
    /**
    * Updates the Git repository with the single populated change in the specified repository information.
    *
    * @param {GitInterfaces.GitRepository} newRepositoryInfo
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    */
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitRepository>;
    /**
    * @param {string} repositoryId
    * @param {string} sha1
    * @param {string} project - Project ID or project name
    * @param {string} projectId
    * @param {boolean} recursive
    * @param {string} fileName
    */
    getTree(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): Q.Promise<GitInterfaces.GitTreeRef>;
}
