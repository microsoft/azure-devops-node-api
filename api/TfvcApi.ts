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
import TfvcInterfaces = require("./interfaces/TfvcInterfaces");

export interface ITfvcApi extends basem.ClientApiBase {
    getBranch(path: string, project?: string, includeParent?: boolean, includeChildren?: boolean): Q.Promise<TfvcInterfaces.TfvcBranch>;
    getBranches(project?: string, includeParent?: boolean, includeChildren?: boolean, includeDeleted?: boolean, includeLinks?: boolean): Q.Promise<TfvcInterfaces.TfvcBranch[]>;
    getBranchRefs(scopePath: string, project?: string, includeDeleted?: boolean, includeLinks?: boolean): Q.Promise<TfvcInterfaces.TfvcBranchRef[]>;
    getChangesetChanges(id?: number, skip?: number, top?: number): Q.Promise<TfvcInterfaces.TfvcChange[]>;
    createChangeset(changeset: TfvcInterfaces.TfvcChangeset, project?: string): Q.Promise<TfvcInterfaces.TfvcChangesetRef>;
    getChangeset(id: number, project?: string, maxChangeCount?: number, includeDetails?: boolean, includeWorkItems?: boolean, maxCommentLength?: number, includeSourceRename?: boolean, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria): Q.Promise<TfvcInterfaces.TfvcChangeset>;
    getChangesets(project?: string, maxCommentLength?: number, skip?: number, top?: number, orderby?: string, searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>;
    getBatchedChangesets(changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>;
    getChangesetWorkItems(id?: number): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>;
    getItemsBatch(itemRequestData: TfvcInterfaces.TfvcItemRequestData, project?: string): Q.Promise<TfvcInterfaces.TfvcItem[][]>;
    getItemsBatchZip(itemRequestData: TfvcInterfaces.TfvcItemRequestData, project?: string): Q.Promise<NodeJS.ReadableStream>;
    getItem(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Q.Promise<TfvcInterfaces.TfvcItem>;
    getItemContent(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Q.Promise<NodeJS.ReadableStream>;
    getItems(project?: string, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, includeLinks?: boolean, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Q.Promise<TfvcInterfaces.TfvcItem[]>;
    getItemText(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Q.Promise<NodeJS.ReadableStream>;
    getItemZip(path: string, project?: string, fileName?: string, download?: boolean, scopePath?: string, recursionLevel?: TfvcInterfaces.VersionControlRecursionType, versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor): Q.Promise<NodeJS.ReadableStream>;
    getLabelItems(labelId: string, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcItem[]>;
    getLabel(labelId: string, requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string): Q.Promise<TfvcInterfaces.TfvcLabel>;
    getLabels(requestData: TfvcInterfaces.TfvcLabelRequestData, project?: string, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcLabelRef[]>;
    getShelvesetChanges(shelvesetId: string, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcChange[]>;
    getShelveset(shelvesetId: string, requestData: TfvcInterfaces.TfvcShelvesetRequestData): Q.Promise<TfvcInterfaces.TfvcShelveset>;
    getShelvesets(requestData: TfvcInterfaces.TfvcShelvesetRequestData, top?: number, skip?: number): Q.Promise<TfvcInterfaces.TfvcShelvesetRef[]>;
    getShelvesetWorkItems(shelvesetId: string): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>;
}

export class TfvcApi extends basem.ClientApiBase implements ITfvcApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Tfvc-api');
    }

    /**
     * Get a single branch hierarchy at the given path with parents or children (if specified)
     * 
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent
     * @param {boolean} includeChildren
     */
    public getBranch(
        path: string,
        project?: string,
        includeParent?: boolean,
        includeChildren?: boolean
        ): Q.Promise<TfvcInterfaces.TfvcBranch> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcBranch>();

        var onResult = (err: any, statusCode: number, Branche: TfvcInterfaces.TfvcBranch) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Branche);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            path: path,
            includeParent: includeParent,
            includeChildren: includeChildren,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "bc1f417e-239d-42e7-85e1-76e80cb2d6eb", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcBranch, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcBranch>>deferred.promise;
    }

    /**
     * Get a collection of branch roots -- first-level children, branches with no parents
     * 
     * @param {string} project - Project ID or project name
     * @param {boolean} includeParent
     * @param {boolean} includeChildren
     * @param {boolean} includeDeleted
     * @param {boolean} includeLinks
     */
    public getBranches(
        project?: string,
        includeParent?: boolean,
        includeChildren?: boolean,
        includeDeleted?: boolean,
        includeLinks?: boolean
        ): Q.Promise<TfvcInterfaces.TfvcBranch[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcBranch[]>();

        var onResult = (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranch[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Branches);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            includeParent: includeParent,
            includeChildren: includeChildren,
            includeDeleted: includeDeleted,
            includeLinks: includeLinks,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "bc1f417e-239d-42e7-85e1-76e80cb2d6eb", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcBranch, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcBranch[]>>deferred.promise;
    }

    /**
     * Get branch hierarchies below the specified scopePath
     * 
     * @param {string} scopePath
     * @param {string} project - Project ID or project name
     * @param {boolean} includeDeleted
     * @param {boolean} includeLinks
     */
    public getBranchRefs(
        scopePath: string,
        project?: string,
        includeDeleted?: boolean,
        includeLinks?: boolean
        ): Q.Promise<TfvcInterfaces.TfvcBranchRef[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcBranchRef[]>();

        var onResult = (err: any, statusCode: number, Branches: TfvcInterfaces.TfvcBranchRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Branches);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            scopePath: scopePath,
            includeDeleted: includeDeleted,
            includeLinks: includeLinks,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "bc1f417e-239d-42e7-85e1-76e80cb2d6eb", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcBranchRef, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcBranchRef[]>>deferred.promise;
    }

    /**
     * Retrieve Tfvc changes for a given changeset
     * 
     * @param {number} id
     * @param {number} skip
     * @param {number} top
     */
    public getChangesetChanges(
        id?: number,
        skip?: number,
        top?: number
        ): Q.Promise<TfvcInterfaces.TfvcChange[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcChange[]>();

        var onResult = (err: any, statusCode: number, ChangesetChanges: TfvcInterfaces.TfvcChange[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ChangesetChanges);
            }
        };

        var routeValues: any = {
            id: id
        };

        var queryValues: any = {
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "f32b86f2-15b9-4fe6-81b1-6f8938617ee5", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcChange, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcChange[]>>deferred.promise;
    }

    /**
     * @param {TfvcInterfaces.TfvcChangeset} changeset
     * @param {string} project - Project ID or project name
     */
    public createChangeset(
        changeset: TfvcInterfaces.TfvcChangeset,
        project?: string
        ): Q.Promise<TfvcInterfaces.TfvcChangesetRef> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcChangesetRef>();

        var onResult = (err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangesetRef) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Changeset);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "tfvc", "0bc8f0a4-6bfb-42a9-ba84-139da7b99c49", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TfvcInterfaces.TypeInfo.TfvcChangeset, responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcChangesetRef, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, changeset, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcChangesetRef>>deferred.promise;
    }

    /**
     * Retrieve a Tfvc Changeset
     * 
     * @param {number} id
     * @param {string} project - Project ID or project name
     * @param {number} maxChangeCount
     * @param {boolean} includeDetails
     * @param {boolean} includeWorkItems
     * @param {number} maxCommentLength
     * @param {boolean} includeSourceRename
     * @param {number} skip
     * @param {number} top
     * @param {string} orderby
     * @param {TfvcInterfaces.TfvcChangesetSearchCriteria} searchCriteria
     */
    public getChangeset(
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
        ): Q.Promise<TfvcInterfaces.TfvcChangeset> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcChangeset>();

        var onResult = (err: any, statusCode: number, Changeset: TfvcInterfaces.TfvcChangeset) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Changeset);
            }
        };

        var routeValues: any = {
            project: project,
            id: id
        };

        var queryValues: any = {
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
        
        this.vsoClient.getVersioningData("3.0-preview.2", "tfvc", "0bc8f0a4-6bfb-42a9-ba84-139da7b99c49", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcChangeset, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcChangeset>>deferred.promise;
    }

    /**
     * Retrieve Tfvc changesets
     * 
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @param {string} orderby
     * @param {TfvcInterfaces.TfvcChangesetSearchCriteria} searchCriteria
     */
    public getChangesets(
        project?: string,
        maxCommentLength?: number,
        skip?: number,
        top?: number,
        orderby?: string,
        searchCriteria?: TfvcInterfaces.TfvcChangesetSearchCriteria
        ): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcChangesetRef[]>();

        var onResult = (err: any, statusCode: number, Changesets: TfvcInterfaces.TfvcChangesetRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Changesets);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            maxCommentLength: maxCommentLength,
            '$skip': skip,
            '$top': top,
            '$orderby': orderby,
            searchCriteria: searchCriteria,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "tfvc", "0bc8f0a4-6bfb-42a9-ba84-139da7b99c49", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcChangesetRef, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>>deferred.promise;
    }

    /**
     * @param {TfvcInterfaces.TfvcChangesetsRequestData} changesetsRequestData
     */
    public getBatchedChangesets(
        changesetsRequestData: TfvcInterfaces.TfvcChangesetsRequestData
        ): Q.Promise<TfvcInterfaces.TfvcChangesetRef[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcChangesetRef[]>();

        var onResult = (err: any, statusCode: number, ChangesetsBatch: TfvcInterfaces.TfvcChangesetRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ChangesetsBatch);
            }
        };

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "b7e7c173-803c-4fea-9ec8-31ee35c5502a", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcChangesetRef, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, changesetsRequestData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcChangesetRef[]>>deferred.promise;
    }

    /**
     * @param {number} id
     */
    public getChangesetWorkItems(
        id?: number
        ): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]> {
    
        var deferred = Q.defer<TfvcInterfaces.AssociatedWorkItem[]>();

        var onResult = (err: any, statusCode: number, ChangesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ChangesetWorkItems);
            }
        };

        var routeValues: any = {
            id: id
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "64ae0bea-1d71-47c9-a9e5-fe73f5ea0ff4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>>deferred.promise;
    }

    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     * 
     * @param {TfvcInterfaces.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     */
    public getItemsBatch(
        itemRequestData: TfvcInterfaces.TfvcItemRequestData,
        project?: string
        ): Q.Promise<TfvcInterfaces.TfvcItem[][]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcItem[][]>();

        var onResult = (err: any, statusCode: number, ItemBatch: TfvcInterfaces.TfvcItem[][]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ItemBatch);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "fe6f827b-5f64-480f-b8af-1eca3b80e833", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TfvcInterfaces.TypeInfo.TfvcItemRequestData, responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcItem, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, itemRequestData, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcItem[][]>>deferred.promise;
    }

    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     * 
     * @param {TfvcInterfaces.TfvcItemRequestData} itemRequestData
     * @param {string} project - Project ID or project name
     */
    public getItemsBatchZip(
        itemRequestData: TfvcInterfaces.TfvcItemRequestData,
        project?: string
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        var onResult = (err: any, statusCode: number, ItemBatch: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ItemBatch);
            }
        };

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "fe6f827b-5f64-480f-b8af-1eca3b80e833", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = { requestTypeMetadata: TfvcInterfaces.TypeInfo.TfvcItemRequestData, responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public getItem(
        path: string,
        project?: string,
        fileName?: string,
        download?: boolean,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
        ): Q.Promise<TfvcInterfaces.TfvcItem> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcItem>();

        var onResult = (err: any, statusCode: number, Item: TfvcInterfaces.TfvcItem) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Item);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            path: path,
            fileName: fileName,
            download: download,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "ba9fc436-9a38-4578-89d6-e4f3241f5040", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcItem, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcItem>>deferred.promise;
    }

    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public getItemContent(
        path: string,
        project?: string,
        fileName?: string,
        download?: boolean,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
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
            project: project
        };

        var queryValues: any = {
            path: path,
            fileName: fileName,
            download: download,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "ba9fc436-9a38-4578-89d6-e4f3241f5040", routeValues, queryValues)
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
     * Get a list of Tfvc items
     * 
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeLinks
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public getItems(
        project?: string,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        includeLinks?: boolean,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
        ): Q.Promise<TfvcInterfaces.TfvcItem[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcItem[]>();

        var onResult = (err: any, statusCode: number, Items: TfvcInterfaces.TfvcItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Items);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeLinks: includeLinks,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "ba9fc436-9a38-4578-89d6-e4f3241f5040", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcItem, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcItem[]>>deferred.promise;
    }

    /**
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public getItemText(
        path: string,
        project?: string,
        fileName?: string,
        download?: boolean,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
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
            project: project
        };

        var queryValues: any = {
            path: path,
            fileName: fileName,
            download: download,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "ba9fc436-9a38-4578-89d6-e4f3241f5040", routeValues, queryValues)
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
     * Get Item Metadata and/or Content. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} fileName
     * @param {boolean} download
     * @param {string} scopePath
     * @param {TfvcInterfaces.VersionControlRecursionType} recursionLevel
     * @param {TfvcInterfaces.TfvcVersionDescriptor} versionDescriptor
     */
    public getItemZip(
        path: string,
        project?: string,
        fileName?: string,
        download?: boolean,
        scopePath?: string,
        recursionLevel?: TfvcInterfaces.VersionControlRecursionType,
        versionDescriptor?: TfvcInterfaces.TfvcVersionDescriptor
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
            project: project
        };

        var queryValues: any = {
            path: path,
            fileName: fileName,
            download: download,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            versionDescriptor: versionDescriptor,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "ba9fc436-9a38-4578-89d6-e4f3241f5040", routeValues, queryValues)
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
     * Get items under a label.
     * 
     * @param {string} labelId - Unique identifier of label
     * @param {number} top - Max number of items to return
     * @param {number} skip - Number of items to skip
     */
    public getLabelItems(
        labelId: string,
        top?: number,
        skip?: number
        ): Q.Promise<TfvcInterfaces.TfvcItem[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcItem[]>();

        var onResult = (err: any, statusCode: number, LabelItems: TfvcInterfaces.TfvcItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(LabelItems);
            }
        };

        var routeValues: any = {
            labelId: labelId
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "06166e34-de17-4b60-8cd1-23182a346fda", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcItem, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcItem[]>>deferred.promise;
    }

    /**
     * Get a single deep label.
     * 
     * @param {string} labelId - Unique identifier of label
     * @param {TfvcInterfaces.TfvcLabelRequestData} requestData - maxItemCount
     * @param {string} project - Project ID or project name
     */
    public getLabel(
        labelId: string,
        requestData: TfvcInterfaces.TfvcLabelRequestData,
        project?: string
        ): Q.Promise<TfvcInterfaces.TfvcLabel> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcLabel>();

        var onResult = (err: any, statusCode: number, Label: TfvcInterfaces.TfvcLabel) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Label);
            }
        };

        var routeValues: any = {
            project: project,
            labelId: labelId
        };

        var queryValues: any = {
            requestData: requestData,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "a5d9bd7f-b661-4d0e-b9be-d9c16affae54", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcLabel, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcLabel>>deferred.promise;
    }

    /**
     * Get a collection of shallow label references.
     * 
     * @param {TfvcInterfaces.TfvcLabelRequestData} requestData - labelScope, name, owner, and itemLabelFilter
     * @param {string} project - Project ID or project name
     * @param {number} top - Max number of labels to return
     * @param {number} skip - Number of labels to skip
     */
    public getLabels(
        requestData: TfvcInterfaces.TfvcLabelRequestData,
        project?: string,
        top?: number,
        skip?: number
        ): Q.Promise<TfvcInterfaces.TfvcLabelRef[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcLabelRef[]>();

        var onResult = (err: any, statusCode: number, Labels: TfvcInterfaces.TfvcLabelRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Labels);
            }
        };

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            requestData: requestData,
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "a5d9bd7f-b661-4d0e-b9be-d9c16affae54", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcLabelRef, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcLabelRef[]>>deferred.promise;
    }

    /**
     * Get changes included in a shelveset.
     * 
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {number} top - Max number of changes to return
     * @param {number} skip - Number of changes to skip
     */
    public getShelvesetChanges(
        shelvesetId: string,
        top?: number,
        skip?: number
        ): Q.Promise<TfvcInterfaces.TfvcChange[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcChange[]>();

        var onResult = (err: any, statusCode: number, ShelvesetChanges: TfvcInterfaces.TfvcChange[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ShelvesetChanges);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            shelvesetId: shelvesetId,
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "dbaf075b-0445-4c34-9e5b-82292f856522", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcChange, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcChange[]>>deferred.promise;
    }

    /**
     * Get a single deep shelveset.
     * 
     * @param {string} shelvesetId - Shelveset's unique ID
     * @param {TfvcInterfaces.TfvcShelvesetRequestData} requestData - includeDetails, includeWorkItems, maxChangeCount, and maxCommentLength
     */
    public getShelveset(
        shelvesetId: string,
        requestData: TfvcInterfaces.TfvcShelvesetRequestData
        ): Q.Promise<TfvcInterfaces.TfvcShelveset> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcShelveset>();

        var onResult = (err: any, statusCode: number, Shelveset: TfvcInterfaces.TfvcShelveset) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Shelveset);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            shelvesetId: shelvesetId,
            requestData: requestData,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "e36d44fb-e907-4b0a-b194-f83f1ed32ad3", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcShelveset, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcShelveset>>deferred.promise;
    }

    /**
     * Return a collection of shallow shelveset references.
     * 
     * @param {TfvcInterfaces.TfvcShelvesetRequestData} requestData - name, owner, and maxCommentLength
     * @param {number} top - Max number of shelvesets to return
     * @param {number} skip - Number of shelvesets to skip
     */
    public getShelvesets(
        requestData: TfvcInterfaces.TfvcShelvesetRequestData,
        top?: number,
        skip?: number
        ): Q.Promise<TfvcInterfaces.TfvcShelvesetRef[]> {
    
        var deferred = Q.defer<TfvcInterfaces.TfvcShelvesetRef[]>();

        var onResult = (err: any, statusCode: number, Shelvesets: TfvcInterfaces.TfvcShelvesetRef[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Shelvesets);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            requestData: requestData,
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "e36d44fb-e907-4b0a-b194-f83f1ed32ad3", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: TfvcInterfaces.TypeInfo.TfvcShelvesetRef, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.TfvcShelvesetRef[]>>deferred.promise;
    }

    /**
     * Get work items associated with a shelveset.
     * 
     * @param {string} shelvesetId - Shelveset's unique ID
     */
    public getShelvesetWorkItems(
        shelvesetId: string
        ): Q.Promise<TfvcInterfaces.AssociatedWorkItem[]> {
    
        var deferred = Q.defer<TfvcInterfaces.AssociatedWorkItem[]>();

        var onResult = (err: any, statusCode: number, ShelvesetWorkItems: TfvcInterfaces.AssociatedWorkItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ShelvesetWorkItems);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            shelvesetId: shelvesetId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "tfvc", "a7a0c1c1-373e-425a-b031-a519474d743d", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<TfvcInterfaces.AssociatedWorkItem[]>>deferred.promise;
    }

}
