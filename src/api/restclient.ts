// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/// <reference path="./definitions/node.d.ts"/>

import fs = require("fs");
import url = require("url");
import path = require("path");
import http = require("http");
import shell = require("shelljs");
import httpm = require("./httpclient");
import ifm = require('./interfaces/common/CoreInterfaces');

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */

var getJsonResponse = function (contents) {
    var json = JSON.parse(contents);
    return json;
}

var httpCodes = {
    300: "Multiple Choices",
    301: "Moved Permanantly",
    302: "Resource Moved",
    304: "Not Modified",
    305: "Use Proxy",
    306: "Switch Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout"
}

export function processResponse(url, res, contents, onResult) {
    if (res.statusCode > 299) {
        // not success
        var msg = httpCodes[res.statusCode] ? "Failed Request: " + httpCodes[res.statusCode] : "Failed Request";
        msg += '(' + res.statusCode + ') - ' + url;

        onResult(new Error(msg), res.statusCode, null);
    } else {
        try {
            var jsonObj = null;
            if (contents && contents.length > 0) {
                jsonObj = JSON.parse(contents);
            }
        } catch (e) {

            onResult(new Error('Invalid Resource'), res.statusCode, null);
            return;
        }

        onResult(null, res.statusCode, jsonObj);
    }
};

export function enumToString(enumType: any, enumValue: number, camelCase: boolean) {
    var valueString = enumType[enumValue];

    if (valueString && camelCase) {
        if (valueString.length <= 1) {
            valueString = valueString.toLowerCase();
        }
        else {
            valueString = valueString.substring(0, 1).toLowerCase() + valueString.substring(1);
        }
    }

    return valueString;
}

export class RestClient implements ifm.IRestClient {
    baseUrl: string;
    basePath: string;
    httpClient: ifm.IHttpClient;

    constructor(baseUrl: string, httpClient: ifm.IHttpClient) {
        this.baseUrl = baseUrl;
        this.basePath = url.parse(baseUrl).pathname;
        this.httpClient = httpClient;
    }

    resolveUrl(relativeUrl: string): string {
        return url.resolve(this.baseUrl, path.join(this.basePath, relativeUrl));
    }

    getJson(relativeUrl: string, apiVersion: string, onResult: (err: any, statusCode: number, obj: any) => void): void {
        this._getJson('GET', relativeUrl, apiVersion, onResult);
    }

    getJsonWrappedArray(relativeUrl: string, apiVersion: string, onResult: (err: any, statusCode: number, obj: any) => void): void {
        this.getJson(relativeUrl, apiVersion, (err: any, statusCode: number, obj: any) => {
            if (err) {
                onResult(err, statusCode, null);
            } else {
                if (obj['value'] instanceof Array) {
                    onResult(null, statusCode, obj['value']);
                } else {
                    onResult(null, statusCode, obj);
                }
            }
        });
    }

    options(relativeUrl: string, onResult: (err: any, statusCode: number, obj: any) => void): void {
        this._getJson('OPTIONS', relativeUrl, "", onResult);
    }

    delete(relativeUrl: string, apiVersion: string, onResult: (err: any, statusCode: number, obj: any) => void): void {
        this._getJson('DELETE', relativeUrl, apiVersion, onResult);
    }

    create(relativeUrl: string, apiVersion: string, resources: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
        this._sendJson('POST', relativeUrl, apiVersion, resources, onResult);
    }

    createJsonWrappedArray(relativeUrl: string, apiVersion: string, resources: any[], onResult: (err: any, statusCode: number, resources: any[]) => void): void {
        this._sendWrappedJson('POST', relativeUrl, apiVersion, resources, onResult);
    }

    update(relativeUrl: string, apiVersion: string, resources: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
        this._sendJson('PATCH', relativeUrl, apiVersion, resources, onResult);
    }

    updateJsonWrappedArray(relativeUrl: string, apiVersion: string, resources: any[], onResult: (err: any, statusCode: number, resources: any[]) => void): void {
        this._sendWrappedJson('PATCH', relativeUrl, apiVersion, resources, onResult);
    }

