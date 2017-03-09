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
import CodeReviewInterfaces = require("./interfaces/CodeReviewInterfaces");
import DiscussionInterfaces = require("./interfaces/DiscussionInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ICodeReviewApi extends basem.ClientApiBase {
    addAttachment(attachment: CodeReviewInterfaces.Attachment, project: string, reviewId: number): Promise<CodeReviewInterfaces.Attachment>;
    deleteAttachment(project: string, reviewId: number, attachmentId: number): Promise<void>;
    getAttachment(project: string, reviewId: number, attachmentId: number): Promise<CodeReviewInterfaces.Attachment>;
    getAttachments(project: string, reviewId: number, modifiedSince?: Date): Promise<CodeReviewInterfaces.Attachment[]>;
    getContent(project: string, reviewId: number, iterationId: number, changeId: number, fileTarget: string): Promise<NodeJS.ReadableStream>;
    createComment(newComment: DiscussionInterfaces.DiscussionComment, project: string, reviewId: number, threadId: number): Promise<DiscussionInterfaces.DiscussionComment>;
    deleteComment(project: string, reviewId: number, threadId: number, commentId: number): Promise<void>;
    getComment(project: string, reviewId: number, threadId: number, commentId: number): Promise<DiscussionInterfaces.DiscussionComment>;
    getComments(project: string, reviewId: number, threadId: number): Promise<DiscussionInterfaces.DiscussionComment[]>;
    updateComment(comment: DiscussionInterfaces.DiscussionComment, project: string, reviewId: number, threadId: number, commentId: number): Promise<DiscussionInterfaces.DiscussionComment>;
    downloadContent(project: string, reviewId: number, contentHash: string, downloadFileName?: string): Promise<NodeJS.ReadableStream>;
    uploadContent(customHeaders: any, contentStream: NodeJS.ReadableStream, project: string, reviewId: number, contentHash: string, fileType?: string): Promise<void>;
    createIteration(iteration: CodeReviewInterfaces.Iteration, project: string, reviewId: number): Promise<CodeReviewInterfaces.Iteration>;
    getIteration(project: string, reviewId: number, iterationId: number): Promise<CodeReviewInterfaces.Iteration>;
    getIterations(project: string, reviewId: number, includeUnpublished?: boolean): Promise<CodeReviewInterfaces.Iteration[]>;
    updateIteration(iteration: CodeReviewInterfaces.Iteration, project: string, reviewId: number, iterationId: number): Promise<CodeReviewInterfaces.Iteration>;
    createLike(users: VSSInterfaces.IdentityRef[], project: string, reviewId: number, threadId: number, commentId: number): Promise<VSSInterfaces.IdentityRef>;
    deleteLike(project: string, reviewId: number, threadId: number, commentId: number, userId: string): Promise<void>;
    getLikes(project: string, reviewId: number, threadId: number, commentId: number): Promise<VSSInterfaces.IdentityRef[]>;
    createOrUpdateIterationProperties(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, reviewId: number, iterationId: number): Promise<any>;
    getIterationProperties(project: string, reviewId: number, iterationId: number): Promise<any>;
    createOrUpdateReviewProperties(customHeaders: any, document: VSSInterfaces.JsonPatchDocument, project: string, reviewId: number): Promise<any>;
    getReviewProperties(project: string, reviewId: number): Promise<any>;
    addReviewers(reviewers: CodeReviewInterfaces.Reviewer[], project: string, reviewId: number): Promise<CodeReviewInterfaces.Reviewer[]>;
    deleteReviewer(project: string, reviewId: number, reviewerId: string): Promise<void>;
    getReviewers(project: string, reviewId: number): Promise<CodeReviewInterfaces.Reviewer[]>;
    replaceReviewer(reviewer: CodeReviewInterfaces.Reviewer, project: string, reviewId: number, reviewerId: string): Promise<CodeReviewInterfaces.Reviewer>;
    getReviews(searchCriteria: CodeReviewInterfaces.ReviewSearchCriteria, project?: string, top?: number, continuationToken?: string): Promise<CodeReviewInterfaces.Review[]>;
    createReview(review: CodeReviewInterfaces.Review, project: string): Promise<CodeReviewInterfaces.Review>;
    deleteReview(project: string, reviewId: number): Promise<void>;
    getReview(customHeaders: any, project: string, reviewId: number, includeAllProperties?: boolean, maxChangesCount?: number, ifModifiedSince?: Date): Promise<CodeReviewInterfaces.Review>;
    replaceReview(review: CodeReviewInterfaces.Review, project: string, reviewId: number): Promise<CodeReviewInterfaces.Review>;
    updateReview(review: CodeReviewInterfaces.Review, project: string, reviewId: number): Promise<CodeReviewInterfaces.Review>;
    getReviewsBatch(sourceArtifactIds: string[], project: string, includeDeleted?: boolean): Promise<CodeReviewInterfaces.Review[]>;
    createReviewSettings(reviewSettings: CodeReviewInterfaces.ReviewSettings, project: string): Promise<CodeReviewInterfaces.ReviewSettings>;
    getReviewSettings(project: string): Promise<CodeReviewInterfaces.ReviewSettings>;
    updateReviewSettings(reviewSettings: CodeReviewInterfaces.ReviewSettings, project: string): Promise<CodeReviewInterfaces.ReviewSettings>;
    shareReview(userMessage: CodeReviewInterfaces.NotificationContext, project: string, reviewId: number): Promise<void>;
    createIterationStatus(status: CodeReviewInterfaces.Status, project: string, reviewId: number, iterationId: number): Promise<CodeReviewInterfaces.Status>;
    getIterationStatus(project: string, reviewId: number, iterationId: number, statusId: number): Promise<CodeReviewInterfaces.Status>;
    getIterationStatuses(project: string, reviewId: number, iterationId: number): Promise<CodeReviewInterfaces.Status[]>;
    updateIterationStatus(status: CodeReviewInterfaces.Status, project: string, reviewId: number, iterationId: number, statusId: number): Promise<CodeReviewInterfaces.Status>;
    createReviewStatus(status: CodeReviewInterfaces.Status, project: string, reviewId: number): Promise<CodeReviewInterfaces.Status>;
    getReviewStatus(project: string, reviewId: number, statusId: number): Promise<CodeReviewInterfaces.Status>;
    getReviewStatuses(project: string, reviewId: number): Promise<CodeReviewInterfaces.Status[]>;
    updateReviewStatus(status: CodeReviewInterfaces.Status, project: string, reviewId: number, statusId: number): Promise<CodeReviewInterfaces.Status>;
    createThread(newThread: CodeReviewInterfaces.CommentThread, project: string, reviewId: number): Promise<CodeReviewInterfaces.CommentThread>;
    getThread(customHeaders: any, project: string, reviewId: number, threadId: number, trackingCriteria?: CodeReviewInterfaces.CommentTrackingCriteria, ifModifiedSince?: Date): Promise<CodeReviewInterfaces.CommentThread>;
    getThreads(project: string, reviewId: number, modifiedSince?: Date, trackingCriteria?: CodeReviewInterfaces.CommentTrackingCriteria): Promise<CodeReviewInterfaces.CommentThread[]>;
    updateThread(thread: CodeReviewInterfaces.CommentThread, project: string, reviewId: number, threadId: number): Promise<CodeReviewInterfaces.CommentThread>;
}

