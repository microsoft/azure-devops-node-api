/// <reference path="../../src/api/definitions/node.d.ts" />
/// <reference path="../../src/api/definitions/Q.d.ts" />
import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");
export interface ITaskApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
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
    appendLog(contentStream: NodeJS.ReadableStream, customHeaders: any, content: string, scopeIdentifier: string, hubName: string, planId: string, logId: number): Q.Promise<TaskAgentInterfaces.TaskLog>;
    createLog(log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.TaskLog>;
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number, endLine?: number): Q.Promise<string[]>;
    getLogs(scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.TaskLog[]>;
    getPlan(scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan>;
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
    updateRecords(records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
    createTimeline(timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.Timeline>;
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number, includeRecords?: boolean): Q.Promise<TaskAgentInterfaces.Timeline>;
    getTimelines(scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.Timeline[]>;
}
export declare class TaskApi implements ITaskApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    setUserAgent(userAgent: string): void;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    /**
     * @param {TaskAgentInterfaces.JobEvent} eventData
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult cllback function
     */
    postEvent(eventData: TaskAgentInterfaces.JobEvent, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<string[]>} lines
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param onResult cllback function
     */
    postLines(lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} content
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @param onResult cllback function with the resulting TaskAgentInterfaces.TaskLog
     */
    appendLog(contentStream: NodeJS.ReadableStream, customHeaders: any, content: string, scopeIdentifier: string, hubName: string, planId: string, logId: number, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void): void;
    /**
     * @param {TaskAgentInterfaces.TaskLog} log
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult cllback function with the resulting TaskAgentInterfaces.TaskLog
     */
    createLog(log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param onResult cllback function with the resulting string[]
     */
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, logs: string[]) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult cllback function with the resulting TaskAgentInterfaces.TaskLog[]
     */
    getLogs(scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult cllback function with the resulting TaskAgentInterfaces.TaskOrchestrationPlan
     */
    getPlan(scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @param onResult cllback function with the resulting TaskAgentInterfaces.TimelineRecord[]
     */
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, onResult: (err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]) => void): void;
    /**
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>} records
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param onResult cllback function with the resulting TaskAgentInterfaces.TimelineRecord[]
     */
    updateRecords(records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]) => void): void;
    /**
     * @param {TaskAgentInterfaces.Timeline} timeline
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult cllback function with the resulting TaskAgentInterfaces.Timeline
     */
    createTimeline(timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param onResult cllback function
     */
    deleteTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (err: any, statusCode: number) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @param {boolean} includeRecords
     * @param onResult cllback function with the resulting TaskAgentInterfaces.Timeline
     */
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, includeRecords: boolean, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void): void;
    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult cllback function with the resulting TaskAgentInterfaces.Timeline[]
     */
    getTimelines(scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]) => void): void;
}
export declare class QTaskApi implements IQTaskApi {
    TaskApi: ITaskApi;
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]);
    connect(): Q.Promise<any>;
    /**
    * @param {string} content
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {number} logId
    */
    appendLog(contentStream: NodeJS.ReadableStream, customHeaders: any, content: string, scopeIdentifier: string, hubName: string, planId: string, logId: number): Q.Promise<TaskAgentInterfaces.TaskLog>;
    /**
    * @param {TaskAgentInterfaces.TaskLog} log
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    createLog(log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.TaskLog>;
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {number} logId
    * @param {number} startLine
    * @param {number} endLine
    */
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number, endLine?: number): Q.Promise<string[]>;
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    getLogs(scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.TaskLog[]>;
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    getPlan(scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan>;
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {number} changeId
    */
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
    /**
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>} records
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    */
    updateRecords(records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
    /**
    * @param {TaskAgentInterfaces.Timeline} timeline
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    createTimeline(timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.Timeline>;
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {number} changeId
    * @param {boolean} includeRecords
    */
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number, includeRecords?: boolean): Q.Promise<TaskAgentInterfaces.Timeline>;
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    getTimelines(scopeIdentifier: string, hubName: string, planId: string): Q.Promise<TaskAgentInterfaces.Timeline[]>;
}
