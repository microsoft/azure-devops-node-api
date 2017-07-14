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

import * as restm from 'typed-rest-client/RestClient';
import * as httpm from 'typed-rest-client/HttpClient';
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import GitInterfaces = require("./interfaces/GitInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IGitApi extends basem.ClientApiBase {
    createAnnotatedTag(tagObject: GitInterfaces.GitAnnotatedTag, project: string, repositoryId: string): Promise<GitInterfaces.GitAnnotatedTag>;
    getAnnotatedTag(project: string, repositoryId: string, objectId: string): Promise<GitInterfaces.GitAnnotatedTag>;
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): Promise<GitInterfaces.GitBlobRef>;
    getBlobContent(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): Promise<NodeJS.ReadableStream>;
    getBlobsZip(blobIds: string[], repositoryId: string, project?: string, filename?: string): Promise<NodeJS.ReadableStream>;
    getBlobZip(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string): Promise<NodeJS.ReadableStream>;
    getBranch(repositoryId: string, name: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<GitInterfaces.GitBranchStats>;
    getBranches(repositoryId: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<GitInterfaces.GitBranchStats[]>;
    getBranchStatsBatch(searchCriteria: GitInterfaces.GitQueryBranchStatsCriteria, repositoryId: string, project?: string): Promise<GitInterfaces.GitBranchStats[]>;
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number): Promise<GitInterfaces.GitCommitChanges>;
    createCherryPick(cherryPickToCreate: GitInterfaces.GitAsyncRefOperationParameters, project: string, repositoryId: string): Promise<GitInterfaces.GitCherryPick>;
    getCherryPick(project: string, cherryPickId: number, repositoryId: string): Promise<GitInterfaces.GitCherryPick>;
    getCherryPickForRefName(project: string, repositoryId: string, refName: string): Promise<GitInterfaces.GitCherryPick>;
    getCommit(commitId: string, repositoryId: string, project?: string, changeCount?: number): Promise<GitInterfaces.GitCommit>;
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number): Promise<GitInterfaces.GitCommitRef[]>;
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean): Promise<GitInterfaces.GitCommitRef[]>;
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number, includeStatuses?: boolean): Promise<GitInterfaces.GitCommitRef[]>;
    getDeletedRepositories(project: string): Promise<GitInterfaces.GitDeletedRepository[]>;
    createImportRequest(importRequest: GitInterfaces.GitImportRequest, project: string, repositoryId: string): Promise<GitInterfaces.GitImportRequest>;
    getImportRequest(project: string, repositoryId: string, importRequestId: number): Promise<GitInterfaces.GitImportRequest>;
    queryImportRequests(project: string, repositoryId: string, includeAbandoned?: boolean): Promise<GitInterfaces.GitImportRequest[]>;
    updateImportRequest(importRequestToUpdate: GitInterfaces.GitImportRequest, project: string, repositoryId: string, importRequestId: number): Promise<GitInterfaces.GitImportRequest>;
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<GitInterfaces.GitItem>;
    getItemContent(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<NodeJS.ReadableStream>;
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<GitInterfaces.GitItem[]>;
    getItemText(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<NodeJS.ReadableStream>;
    getItemZip(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<NodeJS.ReadableStream>;
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project?: string): Promise<GitInterfaces.GitItem[][]>;
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.Attachment>;
    deleteAttachment(fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    getAttachmentContent(fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<NodeJS.ReadableStream>;
    getAttachments(repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.Attachment[]>;
    getAttachmentZip(fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<NodeJS.ReadableStream>;
    getPullRequestIterationCommits(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<GitInterfaces.GitCommitRef[]>;
    getPullRequestCommits(repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitCommitRef[]>;
    getPullRequestConflict(repositoryId: string, pullRequestId: number, conflictId: number, project?: string): Promise<GitInterfaces.GitConflict>;
    getPullRequestConflicts(repositoryId: string, pullRequestId: number, project?: string, skip?: number, top?: number, includeObsolete?: boolean): Promise<GitInterfaces.GitConflict[]>;
    updatePullRequestConflict(conflict: GitInterfaces.GitConflict, repositoryId: string, pullRequestId: number, conflictId: number, project?: string): Promise<GitInterfaces.GitConflict>;
    getPullRequestIterationChanges(repositoryId: string, pullRequestId: number, iterationId: number, project?: string, top?: number, skip?: number, compareTo?: number): Promise<GitInterfaces.GitPullRequestIterationChanges>;
    getPullRequestIteration(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<GitInterfaces.GitPullRequestIteration>;
    getPullRequestIterations(repositoryId: string, pullRequestId: number, project?: string, includeCommits?: boolean): Promise<GitInterfaces.GitPullRequestIteration[]>;
    getPullRequestQuery(queries: GitInterfaces.GitPullRequestQuery, repositoryId: string, project?: string): Promise<GitInterfaces.GitPullRequestQuery>;
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<GitInterfaces.IdentityRefWithVote>;
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.IdentityRefWithVote[]>;
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<void>;
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<GitInterfaces.IdentityRefWithVote>;
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.IdentityRefWithVote[]>;
    getPullRequestById(pullRequestId: number): Promise<GitInterfaces.GitPullRequest>;
    getPullRequestsByProject(project: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, maxCommentLength?: number, skip?: number, top?: number): Promise<GitInterfaces.GitPullRequest[]>;
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project?: string): Promise<GitInterfaces.GitPullRequest>;
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number, includeCommits?: boolean, includeWorkItemRefs?: boolean): Promise<GitInterfaces.GitPullRequest>;
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number): Promise<GitInterfaces.GitPullRequest[]>;
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitPullRequest>;
    sharePullRequest(userMessage: GitInterfaces.ShareNotificationContext, repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    createPullRequestIterationStatus(status: GitInterfaces.GitPullRequestStatus, repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestIterationStatuses(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus[]>;
    createPullRequestStatus(status: GitInterfaces.GitPullRequestStatus, repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestStatuses(repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus[]>;
    createComment(comment: GitInterfaces.Comment, repositoryId: string, pullRequestId: number, threadId: number, project?: string): Promise<GitInterfaces.Comment>;
    deleteComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<void>;
    getComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<GitInterfaces.Comment>;
    getComments(repositoryId: string, pullRequestId: number, threadId: number, project?: string): Promise<GitInterfaces.Comment[]>;
    updateComment(comment: GitInterfaces.Comment, repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<GitInterfaces.Comment>;
    createThread(commentThread: GitInterfaces.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitPullRequestCommentThread>;
    getPullRequestThread(repositoryId: string, pullRequestId: number, threadId: number, project?: string, iteration?: number, baseIteration?: number): Promise<GitInterfaces.GitPullRequestCommentThread>;
    getThreads(repositoryId: string, pullRequestId: number, project?: string, iteration?: number, baseIteration?: number): Promise<GitInterfaces.GitPullRequestCommentThread[]>;
    updateThread(commentThread: GitInterfaces.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, threadId: number, project?: string): Promise<GitInterfaces.GitPullRequestCommentThread>;
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.AssociatedWorkItem[]>;
    createPush(push: GitInterfaces.GitPush, repositoryId: string, project?: string): Promise<GitInterfaces.GitPush>;
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean): Promise<GitInterfaces.GitPush>;
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: GitInterfaces.GitPushSearchCriteria): Promise<GitInterfaces.GitPush[]>;
    createRefLockRequest(refLockRequest: GitInterfaces.GitRefLockRequest, project: string, repositoryId: string): Promise<void>;
    getRefs(repositoryId: string, project?: string, filter?: string, includeLinks?: boolean, latestStatusesOnly?: boolean): Promise<GitInterfaces.GitRef[]>;
    updateRef(newRefInfo: GitInterfaces.GitRefUpdate, repositoryId: string, filter: string, project?: string, projectId?: string): Promise<GitInterfaces.GitRef>;
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string): Promise<GitInterfaces.GitRefUpdateResult[]>;
    createFavorite(favorite: GitInterfaces.GitRefFavorite, project: string): Promise<GitInterfaces.GitRefFavorite>;
    deleteRefFavorite(project: string, favoriteId: number): Promise<void>;
    getRefFavorite(project: string, favoriteId: number): Promise<GitInterfaces.GitRefFavorite>;
    getRefFavorites(project: string, repositoryId?: string, identityId?: string): Promise<GitInterfaces.GitRefFavorite[]>;
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepository, project?: string): Promise<GitInterfaces.GitRepository>;
    deleteRepository(repositoryId: string, project?: string): Promise<void>;
    getRepositories(project?: string, includeLinks?: boolean, includeAllUrls?: boolean): Promise<GitInterfaces.GitRepository[]>;
    getRepository(repositoryId: string, project?: string): Promise<GitInterfaces.GitRepository>;
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project?: string): Promise<GitInterfaces.GitRepository>;
    createRevert(revertToCreate: GitInterfaces.GitAsyncRefOperationParameters, project: string, repositoryId: string): Promise<GitInterfaces.GitRevert>;
    getRevert(project: string, revertId: number, repositoryId: string): Promise<GitInterfaces.GitRevert>;
    getRevertForRefName(project: string, repositoryId: string, refName: string): Promise<GitInterfaces.GitRevert>;
    createCommitStatus(gitCommitStatusToCreate: GitInterfaces.GitStatus, commitId: string, repositoryId: string, project?: string): Promise<GitInterfaces.GitStatus>;
    getStatuses(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number, latestOnly?: boolean): Promise<GitInterfaces.GitStatus[]>;
    getSuggestions(repositoryId: string, project?: string): Promise<GitInterfaces.GitSuggestion[]>;
    getTree(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): Promise<GitInterfaces.GitTreeRef>;
    getTreeZip(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): Promise<NodeJS.ReadableStream>;
}

export class GitApi extends basem.ClientApiBase implements IGitApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Git-api', options);
    }

    /**
     * Create an annotated tag
     * 
     * @param {GitInterfaces.GitAnnotatedTag} tagObject - Object containing details of tag to be created
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - Friendly name or guid of repository
     */
    public async createAnnotatedTag(
        tagObject: GitInterfaces.GitAnnotatedTag,
        project: string,
        repositoryId: string
    ): Promise<GitInterfaces.GitAnnotatedTag> {

        return new Promise<GitInterfaces.GitAnnotatedTag>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "5e8a8081-3851-4626-b677-9891cc04102e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitAnnotatedTag>;
                res = await this.rest.create<GitInterfaces.GitAnnotatedTag>(url, tagObject, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitAnnotatedTag,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get an annotated tag
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {string} objectId - Sha1 of annotated tag to be returned
     */
    public async getAnnotatedTag(
        project: string,
        repositoryId: string,
        objectId: string
    ): Promise<GitInterfaces.GitAnnotatedTag> {

        return new Promise<GitInterfaces.GitAnnotatedTag>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                objectId: objectId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "5e8a8081-3851-4626-b677-9891cc04102e",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitAnnotatedTag>;
                res = await this.rest.get<GitInterfaces.GitAnnotatedTag>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitAnnotatedTag,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getBlob(
        repositoryId: string,
        sha1: string,
        project?: string,
        download?: boolean,
        fileName?: string
    ): Promise<GitInterfaces.GitBlobRef> {

        return new Promise<GitInterfaces.GitBlobRef>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                sha1: sha1
            };

            let queryValues: any = {
                download: download,
                fileName: fileName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "7b28e929-2c99-405d-9c5c-6167a06e6816",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitBlobRef>;
                res = await this.rest.get<GitInterfaces.GitBlobRef>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getBlobContent(
        repositoryId: string,
        sha1: string,
        project?: string,
        download?: boolean,
        fileName?: string
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                sha1: sha1
            };

            let queryValues: any = {
                download: download,
                fileName: fileName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "7b28e929-2c99-405d-9c5c-6167a06e6816",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets one or more blobs in a zip file download.
     * 
     * @param {string[]} blobIds
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {string} filename
     */
    public async getBlobsZip(
        blobIds: string[],
        repositoryId: string,
        project?: string,
        filename?: string
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                filename: filename,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "7b28e929-2c99-405d-9c5c-6167a06e6816",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getBlobZip(
        repositoryId: string,
        sha1: string,
        project?: string,
        download?: boolean,
        fileName?: string
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                sha1: sha1
            };

            let queryValues: any = {
                download: download,
                fileName: fileName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "7b28e929-2c99-405d-9c5c-6167a06e6816",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve statistics about a single branch.
     * 
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} name - Name of the branch
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
     */
    public async getBranch(
        repositoryId: string,
        name: string,
        project?: string,
        baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
    ): Promise<GitInterfaces.GitBranchStats> {

        return new Promise<GitInterfaces.GitBranchStats>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                name: name,
                baseVersionDescriptor: baseVersionDescriptor,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "d5b216de-d8d5-4d32-ae76-51df755b16d3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitBranchStats>;
                res = await this.rest.get<GitInterfaces.GitBranchStats>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitBranchStats,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve statistics about all branches within a repository.
     * 
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
     */
    public async getBranches(
        repositoryId: string,
        project?: string,
        baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
    ): Promise<GitInterfaces.GitBranchStats[]> {

        return new Promise<GitInterfaces.GitBranchStats[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                baseVersionDescriptor: baseVersionDescriptor,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "d5b216de-d8d5-4d32-ae76-51df755b16d3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitBranchStats[]>;
                res = await this.rest.get<GitInterfaces.GitBranchStats[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitBranchStats,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve statistics for multiple commits
     * 
     * @param {GitInterfaces.GitQueryBranchStatsCriteria} searchCriteria
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     */
    public async getBranchStatsBatch(
        searchCriteria: GitInterfaces.GitQueryBranchStatsCriteria,
        repositoryId: string,
        project?: string
    ): Promise<GitInterfaces.GitBranchStats[]> {

        return new Promise<GitInterfaces.GitBranchStats[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "d5b216de-d8d5-4d32-ae76-51df755b16d3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitBranchStats[]>;
                res = await this.rest.create<GitInterfaces.GitBranchStats[]>(url, searchCriteria, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitBranchStats,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getChanges(
        commitId: string,
        repositoryId: string,
        project?: string,
        top?: number,
        skip?: number
    ): Promise<GitInterfaces.GitCommitChanges> {

        return new Promise<GitInterfaces.GitCommitChanges>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                commitId: commitId,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                top: top,
                skip: skip,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "5bf884f5-3e07-42e9-afb8-1b872267bf16",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCommitChanges>;
                res = await this.rest.get<GitInterfaces.GitCommitChanges>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCommitChanges,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GitInterfaces.GitAsyncRefOperationParameters} cherryPickToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     */
    public async createCherryPick(
        cherryPickToCreate: GitInterfaces.GitAsyncRefOperationParameters,
        project: string,
        repositoryId: string
    ): Promise<GitInterfaces.GitCherryPick> {

        return new Promise<GitInterfaces.GitCherryPick>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "033bad68-9a14-43d1-90e0-59cb8856fef6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCherryPick>;
                res = await this.rest.create<GitInterfaces.GitCherryPick>(url, cherryPickToCreate, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCherryPick,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} cherryPickId
     * @param {string} repositoryId
     */
    public async getCherryPick(
        project: string,
        cherryPickId: number,
        repositoryId: string
    ): Promise<GitInterfaces.GitCherryPick> {

        return new Promise<GitInterfaces.GitCherryPick>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                cherryPickId: cherryPickId,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "033bad68-9a14-43d1-90e0-59cb8856fef6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCherryPick>;
                res = await this.rest.get<GitInterfaces.GitCherryPick>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCherryPick,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {string} refName
     */
    public async getCherryPickForRefName(
        project: string,
        repositoryId: string,
        refName: string
    ): Promise<GitInterfaces.GitCherryPick> {

        return new Promise<GitInterfaces.GitCherryPick>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                refName: refName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "033bad68-9a14-43d1-90e0-59cb8856fef6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCherryPick>;
                res = await this.rest.get<GitInterfaces.GitCherryPick>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCherryPick,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a particular commit.
     * 
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} changeCount - The number of changes to include in the result.
     */
    public async getCommit(
        commitId: string,
        repositoryId: string,
        project?: string,
        changeCount?: number
    ): Promise<GitInterfaces.GitCommit> {

        return new Promise<GitInterfaces.GitCommit>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                commitId: commitId,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                changeCount: changeCount,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "c2570c3b-5b3f-41b8-98bf-5407bfde8d58",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCommit>;
                res = await this.rest.get<GitInterfaces.GitCommit>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCommit,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getCommits(
        repositoryId: string,
        searchCriteria: GitInterfaces.GitQueryCommitsCriteria,
        project?: string,
        skip?: number,
        top?: number
    ): Promise<GitInterfaces.GitCommitRef[]> {

        return new Promise<GitInterfaces.GitCommitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                searchCriteria: searchCriteria,
                '$skip': skip,
                '$top': top,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "c2570c3b-5b3f-41b8-98bf-5407bfde8d58",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCommitRef[]>;
                res = await this.rest.get<GitInterfaces.GitCommitRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCommitRef,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getPushCommits(
        repositoryId: string,
        pushId: number,
        project?: string,
        top?: number,
        skip?: number,
        includeLinks?: boolean
    ): Promise<GitInterfaces.GitCommitRef[]> {

        return new Promise<GitInterfaces.GitCommitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                pushId: pushId,
                top: top,
                skip: skip,
                includeLinks: includeLinks,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "c2570c3b-5b3f-41b8-98bf-5407bfde8d58",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCommitRef[]>;
                res = await this.rest.get<GitInterfaces.GitCommitRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCommitRef,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getCommitsBatch(
        searchCriteria: GitInterfaces.GitQueryCommitsCriteria,
        repositoryId: string,
        project?: string,
        skip?: number,
        top?: number,
        includeStatuses?: boolean
    ): Promise<GitInterfaces.GitCommitRef[]> {

        return new Promise<GitInterfaces.GitCommitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                '$skip': skip,
                '$top': top,
                includeStatuses: includeStatuses,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "6400dfb2-0bcb-462b-b992-5a57f8f1416c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCommitRef[]>;
                res = await this.rest.create<GitInterfaces.GitCommitRef[]>(url, searchCriteria, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCommitRef,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve deleted git repositories.
     * 
     * @param {string} project - Project ID or project name
     */
    public async getDeletedRepositories(
        project: string
    ): Promise<GitInterfaces.GitDeletedRepository[]> {

        return new Promise<GitInterfaces.GitDeletedRepository[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "2b6869c4-cb25-42b5-b7a3-0d3e6be0a11a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitDeletedRepository[]>;
                res = await this.rest.get<GitInterfaces.GitDeletedRepository[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitDeletedRepository,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create an import request
     * 
     * @param {GitInterfaces.GitImportRequest} importRequest
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     */
    public async createImportRequest(
        importRequest: GitInterfaces.GitImportRequest,
        project: string,
        repositoryId: string
    ): Promise<GitInterfaces.GitImportRequest> {

        return new Promise<GitInterfaces.GitImportRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "01828ddc-3600-4a41-8633-99b3a73a0eb3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitImportRequest>;
                res = await this.rest.create<GitInterfaces.GitImportRequest>(url, importRequest, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitImportRequest,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a particular import request
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {number} importRequestId
     */
    public async getImportRequest(
        project: string,
        repositoryId: string,
        importRequestId: number
    ): Promise<GitInterfaces.GitImportRequest> {

        return new Promise<GitInterfaces.GitImportRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                importRequestId: importRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "01828ddc-3600-4a41-8633-99b3a73a0eb3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitImportRequest>;
                res = await this.rest.get<GitInterfaces.GitImportRequest>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitImportRequest,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve import requests for a repository
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {boolean} includeAbandoned
     */
    public async queryImportRequests(
        project: string,
        repositoryId: string,
        includeAbandoned?: boolean
    ): Promise<GitInterfaces.GitImportRequest[]> {

        return new Promise<GitInterfaces.GitImportRequest[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                includeAbandoned: includeAbandoned,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "01828ddc-3600-4a41-8633-99b3a73a0eb3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitImportRequest[]>;
                res = await this.rest.get<GitInterfaces.GitImportRequest[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitImportRequest,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update an import request
     * 
     * @param {GitInterfaces.GitImportRequest} importRequestToUpdate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {number} importRequestId
     */
    public async updateImportRequest(
        importRequestToUpdate: GitInterfaces.GitImportRequest,
        project: string,
        repositoryId: string,
        importRequestId: number
    ): Promise<GitInterfaces.GitImportRequest> {

        return new Promise<GitInterfaces.GitImportRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                importRequestId: importRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "01828ddc-3600-4a41-8633-99b3a73a0eb3",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitImportRequest>;
                res = await this.rest.update<GitInterfaces.GitImportRequest>(url, importRequestToUpdate, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitImportRequest,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getItem(
        repositoryId: string,
        path: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
    ): Promise<GitInterfaces.GitItem> {

        return new Promise<GitInterfaces.GitItem>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                path: path,
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                includeContentMetadata: includeContentMetadata,
                latestProcessedChange: latestProcessedChange,
                download: download,
                versionDescriptor: versionDescriptor,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitItem>;
                res = await this.rest.get<GitInterfaces.GitItem>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitItem,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getItemContent(
        repositoryId: string,
        path: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                path: path,
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                includeContentMetadata: includeContentMetadata,
                latestProcessedChange: latestProcessedChange,
                download: download,
                versionDescriptor: versionDescriptor,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getItems(
        repositoryId: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        includeLinks?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
    ): Promise<GitInterfaces.GitItem[]> {

        return new Promise<GitInterfaces.GitItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                includeContentMetadata: includeContentMetadata,
                latestProcessedChange: latestProcessedChange,
                download: download,
                includeLinks: includeLinks,
                versionDescriptor: versionDescriptor,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitItem[]>;
                res = await this.rest.get<GitInterfaces.GitItem[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitItem,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getItemText(
        repositoryId: string,
        path: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                path: path,
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                includeContentMetadata: includeContentMetadata,
                latestProcessedChange: latestProcessedChange,
                download: download,
                versionDescriptor: versionDescriptor,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getItemZip(
        repositoryId: string,
        path: string,
        project?: string,
        scopePath?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata?: boolean,
        latestProcessedChange?: boolean,
        download?: boolean,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                path: path,
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                includeContentMetadata: includeContentMetadata,
                latestProcessedChange: latestProcessedChange,
                download: download,
                versionDescriptor: versionDescriptor,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     * 
     * @param {GitInterfaces.GitItemRequestData} requestData
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public async getItemsBatch(
        requestData: GitInterfaces.GitItemRequestData,
        repositoryId: string,
        project?: string
    ): Promise<GitInterfaces.GitItem[][]> {

        return new Promise<GitInterfaces.GitItem[][]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "630fd2e4-fb88-4f85-ad21-13f3fd1fbca9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitItem[][]>;
                res = await this.rest.create<GitInterfaces.GitItem[][]>(url, requestData, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitItem,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a new attachment
     * 
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} fileName
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async createAttachment(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        fileName: string,
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.Attachment> {

        return new Promise<GitInterfaces.Attachment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                fileName: fileName,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl;

                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<GitInterfaces.Attachment>;
                res = await this.rest.uploadStream<GitInterfaces.Attachment>("POST", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.Attachment,
                    false);

                resolve(ret);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} fileName
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async deleteAttachment(
        fileName: string,
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                fileName: fileName,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} fileName
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async getAttachmentContent(
        fileName: string,
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                fileName: fileName,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async getAttachments(
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.Attachment[]> {

        return new Promise<GitInterfaces.Attachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.Attachment[]>;
                res = await this.rest.get<GitInterfaces.Attachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.Attachment,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} fileName
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async getAttachmentZip(
        fileName: string,
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                fileName: fileName,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the commits for an iteration.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId - Iteration to retrieve commits for
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestIterationCommits(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string
    ): Promise<GitInterfaces.GitCommitRef[]> {

        return new Promise<GitInterfaces.GitCommitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "e7ea0883-095f-4926-b5fb-f24691c26fb9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCommitRef[]>;
                res = await this.rest.get<GitInterfaces.GitCommitRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCommitRef,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve pull request's commits
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestCommits(
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.GitCommitRef[]> {

        return new Promise<GitInterfaces.GitCommitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "52823034-34a8-4576-922c-8d8b77e9e4c4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCommitRef[]>;
                res = await this.rest.get<GitInterfaces.GitCommitRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitCommitRef,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve one conflict for a pull request by ID
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestConflict(
        repositoryId: string,
        pullRequestId: number,
        conflictId: number,
        project?: string
    ): Promise<GitInterfaces.GitConflict> {

        return new Promise<GitInterfaces.GitConflict>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                conflictId: conflictId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "d840fb74-bbef-42d3-b250-564604c054a4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitConflict>;
                res = await this.rest.get<GitInterfaces.GitConflict>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitConflict,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve all conflicts for a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includeObsolete
     */
    public async getPullRequestConflicts(
        repositoryId: string,
        pullRequestId: number,
        project?: string,
        skip?: number,
        top?: number,
        includeObsolete?: boolean
    ): Promise<GitInterfaces.GitConflict[]> {

        return new Promise<GitInterfaces.GitConflict[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            let queryValues: any = {
                '$skip': skip,
                '$top': top,
                includeObsolete: includeObsolete,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "d840fb74-bbef-42d3-b250-564604c054a4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitConflict[]>;
                res = await this.rest.get<GitInterfaces.GitConflict[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitConflict,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update merge conflict resolution
     * 
     * @param {GitInterfaces.GitConflict} conflict
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     */
    public async updatePullRequestConflict(
        conflict: GitInterfaces.GitConflict,
        repositoryId: string,
        pullRequestId: number,
        conflictId: number,
        project?: string
    ): Promise<GitInterfaces.GitConflict> {

        return new Promise<GitInterfaces.GitConflict>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                conflictId: conflictId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "d840fb74-bbef-42d3-b250-564604c054a4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitConflict>;
                res = await this.rest.update<GitInterfaces.GitConflict>(url, conflict, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitConflict,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getPullRequestIterationChanges(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string,
        top?: number,
        skip?: number,
        compareTo?: number
    ): Promise<GitInterfaces.GitPullRequestIterationChanges> {

        return new Promise<GitInterfaces.GitPullRequestIterationChanges>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                iterationId: iterationId
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
                '$compareTo': compareTo,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "4216bdcf-b6b1-4d59-8b82-c34cc183fc8b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestIterationChanges>;
                res = await this.rest.get<GitInterfaces.GitPullRequestIterationChanges>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestIterationChanges,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestIteration(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestIteration> {

        return new Promise<GitInterfaces.GitPullRequestIteration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "d43911ee-6958-46b0-a42b-8445b8a0d004",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestIteration>;
                res = await this.rest.get<GitInterfaces.GitPullRequestIteration>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestIteration,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {boolean} includeCommits
     */
    public async getPullRequestIterations(
        repositoryId: string,
        pullRequestId: number,
        project?: string,
        includeCommits?: boolean
    ): Promise<GitInterfaces.GitPullRequestIteration[]> {

        return new Promise<GitInterfaces.GitPullRequestIteration[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            let queryValues: any = {
                includeCommits: includeCommits,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "d43911ee-6958-46b0-a42b-8445b8a0d004",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestIteration[]>;
                res = await this.rest.get<GitInterfaces.GitPullRequestIteration[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestIteration,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Query for pull requests
     * 
     * @param {GitInterfaces.GitPullRequestQuery} queries
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestQuery(
        queries: GitInterfaces.GitPullRequestQuery,
        repositoryId: string,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestQuery> {

        return new Promise<GitInterfaces.GitPullRequestQuery>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "b3a6eebe-9cf0-49ea-b6cb-1a4c5f5007b0",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestQuery>;
                res = await this.rest.create<GitInterfaces.GitPullRequestQuery>(url, queries, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestQuery,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async createPullRequestReviewer(
        reviewer: GitInterfaces.IdentityRefWithVote,
        repositoryId: string,
        pullRequestId: number,
        reviewerId: string,
        project?: string
    ): Promise<GitInterfaces.IdentityRefWithVote> {

        return new Promise<GitInterfaces.IdentityRefWithVote>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                reviewerId: reviewerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.IdentityRefWithVote>;
                res = await this.rest.replace<GitInterfaces.IdentityRefWithVote>(url, reviewer, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Adds reviewers to a git pull request
     * 
     * @param {VSSInterfaces.IdentityRef[]} reviewers
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async createPullRequestReviewers(
        reviewers: VSSInterfaces.IdentityRef[],
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.IdentityRefWithVote[]> {

        return new Promise<GitInterfaces.IdentityRefWithVote[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.IdentityRefWithVote[]>;
                res = await this.rest.create<GitInterfaces.IdentityRefWithVote[]>(url, reviewers, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Removes a reviewer from a git pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     */
    public async deletePullRequestReviewer(
        repositoryId: string,
        pullRequestId: number,
        reviewerId: string,
        project?: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                reviewerId: reviewerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a reviewer from a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestReviewer(
        repositoryId: string,
        pullRequestId: number,
        reviewerId: string,
        project?: string
    ): Promise<GitInterfaces.IdentityRefWithVote> {

        return new Promise<GitInterfaces.IdentityRefWithVote>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                reviewerId: reviewerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.IdentityRefWithVote>;
                res = await this.rest.get<GitInterfaces.IdentityRefWithVote>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a pull request reviewers
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestReviewers(
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.IdentityRefWithVote[]> {

        return new Promise<GitInterfaces.IdentityRefWithVote[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.IdentityRefWithVote[]>;
                res = await this.rest.get<GitInterfaces.IdentityRefWithVote[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a pull request using its ID
     * 
     * @param {number} pullRequestId - the Id of the pull request
     */
    public async getPullRequestById(
        pullRequestId: number
    ): Promise<GitInterfaces.GitPullRequest> {

        return new Promise<GitInterfaces.GitPullRequest>(async (resolve, reject) => {
            let routeValues: any = {
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "01a46dea-7d46-4d40-bc84-319e7c260d99",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequest>;
                res = await this.rest.get<GitInterfaces.GitPullRequest>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequest,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getPullRequestsByProject(
        project: string,
        searchCriteria: GitInterfaces.GitPullRequestSearchCriteria,
        maxCommentLength?: number,
        skip?: number,
        top?: number
    ): Promise<GitInterfaces.GitPullRequest[]> {

        return new Promise<GitInterfaces.GitPullRequest[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                searchCriteria: searchCriteria,
                maxCommentLength: maxCommentLength,
                '$skip': skip,
                '$top': top,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "a5d28130-9cd2-40fa-9f08-902e7daa9efb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequest[]>;
                res = await this.rest.get<GitInterfaces.GitPullRequest[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequest,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a git pull request
     * 
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToCreate
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public async createPullRequest(
        gitPullRequestToCreate: GitInterfaces.GitPullRequest,
        repositoryId: string,
        project?: string
    ): Promise<GitInterfaces.GitPullRequest> {

        return new Promise<GitInterfaces.GitPullRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "9946fd70-0d40-406e-b686-b4744cbbcc37",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequest>;
                res = await this.rest.create<GitInterfaces.GitPullRequest>(url, gitPullRequestToCreate, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequest,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getPullRequest(
        repositoryId: string,
        pullRequestId: number,
        project?: string,
        maxCommentLength?: number,
        skip?: number,
        top?: number,
        includeCommits?: boolean,
        includeWorkItemRefs?: boolean
    ): Promise<GitInterfaces.GitPullRequest> {

        return new Promise<GitInterfaces.GitPullRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            let queryValues: any = {
                maxCommentLength: maxCommentLength,
                '$skip': skip,
                '$top': top,
                includeCommits: includeCommits,
                includeWorkItemRefs: includeWorkItemRefs,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "9946fd70-0d40-406e-b686-b4744cbbcc37",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequest>;
                res = await this.rest.get<GitInterfaces.GitPullRequest>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequest,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getPullRequests(
        repositoryId: string,
        searchCriteria: GitInterfaces.GitPullRequestSearchCriteria,
        project?: string,
        maxCommentLength?: number,
        skip?: number,
        top?: number
    ): Promise<GitInterfaces.GitPullRequest[]> {

        return new Promise<GitInterfaces.GitPullRequest[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                searchCriteria: searchCriteria,
                maxCommentLength: maxCommentLength,
                '$skip': skip,
                '$top': top,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "9946fd70-0d40-406e-b686-b4744cbbcc37",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequest[]>;
                res = await this.rest.get<GitInterfaces.GitPullRequest[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequest,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Updates a pull request
     * 
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToUpdate
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async updatePullRequest(
        gitPullRequestToUpdate: GitInterfaces.GitPullRequest,
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequest> {

        return new Promise<GitInterfaces.GitPullRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "9946fd70-0d40-406e-b686-b4744cbbcc37",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequest>;
                res = await this.rest.update<GitInterfaces.GitPullRequest>(url, gitPullRequestToUpdate, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequest,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GitInterfaces.ShareNotificationContext} userMessage
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async sharePullRequest(
        userMessage: GitInterfaces.ShareNotificationContext,
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "696f3a82-47c9-487f-9117-b9d00972ca84",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, userMessage, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async createPullRequestIterationStatus(
        status: GitInterfaces.GitPullRequestStatus,
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestStatus> {

        return new Promise<GitInterfaces.GitPullRequestStatus>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "75cf11c5-979f-4038-a76e-058a06adf2bf",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestStatus>;
                res = await this.rest.create<GitInterfaces.GitPullRequestStatus>(url, status, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestStatus,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getPullRequestIterationStatus(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        statusId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestStatus> {

        return new Promise<GitInterfaces.GitPullRequestStatus>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                iterationId: iterationId,
                statusId: statusId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "75cf11c5-979f-4038-a76e-058a06adf2bf",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestStatus>;
                res = await this.rest.get<GitInterfaces.GitPullRequestStatus>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestStatus,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get all the statuses associated with a pull request iteration.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} iterationId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestIterationStatuses(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestStatus[]> {

        return new Promise<GitInterfaces.GitPullRequestStatus[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "75cf11c5-979f-4038-a76e-058a06adf2bf",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestStatus[]>;
                res = await this.rest.get<GitInterfaces.GitPullRequestStatus[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestStatus,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a pull request status
     * 
     * @param {GitInterfaces.GitPullRequestStatus} status
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async createPullRequestStatus(
        status: GitInterfaces.GitPullRequestStatus,
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestStatus> {

        return new Promise<GitInterfaces.GitPullRequestStatus>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestStatus>;
                res = await this.rest.create<GitInterfaces.GitPullRequestStatus>(url, status, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestStatus,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get the specific pull request status.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} statusId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestStatus(
        repositoryId: string,
        pullRequestId: number,
        statusId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestStatus> {

        return new Promise<GitInterfaces.GitPullRequestStatus>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                statusId: statusId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestStatus>;
                res = await this.rest.get<GitInterfaces.GitPullRequestStatus>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestStatus,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get all the statuses associated with a pull request.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestStatuses(
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestStatus[]> {

        return new Promise<GitInterfaces.GitPullRequestStatus[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestStatus[]>;
                res = await this.rest.get<GitInterfaces.GitPullRequestStatus[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestStatus,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a pull request review comment
     * 
     * @param {GitInterfaces.Comment} comment
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {string} project - Project ID or project name
     */
    public async createComment(
        comment: GitInterfaces.Comment,
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        project?: string
    ): Promise<GitInterfaces.Comment> {

        return new Promise<GitInterfaces.Comment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                threadId: threadId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.Comment>;
                res = await this.rest.create<GitInterfaces.Comment>(url, comment, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.Comment,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a pull request comment by id for a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {number} commentId
     * @param {string} project - Project ID or project name
     */
    public async deleteComment(
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        commentId: number,
        project?: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                threadId: threadId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a pull request comment by id for a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {number} commentId
     * @param {string} project - Project ID or project name
     */
    public async getComment(
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        commentId: number,
        project?: string
    ): Promise<GitInterfaces.Comment> {

        return new Promise<GitInterfaces.Comment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                threadId: threadId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.Comment>;
                res = await this.rest.get<GitInterfaces.Comment>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.Comment,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get all pull request comments in a thread.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {string} project - Project ID or project name
     */
    public async getComments(
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        project?: string
    ): Promise<GitInterfaces.Comment[]> {

        return new Promise<GitInterfaces.Comment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                threadId: threadId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.Comment[]>;
                res = await this.rest.get<GitInterfaces.Comment[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.Comment,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a pull request review comment thread
     * 
     * @param {GitInterfaces.Comment} comment
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {number} commentId
     * @param {string} project - Project ID or project name
     */
    public async updateComment(
        comment: GitInterfaces.Comment,
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        commentId: number,
        project?: string
    ): Promise<GitInterfaces.Comment> {

        return new Promise<GitInterfaces.Comment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                threadId: threadId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.Comment>;
                res = await this.rest.update<GitInterfaces.Comment>(url, comment, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.Comment,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a pull request review comment thread
     * 
     * @param {GitInterfaces.GitPullRequestCommentThread} commentThread
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async createThread(
        commentThread: GitInterfaces.GitPullRequestCommentThread,
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestCommentThread> {

        return new Promise<GitInterfaces.GitPullRequestCommentThread>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestCommentThread>;
                res = await this.rest.create<GitInterfaces.GitPullRequestCommentThread>(url, commentThread, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestCommentThread,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a pull request comment thread by id for a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {number} threadId
     * @param {string} project - Project ID or project name
     * @param {number} iteration
     * @param {number} baseIteration
     */
    public async getPullRequestThread(
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        project?: string,
        iteration?: number,
        baseIteration?: number
    ): Promise<GitInterfaces.GitPullRequestCommentThread> {

        return new Promise<GitInterfaces.GitPullRequestCommentThread>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                threadId: threadId
            };

            let queryValues: any = {
                '$iteration': iteration,
                '$baseIteration': baseIteration,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestCommentThread>;
                res = await this.rest.get<GitInterfaces.GitPullRequestCommentThread>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestCommentThread,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get all pull request comment threads.
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} iteration
     * @param {number} baseIteration
     */
    public async getThreads(
        repositoryId: string,
        pullRequestId: number,
        project?: string,
        iteration?: number,
        baseIteration?: number
    ): Promise<GitInterfaces.GitPullRequestCommentThread[]> {

        return new Promise<GitInterfaces.GitPullRequestCommentThread[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            let queryValues: any = {
                '$iteration': iteration,
                '$baseIteration': baseIteration,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestCommentThread[]>;
                res = await this.rest.get<GitInterfaces.GitPullRequestCommentThread[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestCommentThread,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async updateThread(
        commentThread: GitInterfaces.GitPullRequestCommentThread,
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        project?: string
    ): Promise<GitInterfaces.GitPullRequestCommentThread> {

        return new Promise<GitInterfaces.GitPullRequestCommentThread>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                threadId: threadId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPullRequestCommentThread>;
                res = await this.rest.update<GitInterfaces.GitPullRequestCommentThread>(url, commentThread, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPullRequestCommentThread,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a pull request work items
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestWorkItems(
        repositoryId: string,
        pullRequestId: number,
        project?: string
    ): Promise<GitInterfaces.AssociatedWorkItem[]> {

        return new Promise<GitInterfaces.AssociatedWorkItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "0a637fcc-5370-4ce8-b0e8-98091f5f9482",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.AssociatedWorkItem[]>;
                res = await this.rest.get<GitInterfaces.AssociatedWorkItem[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Push changes to the repository.
     * 
     * @param {GitInterfaces.GitPush} push
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, a project-scoped route must be used.
     * @param {string} project - Project ID or project name
     */
    public async createPush(
        push: GitInterfaces.GitPush,
        repositoryId: string,
        project?: string
    ): Promise<GitInterfaces.GitPush> {

        return new Promise<GitInterfaces.GitPush>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "git",
                    "ea98d07b-3c87-4971-8ede-a613694ffb55",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPush>;
                res = await this.rest.create<GitInterfaces.GitPush>(url, push, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPush,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getPush(
        repositoryId: string,
        pushId: number,
        project?: string,
        includeCommits?: number,
        includeRefUpdates?: boolean
    ): Promise<GitInterfaces.GitPush> {

        return new Promise<GitInterfaces.GitPush>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pushId: pushId
            };

            let queryValues: any = {
                includeCommits: includeCommits,
                includeRefUpdates: includeRefUpdates,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "git",
                    "ea98d07b-3c87-4971-8ede-a613694ffb55",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPush>;
                res = await this.rest.get<GitInterfaces.GitPush>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPush,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getPushes(
        repositoryId: string,
        project?: string,
        skip?: number,
        top?: number,
        searchCriteria?: GitInterfaces.GitPushSearchCriteria
    ): Promise<GitInterfaces.GitPush[]> {

        return new Promise<GitInterfaces.GitPush[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                '$skip': skip,
                '$top': top,
                searchCriteria: searchCriteria,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.2",
                    "git",
                    "ea98d07b-3c87-4971-8ede-a613694ffb55",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitPush[]>;
                res = await this.rest.get<GitInterfaces.GitPush[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitPush,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Lock or unlock a ref.
     * 
     * @param {GitInterfaces.GitRefLockRequest} refLockRequest
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     */
    public async createRefLockRequest(
        refLockRequest: GitInterfaces.GitRefLockRequest,
        project: string,
        repositoryId: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "32863ac0-6a8a-4d9f-8afe-ba293b93ec3c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, refLockRequest, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Queries the provided repository for its refs and returns them.
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} filter - [optional] A filter to apply to the refs.
     * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     * @param {boolean} latestStatusesOnly
     */
    public async getRefs(
        repositoryId: string,
        project?: string,
        filter?: string,
        includeLinks?: boolean,
        latestStatusesOnly?: boolean
    ): Promise<GitInterfaces.GitRef[]> {

        return new Promise<GitInterfaces.GitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                filter: filter,
                includeLinks: includeLinks,
                latestStatusesOnly: latestStatusesOnly,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "2d874a60-a811-4f62-9c9f-963a6ea0a55b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRef[]>;
                res = await this.rest.get<GitInterfaces.GitRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitRef,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GitInterfaces.GitRefUpdate} newRefInfo
     * @param {string} repositoryId
     * @param {string} filter
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     */
    public async updateRef(
        newRefInfo: GitInterfaces.GitRefUpdate,
        repositoryId: string,
        filter: string,
        project?: string,
        projectId?: string
    ): Promise<GitInterfaces.GitRef> {

        return new Promise<GitInterfaces.GitRef>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                filter: filter,
                projectId: projectId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "2d874a60-a811-4f62-9c9f-963a6ea0a55b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRef>;
                res = await this.rest.update<GitInterfaces.GitRef>(url, newRefInfo, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitRef,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Creates or updates refs with the given information
     * 
     * @param {GitInterfaces.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - The id of the project.
     */
    public async updateRefs(
        refUpdates: GitInterfaces.GitRefUpdate[],
        repositoryId: string,
        project?: string,
        projectId?: string
    ): Promise<GitInterfaces.GitRefUpdateResult[]> {

        return new Promise<GitInterfaces.GitRefUpdateResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                projectId: projectId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "2d874a60-a811-4f62-9c9f-963a6ea0a55b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRefUpdateResult[]>;
                res = await this.rest.create<GitInterfaces.GitRefUpdateResult[]>(url, refUpdates, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitRefUpdateResult,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Creates a ref favorite
     * 
     * @param {GitInterfaces.GitRefFavorite} favorite
     * @param {string} project - Project ID or project name
     */
    public async createFavorite(
        favorite: GitInterfaces.GitRefFavorite,
        project: string
    ): Promise<GitInterfaces.GitRefFavorite> {

        return new Promise<GitInterfaces.GitRefFavorite>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "876f70af-5792-485a-a1c7-d0a7b2f42bbb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRefFavorite>;
                res = await this.rest.create<GitInterfaces.GitRefFavorite>(url, favorite, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitRefFavorite,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId
     */
    public async deleteRefFavorite(
        project: string,
        favoriteId: number
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                favoriteId: favoriteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "876f70af-5792-485a-a1c7-d0a7b2f42bbb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId
     */
    public async getRefFavorite(
        project: string,
        favoriteId: number
    ): Promise<GitInterfaces.GitRefFavorite> {

        return new Promise<GitInterfaces.GitRefFavorite>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                favoriteId: favoriteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "876f70af-5792-485a-a1c7-d0a7b2f42bbb",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRefFavorite>;
                res = await this.rest.get<GitInterfaces.GitRefFavorite>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitRefFavorite,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the refs favorites for a repo and an identity.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The id of the repository.
     * @param {string} identityId - The id of the identity whose favorites are to be retrieved. If null, the requesting identity is used.
     */
    public async getRefFavorites(
        project: string,
        repositoryId?: string,
        identityId?: string
    ): Promise<GitInterfaces.GitRefFavorite[]> {

        return new Promise<GitInterfaces.GitRefFavorite[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                repositoryId: repositoryId,
                identityId: identityId,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "876f70af-5792-485a-a1c7-d0a7b2f42bbb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRefFavorite[]>;
                res = await this.rest.get<GitInterfaces.GitRefFavorite[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitRefFavorite,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a git repository
     * 
     * @param {GitInterfaces.GitRepository} gitRepositoryToCreate
     * @param {string} project - Project ID or project name
     */
    public async createRepository(
        gitRepositoryToCreate: GitInterfaces.GitRepository,
        project?: string
    ): Promise<GitInterfaces.GitRepository> {

        return new Promise<GitInterfaces.GitRepository>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository>;
                res = await this.rest.create<GitInterfaces.GitRepository>(url, gitRepositoryToCreate, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a git repository
     * 
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public async deleteRepository(
        repositoryId: string,
        project?: string
    ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve git repositories.
     * 
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks
     * @param {boolean} includeAllUrls
     */
    public async getRepositories(
        project?: string,
        includeLinks?: boolean,
        includeAllUrls?: boolean
    ): Promise<GitInterfaces.GitRepository[]> {

        return new Promise<GitInterfaces.GitRepository[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                includeLinks: includeLinks,
                includeAllUrls: includeAllUrls,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository[]>;
                res = await this.rest.get<GitInterfaces.GitRepository[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public async getRepository(
        repositoryId: string,
        project?: string
    ): Promise<GitInterfaces.GitRepository> {

        return new Promise<GitInterfaces.GitRepository>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository>;
                res = await this.rest.get<GitInterfaces.GitRepository>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Updates the Git repository with the single populated change in the specified repository information.
     * 
     * @param {GitInterfaces.GitRepository} newRepositoryInfo
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public async updateRepository(
        newRepositoryInfo: GitInterfaces.GitRepository,
        repositoryId: string,
        project?: string
    ): Promise<GitInterfaces.GitRepository> {

        return new Promise<GitInterfaces.GitRepository>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository>;
                res = await this.rest.update<GitInterfaces.GitRepository>(url, newRepositoryInfo, options);

                let ret = this.formatResponse(res.result,
                    null,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GitInterfaces.GitAsyncRefOperationParameters} revertToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     */
    public async createRevert(
        revertToCreate: GitInterfaces.GitAsyncRefOperationParameters,
        project: string,
        repositoryId: string
    ): Promise<GitInterfaces.GitRevert> {

        return new Promise<GitInterfaces.GitRevert>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "bc866058-5449-4715-9cf1-a510b6ff193c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRevert>;
                res = await this.rest.create<GitInterfaces.GitRevert>(url, revertToCreate, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitRevert,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} revertId
     * @param {string} repositoryId
     */
    public async getRevert(
        project: string,
        revertId: number,
        repositoryId: string
    ): Promise<GitInterfaces.GitRevert> {

        return new Promise<GitInterfaces.GitRevert>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                revertId: revertId,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "bc866058-5449-4715-9cf1-a510b6ff193c",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRevert>;
                res = await this.rest.get<GitInterfaces.GitRevert>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitRevert,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId
     * @param {string} refName
     */
    public async getRevertForRefName(
        project: string,
        repositoryId: string,
        refName: string
    ): Promise<GitInterfaces.GitRevert> {

        return new Promise<GitInterfaces.GitRevert>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                refName: refName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "bc866058-5449-4715-9cf1-a510b6ff193c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRevert>;
                res = await this.rest.get<GitInterfaces.GitRevert>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitRevert,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {GitInterfaces.GitStatus} gitCommitStatusToCreate
     * @param {string} commitId
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public async createCommitStatus(
        gitCommitStatusToCreate: GitInterfaces.GitStatus,
        commitId: string,
        repositoryId: string,
        project?: string
    ): Promise<GitInterfaces.GitStatus> {

        return new Promise<GitInterfaces.GitStatus>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                commitId: commitId,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "428dd4fb-fda5-4722-af02-9313b80305da",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitStatus>;
                res = await this.rest.create<GitInterfaces.GitStatus>(url, gitCommitStatusToCreate, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitStatus,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} commitId
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {number} top
     * @param {number} skip
     * @param {boolean} latestOnly
     */
    public async getStatuses(
        commitId: string,
        repositoryId: string,
        project?: string,
        top?: number,
        skip?: number,
        latestOnly?: boolean
    ): Promise<GitInterfaces.GitStatus[]> {

        return new Promise<GitInterfaces.GitStatus[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                commitId: commitId,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                top: top,
                skip: skip,
                latestOnly: latestOnly,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "428dd4fb-fda5-4722-af02-9313b80305da",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitStatus[]>;
                res = await this.rest.get<GitInterfaces.GitStatus[]>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitStatus,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a set of suggestions (including a pull request suggestion).
     * 
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     */
    public async getSuggestions(
        repositoryId: string,
        project?: string
    ): Promise<GitInterfaces.GitSuggestion[]> {

        return new Promise<GitInterfaces.GitSuggestion[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "9393b4fb-4445-4919-972b-9ad16f442d83",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitSuggestion[]>;
                res = await this.rest.get<GitInterfaces.GitSuggestion[]>(url, options);

                let ret = this.formatResponse(res.result,
                    null,
                    true);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     */
    public async getTree(
        repositoryId: string,
        sha1: string,
        project?: string,
        projectId?: string,
        recursive?: boolean,
        fileName?: string
    ): Promise<GitInterfaces.GitTreeRef> {

        return new Promise<GitInterfaces.GitTreeRef>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                sha1: sha1
            };

            let queryValues: any = {
                projectId: projectId,
                recursive: recursive,
                fileName: fileName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "729f6437-6f92-44ec-8bee-273a7111063c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitTreeRef>;
                res = await this.rest.get<GitInterfaces.GitTreeRef>(url, options);

                let ret = this.formatResponse(res.result,
                    GitInterfaces.TypeInfo.GitTreeRef,
                    false);

                resolve(ret);

            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     */
    public async getTreeZip(
        repositoryId: string,
        sha1: string,
        project?: string,
        projectId?: string,
        recursive?: boolean,
        fileName?: string
    ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                sha1: sha1
            };

            let queryValues: any = {
                projectId: projectId,
                recursive: recursive,
                fileName: fileName,
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "git",
                    "729f6437-6f92-44ec-8bee-273a7111063c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;

                let apiVersion: string = verData.apiVersion;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
