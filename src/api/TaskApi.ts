/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*
* See following wiki page for instructions on how to regenerate:
*   https://vsowiki.com/index.php?title=Rest_Client_Generation
*/

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.

/// <reference path="./definitions/node.d.ts"/>
/// <reference path="./definitions/Q.d.ts"/>

import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import CoreInterfaces = require('./interfaces/common/CoreInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITaskApi {
    baseUrl: string;
    userAgent: string;
    httpClient: CoreInterfaces.IHttpClient;
    restClient: CoreInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    postEvent(eventData: TaskAgentInterfaces.JobEvent, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number) => void): void;
    postLines(lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, onResult: (err: any, statusCode: number) => void): void;
    appendLog(contentStream: NodeJS.ReadableStream, customHeaders: any, content: string, scopeIdentifier: string, hubName: string, planId: string, logId: number, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void): void;
    createLog(log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void): void;
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, logs: string[]) => void): void;
    getLogs(scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => void): void;
    getPlan(scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan) => void): void;
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, onResult: (err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]) => void): void;
    updateRecords(records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]) => void): void;
    createTimeline(timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void): void;
    deleteTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (err: any, statusCode: number) => void): void;
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, includeRecords: boolean, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void): void;
    getTimelines(scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]) => void): void;
}

export interface IQTaskApi {
    connect(): Q.Promise<void>;
    
