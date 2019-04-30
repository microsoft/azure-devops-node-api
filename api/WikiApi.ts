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
import WikiInterfaces = require("./interfaces/WikiInterfaces");

export interface IWikiApi extends basem.ClientApiBase {
    getPageText(project: string, wikiIdentifier: string, path?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    getPageZip(project: string, wikiIdentifier: string, path?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    getPageByIdText(project: string, wikiIdentifier: string, id: number, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    getPageByIdZip(project: string, wikiIdentifier: string, id: number, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
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
     * Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki Id or name.
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
                    "5.1-preview.1",
                    "wiki",
                    "25d3fbc7-fe3d-46cb-b5a5-0b6f79caf27b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
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
     * Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki Id or name.
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
                    "5.1-preview.1",
                    "wiki",
                    "25d3fbc7-fe3d-46cb-b5a5-0b6f79caf27b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
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
     * Gets metadata or content of the wiki page for the provided page id. Content negotiation is done based on the `Accept` header sent in the request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki Id or name.
     * @param {number} id - Wiki page id.
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
                    "5.1-preview.1",
                    "wiki",
                    "ceddcf75-1068-452d-8b13-2d4d76e1f970",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
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
     * Gets metadata or content of the wiki page for the provided page id. Content negotiation is done based on the `Accept` header sent in the request.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki Id or name.
     * @param {number} id - Wiki page id.
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
                    "5.1-preview.1",
                    "wiki",
                    "ceddcf75-1068-452d-8b13-2d4d76e1f970",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
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
     * Creates a new page view stats resource or updates an existing page view stats resource.
     * 
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki name or Id.
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
                    "5.1-preview.1",
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
                    "5.1-preview.2",
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
     * Deletes the wiki corresponding to the wiki name or Id provided.
     * 
     * @param {string} wikiIdentifier - Wiki name or Id.
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
                    "5.1-preview.2",
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
                    "5.1-preview.2",
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
     * Gets the wiki corresponding to the wiki name or Id provided.
     * 
     * @param {string} wikiIdentifier - Wiki name or id.
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
                    "5.1-preview.2",
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
     * Updates the wiki corresponding to the wiki Id or name provided using the update parameters.
     * 
     * @param {WikiInterfaces.WikiUpdateParameters} updateParameters - Update parameters.
     * @param {string} wikiIdentifier - Wiki name or Id.
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
                    "5.1-preview.2",
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
