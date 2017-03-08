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
import DiscussionInterfaces = require("./interfaces/DiscussionInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IDiscussionApi extends basem.ClientApiBase {
    addComment(newComment: DiscussionInterfaces.DiscussionComment, discussionId: number): Promise<DiscussionInterfaces.DiscussionComment>;
    addCommentsByDiscussionId(newComments: VSSInterfaces.VssJsonCollectionWrapperV<DiscussionInterfaces.DiscussionComment[]>, discussionId: number): Promise<DiscussionInterfaces.DiscussionComment[]>;
    deleteComment(discussionId: number, commentId: number): Promise<void>;
    getComment(discussionId: number, commentId: number): Promise<DiscussionInterfaces.DiscussionComment>;
    getComments(discussionId: number): Promise<DiscussionInterfaces.DiscussionCommentCollection>;
    updateComment(newComment: DiscussionInterfaces.DiscussionComment, discussionId: number, commentId: number): Promise<DiscussionInterfaces.DiscussionComment>;
    addComments(newComments: VSSInterfaces.VssJsonCollectionWrapperV<DiscussionInterfaces.DiscussionComment[]>): Promise<DiscussionInterfaces.DiscussionComment[]>;
    createThread(newThread: DiscussionInterfaces.DiscussionThread): Promise<DiscussionInterfaces.DiscussionThread>;
    createThreads(newThreads: VSSInterfaces.VssJsonCollectionWrapperV<DiscussionInterfaces.DiscussionThreadCollection>): Promise<DiscussionInterfaces.DiscussionThreadCollection>;
    getThreadsByWorkItemId(workItemId: number): Promise<DiscussionInterfaces.DiscussionThreadCollection>;
    getThread(discussionId: number): Promise<DiscussionInterfaces.DiscussionThread>;
    updateThread(newThread: DiscussionInterfaces.DiscussionThread, discussionId: number): Promise<DiscussionInterfaces.DiscussionThread>;
    getThreads(artifactUris: string[]): Promise<{ [key: string] : DiscussionInterfaces.DiscussionThread[]; }>;
}