    appendLog(contentStream: NodeJS.ReadableStream, customHeaders: any, content: string, scopeIdentifier: string, hubName: string, planId: string,  logId: number): Q.Promise<TaskAgentInterfaces.TaskLog>;
    createLog(log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.TaskLog>;
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number,  endLine?: number): Q.Promise<string[]>;
    getLogs(scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.TaskLog[]>;
    getPlan(scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan>;
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string,  changeId?: number): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
    updateRecords(records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string,  timelineId: string): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
    createTimeline(timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.Timeline>;
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number,  includeRecords?: boolean): Q.Promise<TaskAgentInterfaces.Timeline>;
    getTimelines(scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.Timeline[]>;
}

export class TaskApi implements ITaskApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient

    constructor(baseUrl: string, handlers: CoreInterfaces.IRequestHandler[]) {
        this.baseUrl = baseUrl;
        this.httpClient = new httpm.HttpClient('node-Task-api', handlers);
        this.restClient = new restm.RestClient(this.httpClient);
        this.vsoClient = new vsom.VsoClient(baseUrl, this.restClient);
    }

    setUserAgent(userAgent: string) {
        this.userAgent = userAgent;
        this.httpClient.userAgent = userAgent;
    }
    
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void {
        this.restClient.getJson(this.vsoClient.resolveUrl('/_apis/connectionData'), "", onResult);
    }

    /**
     * @param {TaskAgentInterfaces.JobEvent} eventData
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function
     */
    public postEvent(
        eventData: TaskAgentInterfaces.JobEvent,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "557624af-b29e-4c20-8ab0-0399d2204f3f", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.create(path, apiVersion, eventData, onResult);
        });
    }

    /**
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<string[]>} lines
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param onResult callback function
     */
    public postLines(
        lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId,
            recordId: recordId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "858983e4-19bd-4c5e-864c-507b59b58b12", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.create(path, apiVersion, lines, onResult);
        });
    }

    /**
     * @param {string} content
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskLog
     */
    public appendLog(
        contentStream: NodeJS.ReadableStream,
        customHeaders: any,
        content: string,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        logId: number,
        onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            logId: logId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.uploadStream("POST", path, apiVersion, contentStream, customHeaders, onResult);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskLog} log
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskLog
     */
    public createLog(
        log: TaskAgentInterfaces.TaskLog,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.create(path, apiVersion, log, onResult);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param onResult callback function with the resulting string[]
     */
    public getLog(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        logId: number,
        startLine: number,
        endLine: number,
        onResult: (err: any, statusCode: number, logs: string[]) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            logId: logId
        };

        var queryValues = {
            startLine: startLine,
            endLine: endLine
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.getJsonWrappedArray(path, apiVersion, onResult);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskLog[]
     */
    public getLogs(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.getJsonWrappedArray(path, apiVersion, onResult);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskOrchestrationPlan
     */
    public getPlan(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "5cecd946-d704-471e-a45f-3b4064fcfaba", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.getJson(path, apiVersion, onResult);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TimelineRecord[]
     */
    public getRecords(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        changeId: number,
        onResult: (err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        var queryValues = {
            changeId: changeId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "8893bc5b-35b2-4be7-83cb-99e683551db4", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.getJsonWrappedArray(path, apiVersion, onResult);
        });
    }

    /**
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>} records
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TimelineRecord[]
     */
    public updateRecords(
        records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        onResult: (err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "8893bc5b-35b2-4be7-83cb-99e683551db4", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.update(path, apiVersion, records, onResult);
        });
    }

    /**
     * @param {TaskAgentInterfaces.Timeline} timeline
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.Timeline
     */
    public createTimeline(
        timeline: TaskAgentInterfaces.Timeline,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.create(path, apiVersion, timeline, onResult);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param onResult callback function
     */
    public deleteTimeline(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.delete(path, apiVersion, onResult);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @param {boolean} includeRecords
     * @param onResult callback function with the resulting TaskAgentInterfaces.Timeline
     */
    public getTimeline(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        changeId: number,
        includeRecords: boolean,
        onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        var queryValues = {
            changeId: changeId,
            includeRecords: includeRecords
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.getJson(path, apiVersion, onResult);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.Timeline[]
     */
    public getTimelines(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]) => void
        ): void {

        var routeValues = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            
            this.restClient.getJsonWrappedArray(path, apiVersion, onResult);
        });
    }

}

export class QTaskApi implements IQTaskApi {
    TaskApi: ITaskApi;

    constructor(baseUrl: string, handlers: CoreInterfaces.IRequestHandler[]) {
        this.TaskApi = new TaskApi(baseUrl, handlers);
    }

    public connect(): Q.Promise<any> {
        var defer = Q.defer();

        this.TaskApi.connect((err: any, statusCode: number, obj: any) => {
            if (err) {
                err.statusCode = statusCode;
                defer.reject(err);
            }
            else {
                defer.resolve(obj);
            }
        });

        return defer.promise;       
    }

    
    /**
    * @param {string} content
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {number} logId
    */
    public appendLog(
        contentStream: NodeJS.ReadableStream,
        customHeaders: any,
        content: string, 
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        logId: number
        ): Q.Promise<TaskAgentInterfaces.TaskLog> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskLog>();

        this.TaskApi.appendLog(contentStream, customHeaders, content, scopeIdentifier, hubName, planId, logId, (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskLog>>deferred.promise;
    }
    
    /**
    * @param {TaskAgentInterfaces.TaskLog} log
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public createLog(
        log: TaskAgentInterfaces.TaskLog, 
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.TaskLog> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskLog>();

        this.TaskApi.createLog(log, scopeIdentifier, hubName, planId, (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskLog>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {number} logId
    * @param {number} startLine
    * @param {number} endLine
    */
    public getLog(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        logId: number, 
        startLine?: number, 
        endLine?: number
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.TaskApi.getLog(scopeIdentifier, hubName, planId, logId, startLine, endLine, (err: any, statusCode: number, logs: string[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(logs);
            }
        });

        return <Q.Promise<string[]>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public getLogs(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.TaskLog[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskLog[]>();

        this.TaskApi.getLogs(scopeIdentifier, hubName, planId, (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(logs);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskLog[]>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public getPlan(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskOrchestrationPlan>();

        this.TaskApi.getPlan(scopeIdentifier, hubName, planId, (err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(plan);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {number} changeId
    */
    public getRecords(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        timelineId: string, 
        changeId?: number
        ): Q.Promise<TaskAgentInterfaces.TimelineRecord[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TimelineRecord[]>();

        this.TaskApi.getRecords(scopeIdentifier, hubName, planId, timelineId, changeId, (err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(records);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TimelineRecord[]>>deferred.promise;
    }
    
    /**
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>} records
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    */
    public updateRecords(
        records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, 
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        timelineId: string
        ): Q.Promise<TaskAgentInterfaces.TimelineRecord[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TimelineRecord[]>();

        this.TaskApi.updateRecords(records, scopeIdentifier, hubName, planId, timelineId, (err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(record);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TimelineRecord[]>>deferred.promise;
    }
    
    /**
    * @param {TaskAgentInterfaces.Timeline} timeline
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public createTimeline(
        timeline: TaskAgentInterfaces.Timeline, 
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.Timeline> {
    
        var deferred = Q.defer<TaskAgentInterfaces.Timeline>();

        this.TaskApi.createTimeline(timeline, scopeIdentifier, hubName, planId, (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(timeline);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.Timeline>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {number} changeId
    * @param {boolean} includeRecords
    */
    public getTimeline(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        timelineId: string, 
        changeId?: number, 
        includeRecords?: boolean
        ): Q.Promise<TaskAgentInterfaces.Timeline> {
    
        var deferred = Q.defer<TaskAgentInterfaces.Timeline>();

        this.TaskApi.getTimeline(scopeIdentifier, hubName, planId, timelineId, changeId, includeRecords, (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(timeline);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.Timeline>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public getTimelines(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.Timeline[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.Timeline[]>();

        this.TaskApi.getTimelines(scopeIdentifier, hubName, planId, (err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(timelines);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.Timeline[]>>deferred.promise;
    }
    
}