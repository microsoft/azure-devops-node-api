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

/// <reference path="../node/node.d.ts"/>
/// <reference path="../q/Q.d.ts"/>

import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TestInterfaces = require("./interfaces/TestInterfaces");

export interface ITestApi extends basem.ClientApiBase {
    createTestResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, onResult: (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => void): void;
    getTestResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getTestResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    createTestRunAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, onResult: (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => void): void;
    getTestRunAttachmentContent(project: string, runId: number, attachmentId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getTestRunAttachmentZip(project: string, runId: number, attachmentId: number, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBuildCodeCoverage(project: string, buildId: number, flags: number, onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.BuildCoverage[]) => void): void;
    getCodeCoverageSummary(project: string, buildId: number, deltaBuildId: number, onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.CodeCoverageSummary) => void): void;
    updateCodeCoverageSummary(coverageData: TestInterfaces.CodeCoverageData, project: string, buildId: number, onResult: (err: any, statusCode: number) => void): void;
    getTestRunCodeCoverage(project: string, runId: number, flags: number, onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.TestRunCoverage[]) => void): void;
    addCustomFields(newFields: TestInterfaces.CustomTestFieldDefinition[], project: string, onResult: (err: any, statusCode: number, ExtensionFields: TestInterfaces.CustomTestFieldDefinition[]) => void): void;
    queryCustomFields(project: string, scopeFilter: TestInterfaces.CustomTestFieldScope, onResult: (err: any, statusCode: number, ExtensionFields: TestInterfaces.CustomTestFieldDefinition[]) => void): void;
    getTestRunLogs(project: string, runId: number, onResult: (err: any, statusCode: number, MessageLogs: TestInterfaces.TestMessageLogDetails[]) => void): void;
    createTestPlan(testPlan: TestInterfaces.PlanUpdateModel, project: string, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void): void;
    getPlanById(project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void): void;
    getPlans(project: string, owner: string, skip: number, top: number, includePlanDetails: boolean, filterActivePlans: boolean, onResult: (err: any, statusCode: number, Plans: TestInterfaces.TestPlan[]) => void): void;
    updateTestPlan(planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number, onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void): void;
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint) => void): void;
    getPoints(project: string, planId: number, suiteId: number, witFields: string, configurationId: string, testCaseId: string, testPointIds: string, includePointDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Points: TestInterfaces.TestPoint[]) => void): void;
    updateTestPoints(pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string, onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint[]) => void): void;
    queryTestResultRecentBugs(project: string, testRunId: number, testResultId: number, recentDays: number, onResult: (err: any, statusCode: number, RecentBugs: TestInterfaces.WorkItemReference[]) => void): void;
    queryReportForBuild(project: string, buildId: number, sourceWorkflow: string, includeFailureDetails: boolean, buildToCompare: TestInterfaces.BuildReference, onResult: (err: any, statusCode: number, ReportForBuild: TestInterfaces.TestReport) => void): void;
    getTestResultDetailsForBuild(project: string, buildId: number, sourceWorkflow: string, groupBy: string, filter: string, onResult: (err: any, statusCode: number, ResultDetailsForBuild: TestInterfaces.AggregatedResultsWithDetails) => void): void;
    createResultRetentionSettings(retentionSettings: TestInterfaces.ResultRetentionSettings, project: string, onResult: (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => void): void;
    deleteResultRetentionSettings(project: string, onResult: (err: any, statusCode: number) => void): void;
    getResultRetentionSettings(project: string, onResult: (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => void): void;
    updateResultRetentionSettings(retentionSettings: TestInterfaces.ResultRetentionSettings, project: string, onResult: (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => void): void;
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults: boolean, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestIterationDetailsModel) => void): void;
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults: boolean, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestIterationDetailsModel[]) => void): void;
    addTestResultsToTestRun(resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    bulkUpdateTestResults(resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[], onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void): void;
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult) => void): void;
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    getTestResultById(project: string, runId: number, testCaseResultId: number, detailsToInclude: TestInterfaces.ResultDetails, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    getTestResults(project: string, runId: number, detailsToInclude: TestInterfaces.ResultDetails, skip: number, top: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    updateTestResults(resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    getTestResultsByIds(project: string, ids: TestInterfaces.TestCaseResultIdentifier[], fields: string[], onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void): void;
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath: string, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestActionResultModel[]) => void): void;
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName: string, onResult: (err: any, statusCode: number, Results: TestInterfaces.TestResultParameterModel[]) => void): void;
    getTestResultsByQuery(query: TestInterfaces.QueryModel, project: string, includeResultDetails: boolean, includeIterationDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void): void;
    queryTestResultTrendReport(project: string, testRunId: number, testResultId: number, historyDays: number, top: number, onResult: (err: any, statusCode: number, ResultTrend: TestInterfaces.TestCaseResult[]) => void): void;
    getTestRunStatistics(project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRunStatistic) => void): void;
    getTestRunsByQuery(query: TestInterfaces.QueryModel, project: string, includeRunDetails: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun[]) => void): void;
    createTestRun(testRun: TestInterfaces.RunCreateModel, project: string, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void): void;
    deleteTestRun(project: string, runId: number, onResult: (err: any, statusCode: number) => void): void;
    getTestRunById(project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void): void;
    getTestRuns(project: string, buildUri: string, owner: string, tmiRunId: string, planId: number, includeRunDetails: boolean, automated: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Runs: TestInterfaces.TestRun[]) => void): void;
    updateTestRun(runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number, onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void): void;
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string, onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void): void;
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.SuiteTestCase) => void): void;
    getTestCases(project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void): void;
    removeTestCasesFromSuiteUrl(project: string, planId: number, suiteId: number, testCaseIds: string, onResult: (err: any, statusCode: number) => void): void;
    createTestSuite(testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite[]) => void): void;
    deleteTestSuite(project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number) => void): void;
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites: boolean, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void): void;
    getTestSuitesForPlan(project: string, planId: number, includeSuites: boolean, skip: number, top: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void): void;
    updateTestSuite(suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number, onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void): void;
    getSuitesByTestCaseId(testCaseId: number, onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void): void;
    queryFailureDetailsForBuild(build: TestInterfaces.BuildReference, project: string, sourceWorkflow: string, buildToCompare: TestInterfaces.BuildReference, onResult: (err: any, statusCode: number, TestFailure: TestInterfaces.TestFailuresAnalysis) => void): void;
    queryFailureDetailsForTestRun(project: string, testRunId: number, onResult: (err: any, statusCode: number, TestFailure: TestInterfaces.TestFailuresAnalysis) => void): void;
    createTestSettings(testSettings: TestInterfaces.TestSettings, project: string, onResult: (err: any, statusCode: number, TestSetting: number) => void): void;
    deleteTestSettings(project: string, testSettingsId: number, onResult: (err: any, statusCode: number) => void): void;
    getTestSettingsById(project: string, testSettingsId: number, onResult: (err: any, statusCode: number, TestSetting: TestInterfaces.TestSettings) => void): void;
}

