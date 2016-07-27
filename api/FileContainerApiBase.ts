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
import FileContainerInterfaces = require("./interfaces/FileContainerInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IFileContainerApiBase extends basem.ClientApiBase {
    createItems(items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope?: string): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
    deleteItem(containerId: number, itemPath: string, scope?: string): Q.Promise<void>;
    getContainers(scope?: string, artifactUris?: string): Q.Promise<FileContainerInterfaces.FileContainer[]>;
    getItems(containerId: number, scope?: string, itemPath?: string, metadata?: boolean, format?: string, downloadFileName?: string, includeDownloadTickets?: boolean, isShallow?: boolean): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
    browseItems(container: number, itemPath?: string): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
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
    public createItems(
        items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>,
        containerId: number,
        scope?: string
        ): Q.Promise<FileContainerInterfaces.FileContainerItem[]> {
    
        var deferred = Q.defer<FileContainerInterfaces.FileContainerItem[]>();

        var onResult = (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Container);
            }
        };

        var routeValues: any = {
            containerId: containerId
        };

        var queryValues: any = {
            scope: scope,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainerItem, responseIsCollection: true };
                
                this.restClient.create(url, apiVersion, items, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<FileContainerInterfaces.FileContainerItem[]>>deferred.promise;
    }

    /**
     * Deletes the specified items in a container.
     * 
     * @param {number} containerId - Container Id.
     * @param {string} itemPath - Path to delete.
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     */
    public deleteItem(
        containerId: number,
        itemPath: string,
        scope?: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        var onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        var routeValues: any = {
            containerId: containerId
        };

        var queryValues: any = {
            itemPath: itemPath,
            scope: scope,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return <Q.Promise<void>>deferred.promise;
    }

    /**
     * Gets containers filtered by a comma separated list of artifact uris within the same scope, if not specified returns all containers
     * 
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param {string} artifactUris
     */
    public getContainers(
        scope?: string,
        artifactUris?: string
        ): Q.Promise<FileContainerInterfaces.FileContainer[]> {
    
        var deferred = Q.defer<FileContainerInterfaces.FileContainer[]>();

        var onResult = (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainer[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Containers);
            }
        };

        var routeValues: any = {
        };

        var queryValues: any = {
            scope: scope,
            artifactUris: artifactUris,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainer, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<FileContainerInterfaces.FileContainer[]>>deferred.promise;
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
    public getItems(
        containerId: number,
        scope?: string,
        itemPath?: string,
        metadata?: boolean,
        format?: string,
        downloadFileName?: string,
        includeDownloadTickets?: boolean,
        isShallow?: boolean
        ): Q.Promise<FileContainerInterfaces.FileContainerItem[]> {
    
        var deferred = Q.defer<FileContainerInterfaces.FileContainerItem[]>();

        var onResult = (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainerItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Containers);
            }
        };

        var routeValues: any = {
            containerId: containerId
        };

        var queryValues: any = {
            scope: scope,
            itemPath: itemPath,
            metadata: metadata,
            '$format': format,
            downloadFileName: downloadFileName,
            includeDownloadTickets: includeDownloadTickets,
            isShallow: isShallow,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainerItem, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<FileContainerInterfaces.FileContainerItem[]>>deferred.promise;
    }

    /**
     * Allow browsing of file ,the contentDisposition is inline and Content-Type is determined by FileExtension
     * 
     * @param {number} container
     * @param {string} itemPath - The path to the item of interest
     */
    public browseItems(
        container: number,
        itemPath?: string
        ): Q.Promise<FileContainerInterfaces.FileContainerItem[]> {
    
        var deferred = Q.defer<FileContainerInterfaces.FileContainerItem[]>();

        var onResult = (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainerItem[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Containers);
            }
        };

        var routeValues: any = {
            container: container
        };

        var queryValues: any = {
            itemPath: itemPath,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e71a64ac-b2b5-4230-a4c0-dad657cf97e2", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var apiVersion: string = versioningData.apiVersion;
                var serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainerItem, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return <Q.Promise<FileContainerInterfaces.FileContainerItem[]>>deferred.promise;
    }

}