export class CodeReviewApi extends basem.ClientApiBase implements ICodeReviewApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-CodeReview-api');
    }

    /**
    * @param {CodeReviewInterfaces.Attachment} attachment
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async addAttachment(
        attachment: CodeReviewInterfaces.Attachment,
        project: string,
        reviewId: number
        ): Promise<CodeReviewInterfaces.Attachment> {

        return new Promise<CodeReviewInterfaces.Attachment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "9d61ac01-ead6-429f-bc4d-1c18882d27c4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Attachment>;
                res = await this.rest.create<CodeReviewInterfaces.Attachment>(url, attachment, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Attachment,
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
    * @param {number} reviewId
    * @param {number} attachmentId
    */
    public async deleteAttachment(
        project: string,
        reviewId: number,
        attachmentId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "9d61ac01-ead6-429f-bc4d-1c18882d27c4",
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
    * @param {number} reviewId
    * @param {number} attachmentId
    */
    public async getAttachment(
        project: string,
        reviewId: number,
        attachmentId: number
        ): Promise<CodeReviewInterfaces.Attachment> {

        return new Promise<CodeReviewInterfaces.Attachment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "9d61ac01-ead6-429f-bc4d-1c18882d27c4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Attachment>;
                res = await this.rest.get<CodeReviewInterfaces.Attachment>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Attachment,
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
    * @param {number} reviewId
    * @param {Date} modifiedSince
    */
    public async getAttachments(
        project: string,
        reviewId: number,
        modifiedSince?: Date
        ): Promise<CodeReviewInterfaces.Attachment[]> {

        return new Promise<CodeReviewInterfaces.Attachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            let queryValues: any = {
                modifiedSince: modifiedSince,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "9d61ac01-ead6-429f-bc4d-1c18882d27c4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Attachment[]>;
                res = await this.rest.get<CodeReviewInterfaces.Attachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Attachment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} iterationId
    * @param {number} changeId
    * @param {string} fileTarget
    */
    public async getContent(
        project: string,
        reviewId: number,
        iterationId: number,
        changeId: number,
        fileTarget: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                iterationId: iterationId,
                changeId: changeId,
                fileTarget: fileTarget
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "a4c0c4d0-b0ed-4a6f-8751-f32c7444580e",
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
    * Create a discussion comment. POST /_apis/CodeReview/reviews/{id}/Threads/{threadId}/comments
    * 
    * @param {DiscussionInterfaces.DiscussionComment} newComment
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    */
    public async createComment(
        newComment: DiscussionInterfaces.DiscussionComment,
        project: string,
        reviewId: number,
        threadId: number
        ): Promise<DiscussionInterfaces.DiscussionComment> {

        return new Promise<DiscussionInterfaces.DiscussionComment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "fac703b5-fb23-4abf-8d90-09de88cd1293",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionComment>;
                res = await this.rest.create<DiscussionInterfaces.DiscussionComment>(url, newComment, options);

                let ret = this.formatResponse(res.result,
                                              DiscussionInterfaces.TypeInfo.DiscussionComment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Soft delete a comment. Deleted(Withdrawn) comments are always returned. Use IsDeleted flag in each comment to detect if its a deleted comment, Delete /_apis/CodeReview/reviews/{id}/Threads/{threadId}/comments/{commentId}
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    * @param {number} commentId
    */
    public async deleteComment(
        project: string,
        reviewId: number,
        threadId: number,
        commentId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "fac703b5-fb23-4abf-8d90-09de88cd1293",
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
    * Get a comment for a review comment thread by id of a review based on commentId. GET /_apis/CodeReview/reviews/{id}/Threads/{threadId}/comments/{commentId}
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    * @param {number} commentId
    */
    public async getComment(
        project: string,
        reviewId: number,
        threadId: number,
        commentId: number
        ): Promise<DiscussionInterfaces.DiscussionComment> {

        return new Promise<DiscussionInterfaces.DiscussionComment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "fac703b5-fb23-4abf-8d90-09de88cd1293",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionComment>;
                res = await this.rest.get<DiscussionInterfaces.DiscussionComment>(url, options);

                let ret = this.formatResponse(res.result,
                                              DiscussionInterfaces.TypeInfo.DiscussionComment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Read all comments for a review comment thread by id for a review. GET /_apis/CodeReview/reviews/{id}/Threads/{threadId}/comments
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    */
    public async getComments(
        project: string,
        reviewId: number,
        threadId: number
        ): Promise<DiscussionInterfaces.DiscussionComment[]> {

        return new Promise<DiscussionInterfaces.DiscussionComment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "fac703b5-fb23-4abf-8d90-09de88cd1293",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionComment[]>;
                res = await this.rest.get<DiscussionInterfaces.DiscussionComment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              DiscussionInterfaces.TypeInfo.DiscussionComment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update a comment. Patch /_apis/CodeReview/reviews/{id}/Threads/{threadId}/comments/{commentId}
    * 
    * @param {DiscussionInterfaces.DiscussionComment} comment
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    * @param {number} commentId
    */
    public async updateComment(
        comment: DiscussionInterfaces.DiscussionComment,
        project: string,
        reviewId: number,
        threadId: number,
        commentId: number
        ): Promise<DiscussionInterfaces.DiscussionComment> {

        return new Promise<DiscussionInterfaces.DiscussionComment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "fac703b5-fb23-4abf-8d90-09de88cd1293",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionComment>;
                res = await this.rest.update<DiscussionInterfaces.DiscussionComment>(url, comment, options);

                let ret = this.formatResponse(res.result,
                                              DiscussionInterfaces.TypeInfo.DiscussionComment,
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
    * @param {number} reviewId
    * @param {string} contentHash
    * @param {string} downloadFileName
    */
    public async downloadContent(
        project: string,
        reviewId: number,
        contentHash: string,
        downloadFileName?: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            let queryValues: any = {
                contentHash: contentHash,
                downloadFileName: downloadFileName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "38f9ad45-10bc-4c0a-99ad-beaaa51ca027",
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
    * @param {NodeJS.ReadableStream} contentStream - Content to upload
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {string} contentHash
    * @param {string} fileType
    */
    public async uploadContent(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        project: string,
        reviewId: number,
        contentHash: string,
        fileType?: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            let queryValues: any = {
                contentHash: contentHash,
                fileType: fileType,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "38f9ad45-10bc-4c0a-99ad-beaaa51ca027",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.uploadStream<void>("POST", url, contentStream, options);

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
    * @param {CodeReviewInterfaces.Iteration} iteration
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async createIteration(
        iteration: CodeReviewInterfaces.Iteration,
        project: string,
        reviewId: number
        ): Promise<CodeReviewInterfaces.Iteration> {

        return new Promise<CodeReviewInterfaces.Iteration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "d2e77b94-a8c8-45e6-a163-7f1b4ae20eb9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Iteration>;
                res = await this.rest.create<CodeReviewInterfaces.Iteration>(url, iteration, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Iteration,
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
    * @param {number} reviewId
    * @param {number} iterationId
    */
    public async getIteration(
        project: string,
        reviewId: number,
        iterationId: number
        ): Promise<CodeReviewInterfaces.Iteration> {

        return new Promise<CodeReviewInterfaces.Iteration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "d2e77b94-a8c8-45e6-a163-7f1b4ae20eb9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Iteration>;
                res = await this.rest.get<CodeReviewInterfaces.Iteration>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Iteration,
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
    * @param {number} reviewId
    * @param {boolean} includeUnpublished
    */
    public async getIterations(
        project: string,
        reviewId: number,
        includeUnpublished?: boolean
        ): Promise<CodeReviewInterfaces.Iteration[]> {

        return new Promise<CodeReviewInterfaces.Iteration[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            let queryValues: any = {
                includeUnpublished: includeUnpublished,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "d2e77b94-a8c8-45e6-a163-7f1b4ae20eb9",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Iteration[]>;
                res = await this.rest.get<CodeReviewInterfaces.Iteration[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Iteration,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {CodeReviewInterfaces.Iteration} iteration
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} iterationId
    */
    public async updateIteration(
        iteration: CodeReviewInterfaces.Iteration,
        project: string,
        reviewId: number,
        iterationId: number
        ): Promise<CodeReviewInterfaces.Iteration> {

        return new Promise<CodeReviewInterfaces.Iteration>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "d2e77b94-a8c8-45e6-a163-7f1b4ae20eb9",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Iteration>;
                res = await this.rest.update<CodeReviewInterfaces.Iteration>(url, iteration, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Iteration,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Like a comment in a thread for a review. POST /_apis/CodeReview/reviews/{id}/threads/{id}/comments/{commentId}/likes
    * 
    * @param {VSSInterfaces.IdentityRef[]} users
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    * @param {number} commentId
    */
    public async createLike(
        users: VSSInterfaces.IdentityRef[],
        project: string,
        reviewId: number,
        threadId: number,
        commentId: number
        ): Promise<VSSInterfaces.IdentityRef> {

        return new Promise<VSSInterfaces.IdentityRef>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "ba6f5f68-a41c-44e7-bfa2-b1fadf1e6b91",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<VSSInterfaces.IdentityRef>;
                res = await this.rest.create<VSSInterfaces.IdentityRef>(url, users, options);

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
    * Withdraw like of a comment in a thread for a review. DELETE /_apis/CodeReview/reviews/{id}/threads/{id}/comments/{commentId}/likes/{userId}
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    * @param {number} commentId
    * @param {string} userId
    */
    public async deleteLike(
        project: string,
        reviewId: number,
        threadId: number,
        commentId: number,
        userId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId,
                commentId: commentId,
                userId: userId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "ba6f5f68-a41c-44e7-bfa2-b1fadf1e6b91",
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
    * Get all likes of a comment in a thread for a review. GET /_apis/CodeReview/reviews/{id}/threads/{id}/comments/{commentId}/likes
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    * @param {number} commentId
    */
    public async getLikes(
        project: string,
        reviewId: number,
        threadId: number,
        commentId: number
        ): Promise<VSSInterfaces.IdentityRef[]> {

        return new Promise<VSSInterfaces.IdentityRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "ba6f5f68-a41c-44e7-bfa2-b1fadf1e6b91",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * Create or update review properties collection. PATCH /_apis/codereview/reviews/{reviewId}/iterations/{iterationId}/properties The patch operation can be add, replace or remove. For add operation, the path can be empty. If the path is empty, the value must be a list of key value pairs. For replace operation, the path cannot be empty. If the path does not exist, the property will be added to the collection. For remove operation, the path cannot be empty. If the path does not exist, no action will be performed.
    * 
    * @param {VSSInterfaces.JsonPatchDocument} document
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} iterationId
    */
    public async createOrUpdateIterationProperties(
        customHeaders: any,
        document: VSSInterfaces.JsonPatchDocument,
        project: string,
        reviewId: number,
        iterationId: number
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                iterationId: iterationId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "1031ea92-06f3-4550-a310-8bb3059b92ff",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<any>;
                res = await this.rest.update<any>(url, document, options);

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
    * Get iteration properties collection. GET /_apis/codereview/reviews/{reviewId}/iterations/{iterationId}/properties
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} iterationId
    */
    public async getIterationProperties(
        project: string,
        reviewId: number,
        iterationId: number
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "1031ea92-06f3-4550-a310-8bb3059b92ff",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * Create or update review properties collection. PATCH /_apis/codereview/reviews/{reviewId}/properties The patch operation can be add, replace or remove. For add operation, the path can be empty. If the path is empty, the value must be a list of key value pairs. For replace operation, the path cannot be empty. If the path does not exist, the property will be added to the collection. For remove operation, the path cannot be empty. If the path does not exist, no action will be performed.
    * 
    * @param {VSSInterfaces.JsonPatchDocument} document
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async createOrUpdateReviewProperties(
        customHeaders: any,
        document: VSSInterfaces.JsonPatchDocument,
        project: string,
        reviewId: number
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/json-patch+json";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "7cf0e9a4-ccd5-4d63-9c52-5241a213c3fe",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<any>;
                res = await this.rest.update<any>(url, document, options);

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
    * Get review properties collection. GET /_apis/codereview/reviews/{reviewId}/properties
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async getReviewProperties(
        project: string,
        reviewId: number
        ): Promise<any> {

        return new Promise<any>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "7cf0e9a4-ccd5-4d63-9c52-5241a213c3fe",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * @param {CodeReviewInterfaces.Reviewer[]} reviewers
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async addReviewers(
        reviewers: CodeReviewInterfaces.Reviewer[],
        project: string,
        reviewId: number
        ): Promise<CodeReviewInterfaces.Reviewer[]> {

        return new Promise<CodeReviewInterfaces.Reviewer[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "9b1869ec-b17f-4efd-8597-8c89362f2063",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Reviewer[]>;
                res = await this.rest.create<CodeReviewInterfaces.Reviewer[]>(url, reviewers, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Reviewer,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {string} reviewerId
    */
    public async deleteReviewer(
        project: string,
        reviewId: number,
        reviewerId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                reviewerId: reviewerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "9b1869ec-b17f-4efd-8597-8c89362f2063",
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
    * @param {number} reviewId
    */
    public async getReviewers(
        project: string,
        reviewId: number
        ): Promise<CodeReviewInterfaces.Reviewer[]> {

        return new Promise<CodeReviewInterfaces.Reviewer[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "9b1869ec-b17f-4efd-8597-8c89362f2063",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Reviewer[]>;
                res = await this.rest.get<CodeReviewInterfaces.Reviewer[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Reviewer,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {CodeReviewInterfaces.Reviewer} reviewer
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {string} reviewerId
    */
    public async replaceReviewer(
        reviewer: CodeReviewInterfaces.Reviewer,
        project: string,
        reviewId: number,
        reviewerId: string
        ): Promise<CodeReviewInterfaces.Reviewer> {

        return new Promise<CodeReviewInterfaces.Reviewer>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                reviewerId: reviewerId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "9b1869ec-b17f-4efd-8597-8c89362f2063",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Reviewer>;
                res = await this.rest.replace<CodeReviewInterfaces.Reviewer>(url, reviewer, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Reviewer,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Query reviews based on search criteria. When making subsequent requests that include continuation tokens, be sure to pass the same search criteria. Otherwise the subsequent requests may return unexpected results.
    * 
    * @param {CodeReviewInterfaces.ReviewSearchCriteria} searchCriteria
    * @param {string} project - Project ID or project name
    * @param {number} top
    * @param {string} continuationToken
    */
    public async getReviews(
        searchCriteria: CodeReviewInterfaces.ReviewSearchCriteria,
        project?: string,
        top?: number,
        continuationToken?: string
        ): Promise<CodeReviewInterfaces.Review[]> {

        return new Promise<CodeReviewInterfaces.Review[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                searchCriteria: searchCriteria,
                '$top': top,
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "d17478c8-387d-4359-ba97-1414ae770b76",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Review[]>;
                res = await this.rest.get<CodeReviewInterfaces.Review[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Review,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {CodeReviewInterfaces.Review} review
    * @param {string} project - Project ID or project name
    */
    public async createReview(
        review: CodeReviewInterfaces.Review,
        project: string
        ): Promise<CodeReviewInterfaces.Review> {

        return new Promise<CodeReviewInterfaces.Review>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "eaa8ec98-2b9c-4730-96a3-4845be1558d6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Review>;
                res = await this.rest.create<CodeReviewInterfaces.Review>(url, review, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Review,
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
    * @param {number} reviewId
    */
    public async deleteReview(
        project: string,
        reviewId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "eaa8ec98-2b9c-4730-96a3-4845be1558d6",
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
    * @param {number} reviewId
    * @param {boolean} includeAllProperties
    * @param {number} maxChangesCount
    * @param {Date} ifModifiedSince - Fetch latest review data if it was modified after IfModifiedSince timestamp.
    */
    public async getReview(
        customHeaders: any,
        project: string,
        reviewId: number,
        includeAllProperties?: boolean,
        maxChangesCount?: number,
        ifModifiedSince?: Date
        ): Promise<CodeReviewInterfaces.Review> {

        return new Promise<CodeReviewInterfaces.Review>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            let queryValues: any = {
                includeAllProperties: includeAllProperties,
                maxChangesCount: maxChangesCount,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["If-Modified-Since"] = "ifModifiedSince";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "eaa8ec98-2b9c-4730-96a3-4845be1558d6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Review>;
                res = await this.rest.get<CodeReviewInterfaces.Review>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Review,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {CodeReviewInterfaces.Review} review
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async replaceReview(
        review: CodeReviewInterfaces.Review,
        project: string,
        reviewId: number
        ): Promise<CodeReviewInterfaces.Review> {

        return new Promise<CodeReviewInterfaces.Review>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "eaa8ec98-2b9c-4730-96a3-4845be1558d6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Review>;
                res = await this.rest.replace<CodeReviewInterfaces.Review>(url, review, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Review,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {CodeReviewInterfaces.Review} review
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async updateReview(
        review: CodeReviewInterfaces.Review,
        project: string,
        reviewId: number
        ): Promise<CodeReviewInterfaces.Review> {

        return new Promise<CodeReviewInterfaces.Review>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "eaa8ec98-2b9c-4730-96a3-4845be1558d6",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Review>;
                res = await this.rest.update<CodeReviewInterfaces.Review>(url, review, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Review,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Query reviews by sourceArtifactIds. POST /_apis/codereview/reviewsBatch
    * 
    * @param {string[]} sourceArtifactIds
    * @param {string} project - Project ID or project name
    * @param {boolean} includeDeleted
    */
    public async getReviewsBatch(
        sourceArtifactIds: string[],
        project: string,
        includeDeleted?: boolean
        ): Promise<CodeReviewInterfaces.Review[]> {

        return new Promise<CodeReviewInterfaces.Review[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                includeDeleted: includeDeleted,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "16b3f95b-5ba6-4f64-a2db-1a03de11d3bc",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Review[]>;
                res = await this.rest.create<CodeReviewInterfaces.Review[]>(url, sourceArtifactIds, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Review,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {CodeReviewInterfaces.ReviewSettings} reviewSettings
    * @param {string} project - Project ID or project name
    */
    public async createReviewSettings(
        reviewSettings: CodeReviewInterfaces.ReviewSettings,
        project: string
        ): Promise<CodeReviewInterfaces.ReviewSettings> {

        return new Promise<CodeReviewInterfaces.ReviewSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "6a11b750-d84c-4f84-b96d-23526f716576",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.ReviewSettings>;
                res = await this.rest.create<CodeReviewInterfaces.ReviewSettings>(url, reviewSettings, options);

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
    */
    public async getReviewSettings(
        project: string
        ): Promise<CodeReviewInterfaces.ReviewSettings> {

        return new Promise<CodeReviewInterfaces.ReviewSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "6a11b750-d84c-4f84-b96d-23526f716576",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.ReviewSettings>;
                res = await this.rest.get<CodeReviewInterfaces.ReviewSettings>(url, options);

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
    * @param {CodeReviewInterfaces.ReviewSettings} reviewSettings
    * @param {string} project - Project ID or project name
    */
    public async updateReviewSettings(
        reviewSettings: CodeReviewInterfaces.ReviewSettings,
        project: string
        ): Promise<CodeReviewInterfaces.ReviewSettings> {

        return new Promise<CodeReviewInterfaces.ReviewSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "6a11b750-d84c-4f84-b96d-23526f716576",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.ReviewSettings>;
                res = await this.rest.replace<CodeReviewInterfaces.ReviewSettings>(url, reviewSettings, options);

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
    * @param {CodeReviewInterfaces.NotificationContext} userMessage
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async shareReview(
        userMessage: CodeReviewInterfaces.NotificationContext,
        project: string,
        reviewId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "eb58030e-c39b-41b1-9e1f-72e23b032fb4",
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
    * Create an iteration status. POST /_apis/codereview/reviews/{reviewId}/iterations/{iterationId}/statuses/{statusId}
    * 
    * @param {CodeReviewInterfaces.Status} status
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} iterationId
    */
    public async createIterationStatus(
        status: CodeReviewInterfaces.Status,
        project: string,
        reviewId: number,
        iterationId: number
        ): Promise<CodeReviewInterfaces.Status> {

        return new Promise<CodeReviewInterfaces.Status>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "cb958c49-f702-483a-bb3b-3454570fb72a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Status>;
                res = await this.rest.create<CodeReviewInterfaces.Status>(url, status, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Status,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get the specific iteration status. GET /_apis/codereview/reviews/{reviewId}/iterations/{iterationId}/statuses/{statusId}
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} iterationId
    * @param {number} statusId
    */
    public async getIterationStatus(
        project: string,
        reviewId: number,
        iterationId: number,
        statusId: number
        ): Promise<CodeReviewInterfaces.Status> {

        return new Promise<CodeReviewInterfaces.Status>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                iterationId: iterationId,
                statusId: statusId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "cb958c49-f702-483a-bb3b-3454570fb72a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Status>;
                res = await this.rest.get<CodeReviewInterfaces.Status>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Status,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get all the statuses associated with an iteration. GET /_apis/codereview/reviews/{reviewId}/iterations/{iterationId}/statuses
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} iterationId
    */
    public async getIterationStatuses(
        project: string,
        reviewId: number,
        iterationId: number
        ): Promise<CodeReviewInterfaces.Status[]> {

        return new Promise<CodeReviewInterfaces.Status[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                iterationId: iterationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "cb958c49-f702-483a-bb3b-3454570fb72a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Status[]>;
                res = await this.rest.get<CodeReviewInterfaces.Status[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Status,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update an iteration status. PATCH /_apis/codereview/reviews/{reviewId}/iterations/{iterationId}/statuses/{statusId}
    * 
    * @param {CodeReviewInterfaces.Status} status
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} iterationId
    * @param {number} statusId
    */
    public async updateIterationStatus(
        status: CodeReviewInterfaces.Status,
        project: string,
        reviewId: number,
        iterationId: number,
        statusId: number
        ): Promise<CodeReviewInterfaces.Status> {

        return new Promise<CodeReviewInterfaces.Status>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                iterationId: iterationId,
                statusId: statusId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "cb958c49-f702-483a-bb3b-3454570fb72a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Status>;
                res = await this.rest.update<CodeReviewInterfaces.Status>(url, status, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Status,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Create a review status. POST /_apis/codereview/reviews/{reviewId}/statuses
    * 
    * @param {CodeReviewInterfaces.Status} status
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async createReviewStatus(
        status: CodeReviewInterfaces.Status,
        project: string,
        reviewId: number
        ): Promise<CodeReviewInterfaces.Status> {

        return new Promise<CodeReviewInterfaces.Status>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "502d7933-25de-42e3-bc82-8478b3796655",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Status>;
                res = await this.rest.create<CodeReviewInterfaces.Status>(url, status, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Status,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get the specific review status. GET /_apis/codereview/reviews/{reviewId}/statuses/{statusId}
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} statusId
    */
    public async getReviewStatus(
        project: string,
        reviewId: number,
        statusId: number
        ): Promise<CodeReviewInterfaces.Status> {

        return new Promise<CodeReviewInterfaces.Status>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                statusId: statusId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "502d7933-25de-42e3-bc82-8478b3796655",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Status>;
                res = await this.rest.get<CodeReviewInterfaces.Status>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Status,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get all the statuses associated with a review. GET /_apis/codereview/reviews/{reviewId}/statuses
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async getReviewStatuses(
        project: string,
        reviewId: number
        ): Promise<CodeReviewInterfaces.Status[]> {

        return new Promise<CodeReviewInterfaces.Status[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "502d7933-25de-42e3-bc82-8478b3796655",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Status[]>;
                res = await this.rest.get<CodeReviewInterfaces.Status[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Status,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update a review status. PATCH /_apis/codereview/reviews/{reviewId}/statuses/{statusId}
    * 
    * @param {CodeReviewInterfaces.Status} status
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} statusId
    */
    public async updateReviewStatus(
        status: CodeReviewInterfaces.Status,
        project: string,
        reviewId: number,
        statusId: number
        ): Promise<CodeReviewInterfaces.Status> {

        return new Promise<CodeReviewInterfaces.Status>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                statusId: statusId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "502d7933-25de-42e3-bc82-8478b3796655",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.Status>;
                res = await this.rest.update<CodeReviewInterfaces.Status>(url, status, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.Status,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Create a review comment thread. POST /_apis/CodeReview/reviews/{id}/Threads
    * 
    * @param {CodeReviewInterfaces.CommentThread} newThread
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    */
    public async createThread(
        newThread: CodeReviewInterfaces.CommentThread,
        project: string,
        reviewId: number
        ): Promise<CodeReviewInterfaces.CommentThread> {

        return new Promise<CodeReviewInterfaces.CommentThread>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "1e0bb4ec-0587-42d8-a005-3815555e766a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.CommentThread>;
                res = await this.rest.create<CodeReviewInterfaces.CommentThread>(url, newThread, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.CommentThread,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get a review comment thread by id for a review. Return 304 if comment thread hasn't modified based on ifModifiedSince header. GET /_apis/CodeReview/reviews/{id}/Threads/{threadId}
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    * @param {CodeReviewInterfaces.CommentTrackingCriteria} trackingCriteria
    * @param {Date} ifModifiedSince - Fetch latest comment data if it was modified after IfModifiedSince timestamp.
    */
    public async getThread(
        customHeaders: any,
        project: string,
        reviewId: number,
        threadId: number,
        trackingCriteria?: CodeReviewInterfaces.CommentTrackingCriteria,
        ifModifiedSince?: Date
        ): Promise<CodeReviewInterfaces.CommentThread> {

        return new Promise<CodeReviewInterfaces.CommentThread>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId
            };

            let queryValues: any = {
                trackingCriteria: trackingCriteria,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["If-Modified-Since"] = "ifModifiedSince";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "1e0bb4ec-0587-42d8-a005-3815555e766a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.CommentThread>;
                res = await this.rest.get<CodeReviewInterfaces.CommentThread>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.CommentThread,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Get all review comment threads of a review. GET /_apis/CodeReview/reviews/{id}/Threads/ When modifiedSince parameter is passed, fetch threads of a review that were modified after modifiedSince timestamp.
    * 
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {Date} modifiedSince
    * @param {CodeReviewInterfaces.CommentTrackingCriteria} trackingCriteria
    */
    public async getThreads(
        project: string,
        reviewId: number,
        modifiedSince?: Date,
        trackingCriteria?: CodeReviewInterfaces.CommentTrackingCriteria
        ): Promise<CodeReviewInterfaces.CommentThread[]> {

        return new Promise<CodeReviewInterfaces.CommentThread[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId
            };

            let queryValues: any = {
                modifiedSince: modifiedSince,
                trackingCriteria: trackingCriteria,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "1e0bb4ec-0587-42d8-a005-3815555e766a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.CommentThread[]>;
                res = await this.rest.get<CodeReviewInterfaces.CommentThread[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.CommentThread,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {CodeReviewInterfaces.CommentThread} thread
    * @param {string} project - Project ID or project name
    * @param {number} reviewId
    * @param {number} threadId
    */
    public async updateThread(
        thread: CodeReviewInterfaces.CommentThread,
        project: string,
        reviewId: number,
        threadId: number
        ): Promise<CodeReviewInterfaces.CommentThread> {

        return new Promise<CodeReviewInterfaces.CommentThread>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                reviewId: reviewId,
                threadId: threadId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "CodeReview",
                    "1e0bb4ec-0587-42d8-a005-3815555e766a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<CodeReviewInterfaces.CommentThread>;
                res = await this.rest.update<CodeReviewInterfaces.CommentThread>(url, thread, options);

                let ret = this.formatResponse(res.result,
                                              CodeReviewInterfaces.TypeInfo.CommentThread,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
