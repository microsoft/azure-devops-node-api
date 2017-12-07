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
import TfvcInterfaces = require("./interfaces/TfvcInterfaces");

export interface ITfvcApi extends basem.ClientApiBase {
    getBranch(path: string, project?: string, includeParent?: boolean, includeChildren?: boolean): Promise<TfvcInterfaces.TfvcBranch>;
    getBranches(project?: string, includeParent?: boolean, includeChildren?: boolean, includeDeleted?: boolean, includeLinks?: boolean): Promise<TfvcInterfaces.TfvcBranch[]>;
    getBranchRefs(scopePath: string, project?: string, includeDeleted?: boolean, includeLinks?: boolean): Promise<TfvcInterfaces.TfvcBranchRef[]>;
    getChangesetChanges(id?: number, skip?: number, top?: number): Promise<TfvcInterfaces.TfvcChange[]>;
    createChangeset(changeset: TfvcInterfaces.TfvcChangeset, project?: string): Promise<TfvcInterfaces.TfvcChangesetRef>;
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria): Promise<TfvcInterfaces.TfvcChangeset>;
    getChangesets(project?: string, maxCommentLength?: number, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria): Promise<TfvcInterfaces.TfvcChangesetRef[]>;
    getBatchedChangesets(changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData): Promise<TfvcInterfaces.TfvcChangesetRef[]>;
    getChangesetWorkItems(id?: number): Promise<TfvcInterfaces.AssociatedWorkItem[]>;
    getItemsBatch(itemRequestData: TfvcInterfaces.TfvcItemRequestData, project?: string): Promise<TfvcInterfaces.TfvcItem[][]>;
    getItemsBatchZip(itemRequestData: TfvcInterfaces.TfvcItemRequestData, project?: string): Promise<NodeJS.ReadableStream>;
    getItem(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Promise<TfvcInterfaces.TfvcItem>;
    getItemContent(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Promise<NodeJS.ReadableStream>;
    getItems(project?: string, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, includeLinks?: boolean, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Promise<TfvcInterfaces.TfvcItem[]>;
    getItemText(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Promise<NodeJS.ReadableStream>;
    getItemZip(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Promise<NodeJS.ReadableStream>;
    getLabelItems(labelId: string, top?: number, skip?: number): Promise<TfvcInterfaces.TfvcItem[]>;
    getLabel(labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string): Promise<TfvcInterfaces.TfvcLabel>;
    getLabels(requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string, top?: number, skip?: number): Promise<TfvcInterfaces.TfvcLabelRef[]>;
    getShelvesetChanges(shelvesetId: string, top?: number, skip?: number): Promise<TfvcInterfaces.TfvcChange[]>;
    getShelveset(shelvesetId: string, requestData?: TfvcInterfaces.TfvcShelvesetRequestData): Promise<TfvcInterfaces.TfvcShelveset>;
    getShelvesets(requestData?: TfvcInterfaces.TfvcShelvesetRequestData, top?: number, skip?: number): Promise<TfvcInterfaces.TfvcShelvesetRef[]>;
    getShelvesetWorkItems(shelvesetId: string): Promise<TfvcInterfaces.AssociatedWorkItem[]>;
}

export class TfvcApi extends basem.ClientApiBase implements ITfvcApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Tfvc-api', options);
    }

    /**
     * Get a single branch hierarchy at the given path with parents or children as specified.
     * 
     * @param {string} path - Full path to the branch.  Default: $/ Examples: $/, $/MyProject, $/MyProject/SomeFolder.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent - Return the parent branch, if there is one. Default: False
     * @param {boolean} includeChildren - Return child branches, if there are any. Default: False
     */
    public async getBranch(
        path: string,
        project?: string,
        includeParent?: boolean,
        includeChildren?: boolean
        ): Promise<TfvcInterfaces.TfvcBranch> {

        return new Promise<TfvcInterfaces.TfvcBranch>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                path: path,
                includeParent: includeParent,
                includeChildren: includeChildren,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "bc1f417e-239d-42e7-85e1-76e80cb2d6eb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcBranch>;
                res = await this.rest.get<TfvcInterfaces.TfvcBranch>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcBranch,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a collection of branch roots -- first-level children, branches with no parents.
     * 
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent - Return the parent branch, if there is one. Default: False
     * @param {boolean} includeChildren - Return the child branches for each root branch. Default: False
     * @param {boolean} includeDeleted - Return deleted branches. Default: False
     * @param {boolean} includeLinks - Return links. Default: False
     */
    public async getBranches(
        project?: string,
        includeParent?: boolean,
        includeChildren?: boolean,
        includeDeleted?: boolean,
        includeLinks?: boolean
        ): Promise<TfvcInterfaces.TfvcBranch[]> {

        return new Promise<TfvcInterfaces.TfvcBranch[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                includeParent: includeParent,
                includeChildren: includeChildren,
                includeDeleted: includeDeleted,
                includeLinks: includeLinks,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "bc1f417e-239d-42e7-85e1-76e80cb2d6eb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcBranch[]>;
                res = await this.rest.get<TfvcInterfaces.TfvcBranch[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcBranch,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get branch hierarchies below the specified scopePath
     * 
     * @param {string} scopePath - Full path to the branch.  Default: $/ Examples: $/, $/MyProject, $/MyProject/SomeFolder.
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted - Return deleted branches. Default: False
     * @param {boolean} includeLinks - Return links. Default: False
     */
    public async getBranchRefs(
        scopePath: string,
        project?: string,
        includeDeleted?: boolean,
        includeLinks?: boolean
        ): Promise<TfvcInterfaces.TfvcBranchRef[]> {

        return new Promise<TfvcInterfaces.TfvcBranchRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                scopePath: scopePath,
                includeDeleted: includeDeleted,
                includeLinks: includeLinks,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "bc1f417e-239d-42e7-85e1-76e80cb2d6eb",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcBranchRef[]>;
                res = await this.rest.get<TfvcInterfaces.TfvcBranchRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcBranchRef,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve Tfvc changes for a given changeset.
     * 
     * @param {number} id - ID of the changeset. Default: null
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     */
    public async getChangesetChanges(
        id?: number,
        skip?: number,
        top?: number
        ): Promise<TfvcInterfaces.TfvcChange[]> {

        return new Promise<TfvcInterfaces.TfvcChange[]>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            let queryValues: any = {
                '$skip': skip,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "f32b86f2-15b9-4fe6-81b1-6f8938617ee5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcChange[]>;
                res = await this.rest.get<TfvcInterfaces.TfvcChange[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcChange,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a new changeset.
     * 
     * @param {TfvcInterfaces.TfvcChangeset} changeset
     * @param {string} project - Project ID or project name
     */
    public async createChangeset(
        changeset: TfvcInterfaces.TfvcChangeset,
        project?: string
        ): Promise<TfvcInterfaces.TfvcChangesetRef> {

        return new Promise<TfvcInterfaces.TfvcChangesetRef>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.3",
                    "tfvc",
                    "0bc8f0a4-6bfb-42a9-ba84-139da7b99c49",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcChangesetRef>;
                res = await this.rest.create<TfvcInterfaces.TfvcChangesetRef>(url, changeset, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcChangesetRef,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve a Tfvc Changeset
     * 
     * @param {number} id - Changeset Id to retrieve.
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount - Number of changes to return (maximum 100 changes) Default: 0
     * @param {boolean} includeDetails - Include policy details and check-in notes in the response. Default: false
     * @param {boolean} includeWorkItems - Include workitems. Default: false
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {boolean} includeSourceRename - Include renames.  Default: false
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TfvcInterfaces.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     */
    public async getChangeset(
        id: number,
        project?: string,
        maxChangeCount?: number,
        includeDetails?: boolean,
        includeWorkItems?: boolean,
        maxCommentLength?: number,
        includeSourceRename?: boolean,
        skip?: number,
        top?: number,
        orderby?: string,
        searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria
        ): Promise<TfvcInterfaces.TfvcChangeset> {

        return new Promise<TfvcInterfaces.TfvcChangeset>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                id: id
            };

            let queryValues: any = {
                maxChangeCount: maxChangeCount,
                includeDetails: includeDetails,
                includeWorkItems: includeWorkItems,
                maxCommentLength: maxCommentLength,
                includeSourceRename: includeSourceRename,
                '$skip': skip,
                '$top': top,
                '$orderby': orderby,
                searchCriteria: searchCriteria,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.3",
                    "tfvc",
                    "0bc8f0a4-6bfb-42a9-ba84-139da7b99c49",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcChangeset>;
                res = await this.rest.get<TfvcInterfaces.TfvcChangeset>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcChangeset,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieve Tfvc Changesets
     * 
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength - Include details about associated work items in the response. Default: null
     * @param {number} skip - Number of results to skip. Default: null
     * @param {number} top - The maximum number of results to return. Default: null
     * @param {string} orderby - Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
     * @param {TfvcInterfaces.TfvcChangesetSearchCriteria} searchCriteria - Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
     */
    public async getChangesets(
        project?: string,
        maxCommentLength?: number,
        skip?: number,
        top?: number,
        orderby?: string,
        searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria
        ): Promise<TfvcInterfaces.TfvcChangesetRef[]> {

        return new Promise<TfvcInterfaces.TfvcChangesetRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                maxCommentLength: maxCommentLength,
                '$skip': skip,
                '$top': top,
                '$orderby': orderby,
                searchCriteria: searchCriteria,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.3",
                    "tfvc",
                    "0bc8f0a4-6bfb-42a9-ba84-139da7b99c49",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcChangesetRef[]>;
                res = await this.rest.get<TfvcInterfaces.TfvcChangesetRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcChangesetRef,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns changesets for a given list of changeset Ids.
     * 
     * @param {TfvcInterfaces.TfvcChangesetsRequestData} changesetsRequestData - List of changeset IDs.
     */
    public async getBatchedChangesets(
        changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData
        ): Promise<TfvcInterfaces.TfvcChangesetRef[]> {

        return new Promise<TfvcInterfaces.TfvcChangesetRef[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "b7e7c173-803c-4fea-9ec8-31ee35c5502a",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcChangesetRef[]>;
                res = await this.rest.create<TfvcInterfaces.TfvcChangesetRef[]>(url, changesetsRequestData, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcChangesetRef,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Retrieves the work items associated with a particular changeset.
     * 
     * @param {number} id - ID of the changeset. Default: null
     */
    public async getChangesetWorkItems(
        id?: number
        ): Promise<TfvcInterfaces.AssociatedWorkItem[]> {

        return new Promise<TfvcInterfaces.AssociatedWorkItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "64ae0bea-1d71-47c9-a9e5-fe73f5ea0ff4",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.AssociatedWorkItem[]>;
                res = await this.rest.get<TfvcInterfaces.AssociatedWorkItem[]>(url, options);

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
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     * 
     * @param {TfvcInterfaces.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     */
    public async getItemsBatch(
        itemRequestData: TfvcInterfaces.TfvcItemRequestData,
        project?: string
        ): Promise<TfvcInterfaces.TfvcItem[][]> {

        return new Promise<TfvcInterfaces.TfvcItem[][]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "fe6f827b-5f64-480f-b8af-1eca3b80e833",
                    routeValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcItem[][]>;
                res = await this.rest.create<TfvcInterfaces.TfvcItem[][]>(url, itemRequestData, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcItem,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     * 
     * @param {TfvcInterfaces.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     */
    public async getItemsBatchZip(
        itemRequestData: TfvcInterfaces.TfvcItemRequestData,
        project?: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "fe6f827b-5f64-480f-b8af-1eca3b80e833",
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
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} path - Version control path of an individual item to return.
     * @param {string} project - Project ID or project name
     * @param {string} fileName - file name of item returned.
     * @param {boolean} download - If true, create a downloadable attachment.
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public async getItem(
        path: string,
        project?: string,
        fileName?: string,
        download?: boolean,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
        ): Promise<TfvcInterfaces.TfvcItem> {

        return new Promise<TfvcInterfaces.TfvcItem>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                path: path,
                fileName: fileName,
                download: download,
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                versionDescriptor: versionDescriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "ba9fc436-9a38-4578-89d6-e4f3241f5040",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcItem>;
                res = await this.rest.get<TfvcInterfaces.TfvcItem>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcItem,
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
     * @param {string} path - Version control path of an individual item to return.
     * @param {string} project - Project ID or project name
     * @param {string} fileName - file name of item returned.
     * @param {boolean} download - If true, create a downloadable attachment.
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public async getItemContent(
        path: string,
        project?: string,
        fileName?: string,
        download?: boolean,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                path: path,
                fileName: fileName,
                download: download,
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                versionDescriptor: versionDescriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "ba9fc436-9a38-4578-89d6-e4f3241f5040",
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
     * Get a list of Tfvc items
     * 
     * @param {string} project - Project ID or project name
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {boolean} includeLinks - True to include links.
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public async getItems(
        project?: string,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        includeLinks?: boolean,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
        ): Promise<TfvcInterfaces.TfvcItem[]> {

        return new Promise<TfvcInterfaces.TfvcItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                includeLinks: includeLinks,
                versionDescriptor: versionDescriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "ba9fc436-9a38-4578-89d6-e4f3241f5040",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcItem[]>;
                res = await this.rest.get<TfvcInterfaces.TfvcItem[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcItem,
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
     * @param {string} path - Version control path of an individual item to return.
     * @param {string} project - Project ID or project name
     * @param {string} fileName - file name of item returned.
     * @param {boolean} download - If true, create a downloadable attachment.
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public async getItemText(
        path: string,
        project?: string,
        fileName?: string,
        download?: boolean,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                path: path,
                fileName: fileName,
                download: download,
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                versionDescriptor: versionDescriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "ba9fc436-9a38-4578-89d6-e4f3241f5040",
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
     * @param {string} path - Version control path of an individual item to return.
     * @param {string} project - Project ID or project name
     * @param {string} fileName - file name of item returned.
     * @param {boolean} download - If true, create a downloadable attachment.
     * @param {string} scopePath - Version control path of a folder to return multiple items.
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel - None (just the item), or OneLevel (contents of a folder).
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public async getItemZip(
        path: string,
        project?: string,
        fileName?: string,
        download?: boolean,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                path: path,
                fileName: fileName,
                download: download,
                scopePath: scopePath,
                recursionLevel: recursionLevel,
                versionDescriptor: versionDescriptor,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "ba9fc436-9a38-4578-89d6-e4f3241f5040",
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
     * Get items under a label.
     * 
     * @param {string} labelId - Unique identifier of label
     * @param {number} top - Max number of items to return
     * @param {number} skip - Number of items to skip
     */
    public async getLabelItems(
        labelId: string,
        top?: number,
        skip?: number
        ): Promise<TfvcInterfaces.TfvcItem[]> {

        return new Promise<TfvcInterfaces.TfvcItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                labelId: labelId
            };

            let queryValues: any = {
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "06166e34-de17-4b60-8cd1-23182a346fda",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcItem[]>;
                res = await this.rest.get<TfvcInterfaces.TfvcItem[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcItem,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a single deep label.
     * 
     * @param {string} labelId - Unique identifier of label
     * @param {TfvcInterfaces.TfvcLabelRequestData} requestData - maxItemCount
     * @param {string} project - Project ID or project name
     */
    public async getLabel(
        labelId: string,
        requestData: TfvcInterfaces.TfvcLabelRequestData,
        project?: string
        ): Promise<TfvcInterfaces.TfvcLabel> {

        return new Promise<TfvcInterfaces.TfvcLabel>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                labelId: labelId
            };

            let queryValues: any = {
                requestData: requestData,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "a5d9bd7f-b661-4d0e-b9be-d9c16affae54",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcLabel>;
                res = await this.rest.get<TfvcInterfaces.TfvcLabel>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcLabel,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a collection of shallow label references.
     * 
     * @param {TfvcInterfaces.TfvcLabelRequestData} requestData - labelScope, name, owner, and itemLabelFilter
     * @param {string} project - Project ID or project name
     * @param {number} top - Max number of labels to return
     * @param {number} skip - Number of labels to skip
     */
    public async getLabels(
        requestData: TfvcInterfaces.TfvcLabelRequestData,
        project?: string,
        top?: number,
        skip?: number
        ): Promise<TfvcInterfaces.TfvcLabelRef[]> {

        return new Promise<TfvcInterfaces.TfvcLabelRef[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                requestData: requestData,
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "a5d9bd7f-b661-4d0e-b9be-d9c16affae54",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcLabelRef[]>;
                res = await this.rest.get<TfvcInterfaces.TfvcLabelRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcLabelRef,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get changes included in a shelveset.
     * 
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {number} top - Max number of changes to return
     * @param {number} skip - Number of changes to skip
     */
    public async getShelvesetChanges(
        shelvesetId: string,
        top?: number,
        skip?: number
        ): Promise<TfvcInterfaces.TfvcChange[]> {

        return new Promise<TfvcInterfaces.TfvcChange[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                shelvesetId: shelvesetId,
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "dbaf075b-0445-4c34-9e5b-82292f856522",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcChange[]>;
                res = await this.rest.get<TfvcInterfaces.TfvcChange[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcChange,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get a single deep shelveset.
     * 
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {TfvcInterfaces.TfvcShelvesetRequestData} requestData - includeDetails, includeWorkItems, maxChangeCount, and maxCommentLength
     */
    public async getShelveset(
        shelvesetId: string,
        requestData?: TfvcInterfaces.TfvcShelvesetRequestData
        ): Promise<TfvcInterfaces.TfvcShelveset> {

        return new Promise<TfvcInterfaces.TfvcShelveset>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                shelvesetId: shelvesetId,
                requestData: requestData,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "e36d44fb-e907-4b0a-b194-f83f1ed32ad3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcShelveset>;
                res = await this.rest.get<TfvcInterfaces.TfvcShelveset>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcShelveset,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Return a collection of shallow shelveset references.
     * 
     * @param {TfvcInterfaces.TfvcShelvesetRequestData} requestData - name, owner, and maxCommentLength
     * @param {number} top - Max number of shelvesets to return
     * @param {number} skip - Number of shelvesets to skip
     */
    public async getShelvesets(
        requestData?: TfvcInterfaces.TfvcShelvesetRequestData,
        top?: number,
        skip?: number
        ): Promise<TfvcInterfaces.TfvcShelvesetRef[]> {

        return new Promise<TfvcInterfaces.TfvcShelvesetRef[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                requestData: requestData,
                '$top': top,
                '$skip': skip,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "e36d44fb-e907-4b0a-b194-f83f1ed32ad3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.TfvcShelvesetRef[]>;
                res = await this.rest.get<TfvcInterfaces.TfvcShelvesetRef[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TfvcInterfaces.TypeInfo.TfvcShelvesetRef,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get work items associated with a shelveset.
     * 
     * @param {string} shelvesetId - Shelveset's unique ID
     */
    public async getShelvesetWorkItems(
        shelvesetId: string
        ): Promise<TfvcInterfaces.AssociatedWorkItem[]> {

        return new Promise<TfvcInterfaces.AssociatedWorkItem[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                shelvesetId: shelvesetId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.1-preview.1",
                    "tfvc",
                    "a7a0c1c1-373e-425a-b031-a519474d743d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TfvcInterfaces.AssociatedWorkItem[]>;
                res = await this.rest.get<TfvcInterfaces.AssociatedWorkItem[]>(url, options);

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

}