    uploadFile(relativeUrl: string, apiVersion: string, filePath: string, customHeaders: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
        fs.stat(filePath, (err, stats) => {
            if (err) {
                onResult(err, 400, null);
                return;
            }

            var headers = customHeaders || {};
            headers["Content-Length"] = stats.size;

            var contentStream: NodeJS.ReadableStream = fs.createReadStream(filePath);

            this.uploadStream('POST', relativeUrl, apiVersion, contentStream, headers, onResult);
        });
    }

    uploadStream(verb: string, relativeUrl: string, apiVersion: string, contentStream: NodeJS.ReadableStream, customHeaders: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
        var postUrl = this.resolveUrl(relativeUrl);

        var headers = customHeaders || {};
        headers["Accept"] = 'application/json' + (apiVersion ? (";api-version=" + apiVersion) : "");

        this.httpClient.sendFile(verb, postUrl, contentStream, headers, (err: any, res: ifm.IHttpResponse, contents: string) => {
            if (err) {
                onResult(err, err.statusCode, contents);
                return;
            }

            processResponse(postUrl, res, contents, onResult);
        });
    }

    downloadFile(relativeUrl: string, apiVersion: string, filePath: string, fileType: string, onResult: (err: any, statusCode: number) => void): void {
        if (fs.existsSync(filePath)) {
            onResult(new Error('File ' + filePath + ' already exists.'), null);
            return;
        }

        var getUrl = this.resolveUrl(relativeUrl);
        var fileStream: NodeJS.WritableStream = fs.createWriteStream(filePath);

        var headers = {};
        headers["Accept"] = fileType + (apiVersion ? (";api-version=" + apiVersion) : "");

        this.httpClient.getFile(getUrl, fileStream, headers, (err: any, res: ifm.IHttpResponse) => {
            if (err) {
                shell.rm('-rf', filePath);
                onResult(err, err.statusCode);
            } else if (res.statusCode > 299) {
                shell.rm('-rf', filePath);
                onResult(new Error('Unable to download file'), res.statusCode);
            } else {
                onResult(null, res.statusCode);
            }
        });
    }

    replace(relativeUrl: string, apiVersion: string, resources: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
        this._sendJson('PUT', apiVersion, relativeUrl, resources, onResult);
    }

    _sendWrappedJson(verb: string, relativeUrl: string, apiVersion: string, resources: any[], onResult: (err: any, statusCode: number, resources: any[]) => void): void {
        var wrapped = {
            count: resources.length,
            value: resources
        }

        this._sendJson(verb, relativeUrl, apiVersion, wrapped, (err: any, statusCode: number, obj: any) => {
            if (err) {
                onResult(err, statusCode, null);
            } else {
                var val = obj ? obj.value : obj;
                onResult(null, statusCode, val);
            }
        });
    }

    _getJson(verb: string, relativeUrl: string, apiVersion: string, onResult: (err: any, statusCode: number, obj: any) => void): void {
        var getUrl = this.resolveUrl(relativeUrl);

        var headers = {};
        headers["Accept"] = 'application/json' + (apiVersion ? (";api-version=" + apiVersion) : "");
        this.httpClient.get(verb, getUrl, headers, (err: any, res: ifm.IHttpResponse, contents: string) => {
            if (err) {
                onResult(err, err.statusCode, null);
                return;
            }

            processResponse(getUrl, res, contents, onResult);
        });
    }

    _sendJson(verb: string, relativeUrl: string, apiVersion: string, data: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
        var postUrl = this.resolveUrl(relativeUrl);

        var headers = {};
        headers["Accept"] = 'application/json' + (apiVersion ? (";api-version=" + apiVersion) : "");
        headers["Content-Type"] = 'application/json; charset=utf-8';

        this.httpClient.send(verb, postUrl, data, headers, (err: any, res: ifm.IHttpResponse, contents: string) => {
            if (err) {
                onResult(err, err.statusCode, null);
                return;
            }

            processResponse(postUrl, res, contents, onResult);
        });
    }

    // TODO: postJsonWrappedArray
}


//// Copyright (c) Microsoft. All rights reserved.
//// Licensed under the MIT license. See LICENSE file in the project root for full license information.

///// <reference path="./definitions/node.d.ts"/>

//import fs = require("fs");
//import url = require("url");
//import path = require("path");
//import http = require("http");
//import httpm = require("./httpclient");
//import ifm = require('./interfaces/common/CoreInterfaces');

