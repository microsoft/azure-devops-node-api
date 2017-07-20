import basem = require('./ClientApiBases');
import ifm = require("./interfaces/common/VsoBaseInterfaces");
import taskagentbasem = require('./TaskAgentApiBase');
import url = require('url');
import vsom = require('./VsoClient');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import * as restm from 'typed-rest-client/RestClient';

export interface ITaskAgentApi extends taskagentbasem.ITaskAgentApiBase {
    uploadTaskDefinition(customHeaders: VsoBaseInterfaces.IHeaders, contentStream: NodeJS.ReadableStream, taskId: string, overwrite: boolean): Promise<void>;
}

export class TaskAgentApi extends taskagentbasem.TaskAgentApiBase implements ITaskAgentApi {
    private _handlers: VsoBaseInterfaces.IRequestHandler[];
    private _options: VsoBaseInterfaces.IRequestOptions;
    private _fallbackClient: TaskAgentApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, options);

        // hang on to the handlers in case we need to fall back to an account-level client
        this._handlers = handlers;
        this._options = options;
    }

    /**
     * @param {string} taskId
     * @param onResult callback function
     */
    public deleteTaskDefinition(
        taskId: string
    ): Promise<void> {

        let promise = this.vsoClient.beginGetLocation("distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd")
            .then((location: ifm.ApiResourceLocation) => {
                if (location) {
                    // the resource exists at the url we were given. go!
                    return super.deleteTaskDefinition(taskId);
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
                        return fallbackClient.deleteTaskDefinition(taskId);
                    }
                }
            });

        return <Promise<void>>(<any>promise);
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
        scopeLocal: boolean
    ): Promise<NodeJS.ReadableStream> {

        let promise = this.vsoClient.beginGetLocation("distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd")
            .then((location: ifm.ApiResourceLocation) => {
                if (location) {
                    // the resource exists at the url we were given. go!
                    return super.getTaskContentZip(taskId, versionString, visibility, scopeLocal);
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
                        return fallbackClient.getTaskContentZip(taskId, versionString, visibility, scopeLocal);
                    }
                }
            });

        return <Promise<NodeJS.ReadableStream>>(<any>promise);
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
        scopeLocal: boolean
    ): Promise<TaskAgentInterfaces.TaskDefinition> {

        let promise = this.vsoClient.beginGetLocation("distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd")
            .then((location: ifm.ApiResourceLocation) => {
                if (location) {
                    // the resource exists at the url we were given. go!
                    return super.getTaskDefinition(taskId, versionString, visibility, scopeLocal);
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
                        return fallbackClient.getTaskDefinition(taskId, versionString, visibility, scopeLocal);
                    }
                }
            });

        return <Promise<TaskAgentInterfaces.TaskDefinition>>(<any>promise);
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
        scopeLocal: boolean
    ): Promise<TaskAgentInterfaces.TaskDefinition[]> {

        let promise = this.vsoClient.beginGetLocation("distributedtask", "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd")
            .then((location: ifm.ApiResourceLocation) => {
                if (location) {
                    // the resource exists at the url we were given. go!
                    return super.getTaskDefinitions(taskId, visibility, scopeLocal);
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
                        return fallbackClient.getTaskDefinitions(taskId, visibility, scopeLocal);
                    }
                }
            });

        return <Promise<TaskAgentInterfaces.TaskDefinition[]>>(<any>promise);
    }

	/**
     * @param {NodeJS.ReadableStream} contentStream
     * @param {string} taskId
     * @param {boolean} overwrite
     * @param onResult callback function
     */
    public async uploadTaskDefinition(
        customHeaders: VsoBaseInterfaces.IHeaders,
        contentStream: NodeJS.ReadableStream,
        taskId: string,
        overwrite: boolean
    ): Promise<void> {

        let routeValues: any = {
            taskId: taskId
        };

        let queryValues: any = {
            overwrite: overwrite,
        };

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.0-preview.1",
                    "distributedtask",
                    "60aac929-f0cd-4bc8-9ce4-6b30e8f1b1bd", routeValues, queryValues);

                let url: string = verData.requestUrl;

                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                    verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<void>;
                res = await this.rest.uploadStream<void>("POST", url, contentStream, options);

                resolve(res.result);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    private _getFallbackClient(baseUrl: string): TaskAgentApi {
        if (!this._fallbackClient) {
            var accountUrl = this._getAccountUrl(baseUrl);
            if (accountUrl) {
                this._fallbackClient = new TaskAgentApi(accountUrl, this._handlers, this._options);
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

        // if the first segment of the path is tfs, the second is the collection. if the url ends in / there will be a third, empty entry
        if (splitPath[0] === 'tfs' && (splitPath.length === 2 || (splitPath.length === 3 && splitPath[2].length === 0))) {
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