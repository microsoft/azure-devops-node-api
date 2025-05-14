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

import stream = require("stream");
import * as zlib from "zlib";
import * as restm from 'typed-rest-client/RestClient';
import * as httpm from 'typed-rest-client/HttpClient';
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import FileContainerApiBase = require("./FileContainerApiBase");
import FileContainerInterfaces = require("./interfaces/FileContainerInterfaces");
import vsom = require('./VsoClient');

export interface IFileContainerApi extends FileContainerApiBase.IFileContainerApiBase {
    createItem(contentStream: NodeJS.ReadableStream, uncompressedLength: number, containerId: number, itemPath: string, scope: string, options: any): Promise<FileContainerInterfaces.FileContainerItem>;
    getItem(containerId: number, scope?: string, itemPath?: string, downloadFileName?: string): Promise<restm.IRestResponse<NodeJS.ReadableStream>>;
}

export class FileContainerApi extends FileContainerApiBase.FileContainerApiBase implements IFileContainerApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions, userAgent?: string) {
        super(baseUrl, handlers, options, userAgent);
    }

    /**
     * @param {number} containerId
     * @param {string} scope
     * @param {string} itemPath
     * @param {string} downloadFileName
     */
    public async getItem(
        containerId: number,
        scope?: string,
        itemPath?: string,
        downloadFileName?: string
    ): Promise<restm.IRestResponse<NodeJS.ReadableStream>> {

        return new Promise<restm.IRestResponse<NodeJS.ReadableStream>>(async (resolve, reject) => {
            let routeValues: any = {
                containerId: containerId
            };

            let queryValues: any = {
                scope: scope,
                itemPath: itemPath,
                '$format': "OctetStream",
                downloadFileName: downloadFileName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "4.0-preview.4",
                    "Container",
                    "e4f5c81e-e250-447b-9fef-bd48471bea5e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let options: restm.IRequestOptions = this.createRequestOptions('application/octet-stream', verData.apiVersion);

                let res = await this.http.get(url);

                let rres: restm.IRestResponse<NodeJS.ReadableStream> = <restm.IRestResponse<NodeJS.ReadableStream>>{};
                let statusCode = res.message.statusCode;
                rres.statusCode = statusCode;
                // not found leads to null obj returned
                if (statusCode == httpm.HttpCodes.NotFound) {
                    resolve(rres);
                }

                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    let contents = await res.readBody();
                    let obj;
                    if (contents && contents.length > 0) {
                        obj = JSON.parse(contents);
                        if (options && options.responseProcessor) {
                            rres.result = options.responseProcessor(obj);
                        }
                        else {
                            rres.result = obj;
                        }
                    }

                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else {
                        msg = "Failed request: (" + statusCode + ") " + res.message.url;
                    }
                    reject(new Error(msg));
                }
                else {
                    // if the response is gzipped, unzip it
                    if (res.message.headers["content-encoding"] === "gzip") {
                        let unzipStream = zlib.createGunzip();
                        res.message.pipe(unzipStream);
                        rres.result = unzipStream;
                    }
                    else {
                        rres.result = res.message;
                    }
                    resolve(rres);
                }
            }
            catch (err) {
                reject(err);
            }
        });
    }

    public createItem(contentStream: NodeJS.ReadableStream, uncompressedLength: number, containerId: number, itemPath: string, scope: string, options: any): Promise<FileContainerInterfaces.FileContainerItem> {
        return new Promise<FileContainerInterfaces.FileContainerItem>((resolve, reject) => {
            let chunkStream = new ChunkStream(this, uncompressedLength, containerId, itemPath, scope, options);

            chunkStream.on('finish', () => {
                resolve(chunkStream.getItem());
            });

            contentStream.pipe(chunkStream);
        });
    }

    // used by ChunkStream
    public _createItem(
        customHeaders: VsoBaseInterfaces.IHeaders,
        contentStream: NodeJS.ReadableStream,
        containerId: number,
        itemPath: string,
        scope: string,
        onResult: (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem) => void
    ): void {

        var routeValues: any = {
            containerId: containerId
        };

        var queryValues: any = {
            itemPath: itemPath,
            scope: scope,
        };

        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "";


        this.vsoClient.getVersioningData("4.0-preview.4", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                var url: string = versioningData.requestUrl;
                var serializationData = { responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainerItem, responseIsCollection: false };

                let options: restm.IRequestOptions = this.createRequestOptions('application/octet-stream',
                    versioningData.apiVersion);
                options.additionalHeaders = customHeaders;
                this.rest.uploadStream<FileContainerInterfaces.FileContainerItem>('PUT', url, contentStream, options)
                    .then((res: restm.IRestResponse<FileContainerInterfaces.FileContainerItem>) => {
                        let ret = this.formatResponse(res.result,
                            FileContainerInterfaces.TypeInfo.FileContainerItem,
                            false);
                        onResult(null, res.statusCode, ret);
                    })
                    .catch((err) => {
                        onResult(err, err.statusCode, null);
                    });
            }, (error) => {
                onResult(error, error.statusCode, null);
            });
    }
}

