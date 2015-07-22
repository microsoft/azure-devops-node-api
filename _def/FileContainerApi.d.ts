/// <reference path="../../src/api/definitions/node.d.ts" />
/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import FileContainerInterfaces = require("./interfaces/FileContainerInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
export interface IFileContainerApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    createItem(containerId: number, itemPath: string, scope: string, onResult: (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem) => void): void;
    createItems(items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope: string, onResult: (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem[]) => void): void;
    deleteItem(containerId: number, itemPath: string, scope: string, onResult: (err: any, statusCode: number) => void): void;
    getContainers(scope: string, artifactUris: string, onResult: (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainer[]) => void): void;
    getItems(containerId: number, scope: string, itemPath: string, metadata: boolean, format: string, downloadFileName: string, includeDownloadTickets: boolean, onResult: (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainerItem[]) => void): void;
}
export interface IQFileContainerApi {
    connect(): Q.Promise<void>;
    createItem(containerId: number, itemPath: string, scope?: string): Q.Promise<FileContainerInterfaces.FileContainerItem>;
    createItems(items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope?: string): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
    getContainers(scope?: string, artifactUris?: string): Q.Promise<FileContainerInterfaces.FileContainer[]>;
    getItems(containerId: number, scope?: string, itemPath?: string, metadata?: boolean, format?: string, downloadFileName?: string, includeDownloadTickets?: boolean): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
}
export declare class FileContainerApi implements IFileContainerApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    setUserAgent(userAgent: string): void;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    /**
     * Creates the specified item in the container referenced container.
     *
     * @param {number} containerId
     * @param {string} itemPath
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param onResult cllback function with the resulting FileContainerInterfaces.FileContainerItem
     */
    createItem(containerId: number, itemPath: string, scope: string, onResult: (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem) => void): void;
    /**
     * Creates the specified items in in the referenced container.
     *
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>} items
     * @param {number} containerId
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param onResult cllback function with the resulting FileContainerInterfaces.FileContainerItem[]
     */
    createItems(items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope: string, onResult: (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem[]) => void): void;
    /**
     * Deletes the specified items in a container.
     *
     * @param {number} containerId - Container Id.
     * @param {string} itemPath - Path to delete.
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param onResult cllback function
     */
    deleteItem(containerId: number, itemPath: string, scope: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * Gets containers filtered by a comma separated list of artifact uris within the same scope, if not specified returns all containers
     *
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param {string} artifactUris
     * @param onResult cllback function with the resulting FileContainerInterfaces.FileContainer[]
     */
    getContainers(scope: string, artifactUris: string, onResult: (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainer[]) => void): void;
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
     * @param onResult cllback function with the resulting FileContainerInterfaces.FileContainerItem[]
     */
    getItems(containerId: number, scope: string, itemPath: string, metadata: boolean, format: string, downloadFileName: string, includeDownloadTickets: boolean, onResult: (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainerItem[]) => void): void;
}
export declare class QFileContainerApi implements IQFileContainerApi {
    FileContainerApi: IFileContainerApi;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    connect(): Q.Promise<any>;
    /**
    * Creates the specified item in the container referenced container.
    *
    * @param {number} containerId
    * @param {string} itemPath
    * @param {string} scope - A guid representing the scope of the container. This is often the project id.
    */
    createItem(containerId: number, itemPath: string, scope?: string): Q.Promise<FileContainerInterfaces.FileContainerItem>;
    /**
    * Creates the specified items in in the referenced container.
    *
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>} items
    * @param {number} containerId
    * @param {string} scope - A guid representing the scope of the container. This is often the project id.
    */
    createItems(items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope?: string): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
    /**
    * Gets containers filtered by a comma separated list of artifact uris within the same scope, if not specified returns all containers
    *
    * @param {string} scope - A guid representing the scope of the container. This is often the project id.
    * @param {string} artifactUris
    */
    getContainers(scope?: string, artifactUris?: string): Q.Promise<FileContainerInterfaces.FileContainer[]>;
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
    */
    getItems(containerId: number, scope?: string, itemPath?: string, metadata?: boolean, format?: string, downloadFileName?: string, includeDownloadTickets?: boolean): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
}
