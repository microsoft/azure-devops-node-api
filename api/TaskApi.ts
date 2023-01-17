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

import * as restm from 'typed-rest-client/RestClient';
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITaskApi extends basem.ClientApiBase {
    getPlanAttachments(scopeIdentifier: string, hubName: string, planId: string, type: string): Promise<TaskAgentInterfaces.TaskAttachment[]>;
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): Promise<TaskAgentInterfaces.TaskAttachment>;
    createAttachmentFromArtifact(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string, artifactHash: string, length: number): Promise<TaskAgentInterfaces.TaskAttachment>;
    getAttachment(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): Promise<TaskAgentInterfaces.TaskAttachment>;
    getAttachmentContent(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string): Promise<NodeJS.ReadableStream>;
    getAttachments(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string): Promise<TaskAgentInterfaces.TaskAttachment[]>;
    appendTimelineRecordFeed(lines: TaskAgentInterfaces.TimelineRecordFeedLinesWrapper, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string): Promise<void>;
    getLines(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, stepId: string, endLine?: number, takeCount?: number, continuationToken?: string): Promise<TaskAgentInterfaces.TimelineRecordFeedLinesWrapper>;
    getJobInstance(scopeIdentifier: string, hubName: string, orchestrationId: string): Promise<TaskAgentInterfaces.TaskAgentJob>;
    appendLogContent(customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, logId: number): Promise<TaskAgentInterfaces.TaskLog>;
    associateLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, serializedBlobId: string, lineCount: number): Promise<TaskAgentInterfaces.TaskLog>;
    createLog(log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.TaskLog>;
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number, endLine?: number): Promise<string[]>;
    getLogs(scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.TaskLog[]>;
    getPlanGroupsQueueMetrics(scopeIdentifier: string, hubName: string): Promise<TaskAgentInterfaces.TaskOrchestrationPlanGroupsQueueMetrics[]>;
    createOidcToken(claims: { [key: string] : string; }, scopeIdentifier: string, hubName: string, planId: string, jobId: string, serviceConnectionId: string): Promise<TaskAgentInterfaces.TaskHubOidcToken>;
    getQueuedPlanGroups(scopeIdentifier: string, hubName: string, statusFilter?: TaskAgentInterfaces.PlanGroupStatus, count?: number): Promise<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup[]>;
    getQueuedPlanGroup(scopeIdentifier: string, hubName: string, planGroup: string): Promise<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup>;
    getPlan(scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.TaskOrchestrationPlan>;
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number): Promise<TaskAgentInterfaces.TimelineRecord[]>;
    updateRecords(records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string): Promise<TaskAgentInterfaces.TimelineRecord[]>;
    createTimeline(timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.Timeline>;
    deleteTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string): Promise<void>;
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number, includeRecords?: boolean): Promise<TaskAgentInterfaces.Timeline>;
    getTimelines(scopeIdentifier: string, hubName: string, planId: string): Promise<TaskAgentInterfaces.Timeline[]>;
}