///**
// * getJSON:  REST get request returning JSON object(s)
// * @param options: http options object
// * @param callback: callback to pass the results JSON object(s) back
// */

//var getJsonResponse = function (contents) {
//    var json = JSON.parse(contents);
//    return json;
//}

//var httpCodes = {
//    300: "Multiple Choices",
//    301: "Moved Permanantly",
//    302: "Resource Moved",
//    304: "Not Modified",
//    305: "Use Proxy",
//    306: "Switch Proxy",
//    307: "Temporary Redirect",
//    308: "Permanent Redirect",
//    400: "Bad Request",
//    401: "Unauthorized",
//    402: "Payment Required",
//    403: "Forbidden",
//    404: "Not Found",
//    405: "Method Not Allowed",
//    406: "Not Acceptable",
//    407: "Proxy Authentication Required",
//    408: "Request Timeout",
//    409: "Conflict",
//    410: "Gone",
//    500: "Internal Server Error",
//    501: "Not Implemented",
//    502: "Bad Gateway",
//    503: "Service Unavailable",
//    504: "Gateway Timeout"
//}

//export function processResponse(url, res, contents, onResult) {
//    if (res.statusCode > 299) {
//        // not success
//        var msg = httpCodes[res.statusCode] ? "Failed Request: " + httpCodes[res.statusCode] : "Failed Request";
//        msg += '(' + res.statusCode + ') - ' + url;

//        onResult(new Error(msg), res.statusCode, null);
//    } else {
//        try {
//            var jsonObj = null;
//            if (contents && contents.length > 0) {
//                jsonObj = JSON.parse(contents);
//            }
//        } catch (e) {

//            onResult(new Error('Invalid Resource'), res.statusCode, null);
//            return;
//        }

//        onResult(null, res.statusCode, jsonObj);
//    }
//};

//export function enumToString(enumType: any, enumValue: number, camelCase: boolean) {
//    var valueString = enumType[enumValue];

//    if (valueString && camelCase) {
//        if (valueString.length <= 1) {
//            valueString = valueString.toLowerCase();
//        }
//        else {
//            valueString = valueString.substring(0, 1).toLowerCase() + valueString.substring(1);
//        }
//    }

//    return valueString;
//}

//export class RestClient implements ifm.IRestClient {
//    baseUrl: string;
//    basePath: string;
//    httpClient: ifm.IHttpClient;

//    constructor(baseUrl: string, httpClient: ifm.IHttpClient) {
//        this.baseUrl = baseUrl;
//        this.basePath = url.parse(baseUrl).pathname;
//        this.httpClient = httpClient;
//    }

//    getJson(relativeUrl: string, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        this._getJson('GET', relativeUrl, onResult);
//    }

//    getJsonWrappedArray(relativeUrl: string, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        this.getJson(relativeUrl, (err: any, statusCode: number, obj: any) => {
//            if (err) {
//                onResult(err, statusCode, null);
//            } else {
//                if (obj['value'] instanceof Array) {
//                    onResult(null, statusCode, obj['value']);
//                } else {
//                    onResult(null, statusCode, obj);
//                }
//            }
//        });
//    }

//    delete(relativeUrl: string, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        this._getJson('DELETE', relativeUrl, onResult);
//    }

//    create(relativeUrl: string, resources: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        this._sendJson('POST', relativeUrl, resources, onResult);
//    }

//    createJsonWrappedArray(relativeUrl: string, resources: any[], onResult: (err: any, statusCode: number, resources: any[]) => void): void {
//        this._sendWrappedJson('POST', relativeUrl, resources, onResult);
//    }

//    update(relativeUrl: string, resources: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        this._sendJson('PATCH', relativeUrl, resources, onResult);
//    }

//    updateJsonWrappedArray(relativeUrl: string, resources: any[], onResult: (err: any, statusCode: number, resources: any[]) => void): void {
//        this._sendWrappedJson('PATCH', relativeUrl, resources, onResult);
//    }

//    uploadFile(relativeUrl: string, filePath: string, customHeaders: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        fs.stat(filePath, (err, stats) => {
//            if (err) {
//                onResult(err, 400, null);
//                return;
//            }

