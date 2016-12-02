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


import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import FileContainerInterfaces = require("./interfaces/FileContainerInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IFileContainerApiBase extends basem.ClientApiBase {
    createItems(items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope?: string): Promise<FileContainerInterfaces.FileContainerItem[]>;
    deleteItem(containerId: number, itemPath: string, scope?: string): Promise<void>;
    getContainers(scope?: string, artifactUris?: string): Promise<FileContainerInterfaces.FileContainer[]>;
    getItems(containerId: number, scope?: string, itemPath?: string, metadata?: boolean, format?: string, downloadFileName?: string, includeDownloadTickets?: boolean, isShallow?: boolean): Promise<FileContainerInterfaces.FileContainerItem[]>;
}

export class FileContainerApiBase extends basem.ClientApiBase implements IFileContainerApiBase {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-FileContainer-api');
    }

    /**
    * Creates the specified items in in the referenced container.
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
                    "3.1-preview.4",
                    "Container",
                    "e4f5c81e-e250-447b-9fef-bd48471bea5e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, items, null);
                let serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainerItem, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
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
                    "3.1-preview.4",
                    "Container",
                    "e4f5c81e-e250-447b-9fef-bd48471bea5e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
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
                    "3.1-preview.4",
                    "Container",
                    "e4f5c81e-e250-447b-9fef-bd48471bea5e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainer, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} containerId
    * @param {string} scope
    * @param {string} itemPath
    * @param {boolean} metadata
    * @param {string} format
    * @param {string} downloadFileName
    * @param {boolean} includeDownloadTickets
    * @param {boolean} isShallow
    */
    public async getItems(
        containerId: number,
        scope?: string,
        itemPath?: string,
        metadata?: boolean,
        format?: string,
        downloadFileName?: string,
        includeDownloadTickets?: boolean,
        isShallow?: boolean
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
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.4",
                    "Container",
                    "e4f5c81e-e250-447b-9fef-bd48471bea5e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainerItem, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
