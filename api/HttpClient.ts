// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import Q = require('q');
import url = require("url");
import http = require("http");
import https = require("https");
import tunnel = require("tunnel");
import ifm = require('./interfaces/common/VsoBaseInterfaces');

http.globalAgent.maxSockets = 100;

export interface IHttpClientResponse {
    statusCode: number,
    stream: NodeJS.ReadableStream; 
    contents: string;
}

export class HttpClient {
    client: HttpCallbackClient;

    constructor(userAgent: string, handlers?: ifm.IRequestHandler[], socketTimeout?: number) {
        this.client = new HttpCallbackClient(userAgent, handlers, socketTimeout);
    }

    public get(requestUrl: string, additionalHeaders?: ifm.IHeaders): Promise<IHttpClientResponse> {
        return this._getRequest('GET', requestUrl, additionalHeaders || {});
    }

    public del(requestUrl: string, additionalHeaders?: ifm.IHeaders): Promise<IHttpClientResponse> {
        return this._getRequest('DELETE', requestUrl, additionalHeaders || {});
    }

    public post(requestUrl: string, data: string, additionalHeaders?: ifm.IHeaders): Promise<IHttpClientResponse> {
        return this._sendRequest('POST', requestUrl, data, additionalHeaders || {});
    }

    public patch(requestUrl: string, data: string, additionalHeaders?: ifm.IHeaders): Promise<IHttpClientResponse> {
        return this._sendRequest('PATCH', requestUrl, data, additionalHeaders || {});
    }

    private _getRequest(verb: string, requestUrl: string, headers: ifm.IHeaders): Promise<IHttpClientResponse> {
        let deferred = Q.defer<IHttpClientResponse>();
        this.client.get(verb, requestUrl, headers, (err:any, res: http.IncomingMessage, contents: string) => {
            if (err) {                
                deferred.reject(err);
            }
            else {
                let hres: IHttpClientResponse = <IHttpClientResponse>{};
                hres.statusCode = res.statusCode;
                hres.contents = contents;
                deferred.resolve(hres);
            }
        });

        return deferred.promise;        
    }

    private _sendRequest(verb: string, requestUrl: string, data: string, headers: ifm.IHeaders): Promise<IHttpClientResponse> {
        let deferred = Q.defer<IHttpClientResponse>();
        this.client.send(verb, requestUrl, data, headers, (err:any, res: http.ClientResponse, contents: string) => {
            if (err) {                
                deferred.reject(err);
            }
            else {
                let hres: IHttpClientResponse = <IHttpClientResponse>{};
                hres.statusCode = res.statusCode;
                hres.contents = contents;
                deferred.resolve(hres);
            }
        });

        return deferred.promise;        
    }    
}

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
    send(verb: string, requestUrl: string, data: string, headers: ifm.IHeaders, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void {
        var options = this._getOptions(verb, requestUrl, headers);
        this.request(options.protocol, options.options, data, onResult);
    }

    sendStream(verb: string, requestUrl: string, stream: NodeJS.ReadableStream, headers: ifm.IHeaders, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void {
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
        var headers = {};
        var options = this._getOptions('GET', requestUrl, headers);

        var req = options.protocol.request(options.options, function (res) {
            onResult(null, res.statusCode, res);
        });

        req.on('error', function (err) {
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
        var handleResult = (err: any, res: http.ClientResponse, contents: string) => {
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
