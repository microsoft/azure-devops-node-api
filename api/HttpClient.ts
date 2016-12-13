// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import url = require("url");
import http = require("http");
import https = require("https");
import tunnel = require("tunnel");
import ifm = require('./interfaces/common/VsoBaseInterfaces');

http.globalAgent.maxSockets = 100;

export enum HttpCodes {
    OK = 200,
    MultipleChoices = 300,
    MovedPermanantly = 301,
    ResourceMoved = 302,
    NotModified = 304,
    UseProxy = 305,
    SwitchProxy = 306,
    TemporaryRedirect = 307,
    PermanentRedirect = 308,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    ProxyAuthenticationRequired = 407,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
}

export class HttpClientResponse {
    constructor(message: http.IncomingMessage) {
        this.message = message;
    }

    public message: http.IncomingMessage;
    readBody(): Promise<string> {
        return new Promise<string>(async(resolve, reject) => { 
            let output: string = '';

            this.message.on('data', (chunk: string) => {
                output += chunk;
            });

            this.message.on('end', () => {
                resolve(output);
            }); 
        });       
    }
}

export interface RequestInfo {
    options: http.RequestOptions;
    parsedUrl: url.Url;
    httpModule: any;
}

export function isHttps(requestUrl: string) {
    let parsedUrl: url.Url = url.parse(requestUrl);
    return parsedUrl.protocol === 'https:';    
}

export class HttpClient {
    userAgent: string;
    handlers: ifm.IRequestHandler[];
    socketTimeout: number;

    constructor(userAgent: string, handlers?: ifm.IRequestHandler[], socketTimeout?: number) {
        this.userAgent = userAgent;
        this.handlers = handlers;
        this.socketTimeout = socketTimeout ? socketTimeout : 3 * 60000;
    }

    public get(requestUrl: string, additionalHeaders?: ifm.IHeaders): Promise<HttpClientResponse> {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }

    public del(requestUrl: string, additionalHeaders?: ifm.IHeaders): Promise<HttpClientResponse> {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }

    public post(requestUrl: string, data: string, additionalHeaders?: ifm.IHeaders): Promise<HttpClientResponse> {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }

    public patch(requestUrl: string, data: string, additionalHeaders?: ifm.IHeaders): Promise<HttpClientResponse> {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }

    public put(requestUrl: string, data: string, additionalHeaders?: ifm.IHeaders): Promise<HttpClientResponse> {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }    

    public sendStream(verb: string, requestUrl: string, stream: NodeJS.ReadableStream, additionalHeaders?: ifm.IHeaders): Promise<HttpClientResponse> {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }

    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    public request(verb: string, requestUrl: string, data: string | NodeJS.ReadableStream, headers: ifm.IHeaders): Promise<HttpClientResponse> {
        return new Promise<HttpClientResponse>(async(resolve, reject) => {
            try {
                var info: RequestInfo = this._prepareRequest(verb, requestUrl, headers);
                let res: HttpClientResponse = await this._requestRaw(info, data);
                
                // TODO: check 401 if handled

                // TODO: retry support

                resolve(res);
            }
            catch (err) {
                // only throws in truly exceptional cases (connection, can't resolve etc...)
                // responses from the server do not throw
                reject(err);
            }
        });
    }

    private _requestRaw(info: RequestInfo, data: string | NodeJS.ReadableStream): Promise<HttpClientResponse> {
        return new Promise<HttpClientResponse>((resolve, reject) => {
            let socket;

            let isDataString = typeof(data) === 'string';

            if (typeof(data) === 'string') {
                info.options.headers["Content-Length"] = Buffer.byteLength(data, 'utf8');
            }

            let req: http.ClientRequest = info.httpModule.request(info.options, (msg: http.IncomingMessage) => {
                let res: HttpClientResponse = new HttpClientResponse(msg);
                resolve(res);
            });

            req.on('socket', (sock) => {
                socket = sock;
            });

            // If we ever get disconnected, we want the socket to timeout eventually
            req.setTimeout(this.socketTimeout, () => {
                if (socket) {
                    socket.end();
                }
                reject(new Error('Request timeout: ' + info.options.path));
            });

            req.on('error', function (err) {
                // err has statusCode property
                // res should have headers
                reject(err);
            });

            if (data && typeof(data) === 'string') {
                req.write(data, 'utf8');
            }

            if (data && typeof(data) !== 'string') {
                data.on('close', function () {
                    req.end();
                });

                data.pipe(req);
            }
            else {
                req.end();
            }
        });
    }

