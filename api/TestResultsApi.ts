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
import Contracts = require("./interfaces/TestInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITestResultsApi extends basem.ClientApiBase {
    createTestIterationResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Promise<Contracts.TestAttachmentReference>;
    createTestResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): Promise<Contracts.TestAttachmentReference>;
    createTestSubResultAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, testSubResultId: number): Promise<Contracts.TestAttachmentReference>;
    deleteTestResultAttachment(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<void>;
    getTestIterationAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number, iterationId: number): Promise<NodeJS.ReadableStream>;
    getTestIterationAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number, iterationId: number): Promise<NodeJS.ReadableStream>;
    getTestResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestResultAttachments(project: string, runId: number, testCaseResultId: number): Promise<Contracts.TestAttachment[]>;
    getTestResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestSubResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number, testSubResultId: number): Promise<NodeJS.ReadableStream>;
    getTestSubResultAttachments(project: string, runId: number, testCaseResultId: number, testSubResultId: number): Promise<Contracts.TestAttachment[]>;
    getTestSubResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number, testSubResultId: number): Promise<NodeJS.ReadableStream>;
    createTestRunAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number): Promise<Contracts.TestAttachmentReference>;
    deleteTestRunAttachment(project: string, runId: number, attachmentId: number): Promise<void>;
    getTestRunAttachmentContent(project: string, runId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestRunAttachments(project: string, runId: number): Promise<Contracts.TestAttachment[]>;
    getTestRunAttachmentZip(project: string, runId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getBugsLinkedToTestResult(project: string, runId: number, testCaseResultId: number): Promise<Contracts.WorkItemReference[]>;
    getBuildCodeCoverage(project: string, buildId: number, flags: number): Promise<Contracts.BuildCoverage[]>;
    getCodeCoverageSummary(project: string, buildId: number, deltaBuildId?: number): Promise<Contracts.CodeCoverageSummary>;
    updateCodeCoverageSummary(project: string, buildId: number, coverageData?: Contracts.CodeCoverageData): Promise<void>;
    getTestRunCodeCoverage(project: string, runId: number, flags: number): Promise<Contracts.TestRunCoverage[]>;
    getFileLevelCodeCoverage(fileCoverageRequest: Contracts.FileCoverageRequest, project: string): Promise<NodeJS.ReadableStream>;
    queryTestResultHistory(filter: Contracts.ResultsFilter, project: string): Promise<Contracts.TestResultHistory>;
    getTestRunMessageLogs(project: string, runId: number): Promise<Contracts.TestMessageLogDetails[]>;
    getTestPipelineMetrics(project: string, pipelineId: number, stageName?: string, phaseName?: string, jobName?: string, metricNames?: Contracts.Metrics[], groupByNode?: boolean): Promise<Contracts.PipelineTestMetrics>;
    getTestResultDetailsForBuild(project: string, buildId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string, shouldIncludeResults?: boolean, queryRunSummaryForInProgress?: boolean): Promise<Contracts.TestResultsDetails>;
    getTestResultDetailsForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string, shouldIncludeResults?: boolean, queryRunSummaryForInProgress?: boolean): Promise<Contracts.TestResultsDetails>;
    publishTestResultDocument(document: Contracts.TestResultDocument, project: string, runId: number): Promise<Contracts.TestResultDocument>;
    getResultGroupsByBuild(project: string, buildId: number, publishContext: string, fields?: string[], continuationToken?: string): Promise<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>>;
    getResultGroupsByRelease(project: string, releaseId: number, publishContext: string, releaseEnvId?: number, fields?: string[], continuationToken?: string): Promise<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>>;
    queryTestResultsMetaData(testCaseReferenceIds: string[], project: string, detailsToInclude?: Contracts.ResultMetaDataDetails): Promise<Contracts.TestResultMetaData[]>;
    updateTestResultsMetaData(testResultMetaDataUpdateInput: Contracts.TestResultMetaDataUpdateInput, project: string, testCaseReferenceId: number): Promise<Contracts.TestResultMetaData>;
    getTestResultsByQuery(query: Contracts.TestResultsQuery, project: string): Promise<Contracts.TestResultsQuery>;
    getTestResultsByQueryWiql(queryModel: Contracts.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): Promise<Contracts.TestCaseResult[]>;
    addTestResultsToTestRun(results: Contracts.TestCaseResult[], project: string, runId: number): Promise<Contracts.TestCaseResult[]>;
    getTestResultById(project: string, runId: number, testResultId: number, detailsToInclude?: Contracts.ResultDetails): Promise<Contracts.TestCaseResult>;
    getTestResults(project: string, runId: number, detailsToInclude?: Contracts.ResultDetails, skip?: number, top?: number, outcomes?: Contracts.TestOutcome[], newTestsOnly?: boolean): Promise<Contracts.TestCaseResult[]>;
    updateTestResults(results: Contracts.TestCaseResult[], project: string, runId: number): Promise<Contracts.TestCaseResult[]>;
    getTestResultsByBuild(project: string, buildId: number, publishContext?: string, outcomes?: Contracts.TestOutcome[], top?: number, continuationToken?: string): Promise<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>;
    getTestResultsByPipeline(customHeaders: any, project: string, pipelineId: number, stageName?: string, phaseName?: string, jobName?: string, outcomes?: Contracts.TestOutcome[], top?: number, continuationToken?: String): Promise<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>;
    getTestResultsByRelease(project: string, releaseId: number, releaseEnvid?: number, publishContext?: string, outcomes?: Contracts.TestOutcome[], top?: number, continuationToken?: string): Promise<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>;
    testResultsGroupDetails(project: string, pipelineId: number, stageName?: string, phaseName?: string, jobName?: string, shouldIncludeFailedAndAbortedResults?: boolean, queryGroupSummaryForInProgress?: boolean): Promise<Contracts.TestResultsDetails>;
    queryTestResultsReportForBuild(project: string, buildId: number, publishContext?: string, includeFailureDetails?: boolean, buildToCompare?: Contracts.BuildReference): Promise<Contracts.TestResultSummary>;
    queryTestResultsReportForPipeline(project: string, pipelineId: number, stageName?: string, phaseName?: string, jobName?: string, includeFailureDetails?: boolean): Promise<Contracts.TestResultSummary>;
    queryTestResultsReportForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, includeFailureDetails?: boolean, releaseToCompare?: Contracts.ReleaseReference): Promise<Contracts.TestResultSummary>;
    queryTestResultsSummaryForReleases(releases: Contracts.ReleaseReference[], project: string): Promise<Contracts.TestResultSummary[]>;
    queryTestSummaryByRequirement(resultsContext: Contracts.TestResultsContext, project: string, workItemIds?: number[]): Promise<Contracts.TestSummaryForWorkItem[]>;
    queryResultTrendForBuild(filter: Contracts.TestResultTrendFilter, project: string): Promise<Contracts.AggregatedDataForResultTrend[]>;
    queryResultTrendForRelease(filter: Contracts.TestResultTrendFilter, project: string): Promise<Contracts.AggregatedDataForResultTrend[]>;
    createTestRun(testRun: Contracts.RunCreateModel, project: string): Promise<Contracts.TestRun>;
    deleteTestRun(project: string, runId: number): Promise<void>;
    getTestRunById(project: string, runId: number, includeDetails?: boolean, includeTags?: boolean): Promise<Contracts.TestRun>;
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): Promise<Contracts.TestRun[]>;
    queryTestRuns(project: string, minLastUpdatedDate: Date, maxLastUpdatedDate: Date, state?: Contracts.TestRunState, planIds?: number[], isAutomated?: boolean, publishContext?: Contracts.TestRunPublishContext, buildIds?: number[], buildDefIds?: number[], branchName?: string, releaseIds?: number[], releaseDefIds?: number[], releaseEnvIds?: number[], releaseEnvDefIds?: number[], runTitle?: string, top?: number, continuationToken?: string): Promise<VSSInterfaces.PagedList<Contracts.TestRun>>;
    updateTestRun(runUpdateModel: Contracts.RunUpdateModel, project: string, runId: number): Promise<Contracts.TestRun>;
    getTestRunSummaryByOutcome(project: string, runId: number): Promise<Contracts.TestRunStatistic>;
    getTestResultsSettings(project: string, settingsType?: Contracts.TestResultsSettingsType): Promise<Contracts.TestResultsSettings>;
    updatePipelinesTestSettings(testResultsUpdateSettings: Contracts.TestResultsUpdateSettings, project: string): Promise<Contracts.TestResultsSettings>;
    getSimilarTestResults(customHeaders: any, project: string, runId: number, testResultId: number, testSubResultId: number, top?: number, continuationToken?: String): Promise<Contracts.TestCaseResult[]>;
    getTestRunStatistics(project: string, runId: number): Promise<Contracts.TestRunStatistic>;
    getCoverageStatusBadge(project: string, definition: string, branchName?: string, label?: string): Promise<string>;
    getTestTagsForBuild(project: string, buildId: number): Promise<Contracts.TestTag[]>;
    getTestTagsForRelease(project: string, releaseId: number, releaseEnvId: number): Promise<Contracts.TestTag[]>;
    updateTestRunTags(testTagsUpdateModel: Contracts.TestTagsUpdateModel, project: string, runId: number): Promise<Contracts.TestTag[]>;
    getTestTagSummaryForBuild(project: string, buildId: number): Promise<Contracts.TestTagSummary>;
    getTestTagSummaryForRelease(project: string, releaseId: number, releaseEnvId: number): Promise<Contracts.TestTagSummary>;
    createBuildAttachmentInLogStore(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, buildId: number): Promise<void>;
    createTestRunLogStoreAttachment(attachmentRequestModel: Contracts.TestAttachmentRequestModel, project: string, runId: number): Promise<Contracts.TestLogStoreAttachmentReference>;
    deleteTestRunLogStoreAttachment(project: string, runId: number, filename: string): Promise<void>;
    getTestRunLogStoreAttachmentContent(project: string, runId: number, filename: string): Promise<NodeJS.ReadableStream>;
    getTestRunLogStoreAttachments(project: string, runId: number): Promise<Contracts.TestLogStoreAttachment[]>;
    getTestRunLogStoreAttachmentZip(project: string, runId: number, filename: string): Promise<NodeJS.ReadableStream>;
    createFailureType(testResultFailureType: Contracts.TestResultFailureTypeRequestModel, project: string): Promise<Contracts.TestResultFailureType>;
    deleteFailureType(project: string, failureTypeId: number): Promise<void>;
    getFailureTypes(project: string): Promise<Contracts.TestResultFailureType[]>;
    queryTestHistory(filter: Contracts.TestHistoryQuery, project: string): Promise<Contracts.TestHistoryQuery>;
    getTestLogsForBuild(customHeaders: any, project: string, buildId: number, type: Contracts.TestLogType, directoryPath?: string, fileNamePrefix?: string, fetchMetaData?: boolean, top?: number, continuationToken?: String): Promise<VSSInterfaces.PagedList<Contracts.TestLog>>;
    getTestResultLogs(customHeaders: any, project: string, runId: number, resultId: number, type: Contracts.TestLogType, directoryPath?: string, fileNamePrefix?: string, fetchMetaData?: boolean, top?: number, continuationToken?: String): Promise<VSSInterfaces.PagedList<Contracts.TestLog>>;
    getTestSubResultLogs(customHeaders: any, project: string, runId: number, resultId: number, subResultId: number, type: Contracts.TestLogType, directoryPath?: string, fileNamePrefix?: string, fetchMetaData?: boolean, top?: number, continuationToken?: String): Promise<VSSInterfaces.PagedList<Contracts.TestLog>>;
    getTestRunLogs(customHeaders: any, project: string, runId: number, type: Contracts.TestLogType, directoryPath?: string, fileNamePrefix?: string, fetchMetaData?: boolean, top?: number, continuationToken?: String): Promise<VSSInterfaces.PagedList<Contracts.TestLog>>;
    getTestLogStoreEndpointDetailsForBuildLog(project: string, build: number, type: Contracts.TestLogType, filePath: string): Promise<Contracts.TestLogStoreEndpointDetails>;
    testLogStoreEndpointDetailsForBuild(project: string, buildId: number, testLogStoreOperationType: Contracts.TestLogStoreOperationType): Promise<Contracts.TestLogStoreEndpointDetails>;
    getTestLogStoreEndpointDetailsForResultLog(project: string, runId: number, resultId: number, type: Contracts.TestLogType, filePath: string): Promise<Contracts.TestLogStoreEndpointDetails>;
    getTestLogStoreEndpointDetailsForSubResultLog(project: string, runId: number, resultId: number, subResultId: number, type: Contracts.TestLogType, filePath: string): Promise<Contracts.TestLogStoreEndpointDetails>;
    testLogStoreEndpointDetailsForResult(project: string, runId: number, resultId: number, subResultId: number, filePath: string, type: Contracts.TestLogType): Promise<Contracts.TestLogStoreEndpointDetails>;
    getTestLogStoreEndpointDetailsForRunLog(project: string, runId: number, type: Contracts.TestLogType, filePath: string): Promise<Contracts.TestLogStoreEndpointDetails>;
    testLogStoreEndpointDetailsForRun(project: string, runId: number, testLogStoreOperationType: Contracts.TestLogStoreOperationType, filePath?: string, type?: Contracts.TestLogType): Promise<Contracts.TestLogStoreEndpointDetails>;
    createTestSettings(testSettings: Contracts.TestSettings, project: string): Promise<number>;
    deleteTestSettings(project: string, testSettingsId: number): Promise<void>;
    getTestSettingsById(project: string, testSettingsId: number): Promise<Contracts.TestSettings>;
    addWorkItemToTestLinks(workItemToTestLinks: Contracts.WorkItemToTestLinks, project: string): Promise<Contracts.WorkItemToTestLinks>;
    deleteTestMethodToWorkItemLink(project: string, testName: string, workItemId: number): Promise<boolean>;
    queryTestMethodLinkedWorkItems(project: string, testName: string): Promise<Contracts.TestToWorkItemLinks>;
    getTestResultWorkItemsById(project: string, runId: number, testCaseResultId: number): Promise<Contracts.WorkItemReference[]>;
    queryTestResultWorkItems(project: string, workItemCategory: string, automatedTestName?: string, testCaseId?: number, maxCompleteDate?: Date, days?: number, workItemCount?: number): Promise<Contracts.WorkItemReference[]>;
}

