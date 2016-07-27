/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.


import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import GitInterfaces = require("./interfaces/GitInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IGitApi extends basem.ClientApiBase {
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): Q.Promise<GitInterfaces.GitBlobRef>;
    getBlobContent(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): Q.Promise<NodeJS.ReadableStream>;
    getBlobsZip(blobIds: string[], repositoryId: string, project?: string, filename?: string): Q.Promise<NodeJS.ReadableStream>;
    getBlobZip(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): Q.Promise<NodeJS.ReadableStream>;
    getBranch(repositoryId: string, name: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitBranchStats>;
    getBranches(repositoryId: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitBranchStats[]>;
    getBranchStatsBatch(searchCriteria: GitInterfaces.GitQueryBranchStatsCriteria, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitBranchStats[]>;
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number): Q.Promise<GitInterfaces.GitCommitChanges>;
    createCherryPick(cherryPickToCreate: GitInterfaces.GitAsyncRefOperationParameters, project: string, repositoryId: string): Q.Promise<GitInterfaces.GitCherryPick>;
    getCherryPick(project: string, cherryPickId: number, repositoryId: string): Q.Promise<GitInterfaces.GitCherryPick>;
    getCherryPickForRefName(project: string, repositoryId: string, refName: string): Q.Promise<GitInterfaces.GitCherryPick>;
    getCommit(commitId: string, repositoryId: string, project?: string, changeCount?: number): Q.Promise<GitInterfaces.GitCommit>;
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number, includeStatuses?: boolean): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getDeletedRepositories(project: string): Q.Promise<GitInterfaces.GitDeletedRepository[]>;
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitItem>;
    getItemContent(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<NodeJS.ReadableStream>;
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitItem[]>;
    getItemText(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<NodeJS.ReadableStream>;
    getItemZip(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<NodeJS.ReadableStream>;
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitItem[][]>;
    getPullRequestIterationCommits(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getPullRequestCommits(repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getPullRequestIterationChanges(repositoryId: string, pullRequestId: number, iterationId: number, project?: string, top?: number, skip?: number, compareTo?: number): Q.Promise<GitInterfaces.GitPullRequestIterationChanges>;
    getPullRequestIteration(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestIteration>;
    getPullRequestIterations(repositoryId: string, pullRequestId: number, project?: string, includeCommits?: boolean): Q.Promise<GitInterfaces.GitPullRequestIteration[]>;
    getPullRequestQuery(queries: GitInterfaces.GitPullRequestQuery, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitPullRequestQuery>;
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote>;
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Q.Promise<void>;
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote>;
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
    getPullRequestById(pullRequestId: number): Q.Promise<GitInterfaces.GitPullRequest>;
    getPullRequestsByProject(project: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, maxCommentLength?: number, skip?: number, top?: number): Q.Promise<GitInterfaces.GitPullRequest[]>;
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitPullRequest>;
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number, includeCommits?: boolean, includeWorkItemRefs?: boolean): Q.Promise<GitInterfaces.GitPullRequest>;
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number): Q.Promise<GitInterfaces.GitPullRequest[]>;
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequest>;
    createPullRequestIterationStatus(status: GitInterfaces.GitPullRequestStatus, repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestIterationStatuses(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestStatus[]>;
    createPullRequestStatus(status: GitInterfaces.GitPullRequestStatus, repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestStatuses(repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestStatus[]>;
    createThread(commentThread: GitInterfaces.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestCommentThread>;
    getPullRequestThread(repositoryId: string, pullRequestId: number, threadId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestCommentThread>;
    getThreads(repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestCommentThread[]>;
    updateThread(commentThread: GitInterfaces.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, threadId: number, project?: string): Q.Promise<GitInterfaces.GitPullRequestCommentThread>;
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project?: string): Q.Promise<GitInterfaces.AssociatedWorkItem[]>;
    createPush(push: GitInterfaces.GitPush, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitPush>;
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean): Q.Promise<GitInterfaces.GitPush>;
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: GitInterfaces.GitPushSearchCriteria): Q.Promise<GitInterfaces.GitPush[]>;
    createRefLockRequest(refLockRequest: GitInterfaces.GitRefLockRequest, project: string, repositoryId: string): Q.Promise<void>;
    getRefs(repositoryId: string, project?: string, filter?: string, includeLinks?: boolean): Q.Promise<GitInterfaces.GitRef[]>;
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string): Q.Promise<GitInterfaces.GitRefUpdateResult[]>;
    createFavorite(favorite: GitInterfaces.GitRefFavorite, project: string): Q.Promise<GitInterfaces.GitRefFavorite>;
    deleteRefFavorite(project: string, favoriteId: number): Q.Promise<void>;
    getRefFavorite(project: string, favoriteId: number): Q.Promise<GitInterfaces.GitRefFavorite>;
    getRefFavorites(project: string, repositoryId?: string, identityId?: string): Q.Promise<GitInterfaces.GitRefFavorite[]>;
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepository, project?: string): Q.Promise<GitInterfaces.GitRepository>;
    deleteRepository(repositoryId: string, project?: string): Q.Promise<void>;
    getRepositories(project?: string, includeLinks?: boolean): Q.Promise<GitInterfaces.GitRepository[]>;
    getRepository(repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitRepository>;
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitRepository>;
    createRevert(revertToCreate: GitInterfaces.GitAsyncRefOperationParameters, project: string, repositoryId: string): Q.Promise<GitInterfaces.GitRevert>;
    getRevert(project: string, revertId: number, repositoryId: string): Q.Promise<GitInterfaces.GitRevert>;
    getRevertForRefName(project: string, repositoryId: string, refName: string): Q.Promise<GitInterfaces.GitRevert>;
    createCommitStatus(gitCommitStatusToCreate: GitInterfaces.GitStatus, commitId: string, repositoryId: string, project?: string): Q.Promise<GitInterfaces.GitStatus>;
    getStatuses(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number, latestOnly?: boolean): Q.Promise<GitInterfaces.GitStatus[]>;
    getTree(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): Q.Promise<GitInterfaces.GitTreeRef>;
    getTreeZip(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): Q.Promise<NodeJS.ReadableStream>;
}

export class GitApi extends basem.ClientApiBase implements IGitApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Git-api');
    }

    /**
     * Gets a single blob.
     * 
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     */
    public getBlob(
        repositoryId: string,
        sha1: string,
        project?: string,
        download?: boolean,
        fileName?: string
        ): Q.Promise<GitInterfaces.GitBlobRef> {
    
        var deferred = Q.defer<GitInterfaces.GitBlobRef>();

        var onResult = (err: any, statusCode: number, Blob: GitInterfaces.GitBlobRef) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Blob);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues: any = {
            download: download,
            fileName: fileName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "7b28e929-2c99-405d-9c5c-6167a06e6816", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitBlobRef>>deferred.promise;
    }

    /**
     * Gets a single blob.
     * 
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     */
    public getBlobContent(
        repositoryId: string,
        sha1: string,
        project?: string,
        download?: boolean,
        fileName?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, Blob: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Blob);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues: any = {
            download: download,
            fileName: fileName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "7b28e929-2c99-405d-9c5c-6167a06e6816", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * Gets one or more blobs in a zip file download.
     * 
     * @param {string[]} blobIds
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {string} filename
     */
    public getBlobsZip(
        blobIds: string[],
        repositoryId: string,
        project?: string,
        filename?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, Blob: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Blob);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            filename: filename,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "7b28e929-2c99-405d-9c5c-6167a06e6816", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * Gets a single blob.
     * 
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     */
    public getBlobZip(
        repositoryId: string,
        sha1: string,
        project?: string,
        download?: boolean,
        fileName?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, Blob: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Blob);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues: any = {
            download: download,
            fileName: fileName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "7b28e929-2c99-405d-9c5c-6167a06e6816", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * Retrieve statistics about a single branch.
     * 
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} name - Name of the branch
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
     */
    public getBranch(
        repositoryId: string,
        name: string,
        project?: string,
        baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<GitInterfaces.GitBranchStats> {
    
        var deferred = Q.defer<GitInterfaces.GitBranchStats>();

        var onResult = (err: any, statusCode: number, BranchStat: GitInterfaces.GitBranchStats) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(BranchStat);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            name: name,
            baseVersionDescriptor: baseVersionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "d5b216de-d8d5-4d32-ae76-51df755b16d3", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitBranchStats, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitBranchStats>>deferred.promise;
    }

    /**
     * Retrieve statistics about all branches within a repository.
     * 
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
     */
    public getBranches(
        repositoryId: string,
        project?: string,
        baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<GitInterfaces.GitBranchStats[]> {
    
        var deferred = Q.defer<GitInterfaces.GitBranchStats[]>();

        var onResult = (err: any, statusCode: number, BranchStats: GitInterfaces.GitBranchStats[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(BranchStats);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            baseVersionDescriptor: baseVersionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "d5b216de-d8d5-4d32-ae76-51df755b16d3", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitBranchStats, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitBranchStats[]>>deferred.promise;
    }

    /**
     * Retrieve statistics for multiple commits
     * 
     * @param {GitInterfaces.GitQueryBranchStatsCriteria} searchCriteria
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     */
    public getBranchStatsBatch(
        searchCriteria: GitInterfaces.GitQueryBranchStatsCriteria,
        repositoryId: string,
        project?: string
        ): Q.Promise<GitInterfaces.GitBranchStats[]> {
    
        var deferred = Q.defer<GitInterfaces.GitBranchStats[]>();

        var onResult = (err: any, statusCode: number, BranchStat: GitInterfaces.GitBranchStats[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(BranchStat);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "d5b216de-d8d5-4d32-ae76-51df755b16d3", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitQueryBranchStatsCriteria, responseTypeMetadata: GitInterfaces.TypeInfo.GitBranchStats, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, searchCriteria, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitBranchStats[]>>deferred.promise;
    }

    /**
     * Retrieve changes for a particular commit.
     * 
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of changes to return.
     * @param {number} skip - The number of changes to skip.
     */
    public getChanges(
        commitId: string,
        repositoryId: string,
        project?: string,
        top?: number,
        skip?: number
        ): Q.Promise<GitInterfaces.GitCommitChanges> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitChanges>();

        var onResult = (err: any, statusCode: number, Change: GitInterfaces.GitCommitChanges) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Change);
            }
        };

        var routeValues: any = {
            project: project,
            commitId: commitId,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            top: top,
            skip: skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "5bf884f5-3e07-42e9-afb8-1b872267bf16", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitChanges, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCommitChanges>>deferred.promise;
    }

    /**
     * @param {GitInterfaces.GitAsyncRefOperationParameters} cherryPickToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     */
    public createCherryPick(
        cherryPickToCreate: GitInterfaces.GitAsyncRefOperationParameters,
        project: string,
        repositoryId: string
        ): Q.Promise<GitInterfaces.GitCherryPick> {
    
        var deferred = Q.defer<GitInterfaces.GitCherryPick>();

        var onResult = (err: any, statusCode: number, CherryPick: GitInterfaces.GitCherryPick) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CherryPick);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "033bad68-9a14-43d1-90e0-59cb8856fef6", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitAsyncRefOperationParameters, responseTypeMetadata: GitInterfaces.TypeInfo.GitCherryPick, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, cherryPickToCreate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCherryPick>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} cherryPickId
     * @param {string} repositoryId
     */
    public getCherryPick(
        project: string,
        cherryPickId: number,
        repositoryId: string
        ): Q.Promise<GitInterfaces.GitCherryPick> {
    
        var deferred = Q.defer<GitInterfaces.GitCherryPick>();

        var onResult = (err: any, statusCode: number, CherryPick: GitInterfaces.GitCherryPick) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CherryPick);
            }
        };

        var routeValues: any = {
            project: project,
            cherryPickId: cherryPickId,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "033bad68-9a14-43d1-90e0-59cb8856fef6", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCherryPick, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCherryPick>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {string} refName
     */
    public getCherryPickForRefName(
        project: string,
        repositoryId: string,
        refName: string
        ): Q.Promise<GitInterfaces.GitCherryPick> {
    
        var deferred = Q.defer<GitInterfaces.GitCherryPick>();

        var onResult = (err: any, statusCode: number, CherryPick: GitInterfaces.GitCherryPick) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CherryPick);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            refName: refName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "033bad68-9a14-43d1-90e0-59cb8856fef6", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCherryPick, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCherryPick>>deferred.promise;
    }

    /**
     * Retrieve a particular commit.
     * 
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} changeCount - The number of changes to include in the result.
     */
    public getCommit(
        commitId: string,
        repositoryId: string,
        project?: string,
        changeCount?: number
        ): Q.Promise<GitInterfaces.GitCommit> {
    
        var deferred = Q.defer<GitInterfaces.GitCommit>();

        var onResult = (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Commit);
            }
        };

        var routeValues: any = {
            project: project,
            commitId: commitId,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            changeCount: changeCount,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "c2570c3b-5b3f-41b8-98bf-5407bfde8d58", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommit, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCommit>>deferred.promise;
    }

    /**
     * Retrieve git commits for a project
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     */
    public getCommits(
        repositoryId: string,
        searchCriteria: GitInterfaces.GitQueryCommitsCriteria,
        project?: string,
        skip?: number,
        top?: number
        ): Q.Promise<GitInterfaces.GitCommitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitRef[]>();

        var onResult = (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Commits);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            searchCriteria: searchCriteria,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "c2570c3b-5b3f-41b8-98bf-5407bfde8d58", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitRef, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCommitRef[]>>deferred.promise;
    }

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
    public getPushCommits(
        repositoryId: string,
        pushId: number,
        project?: string,
        top?: number,
        skip?: number,
        includeLinks?: boolean
        ): Q.Promise<GitInterfaces.GitCommitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitRef[]>();

        var onResult = (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Commits);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            pushId: pushId,
            top: top,
            skip: skip,
            includeLinks: includeLinks,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "c2570c3b-5b3f-41b8-98bf-5407bfde8d58", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitRef, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCommitRef[]>>deferred.promise;
    }

    /**
     * Retrieve git commits for a project
     * 
     * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria - Search options
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includeStatuses
     */
    public getCommitsBatch(
        searchCriteria: GitInterfaces.GitQueryCommitsCriteria,
        repositoryId: string,
        project?: string,
        skip?: number,
        top?: number,
        includeStatuses?: boolean
        ): Q.Promise<GitInterfaces.GitCommitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitRef[]>();

        var onResult = (err: any, statusCode: number, CommitsBatch: GitInterfaces.GitCommitRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CommitsBatch);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            '$skip': skip,
            '$top': top,
            includeStatuses: includeStatuses,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "6400dfb2-0bcb-462b-b992-5a57f8f1416c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitQueryCommitsCriteria, responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitRef, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, searchCriteria, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCommitRef[]>>deferred.promise;
    }

    /**
     * Retrieve deleted git repositories.
     * 
     * @param {string} project - Project ID or project name
     */
    public getDeletedRepositories(
        project: string
        ): Q.Promise<GitInterfaces.GitDeletedRepository[]> {
    
        var deferred = Q.defer<GitInterfaces.GitDeletedRepository[]>();

        var onResult = (err: any, statusCode: number, DeletedRepositories: GitInterfaces.GitDeletedRepository[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(DeletedRepositories);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "2b6869c4-cb25-42b5-b7a3-0d3e6be0a11a", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitDeletedRepository, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitDeletedRepository[]>>deferred.promise;
    }

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
    public getItem(
        repositoryId: string,
        path: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<GitInterfaces.GitItem> {
    
        var deferred = Q.defer<GitInterfaces.GitItem>();

        var onResult = (err: any, statusCode: number, Item: GitInterfaces.GitItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Item);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            path: path,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitItem, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitItem>>deferred.promise;
    }

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
    public getItemContent(
        repositoryId: string,
        path: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, Item: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Item);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            path: path,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

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
    public getItems(
        repositoryId: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        includeLinks?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<GitInterfaces.GitItem[]> {
    
        var deferred = Q.defer<GitInterfaces.GitItem[]>();

        var onResult = (err: any, statusCode: number, Items: GitInterfaces.GitItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Items);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            includeLinks: includeLinks,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitItem, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitItem[]>>deferred.promise;
    }

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
    public getItemText(
        repositoryId: string,
        path: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, Item: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Item);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            path: path,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "text/plain", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

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
    public getItemZip(
        repositoryId: string,
        path: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, Item: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Item);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            path: path,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     * 
     * @param {GitInterfaces.GitItemRequestData} requestData
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public getItemsBatch(
        requestData: GitInterfaces.GitItemRequestData,
        repositoryId: string,
        project?: string
        ): Q.Promise<GitInterfaces.GitItem[][]> {
    
        var deferred = Q.defer<GitInterfaces.GitItem[][]>();

        var onResult = (err: any, statusCode: number, ItemsBatch: GitInterfaces.GitItem[][]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ItemsBatch);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "630fd2e4-fb88-4f85-ad21-13f3fd1fbca9", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitItemRequestData, responseTypeMetadata: GitInterfaces.TypeInfo.GitItem, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, requestData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitItem[][]>>deferred.promise;
    }

    /**
     * Get the commits for an iteration.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId - Iteration to retrieve commits for
     * @param {string} project - Project ID or project name
     */
    public getPullRequestIterationCommits(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitCommitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitRef[]>();

        var onResult = (err: any, statusCode: number, PullRequestCommits: GitInterfaces.GitCommitRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestCommits);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            iterationId: iterationId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "e7ea0883-095f-4926-b5fb-f24691c26fb9", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitRef, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCommitRef[]>>deferred.promise;
    }

    /**
     * Retrieve pull request's commits
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestCommits(
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitCommitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitRef[]>();

        var onResult = (err: any, statusCode: number, PullRequestCommits: GitInterfaces.GitCommitRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestCommits);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "52823034-34a8-4576-922c-8d8b77e9e4c4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitRef, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitCommitRef[]>>deferred.promise;
    }

    /**
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     * @param {number} top
     * @param {number} skip
     * @param {number} compareTo
     */
    public getPullRequestIterationChanges(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string,
        top?: number,
        skip?: number,
        compareTo?: number
        ): Q.Promise<GitInterfaces.GitPullRequestIterationChanges> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestIterationChanges>();

        var onResult = (err: any, statusCode: number, PullRequestIterationChange: GitInterfaces.GitPullRequestIterationChanges) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestIterationChange);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            iterationId: iterationId
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
            '$compareTo': compareTo,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4216bdcf-b6b1-4d59-8b82-c34cc183fc8b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestIterationChanges, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestIterationChanges>>deferred.promise;
    }

    /**
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestIteration(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestIteration> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestIteration>();

        var onResult = (err: any, statusCode: number, PullRequestIteration: GitInterfaces.GitPullRequestIteration) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestIteration);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            iterationId: iterationId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "d43911ee-6958-46b0-a42b-8445b8a0d004", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestIteration, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestIteration>>deferred.promise;
    }

    /**
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {boolean} includeCommits
     */
    public getPullRequestIterations(
        repositoryId: string,
        pullRequestId: number,
        project?: string,
        includeCommits?: boolean
        ): Q.Promise<GitInterfaces.GitPullRequestIteration[]> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestIteration[]>();

        var onResult = (err: any, statusCode: number, PullRequestIterations: GitInterfaces.GitPullRequestIteration[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestIterations);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        var queryValues: any = {
            includeCommits: includeCommits,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "d43911ee-6958-46b0-a42b-8445b8a0d004", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestIteration, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestIteration[]>>deferred.promise;
    }

    /**
     * Query for pull requests
     * 
     * @param {GitInterfaces.GitPullRequestQuery} queries
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestQuery(
        queries: GitInterfaces.GitPullRequestQuery,
        repositoryId: string,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestQuery> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestQuery>();

        var onResult = (err: any, statusCode: number, PullRequestQuery: GitInterfaces.GitPullRequestQuery) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestQuery);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "b3a6eebe-9cf0-49ea-b6cb-1a4c5f5007b0", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestQuery, responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestQuery, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, queries, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestQuery>>deferred.promise;
    }

    /**
     * Adds a reviewer to a git pull request
     * 
     * @param {GitInterfaces.IdentityRefWithVote} reviewer
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     */
    public createPullRequestReviewer(
        reviewer: GitInterfaces.IdentityRefWithVote,
        repositoryId: string,
        pullRequestId: number,
        reviewerId: string,
        project?: string
        ): Q.Promise<GitInterfaces.IdentityRefWithVote> {
    
        var deferred = Q.defer<GitInterfaces.IdentityRefWithVote>();

        var onResult = (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestReviewer);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            reviewerId: reviewerId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.replace(url, apiVersion, reviewer, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.IdentityRefWithVote>>deferred.promise;
    }

    /**
     * Adds reviewers to a git pull request
     * 
     * @param {VSSInterfaces.IdentityRef[]} reviewers
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public createPullRequestReviewers(
        reviewers: VSSInterfaces.IdentityRef[],
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Q.Promise<GitInterfaces.IdentityRefWithVote[]> {
    
        var deferred = Q.defer<GitInterfaces.IdentityRefWithVote[]>();

        var onResult = (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestReviewers);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, reviewers, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.IdentityRefWithVote[]>>deferred.promise;
    }

    /**
     * Adds reviewers to a git pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     */
    public deletePullRequestReviewer(
        repositoryId: string,
        pullRequestId: number,
        reviewerId: string,
        project?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            reviewerId: reviewerId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * Retrieve a reviewer from a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestReviewer(
        repositoryId: string,
        pullRequestId: number,
        reviewerId: string,
        project?: string
        ): Q.Promise<GitInterfaces.IdentityRefWithVote> {
    
        var deferred = Q.defer<GitInterfaces.IdentityRefWithVote>();

        var onResult = (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestReviewer);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            reviewerId: reviewerId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.IdentityRefWithVote>>deferred.promise;
    }

    /**
     * Retrieve a pull request reviewers
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestReviewers(
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Q.Promise<GitInterfaces.IdentityRefWithVote[]> {
    
        var deferred = Q.defer<GitInterfaces.IdentityRefWithVote[]>();

        var onResult = (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestReviewers);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.IdentityRefWithVote[]>>deferred.promise;
    }

    /**
     * Get a pull request using it's ID
     * 
     * @param {number} pullRequestId - the Id of the pull request
     */
    public getPullRequestById(
        pullRequestId: number
        ): Q.Promise<GitInterfaces.GitPullRequest> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest>();

        var onResult = (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequest);
            }
        };

        var routeValues: any = {
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "01a46dea-7d46-4d40-bc84-319e7c260d99", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequest>>deferred.promise;
    }

    /**
     * Query pull requests by project
     * 
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitPullRequestSearchCriteria} searchCriteria
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     */
    public getPullRequestsByProject(
        project: string,
        searchCriteria: GitInterfaces.GitPullRequestSearchCriteria,
        maxCommentLength?: number,
        skip?: number,
        top?: number
        ): Q.Promise<GitInterfaces.GitPullRequest[]> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest[]>();

        var onResult = (err: any, statusCode: number, PullRequests: GitInterfaces.GitPullRequest[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequests);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            searchCriteria: searchCriteria,
            maxCommentLength: maxCommentLength,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "a5d28130-9cd2-40fa-9f08-902e7daa9efb", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequest[]>>deferred.promise;
    }

    /**
     * Create a git pull request
     * 
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToCreate
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public createPullRequest(
        gitPullRequestToCreate: GitInterfaces.GitPullRequest,
        repositoryId: string,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequest> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest>();

        var onResult = (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequest);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "9946fd70-0d40-406e-b686-b4744cbbcc37", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, gitPullRequestToCreate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequest>>deferred.promise;
    }

    /**
     * Retrieve a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includeCommits
     * @param {boolean} includeWorkItemRefs
     */
    public getPullRequest(
        repositoryId: string,
        pullRequestId: number,
        project?: string,
        maxCommentLength?: number,
        skip?: number,
        top?: number,
        includeCommits?: boolean,
        includeWorkItemRefs?: boolean
        ): Q.Promise<GitInterfaces.GitPullRequest> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest>();

        var onResult = (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequest);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        var queryValues: any = {
            maxCommentLength: maxCommentLength,
            '$skip': skip,
            '$top': top,
            includeCommits: includeCommits,
            includeWorkItemRefs: includeWorkItemRefs,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "9946fd70-0d40-406e-b686-b4744cbbcc37", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequest>>deferred.promise;
    }

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
    public getPullRequests(
        repositoryId: string,
        searchCriteria: GitInterfaces.GitPullRequestSearchCriteria,
        project?: string,
        maxCommentLength?: number,
        skip?: number,
        top?: number
        ): Q.Promise<GitInterfaces.GitPullRequest[]> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest[]>();

        var onResult = (err: any, statusCode: number, PullRequests: GitInterfaces.GitPullRequest[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequests);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            searchCriteria: searchCriteria,
            maxCommentLength: maxCommentLength,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "9946fd70-0d40-406e-b686-b4744cbbcc37", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequest[]>>deferred.promise;
    }

    /**
     * Updates a pull request
     * 
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToUpdate
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public updatePullRequest(
        gitPullRequestToUpdate: GitInterfaces.GitPullRequest,
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequest> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest>();

        var onResult = (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequest);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "9946fd70-0d40-406e-b686-b4744cbbcc37", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, gitPullRequestToUpdate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequest>>deferred.promise;
    }

    /**
     * Create a pull request iteration status
     * 
     * @param {GitInterfaces.GitPullRequestStatus} status
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     */
    public createPullRequestIterationStatus(
        status: GitInterfaces.GitPullRequestStatus,
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestStatus> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestStatus>();

        var onResult = (err: any, statusCode: number, PullRequestStatuse: GitInterfaces.GitPullRequestStatus) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestStatuse);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            iterationId: iterationId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "75cf11c5-979f-4038-a76e-058a06adf2bf", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestStatus, responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestStatus, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, status, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestStatus>>deferred.promise;
    }

    /**
     * Get the specific pull request iteration status.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {number} statusId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestIterationStatus(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        statusId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestStatus> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestStatus>();

        var onResult = (err: any, statusCode: number, PullRequestStatuse: GitInterfaces.GitPullRequestStatus) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestStatuse);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            iterationId: iterationId,
            statusId: statusId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "75cf11c5-979f-4038-a76e-058a06adf2bf", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestStatus, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestStatus>>deferred.promise;
    }

    /**
     * Get all the statuses associated with a pull request iteration.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestIterationStatuses(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestStatus[]> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestStatus[]>();

        var onResult = (err: any, statusCode: number, PullRequestStatuses: GitInterfaces.GitPullRequestStatus[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestStatuses);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            iterationId: iterationId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "75cf11c5-979f-4038-a76e-058a06adf2bf", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestStatus, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestStatus[]>>deferred.promise;
    }

    /**
     * Create a pull request status
     * 
     * @param {GitInterfaces.GitPullRequestStatus} status
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public createPullRequestStatus(
        status: GitInterfaces.GitPullRequestStatus,
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestStatus> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestStatus>();

        var onResult = (err: any, statusCode: number, PullRequestStatuse: GitInterfaces.GitPullRequestStatus) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestStatuse);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestStatus, responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestStatus, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, status, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestStatus>>deferred.promise;
    }

    /**
     * Get the specific pull request status.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} statusId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestStatus(
        repositoryId: string,
        pullRequestId: number,
        statusId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestStatus> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestStatus>();

        var onResult = (err: any, statusCode: number, PullRequestStatuse: GitInterfaces.GitPullRequestStatus) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestStatuse);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            statusId: statusId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestStatus, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestStatus>>deferred.promise;
    }

    /**
     * Get all the statuses associated with a pull request.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestStatuses(
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestStatus[]> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestStatus[]>();

        var onResult = (err: any, statusCode: number, PullRequestStatuses: GitInterfaces.GitPullRequestStatus[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestStatuses);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestStatus, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestStatus[]>>deferred.promise;
    }

    /**
     * Create a pull request review comment thread
     * 
     * @param {GitInterfaces.GitPullRequestCommentThread} commentThread
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public createThread(
        commentThread: GitInterfaces.GitPullRequestCommentThread,
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestCommentThread> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestCommentThread>();

        var onResult = (err: any, statusCode: number, PullRequestThread: GitInterfaces.GitPullRequestCommentThread) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestThread);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestCommentThread, responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestCommentThread, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, commentThread, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestCommentThread>>deferred.promise;
    }

    /**
     * Get a pull request comment thread by id for a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestThread(
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestCommentThread> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestCommentThread>();

        var onResult = (err: any, statusCode: number, PullRequestThread: GitInterfaces.GitPullRequestCommentThread) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestThread);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            threadId: threadId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestCommentThread, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestCommentThread>>deferred.promise;
    }

    /**
     * Get all pull request comment threads.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public getThreads(
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestCommentThread[]> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestCommentThread[]>();

        var onResult = (err: any, statusCode: number, PullRequestThreads: GitInterfaces.GitPullRequestCommentThread[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestThreads);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestCommentThread, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestCommentThread[]>>deferred.promise;
    }

    /**
     * Update a pull request review comment thread
     * 
     * @param {GitInterfaces.GitPullRequestCommentThread} commentThread
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {string} project - Project ID or project name
     */
    public updateThread(
        commentThread: GitInterfaces.GitPullRequestCommentThread,
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequestCommentThread> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequestCommentThread>();

        var onResult = (err: any, statusCode: number, PullRequestThread: GitInterfaces.GitPullRequestCommentThread) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestThread);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            threadId: threadId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestCommentThread, responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequestCommentThread, responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, commentThread, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPullRequestCommentThread>>deferred.promise;
    }

    /**
     * Retrieve a pull request work items
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public getPullRequestWorkItems(
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Q.Promise<GitInterfaces.AssociatedWorkItem[]> {
    
        var deferred = Q.defer<GitInterfaces.AssociatedWorkItem[]>();

        var onResult = (err: any, statusCode: number, PullRequestWorkItems: GitInterfaces.AssociatedWorkItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestWorkItems);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "0a637fcc-5370-4ce8-b0e8-98091f5f9482", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.AssociatedWorkItem[]>>deferred.promise;
    }

    /**
     * Push changes to the repository.
     * 
     * @param {GitInterfaces.GitPush} push
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, a project-scoped route must be used.
     * @param {string} project - Project ID or project name
     */
    public createPush(
        push: GitInterfaces.GitPush,
        repositoryId: string,
        project?: string
        ): Q.Promise<GitInterfaces.GitPush> {
    
        var deferred = Q.defer<GitInterfaces.GitPush>();

        var onResult = (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pushe);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "git", "ea98d07b-3c87-4971-8ede-a613694ffb55", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPush, responseTypeMetadata: GitInterfaces.TypeInfo.GitPush, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, push, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPush>>deferred.promise;
    }

    /**
     * Retrieve a particular push.
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} includeCommits - The number of commits to include in the result.
     * @param {boolean} includeRefUpdates
     */
    public getPush(
        repositoryId: string,
        pushId: number,
        project?: string,
        includeCommits?: number,
        includeRefUpdates?: boolean
        ): Q.Promise<GitInterfaces.GitPush> {
    
        var deferred = Q.defer<GitInterfaces.GitPush>();

        var onResult = (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pushe);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            pushId: pushId
        };

        var queryValues: any = {
            includeCommits: includeCommits,
            includeRefUpdates: includeRefUpdates,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "git", "ea98d07b-3c87-4971-8ede-a613694ffb55", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPush, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPush>>deferred.promise;
    }

    /**
     * Retrieves pushes associated with the specified repository.
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {GitInterfaces.GitPushSearchCriteria} searchCriteria
     */
    public getPushes(
        repositoryId: string,
        project?: string,
        skip?: number,
        top?: number,
        searchCriteria?: GitInterfaces.GitPushSearchCriteria
        ): Q.Promise<GitInterfaces.GitPush[]> {
    
        var deferred = Q.defer<GitInterfaces.GitPush[]>();

        var onResult = (err: any, statusCode: number, pushes: GitInterfaces.GitPush[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pushes);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            '$skip': skip,
            '$top': top,
            searchCriteria: searchCriteria,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "git", "ea98d07b-3c87-4971-8ede-a613694ffb55", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPush, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitPush[]>>deferred.promise;
    }

    /**
     * Lock or unlock a ref.
     * 
     * @param {GitInterfaces.GitRefLockRequest} refLockRequest
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     */
    public createRefLockRequest(
        refLockRequest: GitInterfaces.GitRefLockRequest,
        project: string,
        repositoryId: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "32863ac0-6a8a-4d9f-8afe-ba293b93ec3c", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, refLockRequest, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * Queries the provided repository for its refs and returns them.
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} filter - [optional] A filter to apply to the refs.
     * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     */
    public getRefs(
        repositoryId: string,
        project?: string,
        filter?: string,
        includeLinks?: boolean
        ): Q.Promise<GitInterfaces.GitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitRef[]>();

        var onResult = (err: any, statusCode: number, refs: GitInterfaces.GitRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(refs);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            filter: filter,
            includeLinks: includeLinks,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "2d874a60-a811-4f62-9c9f-963a6ea0a55b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitRef, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRef[]>>deferred.promise;
    }

    /**
     * Creates or updates refs with the given information
     * 
     * @param {GitInterfaces.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - The id of the project.
     */
    public updateRefs(
        refUpdates: GitInterfaces.GitRefUpdate[],
        repositoryId: string,
        project?: string,
        projectId?: string
        ): Q.Promise<GitInterfaces.GitRefUpdateResult[]> {
    
        var deferred = Q.defer<GitInterfaces.GitRefUpdateResult[]>();

        var onResult = (err: any, statusCode: number, refs: GitInterfaces.GitRefUpdateResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(refs);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            projectId: projectId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "2d874a60-a811-4f62-9c9f-963a6ea0a55b", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitRefUpdateResult, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, refUpdates, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRefUpdateResult[]>>deferred.promise;
    }

    /**
     * Creates a ref favorite
     * 
     * @param {GitInterfaces.GitRefFavorite} favorite
     * @param {string} project - Project ID or project name
     */
    public createFavorite(
        favorite: GitInterfaces.GitRefFavorite,
        project: string
        ): Q.Promise<GitInterfaces.GitRefFavorite> {
    
        var deferred = Q.defer<GitInterfaces.GitRefFavorite>();

        var onResult = (err: any, statusCode: number, refsFavorite: GitInterfaces.GitRefFavorite) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(refsFavorite);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "876f70af-5792-485a-a1c7-d0a7b2f42bbb", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitRefFavorite, responseTypeMetadata: GitInterfaces.TypeInfo.GitRefFavorite, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, favorite, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRefFavorite>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId
     */
    public deleteRefFavorite(
        project: string,
        favoriteId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            favoriteId: favoriteId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "876f70af-5792-485a-a1c7-d0a7b2f42bbb", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId
     */
    public getRefFavorite(
        project: string,
        favoriteId: number
        ): Q.Promise<GitInterfaces.GitRefFavorite> {
    
        var deferred = Q.defer<GitInterfaces.GitRefFavorite>();

        var onResult = (err: any, statusCode: number, refsFavorite: GitInterfaces.GitRefFavorite) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(refsFavorite);
            }
        };

        var routeValues: any = {
            project: project,
            favoriteId: favoriteId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "876f70af-5792-485a-a1c7-d0a7b2f42bbb", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitRefFavorite, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRefFavorite>>deferred.promise;
    }

    /**
     * Gets the refs favorites for a repo and an identity.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The id of the repository.
     * @param {string} identityId - The id of the identity whose favorites are to be retrieved. If null, the requesting identity is used.
     */
    public getRefFavorites(
        project: string,
        repositoryId?: string,
        identityId?: string
        ): Q.Promise<GitInterfaces.GitRefFavorite[]> {
    
        var deferred = Q.defer<GitInterfaces.GitRefFavorite[]>();

        var onResult = (err: any, statusCode: number, refsFavorites: GitInterfaces.GitRefFavorite[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(refsFavorites);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            repositoryId: repositoryId,
            identityId: identityId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "876f70af-5792-485a-a1c7-d0a7b2f42bbb", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitRefFavorite, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRefFavorite[]>>deferred.promise;
    }

    /**
     * Create a git repository
     * 
     * @param {GitInterfaces.GitRepository} gitRepositoryToCreate
     * @param {string} project - Project ID or project name
     */
    public createRepository(
        gitRepositoryToCreate: GitInterfaces.GitRepository,
        project?: string
        ): Q.Promise<GitInterfaces.GitRepository> {
    
        var deferred = Q.defer<GitInterfaces.GitRepository>();

        var onResult = (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Repositorie);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, gitRepositoryToCreate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRepository>>deferred.promise;
    }

    /**
     * Delete a git repository
     * 
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public deleteRepository(
        repositoryId: string,
        project?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * Retrieve git repositories.
     * 
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks
     */
    public getRepositories(
        project?: string,
        includeLinks?: boolean
        ): Q.Promise<GitInterfaces.GitRepository[]> {
    
        var deferred = Q.defer<GitInterfaces.GitRepository[]>();

        var onResult = (err: any, statusCode: number, Repositories: GitInterfaces.GitRepository[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Repositories);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            includeLinks: includeLinks,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRepository[]>>deferred.promise;
    }

    /**
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public getRepository(
        repositoryId: string,
        project?: string
        ): Q.Promise<GitInterfaces.GitRepository> {
    
        var deferred = Q.defer<GitInterfaces.GitRepository>();

        var onResult = (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Repositorie);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRepository>>deferred.promise;
    }

    /**
     * Updates the Git repository with the single populated change in the specified repository information.
     * 
     * @param {GitInterfaces.GitRepository} newRepositoryInfo
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public updateRepository(
        newRepositoryInfo: GitInterfaces.GitRepository,
        repositoryId: string,
        project?: string
        ): Q.Promise<GitInterfaces.GitRepository> {
    
        var deferred = Q.defer<GitInterfaces.GitRepository>();

        var onResult = (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Repositorie);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.update(url, apiVersion, newRepositoryInfo, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRepository>>deferred.promise;
    }

    /**
     * @param {GitInterfaces.GitAsyncRefOperationParameters} revertToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     */
    public createRevert(
        revertToCreate: GitInterfaces.GitAsyncRefOperationParameters,
        project: string,
        repositoryId: string
        ): Q.Promise<GitInterfaces.GitRevert> {
    
        var deferred = Q.defer<GitInterfaces.GitRevert>();

        var onResult = (err: any, statusCode: number, Revert: GitInterfaces.GitRevert) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Revert);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "bc866058-5449-4715-9cf1-a510b6ff193c", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitAsyncRefOperationParameters, responseTypeMetadata: GitInterfaces.TypeInfo.GitRevert, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, revertToCreate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRevert>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} revertId
     * @param {string} repositoryId
     */
    public getRevert(
        project: string,
        revertId: number,
        repositoryId: string
        ): Q.Promise<GitInterfaces.GitRevert> {
    
        var deferred = Q.defer<GitInterfaces.GitRevert>();

        var onResult = (err: any, statusCode: number, Revert: GitInterfaces.GitRevert) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Revert);
            }
        };

        var routeValues: any = {
            project: project,
            revertId: revertId,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "bc866058-5449-4715-9cf1-a510b6ff193c", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitRevert, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRevert>>deferred.promise;
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {string} refName
     */
    public getRevertForRefName(
        project: string,
        repositoryId: string,
        refName: string
        ): Q.Promise<GitInterfaces.GitRevert> {
    
        var deferred = Q.defer<GitInterfaces.GitRevert>();

        var onResult = (err: any, statusCode: number, Revert: GitInterfaces.GitRevert) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Revert);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            refName: refName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "bc866058-5449-4715-9cf1-a510b6ff193c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitRevert, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitRevert>>deferred.promise;
    }

    /**
     * @param {GitInterfaces.GitStatus} gitCommitStatusToCreate
     * @param {string} commitId
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public createCommitStatus(
        gitCommitStatusToCreate: GitInterfaces.GitStatus,
        commitId: string,
        repositoryId: string,
        project?: string
        ): Q.Promise<GitInterfaces.GitStatus> {
    
        var deferred = Q.defer<GitInterfaces.GitStatus>();

        var onResult = (err: any, statusCode: number, Statuse: GitInterfaces.GitStatus) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Statuse);
            }
        };

        var routeValues: any = {
            project: project,
            commitId: commitId,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "428dd4fb-fda5-4722-af02-9313b80305da", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitStatus, responseTypeMetadata: GitInterfaces.TypeInfo.GitStatus, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, gitCommitStatusToCreate, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitStatus>>deferred.promise;
    }

    /**
     * @param {string} commitId
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {number} top
     * @param {number} skip
     * @param {boolean} latestOnly
     */
    public getStatuses(
        commitId: string,
        repositoryId: string,
        project?: string,
        top?: number,
        skip?: number,
        latestOnly?: boolean
        ): Q.Promise<GitInterfaces.GitStatus[]> {
    
        var deferred = Q.defer<GitInterfaces.GitStatus[]>();

        var onResult = (err: any, statusCode: number, Statuses: GitInterfaces.GitStatus[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Statuses);
            }
        };

        var routeValues: any = {
            project: project,
            commitId: commitId,
            repositoryId: repositoryId
        };

        var queryValues: any = {
            top: top,
            skip: skip,
            latestOnly: latestOnly,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "428dd4fb-fda5-4722-af02-9313b80305da", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitStatus, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitStatus[]>>deferred.promise;
    }

    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     */
    public getTree(
        repositoryId: string,
        sha1: string,
        project?: string,
        projectId?: string,
        recursive?: boolean,
        fileName?: string
        ): Q.Promise<GitInterfaces.GitTreeRef> {
    
        var deferred = Q.defer<GitInterfaces.GitTreeRef>();

        var onResult = (err: any, statusCode: number, Tree: GitInterfaces.GitTreeRef) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Tree);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues: any = {
            projectId: projectId,
            recursive: recursive,
            fileName: fileName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "729f6437-6f92-44ec-8bee-273a7111063c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitTreeRef, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<GitInterfaces.GitTreeRef>>deferred.promise;
    }

    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     */
    public getTreeZip(
        repositoryId: string,
        sha1: string,
        project?: string,
        projectId?: string,
        recursive?: boolean,
        fileName?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, Tree: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Tree);
            }
        };

        var routeValues: any = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues: any = {
            projectId: projectId,
            recursive: recursive,
            fileName: fileName,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "git", "729f6437-6f92-44ec-8bee-273a7111063c", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

}