export interface IQTestApi extends basem.QClientApiBase {
    createTestResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): Q.Promise<TestInterfaces.TestAttachmentReference>;
    getTestResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number): Q.Promise<NodeJS.ReadableStream>;
    getTestResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number): Q.Promise<NodeJS.ReadableStream>;
    createTestRunAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number): Q.Promise<TestInterfaces.TestAttachmentReference>;
    getTestRunAttachmentContent(project: string, runId: number, attachmentId: number): Q.Promise<NodeJS.ReadableStream>;
    getTestRunAttachmentZip(project: string, runId: number, attachmentId: number): Q.Promise<NodeJS.ReadableStream>;
    getBuildCodeCoverage(project: string, buildId: number, flags: number): Q.Promise<TestInterfaces.BuildCoverage[]>;
    getCodeCoverageSummary(project: string, buildId: number, deltaBuildId?: number): Q.Promise<TestInterfaces.CodeCoverageSummary>;
    updateCodeCoverageSummary(coverageData: TestInterfaces.CodeCoverageData, project: string, buildId: number): Q.Promise<void>;
    getTestRunCodeCoverage(project: string, runId: number, flags: number): Q.Promise<TestInterfaces.TestRunCoverage[]>;
    addCustomFields(newFields: TestInterfaces.CustomTestFieldDefinition[], project: string): Q.Promise<TestInterfaces.CustomTestFieldDefinition[]>;
    queryCustomFields(project: string, scopeFilter: TestInterfaces.CustomTestFieldScope): Q.Promise<TestInterfaces.CustomTestFieldDefinition[]>;
    getTestRunLogs(project: string, runId: number): Q.Promise<TestInterfaces.TestMessageLogDetails[]>;
    createTestPlan(testPlan: TestInterfaces.PlanUpdateModel, project: string): Q.Promise<TestInterfaces.TestPlan>;
    getPlanById(project: string, planId: number): Q.Promise<TestInterfaces.TestPlan>;
    getPlans(project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean): Q.Promise<TestInterfaces.TestPlan[]>;
    updateTestPlan(planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number): Q.Promise<TestInterfaces.TestPlan>;
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields?: string): Q.Promise<TestInterfaces.TestPoint>;
    getPoints(project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestPoint[]>;
    updateTestPoints(pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string): Q.Promise<TestInterfaces.TestPoint[]>;
    queryTestResultRecentBugs(project: string, testRunId: number, testResultId: number, recentDays?: number): Q.Promise<TestInterfaces.WorkItemReference[]>;
    queryReportForBuild(project: string, buildId: number, sourceWorkflow: string, includeFailureDetails: boolean, buildToCompare: TestInterfaces.BuildReference): Q.Promise<TestInterfaces.TestReport>;
    getTestResultDetailsForBuild(project: string, buildId: number, sourceWorkflow: string, groupBy?: string, filter?: string): Q.Promise<TestInterfaces.AggregatedResultsWithDetails>;
    createResultRetentionSettings(retentionSettings: TestInterfaces.ResultRetentionSettings, project: string): Q.Promise<TestInterfaces.ResultRetentionSettings>;
    deleteResultRetentionSettings(project: string): Q.Promise<void>;
    getResultRetentionSettings(project: string): Q.Promise<TestInterfaces.ResultRetentionSettings>;
    updateResultRetentionSettings(retentionSettings: TestInterfaces.ResultRetentionSettings, project: string): Q.Promise<TestInterfaces.ResultRetentionSettings>;
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean): Q.Promise<TestInterfaces.TestIterationDetailsModel>;
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean): Q.Promise<TestInterfaces.TestIterationDetailsModel[]>;
    addTestResultsToTestRun(resultCreateModels: TestInterfaces.TestResultCreateModel[], project: string, runId: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    bulkUpdateTestResults(resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel, project: string, runId: number, resultIds: number[]): Q.Promise<TestInterfaces.TestCaseResult[]>;
    getTestCaseResultById(project: string, runId: number, testCaseResultId: number, includeIterationDetails: boolean): Q.Promise<TestInterfaces.TestCaseResult>;
    getTestCaseResults(project: string, runId: number, includeIterationDetails: boolean): Q.Promise<TestInterfaces.TestCaseResult[]>;
    getTestResultById(project: string, runId: number, testCaseResultId: number, detailsToInclude?: TestInterfaces.ResultDetails): Q.Promise<TestInterfaces.TestCaseResult[]>;
    getTestResults(project: string, runId: number, detailsToInclude?: TestInterfaces.ResultDetails, skip?: number, top?: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    updateTestResults(resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[], project: string, runId: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    getTestResultsByIds(project: string, ids: TestInterfaces.TestCaseResultIdentifier[], fields?: string[]): Q.Promise<TestInterfaces.TestCaseResult[]>;
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Q.Promise<TestInterfaces.TestActionResultModel[]>;
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string): Q.Promise<TestInterfaces.TestResultParameterModel[]>;
    getTestResultsByQuery(query: TestInterfaces.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    queryTestResultTrendReport(project: string, testRunId: number, testResultId: number, historyDays?: number, top?: number): Q.Promise<TestInterfaces.TestCaseResult[]>;
    getTestRunStatistics(project: string, runId: number): Q.Promise<TestInterfaces.TestRunStatistic>;
    getTestRunsByQuery(query: TestInterfaces.QueryModel, project: string, includeRunDetails?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestRun[]>;
    createTestRun(testRun: TestInterfaces.RunCreateModel, project: string): Q.Promise<TestInterfaces.TestRun>;
    deleteTestRun(project: string, runId: number): Q.Promise<void>;
    getTestRunById(project: string, runId: number): Q.Promise<TestInterfaces.TestRun>;
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestRun[]>;
    updateTestRun(runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number): Q.Promise<TestInterfaces.TestRun>;
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string): Q.Promise<TestInterfaces.SuiteTestCase[]>;
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number): Q.Promise<TestInterfaces.SuiteTestCase>;
    getTestCases(project: string, planId: number, suiteId: number): Q.Promise<TestInterfaces.SuiteTestCase[]>;
    removeTestCasesFromSuiteUrl(project: string, planId: number, suiteId: number, testCaseIds: string): Q.Promise<void>;
    createTestSuite(testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number): Q.Promise<TestInterfaces.TestSuite[]>;
    deleteTestSuite(project: string, planId: number, suiteId: number): Q.Promise<void>;
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites?: boolean): Q.Promise<TestInterfaces.TestSuite>;
    getTestSuitesForPlan(project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number): Q.Promise<TestInterfaces.TestSuite[]>;
    updateTestSuite(suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number): Q.Promise<TestInterfaces.TestSuite>;
    getSuitesByTestCaseId(testCaseId: number): Q.Promise<TestInterfaces.TestSuite[]>;
    queryFailureDetailsForBuild(build: TestInterfaces.BuildReference, project: string, sourceWorkflow: string, buildToCompare: TestInterfaces.BuildReference): Q.Promise<TestInterfaces.TestFailuresAnalysis>;
    queryFailureDetailsForTestRun(project: string, testRunId: number): Q.Promise<TestInterfaces.TestFailuresAnalysis>;
    createTestSettings(testSettings: TestInterfaces.TestSettings, project: string): Q.Promise<number>;
    deleteTestSettings(project: string, testSettingsId: number): Q.Promise<void>;
    getTestSettingsById(project: string, testSettingsId: number): Q.Promise<TestInterfaces.TestSettings>;
}