export class DiscussionApi extends basem.ClientApiBase implements IDiscussionApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Discussion-api');
    }

    /**
    * Create a discussion comment POST /_apis/discussion/threads/{discussionId}/comments
    * 
    * @param {DiscussionInterfaces.DiscussionComment} newComment
    * @param {number} discussionId
    */
    public async addComment(
        newComment: DiscussionInterfaces.DiscussionComment,
        discussionId: number
        ): Promise<DiscussionInterfaces.DiscussionComment> {

        return new Promise<DiscussionInterfaces.DiscussionComment>(async (resolve, reject) => {
            let routeValues: any = {
                discussionId: discussionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "495211bd-b463-4578-86fe-924ea4953693",
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
    * Create multiple discussion comments for a discussion thread PATCH /_apis/discussion/threads/{discussionId}/comments
    * 
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<DiscussionInterfaces.DiscussionComment[]>} newComments
    * @param {number} discussionId
    */
    public async addCommentsByDiscussionId(
        newComments: VSSInterfaces.VssJsonCollectionWrapperV<DiscussionInterfaces.DiscussionComment[]>,
        discussionId: number
        ): Promise<DiscussionInterfaces.DiscussionComment[]> {

        return new Promise<DiscussionInterfaces.DiscussionComment[]>(async (resolve, reject) => {
            let routeValues: any = {
                discussionId: discussionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "495211bd-b463-4578-86fe-924ea4953693",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionComment[]>;
                res = await this.rest.update<DiscussionInterfaces.DiscussionComment[]>(url, newComments, options);

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
    * Remove a discussion comment DELETE /_apis/discussion/threads/{discussionId}/comments/{commentId}
    * 
    * @param {number} discussionId
    * @param {number} commentId
    */
    public async deleteComment(
        discussionId: number,
        commentId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                discussionId: discussionId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "495211bd-b463-4578-86fe-924ea4953693",
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
    * Read a comment by id GET /_apis/discussion/threads/{discussionId}/comments/{commentId}
    * 
    * @param {number} discussionId
    * @param {number} commentId
    */
    public async getComment(
        discussionId: number,
        commentId: number
        ): Promise<DiscussionInterfaces.DiscussionComment> {

        return new Promise<DiscussionInterfaces.DiscussionComment>(async (resolve, reject) => {
            let routeValues: any = {
                discussionId: discussionId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "495211bd-b463-4578-86fe-924ea4953693",
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
    * Read all comments for a discussion thread GET /_apis/discussion/threads/{discussionId}/comments
    * 
    * @param {number} discussionId
    */
    public async getComments(
        discussionId: number
        ): Promise<DiscussionInterfaces.DiscussionCommentCollection> {

        return new Promise<DiscussionInterfaces.DiscussionCommentCollection>(async (resolve, reject) => {
            let routeValues: any = {
                discussionId: discussionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "495211bd-b463-4578-86fe-924ea4953693",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionCommentCollection>;
                res = await this.rest.get<DiscussionInterfaces.DiscussionCommentCollection>(url, options);

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
    * Update a discussion comment PATCH /_apis/discussion/threads/{discussionId}/comments/{commentId}
    * 
    * @param {DiscussionInterfaces.DiscussionComment} newComment
    * @param {number} discussionId
    * @param {number} commentId
    */
    public async updateComment(
        newComment: DiscussionInterfaces.DiscussionComment,
        discussionId: number,
        commentId: number
        ): Promise<DiscussionInterfaces.DiscussionComment> {

        return new Promise<DiscussionInterfaces.DiscussionComment>(async (resolve, reject) => {
            let routeValues: any = {
                discussionId: discussionId,
                commentId: commentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "495211bd-b463-4578-86fe-924ea4953693",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionComment>;
                res = await this.rest.update<DiscussionInterfaces.DiscussionComment>(url, newComment, options);

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
    * Create multiple comments across discussion threads PATCH /_apis/discussion/comments
    * 
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<DiscussionInterfaces.DiscussionComment[]>} newComments
    */
    public async addComments(
        newComments: VSSInterfaces.VssJsonCollectionWrapperV<DiscussionInterfaces.DiscussionComment[]>
        ): Promise<DiscussionInterfaces.DiscussionComment[]> {

        return new Promise<DiscussionInterfaces.DiscussionComment[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "20933fc0-b6a7-4a57-8111-a7458da5441b",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionComment[]>;
                res = await this.rest.update<DiscussionInterfaces.DiscussionComment[]>(url, newComments, options);

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
    * Create a discussion thread POST /_apis/discussion/threads
    * 
    * @param {DiscussionInterfaces.DiscussionThread} newThread
    */
    public async createThread(
        newThread: DiscussionInterfaces.DiscussionThread
        ): Promise<DiscussionInterfaces.DiscussionThread> {

        return new Promise<DiscussionInterfaces.DiscussionThread>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "a50ddbe2-1a1d-4c55-857f-73c6a3a31722",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionThread>;
                res = await this.rest.create<DiscussionInterfaces.DiscussionThread>(url, newThread, options);

                let ret = this.formatResponse(res.result,
                                              DiscussionInterfaces.TypeInfo.DiscussionThread,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Create multiple discussion threads PATCH /_apis/discussion/threads
    * 
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<DiscussionInterfaces.DiscussionThreadCollection>} newThreads
    */
    public async createThreads(
        newThreads: VSSInterfaces.VssJsonCollectionWrapperV<DiscussionInterfaces.DiscussionThreadCollection>
        ): Promise<DiscussionInterfaces.DiscussionThreadCollection> {

        return new Promise<DiscussionInterfaces.DiscussionThreadCollection>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "a50ddbe2-1a1d-4c55-857f-73c6a3a31722",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionThreadCollection>;
                res = await this.rest.update<DiscussionInterfaces.DiscussionThreadCollection>(url, newThreads, options);

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
    * Query discussion threads by work item id GET /_apis/discussion/threads?workItemId={workItemId}
    * 
    * @param {number} workItemId
    */
    public async getThreadsByWorkItemId(
        workItemId: number
        ): Promise<DiscussionInterfaces.DiscussionThreadCollection> {

        return new Promise<DiscussionInterfaces.DiscussionThreadCollection>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                workItemId: workItemId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "a50ddbe2-1a1d-4c55-857f-73c6a3a31722",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionThreadCollection>;
                res = await this.rest.get<DiscussionInterfaces.DiscussionThreadCollection>(url, options);

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
    * Read a discussion thread by id GET /_apis/discussion/threads/{discussionId}
    * 
    * @param {number} discussionId
    */
    public async getThread(
        discussionId: number
        ): Promise<DiscussionInterfaces.DiscussionThread> {

        return new Promise<DiscussionInterfaces.DiscussionThread>(async (resolve, reject) => {
            let routeValues: any = {
                discussionId: discussionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "010054f6-d9ed-4ed2-855f-7f86bff10c02",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionThread>;
                res = await this.rest.get<DiscussionInterfaces.DiscussionThread>(url, options);

                let ret = this.formatResponse(res.result,
                                              DiscussionInterfaces.TypeInfo.DiscussionThread,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Update a discussion thread PATCH /_apis/discussion/threads/{discussionId}
    * 
    * @param {DiscussionInterfaces.DiscussionThread} newThread
    * @param {number} discussionId
    */
    public async updateThread(
        newThread: DiscussionInterfaces.DiscussionThread,
        discussionId: number
        ): Promise<DiscussionInterfaces.DiscussionThread> {

        return new Promise<DiscussionInterfaces.DiscussionThread>(async (resolve, reject) => {
            let routeValues: any = {
                discussionId: discussionId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "010054f6-d9ed-4ed2-855f-7f86bff10c02",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<DiscussionInterfaces.DiscussionThread>;
                res = await this.rest.update<DiscussionInterfaces.DiscussionThread>(url, newThread, options);

                let ret = this.formatResponse(res.result,
                                              DiscussionInterfaces.TypeInfo.DiscussionThread,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Query discussion threads by artifact uri POST /_apis/discussion/threadsBatch
    * 
    * @param {string[]} artifactUris
    */
    public async getThreads(
        artifactUris: string[]
        ): Promise<{ [key: string] : DiscussionInterfaces.DiscussionThread[]; }> {

        return new Promise<{ [key: string] : DiscussionInterfaces.DiscussionThread[]; }>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.2-preview.1",
                    "discussion",
                    "255a0b5e-3c2f-43c2-a688-36c878210ba2",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion); 
                let res: restm.IRestResponse<{ [key: string] : DiscussionInterfaces.DiscussionThread[]; }>;
                res = await this.rest.create<{ [key: string] : DiscussionInterfaces.DiscussionThread[]; }>(url, artifactUris, options);

                let ret = this.formatResponse(res.result,
                                              DiscussionInterfaces.TypeInfo.DiscussionThread,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
