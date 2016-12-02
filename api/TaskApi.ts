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


import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
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
    public async getPlanAttachments(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        type: string
        ): Promise<TaskAgentInterfaces.TaskAttachment[]> {

        return new Promise<TaskAgentInterfaces.TaskAttachment[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                type: type
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "eb55e5d6-2f30-4295-b5ed-38da50b1fc52",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
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
    public async createAttachment(
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

        return new Promise<TaskAgentInterfaces.TaskAttachment>(async (resolve, reject) => {
            
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

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.uploadStream('PUT', url, apiVersion, contentStream, customHeaders);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getAttachment(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string,
        name: string
        ): Promise<TaskAgentInterfaces.TaskAttachment> {

        return new Promise<TaskAgentInterfaces.TaskAttachment>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                timelineId: timelineId,
                recordId: recordId,
                type: type,
                name: name
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
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
    public async getAttachmentContent(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string,
        name: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let onResult = (err: any, statusCode: number, attachment: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(attachment);
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

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {string} recordId
    * @param {string} type
    */
    public async getAttachments(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string
        ): Promise<TaskAgentInterfaces.TaskAttachment[]> {

        return new Promise<TaskAgentInterfaces.TaskAttachment[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                timelineId: timelineId,
                recordId: recordId,
                type: type
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<string[]>} lines
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {string} recordId
    */
    public async appendTimelineRecordFeed(
        lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                timelineId: timelineId,
                recordId: recordId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "858983e4-19bd-4c5e-864c-507b59b58b12",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, lines, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {NodeJS.ReadableStream} contentStream - Content to upload
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {number} logId
    */
    public async appendLogContent(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        logId: number
        ): Promise<TaskAgentInterfaces.TaskLog> {

        return new Promise<TaskAgentInterfaces.TaskLog>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                logId: logId
            };

            customHeaders = customHeaders || {};
            customHeaders["Content-Type"] = "application/octet-stream";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.uploadStream('POST', url, apiVersion, contentStream, customHeaders);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.TaskLog} log
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public async createLog(
        log: TaskAgentInterfaces.TaskLog,
        scopeIdentifier: string,
        hubName: string,
        planId: string
        ): Promise<TaskAgentInterfaces.TaskLog> {

        return new Promise<TaskAgentInterfaces.TaskLog>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, log, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {number} logId
    * @param {number} startLine
    * @param {number} endLine
    */
    public async getLog(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        logId: number,
        startLine?: number,
        endLine?: number
        ): Promise<string[]> {

        return new Promise<string[]>(async (resolve, reject) => {
            
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public async getLogs(
        scopeIdentifier: string,
        hubName: string,
        planId: string
        ): Promise<TaskAgentInterfaces.TaskLog[]> {

        return new Promise<TaskAgentInterfaces.TaskLog[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public async getPlan(
        scopeIdentifier: string,
        hubName: string,
        planId: string
        ): Promise<TaskAgentInterfaces.TaskOrchestrationPlan> {

        return new Promise<TaskAgentInterfaces.TaskOrchestrationPlan>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "5cecd946-d704-471e-a45f-3b4064fcfaba",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskOrchestrationPlan, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {number} changeId
    */
    public async getRecords(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        changeId?: number
        ): Promise<TaskAgentInterfaces.TimelineRecord[]> {

        return new Promise<TaskAgentInterfaces.TimelineRecord[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                timelineId: timelineId
            };

            let queryValues: any = {
                changeId: changeId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "8893bc5b-35b2-4be7-83cb-99e683551db4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TimelineRecord, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>} records
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    */
    public async updateRecords(
        records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string
        ): Promise<TaskAgentInterfaces.TimelineRecord[]> {

        return new Promise<TaskAgentInterfaces.TimelineRecord[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                timelineId: timelineId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "8893bc5b-35b2-4be7-83cb-99e683551db4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, records, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TimelineRecord, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TaskAgentInterfaces.Timeline} timeline
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public async createTimeline(
        timeline: TaskAgentInterfaces.Timeline,
        scopeIdentifier: string,
        hubName: string,
        planId: string
        ): Promise<TaskAgentInterfaces.Timeline> {

        return new Promise<TaskAgentInterfaces.Timeline>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, timeline, null);
                let serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    */
    public async deleteTimeline(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                timelineId: timelineId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {number} changeId
    * @param {boolean} includeRecords
    */
    public async getTimeline(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        changeId?: number,
        includeRecords?: boolean
        ): Promise<TaskAgentInterfaces.Timeline> {

        return new Promise<TaskAgentInterfaces.Timeline>(async (resolve, reject) => {
            
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
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public async getTimelines(
        scopeIdentifier: string,
        hubName: string,
        planId: string
        ): Promise<TaskAgentInterfaces.Timeline[]> {

        return new Promise<TaskAgentInterfaces.Timeline[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
