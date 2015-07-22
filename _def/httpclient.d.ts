/// <reference path="../../src/api/definitions/node.d.ts" />
import http = require("http");
import ifm = require('./interfaces/common/VsoBaseInterfaces');
export declare class HttpClient implements ifm.IHttpClient {
    userAgent: string;
    handlers: ifm.IRequestHandler[];
    socketTimeout: number;
    constructor(userAgent: string, handlers?: ifm.IRequestHandler[], socketTimeout?: number);
    get(verb: string, requestUrl: string, headers: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void;
    send(verb: string, requestUrl: string, objs: any, headers: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void;
    sendFile(verb: string, requestUrl: string, content: NodeJS.ReadableStream, headers: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void;
    getStream(requestUrl: string, apiVersion: string, type: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    makeAcceptHeader(type: string, apiVersion: string): string;
    _getOptions(method: string, requestUrl: string, headers: any): any;
    request(protocol: any, options: any, objs: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void;
}