class ChunkStream extends stream.Writable {
    private static ChunkSize: number = (16 * 1024 * 1024);

    private _options: any;
    private _api: FileContainerApi;
    private _buffer: Buffer = new Buffer(ChunkStream.ChunkSize);

    private _length: number = 0;
    private _startRange: number = 0;
    private _bytesToSend: number = 0;
    private _totalReceived: number = 0;

    private _uncompressedLength: number;

    private _containerId: number;
    private _itemPath: string;
    private _scope: string;

    private _item: FileContainerInterfaces.FileContainerItem;

    constructor(api: FileContainerApi, uncompressedLength: number, containerId: number, itemPath: string, scope: string, options: any) {
        super();
        this._api = api;
        this._options = options || {};
        this._uncompressedLength = uncompressedLength;
        this._containerId = containerId;
        this._itemPath = itemPath;
        this._scope = scope;

        this._bytesToSend = this._options.isGzipped ? this._options.compressedLength : uncompressedLength;
    }

    _write(data: Buffer | string, encoding: string, callback: Function): void {
        let chunk: Buffer = <Buffer>data;
        if (!chunk) {
            if (this._length == 0) {
                callback();
            }
            else {
                // last chunk
                this._sendChunk(callback);
            }
            return;
        }

        let newBuffer: Buffer = null;
        if (this._length + chunk.length > ChunkStream.ChunkSize) {
            // overflow
            let overflowPosition: number = chunk.length - (ChunkStream.ChunkSize - this._length);
            chunk.copy(this._buffer, this._length, 0, overflowPosition);
            this._length += overflowPosition;
            newBuffer = chunk.slice(overflowPosition);
        }
        else {
            chunk.copy(this._buffer, this._length, 0, chunk.length);
            this._length += chunk.length;
        }

        this._totalReceived += chunk.length;
        if (this._length >= ChunkStream.ChunkSize || this._totalReceived >= this._bytesToSend) {
            this._sendChunk(callback, newBuffer);
        }
        else {
            callback();
        }
    }

    private _sendChunk(callback: Function, newBuffer?: Buffer) {
        let endRange = this._startRange + this._length;
        let headers = {
            "Content-Range": "bytes " + this._startRange + "-" + (endRange - 1) + "/" + this._bytesToSend,
            "Content-Length": this._length
        };

        if (this._options.isGzipped) {
            headers["Accept-Encoding"] = "gzip";
            headers["Content-Encoding"] = "gzip";
            headers["x-tfs-filelength"] = this._uncompressedLength;
        }

        this._startRange = endRange;

        this._api._createItem(headers, new BufferStream(this._buffer, this._length), this._containerId, this._itemPath, this._scope, (err: any, statusCode: number, item: FileContainerInterfaces.FileContainerItem) => {
            if (newBuffer) {
                this._length = newBuffer.length;
                newBuffer.copy(this._buffer);
            }
            else {
                this._length = 0;
            }

            this._item = item;

            callback(err);
        });
    }

    public getItem(): FileContainerInterfaces.FileContainerItem {
        return this._item;
    }
}

class BufferStream extends stream.Readable {
    private _buffer: Buffer;
    private _position: number = 0;
    private _length: number = 0;

    constructor(buffer: Buffer, length: number) {
        super();
        this._buffer = buffer;
        this._length = length;
    }

    _read(size: number): void {
        if (this._position >= this._length) {
            this.push(null);
            return;
        }

        let end: number = Math.min(this._position + size, this._length);
        this.push(this._buffer.slice(this._position, end));
        this._position = end;
    }
}