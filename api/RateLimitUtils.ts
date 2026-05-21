// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');

/**
 * Extracts rate limit headers from the provided headers and attaches them to the target object
 * @param headers - source headers
 * @param target - target object to attach rate limit info to
 */
export function extractRateLimitHeaders(headers: any, target: any): void {
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