//            var headers = customHeaders || {};
//            headers["Content-Length"] = stats.size;

//            var contentStream: NodeJS.ReadableStream = fs.createReadStream(filePath);

//            this.uploadStream('POST', relativeUrl, contentStream, headers, onResult);
//        });
//    }

//    uploadStream(verb: string, relativeUrl: string, contentStream: NodeJS.ReadableStream, customHeaders: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        var postUrl = this.resolveUrl(relativeUrl);

//        var headers = customHeaders || {};
//        headers["Accept"] = 'application/json';

//        var data = {
//            verb: verb,
//            relativeUrl: relativeUrl
//        };

//        onResult(null, 200, data);

//        /*this.httpClient.sendFile(verb, postUrl, contentStream, headers, (err: any, res: ifm.IHttpResponse, contents: string) => {
//            if (err) {
//                onResult(err, err.statusCode, contents);
//                return;
//            }

//            processResponse(postUrl, res, contents, onResult);
//        });*/
//    }    

//    downloadFile(relativeUrl: string, filePath: string, fileType: string, onResult: (err: any, statusCode: number) => void): void {
//        /*if (fs.existsSync(filePath)) {
//            onResult(new Error('File ' + filePath + ' already exists.'), null);
//            return;
//        }*/

//        var getUrl = this.resolveUrl(relativeUrl);
//        var fileStream: NodeJS.WritableStream = fs.createWriteStream(filePath);

//        var headers = {};
//        headers["Accept"] = fileType;

//        onResult(null, 200);

//        /*this.httpClient.getFile(getUrl, fileStream, headers, (err: any, res: ifm.IHttpResponse) => {
//            if (err) {
//                shell.rm('-rf', filePath);
//                onResult(err, err.statusCode);
//            } else if(res.statusCode > 299) {
//                shell.rm('-rf', filePath);
//                onResult(new Error('Unable to download file'), res.statusCode);
//            } else {
//                onResult(null, res.statusCode);
//            }
//        });*/
//    }

//    replace(relativeUrl: string, resources: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        this._sendJson('PUT', relativeUrl, resources, onResult);
//    }

//    _sendWrappedJson(verb: string, relativeUrl: string, resources: any[], onResult: (err: any, statusCode: number, resources: any[]) => void): void {
//        var wrapped = {
//            count: resources.length,
//            value: resources
//        }

//        this._sendJson(verb, relativeUrl, wrapped, (err: any, statusCode: number, obj: any) => {
//            if (err) {
//                onResult(err, statusCode, null);
//            } else {
//                var val = obj ? obj.value : obj;
//                onResult(null, statusCode, val);
//            }
//        });
//    }

//    _getJson(verb: string, relativeUrl: string, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        var getUrl = this.resolveUrl(relativeUrl);

//        var headers = {};
//        headers["Accept"] = 'application/json';
//        var data = {
//            verb: verb,
//            relativeUrl: relativeUrl
//        };

//        onResult(null, 200, data);
//        /*this.httpClient.get(verb, getUrl, headers, (err: any, res: ifm.IHttpResponse, contents: string) => {
//            if (err) {
//                onResult(err, err.statusCode, null);
//                return;
//            }

//            processResponse(getUrl, res, contents, onResult);
//        });*/
//    }

//    _sendJson(verb: string, relativeUrl: string, data: any, onResult: (err: any, statusCode: number, obj: any) => void): void {
//        var postUrl = this.resolveUrl(relativeUrl);

//        var headers = {};
//        headers["Accept"] = 'application/json';
//        headers["Content-Type"] = 'application/json; charset=utf-8';
//        if (data != null) {
//            data.verb = verb;
//            data.relativeUrl = relativeUrl;
//        }

//        onResult(null, 200, data);
//        /*
//        //This is what usually happens, but we don't really actually want to send a request...
//        //just want to verify that the right thing is sent
//        this.httpClient.send(verb, postUrl, data, headers, (err: any, res: ifm.IHttpResponse, contents: string) => {
//            if (err) {
//                onResult(err, err.statusCode, null);
//                return;
//            }

//            processResponse(postUrl, res, contents, onResult);
//        });*/
//    }

//    // TODO: postJsonWrappedArray
//}
