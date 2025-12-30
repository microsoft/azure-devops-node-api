// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');

import * as rm from 'typed-rest-client/RestClient';
import * as hm from 'typed-rest-client/HttpClient';
import { IHeaders, IHttpClientResponse } from 'typed-rest-client/Interfaces';

/**
 * Extracts rate limit headers from the provided headers and attaches them to the target object
 * @param headers - source headers
 * @param target - target object to attach rate limit info to
 * @returns void
 */
function extractRateLimitHeaders(headers: any, target: any): void {
    if (!headers || !target) {
        return;
    }

    const rateLimit: VsoBaseInterfaces.RateLimit = {};

    if (headers['x-ratelimit-resource']) {
        rateLimit.resource = headers['x-ratelimit-resource'];
    }
    if (headers['x-ratelimit-delay']) {
        rateLimit.delay = parseFloat(headers['x-ratelimit-delay']);
    }
    if (headers['x-ratelimit-limit']) {
        rateLimit.limit = parseInt(headers['x-ratelimit-limit'], 10);
    }
    if (headers['x-ratelimit-remaining']) {
        rateLimit.remaining = parseInt(headers['x-ratelimit-remaining'], 10);
    }
    if (headers['x-ratelimit-reset']) {
        rateLimit.reset = parseInt(headers['x-ratelimit-reset'], 10);
    }
    if (headers['retry-after']) {
        rateLimit.retryAfter = parseInt(headers['retry-after'], 10);
    }
    target.rateLimit = rateLimit;
}

/**
 * AdoHttpClient that extracts rate limit headers and attaches them to the response object
 */
export class AdoHttpClient extends hm.HttpClient {
    public async request(verb: string, requestUrl: string, data: string | NodeJS.ReadableStream, headers: IHeaders): Promise<IHttpClientResponse> {
        const res = await super.request(verb, requestUrl, data, headers);

        const resHeaders = res?.message?.headers;

        extractRateLimitHeaders(resHeaders, res);
        extractRateLimitHeaders(resHeaders, res?.message);

        return res;
    }
}

/**
 * AdoRestClient that extracts rate limit headers and attaches them to the response/result objects
 */
export class AdoRestClient extends rm.RestClient {
    protected async processResponse<T>(res: hm.HttpClientResponse, options: rm.IRequestOptions): Promise<rm.IRestResponse<T>> {
        const headers = res?.message?.headers;

        try {
            const response = await super.processResponse(res, options);
            if (response && response.result && typeof response.result === 'object') {
                extractRateLimitHeaders(headers, response.result);
            }
            return response as rm.IRestResponse<T>;
        } catch (err: any) {
            if (err?.result && typeof err.result === 'object' && err.responseHeaders && typeof err.responseHeaders === 'object') {
                extractRateLimitHeaders(err.responseHeaders, err.result);
            }
            return Promise.reject(err);
        }
    }
}
