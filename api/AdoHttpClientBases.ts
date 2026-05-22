// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { extractRateLimitHeaders } from './RateLimitUtils';

import * as rm from 'typed-rest-client/RestClient';
import * as hm from 'typed-rest-client/HttpClient';
import { IHeaders, IHttpClientResponse } from 'typed-rest-client/Interfaces';

/**
 * AdoHttpClient that extracts rate limit headers and attaches them to the response object
 */
export class AdoHttpClient extends hm.HttpClient {
    public async request(verb: string, requestUrl: string, data: string | NodeJS.ReadableStream, headers: IHeaders): Promise<IHttpClientResponse> {
        const res = await super.request(verb, requestUrl, data, headers);

        const resHeaders = res?.message?.headers;

        extractRateLimitHeaders(resHeaders, res);

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
                // For collection responses (e.g., { count, value: [...] }), also attach to the array
                if (Array.isArray((response.result as any).value)) {
                    extractRateLimitHeaders(headers, (response.result as any).value);
                }
            }
            return response as rm.IRestResponse<T>;
        } catch (err: any) {
            // Use the original response headers captured before super.processResponse,
            // because the base implementation may not populate err.responseHeaders
            // when the response body is not valid JSON (e.g., HTML error pages on 429).
            extractRateLimitHeaders(headers, err);
            if (err?.result && typeof err.result === 'object') {
                extractRateLimitHeaders(headers, err.result);
            }
            return Promise.reject(err);
        }
    }
}
