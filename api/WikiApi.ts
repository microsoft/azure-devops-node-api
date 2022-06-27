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
import Comments_Contracts = require("./interfaces/CommentsInterfaces");
import GitInterfaces = require("./interfaces/GitInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
import WikiInterfaces = require("./interfaces/WikiInterfaces");

export interface IWikiApi extends basem.ClientApiBase {
    createCommentAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, project: string, wikiIdentifier: string, pageId: number): Promise<Comments_Contracts.CommentAttachment>;
    getAttachmentContent(project: string, wikiIdentifier: string, pageId: number, attachmentId: string): Promise<NodeJS.ReadableStream>;
    addCommentReaction(project: string, wikiIdentifier: string, pageId: number, commentId: number, type: Comments_Contracts.CommentReactionType): Promise<Comments_Contracts.CommentReaction>;
    deleteCommentReaction(project: string, wikiIdentifier: string, pageId: number, commentId: number, type: Comments_Contracts.CommentReactionType): Promise<Comments_Contracts.CommentReaction>;
    getEngagedUsers(project: string, wikiIdentifier: string, pageId: number, commentId: number, type: Comments_Contracts.CommentReactionType, top?: number, skip?: number): Promise<VSSInterfaces.IdentityRef[]>;
    addComment(request: Comments_Contracts.CommentCreateParameters, project: string, wikiIdentifier: string, pageId: number): Promise<Comments_Contracts.Comment>;
    deleteComment(project: string, wikiIdentifier: string, pageId: number, id: number): Promise<void>;
    getComment(project: string, wikiIdentifier: string, pageId: number, id: number, excludeDeleted?: boolean, expand?: Comments_Contracts.CommentExpandOptions): Promise<Comments_Contracts.Comment>;
    listComments(project: string, wikiIdentifier: string, pageId: number, top?: number, continuationToken?: string, excludeDeleted?: boolean, expand?: Comments_Contracts.CommentExpandOptions, order?: Comments_Contracts.CommentSortOrder, parentId?: number): Promise<Comments_Contracts.CommentList>;
    updateComment(comment: Comments_Contracts.CommentUpdateParameters, project: string, wikiIdentifier: string, pageId: number, id: number): Promise<Comments_Contracts.Comment>;
    getPageText(project: string, wikiIdentifier: string, path?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    getPageZip(project: string, wikiIdentifier: string, path?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    getPageByIdText(project: string, wikiIdentifier: string, id: number, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    getPageByIdZip(project: string, wikiIdentifier: string, id: number, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    getPagesBatch(pagesBatchRequest: WikiInterfaces.WikiPagesBatchRequest, project: string, wikiIdentifier: string, versionDescriptor?: GitInterfaces.GitVersionDescriptor): Promise<WikiInterfaces.WikiPageDetail[]>;
    getPageData(project: string, wikiIdentifier: string, pageId: number, pageViewsForDays?: number): Promise<WikiInterfaces.WikiPageDetail>;
    createOrUpdatePageViewStats(project: string, wikiIdentifier: string, wikiVersion: GitInterfaces.GitVersionDescriptor, path: string, oldPath?: string): Promise<WikiInterfaces.WikiPageViewStats>;
    createWiki(wikiCreateParams: WikiInterfaces.WikiCreateParametersV2, project?: string): Promise<WikiInterfaces.WikiV2>;
    deleteWiki(wikiIdentifier: string, project?: string): Promise<WikiInterfaces.WikiV2>;
    getAllWikis(project?: string): Promise<WikiInterfaces.WikiV2[]>;
    getWiki(wikiIdentifier: string, project?: string): Promise<WikiInterfaces.WikiV2>;
    updateWiki(updateParameters: WikiInterfaces.WikiUpdateParameters, wikiIdentifier: string, project?: string): Promise<WikiInterfaces.WikiV2>;
}

export class WikiApi extends basem.ClientApiBase implements IWikiApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Wiki-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "bf7d82a0-8aa5-4613-94ef-6172a5ea01f3";

    /**
     * Uploads an attachment on a comment on a wiki page.
     * 
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {number} pageId - Wiki page ID.
     */
    public async createCommentAttachment(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        project: string,
        wikiIdentifier: string,
        pageId: number
        ): Promise<Comments_Contracts.CommentAttachment> {

        return new Promise<Comments_Contracts.CommentAttachment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "5100d976-363d-42e7-a19d-4171ecb44782",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<Comments_Contracts.CommentAttachment>;
                res = await this.rest.uploadStream<Comments_Contracts.CommentAttachment>("POST", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              Comments_Contracts.TypeInfo.CommentAttachment,
                                              false);

                resolve(ret);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Downloads an attachment on a comment on a wiki page.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {number} pageId - Wiki page ID.
     * @param {string} attachmentId - Attachment ID.
     */
    public async getAttachmentContent(
        project: string,
        wikiIdentifier: string,
        pageId: number,
        attachmentId: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "5100d976-363d-42e7-a19d-4171ecb44782",
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
     * Add a reaction on a wiki page comment.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name
     * @param {number} pageId - Wiki page ID
     * @param {number} commentId - ID of the associated comment
     * @param {Comments_Contracts.CommentReactionType} type - Type of the reaction being added
     */
    public async addCommentReaction(
        project: string,
        wikiIdentifier: string,
        pageId: number,
        commentId: number,
        type: Comments_Contracts.CommentReactionType
        ): Promise<Comments_Contracts.CommentReaction> {

        return new Promise<Comments_Contracts.CommentReaction>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId,
                commentId: commentId,
                type: type
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "7a5bc693-aab7-4d48-8f34-36f373022063",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Comments_Contracts.CommentReaction>;
                res = await this.rest.replace<Comments_Contracts.CommentReaction>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              Comments_Contracts.TypeInfo.CommentReaction,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a reaction on a wiki page comment.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or name
     * @param {number} pageId - Wiki page ID
     * @param {number} commentId - ID of the associated comment
     * @param {Comments_Contracts.CommentReactionType} type - Type of the reaction being deleted
     */
    public async deleteCommentReaction(
        project: string,
        wikiIdentifier: string,
        pageId: number,
        commentId: number,
        type: Comments_Contracts.CommentReactionType
        ): Promise<Comments_Contracts.CommentReaction> {

        return new Promise<Comments_Contracts.CommentReaction>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId,
                commentId: commentId,
                type: type
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "7a5bc693-aab7-4d48-8f34-36f373022063",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Comments_Contracts.CommentReaction>;
                res = await this.rest.del<Comments_Contracts.CommentReaction>(url, options);

                let ret = this.formatResponse(res.result,
                                              Comments_Contracts.TypeInfo.CommentReaction,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets a list of users who have reacted for the given wiki comment with a given reaction type. Supports paging, with a default page size of 100 users at a time.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {number} pageId - Wiki page ID.
     * @param {number} commentId - ID of the associated comment
     * @param {Comments_Contracts.CommentReactionType} type - Type of the reaction for which the engaged users are being requested
     * @param {number} top - Number of enagaged users to be returned in a given page. Optional, defaults to 100
     * @param {number} skip - Number of engaged users to be skipped to page the next set of engaged users, defaults to 0
     */
    public async getEngagedUsers(
        project: string,
        wikiIdentifier: string,
        pageId: number,
        commentId: number,
        type: Comments_Contracts.CommentReactionType,
        top?: number,
        skip?: number
        ): Promise<VSSInterfaces.IdentityRef[]> {

        return new Promise<VSSInterfaces.IdentityRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId,
                commentId: commentId,
                type: type
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "598a5268-41a7-4162-b7dc-344131e4d1fa",
                    routeValues,
                    queryValues);

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
     * Add a comment on a wiki page.
     * 
     * @param {Comments_Contracts.CommentCreateParameters} request - Comment create request.
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {number} pageId - Wiki page ID.
     */
    public async addComment(
        request: Comments_Contracts.CommentCreateParameters,
        project: string,
        wikiIdentifier: string,
        pageId: number
        ): Promise<Comments_Contracts.Comment> {

        return new Promise<Comments_Contracts.Comment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "9b394e93-7db5-46cb-9c26-09a36aa5c895",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Comments_Contracts.Comment>;
                res = await this.rest.create<Comments_Contracts.Comment>(url, request, options);

                let ret = this.formatResponse(res.result,
                                              Comments_Contracts.TypeInfo.Comment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Delete a comment on a wiki page.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or name.
     * @param {number} pageId - Wiki page ID.
     * @param {number} id - Comment ID.
     */
    public async deleteComment(
        project: string,
        wikiIdentifier: string,
        pageId: number,
        id: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "9b394e93-7db5-46cb-9c26-09a36aa5c895",
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
     * Returns a comment associated with the Wiki Page.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {number} pageId - Wiki page ID.
     * @param {number} id - ID of the comment to return.
     * @param {boolean} excludeDeleted - Specify if the deleted comment should be skipped.
     * @param {Comments_Contracts.CommentExpandOptions} expand - Specifies the additional data retrieval options for comments.
     */
    public async getComment(
        project: string,
        wikiIdentifier: string,
        pageId: number,
        id: number,
        excludeDeleted?: boolean,
        expand?: Comments_Contracts.CommentExpandOptions
        ): Promise<Comments_Contracts.Comment> {

        return new Promise<Comments_Contracts.Comment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId,
                id: id
            };

            let queryValues: any = {
                excludeDeleted: excludeDeleted,
                '$expand': expand,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "9b394e93-7db5-46cb-9c26-09a36aa5c895",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Comments_Contracts.Comment>;
                res = await this.rest.get<Comments_Contracts.Comment>(url, options);

                let ret = this.formatResponse(res.result,
                                              Comments_Contracts.TypeInfo.Comment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a pageable list of comments.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {number} pageId - Wiki page ID.
     * @param {number} top - Max number of comments to return.
     * @param {string} continuationToken - Used to query for the next page of comments.
     * @param {boolean} excludeDeleted - Specify if the deleted comments should be skipped.
     * @param {Comments_Contracts.CommentExpandOptions} expand - Specifies the additional data retrieval options for comments.
     * @param {Comments_Contracts.CommentSortOrder} order - Order in which the comments should be returned.
     * @param {number} parentId - CommentId of the parent comment.
     */
    public async listComments(
        project: string,
        wikiIdentifier: string,
        pageId: number,
        top?: number,
        continuationToken?: string,
        excludeDeleted?: boolean,
        expand?: Comments_Contracts.CommentExpandOptions,
        order?: Comments_Contracts.CommentSortOrder,
        parentId?: number
        ): Promise<Comments_Contracts.CommentList> {

        return new Promise<Comments_Contracts.CommentList>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId
            };

            let queryValues: any = {
                '$top': top,
                continuationToken: continuationToken,
                excludeDeleted: excludeDeleted,
                '$expand': expand,
                order: order,
                parentId: parentId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "9b394e93-7db5-46cb-9c26-09a36aa5c895",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Comments_Contracts.CommentList>;
                res = await this.rest.get<Comments_Contracts.CommentList>(url, options);

                let ret = this.formatResponse(res.result,
                                              Comments_Contracts.TypeInfo.CommentList,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update a comment on a wiki page.
     * 
     * @param {Comments_Contracts.CommentUpdateParameters} comment - Comment update request.
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {number} pageId - Wiki page ID.
     * @param {number} id - Comment ID.
     */
    public async updateComment(
        comment: Comments_Contracts.CommentUpdateParameters,
        project: string,
        wikiIdentifier: string,
        pageId: number,
        id: number
        ): Promise<Comments_Contracts.Comment> {

        return new Promise<Comments_Contracts.Comment>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId,
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "9b394e93-7db5-46cb-9c26-09a36aa5c895",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Comments_Contracts.Comment>;
                res = await this.rest.update<Comments_Contracts.Comment>(url, comment, options);

                let ret = this.formatResponse(res.result,
                                              Comments_Contracts.TypeInfo.Comment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {string} path - Wiki page path.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - Recursion level for subpages retrieval. Defaults to `None` (Optional).
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - GitVersionDescriptor for the page. Defaults to the default branch (Optional).
     * @param {boolean} includeContent - True to include the content of the page in the response for Json content type. Defaults to false (Optional)
     */
    public async getPageText(
        project: string,
        wikiIdentifier: string,
        path?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor,
        includeContent?: boolean
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier
            };

            let queryValues: any = {
                path: path,
                recursionLevel: recursionLevel,
                versionDescriptor: versionDescriptor,
                includeContent: includeContent,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "25d3fbc7-fe3d-46cb-b5a5-0b6f79caf27b",
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
     * Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {string} path - Wiki page path.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - Recursion level for subpages retrieval. Defaults to `None` (Optional).
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - GitVersionDescriptor for the page. Defaults to the default branch (Optional).
     * @param {boolean} includeContent - True to include the content of the page in the response for Json content type. Defaults to false (Optional)
     */
    public async getPageZip(
        project: string,
        wikiIdentifier: string,
        path?: string,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor,
        includeContent?: boolean
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier
            };

            let queryValues: any = {
                path: path,
                recursionLevel: recursionLevel,
                versionDescriptor: versionDescriptor,
                includeContent: includeContent,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "25d3fbc7-fe3d-46cb-b5a5-0b6f79caf27b",
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
     * Gets metadata or content of the wiki page for the provided page id. Content negotiation is done based on the `Accept` header sent in the request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name..
     * @param {number} id - Wiki page ID.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - Recursion level for subpages retrieval. Defaults to `None` (Optional).
     * @param {boolean} includeContent - True to include the content of the page in the response for Json content type. Defaults to false (Optional)
     */
    public async getPageByIdText(
        project: string,
        wikiIdentifier: string,
        id: number,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContent?: boolean
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                id: id
            };

            let queryValues: any = {
                recursionLevel: recursionLevel,
                includeContent: includeContent,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "ceddcf75-1068-452d-8b13-2d4d76e1f970",
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
     * Gets metadata or content of the wiki page for the provided page id. Content negotiation is done based on the `Accept` header sent in the request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name..
     * @param {number} id - Wiki page ID.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - Recursion level for subpages retrieval. Defaults to `None` (Optional).
     * @param {boolean} includeContent - True to include the content of the page in the response for Json content type. Defaults to false (Optional)
     */
    public async getPageByIdZip(
        project: string,
        wikiIdentifier: string,
        id: number,
        recursionLevel?: GitInterfaces.VersionControlRecursionType,
        includeContent?: boolean
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                id: id
            };

            let queryValues: any = {
                recursionLevel: recursionLevel,
                includeContent: includeContent,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "ceddcf75-1068-452d-8b13-2d4d76e1f970",
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
     * Returns pageable list of Wiki Pages
     * 
     * @param {WikiInterfaces.WikiPagesBatchRequest} pagesBatchRequest - Wiki batch page request.
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - GitVersionDescriptor for the page. (Optional in case of ProjectWiki).
     */
    public async getPagesBatch(
        pagesBatchRequest: WikiInterfaces.WikiPagesBatchRequest,
        project: string,
        wikiIdentifier: string,
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Promise<WikiInterfaces.WikiPageDetail[]> {

        return new Promise<WikiInterfaces.WikiPageDetail[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier
            };

            let queryValues: any = {
                versionDescriptor: versionDescriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "71323c46-2592-4398-8771-ced73dd87207",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WikiInterfaces.WikiPageDetail[]>;
                res = await this.rest.create<WikiInterfaces.WikiPageDetail[]>(url, pagesBatchRequest, options);

                let ret = this.formatResponse(res.result,
                                              WikiInterfaces.TypeInfo.WikiPageDetail,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns page detail corresponding to Page ID.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {number} pageId - Wiki page ID.
     * @param {number} pageViewsForDays - last N days from the current day for which page views is to be returned. It's inclusive of current day.
     */
    public async getPageData(
        project: string,
        wikiIdentifier: string,
        pageId: number,
        pageViewsForDays?: number
        ): Promise<WikiInterfaces.WikiPageDetail> {

        return new Promise<WikiInterfaces.WikiPageDetail>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier,
                pageId: pageId
            };

            let queryValues: any = {
                pageViewsForDays: pageViewsForDays,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "81c4e0fe-7663-4d62-ad46-6ab78459f274",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WikiInterfaces.WikiPageDetail>;
                res = await this.rest.get<WikiInterfaces.WikiPageDetail>(url, options);

                let ret = this.formatResponse(res.result,
                                              WikiInterfaces.TypeInfo.WikiPageDetail,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Creates a new page view stats resource or updates an existing page view stats resource.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {GitInterfaces.GitVersionDescriptor} wikiVersion - Wiki version.
     * @param {string} path - Wiki page path.
     * @param {string} oldPath - Old page path. This is optional and required to rename path in existing page view stats.
     */
    public async createOrUpdatePageViewStats(
        project: string,
        wikiIdentifier: string,
        wikiVersion: GitInterfaces.GitVersionDescriptor,
        path: string,
        oldPath?: string
        ): Promise<WikiInterfaces.WikiPageViewStats> {
        if (wikiVersion == null) {
            throw new TypeError('wikiVersion can not be null or undefined');
        }
        if (path == null) {
            throw new TypeError('path can not be null or undefined');
        }

        return new Promise<WikiInterfaces.WikiPageViewStats>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier
            };

            let queryValues: any = {
                wikiVersion: wikiVersion,
                path: path,
                oldPath: oldPath,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "wiki",
                    "1087b746-5d15-41b9-bea6-14e325e7f880",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WikiInterfaces.WikiPageViewStats>;
                res = await this.rest.create<WikiInterfaces.WikiPageViewStats>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              WikiInterfaces.TypeInfo.WikiPageViewStats,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Creates the wiki resource.
     * 
     * @param {WikiInterfaces.WikiCreateParametersV2} wikiCreateParams - Parameters for the wiki creation.
     * @param {string} project - Project ID or project name
     */
    public async createWiki(
        wikiCreateParams: WikiInterfaces.WikiCreateParametersV2,
        project?: string
        ): Promise<WikiInterfaces.WikiV2> {

        return new Promise<WikiInterfaces.WikiV2>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "wiki",
                    "288d122c-dbd4-451d-aa5f-7dbbba070728",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WikiInterfaces.WikiV2>;
                res = await this.rest.create<WikiInterfaces.WikiV2>(url, wikiCreateParams, options);

                let ret = this.formatResponse(res.result,
                                              WikiInterfaces.TypeInfo.WikiV2,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Deletes the wiki corresponding to the wiki ID or wiki name provided.
     * 
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {string} project - Project ID or project name
     */
    public async deleteWiki(
        wikiIdentifier: string,
        project?: string
        ): Promise<WikiInterfaces.WikiV2> {

        return new Promise<WikiInterfaces.WikiV2>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "wiki",
                    "288d122c-dbd4-451d-aa5f-7dbbba070728",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WikiInterfaces.WikiV2>;
                res = await this.rest.del<WikiInterfaces.WikiV2>(url, options);

                let ret = this.formatResponse(res.result,
                                              WikiInterfaces.TypeInfo.WikiV2,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets all wikis in a project or collection.
     * 
     * @param {string} project - Project ID or project name
     */
    public async getAllWikis(
        project?: string
        ): Promise<WikiInterfaces.WikiV2[]> {

        return new Promise<WikiInterfaces.WikiV2[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "wiki",
                    "288d122c-dbd4-451d-aa5f-7dbbba070728",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WikiInterfaces.WikiV2[]>;
                res = await this.rest.get<WikiInterfaces.WikiV2[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              WikiInterfaces.TypeInfo.WikiV2,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the wiki corresponding to the wiki ID or wiki name provided.
     * 
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {string} project - Project ID or project name
     */
    public async getWiki(
        wikiIdentifier: string,
        project?: string
        ): Promise<WikiInterfaces.WikiV2> {

        return new Promise<WikiInterfaces.WikiV2>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "wiki",
                    "288d122c-dbd4-451d-aa5f-7dbbba070728",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WikiInterfaces.WikiV2>;
                res = await this.rest.get<WikiInterfaces.WikiV2>(url, options);

                let ret = this.formatResponse(res.result,
                                              WikiInterfaces.TypeInfo.WikiV2,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Updates the wiki corresponding to the wiki ID or wiki name provided using the update parameters.
     * 
     * @param {WikiInterfaces.WikiUpdateParameters} updateParameters - Update parameters.
     * @param {string} wikiIdentifier - Wiki ID or wiki name.
     * @param {string} project - Project ID or project name
     */
    public async updateWiki(
        updateParameters: WikiInterfaces.WikiUpdateParameters,
        wikiIdentifier: string,
        project?: string
        ): Promise<WikiInterfaces.WikiV2> {

        return new Promise<WikiInterfaces.WikiV2>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                wikiIdentifier: wikiIdentifier
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "wiki",
                    "288d122c-dbd4-451d-aa5f-7dbbba070728",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<WikiInterfaces.WikiV2>;
                res = await this.rest.update<WikiInterfaces.WikiV2>(url, updateParameters, options);

                let ret = this.formatResponse(res.result,
                                              WikiInterfaces.TypeInfo.WikiV2,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
