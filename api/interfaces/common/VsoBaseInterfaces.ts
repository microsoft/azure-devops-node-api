// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

// ---------------------------------------------------------------------------
// API Client Interfaces
//----------------------------------------------------------------------------

import Serialization = require('../../Serialization');
import http = require("http");
import url = require("url");

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

export interface IHeaders { [key: string]: any };

export interface IBasicCredentials {
    username: string;
    password: string;
}

export interface IHttpClient {
    options(requestUrl: string, additionalHeaders?: IHeaders): Promise<IHttpClientResponse>;
    get(requestUrl: string, additionalHeaders?: IHeaders): Promise<IHttpClientResponse>;
    del(requestUrl: string, additionalHeaders?: IHeaders): Promise<IHttpClientResponse>;
    post(requestUrl: string, data: string, additionalHeaders?: IHeaders): Promise<IHttpClientResponse>;
    patch(requestUrl: string, data: string, additionalHeaders?: IHeaders): Promise<IHttpClientResponse>;
    put(requestUrl: string, data: string, additionalHeaders?: IHeaders): Promise<IHttpClientResponse>;        
    sendStream(verb: string, requestUrl: string, stream: NodeJS.ReadableStream, additionalHeaders?: IHeaders): Promise<IHttpClientResponse>;
    request(verb: string, requestUrl: string, data: string | NodeJS.ReadableStream, headers: IHeaders): Promise<IHttpClientResponse>;
    requestRaw(info: IRequestInfo, data: string | NodeJS.ReadableStream): Promise<IHttpClientResponse>;
    requestRawWithCallback(info: IRequestInfo, data: string | NodeJS.ReadableStream, onResult: (err: any, res: IHttpClientResponse) => void): void;
}

export interface IRequestInfo {
    options: http.RequestOptions;
    parsedUrl: url.Url;
    httpModule: any;
}

export interface IRequestHandler {
    prepareRequest(options: http.RequestOptions): void;
    canHandleAuthentication(response: IHttpClientResponse): boolean;
    handleAuthentication(httpClient: IHttpClient, requestInfo: IRequestInfo, objs): Promise<IHttpClientResponse>;
}

export interface IHttpClientResponse {
    message: http.IncomingMessage;
    readBody(): Promise<string>;
}

export interface IHttpGlobalAgentOptions {
    keepAlive?: boolean;
    timeout?: number;
}

export interface IRequestOptions {
    headers?: IHeaders;
    socketTimeout?: number;
    ignoreSslError?: boolean;
    proxy?: IProxyConfiguration;
    cert?: ICertConfiguration;
    allowRedirects?: boolean;
    allowRedirectDowngrade?: boolean;
    maxRedirects?: number;
    maxSockets?: number;
    keepAlive?: boolean;
    presignedUrlPatterns?: RegExp[];
    // Allows retries only on Read operations (since writes may not be idempotent)
    allowRetries?: boolean;
    maxRetries?: number;
    globalAgentOptions?: IHttpGlobalAgentOptions;
}

export interface IProxyConfiguration {
    proxyUrl: string;
    proxyUsername?: string;
    proxyPassword?: string;
    proxyBypassHosts?: string[];
}

export interface ICertConfiguration {
    caFile?: string;
    certFile?: string;
    keyFile?: string;
    passphrase?: string;
}

export interface RateLimit {
    /**
     * Service and type of threshold reached. For display purposes only.
     */
    resource?: string;
    /**
     * Request delay in seconds (tarpit state). Supports up to 3 decimal places.
     */
    delay?: number;
    /**
     * Total TSTUs allowed before delays are imposed.
     */
    limit?: number;
    /**
     * TSTUs remaining before delays start. 0 if already delayed or blocked.
     */
    remaining?: number;
    /**
     * Unix epoch time (seconds) when usage resets to 0 TSTUs.
     */
    reset?: number;
    /**
     * Seconds to wait before retrying (HTTP 429 block state).
     */
    retryAfter?: number;
}
