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
import FileContainerInterfaces = require("./interfaces/FileContainerInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IFileContainerApiBase extends basem.ClientApiBase {
    createItems(items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope?: string): Promise<FileContainerInterfaces.FileContainerItem[]>;
    deleteItem(containerId: number, itemPath: string, scope?: string): Promise<void>;
    getContainers(scope?: string, artifactUris?: string): Promise<FileContainerInterfaces.FileContainer[]>;
    getItems(containerId: number, scope?: string, itemPath?: string, metadata?: boolean, format?: string, downloadFileName?: string, includeDownloadTickets?: boolean, isShallow?: boolean, ignoreRequestedMediaType?: boolean, includeBlobMetadata?: boolean, saveAbsolutePath?: boolean, preferRedirect?: boolean): Promise<FileContainerInterfaces.FileContainerItem[]>;
}

export class FileContainerApiBase extends basem.ClientApiBase implements IFileContainerApiBase {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-FileContainer-api', options);
    }

    /**
     * Creates the specified items in the referenced container.
     * 
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>} items
     * @param {number} containerId
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     */
    public async createItems(
        items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>,
        containerId: number,
        scope?: string
        ): Promise<FileContainerInterfaces.FileContainerItem[]> {

        return new Promise<FileContainerInterfaces.FileContainerItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                containerId: containerId
            };

            let queryValues: any = {
                scope: scope,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "Container",
                    "e4f5c81e-e250-447b-9fef-bd48471bea5e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FileContainerInterfaces.FileContainerItem[]>;
                res = await this.rest.create<FileContainerInterfaces.FileContainerItem[]>(url, items, options);

                let ret = this.formatResponse(res.result,
                                              FileContainerInterfaces.TypeInfo.FileContainerItem,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Deletes the specified items in a container.
     * 
     * @param {number} containerId - Container Id.
     * @param {string} itemPath - Path to delete.
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     */
    public async deleteItem(
        containerId: number,
        itemPath: string,
        scope?: string
        ): Promise<void> {
        if (itemPath == null) {
            throw new TypeError('itemPath can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                containerId: containerId
            };

            let queryValues: any = {
                itemPath: itemPath,
                scope: scope,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "Container",
                    "e4f5c81e-e250-447b-9fef-bd48471bea5e",
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
     * Gets containers filtered by a comma separated list of artifact uris within the same scope, if not specified returns all containers
     * 
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param {string} artifactUris
     */
    public async getContainers(
        scope?: string,
        artifactUris?: string
        ): Promise<FileContainerInterfaces.FileContainer[]> {

        return new Promise<FileContainerInterfaces.FileContainer[]>(async (resolve, reject) => {
            let routeValues: any = {
            };

            let queryValues: any = {
                scope: scope,
                artifactUris: artifactUris,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "Container",
                    "e4f5c81e-e250-447b-9fef-bd48471bea5e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FileContainerInterfaces.FileContainer[]>;
                res = await this.rest.get<FileContainerInterfaces.FileContainer[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FileContainerInterfaces.TypeInfo.FileContainer,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the specified file container object in a format dependent upon the given parameters or HTTP Accept request header
     * 
     * @param {number} containerId - The requested container Id
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param {string} itemPath - The path to the item of interest
     * @param {boolean} metadata - If true, this overrides any specified format parameter or HTTP Accept request header to provide non-recursive information for the given itemPath
     * @param {string} format - If specified, this overrides the HTTP Accept request header to return either 'json' or 'zip'.  If $format is specified, then api-version should also be specified as a query parameter.
     * @param {string} downloadFileName - If specified and returning other than JSON format, then this download name will be used (else defaults to itemPath)
     * @param {boolean} includeDownloadTickets
     * @param {boolean} isShallow - If true, returns only immediate children(files & folders) for the given itemPath. False will return all items recursively within itemPath.
     * @param {boolean} ignoreRequestedMediaType - Set to true to ignore the HTTP Accept request header. Default is false.
     * @param {boolean} includeBlobMetadata
     * @param {boolean} saveAbsolutePath - Set to false to not save the absolute path to the specified directory of the artifact in the returned archive. Works only for artifact directories. Default is true.
     * @param {boolean} preferRedirect - Set to true to get the redirect response which leads to the stream with content. Default is false.
     */
    public async getItems(
        containerId: number,
        scope?: string,
        itemPath?: string,
        metadata?: boolean,
        format?: string,
        downloadFileName?: string,
        includeDownloadTickets?: boolean,
        isShallow?: boolean,
        ignoreRequestedMediaType?: boolean,
        includeBlobMetadata?: boolean,
        saveAbsolutePath?: boolean,
        preferRedirect?: boolean
        ): Promise<FileContainerInterfaces.FileContainerItem[]> {

        return new Promise<FileContainerInterfaces.FileContainerItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                containerId: containerId
            };

            let queryValues: any = {
                scope: scope,
                itemPath: itemPath,
                metadata: metadata,
                '$format': format,
                downloadFileName: downloadFileName,
                includeDownloadTickets: includeDownloadTickets,
                isShallow: isShallow,
                ignoreRequestedMediaType: ignoreRequestedMediaType,
                includeBlobMetadata: includeBlobMetadata,
                saveAbsolutePath: saveAbsolutePath,
                preferRedirect: preferRedirect,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.2-preview.4",
                    "Container",
                    "e4f5c81e-e250-447b-9fef-bd48471bea5e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<FileContainerInterfaces.FileContainerItem[]>;
                res = await this.rest.get<FileContainerInterfaces.FileContainerItem[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              FileContainerInterfaces.TypeInfo.FileContainerItem,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
