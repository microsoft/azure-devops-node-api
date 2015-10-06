import basem = require('./ClientApiBases');
import ifm = require("./interfaces/common/VsoBaseInterfaces");
import taskagentbasem = require('./TaskAgentApiBase');
import url = require('url');
import vsom = require('./VsoClient');
import Q = require("q");
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');

export interface ITaskAgentApi extends taskagentbasem.ITaskAgentApiBase {
    uploadTaskDefinition(customHeaders: VsoBaseInterfaces.IHeaders, contentStream: NodeJS.ReadableStream, taskId: string, overwrite: boolean, onResult: (err: any, statusCode: number, obj: any) => void): void;
}

export interface IQTaskAgentApi extends taskagentbasem.IQTaskAgentApiBase {
    uploadTaskDefinition(customHeaders: VsoBaseInterfaces.IHeaders, contentStream: NodeJS.ReadableStream, taskId: string, overwrite: boolean) : Q.Promise<void>;
}

export class TaskAgentApi extends taskagentbasem.TaskAgentApiBase implements ITaskAgentApi {
    private _handlers: VsoBaseInterfaces.IRequestHandler[];
    private _fallbackClient: TaskAgentApi;
    
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers);
        
        // hang on to the handlers in case we need to fall back to an account-level client
        this._handlers = handlers;
    }
    
    /**
     * @param {string} taskId
     * @param onResult callback function
     */
    public deleteTaskDefinition(
        taskId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        this.vsoClient.beginGetLocation("distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd")
        .then((location: ifm.ApiResourceLocation) => {
            if (location) {
                // the resource exists at the url we were given. go!
                super.deleteTaskDefinition(taskId, onResult);
            }
            else {
                // this is the case when the server doesn't support collection-level task definitions
                var fallbackClient = this._getFallbackClient(this.baseUrl);
                if (!fallbackClient) {
                    // couldn't convert
                    throw new Error("Failed to find api location for area: distributedtask id: 60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd");
                }
                else {
                    // use the fallback client 
                    fallbackClient.deleteTaskDefinition(taskId, onResult);
                }
            }
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getTaskContentZip(
        taskId: string,
        versionString: string,
        visibility: string[],
        scopeLocal: boolean,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        this.vsoClient.beginGetLocation("distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd")
        .then((location: ifm.ApiResourceLocation) => {
            if (location) {
                // the resource exists at the url we were given. go!
                super.getTaskContentZip(taskId, versionString, visibility, scopeLocal, onResult);
            }
            else {
                // this is the case when the server doesn't support collection-level task definitions
                var fallbackClient = this._getFallbackClient(this.baseUrl);
                if (!fallbackClient) {
                    // couldn't convert
                    throw new Error("Failed to find api location for area: distributedtask id: 60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd");
                }
                else {
                    // use the fallback client 
                    fallbackClient.getTaskContentZip(taskId, versionString, visibility, scopeLocal, onResult);
                }
            }
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskDefinition
     */
    public getTaskDefinition(
        taskId: string,
        versionString: string,
        visibility: string[],
        scopeLocal: boolean,
        onResult: (err: any, statusCode: number, task: TaskAgentInterfaces.TaskDefinition) => void
        ): void {

        this.vsoClient.beginGetLocation("distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd")
        .then((location: ifm.ApiResourceLocation) => {
            if (location) {
                // the resource exists at the url we were given. go!
                super.getTaskDefinition(taskId, versionString, visibility, scopeLocal, onResult);
            }
            else {
                // this is the case when the server doesn't support collection-level task definitions
                var fallbackClient = this._getFallbackClient(this.baseUrl);
                if (!fallbackClient) {
                    // couldn't convert
                    throw new Error("Failed to find api location for area: distributedtask id: 60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd");
                }
                else {
                    // use the fallback client 
                    fallbackClient.getTaskDefinition(taskId, versionString, visibility, scopeLocal, onResult);
                }
            }
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} taskId
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskDefinition[]
     */
    public getTaskDefinitions(
        taskId: string,
        visibility: string[],
        scopeLocal: boolean,
        onResult: (err: any, statusCode: number, tasks: TaskAgentInterfaces.TaskDefinition[]) => void
        ): void {

        this.vsoClient.beginGetLocation("distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd")
        .then((location: ifm.ApiResourceLocation) => {
            if (location) {
                // the resource exists at the url we were given. go!
                super.getTaskDefinitions(taskId, visibility, scopeLocal, onResult);
            }
            else {
                // this is the case when the server doesn't support collection-level task definitions
                var fallbackClient = this._getFallbackClient(this.baseUrl);
                if (!fallbackClient) {
                    // couldn't convert
                    throw new Error("Failed to find api location for area: distributedtask id: 60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd");
                }
                else {
                    // use the fallback client 
                    fallbackClient.getTaskDefinitions(taskId, visibility, scopeLocal, onResult);
                }
            }
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }
    
	/**
     * @param {NodeJS.ReadableStream} contentStream
     * @param {string} taskId
     * @param {boolean} overwrite
     * @param onResult callback function
     */
    public uploadTaskDefinition(
        customHeaders: VsoBaseInterfaces.IHeaders,
        contentStream: NodeJS.ReadableStream,
        taskId: string,
        overwrite: boolean,
        onResult: (err: any, statusCode: number, obj: any) => void
        ): void {

        this.vsoClient.beginGetLocation("distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd")
        .then((location: ifm.ApiResourceLocation) => {
            if (location) {
                // the resource exists at the url we were given. go!
                this._uploadTaskDefinition(customHeaders, contentStream, taskId, overwrite, onResult);
            }
            else {
                // this is the case when the server doesn't support collection-level task definitions
                var fallbackClient = this._getFallbackClient(this.baseUrl);
                if (!fallbackClient) {
                    // couldn't convert
                    throw new Error("Failed to find api location for area: distributedtask id: 60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd");
                }
                else {
                    // use the fallback client 
                    fallbackClient._uploadTaskDefinition(customHeaders, contentStream, taskId, overwrite, onResult);
                }
            }
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }
    
    /**
     * @param {NodeJS.ReadableStream} contentStream
     * @param {string} taskId
     * @param {boolean} overwrite
     * @param onResult callback function
     */
    private _uploadTaskDefinition(
        customHeaders: VsoBaseInterfaces.IHeaders,
        contentStream: NodeJS.ReadableStream,
        taskId: string,
        overwrite: boolean,
        onResult: (err: any, statusCode: number, obj: any) => void
        ): void {

        var routeValues: any = {
            taskId: taskId
        };

        var queryValues: any = {
            overwrite: overwrite,
        };
        
        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/octet-stream";

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.uploadStream('PUT', url, apiVersion, contentStream, customHeaders, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }
    
    private _getFallbackClient(baseUrl: string): TaskAgentApi {
        if (!this._fallbackClient) {
            var accountUrl = this._getAccountUrl(baseUrl);
            if (accountUrl) {
                this._fallbackClient = new TaskAgentApi(accountUrl, this._handlers);
            }
        }
        
        return this._fallbackClient;
    }
    
    private _getAccountUrl(collectionUrl: string): string {
        // converts a collection URL to an account URL
        // returns null if the conversion can't be made
        var purl = url.parse(collectionUrl);
        if (!purl.protocol || !purl.host) {
            return null;
        }
        
        var accountUrl = purl.protocol + '//' + purl.host;
        
        // purl.path is something like /DefaultCollection or /tfs/DefaultCollection or /DefaultCollection/
        var splitPath: string[] = purl.path.split('/').slice(1);
        if (splitPath.length === 0 || (splitPath.length === 1 && splitPath[0] === '')) {
            return null;
        }
        if (splitPath.length === 2 && splitPath[0] === 'tfs') {
            //on prem
            accountUrl += '/' + 'tfs';
        }
        else if (splitPath.length === 2 && splitPath[0] === '') {
            // /DefaultCollection/
            return accountUrl;
        }
        else if (splitPath.length > 1) {
            return null;
        }
        
        return accountUrl;
    }
}

export class QTaskAgentApi extends taskagentbasem.QTaskAgentApiBase implements IQTaskAgentApi {
    api: TaskAgentApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, TaskAgentApi);
    }

    /**
    * @param {NodeJS.ReadableStream} contentStream
    * @param {string} taskId
    * @param {boolean} overwrite
    */
    public uploadTaskDefinition(customHeaders: VsoBaseInterfaces.IHeaders, contentStream: NodeJS.ReadableStream, taskId: string, overwrite: boolean) : Q.Promise<void> {
        var deferred = Q.defer<void>();

        this.api.uploadTaskDefinition(customHeaders, contentStream, taskId, overwrite, (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        });

        return <Q.Promise<void>>deferred.promise;
    }   
}