// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// ---------------------------------------------------------------------------
// API Client Interfaces
//----------------------------------------------------------------------------

/**
 * Information about the location of a REST API resource
 */
export interface ApiResourceLocation {
    /**
     * Area name for this resource
     */
    area: string;
    /**
     * Unique Identifier for this location
     */
    id: string;
    /**
     * Maximum api version that this resource supports (current server version for this resource)
     */
    maxVersion: string;
    /**
     * Minimum api version that this resource supports
     */
    minVersion: string;
    /**
     * The latest version of this resource location that is in "Release" (non-preview) mode
     */
    releasedVersion: string;
    /**
     * Resource name
     */
    resourceName: string;
    /**
     * The current resource version supported by this resource location
     */
    resourceVersion: number;
    /**
     * This location's route template (templated relative path)
     */
    routeTemplate: string;
}

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
    getStream(requestUrl: string, apiVersion: string, headers: any, onResult: (err: any, statusCode: number, res: IHttpResponse) => void): void;
    makeAcceptHeader(type: string, apiVersion: string): string;
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