    private _prepareRequest(method: string, requestUrl: string, headers: any): RequestInfo {
        let info: RequestInfo = <RequestInfo>{};

        info.parsedUrl = url.parse(requestUrl);
        let usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        var defaultPort: number = usingSsl ? 443 : 80;

        var proxyUrl: url.Url;
        if (process.env.HTTPS_PROXY && usingSsl) {
            proxyUrl = url.parse(process.env.HTTPS_PROXY);
        } else if (process.env.HTTP_PROXY) {
            proxyUrl = url.parse(process.env.HTTP_PROXY);
        }

        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        info.options = <http.RequestOptions>{};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port ? parseInt(info.parsedUrl.port) : defaultPort;
        info.options.path = (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = headers || {};
        info.options.headers["User-Agent"] = this.userAgent;

        let useProxy = proxyUrl && proxyUrl.hostname;
        if (useProxy) {
            var agentOptions: tunnel.TunnelOptions = {
                maxSockets: http.globalAgent.maxSockets,
                proxy: {
                    // TODO: support proxy-authorization
                    //proxyAuth: "user:password",
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };

            var tunnelAgent: Function;
            var overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            } else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            
            info.options.agent = tunnelAgent(agentOptions);
        }

        // gives handlers an opportunity to participate
        if (this.handlers) {
            this.handlers.forEach((handler) => {
                handler.prepareRequest(info.options);
            });
        }

        return info;
    }        
}


//
// Legacy callback client.  Will delete.
//
export class HttpCallbackClient {
    userAgent: string;
    handlers: ifm.IRequestHandler[];
    socketTimeout: number;
    isSsl: boolean;

    constructor(userAgent: string, handlers?: ifm.IRequestHandler[], socketTimeout?: number) {
        this.userAgent = userAgent;
        this.handlers = handlers;
        this.socketTimeout = socketTimeout ? socketTimeout : 3 * 60000;
    }

    get(verb: string, requestUrl: string, headers: ifm.IHeaders, onResult: (err: any, res: http.IncomingMessage, contents: string) => void): void {
        var options = this._getOptions(verb, requestUrl, headers);
        this.request(options.protocol, options.options, null, onResult);
    }

    // POST, PATCH, PUT
    send(verb: string, requestUrl: string, data: string, headers: ifm.IHeaders, onResult: (err: any, res: http.IncomingMessage, contents: string) => void): void {
        var options = this._getOptions(verb, requestUrl, headers);
        this.request(options.protocol, options.options, data, onResult);
    }

    sendStream(verb: string, requestUrl: string, stream: NodeJS.ReadableStream, headers: ifm.IHeaders, onResult: (err: any, res: http.IncomingMessage, contents: string) => void): void {
        var options = this._getOptions(verb, requestUrl, headers);

        var req = options.protocol.request(options.options, (res) => {
            let output: string = '';

            res.on('data', function (chunk) {
                output += chunk;
            });

            res.on('end', function () {
                // res has statusCode and headers
                onResult(null, res, output);
            });
        });

        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            onResult(err, null, null);
        });

        stream.on('close', function () {
            req.end();
        });

