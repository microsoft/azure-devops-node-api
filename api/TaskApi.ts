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
import * as httpm from 'typed-rest-client/HttpClient';
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
    getQueuedPlanGroups(scopeIdentifier: string, hubName: string, statusFilter?: TaskAgentInterfaces.PlanGroupStatusFilter, count?: number): Promise<TaskAgentInterfaces.TaskOrchestrationQueuedPlanGroup[]>;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "eb55e5d6-2f30-4295-b5ed-38da50b1fc52",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl;
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl;
                
                let apiVersion: string = verData.apiVersion;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "7898f959-9cdf-4096-b29e-7f293031629e",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "858983e4-19bd-4c5e-864c-507b59b58b12",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues);

                let url: string = verData.requestUrl;
                
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
                    "3.2-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "46f5667d-263a-4684-91b1-dff7fdcf64e2",
                    routeValues);

                let url: string = verData.requestUrl;
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
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {TaskAgentInterfaces.PlanGroupStatusFilter} statusFilter
    * @param {number} count
    */
    public async getQueuedPlanGroups(
        scopeIdentifier: string,
        hubName: string,
        statusFilter?: TaskAgentInterfaces.PlanGroupStatusFilter,
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
                    "3.2-preview.1",
                    "distributedtask",
                    "0dd73091-3e36-4f43-b443-1b76dd426d84",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "5cecd946-d704-471e-a45f-3b4064fcfaba",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "8893bc5b-35b2-4be7-83cb-99e683551db4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "8893bc5b-35b2-4be7-83cb-99e683551db4",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
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
                    "3.2-preview.1",
                    "distributedtask",
                    "83597576-cc2c-453c-bea6-2882ae6a1653",
                    routeValues);

                let url: string = verData.requestUrl;
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
