/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.


import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITaskApi extends basem.ClientApiBase {
    getPlanAttachments(scopeIdentifier: string, hubName: string, planId: string, type: string): Promise<TaskAgentInterfaces.TaskAttachment[]>;
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): Promise<TaskAgentInterfaces.TaskAttachment>;
    getAttachment(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): Promise<TaskAgentInterfaces.TaskAttachment>;
    getAttachmentContent(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): Promise<NodeJS.ReadableStream>;
    getAttachments(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string): Promise<TaskAgentInterfaces.TaskAttachment[]>;
    appendTimelineRecordFeed(lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string): Promise<void>;
    appendLogContent(customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, logId: number): Promise<TaskAgentInterfaces.TaskLog>;
    createLog(log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.TaskLog>;
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number, endLine?: number): Promise<string[]>;
    getLogs(scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.TaskLog[]>;
    getPlan(scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.TaskOrchestrationPlan>;
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number): Promise<TaskAgentInterfaces.TimelineRecord[]>;
    updateRecords(records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string): Promise<TaskAgentInterfaces.TimelineRecord[]>;
    createTimeline(timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.Timeline>;
    deleteTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string): Promise<void>;
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number, includeRecords?: boolean): Promise<TaskAgentInterfaces.Timeline>;
    getTimelines(scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.Timeline[]>;
}

export class TaskApi extends basem.ClientApiBase implements ITaskApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Task-api');
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} type
    */
    public getPlanAttachments(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        type: string
        ): Promise<TaskAgentInterfaces.TaskAttachment[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAttachment[]>();

        let onResult = (err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachments);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            type: type
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "eb55e5d6-2f30-4295-b5ed-38da50b1fc52", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {NodeJS.ReadableStream} contentStream - Content to upload
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {string} recordId
    * @param {string} type
    * @param {string} name
    */
    public createAttachment(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string,
        name: string
        ): Promise<TaskAgentInterfaces.TaskAttachment> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAttachment>();

        let onResult = (err: any, statusCode: number, attachment: TaskAgentInterfaces.TaskAttachment) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId,
            recordId: recordId,
            type: type,
            name: name
        };

        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/octet-stream";

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "7898f959-9cdf-4096-b29e-7f293031629e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: false };
                
                this.restClient.uploadStream('PUT', url, apiVersion, contentStream, customHeaders, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {string} recordId
    * @param {string} type
    * @param {string} name
    */
    public getAttachment(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string,
        name: string
        ): Promise<TaskAgentInterfaces.TaskAttachment> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAttachment>();

        let onResult = (err: any, statusCode: number, attachment: TaskAgentInterfaces.TaskAttachment) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId,
            recordId: recordId,
            type: type,
            name: name
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "7898f959-9cdf-4096-b29e-7f293031629e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {string} recordId
    * @param {string} type
    * @param {string} name
    */
    public getAttachmentContent(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string,
        name: string
        ): Promise<NodeJS.ReadableStream> {
    
        let deferred = Q.defer<NodeJS.ReadableStream>();

        let onResult = (err: any, statusCode: number, attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId,
            recordId: recordId,
            type: type,
            name: name
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "7898f959-9cdf-4096-b29e-7f293031629e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {string} recordId
    * @param {string} type
    */
    public getAttachments(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string
        ): Promise<TaskAgentInterfaces.TaskAttachment[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskAttachment[]>();

        let onResult = (err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachments);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId,
            recordId: recordId,
            type: type
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "7898f959-9cdf-4096-b29e-7f293031629e", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<string[]>} lines
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {string} recordId
    */
    public appendTimelineRecordFeed(
        lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId,
            recordId: recordId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "858983e4-19bd-4c5e-864c-507b59b58b12", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, lines, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
    }

    /**
    * @param {NodeJS.ReadableStream} contentStream - Content to upload
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {number} logId
    */
    public appendLogContent(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        logId: number
        ): Promise<TaskAgentInterfaces.TaskLog> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskLog>();

        let onResult = (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            logId: logId
        };

        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/octet-stream";

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseIsCollection: false };
                
                this.restClient.uploadStream('POST', url, apiVersion, contentStream, customHeaders, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskLog> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskLog>();

        let onResult = (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, log, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<string[]> {
    
        let deferred = Q.defer<string[]>();

        let onResult = (err: any, statusCode: number, logs: string[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(logs);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            logId: logId
        };

        let queryValues: any = {
            startLine: startLine,
            endLine: endLine,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskLog[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskLog[]>();

        let onResult = (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(logs);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TaskOrchestrationPlan> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TaskOrchestrationPlan>();

        let onResult = (err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(plan);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "5cecd946-d704-471e-a45f-3b4064fcfaba", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskOrchestrationPlan, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TimelineRecord[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TimelineRecord[]>();

        let onResult = (err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(records);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        let queryValues: any = {
            changeId: changeId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "8893bc5b-35b2-4be7-83cb-99e683551db4", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TimelineRecord, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.TimelineRecord[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.TimelineRecord[]>();

        let onResult = (err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(record);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "8893bc5b-35b2-4be7-83cb-99e683551db4", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TimelineRecord, responseIsCollection: true };
                
                this.restClient.update(url, apiVersion, records, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.Timeline> {
    
        let deferred = Q.defer<TaskAgentInterfaces.Timeline>();

        let onResult = (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(timeline);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseIsCollection: false };
                
                this.restClient.create(url, apiVersion, timeline, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    */
    public deleteTimeline(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string
        ): Promise<void> {
    
        let deferred = Q.defer<void>();

        let onResult = (err: any, statusCode: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(null);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseIsCollection: false };
                
                this.restClient.delete(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.Timeline> {
    
        let deferred = Q.defer<TaskAgentInterfaces.Timeline>();

        let onResult = (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(timeline);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        let queryValues: any = {
            changeId: changeId,
            includeRecords: includeRecords,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues, queryValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseIsCollection: false };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
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
        ): Promise<TaskAgentInterfaces.Timeline[]> {
    
        let deferred = Q.defer<TaskAgentInterfaces.Timeline[]>();

        let onResult = (err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(timelines);
            }
        };

        let routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues)
            .then((versioningData: vsom.ClientVersioningData) => {
                let url: string = versioningData.requestUrl;
                let apiVersion: string = versioningData.apiVersion;
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseIsCollection: true };
                
                this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
            })
            .fail((error) => {
                onResult(error, error.statusCode, null);
            });

        return deferred.promise;
    }

}