export class TestApi extends basem.ClientApiBase implements ITestApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Test-api');
    }

    /**
     * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param onResult callback function with the resulting TestInterfaces.TestAttachmentReference
     */
    public createTestResultAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number,
        onResult: (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "2bffebe9-2f0f-4639-9af8-56129e9fed2d", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestAttachmentRequestModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestAttachmentReference, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, attachmentRequestModel, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a test result attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getTestResultAttachmentContent(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            attachmentId: attachmentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "2bffebe9-2f0f-4639-9af8-56129e9fed2d", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a test result attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} attachmentId
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getTestResultAttachmentZip(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            attachmentId: attachmentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "2bffebe9-2f0f-4639-9af8-56129e9fed2d", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestAttachmentReference
     */
    public createTestRunAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number,
        onResult: (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "4f004af4-a507-489c-9b13-cb62060beb11", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestAttachmentRequestModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestAttachmentReference, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, attachmentRequestModel, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a test run attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} attachmentId
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getTestRunAttachmentContent(
        project: string,
        runId: number,
        attachmentId: number,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            attachmentId: attachmentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "4f004af4-a507-489c-9b13-cb62060beb11", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/octet-stream", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Returns a test run attachment
     * 
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} attachmentId
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getTestRunAttachmentZip(
        project: string,
        runId: number,
        attachmentId: number,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            attachmentId: attachmentId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "4f004af4-a507-489c-9b13-cb62060beb11", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(url, apiVersion, "application/zip", onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} flags
     * @param onResult callback function with the resulting TestInterfaces.BuildCoverage[]
     */
    public getBuildCodeCoverage(
        project: string,
        buildId: number,
        flags: number,
        onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.BuildCoverage[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            buildId: buildId,
            flags: flags,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "77560e8a-4e8c-4d59-894e-a5f264c24444", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.BuildCoverage, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {number} deltaBuildId
     * @param onResult callback function with the resulting TestInterfaces.CodeCoverageSummary
     */
    public getCodeCoverageSummary(
        project: string,
        buildId: number,
        deltaBuildId: number,
        onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.CodeCoverageSummary) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            buildId: buildId,
            deltaBuildId: deltaBuildId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "77560e8a-4e8c-4d59-894e-a5f264c24444", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.CodeCoverageSummary, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
     * 
     * @param {TestInterfaces.CodeCoverageData} coverageData
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param onResult callback function
     */
    public updateCodeCoverageSummary(
        coverageData: TestInterfaces.CodeCoverageData,
        project: string,
        buildId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            buildId: buildId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "77560e8a-4e8c-4d59-894e-a5f264c24444", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.CodeCoverageData, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, coverageData, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} flags
     * @param onResult callback function with the resulting TestInterfaces.TestRunCoverage[]
     */
    public getTestRunCodeCoverage(
        project: string,
        runId: number,
        flags: number,
        onResult: (err: any, statusCode: number, CodeCoverage: TestInterfaces.TestRunCoverage[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        var queryValues: any = {
            flags: flags,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "9629116f-3b89-4ed8-b358-d4694efda160", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRunCoverage, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.CustomTestFieldDefinition[]} newFields
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting TestInterfaces.CustomTestFieldDefinition[]
     */
    public addCustomFields(
        newFields: TestInterfaces.CustomTestFieldDefinition[],
        project: string,
        onResult: (err: any, statusCode: number, ExtensionFields: TestInterfaces.CustomTestFieldDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "8ce1923b-f4c7-4e22-b93b-f6284e525ec2", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.CustomTestFieldDefinition, responseTypeMetadata: TestInterfaces.TypeInfo.CustomTestFieldDefinition, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, newFields, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {TestInterfaces.CustomTestFieldScope} scopeFilter
     * @param onResult callback function with the resulting TestInterfaces.CustomTestFieldDefinition[]
     */
    public queryCustomFields(
        project: string,
        scopeFilter: TestInterfaces.CustomTestFieldScope,
        onResult: (err: any, statusCode: number, ExtensionFields: TestInterfaces.CustomTestFieldDefinition[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            scopeFilter: scopeFilter,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "8ce1923b-f4c7-4e22-b93b-f6284e525ec2", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.CustomTestFieldDefinition, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestMessageLogDetails[]
     */
    public getTestRunLogs(
        project: string,
        runId: number,
        onResult: (err: any, statusCode: number, MessageLogs: TestInterfaces.TestMessageLogDetails[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "a1e55200-637e-42e9-a7c0-7e5bfdedb1b3", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestMessageLogDetails, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.PlanUpdateModel} testPlan
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting TestInterfaces.TestPlan
     */
    public createTestPlan(
        testPlan: TestInterfaces.PlanUpdateModel,
        project: string,
        onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "51712106-7278-4208-8563-1c96f40cf5e4", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.PlanUpdateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, testPlan, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param onResult callback function with the resulting TestInterfaces.TestPlan
     */
    public getPlanById(
        project: string,
        planId: number,
        onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "51712106-7278-4208-8563-1c96f40cf5e4", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {string} owner
     * @param {number} skip
     * @param {number} top
     * @param {boolean} includePlanDetails
     * @param {boolean} filterActivePlans
     * @param onResult callback function with the resulting TestInterfaces.TestPlan[]
     */
    public getPlans(
        project: string,
        owner: string,
        skip: number,
        top: number,
        includePlanDetails: boolean,
        filterActivePlans: boolean,
        onResult: (err: any, statusCode: number, Plans: TestInterfaces.TestPlan[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            owner: owner,
            '$skip': skip,
            '$top': top,
            includePlanDetails: includePlanDetails,
            filterActivePlans: filterActivePlans,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "51712106-7278-4208-8563-1c96f40cf5e4", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.PlanUpdateModel} planUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param onResult callback function with the resulting TestInterfaces.TestPlan
     */
    public updateTestPlan(
        planUpdateModel: TestInterfaces.PlanUpdateModel,
        project: string,
        planId: number,
        onResult: (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "51712106-7278-4208-8563-1c96f40cf5e4", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.PlanUpdateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, planUpdateModel, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} pointIds
     * @param {string} witFields
     * @param onResult callback function with the resulting TestInterfaces.TestPoint
     */
    public getPoint(
        project: string,
        planId: number,
        suiteId: number,
        pointIds: number,
        witFields: string,
        onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId,
            pointIds: pointIds
        };

        var queryValues: any = {
            witFields: witFields,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "3bcfd5c8-be62-488e-b1da-b8289ce9299c", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPoint, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} witFields
     * @param {string} configurationId
     * @param {string} testCaseId
     * @param {string} testPointIds
     * @param {boolean} includePointDetails
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting TestInterfaces.TestPoint[]
     */
    public getPoints(
        project: string,
        planId: number,
        suiteId: number,
        witFields: string,
        configurationId: string,
        testCaseId: string,
        testPointIds: string,
        includePointDetails: boolean,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, Points: TestInterfaces.TestPoint[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        var queryValues: any = {
            witFields: witFields,
            configurationId: configurationId,
            testCaseId: testCaseId,
            testPointIds: testPointIds,
            includePointDetails: includePointDetails,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "3bcfd5c8-be62-488e-b1da-b8289ce9299c", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPoint, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.PointUpdateModel} pointUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} pointIds
     * @param onResult callback function with the resulting TestInterfaces.TestPoint[]
     */
    public updateTestPoints(
        pointUpdateModel: TestInterfaces.PointUpdateModel,
        project: string,
        planId: number,
        suiteId: number,
        pointIds: string,
        onResult: (err: any, statusCode: number, Point: TestInterfaces.TestPoint[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId,
            pointIds: pointIds
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "3bcfd5c8-be62-488e-b1da-b8289ce9299c", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.PointUpdateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestPoint, responseIsCollection: true };
            
            this.restClient.update(url, apiVersion, pointUpdateModel, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} testRunId
     * @param {number} testResultId
     * @param {number} recentDays
     * @param onResult callback function with the resulting TestInterfaces.WorkItemReference[]
     */
    public queryTestResultRecentBugs(
        project: string,
        testRunId: number,
        testResultId: number,
        recentDays: number,
        onResult: (err: any, statusCode: number, RecentBugs: TestInterfaces.WorkItemReference[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            testRunId: testRunId,
            testResultId: testResultId
        };

        var queryValues: any = {
            recentDays: recentDays,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "926ff5dc-137f-45f0-bd51-9412fa9810ce", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.WorkItemReference, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} sourceWorkflow
     * @param {boolean} includeFailureDetails
     * @param {TestInterfaces.BuildReference} buildToCompare
     * @param onResult callback function with the resulting TestInterfaces.TestReport
     */
    public queryReportForBuild(
        project: string,
        buildId: number,
        sourceWorkflow: string,
        includeFailureDetails: boolean,
        buildToCompare: TestInterfaces.BuildReference,
        onResult: (err: any, statusCode: number, ReportForBuild: TestInterfaces.TestReport) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            sourceWorkflow: sourceWorkflow,
            includeFailureDetails: includeFailureDetails,
            buildToCompare: buildToCompare,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "000ef77b-fea2-498d-a10d-ad1a037f559f", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestReport, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} sourceWorkflow
     * @param {string} groupBy
     * @param {string} filter
     * @param onResult callback function with the resulting TestInterfaces.AggregatedResultsWithDetails
     */
    public getTestResultDetailsForBuild(
        project: string,
        buildId: number,
        sourceWorkflow: string,
        groupBy: string,
        filter: string,
        onResult: (err: any, statusCode: number, ResultDetailsForBuild: TestInterfaces.AggregatedResultsWithDetails) => void
        ): void {

        var routeValues: any = {
            project: project,
            buildId: buildId
        };

        var queryValues: any = {
            sourceWorkflow: sourceWorkflow,
            groupBy: groupBy,
            filter: filter,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "efb387b0-10d5-42e7-be40-95e06ee9430f", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.AggregatedResultsWithDetails, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.ResultRetentionSettings} retentionSettings
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting TestInterfaces.ResultRetentionSettings
     */
    public createResultRetentionSettings(
        retentionSettings: TestInterfaces.ResultRetentionSettings,
        project: string,
        onResult: (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "a3206d9e-fa8d-42d3-88cb-f75c51e69cde", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, retentionSettings, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function
     */
    public deleteResultRetentionSettings(
        project: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "a3206d9e-fa8d-42d3-88cb-f75c51e69cde", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting TestInterfaces.ResultRetentionSettings
     */
    public getResultRetentionSettings(
        project: string,
        onResult: (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "a3206d9e-fa8d-42d3-88cb-f75c51e69cde", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.ResultRetentionSettings} retentionSettings
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting TestInterfaces.ResultRetentionSettings
     */
    public updateResultRetentionSettings(
        retentionSettings: TestInterfaces.ResultRetentionSettings,
        project: string,
        onResult: (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "a3206d9e-fa8d-42d3-88cb-f75c51e69cde", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, retentionSettings, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {boolean} includeActionResults
     * @param onResult callback function with the resulting TestInterfaces.TestIterationDetailsModel
     */
    public getTestIteration(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        includeActionResults: boolean,
        onResult: (err: any, statusCode: number, Result: TestInterfaces.TestIterationDetailsModel) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            iterationId: iterationId
        };

        var queryValues: any = {
            includeActionResults: includeActionResults,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "73eb9074-3446-4c44-8296-2f811950ff8d", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestIterationDetailsModel, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeActionResults
     * @param onResult callback function with the resulting TestInterfaces.TestIterationDetailsModel[]
     */
    public getTestIterations(
        project: string,
        runId: number,
        testCaseResultId: number,
        includeActionResults: boolean,
        onResult: (err: any, statusCode: number, Results: TestInterfaces.TestIterationDetailsModel[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        var queryValues: any = {
            includeActionResults: includeActionResults,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "73eb9074-3446-4c44-8296-2f811950ff8d", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestIterationDetailsModel, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.TestResultCreateModel[]} resultCreateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    public addTestResultsToTestRun(
        resultCreateModels: TestInterfaces.TestResultCreateModel[],
        project: string,
        runId: number,
        onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestResultCreateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, resultCreateModels, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.TestCaseResultUpdateModel} resultUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number[]} resultIds
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    public bulkUpdateTestResults(
        resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel,
        project: string,
        runId: number,
        resultIds: number[],
        onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        var queryValues: any = {
            resultIds: resultIds && resultIds.join(","),
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestCaseResultUpdateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
            
            this.restClient.update(url, apiVersion, resultUpdateModel, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {boolean} includeIterationDetails
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult
     */
    public getTestCaseResultById(
        project: string,
        runId: number,
        testCaseResultId: number,
        includeIterationDetails: boolean,
        onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        var queryValues: any = {
            includeIterationDetails: includeIterationDetails,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {boolean} includeIterationDetails
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    public getTestCaseResults(
        project: string,
        runId: number,
        includeIterationDetails: boolean,
        onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        var queryValues: any = {
            includeIterationDetails: includeIterationDetails,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {TestInterfaces.ResultDetails} detailsToInclude
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    public getTestResultById(
        project: string,
        runId: number,
        testCaseResultId: number,
        detailsToInclude: TestInterfaces.ResultDetails,
        onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId
        };

        var queryValues: any = {
            detailsToInclude: detailsToInclude,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {TestInterfaces.ResultDetails} detailsToInclude
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    public getTestResults(
        project: string,
        runId: number,
        detailsToInclude: TestInterfaces.ResultDetails,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        var queryValues: any = {
            detailsToInclude: detailsToInclude,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.TestCaseResultUpdateModel[]} resultUpdateModels
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    public updateTestResults(
        resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[],
        project: string,
        runId: number,
        onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "4637d869-3a76-4468-8057-0bb02aa385cf", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestCaseResultUpdateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
            
            this.restClient.update(url, apiVersion, resultUpdateModels, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {TestInterfaces.TestCaseResultIdentifier[]} ids
     * @param {string[]} fields
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    public getTestResultsByIds(
        project: string,
        ids: TestInterfaces.TestCaseResultIdentifier[],
        fields: string[],
        onResult: (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            ids: ids && ids.join(";"),
            fields: fields && fields.join(","),
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "6711da49-8e6f-4d35-9f73-cef7a3c81a5b", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} actionPath
     * @param onResult callback function with the resulting TestInterfaces.TestActionResultModel[]
     */
    public getActionResults(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        actionPath: string,
        onResult: (err: any, statusCode: number, Results: TestInterfaces.TestActionResultModel[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            iterationId: iterationId,
            actionPath: actionPath
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "eaf40c31-ff84-4062-aafd-d5664be11a37", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestActionResultModel, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param {number} testCaseResultId
     * @param {number} iterationId
     * @param {string} paramName
     * @param onResult callback function with the resulting TestInterfaces.TestResultParameterModel[]
     */
    public getResultParameters(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        paramName: string,
        onResult: (err: any, statusCode: number, Results: TestInterfaces.TestResultParameterModel[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId,
            testCaseResultId: testCaseResultId,
            iterationId: iterationId
        };

        var queryValues: any = {
            paramName: paramName,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "7c69810d-3354-4af3-844a-180bd25db08a", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultParameterModel, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeResultDetails
     * @param {boolean} includeIterationDetails
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    public getTestResultsByQuery(
        query: TestInterfaces.QueryModel,
        project: string,
        includeResultDetails: boolean,
        includeIterationDetails: boolean,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            includeResultDetails: includeResultDetails,
            includeIterationDetails: includeIterationDetails,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "d03f4bfd-0863-441a-969f-6bbbd42443ca", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.QueryModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, query, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} testRunId
     * @param {number} testResultId
     * @param {number} historyDays
     * @param {number} top
     * @param onResult callback function with the resulting TestInterfaces.TestCaseResult[]
     */
    public queryTestResultTrendReport(
        project: string,
        testRunId: number,
        testResultId: number,
        historyDays: number,
        top: number,
        onResult: (err: any, statusCode: number, ResultTrend: TestInterfaces.TestCaseResult[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            testRunId: testRunId,
            testResultId: testResultId
        };

        var queryValues: any = {
            historyDays: historyDays,
            top: top,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "8d5c5dd8-2d81-408c-862b-d89db9e8fc3b", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestRunStatistic
     */
    public getTestRunStatistics(
        project: string,
        runId: number,
        onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRunStatistic) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "0a42c424-d764-4a16-a2d5-5c85f87d0ae8", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRunStatistic, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.QueryModel} query
     * @param {string} project - Project ID or project name
     * @param {boolean} includeRunDetails
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting TestInterfaces.TestRun[]
     */
    public getTestRunsByQuery(
        query: TestInterfaces.QueryModel,
        project: string,
        includeRunDetails: boolean,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            includeRunDetails: includeRunDetails,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "2da6cbff-1bbb-43c9-b465-ea22b6f9707c", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.QueryModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, query, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.RunCreateModel} testRun
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting TestInterfaces.TestRun
     */
    public createTestRun(
        testRun: TestInterfaces.RunCreateModel,
        project: string,
        onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.RunCreateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, testRun, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function
     */
    public deleteTestRun(
        project: string,
        runId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestRun
     */
    public getTestRunById(
        project: string,
        runId: number,
        onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
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
     * @param onResult callback function with the resulting TestInterfaces.TestRun[]
     */
    public getTestRuns(
        project: string,
        buildUri: string,
        owner: string,
        tmiRunId: string,
        planId: number,
        includeRunDetails: boolean,
        automated: boolean,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, Runs: TestInterfaces.TestRun[]) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            buildUri: buildUri,
            owner: owner,
            tmiRunId: tmiRunId,
            planId: planId,
            includeRunDetails: includeRunDetails,
            automated: automated,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.RunUpdateModel} runUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} runId
     * @param onResult callback function with the resulting TestInterfaces.TestRun
     */
    public updateTestRun(
        runUpdateModel: TestInterfaces.RunUpdateModel,
        project: string,
        runId: number,
        onResult: (err: any, statusCode: number, Run: TestInterfaces.TestRun) => void
        ): void {

        var routeValues: any = {
            project: project,
            runId: runId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "cadb3810-d47d-4a3c-a234-fe5f3be50138", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.RunUpdateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, runUpdateModel, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @param onResult callback function with the resulting TestInterfaces.SuiteTestCase[]
     */
    public addTestCasesToSuite(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string,
        onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId,
            testCaseIds: testCaseIds
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "a4a1ec1c-b03f-41ca-8857-704594ecf58e", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.SuiteTestCase, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, null, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {number} testCaseIds
     * @param onResult callback function with the resulting TestInterfaces.SuiteTestCase
     */
    public getTestCaseById(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: number,
        onResult: (err: any, statusCode: number, Suite: TestInterfaces.SuiteTestCase) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId,
            testCaseIds: testCaseIds
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "a4a1ec1c-b03f-41ca-8857-704594ecf58e", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.SuiteTestCase, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param onResult callback function with the resulting TestInterfaces.SuiteTestCase[]
     */
    public getTestCases(
        project: string,
        planId: number,
        suiteId: number,
        onResult: (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "a4a1ec1c-b03f-41ca-8857-704594ecf58e", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.SuiteTestCase, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {string} testCaseIds
     * @param onResult callback function
     */
    public removeTestCasesFromSuiteUrl(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId,
            testCaseIds: testCaseIds
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "a4a1ec1c-b03f-41ca-8857-704594ecf58e", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {TestInterfaces.SuiteCreateModel} testSuite
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param onResult callback function with the resulting TestInterfaces.TestSuite[]
     */
    public createTestSuite(
        testSuite: TestInterfaces.SuiteCreateModel,
        project: string,
        planId: number,
        suiteId: number,
        onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.SuiteCreateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: true };
            
            this.restClient.create(url, apiVersion, testSuite, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param onResult callback function
     */
    public deleteTestSuite(
        project: string,
        planId: number,
        suiteId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param {boolean} includeChildSuites
     * @param onResult callback function with the resulting TestInterfaces.TestSuite
     */
    public getTestSuiteById(
        project: string,
        planId: number,
        suiteId: number,
        includeChildSuites: boolean,
        onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        var queryValues: any = {
            includeChildSuites: includeChildSuites,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {boolean} includeSuites
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting TestInterfaces.TestSuite[]
     */
    public getTestSuitesForPlan(
        project: string,
        planId: number,
        includeSuites: boolean,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId
        };

        var queryValues: any = {
            includeSuites: includeSuites,
            '$skip': skip,
            '$top': top,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.SuiteUpdateModel} suiteUpdateModel
     * @param {string} project - Project ID or project name
     * @param {number} planId
     * @param {number} suiteId
     * @param onResult callback function with the resulting TestInterfaces.TestSuite
     */
    public updateTestSuite(
        suiteUpdateModel: TestInterfaces.SuiteUpdateModel,
        project: string,
        planId: number,
        suiteId: number,
        onResult: (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => void
        ): void {

        var routeValues: any = {
            project: project,
            planId: planId,
            suiteId: suiteId
        };

        this.vsoClient.getVersioningData("2.2-preview.2", "Test", "7b7619a0-cb54-4ab3-bf22-194056f45dd1", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.SuiteUpdateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, suiteUpdateModel, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} testCaseId
     * @param onResult callback function with the resulting TestInterfaces.TestSuite[]
     */
    public getSuitesByTestCaseId(
        testCaseId: number,
        onResult: (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            testCaseId: testCaseId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "09a6167b-e969-4775-9247-b94cf3819caf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: true };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.BuildReference} build
     * @param {string} project - Project ID or project name
     * @param {string} sourceWorkflow
     * @param {TestInterfaces.BuildReference} buildToCompare
     * @param onResult callback function with the resulting TestInterfaces.TestFailuresAnalysis
     */
    public queryFailureDetailsForBuild(
        build: TestInterfaces.BuildReference,
        project: string,
        sourceWorkflow: string,
        buildToCompare: TestInterfaces.BuildReference,
        onResult: (err: any, statusCode: number, TestFailure: TestInterfaces.TestFailuresAnalysis) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            sourceWorkflow: sourceWorkflow,
            buildToCompare: buildToCompare,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "aa4e770d-13e2-467b-ab47-2ddc2adcd643", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.BuildReference, responseTypeMetadata: TestInterfaces.TypeInfo.TestFailuresAnalysis, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} testRunId
     * @param onResult callback function with the resulting TestInterfaces.TestFailuresAnalysis
     */
    public queryFailureDetailsForTestRun(
        project: string,
        testRunId: number,
        onResult: (err: any, statusCode: number, TestFailure: TestInterfaces.TestFailuresAnalysis) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        var queryValues: any = {
            testRunId: testRunId,
        };
        
        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "aa4e770d-13e2-467b-ab47-2ddc2adcd643", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestFailuresAnalysis, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TestInterfaces.TestSettings} testSettings
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting number
     */
    public createTestSettings(
        testSettings: TestInterfaces.TestSettings,
        project: string,
        onResult: (err: any, statusCode: number, TestSetting: number) => void
        ): void {

        var routeValues: any = {
            project: project
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "8133ce14-962f-42af-a5f9-6aa9defcb9c8", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestSettings, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, testSettings, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @param onResult callback function
     */
    public deleteTestSettings(
        project: string,
        testSettingsId: number,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            project: project,
            testSettingsId: testSettingsId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "8133ce14-962f-42af-a5f9-6aa9defcb9c8", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} project - Project ID or project name
     * @param {number} testSettingsId
     * @param onResult callback function with the resulting TestInterfaces.TestSettings
     */
    public getTestSettingsById(
        project: string,
        testSettingsId: number,
        onResult: (err: any, statusCode: number, TestSetting: TestInterfaces.TestSettings) => void
        ): void {

        var routeValues: any = {
            project: project,
            testSettingsId: testSettingsId
        };

        this.vsoClient.getVersioningData("2.2-preview.1", "Test", "8133ce14-962f-42af-a5f9-6aa9defcb9c8", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSettings, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, null, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QTestApi extends basem.QClientApiBase implements IQTestApi {
    api: TestApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, TestApi);
    }

    /**
    * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    */
    public createTestResultAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number
        ): Q.Promise<TestInterfaces.TestAttachmentReference> {
    
        var deferred = Q.defer<TestInterfaces.TestAttachmentReference>();

        this.api.createTestResultAttachment(attachmentRequestModel, project, runId, testCaseResultId, (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        });

        return <Q.Promise<TestInterfaces.TestAttachmentReference>>deferred.promise;
    }

    /**
    * Returns a test result attachment
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} attachmentId
    */
    public getTestResultAttachmentContent(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getTestResultAttachmentContent(project, runId, testCaseResultId, attachmentId, (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * Returns a test result attachment
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} attachmentId
    */
    public getTestResultAttachmentZip(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getTestResultAttachmentZip(project, runId, testCaseResultId, attachmentId, (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public createTestRunAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number
        ): Q.Promise<TestInterfaces.TestAttachmentReference> {
    
        var deferred = Q.defer<TestInterfaces.TestAttachmentReference>();

        this.api.createTestRunAttachment(attachmentRequestModel, project, runId, (err: any, statusCode: number, Attachment: TestInterfaces.TestAttachmentReference) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        });

        return <Q.Promise<TestInterfaces.TestAttachmentReference>>deferred.promise;
    }

    /**
    * Returns a test run attachment
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} attachmentId
    */
    public getTestRunAttachmentContent(
        project: string,
        runId: number,
        attachmentId: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getTestRunAttachmentContent(project, runId, attachmentId, (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * Returns a test run attachment
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} attachmentId
    */
    public getTestRunAttachmentZip(
        project: string,
        runId: number,
        attachmentId: number
        ): Q.Promise<NodeJS.ReadableStream> {
    
        var deferred = Q.defer<NodeJS.ReadableStream>();

        this.api.getTestRunAttachmentZip(project, runId, attachmentId, (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Attachment);
            }
        });

        return <Q.Promise<NodeJS.ReadableStream>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} flags
    */
    public getBuildCodeCoverage(
        project: string,
        buildId: number,
        flags: number
        ): Q.Promise<TestInterfaces.BuildCoverage[]> {
    
        var deferred = Q.defer<TestInterfaces.BuildCoverage[]>();

        this.api.getBuildCodeCoverage(project, buildId, flags, (err: any, statusCode: number, CodeCoverage: TestInterfaces.BuildCoverage[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CodeCoverage);
            }
        });

        return <Q.Promise<TestInterfaces.BuildCoverage[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} deltaBuildId
    */
    public getCodeCoverageSummary(
        project: string,
        buildId: number,
        deltaBuildId?: number
        ): Q.Promise<TestInterfaces.CodeCoverageSummary> {
    
        var deferred = Q.defer<TestInterfaces.CodeCoverageSummary>();

        this.api.getCodeCoverageSummary(project, buildId, deltaBuildId, (err: any, statusCode: number, CodeCoverage: TestInterfaces.CodeCoverageSummary) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CodeCoverage);
            }
        });

        return <Q.Promise<TestInterfaces.CodeCoverageSummary>>deferred.promise;
    }

    /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
    * 
    * @param {TestInterfaces.CodeCoverageData} coverageData
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    public updateCodeCoverageSummary(
        coverageData: TestInterfaces.CodeCoverageData,
        project: string,
        buildId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.updateCodeCoverageSummary(coverageData, project, buildId, (err: any, statusCode: number) => {
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

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} flags
    */
    public getTestRunCodeCoverage(
        project: string,
        runId: number,
        flags: number
        ): Q.Promise<TestInterfaces.TestRunCoverage[]> {
    
        var deferred = Q.defer<TestInterfaces.TestRunCoverage[]>();

        this.api.getTestRunCodeCoverage(project, runId, flags, (err: any, statusCode: number, CodeCoverage: TestInterfaces.TestRunCoverage[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CodeCoverage);
            }
        });

        return <Q.Promise<TestInterfaces.TestRunCoverage[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.CustomTestFieldDefinition[]} newFields
    * @param {string} project - Project ID or project name
    */
    public addCustomFields(
        newFields: TestInterfaces.CustomTestFieldDefinition[],
        project: string
        ): Q.Promise<TestInterfaces.CustomTestFieldDefinition[]> {
    
        var deferred = Q.defer<TestInterfaces.CustomTestFieldDefinition[]>();

        this.api.addCustomFields(newFields, project, (err: any, statusCode: number, ExtensionFields: TestInterfaces.CustomTestFieldDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ExtensionFields);
            }
        });

        return <Q.Promise<TestInterfaces.CustomTestFieldDefinition[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {TestInterfaces.CustomTestFieldScope} scopeFilter
    */
    public queryCustomFields(
        project: string,
        scopeFilter: TestInterfaces.CustomTestFieldScope
        ): Q.Promise<TestInterfaces.CustomTestFieldDefinition[]> {
    
        var deferred = Q.defer<TestInterfaces.CustomTestFieldDefinition[]>();

        this.api.queryCustomFields(project, scopeFilter, (err: any, statusCode: number, ExtensionFields: TestInterfaces.CustomTestFieldDefinition[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ExtensionFields);
            }
        });

        return <Q.Promise<TestInterfaces.CustomTestFieldDefinition[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public getTestRunLogs(
        project: string,
        runId: number
        ): Q.Promise<TestInterfaces.TestMessageLogDetails[]> {
    
        var deferred = Q.defer<TestInterfaces.TestMessageLogDetails[]>();

        this.api.getTestRunLogs(project, runId, (err: any, statusCode: number, MessageLogs: TestInterfaces.TestMessageLogDetails[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(MessageLogs);
            }
        });

        return <Q.Promise<TestInterfaces.TestMessageLogDetails[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.PlanUpdateModel} testPlan
    * @param {string} project - Project ID or project name
    */
    public createTestPlan(
        testPlan: TestInterfaces.PlanUpdateModel,
        project: string
        ): Q.Promise<TestInterfaces.TestPlan> {
    
        var deferred = Q.defer<TestInterfaces.TestPlan>();

        this.api.createTestPlan(testPlan, project, (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Plan);
            }
        });

        return <Q.Promise<TestInterfaces.TestPlan>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    public getPlanById(
        project: string,
        planId: number
        ): Q.Promise<TestInterfaces.TestPlan> {
    
        var deferred = Q.defer<TestInterfaces.TestPlan>();

        this.api.getPlanById(project, planId, (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Plan);
            }
        });

        return <Q.Promise<TestInterfaces.TestPlan>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} owner
    * @param {number} skip
    * @param {number} top
    * @param {boolean} includePlanDetails
    * @param {boolean} filterActivePlans
    */
    public getPlans(
        project: string,
        owner?: string,
        skip?: number,
        top?: number,
        includePlanDetails?: boolean,
        filterActivePlans?: boolean
        ): Q.Promise<TestInterfaces.TestPlan[]> {
    
        var deferred = Q.defer<TestInterfaces.TestPlan[]>();

        this.api.getPlans(project, owner, skip, top, includePlanDetails, filterActivePlans, (err: any, statusCode: number, Plans: TestInterfaces.TestPlan[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Plans);
            }
        });

        return <Q.Promise<TestInterfaces.TestPlan[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.PlanUpdateModel} planUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    public updateTestPlan(
        planUpdateModel: TestInterfaces.PlanUpdateModel,
        project: string,
        planId: number
        ): Q.Promise<TestInterfaces.TestPlan> {
    
        var deferred = Q.defer<TestInterfaces.TestPlan>();

        this.api.updateTestPlan(planUpdateModel, project, planId, (err: any, statusCode: number, Plan: TestInterfaces.TestPlan) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Plan);
            }
        });

        return <Q.Promise<TestInterfaces.TestPlan>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {number} pointIds
    * @param {string} witFields
    */
    public getPoint(
        project: string,
        planId: number,
        suiteId: number,
        pointIds: number,
        witFields?: string
        ): Q.Promise<TestInterfaces.TestPoint> {
    
        var deferred = Q.defer<TestInterfaces.TestPoint>();

        this.api.getPoint(project, planId, suiteId, pointIds, witFields, (err: any, statusCode: number, Point: TestInterfaces.TestPoint) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Point);
            }
        });

        return <Q.Promise<TestInterfaces.TestPoint>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} witFields
    * @param {string} configurationId
    * @param {string} testCaseId
    * @param {string} testPointIds
    * @param {boolean} includePointDetails
    * @param {number} skip
    * @param {number} top
    */
    public getPoints(
        project: string,
        planId: number,
        suiteId: number,
        witFields?: string,
        configurationId?: string,
        testCaseId?: string,
        testPointIds?: string,
        includePointDetails?: boolean,
        skip?: number,
        top?: number
        ): Q.Promise<TestInterfaces.TestPoint[]> {
    
        var deferred = Q.defer<TestInterfaces.TestPoint[]>();

        this.api.getPoints(project, planId, suiteId, witFields, configurationId, testCaseId, testPointIds, includePointDetails, skip, top, (err: any, statusCode: number, Points: TestInterfaces.TestPoint[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Points);
            }
        });

        return <Q.Promise<TestInterfaces.TestPoint[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.PointUpdateModel} pointUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} pointIds
    */
    public updateTestPoints(
        pointUpdateModel: TestInterfaces.PointUpdateModel,
        project: string,
        planId: number,
        suiteId: number,
        pointIds: string
        ): Q.Promise<TestInterfaces.TestPoint[]> {
    
        var deferred = Q.defer<TestInterfaces.TestPoint[]>();

        this.api.updateTestPoints(pointUpdateModel, project, planId, suiteId, pointIds, (err: any, statusCode: number, Point: TestInterfaces.TestPoint[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Point);
            }
        });

        return <Q.Promise<TestInterfaces.TestPoint[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testRunId
    * @param {number} testResultId
    * @param {number} recentDays
    */
    public queryTestResultRecentBugs(
        project: string,
        testRunId: number,
        testResultId: number,
        recentDays?: number
        ): Q.Promise<TestInterfaces.WorkItemReference[]> {
    
        var deferred = Q.defer<TestInterfaces.WorkItemReference[]>();

        this.api.queryTestResultRecentBugs(project, testRunId, testResultId, recentDays, (err: any, statusCode: number, RecentBugs: TestInterfaces.WorkItemReference[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(RecentBugs);
            }
        });

        return <Q.Promise<TestInterfaces.WorkItemReference[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} sourceWorkflow
    * @param {boolean} includeFailureDetails
    * @param {TestInterfaces.BuildReference} buildToCompare
    */
    public queryReportForBuild(
        project: string,
        buildId: number,
        sourceWorkflow: string,
        includeFailureDetails: boolean,
        buildToCompare: TestInterfaces.BuildReference
        ): Q.Promise<TestInterfaces.TestReport> {
    
        var deferred = Q.defer<TestInterfaces.TestReport>();

        this.api.queryReportForBuild(project, buildId, sourceWorkflow, includeFailureDetails, buildToCompare, (err: any, statusCode: number, ReportForBuild: TestInterfaces.TestReport) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ReportForBuild);
            }
        });

        return <Q.Promise<TestInterfaces.TestReport>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} sourceWorkflow
    * @param {string} groupBy
    * @param {string} filter
    */
    public getTestResultDetailsForBuild(
        project: string,
        buildId: number,
        sourceWorkflow: string,
        groupBy?: string,
        filter?: string
        ): Q.Promise<TestInterfaces.AggregatedResultsWithDetails> {
    
        var deferred = Q.defer<TestInterfaces.AggregatedResultsWithDetails>();

        this.api.getTestResultDetailsForBuild(project, buildId, sourceWorkflow, groupBy, filter, (err: any, statusCode: number, ResultDetailsForBuild: TestInterfaces.AggregatedResultsWithDetails) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultDetailsForBuild);
            }
        });

        return <Q.Promise<TestInterfaces.AggregatedResultsWithDetails>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.ResultRetentionSettings} retentionSettings
    * @param {string} project - Project ID or project name
    */
    public createResultRetentionSettings(
        retentionSettings: TestInterfaces.ResultRetentionSettings,
        project: string
        ): Q.Promise<TestInterfaces.ResultRetentionSettings> {
    
        var deferred = Q.defer<TestInterfaces.ResultRetentionSettings>();

        this.api.createResultRetentionSettings(retentionSettings, project, (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultRetentionSetting);
            }
        });

        return <Q.Promise<TestInterfaces.ResultRetentionSettings>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public deleteResultRetentionSettings(
        project: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteResultRetentionSettings(project, (err: any, statusCode: number) => {
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

    /**
    * @param {string} project - Project ID or project name
    */
    public getResultRetentionSettings(
        project: string
        ): Q.Promise<TestInterfaces.ResultRetentionSettings> {
    
        var deferred = Q.defer<TestInterfaces.ResultRetentionSettings>();

        this.api.getResultRetentionSettings(project, (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultRetentionSetting);
            }
        });

        return <Q.Promise<TestInterfaces.ResultRetentionSettings>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.ResultRetentionSettings} retentionSettings
    * @param {string} project - Project ID or project name
    */
    public updateResultRetentionSettings(
        retentionSettings: TestInterfaces.ResultRetentionSettings,
        project: string
        ): Q.Promise<TestInterfaces.ResultRetentionSettings> {
    
        var deferred = Q.defer<TestInterfaces.ResultRetentionSettings>();

        this.api.updateResultRetentionSettings(retentionSettings, project, (err: any, statusCode: number, ResultRetentionSetting: TestInterfaces.ResultRetentionSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultRetentionSetting);
            }
        });

        return <Q.Promise<TestInterfaces.ResultRetentionSettings>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {boolean} includeActionResults
    */
    public getTestIteration(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        includeActionResults?: boolean
        ): Q.Promise<TestInterfaces.TestIterationDetailsModel> {
    
        var deferred = Q.defer<TestInterfaces.TestIterationDetailsModel>();

        this.api.getTestIteration(project, runId, testCaseResultId, iterationId, includeActionResults, (err: any, statusCode: number, Result: TestInterfaces.TestIterationDetailsModel) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Result);
            }
        });

        return <Q.Promise<TestInterfaces.TestIterationDetailsModel>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {boolean} includeActionResults
    */
    public getTestIterations(
        project: string,
        runId: number,
        testCaseResultId: number,
        includeActionResults?: boolean
        ): Q.Promise<TestInterfaces.TestIterationDetailsModel[]> {
    
        var deferred = Q.defer<TestInterfaces.TestIterationDetailsModel[]>();

        this.api.getTestIterations(project, runId, testCaseResultId, includeActionResults, (err: any, statusCode: number, Results: TestInterfaces.TestIterationDetailsModel[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        });

        return <Q.Promise<TestInterfaces.TestIterationDetailsModel[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestResultCreateModel[]} resultCreateModels
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public addTestResultsToTestRun(
        resultCreateModels: TestInterfaces.TestResultCreateModel[],
        project: string,
        runId: number
        ): Q.Promise<TestInterfaces.TestCaseResult[]> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        this.api.addTestResultsToTestRun(resultCreateModels, project, runId, (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestCaseResultUpdateModel} resultUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number[]} resultIds
    */
    public bulkUpdateTestResults(
        resultUpdateModel: TestInterfaces.TestCaseResultUpdateModel,
        project: string,
        runId: number,
        resultIds: number[]
        ): Q.Promise<TestInterfaces.TestCaseResult[]> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        this.api.bulkUpdateTestResults(resultUpdateModel, project, runId, resultIds, (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Result);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {boolean} includeIterationDetails
    */
    public getTestCaseResultById(
        project: string,
        runId: number,
        testCaseResultId: number,
        includeIterationDetails: boolean
        ): Q.Promise<TestInterfaces.TestCaseResult> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult>();

        this.api.getTestCaseResultById(project, runId, testCaseResultId, includeIterationDetails, (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Result);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {boolean} includeIterationDetails
    */
    public getTestCaseResults(
        project: string,
        runId: number,
        includeIterationDetails: boolean
        ): Q.Promise<TestInterfaces.TestCaseResult[]> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        this.api.getTestCaseResults(project, runId, includeIterationDetails, (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {TestInterfaces.ResultDetails} detailsToInclude
    */
    public getTestResultById(
        project: string,
        runId: number,
        testCaseResultId: number,
        detailsToInclude?: TestInterfaces.ResultDetails
        ): Q.Promise<TestInterfaces.TestCaseResult[]> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        this.api.getTestResultById(project, runId, testCaseResultId, detailsToInclude, (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {TestInterfaces.ResultDetails} detailsToInclude
    * @param {number} skip
    * @param {number} top
    */
    public getTestResults(
        project: string,
        runId: number,
        detailsToInclude?: TestInterfaces.ResultDetails,
        skip?: number,
        top?: number
        ): Q.Promise<TestInterfaces.TestCaseResult[]> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        this.api.getTestResults(project, runId, detailsToInclude, skip, top, (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestCaseResultUpdateModel[]} resultUpdateModels
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public updateTestResults(
        resultUpdateModels: TestInterfaces.TestCaseResultUpdateModel[],
        project: string,
        runId: number
        ): Q.Promise<TestInterfaces.TestCaseResult[]> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        this.api.updateTestResults(resultUpdateModels, project, runId, (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {TestInterfaces.TestCaseResultIdentifier[]} ids
    * @param {string[]} fields
    */
    public getTestResultsByIds(
        project: string,
        ids: TestInterfaces.TestCaseResultIdentifier[],
        fields?: string[]
        ): Q.Promise<TestInterfaces.TestCaseResult[]> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        this.api.getTestResultsByIds(project, ids, fields, (err: any, statusCode: number, Results: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {string} actionPath
    */
    public getActionResults(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        actionPath?: string
        ): Q.Promise<TestInterfaces.TestActionResultModel[]> {
    
        var deferred = Q.defer<TestInterfaces.TestActionResultModel[]>();

        this.api.getActionResults(project, runId, testCaseResultId, iterationId, actionPath, (err: any, statusCode: number, Results: TestInterfaces.TestActionResultModel[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        });

        return <Q.Promise<TestInterfaces.TestActionResultModel[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {string} paramName
    */
    public getResultParameters(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        paramName?: string
        ): Q.Promise<TestInterfaces.TestResultParameterModel[]> {
    
        var deferred = Q.defer<TestInterfaces.TestResultParameterModel[]>();

        this.api.getResultParameters(project, runId, testCaseResultId, iterationId, paramName, (err: any, statusCode: number, Results: TestInterfaces.TestResultParameterModel[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Results);
            }
        });

        return <Q.Promise<TestInterfaces.TestResultParameterModel[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.QueryModel} query
    * @param {string} project - Project ID or project name
    * @param {boolean} includeResultDetails
    * @param {boolean} includeIterationDetails
    * @param {number} skip
    * @param {number} top
    */
    public getTestResultsByQuery(
        query: TestInterfaces.QueryModel,
        project: string,
        includeResultDetails?: boolean,
        includeIterationDetails?: boolean,
        skip?: number,
        top?: number
        ): Q.Promise<TestInterfaces.TestCaseResult[]> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        this.api.getTestResultsByQuery(query, project, includeResultDetails, includeIterationDetails, skip, top, (err: any, statusCode: number, Result: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Result);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testRunId
    * @param {number} testResultId
    * @param {number} historyDays
    * @param {number} top
    */
    public queryTestResultTrendReport(
        project: string,
        testRunId: number,
        testResultId: number,
        historyDays?: number,
        top?: number
        ): Q.Promise<TestInterfaces.TestCaseResult[]> {
    
        var deferred = Q.defer<TestInterfaces.TestCaseResult[]>();

        this.api.queryTestResultTrendReport(project, testRunId, testResultId, historyDays, top, (err: any, statusCode: number, ResultTrend: TestInterfaces.TestCaseResult[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ResultTrend);
            }
        });

        return <Q.Promise<TestInterfaces.TestCaseResult[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public getTestRunStatistics(
        project: string,
        runId: number
        ): Q.Promise<TestInterfaces.TestRunStatistic> {
    
        var deferred = Q.defer<TestInterfaces.TestRunStatistic>();

        this.api.getTestRunStatistics(project, runId, (err: any, statusCode: number, Run: TestInterfaces.TestRunStatistic) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Run);
            }
        });

        return <Q.Promise<TestInterfaces.TestRunStatistic>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.QueryModel} query
    * @param {string} project - Project ID or project name
    * @param {boolean} includeRunDetails
    * @param {number} skip
    * @param {number} top
    */
    public getTestRunsByQuery(
        query: TestInterfaces.QueryModel,
        project: string,
        includeRunDetails?: boolean,
        skip?: number,
        top?: number
        ): Q.Promise<TestInterfaces.TestRun[]> {
    
        var deferred = Q.defer<TestInterfaces.TestRun[]>();

        this.api.getTestRunsByQuery(query, project, includeRunDetails, skip, top, (err: any, statusCode: number, Run: TestInterfaces.TestRun[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Run);
            }
        });

        return <Q.Promise<TestInterfaces.TestRun[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.RunCreateModel} testRun
    * @param {string} project - Project ID or project name
    */
    public createTestRun(
        testRun: TestInterfaces.RunCreateModel,
        project: string
        ): Q.Promise<TestInterfaces.TestRun> {
    
        var deferred = Q.defer<TestInterfaces.TestRun>();

        this.api.createTestRun(testRun, project, (err: any, statusCode: number, Run: TestInterfaces.TestRun) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Run);
            }
        });

        return <Q.Promise<TestInterfaces.TestRun>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public deleteTestRun(
        project: string,
        runId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteTestRun(project, runId, (err: any, statusCode: number) => {
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

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public getTestRunById(
        project: string,
        runId: number
        ): Q.Promise<TestInterfaces.TestRun> {
    
        var deferred = Q.defer<TestInterfaces.TestRun>();

        this.api.getTestRunById(project, runId, (err: any, statusCode: number, Run: TestInterfaces.TestRun) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Run);
            }
        });

        return <Q.Promise<TestInterfaces.TestRun>>deferred.promise;
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
    public getTestRuns(
        project: string,
        buildUri?: string,
        owner?: string,
        tmiRunId?: string,
        planId?: number,
        includeRunDetails?: boolean,
        automated?: boolean,
        skip?: number,
        top?: number
        ): Q.Promise<TestInterfaces.TestRun[]> {
    
        var deferred = Q.defer<TestInterfaces.TestRun[]>();

        this.api.getTestRuns(project, buildUri, owner, tmiRunId, planId, includeRunDetails, automated, skip, top, (err: any, statusCode: number, Runs: TestInterfaces.TestRun[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Runs);
            }
        });

        return <Q.Promise<TestInterfaces.TestRun[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.RunUpdateModel} runUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public updateTestRun(
        runUpdateModel: TestInterfaces.RunUpdateModel,
        project: string,
        runId: number
        ): Q.Promise<TestInterfaces.TestRun> {
    
        var deferred = Q.defer<TestInterfaces.TestRun>();

        this.api.updateTestRun(runUpdateModel, project, runId, (err: any, statusCode: number, Run: TestInterfaces.TestRun) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Run);
            }
        });

        return <Q.Promise<TestInterfaces.TestRun>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} testCaseIds
    */
    public addTestCasesToSuite(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string
        ): Q.Promise<TestInterfaces.SuiteTestCase[]> {
    
        var deferred = Q.defer<TestInterfaces.SuiteTestCase[]>();

        this.api.addTestCasesToSuite(project, planId, suiteId, testCaseIds, (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suites);
            }
        });

        return <Q.Promise<TestInterfaces.SuiteTestCase[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {number} testCaseIds
    */
    public getTestCaseById(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: number
        ): Q.Promise<TestInterfaces.SuiteTestCase> {
    
        var deferred = Q.defer<TestInterfaces.SuiteTestCase>();

        this.api.getTestCaseById(project, planId, suiteId, testCaseIds, (err: any, statusCode: number, Suite: TestInterfaces.SuiteTestCase) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suite);
            }
        });

        return <Q.Promise<TestInterfaces.SuiteTestCase>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    public getTestCases(
        project: string,
        planId: number,
        suiteId: number
        ): Q.Promise<TestInterfaces.SuiteTestCase[]> {
    
        var deferred = Q.defer<TestInterfaces.SuiteTestCase[]>();

        this.api.getTestCases(project, planId, suiteId, (err: any, statusCode: number, Suites: TestInterfaces.SuiteTestCase[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suites);
            }
        });

        return <Q.Promise<TestInterfaces.SuiteTestCase[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} testCaseIds
    */
    public removeTestCasesFromSuiteUrl(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.removeTestCasesFromSuiteUrl(project, planId, suiteId, testCaseIds, (err: any, statusCode: number) => {
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

    /**
    * @param {TestInterfaces.SuiteCreateModel} testSuite
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    public createTestSuite(
        testSuite: TestInterfaces.SuiteCreateModel,
        project: string,
        planId: number,
        suiteId: number
        ): Q.Promise<TestInterfaces.TestSuite[]> {
    
        var deferred = Q.defer<TestInterfaces.TestSuite[]>();

        this.api.createTestSuite(testSuite, project, planId, suiteId, (err: any, statusCode: number, Suite: TestInterfaces.TestSuite[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suite);
            }
        });

        return <Q.Promise<TestInterfaces.TestSuite[]>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    public deleteTestSuite(
        project: string,
        planId: number,
        suiteId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteTestSuite(project, planId, suiteId, (err: any, statusCode: number) => {
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

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {boolean} includeChildSuites
    */
    public getTestSuiteById(
        project: string,
        planId: number,
        suiteId: number,
        includeChildSuites?: boolean
        ): Q.Promise<TestInterfaces.TestSuite> {
    
        var deferred = Q.defer<TestInterfaces.TestSuite>();

        this.api.getTestSuiteById(project, planId, suiteId, includeChildSuites, (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suite);
            }
        });

        return <Q.Promise<TestInterfaces.TestSuite>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {boolean} includeSuites
    * @param {number} skip
    * @param {number} top
    */
    public getTestSuitesForPlan(
        project: string,
        planId: number,
        includeSuites?: boolean,
        skip?: number,
        top?: number
        ): Q.Promise<TestInterfaces.TestSuite[]> {
    
        var deferred = Q.defer<TestInterfaces.TestSuite[]>();

        this.api.getTestSuitesForPlan(project, planId, includeSuites, skip, top, (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suites);
            }
        });

        return <Q.Promise<TestInterfaces.TestSuite[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.SuiteUpdateModel} suiteUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    public updateTestSuite(
        suiteUpdateModel: TestInterfaces.SuiteUpdateModel,
        project: string,
        planId: number,
        suiteId: number
        ): Q.Promise<TestInterfaces.TestSuite> {
    
        var deferred = Q.defer<TestInterfaces.TestSuite>();

        this.api.updateTestSuite(suiteUpdateModel, project, planId, suiteId, (err: any, statusCode: number, Suite: TestInterfaces.TestSuite) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suite);
            }
        });

        return <Q.Promise<TestInterfaces.TestSuite>>deferred.promise;
    }

    /**
    * @param {number} testCaseId
    */
    public getSuitesByTestCaseId(
        testCaseId: number
        ): Q.Promise<TestInterfaces.TestSuite[]> {
    
        var deferred = Q.defer<TestInterfaces.TestSuite[]>();

        this.api.getSuitesByTestCaseId(testCaseId, (err: any, statusCode: number, Suites: TestInterfaces.TestSuite[]) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Suites);
            }
        });

        return <Q.Promise<TestInterfaces.TestSuite[]>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.BuildReference} build
    * @param {string} project - Project ID or project name
    * @param {string} sourceWorkflow
    * @param {TestInterfaces.BuildReference} buildToCompare
    */
    public queryFailureDetailsForBuild(
        build: TestInterfaces.BuildReference,
        project: string,
        sourceWorkflow: string,
        buildToCompare: TestInterfaces.BuildReference
        ): Q.Promise<TestInterfaces.TestFailuresAnalysis> {
    
        var deferred = Q.defer<TestInterfaces.TestFailuresAnalysis>();

        this.api.queryFailureDetailsForBuild(build, project, sourceWorkflow, buildToCompare, (err: any, statusCode: number, TestFailure: TestInterfaces.TestFailuresAnalysis) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(TestFailure);
            }
        });

        return <Q.Promise<TestInterfaces.TestFailuresAnalysis>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testRunId
    */
    public queryFailureDetailsForTestRun(
        project: string,
        testRunId: number
        ): Q.Promise<TestInterfaces.TestFailuresAnalysis> {
    
        var deferred = Q.defer<TestInterfaces.TestFailuresAnalysis>();

        this.api.queryFailureDetailsForTestRun(project, testRunId, (err: any, statusCode: number, TestFailure: TestInterfaces.TestFailuresAnalysis) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(TestFailure);
            }
        });

        return <Q.Promise<TestInterfaces.TestFailuresAnalysis>>deferred.promise;
    }

    /**
    * @param {TestInterfaces.TestSettings} testSettings
    * @param {string} project - Project ID or project name
    */
    public createTestSettings(
        testSettings: TestInterfaces.TestSettings,
        project: string
        ): Q.Promise<number> {
    
        var deferred = Q.defer<number>();

        this.api.createTestSettings(testSettings, project, (err: any, statusCode: number, TestSetting: number) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(TestSetting);
            }
        });

        return <Q.Promise<number>>deferred.promise;
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testSettingsId
    */
    public deleteTestSettings(
        project: string,
        testSettingsId: number
        ): Q.Promise<void> {
    
        var deferred = Q.defer<void>();

        this.api.deleteTestSettings(project, testSettingsId, (err: any, statusCode: number) => {
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

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testSettingsId
    */
    public getTestSettingsById(
        project: string,
        testSettingsId: number
        ): Q.Promise<TestInterfaces.TestSettings> {
    
        var deferred = Q.defer<TestInterfaces.TestSettings>();

        this.api.getTestSettingsById(project, testSettingsId, (err: any, statusCode: number, TestSetting: TestInterfaces.TestSettings) => {
            if (err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(TestSetting);
            }
        });

        return <Q.Promise<TestInterfaces.TestSettings>>deferred.promise;
    }

}