export class TaskApi extends basem.ClientApiBase implements ITaskApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-Task-api', options);
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "eb55e5d6-2f30-4295-b5ed-38da50b1fc52",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAttachment[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAttachment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAttachment>;
                res = await this.rest.uploadStream<TaskAgentInterfaces.TaskAttachment>("PUT", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAttachment,
                                              false);

                resolve(ret);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @param {string} artifactHash
     * @param {number} length
     */
    public async createAttachmentFromArtifact(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string,
        name: string,
        artifactHash: string,
        length: number
        ): Promise<TaskAgentInterfaces.TaskAttachment> {
        if (artifactHash == null) {
            throw new TypeError('artifactHash can not be null or undefined');
        }
        if (length == null) {
            throw new TypeError('length can not be null or undefined');
        }

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

            let queryValues: any = {
                artifactHash: artifactHash,
                length: length,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAttachment>;
                res = await this.rest.replace<TaskAgentInterfaces.TaskAttachment>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAttachment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAttachment>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAttachment>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAttachment,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAttachment[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAttachment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Append content to timeline record feed.
     * 
     * @param {TaskAgentInterfaces.TimelineRecordFeedLinesWrapper} lines - Content to be appended to the timeline record feed.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} planId - ID of the plan.
     * @param {string} timelineId - ID of the task's timeline.
     * @param {string} recordId - ID of the timeline record.
     */
    public async appendTimelineRecordFeed(
        lines: TaskAgentInterfaces.TimelineRecordFeedLinesWrapper,
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
                    "7.1-preview.1",
                    "distributedtask",
                    "858983e4-19bd-4c5e-864c-507b59b58b12",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, lines, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} stepId
     * @param {number} endLine
     * @param {number} takeCount
     * @param {string} continuationToken
     */
    public async getLines(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        stepId: string,
        endLine?: number,
        takeCount?: number,
        continuationToken?: string
        ): Promise<TaskAgentInterfaces.TimelineRecordFeedLinesWrapper> {
        if (stepId == null) {
            throw new TypeError('stepId can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.TimelineRecordFeedLinesWrapper>(async (resolve, reject) => {
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                timelineId: timelineId,
                recordId: recordId
            };

            let queryValues: any = {
                stepId: stepId,
                endLine: endLine,
                takeCount: takeCount,
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "858983e4-19bd-4c5e-864c-507b59b58b12",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TimelineRecordFeedLinesWrapper>;
                res = await this.rest.get<TaskAgentInterfaces.TimelineRecordFeedLinesWrapper>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} orchestrationId
     */
    public async getJobInstance(
        scopeIdentifier: string,
        hubName: string,
        orchestrationId: string
        ): Promise<TaskAgentInterfaces.TaskAgentJob> {

        return new Promise<TaskAgentInterfaces.TaskAgentJob>(async (resolve, reject) => {
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                orchestrationId: orchestrationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "0a1efd25-abda-43bd-9629-6c7bdd2e0d60",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskAgentJob>;
                res = await this.rest.get<TaskAgentInterfaces.TaskAgentJob>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskAgentJob,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Append a log to a task's log. The log should be sent in the body of the request as a TaskLog object stream.
     * 
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} planId - The ID of the plan.
     * @param {number} logId - The ID of the log.
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
                    "7.1-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let options: restm.IRequestOptions = this.createRequestOptions('application/json',
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskLog>;
                res = await this.rest.uploadStream<TaskAgentInterfaces.TaskLog>("POST", url, contentStream, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskLog,
                                              false);

                resolve(ret);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} planId
     * @param {number} logId
     * @param {string} serializedBlobId
     * @param {number} lineCount
     */
    public async associateLog(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        logId: number,
        serializedBlobId: string,
        lineCount: number
        ): Promise<TaskAgentInterfaces.TaskLog> {
        if (serializedBlobId == null) {
            throw new TypeError('serializedBlobId can not be null or undefined');
        }
        if (lineCount == null) {
            throw new TypeError('lineCount can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.TaskLog>(async (resolve, reject) => {
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                logId: logId
            };

            let queryValues: any = {
                serializedBlobId: serializedBlobId,
                lineCount: lineCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskLog>;
                res = await this.rest.create<TaskAgentInterfaces.TaskLog>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskLog,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create a log and connect it to a pipeline run's execution plan.
     * 
     * @param {TaskAgentInterfaces.TaskLog} log - An object that contains information about log's path.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} planId - The ID of the plan.
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
                    "7.1-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskLog>;
                res = await this.rest.create<TaskAgentInterfaces.TaskLog>(url, log, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskLog,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string[]>;
                res = await this.rest.get<string[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskLog[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskLog[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskLog,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     */
    public async getPlanGroupsQueueMetrics(
        scopeIdentifier: string,
        hubName: string
        ): Promise<TaskAgentInterfaces.TaskOrchestrationPlanGroupsQueueMetrics[]> {

        return new Promise<TaskAgentInterfaces.TaskOrchestrationPlanGroupsQueueMetrics[]>(async (resolve, reject) => {
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "038fd4d5-cda7-44ca-92c0-935843fee1a7",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskOrchestrationPlanGroupsQueueMetrics[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskOrchestrationPlanGroupsQueueMetrics[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskOrchestrationPlanGroupsQueueMetrics,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {{ [key: string] : string; }} claims
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} planId
     * @param {string} jobId
     * @param {string} serviceConnectionId
     */
    public async createOidcToken(
        claims: { [key: string] : string; },
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        jobId: string,
        serviceConnectionId: string
        ): Promise<TaskAgentInterfaces.TaskHubOidcToken> {
        if (serviceConnectionId == null) {
            throw new TypeError('serviceConnectionId can not be null or undefined');
        }

        return new Promise<TaskAgentInterfaces.TaskHubOidcToken>(async (resolve, reject) => {
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planId: planId,
                jobId: jobId
            };

            let queryValues: any = {
                serviceConnectionId: serviceConnectionId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "69a319f4-28c1-4bfd-93e6-ea0ff5c6f1a2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskHubOidcToken>;
                res = await this.rest.create<TaskAgentInterfaces.TaskHubOidcToken>(url, claims, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {TaskAgentInterfaces.PlanGroupStatus} statusFilter
     * @param {number} count
     */
    public async getQueuedPlanGroups(
        scopeIdentifier: string,
        hubName: string,
        statusFilter?: TaskAgentInterfaces.PlanGroupStatus,
        count?: number
        ): Promise<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup[]> {

        return new Promise<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup[]>(async (resolve, reject) => {
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName
            };

            let queryValues: any = {
                statusFilter: statusFilter,
                count: count,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "0dd73091-3e36-4f43-b443-1b76dd426d84",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup[]>;
                res = await this.rest.get<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskOrchestrationQueuedPlanGroup,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} planGroup
     */
    public async getQueuedPlanGroup(
        scopeIdentifier: string,
        hubName: string,
        planGroup: string
        ): Promise<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup> {

        return new Promise<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup>(async (resolve, reject) => {
            let routeValues: any = {
                scopeIdentifier: scopeIdentifier,
                hubName: hubName,
                planGroup: planGroup
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "distributedtask",
                    "65fd0708-bc1e-447b-a731-0587c5464e5b",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup>;
                res = await this.rest.get<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskOrchestrationQueuedPlanGroup,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.2",
                    "distributedtask",
                    "5cecd946-d704-471e-a45f-3b4064fcfaba",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TaskOrchestrationPlan>;
                res = await this.rest.get<TaskAgentInterfaces.TaskOrchestrationPlan>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TaskOrchestrationPlan,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "8893bc5b-35b2-4be7-83cb-99e683551db4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TimelineRecord[]>;
                res = await this.rest.get<TaskAgentInterfaces.TimelineRecord[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TimelineRecord,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update timeline records if they already exist, otherwise create new ones for the same timeline.
     * 
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>} records - The array of timeline records to be updated.
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
     * @param {string} planId - The ID of the plan.
     * @param {string} timelineId - The ID of the timeline.
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
                    "7.1-preview.1",
                    "distributedtask",
                    "8893bc5b-35b2-4be7-83cb-99e683551db4",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.TimelineRecord[]>;
                res = await this.rest.update<TaskAgentInterfaces.TimelineRecord[]>(url, records, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.TimelineRecord,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {TaskAgentInterfaces.Timeline} timeline
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.Timeline>;
                res = await this.rest.create<TaskAgentInterfaces.Timeline>(url, timeline, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.Timeline,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.del<void>(url, options);

                let ret = this.formatResponse(res.result,
                                              null,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.Timeline>;
                res = await this.rest.get<TaskAgentInterfaces.Timeline>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.Timeline,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub. Common examples: "build", "rm", "checks"
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
                    "7.1-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<TaskAgentInterfaces.Timeline[]>;
                res = await this.rest.get<TaskAgentInterfaces.Timeline[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              TaskAgentInterfaces.TypeInfo.Timeline,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
