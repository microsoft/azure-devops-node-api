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
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import GitInterfaces = require("./interfaces/GitInterfaces");
import PolicyInterfaces = require("./interfaces/PolicyInterfaces");
import TfsCoreInterfaces = require("./interfaces/CoreInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IGitApi extends basem.ClientApiBase {
    createAnnotatedTag(tagObject: GitInterfaces.GitAnnotatedTag, project: string, repositoryId: string): Promise<GitInterfaces.GitAnnotatedTag>;
    getAnnotatedTag(project: string, repositoryId: string, objectId: string): Promise<GitInterfaces.GitAnnotatedTag>;
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string, resolveLfs?: boolean): Promise<GitInterfaces.GitBlobRef>;
    getBlobContent(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string, resolveLfs?: boolean): Promise<NodeJS.ReadableStream>;
    getBlobsZip(blobIds: string[], repositoryId: string, project?: string, filename?: string): Promise<NodeJS.ReadableStream>;
    getBlobZip(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string, resolveLfs?: boolean): Promise<NodeJS.ReadableStream>;
    getBranch(repositoryId: string, name: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<GitInterfaces.GitBranchStats>;
    getBranches(repositoryId: string, project?: string, baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<GitInterfaces.GitBranchStats[]>;
    getBranchStatsBatch(searchCriteria: GitInterfaces.GitQueryBranchStatsCriteria, repositoryId: string, project?: string): Promise<GitInterfaces.GitBranchStats[]>;
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number): Promise<GitInterfaces.GitCommitChanges>;
    getCherryPickConflict(repositoryId: string, cherryPickId: number, conflictId: number, project?: string): Promise<GitInterfaces.GitConflict>;
    getCherryPickConflicts(repositoryId: string, cherryPickId: number, project?: string, continuationToken?: string, top?: number, excludeResolved?: boolean, onlyResolved?: boolean, includeObsolete?: boolean): Promise<GitInterfaces.GitConflict[]>;
    updateCherryPickConflict(conflict: GitInterfaces.GitConflict, repositoryId: string, cherryPickId: number, conflictId: number, project?: string): Promise<GitInterfaces.GitConflict>;
    updateCherryPickConflicts(conflictUpdates: GitInterfaces.GitConflict[], repositoryId: string, cherryPickId: number, project?: string): Promise<GitInterfaces.GitConflictUpdateResult[]>;
    getCherryPickRelationships(repositoryNameOrId: string, commitId: string, project?: string, includeLinks?: boolean): Promise<GitInterfaces.GitCommitRef[]>;
    createCherryPick(cherryPickToCreate: GitInterfaces.GitAsyncRefOperationParameters, project: string, repositoryId: string): Promise<GitInterfaces.GitCherryPick>;
    getCherryPick(project: string, cherryPickId: number, repositoryId: string): Promise<GitInterfaces.GitCherryPick>;
    getCherryPickForRefName(project: string, repositoryId: string, refName: string): Promise<GitInterfaces.GitCherryPick>;
    getCommitDiffs(repositoryId: string, project?: string, diffCommonCommit?: boolean, top?: number, skip?: number, baseVersionDescriptor?: GitInterfaces.GitBaseVersionDescriptor, targetVersionDescriptor?: GitInterfaces.GitTargetVersionDescriptor): Promise<GitInterfaces.GitCommitDiffs>;
    getCommit(commitId: string, repositoryId: string, project?: string, changeCount?: number): Promise<GitInterfaces.GitCommit>;
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project?: string, skip?: number, top?: number): Promise<GitInterfaces.GitCommitRef[]>;
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean): Promise<GitInterfaces.GitCommitRef[]>;
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number, includeStatuses?: boolean): Promise<GitInterfaces.GitCommitRef[]>;
    getDeletedRepositories(project: string): Promise<GitInterfaces.GitDeletedRepository[]>;
    getFileDiffs(fileDiffsCriteria: GitInterfaces.FileDiffsCriteria, project: string, repositoryId: string): Promise<GitInterfaces.FileDiff[]>;
    getForks(repositoryNameOrId: string, collectionId: string, project?: string, includeLinks?: boolean): Promise<GitInterfaces.GitRepositoryRef[]>;
    createForkSyncRequest(syncParams: GitInterfaces.GitForkSyncRequestParameters, repositoryNameOrId: string, project?: string, includeLinks?: boolean): Promise<GitInterfaces.GitForkSyncRequest>;
    getForkSyncRequest(repositoryNameOrId: string, forkSyncOperationId: number, project?: string, includeLinks?: boolean): Promise<GitInterfaces.GitForkSyncRequest>;
    getForkSyncRequests(repositoryNameOrId: string, project?: string, includeAbandoned?: boolean, includeLinks?: boolean): Promise<GitInterfaces.GitForkSyncRequest[]>;
    createImportRequest(importRequest: GitInterfaces.GitImportRequest, project: string, repositoryId: string): Promise<GitInterfaces.GitImportRequest>;
    getImportRequest(project: string, repositoryId: string, importRequestId: number): Promise<GitInterfaces.GitImportRequest>;
    queryImportRequests(project: string, repositoryId: string, includeAbandoned?: boolean): Promise<GitInterfaces.GitImportRequest[]>;
    updateImportRequest(importRequestToUpdate: GitInterfaces.GitImportRequest, project: string, repositoryId: string, importRequestId: number): Promise<GitInterfaces.GitImportRequest>;
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean, resolveLfs?: boolean, sanitize?: boolean): Promise<GitInterfaces.GitItem>;
    getItemContent(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean, resolveLfs?: boolean, sanitize?: boolean): Promise<NodeJS.ReadableStream>;
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor, zipForUnix?: boolean): Promise<GitInterfaces.GitItem[]>;
    getItemText(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean, resolveLfs?: boolean, sanitize?: boolean): Promise<NodeJS.ReadableStream>;
    getItemZip(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean, resolveLfs?: boolean, sanitize?: boolean): Promise<NodeJS.ReadableStream>;
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project?: string): Promise<GitInterfaces.GitItem[][]>;
    getMergeBases(repositoryNameOrId: string, commitId: string, otherCommitId: string, project?: string, otherCollectionId?: string, otherRepositoryId?: string): Promise<GitInterfaces.GitCommitRef[]>;
    createMergeRequest(mergeParameters: GitInterfaces.GitMergeParameters, project: string, repositoryNameOrId: string, includeLinks?: boolean): Promise<GitInterfaces.GitMerge>;
    getMergeRequest(project: string, repositoryNameOrId: string, mergeOperationId: number, includeLinks?: boolean): Promise<GitInterfaces.GitMerge>;
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.Attachment>;
    deleteAttachment(fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    getAttachmentContent(fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<NodeJS.ReadableStream>;
    getAttachments(repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.Attachment[]>;
    getAttachmentZip(fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<NodeJS.ReadableStream>;
    createLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<void>;
    deleteLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<void>;
    getLikes(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<VSSInterfaces.IdentityRef[]>;
    getPullRequestIterationCommits(repositoryId: string, pullRequestId: number, iterationId: number, project?: string, top?: number, skip?: number): Promise<GitInterfaces.GitCommitRef[]>;
    getPullRequestCommits(repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitCommitRef[]>;
    getPullRequestConflict(repositoryId: string, pullRequestId: number, conflictId: number, project?: string): Promise<GitInterfaces.GitConflict>;
    getPullRequestConflicts(repositoryId: string, pullRequestId: number, project?: string, skip?: number, top?: number, includeObsolete?: boolean, excludeResolved?: boolean, onlyResolved?: boolean): Promise<GitInterfaces.GitConflict[]>;
    updatePullRequestConflict(conflict: GitInterfaces.GitConflict, repositoryId: string, pullRequestId: number, conflictId: number, project?: string): Promise<GitInterfaces.GitConflict>;
    updatePullRequestConflicts(conflictUpdates: GitInterfaces.GitConflict[], repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitConflictUpdateResult[]>;
    getPullRequestIterationChanges(repositoryId: string, pullRequestId: number, iterationId: number, project?: string, top?: number, skip?: number, compareTo?: number): Promise<GitInterfaces.GitPullRequestIterationChanges>;
    getPullRequestIteration(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<GitInterfaces.GitPullRequestIteration>;
    getPullRequestIterations(repositoryId: string, pullRequestId: number, project?: string, includeCommits?: boolean): Promise<GitInterfaces.GitPullRequestIteration[]>;
    createPullRequestIterationStatus(status: GitInterfaces.GitPullRequestStatus, repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus>;
    deletePullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project?: string): Promise<void>;
    getPullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestIterationStatuses(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus[]>;
    updatePullRequestIterationStatuses(customHeaders: any, patchDocument: VSSInterfaces.JsonPatchDocument, repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<void>;
    createPullRequestLabel(label: TfsCoreInterfaces.WebApiCreateTagRequestData, repositoryId: string, pullRequestId: number, project?: string, projectId?: string): Promise<TfsCoreInterfaces.WebApiTagDefinition>;
    deletePullRequestLabels(repositoryId: string, pullRequestId: number, labelIdOrName: string, project?: string, projectId?: string): Promise<void>;
    getPullRequestLabel(repositoryId: string, pullRequestId: number, labelIdOrName: string, project?: string, projectId?: string): Promise<TfsCoreInterfaces.WebApiTagDefinition>;
    getPullRequestLabels(repositoryId: string, pullRequestId: number, project?: string, projectId?: string): Promise<TfsCoreInterfaces.WebApiTagDefinition[]>;
    getPullRequestProperties(repositoryId: string, pullRequestId: number, project?: string): Promise<any>;
    updatePullRequestProperties(customHeaders: any, patchDocument: VSSInterfaces.JsonPatchDocument, repositoryId: string, pullRequestId: number, project?: string): Promise<any>;
    getPullRequestQuery(queries: GitInterfaces.GitPullRequestQuery, repositoryId: string, project?: string): Promise<GitInterfaces.GitPullRequestQuery>;
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<GitInterfaces.IdentityRefWithVote>;
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.IdentityRefWithVote[]>;
    createUnmaterializedPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.IdentityRefWithVote>;
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<void>;
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<GitInterfaces.IdentityRefWithVote>;
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.IdentityRefWithVote[]>;
    updatePullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<GitInterfaces.IdentityRefWithVote>;
    updatePullRequestReviewers(patchVotes: GitInterfaces.IdentityRefWithVote[], repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    getPullRequestById(pullRequestId: number, project?: string): Promise<GitInterfaces.GitPullRequest>;
    getPullRequestsByProject(project: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, maxCommentLength?: number, skip?: number, top?: number): Promise<GitInterfaces.GitPullRequest[]>;
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project?: string, supportsIterations?: boolean): Promise<GitInterfaces.GitPullRequest>;
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number, includeCommits?: boolean, includeWorkItemRefs?: boolean): Promise<GitInterfaces.GitPullRequest>;
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number): Promise<GitInterfaces.GitPullRequest[]>;
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitPullRequest>;
    sharePullRequest(userMessage: GitInterfaces.ShareNotificationContext, repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    createPullRequestStatus(status: GitInterfaces.GitPullRequestStatus, repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus>;
    deletePullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project?: string): Promise<void>;
    getPullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus>;
    getPullRequestStatuses(repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitPullRequestStatus[]>;
    updatePullRequestStatuses(customHeaders: any, patchDocument: VSSInterfaces.JsonPatchDocument, repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    createComment(comment: GitInterfaces.Comment, repositoryId: string, pullRequestId: number, threadId: number, project?: string): Promise<GitInterfaces.Comment>;
    deleteComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<void>;
    getComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<GitInterfaces.Comment>;
    getComments(repositoryId: string, pullRequestId: number, threadId: number, project?: string): Promise<GitInterfaces.Comment[]>;
    updateComment(comment: GitInterfaces.Comment, repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<GitInterfaces.Comment>;
    createThread(commentThread: GitInterfaces.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, project?: string): Promise<GitInterfaces.GitPullRequestCommentThread>;
    getPullRequestThread(repositoryId: string, pullRequestId: number, threadId: number, project?: string, iteration?: number, baseIteration?: number): Promise<GitInterfaces.GitPullRequestCommentThread>;
    getThreads(repositoryId: string, pullRequestId: number, project?: string, iteration?: number, baseIteration?: number): Promise<GitInterfaces.GitPullRequestCommentThread[]>;
    updateThread(commentThread: GitInterfaces.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, threadId: number, project?: string): Promise<GitInterfaces.GitPullRequestCommentThread>;
    getPullRequestWorkItemRefs(repositoryId: string, pullRequestId: number, project?: string): Promise<VSSInterfaces.ResourceRef[]>;
    createPush(push: GitInterfaces.GitPush, repositoryId: string, project?: string): Promise<GitInterfaces.GitPush>;
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean): Promise<GitInterfaces.GitPush>;
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: GitInterfaces.GitPushSearchCriteria): Promise<GitInterfaces.GitPush[]>;
    deleteRepositoryFromRecycleBin(project: string, repositoryId: string): Promise<void>;
    getRecycleBinRepositories(project: string): Promise<GitInterfaces.GitDeletedRepository[]>;
    restoreRepositoryFromRecycleBin(repositoryDetails: GitInterfaces.GitRecycleBinRepositoryDetails, project: string, repositoryId: string): Promise<GitInterfaces.GitRepository>;
    getRefs(repositoryId: string, project?: string, filter?: string, includeLinks?: boolean, includeStatuses?: boolean, includeMyBranches?: boolean, latestStatusesOnly?: boolean, peelTags?: boolean, filterContains?: string): Promise<GitInterfaces.GitRef[]>;
    updateRef(newRefInfo: GitInterfaces.GitRefUpdate, repositoryId: string, filter: string, project?: string, projectId?: string): Promise<GitInterfaces.GitRef>;
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string): Promise<GitInterfaces.GitRefUpdateResult[]>;
    createFavorite(favorite: GitInterfaces.GitRefFavorite, project: string): Promise<GitInterfaces.GitRefFavorite>;
    deleteRefFavorite(project: string, favoriteId: number): Promise<void>;
    getRefFavorite(project: string, favoriteId: number): Promise<GitInterfaces.GitRefFavorite>;
    getRefFavorites(project: string, repositoryId?: string, identityId?: string): Promise<GitInterfaces.GitRefFavorite[]>;
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepositoryCreateOptions, project?: string, sourceRef?: string): Promise<GitInterfaces.GitRepository>;
    deleteRepository(repositoryId: string, project?: string): Promise<void>;
    getRepositories(project?: string, includeLinks?: boolean, includeAllUrls?: boolean, includeHidden?: boolean): Promise<GitInterfaces.GitRepository[]>;
    getRepository(repositoryId: string, project?: string): Promise<GitInterfaces.GitRepository>;
    getRepositoryWithParent(repositoryId: string, includeParent: boolean, project?: string): Promise<GitInterfaces.GitRepository>;
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project?: string): Promise<GitInterfaces.GitRepository>;
    getRevertConflict(repositoryId: string, revertId: number, conflictId: number, project?: string): Promise<GitInterfaces.GitConflict>;
    getRevertConflicts(repositoryId: string, revertId: number, project?: string, continuationToken?: string, top?: number, excludeResolved?: boolean, onlyResolved?: boolean, includeObsolete?: boolean): Promise<GitInterfaces.GitConflict[]>;
    updateRevertConflict(conflict: GitInterfaces.GitConflict, repositoryId: string, revertId: number, conflictId: number, project?: string): Promise<GitInterfaces.GitConflict>;
    updateRevertConflicts(conflictUpdates: GitInterfaces.GitConflict[], repositoryId: string, revertId: number, project?: string): Promise<GitInterfaces.GitConflictUpdateResult[]>;
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

    public static readonly RESOURCE_AREA_ID = "4e080c62-fa21-4fbc-8fef-2a10a2b38049";

    /**
     * Create an annotated tag.
     * 
     * @param {GitInterfaces.GitAnnotatedTag} tagObject - Object containing details of tag to be created.
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID or name of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "5e8a8081-3851-4626-b677-9891cc04102e",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get an annotated tag.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID or name of the repository.
     * @param {string} objectId - ObjectId (Sha1Id) of tag to get.
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
                    "7.1-preview.1",
                    "git",
                    "5e8a8081-3851-4626-b677-9891cc04102e",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get a single blob.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
     * @param {string} project - Project ID or project name
     * @param {boolean} download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param {string} fileName - Provide a fileName to use for a download.
     * @param {boolean} resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
     */
    public async getBlob(
        repositoryId: string,
        sha1: string,
        project?: string,
        download?: boolean,
        fileName?: string,
        resolveLfs?: boolean
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
                resolveLfs: resolveLfs,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "7b28e929-2c99-405d-9c5c-6167a06e6816",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get a single blob.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
     * @param {string} project - Project ID or project name
     * @param {boolean} download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param {string} fileName - Provide a fileName to use for a download.
     * @param {boolean} resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
     */
    public async getBlobContent(
        repositoryId: string,
        sha1: string,
        project?: string,
        download?: boolean,
        fileName?: string,
        resolveLfs?: boolean
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
                resolveLfs: resolveLfs,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "7b28e929-2c99-405d-9c5c-6167a06e6816",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
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
     * @param {string[]} blobIds - Blob IDs (SHA1 hashes) to be returned in the zip file.
     * @param {string} repositoryId - The name or ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "7b28e929-2c99-405d-9c5c-6167a06e6816",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a single blob.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
     * @param {string} project - Project ID or project name
     * @param {boolean} download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param {string} fileName - Provide a fileName to use for a download.
     * @param {boolean} resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
     */
    public async getBlobZip(
        repositoryId: string,
        sha1: string,
        project?: string,
        download?: boolean,
        fileName?: string,
        resolveLfs?: boolean
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
                resolveLfs: resolveLfs,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "7b28e929-2c99-405d-9c5c-6167a06e6816",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
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
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} name - Name of the branch.
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor - Identifies the commit or branch to use as the base.
     */
    public async getBranch(
        repositoryId: string,
        name: string,
        project?: string,
        baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Promise<GitInterfaces.GitBranchStats> {
        if (name == null) {
            throw new TypeError('name can not be null or undefined');
        }

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
                    "7.1-preview.1",
                    "git",
                    "d5b216de-d8d5-4d32-ae76-51df755b16d3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor - Identifies the commit or branch to use as the base.
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
                    "7.1-preview.1",
                    "git",
                    "d5b216de-d8d5-4d32-ae76-51df755b16d3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {GitInterfaces.GitQueryBranchStatsCriteria} searchCriteria
     * @param {string} repositoryId
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
                    "7.1-preview.1",
                    "git",
                    "d5b216de-d8d5-4d32-ae76-51df755b16d3",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "7.1-preview.1",
                    "git",
                    "5bf884f5-3e07-42e9-afb8-1b872267bf16",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve one conflict for a cherry pick by ID
     * 
     * @param {string} repositoryId
     * @param {number} cherryPickId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     */
    public async getCherryPickConflict(
        repositoryId: string,
        cherryPickId: number,
        conflictId: number,
        project?: string
        ): Promise<GitInterfaces.GitConflict> {

        return new Promise<GitInterfaces.GitConflict>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                cherryPickId: cherryPickId,
                conflictId: conflictId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "1fe5aab2-d4c0-4b2f-a030-f3831e7aca26",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve all conflicts for a cherry pick
     * 
     * @param {string} repositoryId
     * @param {number} cherryPickId
     * @param {string} project - Project ID or project name
     * @param {string} continuationToken
     * @param {number} top
     * @param {boolean} excludeResolved
     * @param {boolean} onlyResolved
     * @param {boolean} includeObsolete
     */
    public async getCherryPickConflicts(
        repositoryId: string,
        cherryPickId: number,
        project?: string,
        continuationToken?: string,
        top?: number,
        excludeResolved?: boolean,
        onlyResolved?: boolean,
        includeObsolete?: boolean
        ): Promise<GitInterfaces.GitConflict[]> {

        return new Promise<GitInterfaces.GitConflict[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                cherryPickId: cherryPickId
            };

            let queryValues: any = {
                continuationToken: continuationToken,
                '$top': top,
                excludeResolved: excludeResolved,
                onlyResolved: onlyResolved,
                includeObsolete: includeObsolete,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "1fe5aab2-d4c0-4b2f-a030-f3831e7aca26",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {number} cherryPickId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     */
    public async updateCherryPickConflict(
        conflict: GitInterfaces.GitConflict,
        repositoryId: string,
        cherryPickId: number,
        conflictId: number,
        project?: string
        ): Promise<GitInterfaces.GitConflict> {

        return new Promise<GitInterfaces.GitConflict>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                cherryPickId: cherryPickId,
                conflictId: conflictId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "1fe5aab2-d4c0-4b2f-a030-f3831e7aca26",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Update multiple merge conflict resolutions
     * 
     * @param {GitInterfaces.GitConflict[]} conflictUpdates
     * @param {string} repositoryId
     * @param {number} cherryPickId
     * @param {string} project - Project ID or project name
     */
    public async updateCherryPickConflicts(
        conflictUpdates: GitInterfaces.GitConflict[],
        repositoryId: string,
        cherryPickId: number,
        project?: string
        ): Promise<GitInterfaces.GitConflictUpdateResult[]> {

        return new Promise<GitInterfaces.GitConflictUpdateResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                cherryPickId: cherryPickId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "1fe5aab2-d4c0-4b2f-a030-f3831e7aca26",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitConflictUpdateResult[]>;
                res = await this.rest.update<GitInterfaces.GitConflictUpdateResult[]>(url, conflictUpdates, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitConflictUpdateResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Given a commitId, returns a list of commits that are in the same cherry-pick family.
     * 
     * @param {string} repositoryNameOrId
     * @param {string} commitId
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks
     */
    public async getCherryPickRelationships(
        repositoryNameOrId: string,
        commitId: string,
        project?: string,
        includeLinks?: boolean
        ): Promise<GitInterfaces.GitCommitRef[]> {

        return new Promise<GitInterfaces.GitCommitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryNameOrId: repositoryNameOrId,
                commitId: commitId
            };

            let queryValues: any = {
                includeLinks: includeLinks,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "8af142a4-27c2-4168-9e82-46b8629aaa0d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Cherry pick a specific commit or commits that are associated to a pull request into a new branch.
     * 
     * @param {GitInterfaces.GitAsyncRefOperationParameters} cherryPickToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "033bad68-9a14-43d1-90e0-59cb8856fef6",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve information about a cherry pick operation by cherry pick Id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} cherryPickId - ID of the cherry pick.
     * @param {string} repositoryId - ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "033bad68-9a14-43d1-90e0-59cb8856fef6",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve information about a cherry pick operation for a specific branch. This operation is expensive due to the underlying object structure, so this API only looks at the 1000 most recent cherry pick operations.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID of the repository.
     * @param {string} refName - The GitAsyncRefOperationParameters generatedRefName used for the cherry pick operation.
     */
    public async getCherryPickForRefName(
        project: string,
        repositoryId: string,
        refName: string
        ): Promise<GitInterfaces.GitCherryPick> {
        if (refName == null) {
            throw new TypeError('refName can not be null or undefined');
        }

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
                    "7.1-preview.1",
                    "git",
                    "033bad68-9a14-43d1-90e0-59cb8856fef6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Find the closest common commit (the merge base) between base and target commits, and get the diff between either the base and target commits or common and target commits.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {boolean} diffCommonCommit - If true, diff between common and target commits. If false, diff between base and target commits.
     * @param {number} top - Maximum number of changes to return. Defaults to 100.
     * @param {number} skip - Number of changes to skip
     * @param {GitInterfaces.GitBaseVersionDescriptor} baseVersionDescriptor - Descriptor for base commit.
     * @param {GitInterfaces.GitTargetVersionDescriptor} targetVersionDescriptor - Descriptor for target commit.
     */
    public async getCommitDiffs(
        repositoryId: string,
        project?: string,
        diffCommonCommit?: boolean,
        top?: number,
        skip?: number,
        baseVersionDescriptor?: GitInterfaces.GitBaseVersionDescriptor,
        targetVersionDescriptor?: GitInterfaces.GitTargetVersionDescriptor
        ): Promise<GitInterfaces.GitCommitDiffs> {

        return new Promise<GitInterfaces.GitCommitDiffs>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                diffCommonCommit: diffCommonCommit,
                '$top': top,
                '$skip': skip,
            };
            if (baseVersionDescriptor) {
                queryValues.baseVersionType = baseVersionDescriptor.versionType;
                queryValues.baseVersion = baseVersionDescriptor.version;
                queryValues.baseVersionOptions = baseVersionDescriptor.versionOptions;
            }
            if (targetVersionDescriptor) {
                queryValues.targetVersionType = targetVersionDescriptor.versionType;
                queryValues.targetVersion = targetVersionDescriptor.version;
                queryValues.targetVersionOptions = targetVersionDescriptor.versionOptions;
            }
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "615588d5-c0c7-4b88-88f8-e625306446e8",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitCommitDiffs>;
                res = await this.rest.get<GitInterfaces.GitCommitDiffs>(url, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitCommitDiffs,
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
                    "7.1-preview.1",
                    "git",
                    "c2570c3b-5b3f-41b8-98bf-5407bfde8d58",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
        if (searchCriteria == null) {
            throw new TypeError('searchCriteria can not be null or undefined');
        }

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
                    "7.1-preview.1",
                    "git",
                    "c2570c3b-5b3f-41b8-98bf-5407bfde8d58",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {boolean} includeLinks - Set to false to avoid including REST Url links for resources. Defaults to true.
     */
    public async getPushCommits(
        repositoryId: string,
        pushId: number,
        project?: string,
        top?: number,
        skip?: number,
        includeLinks?: boolean
        ): Promise<GitInterfaces.GitCommitRef[]> {
        if (pushId == null) {
            throw new TypeError('pushId can not be null or undefined');
        }

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
                    "7.1-preview.1",
                    "git",
                    "c2570c3b-5b3f-41b8-98bf-5407bfde8d58",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve git commits for a project matching the search criteria
     * 
     * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria - Search options
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {number} skip - Number of commits to skip.
     * @param {number} top - Maximum number of commits to return.
     * @param {boolean} includeStatuses - True to include additional commit status information.
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
                    "7.1-preview.1",
                    "git",
                    "6400dfb2-0bcb-462b-b992-5a57f8f1416c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
                    "7.1-preview.1",
                    "git",
                    "2b6869c4-cb25-42b5-b7a3-0d3e6be0a11a",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get the file diffs for each of the specified files
     * 
     * @param {GitInterfaces.FileDiffsCriteria} fileDiffsCriteria - List of file parameters objects
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The name or ID of the repository
     */
    public async getFileDiffs(
        fileDiffsCriteria: GitInterfaces.FileDiffsCriteria,
        project: string,
        repositoryId: string
        ): Promise<GitInterfaces.FileDiff[]> {

        return new Promise<GitInterfaces.FileDiff[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "c4c5a7e6-e9f3-4730-a92b-84baacff694b",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.FileDiff[]>;
                res = await this.rest.create<GitInterfaces.FileDiff[]>(url, fileDiffsCriteria, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.FileDiff,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve all forks of a repository in the collection.
     * 
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {string} collectionId - Team project collection ID.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks - True to include links.
     */
    public async getForks(
        repositoryNameOrId: string,
        collectionId: string,
        project?: string,
        includeLinks?: boolean
        ): Promise<GitInterfaces.GitRepositoryRef[]> {

        return new Promise<GitInterfaces.GitRepositoryRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryNameOrId: repositoryNameOrId,
                collectionId: collectionId
            };

            let queryValues: any = {
                includeLinks: includeLinks,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "158c0340-bf6f-489c-9625-d572a1480d57",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepositoryRef[]>;
                res = await this.rest.get<GitInterfaces.GitRepositoryRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitRepositoryRef,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Request that another repository's refs be fetched into this one. It syncs two existing forks. To create a fork, please see the <a href="https://docs.microsoft.com/en-us/rest/api/vsts/git/repositories/create?view=azure-devops-rest-5.1"> repositories endpoint</a>
     * 
     * @param {GitInterfaces.GitForkSyncRequestParameters} syncParams - Source repository and ref mapping.
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks - True to include links
     */
    public async createForkSyncRequest(
        syncParams: GitInterfaces.GitForkSyncRequestParameters,
        repositoryNameOrId: string,
        project?: string,
        includeLinks?: boolean
        ): Promise<GitInterfaces.GitForkSyncRequest> {

        return new Promise<GitInterfaces.GitForkSyncRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryNameOrId: repositoryNameOrId
            };

            let queryValues: any = {
                includeLinks: includeLinks,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "1703f858-b9d1-46af-ab62-483e9e1055b5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitForkSyncRequest>;
                res = await this.rest.create<GitInterfaces.GitForkSyncRequest>(url, syncParams, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitForkSyncRequest,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a specific fork sync operation's details.
     * 
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {number} forkSyncOperationId - OperationId of the sync request.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks - True to include links.
     */
    public async getForkSyncRequest(
        repositoryNameOrId: string,
        forkSyncOperationId: number,
        project?: string,
        includeLinks?: boolean
        ): Promise<GitInterfaces.GitForkSyncRequest> {

        return new Promise<GitInterfaces.GitForkSyncRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryNameOrId: repositoryNameOrId,
                forkSyncOperationId: forkSyncOperationId
            };

            let queryValues: any = {
                includeLinks: includeLinks,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "1703f858-b9d1-46af-ab62-483e9e1055b5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitForkSyncRequest>;
                res = await this.rest.get<GitInterfaces.GitForkSyncRequest>(url, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitForkSyncRequest,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve all requested fork sync operations on this repository.
     * 
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeAbandoned - True to include abandoned requests.
     * @param {boolean} includeLinks - True to include links.
     */
    public async getForkSyncRequests(
        repositoryNameOrId: string,
        project?: string,
        includeAbandoned?: boolean,
        includeLinks?: boolean
        ): Promise<GitInterfaces.GitForkSyncRequest[]> {

        return new Promise<GitInterfaces.GitForkSyncRequest[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryNameOrId: repositoryNameOrId
            };

            let queryValues: any = {
                includeAbandoned: includeAbandoned,
                includeLinks: includeLinks,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "1703f858-b9d1-46af-ab62-483e9e1055b5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitForkSyncRequest[]>;
                res = await this.rest.get<GitInterfaces.GitForkSyncRequest[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitForkSyncRequest,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create an import request.
     * 
     * @param {GitInterfaces.GitImportRequest} importRequest - The import request to create.
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The name or ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "01828ddc-3600-4a41-8633-99b3a73a0eb3",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve a particular import request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {number} importRequestId - The unique identifier for the import request.
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
                    "7.1-preview.1",
                    "git",
                    "01828ddc-3600-4a41-8633-99b3a73a0eb3",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve import requests for a repository.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {boolean} includeAbandoned - True to include abandoned import requests in the results.
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
                    "7.1-preview.1",
                    "git",
                    "01828ddc-3600-4a41-8633-99b3a73a0eb3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Retry or abandon a failed import request.
     * 
     * @param {GitInterfaces.GitImportRequest} importRequestToUpdate - The updated version of the import request. Currently, the only change allowed is setting the Status to Queued or Abandoned.
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {number} importRequestId - The unique identifier for the import request to update.
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
                    "7.1-preview.1",
                    "git",
                    "01828ddc-3600-4a41-8633-99b3a73a0eb3",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} path - The item path.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param {boolean} includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param {boolean} resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param {boolean} sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
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
        versionDescriptor?: GitInterfaces.GitVersionDescriptor,
        includeContent?: boolean,
        resolveLfs?: boolean,
        sanitize?: boolean
        ): Promise<GitInterfaces.GitItem> {
        if (path == null) {
            throw new TypeError('path can not be null or undefined');
        }

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
                includeContent: includeContent,
                resolveLfs: resolveLfs,
                sanitize: sanitize,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} path - The item path.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param {boolean} includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param {boolean} resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param {boolean} sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
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
        versionDescriptor?: GitInterfaces.GitVersionDescriptor,
        includeContent?: boolean,
        resolveLfs?: boolean,
        sanitize?: boolean
        ): Promise<NodeJS.ReadableStream> {
        if (path == null) {
            throw new TypeError('path can not be null or undefined');
        }

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
                includeContent: includeContent,
                resolveLfs: resolveLfs,
                sanitize: sanitize,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
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
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {boolean} includeLinks - Set to true to include links to items.  Default is false.
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param {boolean} zipForUnix - Set to true to keep the file permissions for unix (and POSIX) systems like executables and symlinks
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
        versionDescriptor?: GitInterfaces.GitVersionDescriptor,
        zipForUnix?: boolean
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
                zipForUnix: zipForUnix,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} path - The item path.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param {boolean} includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param {boolean} resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param {boolean} sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
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
        versionDescriptor?: GitInterfaces.GitVersionDescriptor,
        includeContent?: boolean,
        resolveLfs?: boolean,
        sanitize?: boolean
        ): Promise<NodeJS.ReadableStream> {
        if (path == null) {
            throw new TypeError('path can not be null or undefined');
        }

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
                includeContent: includeContent,
                resolveLfs: resolveLfs,
                sanitize: sanitize,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} path - The item path.
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - The path scope.  The default is null.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param {boolean} includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param {boolean} latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param {boolean} download - Set to true to download the response as a file.  Default is false.
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param {boolean} includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param {boolean} resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param {boolean} sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
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
        versionDescriptor?: GitInterfaces.GitVersionDescriptor,
        includeContent?: boolean,
        resolveLfs?: boolean,
        sanitize?: boolean
        ): Promise<NodeJS.ReadableStream> {
        if (path == null) {
            throw new TypeError('path can not be null or undefined');
        }

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
                includeContent: includeContent,
                resolveLfs: resolveLfs,
                sanitize: sanitize,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "fb93c0db-47ed-4a31-8c20-47552878fb44",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
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
     * @param {GitInterfaces.GitItemRequestData} requestData - Request data attributes: ItemDescriptors, IncludeContentMetadata, LatestProcessedChange, IncludeLinks. ItemDescriptors: Collection of items to fetch, including path, version, and recursion level. IncludeContentMetadata: Whether to include metadata for all items LatestProcessedChange: Whether to include shallow ref to commit that last changed each item. IncludeLinks: Whether to include the _links field on the shallow references.
     * @param {string} repositoryId - The name or ID of the repository
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
                    "7.1-preview.1",
                    "git",
                    "630fd2e4-fb88-4f85-ad21-13f3fd1fbca9",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Find the merge bases of two commits, optionally across forks. If otherRepositoryId is not specified, the merge bases will only be calculated within the context of the local repositoryNameOrId.
     * 
     * @param {string} repositoryNameOrId - ID or name of the local repository.
     * @param {string} commitId - First commit, usually the tip of the target branch of the potential merge.
     * @param {string} otherCommitId - Other commit, usually the tip of the source branch of the potential merge.
     * @param {string} project - Project ID or project name
     * @param {string} otherCollectionId - The collection ID where otherCommitId lives.
     * @param {string} otherRepositoryId - The repository ID where otherCommitId lives.
     */
    public async getMergeBases(
        repositoryNameOrId: string,
        commitId: string,
        otherCommitId: string,
        project?: string,
        otherCollectionId?: string,
        otherRepositoryId?: string
        ): Promise<GitInterfaces.GitCommitRef[]> {
        if (otherCommitId == null) {
            throw new TypeError('otherCommitId can not be null or undefined');
        }

        return new Promise<GitInterfaces.GitCommitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryNameOrId: repositoryNameOrId,
                commitId: commitId
            };

            let queryValues: any = {
                otherCommitId: otherCommitId,
                otherCollectionId: otherCollectionId,
                otherRepositoryId: otherRepositoryId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "7cf2abb6-c964-4f7e-9872-f78c66e72e9c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Request a git merge operation. Currently we support merging only 2 commits.
     * 
     * @param {GitInterfaces.GitMergeParameters} mergeParameters - Parents commitIds and merge commit messsage.
     * @param {string} project - Project ID or project name
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {boolean} includeLinks - True to include links
     */
    public async createMergeRequest(
        mergeParameters: GitInterfaces.GitMergeParameters,
        project: string,
        repositoryNameOrId: string,
        includeLinks?: boolean
        ): Promise<GitInterfaces.GitMerge> {

        return new Promise<GitInterfaces.GitMerge>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryNameOrId: repositoryNameOrId
            };

            let queryValues: any = {
                includeLinks: includeLinks,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "985f7ae9-844f-4906-9897-7ef41516c0e2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitMerge>;
                res = await this.rest.create<GitInterfaces.GitMerge>(url, mergeParameters, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitMerge,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a specific merge operation's details.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryNameOrId - The name or ID of the repository.
     * @param {number} mergeOperationId - OperationId of the merge request.
     * @param {boolean} includeLinks - True to include links
     */
    public async getMergeRequest(
        project: string,
        repositoryNameOrId: string,
        mergeOperationId: number,
        includeLinks?: boolean
        ): Promise<GitInterfaces.GitMerge> {

        return new Promise<GitInterfaces.GitMerge>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryNameOrId: repositoryNameOrId,
                mergeOperationId: mergeOperationId
            };

            let queryValues: any = {
                includeLinks: includeLinks,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "985f7ae9-844f-4906-9897-7ef41516c0e2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitMerge>;
                res = await this.rest.get<GitInterfaces.GitMerge>(url, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitMerge,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Attach a new file to a pull request.
     * 
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} fileName - The name of the file.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl!;
                
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
     * Delete a pull request attachment.
     * 
     * @param {string} fileName - The name of the attachment to delete.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get the file content of a pull request attachment.
     * 
     * @param {string} fileName - The name of the attachment.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a list of files attached to a given pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get the file content of a pull request attachment.
     * 
     * @param {string} fileName - The name of the attachment.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "965d9361-878b-413b-a494-45d5b5fd8ab7",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Add a like on a comment.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - The ID of the thread that contains the comment.
     * @param {number} commentId - The ID of the comment.
     * @param {string} project - Project ID or project name
     */
    public async createLike(
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
                    "7.1-preview.1",
                    "git",
                    "5f2e2851-1389-425b-a00b-fb2adb3ef31b",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, null, options);

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
     * Delete a like on a comment.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - The ID of the thread that contains the comment.
     * @param {number} commentId - The ID of the comment.
     * @param {string} project - Project ID or project name
     */
    public async deleteLike(
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
                    "7.1-preview.1",
                    "git",
                    "5f2e2851-1389-425b-a00b-fb2adb3ef31b",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get likes for a comment.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - The ID of the thread that contains the comment.
     * @param {number} commentId - The ID of the comment.
     * @param {string} project - Project ID or project name
     */
    public async getLikes(
        repositoryId: string,
        pullRequestId: number,
        threadId: number,
        commentId: number,
        project?: string
        ): Promise<VSSInterfaces.IdentityRef[]> {

        return new Promise<VSSInterfaces.IdentityRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                threadId: threadId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "5f2e2851-1389-425b-a00b-fb2adb3ef31b",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.IdentityRef[]>;
                res = await this.rest.get<VSSInterfaces.IdentityRef[]>(url, options);

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
     * Get the commits for the specified iteration of a pull request.
     * 
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the iteration from which to get the commits.
     * @param {string} project - Project ID or project name
     * @param {number} top - Maximum number of commits to return. The maximum number of commits that can be returned per batch is 500.
     * @param {number} skip - Number of commits to skip.
     */
    public async getPullRequestIterationCommits(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string,
        top?: number,
        skip?: number
        ): Promise<GitInterfaces.GitCommitRef[]> {

        return new Promise<GitInterfaces.GitCommitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                iterationId: iterationId
            };

            let queryValues: any = {
                top: top,
                skip: skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "e7ea0883-095f-4926-b5fb-f24691c26fb9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get the commits for the specified pull request.
     * 
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "52823034-34a8-4576-922c-8d8b77e9e4c4",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "7.1-preview.1",
                    "git",
                    "d840fb74-bbef-42d3-b250-564604c054a4",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} repositoryId - The repository of the Pull Request.
     * @param {number} pullRequestId - The pull request ID.
     * @param {string} project - Project ID or project name
     * @param {number} skip - Conflicts to skip.
     * @param {number} top - Conflicts to return after skip.
     * @param {boolean} includeObsolete - Includes obsolete conflicts.
     * @param {boolean} excludeResolved - Excludes conflicts already resolved.
     * @param {boolean} onlyResolved - Returns only the conflicts that are resolved.
     */
    public async getPullRequestConflicts(
        repositoryId: string,
        pullRequestId: number,
        project?: string,
        skip?: number,
        top?: number,
        includeObsolete?: boolean,
        excludeResolved?: boolean,
        onlyResolved?: boolean
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
                excludeResolved: excludeResolved,
                onlyResolved: onlyResolved,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "d840fb74-bbef-42d3-b250-564604c054a4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
                    "7.1-preview.1",
                    "git",
                    "d840fb74-bbef-42d3-b250-564604c054a4",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Update multiple merge conflict resolutions
     * 
     * @param {GitInterfaces.GitConflict[]} conflictUpdates
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     */
    public async updatePullRequestConflicts(
        conflictUpdates: GitInterfaces.GitConflict[],
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Promise<GitInterfaces.GitConflictUpdateResult[]> {

        return new Promise<GitInterfaces.GitConflictUpdateResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "d840fb74-bbef-42d3-b250-564604c054a4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitConflictUpdateResult[]>;
                res = await this.rest.update<GitInterfaces.GitConflictUpdateResult[]>(url, conflictUpdates, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitConflictUpdateResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve the changes made in a pull request between two iterations.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration. <br /> Iteration one is the head of the source branch at the time the pull request is created and subsequent iterations are created when there are pushes to the source branch. Allowed values are between 1 and the maximum iteration on this pull request.
     * @param {string} project - Project ID or project name
     * @param {number} top - Optional. The number of changes to retrieve.  The default value is 100 and the maximum value is 2000.
     * @param {number} skip - Optional. The number of changes to ignore.  For example, to retrieve changes 101-150, set top 50 and skip to 100.
     * @param {number} compareTo - ID of the pull request iteration to compare against.  The default value is zero which indicates the comparison is made against the common commit between the source and target branches
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
                    "7.1-preview.1",
                    "git",
                    "4216bdcf-b6b1-4d59-8b82-c34cc183fc8b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Get the specified iteration for a pull request.
     * 
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration to return.
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
                    "7.1-preview.2",
                    "git",
                    "d43911ee-6958-46b0-a42b-8445b8a0d004",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get the list of iterations for the specified pull request.
     * 
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeCommits - If true, include the commits associated with each iteration in the response.
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
                    "7.1-preview.2",
                    "git",
                    "d43911ee-6958-46b0-a42b-8445b8a0d004",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Create a pull request status on the iteration. This operation will have the same result as Create status on pull request with specified iteration ID in the request body.
     * 
     * @param {GitInterfaces.GitPullRequestStatus} status - Pull request status to create.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
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
                    "7.1-preview.1",
                    "git",
                    "75cf11c5-979f-4038-a76e-058a06adf2bf",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Delete pull request iteration status.
     * 
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
     * @param {number} statusId - ID of the pull request status.
     * @param {string} project - Project ID or project name
     */
    public async deletePullRequestIterationStatus(
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        statusId: number,
        project?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                iterationId: iterationId,
                statusId: statusId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "75cf11c5-979f-4038-a76e-058a06adf2bf",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get the specific pull request iteration status by ID. The status ID is unique within the pull request across all iterations.
     * 
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
     * @param {number} statusId - ID of the pull request status.
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
                    "7.1-preview.1",
                    "git",
                    "75cf11c5-979f-4038-a76e-058a06adf2bf",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
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
                    "7.1-preview.1",
                    "git",
                    "75cf11c5-979f-4038-a76e-058a06adf2bf",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Update pull request iteration statuses collection. The only supported operation type is `remove`.
     * 
     * @param {VSSInterfaces.JsonPatchDocument} patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} iterationId - ID of the pull request iteration.
     * @param {string} project - Project ID or project name
     */
    public async updatePullRequestIterationStatuses(
        customHeaders: any,
        patchDocument: VSSInterfaces.JsonPatchDocument,
        repositoryId: string,
        pullRequestId: number,
        iterationId: number,
        project?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                iterationId: iterationId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "75cf11c5-979f-4038-a76e-058a06adf2bf",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, patchDocument, options);

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
     * Create a label for a specified pull request. The only required field is the name of the new label.
     * 
     * @param {TfsCoreInterfaces.WebApiCreateTagRequestData} label - Label to assign to the pull request.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project ID or project name.
     */
    public async createPullRequestLabel(
        label: TfsCoreInterfaces.WebApiCreateTagRequestData,
        repositoryId: string,
        pullRequestId: number,
        project?: string,
        projectId?: string
        ): Promise<TfsCoreInterfaces.WebApiTagDefinition> {

        return new Promise<TfsCoreInterfaces.WebApiTagDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            let queryValues: any = {
                projectId: projectId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "f22387e3-984e-4c52-9c6d-fbb8f14c812d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfsCoreInterfaces.WebApiTagDefinition>;
                res = await this.rest.create<TfsCoreInterfaces.WebApiTagDefinition>(url, label, options);

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
     * Removes a label from the set of those assigned to the pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} labelIdOrName - The name or ID of the label requested.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project ID or project name.
     */
    public async deletePullRequestLabels(
        repositoryId: string,
        pullRequestId: number,
        labelIdOrName: string,
        project?: string,
        projectId?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                labelIdOrName: labelIdOrName
            };

            let queryValues: any = {
                projectId: projectId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "f22387e3-984e-4c52-9c6d-fbb8f14c812d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Retrieves a single label that has been assigned to a pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} labelIdOrName - The name or ID of the label requested.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project ID or project name.
     */
    public async getPullRequestLabel(
        repositoryId: string,
        pullRequestId: number,
        labelIdOrName: string,
        project?: string,
        projectId?: string
        ): Promise<TfsCoreInterfaces.WebApiTagDefinition> {

        return new Promise<TfsCoreInterfaces.WebApiTagDefinition>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                labelIdOrName: labelIdOrName
            };

            let queryValues: any = {
                projectId: projectId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "f22387e3-984e-4c52-9c6d-fbb8f14c812d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfsCoreInterfaces.WebApiTagDefinition>;
                res = await this.rest.get<TfsCoreInterfaces.WebApiTagDefinition>(url, options);

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
     * Get all the labels assigned to a pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project ID or project name.
     */
    public async getPullRequestLabels(
        repositoryId: string,
        pullRequestId: number,
        project?: string,
        projectId?: string
        ): Promise<TfsCoreInterfaces.WebApiTagDefinition[]> {

        return new Promise<TfsCoreInterfaces.WebApiTagDefinition[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            let queryValues: any = {
                projectId: projectId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "f22387e3-984e-4c52-9c6d-fbb8f14c812d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfsCoreInterfaces.WebApiTagDefinition[]>;
                res = await this.rest.get<TfsCoreInterfaces.WebApiTagDefinition[]>(url, options);

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
     * Get external properties of the pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestProperties(
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "48a52185-5b9e-4736-9dc1-bb1e2feac80b",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<any>;
                res = await this.rest.get<any>(url, options);

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
     * Create or update pull request external properties. The patch operation can be `add`, `replace` or `remove`. For `add` operation, the path can be empty. If the path is empty, the value must be a list of key value pairs. For `replace` operation, the path cannot be empty. If the path does not exist, the property will be added to the collection. For `remove` operation, the path cannot be empty. If the path does not exist, no action will be performed.
     * 
     * @param {VSSInterfaces.JsonPatchDocument} patchDocument - Properties to add, replace or remove in JSON Patch format.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     */
    public async updatePullRequestProperties(
        customHeaders: any,
        patchDocument: VSSInterfaces.JsonPatchDocument,
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "48a52185-5b9e-4736-9dc1-bb1e2feac80b",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<any>;
                res = await this.rest.update<any>(url, patchDocument, options);

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
     * This API is used to find what pull requests are related to a given commit.  It can be used to either find the pull request that created a particular merge commit or it can be used to find all pull requests that have ever merged a particular commit.  The input is a list of queries which each contain a list of commits. For each commit that you search against, you will get back a dictionary of commit -> pull requests.
     * 
     * @param {GitInterfaces.GitPullRequestQuery} queries - The list of queries to perform.
     * @param {string} repositoryId - ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "b3a6eebe-9cf0-49ea-b6cb-1a4c5f5007b0",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Add a reviewer to a pull request or cast a vote.
     * 
     * @param {GitInterfaces.IdentityRefWithVote} reviewer - Reviewer's vote.<br />If the reviewer's ID is included here, it must match the reviewerID parameter.<br />Reviewers can set their own vote with this method.  When adding other reviewers, vote must be set to zero.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} reviewerId - ID of the reviewer.
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
                    "7.1-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Add reviewers to a pull request.
     * 
     * @param {VSSInterfaces.IdentityRef[]} reviewers - Reviewers to add to the pull request.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Add an unmaterialized identity to the reviewers of a pull request.
     * 
     * @param {GitInterfaces.IdentityRefWithVote} reviewer - Reviewer to add to the pull request.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     */
    public async createUnmaterializedPullRequestReviewer(
        reviewer: GitInterfaces.IdentityRefWithVote,
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Promise<GitInterfaces.IdentityRefWithVote> {

        return new Promise<GitInterfaces.IdentityRefWithVote>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Remove a reviewer from a pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} reviewerId - ID of the reviewer to remove.
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
                    "7.1-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve information about a particular reviewer on a pull request
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} reviewerId - ID of the reviewer.
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
                    "7.1-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve the reviewers for a pull request
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Edit a reviewer entry. These fields are patchable: isFlagged, hasDeclined
     * 
     * @param {GitInterfaces.IdentityRefWithVote} reviewer - Reviewer data.<br />If the reviewer's ID is included here, it must match the reviewerID parameter.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} reviewerId - ID of the reviewer.
     * @param {string} project - Project ID or project name
     */
    public async updatePullRequestReviewer(
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
                    "7.1-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.IdentityRefWithVote>;
                res = await this.rest.update<GitInterfaces.IdentityRefWithVote>(url, reviewer, options);

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
     * Reset the votes of multiple reviewers on a pull request.  NOTE: This endpoint only supports updating votes, but does not support updating required reviewers (use policy) or display names.
     * 
     * @param {GitInterfaces.IdentityRefWithVote[]} patchVotes - IDs of the reviewers whose votes will be reset to zero
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request
     * @param {string} project - Project ID or project name
     */
    public async updatePullRequestReviewers(
        patchVotes: GitInterfaces.IdentityRefWithVote[],
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
                    "7.1-preview.1",
                    "git",
                    "4b6702c7-aa35-4b89-9c96-b9abf6d3e540",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, patchVotes, options);

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
     * Retrieve a pull request.
     * 
     * @param {number} pullRequestId - The ID of the pull request to retrieve.
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestById(
        pullRequestId: number,
        project?: string
        ): Promise<GitInterfaces.GitPullRequest> {

        return new Promise<GitInterfaces.GitPullRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "01a46dea-7d46-4d40-bc84-319e7c260d99",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve all pull requests matching a specified criteria.
     * 
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitPullRequestSearchCriteria} searchCriteria - Pull requests will be returned that match this search criteria.
     * @param {number} maxCommentLength - Not used.
     * @param {number} skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param {number} top - The number of pull requests to retrieve.
     */
    public async getPullRequestsByProject(
        project: string,
        searchCriteria: GitInterfaces.GitPullRequestSearchCriteria,
        maxCommentLength?: number,
        skip?: number,
        top?: number
        ): Promise<GitInterfaces.GitPullRequest[]> {
        if (searchCriteria == null) {
            throw new TypeError('searchCriteria can not be null or undefined');
        }

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
                    "7.1-preview.1",
                    "git",
                    "a5d28130-9cd2-40fa-9f08-902e7daa9efb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Create a pull request.
     * 
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToCreate - The pull request to create.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {string} project - Project ID or project name
     * @param {boolean} supportsIterations - If true, subsequent pushes to the pull request will be individually reviewable. Set this to false for large pull requests for performance reasons if this functionality is not needed.
     */
    public async createPullRequest(
        gitPullRequestToCreate: GitInterfaces.GitPullRequest,
        repositoryId: string,
        project?: string,
        supportsIterations?: boolean
        ): Promise<GitInterfaces.GitPullRequest> {

        return new Promise<GitInterfaces.GitPullRequest>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                supportsIterations: supportsIterations,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "9946fd70-0d40-406e-b686-b4744cbbcc37",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve a pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - The ID of the pull request to retrieve.
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength - Not used.
     * @param {number} skip - Not used.
     * @param {number} top - Not used.
     * @param {boolean} includeCommits - If true, the pull request will be returned with the associated commits.
     * @param {boolean} includeWorkItemRefs - If true, the pull request will be returned with the associated work item references.
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
                    "7.1-preview.1",
                    "git",
                    "9946fd70-0d40-406e-b686-b4744cbbcc37",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve all pull requests matching a specified criteria.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {GitInterfaces.GitPullRequestSearchCriteria} searchCriteria - Pull requests will be returned that match this search criteria.
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength - Not used.
     * @param {number} skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param {number} top - The number of pull requests to retrieve.
     */
    public async getPullRequests(
        repositoryId: string,
        searchCriteria: GitInterfaces.GitPullRequestSearchCriteria,
        project?: string,
        maxCommentLength?: number,
        skip?: number,
        top?: number
        ): Promise<GitInterfaces.GitPullRequest[]> {
        if (searchCriteria == null) {
            throw new TypeError('searchCriteria can not be null or undefined');
        }

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
                    "7.1-preview.1",
                    "git",
                    "9946fd70-0d40-406e-b686-b4744cbbcc37",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Update a pull request
     * 
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToUpdate - The pull request content that should be updated.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request to update.
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
                    "7.1-preview.1",
                    "git",
                    "9946fd70-0d40-406e-b686-b4744cbbcc37",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Sends an e-mail notification about a specific pull request to a set of recipients
     * 
     * @param {GitInterfaces.ShareNotificationContext} userMessage
     * @param {string} repositoryId - ID of the git repository.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "696f3a82-47c9-487f-9117-b9d00972ca84",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Create a pull request status.
     * 
     * @param {GitInterfaces.GitPullRequestStatus} status - Pull request status to create.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Delete pull request status.
     * 
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} statusId - ID of the pull request status.
     * @param {string} project - Project ID or project name
     */
    public async deletePullRequestStatus(
        repositoryId: string,
        pullRequestId: number,
        statusId: number,
        project?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId,
                statusId: statusId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get the specific pull request status by ID. The status ID is unique within the pull request across all iterations.
     * 
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} statusId - ID of the pull request status.
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
                    "7.1-preview.1",
                    "git",
                    "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Update pull request statuses collection. The only supported operation type is `remove`.
     * 
     * @param {VSSInterfaces.JsonPatchDocument} patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
     * @param {string} repositoryId - The repository ID of the pull request’s target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     */
    public async updatePullRequestStatuses(
        customHeaders: any,
        patchDocument: VSSInterfaces.JsonPatchDocument,
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

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "b5f6bb4f-8d1e-4d79-8d11-4c9172c99c35",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<void>;
                res = await this.rest.update<void>(url, patchDocument, options);

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
     * Create a comment on a specific thread in a pull request (up to 500 comments can be created per thread).
     * 
     * @param {GitInterfaces.Comment} comment - The comment to create. Comments can be up to 150,000 characters.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread that the desired comment is in.
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
                    "7.1-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Delete a comment associated with a specific thread in a pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread that the desired comment is in.
     * @param {number} commentId - ID of the comment.
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
                    "7.1-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve a comment associated with a specific thread in a pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread that the desired comment is in.
     * @param {number} commentId - ID of the comment.
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
                    "7.1-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve all comments associated with a specific thread in a pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread.
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
                    "7.1-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Update a comment associated with a specific thread in a pull request.
     * 
     * @param {GitInterfaces.Comment} comment - The comment content that should be updated. Comments can be up to 150,000 characters.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread that the desired comment is in.
     * @param {number} commentId - ID of the comment to update.
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
                    "7.1-preview.1",
                    "git",
                    "965a3ec7-5ed8-455a-bdcb-835a5ea7fe7b",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Create a thread in a pull request.
     * 
     * @param {GitInterfaces.GitPullRequestCommentThread} commentThread - The thread to create. Thread must contain at least one comment.
     * @param {string} repositoryId - Repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
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
                    "7.1-preview.1",
                    "git",
                    "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve a thread in a pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread.
     * @param {string} project - Project ID or project name
     * @param {number} iteration - If specified, thread position will be tracked using this iteration as the right side of the diff.
     * @param {number} baseIteration - If specified, thread position will be tracked using this iteration as the left side of the diff.
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
                    "7.1-preview.1",
                    "git",
                    "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve all threads in a pull request.
     * 
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     * @param {number} iteration - If specified, thread positions will be tracked using this iteration as the right side of the diff.
     * @param {number} baseIteration - If specified, thread positions will be tracked using this iteration as the left side of the diff.
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
                    "7.1-preview.1",
                    "git",
                    "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Update a thread in a pull request.
     * 
     * @param {GitInterfaces.GitPullRequestCommentThread} commentThread - The thread content that should be updated.
     * @param {string} repositoryId - The repository ID of the pull request's target branch.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {number} threadId - ID of the thread to update.
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
                    "7.1-preview.1",
                    "git",
                    "ab6e2e5d-a0b7-4153-b64a-a4efe0d49449",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve a list of work items associated with a pull request.
     * 
     * @param {string} repositoryId - ID or name of the repository.
     * @param {number} pullRequestId - ID of the pull request.
     * @param {string} project - Project ID or project name
     */
    public async getPullRequestWorkItemRefs(
        repositoryId: string,
        pullRequestId: number,
        project?: string
        ): Promise<VSSInterfaces.ResourceRef[]> {

        return new Promise<VSSInterfaces.ResourceRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                pullRequestId: pullRequestId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "0a637fcc-5370-4ce8-b0e8-98091f5f9482",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.ResourceRef[]>;
                res = await this.rest.get<VSSInterfaces.ResourceRef[]>(url, options);

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
     * @param {string} repositoryId - The name or ID of the repository.
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
                    "7.1-preview.2",
                    "git",
                    "ea98d07b-3c87-4971-8ede-a613694ffb55",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieves a particular push.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {number} pushId - ID of the push.
     * @param {string} project - Project ID or project name
     * @param {number} includeCommits - The number of commits to include in the result.
     * @param {boolean} includeRefUpdates - If true, include the list of refs that were updated by the push.
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
                    "7.1-preview.2",
                    "git",
                    "ea98d07b-3c87-4971-8ede-a613694ffb55",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {number} skip - Number of pushes to skip.
     * @param {number} top - Number of pushes to return.
     * @param {GitInterfaces.GitPushSearchCriteria} searchCriteria - Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
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
                    "7.1-preview.2",
                    "git",
                    "ea98d07b-3c87-4971-8ede-a613694ffb55",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Destroy (hard delete) a soft-deleted Git repository.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The ID of the repository.
     */
    public async deleteRepositoryFromRecycleBin(
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
                    "7.1-preview.1",
                    "git",
                    "a663da97-81db-4eb3-8b83-287670f63073",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve soft-deleted git repositories from the recycle bin.
     * 
     * @param {string} project - Project ID or project name
     */
    public async getRecycleBinRepositories(
        project: string
        ): Promise<GitInterfaces.GitDeletedRepository[]> {

        return new Promise<GitInterfaces.GitDeletedRepository[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "a663da97-81db-4eb3-8b83-287670f63073",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Recover a soft-deleted Git repository. Recently deleted repositories go into a soft-delete state for a period of time before they are hard deleted and become unrecoverable.
     * 
     * @param {GitInterfaces.GitRecycleBinRepositoryDetails} repositoryDetails
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - The ID of the repository.
     */
    public async restoreRepositoryFromRecycleBin(
        repositoryDetails: GitInterfaces.GitRecycleBinRepositoryDetails,
        project: string,
        repositoryId: string
        ): Promise<GitInterfaces.GitRepository> {

        return new Promise<GitInterfaces.GitRepository>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "a663da97-81db-4eb3-8b83-287670f63073",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository>;
                res = await this.rest.update<GitInterfaces.GitRepository>(url, repositoryDetails, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitRepository,
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
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {string} filter - [optional] A filter to apply to the refs (starts with).
     * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     * @param {boolean} includeStatuses - [optional] Includes up to the first 1000 commit statuses for each ref. The default value is false.
     * @param {boolean} includeMyBranches - [optional] Includes only branches that the user owns, the branches the user favorites, and the default branch. The default value is false. Cannot be combined with the filter parameter.
     * @param {boolean} latestStatusesOnly - [optional] True to include only the tip commit status for each ref. This option requires `includeStatuses` to be true. The default value is false.
     * @param {boolean} peelTags - [optional] Annotated tags will populate the PeeledObjectId property. default is false.
     * @param {string} filterContains - [optional] A filter to apply to the refs (contains).
     */
    public async getRefs(
        repositoryId: string,
        project?: string,
        filter?: string,
        includeLinks?: boolean,
        includeStatuses?: boolean,
        includeMyBranches?: boolean,
        latestStatusesOnly?: boolean,
        peelTags?: boolean,
        filterContains?: string
        ): Promise<GitInterfaces.GitRef[]> {

        return new Promise<GitInterfaces.GitRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                filter: filter,
                includeLinks: includeLinks,
                includeStatuses: includeStatuses,
                includeMyBranches: includeMyBranches,
                latestStatusesOnly: latestStatusesOnly,
                peelTags: peelTags,
                filterContains: filterContains,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "2d874a60-a811-4f62-9c9f-963a6ea0a55b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Lock or Unlock a branch.
     * 
     * @param {GitInterfaces.GitRefUpdate} newRefInfo - The ref update action (lock/unlock) to perform
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} filter - The name of the branch to lock/unlock
     * @param {string} project - Project ID or project name
     * @param {string} projectId - ID or name of the team project. Optional if specifying an ID for repository.
     */
    public async updateRef(
        newRefInfo: GitInterfaces.GitRefUpdate,
        repositoryId: string,
        filter: string,
        project?: string,
        projectId?: string
        ): Promise<GitInterfaces.GitRef> {
        if (filter == null) {
            throw new TypeError('filter can not be null or undefined');
        }

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
                    "7.1-preview.1",
                    "git",
                    "2d874a60-a811-4f62-9c9f-963a6ea0a55b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Creating, updating, or deleting refs(branches).
     * 
     * @param {GitInterfaces.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - ID or name of the team project. Optional if specifying an ID for repository.
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
                    "7.1-preview.1",
                    "git",
                    "2d874a60-a811-4f62-9c9f-963a6ea0a55b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {GitInterfaces.GitRefFavorite} favorite - The ref favorite to create.
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
                    "7.1-preview.1",
                    "git",
                    "876f70af-5792-485a-a1c7-d0a7b2f42bbb",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Deletes the refs favorite specified
     * 
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId - The Id of the ref favorite to delete.
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
                    "7.1-preview.1",
                    "git",
                    "876f70af-5792-485a-a1c7-d0a7b2f42bbb",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Gets the refs favorite for a favorite Id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} favoriteId - The Id of the requested ref favorite.
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
                    "7.1-preview.1",
                    "git",
                    "876f70af-5792-485a-a1c7-d0a7b2f42bbb",
                    routeValues);

                let url: string = verData.requestUrl!;
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
                    "7.1-preview.1",
                    "git",
                    "876f70af-5792-485a-a1c7-d0a7b2f42bbb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Create a git repository in a team project.
     * 
     * @param {GitInterfaces.GitRepositoryCreateOptions} gitRepositoryToCreate - Specify the repo name, team project and/or parent repository. Team project information can be omitted from gitRepositoryToCreate if the request is project-scoped (i.e., includes project Id).
     * @param {string} project - Project ID or project name
     * @param {string} sourceRef - [optional] Specify the source refs to use while creating a fork repo
     */
    public async createRepository(
        gitRepositoryToCreate: GitInterfaces.GitRepositoryCreateOptions,
        project?: string,
        sourceRef?: string
        ): Promise<GitInterfaces.GitRepository> {

        return new Promise<GitInterfaces.GitRepository>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                sourceRef: sourceRef,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository>;
                res = await this.rest.create<GitInterfaces.GitRepository>(url, gitRepositoryToCreate, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitRepository,
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
     * @param {string} repositoryId - The ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * @param {boolean} includeLinks - [optional] True to include reference links. The default value is false.
     * @param {boolean} includeAllUrls - [optional] True to include all remote URLs. The default value is false.
     * @param {boolean} includeHidden - [optional] True to include hidden repositories. The default value is false.
     */
    public async getRepositories(
        project?: string,
        includeLinks?: boolean,
        includeAllUrls?: boolean,
        includeHidden?: boolean
        ): Promise<GitInterfaces.GitRepository[]> {

        return new Promise<GitInterfaces.GitRepository[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                includeLinks: includeLinks,
                includeAllUrls: includeAllUrls,
                includeHidden: includeHidden,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository[]>;
                res = await this.rest.get<GitInterfaces.GitRepository[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitRepository,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a git repository.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository>;
                res = await this.rest.get<GitInterfaces.GitRepository>(url, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitRepository,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a git repository.
     * 
     * @param {string} repositoryId - The name or ID of the repository.
     * @param {boolean} includeParent - True to include parent repository. Only available in authenticated calls.
     * @param {string} project - Project ID or project name
     */
    public async getRepositoryWithParent(
        repositoryId: string,
        includeParent: boolean,
        project?: string
        ): Promise<GitInterfaces.GitRepository> {
        if (includeParent == null) {
            throw new TypeError('includeParent can not be null or undefined');
        }

        return new Promise<GitInterfaces.GitRepository>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId
            };

            let queryValues: any = {
                includeParent: includeParent,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository>;
                res = await this.rest.get<GitInterfaces.GitRepository>(url, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitRepository,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Updates the Git repository with either a new repo name or a new default branch.
     * 
     * @param {GitInterfaces.GitRepository} newRepositoryInfo - Specify a new repo name or a new default branch of the repository
     * @param {string} repositoryId - The ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "225f7195-f9c7-4d14-ab28-a83f7ff77e1f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitRepository>;
                res = await this.rest.update<GitInterfaces.GitRepository>(url, newRepositoryInfo, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitRepository,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve one conflict for a revert by ID
     * 
     * @param {string} repositoryId
     * @param {number} revertId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     */
    public async getRevertConflict(
        repositoryId: string,
        revertId: number,
        conflictId: number,
        project?: string
        ): Promise<GitInterfaces.GitConflict> {

        return new Promise<GitInterfaces.GitConflict>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                revertId: revertId,
                conflictId: conflictId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "10d7ae6d-1050-446d-852a-bd5d99f834bf",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve all conflicts for a revert
     * 
     * @param {string} repositoryId
     * @param {number} revertId
     * @param {string} project - Project ID or project name
     * @param {string} continuationToken
     * @param {number} top
     * @param {boolean} excludeResolved
     * @param {boolean} onlyResolved
     * @param {boolean} includeObsolete
     */
    public async getRevertConflicts(
        repositoryId: string,
        revertId: number,
        project?: string,
        continuationToken?: string,
        top?: number,
        excludeResolved?: boolean,
        onlyResolved?: boolean,
        includeObsolete?: boolean
        ): Promise<GitInterfaces.GitConflict[]> {

        return new Promise<GitInterfaces.GitConflict[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                revertId: revertId
            };

            let queryValues: any = {
                continuationToken: continuationToken,
                '$top': top,
                excludeResolved: excludeResolved,
                onlyResolved: onlyResolved,
                includeObsolete: includeObsolete,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "10d7ae6d-1050-446d-852a-bd5d99f834bf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * @param {number} revertId
     * @param {number} conflictId
     * @param {string} project - Project ID or project name
     */
    public async updateRevertConflict(
        conflict: GitInterfaces.GitConflict,
        repositoryId: string,
        revertId: number,
        conflictId: number,
        project?: string
        ): Promise<GitInterfaces.GitConflict> {

        return new Promise<GitInterfaces.GitConflict>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                revertId: revertId,
                conflictId: conflictId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "10d7ae6d-1050-446d-852a-bd5d99f834bf",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Update multiple merge conflict resolutions
     * 
     * @param {GitInterfaces.GitConflict[]} conflictUpdates
     * @param {string} repositoryId
     * @param {number} revertId
     * @param {string} project - Project ID or project name
     */
    public async updateRevertConflicts(
        conflictUpdates: GitInterfaces.GitConflict[],
        repositoryId: string,
        revertId: number,
        project?: string
        ): Promise<GitInterfaces.GitConflictUpdateResult[]> {

        return new Promise<GitInterfaces.GitConflictUpdateResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                repositoryId: repositoryId,
                revertId: revertId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "git",
                    "10d7ae6d-1050-446d-852a-bd5d99f834bf",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<GitInterfaces.GitConflictUpdateResult[]>;
                res = await this.rest.update<GitInterfaces.GitConflictUpdateResult[]>(url, conflictUpdates, options);

                let ret = this.formatResponse(res.result,
                                              GitInterfaces.TypeInfo.GitConflictUpdateResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Starts the operation to create a new branch which reverts changes introduced by either a specific commit or commits that are associated to a pull request.
     * 
     * @param {GitInterfaces.GitAsyncRefOperationParameters} revertToCreate
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "bc866058-5449-4715-9cf1-a510b6ff193c",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve information about a revert operation by revert Id.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} revertId - ID of the revert operation.
     * @param {string} repositoryId - ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "bc866058-5449-4715-9cf1-a510b6ff193c",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve information about a revert operation for a specific branch.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} repositoryId - ID of the repository.
     * @param {string} refName - The GitAsyncRefOperationParameters generatedRefName used for the revert operation.
     */
    public async getRevertForRefName(
        project: string,
        repositoryId: string,
        refName: string
        ): Promise<GitInterfaces.GitRevert> {
        if (refName == null) {
            throw new TypeError('refName can not be null or undefined');
        }

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
                    "7.1-preview.1",
                    "git",
                    "bc866058-5449-4715-9cf1-a510b6ff193c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Create Git commit status.
     * 
     * @param {GitInterfaces.GitStatus} gitCommitStatusToCreate - Git commit status object to create.
     * @param {string} commitId - ID of the Git commit.
     * @param {string} repositoryId - ID of the repository.
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
                    "7.1-preview.1",
                    "git",
                    "428dd4fb-fda5-4722-af02-9313b80305da",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * Get statuses associated with the Git commit.
     * 
     * @param {string} commitId - ID of the Git commit.
     * @param {string} repositoryId - ID of the repository.
     * @param {string} project - Project ID or project name
     * @param {number} top - Optional. The number of statuses to retrieve. Default is 1000.
     * @param {number} skip - Optional. The number of statuses to ignore. Default is 0. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param {boolean} latestOnly - The flag indicates whether to get only latest statuses grouped by `Context.Name` and `Context.Genre`.
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
                    "7.1-preview.1",
                    "git",
                    "428dd4fb-fda5-4722-af02-9313b80305da",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * Retrieve a pull request suggestion for a particular repository or team project.
     * 
     * @param {string} repositoryId - ID of the git repository.
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
                    "7.1-preview.1",
                    "git",
                    "9393b4fb-4445-4919-972b-9ad16f442d83",
                    routeValues);

                let url: string = verData.requestUrl!;
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
     * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
     * 
     * @param {string} repositoryId - Repository Id.
     * @param {string} sha1 - SHA1 hash of the tree object.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project Id.
     * @param {boolean} recursive - Search recursively. Include trees underneath this tree. Default is false.
     * @param {string} fileName - Name to use if a .zip file is returned. Default is the object ID.
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
                    "7.1-preview.1",
                    "git",
                    "729f6437-6f92-44ec-8bee-273a7111063c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
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
     * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
     * 
     * @param {string} repositoryId - Repository Id.
     * @param {string} sha1 - SHA1 hash of the tree object.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - Project Id.
     * @param {boolean} recursive - Search recursively. Include trees underneath this tree. Default is false.
     * @param {string} fileName - Name to use if a .zip file is returned. Default is the object ID.
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
                    "7.1-preview.1",
                    "git",
                    "729f6437-6f92-44ec-8bee-273a7111063c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
