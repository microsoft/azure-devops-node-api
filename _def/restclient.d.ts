/// <reference path="../../src/api/definitions/node.d.ts" />
import ifm = require("./interfaces/common/VsoBaseInterfaces");
import Serialization = require('./Serialization');
export declare function processResponse(url: any, res: any, contents: any, serializationData: Serialization.SerializationData, onResult: any): void;
export declare function enumToString(enumType: any, enumValue: number, camelCase: boolean): any;
export declare class RestClient implements ifm.IRestClient {
    baseUrl: string;
    basePath: string;
    httpClient: ifm.IHttpClient;
    constructor(httpClient: ifm.IHttpClient);
    getJson(url: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
    getJsonWrappedArray(url: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
    options(url: string, onResult: (err: any, statusCode: number, obj: any) => void): void;
    delete(url: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
    create(url: string, apiVersion: string, resources: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
    createJsonWrappedArray(url: string, apiVersion: string, resources: any[], serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, resources: any[]) => void): void;
    update(url: string, apiVersion: string, resources: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
    updateJsonWrappedArray(url: string, apiVersion: string, resources: any[], serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, resources: any[]) => void): void;
    uploadFile(url: string, apiVersion: string, filePath: string, customHeaders: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
    uploadStream(verb: string, url: string, apiVersion: string, contentStream: NodeJS.ReadableStream, customHeaders: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
    replace(url: string, apiVersion: string, resources: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
    _sendWrappedJson(verb: string, url: string, apiVersion: string, resources: any[], serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, resources: any[]) => void): void;
    _getJson(verb: string, url: string, apiVersion: string, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
    _sendJson(verb: string, url: string, apiVersion: string, data: any, serializationData: Serialization.SerializationData, onResult: (err: any, statusCode: number, obj: any) => void): void;
}