export class TestResultsApi extends basem.ClientApiBase implements ITestResultsApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions) {
        super(baseUrl, handlers, 'node-testResults-api', options);
    }

    public static readonly RESOURCE_AREA_ID = "c83eaf52-edf3-4034-ae11-17d38f25404c";

    /**
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     */
    public async createTestIterationResultAttachment(
        attachmentRequestModel: Contracts.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        actionPath?: string
        ): Promise<Contracts.TestAttachmentReference> {
        if (iterationId == null) {
            throw new TypeError('iterationId can not be null or undefined');
        }

        return new Promise<Contracts.TestAttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                iterationId: iterationId,
                actionPath: actionPath,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestAttachmentReference>;
                res = await this.rest.create<Contracts.TestAttachmentReference>(url, attachmentRequestModel, options);

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
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     */
    public async createTestResultAttachment(
        attachmentRequestModel: Contracts.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number
        ): Promise<Contracts.TestAttachmentReference> {

        return new Promise<Contracts.TestAttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestAttachmentReference>;
                res = await this.rest.create<Contracts.TestAttachmentReference>(url, attachmentRequestModel, options);

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
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} testSubResultId
     */
    public async createTestSubResultAttachment(
        attachmentRequestModel: Contracts.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number,
        testSubResultId: number
        ): Promise<Contracts.TestAttachmentReference> {
        if (testSubResultId == null) {
            throw new TypeError('testSubResultId can not be null or undefined');
        }

        return new Promise<Contracts.TestAttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                testSubResultId: testSubResultId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestAttachmentReference>;
                res = await this.rest.create<Contracts.TestAttachmentReference>(url, attachmentRequestModel, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     */
    public async deleteTestResultAttachment(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
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
     * Returns a test iteration attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @param {number} iterationId
     */
    public async getTestIterationAttachmentContent(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
        iterationId: number
        ): Promise<NodeJS.ReadableStream> {
        if (iterationId == null) {
            throw new TypeError('iterationId can not be null or undefined');
        }

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            let queryValues: any = {
                iterationId: iterationId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues,
                    queryValues);

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
     * Returns a test iteration attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @param {number} iterationId
     */
    public async getTestIterationAttachmentZip(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
        iterationId: number
        ): Promise<NodeJS.ReadableStream> {
        if (iterationId == null) {
            throw new TypeError('iterationId can not be null or undefined');
        }

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            let queryValues: any = {
                iterationId: iterationId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a test result attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     */
    public async getTestResultAttachmentContent(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
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
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     */
    public async getTestResultAttachments(
        project: string,
        runId: number,
        testCaseResultId: number
        ): Promise<Contracts.TestAttachment[]> {

        return new Promise<Contracts.TestAttachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestAttachment[]>;
                res = await this.rest.get<Contracts.TestAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestAttachment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a test result attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     */
    public async getTestResultAttachmentZip(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a test sub result attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @param {number} testSubResultId
     */
    public async getTestSubResultAttachmentContent(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
        testSubResultId: number
        ): Promise<NodeJS.ReadableStream> {
        if (testSubResultId == null) {
            throw new TypeError('testSubResultId can not be null or undefined');
        }

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            let queryValues: any = {
                testSubResultId: testSubResultId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues,
                    queryValues);

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
     * Returns attachment references for test sub result.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} testSubResultId
     */
    public async getTestSubResultAttachments(
        project: string,
        runId: number,
        testCaseResultId: number,
        testSubResultId: number
        ): Promise<Contracts.TestAttachment[]> {
        if (testSubResultId == null) {
            throw new TypeError('testSubResultId can not be null or undefined');
        }

        return new Promise<Contracts.TestAttachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                testSubResultId: testSubResultId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestAttachment[]>;
                res = await this.rest.get<Contracts.TestAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestAttachment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a test sub result attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @param {number} testSubResultId
     */
    public async getTestSubResultAttachmentZip(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
        testSubResultId: number
        ): Promise<NodeJS.ReadableStream> {
        if (testSubResultId == null) {
            throw new TypeError('testSubResultId can not be null or undefined');
        }

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            let queryValues: any = {
                testSubResultId: testSubResultId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "2a632e97-e014-4275-978f-8e5c4906d4b3",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async createTestRunAttachment(
        attachmentRequestModel: Contracts.TestAttachmentRequestModel,
        project: string,
        runId: number
        ): Promise<Contracts.TestAttachmentReference> {

        return new Promise<Contracts.TestAttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "b5731898-8206-477a-a51d-3fdf116fc6bf",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestAttachmentReference>;
                res = await this.rest.create<Contracts.TestAttachmentReference>(url, attachmentRequestModel, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} attachmentId
     */
    public async deleteTestRunAttachment(
        project: string,
        runId: number,
        attachmentId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "b5731898-8206-477a-a51d-3fdf116fc6bf",
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
     * Returns a test run attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} attachmentId
     */
    public async getTestRunAttachmentContent(
        project: string,
        runId: number,
        attachmentId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "b5731898-8206-477a-a51d-3fdf116fc6bf",
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
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async getTestRunAttachments(
        project: string,
        runId: number
        ): Promise<Contracts.TestAttachment[]> {

        return new Promise<Contracts.TestAttachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "b5731898-8206-477a-a51d-3fdf116fc6bf",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestAttachment[]>;
                res = await this.rest.get<Contracts.TestAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestAttachment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns a test run attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} attachmentId
     */
    public async getTestRunAttachmentZip(
        project: string,
        runId: number,
        attachmentId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "b5731898-8206-477a-a51d-3fdf116fc6bf",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     */
    public async getBugsLinkedToTestResult(
        project: string,
        runId: number,
        testCaseResultId: number
        ): Promise<Contracts.WorkItemReference[]> {

        return new Promise<Contracts.WorkItemReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "d8dbf98f-eb34-4f8d-8365-47972af34f29",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.WorkItemReference[]>;
                res = await this.rest.get<Contracts.WorkItemReference[]>(url, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} flags
     */
    public async getBuildCodeCoverage(
        project: string,
        buildId: number,
        flags: number
        ): Promise<Contracts.BuildCoverage[]> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }
        if (flags == null) {
            throw new TypeError('flags can not be null or undefined');
        }

        return new Promise<Contracts.BuildCoverage[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                flags: flags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "9b3e1ece-c6ab-4fbb-8167-8a32a0c92216",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.BuildCoverage[]>;
                res = await this.rest.get<Contracts.BuildCoverage[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.BuildCoverage,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} deltaBuildId
     */
    public async getCodeCoverageSummary(
        project: string,
        buildId: number,
        deltaBuildId?: number
        ): Promise<Contracts.CodeCoverageSummary> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }

        return new Promise<Contracts.CodeCoverageSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                deltaBuildId: deltaBuildId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "9b3e1ece-c6ab-4fbb-8167-8a32a0c92216",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.CodeCoverageSummary>;
                res = await this.rest.get<Contracts.CodeCoverageSummary>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.CodeCoverageSummary,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {Contracts.CodeCoverageData} coverageData
     */
    public async updateCodeCoverageSummary(
        project: string,
        buildId: number,
        coverageData?: Contracts.CodeCoverageData
        ): Promise<void> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "9b3e1ece-c6ab-4fbb-8167-8a32a0c92216",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, coverageData, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} flags
     */
    public async getTestRunCodeCoverage(
        project: string,
        runId: number,
        flags: number
        ): Promise<Contracts.TestRunCoverage[]> {
        if (flags == null) {
            throw new TypeError('flags can not be null or undefined');
        }

        return new Promise<Contracts.TestRunCoverage[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                flags: flags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "5641efbc-6f9b-401a-baeb-d3da22489e5e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestRunCoverage[]>;
                res = await this.rest.get<Contracts.TestRunCoverage[]>(url, options);

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
     * Get file coverage for the specified file
     * 
     * @param {Contracts.FileCoverageRequest} fileCoverageRequest - File details with pull request iteration context
     * @param {string} project - Project ID or project name
     */
    public async getFileLevelCodeCoverage(
        fileCoverageRequest: Contracts.FileCoverageRequest,
        project: string
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "4a6d0c46-51ca-45aa-9163-249cee3289b7",
                    routeValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("text/plain", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.ResultsFilter} filter
     * @param {string} project - Project ID or project name
     */
    public async queryTestResultHistory(
        filter: Contracts.ResultsFilter,
        project: string
        ): Promise<Contracts.TestResultHistory> {

        return new Promise<Contracts.TestResultHistory>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "bdf7a97b-0395-4da8-9d5d-f957619327d1",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultHistory>;
                res = await this.rest.create<Contracts.TestResultHistory>(url, filter, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultHistory,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test run message logs
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the run to get.
     */
    public async getTestRunMessageLogs(
        project: string,
        runId: number
        ): Promise<Contracts.TestMessageLogDetails[]> {

        return new Promise<Contracts.TestMessageLogDetails[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "e9ab0c6a-1984-418b-87c0-ee4202318ba3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestMessageLogDetails[]>;
                res = await this.rest.get<Contracts.TestMessageLogDetails[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestMessageLogDetails,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get summary of test results.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - Pipeline Id. This is same as build Id.
     * @param {string} stageName - Name of the stage. Maximum supported length for name is 256 character.
     * @param {string} phaseName - Name of the phase. Maximum supported length for name is 256 character.
     * @param {string} jobName - Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
     * @param {Contracts.Metrics[]} metricNames
     * @param {boolean} groupByNode - Group summary for each node of the pipleine heirarchy
     */
    public async getTestPipelineMetrics(
        project: string,
        pipelineId: number,
        stageName?: string,
        phaseName?: string,
        jobName?: string,
        metricNames?: Contracts.Metrics[],
        groupByNode?: boolean
        ): Promise<Contracts.PipelineTestMetrics> {
        if (pipelineId == null) {
            throw new TypeError('pipelineId can not be null or undefined');
        }

        return new Promise<Contracts.PipelineTestMetrics>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                pipelineId: pipelineId,
                stageName: stageName,
                phaseName: phaseName,
                jobName: jobName,
                metricNames: metricNames && metricNames.join(","),
                groupByNode: groupByNode,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "65f35817-86a1-4131-b38b-3ec2d4744e53",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.PipelineTestMetrics>;
                res = await this.rest.get<Contracts.PipelineTestMetrics>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.PipelineTestMetrics,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {string} groupBy
     * @param {string} filter
     * @param {string} orderby
     * @param {boolean} shouldIncludeResults
     * @param {boolean} queryRunSummaryForInProgress
     */
    public async getTestResultDetailsForBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        groupBy?: string,
        filter?: string,
        orderby?: string,
        shouldIncludeResults?: boolean,
        queryRunSummaryForInProgress?: boolean
        ): Promise<Contracts.TestResultsDetails> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }

        return new Promise<Contracts.TestResultsDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                groupBy: groupBy,
                '$filter': filter,
                '$orderby': orderby,
                shouldIncludeResults: shouldIncludeResults,
                queryRunSummaryForInProgress: queryRunSummaryForInProgress,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "a518c749-4524-45b2-a7ef-1ac009b312cd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultsDetails>;
                res = await this.rest.get<Contracts.TestResultsDetails>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultsDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     * @param {string} publishContext
     * @param {string} groupBy
     * @param {string} filter
     * @param {string} orderby
     * @param {boolean} shouldIncludeResults
     * @param {boolean} queryRunSummaryForInProgress
     */
    public async getTestResultDetailsForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number,
        publishContext?: string,
        groupBy?: string,
        filter?: string,
        orderby?: string,
        shouldIncludeResults?: boolean,
        queryRunSummaryForInProgress?: boolean
        ): Promise<Contracts.TestResultsDetails> {
        if (releaseId == null) {
            throw new TypeError('releaseId can not be null or undefined');
        }
        if (releaseEnvId == null) {
            throw new TypeError('releaseEnvId can not be null or undefined');
        }

        return new Promise<Contracts.TestResultsDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvId: releaseEnvId,
                publishContext: publishContext,
                groupBy: groupBy,
                '$filter': filter,
                '$orderby': orderby,
                shouldIncludeResults: shouldIncludeResults,
                queryRunSummaryForInProgress: queryRunSummaryForInProgress,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "19a8183a-69fb-47d7-bfbf-1b6b0d921294",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultsDetails>;
                res = await this.rest.get<Contracts.TestResultsDetails>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultsDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.TestResultDocument} document
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async publishTestResultDocument(
        document: Contracts.TestResultDocument,
        project: string,
        runId: number
        ): Promise<Contracts.TestResultDocument> {

        return new Promise<Contracts.TestResultDocument>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "74838649-b038-42f1-a0e7-6deb3973bf14",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultDocument>;
                res = await this.rest.create<Contracts.TestResultDocument>(url, document, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {string[]} fields
     * @param {string} continuationToken
     */
    public async getResultGroupsByBuild(
        project: string,
        buildId: number,
        publishContext: string,
        fields?: string[],
        continuationToken?: string
        ): Promise<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }
        if (publishContext == null) {
            throw new TypeError('publishContext can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                fields: fields && fields.join(","),
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "e49244d1-c49f-49ad-a717-3bbaefe6a201",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>>(url, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {string} publishContext
     * @param {number} releaseEnvId
     * @param {string[]} fields
     * @param {string} continuationToken
     */
    public async getResultGroupsByRelease(
        project: string,
        releaseId: number,
        publishContext: string,
        releaseEnvId?: number,
        fields?: string[],
        continuationToken?: string
        ): Promise<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>> {
        if (releaseId == null) {
            throw new TypeError('releaseId can not be null or undefined');
        }
        if (publishContext == null) {
            throw new TypeError('publishContext can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                publishContext: publishContext,
                releaseEnvId: releaseEnvId,
                fields: fields && fields.join(","),
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "3c2b6bb0-0620-434a-a5c3-26aa0fcfda15",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.FieldDetailsForTestResults>>(url, options);

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
     * Get list of test Result meta data details for corresponding testcasereferenceId
     * 
     * @param {string[]} testCaseReferenceIds - TestCaseReference Ids of the test Result to be queried, comma separated list of valid ids (limit no. of ids 200).
     * @param {string} project - Project ID or project name
     * @param {Contracts.ResultMetaDataDetails} detailsToInclude - Details to include with test results metadata. Default is None. Other values are FlakyIdentifiers.
     */
    public async queryTestResultsMetaData(
        testCaseReferenceIds: string[],
        project: string,
        detailsToInclude?: Contracts.ResultMetaDataDetails
        ): Promise<Contracts.TestResultMetaData[]> {

        return new Promise<Contracts.TestResultMetaData[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                detailsToInclude: detailsToInclude,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.4",
                    "testresults",
                    "b72ff4c0-4341-4213-ba27-f517cf341c95",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultMetaData[]>;
                res = await this.rest.create<Contracts.TestResultMetaData[]>(url, testCaseReferenceIds, options);

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
     * Update properties of test result meta data
     * 
     * @param {Contracts.TestResultMetaDataUpdateInput} testResultMetaDataUpdateInput - TestResultMetaData update input TestResultMetaDataUpdateInput
     * @param {string} project - Project ID or project name
     * @param {number} testCaseReferenceId - TestCaseReference Id of Test Result to be updated.
     */
    public async updateTestResultsMetaData(
        testResultMetaDataUpdateInput: Contracts.TestResultMetaDataUpdateInput,
        project: string,
        testCaseReferenceId: number
        ): Promise<Contracts.TestResultMetaData> {

        return new Promise<Contracts.TestResultMetaData>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                testCaseReferenceId: testCaseReferenceId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.4",
                    "testresults",
                    "b72ff4c0-4341-4213-ba27-f517cf341c95",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultMetaData>;
                res = await this.rest.update<Contracts.TestResultMetaData>(url, testResultMetaDataUpdateInput, options);

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
     * @param {Contracts.TestResultsQuery} query
     * @param {string} project - Project ID or project name
     */
    public async getTestResultsByQuery(
        query: Contracts.TestResultsQuery,
        project: string
        ): Promise<Contracts.TestResultsQuery> {

        return new Promise<Contracts.TestResultsQuery>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "14033a2c-af25-4af1-9e39-8ef6900482e3",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultsQuery>;
                res = await this.rest.create<Contracts.TestResultsQuery>(url, query, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultsQuery,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.QueryModel} queryModel
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     */
    public async getTestResultsByQueryWiql(
        queryModel: Contracts.QueryModel,
        project: string,
        includeResultDetails?: boolean,
        includeIterationDetails?: boolean,
        skip?: number,
        top?: number
        ): Promise<Contracts.TestCaseResult[]> {

        return new Promise<Contracts.TestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                includeResultDetails: includeResultDetails,
                includeIterationDetails: includeIterationDetails,
                '$skip': skip,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "5ea78be3-2f5a-4110-8034-c27f24c62db1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestCaseResult[]>;
                res = await this.rest.create<Contracts.TestCaseResult[]>(url, queryModel, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestCaseResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.TestCaseResult[]} results
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async addTestResultsToTestRun(
        results: Contracts.TestCaseResult[],
        project: string,
        runId: number
        ): Promise<Contracts.TestCaseResult[]> {

        return new Promise<Contracts.TestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "02afa165-e79a-4d70-8f0c-2af0f35b4e07",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestCaseResult[]>;
                res = await this.rest.create<Contracts.TestCaseResult[]>(url, results, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestCaseResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testResultId
     * @param {Contracts.ResultDetails} detailsToInclude
     */
    public async getTestResultById(
        project: string,
        runId: number,
        testResultId: number,
        detailsToInclude?: Contracts.ResultDetails
        ): Promise<Contracts.TestCaseResult> {

        return new Promise<Contracts.TestCaseResult>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testResultId: testResultId
            };

            let queryValues: any = {
                detailsToInclude: detailsToInclude,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "02afa165-e79a-4d70-8f0c-2af0f35b4e07",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestCaseResult>;
                res = await this.rest.get<Contracts.TestCaseResult>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestCaseResult,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {Contracts.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @param {Contracts.TestOutcome[]} outcomes
     * @param {boolean} newTestsOnly
     */
    public async getTestResults(
        project: string,
        runId: number,
        detailsToInclude?: Contracts.ResultDetails,
        skip?: number,
        top?: number,
        outcomes?: Contracts.TestOutcome[],
        newTestsOnly?: boolean
        ): Promise<Contracts.TestCaseResult[]> {

        return new Promise<Contracts.TestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                detailsToInclude: detailsToInclude,
                '$skip': skip,
                '$top': top,
                outcomes: outcomes && outcomes.join(","),
                '$newTestsOnly': newTestsOnly,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "02afa165-e79a-4d70-8f0c-2af0f35b4e07",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestCaseResult[]>;
                res = await this.rest.get<Contracts.TestCaseResult[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestCaseResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.TestCaseResult[]} results
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async updateTestResults(
        results: Contracts.TestCaseResult[],
        project: string,
        runId: number
        ): Promise<Contracts.TestCaseResult[]> {

        return new Promise<Contracts.TestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "02afa165-e79a-4d70-8f0c-2af0f35b4e07",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestCaseResult[]>;
                res = await this.rest.update<Contracts.TestCaseResult[]>(url, results, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestCaseResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {Contracts.TestOutcome[]} outcomes
     * @param {number} top
     * @param {string} continuationToken
     */
    public async getTestResultsByBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        outcomes?: Contracts.TestOutcome[],
        top?: number,
        continuationToken?: string
        ): Promise<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                outcomes: outcomes && outcomes.join(","),
                '$top': top,
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "f48cc885-dbc4-4efc-ab19-ae8c19d1e02a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>(url, options);

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
     * Get a list of results.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - Pipeline Id. This is same as build Id.
     * @param {string} stageName - Name of the stage. Maximum supported length for name is 256 character.
     * @param {string} phaseName - Name of the phase. Maximum supported length for name is 256 character.
     * @param {string} jobName - Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
     * @param {Contracts.TestOutcome[]} outcomes - List of outcome of results
     * @param {number} top - Maximum number of results to return
     * @param {String} continuationToken - Header to pass the continuationToken
     */
    public async getTestResultsByPipeline(
        customHeaders: any,
        project: string,
        pipelineId: number,
        stageName?: string,
        phaseName?: string,
        jobName?: string,
        outcomes?: Contracts.TestOutcome[],
        top?: number,
        continuationToken?: String
        ): Promise<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>> {
        if (pipelineId == null) {
            throw new TypeError('pipelineId can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                pipelineId: pipelineId,
                stageName: stageName,
                phaseName: phaseName,
                jobName: jobName,
                outcomes: outcomes && outcomes.join(","),
                '$top': top,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["x-ms-continuationtoken"] = "continuationToken";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "80169dc2-30c3-4c25-84b2-dd67d7ff1f52",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>(url, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvid
     * @param {string} publishContext
     * @param {Contracts.TestOutcome[]} outcomes
     * @param {number} top
     * @param {string} continuationToken
     */
    public async getTestResultsByRelease(
        project: string,
        releaseId: number,
        releaseEnvid?: number,
        publishContext?: string,
        outcomes?: Contracts.TestOutcome[],
        top?: number,
        continuationToken?: string
        ): Promise<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>> {
        if (releaseId == null) {
            throw new TypeError('releaseId can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvid: releaseEnvid,
                publishContext: publishContext,
                outcomes: outcomes && outcomes.join(","),
                '$top': top,
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "3994b949-77e5-495d-8034-edf80d95b84e",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.ShallowTestCaseResult>>(url, options);

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
     * Get all the available groups details and for these groups get failed and aborted results.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - Pipeline Id. This is same as build Id.
     * @param {string} stageName - Name of the stage. Maximum supported length for name is 256 character.
     * @param {string} phaseName - Name of the phase. Maximum supported length for name is 256 character.
     * @param {string} jobName - Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
     * @param {boolean} shouldIncludeFailedAndAbortedResults - If true, it will return Ids of failed and aborted results for each test group
     * @param {boolean} queryGroupSummaryForInProgress - If true, it will calculate summary for InProgress runs as well.
     */
    public async testResultsGroupDetails(
        project: string,
        pipelineId: number,
        stageName?: string,
        phaseName?: string,
        jobName?: string,
        shouldIncludeFailedAndAbortedResults?: boolean,
        queryGroupSummaryForInProgress?: boolean
        ): Promise<Contracts.TestResultsDetails> {
        if (pipelineId == null) {
            throw new TypeError('pipelineId can not be null or undefined');
        }

        return new Promise<Contracts.TestResultsDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                pipelineId: pipelineId,
                stageName: stageName,
                phaseName: phaseName,
                jobName: jobName,
                shouldIncludeFailedAndAbortedResults: shouldIncludeFailedAndAbortedResults,
                queryGroupSummaryForInProgress: queryGroupSummaryForInProgress,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "f903b850-06af-4b50-a344-d7bbfb19e93b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultsDetails>;
                res = await this.rest.get<Contracts.TestResultsDetails>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultsDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} publishContext
     * @param {boolean} includeFailureDetails
     * @param {Contracts.BuildReference} buildToCompare
     */
    public async queryTestResultsReportForBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        buildToCompare?: Contracts.BuildReference
        ): Promise<Contracts.TestResultSummary> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }

        return new Promise<Contracts.TestResultSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                includeFailureDetails: includeFailureDetails,
                buildToCompare: buildToCompare,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "e009fa95-95a5-4ad4-9681-590043ce2423",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultSummary>;
                res = await this.rest.get<Contracts.TestResultSummary>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultSummary,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get summary of test results.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} pipelineId - Pipeline Id. This is same as build Id.
     * @param {string} stageName - Name of the stage. Maximum supported length for name is 256 character.
     * @param {string} phaseName - Name of the phase. Maximum supported length for name is 256 character.
     * @param {string} jobName - Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
     * @param {boolean} includeFailureDetails - If true returns failure insights
     */
    public async queryTestResultsReportForPipeline(
        project: string,
        pipelineId: number,
        stageName?: string,
        phaseName?: string,
        jobName?: string,
        includeFailureDetails?: boolean
        ): Promise<Contracts.TestResultSummary> {
        if (pipelineId == null) {
            throw new TypeError('pipelineId can not be null or undefined');
        }

        return new Promise<Contracts.TestResultSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                pipelineId: pipelineId,
                stageName: stageName,
                phaseName: phaseName,
                jobName: jobName,
                includeFailureDetails: includeFailureDetails,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "71f746a1-7d68-40fe-b705-9d821a73dff2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultSummary>;
                res = await this.rest.get<Contracts.TestResultSummary>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultSummary,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     * @param {string} publishContext
     * @param {boolean} includeFailureDetails
     * @param {Contracts.ReleaseReference} releaseToCompare
     */
    public async queryTestResultsReportForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        releaseToCompare?: Contracts.ReleaseReference
        ): Promise<Contracts.TestResultSummary> {
        if (releaseId == null) {
            throw new TypeError('releaseId can not be null or undefined');
        }
        if (releaseEnvId == null) {
            throw new TypeError('releaseEnvId can not be null or undefined');
        }

        return new Promise<Contracts.TestResultSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvId: releaseEnvId,
                publishContext: publishContext,
                includeFailureDetails: includeFailureDetails,
                releaseToCompare: releaseToCompare,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "f10f9577-2c04-45ab-8c99-b26567a7cd55",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultSummary>;
                res = await this.rest.get<Contracts.TestResultSummary>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultSummary,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.ReleaseReference[]} releases
     * @param {string} project - Project ID or project name
     */
    public async queryTestResultsSummaryForReleases(
        releases: Contracts.ReleaseReference[],
        project: string
        ): Promise<Contracts.TestResultSummary[]> {

        return new Promise<Contracts.TestResultSummary[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "f10f9577-2c04-45ab-8c99-b26567a7cd55",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultSummary[]>;
                res = await this.rest.create<Contracts.TestResultSummary[]>(url, releases, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultSummary,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.TestResultsContext} resultsContext
     * @param {string} project - Project ID or project name
     * @param {number[]} workItemIds
     */
    public async queryTestSummaryByRequirement(
        resultsContext: Contracts.TestResultsContext,
        project: string,
        workItemIds?: number[]
        ): Promise<Contracts.TestSummaryForWorkItem[]> {

        return new Promise<Contracts.TestSummaryForWorkItem[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                workItemIds: workItemIds && workItemIds.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "3b7fd26f-c335-4e55-afc1-a588f5e2af3c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestSummaryForWorkItem[]>;
                res = await this.rest.create<Contracts.TestSummaryForWorkItem[]>(url, resultsContext, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestSummaryForWorkItem,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.TestResultTrendFilter} filter
     * @param {string} project - Project ID or project name
     */
    public async queryResultTrendForBuild(
        filter: Contracts.TestResultTrendFilter,
        project: string
        ): Promise<Contracts.AggregatedDataForResultTrend[]> {

        return new Promise<Contracts.AggregatedDataForResultTrend[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "0886a7ae-315a-4dba-9122-bcce93301f3a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.AggregatedDataForResultTrend[]>;
                res = await this.rest.create<Contracts.AggregatedDataForResultTrend[]>(url, filter, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.AggregatedDataForResultTrend,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.TestResultTrendFilter} filter
     * @param {string} project - Project ID or project name
     */
    public async queryResultTrendForRelease(
        filter: Contracts.TestResultTrendFilter,
        project: string
        ): Promise<Contracts.AggregatedDataForResultTrend[]> {

        return new Promise<Contracts.AggregatedDataForResultTrend[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "107f23c3-359a-460a-a70c-63ee739f9f9a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.AggregatedDataForResultTrend[]>;
                res = await this.rest.create<Contracts.AggregatedDataForResultTrend[]>(url, filter, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.AggregatedDataForResultTrend,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.RunCreateModel} testRun
     * @param {string} project - Project ID or project name
     */
    public async createTestRun(
        testRun: Contracts.RunCreateModel,
        project: string
        ): Promise<Contracts.TestRun> {

        return new Promise<Contracts.TestRun>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "364538f9-8062-4ce0-b024-75a0fb463f0d",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestRun>;
                res = await this.rest.create<Contracts.TestRun>(url, testRun, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestRun,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async deleteTestRun(
        project: string,
        runId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "364538f9-8062-4ce0-b024-75a0fb463f0d",
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
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeDetails
     * @param {boolean} includeTags
     */
    public async getTestRunById(
        project: string,
        runId: number,
        includeDetails?: boolean,
        includeTags?: boolean
        ): Promise<Contracts.TestRun> {

        return new Promise<Contracts.TestRun>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                includeDetails: includeDetails,
                includeTags: includeTags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "364538f9-8062-4ce0-b024-75a0fb463f0d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestRun>;
                res = await this.rest.get<Contracts.TestRun>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestRun,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} buildUri
     * @param {string} owner
     * @param {string} tmiRunId
     * @param {number} planId
     * @param {boolean} includeRunDetails
     * @param {boolean} automated
     * @param {number} skip
     * @param {number} top
     */
    public async getTestRuns(
        project: string,
        buildUri?: string,
        owner?: string,
        tmiRunId?: string,
        planId?: number,
        includeRunDetails?: boolean,
        automated?: boolean,
        skip?: number,
        top?: number
        ): Promise<Contracts.TestRun[]> {

        return new Promise<Contracts.TestRun[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildUri: buildUri,
                owner: owner,
                tmiRunId: tmiRunId,
                planId: planId,
                includeRunDetails: includeRunDetails,
                automated: automated,
                '$skip': skip,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "364538f9-8062-4ce0-b024-75a0fb463f0d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestRun[]>;
                res = await this.rest.get<Contracts.TestRun[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestRun,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Query Test Runs based on filters. Mandatory fields are minLastUpdatedDate and maxLastUpdatedDate.
     * 
     * @param {string} project - Project ID or project name
     * @param {Date} minLastUpdatedDate - Minimum Last Modified Date of run to be queried (Mandatory).
     * @param {Date} maxLastUpdatedDate - Maximum Last Modified Date of run to be queried (Mandatory, difference between min and max date can be atmost 7 days).
     * @param {Contracts.TestRunState} state - Current state of the Runs to be queried.
     * @param {number[]} planIds - Plan Ids of the Runs to be queried, comma separated list of valid ids.
     * @param {boolean} isAutomated - Automation type of the Runs to be queried.
     * @param {Contracts.TestRunPublishContext} publishContext - PublishContext of the Runs to be queried.
     * @param {number[]} buildIds - Build Ids of the Runs to be queried, comma separated list of valid ids.
     * @param {number[]} buildDefIds - Build Definition Ids of the Runs to be queried, comma separated list of valid ids.
     * @param {string} branchName - Source Branch name of the Runs to be queried.
     * @param {number[]} releaseIds - Release Ids of the Runs to be queried, comma separated list of valid ids.
     * @param {number[]} releaseDefIds - Release Definition Ids of the Runs to be queried, comma separated list of valid ids.
     * @param {number[]} releaseEnvIds - Release Environment Ids of the Runs to be queried, comma separated list of valid ids.
     * @param {number[]} releaseEnvDefIds - Release Environment Definition Ids of the Runs to be queried, comma separated list of valid ids.
     * @param {string} runTitle - Run Title of the Runs to be queried.
     * @param {number} top - Number of runs to be queried. Limit is 100
     * @param {string} continuationToken - continuationToken received from previous batch or null for first batch. It is not supposed to be created (or altered, if received from last batch) by user.
     */
    public async queryTestRuns(
        project: string,
        minLastUpdatedDate: Date,
        maxLastUpdatedDate: Date,
        state?: Contracts.TestRunState,
        planIds?: number[],
        isAutomated?: boolean,
        publishContext?: Contracts.TestRunPublishContext,
        buildIds?: number[],
        buildDefIds?: number[],
        branchName?: string,
        releaseIds?: number[],
        releaseDefIds?: number[],
        releaseEnvIds?: number[],
        releaseEnvDefIds?: number[],
        runTitle?: string,
        top?: number,
        continuationToken?: string
        ): Promise<VSSInterfaces.PagedList<Contracts.TestRun>> {
        if (minLastUpdatedDate == null) {
            throw new TypeError('minLastUpdatedDate can not be null or undefined');
        }
        if (maxLastUpdatedDate == null) {
            throw new TypeError('maxLastUpdatedDate can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.TestRun>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                minLastUpdatedDate: minLastUpdatedDate,
                maxLastUpdatedDate: maxLastUpdatedDate,
                state: state,
                planIds: planIds && planIds.join(","),
                isAutomated: isAutomated,
                publishContext: publishContext,
                buildIds: buildIds && buildIds.join(","),
                buildDefIds: buildDefIds && buildDefIds.join(","),
                branchName: branchName,
                releaseIds: releaseIds && releaseIds.join(","),
                releaseDefIds: releaseDefIds && releaseDefIds.join(","),
                releaseEnvIds: releaseEnvIds && releaseEnvIds.join(","),
                releaseEnvDefIds: releaseEnvDefIds && releaseEnvDefIds.join(","),
                runTitle: runTitle,
                '$top': top,
                continuationToken: continuationToken,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "364538f9-8062-4ce0-b024-75a0fb463f0d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.TestRun>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.TestRun>>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestRun,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.RunUpdateModel} runUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async updateTestRun(
        runUpdateModel: Contracts.RunUpdateModel,
        project: string,
        runId: number
        ): Promise<Contracts.TestRun> {

        return new Promise<Contracts.TestRun>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "364538f9-8062-4ce0-b024-75a0fb463f0d",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestRun>;
                res = await this.rest.update<Contracts.TestRun>(url, runUpdateModel, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestRun,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test run summary, used when we want to get summary of a run by outcome. Test run should be in completed state.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the run to get.
     */
    public async getTestRunSummaryByOutcome(
        project: string,
        runId: number
        ): Promise<Contracts.TestRunStatistic> {

        return new Promise<Contracts.TestRunStatistic>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "5c6a250c-53b7-4851-990c-42a7a00c8b39",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestRunStatistic>;
                res = await this.rest.get<Contracts.TestRunStatistic>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestRunStatistic,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get TestResultsSettings data
     * 
     * @param {string} project - Project ID or project name
     * @param {Contracts.TestResultsSettingsType} settingsType
     */
    public async getTestResultsSettings(
        project: string,
        settingsType?: Contracts.TestResultsSettingsType
        ): Promise<Contracts.TestResultsSettings> {

        return new Promise<Contracts.TestResultsSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                settingsType: settingsType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.3",
                    "testresults",
                    "7319952e-e5a9-4e19-a006-84f3be8b7c68",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultsSettings>;
                res = await this.rest.get<Contracts.TestResultsSettings>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultsSettings,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Update project settings of test results
     * 
     * @param {Contracts.TestResultsUpdateSettings} testResultsUpdateSettings
     * @param {string} project - Project ID or project name
     */
    public async updatePipelinesTestSettings(
        testResultsUpdateSettings: Contracts.TestResultsUpdateSettings,
        project: string
        ): Promise<Contracts.TestResultsSettings> {

        return new Promise<Contracts.TestResultsSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.3",
                    "testresults",
                    "7319952e-e5a9-4e19-a006-84f3be8b7c68",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultsSettings>;
                res = await this.rest.update<Contracts.TestResultsSettings>(url, testResultsUpdateSettings, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestResultsSettings,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Gets the list of results whose failure matches with the provided one.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - id of test run
     * @param {number} testResultId - id of test result inside a test run
     * @param {number} testSubResultId - id of subresult inside a test result
     * @param {number} top - Maximum number of results to return
     * @param {String} continuationToken - Header to pass the continuationToken
     */
    public async getSimilarTestResults(
        customHeaders: any,
        project: string,
        runId: number,
        testResultId: number,
        testSubResultId: number,
        top?: number,
        continuationToken?: String
        ): Promise<Contracts.TestCaseResult[]> {
        if (testSubResultId == null) {
            throw new TypeError('testSubResultId can not be null or undefined');
        }

        return new Promise<Contracts.TestCaseResult[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testResultId: testResultId
            };

            let queryValues: any = {
                testSubResultId: testSubResultId,
                '$top': top,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["x-ms-continuationtoken"] = "continuationToken";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "67d0a074-b255-4902-a639-e3e6de7a3de6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<Contracts.TestCaseResult[]>;
                res = await this.rest.get<Contracts.TestCaseResult[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestCaseResult,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get test run statistics , used when we want to get summary of a run by outcome.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - ID of the run to get.
     */
    public async getTestRunStatistics(
        project: string,
        runId: number
        ): Promise<Contracts.TestRunStatistic> {

        return new Promise<Contracts.TestRunStatistic>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "82b986e8-ca9e-4a89-b39e-f65c69bc104a",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestRunStatistic>;
                res = await this.rest.get<Contracts.TestRunStatistic>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestRunStatistic,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * <p>Gets the coverage status for the last successful build of a definition, optionally scoped to a specific branch</p>
     * 
     * @param {string} project - Project ID or project name
     * @param {string} definition - The ID or name of the definition.
     * @param {string} branchName - The branch name.
     * @param {string} label - The String to replace the default text on the left side of the badge.
     */
    public async getCoverageStatusBadge(
        project: string,
        definition: string,
        branchName?: string,
        label?: string
        ): Promise<string> {

        return new Promise<string>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                definition: definition
            };

            let queryValues: any = {
                branchName: branchName,
                label: label,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "73b7c9d8-defb-4b60-b3d6-2162d60d6b13",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<string>;
                res = await this.rest.get<string>(url, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     */
    public async getTestTagsForBuild(
        project: string,
        buildId: number
        ): Promise<Contracts.TestTag[]> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }

        return new Promise<Contracts.TestTag[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "52ee2057-4b54-41a6-a18c-ed4375a00f8d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestTag[]>;
                res = await this.rest.get<Contracts.TestTag[]>(url, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     */
    public async getTestTagsForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number
        ): Promise<Contracts.TestTag[]> {
        if (releaseId == null) {
            throw new TypeError('releaseId can not be null or undefined');
        }
        if (releaseEnvId == null) {
            throw new TypeError('releaseEnvId can not be null or undefined');
        }

        return new Promise<Contracts.TestTag[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvId: releaseEnvId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "52ee2057-4b54-41a6-a18c-ed4375a00f8d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestTag[]>;
                res = await this.rest.get<Contracts.TestTag[]>(url, options);

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
     * @param {Contracts.TestTagsUpdateModel} testTagsUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     */
    public async updateTestRunTags(
        testTagsUpdateModel: Contracts.TestTagsUpdateModel,
        project: string,
        runId: number
        ): Promise<Contracts.TestTag[]> {

        return new Promise<Contracts.TestTag[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "a5e2f411-2b43-45f3-989c-05b71339f5b8",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestTag[]>;
                res = await this.rest.update<Contracts.TestTag[]>(url, testTagsUpdateModel, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     */
    public async getTestTagSummaryForBuild(
        project: string,
        buildId: number
        ): Promise<Contracts.TestTagSummary> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }

        return new Promise<Contracts.TestTagSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "655a8f6b-fec7-4b46-b672-68b44141b498",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestTagSummary>;
                res = await this.rest.get<Contracts.TestTagSummary>(url, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} releaseId
     * @param {number} releaseEnvId
     */
    public async getTestTagSummaryForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number
        ): Promise<Contracts.TestTagSummary> {
        if (releaseId == null) {
            throw new TypeError('releaseId can not be null or undefined');
        }
        if (releaseEnvId == null) {
            throw new TypeError('releaseEnvId can not be null or undefined');
        }

        return new Promise<Contracts.TestTagSummary>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvId: releaseEnvId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "655a8f6b-fec7-4b46-b672-68b44141b498",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestTagSummary>;
                res = await this.rest.get<Contracts.TestTagSummary>(url, options);

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
     * Creates an attachment in the LogStore for the specified buildId.
     * 
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel - Contains attachment info like stream, filename, comment, attachmentType
     * @param {string} project - Project ID or project name
     * @param {number} buildId - BuildId
     */
    public async createBuildAttachmentInLogStore(
        attachmentRequestModel: Contracts.TestAttachmentRequestModel,
        project: string,
        buildId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                buildId: buildId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "6f747e16-18c2-435a-b4fb-fa05d6845fee",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<void>;
                res = await this.rest.create<void>(url, attachmentRequestModel, options);

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
     * Creates an attachment in the LogStore for the specified runId.
     * 
     * @param {Contracts.TestAttachmentRequestModel} attachmentRequestModel - Contains attachment info like stream, filename, comment, attachmentType
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test RunId
     */
    public async createTestRunLogStoreAttachment(
        attachmentRequestModel: Contracts.TestAttachmentRequestModel,
        project: string,
        runId: number
        ): Promise<Contracts.TestLogStoreAttachmentReference> {

        return new Promise<Contracts.TestLogStoreAttachmentReference>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "1026d5de-4b0b-46ae-a31f-7c59b6af51ef",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestLogStoreAttachmentReference>;
                res = await this.rest.create<Contracts.TestLogStoreAttachmentReference>(url, attachmentRequestModel, options);

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
     * Deletes the attachment with the specified filename for the specified runId from the LogStore.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test RunId
     * @param {string} filename - Attachment FileName
     */
    public async deleteTestRunLogStoreAttachment(
        project: string,
        runId: number,
        filename: string
        ): Promise<void> {
        if (filename == null) {
            throw new TypeError('filename can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                filename: filename,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "1026d5de-4b0b-46ae-a31f-7c59b6af51ef",
                    routeValues,
                    queryValues);

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
     * Returns the attachment with the specified filename for the specified runId from the LogStore.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test RunId
     * @param {string} filename - Attachment FileName
     */
    public async getTestRunLogStoreAttachmentContent(
        project: string,
        runId: number,
        filename: string
        ): Promise<NodeJS.ReadableStream> {
        if (filename == null) {
            throw new TypeError('filename can not be null or undefined');
        }

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                filename: filename,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "1026d5de-4b0b-46ae-a31f-7c59b6af51ef",
                    routeValues,
                    queryValues);

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
     * Returns a list of attachments for the specified runId from the LogStore.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test RunId
     */
    public async getTestRunLogStoreAttachments(
        project: string,
        runId: number
        ): Promise<Contracts.TestLogStoreAttachment[]> {

        return new Promise<Contracts.TestLogStoreAttachment[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "1026d5de-4b0b-46ae-a31f-7c59b6af51ef",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestLogStoreAttachment[]>;
                res = await this.rest.get<Contracts.TestLogStoreAttachment[]>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLogStoreAttachment,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Returns the attachment with the specified filename for the specified runId from the LogStore.
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Test RunId
     * @param {string} filename - Attachment FileName
     */
    public async getTestRunLogStoreAttachmentZip(
        project: string,
        runId: number,
        filename: string
        ): Promise<NodeJS.ReadableStream> {
        if (filename == null) {
            throw new TypeError('filename can not be null or undefined');
        }

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                filename: filename,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "1026d5de-4b0b-46ae-a31f-7c59b6af51ef",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                
                let apiVersion: string = verData.apiVersion!;
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                resolve((await this.http.get(url, { "Accept": accept })).message);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Creates a new test failure type
     * 
     * @param {Contracts.TestResultFailureTypeRequestModel} testResultFailureType
     * @param {string} project - Project ID or project name
     */
    public async createFailureType(
        testResultFailureType: Contracts.TestResultFailureTypeRequestModel,
        project: string
        ): Promise<Contracts.TestResultFailureType> {

        return new Promise<Contracts.TestResultFailureType>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "c4ac0486-830c-4a2a-9ef9-e8a1791a70fd",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultFailureType>;
                res = await this.rest.create<Contracts.TestResultFailureType>(url, testResultFailureType, options);

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
     * Deletes a test failure type with specified failureTypeId
     * 
     * @param {string} project - Project ID or project name
     * @param {number} failureTypeId
     */
    public async deleteFailureType(
        project: string,
        failureTypeId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                failureTypeId: failureTypeId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "c4ac0486-830c-4a2a-9ef9-e8a1791a70fd",
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
     * Returns the list of test failure types.
     * 
     * @param {string} project - Project ID or project name
     */
    public async getFailureTypes(
        project: string
        ): Promise<Contracts.TestResultFailureType[]> {

        return new Promise<Contracts.TestResultFailureType[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "c4ac0486-830c-4a2a-9ef9-e8a1791a70fd",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestResultFailureType[]>;
                res = await this.rest.get<Contracts.TestResultFailureType[]>(url, options);

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
     * Get history of a test method using TestHistoryQuery
     * 
     * @param {Contracts.TestHistoryQuery} filter - TestHistoryQuery to get history
     * @param {string} project - Project ID or project name
     */
    public async queryTestHistory(
        filter: Contracts.TestHistoryQuery,
        project: string
        ): Promise<Contracts.TestHistoryQuery> {

        return new Promise<Contracts.TestHistoryQuery>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "2a41bd6a-8118-4403-b74e-5ba7492aed9d",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestHistoryQuery>;
                res = await this.rest.create<Contracts.TestHistoryQuery>(url, filter, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestHistoryQuery,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get list of build attachments reference
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId - Id of the build to get
     * @param {Contracts.TestLogType} type - type of the attachment to get
     * @param {string} directoryPath - directory path for which attachments are needed
     * @param {string} fileNamePrefix - file name prefix to filter the list of attachment
     * @param {boolean} fetchMetaData - Default is false, set if metadata is needed
     * @param {number} top - Number of test attachments reference to return
     * @param {String} continuationToken - Header to pass the continuationToken
     */
    public async getTestLogsForBuild(
        customHeaders: any,
        project: string,
        buildId: number,
        type: Contracts.TestLogType,
        directoryPath?: string,
        fileNamePrefix?: string,
        fetchMetaData?: boolean,
        top?: number,
        continuationToken?: String
        ): Promise<VSSInterfaces.PagedList<Contracts.TestLog>> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.TestLog>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                type: type,
                directoryPath: directoryPath,
                fileNamePrefix: fileNamePrefix,
                fetchMetaData: fetchMetaData,
                top: top,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["x-ms-continuationtoken"] = "continuationToken";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "dff8ce3a-e539-4817-a405-d968491a88f1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.TestLog>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.TestLog>>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLog,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get list of test result attachments reference
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Id of the test run that contains the result
     * @param {number} resultId - Id of the test result
     * @param {Contracts.TestLogType} type - type of attachments to get
     * @param {string} directoryPath - directory path of attachments to get
     * @param {string} fileNamePrefix - file name prefix to filter the list of attachment
     * @param {boolean} fetchMetaData - Default is false, set if metadata is needed
     * @param {number} top - Numbe of attachments reference to return
     * @param {String} continuationToken - Header to pass the continuationToken
     */
    public async getTestResultLogs(
        customHeaders: any,
        project: string,
        runId: number,
        resultId: number,
        type: Contracts.TestLogType,
        directoryPath?: string,
        fileNamePrefix?: string,
        fetchMetaData?: boolean,
        top?: number,
        continuationToken?: String
        ): Promise<VSSInterfaces.PagedList<Contracts.TestLog>> {
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.TestLog>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                resultId: resultId
            };

            let queryValues: any = {
                type: type,
                directoryPath: directoryPath,
                fileNamePrefix: fileNamePrefix,
                fetchMetaData: fetchMetaData,
                top: top,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["x-ms-continuationtoken"] = "continuationToken";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "714caaac-ae1e-4869-8323-9bc0f5120dbf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.TestLog>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.TestLog>>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLog,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get list of test subresult attachments reference
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Id of the test run that contains the results
     * @param {number} resultId - Id of the test result that contains subresult
     * @param {number} subResultId - Id of the test subresult
     * @param {Contracts.TestLogType} type - type of the attachments to get
     * @param {string} directoryPath - directory path of the attachment to get
     * @param {string} fileNamePrefix - file name prefix to filter the list of attachments
     * @param {boolean} fetchMetaData - Default is false, set if metadata is needed
     * @param {number} top - Number of attachments reference to return
     * @param {String} continuationToken - Header to pass the continuationToken
     */
    public async getTestSubResultLogs(
        customHeaders: any,
        project: string,
        runId: number,
        resultId: number,
        subResultId: number,
        type: Contracts.TestLogType,
        directoryPath?: string,
        fileNamePrefix?: string,
        fetchMetaData?: boolean,
        top?: number,
        continuationToken?: String
        ): Promise<VSSInterfaces.PagedList<Contracts.TestLog>> {
        if (subResultId == null) {
            throw new TypeError('subResultId can not be null or undefined');
        }
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.TestLog>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                resultId: resultId
            };

            let queryValues: any = {
                subResultId: subResultId,
                type: type,
                directoryPath: directoryPath,
                fileNamePrefix: fileNamePrefix,
                fetchMetaData: fetchMetaData,
                top: top,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["x-ms-continuationtoken"] = "continuationToken";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "714caaac-ae1e-4869-8323-9bc0f5120dbf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.TestLog>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.TestLog>>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLog,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get list of test run attachments reference
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Id of the test run
     * @param {Contracts.TestLogType} type - type of the attachments to get
     * @param {string} directoryPath - directory path for which attachments are needed
     * @param {string} fileNamePrefix - file name prefix to filter the list of attachment
     * @param {boolean} fetchMetaData - Default is false, set if metadata is needed
     * @param {number} top - Number of attachments reference to return
     * @param {String} continuationToken - Header to pass the continuationToken
     */
    public async getTestRunLogs(
        customHeaders: any,
        project: string,
        runId: number,
        type: Contracts.TestLogType,
        directoryPath?: string,
        fileNamePrefix?: string,
        fetchMetaData?: boolean,
        top?: number,
        continuationToken?: String
        ): Promise<VSSInterfaces.PagedList<Contracts.TestLog>> {
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }

        return new Promise<VSSInterfaces.PagedList<Contracts.TestLog>>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                type: type,
                directoryPath: directoryPath,
                fileNamePrefix: fileNamePrefix,
                fetchMetaData: fetchMetaData,
                top: top,
            };
            
            customHeaders = customHeaders || {};
            customHeaders["x-ms-continuationtoken"] = "continuationToken";

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "5b47b946-e875-4c9a-acdc-2a20996caebe",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);
                options.additionalHeaders = customHeaders;

                let res: restm.IRestResponse<VSSInterfaces.PagedList<Contracts.TestLog>>;
                res = await this.rest.get<VSSInterfaces.PagedList<Contracts.TestLog>>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLog,
                                              true);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get SAS Uri of a build attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} build - Id of the build to get
     * @param {Contracts.TestLogType} type - type of the file
     * @param {string} filePath - filePath for which sas uri is needed
     */
    public async getTestLogStoreEndpointDetailsForBuildLog(
        project: string,
        build: number,
        type: Contracts.TestLogType,
        filePath: string
        ): Promise<Contracts.TestLogStoreEndpointDetails> {
        if (build == null) {
            throw new TypeError('build can not be null or undefined');
        }
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }
        if (filePath == null) {
            throw new TypeError('filePath can not be null or undefined');
        }

        return new Promise<Contracts.TestLogStoreEndpointDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                build: build,
                type: type,
                filePath: filePath,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "39b09be7-f0c9-4a83-a513-9ae31b45c56f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestLogStoreEndpointDetails>;
                res = await this.rest.get<Contracts.TestLogStoreEndpointDetails>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLogStoreEndpointDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create and Get sas uri of the build container
     * 
     * @param {string} project - Project ID or project name
     * @param {number} buildId - Id of the build to get
     * @param {Contracts.TestLogStoreOperationType} testLogStoreOperationType - Type of operation to perform using sas uri
     */
    public async testLogStoreEndpointDetailsForBuild(
        project: string,
        buildId: number,
        testLogStoreOperationType: Contracts.TestLogStoreOperationType
        ): Promise<Contracts.TestLogStoreEndpointDetails> {
        if (buildId == null) {
            throw new TypeError('buildId can not be null or undefined');
        }
        if (testLogStoreOperationType == null) {
            throw new TypeError('testLogStoreOperationType can not be null or undefined');
        }

        return new Promise<Contracts.TestLogStoreEndpointDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                testLogStoreOperationType: testLogStoreOperationType,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "39b09be7-f0c9-4a83-a513-9ae31b45c56f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestLogStoreEndpointDetails>;
                res = await this.rest.create<Contracts.TestLogStoreEndpointDetails>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLogStoreEndpointDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get SAS Uri of a test results attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Id of the test run that contains result
     * @param {number} resultId - Id of the test result whose files need to be downloaded
     * @param {Contracts.TestLogType} type - type of the file
     * @param {string} filePath - filePath for which sas uri is needed
     */
    public async getTestLogStoreEndpointDetailsForResultLog(
        project: string,
        runId: number,
        resultId: number,
        type: Contracts.TestLogType,
        filePath: string
        ): Promise<Contracts.TestLogStoreEndpointDetails> {
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }
        if (filePath == null) {
            throw new TypeError('filePath can not be null or undefined');
        }

        return new Promise<Contracts.TestLogStoreEndpointDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                resultId: resultId
            };

            let queryValues: any = {
                type: type,
                filePath: filePath,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "da630b37-1236-45b5-945e-1d7bdb673850",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestLogStoreEndpointDetails>;
                res = await this.rest.get<Contracts.TestLogStoreEndpointDetails>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLogStoreEndpointDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get SAS Uri of a test subresults attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Id of the test run that contains result
     * @param {number} resultId - Id of the test result that contains subresult
     * @param {number} subResultId - Id of the test subresult whose file sas uri is needed
     * @param {Contracts.TestLogType} type - type of the file
     * @param {string} filePath - filePath for which sas uri is needed
     */
    public async getTestLogStoreEndpointDetailsForSubResultLog(
        project: string,
        runId: number,
        resultId: number,
        subResultId: number,
        type: Contracts.TestLogType,
        filePath: string
        ): Promise<Contracts.TestLogStoreEndpointDetails> {
        if (subResultId == null) {
            throw new TypeError('subResultId can not be null or undefined');
        }
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }
        if (filePath == null) {
            throw new TypeError('filePath can not be null or undefined');
        }

        return new Promise<Contracts.TestLogStoreEndpointDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                resultId: resultId
            };

            let queryValues: any = {
                subResultId: subResultId,
                type: type,
                filePath: filePath,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "da630b37-1236-45b5-945e-1d7bdb673850",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestLogStoreEndpointDetails>;
                res = await this.rest.get<Contracts.TestLogStoreEndpointDetails>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLogStoreEndpointDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create empty file for a result and Get Sas uri for the file
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Id of the test run that contains the result
     * @param {number} resultId - Id of the test results that contains sub result
     * @param {number} subResultId - Id of the test sub result whose file sas uri is needed
     * @param {string} filePath - file path inside the sub result for which sas uri is needed
     * @param {Contracts.TestLogType} type - Type of the file for download
     */
    public async testLogStoreEndpointDetailsForResult(
        project: string,
        runId: number,
        resultId: number,
        subResultId: number,
        filePath: string,
        type: Contracts.TestLogType
        ): Promise<Contracts.TestLogStoreEndpointDetails> {
        if (subResultId == null) {
            throw new TypeError('subResultId can not be null or undefined');
        }
        if (filePath == null) {
            throw new TypeError('filePath can not be null or undefined');
        }
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }

        return new Promise<Contracts.TestLogStoreEndpointDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                resultId: resultId
            };

            let queryValues: any = {
                subResultId: subResultId,
                filePath: filePath,
                type: type,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "da630b37-1236-45b5-945e-1d7bdb673850",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestLogStoreEndpointDetails>;
                res = await this.rest.create<Contracts.TestLogStoreEndpointDetails>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLogStoreEndpointDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Get SAS Uri of a test run attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Id of the test run whose file has to be downloaded
     * @param {Contracts.TestLogType} type - type of the file
     * @param {string} filePath - filePath for which sas uri is needed
     */
    public async getTestLogStoreEndpointDetailsForRunLog(
        project: string,
        runId: number,
        type: Contracts.TestLogType,
        filePath: string
        ): Promise<Contracts.TestLogStoreEndpointDetails> {
        if (type == null) {
            throw new TypeError('type can not be null or undefined');
        }
        if (filePath == null) {
            throw new TypeError('filePath can not be null or undefined');
        }

        return new Promise<Contracts.TestLogStoreEndpointDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                type: type,
                filePath: filePath,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "67eb3f92-6c97-4fd9-8b63-6cbdc7e526ea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestLogStoreEndpointDetails>;
                res = await this.rest.get<Contracts.TestLogStoreEndpointDetails>(url, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLogStoreEndpointDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Create empty file for a run and Get Sas uri for the file
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId - Id of the run to get endpoint details
     * @param {Contracts.TestLogStoreOperationType} testLogStoreOperationType - Type of operation to perform using sas uri
     * @param {string} filePath - file path to create an empty file
     * @param {Contracts.TestLogType} type - Default is GeneralAttachment, type of empty file to be created
     */
    public async testLogStoreEndpointDetailsForRun(
        project: string,
        runId: number,
        testLogStoreOperationType: Contracts.TestLogStoreOperationType,
        filePath?: string,
        type?: Contracts.TestLogType
        ): Promise<Contracts.TestLogStoreEndpointDetails> {
        if (testLogStoreOperationType == null) {
            throw new TypeError('testLogStoreOperationType can not be null or undefined');
        }

        return new Promise<Contracts.TestLogStoreEndpointDetails>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                testLogStoreOperationType: testLogStoreOperationType,
                filePath: filePath,
                type: type,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "67eb3f92-6c97-4fd9-8b63-6cbdc7e526ea",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestLogStoreEndpointDetails>;
                res = await this.rest.create<Contracts.TestLogStoreEndpointDetails>(url, null, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.TestLogStoreEndpointDetails,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {Contracts.TestSettings} testSettings
     * @param {string} project - Project ID or project name
     */
    public async createTestSettings(
        testSettings: Contracts.TestSettings,
        project: string
        ): Promise<number> {

        return new Promise<number>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "930bad47-f826-4099-9597-f44d0a9c735c",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<number>;
                res = await this.rest.create<number>(url, testSettings, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     */
    public async deleteTestSettings(
        project: string,
        testSettingsId: number
        ): Promise<void> {
        if (testSettingsId == null) {
            throw new TypeError('testSettingsId can not be null or undefined');
        }

        return new Promise<void>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testSettingsId: testSettingsId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "930bad47-f826-4099-9597-f44d0a9c735c",
                    routeValues,
                    queryValues);

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
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     */
    public async getTestSettingsById(
        project: string,
        testSettingsId: number
        ): Promise<Contracts.TestSettings> {
        if (testSettingsId == null) {
            throw new TypeError('testSettingsId can not be null or undefined');
        }

        return new Promise<Contracts.TestSettings>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testSettingsId: testSettingsId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.1",
                    "testresults",
                    "930bad47-f826-4099-9597-f44d0a9c735c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestSettings>;
                res = await this.rest.get<Contracts.TestSettings>(url, options);

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
     * @param {Contracts.WorkItemToTestLinks} workItemToTestLinks
     * @param {string} project - Project ID or project name
     */
    public async addWorkItemToTestLinks(
        workItemToTestLinks: Contracts.WorkItemToTestLinks,
        project: string
        ): Promise<Contracts.WorkItemToTestLinks> {

        return new Promise<Contracts.WorkItemToTestLinks>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "4e3abe63-ca46-4fe0-98b2-363f7ec7aa5f",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.WorkItemToTestLinks>;
                res = await this.rest.create<Contracts.WorkItemToTestLinks>(url, workItemToTestLinks, options);

                let ret = this.formatResponse(res.result,
                                              Contracts.TypeInfo.WorkItemToTestLinks,
                                              false);

                resolve(ret);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} testName
     * @param {number} workItemId
     */
    public async deleteTestMethodToWorkItemLink(
        project: string,
        testName: string,
        workItemId: number
        ): Promise<boolean> {
        if (testName == null) {
            throw new TypeError('testName can not be null or undefined');
        }
        if (workItemId == null) {
            throw new TypeError('workItemId can not be null or undefined');
        }

        return new Promise<boolean>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testName: testName,
                workItemId: workItemId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "cbd50bd7-f7ed-4e35-b127-4408ae6bfa2c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<boolean>;
                res = await this.rest.del<boolean>(url, options);

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
     * @param {string} project - Project ID or project name
     * @param {string} testName
     */
    public async queryTestMethodLinkedWorkItems(
        project: string,
        testName: string
        ): Promise<Contracts.TestToWorkItemLinks> {
        if (testName == null) {
            throw new TypeError('testName can not be null or undefined');
        }

        return new Promise<Contracts.TestToWorkItemLinks>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testName: testName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "cbd50bd7-f7ed-4e35-b127-4408ae6bfa2c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.TestToWorkItemLinks>;
                res = await this.rest.create<Contracts.TestToWorkItemLinks>(url, null, options);

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
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     */
    public async getTestResultWorkItemsById(
        project: string,
        runId: number,
        testCaseResultId: number
        ): Promise<Contracts.WorkItemReference[]> {

        return new Promise<Contracts.WorkItemReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "3d032fd6-e7a0-468b-b105-75d206f99aad",
                    routeValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.WorkItemReference[]>;
                res = await this.rest.get<Contracts.WorkItemReference[]>(url, options);

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
     * Query Test Result WorkItems based on filter
     * 
     * @param {string} project - Project ID or project name
     * @param {string} workItemCategory - can take values Microsoft.BugCategory or all(for getting all workitems)
     * @param {string} automatedTestName
     * @param {number} testCaseId
     * @param {Date} maxCompleteDate
     * @param {number} days
     * @param {number} workItemCount
     */
    public async queryTestResultWorkItems(
        project: string,
        workItemCategory: string,
        automatedTestName?: string,
        testCaseId?: number,
        maxCompleteDate?: Date,
        days?: number,
        workItemCount?: number
        ): Promise<Contracts.WorkItemReference[]> {
        if (workItemCategory == null) {
            throw new TypeError('workItemCategory can not be null or undefined');
        }

        return new Promise<Contracts.WorkItemReference[]>(async (resolve, reject) => {
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                workItemCategory: workItemCategory,
                automatedTestName: automatedTestName,
                testCaseId: testCaseId,
                maxCompleteDate: maxCompleteDate,
                days: days,
                '$workItemCount': workItemCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "7.1-preview.2",
                    "testresults",
                    "f7401a26-331b-44fe-a470-f7ed35138e4a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl!;
                let options: restm.IRequestOptions = this.createRequestOptions('application/json', 
                                                                                verData.apiVersion);

                let res: restm.IRestResponse<Contracts.WorkItemReference[]>;
                res = await this.rest.get<Contracts.WorkItemReference[]>(url, options);

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

}