        stream.pipe(req);
    }

    getStream(requestUrl: string, accept: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void {
        let headers = {};
        headers['ACCEPT'] = accept;
        var options = this._getOptions('GET', requestUrl, headers);

        var req = options.protocol.request(options.options, (res: http.IncomingMessage) => {
            onResult(null, res.statusCode, res);
        });

        req.on('error', (err) => {
            onResult(err, err.statusCode, null);
        });

        req.end();
    }

    /**
     * Makes an http request delegating authentication to handlers.
     * returns http result as contents buffer
     * All other methods such as get, post, and patch ultimately call this.
     */
    request(protocol: any, options: any, data: string, onResult: (err: any, res: http.IncomingMessage, contents: string) => void): void {
        // Set up a callback to pass off 401s to an authentication handler that can deal with it
        var callback = (err: any, res: http.ClientResponse, contents: string) => {
            var authHandler;
            if (this.handlers) {
                this.handlers.some(function (handler, index, handlers) {
                    // Find the first one that can handle the auth based on the response
                    if (handler.canHandleAuthentication(res)) {
                        authHandler = handler;
                        return true;
                    }
                    return false;
                });
            }
            if (authHandler !== undefined) {
                authHandler.handleAuthentication(this, protocol, options, data, onResult);
            } else {
                // No auth handler found, call onResult normally
                onResult(err, res, contents);
            }
        };

        this.requestRaw(protocol, options, data, callback);
    }

    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     */
    requestRaw(protocol: any, options: any, data: string, onResult: (err: any, res: http.IncomingMessage, contents: string) => void): void {
        var socket;

        if (data) {
            options.headers["Content-Length"] = Buffer.byteLength(data, 'utf8');
        }

        var callbackCalled: boolean = false;
        var handleResult = (err: any, res: http.IncomingMessage, contents: string) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res, contents);
            }
        };

        var req = protocol.request(options, (res) => {
            let output: string = '';
            res.setEncoding('utf8');

            res.on('data', (chunk: string) => {
                output += chunk;
            });

            res.on('end', () => {
                // res has statusCode and headers
                handleResult(null, res, output);
            });
        });

        req.on('socket', (sock) => {
            socket = sock;
        });

        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this.socketTimeout, function() {
            if (socket) {
                socket.end();
            }
            handleResult(new Error('Request timeout: ' + options.path), null, null);
        });

        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null, null);
        });

        if (data) {
            req.write(data, 'utf8');
        }

        req.end();
    }

    private _getOptions(method: string, requestUrl: string, headers: any): any {

        var parsedUrl: url.Url = url.parse(requestUrl);
        var usingSsl = parsedUrl.protocol === 'https:';
        var prot: any = usingSsl ? https : http;
        var defaultPort = usingSsl ? 443 : 80;
        this.isSsl = usingSsl;

        var proxyUrl: url.Url;
        if (process.env.HTTPS_PROXY && usingSsl) {
            proxyUrl = url.parse(process.env.HTTPS_PROXY);
        } else if (process.env.HTTP_PROXY) {
            proxyUrl = url.parse(process.env.HTTP_PROXY);
        }

        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        var options: any = {
            host: parsedUrl.hostname,
            port: parsedUrl.port || defaultPort,
            path: (parsedUrl.pathname || '') + (parsedUrl.search || ''),
            method: method,
            headers: headers || {}
        };

        options.headers["User-Agent"] = this.userAgent;

        var useProxy = proxyUrl && proxyUrl.hostname;
        if (useProxy) {
            var agentOptions: tunnel.TunnelOptions = {
                maxSockets: http.globalAgent.maxSockets,
                proxy: {
                    // TODO: support proxy-authorization
                    //proxyAuth: "user:password",
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };

            var tunnelAgent: Function;
            var overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            } else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            
            options.agent = tunnelAgent(agentOptions);
        }

        if (this.handlers) {
            this.handlers.forEach((handler) => {
                handler.prepareRequest(options);
            });
        }

        return {
            protocol: prot,
            options: options,
        };
    }    
}
