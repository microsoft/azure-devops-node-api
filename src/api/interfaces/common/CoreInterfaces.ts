// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// ---------------------------------------------------------------------------
// API Client Interfaces
//----------------------------------------------------------------------------

/// <reference path="../../definitions/node.d.ts" />
/// <reference path="../../definitions/Q.d.ts" />

export interface IBasicCredentials {
    username: string;
    password: string;
}

export interface IRequestHandler {
    prepareRequest(options: any): void;
}

export interface IHttpResponse {
    statusCode: number;
    headers: any;
}

export interface IHttpClient {
    get(verb: string, requestUrl: string, headers: any, onResult: (err: any, res: IHttpResponse, contents: string) => void): void;
    send(verb: string, requestUrl: string, objs: any, headers: any, onResult: (err: any, res: IHttpResponse, contents: string) => void): void;
    sendFile(verb: string, requestUrl: string, content: NodeJS.ReadableStream, headers: any, onResult: (err: any, res: IHttpResponse, contents: string) => void): void;
    getFile(requestUrl: string, destination: NodeJS.WritableStream, headers: any, onResult: (err: any, res: IHttpResponse) => void): void
    request(protocol: any, options: any, body, onResult: (err: any, res: IHttpResponse, contents: string) => void): void;
}

export interface IRestClient {
    baseUrl: string;
    httpClient: IHttpClient;
    getJson(relativeUrl: string, apiVersion: string, onResult: (err: any, statusCode: number, obj: any) => void): void;
    getJsonWrappedArray(relativeUrl: string, apiVersion: string, onResult: (err: any, statusCode: number, obj: any) => void): void;
    options(requestUrl: string, onResult: (err: any, statusCode: number, obj: any) => void): void;
    create(relativeUrl: string, apiVersion: string, resources: any, onResult: (err: any, statusCode: number, obj: any) => void): void;
    createJsonWrappedArray(relativeUrl: string, apiVersion: string, resources: any[], onResult: (err: any, statusCode: number, obj: any) => void): void;
    update(relativeUrl: string, apiVersion: string, resources: any, onResult: (err: any, statusCode: number, obj: any) => void): void;
    updateJsonWrappedArray(relativeUrl: string, apiVersion: string, resources: any[], onResult: (err: any, statusCode: number, obj: any) => void): void;
    uploadFile(relativeUrl: string, apiVersion: string, filePath: string, customHeaders: any, onResult: (err: any, statusCode: number, obj: any) => void): void;
    uploadStream(verb: string, relativeUrl: string, apiVersion: string, contentStream: NodeJS.ReadableStream, customHeaders: any, onResult: (err: any, statusCode: number, obj: any) => void): void;
    replace(relativeUrl: string, apiVersion: string, resources: any, onResult: (err: any, statusCode: number, obj: any) => void): void;
}